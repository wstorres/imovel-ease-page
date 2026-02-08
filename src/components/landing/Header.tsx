import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", id: "inicio" },
    { label: "Serviços", id: "servicos" },
    { label: "Processo", id: "processo" },
    { label: "Benefícios", id: "beneficios" },
    { label: "Contato", id: "contato" },
  ];

  // Função técnica para rolar a tela suavemente
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura do seu header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Agora com scroll suave para o topo */}
          <button onClick={() => scrollToSection('inicio')} className="flex items-center gap-2 outline-none">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">R</span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground">
              Regulariza<span className="text-secondary">+</span>
            </span>
          </button>

          {/* Desktop Navigation - Trocado de <a> para <button> */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-sm outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA e Contato */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5511999999999" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(11) 99999-9999</span>
            </a>
            <Button onClick={() => scrollToSection('contato')} className="btn-secondary rounded-full px-6">
              Análise Gratuita
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2 outline-none"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contato')} className="btn-secondary rounded-full w-full mt-4">
                Fale Conosco
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
