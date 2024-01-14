import React from "react";
import { List, Grid, Card, Typography, IconButton } from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForward from "@mui/icons-material/ArrowForward";

const TreeView = ({ data }) => {
  const [open, setOpen] = React.useState([]);

  const handleClick = (item) => {
    if (open.includes(item)) {
      setOpen(open.filter((i) => i !== item));
    } else {
      setOpen([...open, item]);
    }
  };

  const renderTree = (nodes) => (
    <List sx={{ width: "100%" }}>
      {nodes.map((node) => (
        <div key={node.id}>
          <Card onClick={() => handleClick(node.id)} sx={{ padding: 2 }}>
            <Typography sx={{ fontSize: "13px" }}>{node.role} </Typography>
            <Typography sx={{ fontSize: "13px" }}>{node.name} </Typography>
            {node.subordinates && node.subordinates.length > 0 && (
              <>
                {open.includes(node.id) ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </>
            )}
          </Card>
          {open.includes(node.id) &&
            node.subordinates &&
            node.subordinates.length > 0 && (
              <Grid container spacing={2}>
                {node.subordinates.map((subordinate) => (
                  <Grid item key={subordinate.id}>
                    <ArrowForward style={{ transform: "rotate(-90deg)" }} />
                    {renderTree([subordinate])}
                  </Grid>
                ))}
              </Grid>
            )}
        </div>
      ))}
    </List>
  );

  return renderTree(data);
};

export default TreeView;
