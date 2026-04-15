

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import serviceAccident from "@/assets/service-accident.jpg";
import serviceVol from "@/assets/service-vol.jpg";
import serviceIncendie from "@/assets/service-incendie.jpg";
import serviceBris from "@/assets/service-bris.jpg";

const services = [
  { title: "Expertise Accident", desc: "Évaluation complète des dommages suite à un accident de la route.", image: serviceAccident },
  { title: "Expertise Vol", desc: "Constatation et évaluation après vol de véhicule.", image: serviceVol },
  { title: "Expertise Incendie", desc: "Analyse et chiffrage des dégâts causés par un incendie.", image: serviceIncendie },
  { title: "Bris de Glace", desc: "Évaluation des dommages sur les vitrages automobiles.", image: serviceBris },
];

const stats = [
  { value: "1000+", label: "Expertises réalisées" },
  { value: "50+", label: "Assureurs partenaires" },
  { value: "24h", label: "Délai de rapport" },
  { value: "100%", label: "Indépendance" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-up">
        <p className="text-primary font-heading font-bold text-sm tracking-[0.3em] mb-4">SOCIÉTÉ GÉNÉRALE DE L'EXPERTISE AUTOMOBILE</p>
        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
          VOTRE EXPERT
          <br />
          <span className="text-primary">AUTOMOBILE</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Cabinet d'expertise automobile indépendant à Abidjan. Évaluation post-sinistre pour assureurs et particuliers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            NOS EXPERTISES <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 font-heading font-bold text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            NOUS CONTACTER
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading font-black text-3xl md:text-4xl">{s.value}</p>
            <p className="text-sm opacity-80 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* About preview */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">À PROPOS DE SGA</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">
            UN CABINET D'EXPERTISE AUTOMOBILE DE CONFIANCE
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SGA – Société Générale de l'Expertise Automobile est un cabinet indépendant basé à Abidjan, spécialisé dans l'évaluation des dommages automobiles post-sinistre.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nous intervenons pour les compagnies d'assurance et les particuliers dans les cas d'accidents, de vol, d'incendie et de bris de glace, avec des rapports rigoureux et impartiaux.
          </p>
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            EN SAVOIR PLUS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative">
          <img src={aboutBg} alt="Expertise automobile SGA" className="w-full h-80 object-cover shadow-lg" loading="lazy" width={1920} height={800} />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 hidden md:block">
            <p className="font-heading font-black text-3xl">SGA</p>
            <p className="text-sm">Expertise indépendante</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services with images */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">NOS SERVICES</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            EXPERTISE AUTOMOBILE COMPLÈTE
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline"
          >
            Voir tous nos services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why choose us */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">POURQUOI SGA</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            VOS AVANTAGES
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: CheckCircle, title: "Indépendance", desc: "Cabinet totalement indépendant, garantissant des rapports impartiaux et objectifs." },
            { icon: Clock, title: "Rapidité", desc: "Intervention rapide et rapports d'expertise délivrés dans les meilleurs délais." },
            { icon: Shield, title: "Fiabilité", desc: "Expertise rigoureuse reconnue par les compagnies d'assurance et les tribunaux." },
          ].map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 container-custom text-center">
        <h2 className="font-heading font-black text-3xl md:text-4xl text-primary-foreground mb-4">
          BESOIN D'UNE EXPERTISE ?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Contactez-nous pour une évaluation rapide et professionnelle de votre véhicule.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-sm hover:opacity-90 transition-opacity"
        >
          CONTACTEZ-NOUS <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;