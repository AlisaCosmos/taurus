import './TypesPets.scss';

export default function TypesPets({value, onClickTypesId}) {

    const typesPets = [
        {name: "Для кошек", typesProperty: 0},
        {name: "Для собак", typesProperty: 1},
    ];

    return (
        <div className="typesPets">
            <div className="typesPets__header">
                <h1 className="typesPets__title">Вид животного</h1>
            </div>
            <div className="typesPets__list__inner">
                <ul className="typesPets__list">
                    {typesPets.map((obj,index) => (
                        <li key={index}
                            onClick={()=> (onClickTypesId(obj))}
                            className={value.typesProperty === obj.typesProperty ?
                                "typesPets__list__item list__item_active" : "typesPets__list__item"}>
                                {obj.name}
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
}