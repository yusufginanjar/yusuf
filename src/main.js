import { createApp } from 'vue'
import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'
import Skills from './pages/Skills.vue'
import Contact from './pages/Contact.vue'
// import NotFound from './pages/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/skills', component: Skills },
    { path: '/contact', component: Contact },
    // { path: '/:notFound(.*)', component: NotFound }
]

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)

app.mount('#app')