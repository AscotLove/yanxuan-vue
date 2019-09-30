import Mock  from 'mockjs';
import homeData from './homeData';
import category from './category';

Mock.mock('/homeData',{code: 0, data: homeData})
Mock.mock('/catelist',{code: 0, data: category})
