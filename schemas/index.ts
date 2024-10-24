import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().min(1, {
        message: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
});

export const RegisterSchema = z.object({
    fname: z.string().min(1, {
        message: "First name is required"
    }).regex(new RegExp(/^[A-Za-z\s]+$/), {
        message: "Invalid first name"
    }),
    lname: z.string().min(1, {
        message: "Last name is required"
    }).regex(new RegExp(/^[A-Za-z\s]+$/), {
        message: "Invalid last name"
    }),
    email: z.string().min(1, {
        message: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string().regex(new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])\S{8,}$/), {
        message: "Password must contain at least 8 characters, including at least one uppercase & lowercase letter, one number, and one special character with no spaces."
    })
})