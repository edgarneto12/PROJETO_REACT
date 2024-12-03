import axios from "axios";
import { useState } from "react";
import './Style.css'

export default PersonagensAleatorios => {
    const [personagem, setPersonagem] = useState<any>(null)

    const GenerateRandomPersonagem = () => {
        axios
            .get("https://rickandmortyapi.com/api/character?limit=826")
            .then((response) => {const personagens = response.data.data
                const randompersonagem = personagens[Math.floor(Math.random() * personagens.length)]
                setPersonagem(randompersonagem)})
    }

    return(
        <div className="content">
            <h1>Personagem Aleatório de Rick and Morty</h1>
            <button className="button" onClick={GenerateRandomPersonagem}>Aleatorizar</button>

            {personagem && (
                <div className="card">
                    
                    {personagem.image}

                <h2>{personagem.name}</h2>
                </div>
            )
            }
        </div>
    )
} 

