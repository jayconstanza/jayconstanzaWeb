<template>
  <div>
    <h2>
      <b>{{ props.heading }}</b>
    </h2>
    <ul>
      <li v-for="(item, index) in props.data" :key="index">
        <span v-html="item.title"></span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "../styles/mixins.scss";
</style>
<script lang="ts" setup>
import { IProfileBoxItem } from "@/interfaces/IProfileBoxItem";
import { defineProps } from "vue";
interface Props {
  data: IProfileBoxItem[];
  heading: string;
}
const props = defineProps<Props>();
console.log("props: ", props);
</script>
