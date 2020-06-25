import React from 'react';
import EquipmentOptions from './EquipmentOptions.js';
import EquipmentDefaultOption from './EquipmentDefaultOption.js';

class HelmetList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group helmet_changer">
                <select class="form-control" id="lang" onChange={this.handleChange}>
                    <EquipmentDefaultOption otype="helmet" lang={this.props.lang} />
                    <EquipmentOptions otype="cloth_h" lang={this.props.lang} />
					<EquipmentOptions otype="light_h" lang={this.props.lang} />
                    <EquipmentOptions otype="heavy_h" lang={this.props.lang} />
                </select>	
			</div>
		)
	}
}

export default HelmetList;