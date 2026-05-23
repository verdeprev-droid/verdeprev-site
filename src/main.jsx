import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Baby,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HandHeart,
  HeartPulse,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const contactEmail = "verdeprev@gmail.com";
const mailSubject = "Solicitação de análise previdenciária";
const mailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}`;

const services = [
  {
    icon: <Calculator />,
    title: "Planejamento previdenciário",
    text: "Análise do histórico contributivo para identificar cenários, pendências e caminhos administrativos possíveis.",
  },
  {
    icon: <ShieldCheck />,
    title: "Aposentadorias",
    text: "Orientação administrativa para aposentadoria por idade, tempo de contribuição, especial e regras de transição.",
  },
  {
    icon: <HeartPulse />,
    title: "Auxílio por incapacidade",
    text: "Apoio na organização de documentos, requerimento e acompanhamento administrativo de benefícios por incapacidade.",
  },
  {
    icon: <HandHeart />,
    title: "BPC/LOAS",
    text: "Assessoria administrativa para benefício assistencial à pessoa idosa ou à pessoa com deficiência.",
  },
  {
    icon: <Baby />,
    title: "Salário-maternidade",
    text: "Orientação para documentação e solicitação administrativa do salário-maternidade junto ao INSS.",
  },
  {
    icon: <ClipboardCheck />,
    title: "Outros benefícios do INSS",
    text: "Análise administrativa de pensão por morte, auxílio-reclusão, revisões, recursos e demais demandas previdenciárias.",
  },
  {
    icon: <FileText />,
    title: "Revisão de benefícios",
    text: "Avaliação administrativa de benefícios concedidos para verificar inconsistências, pendências e possibilidades de regularização.",
  },
  {
    icon: <Users />,
    title: "Atendimento 100% online",
    text: "Acompanhamento claro e próximo, sem necessidade de deslocamento, com comunicação simples do início ao fim.",
  },
];

const benefits = [
  "Diagnóstico previdenciário claro e objetivo",
  "Organização documental para reduzir riscos",
  "Cenários administrativos para aposentadoria e benefícios",
  "Orientação sobre contribuições, vínculos e pendências",
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="VerdePrev">
            <img src="/10_logo_header_site_2400x650.png" alt="VerdePrev Assessoria Previdenciária" />
          </a>
          <nav className="links" aria-label="Menu principal">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="navButton" href={mailHref}>Solicitar análise</a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container heroGrid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heroText"
            >
              <img className="heroLogo" src="/10_logo_header_site_2400x650.png" alt="VerdePrev Assessoria Previdenciária" />
              <span className="eyebrow">Assessoria administrativa previdenciária 100% online</span>
              <h1>Seu caminho no INSS com mais clareza, organização e segurança.</h1>
              <p className="lead">
                A VerdePrev oferece assessoria administrativa previdenciária para ajudar você a entender direitos, organizar documentos e solicitar aposentadorias e benefícios do INSS com orientação simples e estratégica.
              </p>
              <div className="heroActions">
                <a className="primaryButton" href={mailHref}>
                  Solicitar análise <ArrowRight />
                </a>
                <a className="secondaryButton" href="#servicos">Ver benefícios atendidos</a>
              </div>
              <div className="miniBenefits">
                {benefits.slice(0, 2).map((item) => (
                  <div key={item}><CheckCircle2 /> <span>{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heroPanel"
            >
              <img className="watermark" src="/05_simbolo_branco_transparente_1024.png" alt="" aria-hidden="true" />
              <p>Diagnóstico VerdePrev</p>
              <h2>Análise administrativa completa</h2>
              <span>
                Um levantamento para identificar tempo de contribuição, pendências, documentos necessários e caminhos administrativos possíveis para aposentadorias e benefícios.
              </span>
              <div className="checkList">
                {benefits.map((item) => (
                  <div key={item}><CheckCircle2 /> <small>{item}</small></div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="section white">
          <div className="container">
            <div className="sectionTitle">
              <p>Serviços</p>
              <h2>Assessoria para aposentadorias, auxílios e benefícios do INSS</h2>
              <span>Atuação administrativa, atendimento humano e comunicação simples para transformar regras complexas em decisões mais claras e organizadas.</span>
            </div>

            <div className="serviceGrid">
              {services.map((service) => (
                <article className="serviceCard" key={service.title}>
                  <div className="iconBox">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section soft">
          <div className="container aboutGrid">
            <div className="aboutText">
              <p className="kicker">Sobre a VerdePrev</p>
              <h2>Previdência explicada de forma simples, técnica e transparente.</h2>
              <p>
                A VerdePrev nasceu para oferecer assessoria administrativa previdenciária, com foco em planejamento, organização documental, prevenção de erros e tomada de decisão consciente.
              </p>
              <p>
                O atendimento é 100% online, sem exposição de nome pessoal ou localização, com orientação clara sobre documentos, vínculos, contribuições, pedidos administrativos e acompanhamento junto aos canais oficiais.
              </p>
            </div>
            <div className="values">
              {["Clareza", "Estratégia", "Segurança", "Atendimento online"].map((item) => (
                <div key={item} className="valueCard">
                  <CheckCircle2 />
                  <h3>{item}</h3>
                  <p>Cada análise é feita com atenção aos detalhes e foco no melhor encaminhamento administrativo possível.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="section dark">
          <img className="darkMark" src="/05_simbolo_branco_transparente_1024.png" alt="" aria-hidden="true" />
          <div className="container">
            <div className="darkTitle">
              <p>Como funciona</p>
              <h2>Um processo simples, online e administrativo para você entender seus direitos.</h2>
            </div>
            <div className="steps">
              <div className="step"><strong>1</strong><h3>Coleta de informações</h3><p>Reunimos documentos, vínculos, contribuições e informações sobre seu histórico previdenciário.</p></div>
              <div className="step"><strong>2</strong><h3>Análise administrativa</h3><p>Verificamos regras aplicáveis, pendências documentais, possibilidades de revisão e cenários de benefício.</p></div>
              <div className="step"><strong>3</strong><h3>Plano de ação</h3><p>Você recebe orientações práticas para seguir com segurança, organização e previsibilidade.</p></div>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container">
            <div className="cta">
              <p>Contato</p>
              <h2>Solicite uma análise administrativa previdenciária</h2>
              <span>Envie uma mensagem para a VerdePrev e receba orientação inicial sobre os próximos passos para aposentadoria, auxílio por incapacidade, BPC, salário-maternidade ou outros benefícios do INSS.</span>
              <div className="ctaActions">
                <a className="primaryButton" href={mailHref}>
                  <Mail /> {contactEmail}
                </a>
                <button className="secondaryButton disabled" type="button"><MessageCircle /> WhatsApp em breve</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerContent">
          <img src="/11_logo_header_site_fundo_verde_2400x650.png" alt="VerdePrev Assessoria Previdenciária" />
          <div>
            <p>© 2026 VerdePrev Assessoria Previdenciária. Todos os direitos reservados.</p>
            <p>Assessoria administrativa previdenciária 100% online.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
