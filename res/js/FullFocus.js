;
(function ($, window, document, undefined) {
    function scroll() {
        this.num = 0;
        this.obj = this;
        this.dome = null;
        this.dome_ul = null;
        this.dome_li_lent = null;
        this.full_wit = null;
        this.timer = null;
        this.settings = {
            times: 2000,
            way_annimate: 'ease-out',
        };

    }


    scroll.prototype.init = function (opt, obj) {
        var This = this.obj;
        this.options = $.extend({}, this.settings, opt)
        this.dome = this.options.dome;
        this.dome_ul = this.dome.find('ul');
        this.dome_ul.append(this.dome_ul.find('li:last').clone())
        this.dome_li_lent = this.dome_ul.find('li').length;
        this.getwidth();
        setInterval(this.gos.bind(this),this.options.times);

        $(window).resize(function () {
            This.getwidth();
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
    scroll.prototype.gos = function () {
        this.num ++;
        var pos_left= (this.full_wit * this.num);
        this.dome_ul.animate({left: -pos_left + 'px'}, this.options.way_annimate);
        if( this.num >= (this.dome_li_lent-1)){
            this.dome_ul.css({
                left: 0,
            })
            this.num=0;
            pos_left=0;
        }
    }

    window.Scroll = function (opt, obj) {
        var litscoll = new scroll();
        litscoll.init(opt, this.obj);

    }
})(jQuery, window, document);
