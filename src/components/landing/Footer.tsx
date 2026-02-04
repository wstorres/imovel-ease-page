import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-xl">R</span>
              </div>
              <span className="font-display font-semibold text-xl">
                Regulariza<span className="text-secondary">+</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm">
              Especialistas em regularização de imóveis há mais de 15 anos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#processo" className="hover:text-secondary transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" className="hover:text-secondary transition-colors">Benefícios</a></li>
              <li><a href="#contato" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                contato@regularizamais.com.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
          <p>© {currentYear} Regulariza+. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
