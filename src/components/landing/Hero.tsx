import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import ZohoLeadForm from "./ZohoLeadForm";

const Hero = () => {
  const benefits = [
    "Análise gratuita do seu caso",
    "Retorno em até 2 horas",
    "Sem compromisso",
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Cidade" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Mais de 2.500 imóveis regularizados
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              Seu Imóvel Está{" "}
              <span className="text-gradient-gold">Irregular?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg"
            >
              Resolva <strong>de uma vez por todas</strong> a documentação do seu imóvel. 
              Evite problemas na venda, financiamento ou herança.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:hidden"
            >
              <a href="#formulario">
                <Button size="lg" className="btn-secondary rounded-full w-full text-base h-14">
                  Solicitar Análise Gratuita
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="formulario"
            className="scroll-mt-24"
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated border border-border/50">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-success-muted text-success rounded-full text-sm font-medium mb-3">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Atendimento disponível agora
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Análise <span className="text-secondary">Gratuita</span>
                </h2>
                <p className="text-muted-foreground mt-2">
                  Preencha e receba uma avaliação em até 2 horas
                </p>
              </div>

              <ZohoLeadForm buttonText="Quero Minha Análise Gratuita" />

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Sem compromisso</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
