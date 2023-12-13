<template>
  <!-- ↓flex-wrapとはフレックスアイテムは折り返され、複数行で表示。通常は上から下に折り返され、2行目以降のアイテムは左から右に配置される -->
  <div class="flex flex-wrap">
    <NuxtLink
      v-for="tag of tags"
      :key="tag.id"
      class="border rounded border-gray-800 px-2 py-1 mr-2 mb-2 cursor-pointer duration-300 hover:bg-primary-200 hover:text-bg-200"
      :to="`/results?tagId=${tag.id}`"
      ><v-icon>mdi-tag</v-icon>{{ tag.name }}</NuxtLink
    >
    <!-- ↑:to 属性はリンク先のURLを指定する。/results?tagId= という基本のURLの後に、tag.id の値が動的に挿入されている。この結果異なるタグをクリックしたときにそれぞれのページに遷移することができている。-->
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
