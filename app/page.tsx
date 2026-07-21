import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BookOpen, Bot, BrainCircuit, BriefcaseBusiness, Check,
  Code2, GraduationCap, ImageIcon, LockKeyhole, Megaphone, MonitorPlay, PenLine,
  Presentation, Rocket, ShieldCheck, Sparkles, Star, Target, Workflow, Zap,
  ChartNoAxesCombined, Clock3, Lightbulb, Menu, Linkedin, Instagram
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { MetaPixel } from "@/components/MetaPixel";

const CHECKOUT = "https://SEU-LINK-DA-KIWIFY";

const categories = [
  [Bot, "Assistentes de IA"], [ImageIcon, "Criação de Imagens"], [MonitorPlay, "Vídeos"],
  [Presentation, "Apresentações"], [PenLine, "Escrita"], [BookOpen, "Estudos"],
  [Code2, "Programação"], [Megaphone, "Marketing"], [ChartNoAxesCombined, "Produtividade"], [Workflow, "Automação"]
] as const;

const audiences = [
  [GraduationCap, "Estudantes", "Aprenda mais rápido e transforme conteúdos complexos em explicações simples."],
  [BookOpen, "Professores", "Planeje aulas, crie materiais e ganhe tempo no dia a dia."],
  [BriefcaseBusiness, "Empreendedores", "Automatize tarefas e concentre energia no crescimento do negócio."],
  [Code2, "Profissionais", "Economize horas usando as ferramentas certas para cada demanda."]
] as const;

const benefits = [
  [Clock3, "Economize horas de pesquisa", "Pare de abrir dezenas de abas. Encontre opções selecionadas em poucos minutos."],
  [ChartNoAxesCombined, "Trabalhe com mais produtividade", "Aplique IA em tarefas reais e libere tempo para o que mais importa."],
  [Target, "Descubra novas ferramentas", "Conheça soluções que talvez ainda não tenham aparecido no seu radar."],
  [Lightbulb, "Aprenda aplicações práticas", "Entenda rapidamente o que cada IA faz e para quem ela é indicada."],
  [Zap, "Automatize tarefas", "Identifique oportunidades para reduzir trabalho repetitivo."],
  [Rocket, "Ganhe vantagem competitiva", "Use tecnologia com mais clareza, velocidade e intenção."]
] as const;

const receive = ["Catálogo Digital Premium", "Mais de 35 ferramentas", "Descrição de cada IA", "Links oficiais", "Indicação de planos gratuitos e pagos", "Interface organizada", "Material em PDF", "Atualizações futuras"];

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Link href={CHECKOUT} className={`btn btn-primary ${className}`} target="_blank" rel="noopener noreferrer">{children}<ArrowRight size={18}/></Link>;
}

