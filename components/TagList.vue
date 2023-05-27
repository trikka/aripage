<template>
  <!-- ↓flex-wrapとはフレックスアイテムは折り返され、複数行で表示。通常は上から下に折り返され、2行目以降のアイテムは左から右に配置される -->
  <div class="flex flex-wrap">
    <!-- aタグとは指定した部分の要素をリンクとして扱うことができクリックするとリンクに飛べる-->
    <a
      v-for="tag in tags"
      href=""
      class="border rounded border-gray-800 px-2 py-1 mr-2 mb-2"
      ><v-icon>mdi-tag</v-icon>{{ tag }}</a
    >
  </div>
</template>

<script>
export default {
  name: "TagList",
  props: {
    tags: [],
  },
};
</script>
