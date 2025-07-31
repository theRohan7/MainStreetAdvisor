import { Bell, Settings, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/FallbackWithImage";
import mainStreetLogo from "figma:asset/a7536a4f3d4e695faf8d8865fa3667464f3c6dab.png";

export function TopNavigation() {
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
          <h2 style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 700, fontSize: 24 }}>MainStreetAdvisors</h2>
        </div>

        {/* Center navigation */}
        <div className="flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <Button
              key={item}
              variant="ghost"
              className={`px-4 py-2 ${index === 0 ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
}