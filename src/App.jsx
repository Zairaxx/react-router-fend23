import { BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
 } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { useState } from 'react'
import { TodoDetails } from './pages/TodoDetails'
import { AddTodo } from './pages/AddTodo'

function App() {

  let [todos,setTodos] = useState([{
    title:"Todo #1",
    desc:"Beskrivning - Städa etc etc.",
    id:1,
    completed:true
},{
    title:"Todo #2",
    desc:"Plugga React Router",
    id:2,
    completed:false
}, {
    title:"Todo #3",
    desc:"Skicka iväg tre LIA-ansökningar.",
    id:3,
    completed:false
}])

  let addTodo = () => {
   let title = document.querySelector("#todo-title").value;
   let desc = document.querySelector("#todo-desc").value;

   let newTodo = {
    title,
    desc,
    id:10,
    completed:false
   }
   let updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }
  return (
    <Router>
    <>
      <h1>React router example</h1>
      {/* <h2>{count}</h2>
      <button onClick={() => {setCount(count+1)}}>+</button> */}
    <Routes>
      <Route path="/" element={<Home todos={todos}/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/todo" element={<TodoDetails/>}></Route>
      <Route path="/addTodo" element={<AddTodo addTodo={addTodo}/>}> </Route>
    </Routes>
    </>


    </Router>
  )
}

export default App
