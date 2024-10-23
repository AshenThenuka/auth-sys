import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileTab } from "./profile-tab"
import { SettingsTab } from "./settings-tab"
import { SessionTab } from "./session-tab"

export const ProfileCard = () => {
    return (
        <>
            <Tabs defaultValue="profile" className="mx-auto max-w-lg w-full">
                <TabsList>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="session">Session</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <ProfileTab />
                </TabsContent>
                <TabsContent value="session">
                    <SessionTab />
                </TabsContent>
                <TabsContent value="settings">
                    <SettingsTab />
                </TabsContent>
            </Tabs>
        </>
    )
}