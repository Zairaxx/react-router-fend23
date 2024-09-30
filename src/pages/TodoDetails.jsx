import { useLocation } from "react-router-dom"
import { Navigation } from "../components/Navigation";

export function TodoDetails () {

    const location = useLocation();
    console.log(location);
    return (
    <>
        <Navigation/>
        <h2>Todo id: {location.state.id}</h2>
        <h3>Title: {location.state.title}</h3>
        <h3>Description: {location.state.desc}</h3>

    </>)
}