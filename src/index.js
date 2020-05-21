import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import UnitStatCalculator from './components/UnitStatCalculator.js';
import SoldierStatCalculator from './components/SoldierStatCalculator.js';
import LanguageChanger from './components/LanguageChanger.js';
import SiteTab from './components/SiteTab.js';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.updateLanguage = this.updateLanguage.bind(this);
		this.state = {
			language: "en"
		};
	}
	
	updateLanguage(lang) {
		this.setState({ language: lang });
	}
  
	render() {		
		return(
			<div class='calculator'>
				<LanguageChanger onInput={this.updateLanguage} />				
				<SiteTab language={this.state.language} />
				
				<div class="tab-content">
					<div id="usc" class="tab-pane fade show active" role="tabpanel">
						<UnitStatCalculator language={this.state.language} />			
					</div>
					<div  id="ssc" class="tab-pane fade" role="tabpanel">
						<SoldierStatCalculator language={this.state.language} />
					</div>
				</div>
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);