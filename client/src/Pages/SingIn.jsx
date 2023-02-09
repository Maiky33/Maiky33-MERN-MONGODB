import './css/Singin.css'

const SingIn = () => {
  return ( 
    <div className="singin"> 
      <div className='SingInForm'> 
        <label className='singinLabelForm'>Gmail</label>
        <input className='singinInputForm' placeholder='Enter your Email' />
        <label className='singinLabelForm'>Password</label>
        <input className='singinInputForm' placeholder='Enter your Password' />
        <button className='singinButtonForm'>Sing In</button>
      </div>
    </div>
  )
};

export default SingIn;
