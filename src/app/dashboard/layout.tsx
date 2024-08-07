// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from '@/components';
import { CiBellOn, CiBookmarkCheck, CiChat1, CiLogout, CiMenuBurger, CiSearch } from 'react-icons/ci';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar/>

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        
        <TopMenu/>

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6 bg-white m-2 p-2 rounded-md">
           {children}
        </div>
      </div>
    </>
  );
}