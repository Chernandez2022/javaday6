"use strict";µBlock.getBytesInUse=async function(){const t=[];let e;t.push(vAPI.storage.getBytesInUse instanceof Function?vAPI.storage.getBytesInUse(null):void 0),navigator.storage instanceof Object&&navigator.storage.estimate instanceof Function&&t.push(navigator.storage.estimate());const s=await Promise.all(t),i=t=>{if("number"==typeof t)return void 0===e&&(e=0),e+=t,e};return i(s[0]),s.length>1&&s[1]instanceof Object&&i(s[1].usage),µBlock.storageUsed=e,e},µBlock.saveLocalSettings=(()=>{const t=24e4,e=()=>{const s=µBlock;s.localSettingsLastModified>s.localSettingsLastSaved&&s.saveLocalSettings(),vAPI.setTimeout(e,t)};return vAPI.setTimeout(e,t),function(){return this.localSettingsLastSaved=Date.now(),vAPI.storage.set(this.localSettings)}})(),µBlock.loadUserSettings=async function(){const t=this.userSettingsDefault,e=await Promise.all([vAPI.storage.get(Object.assign(t)),vAPI.adminStorage.get("userSettings")]),s=e[0]instanceof Object&&e[0]||Object.assign(t);if(Array.isArray(e[1])){const i=e[1];for(const e of i){if(e.length<1)continue;const i=e[0];if(!1===t.hasOwnProperty(i))continue;const n=e.length<2?t[i]:this.settingValueFromString(t,i,e[1]);void 0!==n&&(s[i]=t[i]=n)}}return s},µBlock.saveUserSettings=function(){const t=this.getModifiedSettings(this.userSettings,this.userSettingsDefault),e=[];for(const s in this.userSettings)!1!==this.userSettings.hasOwnProperty(s)&&!1!==t.hasOwnProperty(s)&&e.push(s);0!==e.length&&vAPI.storage.remove(e),vAPI.storage.set(t)},µBlock.loadHiddenSettings=async function(){const t=this.hiddenSettingsDefault,e=this.hiddenSettingsAdmin,s=this.hiddenSettings,i=await Promise.all([vAPI.adminStorage.get(["advancedSettings","disableDashboard","disabledPopupPanelParts"]),vAPI.storage.get("hiddenSettings")]);if(i[0]instanceof Object){const{advancedSettings:n,disableDashboard:r,disabledPopupPanelParts:o}=i[0];if(Array.isArray(n))for(const i of n){if(i.length<1)continue;const n=i[0];if(!1===t.hasOwnProperty(n))continue;const r=i.length<2?t[n]:this.hiddenSettingValueFromString(n,i[1]);void 0!==r&&(t[n]=e[n]=s[n]=r)}if(µBlock.noDashboard=!0===r,Array.isArray(o)){const i=new Map([["globalStats",2],["basicTools",4],["extraTools",8],["overviewPane",16]]);let n=t.popupPanelDisabledSections;for(const t of o){const e=i.get(t);void 0!==e&&(n|=e)}t.popupPanelDisabledSections=e.popupPanelDisabledSections=s.popupPanelDisabledSections=n}}const n=i[1]instanceof Object&&i[1].hiddenSettings||{};if(0!==Object.keys(e).length||0!==Object.keys(n).length){for(const s in t)!1!==t.hasOwnProperty(s)&&(e.hasOwnProperty(name)||typeof n[s]==typeof t[s]&&(this.hiddenSettings[s]=n[s]));"boolean"==typeof this.hiddenSettings.suspendTabsUntilReady&&(this.hiddenSettings.suspendTabsUntilReady=this.hiddenSettings.suspendTabsUntilReady?"yes":"unset"),this.fireDOMEvent("hiddenSettingsChanged")}},µBlock.saveHiddenSettings=function(){vAPI.storage.set({hiddenSettings:this.getModifiedSettings(this.hiddenSettings,this.hiddenSettingsDefault)})},self.addEventListener("hiddenSettingsChanged",(()=>{const t=µBlock.hiddenSettings;self.log.verbosity=t.consoleLogLevel,vAPI.net.setOptions({cnameIgnoreList:t.cnameIgnoreList,cnameIgnore1stParty:t.cnameIgnore1stParty,cnameIgnoreExceptions:t.cnameIgnoreExceptions,cnameIgnoreRootDocument:t.cnameIgnoreRootDocument,cnameMaxTTL:t.cnameMaxTTL,cnameReplayFullURL:t.cnameReplayFullURL,cnameUncloak:t.cnameUncloak,cnameUncloakProxied:t.cnameUncloakProxied})})),µBlock.hiddenSettingsFromString=function(t){const e=Object.assign({},this.hiddenSettingsDefault),s=new this.LineIterator(t);for(;!1===s.eot();){const t=s.next(),i=/^\s*(\S+)\s+(.+)$/.exec(t);if(null===i||3!==i.length)continue;const n=i[1];if(!1===e.hasOwnProperty(n))continue;if(this.hiddenSettingsAdmin.hasOwnProperty(n))continue;const r=this.hiddenSettingValueFromString(n,i[2]);void 0!==r&&(e[n]=r)}return e},µBlock.hiddenSettingValueFromString=function(t,e){if("string"!=typeof t||"string"!=typeof e)return;const s=this.hiddenSettingsDefault;if(!1===s.hasOwnProperty(t))return;let i;switch(typeof s[t]){case"boolean":"true"===e?i=!0:"false"===e&&(i=!1);break;case"string":i=e.trim();break;case"number":i=e.startsWith("0b")?parseInt(e.slice(2),2):e.startsWith("0x")?parseInt(e.slice(2),16):parseInt(e,10),isNaN(i)&&(i=void 0)}return i},µBlock.stringFromHiddenSettings=function(){const t=[];for(const e of Object.keys(this.hiddenSettings).sort())t.push(e+" "+this.hiddenSettings[e]);return t.join("\n")},µBlock.savePermanentFirewallRules=function(){vAPI.storage.set({dynamicFilteringString:this.permanentFirewall.toString()})},µBlock.savePermanentURLFilteringRules=function(){vAPI.storage.set({urlFilteringString:this.permanentURLFiltering.toString()})},µBlock.saveHostnameSwitches=function(){vAPI.storage.set({hostnameSwitchesString:this.permanentSwitches.toString()})},µBlock.saveWhitelist=function(){vAPI.storage.set({netWhitelist:this.arrayFromWhitelist(this.netWhitelist)}),this.netWhitelistModifyTime=Date.now()},µBlock.loadSelectedFilterLists=async function(){const t=await vAPI.storage.get("selectedFilterLists");if(t instanceof Object&&Array.isArray(t.selectedFilterLists))return void(this.selectedFilterLists=t.selectedFilterLists);const e=await this.assets.metadata();this.saveSelectedFilterLists(this.autoSelectRegionalFilterLists(e))},µBlock.saveSelectedFilterLists=function(t,e=!1){const s=this.selectedFilterLists.slice();e&&(t=t.concat(s));const i=new Set(t);for(const t of s)!1===i.has(t)&&this.removeFilterList(t);return t=Array.from(i),this.selectedFilterLists=t,vAPI.storage.set({selectedFilterLists:t})},µBlock.applyFilterListSelection=function(t){let e=new Set(this.selectedFilterLists),s=this.userSettings.externalLists.slice();if(Array.isArray(t.toSelect))if(t.merge)for(let s=0,i=t.toSelect.length;s<i;s++)e.add(t.toSelect[s]);else e=new Set(t.toSelect);if(Array.isArray(t.toRemove))for(let i=0,n=t.toRemove.length;i<n;i++){const n=t.toRemove[i];e.delete(n);const r=s.indexOf(n);-1!==r&&s.splice(r,1),this.removeFilterList(n)}if("string"==typeof t.toImport){const i=t=>{const e=t.replace(/^https?:/,""),s=this.availableFilterLists;for(const t in s){const i=s[t];if("filters"===i.content)if("string"!=typeof i.contentURL){if(!1!==Array.isArray(i.contentURL))for(let s=0,n=i.contentURL.length;s<n;s++)if(i.contentURL[s].endsWith(e))return t}else if(i.contentURL.endsWith(e))return t}return t},n=new Set(this.listKeysFromCustomFilterLists(s)),r=new Set(this.listKeysFromCustomFilterLists(t.toImport));for(const t of r){if(n.has(t)){e.add(t);continue}const s=i(t);s===t&&n.add(t),e.add(s)}s=Array.from(n).sort()}const i=Array.from(e);s.join()!==this.userSettings.externalLists.join()&&(this.userSettings.externalLists=s,this.saveUserSettings()),this.saveSelectedFilterLists(i)},µBlock.listKeysFromCustomFilterLists=function(t){const e="string"==typeof t?t.trim().split(/[\n\r]+/):t,s=new Set,i=/^[!#]/,n=/^[a-z-]+:\/\/\S+/;for(const t of e)!i.test(t)&&n.test(t)&&!0!==this.badLists.get(t)&&s.add(t);return Array.from(s)},µBlock.saveUserFilters=function(t){return""!==(t=t.trim())&&(t+="\n"),this.removeCompiledFilterList(this.userFiltersPath),this.assets.put(this.userFiltersPath,t)},µBlock.loadUserFilters=function(){return this.assets.get(this.userFiltersPath)},µBlock.appendUserFilters=async function(t,e){if(0===(t=t.trim()).length)return;let s="";if(e instanceof Object&&!0===e.autoComment&&-1!==this.hiddenSettings.autoCommentFilterTemplate.indexOf("{{")){const t=new Date,i=new Date(t.getTime()+6e4*t.getTimezoneOffset()).toISOString().split("T")[0],n=new URL(e.docURL);s="! "+this.hiddenSettings.autoCommentFilterTemplate.replace("{{date}}",i).replace("{{time}}",t.toLocaleTimeString()).replace("{{hostname}}",n.hostname).replace("{{origin}}",n.origin).replace("{{url}}",n.href)}const i=await this.loadUserFilters();if(i.error)return;if(""!==s){const e=i.content.lastIndexOf(s),n=-1===e?-1:e+s.length;(-1===n||!1===i.content.startsWith("\n",n)||i.content.includes("\n!",n))&&(t="\n"+s+"\n"+t)}await this.saveUserFilters(i.content.trim()+"\n"+t);const n=this.compileFilters(t,{assetKey:this.userFiltersPath}),r=this.staticNetFilteringEngine,o=this.cosmeticFilteringEngine,a=r.acceptedCount+o.acceptedCount,l=r.discardedCount+o.discardedCount;this.applyCompiledFilters(n,!0);const c=this.availableFilterLists[this.userFiltersPath],d=r.acceptedCount+o.acceptedCount-a,h=d-(r.discardedCount+o.discardedCount-l);c.entryCount+=d,c.entryUsedCount+=h,vAPI.storage.set({availableFilterLists:this.availableFilterLists}),this.staticNetFilteringEngine.freeze(),this.redirectEngine.freeze(),this.staticExtFilteringEngine.freeze(),this.selfieManager.destroy(),e.killCache&&browser.webRequest.handlerBehaviorChanged()},µBlock.createUserFilters=function(t){this.appendUserFilters(t.filters,t),void 0!==t.docURL&&this.cosmeticFilteringEngine.removeFromSelectorCache(vAPI.hostnameFromURI(t.docURL))},µBlock.autoSelectRegionalFilterLists=function(t){const e=[this.userFiltersPath];for(const s in t){if(!1===t.hasOwnProperty(s))continue;const i=t[s];!0===i.off?this.listMatchesEnvironment(i)&&(e.push(s),i.off=!1):e.push(s)}return e},µBlock.getAvailableLists=async function(){let t={},e={};e[this.userFiltersPath]={group:"user",title:vAPI.i18n("1pPageName")};const s=this.listKeysFromCustomFilterLists(this.userSettings.externalLists);for(const t of s){const s={content:"filters",contentURL:t,external:!0,group:"custom",submitter:"user",title:""};e[t]=s,this.assets.registerAssetSource(t,s)}const i=i=>{const n=t[i];if(void 0===n||!0===n.off)return;let r=n.contentURL;Array.isArray(r)&&(r=r[0]);const o={content:"filters",contentURL:r,external:!0,group:"custom",submitter:"user",title:n.title||""};e[r]=o,this.assets.registerAssetSource(r,o),s.push(r),this.userSettings.externalLists.push(r.trim()),this.saveUserSettings(),this.saveSelectedFilterLists([r],!0)},n=[vAPI.storage.get("availableFilterLists"),this.assets.metadata(),0===this.badLists.size&&this.assets.get("ublock-badlists")],[r,o,a]=await Promise.all(n);if(a instanceof Object)for(const t of a.content.split(/\s*[\n\r]+\s*/)){if(""===t||t.startsWith("#"))continue;const e=t.split(/\s+/),s=2===e.length;this.badLists.set(e[0],s)}t=r&&r.availableFilterLists||{};for(const t in o){if(!1===o.hasOwnProperty(t))continue;const s=o[t];"filters"===s.content&&(e[t]=Object.assign({},s))}const l=new Set(this.selectedFilterLists);for(const t in e)e.hasOwnProperty(t)&&(e[t].off=!l.has(t));for(const s in t){const n=t[s],r=e[s];void 0!==r?(void 0!==n.entryCount&&(r.entryCount=n.entryCount),void 0!==n.entryUsedCount&&(r.entryUsedCount=n.entryUsedCount),""===r.title&&"string"==typeof n.title&&""!==n.title&&(r.title=n.title)):(this.removeFilterList(s),-1===s.indexOf("://")&&i(s))}for(const t in e)"user"===e[t].submitter&&-1===s.indexOf(t)&&(delete e[t],this.assets.unregisterAssetSource(t),this.removeFilterList(t));return e},µBlock.loadFilterLists=(()=>{const t=[];let e,s=0;const i=function(){log.info(`loadFilterLists() took ${Date.now()-s} ms`),this.staticNetFilteringEngine.freeze(),this.staticExtFilteringEngine.freeze(),this.redirectEngine.freeze(),vAPI.net.unsuspend(),vAPI.storage.set({availableFilterLists:this.availableFilterLists}),vAPI.messaging.broadcast({what:"staticFilteringDataChanged",parseCosmeticFilters:this.userSettings.parseAllABPHideFilters,ignoreGenericCosmeticFilters:this.userSettings.ignoreGenericCosmeticFilters,listKeys:t}),this.selfieManager.destroy(),this.lz4Codec.relinquish(),this.compiledFormatChanged=!1,e=void 0},n=function(e,s){const i=this.staticNetFilteringEngine,n=this.staticExtFilteringEngine;let r=i.acceptedCount+n.acceptedCount,o=i.discardedCount+n.discardedCount;if(this.applyCompiledFilters(s,e===this.userFiltersPath),this.availableFilterLists.hasOwnProperty(e)){const t=this.availableFilterLists[e];t.entryCount=i.acceptedCount+n.acceptedCount-r,t.entryUsedCount=t.entryCount-(i.discardedCount+n.discardedCount-o)}t.push(e)},r=function(t){this.availableFilterLists=t,vAPI.net.suspend(),this.redirectEngine.reset(),this.staticExtFilteringEngine.reset(),this.staticNetFilteringEngine.reset(),this.selfieManager.destroy(),this.staticFilteringReverseLookup.resetLists();const e=[];for(const s in t)!1!==t.hasOwnProperty(s)&&(t[s].off||e.push(this.getCompiledFilterList(s).then((t=>{n.call(this,t.assetKey,t.content)}))));return Promise.all(e)};return function(){return e instanceof Promise==0&&(s=Date.now(),t.length=0,e=Promise.all([this.getAvailableLists().then((t=>r.call(this,t))),this.loadRedirectResources()]).then((()=>{i.call(this)}))),e}})(),µBlock.getCompiledFilterList=async function(t){const e="compiled/"+t;if(!1===this.compiledFormatChanged&&!1===this.badLists.has(t)){const s=await this.assets.get(e);if(parseInt(s.content,10)===this.systemSettings.compiledMagic)return s.assetKey=t,s}if(this.badLists.get(t))return{assetKey:t,content:""};const s=await this.assets.get(t,{silent:!0});if(""===s.content)return s.assetKey=t,s;if(this.extractFilterListMetadata(t,s.content),this.badLists.has(t))return{assetKey:t,content:""};const i=this.compileFilters(s.content,{assetKey:t});return this.assets.put(e,i),{assetKey:t,content:i}},µBlock.extractFilterListMetadata=function(t,e){const s=this.availableFilterLists[t];if(void 0===s)return;const i=e.slice(0,1024);if("custom"===s.group){let e=i.match(/(?:^|\n)(?:!|# )[\t ]*Title[\t ]*:([^\n]+)/i);const n=e&&e[1].trim()||"";""!==n&&n!==s.title&&(s.title=this.orphanizeString(n),this.assets.registerAssetSource(t,{title:n})),e=i.match(/(?:^|\n)(?:!|# )[\t ]*Homepage[\t ]*:[\t ]*(https?:\/\/\S+)\s/i);const r=e&&e[1]||"";""!==r&&r!==s.supportURL&&(s.supportURL=this.orphanizeString(r),this.assets.registerAssetSource(t,{supportURL:r}))}const n=i.match(/(?:^|\n)(?:!|# )[\t ]*Expires[\t ]*:[\t ]*(\d+)[\t ]*(h)?/i);if(null!==n){let e=parseInt(n[1],10);!1===isNaN(e)&&(void 0!==n[2]&&(e=Math.ceil(e/24)),e=Math.max(e,1),e!==s.updateAfter&&(s.updateAfter=e,this.assets.registerAssetSource(t,{updateAfter:e})))}},µBlock.removeCompiledFilterList=function(t){this.assets.remove("compiled/"+t)},µBlock.removeFilterList=function(t){this.removeCompiledFilterList(t),this.assets.remove(t)},µBlock.compileFilters=function(t,e={}){const s=new this.CompiledLineIO.Writer;e.assetKey&&s.properties.set("assetKey",e.assetKey);const i=e.assetKey!==this.userFiltersPath||!1!==this.hiddenSettings.filterAuthorMode,n=this.staticNetFilteringEngine,r=this.staticExtFilteringEngine,o=new this.LineIterator(this.preparseDirectives.prune(t)),a=new vAPI.StaticFilteringParser({expertMode:i});for(a.setMaxTokenLength(n.MAX_TOKEN_LENGTH);!1===o.eot();){let t=o.next();for(;t.endsWith(" \\")&&"    "===o.peek(4);)t=t.slice(0,-2).trim()+o.next().trim();a.analyze(t),a.shouldIgnore()||(a.category!==a.CATStaticExtFilter?a.category===a.CATStaticNetFilter&&(a.patternHasUnicode()&&!1===a.toASCII()||n.compile(a,s)):r.compile(a,s))}return`${this.systemSettings.compiledMagic}\n`+s.toString()},µBlock.applyCompiledFilters=function(t,e){if(""===t)return;const s=new this.CompiledLineIO.Reader(t);this.staticNetFilteringEngine.fromCompiledContent(s),this.staticExtFilteringEngine.fromCompiledContent(s,{skipGenericCosmetic:this.userSettings.ignoreGenericCosmeticFilters,skipCosmetic:!e&&!this.userSettings.parseAllABPHideFilters})},µBlock.preparseDirectives={split:function(t){const e=/^!#(if|endif)\b([^\n]*)(?:[\n\r]+|$)/gm,s=vAPI.webextFlavor.soup,i=[],n=[0];let r=!1;for(;;){const o=e.exec(t);if(null===o)break;switch(o[1]){case"if":let t=o[2].trim();const e=33===t.charCodeAt(0);e&&(t=t.slice(1));const a=this.tokens.get(t),l="false"===a&&!1===e||void 0!==a&&s.has(a)===e;!1===r&&l&&(n.push(o.index),r=!0),i.push(l);break;case"endif":i.pop();const c=!1===i.some((t=>t));r&&c&&(n.push(o.index+o[0].length),r=!1)}}return n.push(t.length),n},prune:function(t){const e=this.split(t),s=[];for(let i=0,n=e.length-1;i<n;i+=2){const n=e[i+0],r=e[i+1];s.push(t.slice(n,r))}return s.join("\n")},getHints:function(){const t=[],e=new Set;for(const[s,i]of this.tokens)e.has(i)||(e.add(i),t.push(s));return t},getTokens:function(){const t=new Map,e=vAPI.webextFlavor.soup;for(const[s,i]of this.tokens)t.set(s,"false"!==i&&e.has(i));return Array.from(t)},tokens:new Map([["ext_ublock","ublock"],["env_chromium","chromium"],["env_edge","edge"],["env_firefox","firefox"],["env_legacy","legacy"],["env_mobile","mobile"],["env_safari","safari"],["cap_html_filtering","html_filtering"],["cap_user_stylesheet","user_stylesheet"],["false","false"],["ext_abp","false"],["adguard","adguard"],["adguard_app_android","false"],["adguard_app_ios","false"],["adguard_app_mac","false"],["adguard_app_windows","false"],["adguard_ext_android_cb","false"],["adguard_ext_chromium","chromium"],["adguard_ext_edge","edge"],["adguard_ext_firefox","firefox"],["adguard_ext_opera","chromium"],["adguard_ext_safari","false"]])},µBlock.loadRedirectResources=async function(){try{if(!0===await this.redirectEngine.resourcesFromSelfie())return!0;const t=[this.redirectEngine.loadBuiltinResources()],e=this.hiddenSettings.userResourcesLocation;if("unset"!==e)for(const s of e.split(/\s+/))t.push(this.assets.fetchText(s));const s=await Promise.all(t);if(!1===Array.isArray(s))return s;let i="";for(let t=1;t<s.length;t++){const e=s[t];e instanceof Object!=0&&"string"==typeof e.content&&""!==e.content&&(i+="\n\n"+e.content)}this.redirectEngine.resourcesFromString(i),this.redirectEngine.selfieFromResources()}catch(t){return log.info(t),!1}return!0},µBlock.loadPublicSuffixList=async function(){!0!==this.hiddenSettings.disableWebAssembly&&publicSuffixList.enableWASM();try{const t=await this.assets.get(`compiled/${this.pslAssetKey}`);if(publicSuffixList.fromSelfie(t.content,this.base64))return}catch(t){log.info(t)}const t=await this.assets.get(this.pslAssetKey);""!==t.content&&this.compilePublicSuffixList(t.content)},µBlock.compilePublicSuffixList=function(t){publicSuffixList.parse(t,punycode.toASCII),this.assets.put("compiled/"+this.pslAssetKey,publicSuffixList.toSelfie(µBlock.base64))},µBlock.selfieManager=(()=>{const t=µBlock;let e,s;const i=async function(){const e=await t.assets.get("selfie/main");if(e instanceof Object==0||"string"!=typeof e.content||""===e.content)return!1;let s;try{s=JSON.parse(e.content)}catch(t){}return s instanceof Object!=0&&s.magic===t.systemSettings.selfieMagic&&(t.availableFilterLists=s.availableFilterLists,!0)},n=function(){t.cacheStorage.remove("selfie"),t.assets.remove(/^selfie\//),t.selfieIsInvalid=!0,e=vAPI.setTimeout((()=>{e=void 0,async function(){await Promise.all([t.assets.put("selfie/main",JSON.stringify({magic:t.systemSettings.selfieMagic,availableFilterLists:t.availableFilterLists})),t.redirectEngine.toSelfie("selfie/redirectEngine"),t.staticExtFilteringEngine.toSelfie("selfie/staticExtFilteringEngine"),t.staticNetFilteringEngine.toSelfie("selfie/staticNetFilteringEngine")]),t.lz4Codec.relinquish(),t.selfieIsInvalid=!1}()}),6e4*t.hiddenSettings.selfieAfter)};return{load:async function(){if(t.selfieIsInvalid)return!1;try{if((await Promise.all([i(),t.redirectEngine.fromSelfie("selfie/redirectEngine"),t.staticExtFilteringEngine.fromSelfie("selfie/staticExtFilteringEngine"),t.staticNetFilteringEngine.fromSelfie("selfie/staticNetFilteringEngine")])).every((t=>t)))return t.loadRedirectResources()}catch(t){log.info(t)}return n(),!1},destroy:function(){void 0===s&&(void 0!==e&&(clearTimeout(e),e=void 0),s=vAPI.setTimeout((()=>{s=void 0,n()}),1019),t.selfieIsInvalid=!0)}}})(),µBlock.restoreAdminSettings=async function(){let t,e={};try{const s=await vAPI.adminStorage.get(["adminSettings","toOverwrite"])||{};s.toOverwrite instanceof Object&&(e=s.toOverwrite);const i=s.adminSettings;"string"==typeof i&&""!==i?t=JSON.parse(i):i instanceof Object&&(t=i)}catch(t){console.error(t)}t instanceof Object==0&&(t={});const s={};let i=!1;if("string"==typeof t.assetsBootstrapLocation&&""!==t.assetsBootstrapLocation&&(µBlock.assetsBootstrapLocation=t.assetsBootstrapLocation),"object"==typeof t.userSettings){const e=this.userSettings,n=t.userSettings;"string"==typeof n.externalLists&&(n.externalLists=n.externalLists.trim().split(/[\n\r]+/));for(const t in e)!1!==e.hasOwnProperty(t)&&!1!==n.hasOwnProperty(t)&&(s[t]=n[t],i=!0)}if(Array.isArray(e.filterLists)&&0!==e.filterLists.length){const t=[];for(const s of e.filterLists)!1!==/^[a-z-]+:\/\//.test(s)&&t.push(s);0!==t.length&&(s.externalLists=t),s.selectedFilterLists=e.filterLists,i=!0}else Array.isArray(t.selectedFilterLists)&&(s.selectedFilterLists=t.selectedFilterLists,i=!0);Array.isArray(e.trustedSiteDirectives)&&0!==e.trustedSiteDirectives.length?(µBlock.netWhitelistDefault=e.trustedSiteDirectives.slice(),s.netWhitelist=e.trustedSiteDirectives.slice(),i=!0):Array.isArray(t.whitelist)?(s.netWhitelist=t.whitelist,i=!0):"string"==typeof t.netWhitelist&&(s.netWhitelist=t.netWhitelist.split("\n"),i=!0),"string"==typeof t.dynamicFilteringString&&(s.dynamicFilteringString=t.dynamicFilteringString,i=!0),"string"==typeof t.urlFilteringString&&(s.urlFilteringString=t.urlFilteringString,i=!0),"string"==typeof t.hostnameSwitchesString&&(s.hostnameSwitchesString=t.hostnameSwitchesString,i=!0),i&&vAPI.storage.set(s),Array.isArray(e.filters)&&0!==e.filters.length?this.saveUserFilters(e.filters.join("\n")):"string"==typeof t.userFilters&&this.saveUserFilters(t.userFilters)},µBlock.listMatchesEnvironment=function(t){if("string"==typeof t.lang){let e=this.listMatchesEnvironment.reLang;if(void 0===e){const t=/^[a-z]+/.exec(self.navigator.language);null!==t&&(e=new RegExp("\\b"+t[0]+"\\b"),this.listMatchesEnvironment.reLang=e)}if(void 0!==e&&e.test(t.lang))return!0}return!("string"!=typeof t.ua||!new RegExp("\\b"+this.escapeRegex(t.ua)+"\\b","i").test(self.navigator.userAgent))},µBlock.scheduleAssetUpdater=(()=>{let t,e=0;return function(s){if(t&&(clearTimeout(t),t=void 0),0===s)return void(e=0);const i=Date.now();0!==e&&(s=Math.min(s,Math.max(e-i,0))),e=i+s,t=vAPI.setTimeout((()=>{t=void 0,e=0,this.assets.updateStart({delay:1e3*this.hiddenSettings.autoUpdateAssetFetchPeriod||12e4,auto:!0})}),s)}})(),µBlock.assetObserver=function(t,e){if("before-asset-updated"===t){if("filters"===e.type&&(!1===this.availableFilterLists.hasOwnProperty(e.assetKey)||-1===this.selectedFilterLists.indexOf(e.assetKey)||this.badLists.get(e.assetKey)))return;return!0}if("after-asset-updated"===t){if(e.assetKey.startsWith("selfie/"))return;const t="string"==typeof e.content&&""!==e.content;return this.availableFilterLists.hasOwnProperty(e.assetKey)?t?-1!==this.selectedFilterLists.indexOf(e.assetKey)&&(this.extractFilterListMetadata(e.assetKey,e.content),!1===this.badLists.has(e.assetKey)&&this.assets.put("compiled/"+e.assetKey,this.compileFilters(e.content,{assetKey:e.assetKey}))):this.removeCompiledFilterList(e.assetKey):e.assetKey===this.pslAssetKey?t&&this.compilePublicSuffixList(e.content):"ublock-badlists"===e.assetKey&&(this.badLists=new Map),vAPI.messaging.broadcast({what:"assetUpdated",key:e.assetKey,cached:t}),void this.selfieManager.destroy()}if("asset-update-failed"!==t)return"after-assets-updated"===t?(0!==e.assetKeys.length&&(("unset"!==this.hiddenSettings.userResourcesLocation||vAPI.webextFlavor.soup.has("devbuild"))&&this.redirectEngine.invalidateResourcesSelfie(),this.loadFilterLists()),this.userSettings.autoUpdate?this.scheduleAssetUpdater(36e5*this.hiddenSettings.autoUpdatePeriod||252e5):this.scheduleAssetUpdater(0),void vAPI.messaging.broadcast({what:"assetsUpdated",assetKeys:e.assetKeys})):void("builtin-asset-source-added"!==t||"filters"===e.entry.content&&(!0!==e.entry.off||this.listMatchesEnvironment(e.entry))&&this.saveSelectedFilterLists([e.assetKey],!0));vAPI.messaging.broadcast({what:"assetUpdated",key:e.assetKey,failed:!0})};