import React from 'react';

let en = require('../languages/en.json');
let jp = require('../languages/jp.json');

function Notes(props) {
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
		<div className='note'>・{text}</div>
	)
}

export default Notes;