import React from "react";
import { Box, Card, CardContent } from "@mui/material";

import { DotLoader } from "react-spinners";
const LoadingComponent = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignSelf="center"
      height="50vh"
    >
      <Card sx={{ width: "100%", justifyContent: "space-evenly" }}>
        <CardContent>
          <DotLoader color="#0F9D58" size={100} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoadingComponent;
