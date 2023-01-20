import "./style.css";

const Tasks = ({tasks, hideDone, removeTasks}) => (
    <ul className="tasks ">
        {tasks.map(task => (
            <li
            key={task.id}
                className={`tasks__item ${task.done && hideDone
                        ? "tasks__item--hidden"
                        : ""}`
                }
            >
                <button className="button__done">
                    {task.done ? "✔️" : ""}
                </button>
                <span className={`tasks__hide ${task.done ? " tasks__item--done" : ""}`}>
                    {task.content}
                </span>
                <button
                 className="button__remove"
                 onClick={() => removeTasks(task.id)}
                 >
                    🗑️
                </button>
            </li>
        ))}
    </ul>

);

export default Tasks;