import React from "react";
import { Snackbar, Alert } from "@mui/material";
function ErrorAlert({ error, close }) {
  return (
    <Snackbar
      open={error ? true : false}
      onClose={close}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      autoHideDuration={8000}
    >
      <Alert onClose={close} severity="error" variant="filled">
        {error}
      </Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
