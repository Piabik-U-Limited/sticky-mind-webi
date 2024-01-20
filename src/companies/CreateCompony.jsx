import * as React from "react";
import { Container, Avatar, Button, Box, Typography } from "@mui/material";
import { Business, Add, CloudUpload } from "@mui/icons-material";
import { Formik } from "formik";
import { TextInputField } from "../components";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function CreateCompony() {
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
        <Avatar sx={{ m: 1, bgcolor: "#0F9D58", height: "80px", width: "80px" }} sizes={["small", "medium"]}>
          <Business fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create your company profile
        </Typography>
        <Formik
          initialValues={{
            name: "",
            location: "",
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
              sx={{ mt: 1, padding: "20px" }}
              minWidth={"100%"}
            >
              <TextInputField
                name="name"
                placeholder="Enter company name"
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
              <TextInputField
                name="Location"
                placeholder="Enter company location"
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
              <Button
                component="label"
                fullWidth
                variant="contained"
                startIcon={<CloudUpload />}
                sx={{
                  fontSize: "14px",
                  padding: "8px 40px",
                  marginY: "10px",
                  backgroundColor: "#0F9D58",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#0F9D58c0",
                  },
                }}
              >
                Upload Logo
                <VisuallyHiddenInput type="file" />
              </Button>

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
                endIcon={<Add />}
              >
                Create Compan
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
