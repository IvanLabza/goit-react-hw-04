import axios from "axios";

const ACCESS_KEY = "vnkmDM_yjYq-V1ojMcWfmj33Nc7ylXgTTgV58c9rJsQ";
const url = "https://api.unsplash.com/search/photos";

export async function api(query, page) {
  const response = await axios.get(url, {
    params: {
      client_id: ACCESS_KEY,
      page: page,
      query: query,
      orientation: "landscape",
      per_page: 20,
    },
  });
  return response.data.results;
}
