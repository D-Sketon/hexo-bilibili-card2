"use strict";

const fs = require("hexo-fs");
const path = require("path");
const css = hexo.extend.helper.get("css").bind(hexo);

const getVideoMessage = require("./lib/getVideoMessage.js");
const template = require("./lib/template.js");

hexo.extend.generator.register("bili_asset", () => [
  {
    path: "css/bilicard.css",
    data: () =>
      fs.createReadStream(path.resolve(__dirname, "./source", "bilicard.css")),
  },
]);

hexo.extend.generator.register("bili_play", () => [
  {
    path: "svg/play.svg",
    data: () =>
      fs.createReadStream(path.resolve(__dirname, "./source", "play.svg")),
  },
]);

hexo.extend.generator.register("bili_danmaku", () => [
  {
    path: "svg/danmaku.svg",
    data: () =>
      fs.createReadStream(path.resolve(__dirname, "./source", "danmaku.svg")),
  },
]);

hexo.extend.generator.register("bili_up", () => [
  {
    path: "svg/up.svg",
    data: () =>
      fs.createReadStream(path.resolve(__dirname, "./source", "up.svg")),
  },
]);

hexo.extend.tag.register(
  "bilicard2",
  async (args) => await template(await getVideoMessage(args[0])),
  {
    async: true,
  }
);

hexo.extend.injector.register(
  "head_begin",
  () => {
    return css("/css/bilicard.css");
  },
  "post"
);
