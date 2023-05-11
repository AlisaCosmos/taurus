import { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonDetailed from '../ButtonDetailed/ButtonDetailed';
import ButtonBuy from "../ButtonBuy/ButtonBuy";

import './CardItem.scss';

export default function CardItem({title, subtitle,imageUrl, price, rating}) {

    return (
        <li className="cardItem container">
            <div className="cardItem__image_wrapper">
            <img
                className="cardItem__image"
                src={imageUrl}
                alt="сard"
                width={100}
            />
            </div>
            <h4 className="cardItem__title">{title} </h4>
            <div className="cardItem__subtitle">{subtitle} </div>
            <div className="cardItem__availability"> В наличии </div>
            <div className="cardItem__price"> {price} Р</div>
            <div className="cardItem__rating">
                {rating}
            </div>
            <div className="cardItem__btn">
                <div className="cardItem__btnDetailed">
                    <ButtonDetailed> Подробнее </ButtonDetailed>
                </div>
                <div className="cardItem__btnBuy">
                    <ButtonBuy/>
                </div>
            </div>
            
        </li>
    );
}