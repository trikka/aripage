<template>
  <div>
    <h1
      class="text-center tracking-widest font-extrabold text-primary text-7xl my-5"
    >
      aripage
    </h1>
    <HeaderNavigation
      :navs="[
        { label: 'HOME', path: '/' },
        { label: 'ABOUT', path: '/about' },
        { label: 'CONTACT', path: '/contact' },
      ]"
    ></HeaderNavigation>
  </div>
</template>

<script>
import HeaderNavigation from "../../HeaderNavigation.vue";
export default {
  name: "Header",
  props: {},
};
</script>
