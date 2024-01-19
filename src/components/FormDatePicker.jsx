import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field,ErrorMessage } from "formik";
import { useField } from "formik";
import {  Typography } from "@mui/material";
function FormDatePicker() {
    const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    
        <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "5px", marginTop: "10px" }}>
          <label>
            {props.label}
            <span style={{ color: "red" }}>{props.isRequired ? "*" : ""}</span>
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              onChange={(date) => form.setFieldValue("DOB", date)}
              value={form.values.DOB}
            />
          </LocalizationProvider>
          <Typography sx={{ color: "tomato" }} variant="caption">
          {errorText}
        </Typography>
        </div></div>
      
  );
}

export default FormDatePicker;
