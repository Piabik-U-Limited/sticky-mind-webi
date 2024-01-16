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
  Settings,
  Percent,
  Category,
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
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/",
    },

    {
      name: "Manage Sales",
      icon: <Percent />,
      link: "/sales",
    },
    {
      name: "Categories",
      icon: <Category />,
      link: "/categories",
    },
    {
      name: "Manage Products",
      icon: <Store />,
      link: "/products",
    },
    {
      name: "Invetory Settings",
      icon: <Settings />,
      link: "/settings",
    },
  ];
  return (
    <div>
      {/* This is the container of the Logo on the Drawer/Sidebar */}
      <Toolbar style={{ backgroundColor: "#0F9D58", margin: 0 }}>
        <div className="topbar-logo">
          <Typography fontWeight="bold">Stock Manager</Typography>
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
                      backgroundColor: "#0F9D58",
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
                          ? { color: "#0F9D58" }
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
                          ? { color: "#0F9D58" }
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
