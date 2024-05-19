import UserLayout from "./layout/userLayout";

export default function userLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {/* <UserSidebarWrapper /> */}
        <UserLayout>
          {children}
          </UserLayout>
      
    </div>
  );
}