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
      :navs="['HOME', 'ABOUT', 'BLOG', 'CONTACT']"
    ></HeaderNavigation>
    <!-- <div class="flex-row sm:flex">
      <div class="bg-yellow-500 w-1/2"> -->
    <!-- 画像入れるかも -->
    <!-- </div>
      <div class="bg-red-500 flex-auto">
        <p class="midashi-text">名前</p>
        <p>ただの主婦。</p>
      </div>
    </div> -->
    <button
      class="ml-auto mr-0 block bg-accent-200 text-white py-2 px-6 rounded-full"
    >
      ABOUT
    </button>
    <div>
      <p class="midashi-text">BLOG</p>
    </div>
    <!-- ↓各アイテムを均等に配置し最初のアイテムは先頭に寄せ、最後のアイテムは末尾に寄せる  -->
    <div class="flex justify-between">
      <!-- ブログ記事見出しエリア -->
      <!-- flex autoにすることでフレックスコンテナーの空き領域を埋めるために伸長するためにつけた-->
      <div class="flex-row border-b border-primary flex-auto px-8">
        <!-- ↓反復処理を行っている。,idxは反復する数字のデータをとってきている。:keyはVue.において各要素を一意に識別するための特別な属性。一般的には、インデックス（idx）を使用することがあるが、それだけではない。
          識別子（Identifier） -->
        <ArticleHeading
          v-for="(blog, idx) of blogs"
          :key="idx"
          :imgSrc="blog.eyecatch.url"
          :caption="blog.title"
          :postedDate="blog.formatedDate"
        >
        </ArticleHeading>
      </div>
      <!-- サブメニューエリア -->
      <div class="w-80">
        <!-- pick up表示エリア -->
        <p>pick up</p>
        <div class="h-20 bg-slate-300">imo</div>
        <div class="mt-4 h-20 bg-pink-300">potato</div>
        <div class="mt-4 h-20 bg-pink-300">beni</div>
        <div class="mt-4 h-20 bg-pink-300">haruka</div>
        <div class="mt-4 h-20 bg-pink-300">jya-mann</div>
        <div class="mt-4 h-20 bg-pink-300">potato</div>
        <!-- カテゴリー表示エリア -->
        <div class="mt-4 border-2 border-accent-200">
          <p class="text-center midashi-text">CATEGORY</p>
          <CategoryList
            class="mx-4 mb-2"
            :categories="['i', 'love', 'you?']"
          ></CategoryList>
        </div>
        <!-- TAGエリア -->
        <p class="text-center midashi-text mt-2">TAG</p>
        <TagList
          class="pl-4"
          :tags="[
            'ピクミン',
            '燃えるきのこ',
            '水晶のキノコ',
            '水キノコ',
            '',
            '',
            '',
            '',
            '',
          ]"
        ></TagList>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from "../components/HeaderNavigation.vue";
import ArticleHeading from "../components/ArticleHeading.vue";
import CategoryList from "../components/CategoryList.vue";
import TagList from "../components/TagList.vue";

import { parseISO, format } from "date-fns";
import { createClient } from "microcms-js-sdk";

// TODO envファイルから読めないから直書き　え〜やだ〜キモーーイ
const client = createClient({
  serviceDomain: "aripage",
  apiKey: "x0q8XMOGq8E4k1M04oj1oYci7k5eRg9FOpDa",
});

export default {
  name: "HogeHoge",
  components: { ArticleHeading, CategoryList, TagList },
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    // ブログ記事を全件取得
    client.get({ endpoint: "blogs" }).then(({ contents }) => {
      console.group("microcmsから取得したデータ");
      console.log(contents);
      console.groupEnd();

      // // ↓ここで日付の情報をライブラリを使用して取得している。
      // revisedAtプロパティを日付として解析し、指定された形式でフォーマットする。 "yyyy.MM.dd"を変えれば日付の書式を変えれる。
      this.blogs = contents.map((e) => {
        e.formatedDate = format(parseISO(e.revisedAt), "yyyy.MM.dd");
        return e;
      });
    });
  },
};
</script>

<style scoped>
.midashi-text {
  font-size: 30px;
}
</style>
