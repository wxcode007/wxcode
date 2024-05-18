<template>
  <!-- 头像+用户名称 -->
  <view class="proImage bg-blue">
    <!-- 用户头像 -->
    <uni-text data-v-2ddb064c="" class="lg text-white cuIcon-profile"
      ><span></span
    ></uni-text>
    <!-- 微信用户名称 -->
    <view class="wxName">用户名</view>
  </view>
  <!-- 我的金额+我的订单+帮助中心  -->
  <view class="content">
    <view class="content_main">
      <view
        v-for="item in contentList"
        :key="item.id"
        class="content_main_item flex bg-white"
        @click="handleClick(item.id)"
      >
        <view class="flex item-center">
          <text style="font-weight: 500">{{ item.value }} </text>
          <text
            v-if="item.id === 1"
            class="text-blue"
            style="margin-left: 20rpx"
          >
            ¥ 0.99</text
          >
        </view>
        <text v-if="item.id === 1" class="text-blue">充值</text>
        <text v-else class="cuIcon-right"> </text>
      </view>
    </view>
  </view>
</template>

<script setup>
const contentList = [
  {
    id: 1,
    value: "我的金额",
  },
  {
    id: 2,
    value: "我的订单",
  },
  {
    id: 3,
    value: "帮助中心",
  },
];
const handleClick = (id) => {
  if (id === 1) {
    uni.navigateTo({
      url: "/pages/my/myAmount",
    });
  } else if (id === 2) {
    uni.navigateTo({
      url: "/pages/my/myOrder",
    });
  }
};
</script>

<style lang="scss" scoped>
/* 头像+用户名称 */
.proImage {
  display: flex;
  position: relative;
  /* background-color: aquamarine; */
  height: 260rpx;
  width: 100%;
  padding-top: 40rpx;
  padding-left: 8%;
}

/* 头像 */
.cuIcon-profile {
  font-size: -webkit-xxx-large;
}

/* 用户名称 */
.wxName {
  /* position: relative; */
  float: left;
  padding-top: 20rpx;
  padding-left: 2%;
  font-size: 40rpx;
  color: white;
}

/* 我的金额+我的订单+帮助中心 */
.content {
  position: absolute;
  background-color: #f1f1f1;
  border-radius: 50rpx 50rpx 0 0;
  height: 630rpx;
  width: 100%;
  top: 180rpx;
  &_main {
    margin-top: 60rpx;
    &_item {
      box-sizing: border-box;
      height: 160rpx;
      width: 98%;
      line-height: 160rpx;
      padding: 0 50rpx;
      margin: 15rpx 5rpx;
      justify-content: space-between;
      border-radius: 10rpx;
    }
  }
}
</style>
