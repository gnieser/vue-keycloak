import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from "./routes";

const createHistory = process.env.SERVER
  ? createMemoryHistory
  : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
})

// FIXME this is a workaround: when using createWebHashHistory the "to" route needs to be rewritten
Router.beforeEach((to, from) => {
  if (to.path.includes("&state")) { // We "probably" come from Keycloak...
    return {
      "path": to.path.substring(0, to.path.indexOf("&state")) // We remove the query params
    }
  }
})

export default Router
