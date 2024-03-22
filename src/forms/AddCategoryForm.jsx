import React, { useEffect } from "react";
import { Formik } from "formik";
import { Grid, Button } from "@mui/material";
import { TextInputField, SelectField, FormSubmitButton } from "../components";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import useCategories from "../api/hooks/useCategories";

function AddCategoryForm(props) {
  const submitting = useSelector((state) => state.categories.submitting);
  const { handleAddCategory } = useCategories();
  const validationSchema = yup.object({
    name: yup.string().required("Category name is required"),
    content: yup.string("Content must be a number"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          content: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleAddCategory(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form
            className="form-wrap"
            onSubmit={handleSubmit}
            method="POST"
            style={{ minWidth: 400 }}
          >
            <div className="form-input">
              <label htmlFor="name">
                Category Name
                <span className="asterisks">*</span>
              </label>

              <TextInputField
                name="name"
                placeholder="Anti Malarials"
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
            </div>

            <div>
              <label htmlFor="content">Description</label>

              <TextInputField
                multiline={true}
                name="content"
                placeholder="OPTIONAL"
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
                  onClick={handleSubmit}
                  type="submit"
                  className="submit-btn"
                  sx={{
                    fontSize: "14px",
                    padding: "8px 40px",
                    backgroundColor: "#00C49F",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "#00C49Fc0",
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

export default AddCategoryForm;
