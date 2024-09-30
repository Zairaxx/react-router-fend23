import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"

export function Home () {
    return(
        <>
        <Navigation/>
        <Header title="Startsida" text="Välkommen till startsidan!"/>
        </>
    )
}