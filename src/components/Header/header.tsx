import "./styles.css"
export const Header = () => {
    return(
        <header>
            <div className="header_title">
                <a href="/"><h1>Rick And Morty</h1></a>
            </div>
            <div className="Nav">
                <ul>
                    <li><a href="/Personagens" >Personagens</a></li>
                    <p>|</p>
                    <li><a href="/Personagem-aleatorio" >Randomizar um Personagem</a></li>
                </ul>
            </div>
        </header>)
}