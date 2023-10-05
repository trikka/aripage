<template>
  <NuxtLink :to="`/blog/${blogId}`">
    <img :src="imgSrc" class="flex" >
    <p class="ml-4">{{ postedDate }}</p>
    <bottom>{{ category.name }}
          </bottom>
          <p>{{ caption }}</p>
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
