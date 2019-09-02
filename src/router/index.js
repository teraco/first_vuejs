import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Hoge from '@/components/Hoge';
import Home from '@/components/Home';
import VueChartJS from '@/components/VueChartJS';

// import VueChartKick from '@/components/VueChartKick'
// import VueCharts from '@/components/VueCharts'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/hoge',
      name: 'Hoge',
      component: Hoge,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/chartjs',
      name: 'VueChartjs',
      component: VueChartJS,
    },
  ],
});
