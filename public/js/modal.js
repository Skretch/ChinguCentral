!function(t){var o=0,e=0,i=function(){return e++,"materialize-modal-overlay-"+e},a={init:function(e){var a={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%",ending_top:"10%"};return e=t.extend(a,e),this.each(function(){var a=t(this),n=t(this).attr("id")||"#"+t(this).data("target"),c=function(){var i=a.data("overlay-id"),n=t("#"+i);a.removeClass("open"),t("body").css({overflow:"",width:""}),a.find(".modal-close").off("click.close"),t(document).off("keyup.modal"+i),n.velocity({opacity:0},{duration:e.out_duration,queue:!1,ease:"easeOutQuart"});var c={duration:e.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){t(this).css({display:"none"}),"function"==typeof e.complete&&e.complete.call(this,a),n.remove(),o--}};a.hasClass("bottom-sheet")?a.velocity({bottom:"-100%",opacity:0},c):a.velocity({top:e.starting_top,opacity:0,scaleX:.7},c)},s=function(n){var s=t("body"),l=s.innerWidth();if(s.css("overflow","hidden"),s.width(l),!a.hasClass("open")){var d=i(),r=t('<div class="modal-overlay"></div>');lStack=++o,r.attr("id",d).css("z-index",1e3+2*lStack),a.data("overlay-id",d).css("z-index",1e3+2*lStack+1),a.addClass("open"),t("body").append(r),e.dismissible&&(r.click(function(){c()}),t(document).on("keyup.modal"+d,function(t){27===t.keyCode&&c()})),a.find(".modal-close").on("click.close",function(t){c()}),r.css({display:"block",opacity:0}),a.css({display:"block",opacity:0}),r.velocity({opacity:e.opacity},{duration:e.in_duration,queue:!1,ease:"easeOutCubic"}),a.data("associated-overlay",r[0]);var u={duration:e.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof e.ready&&e.ready.call(this,a,n)}};a.hasClass("bottom-sheet")?a.velocity({bottom:"0",opacity:1},u):(t.Velocity.hook(a,"scaleX",.7),a.css({top:e.starting_top}),a.velocity({top:e.ending_top,opacity:1,scaleX:"1"},u))}};t(document).off("click.modalTrigger",'a[href="#'+n+'"], [data-target="'+n+'"]'),t(this).off("openModal"),t(this).off("closeModal"),t(document).on("click.modalTrigger",'a[href="#'+n+'"], [data-target="'+n+'"]',function(o){e.starting_top=(t(this).offset().top-t(window).scrollTop())/1.15,s(t(this)),o.preventDefault()}),t(this).on("openModal",function(){t(this).attr("href")||"#"+t(this).data("target");s()}),t(this).on("closeModal",function(){c()})})},open:function(){t(this).trigger("openModal")},close:function(){t(this).trigger("closeModal")}};t.fn.modal=function(o){return a[o]?a[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?void t.error("Method "+o+" does not exist on jQuery.modal"):a.init.apply(this,arguments)}}(jQuery);