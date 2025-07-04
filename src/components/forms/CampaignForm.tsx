
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Target, Calendar, DollarSign } from "lucide-react";

interface CampaignFormProps {
  onClose: () => void;
}

const CampaignForm = ({ onClose }: CampaignFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    budget: '',
    startDate: '',
    endDate: '',
    targetAudience: '',
    distributionType: '',
    messageType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.budget || !formData.startDate) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Simulation de création de campagne
    console.log('Nouvelle campagne:', formData);
    toast.success("Campagne créée avec succès!");
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Créer une nouvelle campagne
          </DialogTitle>
          <DialogDescription>
            Définissez les paramètres de votre campagne de distribution
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom de la campagne *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ex: Promotion Été 2024"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Décrivez l'objectif et le contenu de votre campagne..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="budget">Budget (€) *</Label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                placeholder="2500"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="targetAudience">Public cible</Label>
              <Select value={formData.targetAudience} onValueChange={(value) => handleChange('targetAudience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le public" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tout public</SelectItem>
                  <SelectItem value="young">18-35 ans</SelectItem>
                  <SelectItem value="adult">35-55 ans</SelectItem>
                  <SelectItem value="senior">55+ ans</SelectItem>
                  <SelectItem value="families">Familles</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Date de début *</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="endDate">Date de fin</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="distributionType">Type de distribution</Label>
            <Select value={formData.distributionType} onValueChange={(value) => handleChange('distributionType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Comment distribuer ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="door-to-door">Porte-à-porte</SelectItem>
                <SelectItem value="street">Distribution rue</SelectItem>
                <SelectItem value="events">Événements</SelectItem>
                <SelectItem value="business">Commerces</SelectItem>
                <SelectItem value="mixed">Mixte</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="messageType">Type de message numérique</Label>
            <Select value={formData.messageType} onValueChange={(value) => handleChange('messageType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Quel type de contenu ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">Image/Prospectus</SelectItem>
                <SelectItem value="video">Vidéo</SelectItem>
                <SelectItem value="link">Lien web</SelectItem>
                <SelectItem value="text">Message texte</SelectItem>
                <SelectItem value="combo">Combiné</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit">
              Créer la campagne
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignForm;
