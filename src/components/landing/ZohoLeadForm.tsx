import { useEffect, useRef, useState } from "react";
import { Phone, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ZohoLeadFormProps {
  buttonText?: string;
  className?: string;
}

const ZohoLeadForm = ({ 
  buttonText = "Quero Minha Análise Gratuita",
  className = ""
}: ZohoLeadFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load Zoho analytics script only once
    if (!document.getElementById("wf_anal")) {
      const analyticsScript = document.createElement("script");
      analyticsScript.id = "wf_anal";
      analyticsScript.src = "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=a7de0e302e7df8a7d5296aeefb4f1fe680b7e7ce2cd37dbe3ea9d2c67708e904ee8eda8e0e38330bb4dc5622dbacfdadgidc9570e9e9c85f8663334752b7febf9ce774ff8dc56237b0a4154bda6f51bc1f6gid7f4c25c59066195883e49ee5480369573e854e6f6174c7d7ea93300f88dffeeagid4255ab15ad631b00c606ae82e79b4e0b547dba230e5ee3c2d02b570a18bf73c3&tw=599518f51af638d5a42a31a6a59d06a6a2d42d400dc74f92fa3088a4ccd77652";
      document.body.appendChild(analyticsScript);
    }
  }, []);

  const trackVisitor = () => {
    try {
      const $zoho = (window as any).$zoho;
      if ($zoho && formRef.current) {
        const form = formRef.current;
        
        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
        if (LDTuvidObj && $zoho.salesiq?.visitor?.uniqueid) {
          LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
        }
        
        const lastnameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
        const name = lastnameObj?.value || '';
        
        if ($zoho.salesiq?.visitor?.name) {
          $zoho.salesiq.visitor.name(name);
        }
        
        const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
        if (emailObj?.value && $zoho.salesiq?.visitor?.email) {
          $zoho.salesiq.visitor.email(emailObj.value);
        }
      }
    } catch (e) {
      console.error('Tracking error:', e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    // Validate required fields
    const nameField = formRef.current.elements.namedItem('Last Name') as HTMLInputElement;
    if (!nameField || nameField.value.trim().length === 0) {
      toast({
        title: "Campo obrigatório",
        description: "Nome Completo não pode ficar em branco.",
        variant: "destructive"
      });
      nameField?.focus();
      return;
    }

    // Validate email if provided
    const emailField = formRef.current.elements.namedItem('Email') as HTMLInputElement;
    if (emailField && emailField.value.trim().length > 0) {
      const emailVal = emailField.value;
      const atpos = emailVal.indexOf('@');
      const dotpos = emailVal.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        toast({
          title: "E-mail inválido",
          description: "Insira um endereço de e-mail válido.",
          variant: "destructive"
        });
        emailField.focus();
        return;
      }
    }

    // Track visitor before submit
    trackVisitor();

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(formRef.current);
      
      // Submit using fetch with no-cors mode (required for cross-origin POST to Zoho)
      await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // Since no-cors doesn't return a readable response, we assume success
      console.log('Lead submitted to Zoho CRM');
      
      setIsSubmitted(true);
      toast({
        title: "✅ Solicitação enviada!",
        description: "Nossa equipe entrará em contato em até 2 horas.",
      });

      // Reset form
      formRef.current.reset();
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Solicitação Enviada!
          </h3>
          <p className="text-muted-foreground">
            Nossa equipe entrará em contato em até 2 horas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      id="webform7234558000000592394"
      name="WebToLeads7234558000000592394"
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
    >
      {/* Hidden fields required by Zoho */}
      <input type="hidden" name="xnQsjsdp" value="c9570e9e9c85f8663334752b7febf9ce" />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input type="hidden" name="xmIwtLD" value="a7de0e302e7df8a7d5296aeefb4f1fe680b7e7ce2cd37dbe3ea9d2c67708e904ee8eda8e0e38330bb4dc5622dbacfdad" />
      <input type="hidden" name="actionType" value="TGVhZHM=" />
      <input type="hidden" name="returnURL" value="" />
      <input type="hidden" id="ldeskuid" name="ldeskuid" value="" />
      <input type="hidden" id="LDTuvid" name="LDTuvid" value="" />

      {/* Nome Completo */}
      <div>
        <input
          type="text"
          id="Last_Name"
          name="Last Name"
          maxLength={80}
          placeholder="Seu nome completo *"
          className="flex h-14 w-full rounded-md border border-border bg-muted/50 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {/* E-mail */}
      <div>
        <input
          type="email"
          id="Email"
          name="Email"
          maxLength={100}
          placeholder="Seu e-mail"
          className="flex h-14 w-full rounded-md border border-border bg-muted/50 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {/* Celular */}
      <div>
        <input
          type="tel"
          id="Mobile"
          name="Mobile"
          maxLength={30}
          placeholder="WhatsApp (com DDD)"
          className="flex h-14 w-full rounded-md border border-border bg-muted/50 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full h-14 rounded-xl"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            <Phone className="w-5 h-5 mr-2" />
            {buttonText}
          </>
        )}
      </button>
    </form>
  );
};

export default ZohoLeadForm;
