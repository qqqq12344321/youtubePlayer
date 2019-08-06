import React, { useState } from 'react'
import Entities from 'html-entities'

const HistoryListItem = (props) => {
	const video = props.video;
	const onUserSelected = props.onUserSelected
	const onVideoDelete = props.onVideoDelete;
	const imageUrl = video.snippet.thumbnails.default.url
	const videoDB_ID = props.videoDB_ID
	const entities = new Entities.AllHtmlEntities()

	let [loading, setCount] = useState(false)

	if (loading) return <li className="videoItem"> LOADING ... </li>
	return (
	<li className="videoItem">
		<div>
			<div onClick={() => onUserSelected(video)} className="videoItem--imageWrapper pointer">
				<img src={imageUrl} alt="thumbnail"/>
			</div>
			<div onClick={() => onUserSelected(video)} className="videoItem--infoWrapper pointer">
				<div >{entities.decode(video.snippet.title)}</div>
			</div>
			<div className="videoItem--historyButtonWrapper">
				<button 
					onMouseDown={() => {
						setCount(true)
						onVideoDelete(videoDB_ID, ()=>{setCount(false)})} }>
					DELETE
				</button>
			</div>

		</div>
	</li>
	)
}

export default HistoryListItem