"use strict";(()=>{if(document instanceof HTMLDocument==0)return;if("object"!=typeof vAPI||null===vAPI)return;const t=function(e){if(0!==e.button||!1===e.isTrusted)return;const n=e.target.closest("a");if(n instanceof HTMLAnchorElement!=0)if(vAPI instanceof Object!=0)try{const t=new URL(n.href.replace("&amp;title=","&title="));if(!1===/^(abp|ubo):$/.test(t.protocol)&&"subscribe.adblockplus.org"!==t.hostname)return;const c=t.searchParams.get("location")||"",o=t.searchParams.get("title")||"";if(""===c||""===o)return;vAPI.messaging.send("scriptlets",{what:"subscribeTo",location:c,title:o}),e.stopPropagation(),e.preventDefault()}catch(t){}else document.removeEventListener("click",t)};document.addEventListener("click",t)})();