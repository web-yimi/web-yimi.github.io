$(document).ready(function(){
	//轮播
	var n=0;
	var next=0;
	var t=setInterval(move,2000);
	var width=$('.lunbo').width();
	var flag=true;
	function move(type){
		var type=type||'right';
		if(type=='right'){
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
		}else if(type=='left'){
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
	//楼层跳转
	$('.nav-home').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	for(var i=0;i<jQuery('.section').length;i++){
		var floorTop=jQuery('.section').eq(i).position();
		jQuery('.section').eq(i).prop('h',floorTop.top);
	}
	$('.nav-list').click(function(){
		var index=$(this).index();
		var hh=$(".section").eq(index).prop("h");
		var top=$(window).scrollTop();
		var src={aa:top};
		$(src).animate({aa:hh},{
			duration:300,
			step:function(){
				$(window).scrollTop(src.aa)
			}
		})
	})
	$(window).scroll(function(){
		var CHeight=$(".section").eq(3).position().top;
		var top=$(document).scrollTop();
		if(top>CHeight-400){
			$(".contact .contact-con .left").addClass("active")
			$(".contact .contact-con .right").addClass("active")
		}
	})
	
	//work选项卡
	$(".work-nav li").each(function(index){
		$(this).on("click",function(){
			$(".work-lists").each(function(index){
				$(this).hide();
			})
			$(".work-lists").eq(index).show()
		})
	})
	
	//开始页面
	var cW=$(document).width();
	var height=$(window).height();
	$(".start").css('height',height);
	var li_width=cW/6;
	var length=$(".start ul li").length;
	$(".start ul").css("width",li_width*length);
	
})




































