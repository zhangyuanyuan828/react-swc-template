import react from '@vitejs/plugin-react-swc'
import { promisify } from 'node:util'
import { brotliCompress } from 'node:zlib'
import compress from 'rollup-plugin-gzip'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compress({
      filter: /\.(js|mjs|cjs|json|css|html|xml|svg|wasm)$/i
    }),
    compress({
      filter: /\.(js|mjs|cjs|json|css|html|xml|svg|wasm)$/i,
      fileName: '.br',
      customCompression: (content) => promisify(brotliCompress)(content)
    })
  ]
})
