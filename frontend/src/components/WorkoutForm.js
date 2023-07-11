import { useState } from "react";
const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = { title, load, reps }

        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log("New workout Added", json);
        }
        if (!response.ok) {
            setError(json.error);
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Work Out</h3>
            <label >Excersize Title: </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label >Excersize Load: </label>
            <input type="number" onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label >Excersize Reps: </label>
            <input type="number" onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Add Workout</button>

            {error && <div className="error">lol</div>}
        </form>
    )
}

export default WorkoutForm