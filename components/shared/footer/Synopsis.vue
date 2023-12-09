<template>
  <div class="flex">
    <img
      :src="blog.eyecatch.url"
      class="h-28 w-40 object-cover group-hover:brightness-75 duration-300"
    />
    <div class="flex flex-col ml-4 justify-center">
      <p
        class="text-3xl text-accent-200 font-bold group-hover:text-accent duration-300"
      >
        {{ blog.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Synopsis",
  props: {
    blog: {},
  },
};
</script>
