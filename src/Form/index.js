import "./style.css";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskConetent, setNewTaskContent] = useState("");
    const inputRef = useRef(null)

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskConetent.trim() === "") {
            return;
        }

        addNewTask(newTaskConetent.trim());
        setNewTaskContent("");
    };

    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskConetent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button onClick={focusInput} className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;