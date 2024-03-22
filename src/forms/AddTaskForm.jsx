import React, { useEffect } from "react";
import { Formik } from "formik";
import { Grid, Button } from "@mui/material";
import {
  TextInputField,
  SelectField,
  FormSubmitButton,
  FormDatePicker,
} from "../components";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import useTasks from "../api/hooks/useTasks";
import useCategories from "../api/hooks/useCategories";

function AddTaskForm(props) {
  const { handleAddTask } = useTasks();
  const categories = useSelector((state) => state.categories);
  const { handleFetchCategories } = useCategories();
  const { loading, submitting } = useSelector((state) => state.products);
  const validationSchema = yup.object({
    title: yup.string().required("Task name is required"),
    description: yup.string("Description must be a number"),
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
          title: "",
          decription: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleAddTask(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form
            className="form-wrap"
            onSubmit={handleSubmit}
            method="POST"
            style={{ minWidth: 400, padding: 10 }}
          >
            <div className="form-input">
              <label htmlFor="title">
                Task Name
                <span className="asterisks">*</span>
              </label>

              <TextInputField
                name="title"
                placeholder="Meeting with sales team"
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>

              <TextInputField
                multiline={true}
                name="description"
                variant="standard"
                placeholder="OPTIONAL"
                type="text"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
            </div>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <label htmlFor="category">
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
                      name: `${category.name}`,
                    }))}
                  />
                )}
              </div>
            </Grid>
            <div className="form-grid">
              <FormSubmitButton
                handleSubmit={handleSubmit}
                loading={submitting}
                loadingTitle="Submitting..."
                title="Add Task"
                endIcon={<Save />}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddTaskForm;
