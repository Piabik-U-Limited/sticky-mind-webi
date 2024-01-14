import React from "react";
import { Snackbar, Alert } from "@mui/material";
function SuccessAlert({ open, close, message }) {
  return (
    <Snackbar
      open={message ? true : false}
      autoHideDuration={8000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={close}
    >
      <Alert
        severity="success"
        variant="outlined"
        onClose={close}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.32)",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SuccessAlert;
