import React from 'react'
import './style.css'
import Entities from 'html-entities'

const VideoDetail = (props) => {
	const video = props.video
	if(!video){
		return <div className="video"> No video to show... </div>
	}
	const videoId = video.id.videoId
	const url = `https://www.youtube.com/embed/${videoId}`
	const entities = new Entities.AllHtmlEntities()
	
	return (
		<div className="video">
			<div>
				<iframe 
					width="960px"
					height="540px"
					allow="autoplay"
					src={url + "?autoplay=1"}
					title="video">
				</iframe>
			</div>
			<div className="details">
				<div>{entities.decode(video.snippet.title)}</div>
			</div>
		</div>
	)
}

export default VideoDetail