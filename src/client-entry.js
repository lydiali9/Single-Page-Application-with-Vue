import { app } from "./app";

app.$mount("#app");

// This basically will tell the hot module to stop the hot reloading propagation and flag that everything is loaded correctly.
if(module.hot) {
    module.hot.accept();
}
