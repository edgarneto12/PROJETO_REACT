import { useState } from "react";
import axios from "axios";
import "./Style.css";
import CharacterCard from "../../components/PersonagenCard/PersonagemCard";
import { Character } from "../../types";

export default function RandomCharacter() {
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchRandomCharacter = async () => {
        setLoading(true);
        try {
            const randomId = Math.floor(Math.random() * 826) + 1;
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/${randomId}`
            );
            setCharacter(response.data);
        } catch (error) {
            console.error("Erro ao carregar personagem:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="random-character-container">
            <h1>Clique para mostrar um personagem</h1>
            <button onClick={fetchRandomCharacter} className="random-button">
                Mostrar Personagem Aleatório
            </button>

            {loading && <p>Carregando personagem...</p>}

            {character && (
                <div className="random-character">
                    <CharacterCard key={character.id} character={character} />
                </div>
            )}
        </div>
    );
}
