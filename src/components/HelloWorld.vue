<template>
  <div id="headerContainer" class="flex flex-wrap">
    <div
      id="hello"
      class="basis-full sm:basis-1/2 text-center sm:text-right px-4 py-4"
    >
      <h1 id="headerClaim">
        <span class="font900 fontDev">
          {{ store.getters.getTranslations.developer }}</span
        >&nbsp;<span class=""> {{ store.getters.getTranslations.atDay }}</span
        >,<br /><span class="font500 fontBeatmaker">
          {{ store.getters.getTranslations.contentCreator }}</span
        >&nbsp;<span class=""> {{ store.getters.getTranslations.atNight }}</span
        ><br />
        <it-button
          type="primary"
          class="float-none sm:float-right"
          outlined
          pulse
          @click="$router.push('/#sobre-mi')"
          >Cuéntame más</it-button
        >
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { Options, Vue } from "vue-class-component";
import { defineProps } from "vue";
import store from "../store";

// @Options({
//   props: {
//     msg: String,
//   },
//   data: {
//     locale: Ref<Locale>({ es: "" }),
//   },
// })

const props = defineProps({
  msg: { type: String, required: false },
});
// const translations: Ref<Translation> = ref({
//   es: { appTitle: "Soy developer" },
// });

// export default class HelloWorld extends Vue {
//   msg!: string;
//   locale!: Locale;
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/mixins.scss";

#headerClaim {
  @include globalTransform;
}
h1 {
  line-height: 2rem;
  font-size: 1rem;
  .fontDev {
    font-size: 2.5rem;
  }
  .fontBeatmaker {
    font-size: 1.25rem;
    line-height: 1.25rem;
    letter-spacing: 1.25px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
