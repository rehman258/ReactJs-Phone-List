import React from 'react'
import './List.css'	
import PropTypes from 'prop-types'

export default class Filter extends React.Component {
	static propTypes = {
		contacts:PropTypes.array.isRequired
	}
	state={
		filterText:''
	}
	onChangeFilterText = (e) =>{
		this.setState({
			filterText:	e.target.value
		})
	}
	render() {
		const filteredText = this.props.contacts.filter(
			(contact) => {
				return contact.name.toLowerCase().indexOf(
					this.state.filterText.toLowerCase()
				) !== -1
			}
		);

		
		return (
			<div className = {"List_Area"}>

				<input 
				onChange = {this.onChangeFilterText}
				value={this.state.filterText}
				name={"filter"} 
				id={"filter"} 
				placeholder={"Searc by name or number"}/>
				<ul className={"list"}>
					{
						filteredText.map(elem =>{

							return(
								<li key = {elem.number} >
									<span className={"name"}>{elem.name}</span>

									<span className={"phone"}>{elem.number}</span>
									
									<span className={"clearfix"}></span>
								</li>
							)
							
						
						})
					}
					
				</ul>
			</div>
		)
	}
}