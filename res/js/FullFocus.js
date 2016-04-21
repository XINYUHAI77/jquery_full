;(function ($, window, document, undefined) {
    function scroll() {
        this.num = 0;
        this.obj = this;
        this.dome = null;
        this.dome_ul = null;
        this.dome_li_lent = null;
        this.full_wit = null;
        this.timer = null;
        this.next = null;
        this.pre = null;
        this.settings = {
            times: 2000,
            way_annimate: 'ease-out',
        };

    }

    scroll.prototype.init = function (opt) {
        var This = this;
        var pos_left = null;
        this.options = $.extend({}, this.settings, opt)
        this.dome = this.options.dome;
        this.dome_ul = this.dome.find('ul');
        this.dome_ul.append(this.dome_ul.find('li:first').clone())
        this.dome_li_lent = this.dome_ul.find('li').length;
        this.next = this.dome.find(this.options.next);
        this.pre = this.dome.find(this.options.pre);
        this.getwidth();
        this.timer = setInterval(gos, This.options.times);
        $(window).resize(function () {
            This.getwidth();
        })
        this.dome.hover(function () {
            This.next.show();
            This.pre.show();
            clearInterval(This.timer);
        }, function () {
            This.next.hide();
            This.pre.hide();
            This.timer = setInterval(gos, This.options.times);
        })

        function gos() {
            This.num++;
            if (This.num > (This.dome_li_lent - 1)) {
                This.num = 0;
            }
            pos_left = (This.full_wit * This.num);
            This.dome_ul.stop().animate({left: -pos_left + 'px'}, This.options.way_annimate);
        }

        this.next.click(function () {
            gos();
        })
        this.pre.click(function () {
            This.num--;
            if (This.num < 0) {
                This.num = This.dome_li_lent - 1;
                console.log(  This.num)
            }
            pos_left = (This.full_wit * This.num);
            This.dome_ul.stop().animate({left: -pos_left + 'px'}, This.options.way_annimate);
        })
    }


    scroll.prototype.getwidth = function () {
        this.full_wit = $(window).width();
        this.dome_ul.css({
            width: this.full_wit * this.dome_li_lent + 'px',
        })
        this.dome_ul.find('li').css({
            width: this.full_wit + 'px',
        })
    }


    window.Scroll = function (opt) {
        var litscoll = new scroll();
        litscoll.init(opt);

    }
})(jQuery, window, document);
