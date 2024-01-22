import * as React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";

export default function EmailSent() {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#0F9D58", height: "70px", width: "70px" }}>
        <EmailOutlined fontSize="large" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Email Sent
      </Typography>

      <Box component="form" sx={{ mt: 1 }} minWidth={"32%"}>
        <Typography  textAlign={"center"}>
          We have sent a password reset link to your email
        </Typography>
        <Typography textAlign={"center"}>
          Check your inbox, to see the next steps
          <br /> Remember to check spam folder
          if you don't see it
        </Typography>
      </Box>
    </Box>
  );
}
