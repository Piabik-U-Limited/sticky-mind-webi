import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ErrorMessage } from "formik";
import { useField } from "formik";
import { Typography } from "@mui/material";

function FormDatePicker(props) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <div style={{ width: "100%" }}>
      
        <label>
          {props.label}
          <span style={{ color: "red" }}>{props.isRequired ? "*" : ""}</span>
        </label>
     
      <div style={{ marginBottom: "10px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            value={field.value}
            onChange={(date) => props.handleChange(date)}
          />
        </LocalizationProvider>
        <Typography sx={{ color: "tomato" }} variant="caption">
          {errorText}
        </Typography>
      </div>
    </div>
  );
}

export default FormDatePicker;
