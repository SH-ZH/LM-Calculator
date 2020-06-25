import React from 'react';
import EquipmentOptions from './EquipmentOptions.js';
import EquipmentDefaultOption from './EquipmentDefaultOption.js';

class AccessoryList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group accessory_changer">
                <select class="form-control" id="lang" onChange={this.handleChange}>
                    <EquipmentDefaultOption otype="accessory" lang={this.props.lang} />
                    <EquipmentOptions otype="accessory_hpint" lang={this.props.lang} />
					<EquipmentOptions otype="accessory_hpatk" lang={this.props.lang} />
                    <EquipmentOptions otype="accessory_hpdef" lang={this.props.lang} />
                    <EquipmentOptions otype="accessory_hpmdef" lang={this.props.lang} />
					<EquipmentOptions otype="accessory_atkdef" lang={this.props.lang} />
                    <EquipmentOptions otype="accessory_atkint" lang={this.props.lang} />
					<EquipmentOptions otype="accessory_atkskill" lang={this.props.lang} />
                    <EquipmentOptions otype="accessory_intmdef" lang={this.props.lang} />
                    <EquipmentOptions otype="accessory_bloodpact" lang={this.props.lang} />
					<EquipmentOptions otype="accessory_braceremblem" lang={this.props.lang} />
                </select>	
			</div>
		)
	}
}

export default AccessoryList;