import * as React from "react";
import {Avatar,Button,} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Login } from "@mui/icons-material";
import { Formik } from "formik";
import { TextInputField, SelectField } from "../components";
import { companies } from "../utils/companies";




export default function SignIn() {
 

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#0F9D58" }} sizes={["small", "medium"]}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            userName: "",
            password: "",
            companyId: "",
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
              <SelectField
                labelName="Select Company"
                name="companyId"
                //validate={validateSelect}
                fullWidth
                size="small"
                sx={{
                  marginTop: "5px",
                }}
                MenuItems={companies.map((company) => ({
                  value: company.id,
                  name: company.name,
                }))}
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
              <FormControlLabel
                control={<Checkbox value="remember"  />}
                label="Remember me"
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
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Create Account"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      </Box>
     
    </Container>
  );
}
