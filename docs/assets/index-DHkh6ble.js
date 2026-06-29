(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cg={exports:{}},Vc={},Rg={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Jy=Symbol.for("react.portal"),Qy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),e_=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),i_=Symbol.for("react.forward_ref"),r_=Symbol.for("react.suspense"),s_=Symbol.for("react.memo"),o_=Symbol.for("react.lazy"),Zp=Symbol.iterator;function a_(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Dg={};function To(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Pg}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=To.prototype;function Sf(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Pg}var Mf=Sf.prototype=new Ng;Mf.constructor=Sf;Lg(Mf,To.prototype);Mf.isPureReactComponent=!0;var Jp=Array.isArray,Ig=Object.prototype.hasOwnProperty,wf={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ig.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:wf.current}}function l_(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function c_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qp=/\/+/g;function pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c_(""+t.key):e.toString(36)}function Gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case Jy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pu(o,0):i,Jp(r)?(n="",t!=null&&(n=t.replace(Qp,"$&/")+"/"),Gl(r,e,n,"",function(c){return c})):r!=null&&(Ef(r)&&(r=l_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pu(s,a);o+=Gl(s,e,n,l,r)}else if(l=a_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pu(s,a++),o+=Gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function u_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},Wl={transition:null},d_={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:wf};function zg(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=To;ot.Fragment=Qy;ot.Profiler=e_;ot.PureComponent=Sf;ot.StrictMode=$y;ot.Suspense=r_;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_;ot.act=zg;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ig.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:n_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t_,_context:t},t.Consumer=t};ot.createElement=Og;ot.createFactory=function(t){var e=Og.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:i_,render:t}};ot.isValidElement=Ef;ot.lazy=function(t){return{$$typeof:o_,_payload:{_status:-1,_result:t},_init:u_}};ot.memo=function(t,e){return{$$typeof:s_,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ot.unstable_act=zg;ot.useCallback=function(t,e){return Sn.current.useCallback(t,e)};ot.useContext=function(t){return Sn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Sn.current.useEffect(t,e)};ot.useId=function(){return Sn.current.useId()};ot.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Sn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};ot.useRef=function(t){return Sn.current.useRef(t)};ot.useState=function(t){return Sn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Sn.current.useTransition()};ot.version="18.3.1";Rg.exports=ot;var Xe=Rg.exports;const h_=Zy(Xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=Xe,p_=Symbol.for("react.element"),m_=Symbol.for("react.fragment"),g_=Object.prototype.hasOwnProperty,v_=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x_={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)g_.call(e,i)&&!x_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:p_,type:t,key:s,ref:o,props:r,_owner:v_.current}}Vc.Fragment=m_;Vc.jsx=Fg;Vc.jsxs=Fg;Cg.exports=Vc;var v=Cg.exports,Rd={},kg={exports:{}},Yn={},Bg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Z){var $=I.length;I.push(Z);e:for(;0<$;){var te=$-1>>>1,_e=I[te];if(0<r(_e,Z))I[te]=Z,I[$]=_e,$=te;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Z=I[0],$=I.pop();if($!==Z){I[0]=$;e:for(var te=0,_e=I.length,Re=_e>>>1;te<Re;){var j=2*(te+1)-1,Q=I[j],ae=j+1,de=I[ae];if(0>r(Q,$))ae<_e&&0>r(de,Q)?(I[te]=de,I[ae]=$,te=ae):(I[te]=Q,I[j]=$,te=j);else if(ae<_e&&0>r(de,$))I[te]=de,I[ae]=$,te=ae;else break e}}return Z}function r(I,Z){var $=I.sortIndex-Z.sortIndex;return $!==0?$:I.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,y=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=I)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(I){if(M=!1,x(I),!y)if(n(l)!==null)y=!0,k(P);else{var Z=n(c);Z!==null&&ne(S,Z.startTime-I)}}function P(I,Z){y=!1,M&&(M=!1,f(b),b=-1),p=!0;var $=h;try{for(x(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||I&&!w());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var _e=te(d.expirationTime<=Z);Z=t.unstable_now(),typeof _e=="function"?d.callback=_e:d===n(l)&&i(l),x(Z)}else i(l);d=n(l)}if(d!==null)var Re=!0;else{var j=n(c);j!==null&&ne(S,j.startTime-Z),Re=!1}return Re}finally{d=null,h=$,p=!1}}var A=!1,E=null,b=-1,G=5,_=-1;function w(){return!(t.unstable_now()-_<G)}function C(){if(E!==null){var I=t.unstable_now();_=I;var Z=!0;try{Z=E(!0,I)}finally{Z?O():(A=!1,E=null)}}else A=!1}var O;if(typeof g=="function")O=function(){g(C)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,V=U.port2;U.port1.onmessage=C,O=function(){V.postMessage(null)}}else O=function(){m(C,0)};function k(I){E=I,A||(A=!0,O())}function ne(I,Z){b=m(function(){I(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,k(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var Z=3;break;default:Z=h}var $=h;h=Z;try{return I()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=h;h=I;try{return Z()}finally{h=$}},t.unstable_scheduleCallback=function(I,Z,$){var te=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?te+$:te):$=te,I){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=$+_e,I={id:u++,callback:Z,priorityLevel:I,startTime:$,expirationTime:_e,sortIndex:-1},$>te?(I.sortIndex=$,e(c,I),n(l)===null&&I===n(c)&&(M?(f(b),b=-1):M=!0,ne(S,$-te))):(I.sortIndex=_e,e(l,I),y||p||(y=!0,k(P))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var Z=h;return function(){var $=h;h=Z;try{return I.apply(this,arguments)}finally{h=$}}}})(Hg);Bg.exports=Hg;var y_=Bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=Xe,Xn=y_;function Ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,ma={};function ms(t,e){po(t,e),po(t+"Capture",e)}function po(t,e){for(ma[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=Object.prototype.hasOwnProperty,S_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},em={};function M_(t){return Pd.call(em,t)?!0:Pd.call($p,t)?!1:S_.test(t)?em[t]=!0:($p[t]=!0,!1)}function w_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E_(t,e,n,i){if(e===null||typeof e>"u"||w_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,Af);an[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,Af);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,Af);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E_(e,n,r,i)&&(n=null),i||r===null?M_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),Dd=Symbol.for("react.suspense"),Nd=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),jg=Symbol.for("react.offscreen"),tm=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,mu;function Zo(t){if(mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||""}return`
`+mu+t}var gu=!1;function vu(t,e){if(!t||gu)return"";gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function T_(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=vu(t.type,!1),t;case 11:return t=vu(t.type.render,!1),t;case 1:return t=vu(t.type,!0),t;default:return""}}function Id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Bs:return"Portal";case Ld:return"Profiler";case Cf:return"StrictMode";case Dd:return"Suspense";case Nd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wg:return(t.displayName||"Context")+".Consumer";case Gg:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:Id(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return Id(t(e))}catch{}}return null}function A_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Id(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=b_(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ud(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qg(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function Od(t,e){qg(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&zd(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zd(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ce(92));if(Jo(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Kg(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C_=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){C_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function $g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var R_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bd(t,e){if(e){if(R_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ce(62))}}function Hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gd=null,io=null,ro=null;function om(t){if(t=Ha(t)){if(typeof Gd!="function")throw Error(Ce(280));var e=t.stateNode;e&&(e=Yc(e),Gd(t.stateNode,t.type,e))}}function ev(t){io?ro?ro.push(t):ro=[t]:io=t}function tv(){if(io){var t=io,e=ro;if(ro=io=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function nv(t,e){return t(e)}function iv(){}var xu=!1;function rv(t,e,n){if(xu)return t(e,n);xu=!0;try{return nv(t,e,n)}finally{xu=!1,(io!==null||ro!==null)&&(iv(),tv())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=Yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ce(231,e,typeof n));return n}var Wd=!1;if(Qi)try{var No={};Object.defineProperty(No,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Wd=!1}function P_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ia=!1,hc=null,fc=!1,jd=null,L_={onError:function(t){ia=!0,hc=t}};function D_(t,e,n,i,r,s,o,a,l){ia=!1,hc=null,P_.apply(L_,arguments)}function N_(t,e,n,i,r,s,o,a,l){if(D_.apply(this,arguments),ia){if(ia){var c=hc;ia=!1,hc=null}else throw Error(Ce(198));fc||(fc=!0,jd=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(gs(t)!==t)throw Error(Ce(188))}function I_(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(Ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return am(r),t;if(s===i)return am(r),e;s=s.sibling}throw Error(Ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ce(189))}}if(n.alternate!==i)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?t:e}function ov(t){return t=I_(t),t!==null?av(t):null}function av(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=av(t);if(e!==null)return e;t=t.sibling}return null}var lv=Xn.unstable_scheduleCallback,lm=Xn.unstable_cancelCallback,U_=Xn.unstable_shouldYield,O_=Xn.unstable_requestPaint,Ut=Xn.unstable_now,z_=Xn.unstable_getCurrentPriorityLevel,Df=Xn.unstable_ImmediatePriority,cv=Xn.unstable_UserBlockingPriority,pc=Xn.unstable_NormalPriority,F_=Xn.unstable_LowPriority,uv=Xn.unstable_IdlePriority,Gc=null,Pi=null;function k_(t){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(Gc,t,void 0,(t.current.flags&128)===128)}catch{}}var yi=Math.clz32?Math.clz32:V_,B_=Math.log,H_=Math.LN2;function V_(t){return t>>>=0,t===0?32:31-(B_(t)/H_|0)|0}var Ja=64,Qa=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qo(a):(s&=o,s!==0&&(i=Qo(s)))}else o=n&~r,o!==0?i=Qo(o):s!==0&&(i=Qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-yi(e),r=1<<n,i|=t[n],e&=~r;return i}function G_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=G_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yi(e),t[e]=n}function j_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fv,If,pv,mv,gv,Yd=!1,$a=[],Tr=null,Ar=null,br=null,xa=new Map,ya=new Map,vr=[],X_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&If(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Y_(t,e,n,i,r){switch(e){case"focusin":return Tr=Io(Tr,t,e,n,i,r),!0;case"dragenter":return Ar=Io(Ar,t,e,n,i,r),!0;case"mouseover":return br=Io(br,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,Io(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Io(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function vv(t){var e=$r(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,gv(t.priority,function(){pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vd=i,n.target.dispatchEvent(i),Vd=null}else return e=Ha(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function um(t,e,n){jl(t)&&n.delete(e)}function q_(){Yd=!1,Tr!==null&&jl(Tr)&&(Tr=null),Ar!==null&&jl(Ar)&&(Ar=null),br!==null&&jl(br)&&(br=null),xa.forEach(um),ya.forEach(um)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Yd||(Yd=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,q_)))}function _a(t){function e(r){return Uo(r,t)}if(0<$a.length){Uo($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Tr!==null&&Uo(Tr,t),Ar!==null&&Uo(Ar,t),br!==null&&Uo(br,t),xa.forEach(e),ya.forEach(e),n=0;n<vr.length;n++)i=vr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&vr.shift()}var so=nr.ReactCurrentBatchConfig,gc=!0;function K_(t,e,n,i){var r=mt,s=so.transition;so.transition=null;try{mt=1,Uf(t,e,n,i)}finally{mt=r,so.transition=s}}function Z_(t,e,n,i){var r=mt,s=so.transition;so.transition=null;try{mt=4,Uf(t,e,n,i)}finally{mt=r,so.transition=s}}function Uf(t,e,n,i){if(gc){var r=qd(t,e,n,i);if(r===null)Ru(t,e,i,vc,n),cm(t,i);else if(Y_(r,t,e,n,i))i.stopPropagation();else if(cm(t,i),e&4&&-1<X_.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&fv(s),s=qd(t,e,n,i),s===null&&Ru(t,e,i,vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ru(t,e,i,null,n)}}var vc=null;function qd(t,e,n,i){if(vc=null,t=Lf(i),t=$r(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case Df:return 1;case cv:return 4;case pc:case F_:return 16;case uv:return 536870912;default:return 16}default:return 16}}var Mr=null,Of=null,Xl=null;function yv(){if(Xl)return Xl;var t,e=Of,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xl=r.slice(t,1<i?1-i:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function dm(){return!1}function qn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:dm,this.isPropagationStopped=dm,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=qn(Ao),Ba=Rt({},Ao,{view:0,detail:0}),J_=qn(Ba),_u,Su,Oo,Wc=Rt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(_u=t.screenX-Oo.screenX,Su=t.screenY-Oo.screenY):Su=_u=0,Oo=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),hm=qn(Wc),Q_=Rt({},Wc,{dataTransfer:0}),$_=qn(Q_),e1=Rt({},Ba,{relatedTarget:0}),Mu=qn(e1),t1=Rt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=qn(t1),i1=Rt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=qn(i1),s1=Rt({},Ao,{data:0}),fm=qn(s1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l1[t])?!!e[t]:!1}function Ff(){return c1}var u1=Rt({},Ba,{key:function(t){if(t.key){var e=o1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d1=qn(u1),h1=Rt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=qn(h1),f1=Rt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),p1=qn(f1),m1=Rt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=qn(m1),v1=Rt({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x1=qn(v1),y1=[9,13,27,32],kf=Qi&&"CompositionEvent"in window,ra=null;Qi&&"documentMode"in document&&(ra=document.documentMode);var _1=Qi&&"TextEvent"in window&&!ra,_v=Qi&&(!kf||ra&&8<ra&&11>=ra),mm=" ",gm=!1;function Sv(t,e){switch(t){case"keyup":return y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function S1(t,e){switch(t){case"compositionend":return Mv(e);case"keypress":return e.which!==32?null:(gm=!0,mm);case"textInput":return t=e.data,t===mm&&gm?null:t;default:return null}}function M1(t,e){if(Vs)return t==="compositionend"||!kf&&Sv(t,e)?(t=yv(),Xl=Of=Mr=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function wv(t,e,n,i){ev(i),e=xc(e,"onChange"),0<e.length&&(n=new zf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,Sa=null;function E1(t){Iv(t,0)}function jc(t){var e=js(t);if(Yg(e))return t}function T1(t,e){if(t==="change")return e}var Ev=!1;if(Qi){var wu;if(Qi){var Eu="oninput"in document;if(!Eu){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Eu=typeof xm.oninput=="function"}wu=Eu}else wu=!1;Ev=wu&&(!document.documentMode||9<document.documentMode)}function ym(){sa&&(sa.detachEvent("onpropertychange",Tv),Sa=sa=null)}function Tv(t){if(t.propertyName==="value"&&jc(Sa)){var e=[];wv(e,Sa,t,Lf(t)),rv(E1,e)}}function A1(t,e,n){t==="focusin"?(ym(),sa=e,Sa=n,sa.attachEvent("onpropertychange",Tv)):t==="focusout"&&ym()}function b1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Sa)}function C1(t,e){if(t==="click")return jc(e)}function R1(t,e){if(t==="input"||t==="change")return jc(e)}function P1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Si=typeof Object.is=="function"?Object.is:P1;function Ma(t,e){if(Si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pd.call(e,r)||!Si(t[r],e[r]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=_m(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function Av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bv(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function L1(t){var e=bv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Av(n.ownerDocument.documentElement,n)){if(i!==null&&Bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sm(n,s);var o=Sm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D1=Qi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Kd=null,oa=null,Zd=!1;function Mm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zd||Gs==null||Gs!==dc(i)||(i=Gs,"selectionStart"in i&&Bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oa&&Ma(oa,i)||(oa=i,i=xc(Kd,"onSelect"),0<i.length&&(e=new zf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gs)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Tu={},Cv={};Qi&&(Cv=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Xc(t){if(Tu[t])return Tu[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cv)return Tu[t]=e[n];return t}var Rv=Xc("animationend"),Pv=Xc("animationiteration"),Lv=Xc("animationstart"),Dv=Xc("transitionend"),Nv=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Nv.set(t,e),ms(e,[t])}for(var Au=0;Au<wm.length;Au++){var bu=wm[Au],N1=bu.toLowerCase(),I1=bu[0].toUpperCase()+bu.slice(1);zr(N1,"on"+I1)}zr(Rv,"onAnimationEnd");zr(Pv,"onAnimationIteration");zr(Lv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Dv,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Em(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,c),s=l}}}if(fc)throw t=jd,fc=!1,jd=null,t}function Mt(t,e){var n=e[th];n===void 0&&(n=e[th]=new Set);var i=t+"__bubble";n.has(i)||(Uv(e,t,2,!1),n.add(i))}function Cu(t,e,n){var i=0;e&&(i|=4),Uv(n,t,i,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[nl]){t[nl]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(U1.has(n)||Cu(n,!1,t),Cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Cu("selectionchange",!1,e))}}function Uv(t,e,n,i){switch(xv(e)){case 1:var r=K_;break;case 4:r=Z_;break;default:r=Uf}n=r.bind(null,e,n,t),r=void 0,!Wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}rv(function(){var c=s,u=Lf(n),d=[];e:{var h=Nv.get(t);if(h!==void 0){var p=zf,y=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":p=d1;break;case"focusin":y="focus",p=Mu;break;case"focusout":y="blur",p=Mu;break;case"beforeblur":case"afterblur":p=Mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=p1;break;case Rv:case Pv:case Lv:p=n1;break;case Dv:p=g1;break;case"scroll":p=J_;break;case"wheel":p=x1;break;case"copy":case"cut":case"paste":p=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pm}var M=(e&4)!==0,m=!M&&t==="scroll",f=M?h!==null?h+"Capture":null:h;M=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=va(g,f),S!=null&&M.push(Ea(g,S,x)))),m)break;g=g.return}0<M.length&&(h=new p(h,y,null,n,u),d.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Vd&&(y=n.relatedTarget||n.fromElement)&&($r(y)||y[$i]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?$r(y):null,y!==null&&(m=gs(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(M=hm,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=pm,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:js(p),x=y==null?h:js(y),h=new M(S,g+"leave",p,n,u),h.target=m,h.relatedTarget=x,S=null,$r(u)===c&&(M=new M(f,g+"enter",y,n,u),M.target=x,M.relatedTarget=m,S=M),m=S,p&&y)t:{for(M=p,f=y,g=0,x=M;x;x=Ss(x))g++;for(x=0,S=f;S;S=Ss(S))x++;for(;0<g-x;)M=Ss(M),g--;for(;0<x-g;)f=Ss(f),x--;for(;g--;){if(M===f||f!==null&&M===f.alternate)break t;M=Ss(M),f=Ss(f)}M=null}else M=null;p!==null&&Tm(d,h,p,M,!1),y!==null&&m!==null&&Tm(d,m,y,M,!0)}}e:{if(h=c?js(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=T1;else if(vm(h))if(Ev)P=R1;else{P=b1;var A=A1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=C1);if(P&&(P=P(t,c))){wv(d,P,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&zd(h,"number",h.value)}switch(A=c?js(c):window,t){case"focusin":(vm(A)||A.contentEditable==="true")&&(Gs=A,Kd=c,oa=null);break;case"focusout":oa=Kd=Gs=null;break;case"mousedown":Zd=!0;break;case"contextmenu":case"mouseup":case"dragend":Zd=!1,Mm(d,n,u);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Mm(d,n,u)}var E;if(kf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vs?Sv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(_v&&n.locale!=="ko"&&(Vs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Vs&&(E=yv()):(Mr=u,Of="value"in Mr?Mr.value:Mr.textContent,Vs=!0)),A=xc(c,b),0<A.length&&(b=new fm(b,t,null,n,u),d.push({event:b,listeners:A}),E?b.data=E:(E=Mv(n),E!==null&&(b.data=E)))),(E=_1?S1(t,n):M1(t,n))&&(c=xc(c,"onBeforeInput"),0<c.length&&(u=new fm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Iv(d,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=va(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=va(n,s),l!=null&&o.unshift(Ea(n,l,a))):r||(l=va(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var O1=/\r\n?/g,z1=/\u0000|\uFFFD/g;function Am(t){return(typeof t=="string"?t:""+t).replace(O1,`
`).replace(z1,"")}function il(t,e,n){if(e=Am(e),Am(t)!==e&&n)throw Error(Ce(425))}function yc(){}var Jd=null,Qd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(t){return bm.resolve(null).then(t).catch(B1)}:eh;function B1(t){setTimeout(function(){throw t})}function Pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Ci="__reactFiber$"+bo,Ta="__reactProps$"+bo,$i="__reactContainer$"+bo,th="__reactEvents$"+bo,H1="__reactListeners$"+bo,V1="__reactHandles$"+bo;function $r(t){var e=t[Ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[Ci])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Ci]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ce(33))}function Yc(t){return t[Ta]||null}var nh=[],Xs=-1;function Fr(t){return{current:t}}function wt(t){0>Xs||(t.current=nh[Xs],nh[Xs]=null,Xs--)}function yt(t,e){Xs++,nh[Xs]=t.current,t.current=e}var Ur={},mn=Fr(Ur),Ln=Fr(!1),rs=Ur;function mo(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function _c(){wt(Ln),wt(mn)}function Rm(t,e,n){if(mn.current!==Ur)throw Error(Ce(168));yt(mn,e),yt(Ln,n)}function Ov(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ce(108,A_(t)||"Unknown",r));return Rt({},n,i)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,rs=mn.current,yt(mn,t),yt(Ln,Ln.current),!0}function Pm(t,e,n){var i=t.stateNode;if(!i)throw Error(Ce(169));n?(t=Ov(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,wt(Ln),wt(mn),yt(mn,t)):wt(Ln),yt(Ln,n)}var ji=null,qc=!1,Lu=!1;function zv(t){ji===null?ji=[t]:ji.push(t)}function G1(t){qc=!0,zv(t)}function kr(){if(!Lu&&ji!==null){Lu=!0;var t=0,e=mt;try{var n=ji;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,qc=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),lv(Df,kr),r}finally{mt=e,Lu=!1}}return null}var Ys=[],qs=0,Mc=null,wc=0,Jn=[],Qn=0,ss=null,Yi=1,qi="";function qr(t,e){Ys[qs++]=wc,Ys[qs++]=Mc,Mc=t,wc=e}function Fv(t,e,n){Jn[Qn++]=Yi,Jn[Qn++]=qi,Jn[Qn++]=ss,ss=t;var i=Yi;t=qi;var r=32-yi(i)-1;i&=~(1<<r),n+=1;var s=32-yi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-yi(e)+r|n<<r|i,qi=s+t}else Yi=1<<s|n<<r|i,qi=t}function Hf(t){t.return!==null&&(qr(t,1),Fv(t,1,0))}function Vf(t){for(;t===Mc;)Mc=Ys[--qs],Ys[qs]=null,wc=Ys[--qs],Ys[qs]=null;for(;t===ss;)ss=Jn[--Qn],Jn[Qn]=null,qi=Jn[--Qn],Jn[Qn]=null,Yi=Jn[--Qn],Jn[Qn]=null}var jn=null,Wn=null,Tt=!1,mi=null;function kv(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jn=t,Wn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jn=t,Wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Yi,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jn=t,Wn=null,!0):!1;default:return!1}}function ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rh(t){if(Tt){var e=Wn;if(e){var n=e;if(!Lm(t,e)){if(ih(t))throw Error(Ce(418));e=Cr(n.nextSibling);var i=jn;e&&Lm(t,e)?kv(i,n):(t.flags=t.flags&-4097|2,Tt=!1,jn=t)}}else{if(ih(t))throw Error(Ce(418));t.flags=t.flags&-4097|2,Tt=!1,jn=t}}}function Dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jn=t}function rl(t){if(t!==jn)return!1;if(!Tt)return Dm(t),Tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=Wn)){if(ih(t))throw Bv(),Error(Ce(418));for(;e;)kv(t,e),e=Cr(e.nextSibling)}if(Dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wn=null}}else Wn=jn?Cr(t.stateNode.nextSibling):null;return!0}function Bv(){for(var t=Wn;t;)t=Cr(t.nextSibling)}function go(){Wn=jn=null,Tt=!1}function Gf(t){mi===null?mi=[t]:mi.push(t)}var W1=nr.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var i=n.stateNode}if(!i)throw Error(Ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(Ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function Hv(t){function e(f,g){if(t){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Dr(f,g),f.index=0,f.sibling=null,f}function s(f,g,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,x,S){return g===null||g.tag!==6?(g=Fu(x,f.mode,S),g.return=f,g):(g=r(g,x),g.return=f,g)}function l(f,g,x,S){var P=x.type;return P===Hs?u(f,g,x.props.children,S,x.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mr&&Nm(P)===g.type)?(S=r(g,x.props),S.ref=zo(f,g,x),S.return=f,S):(S=ec(x.type,x.key,x.props,null,f.mode,S),S.ref=zo(f,g,x),S.return=f,S)}function c(f,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=ku(x,f.mode,S),g.return=f,g):(g=r(g,x.children||[]),g.return=f,g)}function u(f,g,x,S,P){return g===null||g.tag!==7?(g=is(x,f.mode,S,P),g.return=f,g):(g=r(g,x),g.return=f,g)}function d(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Fu(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qa:return x=ec(g.type,g.key,g.props,null,f.mode,x),x.ref=zo(f,null,g),x.return=f,x;case Bs:return g=ku(g,f.mode,x),g.return=f,g;case mr:var S=g._init;return d(f,S(g._payload),x)}if(Jo(g)||Do(g))return g=is(g,f.mode,x,null),g.return=f,g;sl(f,g)}return null}function h(f,g,x,S){var P=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(f,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:return x.key===P?l(f,g,x,S):null;case Bs:return x.key===P?c(f,g,x,S):null;case mr:return P=x._init,h(f,g,P(x._payload),S)}if(Jo(x)||Do(x))return P!==null?null:u(f,g,x,S,null);sl(f,x)}return null}function p(f,g,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(g,f,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:return f=f.get(S.key===null?x:S.key)||null,l(g,f,S,P);case Bs:return f=f.get(S.key===null?x:S.key)||null,c(g,f,S,P);case mr:var A=S._init;return p(f,g,x,A(S._payload),P)}if(Jo(S)||Do(S))return f=f.get(x)||null,u(g,f,S,P,null);sl(g,S)}return null}function y(f,g,x,S){for(var P=null,A=null,E=g,b=g=0,G=null;E!==null&&b<x.length;b++){E.index>b?(G=E,E=null):G=E.sibling;var _=h(f,E,x[b],S);if(_===null){E===null&&(E=G);break}t&&E&&_.alternate===null&&e(f,E),g=s(_,g,b),A===null?P=_:A.sibling=_,A=_,E=G}if(b===x.length)return n(f,E),Tt&&qr(f,b),P;if(E===null){for(;b<x.length;b++)E=d(f,x[b],S),E!==null&&(g=s(E,g,b),A===null?P=E:A.sibling=E,A=E);return Tt&&qr(f,b),P}for(E=i(f,E);b<x.length;b++)G=p(E,f,b,x[b],S),G!==null&&(t&&G.alternate!==null&&E.delete(G.key===null?b:G.key),g=s(G,g,b),A===null?P=G:A.sibling=G,A=G);return t&&E.forEach(function(w){return e(f,w)}),Tt&&qr(f,b),P}function M(f,g,x,S){var P=Do(x);if(typeof P!="function")throw Error(Ce(150));if(x=P.call(x),x==null)throw Error(Ce(151));for(var A=P=null,E=g,b=g=0,G=null,_=x.next();E!==null&&!_.done;b++,_=x.next()){E.index>b?(G=E,E=null):G=E.sibling;var w=h(f,E,_.value,S);if(w===null){E===null&&(E=G);break}t&&E&&w.alternate===null&&e(f,E),g=s(w,g,b),A===null?P=w:A.sibling=w,A=w,E=G}if(_.done)return n(f,E),Tt&&qr(f,b),P;if(E===null){for(;!_.done;b++,_=x.next())_=d(f,_.value,S),_!==null&&(g=s(_,g,b),A===null?P=_:A.sibling=_,A=_);return Tt&&qr(f,b),P}for(E=i(f,E);!_.done;b++,_=x.next())_=p(E,f,b,_.value,S),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?b:_.key),g=s(_,g,b),A===null?P=_:A.sibling=_,A=_);return t&&E.forEach(function(C){return e(f,C)}),Tt&&qr(f,b),P}function m(f,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Hs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:e:{for(var P=x.key,A=g;A!==null;){if(A.key===P){if(P=x.type,P===Hs){if(A.tag===7){n(f,A.sibling),g=r(A,x.props.children),g.return=f,f=g;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mr&&Nm(P)===A.type){n(f,A.sibling),g=r(A,x.props),g.ref=zo(f,A,x),g.return=f,f=g;break e}n(f,A);break}else e(f,A);A=A.sibling}x.type===Hs?(g=is(x.props.children,f.mode,S,x.key),g.return=f,f=g):(S=ec(x.type,x.key,x.props,null,f.mode,S),S.ref=zo(f,g,x),S.return=f,f=S)}return o(f);case Bs:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(f,g.sibling),g=r(g,x.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=ku(x,f.mode,S),g.return=f,f=g}return o(f);case mr:return A=x._init,m(f,g,A(x._payload),S)}if(Jo(x))return y(f,g,x,S);if(Do(x))return M(f,g,x,S);sl(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,x),g.return=f,f=g):(n(f,g),g=Fu(x,f.mode,S),g.return=f,f=g),o(f)):n(f,g)}return m}var vo=Hv(!0),Vv=Hv(!1),Ec=Fr(null),Tc=null,Ks=null,Wf=null;function jf(){Wf=Ks=Tc=null}function Xf(t){var e=Ec.current;wt(Ec),t._currentValue=e}function sh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Tc=t,Wf=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rn=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Tc===null)throw Error(Ce(308));Ks=t,Tc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var es=null;function Yf(t){es===null?es=[t]:es.push(t)}function Gv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}function Im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,i){var r=t.updateQueue;gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,M=a;switch(h=e,p=n,M.tag){case 1:if(y=M.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=M.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=Rt({},d,h);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=d}}function Um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ce(191,r));r.call(i)}}}var Va={},Li=Fr(Va),Aa=Fr(Va),ba=Fr(Va);function ts(t){if(t===Va)throw Error(Ce(174));return t}function Kf(t,e){switch(yt(ba,e),yt(Aa,t),yt(Li,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}wt(Li),yt(Li,e)}function xo(){wt(Li),wt(Aa),wt(ba)}function jv(t){ts(ba.current);var e=ts(Li.current),n=kd(e,t.type);e!==n&&(yt(Aa,t),yt(Li,n))}function Zf(t){Aa.current===t&&(wt(Li),wt(Aa))}var At=Fr(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function Jf(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var Kl=nr.ReactCurrentDispatcher,Nu=nr.ReactCurrentBatchConfig,os=0,Ct=null,Ht=null,Kt=null,Cc=!1,aa=!1,Ca=0,j1=0;function ln(){throw Error(Ce(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Si(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(os=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?K1:Z1,t=n(i,r),aa){s=0;do{if(aa=!1,Ca=0,25<=s)throw Error(Ce(301));s+=1,Kt=Ht=null,e.updateQueue=null,Kl.current=J1,t=n(i,r)}while(aa)}if(Kl.current=Rc,e=Ht!==null&&Ht.next!==null,os=0,Kt=Ht=Ct=null,Cc=!1,e)throw Error(Ce(300));return t}function ep(){var t=Ca!==0;return Ca=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ct.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function si(){if(Ht===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Kt===null?Ct.memoizedState:Kt.next;if(e!==null)Kt=e,Ht=t;else{if(t===null)throw Error(Ce(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Kt===null?Ct.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function Ra(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=si(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((os&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ct.lanes|=u,as|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(Rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=si(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(Rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xv(){}function Yv(t,e){var n=Ct,i=si(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,Rn=!0),i=i.queue,tp(Zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Kv.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(Ce(349));os&30||qv(n,e,r)}return r}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,i){e.value=n,e.getSnapshot=i,Jv(e)&&Qv(t)}function Zv(t,e,n){return n(function(){Jv(e)&&Qv(t)})}function Jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Si(t,n)}catch{return!0}}function Qv(t){var e=er(t,1);e!==null&&_i(e,t,1,-1)}function Om(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=q1.bind(null,Ct,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $v(){return si().memoizedState}function Zl(t,e,n,i){var r=Ei();Ct.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function Kc(t,e,n,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&Qf(i,o.deps)){r.memoizedState=Pa(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function zm(t,e){return Zl(8390656,8,t,e)}function tp(t,e){return Kc(2048,8,t,e)}function ex(t,e){return Kc(4,2,t,e)}function tx(t,e){return Kc(4,4,t,e)}function nx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ix(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,nx.bind(null,e,t),n)}function np(){}function rx(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sx(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ox(t,e,n){return os&21?(Si(n,e)||(n=dv(),Ct.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=n)}function X1(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{mt=n,Nu.transition=i}}function ax(){return si().memoizedState}function Y1(t,e,n){var i=Lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lx(t))cx(e,n);else if(n=Gv(t,e,n,i),n!==null){var r=yn();_i(n,t,i,r),ux(n,e,i)}}function q1(t,e,n){var i=Lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(t))cx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,Yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gv(t,e,r,i),n!==null&&(r=yn(),_i(n,t,i,r),ux(n,e,i))}}function lx(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function cx(t,e){aa=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ux(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}var Rc={readContext:ri,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},K1={readContext:ri,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,nx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Y1.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:Om,useDebugValue:np,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=Om(!1),e=t[0];return t=X1.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=Ei();if(Tt){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=e(),Qt===null)throw Error(Ce(349));os&30||qv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zm(Zv.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,Kv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=Qt.identifierPrefix;if(Tt){var n=qi,i=Yi;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=j1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z1={readContext:ri,useCallback:rx,useContext:ri,useEffect:tp,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Iu,useRef:$v,useState:function(){return Iu(Ra)},useDebugValue:np,useDeferredValue:function(t){var e=si();return ox(e,Ht.memoizedState,t)},useTransition:function(){var t=Iu(Ra)[0],e=si().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:Yv,useId:ax,unstable_isNewReconciler:!1},J1={readContext:ri,useCallback:rx,useContext:ri,useEffect:tp,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Uu,useRef:$v,useState:function(){return Uu(Ra)},useDebugValue:np,useDeferredValue:function(t){var e=si();return Ht===null?e.memoizedState=t:ox(e,Ht.memoizedState,t)},useTransition:function(){var t=Uu(Ra)[0],e=si().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:Yv,useId:ax,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function oh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Lr(t),s=Ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(_i(e,t,r,i),ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Lr(t),s=Ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(_i(e,t,r,i),ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=Lr(t),r=Ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(_i(e,t,i,n),ql(e,t,i))}};function Fm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function dx(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=Dn(e)?rs:mn.current,i=e.contextTypes,s=(i=i!=null)?mo(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function km(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function ah(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=Dn(e)?rs:mn.current,r.context=mo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(oh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),Ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",i=e;do n+=T_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function hx(t,e,n){n=Ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,xh=i),lh(t,e)},n}function fx(t,e,n){n=Ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ji(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var $1=nr.ReactCurrentOwner,Rn=!1;function vn(t,e,n,i){e.child=t===null?Vv(e,null,n,i):vo(e,t.child,n,i)}function Gm(t,e,n,i,r){n=n.render;var s=e.ref;return oo(e,r),i=$f(t,e,n,i,s,r),n=ep(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(Tt&&n&&Hf(e),e.flags|=1,vn(t,e,i,r),e.child)}function Wm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,px(t,e,s,i,r)):(t=ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function px(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(Rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Rn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return ch(t,e,n,i,r)}function mx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Js,Hn),Hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Js,Hn),Hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Js,Hn),Hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Js,Hn),Hn|=i;return vn(t,e,r,n),e.child}function gx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ch(t,e,n,i,r){var s=Dn(n)?rs:mn.current;return s=mo(e,s),oo(e,r),n=$f(t,e,n,i,s,r),i=ep(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(Tt&&i&&Hf(e),e.flags|=1,vn(t,e,n,r),e.child)}function jm(t,e,n,i,r){if(Dn(n)){var s=!0;Sc(e)}else s=!1;if(oo(e,r),e.stateNode===null)Jl(t,e),dx(e,n,i),ah(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=Dn(n)?rs:mn.current,c=mo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&km(e,o,i,c),gr=!1;var h=e.memoizedState;o.state=h,Ac(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Ln.current||gr?(typeof u=="function"&&(oh(e,n,u,i),l=e.memoizedState),(a=gr||Fm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:hi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=Dn(n)?rs:mn.current,l=mo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&km(e,o,i,l),gr=!1,h=e.memoizedState,o.state=h,Ac(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||Ln.current||gr?(typeof p=="function"&&(oh(e,n,p,i),y=e.memoizedState),(c=gr||Fm(e,n,c,i,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return uh(t,e,n,i,s,r)}function uh(t,e,n,i,r,s){gx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pm(e,n,!1),tr(t,e,s);i=e.stateNode,$1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vo(e,t.child,null,s),e.child=vo(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Pm(e,n,!0),e.child}function vx(t){var e=t.stateNode;e.pendingContext?Rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rm(t,e.context,!1),Kf(t,e.containerInfo)}function Xm(t,e,n,i,r){return go(),Gf(r),e.flags|=256,vn(t,e,n,i),e.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function xx(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(At,r&1),t===null)return rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,i,0,null),t=is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=dh,t):ip(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return eS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=is(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dh,i}return s=t.child,t=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ip(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,i){return i!==null&&Gf(i),vo(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(Ce(422))),ol(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$c({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vo(e,t.child,null,o),e.child.memoizedState=hh(o),e.memoizedState=dh,s);if(!(e.mode&1))return ol(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ce(419)),i=Ou(s,i,void 0),ol(t,e,o,i)}if(a=(o&t.childLanes)!==0,Rn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),_i(i,t,r,-1))}return cp(),i=Ou(Error(Ce(421))),ol(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Wn=Cr(r.nextSibling),jn=e,Tt=!0,mi=null,t!==null&&(Jn[Qn++]=Yi,Jn[Qn++]=qi,Jn[Qn++]=ss,Yi=t.id,qi=t.overflow,ss=e),e=ip(e,i.children),e.flags|=4096,e)}function Ym(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sh(t.return,e,n)}function zu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,n,e);else if(t.tag===19)Ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zu(e,!0,n,null,s);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ce(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:vx(e),go();break;case 5:jv(e);break;case 1:Dn(e.type)&&Sc(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?xx(t,e,n):(yt(At,At.current&1),t=tr(t,e,n),t!==null?t.sibling:null);yt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,mx(t,e,n)}return tr(t,e,n)}var _x,fh,Sx,Mx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fh=function(){};Sx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Li.current);var s=null;switch(n){case"input":r=Ud(t,r),i=Ud(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Fd(t,r),i=Fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yc)}Bd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Mx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fo(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nS(t,e,n){var i=e.pendingProps;switch(Vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Dn(e.type)&&_c(),cn(e),null;case 3:return i=e.stateNode,xo(),wt(Ln),wt(mn),Jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(Sh(mi),mi=null))),fh(t,e),cn(e),null;case 5:Zf(e);var r=ts(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)Sx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ce(166));return cn(e),null}if(t=ts(Li.current),rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ci]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)Mt($o[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":nm(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":rm(i,s),Mt("invalid",i)}Bd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(n){case"input":Ka(i),im(i,s,!0);break;case"textarea":Ka(i),sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ci]=e,t[Ta]=i,_x(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hd(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)Mt($o[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":nm(t,i),r=Ud(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":rm(t,i),r=Fd(t,i),Mt("invalid",t);break;default:r=i}Bd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$g(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&bf(t,s,l,o))}switch(n){case"input":Ka(t),im(t,i,!1);break;case"textarea":Ka(t),sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?no(t,!!i.multiple,s,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)Mx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ce(166));if(n=ts(ba.current),ts(Li.current),rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ci]=e,(s=i.nodeValue!==n)&&(t=jn,t!==null))switch(t.tag){case 3:il(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return cn(e),null;case 13:if(wt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&Wn!==null&&e.mode&1&&!(e.flags&128))Bv(),go(),e.flags|=98560,s=!1;else if(s=rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[Ci]=e}else go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else mi!==null&&(Sh(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Gt===0&&(Gt=3):cp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return xo(),fh(t,e),t===null&&wa(e.stateNode.containerInfo),cn(e),null;case 10:return Xf(e.type._context),cn(e),null;case 17:return Dn(e.type)&&_c(),cn(e),null;case 19:if(wt(At),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fo(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,Fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>_o&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=bc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Tt)return cn(e),null}else 2*Ut()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=At.current,yt(At,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return lp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Hn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(Ce(156,e.tag))}function iS(t,e){switch(Vf(e),e.tag){case 1:return Dn(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),wt(Ln),wt(mn),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if(wt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ce(340));go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(At),null;case 4:return xo(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var al=!1,pn=!1,rS=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function ph(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var qm=!1;function sS(t,e){if(Jd=gc,t=bv(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qd={focusedElem:t,selectionRange:n},gc=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){e=ke;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var M=y.memoizedProps,m=y.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:hi(e.type,M),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(S){Dt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}return y=qm,qm=!1,y}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ph(e,n,s)}r=r.next}while(r!==i)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wx(t){var e=t.alternate;e!==null&&(t.alternate=null,wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ci],delete e[Ta],delete e[th],delete e[H1],delete e[V1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ex(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(i!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}function vh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}var en=null,fi=!1;function or(t,e,n){for(n=n.child;n!==null;)Tx(t,e,n),n=n.sibling}function Tx(t,e,n){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(Gc,n)}catch{}switch(n.tag){case 5:pn||Zs(n,e);case 6:var i=en,r=fi;en=null,or(t,e,n),en=i,fi=r,en!==null&&(fi?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(fi?(t=en,n=n.stateNode,t.nodeType===8?Pu(t.parentNode,n):t.nodeType===1&&Pu(t,n),_a(t)):Pu(en,n.stateNode));break;case 4:i=en,r=fi,en=n.stateNode.containerInfo,fi=!0,or(t,e,n),en=i,fi=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ph(n,e,o),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!pn&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Dt(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,or(t,e,n),pn=i):or(t,e,n);break;default:or(t,e,n)}}function Zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(i){var r=pS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function li(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,fi=!1;break e;case 3:en=a.stateNode.containerInfo,fi=!0;break e;case 4:en=a.stateNode.containerInfo,fi=!0;break e}a=a.return}if(en===null)throw Error(Ce(160));Tx(s,o,r),en=null,fi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ax(e,t),e=e.sibling}function Ax(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(e,t),wi(t),i&4){try{la(3,t,t.return),Jc(3,t)}catch(M){Dt(t,t.return,M)}try{la(5,t,t.return)}catch(M){Dt(t,t.return,M)}}break;case 1:li(e,t),wi(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(li(e,t),wi(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(M){Dt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qg(r,s),Hd(a,o);var c=Hd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?$g(r,d):u==="dangerouslySetInnerHTML"?Jg(r,d):u==="children"?ga(r,d):bf(r,u,d,c)}switch(a){case"input":Od(r,s);break;case"textarea":Kg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?no(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?no(r,!!s.multiple,s.defaultValue,!0):no(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(M){Dt(t,t.return,M)}}break;case 6:if(li(e,t),wi(t),i&4){if(t.stateNode===null)throw Error(Ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Dt(t,t.return,M)}}break;case 3:if(li(e,t),wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(M){Dt(t,t.return,M)}break;case 4:li(e,t),wi(t);break;case 13:li(e,t),wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(op=Ut())),i&4&&Zm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||u,li(e,t),pn=c):li(e,t),wi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ke=t,u=t.child;u!==null;){for(d=ke=u;ke!==null;){switch(h=ke,p=h.child,h.tag){case 0:case 11:case 14:case 15:la(4,h,h.return);break;case 1:Zs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(M){Dt(i,n,M)}}break;case 5:Zs(h,h.return);break;case 22:if(h.memoizedState!==null){Qm(d);continue}}p!==null?(p.return=h,ke=p):Qm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qg("display",o))}catch(M){Dt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Dt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:li(e,t),wi(t),i&4&&Zm(t);break;case 21:break;default:li(e,t),wi(t)}}function wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ex(n)){var i=n;break e}n=n.return}throw Error(Ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=Km(t);vh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Km(t);gh(t,a,o);break;default:throw Error(Ce(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){ke=t,bx(t)}function bx(t,e,n){for(var i=(t.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=al;var c=pn;if(al=o,(pn=l)&&!c)for(ke=r;ke!==null;)o=ke,l=o.child,o.tag===22&&o.memoizedState!==null?$m(r):l!==null?(l.return=o,ke=l):$m(r);for(;s!==null;)ke=s,bx(s),s=s.sibling;ke=r,al=a,pn=c}Jm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):Jm(t)}}function Jm(t){for(;ke!==null;){var e=ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||Jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Um(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&_a(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}pn||e.flags&512&&mh(e)}catch(h){Dt(e,e.return,h)}}if(e===t){ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}}function Qm(t){for(;ke!==null;){var e=ke;if(e===t){ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ke=n;break}ke=e.return}}function $m(t){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{mh(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{mh(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ke=a;break}ke=e.return}}var aS=Math.ceil,Pc=nr.ReactCurrentDispatcher,rp=nr.ReactCurrentOwner,ni=nr.ReactCurrentBatchConfig,ct=0,Qt=null,zt=null,sn=0,Hn=0,Js=Fr(0),Gt=0,La=null,as=0,Qc=0,sp=0,ca=null,bn=null,op=0,_o=1/0,Wi=null,Lc=!1,xh=null,Pr=null,ll=!1,wr=null,Dc=0,ua=0,yh=null,Ql=-1,$l=0;function yn(){return ct&6?Ut():Ql!==-1?Ql:Ql=Ut()}function Lr(t){return t.mode&1?ct&2&&sn!==0?sn&-sn:W1.transition!==null?($l===0&&($l=dv()),$l):(t=mt,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function _i(t,e,n,i){if(50<ua)throw ua=0,yh=null,Error(Ce(185));ka(t,n,i),(!(ct&2)||t!==Qt)&&(t===Qt&&(!(ct&2)&&(Qc|=n),Gt===4&&xr(t,sn)),Nn(t,i),n===1&&ct===0&&!(e.mode&1)&&(_o=Ut()+500,qc&&kr()))}function Nn(t,e){var n=t.callbackNode;W_(t,e);var i=mc(t,t===Qt?sn:0);if(i===0)n!==null&&lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lm(n),e===1)t.tag===0?G1(e0.bind(null,t)):zv(e0.bind(null,t)),k1(function(){!(ct&6)&&kr()}),n=null;else{switch(hv(i)){case 1:n=Df;break;case 4:n=cv;break;case 16:n=pc;break;case 536870912:n=uv;break;default:n=pc}n=Ux(n,Cx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cx(t,e){if(Ql=-1,$l=0,ct&6)throw Error(Ce(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=mc(t,t===Qt?sn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nc(t,i);else{e=i;var r=ct;ct|=2;var s=Px();(Qt!==t||sn!==e)&&(Wi=null,_o=Ut()+500,ns(t,e));do try{uS();break}catch(a){Rx(t,a)}while(!0);jf(),Pc.current=s,ct=r,zt!==null?e=0:(Qt=null,sn=0,e=Gt)}if(e!==0){if(e===2&&(r=Xd(t),r!==0&&(i=r,e=_h(t,r))),e===1)throw n=La,ns(t,0),xr(t,i),Nn(t,Ut()),n;if(e===6)xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!lS(r)&&(e=Nc(t,i),e===2&&(s=Xd(t),s!==0&&(i=s,e=_h(t,s))),e===1))throw n=La,ns(t,0),xr(t,i),Nn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ce(345));case 2:Kr(t,bn,Wi);break;case 3:if(xr(t,i),(i&130023424)===i&&(e=op+500-Ut(),10<e)){if(mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=eh(Kr.bind(null,t,bn,Wi),e);break}Kr(t,bn,Wi);break;case 4:if(xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-yi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aS(i/1960))-i,10<i){t.timeoutHandle=eh(Kr.bind(null,t,bn,Wi),i);break}Kr(t,bn,Wi);break;case 5:Kr(t,bn,Wi);break;default:throw Error(Ce(329))}}}return Nn(t,Ut()),t.callbackNode===n?Cx.bind(null,t):null}function _h(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=bn,bn=n,e!==null&&Sh(e)),t}function Sh(t){bn===null?bn=t:bn.push.apply(bn,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~sp,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yi(e),i=1<<n;t[n]=-1,e&=~i}}function e0(t){if(ct&6)throw Error(Ce(327));ao();var e=mc(t,0);if(!(e&1))return Nn(t,Ut()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var i=Xd(t);i!==0&&(e=i,n=_h(t,i))}if(n===1)throw n=La,ns(t,0),xr(t,e),Nn(t,Ut()),n;if(n===6)throw Error(Ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,bn,Wi),Nn(t,Ut()),null}function ap(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(_o=Ut()+500,qc&&kr())}}function ls(t){wr!==null&&wr.tag===0&&!(ct&6)&&ao();var e=ct;ct|=1;var n=ni.transition,i=mt;try{if(ni.transition=null,mt=1,t)return t()}finally{mt=i,ni.transition=n,ct=e,!(ct&6)&&kr()}}function lp(){Hn=Js.current,wt(Js)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F1(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(Vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_c();break;case 3:xo(),wt(Ln),wt(mn),Jf();break;case 5:Zf(i);break;case 4:xo();break;case 13:wt(At);break;case 19:wt(At);break;case 10:Xf(i.type._context);break;case 22:case 23:lp()}n=n.return}if(Qt=t,zt=t=Dr(t.current,null),sn=Hn=e,Gt=0,La=null,sp=Qc=as=0,bn=ca=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}es=null}return t}function Rx(t,e){do{var n=zt;try{if(jf(),Kl.current=Rc,Cc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cc=!1}if(os=0,Kt=Ht=Ct=null,aa=!1,Ca=0,rp.current=null,n===null||n.return===null){Gt=1,La=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Hm(o);if(p!==null){p.flags&=-257,Vm(p,o,a,s,e),p.mode&1&&Bm(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var M=new Set;M.add(l),e.updateQueue=M}else y.add(l);break e}else{if(!(e&1)){Bm(s,c,e),cp();break e}l=Error(Ce(426))}}else if(Tt&&a.mode&1){var m=Hm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vm(m,o,a,s,e),Gf(yo(l,a));break e}}s=l=yo(l,a),Gt!==4&&(Gt=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=hx(s,l,e);Im(s,f);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Pr===null||!Pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=fx(s,a,e);Im(s,S);break e}}s=s.return}while(s!==null)}Dx(n)}catch(P){e=P,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Px(){var t=Pc.current;return Pc.current=Rc,t===null?Rc:t}function cp(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Qt===null||!(as&268435455)&&!(Qc&268435455)||xr(Qt,sn)}function Nc(t,e){var n=ct;ct|=2;var i=Px();(Qt!==t||sn!==e)&&(Wi=null,ns(t,e));do try{cS();break}catch(r){Rx(t,r)}while(!0);if(jf(),ct=n,Pc.current=i,zt!==null)throw Error(Ce(261));return Qt=null,sn=0,Gt}function cS(){for(;zt!==null;)Lx(zt)}function uS(){for(;zt!==null&&!U_();)Lx(zt)}function Lx(t){var e=Ix(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?Dx(t):zt=e,rp.current=null}function Dx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iS(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}else if(n=nS(n,e,Hn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Kr(t,e,n){var i=mt,r=ni.transition;try{ni.transition=null,mt=1,dS(t,e,n,i)}finally{ni.transition=r,mt=i}return null}function dS(t,e,n,i){do ao();while(wr!==null);if(ct&6)throw Error(Ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(j_(t,s),t===Qt&&(zt=Qt=null,sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Ux(pc,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ni.transition,ni.transition=null;var o=mt;mt=1;var a=ct;ct|=4,rp.current=null,sS(t,n),Ax(n,t),L1(Qd),gc=!!Jd,Qd=Jd=null,t.current=n,oS(n),O_(),ct=a,mt=o,ni.transition=s}else t.current=n;if(ll&&(ll=!1,wr=t,Dc=r),s=t.pendingLanes,s===0&&(Pr=null),k_(n.stateNode),Nn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=xh,xh=null,t;return Dc&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===yh?ua++:(ua=0,yh=t):ua=0,kr(),null}function ao(){if(wr!==null){var t=hv(Dc),e=ni.transition,n=mt;try{if(ni.transition=null,mt=16>t?16:t,wr===null)var i=!1;else{if(t=wr,wr=null,Dc=0,ct&6)throw Error(Ce(331));var r=ct;for(ct|=4,ke=t.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ke=c;ke!==null;){var u=ke;switch(u.tag){case 0:case 11:case 15:la(8,u,s)}var d=u.child;if(d!==null)d.return=u,ke=d;else for(;ke!==null;){u=ke;var h=u.sibling,p=u.return;if(wx(u),u===c){ke=null;break}if(h!==null){h.return=p,ke=h;break}ke=p}}}var y=s.alternate;if(y!==null){var M=y.child;if(M!==null){y.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ke=f;break e}ke=s.return}}var g=t.current;for(ke=g;ke!==null;){o=ke;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ke=x;else e:for(o=g;ke!==null;){if(a=ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jc(9,a)}}catch(P){Dt(a,a.return,P)}if(a===o){ke=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ke=S;break e}ke=a.return}}if(ct=r,kr(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(Gc,t)}catch{}i=!0}return i}finally{mt=n,ni.transition=e}}return!1}function t0(t,e,n){e=yo(n,e),e=hx(t,e,1),t=Rr(t,e,1),e=yn(),t!==null&&(ka(t,1,e),Nn(t,e))}function Dt(t,e,n){if(t.tag===3)t0(t,t,n);else for(;e!==null;){if(e.tag===3){t0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=yo(n,t),t=fx(e,t,1),e=Rr(e,t,1),t=yn(),e!==null&&(ka(e,1,t),Nn(e,t));break}}e=e.return}}function hS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(sn&n)===n&&(Gt===4||Gt===3&&(sn&130023424)===sn&&500>Ut()-op?ns(t,0):sp|=n),Nn(t,e)}function Nx(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=yn();t=er(t,e),t!==null&&(ka(t,e,n),Nn(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nx(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ce(314))}i!==null&&i.delete(e),Nx(t,n)}var Ix;Ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ln.current)Rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rn=!1,tS(t,e,n);Rn=!!(t.flags&131072)}else Rn=!1,Tt&&e.flags&1048576&&Fv(e,wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jl(t,e),t=e.pendingProps;var r=mo(e,mn.current);oo(e,n),r=$f(null,e,i,t,r,n);var s=ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,Sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qf(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,ah(e,i,t,n),e=uh(null,e,i,!0,s,n)):(e.tag=0,Tt&&s&&Hf(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gS(i),t=hi(i,t),r){case 0:e=ch(null,e,i,t,n);break e;case 1:e=jm(null,e,i,t,n);break e;case 11:e=Gm(null,e,i,t,n);break e;case 14:e=Wm(null,e,i,hi(i.type,t),n);break e}throw Error(Ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),ch(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),jm(t,e,i,r,n);case 3:e:{if(vx(e),t===null)throw Error(Ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wv(t,e),Ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=yo(Error(Ce(423)),e),e=Xm(t,e,i,n,r);break e}else if(i!==r){r=yo(Error(Ce(424)),e),e=Xm(t,e,i,n,r);break e}else for(Wn=Cr(e.stateNode.containerInfo.firstChild),jn=e,Tt=!0,mi=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),i===r){e=tr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return jv(e),t===null&&rh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$d(i,r)?o=null:s!==null&&$d(i,s)&&(e.flags|=32),gx(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&rh(e),null;case 13:return xx(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vo(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Gm(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(Ec,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!Ln.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oo(e,n),r=ri(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),Wm(t,e,i,r,n);case 15:return px(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Jl(t,e),e.tag=1,Dn(i)?(t=!0,Sc(e)):t=!1,oo(e,n),dx(e,i,r),ah(e,i,r,n),uh(null,e,i,!0,t,n);case 19:return yx(t,e,n);case 22:return mx(t,e,n)}throw Error(Ce(156,e.tag))};function Ux(t,e){return lv(t,e)}function mS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new mS(t,e,n,i)}function up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Pf)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return is(n.children,r,s,e);case Cf:o=8,r|=8;break;case Ld:return t=$n(12,n,e,r|2),t.elementType=Ld,t.lanes=s,t;case Dd:return t=$n(13,n,e,r),t.elementType=Dd,t.lanes=s,t;case Nd:return t=$n(19,n,e,r),t.elementType=Nd,t.lanes=s,t;case jg:return $c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gg:o=10;break e;case Wg:o=9;break e;case Rf:o=11;break e;case Pf:o=14;break e;case mr:o=16,i=null;break e}throw Error(Ce(130,t==null?t:typeof t,""))}return e=$n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function is(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function $c(t,e,n,i){return t=$n(22,t,i,e),t.elementType=jg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yu(0),this.expirationTimes=yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,i,r,s,o,a,l){return t=new vS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(s),t}function xS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ox(t){if(!t)return Ur;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(Ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ce(171))}if(t.tag===1){var n=t.type;if(Dn(n))return Ov(t,n,e)}return e}function zx(t,e,n,i,r,s,o,a,l){return t=dp(n,i,!0,t,r,s,o,a,l),t.context=Ox(null),n=t.current,i=yn(),r=Lr(n),s=Ji(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,ka(t,r,i),Nn(t,i),t}function eu(t,e,n,i){var r=e.current,s=yn(),o=Lr(r);return n=Ox(n),e.context===null?e.context=n:e.pendingContext=n,e=Ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(_i(t,r,o,s),ql(t,r,o)),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function n0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hp(t,e){n0(t,e),(t=t.alternate)&&n0(t,e)}function yS(){return null}var Fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function fp(t){this._internalRoot=t}tu.prototype.render=fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ce(409));eu(t,e,null,null)};tu.prototype.unmount=fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){eu(null,t,null,null)}),e[$i]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&vv(t)}};function pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function i0(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ic(o);s.call(c)}}var o=zx(e,i,t,0,null,!1,!1,"",i0);return t._reactRootContainer=o,t[$i]=o.current,wa(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ic(l);a.call(c)}}var l=dp(t,0,!1,null,null,!1,!1,"",i0);return t._reactRootContainer=l,t[$i]=l.current,wa(t.nodeType===8?t.parentNode:t),ls(function(){eu(e,l,n,i)}),l}function iu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ic(o);a.call(l)}}eu(e,o,t,r)}else o=_S(n,e,t,r,i);return Ic(o)}fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(Nf(e,n|1),Nn(e,Ut()),!(ct&6)&&(_o=Ut()+500,kr()))}break;case 13:ls(function(){var i=er(t,1);if(i!==null){var r=yn();_i(i,t,1,r)}}),hp(t,1)}};If=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=yn();_i(e,t,134217728,n)}hp(t,134217728)}};pv=function(t){if(t.tag===13){var e=Lr(t),n=er(t,e);if(n!==null){var i=yn();_i(n,t,e,i)}hp(t,e)}};mv=function(){return mt};gv=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Gd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yc(i);if(!r)throw Error(Ce(90));Yg(i),Od(i,r)}}}break;case"textarea":Kg(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};nv=ap;iv=ls;var SS={usingClientEntryPoint:!1,Events:[Ha,js,Yc,ev,tv,ap]},ko={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ov(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Gc=cl.inject(MS),Pi=cl}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(e))throw Error(Ce(200));return xS(t,e,null,n)};Yn.createRoot=function(t,e){if(!pp(t))throw Error(Ce(299));var n=!1,i="",r=Fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,wa(t.nodeType===8?t.parentNode:t),new fp(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ce(188)):(t=Object.keys(t).join(","),Error(Ce(268,t)));return t=ov(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return ls(t)};Yn.hydrate=function(t,e,n){if(!nu(e))throw Error(Ce(200));return iu(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!pp(t))throw Error(Ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zx(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tu(e)};Yn.render=function(t,e,n){if(!nu(e))throw Error(Ce(200));return iu(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!nu(t))throw Error(Ce(40));return t._reactRootContainer?(ls(function(){iu(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Yn.unstable_batchedUpdates=ap;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nu(n))throw Error(Ce(200));if(t==null||t._reactInternals===void 0)throw Error(Ce(38));return iu(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kx)}catch(t){console.error(t)}}kx(),kg.exports=Yn;var wS=kg.exports,r0=wS;Rd.createRoot=r0.createRoot,Rd.hydrateRoot=r0.hydrateRoot;const Bx=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"pouf",name:"Pouf",category:"Seating",w:.5,d:.5,h:.4,color:"#b6855f",shape:"pouf"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"ladder-shelf",name:"Ladder Shelf",category:"Storage",w:.6,d:.4,h:1.7,color:"#9a6f43",shape:"ladder"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fireplace",name:"Fireplace",category:"Decor",w:1.3,d:.4,h:1.1,color:"#cfcabf",shape:"fireplace"},{type:"floor-mirror",name:"Floor Mirror",category:"Decor",w:.7,d:.06,h:1.7,color:"#caa86a",shape:"mirror"},{type:"bar-cart",name:"Bar Cart",category:"Decor",w:.7,d:.42,h:.8,color:"#b8923f",shape:"barcart"},{type:"piano",name:"Upright Piano",category:"Decor",w:1.5,d:.6,h:1.2,color:"#161616",shape:"piano"},{type:"coat-rack",name:"Coat Rack",category:"Decor",w:.5,d:.5,h:1.75,color:"#5a4636",shape:"coatrack"},{type:"floor-vase",name:"Floor Vase",category:"Decor",w:.32,d:.32,h:.85,color:"#9a8f7a",shape:"vase"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"island",name:"Kitchen Island",category:"Kitchen",w:1.4,d:.9,h:.9,color:"#7d7f83",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"},{type:"oven",name:"Stove / Oven",category:"Kitchen",w:.6,d:.62,h:.9,color:"#d3d7dc",shape:"oven"},{type:"sink",name:"Kitchen Sink",category:"Kitchen",w:.85,d:.6,h:.9,color:"#7a5c41",shape:"sink"},{type:"dishwasher",name:"Dishwasher",category:"Kitchen",w:.6,d:.6,h:.85,color:"#cfd4da",shape:"appliance"},{type:"washer",name:"Washing Machine",category:"Appliances",w:.6,d:.62,h:.85,color:"#e8eaec",shape:"washer"},{type:"dryer",name:"Dryer",category:"Appliances",w:.6,d:.62,h:.85,color:"#dfe2e5",shape:"washer"},{type:"chest-freezer",name:"Chest Freezer",category:"Appliances",w:1,d:.6,h:.85,color:"#e2e6ea",shape:"appliance"},{type:"water-heater",name:"Water Heater",category:"Appliances",w:.55,d:.55,h:1.5,color:"#d9dde1",shape:"fridge"},{type:"ac-unit",name:"AC Unit",category:"Appliances",w:.5,d:.5,h:.7,color:"#cfd4da",shape:"appliance"},{type:"toilet",name:"Toilet",category:"Bathroom",w:.4,d:.68,h:.78,color:"#f2f2f0",shape:"toilet"},{type:"bathtub",name:"Bathtub",category:"Bathroom",w:1.7,d:.75,h:.56,color:"#f3f3f1",shape:"bathtub"},{type:"shower",name:"Shower",category:"Bathroom",w:.9,d:.9,h:2,color:"#e8e8e6",shape:"shower"},{type:"vanity",name:"Vanity",category:"Bathroom",w:.8,d:.5,h:.85,color:"#6f5a45",shape:"sink"},{type:"office-chair",name:"Office Chair",category:"Office",w:.6,d:.6,h:1.1,color:"#3a3a40",shape:"chair"},{type:"filing-cabinet",name:"Filing Cabinet",category:"Office",w:.45,d:.6,h:1.32,color:"#6b6f74",shape:"drawers"},{type:"office-desk",name:"Office Desk",category:"Office",w:1.5,d:.75,h:.75,color:"#5d5a55",shape:"desk"}],mp=Object.fromEntries(Bx.map(t=>[t.type,t]));function Ti(t){return mp[t]||null}const ES=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],Hx="honeycutt.design.v2";let TS=1;const En=()=>`${Date.now().toString(36)}-${(TS++).toString(36)}`;function Qs(){return{view:"2d",tool:"select",openingMode:!1,openShape:"rect",visitMode:!1,units:"ft",ambiance:"day",quality:"high",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],sketches:[],openings:[],selected:null}}function AS(){try{const t=localStorage.getItem(Hx);if(!t)return Qs();const e=JSON.parse(t);if(!e||!Array.isArray(e.items))return Qs();const n=e.view==="3d"?"3d":"2d",i=e.ambiance==="night"?"night":"day";return{...Qs(),...e,view:n,ambiance:i,tool:"select",openingMode:!1,visitMode:!1,selected:null}}catch{return Qs()}}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function bS(t){return t.scale&&(t.scale={x:rn(t.scale.x??1,.3,3),y:rn(t.scale.y??1,.3,3),z:rn(t.scale.z??1,.3,3)}),t}function Mh(t){return t.w=rn(t.w,.5,40),t.d=rn(t.d,.5,40),t.height!=null&&(t.height=rn(t.height,1.5,6)),t.floorScale!=null&&(t.floorScale=rn(t.floorScale,.3,4)),t}function Vx(t){return t.height!=null&&(t.height=rn(t.height,1.5,6)),t.thickness!=null&&(t.thickness=rn(t.thickness,.05,.5)),t}function wh(t){return t.w!=null&&(t.w=rn(t.w,.1,12)),t.h!=null&&(t.h=rn(t.h,.1,6)),t.depth!=null&&(t.depth=rn(t.depth,.02,3)),t.thickness!=null&&(t.thickness=rn(t.thickness,.01,.4)),t}function Gx(t){return t.u!=null&&(t.u=Math.max(0,t.u)),t.v!=null&&(t.v=rn(t.v,0,6)),t.w!=null&&(t.w=rn(t.w,.1,12)),t.h!=null&&(t.h=rn(t.h,.1,6)),t}const Eh={item:"items",room:"rooms",wall:"walls",builtin:"builtins",sketch:"sketches",opening:"openings"};function CS(t,e,n,i){const r=Eh[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&bS(a),e==="room"&&Mh(a),e==="wall"&&Vx(a),e==="builtin"&&wh(a),e==="opening"&&Gx(a),a});return{...t,[r]:s}}function Bu(t,e){var n;switch(e.type){case"view":return{...t,view:e.view,openingMode:e.view==="3d"?t.openingMode:!1,visitMode:e.view==="3d"?t.visitMode:!1};case"openingMode":return{...t,openingMode:e.value,selected:e.value?null:t.selected};case"openShape":return{...t,openShape:e.value};case"visitMode":return{...t,visitMode:e.value,selected:e.value?null:t.selected,openingMode:e.value?!1:t.openingMode};case"ambiance":return{...t,ambiance:e.value};case"quality":return{...t,quality:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"defaultHeight":return{...t,defaultHeight:rn(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"loadRooms":{const i=e.rooms.map(r=>Mh({uid:En(),height:t.defaultHeight,...r}));return{...Qs(),view:t.view,units:t.units,ambiance:t.ambiance,quality:t.quality,defaultHeight:t.defaultHeight,rooms:i,selected:null}}case"addRoom":{const i=Mh({uid:En(),name:e.name||`Room ${t.rooms.length+1}`,x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],tool:"select",selected:{type:"room",uid:i.uid}}}case"addWall":{const i=Vx({uid:En(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],tool:"select",selected:null}}case"floorAll":return{...t,rooms:t.rooms.map(i=>({...i,...e.patch}))};case"addBuiltin":{const i=wh({uid:En(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>wh({uid:En(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addOpening":{const i=Gx({uid:En(),kind:"doorway",v:0,shape:"rect",...e.opening});return{...t,openings:[...t.openings,i],selected:{type:"opening",uid:i.uid}}}case"addSketch":{const i={uid:En(),pts:e.pts,closed:!!e.closed,color:e.color||"#3f7d8c"};return{...t,sketches:[...t.sketches,i],selected:{type:"sketch",uid:i.uid}}}case"addItem":{const i=mp[e.kind];if(!i)return t;const r={uid:En(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return CS(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=Eh[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=Eh[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:En(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:En(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:En(),u:o.u+.3,v:o.v+.3}:i==="sketch"?a={...o,uid:En(),pts:o.pts.map(l=>({x:l.x+.3,z:l.z+.3}))}:i==="opening"?a={...o,uid:En(),u:o.u+.3}:a={...o,uid:En(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...Qs(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const RS=new Set(["addRoom","addWall","addSketch","addItem","addBuiltin","addBuiltins","addOpening","floorAll","loadRooms","update","remove","duplicate","clear","reset","defaultHeight"]),Hu=80;function PS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape,visitMode:t.present.visitMode},future:[t.present,...t.future].slice(0,Hu),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Hu),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape,visitMode:t.present.visitMode},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!RS.has(e.type))return{...t,present:Bu(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:Bu(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Hu),present:Bu(t.present,e),future:[],lastKey:i||null,lastTime:n}}const Wx=Xe.createContext(null);function LS({children:t}){const[e,n]=Xe.useReducer(PS,void 0,()=>({past:[],present:AS(),future:[],lastKey:null,lastTime:0})),i=Xe.useRef(null),r=e.present;Xe.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(Hx,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=Xe.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return v.jsx(Wx.Provider,{value:s,children:t})}function Co(){const t=Xe.useContext(Wx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}const ks=typeof window<"u"&&window.matchMedia?window.matchMedia("(orientation: portrait) and (pointer: coarse)"):{matches:!1};function jx(t,e,n){return ks.matches?[e-n.top,n.right-t,n.height,n.width]:[t-n.left,e-n.top,n.width,n.height]}function DS(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function st(t,e){return e==="m"?`${t.toFixed(2)} m`:DS(t)}function NS(t,e){return e==="m"?`${t.toFixed(1)} m²`:`${Math.round(t*10.7639)} ft²`}function yr(t,e){const n=e&&e.scale||{},i=e&&e.dim||t||{w:.5,d:.5,h:.5};return{w:i.w*(n.x??1),d:i.d*(n.z??1),h:i.h*(n.y??1)}}function lo(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function _r(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function s0(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const Xx=[{id:"oak_floor",label:"Oak Floor",group:"Wood",color:"#806042",normal:!0,repeat:1.4},{id:"wood_floor",label:"Wood Plank",group:"Wood",color:"#7a5c3e",normal:!1,repeat:1.4},{id:"light_oak",label:"Light Oak",group:"Wood",color:"#a17e58",normal:!0,repeat:1},{id:"walnut",label:"Walnut",group:"Wood",color:"#3e190b",normal:!0,repeat:1},{id:"parquet",label:"Parquet",group:"Wood",color:"#93704d",normal:!0,repeat:1.2},{id:"herringbone",label:"Herringbone",group:"Wood",color:"#9a7550",normal:!1,repeat:1},{id:"dark_wood",label:"Dark Plank",group:"Wood",color:"#4a3526",normal:!1,repeat:1.3},{id:"marble",label:"Marble",group:"Stone",color:"#b29d7a",normal:!0,repeat:2},{id:"granite",label:"Granite",group:"Stone",color:"#4e4e4f",normal:!1,repeat:1.6},{id:"floor_tile",label:"Floor Tile",group:"Tile",color:"#796f6b",normal:!0,repeat:1.2},{id:"patterned_tile",label:"Patterned Tile",group:"Tile",color:"#8a8077",normal:!1,repeat:1},{id:"brick",label:"Brick",group:"Masonry",color:"#8e6750",normal:!0,repeat:1.6},{id:"concrete",label:"Concrete",group:"Masonry",color:"#565654",normal:!0,repeat:2.2},{id:"plaster",label:"Plaster",group:"Wall",color:"#b0a89d",normal:!0,repeat:2.4},{id:"grey_plaster",label:"Grey Plaster",group:"Wall",color:"#9a968f",normal:!1,repeat:2.4},{id:"beige_wall",label:"Beige Wall",group:"Wall",color:"#cabfa9",normal:!1,repeat:2.6},{id:"fabric",label:"Fabric",group:"Soft",color:"#9a5955",normal:!0,repeat:.8},{id:"carpet",label:"Carpet",group:"Soft",color:"#352f25",normal:!1,repeat:1.5},{id:"grass",label:"Grass",group:"Outdoor",color:"#5f7d3f",normal:!1,repeat:1.5}],tc=Object.fromEntries(Xx.map(t=>[t.id,t])),da=(t,e=!1)=>`./textures/${t}${e?"_n":""}.jpg`,IS="./hdri/studio.hdr";function zn(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Br="rgba(0,0,0,0.22)",o0="rgba(0,0,0,0.28)";function Yx({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,u=Math.max(.8,Math.min(s,o)*.025),d=zn(i,.16),h=zn(i,-.22),p=(M,m,f,g,x,S=c,P={})=>v.jsx("rect",{x:M,y:m,width:f,height:g,rx:S,ry:S,fill:x,...P});let y=null;switch(r){case"seat":{const M=o*.26,m=s*.12;y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,h,c)," ",p(a,l+M*.5,m,o-M*.5,h,c*.6),p(a+s-m,l+M*.5,m,o-M*.5,h,c*.6),p(a+m+u,l+M,s-2*(m+u),o-M-u,d,c*.5)]});break}case"chair":{const M=o*.22;y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,h,c),p(a+u,l+M,s-2*u,o-M-u,d,c*.5)]});break}case"bench":{y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a+s*.05,l+o*.18,s*.9,o*.64,d,c*.4)]});break}case"round":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),v.jsx("circle",{cx:0,cy:0,r:s*.3,fill:d})]});break;case"table":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u*1.5,l+u*1.5,s-3*u,o-3*u,i,c*.8),p(a+s*.12,l+o*.12,s*.76,o*.76,d,c*.5)]});break;case"desk":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.7),p(a+s*.62,l+u*2,s*.34,o-u*4,d,c*.4)]});break;case"round-table":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:h}),v.jsx("circle",{cx:0,cy:0,r:s/2-u*1.5,fill:i}),v.jsx("circle",{cx:0,cy:0,r:s*.34,fill:d})]});break;case"bed":{const M=o*.16,m=s*.4,f=o*.18;y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,h,c)," ",p(a+s*.05,l+M+o*.04,m,f,d,c*.4),p(a+s*.55,l+M+o*.04,m,f,d,c*.4),p(a+s*.05,l+M+f+o*.08,s*.9,o-M-f-o*.12,zn(i,.07),c*.3)]});break}case"cabinet":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),v.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:o0,strokeWidth:u}),v.jsx("circle",{cx:-s*.06,cy:0,r:u*1.2,fill:Br}),v.jsx("circle",{cx:s*.06,cy:0,r:u*1.2,fill:Br})]});break;case"wardrobe":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),v.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:o0,strokeWidth:u}),v.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Br,strokeWidth:u*1.6}),v.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Br,strokeWidth:u*1.6})]});break;case"drawers":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.5),v.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Br,strokeWidth:u*1.6,strokeLinecap:"round"})]});break;case"shelf":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),[.3,.5,.7].map((M,m)=>v.jsx("line",{x1:a+s*.12,y1:l+o*M,x2:a+s*.88,y2:l+o*M,stroke:Br,strokeWidth:u},m))]});break;case"tv":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,"#0c0d10",c*.4),p(a+u,l,s-2*u,o*.55,"#22303f",c*.2)]});break;case"rug":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i,c*.3),p(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:zn(i,.25),strokeWidth:u*1.4,strokeDasharray:`${u*3} ${u*3}`})]});break;case"round-rug":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),v.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:zn(i,.25),strokeWidth:u*1.4})]});break;case"plant":y=v.jsxs(v.Fragment,{children:[p(a+s*.28,l+o*.28,s*.44,o*.44,zn("#8a6a4a",-.1),c*.4),v.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:zn(i,.1)}),v.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),v.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:zn(i,-.12)}),v.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:zn(i,.18)})]});break;case"lamp":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:zn(i,-.05)}),v.jsx("circle",{cx:0,cy:0,r:s*.22,fill:zn(i,.3)})]});break;case"fridge":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.4),v.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Br,strokeWidth:u*1.8,strokeLinecap:"round"})]});break;case"counter":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),p(a+s*.58,l+o*.22,s*.32,o*.56,zn(i,-.18),c*.3)]});break;case"range":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([M,m],f)=>v.jsx("circle",{cx:s*M,cy:o*m,r:s*.13,fill:"none",stroke:zn(i,.3),strokeWidth:u},f))]});break;default:y=p(a,l,s,o,i)}return v.jsx("g",{children:y})}const Ft=({children:t,size:e=22,...n})=>v.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),US=t=>v.jsxs(Ft,{...t,children:[v.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),v.jsx("path",{d:"M3 9h18M9 9v12"})]}),OS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),v.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),zS=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M12 5v14M5 12h14"})}),FS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),v.jsx("path",{d:"M21 3v5h-5"})]}),Hr=t=>v.jsxs(Ft,{...t,children:[v.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),v.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),ar=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),kS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),v.jsx("circle",{cx:"16",cy:"6",r:"2"}),v.jsx("circle",{cx:"8",cy:"12",r:"2"}),v.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),BS=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),HS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"}),v.jsx("path",{d:"M14 12h.01"})]}),VS=t=>v.jsxs(Ft,{...t,children:[v.jsx("circle",{cx:"13",cy:"4",r:"1.6"}),v.jsx("path",{d:"M11 21l2-6-3-2 1-5 3 2 2 2"}),v.jsx("path",{d:"M10 13l-2 8M14 15l2 6"})]}),qx=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),v.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),Kx=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M9 14 4 9l5-5"}),v.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),GS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"m15 14 5-5-5-5"}),v.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),WS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M12 15V3"}),v.jsx("path",{d:"m8 7 4-4 4 4"}),v.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),jS=t=>v.jsxs(Ft,{...t,children:[v.jsx("circle",{cx:"12",cy:"12",r:"4"}),v.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),a0=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),XS=t=>v.jsx(Ft,{...t,children:v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),YS=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),qS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),v.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),l0=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M4 12l5 5L20 6"})}),Et="#d9b779",c0="#39414f",KS="#c3c9d1",ZS="#eef1f5",Zx=.0254,u0=Zx,Vu=18,d0=["n","e","s","w"],JS="#2f7d8c",QS=16,un=(t,e)=>Math.round(t/e)*e,Zr=(t,e,n)=>Math.max(e,Math.min(n,t)),h0=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1,$S={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function eM(t){const e=t.floorTex||(t.floorColor?null:"wood:oak");if(!e)return{color:t.floorColor||"#eef1f5"};if(e.startsWith("wood:"))return{color:$S[e.slice(5)]||"#c79a6b"};if(e.startsWith("mat:")){const n=tc[e.slice(4)];if(n)return{mat:e.slice(4),repeat:n.repeat||1.5,color:n.color}}return{color:t.floorColor||"#cdb89a"}}function tM(t,e,n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r].x,a=n[r].z,l=n[s].x,c=n[s].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function Gu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function ul(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Zr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function nM(){const{state:t,dispatch:e}=Co(),{rooms:n,walls:i,items:r,sketches:s,openings:o,selected:a,units:l,tool:c,defaultHeight:u}=t,d=l==="ft"?Zx:.01,[h,p]=Xe.useState([]),[y,M]=Xe.useState(null),m=Xe.useRef(null),f=Xe.useRef(null),[g,x]=Xe.useState({W:360,H:540}),[S,P]=Xe.useState({scale:64,panX:180,panY:270,init:!1}),[A,E]=Xe.useState(null),b=Xe.useRef(null);b.current=A;const G=Xe.useRef(new Map),_=Xe.useRef(null),w=Xe.useRef(S);w.current=S;const C=Xe.useRef(!1);Xe.useLayoutEffect(()=>{const z=m.current;if(!z)return;const W=()=>{const D=z.clientWidth,X=z.clientHeight;x({W:D,H:X}),P(q=>q.init?q:{scale:64,panX:D/2,panY:X/2,init:!0})},le=new ResizeObserver(W);return le.observe(z),W(),()=>le.disconnect()},[]);const{W:O,H:U}=g;function V(){let z=1/0,W=-1/0,le=1/0,D=-1/0;const X=(K,pe)=>{z=Math.min(z,K),W=Math.max(W,K),le=Math.min(le,pe),D=Math.max(D,pe)};for(const K of n)X(K.x,K.z),X(K.x+K.w,K.z+K.d);for(const K of i)X(K.x1,K.z1),X(K.x2,K.z2);for(const K of r){const pe=Ti(K.type),Me=yr(pe,K);X(K.x-Me.w/2,K.z-Me.d/2),X(K.x+Me.w/2,K.z+Me.d/2)}for(const K of s)for(const pe of K.pts)X(pe.x,pe.z);if(!isFinite(z)){P({scale:64,panX:O/2,panY:U/2,init:!0});return}const q=56,Y=92,re=64,xe=Math.max(.5,W-z),J=Math.max(.5,D-le),oe=Zr(Math.min((O-2*q)/xe,(U-Y-re)/J),14,180),F=(z+W)/2,he=(le+D)/2,B=(Y+(U-re))/2;P({scale:oe,panX:O/2-F*oe,panY:B-he*oe,init:!0})}const k=n.length>0||i.length>0||r.length>0||s.length>0,ne=Xe.useRef(0);Xe.useLayoutEffect(()=>{if(!g.W)return;const z=ne.current&&Math.abs(g.W-ne.current)>60;ne.current=g.W,k&&(!C.current||z)&&(V(),C.current=!0)},[g.W,k]),Xe.useLayoutEffect(()=>{c!=="sketch"&&(p([]),M(null))},[c]);const{scale:I,panX:Z,panY:$}=S,te=(z,W)=>[z*I+Z,W*I+$],_e=(z,W)=>[(z-Z)/I,(W-$)/I],Re=z=>{const W=f.current.getBoundingClientRect(),[le,D]=jx(z.clientX,z.clientY,W);return[le,D]},j=(a==null?void 0:a.type)==="item"?r.find(z=>z.uid===a.uid):null,Q=(a==null?void 0:a.type)==="room"?n.find(z=>z.uid===a.uid):null,ae=(a==null?void 0:a.type)==="wall"?i.find(z=>z.uid===a.uid):null,de=(a==null?void 0:a.type)==="sketch"?s.find(z=>z.uid===a.uid):null;function Te(z){const W=Ti(z.type),le=yr(W,z),[D,X]=te(z.x,z.z),q=(z.rot||0)*Math.PI/180,Y=Math.cos(q),re=Math.sin(q),xe=le.w*I/2,J=le.d*I/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([oe,F])=>{const he=oe*xe,B=F*J;return[D+he*Y-B*re,X+he*re+B*Y]})}function De(z){return{nw:te(z.x,z.z),ne:te(z.x+z.w,z.z),se:te(z.x+z.w,z.z+z.d),sw:te(z.x,z.z+z.d)}}function Ue(z,W){const[le,D]=_e(z,W);if(j){const X=Te(j);for(let q=0;q<4;q++)if(Math.hypot(z-X[q][0],W-X[q][1])<Vu)return{kind:"item-handle"}}if(Q){const X=De(Q);for(const q in X)if(Math.hypot(z-X[q][0],W-X[q][1])<Vu)return{kind:"room-handle",handle:q}}if(ae)for(const X of["1","2"]){const[q,Y]=te(ae["x"+X],ae["z"+X]);if(Math.hypot(z-q,W-Y)<Vu)return{kind:"wall-end",end:X}}for(let X=r.length-1;X>=0;X--){const q=r[X],Y=Ti(q.type);if(!Y)continue;const re=yr(Y,q),xe=(q.rot||0)*Math.PI/180,J=le-q.x,oe=D-q.z,F=J*Math.cos(xe)+oe*Math.sin(xe),he=-J*Math.sin(xe)+oe*Math.cos(xe);if(Math.abs(F)<=re.w/2+.08&&Math.abs(he)<=re.d/2+.08)return{kind:"item",uid:q.uid}}for(let X=i.length-1;X>=0;X--){const q=i[X];if(ul(le,D,q.x1,q.z1,q.x2,q.z2)<=q.thickness/2+.18)return{kind:"wall",uid:q.uid}}for(let X=s.length-1;X>=0;X--){const q=s[X],Y=q.closed?q.pts.length:q.pts.length-1;for(let re=0;re<Y;re++){const xe=q.pts[re],J=q.pts[(re+1)%q.pts.length];if(ul(le,D,xe.x,xe.z,J.x,J.z)<=.18)return{kind:"sketch",uid:q.uid}}}for(let X=o.length-1;X>=0;X--){const q=o[X],Y=_r(q.wall,n,i);if(!Y)continue;const re=Y.ox+Y.dirx*q.u,xe=Y.oz+Y.dirz*q.u,J=Y.ox+Y.dirx*(q.u+q.w),oe=Y.oz+Y.dirz*(q.u+q.w);if(ul(le,D,re,xe,J,oe)<=.2)return{kind:"opening",uid:q.uid}}for(let X=n.length-1;X>=0;X--){const q=n[X];for(const Y of d0){const[re,xe,J,oe]=Gu(q,Y);if(ul(le,D,re,xe,J,oe)<=.18)return{kind:"roomwall",uid:q.uid,side:Y}}}for(let X=n.length-1;X>=0;X--){const q=n[X];if(le>=q.x&&le<=q.x+q.w&&D>=q.z&&D<=q.z+q.d)return{kind:"room",uid:q.uid}}for(let X=s.length-1;X>=0;X--){const q=s[X];if(q.closed&&q.pts.length>=3&&tM(le,D,q.pts))return{kind:"sketch",uid:q.uid}}return{kind:"empty"}}function He(z){const W=[],le=[];for(const D of n)D.uid!==z&&(W.push(D.x,D.x+D.w),le.push(D.z,D.z+D.d));return{xs:W,zs:le}}function fe(z,W,le=.28){let D=null,X=le;for(const q of W){const Y=Math.abs(z-q);Y<X&&(X=Y,D=q)}return D}const L=(z,W)=>{const le=fe(z,He(W).xs);return le??un(z,d)},we=(z,W)=>{const le=fe(z,He(W).zs);return le??un(z,d)};function be(){const z=[];for(const W of n)z.push({x:W.x,z:W.z},{x:W.x+W.w,z:W.z},{x:W.x,z:W.z+W.d},{x:W.x+W.w,z:W.z+W.d});for(const W of i)z.push({x:W.x1,z:W.z1},{x:W.x2,z:W.z2});return z}function me(z,W,le=.35){let D=null,X=le;for(const q of be()){const Y=Math.hypot(z-q.x,W-q.z);Y<X&&(X=Y,D=q)}return D}function Ae(z,W,le,D){const X=me(le,D);if(X)return{x:X.x,z:X.z};let q=le,Y=D;return Math.abs(q-z)>=Math.abs(Y-W)?Y=W:q=z,{x:L(q),z:we(Y)}}const Be=z=>{const[W,le]=Re(z);if(G.current.set(z.pointerId,{x:W,y:le}),f.current.setPointerCapture(z.pointerId),G.current.size===2){const Y=[...G.current.values()],re=(Y[0].x+Y[1].x)/2,xe=(Y[0].y+Y[1].y)/2,J=Math.hypot(Y[0].x-Y[1].x,Y[0].y-Y[1].y),oe=w.current;_.current={startDist:J,startScale:oe.scale,wmx:(re-oe.panX)/oe.scale,wmy:(xe-oe.panY)/oe.scale},E(null);return}if(G.current.size>2)return;const[D,X]=_e(W,le);if(c==="room"){const Y=L(D),re=we(X);E({kind:"drawRoom",x0:Y,z0:re,cur:{x:Y,z:re,w:0,d:0}});return}if(c==="wall"){const Y=me(D,X),re=Y?Y.x:L(D),xe=Y?Y.z:we(X);E({kind:"drawWall",x1:re,z1:xe,cur:{x1:re,z1:xe,x2:re,z2:xe}});return}if(c==="sketch"){E({kind:"sketch",sx:W,sy:le,panX:w.current.panX,panY:w.current.panY,moved:!1});return}const q=Ue(W,le);switch(q.kind){case"item-handle":E({kind:"resizeItem",uid:j.uid,cxw:j.x,czw:j.z,rot:j.rot||0,c:j.dim||Ti(j.type)});break;case"room-handle":E({kind:"resizeRoom",uid:Q.uid,handle:q.handle,x0:Q.x,z0:Q.z,w0:Q.w,d0:Q.d});break;case"wall-end":E({kind:"wallEnd",uid:ae.uid,end:q.end});break;case"item":{const Y=r.find(re=>re.uid===q.uid);e({type:"select",sel:{type:"item",uid:q.uid}}),E({kind:"moveItem",uid:q.uid,ox:D-Y.x,oz:X-Y.z});break}case"wall":{const Y=i.find(re=>re.uid===q.uid);e({type:"select",sel:{type:"wall",uid:q.uid}}),E({kind:"moveWall",uid:q.uid,ox:D,oz:X,x1:Y.x1,z1:Y.z1,x2:Y.x2,z2:Y.z2});break}case"sketch":{const Y=s.find(re=>re.uid===q.uid);e({type:"select",sel:{type:"sketch",uid:q.uid}}),E({kind:"moveSketch",uid:q.uid,ox:D,oz:X,pts:Y.pts});break}case"opening":e({type:"select",sel:{type:"opening",uid:q.uid}}),E(null);break;case"roomwall":e({type:"select",sel:{type:"roomwall",uid:q.uid,side:q.side}}),E(null);break;case"room":{const Y=n.find(re=>re.uid===q.uid);e({type:"select",sel:{type:"room",uid:q.uid}}),E({kind:"moveRoom",uid:q.uid,ox:D-Y.x,oz:X-Y.z});break}default:E({kind:"pan",sx:W,sy:le,panX:w.current.panX,panY:w.current.panY,moved:!1})}},Ie=z=>{const[W,le]=Re(z);if(G.current.has(z.pointerId)&&G.current.set(z.pointerId,{x:W,y:le}),_.current&&G.current.size>=2){const Y=[...G.current.values()],re=(Y[0].x+Y[1].x)/2,xe=(Y[0].y+Y[1].y)/2,J=Math.hypot(Y[0].x-Y[1].x,Y[0].y-Y[1].y),oe=_.current,F=Zr(oe.startScale*(J/oe.startDist),12,220);P({scale:F,panX:re-oe.wmx*F,panY:xe-oe.wmy*F,init:!0});return}if(c==="sketch"&&G.current.size<=1){const[Y,re]=_e(W,le);M({x:L(Y),z:we(re)})}const D=b.current;if(!D)return;const[X,q]=_e(W,le);if(D.kind==="pan")!D.moved&&Math.hypot(W-D.sx,le-D.sy)>4&&(D.moved=!0),P(Y=>({...Y,panX:D.panX+(W-D.sx),panY:D.panY+(le-D.sy)}));else if(D.kind==="sketch")!D.moved&&Math.hypot(W-D.sx,le-D.sy)>7&&(D.moved=!0),D.moved&&P(Y=>({...Y,panX:D.panX+(W-D.sx),panY:D.panY+(le-D.sy)}));else if(D.kind==="drawRoom"){const Y=L(X),re=we(q);E(xe=>({...xe,cur:{x:Math.min(xe.x0,Y),z:Math.min(xe.z0,re),w:Math.abs(Y-xe.x0),d:Math.abs(re-xe.z0)}}))}else if(D.kind==="drawWall"){const Y=Ae(D.x1,D.z1,X,q);E(re=>({...re,cur:{x1:re.x1,z1:re.z1,x2:Y.x,z2:Y.z}}))}else if(D.kind==="moveItem")e({type:"update",sel:{type:"item",uid:D.uid},patch:{x:un(X-D.ox,u0),z:un(q-D.oz,u0)},mergeKey:`mv:${D.uid}`});else if(D.kind==="resizeItem"){const Y=X-D.cxw,re=q-D.czw,xe=D.rot*Math.PI/180,J=Y*Math.cos(xe)+re*Math.sin(xe),oe=-Y*Math.sin(xe)+re*Math.cos(xe),F=Zr(2*Math.max(.1,Math.abs(J))/D.c.w,.3,3),he=Zr(2*Math.max(.1,Math.abs(oe))/D.c.d,.3,3),B=Zr(Math.sqrt(F*he),.3,3);e({type:"update",sel:{type:"item",uid:D.uid},patch:{scale:{x:F,y:B,z:he}},mergeKey:`sz:${D.uid}`})}else if(D.kind==="moveRoom"){const Y=n.find(J=>J.uid===D.uid);let re=X-D.ox,xe=q-D.oz;if(Y){const{xs:J,zs:oe}=He(D.uid),F=fe(re,J),he=fe(re+Y.w,J);F!=null&&(he==null||Math.abs(re-F)<=Math.abs(re+Y.w-he))?re=F:he!=null?re=he-Y.w:re=un(re,d);const B=fe(xe,oe),K=fe(xe+Y.d,oe);B!=null&&(K==null||Math.abs(xe-B)<=Math.abs(xe+Y.d-K))?xe=B:K!=null?xe=K-Y.d:xe=un(xe,d)}e({type:"update",sel:{type:"room",uid:D.uid},patch:{x:re,z:xe},mergeKey:`mv:${D.uid}`})}else if(D.kind==="resizeRoom"){let Y=D.x0,re=D.z0,xe=D.x0+D.w0,J=D.z0+D.d0;const{xs:oe,zs:F}=He(D.uid),he=K=>{const pe=fe(K,oe);return pe??un(K,d)},B=K=>{const pe=fe(K,F);return pe??un(K,d)};D.handle.includes("e")&&(xe=Math.max(Y+.5,he(X))),D.handle.includes("w")&&(Y=Math.min(xe-.5,he(X))),D.handle.includes("s")&&(J=Math.max(re+.5,B(q))),D.handle.includes("n")&&(re=Math.min(J-.5,B(q))),e({type:"update",sel:{type:"room",uid:D.uid},patch:{x:Y,z:re,w:xe-Y,d:J-re},mergeKey:`rs:${D.uid}`})}else if(D.kind==="moveWall"){const Y=un(X-D.ox,d),re=un(q-D.oz,d);e({type:"update",sel:{type:"wall",uid:D.uid},patch:{x1:D.x1+Y,z1:D.z1+re,x2:D.x2+Y,z2:D.z2+re},mergeKey:`mv:${D.uid}`})}else if(D.kind==="wallEnd"){const Y=D.end==="1"?{x1:un(X,d),z1:un(q,d)}:{x2:un(X,d),z2:un(q,d)};e({type:"update",sel:{type:"wall",uid:D.uid},patch:Y,mergeKey:`we:${D.uid}`})}else if(D.kind==="moveSketch"){const Y=un(X-D.ox,d),re=un(q-D.oz,d);e({type:"update",sel:{type:"sketch",uid:D.uid},patch:{pts:D.pts.map(xe=>({x:xe.x+Y,z:xe.z+re}))},mergeKey:`mv:${D.uid}`})}},N=z=>{const[W,le]=Re(z);G.current.delete(z.pointerId),G.current.size<2&&(_.current=null);const D=b.current;if(D)if(D.kind==="sketch"){if(!D.moved){const[X,q]=_e(W,le),Y={x:L(X),z:we(q)};let re=!1;if(h.length>=3){const[xe,J]=te(h[0].x,h[0].z);Math.hypot(W-xe,le-J)<QS&&(re=!0)}re?(e({type:"addSketch",pts:h,closed:!0}),p([]),M(null),lo(12)):(p(xe=>[...xe,Y]),lo(6))}}else D.kind==="drawRoom"?D.cur.w>.3&&D.cur.d>.3&&e({type:"addRoom",x:D.cur.x,z:D.cur.z,w:D.cur.w,d:D.cur.d,height:u}):D.kind==="drawWall"&&Math.hypot(D.cur.x2-D.cur.x1,D.cur.z2-D.cur.z1)>.2?e({type:"addWall",...D.cur,height:u}):D.kind==="pan"&&!D.moved&&e({type:"select",sel:null});G.current.size===0&&E(null);try{f.current.releasePointerCapture(z.pointerId)}catch{}},T=z=>{(z&&h.length>=3||!z&&h.length>=2)&&(e({type:"addSketch",pts:h,closed:z}),lo(12)),p([]),M(null)};function se(z,W,le,D){const X=[],q=W?z.length:z.length-1;for(let Y=0;Y<q;Y++){const re=z[Y],xe=z[(Y+1)%z.length],J=Math.hypot(xe.x-re.x,xe.z-re.z);if(J<.001)continue;const[oe,F]=te(re.x,re.z),[he,B]=te(xe.x,xe.z);let K=(oe+he)/2,pe=(F+B)/2;const Me=-(B-F),je=he-oe,$e=Math.hypot(Me,je)||1;K+=Me/$e*11,pe+=je/$e*11,X.push(v.jsx("text",{x:K,y:pe+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:le,stroke:"#fff",strokeWidth:3.2,paintOrder:"stroke",strokeLinejoin:"round",fontFamily:"-apple-system, system-ui, sans-serif",children:st(J,l)},`${D}-l${Y}`))}return X}const ve=z=>{const[W,le]=Re(z),D=w.current,X=Zr(D.scale*(z.deltaY<0?1.1:.9),12,220),q=(W-D.panX)/D.scale,Y=(le-D.panY)/D.scale;P({scale:X,panX:W-q*X,panY:le-Y*X,init:!0})},Se=[],ge=[];{const z=l==="ft"?.3048:1,W=I*z;let le=1;W<6&&(le=5),W*le<6&&(le=25);const D=le*5,[X]=_e(0,0),[q]=_e(O,0),[,Y]=_e(0,0),[,re]=_e(0,U),xe=X/z,J=q/z,oe=Y/z,F=re/z,he=l==="ft"?"′":"m";if((J-xe)/le<500){for(let B=Math.ceil(xe/le)*le;B<=J;B+=le){const K=Math.round(B),[pe]=te(K*z,0),Me=K===0,je=K%D===0;Se.push(v.jsx("line",{x1:pe,y1:0,x2:pe,y2:U,stroke:"#000",strokeOpacity:Me?.22:je?.11:.045,strokeWidth:1},`v${K}`)),je&&!Me&&ge.push(v.jsxs("text",{x:pe+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[K,he]},`vl${K}`))}for(let B=Math.ceil(oe/le)*le;B<=F;B+=le){const K=Math.round(B),[,pe]=te(0,K*z),Me=K===0,je=K%D===0;Se.push(v.jsx("line",{x1:0,y1:pe,x2:O,y2:pe,stroke:"#000",strokeOpacity:Me?.22:je?.11:.045,strokeWidth:1},`h${K}`)),je&&!Me&&ge.push(v.jsxs("text",{x:3,y:pe-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[K,he]},`hl${K}`))}}}const Fe=n.length===0&&i.length===0&&r.length===0&&s.length===0&&h.length===0;return v.jsxs("div",{className:"editor2d",ref:m,children:[v.jsxs("svg",{ref:f,onPointerDown:Be,onPointerMove:Ie,onPointerUp:N,onPointerCancel:N,onWheel:ve,style:{touchAction:"none",cursor:c==="select"?"default":"crosshair"},children:[v.jsx("defs",{children:v.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:v.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),v.jsx("rect",{x:0,y:0,width:O,height:U,fill:"transparent"}),v.jsx("g",{pointerEvents:"none",children:Se}),v.jsx("g",{pointerEvents:"none",children:ge}),n.map(z=>{const[W,le]=te(z.x,z.z),D=z.w*I,X=z.d*I,q=eM(z),Y=q.mat?Math.max(10,q.repeat*I):0,re=`fp-${z.uid}`;return v.jsxs("g",{pointerEvents:"none",children:[q.mat&&v.jsx("defs",{children:v.jsxs("pattern",{id:re,patternUnits:"userSpaceOnUse",width:Y,height:Y,patternTransform:`translate(${Z} ${$})`,children:[v.jsx("rect",{width:Y,height:Y,fill:q.color}),v.jsx("image",{href:da(q.mat),width:Y,height:Y,preserveAspectRatio:"xMidYMid slice"})]})}),v.jsx("rect",{x:W,y:le,width:D,height:X,fill:q.mat?`url(#${re})`:q.color}),z.name&&D>46&&X>26&&v.jsx("text",{x:W+D/2,y:le+X/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:12,fontWeight:700,fill:"#33373d",stroke:"#fff",strokeWidth:3,paintOrder:"stroke",strokeLinejoin:"round",letterSpacing:"0.3",fontFamily:"-apple-system, system-ui, sans-serif",children:z.name})]},z.uid)}),n.map(z=>v.jsx("g",{pointerEvents:"none",children:d0.map(W=>{const[le,D,X,q]=Gu(z,W),[Y,re]=te(le,D),[xe,J]=te(X,q),oe=h0(z,W),F=(a==null?void 0:a.type)==="roomwall"&&a.uid===z.uid&&a.side===W;return v.jsx("line",{x1:Y,y1:re,x2:xe,y2:J,stroke:F?Et:oe?c0:KS,strokeWidth:F?6:oe?4:2,strokeLinecap:"round",strokeDasharray:oe?void 0:"7 7"},W)})},z.uid)),Q&&(()=>{const[z,W]=te(Q.x,Q.z),le=Q.w*I;return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("rect",{x:z,y:W,width:le,height:Q.d*I,fill:"none",stroke:Et,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),v.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[v.jsx("rect",{x:z+le/2-78,y:W-25,width:156,height:19,rx:9.5,fill:Et}),v.jsxs("text",{x:z+le/2,y:W-11,textAnchor:"middle",children:[st(Q.w,l)," × ",st(Q.d,l)]})]}),Object.entries(De(Q)).map(([D,[X,q]])=>v.jsx("circle",{cx:X,cy:q,r:7,fill:Et,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},D))]})})(),i.map(z=>{const[W,le]=te(z.x1,z.z1),[D,X]=te(z.x2,z.z2),q=(ae==null?void 0:ae.uid)===z.uid;return v.jsx("line",{x1:W,y1:le,x2:D,y2:X,stroke:q?Et:c0,strokeWidth:Math.max(5,z.thickness*I),strokeLinecap:"round",pointerEvents:"none"},z.uid)}),ae&&(()=>{const[z,W]=te(ae.x1,ae.z1),[le,D]=te(ae.x2,ae.z2);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("circle",{cx:z,cy:W,r:7,fill:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"}),v.jsx("circle",{cx:le,cy:D,r:7,fill:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),o.map(z=>{const W=_r(z.wall,n,i);if(!W)return null;const le=W.ox+W.dirx*z.u,D=W.oz+W.dirz*z.u,X=W.ox+W.dirx*(z.u+z.w),q=W.oz+W.dirz*(z.u+z.w),[Y,re]=te(le,D),[xe,J]=te(X,q),oe=(a==null?void 0:a.type)==="opening"&&a.uid===z.uid;let F=-(J-re),he=xe-Y;const B=Math.hypot(F,he)||1;F=F/B*6,he=he/B*6;const K=oe?Et:"#5f6a78",pe=[v.jsx("line",{x1:Y,y1:re,x2:xe,y2:J,stroke:ZS,strokeWidth:7,strokeLinecap:"butt"},"gap"),v.jsx("line",{x1:Y-F,y1:re-he,x2:Y+F,y2:re+he,stroke:K,strokeWidth:2.5,strokeLinecap:"round"},"j1"),v.jsx("line",{x1:xe-F,y1:J-he,x2:xe+F,y2:J+he,stroke:K,strokeWidth:2.5,strokeLinecap:"round"},"j2")];if(z.kind==="doorway"){const Me=le+W.nx*z.w,je=D+W.nz*z.w,[$e,rt]=te(Me,je),Ge=z.w*I;pe.push(v.jsx("line",{x1:Y,y1:re,x2:$e,y2:rt,stroke:K,strokeWidth:2.5,strokeLinecap:"round"},"leaf")),pe.push(v.jsx("path",{d:`M ${xe} ${J} A ${Ge} ${Ge} 0 0 1 ${$e} ${rt}`,fill:"none",stroke:K,strokeWidth:1.6,strokeDasharray:"4 4"},"arc"))}else z.kind==="window"&&pe.push(v.jsx("line",{x1:Y,y1:re,x2:xe,y2:J,stroke:oe?Et:"#5b86a8",strokeWidth:2.5,strokeLinecap:"round"},"glass"));return v.jsx("g",{pointerEvents:"none",children:pe},z.uid)}),s.map(z=>{const W=(de==null?void 0:de.uid)===z.uid,le=z.pts.map(X=>te(X.x,X.z).join(",")).join(" "),D=W?Et:JS;return v.jsxs("g",{pointerEvents:"none",children:[z.closed?v.jsx("polygon",{points:le,fill:D,fillOpacity:.07,stroke:D,strokeWidth:W?3:2.5,strokeLinejoin:"round"}):v.jsx("polyline",{points:le,fill:"none",stroke:D,strokeWidth:W?3:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),se(z.pts,z.closed,W?"#7a5a16":"#15545f",z.uid),W&&z.pts.map((X,q)=>{const[Y,re]=te(X.x,X.z);return v.jsx("circle",{cx:Y,cy:re,r:5,fill:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"},q)})]},z.uid)}),c==="sketch"&&h.length>0&&(()=>{const z=y?[...h,y]:h,W=z.map(q=>te(q.x,q.z).join(",")).join(" "),[le,D]=te(h[0].x,h[0].z),X=h.length>=3;return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("polyline",{points:W,fill:"none",stroke:Et,strokeWidth:2.5,strokeDasharray:"7 5",strokeLinejoin:"round",strokeLinecap:"round"}),se(z,!1,"#7a5a16","draft"),h.map((q,Y)=>{const[re,xe]=te(q.x,q.z);return v.jsx("circle",{cx:re,cy:xe,r:Y===0?6:4.5,fill:Y===0?Et:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"},Y)}),X&&v.jsx("circle",{cx:le,cy:D,r:11,fill:"none",stroke:Et,strokeWidth:2,strokeDasharray:"3 3"})]})})(),r.map(z=>{const W=Ti(z.type);if(!W)return null;const[le,D]=te(z.x,z.z),X=yr(W,z),q=X.w*I,Y=X.d*I,re=(j==null?void 0:j.uid)===z.uid;return v.jsxs("g",{transform:`translate(${le} ${D}) rotate(${z.rot||0})`,pointerEvents:"none",children:[v.jsx("g",{filter:"url(#softshadow)",opacity:W.shape==="rug"||W.shape==="round-rug"?.96:1,children:v.jsx(Yx,{item:{...W,color:z.color||W.color},wpx:q,dpx:Y})}),re&&v.jsx("rect",{x:-q/2-5,y:-Y/2-5,width:q+10,height:Y+10,rx:7,fill:"none",stroke:Et,strokeWidth:2,strokeDasharray:"6 5"})]},z.uid)}),(A==null?void 0:A.kind)==="drawRoom"&&(()=>{const[z,W]=te(A.cur.x,A.cur.z);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("rect",{x:z,y:W,width:A.cur.w*I,height:A.cur.d*I,fill:Et,fillOpacity:.12,stroke:Et,strokeWidth:3,strokeDasharray:"6 5"}),v.jsxs("text",{x:z+A.cur.w*I/2,y:W-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[st(A.cur.w,l)," × ",st(A.cur.d,l)]})]})})(),(A==null?void 0:A.kind)==="drawWall"&&(()=>{const[z,W]=te(A.cur.x1,A.cur.z1),[le,D]=te(A.cur.x2,A.cur.z2),X=Math.hypot(A.cur.x2-A.cur.x1,A.cur.z2-A.cur.z1);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("line",{x1:z,y1:W,x2:le,y2:D,stroke:Et,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),v.jsx("text",{x:(z+le)/2,y:(W+D)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:st(X,l)})]})})(),j&&(()=>{const z=Te(j),W=Ti(j.type),le=yr(W,j),[D,X]=te(j.x,j.z),q=Math.hypot(le.w*I,le.d*I)/2;return v.jsxs("g",{pointerEvents:"none",children:[z.map(([Y,re],xe)=>v.jsx("circle",{cx:Y,cy:re,r:7,fill:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"},xe)),v.jsx("rect",{x:D-78,y:X-q-30,width:156,height:20,rx:10,fill:Et}),v.jsxs("text",{x:D,y:X-q-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[st(le.w,l)," × ",st(le.d,l)]})]})})(),(a==null?void 0:a.type)==="roomwall"&&(()=>{const z=n.find(F=>F.uid===a.uid);if(!z)return null;const[W,le,D,X]=Gu(z,a.side),[q,Y]=te(W,le),[re,xe]=te(D,X),J=Math.hypot(D-W,X-le),oe=h0(z,a.side);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("circle",{cx:q,cy:Y,r:6,fill:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"}),v.jsx("circle",{cx:re,cy:xe,r:6,fill:"#fff",stroke:Et,strokeWidth:2.5,filter:"url(#softshadow)"}),v.jsx("rect",{x:(q+re)/2-60,y:(Y+xe)/2-11,width:120,height:20,rx:10,fill:Et}),v.jsx("text",{x:(q+re)/2,y:(Y+xe)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:oe?st(J,l):"opening"})]})})()]}),v.jsx("button",{className:"recenter",onClick:V,"aria-label":"Fit to view",children:v.jsx(qx,{size:20})}),c==="sketch"&&h.length>0&&v.jsxs("div",{className:"sketch-bar",children:[v.jsx("button",{onClick:()=>p(z=>z.slice(0,-1)),title:"Undo last point",children:v.jsx(Kx,{size:17})}),v.jsxs("button",{onClick:()=>T(!1),disabled:h.length<2,title:"Finish open line",children:[v.jsx(l0,{size:18})," Finish"]}),v.jsxs("button",{className:"accent",onClick:()=>T(!0),disabled:h.length<3,title:"Close shape",children:[v.jsx(l0,{size:18})," Close shape"]}),v.jsx("button",{onClick:()=>{p([]),M(null)},title:"Cancel",children:v.jsx(BS,{size:17})})]}),Fe&&v.jsxs("div",{className:"empty",children:[v.jsx("b",{children:"Start your floor plan"}),v.jsxs("span",{children:["Pick ",v.jsx("strong",{children:"Room"})," and drag, or use ",v.jsx("strong",{children:"Sketch"})," to free-draw any space with live measurements — or just tap to drop a room."]}),v.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:L(-1.8),z:we(-1.5),w:3.6,d:3,height:u}),children:"+ Add a room"})]}),v.jsx("div",{className:"hint",children:c==="room"?"Drag to draw a room":c==="wall"?"Drag to draw a wall":c==="sketch"?"Tap to drop points — each edge is measured · tap the first point to close · drag to pan":j?"Drag to move · drag white corners to resize":Q?"Drag inside to move · corners to resize · tap a wall to edit it":ae?"Drag the wall or its endpoints":de?"Drag to move this sketch · edit dimensions in the panel":(a==null?void 0:a.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gp="169",co={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iM=0,f0=1,rM=2,Jx=1,Qx=2,Gi=3,Or=0,_n=1,xn=2,tn=0,uo=1,p0=2,m0=3,g0=4,$x=5,gi=100,sM=101,oM=102,aM=103,lM=104,ea=200,cM=201,uM=202,dM=203,Th=204,Ah=205,bh=206,hM=207,Ch=208,fM=209,pM=210,mM=211,gM=212,vM=213,xM=214,Rh=0,Ph=1,Lh=2,So=3,Dh=4,Nh=5,Ih=6,Uh=7,ey=0,yM=1,_M=2,Nr=0,ty=1,ny=2,iy=3,vp=4,SM=5,ry=6,sy=7,oy=300,Mo=301,wo=302,Uc=303,Oh=304,ru=306,Cn=1e3,Ki=1001,zh=1002,Jt=1003,MM=1004,dl=1005,nn=1006,Wu=1007,Er=1008,Ii=1009,ay=1010,ly=1011,Da=1012,xp=1013,cs=1014,ei=1015,Pn=1016,yp=1017,_p=1018,us=1020,cy=35902,uy=1021,dy=1022,ti=1023,hy=1024,fy=1025,ho=1026,ds=1027,py=1028,Sp=1029,my=1030,Mp=1031,wp=1033,nc=33776,ic=33777,rc=33778,sc=33779,Fh=35840,kh=35841,Bh=35842,Hh=35843,Vh=36196,Gh=37492,Wh=37496,jh=37808,Xh=37809,Yh=37810,qh=37811,Kh=37812,Zh=37813,Jh=37814,Qh=37815,$h=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,oc=36492,of=36494,af=36495,gy=36283,lf=36284,cf=36285,uf=36286,wM=3200,EM=3201,Ep=0,TM=1,Sr="",fn="srgb",ir="srgb-linear",Tp="display-p3",su="display-p3-linear",Oc="linear",xt="srgb",zc="rec709",Fc="p3",Ms=7680,v0=519,AM=512,bM=513,CM=514,vy=515,RM=516,PM=517,LM=518,DM=519,x0=35044,y0="300 es",Zi=2e3,kc=2001;class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,df=180/Math.PI;function Ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function NM(t,e){return(t%e+e)%e}function ju(t,e,n){return(1-n)*t+n*e}function Bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const IM={DEG2RAD:ac};class Ee{constructor(e=0,n=0){Ee.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],y=i[8],M=r[0],m=r[3],f=r[6],g=r[1],x=r[4],S=r[7],P=r[2],A=r[5],E=r[8];return s[0]=o*M+a*g+l*P,s[3]=o*m+a*x+l*A,s[6]=o*f+a*S+l*E,s[1]=c*M+u*g+d*P,s[4]=c*m+u*x+d*A,s[7]=c*f+u*S+d*E,s[2]=h*M+p*g+y*P,s[5]=h*m+p*x+y*A,s[8]=h*f+p*S+y*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,y=n*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xu.makeScale(e,n)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new it;function xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UM(){const t=Na("canvas");return t.style.display="block",t}const _0={};function lc(t){t in _0||(_0[t]=!0,console.warn(t))}function OM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function zM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const S0=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),M0=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[ir]:{transfer:Oc,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[fn]:{transfer:xt,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[su]:{transfer:Oc,primaries:Fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(M0),fromReference:t=>t.applyMatrix3(S0)},[Tp]:{transfer:xt,primaries:Fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(M0),fromReference:t=>t.applyMatrix3(S0).convertLinearToSRGB()}},kM=new Set([ir,su]),ut={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!kM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ho[e].toReference,r=Ho[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ho[t].primaries},getTransfer:function(t){return t===Sr?Oc:Ho[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ho[e].luminanceCoefficients)}};function fo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class BM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Na("canvas")),ws.width=e.width,ws.height=e.height;const i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fo(n[i]/255)*255):n[i]=fo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HM=0;class yy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qu(r[o].image)):s.push(qu(r[o]))}else s=qu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;class Wt extends vs{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=Ki,r=Ki,s=nn,o=Er,a=ti,l=Ii,c=Wt.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ro(),this.name="",this.source=new yy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=oy;Wt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],y=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,P=(f+1)/2,A=(u+h)/4,E=(d+M)/4,b=(y+m)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-y)*(m-y)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(d-M)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GM extends vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends GM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _y extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=M;return}if(d!==M||l!==h||c!==p||u!==y){let m=1-a;const f=l*h+c*p+u*y+d*M,g=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,f*g);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const S=a*g;if(l=l*m+h*S,c=c*m+p*S,u=u*m+y*S,d=d*m+M*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+u*d+l*p-c*h,e[n+1]=l*y+u*h+c*d-a*p,e[n+2]=c*y+u*p+a*h-l*d,e[n+3]=u*y-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"YXZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"ZXY":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"ZYX":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"YZX":this._x=h*u*d+c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d-h*p*y;break;case"XZY":this._x=h*u*d-c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(w0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(w0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ku=new H,w0=new hs;class Ga{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),fl.subVectors(this.max,Vo),Es.subVectors(e.a,Vo),Ts.subVectors(e.b,Vo),As.subVectors(e.c,Vo),lr.subVectors(Ts,Es),cr.subVectors(As,Ts),Vr.subVectors(Es,As);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Vr.z,Vr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Vr.z,0,-Vr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Vr.y,Vr.x,0];return!Zu(n,Es,Ts,As,fl)||(n=[1,0,0,0,1,0,0,0,1],!Zu(n,Es,Ts,As,fl))?!1:(pl.crossVectors(lr,cr),n=[pl.x,pl.y,pl.z],Zu(n,Es,Ts,As,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new H,new H,new H,new H,new H,new H,new H,new H],ci=new H,hl=new Ga,Es=new H,Ts=new H,As=new H,lr=new H,cr=new H,Vr=new H,Vo=new H,fl=new H,pl=new H,Gr=new H;function Zu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Gr.fromArray(t,s);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),l=e.dot(Gr),c=n.dot(Gr),u=i.dot(Gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jM=new Ga,Go=new H,Ju=new H;class Ap{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Ju)),this.expandByPoint(Go.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new H,Qu=new H,ml=new H,ur=new H,$u=new H,gl=new H,ed=new H;class bp{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qu.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Qu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ml),a=ur.dot(this.direction),l=-ur.dot(ml),c=ur.lengthSq(),u=Math.abs(1-o*o);let d,h,p,y;if(u>0)if(d=o*l-a,h=o*a-l,y=s*u,d>=0)if(h>=-y)if(h<=y){const M=1/u;d*=M,h*=M,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qu).addScaledVector(ml,h),p}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){$u.subVectors(n,e),gl.subVectors(i,e),ed.crossVectors($u,gl);let o=this.direction.dot(ed),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(gl.crossVectors(ur,gl));if(l<0)return null;const c=a*this.direction.dot($u.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(ed);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,y,M,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,y,M,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,y,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=y,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,y=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,y=c*u,M=c*d;n[0]=h+M*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-y,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,y=c*u,M=c*d;n[0]=h-M*a,n[4]=-o*d,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*u,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,y=a*u,M=a*d;n[0]=l*u,n[4]=y*c-p,n[8]=h*c+M,n[1]=l*d,n[5]=M*c+h,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,y=a*l,M=a*c;n[0]=l*u,n[4]=M-h*d,n[8]=y*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+y,n[10]=h-M*d}else if(e.order==="XZY"){const h=o*l,p=o*c,y=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+M,n[5]=o*u,n[9]=p*d-y,n[2]=y*d-p,n[6]=a*u,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XM,e,YM)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),dr.crossVectors(i,Fn),dr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),dr.crossVectors(i,Fn)),dr.normalize(),vl.crossVectors(Fn,dr),r[0]=dr.x,r[4]=vl.x,r[8]=Fn.x,r[1]=dr.y,r[5]=vl.y,r[9]=Fn.y,r[2]=dr.z,r[6]=vl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],y=i[2],M=i[6],m=i[10],f=i[14],g=i[3],x=i[7],S=i[11],P=i[15],A=r[0],E=r[4],b=r[8],G=r[12],_=r[1],w=r[5],C=r[9],O=r[13],U=r[2],V=r[6],k=r[10],ne=r[14],I=r[3],Z=r[7],$=r[11],te=r[15];return s[0]=o*A+a*_+l*U+c*I,s[4]=o*E+a*w+l*V+c*Z,s[8]=o*b+a*C+l*k+c*$,s[12]=o*G+a*O+l*ne+c*te,s[1]=u*A+d*_+h*U+p*I,s[5]=u*E+d*w+h*V+p*Z,s[9]=u*b+d*C+h*k+p*$,s[13]=u*G+d*O+h*ne+p*te,s[2]=y*A+M*_+m*U+f*I,s[6]=y*E+M*w+m*V+f*Z,s[10]=y*b+M*C+m*k+f*$,s[14]=y*G+M*O+m*ne+f*te,s[3]=g*A+x*_+S*U+P*I,s[7]=g*E+x*w+S*V+P*Z,s[11]=g*b+x*C+S*k+P*$,s[15]=g*G+x*O+S*ne+P*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],y=e[3],M=e[7],m=e[11],f=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+M*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],y=e[12],M=e[13],m=e[14],f=e[15],g=d*m*c-M*h*c+M*l*p-a*m*p-d*l*f+a*h*f,x=y*h*c-u*m*c-y*l*p+o*m*p+u*l*f-o*h*f,S=u*M*c-y*d*c+y*a*p-o*M*p-u*a*f+o*d*f,P=y*d*l-u*M*l-y*a*h+o*M*h+u*a*m-o*d*m,A=n*g+i*x+r*S+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=g*E,e[1]=(M*h*s-d*m*s-M*r*p+i*m*p+d*r*f-i*h*f)*E,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*f+i*l*f)*E,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(u*m*s-y*h*s+y*r*p-n*m*p-u*r*f+n*h*f)*E,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*f-n*l*f)*E,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*E,e[8]=S*E,e[9]=(y*d*s-u*M*s-y*i*p+n*M*p+u*i*f-n*d*f)*E,e[10]=(o*M*s-y*a*s+y*i*c-n*M*c-o*i*f+n*a*f)*E,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*E,e[12]=P*E,e[13]=(u*M*r-y*d*r+y*i*h-n*M*h-u*i*m+n*d*m)*E,e[14]=(y*a*r-o*M*r-y*i*l+n*M*l+o*i*m-n*a*m)*E,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,y=s*d,M=o*u,m=o*d,f=a*d,g=l*c,x=l*u,S=l*d,P=i.x,A=i.y,E=i.z;return r[0]=(1-(M+f))*P,r[1]=(p+S)*P,r[2]=(y-x)*P,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(y+x)*E,r[9]=(m-g)*E,r[10]=(1-(h+M))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=bs.set(r[0],r[1],r[2]).length();const o=bs.set(r[4],r[5],r[6]).length(),a=bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);const c=1/s,u=1/o,d=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,n.setFromRotationMatrix(ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Zi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,y;if(a===Zi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===kc)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Zi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let y,M;if(a===Zi)y=(o+s)*d,M=-2*d;else if(a===kc)y=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bs=new H,ui=new lt,XM=new H(0,0,0),YM=new H(1,1,1),dr=new H,vl=new H,Fn=new H,E0=new lt,T0=new hs;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return T0.setFromEuler(this),this.setFromQuaternion(T0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qM=0;const A0=new H,Cs=new hs,Fi=new lt,xl=new H,Wo=new H,KM=new H,ZM=new hs,b0=new H(1,0,0),C0=new H(0,1,0),R0=new H(0,0,1),P0={type:"added"},JM={type:"removed"},Rs={type:"childadded",child:null},td={type:"childremoved",child:null};class on extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new H,n=new Mi,i=new hs,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new it}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(R0,e)}translateOnAxis(e,n){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(R0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xl.copy(e):xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Wo,xl,this.up):Fi.lookAt(xl,Wo,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JM),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new H(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new H,ki=new H,nd=new H,Bi=new H,Ps=new H,Ls=new H,L0=new H,id=new H,rd=new H,sd=new H,od=new vt,ad=new vt,ld=new vt;class vi{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),ki.subVectors(i,n),nd.subVectors(e,n);const o=di.dot(di),a=di.dot(ki),l=di.dot(nd),c=ki.dot(ki),u=ki.dot(nd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,y=(o*u-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return od.setScalar(0),ad.setScalar(0),ld.setScalar(0),od.fromBufferAttribute(e,n),ad.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(od,s.x),o.addScaledVector(ad,s.y),o.addScaledVector(ld,s.z),o}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),ki.subVectors(e,n),di.cross(ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),di.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ps.subVectors(r,i),Ls.subVectors(s,i),id.subVectors(e,i);const l=Ps.dot(id),c=Ls.dot(id);if(l<=0&&c<=0)return n.copy(i);rd.subVectors(e,r);const u=Ps.dot(rd),d=Ls.dot(rd);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ps,o);sd.subVectors(e,s);const p=Ps.dot(sd),y=Ls.dot(sd);if(y>=0&&p<=y)return n.copy(s);const M=p*c-l*y;if(M<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Ls,a);const m=u*y-p*d;if(m<=0&&d-u>=0&&p-y>=0)return L0.subVectors(s,r),a=(d-u)/(d-u+(p-y)),n.copy(r).addScaledVector(L0,a);const f=1/(m+M+h);return o=M*f,a=h*f,n.copy(i).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=NM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=cd(o,s,e+1/3),this.g=cd(o,s,e),this.b=cd(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){const i=Sy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=Yu(e.r),this.g=Yu(e.g),this.b=Yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ut.fromWorkingColorSpace(hn.copy(this),e),Math.round(Zt(hn.r*255,0,255))*65536+Math.round(Zt(hn.g*255,0,255))*256+Math.round(Zt(hn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(hn.copy(this),n);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=fn){ut.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,r=hn.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(yl);const i=ju(hr.h,yl.h,n),r=ju(hr.s,yl.s,n),s=ju(hr.l,yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ze;Ze.NAMES=Sy;let QM=0;class Po extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=uo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Th&&(i.blendSrc=this.blendSrc),this.blendDst!==Ah&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ia extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xi=$M();function $M(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function ew(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Zt(t,-65504,65504),Xi.floatView[0]=t;const e=Xi.uint32View[0],n=e>>23&511;return Xi.baseTable[n]+((e&8388607)>>Xi.shiftTable[n])}function tw(t){const e=t>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(t&1023)]+Xi.exponentTable[e],Xi.floatView[0]}const _l={toHalfFloat:ew,fromHalfFloat:tw},Ot=new H,Sl=new Ee;class Di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=x0,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x0&&(e.usage=this.usage),e}}class My extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wy extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _t extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let nw=0;const Zn=new lt,ud=new on,Ds=new H,kn=new Ga,jo=new Ga,Yt=new H;class In extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?wy:My)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(kn.min,jo.min),kn.expandByPoint(Yt),Yt.addVectors(kn.max,jo.max),kn.expandByPoint(Yt)):(kn.expandByPoint(jo.min),kn.expandByPoint(jo.max))}kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Yt.add(Ds)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new H,l[b]=new H;const c=new H,u=new H,d=new H,h=new Ee,p=new Ee,y=new Ee,M=new H,m=new H;function f(b,G,_){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,G),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,G),y.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),y.sub(h);const w=1/(p.x*y.y-y.x*p.y);isFinite(w)&&(M.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(w),a[b].add(M),a[G].add(M),a[_].add(M),l[b].add(m),l[G].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,G=g.length;b<G;++b){const _=g[b],w=_.start,C=_.count;for(let O=w,U=w+C;O<U;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new H,S=new H,P=new H,A=new H;function E(b){P.fromBufferAttribute(r,b),A.copy(P);const G=a[b];x.copy(G),x.sub(P.multiplyScalar(P.dot(G))).normalize(),S.crossVectors(A,G);const w=S.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,w)}for(let b=0,G=g.length;b<G;++b){const _=g[b],w=_.start,C=_.count;for(let O=w,U=w+C;O<U;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,y=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)h[y++]=c[p++]}return new Di(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new In,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D0=new lt,Wr=new bp,Ml=new Ap,N0=new H,wl=new H,El=new H,Tl=new H,dd=new H,Al=new H,I0=new H,bl=new H;class et extends on{constructor(e=new In,n=new Ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(dd.fromBufferAttribute(d,e),o?Al.addScaledVector(dd,u):Al.addScaledVector(dd.sub(n),u))}n.add(Al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Ml,N0)===null||Wr.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(D0.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(D0),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,M=h.length;y<M;y++){const m=h[y],f=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=x;S<P;S+=3){const A=a.getX(S),E=a.getX(S+1),b=a.getX(S+2);r=Cl(this,f,e,i,c,u,d,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=y,f=M;m<f;m+=3){const g=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Cl(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,M=h.length;y<M;y++){const m=h[y],f=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=x;S<P;S+=3){const A=S,E=S+1,b=S+2;r=Cl(this,f,e,i,c,u,d,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=y,f=M;m<f;m+=3){const g=m,x=m+1,S=m+2;r=Cl(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function iw(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;bl.copy(a),bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bl);return c<n.near||c>n.far?null:{distance:c,point:bl.clone(),object:t}}function Cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,wl),t.getVertexPosition(l,El),t.getVertexPosition(c,Tl);const u=iw(t,e,n,i,wl,El,Tl,I0);if(u){const d=new H;vi.getBarycoord(I0,wl,El,Tl,d),r&&(u.uv=vi.getInterpolatedAttribute(r,a,l,c,d,new Ee)),s&&(u.uv1=vi.getInterpolatedAttribute(s,a,l,c,d,new Ee)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};vi.getNormal(wl,El,Tl,h.normal),u.face=h,u.barycoord=d}return u}class ii extends In{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function y(M,m,f,g,x,S,P,A,E,b,G){const _=S/E,w=P/b,C=S/2,O=P/2,U=A/2,V=E+1,k=b+1;let ne=0,I=0;const Z=new H;for(let $=0;$<k;$++){const te=$*w-O;for(let _e=0;_e<V;_e++){const Re=_e*_-C;Z[M]=Re*g,Z[m]=te*x,Z[f]=U,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[m]=0,Z[f]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(_e/E),d.push(1-$/b),ne+=1}}for(let $=0;$<b;$++)for(let te=0;te<E;te++){const _e=h+te+V*$,Re=h+te+V*($+1),j=h+(te+1)+V*($+1),Q=h+(te+1)+V*$;l.push(_e,Re,Q),l.push(Re,j,Q),I+=6}a.addGroup(p,I,G),p+=I,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=Eo(t[n]);for(const r in i)e[r]=i[r]}return e}function rw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ey(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const xi={clone:Eo,merge:gn};var sw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sw,this.fragmentShader=ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=rw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ty extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new H,U0=new Ee,O0=new Ee;class Vn extends Ty{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=df*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return df*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,U0,O0),n.subVectors(O0,U0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Is=1;class aw extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(Ns,Is,e,n);r.layers=this.layers,this.add(r);const s=new Vn(Ns,Is,e,n);s.layers=this.layers,this.add(s);const o=new Vn(Ns,Is,e,n);o.layers=this.layers,this.add(o);const a=new Vn(Ns,Is,e,n);a.layers=this.layers,this.add(a);const l=new Vn(Ns,Is,e,n);l.layers=this.layers,this.add(l);const c=new Vn(Ns,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ay extends Wt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Mo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lw extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ay(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ii(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:tn});s.uniforms.tEquirect.value=n;const o=new et(r,s),a=n.minFilter;return n.minFilter===Er&&(n.minFilter=nn),new aw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const hd=new H,cw=new H,uw=new it;class Ai{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hd.subVectors(i,n).cross(cw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uw.getNormalMatrix(e),r=this.coplanarPoint(hd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Ap,Rl=new H;class Rp{constructor(e=new Ai,n=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],y=r[9],M=r[10],m=r[11],f=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-f).normalize(),i[1].setComponents(l+s,h+c,m+p,S+f).normalize(),i[2].setComponents(l+o,h+u,m+y,S+g).normalize(),i[3].setComponents(l-o,h-u,m-y,S-g).normalize(),i[4].setComponents(l-a,h-d,m-M,S-x).normalize(),n===Zi)i[5].setComponents(l+a,h+d,m+M,S+x).normalize();else if(n===kc)i[5].setComponents(a,d,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function by(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<d.length;p++){const y=d[h],M=d[p];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,y=d.length;p<y;p++){const M=d[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ni extends In{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],y=[],M=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let x=0;x<c;x++){const S=x*d-s;y.push(S,-g,0),M.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const x=g+c*f,S=g+c*(f+1),P=g+1+c*(f+1),A=g+1+c*f;p.push(x,S,A),p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_w=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ww=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ew=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Aw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ow=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$w=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:hw,alphahash_pars_fragment:fw,alphamap_fragment:pw,alphamap_pars_fragment:mw,alphatest_fragment:gw,alphatest_pars_fragment:vw,aomap_fragment:xw,aomap_pars_fragment:yw,batching_pars_vertex:_w,batching_vertex:Sw,begin_vertex:Mw,beginnormal_vertex:ww,bsdfs:Ew,iridescence_fragment:Tw,bumpmap_pars_fragment:Aw,clipping_planes_fragment:bw,clipping_planes_pars_fragment:Cw,clipping_planes_pars_vertex:Rw,clipping_planes_vertex:Pw,color_fragment:Lw,color_pars_fragment:Dw,color_pars_vertex:Nw,color_vertex:Iw,common:Uw,cube_uv_reflection_fragment:Ow,defaultnormal_vertex:zw,displacementmap_pars_vertex:Fw,displacementmap_vertex:kw,emissivemap_fragment:Bw,emissivemap_pars_fragment:Hw,colorspace_fragment:Vw,colorspace_pars_fragment:Gw,envmap_fragment:Ww,envmap_common_pars_fragment:jw,envmap_pars_fragment:Xw,envmap_pars_vertex:Yw,envmap_physical_pars_fragment:rE,envmap_vertex:qw,fog_vertex:Kw,fog_pars_vertex:Zw,fog_fragment:Jw,fog_pars_fragment:Qw,gradientmap_pars_fragment:$w,lightmap_pars_fragment:eE,lights_lambert_fragment:tE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:sE,lights_toon_pars_fragment:oE,lights_phong_fragment:aE,lights_phong_pars_fragment:lE,lights_physical_fragment:cE,lights_physical_pars_fragment:uE,lights_fragment_begin:dE,lights_fragment_maps:hE,lights_fragment_end:fE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:yE,map_particle_fragment:_E,map_particle_pars_fragment:SE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:wE,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:bE,morphtarget_vertex:CE,normal_fragment_begin:RE,normal_fragment_maps:PE,normal_pars_fragment:LE,normal_pars_vertex:DE,normal_vertex:NE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:FE,opaque_fragment:kE,packing:BE,premultiplied_alpha_fragment:HE,project_vertex:VE,dithering_fragment:GE,dithering_pars_fragment:WE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:qE,shadowmap_vertex:KE,shadowmask_pars_fragment:ZE,skinbase_vertex:JE,skinning_pars_vertex:QE,skinning_vertex:$E,skinnormal_vertex:e2,specularmap_fragment:t2,specularmap_pars_fragment:n2,tonemapping_fragment:i2,tonemapping_pars_fragment:r2,transmission_fragment:s2,transmission_pars_fragment:o2,uv_pars_fragment:a2,uv_pars_vertex:l2,uv_vertex:c2,worldpos_vertex:u2,background_vert:d2,background_frag:h2,backgroundCube_vert:f2,backgroundCube_frag:p2,cube_vert:m2,cube_frag:g2,depth_vert:v2,depth_frag:x2,distanceRGBA_vert:y2,distanceRGBA_frag:_2,equirect_vert:S2,equirect_frag:M2,linedashed_vert:w2,linedashed_frag:E2,meshbasic_vert:T2,meshbasic_frag:A2,meshlambert_vert:b2,meshlambert_frag:C2,meshmatcap_vert:R2,meshmatcap_frag:P2,meshnormal_vert:L2,meshnormal_frag:D2,meshphong_vert:N2,meshphong_frag:I2,meshphysical_vert:U2,meshphysical_frag:O2,meshtoon_vert:z2,meshtoon_frag:F2,points_vert:k2,points_frag:B2,shadow_vert:H2,shadow_frag:V2,sprite_vert:G2,sprite_frag:W2},Oe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},bi={basic:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:gn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:gn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:gn([Oe.points,Oe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:gn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:gn([Oe.common,Oe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:gn([Oe.sprite,Oe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:gn([Oe.common,Oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:gn([Oe.lights,Oe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};bi.physical={uniforms:gn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Pl={r:0,b:0,g:0},Xr=new Mi,j2=new lt;function X2(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function y(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function M(g){let x=!1;const S=y(g);S===null?f(a,l):S&&S.isColor&&(f(S,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const S=y(x);S&&(S.isCubeTexture||S.mapping===ru)?(u===void 0&&(u=new et(new ii(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Eo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xr.copy(x.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j2.makeRotationFromEuler(Xr)),u.material.toneMapped=ut.getTransfer(S.colorSpace)!==xt,(d!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new et(new Ni(2,2),new Vt({name:"BackgroundMaterial",uniforms:Eo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ut.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,x){g.getRGB(Pl,Ey(t)),i.buffers.color.setClear(Pl.r,Pl.g,Pl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:M,addToRenderList:m}}function Y2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(_,w,C,O,U){let V=!1;const k=d(O,C,w);s!==k&&(s=k,c(s.object)),V=p(_,O,C,U),V&&y(_,O,C,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(_,w,C,O),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,w,C){const O=C.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let V=U[w.id];V===void 0&&(V={},U[w.id]=V);let k=V[O];return k===void 0&&(k=h(l()),V[O]=k),k}function h(_){const w=[],C=[],O=[];for(let U=0;U<n;U++)w[U]=0,C[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,w,C,O){const U=s.attributes,V=w.attributes;let k=0;const ne=C.getAttributes();for(const I in ne)if(ne[I].location>=0){const $=U[I];let te=V[I];if(te===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),$===void 0||$.attribute!==te||te&&$.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function y(_,w,C,O){const U={},V=w.attributes;let k=0;const ne=C.getAttributes();for(const I in ne)if(ne[I].location>=0){let $=V[I];$===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&($=_.instanceColor));const te={};te.attribute=$,$&&$.data&&(te.data=$.data),U[I]=te,k++}s.attributes=U,s.attributesNum=k,s.index=O}function M(){const _=s.newAttributes;for(let w=0,C=_.length;w<C;w++)_[w]=0}function m(_){f(_,0)}function f(_,w){const C=s.newAttributes,O=s.enabledAttributes,U=s.attributeDivisors;C[_]=1,O[_]===0&&(t.enableVertexAttribArray(_),O[_]=1),U[_]!==w&&(t.vertexAttribDivisor(_,w),U[_]=w)}function g(){const _=s.newAttributes,w=s.enabledAttributes;for(let C=0,O=w.length;C<O;C++)w[C]!==_[C]&&(t.disableVertexAttribArray(C),w[C]=0)}function x(_,w,C,O,U,V,k){k===!0?t.vertexAttribIPointer(_,w,C,U,V):t.vertexAttribPointer(_,w,C,O,U,V)}function S(_,w,C,O){M();const U=O.attributes,V=C.getAttributes(),k=w.defaultAttributeValues;for(const ne in V){const I=V[ne];if(I.location>=0){let Z=U[ne];if(Z===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const $=Z.normalized,te=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;const Re=_e.buffer,j=_e.type,Q=_e.bytesPerElement,ae=j===t.INT||j===t.UNSIGNED_INT||Z.gpuType===xp;if(Z.isInterleavedBufferAttribute){const de=Z.data,Te=de.stride,De=Z.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<I.locationSize;Ue++)f(I.location+Ue,de.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<I.locationSize;Ue++)m(I.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Ue=0;Ue<I.locationSize;Ue++)x(I.location+Ue,te/I.locationSize,j,$,Te*Q,(De+te/I.locationSize*Ue)*Q,ae)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<I.locationSize;de++)f(I.location+de,Z.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<I.locationSize;de++)m(I.location+de);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let de=0;de<I.locationSize;de++)x(I.location+de,te/I.locationSize,j,$,te*Q,te/I.locationSize*de*Q,ae)}}else if(k!==void 0){const $=k[ne];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(I.location,$);break;case 3:t.vertexAttrib3fv(I.location,$);break;case 4:t.vertexAttrib4fv(I.location,$);break;default:t.vertexAttrib1fv(I.location,$)}}}}g()}function P(){b();for(const _ in i){const w=i[_];for(const C in w){const O=w[C];for(const U in O)u(O[U].object),delete O[U];delete w[C]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const C in w){const O=w[C];for(const U in O)u(O[U].object),delete O[U];delete w[C]}delete i[_.id]}function E(_){for(const w in i){const C=i[w];if(C[_.id]===void 0)continue;const O=C[_.id];for(const U in O)u(O[U].object),delete O[U];delete C[_.id]}}function b(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function q2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],u[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let y=0;for(let M=0;M<d;M++)y+=u[M];for(let M=0;M<h.length;M++)n.update(y,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function K2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ti&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ii&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ei&&!b)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:P,maxSamples:A}}function Z2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ai,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||y===null||y.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,x=g*4;let S=f.clippingState||null;l.value=S,S=u(y,h,x,p);for(let P=0;P!==x;++P)S[P]=n[P];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,y){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,y!==!0||m===null){const f=p+M*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==M;++x,S+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function J2(t){let e=new WeakMap;function n(o,a){return a===Uc?o.mapping=Mo:a===Oh&&(o.mapping=wo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uc||a===Oh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pp extends Ty{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const eo=4,z0=[.125,.215,.35,.446,.526,.582],Qr=20,fd=new Pp,F0=new Ze;let pd=null,md=0,gd=0,vd=!1;const Jr=(1+Math.sqrt(5))/2,Us=1/Jr,k0=[new H(-Jr,Us,0),new H(Jr,Us,0),new H(-Us,0,Jr),new H(Us,0,Jr),new H(0,Jr,-Us),new H(0,Jr,Us),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=vd,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Mo||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Pn,format:ti,colorSpace:ir,depthBuffer:!1},r=B0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q2(s)),this._blurMaterial=$2(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,fd)}_sceneToCubeUV(e,n,i,r){const a=new Vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(F0),u.toneMapping=Nr,u.autoClear=!1;const p=new Ia({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),y=new et(new ii,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(F0),M=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Ll(r,g*x,f>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Mo||e.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,fd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=k0[(r-s-1)%k0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new et(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),M=s/y,m=isFinite(s)?1+Math.floor(u*M):Qr;m>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const f=[];let g=0;for(let E=0;E<Qr;++E){const b=E/M,G=Math.exp(-b*b/2);f.push(G),E===0?g+=G:E<m&&(g+=2*G)}for(let E=0;E<f.length;E++)f[E]=f[E]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=y,h.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-eo?r-x+eo:0),A=4*(this._cubeSize-S);Ll(n,P,A,3*S,2*S),l.setRenderTarget(n),l.render(d,fd)}}function Q2(t){const e=[],n=[],i=[];let r=t;const s=t-eo+1+z0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-eo?l=z0[o-t+eo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,M=3,m=2,f=1,g=new Float32Array(M*y*p),x=new Float32Array(m*y*p),S=new Float32Array(f*y*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,b=A>2?0:-1,G=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];g.set(G,M*y*A),x.set(h,m*y*A);const _=[A,A,A,A,A,A];S.set(_,f*y*A)}const P=new In;P.setAttribute("position",new Di(g,M)),P.setAttribute("uv",new Di(x,m)),P.setAttribute("faceIndex",new Di(S,f)),e.push(P),r>eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function B0(t,e,n){const i=new oi(t,e,n);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $2(t,e,n){const i=new Float32Array(Qr),r=new H(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function H0(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function V0(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uc||l===Oh,u=l===Mo||l===wo;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new hf(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new hf(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&lc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const M=h.morphAttributes[y];for(let m=0,f=M.length;m<f;m++)e.remove(M[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const M=p[y];for(let m=0,f=M.length;m<f;m++)e.update(M[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,y=d.attributes.position;let M=0;if(p!==null){const g=p.array;M=p.version;for(let x=0,S=g.length;x<S;x+=3){const P=g[x+0],A=g[x+1],E=g[x+2];h.push(P,A,A,E,E,P)}}else if(y!==void 0){const g=y.array;M=y.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const P=x+0,A=x+1,E=x+2;h.push(P,A,A,E,E,P)}}else return;const m=new(xy(h)?wy:My)(h,1);m.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function iT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,h*o,y),n.update(p,i,y))}function u(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,y);let m=0;for(let f=0;f<y;f++)m+=p[f];n.update(m,i,1)}function d(h,p,y,M){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,y);let f=0;for(let g=0;g<y;g++)f+=p[g];for(let g=0;g<M.length;g++)n.update(f,i,M[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let _=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*A*4*d),b=new _y(E,P,A,d);b.type=ei,b.needsUpdate=!0;const G=S*4;for(let w=0;w<d;w++){const C=f[w],O=g[w],U=x[w],V=P*A*4*w;for(let k=0;k<C.count;k++){const ne=k*G;y===!0&&(r.fromBufferAttribute(C,k),E[V+ne+0]=r.x,E[V+ne+1]=r.y,E[V+ne+2]=r.z,E[V+ne+3]=0),M===!0&&(r.fromBufferAttribute(O,k),E[V+ne+4]=r.x,E[V+ne+5]=r.y,E[V+ne+6]=r.z,E[V+ne+7]=0),m===!0&&(r.fromBufferAttribute(U,k),E[V+ne+8]=r.x,E[V+ne+9]=r.y,E[V+ne+10]=r.z,E[V+ne+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new Ee(P,A)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const M=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function oT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Dp extends Wt{constructor(e,n,i,r,s,o,a,l,c,u=ho){if(u!==ho&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ho&&(i=cs),i===void 0&&u===ds&&(i=us),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cy=new Wt,G0=new Dp(1,1),Ry=new _y,Py=new WM,Ly=new Ay,W0=[],j0=[],X0=new Float32Array(16),Y0=new Float32Array(9),q0=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=W0[r];if(s===void 0&&(s=new Float32Array(r),W0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ou(t,e){let n=j0[e];n===void 0&&(n=new Int32Array(e),j0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;q0.set(i),t.uniformMatrix2fv(this.addr,!1,q0),Xt(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Y0.set(i),t.uniformMatrix3fv(this.addr,!1,Y0),Xt(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;X0.set(i),t.uniformMatrix4fv(this.addr,!1,X0),Xt(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function xT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(G0.compareFunction=vy,s=G0):s=Cy,n.setTexture2D(e||s,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Py,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ly,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ry,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return dT;case 35675:return hT;case 35676:return fT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return yT;case 36295:return _T;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function bT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function RT(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function OT(t,e){t.uniform3iv(this.addr,e)}function zT(t,e){t.uniform4iv(this.addr,e)}function FT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Cy,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Py,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ly,s[o])}function jT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ry,s[o])}function XT(t){switch(t){case 5126:return bT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return OT;case 35669:case 35673:return zT;case 5125:return FT;case 36294:return kT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return jT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XT(n.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function K0(t,e){t.seq.push(e),t.map[e.id]=e}function ZT(t,e,n){const i=t.name,r=i.length;for(xd.lastIndex=0;;){const s=xd.exec(i),o=xd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){K0(n,c===void 0?new YT(a,t,e):new qT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new KT(a),K0(n,d)),n=d}}}class cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ZT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Z0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JT=37297;let QT=0;function $T(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function eA(t){const e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t);let i;switch(e===n?i="":e===Fc&&n===zc?i="LinearDisplayP3ToLinearSRGB":e===zc&&n===Fc&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case su:return[i,"LinearTransferOETF"];case fn:case Tp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function J0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+$T(t.getShaderSource(e),o)}else return r}function tA(t,e){const n=eA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nA(t,e){let n;switch(e){case ty:n="Linear";break;case ny:n="Reinhard";break;case iy:n="Cineon";break;case vp:n="ACESFilmic";break;case ry:n="AgX";break;case sy:n="Neutral";break;case SM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new H;function iA(){ut.getLuminanceCoefficients(Dl);const t=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function sA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ta(t){return t!==""}function Q0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(aA,cA)}const lA=new Map;function cA(t,e){let n=nt[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(t){return t.replace(uA,dA)}function dA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function fA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Mo:case wo:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ey:e="ENVMAP_BLENDING_MULTIPLY";break;case yM:e="ENVMAP_BLENDING_MIX";break;case _M:e="ENVMAP_BLENDING_ADD";break}return e}function gA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hA(n),c=fA(n),u=pA(n),d=mA(n),h=gA(n),p=rA(n),y=sA(s),M=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ta).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ta).join(`
`),f.length>0&&(f+=`
`)):(m=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),f=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?nt.tonemapping_pars_fragment:"",n.toneMapping!==Nr?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,tA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),o=ff(o),o=Q0(o,n),o=$0(o,n),a=ff(a),a=Q0(a,n),a=$0(a,n),o=eg(o),a=eg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=g+m+o,S=g+f+a,P=Z0(r,r.VERTEX_SHADER,x),A=Z0(r,r.FRAGMENT_SHADER,S);r.attachShader(M,P),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function E(w){if(t.debug.checkShaderErrors){const C=r.getProgramInfoLog(M).trim(),O=r.getShaderInfoLog(P).trim(),U=r.getShaderInfoLog(A).trim();let V=!0,k=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,P,A);else{const ne=J0(r,P,"vertex"),I=J0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+ne+`
`+I)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||U==="")&&(k=!1);k&&(w.diagnostics={runnable:V,programLog:C,vertexShader:{log:O,prefix:m},fragmentShader:{log:U,prefix:f}})}r.deleteShader(P),r.deleteShader(A),b=new cc(r,M),G=oA(r,M)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let G;this.getAttributes=function(){return G===void 0&&E(this),G};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,JT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=A,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _A(e),n.set(e,i)),i}}class _A{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function SA(t,e,n,i,r,s,o){const a=new Cp,l=new yA,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,w,C,O,U){const V=O.fog,k=U.geometry,ne=_.isMeshStandardMaterial?O.environment:null,I=(_.isMeshStandardMaterial?n:e).get(_.envMap||ne),Z=I&&I.mapping===ru?I.image.height:null,$=M[_.type];_.precision!==null&&(y=r.getMaxPrecision(_.precision),y!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",y,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=te!==void 0?te.length:0;let Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let j,Q,ae,de;if($){const Je=bi[$];j=Je.vertexShader,Q=Je.fragmentShader}else j=_.vertexShader,Q=_.fragmentShader,l.update(_),ae=l.getVertexShaderID(_),de=l.getFragmentShaderID(_);const Te=t.getRenderTarget(),De=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,He=!!_.map,fe=!!_.matcap,L=!!I,we=!!_.aoMap,be=!!_.lightMap,me=!!_.bumpMap,Ae=!!_.normalMap,Be=!!_.displacementMap,Ie=!!_.emissiveMap,N=!!_.metalnessMap,T=!!_.roughnessMap,se=_.anisotropy>0,ve=_.clearcoat>0,Se=_.dispersion>0,ge=_.iridescence>0,Fe=_.sheen>0,z=_.transmission>0,W=se&&!!_.anisotropyMap,le=ve&&!!_.clearcoatMap,D=ve&&!!_.clearcoatNormalMap,X=ve&&!!_.clearcoatRoughnessMap,q=ge&&!!_.iridescenceMap,Y=ge&&!!_.iridescenceThicknessMap,re=Fe&&!!_.sheenColorMap,xe=Fe&&!!_.sheenRoughnessMap,J=!!_.specularMap,oe=!!_.specularColorMap,F=!!_.specularIntensityMap,he=z&&!!_.transmissionMap,B=z&&!!_.thicknessMap,K=!!_.gradientMap,pe=!!_.alphaMap,Me=_.alphaTest>0,je=!!_.alphaHash,$e=!!_.extensions;let rt=Nr;_.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(rt=t.toneMapping);const Ge={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:Q,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:ir,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:fe,envMap:L,envMapMode:L&&I.mapping,envMapCubeUVHeight:Z,aoMap:we,lightMap:be,bumpMap:me,normalMap:Ae,displacementMap:p&&Be,emissiveMap:Ie,normalMapObjectSpace:Ae&&_.normalMapType===TM,normalMapTangentSpace:Ae&&_.normalMapType===Ep,metalnessMap:N,roughnessMap:T,anisotropy:se,anisotropyMap:W,clearcoat:ve,clearcoatMap:le,clearcoatNormalMap:D,clearcoatRoughnessMap:X,dispersion:Se,iridescence:ge,iridescenceMap:q,iridescenceThicknessMap:Y,sheen:Fe,sheenColorMap:re,sheenRoughnessMap:xe,specularMap:J,specularColorMap:oe,specularIntensityMap:F,transmission:z,transmissionMap:he,thicknessMap:B,gradientMap:K,opaque:_.transparent===!1&&_.blending===uo&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:Me,alphaHash:je,combine:_.combine,mapUv:He&&m(_.map.channel),aoMapUv:we&&m(_.aoMap.channel),lightMapUv:be&&m(_.lightMap.channel),bumpMapUv:me&&m(_.bumpMap.channel),normalMapUv:Ae&&m(_.normalMap.channel),displacementMapUv:Be&&m(_.displacementMap.channel),emissiveMapUv:Ie&&m(_.emissiveMap.channel),metalnessMapUv:N&&m(_.metalnessMap.channel),roughnessMapUv:T&&m(_.roughnessMap.channel),anisotropyMapUv:W&&m(_.anisotropyMap.channel),clearcoatMapUv:le&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:D&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(_.sheenRoughnessMap.channel),specularMapUv:J&&m(_.specularMap.channel),specularColorMapUv:oe&&m(_.specularColorMap.channel),specularIntensityMapUv:F&&m(_.specularIntensityMap.channel),transmissionMapUv:he&&m(_.transmissionMap.channel),thicknessMapUv:B&&m(_.thicknessMap.channel),alphaMapUv:pe&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ae||se),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(He||pe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(x(w,_),S(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const w=M[_.type];let C;if(w){const O=bi[w];C=xi.clone(O.uniforms)}else C=_.uniforms;return C}function A(_,w){let C;for(let O=0,U=u.length;O<U;O++){const V=u[O];if(V.cacheKey===w){C=V,++C.usedTimes;break}}return C===void 0&&(C=new vA(t,w,_,s),u.push(C)),C}function E(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function G(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:P,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:G}}function MA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ig(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,y,M,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:M,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=M,f.group=m),e++,f}function a(d,h,p,y,M,m){const f=o(d,h,p,y,M,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,y,M,m){const f=o(d,h,p,y,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||wA),i.length>1&&i.sort(h||ng),r.length>1&&r.sort(h||ng)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function EA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ig,t.set(i,[o])):r>=s.length?(o=new ig,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ze};break;case"SpotLight":n={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bA=0;function CA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RA(t){const e=new TA,n=AA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new lt,o=new lt;function a(c){let u=0,d=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,y=0,M=0,m=0,f=0,g=0,x=0,S=0,P=0,A=0,E=0;c.sort(CA);for(let G=0,_=c.length;G<_;G++){const w=c[G],C=w.color,O=w.intensity,U=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=C.r*O,d+=C.g*O,h+=C.b*O;else if(w.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(w.sh.coefficients[k],O);E++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ne=w.shadow,I=n.get(w);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=k,p++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(C).multiplyScalar(O),k.distance=U,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,i.spot[M]=k;const ne=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,ne.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[M]=ne.matrix,w.castShadow){const I=n.get(w);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[M]=I,i.spotShadowMap[M]=V,S++}M++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(C).multiplyScalar(O),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=k,m++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const ne=w.shadow,I=n.get(w);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=V,i.pointShadowMatrix[y]=w.shadow.matrix,x++}i.point[y]=k,y++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(O),k.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[f]=k,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==y||b.spotLength!==M||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==g||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==P||b.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=y,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,b.directionalLength=p,b.pointLength=y,b.spotLength=M,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=g,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=P,b.numLightProbes=E,i.version=bA++)}function l(c,u){let d=0,h=0,p=0,y=0,M=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const x=c[f];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function rg(t){const e=new RA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rg(t),e.set(r,[a])):s>=o.length?(a=new rg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class LA extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DA extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UA(t,e,n){let i=new Rp;const r=new Ee,s=new Ee,o=new vt,a=new LA({depthPacking:EM}),l=new DA,c={},u=n.maxTextureSize,d={[Or]:_n,[_n]:Or,[xn]:xn},h=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:NA,fragmentShader:IA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new In;y.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new et(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jx;let f=this.type;this.render=function(A,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const G=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),C=t.state;C.setBlending(tn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const O=f!==Gi&&this.type===Gi,U=f===Gi&&this.type!==Gi;for(let V=0,k=A.length;V<k;V++){const ne=A[V],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Z=I.getFrameExtents();if(r.multiply(Z),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,I.mapSize.y=s.y)),I.map===null||O===!0||U===!0){const te=this.type!==Gi?{minFilter:Jt,magFilter:Jt}:{};I.map!==null&&I.map.dispose(),I.map=new oi(r.x,r.y,te),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const $=I.getViewportCount();for(let te=0;te<$;te++){const _e=I.getViewport(te);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),C.viewport(o),I.updateMatrices(ne,te),i=I.getFrustum(),S(E,b,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===Gi&&g(I,b),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(G,_,w)};function g(A,E){const b=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,b,h,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,b,p,M,null)}function x(A,E,b,G){let _=null;const w=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=b.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const C=_.uuid,O=E.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let V=U[O];V===void 0&&(V=_.clone(),U[O]=V,E.addEventListener("dispose",P)),_=V}if(_.visible=E.visible,_.wireframe=E.wireframe,G===Gi?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const C=t.properties.get(_);C.light=b}return _}function S(A,E,b,G,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const O=e.update(A),U=A.material;if(Array.isArray(U)){const V=O.groups;for(let k=0,ne=V.length;k<ne;k++){const I=V[k],Z=U[I.materialIndex];if(Z&&Z.visible){const $=x(A,Z,G,_);A.onBeforeShadow(t,A,E,b,O,$,I),t.renderBufferDirect(b,null,O,$,A,I),A.onAfterShadow(t,A,E,b,O,$,I)}}}else if(U.visible){const V=x(A,U,G,_);A.onBeforeShadow(t,A,E,b,O,V,null),t.renderBufferDirect(b,null,O,V,A,null),A.onAfterShadow(t,A,E,b,O,V,null)}}const C=A.children;for(let O=0,U=C.length;O<U;O++)S(C[O],E,b,G,_)}function P(A){A.target.removeEventListener("dispose",P);for(const b in c){const G=c[b],_=A.target.uuid;_ in G&&(G[_].dispose(),delete G[_])}}}const OA={[Rh]:Ph,[Lh]:Ih,[Dh]:Uh,[So]:Nh,[Ph]:Rh,[Ih]:Lh,[Uh]:Dh,[Nh]:So};function zA(t){function e(){let F=!1;const he=new vt;let B=null;const K=new vt(0,0,0,0);return{setMask:function(pe){B!==pe&&!F&&(t.colorMask(pe,pe,pe,pe),B=pe)},setLocked:function(pe){F=pe},setClear:function(pe,Me,je,$e,rt){rt===!0&&(pe*=$e,Me*=$e,je*=$e),he.set(pe,Me,je,$e),K.equals(he)===!1&&(t.clearColor(pe,Me,je,$e),K.copy(he))},reset:function(){F=!1,B=null,K.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,B=null,K=null,pe=null;return{setReversed:function(Me){he=Me},setTest:function(Me){Me?ae(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Me){B!==Me&&!F&&(t.depthMask(Me),B=Me)},setFunc:function(Me){if(he&&(Me=OA[Me]),K!==Me){switch(Me){case Rh:t.depthFunc(t.NEVER);break;case Ph:t.depthFunc(t.ALWAYS);break;case Lh:t.depthFunc(t.LESS);break;case So:t.depthFunc(t.LEQUAL);break;case Dh:t.depthFunc(t.EQUAL);break;case Nh:t.depthFunc(t.GEQUAL);break;case Ih:t.depthFunc(t.GREATER);break;case Uh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=Me}},setLocked:function(Me){F=Me},setClear:function(Me){pe!==Me&&(t.clearDepth(Me),pe=Me)},reset:function(){F=!1,B=null,K=null,pe=null}}}function i(){let F=!1,he=null,B=null,K=null,pe=null,Me=null,je=null,$e=null,rt=null;return{setTest:function(Ge){F||(Ge?ae(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ge){he!==Ge&&!F&&(t.stencilMask(Ge),he=Ge)},setFunc:function(Ge,Je,at){(B!==Ge||K!==Je||pe!==at)&&(t.stencilFunc(Ge,Je,at),B=Ge,K=Je,pe=at)},setOp:function(Ge,Je,at){(Me!==Ge||je!==Je||$e!==at)&&(t.stencilOp(Ge,Je,at),Me=Ge,je=Je,$e=at)},setLocked:function(Ge){F=Ge},setClear:function(Ge){rt!==Ge&&(t.clearStencil(Ge),rt=Ge)},reset:function(){F=!1,he=null,B=null,K=null,pe=null,Me=null,je=null,$e=null,rt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,y=!1,M=null,m=null,f=null,g=null,x=null,S=null,P=null,A=new Ze(0,0,0),E=0,b=!1,G=null,_=null,w=null,C=null,O=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=k>=1):ne.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=k>=2);let I=null,Z={};const $=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),_e=new vt().fromArray($),Re=new vt().fromArray(te);function j(F,he,B,K){const pe=new Uint8Array(4),Me=t.createTexture();t.bindTexture(F,Me),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<B;je++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(he+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return Me}const Q={};Q[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(So),be(!1),me(f0),ae(t.CULL_FACE),L(tn);function ae(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function de(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Te(F,he){return u[F]!==he?(t.bindFramebuffer(F,he),u[F]=he,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function De(F,he){let B=h,K=!1;if(F){B=d.get(he),B===void 0&&(B=[],d.set(he,B));const pe=F.textures;if(B.length!==pe.length||B[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,je=pe.length;Me<je;Me++)B[Me]=t.COLOR_ATTACHMENT0+Me;B.length=pe.length,K=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,K=!0);K&&t.drawBuffers(B)}function Ue(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const He={[gi]:t.FUNC_ADD,[sM]:t.FUNC_SUBTRACT,[oM]:t.FUNC_REVERSE_SUBTRACT};He[aM]=t.MIN,He[lM]=t.MAX;const fe={[ea]:t.ZERO,[cM]:t.ONE,[uM]:t.SRC_COLOR,[Th]:t.SRC_ALPHA,[pM]:t.SRC_ALPHA_SATURATE,[Ch]:t.DST_COLOR,[bh]:t.DST_ALPHA,[dM]:t.ONE_MINUS_SRC_COLOR,[Ah]:t.ONE_MINUS_SRC_ALPHA,[fM]:t.ONE_MINUS_DST_COLOR,[hM]:t.ONE_MINUS_DST_ALPHA,[mM]:t.CONSTANT_COLOR,[gM]:t.ONE_MINUS_CONSTANT_COLOR,[vM]:t.CONSTANT_ALPHA,[xM]:t.ONE_MINUS_CONSTANT_ALPHA};function L(F,he,B,K,pe,Me,je,$e,rt,Ge){if(F===tn){y===!0&&(de(t.BLEND),y=!1);return}if(y===!1&&(ae(t.BLEND),y=!0),F!==$x){if(F!==M||Ge!==b){if((m!==gi||x!==gi)&&(t.blendEquation(t.FUNC_ADD),m=gi,x=gi),Ge)switch(F){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case p0:t.blendFunc(t.ONE,t.ONE);break;case m0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case g0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case p0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case m0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case g0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,g=null,S=null,P=null,A.set(0,0,0),E=0,M=F,b=Ge}return}pe=pe||he,Me=Me||B,je=je||K,(he!==m||pe!==x)&&(t.blendEquationSeparate(He[he],He[pe]),m=he,x=pe),(B!==f||K!==g||Me!==S||je!==P)&&(t.blendFuncSeparate(fe[B],fe[K],fe[Me],fe[je]),f=B,g=K,S=Me,P=je),($e.equals(A)===!1||rt!==E)&&(t.blendColor($e.r,$e.g,$e.b,rt),A.copy($e),E=rt),M=F,b=!1}function we(F,he){F.side===xn?de(t.CULL_FACE):ae(t.CULL_FACE);let B=F.side===_n;he&&(B=!B),be(B),F.blending===uo&&F.transparent===!1?L(tn):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const K=F.stencilWrite;o.setTest(K),K&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(F){G!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),G=F)}function me(F){F!==iM?(ae(t.CULL_FACE),F!==_&&(F===f0?t.cullFace(t.BACK):F===rM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),_=F}function Ae(F){F!==w&&(V&&t.lineWidth(F),w=F)}function Be(F,he,B){F?(ae(t.POLYGON_OFFSET_FILL),(C!==he||O!==B)&&(t.polygonOffset(he,B),C=he,O=B)):de(t.POLYGON_OFFSET_FILL)}function Ie(F){F?ae(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function N(F){F===void 0&&(F=t.TEXTURE0+U-1),I!==F&&(t.activeTexture(F),I=F)}function T(F,he,B){B===void 0&&(I===null?B=t.TEXTURE0+U-1:B=I);let K=Z[B];K===void 0&&(K={type:void 0,texture:void 0},Z[B]=K),(K.type!==F||K.texture!==he)&&(I!==B&&(t.activeTexture(B),I=B),t.bindTexture(F,he||Q[F]),K.type=F,K.texture=he)}function se(){const F=Z[I];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(F){_e.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),_e.copy(F))}function re(F){Re.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Re.copy(F))}function xe(F,he){let B=l.get(he);B===void 0&&(B=new WeakMap,l.set(he,B));let K=B.get(F);K===void 0&&(K=t.getUniformBlockIndex(he,F.name),B.set(F,K))}function J(F,he){const K=l.get(he).get(F);a.get(he)!==K&&(t.uniformBlockBinding(he,K,F.__bindingPointIndex),a.set(he,K))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Z={},u={},d=new WeakMap,h=[],p=null,y=!1,M=null,m=null,f=null,g=null,x=null,S=null,P=null,A=new Ze(0,0,0),E=0,b=!1,G=null,_=null,w=null,C=null,O=null,_e.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:de,bindFramebuffer:Te,drawBuffers:De,useProgram:Ue,setBlending:L,setMaterial:we,setFlipSided:be,setCullFace:me,setLineWidth:Ae,setPolygonOffset:Be,setScissorTest:Ie,activeTexture:N,bindTexture:T,unbindTexture:se,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:X,texImage3D:q,updateUBOMapping:xe,uniformBlockBinding:J,texStorage2D:le,texStorage3D:D,texSubImage2D:ge,texSubImage3D:Fe,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:Y,viewport:re,reset:oe}}function sg(t,e,n,i){const r=FA(i);switch(n){case uy:return t*e;case hy:return t*e;case fy:return t*e*2;case py:return t*e/r.components*r.byteLength;case Sp:return t*e/r.components*r.byteLength;case my:return t*e*2/r.components*r.byteLength;case Mp:return t*e*2/r.components*r.byteLength;case dy:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case wp:return t*e*4/r.components*r.byteLength;case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:case Hh:return Math.max(t,16)*Math.max(e,8)/4;case Fh:case Bh:return Math.max(t,8)*Math.max(e,8)/2;case Vh:case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case oc:case of:case af:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gy:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FA(t){switch(t){case Ii:case ay:return{byteLength:1,components:1};case Da:case ly:case Pn:return{byteLength:2,components:1};case yp:case _p:return{byteLength:2,components:4};case cs:case xp:case ei:return{byteLength:4,components:1};case cy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function kA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,T){return p?new OffscreenCanvas(N,T):Na("canvas")}function M(N,T,se){let ve=1;const Se=Ie(N);if((Se.width>se||Se.height>se)&&(ve=se/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ge=Math.floor(ve*Se.width),Fe=Math.floor(ve*Se.height);d===void 0&&(d=y(ge,Fe));const z=T?y(ge,Fe):d;return z.width=ge,z.height=Fe,z.getContext("2d").drawImage(N,0,0,ge,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ge+"x"+Fe+")."),z}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Jt&&N.minFilter!==nn}function f(N){t.generateMipmap(N)}function g(N,T,se,ve,Se=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge=T;if(T===t.RED&&(se===t.FLOAT&&(ge=t.R32F),se===t.HALF_FLOAT&&(ge=t.R16F),se===t.UNSIGNED_BYTE&&(ge=t.R8)),T===t.RED_INTEGER&&(se===t.UNSIGNED_BYTE&&(ge=t.R8UI),se===t.UNSIGNED_SHORT&&(ge=t.R16UI),se===t.UNSIGNED_INT&&(ge=t.R32UI),se===t.BYTE&&(ge=t.R8I),se===t.SHORT&&(ge=t.R16I),se===t.INT&&(ge=t.R32I)),T===t.RG&&(se===t.FLOAT&&(ge=t.RG32F),se===t.HALF_FLOAT&&(ge=t.RG16F),se===t.UNSIGNED_BYTE&&(ge=t.RG8)),T===t.RG_INTEGER&&(se===t.UNSIGNED_BYTE&&(ge=t.RG8UI),se===t.UNSIGNED_SHORT&&(ge=t.RG16UI),se===t.UNSIGNED_INT&&(ge=t.RG32UI),se===t.BYTE&&(ge=t.RG8I),se===t.SHORT&&(ge=t.RG16I),se===t.INT&&(ge=t.RG32I)),T===t.RGB_INTEGER&&(se===t.UNSIGNED_BYTE&&(ge=t.RGB8UI),se===t.UNSIGNED_SHORT&&(ge=t.RGB16UI),se===t.UNSIGNED_INT&&(ge=t.RGB32UI),se===t.BYTE&&(ge=t.RGB8I),se===t.SHORT&&(ge=t.RGB16I),se===t.INT&&(ge=t.RGB32I)),T===t.RGBA_INTEGER&&(se===t.UNSIGNED_BYTE&&(ge=t.RGBA8UI),se===t.UNSIGNED_SHORT&&(ge=t.RGBA16UI),se===t.UNSIGNED_INT&&(ge=t.RGBA32UI),se===t.BYTE&&(ge=t.RGBA8I),se===t.SHORT&&(ge=t.RGBA16I),se===t.INT&&(ge=t.RGBA32I)),T===t.RGB&&se===t.UNSIGNED_INT_5_9_9_9_REV&&(ge=t.RGB9_E5),T===t.RGBA){const Fe=Se?Oc:ut.getTransfer(ve);se===t.FLOAT&&(ge=t.RGBA32F),se===t.HALF_FLOAT&&(ge=t.RGBA16F),se===t.UNSIGNED_BYTE&&(ge=Fe===xt?t.SRGB8_ALPHA8:t.RGBA8),se===t.UNSIGNED_SHORT_4_4_4_4&&(ge=t.RGBA4),se===t.UNSIGNED_SHORT_5_5_5_1&&(ge=t.RGB5_A1)}return(ge===t.R16F||ge===t.R32F||ge===t.RG16F||ge===t.RG32F||ge===t.RGBA16F||ge===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function x(N,T){let se;return N?T===null||T===cs||T===us?se=t.DEPTH24_STENCIL8:T===ei?se=t.DEPTH32F_STENCIL8:T===Da&&(se=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===cs||T===us?se=t.DEPTH_COMPONENT24:T===ei?se=t.DEPTH_COMPONENT32F:T===Da&&(se=t.DEPTH_COMPONENT16),se}function S(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jt&&N.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function P(N){const T=N.target;T.removeEventListener("dispose",P),E(T),T.isVideoTexture&&u.delete(T)}function A(N){const T=N.target;T.removeEventListener("dispose",A),G(T)}function E(N){const T=i.get(N);if(T.__webglInit===void 0)return;const se=N.source,ve=h.get(se);if(ve){const Se=ve[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&b(N),Object.keys(ve).length===0&&h.delete(se)}i.remove(N)}function b(N){const T=i.get(N);t.deleteTexture(T.__webglTexture);const se=N.source,ve=h.get(se);delete ve[T.__cacheKey],o.memory.textures--}function G(N){const T=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Se=0;Se<T.__webglFramebuffer[ve].length;Se++)t.deleteFramebuffer(T.__webglFramebuffer[ve][Se]);else t.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)t.deleteFramebuffer(T.__webglFramebuffer[ve]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const se=N.textures;for(let ve=0,Se=se.length;ve<Se;ve++){const ge=i.get(se[ve]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(se[ve])}i.remove(N)}let _=0;function w(){_=0}function C(){const N=_;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),_+=1,N}function O(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function U(N,T){const se=i.get(N);if(N.isVideoTexture&&Ae(N),N.isRenderTargetTexture===!1&&N.version>0&&se.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(se,N,T);return}}n.bindTexture(t.TEXTURE_2D,se.__webglTexture,t.TEXTURE0+T)}function V(N,T){const se=i.get(N);if(N.version>0&&se.__version!==N.version){Re(se,N,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,se.__webglTexture,t.TEXTURE0+T)}function k(N,T){const se=i.get(N);if(N.version>0&&se.__version!==N.version){Re(se,N,T);return}n.bindTexture(t.TEXTURE_3D,se.__webglTexture,t.TEXTURE0+T)}function ne(N,T){const se=i.get(N);if(N.version>0&&se.__version!==N.version){j(se,N,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture,t.TEXTURE0+T)}const I={[Cn]:t.REPEAT,[Ki]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},Z={[Jt]:t.NEAREST,[MM]:t.NEAREST_MIPMAP_NEAREST,[dl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Wu]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},$={[AM]:t.NEVER,[DM]:t.ALWAYS,[bM]:t.LESS,[vy]:t.LEQUAL,[CM]:t.EQUAL,[LM]:t.GEQUAL,[RM]:t.GREATER,[PM]:t.NOTEQUAL};function te(N,T){if(T.type===ei&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===nn||T.magFilter===Wu||T.magFilter===dl||T.magFilter===Er||T.minFilter===nn||T.minFilter===Wu||T.minFilter===dl||T.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,I[T.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,I[T.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,I[T.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Z[T.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Jt||T.minFilter!==dl&&T.minFilter!==Er||T.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function _e(N,T){let se=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P));const ve=T.source;let Se=h.get(ve);Se===void 0&&(Se={},h.set(ve,Se));const ge=O(T);if(ge!==N.__cacheKey){Se[ge]===void 0&&(Se[ge]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,se=!0),Se[ge].usedTimes++;const Fe=Se[N.__cacheKey];Fe!==void 0&&(Se[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(T)),N.__cacheKey=ge,N.__webglTexture=Se[ge].texture}return se}function Re(N,T,se){let ve=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=t.TEXTURE_3D);const Se=_e(N,T),ge=T.source;n.bindTexture(ve,N.__webglTexture,t.TEXTURE0+se);const Fe=i.get(ge);if(ge.version!==Fe.__version||Se===!0){n.activeTexture(t.TEXTURE0+se);const z=ut.getPrimaries(ut.workingColorSpace),W=T.colorSpace===Sr?null:ut.getPrimaries(T.colorSpace),le=T.colorSpace===Sr||z===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let D=M(T.image,!1,r.maxTextureSize);D=Be(T,D);const X=s.convert(T.format,T.colorSpace),q=s.convert(T.type);let Y=g(T.internalFormat,X,q,T.colorSpace,T.isVideoTexture);te(ve,T);let re;const xe=T.mipmaps,J=T.isVideoTexture!==!0,oe=Fe.__version===void 0||Se===!0,F=ge.dataReady,he=S(T,D);if(T.isDepthTexture)Y=x(T.format===ds,T.type),oe&&(J?n.texStorage2D(t.TEXTURE_2D,1,Y,D.width,D.height):n.texImage2D(t.TEXTURE_2D,0,Y,D.width,D.height,0,X,q,null));else if(T.isDataTexture)if(xe.length>0){J&&oe&&n.texStorage2D(t.TEXTURE_2D,he,Y,xe[0].width,xe[0].height);for(let B=0,K=xe.length;B<K;B++)re=xe[B],J?F&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,re.width,re.height,X,q,re.data):n.texImage2D(t.TEXTURE_2D,B,Y,re.width,re.height,0,X,q,re.data);T.generateMipmaps=!1}else J?(oe&&n.texStorage2D(t.TEXTURE_2D,he,Y,D.width,D.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,D.width,D.height,X,q,D.data)):n.texImage2D(t.TEXTURE_2D,0,Y,D.width,D.height,0,X,q,D.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){J&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Y,xe[0].width,xe[0].height,D.depth);for(let B=0,K=xe.length;B<K;B++)if(re=xe[B],T.format!==ti)if(X!==null)if(J){if(F)if(T.layerUpdates.size>0){const pe=sg(re.width,re.height,T.format,T.type);for(const Me of T.layerUpdates){const je=re.data.subarray(Me*pe/re.data.BYTES_PER_ELEMENT,(Me+1)*pe/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,Me,re.width,re.height,1,X,je,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,re.width,re.height,D.depth,X,re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Y,re.width,re.height,D.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,re.width,re.height,D.depth,X,q,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,Y,re.width,re.height,D.depth,0,X,q,re.data)}else{J&&oe&&n.texStorage2D(t.TEXTURE_2D,he,Y,xe[0].width,xe[0].height);for(let B=0,K=xe.length;B<K;B++)re=xe[B],T.format!==ti?X!==null?J?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,re.width,re.height,X,re.data):n.compressedTexImage2D(t.TEXTURE_2D,B,Y,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?F&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,re.width,re.height,X,q,re.data):n.texImage2D(t.TEXTURE_2D,B,Y,re.width,re.height,0,X,q,re.data)}else if(T.isDataArrayTexture)if(J){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Y,D.width,D.height,D.depth),F)if(T.layerUpdates.size>0){const B=sg(D.width,D.height,T.format,T.type);for(const K of T.layerUpdates){const pe=D.data.subarray(K*B/D.data.BYTES_PER_ELEMENT,(K+1)*B/D.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,D.width,D.height,1,X,q,pe)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,X,q,D.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Y,D.width,D.height,D.depth,0,X,q,D.data);else if(T.isData3DTexture)J?(oe&&n.texStorage3D(t.TEXTURE_3D,he,Y,D.width,D.height,D.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,X,q,D.data)):n.texImage3D(t.TEXTURE_3D,0,Y,D.width,D.height,D.depth,0,X,q,D.data);else if(T.isFramebufferTexture){if(oe)if(J)n.texStorage2D(t.TEXTURE_2D,he,Y,D.width,D.height);else{let B=D.width,K=D.height;for(let pe=0;pe<he;pe++)n.texImage2D(t.TEXTURE_2D,pe,Y,B,K,0,X,q,null),B>>=1,K>>=1}}else if(xe.length>0){if(J&&oe){const B=Ie(xe[0]);n.texStorage2D(t.TEXTURE_2D,he,Y,B.width,B.height)}for(let B=0,K=xe.length;B<K;B++)re=xe[B],J?F&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,X,q,re):n.texImage2D(t.TEXTURE_2D,B,Y,X,q,re);T.generateMipmaps=!1}else if(J){if(oe){const B=Ie(D);n.texStorage2D(t.TEXTURE_2D,he,Y,B.width,B.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,X,q,D)}else n.texImage2D(t.TEXTURE_2D,0,Y,X,q,D);m(T)&&f(ve),Fe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function j(N,T,se){if(T.image.length!==6)return;const ve=_e(N,T),Se=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+se);const ge=i.get(Se);if(Se.version!==ge.__version||ve===!0){n.activeTexture(t.TEXTURE0+se);const Fe=ut.getPrimaries(ut.workingColorSpace),z=T.colorSpace===Sr?null:ut.getPrimaries(T.colorSpace),W=T.colorSpace===Sr||Fe===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);const le=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,X=[];for(let K=0;K<6;K++)!le&&!D?X[K]=M(T.image[K],!0,r.maxCubemapSize):X[K]=D?T.image[K].image:T.image[K],X[K]=Be(T,X[K]);const q=X[0],Y=s.convert(T.format,T.colorSpace),re=s.convert(T.type),xe=g(T.internalFormat,Y,re,T.colorSpace),J=T.isVideoTexture!==!0,oe=ge.__version===void 0||ve===!0,F=Se.dataReady;let he=S(T,q);te(t.TEXTURE_CUBE_MAP,T);let B;if(le){J&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,xe,q.width,q.height);for(let K=0;K<6;K++){B=X[K].mipmaps;for(let pe=0;pe<B.length;pe++){const Me=B[pe];T.format!==ti?Y!==null?J?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Me.width,Me.height,Y,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Me.width,Me.height,Y,re,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,xe,Me.width,Me.height,0,Y,re,Me.data)}}}else{if(B=T.mipmaps,J&&oe){B.length>0&&he++;const K=Ie(X[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,xe,K.width,K.height)}for(let K=0;K<6;K++)if(D){J?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,X[K].width,X[K].height,Y,re,X[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,xe,X[K].width,X[K].height,0,Y,re,X[K].data);for(let pe=0;pe<B.length;pe++){const je=B[pe].image[K].image;J?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,je.width,je.height,Y,re,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,xe,je.width,je.height,0,Y,re,je.data)}}else{J?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Y,re,X[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,xe,Y,re,X[K]);for(let pe=0;pe<B.length;pe++){const Me=B[pe];J?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Y,re,Me.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,xe,Y,re,Me.image[K])}}}m(T)&&f(t.TEXTURE_CUBE_MAP),ge.__version=Se.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Q(N,T,se,ve,Se,ge){const Fe=s.convert(se.format,se.colorSpace),z=s.convert(se.type),W=g(se.internalFormat,Fe,z,se.colorSpace);if(!i.get(T).__hasExternalTextures){const D=Math.max(1,T.width>>ge),X=Math.max(1,T.height>>ge);Se===t.TEXTURE_3D||Se===t.TEXTURE_2D_ARRAY?n.texImage3D(Se,ge,W,D,X,T.depth,0,Fe,z,null):n.texImage2D(Se,ge,W,D,X,0,Fe,z,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),me(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ve,Se,i.get(se).__webglTexture,0,be(T)):(Se===t.TEXTURE_2D||Se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ve,Se,i.get(se).__webglTexture,ge),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(N,T,se){if(t.bindRenderbuffer(t.RENDERBUFFER,N),T.depthBuffer){const ve=T.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,ge=x(T.stencilBuffer,Se),Fe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=be(T);me(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z,ge,T.width,T.height):se?t.renderbufferStorageMultisample(t.RENDERBUFFER,z,ge,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ge,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Fe,t.RENDERBUFFER,N)}else{const ve=T.textures;for(let Se=0;Se<ve.length;Se++){const ge=ve[Se],Fe=s.convert(ge.format,ge.colorSpace),z=s.convert(ge.type),W=g(ge.internalFormat,Fe,z,ge.colorSpace),le=be(T);se&&me(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,W,T.width,T.height):me(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,W,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,W,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const ve=i.get(T.depthTexture).__webglTexture,Se=be(T);if(T.depthTexture.format===ho)me(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ve,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ve,0);else if(T.depthTexture.format===ds)me(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ve,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Te(N){const T=i.get(N),se=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=ve}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");de(T.__webglFramebuffer,N)}else if(se){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=t.createRenderbuffer(),ae(T.__webglDepthbuffer[ve],N,!1);else{const Se=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[ve];t.bindRenderbuffer(t.RENDERBUFFER,ge),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,ge)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),ae(T.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,Se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(N,T,se){const ve=i.get(N);T!==void 0&&Q(ve.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),se!==void 0&&Te(N)}function Ue(N){const T=N.texture,se=i.get(N),ve=i.get(T);N.addEventListener("dispose",A);const Se=N.textures,ge=N.isWebGLCubeRenderTarget===!0,Fe=Se.length>1;if(Fe||(ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture()),ve.__version=T.version,o.memory.textures++),ge){se.__webglFramebuffer=[];for(let z=0;z<6;z++)if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer[z]=[];for(let W=0;W<T.mipmaps.length;W++)se.__webglFramebuffer[z][W]=t.createFramebuffer()}else se.__webglFramebuffer[z]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer=[];for(let z=0;z<T.mipmaps.length;z++)se.__webglFramebuffer[z]=t.createFramebuffer()}else se.__webglFramebuffer=t.createFramebuffer();if(Fe)for(let z=0,W=Se.length;z<W;z++){const le=i.get(Se[z]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&me(N)===!1){se.__webglMultisampledFramebuffer=t.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let z=0;z<Se.length;z++){const W=Se[z];se.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,se.__webglColorRenderbuffer[z]);const le=s.convert(W.format,W.colorSpace),D=s.convert(W.type),X=g(W.internalFormat,le,D,W.colorSpace,N.isXRRenderTarget===!0),q=be(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,q,X,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,se.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(se.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(se.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ge){n.bindTexture(t.TEXTURE_CUBE_MAP,ve.__webglTexture),te(t.TEXTURE_CUBE_MAP,T);for(let z=0;z<6;z++)if(T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)Q(se.__webglFramebuffer[z][W],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,W);else Q(se.__webglFramebuffer[z],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);m(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let z=0,W=Se.length;z<W;z++){const le=Se[z],D=i.get(le);n.bindTexture(t.TEXTURE_2D,D.__webglTexture),te(t.TEXTURE_2D,le),Q(se.__webglFramebuffer,N,le,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,0),m(le)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let z=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(z=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(z,ve.__webglTexture),te(z,T),T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)Q(se.__webglFramebuffer[W],N,T,t.COLOR_ATTACHMENT0,z,W);else Q(se.__webglFramebuffer,N,T,t.COLOR_ATTACHMENT0,z,0);m(T)&&f(z),n.unbindTexture()}N.depthBuffer&&Te(N)}function He(N){const T=N.textures;for(let se=0,ve=T.length;se<ve;se++){const Se=T[se];if(m(Se)){const ge=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Fe=i.get(Se).__webglTexture;n.bindTexture(ge,Fe),f(ge),n.unbindTexture()}}}const fe=[],L=[];function we(N){if(N.samples>0){if(me(N)===!1){const T=N.textures,se=N.width,ve=N.height;let Se=t.COLOR_BUFFER_BIT;const ge=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(N),z=T.length>1;if(z)for(let W=0;W<T.length;W++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let W=0;W<T.length;W++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=t.STENCIL_BUFFER_BIT)),z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[W]);const le=i.get(T[W]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,se,ve,0,0,se,ve,Se,t.NEAREST),l===!0&&(fe.length=0,L.length=0,fe.push(t.COLOR_ATTACHMENT0+W),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(ge),L.push(ge),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let W=0;W<T.length;W++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[W]);const le=i.get(T[W]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function be(N){return Math.min(r.maxSamples,N.samples)}function me(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(N){const T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function Be(N,T){const se=N.colorSpace,ve=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||se!==ir&&se!==Sr&&(ut.getTransfer(se)===xt?(ve!==ti||Se!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),T}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=w,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=ne,this.rebindTextures=De,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=me}function BA(t,e){function n(i,r=Sr){let s;const o=ut.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===yp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_p)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ay)return t.BYTE;if(i===ly)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===xp)return t.INT;if(i===cs)return t.UNSIGNED_INT;if(i===ei)return t.FLOAT;if(i===Pn)return t.HALF_FLOAT;if(i===uy)return t.ALPHA;if(i===dy)return t.RGB;if(i===ti)return t.RGBA;if(i===hy)return t.LUMINANCE;if(i===fy)return t.LUMINANCE_ALPHA;if(i===ho)return t.DEPTH_COMPONENT;if(i===ds)return t.DEPTH_STENCIL;if(i===py)return t.RED;if(i===Sp)return t.RED_INTEGER;if(i===my)return t.RG;if(i===Mp)return t.RG_INTEGER;if(i===wp)return t.RGBA_INTEGER;if(i===nc||i===ic||i===rc||i===sc)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===kh||i===Bh||i===Hh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vh||i===Gh||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vh||i===Gh)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jh||i===Xh||i===Yh||i===qh||i===Kh||i===Zh||i===Jh||i===Qh||i===$h||i===ef||i===tf||i===nf||i===rf||i===sf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$h)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===of||i===af)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oc)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===af)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gy||i===lf||i===cf||i===uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class HA extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VA={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vt({vertexShader:GA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new et(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XA extends vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,y=null;const M=new jA,m=n.getContextAttributes();let f=null,g=null;const x=[],S=[],P=new Ee;let A=null;const E=new Vn;E.layers.enable(1),E.viewport=new vt;const b=new Vn;b.layers.enable(2),b.viewport=new vt;const G=[E,b],_=new HA;_.layers.enable(1),_.layers.enable(2);let w=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=x[j];return Q===void 0&&(Q=new yd,x[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=x[j];return Q===void 0&&(Q=new yd,x[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=x[j];return Q===void 0&&(Q=new yd,x[j]=Q),Q.getHandSpace()};function O(j){const Q=S.indexOf(j.inputSource);if(Q===-1)return;const ae=x[Q];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",V);for(let j=0;j<x.length;j++){const Q=S[j];Q!==null&&(S[j]=null,x[j].disconnect(Q))}w=null,C=null,M.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",U),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new oi(p.framebufferWidth,p.framebufferHeight,{format:ti,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ae=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?ds:ho,ae=m.stencil?us:cs);const Te={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new oi(h.textureWidth,h.textureHeight,{format:ti,type:Ii,depthTexture:new Dp(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(j){for(let Q=0;Q<j.removed.length;Q++){const ae=j.removed[Q],de=S.indexOf(ae);de>=0&&(S[de]=null,x[de].disconnect(ae))}for(let Q=0;Q<j.added.length;Q++){const ae=j.added[Q];let de=S.indexOf(ae);if(de===-1){for(let De=0;De<x.length;De++)if(De>=S.length){S.push(ae),de=De;break}else if(S[De]===null){S[De]=ae,de=De;break}if(de===-1)break}const Te=x[de];Te&&Te.connect(ae)}}const k=new H,ne=new H;function I(j,Q,ae){k.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(ae.matrixWorld);const de=k.distanceTo(ne),Te=Q.projectionMatrix.elements,De=ae.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),He=Te[14]/(Te[10]+1),fe=(Te[9]+1)/Te[5],L=(Te[9]-1)/Te[5],we=(Te[8]-1)/Te[0],be=(De[8]+1)/De[0],me=Ue*we,Ae=Ue*be,Be=de/(-we+be),Ie=Be*-we;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(Be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const N=Ue+Be,T=He+Be,se=me-Ie,ve=Ae+(de-Ie),Se=fe*He/T*N,ge=L*He/T*N;j.projectionMatrix.makePerspective(se,ve,Se,ge,N,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Z(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Q=j.near,ae=j.far;M.texture!==null&&(M.depthNear>0&&(Q=M.depthNear),M.depthFar>0&&(ae=M.depthFar)),_.near=b.near=E.near=Q,_.far=b.far=E.far=ae,(w!==_.near||C!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,C=_.far);const de=j.parent,Te=_.cameras;Z(_,de);for(let De=0;De<Te.length;De++)Z(Te[De],de);Te.length===2?I(_,E,b):_.projectionMatrix.copy(E.projectionMatrix),$(j,_,de)};function $(j,Q,ae){ae===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=df*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let te=null;function _e(j,Q){if(u=Q.getViewerPose(c||o),y=Q,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let de=!1;ae.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let De=0;De<ae.length;De++){const Ue=ae[De];let He=null;if(p!==null)He=p.getViewport(Ue);else{const L=d.getViewSubImage(h,Ue);He=L.viewport,De===0&&(e.setRenderTargetTextures(g,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let fe=G[De];fe===void 0&&(fe=new Vn,fe.layers.enable(De),fe.viewport=new vt,G[De]=fe),fe.matrix.fromArray(Ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(He.x,He.y,He.width,He.height),De===0&&(_.matrix.copy(fe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(fe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const De=d.getDepthInformation(ae[0]);De&&De.isValid&&De.texture&&M.init(e,De,r.renderState)}}for(let ae=0;ae<x.length;ae++){const de=S[ae],Te=x[ae];de!==null&&Te!==void 0&&Te.update(de,Q,c||o)}te&&te(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const Re=new by;Re.setAnimationLoop(_e),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}}const Yr=new Mi,YA=new lt;function qA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ey(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,Yr.copy(S),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Yr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(y(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(g,P);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const x=d();g.__bindingPointIndex=x;const S=t.createBuffer(),P=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let G=0,_=b.length;G<_;G++){const w=b[G];if(p(w,A,G,P)===!0){const C=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let V=0;V<O.length;V++){const k=O[V],ne=M(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,C+U,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,U),U+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,P){const A=g.value,E=x+"_"+S;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const b=P[E];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return P[E]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function y(g){const x=g.uniforms;let S=0;const P=16;for(let E=0,b=x.length;E<b;E++){const G=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,w=G.length;_<w;_++){const C=G[_],O=Array.isArray(C.value)?C.value:[C.value];for(let U=0,V=O.length;U<V;U++){const k=O[U],ne=M(k),I=S%P,Z=I%ne.boundary,$=I+Z;S+=Z,$!==0&&P-$<ne.storage&&(S+=P-$),C.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=ne.storage}}}const A=S%P;return A>0&&(S+=P-A),g.__size=S,g.__cache={},this}function M(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class ZA{constructor(e={}){const{canvas:n=UM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),y=new Int32Array(4);let M=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Nr,this.toneMappingExposure=1;const x=this;let S=!1,P=0,A=0,E=null,b=-1,G=null;const _=new vt,w=new vt;let C=null;const O=new Ze(0);let U=0,V=n.width,k=n.height,ne=1,I=null,Z=null;const $=new vt(0,0,V,k),te=new vt(0,0,V,k);let _e=!1;const Re=new Rp;let j=!1,Q=!1;const ae=new lt,de=new lt,Te=new H,De=new vt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function fe(){return E===null?ne:1}let L=i;function we(R,ee){return n.getContext(R,ee)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gp}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",Me,!1),L===null){const ee="webgl2";if(L=we(ee,R),L===null)throw we(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let be,me,Ae,Be,Ie,N,T,se,ve,Se,ge,Fe,z,W,le,D,X,q,Y,re,xe,J,oe,F;function he(){be=new tT(L),be.init(),J=new BA(L,be),me=new K2(L,be,e,J),Ae=new zA(L),me.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Be=new rT(L),Ie=new MA,N=new kA(L,be,Ae,Ie,me,J,Be),T=new J2(x),se=new eT(x),ve=new dw(L),oe=new Y2(L,ve),Se=new nT(L,ve,Be,oe),ge=new oT(L,Se,ve,Be),Y=new sT(L,me,N),D=new Z2(Ie),Fe=new SA(x,T,se,be,me,oe,D),z=new qA(x,Ie),W=new EA,le=new PA(be),q=new X2(x,T,se,Ae,ge,h,l),X=new UA(x,ge,me),F=new KA(L,Be,me,Ae),re=new q2(L,be,Be),xe=new iT(L,be,Be),Be.programs=Fe.programs,x.capabilities=me,x.extensions=be,x.properties=Ie,x.renderLists=W,x.shadowMap=X,x.state=Ae,x.info=Be}he();const B=new XA(x,L);this.xr=B,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(V,k,!1))},this.getSize=function(R){return R.set(V,k)},this.setSize=function(R,ee,ce=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,k=ee,n.width=Math.floor(R*ne),n.height=Math.floor(ee*ne),ce===!0&&(n.style.width=R+"px",n.style.height=ee+"px"),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(V*ne,k*ne).floor()},this.setDrawingBufferSize=function(R,ee,ce){V=R,k=ee,ne=ce,n.width=Math.floor(R*ce),n.height=Math.floor(ee*ce),this.setViewport(0,0,R,ee)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,ee,ce,ue){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,ee,ce,ue),Ae.viewport(_.copy($).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,ee,ce,ue){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,ee,ce,ue),Ae.scissor(w.copy(te).multiplyScalar(ne).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Ae.setScissorTest(_e=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(R=!0,ee=!0,ce=!0){let ue=0;if(R){let ie=!1;if(E!==null){const Le=E.texture.format;ie=Le===wp||Le===Mp||Le===Sp}if(ie){const Le=E.texture.type,ze=Le===Ii||Le===cs||Le===Da||Le===us||Le===yp||Le===_p,Ve=q.getClearColor(),We=q.getClearAlpha(),Ke=Ve.r,Qe=Ve.g,Ye=Ve.b;ze?(p[0]=Ke,p[1]=Qe,p[2]=Ye,p[3]=We,L.clearBufferuiv(L.COLOR,0,p)):(y[0]=Ke,y[1]=Qe,y[2]=Ye,y[3]=We,L.clearBufferiv(L.COLOR,0,y))}else ue|=L.COLOR_BUFFER_BIT}ee&&(ue|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ce&&(ue|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),W.dispose(),le.dispose(),Ie.dispose(),T.dispose(),se.dispose(),ge.dispose(),oe.dispose(),F.dispose(),Fe.dispose(),B.dispose(),B.removeEventListener("sessionstart",ft),B.removeEventListener("sessionend",Pt),Nt.stop()};function K(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Be.autoReset,ee=X.enabled,ce=X.autoUpdate,ue=X.needsUpdate,ie=X.type;he(),Be.autoReset=R,X.enabled=ee,X.autoUpdate=ce,X.needsUpdate=ue,X.type=ie}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function je(R){const ee=R.target;ee.removeEventListener("dispose",je),$e(ee)}function $e(R){rt(R),Ie.remove(R)}function rt(R){const ee=Ie.get(R).programs;ee!==void 0&&(ee.forEach(function(ce){Fe.releaseProgram(ce)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,ce,ue,ie,Le){ee===null&&(ee=Ue);const ze=ie.isMesh&&ie.matrixWorld.determinant()<0,Ve=Xy(R,ee,ce,ue,ie);Ae.setMaterial(ue,ze);let We=ce.index,Ke=1;if(ue.wireframe===!0){if(We=Se.getWireframeAttribute(ce),We===void 0)return;Ke=2}const Qe=ce.drawRange,Ye=ce.attributes.position;let pt=Qe.start*Ke,St=(Qe.start+Qe.count)*Ke;Le!==null&&(pt=Math.max(pt,Le.start*Ke),St=Math.min(St,(Le.start+Le.count)*Ke)),We!==null?(pt=Math.max(pt,0),St=Math.min(St,We.count)):Ye!=null&&(pt=Math.max(pt,0),St=Math.min(St,Ye.count));const Lt=St-pt;if(Lt<0||Lt===1/0)return;oe.setup(ie,ue,Ve,ce,We);let Un,dt=re;if(We!==null&&(Un=ve.get(We),dt=xe,dt.setIndex(Un)),ie.isMesh)ue.wireframe===!0?(Ae.setLineWidth(ue.wireframeLinewidth*fe()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(ie.isLine){let qe=ue.linewidth;qe===void 0&&(qe=1),Ae.setLineWidth(qe*fe()),ie.isLineSegments?dt.setMode(L.LINES):ie.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else ie.isPoints?dt.setMode(L.POINTS):ie.isSprite&&dt.setMode(L.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)dt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))dt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const qe=ie._multiDrawStarts,$t=ie._multiDrawCounts,ht=ie._multiDrawCount,ai=We?ve.get(We).bytesPerElement:1,_s=Ie.get(ue).currentProgram.getUniforms();for(let On=0;On<ht;On++)_s.setValue(L,"_gl_DrawID",On),dt.render(qe[On]/ai,$t[On])}else if(ie.isInstancedMesh)dt.renderInstances(pt,Lt,ie.count);else if(ce.isInstancedBufferGeometry){const qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,$t=Math.min(ce.instanceCount,qe);dt.renderInstances(pt,Lt,$t)}else dt.render(pt,Lt)};function Ge(R,ee,ce){R.transparent===!0&&R.side===xn&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,Xa(R,ee,ce),R.side=Or,R.needsUpdate=!0,Xa(R,ee,ce),R.side=xn):Xa(R,ee,ce)}this.compile=function(R,ee,ce=null){ce===null&&(ce=R),m=le.get(ce),m.init(ee),g.push(m),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ee.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),R!==ce&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ee.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights();const ue=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Le=ie.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const Ve=Le[ze];Ge(Ve,ce,ie),ue.add(Ve)}else Ge(Le,ce,ie),ue.add(Le)}),g.pop(),m=null,ue},this.compileAsync=function(R,ee,ce=null){const ue=this.compile(R,ee,ce);return new Promise(ie=>{function Le(){if(ue.forEach(function(ze){Ie.get(ze).currentProgram.isReady()&&ue.delete(ze)}),ue.size===0){ie(R);return}setTimeout(Le,10)}be.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Je=null;function at(R){Je&&Je(R)}function ft(){Nt.stop()}function Pt(){Nt.start()}const Nt=new by;Nt.setAnimationLoop(at),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(R){Je=R,B.setAnimationLoop(R),R===null?Nt.stop():Nt.start()},B.addEventListener("sessionstart",ft),B.addEventListener("sessionend",Pt),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(ee),ee=B.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,ee,E),m=le.get(R,g.length),m.init(ee),g.push(m),de.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Re.setFromProjectionMatrix(de),Q=this.localClippingEnabled,j=D.init(this.clippingPlanes,Q),M=W.get(R,f.length),M.init(),f.push(M),B.enabled===!0&&B.isPresenting===!0){const Le=x.xr.getDepthSensingMesh();Le!==null&&wn(Le,ee,-1/0,x.sortObjects)}wn(R,ee,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(I,Z),He=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,He&&q.addToRenderList(M,R),this.info.render.frame++,j===!0&&D.beginShadows();const ce=m.state.shadowsArray;X.render(ce,R,ee),j===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=M.opaque,ie=M.transmissive;if(m.setupLights(),ee.isArrayCamera){const Le=ee.cameras;if(ie.length>0)for(let ze=0,Ve=Le.length;ze<Ve;ze++){const We=Le[ze];ja(ue,ie,R,We)}He&&q.render(R);for(let ze=0,Ve=Le.length;ze<Ve;ze++){const We=Le[ze];rr(M,R,We,We.viewport)}}else ie.length>0&&ja(ue,ie,R,ee),He&&q.render(R),rr(M,R,ee);E!==null&&(N.updateMultisampleRenderTarget(E),N.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,ee),oe.resetDefaultState(),b=-1,G=null,g.pop(),g.length>0?(m=g[g.length-1],j===!0&&D.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function wn(R,ee,ce,ue){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Re.intersectsSprite(R)){ue&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const ze=ge.update(R),Ve=R.material;Ve.visible&&M.push(R,ze,Ve,ce,De.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Re.intersectsObject(R))){const ze=ge.update(R),Ve=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),De.copy(ze.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Ve)){const We=ze.groups;for(let Ke=0,Qe=We.length;Ke<Qe;Ke++){const Ye=We[Ke],pt=Ve[Ye.materialIndex];pt&&pt.visible&&M.push(R,ze,pt,ce,De.z,Ye)}}else Ve.visible&&M.push(R,ze,Ve,ce,De.z,null)}}const Le=R.children;for(let ze=0,Ve=Le.length;ze<Ve;ze++)wn(Le[ze],ee,ce,ue)}function rr(R,ee,ce,ue){const ie=R.opaque,Le=R.transmissive,ze=R.transparent;m.setupLightsView(ce),j===!0&&D.setGlobalState(x.clippingPlanes,ce),ue&&Ae.viewport(_.copy(ue)),ie.length>0&&ys(ie,ee,ce),Le.length>0&&ys(Le,ee,ce),ze.length>0&&ys(ze,ee,ce),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ja(R,ee,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ue.id]===void 0&&(m.state.transmissionRenderTarget[ue.id]=new oi(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Pn:Ii,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Le=m.state.transmissionRenderTarget[ue.id],ze=ue.viewport||_;Le.setSize(ze.z,ze.w);const Ve=x.getRenderTarget();x.setRenderTarget(Le),x.getClearColor(O),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),He&&q.render(ce);const We=x.toneMapping;x.toneMapping=Nr;const Ke=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),m.setupLightsView(ue),j===!0&&D.setGlobalState(x.clippingPlanes,ue),ys(R,ce,ue),N.updateMultisampleRenderTarget(Le),N.updateRenderTargetMipmap(Le),be.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ye=0,pt=ee.length;Ye<pt;Ye++){const St=ee[Ye],Lt=St.object,Un=St.geometry,dt=St.material,qe=St.group;if(dt.side===xn&&Lt.layers.test(ue.layers)){const $t=dt.side;dt.side=_n,dt.needsUpdate=!0,Xp(Lt,ce,ue,Un,dt,qe),dt.side=$t,dt.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(Le),N.updateRenderTargetMipmap(Le))}x.setRenderTarget(Ve),x.setClearColor(O,U),Ke!==void 0&&(ue.viewport=Ke),x.toneMapping=We}function ys(R,ee,ce){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let ie=0,Le=R.length;ie<Le;ie++){const ze=R[ie],Ve=ze.object,We=ze.geometry,Ke=ue===null?ze.material:ue,Qe=ze.group;Ve.layers.test(ce.layers)&&Xp(Ve,ee,ce,We,Ke,Qe)}}function Xp(R,ee,ce,ue,ie,Le){R.onBeforeRender(x,ee,ce,ue,ie,Le),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(x,ee,ce,ue,R,Le),ie.transparent===!0&&ie.side===xn&&ie.forceSinglePass===!1?(ie.side=_n,ie.needsUpdate=!0,x.renderBufferDirect(ce,ee,ue,ie,R,Le),ie.side=Or,ie.needsUpdate=!0,x.renderBufferDirect(ce,ee,ue,ie,R,Le),ie.side=xn):x.renderBufferDirect(ce,ee,ue,ie,R,Le),R.onAfterRender(x,ee,ce,ue,ie,Le)}function Xa(R,ee,ce){ee.isScene!==!0&&(ee=Ue);const ue=Ie.get(R),ie=m.state.lights,Le=m.state.shadowsArray,ze=ie.state.version,Ve=Fe.getParameters(R,ie.state,Le,ee,ce),We=Fe.getProgramCacheKey(Ve);let Ke=ue.programs;ue.environment=R.isMeshStandardMaterial?ee.environment:null,ue.fog=ee.fog,ue.envMap=(R.isMeshStandardMaterial?se:T).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",je),Ke=new Map,ue.programs=Ke);let Qe=Ke.get(We);if(Qe!==void 0){if(ue.currentProgram===Qe&&ue.lightsStateVersion===ze)return qp(R,Ve),Qe}else Ve.uniforms=Fe.getUniforms(R),R.onBeforeCompile(Ve,x),Qe=Fe.acquireProgram(Ve,We),Ke.set(We,Qe),ue.uniforms=Ve.uniforms;const Ye=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=D.uniform),qp(R,Ve),ue.needsLights=qy(R),ue.lightsStateVersion=ze,ue.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.directionalShadowMap.value=ie.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotShadowMap.value=ie.state.spotShadowMap,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMap.value=ie.state.pointShadowMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=Qe,ue.uniformsList=null,Qe}function Yp(R){if(R.uniformsList===null){const ee=R.currentProgram.getUniforms();R.uniformsList=cc.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function qp(R,ee){const ce=Ie.get(R);ce.outputColorSpace=ee.outputColorSpace,ce.batching=ee.batching,ce.batchingColor=ee.batchingColor,ce.instancing=ee.instancing,ce.instancingColor=ee.instancingColor,ce.instancingMorph=ee.instancingMorph,ce.skinning=ee.skinning,ce.morphTargets=ee.morphTargets,ce.morphNormals=ee.morphNormals,ce.morphColors=ee.morphColors,ce.morphTargetsCount=ee.morphTargetsCount,ce.numClippingPlanes=ee.numClippingPlanes,ce.numIntersection=ee.numClipIntersection,ce.vertexAlphas=ee.vertexAlphas,ce.vertexTangents=ee.vertexTangents,ce.toneMapping=ee.toneMapping}function Xy(R,ee,ce,ue,ie){ee.isScene!==!0&&(ee=Ue),N.resetTextureUnits();const Le=ee.fog,ze=ue.isMeshStandardMaterial?ee.environment:null,Ve=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ir,We=(ue.isMeshStandardMaterial?se:T).get(ue.envMap||ze),Ke=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Qe=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ye=!!ce.morphAttributes.position,pt=!!ce.morphAttributes.normal,St=!!ce.morphAttributes.color;let Lt=Nr;ue.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const Un=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,dt=Un!==void 0?Un.length:0,qe=Ie.get(ue),$t=m.state.lights;if(j===!0&&(Q===!0||R!==G)){const Kn=R===G&&ue.id===b;D.setState(ue,R,Kn)}let ht=!1;ue.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$t.state.version||qe.outputColorSpace!==Ve||ie.isBatchedMesh&&qe.batching===!1||!ie.isBatchedMesh&&qe.batching===!0||ie.isBatchedMesh&&qe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&qe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&qe.instancingMorph===!1&&ie.morphTexture!==null||qe.envMap!==We||ue.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==D.numPlanes||qe.numIntersection!==D.numIntersection)||qe.vertexAlphas!==Ke||qe.vertexTangents!==Qe||qe.morphTargets!==Ye||qe.morphNormals!==pt||qe.morphColors!==St||qe.toneMapping!==Lt||qe.morphTargetsCount!==dt)&&(ht=!0):(ht=!0,qe.__version=ue.version);let ai=qe.currentProgram;ht===!0&&(ai=Xa(ue,ee,ie));let _s=!1,On=!1,du=!1;const It=ai.getUniforms(),sr=qe.uniforms;if(Ae.useProgram(ai.program)&&(_s=!0,On=!0,du=!0),ue.id!==b&&(b=ue.id,On=!0),_s||G!==R){me.reverseDepthBuffer?(ae.copy(R.projectionMatrix),zM(ae),FM(ae),It.setValue(L,"projectionMatrix",ae)):It.setValue(L,"projectionMatrix",R.projectionMatrix),It.setValue(L,"viewMatrix",R.matrixWorldInverse);const Kn=It.map.cameraPosition;Kn!==void 0&&Kn.setValue(L,Te.setFromMatrixPosition(R.matrixWorld)),me.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&It.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,On=!0,du=!0)}if(ie.isSkinnedMesh){It.setOptional(L,ie,"bindMatrix"),It.setOptional(L,ie,"bindMatrixInverse");const Kn=ie.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),It.setValue(L,"boneTexture",Kn.boneTexture,N))}ie.isBatchedMesh&&(It.setOptional(L,ie,"batchingTexture"),It.setValue(L,"batchingTexture",ie._matricesTexture,N),It.setOptional(L,ie,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",ie._indirectTexture,N),It.setOptional(L,ie,"batchingColorTexture"),ie._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",ie._colorsTexture,N));const hu=ce.morphAttributes;if((hu.position!==void 0||hu.normal!==void 0||hu.color!==void 0)&&Y.update(ie,ce,ai),(On||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,It.setValue(L,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(sr.envMap.value=We,sr.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ee.environment!==null&&(sr.envMapIntensity.value=ee.environmentIntensity),On&&(It.setValue(L,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Yy(sr,du),Le&&ue.fog===!0&&z.refreshFogUniforms(sr,Le),z.refreshMaterialUniforms(sr,ue,ne,k,m.state.transmissionRenderTarget[R.id]),cc.upload(L,Yp(qe),sr,N)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(cc.upload(L,Yp(qe),sr,N),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&It.setValue(L,"center",ie.center),It.setValue(L,"modelViewMatrix",ie.modelViewMatrix),It.setValue(L,"normalMatrix",ie.normalMatrix),It.setValue(L,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Kn=ue.uniformsGroups;for(let fu=0,Ky=Kn.length;fu<Ky;fu++){const Kp=Kn[fu];F.update(Kp,ai),F.bind(Kp,ai)}}return ai}function Yy(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function qy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,ee,ce){Ie.get(R.texture).__webglTexture=ee,Ie.get(R.depthTexture).__webglTexture=ce;const ue=Ie.get(R);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,ee){const ce=Ie.get(R);ce.__webglFramebuffer=ee,ce.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(R,ee=0,ce=0){E=R,P=ee,A=ce;let ue=!0,ie=null,Le=!1,ze=!1;if(R){const We=Ie.get(R);if(We.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(L.FRAMEBUFFER,null),ue=!1;else if(We.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(We.__hasExternalTextures)N.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(We.__boundDepthTexture!==Ye){if(Ye!==null&&Ie.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ze=!0);const Qe=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[ee])?ie=Qe[ee][ce]:ie=Qe[ee],Le=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?ie=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[ce]:ie=Qe,_.copy(R.viewport),w.copy(R.scissor),C=R.scissorTest}else _.copy($).multiplyScalar(ne).floor(),w.copy(te).multiplyScalar(ne).floor(),C=_e;if(Ae.bindFramebuffer(L.FRAMEBUFFER,ie)&&ue&&Ae.drawBuffers(R,ie),Ae.viewport(_),Ae.scissor(w),Ae.setScissorTest(C),Le){const We=Ie.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+ee,We.__webglTexture,ce)}else if(ze){const We=Ie.get(R.texture),Ke=ee||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,ce||0,Ke)}b=-1},this.readRenderTargetPixels=function(R,ee,ce,ue,ie,Le,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Ae.bindFramebuffer(L.FRAMEBUFFER,Ve);try{const We=R.texture,Ke=We.format,Qe=We.type;if(!me.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-ue&&ce>=0&&ce<=R.height-ie&&L.readPixels(ee,ce,ue,ie,J.convert(Ke),J.convert(Qe),Le)}finally{const We=E!==null?Ie.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,ee,ce,ue,ie,Le,ze){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){const We=R.texture,Ke=We.format,Qe=We.type;if(!me.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=R.width-ue&&ce>=0&&ce<=R.height-ie){Ae.bindFramebuffer(L.FRAMEBUFFER,Ve);const Ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels(ee,ce,ue,ie,J.convert(Ke),J.convert(Qe),0);const pt=E!==null?Ie.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,pt);const St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await OM(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.deleteBuffer(Ye),L.deleteSync(St),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,ee=null,ce=0){R.isTexture!==!0&&(lc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,R=arguments[1]);const ue=Math.pow(2,-ce),ie=Math.floor(R.image.width*ue),Le=Math.floor(R.image.height*ue),ze=ee!==null?ee.x:0,Ve=ee!==null?ee.y:0;N.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,ce,0,0,ze,Ve,ie,Le),Ae.unbindTexture()},this.copyTextureToTexture=function(R,ee,ce=null,ue=null,ie=0){R.isTexture!==!0&&(lc("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,R=arguments[1],ee=arguments[2],ie=arguments[3]||0,ce=null);let Le,ze,Ve,We,Ke,Qe;ce!==null?(Le=ce.max.x-ce.min.x,ze=ce.max.y-ce.min.y,Ve=ce.min.x,We=ce.min.y):(Le=R.image.width,ze=R.image.height,Ve=0,We=0),ue!==null?(Ke=ue.x,Qe=ue.y):(Ke=0,Qe=0);const Ye=J.convert(ee.format),pt=J.convert(ee.type);N.setTexture2D(ee,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ee.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ee.unpackAlignment);const St=L.getParameter(L.UNPACK_ROW_LENGTH),Lt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Un=L.getParameter(L.UNPACK_SKIP_PIXELS),dt=L.getParameter(L.UNPACK_SKIP_ROWS),qe=L.getParameter(L.UNPACK_SKIP_IMAGES),$t=R.isCompressedTexture?R.mipmaps[ie]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,$t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Ke,Qe,Le,ze,Ye,pt,$t.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Ke,Qe,$t.width,$t.height,Ye,$t.data):L.texSubImage2D(L.TEXTURE_2D,ie,Ke,Qe,Le,ze,Ye,pt,$t),L.pixelStorei(L.UNPACK_ROW_LENGTH,St),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Un),L.pixelStorei(L.UNPACK_SKIP_ROWS,dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe),ie===0&&ee.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(R,ee,ce=null,ue=null,ie=0){R.isTexture!==!0&&(lc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,R=arguments[2],ee=arguments[3],ie=arguments[4]||0);let Le,ze,Ve,We,Ke,Qe,Ye,pt,St;const Lt=R.isCompressedTexture?R.mipmaps[ie]:R.image;ce!==null?(Le=ce.max.x-ce.min.x,ze=ce.max.y-ce.min.y,Ve=ce.max.z-ce.min.z,We=ce.min.x,Ke=ce.min.y,Qe=ce.min.z):(Le=Lt.width,ze=Lt.height,Ve=Lt.depth,We=0,Ke=0,Qe=0),ue!==null?(Ye=ue.x,pt=ue.y,St=ue.z):(Ye=0,pt=0,St=0);const Un=J.convert(ee.format),dt=J.convert(ee.type);let qe;if(ee.isData3DTexture)N.setTexture3D(ee,0),qe=L.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)N.setTexture2DArray(ee,0),qe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ee.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ee.unpackAlignment);const $t=L.getParameter(L.UNPACK_ROW_LENGTH),ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ai=L.getParameter(L.UNPACK_SKIP_PIXELS),_s=L.getParameter(L.UNPACK_SKIP_ROWS),On=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(qe,ie,Ye,pt,St,Le,ze,Ve,Un,dt,Lt.data):ee.isCompressedArrayTexture?L.compressedTexSubImage3D(qe,ie,Ye,pt,St,Le,ze,Ve,Un,Lt.data):L.texSubImage3D(qe,ie,Ye,pt,St,Le,ze,Ve,Un,dt,Lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,$t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,_s),L.pixelStorei(L.UNPACK_SKIP_IMAGES,On),ie===0&&ee.generateMipmaps&&L.generateMipmap(qe),Ae.unbindTexture()},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Ae.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tp?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===su?"display-p3":"srgb"}}class Dy extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Np extends Wt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,u=Jt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JA extends Wt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ee:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new H,r=[],s=[],o=[],a=new H,l=new lt;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ip extends Ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ee){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class QA extends Ip{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Up(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Nl=new H,_d=new Up,Sd=new Up,Md=new Up;class $A extends Ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new H){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Nl.subVectors(r[0],r[1]).add(r[0]),c=Nl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);M<1e-4&&(M=1),y<1e-4&&(y=M),m<1e-4&&(m=M),_d.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,y,M,m),Sd.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,y,M,m),Md.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,y,M,m)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Sd.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Md.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(_d.calc(l),Sd.calc(l),Md.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function og(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function eb(t,e){const n=1-t;return n*n*e}function tb(t,e){return 2*(1-t)*t*e}function nb(t,e){return t*t*e}function ha(t,e,n,i){return eb(t,e)+tb(t,n)+nb(t,i)}function ib(t,e){const n=1-t;return n*n*n*e}function rb(t,e){const n=1-t;return 3*n*n*t*e}function sb(t,e){return 3*(1-t)*t*t*e}function ob(t,e){return t*t*t*e}function fa(t,e,n,i,r){return ib(t,e)+rb(t,n)+sb(t,i)+ob(t,r)}class Ny extends Ui{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,r.x,s.x,o.x,a.x),fa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ab extends Ui{constructor(e=new H,n=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,r.x,s.x,o.x,a.x),fa(e,r.y,s.y,o.y,a.y),fa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Iy extends Ui{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lb extends Ui{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uy extends Ui{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ha(e,r.x,s.x,o.x),ha(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cb extends Ui{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ha(e,r.x,s.x,o.x),ha(e,r.y,s.y,o.y),ha(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oy extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(og(a,l.x,c.x,u.x,d.x),og(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var pf=Object.freeze({__proto__:null,ArcCurve:QA,CatmullRomCurve3:$A,CubicBezierCurve:Ny,CubicBezierCurve3:ab,EllipseCurve:Ip,LineCurve:Iy,LineCurve3:lb,QuadraticBezierCurve:Uy,QuadraticBezierCurve3:cb,SplineCurve:Oy});class ub extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new pf[r.type]().fromJSON(r))}return this}}class mf extends ub{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Iy(this.currentPoint.clone(),new Ee(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Uy(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Ny(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Oy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Ip(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class au extends In{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let y=0;const M=[],m=i/2;let f=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(p,2));function g(){const S=new H,P=new H;let A=0;const E=(n-e)/i;for(let b=0;b<=s;b++){const G=[],_=b/s,w=_*(n-e)+e;for(let C=0;C<=r;C++){const O=C/r,U=O*l+a,V=Math.sin(U),k=Math.cos(U);P.x=w*V,P.y=-_*i+m,P.z=w*k,d.push(P.x,P.y,P.z),S.set(V,E,k).normalize(),h.push(S.x,S.y,S.z),p.push(O,1-_),G.push(y++)}M.push(G)}for(let b=0;b<r;b++)for(let G=0;G<s;G++){const _=M[G][b],w=M[G+1][b],C=M[G+1][b+1],O=M[G][b+1];e>0&&(u.push(_,w,O),A+=3),n>0&&(u.push(w,C,O),A+=3)}c.addGroup(f,A,0),f+=A}function x(S){const P=y,A=new Ee,E=new H;let b=0;const G=S===!0?e:n,_=S===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,m*_,0),h.push(0,_,0),p.push(.5,.5),y++;const w=y;for(let C=0;C<=r;C++){const U=C/r*l+a,V=Math.cos(U),k=Math.sin(U);E.x=G*k,E.y=m*_,E.z=G*V,d.push(E.x,E.y,E.z),h.push(0,_,0),A.x=V*.5+.5,A.y=k*.5*_+.5,p.push(A.x,A.y),y++}for(let C=0;C<r;C++){const O=P+C,U=w+C;S===!0?u.push(U,U+1,O):u.push(U+1,U,O),b+=3}c.addGroup(f,b,S===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Op extends au{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Op(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zp extends In{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new H,S=new H,P=new H;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],S),p(n[A+2],P),l(x,S,P,g)}function l(g,x,S,P){const A=P+1,E=[];for(let b=0;b<=A;b++){E[b]=[];const G=g.clone().lerp(S,b/A),_=x.clone().lerp(S,b/A),w=A-b;for(let C=0;C<=w;C++)C===0&&b===A?E[b][C]=G:E[b][C]=G.clone().lerp(_,C/w)}for(let b=0;b<A;b++)for(let G=0;G<2*(A-b)-1;G++){const _=Math.floor(G/2);G%2===0?(h(E[b][_+1]),h(E[b+1][_]),h(E[b][_])):(h(E[b][_+1]),h(E[b+1][_+1]),h(E[b+1][_]))}}function c(g){const x=new H;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(g),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const g=new H;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const S=m(g)/2/Math.PI+.5,P=f(g)/Math.PI+.5;o.push(S,1-P)}y(),d()}function d(){for(let g=0;g<o.length;g+=6){const x=o[g+0],S=o[g+2],P=o[g+4],A=Math.max(x,S,P),E=Math.min(x,S,P);A>.9&&E<.1&&(x<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,x){const S=g*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function y(){const g=new H,x=new H,S=new H,P=new H,A=new Ee,E=new Ee,b=new Ee;for(let G=0,_=0;G<s.length;G+=9,_+=6){g.set(s[G+0],s[G+1],s[G+2]),x.set(s[G+3],s[G+4],s[G+5]),S.set(s[G+6],s[G+7],s[G+8]),A.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),b.set(o[_+4],o[_+5]),P.copy(g).add(x).add(S).divideScalar(3);const w=m(P);M(A,_+0,g,w),M(E,_+2,x,w),M(b,_+4,S,w)}}function M(g,x,S,P){P<0&&g.x===1&&(o[x]=g.x-1),S.x===0&&S.z===0&&(o[x]=P/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.vertices,e.indices,e.radius,e.details)}}class zy extends mf{constructor(e){super(e),this.uuid=Ro(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new mf().fromJSON(r))}return this}}const db={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Fy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,p;if(i&&(s=gb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let y=n;y<r;y+=n)d=t[y],h=t[y+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ua(s,o,n,a,l,p,0),o}};function Fy(t,e,n,i,r){let s,o;if(r===bb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=ag(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=ag(s,t[s],t[s+1],o);return o&&lu(o,o.next)&&(za(o),o=o.next),o}function fs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(lu(n,n.next)||bt(n.prev,n,n.next)===0)){if(za(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ua(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Sb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?fb(t,i,r,s):hb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),za(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=pb(fs(t),e,n),Ua(t,e,n,i,r,s,2)):o===2&&mb(t,e,n,i,r,s):Ua(fs(t),e,n,i,r,s,1);break}}}function hb(t){const e=t.prev,n=t,i=t.next;if(bt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=h&&y.y>=d&&y.y<=p&&to(r,a,s,l,o,c,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function fb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(bt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,y=u<d?u<h?u:h:d<h?d:h,M=a>l?a>c?a:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=gf(p,y,e,n,i),g=gf(M,m,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=f&&S&&S.z<=g;){if(x.x>=p&&x.x<=M&&x.y>=y&&x.y<=m&&x!==r&&x!==o&&to(a,u,l,d,c,h,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=M&&S.y>=y&&S.y<=m&&S!==r&&S!==o&&to(a,u,l,d,c,h,S.x,S.y)&&bt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=M&&x.y>=y&&x.y<=m&&x!==r&&x!==o&&to(a,u,l,d,c,h,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=g;){if(S.x>=p&&S.x<=M&&S.y>=y&&S.y<=m&&S!==r&&S!==o&&to(a,u,l,d,c,h,S.x,S.y)&&bt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function pb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!lu(r,s)&&ky(r,i,i.next,s)&&Oa(r,s)&&Oa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),za(i),za(i.next),i=t=s),i=i.next}while(i!==t);return fs(i)}function mb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Eb(o,a)){let l=By(o,a);o=fs(o,o.next),l=fs(l,l.next),Ua(o,e,n,i,r,s,0),Ua(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function gb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Fy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(wb(c));for(r.sort(vb),s=0;s<r.length;s++)n=xb(r[s],n);return n}function vb(t,e){return t.x-e.x}function xb(t,e){const n=yb(t,e);if(!n)return e;const i=By(n,t);return fs(i,i.next),fs(n,n.next)}function yb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&to(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Oa(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&_b(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function _b(t,e){return bt(t.prev,t,e.prev)<0&&bt(e.next,t,t.next)<0}function Sb(t,e,n,i){let r=t;do r.z===0&&(r.z=gf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Mb(r)}function Mb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function gf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function wb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function to(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Eb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Tb(t,e)&&(Oa(t,e)&&Oa(e,t)&&Ab(t,e)&&(bt(t.prev,t,e.prev)||bt(t,e.prev,e))||lu(t,e)&&bt(t.prev,t,t.next)>0&&bt(e.prev,e,e.next)>0)}function bt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function lu(t,e){return t.x===e.x&&t.y===e.y}function ky(t,e,n,i){const r=Ul(bt(t,e,n)),s=Ul(bt(t,e,i)),o=Ul(bt(n,i,t)),a=Ul(bt(n,i,e));return!!(r!==s&&o!==a||r===0&&Il(t,n,e)||s===0&&Il(t,i,e)||o===0&&Il(n,t,i)||a===0&&Il(n,e,i))}function Il(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ul(t){return t>0?1:t<0?-1:0}function Tb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ky(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Oa(t,e){return bt(t.prev,t,t.next)<0?bt(t,e,t.next)>=0&&bt(t,t.prev,e)>=0:bt(t,e,t.prev)<0||bt(t,t.next,e)<0}function Ab(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function By(t,e){const n=new vf(t.i,t.x,t.y),i=new vf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function ag(t,e,n,i){const r=new vf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function za(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function vf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class pa{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return pa.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];lg(e),cg(i,e);let o=e.length;n.forEach(lg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,cg(i,n[l]);const a=db.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function lg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function cg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Fp extends In{constructor(e=new zy([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _t(r,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,y=n.bevelSize!==void 0?n.bevelSize:p-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:Cb;let x,S=!1,P,A,E,b;f&&(x=f.getSpacedPoints(u),S=!0,h=!1,P=f.computeFrenetFrames(u,!1),A=new H,E=new H,b=new H),h||(m=0,p=0,y=0,M=0);const G=a.extractPoints(c);let _=G.shape;const w=G.holes;if(!pa.isClockWise(_)){_=_.reverse();for(let fe=0,L=w.length;fe<L;fe++){const we=w[fe];pa.isClockWise(we)&&(w[fe]=we.reverse())}}const O=pa.triangulateShape(_,w),U=_;for(let fe=0,L=w.length;fe<L;fe++){const we=w[fe];_=_.concat(we)}function V(fe,L,we){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(L,we)}const k=_.length,ne=O.length;function I(fe,L,we){let be,me,Ae;const Be=fe.x-L.x,Ie=fe.y-L.y,N=we.x-fe.x,T=we.y-fe.y,se=Be*Be+Ie*Ie,ve=Be*T-Ie*N;if(Math.abs(ve)>Number.EPSILON){const Se=Math.sqrt(se),ge=Math.sqrt(N*N+T*T),Fe=L.x-Ie/Se,z=L.y+Be/Se,W=we.x-T/ge,le=we.y+N/ge,D=((W-Fe)*T-(le-z)*N)/(Be*T-Ie*N);be=Fe+Be*D-fe.x,me=z+Ie*D-fe.y;const X=be*be+me*me;if(X<=2)return new Ee(be,me);Ae=Math.sqrt(X/2)}else{let Se=!1;Be>Number.EPSILON?N>Number.EPSILON&&(Se=!0):Be<-Number.EPSILON?N<-Number.EPSILON&&(Se=!0):Math.sign(Ie)===Math.sign(T)&&(Se=!0),Se?(be=-Ie,me=Be,Ae=Math.sqrt(se)):(be=Be,me=Ie,Ae=Math.sqrt(se/2))}return new Ee(be/Ae,me/Ae)}const Z=[];for(let fe=0,L=U.length,we=L-1,be=fe+1;fe<L;fe++,we++,be++)we===L&&(we=0),be===L&&(be=0),Z[fe]=I(U[fe],U[we],U[be]);const $=[];let te,_e=Z.concat();for(let fe=0,L=w.length;fe<L;fe++){const we=w[fe];te=[];for(let be=0,me=we.length,Ae=me-1,Be=be+1;be<me;be++,Ae++,Be++)Ae===me&&(Ae=0),Be===me&&(Be=0),te[be]=I(we[be],we[Ae],we[Be]);$.push(te),_e=_e.concat(te)}for(let fe=0;fe<m;fe++){const L=fe/m,we=p*Math.cos(L*Math.PI/2),be=y*Math.sin(L*Math.PI/2)+M;for(let me=0,Ae=U.length;me<Ae;me++){const Be=V(U[me],Z[me],be);de(Be.x,Be.y,-we)}for(let me=0,Ae=w.length;me<Ae;me++){const Be=w[me];te=$[me];for(let Ie=0,N=Be.length;Ie<N;Ie++){const T=V(Be[Ie],te[Ie],be);de(T.x,T.y,-we)}}}const Re=y+M;for(let fe=0;fe<k;fe++){const L=h?V(_[fe],_e[fe],Re):_[fe];S?(E.copy(P.normals[0]).multiplyScalar(L.x),A.copy(P.binormals[0]).multiplyScalar(L.y),b.copy(x[0]).add(E).add(A),de(b.x,b.y,b.z)):de(L.x,L.y,0)}for(let fe=1;fe<=u;fe++)for(let L=0;L<k;L++){const we=h?V(_[L],_e[L],Re):_[L];S?(E.copy(P.normals[fe]).multiplyScalar(we.x),A.copy(P.binormals[fe]).multiplyScalar(we.y),b.copy(x[fe]).add(E).add(A),de(b.x,b.y,b.z)):de(we.x,we.y,d/u*fe)}for(let fe=m-1;fe>=0;fe--){const L=fe/m,we=p*Math.cos(L*Math.PI/2),be=y*Math.sin(L*Math.PI/2)+M;for(let me=0,Ae=U.length;me<Ae;me++){const Be=V(U[me],Z[me],be);de(Be.x,Be.y,d+we)}for(let me=0,Ae=w.length;me<Ae;me++){const Be=w[me];te=$[me];for(let Ie=0,N=Be.length;Ie<N;Ie++){const T=V(Be[Ie],te[Ie],be);S?de(T.x,T.y+x[u-1].y,x[u-1].x+we):de(T.x,T.y,d+we)}}}j(),Q();function j(){const fe=r.length/3;if(h){let L=0,we=k*L;for(let be=0;be<ne;be++){const me=O[be];Te(me[2]+we,me[1]+we,me[0]+we)}L=u+m*2,we=k*L;for(let be=0;be<ne;be++){const me=O[be];Te(me[0]+we,me[1]+we,me[2]+we)}}else{for(let L=0;L<ne;L++){const we=O[L];Te(we[2],we[1],we[0])}for(let L=0;L<ne;L++){const we=O[L];Te(we[0]+k*u,we[1]+k*u,we[2]+k*u)}}i.addGroup(fe,r.length/3-fe,0)}function Q(){const fe=r.length/3;let L=0;ae(U,L),L+=U.length;for(let we=0,be=w.length;we<be;we++){const me=w[we];ae(me,L),L+=me.length}i.addGroup(fe,r.length/3-fe,1)}function ae(fe,L){let we=fe.length;for(;--we>=0;){const be=we;let me=we-1;me<0&&(me=fe.length-1);for(let Ae=0,Be=u+m*2;Ae<Be;Ae++){const Ie=k*Ae,N=k*(Ae+1),T=L+be+Ie,se=L+me+Ie,ve=L+me+N,Se=L+be+N;De(T,se,ve,Se)}}}function de(fe,L,we){l.push(fe),l.push(L),l.push(we)}function Te(fe,L,we){Ue(fe),Ue(L),Ue(we);const be=r.length/3,me=g.generateTopUV(i,r,be-3,be-2,be-1);He(me[0]),He(me[1]),He(me[2])}function De(fe,L,we,be){Ue(fe),Ue(L),Ue(be),Ue(L),Ue(we),Ue(be);const me=r.length/3,Ae=g.generateSideWallUV(i,r,me-6,me-3,me-2,me-1);He(Ae[0]),He(Ae[1]),He(Ae[3]),He(Ae[1]),He(Ae[2]),He(Ae[3])}function Ue(fe){r.push(l[fe*3+0]),r.push(l[fe*3+1]),r.push(l[fe*3+2])}function He(fe){s.push(fe.x),s.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Rb(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new pf[r.type]().fromJSON(r)),new Fp(i,e.options)}}const Cb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ee(s,o),new Ee(a,l),new Ee(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],y=e[r*3+2],M=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-d),new Ee(h,1-y),new Ee(M,1-f)]:[new Ee(a,1-l),new Ee(u,1-d),new Ee(p,1-y),new Ee(m,1-f)]}};function Rb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class kp extends zp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new kp(e.radius,e.detail)}}class Bp extends In{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const h=(n-e)/r,p=new H,y=new Ee;for(let M=0;M<=r;M++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,u.push(y.x,y.y)}d+=h}for(let M=0;M<r;M++){const m=M*(i+1);for(let f=0;f<i;f++){const g=f+m,x=g,S=g+i+1,P=g+i+2,A=g+1;a.push(x,S,A),a.push(S,P,A)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hp extends In{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new H,h=new H,p=[],y=[],M=[],m=[];for(let f=0;f<=i;f++){const g=[],x=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const A=P/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(A+S,1-x),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const x=u[f][g+1],S=u[f][g],P=u[f+1][g],A=u[f+1][g+1];(f!==0||o>0)&&p.push(x,S,A),(f!==i-1||l<Math.PI)&&p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vp extends In{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new H,d=new H,h=new H;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const M=y/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(M),d.y=(e+n*Math.cos(m))*Math.sin(M),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const M=(r+1)*p+y-1,m=(r+1)*(p-1)+y-1,f=(r+1)*(p-1)+y,g=(r+1)*p+y;o.push(M,m,g),o.push(m,f,g)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pb extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bt extends Po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lb extends Po{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Bc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Db{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}}const Nb=new Db;class Wa{constructor(e){this.manager=e!==void 0?e:Nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class Ib extends Error{constructor(e,n){super(e),this.response=n}}class Ub extends Wa{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Hi[e]!==void 0){Hi[e].push({onLoad:n,onProgress:i,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,y=p!==0;let M=0;const m=new ReadableStream({start(f){g();function g(){d.read().then(({done:x,value:S})=>{if(x)f.close();else{M+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:p});for(let A=0,E=u.length;A<E;A++){const b=u[A];b.onProgress&&b.onProgress(P)}f.enqueue(S),g()}},x=>{f.error(x)})}}});return new Response(m)}else throw new Ib(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{Bc.add(e,c);const u=Hi[e];delete Hi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ob extends Wa{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Na("img");function l(){u(),Bc.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zb extends Wa{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new Np,a=new Ub(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ki,o.wrapT=c.wrapT!==void 0?c.wrapT:Ki,o.magFilter=c.magFilter!==void 0?c.magFilter:nn,o.minFilter=c.minFilter!==void 0?c.minFilter:nn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Er),c.mipmapCount===1&&(o.minFilter=nn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class Ol extends Wa{constructor(e){super(e)}load(e,n,i,r){const s=new Wt,o=new Ob(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class cu extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Fb extends cu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const wd=new lt,ug=new H,dg=new H;class Hy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),n.position.copy(ug),dg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dg),n.updateMatrixWorld(),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hg=new lt,Xo=new H,Ed=new H;class kb extends Hy{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xo),Ed.copy(i.position),Ed.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ed),i.updateMatrixWorld(),r.makeTranslation(-Xo.x,-Xo.y,-Xo.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg)}}class xf extends cu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bb extends Hy{constructor(){super(new Pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends cu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Bb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hb extends cu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=pg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function pg(){return performance.now()}const mg=new lt;class Gb{constructor(e,n,i=0,r=1/0){this.ray=new bp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mg),this}intersectObject(e,n=!0,i=[]){return yf(e,this,i,n),i.sort(gg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yf(e[r],this,i,n);return i.sort(gg),i}}function gg(t,e){return t.distance-e.distance}function yf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)yf(s[o],e,n,!0)}}class vg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wb extends vs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);const xg={type:"change"},Gp={type:"start"},Vy={type:"end"},zl=new bp,yg=new Ai,jb=Math.cos(70*IM.DEG2RAD),kt=new H,An=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Td=1e-6;class Xb extends Wb{constructor(e,n=null){super(e,n),this.state=gt.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:co.ROTATE,MIDDLE:co.DOLLY,RIGHT:co.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new hs,this._lastTargetPosition=new H,this._quat=new hs().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vg,this._sphericalDelta=new vg,this._scale=1,this._panOffset=new H,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new H,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qb.bind(this),this._onPointerDown=Yb.bind(this),this._onPointerUp=Kb.bind(this),this._onContextMenu=nC.bind(this),this._onMouseWheel=Qb.bind(this),this._onKeyDown=$b.bind(this),this._onTouchStart=eC.bind(this),this._onTouchMove=tC.bind(this),this._onMouseDown=Zb.bind(this),this._onMouseMove=Jb.bind(this),this._interceptControlDown=iC.bind(this),this._interceptControlUp=rC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xg),this.update(),this.state=gt.NONE}update(e=null){const n=this.object.position;kt.copy(n).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=An:i>Math.PI&&(i-=An),r<-Math.PI?r+=An:r>Math.PI&&(r-=An),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<jb?this.object.lookAt(this.target):(yg.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(yg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Td||this._lastTargetPosition.distanceToSquared(this.target)>Td?(this.dispatchEvent(xg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?An/60*this.autoRotateSpeed*e:An/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){kt.setFromMatrixColumn(n,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,n){this.screenSpacePanning===!0?kt.setFromMatrixColumn(n,1):(kt.setFromMatrixColumn(n,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(An*this._rotateDelta.x/n.clientHeight),this._rotateUp(An*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(An*this._rotateDelta.x/n.clientHeight),this._rotateUp(An*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ee,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Yb(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function qb(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Kb(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vy),this.state=gt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Zb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=gt.DOLLY;break;case co.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}break;case co.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Gp)}function Jb(t){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Qb(t){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(t.preventDefault(),this.dispatchEvent(Gp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Vy))}function $b(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function eC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=gt.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=gt.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Gp)}function tC(t){switch(this._trackPointer(t),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=gt.NONE}}function nC(t){this.enabled!==!1&&t.preventDefault()}function iC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sC extends Dy{constructor(){super();const e=new ii;e.deleteAttribute("uv");const n=new Bt({side:_n}),i=new Bt,r=new xf(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new et(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new et(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new et(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new et(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new et(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new et(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new et(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new et(e,Os(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new et(e,Os(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const y=new et(e,Os(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const M=new et(e,Os(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const m=new et(e,Os(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new et(e,Os(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Os(t){const e=new Ia;return e.color.setScalar(t),e}class oC extends zb{constructor(e){super(e),this.type=Pn}parse(e){const o=function(b,G){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(G||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(G||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(G||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(G||""))}},u=`
`,d=function(b,G,_){G=G||1024;let C=b.pos,O=-1,U=0,V="",k=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));for(;0>(O=k.indexOf(u))&&U<G&&C<b.byteLength;)V+=k,U+=k.length,C+=128,k+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));return-1<O?(b.pos+=U+O+1,V+k.slice(0,O)):!1},h=function(b){const G=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,k;for((b.pos>=b.byteLength||!(V=d(b)))&&o(1,"no header found"),(k=V.match(G))||o(3,"bad initial token"),U.valid|=1,U.programtype=k[1],U.string+=V+`
`;V=d(b),V!==!1;){if(U.string+=V+`
`,V.charAt(0)==="#"){U.comments+=V+`
`;continue}if((k=V.match(_))&&(U.gamma=parseFloat(k[1])),(k=V.match(w))&&(U.exposure=parseFloat(k[1])),(k=V.match(C))&&(U.valid|=2,U.format=k[1]),(k=V.match(O))&&(U.valid|=4,U.height=parseInt(k[1],10),U.width=parseInt(k[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||o(3,"missing format specifier"),U.valid&4||o(3,"missing image size specifier"),U},p=function(b,G,_){const w=G;if(w<8||w>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);w!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const C=new Uint8Array(4*G*_);C.length||o(4,"unable to allocate buffer space");let O=0,U=0;const V=4*w,k=new Uint8Array(4),ne=new Uint8Array(V);let I=_;for(;I>0&&U<b.byteLength;){U+4>b.byteLength&&o(1),k[0]=b[U++],k[1]=b[U++],k[2]=b[U++],k[3]=b[U++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=w)&&o(3,"bad rgbe scanline format");let Z=0,$;for(;Z<V&&U<b.byteLength;){$=b[U++];const _e=$>128;if(_e&&($-=128),($===0||Z+$>V)&&o(3,"bad scanline data"),_e){const Re=b[U++];for(let j=0;j<$;j++)ne[Z++]=Re}else ne.set(b.subarray(U,U+$),Z),Z+=$,U+=$}const te=w;for(let _e=0;_e<te;_e++){let Re=0;C[O]=ne[_e+Re],Re+=w,C[O+1]=ne[_e+Re],Re+=w,C[O+2]=ne[_e+Re],Re+=w,C[O+3]=ne[_e+Re],O+=4}I--}return C},y=function(b,G,_,w){const C=b[G+3],O=Math.pow(2,C-128)/255;_[w+0]=b[G+0]*O,_[w+1]=b[G+1]*O,_[w+2]=b[G+2]*O,_[w+3]=1},M=function(b,G,_,w){const C=b[G+3],O=Math.pow(2,C-128)/255;_[w+0]=_l.toHalfFloat(Math.min(b[G+0]*O,65504)),_[w+1]=_l.toHalfFloat(Math.min(b[G+1]*O,65504)),_[w+2]=_l.toHalfFloat(Math.min(b[G+2]*O,65504)),_[w+3]=_l.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=h(m),g=f.width,x=f.height,S=p(m.subarray(m.pos),g,x);let P,A,E;switch(this.type){case ei:E=S.length/4;const b=new Float32Array(E*4);for(let _=0;_<E;_++)y(S,_*4,b,_*4);P=b,A=ei;break;case Pn:E=S.length/4;const G=new Uint16Array(E*4);for(let _=0;_<E;_++)M(S,_*4,G,_*4);P=G,A=Pn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:g,height:x,data:P,header:f.string,gamma:f.gamma,exposure:f.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){switch(o.type){case ei:case Pn:o.colorSpace=ir,o.minFilter=nn,o.magFilter=nn,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,i,r)}}const uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aC=new Pp(-1,1,1,-1,0,1);class lC extends In{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}}const cC=new lC;class uu{constructor(e){this._mesh=new et(cC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uC extends xs{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xi.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new uu(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _g extends xs{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class dC extends xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ee);this._width=i.width,this._height=i.height,n=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uC(uc),this.copyPass.material.blending=tn,this.clock=new Vb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_g!==void 0&&(o instanceof _g?i=!0:o instanceof dC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fC extends xs{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const pC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mC extends xs{constructor(){super();const e=pC;this.uniforms=xi.clone(e.uniforms),this.material=new Pb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new uu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ty?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ny?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===iy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ry?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Fl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},kl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ad={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function gC(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=vC(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new H(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new Np(r,e,e);return s.wrapS=Cn,s.wrapT=Cn,s.needsUpdate=!0,s}function vC(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const Bl={defines:{SAMPLES:16,SAMPLE_VECTORS:Gy(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Gy(t,e,n){const i=xC(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function xC(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new H(Math.cos(s),Math.sin(s),o))}return i}class yC{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),u=(3-Math.sqrt(3))/6,d=(l+c)*u,h=l-d,p=c-d,y=e-h,M=n-p;let m,f;y>M?(m=1,f=0):(m=0,f=1);const g=y-m+u,x=M-f+u,S=y-1+2*u,P=M-1+2*u,A=l&255,E=c&255,b=this.perm[A+this.perm[E]]%12,G=this.perm[A+m+this.perm[E+f]]%12,_=this.perm[A+1+this.perm[E+1]]%12;let w=.5-y*y-M*M;w<0?i=0:(w*=w,i=w*w*this.dot(this.grad3[b],y,M));let C=.5-g*g-x*x;C<0?r=0:(C*=C,r=C*C*this.dot(this.grad3[G],g,x));let O=.5-S*S-P*P;return O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[_],S,P)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(n+c),h=Math.floor(i+c),p=1/6,y=(u+d+h)*p,M=u-y,m=d-y,f=h-y,g=e-M,x=n-m,S=i-f;let P,A,E,b,G,_;g>=x?x>=S?(P=1,A=0,E=0,b=1,G=1,_=0):g>=S?(P=1,A=0,E=0,b=1,G=0,_=1):(P=0,A=0,E=1,b=1,G=0,_=1):x<S?(P=0,A=0,E=1,b=0,G=1,_=1):g<S?(P=0,A=1,E=0,b=0,G=1,_=1):(P=0,A=1,E=0,b=1,G=1,_=0);const w=g-P+p,C=x-A+p,O=S-E+p,U=g-b+2*p,V=x-G+2*p,k=S-_+2*p,ne=g-1+3*p,I=x-1+3*p,Z=S-1+3*p,$=u&255,te=d&255,_e=h&255,Re=this.perm[$+this.perm[te+this.perm[_e]]]%12,j=this.perm[$+P+this.perm[te+A+this.perm[_e+E]]]%12,Q=this.perm[$+b+this.perm[te+G+this.perm[_e+_]]]%12,ae=this.perm[$+1+this.perm[te+1+this.perm[_e+1]]]%12;let de=.6-g*g-x*x-S*S;de<0?r=0:(de*=de,r=de*de*this.dot3(this.grad3[Re],g,x,S));let Te=.6-w*w-C*C-O*O;Te<0?s=0:(Te*=Te,s=Te*Te*this.dot3(this.grad3[j],w,C,O));let De=.6-U*U-V*V-k*k;De<0?o=0:(De*=De,o=De*De*this.dot3(this.grad3[Q],U,V,k));let Ue=.6-ne*ne-I*I-Z*Z;return Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this.dot3(this.grad3[ae],ne,I,Z)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,d,h,p,y;const M=(e+n+i+r)*l,m=Math.floor(e+M),f=Math.floor(n+M),g=Math.floor(i+M),x=Math.floor(r+M),S=(m+f+g+x)*c,P=m-S,A=f-S,E=g-S,b=x-S,G=e-P,_=n-A,w=i-E,C=r-b,O=G>_?32:0,U=G>w?16:0,V=_>w?8:0,k=G>C?4:0,ne=_>C?2:0,I=w>C?1:0,Z=O+U+V+k+ne+I,$=o[Z][0]>=3?1:0,te=o[Z][1]>=3?1:0,_e=o[Z][2]>=3?1:0,Re=o[Z][3]>=3?1:0,j=o[Z][0]>=2?1:0,Q=o[Z][1]>=2?1:0,ae=o[Z][2]>=2?1:0,de=o[Z][3]>=2?1:0,Te=o[Z][0]>=1?1:0,De=o[Z][1]>=1?1:0,Ue=o[Z][2]>=1?1:0,He=o[Z][3]>=1?1:0,fe=G-$+c,L=_-te+c,we=w-_e+c,be=C-Re+c,me=G-j+2*c,Ae=_-Q+2*c,Be=w-ae+2*c,Ie=C-de+2*c,N=G-Te+3*c,T=_-De+3*c,se=w-Ue+3*c,ve=C-He+3*c,Se=G-1+4*c,ge=_-1+4*c,Fe=w-1+4*c,z=C-1+4*c,W=m&255,le=f&255,D=g&255,X=x&255,q=a[W+a[le+a[D+a[X]]]]%32,Y=a[W+$+a[le+te+a[D+_e+a[X+Re]]]]%32,re=a[W+j+a[le+Q+a[D+ae+a[X+de]]]]%32,xe=a[W+Te+a[le+De+a[D+Ue+a[X+He]]]]%32,J=a[W+1+a[le+1+a[D+1+a[X+1]]]]%32;let oe=.6-G*G-_*_-w*w-C*C;oe<0?u=0:(oe*=oe,u=oe*oe*this.dot4(s[q],G,_,w,C));let F=.6-fe*fe-L*L-we*we-be*be;F<0?d=0:(F*=F,d=F*F*this.dot4(s[Y],fe,L,we,be));let he=.6-me*me-Ae*Ae-Be*Be-Ie*Ie;he<0?h=0:(he*=he,h=he*he*this.dot4(s[re],me,Ae,Be,Ie));let B=.6-N*N-T*T-se*se-ve*ve;B<0?p=0:(B*=B,p=B*B*this.dot4(s[xe],N,T,se,ve));let K=.6-Se*Se-ge*ge-Fe*Fe-z*z;return K<0?y=0:(K*=K,y=K*K*this.dot4(s[J],Se,ge,Fe,z)),27*(u+d+h+p+y)}}class pi extends xs{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gC(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new oi(this.width,this.height,{type:Pn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Vt({defines:Object.assign({},Fl.defines),uniforms:xi.clone(Fl.uniforms),vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Lb,this.normalMaterial.blending=tn,this.pdMaterial=new Vt({defines:Object.assign({},Bl.defines),uniforms:xi.clone(Bl.uniforms),vertexShader:Bl.vertexShader,fragmentShader:Bl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Vt({defines:Object.assign({},kl.defines),uniforms:xi.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Vt({uniforms:xi.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ch,blendDst:ea,blendEquation:gi,blendSrcAlpha:bh,blendDstAlpha:ea,blendEquationAlpha:gi}),this.blendMaterial=new Vt({uniforms:xi.clone(Ad.uniforms),vertexShader:Ad.vertexShader,fragmentShader:Ad.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$x,blendSrc:Ch,blendDst:ea,blendEquation:gi,blendSrcAlpha:bh,blendDstAlpha:ea,blendEquationAlpha:gi}),this.fsQuad=new uu(null),this.originalClearColor=new Ze,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new Dp,this.depthTexture.format=ds,this.depthTexture.type=us,this.normalRenderTarget=new oi(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:Pn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gy(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case pi.OUTPUT.Off:break;case pi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case pi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case pi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case pi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case pi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case pi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new yC,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new Np(r,e,e,ti,Ii);return s.wrapS=Cn,s.wrapT=Cn,s.needsUpdate=!0,s}}pi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Hl={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Vl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},bd={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class _C extends xs{constructor(e,n){super(),this.edgesRT=new oi(e,n,{depthBuffer:!1,type:Pn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new oi(e,n,{depthBuffer:!1,type:Pn}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Wt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=nn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Wt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Jt,this.searchTexture.minFilter=Jt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=xi.clone(Hl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new Vt({defines:Object.assign({},Hl.defines),uniforms:this.uniformsEdges,vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader}),this.uniformsWeights=xi.clone(Vl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Vt({defines:Object.assign({},Vl.defines),uniforms:this.uniformsWeights,vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader}),this.uniformsBlend=xi.clone(bd.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Vt({uniforms:this.uniformsBlend,vertexShader:bd.vertexShader,fragmentShader:bd.fragmentShader}),this.fsQuad=new uu(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const SC="honeycutt-assets",ps="img";function Wp(){return new Promise((t,e)=>{const n=indexedDB.open(SC,1);n.onupgradeneeded=()=>n.result.createObjectStore(ps,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function MC(){try{const t=await Wp();return await new Promise(e=>{const n=t.transaction(ps).objectStore(ps).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function wC(t){const e=await Wp();return new Promise(n=>{const i=e.transaction(ps,"readwrite");i.objectStore(ps).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function EC(t){const e=await Wp();return new Promise(n=>{const i=e.transaction(ps,"readwrite");i.objectStore(ps).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function TC(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const Wy=Xe.createContext(null);let AC=1;function bC({children:t}){const[e,n]=Xe.useState([]);Xe.useEffect(()=>{MC().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=Xe.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await TC(l.result),u={id:`a${Date.now().toString(36)}${AC++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await wC(u),n(d=>[u,...d]),a(u)},l.readAsDataURL(o)}),[]),r=Xe.useCallback(async o=>{await EC(o),n(a=>a.filter(l=>l.id!==o))},[]),s=Xe.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return v.jsx(Wy.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function jp(){return Xe.useContext(Wy)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function qt(t,e){const n=new Ze(t);return e>=0?n.lerp(new Ze("#ffffff"),e):n.lerp(new Ze("#000000"),-e),n}function Pe(t,e=.75,n=.04,i={}){return new Bt({color:new Ze(t),roughness:e,metalness:n,...i})}function Ne(t,e,n,i){const r=new et(new ii(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function tt(t,e,n,i,r=28){const s=new et(new au(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function ye(t,e,n,i){return t.position.set(e,n,i),t}function Yo(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(ye(Ne(s,i,s,o),l,i/2,c))}const Sg={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.85),a=Pe(qt(s,.08),.9),l=Pe("#2b2b2e",.5,.3),c=r*.42,u=Math.min(.16,n*.12),d=r;t.add(ye(Ne(n,c,i,o),0,c/2+.08,0)),t.add(ye(Ne(n,d-.1,.16,o),0,(d-.1)/2+.08,-i/2+.08)),t.add(ye(Ne(u,c+.16,i,o),n/2-u/2,(c+.16)/2+.08,0)),t.add(ye(Ne(u,c+.16,i,o),-n/2+u/2,(c+.16)/2+.08,0));const h=n-u*2-.04,p=n>1.3?Math.round(n/.9):1,y=h/p;for(let M=0;M<p;M++){const m=-h/2+y/2+M*y;t.add(ye(Ne(y-.04,.16,i-.28,a),m,c+.16,.04)),t.add(ye(Ne(y-.06,.2,.16,a),m,c+.24,-i/2+.24))}Yo(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.7,.05),a=r*.5;t.add(ye(Ne(n,.06,i,o),0,a,0)),t.add(ye(Ne(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),Yo(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.7);t.add(ye(Ne(n,.1,i,o),0,r-.05,0)),Yo(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Pe(r,.6,.1);t.add(ye(tt(n/2,n/2,.08,s),0,i-.04,0)),t.add(ye(tt(.03,.04,i-.08,Pe("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(ye(tt(n*.34,n*.34,.02,Pe("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.45,.05);t.add(ye(Ne(n,.06,i,o),0,r-.03,0)),Yo(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Pe(r,.45,.05);t.add(ye(tt(n/2,n/2,.06,s),0,i-.03,0)),t.add(ye(tt(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(ye(tt(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.5,.06);t.add(ye(Ne(n,.05,i,o),0,r-.025,0)),t.add(ye(Ne(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(ye(Ne(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(ye(Ne(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe("#5b4a3a",.6),a=Pe(s,.9),l=Pe(qt(s,.12),.95),c=r*.5;t.add(ye(Ne(n,c,i,o),0,c/2,0)),t.add(ye(Ne(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(ye(Ne(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(ye(Ne(n-.12,.1,i*.62,Pe(qt(s,-.05),.9)),0,c+.2,i*.12));const u=(n-.2)/2;t.add(ye(Ne(u-.04,.12,.34,l),-u/2,c+.24,-i/2+.32)),t.add(ye(Ne(u-.04,.12,.34,l),u/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(ye(tt(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(ye(tt(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),Yo(t,n-.08,i-.08,.06,.05,.04,Pe("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(.012,r-.1,.01,Pe(qt(s,-.3),.6)),0,r/2,i/2+.002)),t.add(ye(tt(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(ye(tt(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe(qt(s,.06),.6),l=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r,i,o),0,r/2,0));const c=r>.6?3:1,u=(r-.08)/c;for(let d=0;d<c;d++){const h=.04+u/2+d*u;t.add(ye(Ne(n-.06,u-.03,.02,a),0,h,i/2+.005)),t.add(ye(tt(.01,.01,.12,l),0,h,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.6),a=.04;t.add(ye(Ne(a,r,i,o),-n/2+a/2,r/2,0)),t.add(ye(Ne(a,r,i,o),n/2-a/2,r/2,0)),t.add(ye(Ne(n,a,i,o),0,a/2,0)),t.add(ye(Ne(n,a,i,o),0,r-a/2,0)),t.add(ye(Ne(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const u=r/(l+1)*c;t.add(ye(Ne(n-a*2,a*.7,i-.04,o),0,u,0));const d=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let h=-n/2+a+.04;for(;h<n/2-a-.06;){const p=.03+Math.random()*.03,y=.12+Math.random()*.08;t.add(ye(Ne(p,y,i*.6,Pe(d[Math.floor(Math.random()*d.length)],.8)),h+p/2,u+a*.35+y/2,0)),h+=p+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Pe("#2b2b2e",.4,.4),o=Pe(r,.4,.3),a=new Bt({color:"#10141c",roughness:.2,metalness:.1,emissive:new Ze("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(ye(Ne(n,i,.05,o),0,l+i/2,0));const c=new et(new Ni(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(ye(tt(.03,.04,l,s),0,l/2,0)),t.add(ye(Ne(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Pe(r,1,0),o=Ne(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=Ne(n*.86,.022,i*.78,Pe(qt(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=tt(n/2,n/2,.02,Pe(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=tt(n*.36,n*.36,.022,Pe(qt(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Pe("#9a7a55",.7),o=i*.28;t.add(ye(tt(n*.36,n*.28,o,s),0,o/2,0)),t.add(ye(tt(.03,.03,i*.45,Pe("#5a4030",.8)),0,o+i*.2,0));const a=(c,u,d,h,p)=>{const y=new et(new kp(u,0),Pe(c,.9));y.castShadow=!0,t.add(ye(y,d,h,p))},l=o+i*.4;a(qt(r,.05),n*.42,0,l+n*.2,0),a(qt(r,-.1),n*.34,n*.22,l+n*.45,.04),a(qt(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(qt(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Pe("#3a3a3e",.4,.6);t.add(ye(tt(n*.32,n*.36,.04,s),0,.02,0)),t.add(ye(tt(.018,.018,i*.78,s),0,i*.4,0));const o=new et(new Op(n*.42,i*.22,24,1,!0),new Bt({color:new Ze(r),roughness:.6,emissive:new Ze(r),emissiveIntensity:.5,side:xn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new xf(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.5),a=Pe("#888",.3,.8);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n,.015,.005,Pe(qt(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(ye(tt(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(ye(tt(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe("#d8d2c8",.6),a=Pe(s,.3,.2);t.add(ye(Ne(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(ye(Ne(n,.05,i,a),0,r-.025,0)),t.add(ye(Ne(n*.3,.02,i*.5,Pe("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.4);t.add(ye(Ne(n,r,i,o),0,r/2,0));const a=Pe("#1a1a1d",.3,.2);t.add(ye(Ne(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(ye(tt(n*.11,n*.11,.01,Pe("#333",.5)),n*l,r+.02,i*c))},oven(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.4,.45);t.add(ye(Ne(n,r,i,o),0,r/2,0));const a=Pe("#26262a",.35,.3);t.add(ye(Ne(n-.06,r*.5,.02,a),0,r*.38,i/2+.006));const l=new Bt({color:"#12161c",roughness:.2,emissive:new Ze("#16242f"),emissiveIntensity:.25});t.add(ye(new et(new ii(n-.2,r*.26,.01),l),0,r*.4,i/2+.016)),t.add(ye(tt(.013,.013,n*.7,Pe("#bcc0c4",.3,.7)),0,r*.68,i/2+.02).rotateZ(Math.PI/2));const c=Pe("#1a1a1d",.3,.2);t.add(ye(Ne(n-.04,.02,i-.04,c),0,r+.01,0));for(const[u,d]of[[-.22,-.2],[.22,-.2],[-.22,.22],[.22,.22]])t.add(ye(tt(n*.1,n*.1,.01,Pe("#333",.5)),n*u,r+.02,i*d));t.add(ye(Ne(n,r*.16,.05,Pe(qt(s,-.12),.4)),0,r+.09,-i/2+.03))},appliance(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.4,.45);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n-.06,r-.1,.02,Pe(qt(s,-.05),.35,.5)),0,r/2,i/2+.006)),t.add(ye(tt(.012,.012,n*.62,Pe("#8c9094",.3,.8)),0,r-.08,i/2+.02).rotateZ(Math.PI/2)),t.add(ye(Ne(n-.08,.05,.02,Pe(qt(s,-.2),.4)),0,r-.05,i/2+.01))},washer(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.5);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(tt(n*.33,n*.33,.04,Pe("#9aa0a6",.3,.6)),0,r*.46,i/2-.005).rotateX(Math.PI/2));const a=new Bt({color:"#1f2e38",roughness:.12,metalness:.2,transparent:!0,opacity:.7});t.add(ye(tt(n*.25,n*.25,.04,a),0,r*.46,i/2+.012).rotateX(Math.PI/2)),t.add(ye(Ne(n-.06,.08,.02,Pe(qt(s,-.18),.4)),0,r-.08,i/2+.006))},sink(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,r-.05,i,Pe(s,.55)),0,(r-.05)/2,0)),t.add(ye(Ne(n,.05,i,Pe("#d8d2c8",.3,.2)),0,r-.025,0)),t.add(ye(Ne(n*.6,.05,i*.58,Pe("#9aa0a6",.25,.6)),0,r-.05,.02));const o=Pe("#b8bcc0",.2,.8);t.add(ye(tt(.015,.015,.16,o),0,r+.08,-i/2+.12)),t.add(ye(Ne(.02,.02,.13,o),0,r+.15,-i/2+.18))},toilet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#f2f2f0",.35,.05);t.add(ye(tt(n*.4,n*.34,r*.5,o),0,r*.25,i*.16)),t.add(ye(tt(n*.46,n*.46,.05,o),0,r*.52,i*.16)),t.add(ye(Ne(n*.96,r*.5,i*.26,o),0,r*.75,-i/2+i*.13))},bathtub(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,r,i,Pe(s||"#f3f3f1",.3,.05)),0,r/2,0)),t.add(ye(Ne(n-.16,r*.55,i-.16,Pe("#e6eff4",.2,.1)),0,r*.62,0)),t.add(ye(tt(.014,.014,.14,Pe("#b8bcc0",.2,.8)),n/2-.12,r+.06,0))},shower(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,.08,i,Pe(s||"#e8e8e6",.4,.05)),0,.04,0));const o=new Bt({color:"#cfe0e8",roughness:.05,metalness:.1,transparent:!0,opacity:.26,side:xn}),a=Pe("#9aa0a6",.3,.7),l=new et(new Ni(n,r-.08),o);l.position.set(0,r/2,i/2),l.castShadow=!1,t.add(l);const c=new et(new Ni(i,r-.08),o);c.rotation.y=Math.PI/2,c.position.set(n/2,r/2,0),c.castShadow=!1,t.add(c),t.add(ye(Ne(.03,r,.03,a),n/2,r/2,i/2)),t.add(ye(Ne(.03,r,.03,a),-n/2,r/2,i/2)),t.add(ye(tt(n*.12,n*.12,.04,a),-n*.1,r*.78,-i/2+.05))},fireplace(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#cfcabf",.7);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n*.6,r*.5,.06,Pe("#15120f",.6)),0,r*.32,i/2+.005)),t.add(ye(Ne(n+.12,.08,i+.1,Pe(qt(s||"#cfcabf",-.2),.6)),0,r*.62,0));const a=new xf("#ff7a30",3,3.5,2);a.position.set(0,r*.3,i/2-.1),t.add(a),t.add(ye(Ne(n*.4,r*.18,.04,new Bt({color:"#ff7a30",emissive:new Ze("#ff5a14"),emissiveIntensity:1.4})),0,r*.2,i/2-.02))},mirror(t,e){const{w:n,h:i,color:r}=e;t.add(ye(Ne(n,i,.05,Pe(r||"#caa86a",.4,.3)),0,i/2,0)),t.add(ye(Ne(n-.1,i-.1,.01,Pe("#cdd6dc",.05,.6)),0,i/2,.032))},barcart(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#b8923f",.3,.7),a=Pe("#d8d2c8",.2,.3);for(const[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.add(ye(tt(.012,.012,r,o),l*(n/2-.04),r/2,c*(i/2-.04))),t.add(ye(tt(.03,.03,.02,Pe("#222",.5)),l*(n/2-.04),.03,c*(i/2-.04)).rotateZ(Math.PI/2));t.add(ye(Ne(n,.02,i,a),0,r-.02,0)),t.add(ye(Ne(n,.02,i,a),0,r*.45,0));for(let l=0;l<3;l++)t.add(ye(tt(.03,.035,.18,Pe(["#3a5a3a","#5a2a2a","#2a3a5a"][l],.3,.2)),-n/5+l*.12,r+.09,0))},piano(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#161616",.3,.2);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n*.9,.04,.16,Pe("#f4f1ea",.3)),0,r*.5,i/2+.04)),t.add(ye(Ne(n*.92,.16,.06,o),0,r*.58,i/2+.05)),t.add(ye(Ne(n+.04,.05,i+.06,o),0,r+.02,0)),t.add(ye(Ne(.12,.02,.06,Pe("#b8923f",.3,.7)),0,.05,i/2))},coatrack(t,e){const{w:n,h:i,color:r}=e,s=Pe(r||"#5a4636",.5);t.add(ye(tt(.02,.025,i,s),0,i/2,0)),t.add(ye(tt(n*.4,n*.45,.03,s),0,.02,0));for(let o=0;o<4;o++){const a=o*Math.PI/2;t.add(ye(Ne(.16,.025,.025,s),Math.cos(a)*.08,i-.12,Math.sin(a)*.08).rotateY(-a))}},vase(t,e){const{w:n,h:i,color:r}=e,s=Pe(r||"#9a8f7a",.4,.1);t.add(ye(tt(n*.28,n*.18,i*.72,s),0,i*.36,0)),t.add(ye(tt(n*.2,n*.28,i*.12,s),0,i*.74,0));for(let o=0;o<6;o++){const a=o/6*Math.PI*2;t.add(ye(tt(.006,.006,i*.5,Pe("#4a6a3a",.7)),Math.cos(a)*.05,i*.82+i*.22,Math.sin(a)*.05).rotateZ(Math.cos(a)*.25))}},pouf(t,e){const{w:n,h:i,color:r}=e;t.add(ye(tt(n/2,n*.45,i,Pe(r||"#b6855f",.9)),0,i/2,0)),t.add(ye(tt(n*.5,n*.45,.01,Pe(qt(r||"#b6855f",-.15),.9)),0,i*.5,0))},ladder(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#9a6f43",.6);t.add(ye(Ne(.04,r,.04,o),-n/2+.04,r/2,0)),t.add(ye(Ne(.04,r,.04,o),n/2-.04,r/2,0));for(let a=0;a<4;a++){const l=r*.22*(a+1),c=Math.max(.12,i*(1-a*.18));t.add(ye(Ne(n-.04,.03,c,o),0,l,i/2-c/2))}}};function CC(t){const e=mp[t.type];if(!e)return new Gn;const n=new Gn,i={...e,color:t.color||e.color};return(Sg[e.shape]||Sg.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function zs(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const Mg={day:{bg:"#bcd8f2",exposure:1.05,env:1,key:["#fff6e8",2.6],fill:["#cfe2ff",.5],hemi:.7,amb:.3,ground:"#d8e2cf",skyHemi:"#cfe3ff",grndHemi:"#5a7a44"},night:{bg:"#0a1222",exposure:1.12,env:.22,key:["#aac2ff",.6],fill:["#485fb0",.3],hemi:.2,amb:.1,ground:"#46543b",skyHemi:"#33406a",grndHemi:"#1d2a18"}},wg=(t,e)=>Math.round(t/e)*e,Fs=t=>Math.max(0,Math.min(255,Math.round(t))),Ri=(t,e,n)=>Math.max(e,Math.min(n,t)),RC={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function Hc(t){const e=new H(t.dirx,0,t.dirz),n=new H(0,1,0),i=new H(t.nx,0,t.nz);return new lt().makeBasis(e,n,i).setPosition(t.ox,0,t.oz)}function PC(t,e,n,i,r){const s=new mf,o=(e+i)/2,a=(n+r)/2,l=(i-e)/2,c=(r-n)/2;if(t==="round")s.absellipse(o,a,l,c,0,Math.PI*2,!0);else if(t==="arch"){const u=Math.min(r-l,r-.02);s.moveTo(e,n),s.lineTo(i,n),s.lineTo(i,u),s.absarc(o,u,l,0,Math.PI,!1),s.lineTo(e,n),s.closePath()}else if(t==="star"){for(let u=0;u<10;u++){const d=-Math.PI/2+u*Math.PI/5,h=u%2===0?1:.42,p=o+Math.cos(d)*h*l,y=a+Math.sin(d)*h*c;u===0?s.moveTo(p,y):s.lineTo(p,y)}s.closePath()}else s.moveTo(e,n),s.lineTo(e,r),s.lineTo(i,r),s.lineTo(i,n),s.closePath();return s}function LC(t,e,n,i){const r=t.length,s=t.height,o=new zy;o.moveTo(-n,-.05),o.lineTo(r+n,-.05),o.lineTo(r+n,s),o.lineTo(-n,s),o.closePath();for(const l of i){const c=Ri(l.u,.02,r-.02),u=Ri(l.u+l.w,.02,r-.02),d=Ri(l.v,0,s-.04),h=Ri(l.v+l.h,d+.02,s-.02);u-c<.04||h-d<.04||o.holes.push(PC(l.shape,c,d,u,h))}const a=new Fp(o,{depth:e,bevelEnabled:!1,curveSegments:1});return a.translate(0,0,-e/2),a.applyMatrix4(Hc(t)),a.computeVertexNormals(),a}function DC(t,e,n,i,r){const s=e.length,o=e.height,a=Ri(n.u,0,s),l=Ri(n.u+n.w,0,s),c=Ri(n.v,0,o),u=Ri(n.v+n.h,0,o);if(l-a<.05||u-c<.05)return;const d=.05,h=i+.03,p=new Gn;p.matrixAutoUpdate=!1,p.matrix.copy(Hc(e));const y=(M,m,f,g)=>{const x=new et(new ii(M,m,h),r);x.position.set(f,g,0),x.castShadow=!0,x.receiveShadow=!0,p.add(x)};y(d,u-c,a-d/2,(c+u)/2),y(d,u-c,l+d/2,(c+u)/2),y(l-a+2*d,d,(a+l)/2,u+d/2),c>.06&&y(l-a+2*d,d,(a+l)/2,c-d/2),t.add(p)}function Eg(t){let e=t.nx,n=t.nz;(e<-1e-6||Math.abs(e)<1e-6&&n<0)&&(e=-e,n=-n);const i=t.ox*e+t.oz*n,r=s=>Math.round(s*1e3)/1e3;return`${r(e)},${r(n)},${r(i)}`}function NC(t,e,n){const i=(e.ox+e.dirx*t.u-n.ox)*n.dirx+(e.oz+e.dirz*t.u-n.oz)*n.dirz,r=(e.ox+e.dirx*(t.u+t.w)-n.ox)*n.dirx+(e.oz+e.dirz*(t.u+t.w)-n.oz)*n.dirz;return{...t,u:Math.min(i,r),w:Math.abs(r-i)}}function Tg(t,e,n,i,r){const s=Eg(e),o=[];for(const l of n)for(const c of["n","e","s","w"])o.push({kind:"room",uid:l.uid,side:c});for(const l of i)o.push({kind:"wall",uid:l.uid});const a=[];for(const l of o){const c=_r(l,n,i);if(!(!c||Eg(c)!==s))for(const u of r)s0(u.wall,l)&&a.push(s0(l,t)?u:NC(u,c,e))}return a}function IC(t="#b08a5e"){const e=new Ze(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let u=0;u<a;u++){const d=(Math.random()-.5)*36;o.fillStyle=`rgb(${Fs(n+d)},${Fs(i+d)},${Fs(r+d)})`,o.fillRect(0,u*l,512,l);for(let h=0;h<60;h++){o.strokeStyle=`rgba(${Fs(n*.45)},${Fs(i*.4)},${Fs(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const p=u*l+Math.random()*l;o.moveTo(0,p),o.bezierCurveTo(170,p+(Math.random()-.5)*6,340,p+(Math.random()-.5)*6,512,p),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,u*l,512,2)}const c=new JA(s);return c.wrapS=c.wrapT=Cn,c.colorSpace=fn,c}function UC({onOpenInspector:t,onFlash:e}){var w;const{state:n,dispatch:i}=Co(),{rooms:r,walls:s,items:o,builtins:a,openings:l,selected:c,ambiance:u,quality:d,visitMode:h}=n,{map:p}=jp(),y=Xe.useRef(null),M=Xe.useRef(null),m=Xe.useRef({}),f=Xe.useRef({});f.current={rooms:r,walls:s,items:o,selected:c,dispatch:i,onOpenInspector:t,openingMode:n.openingMode,openShape:n.openShape,visitMode:n.visitMode};function g(C){const O=m.current;if(!C||typeof C!="string")return null;if(C.startsWith("wood:")){const U=C.slice(5);return O.woodCache.has(U)||O.woodCache.set(U,IC(RC[U]||"#c79a6b")),O.woodCache.get(U)}if(C.startsWith("img:")){const U=C.slice(4);if(!O.imgCache.has(U)){const V=p[U];if(!V)return null;const k=new Ol().load(V);k.colorSpace=fn,k.wrapS=k.wrapT=Cn,O.imgCache.set(U,k)}return O.imgCache.get(U)}if(C.startsWith("mat:")){const U=C.slice(4);if(!tc[U])return null;const V=`mat:${U}`;if(!O.imgCache.has(V)){const k=new Ol().load(da(U));k.colorSpace=fn,k.wrapS=k.wrapT=Cn,O.imgCache.set(V,k)}return O.imgCache.get(V)}return null}function x(C){const O=m.current;if(typeof C!="string"||!C.startsWith("mat:"))return null;const U=C.slice(4),V=tc[U];if(!V||!V.normal)return null;const k=`nrm:${U}`;if(!O.imgCache.has(k)){const ne=new Ol().load(da(U,!0));ne.wrapS=ne.wrapT=Cn,O.imgCache.set(k,ne)}return O.imgCache.get(k)}function S(C){var O;return typeof C!="string"||!C.startsWith("mat:")?null:((O=tc[C.slice(4)])==null?void 0:O.repeat)||null}function P(C,O,U,V,k,ne=1.5,I={},Z=1){const $=g(C);if($){const te=(S(C)||ne)*(Z||1),_e=Math.max(1,V/te),Re=Math.max(1,k/te),j=$.clone();j.needsUpdate=!0,j.wrapS=j.wrapT=Cn,j.colorSpace=fn,m.current.roomTexList.push(j),j.repeat.set(_e,Re);const Q=new Bt({map:j,...I}),ae=x(C);if(ae){const de=ae.clone();de.needsUpdate=!0,de.wrapS=de.wrapT=Cn,de.repeat.set(_e,Re),m.current.roomTexList.push(de),Q.normalMap=de,Q.normalScale=new Ee(.6,.6)}return Q}return new Bt({color:new Ze(O||U),...I})}Xe.useEffect(()=>{const C=y.current,O=C.clientWidth,U=C.clientHeight,V=new ZA({antialias:!0,preserveDrawingBuffer:!0});V.setSize(O,U),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.shadowMap.enabled=!0,V.shadowMap.type=Qx,V.toneMapping=vp,V.toneMappingExposure=1.05,V.outputColorSpace=fn,C.appendChild(V.domElement);const k=new Dy;k.background=new Ze("#bcd8f2");const ne=new hf(V);try{k.environment=ne.fromScene(new sC,.04).texture}catch{}new oC().load(IS,J=>{try{J.mapping=Uc;const oe=ne.fromEquirectangular(J).texture;m.current.scene&&(m.current.scene.environment=oe,m.current.envMap=oe)}catch{}J.dispose()},void 0,()=>{});const I=new Vn(50,O/U,.1,200),Z=new Xb(I,V.domElement);Z.enableDamping=!0,Z.dampingFactor=.08,Z.minDistance=1.2,Z.maxDistance=60,Z.maxPolarAngle=Math.PI/2-.04,Z.minPolarAngle=.16,Z.enablePan=!0,Z.rotateSpeed=.7;const $=new Fb("#dfe6f0","#2a2620",.55);k.add($);const te=new Hb("#ffffff",.25);k.add(te);const _e=new fg("#fff4e0",2);_e.position.set(8,14,6),_e.castShadow=!0,_e.shadow.mapSize.set(4096,4096),_e.shadow.camera.near=1,_e.shadow.camera.far=80,_e.shadow.bias=-3e-4,_e.shadow.normalBias=.02,_e.shadow.radius=4;const Re=_e.shadow.camera;Re.left=-20,Re.right=20,Re.top=20,Re.bottom=-20,k.add(_e);const j=new fg("#cdddff",.5);j.position.set(-9,7,-5),k.add(j);let Q=null,ae=null;try{Q=new hC(V),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.setSize(O,U),Q.addPass(new fC(k,I)),ae=new pi(k,I,O,U),ae.output=pi.OUTPUT.Default,ae.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),ae.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),Q.addPass(ae),Q.addPass(new _C(O,U)),Q.addPass(new mC)}catch{Q=null}const de=new et(new Ni(400,400),new Bt({color:"#d8e2cf",roughness:1}));de.rotation.x=-Math.PI/2,de.position.y=-.04,de.receiveShadow=!0,k.add(de),new Ol().load(da("grass"),J=>{var oe,F;J.wrapS=J.wrapT=Cn,J.colorSpace=fn,J.repeat.set(200,200),J.anisotropy=((F=(oe=V.capabilities).getMaxAnisotropy)==null?void 0:F.call(oe))||8,de.material.map=J,de.material.needsUpdate=!0,m.current.groundTex=J},void 0,()=>{});const Te=new Gn,De=new Gn,Ue=new Gn;k.add(Te,De,Ue);const He=new et(new Bp(.46,.5,48),new Ia({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:xn}));He.rotation.x=-Math.PI/2,He.position.y=.03,He.visible=!1,He.renderOrder=2,k.add(He);const fe=new Gn,L=new et(new Vp(.5,.035,12,48),new Bt({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));L.rotation.x=-Math.PI/2,L.userData.gizmo=!0,fe.add(L);for(let J=0;J<4;J++){const oe=J/4*Math.PI*2,F=new et(new Hp(.07,16,16),new Bt({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));F.position.set(Math.cos(oe)*.5,0,Math.sin(oe)*.5),F.userData.gizmo=!0,fe.add(F)}fe.visible=!1,fe.renderOrder=3,k.add(fe);const we=new et(new Ni(1,1),new Ia({color:"#d9b779",transparent:!0,opacity:.4,side:xn,depthTest:!1}));we.matrixAutoUpdate=!1,we.visible=!1,we.renderOrder=4,k.add(we),Object.assign(m.current,{renderer:V,scene:k,camera:I,controls:Z,roomGroup:Te,furnitureGroup:De,ground:de,key:_e,fill:j,ambient:te,hemi:$,pmrem:ne,ring:He,gizmo:fe,builtinGroup:Ue,composer:Q,gtao:ae,openPreview:we,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new Gb,drag:null,rotate:null,pending:null,drawOpen:null,fp:{yaw:0,pitch:0,move:{f:0,b:0,l:0,r:0},look:null},visit:!1});const be=new Ai(new H(0,1,0),0),me=V.domElement,Ae=new Ee,Be=J=>{const oe=me.getBoundingClientRect(),[F,he,B,K]=jx(J.clientX,J.clientY,oe);Ae.set(F/B*2-1,-(he/K*2-1))},Ie=()=>{const J=new H;return m.current.raycaster.setFromCamera(Ae,I),m.current.raycaster.ray.intersectPlane(be,J)?J:null},N=J=>{for(;J&&J.userData.uid===void 0;)J=J.parent;return J},T=J=>{for(;J;){if(J.userData.gizmo)return!0;J=J.parent}return!1},se=J=>({u0:Math.min(J.u0,J.u1),u1:Math.max(J.u0,J.u1),v0:Math.min(J.v0,J.v1),v1:Math.max(J.v0,J.v1)}),ve=J=>{const oe=se(J),F=Math.max(.001,oe.u1-oe.u0),he=Math.max(.001,oe.v1-oe.v0),B=Hc(J.geom);B.multiply(new lt().makeTranslation((oe.u0+oe.u1)/2,(oe.v0+oe.v1)/2,.06)),B.multiply(new lt().makeScale(F,he,1)),m.current.openPreview.matrix.copy(B),m.current.openPreview.visible=!0},Se=J=>{var Me,je,$e,rt;Be(J);const oe=m.current.raycaster;oe.setFromCamera(Ae,I);const{items:F,selected:he,dispatch:B}=f.current;if(f.current.visitMode){m.current.fp.look={x:J.clientX,y:J.clientY},(Me=me.setPointerCapture)==null||Me.call(me,J.pointerId);return}if(f.current.openingMode){const Ge=m.current.wallMeshes||[],Je=oe.intersectObjects(Ge.map(at=>at.mesh),!1);if(Je.length){const at=Ge.find(ft=>ft.mesh===Je[0].object);if(at){const ft=at.geom,Pt=Je[0].point,Nt=(Pt.x-ft.ox)*ft.dirx+(Pt.z-ft.oz)*ft.dirz;Z.enabled=!1,m.current.drawOpen={ref:at.ref,geom:ft,u0:Nt,v0:Pt.y,u1:Nt,v1:Pt.y,plane:new Ai().setFromNormalAndCoplanarPoint(new H(ft.nx,0,ft.nz),new H(ft.ox,0,ft.oz))},ve(m.current.drawOpen),(je=me.setPointerCapture)==null||je.call(me,J.pointerId)}}return}if(m.current.gizmo.visible){const Ge=oe.intersectObject(m.current.gizmo,!0);if(Ge.length&&T(Ge[0].object)){const Je=F.find(ft=>ft.uid===(he==null?void 0:he.uid)),at=Ie();if(Je&&at){Z.enabled=!1,m.current.rotate={uid:Je.uid,cx:Je.x,cz:Je.z,startAng:Math.atan2(at.z-Je.z,at.x-Je.x),startRot:Je.rot||0},($e=me.setPointerCapture)==null||$e.call(me,J.pointerId);return}}}const K=oe.intersectObjects(m.current.furnitureGroup.children,!0);let pe=null;for(const Ge of K){const Je=N(Ge.object);if(Je){pe=Je;break}}if(pe){Z.enabled=!1,F.find(Je=>Je.uid===pe.userData.uid),B({type:"select",sel:{type:"item",uid:pe.userData.uid}}),lo(8);const Ge=Ie();m.current.drag={uid:pe.userData.uid,grp:pe,offX:Ge?Ge.x-pe.position.x:0,offZ:Ge?Ge.z-pe.position.z:0},(rt=me.setPointerCapture)==null||rt.call(me,J.pointerId)}else m.current.pending={x:J.clientX,y:J.clientY},ks.matches&&(m.current.orbit={x:J.clientX,y:J.clientY})},ge=J=>{var F,he;Be(J);const oe=m.current;if(oe.visit){const B=oe.fp.look;if(B){const K=ks.matches?J.clientY-B.y:J.clientX-B.x,pe=ks.matches?-(J.clientX-B.x):J.clientY-B.y;oe.fp.yaw-=K*.005,oe.fp.pitch=Math.max(-1.2,Math.min(1.2,oe.fp.pitch-pe*.005)),B.x=J.clientX,B.y=J.clientY}return}if(oe.orbit&&ks.matches){const B=J.clientY-oe.orbit.y,K=-(J.clientX-oe.orbit.x);oe.orbit.x=J.clientX,oe.orbit.y=J.clientY;const pe=2*Math.PI*.7/(me.clientHeight||1);(F=Z._rotateLeft)==null||F.call(Z,B*pe),(he=Z._rotateUp)==null||he.call(Z,K*pe);return}if(oe.drawOpen){const B=oe.drawOpen;oe.raycaster.setFromCamera(Ae,I);const K=new H;oe.raycaster.ray.intersectPlane(B.plane,K)&&(B.u1=(K.x-B.geom.ox)*B.geom.dirx+(K.z-B.geom.oz)*B.geom.dirz,B.v1=K.y,ve(B));return}if(oe.rotate){const B=Ie();if(!B)return;const K=Math.atan2(B.z-oe.rotate.cz,B.x-oe.rotate.cx);let pe=oe.rotate.startRot+(K-oe.rotate.startAng)*180/Math.PI;pe=(Math.round(pe)%360+360)%360,f.current.dispatch({type:"update",sel:{type:"item",uid:oe.rotate.uid},patch:{rot:pe},mergeKey:`rot3d:${oe.rotate.uid}`});return}if(oe.drag){const B=Ie();if(!B)return;f.current.dispatch({type:"update",sel:{type:"item",uid:oe.drag.uid},patch:{x:wg(B.x-oe.drag.offX,.05),z:wg(B.z-oe.drag.offZ,.05)},mergeKey:`mv3d:${oe.drag.uid}`})}},Fe=J=>{var F,he,B,K,pe,Me,je,$e,rt;const oe=m.current;if(oe.visit){oe.fp.look=null;try{(F=me.releasePointerCapture)==null||F.call(me,J.pointerId)}catch{}return}if(oe.drawOpen){const Ge=oe.drawOpen;oe.drawOpen=null,oe.openPreview.visible=!1,Z.enabled=!0;const Je=se(Ge),at=Ge.geom,ft=Ri(Je.u0,.02,at.length-.02),Pt=Ri(Je.u1,.02,at.length-.02)-ft;let Nt=Math.max(0,Je.v0),wn=Math.min(at.height,Je.v1)-Nt;if(Pt>.12&&wn>.12){const rr=Nt<.18;rr&&(wn+=Nt,Nt=0),f.current.dispatch({type:"addOpening",opening:{wall:Ge.ref,u:ft,v:Nt,w:Pt,h:wn,kind:rr?"doorway":"window",shape:f.current.openShape||"rect"}}),f.current.dispatch({type:"openingMode",value:!1}),lo(12),(B=(he=f.current).onOpenInspector)==null||B.call(he)}try{(K=me.releasePointerCapture)==null||K.call(me,J.pointerId)}catch{}return}if(oe.orbit=null,oe.drag||oe.rotate)oe.drag=null,oe.rotate=null,Z.enabled=!0;else if(oe.pending){if(Math.hypot(J.clientX-oe.pending.x,J.clientY-oe.pending.y)<5){Be(J),oe.raycaster.setFromCamera(Ae,I);const Ge=oe.wallMeshes||[],Je=Ge.length?oe.raycaster.intersectObjects(Ge.map(at=>at.mesh),!1):[];if(Je.length){const ft=Ge.find(Nt=>Nt.mesh===Je[0].object).ref,Pt=ft.kind==="room"?{type:"roomwall",uid:ft.uid,side:ft.side}:{type:"wall",uid:ft.uid};f.current.dispatch({type:"select",sel:Pt}),(Me=(pe=f.current).onOpenInspector)==null||Me.call(pe)}else if(f.current.selected)f.current.dispatch({type:"select",sel:null});else{const at=Ie(),ft=at&&f.current.rooms.find(Pt=>at.x>=Pt.x&&at.x<=Pt.x+Pt.w&&at.z>=Pt.z&&at.z<=Pt.z+Pt.d);ft&&(f.current.dispatch({type:"select",sel:{type:"room",uid:ft.uid}}),($e=(je=f.current).onOpenInspector)==null||$e.call(je))}}oe.pending=null}try{(rt=me.releasePointerCapture)==null||rt.call(me,J.pointerId)}catch{}};me.addEventListener("pointerdown",Se,!0),me.addEventListener("pointermove",ge),window.addEventListener("pointerup",Fe);const z=J=>oe=>{const F=m.current.fp.move,he=oe.key.toLowerCase(),B=J?1:0;if(he==="w"||he==="arrowup")F.f=B;else if(he==="s"||he==="arrowdown")F.b=B;else if(he==="a"||he==="arrowleft")F.l=B;else if(he==="d"||he==="arrowright")F.r=B;else return;m.current.visit&&oe.preventDefault()},W=z(!0),le=z(!1);window.addEventListener("keydown",W),window.addEventListener("keyup",le);let D;const X=new H,q=new H,Y=new H(0,1,0),re=()=>{const J=m.current,oe=ks.matches;if(Z.enableRotate===oe&&(Z.enableRotate=!oe,Z.enablePan=!oe),J.visit){const B=J.fp;I.quaternion.setFromEuler(new Mi(B.pitch,B.yaw,0,"YXZ")),X.set(0,0,-1).applyQuaternion(I.quaternion),X.y=0,X.normalize(),q.crossVectors(X,Y).normalize();const K=B.move.f-B.move.b,pe=B.move.r-B.move.l;if(K||pe){let Me=I.position.x+(X.x*K+q.x*pe)*.055,je=I.position.z+(X.z*K+q.z*pe)*.055;const $e=.28;for(const rt of J.colliders||[]){const Ge=(Me-rt.ox)*rt.dx+(je-rt.oz)*rt.dz,Je=Math.max(0,Math.min(rt.len,Ge)),at=rt.ox+rt.dx*Je,ft=rt.oz+rt.dz*Je,Pt=Me-at,Nt=je-ft,wn=Math.hypot(Pt,Nt);if(wn<$e){let rr=!1;for(const[ja,ys]of rt.gaps)if(Je>ja+.05&&Je<ys-.05){rr=!0;break}rr||(wn>1e-4?(Me+=Pt/wn*($e-wn),je+=Nt/wn*($e-wn)):(Me+=rt.nx*$e,je+=rt.nz*$e))}}I.position.x=Me,I.position.z=je}I.position.y=1.6}else Z.update();const F=I.position;if(!J.visit)for(const B of m.current.walls){const K=(F.x-B.center.x)*B.normal.x+(F.z-B.center.z)*B.normal.z;!B.hidden&&K>.1?B.hidden=!0:B.hidden&&K<-.1&&(B.hidden=!1),B.mesh.visible=!B.hidden}if(J.visit)for(const B of m.current.walls)B.hidden&&(B.hidden=!1,B.mesh.visible=!0);const he=M.current;if(he){const{items:B,selected:K}=f.current,pe=(K==null?void 0:K.type)==="item"?B.find(Me=>Me.uid===K.uid):null;if(pe&&!m.current.drag&&!m.current.rotate){const Me=Ti(pe.type),je=yr(Me,pe),$e=new H(pe.x,je.h+.35,pe.z).project(I),rt=V.domElement,Ge=($e.x*.5+.5)*rt.clientWidth,Je=(-$e.y*.5+.5)*rt.clientHeight;$e.z<1?(he.style.display="flex",he.style.left=`${Ge}px`,he.style.top=`${Je}px`):he.style.display="none"}else he.style.display="none"}Q&&m.current.useComposer?Q.render():V.render(k,I),D=requestAnimationFrame(re)};re();const xe=new ResizeObserver(()=>{const J=C.clientWidth,oe=C.clientHeight;V.setSize(J,oe),I.aspect=J/oe,I.updateProjectionMatrix(),Q==null||Q.setSize(J,oe)});return xe.observe(C),()=>{var J,oe,F,he,B,K,pe;cancelAnimationFrame(D),xe.disconnect(),me.removeEventListener("pointerdown",Se,!0),me.removeEventListener("pointermove",ge),window.removeEventListener("pointerup",Fe),window.removeEventListener("keydown",W),window.removeEventListener("keyup",le),Z.dispose(),zs(Te),zs(De),zs(Ue),He.geometry.dispose(),He.material.dispose(),(J=m.current.openPreview)==null||J.geometry.dispose(),(oe=m.current.openPreview)==null||oe.material.dispose(),m.current.woodCache.forEach(Me=>Me.dispose()),m.current.imgCache.forEach(Me=>Me.dispose()),m.current.roomTexList.forEach(Me=>Me.dispose()),(he=(F=m.current.groundTex)==null?void 0:F.dispose)==null||he.call(F),(K=(B=m.current.envMap)==null?void 0:B.dispose)==null||K.call(B),(pe=Q==null?void 0:Q.dispose)==null||pe.call(Q),ne.dispose(),V.dispose(),V.domElement.parentNode===C&&C.removeChild(V.domElement)}},[]),Xe.useEffect(()=>{const C=m.current;if(!C.renderer)return;const O=Mg[u]||Mg.day;C.scene.background.set(O.bg),C.scene.environmentIntensity=O.env,C.renderer.toneMappingExposure=O.exposure,C.key.color.set(O.key[0]),C.key.intensity=O.key[1],C.fill.color.set(O.fill[0]),C.fill.intensity=O.fill[1],C.hemi.intensity=O.hemi,O.skyHemi&&C.hemi.color.set(O.skyHemi),O.grndHemi&&C.hemi.groundColor.set(O.grndHemi),C.ambient.intensity=O.amb,C.ground&&O.ground&&C.ground.material.color.set(O.ground)},[u]),Xe.useEffect(()=>{var ne;const C=m.current;if(!C.renderer)return;const O=d||"high",U=window.devicePixelRatio||1,V=O==="normal"?Math.min(U,1.25):O==="high"?Math.min(U,1.5):Math.min(U,2);C.renderer.setPixelRatio(V),(ne=C.composer)==null||ne.setPixelRatio(V);const k=O!=="normal";C.renderer.shadowMap.enabled=k,C.key.castShadow=k,C.gtao&&(C.gtao.enabled=O==="max"),C.useComposer=O==="max",C.renderer.shadowMap.needsUpdate=!0},[d]),Xe.useEffect(()=>{const C=m.current;if(!C.camera)return;if(C.visit=h,!h){C.controls.enabled=!0,C.colliders=[],A();return}C.controls.enabled=!1;let O=1/0,U=-1/0,V=-1/0;const k=(j,Q)=>{O=Math.min(O,j),U=Math.max(U,j),V=Math.max(V,Q)};for(const j of r)k(j.x,j.z),k(j.x+j.w,j.z+j.d);for(const j of s)k(j.x1,j.z1),k(j.x2,j.z2);isFinite(O)||(O=-2,U=2,V=2);const ne=(O+U)/2,I=[];let Z=null;const $=j=>{const Q=_r(j,r,s);if(!Q)return;const ae=Tg(j,Q,r,s,l),de=ae.filter(Te=>Te.v<=.25&&Te.w>.5).map(Te=>[Math.max(0,Te.u),Math.min(Q.length,Te.u+Te.w)]);I.push({ox:Q.ox,oz:Q.oz,dx:Q.dirx,dz:Q.dirz,len:Q.length,nx:Q.nx,nz:Q.nz,gaps:de});for(const Te of ae)if(!Z&&(Te.kind==="doorway"||Te.v<=.25&&Te.w>.6)){const De=Te.u+Te.w/2;Z={x:Q.ox+Q.dirx*De,z:Q.oz+Q.dirz*De,nx:Q.nx,nz:Q.nz}}};for(const j of r)for(const Q of["n","e","s","w"]){const ae={kind:"room",uid:j.uid,side:Q};if(j.wallsOn&&j.wallsOn[Q]===!1){if(!Z){const de=_r(ae,r,s);de&&(Z={x:de.ox+de.dirx*de.length/2,z:de.oz+de.dirz*de.length/2,nx:de.nx,nz:de.nz})}continue}$(ae)}for(const j of s)$({kind:"wall",uid:j.uid});C.colliders=I;let te,_e,Re;Z?(te=Z.x-Z.nx*3,_e=Z.z-Z.nz*3,Re=Math.atan2(-Z.nx,-Z.nz)):(te=ne,_e=V+3.5,Re=0,r.length&&(e==null||e("No doorway — add a door or open a wall to walk inside"))),C.camera.position.set(te,1.6,_e),C.fp.yaw=Re,C.fp.pitch=0,C.fp.move={f:0,b:0,l:0,r:0},C.fp.look=null},[h]),Xe.useEffect(()=>{const C=m.current;if(!C.roomGroup)return;zs(C.roomGroup),C.roomGroup.clear(),C.walls=[],C.wallMeshes=[],C.floorMeshes=[],C.roomTexList.forEach($=>$.dispose()),C.roomTexList=[];const O=new Bt({color:"#cfc7ba",roughness:.8}),U=new Bt({color:"#e8e3da",roughness:.95,side:xn}),V=new Bt({color:"#efe9df",roughness:.7,metalness:.03}),k=.1,ne=($,te)=>Tg($,te,r,s,l),I=($,te,_e,Re,j,Q)=>{const ae=ne($,te),de=LC(te,j,Re,ae),Te=new et(de,_e);Te.castShadow=!0,Te.receiveShadow=!0,C.roomGroup.add(Te),C.wallMeshes.push({mesh:Te,ref:$,geom:te}),Q&&C.walls.push({mesh:Te,normal:new H(-te.nx,0,-te.nz),center:new H(te.ox+te.dirx*te.length/2,0,te.oz+te.dirz*te.length/2),hidden:!1});for(const De of ae)DC(C.roomGroup,te,De,j,V)},Z=($,te)=>{const _e=te.length,Re=ne($,te).filter(ae=>ae.v<=.06).map(ae=>[Math.max(0,ae.u-.05),Math.min(_e,ae.u+ae.w+.05)]).filter(([ae,de])=>de>ae);let j=[[k/2,_e-k/2]];for(const[ae,de]of Re){const Te=[];for(const[De,Ue]of j){if(de<=De||ae>=Ue){Te.push([De,Ue]);continue}ae>De&&Te.push([De,ae]),de<Ue&&Te.push([de,Ue])}j=Te}const Q=new Gn;Q.matrixAutoUpdate=!1,Q.matrix.copy(Hc(te));for(const[ae,de]of j){if(de-ae<.02)continue;const Te=new et(new ii(de-ae,.09,.04),O);Te.position.set((ae+de)/2,.045,k/2+.02),Q.add(Te)}C.roomGroup.add(Q)};for(const $ of r){const{x:te,z:_e,w:Re,d:j,height:Q}=$,ae=te+Re/2,de=_e+j/2,Te=$.floorTex||($.floorColor?void 0:"wood:oak"),De=P(Te,$.floorColor,"#b08a5e",Re,j,1.5,{roughness:.65,metalness:.02},$.floorScale||1),Ue=new et(new Ni(Re,j),De);Ue.rotation.x=-Math.PI/2,Ue.position.set(ae,0,de),Ue.receiveShadow=!0,Ue.userData.roomUid=$.uid,C.roomGroup.add(Ue),C.floorMeshes.push(Ue);const He=P($.wallTex,$.wallColor,"#e8e3da",Re,Q,1.2,{roughness:.95,side:xn}),fe=L=>!$.wallsOn||$.wallsOn[L]!==!1;for(const L of["n","e","s","w"]){if(!fe(L))continue;const we={kind:"room",uid:$.uid,side:L},be=_r(we,r,s);be&&(I(we,be,He,k/2,k,!0),Z(we,be))}}for(const $ of s){if(Math.hypot($.x2-$.x1,$.z2-$.z1)<.001)continue;const _e={kind:"wall",uid:$.uid},Re=_r(_e,r,s);Re&&I(_e,Re,U,0,$.thickness,!1)}!C.framed&&(r.length||s.length||o.length)&&(A(),C.framed=!0)},[r,s,l,p]),Xe.useEffect(()=>{const C=m.current;if(!C.furnitureGroup)return;const O=C.itemMap,U=ne=>{C.furnitureGroup.remove(ne.group),zs(ne.group)},V=new Set;for(const ne of o){V.add(ne.uid);let I=O.get(ne.uid);if(!I||I.type!==ne.type||I.color!==ne.color){I&&U(I);const $=CC(ne);C.furnitureGroup.add($),I={group:$,type:ne.type,color:ne.color},O.set(ne.uid,I)}I.group.position.set(ne.x,0,ne.z),I.group.rotation.y=-((ne.rot||0)*Math.PI)/180;const Z=ne.scale||{};I.group.scale.set(Z.x??1,Z.y??1,Z.z??1)}for(const[ne,I]of O)V.has(ne)||(U(I),O.delete(ne));const k=(c==null?void 0:c.type)==="item"?o.find(ne=>ne.uid===c.uid):null;if(k){const ne=Ti(k.type),I=yr(ne,k),Z=Math.max(I.w,I.d)/2*1.18+.12;C.ring.scale.setScalar(Z/.5),C.ring.position.set(k.x,.03,k.z),C.ring.visible=!0,C.gizmo.scale.setScalar(Z/.5),C.gizmo.position.set(k.x,.04,k.z),C.gizmo.visible=!0}else C.ring.visible=!1,C.gizmo.visible=!1},[o,c]),Xe.useEffect(()=>{const C=m.current;if(!C.builtinGroup)return;zs(C.builtinGroup),C.builtinGroup.clear();const O=.03;for(const U of a){const V=_r(U.wall,r,s);if(!V)continue;const k=g(U.tex),ne=x(U.tex),I=k?new Bt({map:k,normalMap:ne||null,roughness:.6,metalness:.04}):new Bt({color:new Ze(U.color||"#c7ad84"),roughness:.62,metalness:.04});if(U.kind==="board"){const ae=(U.u1+U.u2)/2,de=(U.v1+U.v2)/2,Te=U.u2-U.u1,De=U.v2-U.v1,Ue=Math.hypot(Te,De)||1e-6,He=Te/Ue,fe=De/Ue,L=new H(V.dirx*He,fe,V.dirz*He),we=new H(-V.dirx*fe,He,-V.dirz*fe),be=new H(V.nx,0,V.nz),me=new lt().makeBasis(L,we,be);me.setPosition(V.ox+V.dirx*ae+V.nx*(U.depth/2),de,V.oz+V.dirz*ae+V.nz*(U.depth/2));const Ae=new et(new ii(Ue,U.thickness||.05,U.depth||.04),I);Ae.castShadow=!0,Ae.receiveShadow=!0,Ae.matrixAutoUpdate=!1,Ae.matrix.copy(me),C.builtinGroup.add(Ae);continue}const Z=new lt,$=new H(V.dirx,0,V.dirz),te=new H(0,1,0),_e=new H(V.nx,0,V.nz);Z.makeBasis($,te,_e);const Re=U.u+U.w/2;Z.setPosition(V.ox+V.dirx*Re+V.nx*(U.depth/2),U.v+U.h/2,V.oz+V.dirz*Re+V.nz*(U.depth/2));const j=new Gn;j.matrixAutoUpdate=!1,j.matrix.copy(Z);const Q=(ae,de,Te,De,Ue,He)=>{const fe=new et(new ii(ae,de,Te),I);fe.position.set(De,Ue,He),fe.castShadow=!0,fe.receiveShadow=!0,j.add(fe)};U.kind==="cubby"?(Q(U.w,U.h,O,0,0,-U.depth/2+O/2),Q(U.w,O,U.depth,0,U.h/2-O/2,0),Q(U.w,O,U.depth,0,-U.h/2+O/2,0),Q(O,U.h,U.depth,-U.w/2+O/2,0,0),Q(O,U.h,U.depth,U.w/2-O/2,0,0)):Q(U.w,U.h,U.depth,0,0,0),C.builtinGroup.add(j)}},[a,r,s,p]);function A(){const C=m.current;if(!C.camera)return;const{rooms:O,walls:U,items:V}=f.current;let k=1/0,ne=-1/0,I=1/0,Z=-1/0,$=2.7;const te=(ae,de)=>{k=Math.min(k,ae),ne=Math.max(ne,ae),I=Math.min(I,de),Z=Math.max(Z,de)};for(const ae of O)te(ae.x,ae.z),te(ae.x+ae.w,ae.z+ae.d),$=Math.max($,ae.height);for(const ae of U)te(ae.x1,ae.z1),te(ae.x2,ae.z2),$=Math.max($,ae.height);for(const ae of V)te(ae.x,ae.z);isFinite(k)||(k=-2,ne=2,I=-2,Z=2);const _e=(k+ne)/2,Re=(I+Z)/2,j=Math.max(ne-k,Z-I,2),Q=j*1.1+4;C.camera.position.set(_e+j*.45,j*.8+3,Re+Q),C.controls.target.set(_e,$*.3,Re),C.controls.update()}const E=(c==null?void 0:c.type)==="item"?o.find(C=>C.uid===c.uid):null,b=c&&c.type!=="roomwall",G=c?E?((w=Ti(E.type))==null?void 0:w.name)||"Piece":c.type==="room"?"Room":c.type==="wall"||c.type==="roomwall"?"Wall":c.type==="opening"?"Opening":c.type==="builtin"?"Built-in":"Selection":null,_=C=>({onPointerDown:O=>{O.preventDefault(),m.current.fp.move[C]=1},onPointerUp:()=>{m.current.fp.move[C]=0},onPointerLeave:()=>{m.current.fp.move[C]=0},onPointerCancel:()=>{m.current.fp.move[C]=0}});return v.jsxs("div",{className:"scene3d",ref:y,children:[v.jsx("button",{className:"recenter",onClick:A,"aria-label":"Recenter view",children:v.jsx(qx,{size:20})}),v.jsx("button",{ref:M,style:{display:"none"},"aria-hidden":"true"}),h&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"visit-hint",children:"Drag to look · pad or WASD to walk"}),v.jsx("button",{className:"visit-exit",onClick:()=>i({type:"visitMode",value:!1}),children:"Exit walk-through"}),v.jsxs("div",{className:"visit-pad",children:[v.jsx("button",{className:"vp up",..._("f"),"aria-label":"Forward",children:"▲"}),v.jsx("button",{className:"vp left",..._("l"),"aria-label":"Left",children:"◀"}),v.jsx("button",{className:"vp right",..._("r"),"aria-label":"Right",children:"▶"}),v.jsx("button",{className:"vp down",..._("b"),"aria-label":"Back",children:"▼"})]})]}),c&&v.jsxs("div",{className:"edit-bar",onPointerDown:C=>C.stopPropagation(),onPointerUp:C=>C.stopPropagation(),children:[v.jsx("span",{className:"edit-bar-name",children:G}),v.jsx("button",{onClick:()=>t==null?void 0:t(),children:"Edit"}),E&&v.jsx("button",{onClick:()=>i({type:"update",sel:c,patch:{rot:((E.rot||0)+90)%360}}),children:"Rotate"}),b&&v.jsx("button",{onClick:()=>i({type:"duplicate",sel:c}),children:"Duplicate"}),b?v.jsx("button",{className:"danger",onClick:()=>i({type:"remove",sel:c}),children:"Delete"}):v.jsx("button",{onClick:()=>t==null?void 0:t(),children:"Open / Close"})]})]})}function Vi({icon:t,label:e,active:n,accent:i,onClick:r}){return v.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,v.jsx("span",{children:e})]})}function OC({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=Co(),{view:r,tool:s,ambiance:o,openingMode:a,openShape:l}=n,c=[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]];return v.jsxs("aside",{className:"rail",children:[v.jsxs("div",{className:"rail-group",children:[r==="2d"&&v.jsxs(v.Fragment,{children:[v.jsx(Vi,{icon:v.jsx(a0,{size:20}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),v.jsx(Vi,{icon:v.jsx(XS,{size:20}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),v.jsx(Vi,{icon:v.jsx(YS,{size:20}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})})]}),r==="3d"&&v.jsxs(v.Fragment,{children:[v.jsx(Vi,{icon:v.jsx(a0,{size:20}),label:"Select",active:!a,onClick:()=>i({type:"openingMode",value:!1})}),v.jsx(Vi,{icon:v.jsx(HS,{size:20}),label:"Opening",active:a,onClick:()=>i({type:"openingMode",value:!a})}),a&&v.jsx("div",{className:"rail-shapes",children:c.map(([u,d])=>v.jsx("button",{className:`rail-shape ${(l||"rect")===u?"active":""}`,onClick:()=>i({type:"openShape",value:u}),children:d},u))}),v.jsx("div",{className:"rail-sep"}),v.jsx(Vi,{icon:v.jsx(VS,{size:20}),label:"Visit",active:n.visitMode,onClick:()=>i({type:"visitMode",value:!n.visitMode})}),v.jsx("div",{className:"rail-sep"}),["day","night"].map(u=>v.jsx(Vi,{icon:v.jsx(jS,{size:20}),label:u[0].toUpperCase()+u.slice(1),active:o===u,onClick:()=>i({type:"ambiance",value:u})},u))]})]}),v.jsxs("div",{className:"rail-group bottom",children:[v.jsx(Vi,{icon:v.jsx(zS,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),v.jsx(Vi,{icon:v.jsx(kS,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}const _f=Bx.map(t=>({key:t.type,type:t.type,name:t.name,category:t.category,proc:t})),zC=["Seating","Tables","Bedroom","Storage","Kitchen","Appliances","Bathroom","Office","Decor"],FC=["All",...zC.filter(t=>_f.some(e=>e.category===t))];function kC({item:t}){const e=t.w/t.d;let n=86,i=n/e;return i>60&&(i=60,n=i*e),v.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:v.jsx(Yx,{item:t,wpx:n,dpx:i})})}function BC({onPick:t}){const[e,n]=Xe.useState("All"),[i,r]=Xe.useState(""),s=Xe.useMemo(()=>{const o=i.trim().toLowerCase();return _f.filter(a=>(e==="All"||a.category===e)&&(!o||a.name.toLowerCase().includes(o)))},[e,i]);return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"sheet-head",children:v.jsxs("div",{children:[v.jsx("h2",{children:"Library"}),v.jsxs("div",{className:"sub",children:[_f.length," pieces · tap to place"]})]})}),v.jsx("div",{className:"lib-search",children:v.jsx("input",{type:"search",value:i,onChange:o=>r(o.target.value),placeholder:"Search furniture, appliances…","aria-label":"Search library"})}),v.jsx("div",{className:"cats",children:FC.map(o=>v.jsx("button",{className:`chip ${e===o?"active":""}`,onClick:()=>n(o),children:o},o))}),v.jsxs("div",{className:"lib-grid",children:[s.map(o=>v.jsxs("button",{className:"lib-card",onClick:()=>t(o.type),title:o.name,children:[v.jsx("div",{className:"lib-thumb",children:v.jsx(kC,{item:o.proc})}),v.jsx("div",{className:"lib-name",children:o.name})]},o.key)),s.length===0&&v.jsxs("div",{className:"panel-empty",children:["No matches for “",i,"”."]})]})]})}const HC=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function qo({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=jp(),s=Xe.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var h;const u=(h=c.target.files)==null?void 0:h[0];if(c.target.value="",!u)return;const d=await r(u);e({color:"#ffffff",tex:`img:${d.id}`})};return v.jsxs("div",{className:"finish",children:[v.jsxs("div",{className:"finish-row",children:[ES.map(c=>v.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),v.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:v.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"finish-label",children:["Materials ",v.jsx("span",{className:"finish-by",children:"Poly Haven · CC0"})]}),v.jsx("div",{className:"finish-row",children:Xx.map(c=>v.jsx("button",{className:`swatch img ${a===`mat:${c.id}`?"active":""}`,style:{backgroundImage:`url(${da(c.id)})`},onClick:()=>e({color:c.color,tex:`mat:${c.id}`}),"aria-label":c.label,title:c.label},c.id))}),v.jsx("div",{className:"finish-label",children:"Wood"}),v.jsx("div",{className:"finish-row",children:HC.map(c=>v.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),v.jsx("div",{className:"finish-label",children:"Your images"}),v.jsxs("div",{className:"finish-row",children:[i.map(c=>v.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),v.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),v.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Bn({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:t}),v.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),v.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function Cd({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=d=>Math.max(n,Math.min(i,d)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,u=(d,h)=>s(o((d*12+h)*.0254));return v.jsxs("div",{className:"row measure-row",children:[v.jsxs("div",{className:"measure-head",children:[v.jsx("div",{className:"label",children:t}),v.jsx("div",{className:"measure-inputs",children:r==="ft"?v.jsxs(v.Fragment,{children:[v.jsx("input",{type:"number",value:l,min:0,step:1,onChange:d=>u(Math.max(0,Math.floor(Number(d.target.value)||0)),c)}),v.jsx("span",{className:"u",children:"ft"}),v.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:d=>u(l,Number(d.target.value)||0)}),v.jsx("span",{className:"u",children:"in"})]}):v.jsxs(v.Fragment,{children:[v.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:d=>s(o(Number(d.target.value)||n))}),v.jsx("span",{className:"u",children:"m"})]})})]}),v.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:d=>s(Number(d.target.value))})]})}function VC({onClose:t,onFlash:e}){const{state:n,dispatch:i}=Co(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c,sketches:u,openings:d}=n;if(!r)return null;const h=r,p=(g,x)=>i({type:"update",sel:h,patch:g,mergeKey:x}),y=()=>{i({type:"remove",sel:h}),e==null||e("Removed"),t()},M=()=>{i({type:"duplicate",sel:h}),e==null||e("Duplicated"),t()};if(h.type==="roomwall"){const g=a.find(A=>A.uid===h.uid);if(!g)return null;const x={n:"North",e:"East",s:"South",w:"West"},S=!g.wallsOn||g.wallsOn[h.side]!==!1,P=()=>i({type:"update",sel:{type:"room",uid:g.uid},patch:{wallsOn:{...g.wallsOn||{},[h.side]:!S}}});return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:"Wall section",sub:`${x[h.side]} wall of this room`}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Status"}),v.jsx("div",{className:"val",children:S?"Closed":"Open (doorway)"})]}),v.jsx("div",{className:"btn-row",children:S?v.jsxs("button",{className:"btn danger",onClick:P,children:[v.jsx(ar,{size:18})," Remove wall"]}):v.jsx("button",{className:"btn accent",onClick:P,children:"Add wall back"})})]})]})}if(h.type==="item"){const g=o.find(E=>E.uid===h.uid),x=g&&Ti(g.type);if(!g||!x)return null;const S=yr(x,g),P=g.scale||{},A=Math.round(((P.x??1)+(P.z??1))/2*100);return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:x.name,sub:`${st(S.w,s)} × ${st(S.d,s)} × ${st(S.h,s)}`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Colour"}),v.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:v.jsx(qo,{value:{color:g.color||x.color},allowTexture:!1,onChange:E=>p({color:E.color})})})]}),v.jsx(Bn,{label:"Size",value:A,min:30,max:300,step:1,onChange:E=>p({scale:{x:E/100,y:E/100,z:E/100}},`sz:${g.uid}`),display:`${A}%`}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Footprint"}),v.jsxs("div",{className:"val",children:[st(S.w,s)," × ",st(S.d,s)]})]}),v.jsx(Bn,{label:"Rotation",value:g.rot||0,min:0,max:359,step:1,onChange:E=>p({rot:E},`rot:${g.uid}`),display:`${Math.round(g.rot||0)}°`}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Quick turn"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(E=>v.jsxs("button",{className:"chip",style:(g.rot||0)===E?Ko:void 0,onClick:()=>p({rot:E}),children:[E,"°"]},E))})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:()=>p({rot:((g.rot||0)+90)%360}),children:[v.jsx(FS,{size:18})," Rotate"]}),v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]})]}),v.jsxs("div",{className:"btn-row",children:[v.jsx("button",{className:"btn",onClick:()=>p({scale:{x:1,y:1,z:1}}),children:"Reset size"}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}if(h.type==="room"){const g=a.find(S=>S.uid===h.uid);if(!g)return null;const x=g.w*g.d;return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:g.name||"Room",sub:`${st(g.w,s)} × ${st(g.d,s)}`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Name"}),v.jsx("input",{className:"name-input",type:"text",value:g.name||"",placeholder:"Room",onChange:S=>p({name:S.target.value}),style:{marginLeft:"auto",maxWidth:"64%",textAlign:"right"}})]}),v.jsx(Cd,{label:"Width",m:g.w,min:.5,max:40,units:s,onChange:S=>p({w:S},`rw:${g.uid}`)}),v.jsx(Cd,{label:"Depth",m:g.d,min:.5,max:40,units:s,onChange:S=>p({d:S},`rd:${g.uid}`)}),v.jsx(Cd,{label:"Wall height",m:g.height,min:1.5,max:6,units:s,onChange:S=>p({height:S},`rh:${g.uid}`)}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Floor area"}),v.jsx("div",{className:"val",children:s==="m"?`${x.toFixed(1)} m²`:`${Math.round(x*10.7639)} ft²`})]}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Wall sides"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([S,P])=>{const A=!g.wallsOn||g.wallsOn[S]!==!1;return v.jsx("button",{className:"chip",style:A?Ko:void 0,onClick:()=>p({wallsOn:{...g.wallsOn||{},[S]:!A}}),children:P},S)})})]}),v.jsxs("div",{className:"stack-row",children:[v.jsx("div",{className:"label",children:"Flooring"}),v.jsx(qo,{value:{color:g.floorColor,tex:g.floorTex},onChange:S=>p({floorColor:S.color,floorTex:S.tex})}),v.jsx(Bn,{label:"Pattern scale",value:g.floorScale||1,min:.3,max:4,step:.1,onChange:S=>p({floorScale:S},`fs:${g.uid}`),display:`${Math.round((g.floorScale||1)*100)}%`}),a.length>1&&v.jsx("button",{className:"btn",style:{marginTop:2},onClick:()=>{i({type:"floorAll",patch:{floorColor:g.floorColor,floorTex:g.floorTex,floorScale:g.floorScale||1}}),e==null||e("Flooring applied to all rooms")},children:"Apply flooring to whole house"})]}),v.jsxs("div",{className:"stack-row",children:[v.jsx("div",{className:"label",children:"Wall finish"}),v.jsx(qo,{value:{color:g.wallColor,tex:g.wallTex},onChange:S=>p({wallColor:S.color,wallTex:S.tex})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}if(h.type==="builtin"){const g=c.find(x=>x.uid===h.uid);if(!g)return null;if(g.kind==="board"){const x=Math.hypot(g.u2-g.u1,g.v2-g.v1);return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:"Board",sub:`${st(x,s)} long`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Length"}),v.jsx("div",{className:"val",children:st(x,s)})]}),v.jsx(Bn,{label:"Width",value:g.thickness,min:.01,max:.4,step:.005,onChange:S=>p({thickness:S},`bt:${g.uid}`),display:st(g.thickness,s)}),v.jsx(Bn,{label:"Depth",value:g.depth,min:.02,max:.6,step:.01,onChange:S=>p({depth:S},`bd:${g.uid}`),display:st(g.depth,s)}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Finish"}),v.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:v.jsx(qo,{value:{color:g.color,tex:g.tex},onChange:S=>p({color:S.color,tex:S.tex})})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:"Built-in",sub:`${st(g.w,s)} × ${st(g.h,s)} × ${st(g.depth,s)} deep`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Style"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([x,S])=>v.jsx("button",{className:"chip",style:g.kind===x?Ko:void 0,onClick:()=>p({kind:x}),children:S},x))})]}),v.jsx(Bn,{label:"Width",value:g.w,min:.1,max:12,step:.05,onChange:x=>p({w:x},`bw:${g.uid}`),display:st(g.w,s)}),v.jsx(Bn,{label:"Height",value:g.h,min:.1,max:6,step:.05,onChange:x=>p({h:x},`bh:${g.uid}`),display:st(g.h,s)}),v.jsx(Bn,{label:"Depth",value:g.depth,min:.05,max:3,step:.05,onChange:x=>p({depth:x},`bd:${g.uid}`),display:st(g.depth,s)}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Finish"}),v.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:v.jsx(qo,{value:{color:g.color,tex:g.tex},onChange:x=>p({color:x.color,tex:x.tex})})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}if(h.type==="opening"){const g=d.find(P=>P.uid===h.uid);if(!g)return null;const x={doorway:"Doorway",window:"Window",passthrough:"Pass-through"},S=P=>{p(P==="doorway"?{kind:P,v:0}:P==="window"?{kind:P,v:g.v<.05?.9:g.v}:{kind:P})};return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:x[g.kind]||"Opening",sub:`${st(g.w,s)} × ${st(g.h,s)}`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Type"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["doorway","Door"],["window","Window"],["passthrough","Open"]].map(([P,A])=>v.jsx("button",{className:"chip",style:g.kind===P?Ko:void 0,onClick:()=>S(P),children:A},P))})]}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Shape"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]].map(([P,A])=>v.jsx("button",{className:"chip",style:(g.shape||"rect")===P?Ko:void 0,onClick:()=>p({shape:P}),children:A},P))})]}),v.jsx(Bn,{label:"Width",value:g.w,min:.3,max:6,step:.05,onChange:P=>p({w:P},`ow:${g.uid}`),display:st(g.w,s)}),v.jsx(Bn,{label:"Height",value:g.h,min:.3,max:5,step:.05,onChange:P=>p({h:P},`oh:${g.uid}`),display:st(g.h,s)}),g.kind!=="doorway"&&v.jsx(Bn,{label:"Sill height",value:g.v,min:0,max:3,step:.05,onChange:P=>p({v:P},`ov:${g.uid}`),display:st(g.v,s)}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Top of opening"}),v.jsx("div",{className:"val",children:st(g.v+g.h,s)})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}if(h.type==="sketch"){const g=u.find(E=>E.uid===h.uid);if(!g)return null;const x=g.pts,S=g.closed?x.length:x.length-1;let P=0;for(let E=0;E<S;E++){const b=x[E],G=x[(E+1)%x.length];P+=Math.hypot(G.x-b.x,G.z-b.z)}let A=0;if(g.closed&&x.length>=3){for(let E=0,b=x.length-1;E<x.length;b=E++)A+=(x[b].x+x[E].x)*(x[b].z-x[E].z);A=Math.abs(A/2)}return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:"Sketch",sub:`${g.closed?"Closed shape":"Open outline"} · ${x.length} points`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Perimeter"}),v.jsx("div",{className:"val",children:st(P,s)})]}),g.closed&&v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Area"}),v.jsx("div",{className:"val",children:NS(A,s)})]}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Edges"}),v.jsx("div",{className:"val",style:{marginLeft:"auto",textAlign:"right",lineHeight:1.6},children:Array.from({length:S},(E,b)=>{const G=x[b],_=x[(b+1)%x.length];return v.jsx("div",{children:st(Math.hypot(_.x-G.x,_.z-G.z),s)},b)})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}const m=l.find(g=>g.uid===h.uid);if(!m)return null;const f=Math.hypot(m.x2-m.x1,m.z2-m.z1);return v.jsxs(v.Fragment,{children:[v.jsx(pr,{title:"Wall",sub:`${st(f,s)} long`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Length"}),v.jsx("div",{className:"val",children:st(f,s)})]}),v.jsx(Bn,{label:"Height",value:m.height,min:1.5,max:6,step:.1,onChange:g=>p({height:g},`wh:${m.uid}`),display:st(m.height,s)}),v.jsx(Bn,{label:"Thickness",value:m.thickness,min:.05,max:.4,step:.01,onChange:g=>p({thickness:g},`wt:${m.uid}`),display:st(m.thickness,s)}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(ar,{size:18})," Delete"]})]})]})]})}const Ko={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function pr({title:t,sub:e}){return v.jsx("div",{className:"sheet-head",children:v.jsxs("div",{children:[v.jsx("h2",{children:t}),v.jsx("div",{className:"sub",children:e})]})})}function GC({onFlash:t,onClose:e}){const{state:n,dispatch:i}=Co(),{units:r,quality:s,defaultHeight:o,rooms:a,walls:l,items:c}=n,{assets:u,addAsset:d,removeAsset:h}=jp(),p=Xe.useRef(null),y=async M=>{const m=[...M.target.files||[]];M.target.value="";for(const f of m)await d(f);m.length&&(t==null||t("Image added"))};return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"sheet-head",children:v.jsxs("div",{children:[v.jsx("h2",{children:"Settings"}),v.jsxs("div",{className:"sub",children:[a.length," rooms · ",l.length," walls · ",c.length," items"]})]})}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Units"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([M,m])=>v.jsx("button",{className:"chip",style:r===M?Ag:void 0,onClick:()=>i({type:"units",value:M}),children:m},M))})]}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Graphics"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["normal","Normal"],["high","High"],["max","Max"]].map(([M,m])=>v.jsx("button",{className:"chip",style:(s||"high")===M?Ag:void 0,onClick:()=>i({type:"quality",value:M}),children:m},M))})]}),v.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:v.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Lower this if 3D feels slow on your device. Normal turns off shadows & effects; Max adds ambient occlusion."})}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"New wall height"}),v.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:o,onChange:M=>i({type:"defaultHeight",value:Number(M.target.value)})}),v.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:st(o,r)})]}),v.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:v.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"My images"}),v.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[u.map(M=>v.jsxs("div",{className:"asset-tile",children:[v.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${M.dataUrl})`}}),v.jsx("button",{className:"asset-del",onClick:()=>h(M.id),"aria-label":"Delete image",children:"×"})]},M.id)),v.jsx("button",{className:"swatch upload",onClick:()=>{var M;return(M=p.current)==null?void 0:M.click()},"aria-label":"Upload image",children:"+"}),v.jsx("input",{ref:p,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:y})]})]}),v.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:v.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),v.jsxs("div",{className:"btn-row",children:[v.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),v.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const Ag={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function WC({kind:t,onClose:e,onFlash:n,onPick:i}){return v.jsxs("aside",{className:"panel",children:[v.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:v.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:v.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),v.jsxs("div",{className:"panel-body",children:[t==="catalog"&&v.jsx(BC,{onPick:i}),t==="settings"&&v.jsx(GC,{onFlash:n,onClose:e}),t==="inspector"&&v.jsx(VC,{onClose:e,onFlash:n})]})]})}const jC={cozy:.85,standard:1,spacious:1.18};function XC({bedrooms:t=2,bathrooms:e=1,size:n="standard"}={}){const i=jC[n]||1,r=[{name:"Living Room",w:5,d:4.2,tex:"wood:oak"},{name:"Kitchen",w:3.6,d:3.4,tex:"wood:birch"}];for(let d=0;d<t;d++)r.push({name:t>1?`Bedroom ${d+1}`:"Bedroom",w:3.6,d:3.4,tex:"wood:oak"});for(let d=0;d<e;d++)r.push({name:e>1?`Bath ${d+1}`:"Bathroom",w:2.4,d:2.2,color:"#d4d8dd"});r.forEach(d=>{d.w=+(d.w*i).toFixed(2),d.d=+(d.d*i).toFixed(2)});const s=r.reduce((d,h)=>d+h.w*h.d,0),o=Math.sqrt(s)*1.6,a=[];let l=0,c=0,u=0;for(const d of r)l>0&&l+d.w>o&&(c=+(c+u).toFixed(2),l=0,u=0),a.push({name:d.name,x:+l.toFixed(2),z:c,w:d.w,d:d.d,height:2.7,floorTex:d.tex,floorColor:d.color}),l=+(l+d.w).toFixed(2),u=Math.max(u,d.d);return a}function bg({label:t,value:e,min:n,max:i,onChange:r}){return v.jsxs("div",{className:"gen-row",children:[v.jsx("span",{children:t}),v.jsxs("div",{className:"gen-step",children:[v.jsx("button",{onClick:()=>r(Math.max(n,e-1)),"aria-label":`Fewer ${t}`,children:"−"}),v.jsx("b",{children:e}),v.jsx("button",{onClick:()=>r(Math.min(i,e+1)),"aria-label":`More ${t}`,children:"+"})]})]})}function YC({onBlank:t,onGenerate:e}){const[n,i]=Xe.useState("home"),[r,s]=Xe.useState(2),[o,a]=Xe.useState(1),[l,c]=Xe.useState("standard");return v.jsx("div",{className:"start-scrim",children:v.jsxs("div",{className:"start-card",children:[v.jsxs("div",{className:"start-brand",children:[v.jsx("div",{className:"logo",children:v.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 11 12 4l9 7"}),v.jsx("path",{d:"M5 10v9h14v-9"})]})}),v.jsxs("div",{children:[v.jsx("h1",{children:"Honeycutt Room Studio"}),v.jsx("p",{children:"Design your space in 2D & 3D"})]})]}),n==="home"?v.jsxs("div",{className:"start-actions",children:[v.jsxs("button",{className:"start-btn primary",onClick:t,children:[v.jsx("b",{children:"Start a blank project"}),v.jsx("span",{children:"Draw rooms and walls from scratch"})]}),v.jsxs("button",{className:"start-btn",onClick:()=>i("gen"),children:[v.jsx("b",{children:"Generate a house"}),v.jsx("span",{children:"Auto-build a layout by rooms & size"})]})]}):v.jsxs("div",{className:"gen-form",children:[v.jsx(bg,{label:"Bedrooms",value:r,min:1,max:6,onChange:s}),v.jsx(bg,{label:"Bathrooms",value:o,min:1,max:4,onChange:a}),v.jsxs("div",{className:"gen-row",children:[v.jsx("span",{children:"Size"}),v.jsx("div",{className:"gen-sizes",children:[["cozy","Cozy"],["standard","Standard"],["spacious","Spacious"]].map(([u,d])=>v.jsx("button",{className:`chip ${l===u?"active":""}`,onClick:()=>c(u),children:d},u))})]}),v.jsxs("div",{className:"gen-buttons",children:[v.jsx("button",{className:"start-btn",onClick:()=>i("home"),children:"Back"}),v.jsx("button",{className:"start-btn primary",onClick:()=>e(XC({bedrooms:r,bathrooms:o,size:l})),children:v.jsx("b",{children:"Build it"})})]})]})]})})}function qC(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=Co(),{view:r,selected:s,rooms:o,walls:a,items:l}=t,[c,u]=Xe.useState(null),[d,h]=Xe.useState(null),p=o.length===0&&a.length===0&&l.length===0,[y,M]=Xe.useState(p),m=Xe.useCallback(_=>h({msg:_,t:Date.now()}),[]);Xe.useEffect(()=>{if(!d)return;const _=setTimeout(()=>h(null),1600);return()=>clearTimeout(_)},[d]);let f=c||(s&&r!=="3d"?"inspector":null);f==="inspector"&&!s&&(f=null);const g=_=>e({type:"view",view:_}),x=_=>u(w=>w===_?null:_),S=()=>{u(null),r!=="3d"&&e({type:"select",sel:null})},P=()=>{e({type:"reset"}),u(null),M(!0)},A=()=>{M(!1),m("Blank project — pick Room to start")},E=_=>{e({type:"loadRooms",rooms:_}),M(!1),e({type:"view",view:"2d"}),m("House generated — tap a room to edit")},b=_=>{let w=0,C=0;const O=(s==null?void 0:s.type)==="room"&&o.find(U=>U.uid===s.uid);if(O)w=O.x+O.w/2,C=O.z+O.d/2;else if(o.length){const U=o[o.length-1];w=U.x+U.w/2,C=U.z+U.d/2}e({type:"addItem",kind:_,x:w,z:C}),u(null),lo(10),m("Added — drag to position")},G=async()=>{try{let _;if(r==="3d"){const w=document.querySelector(".scene3d canvas");if(!w)return;_=w.toDataURL("image/png")}else{const w=document.querySelector(".editor2d svg");if(!w)return;_=await KC(w)}await ZC(_,`honeycutt-room-${Date.now()}.png`),m("Image saved")}catch{m("Could not export")}};return v.jsxs("div",{className:"app",children:[v.jsxs("header",{className:"topbar",children:[v.jsxs("div",{className:"brand",children:[v.jsx("div",{className:"logo",children:v.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 11 12 4l9 7"}),v.jsx("path",{d:"M5 10v9h14v-9"})]})}),v.jsxs("div",{className:"title",children:[v.jsx("b",{children:"Honeycutt"}),v.jsx("span",{children:"Room Studio"})]})]}),v.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[v.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>g("2d"),"aria-pressed":r==="2d",children:[v.jsx(US,{size:15})," Plan"]}),v.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>g("3d"),"aria-pressed":r==="3d",children:[v.jsx(OS,{size:15})," 3D"]})]}),v.jsxs("div",{className:"tools",children:[v.jsx("button",{className:"tool",onClick:P,"aria-label":"New design",children:v.jsx(qS,{size:18})}),v.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:v.jsx(Kx,{size:18})}),v.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:v.jsx(GS,{size:18})}),v.jsx("button",{className:"tool",onClick:G,"aria-label":"Export image",children:v.jsx(WS,{size:18})})]})]}),v.jsxs("div",{className:"body",children:[v.jsx(OC,{onOpen:x,activePanel:f}),v.jsx("main",{className:"stage",children:r==="2d"?v.jsx(nM,{}):v.jsx(UC,{onOpenInspector:()=>u("inspector"),onFlash:m})}),f&&f!=="inspector"&&v.jsx("div",{className:"panel-scrim",onClick:S}),f&&v.jsx(WC,{kind:f,onClose:S,onFlash:m,onPick:b})]}),d&&v.jsx("div",{className:"toast",children:d.msg},d.t),y&&v.jsx(YC,{onBlank:A,onGenerate:E})]})}function KC(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const u=document.createElement("canvas");u.width=r*o,u.height=s*o;const d=u.getContext("2d");d.fillStyle="#ffffff",d.fillRect(0,0,u.width,u.height),d.drawImage(c,0,0,u.width,u.height),e(u.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function ZC(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}function jy(){var t,e,n;try{(n=(e=(t=window.screen)==null?void 0:t.orientation)==null?void 0:e.lock)==null||n.call(e,"landscape").catch(()=>{})}catch{}}jy();window.addEventListener("pointerdown",jy,{once:!0});Rd.createRoot(document.getElementById("root")).render(v.jsx(h_.StrictMode,{children:v.jsx(bC,{children:v.jsx(LS,{children:v.jsx(qC,{})})})}));
