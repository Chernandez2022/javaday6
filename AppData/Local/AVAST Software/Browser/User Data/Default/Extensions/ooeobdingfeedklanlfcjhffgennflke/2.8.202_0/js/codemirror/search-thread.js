"use strict";(()=>{if(self.WorkerGlobalScope instanceof Object&&self instanceof self.WorkerGlobalScope){let e="";const t=function(t){const n=/\n\r|\r\n|\n|\r/g,s=Date.now()+750;let o;try{o=new RegExp(t.pattern,t.flags)}catch(e){return}const a=[],c=e.length;let r=0,i=0,l=0;for(;i<c;){const t=o.exec(e);if(null===t)break;n.lastIndex=0;const c=e.slice(i,t.index).match(n);if(Array.isArray(c)&&(r+=c.length),a.push(r),l+=1,n.lastIndex=o.lastIndex,i=null!==n.exec(e)?n.lastIndex:e.length,o.lastIndex=i,r+=1,0==(1023&l)&&Date.now()>=s)break}return a};self.onmessage=function(n){const s=n.data;switch(s.what){case"setHaystack":e=s.content;break;case"doSearch":const n=t(s);self.postMessage({id:s.id,response:n})}}}else{const e=3e5,t=new Map;let n,s,o=1;const a=function(e){const n=e.data,s=t.get(n.id);void 0!==s&&(t.delete(n.id),s(n.response))},c=function(){for(const e of t.values())e();t.clear()},r=function(){i(),self.searchThread=void 0},i=function(){void 0!==s&&(clearTimeout(s),s=void 0),void 0!==n&&(n.terminate(),n.onmessage=void 0,n=void 0,c())},l=function(){self.searchThread instanceof Object!=0&&(void 0===n&&(n=new Worker("js/codemirror/search-thread.js"),n.onmessage=a),void 0!==s&&clearTimeout(s),s=vAPI.setTimeout(i,e))},f=function(){return n instanceof Object==0},d=function(e){l(),n.postMessage({what:"setHaystack",content:e})},u=function(e,s=!0){if(l(),n instanceof Object==0)return Promise.resolve();s&&c();const a=o++;return n.postMessage({what:"doSearch",id:a,pattern:e.source,flags:e.flags,isRE:e instanceof RegExp}),new Promise((e=>{t.set(a,e)}))};self.addEventListener("beforeunload",(()=>{r()}),{once:!0}),self.searchThread={needHaystack:f,setHaystack:d,search:u,shutdown:i}}})();