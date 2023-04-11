import Categories from '../../components/Categories/Categories';
import CardsList from '../../components/CardsList/CardsList';

import './MainPage.scss';

export default function MainPage() {
    return (
        <div className="mainPage container__row">
            <Categories />
            <CardsList />
        </div>
    );
}