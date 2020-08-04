var posY = 0; // 纵轴滚动距离
var innerH = window.innerHeight;
var maxH = 5760 - window.innerHeight; // 页面可以滚动的活动范围
var bgArr = window.bgImgUrl || [];
var i = 0, bgImgs = [], images = [],  count = 0; // i 资源计数器  bgImgs 背景图片对象数组   images 图片资源数组  count 主帧
var ft = null, banner = null;

loadBg(()=>{
	i = 0;
	loadImg(()=>{
		requestAnimationFrame(init);
	});
});

function init(){
	count ++;

	bgImgs.forEach(function(v,i){
		ctx.drawImage(v,0,i*1280+posY);
  });
  
  drawImgItems();
	requestAnimationFrame(init);
}

function drawImgItems() {
  images.forEach((v,i) => {
    if (!v.pos) return;
    if (v.multiple){
      if ( isArray(v.o) ) {
        v.o.forEach((k) =>{
          ctx.drawImage(v.img,v.pos[v.index][0],v.pos[v.index][1],k.w,k.h,k.x,k.y+posY,k.w*v.s,k.h*v.s);
        })
      } else {
        ctx.drawImage(v.img,v.pos[v.index][0],v.pos[v.index][1],v.o.w,v.o.h,v.o.x,v.o.y+posY,v.o.w*v.s,v.o.h*v.s);
      }
      if ( count % v.skip == 0 ) v.pause = false;
      //控制动图的切换频率
      if( count % v.step == 0 && !v.pause ) {
        v.index ++;
      }
      if ( type(v.skip) != 'undefined' && v.index == v.pos.length ) v.pause = true;
      v.index %= v.pos.length;
    } else {
      ctx.drawImage(v.img,v.pos[0],v.pos[1],v.o.w,v.o.h,v.o.x,v.o.y+posY,v.o.w*v.s,v.o.h*v.s);
    }
  });
}

function loadBg(callback){
	var oImg = new Image();

	oImg.onload = function(){
		bgImgs.push( this );
		i ++;
		if( i < bgArr.length ) loadBg(callback);
		if( i == bgArr.length ) callback();
	};

	oImg.onerror = function(){
		i++;
		if( i < bgArr.length ) loadBg(callback);
		if( i == bgArr.length ) callback();
	};

	oImg.src = bgArr[i];
}

function loadImg(callback){
	var oImg = new Image();

	oImg.onload = function(){
    this.name = sources[i].name;
    sources[i].img = this;
    sources[i].index = 0;
    images.push(sources[i]);

		i ++;
		if( i < sources.length ) loadImg(callback);
		if( i == sources.length ) callback();
	};

	oImg.onerror = function(){
		i++;
		if( i < sources.length ) loadImg(callback);
		if( i == sources.length ) callback();
	};

	oImg.src = sources[i].src;
}


function mouseScroll(ev){

	var bDown = true;//假设是向下滚动
	var speed = 0;

	if(ev.wheelDelta){
		//console.log( ev.wheelDelta ); //负 下 正上
		bDown = ev.wheelDelta < 0;
		speed = Math.abs( ev.wheelDelta );
	}else{
		//console.log( ev.detail ); //负 上 正 下
		bDown = ev.detail > 0;
		speed = Math.abs( ev.detail ) * 10;
	}

	if( bDown ){
		posY -= speed;
		if( posY < -maxH ) posY = -maxH;
	}else{
		posY += speed;
		if( posY > 0 ) posY = 0;
	}

	oWrap.style.backgroundPosition = "0px " + posY + "px";

	if(ev.preventDefault) ev.preventDefault();
	return false;
};

function getImg(name){
	return images.filter(function(v){
		return v.name == name;
	})[0];
}

function isArray (arr) {
  return !!( type(arr) === 'array');
}

function type (o) {
  return Object.prototype.toString.call(o).slice(8,-1).toLowerCase();
}

function linear(t,b,c,d){ return c*t/d + b; }