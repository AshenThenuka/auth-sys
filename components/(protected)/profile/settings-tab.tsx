import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const SettingsTab = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>You can update your settings here.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
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
                                <div className="font-bold text-gray-500 text-xs">Theme</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">DARK</div>
                            </div>
                        </div>
                        <div className="border p-2 rounded-md shadow-sm ps-4 w-full">
                            <div className="flex items-center justify-between h-full">
                                <div className="font-bold text-gray-500 text-xs">Session Expires In</div>
                                <div className="p-2 px-3 rounded-sm text-xs font-medium font-mono bg-neutral-200 dark:bg-neutral-900">123456789987654</div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="border border-destructive rounded-md p-2 w-full ps-4">
                                <div className="flex items-center justify-between h-full">
                                    <div className="">
                                        <div className="font-bold font-onest text-red-500 text-xs">Delete Account</div>
                                        <div className="text-xs text-neutral-500 w-11/12">Permanently delete your account and all associated data.</div>
                                    </div>
                                    <div>
                                        <Button variant="destructive" size="sm" className="text-xs" >Delete Account</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}