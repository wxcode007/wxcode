<template>
  <view class="recharge-amount">
    <view class="recharge-amount_header">
      <view></view>
      <view>选择充值金额</view>
    </view>

    <view class="recharge-amount_content">
      <view
        v-for="item in amountList"
        :key="item.id"
        class="recharge-amount_content_item bg-white"
      >
        <view>
          <view>{{ item.amount }}元</view>
        </view>
      </view>
    </view>
    <view class="recharge-amount_btn">
      <view>充值</view>
    </view>
  </view>
</template>
<script setup>
const amountList = [
  {
    id: 1,
    amount: "5",
  },
  {
    id: 2,
    amount: "10",
  },
  {
    id: 3,
    amount: "20",
  },
  {
    id: 4,
    amount: "30",
  },
  {
    id: 5,
    amount: "50",
  },
  {
    id: 6,
    amount: "100",
  },
];
</script>
<style lang="scss" scoped>
.recharge-amount {
  &_header {
    color: #007aff;
    display: flex;
    margin: 36rpx 0 20rpx;
  }
  &_header > view:first-child {
    width: 8rpx;
    height: 38rpx;
    background-color: #007aff;
    margin: 0 16rpx;
  }
  &_content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20rpx;
    padding: 20rpx;
    box-sizing: border-box;
    text-align: center;
    &_item {
      padding: 20rpx 28rpx;
      border: 1px solid #ccc;
      border-radius: 10rpx;
      text-align: center;
      color: #007aff;
    }
  }
  &_btn {
    margin: 36rpx 0;
    display: flex;
    justify-content: center;
  }
  &_btn > view {
    background-color: #007aff;
    padding: 16rpx 0;
    width: 600rpx;
    color: white;
    text-align: center;
    border-radius: 10rpx;
  }
  //   &_item {
  //     display: flex;
  //     padding: 30rpx 10rpx;
  //     justify-content: space-around;
  //     margin-top: 20rpx;
  //   }
  //   &_item > view:nth-child(2),
  //   &_item > view:nth-child(3),
  //   &_item > view:nth-child(4) {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //   }
  //   &_item > view:first-child {
  //     text-align: left;
  //   }
  //   &_item > view view:nth-child(2) {
  //     margin-top: 16rpx;
  //     color: #9ca3af;
  //   }
}
</style>
