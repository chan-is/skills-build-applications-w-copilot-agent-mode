const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

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

export async function fetchResource(resourceName) {
  const response = await fetch(`${apiBaseUrl}/${resourceName}/`)

  if (!response.ok) {
    throw new Error(`Unable to load ${resourceName}: ${response.status}`)
  }

  const body = await response.json()
  return normalizeRecords(body)
}