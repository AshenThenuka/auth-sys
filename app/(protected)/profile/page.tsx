import { ProfileCard } from "@/components/(protected)/profile/profile-card";

const ProfilePage = () => {
    return (
        <>
            <div className="container">
                <div className="flex items-center justify-center min-h-screen py-5">
                    <ProfileCard />
                </div>
            </div>
        </>
    );
}

export default ProfilePage;