import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
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
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground">NOS SERVICES</h1>
        <p className="text-primary-foreground/80 mt-3">Accueil / Services</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom space-y-20">
        {services.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center`}>
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-lg overflow-hidden shadow-lg ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <img src={s.image} alt={s.title} className="w-full h-72 object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-primary text-primary-foreground py-16 text-center">
      <div className="container-custom">
        <h2 className="font-heading font-black text-3xl mb-4">BESOIN D'UNE EXPERTISE ?</h2>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">Contactez-nous pour une évaluation rapide et professionnelle de votre véhicule.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-heading font-bold text-sm hover:opacity-90 transition-opacity">
          DEMANDER UN DEVIS <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;