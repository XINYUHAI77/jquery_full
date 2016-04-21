$(function(){
	//焦点图
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
	/*导航部分*/
	var isClass='';
	$('.nav li').hover(function(){
		if($(this).hasClass('nav_on')){
		  isClass=true;
		  $(this).removeClass('nav_on').addClass('nav_on').find('.nav_dd').show();
		  return false;
		}
	  $(this).addClass('nav_on').find('.nav_dd').show();
	  isClass=false;
	}, function(){
		if(isClass){
		  isClass=true;
		  $(this).find('.nav_dd').hide();
		  return false;
		}
	  $(this).removeClass('nav_on').find('.nav_dd').hide();
	})
	/*回到顶部效果*/
		$('.backtop').click(function(){
			 $("html, body").animate({
           scrollTop: 0
          },1000,'easieEaseInQuad')
		})
	//商品详情页选择货品，如颜色、版本等
	$(".chose_color a").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$(this).find("input").prop({checked:"checked"});
		$(this).siblings().prop({checked:"false"});
		//去除虚边框
		$(this).blur();
	});
	//购买数量
	//减少
	$("#reduce_num").click(function(){
		if (parseInt($(".chose_intext").val()) <= 1){
			alert("商品数量最少为1");
		} else{
			$(".chose_intext").val(parseInt($(".chose_intext").val()) - 1);
		}
	});

	//增加
	$("#add_num").click(function(){
		$(".chose_intext").val(parseInt($(".chose_intext").val()) + 1);
	});

	//直接输入
	$(".chose_intext").blur(function(){
		if (parseInt($(".chose_intext").val()) < 1){
			alert("商品数量最少为1");
			$(this).val(1);
		}
	});
	/*以下为商品详情*/
	 $('.goodsbtm_tilte span').click(function(){
		var nownum=$(this).index();
		$(this).addClass('goodsbtm_on').siblings().removeClass('goodsbtm_on');
		$('.goodsbtm_cont .goods_deasc').eq(nownum).removeClass('detaisnone').siblings().addClass('detaisnone');	
	})
	$(window.document).scroll(function () {
	var t =  $(document).scrollTop();
	if( t <800){
		$(".help").css("top", 800);
	}else{
		$(".help").css("top", parseInt(t) + parseInt(100));
	}
  });
//无缝滚动
 var indexs=0;
            var buzhi=221;
            var many= $('.sroll_ul li').length;
            var sroll_wid=buzhi*many;
            var or_ture='';
            $('.sroll_ul').css('width',sroll_wid);
            var timer=setInterval(Lsrcoll,2000);
            function Lsrcoll(){
                or_ture == true ? indexs-- : indexs ++;
                or_ture=false;
                if(indexs >=many){
                    indexs=0;
                    $('.sroll_ul').hide().css('left','0').fadeIn('').show();
                    return false;
                }
                if(indexs < 0){
                    if(Math.abs(indexs)>=5){
                        indexs=0;
                        $('.sroll_ul').hide().css('left','0').fadeIn('').show();
                        return false;
                    }
                }

              $('.sroll_ul').stop().animate({"left":-indexs*buzhi+"px"},600,"easieEaseInOut");
            }
            $('.srollbtn').click(function(){
               if($(this).hasClass('srollL')){
                   or_ture=true;
                   Lsrcoll();
               }else{
                   or_ture=false;
                   Lsrcoll();
               }
            })
           $('.sroll').mouseover(function(){
               clearInterval(timer);
           }).mouseout(function(){
               timer=setInterval(Lsrcoll,3000);
           });
})