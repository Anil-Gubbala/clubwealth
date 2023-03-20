import axios from "axios";

//documentation @https://docs.thecatapi.com/
//feel free to add more functions!

const cats = {
  get100Cats: async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getRandomCat: async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
};

export default cats;
