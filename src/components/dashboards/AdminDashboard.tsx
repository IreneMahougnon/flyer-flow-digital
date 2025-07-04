
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  Shield, 
  Database,
  Settings,
  TrendingUp
} from "lucide-react";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import StatsCards from '@/components/stats/StatsCards';

const AdminDashboard = () => {
  const statsData = [
    {
      title: "Total Utilisateurs",
      value: "1,234",
      change: "+18%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Entreprises clientes",
      value: "89",
      change: "+12%",
      icon: Building2,
      color: "text-green-600"
    },
    {
      title: "Campagnes totales",
      value: "456",
      change: "+24%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Données stockées",
      value: "2.4 GB",
      change: "+8%",
      icon: Database,
      color: "text-orange-600"
    }
  ];

  const recentUsers = [
    { id: 1, name: "Marie Dubois", role: "Distributeur", status: "active", joined: "2024-01-15" },
    { id: 2, name: "SuperMarché Plus", role: "Client", status: "active", joined: "2024-01-12" },
    { id: 3, name: "Jean Martin", role: "Responsable", status: "pending", joined: "2024-01-10" },
    { id: 4, name: "Fashion Store", role: "Client", status: "active", joined: "2024-01-08" }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Administration Système" 
          userRole="admin"
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Stats Cards */}
            <StatsCards stats={statsData} />

            {/* Main Content Tabs */}
            <Tabs defaultValue="users" className="space-y-4">
              <TabsList>
                <TabsTrigger value="users">Utilisateurs</TabsTrigger>
                <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
                <TabsTrigger value="system">Système</TabsTrigger>
                <TabsTrigger value="settings">Paramètres</TabsTrigger>
              </TabsList>
              
              <TabsContent value="users">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Gestion des utilisateurs</h3>
                    <Badge variant="secondary">{recentUsers.length} récents</Badge>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Utilisateurs récents</CardTitle>
                      <CardDescription>Derniers comptes créés</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentUsers.map((user) => (
                          <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                                user.role === 'Distributeur' ? 'bg-blue-500' :
                                user.role === 'Client' ? 'bg-green-500' :
                                user.role === 'Responsable' ? 'bg-purple-500' : 'bg-gray-500'
                              }`}>
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.role}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                                {user.status === 'active' ? 'Actif' : 'En attente'}
                              </Badge>
                              <span className="text-sm text-gray-500">{user.joined}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="campaigns">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestion des Campagnes</CardTitle>
                    <CardDescription>
                      Vue d'ensemble de toutes les campagnes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Tableau de bord des campagnes en développement</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="system">
                <Card>
                  <CardHeader>
                    <CardTitle>Surveillance Système</CardTitle>
                    <CardDescription>
                      État et performances de la plateforme
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Monitoring système bientôt disponible</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres Globaux</CardTitle>
                    <CardDescription>
                      Configuration de la plateforme
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Interface de configuration en développement</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
