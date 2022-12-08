import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = queryValue => {
    const query = queryValue.toLowerCase().split(' ').join('+');
    this.setState({ query });
  }

  render() {
    const { query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={query} />
      </>
    );

  }
}
