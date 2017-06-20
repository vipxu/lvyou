window.onload = function(){
	var i = 0;
	/******************************注册背景颜色改变******************************/
	var headerOneZhuCe = document.getElementById("headerOneReg");     /****注册div****/
	headerOneReg.onmousemove = function(){
		this.style.backgroundColor = "#676767";
	};
	headerOneReg.onmouseout = function(){
		this.style.backgroundColor = "#434343";
	};
	/******************************注册背景颜色改变******************************/
	/******************************环球下拉列表******************************/
	var headerOneTeXiao = document.getElementById("headerOneTeXiao");     /****下拉菜单div****/
	var headerOneHuanqiu = document.getElementById("headerOneHuanqiu");     /****下拉菜单环球logo的div****/
	var headerOneHuanqiuImg = headerOneHuanqiu.getElementsByTagName("img")[0];     /****logo图片，数组第一位****/
	headerOneHuanqiu.onmousemove = function(){
	    	headerOneHuanqiuImg.src = "img/LogoTexiao2.png";
	    	headerOneTeXiao.style.display = "block";
	};
	headerOneHuanqiu.onmouseout = function(){
	    	headerOneHuanqiuImg.src = "img/LogoTexiao1.png";
	    	headerOneTeXiao.style.display = "none";
	};
	headerOneTeXiao.onmousemove = function(){
		headerOneHuanqiuImg.src = "img/LogoTexiao2.png";
	    	headerOneTeXiao.style.display = "block";
	};
	headerOneTeXiao.onmouseout = function(){
	    	headerOneHuanqiuImg.src = "img/LogoTexiao1.png";
	    	headerOneTeXiao.style.display = "none";
	};
	/******************************环球下拉列表******************************/
	/******************************图片轮播******************************/
	var lunboIndex = 0;
	var lunboTimer = null;
	var lunboArr = document.getElementById("lunboUL");
	var lunboleft = document.getElementById("lunboqian");
	var lunboright = document.getElementById("lunbohou");
	var imgDivArr = lunboArr.getElementsByTagName("li");  //获取lunboArr下的li数组
	var imgDivNum = imgDivArr.length;   //li数组的长度
	var imgDivWidth = imgDivArr[0].offsetWidth;   //图片的宽度
	//将图片排成长条
	lunboArr.style.width = imgDivWidth*imgDivNum + "px";
	for(i=0;i<imgDivNum;i++){
		imgDivArr[i].style.left = imgDivWidth*i + "px";
	}
	
	
	var zhen = 0;
	var donghuaSize = imgDivWidth/10;
	
	if(lunboTimer==null){
		lunboTimer = setInterval(lunbo,5000);
	}
	function lunbo(){
		if(lunboIndex==imgDivNum-3){
			lunboIndex = 0;
			lunboArr.style.left = 0 + "px";
		}
		var subTimer = setInterval(function(){
			lunboArr.style.left = lunboArr.offsetLeft - donghuaSize + "px";
			zhen++;
			if(zhen==10){
				zhen=0;
				lunboArr.style.left = "-" + imgDivWidth*(lunboIndex) + "px";
				clearInterval(subTimer);
			}
		},30);
		
		lunboIndex++;
	}
	lunboleft.onclick = function(){
		clearInterval(lunboTimer);
		if(lunboIndex==0){
			lunboIndex = 5;
			lunboArr.style.left = -5000 + "px";
		}
		var supTimer = setInterval(function(){
			lunboArr.style.left = lunboArr.offsetLeft + donghuaSize + "px";
			zhen++;
			if(zhen==10){
				zhen=0;
				lunboArr.style.left = "-" + imgDivWidth*(lunboIndex) + "px";
				clearInterval(supTimer);
			}
		},30);
		lunboIndex--;
		lunboTimer = setInterval(lunbo,5000);
	}
	lunboright.onclick = function(){
		clearInterval(lunboTimer);
		if(lunboIndex==imgDivNum-3){
			lunboIndex = 0;
			lunboArr.style.left = 0 + "px";
		}
		var supTimer = setInterval(function(){
			lunboArr.style.left = lunboArr.offsetLeft - donghuaSize + "px";
			zhen++;
			if(zhen==10){
				zhen=0;
				lunboArr.style.left = "-" + imgDivWidth*(lunboIndex) + "px";
				clearInterval(supTimer);
			}
		},30);
		lunboIndex++;
		lunboTimer = setInterval(lunbo,5000);
	}
	/******************************图片轮播******************************/
	/******************************手风琴特效******************************/
	var sFQOneArr = document.getElementsByClassName("bodyOneNRRightOne");
	var sFQTwoArr = document.getElementsByClassName("bodyOneNRRightTwo");
	var sFQmytime = null;
	closeContentTWO();
	sFQTwoArr[0].style.display = "block";
	sFQOneArr[0].style.display = "none";
	for(i=0;i<sFQOneArr.length;i++){
		sFQOneArr[i].index = i;
		sFQOneArr[i].onmouseover = function(){
		    closeContentONE();
		    sFQOneArr[this.index].style.display = "none";
		    closeContentTWO();
		    sFQTwoArr[this.index].style.display = "block";
		}
	}
	function closeContentTWO(){
		for(var i=0;i<sFQTwoArr.length;i++){
        		sFQTwoArr[i].style.display = "none";
		}
	}
	function closeContentONE(){
		for(var i=0;i<sFQTwoArr.length;i++){
        		sFQOneArr[i].style.display = "block";
		}
	}
	
	/******************************手风琴特效******************************/
	/*******************************环球旅行制造滑动*****************************/
    var lvXingHuaDongOne = document.getElementById("huanQiuLvXingDianjiA");
    var lvXingHuaDongTwo = document.getElementById("huanQiuLvXingDianjiB");
    var HuanQiuLvXingHuaDongA = document.getElementById("huanQiuLvXingNRhuadongA");
    var HuanQiuLvXingHuaDongB = document.getElementById("huanQiuLvXingNRhuadongB");
    var floagA = true;
    var floagB = false;
    var zhenHD = 0;
   
    	    lvXingHuaDongTwo.onclick = function(){
    	    	 if(floagA){
    	    	    lvXingHuaDongOne.style.backgroundColor = "transparent";
    	    	    lvXingHuaDongOne.style.color = "#fff";
    	    	    lvXingHuaDongTwo.style.backgroundColor = "#fff";
    	    	    lvXingHuaDongTwo.style.color = "#7b7ca2";
    	    	    var huadongTimer = setInterval(function(){
    	    	        HuanQiuLvXingHuaDongA.style.left = HuanQiuLvXingHuaDongA.offsetLeft-10+ "px";
    	    	        HuanQiuLvXingHuaDongB.style.left = HuanQiuLvXingHuaDongB.offsetLeft-10+ "px";
    	    	        floagA = false;
    	     	    floagB = false;
    	    	   	    if(zhenHD==99){
    	    	   	    	    clearInterval(huadongTimer);
    	    	   	    	    HuanQiuLvXingHuaDongA.style.left = - 1000 + "px";
    	     	        HuanQiuLvXingHuaDongB.style.left = 0 + "px";
    	     	        floagA = false;
    	     	        floagB = true;
    	     	        zhenHD = 0;
    	     	    }    
    	    	   	    
    	    	   	    zhenHD++;
    	     	},5);
    	     	}else{
    	     		return false;
    	     	}
    	    };
    
   
        lvXingHuaDongOne.onclick = function(){
        	 if(floagB){
            	lvXingHuaDongOne.style.backgroundColor = "#fff";
    	    	    lvXingHuaDongOne.style.color = "#7b7ca2";
    	    	    lvXingHuaDongTwo.style.backgroundColor = "transparent";
    	    	    lvXingHuaDongTwo.style.color = "#fff";
    	    	     huadongTimerTwo = setInterval(function(){
    	    	        HuanQiuLvXingHuaDongA.style.left = HuanQiuLvXingHuaDongA.offsetLeft+10+ "px";
    	    	        HuanQiuLvXingHuaDongB.style.left = HuanQiuLvXingHuaDongB.offsetLeft+10+ "px";
    	    	        floagA = false;
    	     	    floagB = false;
    	    	   	    if(zhenHD==99){
    	    	   	    	    clearInterval(huadongTimerTwo);
    	    	   	    	    HuanQiuLvXingHuaDongA.style.left = 0 + "px";
    	     	        HuanQiuLvXingHuaDongB.style.left = 1000 + "px";
    	     	        floagA = true;
    	     	        floagB = false;
    	     	        zhenHD=0;
    	    	   	    }
    	    	   	    zhenHD++
    	     	},5);
    	     	}else{
    	     		return false;
    	     	}
    	    };
    
	/******************************环球旅行制造滑动******************************/
	/******************************环球客滑动******************************/
	var keHuaDongZiXing = document.getElementById("huanQiuKeZiXing");
    var keHuaDongTiYan = document.getElementById("huanQiuKeTiYan");
    var HuanQiuKeHuaDongA = document.getElementById("huanQiuKebodyA");
    var HuanQiuKeHuaDongB = document.getElementById("huanQiuKebodyB");
    var flagA = true;
    var flagB = false;
    var zen = 0;
   
    	    keHuaDongTiYan.onclick = function(){
    	    	 if(flagA){
    	    	    keHuaDongZiXing.style.backgroundColor = "#fff";
    	    	    keHuaDongZiXing.style.color = "#A14796";
    	    	    keHuaDongTiYan.style.backgroundColor = "#8d50ad";
    	    	    keHuaDongTiYan.style.color = "#fff";
    	    	    var keHuaDongTimer = setInterval(function(){
    	    	        HuanQiuKeHuaDongA.style.left = HuanQiuKeHuaDongA.offsetLeft-10+ "px";
    	    	        HuanQiuKeHuaDongB.style.left = HuanQiuKeHuaDongB.offsetLeft-10+ "px";
    	    	        flagA = false;
    	     	    flagB = false;
    	    	   	    if(zen==99){
    	    	   	    	    clearInterval(keHuaDongTimer);
    	    	   	    	    HuanQiuKeHuaDongA.style.left = - 1000 + "px";
    	     	        HuanQiuKeHuaDongB.style.left = 0 + "px";
    	     	        flagA = false;
    	     	        flagB = true;
    	     	        zen = 0;
    	     	    }    
    	    	   	    
    	    	   	    zen++;
    	     	},5);
    	     	}else{
    	     		return false;
    	     	}
    	    };
    
   
        keHuaDongZiXing.onclick = function(){
        	 if(flagB){
            	keHuaDongZiXing.style.backgroundColor = "#8d50ad";
    	    	    keHuaDongZiXing.style.color = "#fff";
    	    	    keHuaDongTiYan.style.backgroundColor = "#fff";
    	    	    keHuaDongTiYan.style.color = "#A14796";
    	    	     keHuaDongTimerTwo = setInterval(function(){
    	    	        HuanQiuKeHuaDongA.style.left = HuanQiuKeHuaDongA.offsetLeft+10+ "px";
    	    	        HuanQiuKeHuaDongB.style.left = HuanQiuKeHuaDongB.offsetLeft+10+ "px";
    	    	        flagA = false;
    	     	    flagB = false;
    	    	   	    if(zen==99){
    	    	   	    	    clearInterval(keHuaDongTimerTwo);
    	    	   	    	    HuanQiuKeHuaDongA.style.left = 0 + "px";
    	     	        HuanQiuKeHuaDongB.style.left = 1000 + "px";
    	     	        flagA = true;
    	     	        flagB = false;
    	     	        zen=0;
    	    	   	    }
    	    	   	    zen++
    	     	},5);
    	     	}else{
    	     		return false;
    	     	}
    	    };
    
	/******************************环球客滑动******************************/
	/******************************环球客滑动后轮播******************************/
	var HuaDonglunboIndex = 0;
	var HuaDonglunboTimer = null;
	var HuaDonglunboArr = document.getElementById("huanQiuKeWidth");
	var HuaDonglunboleft = document.getElementById("huanQiuKebodyBerLeft");
	var HuaDonglunboright = document.getElementById("huanQiuKebodyBerRight");
	var HuaDongimgDivArr = HuaDonglunboArr.getElementsByClassName("huanQiuKebodyA1");  //获取HuaDonglunboArr下的div数组
	var HuaDongimgDivNum = HuaDongimgDivArr.length;   //div数组的长度
	var HuaDongWai = 20;
	var HuaDongimgDivWidth = HuaDongimgDivArr[0].offsetWidth + HuaDongWai;   //图片的宽度
	//将图片排成长条
	HuaDonglunboArr.style.width = HuaDongimgDivWidth*HuaDongimgDivNum + "px";
	for(i=0;i<imgDivNum;i++){
		HuaDongimgDivArr[i].style.left = HuaDongimgDivWidth*i + "px";
	}
	
	
	var zhenend = 0;
	var HuaDongdonghuaSize = HuaDongimgDivWidth/10;
	
	if(HuaDonglunboTimer==null){
		HuaDonglunboTimer = setInterval(HuaDonglunboTwo,3000);
	}
	function HuaDonglunboTwo(){
		if(HuaDonglunboIndex==HuaDongimgDivNum-3){
			HuaDonglunboIndex = 0;
			HuaDonglunboArr.style.left = 0 + "px";
		}
		var HuaDongsubTimer = setInterval(function(){
			HuaDonglunboArr.style.left = HuaDonglunboArr.offsetLeft - HuaDongdonghuaSize + "px";
			zhenend++;
			if(zhenend==10){
				zhenend=0;
				HuaDonglunboArr.style.left = "-" + HuaDongimgDivWidth*(HuaDonglunboIndex) + "px";
				clearInterval(HuaDongsubTimer);
			}
		},30);
		
		HuaDonglunboIndex++;
	}
	HuaDonglunboleft.onclick = function(){
		clearInterval(HuaDonglunboTimer);
		if(HuaDonglunboIndex==0){
			HuaDonglunboIndex = 6;
			HuaDonglunboArr.style.left = -1920 + "px";
		}
		var HuaDongsupTimer = setInterval(function(){
			HuaDonglunboArr.style.left = HuaDonglunboArr.offsetLeft + HuaDongdonghuaSize + "px";
			zhenend++;
			if(zhenend==10){
				zhenend=0;
				HuaDonglunboArr.style.left = "-" + HuaDongimgDivWidth*(HuaDonglunboIndex) + "px";
				clearInterval(HuaDongsupTimer);
			}
		},30);
		HuaDonglunboIndex--;
		HuaDonglunboTimer = setInterval(HuaDonglunboTwo,3000);
	}
	HuaDonglunboright.onclick = function(){
		clearInterval(HuaDonglunboTimer);
		if(HuaDonglunboIndex==HuaDongimgDivNum-3){
			HuaDonglunboIndex = 0;
			HuaDonglunboArr.style.left = 0 + "px";
		}
		var HuaDongsupTimer = setInterval(function(){
			HuaDonglunboArr.style.left = HuaDonglunboArr.offsetLeft - HuaDongdonghuaSize + "px";
			zhenend++;
			if(zhenend==10){
				zhenend=0;
				HuaDonglunboArr.style.left = "-" + HuaDongimgDivWidth*(HuaDonglunboIndex) + "px";
				clearInterval(HuaDongsupTimer);
			}
		},30);
		HuaDonglunboIndex++;
		HuaDonglunboTimer = setInterval(HuaDonglunboTwo,3000);
	}
	/******************************环球客滑动后轮播******************************/
	/******************************回到顶部按钮******************************/
	var btntop = document.getElementById("toTop");
	var btntopImgArr = btntop.getElementsByTagName("img")[0];
	btntop.onmouseover = function(){
		btntopImgArr.src = "img/toTop222.png"
	}
	btntop.onmouseout = function(){
		btntopImgArr.src ="img/toTop111.png"
	}
	/******************************回到顶部按钮******************************/
}
