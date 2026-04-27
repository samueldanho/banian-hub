import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Target, Eye, Users } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Target, title: "Notre Mission", text: "Fournir des expertises automobiles rigoureuses, indépendantes et impartiales pour accompagner les assureurs et les particuliers dans l'évaluation des sinistres." },
  { icon: Eye, title: "Notre Vision", text: "Devenir le cabinet de référence en expertise automobile en Côte d'Ivoire, reconnu pour sa fiabilité, sa rapidité et son professionnalisme." },
  { icon: Users, title: "Nos Valeurs", text: "Intégrité, indépendance, rigueur et transparence sont les piliers de chaque expertise que nous réalisons." },
];

const Groupe = () => (
  <Layout>
    <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-zoom-bg" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center animate-fade-up">
        <span className="eyebrow mb-4 !text-primary-glow">DÉCOUVREZ SGA</span>
        <h1 className="font-heading font-black text-5xl md:text-6xl text-primary-foreground mt-3">À <span className="text-gradient">PROPOS</span></h1>
        <p className="text-primary-foreground/80 mt-4">Accueil / À Propos</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <div>
            <span className="eyebrow mb-4">QUI SOMMES-NOUS</span>
            <h2 className="section-title mt-3 mb-6 leading-tight">
              SGA – Société Générale de <span className="text-gradient">l'Expertise Automobile</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SGA est un cabinet d'expertise automobile indépendant basé à Abidjan, spécialisé dans l'évaluation post-sinistre. Nous intervenons pour les compagnies d'assurance et les particuliers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Notre expertise couvre l'ensemble des sinistres automobiles : accidents de la circulation, vols, incendies et bris de glace. Chaque dossier est traité avec rigueur et impartialité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lié à la Société de Gestion Automobile (SGA CIV), nous proposons également des services de gestion de véhicules VTC et d'assurances engins.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={150}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-2xl opacity-25 group-hover:opacity-60 transition-opacity duration-500" />
            <img src={aboutBg} alt="SGA Expertise" className="relative w-full h-[440px] object-cover rounded-2xl shadow-elegant" loading="lazy" width={1920} height={800} />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="container-custom relative">
        <Reveal>
          <div className="text-center mb-16">
            <span className="eyebrow mb-4">CE QUI NOUS ANIME</span>
            <h2 className="section-title mt-3">Mission, vision & <span className="text-gradient">valeurs</span></h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 150} direction="up">
              <div className="card-elegant p-10 text-center h-full group">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="relative w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
                    <v.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom text-center">
        <Reveal>
          <span className="eyebrow mb-4">NOS DOMAINES</span>
          <h2 className="section-title mt-3 mb-6">Champs <span className="text-gradient">d'intervention</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            SGA intervient dans tous les domaines de l'expertise automobile et de la gestion de véhicules.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Expertise accident", "Expertise vol", "Expertise incendie", "Bris de glace", "Gestion VTC", "Assurances engins"].map((f, i) => (
            <Reveal key={f} delay={i * 80} direction="zoom">
              <div className="bg-card border border-border px-4 py-5 rounded-xl text-sm font-heading font-semibold text-foreground hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-soft">
                {f}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Groupe;
