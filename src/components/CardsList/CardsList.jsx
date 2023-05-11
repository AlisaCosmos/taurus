import CardItem from '../CardItem/CardItem';
import CardsItemSkeleton from '../CardItem/CardsItemSkeleton';

import './CardsList.scss';

/* import cardItemJson from "../../assets/card.json"; */


export default function CardsList({cardItems, isLoading, searchValue}) {
    
    /* console.log(searchValue + "searchValue");
    const search1 = searchValue.toLowerCase();
    console.log (search1 + "search1"); */

   /*  filter((item) => {
        if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    }) */
    
    const bats = cardItems.map((item, index) => <CardItem key={index} {...item}/>);

    const skeletons = [...new Array(6)].map((item, index) => <CardsItemSkeleton key={index}/>) ;
    
    return (
        <div className="cardsList__title">
            <h1> Все товары </h1>
        
        <ul className="сardsList">
            {/* {console.log("CardList" + isLoading)} */}
            {
                isLoading ? skeletons : bats 
            }       

        </ul>
        </div>

    );
}