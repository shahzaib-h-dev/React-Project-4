import MemeHeader from "../assests/header.png"

export function Header(){
    return(
        <header className="header">
            <img src={MemeHeader} className="header-image" alt="Meme Logo" />
            <h1 className="header-title">Meme Generator</h1>
        </header>
    )
}