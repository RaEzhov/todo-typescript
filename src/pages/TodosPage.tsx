import React, {useEffect, useState} from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>(JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        };

        setTodos(prev => [newTodo, ...prev]);
    };

    const toggleHandler = (id_: number) => setTodos(prev => prev.map(({id, completed, title}) => {
        return {completed: id === id_ ? !completed : completed, id: id, title: title};
    }));

    const removeHandler = (id: number) => {
        const confirmed = confirm('Вы уверены, что хотите удалить задачу?');
        if (confirmed) {
            setTodos(prev => prev.filter(todo => todo.id !== id));
        }
    };
    return (<>
        <div className="container">
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </div>
    </>);
};

export default TodosPage;
