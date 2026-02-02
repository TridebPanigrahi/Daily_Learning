import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required("Email must be required")
    .email("Enter a valid Email"),
  password: yup
    .string()
    .required("Password must be required")
    .min(6, "Password must be atleast 6 charecters"),
});
