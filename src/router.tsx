import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Error404 } from './components/pages/Error404';
import App from './App';
import { Modal } from './components/Modal';

export const PATH = {
  PAGE_ONE: 'pageOne',
  PAGE_TWO: 'pageTwo',
  PAGE_THREE: 'pageThree',
  ERROR_404: 'error404',
  NOT_FOUND: 'not-found',
};

export const navlinksItems = [
  {
    name: 'Adidas',
    url: PATH.PAGE_ONE,
  },
  {
    name: 'Puma',
    url: PATH.PAGE_TWO,
  },
  {
    name: 'Abidas',
    url: PATH.PAGE_THREE,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="pageOne" replace />,
      },
      {
        path: PATH.PAGE_ONE,
        element: <PageOne />,
      },
      {
        path: `${PATH.PAGE_ONE}/:id`,
        element: <Modal />,
      },
      {
        path: PATH.PAGE_TWO,
        element: <PageTwo />,
      },
      {
        path: PATH.PAGE_THREE,
        element: <PageThree />,
      },
      {
        path: PATH.ERROR_404,
        element: <Error404 />,
      },
      {
        path: '*',
        element: <Navigate to={'not-found'} />,
      },
      {
        path: PATH.NOT_FOUND,
        element: <div>not-found</div>,
      },
    ],
  },
]);
