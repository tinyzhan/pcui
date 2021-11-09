/**
 * @description 全局提示，包括dialog和notify
 */
import { Dialog, Notify, Toast } from "vant";

const useMessage = () => {
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
export default useMessage;
