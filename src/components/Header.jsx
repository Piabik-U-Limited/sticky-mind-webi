import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Menu, PersonAddAlt } from "@mui/icons-material";
import AccountMenu from "./ActionMenu";
import { useDispatch } from "react-redux";
import { toggleShowAddModal } from "../redux/slices/staffSlice";
function Header(props) {
  const dispatch = useDispatch();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        backgroundColor: props.themeMode === "light" && "white",
        color: "black",
        height: "70px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.toggleDrawer}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu sx={{ color: "#0F9D58" }} />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" color="#0F9D58">
          {greeting}
        </Typography>
        <div style={{ display: "flex" }}>
          <AccountMenu />
          <Button
            sx={{
              backgroundColor: "#0F9D58",
              ":hover": { backgroundColor: "#0F9D58c0" },
            }}
            endIcon={<PersonAddAlt />}
            variant="contained"
            onClick={() => dispatch(toggleShowAddModal())}
          >
            Add new Stock
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
