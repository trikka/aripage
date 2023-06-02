<template>
  <ul>
    <li
      v-for="category of categories"
      class="before:w-4 before:h-4 before:bg-orange-300 before:inline-block before:rounded-full before:mr-1 border-b border-dashed border-orange-500 last:border-none py-2"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    categories: [],
  },
};
</script>
