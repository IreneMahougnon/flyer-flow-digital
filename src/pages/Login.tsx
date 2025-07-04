
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Users, Building2, MapPin, Shield } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !role) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    // Simulation de connexion
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    
    toast.success(`Connexion réussie en tant que ${role}`);
    
    // Redirection selon le rôle
    switch(role) {
      case 'distributeur':
        navigate('/dashboard/distributeur');
        break;
      case 'client':
        navigate('/dashboard/client');
        break;
      case 'responsable':
        navigate('/dashboard/responsable');
        break;
      case 'admin':
        navigate('/dashboard/admin');
        break;
      default:
        navigate('/');
    }
  };

  const roleIcons = {
    distributeur: <Users className="h-4 w-4" />,
    client: <Building2 className="h-4 w-4" />,
    responsable: <MapPin className="h-4 w-4" />,
    admin: <Shield className="h-4 w-4" />
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Flyer Flow Digital</CardTitle>
          <CardDescription>
            Plateforme de distribution de prospectus numériques
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <Label htmlFor="role">Type de compte</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre rôle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distributeur">
                    <div className="flex items-center gap-2">
                      {roleIcons.distributeur}
                      Distributeur
                    </div>
                  </SelectItem>
                  <SelectItem value="client">
                    <div className="flex items-center gap-2">
                      {roleIcons.client}
                      Client (Entreprise)
                    </div>
                  </SelectItem>
                  <SelectItem value="responsable">
                    <div className="flex items-center gap-2">
                      {roleIcons.responsable}
                      Responsable de zone
                    </div>
                  </SelectItem>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      {roleIcons.admin}
                      Administrateur
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Pas encore de compte ? 
              <Button variant="link" className="p-0 h-auto ml-1">
                S'inscrire
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
