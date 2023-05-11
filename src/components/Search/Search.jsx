import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './Search.scss';

export default function Search({searchValue, setSearchValue}) {
    /* console.log(`${searchValue}  + "searchValueSearch"`); */
    return (
        <div className="search">
            <SearchOutlinedIcon className="search__icon" /> 
            
            <input 
                className="search__input"  
                placeholder='Все добавки ...'
                value={searchValue}
                onChange={(event) => {setSearchValue(event.target.value)}}/>
                {searchValue && 
                    (<CloseOutlinedIcon 
                        onClick={() => {setSearchValue("")}} 
                        className="search__icon__close" />)}     
        </div>
    );
}