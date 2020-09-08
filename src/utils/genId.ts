// 生成业务订单号
function genOrderId(): string {
  return new Date().getTime()
    .toString() + Math.floor(Math.random() * 100000).toString();
}

module.exports = {
  genOrderId,
};
