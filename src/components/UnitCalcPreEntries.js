import React from 'react';
import WeaponList from './WeaponList.js';
import ArmorList from './ArmorList.js';
import HelmetList from './HelmetList.js';
import AccessoryList from './AccessoryList.js';
import HeroList from './HeroList.js';
import SingleMessage from './SingleMessage.js';

class UnitCalcPreEntries extends React.Component {		
	render() {
		return (
			<div class="unit-preentries">
				<SingleMessage text="preentry" lang={this.props.lang} />
				<HeroList lang={this.props.lang} onInput={this.props.onHeroInput} />
                <WeaponList lang={this.props.lang} onInput={this.props.onWeaponInput} />
				<ArmorList lang={this.props.lang} onInput={this.props.onArmorInput} />
				<HelmetList lang={this.props.lang} onInput={this.props.onHelmetInput} />
				<AccessoryList lang={this.props.lang} onInput={this.props.onAccessoryInput} />
			</div>
		)
	}
}

export default UnitCalcPreEntries;