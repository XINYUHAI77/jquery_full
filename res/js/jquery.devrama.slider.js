$(function(){ 
  var Findexs=0;
        var Fbuzhi=$(window).width();
        var Fmany= $('.banner  li').length;
        var Fsroll_wid=Fbuzhi*Fmany;
        var For_ture='';
		$('.banner ul li').css('width', Fbuzhi)
        $('.banner ul').css('width',Fsroll_wid);
        var Ftimer=setInterval(FLsrcoll,4000);
        function FLsrcoll(){
            For_ture == true ? Findexs-- : Findexs ++;
            For_ture=false;
            
            if(Findexs >=Fmany){
                Findexs=0;
                $('.banner ul').hide().css('left','0').fadeIn('700').show();
                return false;
            }
            if(Findexs < 1){
				Findexs=0;
                $('.banner ul').hide().css('left','0').fadeIn('700').show();
                return false;
            }

            $('.banner ul').stop().animate({"left":-Findexs*Fbuzhi+"px"},1800,"easieEaseInSine");
        }
		$(window).resize(function(){
		    Findexs=0;
			Fbuzhi=$(window).width();
			Fmany= $('.banner  li').length;
			Fsroll_wid=Fbuzhi*Fmany;
			For_ture='';
			$('.banner ul li').css('width', Fbuzhi)
			$('.banner ul').css('width',Fsroll_wid);
		});
        $('.fouc').click(function(){
            if($(this).hasClass('foucL')){
                For_ture=true;
                FLsrcoll();
            }else{
                For_ture=false;
                FLsrcoll();
            }
        })
        $('.banner').mouseover(function(){
			$('.fouc').fadeIn();
            clearInterval(Ftimer);
        }).mouseout(function(){
			$('.fouc').fadeOut();
            Ftimer=setInterval(FLsrcoll,4000);
        });
		//首页通知
		 var void_vid=setInterval(voids,1000);
		var void_num=0;
		var much=$('.voidcont li').length-1;
		var obj_eq=0;
		
		function voids(){
			
			if(obj_eq === 0){
				void_num++;
				if(void_num >much ){
					void_num=0;
				}
				
			 }else{
				void_num--;	
				if(void_num < 0){
					void_num=much;
				}
			}
			$('.voidcont li').eq(void_num).fadeIn().siblings('li').hide();
			obj_eq=0;
			
		}
		$('.voidcont dl').mouseover(function(){
            clearInterval(void_vid);
        }).mouseout(function(){
            void_vid=setInterval(voids,4000);
        });
		$('.voidcont dd').click(function(){
			obj_eq=$(this).index();
			voids();
			
		})
})