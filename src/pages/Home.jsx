import { useState } from "react"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { Link } from "react-router-dom"

export function Home ({todos}) {

    return(
        <>
        <Navigation/>
        <Header title="Startsida" text="Välkommen till startsidan!"/>
        {
            todos.map(todo => { 
                return <li>
                    <Link to="/todo" state={todo} >{todo.title}</Link>
                </li>
                })
        }
        </>
    )
}