import { createStore } from "vuex";
import { ITextList } from "@/interfaces/ITextList";
import { default as textList } from "@/data/translations.json";
import { getKeyValue } from "@/utils";

export default createStore({
  state: {
    language: "",
    translations: textList.es,
  },
  getters: {
    getLanguage(state): string {
      return state.language;
    },
    getTranslations(state): ITextList {
      return state.translations;
    },
  },
  mutations: {
    SET_TRANSLATIONS: (state, payload) => {
      state.language = payload.translations.language;
      state.translations = payload.translations;
      console.log("store translations after mutation", state.translations);
    },
  },
  actions: {
    changeLanguage: ({ commit }, payload): ITextList => {
      // we cannot read textList[payload.language] so I created getKeyValue function in @/utils.js
      // it was throwing this error Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
      // useful links: https://github.com/microsoft/TypeScript/issues/35859, https://bit.ly/3viMGeG
      const translations: ITextList = getKeyValue(textList)(payload.language);
      commit({
        type: "SET_TRANSLATIONS",
        translations: translations,
      });
      return translations;
    },
  },
  modules: {},
});
