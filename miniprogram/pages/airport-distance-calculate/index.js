// pages/airport-distance-calculate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    time: null,
    toAirportTime: 30,
    calculateTime: '暂无',
    calculateOnboardingTime: '暂无'
  },
  onDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  onCalculateTime() {
    // 如何计算飞机时间？
    // 飞机起飞前45min停止办理乘机服务，如果路途30分钟则约送机提前2小时(120分钟)出发，需要留够buffer
    if (this.data.date && this.data.time) {
      const targetTime = new Date(`${this.data.date} ${this.data.time}`)
      const setoutTime = targetTime.getTime() - (120 - 30 + this.data.toAirportTime) * 60 * 1000
      const onboardingTime = targetTime.getTime() - 20 * 60 * 1000
      this.setData({
        calculateTime: this.formatTime(new Date(setoutTime)),
        calculateOnboardingTime: this.formatTime(new Date(onboardingTime))
      })
    }
    // 起飞前 20 分钟停止登机
  },
  formatTime(myDate) {
    const year = myDate.getFullYear();
    const month = String(myDate.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，需要加1
    const day = String(myDate.getDate()).padStart(2, '0');
    const hours = String(myDate.getHours()).padStart(2, '0');
    const minutes = String(myDate.getMinutes()).padStart(2, '0');
    // 格式化为 "YYYY-MM-DD HH:mm" 字符串
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDateTime
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const nowDate = new Date()

    if (!this.data.time && !this.data.date) {
      const year = nowDate.getFullYear();
      const month = String(nowDate.getMonth() + 1).padStart(2, '0'); // 注意月份是从0开始的，因此要加1
      const day = String(nowDate.getDate()).padStart(2, '0');
      const hours = String(nowDate.getHours()).padStart(2, '0');
      const minutes = String(nowDate.getMinutes()).padStart(2, '0');
      this.setData({
        date: `${year}-${month}-${day}`,
        time: `${hours}:${minutes}`
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})