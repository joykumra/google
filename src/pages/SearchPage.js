import React from "react";
import { useStateValue } from "../context";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ searchTerm }, dispatchAction] = useStateValue();

  // CUSTOM HOOK - LIVE API CALL
  const { data } = useGoogleSearch(searchTerm);
  console.log(data);

  // TEST DATA
  // const data = response;

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt="google"
          ></img>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons></Search>

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon></SearchIcon>
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon></DescriptionIcon>
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon></ImageIcon>
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon></LocalOfferIcon>
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon></RoomIcon>
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon></MoreVertIcon>
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data && (
        <div className="searchPage__results">
          <p className="searcPage__resultCount">
            About {data.searchInformation.formattedTotalResults} results (
            {data.searchInformation.formattedSearchTime} seconds)
          </p>

          {data.items.map((item, index) => {
            return (
              <div className="searchPage__result" key={index}>
                <a href={item.link} className="searchPage__resultLink">
                  {item.displayLink}
                </a>
                <a href={item.link} className="searchPage__resultTitle">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchPage;