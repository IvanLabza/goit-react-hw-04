import axios from "axios";

const ACCESS_KEY = "vnkmDM_yjYq-V1ojMcWfmj33Nc7ylXgTTgV58c9rJsQ";

export async function api(query, page) {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${page}&query=${query}&orientation=portrait&per_page=30`
  );
  return response.data;
}
