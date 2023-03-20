import axios from "axios";

const starwars = {
  getPeople: async () => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 1; ; i++) {
        const response = await axios.get(
          "https://swapi.dev/api/people?page=" + i
        );
        if (response.data.results) {
          totalResults.push(...response.data.results);
        }
        if (response.data.next == null) {
          break;
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getPlanets: async () => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 1; ; i++) {
        const response = await axios.get(
          "https://swapi.dev/api/planets?page=" + i
        );
        if (response.data.results) {
          totalResults.push(...response.data.results);
        }
        if (response.data.next == null) {
          break;
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getStarships: async () => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 1; ; i++) {
        const response = await axios.get(
          "https://swapi.dev/api/starships?page=" + i
        );
        if (response.data.results) {
          totalResults.push(...response.data.results);
        }
        if (response.data.next == null) {
          break;
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getFilms: async () => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 1; ; i++) {
        const response = await axios.get(
          "https://swapi.dev/api/films?page=" + i
        );
        if (response.data.results) {
          totalResults.push(...response.data.results);
        }
        if (response.data.next == null) {
          break;
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getSpecies: async () => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 1; ; i++) {
        const response = await axios.get(
          "https://swapi.dev/api/species?page=" + i
        );
        if (response.data.results) {
          totalResults.push(...response.data.results);
        }
        if (response.data.next == null) {
          break;
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getVehicles: async () => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 1; ; i++) {
        const response = await axios.get(
          "https://swapi.dev/api/vehicles?page=" + i
        );
        if (response.data.results) {
          totalResults.push(...response.data.results);
        }
        if (response.data.next == null) {
          break;
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
};

export default starwars;
