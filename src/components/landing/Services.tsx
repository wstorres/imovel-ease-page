import { motion } from "framer-motion";
import { FileText, Home, Building2, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Regularização de Escritura",
    description: "Obtenção de escritura pública para imóveis sem documentação.",
  },
  {
    icon: Home,
    title: "Usucapião",
    description: "Reconhecimento legal da propriedade por tempo de posse.",
  },
  {
    icon: Building2,
    title: "Averbação de Construção",
    description: "Regularização de construções na matrícula do imóvel.",
  },
  {
    icon: Scale,
    title: "Inventário e Herança",
    description: "Transferência legal de imóveis em casos de falecimento.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nossas Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Como Podemos <span className="text-gradient-gold">Ajudar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com todos os tipos de regularização imobiliária
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated group hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#formulario">
            <Button size="lg" className="btn-secondary rounded-full px-8">
              Solicitar Análise Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
