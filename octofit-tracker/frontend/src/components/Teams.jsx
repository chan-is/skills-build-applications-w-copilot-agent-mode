import { useEffect, useState } from 'react'

import { fetchResource } from '../api'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    fetchResource('/api/teams/')
      .then((records) => {
        if (isActive) {
          setTeams(records)
        }
      })
      .catch((apiError) => {
        if (isActive) {
          setError(apiError.message)
        }
      })

    return () => {
      isActive = false
    }
  }, [])

  if (error) {
    return <p className="alert alert-warning">{error}</p>
  }

  return (
    <section className="content-panel">
      <div className="section-heading">
        <p className="eyebrow">Teams</p>
        <h1>OctoFit Squads</h1>
      </div>
      <div className="data-grid">
        {teams.map((team) => (
          <article className="data-card" key={team._id ?? team.name}>
            <h2>{team.name}</h2>
            <p>{team.city}</p>
            <dl>
              <dt>Captain</dt>
              <dd>{team.captain}</dd>
              <dt>Members</dt>
              <dd>{team.memberCount}</dd>
              <dt>Weekly Minutes</dt>
              <dd>{team.weeklyMinutes}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Teams