!function(t){var i={init:function(i){var e={onShow:null};return i=t.extend(e,i),this.each(function(){var e,a,n=t(this),s=(t(window).width(),n.find("li.tab a")),o=n.width(),l=Math.max(o,n[0].scrollWidth)/s.length,h=0,r=function(t){return o-t.position().left-t.outerWidth()-n.scrollLeft()},d=function(t){return t.position().left+n.scrollLeft()};e=t(s.filter('[href="'+location.hash+'"]')),0===e.length&&(e=t(this).find("li.tab a.active").first()),0===e.length&&(e=t(this).find("li.tab a").first()),e.addClass("active"),h=s.index(e),h<0&&(h=0),void 0!==e[0]&&(a=t(e[0].hash)),n.append('<div class="indicator"></div>');var c=n.find(".indicator");n.is(":visible")&&setTimeout(function(){c.css({right:r(e)}),c.css({left:d(e)})},0),t(window).resize(function(){o=n.width(),l=Math.max(o,n[0].scrollWidth)/s.length,h<0&&(h=0),0!==l&&0!==o&&(c.css({right:r(e)}),c.css({left:d(e)}))}),s.not(e).each(function(){t(Materialize.escapeHash(this.hash)).hide()}),n.on("click","a",function(u){if(t(this).parent().hasClass("disabled"))return void u.preventDefault();if(!t(this).attr("target")){o=n.width(),l=Math.max(o,n[0].scrollWidth)/s.length,e.removeClass("active"),void 0!==a&&a.hide(),e=t(this),a=t(Materialize.escapeHash(this.hash)),s=n.find("li.tab a");e.position();e.addClass("active");var f=h;h=s.index(t(this)),h<0&&(h=0),void 0!==a&&(a.show(),"function"==typeof i.onShow&&i.onShow.call(this,a)),h-f>=0?(c.velocity({right:r(e)},{duration:300,queue:!1,easing:"easeOutQuad"}),c.velocity({left:d(e)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(c.velocity({left:d(e)},{duration:300,queue:!1,easing:"easeOutQuad"}),c.velocity({right:r(e)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),u.preventDefault()}})})},select_tab:function(t){this.find('a[href="#'+t+'"]').trigger("click")}};t.fn.tabs=function(e){return i[e]?i[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.tabs"):i.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs()})}(jQuery);