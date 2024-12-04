import { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import CharacterCard from "../PersonagenCard/PersonagemCard";
import { Character } from "../../types";

export default function PersonagemList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllCharacters();
    }, []);

    const getAllCharacters = async () => {
        try {
            let allCharacters: Character[] = [];
            let nextPage = "https://rickandmortyapi.com/api/character";

            while (nextPage) {
                const response = await axios.get(nextPage);
                allCharacters = [...allCharacters, ...response.data.results];
                nextPage = response.data.info.next; 
            }

            setCharacters(allCharacters);
        } catch (error) {
            console.error("Erro ao carregar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="character-container">
            {loading ? (
                <p>Carregando personagens...</p>
            ) : (
                <ul className="character-list">
                    {characters.map((character) => (
                        <CharacterCard 
                        key={character.id} 
                        character={character} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
