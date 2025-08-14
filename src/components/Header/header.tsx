import "./Style.css"
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header>
            <div className="header_title">
                <Link to="/"><h1>Rick And Morty</h1></Link>
            </div>
            <div className="Nav">
                <ul>
                    <li><Link to="/Personagens" >Personagens</Link></li>
                    <p>|</p>
                    <li><Link to="/Personagem-aleatorio" >Randomizar um Personagem</Link></li>
                </ul>
            </div>
        </header>)
}