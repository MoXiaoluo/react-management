import { lazy } from 'react';

// import About from '@/views/About';
import Home from '@/views/Home';
import { Navigate, RouteObject } from 'react-router-dom';
import Page1 from '@/views/Page1';
import Page2 from '@/views/Page2';

// eslint-disable-next-line react-refresh/only-export-components
// const About = lazy(() => import('@/views/About'));

const route: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/page1'} />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
    ],
  },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
];

export default route;
