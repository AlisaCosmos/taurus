import { Link } from 'react-router-dom';
import { useContext, useRef, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './Search.scss';

export default function Search() {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();
  console.log(inputRef);
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      console.log(str);
      setSearchValue(str);
    }, 250),
    [],
  );
  const onCangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <SearchOutlinedIcon className="search__icon" />
      <input
        ref={inputRef}
        className="search__input"
        placeholder="Все добавки ..."
        value={value}
        onChange={onCangeInput}
      />

      {value && <CloseOutlinedIcon onClick={onClickClear} className="search__icon__close" />}
    </div>
  );
}
