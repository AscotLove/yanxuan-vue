import Vue from 'vue';
import veeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';

Vue.use(veeValidate);

Validator.localize('zh_CN',{
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号'
  }
})

Validator.extend('mobile', {
  lazy: true,
  validate: value => {
    return  /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '不符合规范'
})