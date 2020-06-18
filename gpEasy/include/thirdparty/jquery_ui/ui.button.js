(function(b){var g,h,i,e,k=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},j=function(a){var c=a.name,d=a.form,f=b([]);return c&&(d?f=b(d).find("[name='"+c+"']"):f=b("[name='"+c+"']",a.ownerDocument).filter(function(){return!this.form})),f};b.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",k);"boolean"!=typeof this.options.disabled?
this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled);this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,c=this.options,d="checkbox"===this.type||"radio"===this.type,f="ui-state-hover"+(d?"":" ui-state-active");null===c.label&&(c.label=this.buttonElement.html());this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){c.disabled||
(b(this).addClass("ui-state-hover"),this===g&&b(this).addClass("ui-state-active"))}).bind("mouseleave.button",function(){c.disabled||b(this).removeClass(f)}).bind("click.button",function(a){c.disabled&&(a.preventDefault(),a.stopImmediatePropagation())});this.element.bind("focus.button",function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){a.buttonElement.removeClass("ui-state-focus")});d&&(this.element.bind("change.button",function(){e||a.refresh()}),this.buttonElement.bind("mousedown.button",
function(a){c.disabled||(e=!1,h=a.pageX,i=a.pageY)}).bind("mouseup.button",function(a){if(!c.disabled&&(h!==a.pageX||i!==a.pageY))e=!0}));"checkbox"===this.type?this.buttonElement.bind("click.button",function(){if(c.disabled||e)return!1;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)}):"radio"===this.type?this.buttonElement.bind("click.button",function(){if(c.disabled||e)return!1;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed",
"true");var d=a.element[0];j(d).not(d).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return!1;b(this).addClass("ui-state-active");g=this;b(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return!1;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(a){if(c.disabled)return!1;(a.keyCode==b.ui.keyCode.SPACE||
a.keyCode==b.ui.keyCode.ENTER)&&b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(a){a.keyCode===b.ui.keyCode.SPACE&&b(this).click()}));this._setOption("disabled",c.disabled);this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";
if("checkbox"===this.type||"radio"===this.type){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b);this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b)));this.element.addClass("ui-helper-hidden-accessible");(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",
a)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");b.Widget.prototype.destroy.call(this)},_setOption:function(a,c){b.Widget.prototype._setOption.apply(this,arguments);"disabled"===a?c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1):this._resetButton()},refresh:function(){var a=this.element.is(":disabled");a!==this.options.disabled&&this._setOption("disabled",a);"radio"===this.type?j(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=b("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),d=this.options.icons,f=d.primary&&d.secondary,e=[];d.primary||d.secondary?(this.options.text&&e.push("ui-button-text-icon"+(f?"s":d.primary?"-primary":"-secondary")),d.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||
(e.push(f?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||a.attr("title",c))):e.push("ui-button-text-only");a.addClass(e.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,c){"disabled"===a&&this.buttons.button("option",a,c);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var a="rtl"===
this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
b.Widget.prototype.destroy.call(this)}})})(jQuery);