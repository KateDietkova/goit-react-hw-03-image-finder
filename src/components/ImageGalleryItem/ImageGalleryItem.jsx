import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL, tags },
}) => {
  return (
    <ImageGalleryItemStyled key={id}>
      <Image src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};