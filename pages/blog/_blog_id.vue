<template>
  <div class="text-text bg-bg">
    <div>
      <h1
        class="text-center tracking-widest font-extrabold text-primary text-7xl my-5"
      >
        aripage
      </h1>
    </div>
    <HeaderNavigation
      :navs="[
        { label: 'HOME', path: '/' },
        { label: 'ABOUT', path: '/about' },
        { label: 'CONTACT', path: '/contact' },
      ]"
    ></HeaderNavigation>
    <div class="flex">
      <!-- メインコンテンツ -->
      <div class="mx-8 flex-1">
        <div class="flex justify-between mt-4 pb-2 border-b-primary border-b-2">
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
        <div class="border-b-primary border-b-2">
          <!-- アイキャッチ -->
          <img class="max-h-[50vh] py-2 mx-auto" :src="blog.eyecatch?.url" />
        </div>
        <div class="border-b-primary border-b-2">
          <!-- 本文 -->
          <div class="mt-2 mb-4" v-html="blog.content"></div>
          <div class="w-56 santen" v-html="blog.content"></div>
        </div>
        <!-- フッター（） -->
        <div class="border-t border-b flex justify-around">
          <!-- 前記事へのボタン -->
          <NuxtLink
            v-if="prevBlog"
            :to="`/blog/${prevBlog.id}`"
            class="w-full border-r cursor-pointer duration-300 group hover:text-primary-200 page-navigation"
          >
            <div class="h-5">
              <div class="flex py-1 px-5 float-right">
                <v-icon class="vue-navigation-icon">mdi-less-than</v-icon>
                <p>前の記事</p>
              </div>
            </div>
            <div class="flex">
              <img
                :src="prevBlog.eyecatch.url"
                class="h-20 w-32 group-hover:brightness-75 duration-300"
              />
              <p class="m-6">{{ prevBlog.title }}</p>
            </div>
          </NuxtLink>
          <!--  後記事へのボタン-->
          <NuxtLink
            v-if="nextBlog"
            :to="`/blog/${nextBlog.id}`"
            class="w-full cursor-pointer duration-300 group hover:text-primary-200 page-navigation"
          >
            <div class="flex py-1 px-5">
              <p>次の記事</p>
              <v-icon class="vue-navigation-icon">mdi-greater-than</v-icon>
            </div>
            <div class="flex float-right">
              <p class="m-6">{{ nextBlog.title }}</p>
              <img
                :src="nextBlog.eyecatch.url"
                class="h-20 w-32 group-hover:brightness-75 duration-300"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
      <!-- サイドメニュー -->
      <div class="w-80 mx-8">
        <!-- 最新記事エリア -->
        <p class="text-center midashi-text">最新記事</p>
        <NewPosts :posts="newposts" class="cursor-pointer"></NewPosts>
        <!-- pick up表示エリア -->
        <p class="text-center midashi-text">PICK UP</p>
        <Pickup :blogs="pickup"></Pickup>
        <!-- カテゴリー表示エリア -->
        <div class="mt-6 border-2 border-accent-200">
          <p class="text-center midashi-text">CATEGORY</p>
          <CategoryList
            class="mx-4 mb-2"
            :categories="categories"
          ></CategoryList>
          <!-- :categories="['i', 'love', 'you?']" -->
        </div>
        <!-- TAGエリア -->
        <p class="text-center midashi-text mt-6">TAG</p>
        <TagList class="pl-4" :tags="tags"></TagList>
      </div>
    </div>
  </div>
</template>

<style>
.class h1 {
  font-size: 20px;
}
</style>

<script>
import HeaderNavigation from "../../components/HeaderNavigation.vue";
import ArticleHeading from "../../components/ArticleHeading.vue";
import CategoryList from "../../components/CategoryList.vue";
import TagList from "../../components/TagList.vue";

import { parseISO, format } from "date-fns";
import { createClient } from "microcms-js-sdk";
import Pickup from "../../components/Pickup.vue";
import NewPosts from "../../components/NewPosts.vue";
import { id, ta } from "date-fns/locale";

// TODO envファイルから読めないから直書き　え〜やだ〜キモーーイ
const client = createClient({
  serviceDomain: "aripage",
  apiKey: "x0q8XMOGq8E4k1M04oj1oYci7k5eRg9FOpDa",
});

export default {
  name: "Home",
  components: { ArticleHeading, CategoryList, TagList, Pickup },
  data() {
    return {
      blog: {},
      prevBlog: null, //前の記事で表示する
      nextBlog: null, //次の記事で表示する
      pickup: [],
      categories: [],
      tags: [],
      newposts: [],
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
          console.log("前の記事", this.prevBlog);
          console.log(this.prevBlog.eyecatch);
        }

        if (targetIdx < contents.length - 1) {
          // 「次の記事」用にブログIDより一つ後の記事を保持する
          this.nextBlog = contents[targetIdx + 1];
        }
      }
    });

    // ブログ記事をidから１件取得
    client
      .get({ endpoint: "blogs", contentId: this.$route.params.blog_id })
      .then((content) => {
        console.group("microcmsから取得したデータ");
        console.log(content.content);
        console.groupEnd();

        // // ↓ここで日付の情報をライブラリを使用して取得している。
        // revisedAtプロパティを日付として解析し、指定された形式でフォーマットする。 "yyyy.MM.dd"を変えれば日付の書式を変えれる。
        // this.blog = content;
      });
    // カテゴリの記事を取得　{ contents }で分割代入を使用することで、一度に複数の要素を変数に代入することができる。
    client.get({ endpoint: "categories" }).then(({ contents }) => {
      console.group("microcmsから取得したデータ『カテゴリ』");
      console.log(contents);
      console.groupEnd();

      this.categories = contents;
    });
    // タグの記事を取得
    client.get({ endpoint: "tags" }).then(({ contents }) => {
      console.group("microcmsから取得したデータ『タグ』");
      console.log(contents);
      console.groupEnd();

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

<style>
.santen p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.santen p:not(:first-child) {
  display: none;
}

.midashi-text {
  font-size: 30px;
}

.page-navigation:hover .vue-navigation-icon {
  color: rgb(222 131 95);
}
</style>
