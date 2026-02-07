import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ZohoLeadFormProps {
  buttonText?: string;
  className?: string;
}

const ZohoLeadForm = ({ 
  buttonText = "Quero Minha Análise Gratuita",
  className = ""
}: ZohoLeadFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Load Zoho analytics script
    const analyticsScript = document.createElement("script");
    analyticsScript.id = "wf_anal";
    analyticsScript.src = "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=a7de0e302e7df8a7d5296aeefb4f1fe680b7e7ce2cd37dbe3ea9d2c67708e904ee8eda8e0e38330bb4dc5622dbacfdadgidc9570e9e9c85f8663334752b7febf9ce774ff8dc56237b0a4154bda6f51bc1f6gid7f4c25c59066195883e49ee5480369573e854e6f6174c7d7ea93300f88dffeeagid4255ab15ad631b00c606ae82e79b4e0b547dba230e5ee3c2d02b570a18bf73c3&tw=599518f51af638d5a42a31a6a59d06a6a2d42d400dc74f92fa3088a4ccd77652";
    document.body.appendChild(analyticsScript);

    // Define validation and tracking functions on window
    (window as any).validateEmail7234558000000592394 = function() {
      const form = document.forms.namedItem('WebToLeads7234558000000592394');
      if (!form) return true;
      const emailFld = form.querySelectorAll('[ftype="email"]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Insira um endereço de e-mail válido.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).trackVisitor7234558000000592394 = function() {
      try {
        const $zoho = (window as any).$zoho;
        if ($zoho) {
          const form = document.forms.namedItem('WebToLeads7234558000000592394');
          if (!form) return;
          
          const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
          if (LDTuvidObj && $zoho.salesiq?.visitor?.uniqueid) {
            LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
          }
          
          let name = '';
          const lastnameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
          if (lastnameObj) {
            name = lastnameObj.value;
          }
          
          const firstnameObj = form.elements.namedItem('First Name') as HTMLInputElement;
          if (firstnameObj) {
            name = firstnameObj.value + ' ' + name;
          }
          
          if ($zoho.salesiq?.visitor?.name) {
            $zoho.salesiq.visitor.name(name);
          }
          
          const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
          if (emailObj && $zoho.salesiq?.visitor?.email) {
            $zoho.salesiq.visitor.email(emailObj.value);
          }
        }
      } catch (e) {
        console.error('Tracking error:', e);
      }
    };

    (window as any).checkMandatory7234558000000592394 = function() {
      const form = document.forms.namedItem('WebToLeads7234558000000592394');
      if (!form) return false;
      
      const mndFields = ['Last Name'];
      const fldLangVal = ['Nome Completo'];
      
      for (let i = 0; i < mndFields.length; i++) {
        const fieldObj = form.elements.namedItem(mndFields[i]) as HTMLInputElement;
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
            alert(fldLangVal[i] + ' não pode ficar em branco.');
            fieldObj.focus();
            return false;
          }
        }
      }
      
      (window as any).trackVisitor7234558000000592394();
      
      if (!(window as any).validateEmail7234558000000592394()) {
        return false;
      }
      
      const urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
        const smarturlfield = document.createElement('input');
        smarturlfield.setAttribute('type', 'hidden');
        smarturlfield.setAttribute('value', urlparams.get('service') || '');
        smarturlfield.setAttribute('name', 'service');
        form.appendChild(smarturlfield);
      }
      
      const submitBtn = document.querySelector('.formsubmit') as HTMLButtonElement;
      if (submitBtn) {
        submitBtn.disabled = true;
      }
      
      return true;
    };

    return () => {
      const script = document.getElementById("wf_anal");
      if (script) script.remove();
    };
  }, []);

  return (
    <form
      ref={formRef}
      id="webform7234558000000592394"
      action="https://crm.zoho.com/crm/WebToLeadForm"
      name="WebToLeads7234558000000592394"
      method="POST"
      onSubmit={() => (window as any).checkMandatory7234558000000592394()}
      acceptCharset="UTF-8"
      className={`space-y-4 ${className}`}
    >
      {/* Hidden fields */}
      <input type="hidden" name="xnQsjsdp" value="c9570e9e9c85f8663334752b7febf9ce" />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input type="hidden" name="xmIwtLD" value="a7de0e302e7df8a7d5296aeefb4f1fe680b7e7ce2cd37dbe3ea9d2c67708e904ee8eda8e0e38330bb4dc5622dbacfdad" />
      <input type="hidden" name="actionType" value="TGVhZHM=" />
      <input type="hidden" name="returnURL" value={window.location.href} />
      <input type="hidden" id="ldeskuid" name="ldeskuid" />
      <input type="hidden" id="LDTuvid" name="LDTuvid" />

      {/* Nome Completo */}
      <div>
        <input
          type="text"
          id="Last_Name"
          name="Last Name"
          maxLength={80}
          placeholder="Seu nome completo *"
          className="flex h-14 w-full rounded-md border border-border bg-muted/50 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
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
      <Button 
        type="submit"
        size="lg" 
        className="formsubmit btn-secondary w-full h-14 text-base font-semibold rounded-xl"
      >
        <Phone className="w-5 h-5 mr-2" />
        {buttonText}
      </Button>
    </form>
  );
};

export default ZohoLeadForm;
