import { useState } from 'react';
import './Categories.scss';

export default function Categories() {
  const categories = [
    "Для кошек",
    "Для собак",
    "Новинки",
    "Опортно-двигательный аппарат",
    "Желудочно-кишечный тракт",
    "Иммунитет",
    "Регуляция веса",
    "Мочеполовая система",
    "Беременность и лактация",
    "Щенки/котята",
    "Пожилые животные",
    "От тошноты и укачивания", 
    "От поедания фикалий",
    "Успокоительные",
    "Уход за глазами",
    "Уход за ушами",
    "Уход за зубами",
    "Уход за шерстью"
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className="categories">
              <ul className="categories__list">
                {categories.map((item, index) => (
                  <li onClick={() => {setSelectedCategory(index)}} className={ selectedCategory === index ? "categories__item categories__item_active": "categories__item"} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
        </div>
    );
}