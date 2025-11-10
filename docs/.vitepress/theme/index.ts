import { defineCustomElement, type App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './custom.css'
import { VueCalendry } from '@/index'
import '@/style.css'
import DemoWrapper from './DemoWrapper.vue'

export default {
  ...DefaultTheme,

  enhanceApp({ app }: { app: App }) {
    // Register your global components here
    app.component('VueCalendry', VueCalendry)

    app.component('DemoWrapper', DemoWrapper)
  },
}
