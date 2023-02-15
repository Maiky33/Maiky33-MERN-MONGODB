import './css/Singup.css'
import { createAccount } from '../api/SignUp.api'
import {useState} from 'react'


const SingUp = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const Account = { 
    email,
    password
  }

  return(
    <div className="singup"> 
      <form className='SingUpForm'> 
        <h2 className='TitleForm'>Sing Up</h2>
        <div className='ContainerItems'> 
          <label className='singUpLabelForm'>Gmail</label>
          <input onChange={(e)=>{setemail(e.target.value)}} name='email' type='email' className='singUpInputForm' placeholder='Enter your Email' />
        </div>
        <div className='ContainerItems'> 
          <label className='singUpLabelForm'>Password</label>
          <input onChange={(e)=>{setpassword(e.target.value)}} type='password' className='singUpInputForm' placeholder='Enter your Password' />
        </div>
        <button onClick={()=>createAccount(Account)} type='submit' className='singUpButtonForm'>Sing up</button>
      </form>
    </div>
  )
};

export default SingUp;
