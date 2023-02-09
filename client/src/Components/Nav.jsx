//components
import Logo from './images/Logo.png'
import './css/Nav.css'
//librerias
import { useNavigate } from 'react-router-dom'



const Nav = () => {

  const Navegite = useNavigate();

  return (
    <div className='Nav'> 
      <img onClick={() => { Navegite('/') }} className='Logo' src={Logo} alt="logo" />
      <div className='Nav_Buttons'> 
        <button className='Buttons_Nav' onClick={()=>{Navegite('/singin')}}>Sing In</button>
        <button className='Buttons_Nav' onClick={()=>{Navegite('/singup')}}>Sing Up</button>
      </div>
    </div>
  );
};

export default Nav;
