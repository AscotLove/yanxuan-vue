import Mock  from 'mockjs';
import homeData from './homeData';

Mock.mock('/homeData',{code: 0, data: homeData})