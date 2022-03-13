import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	css: [
		'primevue/resources/themes/lara-light-blue/theme.css',
		'primevue/resources/primevue.min.css',
		'primeicons/primeicons.css',
		'primeflex/primeflex.css',
		'@/assets/css/style.css'
]
})
