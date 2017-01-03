//给排序按钮点击事件：
define(function(){
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
})
	