import Vue from 'vue';
import Vuex, { Store} from 'vuex';
import state from './states';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);

export default new Store({
  state,
  mutations,
  actions,
})