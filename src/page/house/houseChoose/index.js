import React, { Component } from 'react';
import config from '../../../common/config'
import imgFactory from '../../../common/imgFactory'
import './index.css';

export default class HouseChoose extends Component {

	state = {
		curArrow: 0
	}

	renderImgBtn() {
		let { handler } = this.props
		return config.houseType.map((d, i) => {
			return <div className='house_btn' key={i}
				onClick={() => {
					handler && handler({
						house_type: i
					})
					this.setState({
						curArrow: i
					})
				}}>
				<img className='arrow' style={{
					display: this.state.curArrow === i ? 'block' : 'none'
				}} src={imgFactory.arrow} alt="" />
				<img src={imgFactory[`houseChoose_${i + 1}`]} alt="" />
			</div>
		})
	}

	render() {
		let { style } = this.props
		return <div className='house-choose-container'
			style={{ ...style }}>
			<i className='line'></i>
			<div className='btn-wrap'>
				{this.renderImgBtn()}
			</div>
		</div>
	}
}