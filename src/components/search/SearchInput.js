import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function SearchInput(props) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(0);
  const doSearch = () => {
    // add search logic
    props.searchData(data);
  };

  return (
    <div
      style={{ position: "relative", display: "flex", marginBottom: "32px" }}
    >
      <div style={{ margin: "auto" }}>
        <FormControl>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              margin: "auto",
              alignItems: "center",
              width: 400,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              doSearch();
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search anything..."
              inputProps={{ "aria-label": "Search" }}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </FormControl>
        <FormControl style={{ marginLeft: "32px" }}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            style={{ height: "48px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort"
            onChange={(e) => {
              setSort(e.target.value);
              props.sort(e.target.value);
            }}
          >
            <MenuItem value={0}>Asc</MenuItem>
            <MenuItem value={1}>Desc</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* <br></br> */}
    </div>
  );
}

export default SearchInput;
