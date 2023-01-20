import "./style.css";

const Tasks = ({tasks, hideDone}) => (
    <ul className="tasks ">
        {tasks.map(task => (
            <li
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
                <button className="button__remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul>

);

export default Tasks;