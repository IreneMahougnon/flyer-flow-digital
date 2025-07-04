
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Smartphone,
  Clock,
  CheckCircle,
  XCircle,
  Eye
} from "lucide-react";

const MessagesPanel = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  const messagesEnvoyes = [
    {
      id: 1,
      destinataire: "Marie Dubois",
      type: "whatsapp",
      contenu: "🎉 Nouvelle promotion été ! Jusqu'à -50% sur tous nos produits. Valable jusqu'au 31/07.",
      dateEnvoi: "2024-06-15 14:30",
      statut: "livré",
      ouvert: true,
      campagne: "Promotion Été 2024"
    },
    {
      id: 2,
      destinataire: "Pierre Martin",
      type: "sms",
      contenu: "Votre nouveau magasin Fashion Store ouvre demain ! Découvrez nos collections exclusives.",
      dateEnvoi: "2024-06-14 16:45",
      statut: "livré",
      ouvert: false,
      campagne: "Ouverture Nouveau Magasin"
    },
    {
      id: 3,
      destinataire: "Sophie Leroy",
      type: "email",
      contenu: "Soldes d'été exceptionnels chez Electronics Pro ! Smartphones, tablettes, ordinateurs...",
      dateEnvoi: "2024-06-13 10:15",
      statut: "en_cours",
      ouvert: null,
      campagne: "Promotion Été 2024"
    },
    {
      id: 4,
      destinataire: "Lucas Bernard",
      type: "whatsapp",
      contenu: "❄️ Soldes d'hiver ! Dernière chance pour profiter de nos offres exceptionnelles.",
      dateEnvoi: "2024-06-12 09:00",
      statut: "echec",
      ouvert: false,
      campagne: "Soldes d'Hiver"
    }
  ];

  const brouillons = [
    {
      id: 5,
      destinataire: "Groupe Promotions",
      type: "email",
      contenu: "Nouvelle collection automne disponible...",
      dateCreation: "2024-06-15 11:20",
      campagne: "Collection Automne"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'whatsapp':
        return <Smartphone className="h-4 w-4 text-green-600" />;
      case 'sms':
        return <MessageSquare className="h-4 w-4 text-blue-600" />;
      case 'email':
        return <Mail className="h-4 w-4 text-purple-600" />;
      default:
        return <Send className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (statut: string, ouvert?: boolean | null) => {
    switch(statut) {
      case 'livré':
        return (
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Livré
            </Badge>
            {ouvert !== null && (
              <Badge variant="outline" className={ouvert ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}>
                <Eye className="h-3 w-3 mr-1" />
                {ouvert ? "Lu" : "Non lu"}
              </Badge>
            )}
          </div>
        );
      case 'en_cours':
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            En cours
          </Badge>
        );
      case 'echec':
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" />
            Échec
          </Badge>
        );
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Messages</h3>
          <p className="text-sm text-gray-500">
            Gérez vos communications digitales
          </p>
        </div>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Nouveau Message
        </Button>
      </div>

      <Tabs defaultValue="envoyes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="envoyes">Messages Envoyés</TabsTrigger>
          <TabsTrigger value="brouillons">Brouillons</TabsTrigger>
          <TabsTrigger value="planifies">Planifiés</TabsTrigger>
        </TabsList>

        <TabsContent value="envoyes">
          <Card>
            <CardHeader>
              <CardTitle>Messages Envoyés ({messagesEnvoyes.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messagesEnvoyes.map((message) => (
                  <div 
                    key={message.id} 
                    className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedMessage(selectedMessage === message.id ? null : message.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getTypeIcon(message.type)}
                          <span className="font-medium">{message.destinataire}</span>
                          <Badge variant="outline" className="text-xs">
                            {message.campagne}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {message.contenu}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {new Date(message.dateEnvoi).toLocaleString('fr-FR')}
                          </span>
                          {getStatusBadge(message.statut, message.ouvert)}
                        </div>
                      </div>
                    </div>
                    
                    {selectedMessage === message.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="bg-gray-50 p-3 rounded text-sm">
                          <strong>Contenu complet :</strong>
                          <p className="mt-2">{message.contenu}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brouillons">
          <Card>
            <CardHeader>
              <CardTitle>Brouillons ({brouillons.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brouillons.map((brouillon) => (
                  <div key={brouillon.id} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      {getTypeIcon(brouillon.type)}
                      <span className="font-medium">{brouillon.destinataire}</span>
                      <Badge variant="outline">Brouillon</Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {brouillon.contenu}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        Créé le {new Date(brouillon.dateCreation).toLocaleString('fr-FR')}
                      </span>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">Modifier</Button>
                        <Button size="sm">Envoyer</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planifies">
          <Card>
            <CardHeader>
              <CardTitle>Messages Planifiés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Aucun message planifié</p>
                <Button>
                  <Clock className="h-4 w-4 mr-2" />
                  Planifier un message
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MessagesPanel;
