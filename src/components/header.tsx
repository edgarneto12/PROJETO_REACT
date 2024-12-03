import "./styles.css"
export const Header = () => {
    return(
        <header>
            <div className="header_title">
                <a href="/"><h1 >Rick and Morty</h1></a>
            </div>
            <div className="Nav">
                <ul>
                    <li><a href="/" >Personagens</a></li>
                    <li><a href="/" >Locais</a></li>
                    <li><a href="/" >Episodios</a></li>
                </ul>
            </div>
        </header>)
}