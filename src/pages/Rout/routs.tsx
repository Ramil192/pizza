import Loadable from 'react-loadable';
import Spinner from '../../components/Spinner';
import Main from '../../modulus/Main';

const Cart = Loadable({
  loader: () => import('../../modulus/Cart'),
  loading: () => <Spinner />,
});

const NotFound = Loadable({
  loader: () => import('../../components/NotFound'),
  loading: () => <Spinner />,
});

export const publicRouts = [
  { path: '/', element: <Main /> },
  {
    path: 'cart',
    element: <Cart />,
  },
  { path: '*', element: <NotFound /> },
];
