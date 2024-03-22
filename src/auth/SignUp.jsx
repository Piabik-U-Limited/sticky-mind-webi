import * as React from "react";
import { Typography, Box, Grid, Avatar, Button } from "@mui/material";
import Container from "@mui/material/Container";
import {
  AccountCircle,
  Login,
  PersonAdd,
  PersonAddAlt,
} from "@mui/icons-material";
import { Formik } from "formik";
import { TextInputField, PasswordInput } from "../components";
import { Link } from "react-router-dom";
import { registerSchema } from "../shemas/registerSchema";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import useRegister from "../api/hooks/useRegister";
export default function SignUp() {
  const { handleRegister } = useRegister();
  const { loading } = useSelector((state) => state.auth);
  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // width: "100%",
        //backgroundColor: "red",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#00C49F", height: "70px", width: "70px" }}>
        <PersonAddAlt fontSize="large" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create Account
      </Typography>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          phone: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handleRegister(values);
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
              name="name"
              placeholder="Enter Full Name"
              type="input"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
            <TextInputField
              name="username"
              placeholder="Enter Username"
              type="input"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
            <TextInputField
              name="email"
              placeholder="Enter Email"
              type="input"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
            <TextInputField
              name="phone"
              placeholder="Enter Phone Number"
              type="input"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
            <PasswordInput
              name="password"
              placeholder="Enter password"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm password"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />
            {loading ? (
              <LoadingButton
                className="btnNext"
                fullWidth
                loading
                color="secondary"
                loadingPosition="start"
                variant="contained"
                sx={{
                  fontSize: "14px",
                  padding: "8px 40px",
                  borderRadius: "15px",
                }}
              >
                Creating Account....
              </LoadingButton>
            ) : (
              <Button
                type="submit"
                fullWidth
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  fontSize: "14px",
                  padding: "8px 40px",
                  backgroundColor: "#00C49F",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#00C49Fc0",
                  },
                }}
                startIcon={<PersonAdd />}
              >
                Register Account
              </Button>
            )}
            <Grid container flex={1}>
              <Grid item xs>
                <Typography>Already have an account? </Typography>
              </Grid>
              <Grid item>
                <Link to="/auth">
                  <Typography>Login Instead</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
