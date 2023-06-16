// pages/01_register_page/index.js
Page({
	data: {
		// 作用二：初始化一些数据，方便wxml引用展示
		banners: [],
		recommends: [],
		colors: [ "red", "blue", "orange", "green" ]
	},

	// 作用一：发送网络请求，请求数据
	onLoad() {
		wx.request({
			url: 'http://123.207.32.32:8000/home/multidata',
			success: (res) => {
				const data = res.data.data
				const banners = data.banner.list
				const recommends = data.recommend.list
				this.setData({banners, recommends}) 
			}	
		},)
	},
	// 作用三：监听wxml中的事件，绑定对应的事件函数
	btnClick() {
		console.log("clickBtn1");
	},
	btnColorClick(event) {
		console.log(event.target.dataset.item);
	},
	// 作用四：其他监听
	// 下拉更新
	onPullDownRefresh() {
		console.log("onpulldownRefresh");
	},
	// 触底
	onReachBottom() {
		console.log("reachBottom");
	},
	// 滚动监听
	onPageScroll(event) {
		console.log("event:", event);
	}
})