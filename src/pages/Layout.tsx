import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../modulus/Header';

const Layout: FC = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
export default Layout;
