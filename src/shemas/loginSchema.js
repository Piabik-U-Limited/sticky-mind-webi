import * as yup from "yup";

export const loginSchema = yup.object().shape({
  companyName: yup.string().required("Company is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
