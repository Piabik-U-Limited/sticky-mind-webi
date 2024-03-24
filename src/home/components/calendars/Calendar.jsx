import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { DateRangeCalendar } from "@mui/x-date-pickers/DateRangeCalendar";
import { Grid, Box, Card } from "@mui/material";
import { StickyCard } from "../../../components";
import { useSelector } from "react-redux";

export default function Calendar() {
  const { tasks } = useSelector((state) => state.tasks);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={7}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateRangeCalendar", "DateRangeCalendar"]}
          >
            <DemoItem>
              <DateCalendar />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <Box sx={{ height: "100%", padding: 1 }}>
          Tasks
          <Grid>
            {tasks.map((task, index) => (
              <StickyCard
                key={index}
                title={task?.title}
                content={task?.description}
                status={task?.status}
              />
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
