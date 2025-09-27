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
    <nav className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-ayur-bronze/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img 
            src="/lovable-uploads/88b0f847-3165-4711-b9d1-33072d053667.png" 
            alt="Ayurveda Wellness" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`text-sm font-medium transition-colors hover:text-ayur-bronze ${
                location.pathname === item.path
                  ? "text-ayur-bronze border-b-2 border-ayur-bronze pb-1"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        {location.pathname !== "/results" && location.pathname !== "/consultation" && (
          location.pathname === "/assessment" ? (
            <Button 
              variant="default"
              className="bg-ayur-bronze hover:bg-ayur-bronze-light text-white shadow-warm"
              onClick={() => navigate("/consultation")}
            >
              Book A Consultation
            </Button>
          ) : (
            <a
              href="https://www.cghearthayurveda.com/ayurveda-consultation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ayur-bronze hover:bg-ayur-bronze-light text-white shadow-warm h-10 px-4 py-2"
            >
              Consult Now
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navigation;