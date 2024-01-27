import React, { useEffect } from "react";
import { Formik } from "formik";
import { Grid, Button, Box } from "@mui/material";
import {
  TextInputField,
  SelectField,
  FormDatePicker,
  FormSubmitButton,
} from "../components";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import useProducts from "../api/hooks/useProducts";
import useCategories from "../api/hooks/useCategories";
import dayjs from "dayjs";
function AddProductForm(props) {
  const { handleAddProduct } = useProducts();
  const { handleFetchCategories } = useCategories();
  const state = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const validationSchema = yup.object({
    name: yup.string().required("Product name is required"),
    unitPrice: yup
      .number("Unit Price must be a currency value")
      .min(1, "Minimum price should be 1")
      .required("Unit price is required"),
    quantity: yup
      .number("Quantity must be a number")
      .min(1, "Minimum Quantity should be 1")
      .required("Quantity is required"),
    categoryId: yup.string().required("You must select the Category"),
    expDate: yup.date().required("Expiry date is required"),
    sellingPrice: yup
      .number("Selling price must be a number")
      .required("Selling price is required")
      .test(
        "greaterThan",
        "Selling price must be greater than unit price",
        function (value) {
          let { unitPrice } = this.parent;
          return value > unitPrice;
        }
      ),
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
          expDate: "",
          sellingPrice: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const expDate = dayjs(values.expDate).format(
            "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
          );
          const manDate = dayjs(values.manDate).format(
            "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
          );
          const data = { ...values, expDate, manDate };
          handleAddProduct(data);
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => {
          useEffect(() => {
            if (values.unitPrice !== "") {
              const newSellingPrice = parseFloat(values.unitPrice) * 1.5 +(values.unitPrice);
              setFieldValue("sellingPrice", newSellingPrice);
            }
          }, [values.unitPrice, setFieldValue]);
          return (
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
                          name: `${category.name} - (${category?.batch?.name})`,
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
                    <FormDatePicker
                      label="Manufucture Date"
                      name="manDate"
                      placeholder="Optional"
                      type="input"
                      size="small"
                      sx={{
                        marginTop: "5px",
                      }}
                      handleChange={(date) => setFieldValue("manDate", date)}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <div className="form-input">
                    <FormDatePicker
                      label="Expiration Date"
                      name="expDate"
                      placeholder="Optional"
                      type="input"
                      size="small"
                      sx={{
                        marginTop: "5px",
                      }}
                      handleChange={(date) => setFieldValue("expDate", date)}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className="form-input">
                  <label htmlFor="sellingPrice">
                    Selling Price
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                  disabled={true}
                    name="sellingPrice"
                    placeholder="Flu camp"
                    type="number"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>
              <div className="form-grid">
                <FormSubmitButton
                  handleSubmit={handleSubmit}
                  loading={state.submitting}
                  title="Save product"
                  loadingTitle={"Signing In..."}
                  icon={<Save />}
                />
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddProductForm;
