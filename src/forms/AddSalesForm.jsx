import React from "react";
import { Formik, FieldArray, Field } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";
import { Add, ErrorSharp, Save } from "@mui/icons-material";
import { SelectField, TextInputField } from "../components";
const products = [
  { id: 1, name: "Cough Syrup", price: 10000, quantity: 20, category: "Syrup" },
  { id: 2, name: "Flu Camp", price: 10000, quantity: 20, category: "Flu" },
  {
    id: 3,
    name: "Antibiotics",
    price: 10000,
    quantity: 20,
    category: "Antibiotics",
  },
  {
    id: 4,
    name: "Antiseptics",
    price: 10000,
    quantity: 20,
    category: "Antiseptics",
  },
  {
    id: 5,
    name: "Antacids",
    price: 10000,
    quantity: 20,
    category: "Antacids",
  },
  {
    id: 6,
    name: "Laxatives",
    price: 10000,
    quantity: 20,
    category: "Laxatives",
  },
  {
    id: 7,
    name: "Cough Suppressant",
    price: 10000,
    quantity: 20,
    category: "Cough Suppressant",
  },
];

const AddSalesForm = () => {
  // Define the validation schema for the sales items
  const validationSchema = yup.object().shape({
    salesItems: yup.array().of(
      yup.object().shape({
        productName: yup.string().required("Product name is required"),
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
  const sales = useSelector((state) => state.sales);

  // Define the initial state for the form
  const initialValues = {
    salesItems: [{ id: 1, productId: "", quantity: 0, unitPrice: 0 }],
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="salesItems"
              render={({ remove, push }) => (
                <div>
                  {values.salesItems.map((item, index) => (
                    <Grid container spacing={2} key={index}>
                      <Grid item xs={4}>
                        <div>
                          <label htmlFor="supervisorId">
                            Product Name<span className="asterisks">*</span>
                          </label>
                          <Field name={`salesItems[${index}].productId`}>
                            {({ field }) => (
                              <SelectField
                                {...field}
                                labelName="Product"
                                fullWidth
                                size="small"
                                MenuItems={products.map((product) => ({
                                  value: product.id,
                                  name: product.name,
                                }))}
                              />
                            )}
                          </Field>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div>
                          <label htmlFor="quantity">
                            Quantity <span className="asterisks">*</span>
                          </label>
                          <Field name={`salesItems[${index}].quantity`}>
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
                      <Grid item xs={4}>
                        <div>
                          <label htmlFor="unitPrice">
                            Unit Price <span className="asterisks">*</span>
                          </label>
                          <Field name={`salesItems[${index}].unitPrice`}>
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
                        id: values.salesItems.length + 1,
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
