import { useEffect, useState } from 'react'

import { fetchResource } from '../api'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    fetchResource(activitiesEndpoint)
      .then((records) => {
        if (isActive) {
          setActivities(records)
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
        <p className="eyebrow">Activity Log</p>
        <h1>Recent Activities</h1>
      </div>
      <div className="data-grid">
        {activities.map((activity) => (
          <article className="data-card" key={activity._id ?? `${activity.username}-${activity.activityDate}`}>
            <h2>{activity.activityType}</h2>
            <p>{activity.username}</p>
            <dl>
              <dt>Duration</dt>
              <dd>{activity.durationMinutes} min</dd>
              <dt>Calories</dt>
              <dd>{activity.caloriesBurned}</dd>
              <dt>Notes</dt>
              <dd>{activity.notes}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Activities