import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from "@/components/Foo";
import Bar from "@/components/Bar";

Vue.use(VueRouter);

const routes = [
    {
        path: '/foo',
        name: 'Foo',
        component: Foo,
    },
    {
        path: '/bar/:page?/:name?',
        name: 'Bar',
        component: Bar,
    },
 ];

const router = new VueRouter({mode: 'history', routes});

export default router
