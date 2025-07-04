
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  CheckCircle,
  AlertCircle,
  BarChart3
} from "lucide-react";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import StatsCards from '@/components/stats/StatsCards';

const ResponsableDashboard = () => {
  const statsData = [
    {
      title: "Distributeurs supervisés",
      value: "15",
      change: "+2",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Zones couvertes",
      value: "8",
      change: "+1",
      icon: MapPin,
      color: "text-green-600"
    },
    {
      title: "Performance moyenne",
      value: "78%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Rapports en attente",
      value: "3",
      change: "-2",
      icon: AlertCircle,
      color: "text-orange-600"
    }
  ];

  const distributeurs = [
    {
      id: 1,
      name: "Marie Dubois",
      zone: "Centre-ville",
      campaigns: 3,
      contacts: 156,
      performance: 85,
      status: "active",
      lastActivity: "Il y a 2h"
    },
    {
      id: 2,
      name: "Jean Martin",
      zone: "Quartier Nord",
      campaigns: 2,
      contacts: 89,
      performance: 72,
      status: "active",
      lastActivity: "Il y a 5h"
    },
    {
      id: 3,
      name: "Sophie Bernard",
      zone: "Zone Commerciale",
      campaigns: 4,
      contacts: 203,
      performance: 91,
      status: "inactive",
      lastActivity: "Il y a 2 jours"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole="responsable" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Tableau de bord Responsable" 
          userRole="responsable"
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Stats Cards */}
            <StatsCards stats={statsData} />

            {/* Main Content Tabs */}
            <Tabs defaultValue="distributeurs" className="space-y-4">
              <TabsList>
                <TabsTrigger value="distributeurs">Mes Distributeurs</TabsTrigger>
                <TabsTrigger value="zones">Zones</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="rapports">Rapports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="distributeurs">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Distributeurs supervisés</h3>
                    <Badge variant="secondary">{distributeurs.length} distributeurs</Badge>
                  </div>
                  
                  <div className="grid gap-4">
                    {distributeurs.map((distributeur) => (
                      <Card key={distributeur.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">{distributeur.name}</h4>
                              <p className="text-sm text-gray-500">{distributeur.zone}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge 
                                variant={distributeur.status === 'active' ? 'default' : 'secondary'}
                              >
                                {distributeur.status === 'active' ? 'Actif' : 'Inactif'}
                              </Badge>
                              <div className={`w-3 h-3 rounded-full ${
                                distributeur.performance >= 80 ? 'bg-green-500' :
                                distributeur.performance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                              }`} />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-blue-600">{distributeur.campaigns}</div>
                              <div className="text-xs text-gray-500">Campagnes</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-green-600">{distributeur.contacts}</div>
                              <div className="text-xs text-gray-500">Contacts</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-purple-600">{distributeur.performance}%</div>
                              <div className="text-xs text-gray-500">Performance</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500">{distributeur.lastActivity}</div>
                              <div className="text-xs text-gray-400">Dernière activité</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="zones">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestion des Zones</CardTitle>
                    <CardDescription>
                      Zones géographiques sous votre supervision
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Carte des zones bientôt disponible</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performance">
                <Card>
                  <CardHeader>
                    <CardTitle>Analyse des Performances</CardTitle>
                    <CardDescription>
                      Évaluation des distributeurs et campagnes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Graphiques de performance en développement</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rapports">
                <Card>
                  <CardHeader>
                    <CardTitle>Validation des Rapports</CardTitle>
                    <CardDescription>
                      Rapports en attente d'approbation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Aucun rapport en attente</p>
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

export default ResponsableDashboard;
