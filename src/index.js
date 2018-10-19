import _ from 'lodash';
import styleCss from './assets/style.css';
import icon from './assets/images/1.jpg';
import printMe from './print.js';

import {square} from './math.js';

import './es6.js';


const root = document.createElement("div");
const img = document.createElement("img");
const btn = document.createElement("button");
const pre  = document.createElement("pre");

pre.innerHTML = [
   'hellow webpack',
   '5 cubed is equal to '+ square(15)
].join('\n\n');

btn.innerHTML = "click me and check the console";
btn.onclick = printMe;
//img.setAttribute("src",icon);
//root.appendChild(img);
root.className = 'box';
root.innerHTML = _.join(['hellow','webpack'],' ');

document.body.appendChild(root);
document.body.appendChild(btn);
document.body.appendChild(pre);

if(module.hot){
	module.hot.accept('./print.js',function (argument) {
	   console.log('accept this prime module');
	   printMe();
	})
}
