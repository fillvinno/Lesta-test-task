import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './Search.module.scss'

type Props = {
  titleFilter: string
  setTitleFilter: Dispatch<SetStateAction<string>>
}

const Search: FC<Props> = ({titleFilter, setTitleFilter}) => {
  return (
    <input
      className={styles.wrap}
      value={titleFilter}
      onChange={e => setTitleFilter(e.target.value)}
      placeholder='Поиск'
    />
  );
};

export default Search;