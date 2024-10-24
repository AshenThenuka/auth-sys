"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const register = async (values: z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid email or password" }
    }

    const { fname, lname, email, password } = validatedFields.data;

    const name = `${fname} ${lname}`;

    const Email = email.toLowerCase();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(Email);

    if (existingUser) {
        return { error: "Email already registered! login or reset password" }
    }

    await db.user.create({
        data: {
            name,
            email: Email,
            password: hashedPassword
        }
    });

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Email address or password is incorrect!" }
                default:
                    return { error: "Something went wrong!" }
            }
        }
        throw error;
    }

    return { success: "Email Sent!" }

}