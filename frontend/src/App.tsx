import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Simulation from './pages/Simulation'
import Game from './pages/Game'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/simulation' element={<Simulation/>}></Route>
        <Route path='/game'element={<Game/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
