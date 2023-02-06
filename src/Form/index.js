import { useState, useRef } from "react";
import { StyledForm, FormInput, FormButton } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                value={newTaskConetent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton
                 onClick={focusInput}
            >
                Dodaj zadanie
            </FormButton>
        </StyledForm>
    )
};

export default Form;