var oWrap = document.getElementById('wrap');
var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');

canvas.height = innerH;
// document.onmousewheel = mouseScroll;
// firefox 下的鼠标滚动事件
document.addEventListener('DOMMouseScroll',mouseScroll, {passive:false});

// 其它浏览器 下的鼠标滚动事件
document.addEventListener('mousewheel',mouseScroll, {passive:false});

// console.log( type('123') )
// console.log( isArray([1,2,3]) )
// console.log( isArray({a:123}) )
// console.log( isArray(123) )
