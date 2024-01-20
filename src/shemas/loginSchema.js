import * as yup from "yup";

export const loginSchema = yup.object().shape({
    companyName: yup.string().required("Company is required"),
    userName: yup.string().required("Username is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
})