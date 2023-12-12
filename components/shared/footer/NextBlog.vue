<template>
  <div class="w-full">
    <NuxtLink
      v-if="blog"
      :to="`/blog/${blog.id}`"
      class="cursor-pointer group flex justify-between mx-4"
    >
      <div class="flex w-fit flex-col">
        <div>
          <div
            class="flex items-center flex-none text-primary-200 group-hover:text-primary duration-300"
          >
            <p>次の記事</p>
            <span class="i-mdi-greater-than text-xl ml-1"></span>
          </div>
        </div>
        <p
          class="mt-4 text-3xl text-accent-200 font-bold group-hover:text-accent duration-300"
        >
          {{ blog.title }}
        </p>
      </div>
      <img
        :src="blog.eyecatch.url"
        class="h-28 w-40 object-cover group-hover:brightness-110 duration-300"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "NextBlog",
  props: {
    blog: {},
  },
};
</script>
