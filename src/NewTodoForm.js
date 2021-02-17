import React, { useState } from 'react';
import './NewTodoForm.css'

const NewTodoForm = ({addTodo}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ task: task});
        setTask("");
    }

    const handleChange = (e) => { 
        setTask(e.target.value);
    }
    return (
        <div className="NewTodoForm">
            <h3>ADD NEW TODO</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    value={task}
                    onChange={handleChange}
                    required
                />
                <button>Add</button>
            </form>
        </div>
    )
}


export default NewTodoForm;