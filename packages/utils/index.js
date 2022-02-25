/**
 * 防抖函数
 * @param func 目标函数
 * @param wait 延迟执行毫秒数
 * @param immediate 立即执行， false - 延迟执行
 */
export const onDebounce = function(func, delay = 1000, immediate = false) {
  let timer = null;
  return function(...args) {
    if (immediate) {
      func.apply(this, [...args]);
      immediate = false;
      return;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, [...args]);
    }, delay);
  };
};

/**
 * 腾讯云图片服务转缩略图
 * 腾讯云图片服务处理网址https://cloud.tencent.com/document/product/460/6929
 * @param url 原始图片地址
 */
export const isBase64 = (url) => {
  const reg = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@//?%\s]*?)\s*$/i;
  return reg.test(url);
};

/**
 * @description 全局提示，包括dialog和notify
 */
 import { Dialog, Notify, Toast } from "vant";
 export const useMessage = () => {
   const duration = 1000;
   const onNotify = (message) => Notify({ message, type: "success", duration });
   const onWarning = (message) => Notify({ message, type: "warning", duration });
   const onConfirm = (params) => {
     return new Promise((resolve, reject) => {
       Dialog.confirm(params).then(resolve, reject);
     });
   };
   const onConfirmCancel = () => {
     Dialog.close();
   };
   const onToast = (content, type) => {
     if (type) {
       Toast[type](content);
     } else {
       Toast(content);
     }
   };
   return {
     onNotify,
     onWarning,
     onConfirm,
     onConfirmCancel,
     onToast,
   };
 };
 