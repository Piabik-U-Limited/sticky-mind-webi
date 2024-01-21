import * as React from "react";
import { Avatar, Button, Box, Typography } from "@mui/material";
import { resetSchema } from "../shemas/resetSchema";
import { Link, useParams } from "react-router-dom";
import { LockOutlined, LockOpen } from "@mui/icons-material";
import { Formik } from "formik";
import { PasswordInput } from "../components";
import useLogin from "../api/hooks/useLogin";
import * as yup from "yup";

 const changeSchema = yup.object().shape({
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    
})
export default function ForgotPassword() {
  const { handleLogin } = useLogin();
  const token = useParams().token;
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
        <LockOutlined fontSize="large" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Change your Password
      </Typography>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          token: token,
        }}
        validationSchema={changeSchema}
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
            <PasswordInput
              name="password"
              placeholder="Enter new password"
              size="small"
              sx={{
                marginTop: "5px",
              }}
            />

            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm new password"
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
              endIcon={<LockOpen />}
            >
              Update password
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
