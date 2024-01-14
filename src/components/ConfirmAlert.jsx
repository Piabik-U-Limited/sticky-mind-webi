import React from "react";
import { Button, Dialog, DialogActions } from "@mui/material";
import { Delete, Close } from "@mui/icons-material";
import { DialogContent, DialogContentText } from "@mui/material";

import { DialogTitle, Slide } from "@mui/material";
import { PropagateLoader, DotLoader } from "react-spinners";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ConfirmAlert({ action, open, message, close, performing }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
    >
      <DialogTitle>{"Confirm Delete"}</DialogTitle>
      <DialogContent
        dividers={true}
        sx={performing && { padding: 5, paddingX: 20 }}
      >
        {performing ? (
          <DotLoader color="#72c1c6" size={20} />
        ) : (
          <DialogContentText>
            <h3> {message}</h3> <p>This action cannot be reversed!</p>
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={action}
          disabled={performing}
          variant="contained"
          sx={{ background: "tomato", ":hover": { background: "red" } }}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmAlert;
