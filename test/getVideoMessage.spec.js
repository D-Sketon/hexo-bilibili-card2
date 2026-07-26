import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const getVideoMessage = require("../lib/getVideoMessage");

describe("getVideoMessage", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return video message", async () => {
    globalThis.fetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            title: "【音MAD教程入门篇】给萌新的零基础音MAD教学！",
            duration: 2972,
            stat: { view: 236000, danmaku: 979 },
            owner: { name: "NOVA音MAD社" },
            pic: "http://i2.hdslb.com/bfs/archive/eaf39face50f1fef89445ba2362f3dbbabe58ace.png",
          },
        }),
    });

    const id = "BV1v5411Q7LH";
    const message = await getVideoMessage(id);

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://api.bilibili.com/x/web-interface/view?bvid=BV1v5411Q7LH"
    );
    expect(message).toEqual({
      v_id: "BV1v5411Q7LH",
      v_title: "【音MAD教程入门篇】给萌新的零基础音MAD教学！",
      v_time: "00:49:32",
      v_playview: "23.6万",
      v_danmaku: 979,
      v_upname: "NOVA音MAD社",
      v_cover:
        "http://i2.hdslb.com/bfs/archive/eaf39face50f1fef89445ba2362f3dbbabe58ace.png",
    });
  });

  it("should handle av id", async () => {
    globalThis.fetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            title: "test",
            duration: 100,
            stat: { view: 5000, danmaku: 100 },
            owner: { name: "test" },
            pic: "http://example.com/pic.png",
          },
        }),
    });

    const message = await getVideoMessage("av12345");

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://api.bilibili.com/x/web-interface/view?aid=12345"
    );
  });

  it("should return error message when no data", async () => {
    globalThis.fetch.mockResolvedValue({
      json: () => Promise.resolve({ data: null }),
    });

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
