!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(){var a=this;a.transformed=null,this.init=function(){a.transformed=Promise.resolve($.ajax({url:"data/data.csv"})).then(function(a){var b=Papa.parse(a);b.data[0].splice(0,3);var c=b.data[0],d=[];return b.data.splice(0,1),b.data.map(function(a){var b=a[0],e=a[1],f=a[2];a.splice(0,3),a.map(function(a,g){d.push({"super":b,sub:e,canton:c[g],value:+a,year:+f})})}),d})}}function d(a,b,c){return c.lastIndexOf(a)===b}function e(a,b){return a?b.year===a:!0}function f(a,b){return a?b.canton===a:!0}var g=["CH","BA"];c.prototype.all=function(){return this.transformed},c.prototype.activ=function(a,b){return this.transformed.then(function(c){return c.filter(function(a){return"aktiv"===a.sub&&"typ"===a["super"]}).filter(e.bind(null,a)).filter(f.bind(null,b)).reduce(function(a,b){return a+=b.value},0)})},c.prototype.vorratsdaten=function(a,b){return this.transformed.then(function(c){return c.filter(function(a){return"vds"===a.sub&&"typ"===a["super"]}).filter(e.bind(null,a)).filter(f.bind(null,b)).reduce(function(a,b){return a+=b.value},0)})},c.prototype.cantons=function(){return this.transformed.then(function(a){return a.filter(function(a){return-1===g.indexOf(a.canton)}).map(function(a){return a.canton}).filter(d).sort()})},c.prototype.years=function(){return this.transformed.then(function(a){return a.map(function(a){return a.year}).filter(d).sort()})},c.prototype.fakeCantons=function(){return Promise.resolve(g)};var h=new c;b.exports=h,$(window).load(function(){this["interface"]={selected:null},this.controller=function(){var b=a("sliv-data");b.all().then(function(a){console.log("got data from service",a),nv.addGraph(function(){var a=nv.models.multiBarChart();return a.multibar.stacked(!0),a.showControls(!1),d3.select("#course>svg").datum([{key:"Aktiv",values:[{x:"2012",y:10},{x:"2013",y:30}]},{key:"Passiv",values:[{x:"2012",y:6},{x:"2013",y:40}]}]).transition().duration(250).call(a),nv.utils.windowResize(a.update),a.multibar.dispatch.on("elementClick",function(a){console.log("selected year",a.point.x)}),a})})},window.year=this["interface"],this.controller()}),$(window).load(function(){var a=this;this["interface"]={selected:null},this.controller=function(){function b(){a["interface"].selected=this.id}function c(){$("#filter cantons .btn[value="+this.id+"]").addClass("focus")}function d(){$("#filter cantons .btn[value="+this.id+"]").removeClass("focus")}for(var e=document.getElementById("svgMap"),f=e.contentDocument,g=f.querySelectorAll("#Cantons_default>path"),h=0;h<g.length;h++)g[h].addEventListener("click",b,!1),g[h].addEventListener("mouseenter",c,!1),g[h].addEventListener("mouseleave",d,!1)},window.map=this["interface"],this.controller()}),$(document).ready(function(){a("es6-promise").polyfill();var b=a("sliv-data");b.init();var c=a("sliv-filter"),d=new c(b,PathObserver),e=a("sliv-art");new e(b,d,CompoundObserver)})},{"es6-promise":8,"sliv-art":3,"sliv-data":4,"sliv-filter":5}],2:[function(a,b){var c=a("jade/runtime");b.exports=function(a){var b=[{lineno:1,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}];try{var d,e=[],f=a||{};return function(a,f){b.unshift({lineno:0,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),b.unshift({lineno:1,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n<h2>"),b.unshift({lineno:void 0,filename:b[0].filename}),b.unshift({lineno:1,filename:b[0].filename}),e.push("Art der Überwachung"),b.shift(),b.shift(),e.push("</h2>"),b.shift(),b.unshift({lineno:2,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push('\n<table class="table">'),b.unshift({lineno:void 0,filename:b[0].filename}),b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n  <tr>"),b.unshift({lineno:void 0,filename:b[0].filename}),b.unshift({lineno:4,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n    <th>"),b.unshift({lineno:void 0,filename:b[0].filename}),b.unshift({lineno:4,filename:b[0].filename}),e.push("Aktiv"),b.shift(),b.shift(),e.push("</th>"),b.shift(),b.unshift({lineno:5,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n    <td>"+c.escape(null==(d=a)?"":d)),b.unshift({lineno:void 0,filename:b[0].filename}),b.shift(),e.push("</td>"),b.shift(),b.shift(),e.push("\n  </tr>"),b.shift(),b.unshift({lineno:6,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n  <tr>"),b.unshift({lineno:void 0,filename:b[0].filename}),b.unshift({lineno:7,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n    <th>"),b.unshift({lineno:void 0,filename:b[0].filename}),b.unshift({lineno:7,filename:b[0].filename}),e.push("Vorratsdaten"),b.shift(),b.shift(),e.push("</th>"),b.shift(),b.unshift({lineno:8,filename:"/Users/ideadapt/repos/slir/src/app/scripts/art/art.jade"}),e.push("\n    <td>"+c.escape(null==(d=f)?"":d)),b.unshift({lineno:void 0,filename:b[0].filename}),b.shift(),e.push("</td>"),b.shift(),b.shift(),e.push("\n  </tr>"),b.shift(),b.shift(),e.push("\n</table>"),b.shift(),b.shift()}.call(this,"activ"in f?f.activ:"undefined"!=typeof activ?activ:void 0,"vorratsdaten"in f?f.vorratsdaten:"undefined"!=typeof vorratsdaten?vorratsdaten:void 0),e.join("")}catch(g){c.rethrow(g,b[0].filename,b[0].lineno,"h2 Art der Überwachung\ntable.table\n	tr\n		th Aktiv\n		td=activ\n	tr\n		th Vorratsdaten\n		td=vorratsdaten")}}},{"jade/runtime":11}],3:[function(a,b){function c(b,c,d){function e(){return Promise.resolve()}function f(){var a=new d;a.addPath(c,"year"),a.addPath(c,"canton"),a.open(function(a){var c=b.activ(a[0],a[1]).then(function(a){h.activ=a}),d=b.vorratsdaten(a[0],a[1]).then(function(a){h.vorratsdaten=a});Promise.all([c,d]).then(function(){g.call(h)})})}function g(){var b=a("./art.jade"),c=b({activ:h.activ,vorratsdaten:h.vorratsdaten});return $("#art").html(c),Promise.resolve()}var h=this;h.activ=null,e.call(this).then(g.bind(this)).then(f.bind(this))}c.prototype.activ=function(){return this.activ},b.exports=c},{"./art.jade":2}],4:[function(a,b){function c(){var a=this;a.transformed=null,this.init=function(){a.transformed=Promise.resolve($.ajax({url:"data/data.csv"})).then(function(a){var b=Papa.parse(a);b.data[0].splice(0,3);var c=b.data[0],d=[];return b.data.splice(0,1),b.data.map(function(a){var b=a[0],e=a[1],f=a[2];a.splice(0,3),a.map(function(a,g){d.push({"super":b,sub:e,canton:c[g],value:+a,year:+f})})}),d})}}function d(a,b,c){return c.lastIndexOf(a)===b}function e(a,b){return a?b.year===a:!0}function f(a,b){return a?b.canton===a:!0}var g=["CH","BA"];c.prototype.all=function(){return this.transformed},c.prototype.activ=function(a,b){return this.transformed.then(function(c){return c.filter(function(a){return"aktiv"===a.sub&&"typ"===a["super"]}).filter(e.bind(null,a)).filter(f.bind(null,b)).reduce(function(a,b){return a+=b.value},0)})},c.prototype.vorratsdaten=function(a,b){return this.transformed.then(function(c){return c.filter(function(a){return"vds"===a.sub&&"typ"===a["super"]}).filter(e.bind(null,a)).filter(f.bind(null,b)).reduce(function(a,b){return a+=b.value},0)})},c.prototype.cantons=function(){return this.transformed.then(function(a){return a.filter(function(a){return-1===g.indexOf(a.canton)}).map(function(a){return a.canton}).filter(d).sort()})},c.prototype.years=function(){return this.transformed.then(function(a){return a.map(function(a){return a.year}).filter(d).sort()})},c.prototype.fakeCantons=function(){return Promise.resolve(g)};var h=new c;b.exports=h},{}],5:[function(a,b){function c(b,c){function d(){var a=b.years().then(function(a){i.years=a,i.year=Math.max(a)}),c=b.cantons().then(function(a){i.cantons1=a.slice(0,13),i.cantons2=a.slice(13)}),d=b.fakeCantons().then(function(a){i.fakeCantons=a,i.canton=a[0]}),e=document.getElementById("svgMap");return i.svgDoc=e.contentDocument,Promise.all([c,a,d])}function e(){$("#filter years").on("click","button",function(a){i.year=a.target.value,f.call(i)}),$("#filter cantons").on("click","button",function(a){i.canton=a.target.value,$(i.svgDoc).find("#Cantons_default>path").attr("class",""),$(i.svgDoc).find("#"+i.canton).attr("class","active"),g.call(i)}),$("#filter cantons").on("mouseenter","button",function(a){var b=a.target.value;$(i.svgDoc).find("#"+b).attr("class","active")}),$("#filter cantons").on("mouseleave","button",function(a){if(a.target.value!==i.canton){var b=a.target.value;$(i.svgDoc).find("#"+b).attr("class","")}});var a=new c(window.map,"selected");a.open(function(a){i.canton=a,$(i.svgDoc).find("#Cantons_default>path").attr("class",""),$(i.svgDoc).find("#"+i.canton).attr("class","active"),g.call(i)})}function f(){var b=a("./filterYears.jade"),c=b({years:this.years,year:i.year});$("#filter>years").html(c)}function g(){var b=a("./filterCantons.jade"),c=b({cantons1:this.cantons1,cantons2:this.cantons2,fakeCantons:this.fakeCantons,canton:i.canton});$("#filter>cantons").html(c)}function h(){return f.call(this),g.call(this),Promise.resolve()}var i=this;i.year=null,i.canton=null,i.svgDoc=null,d.call(this).then(h.bind(this)).then(e.bind(this))}c.prototype.year=function(){return this.year},b.exports=c},{"./filterCantons.jade":6,"./filterYears.jade":7}],6:[function(a,b){var c=a("jade/runtime");b.exports=function(a){var b=[{lineno:1,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}];try{var d,e=[],f=a||{};return function(a,f,g,h,i){b.unshift({lineno:0,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:2,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push('\n<div class="btn-group">'),b.unshift({lineno:i,filename:b[0].filename}),b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),function(){var f=h;if("number"==typeof f.length)for(var g=0,j=f.length;j>g;g++){var k=f[g];b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:4,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==a},"fake btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:i,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}else{var j=0;for(var g in f){j++;var k=f[g];b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:4,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==a},"fake btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:i,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}}}.call(this),b.shift(),b.shift(),e.push("\n</div>"),b.shift(),b.unshift({lineno:5,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push('\n<div class="btn-group">'),b.unshift({lineno:i,filename:b[0].filename}),b.unshift({lineno:6,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),function(){var g=f;if("number"==typeof g.length)for(var h=0,j=g.length;j>h;h++){var k=g[h];b.unshift({lineno:6,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:7,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==a},"btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:i,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}else{var j=0;for(var h in g){j++;var k=g[h];b.unshift({lineno:6,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:7,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==a},"btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:i,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}}}.call(this),b.shift(),b.shift(),e.push("\n</div>"),b.shift(),b.unshift({lineno:8,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push('\n<div class="btn-group">'),b.unshift({lineno:i,filename:b[0].filename}),b.unshift({lineno:9,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),function(){var f=g;if("number"==typeof f.length)for(var h=0,j=f.length;j>h;h++){var k=f[h];b.unshift({lineno:9,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:10,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==a},"btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:i,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}else{var j=0;for(var h in f){j++;var k=f[h];b.unshift({lineno:9,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),b.unshift({lineno:10,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterCantons.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==a},"btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:i,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}}}.call(this),b.shift(),b.shift(),e.push("\n</div>"),b.shift(),b.shift()}.call(this,"canton"in f?f.canton:"undefined"!=typeof canton?canton:void 0,"cantons1"in f?f.cantons1:"undefined"!=typeof cantons1?cantons1:void 0,"cantons2"in f?f.cantons2:"undefined"!=typeof cantons2?cantons2:void 0,"fakeCantons"in f?f.fakeCantons:"undefined"!=typeof fakeCantons?fakeCantons:void 0,"undefined"in f?f.undefined:void 0),e.join("")}catch(g){c.rethrow(g,b[0].filename,b[0].lineno,"\n.btn-group\n	each aFakeCanton in fakeCantons\n		button(value=aFakeCanton, class={active: aFakeCanton==canton}, class='fake btn btn-default')=aFakeCanton\n.btn-group\n	each aCanton in cantons1\n		button(value=aCanton, class={active: aCanton==canton}, class='btn btn-default')=aCanton\n.btn-group\n	each aCanton in cantons2\n		button(value=aCanton, class={active: aCanton==canton}, class='btn btn-default')=aCanton")}}},{"jade/runtime":11}],7:[function(a,b){var c=a("jade/runtime");b.exports=function(a){var b=[{lineno:1,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}];try{var d,e=[],f=a||{};return function(a,f,g){b.unshift({lineno:0,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),b.unshift({lineno:2,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),e.push('\n<div class="btn-group">'),b.unshift({lineno:a,filename:b[0].filename}),b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),function(){var h=g;if("number"==typeof h.length)for(var i=0,j=h.length;j>i;i++){var k=h[i];b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),b.unshift({lineno:4,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==f},"btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:a,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}else{var j=0;for(var i in h){j++;var k=h[i];b.unshift({lineno:3,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),b.unshift({lineno:4,filename:"/Users/ideadapt/repos/slir/src/app/scripts/filter/filterYears.jade"}),e.push("\n  <button"+c.attr("value",k,!0,!1)+c.cls([{active:k==f},"btn btn-default"],[!0,!0])+">"+c.escape(null==(d=k)?"":d)),b.unshift({lineno:a,filename:b[0].filename}),b.shift(),e.push("</button>"),b.shift(),b.shift()}}}.call(this),b.shift(),b.shift(),e.push("\n</div>"),b.shift(),b.shift()}.call(this,"undefined"in f?f.undefined:void 0,"year"in f?f.year:"undefined"!=typeof year?year:void 0,"years"in f?f.years:"undefined"!=typeof years?years:void 0),e.join("")}catch(g){c.rethrow(g,b[0].filename,b[0].lineno,"\n.btn-group\n	each aYear in years\n		button(value=aYear, class={active: aYear==year}, class='btn btn-default')=aYear")}}},{"jade/runtime":11}],8:[function(a,b){(function(a,c){(function(){"use strict";function d(a){return"function"==typeof a||"object"==typeof a&&null!==a}function e(a){return"function"==typeof a}function f(a){return"object"==typeof a&&null!==a}function g(){}function h(){return function(){a.nextTick(l)}}function i(){var a=0,b=new O(l),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function j(){var a=new MessageChannel;return a.port1.onmessage=l,function(){a.port2.postMessage(0)}}function k(){return function(){setTimeout(l,1)}}function l(){for(var a=0;L>a;a+=2){var b=Q[a],c=Q[a+1];b(c),Q[a]=void 0,Q[a+1]=void 0}L=0}function m(){}function n(){return new TypeError("You cannot resolve a promise with itself")}function o(){return new TypeError("A promises callback cannot return that same promise.")}function p(a){try{return a.then}catch(b){return U.error=b,U}}function q(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function r(a,b,c){M(function(a){var d=!1,e=q(c,b,function(c){d||(d=!0,b!==c?u(a,c):w(a,c))},function(b){d||(d=!0,x(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,x(a,e))},a)}function s(a,b){b._state===S?w(a,b._result):a._state===T?x(a,b._result):y(b,void 0,function(b){u(a,b)},function(b){x(a,b)})}function t(a,b){if(b.constructor===a.constructor)s(a,b);else{var c=p(b);c===U?x(a,U.error):void 0===c?w(a,b):e(c)?r(a,b,c):w(a,b)}}function u(a,b){a===b?x(a,n()):d(b)?t(a,b):w(a,b)}function v(a){a._onerror&&a._onerror(a._result),z(a)}function w(a,b){a._state===R&&(a._result=b,a._state=S,0===a._subscribers.length||M(z,a))}function x(a,b){a._state===R&&(a._state=T,a._result=b,M(v,a))}function y(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+S]=c,e[f+T]=d,0===f&&a._state&&M(z,a)}function z(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,e,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?C(c,d,e,f):e(f);a._subscribers.length=0}}function A(){this.error=null}function B(a,b){try{return a(b)}catch(c){return V.error=c,V}}function C(a,b,c,d){var f,g,h,i,j=e(c);if(j){if(f=B(c,d),f===V?(i=!0,g=f.error,f=null):h=!0,b===f)return void x(b,o())}else f=d,h=!0;b._state!==R||(j&&h?u(b,f):i?x(b,g):a===S?w(b,f):a===T&&x(b,f))}function D(a,b){try{b(function(b){u(a,b)},function(b){x(a,b)})}catch(c){x(a,c)}}function E(a,b,c,d){this._instanceConstructor=a,this.promise=new a(m,d),this._abortOnReject=c,this._validateInput(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._init(),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):x(this.promise,this._validationError())}function F(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function G(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(a,b){this._id=_++,this._label=b,this._state=void 0,this._result=void 0,this._subscribers=[],m!==a&&(e(a)||F(),this instanceof H||G(),D(this,a))}var I;I=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var J,K=I,L=(Date.now||function(){return(new Date).getTime()},Object.create||function(a){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof a)throw new TypeError("Argument must be an object");return g.prototype=a,new g},0),M=function(a,b){Q[L]=a,Q[L+1]=b,L+=2,2===L&&J()},N="undefined"!=typeof window?window:{},O=N.MutationObserver||N.WebKitMutationObserver,P="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3);J="undefined"!=typeof a&&"[object process]"==={}.toString.call(a)?h():O?i():P?j():k();var R=void 0,S=1,T=2,U=new A,V=new A;E.prototype._validateInput=function(a){return K(a)},E.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},E.prototype._init=function(){this._result=new Array(this.length)};var W=E;E.prototype._enumerate=function(){for(var a=this.length,b=this.promise,c=this._input,d=0;b._state===R&&a>d;d++)this._eachEntry(c[d],d)},E.prototype._eachEntry=function(a,b){var c=this._instanceConstructor;f(a)?a.constructor===c&&a._state!==R?(a._onerror=null,this._settledAt(a._state,b,a._result)):this._willSettleAt(c.resolve(a),b):(this._remaining--,this._result[b]=this._makeResult(S,b,a))},E.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===R&&(this._remaining--,this._abortOnReject&&a===T?x(d,c):this._result[b]=this._makeResult(a,b,c)),0===this._remaining&&w(d,this._result)},E.prototype._makeResult=function(a,b,c){return c},E.prototype._willSettleAt=function(a,b){var c=this;y(a,void 0,function(a){c._settledAt(S,b,a)},function(a){c._settledAt(T,b,a)})};var X=function(a,b){return new W(this,a,!0,b).promise},Y=function(a,b){function c(a){u(f,a)}function d(a){x(f,a)}var e=this,f=new e(m,b);if(!K(a))return x(f,new TypeError("You must pass an array to race.")),f;for(var g=a.length,h=0;f._state===R&&g>h;h++)y(e.resolve(a[h]),void 0,c,d);return f},Z=function(a,b){var c=this;if(a&&"object"==typeof a&&a.constructor===c)return a;var d=new c(m,b);return u(d,a),d},$=function(a,b){var c=this,d=new c(m,b);return x(d,a),d},_=0,ab=H;H.all=X,H.race=Y,H.resolve=Z,H.reject=$,H.prototype={constructor:H,then:function(a,b,c){var d=this,e=d._state;if(e===S&&!a||e===T&&!b)return this;d._onerror=null;var f=new this.constructor(m,c),g=d._result;if(e){var h=arguments[e-1];M(function(){C(e,f,h,g)})}else y(d,f,a,b);return f},"catch":function(a,b){return this.then(null,a,b)}};var bb=function(){var a;a="undefined"!=typeof c?c:"undefined"!=typeof window&&window.document?window:self;var b="Promise"in a&&"resolve"in a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;return new a.Promise(function(a){b=a}),e(b)}();b||(a.Promise=ab)},cb={Promise:ab,polyfill:bb};"function"==typeof define&&define.amd?define(function(){return cb}):"undefined"!=typeof b&&b.exports?b.exports=cb:"undefined"!=typeof this&&(this.ES6Promise=cb)}).call(this)}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:10}],9:[function(){},{}],10:[function(a,b){function c(){}var d=b.exports={};d.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.MutationObserver,c="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};var d=[];if(b){var e=document.createElement("div"),f=new MutationObserver(function(){var a=d.slice();d.length=0,a.forEach(function(a){a()})});return f.observe(e,{attributes:!0}),function(a){d.length||e.setAttribute("yes","no"),d.push(a)}}return c?(window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),d.length>0)){var c=d.shift();c()}},!0),function(a){d.push(a),window.postMessage("process-tick","*")}):function(a){setTimeout(a,0)}}(),d.title="browser",d.browser=!0,d.env={},d.argv=[],d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(){throw new Error("process.chdir is not supported")}},{}],11:[function(a,b,c){(function(d){!function(a){if("object"==typeof c&&"undefined"!=typeof b)b.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof d?e=d:"undefined"!=typeof self&&(e=self),e.jade=a()}}(function(){return function b(c,d,e){function f(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof a&&a;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var l=d[h]={exports:{}};c[h][0].call(l.exports,function(a){var b=c[h][1][a];return f(b?b:a)},l,l.exports,b,c,d,e)}return d[h].exports}for(var g="function"==typeof a&&a,h=0;h<e.length;h++)f(e[h]);return f}({1:[function(a,b,c){"use strict";function d(a){return null!=a&&""!==a}function e(a){return(Array.isArray(a)?a.map(e):a&&"object"==typeof a?Object.keys(a).filter(function(b){return a[b]}):[a]).filter(d).join(" ")}c.merge=function f(a,b){if(1===arguments.length){for(var c=a[0],e=1;e<a.length;e++)c=f(c,a[e]);return c}var g=a["class"],h=b["class"];(g||h)&&(g=g||[],h=h||[],Array.isArray(g)||(g=[g]),Array.isArray(h)||(h=[h]),a["class"]=g.concat(h).filter(d));for(var i in b)"class"!=i&&(a[i]=b[i]);return a},c.joinClasses=e,c.cls=function(a,b){for(var d=[],f=0;f<a.length;f++)d.push(b&&b[f]?c.escape(e([a[f]])):e(a[f]));var g=e(d);return g.length?' class="'+g+'"':""},c.style=function(a){return a&&"object"==typeof a?Object.keys(a).map(function(b){return b+":"+a[b]}).join(";"):a},c.attr=function(a,b,d,e){return"style"===a&&(b=c.style(b)),"boolean"==typeof b||null==b?b?" "+(e?a:a+'="'+a+'"'):"":0==a.indexOf("data")&&"string"!=typeof b?(-1!==JSON.stringify(b).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),b&&"function"==typeof b.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+a+"='"+JSON.stringify(b).replace(/'/g,"&apos;")+"'"):d?(b&&"function"==typeof b.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+a+'="'+c.escape(b)+'"'):(b&&"function"==typeof b.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+a+'="'+b+'"')},c.attrs=function(a,b){var d=[],f=Object.keys(a);if(f.length)for(var g=0;g<f.length;++g){var h=f[g],i=a[h];"class"==h?(i=e(i))&&d.push(" "+h+'="'+i+'"'):d.push(c.attr(h,i,!1,b))}return d.join("")},c.escape=function(a){var b=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return b===""+a?a:b},c.rethrow=function g(b,c,d,e){if(!(b instanceof Error))throw b;if(!("undefined"==typeof window&&c||e))throw b.message+=" on line "+d,b;try{e=e||a("fs").readFileSync(c,"utf8")}catch(f){g(b,null,d)}var h=3,i=e.split("\n"),j=Math.max(d-h,0),k=Math.min(i.length,d+h),h=i.slice(j,k).map(function(a,b){var c=b+j+1;return(c==d?"  > ":"    ")+c+"| "+a}).join("\n");throw b.path=c,b.message=(c||"Jade")+":"+d+"\n"+h+"\n\n"+b.message,b}},{fs:2}],2:[function(){},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{fs:9}]},{},[1]);