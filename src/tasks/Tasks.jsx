import React, { useEffect } from "react";
import { Grid, Drawer, IconButton } from "@mui/material";
import { StickyNote, TaskAddButton } from "./components";
import { AddTaskForm } from "../forms";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowAddTaskModal } from "../redux/slices/tasks.slice";
import { Close } from "@mui/icons-material";
import useTasks from "../api/hooks/useTasks";
function Tasks() {
  const dispatch = useDispatch();
  const { showAddTaskModal, tasks } = useSelector((state) => state.tasks);

  const { handleFetchTasks } = useTasks();

  useEffect(() => {
    handleFetchTasks();
  }, []);
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={12} md={4}>
        <TaskAddButton add={() => dispatch(toggleShowAddTaskModal())} />
      </Grid>
      {tasks.map((task, index) => (
        <Grid item xs={12} sm={12} md={4} key={index}>
          <StickyNote key={index} {...task} />
        </Grid>
      ))}

      <Drawer
        anchor={"right"}
        open={showAddTaskModal}
        onClose={() => dispatch(toggleShowAddTaskModal())}
        sx={{
          padding: 10,
          //width: 600,
        }}
      >
        <IconButton sx={{ position: "absolute", right: 8, top: 4 }}>
          <Close onClick={() => dispatch(toggleShowAddTaskModal())} />
        </IconButton>
        <AddTaskForm />
      </Drawer>
    </Grid>
  );
}

export default Tasks;
