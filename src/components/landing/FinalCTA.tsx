import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle } from "lucide-react";
import ZohoLeadForm from "./ZohoLeadForm";

const FinalCTA = () => {
  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-primary-foreground mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Regularize Seu Imóvel{" "}
              <span className="text-gradient-gold">Agora</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Não deixe para depois. Quanto mais tempo passa, mais difícil e caro pode ficar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated"
          >
            <ZohoLeadForm buttonText="Quero Regularizar Meu Imóvel" />

            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>Retorno em 2h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Análise Gratuita</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
