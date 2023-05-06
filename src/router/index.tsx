import { Suspense, lazy } from 'react';

// import About from '@/views/About';
import Home from '@/views/Home';
import { Navigate, RouteObject } from 'react-router-dom';
import Page1 from '@/views/Page1';
import Login from '@/views/Login';

// eslint-disable-next-line react-refresh/only-export-components
const Page2 = lazy(() => import('@/views/Page2'));
const Page3 = lazy(() => import('@/views/Page3'));

const withSuspense = (children: JSX.Element) => {
  return <Suspense fallback={<div>loading</div>}>{children}</Suspense>;
};

const route: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/page1'} />,
  },
  {
    path: '/login',
    element: <Login />,
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
        element: withSuspense(<Page2 />),
      },
      {
        path: 'page301',
        element: withSuspense(<Page3 />),
      },
    ],
  },
];

export default route;
