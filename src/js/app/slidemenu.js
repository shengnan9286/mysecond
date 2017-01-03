define(function(){
	return function(){
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
	}	
})

			