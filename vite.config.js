import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ajuste se necessário

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // <--- ESSA LINHA É A CHAVE DE TUDO!
})