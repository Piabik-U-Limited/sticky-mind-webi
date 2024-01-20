import * as React from "react";
import {
  Container,
  Avatar,
  Button,
  Checkbox,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Login } from "@mui/icons-material";
import { Formik } from "formik";
import { TextInputField, } from "../components";
import { loginSchema } from "../shemas/loginSchema";
import useLogin from "../api/hooks/useLogin";
export default function ForgotPassword() {
  const { handleLogin } = useLogin();
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#0F9D58", height: "70px", width: "70px" }}>
        <LockOutlinedIcon fontSize="large" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Password Reset
      </Typography>
      <Formik
        initialValues={{
          email: "",
          
        }}
        //validationSchema={loginSchema}
        onSubmit={(values) => {
          //handleLogin(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            minWidth={"32%"}
          >
            

            <TextInputField
              name="email"
              placeholder="Enter Your Email"
              type="input"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
           
           
            <Button
              type="submit"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{
                fontSize: "14px",
                padding: "8px 40px",
                backgroundColor: "#0F9D58",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
                "&:hover": {
                  backgroundColor: "#0F9D58c0",
                },
              }}
              endIcon={<Login />}
            >
              Request Password Reset
            </Button>
            <Grid container sx={{ marginY: "10px" }}>
              <Grid item xs>
                <Typography  variant="body2">
                  Remember password?
                </Typography>
              </Grid>
              <Grid item>
                <Link to={"/auth"}>
                  <Typography>Login here</Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Typography  variant="body2">
                 Don't have an account yet?
                </Typography>
              </Grid>
              <Grid item>
                <Link to={"/auth/signup"}>
                  <Typography>Create Account</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
