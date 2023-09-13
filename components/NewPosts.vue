<template>
  <ul>
    <li
      v-for="post in posts"
      class="border-b border-dashed border-orange-500 last:border-none py-2 duration-300 hover:text-primary-200"
    >
      <!-- 最新記事のデータを取得しリンク先に飛べるよにしている -->
      <NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Newposts",
  props: {
    posts: [],
  },
};
</script>
