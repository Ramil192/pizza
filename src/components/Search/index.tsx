import { FC } from 'react';
import CustomInput from '../../UI/CustomInputs/CustomInput';
import CrossSvg from '../../assets/CrossSvg';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { changeSortName, selectSortName } from '../../store/reducers/SortSlice';
import style from './Search.module.scss';
import SearchSvg from './SearchSvg';

const Search: FC = () => {
  const sortName = useAppSelector(selectSortName);

  const dispatch = useAppDispatch();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSortName(e.target.value));
  };

  return (
    <div className={style.wrapper}>
      <SearchSvg />
      <CustomInput
        placeholder="Поиск пиццы..."
        value={sortName}
        onChange={changeName}
      />
      {sortName && (
        <button
          className={style.btnCross}
          onClick={() => {
            dispatch(changeSortName(''));
          }}
        >
          <CrossSvg />
        </button>
      )}
    </div>
  );
};

export default Search;
