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
        <ArticleHeading
          imgSrc="/image/9D2380A0-70EE-443F-8B0D-17568EE22667_1_105_c.jpeg"
          caption="反省紫コインピクミン"
        >
        </ArticleHeading>
        <ArticleHeading
          imgSrc="/image/IMG_7305.PNG"
          caption="反省赤コインピクミン"
          categories="ピクミン"
        >
        </ArticleHeading>
        <ArticleHeading
          imgSrc="/image/IMG_5DC3ACEEF601-1.jpeg"
          caption="きのこ"
        >
        </ArticleHeading>
        <ArticleHeading imgSrc="/image/IMG_6496.jpeg" caption="ラミレじぃ">
        </ArticleHeading>
        <ArticleHeading imgSrc="" caption="５番目"> </ArticleHeading>
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

export default {
  name: "HogeHoge",
  components: { ArticleHeading, CategoryList, TagList },
};
</script>

<style scoped>
.midashi-text {
  font-size: 30px;
}
</style>
