
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar,
  BarChart3,
  TrendingUp,
  Users,
  MapPin,
  Plus
} from "lucide-react";

const RapportsPanel = () => {
  const rapports = [
    {
      id: 1,
      nom: "Rapport Mensuel - Juin 2024",
      type: "mensuel",
      periode: "01/06/2024 - 30/06/2024",
      dateGeneration: "2024-07-01",
      statut: "généré",
      donnees: {
        contacts: 89,
        messages: 445,
        tournees: 6,
        tauxOuverture: 68
      }
    },
    {
      id: 2,
      nom: "Rapport de Campagne - Promotion Été",
      type: "campagne",
      periode: "15/06/2024 - 30/06/2024",
      dateGeneration: "2024-07-01",
      statut: "généré",
      donnees: {
        contacts: 156,
        messages: 312,
        tournees: 8,
        tauxOuverture: 72
      }
    },
    {
      id: 3,
      nom: "Rapport Hebdomadaire - Semaine 26",
      type: "hebdomadaire",
      periode: "24/06/2024 - 30/06/2024",
      dateGeneration: "2024-07-01",
      statut: "en_cours",
      donnees: {
        contacts: 23,
        messages: 89,
        tournees: 2,
        tauxOuverture: 65
      }
    }
  ];

  const modeles = [
    {
      id: 1,
      nom: "Rapport Performance Distributeur",
      description: "Analyse complète de vos performances mensuelles",
      type: "performance",
      frequence: "Mensuel"
    },
    {
      id: 2,
      nom: "Rapport d'Activité Tournées",
      description: "Détail de vos tournées et contacts enregistrés",
      type: "activite",
      frequence: "Hebdomadaire"
    },
    {
      id: 3,
      nom: "Rapport Campagne Spécifique",
      description: "Analyse détaillée d'une campagne donnée",
      type: "campagne",
      frequence: "Sur demande"
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch(statut) {
      case 'généré':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Généré</Badge>;
      case 'en_cours':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">En cours</Badge>;
      case 'erreur':
        return <Badge variant="outline" className="bg-red-100 text-red-800">Erreur</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'mensuel':
        return <Calendar className="h-4 w-4 text-blue-600" />;
      case 'campagne':
        return <TrendingUp className="h-4 w-4 text-purple-600" />;
      case 'hebdomadaire':
        return <BarChart3 className="h-4 w-4 text-green-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Rapports d'Activité</h3>
          <p className="text-sm text-gray-500">
            Générez et téléchargez vos rapports de performance
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Rapport
        </Button>
      </div>

      {/* Rapports générés */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Rapports Récents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rapports.map((rapport) => (
              <div key={rapport.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {getTypeIcon(rapport.type)}
                      <h4 className="font-medium">{rapport.nom}</h4>
                      {getStatusBadge(rapport.statut)}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Période: {rapport.periode}
                    </p>
                    <p className="text-xs text-gray-400">
                      Généré le {new Date(rapport.dateGeneration).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  
                  {rapport.statut === 'généré' && (
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      Télécharger
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 bg-gray-50 rounded">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-sm font-medium">{rapport.donnees.contacts}</span>
                    </div>
                    <p className="text-xs text-gray-600">Contacts</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <FileText className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm font-medium">{rapport.donnees.messages}</span>
                    </div>
                    <p className="text-xs text-gray-600">Messages</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MapPin className="h-4 w-4 text-orange-600 mr-1" />
                      <span className="text-sm font-medium">{rapport.donnees.tournees}</span>
                    </div>
                    <p className="text-xs text-gray-600">Tournées</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="text-sm font-medium">{rapport.donnees.tauxOuverture}%</span>
                    </div>
                    <p className="text-xs text-gray-600">Taux ouverture</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modèles de rapports */}
      <Card>
        <CardHeader>
          <CardTitle>Modèles de Rapports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modeles.map((modele) => (
              <div key={modele.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{modele.nom}</h4>
                    <p className="text-sm text-gray-600 mb-2">{modele.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {modele.frequence}
                    </Badge>
                  </div>
                </div>
                
                <Button size="sm" className="w-full mt-3">
                  Générer Rapport
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Paramètres rapports */}
      <Card>
        <CardHeader>
          <CardTitle>Paramètres des Rapports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <h4 className="font-medium">Rapport Mensuel Automatique</h4>
                <p className="text-sm text-gray-500">Génération automatique chaque 1er du mois</p>
              </div>
              <Button variant="outline" size="sm">
                Configurer
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <h4 className="font-medium">Notifications Email</h4>
                <p className="text-sm text-gray-500">Recevoir une notification quand un rapport est prêt</p>
              </div>
              <Button variant="outline" size="sm">
                Paramétrer
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <h4 className="font-medium">Format d'Export</h4>
                <p className="text-sm text-gray-500">PDF, Excel, CSV disponibles</p>
              </div>
              <Button variant="outline" size="sm">
                Choisir
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RapportsPanel;
