import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDIlpWTXuoMYd-BtCU7lkPVdpLxn1_ZOt0';

// Create a new component. This componenent should produce some HTML
const App = () => {
	return (
        <div>
            <SearchBar />
        </div>
     );
}

// Take this compnent's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

