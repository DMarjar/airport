import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '*',
        component: () => import('@/views/errorPages/Error404.vue'),
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/layout',
                name: 'layout',
                component: () => import('@/views/Layout.vue'),
                children: [
                    {
                        path: '/home',
                        name: 'home',
                        component: () => import('@/components/Home'),
                    },
                    {
                        path: '/form',
                        name: 'form',
                        component: () => import('@/components/Form'),
                    },
                    {
                        path: "/reservations",
                        name: "reservations",
                        component: () => import('@/components/Reservations'),
                    },
                    {
                        path: "/reservations/seats",
                        name: "seats",
                        component: () => import('@/components/Seats'),
                    },
                    {
                        path: "/available",
                        name: "available",
                        component: () => import('@/components/Available'),
                    },
                    {
                        path: "/available/airlines",
                        name: "airlines",
                        component: () => import('@/components/Airlines'),
                    },
                    {
                        path: "/canceled",
                        name: "canceled",
                        component: () => import('@/components/Canceled'),
                    },
                    {
                        path: "/canceled/next",
                        name: "next",
                        component: () => import('@/components/Next'),
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({routes,})
export default router
