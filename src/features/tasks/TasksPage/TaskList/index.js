import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, Button, Link } from "./styled";

const TaskList = () => {
const location = useLocation();
const query = (new URLSearchParams(location.search)).get(searchQueryParamName)

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔️" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;