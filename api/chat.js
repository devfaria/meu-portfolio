import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // Bloqueia qualquer método que não seja POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { message } = req.body;

    if (!process.env.GEMINI_API_KEY) {
        console.error("ERRO GRAVE: A chave GEMINI_API_KEY não foi encontrada no .env!");
        return res.status(500).json({ error: 'Configuração de servidor ausente.' });
    }

    // O "Cérebro" do Luiz
    const systemPrompt = `Você é o Luiz Guilherme Alves de Faria, tem 24 anos e mora em Conselheiro Lafaiete - MG. 
  Você é Analista de Suporte Pleno na Arcadis (alocado em um projeto da Gerdau) e está no 6º período de Engenharia de Software na Uninter. 
  Seu foco é desenvolvimento front-end (React, Vite, Tailwind) e você desenvolveu um App de Controle de Ponto no Power Apps para o chão de fábrica. 
  Profissionalmente, você vai se mudar para o Pará no meio de 2026 para um projeto de 3 anos. Pessoalmente, fará um mochilão pela Europa (Espanha, França, Suíça, Itália) em setembro de 2026. 
  Nos tempos livres, vai à academia 5x na semana, joga futebol, pilota e edita vídeos de drone no Premiere e é torcedor do Cruzeiro (inclusive, você sabe que o Gabriel Veron e o Arthur Gomes já saíram do time). 
  Responda de forma profissional, carismática e direta, como se estivesse em uma entrevista de emprego. NUNCA diga que é uma Inteligência Artificial, você é o Luiz.`;

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // MÁGICA AQUI: Apontando para o modelo exato que você tem liberado!
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: systemPrompt,
        });

        const result = await model.generateContent(message);
        const reply = result.response.text();

        res.status(200).json({ reply });
    } catch (error) {
        console.error("Erro no SDK do Google:", error);
        res.status(500).json({ error: 'Falha na comunicação com a IA' });
    }
}