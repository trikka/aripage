<template>
  <div class="w-full">
    <NuxtLink
      v-if="blog"
      :to="`/blog/${blog.id}`"
      class="cursor-pointer duration-300 group hover:text-primary-200 flex justify-between mx-4"
    >
      <div class="flex items-center w-fit">
        <span class="i-mdi-less-than text-xl mr-1"></span>
        <p>前の記事</p>
      </div>
      <Synopsis :blog="blog" />
    </NuxtLink>
  </div>
</template>

<script>
import Synopsis from "./Synopsis.vue";
export default {
  name: "PrevBlog",
  components: { Synopsis },
  props: {
    blog: {},
  },
};
</script>
