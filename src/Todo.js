import React, {useState} from 'react';
import './Todo.css'

const Todo = ({ id, task, removeTodo, editTodo, completed = false, changeCompleteStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    // const [isCompleted, setIsCompleted] = useState(completed);

    const handleRemove = () => {
        removeTodo(id);
    }

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleChange = (e) => {
        setEditedTask(e.target.value);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTodo(id, editedTask);
        setIsEditing(false);
    }

    const handleMarkCompleted = () => {
        // setIsCompleted(!isCompleted);
        changeCompleteStatus(id);
    }

    const editForm = () => {
        if (isEditing) return (
            <form onSubmit={handleEditSubmit}>
                <lable htmlFor="task">Edit:  </lable>
                <input
                    id="editedTask"
                    name="editedTask"
                    type="text"
                    value={editedTask}
                    onChange={handleChange}
                    required
                />
                <button className="editSubmitBtn">Submit</button>
            </form>
        )
    }

    return (
        <div className="Todo">
            <button
                className="Todo-deleteBtn"
                onClick={ handleRemove }
            >
                X
            </button>
            <button
                className="Todo-editBtn"
                onClick={toggleEdit}
            >
                Edit
                
            </button>
            <button               
                className={completed ? "completed Todo-completeBtn" : "Todo-completeBtn"} 
                onClick={handleMarkCompleted}
            >
                {completed ? "Completed" : "Mark as completed"}
                 
            </button>
            <p 
                className="Todo-task"
                style={completed ? {"text-decoration" : "line-through"} : {}}
            >
                {task}
            </p>
            {editForm()}
            <hr></hr>
        </div>
    );
}

export default Todo;