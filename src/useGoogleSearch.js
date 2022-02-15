import React, { useEffect, useState } from "react";
import { API_KEY, CONTEXT_KEY } from "./keys";

function useGoogleSearch(searchTerm) {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
      );

      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [searchTerm]);
  return { data };
}

export default useGoogleSearch;
