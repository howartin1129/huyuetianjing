import React, { Component } from 'react';
import HouseChoose from './houseChoose'
import RoomChoose from './roomChoose'
import conifg from '../../common/config'
import './index.css';
import imgFactory from '../../common/imgFactory';

export default class House extends Component {

	state = {
		house_type: 0
	}

	componentDidMount() {
		window.embedpano({
			xml: `./krpano/krpano.xml`,
			target: `krpano`,
			html5: "auto",
			mobilescale: 1.0,
			passQueryParameters: true,
			onready: (e) => {
				this.krpano = e
			}
		})
	}

	roomChooseHandler(e) {
		this.krpano.call(`skin_loadscene(${e.name},get(skin_settings.loadscene_blend));`);
	}

	render() {
		return <div className='house-container'>
			<div id='krpano'>
				<div className='huxingtu-container'>
					<img src={imgFactory[`hxt_${this.state.house_type}`]} alt="" />
				</div>
			</div>
			<RoomChoose house_type={this.state.house_type} handler={e => { this.roomChooseHandler(e) }} />
			<HouseChoose handler={e => {
				this.krpano.call(`skin_loadscene(${conifg.houseType[e.house_type].imgarr[0]},get(skin_settings.loadscene_blend));`);
				this.setState({
					house_type: e.house_type
				})
			}} />
		</div >
	}
}