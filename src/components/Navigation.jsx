import { Link } from "react-router-dom"

export function Navigation () {
    return(
        <nav>
           <Link to="/">Hem</Link>
           <Link to="/contact">Kontakta oss</Link>
           <Link to="/addTodo">Lägg till todo</Link>
        </nav>
    )
}