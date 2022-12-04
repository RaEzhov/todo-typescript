import React, {useState} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            props.onAdd(title);
            setTitle("");
        }
    };

    return (
        <div className="input-field">
            <input
                value={title}
                type="text"
                id="title"
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    );
};

export default TodoForm;
