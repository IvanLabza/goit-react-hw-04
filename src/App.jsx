import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { api } from "./servise/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMassage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setError] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    if (searchTerm === null) return;
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await api(searchTerm, page);
        if (data.length === 0) {
          setSearchResults(null);
          setError(true);
          setLoadMore(false);
        } else {
          setError(false);
          if (page === 1) {
            setSearchResults(data);
          } else if (Array.isArray(data) && Array.isArray(searchResults)) {
            setSearchResults((prevState) => [...prevState, ...data]);
          }
          setLoadMore(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchTerm, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const onSubmit = (e) => {
    setSearchTerm(null);
    const form = e.target;
    const { searchInput } = form.elements;
    setSearchTerm(searchInput.value);
    form.reset();
    setPage(1);
  };

  const openModal = (image) => {
    setImageModal(image);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="wrapper">
      <SearchBar onSubmit={onSubmit} />
      {searchResults !== null && Array.isArray(searchResults) && (
        <ImageGallery openModal={openModal} images={searchResults} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMassage />}
      {isLoadMore && <LoadMoreBtn loadMore={loadMore} />}
      {modalIsOpen && (
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          urls={imageModal.urls}
          alt_description={imageModal.alt_description}
        />
      )}
    </div>
  );
}

export default App;
