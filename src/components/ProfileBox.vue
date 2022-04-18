<template>
  <div>
    <ul>
      <li v-for="(item, index) in props.data" :key="index">{{ item.title }}</li>
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
}
const props = defineProps<Props>();
</script>
