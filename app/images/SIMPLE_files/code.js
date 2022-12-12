!function(e){"use strict";function t(e){return(e=e||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}var n,o,i,s,r,c;!function(e){e.PRODUCTION="production",e.DEVELOPMENT="development",e.TEST="test"}(n||(n={})),function(e){e.WIDGET="widget",e.MARKETPLACE="marketplace",e.FACEBOOK="facebook",e.INSTAGRAM="instagram"}(o||(o={})),function(e){e.DIALOG="dialog",e.INLINE="inline"}(i||(i={})),function(e){e.EN="en",e.PL="pl",e.ES="es",e.PT="pt",e.FR="fr",e.UK="uk"}(s||(s={})),function(e){e.EN="en",e.EN_GB="en-gb",e.ES="es-es",e.ES_OTHER="es",e.PL="pl",e.PT="pt",e.FR="fr",e.UK="uk"}(r||(r={})),function(e){e.AED="AED",e.AFN="AFN",e.ALL="ALL",e.AMD="AMD",e.ANG="ANG",e.AOA="AOA",e.ARS="ARS",e.AUD="AUD",e.AWG="AWG",e.AZN="AZN",e.BAM="BAM",e.BBD="BBD",e.BDT="BDT",e.BGN="BGN",e.BHD="BHD",e.BIF="BIF",e.BMD="BMD",e.BND="BND",e.BOB="BOB",e.BRL="BRL",e.BSD="BSD",e.BTN="BTN",e.BWP="BWP",e.BYR="BYR",e.BZD="BZD",e.CAD="CAD",e.CDF="CDF",e.CHF="CHF",e.CLP="CLP",e.CNY="CNY",e.COP="COP",e.CRC="CRC",e.CUC="CUC",e.CUP="CUP",e.CVE="CVE",e.CZK="CZK",e.DJF="DJF",e.DKK="DKK",e.DOP="DOP",e.DZD="DZD",e.EGP="EGP",e.ERN="ERN",e.ETB="ETB",e.EUR="EUR",e.FJD="FJD",e.FKP="FKP",e.GBP="GBP",e.GEL="GEL",e.GGP="GGP",e.GHS="GHS",e.GIP="GIP",e.GMD="GMD",e.GNF="GNF",e.GTQ="GTQ",e.GYD="GYD",e.HKD="HKD",e.HNL="HNL",e.HRK="HRK",e.HTG="HTG",e.HUF="HUF",e.IDR="IDR",e.ILS="ILS",e.IMP="IMP",e.INR="INR",e.IQD="IQD",e.IRR="IRR",e.ISK="ISK",e.JEP="JEP",e.JMD="JMD",e.JOD="JOD",e.JPY="JPY",e.KES="KES",e.KGS="KGS",e.KHR="KHR",e.KMF="KMF",e.KPW="KPW",e.KRW="KRW",e.KWD="KWD",e.KYD="KYD",e.KZT="KZT",e.LAK="LAK",e.LBP="LBP",e.LKR="LKR",e.LRD="LRD",e.LSL="LSL",e.LYD="LYD",e.MAD="MAD",e.MDL="MDL",e.MGA="MGA",e.MKD="MKD",e.MMK="MMK",e.MNT="MNT",e.MOP="MOP",e.MRO="MRO",e.MUR="MUR",e.MVR="MVR",e.MWK="MWK",e.MXN="MXN",e.MYR="MYR",e.MZN="MZN",e.NAD="NAD",e.NGN="NGN",e.NIO="NIO",e.NOK="NOK",e.NPR="NPR",e.NZD="NZD",e.OMR="OMR",e.PAB="PAB",e.PEN="PEN",e.PGK="PGK",e.PHP="PHP",e.PKR="PKR",e.PLN="PLN",e.PYG="PYG",e.QAR="QAR",e.RON="RON",e.RSD="RSD",e.RUB="RUB",e.RWF="RWF",e.SAR="SAR",e.SBD="SBD",e.SCR="SCR",e.SDG="SDG",e.SEK="SEK",e.SGD="SGD",e.SHP="SHP",e.SLL="SLL",e.SOS="SOS",e.SPL="SPL",e.SRD="SRD",e.STD="STD",e.SVC="SVC",e.SYP="SYP",e.SZL="SZL",e.THB="THB",e.TJS="TJS",e.TMT="TMT",e.TND="TND",e.TOP="TOP",e.TRY="TRY",e.TTD="TTD",e.TVD="TVD",e.TWD="TWD",e.TZS="TZS",e.UAH="UAH",e.UGX="UGX",e.USD="USD",e.UYU="UYU",e.UZS="UZS",e.VEF="VEF",e.VND="VND",e.VUV="VUV",e.WST="WST",e.XAF="XAF",e.XCD="XCD",e.XDR="XDR",e.XOF="XOF",e.XPF="XPF",e.YER="YER",e.ZAR="ZAR",e.ZMW="ZMW",e.ZWD="ZWD"}(c||(c={}));function d(e){const n=e||{};n.src+=(n.src.indexOf("?")>-1?"&":"?")+"uniqueId="+n.uniqueId;const i=n.container||document.body;let s;return{create:function(){if(s)return;s=n.uniqueId||t("iframe-xxxx"),i.insertAdjacentHTML("beforeend",`\n        <iframe \n            id="${s}"\n            width="${n.width||770}" \n            height="${n.height||660}"\n            src="${n.src}"\n            style="border: 0"\n        ></iframe>\n    `),window.addEventListener("message",c,!0),document.addEventListener("scroll",r(s),!0),r(s)()},element:function(){return i.querySelector("iframe")}};function r(e){return function(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout((()=>{e.apply(o,i)}),t)}}((function(){const t=function(e){if("development"===process.env.NODE_ENV)switch(window.location.origin){case process.env.VUE_APP_NGINX_WIDGET_URL:return process.env.VUE_APP_NGINX_MARKETPLACE_URL;case process.env.VUE_APP_WIDGET_LOCAL:return process.env.VUE_APP_MARKETPLACE_LOCAL}return e?.store.options.realm===o.MARKETPLACE?e.store.state.config?.marketplace_url??"*":"*"}(),n=document.getElementById(e)?.contentWindow;n&&n.postMessage({uniqueId:e,name:"scroll",data:{container:i?.getBoundingClientRect(),window:{width:window.innerWidth,height:window.innerHeight}}},t)}),100)}function c(e){const t=e.data;if(t.uniqueId!==n.uniqueId||!t.events)return;const o=["resize","close","goToUrl","sendPost","ready"];for(let e=o.length-1;e>-1;e--){const i=o[e];if(t.events[i]){const e=n["on"+i.charAt(0).toUpperCase()+i.substr(1)];if("function"!=typeof e)continue;try{e(t.events[i])}catch(e){}}}}}function u(e,n,o){const i=d({uniqueId:t("xxxxxxxxxx"),src:n,container:e,onResize:e=>{window.setTimeout((function(){const t=i.element();t&&(t.style.height=e.height+"px")}),50)},onClose:()=>{e.remove(),o&&o.remove()},onGoToUrl:e=>{window.location.replace(e.url)},onSendPost:e=>{!function(e,t,n=!1){const o=document.createElement("form");o.setAttribute("action",e),o.setAttribute("method","post"),n&&o.setAttribute("target","_blank");for(const[e,n]of Object.entries(t)){const t=document.createElement("input");t.setAttribute("id",e),t.setAttribute("name",e),t.setAttribute("type","text"),t.setAttribute("value",n),o.appendChild(t)}document.getElementsByTagName("body")[0].appendChild(o),o.submit()}(e.action,e.data)},onReady:()=>{const e=i.element();e&&e.removeAttribute("scrolling")}});return i.create()}function a(e){const t=document.createElement("div");t.setAttribute("class","booksy-widget-overlay"),document.body.appendChild(t);const n=document.createElement("div");var o;n.setAttribute("class","booksy-widget-dialog"),document.body.appendChild(n),u(n,e,t),(o=n)&&window.scroll(0,o.getBoundingClientRect().top)}function l(e){throw new Error(`[Booksy][widget][error] ${e}`)}const D=()=>{const e=function(e){Object.assign(window,{booksy:window.booksy||{}});const t=document.querySelectorAll("script");for(let n=0;n<t.length;n++)if(t[n].src.match(e)){const e=t[n];if(!window.booksy.codejs)return window.booksy.codejs=[e.src],e;if(-1===window.booksy.codejs.indexOf(e.src))return window.booksy.codejs.push(e.src),e}}(/code.js/);if(!e)return void l("cannot locate current script");const t=function(e=""){const t={baseUrl:e.replace(/\/code\.js.*/,"/").replace(/https:\/\/w\.booksy.(com|net)\/.._..\//,"https://booksy.com/").replace(/https:\/\/widget-..\.booksy.(com|net)\/.._..\//,"https://booksy.com/").replace(/https:\/\/booksy.net\//,"https://booksy.com/"),businessId:"",appointmentUid:"",country:"",id:"",iframeSrc:"",lang:"",mode:"",theme:""},n=(e||"").split("?")[1];if((n?n.split("&").map((e=>e.split("="))):[]).forEach((([e,n])=>{t[e]=n})),!t.lang){const n=e.match(/https?:\/\/[^/]*\/([a-z][a-z])[_-]([a-zA-Z][a-zA-Z])\/widget/);n&&(t.lang=n[1],t.country=n[2])}return t}(e.src);var n;if((n=t).mode||(n.mode="dialog"),n.theme||(n.theme="default"),n.iframeSrc=`${n.baseUrl}index.html?id=${n.id}&businessId=${n.businessId}&appointmentUid=${n.appointmentUid}&lang=${n.lang}&country=${n.country}&mode=${n.mode}&theme=${n.theme}`,!t.country||!t.lang)return void l(`incomplete configuration: ${JSON.stringify(t)}`);const o=function(e,t){const n="booksy-widget-container",o=[n,n+"-"+t.mode,n+"-"+t.theme,n+"-"+t.lang].join(" "),i=document.createElement("div");return i.setAttribute("class",o),e&&e.parentNode&&e.parentNode.insertBefore(i,e),i}(e,t);var i;if(window.booksy.widgetCss||(window.booksy.widgetCss=(i=t.baseUrl,document.head.insertAdjacentHTML("beforeend",`\n<link rel="stylesheet" type="text/css" href="${i}widget.css">`),!0)),"dialog"===t.mode){const e=function(e){const t=document.createElement("div");return t.setAttribute("class","booksy-widget-button"),e.appendChild(t),t}(o);return function(e,t){const n=document.createElement("a"),{id:o,lang:i,country:s,businessId:r}=t,c=o.split(",")[0]||o||r.split(",")[0]||r,d=t.baseUrl.match(/https?:\/\/[^/]+/);let u=d?d[0]:t.baseUrl;u.match(/\/$/)||(u+="/"),n.setAttribute("class","booksy-business-link"),n.setAttribute("href",`${u}${i}-${s}/dl/show-business/${c}`),n.setAttribute("target","_blank"),e.appendChild(n)}(o,t),void e.addEventListener("click",(()=>{a(t.iframeSrc||"")}))}"inline"!==t.mode?l(`unexpected widget mode ${t.mode}`):u(o,t.iframeSrc)};D(),e.main=D,Object.defineProperty(e,"__esModule",{value:!0})}({});
