import axios from "axios";

const ACCESS_KEY = "WeEhn8lLonXydHxbttXItkaPPgMtx9uJoKumX5QSUPw";

export async function useApi(query, page) {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&query=${query}&orientation=portrait&per_page=28`
  );
  return response.data;
}
