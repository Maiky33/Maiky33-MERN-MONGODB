import './css/Home.css'
import ImageHome from './images/PcHome.jpeg'

const Home = () => { 
  return (   
    <div className="Home"> 
      <img className='Home_Image' src={ImageHome} alt="ImageHome" />
      <div className='Home_Contain-Title'> 
        <h1 className="Home_title">Buy on CustomGame</h1> 
        <p>Best gaming products in the world</p>
        <p>Protected Purchase</p>
      </div>
    </div>
  )
};

export default Home;
