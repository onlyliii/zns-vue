import News from './components/News.vue'
import Home from './components/Home.vue'

export default {
    routes: [
        {path: '/home', component: Home},
        {path: '/news', component: News},
        {path: '*', redirect: '/home'}
    ]
}