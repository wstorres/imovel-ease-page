import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre regularização de imóveis.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline-block">
        Fale pelo WhatsApp
      </span>
      
      {/* Pulse Animation */}
      <span className="absolute -top-1 -right-1 w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-whatsapp" />
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
