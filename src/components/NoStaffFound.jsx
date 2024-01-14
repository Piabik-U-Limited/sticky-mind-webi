import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

const NoStaffFound = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignStaff="center"
      height="50vh"
    >
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Box textAlign="center" justifyContent="center" alignStaff="center">
            <SentimentVeryDissatisfied fontSize="large" color="error" />
            <Typography variant="h6" color="textSecondary">
              Oops! {props.message}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0F9D58",
                ":hover": {
                  backgroundColor: "#0F9D58c0",
                },
              }}
              onClick={props.refresh}
            >
              Retry
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NoStaffFound;
