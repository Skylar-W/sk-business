import addTest from './public/js/test'
import showStr from './public/js/show'
import './public/css/app.css'
import pds from './assets/pds.csv'
import phone from './assets/phone.xml'
import yaml from './assets/test.yaml'
import toml from './assets/abc.toml'
import json5 from './assets/test.json5'
import _ from 'lodash'
import IptAsync from './public/js/ipt-async'
import Drg from './public/images/drg.jpg'


addTest(7, 9)
showStr()

console.log(pds);

console.log(phone);

console.log(yaml.websites);

console.log(toml.title);
console.log(toml.owner.name);

console.log(json5.title);

// loadsh 测试
function Foo() {
  this.name = 'KALI';
  this.age = 35;
  this.city = 'Torota'
}
 
Foo.prototype.sayHi = function() {
  return `Hello, everyone, I'm ${this.name} and ${this.age} years old !`
};
 
console.log(_.toPairsIn(new Foo));

//懒加载测试
const btn = document.createElement('button')
btn.innerText = '点击加载math.js文件'
btn.addEventListener('click', () => {
  import(/* webpackChunkName: 'mathprt', webpackPrefetch: true */'./public/js/math')
    .then(({multip}) => {
      console.log('math模块被加载了,调用multip方法输出结果: ', multip(12, 15));
    })
})

document.body.appendChild(btn)

const oImg = document.createElement('img')
oImg.src = Drg
oImg.style.cssText = 'width: 750px; height: auto; border: 2px solid purple'
document.body.appendChild(oImg)