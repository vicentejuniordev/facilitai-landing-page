# FacilitAI Landing Page

Landing page de alta conversão desenvolvida com Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion e Lucide React.

## Rodar localmente

```bash
npm install
npm run dev
```

## Configuração

1. Substitua `https://SEU-LINK-DA-KIWIFY` em `app/page.tsx` pelo link real do checkout.
2. Copie `.env.example` para `.env.local` e preencha os IDs do Google Analytics, Google Tag Manager e Meta Pixel.
3. Atualize links de redes sociais, contato, termos e privacidade no rodapé.

## Estrutura para testes A/B

O CTA usa uma constante central (`CHECKOUT`) e as seções estão componentizadas, facilitando variações de copy, preço, prova social e ordem das seções.
