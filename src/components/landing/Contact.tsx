import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ZohoLeadForm from "./ZohoLeadForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@regularizamais.com.br",
      href: "mailto:contato@regularizamais.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Av. Paulista, 1000 - São Paulo, SP",
      href: "#",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 9h às 18h",
      href: "#",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Vamos{" "}
              <span className="text-gradient-gold">Regularizar</span>{" "}
              Seu Imóvel?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato para uma análise gratuita da situação do seu imóvel. Nossa equipe está pronta para ajudar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{info.title}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Solicite uma Análise Gratuita
              </h3>

              <ZohoLeadForm buttonText="Enviar Solicitação" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
