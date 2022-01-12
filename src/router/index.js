import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import routes from "./routes";

// FIXME using createWebHashHistory leads to 404 after login redirection
// const createHistory = createWebHistory // Works as expected
const createHistory = createWebHashHistory

// const createHistory = process.env.SERVER
//   ? createMemoryHistory
//   : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
})

// Console logging of to and from
Router.beforeEach((to, from) => {
  console.log("Router to:", to)
  console.log("Router from:", from)
  if (from === START_LOCATION) {
    // initial navigation
  }
})

export default Router
