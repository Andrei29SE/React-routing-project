import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<h1>Router</h1>}></Route>
          <Route path='about' element={<h1>About</h1>}></Route>
          <Route path='contacts' element={<h1>Contacts</h1>}></Route>
          {/* Default route path=* */}
          <Route path='*' element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
