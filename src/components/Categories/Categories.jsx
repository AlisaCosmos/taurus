import { useState } from 'react';
import DotsMobileStepper from '../DotsMobileStepper/DotsMobileStepper';

import './Categories.scss';

export default function Categories({
  selectedCategoryUseId, 
  setSelectedCategoryUseId}) {
  
  const categoriesUse = [
    "Все",
    "Опортно-двигательный аппарат",
    "Желудочно-кишечный тракт",
    "Иммунитет",
    "Регуляция веса",
    "Мочеполовая система",
    "Беременность и лактация",
    "От тошноты и укачивания", 
    "От поедания фикалий",
    "Успокоительные",
    "Уход за глазами",
    "Уход за ушами",
    "Уход за зубами",
    "Уход за шерстью", 
    "Кондиция",
    "Аллергия",
    "Восстановление",
    "Антигрызин",
    "Выращивание"
  ];

    return (
        <div className="categories">
          <div className="categories__header">
            {/* <h1 className="categories__title">Назначение</h1> */}
          </div>
            <div> 
              <ul className="categories__list categories__listType">
                {categoriesUse.map((item, index) => (
                  <li 
                    key={index}
                    onClick={() => {setSelectedCategoryUseId(index)}} 
                    className={selectedCategoryUseId === index ?
                      "categories__item categories__item_active": "categories__item"}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>   
        </div>
    );
}