<template>
<!-- 头像+用户名称 -->
	<view class="proImage">
		<!-- 用户头像 -->
		<uni-text data-v-2ddb064c="" class="lg text-white cuIcon-profile" ><span></span></uni-text>
		<!-- 微信用户名称 -->
		<view class="wxName">用户名</view>
	</view>
	
	<view class="itemKinds">
		<!-- 我的金额 -->
			
			
		<!-- 我的订单 -->
			
			
		<!-- 帮助中心 -->
		
	</view>




</template>

<script>
	// 导入bottomButton.vue组件
	// export default {
	// 	data() {
	// 		return {

	// 		}
	// 	},
	// 	methods: {

	// 	}
	// }
</script>

<style>
	/* 头像+用户名称 */
	.proImage {
		display: flex;
		/* position: absolute; */
		background-color: aquamarine;
		height: 180rpx;
		width: 100%;
		padding-top: 40rpx;
		padding-left: 8%;
	}
	/* 头像 */
	.cuIcon-profile{
		font-size: -webkit-xxx-large
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
	.itemKinds {
		background-color: orchid;
		height: 630rpx;
		width: 100%;
	}
	/* 我的金额 */
	
	/* 我的订单 */
	
	/* 帮助中心 */
	
	
</style>