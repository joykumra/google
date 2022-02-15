import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/home">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon></AppsIcon>
          <AccountCircleIcon></AccountCircleIcon>
        </div>
      </div>

      <div className="home__body">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="google"
        ></img>
        <Search></Search>
      </div>
    </div>
  );
}

export default Home;
