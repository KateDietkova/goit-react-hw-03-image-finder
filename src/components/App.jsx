import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Box } from './Box/Box';

export class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = ({ queryValue }) => {
    const query = queryValue.toLowerCase().split(' ').join('+');
    console.log(query);
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16" pb="24">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={query} />
      </Box>
    );
  }
}
