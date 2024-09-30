import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation"
export function AddTodo ({addTodo}) {
    const navigate = useNavigate();

    return(
        <>
            <Navigation/>
            <input type="text" id="todo-title" placeholder="Title" />
            <input type="text" id="todo-desc" placeholder="Description" />
            <button onClick={() => {
                addTodo();
                navigate("/");
            }}>Add todo</button>
        </>
    )
}