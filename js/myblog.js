$(document).ready(function(){
	var n=0;
	var next=0;
	var t=setInterval(move,2000);
	var width=$('.lunbo').width();
	var flag=true;
	function move(type){
		var type=type||'right';
		if(type='right'){
			if(!flag){
				return;
			}
			flag=false;
			next=n+1;
			if(next>$('.list').length-1){
				next=0;
			}
			$('.list').eq(next).css('left',width);
			$('.list').eq(n).animate({left:-width},600);
			$('.list').eq(next).animate({left:0},600,function(){
				flag=true;
			});
			n=next;
		}else if(type='left'){
			if(!flag){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=$('.list').length-1
			}
			$('.list').eq(next).css('left',-width);
			$('.list').eq(n).animate({left:width},600);
			$('.list').eq(next).animate({left:0},600,function(){
				flag=true;
			});
			n=next;
		}
	}
	$('.lunbo').hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,2000);
	})
	$('.toleft').click(function(){
		move('left')
	})
	$('.toright').click(function(){
		move('right')
	})
	$('.nav-home').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.nav-about').click(function(){
		document.body.animate({scrollTop:$('.about').position().top})
		document.documentElement.animate({scrollTop:$('.about').position().top})
	})
	$('.nav-work').click(function(){
		
	})
})




































