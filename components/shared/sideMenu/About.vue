<template>
  <div>
    <!-- 画面サイズに応じて出し分け -->
    <div class="max-sm:hidden">
      <p class="text-center mt-6">ari</p>
      <p>{{ introduction }}</p>
    </div>
    <div class="sm:hidden">
      <div>ABOUT</div>
      <div class="font-bold">aripageについて</div>
      <p>{{ introduction }}</p>
      <div
        class="mt-3 bg-primary rounded-3xl w-48 h-10 text-center leading-10 font-bold text-xl text-white hover:bg-primary-200 hover:text-bg-200 cursor-pointer duration-200 m-auto"
      >
        詳しくはこちら
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      introduction:
        "全くプログラム知識のない人間が気まぐれで始めたブログ。何気ない日常を綴っていきます！",
    };
  },
};
</script>
