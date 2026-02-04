import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Valorização de até 30%",
    description: "Imóvel regularizado vale muito mais no mercado.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica Total",
    description: "Proteja seu patrimônio contra disputas e problemas.",
  },
  {
    icon: Clock,
    title: "Processo Ágil",
    description: "Conhecemos os caminhos mais rápidos para resolver.",
  },
  {
    icon: Award,
    title: "15+ Anos de Experiência",
    description: "Equipe especializada em direito imobiliário.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Por Que Nos Escolher
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Resultados <span className="text-gradient-gold">Garantidos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Somos especialistas em regularização imobiliária e já ajudamos mais de 2.500 famílias a resolverem a situação de seus imóveis.
            </p>

            <a href="#formulario">
              <Button size="lg" className="btn-secondary rounded-full">
                Quero Regularizar Meu Imóvel
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-muted/50 rounded-xl border border-border hover:border-secondary/30 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-secondary mb-3" />
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
