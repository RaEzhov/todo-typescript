import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: Array<ITodo>,
    onToggle: (id: number) => void,
    onRemove: (id: number) => void
};

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => (todos.length
        ? <ul>
            {todos.map(({id, title, completed}) => {
                const classes = ['todo'];

                if (completed) {
                    classes.push('completed');
                }

                return (<li key={id} className={classes.join(' ')}>
                    <label>
                        <input type="checkbox" onChange={() => onToggle(id)} checked={completed}/>
                        <span>{title}</span>
                        <i className="material-icons red-text" onClick={event => {
                            event.preventDefault();
                            onRemove(id);
                        }}>delete</i>
                    </label>
                </li>);
            })}
        </ul>
        : <p>No tasks.</p>
);

export default TodoList;
