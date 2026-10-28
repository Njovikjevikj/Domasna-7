import React from 'react';
import { useEffect, useState } from 'react';

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(result => result.json())
            .then(json => setTodos(json))
            .catch(err => alert(err));
    }, []);

    // Hanler za promena na checkbox
    const handleCheckboxChange = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div id='todos'>
            <h2>Todos List</h2>
            {todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} style={{ marginBottom: '8px' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleCheckboxChange(todo.id)}
                                />
                                <span
                                    style={{
                                        backgroundColor: todo.completed ? 'yellow' : 'transparent',
                                        marginLeft: '8px',
                                        padding: '2px 4px'
                                    }}
                                >
                                    {todo.title}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2>Loading Todos ...</h2>
            )}
        </div>
    );
};
