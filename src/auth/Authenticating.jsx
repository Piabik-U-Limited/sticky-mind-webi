import React from "react";
import { Box, Typography } from "@mui/material";
import { BeatLoader, ScaleLoader } from "react-spinners";
function Authenticating() {
  return (
    <Box
      sx={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Checking for permissions</Typography>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeatLoader color="#0F9D58" size={50} />
      </Box>
    </Box>
  );
}

export default Authenticating;
