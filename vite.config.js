import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The sandbox preview proxies requests with a rotating Host header, so allow the
// sandbox domain (and localhost) while previewing. Outside preview mode the
// default host validation applies.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    watch: { usePolling: true, interval: 800 },
    allowedHosts:
      previewMode && sandboxDomain ? ['.' + sandboxDomain, 'localhost', '127.0.0.1'] : undefined,
  },
})
