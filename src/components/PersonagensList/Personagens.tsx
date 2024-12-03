import { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import CharacterCard from "../PersonagenCard";
import { Character } from "../../types";




export default function PersonagemList() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = () => {
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
            setCharacters(response.data.results)
            console.log(response.data.results)
            console.log(response.data.info.next)
        })
    }
    return (
        <ul className='character-card'>
            {characters.map((character) =>
                <CharacterCard
                    key={character.id}
                    character={character}
                />
            )}
        </ul>
    )
}