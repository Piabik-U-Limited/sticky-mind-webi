import React, { useEffect } from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
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
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function DrawerComponent({ drawerWidth, toggleDrawer, theme }) {
  const navigate = useNavigate();
  const [active, setActive] = React.useState("Dashboard");

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
      link: "/products",
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
      </List>
    </div>
  );
}

export default DrawerComponent;
