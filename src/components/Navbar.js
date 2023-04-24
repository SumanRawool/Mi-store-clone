import React from "react";
import "../styles/nav.css";
//import logo from "../data/data.json";
import { Link } from "react-router-dom";
import pkg from "../data/data.json";
const logo = pkg.logo;
const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
  </svg>
);

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/dsd">
          <img id="logoImage" src={logo} alt="Not" />
        </Link>
      </div>
      <Link className="navlinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV
      </Link>
      <Link className="navlinks" to="/laptops">
        Laptops
      </Link>
      <Link className="navlinks" to="/lifestyle">
        Fitness & lifestyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/audio">
        Radio
      </Link>
      <Link className="navlinks" to="/accessories">
        Accessories
      </Link>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;
