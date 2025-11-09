import { fileURLToPath } from 'url'
import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

export default defineConfig({
  title: 'VueCalendry',
  description: 'A modern TypeScript-first calendar for Vue 3.',
  lang: 'en',
  base: '/VueCalendry/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Playground', link: '/playground' },
    ],
    sidebar: [
      { text: 'Getting Started', link: '/' },
      { text: 'Playground', link: '/playground' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/VueCalendry/VueCalendry',
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    // 👇 Let VitePress use your components + tailwind
    optimizeDeps: {
      include: ['vue'],
    },
    server: {
      host: true,
      watch: {
        usePolling: true,
      },
    },
    // css: {
    //   postcss: './postcss.config.js',
    // },
    plugins: [groupIconVitePlugin()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
        '@docs': fileURLToPath(new URL('../../docs', import.meta.url)),
        '@examples': fileURLToPath(
          new URL('../../docs/examples', import.meta.url),
        ),
      },
    },
  },
})
