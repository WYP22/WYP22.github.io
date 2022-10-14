/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\Lenovo\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-f476ac76",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f476ac76").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-4737ed58",
    path: "/about2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4737ed58").then(next)
    },
  },
  {
    name: "v-c9e5936c",
    path: "/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c9e5936c").then(next)
    },
  },
  {
    path: "/css/index.html",
    redirect: "/css/"
  },
  {
    name: "v-5618baae",
    path: "/css/c-bbb.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5618baae").then(next)
    },
  },
  {
    name: "v-b7cccb54",
    path: "/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b7cccb54").then(next)
    },
  },
  {
    name: "v-74923449",
    path: "/css/c-aaa.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-74923449").then(next)
    },
  },
  {
    name: "v-35551109",
    path: "/css/c-ccc.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-35551109").then(next)
    },
  },
  {
    name: "v-63f136da",
    path: "/about1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-63f136da").then(next)
    },
  },
  {
    name: "v-587fc455",
    path: "/javascript/j-bbb.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-587fc455").then(next)
    },
  },
  {
    name: "v-e3efcf52",
    path: "/javascript/j-aaa.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e3efcf52").then(next)
    },
  },
  {
    name: "v-22f77053",
    path: "/javascript/j-ccc.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-22f77053").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]