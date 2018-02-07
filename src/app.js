import Vue from "vue";

// Through the template property so it can know how to render the section that it`s mounted on. Once I refresh my page and change the hello parameter. and reder it.
const app = new Vue({
    data: {
        hello: "hi Lynn Li2139"
    },
    template: '<div id="app">{{ hello }}</div>'
});

export { app };
