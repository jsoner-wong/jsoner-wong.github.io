<?php

require_once "../weixinapi.php";
//print_r( $_GET );
$code = $_GET['code'];

// echo $code;

// $url = "https://api.weixin.qq.com/sns/oauth2/access_token";
// $data = "appid=wxbc9d836f344f7c25&secret=73bbd6b9dbb54b17518ea1f559a4a8d8&code={$code}&grant_type=authorization_code";
// echo httpGet($url,$data);

// $str = httpGet($url,$data);

// echo getSnsToken($code);
// exit();

$str = getSnsToken($code);
$obj = json_decode($str);
$token = $obj->access_token;
$openid = $obj->openid;
$url = "https://api.weixin.qq.com/sns/userinfo";
$data = "access_token={$token}&openid={$openid}";
// https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN 

$infoStr = httpGet($url,$data);
$infoObj = json_decode($infoStr);
$sexArr = ['未填写','男','女'];
$nick = $infoObj->nickname;
$sex = $sexArr[$infoObj->sex];
$headimgurl = $infoObj->headimgurl;

echo "昵称：{$nick}，性别：{$sex}<br>头像：<img width='80' src='$headimgurl'>";

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1, maximum-scale=1">
	<title> 数钱游戏 </title>
	<link rel="stylesheet" type="text/css" href="css/css.css">
	<link rel="stylesheet" type="text/css" href="css/animate.min.css">
	<script>
	window.onload = function(){
		var oHtml = document.getElementsByTagName('html')[0];
		var innerW = document.body.clientWidth,scale = innerW / 320;
		oHtml.style.fontSize = 625 * scale + '%';
	};
	</script>
</head>
<body>
	<div id="page1">
		<img class="tiaozhan animated" src="images/tiaozhan.png">
		<img class="yingqu animated" src="images/yingqu.png">
		<div class="begin">
			<img src="images/start_game.png" class="beginBtn animated infinite pulse">
			<img src="images/shou.png" class="hand fadeOut animated infinite">
		</div>
	</div>
	<div id="page2">
		<div class="tips">
			<img src="images/p2_txt1.png" alt="">
		</div>
		<ul class="score">
		<!-- "008"  "019" "118" -->
			<li>0</li>
			<li>0</li>
			<li>0</li>
			<li class="time">60</li>
		</ul>
		<div class="money">
			<img src="images/p2_qian.jpg" alt="">
			<!-- <img src="images/p2_qian.jpg" alt="" class="money_clone"> -->
			<span class="hand animated infinite fadeOutUp"></span>
		</div>
		<div class="mask"></div>
	</div>
	<div id="page3">
		<div class="tips">
			<img src="images/p3_acquire.png">
			<p class="results">￥20</p>
			<p class="text">你太厉害了，快要强到没对手了</p>
			<p class="notice">玩家最高战绩：￥<span>123</span>，当前排名：第<span>10</span>位</p>
		</div>
		<div class="btns">
			<a href="javascript:;" class="again">再来一次</a>
			<a href="javascript:;" class="share">分享给朋友</a>
		</div>
	</div>
	<div id="menu">
		<a href="javascript:;" class="ranking">数钱榜</a>
		<a href="javascript:;" class="activity_rule">活动规则</a>
		<a href="javascript:;" class="prize">活动奖品</a>
		<a href="javascript:;" class="shiyong">奖券使用说明</a>
	</div>
	<div id="pops">
		<div class="ranking">
			<span class="close"></span>
		</div>
		<div class="activity_rule">
			<h2>活动规则</h2>
			<p>1、每人有多次游戏机会，但成绩只能提交一次，且提交之后不能更改！<br>
				2、提交成绩时要提供姓名及手机号码作为兑换凭证，因用户本人未在规定时间内提供正确的手机号码造成的奖品损失，由用户承担。<br>
				3、活动时间为2016年5月11日-5月19日24:00，活动结束后将在“雾灵山庄”微信公布中奖名单。<br>
				4、获奖规则：系统将根据大家提交的成绩，按照由多到少的规则进行排行，排名第1的网友将获得一等奖，排名第2-第21位的网友将分获二等奖，以此类推。<br>
				5、奖品的发放：活动结束后，将由工作人员与您取得联系，并将相应的卡券编号发送到您提供的手机号码上。	
				</p>
				<span class="close"></span>
		</div>
		<div class="prize">
			<h2>活动奖品</h2>
			<p>一等奖1人：价值1488元7号楼1晚豪华标间免费房券1张，并可享康体项目3折优惠；</p>
			<p>二等奖20人：100元订房代金券每人1张，并可享康体项目4折优惠；</p>
			<p>三等奖50人：50元订房代金券每人1张，并可享康体项目5折优惠。</p>
			<p>奖品的有效期：2016年5月20日至6月15日（周五、周六及法定节假日不可用）</p>
			<span class="close"></span>			
		</div>
		<div class="shiyong">
			<h2>奖券使用说明</h2>
			<p>1、奖品的使用：请务必至少提前一周致电010-81027788或81027799进行预约，并于入住时向前台服务人员出示您手机上收到的卡券编号即可使用（需同时验证获奖人姓名与手机号码）。<br>
				2、代金券仅适用于线下门市价入住客房消费使用，不适用于通过携程或微信等其他线上渠道预定使用。<br>
				3、免费房安排的房间将视当时酒店排房情况而定，如您所预约的时段预订已满，将与您协商调整入住时间。<br>
				4、免费房券及代金券不得用于除订房外其他产品消费，不得与酒店其他优惠折扣或礼券同时使用，且不予退换、兑换现金或找赎。<br>
				5、对于恶意刷奖者和作弊者，主办方有权取消其兑奖资格。</p>
			<span class="close"></span>			
		</div>
		<div class="userInfo">
			<form id="userForm" name="userForm">
				<input type="text" name="user" placeholder="姓名" class="user">
				<input type="text" name="mobile" placeholder="手机" class="mobile">
				<input type="button" class="submit">
			</form>
			<span class="close"></span>
		</div>
	</div>
	<script src="js/touch.min.js"></script>
	<script src="js/common.js"></script>
	<script src="js/main.js"></script>
</body>
</html>