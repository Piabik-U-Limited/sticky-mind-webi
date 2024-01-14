import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, CssBaseline, Drawer, Paper } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import DrawerComponent from "./components/DrawerComponent";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleShowAddModal,
  setError,
  setMessage,
  toggleShowDeleteModal,
  toggleShowEditModal,
} from "./redux/slices/staffSlice";
import FormModal from "./components/FormModal";
import AddStaffForm from "./forms/AddStaffForm";
import EditStaffForm from "./forms/EditStaffForm";
import SuccessAlert from "./components/SuccessAlert";
import ErrorAlert from "./components/ErrorAlert";
import ConfirmAlert from "./components/ConfirmAlert";
import useStaff from "./api/hooks/useStaff";
const drawerWidth = 240;

function MainLayout(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const showAdd = useSelector((state) => state.staff.showAddModal);
  const showEdit = useSelector((state) => state.staff.showEditModal);
  const showDelete = useSelector((state) => state.staff.showDeleteModal);
  const deleting = useSelector((state) => state.staff.submitting);
  const successMessage = useSelector((state) => state.staff.message);
  const errorMessage = useSelector((state) => state.staff.error);
  const selectedStaff = useSelector((state) => state.staff.selectedStaff);
  const {
    handleSubmit,
    handleFetch,
    handleDelete,
    fetchHierarchy,
    handleEdit,
  } = useStaff();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //Fetch users
  useEffect(() => {
    handleFetch();
    fetchHierarchy();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",

        backgroundColor: themeMode === "light" && "#f2ebeb",
        minHeight: "100vh",
        backgroundImage: 'url("")',
      }}
    >
      <CssBaseline />
      {/* This is the AppBar */}
      <Header
        toggleDrawer={handleDrawerToggle}
        drawerWidth={drawerWidth}
        themeMode={themeMode}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "white",
              backgroundColor: themeMode === "light" && "white",
            },
          }}
        >
          <DrawerComponent
            drawerWidth={drawerWidth}
            toggleDrawer={handleDrawerToggle}
            logout={handleLogout}
          />
        </Drawer>
        <Drawer
          container={container}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: themeMode === "light" ? "white" : "#2e2a2a",
              color: "white",
            },
          }}
        >
          <DrawerComponent drawerWidth={drawerWidth} logout={handleLogout} />
        </Drawer>
      </Box>
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            xs: `calc(100% + ${drawerWidth}px)`,
            sm: `calc(100% + ${drawerWidth}px)`,
          },
        }}
      >
        {/* <Toolbar /> */}
        <Box
          style={{
            marginTop: 70,
            padding: 0,
            "@media (minWidth: 600px)": {
              width: "100vw",
              overflowY: "auto",
            },
          }}
        >
          <Outlet />
        </Box>
        <FormModal
          open={showAdd}
          handleClose={() => dispatch(toggleShowAddModal())}
          title="Add New Product"
        >
          <AddStaffForm handleSubmit={handleSubmit} />
        </FormModal>
        <FormModal
          open={showEdit}
          handleClose={() => dispatch(toggleShowEditModal())}
          title={`Edit ${selectedStaff.name} `}
        >
          <EditStaffForm handleEdit={handleEdit} />
        </FormModal>
        <SuccessAlert
          message={successMessage}
          close={() => dispatch(setMessage(""))}
        />
        <ErrorAlert error={errorMessage} close={() => dispatch(setError(""))} />
        <ConfirmAlert
          open={showDelete}
          close={() => dispatch(toggleShowDeleteModal())}
          action={() => handleDelete(selectedStaff.id)}
          message={`Do you want to delete this staff?`}
          performing={deleting}
        />
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.object,
};

export default MainLayout;
