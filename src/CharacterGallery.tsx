import React, {useState} from "react";
import CharacterCard from "./CharacterCard";

/*
<button onClick={() => setToggleOn(!toggleOn)}> search </button>
            {toggleOn ?
                {props.listOfChars.filter(char => char.name === name1).map(char => { return <CharacterCard {...char}/>})};
                :
                {props.listOfChars.map(char => { return <CharacterCard {...char}/>})};
            }
 */

export type MinifiedChar={
    name : string,
    image : string,
    status: string
}

function Gallery(props: {listOfChars : MinifiedChar[]}){
//.filter(char =>char.name === name1).
    const[name1, setName] = useState("");
//Rick Sanchez
    const[toggleOn, setToggleOn] = useState(true)
    const filterList = props.listOfChars.filter(char=> char.name.includes(name1));

    return(

        <div>

            <h1>{name1}</h1>
            <input className="inputField" onChange={input => setName(input.target.value)}/>
            {filterList.map(char => { return <CharacterCard {...char}/>})};

        </div>
    )
}

export default Gallery;