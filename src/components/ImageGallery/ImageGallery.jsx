import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/services';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;

    if (prevQuery !== newQuery) {
      const pageNum = 1
      getImages(newQuery, pageNum);
    }
  }
  

  render() {
    const { images } = this.state;
    return (
      <ul class="gallery">
        {images.map(image => {
          <ImageGalleryItem image={image} />;
        })}
      </ul>
    );
  }
}
