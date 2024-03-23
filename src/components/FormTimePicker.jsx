import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { Typography } from "@mui/material";
import { ErrorMessage } from "formik";
import { useField } from "formik";
export default function FormTimePicker(props) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileTimePicker"]}>
        <DemoItem label={props.label}>
          <MobileTimePicker
            defaultValue={dayjs("2022-04-17T15:30")}
            {...field}
            value={field.value}
            onChange={(date) => props.handleChange(date)}
          />
          <Typography sx={{ color: "tomato" }} variant="caption">
            {errorText}
          </Typography>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
