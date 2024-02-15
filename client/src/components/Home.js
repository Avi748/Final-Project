import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    return(
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Food Ordering App
          </h1>
          <p className="primary-text">Your Favourite Food Delivered Hot & Fresh</p>
          </div>
          <div className="home-image-section">
          <img src="https://img.freepik.com/premium-vector/vector-black-white-plate-with-traditional-thanksgiving-meal-fork-knife-outline-roast-turkey-with-cranberry-sauce-christmas-thanksgiving-festive-food-holiday-outline-meal-illustrationxa_150240-3181.jpg" alt="" />
        </div>
      </div>
    </div>
    );
};

export default Home