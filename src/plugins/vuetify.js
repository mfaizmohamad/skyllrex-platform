// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#1976D2',
    secondary: '#759dc6',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: '#BA68C8',
    secondary: '#FF8A65',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
