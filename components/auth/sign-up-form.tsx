"use client";

import * as z from "zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { AlertError } from "@/components/alerts/alert-error";
import { AlertSuccess } from "@/components/alerts/alert-success";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export const SignUpForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [showPass, setShowPass] = useState(false);

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values).then(data => {
                setError(data?.error);
                setSuccess(data?.success);
            })
        })
    }

    return (
        <>
            <CardWrapper
                headerTitle="Create your account"
                headerLabel="Welcome! Please enter your details to create your free account."
                backButtonLabel="Already have an account? Sign in"
                backButtonHref="/sign-in"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex gap-x-5">
                                <FormField
                                    control={form.control}
                                    name="fname"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel>First name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="John" disabled={isPending} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lname"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel>Last name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Doe" disabled={isPending} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="john.doe@example.com" disabled={isPending} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field, fieldState }) => (
                                    <FormItem className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                        </div>
                                        <div className="relative">
                                            <FormControl>
                                                <Input {...field} type={!showPass ? "password" : "text"} placeholder={!showPass ? "********" : "Password"} disabled={isPending} />
                                            </FormControl>
                                            <div className={cn("absolute top-2/4 right-3 -translate-y-2/4 cursor-pointer select-none", isPending && "opacity-50 cursor-not-allowed pointer-events-none")} onClick={() => setShowPass(!showPass)}>
                                                {!showPass ? <Eye className="w-5 h-5 stroke-neutral-500" /> : <EyeOff className="w-5 h-5 stroke-neutral-500" />}
                                            </div>
                                        </div>
                                        {fieldState.error === undefined && (
                                            <FormDescription className="text-xs font-medium">Password must contain at least 8 characters, including at least one uppercase, lowercase letter, one number, and one special character with no spaces.</FormDescription>
                                        )}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <AlertError message={error} />
                        <AlertSuccess message={success} />
                        <Button className="w-full" disabled={isPending}>Continue to my account</Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}