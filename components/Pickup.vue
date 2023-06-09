<template>
  <!--  v-appで包むとコンポーネントは正しく動作する。これはクロスブラウザーでの互換性を確保するために必要である。-->
  <v-app class="h-80 p-4">
    <v-carousel
      cycle
      height="320"
      interval="2000"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <!-- 
      progress
      hide-delimiters -->
      <!-- <v-carousel-item v-for="(slide, i) of slides" :key="i">
        <div class="block border border-primary w-full">
          {{ slide }}
        </div>
      </v-carousel-item> -->
      <v-carousel-item v-for="(blog, i) of blogs" :key="i">
        <div class="border border-primary relative">
          <!-- img :srcは 画像のURLを指定するための構文-->
          <img :src="blog.eyecatch.url" class="object-cover w-80 h-80" />
          <div class="absolute bottom-0 inset-x-0 mb-10 mx-4">
            <p class="text-white font-bold text-4xl">{{ blog.title }}</p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  name: "Pickup",
  data() {
    return {
      slides: ["indigo", "green", "yellow", "pink"],
    };
  },
  props: {
    blogs: [],
  },
  mounted() {
    console.log("pickup表示するブログ記事", this.blogs);
  },
};
</script>
