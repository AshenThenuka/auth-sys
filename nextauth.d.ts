import { UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession['user'] & {
    verified: boolean;
    role: UserRole;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        verified: boolean;
        role: UserRole;
    }
}