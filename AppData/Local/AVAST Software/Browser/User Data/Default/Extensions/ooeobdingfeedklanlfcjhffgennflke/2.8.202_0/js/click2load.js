"use strict";(()=>{if("object"!=typeof vAPI)return;const e=new URL(self.location.href),t=e.searchParams.get("url"),n=e.searchParams.get("aliasURL")||t,s=document.getElementById("frameURL");s.children[0].textContent=t,s.children[1].href=n,s.children[1].title=n,document.body.setAttribute("title",t);const i=function(){document.body.style.width=`${self.innerWidth}px`,document.body.style.height=`${self.innerHeight}px`};i(),self.addEventListener("resize",i),document.body.addEventListener("click",(e=>{!1!==e.isTrusted&&null===e.target.closest("#frameURL")&&vAPI.messaging.send("default",{what:"clickToLoad",frameURL:n}).then((e=>{e&&self.location.replace(n)}))}))})();