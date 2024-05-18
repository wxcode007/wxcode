<template>
  <view class="order-list">
    <view
      v-for="item in orderList"
      :key="item.id"
      class="order-list_item bg-white"
    >
      <view>
        <view class="text-lg">{{ item.equipName }}</view>
        <view>{{ item.createTime }}</view>
      </view>
      <view>
        <view>用水量</view>
        <view>{{ item.waterConsumption }}</view>
      </view>
      <view>
        <view>水量预警</view>
        <view>{{ item.waterWarning }}</view>
      </view>
      <view>
        <view>用水金额</view>
        <view>{{ item.waterCost }}</view>
      </view>
    </view>
  </view>
</template>
<script setup>
const orderList = [
  {
    id: 1,
    equipName: "设备01",
    createTime: "2024/05/16 16:00",
    waterConsumption: "2.5L",
    waterWarning: "1.5L",
    waterCost: "¥ 2.00",
  },
  {
    id: 2,
    equipName: "设备02",
    createTime: "2024/05/18 18:00",
    waterConsumption: "3.5L",
    waterWarning: "1.0L",
    waterCost: "¥ 3.50",
  },
];
</script>
<style lang="scss" scoped>
.order-list {
  &_item {
    display: flex;
    padding: 30rpx 10rpx;
    justify-content: space-around;
    margin-top: 20rpx;
  }
  &_item > view:nth-child(2),
  &_item > view:nth-child(3),
  &_item > view:nth-child(4) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &_item > view:first-child {
    text-align: left;
  }
  &_item > view view:nth-child(2) {
    margin-top: 16rpx;
    color: #9ca3af;
  }
}
</style>
