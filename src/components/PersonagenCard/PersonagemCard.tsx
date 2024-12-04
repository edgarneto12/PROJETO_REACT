import { Character } from "../../types";
import './Style.css'

export interface Props {
    character: Character
}

export default function CharacterCard(props: Props) {
    const character = props.character
    return(
        <li className="character-li">
            <div className="character-image-container">
                <img className="character-image" src={`${character.image}`} alt={`Image for Rick and Morty character:${character.name}`} />
            </div>
            <div className="character-infos">
                <p className='character-name'>
                    Nome: {character.name} 
                </p>
                <p className="character-status">
                    Status: {character.status}
                </p>
                <p className="character-specie">           
                    Especie: {character.species}
                </p>
                <p className="character-location-name"> 
                    Local: {character.location.name}
                </p>
            </div>        
        </li>
    )
}