import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Assessment", path: "/assessment" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Doctors Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="w-full px-6 py-4 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-gradient-bronze rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-5 h-5 text-white"
              fill="currentColor"
            >
              <path d="M50 20 C35 30, 35 50, 50 60 C65 50, 65 30, 50 20 Z" />
              <circle cx="50" cy="50" r="3" />
              <path d="M50 80 C35 70, 35 50, 50 40 C65 50, 65 70, 50 80 Z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">AyurVeda</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        {location.pathname !== "/results" && location.pathname !== "/consultation" && (
          <Button 
            variant="default"
            className="bg-gradient-bronze hover:opacity-90 text-white shadow-warm"
            onClick={() => navigate(location.pathname === "/assessment" ? "/consultation" : "/assessment")}
          >
            {location.pathname === "/assessment" ? "Book A Consultation" : "Get Started"}
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;