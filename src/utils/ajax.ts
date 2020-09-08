export function serializeParam(param: any, encode = false): string {
  if (!param) return '';
  const qstr:string[] = [];
  Object.keys(param).forEach((key) => {
    if (typeof param[key] !== 'undefined' || param[key] !== null) {
      qstr.push(`${key}=${encode ? encodeURIComponent(param[key]) : param[key]}`);
    }
  });
  return qstr.join('&');
}

interface AjaxOption {
  method: 'POST' | string
  url: string
  param?: object
  success?: Function
  error?: Function
  complete?: Function
  timeout?: number
  onTimeout?: Function
}

export default function ajax(option: AjaxOption) {
  const o = option;
  const m = o.method.toLocaleUpperCase();
  const isPost = 'POST' === m;

  const xhr = new XMLHttpRequest();

  const qstr = serializeParam(o.param);

  // get 请求 参数处理
  qstr && !isPost && (o.url += (o.url.indexOf('?') > -1 ? '&' : '?') + qstr);

  xhr.open(m, o.url, true);
  isPost && xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
    const { status } = xhr;
    if (status >= 200 && status < 300) {
      let result;
      try {
        // eslint-disable-next-line no-eval
        result = eval(`(${xhr.responseText})`);
      } catch (e) {
        console.log(e.message);
      }
      o.success && o.success.call(xhr, result);
    } else {
      o.error && o.error.call(xhr, xhr);
    }
    o.complete && o.complete.call(xhr, xhr);
  };

  xhr.onerror = function () {
    o.error && o.error.call(xhr, xhr);
    o.complete && o.complete.call(xhr, xhr);
  };

  xhr.onabort = xhr.onerror;

  if (o.timeout) {
    xhr.timeout = o.timeout;
    xhr.ontimeout = function () {
      o.onTimeout && o.onTimeout.call(xhr, xhr);
      o.complete && o.complete.call(xhr, xhr);
    };
  }

  xhr.send(isPost ? qstr : void (0));

  return xhr;
}
