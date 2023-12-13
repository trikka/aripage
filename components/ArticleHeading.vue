<template>
  <NuxtLink :to="`/blog/${blogId}`">
    <div class="flex p-8 border-t border-primary last-of-type:border-b">
      <img :src="imgSrc" class="h-auto w-40 hover:opacity-70" />
      <div class="ml-8 w-full">
        <!-- ↓ remは文字サイズを基準とする相対的な文字サイズ指定の単位　hoverはマウスを文字の上に持ってくると色が変わる擬似クラス-->
        <h1
          class="font-bold text-3xl text-accent-200 hover:text-primary cursor-pointer duration-200"
        >
          <NuxtLink :to="`/blog/${blogId}`">{{ caption }}</NuxtLink>
        </h1>
        <!-- ↓隙間を開けたかったらdivで包んんで指定する -->
        <div class="flex items-center mt-4 h-8">
          <!-- v-ifはcategoriesが選択されているときには表示して、ないときは表示しない-->
          <NuxtLink :to="`/results?categoryId=${category.id}`"
            class="bg-primary block text-bg py-1 px-5 rounded-xl font-bold hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200"
            v-if="category"
          >
            {{ category.name }}
          </NuxtLink>
          <p class="ml-4">{{ postedDate }}</p>
        </div>
        <Ellipses class="w-80 m-2" :html-contents="content"></Ellipses>
        <!-- justify-contentは、CSSのプロパティの1つであり、Flexboxを使用して要素を水平方向（メイン軸）に配置する際の配置方法を指定する。 -->
        <div class="w-full flex justify-end mt-4 flex-auto">
          <!-- ↓記事をリンクするためのタグ。 -->
          <NuxtLink :to="`/blog/${blogId}`" class="hover:text-primary-200">続きを読む</NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import Ellipses from './Ellipses.vue'
export default {
  name: "ArticleHeading",
  components: {Ellipses},
  props: {
    imgSrc: "",
    caption: "",
    category: "",
    postedDate: "",
    blogId: "",
    content: ''
  },
};
</script>
