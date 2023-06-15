// pages/entrance/index.js
Page({
	data: {
		pages: [
			{name: "01_注册页面", path: "/pages/01_register_page/index"}
		]
	},
	btnClick(event) {
		console.log(event.target.dataset.item.path);
		wx.navigateTo({
			url: event.target.dataset.item.path,
		})
	}
})