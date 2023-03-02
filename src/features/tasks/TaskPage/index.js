import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const params = useParams();
    const task = useSelector(state => getTaskById(state, params.id));

    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Nie znaleziono zadania :("}
                body={
                <><strong>Ukończono:</strong>{" "}
                {task.done ? "Tak" : "Nie" }</>
            }
            />
        </Container>
    );
}

export default TaskPage;
