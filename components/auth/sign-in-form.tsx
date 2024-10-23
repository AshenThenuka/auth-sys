"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper"
import Link from "next/link";

export const SignInForm = () => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    return (
        <>
            <CardWrapper
                headerTitle="Login to your account"
                headerLabel="Welcome back! Please enter your email and password to sign in."
                backButtonLabel="Don't have an account? Sign up"
                backButtonHref="/sign-up"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => { })} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="john.doe@example.com" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            <Link className="text-xs font-medium text-neutral-500 underline" href="">Forgot your password?</Link>
                                        </div>
                                        <FormControl>
                                            <Input {...field} type="password" placeholder="********" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className="w-full">Continue to my account</Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}