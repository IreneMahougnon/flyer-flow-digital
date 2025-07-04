
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Building2, 
  MapPin, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Send,
  Target,
  BarChart3
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Smartphone,
      title: "Distribution Numérique",
      description: "Envoyez vos prospectus via WhatsApp, SMS et Email directement depuis la plateforme"
    },
    {
      icon: Users,
      title: "Gestion des Contacts",
      description: "Enregistrez et gérez facilement tous vos contacts de distribution"
    },
    {
      icon: BarChart3,
      title: "Analytics Avancés",
      description: "Suivez les performances de vos campagnes avec des statistiques détaillées"
    },
    {
      icon: Target,
      title: "Campagnes Ciblées",
      description: "Créez et gérez des campagnes personnalisées selon votre public"
    }
  ];

  const userTypes = [
    {
      icon: Users,
      title: "Distributeur",
      description: "Enregistrez vos contacts et distribuez des prospectus numériques",
      color: "bg-blue-500"
    },
    {
      icon: Building2,
      title: "Entreprise",
      description: "Créez des campagnes et suivez leur impact commercial",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Responsable Zone",
      description: "Supervisez les distributeurs de votre région",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Administrateur",
      description: "Gérez l'ensemble de la plateforme et les utilisateurs",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Send className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Flyer Flow Digital</h1>
            </div>
            <Button onClick={() => navigate('/login')}>
              Se connecter
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Révolutionnez votre distribution
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            La distribution de prospectus
            <span className="text-blue-600 block">à l'ère numérique</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Modernisez votre stratégie marketing avec notre plateforme complète. 
            Enregistrez vos contacts, distribuez numériquement et suivez vos performances en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/login')}>
              Commencer maintenant
            </Button>
            <Button size="lg" variant="outline">
              Voir la démo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">85%</div>
            <div className="text-gray-600">Taux d'ouverture moyen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">3x</div>
            <div className="text-gray-600">Plus d'engagement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">50%</div>
            <div className="text-gray-600">Réduction des coûts</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fonctionnalités puissantes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce dont vous avez besoin pour une distribution moderne et efficace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Une solution pour chaque profil
            </h2>
            <p className="text-xl text-gray-600">
              Interface personnalisée selon votre rôle et vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à moderniser votre distribution ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des centaines d'entreprises qui font confiance à notre plateforme
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/login')}
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Send className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Flyer Flow</span>
              </div>
              <p className="text-sm">
                La plateforme de distribution de prospectus numériques de nouvelle génération.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li>Fonctionnalités</li>
                <li>Tarifs</li>
                <li>Démo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li>À propos</li>
                <li>Blog</li>
                <li>Carrières</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Flyer Flow Digital. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
