import React from 'react';

let en = require('../languages/en.json');
let jp = require('../languages/jp.json');

function SingleTab(props) {
	const lang = props.lang;
	const searching_text = props.text;
	let text = '';	
	
	if (lang === 'en') {
		text = en[searching_text];
	}
	else if (lang === 'jp') {
		text = jp[searching_text];
	}		
	
	if (props.active === "true") {
		return (		
			<li class="nav-item">
				<a class="nav-link active" id={props.id} data-toggle="tab" href={props.href} role="tab">{text}</a>
			</li>	
		)	
	}
	else {
		return (		
			<li class="nav-item">
				<a class="nav-link" id="soldiercalc-tab" data-toggle="tab" href={props.href} role="tab">{text}</a>
			</li>		
		)	
	}

}

export default SingleTab;