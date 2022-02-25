/**
 * @description 通过后端返回的数据结构，添加数据分类字段有助于渲染
 * @param type
 * 1 物料的卡片
 * 2 浏览网页的卡片
 * 3 显示操作的卡片
 * 4 赢单的卡片
 */
 export const getCardType = (item, materials) => {
    let type = 0;
    // 如果materials只有一个元素并且event_type为8的话表示跟进记录
    if (materials.length === 1 && item.event_type === 8) {
      // 第一个元素有chat_progress属性，表示会话存档
      if ("chat_progress" in materials[0]) {
        type = 5;
      } else {
        //否则表示跟进记录
        type = 6;
      }
      //如果history_car是business_win，表示商机的赢单
    } else if (item.history_car === "business_win") {
      type = 4;
      //如果有history_car是form_add，表示市场表单提交
    } else if (item.history_car === "form_add") {
      type = 7;
      //如果有web_site_his属性的话就表示是浏览网页的card
    } else if ("web_site_his" in item) {
      //如果display_type为2的话表示是推广广告
      if (item.web_site_his.display_type === 2) {
        type = 8;
      } else {
        type = 2;
      }
      //物料的样式
    } else if (materials.length > 0) {
      type = 1;
      //如果materials没有的话那就表示只有一些操作的card
    } else if (materials.length === 0) {
      type = 3;
    }
    return type;
  };
  
export const filterData = (data) => {
    //如果material_type是1的话表示是文章，取material_logo
    //如果material_type是2的话表示是文件，通过material_url获取图标
    const getIcon = (item) => {
      return item.material_type === 1 ? item.material_logo : getFileTypeIcon(item.material_url);
    };
    const { duration = 0, event_type, materials = [], share_info = {} } = data;
    const { share_type_desc = "" } = share_info;
    const duration_desc = event_type === 1 ? formatSeconds(duration) : "";
    const materials_temp = materials.map((item) => {
      return { ...item, material_icon: getIcon(item) };
    });
    const cardType = getCardType(data, materials_temp);
    return {
      ...data,
      duration_desc,
      share_type_desc,
      cardType,
      //分享链路要获取material_id和material_name
      materials: materials_temp,
      material_id: materials.length > 0 ? materials[0].id : "",
      material_name: materials.length > 0 ? materials[0].material_name : "",
    };
  }
import moment from "moment";
moment.locale("zh-cn");

/**
 * moment的进一步配置
 * @param val 时间撮等值
 * @param format 格式花
 */
export const formatMoment = (val, format) => {
  if (!val) return "";
  val = Object.prototype.toString.call(val) === "[object String]" ? val * 1 : val;
  //如果format为MM月DD日,今年的话显示MM月DD日，往年的话需要加上年份
  const current_year = new Date().getFullYear() + "";
  const format_year = moment(val).format("YYYY");
  if (["MM月DD日", "MM月DD日 HH:mm:ss"].includes(format) && current_year !== format_year) {
    return moment(val).format(`YYYY年${format}`);
  } else {
    return moment(val).format(format);
  }
};

/**
 * 格式化手机号 将13671587169 格式化成 136 7158 7169
 * @param val 手机号码
 */
export const formatPhone = (val) => {
  if (!val) return;
  val = val + "";
  return `${val.slice(0, 3)} ${val.slice(3, 7)} ${val.slice(7)}`;
};

/**
 * 判断是否为空
 * @param value
 */
export const isEmpty = (value) => {
  if (value === null || value === "" || value === undefined || value === "null" || value === "0") {
    return true;
  } else if (typeof value === "string") {
    value = value.replace(/\s/g, "");
    if (value === "") {
      return true;
    }
    return false;
  }
};

/**
 * 获取文件类型图标
 * 如果值为空的话默认是folder.png图片
 * @param file_url 输入文件地址
 */
export const getFileTypeIcon = (file_url) => {
  const base_url = "https://scrm-wx.weiling.cn/h5/monitorFile/material/";
  const type = file_url ? file_url.split(".").pop() : "folder";
  const fileList = {
    pdf: `pdf.png`,
    doc: `word.png`,
    docx: `word.png`,
    ppt: `ppt.png`,
    xls: `excel.png`,
    xlsx: `excel.png`,
    folder: `folder.png`,
  };
  return !fileList[type] ? file_url : base_url + fileList[type];
};

/**
 * 腾讯云图片服务转缩略图
 * 腾讯云图片服务处理网址https://cloud.tencent.com/document/product/460/6929
 * @param url 原始图片地址
 */
export const turnThumbnial = (url) => {
  if (!url) return url;
  const file_type = url.split(".").pop();
  if (file_type === "svg") return url;
  return `${url}?imageView2/1/w/100/h/100/q/85`;
};

/**
 * 判断文件类型是否是图片(临时的)
 */
export const filterPicture = (url) => {
  if (!url) return url;
  const picTypeDict = ["jpg", "jpeg", "png", "gif", "JPEG", "JPG"];
  const file_type = url.split(".").pop();
  if (picTypeDict.includes(file_type)) {
    return url.replace(`.${file_type}`, "");
  } else {
    return url;
  }
};

/**
 * 将秒数换成时分秒格式
 * 比如输入61，输出1分1秒
 */

export const formatSeconds = (value, needShowMoreFiveMinutes = true) => {
  if (!value || value < 5) return "不超过5秒";
  if (typeof value === "string") value = Number(value);
  let theTime = Math.floor(value); // 秒
  let theTime1 = 0; // 分
  let theTime2 = 0; // 小时
  if (theTime >= 60) {
    theTime1 = Math.floor(theTime / 60);
    theTime = Math.floor(theTime % 60);
    if (theTime1 >= 60) {
      theTime2 = Math.floor(theTime1 / 60);
      theTime1 = Math.floor(theTime1 % 60);
    }
  }
  let result = theTime === 0 ? "" : "" + Math.floor(theTime) + "秒";
  if (theTime1 > 0) {
    result = "" + Math.floor(theTime1) + "分钟" + result;
    //如果超过5分钟的话就显示超过5分钟
    if (Math.floor(theTime1) === 5 && needShowMoreFiveMinutes) return "超过5分钟";
  }
  if (theTime2 > 0) {
    result = "" + Math.floor(theTime2) + "小时" + result;
  }
  return result;
};