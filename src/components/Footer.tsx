import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo-sga.svg";

const Footer = () => (
  <footer className="relative bg-gradient-dark text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
    <div className="container-custom py-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="SGA Expertise" className="h-12 mb-4 brightness-0 invert" />
          <p className="text-sm opacity-80 leading-relaxed">
            SGA – Société Générale de l'Expertise Automobile. Cabinet d'expertise automobile indépendant à Abidjan, spécialisé dans l'évaluation post-sinistre.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Liens Rapides</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-primary transition-colors">À Propos</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Nos Expertises</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Expertise accident</li>
            <li>Expertise vol</li>
            <li>Expertise incendie</li>
            <li>Expertise bris de glace</li>
            <li>Rapports d'indemnisation</li>
            <li>Gestion VTC & assurances</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +225 07 10 01 70 70
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +225 25 22 00 78 41
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              Bd. Latrille face ENA, Deux-Plateaux Cocody, Abidjan
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.facebook.com/SGAExpertise" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/sga-societe-gestion-auto/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10 py-6">
      <p className="text-center text-sm opacity-60">
        © {new Date().getFullYear()} SGA – Société Générale de l'Expertise Automobile. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;