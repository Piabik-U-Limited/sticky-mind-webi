import React from "react";
import { Select, TextField, InputAdornment } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl, InputLabel, Typography } from "@mui/material";
import { useField } from "formik";
import { Close, Search } from "@mui/icons-material";

export default function SelectField({ ...props }) {
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
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="select">{props.labelName}</InputLabel>
          <Select
            labelId="select"
            label={props.labelName}
            fullWidth
            name={props.name}
            id={props.id}
            {...field}
            error={!!errorText}
            sx={{
              height: "40px",
            }}
          >
            <TextField
              label="Search"
              placeholder={"Search"}
              variant="standard"
              focused
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{
                marginX: 2,
                width: "90%",
              }}
              onChange={
                (e) =>
                  props.MenuItems.filter((item) =>
                    item.label
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                // console.log(e.target.value)
              }
            />
            {!!props.MenuItems?.length &&
              props.MenuItems.map((menuItem) => {
                return (
                  <MenuItem
                    value={menuItem.value}
                    key={menuItem.value}
                    disabled={menuItem.disabled}
                  >
                    {menuItem.label}
                    {menuItem.name}
                    {/* Use label as the visible label */}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <Typography sx={{ color: "tomato" }} variant="caption">
          {errorText}
        </Typography>
      </div>
    </div>
  );
}
