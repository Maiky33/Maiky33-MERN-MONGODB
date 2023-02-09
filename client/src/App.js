//Componentes
import Nav from './Components/Nav'
import Home from './Pages/Home'
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'
import './css/App.css'
//Librerias
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'> 
      <Nav/>
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/singin' element={<SingIn />} />
        <Route path='/singup' element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
