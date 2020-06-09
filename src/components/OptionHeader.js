import React from 'react';

let en = require('../languages/en_soldiers.json');
let jp = require('../languages/jp_soldiers.json');

function OptionHeader(props) {
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
		<option className="optionHeader" value={props.stype} disabled>{text}</option>
	)
}

export default OptionHeader;