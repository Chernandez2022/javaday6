"use strict";!function(){let e=document.querySelectorAll("noscript");if(0===e.length)return;let t,n=/^\s*(\d+)\s*;\s*url=(['"]?)([^'"]+)\2/i,r=/^https?:\/\//,l=function(e){let l=e.querySelector('meta[http-equiv="refresh"][content]');if(null===l)return;let i=n.exec(l.getAttribute("content"));if(null===i||""===i[3].trim())return;let o=new URL(i[3],document.baseURI);!1!==r.test(o.href)&&(t=setTimeout((()=>{location.assign(o.href)}),1e3*parseInt(i[1],10)+1),l.parentNode.removeChild(l))},i=function(e){if(/^application\/(?:xhtml\+)?xml/.test(document.contentType)){let t=document.createElement("span");for(;null!==e.firstChild;)t.appendChild(e.firstChild);return t}let t=(new DOMParser).parseFromString("<span>"+e.textContent+"</span>","text/html");return document.adoptNode(t.querySelector("span"))};for(let n of e){let e=n.parentNode;if(null===e)continue;let r=i(n);r.style.setProperty("display","inline","important"),void 0===t&&l(r),e.replaceChild(r,n)}}();