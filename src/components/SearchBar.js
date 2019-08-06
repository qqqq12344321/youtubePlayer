import React from 'react';

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state = { searhRequest: '' }

		this.onInputChange = this.onInputChange.bind(this)
		this.setWrapperRef = this.setWrapperRef.bind(this)
	}

	onInputChange(event) {
		this.setState({ searhRequest: event.target.value })
		this.props.onSearchTermChange(event.target.value)
	}

	onFocus(e) {
		e.preventDefault()
		this.setState({focus: true})
	}

	onBlur(e) {
		e.preventDefault()
		this.setState({focus: false})
	}

	setWrapperRef(node) {
		this.wrapperRef = node
	}

	render(){
		return (
			<div className="search-bar" >
				<input                
					value={this.state.term}
					onChange={this.onInputChange} 
					placeholder={"Search on YouTube"}
					onFocus={e=>this.onFocus(e)}
					onBlur={e=>this.onBlur(e)}
				/>
				<div 
					className="searchResultsWrapper"
					ref={this.setWrapperRef}>
					{this.state.focus ? this.props.children : null}
				</div>
				
			</div>
		)
	}

}

export default SearchBar