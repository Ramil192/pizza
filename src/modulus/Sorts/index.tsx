import { FC } from 'react';
import { SortCategory, SortTo } from '../../components';
import style from './Sorts.module.scss';

const Sorts: FC = () => {
  return (
    <div className={style.wrapper}>
      <SortCategory />
      <SortTo />
    </div>
  );
};

export default Sorts;
