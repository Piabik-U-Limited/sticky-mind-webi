import React from "react";
import TreeView from "./TreeView";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStaff from "../api/hooks/useStaff";
import NoStaffFound from "../components/NoStaffFound";
function StaffHierarchy() {
  const { fetchHierarchy } = useStaff();
  const staffMembers = useSelector((state) => state.staff.staffMembers);
  const staffHierarchy = useSelector((state) => state.staff.staffHierarchy);

  return (
    <Container>
      <Typography>Dashbord here</Typography>
      {/* Render the TreeView and pass the staffHierachy data as a prop */}
    </Container>
  );
}

export default StaffHierarchy;
