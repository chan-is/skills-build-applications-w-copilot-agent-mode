import { useEffect, useState } from 'react'

import { fetchResource } from '../api'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    fetchResource('/api/users/')
      .then((records) => {
        if (isActive) {
          setUsers(records)
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
        <p className="eyebrow">Profiles</p>
        <h1>Users</h1>
      </div>
      <div className="data-grid">
        {users.map((user) => (
          <article className="data-card" key={user._id ?? user.username}>
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
            <dl>
              <dt>Role</dt>
              <dd>{user.role}</dd>
              <dt>Team</dt>
              <dd>{user.teamName}</dd>
              <dt>Goal</dt>
              <dd>{user.fitnessGoal}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Users