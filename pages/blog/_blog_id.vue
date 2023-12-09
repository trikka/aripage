<template>
  <div class="text-text bg-bg">
    <Header />
    <div class="flex">
      <!-- メインコンテンツ -->
      <div class="mx-8 flex-1">
        <div class="flex justify-between mt-4 pb-2 border-b-primary border-b">
          <!-- ページタイトル -->
          <h1 class="font-bold text-3xl text-accent-200">{{ blog.title }}</h1>
          <div class="text-right">
            <!-- 投稿日 -->
            <p>{{ blog.postedDate }}</p>
            <!-- カテゴリー -->
            <button
              class="bg-primary block text-bg py-1 px-5 rounded-xl font-bold hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200"
              v-if="blog.category"
            >
              {{ blog.category.name }}
            </button>
          </div>
        </div>
        <div class="border-b-primary border-b">
          <!-- アイキャッチ -->
          <img class="max-h-[50vh] py-2 mx-auto" :src="blog.eyecatch?.url" />
        </div>
        <div class="border-b-primary border-b">
          <!-- 本文 -->
          <div class="mt-2 mb-4" v-html="blog.content"></div>
        </div>
        <!-- フッター -->
        <Footer :prevBlog="prevBlog" :nextBlog="nextBlog" />
      </div>
      <!-- サイドメニュー -->
      <SideMenu />
    </div>
  </div>
</template>

<script>
import Header from "../../components/shared/header/Header.vue";
import Footer from "../../components/shared/footer/Footer.vue";
import SideMenu from "../../components/shared/sideMenu/SideMenu.vue";

import { parseISO, format } from "date-fns";
import { createClient } from "microcms-js-sdk";

// TODO envファイルから読めないから直書き　え〜やだ〜キモーーイ
const client = createClient({
  serviceDomain: "aripage",
  apiKey: "x0q8XMOGq8E4k1M04oj1oYci7k5eRg9FOpDa",
});

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    SideMenu,
  },
  data() {
    return {
      blog: {},
      prevBlog: null, //前の記事で表示する
      nextBlog: null, //次の記事で表示する
    };
  },
  created() {
    // ブログの記事を全部取得
    client.get({ endpoint: "blogs" }).then(({ contents }) => {
      // ブログのIDに一致する記事が、全ブログ記事中何番目かを表す番号を取得
      const targetIdx = contents.findIndex(
        ({ id }) => id === this.$route.params.blog_id
      );
      if (targetIdx > -1) {
        // ブログのIDに一致する記事を表示する
        this.blog = contents[targetIdx];
        this.blog.postedDate = format(
          parseISO(this.blog.revisedAt),
          "yyyy.MM.dd"
        );
        console.log(this.blog);

        if (targetIdx > 0) {
          // 「前の記事」用にブログIDより一つ前の記事を保持する
          this.prevBlog = contents[targetIdx - 1];
          this.prevBlog.postedDate = format(
            parseISO(this.prevBlog.revisedAt),
            "yyyy.MM.dd"
          );
        }

        if (targetIdx < contents.length - 1) {
          // 「次の記事」用にブログIDより一つ後の記事を保持する
          this.nextBlog = contents[targetIdx + 1];
          this.nextBlog.postedDate = format(
            parseISO(this.nextBlog.revisedAt),
            "yyyy.MM.dd"
          );
        }
      }
    });
  },
};
</script>
