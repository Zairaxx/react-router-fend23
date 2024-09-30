import { Link } from "react-router-dom"

export function Header ({title, text}) {
    return(
        <header>
           <h2>{title}</h2>
           <p>{text}</p>
        </header>
    )
}