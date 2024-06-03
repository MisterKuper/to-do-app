import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    return (
        <form>
            <input
                type="text"
                className="todo-input"
                value={inputText}
                onChange={inputTextHandler}
            />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <div className="select">
                <select
                    name="todos"
                    className="filter-todo"
                    onChange={statusHandler}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default TodoForm;
