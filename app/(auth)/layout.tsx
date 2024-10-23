const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen py-10 px-4">
                {children}
            </div>
        </>
    )
}

export default AuthLayout;