const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiOrigin = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export const apiBaseUrl = `${apiOrigin}/api`

export function normalizeRecords(responseBody) {
  if (Array.isArray(responseBody)) {
    return responseBody
  }

  const candidates = [
    responseBody?.data,
    responseBody?.results,
    responseBody?.items,
    responseBody?.docs,
    responseBody?.data?.results,
    responseBody?.data?.items,
    responseBody?.data?.docs,
  ]

  return candidates.find(Array.isArray) ?? []
}

export async function fetchResource(endpointPath) {
  const endpointUrl = endpointPath.startsWith('http') ? endpointPath : `${apiOrigin}${endpointPath}`
  const response = await fetch(endpointUrl)

  if (!response.ok) {
    throw new Error(`Unable to load ${endpointUrl}: ${response.status}`)
  }

  const body = await response.json()
  return normalizeRecords(body)
}