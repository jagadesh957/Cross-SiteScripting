(function(b,O,ga){function c(a,e){var c=O.createElement("div");a&&(c.id=n+a);c.style.cssText=e||!1;return b(c)}function k(a,b){b="x"===b?q.width():q.height();return"string"===typeof a?Math.round(/%/.test(a)?b/100*parseInt(a,10):parseInt(a,10)):a}function Q(P){return a.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(P)}function ba(a){for(var e in a)b.isFunction(a[e])&&"on"!==e.substring(0,2)&&(a[e]=a[e].call(g));a.rel=a.rel||g.rel||"nofollow";a.href=b.trim(a.href||b(g).attr("href"));
a.title=a.title||g.title}function w(a,e){e&&e.call(g);b.event.trigger(a)}function ha(){var b,e=n+"Slideshow_",c="click."+n,f,g;a.slideshow&&h[1]&&(f=function(){A.text(a.slideshowStop).unbind(c).bind(S,function(){if(i<h.length-1||a.loop)b=setTimeout(d.next,a.slideshowSpeed)}).bind(T,function(){clearTimeout(b)}).one(c+" "+I,g);m.removeClass(e+"off").addClass(e+"on");b=setTimeout(d.next,a.slideshowSpeed)},g=function(){clearTimeout(b);A.text(a.slideshowStart).unbind([S,T,I,c].join(" ")).one(c,f);m.removeClass(e+
"on").addClass(e+"off")},a.slideshowAuto?f():g())}function U(P){if(!J){g=P;ba(b.extend(a,b.data(g,r)));h=b(g);i=0;"nofollow"!==a.rel&&(h=b("."+B).filter(function(){return(b.data(this,r).rel||this.rel)===a.rel}),i=h.index(g),-1===i&&(h=h.add(g),i=h.length-1));if(!t){t=C=!0;m.show();if(a.returnFocus)try{g.blur(),b(g).one(da,function(){try{this.focus()}catch(a){}})}catch(c){}l.css({opacity:+a.opacity,cursor:a.overlayClose?"pointer":"auto"}).show();a.w=k(a.initialWidth,"x");a.h=k(a.initialHeight,"y");
d.position(0);K&&q.bind("resize."+L+" scroll."+L,function(){l.css({width:q.width(),height:q.height(),top:q.scrollTop(),left:q.scrollLeft()})}).trigger("resize."+L);w(ea,a.onOpen);V.add(u).hide();W.html(a.close).show()}d.load(!0)}}var fa={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,minWidth:0,minHeight:0,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,
opacity:0.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0},r="colorbox",n="cbox",ea=n+"_open",T=n+"_load",S=n+"_complete",I=n+"_cleanup",da=n+"_closed",M=n+"_purge",D=b.browser.msie&&!b.support.opacity,K=D&&7>
b.browser.version,L=n+"_IE6",l,m,x,j,X,Y,Z,$,h,q,p,E,F,N,u,aa,A,G,H,W,V,a={},y,z,s,v,g,i,f,t,C,J=!1,d,B=n+"Element";d=b.fn[r]=b[r]=function(a,c){var d=this,f;if(!d[0]&&d.selector)return d;a=a||{};c&&(a.onComplete=c);if(!d[0]||void 0===d.selector)d=b("<a/>"),a.open=!0;d.each(function(){b.data(this,r,b.extend({},b.data(this,r)||fa,a));b(this).addClass(B)});f=a.open;b.isFunction(f)&&(f=f.call(d));f&&U(d[0]);return d};d.launch=U;d.init=function(){q=b(ga);m=c().attr({id:r,"class":D?n+(K?"IE6":"IE"):""});
l=c("Overlay",K?"position:absolute":"").hide();x=c("Wrapper");N=c("Controls").append(aa=c("Current"),A=c("Slideshow").bind(ea,ha),G=c("Next"),H=c("Previous"),W=c("Close"));j=c("Content").append(p=c("LoadedContent","width:0; height:0; overflow:hidden"),F=c("LoadingOverlay").add(c("LoadingGraphic")),N,u=c("Title"));x.append(c().append(c("TopLeft"),X=c("TopCenter"),c("TopRight")),c(!1,"clear:left").append(Y=c("MiddleLeft"),j,Z=c("MiddleRight")),c(!1,"clear:left").append(c("BottomLeft"),$=c("BottomCenter"),
c("BottomRight"))).children().children().css({"float":"left"});E=c(!1,"position:absolute; width:9999px; visibility:hidden; display:none");b("body").prepend(l,m.append(x,E));j.children().hover(function(){b(this).addClass("hover")},function(){b(this).removeClass("hover")}).addClass("hover");y=X.height()+$.height()+j.outerHeight(!0)-j.height();z=Y.width()+Z.width()+j.outerWidth(!0)-j.width();s=p.outerHeight(!0);v=p.outerWidth(!0);m.css({"padding-bottom":y,"padding-right":z}).hide();G.click(function(){d.next()});
H.click(function(){d.prev()});W.click(function(){d.close()});V=G.add(H).add(aa).add(A);j.children().removeClass("hover");b("."+B).live("click.colorbox",function(a){0!==a.button&&"undefined"!==typeof a.button||(a.ctrlKey||a.shiftKey||a.altKey)||(a.preventDefault(),U(this))});l.click(function(){a.overlayClose&&d.close()});b(O).bind("keydown."+n,function(b){var c=b.keyCode;t&&(a.escKey&&27===c)&&(b.preventDefault(),d.close());t&&(a.arrowKey&&h[1])&&(37===c?(b.preventDefault(),H.click()):39===c&&(b.preventDefault(),
G.click()))})};d.remove=function(){m.add(l).remove();b("."+B).die("click").removeData(r).removeClass(B)};d.position=function(b,c){function d(a){X[0].style.width=$[0].style.width=j[0].style.width=a.style.width;F[0].style.height=F[1].style.height=j[0].style.height=Y[0].style.height=Z[0].style.height=a.style.height}var f,h=Math.max(O.documentElement.clientHeight-a.h-s-y,0)/2+q.scrollTop(),i=Math.max(q.width()-a.w-v-z,0)/2+q.scrollLeft();f=m.width()===a.w+v&&m.height()===a.h+s?0:b;x[0].style.width=x[0].style.height=
"9999px";u.width(a.w);m.dequeue().animate({width:a.w+v,height:a.h+s+u.height(),top:h,left:i},{duration:f,complete:function(){d(this);C=!1;x[0].style.width=a.w+v+z+"px";x[0].style.height=a.h+s+y+u.height()+"px";c&&c()},step:function(){d(this)}})};d.resize=function(b){t&&(b=b||{},b.width&&(a.w=k(b.width,"x")-v-z),b.innerWidth&&(a.w=k(b.innerWidth,"x")),p.css({width:a.w}),b.height&&(a.h=k(b.height,"y")-s-y),b.innerHeight&&(a.h=k(b.innerHeight,"y")),!b.innerHeight&&!b.height&&(b=p.wrapInner("<div style='overflow:auto'></div>").children(),
a.h=b.height(),b.replaceWith(b.children())),p.css({height:a.h}),d.position("none"===a.transition?0:a.speed))};d.prep=function(l){function e(){a.w=a.w||p.width();if(a.minWidth){var b=k(a.minWidth,"x");a.w<b&&(a.w=b)}a.mw&&a.mw<a.w&&(a.w=a.mw);return a.w}function s(){a.h=a.h||p.height();if(a.minHeight){var b=k(a.minHeight,"y");a.h<b&&(a.h=b)}a.mh&&a.mh<a.h&&(a.h=a.mh);return a.h}function ca(c){u.html(a.title||g.title||"");d.position(c,function(){var c,e,g,k;e=h.length;var j,l;t&&(l=function(){F.hide();
w(S,a.onComplete)},D&&f&&p.fadeIn(100),N.show(),u.add(p).show(),1<e?("string"===typeof a.current&&aa.html(a.current.replace(/\{current\}/,i+1).replace(/\{total\}/,e)).show(),G[a.loop||i<e-1?"show":"hide"]().html(a.next),H[a.loop||i?"show":"hide"]().html(a.previous),c=i?h[i-1]:h[e-1],g=i<e-1?h[i+1]:h[0],a.slideshow&&A.show(),a.preloading&&(k=b.data(g,r).href||g.href,e=b.data(c,r).href||c.href,k=b.isFunction(k)?k.call(g):k,e=b.isFunction(e)?e.call(c):e,Q(k)&&(b("<img/>")[0].src=k),Q(e)&&(b("<img/>")[0].src=
e))):V.hide(),a.iframe?(j=b("<iframe/>").addClass(n+"Iframe")[0],a.fastIframe?l():b(j).load(l),j.name=n+ +new Date,j.src=a.href,a.scrolling||(j.scrolling="no"),D&&(j.frameBorder=0,j.allowTransparency="true"),b(j).appendTo(p).one(M,function(){j.src="//about:blank"})):l(),"fade"===a.transition?m.fadeTo(R,1,function(){m[0].style.filter=""}):m[0].style.filter="",q.bind("resize."+n,function(){d.position(0)}))})}if(t){var R="none"===a.transition?0:a.speed;q.unbind("resize."+n);p.remove();p=c("LoadedContent").html(l);
p.hide().appendTo(E.show()).css({width:e(),overflow:a.scrolling?"auto":"hidden"}).css({height:s()}).prependTo(j);E.hide();b(f).css({"float":"none"});if(K)b("select").not(m.find("select")).filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one(I,function(){this.style.visibility="inherit"});"fade"===a.transition?m.fadeTo(R,0,function(){ca(0)}):ca(R)}};d.load=function(j){var e,m,l=d.prep;C=!0;f=!1;g=h[i];j||ba(b.extend(a,b.data(g,r)));w(M);w(T,a.onLoad);a.h=a.height?
k(a.height,"y")-s-y:a.innerHeight&&k(a.innerHeight,"y");a.w=a.width?k(a.width,"x")-v-z:a.innerWidth&&k(a.innerWidth,"x");a.mw=a.w;a.mh=a.h;a.maxWidth&&(a.mw=k(a.maxWidth,"x")-v-z,a.mw=a.w&&a.w<a.mw?a.w:a.mw);a.maxHeight&&(a.mh=k(a.maxHeight,"y")-s-y,a.mh=a.h&&a.h<a.mh?a.h:a.mh);e=a.href;N.hide();u.hide();F.show();a.inline?(c().hide().insertBefore(b(e)[0]).one(M,function(){b(this).replaceWith(p.children())}),l(b(e))):a.iframe?l(" "):a.html?l(a.html):Q(e)?(b(f=new Image).addClass(n+"Photo").error(function(){a.title=
!1;l(c("Error").text("This image could not be loaded"))}).load(function(){var b;f.onload=null;a.scalePhotos&&(m=function(){f.height-=f.height*b;f.width-=f.width*b},a.mw&&f.width>a.mw&&(b=(f.width-a.mw)/f.width,m()),a.mh&&f.height>a.mh&&(b=(f.height-a.mh)/f.height,m()));setTimeout(function(){l(f);a.h&&(f.style.marginTop=Math.max(a.h-f.height,0)/2+"px");if(h[1]&&(i<h.length-1||a.loop))f.style.cursor="pointer",f.onclick=function(){d.next()};D&&(f.style.msInterpolationMode="bicubic")},1)}),setTimeout(function(){f.src=
e},1)):e&&E.load(e,function(a,d,e){l("error"===d?c("Error").text("Request unsuccessful: "+e.statusText):b(this).contents())})};d.next=function(){if(!C&&h[1]&&(i<h.length-1||a.loop))i=i<h.length-1?i+1:0,d.load()};d.prev=function(){if(!C&&h[1]&&(i||a.loop))i=i?i-1:h.length-1,d.load()};d.close=function(){t&&!J&&(J=!0,t=!1,w(I,a.onCleanup),q.unbind("."+n+" ."+L),l.fadeTo(200,0),m.stop().fadeTo(300,0,function(){m.add(l).css({opacity:1,cursor:"auto"}).hide();w(M);p.remove();setTimeout(function(){J=!1;w(da,
a.onClosed)},1)}))};d.element=function(){return b(g)};d.settings=fa;b(d.init)})(jQuery,document,this);