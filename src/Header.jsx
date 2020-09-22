import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

//Navigation Bar on Top
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo "
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchinput" /> {/*SearchBar*/}
        <SearchIcon className="header_searchicon"></SearchIcon>{" "}
        {/*Search Icon*/}
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_options">
            <span className="header_optionLineOne">Hello Dude!</span>
            <span className="header_optionLineTwo">Sign out</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_options">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_options">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/*Basket Icon*/}
            <ShoppingBasketIcon/>
            {/*Number of items in basket*/}
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
