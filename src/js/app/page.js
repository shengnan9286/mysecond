
define(['app/datafn'],function(){
	return function(){
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
	}
})
