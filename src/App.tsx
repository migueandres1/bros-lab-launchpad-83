
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

// App Layout and Pages
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import Subscription from "./pages/app/Subscription";

// Admin Layout and Pages
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected User App Routes */}
            <Route path="/app" element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="billing" element={<div className="p-6"><h1 className="text-2xl font-bold">Facturación - Próximamente</h1></div>} />
              <Route path="support" element={<div className="p-6"><h1 className="text-2xl font-bold">Soporte - Próximamente</h1></div>} />
              <Route path="privacy" element={<div className="p-6"><h1 className="text-2xl font-bold">Privacidad - Próximamente</h1></div>} />
            </Route>

            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<div className="p-6"><h1 className="text-2xl font-bold">Gestión de Usuarios - Próximamente</h1></div>} />
              <Route path="support" element={<div className="p-6"><h1 className="text-2xl font-bold">Tickets de Soporte - Próximamente</h1></div>} />
              <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Configuración - Próximamente</h1></div>} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
