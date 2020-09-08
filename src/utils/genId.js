// 生成业务订单号
function genOrderId() {
  return new Date().getTime()
    .toString() + Math.floor(Math.random() * 100000).toString();
}

module.exports = {
  genOrderId,
};
