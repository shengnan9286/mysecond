$('#t1').on("mouseover",function(){
	$('.hover').slideDown()
})
$('.hover').on('mouseout',function(){
	$(this).slideUp()
})
var arr=['上门安装调试路由器','系统安装','笔记本除尘清灰','手机刷机','打印机维修','服务器检测']
$("#search span").each(function(index,ele){
	$(this).on("click",function(){
		$(this).addClass('change').siblings().removeClass('change');
		$('#txt').attr('placeholder',arr[index]);
	})
})

//下拉
var xl1 = document.querySelector("#xiala1");
var xl2 = document.querySelector("#xiala2");
var xi = document.querySelector("#xia");
var bol1 = true;
xl1.onmouseenter = function(){
	xia.style.height = "130px";
	xia.style.border = "1px solid #aaa";
}
xl2.onmouseleave = function(){
	xia.style.height = "0px";
	xia.style.border = "0";
}

var us = document.querySelector("#left");
var ls = us.querySelectorAll("li");
var divs = document.querySelectorAll(".ss");
for(var v = 0; v < ls.length; v++){
	(function(index){
		ls[index].diy = index;
		ls[index].onmouseenter = function(index){
		divs[this.diy].style.width = "800px";
		divs[this.diy].style.border = "1px solid #118855";}
	})(v);
	(function(index){
		ls[index].diy = index;
		ls[index].onmouseleave = function(index){
		divs[this.diy].style.width = "0px";
		divs[this.diy].style.border = "0";}
	})(v);
}
