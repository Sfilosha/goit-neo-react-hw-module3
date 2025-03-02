import { Field, Form, Formik } from "formik";
import css from "./SearchBox.module.css";
import { useId } from "react";

function SearchBox({ onSearch, value }) {
  const searchFieldId = useId();

  return (
    <Formik initialValues={value}>
      <Form className={css.searchForm}>
        <div className={css.searchField}>
          <label name="search" id={searchFieldId}>
            Find contact by name
          </label>
          <Field
            name="search"
            id={searchFieldId}
            value={value}
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          ></Field>
        </div>
      </Form>
    </Formik>
  );
}

export default SearchBox;
