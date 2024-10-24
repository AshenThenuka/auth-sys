import { CircleCheck } from "lucide-react";

export const AlertSuccess = ({
    message
}: {
    message?: string;
}) => {

    if (!message) return null;

    return (
        <>
            <div className="flex items-center gap-x-3 p-3 rounded-md px-4 border dark:bg-green-950/20 dark:text-green-600 dark:border-green-900/40 bg-green-100 text-green-600 border-green-200">
                <CircleCheck className="w-5 h-5 min-w-5 min-h-5" />
                <p className="text-xs font-medium">{message}</p>
            </div>
        </>
    )

}