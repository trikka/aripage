<template>
  <ul class="flex mx-40 justify-around">
    <li
        v-for="nav in navs"
        class=" bg-primary rounded-full w-8 h-8 text-center leading-8 font-bold text-xl text-white">
        <NuxtLink :to="nav.path">{{ nav.label }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterNavigation",
  
  props: {
    navs: [],
  },
};
</script>
