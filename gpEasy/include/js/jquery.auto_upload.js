(function(b){jQuery.fn.auto_upload=function(d){function p(){var e=b(this).attr("name"),h=b(this.form),i=h.serializeArray();b.each(this.files,function(q,g){var k={},j="undefined"!=typeof g.fileName?g.fileName:g.name;if(d.start(j,k)){var c=new XMLHttpRequest;c.onload=function(){d.finish(c.responseText,j,k)};c.upload.onprogress=function(a){d.progress(a.loaded/a.total,j,k)};c.onerror=function(a){d.error(name,a,k)};var f=h.attr("method"),m=h.attr("action");c.open(f,m,!0);c.setRequestHeader("Cache-Control",
"no-cache");c.setRequestHeader("X-Requested-With","XMLHttpRequest");c.setRequestHeader("X-File-Name",j);c.setRequestHeader("X-File-Size",g.fileSize);if(window.FormData){var n=new FormData;b.each(i,function(a,b){n.append(b.name,b.value)});n.append(e,g);c.send(n)}else if(g.getAsBinary){var l="------multipartformboundary"+(new Date).getTime();c.setRequestHeader("content-type","multipart/form-data; boundary="+l);var a="";b.each(i,function(b,c){a+="--"+l+"\r\n";a+='Content-Disposition: form-data; name="'+
unescape(encodeURIComponent(c.name))+'"';a+="\r\n\r\n";a+=unescape(encodeURIComponent(c.value));a+="\r\n"});a+="--"+l+"\r\n";a+='Content-Disposition: form-data; name="'+e+'"; filename="'+unescape(encodeURIComponent(j))+'"';a+="\r\n";a+="Content-Type: application/octet-stream";a+="\r\n\r\n";a+=g.getAsBinary();a+="\r\n";a+="--"+l+"--";a+="\r\n";c.sendAsBinary(a)}}});this.form.reset()}var d=b.extend({},b.fn.auto_upload.defaults,d),f,m=document.createElement("input");m.type="file";f="multiple"in m&&"undefined"!=
typeof File&&("undefined"!==typeof FormData||"undefined"!==typeof FileReader)&&"undefined"!=typeof XMLHttpRequest&&"undefined"!=typeof(new XMLHttpRequest).upload;return b(this).each(function(){$this=b(this);f?($this.attr("multiple","multiple"),$this.bind("change.auto_upload",p)):($input=b(this),$form=b(this.form),$input.bind("change",function(){for(var e=this.value.toString();(pos=e.search("\\\\"))&&-1!=pos;)e=e.substr(pos+1);var h={};d.start(e,h);var i="gp_"+Math.round(1E7*Math.random()),f=b('<iframe name="'+
i+'" id="'+i+'" style="display:none"></iframe>').appendTo("body");$form.attr("target",i).one("submit",function(){f.one("load",function(){var b=f.contents().find("html").html();d.finish(b,e,h);setTimeout(function(){f.remove()},10)})}).submit()}));$this.bind("destroy.auto_upload",function(){$this.unbind(".auto_upload")})})};b.fn.auto_upload.defaults={start:function(){return!0},progress:function(){},finish:function(){},error:function(){}}})(jQuery);