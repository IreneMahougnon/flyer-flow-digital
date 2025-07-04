
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock,
  Plus,
  Edit,
  Users,
  Route
} from "lucide-react";

const PlanningTournees = () => {
  const tournees = [
    {
      id: 1,
      nom: "Tournée Centre-Ville",
      date: "2024-06-20",
      heureDebut: "09:00",
      heureFin: "17:00",
      zone: "Paris 1er - Centre",
      adresses: [
        "15 Rue de Rivoli, 75001 Paris",
        "8 Place Vendôme, 75001 Paris",
        "22 Rue Saint-Honoré, 75001 Paris",
        "5 Rue de Castiglione, 75001 Paris"
      ],
      campagne: "Promotion Été 2024",
      statut: "planifiée",
      contactsPrevu: 25,
      prospectusQuantite: 100
    },
    {
      id: 2,
      nom: "Tournée Quartier Latin",
      date: "2024-06-22",
      heureDebut: "14:00",
      heureFin: "18:00",
      zone: "Paris 5ème - Quartier Latin",
      adresses: [
        "12 Boulevard Saint-Michel, 75005 Paris",
        "18 Rue de la Sorbonne, 75005 Paris",
        "25 Rue Mouffetard, 75005 Paris"
      ],
      campagne: "Ouverture Nouveau Magasin",
      statut: "en_cours",
      contactsPrevu: 15,
      prospectusQuantite: 75
    },
    {
      id: 3,
      nom: "Tournée Montmartre",
      date: "2024-06-18",
      heureDebut: "10:00",
      heureFin: "16:00",
      zone: "Paris 18ème - Montmartre",
      adresses: [
        "Place du Tertre, 75018 Paris",
        "Rue des Abbesses, 75018 Paris",
        "Boulevard de Clichy, 75018 Paris"
      ],
      campagne: "Promotion Été 2024",
      statut: "terminée",
      contactsPrevu: 20,
      prospectusQuantite: 80
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch(statut) {
      case 'planifiée':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">Planifiée</Badge>;
      case 'en_cours':
        return <Badge variant="default" className="bg-orange-100 text-orange-800">En cours</Badge>;
      case 'terminée':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Terminée</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Planning des Tournées</h3>
          <p className="text-sm text-gray-500">
            Organisez et suivez vos distributions
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Tournée
        </Button>
      </div>

      {/* Tournées à venir */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Prochaines Tournées
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tournees
              .filter(t => t.statut === 'planifiée' || t.statut === 'en_cours')
              .map((tournee) => (
              <div key={tournee.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium flex items-center">
                      <Route className="h-4 w-4 mr-2" />
                      {tournee.nom}
                    </h4>
                    <p className="text-sm text-gray-500">{tournee.campagne}</p>
                  </div>
                  {getStatusBadge(tournee.statut)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{new Date(tournee.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{tournee.heureDebut} - {tournee.heureFin}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{tournee.zone}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{tournee.contactsPrevu} contacts prévus</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {tournee.prospectusQuantite} prospectus à distribuer
                    </div>
                    <div className="text-sm text-gray-600">
                      {tournee.adresses.length} adresses
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium mb-2">Adresses à visiter :</p>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    {tournee.adresses.map((adresse, index) => (
                      <div key={index} className="flex items-center mb-1 last:mb-0">
                        <span className="text-gray-400 mr-2">{index + 1}.</span>
                        <span>{adresse}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">
                    Créé le {new Date().toLocaleDateString('fr-FR')}
                  </div>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3 mr-1" />
                      Modifier
                    </Button>
                    <Button size="sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      Voir Itinéraire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Historique */}
      <Card>
        <CardHeader>
          <CardTitle>Tournées Terminées</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tournees
              .filter(t => t.statut === 'terminée')
              .map((tournee) => (
              <div key={tournee.id} className="border rounded-lg p-3 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{tournee.nom}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(tournee.date).toLocaleDateString('fr-FR')} • {tournee.zone}
                    </p>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(tournee.statut)}
                    <p className="text-sm text-gray-500 mt-1">
                      {tournee.contactsPrevu} contacts
                    </p>
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

export default PlanningTournees;
