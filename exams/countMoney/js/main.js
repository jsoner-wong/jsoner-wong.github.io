var oMoney = $$(".money")[0];
oMoney.count = 0;
oMoney.timeOut = 20;

init();

touch.on("#page3 .again","tap",function(){
	init();
	$$("#page2").style.display = "block";
	$$("#page3").style.display = "none";
});

touch.on('#menu .ranking','tap',function(){
	showPops(".ranking"); 
});

touch.on("#menu .activity_rule,#menu .prize,#menu .shiyong",'tap',function(){
	showPops("." + this.className);
});

touch.on('#page1 .begin','tap',function(){
	showPops('.userInfo');
});

touch.on('#pops .submit','tap',function(){
	var sUser = userForm.user.value;
	var sMobile = userForm.mobile.value;
	var re = /^1[34578]\d{9}$/;

	// if( !sUser.trim() || !sMobile.trim() ){
	// 	alert("请将信息填写完整！");
	// 	return;
	// }

	// if( sUser.length < 2 || sUser.length > 8 ){
	// 	alert("用户名只能是2~8个字符");
	// 	return;
	// }

	// if( !re.test(sMobile) ){
	// 	alert("请填写正确的手机号码!");
	// 	return;
	// }

	userForm.parentNode.style.display = "none";
	$$("#pops").style.display = "none";
	$$("#page2").style.display = "block";

});

//zepto.js
touch.on("#page2 .money","swipeup",function(){
	var oImg = $$("img",oMoney)[0];
	var newImg = oImg.cloneNode();
	var oHand = $$(".hand",oMoney)[0];

	oMoney.count ++;
	countDown();
	setScore(oMoney.count);
	newImg.className = "money_clone";
	oHand.style.display = 'none';
	oMoney.appendChild(newImg);

	setTimeout(function(){
		oMoney.removeChild(newImg);
	},1000);
});

doAnimation();