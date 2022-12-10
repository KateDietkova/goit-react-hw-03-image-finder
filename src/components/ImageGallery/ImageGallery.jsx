import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  myRef = React.createRef();

  componentDidUpdate(prevProps) {
    if (
      prevProps.images.length >= 12 &&
      prevProps.images.length !== this.props.images.length
    ) {
      this.smoothScrolling();
    }
  }

  smoothScrolling = () => {
    const firstImage = this.myRef.current.firstElementChild;
    console.log(firstImage);
    if (!firstImage) {
      return;
    }
    const { height: cardHeight } = firstImage.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2.5,
      behavior: 'smooth',
    });
  };

  render() {
    const { images } = this.props;
    return (
      <ImageGalleryStyled ref={this.myRef}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ImageGalleryStyled>
    );
  }
}
