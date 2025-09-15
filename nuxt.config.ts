import { resolve } from 'path'
import fs from 'fs';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  ssr: true, 
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['aos/dist/aos.css'],
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
  ],
  runtimeConfig: {
    apiKey: 'WxcNJAPhmzcWkeQjbRs8MIlfErs4vgDmyKwLDxDAVZi0YagmedD5KZ5Vdd3Q',
    public: {
      apiBase: 'https://api.spaceis.pl/v4'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@stores': resolve(__dirname, 'stores'),
        '@components': resolve(__dirname, 'components') 
      }
    },
    server: {

      // https: {
      //   key: fs.readFileSync('/path/to/key.pem'),
      //   cert: fs.readFileSync('/path/to/cert.pem'),
      // },
        
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }

});
