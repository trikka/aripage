<template>
  <div class="ellipses" data-ellipses v-html="htmlContents"></div>
</template>

<script>
export default {
  name: "Ellipses",
  props: {
    htmlContents: String,
  },
};
</script>

<style lang="scss">
.ellipses[data-ellipses] {
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:not(:first-child) {
      display: none;
    }
  }
}
</style>
