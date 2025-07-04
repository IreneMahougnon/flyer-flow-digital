
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Edit,
  Trash2,
  Plus
} from "lucide-react";

interface ContactsListProps {
  onAddContact: () => void;
}

const ContactsList = ({ onAddContact }: ContactsListProps) => {
  const contacts = [
    {
      id: 1,
      nom: "Marie Dubois",
      telephone: "06 12 34 56 78",
      email: "marie.dubois@email.com",
      adresse: "15 Rue de la Paix, 75001 Paris",
      dateEnregistrement: "2024-06-15",
      campagne: "Promotion Été 2024",
      statut: "contacté"
    },
    {
      id: 2,
      nom: "Pierre Martin",
      telephone: "06 98 76 54 32",
      email: "p.martin@email.com",
      adresse: "8 Avenue Victor Hugo, 75016 Paris",
      dateEnregistrement: "2024-06-14",
      campagne: "Ouverture Nouveau Magasin",
      statut: "en_attente"
    },
    {
      id: 3,
      nom: "Sophie Leroy",
      telephone: "06 55 44 33 22",
      email: "sophie.leroy@email.com",
      adresse: "22 Boulevard Saint-Germain, 75005 Paris",
      dateEnregistrement: "2024-06-13",
      campagne: "Promotion Été 2024",
      statut: "contacté"
    },
    {
      id: 4,
      nom: "Lucas Bernard",
      telephone: "06 11 22 33 44",
      email: "lucas.bernard@email.com",
      adresse: "5 Place de la République, 75003 Paris",
      dateEnregistrement: "2024-06-12",
      campagne: "Soldes d'Hiver",
      statut: "non_contacté"
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch(statut) {
      case 'contacté':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Contacté</Badge>;
      case 'en_attente':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">En attente</Badge>;
      case 'non_contacté':
        return <Badge variant="outline" className="bg-gray-100 text-gray-600">Non contacté</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Mes Contacts</h3>
          <p className="text-sm text-gray-500">
            {contacts.length} personnes enregistrées
          </p>
        </div>
        <Button onClick={onAddContact}>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Contact
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Liste des Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Adresse</TableHead>
                <TableHead>Campagne</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">
                    {contact.nom}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-1" />
                        {contact.telephone}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="h-3 w-3 mr-1" />
                        {contact.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-start text-sm">
                      <MapPin className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{contact.adresse}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{contact.campagne}</div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(contact.statut)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(contact.dateEnregistrement).toLocaleDateString('fr-FR')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactsList;
