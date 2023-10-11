<template>
  <NuxtLink :to="`/blog/${blogId}`">
    <img :src="imgSrc" class="h-auto w-40 hover:opacity-70" >
    <div class="flex mt-4 h-8">
    <p>{{ postedDate }}</p>
    <bottom class="ml-4 bg-primary block text-bg py-1 px-5 rounded-xl font-bold hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200"
            v-if="category"
          >{{ category.name }}
          </bottom></div>
          <h1
          class="font-bold text-3xl text-accent-200 hover:text-primary cursor-pointer duration-200"
        >
          <NuxtLink :to="`/blog/${blogId}`">{{ caption }}</NuxtLink>
        </h1>
          
  </NuxtLink>
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
