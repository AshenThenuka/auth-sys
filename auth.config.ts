import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export default {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {

                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {

                    const { email, password } = validatedFields.data;

                    const Email = email.toLowerCase();

                    const user = await getUserByEmail(Email);

                    if (!user || !user.password) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) return user;

                }

                return null;

            }
        })
    ]
} satisfies NextAuthConfig