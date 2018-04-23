function getImagePath(num) {
	let pathArr = []
	for (let i = 0; i < num; i++) {
		let fname
		if (i < 10)
			fname = `0000${i}`
		else if (i < 100)
			fname = `000${i}`
		pathArr.push(require(`../../assets/garden/VRFBSplit_xy_c01(0-500).RGB_color 2_${fname}.jpg`))
	}
	return pathArr
}

export default {
	getImagePath: getImagePath
}