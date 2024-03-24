import React from "react";
import { Paper, Typography, Chip, IconButton, Tooltip } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const StickyCard = ({ title, content, status }) => {
  return (
    <Tooltip title={content}>
      <Chip
        color={
          status === "TODO"
            ? "primary"
            : status === "INPROGRESS"
            ? "warning"
            : status === "OVERDUE"
            ? "error"
            : "success"
        }
        label={title}
        variant="filled"
        deleteIcon={<ChevronRight />}
        onDelete={() => {}}
        onClick={() => {}}
        sx={{
          marginTop: 1,
          boderRadius: 10,
        }}
      />
    </Tooltip>
  );
};

export default StickyCard;
