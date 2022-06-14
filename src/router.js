import { createRouter } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', components: CoachesList },
    {
      path: '/coaches/:id',
      components: CoachDetail,
      children: [{ path: 'contact', components: ContactCoach }], // /coaches/c1/contact
    },
    { path: '/register', components: CoachRegistration },
    { path: '/requests', components: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
