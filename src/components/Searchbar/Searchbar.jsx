import { Formik, Form, Field } from 'formik';

const initialValues = { search: "" };

export const Searchbar = ({ onSubmit }) => {
  return (
    <header class="searchbar">
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <Field
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="search"
          />
        </Form>
      </Formik>
    </header>
  );
};
