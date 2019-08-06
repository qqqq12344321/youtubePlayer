import React, {Fragment} from 'react'
import SearchListItem from './SearchListItem'

const SearchList = (props) => {
	let key = 0
	const videoItems = props.videos.map((video) => {
		key++
		return (
			<SearchListItem 
				onUserSelected={props.onVideoSelect}           
				key={props.keyVal + key} 
				video={video} />
		)
	})

	return (
		<Fragment>
			 <ul>
				{videoItems}
			</ul>
		</Fragment>
	)
}

export default SearchList