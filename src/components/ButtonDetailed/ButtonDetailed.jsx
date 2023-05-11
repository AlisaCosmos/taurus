import { Link } from 'react-router-dom';
import './ButtonDetailed.scss';

export default function ButtonDetailed(props) {
    return (
            <Link to="/card" className="buttonDetailedWrapper">
                <button className="">
                    {props.children}
                </button>
            </Link>
    );
}