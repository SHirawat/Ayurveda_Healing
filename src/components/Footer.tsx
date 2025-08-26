import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
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
            <p className="text-muted-foreground text-sm">
              Discover your unique constitution and achieve optimal wellness through ancient Ayurvedic wisdom.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="src/pages/Home.tsx" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="/assessment" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Assessment
              </a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Dosha Assessment</p>
              <p className="text-muted-foreground text-sm">Personalized Consultation</p>
              <p className="text-muted-foreground text-sm">Wellness Plans</p>
              <p className="text-muted-foreground text-sm">Ayurvedic Treatments</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-ayur-bronze" />
                <span className="text-muted-foreground text-sm">info@ayurveda.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-ayur-bronze" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-ayur-bronze" />
                <span className="text-muted-foreground text-sm">Bengluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AyurVeda. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
