define(function(){
	function obj(){
		var num = 0;
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
		})
	}
	return obj;
})
