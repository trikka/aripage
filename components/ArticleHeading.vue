<template>
  <div class="flex p-8 border-t border-primary">
    <img :src="imgSrc" class="h-auto w-40" />
    <div class="ml-8">
      <!-- ↓ remは文字サイズを基準とする相対的な文字サイズ指定の単位　hoverはマウスを文字の上に持ってくると色が変わる擬似クラス-->
      <h1
        class="font-bold text-3xl text-accent-200 hover:text-primary cursor-pointer duration-200"
      >
        {{ caption }}
      </h1>
      <!-- ↓隙間を開けたかったらdivで包んんで指定する -->
      <div class="flex items-center mt-4">
        <button class="bg-primary text-bg py-2 px-6 rounded-xl font-bold">
          {{ categories }}
        </button>
        <p class="ml-4">{{ postedDate }}</p>
      </div>

      <button class="border border-black rounded p-1 mt-4">続きを読む</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHeading",
  props: {
    imgSrc: "",
    caption: "",
    categories: "",
    postedDate: "",
  },
};
</script>
