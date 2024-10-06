import { describe, it, expect } from "vitest";

const getVideoMessage = require("../lib/getVideoMessage");

describe("getVideoMessage", () => {
  it("should return video message", async () => {
    const id = "BV1v5411Q7LH";
    const message = await getVideoMessage(id);

    expect(message).toEqual({
      v_id: "BV1v5411Q7LH",
      v_title: "【音MAD教程入门篇】给萌新的零基础音MAD教学！",
      v_time: "00:49:32",
      v_playview: "15.2万",
      v_danmaku: 749,
      v_upname: "NOVA音MAD社",
      v_cover:
        "http://i2.hdslb.com/bfs/archive/eaf39face50f1fef89445ba2362f3dbbabe58ace.png",
    });
  });

  it("should return error message", async () => {
    const id = "BV1";
    const message = await getVideoMessage(id);

    expect(message).toEqual({
      v_id: "BV1",
      v_title: "出错了！",
      v_time: "00:00:00",
      v_playview: 0,
      v_danmaku: 0,
      v_upname: "",
    });
  });
});
