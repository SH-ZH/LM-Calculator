import React from 'react';
import EquipmentOptions from './EquipmentOptions.js';
import EquipmentDefaultOption from './EquipmentDefaultOption.js';

class ArmorList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group armor_changer">
                <select class="form-control" id="lang" onChange={this.handleChange}>
                    <EquipmentDefaultOption otype="armor" lang={this.props.lang} />
                    <EquipmentOptions otype="cloth_a" lang={this.props.lang} />
					<EquipmentOptions otype="light_a" lang={this.props.lang} />
                    <EquipmentOptions otype="heavy_a" lang={this.props.lang} />
                </select>	
			</div>
		)
	}
}

export default ArmorList;