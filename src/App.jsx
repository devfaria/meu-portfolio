import React from "react";

// Certifique-se de ter uma imagem sua (ex: luiz.jpg) na pasta 'src/assets'
import LuizPhoto from "./assets/luiz.jpg";

export default function App() {
  return (
    // Contêiner principal ocupa toda a tela e tem o fundo escuro
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500 selection:text-zinc-950 overflow-x-hidden">
      {/* Barra de Navegação - Ajustada para full width no celular */}
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
          {/* Menu Hambúrguer (Opcional, mas melhora UX em mobile) */}
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

      {/* Hero Section Integrada - Com Ajustes de Responsividade e Centralização Móvel */}
      <main className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna Direita (Foto): Mantém a ordem no desktop (order-2) e sobe no mobile (order-1), agora sempre centralizada */}
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

            {/* Coluna Esquerda (Texto): Ajustada para centralização geral no mobile */}
            <div className="flex flex-col gap-5 items-center md:items-start max-w-3xl animate-fade-in order-2 md:order-1 text-center md:text-left">
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-xs md:text-sm flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500"></span>
                </span>
                Engenheiro de Software & Dev Front-end
              </span>

              {/* Título responsivo: Tamanho de fonte ajustado para mobile (text-3xl) e centralizado */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Transformando a infraestrutura em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                  soluções inteligentes.
                </span>
              </h2>

              {/* Descrição: Centralizada no mobile */}
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed mt-1 max-w-2xl">
                Da linha de frente na estabilidade de sistemas críticos
                corporativos e industriais para o desenvolvimento de interfaces
                modernas e integração com Inteligência Artificial na nuvem.
              </p>

              {/* Botões: Centralizados no mobile */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto items-center sm:items-stretch">
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
          </div>
        </div>
      </main>
    </div>
  );
}
