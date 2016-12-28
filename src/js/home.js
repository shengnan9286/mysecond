//轮播图
/*var num = 0;
function autoMove(){
	num++;
	$(".imgs").delay(1500);
	$(".imgs").animate({
	  marginLeft:-100*num+"%"
	},2000,"linear",function(){
		if(num>4){
			num = 0
			$(".imgs").css("margin-left",0)
		}
		$("#btns>li").eq(num).attr("class","target").siblings().attr("class","");
		autoMove()
	})
}
autoMove();
$("#btns").on("click","li",function(){
	$(".imgs").stop()
	$(".imgs").stop()
	num = $(this).index()
	$(".imgs").animate({
		marginLeft:-100*num+"%"
	},500,"linear",function(){
		autoMove()
	})
	$("#btns>li").eq(num).attr("class","target").siblings().attr("class","");
})*/
//设置滑动菜单的高度：
$(".list2").outerHeight($(".imgs").height());
$(".list3").outerHeight($(".imgs").height());
$(".list4").outerHeight($(".imgs").height());
//设置滑动菜单的移入移出事件：
$(".navlist li").each(function(index,ele){
	$(this).on("mouseenter",function(){
//		console.log(index)		
		$(this).addClass("listbg")
		$(".order").eq(index).css({
			display:"block"
		}).siblings(".order").css({
			display:"none"
		})
	})
	$(this).on("mouseleave",function(){
		$(this).removeClass("listbg")
	})
	$(".imgwrap").on("mouseleave",function(){
		$(".order").css({
			display:"none"
		})
	})
	$(".order").eq(index).on("mouseleave",function(){
		$(".order").eq(index).css({
			display:"none"
		})
	})
	$(".order").eq(index).on("mouseenter",function(){
		$(".order").eq(index).css({
			display:"block"
		})
	})
})
//给每一个按钮点击事件：
	$(".shopbtn a").each(function(index,ele){					
		$(this).on("click",function(){
			$(this).css({
				background: "white",
			    color: "#019b5e"
			}).siblings().css({
				background:'#f7f7f7' ,
				color: 'black'
			})
		})		
	})			

//ajax请求获取数据：
var baseurl='http://localhost:3000';
var n='list1';
var arr=['shop_ico',"shop_name","main","addr","shop_visit"]
var pos=[];
var posname=[];
var main=[];
var addr=[]
function Getdata(){
	$.get(baseurl+'/'+n,backfn);
	function backfn(data){
//		console.log(data)//得到对象
		var datas=data.shop_data;//得到对象数组
//		console.log(datas);
		arr.forEach(function(ele,index,array){ 
			//获取地图数据：
			pos.push([datas[index].map_longitude,datas[index].map_latitude]);
			posname.push(datas[index][arr[1]]);
			main.push(datas[index][arr[2]]);
			addr.push(datas[index][arr[3]]);
			
			var wrap = $('<div/>').attr('class','contentlist').appendTo($('.shopmain'));		
			var mainleft=$('<div/>').attr('class','shopimg').appendTo(wrap);
			var mainright=$('<div/>').attr('class','shopname').appendTo(wrap);
			$('<img/>').attr("src",datas[index][arr[0]]).appendTo(mainleft);
			var p1=$("<span><a href='###'>"+datas[index][arr[1]]+"</a>店铺等级：<img src='images/dengji.jpg'/></span><span><img src='images/peifu_03.jpg'/>先行赔付</span>");
			var p2=$("<span>"+datas[index][arr[2]]+"</span><span><img src='images/peifu_06.jpg'/>同城帮认证</span>");
			var p3=$("<span>"+datas[index][arr[3]]+"</span><span>人气："+datas[index][arr[4]]+"次浏览</span>")
			$('<p/>').html(p1).appendTo(mainright)
			$('<p/>').html(p2).appendTo(mainright)
			$('<p/>').html(p3).appendTo(mainright)	
			$('<a/>').attr('class','enter').html("进入店铺").appendTo($('.contentlist').eq(index));
		})
//		$('<a/>').attr('class','enter').html("进入店铺").appendTo($('.contentlist'));		
		show();
		Map();
	}
}
Getdata()
//滑过商家列表显示进入框：
function show(){
	$(".contentlist").each(function(index){
		$(this).on("mouseenter",function(){
//			console.log(index);
			$(this).css("background","#fafafa");
			$('.enter').eq(index).css('display','block')
		}).on("mouseleave",function(){
			$(this).css("background","");
			$('.enter').eq(index).css('display','none')
		})	
	})
}
//点击下一页按钮：
$(".pagebtns li").each(function(index,ele){
	$(this).on("click",function(){		
		 n='list'+(index+1);
//		console.log(n)
		$('.shopmain').empty();
		Getdata();
		$(this).addClass('pagebtncolor').siblings().removeClass('pagebtncolor');
	})
})


$(".shopbtn").on("click",function(){
	$(".mo").css("display","flex")
});

//创建地图：
function Map(){
	var map = new AMap.Map('container', {
	    resizeEnable: true,
	//   mapStyle:'fresh',//底图样式风格
	    zoom:11,
	    center: [116.397428, 39.90923]       
	});
	map.plugin(["AMap.ToolBar",'AMap.Scale'], function() {
	    map.addControl(new AMap.ToolBar());
	    map.addControl(new AMap.Scale());
	});
	var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(5,-5)});
	for (i=0; i<pos.length; i++) {
		var icon = new AMap.Icon({
		    image : 'images/mapbg.png',
		    size : new AMap.Size(36,51),
			imageSize:new AMap.Size(36,51)
		});
		var  marker = new AMap.Marker({
			position: pos[i],
		    title: posname[i],
		    icon : icon,
		    offset : new AMap.Pixel(-12,-12),
		    map : map
		});		
		var info = [];
		info.push("<p>"+posname[i]+"</p> ");
		info.push("<span>主营："+main[i]+"</span>");
		info.push("<span>地址："+pos[i]+"</span>");
		info.push("<a href='search.html'>进入店铺》</a>");
		marker.content=info.join("<br/>");
        marker.on('click',markerClick);
	}
	function markerClick(e){
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

}
   
//给地图中翻页按钮点击事件：
$("#mapbtn li").each(function(index,ele){
	$(this).on("click",function(){		
//		console.log(1);
		$(this).attr("class","mapbtncolor").siblings().removeClass('mapbtncolor');
	})
})
 //点击关闭地图：
 $("#closemap").on("click",function(){
 	$(".mo").css("display","none")
 })
