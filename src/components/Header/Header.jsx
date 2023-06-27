import { Link } from 'react-router-dom';
import Search from '../Search/Search';

/* import MadeinJapan from "../../assets/imgs/free-icon-made-in-japan-10278564_64px.png" */
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './Header.scss';

export default function Header() {
  return (
    <div className="header container">
      <div className="header__inner container__row">
        <div className="header__logo">
          <Link to="/" className="header__logo__wrapper">
            {/* <img src={MadeinJapan} alt="logo" className="header__logo__img"/> */}
            <div className="header__logo__text">Taurus Store</div>
          </Link>
        </div>
        <nav className="header__nav">
          <div className="header__menu">
            <Link to="/about-project" className="header__menu__link">
              О бренде{' '}
            </Link>
            <Link to="/delivery" className="header__menu__link">
              Оплата и доставка
            </Link>
            <Link to="/contacts" className="header__menu__link">
              Контакты
            </Link>
          </div>
        </nav>
        <Search />
        <div className="header__user">
          <Link to="/profile" className="header__user__link">
            <PersonOutlineOutlinedIcon fontSize="large" />
          </Link>
          <Link to="/cart" className="header__link">
            <ShoppingCartOutlinedIcon fontSize="large" />
            <span className="header__link__count">0</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
