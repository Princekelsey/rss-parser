import React, { useState } from "react";
import SearchInput from "./SearchInput";
import "./searchInput.style.css";

interface Props {
  handleSearch: (url: string) => void;
}

const SearchContainer: React.FC<Props> = ({ handleSearch }) => {
  const [searchUrl, setSearchUrl] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchUrl(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (searchUrl === "") return;
    handleSearch(searchUrl);
    setSearchUrl("");
  };

  return (
    <section className="input-page">
      <SearchInput
        searchUrl={searchUrl}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default SearchContainer;
