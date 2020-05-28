import React from 'react';

let en = require('../languages/en.json');
let jp = require('../languages/jp.json');

function TableLongHead(props) {
	const lang = props.lang;
	const searching_text = props.text;
	let text = '';
	
	if (lang === 'en') {
		text = en[searching_text];
	}
	else if (lang === 'jp') {
		text = jp[searching_text];
	}	
	
	return (
		<th scope="col" colspan={props.length}>{text}</th>
	)
}

export default TableLongHead;