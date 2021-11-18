import _ from 'lodash'

console.log(_.join(['Jack', 'Bruce', 'Andy'], '---'));

let arr = [1, 2, 3, 4, 5, 12];
_.reverse(arr);
console.log('经过lodash调用反转数组方法处理后: ', arr);
