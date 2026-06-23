import React from "react";

// Certifique-se de ter uma imagem sua (ex: luiz.jpg) na pasta 'src/assets'
import LuizPhoto from "./assets/luiz.jpg";

export default function App() {
  return (
    // Contêiner principal ocupando toda a tela e impedindo rolagem horizontal
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500 selection:text-zinc-950 overflow-x-hidden">
      {/* Barra de Navegação - Fixa no topo (sticky) e responsiva */}
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
              className="hover:text-emerald-400 transition-colors"
            >
              Chat IA
            </a>
          </nav>
          {/* Menu Hambúrguer visível apenas no mobile */}
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

      {/* Hero Section Integrada - Responsiva */}
      <main className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna Esquerda: Texto e Call to Action (Centralizado no mobile, à esquerda no desktop) */}
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
                modernas e integração com Inteligência Artificial na nuvem.
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

            {/* Coluna Direita: Foto Integrada */}
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up">
              {/* Efeito de Conexão */}
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

              {/* Contêiner da Foto */}
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
            {/* Card 1: A Base */}
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
                construindo soluções no Power Apps (como aplicativos de controle
                de ponto), que descobri minha vocação para a Engenharia de
                Software.
              </p>
            </div>

            {/* Card 2: Momento Atual */}
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
                Graduando no 6º período de Engenharia de Software pela Uninter,
                divido meu tempo entre a prática de código e o inglês contínuo.
                Sou transparente sobre meu momento: tenho foco total no
                desenvolvimento Front-end (React, Vite, Tailwind) e estou
                iniciando ativamente meus estudos no ecossistema Cloud (AWS),
                visando a certificação AI Practitioner para integrar IA e
                automações como n8n.
              </p>
            </div>

            {/* Card 3: O Lado Pessoal */}
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
                vídeos no Premiere e, claro, acompanhar os jogos do Cruzeiro no
                tempo livre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
