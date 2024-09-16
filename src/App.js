import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<h1>Router</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
