import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, todos, setTodos }) => {
    const deleteTodoHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    };

    const completeTodoHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <li className="todo-item">{todo.text}</li>
            <button
                className="complete-btn"
                onClick={completeTodoHandler}
            >
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
                className="trash-btn"
                onClick={deleteTodoHandler}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default TodoItem;
