<template>
  <!--  v-appで包むとコンポーネントは正しく動作する。これはクロスブラウザーでの互換性を確保するために必要である。-->
  <v-app class="h-80">
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
      <v-carousel-item v-for="(slide, i) of slides" :key="i">
        <div class="block bg-yellow-500 w-full h-full">hogehogehogeeeee</div>
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
};
</script>
