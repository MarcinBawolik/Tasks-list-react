import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    setAllDone,
    toggleHideDone,
    fetchExampleTasks,
} from "../tasksSlice";
import { StyledButtons, FunctionalButton } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <StyledButtons>
            <FunctionalButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </FunctionalButton>
            {tasks.length > 0 && (
                <>
                    <FunctionalButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </FunctionalButton>
                    <FunctionalButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </FunctionalButton>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;
