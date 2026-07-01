import { useEffect, useState } from 'react'

import { fetchResource } from '../api'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    fetchResource('workouts')
      .then((records) => {
        if (isActive) {
          setWorkouts(records)
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
        <p className="eyebrow">Training</p>
        <h1>Workout Suggestions</h1>
      </div>
      <div className="data-grid">
        {workouts.map((workout) => (
          <article className="data-card" key={workout._id ?? workout.title}>
            <h2>{workout.title}</h2>
            <p>{workout.focusArea} · {workout.difficulty}</p>
            <dl>
              <dt>Duration</dt>
              <dd>{workout.durationMinutes} min</dd>
              <dt>Goal</dt>
              <dd>{workout.recommendedForGoal}</dd>
              <dt>Exercises</dt>
              <dd>{workout.exercises?.join(', ')}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Workouts