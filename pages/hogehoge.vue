<template>
  <div>
    <div>aripage</div>
    <!-- ↓tailwindで登録されていたらstyle="justify-content:space-around; display: flex;" が短くできclassに変更可能-->
    <ul class="flex justify-around">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </ul>
    <div class="flex-row sm:flex">
      <div class="bg-yellow-500 w-1/2">
        <!-- 画像入れるかも -->
      </div>
      <div class="bg-red-500 flex-auto">
        <p class="midashi-text">名前</p>
        <p>ただの主婦。</p>
      </div>
    </div>
    <button
      class="ml-auto mr-0 block bg-black text-white py-2 px-6 rounded-full"
    >
      ABOUT
    </button>
    <div class="bg-purple-200">
      <p class="midashi-text">BLOG</p>
    </div>
    <div class="flex-row border-b border-orange-300">
      <ArticleHeading
        imgSrc="/image/9D2380A0-70EE-443F-8B0D-17568EE22667_1_105_c.jpeg"
        caption="１番目"
      >
      </ArticleHeading>
      <ArticleHeading imgSrc="/image/IMG_7305.PNG" caption="２番目">
      </ArticleHeading>
      <ArticleHeading imgSrc="" caption="３番目"> </ArticleHeading>
      <ArticleHeading imgSrc="" caption="４番目"> </ArticleHeading>
      <ArticleHeading imgSrc="" caption="５番目"> </ArticleHeading>
    </div>
  </div>
</template>

<script>
import ArticleHeading from "../components/ArticleHeading.vue";

export default {
  name: "HogeHoge",
  components: { ArticleHeading },
};
</script>

<style scoped>
.midashi-text {
  font-size: 30px;
}
</style>
