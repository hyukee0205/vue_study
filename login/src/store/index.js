import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: modCommon,
    provider: modProvider
  },
  plugins: [(new VuexPersistence({
    storage: window.localStorage
  })).plugin]
})
