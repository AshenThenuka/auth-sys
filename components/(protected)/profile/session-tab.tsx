import { auth } from "@/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const SessionTab = async () => {

    const session = await auth();

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Session Details</CardTitle>
                    <CardDescription>You can view your session details here.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">ID</div>
                                <div className="truncate w-[150px] p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">{session?.user?.id}</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Name</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium bg-neutral-200 dark:bg-neutral-900">{session?.user?.name}</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Email</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium bg-neutral-200 dark:bg-neutral-900">{session?.user?.email}</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Role</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">{session?.user?.role}</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Verfiy Status</div>
                                {!session?.user?.verified ?
                                    <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-green-200 dark:bg-red-900">Not Verified</div>
                                    :
                                    <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-red-200 dark:bg-green-900">Verified</div>
                                }
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Session Expires In</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">{session?.expires}</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>

    )
}