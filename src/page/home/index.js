import React, { Component } from 'react';
import './index.css';
import config from '../../common/config'
import imgFactory from '../../common/imgFactory'
const $ = window.$
export default class Home extends Component {

	state = {
		loading: true
	}

	render() {
		let { history } = this.props
		return <div className='home-container'>
			{config.loadOnce ? null : <div className='load-page' style={{
				opacity: Number(this.state.loading),
				zIndex: this.state.loading ? 999 : -1
			}}>
				<div className='load-enter'
					onTouchStart={e => {
						$(e.target).css('opacity', '.5')
					}}
					onTouchEnd={e => {
						$(e.target).css('opacity', '1')
						this.setState({
							loading: false
						})
						config.loadOnce = true
					}}>
					<img src={imgFactory.btn_enter} alt="" />
				</div>
			</div>}
			<div className='btn-wrap'>
				<div className='btn-house'
					onTouchStart={e => {
						$(e.target).css('opacity', '.5')
					}}
					onTouchEnd={e => {
						$(e.target).css('opacity', '1')
						history.push('/house')
					}}>
					<img src={imgFactory.btn_house} alt="" />
				</div>
				<div className='btn-garden'
					onTouchStart={e => {
						$(e.target).css('opacity', '.5')
					}}
					onTouchEnd={e => {
						$(e.target).css('opacity', '1')
						history.push('/garden')
					}}>
					<img src={imgFactory.btn_garden} alt="" />
				</div>
			</div>
		</div>
	}
}