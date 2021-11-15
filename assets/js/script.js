$(function(){
 
	//音を鳴らす
	$('.buta').on("click",function(){
 
		document.getElementById("overSound").currentTime = 0;
		document.getElementById("overSound").play();
 
	});

    $('.kaba').on("click",function(){
 
		document.getElementById("overSound1").currentTime = 0;
		document.getElementById("overSound1").play();
 
	});
 
    $('.zou').on("click",function(){
 
		document.getElementById("overSound2").currentTime = 0;
		document.getElementById("overSound2").play();
 
	});
 
 
});