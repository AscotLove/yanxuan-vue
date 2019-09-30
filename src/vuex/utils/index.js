import router from '@router';
import {USER_STATE} from '../mutation-type';

function getItem() {
  localStorage.getItem("USER")
}

function setItem(user) {
  localStorage.setItem("USER", JSON.stringify(user))
}

function successLogin(commit,user) {
  setItem(user);
  commit(USER_STATE,user);
  router.replace('/')
}
export {
  successLogin
}