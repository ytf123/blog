!function n(e,t,r){function i(u,o){if(!t[u]){if(!e[u]){var s="function"==typeof require&&require;if(!o&&s)return s(u,!0);if(a)return a(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[u]={exports:{}};e[u][0].call(f.exports,function(n){var t=e[u][1][n];return i(t?t:n)},f,f.exports,n,e,t,r)}return t[u].exports}for(var a="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(n){(function(){var e,t,r,i,a,u,o,s,c,f,m,l,p,h,v,d;d=n("./utils.coffee"),u=$("#submit-new-comment"),a=$("#new-comment-form"),t=$("div.comments:eq(0)"),i=a.find("input[name=email]:eq(0)"),o=a.find("input[name=name]:eq(0)"),e=a.find("textarea[name=content]:eq(0)"),p=!1,r=$("span.count:eq(0)"),f=parseInt(r.html()),l=function(){return $("#submit-new-comment").click(function(n){var e,t;return n.preventDefault(),!p&&(e=a.serializeObject(),s(e))?(p=!0,t=$.ajax({url:"/comments.json",type:"POST",data:e}),t.success(function(n){return p=!1,v($(n.html)),m(),c()}),t.error(function(){return p=!1,alert("\u8868\u5355\u586b\u5199\u4e0d\u6b63\u786e")})):void 0})},s=function(n){var t,r,a;return t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[_\w\d\u4e00-\u9fa5]{2,31}$/i,t.test(n.email)?r.test(n.name)?1<=(a=n.content.length)&&140>=a?!0:(d.shake(e),!1):(d.shake(o),!1):(d.shake(i),!1)},m=function(){return r.text(++f)},c=function(){return a.find("textarea:eq(0)").val("")},v=function(n){return t.prepend(n),n.hide(),n.fadeIn(1e3)},h=function(){return $("head title").remove()},l(),h()}).call(this)},{"./utils.coffee":2}],2:[function(n,e){var t;t={},$.fn.serializeObject=function(){var n,e;return e={},n=this.serializeArray(),$.each(n,function(){return e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e},t.ajax=function(n){return n.data&&(n.data=JSON.stringify(n.data),n.contentType="application/json"),$.ajax(n)},t.getError=function(n){return n.responseJSON.error[0]},t.parseTagsStr=function(n){return n?n.replace(/[;\uff1b]$/,"").split(/[;\uff1b]/g):[]},t.shake=function(n){var e,t,r;return"static"===n.css("position")&&n.css("position","relative"),n.focus(),t=80,e=0,n.isRunning?void 0:(n.isRunning=!0,(r=function(){var i;return e++,i=5,3===e?void(n.isRunning=!1):n.animate({left:"-="+i+"px"},t,function(){return n.animate({left:"+="+2*i+"px"},t,function(){return n.animate({left:"-="+i+"px"},t,r)})})})())},e.exports=t},{}]},{},[1]);