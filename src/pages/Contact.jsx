import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"

export function Contact () {
    return(
        <>
            <Navigation/>
            <Header title="Kontakta oss" text="Vänligen kontakta oss"/>
            <label htmlFor="email">Maila oss</label>
            <input type="email" name="" id="email" />
        </>
    )
}