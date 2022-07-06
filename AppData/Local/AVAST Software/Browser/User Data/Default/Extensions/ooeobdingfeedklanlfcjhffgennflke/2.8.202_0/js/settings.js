"use strict";(()=>{const t=function(){const t=this.files[0];if(void 0===t||""===t.name)return;if(0!==t.type.indexOf("text"))return;const e=t.name,a=new FileReader;a.onload=function(){let t;try{if(t=JSON.parse(this.result),"object"!=typeof t)throw"Invalid";if("object"!=typeof t.userSettings)throw"Invalid";if(!1===Array.isArray(t.whitelist)&&"string"!=typeof t.netWhitelist)throw"Invalid";if("object"!=typeof t.filterLists&&!1===Array.isArray(t.selectedFilterLists))throw"Invalid"}catch(e){t=void 0}if(void 0===t)return void window.alert(vAPI.i18n("aboutRestoreDataError"));const a=new Date(t.timeStamp),n=vAPI.i18n("aboutRestoreDataConfirm").replace("{{time}}",a.toLocaleString());!0===window.confirm(n)&&vAPI.messaging.send("dashboard",{what:"restoreUserData",userData:t,file:e})},a.readAsText(t)},e=function(){const t=document.getElementById("restoreFilePicker");t.value="",t.click()},a=function(t){let e,a;"number"==typeof t.storageUsed?(e=t.storageUsed,e<1e3?a="genericBytes":e<1e6?(e/=1e3,a="KB"):e<1e9?(e/=1e6,a="MB"):(e/=1e9,a="GB")):(e="?",a=""),uDom.nodeFromId("storageUsed").textContent=vAPI.i18n("storageUsed").replace("{{value}}",e.toLocaleString(void 0,{maximumSignificantDigits:3})).replace("{{unit}}",a&&vAPI.i18n(a)||"");const n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"};if(""!==(t.lastBackupFile||"")){const e=new Date(t.lastBackupTime),a=vAPI.i18n("settingsLastBackupPrompt"),i=uDom.nodeFromId("settingsLastBackupPrompt");i.textContent=a+" "+e.toLocaleString("fullwide",n),i.style.display=""}if(""!==(t.lastRestoreFile||"")){const e=new Date(t.lastRestoreTime),a=vAPI.i18n("settingsLastRestorePrompt"),i=uDom.nodeFromId("settingsLastRestorePrompt");i.textContent=a+" "+e.toLocaleString("fullwide",n),i.style.display=""}!1===t.cloudStorageSupported&&uDom('[data-setting-name="cloudStorageEnabled"]').attr("disabled",""),!1===t.privacySettingsSupported&&(uDom('[data-setting-name="prefetchingDisabled"]').attr("disabled",""),uDom('[data-setting-name="hyperlinkAuditingDisabled"]').attr("disabled",""),uDom('[data-setting-name="webrtcIPAddressHidden"]').attr("disabled",""))},n=function(){const t=vAPI.i18n("aboutResetDataConfirm");!0===window.confirm(t)&&vAPI.messaging.send("dashboard",{what:"resetUserData"})},i=function(){document.body.classList.toggle("advancedUser",!0===uDom.nodeFromSelector('[data-setting-name="advancedUserEnabled"]').checked)},o=function(t,e){vAPI.messaging.send("dashboard",{what:"userSettings",name:t,value:e})},s=function(t){const e=t.target,a=this.getAttribute("data-setting-name");let n=e.value;"largeMediaSize"===a&&(n=Math.min(Math.max(Math.floor(parseInt(n,10)||0),0),1e6)),n!==e.value&&(e.value=n),o(a,n)},r=function(t){t.target.focus(),t.preventDefault()};vAPI.messaging.send("dashboard",{what:"userSettings"}).then((d=>{var c;c=d,uDom('[data-setting-type="bool"]').forEach((function(t){t.prop("checked",!0===c[t.attr("data-setting-name")]).on("change",(function(){o(this.getAttribute("data-setting-name"),this.checked),i()}))})),uDom('[data-i18n="settingsNoLargeMediaPrompt"] > input[type="number"]').attr("data-setting-name","largeMediaSize").attr("data-setting-type","input"),uDom('[data-setting-type="input"]').forEach((function(t){t.val(c[t.attr("data-setting-name")]).on("change",s).on("click",r)})),uDom("#export").on("click",(()=>{!async function(){const t=await vAPI.messaging.send("dashboard",{what:"backupUserData"});t instanceof Object!=0&&t.userData instanceof Object!=0&&(vAPI.download({url:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(t.userData,null,"  ")),filename:t.localData.lastBackupFile}),a(t.localData))}()})),uDom("#import").on("click",e),uDom("#reset").on("click",n),uDom("#restoreFilePicker").on("change",t),i()})),vAPI.messaging.send("dashboard",{what:"getLocalData"}).then((t=>{a(t)})),document.querySelector('[data-i18n-title="settingsAdvancedUserSettings"]').addEventListener("click",self.uBlockDashboard.openOrSelectPage)})();