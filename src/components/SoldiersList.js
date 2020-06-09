import React from 'react';
import SoldierOptions from './SoldierOptions.js';
import OptionHeader from './OptionHeader.js';
import SoldierDefaultOption from './SoldierDefaultOption.js';

class SoldiersList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		
  
	render() {
		return (
			<div class="form-group soldier_changer">
			  <select class="form-control" id="lang" onChange={this.handleChange}>
				  <SoldierDefaultOption lang={this.props.lang} />
				  
				  <OptionHeader stype="infantry" lang={this.props.lang} />	  
				  <SoldierOptions stype="highland_warrior" lang={this.props.lang} />
				  <SoldierOptions stype="heavy_infantry" lang={this.props.lang} />
				  <SoldierOptions stype="berserker" lang={this.props.lang} />
				  <SoldierOptions stype="masked_maids" lang={this.props.lang} />
				  <SoldierOptions stype="orc_berserker" lang={this.props.lang} />
				  <SoldierOptions stype="dark_guards" lang={this.props.lang} />
				  <SoldierOptions stype="guardian_infantry" lang={this.props.lang} />
				  <SoldierOptions stype="cyclops" lang={this.props.lang} />
				  <SoldierOptions stype="cyborg" lang={this.props.lang} />
				  <SoldierOptions stype="princess_guards" lang={this.props.lang} />

				  <OptionHeader stype="lancer" lang={this.props.lang} />	
				  <SoldierOptions stype="phalanx" lang={this.props.lang} />
				  <SoldierOptions stype="heavy_centurion" lang={this.props.lang} />
				  <SoldierOptions stype="amazon_champion" lang={this.props.lang} />
				  <SoldierOptions stype="lava_titan" lang={this.props.lang} />
				  <SoldierOptions stype="stone_colossus" lang={this.props.lang} />
				  <SoldierOptions stype="vanguard_lancer" lang={this.props.lang} />
				  <SoldierOptions stype="dark_centurion" lang={this.props.lang} />
				  <SoldierOptions stype="crystal_titan" lang={this.props.lang} />
				  <SoldierOptions stype="treant_guardian" lang={this.props.lang} />

				  <OptionHeader stype="calvary" lang={this.props.lang} />
				  <SoldierOptions stype="heavy_calvary" lang={this.props.lang} />
				  <SoldierOptions stype="dragoon" lang={this.props.lang} />
				  <SoldierOptions stype="templar_knights" lang={this.props.lang} />
				  <SoldierOptions stype="bone_dino" lang={this.props.lang} />
				  <SoldierOptions stype="hell_hound" lang={this.props.lang} />
				  <SoldierOptions stype="guardian_calvary" lang={this.props.lang} />
				  <SoldierOptions stype="heavensguard" lang={this.props.lang} />
				  <SoldierOptions stype="royal_calvary" lang={this.props.lang} />
				  <SoldierOptions stype="unicorn" lang={this.props.lang} />
				  <SoldierOptions stype="scorpion" lang={this.props.lang} />

				  <OptionHeader stype="flyer" lang={this.props.lang} />
				  <SoldierOptions stype="tide_master" lang={this.props.lang} />
				  <SoldierOptions stype="lizardman" lang={this.props.lang} />
				  <SoldierOptions stype="griffin_rider" lang={this.props.lang} />
				  <SoldierOptions stype="vampire_bats" lang={this.props.lang} />
				  <SoldierOptions stype="holy_pegasus" lang={this.props.lang} />
				  <SoldierOptions stype="lobster_behemoth" lang={this.props.lang} />
				  <SoldierOptions stype="leviathan" lang={this.props.lang} />
				  <SoldierOptions stype="angel" lang={this.props.lang} />
				  <SoldierOptions stype="gargoyles" lang={this.props.lang} />
				  <SoldierOptions stype="tide_elf" lang={this.props.lang} />				  
				  <SoldierOptions stype="steel_wing" lang={this.props.lang} />				  

				  <OptionHeader stype="archer" lang={this.props.lang} />
				  <SoldierOptions stype="sky_archer" lang={this.props.lang} />
				  <SoldierOptions stype="high_elf" lang={this.props.lang} />
				  <SoldierOptions stype="dark_elf" lang={this.props.lang} />
				  <SoldierOptions stype="catapult" lang={this.props.lang} />
				  <SoldierOptions stype="bandit" lang={this.props.lang} />
				  <SoldierOptions stype="mist_dancer" lang={this.props.lang} />
				  <SoldierOptions stype="demon_hunter" lang={this.props.lang} />
				  <SoldierOptions stype="bolt_ranger" lang={this.props.lang} />
				  <SoldierOptions stype="firebrand_archer" lang={this.props.lang} />
				  <SoldierOptions stype="samurai" lang={this.props.lang} />				  
				  <SoldierOptions stype="shinobi" lang={this.props.lang} />
				  <SoldierOptions stype="goblin_knight" lang={this.props.lang} />				  
				  <SoldierOptions stype="dwarf" lang={this.props.lang} />

				  <OptionHeader stype="holy" lang={this.props.lang} />
				  <SoldierOptions stype="holy_knight" lang={this.props.lang} />
				  <SoldierOptions stype="zealot" lang={this.props.lang} />
				  <SoldierOptions stype="bishop" lang={this.props.lang} />
				  <SoldierOptions stype="skeleton_knights" lang={this.props.lang} />
				  <SoldierOptions stype="fire_archer" lang={this.props.lang} />
				  <SoldierOptions stype="exorcist" lang={this.props.lang} />
				  <SoldierOptions stype="wizard" lang={this.props.lang} />
				  <SoldierOptions stype="sorceress" lang={this.props.lang} />
				  <SoldierOptions stype="shrine_maiden" lang={this.props.lang} />
				  <SoldierOptions stype="undead_knights" lang={this.props.lang} />				  
				  <SoldierOptions stype="crystal_warlock" lang={this.props.lang} />
				  <SoldierOptions stype="spider_demon" lang={this.props.lang} />				  
				  <SoldierOptions stype="forest_priest" lang={this.props.lang} />
			  	</select>	
			</div>
		)
	}
}

export default SoldiersList;