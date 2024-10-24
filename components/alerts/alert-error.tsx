import { CircleAlert } from "lucide-react";

export const AlertError = ({
    message
}: {
    message?: string;
}) => {

    if (!message) return null;

    return (
        <>
            <div className="flex items-center gap-x-3 p-3 rounded-md px-4 border dark:bg-red-950/20 dark:text-red-500 dark:border-red-900/40 bg-red-50 text-destructive border-red-200">
                <CircleAlert className="w-5 h-5 min-w-5 min-h-5" />
                <p className="text-xs font-medium">{message}</p>
            </div>
        </>
    )

}