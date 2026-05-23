
import React from "react";
import { createRoot } from "react-dom/client";
import { CheckCircle2, ShieldCheck, FileText, Users, Calculator, MessageCircle, ArrowRight, HeartPulse, Baby, HandHeart, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const services = [
  {
    icon: <Calculator />,
    title: "Planejamento Previdenciário",
    text: "Análise do histórico contributivo para identificar cenários, pendências e caminhos administrativos possíveis."
  },
  {
    icon: <ShieldCheck />,
    title: "Aposentadorias",
    text: "Orientação administrativa para aposentadoria por idade, tempo de contribuição, especial e regras de transição."
  },
  {
    icon: <HeartPulse />,
    title: "Auxílio por Incapacidade",
    text: "Apoio administrativo para organização de documentos, requerimento e acompanhamento de benefícios por incapacidade."
  },
  {
    icon: <HandHeart />,
    title: "BPC/LOAS",
    text: "Assessoria administrativa para benefício assistencial à pessoa idosa ou à pessoa com deficiência, conforme os requisitos aplicáveis."
  },
  {
    icon: <Baby />,
    title: "Salário-Maternidade",
    text: "Orientação para organização de documentos e solicitação administrativa do salário-maternidade junto ao INSS."
  },
  {
    icon: <ClipboardCheck />,
    title: "Outros Benefícios do INSS",
    text: "Análise administrativa de pensão por morte, auxílio-reclusão, revisões, recursos e demais demandas previdenciárias."
  },
  {
    icon: <FileText />,
    title: "Revisão de Benefícios",
    text: "Avaliação administrativa de benefícios já concedidos para verificar inconsistências, pendências e oportunidades."
  },
  {
    icon: <Users />,
    title: "Atendimento 100% Online",
    text: "Acompanhamento claro e próximo, sem necessidade de deslocamento, com comunicação simples do início ao fim."
  }
];

const benefits = [
  "Diagnóstico previdenciário claro e objetivo",
  "Estratégia para reduzir riscos de indeferimento",
  "Simulações com diferentes cenários de aposentadoria",
  "Orientação sobre documentos, contribuições e vínculos"
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="VerdePrev">
            <img src="/marca.png" alt="VerdePrev Assessoria Previdenciária" />
          </a>
          <nav className="links">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="navButton" href="mailto:verdeprev@gmail.com">Falar por e-mail</a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="shape shapeOne"></div>
          <div className="shape shapeTwo"></div>

          <div className="container heroGrid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <img className="heroLogo" src="/marca.png" alt="VerdePrev Assessoria Previdenciária" />
              <span className="eyebrow">Assessoria administrativa previdenciária</span>
              <h1>Seu futuro previdenciário planejado com clareza e estratégia.</h1>
              <p className="lead">
                A VerdePrev oferece assessoria administrativa previdenciária 100% online para ajudar você a entender seus direitos, organizar contribuições e tomar decisões mais seguras sobre aposentadoria, revisões e benefícios do INSS.
              </p>
              <div className="heroActions">
                <a className="primaryButton" href="#contato">
                  Solicitar análise <ArrowRight />
                </a>
                <a className="secondaryButton" href="#servicos">Conhecer serviços</a>
              </div>
              <div className="miniBenefits">
                {benefits.slice(0, 2).map((item) => (
                  <div key={item}><CheckCircle2 /> <span>{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="diagnosticCard">
                <div className="diagnosticInner">
                  <p>Diagnóstico VerdePrev</p>
                  <h2>Análise previdenciária completa</h2>
                  <span>
                    Um levantamento administrativo para mostrar tempo de contribuição, pendências, oportunidades e melhores caminhos para o seu benefício.
                  </span>
                  <div className="checkList">
                    {benefits.map((item) => (
                      <div key={item}><CheckCircle2 /> <small>{item}</small></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="section white">
          <div className="container">
            <div className="sectionTitle">
              <p>Serviços</p>
              <h2>Assessoria para cada etapa da sua vida previdenciária</h2>
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

        <section id="sobre" className="section">
          <div className="container aboutGrid">
            <div className="aboutText">
              <p className="kicker">Sobre a VerdePrev</p>
              <h2>Previdência explicada de forma simples, técnica e transparente.</h2>
              <p>
                A VerdePrev nasceu para oferecer assessoria administrativa previdenciária, com foco em planejamento, organização documental, prevenção de erros e tomada de decisão consciente.
              </p>
              <p>
                Nosso compromisso é analisar cada caso com cuidado, indicar caminhos administrativos possíveis e acompanhar o cliente com linguagem acessível do início ao fim.
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
          <div className="container">
            <div className="darkTitle">
              <p>Como funciona</p>
              <h2>Um processo simples, online e administrativo para você entender seus direitos.</h2>
            </div>
            <div className="steps">
              <div className="step"><strong>1</strong><h3>Coleta de informações</h3><p>Reunimos documentos, vínculos, contribuições e informações sobre seu histórico previdenciário.</p></div>
              <div className="step"><strong>2</strong><h3>Análise administrativa</h3><p>Verificamos regras aplicáveis, pendências documentais, possibilidades de revisão administrativa e cenários de aposentadoria.</p></div>
              <div className="step"><strong>3</strong><h3>Plano de ação</h3><p>Você recebe orientações práticas para seguir com segurança, organização e previsibilidade.</p></div>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container">
            <div className="cta">
              <p>Contato</p>
              <h2>Vamos planejar seu futuro previdenciário?</h2>
              <span>Fale com a VerdePrev e agende uma análise inicial 100% online para entender os caminhos administrativos possíveis para o seu benefício.</span>
              <div className="ctaActions">
                <a className="primaryButton" href="mailto:verdeprev@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20an%C3%A1lise%20previdenci%C3%A1ria">
                  <MessageCircle /> verdeprev@gmail.com
                </a>
                <button className="secondaryButton disabled">WhatsApp em breve</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerContent">
          <p>© 2026 VerdePrev Assessoria Previdenciária. Todos os direitos reservados.</p>
          <p>Assessoria administrativa previdenciária 100% online.</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
