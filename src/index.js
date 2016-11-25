import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY= 'AIzaSyCiJta20g2oyfrV51_VkQ4RHj2bjMX1H90';
const API_KEYRW= 'AIzaSyA5-ExCgBkVFJDwKKnGtxuknxvBnO3UFZM';

// create a new component. this component should produce some html

const App =  () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated html and put it on the page
// React.render(App)
//          const elem = React.createElement(App);

ReactDOM.render(<App />,document.querySelector('.container'));