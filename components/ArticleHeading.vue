<template>
  <div class="flex p-4 items-center border-t border-orange-400">
    <!-- <div class="block bg-lime-300 w-20 h-20 m-2"></div> -->
    <img :src="imgSrc" class="h-60 w-auto" />
    <p class="ml-8">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleHeading",
  props: {
    imgSrc: "",
    caption: "",
  },
};
</script>
