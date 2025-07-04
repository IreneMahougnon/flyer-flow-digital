
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  Send, 
  Eye, 
  TrendingUp, 
  Plus,
  Upload,
  Target
} from "lucide-react";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CampaignForm from '@/components/forms/CampaignForm';
import StatsCards from '@/components/stats/StatsCards';

const ClientDashboard = () => {
  const [showCampaignForm, setShowCampaignForm] = useState(false);

  const statsData = [
    {
      title: "Campagnes actives",
      value: "8",
      change: "+2",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Total des vues",
      value: "12,543",
      change: "+18%",
      icon: Eye,
      color: "text-green-600"
    },
    {
      title: "Taux d'engagement",
      value: "73%",
      change: "+12%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Distributeurs actifs",
      value: "24",
      change: "+3",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: "Promotion Été 2024",
      status: "active",
      distributeurs: 5,
      contacts: 1250,
      sent: 987,
      opened: 654,
      budget: "€2,500",
      progress: 79
    },
    {
      id: 2,
      name: "Lancement Nouveau Produit",
      status: "pending",
      distributeurs: 3,
      contacts: 750,
      sent: 0,
      opened: 0,
      budget: "€1,800",
      progress: 0
    },
    {
      id: 3,
      name: "Soldes d'Hiver",
      status: "completed",
      distributeurs: 8,
      contacts: 2100,
      sent: 2100,
      opened: 1575,
      budget: "€4,200",
      progress: 100
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole="client" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Tableau de bord Client" 
          userRole="client"
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Stats Cards */}
            <StatsCards stats={statsData} />
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                onClick={() => setShowCampaignForm(true)}
                className="h-20 text-left justify-start"
                variant="outline"
              >
                <div className="flex items-center space-x-3">
                  <Plus className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-medium">Nouvelle Campagne</div>
                    <div className="text-sm text-gray-500">Créer une distribution</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                className="h-20 text-left justify-start"
                variant="outline"
              >
                <div className="flex items-center space-x-3">
                  <Upload className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Téléverser Fichiers</div>
                    <div className="text-sm text-gray-500">Prospectus, vidéos, liens</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                className="h-20 text-left justify-start"
                variant="outline"
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-medium">Voir Rapports</div>
                    <div className="text-sm text-gray-500">Performances détaillées</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="campaigns" className="space-y-4">
              <TabsList>
                <TabsTrigger value="campaigns">Mes Campagnes</TabsTrigger>
                <TabsTrigger value="distributeurs">Distributeurs</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="files">Fichiers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="campaigns">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Toutes les campagnes</h3>
                    <Button onClick={() => setShowCampaignForm(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Nouvelle campagne
                    </Button>
                  </div>
                  
                  <div className="grid gap-4">
                    {campaigns.map((campaign) => (
                      <Card key={campaign.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{campaign.name}</CardTitle>
                              <CardDescription>
                                {campaign.distributeurs} distributeurs • Budget: {campaign.budget}
                              </CardDescription>
                            </div>
                            <Badge 
                              variant={
                                campaign.status === 'active' ? 'default' :
                                campaign.status === 'completed' ? 'secondary' : 'outline'
                              }
                            >
                              {campaign.status === 'active' ? 'Active' :
                               campaign.status === 'completed' ? 'Terminée' : 'En attente'}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{campaign.contacts}</div>
                              <div className="text-sm text-gray-500">Contacts</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">{campaign.sent}</div>
                              <div className="text-sm text-gray-500">Envoyés</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-600">{campaign.opened}</div>
                              <div className="text-sm text-gray-500">Ouverts</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-orange-600">
                                {campaign.sent > 0 ? Math.round((campaign.opened / campaign.sent) * 100) : 0}%
                              </div>
                              <div className="text-sm text-gray-500">Taux ouverture</div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progression</span>
                              <span>{campaign.progress}%</span>
                            </div>
                            <Progress value={campaign.progress} />
                          </div>
                          
                          <div className="flex justify-end mt-4">
                            <Button variant="outline" size="sm">
                              Voir détails
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="distributeurs">
                <Card>
                  <CardHeader>
                    <CardTitle>Distributeurs Assignés</CardTitle>
                    <CardDescription>
                      Gérez les distributeurs travaillant sur vos campagnes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Aucun distributeur assigné</p>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Assigner un distributeur
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Analyses et Statistiques</CardTitle>
                    <CardDescription>
                      Performances détaillées de vos campagnes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Rapports d'analyse disponibles bientôt</p>
                      <Button>Voir les statistiques</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="files">
                <Card>
                  <CardHeader>
                    <CardTitle>Fichiers de Campagne</CardTitle>
                    <CardDescription>
                      Gérez vos prospectus, images, vidéos et liens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Aucun fichier téléversé</p>
                      <Button>
                        <Upload className="h-4 w-4 mr-2" />
                        Téléverser des fichiers
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      
      {/* Campaign Form Modal */}
      {showCampaignForm && (
        <CampaignForm onClose={() => setShowCampaignForm(false)} />
      )}
    </div>
  );
};

export default ClientDashboard;
