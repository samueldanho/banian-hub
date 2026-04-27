import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-sga.svg";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À Propos", path: "/a-propos" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-nav/90 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-border/60">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <Link to="/">
            <img src={logo} alt="SGA Expertise" className="h-12 md:h-14" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-nav-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Service expertise</p>
                <p className="font-semibold">+225 07 10 01 70 70</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-nav-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Notre cabinet</p>
                <p className="font-semibold">Cocody Riviera Golf les jardins</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/2250708141468"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary !py-3 !px-6"
          >
            DEMANDER UNE EXPERTISE →
          </a>

          <button className="lg:hidden text-nav-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-1 border-t border-border py-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`relative px-4 py-4 text-sm font-heading font-semibold tracking-wide transition-colors hover:text-primary group ${
                location.pathname === link.path ? "text-primary" : "text-nav-foreground"
              }`}
            >
              {link.label.toUpperCase()}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-primary transition-all duration-300 ${location.pathname === link.path ? "w-8" : "w-0 group-hover:w-8"}`} />
            </Link>
          ))}
        </nav>

        {open && (
          <nav className="lg:hidden border-t border-border py-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-heading font-semibold tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-nav-foreground"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <a
              href="https://wa.me/2250708141468"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-4 text-center bg-primary text-primary-foreground px-6 py-3 font-heading font-semibold text-sm"
            >
              DEMANDER UNE EXPERTISE →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;