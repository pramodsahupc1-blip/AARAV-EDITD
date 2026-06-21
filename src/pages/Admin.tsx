import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AdminLayout } from "../components/admin/AdminLayout";
import { DashboardOverview } from "../components/admin/DashboardOverview";
import { PortfolioManager } from "../components/admin/PortfolioManager";
import { ServicesManager } from "../components/admin/ServicesManager";
import { MessagesManager } from "../components/admin/MessagesManager";
import { ContentManager } from "../components/admin/ContentManager";
import { AdminLogin } from "../components/admin/AdminLogin";
import { ComingSoon } from "../components/admin/ComingSoon";

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <AdminLayout onLogout={() => setIsAuthenticated(false)}>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/portfolio" element={<PortfolioManager />} />
        <Route path="/services" element={<ServicesManager />} />
        <Route path="/users" element={<ComingSoon title="User Management" />} />
        <Route path="/messages" element={<MessagesManager />} />
        <Route path="/content" element={<ContentManager />} />
        <Route path="/social" element={<ComingSoon title="Social Media" />} />
        <Route path="/analytics" element={<ComingSoon title="Analytics Hub" />} />
        <Route path="/settings" element={<ComingSoon title="Settings" />} />
        <Route path="/security" element={<ComingSoon title="Security" />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
}
