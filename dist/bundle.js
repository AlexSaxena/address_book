!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r=window.localStorage,i=function(){var e=JSON.parse(r.getItem("contacts")),n=document.querySelector(".contact-list");if(e){n.innerHTML="";var t=document.createElement("ul");e.forEach((function(e){var n=document.createElement("li");n.innerHTML='\n        <div class="ui centered card">\n        <div class="image">\n          <img src="https://semantic-ui.com/images/avatar/large/daniel.jpg" class="visible content">\n        </div>\n        <div class="content">\n            <div class="header">'+e.name+'</div>\n\n            <div class="meta">'+e.company+'</div>\n\n           <div>\n           <i class="twitter square icon"></i>\n            <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+'</a>\n            </div>\n\n            <i class="envelope open icon"></i>\n            <div class="email">'+e.email+'</div>\n            \n            <div class="description">\n            '+e.notes+"\n            </div>\n          </div>\n        </div>      \n       ",t.appendChild(n)})),n.appendChild(t)}else n.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",(function(){i();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",(function(n){n.preventDefault();var t=e.elements,o=t.name,a=t.email,c=t.phone,l=t.company,s=t.notes,u=t.twitter,d={id:Date.now(),name:o.value,email:a.value,phone:c.value,company:l.value,notes:s.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(d)),e.reset();var v=JSON.parse(r.getItem("contacts"))||[];v.push(d),r.setItem("contacts",JSON.stringify(v)),i()}))}))}]);