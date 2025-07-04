
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Send, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Plus,
  FileText,
  Smartphone
} from "lucide-react";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ContactForm from '@/components/forms/ContactForm';
import StatsCards from '@/components/stats/StatsCards';
import ContactsList from '@/components/distributeur/ContactsList';
import MessagesPanel from '@/components/distributeur/MessagesPanel';
import PlanningTournees from '@/components/distributeur/PlanningTournees';
import StatistiquesPanel from '@/components/distributeur/StatistiquesPanel';
import RapportsPanel from '@/components/distributeur/RapportsPanel';

const DistributeurDashboard = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const statsData = [
    {
      title: "Contacts enregistrés",
      value: "248",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Messages envoyés",
      value: "1,432",
      change: "+8%",
      icon: Send,
      color: "text-green-600"
    },
    {
      title: "Taux d'ouverture",
      value: "68%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Zones couvertes",
      value: "12",
      change: "+2",
      icon: MapPin,
      color: "text-orange-600"
    }
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: "Promotion Été 2024",
      client: "SuperMarché Plus",
      status: "active",
      progress: 75,
      contacts: 156,
      sent: 117
    },
    {
      id: 2,
      name: "Ouverture Nouveau Magasin",
      client: "Fashion Store",
      status: "completed",
      progress: 100,
      contacts: 89,
      sent: 89
    },
    {
      id: 3,
      name: "Soldes d'Hiver",
      client: "Electronics Pro",
      status: "pending",
      progress: 25,
      contacts: 203,
      sent: 51
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole="distributeur" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Tableau de bord Distributeur" 
          userRole="distributeur"
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Stats Cards */}
            <StatsCards stats={statsData} />
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                onClick={() => setShowContactForm(true)}
                className="h-20 text-left justify-start"
                variant="outline"
              >
                <div className="flex items-center space-x-3">
                  <Plus className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-medium">Nouveau Contact</div>
                    <div className="text-sm text-gray-500">Enregistrer une personne</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                className="h-20 text-left justify-start"
                variant="outline"
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Envoyer Messages</div>
                    <div className="text-sm text-gray-500">WhatsApp, SMS, Email</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                className="h-20 text-left justify-start"
                variant="outline"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-medium">Planifier Tournée</div>
                    <div className="text-sm text-gray-500">Organiser distribution</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="campaigns" className="space-y-4">
              <TabsList>
                <TabsTrigger value="campaigns">Campagnes Actives</TabsTrigger>
                <TabsTrigger value="contacts">Mes Contacts</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="planning">Planning</TabsTrigger>
                <TabsTrigger value="statistics">Statistiques</TabsTrigger>
                <TabsTrigger value="reports">Rapports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="campaigns">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Campagnes en cours</h3>
                    <Badge variant="secondary">{recentCampaigns.length} actives</Badge>
                  </div>
                  
                  <div className="grid gap-4">
                    {recentCampaigns.map((campaign) => (
                      <Card key={campaign.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">{campaign.name}</h4>
                              <p className="text-sm text-gray-500">{campaign.client}</p>
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
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progression</span>
                              <span>{campaign.sent}/{campaign.contacts} envoyés</span>
                            </div>
                            <Progress value={campaign.progress} />
                          </div>
                          
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-4 text-sm text-gray-500">
                              <span>{campaign.contacts} contacts</span>
                              <span>{campaign.sent} envoyés</span>
                            </div>
                            <Button size="sm" variant="outline">
                              Voir détails
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contacts">
                <ContactsList onAddContact={() => setShowContactForm(true)} />
              </TabsContent>
              
              <TabsContent value="messages">
                <MessagesPanel />
              </TabsContent>
              
              <TabsContent value="planning">
                <PlanningTournees />
              </TabsContent>
              
              <TabsContent value="statistics">
                <StatistiquesPanel />
              </TabsContent>
              
              <TabsContent value="reports">
                <RapportsPanel />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      
      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

export default DistributeurDashboard;
