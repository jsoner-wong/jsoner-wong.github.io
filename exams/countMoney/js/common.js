function doAnimation(){
	var oTz = $$('.tiaozhan')[0], oYq = $$('.yingqu')[0];
	oTz.className = "tiaozhan animated bounceIn";
	oYq.className = "yingqu animated swing";
	setTimeout(function(){
		oTz.className = "tiaozhan animated";
		oYq.className = "yingqu animated";		
	},2000);
}

function showPops(selector){
	var oPops = $$("#pops");
	var oSub = $$(selector,oPops)[0];
	var oClose = $$(".close",oSub)[0];
	oPops.style.display = "block";
	oSub.style.display = "block";
	console.log(oClose);
	oClose.onclick = function(){
		oPops.style.display = "none";
		oSub.style.display = "none";
	};
}

function countDown(){ //倒计时函数
	if( !window.startCount ){
		var oTime = $$(".time",$$("#page2"))[0];
		var timeOut = oMoney.timeOut;
		window.startCount = true;
		roundTips();
		oTime.timer = setInterval(function(){
			timeOut --;
			oTime.innerHTML = timeOut;
			if( timeOut <= 0 ){
				clearInterval(oTime.timer);
				showResult();
			}
		},1000);
	}
}

function init(){
	var oTips = $$('img',$$('#page2'))[0];
	window.startCount = false;
	oMoney.count = 0;
	setScore(0);
	oTips.src = "images/p2_txt1.png";
	$$(".time")[0].innerHTML = oMoney.timeOut;
	clearInterval(oTips.timer);
}

function showResult(){
	var aText = [
		"你的手速与你的年龄似乎有点不对称",
		"继续努力，你可以做得更好",
		"你太厉害了，快要强到没对手了"
	];

	var oText = $$(".text",$$("#page3"))[0];
	var oResults = $$(".results",$$("#page3"))[0];
	var index = Math.floor( oMoney.count / 10 );
		index = index > 2 ? 2 : index;

	oResults.innerHTML = "￥" + oMoney.count;
	$$("#page2").style.display = "none";
	$$("#page3").style.display = "block";

	oText.innerHTML = aText[index];

}

function roundTips(){
	var arr = ["images/p2_txt1.png","images/p2_txt2.png","images/p2_txt3.png"];
	var oTips = $$('img',$$('#page2'))[0];
	var i = 0;
	clearInterval(oTips.timer);
	oTips.timer = setInterval(function(){
		i ++;
		i %= arr.length; //一到3，就重置成0
		oTips.src = arr[i];
	},3000);
}

function setScore(score){
	var str = transferStr(score);
	var aLi = $$('li',$$('.score')[0]);
	for(var i=0; i<str.length; i++){
		aLi[i].innerHTML = str.charAt(i);
	}
}

function transferStr(n){
	if( n < 10 ){
		return '00' + n;
	}
	if( n < 100 ){
		return '0' + n;
	}
	return '' + n;
}

// $$("#div1")  $$('.active')  $$('div')  $$("<div>")
// $$(function(){}); window.onload = function(){}
//$$([])


function $$(selector,context){
	// selector 选择器   context : 限制获取元素的范围（执行选择的上下文环境）
	var pre,ext,str,tp = type(selector);
	if( tp == "string" ){
		pre = selector.charAt();
		ext = selector.slice(1);
		str = selector.slice(1,-1);
		switch(pre){
			case "#":
				return document.getElementById(ext);
				break;
			case ".":
				return (context||document).getElementsByClassName(ext);
				break;
			case "<":
				return document.createElement(str);
				break;
			default:
				return (context||document).getElementsByTagName(selector);
		}
	}else if( tp == 'function' ){
		window.addEventListener('load',selector);
	}
	return selector;
}
// [1,2,3]   "1,2,3"
function type(o){
	return {}.toString.call(o).slice(8,-1).toLowerCase();
	// return Object.prototype.toString.call(o).slice(8,-1).toLowerCase();
}
