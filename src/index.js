import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This componenent should produce some HTML
 const App = () => {
	 return <div>Hi!</div>;
 }

// Take this compnent's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

