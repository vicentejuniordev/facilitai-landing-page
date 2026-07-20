"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  ["Como recebo o catálogo?", "Após a confirmação do pagamento, o acesso é liberado pela Kiwify para download imediato."],
  ["O pagamento é seguro?", "Sim. O pagamento é processado no ambiente seguro da Kiwify."],
  ["Funciona no celular?", "Sim. O PDF pode ser aberto no celular, tablet ou computador."],
  ["Preciso instalar algum aplicativo?", "Não. Basta usar um leitor de PDF, que já vem instalado na maioria dos dispositivos."],
  ["As ferramentas são gratuitas?", "O catálogo reúne opções gratuitas, pagas e com planos freemium, sempre com essa indicação."],
  ["Receberei futuras atualizações?", "Sim. Atualizações futuras do material estão incluídas na oferta de lançamento."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{items.map(([q,a], i) => (
    <div className="faq-item" key={q}>
      <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
        <span>{q}</span><ChevronDown className={open === i ? "rotate" : ""} size={20}/>
      </button>
      <div className={`faq-answer ${open === i ? "open" : ""}`}><p>{a}</p></div>
    </div>
  ))}</div>
}
