import React from 'react';
import ClosedInput from './ClosedInput.js';
import OpenInput from './OpenInput.js';
import OpenPercentInput from './OpenPercentInput.js';
import TableHead from './TableHead.js';
import RowHead from './RowHead.js';
import Notes from './Notes.js';
import TableLongHead from './TableLongHead.js';

class DamageCalculator extends React.Component {	
	constructor(props) {
		super(props);
        
        // Attacking Hero
        this.updateHeroAttack = this.updateHeroAttack.bind(this);
        this.updateHeroSkillMod = this.updateHeroSkillMod.bind(this);
        this.updateHeroDamageMod = this.updateHeroDamageMod.bind(this);
        this.updateHeroCritDam = this.updateHeroCritDam.bind(this);
        this.updateHeroAdvMod = this.updateHeroAdvMod.bind(this);
        this.updateHeroAttackBuff = this.updateHeroAttackBuff.bind(this);

        // Attacking Soldier
        this.updateSoldierAttack = this.updateSoldierAttack.bind(this);
        this.updateSoldierDamageMod = this.updateSoldierDamageMod.bind(this);
        this.updateSoldierCritDam = this.updateSoldierCritDam.bind(this);
        this.updateSoldierAdvMod = this.updateSoldierAdvMod.bind(this);
        this.updateSoldierAttackBuff = this.updateSoldierAttackBuff.bind(this);
        this.updateSoldierTroopsLeft = this.updateSoldierTroopsLeft.bind(this);

        // Defending Hero
        this.updateHeroDefense = this.updateHeroDefense.bind(this);
        this.updateHeroDamReceived = this.updateHeroDamReceived.bind(this);
        this.updateHeroDefBuff = this.updateHeroDefBuff.bind(this);

        // Defending Soldier
        this.updateSoldierDefense = this.updateSoldierDefense.bind(this);
        this.updateSoldierDamReceived = this.updateSoldierDamReceived.bind(this);
        this.updateSoldierDefBuff = this.updateSoldierDefBuff.bind(this);


		this.state = {
            language: this.props.language,

            // Attacking Hero
            hero_attack: '',
            hero_skill_mod: '100',
            hero_damage_mod: '100',
            hero_crit_damage: '130',
            hero_adv_mod: '100',
            hero_atk_buff: '100',

            // Attacking Soldier
            soldier_attack: '',
            soldier_damage_mod: '100',
            soldier_crit_damage: '130',
            soldier_adv_mod: '100',
            soldier_atk_buff: '100',
            soldier_troops_left: '10',

            // Defending Hero
            hero_defense: '',
            hero_damage_received: '100',
            hero_def_buff: '100',

            // Defending Soldier
            soldier_defense: '',
            soldier_damage_received: '100',
            soldier_def_buff: '100'		
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {language: props.language };
    }	
    
	// Attacking Hero
	updateHeroAttack(stat) {
		this.setState({ hero_attack: stat });
	}
	updateHeroSkillMod(stat) {
		this.setState({ hero_skill_mod: stat });
	}
	updateHeroDamageMod(stat) {
		this.setState({ hero_damage_mod: stat });
	}
	updateHeroCritDam(stat) {
		this.setState({ hero_crit_damage: stat });
	}
	updateHeroAdvMod(stat) {
		this.setState({ hero_adv_mod: stat });
	}
	updateHeroAttackBuff(stat) {
		this.setState({ hero_atk_buff: stat });
	}    
    
	// Attacking Soldier
	updateSoldierAttack(stat) {
		this.setState({ soldier_attack: stat });
	}
	updateSoldierDamageMod(stat) {
		this.setState({ soldier_damage_mod: stat });
	}
	updateSoldierCritDam(stat) {
		this.setState({ soldier_crit_damage: stat });
	}
	updateSoldierAdvMod(stat) {
		this.setState({ soldier_adv_mod: stat });
	}
	updateSoldierAttackBuff(stat) {
		this.setState({ soldier_atk_buff: stat });
	}
	updateSoldierTroopsLeft(stat) {
		this.setState({ soldier_troops_left: stat });
    } 
    
    // Defending Hero
	updateHeroDefense(stat) {
		this.setState({ hero_defense: stat });
	}
	updateHeroDamReceived(stat) {
		this.setState({ hero_damage_received: stat });
	}
	updateHeroDefBuff(stat) {
		this.setState({ hero_def_buff: stat });
    } 

    // Defending Soldier
	updateSoldierDefense(stat) {
		this.setState({ soldier_defense: stat });
	}
	updateSoldierDamReceived(stat) {
		this.setState({ soldier_damage_received: stat });
	}
	updateSoldierDefBuff(stat) {
		this.setState({ soldier_def_buff: stat });
    }      

	render() {
        const final_hero_attack = Math.round(this.state.hero_attack * (+this.state.hero_atk_buff / 100) * (+this.state.hero_adv_mod / 100));
        const final_hero_defense = Math.round(this.state.hero_defense * (+this.state.hero_def_buff / 100));
        const final_soldier_attack = Math.round(this.state.soldier_attack * (+this.state.soldier_atk_buff / 100) * (+this.state.soldier_adv_mod / 100));
        const final_soldier_defense = Math.round(this.state.soldier_defense * (+this.state.soldier_def_buff / 100));

        const hero_hero_damage = ((final_hero_attack - final_hero_defense) * 10) * (this.state.hero_skill_mod / 100);
        const hero_hero_crit_damage = hero_hero_damage * (this.state.hero_crit_damage / 100);
        const hero_soldier_damage = ((final_hero_attack - final_soldier_defense) * 10) * (this.state.hero_skill_mod / 100);
        const hero_soldier_crit_damage = hero_soldier_damage * (this.state.hero_crit_damage / 100);
        const soldier_hero_damage = ((final_soldier_attack - final_hero_defense) * this.state.soldier_troops_left);
        const soldier_hero_crit_damage = soldier_hero_damage * (this.state.soldier_crit_damage / 100);
        const soldier_soldier_damage = ((final_soldier_attack - final_soldier_defense) * this.state.soldier_troops_left);
        const soldier_soldier_crit_dam = soldier_soldier_damage * (this.state.soldier_crit_damage / 100);

        const final_hero_hero_damage = hero_hero_damage * ((+this.state.hero_damage_mod + +this.state.hero_damage_received - 100) / 100);
        const final_hero_hero_crit_damage = hero_hero_crit_damage * ((+this.state.hero_damage_mod + +this.state.hero_damage_received - 100) / 100);
        const final_hero_soldier_damage = hero_soldier_damage * ((+this.state.hero_damage_mod + +this.state.soldier_damage_received - 100) / 100);
        const final_hero_soldier_crit_damage = hero_soldier_crit_damage * ((+this.state.hero_damage_mod + +this.state.soldier_damage_received - 100) / 100);
        const final_soldier_hero_damage = soldier_hero_damage * ((+this.state.soldier_damage_mod + +this.state.hero_damage_received - 100) / 100);
        const final_soldier_hero_crit_damage = soldier_hero_crit_damage * ((+this.state.soldier_damage_mod + +this.state.hero_damage_received - 100) / 100);
        const final_soldier_soldier_damage = soldier_soldier_damage * ((+this.state.soldier_damage_mod + +this.state.soldier_damage_received - 100) / 100);
        const final_soldier_soldier_crit_dam = soldier_soldier_crit_dam * ((+this.state.soldier_damage_mod + +this.state.soldier_damage_received - 100) / 100);

		return (
			<div class="container">
			    <div class="table-responsive">
                    <table class="table" id="attacker_calculation">
                        <thead class="thead-dark">
                            <tr>
                                <TableLongHead text="attacker" length="8" lang={this.state.language} />
                            </tr>
                        </thead>                        
                        <thead class="thead-dark">
                            <tr>
                                <TableHead text="status" lang={this.state.language} />
                                <TableHead text="attack" lang={this.state.language} />
                                <TableHead text="skill_mod" lang={this.state.language} />
                                <TableHead text="damage_mod" lang={this.state.language} />
                                <TableHead text="crit_dmg" lang={this.state.language} />
                                <TableHead text="adv_mod" lang={this.state.language} />
                                <TableHead text="atk_buff" lang={this.state.language} />
                                <TableHead text="troops_left" lang={this.state.language} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <RowHead text="hero" lang={this.state.language} />
                                <OpenInput id="hero_attack" onInput={this.updateHeroAttack} />
                                <OpenPercentInput id="hero_skill_mod" defaultval="100" onInput={this.updateHeroSkillMod} />
                                <OpenPercentInput id="hero_damage_mod" defaultval="100" onInput={this.updateHeroDamageMod} />
                                <OpenPercentInput id="hero_crit_damage"  defaultval="130" onInput={this.updateHeroCritDam} />
                                <OpenPercentInput id="hero_adv_mod"  defaultval="100" onInput={this.updateHeroAdvMod} />
                                <OpenPercentInput id="hero_atk_buff" defaultval="100" onInput={this.updateHeroAttackBuff} />
                                <ClosedInput id="hero_troops_left" />
                            </tr>
                            <tr>
                                <RowHead text="soldier" lang={this.state.language} />
                                <OpenInput id="soldier_attack" onInput={this.updateSoldierAttack} />
                                <ClosedInput id="soldier_skill_mod" />
                                <OpenPercentInput id="soldier_damage_mod" defaultval="100" onInput={this.updateSoldierDamageMod} />
                                <OpenPercentInput id="soldier_crit_damage"  defaultval="130" onInput={this.updateSoldierCritDam} />
                                <OpenPercentInput id="soldier_adv_mod"  defaultval="100" onInput={this.updateSoldierAdvMod} />
                                <OpenPercentInput id="soldier_atk_buff" defaultval="100" onInput={this.updateSoldierAttackBuff} />
                                <OpenInput id="soldier_troops_left"  defaultval="10" onInput={this.updateSoldierTroopsLeft} />			  
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-responsive">
                    <table class="table" id="defender_calculation">
                        <thead class="thead-dark">
                            <tr>
                                <TableLongHead text="defender" length="8" lang={this.state.language} />
                            </tr>
                        </thead>                        
                        <thead class="thead-dark">
                            <tr>
                                <TableHead text="status" lang={this.state.language} />
                                <TableHead text="defense" lang={this.state.language} />
                                <TableHead text="damage_received" lang={this.state.language} />
                                <TableHead text="def_buff" lang={this.state.language} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <RowHead text="hero" lang={this.state.language} />
                                <OpenInput id="hero_defense" onInput={this.updateHeroDefense} />
                                <OpenPercentInput id="hero_damage_received" defaultval="100" onInput={this.updateHeroDamReceived} />
                                <OpenPercentInput id="hero_def_buff" defaultval="100" onInput={this.updateHeroDefBuff} />
                            </tr>
                            <tr>
                                <RowHead text="soldier" lang={this.state.language} />
                                <OpenInput id="soldier_defense" onInput={this.updateSoldierDefense} />
                                <OpenPercentInput id="soldier_damage_received" defaultval="100" onInput={this.updateSoldierDamReceived} />
                                <OpenPercentInput id="soldier_def_buff"  defaultval="100" onInput={this.updateSoldierDefBuff} />	  
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-responsive">
                    <table class="table" id="damage_calculation">
                        <thead class="thead-dark">
                            <tr>
                                <TableLongHead text="Damage" length="3" lang={this.state.language} />
                            </tr>
                        </thead>                        
                        <thead class="thead-dark">
                            <tr>
                                <TableHead text="status" lang={this.state.language} />
                                <TableHead text="Damage" lang={this.state.language} />
                                <TableHead text="crit_damage" lang={this.state.language} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <RowHead text="hero_to_hero" lang={this.state.language} />
                                <ClosedInput id="hero_hero_dam" value={Math.max(0, final_hero_hero_damage)} />
                                <ClosedInput id="hero_hero_crit_dam" value={Math.max(0, final_hero_hero_crit_damage)} />
                            </tr>
                            <tr>
                                <RowHead text="hero_to_soldier" lang={this.state.language} />
                                <ClosedInput id="hero_soldier_dam" value={Math.max(0, final_hero_soldier_damage)} />
                                <ClosedInput id="hero_soldier_crit_dam" value={Math.max(0, final_hero_soldier_crit_damage)} />
                            </tr>
                            <tr>
                                <RowHead text="soldier_to_hero" lang={this.state.language} />
                                <ClosedInput id="soldier_hero_dam" value={Math.max(0, final_soldier_hero_damage)} />
                                <ClosedInput id="soldier_hero_crit_dam" value={Math.max(0, final_soldier_hero_crit_damage)} />
                            </tr>
                            <tr>
                                <RowHead text="soldier_to_soldier" lang={this.state.language} />
                                <ClosedInput id="soldier_soldier_dam" value={Math.max(0, final_soldier_soldier_damage)} />
                                <ClosedInput id="soldier_soldier_crit_dam" value={Math.max(0, final_soldier_soldier_crit_dam)} />
                            </tr>                            
                        </tbody>
                    </table>
                </div>                
				<div class="notes">
                    <Notes text="damage_note" lang={this.state.language} />
					<Notes text="aim_note" lang={this.state.language} />
					<Notes text="advmod_note" lang={this.state.language} />
					<Notes text="effective_note" lang={this.state.language} />
					<Notes text="range_at_close_note" lang={this.state.language} />
					<Notes text="infantry_adv_note" lang={this.state.language} />
					<Notes text="lance_adv_note" lang={this.state.language} />
					<Notes text="calv_adv_note" lang={this.state.language} />
					<Notes text="priest_adv_note" lang={this.state.language} />
					<Notes text="archer_adv_note" lang={this.state.language} />
				</div>				
			</div>
		)
	}
}

export default DamageCalculator;