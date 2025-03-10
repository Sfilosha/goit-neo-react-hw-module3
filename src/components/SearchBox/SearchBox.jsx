import { Field, Form, Formik } from "formik";
import css from "./SearchBox.module.css";
import { useId } from "react";

function SearchBox({ onSearch, value }) {
  const searchFieldId = useId();

  return (
    <form className={css.searchForm}>
      <div className={css.searchField}>
        <label name="search" id={searchFieldId} htmlFor={searchFieldId}>
          Find contact by name
        </label>
        <input
          type="text"
          name="search"
          id={searchFieldId}
          value={value}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </div>
    </form>
  );
}

export default SearchBox;
