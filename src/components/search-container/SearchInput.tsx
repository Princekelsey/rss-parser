import React from "react";

interface Props {
  searchUrl: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput: React.FC<Props> = ({
  searchUrl,
  handleChange,
  handleSubmit,
}) => {
  return (
    <article className="input-form">
      <h3>RSS PARSER</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="enter url"
            name="url"
            value={searchUrl}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className="submit-btn btn"
          disabled={searchUrl === "" ? true : false}
        >
          Submit
        </button>
      </form>
    </article>
  );
};

export default SearchInput;
