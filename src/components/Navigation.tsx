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
    <nav className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img 
            src="/lovable-uploads/88b0f847-3165-4711-b9d1-33072d053667.png" 
            alt="CGH Earth Ayurveda" 
            className="h-8 w-auto"
          />
          <div>
            <span className="text-xl font-bold text-emerald-700 font-serif">CGH Earth</span>
            <div className="text-sm text-emerald-600 font-medium -mt-1">Ayurveda</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname === item.path
                  ? "text-emerald-600 border-b-2 border-emerald-600 pb-1"
                  : "text-gray-600"
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
            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
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