import {
  HOME_STATE,
  CATELIST_STATE,
  TOPICNAV_STATE,
  TOPICGOODS_STATE,
} from './mutation-type';
import {
  successLogin
} from './utils';

const ERROR = 1;
const OK = 0;
const KK = "200";

import {  HomeHttp, LoginHttp, TopicHttp } from '@api';
export default {
  async homeUpdate({commit}) {
    const res = await HomeHttp.grow();
    if (res.code === OK) commit(HOME_STATE, res.data)
  },
  async catelistUpdate({commit}) {
    const res = await HomeHttp.catelist();
    if (res.code === OK) commit(CATELIST_STATE, res.data.categoryL1List)
  },
  async userUpdate({commit},{user}) {
    let res = null;
    if (user.phone) {
       res = await LoginHttp.loginSms({
         phone: user.phone,
         code: user.code
       });
    } else {
       res = await LoginHttp.loginPwd({
         name: user.account,
         pwd: user.psw,
       });
    }
    if (res.code === ERROR) {console.log}
    if (res.code === OK) successLogin(commit, res.data)
  },
  async topicnavUpdate({commit}) {
    const res = await TopicHttp.findNav();
    if (res.code === KK) commit(TOPICNAV_STATE, res.data)
  },
  async topicgoodsUpdate({commit}) {
    const res = await TopicHttp.findGoods();
    if (res.code === KK) commit(TOPICGOODS_STATE, res.data)
  },
}

