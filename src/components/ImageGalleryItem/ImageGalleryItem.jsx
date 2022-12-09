import { Component } from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render() {
    const { isOpenModal } = this.state;
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    return (
      <>
        <ImageGalleryItemStyled onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} />
        </ImageGalleryItemStyled>
        {isOpenModal && (
          <Modal
            largeImage={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}