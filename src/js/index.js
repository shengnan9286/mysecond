require.config({
	baseUrl:'js/lib',
	paths:{
		app:'../app',
		Jquery:"jquery-1.11.1.min"
	}	
})
define(['Jquery','app/lunbo','app/choosebtn','app/slidemenu','app/map'],function(jq,lunbo,choosebtn,slidemenu,map){	 
	 lunbo();	
	 slidemenu();
	 // baseurl="http://localhost:3000";
	 map();
})
