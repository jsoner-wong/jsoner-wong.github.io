var bgImgUrl = ["images/bg_1.png","images/bg_2.png","images/bg_3.png","images/bg_4.png","images/bg_5.png"];

var sources = [
	{
		name: 'mainBanner',
		o: {w: 300, h: 400,x: 520,y: 10},
		s: 0.8,
		pos: [0,0],
		multiple: false,
		step: 1,
		src : 'images/mainBanner.png'
	},
	{
		name: 'fountain',
		o: [
			{w: 131, h: 117,x: 596,y: 345},
			{w: 131, h: 117,x: 596,y: 1115},
			{w: 131, h: 117,x: 596,y: 1495},
			{w: 131, h: 117,x: 596,y: 2565},
			{w: 131, h: 117,x: 86,y: 2755}
		],
		s: 0.7,
		pos : [
			[0,0],
			[131,0],
			[0,117],
			[131,117]
		],
		step: 6,
		multiple: true,
		src : 'images/fountain.png'
	},
	{
		name: 'trafficLight',
		o: [
			{w: 62, h: 73,x: 375,y: 90},
			{w: 62, h: 73,x: 850,y: 90},
			{w: 62, h: 73,x: 375,y: 476},
			{w: 62, h: 73,x: 850,y: 470},
			{w: 62, h: 73,x: 646,y: 910},
			{w: 62, h: 73,x: 35,y: 1236},
			{w: 62, h: 73,x: 1165,y: 1236},
			{w: 62, h: 73,x: 95,y: 2096},
			{w: 62, h: 73,x: 625,y: 2166}
		],
		s: 0.8,
		pos : [
			[0,0],
			[63,0],
			[126,0]
		],
		step: 200,
		multiple: true,		
		src : 'images/trafficLight.png'
	},
	{
		name: 'photographer',
		o: [
			{w: 36, h: 65,x: 705,y: 350},
			{w: 36, h: 65,x: 35,y: 1565},
			{w: 36, h: 65,x: 695,y: 1130},
			{w: 36, h: 65,x: 765,y: 2070},
			{w: 36, h: 65,x: 1145,y: 2910}
		],
		s: 0.8,
		pos : [
			[11,0],
			[53,0],
			[90,0],
			[132,0]
		],
		step: 20,
		skip: 600,
		pause: false,
		multiple: true,		
		src : 'images/photographer.png'
	},
	{
		name: 'meizu',
		o: {w: 220, h: 170,x: 40,y: 415},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/meizu.png'
	},
	{
		name: 'mengniu',
		o: {w: 220, h: 170,x: 40,y: 185},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/mengniu.png'
	},
	{
		name: 'singer',
		o: [
			{w: 50, h: 44,x: 76,y: 366},
			{w: 50, h: 44,x: 535,y: 1160},
			{w: 50, h: 44,x: 1160,y: 356},
			{w: 50, h: 44,x: 1066,y: 4325}
		],
		s: 0.8,
		pos : [
			[0,0],
			[54,0],
			[110,0],
			[164,0]
		],
		step: 12,
		multiple: true,
		src : 'images/singer.png'
	},
	{
		name: 'shopping',
		o: [
			{w: 70, h: 73,x: 145,y: 345},
			{w: 70, h: 73,x: 235,y: 700}
			// {w: 36, h: 65,x: 850,y: 90}
		],
		s: 0.8,
		pos : [
			[0,0],
			[60,0],
			[135,0],
			[200,0]
		],
		step: 20,
		skip: 500,
		pause: false,
		multiple: true,
		src : 'images/shopping.png'
	},
	{
		name: 'philips',
		o: {w: 220, h: 170,x: 356,y: 320},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/philips.png'
	},
	{
		name: 'child',
		o: [
			{w: 40, h: 66,x: 815,y: 195},
			{w: 40, h: 66,x: 1105,y: 935}
			// {w: 36, h: 65,x: 850,y: 90}
		],
		s: 0.8,
		pos : [
			[6,0],
			[47,0],
			[88,0],
			[128,0]
		],
		step: 20,
		multiple: true,
		src : 'images/child.png'
	},
	{
		name: 'lovers',
		o: [
			{w: 75, h: 70,x: 425,y: 205},
			{w: 75, h: 70,x: 75,y: 925},
			{w: 75, h: 70,x: 1165,y: 685},
			// {w: 36, h: 65,x: 850,y: 90}
		],
		s: 0.8,
		pos : [
			[5,0],
			[80,0],
			[160,0],
			[232,0]
		],
		step: 20,
		skip: 600,
		pause: false,
		multiple: true,
		src : 'images/lovers.png'
	},
	{
		name: 'luolaihome',
		o: {w: 220, h: 170,x: 750,y: 315},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/luolaihome.png'
	},
	{
		name: 'midea',
		o: {w: 220, h: 170,x: 1060,y: 170},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/midea.png'
	},
	{
		name: 'jackjones',
		o: {w: 220, h: 170,x: 1065,y: 415},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/jackjones.png'
	},
	{
		name: 'esteelauder',
		o: {w: 220, h: 170,x: 555,y: 436},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/esteelauder.png'
	},
	{
		name: 'loreal',
		o: {w: 220, h: 170,x: 315,y: 546},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/loreal.png'
	},
	{
		name: 'pg',
		o: {w: 220, h: 170,x: 805,y: 546},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/pg.png'
	},
	{
		name: 'haier',
		o: {w: 220, h: 170,x: 562,y: 596},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/haier.png'
	},
	{
		name: 'hearer',
		o: [
			{w: 50, h: 68,x: 755,y: 50},
			{w: 50, h: 68,x: 810,y: 1760},
			{w: 50, h: 68,x: 42,y: 2780}
			// {w: 36, h: 65,x: 850,y: 90}
		],
		s: 0.8,
		pos : [
			[6,0],
			[54,0],
			[103,0],
			[151,0]
		],
		step: 20,
		pause: false,
		multiple: true,
		src : 'images/hearer.png'
	},
	{
		name: 'officer',
		o: [
			{w: 60, h: 60,x: 950,y: 706},
			{w: 60, h: 60,x: 462,y: 2758}
			// {w: 36, h: 65,x: 850,y: 90}
		],
		s: 0.8,
		pos : [
			[8,0],
			[65,0],
			[125,0],
			[8,58],
			[65,58],
			[125,58]
		],
		step: 10,
		pause: false,
		multiple: true,
		src : 'images/officer.png'
	},
	{
		name: 'honor',
		o: {w: 220, h: 170,x: 45,y: 752},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/honor.png'
	},
	{
		name: 'suning',
		o: {w: 220, h: 170,x: 370,y: 782},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/suning.png'
	},
	{
		name: 'only',
		o: {w: 220, h: 170,x: 356,y: 1022},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/only.png'
	},
	{
		name: 'zara',
		o: {w: 220, h: 170,x: 1075,y: 752},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/zara.png'
	},
	{
		name: 'lining',
		o: {w: 220, h: 170,x: 48,y: 1022},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/lining.png'
	},
	{
		name: 'tmallCloth',
		o: {w: 220, h: 170,x: 560,y: 932},
		s: 0.80,
		pos : [
			0,0
		],
		src : 'images/tmallCloth.png'
	},
	{
		name: 'chowtaifoo',
		o: {w: 220, h: 170,x: 735,y: 765},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/chowtaifoo.png'
	},
	{
		name: 'mercury',
		o: {w: 220, h: 170,x: 765,y: 1025},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/mercury.png'
	},
	{
		name: 'purcotton',
		o: {w: 220, h: 170,x: 1060,y: 1020},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/purcotton.png'
	},
	{
		name: 'hisense',
		o: {w: 220, h: 170,x: 55,y: 1378},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/hisense.png'
	},
	{
		name: 'fuanna',
		o: {w: 220, h: 170,x: 255,y: 1385},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/fuanna.png'
	},
	{
		name: 'sumajiadian',
		o: {w: 220, h: 170,x: 120,y: 1536},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/sumajiadian.png'
	},
	{
		name: 'maniform',
		o: {w: 220, h: 170,x: 65,y: 1736},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/maniform.png'
	},
	{
		name: 'nittaya',
		o: {w: 220, h: 170,x: 65,y: 1890},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/nittaya.png'
	},
	{
		name: 'mendale',
		o: {w: 220, h: 170,x: 560,y: 1320},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/mendale.png'
	},
	{
		name: 'ochirly',
		o: {w: 220, h: 170,x: 470,y: 1585},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/ochirly.png'
	},
	{
		name: 'huawei',
		o: {w: 220, h: 170,x: 680,y: 1585},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/huawei.png'
	},
	{
		name: 'mi',
		o: {w: 220, h: 170,x: 360,y: 1935},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/mi.png'
	},
	{
		name: 'anta',
		o: {w: 220, h: 170,x: 580,y: 1835},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/anta.png'
	},
	{
		name: 'mytz',
		o: {w: 220, h: 170,x: 580,y: 2005},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/mytz.png'
	},
	{
		name: 'schwarzkopf',
		o: {w: 220, h: 170,x: 780,y: 1925},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/schwarzkopf.png'
	},
	{
		name: 'tcl',
		o: {w: 220, h: 170,x: 872,y: 1390},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/tcl.png'
	},
	{
		name: 'bql',
		o: {w: 220, h: 170,x: 1072,y: 1380},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/bql.png'
	},
	{
		name: 'tmallhome',
		o: {w: 220, h: 170,x: 992,y: 1540},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/tmallhome.png'
	},
	{
		name: 'lenovo',
		o: {w: 220, h: 170,x: 1060,y: 1725},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/lenovo.png'
	},
	{
		name: 'lsmy',
		o: {w: 220, h: 170,x: 1060,y: 1890},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/lsmy.png'
	},
	{
		name: 'camel',
		o: {w: 220, h: 170,x: 50,y: 2215},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/camel.png'
	},
	{
		name: 'quanyou',
		o: {w: 220, h: 170,x: 50,y: 2395},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/quanyou.png'
	},
	{
		name: 'siemens',
		o: {w: 220, h: 170,x: 45,y: 2570},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/siemens.png'
	},
	{
		name: 'kuka',
		o: {w: 220, h: 170,x: 145,y: 2890},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/kuka.png'
	},
	{
		name: 'tmallphone',
		o: {w: 220, h: 170,x: 320,y: 2185},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/tmallphone.png'
	},
	{
		name: 'qianbi',
		o: {w: 220, h: 170,x: 550,y: 2235},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/qianbi.png'
	},
	{
		name: 'tmallhouse',
		o: {w: 220, h: 170,x: 786,y: 2210},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/tmallhouse.png'
	},
	{
		name: 'xihuzc',
		o: {w: 220, h: 170,x: 386,y: 2398},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/xihuzc.png'
	},
	{
		name: 'tmallnight',
		o: {w: 200, h: 255,x: 566,y: 2398},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/tmallnight.png'
	},
	{
		name: 'huggies',
		o: {w: 220, h: 170,x: 328,y: 2598},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/huggies.png'
	},
	{
		name: 'tmallmz',
		o: {w: 318, h: 220,x: 547,y: 2673},
		s: 0.588,
		pos : [
			0,0
		],
		src : 'images/tmallmz.png'
	},
	{
		name: 'tmallgj',
		o: {w: 220, h: 170,x: 560,y: 2800},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/tmallgj.png'
	},
	{
		name: 'gap',
		o: {w: 290, h: 246,x: 736,y: 2398},
		s: 0.55,
		pos : [
			0,0
		],
		src : 'images/gap.png'
	},
	{
		name: 'veromoda',
		o: {w: 220, h: 170,x: 786,y: 2582},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/veromoda.png'
	},
	{
		name: 'yeehoo',
		o: {w: 220, h: 170,x: 1066,y: 2210},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/yeehoo.png'
	},
	{
		name: 'hla',
		o: {w: 220, h: 170,x: 1066,y: 2390},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/hla.png'
	},
	{
		name: 'skechers',
		o: {w: 220, h: 170,x: 1076,y: 2580},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/skechers.png'
	},
	{
		name: 'vs',
		o: {w: 220, h: 170,x: 1076,y: 2735},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/vs.png'
	},
	{
		name: 'chowsangsang',
		o: {w: 220, h: 170,x: 976,y: 2900},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/chowsangsang.png'
	},
	{
		name: 'rahmen1',
		o: [
			{w: 220, h: 170,x: 32,y: 3245},
			{w: 220, h: 170,x: 1130,y: 3260},
			{w: 220, h: 170,x: 182,y: 3420},
			{w: 220, h: 170,x: 982,y: 3430},
			{w: 220, h: 170,x: 65,y: 3790},
			{w: 220, h: 170,x: 580,y: 4018},
			{w: 220, h: 170,x: 586,y: 4240},
			{w: 220, h: 170,x: 1092,y: 3790},
			{w: 220, h: 170,x: 35,y: 4520},
			{w: 220, h: 170,x: 1126,y: 4520},
			{w: 220, h: 170,x: 575,y: 4460},
			{w: 220, h: 170,x: 575,y: 4660}
		],
		s: 0.8,
		pos : [
			[0,0]
		],
		multiple: true,
		src : 'images/rahmen1.png'
	},
	{
		name: 'rahmen2',
		o: [
			{w: 220, h: 170,x: 180,y: 3285},
			{w: 220, h: 170,x: 982,y: 3285},
			{w: 220, h: 170,x: 578,y: 3200},
			{w: 220, h: 170,x: 32,y: 3420},
			{w: 220, h: 170,x: 1132,y: 3420},
			{w: 220, h: 170,x: 65,y: 4230},
			{w: 220, h: 170,x: 390,y: 3660},
			{w: 220, h: 170,x: 400,y: 4216},
			{w: 220, h: 170,x: 775,y: 3660},
			{w: 220, h: 170,x: 775,y: 4216},
			{w: 220, h: 170,x: 1115,y: 4230},
			{w: 220, h: 170,x: 380,y: 4490},
			{w: 220, h: 170,x: 405,y: 4655},
			{w: 220, h: 170,x: 780,y: 4490},
			{w: 220, h: 170,x: 750,y: 4680}
		],
		s: 0.8,
		pos : [
			[0,0]
		],
		multiple: true,
		src : 'images/rahmen2.png'
	},
	{
		name: 'rahmen3',
		o: [
			{w: 220, h: 170,x: 388,y: 3225},
			{w: 220, h: 170,x: 388,y: 3375},
			{w: 220, h: 170,x: 785,y: 3225},
			{w: 220, h: 170,x: 785,y: 3375},
			{w: 220, h: 170,x: 65,y: 3930},
			{w: 220, h: 170,x: 65,y: 4088},
			{w: 220, h: 170,x: 365,y: 3815},
			{w: 220, h: 170,x: 793,y: 3815},
			{w: 220, h: 170,x: 580,y: 3800},
			{w: 220, h: 170,x: 1096,y: 3932},
			{w: 220, h: 170,x: 1096,y: 4088},
			{w: 220, h: 170,x: 180,y: 4608},
			{w: 220, h: 170,x: 986,y: 4608}
		],
		s: 0.8,
		pos : [
			[0,0]
		],
		multiple: true,
		src : 'images/rahmen3.png'
	},
	{
		name: 'teewee',
		o: {w: 180, h: 90,x: 44,y: 3286},
		s: 0.5,
		pos : [
			0,0
		],
		src : 'images/teewee.jpeg'
	},
	{
		name: 'nvc',
		o: {w: 180, h: 90,x: 194,y: 3316},
		s: 0.5,
		pos : [
			0,0
		],
		src : 'images/nvc.jpeg'
	},
	{
		name: 'dove',
		o: {w: 180, h: 90,x: 48,y: 3452},
		s: 0.5,
		pos : [
			0,0
		],
		src : 'images/dove.jpeg'
	},
	{
		name: 'belle',
		o: {w: 180, h: 90,x: 197,y: 3468},
		s: 0.5,
		pos : [
			0,0
		],
		src : 'images/belle.jpg'
	},
	{
		name: 'hanhoo',
		o: {w: 180, h: 90,x: 403,y: 3264},
		s: 0.5,
		pos : [
			0,0
		],
		src : 'images/hanhoo.jpg'
	},
	{
		name: 'spxh',
		o: {w: 220, h: 170,x: 566,y: 3390},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/spxh.png'
	},
	{
		name: 'yyjk',
		o: {w: 220, h: 170,x: 106,y: 3610},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/yyjk.png'
	},
	{
		name: 'tmallsx',
		o: {w: 220, h: 170,x: 302,y: 3970},
		s: 0.80,
		pos : [
			0,0
		],
		src : 'images/tmallsx.png'
	},
	{
		name: 'hwzy',
		o: {w: 220, h: 170,x: 816,y: 3970},
		s: 0.80,
		pos : [
			0,0
		],
		src : 'images/hwzy.png'
	},
	{
		name: 'tongxin',
		o: {w: 220, h: 170,x: 1030,y: 3603},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/tongxin.png'
	},
	{
		name: 'alicar',
		o: {w: 220, h: 170,x: 560,y: 3598},
		s: 0.75,
		pos : [
			0,0
		],
		src : 'images/alicar.png'
	},
	{
		name: 'rahmen4',
		o: [
			{w: 220, h: 170,x: 36,y: 4700},
			{w: 220, h: 170,x: 1096,y: 5490},
		],
		s: 0.8,
		pos : [
			[0,0]
		],
		multiple: true,
		src : 'images/rahmen4.png'
	},
	{
		name: 'rahmen5',
		o: {w: 220, h: 170,x: 175,y: 4700},
		s: 0.8,
		pos : [
			0,0
		],
		src : 'images/rahmen5.png'
	},
	{
		name: 'rahmen6',
		o: [
			{w: 220, h: 170,x: 380,y: 4840},
			{w: 220, h: 170,x: 582,y: 5050},
		],
		s: 0.8,
		pos : [
			[0,0]
		],
		multiple: true,
		src : 'images/rahmen6.png'
	},
	{
		name: 'traveller',
		o: [
			{w: 65, h: 72,x: 920,y: 1705},
			{w: 65, h: 72,x: 695,y: 2585},
			{w: 65, h: 72,x: 495,y: 4125}
			// {w: 50, h: 44,x: 1160,y: 356}
		],
		s: 0.8,
		pos : [
			[0,0],
			[58,0],
			[114,0],
			[172,0]
		],
		step: 12,
		multiple: true,
		src : 'images/traveller.png'
	},
	{
		name: 'chando',
		o: {w: 180, h: 90,x: 593,y: 3232},
		s: 0.5,
		pos : [
			0,0
		],
		src : 'images/chando.jpeg'
	}
];