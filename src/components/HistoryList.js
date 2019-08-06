import React from 'react'
import HistoryListItem from './HistoryListItem'

const HistoryList = (props) => {
	let key = 0
	const videoItems = props.videos.map((video) => {
		key++
		return (
			<HistoryListItem 
				onUserSelected={props.onVideoSelect} 
				onVideoDelete={props.onVideoDelete} 
				key={props.keyVal + key} 
				video={video.video}
				videoDB_ID={video._id} />
		)
	})
	return (
		<ul>
			{videoItems}
		</ul>
	)
}

export default HistoryList