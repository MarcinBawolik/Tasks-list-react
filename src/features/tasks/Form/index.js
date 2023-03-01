import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, FormInput, FormButton } from "./styled";

const Form = () => {
    const [newTaskConetent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

const trimmedNewTaskContent = newTaskConetent.trim();

        if (!trimmedNewTaskContent) {
            return;
        };

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <FormInput
                autoFocus
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
    );
};

export default Form;