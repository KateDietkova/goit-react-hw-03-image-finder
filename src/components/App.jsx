import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Box } from './Box/Box';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'services/services';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    pageNum: 1,
  };

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;

    if (prevQuery !== newQuery || prevState.pageNum !== this.state.pageNum) {
      this.setState({isLoading: true });
      const { pageNum } = this.state;
      const images = await getImages(newQuery, pageNum);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoading: false,
      }));
    }
  }

  handleSubmit = ({ queryValue }) => {
    const query = queryValue.toLowerCase().split(' ').join('+');
    this.setState({ query, pageNum: 1, images: [], });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      pageNum: prevState.pageNum + 1,
    }));
    console.log(this.state.pageNum);
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        {images.length > 0 && !isLoading && (
          <>
            <ImageGallery images={images} />
            <Box display="flex" justifyContent="center" pb="15px">
              <Button onLoadMore={this.onLoadMore} />
            </Box>
          </>
        )}

        {isLoading && (
          <Box display="flex" justifyContent="center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </Box>
        )}
      </>
    );
  }
}
