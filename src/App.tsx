import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connection from './connection/Connection'
import Home from './home/Home'
import Inscription from './inscription/Inscription'
import { GlobalStyled } from './shared/ui'
import TodoList from './todoList/TodoList'

export default function App() {
  return (
    <>
      <GlobalStyled />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liste/:id" element={<TodoList />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connection" element={<Connection />} />

          <Route path="/Hello" element={<h1> Hello </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

//
