<template>
  <div class="w-full">
    <NuxtLink
      v-if="blog"
      :to="`/blog/${blog.id}`"
      class="cursor-pointer duration-300 group hover:text-primary-200 flex justify-between mx-4"
    >
      <Synopsis :blog="blog" />
      <div class="flex items-center w-fit justify-end">
        <p>次の記事</p>
        <span class="i-mdi-greater-than text-xl ml-1"></span>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import Synopsis from "./Synopsis.vue";
export default {
  name: "NextBlog",
  components: { Synopsis },
  props: {
    blog: {},
  },
};
</script>
