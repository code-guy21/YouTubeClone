import React from 'react';
import SearchBar from '../components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDPIIc3wPn14oeiYqqWabJd3K128rOczZ0';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            searchField: '',
            videos: [],
            selectedVideo: ''
        };

        this.logVideos('React js');
    }

    logVideos = (searchField) => {
        YTSearch({key: API_KEY, term: searchField}, videos => {
            this.setState({videos});
            this.setState({selectedVideo:videos[0]});
        })
    }

    render(){

        const videoSearch = _.debounce((searchField) => {this.logVideos(searchField)},300);

        return (
            <div>
                <SearchBar searchChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;