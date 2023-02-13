import './css/Singup.css'

const SingUp = () => {
  return(
    <div className="singup"> 
      <div className='SingUpForm'> 
        <h2>Sing Up</h2>
        <div className='ContainerItems'> 
          <label className='singUpLabelForm'>Gmail</label>
          <input className='singUpInputForm' placeholder='Enter your Email' />
        </div>
        <div className='ContainerItems'> 
          <label className='singUpLabelForm'>Password</label>
          <input className='singUpInputForm' placeholder='Enter your Password' />
        </div>
        <div className='ContainerItems'> 
          <label className='singUpLabelForm'>Password</label>
          <input className='singUpInputForm' placeholder='Enter your Password' />
        </div>
        <button className='singUpButtonForm'>Sing up</button>
      </div>
    </div>
  )
};

export default SingUp;
