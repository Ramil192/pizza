import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import svgLogo from '../../assets/pizza.svg';
import style from './Logo.module.scss';

interface IProps {
  title?: string;
  text?: string;
}

const Logo: FC<IProps> = React.memo(
  ({ text = 'самая вкусная пицца во вселенной', title = 'REACT PIZZA' }) => {
    return (
      <Link to="/">
        <div className={style.wrapper}>
          <img src={svgLogo} alt="logo" />
          <div className={style.texts}>
            <p className={style.title}>{title}</p>
            <p className={style.text}>{text}</p>
          </div>
        </div>
      </Link>
    );
  }
);

export default Logo;
