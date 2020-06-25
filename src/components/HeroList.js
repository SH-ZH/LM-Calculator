import React from 'react';

class HeroList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group hero_changer">
			  <select class="form-control" id="lang" onChange={this.handleChange}>

			  	</select>	
			</div>
		)
	}
}

export default HeroList;