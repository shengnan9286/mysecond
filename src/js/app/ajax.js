define(['Jquery'],function(jq){
		 var getdata={};

		getdata.baseurl='http://localhost:3000';
		getdata.ff=function(){
			alert(1)
		}
		getdata.prototype.ss=function(){
			$.get(baseurl+'/list1',backfn);
			return function backfn(data){
					var datas=data.shop_data;//得到对象数组
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
				// Map();
			//进入店铺按钮：
				$(".contentlist").each(function(index){
					$(this).on("mouseenter",function(){
						$(this).css("background","#fafafa");
						$('.enter').eq(index).css('display','block')
					}).on("mouseleave",function(){
						$(this).css("background","");
						$('.enter').eq(index).css('display','none')
					})	
				})
			}
		}
	console.log(getdata)
	return getdata;

})
// function Ajax(){
	// var baseurl='http://localhost:3000';
	/*var n='list1';
	var arr=['shop_ico',"shop_name","main","addr","shop_visit"]
	var pos=[];
	var posname=[];
	var main=[];
	var addr=[]*/
	/*function Getdata(){
		// $.get(baseurl+'/'+n,backfn);
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
			// Map();
		}
	}*/
	/*function show(){
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
	}*/
// }