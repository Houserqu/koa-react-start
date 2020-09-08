// 生成业务订单号
export function genOrderId(): string {
  return new Date().getTime()
    .toString() + Math.floor(Math.random() * 100000).toString();
}
