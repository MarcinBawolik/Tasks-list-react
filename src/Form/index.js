import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskConetent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskConetent.trim());
        setNewTaskContent("");
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskConetent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;