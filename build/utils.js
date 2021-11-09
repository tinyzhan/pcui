const fs = require("fs");
const path = require("path");
const join = path.join;
const resolve = (dir) => path.join(__dirname, "../", dir);

module.exports = {
  resolve,
  getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const componentEntries = files.reduce((fileObj, item) => {
      //  文件路径
      const itemPath = join(path, item);
      //  在文件夹中
      const isDir = fs.statSync(itemPath).isDirectory();
      const [name, suffix] = item.split(".");
      //  文件中的入口文件
      if (isDir) {
        fileObj[item] = resolve(join(itemPath, "index.js"));
      }
      //  文件夹外的入口文件
      else if (suffix === "js") {
        fileObj[name] = resolve(`${itemPath}`);
      }
      return fileObj;
    }, {});
    return componentEntries;
  },
};
