import './css/Singin.css'

const SingIn = () => {
  return ( 
    <div className="singin"> 
      <div className='SingInForm'> 
        <h2 className='TitleForm'>Sing In</h2>
        <div className='ContainerItems'> 
          <label className='singinLabelForm'>Gmail</label>
          <input className='singinInputForm' placeholder='Enter your Email'/>
        </div>
        <div className='ContainerItems'> 
          <label className='singinLabelForm'>Password</label>
          <input className='singinInputForm' placeholder='Enter your Password'/>
        </div>
        <button className='singinButtonForm'>Sing In</button>
      </div>
    </div>
  )
};

export default SingIn;
