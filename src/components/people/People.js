import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableContent from "../table/TableContent";

import starwars from "../../APIs/starwars";
import SearchInput from "../search/SearchInput";
import Spinner from "react-bootstrap/Spinner";
import { Link, useLocation } from "react-router-dom";
import starwarsFiltered from "../../APIs/starwarsFiltered";

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
        <h5 className="card-title">{d.name}</h5>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Personal Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              <div className="table-responsive textSize">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Gender</td>
                      <td>{d.gender}</td>
                    </tr>
                    <tr>
                      <td>Birth Year</td>
                      <td>{d.birth_year}</td>
                    </tr>
                    <tr>
                      <td>Eye color</td>
                      <td>{d.eye_color}</td>
                    </tr>
                    <tr>
                      <td>Hair color</td>
                      <td>{d.hair_color}</td>
                    </tr>
                    <tr>
                      <td>Skin color</td>
                      <td>{d.skin_color}</td>
                    </tr>
                    <tr>
                      <td>Mass</td>
                      <td>{d.mass}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />

        <Link className="card-link" to={`/films`} state={{ list: d.films }}>
          Films
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

const People = () => {
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
      console.log("dup : ", dup);
      dup.sort((a, b) => (a.name > b.name ? 1 : -1));
      setData([...dup]);
    } else {
      dup.sort((a, b) => (a.name > b.name ? -1 : 1));
      setData([...dup]);
    }
  };

  useEffect(() => {
    if (window.location.href.indexOf("all") == -1) {
      setLoading(true);
      starwarsFiltered.getPeople(list).then((response) => {
        sortData(response, sort);
        setStore(response);
        setLoading(false);
      });
    } else {
      setLoading(true);
      starwars.getPeople().then((response) => {
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
          tableTitle="People"
          tableData={makeCards(data)}
          headerData={headerData}
        />
      )}
    </>
  );
};

export { People };
export default People;
