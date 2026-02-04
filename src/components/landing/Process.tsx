import { motion } from "framer-motion";
import { MessageSquare, Search, FileEdit, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta Inicial",
    description: "Entre em contato conosco para uma análise gratuita da situação do seu imóvel.",
  },
  {
    icon: Search,
    step: "02",
    title: "Diagnóstico",
    description: "Nossa equipe realiza um levantamento completo da documentação e identifica as pendências.",
  },
  {
    icon: FileEdit,
    step: "03",
    title: "Regularização",
    description: "Iniciamos o processo de regularização junto aos órgãos competentes e cartórios.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Conclusão",
    description: "Entregamos toda a documentação regularizada com total segurança jurídica.",
  },
];

const Process = () => {
  return (
    <section id="processo" className="section-padding bg-background">
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
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Processo Simples e{" "}
            <span className="text-gradient-gold">Transparente</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conduzimos todo o processo de forma clara, mantendo você informado em cada etapa.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center shadow-elevated">
                  <step.icon className="w-9 h-9 text-primary-foreground" />
                </div>

                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-sm">{step.step}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
