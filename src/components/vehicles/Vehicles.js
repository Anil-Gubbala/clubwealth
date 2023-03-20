import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableContent from "../table/TableContent";

import starwars from "../../APIs/starwars";
import SearchInput from "../search/SearchInput";
import { Spinner } from "react-bootstrap";
import starwarsFiltered from "../../APIs/starwarsFiltered";
import { Link, useLocation } from "react-router-dom";

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
        <h6 className="card-subtitle mb-2 text-muted">{d.model}</h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Manufactured by {d.manufacturer}
        </h6>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Features</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              <div className="table-responsive textSize">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cost in Credits</td>
                      <td>{d.cost_in_credits}</td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>{d.length}</td>
                    </tr>
                    <tr>
                      <td>Max. Atmosphering Speed</td>
                      <td>{d.max_atmosphering_speed}</td>
                    </tr>
                    <tr>
                      <td>Crew</td>
                      <td>{d.crew}</td>
                    </tr>
                    <tr>
                      <td>Passengers</td>
                      <td>{d.passengers}</td>
                    </tr>
                    <tr>
                      <td>Cargo Capacity</td>
                      <td>{d.cargo_capacity}</td>
                    </tr>
                    <tr>
                      <td>Consumables</td>
                      <td>{d.consumables}</td>
                    </tr>
                    <tr>
                      <td>Vechicle Class</td>
                      <td>{d.vehicle_class}</td>
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
        <Link className="card-link" to={`/people`} state={{ list: d.pilots }}>
          Pilots
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

const Vehicles = () => {
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
      starwarsFiltered.getVehicles(list).then((response) => {
        sortData(response, sort);
        setStore(response);
        setLoading(false);
      });
    } else {
      setLoading(true);
      starwars.getVehicles().then((response) => {
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
          tableTitle="Vehicles"
          tableData={makeCards(data)}
          headerData={headerData}
        />
      )}
    </>
  );
};

export { Vehicles };
export default Vehicles;
