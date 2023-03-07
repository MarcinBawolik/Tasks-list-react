import { fetchExampleTasks, selectLoading } from "./tasksSlice"
import { useDispatch, useSelector } from "react-redux"
import FunctionalButton from "./FunctionalButton";



const GetExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading)
    return <FunctionalButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
        {
            loading ? "Ładowanie..." : "Pobierz przykładowe zadania"
        }
    </FunctionalButton>
};

export default GetExampleTasksButton;