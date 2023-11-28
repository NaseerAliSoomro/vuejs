import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import HeaderComponent from './components/Header.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name : "HomePage",
        component : HomePage,
        path : '/',
    },
    {
        name : "SignUp",
        component : SignUp,
        path : '/sign-up',
    },
    {
        name : "SignIn",
        component : SignIn,
        path : '/sign-in',
    },
    {
        name : "HeaderComponent",
        component : HeaderComponent,
        path : '/header',
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router