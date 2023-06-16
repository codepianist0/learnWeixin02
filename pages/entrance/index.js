// pages/entrance/index.js
Page({
	data: {
		pages: [
			{name: "01_注册页面", path: "/pages/01_register_page/index"},
			{name: "02_常用组件", path: "/pages/02_common_cpns/index"},
			{name: "03_learn-WXSS", path: "/pages/03_learn-WXSS/index"},
		]
	},
	btnClick(event) {
		wx.navigateTo({
			url: event.target.dataset.item.path,
		})
	}
})