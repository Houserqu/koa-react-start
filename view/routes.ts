import App from './app';
import Index from './pages/Index';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index,
      },
    ],
  },
];
