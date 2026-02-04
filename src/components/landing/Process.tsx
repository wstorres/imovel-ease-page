import { motion } from "framer-motion";
import { MessageSquare, Search, FileEdit, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Você entra em contato",
    description: "Preencha o formulário ou ligue para nós",
  },
  {
    icon: Search,
    step: "2",
    title: "Analisamos seu caso",
    description: "Diagnóstico gratuito da situação",
  },
  {
    icon: FileEdit,
    step: "3",
    title: "Iniciamos o processo",
    description: "Cuidamos de toda a burocracia",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Imóvel regularizado",
    description: "Documentação completa em mãos",
  },
];

const Process = () => {
  return (
    <section id="processo" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Simples e Rápido
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Como <span className="text-gradient-gold">Funciona</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
              )}
              
              <div className="relative z-10 w-20 h-20 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center">
                <step.icon className="w-9 h-9 text-secondary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {step.description}
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
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
