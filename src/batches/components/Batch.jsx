import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";

import { Folder, Delete, Edit } from "@mui/icons-material";

export default function Batch({ batch }) {
  return (
    <List sx={{ padding: 1 }}>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="delete">
              <Edit />
            </IconButton>
            {/* <IconButton edge="end" aria-label="edit">
              <Delete />
            </IconButton> */}
          </>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <Folder />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={batch?.name}
          secondary={`UGX. ${batch?.totalInvestment} Invested`}
        />
      </ListItem>
      <Divider />
    </List>
  );
}
