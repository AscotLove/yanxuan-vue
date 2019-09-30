import {
  HOME_STATE,
  CATELIST_STATE,
  TOPICNAV_STATE,
  TOPICGOODS_STATE,
  USER_STATE,
} from './mutation-type';

export default {
  [HOME_STATE](state, homeState) {
    state.homeState = homeState
  },
  [CATELIST_STATE](state, categories) {
    state.categories = categories
  },
  [USER_STATE](state, user) {
    state.user = user
  },
  [TOPICGOODS_STATE](state, TopicGoods) {
    state.TopicGoods = TopicGoods
  },
  [TOPICNAV_STATE](state, TopicNav) {
    state.TopicNav = TopicNav
  },
}