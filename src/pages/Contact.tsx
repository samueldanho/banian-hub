import { useState } from "react";
import Layout from "@/components/Layout";
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
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground">CONTACT</h1>
          <p className="text-primary-foreground/80 mt-3">Accueil / Contact</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div>
                <p className="text-primary font-heading font-bold text-sm tracking-[0.2em] mb-3">CONTACTEZ-NOUS</p>
                <h2 className="font-heading font-black text-3xl text-foreground mb-4">RESTONS EN CONTACT</h2>
                <p className="text-muted-foreground text-sm">N'hésitez pas à nous contacter pour toute demande d'expertise ou d'information.</p>
              </div>
              {[
                { icon: Phone, label: "Téléphone", value: "+225 07 10 01 70 70" },
                { icon: Phone, label: "Tel", value: "+225 27 22 28 82 75" },
                { icon: Phone, label: "WhatsApp", value: "+225 07 08 14 14 68" },
                { icon: Mail, label: "Email", value: CONTACT_EMAIL },
                { icon: MapPin, label: "Adresse", value: "Cocody Riviera Golf les jardins, Abidjan" },
                { icon: Clock, label: "Horaires", value: "Lun - Ven : 8h - 17h" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{c.label}</p>
                    <p className="text-muted-foreground text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-md space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nom complet *</label>
                    <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Sujet *</label>
                  <input type="text" required maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="Ex: Demande d'expertise accident" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <textarea required maxLength={2000} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" placeholder="Décrivez votre besoin..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-heading font-bold text-sm hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" /> ENVOYER LE MESSAGE
                </button>
              </form>
            </div>
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