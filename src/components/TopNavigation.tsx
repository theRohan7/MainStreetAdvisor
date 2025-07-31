'use client';

import { useState } from "react";
import { Bell, Settings, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/FallbackWithImage";
import mainStreetLogo from "figma:asset/a7536a4f3d4e695faf8d8865fa3667464f3c6dab.png";

export function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const navigationItems = ["Dashboard", "Clients", "Portfolios", "Plans", "Reports"];

  return (
    <nav className="w-full bg-white border-b border-border px-6 py-4 p-[40px] px-[40px] py-[16px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* <ImageWithFallback 
            src={mainStreetLogo} 
            alt="MainStreet Advisors" 
            className="h-8 w-[200px] object-contain"
          /> */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>MainStreetAdvisors</h2>
        </div>

        {/* Center navigation - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={`px-4 py-2 ${item === activeNavItem ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setActiveNavItem(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Center navigation - Mobile/Tablet Dropdown */}
        <div className="lg:hidden relative flex-1 max-w-xs mx-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white px-3 py-2"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            <span>{activeNavItem}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isNavDropdownOpen ? 'rotate-180' : ''}`} />
          </Button>

          {/* Navigation Dropdown */}
          {isNavDropdownOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/20 z-30"
                onClick={() => setIsNavDropdownOpen(false)}
              />
              
              {/* Dropdown Panel */}
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-40">
                <div className="py-2">
                  {navigationItems.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className={`w-full justify-start px-4 py-3 rounded-none ${
                        item === activeNavItem ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                      }`}
                      onClick={() => {
                        setActiveNavItem(item);
                        setIsNavDropdownOpen(false);
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right side controls - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile/Tablet Hamburger Menu */}
        <div className="lg:hidden relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/20 z-30"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Dropdown Panel */}
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-lg shadow-lg z-40">
                <div className="p-4 space-y-4">
                  {/* User Section */}
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Advisor</div>
                      <div className="text-sm text-muted-foreground">Senior Financial Advisor</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
                      </div>
                      <span>Notifications</span>
                      <span className="ml-auto text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-full">3</span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Button>

                    <div className="border-t border-border pt-2 mt-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 h-12 text-muted-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-5 w-5" />
                        <span>Sign Out</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}