import { Clock, Phone, Facebook, Linkedin } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm hidden md:block">
    <div className="container-custom flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>Lundi - Vendredi 8:00 - 17:00, Samedi & Dimanche - FERMÉ</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+225 07 10 01 70 70</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/SGAExpertise" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/company/sga-societe-gestion-auto/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;