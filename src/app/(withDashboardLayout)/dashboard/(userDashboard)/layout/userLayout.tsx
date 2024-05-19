import { NavbarWrapper } from "@/app/(withdashboardlayout)/components/dashboardNavbar/dashboardNavbar";
import { UserSidebarWrapper } from "@/app/(withdashboardlayout)/components/sideBar/userSidebar";


export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <UserSidebarWrapper></UserSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}