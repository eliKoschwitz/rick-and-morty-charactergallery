import {MinifiedChar} from "./App";
import React from "react";
import Card from "./CharacterCard";
import CharacterCard from "./CharacterCard";

function Gallery(props: {listOfChars : MinifiedChar[]}){

    //const charMap = props.listOfChars.map(character => {return character})

    return(
        <div>
            {props.listOfChars.map(char => { return <CharacterCard {...char}/>})};
        </div>
    )
}


export default Gallery;