import "./style.css";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <ul className="tasks ">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${task.done && hideDone
                    ? "tasks__item--hidden"
                    : ""}`
                }
            >
                <button
                    className="button__done"
                    onClick={() => toggleTaskDone(task.id)}
                >
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