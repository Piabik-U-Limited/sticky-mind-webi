import React, { useEffect } from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  List,
  ListItem,
  IconButton,
  Chip,
} from "@mui/material";
import useTheme from "../api/hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import {
  Store,
  Dashboard,
  Percent,
  Category,
  Home,
  Task,
  Notes,
  Person,
  Settings,
  Brightness4,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { changeMode } from "../redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
function DrawerComponent({ drawerWidth, toggleDrawer, theme }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = React.useState("Dashboard");
  const location = useLocation();

  const { themeMode, toggleTheme } = useTheme();
  const handleChange = (itemName) => {
    setActive(itemName);
    toggleDrawer();
  };

  const drawerItems = [
    {
      name: "Home",
      icon: <Home />,
      link: "/",
    },

    {
      name: "Categories",
      icon: <Category />,
      link: "/categories",
    },
    {
      name: "Tasks",
      icon: <Task />,
      link: "/tasks",
    },
    {
      name: "Notes",
      icon: <Notes />,
      link: "/sales",
    },

    {
      name: "Settings",
      icon: <Settings />,
      link: "/settings",
    },

    {
      name: "Profile",
      icon: <Person />,
      link: "/profile",
    },
  ];
  return (
    <div>
      {/* This is the container of the Logo on the Drawer/Sidebar */}
      <Toolbar style={{ backgroundColor: "#00C49F", margin: 0 }}>
        {" "}
        <div className="topbar-logo">
          <Typography fontWeight="bold">Sticky Mind</Typography>
        </div>
      </Toolbar>

      <List sx={{ padding: 1 }}>
        {drawerItems.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <Link to={item.link} className="link">
                <ListItem
                  disablePadding
                  onClick={() => handleChange(item.name)}
                  sx={
                    active === item.name && {
                      backgroundColor: "#00C49F",
                      borderRadius: 1,
                    }
                  }
                >
                  <ListItemButton>
                    <ListItemIcon
                      style={
                        active === item.name
                          ? { color: "#fff" }
                          : theme === "light"
                          ? { color: "#00C49F" }
                          : { color: "lightgray" }
                      }
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      style={
                        active === item.name
                          ? { color: "#fff" }
                          : theme === "light"
                          ? { color: "#00C49F" }
                          : { color: "lightgray" }
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </React.Fragment>
          );
        })}
        <Chip
          variant="filled"
          deleteIcon={<Brightness4 />}
          onDelete={toggleTheme}
          label={
            themeMode === "light"
              ? "Change to dark mode"
              : "Change to light mode"
          }
          labelStyle={{ color: "#00C49F" }}
        />
      </List>
    </div>
  );
}

export default DrawerComponent;
