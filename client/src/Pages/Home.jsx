import "./css/Home.css";
import ImageHome from "./images/PcHome.jpeg";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home_Contain-Title">
        <h1 className="Home_title">
          Welcome to
          <br />
          <span className="CustomGame">CustomGame</span>
        </h1>
        <p>Best gaming products in the world</p>
        <p>Protected Purchase</p>
      </div>
      <img className="Home_Image" src={ImageHome} alt="ImageHome" />
    </div>
  );
};

export default Home;
