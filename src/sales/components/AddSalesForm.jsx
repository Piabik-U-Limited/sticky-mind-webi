import React, { useEffect } from "react";
import { Formik, FieldArray, Field } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import {
  Grid,
  Button,
  Paper,
  IconButton,
  Card,
  Typography,
  Tooltip,
} from "@mui/material";
import { FormControl, MenuItem, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Add, Save, Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
import useSales from "../../api/hooks/useSales";
import useProducts from "../../api/hooks/useProducts";
import ReceiptComponent from "./ReceiptComponent";
const AddSalesForm = () => {
  const { products, loading } = useSelector((state) => state.products);
  const sales = useSelector((state) => state.sales);
  const { handleFetchProducts } = useProducts();
  const { handleAddSale } = useSales();
  // Define the validation schema for the sales items
  const validationSchema = yup.object().shape({
    items: yup.array().of(
      yup.object().shape({
        product: yup
          .object()
          .required("You must select the product being sold"),
        unitPrice: yup
          .number("Price must be a currency value")
          .min(1, "Minimum price should be 100")
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
    items: [{ id: 1, product: null, quantity: 0, unitPrice: 0 }],
  };
  useEffect(() => {
    !products.length > 0 && handleFetchProducts();
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        //handleAddSale(values);
        console.log(values);
      }}
    >
      {({ handleSubmit, values, errors, touched, setFieldValue }) => {
        useEffect(() => {
          // Iterate over each product
          values.items.forEach((item, index) => {
            // Check if unitPrice is not empty
            if (item.product !== null) {
              // Calculate the new selling price

              // Update the selling price for the current item
              setFieldValue(
                `items[${index}].unitPrice`,
                item?.product?.sellingPrice
              );
            }
          });
        }, [values.items, setFieldValue]);
        return (
          <Grid
            container
            spacing={2}
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            xs={12} sm={8} md={12}
          >
            <Grid item xs={12} sm={12} md={7}>
            <form onSubmit={handleSubmit}>
              <FieldArray
                name="items"
                render={({ remove, push }) => (
                  <div>
                    {values.items.map((item, index) => (
                      <Grid container spacing={2} key={index}>
                        <Grid item xs={4}>
                          <div>
                            <label htmlFor="product">
                              Product Name<span className="asterisks">*</span>
                            </label>
                            <Field name={`items[${index}].product`}>
                              {({ field }) => (
                                <div>
                                  {loading ? (
                                    <p>Loading Products...</p>
                                  ) : (
                                    <FormControl fullWidth size="small">
                                      <Select
                                        {...field}
                                        variant="standard"
                                        error={
                                          touched.items?.[index]?.product &&
                                          errors.items?.[index]?.product
                                        }
                                      >
                                        {products.map((product) => (
                                          <MenuItem
                                            key={product.id}
                                            value={product}
                                          >
                                            <Tooltip
                                              key={product.id}
                                              title={
                                                product.category?.batch?.name
                                              }
                                            >
                                              {product.name}
                                            </Tooltip>
                                          </MenuItem>
                                        ))}
                                      </Select>
                                      <Typography
                                        sx={{ color: "tomato" }}
                                        variant="caption"
                                      >
                                        {touched.items?.[index]?.product &&
                                          errors.items?.[index]?.product}
                                      </Typography>
                                    </FormControl>
                                  )}
                                </div>
                              )}
                            </Field>
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div>
                            <label htmlFor="quantity">
                              Quantity <span className="asterisks">*</span>
                            </label>
                            <Field name={`items[${index}].quantity`}>
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  placeholder="e.g 10"
                                  type="number"
                                  size="small"
                                  variant="standard"
                                  error={
                                    touched.items?.[index]?.quantity &&
                                    errors.items?.[index]?.quantity
                                  }
                                  helperText={
                                    touched.items?.[index]?.quantity &&
                                    errors.items?.[index]?.quantity
                                  }
                                />
                              )}
                            </Field>
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div>
                            <label htmlFor="unitPrice">
                              Unit Price <span className="asterisks">*</span>
                            </label>
                            <Field name={`items[${index}].unitPrice`}>
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  placeholder="Automatic"
                                  type="number"
                                  size="small"
                                  variant="standard"
                                  error={
                                    touched.items?.[index]?.unitPrice &&
                                    errors.items?.[index]?.unitPrice
                                  }
                                  helperText={
                                    touched.items?.[index]?.unitPrice &&
                                    errors.items?.[index]?.unitPrice
                                  }
                                />
                              )}
                            </Field>
                          </div>
                        </Grid>
                        <Grid item xs={2}>
                          {index > 0 && (
                            <IconButton onClick={() => remove(index)}>
                              <Close />
                            </IconButton>
                          )}
                        </Grid>
                      </Grid>
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
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <ReceiptComponent items={values.items} />
            </Grid>
          </Grid>
        );
      }}
    </Formik>
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
