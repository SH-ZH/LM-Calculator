import React from 'react';

let en = require('../languages/en_soldiers.json');
let jp = require('../languages/jp_soldiers.json');

function SoldierOptions(props) {
	const lang = props.lang;
	const searching_text = props.stype;
	let text = '';	
	
	if (lang === 'en') {
		text = en[searching_text];
	}
	else if (lang === 'jp') {
		text = jp[searching_text];
	}		
	
	return (
		<option value={props.stype}>{text}</option>
	)
}

export default SoldierOptions;