
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DistributeurDashboard from '@/components/dashboards/DistributeurDashboard';
import ClientDashboard from '@/components/dashboards/ClientDashboard';
import ResponsableDashboard from '@/components/dashboards/ResponsableDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';

const Dashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (!role) {
      navigate('/login');
      return;
    }
    setUserRole(role);
  }, [navigate]);

  const renderDashboard = () => {
    switch(userRole) {
      case 'distributeur':
        return <DistributeurDashboard />;
      case 'client':
        return <ClientDashboard />;
      case 'responsable':
        return <ResponsableDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <div>Rôle non reconnu</div>;
    }
  };

  if (!userRole) {
    return <div>Chargement...</div>;
  }

  return renderDashboard();
};

export default Dashboard;
