<template>
	<view class="ssk">搜索框</view>
	<!-- 图片 + echarts图 -->
	<uni-view data-v-5f580ccb="" class="grid margin-bottom text-center col-1"><uni-view data-v-5f580ccb=""
			class="padding bg-cyanONE">1图片</uni-view><uni-view data-v-5f580ccb="" class="padding bg-blueTWO">
			<!-- echarts图引入 -->
			<uni-view data-v-5f580ccb="" class="grid margin-bottom text-center col-2"><uni-view data-v-5f580ccb=""
					class="padding bg-cyan1">echarts1</uni-view><uni-view data-v-5f580ccb=""
					class="padding bg-blue2">echarts2</uni-view></uni-view>
		</uni-view></uni-view>
		
        <!-- 授权登录按钮 -->
	<uni-button data-v-6059f4d3="" class="cu-btn bg-blue lg">授权登录</uni-button>
</template>

<script setup>
	// 导入bottomButton.vue组件
	
	// export default {
	// 	data() {
	// 		return {
	// 			title: 'Hello'
	// 		}
	// 	},
	// 	onLoad() {

	// 	},
	// 	methods: {

	// 	}
	// }
</script>

<style lang="scss">
	// 搜索框
	.ssk{
		background-color: deepskyblue;
		height: 50rpx;
		// text-align: ;
	}
	// 图片 + echarts图 
	.bg-cyanONE {
		height: 300rpx;
		width: 100%;
		background-color: indianred;
	}

	.bg-blueTWO {
		height: 550rpx;
		width: 100%;
		background-color: skyblue;
		.bg-cyan1{
			width: 48%;
			height: 500rpx;
			background-color: yellowgreen;
			margin-right: 10rpx;
		}
		.bg-blue2{
			width: 48%;
			height: 500rpx;
			background-color: papayawhip;
			margin-left: 10rpx;
		}
	}
	// 授权登录按钮样式
	.cu-btn {
		display: flex;  
	    text-align: center;
		margin: 0 170rpx;
		border-radius: 13rpx;
		// justify-content: center; /* 水平居中 */
		// align-items: center; /* 垂直居中 */ 
	}
</style>