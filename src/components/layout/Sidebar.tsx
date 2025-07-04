
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Send, 
  BarChart3, 
  Settings, 
  LogOut,
  Target,
  Upload,
  MapPin,
  FileText,
  Building2,
  Shield,
  Database
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  userRole: string;
}

const Sidebar = ({ userRole }: SidebarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const getMenuItems = () => {
    switch(userRole) {
      case 'distributeur':
        return [
          { icon: Home, label: 'Tableau de bord', active: true },
          { icon: Users, label: 'Mes Contacts' },
          { icon: Send, label: 'Messages' },
          { icon: MapPin, label: 'Tournées' },
          { icon: BarChart3, label: 'Statistiques' },
          { icon: FileText, label: 'Rapports' }
        ];
      case 'client':
        return [
          { icon: Home, label: 'Tableau de bord', active: true },
          { icon: Target, label: 'Campagnes' },
          { icon: Upload, label: 'Fichiers' },
          { icon: Users, label: 'Distributeurs' },
          { icon: BarChart3, label: 'Analytics' },
          { icon: Settings, label: 'Paramètres' }
        ];
      case 'responsable':
        return [
          { icon: Home, label: 'Tableau de bord', active: true },
          { icon: Users, label: 'Distributeurs' },
          { icon: MapPin, label: 'Zones' },
          { icon: BarChart3, label: 'Performance' },
          { icon: FileText, label: 'Rapports' }
        ];
      case 'admin':
        return [
          { icon: Home, label: 'Tableau de bord', active: true },
          { icon: Users, label: 'Utilisateurs' },
          { icon: Building2, label: 'Entreprises' },
          { icon: Target, label: 'Campagnes' },
          { icon: Database, label: 'Système' },
          { icon: Settings, label: 'Paramètres' }
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-900">Flyer Flow</h1>
        <p className="text-sm text-gray-500 capitalize">{userRole}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant={item.active ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Déconnexion
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
