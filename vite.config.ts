import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { promisify } from 'node:util'
import { brotliCompress } from 'node:zlib'
import compress from 'rollup-plugin-gzip'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
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
