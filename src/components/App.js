/* global gapi */

import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import VideoDetail from './VideoDetail'
import SearchList from './SearchList'
import HistoryList from './HistoryList'

class App extends Component {
	constructor(props){
		super(props)
		this.state = { 
			videos: [],
			history: [],
			selectedVideo: null,
			loadedHistory: false
		};
	}

	componentDidMount () {
		axios.get("http://localhost:5000/api/video/history")
		.then(res => this.setState({
			history: res.data.reverse(),
			loadedHistory:true
		}))
	}

	videoSelect(video) {
		this.setState({selectedVideo: null}, () => this.setState({selectedVideo: video}) )
		axios.post("http://localhost:5000/api/video/addToHistory", {data: video})
		.then(res => this.setState({history: res.data.reverse()}))
	}

	videoDelete(videoDB_ID, cb) {
		axios.delete(`http://localhost:5000/api/video/delete/${videoDB_ID}`)
		.then(res => {
			this.setState({
					history: res.data.reverse(),
					loadedHistory:true
			}, cb())
		})
	}

	search(search) {
		axios.get(`http://localhost:5000/api/video/search/${search}`)
		.then((response)=> {
			console.log(response)
			this.setState({ 
				videos: response.data.items
			})
		}, function(err) { console.error("Execute error", err); })
	}

 
	render() {
		return (
			<div className="youtubeSearch">
				<SearchBar onSearchTermChange={searchRequest => this.search(searchRequest)}>
					<div className="searchBlock">
						<SearchList 
							onVideoSelect={selectedVideo => this.videoSelect(selectedVideo)}
							videos={this.state.videos} 
							keyVal={"searchResults"}/>
					</div>
				</SearchBar>

				{
					!this.state.loadedHistory ? 
					<div className="historyBlock historyBlock--title"> Loading history ...</div> :
					<div className="historyBlock">
						<div className="historyBlock--title">Watch history</div>
						<HistoryList 
							onVideoSelect={selectedVideo => this.videoSelect(selectedVideo)}
							onVideoDelete={(selectedVideo, cb) => this.videoDelete(selectedVideo, cb)}
							videos={this.state.history} 
							keyVal={"historyResults"}/>
					</div>
				}
				

				<VideoDetail video={this.state.selectedVideo}/>
			</div>)
	}
}

export default App
