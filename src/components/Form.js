import React from 'react'

export default class Form extends React.Component {
	constructor(){
		super();
		this.mychange = this.mychange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	state={
		name:'',
		number:''
	}

	mychange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
		
	}

	onSubmit(e){
		e.preventDefault();
		this.props.addContact({...this.state});
		this.setState({
			name:'',
			number:''
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input name="name" id="name" placeholder="Enter a name" value={this.state.name} onChange={this.mychange}/>
					<input name="number" id="number" placeholder="Enter a phone" value={this.state.number} onChange={this.mychange}/>
					<button className="addbtn">Add</button>
				</form>
			</div>
		)
	}
}