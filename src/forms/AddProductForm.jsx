import React, { useEffect } from "react";
import { Formik } from "formik";
import { Grid, Button, Box } from "@mui/material";
import TextInputField from "../components/TextInputField";
import SelectField from "../components/SelectField";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import useProducts from "../api/hooks/useProducts";
import useCategories from "../api/hooks/useCategories";
function AddProductForm(props) {
  const { handleAddProduct } = useProducts();
  const { handleFetchCategories } = useCategories();
  const state = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const validationSchema = yup.object({
    name: yup.string().required("Product name is required"),
    unitPrice: yup
      .number("Unit Price must be a currency value")
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
  useEffect(() => {
    !categories.categories.length > 0 && handleFetchCategories();
  }, []);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          category: "",
          categoryId: "",
          unitPrice: 0,
          quantity: 0,
          decription: "",
          // manDate: "",
          // expDate: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleAddProduct(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form className="form-wrap" onSubmit={handleSubmit} method="POST">
            <Grid container className="form-grid" spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
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

              <Grid item xs={12} sm={6} md={4}>
                <div className="form-input">
                  <label htmlFor="role">
                    Quantity
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="quantity"
                    placeholder="e.g 10"
                    type="number"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div>
                  <label htmlFor="supervisorId">
                    Category<span className="asterisks">*</span>
                  </label>
                  {categories.loading ? (
                    // Render a loading indicator or message while data is being fetched
                    <p>Loading Categories...</p>
                  ) : (
                    <SelectField
                      labelName="Select Category"
                      name="categoryId"
                      validate={validateSelect}
                      fullWidth
                      size="small"
                      sx={{
                        marginTop: "5px",
                      }}
                      MenuItems={categories.categories.map((category) => ({
                        value: category.id,
                        name: category.name,
                      }))}
                    />
                  )}
                </div>
              </Grid>
            </Grid>

            <Grid container className="form-grid" spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <div className="form-input">
                  <label htmlFor="unitPrice">
                    Unit Price
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="unitPrice"
                    placeholder="Enter Unit price"
                    type="number"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className="form-input">
                  <label htmlFor="manDate">Manufucture Date</label>

                  <TextInputField
                    name="manDate"
                    placeholder="Optional"
                    type="input"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <div className="form-input">
                  <label htmlFor="expDate">Expiry Date</label>

                  <TextInputField
                    name="expDate"
                    placeholder="Optional"
                    type="input"
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
              {state.submitting ? (
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
