import Form from "../../features/tasks/Form";
import TaskList from "../../features/tasks/TaskList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useState } from "react";
import { useTasks } from "../../useTasks"

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };
  
  const {
    tasks,
    removeTasks,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <Container>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTasks={removeTasks}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />

    </Container>
  );
}

export default Tasks;