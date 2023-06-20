<template>
  <div class="text-text bg-bg">
    <div>
      <h1
        class="text-center tracking-widest font-extrabold text-primary text-7xl my-5"
      >
        aripage det {{ $route.params.blog_id }}
      </h1>
      <NuxtLink to="/">TOPへ</NuxtLink>
    </div>
    <HeaderNavigation :navs="['HOME', 'ABOUT', 'CONTACT']"></HeaderNavigation>
    <!-- <div class="flex-row sm:flex">
      <div class="bg-yellow-500 w-1/2"> -->
    <!-- 画像入れるかも -->
    <!-- </div>
      <div class="bg-red-500 flex-auto">
        <p class="midashi-text">名前</p>
        <p>ただの主婦。</p>
      </div>
    </div> -->

    <!-- <button
      class="ml-auto mr-0 block bg-accent-200 text-white py-2 px-6 rounded-full"
    >
      ABOUT
    </button>
    <div>
      <p class="midashi-text">BLOG</p>
    </div> -->
    <p class="midashi-text"></p>
    <!-- ↓各アイテムを均等に配置し最初のアイテムは先頭に寄せ、最後のアイテムは末尾に寄せる  -->
    <div class="flex justify-between mt-4">
      <!-- ブログ記事見出しエリア -->
      <!-- flex autoにすることでフレックスコンテナーの空き領域を埋めるために伸長するためにつけた-->
      <div class="flex-row flex-auto px-8 mb-8">
        <p class="midashi-text">{{ blog.title }}</p>
        <p>{{ blog.formatedDate }}</p>
        <div class="content" v-html="blog.content"></div>
        <!-- ↓反復処理を行っている。,idxは反復する数字のデータをとってきている。:keyはVue.において各要素を一意に識別するための特別な属性。一般的には、インデックス（idx）を使用することがあるが、それだけではない。
          識別子（Identifier） -->
        <ArticleHeading
          v-for="(blog, idx) of blogs"
          :key="idx"
          :imgSrc="blog.eyecatch.url"
          :caption="blog.title"
          :postedDate="blog.formatedDate"
          :category="blog.category"
        >
        </ArticleHeading>
        <!-- カテゴリ別の他の記事を将来作る -->
        <div class="flex justify-between">
          <p v-img="" title="">前の記事</p>

          <p>次の記事</p>
        </div>
      </div>
      <!-- サブメニューエリア -->
      <div class="w-80 mx-8">
        <!-- 最新記事エリア -->
        <p class="text-center midashi-text">最新記事</p>
        <NewPosts :posts="newposts"></NewPosts>
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
      pickup: [],
      categories: [],
      tags: [],
      newposts: [],
    };
  },
  created() {
    // ブログ記事を全件取得
    client
      .get({ endpoint: "blogs", contentId: this.$route.params.blog_id })
      .then((content) => {
        console.group("microcmsから取得したデータ");
        console.log(content.content);
        console.groupEnd();

        // // ↓ここで日付の情報をライブラリを使用して取得している。
        // revisedAtプロパティを日付として解析し、指定された形式でフォーマットする。 "yyyy.MM.dd"を変えれば日付の書式を変えれる。
        this.blog = content;
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

<style scoped>
.midashi-text {
  font-size: 30px;
}
</style>
