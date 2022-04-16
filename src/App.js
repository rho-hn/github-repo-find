import "./App.css";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const fetchUrl =
  "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc";

function App() {
  const [repo, setRepo] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [match, setMatch] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request, "req");
      setRepo(request.data.items);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    let result = [];
    result = repo.filter((data) => {
      return data.name.search(searchField) != -1;
    });
    setRepo(result);
  };

  console.log(searchField, "search");

  useEffect(() => {
    repo.map((rep) => {
      if (searchField === rep.name) {
        setMatch(true);
      }
    });
  }, [searchField]);

  console.log(repo, "repo");

  return (
    <div className="App">
      {/* ---------------------------------------------------------------- */}

      <div className="navy georgia ma0 grow"></div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          placeholder="Search Repository"
          onChange={handleChange}
        />
      </div>

      {/* ----------------------------------------------------- */}

      <div className="navy georgia ma0 grow">
        <h2 className="f2">All repositories</h2>
      </div>
      <Pagination
        data={repo}
        RenderComponent={Card}
        pageLimit={3}
        dataLimit={10}
      />
    </div>
  );
}
export default App;
