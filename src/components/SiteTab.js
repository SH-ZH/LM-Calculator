import React from 'react';
import SingleTab from './SingleTab.js';

function SiteTab(props) {
	return (		
		<ul class="nav nav-tabs" id="site_tab" role="tablist">
			<SingleTab active="true" id="unitcalc-tab" href="#usc" text="usc" lang={props.language} />
			<SingleTab active="false" id="soldiercalc-tab" href="#ssc" text="ssc" lang={props.language} />
		</ul>		
	)
}

export default SiteTab;