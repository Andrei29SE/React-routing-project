import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import NotFound from './Components/NotFound'
import MainLayout from './layouts/MainLayout'
import Prices from './Components/Prices'
import Courses from './Components/Courses'
import SingleCourse from './Components/SingleCourse'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='prices' element={<Prices />} />
            <Route path='courses' element={<Courses />} />
            <Route path='courses/:slug' element={<SingleCourse />} />
            {/* Default route path=* */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
