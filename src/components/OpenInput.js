import React from 'react';

class OpenInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}	
	
	render() {		
		return (
			<td><input type="text" className="openInput" id={this.props.id} onChange={this.handleChange} value={this.props.defaultval}></input></td>
		)
	}	
}

export default OpenInput;