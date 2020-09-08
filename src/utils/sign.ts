import crypto from 'crypto';

// 参数签名
function sign(params: object, signKey: string, privateKey): string {
  const keys = Object.keys(params).sort();
  const signStr = keys
    .map(key => `${key.toString()}=${params[key].toString()}`)
    .concat([signKey])
    .join('&');

  const signer = crypto.createSign('SHA256');
  signer.update(signStr);
  return signer.sign(privateKey, 'base64');
}

module.exports = {
  sign,
};
