import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDIlpWTXuoMYd-BtCU7lkPVdpLxn1_ZOt0';


// Create a new component. This componenent should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });    
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this compnent's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

