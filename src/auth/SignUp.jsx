import * as React from "react";
import {Typography,Box,Grid,Avatar,Button} from "@mui/material";
import Container from "@mui/material/Container";
import { AccountCircle, Login } from "@mui/icons-material";
import { Formik } from "formik";
import { TextInputField, SelectField } from "../components";
import { companies } from "../utils/companies";
import { Link } from "react-router-dom";



export default function SignUp() {
 

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#0F9D58" }} sizes={["small", "medium"]}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <Formik
          initialValues={{
            name:"",
            userName: "",
            password: "",
            
          }}
          //validationSchema={validationSchema}
          onSubmit={(values) => {
            //handleAddProduct(values);
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
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
                name="userName"
                placeholder="Enter Username"
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
              <TextInputField
                name="password"
                placeholder="Enter password"
                type="password"
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
                Sign In
              </Button>
              
                
                <Grid item>
                  <Link to="/login" >
                    <Typography>Login Instead</Typography>
                  </Link>
                </Grid>
            
            </Box>
          )}
        </Formik>
      </Box>
     
    </Container>
  );
}
