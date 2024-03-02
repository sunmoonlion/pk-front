import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        IconsResolver(
          {prefix: 'i'}
        ),
      ],
    }),
    Icons(
      {autoInstall: true},
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
