import React from "react";
import { Formik } from "formik";
import { Grid, Button, Box } from "@mui/material";
import TextInputField from "../components/TextInputField";
import SelectField from "../components/SelectField";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import { categories } from "../utils/categories";
function AddProductForm(props) {
  const submitting = useSelector((state) => state.staff.submitting);
  const userList = useSelector((state) => state.staff.userList);

  const loading = useSelector((state) => state.staff.loading);
  const validationSchema = yup.object({
    name: yup.string().required("Product name is required"),
    price: yup
      .number("Price must be a currency value")
      .min(100, "Minimum price should be 100")
      .required("Unit price is required"),
    quantity: yup
      .number("Quantity must be a number")
      .min(1, "Minimum Quantity should be 1")
      .required("Quantity is required"),
    categoryId: yup.string().required("You must select the Category"),
  });

  function validateSelect(value) {
    let error;
    if (!value) {
      error = "Required";
    } else {
      error = "";
    }
    return error;
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          category: "",
          categoryId: "",
          price: 0,
          quantity: 0,
          decription: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.handleSubmit(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form className="form-wrap" onSubmit={handleSubmit} method="POST">
            <Grid container className="form-grid" spacing={2}>
              <Grid item xs={6}>
                <div className="form-input">
                  <label htmlFor="name">
                    Product Name
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="name"
                    placeholder="Flu camp"
                    type="input"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className="form-input">
                  <label htmlFor="role">
                    Quantity
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="quantity"
                    placeholder="e.g 10"
                    type="input"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container className="form-grid" spacing={2}>
              <Grid item xs={6}>
                <div>
                  <label htmlFor="supervisorId">
                    Category<span className="asterisks">*</span>
                  </label>
                  {loading && (
                    // Render a loading indicator or message while data is being fetched
                    <p>Loading Categories...</p>
                  )}
                  <SelectField
                    labelName="Select Category"
                    name="categoryId"
                    validate={validateSelect}
                    fullWidth
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                    MenuItems={categories.map((category) => ({
                      value: category.id,
                      name: category.name,
                    }))}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="form-input">
                  <label htmlFor="price">
                    Price
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="price"
                    placeholder="Enter Unit price"
                    type="number"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
            <div>
              <label htmlFor="description">Description</label>

              <TextInputField
                multiline={true}
                name="decription"
                placeholder="N/A"
                type="text"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
            </div>
            <div className="form-grid">
              {submitting ? (
                <LoadingButton
                  className="btnNext"
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
                  Saving
                </LoadingButton>
              ) : (
                <Button
                  type="submit"
                  className="submit-btn"
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
                  endIcon={<Save />}
                >
                  Save
                </Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddProductForm;
