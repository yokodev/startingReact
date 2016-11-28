import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyCiJta20g2oyfrV51_VkQ4RHj2bjMX1H90';
const API_KEYRW= 'AIzaSyA5-ExCgBkVFJDwKKnGtxuknxvBnO3UFZM';
// create a new component. this component should produce some html
class App extends Component {
  constructor(props) {
    super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		};
    YTSearch({ key: API_KEY, term: 'reactjs'}, (videos) => {
      this.setState({ 
			videos: videos,
			selectedVideo: videos[0] 
			});
    });
  }
  render(){
    return (
      <div>
	      <SearchBar />
	      <VideoDetail video = {this.state.selectedVideo} />				
				<VideoList 
					onVideoSelect = {selectedVideo =>{this.setState({selectedVideo})}}
					videos ={this.state.videos} 
				/>
      </div>
    );
  }
}

//Take this component's generated html and put it on the page

ReactDOM.render(<App />,document.querySelector('.container'));