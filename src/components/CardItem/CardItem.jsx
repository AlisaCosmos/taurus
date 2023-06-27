import { useState } from 'react';
import { Link } from 'react-router-dom';

import HalfRating from '../HalfRating/HalfRating';

import ButtonBuy from '../ButtonBuy/ButtonBuy';

import './CardItem.scss';

export default function CardItem({ title, subtitle, imageUrl, price, rating }) {
  return (
    <li className="cardItem container">
      <div className="cardItem__image_wrapper">
        <img className="cardItem__image" src={imageUrl} alt="сard" width={100} />
      </div>
      <div className="cardItem__content_wrapper">
        <h4 className="cardItem__title">{title} </h4>
        <div className="cardItem__subtitle">{subtitle}</div>
        {/* <Link to="/card" className="cardItem__link">
                Подробнее
                </Link>  */}
        <div className="cardItem__rating_inner">
          <HalfRating rating={rating}></HalfRating>
          <div className="cardItem__rating">{rating}</div>
        </div>

        {/* <div className="cardItem__availability"> В наличии </div> */}
        <div className="cardItem__price"> {price} &#x20bd;</div>
        <div className="cardItem__cart_inner">
          <div class="selector-wrapper form-group quantity-adjuster-wrapper product-card__quantity-adjuster">
            <div class="quantity-adjuster" data-quantity-adjuster="">
              <button
                type="button"
                class="quantity-adjuster__decrement"
                data-decrement=""
                disabled="">
                -
              </button>
              <input
                type="number"
                name="quantity"
                value="1"
                min="1"
                max="10"
                data-product-quantity-select=""
              />
              <button type="button" class="quantity-adjuster__increment" data-increment="">
                +
              </button>
            </div>
          </div>
          <div className="cardItem__btn">
            <div className="cardItem__btnBuy">
              <ButtonBuy />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
