<template>
  <div class="w-full">
    <NuxtLink
      v-if="blog"
      :to="`/blog/${blog.id}`"
      class="cursor-pointer group flex justify-between mx-4"
    >
      <img
        :src="blog.eyecatch.url"
        class="h-28 w-40 object-cover group-hover:brightness-110 duration-300"
      />
      <div class="flex w-fit flex-col">
        <div>
          <div
            class="flex items-center flex-none justify-end text-primary-200 group-hover:text-primary duration-300"
          >
            <span class="i-mdi-less-than text-xl mr-1"></span>
            <p>前の記事</p>
          </div>
        </div>
        <p
          class="mt-4 text-3xl text-accent-200 font-bold text-right group-hover:text-accent duration-300"
        >
          {{ blog.title }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "PrevBlog",
  props: {
    blog: {},
  },
};
</script>
