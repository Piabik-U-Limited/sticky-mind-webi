import React,{useEffect} from "react";
import { Formik } from "formik";
import { Grid, Button } from "@mui/material";
import { TextInputField, SelectField } from "../components";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { Save } from "@mui/icons-material";
import useCategories from "../api/hooks/useCategories";
import useBatches from "../api/hooks/useBatches";


function AddCategoryForm(props) {
  const submitting = useSelector((state) => state.categories.submitting);
  const { batches, loading } = useSelector((state) => state.batches);
  const { handleAddCategory } = useCategories();
  const { handleFetchBatches } = useBatches();
  const validationSchema = yup.object({
    name: yup.string().required("Category name is required"),
    batchId: yup.string().required("Please select a batch"),
    description: yup.string("Quantity must be a number"),
 
  });
useEffect(() => {
  !batches.length > 0 && handleFetchBatches();
},[])
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          decription: "",
          batchId: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleAddCategory(values);
          //   console.log(values);
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
                placeholder="Flu camp"
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
            </div>
            <div>
              <label htmlFor="supervisorId">
                Batch<span className="asterisks">*</span>
              </label>
              {loading ? (
                // Render a loading indicator or message while data is being fetched
                <p>Loading batches...</p>
              ) : (
                <SelectField
                  labelName="Select Category"
                  name="batchId"
                  //validate={validateSelect}
                  fullWidth
                  size="small"
                  sx={{
                    marginTop: "5px",
                  }}
                  MenuItems={batches.map((batch) => ({
                    value: batch.id,
                    name: batch.name,
                  }))}
                />
              )}
            </div>

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
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddCategoryForm;
