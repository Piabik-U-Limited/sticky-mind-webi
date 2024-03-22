import React from "react";
import { Grid, Drawer } from "@mui/material";
import { StickyNote, TaskAddButton } from "./components";
import { AddTaskForm } from "../forms";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowAddTaskModal } from "../redux/slices/tasks.slice";
function Tasks() {
  const [tasks, setTasks] = React.useState([
    {
      title: "Designing the development process",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      status: "OVERDUE",
    },
    {
      title: "Meeting with CEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      status: "DONE",
    },
    {
      title: "Requirements analysis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      status: "INPROGRESS",
    },
    {
      title: "Building the development team, the first time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      status: "TODO",
    },
    {
      title: "Setting up the development environment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      status: "TODO",
    },
  ]);
  const dispatch = useDispatch();
  const { showAddTaskModal } = useSelector((state) => state.tasks);
  return (
    <Grid container spacing={2}>
      {tasks.map((task, index) => (
        <Grid item xs={12} sm={12} md={4} key={index}>
          <StickyNote key={index} {...task} />
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={4}>
        <TaskAddButton add={() => dispatch(toggleShowAddTaskModal())} />
      </Grid>
      <Drawer
        anchor={"left"}
        open={showAddTaskModal}
        onClose={() => dispatch(toggleShowAddTaskModal())}
        sx={{
          padding: 10,
        }}
      >
        <AddTaskForm />
      </Drawer>
    </Grid>
  );
}

export default Tasks;
