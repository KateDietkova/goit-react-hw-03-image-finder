import { MdMore } from 'react-icons/md';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      <MdMore size="32" />
      Load more
    </ButtonLoadMore>
  );
};
