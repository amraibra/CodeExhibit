import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import InfoPage from '../views/InfoPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import ProjectForm from '@/views/ProjectForm.vue';
import AdminLoginPage from '@/views/AdminLoginPage.vue';
import AdminProjectPage from '@/views/AdminProjectPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoPage 
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectPage
  },
  {
    path: '/form',
    name: 'Form',
    component: ProjectForm
  },

  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: AdminLoginPage
  },

  {
    path: '/adminprojects',
    name: 'AdminProjectPage',
    component: AdminProjectPage,
    meta: { requiresAdmin: true } 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
  const requiresAuth = to.meta.requiresAdmin;

  if (requiresAuth && !isLoggedIn) {
    next('/adminlogin');
  } else {
    next();
  }
});

export default router
