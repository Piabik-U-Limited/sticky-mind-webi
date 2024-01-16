import React, { useEffect } from "react";
import { Formik, FieldArray, Field } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Grid, Button, Paper, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Add, ErrorSharp, Save, Close } from "@mui/icons-material";
import { SelectField, TextInputField } from "../components";
import useSales from "../api/hooks/useSales";
import useProducts from "../api/hooks/useProducts";

const AddSalesForm = () => {
  const products = useSelector((state) => state.products);
  const sales = useSelector((state) => state.sales);
  const { handleFetchProducts } = useProducts();
  const { handleAddSale } = useSales();
  // Define the validation schema for the sales items
  const validationSchema = yup.object().shape({
    items: yup.array().of(
      yup.object().shape({
        productId: yup
          .string()
          .required("You must select the product being sold"),
        unitPrice: yup
          .number("Price must be a currency value")
          .min(100, "Minimum price should be 100")
          .required("Unit price is required"),
        quantity: yup
          .number("Quantity must be a number")
          .min(1, "Minimum Quantity should be 1")
          .required("Quantity is required"),
      })
    ),
  });

  // Define the initial state for the form
  const initialValues = {
    items: [{ id: 1, productId: "", quantity: 0, unitPrice: 0 }],
  };
  useEffect(() => {
    !products.products.length > 0 && handleFetchProducts();
  }, []);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleAddSale(values);
          console.log(values);
        }}
      >
        {({ handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="items"
              render={({ remove, push }) => (
                <div>
                  {values.items.map((item, index) => (
                    <Paper sx={{ padding: 1, borderRadius: 1, marginTop: 1 }}>
                      {index !== 0 && ( // Render IconButton only if index is not 0
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          sx={{ marginLeft: "auto" }}
                          onClick={() => remove(index)}
                        >
                          <Close />
                        </IconButton>
                      )}

                      <Grid container spacing={2} key={index}>
                        <Grid item xs={12} sm={6} md={4}>
                          <div>
                            <label htmlFor="supervisorId">
                              Product Name<span className="asterisks">*</span>
                            </label>
                            <Field name={`items[${index}].productId`}>
                              {({ field }) => (
                                <div>
                                  {products.loading ? (
                                    <p>Loading Products...</p>
                                  ) : (
                                    <SelectField
                                      {...field}
                                      labelName="Select Product"
                                      fullWidth
                                      size="small"
                                      MenuItems={products.products.map(
                                        (product) => ({
                                          value: product.id,
                                          name: product.name,
                                        })
                                      )}
                                    />
                                  )}
                                </div>
                              )}
                            </Field>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <div>
                            <label htmlFor="quantity">
                              Quantity <span className="asterisks">*</span>
                            </label>
                            <Field name={`items[${index}].quantity`}>
                              {({ field }) => (
                                <TextInputField
                                  {...field}
                                  placeholder="e.g 10"
                                  type="number"
                                  size="small"
                                />
                              )}
                            </Field>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <div>
                            <label htmlFor="unitPrice">
                              Unit Price <span className="asterisks">*</span>
                            </label>
                            <Field name={`items[${index}].unitPrice`}>
                              {({ field }) => (
                                <TextInputField
                                  {...field}
                                  placeholder="Optional"
                                  type="number"
                                  size="small"
                                />
                              )}
                            </Field>
                          </div>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                  <Button
                    className="submit-btn"
                    sx={{
                      fontSize: "14px",
                      padding: "8px 40px",
                      backgroundColor: "#0F9D58",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                      border: "none",
                      margin: 1,
                      "&:hover": {
                        backgroundColor: "#0F9D58c0",
                      },
                    }}
                    endIcon={<Add />}
                    onClick={() =>
                      push({
                        id: values.items.length + 1,
                        productId: "",
                        quantity: 0,
                        unitPrice: 0,
                      })
                    }
                  >
                    Add Item
                  </Button>
                  {sales.submitting ? (
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
                      onClick={handleSubmit}
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
              )}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddSalesForm;

{
  /* <Button
                className="submit-btn"
                sx={{
                  fontSize: "14px",
                  padding: "8px 40px",
                  backgroundColor: "#0F9D58",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "none",
                  margin: 1,
                  "&:hover": {
                    backgroundColor: "#0F9D58c0",
                  },
                }}
                endIcon={<Add />}
                onClick={() =>
                  setItems([
                    ...items,
                    {
                      id: items.length + 2,
                      productName: "",
                      quantity: 0,
                      unitPrice: 0,
                    },
                  ])
                }
              >
                Add Item
              </Button> */
}
