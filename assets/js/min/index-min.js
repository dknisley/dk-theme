!function($,t,a){"use strict";var e=$(document),n=function(t,a,e){var n;return function r(){function r(){e||t.apply(s,o),n=null}var s=this,o=arguments;n?clearTimeout(n):e&&t.apply(s,o),n=setTimeout(r,a||100)}};e.ready(function(){function t(){var t=$(this),a=e.outerWidth(),n=this.naturalWidth;n>=a?t.addClass("full-img"):t.removeClass("full-img")}function a(){n.each(t)}var e=$(".post-content");e.fitVids();var n=$("img").on("load",t);a(),$(window).smartresize(a),$(".scroll-down").arctic_scroll()}),jQuery.fn[t]=function(a){return a?this.bind("resize",n(a)):this.trigger(t)},$.fn.arctic_scroll=function(t){var a={elem:$(this),speed:500},e=$.extend(a,t);e.elem.click(function(t){t.preventDefault();var a=$(this),n=$("html, body"),r=a.attr("data-offset")?a.attr("data-offset"):!1,s=a.attr("data-position")?a.attr("data-position"):!1,o;r?(o=parseInt(r),n.stop(!0,!1).animate({scrollTop:$(this.hash).offset().top+o},e.speed)):s?(o=parseInt(s),n.stop(!0,!1).animate({scrollTop:o},e.speed)):n.stop(!0,!1).animate({scrollTop:$(this.hash).offset().top},e.speed)})}}(jQuery,"smartresize"),$(document).ready(function(){$(window).scroll(function(t){var a=$(window).scrollTop(),e=$(document).height(),n=$(window).height();if(a>0){var r=150/a,s=a/150*-2;navVal=1.33*s}if(0>=a)var s=0;text=$(".animated-header"),image=$(".animated-image"),text.css({opacity:1*r,"-webkit-transform":"translateY("+s+"%)","-ms-transform":"translateY("+s+"%)",transform:"translateY("+s+"%)"}),image.css({opacity:1.66*r,"-webkit-transform":"translateY("+navVal+"%)","-ms-transform":"translateY("+navVal+"%)",transform:"translateY("+navVal+"%)"}),console.log("Feature image scroll working")})});