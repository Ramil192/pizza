import { FC } from 'react';
import { BuyLink, Logo, Search } from '../../components';
import style from './Header.module.scss';

const Header: FC = () => (
  <div className={style.wrapper}>
    <Logo />
    <Search />
    <BuyLink />
  </div>
);

export default Header;
