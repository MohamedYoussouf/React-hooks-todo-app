import React,{useState} from 'react';
import './App.css';

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
    const [todos,setTodos] = useState([
        {
            text: 'Todo 1',
            isCompleted: false
        },
        {
            text: 'Todo 2',
            isCompleted: false
        },
        {
            text: 'Todo 3',
            isCompleted: false
        },
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className="app">
            <h1 className="title">Todo App</h1>
            <div className="todo-list">
                <TodoForm addTodo={addTodo}/>
                {todos.map((todo, index)=>(
                    <Todo 
                        key={index} 
                        index={index} 
                        todo={todo} 
                        completeTodo={completeTodo}
                        removeTodo={removeTodo} />
                ))}
            </div>
        </div>
    )
}

export default App