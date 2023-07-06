import { createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';
import WeatherWidget from '../pages/WeatherWidget.vue';
import LocationWidget from '../pages/LocationWidget.vue';
import StopwatchWidget from '../pages/StopwatchWidget.vue';
import TicTacToeWidget from '../pages/TicTacToeWidget.vue';
import PhotoWidget from '../pages/PhotoWidget.vue';

const routes = [
  { path: '/', component: home },
  { path: '/weather', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: TicTacToeWidget },
  { path: '/photo', component: PhotoWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
