(function(a){a.address=function(){var aL=function(d){a(a.address).trigger(a.extend(a.Event(d),function(){for(var e={},k=a.address.parameterNames(),g=0,j=k.length;g<j;g++){e[k[g]]=a.address.parameter(k[g])}return{value:a.address.value(),path:a.address.path(),pathNames:a.address.pathNames(),parameterNames:k,parameters:e,queryString:a.address.queryString()}}.call(a.address)))},aJ=function(e,d,g){a(a.address).bind(e,d,g);return a.address},av=function(){return aH.pushState&&typeof a4.state!==aQ},an=function(){return"/"+a3.pathname.replace(new RegExp(a4.state),"")+a3.search+(ao()?"#"+ao():"")},ao=function(){var d=a3.href.indexOf("#");return d!=-1?au(a3.href.substr(d+1),aZ):""},aO=function(){return av()?an():ao()},aP=function(){return"javascript"},aE=function(e,d){if(a4.strict){e=d?e.substr(0,1)!="/"?"/"+e:e:e==""?"/":e}return e},au=function(e,d){if(a4.crawlable&&d){return(e!=""?"!":"")+e}return e.replace(/^\!/,"")},at=function(e,d){return parseInt(e.css(d),10)},aw=function(e){for(var d,k,g=0,j=e.childNodes.length;g<j;g++){if(e.childNodes[g].src){d=String(e.childNodes[g].src)}if(k=aw(e.childNodes[g])){d=k}}return d},aj=function(){if(!af){var e=aO(),d=a2!=e;if(ar&&aW<523){if(am!=aH.length){am=aH.length;if(typeof ap[am-1]!=aQ){a2=ap[am-1]}al(aZ)}}else{if(d){if(aq&&aW<7){a3.reload()}else{aq&&aW<8&&a4.history&&aM(ab,50);a2=e;al(aZ)}}}}},al=function(d){aL(a5);aL(d?aF:ax);aM(b,10)},b=function(){if(a4.tracker!=="null"&&a4.tracker!==null){var e=a.isFunction(a4.tracker)?a4.tracker:a1[a4.tracker],d=(a3.pathname+a3.search+(a.address&&!av()?a.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");if(a.isFunction(e)){e(d)}else{if(a.isFunction(a1.urchinTracker)){a1.urchinTracker(d)}else{if(typeof a1.pageTracker!=aQ&&a.isFunction(a1.pageTracker._trackPageview)){a1.pageTracker._trackPageview(d)}else{typeof a1._gaq!=aQ&&a.isFunction(a1._gaq.push)&&a1._gaq.push(["_trackPageview",d])}}}}},ab=function(){var d=aP()+":"+aZ+";document.open();document.writeln('<html><head><title>"+aY.title+"</title><script>var "+aV+' = "'+aO()+(aY.domain!=a3.host?'";document.domain="'+aY.domain:"")+"\";<\/script></head></html>');document.close();";if(aW<7){aX.src=d}else{aX.contentWindow.location.replace(d)}},ay=function(){if(ai&&aG!=-1){var e,d=ai.substr(aG+1).split("&");for(aS=0;aS<d.length;aS++){e=d[aS].split("=");if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(e[0])){a4[e[0]]=isNaN(e[1])?/^(true|yes)$/i.test(e[1]):parseInt(e[1],10)!==0}if(/^(state|tracker)$/.test(e[0])){a4[e[0]]=e[1]}}ai=null}a2=aO()},aI=function(){if(!c){c=a0;ay();var d=a("body").ajaxComplete(function(){aC.call(this);ad.call(this)}).trigger("ajaxComplete");if(a4.wrap){a("body > *").wrapAll('<div style="padding:'+(at(d,"marginTop")+at(d,"paddingTop"))+"px "+(at(d,"marginRight")+at(d,"paddingRight"))+"px "+(at(d,"marginBottom")+at(d,"paddingBottom"))+"px "+(at(d,"marginLeft")+at(d,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+aV+'" style="height:100%; overflow:auto;'+(ar?window.statusbar.visible&&!/chrome/i.test(P)?"":" resize:both;":"")+'" />');a("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});ar&&a('<style type="text/css" />').appendTo("head").text("#"+aV+"::-webkit-resizer { background-color: #fff; }")}if(aq&&aW<8){d=aY.getElementsByTagName("frameset")[0];aX=aY.createElement((d?"":"i")+"frame");if(d){d.insertAdjacentElement("beforeEnd",aX);d[d.cols?"cols":"rows"]+=",0";aX.noResize=a0;aX.frameBorder=aX.frameSpacing=0}else{aX.style.display="none";aX.style.width=aX.style.height=0;aX.tabIndex=-1;aY.body.insertAdjacentElement("afterBegin",aX)}aM(function(){a(aX).bind("load",function(){var e=aX.contentWindow;a2=typeof e[aV]!=aQ?e[aV]:"";if(a2!=aO()){al(aZ);a3.hash=au(a2,a0)}});typeof aX.contentWindow[aV]==aQ&&ab()},50)}else{if(ar){if(aW<418){a(aY.body).append('<form id="'+aV+'" style="position:absolute;top:-9999px;" method="get"></form>');w=aY.getElementById(aV)}if(typeof a3[aV]==aQ){a3[aV]={}}if(typeof a3[aV][a3.pathname]!=aQ){ap=a3[aV][a3.pathname].split(",")}}}aM(function(){aL("init");al(aZ)},1);if(!av()){if(aq&&aW>7||!aq&&"on"+ah in a1){if(a1.addEventListener){a1.addEventListener(ah,aj,false)}else{a1.attachEvent&&a1.attachEvent("on"+ah,aj)}}else{aT(aj,50)}}}},aC=function(){var e,d=a("a"),j=d.size(),g=-1;aM(function(){if(++g!=j){e=a(d.get(g));e.is("[rel*=address:]")&&e.address();aM(arguments.callee,1)}},1)},aD=function(){if(a2!=aO()){a2=aO();al(aZ)}},ag=function(){if(a1.removeEventListener){a1.removeEventListener(ah,aj,false)}else{a1.detachEvent&&a1.detachEvent("on"+ah,aj)}},ad=function(){var d=a3.pathname.replace(/\/$/,"");a("body").html().indexOf("_escaped_fragment_")!=-1&&a("a[href]:not([href^=http]), , a[href*="+document.domain+"]",this).each(function(){var e=a(this).attr("href").replace(/^http:/,"").replace(new RegExp(d+"/?$"),"");if(e==""||e.indexOf("_escaped_fragment_")!=-1){a(this).attr("href","#"+this.decode(e.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,"!$2")))}})},ak=function(d){return encodeURIComponent(d).replace(/%20/g,"+")},az=function(d){return d.split("#")[0].split("?")[0]},i=function(e){e=az(e);var d=e.replace(/\/{2,9}/g,"/").split("/");if(e.substr(0,1)=="/"||e.length===0){d.splice(0,1)}e.substr(e.length-1,1)=="/"&&d.splice(d.length-1,1);return d},ae=function(d){d=d.split("?");return d.slice(1,d.length).join("?").split("#")[0]},aK=function(e,d){if(d=ae(d)){params=d.split("&");d=[];for(aS=0;aS<params.length;aS++){var g=params[aS].split("=");g[0]==e&&d.push(g.slice(1).join("="))}if(d.length!==0){return d.length!=1?d:d[0]}}},aA=function(e){var d=ae(e);e=[];if(d&&d.indexOf("=")!=-1){d=d.split("&");for(var j=0;j<d.length;j++){var g=d[j].split("=")[0];a.inArray(g,e)==-1&&e.push(g)}}return e},L=function(d){d=d.split("#");return d.slice(1,d.length).join("#")},aV="jQueryAddress",aQ="undefined",ah="hashchange",a5="change",aF="internalChange",ax="externalChange",a0=true,aZ=false,a4={autoUpdate:a0,crawlable:aZ,history:a0,strict:a0,wrap:aZ},aR=a.browser,aW=parseFloat(a.browser.version),aN=aR.mozilla,aq=aR.msie,aB=aR.opera,ar=aR.webkit,q=aZ,a1=function(){try{return top.document!==undefined?top:window}catch(d){return window}}(),aY=a1.document,aH=a1.history,a3=a1.location,aT=setInterval,aM=setTimeout,P=navigator.userAgent,aX,w,ai=aw(document),aG=ai?ai.indexOf("?"):-1,h=aY.title,am=aH.length,af=aZ,c=aZ,f=a0,Q=a0,ac=aZ,ap=[],a2=aO();if(aq){aW=parseFloat(P.substr(P.indexOf("MSIE")+4));if(aY.documentMode&&aY.documentMode!=aW){aW=aY.documentMode!=8?7:8}a(document).bind("propertychange",function(){if(aY.title!=h&&aY.title.indexOf("#"+aO())!=-1){aY.title=h}})}if(q=aN&&aW>=1||aq&&aW>=6||aB&&aW>=9.5||ar&&aW>=312){for(var aS=1;aS<am;aS++){ap.push("")}ap.push(a2);if(aB){history.navigationMode="compatible"}if(document.readyState=="complete"){var aU=setInterval(function(){if(a.address){aI();clearInterval(aU)}},50)}else{ay();a(aI)}aR=an();if(typeof a4.state!==aQ){if(aH.pushState){aR.substr(0,3)=="/#/"&&a3.replace(a4.state.replace(/^\/$/,"")+aR.substr(2))}else{aR!="/"&&aR.replace(/^\/#/,"")!=ao()&&a3.replace(a4.state.replace(/^\/$/,"")+"/#"+aR)}}a(window).bind("popstate",aD).bind("unload",ag)}else{!q&&ao()!=""||ar&&aW<418&&ao()!=""&&a3.search!=""?a3.replace(a3.href.substr(0,a3.href.indexOf("#"))):b()}return{bind:function(e,d,g){return aJ(e,d,g)},init:function(d){return aJ("init",d)},change:function(d){return aJ(a5,d)},internalChange:function(d){return aJ(aF,d)},externalChange:function(d){return aJ(ax,d)},baseURL:function(){var d=a3.href;if(d.indexOf("#")!=-1){d=d.substr(0,d.indexOf("#"))}if(/\/$/.test(d)){d=d.substr(0,d.length-1)}return d},autoUpdate:function(d){if(d!==undefined){a4.autoUpdate=d;return this}return a4.autoUpdate},crawlable:function(d){if(d!==undefined){a4.crawlable=d;return this}return a4.crawlable},history:function(d){if(d!==undefined){a4.history=d;return this}return a4.history},state:function(d){if(d!==undefined){a4.state=d;return this}return a4.state},strict:function(d){if(d!==undefined){a4.strict=d;return this}return a4.strict},tracker:function(d){if(d!==undefined){a4.tracker=d;return this}return a4.tracker},wrap:function(d){if(d!==undefined){a4.wrap=d;return this}return a4.wrap},update:function(){ac=a0;this.value(a2);ac=aZ;return this},encode:function(g){var e=i(g),n=aA(g),k=ae(g),m=L(g),l=g.substr(0,1),d=g.substr(g.length-1),j="";a.each(e,function(o,p){j+="/"+ak(p)});if(k!==""){j+="?";if(n.length===0){j+=k}else{a.each(n,function(o,p){o=aK(p,g);if(typeof o!=="string"){a.each(o,function(s,r){j+=ak(p)+"="+ak(r)+"&"})}else{j+=ak(p)+"="+ak(o)+"&"}});j=j.substr(0,j.length-1)}}if(m!==""){j+="#"+ak(m)}if(l!="/"&&j.substr(0,1)=="/"){j=j.substr(1)}if(/#|&|\?/.test(d)){j+=d}return j},decode:function(d){return decodeURIComponent(d.replace(/\+/g,"%20"))},title:function(d){if(d!==undefined){aM(function(){h=aY.title=d;if(Q&&aX&&aX.contentWindow&&aX.contentWindow.document){aX.contentWindow.document.title=d;Q=aZ}if(!f&&aN){a3.replace(a3.href.indexOf("#")!=-1?a3.href:a3.href+"#")}f=aZ},50);return this}return aY.title},value:function(e){if(e!==undefined){e=aE(this.encode(e),a0);if(e=="/"){e=""}if(a2==e&&!ac){return}f=a0;a2=e;if(a4.autoUpdate||ac){al(a0);if(av()){aH[a4.history?"pushState":"replaceState"]({},"",a4.state.replace(/\/$/,"")+(a2==""?"/":a2))}else{af=a0;ap[aH.length]=a2;if(ar){if(a4.history){a3[aV][a3.pathname]=ap.toString();am=aH.length+1;if(aW<418){if(a3.search==""){w.action="#"+au(a2,a0);w.submit()}}else{if(aW<523||a2==""){e=aY.createEvent("MouseEvents");e.initEvent("click",a0,a0);var d=aY.createElement("a");d.href="#"+au(a2,a0);d.dispatchEvent(e)}else{a3.hash="#"+au(a2,a0)}}}else{a3.replace("#"+au(a2,a0))}}else{if(a2!=aO()){if(a4.history){a3.hash="#"+au(a2,a0)}else{a3.replace("#"+au(a2,a0))}}}aq&&aW<8&&a4.history&&aM(ab,50);if(ar){aM(function(){af=aZ},1)}else{af=aZ}}}return this}if(!q){return null}return aE(this.decode(a2),aZ)},path:function(e){if(e!==undefined){var d=this.queryString(),g=this.hash();this.value(e+(d?"?"+d:"")+(g?"#"+g:""));return this}return az(this.value())},pathNames:function(){return i(this.value())},queryString:function(e){if(e!==undefined){var d=this.hash();this.value(this.path()+(e?"?"+e:"")+(d?"#"+d:""));return this}return ae(this.value())},parameter:function(n,m,k){var g,d;if(m!==undefined){var j=this.parameterNames();d=[];for(g=0;g<j.length;g++){var l=j[g],e=this.parameter(l);if(typeof e=="string"){e=[e]}if(l==n){e=m===null||m===""?[]:k?e.concat([m]):[m]}for(var o=0;o<e.length;o++){d.push(l+"="+e[o])}}a.inArray(n,j)==-1&&m!==null&&m!==""&&d.push(n+"="+m);this.queryString(d.join("&"));return this}return aK(n,this.value())},parameterNames:function(){return aA(this.value())},hash:function(d){if(d!==undefined){this.value(this.value().split("#")[0]+(d?"#"+d:""));return this}return L(this.value())}}}();a.fn.address=function(b){if(!a(this).attr("address")){var c=function(d){if(a(this).is("a")){var e=b?b.call(this):/address:/.test(a(this).attr("rel"))?a(this).attr("rel").split("address:")[1].split(" ")[0]:typeof a.address.state()!=="undefined"&&a.address.state()!="/"?a(this).attr("href").replace(new RegExp("^(.*"+a.address.state()+"|\\.)"),""):a(this).attr("href").replace(/^(#\!?|\.)/,"");a.address.value(e);d.preventDefault()}};a(this).click(c).live("click",c).submit(function(d){if(a(this).is("form")){var e=b?b.call(this):a(this).attr("action")+"?"+a.address.decode(a(this).serialize());a.address.value(e);d.preventDefault()}}).attr("address",true)}return this}})(jQuery);(function(){$.clismon={};if(typeof console=="undefined"||typeof console.log=="undefined"){console={log:function(){},debug:function(){}}}})(jQuery);(function(d){var c=d.autosize={active:true};d.fn.autosize=function(e){var f={size:100,method:"fit"};e=d.extend(f,e);return this.each(function(){a[e.method](d(this),e)})};d(window).resize(function(){if(c.active){var e=d(this);d(".autosize").each(function(){var g=d(this);var f=g.data("autosize");b[f.method](e,g,f)})}});var a={fit:function(f,e){e.ratio=e.width/e.height;var g=100-e.size;e.size=""+e.size+"%";e.current="width";f.css("position","absolute").css("left",g).css("top",g);f.css("width",e.size);f.data("autosize",e);f.addClass("autosize")}};var b={fit:function(g,i,h){var f=g.width()/g.height();var e=h.ratio>f?"height":"width";console.log("best fit: ",e," current: ",h.current);if(h.current!=e){console.log("change! to:",e);i.css(h.current,"").css(e,h.size);h.current=e}}}})(jQuery);(function(f){var b=[];var a=-1;var e=0;var k={};f.clismon=f.clismon||{};if(typeof console=="undefined"||typeof console.log=="undefined"){console={log:function(){},debug:function(){}}}jQuery.fn.controls=function(){return this.each(function(){var n=f(this);var m=false;f(this).children("a").hover(function(){m=true},function(){m=false});var o=function(){if(!m){n.fadeOut()}};var p=null;f(document).mousemove(function(){n.fadeIn("fast");clearTimeout(p);p=setTimeout(o,500)});n.fadeOut()})};f.extend(f.clismon,{background:function(p,o,m){var n=o/m;f("#wrap").append(i(p,function(){f(window).trigger("resize")}).attr("id","background"));f(window).resize(function(){var s=f(window).width();var t=f(window).height();var u=s/t;var q=1;if(u>n){q=s/o}else{q=t/m}f("#background").css("height",m*q);f("#background").css("width",o*q)})},slideshow:{add:function(q,n,p,o,m){b.push({id:q,name:n,path:p,width:o,height:m})},start:function(){f(window).resize(function(){h()})},prev:function(){d(j())},next:function(){d(l())}}});var i=function(n,o){var m=f("<img />");m.attr("src",n);m.bind("load",o);return m};var j=function(){var m=a-1;if(m<0){m=0}return m};var l=function(){var m=a+1;if(m==b.length){m=m-1}return m};f.address.change(function(n){var m=n.value.substring(1);if(m==""){d(0)}else{var p=m.split("-");var o=p[0];g(c(o))}});var c=function(o){var n=b.length;for(var m=0;m<n;m++){if(b[m].id==o){return m}}return 0};var d=function(m){f.address.value(""+b[m].id+"-"+b[m].name)};var g=function(m){if(a==m){return}f("#background").css("opacity",1);f("#previous_slide").css("opacity",m==0?0.3:1);f("#next_slide").css("opacity",m==(b.length-1)?0.3:1);a=m;var n=e=b[m];var o=i(n.path,function(){f("#background").css("opacity",0.5);f("#placeholder img").fadeIn()});o.hide();o.attr("id","current");f("#placeholder").empty().append(o).attr("href",n.path);h()};var h=function(){var o=f("#placeholder img");var m=e.width;var u=e.height;var t=f(window).width()-20;var r=f(window).height()-40;var s=t/m;var q=r/u;var n=s<q?s:q;n=n>1?1:n;var v=u*n;var p=m*n;o.css("height",v);o.css("width",p);o.css("margin-top",-0.5*v-10);o.css("margin-left",-0.5*p)};f(function(){f("a[rel*=external]").click(function(){window.open(this.href);return false})})})(jQuery);