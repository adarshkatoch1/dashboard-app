import * as Yup from "yup";

export const signupSchema = Yup.object({
    email: Yup.string().matches(/^[A-Za-z0-9@.]+$/, 'Only letters, numbers, and "@" are allowed in the name').required('This field is required'),
    password: Yup.string().min(6).required("Please enter your password")
})