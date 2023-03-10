# hexo-bilibili-card2
![](https://img.shields.io/npm/v/hexo-bilibili-card2)   ![](https://img.shields.io/npm/dt/hexo-bilibili-card2)

A hexo plugin to show bilibili style card.  
基于 [hexo-bilibili-card](https://github.com/MaxChang3/hexo-bilibili-card) 的自用魔改版  

## Install
```bash
npm install hexo-bilibili-card2 --save
```

## Change List
- [x] **适配Shoka主题的夜间模式，但可能对其他主题有影响**
- [x] 将所有 `icon` 替换为自制 `svg`
- [x] 播放量支持 **亿**
- [x] 修改页面，使之更接近 `Bilibili` 样式
- [x] 增添~~无用~~鼠标悬浮动画
- [x] `id` 出错时显示更友好
- [x] 优化移动端显示
- [ ] 支持多列显示
- [ ] 支持专栏
## Usage
和 [hexo-bilibili-card](https://github.com/MaxChang3/hexo-bilibili-card) 相同：  
```text
{% bilicard2 video_id %}
```
`video_id` 为视频BV号或AV号

## Example
[Demo](https://d-sketon.top/20210925/otomad-tutorial/)
