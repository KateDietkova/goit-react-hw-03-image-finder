import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  return (
    <ImageGalleryItemStyled>
      <Image src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};