import React, { Component } from 'react';
import imgPath from './imgPath'
import './index.css';

const allImages = 51
export default class ImageSwiper extends Component {

	state = {
		curshow: -1,
		count: 0,
		progress: 0
	}

	onLoadHandler = (e) => {
		let _count = this.state.count
		_count++
		this.setState({
			count: _count,
			curshow: _count === allImages ? 0 : -1,
			progress: Math.floor(_count * 100 / allImages)
		})
	}

	renderImage() {
		let source = imgPath.getImagePath(allImages)
		let imageArr = []
		for (let i = 0; i < source.length; i++) {
			imageArr.push(<img
				key={i}
				src={source[i]}
				style={{
					display: this.state.curshow === i ? 'block' : 'none'
				}}
				onLoad={this.onLoadHandler}
				onError={this.onErrorHandler}
			/>)
		}
		return imageArr
	}

	run = () => {
		let _curshow = this.state.curshow
		if (_curshow >= allImages - 1 && this.direction === 'left') {
			// _curshow = 0
			_curshow = allImages - 2
		} else if (_curshow <= 0 && this.direction === 'right') {
			// _curshow = allImages - 1
			_curshow = 1
		}
		this.direction === 'left' ? _curshow++ : _curshow--;
		this.setState({
			curshow: _curshow
		}, () => {
			this.canmove = false
		})
	}

	render() {
		return <div className='imageSwiper-container'
			style={{
				backgroundColor: this.state.curshow === -1 ? 'rgba(0,0,0,.3)' : 'transparent',
				pointerEvents: this.state.curshow === -1 ? 'none' : undefined
			}}
			onTouchStart={e => {
				e.preventDefault()
				e.stopPropagation
				this.canmove = false
				this.touchTime = new Date();
				this.touchPoint = {
					x: e.touches[0].screenX,
					y: e.touches[0].screenY
				}
				this.timer = setInterval(() => {
					if (this.canmove) {
						this.run()
					}
				}, 60)
			}}
			onTouchMove={e => {
				e.preventDefault()
				e.stopPropagation
				let distance = e.touches[0].screenY - this.touchPoint.y
				this.touchPoint = {
					x: e.touches[0].screenX,
					y: e.touches[0].screenY
				}
				if (distance < 0) {
					this.canmove = true
					this.direction = 'right'
				} else if (distance > 0) {
					this.canmove = true
					this.direction = 'left'
				}
			}}
			onTouchEnd={e => {
				e.preventDefault()
				e.stopPropagation
				this.touchTime = undefined;
				clearInterval(this.timer)
				this.timer = undefined;
			}}>
			<div className='load-wrap'
				style={{
					display: this.state.curshow === -1 ? 'block' : 'none'
				}}>
				<div className='load-progess'
					style={{
						width: `${this.state.progress}%`
					}}>
					<span>{`${this.state.progress}%`}</span>
				</div>
			</div>
			{this.renderImage()}
		</div >
	}
}