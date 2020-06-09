import React from 'react';
import ClosedInput from './ClosedInput.js';
import OpenInput from './OpenInput.js';
import OpenPercentInput from './OpenPercentInput.js';
import TableHead from './TableHead.js';
import RowHead from './RowHead.js';
import Notes from './Notes.js';
import SoldiersList from './SoldiersList.js';

let soldier_stats = require('../stats/soldier_stats.json');

class SoldierStatCalculator extends React.Component {	
	constructor(props) {
		super(props);
		
		// Soldier Base Numbers
		this.updateSBaseHP = this.updateSBaseHP.bind(this);	
		this.updateSFlatHP = this.updateSFlatHP.bind(this);	
		this.updateSPerHP = this.updateSPerHP.bind(this);	
		
		this.updateSBaseAtk = this.updateSBaseAtk.bind(this);	
		this.updateSFlatAtk = this.updateSFlatAtk.bind(this);	
		this.updateSPerAtk = this.updateSPerAtk.bind(this);	

		this.updateSBaseDef = this.updateSBaseDef.bind(this);	
		this.updateSFlatDef = this.updateSFlatDef.bind(this);	
		this.updateSPerDef = this.updateSPerDef.bind(this);	

		this.updateSBaseMDef = this.updateSBaseMDef.bind(this);	
		this.updateSFlatMDef = this.updateSFlatMDef.bind(this);	
		this.updateSPerMDef = this.updateSPerMDef.bind(this);	
		
		this.updateSBonus = this.updateSBonus.bind(this);	
		
		// Soldier Other Numbers
		this.updateSHeroBoostHP = this.updateSHeroBoostHP.bind(this);	
		this.updateSBuffHP = this.updateSBuffHP.bind(this);	

		this.updateSHeroBoostAtk = this.updateSHeroBoostAtk.bind(this);	
		this.updateSTroopSkillAtk = this.updateSTroopSkillAtk.bind(this);	
		this.updateSTechBonusAtk = this.updateSTechBonusAtk.bind(this);
		this.updateSBuffAtk = this.updateSBuffAtk.bind(this);	
			
		this.updateSHeroBoostDef = this.updateSHeroBoostDef.bind(this);	
		this.updateSTroopSkillDef = this.updateSTroopSkillDef.bind(this);	
		this.updateSTechBonusDef = this.updateSTechBonusDef.bind(this);
		this.updateSBuffDef = this.updateSBuffDef.bind(this);	
		
		this.updateSHeroBoostMDef = this.updateSHeroBoostMDef.bind(this);	
		this.updateSTroopSkillMDef = this.updateSTroopSkillMDef.bind(this);	
		this.updateSTechBonusMDef = this.updateSTechBonusMDef.bind(this);
		this.updateSBuffMDef = this.updateSBuffMDef.bind(this);		
		
		this.setSoldierStats = this.setSoldierStats.bind(this);
		
		this.state = {
			language: this.props.language,
			
			// Soldier Base Numbers
			s_base_hp: '',
			s_flat_hp: '55',
			s_per_hp: '',
			
			s_base_atk: '',
			s_flat_atk: '55',
			s_per_atk: '',

			s_base_def: '',
			s_flat_def: '33',
			s_per_def: '',

			s_base_mdef: '',
			s_flat_mdef: '33',
			s_per_mdef: '',	

			s_bonus: '',
			
			// Soldier Other Numbers
			s_hero_boost_hp: '',
			s_buff_hp: '',
			
			s_hero_boost_atk: '',
			s_troop_skill_atk: '',
			s_tech_bonus_atk: '',
			s_buff_atk: '',
			
			s_hero_boost_def: '',
			s_troop_skill_def: '',
			s_tech_bonus_def: '',
			s_buff_def: '',
			
			s_hero_boost_mdef: '',
			s_troop_skill_mdef: '',
			s_tech_bonus_mdef: '',
			s_buff_mdef: '',	
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {language: props.language };
	}	
	
	// Soldier Base Numbers
	updateSBaseHP(stat) {
		this.setState({ s_base_hp : stat });
	}
	updateSFlatHP(stat) {
		this.setState({ s_flat_hp : stat });
	}
	updateSPerHP(stat) {
		this.setState({ s_per_hp : stat });
	}
	
	updateSBaseAtk(stat) {
		this.setState({ s_base_atk : stat });
	}
	updateSFlatAtk(stat) {
		this.setState({ s_flat_atk : stat });
	}
	updateSPerAtk(stat) {
		this.setState({ s_per_atk : stat });
	}

	updateSBaseDef(stat) {
		this.setState({ s_base_def : stat });
	}
	updateSFlatDef(stat) {
		this.setState({ s_flat_def : stat });
	}
	updateSPerDef(stat) {
		this.setState({ s_per_def : stat });
	}

	updateSBaseMDef(stat) {
		this.setState({ s_base_mdef : stat });
	}
	updateSFlatMDef(stat) {
		this.setState({ s_flat_mdef : stat });
	}
	updateSPerMDef(stat) {
		this.setState({ s_per_mdef : stat });
	}	
	
	updateSBonus(stat) {
		this.setState({ s_bonus : stat });
	}
	
	// Soldier Other Numbers
	updateSHeroBoostHP(stat) {
		this.setState({ s_hero_boost_hp : stat });
	}	
	updateSBuffHP(stat) {
		this.setState({ s_buff_hp : stat });
	}	

	updateSHeroBoostAtk(stat) {
		this.setState({ s_hero_boost_atk : stat });
	}	
	updateSTroopSkillAtk(stat) {
		this.setState({ s_troop_skill_atk : stat });
	}	
	updateSTechBonusAtk(stat) {
		this.setState({ s_tech_bonus_atk : stat });
	}		
	updateSBuffAtk(stat) {
		this.setState({ s_buff_atk : stat });
	}	
	
	updateSHeroBoostDef(stat) {
		this.setState({ s_hero_boost_def : stat });
	}	
	updateSTroopSkillDef(stat) {
		this.setState({ s_troop_skill_def : stat });
	}	
	updateSTechBonusDef(stat) {
		this.setState({ s_tech_bonus_def : stat });
	}		
	updateSBuffDef(stat) {
		this.setState({ s_buff_def : stat });
	}
	
	updateSHeroBoostMDef(stat) {
		this.setState({ s_hero_boost_mdef : stat });
	}	
	updateSTroopSkillMDef(stat) {
		this.setState({ s_troop_skill_mdef : stat });
	}	
	updateSTechBonusMDef(stat) {
		this.setState({ s_tech_bonus_mdef : stat });
	}		
	updateSBuffMDef(stat) {
		this.setState({ s_buff_mdef : stat });
	}	

	setSoldierStats(soldier) {
		this.setState({
			s_base_hp: soldier_stats[soldier].hp,
			s_base_atk: soldier_stats[soldier].atk,
			s_base_def: soldier_stats[soldier].def,
			s_base_mdef: soldier_stats[soldier].mdef,
			s_bonus: soldier_stats[soldier].bonus,			
		})
	}
	

	render() {
		const s_black_hp = Math.round(+this.state.s_base_hp * 7.4 * ((100 + +this.state.s_per_hp + +this.state.s_bonus) / 100) + +this.state.s_flat_hp);
		const s_black_atk = +this.state.s_base_atk * 7.4 * ((100 + +this.state.s_per_atk + +this.state.s_bonus) / 100) + +this.state.s_flat_atk;
		const s_black_def = +this.state.s_base_def * 7.4 * ((100 + +this.state.s_per_def + +this.state.s_bonus) / 100) + +this.state.s_flat_def;
		const s_black_mdef = +this.state.s_base_mdef * 7.4 * ((100 + +this.state.s_per_mdef + +this.state.s_bonus) / 100) + +this.state.s_flat_mdef;

		const s_green_hp = Math.round(s_black_hp * (+this.state.s_hero_boost_hp / 100));
		const s_green_atk = s_black_atk * (+this.state.s_hero_boost_atk / 100);
		const s_green_def = s_black_def * (+this.state.s_hero_boost_def / 100);
		const s_green_mdef = s_black_mdef * (+this.state.s_hero_boost_mdef / 100);
		
		const s_battle_black_hp = (s_black_hp * ((100 + +this.state.s_buff_hp) / 100)) * 10;
		const s_battle_black_atk = s_black_atk * ((100 + +this.state.s_troop_skill_atk + +this.state.s_tech_bonus_atk + +this.state.s_buff_atk) / 100)
		const s_battle_black_def = s_black_def * ((100 + +this.state.s_troop_skill_def + +this.state.s_tech_bonus_def + +this.state.s_buff_def) / 100)
		const s_battle_black_mdef = s_black_mdef * ((100 + +this.state.s_troop_skill_mdef + +this.state.s_tech_bonus_mdef + +this.state.s_buff_mdef) / 100)

		const s_battle_green_hp = s_battle_black_hp * (this.state.s_hero_boost_hp / 100);
		const s_battle_green_atk = s_battle_black_atk * (this.state.s_hero_boost_atk / 100);
		const s_battle_green_def = s_battle_black_def * (this.state.s_hero_boost_def / 100);
		const s_battle_green_mdef = s_battle_black_mdef * (this.state.s_hero_boost_mdef / 100);
		
		const s_battle_total_hp = s_battle_black_hp + s_battle_green_hp;

		return (
			<div class="container">
				<div class="row">
					<SoldiersList onInput={this.setSoldierStats} lang={this.state.language} stype={this.state.soldier_type} />					
				</div>
				<div class="row">
					<div class="col">					
						<div class="table-responsive">
							<table class="table" id="soldier_base_stats">							  
							  <thead class="thead-dark">
								<tr>
									<TableHead text="status" lang={this.state.language} />
									<TableHead text="s_base" lang={this.state.language} />
									<TableHead text="s_flat_training" lang={this.state.language} />
									<TableHead text="s_per_training" lang={this.state.language} />
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <RowHead text="hp" lang={this.state.language} />
								  <OpenInput id="s_base_hp" defaultval={this.state.s_base_hp} onInput={this.updateSBaseHP} />
								  <OpenInput id="s_flat_hp" defaultval={this.state.s_flat_hp} onInput={this.updateSFlatHP} />
								  <OpenPercentInput id="s_per_hp" onInput={this.updateSPerHP} />
								</tr>
								<tr>
								  <RowHead text="atk" lang={this.state.language} />
								  <OpenInput id="s_base_atk" defaultval={this.state.s_base_atk} onInput={this.updateSBaseAtk} />
								  <OpenInput id="s_flat_atk" defaultval={this.state.s_flat_atk} onInput={this.updateSFlatAtk} />
								  <OpenPercentInput id="s_per_atk" onInput={this.updateSPerAtk} />								  
								</tr>
								<tr>
								  <RowHead text="def" lang={this.state.language} />
								  <OpenInput id="s_base_def" defaultval={this.state.s_base_def} onInput={this.updateSBaseDef} />
								  <OpenInput id="s_flat_def" defaultval={this.state.s_flat_def} onInput={this.updateSFlatDef} />
								  <OpenPercentInput id="s_per_def" onInput={this.updateSPerDef} />								  
								</tr>	
								<tr>
								  <RowHead text="mdef" lang={this.state.language} />
								  <OpenInput id="s_base_mdef" defaultval={this.state.s_base_mdef} onInput={this.updateSBaseMDef} />
								  <OpenInput id="s_flat_mdef" defaultval={this.state.s_flat_mdef} onInput={this.updateSFlatMDef} />
								  <OpenPercentInput id="s_per_mdef" onInput={this.updateSPerMDef} />								  
								</tr>
								<tr>
								  <RowHead text="bonus" lang={this.state.language} />
								  <OpenPercentInput id="s_bonus" defaultval={this.state.s_bonus} onInput={this.updateSBonus} />
								  <ClosedInput />
								  <ClosedInput />								  
								</tr>								
							  </tbody>
							</table>
						</div>						
					</div>
					<div class="col">					
						<div class="table-responsive">
							<table class="table" id="soldier_final_stats">
							  <thead class="thead-dark">
								<tr>
									<TableHead text="status" lang={this.state.language} />
									<TableHead text="s_black" lang={this.state.language} />
									<TableHead text="s_green" lang={this.state.language} />
									<TableHead text="s_battle_black" lang={this.state.language} />
									<TableHead text="s_battle_green" lang={this.state.language} />
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <RowHead text="hp" lang={this.state.language} />
								  <ClosedInput id="s_black_hp" value={s_black_hp.toFixed(1)} />
								  <ClosedInput id="s_green_hp" value={s_green_hp.toFixed(1)} />
								  <ClosedInput id="s_black_battle_hp" value={s_battle_total_hp.toFixed(1)} />
								  <ClosedInput id="s_green_battle_hp" />
								</tr>
								<tr>
								  <RowHead text="atk" lang={this.state.language} />
								  <ClosedInput id="s_black_atk" value={s_black_atk.toFixed(1)} />
								  <ClosedInput id="s_green_atk" value={s_green_atk.toFixed(1)} />
								  <ClosedInput id="s_black_battle_atk" value={s_battle_black_atk.toFixed(1)} />
								  <ClosedInput id="s_green_battle_atk" value={s_battle_green_atk.toFixed(1)} />								  
								</tr>
								<tr>
								  <RowHead text="def" lang={this.state.language} />
								  <ClosedInput id="s_black_def" value={s_black_def.toFixed(1)} />
								  <ClosedInput id="s_green_def" value={s_green_def.toFixed(1)} />
								  <ClosedInput id="s_black_battle_def" value={s_battle_black_def.toFixed(1)} />
								  <ClosedInput id="s_green_battle_def" value={s_battle_green_def.toFixed(1)} />			  
								</tr>	
								<tr>
								  <RowHead text="mdef" lang={this.state.language} />
								  <ClosedInput id="s_black_mdef"  value={s_black_mdef.toFixed(1)} />
								  <ClosedInput id="s_green_mdef" value={s_green_mdef.toFixed(1)} />
								  <ClosedInput id="s_black_battle_mdef" value={s_battle_black_mdef.toFixed(1)} />
								  <ClosedInput id="s_green_battle_mdef" value={s_battle_green_mdef.toFixed(1)} />									  
								</tr>									
							  </tbody>
							</table>
						</div>										
					</div>
				</div>
				<div class="row">
					<div class="col">
						<div class="table-responsive">
							<table class="table" id="soldier_base_stats">
							  <thead class="thead-dark">
								<tr>
									<TableHead text="status" lang={this.state.language} />
									<TableHead text="s_hero_boost" lang={this.state.language} />
									<TableHead text="s_troop_skill" lang={this.state.language} />
									<TableHead text="s_tech_bonus" lang={this.state.language} />
									<TableHead text="s_buffs" lang={this.state.language} />
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <RowHead text="hp" lang={this.state.language} />
								  <OpenPercentInput id="s_hero_boost_hp" onInput={this.updateSHeroBoostHP} />
								  <ClosedInput />
								  <ClosedInput />	
								  <OpenPercentInput id="s_buffs_hp" onInput={this.updateSBuffHP} />								  
								</tr>
								<tr>
								  <RowHead text="atk" lang={this.state.language} />
								  <OpenPercentInput id="s_hero_boost_atk" onInput={this.updateSHeroBoostAtk} />
								  <OpenPercentInput id="s_troop_skill_atk" onInput={this.updateSTroopSkillAtk} />
								  <OpenPercentInput id="s_tech_bonus_atk" onInput={this.updateSTechBonusAtk} />
								  <OpenPercentInput id="s_buffs_atk" onInput={this.updateSBuffAtk} />								  
								</tr>
								<tr>
								  <RowHead text="def" lang={this.state.language} />
								  <OpenPercentInput id="s_hero_boost_def" onInput={this.updateSHeroBoostDef} />
								  <OpenPercentInput id="s_troop_skill_def" onInput={this.updateSTroopSkillDef} />
								  <OpenPercentInput id="s_tech_bonus_def" onInput={this.updateSTechBonusDef} />
								  <OpenPercentInput id="s_buffs_def" onInput={this.updateSBuffDef} />									  
								</tr>	
								<tr>
								  <RowHead text="mdef" lang={this.state.language} />
								  <OpenPercentInput id="s_hero_boost_mdef" onInput={this.updateSHeroBoostMDef} />
								  <OpenPercentInput id="s_troop_skill_mdef" onInput={this.updateSTroopSkillMDef} />
								  <OpenPercentInput id="s_tech_bonus_mdef" onInput={this.updateSTechBonusMDef} />
								  <OpenPercentInput id="s_buffs_mdef" onInput={this.updateSBuffMDef} />									  
								</tr>									
							  </tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="notes">
					<Notes text="number_warning" lang={this.state.language} />
					<Notes text="soldier_page_hero_talent" lang={this.state.language} />
					<Notes text="soldier_hero_level" lang={this.state.language} />
				</div>				
			</div>
		)
	}
}

export default SoldierStatCalculator;