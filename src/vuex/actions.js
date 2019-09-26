import {
  HOME_STATE,
} from './mutation-type';

const OK = 0
import homeHttp from '@api/Home';
export default {
  async homeUpdate({commit}) {
    const res = await homeHttp.grow();
    if (res.code === OK) commit(HOME_STATE, res.data)
  }
}

