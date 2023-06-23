import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import { publicRouts } from './routs';

const MainRout: FC = () => {
  const routes = publicRouts;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Route>
    </Routes>
  );
};

export default MainRout;
