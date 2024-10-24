import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { apiAuthRoute, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "@/routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {

    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRoute);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return NextResponse.next();
    }

    if (!isPublicRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/sign-in", nextUrl));
    }

    return NextResponse.next();

});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ]
}