import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src="https://cdn-icons-png.flaticon.com/512/3570/3570168.png" alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <div class="dropdown">
          <button class="dropbtn">Restaurants</button>
          <div class="dropdown-content">
          <Link to="/Dominos">Dominos</Link>
          <Link to="/McDonalds">McDonalds</Link>
          <Link to="/Gabay">Gabay Falafel</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
