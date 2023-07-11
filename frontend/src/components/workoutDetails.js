const WorkoutDetails = ({ workout }) => {
    const handleDelete = async () => {

    }
    return (
        <div className="workout-details">
            <button onClick={handleDelete}>Delete</button>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>

        </div>
    )
}

export default WorkoutDetails