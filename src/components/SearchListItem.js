import React from 'react'
import Entities from 'html-entities'

const SearchListItem = (props) => {
	const video = props.video
	const onUserSelected = props.onUserSelected
	const imageUrl = video.snippet.thumbnails.default.url
	const entities = new Entities.AllHtmlEntities()

	return (
		<li className="videoItem">
			<div>
				<div className="videoItem--imageWrapper">
					<img src={imageUrl} alt="thumbnail"/>
				</div>
				<div className="videoItem--infoWrapper">
					<div className="videoItem--videoTitle">{entities.decode(video.snippet.title)}</div>
				</div>
				<div className="videoItem--buttonWrapper">
					<button 
						onMouseDown={() => onUserSelected(video)}>
						PLAY
					</button>
				</div>
			</div>
		</li>
	)
}

export default SearchListItem