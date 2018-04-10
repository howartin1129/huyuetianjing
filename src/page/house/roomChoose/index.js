import React, { Component } from 'react';
import imgFactory from '../../../common/imgFactory'
import config from '../../../common/config'
import './index.css';
const Swiper = window.Swiper
export default class RoomChoose extends Component {

	state = {
		curPos: 0
	}

	componentDidMount() {
		this.roomSwiper = new Swiper('.dh-swiper-container', {
			slidesPerView: 4
		})
	}

	componentWillReceiveProps() {
		this.setState({
			curPos: 0
		})
	}

	componentDidUpdate() {
		this.roomSwiper.update()
	}

	renderSlide() {
		let { house_type, handler } = this.props
		return config.houseType[house_type].imgarr.map((name, i) => {
			return <div className="swiper-slide"
				key={i}>
				<div className='roomchoose-container'
					onClick={e => {
						handler && handler({
							name: name
						})
						this.setState({
							curPos: i
						})
					}}>
					<img src={this.state.curPos === i ? imgFactory[name] : imgFactory[`${name}_un`]} alt="" />
				</div>
			</div>
		})
	}

	render() {
		return <div className="dh-swiper-container">
			<div className="swiper-wrapper">
				{this.renderSlide()}
			</div>
		</div>
	}
}