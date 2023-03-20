import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { People } from "../components/people";
import { Films } from "../components/films";
import { Planets } from "../components/planets";
import { Starships } from "../components/starships";
import { Species } from "../components/species";
import { Vehicles } from "../components/vehicles";
import { NavigationBar } from "../components/navigation-bar";
import { Container } from "react-bootstrap";
import SearchInput from "../components/search/SearchInput";
import FilmsFiltered from "../components/films/FilmsFiltered";
export default function MainRouter() {
  return (
    <Router style={{ background: "lightcyan" }}>
      <div className="App" style={{ background: "lightcyan" }}>
        <NavigationBar />
        <Container style={{ padding: "16px" }}>
          <Routes>
            <Route exact path="/people/all" element={<People />} />
            <Route exact path="/films/all" element={<Films />} />
            <Route exact path="/planets/all" element={<Planets />} />
            <Route exact path="/starships/all" element={<Starships />} />
            <Route exact path="/species/all" element={<Species />} />
            <Route exact path="/vehicles/all" element={<Vehicles />} />

            <Route exact path="/people/" element={<People />} />
            <Route exact path="/films/" element={<Films />} />
            <Route exact path="/planets/" element={<Planets />} />
            <Route exact path="/starships/" element={<Starships />} />
            <Route exact path="/species/" element={<Species />} />
            <Route exact path="/vehicles/" element={<Vehicles />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}
