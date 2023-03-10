import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// i18n
import i18n from './i18n'

//Styles
import '@/assets/scss/main.scss'

//Custom UI components
import ui from '@/components/ui'

//Toast plugin
import toast from '@/plugins/toast'
import gql from '@/plugins/gql'

const app = createApp(App)

//Global register Ui components
ui.forEach((uiItem) => {
  app.component(uiItem.name, uiItem)
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(toast)
app.use(gql)

app.mount('#app')
