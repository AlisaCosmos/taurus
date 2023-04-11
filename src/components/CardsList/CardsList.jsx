import CardItem from '../CardItem/CardItem';
import './CardsList.scss';
import cardItemJson from "../../assets/card.json";

export default function CardsList() {
    return (
        <ul className="сardsList">
                {cardItemJson.map((item, index) => (
                    <CardItem key={index} {...item} />
                ))}
        </ul>

    );
}