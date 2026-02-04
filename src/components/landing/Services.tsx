import { motion } from "framer-motion";
import { FileText, Home, MapPin, Building2, Scale, Stamp } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Regularização de Escritura",
    description: "Obtenção e regularização de escrituras públicas para seu imóvel, garantindo a documentação correta.",
  },
  {
    icon: Home,
    title: "Usucapião",
    description: "Assessoria completa em processos de usucapião, judicial ou extrajudicial, para garantir a propriedade.",
  },
  {
    icon: MapPin,
    title: "Georreferenciamento",
    description: "Levantamento topográfico e georreferenciamento conforme exigências do INCRA e cartórios.",
  },
  {
    icon: Building2,
    title: "Averbação de Construção",
    description: "Regularização de construções junto à prefeitura e averbação no Registro de Imóveis.",
  },
  {
    icon: Scale,
    title: "Inventário e Partilha",
    description: "Assessoria em processos de inventário e regularização de imóveis em herança.",
  },
  {
    icon: Stamp,
    title: "Certidões e Documentos",
    description: "Obtenção de certidões, matrículas e toda documentação necessária para seu imóvel.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Soluções Completas em{" "}
            <span className="text-gradient-gold">Regularização</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços para resolver qualquer pendência documental do seu imóvel.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
