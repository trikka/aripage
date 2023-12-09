<template>
  <div class="flex justify-around my-4 pb-4 border-b-primary border-b">
    <PrevBlog :blog="prevBlog" class="border-r border-primary" />
    <NextBlog :blog="nextBlog" />
  </div>
</template>

<script>
import PrevBlog from "./PrevBlog.vue";
import NextBlog from "./NextBlog.vue";
export default {
  name: "Footer",
  components: { PrevBlog, NextBlog },
  props: {
    prevBlog: {},
    nextBlog: {},
  },
};
</script>
