const imageProxy = "https://images.weserv.nl/?url=";

const template = async ({
  v_id,
  v_cover,
  v_time,
  v_title,
  v_playview,
  v_danmaku,
  v_upname,
}) =>
  `
<div class="bvideo">
  <a href="//www.bilibili.com/video/${v_id}" target="_blank">
    <div class="bvideo-box">
      <div class="bvideo-cover">
        <div class="cover-default"></div>
        <div class="bvideo-cover-layer" style="background-image:url(${imageProxy}${v_cover})">
          <i class="icon-video"></i>
        </div>
        <span class="duration">${v_time}</span>
      </div>
      <div class="bvideo-info">
        <p class="title">${v_title}</p>
        <div class="partition">
          <span class="svg-up"></span>
          <span class="up-name">${v_upname}</span>
        </div>
        <div class="card-status">
          <span class="play-num">
            <span class="svg-play"></span>
            <span style="vertical-align:middle;">${v_playview}</span>
          </span>
          <span>
          <span class="svg-danmaku"></span>
            <span style="vertical-align:middle;">${v_danmaku}</span>
          </span>
        </div>
      </div>
    </div>
  </a>
</div>`;

module.exports = template;
