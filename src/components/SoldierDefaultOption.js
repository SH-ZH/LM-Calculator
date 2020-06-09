import React from 'react';

let en = require('../languages/en_soldiers.json');
let jp = require('../languages/jp_soldiers.json');

function SoldierDefaultOption(props) {
	const lang = props.lang;
	const searching_text = "option_default";
	let text = '';	
	
	if (lang === 'en') {
		text = en[searching_text];
	}
	else if (lang === 'jp') {
		text = jp[searching_text];
	}		
	
	return (
        <option value="none" selected disabled hidden>{text}</option>
	)
}

export default SoldierDefaultOption;