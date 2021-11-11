import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Keycloak from "keycloak-js";

async function createRefreshTokenTimer(keycloak) {
  setInterval(() => {
    keycloak.updateToken(60).then((refreshed) => {
      if (refreshed) {
        console.log("Token refreshed" + refreshed)
      } else {
        // Do Something
      }
    }).catch(() => {
      console.log("Failed to refresh token")
    })
  }, 6000)
}

const keycloak = Keycloak({
  url: "http://localhost:8080/auth/",
  realm: "myrealm",
  clientId: "myclient"
})

keycloak
  .init({
    onLoad: "login-required",
    checkLoginIframe: false,
    enableLogging: true
  })
  .then(async (authenticated) => {
    if (authenticated) {
      console.log("Authenticated")
      await createRefreshTokenTimer(keycloak);

      const app = createApp(App)
      app.config.globalProperties.$keycloak = keycloak
      await app.use(Router).mount('#app')

    } else {
      console.log("Not authenticated")
      // window.location.reload()
    }
  }).catch((error) => {
  console.log("Authentication failure", error)
  // window.location.reload()
})
