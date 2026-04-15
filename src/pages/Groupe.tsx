import Layout from "@/components/Layout";
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
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground">À PROPOS</h1>
        <p className="text-primary-foreground/80 mt-3">Accueil / À Propos</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">QUI SOMMES-NOUS</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">
            SGA – SOCIÉTÉ GÉNÉRALE DE L'EXPERTISE AUTOMOBILE
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
        <img src={aboutBg} alt="SGA Expertise" className="w-full h-96 object-cover shadow-lg" loading="lazy" width={1920} height={800} />
      </div>
    </section>

    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">CE QUI NOUS ANIME</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">MISSION, VISION & VALEURS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-card p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">NOS DOMAINES</p>
        <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">CHAMPS D'INTERVENTION</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          SGA intervient dans tous les domaines de l'expertise automobile et de la gestion de véhicules.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Expertise accident", "Expertise vol", "Expertise incendie", "Bris de glace", "Gestion VTC", "Assurances engins"].map((f) => (
            <div key={f} className="bg-card border border-border px-4 py-3 rounded-lg text-sm font-heading font-semibold text-foreground">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Groupe;