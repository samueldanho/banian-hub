import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "developpement@sgaexpertise.ci";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nom: ${form.name}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    toast({ title: "Message prêt !", description: "Votre messagerie s'ouvre pour envoyer le message." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-zoom-bg" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center animate-fade-up">
          <span className="eyebrow mb-4 !text-primary-glow">RESTONS EN CONTACT</span>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-primary-foreground mt-3">
            <span className="text-gradient">CONTACT</span>
          </h1>
          <p className="text-primary-foreground/80 mt-4">Accueil / Contact</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <Reveal direction="left">
              <div className="space-y-6">
                <div>
                  <span className="eyebrow mb-3">CONTACTEZ-NOUS</span>
                  <h2 className="font-heading font-black text-3xl text-foreground mt-3 mb-4">Restons en <span className="text-gradient">contact</span></h2>
                  <p className="text-muted-foreground text-sm">N'hésitez pas à nous contacter pour toute demande d'expertise ou d'information.</p>
                </div>
                {[
                  { icon: Phone, label: "Téléphone", value: "+225 07 10 01 70 70" },
                  { icon: Phone, label: "Tel", value: "+225 27 22 28 82 75" },
                  { icon: Phone, label: "WhatsApp", value: "+225 07 08 14 14 68" },
                  { icon: Mail, label: "Email", value: CONTACT_EMAIL },
                  { icon: MapPin, label: "Adresse", value: "Cocody Riviera Golf les jardins, Abidjan" },
                  { icon: Clock, label: "Horaires", value: "Lun - Ven : 8h - 17h" },
                ].map((c, i) => (
                  <div key={c.label} className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 30}ms` }}>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-elegant transition-shadow">
                      <c.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{c.label}</p>
                      <p className="text-muted-foreground text-sm">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={150} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-elegant p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nom complet *</label>
                    <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-primary focus:outline-none transition-all" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-primary focus:outline-none transition-all" placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Sujet *</label>
                  <input type="text" required maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-primary focus:outline-none transition-all" placeholder="Ex: Demande d'expertise accident" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <textarea required maxLength={2000} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-primary focus:outline-none resize-none transition-all" placeholder="Décrivez votre besoin..." />
                </div>
                <button type="submit" className="btn-primary">
                  <Send className="w-4 h-4" /> ENVOYER LE MESSAGE
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3!2d-3.9700!3d5.3800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ29jb2R5IFJpdmllcmEgR29sZiBsZXMgamFyZGlucw!5e0!3m2!1sfr!2sci!4v1&q=Cocody+Riviera+Golf+les+jardins+Abidjan"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation SGA Expertise"
        />
      </section>
    </Layout>
  );
};

export default Contact;
