import React from 'react';

class OpenPercentInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}	
	
	render() {		
		return (
			<td>
				<div className="withPercentInput">
					<input type="text" id={this.props.id} onChange={this.handleChange} defaultValue={this.props.defaultval}></input>
					<div className="percent_sign">%</div>
				</div>
			</td>
		)
	}	
}

export default OpenPercentInput;