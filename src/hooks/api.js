import axios from "axios";

const ACCESS_KEY = "vnkmDM_yjYq-V1ojMcWfmj33Nc7ylXgTTgV58c9rJsQ";

export async function useApi(query, page) {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&query=${query}&orientation=landscape&per_page=17`
  );
  return response.data.results;
}
