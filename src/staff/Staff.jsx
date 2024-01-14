import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import StaffCard from "../components/StaffCard";
import LoadingComponent from "../components/LoadingComponent";
import NoStaffFound from "../components/NoStaffFound";
import useStaff from "../api/hooks/useStaff";
function Staff() {
  const userList = useSelector((state) => state.staff.userList);
  const loading = useSelector((state) => state.staff.loading);
  const { handleFetch } = useStaff();

  const loadingRender = {
    true: <LoadingComponent />,
    false: (
      <>
        <Grid container spacing={2}>
          <Typography> Items here</Typography>
        </Grid>
      </>
    ),
  }[loading];
  return <>{loadingRender}</>;
}

export default Staff;
