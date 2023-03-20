import axios from "axios";

const starwarsFiltered = {
  getPeople: async (urls) => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 0; i < urls.length; i++) {
        const response = await axios.get(urls[i]);
        if (response) {
          totalResults.push(response.data);
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getPlanets: async (urls) => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 0; i < urls.length; i++) {
        const response = await axios.get(urls[i]);
        if (response) {
          totalResults.push(response.data);
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getStarships: async (urls) => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 0; i < urls.length; i++) {
        const response = await axios.get(urls[i]);
        if (response) {
          totalResults.push(response.data);
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getFilms: async (urls) => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */

      const totalResults = [];
      for (var i = 0; i < urls.length; i++) {
        const response = await axios.get(urls[i]);
        if (response) {
          totalResults.push(response.data);
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getSpecies: async (urls) => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 0; i < urls.length; i++) {
        const response = await axios.get(urls[i]);
        if (response) {
          totalResults.push(response.data);
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
  getVehicles: async (urls) => {
    try {
      /*
       * The API currently fetches only 10 rows and
       * since we do not have suport for sorting via
       * the api, we are going to fetch all the pages
       * at once and the apply sorting on the client side.
       */
      const totalResults = [];
      for (var i = 0; i < urls.length; i++) {
        const response = await axios.get(urls[i]);
        if (response) {
          totalResults.push(response.data);
        }
      }
      return totalResults;
    } catch (error) {
      return error;
    }
  },
};

export default starwarsFiltered;
