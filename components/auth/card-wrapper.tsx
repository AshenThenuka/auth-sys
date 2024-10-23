import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerTitle: string;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
}

export const CardWrapper = ({
    children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref
}: CardWrapperProps) => {
    return (
        <>
            <Card className="mx-auto max-w-[400px]">
                <CardHeader>
                    <CardTitle className="font-onest font-bold">{headerTitle}</CardTitle>
                    <CardDescription>{headerLabel}</CardDescription>
                </CardHeader>
                <CardContent className="">
                    {children}
                </CardContent>
                <CardFooter className="justify-center">
                    <div>
                        <Link href={backButtonHref} className={cn(buttonVariants({ variant: "link" }), "h-0 p-0 text-sm")}>{backButtonLabel}</Link>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}