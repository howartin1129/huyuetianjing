import React, { Component } from 'react';
import imgFactory from '../../../common/imgFactory'
import config from '../../../common/config'
import './index.css';
const Swiper = window.Swiper
export default class RoomChoose extends Component {

	componentDidMount() {
		this.roomSwiper = new Swiper('.dh-swiper-container', {
			slidesPerView: 4
		})
	}

	componentDidUpdate() {
		if (this.props.sence_index === 0) {
			this.roomSwiper.slideTo(0, 1000, false)
		}
		this.roomSwiper.update()
	}

	renderSlide() {
		let { house_type, sence_index, handler } = this.props
		return config.houseType[house_type].imgarr.map((name, i) => {
			return <div className="swiper-slide"
				key={i}>
				<div className='roomchoose-container'
					onClick={e => {
						handler && handler({
							name: name
						})
					}}>
					<img src={sence_index === i ? imgFactory[name] : imgFactory[`${name}_un`]} alt="" />
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