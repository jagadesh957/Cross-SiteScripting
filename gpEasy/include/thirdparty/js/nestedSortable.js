(function(b){b.widget("ui.nestedSortable",b.extend({},b.ui.sortable.prototype,{options:{tabSize:20,disableNesting:"ui-nestedSortable-no-nesting",errorClass:"ui-nestedSortable-error",listType:"ol"},_create:function(){this.element.data("sortable",this.element.data("sortableTree"));return b.ui.sortable.prototype._create.apply(this,arguments)},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");this.lastPositionAbs||(this.lastPositionAbs=
this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:a.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity?
this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:a.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(a.pageY-b(document).scrollTop()<c.scrollSensitivity?d=b(document).scrollTop(b(document).scrollTop()-c.scrollSpeed):b(window).height()-(a.pageY-b(document).scrollTop())<c.scrollSensitivity&&(d=b(document).scrollTop(b(document).scrollTop()+c.scrollSpeed)),a.pageX-b(document).scrollLeft()<
c.scrollSensitivity?d=b(document).scrollLeft(b(document).scrollLeft()-c.scrollSpeed):b(window).width()-(a.pageX-b(document).scrollLeft())<c.scrollSensitivity&&(d=b(document).scrollLeft(b(document).scrollLeft()+c.scrollSpeed)));!1!==d&&(b.ui.ddmanager&&!c.dropBehaviour)&&b.ui.ddmanager.prepareOffsets(this,a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||"y"!=this.options.axis)this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||"x"!=this.options.axis)this.helper[0].style.top=
this.position.top+"px";for(d=this.items.length-1;0<=d;d--){var f=this.items[d],e=f.item[0],h=this._intersectsWithPointer(f);if(h&&e!=this.currentItem[0]&&this.placeholder[1==h?"next":"prev"]()[0]!=e&&!b.ui.contains(this.placeholder[0],e)&&("semi-dynamic"==this.options.type?!b.ui.contains(this.element[0],e):1)){this.direction=1==h?"down":"up";if("pointer"==this.options.tolerance||this._intersectsWithSides(f))this._rearrange(a,f);else break;this._clearEmpty(e);this._trigger("change",a,this._uiHash());
break}}for(itemBefore=this.placeholder[0].previousSibling;null!=itemBefore&&!(1==itemBefore.nodeType&&itemBefore!=this.currentItem[0]);)itemBefore=itemBefore.previousSibling;parentItem=this.placeholder[0].parentNode.parentNode;newList=document.createElement(c.listType);null!=parentItem&&"LI"==parentItem.nodeName&&this.positionAbs.left<b(parentItem).offset().left?(b(parentItem).after(this.placeholder[0]),this._clearEmpty(parentItem)):null!=itemBefore&&"LI"==itemBefore.nodeName&&this.positionAbs.left>
b(itemBefore).offset().left+this.options.tabSize?b(itemBefore).hasClass(this.options.disableNesting)?b(this.placeholder[0]).addClass(this.options.errorClass).css("marginLeft",this.options.tabSize):(b(this.placeholder[0]).hasClass(this.options.errorClass)&&b(this.placeholder[0]).css("marginLeft",0).removeClass(this.options.errorClass),null==itemBefore.children[1]&&itemBefore.appendChild(newList),itemBefore.children[1].appendChild(this.placeholder[0])):null!=itemBefore?(b(this.placeholder[0]).hasClass(this.options.errorClass)&&
b(this.placeholder[0]).css("marginLeft",0).removeClass(this.options.errorClass),b(itemBefore).after(this.placeholder[0])):b(this.placeholder[0]).hasClass(this.options.errorClass)&&b(this.placeholder[0]).css("marginLeft",0).removeClass(this.options.errorClass);this._contactContainers(a);b.ui.ddmanager&&b.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return!1},serialize:function(a){var c=this._getItemsAsjQuery(a&&a.connected),d=[],a=a||{};b(c).each(function(){var c=
(b(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/),e=(b(a.item||this).parent(a.listType).parent("li").attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);c&&d.push((a.key||c[1]+"["+(a.key&&a.expression?c[1]:c[2])+"]")+"="+(e?a.key&&a.expression?e[1]:e[2]:"root"))});!d.length&&a.key&&d.push(a.key+"=");return d.join("&")},toArray:function(a){function c(e,g,i){right=i+1;0<b(e).children(a.listType).children("li").length&&(g++,b(e).children(a.listType).children("li").each(function(){right=
c(b(this),g,right)}),g--);id=b(e).attr("id").match(a.expression||/(.+)[-=_](.+)/);g===d+1?pid="root":(parentItem=b(e).parent(a.listType).parent("li").attr("id").match(a.expression||/(.+)[-=_](.+)/),pid=parentItem[2]);f.push({item_id:id[2],parent_id:pid,depth:g,left:i,right:right});return i=right+1}var a=a||{},d=a.startDepthCount||0,f=[],e=2;f.push({item_id:"root",parent_id:"none",depth:d,left:"1",right:2*(b("li",this.element).length+1)});b(this.element).children("li").each(function(){e=c(b(this),
d+1,e)});return f},_createPlaceholder:function(a){var c=a||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var f=d.placeholder;d.placeholder={element:function(){var a=b(document.createElement(c.currentItem[0].nodeName)).addClass(f||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];f||(a.style.visibility="hidden");return a},update:function(b,a){if(!f||d.forcePlaceholderSize)(!a.height()||"auto"==a.css("height"))&&a.height(c.currentItem.height()),
a.width()||a.width(c.currentItem.width())}}}c.placeholder=b(d.placeholder.element.call(c.element,c.currentItem));c.currentItem.after(c.placeholder);d.placeholder.update(c,c.placeholder)},_clear:function(a,c){b.ui.sortable.prototype._clear.apply(this,arguments);for(var d=this.items.length-1;0<=d;d--)this._clearEmpty(this.items[d].item[0]);return!0},_clearEmpty:function(a){a.children[1]&&0==a.children[1].children.length&&a.removeChild(a.children[1])}}));b.ui.nestedSortable.prototype.options=b.extend({},
b.ui.sortable.prototype.options,b.ui.nestedSortable.prototype.options)})(jQuery);