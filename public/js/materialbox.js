!function(e){e.fn.materialbox=function(){return this.each(function(){function t(){n=!1;var t=s.parent(".material-placeholder"),a=(window.innerWidth,window.innerHeight,s.data("width")),l=s.data("height");s.velocity("stop",!0),e("#materialbox-overlay").velocity("stop",!0),e(".materialbox-caption").velocity("stop",!0),e("#materialbox-overlay").velocity({opacity:0},{duration:d,queue:!1,easing:"easeOutQuad",complete:function(){o=!1,e(this).remove()}}),s.velocity({width:a,height:l,left:0,top:0},{duration:d,queue:!1,easing:"easeOutQuad"}),e(".materialbox-caption").velocity({opacity:0},{duration:d,queue:!1,easing:"easeOutQuad",complete:function(){t.css({height:"",width:"",position:"",top:"",left:""}),s.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),s.removeClass("active"),n=!0,e(this).remove(),i&&i.css("overflow","")}})}if(!e(this).hasClass("initialized")){e(this).addClass("initialized");var i,a,o=!1,n=!0,l=275,d=200,s=e(this),c=e("<div></div>").addClass("material-placeholder");s.wrap(c),s.on("click",function(){var d=s.parent(".material-placeholder"),c=window.innerWidth,r=window.innerHeight,u=s.width(),p=s.height();if(n===!1)return t(),!1;if(o&&n===!0)return t(),!1;n=!1,s.addClass("active"),o=!0,d.css({width:d[0].getBoundingClientRect().width,height:d[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,a=d[0].parentNode;for(;null!==a&&!e(a).is(document);){var h=e(a);"visible"!==h.css("overflow")&&(h.css("overflow","visible"),i=void 0===i?h:i.add(h)),a=a.parentNode}s.css({position:"absolute","z-index":1e3}).data("width",u).data("height",p);var f=e('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){n===!0&&t()});if(s.before(f),f.velocity({opacity:1},{duration:l,queue:!1,easing:"easeOutQuad"}),""!==s.data("caption")){var v=e('<div class="materialbox-caption"></div>');v.text(s.data("caption")),e("body").append(v),v.css({display:"inline"}),v.velocity({opacity:1},{duration:l,queue:!1,easing:"easeOutQuad"})}var m=0,w=u/c,y=p/r,g=0,b=0;w>y?(m=p/u,g=.9*c,b=.9*c*m):(m=u/p,g=.9*r*m,b=.9*r),s.hasClass("responsive-img")?s.velocity({"max-width":g,width:u},{duration:0,queue:!1,complete:function(){s.css({left:0,top:0}).velocity({height:b,width:g,left:e(document).scrollLeft()+c/2-s.parent(".material-placeholder").offset().left-g/2,top:e(document).scrollTop()+r/2-s.parent(".material-placeholder").offset().top-b/2},{duration:l,queue:!1,easing:"easeOutQuad",complete:function(){n=!0}})}}):s.css("left",0).css("top",0).velocity({height:b,width:g,left:e(document).scrollLeft()+c/2-s.parent(".material-placeholder").offset().left-g/2,top:e(document).scrollTop()+r/2-s.parent(".material-placeholder").offset().top-b/2},{duration:l,queue:!1,easing:"easeOutQuad",complete:function(){n=!0}})}),e(window).scroll(function(){o&&t()}),e(document).keyup(function(e){27===e.keyCode&&n===!0&&o&&t()})}})},e(document).ready(function(){e(".materialboxed").materialbox()})}(jQuery);