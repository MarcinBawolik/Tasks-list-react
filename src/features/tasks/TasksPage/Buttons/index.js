import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setAllDone,
    toggleHideDone,
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
} from "../../tasksSlice";
import { StyledButtons } from "./styled";
import FunctionalButton from "../../FunctionalButton";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <FunctionalButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </FunctionalButton>
                    <FunctionalButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </FunctionalButton>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;
