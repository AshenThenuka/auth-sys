import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const SessionTab = () => {
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
                                <div className="truncate w-[150px] p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">AshenThenukaNethmalGunasekara</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Name</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium bg-neutral-200 dark:bg-neutral-900">Ashen Thenuka</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Email</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium bg-neutral-200 dark:bg-neutral-900">ashenthenuka123@gmail.com</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Role</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">USER</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Verfiy Status</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">Verified</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Session Expires In</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">123456789987654</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}