import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyled } from './shared/ui'
import TodoList from './todoList/TodoList'

export default function App() {
  return (
    <>
      <GlobalStyled />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />

          <Route path="/test1" element={<h1> Test1 </h1>} />
          <Route path="/Hello" element={<h1> Hello </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

//
