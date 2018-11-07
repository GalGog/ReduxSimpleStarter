import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCBuhMUUvU8jk-qR6m1biniQEoP0eUrKUU';

YTSearch({key: API_KEY, term: 'surfboards' }, function (data) {
    console.log(data);
});

//create new componet. this component should produce
//some HTML
const App  = () => {
    return (
        <div>
        <SearchBar />
    </div>
    );
}

//take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));