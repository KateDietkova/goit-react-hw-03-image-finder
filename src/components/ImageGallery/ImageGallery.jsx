import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { getImages } from 'services/services';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(prevProps) {
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;

    if (prevQuery !== newQuery) {
      const pageNum = 1
      const images = await getImages(newQuery, pageNum);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    }
  }
  

  render() {
    const { images } = this.state;
    return (
      <ImageGalleryStyled>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ImageGalleryStyled>
    );
  }
}
