import React from 'react';

let en = require('../languages/en_equipment.json');
let jp = require('../languages/jp_equipment.json');

function EquipmentOptions(props) {
	const lang = props.lang;
	const searching_text = props.otype;
	let text = '';	
	
	if (lang === 'en') {
		text = en[searching_text];
	}
	else if (lang === 'jp') {
		text = jp[searching_text];
	}		
	
	return (
		<option value={searching_text}>{text}</option>
	)
}

export default EquipmentOptions;