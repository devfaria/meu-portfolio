import React, { useState } from "react";

// Certifique-se de ter uma imagem sua (ex: luiz.jpg) na pasta 'src/assets'
import LuizPhoto from "./assets/luiz.jpg";

export default function App() {
  // LÓGICA DO CHAT REAL CONECTADO À AWS
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Olá! Sou o assistente virtual do Luiz Faria. Fui treinado para responder perguntas sobre a carreira dele, projetos na Arcadis/Gerdau e estudos em Engenharia de Software. O que você gostaria de saber?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;

    // 1. Adiciona a mensagem do usuário imediatamente na tela
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInputMessage("");
    setIsTyping(true);

    try {
      // 2. Faz a chamada HTTP real para a URL da sua Lambda na AWS
      const response = await fetch(
        "https://yzpzd2l3zku23owdtzsllxz4f40deyqi.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userText }), // Passa a pergunta no corpo da requisição
        },
      );

      if (!response.ok) {
        throw new Error("Erro ao consultar o servidor da AWS.");
      }

      const data = await response.json();

      // 3. Adiciona a resposta real gerada pelo Bedrock na tela
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      console.error("Erro de conexão:", error);
      // Tratamento de erro caso a API falhe ou esteja offline
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Desculpe, tive um problema para me conectar ao meu cérebro na nuvem. Por favor, tente novamente em alguns instantes!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500 selection:text-zinc-950 overflow-x-hidden">
      {/* Barra de Navegação */}
      <header className="w-full border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold tracking-tighter">
            Luiz Faria<span className="text-emerald-400">.</span>
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-zinc-400">
            <a
              href="#sobre"
              className="hover:text-emerald-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="hover:text-emerald-400 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#chat"
              className="hover:text-emerald-400 transition-colors text-emerald-400/80"
            >
              Chat IA
            </a>
          </nav>
          <button className="md:hidden text-zinc-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left max-w-3xl animate-fade-in order-2 md:order-1">
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-xs md:text-sm flex items-center justify-center md:justify-start gap-2">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500"></span>
                </span>
                Engenheiro de Software & Dev Front-end
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                Transformando a infraestrutura em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                  soluções inteligentes.
                </span>
              </h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed mt-1 max-w-2xl mx-auto md:mx-0 text-balance">
                Da linha de frente na estabilidade de sistemas críticos
                corporativos e industriais para o desenvolvimento de interfaces
                modernas e integration com Inteligência Artificial na nuvem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto justify-center md:justify-start">
                <a
                  href="#chat"
                  className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-7 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]"
                >
                  Entreviste o Luiz (IA)
                </a>
                <a
                  href="#sobre"
                  className="flex items-center justify-center border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 text-zinc-300 px-7 py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all"
                >
                  Conhecer trajetória
                </a>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up">
              <div className="absolute -inset-2 md:-inset-10 opacity-60">
                <svg
                  className="absolute top-0 right-0 h-full w-full text-emerald-500/30"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M90 10 L100 0 M90 10 L80 20 M90 10 L100 20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%] w-[110%] rounded-full bg-gradient-to-b from-emerald-600/20 to-cyan-600/10 blur-3xl opacity-80 md:blur-3xl"></div>
              </div>
              <div className="relative p-1.5 rounded-3xl border border-zinc-700/50 bg-zinc-900/80 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={LuizPhoto}
                  alt="Luiz Faria smiling, professional headshot"
                  className="rounded-2xl object-cover w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 relative z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Seção Sobre Mim */}
      <section
        id="sobre"
        className="w-full bg-zinc-900/50 border-t border-zinc-800/50 pt-20 pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Minha <span className="text-emerald-400">Trajetória</span>
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-950 border border-zinc-800/80 p-6 md:p-8 rounded-3xl hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                O Chão de Fábrica
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Sou um profissional apaixonado por resolver problemas reais.
                Hoje, como Analista de Suporte Pleno na Arcadis (cliente
                Gerdau), garanto a estabilidade de sistemas críticos em um
                ambiente corporativo complexo. Foi nessa linha de frente,
                construindo soluções no Power Apps, que descobri minha vocação
                para a Engenharia de Software.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800/80 p-6 md:p-8 rounded-3xl hover:border-emerald-500/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 relative z-10">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Stack & Estudos
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm relative z-10">
                Graduando no 4º período de Engenharia de Software pela Uninter,
                divido meu tempo entre a prática de código e o inglês. Tenho
                foco total no desenvolvimento Front-end (React, Vite, Tailwind)
                e estou iniciando meus estudos no ecossistema Cloud, visando a
                certificação AWS AI Practitioner para integrar IA e automações
                como n8n.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800/80 p-6 md:p-8 rounded-3xl hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Além do Código
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Tenho 24 anos e falo diretamente de Conselheiro Lafaiete (MG).
                Acredito que a disciplina é a chave para o crescimento, algo que
                aplico na minha rotina de academia cinco vezes na semana. Fora
                das telas de código, sou apaixonado por pilotar drones, editar
                vídeos no Premiere e acompanhar futebol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section id="projetos" className="w-full pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col items-start mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Meus <span className="text-emerald-400">Projetos</span>
            </h3>
            <p className="text-zinc-400 mt-4 max-w-2xl text-balance">
              Soluções reais desenvolvidas para otimizar operações corporativas
              e aplicações modernas criadas durante minha jornada de
              especialização.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-zinc-800/50 p-6 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
                <h4 className="text-xl font-bold text-white relative z-10">
                  App de Controle de Ponto
                </h4>
                <div className="flex gap-2 mt-3 relative z-10">
                  <span className="text-xs font-medium px-2.5 py-1 bg-zinc-950 text-emerald-400 rounded-lg border border-zinc-800">
                    Power Apps
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Desenvolvimento de um aplicativo corporativo para digitalizar
                  o processo manual de bater ponto na linha de frente da obra.
                </p>
              </div>
            </div>
            <div className="group bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-zinc-800/50 p-6 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
                <h4 className="text-xl font-bold text-white relative z-10">
                  Portfólio Moderno
                </h4>
                <div className="flex gap-2 mt-3 relative z-10">
                  <span className="text-xs font-medium px-2.5 py-1 bg-zinc-950 text-cyan-400 rounded-lg border border-zinc-800">
                    React + Vite + Tailwind
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Interface componentizada e de alta performance. Desenvolvido
                  do zero com CI/CD e boas práticas de UI/UX.
                </p>
              </div>
            </div>
            <div className="group bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden border-dashed">
              <div className="h-full p-8 flex flex-col items-center justify-center text-center opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
                  <svg
                    className="w-8 h-8 text-zinc-500 group-hover:text-emerald-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  IA + Bedrock
                </h4>
                <p className="text-zinc-500 text-sm">
                  Integrado com sucesso! Consumindo o Claude 3 Haiku via AWS
                  Lambda.
                </p>
                <span className="mt-4 text-xs font-medium px-3 py-1 bg-zinc-950 text-emerald-400 rounded-full border border-zinc-800">
                  Ativo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CHAT COM IA (Assistente Real) */}
      <section
        id="chat"
        className="w-full bg-zinc-900/30 border-t border-zinc-800/50 pt-20 pb-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              Entreviste o <span className="text-emerald-400">Luiz</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </h3>
            <p className="text-zinc-400 mt-3 text-sm max-w-lg text-balance">
              Faça perguntas sobre meu conhecimento técnico, projetos
              corporativos ou trajetória de transição de carreira para a
              Engenharia de Software.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
            {/* Header do Chat */}
            <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center border border-emerald-500/30">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Assistente de Carreira
                </p>
                <p className="text-xs text-emerald-400 font-medium">
                  Conectado ao Amazon Bedrock
                </p>
              </div>
            </div>

            {/* Área de Mensagens */}
            <div className="flex-1 p-4 md:p-6 overflow-y-auto flex flex-col gap-4 bg-zinc-950/50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-emerald-500 text-zinc-950 rounded-br-none font-medium"
                        : "bg-zinc-800 text-zinc-300 rounded-bl-none border border-zinc-700/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Indicador de "Digitando..." */}
              {isTyping && (
                <div className="flex w-full justify-start animate-fade-in">
                  <div className="bg-zinc-800 text-zinc-400 p-4 rounded-2xl rounded-bl-none border border-zinc-700/50 text-sm flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      .
                    </span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    >
                      .
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ex: O que o Luiz faz na Arcadis?"
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !inputMessage.trim()}
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé e Contato */}
      <footer className="w-full border-t border-zinc-800/50 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              Luiz Faria<span className="text-emerald-400">.</span>
            </h2>
            <p className="text-sm text-zinc-500 mt-2">
              Engenheiro de Software & Desenvolvedor Front-end.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/luiz-guilherme-faria-a454ba244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 rounded-xl text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-all"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/devfaria"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 rounded-xl text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-all"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
