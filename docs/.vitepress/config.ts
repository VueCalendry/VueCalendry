import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VueCalendry',
  description: 'A modern TypeScript-first calendar for Vue 3.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Playground', link: '/playground' },
    ],
    sidebar: [
      { text: 'Getting Started', link: '/' },
      { text: 'Playground', link: '/playground' },
    ],
  },
  vite: {
    // 👇 Let VitePress use your components + tailwind
    optimizeDeps: {
      include: ['vue', 'vuecalendry'],
    },
    css: {
      postcss: './postcss.config.js',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
})
