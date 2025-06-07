
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppSidebar from '@/components/layout/AppSidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full bg-blt-gray">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
