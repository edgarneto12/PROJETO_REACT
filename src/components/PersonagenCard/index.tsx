import { Character } from "../../types";
import "./index.css"

export interface Props {
    character: Character
}

export default function CharacterCard(props: Props) {
    const character = props.character
    return(
        <li>
            <div className="character-image-container">
                <img className="character-image" src={`${character.image}`} alt={`Image for Rick and Morty character:${character.name}`} />
            </div>
            <div className="character-infos">
                <p className='character-name'>
                    {character.name}  
                </p>
                <p className="character-status">
                    {character.status}
                </p>
                <p className="character-specie">           
                    {character.species}
                </p>
                <p className="character-location-name"> 
                    Local: {character.location.name}
                </p>
            </div>        
        </li>
    )
}