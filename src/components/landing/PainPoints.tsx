import { motion } from "framer-motion";
import { XCircle, AlertTriangle, Ban, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: Ban,
    title: "Não consegue vender",
    description: "Imóvel irregular não pode ser financiado pelo comprador",
  },
  {
    icon: AlertTriangle,
    title: "Problemas com herança",
    description: "Dificuldade em fazer inventário sem documentação correta",
  },
  {
    icon: TrendingDown,
    title: "Desvalorização",
    description: "Imóveis irregulares valem até 30% menos no mercado",
  },
  {
    icon: XCircle,
    title: "Insegurança jurídica",
    description: "Risco de perder o imóvel em disputas legais",
  },
];

const PainPoints = () => {
  return (
    <section className="py-16 bg-destructive/5 border-y border-destructive/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Você está passando por algum desses{" "}
            <span className="text-destructive">problemas?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-destructive/20"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{pain.title}</h3>
                <p className="text-muted-foreground text-sm">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-lg text-foreground"
        >
          <strong>A boa notícia:</strong> todos esses problemas têm solução!{" "}
          <a href="#formulario" className="text-secondary font-semibold underline underline-offset-4 hover:text-secondary/80">
            Fale com um especialista →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PainPoints;
