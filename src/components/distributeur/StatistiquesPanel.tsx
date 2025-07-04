
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Send,
  Eye,
  Target,
  Calendar,
  MapPin
} from "lucide-react";

const StatistiquesPanel = () => {
  const statsGenerales = {
    contactsTotal: 248,
    messagesEnvoyes: 1432,
    tauxOuverture: 68,
    zonesConvertes: 12,
    tourneesEffectuees: 15,
    prospectusDistribues: 2847
  };

  const statsMensuelles = [
    { mois: "Juin 2024", contacts: 89, messages: 445, tournees: 6 },
    { mois: "Mai 2024", contacts: 76, messages: 387, tournees: 5 },
    { mois: "Avril 2024", contacts: 83, messages: 600, tournees: 4 }
  ];

  const performanceParZone = [
    { zone: "Paris 1er", contacts: 45, tauxReponse: 72, progression: 85 },
    { zone: "Paris 5ème", contacts: 38, tauxReponse: 65, progression: 70 },
    { zone: "Paris 16ème", contacts: 52, tauxReponse: 78, progression: 90 },
    { zone: "Paris 18ème", contacts: 29, tauxReponse: 58, progression: 60 }
  ];

  const campaignesPerformance = [
    { nom: "Promotion Été 2024", contacts: 156, ouvertures: 112, clics: 78, conversion: 71.8 },
    { nom: "Ouverture Nouveau Magasin", contacts: 89, ouvertures: 76, clics: 45, conversion: 85.4 },
    { nom: "Soldes d'Hiver", contacts: 203, ouvertures: 134, clics: 89, conversion: 66.0 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Statistiques</h3>
          <p className="text-sm text-gray-500">
            Analyse de vos performances de distribution
          </p>
        </div>
      </div>

      {/* Statistiques générales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Contacts Total</p>
                <p className="text-2xl font-bold">{statsGenerales.contactsTotal}</p>
                <p className="text-xs text-green-600">+12% ce mois</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Messages Envoyés</p>
                <p className="text-2xl font-bold">{statsGenerales.messagesEnvoyes}</p>
                <p className="text-xs text-green-600">+8% ce mois</p>
              </div>
              <Send className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taux d'Ouverture</p>
                <p className="text-2xl font-bold">{statsGenerales.tauxOuverture}%</p>
                <p className="text-xs text-green-600">+5% ce mois</p>
              </div>
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Zones Couvertes</p>
                <p className="text-2xl font-bold">{statsGenerales.zonesConvertes}</p>
                <p className="text-xs text-blue-600">+2 zones</p>
              </div>
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tournées Effectuées</p>
                <p className="text-2xl font-bold">{statsGenerales.tourneesEffectuees}</p>
                <p className="text-xs text-green-600">+3 ce mois</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Prospectus Distribués</p>
                <p className="text-2xl font-bold">{statsGenerales.prospectusDistribues}</p>
                <p className="text-xs text-green-600">+15% ce mois</p>
              </div>
              <Target className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Évolution mensuelle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Évolution Mensuelle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {statsMensuelles.map((stat, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{stat.mois}</h4>
                  <div className="text-sm text-gray-500">
                    {stat.tournees} tournées effectuées
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Nouveaux contacts</p>
                    <p className="text-xl font-semibold text-blue-600">{stat.contacts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Messages envoyés</p>
                    <p className="text-xl font-semibold text-green-600">{stat.messages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance par zone */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Performance par Zone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceParZone.map((zone, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{zone.zone}</span>
                  <div className="text-sm text-gray-500">
                    {zone.contacts} contacts • {zone.tauxReponse}% de réponse
                  </div>
                </div>
                <Progress value={zone.progression} className="h-2" />
                <div className="text-xs text-gray-400">
                  Progression: {zone.progression}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance des campagnes */}
      <Card>
        <CardHeader>
          <CardTitle>Performance des Campagnes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignesPerformance.map((campagne, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">{campagne.nom}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Contacts</p>
                    <p className="text-lg font-semibold">{campagne.contacts}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Ouvertures</p>
                    <p className="text-lg font-semibold text-blue-600">{campagne.ouvertures}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Clics</p>
                    <p className="text-lg font-semibold text-green-600">{campagne.clics}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Taux Conversion</p>
                    <p className="text-lg font-semibold text-purple-600">{campagne.conversion}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatistiquesPanel;
