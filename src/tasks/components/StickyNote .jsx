import React from "react";
import { Paper, Typography, Divider, Card } from "@mui/material";
import { useSelector } from "react-redux";
import "./styles/sticky-note.css";
function StickyNote({ title, description, status }) {
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <Card
      elevation={3}
      className="sticky-note"
      sx={{ borderBottomRightRadius: 20 }}
    >
      <div
        className="pin"
        style={{
          borderBottom:
            themeMode === "light" ? "15px solid #fff" : "15px solid #2e2a2a",
        }}
      />
      <Typography variant="h6" sx={{ fontSize: 15 }}>
        {title}
      </Typography>
      <Divider />
      <Typography variant="body2">{description}</Typography>
    </Card>
  );
}

export default StickyNote;
