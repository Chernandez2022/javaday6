"use strict";µBlock.HnSwitches=(()=>{var t=function(){this.reset()},e={"no-strict-blocking":0,"no-popups":2,"no-cosmetic-filtering":4,"no-remote-fonts":6,"no-large-media":8,"no-csp-reports":10,"no-scripting":12},s={1:"true",2:"false"},i={true:1,false:2,on:1,off:2},o=/[^\x20-\x7F]/;return t.prototype.reset=function(){this.switches=new Map,this.n="",this.z="",this.r=0,this.changed=!0,this.decomposedSource=[]},t.prototype.assign=function(t){for(let e of this.switches.keys())!1===t.switches.has(e)&&(this.switches.delete(e),this.changed=!0);for(let[e,s]of t.switches)this.switches.get(e)!==s&&(this.switches.set(e,s),this.changed=!0)},t.prototype.copyRules=function(t,e){let s=this.switches.get(e),i=t.switches.get(e);return i!==s&&(void 0!==i?this.switches.set(e,i):this.switches.delete(e),this.changed=!0),this.changed},t.prototype.hasSameRules=function(t,e){return this.switches.get(e)===t.switches.get(e)},t.prototype.toggle=function(t,s,i){let o=e[t];if(void 0===o)return!1;if(i===this.evaluate(t,s))return!1;let r=this.switches.get(s)||0;return r&=~(3<<o),r|=i<<o,0===r?this.switches.delete(s):this.switches.set(s,r),this.changed=!0,!0},t.prototype.toggleOneZ=function(t,s,i){let o=e[t];if(void 0===o)return!1;let r=this.evaluateZ(t,s);if(i===r)return!1;void 0===i&&(i=!r);let n=this.switches.get(s)||0;return n&=~(3<<o),0===n?this.switches.delete(s):this.switches.set(s,n),r=this.evaluateZ(t,s),r!==i&&this.switches.set(s,n|(i?1:2)<<o),this.changed=!0,!0},t.prototype.toggleBranchZ=function(t,e,s){this.toggleOneZ(t,e,s);let i=e.length;for(let s of this.switches.keys())s!==e&&(s.length<=i||!1!==s.endsWith(e)&&"."===s.charAt(s.length-i-1)&&this.toggle(t,s,0));return this.changed},t.prototype.toggleZ=function(t,e,s,i){return!0===s?this.toggleBranchZ(t,e,i):this.toggleOneZ(t,e,i)},t.prototype.evaluate=function(t,s){let i=this.switches.get(s);if(void 0===i)return 0;let o=e[t];return void 0===o?0:i>>>o&3},t.prototype.evaluateZ=function(t,s){let i=e[t];if(void 0===i)return this.r=0,!1;this.n=t,µBlock.decomposeHostname(s,this.decomposedSource);for(let t of this.decomposedSource){let e=this.switches.get(t);if(void 0!==e&&(e=e>>>i&3,0!==e))return this.z=t,this.r=e,1===e}return this.r=0,!1},t.prototype.toLogData=function(){return{source:"switch",result:this.r,raw:this.n+": "+this.z+" true"}},t.prototype.toArray=function(){let t=[],i=punycode.toUnicode;for(let r of this.switches.keys())for(var o in e){if(!1===e.hasOwnProperty(o))continue;let n=this.evaluate(o,r);0!==n&&(-1!==r.indexOf("xn--")&&(r=i(r)),t.push(o+": "+r+" "+s[n]))}return t},t.prototype.toString=function(){return this.toArray().join("\n")},t.prototype.fromString=function(t,e){let s=new µBlock.LineIterator(t);for(!0!==e&&this.reset();!1===s.eot();)this.addFromRuleParts(s.next().trim().split(/\s+/))},t.prototype.validateRuleParts=function(t){if(!(t.length<3)&&!1!==t[0].endsWith(":")&&!1!==i.hasOwnProperty(t[2]))return o.test(t[1])&&(t[1]=punycode.toASCII(t[1])),t},t.prototype.addFromRuleParts=function(t){if(void 0!==this.validateRuleParts(t)){let s=t[0].slice(0,-1);if(e.hasOwnProperty(s))return this.toggle(s,t[1],i[t[2]]),!0}return!1},t.prototype.removeFromRuleParts=function(t){return void 0!==this.validateRuleParts(t)&&(this.toggle(t[0].slice(0,-1),t[1],0),!0)},t})(),µBlock.sessionSwitches=new µBlock.HnSwitches,µBlock.permanentSwitches=new µBlock.HnSwitches;