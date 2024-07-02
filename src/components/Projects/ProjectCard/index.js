import { Link } from 'react-router-dom';
import './card.scss';

function Card(props) {
    return (
        <Link to={'/about'} style={{textDecoration: 'none'}}>
            <div className="card">
                <img src={props.image} alt={props.title} />
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;