import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    // const initialState = [
    //     {id: uuid(), task: "Smile!"}, 
    //     {id: uuid(), task: "Say Hi to yourself."}
    // ]
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialState);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }

    const removeTodo = (todoId) => {
        setTodos(todos => [...todos.filter(todo => todo.id !== todoId)])
    }

    const editTodo = (todoId, editedTask) => {
        setTodos(todos => 
            [...todos.map(todo => 
                (todo.id === todoId) ? { id: todoId, task: editedTask} : todo
            )])
    }

    const changeCompleteStatus = (todoId) => {
        setTodos(todos => 
            [...todos.map(todo => 
                (todo.id === todoId) ? {...todo, completed: !todo.completed} : todo)])
    }

    localStorage.setItem("todos", JSON.stringify(todos)); 

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>  
            <h3>My Todo List</h3>          
            {todos.map(({id, task, completed}) => 
                <Todo 
                    key={id}
                    id={id}
                    task={task}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    completed={completed}
                    changeCompleteStatus={changeCompleteStatus}
                />
            )}                   
        </div>
    )
}


export default TodoList;