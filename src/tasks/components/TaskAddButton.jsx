import React from "react";
import { Paper, Typography, Divider, Card, Box } from "@mui/material";
import { useSelector } from "react-redux";
import "./styles/sticky-note.css";
import { AddTask } from "@mui/icons-material";

function TaskAddButton(props) {
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <Box
      elevation={3}
      className="add-task"
      sx={{ borderBottomRightRadius: 20, justifyContent: "center" }}
      onClick={props.add}
    >
      <Typography variant="h6">Add Task</Typography>
      <AddTask sx={{ fontSize: 40, alignSelf: "center" }} />
    </Box>
  );
}

export default TaskAddButton;
