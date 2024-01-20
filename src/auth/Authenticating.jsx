import React from "react";
import { Box } from "@mui/material";
import { BeatLoader } from "react-spinners";
function Authenticating() {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <BeatLoader color="#0F9D58" />
    </Box>
  );
}

export default Authenticating;
