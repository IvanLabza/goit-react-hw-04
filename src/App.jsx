import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { api } from "./servise/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

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
      if (page === 1) {
        setSearchResults(data);
      } else if (Array.isArray(data) && Array.isArray(searchResults)) {
        setSearchResults((prevState) => [...prevState, ...data]);
      }
      setLoadMore(true);
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
    const form = e.target;
    const { searchInput } = form.elements;
    if (searchInput.value !== "") {
      setSearchTerm(searchInput.value);
      form.reset();
      setPage(1);
    } else {
      toast.error("This didn't work.", { duration: 1500 });
    }
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
          imageModal={imageModal}
        />
      )}
    </div>
  );
}

export default App;
