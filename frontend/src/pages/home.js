import { useEffect, useState } from "react";

//importing workoutDetails Component

import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workout/')
            const json = await response.json()
            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkout();
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;