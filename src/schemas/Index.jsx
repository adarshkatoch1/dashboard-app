import * as Yup from "yup";

export const signupSchema = Yup.object({
    fname: Yup.string().min(3).max(25).required("Please enter your firstname"),
    lname: Yup.string().min(5).max(23).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.number().min(10).required("Please enter your phone"),
    password: Yup.string().min(6).required("Please enter your password")
})