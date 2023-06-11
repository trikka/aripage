<template>
  <div class="flex p-8 border-t border-primary last-of-type:border-b">
    <img :src="imgSrc" class="h-auto w-40" />
    <div class="ml-8 w-full">
      <!-- ↓ remは文字サイズを基準とする相対的な文字サイズ指定の単位　hoverはマウスを文字の上に持ってくると色が変わる擬似クラス-->
      <h1
        class="font-bold text-3xl text-accent-200 hover:text-primary cursor-pointer duration-200"
      >
        {{ caption }}
      </h1>
      <!-- ↓隙間を開けたかったらdivで包んんで指定する -->
      <div class="flex items-center mt-4 h-8">
        <!-- v-ifはcategoriesが選択されているとには表示して、ないときは表示しない-->
        <button
          class="bg-primary block text-bg py-1 px-5 rounded-xl font-bold hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200"
          v-if="category"
        >
          {{ category.name }}
        </button>

        <!-- <button
          class="bg-primary text-bg py-2 px-6 rounded-xl font-bold mr-4"
          v-for="category of categories"
          :key="category"
        >
          {{ category.name }}
        </button> -->
        <p class="ml-4">{{ postedDate }}</p>
      </div>
      <!-- justify-contentは、CSSのプロパティの1つであり、Flexboxを使用して要素を水平方向（メイン軸）に配置する際の配置方法を指定する。 -->
      <div class="w-full flex justify-end mt-4 flex-auto">
        <button class="">続きを読む</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHeading",
  props: {
    imgSrc: "",
    caption: "",
    // categories: "",
    category: "",
    postedDate: "",
  },
};
</script>
