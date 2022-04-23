<template>
  <section class="flex flex-wrap py-4">
    <figure class="basis-full sm:basis-1/3">
      <img class="profilePhoto inline" src="@/assets/jay.jpg" />
    </figure>
    <ProfileBox
      class="basis-full sm:basis-2/3 skewRight text-center sm:text-justify px-10 py-4 tracking-tight"
      :data="description"
    />
  </section>
  <section class="flex flex-wrap py-4">
    <ProfileBox
      class="basis-full sm:basis-1/3 skewLeft text-center px-10 py-4 tracking-tight"
      :heading="$store.getters.getTranslations.attributes"
      :data="attributes"
    />
    <ProfileBox
      :heading="$store.getters.getTranslations.workExperience"
      class="basis-full sm:basis-1/3 text-center px-10 py-4 tracking-tight"
      :data="[
        { title: 'aaaaaaaaaa1' },
        { title: '222222222222222' },
        { title: '3333333' },
      ]"
    />
    <ProfileBox
      class="basis-full sm:basis-1/3 skewRight text-center px-10 py-4 tracking-tight"
      :data="[
        { title: 'asadsdsadasd1' },
        { title: '22222222' },
        { title: '3333333' },
      ]"
    />
  </section>
  <section class="flex flex-wrap py-4"></section>
</template>
<style lang="scss" scoped>
@import "../styles/mixins.scss";
.profilePhoto {
  width: 1rem * 10;
  height: 1rem * 10;
  border-radius: 50%;
  border: 5px solid #000;
  border-style: inset;
}
</style>
<script lang="ts" setup>
import store from "../store";
import { IProfileBoxItem } from "@/interfaces/IProfileBoxItem";

/**
 * IProfileBoxItem props:
  iconName?: string;
  title: string;
  description?: string;
  period?: string;
  heading?: string;
 */
//  TODO: create an aboutMe interface with description, attributes, traits...  rpg style.

const description: IProfileBoxItem[] = [
  { title: store.getters.getTranslations.description },
];
const attributes: IProfileBoxItem[] = [
  {
    title: store.getters.getTranslations.attributes,
  },
];
</script>
