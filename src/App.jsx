import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { useState } from 'react'

function App() {

  let [count,setCount] = useState(0);
  return (
    <Router>
    <>
      <h1>React router example</h1>
      <h2>{count}</h2>
      <button onClick={() => {setCount(count+1)}}>+</button>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>


    </Router>
  )
}

export default App
