<div align = center>
  <h1>hexo-bilibili-card2</h1>
  <img alt="NPM License" src="https://img.shields.io/npm/l/hexo-bilibili-card2">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/hexo-bilibili-card2">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/hexo-bilibili-card2">
  <p align="center">
  基于 <a href="https://github.com/MaxChang3/hexo-bilibili-card">hexo-bilibili-card</a> 的魔改版  
  </p>

</div>

## Install

```bash
npm install hexo-bilibili-card2 --save
```

## Change List

- [x] **适配 Shoka 主题的夜间模式，但可能对其他主题有影响**
- [x] 将所有 `icon` 替换为自制 `svg`
- [x] 播放量支持 **亿**
- [x] 修改页面，使之更接近 `Bilibili` 样式
- [x] 增添~~无用~~鼠标悬浮动画
- [x] `id` 出错时显示更友好
- [x] 优化移动端显示

## Usage

和 [hexo-bilibili-card](https://github.com/MaxChang3/hexo-bilibili-card) 相同：

```text
{% bilicard2 video_id %}
```

`video_id` 为视频 BV 号或 AV 号

## Example

[Demo](https://d-sketon.top/20210925/otomad-tutorial/)
