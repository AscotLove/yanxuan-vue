import {
  HOME_STATE,
} from './mutation-type';

export default {
  [HOME_STATE](state, homeState) {
    state.homeState = homeState
  },

}