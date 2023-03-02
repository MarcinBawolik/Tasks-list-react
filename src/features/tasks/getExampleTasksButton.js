import { fetchExampleTasks } from "./tasksSlice"
import { useDispatch } from "react-redux"
import FunctionalButton from "./FunctionalButton";



const GetExampleTasksButton = () => {
    const dispatch = useDispatch();
    return <FunctionalButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </FunctionalButton>
};

export default GetExampleTasksButton;