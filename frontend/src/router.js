import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("./pages/Landing.vue"),
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./pages/Profile.vue"),
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/MyGeolocation",
      name: "MyGeolocation",
      component: () => import("./pages/MyGeolocation.vue"),
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },

    {
      path: "/BecomeAhost",
      name: "BecomeAhost",
      component: () => import("./pages/BecomeAhost.vue"),
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },

    {
      path: "/resetform",
      name: "resetform",
      component: () => import("./pages/ResetPasswordForm.vue"),
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },

    {
      path: "/payment",
      name: "payment",
      component: () => import("./pages/OnlinePayment.vue"),
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
