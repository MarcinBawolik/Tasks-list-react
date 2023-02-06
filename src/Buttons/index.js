import React from "react";
import { StyledButtons, FunctionalButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <FunctionalButton
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </FunctionalButton>
                <FunctionalButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </FunctionalButton>
            </>
        )}
    </StyledButtons>
);

export default Buttons;
