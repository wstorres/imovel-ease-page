import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Users, Clock, Award, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Valorização do Imóvel",
    description: "Um imóvel regularizado pode valer até 30% mais no mercado imobiliário.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica",
    description: "Proteja seu patrimônio contra disputas e problemas legais futuros.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes em direito imobiliário e engenharia.",
  },
  {
    icon: Clock,
    title: "Agilidade no Processo",
    description: "Conhecemos os caminhos mais eficientes para cada tipo de regularização.",
  },
  {
    icon: Award,
    title: "Credibilidade",
    description: "Mais de 15 anos de experiência e milhares de imóveis regularizados.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Cada caso é único e merece atenção especial da nossa equipe.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Por Que Nos Escolher
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Benefícios de{" "}
              <span className="text-gradient-gold">Regularizar</span>{" "}
              Seu Imóvel
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              A regularização do seu imóvel traz inúmeras vantagens, desde a valorização patrimonial até a tranquilidade de saber que sua propriedade está legalmente protegida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">2.500+</p>
                  <p className="text-primary-foreground/70 text-sm">Imóveis Regularizados</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">98%</p>
                  <p className="text-primary-foreground/70 text-sm">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-display font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
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