export default function Home() {
  return (
    <main>
      <MetaPixel />
      <header className="nav shell">
        <Link href="#inicio" aria-label="FacilitAI - início"><Image src="/logo.png" alt="FacilitAI" width={198} height={54} priority className="brand" /></Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="#conteudo">Conteúdo</Link><Link href="#beneficios">Benefícios</Link><Link href="#depoimentos">Depoimentos</Link><Link href="#faq">FAQ</Link>
        </nav>
        <CTA className="nav-cta">Comprar agora</CTA>
        <Menu className="mobile-menu" />
      </header>

      <section id="inicio" className="hero section shell">
        <div className="hero-copy">
          <Reveal><span className="eyebrow"><Sparkles size={16}/> Seu atalho para o universo da IA</span></Reveal>
          <Reveal delay={0.06}><h1>Descubra as melhores ferramentas de <span>Inteligência Artificial</span> em um só lugar</h1></Reveal>
          <Reveal delay={0.12}><p className="lead">Economize horas de pesquisa com um catálogo completo das melhores ferramentas de IA para estudar, trabalhar, empreender, criar conteúdo e automatizar tarefas.</p></Reveal>
          <Reveal delay={0.18}><div className="hero-checks">{["Mais de 35 ferramentas","Organizadas por categoria","Links oficiais","Ferramentas gratuitas e pagas","Atualizações futuras"].map(i=><span key={i}><Check size={17}/>{i}</span>)}</div></Reveal>
          <Reveal delay={0.24}><div className="hero-actions"><CTA>Quero meu FacilitAI</CTA><Link href="#conteudo" className="btn btn-secondary">Ver conteúdo</Link></div></Reveal>
          <Reveal delay={0.3}><div className="social-proof"><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="currentColor"/>)}</div><strong>Mais de 500 usuários satisfeitos</strong></div></Reveal>
        </div>
        <Reveal className="hero-visual" delay={0.15}>
          <div className="glow" />
          <div className="book-mockup">
            <div className="book-edge" />
            <Image src="/catalog/catalog-01.jpg" alt="Capa do catálogo FacilitAI" width={1410} height={2250} priority sizes="(max-width: 900px) 72vw, 400px" />
          </div>
          <div className="floating-chip chip-one"><BrainCircuit size={18}/> 35+ ferramentas</div>
          <div className="floating-chip chip-two"><BadgeCheck size={18}/> Acesso imediato</div>
        </Reveal>
      </section>

      <section className="problem section section-muted">
        <div className="shell narrow center">
          <Reveal><span className="eyebrow">O problema</span><h2>Encontrar a ferramenta certa nunca foi tão difícil.</h2><p className="section-lead">Todos os dias surgem novas Inteligências Artificiais. Mas qual realmente vale a pena? Qual é gratuita? Qual resolve o seu problema? Onde encontrar tudo organizado?</p><div className="answer-line"><Sparkles/>É exatamente isso que o FacilitAI resolve.</div></Reveal>
        </div>
      </section>

      <section id="conteudo" className="section shell solution-grid">
        <Reveal className="catalog-stack">
          <div className="page-card p1"><Image src="/catalog/catalog-16.jpg" alt="Página de criação de imagens" width={1410} height={2250}/></div>
          <div className="page-card p2"><Image src="/catalog/catalog-08.jpg" alt="Página de assistentes de IA" width={1410} height={2250}/></div>
          <div className="page-card p3"><Image src="/catalog/catalog-02.jpg" alt="Índice do catálogo" width={1410} height={2250}/></div>
        </Reveal>
        <Reveal className="solution-copy">
          <span className="eyebrow">A solução</span><h2>Conheça o FacilitAI</h2>
          <p className="section-lead">As principais ferramentas de Inteligência Artificial em um único material, organizado por categorias e pronto para consulta sempre que você precisar.</p>
          <div className="mini-proof"><ShieldCheck/><div><strong>Curadoria prática</strong><span>Menos confusão. Mais clareza para decidir.</span></div></div>
          <CTA>Garantir acesso agora</CTA>
        </Reveal>
      </section>

      <section className="section section-muted">
        <div className="shell"><Reveal className="section-heading center"><span className="eyebrow">O que você encontrará</span><h2>Uma biblioteca de possibilidades, organizada para você.</h2></Reveal>
          <div className="category-grid">{categories.map(([Icon,title],i)=><Reveal delay={i*.025} key={title}><div className="category-card"><span><Icon/></span><h3>{title}</h3><ArrowRight size={17}/></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section shell"><Reveal className="section-heading center"><span className="eyebrow">Para quem é</span><h2>Feito para quem quer produzir mais sem complicação.</h2></Reveal>
        <div className="audience-grid">{audiences.map(([Icon,title,text],i)=><Reveal delay={i*.06} key={title}><article className="feature-card"><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </section>

      <section className="section section-dark"><div className="shell receive-grid"><Reveal><span className="eyebrow dark-eyebrow">O que você recebe</span><h2>Um material completo para consultar sempre que precisar.</h2><p>Abra, escolha a categoria, compare as opções e acesse o site oficial da ferramenta.</p><CTA>Quero meu catálogo</CTA></Reveal><Reveal><div className="checklist-card">{receive.map(i=><div key={i}><span><Check/></span>{i}</div>)}</div></Reveal></div></section>

      <section id="beneficios" className="section shell"><Reveal className="section-heading center"><span className="eyebrow">Benefícios</span><h2>Não é só uma lista. É tempo e clareza de volta para você.</h2></Reveal>
        <div className="benefit-grid">{benefits.map(([Icon,title,text],i)=><Reveal delay={i*.04} key={title}><article className="benefit-card"><Icon/><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </section>

      <section className="section preview-section"><div className="shell"><Reveal className="section-heading center"><span className="eyebrow">Prévia do catálogo</span><h2>Veja um pouco do que estará nas suas mãos.</h2></Reveal>
        <div className="preview-gallery">{[["catalog-01.jpg","Capa"],["catalog-08.jpg","Assistentes de IA"],["catalog-16.jpg","Criação de Imagens"],["catalog-12.jpg","Automação"],["catalog-04.jpg","Apresentações"]].map(([img,label],i)=><Reveal delay={i*.05} key={label}><div className={`preview-page preview-${i}`}><Image src={`/catalog/${img}`} alt={`Prévia: ${label}`} width={1410} height={2250}/><span>{label}</span></div></Reveal>)}</div>
      </div></section>

      <section id="depoimentos" className="section section-muted"><div className="shell"><Reveal className="section-heading center"><span className="eyebrow">Depoimentos</span><h2>Quem usa, economiza tempo desde o primeiro acesso.</h2></Reveal>
        <div className="testimonial-grid">{["Descobri ferramentas que eu nem imaginava que existiam.","Economizei muito tempo pesquisando.","Vale muito mais do que paguei."].map((t,i)=><Reveal delay={i*.08} key={t}><article className="testimonial"><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={17} fill="currentColor"/>)}</div><blockquote>“{t}”</blockquote><div className="avatar">{["AM","RC","LS"][i]}</div><span>Cliente FacilitAI</span></article></Reveal>)}</div>
      </div></section>

      <section className="section shell offer-wrap"><Reveal><div className="offer-card"><div className="offer-copy"><span className="launch-badge">🔥 Oferta de lançamento</span><h2>Comece a usar IA com mais clareza hoje.</h2><p>Tenha um mapa confiável para encontrar a ferramenta ideal sem perder horas pesquisando.</p><div className="offer-list">{["Acesso imediato","Download instantâneo","Garantia de 7 dias","Pagamento seguro"].map(i=><span key={i}><Check/>{i}</span>)}</div></div><div className="price-box"><span className="old-price">De: <s>R$49,90</s></span><span>Por apenas</span><strong>R$19,90</strong><small>pagamento único</small><CTA>Quero meu FacilitAI</CTA><div className="secure"><LockKeyhole size={15}/> Compra processada pela Kiwify</div></div></div></Reveal></section>

      <section className="section guarantee"><Reveal className="shell"><div className="guarantee-card"><div className="guarantee-icon"><ShieldCheck/></div><div><span className="eyebrow">Garantia</span><h2>Compra 100% segura</h2><p>Se o catálogo não atender às suas expectativas, você poderá solicitar o reembolso dentro do prazo de 7 dias oferecido pela plataforma.</p></div></div></Reveal></section>

      <section id="faq" className="section shell faq-grid"><Reveal><span className="eyebrow">FAQ</span><h2>Ainda ficou alguma dúvida?</h2><p className="section-lead">Confira as respostas para as perguntas mais frequentes antes de garantir seu acesso.</p></Reveal><Reveal><FAQ/></Reveal></section>

      <section className="section final-cta"><div className="shell center"><Reveal><span className="eyebrow dark-eyebrow">Seu próximo passo</span><h2>Comece hoje mesmo a utilizar as melhores ferramentas de Inteligência Artificial.</h2><p>Tudo organizado em um único catálogo.</p><CTA>Comprar agora</CTA></Reveal></div></section>

      <footer><div className="shell footer-grid"><div><Image src="/logo.png" alt="FacilitAI" width={190} height={52}/><p>Inteligência Artificial mais simples, prática e acessível.</p></div><div><h4>Menu</h4><Link href="#conteudo">Sobre</Link><Link href="mailto:contato@facilitai.com.br">Contato</Link><Link href="#">Política de Privacidade</Link><Link href="#">Termos de Uso</Link></div><div><h4>Redes sociais</h4><Link href="#"><Instagram size={18}/>Instagram</Link><Link href="#"><Linkedin size={18}/>LinkedIn</Link></div></div><div className="shell copyright">© {new Date().getFullYear()} FacilitAI. Todos os direitos reservados.</div></footer>

      <div className="mobile-sticky"><div><small>Oferta de lançamento</small><strong>R$19,90</strong></div><CTA>Comprar agora</CTA></div>
    </main>
  );
}
