
import './All.css';
import React, {useState} from "react";

function Card(props: { name: string, image: string, status: string }) {

    const [count, setCount] = useState(0);

    function clickDelete() {

        //<button onClick= {() => onDelete(title)}> Delete Character </button>

    }

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