import { type App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import { VueCalendry } from '@/index'
import './custom.css'

export default {
  ...DefaultTheme,

  enhanceApp({ app }: { app: App }) {
    // Register your global components here
    app.component('VueCalendry', VueCalendry)
  },
}
