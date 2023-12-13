<template>
  <div className="md:flex flex-row bg-bg-300">
    <Header />

    <!-- ↓各アイテムを均等に配置し最初のアイテムは先頭に寄せ、最後のアイテムは末尾に寄せる  -->
    <div class="md:flex justify-between mt-4">
      <!-- ブログ記事見出しエリア -->
      <!-- flex autoにすることでフレックスコンテナーの空き領域を埋めるために伸長するためにつけた
            max-sm:hiddenはsmall以下になると小さい画面サイズで要素を非表示にできるようにしている-->

      <div class="md:flex-row flex-auto px-8 mb-8 max-sm:hidden">
        <p class="midashi-text">BLOG</p>
        <!-- ↓反復処理を行っている。,idxは反復する数字のデータをとってきている。:keyはVue.において各要素を一意に識別するための特別な属性。一般的には、インデックス（idx）を使用することがあるが、それだけではない。
            識別子（Identifier） -->
        <ArticleHeading
          v-for="(blog, idx) of blogs"
          :key="idx"
          :imgSrc="blog.eyecatch.url"
          :caption="blog.title"
          :postedDate="blog.formatedDate"
          :category="blog.category"
          :blogId="blog.id"
          :content="blog.content"
        >
        </ArticleHeading>
      </div>

      <!-- <FooterNavigation :navs="[{label:'1', path: '/'},
                                {label:'2', path: '/'},
                                {label:'3', path: '/'},
                                {label:'4', path: '/'},
                                {label:'5', path: '/'}]"></FooterNavigation> -->

      <!-- スマホ用記事エリアのラッパークラス（スマホサイズで表示、それ以上で非表示） -->
      <div class="sm:hidden flex-auto px-8 mb-8">
        <BlogHeadingmobile
          v-for="(blog, idx) of blogs"
          :key="idx"
          :imgSrc="blog.eyecatch.url"
          :caption="blog.title"
          :postedDate="blog.formatedDate"
          :category="blog.category"
        >
        </BlogHeadingmobile>
      </div>
      <div
        class="sm:hidden bg-primary rounded-3xl w-48 h-10 text-center leading-10 font-bold text-xl text-white hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200 m-auto mb-2"
      >
        投稿一覧へ
      </div>

      <!-- サブメニューエリア -->
      <SideMenu class="max-sm:mx-auto" />
    </div>
  </div>
</template>

<script>
import { parseISO, format } from "date-fns";
import { createClient } from "microcms-js-sdk";

import Header from "../components/shared/header/Header.vue";
import ArticleHeading from "../components/ArticleHeading.vue";
import BlogHeadingmobile from "../components/BlogHeadingmobile.vue";
import SideMenu from "../components/shared/sideMenu/SideMenu.vue";
import FooterNavigation from "../components/FooterNavigation.vue";

// TODO envファイルから読めないから直書き　え〜やだ〜キモーーイ
const client = createClient({
  serviceDomain: "aripage",
  apiKey: "x0q8XMOGq8E4k1M04oj1oYci7k5eRg9FOpDa",
});

export default {
  name: "Home",
  components: {
    Header,
    ArticleHeading,
    BlogHeadingmobile,
    SideMenu,
    FooterNavigation,
  },
  data() {
    return {
      blogs: [],
      pickup: [],
      categories: [],
      tags: [],
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
      this.pickup = this.blogs.filter((blog) => blog.isPickup);
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
  },
};
</script>

<style scoped></style>
