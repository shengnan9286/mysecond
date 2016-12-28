var arr=['上门安装调试路由器','系统安装','笔记本除尘清灰','手机刷机','打印机维修','服务器检测']
$("#search span").each(function(index,ele){
	$(this).on("click",function(){
		$(this).addClass('change').siblings().removeClass('change');
		$('#txt').attr('placeholder',arr[index]);
	})
})

//搜索框提示列表
var inputs=document.querySelector("#txt");
 window.suggest=function(data){
//	 console.log(data)
	var backdata=data.result;
	backdata.forEach(function(ele,index,arr){
		var a=document.createElement("a");	
		var p=document.createElement("p");
		a.setAttribute("href","###");		
		a.innerHTML =ele.word;
		p.appendChild(a);
		document.querySelector(".message").appendChild(p)
	})	
}
 $(document).on("click",function(){
 	$(".message").empty()
 })
   
	inputs.oninput=function(){	
		var val1=inputs.value;
		var baseurl="http://suggest.bang.360.cn/suggest?word="+val1+"&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852";
		var s=document.createElement("script");			
		document.body.appendChild(s);
		s.setAttribute("src",baseurl);
	}

