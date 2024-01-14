import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function FormModal(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
}

export default FormModal;
