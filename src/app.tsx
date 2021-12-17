import { createLogger } from 'redux-logger';
import { plugin } from 'umi';
import { message } from 'antd';

let event = '';

// plugin.register({
//   apply: {
//     dva: {
//       config: {
//         onError: (e: Error) => {
//           console.log(e, 'dva:::::::::::::')
//         },
//       },
//     },
//   },
//   path: 'dva-on-error',
// })

// window.onerror = function (msg, url, row, col, error) {
//       console.log('错误信息 onerror', {msg, url, row, col, error})
//       return true;
// }

document.onclick = function (e, m) {
  console.log(e);
  event = {
    type: e.type,
    html: e.path[0].outerHTML,
  };
};

// componentDidCatch(error, info) {
//     // 发生异常时打印错误
//     console.log('componentDidCatch',error);
// }

window.addEventListener(
  'error',
  (e) => {
    // console.log('404错误');
    console.log(e, e.lineno, 'error');
    if (e instanceof ErrorEvent) {
      console.log('脚本错误');
    } else if (e instanceof Event) {
      console.log('资源错误');
    }
    setTimeout(() => {
      let IMG = new Image();
      // console.log(event)
      let src = e.target.localName
        ? `api/errinfo?type=${e.target.localName}&url=${e.target.baseURI}`
        : `api/errinfo?type=${event.type}&html=${event.html}&url=${e.target.resourceBaseUrl}&lineno=${e.lineno}&colno=${e.colno}`;
      IMG.src = src;
      IMG = null;
      src = null;
    }, 0);
  },
  true,
);
window.addEventListener('unhandledrejection', function (e) {
  throw e.reason;
});
export const dva = {
  config: {
    // onAction: createLogger(),
    onError(e: Error) {
      // console.log(window)
      message.error(e.statusText, 3);
      let IMG = new Image();
      let src = `api/errinfo?type=apierror&errapi=${e.config.url}&url=${window.location.href}&status=${e.status}`;
      IMG.src = src;
      IMG = null;
      src = null;
    },
  },
};
