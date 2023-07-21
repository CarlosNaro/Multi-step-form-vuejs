import { createWebHistory, createRouter, RouteRecordRaw }  from 'vue-router'
import YourInfo from '../pages/YourInfoPage.vue'
const routes:  Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "YOUR INFO",
        component: YourInfo,
    },
    {
        path: "/select",
        name: "SELECT PLAN",
        component: ()=> import("../pages/SelectPlanPage.vue"),
    },

    {
        path: "/add",
        name: "ADD-ONS",
        component: ()=> import("../pages/AddOnsPage.vue"),
    },
    {
        path: "/summary",
        name: "SUMMARY",
        component: ()=> import("../pages/SummaryPage.vue"),
    }

]

const history  = createWebHistory()
const router = createRouter({
    history,
    routes,

})

export default router