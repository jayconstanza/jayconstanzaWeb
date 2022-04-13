import { createStore } from "vuex";
import { TextList } from "@/interfaces/TextList";

export default createStore({
  state: {
    language: "",
    translations: {
      language: "",
      claim: "",
      appTitle: "",
    },
  },
  getters: {
    getLanguage(state): string {
      return state.language;
    },
    getTranslations(state): TextList {
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
    changeLanguage: ({ commit, state }, payload): TextList => {
      //esto seria un call al json correspondiente
      console.log("state dentro del changeLanguage", state);

      const translations: TextList = {
        language: payload.language,
        claim: "claim",
        appTitle: "appTitle",
      };
      commit({
        type: "SET_TRANSLATIONS",
        translations: translations,
      });
      return translations;
    },
  },
  modules: {},
});
