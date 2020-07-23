import React from 'react';
import HeroOptions from './HeroOptions.js';
import HeroDefaultOption from './HeroDefaultOption.js';
import OptionHeader from './OptionHeader.js';

class HeroList extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onInput(e.target.value);
	}		

	render() {
		return (
			<div class="form-group hero_changer">
			  	<select class="form-control" id="lang" onChange={this.handleChange}>
				  	<HeroDefaultOption otype="option_default" lang={this.props.lang} />
					<OptionHeader stype="lang1" lang={this.props.lang} />	
                    <HeroOptions otype="aaron_marshal" lang={this.props.lang} />
					<HeroOptions otype="betty_queen" lang={this.props.lang} />
					<HeroOptions otype="betty_swordsman" lang={this.props.lang} />
					<HeroOptions otype="bozel_dp" lang={this.props.lang} />
					<HeroOptions otype="bozel_dl" lang={this.props.lang} />
					<HeroOptions otype="chris_princess" lang={this.props.lang} />
					<HeroOptions otype="chris_valkryie" lang={this.props.lang} />
					<HeroOptions otype="jessica_wizard" lang={this.props.lang} />
					<HeroOptions otype="lance_rk" lang={this.props.lang} />
					<HeroOptions otype="lance_dm" lang={this.props.lang} />
					<HeroOptions otype="ledin_templar" lang={this.props.lang} />
					<HeroOptions otype="ledin_king" lang={this.props.lang} />
					<HeroOptions otype="leticia_km" lang={this.props.lang} />
					<HeroOptions otype="narm_pm" lang={this.props.lang} />
					<HeroOptions otype="narm_ranger" lang={this.props.lang} />

					<OptionHeader stype="lang2" lang={this.props.lang} />	
					<HeroOptions otype="bern_brave" lang={this.props.lang} />
					<HeroOptions otype="bern_emperor" lang={this.props.lang} />
					<HeroOptions otype="cherie_dm" lang={this.props.lang} />
					<HeroOptions otype="cherie_hm" lang={this.props.lang} />
					<HeroOptions otype="egbert_dc" lang={this.props.lang} />
					<HeroOptions otype="egbert_hermit" lang={this.props.lang} />
					<HeroOptions otype="elwin_gm" lang={this.props.lang} />
					<HeroOptions otype="elwin_hero" lang={this.props.lang} />
					<HeroOptions otype="hein_martyr" lang={this.props.lang} />
					<HeroOptions otype="hein_wizard" lang={this.props.lang} />
					<HeroOptions otype="imelda_bishop" lang={this.props.lang} />
					<HeroOptions otype="imelda_queen" lang={this.props.lang} />
					<HeroOptions otype="keith_dm" lang={this.props.lang} />
					<HeroOptions otype="lana_dp" lang={this.props.lang} />
					<HeroOptions otype="lana_martyr" lang={this.props.lang} />
					<HeroOptions otype="leon_rk" lang={this.props.lang} />
					<HeroOptions otype="leon_sk" lang={this.props.lang} />
					<HeroOptions otype="lester_sk" lang={this.props.lang} />
					<HeroOptions otype="liana_hermit" lang={this.props.lang} />
					<HeroOptions otype="liana_prophet" lang={this.props.lang} />
					<HeroOptions otype="rodga_shadow" lang={this.props.lang} />
					<HeroOptions otype="scott_km" lang={this.props.lang} />
					<HeroOptions otype="sonya_sm" lang={this.props.lang} />
					<HeroOptions otype="sonya_uc" lang={this.props.lang} />
                    <HeroOptions otype="vargas_brave" lang={this.props.lang} />
                    <HeroOptions otype="vargas_rv" lang={this.props.lang} />
                    <HeroOptions otype="laird_km" lang={this.props.lang} />

					<OptionHeader stype="lang3" lang={this.props.lang} />	
					<HeroOptions otype="alte_dm" lang={this.props.lang} />
					<HeroOptions otype="alte_gm" lang={this.props.lang} />
					<HeroOptions otype="anna_oracle" lang={this.props.lang} />
					<HeroOptions otype="d_hm" lang={this.props.lang} />
					<HeroOptions otype="d_rk" lang={this.props.lang} />
					<HeroOptions otype="dios_bm" lang={this.props.lang} />
					<HeroOptions otype="emerick_gm" lang={this.props.lang} />
					<HeroOptions otype="emerick_rk" lang={this.props.lang} />
					<HeroOptions otype="fera_wq" lang={this.props.lang} />
					<HeroOptions otype="fera_ds" lang={this.props.lang} />
					<HeroOptions otype="freya_rv" lang={this.props.lang} />
					<HeroOptions otype="freya_valkyrie" lang={this.props.lang} />
					<HeroOptions otype="gerold_dk" lang={this.props.lang} />
					<HeroOptions otype="gerold_re" lang={this.props.lang} />
					<HeroOptions otype="juglar_bahamut" lang={this.props.lang} />
					<HeroOptions otype="juglar_behemoth" lang={this.props.lang} />
					<HeroOptions otype="juglar_hydra" lang={this.props.lang} />
					<HeroOptions otype="kirikaze_hm" lang={this.props.lang} />
					<HeroOptions otype="kirikaze_ss" lang={this.props.lang} />
					<HeroOptions otype="lewin_swordsman" lang={this.props.lang} />
					<HeroOptions otype="liffany_hermit" lang={this.props.lang} />
					<HeroOptions otype="liffany_wizard" lang={this.props.lang} />
					<HeroOptions otype="luna_bm" lang={this.props.lang} />
					<HeroOptions otype="luna_pm" lang={this.props.lang} />
					<HeroOptions otype="pierre_sm" lang={this.props.lang} />
					<HeroOptions otype="silverwolf_ranger" lang={this.props.lang} />
					<HeroOptions otype="silverwolf_shadow" lang={this.props.lang} />
					<HeroOptions otype="sophia_prophet" lang={this.props.lang} />											
					<HeroOptions otype="sophia_martyr" lang={this.props.lang} />
                    <HeroOptions otype="tiaris_hk" lang={this.props.lang} />
                    <HeroOptions otype="tiaris_uc" lang={this.props.lang} />
                    <HeroOptions otype="varna_dm" lang={this.props.lang} />
                    <HeroOptions otype="varna_ranger" lang={this.props.lang} />

					<OptionHeader stype="lang4" lang={this.props.lang} />	
					<HeroOptions otype="angelina_dm" lang={this.props.lang} />
					<HeroOptions otype="angelina_sm" lang={this.props.lang} />
					<HeroOptions otype="gizalof_ms" lang={this.props.lang} />
					<HeroOptions otype="gizalof_mm" lang={this.props.lang} />
					<HeroOptions otype="landius_gm" lang={this.props.lang} />
					<HeroOptions otype="landius_rk" lang={this.props.lang} />
					<HeroOptions otype="lanford_km" lang={this.props.lang} />
					<HeroOptions otype="lanford_ss" lang={this.props.lang} />
					<HeroOptions otype="listel_be" lang={this.props.lang} />
					<HeroOptions otype="listell_dg" lang={this.props.lang} />
					<HeroOptions otype="listel_be_5" lang={this.props.lang} />
					<HeroOptions otype="listell_dg_5" lang={this.props.lang} />
					<HeroOptions otype="rachel_ac" lang={this.props.lang} />
					<HeroOptions otype="rachel_oracle" lang={this.props.lang} />
					<HeroOptions otype="serena_rv" lang={this.props.lang} />
					<HeroOptions otype="serena_gc" lang={this.props.lang} />
					<HeroOptions otype="shelfaniel_empress" lang={this.props.lang} />
					<HeroOptions otype="shelfaniel_wizard" lang={this.props.lang} />
                    <HeroOptions otype="wiler_prophet" lang={this.props.lang} />
                    <HeroOptions otype="wiler_tactician" lang={this.props.lang} />

					<OptionHeader stype="lang5" lang={this.props.lang} />
					<HeroOptions otype="alfred_sm" lang={this.props.lang} />	
					<HeroOptions otype="claret_dm" lang={this.props.lang} />
					<HeroOptions otype="claret_ss" lang={this.props.lang} />
					<HeroOptions otype="claret_dm_5" lang={this.props.lang} />
					<HeroOptions otype="claret_ss_5" lang={this.props.lang} />
					<HeroOptions otype="lambda_wizard" lang={this.props.lang} />
					<HeroOptions otype="lambda_fs" lang={this.props.lang} />
					<HeroOptions otype="omega_hm" lang={this.props.lang} />
					<HeroOptions otype="omega_ranger" lang={this.props.lang} />
					<HeroOptions otype="rainforce_cn" lang={this.props.lang} />
					<HeroOptions otype="rainforce_ss" lang={this.props.lang} />
					<HeroOptions otype="sigma_ranger" lang={this.props.lang} />
					<HeroOptions otype="sigma_vindicator" lang={this.props.lang} />
                    <HeroOptions otype="brenda_god" lang={this.props.lang} />
                    <HeroOptions otype="brenda_rk" lang={this.props.lang} />
                    <HeroOptions otype="virash_om" lang={this.props.lang} />
                    <HeroOptions otype="virash_swordmaster" lang={this.props.lang} />

					<OptionHeader stype="lang_reincarnation" lang={this.props.lang} />	
                    <HeroOptions otype="ares_dm" lang={this.props.lang} />
                    <HeroOptions otype="ares_emperor" lang={this.props.lang} />
                    <HeroOptions otype="florentia_tactician" lang={this.props.lang} />
                    <HeroOptions otype="florentia_ic" lang={this.props.lang} />
                    <HeroOptions otype="licorice_di" lang={this.props.lang} />
                    <HeroOptions otype="licorice_dm" lang={this.props.lang} />
                    <HeroOptions otype="maiya_rm" lang={this.props.lang} />
                    <HeroOptions otype="maiya_martyr" lang={this.props.lang} />
                    <HeroOptions otype="noemi_wizard" lang={this.props.lang} />
                    <HeroOptions otype="noemi_sw" lang={this.props.lang} />
                    <HeroOptions otype="renata_dm" lang={this.props.lang} />
                    <HeroOptions otype="renata_fg" lang={this.props.lang} />
					<HeroOptions otype="rozalia_rk" lang={this.props.lang} />
                    <HeroOptions otype="rozalia_sk" lang={this.props.lang} />
                    <HeroOptions otype="tsubame_shadow" lang={this.props.lang} />
                    <HeroOptions otype="tsubame_ranger" lang={this.props.lang} />

					<OptionHeader stype="lang_mobile" lang={this.props.lang} />
					<HeroOptions otype="almeda_oracle" lang={this.props.lang} />
					<HeroOptions otype="almeda_martyr" lang={this.props.lang} />
					<HeroOptions otype="alustriel_ranger" lang={this.props.lang} />
					<HeroOptions otype="alustriel_wc" lang={this.props.lang} />
					<HeroOptions otype="angelica_creator" lang={this.props.lang} />
					<HeroOptions otype="emilia_rv" lang={this.props.lang} />
					<HeroOptions otype="emilia_templar" lang={this.props.lang} />
					<HeroOptions otype="grenier_gm" lang={this.props.lang} />
					<HeroOptions otype="grenier_bk" lang={this.props.lang} />
					<HeroOptions otype="matthew_dm" lang={this.props.lang} />
					<HeroOptions otype="matthew_ranger" lang={this.props.lang} />
					<HeroOptions otype="matthew_shadow" lang={this.props.lang} />
					<HeroOptions otype="matthew_sm" lang={this.props.lang} />
					<HeroOptions otype="matthew_hero" lang={this.props.lang} />
                    <HeroOptions otype="yjessica_martyr" lang={this.props.lang} />
					<HeroOptions otype="yjessica_wizard" lang={this.props.lang} />
                    <HeroOptions otype="yulia_gb" lang={this.props.lang} />
                    <HeroOptions otype="yulia_princess" lang={this.props.lang} />
                    <HeroOptions otype="zerida_ac" lang={this.props.lang} />
                    <HeroOptions otype="zerida_shadow" lang={this.props.lang} />
                    <HeroOptions otype="akaya_spiritualist" lang={this.props.lang} />
                    <HeroOptions otype="akaya_saintess" lang={this.props.lang} />
                    <HeroOptions otype="kom_mk" lang={this.props.lang} />
                    <HeroOptions otype="kom_um" lang={this.props.lang} />
					<HeroOptions otype="oliver_hm" lang={this.props.lang} />
                    <HeroOptions otype="oliver_bm" lang={this.props.lang} />
					<HeroOptions otype="helena_sm" lang={this.props.lang} />
                    <HeroOptions otype="helena_rk" lang={this.props.lang} />
                    <HeroOptions otype="ilucia_sm" lang={this.props.lang} />
                    <HeroOptions otype="ilucia_rv" lang={this.props.lang} />
                    <HeroOptions otype="sagey_wizard" lang={this.props.lang} />
                    <HeroOptions otype="sagey_gs" lang={this.props.lang} />
                    <HeroOptions otype="shilinka_ss" lang={this.props.lang} />
                    <HeroOptions otype="shilinka_wd" lang={this.props.lang} />
					
					<OptionHeader stype="lang_collab" lang={this.props.lang} />
					<HeroOptions otype="estelle_db" lang={this.props.lang} />
					<HeroOptions otype="estelle_wm" lang={this.props.lang} />
					<HeroOptions otype="hiei_jm" lang={this.props.lang} />
					<HeroOptions otype="hiei_df" lang={this.props.lang} />
					<HeroOptions otype="iris_koubu" lang={this.props.lang} />
					<HeroOptions otype="iris_dk" lang={this.props.lang} />
					<HeroOptions otype="joshua_bf" lang={this.props.lang} />
					<HeroOptions otype="joshua_shadow" lang={this.props.lang} />
					<HeroOptions otype="kazuma_df" lang={this.props.lang} />
					<HeroOptions otype="kazuma_dsw" lang={this.props.lang} />
					<HeroOptions otype="klose_queen" lang={this.props.lang} />
					<HeroOptions otype="klose_valkyrie" lang={this.props.lang} />
					<HeroOptions otype="kurama_past" lang={this.props.lang} />
					<HeroOptions otype="kurama_rose" lang={this.props.lang} />
					<HeroOptions otype="leonhardt_asura" lang={this.props.lang} />
					<HeroOptions otype="leonhardt_blades" lang={this.props.lang} />
					<HeroOptions otype="olivier_bard" lang={this.props.lang} />
					<HeroOptions otype="olivier_ep" lang={this.props.lang} />
					<HeroOptions otype="renne_ad" lang={this.props.lang} />
					<HeroOptions otype="renne_wizard" lang={this.props.lang} />
					<HeroOptions otype="sakura_evilslayer" lang={this.props.lang} />
					<HeroOptions otype="sakura_koubu" lang={this.props.lang} />
                    <HeroOptions otype="sumire_koubu" lang={this.props.lang} />
                    <HeroOptions otype="sumire_ts" lang={this.props.lang} />
                    <HeroOptions otype="toguro_100" lang={this.props.lang} />
                    <HeroOptions otype="toguro_sword" lang={this.props.lang} />
                    <HeroOptions otype="yusuke_dk" lang={this.props.lang} />
                    <HeroOptions otype="yusuke_sd" lang={this.props.lang} />
                    <HeroOptions otype="arianrhod_lm" lang={this.props.lang} />
                    <HeroOptions otype="arianrhod_sm" lang={this.props.lang} />
                    <HeroOptions otype="ashram_dm" lang={this.props.lang} />
                    <HeroOptions otype="ashram_rk" lang={this.props.lang} />
                    <HeroOptions otype="deedlit_es" lang={this.props.lang} />
                    <HeroOptions otype="deedlit_he" lang={this.props.lang} />
                    <HeroOptions otype="altina_wizard" lang={this.props.lang} />
                    <HeroOptions otype="altina_ia" lang={this.props.lang} />
                    <HeroOptions otype="rean_ss" lang={this.props.lang} />
                    <HeroOptions otype="rean_ah" lang={this.props.lang} />
                    <HeroOptions otype="parn_hero" lang={this.props.lang} />
                    <HeroOptions otype="parn_sm" lang={this.props.lang} />
                    <HeroOptions otype="pirotess_ranger" lang={this.props.lang} />
                    <HeroOptions otype="pirotess_dea" lang={this.props.lang} />
			  	</select>	
			</div>
		)
	}
}

export default HeroList;