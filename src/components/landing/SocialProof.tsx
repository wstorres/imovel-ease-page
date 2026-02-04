import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Consegui vender meu apartamento que estava parado há 3 anos por falta de documentação. Equipe excelente!",
    rating: 5,
  },
  {
    name: "Carlos Santos",
    location: "Guarulhos, SP",
    text: "Regularizaram a casa da minha mãe que não tinha escritura há 40 anos. Processo rápido e transparente.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    location: "Campinas, SP",
    text: "Pensei que seria muito difícil fazer o usucapião, mas eles cuidaram de tudo. Super recomendo!",
    rating: 5,
  },
];

const stats = [
  { value: "2.500+", label: "Imóveis Regularizados" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "30%", label: "Valorização Média" },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl shadow-card"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-secondary">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            O Que Nossos Clientes <span className="text-gradient-gold">Dizem</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card relative"
            >
              <Quote className="w-10 h-10 text-secondary/20 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
