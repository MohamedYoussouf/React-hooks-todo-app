import React from 'react';

function Todo({todo, index, completeTodo, removeTodo}) {
    const styles = todo.isCompleted? {textDecoration:'line-through',color:'#bbb'}:null;
    return (
        <div 
            style={styles}
            className="todo">
            {todo.text}
            <div>
                <button onClick={()=>completeTodo(index)}>Complete</button>
                <button className="remove" onClick={()=>removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default Todo