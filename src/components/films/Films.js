import React, { useState, useEffect } from "react";
import TableContent from "../table/TableContent";

import starwars from "../../APIs/starwars";
import SearchInput from "../search/SearchInput";
import { Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import starwarsFiltered from "../../APIs/starwarsFiltered";

const handleDelete = (event, items) => {
  console.log(items);
};

const makeCard = (d) => {
  return (
    <div
      className="card"
      key={Math.random()}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {d.title} [{d.release_date}]
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Directed by {d.director}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Produced by {d.producer}
        </h6>
        <p className="card-text">{d.opening_crawl}</p>

        <Link
          className="card-link"
          to={`/people`}
          state={{ list: d.characters }}
        >
          People
        </Link>
        <Link
          className="card-link"
          to={`/starships`}
          state={{ list: d.starships }}
        >
          Starships
        </Link>
        <Link
          className="card-link"
          to={`/vehicles`}
          state={{ list: d.vehicles }}
        >
          Vehicles
        </Link>
        <Link className="card-link" to={`/planets`} state={{ list: d.planets }}>
          Planets
        </Link>
      </div>
    </div>
  );
};

const makeCards = (data) => {
  const cards = [];
  data.forEach((d, ind) => {
    cards.push({ name: makeCard(d) });
  });
  return cards;
};

const headerData = [
  {
    id: "name",
    numeric: false,
    label: "",
  },
];

const Films = () => {
  const [data, setData] = useState([]);
  const [store, setStore] = useState([]);

  const [searchData, setSearchData] = useState("");
  const [sort, setSort] = useState(0);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const list = location.state && location.state.list;

  useEffect(() => {
    if (searchData == "") {
      sortData(store, sort);
      return;
    }
    let filteredData = store.filter((each, index) => {
      let b = false;
      Object.values(each).forEach((e, ind) => {
        if (e.toString().search(new RegExp(searchData, "i")) != -1) {
          b = true;
        }
      });
      return b;
    });
    sortData(filteredData, sort);
  }, [searchData]);

  useEffect(() => {
    sortData(data, sort);
  }, [sort]);

  const sortData = (input, sortOrder) => {
    const dup = input;
    if (sortOrder == 0) {
      dup.sort((a, b) => (a.title > b.title ? 1 : -1));
      setData([...dup]);
    } else {
      dup.sort((a, b) => (a.title > b.title ? -1 : 1));
      setData([...dup]);
    }
  };

  useEffect(() => {
    if (window.location.href.indexOf("all") == -1) {
      setLoading(true);
      starwarsFiltered.getFilms(list).then((response) => {
        sortData(response, sort);
        setStore(response);
        setLoading(false);
      });
    } else {
      setLoading(true);
      starwars.getFilms().then((response) => {
        sortData(response, sort);
        setStore(response);
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      <SearchInput searchData={setSearchData} sort={setSort}></SearchInput>
      {loading && (
        <div style={{ position: "relative", top: "100px" }}>
          <Spinner
            animation="border"
            role="grow"
            style={{ margin: "auto", display: "block" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {!loading && (
        <TableContent
          tableTitle="Films"
          tableData={makeCards(data)}
          headerData={headerData}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export { Films };
export default Films;
