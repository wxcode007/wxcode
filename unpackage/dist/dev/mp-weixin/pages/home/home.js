"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_view = common_vendor.resolveComponent("uni-view");
  const _component_uni_button = common_vendor.resolveComponent("uni-button");
  (_component_uni_view + _component_uni_button)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/桌面/Desktop/bscode/wxcode/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
