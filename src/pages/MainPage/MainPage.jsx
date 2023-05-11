import { useEffect, useState } from 'react';


import TypesPets from '../../components/TypesPets/TypesPets';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import CardsList from '../../components/CardsList/CardsList';
import Pagination from '../../components/Pagination/Pagination';

import './MainPage.scss';

export default function MainPage({searchValue}) {
    //Глобальные переменные для карточек товаров
    const [typesId, setSelectedTypesId] = useState({
        name: "Для кошек", 
        typesProperty: 0
    });
    
    const [selectedCategoryUseId, setSelectedCategoryUseId] = useState(0);
    const [sortActivId, setSortActivId] = useState({
        name: "Популярные", 
        sortProperty: "rating"
    });
    const [cardItems, setCardItems] = useState([]);

    //Глобальные переменные загрузки
    const [isLoading, setIsLoading] = useState(true);
    //Глобальные перемнные для пагинации
    const [currentPage, setCurrentPage] = useState (1);
    

    useEffect (() => {
        /* const category = selectedCategorySexId.categoriesSexProperty.replace("-", ""); */
        const sortBy = sortActivId.sortProperty.replace("-", "");
        const order = sortActivId.sortProperty.includes("-") ? "asc" : "desc";
        const search = searchValue ? `&search=${searchValue}` : "";

        setIsLoading(true);  

    fetch(`https://643692423e4d2b4a12d5de95.mockapi.io/items?page=${currentPage}&limit=8&category=${selectedCategoryUseId}&types=${typesId.typesProperty}&sortBy=${sortBy}&order=${order}${search}`)
    .then((response) => {
        return response.json()
        })
    .then((response) => {
        setCardItems(response);
        setIsLoading(false);   
    });
    window.scrollTo(0, 0);
    }, [selectedCategoryUseId, sortActivId, typesId, searchValue, currentPage]);

    return (
        <div className="mainPage container__row">
            <TypesPets 
                value={typesId} 
                onClickTypesId ={(id) => (setSelectedTypesId(id))} />
            <Categories 
                selectedCategoryUseId = {selectedCategoryUseId}
                setSelectedCategoryUseId = {id =>setSelectedCategoryUseId(id)} />
            <Sort 
                value={sortActivId} 
                onChangeSort={setSortActivId} />
            <CardsList 
                cardItems={cardItems} 
                isLoading={isLoading} 
                searchValue={searchValue} />
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
    );
}