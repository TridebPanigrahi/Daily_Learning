import * as yup from "yup";

export const registrationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 charecters"),

  email: yup
    .string()
    .required("Email must be required")
    .email("Enter a valid email"),

  password: yup
    .string()
    .required("Password must be required")
    .min(6, "Password must be atleast 6 charecters"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Password must be match"])
    .required("Confirm password is required"),
});
