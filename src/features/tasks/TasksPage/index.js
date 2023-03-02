
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useLocation } from "react-router-dom";
import Search from "./Search";

function  TasksPage() {
  const location = useLocation();

  return (
    <Container>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={ <Form/> }
      />
      <Section
        title="Wyszukiwarka"
        body={ <Search /> }
      />
      <Section
        title="Lista zadań"
        body={ <TaskList/> }
        extraHeaderContent={ <Buttons/> }
      />
    </Container>
  );
}

export default TasksPage;
