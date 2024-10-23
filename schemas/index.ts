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
    }),
    lname: z.string().min(1, {
        message: "Last name is required"
    }),
    email: z.string().min(1, {
        message: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})