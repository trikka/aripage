<template>
  <!-- サイドメニュー -->
  <div class="w-80 mx-8">
    <!-- 最新記事エリア -->
    <p class="text-center">最新記事</p>
    <NewPosts :posts="newposts" class="cursor-pointer"></NewPosts>
    <!-- pick up表示エリア -->
    <p class="text-center">PICK UP</p>
    <Pickup :blogs="pickup"></Pickup>
    <!-- カテゴリー表示エリア -->
    <div class="mt-6 border-2 border-accent-200">
      <p class="text-center">CATEGORY</p>
      <CategoryList class="mx-4 mb-2" :categories="categories"></CategoryList>
    </div>
    <!-- TAGエリア -->
    <p class="text-center mt-6">TAG</p>
    <TagList class="pl-4" :tags="tags"></TagList>
  </div>
</template>

<script>
import { createClient } from "microcms-js-sdk";

import CategoryList from "../../CategoryList.vue";
import TagList from "../../TagList.vue";
import Pickup from "../../Pickup.vue";
import NewPosts from "../../NewPosts.vue";

// TODO envファイルから読めないから直書き　え〜やだ〜キモーーイ
const client = createClient({
  serviceDomain: "aripage",
  apiKey: "x0q8XMOGq8E4k1M04oj1oYci7k5eRg9FOpDa",
});

export default {
  name: "Home",
  components: {
    CategoryList,
    TagList,
    Pickup,
    NewPosts,
  },
  data() {
    return {
      pickup: [],
      categories: [],
      tags: [],
      newposts: [],
    };
  },
  created() {
    // カテゴリの記事を取得
    client.get({ endpoint: "categories" }).then(({ contents }) => {
      this.categories = contents;
    });
    // タグの記事を取得
    client.get({ endpoint: "tags" }).then(({ contents }) => {
      this.tags = contents;
    });
    // ブログの最新記事を取得
    // "blogs" エンドポイントからデータを取得し、新着記事を取得する
    client.get({ endpoint: "blogs" }).then(({ contents }) => {
      // // 取得した新着記事の内容を this.newposts に格納する
      this.newposts = contents;
      //  // コンソールに新着記事を出力する
      console.log("new post", this.newposts);
    });
  },
};
</script>
