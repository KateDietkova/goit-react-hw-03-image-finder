import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(image => {
        <ImageGalleryItem image={image} />;
      })}
    </ul>
  );
};
