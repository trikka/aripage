<template>
  <div class="flex m-10 bg-bg-200 pb-16">
    <NuxtLink :to="`/blog/${blogId}`" class="w-full hover:opacity-70">
      <!-- ↓object-cove：r要素のサイズに合わせて配置し、アスペクト比（縦横比）は維持したままオブジェクトが要素より大きい場合、余分な部分を切り取る-->
      <img :src="imgSrc" class=" h-60 w-full object-cover">
      <!-- justify-between： flexアイテムの両端揃え-->
      <div class="flex mx-4 mt-4 h-8 justify-between">
        <p class="text-right ml-7">{{ postedDate }}</p>
        <button class=" bg-primary block text-bg py-1 px-5 rounded-xl font-bold hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200"
                v-if="category"
              >{{ category.name }}
        </button>
      </div>
          <h1 class=" pt-3 text-center font-bold text-3xl text-accent-200 hover:text-primary cursor-pointer duration-200">
            <NuxtLink :to="`/blog/${blogId}`">{{ caption }}</NuxtLink>
          </h1>
            
    </NuxtLink>
  </div>  
</template>

<script>
export default {
  name: "BlogHeadingmobile",
  props: {
    imgSrc: "",
    caption: "",
    // categories: "",
    category: "",
    postedDate: "",
    blogId: "",
  },
};
</script>
