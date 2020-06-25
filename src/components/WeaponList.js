import React from 'react';
import EquipmentOptions from './EquipmentOptions.js';
import EquipmentDefaultOption from './EquipmentDefaultOption.js';

class WeaponList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group weapon_changer">
                <select class="form-control" id="lang" onChange={this.handleChange}>
                    <EquipmentDefaultOption otype="weapon" lang={this.props.lang} />
                    <EquipmentOptions otype="bow" lang={this.props.lang} />
					<EquipmentOptions otype="dagger" lang={this.props.lang} />
                    <EquipmentOptions otype="sword_hp" lang={this.props.lang} />
                    <EquipmentOptions otype="sword_skill" lang={this.props.lang} />
                    <EquipmentOptions otype="lance" lang={this.props.lang} />
                    <EquipmentOptions otype="hammer_atk" lang={this.props.lang} />
                    <EquipmentOptions otype="hammer_mag" lang={this.props.lang} />
                    <EquipmentOptions otype="staff" lang={this.props.lang} />
                </select>	
			</div>
		)
	}
}

export default WeaponList;