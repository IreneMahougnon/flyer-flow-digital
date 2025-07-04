
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, User } from "lucide-react";

interface HeaderProps {
  title: string;
  userRole: string;
}

const Header = ({ title, userRole }: HeaderProps) => {
  const userEmail = localStorage.getItem('userEmail') || 'utilisateur@email.com';

  return (
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          
          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Badge className="absolute -top-1 -right-1 px-1 min-w-5 h-5 text-xs">
              3
            </Badge>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900 capitalize">{userRole}</div>
              <div className="text-xs text-gray-500">{userEmail}</div>
            </div>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
