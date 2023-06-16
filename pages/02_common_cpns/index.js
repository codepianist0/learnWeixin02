// pages/02_commin_cpns/index.js
Page({
	data: {
		message: "hello code-panist",
		imgPath: "",
		viewColors: ["red", "blue", "green", "orange", "purple", "yellow"],
		message: "",
		banners: [],
	},
	onLoad() {
		// 不支持promist
		wx.request({
			url: 'http://123.207.32.32:8000/home/multidata',
			success: (res) => {
				const banners = res.data.data.banner.list
				this.setData({
					banners
				})
			}
		})
	},
	// 获取用户信息
	getUserInfo(event) {
		wx.getUserProfile({
      desc: 'desc',
      // success: (res) => {
      //   console.log(res);
      // }
    }).then(res => {
      console.log(res);
		})
	},
	// 获取电话（个人用户没有权限）
	getPhoneNumber(event) {
		console.log(event);
	},
	// 本地选择图片
	selectImageClick(event) {
		wx.chooseMedia({
			mediaType: "image"
		}).then(res => {
			const image = res.tempFiles[0].tempFilePath
			this.setData({
				imgPath: image
			})
		})
	},
	// scrollView的监听
	getScroll(event) {
		console.log(event.detail.scrollTop);
	},
	scorllToupper() {
		console.log("滚动到开始");
	},
	scorllTolower() {
		console.log("滚动到结束位置");
	},
	input(event) {
		console.log(event);
	}
})