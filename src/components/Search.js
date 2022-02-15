import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context";
import { actionType } from "../reducer";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatchAction] = useStateValue();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatchAction({ type: actionType.SET_SEARCH_TERM, input: input });
    console.log("You searched", input);

    navigate("/search");
  };
  return (
    <form onSubmit={submitHandler} className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon"></SearchIcon>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <MicIcon></MicIcon>
      </div>

      <div className="search__buttons">
        <Button
          type="submit"
          variant="outlined"
          className={hideButtons ? "search__buttonsHidden" : ""}
        >
          Google Search
        </Button>
        <Button
          variant="outlined"
          className={hideButtons ? "search__buttonsHidden" : ""}
        >
          Personal Tags
        </Button>
      </div>
    </form>
  );
}

export default Search;
