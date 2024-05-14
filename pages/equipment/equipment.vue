<template>
	<!-- 搜索栏 -->
	<uni-view data-v-cf183850="" class="cu-bar search bg-white"><uni-view data-v-cf183850=""
			class="search-form round"><uni-text data-v-cf183850=""
				class="cuIcon-search"><span></span></uni-text><uni-input data-v-cf183850="">
				<div class="uni-input-wrapper">
					<div class="uni-input-placeholder input-placeholder" data-v-cf183850="">搜索附近设备</div><!---->
					<form action="" class="uni-input-form"><input maxlength="140" step="" enterkeyhint="search"
							autocomplete="off" type="search" class="uni-input-input"></form>
				</div>
			</uni-input></uni-view><uni-view data-v-cf183850="" class="action"><uni-button data-v-cf183850=""
				class="cu-btn bg-grey shadow-blur round">搜索</uni-button></uni-view></uni-view>

	<!-- 设备管理 -->
	<uni-view data-v-6be2e39c="" class="cu-bar bg-white margin-top"><uni-view data-v-6be2e39c=""
			class="action"><uni-text data-v-6be2e39c=""
				class="cuIcon-title text-orange "><span></span></uni-text>设备001</uni-view><uni-view data-v-6be2e39c=""
			class="action">
			<uni-button data-v-6be2e39c="" class="cu-btn bg-blue shadow" data-target="Modal">搜索</uni-button>
			<uni-button data-v-6be2e39c="" class="cu-btn bg-pink shadow" data-target="Modal">删除</uni-button>
		</uni-view></uni-view>
</template>

<script>
	// export default {
	// 	data() {
	// 		return {

	// 		}
	// 	},
	// 	methods: {

	// 	}
	// }
</script>
<!-- 导入bottomButton.vue组件 -->
<style>
	/* 搜索栏样式 */


	/* 设备管理样式 */
	.bg-blue {
		margin: 0 20rpx;
		border-radius: 10rpx;
	}

	.bg-pink {
		margin: 0 20rpx;
		border-radius: 10rpx;
	}
</style>