import React, { useEffect } from "react";
import { Formik } from "formik";
import { Grid, Slider, Box } from "@mui/material";
import {
  TextInputField,
  SelectField,
  FormSubmitButton,
  FormDatePicker,
  FormTimePicker,
} from "../components";
import * as yup from "yup";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import useTasks from "../api/hooks/useTasks";
import useCategories from "../api/hooks/useCategories";
const statuses = ["TODO", "IN_PROGRESS", "DONE"];

function AddTaskForm(props) {
  const { handleAddTask } = useTasks();
  const categories = useSelector((state) => state.categories);
  const { handleFetchCategories } = useCategories();
  const { loading, submitting } = useSelector((state) => state.tasks);
  const validationSchema = yup.object({
    title: yup.string().required("Task name is required"),
    description: yup.string("Description must be a number"),
    date: yup.date("Invalid date").required("Date is required"),
    start: yup
      .date("Start time must be valid time")
      .required("Start time is required"),
    end: yup
      .date("End time must be valid time")
      .required("End time is required"),
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
          date: "",
          start: "",
          end: "",
          priority: 50,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // let date = (values.date = dayjs(values.date).format(
          //   "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
          // ));

          let start = (values.start = dayjs(values.start).format("HH:mm:ss"));
          let end = (values.end = dayjs(values.end).format("HH:mm:ss"));
          handleAddTask({ ...values, start, end });
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
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
            <label htmlFor="priority">Priority</label>
            <Box sx={{ width: "100%", padding: "10px" }}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(e) => setFieldValue("priority", e.target.value)}
              />
            </Box>
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
            <div className="form-input">
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
            </div>
            <div className="form-input">
              <div>
                <label htmlFor="status">
                  Status<span className="asterisks">*</span>
                </label>

                <SelectField
                  labelName="Select Status"
                  name="status"
                  validate={validateSelect}
                  fullWidth
                  size="small"
                  sx={{
                    marginTop: "5px",
                  }}
                  MenuItems={statuses.map((status) => ({
                    value: status,
                    name: `${status}`,
                  }))}
                />
              </div>
            </div>
            <Grid item xs={12} sm={12} md={12}>
              <FormDatePicker
                label="Date"
                name="date"
                type="text"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
                handleChange={(date) => setFieldValue("date", date)}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid className="form-input" item xs={5} sm={6} md={6}>
                <FormTimePicker
                  label="Start Time"
                  name="start"
                  type="input"
                  size="small"
                  sx={{
                    marginTop: "5px",
                  }}
                  handleChange={(time) => setFieldValue("start", time)}
                />
              </Grid>
              <Grid className="form-input" item xs={6} sm={6} md={6}>
                <FormTimePicker
                  label="End Time"
                  name="end"
                  placeholder="Optional"
                  type="input"
                  size="small"
                  sx={{
                    marginTop: "5px",
                  }}
                  handleChange={(time) => setFieldValue("end", time)}
                />
              </Grid>
            </Grid>

            <div className="form-grid" style={{ marginTop: "10px" }}>
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
