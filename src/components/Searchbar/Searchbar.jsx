import { Formik, Field } from 'formik';
import {
  SearchbarStyled,
  FormStyled,
  SearchFormButtonStyled,
  FormButtonLabel,
} from './Searchbar.styled';

const initialValues = { queryValue: '' };

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormStyled>
          <SearchFormButtonStyled type="submit">
            <FormButtonLabel>Search</FormButtonLabel>
          </SearchFormButtonStyled>

          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="queryValue"
          />
        </FormStyled>
      </Formik>
    </SearchbarStyled>
  );
};
