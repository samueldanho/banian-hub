import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Shield, Award, Phone, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import serviceAccident from "@/assets/service-accident.jpg";
import serviceVol from "@/assets/service-vol.jpg";
import serviceIncendie from "@/assets/service-incendie.jpg";
import serviceBris from "@/assets/service-bris.jpg";

const services = [
  { title: "Expertise Accident", desc: "Évaluation complète des dommages suite à un accident.", image: serviceAccident },
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
    <section className="relative h-[92vh] min-h-[640px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-zoom-bg" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-radial-glow" />
      {/* floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-glow/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md text-primary-foreground text-xs font-heading font-semibold tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary-glow" />
            CABINET D'EXPERTISE INDÉPENDANT
          </span>
        </div>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          VOTRE EXPERT
          <br />
          <span className="text-gradient">AUTOMOBILE</span>
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          SGA – Société Générale de l'Expertise Automobile. Évaluation post-sinistre rigoureuse pour assureurs et particuliers à Abidjan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <Link to="/services" className="btn-primary">
            NOS EXPERTISES <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn-outline">
            NOUS CONTACTER
          </Link>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/80" />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative bg-gradient-dark text-primary-foreground py-16 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container-custom relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} direction="zoom">
            <div className="group">
              <p className="font-heading font-black text-4xl md:text-5xl text-gradient group-hover:scale-110 transition-transform duration-300">{s.value}</p>
              <div className="w-10 h-0.5 bg-primary mx-auto my-3 group-hover:w-20 transition-all duration-500" />
              <p className="text-sm opacity-80">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* About preview */}
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center relative">
        <Reveal direction="left">
          <div>
            <span className="eyebrow mb-4">À PROPOS DE SGA</span>
            <h2 className="section-title mt-3 mb-6 leading-tight">
              Un cabinet d'expertise <span className="text-gradient">de confiance</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              SGA est un cabinet indépendant basé à Abidjan, spécialisé dans l'évaluation des dommages automobiles post-sinistre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nous intervenons pour les compagnies d'assurance et les particuliers dans les cas d'accidents, vol, incendie et bris de glace, avec des rapports rigoureux et impartiaux.
            </p>
            <Link to="/a-propos" className="btn-primary">
              EN SAVOIR PLUS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal direction="right" delay={150}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <img src={aboutBg} alt="Expertise automobile SGA" className="relative w-full h-[420px] object-cover rounded-2xl shadow-elegant" loading="lazy" width={1920} height={800} />
            <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-primary-foreground p-6 rounded-2xl shadow-elegant hidden md:block animate-float">
              <Award className="w-8 h-8 mb-2" />
              <p className="font-heading font-black text-2xl">SGA</p>
              <p className="text-xs opacity-90">Expertise indépendante</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow mb-4">NOS SERVICES</span>
            <h2 className="section-title mt-3 mb-4">
              Expertise automobile <span className="text-gradient">complète</span>
            </h2>
            <p className="text-muted-foreground">Des solutions sur mesure pour chaque type de sinistre automobile.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} direction="up">
              <div className="card-elegant group h-full">
                <div className="h-52 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-4 transition-all">
              VOIR TOUS NOS SERVICES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Why choose us */}
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="container-custom relative">
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow mb-4">POURQUOI SGA</span>
            <h2 className="section-title mt-3">Vos <span className="text-gradient">avantages</span></h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: CheckCircle, title: "Indépendance", desc: "Cabinet totalement indépendant, garantissant des rapports impartiaux et objectifs." },
            { icon: Clock, title: "Rapidité", desc: "Intervention rapide et rapports d'expertise délivrés dans les meilleurs délais." },
            { icon: Shield, title: "Fiabilité", desc: "Expertise rigoureuse reconnue par les compagnies d'assurance et les tribunaux." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 150} direction="up">
              <div className="card-elegant p-10 text-center h-full group">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="relative w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
                    <item.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-zoom-bg" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 container-custom text-center">
        <Reveal direction="zoom">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md mb-6 animate-pulse-slow">
            <Phone className="w-9 h-9 text-primary-foreground" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground mb-4">
            BESOIN D'UNE <span className="text-gradient">EXPERTISE</span> ?
          </h2>
          <p className="text-primary-foreground/85 mb-10 max-w-xl mx-auto text-lg">
            Contactez-nous pour une évaluation rapide et professionnelle de votre véhicule.
          </p>
          <Link to="/contact" className="btn-primary">
            CONTACTEZ-NOUS <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Index;
