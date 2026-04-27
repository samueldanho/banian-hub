import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAccident from "@/assets/service-accident.jpg";
import serviceVol from "@/assets/service-vol.jpg";
import serviceIncendie from "@/assets/service-incendie.jpg";
import serviceBris from "@/assets/service-bris.jpg";
import serviceRapport from "@/assets/service-rapport.jpg";
import serviceVtc from "@/assets/service-vtc.jpg";

const services = [
  { image: serviceAccident, title: "Expertise Accident", desc: "Évaluation complète et détaillée des dommages causés par un accident de la route. Nous établissons un rapport précis pour faciliter l'indemnisation auprès de votre assureur.", features: ["Constatation sur site ou en atelier", "Chiffrage précis des réparations", "Rapport détaillé avec photos", "Accompagnement jusqu'à l'indemnisation"] },
  { image: serviceVol, title: "Expertise Vol", desc: "En cas de vol de votre véhicule, nous réalisons une expertise pour déterminer la valeur du véhicule et accompagner le processus d'indemnisation.", features: ["Évaluation de la valeur vénale", "Expertise véhicule retrouvé endommagé", "Rapport pour les assureurs", "Conseils post-sinistre"] },
  { image: serviceIncendie, title: "Expertise Incendie", desc: "Analyse approfondie des dommages causés par un incendie sur votre véhicule, avec détermination des causes et chiffrage des pertes.", features: ["Analyse des causes de l'incendie", "Évaluation des dommages", "Rapport technique complet", "Assistance indemnisation"] },
  { image: serviceBris, title: "Expertise Bris de Glace", desc: "Évaluation des dommages sur les vitrages automobiles : pare-brise, vitres latérales, lunette arrière.", features: ["Constatation des dégâts", "Chiffrage remplacement/réparation", "Rapport rapide", "Orientation vers réparateurs agréés"] },
  { image: serviceRapport, title: "Rapports d'Indemnisation", desc: "Rédaction de rapports d'expertise complets et détaillés, acceptés par toutes les compagnies d'assurance de Côte d'Ivoire.", features: ["Rapports normalisés", "Documentation photographique", "Chiffrage précis et argumenté", "Envoi rapide aux assureurs"] },
  { image: serviceVtc, title: "Gestion VTC & Assurances", desc: "Via SGA CIV, nous proposons la gestion de véhicules VTC avec conducteurs professionnels, entretien et assurances engins à domicile.", features: ["Conducteurs professionnels", "Entretien véhicules", "Assurances auto/moto/taxi", "Rémunérations fixes conducteurs"] },
];

const Services = () => (
  <Layout>
    <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-zoom-bg" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center animate-fade-up">
        <span className="eyebrow mb-4 !text-primary-glow">NOS PRESTATIONS</span>
        <h1 className="font-heading font-black text-5xl md:text-6xl text-primary-foreground mt-3">NOS <span className="text-gradient">SERVICES</span></h1>
        <p className="text-primary-foreground/80 mt-4">Accueil / Services</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom space-y-24">
        {services.map((s, i) => (
          <div key={s.title} className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction={i % 2 === 1 ? "right" : "left"} className={i % 2 === 1 ? "md:order-2" : ""}>
              <div>
                <span className="eyebrow mb-3">SERVICE 0{i + 1}</span>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-5 mt-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-4 transition-all">
                  DEMANDER CETTE EXPERTISE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal direction={i % 2 === 1 ? "left" : "right"} delay={150} className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img src={s.image} alt={s.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>

    <section className="relative py-20 overflow-hidden bg-gradient-dark text-primary-foreground">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container-custom relative text-center">
        <Reveal direction="zoom">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">BESOIN D'UNE <span className="text-gradient">EXPERTISE</span> ?</h2>
          <p className="opacity-80 mb-10 max-w-xl mx-auto text-lg">Contactez-nous pour une évaluation rapide et professionnelle.</p>
          <Link to="/contact" className="btn-primary">
            DEMANDER UN DEVIS <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Services;
