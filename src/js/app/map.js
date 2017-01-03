define(['app/ajax'],function(ajax){
	console.log(ajax)
	// ajax.get();
	return Map
})
var arr=['shop_ico',"shop_name","main","addr","shop_visit"]
	var pos=[];
	var posname=[];
	var main=[];
	var addr=[]
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
	 });
	 //点击显示地图
	 $("#mapbtn").on("click",function(){
		$(".mo").css("display","flex")
	});

}
   
