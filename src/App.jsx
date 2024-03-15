import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LeadMoreBtn from "./components/LeadMoreBtn/LeadMoreBtn";
import { useApi } from "./hooks/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm === null) return;
    async function fetchData() {
      try {
         setIsLoading(true);
        const data = await useApi(searchTerm, 1);
        setSearchResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setSearchTerm(null);
      }
    }

    fetchData();
  }, [searchTerm]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { searchInput } = form.elements;
    setSearchTerm(searchInput.value);
    console.log(searchInput.value);
    form.reset();
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {searchResults !== null && Array.isArray(searchResults) && (
        <ImageGallery images={searchResults} />
      )}
      {isLoading && <Loader />}

      {/* <LeadMoreBtn /> */}
    </>
  );
}

export default App;
