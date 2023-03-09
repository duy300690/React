import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";
import axios from "axios";

//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetchData = useRef([]);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );

      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error is ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 p-5 w-full block rounded-md mb-5 focus:border-blue-400 transition-all"
        placeholder="Typing your keyword..."
        defaultValue={query}
        onChange={lodash.debounce((e) => setQuery(e.target.value), 500)}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && <p className="text-red-400 my-5">{errorMessage}</p>}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => <h3 className="p-3 bg-gray-100 rounded-md" key={index}>{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
