import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LeadMoreBtn from "./components/LeadMoreBtn/LeadMoreBtn";
import { api } from "./hooks/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    if (searchTerm === null) return;
    async function fetchData() {
      try {
        const data = await api(searchTerm, 1);
        setSearchResults(data);
      } catch (err) {
        console.error(err);
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

      {/* <LeadMoreBtn /> */}
    </>
  );
}

export default App;
