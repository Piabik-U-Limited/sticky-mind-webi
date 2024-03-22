import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  phone: yup.string().required("Phone is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required(" You must confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
