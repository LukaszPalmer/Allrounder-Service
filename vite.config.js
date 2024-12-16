import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<Webpage>/', // Ersetze <repository-name> mit dem Namen deines Repositories
})
