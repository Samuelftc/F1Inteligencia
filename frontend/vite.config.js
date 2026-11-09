import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],

  // Encaminha requisições /api para o backend durante o desenvolvimento.
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        // Ajusta o cabeçalho Host para corresponder ao servidor de destino.
        changeOrigin: true,
      },
    },
  },
})
