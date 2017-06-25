import React from 'react'
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      setTimeout(() => null, 0);
      return response.json();
    })
    .then((responseData) => {
      this.setState({ albums: responseData });
    });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
