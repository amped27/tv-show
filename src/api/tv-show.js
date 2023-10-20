import axios from "axios";

const BASE_URL          = "https://api.themoviedb.org/3/";
const API_KEY_PARAM     = "?api_key=e08b42d29ddadbfcd7e8fde264d210d7";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}trending/tv/week${API_KEY_PARAM}`
    );
    return response.data.results;
  }
  
  static async fetchRecommendation(tvID) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvID}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
  }
  
  static async fetchSearch(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
