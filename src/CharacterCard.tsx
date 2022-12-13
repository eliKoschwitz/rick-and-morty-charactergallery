import {MinifiedChar} from "./App";

import './All.css';

function Card(props: { name: string, image: string, status: string }) {

    return (
        <div className="card">
            <p className="name">
                {props.name}
            </p>

            <img className="image" src={props.image}/>

            <p className="status">
                {props.status}
            </p>
        </div>
    )
}

export default Card;