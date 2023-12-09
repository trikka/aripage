<template>
  <!-- ulタグとは順序のない箇条書きリストを作る要素。 -->
  <ul
    class="flex justify-around bg-accent-200 text-accent font-bold text-center"
  >
    <!-- ↓v-forは反復処理
  "navs"を使用して配列内の各要素にアクセスし、元のデータを参照し"nav"を通じて各要素に対して反復処理を行うためのエイリアス(別名)として機能する-->
    <li
      v-for="nav in navs"
      class="h-full w-full py-4 hover:scale-125 duration-200 cursor-pointer"
    >
      <!--  nav.path の値をリンク先のURLとして指定。'/about'だとまだページを作っていないから表示されない
      :style="nav.style"をつけると色を指定できる -->
      <NuxtLink :to="nav.path">{{ nav.label }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
// ↓変数や定数、関数などの処理を、１つの機能として渡します。いわゆるモジュール（ハードウェアやソフトウェアにおける、ひとまとまりの機能・要素のこと）
export default {
  name: "HeaderNavigation",
  // ↓Properties（財産、所有物）の略で親コンポーネントから子コンポーネントに文字列、数値、配列やオブジェクトなどの値を渡す役割
  props: {
    navs: [],
  },
};
</script>
