(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},yc={},rg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),v_=Symbol.for("react.portal"),x_=Symbol.for("react.fragment"),__=Symbol.for("react.strict_mode"),y_=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),w_=Symbol.for("react.forward_ref"),E_=Symbol.for("react.suspense"),T_=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),Ap=Symbol.iterator;function b_(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,ag={};function mo(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||sg}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=mo.prototype;function Zh(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||sg}var Qh=Zh.prototype=new lg;Qh.constructor=Zh;og(Qh,mo.prototype);Qh.isPureReactComponent=!0;var bp=Array.isArray,cg=Object.prototype.hasOwnProperty,Jh={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Sa,type:t,key:s,ref:o,props:r,_owner:Jh.current}}function C_(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $h(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function R_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cp=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R_(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case v_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kc(o,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Cp,"$&/")+"/"),Ml(r,e,n,"",function(c){return c})):r!=null&&($h(r)&&(r=C_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kc(s,a);o+=Ml(s,e,n,l,r)}else if(l=b_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,a++),o+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function P_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},wl={transition:null},L_={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Jh};function hg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!$h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=mo;$e.Fragment=x_;$e.Profiler=y_;$e.PureComponent=Zh;$e.StrictMode=__;$e.Suspense=E_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_;$e.act=hg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Sa,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:M_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S_,_context:t},t.Consumer=t};$e.createElement=dg;$e.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:w_,render:t}};$e.isValidElement=$h;$e.lazy=function(t){return{$$typeof:A_,_payload:{_status:-1,_result:t},_init:P_}};$e.memo=function(t,e){return{$$typeof:T_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};$e.unstable_act=hg;$e.useCallback=function(t,e){return dn.current.useCallback(t,e)};$e.useContext=function(t){return dn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return dn.current.useEffect(t,e)};$e.useId=function(){return dn.current.useId()};$e.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return dn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};$e.useRef=function(t){return dn.current.useRef(t)};$e.useState=function(t){return dn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return dn.current.useTransition()};$e.version="18.3.1";rg.exports=$e;var Re=rg.exports;const D_=g_(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=Re,I_=Symbol.for("react.element"),U_=Symbol.for("react.fragment"),O_=Object.prototype.hasOwnProperty,z_=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k_={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O_.call(e,i)&&!k_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:I_,type:t,key:s,ref:o,props:r,_owner:z_.current}}yc.Fragment=U_;yc.jsx=fg;yc.jsxs=fg;ig.exports=yc;var x=ig.exports,dd={},pg={exports:{}},kn={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,ie){var Q=z.length;z.push(ie);e:for(;0<Q;){var le=Q-1>>>1,we=z[le];if(0<r(we,ie))z[le]=ie,z[Q]=we,Q=le;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var ie=z[0],Q=z.pop();if(Q!==ie){z[0]=Q;e:for(var le=0,we=z.length,ye=we>>>1;le<ye;){var J=2*(le+1)-1,re=z[J],me=J+1,ve=z[me];if(0>r(re,Q))me<we&&0>r(ve,re)?(z[le]=ve,z[me]=Q,le=me):(z[le]=re,z[J]=Q,le=J);else if(me<we&&0>r(ve,Q))z[le]=ve,z[me]=Q,le=me;else break e}}return ie}function r(z,ie){var Q=z.sortIndex-ie.sortIndex;return Q!==0?Q:z.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var ie=n(c);ie!==null;){if(ie.callback===null)i(c);else if(ie.startTime<=z)i(c),ie.sortIndex=ie.expirationTime,e(l,ie);else break;ie=n(c)}}function M(z){if(y=!1,g(z),!_)if(n(l)!==null)_=!0,K(C);else{var ie=n(c);ie!==null&&ee(M,ie.startTime-z)}}function C(z,ie){_=!1,y&&(y=!1,u(L),L=-1),m=!0;var Q=f;try{for(g(ie),h=n(l);h!==null&&(!(h.expirationTime>ie)||z&&!E());){var le=h.callback;if(typeof le=="function"){h.callback=null,f=h.priorityLevel;var we=le(h.expirationTime<=ie);ie=t.unstable_now(),typeof we=="function"?h.callback=we:h===n(l)&&i(l),g(ie)}else i(l);h=n(l)}if(h!==null)var ye=!0;else{var J=n(c);J!==null&&ee(M,J.startTime-ie),ye=!1}return ye}finally{h=null,f=Q,m=!1}}var w=!1,T=null,L=-1,B=5,S=-1;function E(){return!(t.unstable_now()-S<B)}function V(){if(T!==null){var z=t.unstable_now();S=z;var ie=!0;try{ie=T(!0,z)}finally{ie?W():(w=!1,T=null)}}else w=!1}var W;if(typeof p=="function")W=function(){p(V)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ne=Z.port2;Z.port1.onmessage=V,W=function(){ne.postMessage(null)}}else W=function(){v(V,0)};function K(z){T=z,w||(w=!0,W())}function ee(z,ie){L=v(function(){z(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,K(C))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var ie=3;break;default:ie=f}var Q=f;f=ie;try{return z()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,ie){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=f;f=z;try{return ie()}finally{f=Q}},t.unstable_scheduleCallback=function(z,ie,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,z){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Q+we,z={id:d++,callback:ie,priorityLevel:z,startTime:Q,expirationTime:we,sortIndex:-1},Q>le?(z.sortIndex=Q,e(c,z),n(l)===null&&z===n(c)&&(y?(u(L),L=-1):y=!0,ee(M,Q-le))):(z.sortIndex=we,e(l,z),_||m||(_=!0,K(C))),z},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(z){var ie=f;return function(){var Q=f;f=ie;try{return z.apply(this,arguments)}finally{f=Q}}}})(gg);mg.exports=gg;var F_=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=Re,zn=F_;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,na={};function cs(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(na[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hd=Object.prototype.hasOwnProperty,H_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},Pp={};function V_(t){return hd.call(Pp,t)?!0:hd.call(Rp,t)?!1:H_.test(t)?Pp[t]=!0:(Rp[t]=!0,!1)}function G_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function W_(t,e,n,i){if(e===null||typeof e>"u"||G_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);Zt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(W_(e,n,r,i)&&(n=null),i||r===null?V_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),_g=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Zc;function zo(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var Qc=!1;function Jc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function j_(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ns:return"Portal";case fd:return"Profiler";case rf:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _g:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case of:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function X_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y_(t){var e=Sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=Y_(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vd(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function xd(t,e){wg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(ko(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Eg(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q_=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){q_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function Cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var K_=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(t,e){if(e){if(K_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,qs=null,Ks=null;function Op(t){if(t=Ea(t)){if(typeof Td!="function")throw Error(he(280));var e=t.stateNode;e&&(e=Tc(e),Td(t.stateNode,t.type,e))}}function Rg(t){qs?Ks?Ks.push(t):Ks=[t]:qs=t}function Pg(){if(qs){var t=qs,e=Ks;if(Ks=qs=null,Op(t),e)for(t=0;t<e.length;t++)Op(e[t])}}function Lg(t,e){return t(e)}function Dg(){}var $c=!1;function Ng(t,e,n){if($c)return t(e,n);$c=!0;try{return Lg(t,e,n)}finally{$c=!1,(qs!==null||Ks!==null)&&(Dg(),Pg())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Tc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Ad=!1;if(Wi)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Ad=!1}function Z_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Xo=!1,jl=null,Xl=!1,bd=null,Q_={onError:function(t){Xo=!0,jl=t}};function J_(t,e,n,i,r,s,o,a,l){Xo=!1,jl=null,Z_.apply(Q_,arguments)}function $_(t,e,n,i,r,s,o,a,l){if(J_.apply(this,arguments),Xo){if(Xo){var c=jl;Xo=!1,jl=null}else throw Error(he(198));Xl||(Xl=!0,bd=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(us(t)!==t)throw Error(he(188))}function ey(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zp(r),t;if(s===i)return zp(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function Ug(t){return t=ey(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var zg=zn.unstable_scheduleCallback,kp=zn.unstable_cancelCallback,ty=zn.unstable_shouldYield,ny=zn.unstable_requestPaint,Rt=zn.unstable_now,iy=zn.unstable_getCurrentPriorityLevel,lf=zn.unstable_ImmediatePriority,kg=zn.unstable_UserBlockingPriority,Yl=zn.unstable_NormalPriority,ry=zn.unstable_LowPriority,Fg=zn.unstable_IdlePriority,Sc=null,Si=null;function sy(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:ly,oy=Math.log,ay=Math.LN2;function ly(t){return t>>>=0,t===0?32:31-(oy(t)/ay|0)|0}var Ia=64,Ua=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=cy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bg(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function dy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vg,uf,Gg,Wg,jg,Rd=!1,Oa=[],dr=null,hr=null,fr=null,sa=new Map,oa=new Map,or=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function So(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function fy(t,e,n,i,r){switch(e){case"focusin":return dr=So(dr,t,e,n,i,r),!0;case"dragenter":return hr=So(hr,t,e,n,i,r),!0;case"mouseover":return fr=So(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,So(sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oa.set(s,So(oa.get(s)||null,t,e,n,i,r)),!0}return!1}function Xg(t){var e=Wr(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=Ig(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ed=i,n.target.dispatchEvent(i),Ed=null}else return e=Ea(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bp(t,e,n){El(t)&&n.delete(e)}function py(){Rd=!1,dr!==null&&El(dr)&&(dr=null),hr!==null&&El(hr)&&(hr=null),fr!==null&&El(fr)&&(fr=null),sa.forEach(Bp),oa.forEach(Bp)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,py)))}function aa(t){function e(r){return Mo(r,t)}if(0<Oa.length){Mo(Oa[0],t);for(var n=1;n<Oa.length;n++){var i=Oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&Mo(dr,t),hr!==null&&Mo(hr,t),fr!==null&&Mo(fr,t),sa.forEach(e),oa.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Xg(n),n.blockedOn===null&&or.shift()}var Zs=qi.ReactCurrentBatchConfig,Kl=!0;function my(t,e,n,i){var r=lt,s=Zs.transition;Zs.transition=null;try{lt=1,df(t,e,n,i)}finally{lt=r,Zs.transition=s}}function gy(t,e,n,i){var r=lt,s=Zs.transition;Zs.transition=null;try{lt=4,df(t,e,n,i)}finally{lt=r,Zs.transition=s}}function df(t,e,n,i){if(Kl){var r=Pd(t,e,n,i);if(r===null)uu(t,e,i,Zl,n),Fp(t,i);else if(fy(r,t,e,n,i))i.stopPropagation();else if(Fp(t,i),e&4&&-1<hy.indexOf(t)){for(;r!==null;){var s=Ea(r);if(s!==null&&Vg(s),s=Pd(t,e,n,i),s===null&&uu(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(t,e,i,null,n)}}var Zl=null;function Pd(t,e,n,i){if(Zl=null,t=af(i),t=Wr(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iy()){case lf:return 1;case kg:return 4;case Yl:case ry:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var cr=null,hf=null,Tl=null;function qg(){if(Tl)return Tl;var t,e=hf,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function Hp(){return!1}function Fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:Hp,this.isPropagationStopped=Hp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ff=Fn(go),wa=St({},go,{view:0,detail:0}),vy=Fn(wa),tu,nu,wo,Mc=St({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(tu=t.screenX-wo.screenX,nu=t.screenY-wo.screenY):nu=tu=0,wo=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),Vp=Fn(Mc),xy=St({},Mc,{dataTransfer:0}),_y=Fn(xy),yy=St({},wa,{relatedTarget:0}),iu=Fn(yy),Sy=St({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Fn(Sy),wy=St({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=Fn(wy),Ty=St({},go,{data:0}),Gp=Fn(Ty),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ry(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cy[t])?!!e[t]:!1}function pf(){return Ry}var Py=St({},wa,{key:function(t){if(t.key){var e=Ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?by[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ly=Fn(Py),Dy=St({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Fn(Dy),Ny=St({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),Iy=Fn(Ny),Uy=St({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=Fn(Uy),zy=St({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ky=Fn(zy),Fy=[9,13,27,32],mf=Wi&&"CompositionEvent"in window,Yo=null;Wi&&"documentMode"in document&&(Yo=document.documentMode);var By=Wi&&"TextEvent"in window&&!Yo,Kg=Wi&&(!mf||Yo&&8<Yo&&11>=Yo),jp=" ",Xp=!1;function Zg(t,e){switch(t){case"keyup":return Fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function Hy(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(Xp=!0,jp);case"textInput":return t=e.data,t===jp&&Xp?null:t;default:return null}}function Vy(t,e){if(Us)return t==="compositionend"||!mf&&Zg(t,e)?(t=qg(),Tl=hf=cr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gy[t.type]:e==="textarea"}function Jg(t,e,n,i){Rg(i),e=Ql(e,"onChange"),0<e.length&&(n=new ff("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,la=null;function Wy(t){cv(t,0)}function wc(t){var e=ks(t);if(Mg(e))return t}function jy(t,e){if(t==="change")return e}var $g=!1;if(Wi){var ru;if(Wi){var su="oninput"in document;if(!su){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),su=typeof qp.oninput=="function"}ru=su}else ru=!1;$g=ru&&(!document.documentMode||9<document.documentMode)}function Kp(){qo&&(qo.detachEvent("onpropertychange",ev),la=qo=null)}function ev(t){if(t.propertyName==="value"&&wc(la)){var e=[];Jg(e,la,t,af(t)),Ng(Wy,e)}}function Xy(t,e,n){t==="focusin"?(Kp(),qo=e,la=n,qo.attachEvent("onpropertychange",ev)):t==="focusout"&&Kp()}function Yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(la)}function qy(t,e){if(t==="click")return wc(e)}function Ky(t,e){if(t==="input"||t==="change")return wc(e)}function Zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mi=typeof Object.is=="function"?Object.is:Zy;function ca(t,e){if(mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hd.call(e,r)||!mi(t[r],e[r]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,e){var n=Zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qy(t){var e=nv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(i!==null&&gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qp(n,s);var o=Qp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jy=Wi&&"documentMode"in document&&11>=document.documentMode,Os=null,Ld=null,Ko=null,Dd=!1;function Jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||Os==null||Os!==Wl(i)||(i=Os,"selectionStart"in i&&gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&ca(Ko,i)||(Ko=i,i=Ql(Ld,"onSelect"),0<i.length&&(e=new ff("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},ou={},iv={};Wi&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ec(t){if(ou[t])return ou[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iv)return ou[t]=e[n];return t}var rv=Ec("animationend"),sv=Ec("animationiteration"),ov=Ec("animationstart"),av=Ec("transitionend"),lv=new Map,$p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){lv.set(t,e),cs(e,[t])}for(var au=0;au<$p.length;au++){var lu=$p[au],$y=lu.toLowerCase(),eS=lu[0].toUpperCase()+lu.slice(1);wr($y,"on"+eS)}wr(rv,"onAnimationEnd");wr(sv,"onAnimationIteration");wr(ov,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(av,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function em(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$_(i,e,void 0,t),t.currentTarget=null}function cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;em(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;em(r,a,c),s=l}}}if(Xl)throw t=bd,Xl=!1,bd=null,t}function gt(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var i=t+"__bubble";n.has(i)||(uv(e,t,2,!1),n.add(i))}function cu(t,e,n){var i=0;e&&(i|=4),uv(n,t,i,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[Fa]){t[Fa]=!0,vg.forEach(function(n){n!=="selectionchange"&&(tS.has(n)||cu(n,!1,t),cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,cu("selectionchange",!1,e))}}function uv(t,e,n,i){switch(Yg(e)){case 1:var r=my;break;case 4:r=gy;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ng(function(){var c=s,d=af(n),h=[];e:{var f=lv.get(t);if(f!==void 0){var m=ff,_=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=Ly;break;case"focusin":_="focus",m=iu;break;case"focusout":_="blur",m=iu;break;case"beforeblur":case"afterblur":m=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Iy;break;case rv:case sv:case ov:m=My;break;case av:m=Oy;break;case"scroll":m=vy;break;case"wheel":m=ky;break;case"copy":case"cut":case"paste":m=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Wp}var y=(e&4)!==0,v=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,g;p!==null;){g=p;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ra(p,u),M!=null&&y.push(da(p,M,g)))),v)break;p=p.return}0<y.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Ed&&(_=n.relatedTarget||n.fromElement)&&(Wr(_)||_[ji]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Wr(_):null,_!==null&&(v=us(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=Vp,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Wp,M="onPointerLeave",u="onPointerEnter",p="pointer"),v=m==null?f:ks(m),g=_==null?f:ks(_),f=new y(M,p+"leave",m,n,d),f.target=v,f.relatedTarget=g,M=null,Wr(d)===c&&(y=new y(u,p+"enter",_,n,d),y.target=g,y.relatedTarget=v,M=y),v=M,m&&_)t:{for(y=m,u=_,p=0,g=y;g;g=ms(g))p++;for(g=0,M=u;M;M=ms(M))g++;for(;0<p-g;)y=ms(y),p--;for(;0<g-p;)u=ms(u),g--;for(;p--;){if(y===u||u!==null&&y===u.alternate)break t;y=ms(y),u=ms(u)}y=null}else y=null;m!==null&&tm(h,f,m,y,!1),_!==null&&v!==null&&tm(h,v,_,y,!0)}}e:{if(f=c?ks(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=jy;else if(Yp(f))if($g)C=Ky;else{C=Yy;var w=Xy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=qy);if(C&&(C=C(t,c))){Jg(h,C,n,d);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&_d(f,"number",f.value)}switch(w=c?ks(c):window,t){case"focusin":(Yp(w)||w.contentEditable==="true")&&(Os=w,Ld=c,Ko=null);break;case"focusout":Ko=Ld=Os=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,Jp(h,n,d);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Jp(h,n,d)}var T;if(mf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Us?Zg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Kg&&n.locale!=="ko"&&(Us||L!=="onCompositionStart"?L==="onCompositionEnd"&&Us&&(T=qg()):(cr=d,hf="value"in cr?cr.value:cr.textContent,Us=!0)),w=Ql(c,L),0<w.length&&(L=new Gp(L,t,null,n,d),h.push({event:L,listeners:w}),T?L.data=T:(T=Qg(n),T!==null&&(L.data=T)))),(T=By?Hy(t,n):Vy(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new Gp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}cv(h,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(t,n),s!=null&&i.unshift(da(t,s,r)),s=ra(t,e),s!=null&&i.push(da(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ra(n,s),l!=null&&o.unshift(da(n,l,a))):r||(l=ra(n,s),l!=null&&o.push(da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function nm(t){return(typeof t=="string"?t:""+t).replace(nS,`
`).replace(iS,"")}function Ba(t,e,n){if(e=nm(e),nm(t)!==e&&n)throw Error(he(425))}function Jl(){}var Nd=null,Id=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(oS)}:Od;function oS(t){setTimeout(function(){throw t})}function du(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),yi="__reactFiber$"+vo,ha="__reactProps$"+vo,ji="__reactContainer$"+vo,zd="__reactEvents$"+vo,aS="__reactListeners$"+vo,lS="__reactHandles$"+vo;function Wr(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rm(t);t!==null;){if(n=t[yi])return n;t=rm(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[yi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function Tc(t){return t[ha]||null}var kd=[],Fs=-1;function Er(t){return{current:t}}function vt(t){0>Fs||(t.current=kd[Fs],kd[Fs]=null,Fs--)}function ft(t,e){Fs++,kd[Fs]=t.current,t.current=e}var Sr={},rn=Er(Sr),wn=Er(!1),Jr=Sr;function ro(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function $l(){vt(wn),vt(rn)}function sm(t,e,n){if(rn.current!==Sr)throw Error(he(168));ft(rn,e),ft(wn,n)}function dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,X_(t)||"Unknown",r));return St({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Jr=rn.current,ft(rn,t),ft(wn,wn.current),!0}function om(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=dv(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,vt(wn),vt(rn),ft(rn,t)):vt(wn),ft(wn,n)}var zi=null,Ac=!1,hu=!1;function hv(t){zi===null?zi=[t]:zi.push(t)}function cS(t){Ac=!0,hv(t)}function Tr(){if(!hu&&zi!==null){hu=!0;var t=0,e=lt;try{var n=zi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,Ac=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),zg(lf,Tr),r}finally{lt=e,hu=!1}}return null}var Bs=[],Hs=0,tc=null,nc=0,Gn=[],Wn=0,$r=null,Fi=1,Bi="";function kr(t,e){Bs[Hs++]=nc,Bs[Hs++]=tc,tc=t,nc=e}function fv(t,e,n){Gn[Wn++]=Fi,Gn[Wn++]=Bi,Gn[Wn++]=$r,$r=t;var i=Fi;t=Bi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-fi(e)+r|n<<r|i,Bi=s+t}else Fi=1<<s|n<<r|i,Bi=t}function vf(t){t.return!==null&&(kr(t,1),fv(t,1,0))}function xf(t){for(;t===tc;)tc=Bs[--Hs],Bs[Hs]=null,nc=Bs[--Hs],Bs[Hs]=null;for(;t===$r;)$r=Gn[--Wn],Gn[Wn]=null,Bi=Gn[--Wn],Gn[Wn]=null,Fi=Gn[--Wn],Gn[Wn]=null}var On=null,In=null,xt=!1,li=null;function pv(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,In=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Fi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,In=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bd(t){if(xt){var e=In;if(e){var n=e;if(!am(t,e)){if(Fd(t))throw Error(he(418));e=pr(n.nextSibling);var i=On;e&&am(t,e)?pv(i,n):(t.flags=t.flags&-4097|2,xt=!1,On=t)}}else{if(Fd(t))throw Error(he(418));t.flags=t.flags&-4097|2,xt=!1,On=t}}}function lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Ha(t){if(t!==On)return!1;if(!xt)return lm(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=In)){if(Fd(t))throw mv(),Error(he(418));for(;e;)pv(t,e),e=pr(e.nextSibling)}if(lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=On?pr(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=In;t;)t=pr(t.nextSibling)}function so(){In=On=null,xt=!1}function _f(t){li===null?li=[t]:li.push(t)}var uS=qi.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cm(t){var e=t._init;return e(t._payload)}function gv(t){function e(u,p){if(t){var g=u.deletions;g===null?(u.deletions=[p],u.flags|=16):g.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=xr(u,p),u.index=0,u.sibling=null,u}function s(u,p,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<p?(u.flags|=2,p):g):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,p,g,M){return p===null||p.tag!==6?(p=_u(g,u.mode,M),p.return=u,p):(p=r(p,g),p.return=u,p)}function l(u,p,g,M){var C=g.type;return C===Is?d(u,p,g.props.children,M,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&cm(C)===p.type)?(M=r(p,g.props),M.ref=Eo(u,p,g),M.return=u,M):(M=Nl(g.type,g.key,g.props,null,u.mode,M),M.ref=Eo(u,p,g),M.return=u,M)}function c(u,p,g,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=yu(g,u.mode,M),p.return=u,p):(p=r(p,g.children||[]),p.return=u,p)}function d(u,p,g,M,C){return p===null||p.tag!==7?(p=Qr(g,u.mode,M,C),p.return=u,p):(p=r(p,g),p.return=u,p)}function h(u,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_u(""+p,u.mode,g),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case La:return g=Nl(p.type,p.key,p.props,null,u.mode,g),g.ref=Eo(u,null,p),g.return=u,g;case Ns:return p=yu(p,u.mode,g),p.return=u,p;case rr:var M=p._init;return h(u,M(p._payload),g)}if(ko(p)||_o(p))return p=Qr(p,u.mode,g,null),p.return=u,p;Va(u,p)}return null}function f(u,p,g,M){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,p,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case La:return g.key===C?l(u,p,g,M):null;case Ns:return g.key===C?c(u,p,g,M):null;case rr:return C=g._init,f(u,p,C(g._payload),M)}if(ko(g)||_o(g))return C!==null?null:d(u,p,g,M,null);Va(u,g)}return null}function m(u,p,g,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(p,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case La:return u=u.get(M.key===null?g:M.key)||null,l(p,u,M,C);case Ns:return u=u.get(M.key===null?g:M.key)||null,c(p,u,M,C);case rr:var w=M._init;return m(u,p,g,w(M._payload),C)}if(ko(M)||_o(M))return u=u.get(g)||null,d(p,u,M,C,null);Va(p,M)}return null}function _(u,p,g,M){for(var C=null,w=null,T=p,L=p=0,B=null;T!==null&&L<g.length;L++){T.index>L?(B=T,T=null):B=T.sibling;var S=f(u,T,g[L],M);if(S===null){T===null&&(T=B);break}t&&T&&S.alternate===null&&e(u,T),p=s(S,p,L),w===null?C=S:w.sibling=S,w=S,T=B}if(L===g.length)return n(u,T),xt&&kr(u,L),C;if(T===null){for(;L<g.length;L++)T=h(u,g[L],M),T!==null&&(p=s(T,p,L),w===null?C=T:w.sibling=T,w=T);return xt&&kr(u,L),C}for(T=i(u,T);L<g.length;L++)B=m(T,u,L,g[L],M),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?L:B.key),p=s(B,p,L),w===null?C=B:w.sibling=B,w=B);return t&&T.forEach(function(E){return e(u,E)}),xt&&kr(u,L),C}function y(u,p,g,M){var C=_o(g);if(typeof C!="function")throw Error(he(150));if(g=C.call(g),g==null)throw Error(he(151));for(var w=C=null,T=p,L=p=0,B=null,S=g.next();T!==null&&!S.done;L++,S=g.next()){T.index>L?(B=T,T=null):B=T.sibling;var E=f(u,T,S.value,M);if(E===null){T===null&&(T=B);break}t&&T&&E.alternate===null&&e(u,T),p=s(E,p,L),w===null?C=E:w.sibling=E,w=E,T=B}if(S.done)return n(u,T),xt&&kr(u,L),C;if(T===null){for(;!S.done;L++,S=g.next())S=h(u,S.value,M),S!==null&&(p=s(S,p,L),w===null?C=S:w.sibling=S,w=S);return xt&&kr(u,L),C}for(T=i(u,T);!S.done;L++,S=g.next())S=m(T,u,L,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?L:S.key),p=s(S,p,L),w===null?C=S:w.sibling=S,w=S);return t&&T.forEach(function(V){return e(u,V)}),xt&&kr(u,L),C}function v(u,p,g,M){if(typeof g=="object"&&g!==null&&g.type===Is&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case La:e:{for(var C=g.key,w=p;w!==null;){if(w.key===C){if(C=g.type,C===Is){if(w.tag===7){n(u,w.sibling),p=r(w,g.props.children),p.return=u,u=p;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&cm(C)===w.type){n(u,w.sibling),p=r(w,g.props),p.ref=Eo(u,w,g),p.return=u,u=p;break e}n(u,w);break}else e(u,w);w=w.sibling}g.type===Is?(p=Qr(g.props.children,u.mode,M,g.key),p.return=u,u=p):(M=Nl(g.type,g.key,g.props,null,u.mode,M),M.ref=Eo(u,p,g),M.return=u,u=M)}return o(u);case Ns:e:{for(w=g.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(u,p.sibling),p=r(p,g.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=yu(g,u.mode,M),p.return=u,u=p}return o(u);case rr:return w=g._init,v(u,p,w(g._payload),M)}if(ko(g))return _(u,p,g,M);if(_o(g))return y(u,p,g,M);Va(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,g),p.return=u,u=p):(n(u,p),p=_u(g,u.mode,M),p.return=u,u=p),o(u)):n(u,p)}return v}var oo=gv(!0),vv=gv(!1),ic=Er(null),rc=null,Vs=null,yf=null;function Sf(){yf=Vs=rc=null}function Mf(t){var e=ic.current;vt(ic),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){rc=t,yf=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(rc===null)throw Error(he(308));Vs=t,rc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var jr=null;function wf(t){jr===null?jr=[t]:jr.push(t)}function xv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function um(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=St({},h,f);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=h}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var Ta={},Mi=Er(Ta),fa=Er(Ta),pa=Er(Ta);function Xr(t){if(t===Ta)throw Error(he(174));return t}function Tf(t,e){switch(ft(pa,e),ft(fa,t),ft(Mi,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}vt(Mi),ft(Mi,e)}function ao(){vt(Mi),vt(fa),vt(pa)}function yv(t){Xr(pa.current);var e=Xr(Mi.current),n=Sd(e,t.type);e!==n&&(ft(fa,t),ft(Mi,n))}function Af(t){fa.current===t&&(vt(Mi),vt(fa))}var _t=Er(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function bf(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Cl=qi.ReactCurrentDispatcher,pu=qi.ReactCurrentBatchConfig,es=0,yt=null,Ut=null,Vt=null,ac=!1,Zo=!1,ma=0,dS=0;function Qt(){throw Error(he(321))}function Cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mi(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(es=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?mS:gS,t=n(i,r),Zo){s=0;do{if(Zo=!1,ma=0,25<=s)throw Error(he(301));s+=1,Vt=Ut=null,e.updateQueue=null,Cl.current=vS,t=n(i,r)}while(Zo)}if(Cl.current=lc,e=Ut!==null&&Ut.next!==null,es=0,Vt=Ut=yt=null,ac=!1,e)throw Error(he(300));return t}function Pf(){var t=ma!==0;return ma=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?yt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Zn(){if(Ut===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Vt===null?yt.memoizedState:Vt.next;if(e!==null)Vt=e,Ut=t;else{if(t===null)throw Error(he(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Vt===null?yt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function ga(t,e){return typeof e=="function"?e(t):e}function mu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((es&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,yt.lanes|=d,ts|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(){}function Mv(t,e){var n=yt,i=Zn(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Lf(Tv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,va(9,Ev.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(he(349));es&30||wv(n,e,r)}return r}function wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ev(t,e,n,i){e.value=n,e.getSnapshot=i,Av(e)&&bv(t)}function Tv(t,e,n){return n(function(){Av(e)&&bv(t)})}function Av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mi(t,n)}catch{return!0}}function bv(t){var e=Xi(t,1);e!==null&&pi(e,t,1,-1)}function hm(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=pS.bind(null,yt,t),[e.memoizedState,t]}function va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Cv(){return Zn().memoizedState}function Rl(t,e,n,i){var r=vi();yt.flags|=t,r.memoizedState=va(1|e,n,void 0,i===void 0?null:i)}function bc(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&Cf(i,o.deps)){r.memoizedState=va(e,n,s,i);return}}yt.flags|=t,r.memoizedState=va(1|e,n,s,i)}function fm(t,e){return Rl(8390656,8,t,e)}function Lf(t,e){return bc(2048,8,t,e)}function Rv(t,e){return bc(4,2,t,e)}function Pv(t,e){return bc(4,4,t,e)}function Lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dv(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,Lv.bind(null,e,t),n)}function Df(){}function Nv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return es&21?(mi(n,e)||(n=Bg(),yt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function hS(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=pu.transition;pu.transition={};try{t(!1),e()}finally{lt=n,pu.transition=i}}function Ov(){return Zn().memoizedState}function fS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},zv(t))kv(e,n);else if(n=xv(t,e,n,i),n!==null){var r=cn();pi(n,t,i,r),Fv(n,e,i)}}function pS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(zv(t))kv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,wf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xv(t,e,r,i),n!==null&&(r=cn(),pi(n,t,i,r),Fv(n,e,i))}}function zv(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function kv(t,e){Zo=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var lc={readContext:Kn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},mS={readContext:Kn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:fm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,Lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=fS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:hm,useDebugValue:Df,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=hm(!1),e=t[0];return t=hS.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=vi();if(xt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),Wt===null)throw Error(he(349));es&30||wv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fm(Tv.bind(null,i,s,t),[t]),i.flags|=2048,va(9,Ev.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Wt.identifierPrefix;if(xt){var n=Bi,i=Fi;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gS={readContext:Kn,useCallback:Nv,useContext:Kn,useEffect:Lf,useImperativeHandle:Dv,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Iv,useReducer:mu,useRef:Cv,useState:function(){return mu(ga)},useDebugValue:Df,useDeferredValue:function(t){var e=Zn();return Uv(e,Ut.memoizedState,t)},useTransition:function(){var t=mu(ga)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Ov,unstable_isNewReconciler:!1},vS={readContext:Kn,useCallback:Nv,useContext:Kn,useEffect:Lf,useImperativeHandle:Dv,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Iv,useReducer:gu,useRef:Cv,useState:function(){return gu(ga)},useDebugValue:Df,useDeferredValue:function(t){var e=Zn();return Ut===null?e.memoizedState=t:Uv(e,Ut.memoizedState,t)},useTransition:function(){var t=gu(ga)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Ov,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cc={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(pi(e,t,r,i),bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(pi(e,t,r,i),bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=vr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(pi(e,t,i,n),bl(e,t,i))}};function pm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(n,i)||!ca(r,s):!0}function Bv(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=En(e)?Jr:rn.current,i=e.contextTypes,s=(i=i!=null)?ro(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cc.enqueueReplaceState(e,e.state,null)}function Gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ef(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=En(e)?Jr:rn.current,r.context=ro(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cc.enqueueReplaceState(r,r.state,null),sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",i=e;do n+=j_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function Hv(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,eh=i),Wd(t,e)},n}function Vv(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=DS.bind(null,t,e,n),e.then(t,t))}function vm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var _S=qi.ReactCurrentOwner,Mn=!1;function on(t,e,n,i){e.child=t===null?vv(e,null,n,i):oo(e,t.child,n,i)}function _m(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Rf(t,e,n,i,s,r),n=Pf(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(xt&&n&&vf(e),e.flags|=1,on(t,e,i,r),e.child)}function ym(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,i,r)):(t=Nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=xr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ca(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return jd(t,e,n,i,r)}function Wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ws,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ws,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Ws,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Ws,Ln),Ln|=i;return on(t,e,r,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=En(n)?Jr:rn.current;return s=ro(e,s),Qs(e,r),n=Rf(t,e,n,i,s,r),i=Pf(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(xt&&i&&vf(e),e.flags|=1,on(t,e,n,r),e.child)}function Sm(t,e,n,i,r){if(En(n)){var s=!0;ec(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Pl(t,e),Bv(e,n,i),Gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=En(n)?Jr:rn.current,c=ro(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&mm(e,o,i,c),sr=!1;var f=e.memoizedState;o.state=f,sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||wn.current||sr?(typeof d=="function"&&(Vd(e,n,d,i),l=e.memoizedState),(a=sr||pm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_v(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=En(n)?Jr:rn.current,l=ro(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&mm(e,o,i,l),sr=!1,f=e.memoizedState,o.state=f,sc(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||wn.current||sr?(typeof m=="function"&&(Vd(e,n,m,i),_=e.memoizedState),(c=sr||pm(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Xd(t,e,n,i,s,r)}function Xd(t,e,n,i,r,s){jv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&om(e,n,!1),Yi(t,e,s);i=e.stateNode,_S.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&om(e,n,!0),e.child}function Xv(t){var e=t.stateNode;e.pendingContext?sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sm(t,e.context,!1),Tf(t,e.containerInfo)}function Mm(t,e,n,i,r){return so(),_f(r),e.flags|=256,on(t,e,n,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yv(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return Bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qd(n),e.memoizedState=Yd,t):Nf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,i}return s=t.child,t=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&_f(i),oo(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vu(Error(he(422))),Ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=qd(o),e.memoizedState=Yd,s);if(!(e.mode&1))return Ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=vu(s,i,void 0),Ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,Mn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),pi(i,t,r,-1))}return Ff(),i=vu(Error(he(421))),Ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=NS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=pr(r.nextSibling),On=e,xt=!0,li=null,t!==null&&(Gn[Wn++]=Fi,Gn[Wn++]=Bi,Gn[Wn++]=$r,Fi=t.id,Bi=t.overflow,$r=e),e=Nf(e,i.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hd(t.return,e,n)}function xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xu(e,!0,n,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SS(t,e,n){switch(e.tag){case 3:Xv(e),so();break;case 5:yv(e);break;case 1:En(e.type)&&ec(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Yv(t,e,n):(ft(_t,_t.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Wv(t,e,n)}return Yi(t,e,n)}var Kv,Kd,Zv,Qv;Kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};Zv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(Mi.current);var s=null;switch(n){case"input":r=vd(t,r),i=vd(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=yd(t,r),i=yd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jl)}Md(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(na.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function To(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function MS(t,e,n){var i=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return En(e.type)&&$l(),Jt(e),null;case 3:return i=e.stateNode,ao(),vt(wn),vt(rn),bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(ih(li),li=null))),Kd(t,e),Jt(e),null;case 5:Af(e);var r=Xr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Zv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Jt(e),null}if(t=Xr(Mi.current),Ha(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[ha]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)gt(Bo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Dp(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Ip(i,s),gt("invalid",i)}Md(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Da(i),Np(i,s,!0);break;case"textarea":Da(i),Up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[ha]=i,Kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)gt(Bo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Dp(t,i),r=vd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Ip(t,i),r=yd(t,i),gt("invalid",t);break;default:r=i}Md(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ag(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&nf(t,s,l,o))}switch(n){case"input":Da(t),Np(t,i,!1);break;case"textarea":Da(t),Up(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Xr(pa.current),Xr(Mi.current),Ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:Ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return Jt(e),null;case 13:if(vt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&In!==null&&e.mode&1&&!(e.flags&128))mv(),so(),e.flags|=98560,s=!1;else if(s=Ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[yi]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else li!==null&&(ih(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?zt===0&&(zt=3):Ff())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return ao(),Kd(t,e),t===null&&ua(e.stateNode.containerInfo),Jt(e),null;case 10:return Mf(e.type._context),Jt(e),null;case 17:return En(e.type)&&$l(),Jt(e),null;case 19:if(vt(_t),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)To(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,To(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>co&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Jt(e),null}else 2*Rt()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function wS(t,e){switch(xf(e),e.tag){case 1:return En(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),vt(wn),vt(rn),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Af(e),null;case 13:if(vt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(_t),null;case 4:return ao(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var Wa=!1,nn=!1,ES=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Zd(t,e,n){try{n()}catch(i){At(t,e,i)}}var Em=!1;function TS(t,e){if(Nd=Kl,t=nv(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:t,selectionRange:n},Kl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:si(e.type,y),v);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return _=Em,Em=!1,_}function Qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zd(e,n,s)}r=r.next}while(r!==i)}}function Rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jv(t){var e=t.alternate;e!==null&&(t.alternate=null,Jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[ha],delete e[zd],delete e[aS],delete e[lS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function Tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}function $d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var Yt=null,oi=!1;function Qi(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:nn||Gs(n,e);case 6:var i=Yt,r=oi;Yt=null,Qi(t,e,n),Yt=i,oi=r,Yt!==null&&(oi?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(oi?(t=Yt,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),aa(t)):du(Yt,n.stateNode));break;case 4:i=Yt,r=oi,Yt=n.stateNode.containerInfo,oi=!0,Qi(t,e,n),Yt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zd(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!nn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Qi(t,e,n),nn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ES),e.forEach(function(i){var r=IS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,oi=!1;break e;case 3:Yt=a.stateNode.containerInfo,oi=!0;break e;case 4:Yt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Yt===null)throw Error(he(160));ex(s,o,r),Yt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),gi(t),i&4){try{Qo(3,t,t.return),Rc(3,t)}catch(y){At(t,t.return,y)}try{Qo(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:$n(e,t),gi(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if($n(e,t),gi(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wg(r,s),wd(a,o);var c=wd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Cg(r,h):d==="dangerouslySetInnerHTML"?Ag(r,h):d==="children"?ia(r,h):nf(r,d,h,c)}switch(a){case"input":xd(r,s);break;case"textarea":Eg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ys(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[ha]=s}catch(y){At(t,t.return,y)}}break;case 6:if($n(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if($n(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:$n(e,t),gi(t);break;case 13:$n(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Of=Rt())),i&4&&Am(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||d,$n(e,t),nn=c):$n(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ce=t,d=t.child;d!==null;){for(h=Ce=d;Ce!==null;){switch(f=Ce,m=f.child,f.tag){case 0:case 11:case 14:case 15:Qo(4,f,f.return);break;case 1:Gs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:Gs(f,f.return);break;case 22:if(f.memoizedState!==null){Cm(h);continue}}m!==null?(m.return=f,Ce=m):Cm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bg("display",o))}catch(y){At(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){At(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(e,t),gi(t),i&4&&Am(t);break;case 21:break;default:$n(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=Tm(t);$d(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Tm(t);Jd(t,a,o);break;default:throw Error(he(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AS(t,e,n){Ce=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Wa;var c=nn;if(Wa=o,(nn=l)&&!c)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?Rm(r):l!==null?(l.return=o,Ce=l):Rm(r);for(;s!==null;)Ce=s,nx(s),s=s.sibling;Ce=r,Wa=a,nn=c}bm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):bm(t)}}function bm(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Rc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&aa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}nn||e.flags&512&&Qd(e)}catch(f){At(e,e.return,f)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Cm(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Rm(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Qd(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Qd(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var bS=Math.ceil,cc=qi.ReactCurrentDispatcher,If=qi.ReactCurrentOwner,qn=qi.ReactCurrentBatchConfig,tt=0,Wt=null,Nt=null,Kt=0,Ln=0,Ws=Er(0),zt=0,xa=null,ts=0,Pc=0,Uf=0,Jo=null,Sn=null,Of=0,co=1/0,Oi=null,uc=!1,eh=null,gr=null,ja=!1,ur=null,dc=0,$o=0,th=null,Ll=-1,Dl=0;function cn(){return tt&6?Rt():Ll!==-1?Ll:Ll=Rt()}function vr(t){return t.mode&1?tt&2&&Kt!==0?Kt&-Kt:uS.transition!==null?(Dl===0&&(Dl=Bg()),Dl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Yg(t.type)),t):1}function pi(t,e,n,i){if(50<$o)throw $o=0,th=null,Error(he(185));Ma(t,n,i),(!(tt&2)||t!==Wt)&&(t===Wt&&(!(tt&2)&&(Pc|=n),zt===4&&ar(t,Kt)),Tn(t,i),n===1&&tt===0&&!(e.mode&1)&&(co=Rt()+500,Ac&&Tr()))}function Tn(t,e){var n=t.callbackNode;uy(t,e);var i=ql(t,t===Wt?Kt:0);if(i===0)n!==null&&kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kp(n),e===1)t.tag===0?cS(Pm.bind(null,t)):hv(Pm.bind(null,t)),sS(function(){!(tt&6)&&Tr()}),n=null;else{switch(Hg(i)){case 1:n=lf;break;case 4:n=kg;break;case 16:n=Yl;break;case 536870912:n=Fg;break;default:n=Yl}n=ux(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(Ll=-1,Dl=0,tt&6)throw Error(he(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=ql(t,t===Wt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hc(t,i);else{e=i;var r=tt;tt|=2;var s=sx();(Wt!==t||Kt!==e)&&(Oi=null,co=Rt()+500,Zr(t,e));do try{PS();break}catch(a){rx(t,a)}while(!0);Sf(),cc.current=s,tt=r,Nt!==null?e=0:(Wt=null,Kt=0,e=zt)}if(e!==0){if(e===2&&(r=Cd(t),r!==0&&(i=r,e=nh(t,r))),e===1)throw n=xa,Zr(t,0),ar(t,i),Tn(t,Rt()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!CS(r)&&(e=hc(t,i),e===2&&(s=Cd(t),s!==0&&(i=s,e=nh(t,s))),e===1))throw n=xa,Zr(t,0),ar(t,i),Tn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Fr(t,Sn,Oi);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=Of+500-Rt(),10<e)){if(ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Od(Fr.bind(null,t,Sn,Oi),e);break}Fr(t,Sn,Oi);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bS(i/1960))-i,10<i){t.timeoutHandle=Od(Fr.bind(null,t,Sn,Oi),i);break}Fr(t,Sn,Oi);break;case 5:Fr(t,Sn,Oi);break;default:throw Error(he(329))}}}return Tn(t,Rt()),t.callbackNode===n?ix.bind(null,t):null}function nh(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=hc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&ih(e)),t}function ih(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function CS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Uf,e&=~Pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function Pm(t){if(tt&6)throw Error(he(327));Js();var e=ql(t,0);if(!(e&1))return Tn(t,Rt()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var i=Cd(t);i!==0&&(e=i,n=nh(t,i))}if(n===1)throw n=xa,Zr(t,0),ar(t,e),Tn(t,Rt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,Sn,Oi),Tn(t,Rt()),null}function zf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(co=Rt()+500,Ac&&Tr())}}function ns(t){ur!==null&&ur.tag===0&&!(tt&6)&&Js();var e=tt;tt|=1;var n=qn.transition,i=lt;try{if(qn.transition=null,lt=1,t)return t()}finally{lt=i,qn.transition=n,tt=e,!(tt&6)&&Tr()}}function kf(){Ln=Ws.current,vt(Ws)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rS(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$l();break;case 3:ao(),vt(wn),vt(rn),bf();break;case 5:Af(i);break;case 4:ao();break;case 13:vt(_t);break;case 19:vt(_t);break;case 10:Mf(i.type._context);break;case 22:case 23:kf()}n=n.return}if(Wt=t,Nt=t=xr(t.current,null),Kt=Ln=e,zt=0,xa=null,Uf=Pc=ts=0,Sn=Jo=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}jr=null}return t}function rx(t,e){do{var n=Nt;try{if(Sf(),Cl.current=lc,ac){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if(es=0,Vt=Ut=yt=null,Zo=!1,ma=0,If.current=null,n===null||n.return===null){zt=1,xa=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vm(o);if(m!==null){m.flags&=-257,xm(m,o,a,s,e),m.mode&1&&gm(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){gm(s,c,e),Ff();break e}l=Error(he(426))}}else if(xt&&a.mode&1){var v=vm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),xm(v,o,a,s,e),_f(lo(l,a));break e}}s=l=lo(l,a),zt!==4&&(zt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Hv(s,l,e);um(s,u);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gr===null||!gr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Vv(s,a,e);um(s,M);break e}}s=s.return}while(s!==null)}ax(n)}catch(C){e=C,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function sx(){var t=cc.current;return cc.current=lc,t===null?lc:t}function Ff(){(zt===0||zt===3||zt===2)&&(zt=4),Wt===null||!(ts&268435455)&&!(Pc&268435455)||ar(Wt,Kt)}function hc(t,e){var n=tt;tt|=2;var i=sx();(Wt!==t||Kt!==e)&&(Oi=null,Zr(t,e));do try{RS();break}catch(r){rx(t,r)}while(!0);if(Sf(),tt=n,cc.current=i,Nt!==null)throw Error(he(261));return Wt=null,Kt=0,zt}function RS(){for(;Nt!==null;)ox(Nt)}function PS(){for(;Nt!==null&&!ty();)ox(Nt)}function ox(t){var e=cx(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?ax(t):Nt=e,If.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wS(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Nt=null;return}}else if(n=MS(n,e,Ln),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);zt===0&&(zt=5)}function Fr(t,e,n){var i=lt,r=qn.transition;try{qn.transition=null,lt=1,LS(t,e,n,i)}finally{qn.transition=r,lt=i}return null}function LS(t,e,n,i){do Js();while(ur!==null);if(tt&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dy(t,s),t===Wt&&(Nt=Wt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,ux(Yl,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=lt;lt=1;var a=tt;tt|=4,If.current=null,TS(t,n),tx(n,t),Qy(Id),Kl=!!Nd,Id=Nd=null,t.current=n,AS(n),ny(),tt=a,lt=o,qn.transition=s}else t.current=n;if(ja&&(ja=!1,ur=t,dc=r),s=t.pendingLanes,s===0&&(gr=null),sy(n.stateNode),Tn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=eh,eh=null,t;return dc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===th?$o++:($o=0,th=t):$o=0,Tr(),null}function Js(){if(ur!==null){var t=Hg(dc),e=qn.transition,n=lt;try{if(qn.transition=null,lt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,dc=0,tt&6)throw Error(he(331));var r=tt;for(tt|=4,Ce=t.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ce=c;Ce!==null;){var d=Ce;switch(d.tag){case 0:case 11:case 15:Qo(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ce=h;else for(;Ce!==null;){d=Ce;var f=d.sibling,m=d.return;if(Jv(d),d===c){Ce=null;break}if(f!==null){f.return=m,Ce=f;break}Ce=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ce=u;break e}Ce=s.return}}var p=t.current;for(Ce=p;Ce!==null;){o=Ce;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Ce=g;else e:for(o=p;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rc(9,a)}}catch(C){At(a,a.return,C)}if(a===o){Ce=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ce=M;break e}Ce=a.return}}if(tt=r,Tr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Sc,t)}catch{}i=!0}return i}finally{lt=n,qn.transition=e}}return!1}function Lm(t,e,n){e=lo(n,e),e=Hv(t,e,1),t=mr(t,e,1),e=cn(),t!==null&&(Ma(t,1,e),Tn(t,e))}function At(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=lo(n,t),t=Vv(e,t,1),e=mr(e,t,1),t=cn(),e!==null&&(Ma(e,1,t),Tn(e,t));break}}e=e.return}}function DS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Kt&n)===n&&(zt===4||zt===3&&(Kt&130023424)===Kt&&500>Rt()-Of?Zr(t,0):Uf|=n),Tn(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=cn();t=Xi(t,e),t!==null&&(Ma(t,e,n),Tn(t,n))}function NS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function IS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),lx(t,n)}var cx;cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,SS(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,xt&&e.flags&1048576&&fv(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=ro(e,rn.current);Qs(e,n),r=Rf(null,e,i,t,r,n);var s=Pf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ef(e),r.updater=Cc,e.stateNode=r,r._reactInternals=e,Gd(e,i,t,n),e=Xd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&vf(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OS(i),t=si(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=Sm(null,e,i,t,n);break e;case 11:e=_m(null,e,i,t,n);break e;case 14:e=ym(null,e,i,si(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Sm(t,e,i,r,n);case 3:e:{if(Xv(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_v(t,e),sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=lo(Error(he(423)),e),e=Mm(t,e,i,n,r);break e}else if(i!==r){r=lo(Error(he(424)),e),e=Mm(t,e,i,n,r);break e}else for(In=pr(e.stateNode.containerInfo.firstChild),On=e,xt=!0,li=null,n=vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),i===r){e=Yi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return yv(e),t===null&&Bd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ud(i,r)?o=null:s!==null&&Ud(i,s)&&(e.flags|=32),jv(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Bd(e),null;case 13:return Yv(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oo(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),_m(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(ic,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!wn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Kn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),ym(t,e,i,r,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Pl(t,e),e.tag=1,En(i)?(t=!0,ec(e)):t=!1,Qs(e,n),Bv(e,i,r),Gd(e,i,r,n),Xd(null,e,i,!0,t,n);case 19:return qv(t,e,n);case 22:return Wv(t,e,n)}throw Error(he(156,e.tag))};function ux(t,e){return zg(t,e)}function US(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new US(t,e,n,i)}function Bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OS(t){if(typeof t=="function")return Bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===of)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Qr(n.children,r,s,e);case rf:o=8,r|=8;break;case fd:return t=Xn(12,n,e,r|2),t.elementType=fd,t.lanes=s,t;case pd:return t=Xn(13,n,e,r),t.elementType=pd,t.lanes=s,t;case md:return t=Xn(19,n,e,r),t.elementType=md,t.lanes=s,t;case yg:return Lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:o=10;break e;case _g:o=9;break e;case sf:o=11;break e;case of:o=14;break e;case rr:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Lc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function _u(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,i,r,s,o,a,l){return t=new zS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(s),t}function kS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dx(t){if(!t)return Sr;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(En(n))return dv(t,n,e)}return e}function hx(t,e,n,i,r,s,o,a,l){return t=Hf(n,i,!0,t,r,s,o,a,l),t.context=dx(null),n=t.current,i=cn(),r=vr(n),s=Gi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,Ma(t,r,i),Tn(t,i),t}function Dc(t,e,n,i){var r=e.current,s=cn(),o=vr(r);return n=dx(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(pi(t,r,o,s),bl(t,r,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function FS(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}Nc.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));Dc(t,e,null,null)};Nc.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Dc(null,t,null,null)}),e[ji]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Xg(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function BS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fc(o);s.call(c)}}var o=hx(e,i,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[ji]=o.current,ua(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=fc(l);a.call(c)}}var l=Hf(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=l,t[ji]=l.current,ua(t.nodeType===8?t.parentNode:t),ns(function(){Dc(e,l,n,i)}),l}function Uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fc(o);a.call(l)}}Dc(e,o,t,r)}else o=BS(n,e,t,r,i);return fc(o)}Vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(cf(e,n|1),Tn(e,Rt()),!(tt&6)&&(co=Rt()+500,Tr()))}break;case 13:ns(function(){var i=Xi(t,1);if(i!==null){var r=cn();pi(i,t,1,r)}}),Vf(t,1)}};uf=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=cn();pi(e,t,134217728,n)}Vf(t,134217728)}};Gg=function(t){if(t.tag===13){var e=vr(t),n=Xi(t,e);if(n!==null){var i=cn();pi(n,t,e,i)}Vf(t,e)}};Wg=function(){return lt};jg=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Td=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tc(i);if(!r)throw Error(he(90));Mg(i),xd(i,r)}}}break;case"textarea":Eg(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};Lg=zf;Dg=ns;var HS={usingClientEntryPoint:!1,Events:[Ea,ks,Tc,Rg,Pg,zf]},Ao={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VS={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ug(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||FS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Sc=Xa.inject(VS),Si=Xa}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(he(200));return kS(t,e,null,n)};kn.createRoot=function(t,e){if(!Wf(t))throw Error(he(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ua(t.nodeType===8?t.parentNode:t),new Gf(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Ug(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return ns(t)};kn.hydrate=function(t,e,n){if(!Ic(e))throw Error(he(200));return Uc(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hx(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nc(e)};kn.render=function(t,e,n){if(!Ic(e))throw Error(he(200));return Uc(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Ic(t))throw Error(he(40));return t._reactRootContainer?(ns(function(){Uc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};kn.unstable_batchedUpdates=zf;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ic(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return Uc(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),pg.exports=kn;var GS=pg.exports,Im=GS;dd.createRoot=Im.createRoot,dd.hydrateRoot=Im.hydrateRoot;const WS=["Seating","Tables","Bedroom","Storage","Decor","Kitchen"],Il=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"}],xi=Object.fromEntries(Il.map(t=>[t.type,t])),jS=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],mx="honeycutt.design.v2";let XS=1;const ei=()=>`${Date.now().toString(36)}-${(XS++).toString(36)}`;function Ho(){return{view:"2d",tool:"select",sideTool:"select",sideWall:null,units:"ft",ambiance:"day",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],sketches:[],selected:null}}function YS(){try{const t=localStorage.getItem(mx);if(!t)return Ho();const e=JSON.parse(t);return!e||!Array.isArray(e.items)?Ho():{...Ho(),...e,tool:"select",sideTool:"select",selected:null}}catch{return Ho()}}function Un(t,e,n){return Math.max(e,Math.min(n,t))}function qS(t){return t.scale&&(t.scale={x:Un(t.scale.x??1,.3,3),y:Un(t.scale.y??1,.3,3),z:Un(t.scale.z??1,.3,3)}),t}function gx(t){return t.w=Un(t.w,.5,40),t.d=Un(t.d,.5,40),t.height!=null&&(t.height=Un(t.height,1.5,6)),t}function vx(t){return t.height!=null&&(t.height=Un(t.height,1.5,6)),t.thickness!=null&&(t.thickness=Un(t.thickness,.05,.5)),t}function rh(t){return t.w!=null&&(t.w=Un(t.w,.1,12)),t.h!=null&&(t.h=Un(t.h,.1,6)),t.depth!=null&&(t.depth=Un(t.depth,.02,3)),t.thickness!=null&&(t.thickness=Un(t.thickness,.01,.4)),t}const sh={item:"items",room:"rooms",wall:"walls",builtin:"builtins",sketch:"sketches"};function KS(t,e,n,i){const r=sh[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&qS(a),e==="room"&&gx(a),e==="wall"&&vx(a),e==="builtin"&&rh(a),a});return{...t,[r]:s}}function Su(t,e){var n;switch(e.type){case"view":return{...t,view:e.view};case"ambiance":return{...t,ambiance:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"sideTool":return{...t,sideTool:e.tool,selected:e.tool==="select"?t.selected:null};case"sideWall":return{...t,sideWall:e.ref};case"defaultHeight":return{...t,defaultHeight:Un(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"addRoom":{const i=gx({uid:ei(),x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],selected:{type:"room",uid:i.uid}}}case"addWall":{const i=vx({uid:ei(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],selected:{type:"wall",uid:i.uid}}}case"addBuiltin":{const i=rh({uid:ei(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>rh({uid:ei(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addSketch":{const i={uid:ei(),pts:e.pts,closed:!!e.closed,color:e.color||"#3f7d8c"};return{...t,sketches:[...t.sketches,i],selected:{type:"sketch",uid:i.uid}}}case"addItem":{const i=xi[e.kind];if(!i)return t;const r={uid:ei(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return KS(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=sh[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=sh[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:ei(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:ei(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:ei(),u:o.u+.3,v:o.v+.3}:i==="sketch"?a={...o,uid:ei(),pts:o.pts.map(l=>({x:l.x+.3,z:l.z+.3}))}:a={...o,uid:ei(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...Ho(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const ZS=new Set(["addRoom","addWall","addSketch","addItem","addBuiltin","addBuiltins","update","remove","duplicate","clear","reset","defaultHeight"]),Mu=80;function QS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:[t.present,...t.future].slice(0,Mu),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Mu),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!ZS.has(e.type))return{...t,present:Su(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:Su(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Mu),present:Su(t.present,e),future:[],lastKey:i||null,lastTime:n}}const xx=Re.createContext(null);function JS({children:t}){const[e,n]=Re.useReducer(QS,void 0,()=>({past:[],present:YS(),future:[],lastKey:null,lastTime:0})),i=Re.useRef(null),r=e.present;Re.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(mx,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=Re.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return x.jsx(xx.Provider,{value:s,children:t})}function Ki(){const t=Re.useContext(xx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}function $S(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function Ke(t,e){return e==="m"?`${t.toFixed(2)} m`:$S(t)}function eM(t,e){return e==="m"?`${t.toFixed(1)} m²`:`${Math.round(t*10.7639)} ft²`}function Vr(t,e){const n=e&&e.scale||{};return{w:t.w*(n.x??1),d:t.d*(n.z??1),h:t.h*(n.y??1)}}function ea(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function Cn(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Cr="rgba(0,0,0,0.22)",Um="rgba(0,0,0,0.28)";function _x({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,d=Math.max(.8,Math.min(s,o)*.025),h=Cn(i,.16),f=Cn(i,-.22),m=(y,v,u,p,g,M=c,C={})=>x.jsx("rect",{x:y,y:v,width:u,height:p,rx:M,ry:M,fill:g,...C});let _=null;switch(r){case"seat":{const y=o*.26,v=s*.12;_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),m(a,l,s,y,f,c)," ",m(a,l+y*.5,v,o-y*.5,f,c*.6),m(a+s-v,l+y*.5,v,o-y*.5,f,c*.6),m(a+v+d,l+y,s-2*(v+d),o-y-d,h,c*.5)]});break}case"chair":{const y=o*.22;_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),m(a,l,s,y,f,c),m(a+d,l+y,s-2*d,o-y-d,h,c*.5)]});break}case"bench":{_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),m(a+s*.05,l+o*.18,s*.9,o*.64,h,c*.4)]});break}case"round":_=x.jsxs(x.Fragment,{children:[x.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),x.jsx("circle",{cx:0,cy:0,r:s*.3,fill:h})]});break;case"table":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,f),m(a+d*1.5,l+d*1.5,s-3*d,o-3*d,i,c*.8),m(a+s*.12,l+o*.12,s*.76,o*.76,h,c*.5)]});break;case"desk":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,f),m(a+d,l+d,s-2*d,o-2*d,i,c*.7),m(a+s*.62,l+d*2,s*.34,o-d*4,h,c*.4)]});break;case"round-table":_=x.jsxs(x.Fragment,{children:[x.jsx("circle",{cx:0,cy:0,r:s/2,fill:f}),x.jsx("circle",{cx:0,cy:0,r:s/2-d*1.5,fill:i}),x.jsx("circle",{cx:0,cy:0,r:s*.34,fill:h})]});break;case"bed":{const y=o*.16,v=s*.4,u=o*.18;_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),m(a,l,s,y,f,c)," ",m(a+s*.05,l+y+o*.04,v,u,h,c*.4),m(a+s*.55,l+y+o*.04,v,u,h,c*.4),m(a+s*.05,l+y+u+o*.08,s*.9,o-y-u-o*.12,Cn(i,.07),c*.3)]});break}case"cabinet":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),x.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:Um,strokeWidth:d}),x.jsx("circle",{cx:-s*.06,cy:0,r:d*1.2,fill:Cr}),x.jsx("circle",{cx:s*.06,cy:0,r:d*1.2,fill:Cr})]});break;case"wardrobe":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),x.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:Um,strokeWidth:d}),x.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Cr,strokeWidth:d*1.6}),x.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Cr,strokeWidth:d*1.6})]});break;case"drawers":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),m(a+d,l+d,s-2*d,o-2*d,h,c*.5),x.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Cr,strokeWidth:d*1.6,strokeLinecap:"round"})]});break;case"shelf":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,f),m(a+d,l+d,s-2*d,o-2*d,i,c*.4),[.3,.5,.7].map((y,v)=>x.jsx("line",{x1:a+s*.12,y1:l+o*y,x2:a+s*.88,y2:l+o*y,stroke:Cr,strokeWidth:d},v))]});break;case"tv":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,"#0c0d10",c*.4),m(a+d,l,s-2*d,o*.55,"#22303f",c*.2)]});break;case"rug":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i,c*.3),m(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:Cn(i,.25),strokeWidth:d*1.4,strokeDasharray:`${d*3} ${d*3}`})]});break;case"round-rug":_=x.jsxs(x.Fragment,{children:[x.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),x.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:Cn(i,.25),strokeWidth:d*1.4})]});break;case"plant":_=x.jsxs(x.Fragment,{children:[m(a+s*.28,l+o*.28,s*.44,o*.44,Cn("#8a6a4a",-.1),c*.4),x.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:Cn(i,.1)}),x.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),x.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:Cn(i,-.12)}),x.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:Cn(i,.18)})]});break;case"lamp":_=x.jsxs(x.Fragment,{children:[x.jsx("circle",{cx:0,cy:0,r:s/2,fill:Cn(i,-.05)}),x.jsx("circle",{cx:0,cy:0,r:s*.22,fill:Cn(i,.3)})]});break;case"fridge":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),m(a+d,l+d,s-2*d,o-2*d,h,c*.4),x.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Cr,strokeWidth:d*1.8,strokeLinecap:"round"})]});break;case"counter":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,f),m(a+d,l+d,s-2*d,o-2*d,i,c*.4),m(a+s*.58,l+o*.22,s*.32,o*.56,Cn(i,-.18),c*.3)]});break;case"range":_=x.jsxs(x.Fragment,{children:[m(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([y,v],u)=>x.jsx("circle",{cx:s*y,cy:o*v,r:s*.13,fill:"none",stroke:Cn(i,.3),strokeWidth:d},u))]});break;default:_=m(a,l,s,o,i)}return x.jsx("g",{children:_})}const Pt=({children:t,size:e=22,...n})=>x.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),tM=t=>x.jsxs(Pt,{...t,children:[x.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),x.jsx("path",{d:"M3 9h18M9 9v12"})]}),nM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),x.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),iM=t=>x.jsx(Pt,{...t,children:x.jsx("path",{d:"M12 5v14M5 12h14"})}),rM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),x.jsx("path",{d:"M21 3v5h-5"})]}),gs=t=>x.jsxs(Pt,{...t,children:[x.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),x.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),Rr=t=>x.jsx(Pt,{...t,children:x.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),sM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),x.jsx("circle",{cx:"16",cy:"6",r:"2"}),x.jsx("circle",{cx:"8",cy:"12",r:"2"}),x.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),oM=t=>x.jsx(Pt,{...t,children:x.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),jf=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),x.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),aM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),x.jsx("path",{d:"m3 13 9 5 9-5"})]}),yx=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M9 14 4 9l5-5"}),x.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),lM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"m15 14 5-5-5-5"}),x.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),cM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M12 15V3"}),x.jsx("path",{d:"m8 7 4-4 4 4"}),x.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),uM=t=>x.jsxs(Pt,{...t,children:[x.jsx("circle",{cx:"12",cy:"12",r:"4"}),x.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),Om=t=>x.jsx(Pt,{...t,children:x.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),zm=t=>x.jsx(Pt,{...t,children:x.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),km=t=>x.jsx(Pt,{...t,children:x.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),dM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M3 20h18"}),x.jsx("rect",{x:"6",y:"4",width:"7",height:"16",rx:"1"}),x.jsx("path",{d:"M13 9h5v11"})]}),hM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),x.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),fM=t=>x.jsxs(Pt,{...t,children:[x.jsx("path",{d:"M12 19l7-7-4-4-7 7v4z"}),x.jsx("path",{d:"M14 6l4 4M5 21l3-1"})]}),Fm=t=>x.jsx(Pt,{...t,children:x.jsx("path",{d:"M4 12l5 5L20 6"})}),wt="#d9b779",Bm="#39414f",pM="#c3c9d1",mM="#eef1f5",Sx=.0254,Hm=Sx,wu=18,Vm=["n","e","s","w"],gM="#2f7d8c",vM=16,$t=(t,e)=>Math.round(t/e)*e,Br=(t,e,n)=>Math.max(e,Math.min(n,t)),Gm=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1;function xM(t,e,n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r].x,a=n[r].z,l=n[s].x,c=n[s].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function Eu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function Tu(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Br(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function _M(){const{state:t,dispatch:e}=Ki(),{rooms:n,walls:i,items:r,sketches:s,selected:o,units:a,tool:l,defaultHeight:c}=t,d=a==="ft"?Sx:.01,[h,f]=Re.useState([]),[m,_]=Re.useState(null),y=Re.useRef(null),v=Re.useRef(null),[u,p]=Re.useState({W:360,H:540}),[g,M]=Re.useState({scale:64,panX:180,panY:270,init:!1}),[C,w]=Re.useState(null),T=Re.useRef(null);T.current=C;const L=Re.useRef(new Map),B=Re.useRef(null),S=Re.useRef(g);S.current=g;const E=Re.useRef(!1);Re.useLayoutEffect(()=>{const b=y.current;if(!b)return;const I=()=>{const D=b.clientWidth,k=b.clientHeight;p({W:D,H:k}),M(U=>U.init?U:{scale:64,panX:D/2,panY:k/2,init:!0})},P=new ResizeObserver(I);return P.observe(b),I(),()=>P.disconnect()},[]);const{W:V,H:W}=u;function Z(){let b=1/0,I=-1/0,P=1/0,D=-1/0;const k=(xe,H)=>{b=Math.min(b,xe),I=Math.max(I,xe),P=Math.min(P,H),D=Math.max(D,H)};for(const xe of n)k(xe.x,xe.z),k(xe.x+xe.w,xe.z+xe.d);for(const xe of i)k(xe.x1,xe.z1),k(xe.x2,xe.z2);for(const xe of r){const H=xi[xe.type],ge=Vr(H,xe);k(xe.x-ge.w/2,xe.z-ge.d/2),k(xe.x+ge.w/2,xe.z+ge.d/2)}for(const xe of s)for(const H of xe.pts)k(H.x,H.z);if(!isFinite(b)){M({scale:64,panX:V/2,panY:W/2,init:!0});return}const U=56,X=92,G=64,$=Math.max(.5,I-b),ue=Math.max(.5,D-P),fe=Br(Math.min((V-2*U)/$,(W-X-G)/ue),14,180),de=(b+I)/2,Ne=(P+D)/2,Ee=(X+(W-G))/2;M({scale:fe,panX:V/2-de*fe,panY:Ee-Ne*fe,init:!0})}const ne=n.length>0||i.length>0||r.length>0||s.length>0,K=Re.useRef(0);Re.useLayoutEffect(()=>{if(!u.W)return;const b=K.current&&Math.abs(u.W-K.current)>60;K.current=u.W,ne&&(!E.current||b)&&(Z(),E.current=!0)},[u.W,ne]),Re.useLayoutEffect(()=>{l!=="sketch"&&(f([]),_(null))},[l]);const{scale:ee,panX:z,panY:ie}=g,Q=(b,I)=>[b*ee+z,I*ee+ie],le=(b,I)=>[(b-z)/ee,(I-ie)/ee],we=b=>{const I=v.current.getBoundingClientRect();return[b.clientX-I.left,b.clientY-I.top]},ye=(o==null?void 0:o.type)==="item"?r.find(b=>b.uid===o.uid):null,J=(o==null?void 0:o.type)==="room"?n.find(b=>b.uid===o.uid):null,re=(o==null?void 0:o.type)==="wall"?i.find(b=>b.uid===o.uid):null,me=(o==null?void 0:o.type)==="sketch"?s.find(b=>b.uid===o.uid):null;function ve(b){const I=xi[b.type],P=Vr(I,b),[D,k]=Q(b.x,b.z),U=(b.rot||0)*Math.PI/180,X=Math.cos(U),G=Math.sin(U),$=P.w*ee/2,ue=P.d*ee/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([fe,de])=>{const Ne=fe*$,Ee=de*ue;return[D+Ne*X-Ee*G,k+Ne*G+Ee*X]})}function Ue(b){return{nw:Q(b.x,b.z),ne:Q(b.x+b.w,b.z),se:Q(b.x+b.w,b.z+b.d),sw:Q(b.x,b.z+b.d)}}function Pe(b,I){const[P,D]=le(b,I);if(ye){const k=ve(ye);for(let U=0;U<4;U++)if(Math.hypot(b-k[U][0],I-k[U][1])<wu)return{kind:"item-handle"}}if(J){const k=Ue(J);for(const U in k)if(Math.hypot(b-k[U][0],I-k[U][1])<wu)return{kind:"room-handle",handle:U}}if(re)for(const k of["1","2"]){const[U,X]=Q(re["x"+k],re["z"+k]);if(Math.hypot(b-U,I-X)<wu)return{kind:"wall-end",end:k}}for(let k=r.length-1;k>=0;k--){const U=r[k],X=xi[U.type];if(!X)continue;const G=Vr(X,U),$=(U.rot||0)*Math.PI/180,ue=P-U.x,fe=D-U.z,de=ue*Math.cos($)+fe*Math.sin($),Ne=-ue*Math.sin($)+fe*Math.cos($);if(Math.abs(de)<=G.w/2+.08&&Math.abs(Ne)<=G.d/2+.08)return{kind:"item",uid:U.uid}}for(let k=i.length-1;k>=0;k--){const U=i[k];if(Tu(P,D,U.x1,U.z1,U.x2,U.z2)<=U.thickness/2+.18)return{kind:"wall",uid:U.uid}}for(let k=s.length-1;k>=0;k--){const U=s[k],X=U.closed?U.pts.length:U.pts.length-1;for(let G=0;G<X;G++){const $=U.pts[G],ue=U.pts[(G+1)%U.pts.length];if(Tu(P,D,$.x,$.z,ue.x,ue.z)<=.18)return{kind:"sketch",uid:U.uid}}}for(let k=n.length-1;k>=0;k--){const U=n[k];for(const X of Vm){const[G,$,ue,fe]=Eu(U,X);if(Tu(P,D,G,$,ue,fe)<=.18)return{kind:"roomwall",uid:U.uid,side:X}}}for(let k=n.length-1;k>=0;k--){const U=n[k];if(P>=U.x&&P<=U.x+U.w&&D>=U.z&&D<=U.z+U.d)return{kind:"room",uid:U.uid}}for(let k=s.length-1;k>=0;k--){const U=s[k];if(U.closed&&U.pts.length>=3&&xM(P,D,U.pts))return{kind:"sketch",uid:U.uid}}return{kind:"empty"}}function Be(b){const I=[],P=[];for(const D of n)D.uid!==b&&(I.push(D.x,D.x+D.w),P.push(D.z,D.z+D.d));return{xs:I,zs:P}}function je(b,I,P=.28){let D=null,k=P;for(const U of I){const X=Math.abs(b-U);X<k&&(k=X,D=U)}return D}const He=(b,I)=>{const P=je(b,Be(I).xs);return P??$t(b,d)},F=(b,I)=>{const P=je(b,Be(I).zs);return P??$t(b,d)},pt=b=>{const[I,P]=we(b);if(L.current.set(b.pointerId,{x:I,y:P}),v.current.setPointerCapture(b.pointerId),L.current.size===2){const X=[...L.current.values()],G=(X[0].x+X[1].x)/2,$=(X[0].y+X[1].y)/2,ue=Math.hypot(X[0].x-X[1].x,X[0].y-X[1].y),fe=S.current;B.current={startDist:ue,startScale:fe.scale,wmx:(G-fe.panX)/fe.scale,wmy:($-fe.panY)/fe.scale},w(null);return}if(L.current.size>2)return;const[D,k]=le(I,P);if(l==="room"){const X=He(D),G=F(k);w({kind:"drawRoom",x0:X,z0:G,cur:{x:X,z:G,w:0,d:0}});return}if(l==="wall"){const X=He(D),G=F(k);w({kind:"drawWall",x1:X,z1:G,cur:{x1:X,z1:G,x2:X,z2:G}});return}if(l==="sketch"){w({kind:"sketch",sx:I,sy:P,panX:S.current.panX,panY:S.current.panY,moved:!1});return}const U=Pe(I,P);switch(U.kind){case"item-handle":w({kind:"resizeItem",uid:ye.uid,cxw:ye.x,czw:ye.z,rot:ye.rot||0,c:xi[ye.type]});break;case"room-handle":w({kind:"resizeRoom",uid:J.uid,handle:U.handle,x0:J.x,z0:J.z,w0:J.w,d0:J.d});break;case"wall-end":w({kind:"wallEnd",uid:re.uid,end:U.end});break;case"item":{const X=r.find(G=>G.uid===U.uid);e({type:"select",sel:{type:"item",uid:U.uid}}),w({kind:"moveItem",uid:U.uid,ox:D-X.x,oz:k-X.z});break}case"wall":{const X=i.find(G=>G.uid===U.uid);e({type:"select",sel:{type:"wall",uid:U.uid}}),w({kind:"moveWall",uid:U.uid,ox:D,oz:k,x1:X.x1,z1:X.z1,x2:X.x2,z2:X.z2});break}case"sketch":{const X=s.find(G=>G.uid===U.uid);e({type:"select",sel:{type:"sketch",uid:U.uid}}),w({kind:"moveSketch",uid:U.uid,ox:D,oz:k,pts:X.pts});break}case"roomwall":e({type:"select",sel:{type:"roomwall",uid:U.uid,side:U.side}}),w(null);break;case"room":{const X=n.find(G=>G.uid===U.uid);e({type:"select",sel:{type:"room",uid:U.uid}}),w({kind:"moveRoom",uid:U.uid,ox:D-X.x,oz:k-X.z});break}default:w({kind:"pan",sx:I,sy:P,panX:S.current.panX,panY:S.current.panY,moved:!1})}},pe=b=>{const[I,P]=we(b);if(L.current.has(b.pointerId)&&L.current.set(b.pointerId,{x:I,y:P}),B.current&&L.current.size>=2){const X=[...L.current.values()],G=(X[0].x+X[1].x)/2,$=(X[0].y+X[1].y)/2,ue=Math.hypot(X[0].x-X[1].x,X[0].y-X[1].y),fe=B.current,de=Br(fe.startScale*(ue/fe.startDist),12,220);M({scale:de,panX:G-fe.wmx*de,panY:$-fe.wmy*de,init:!0});return}if(l==="sketch"&&L.current.size<=1){const[X,G]=le(I,P);_({x:He(X),z:F(G)})}const D=T.current;if(!D)return;const[k,U]=le(I,P);if(D.kind==="pan")!D.moved&&Math.hypot(I-D.sx,P-D.sy)>4&&(D.moved=!0),M(X=>({...X,panX:D.panX+(I-D.sx),panY:D.panY+(P-D.sy)}));else if(D.kind==="sketch")!D.moved&&Math.hypot(I-D.sx,P-D.sy)>7&&(D.moved=!0),D.moved&&M(X=>({...X,panX:D.panX+(I-D.sx),panY:D.panY+(P-D.sy)}));else if(D.kind==="drawRoom"){const X=He(k),G=F(U);w($=>({...$,cur:{x:Math.min($.x0,X),z:Math.min($.z0,G),w:Math.abs(X-$.x0),d:Math.abs(G-$.z0)}}))}else if(D.kind==="drawWall")w(X=>({...X,cur:{x1:X.x1,z1:X.z1,x2:He(k),z2:F(U)}}));else if(D.kind==="moveItem")e({type:"update",sel:{type:"item",uid:D.uid},patch:{x:$t(k-D.ox,Hm),z:$t(U-D.oz,Hm)},mergeKey:`mv:${D.uid}`});else if(D.kind==="resizeItem"){const X=k-D.cxw,G=U-D.czw,$=D.rot*Math.PI/180,ue=X*Math.cos($)+G*Math.sin($),fe=-X*Math.sin($)+G*Math.cos($),de=Br(2*Math.max(.1,Math.abs(ue))/D.c.w,.3,3),Ne=Br(2*Math.max(.1,Math.abs(fe))/D.c.d,.3,3),Ee=Br(Math.sqrt(de*Ne),.3,3);e({type:"update",sel:{type:"item",uid:D.uid},patch:{scale:{x:de,y:Ee,z:Ne}},mergeKey:`sz:${D.uid}`})}else if(D.kind==="moveRoom"){const X=n.find(ue=>ue.uid===D.uid);let G=k-D.ox,$=U-D.oz;if(X){const{xs:ue,zs:fe}=Be(D.uid),de=je(G,ue),Ne=je(G+X.w,ue);de!=null&&(Ne==null||Math.abs(G-de)<=Math.abs(G+X.w-Ne))?G=de:Ne!=null?G=Ne-X.w:G=$t(G,d);const Ee=je($,fe),xe=je($+X.d,fe);Ee!=null&&(xe==null||Math.abs($-Ee)<=Math.abs($+X.d-xe))?$=Ee:xe!=null?$=xe-X.d:$=$t($,d)}e({type:"update",sel:{type:"room",uid:D.uid},patch:{x:G,z:$},mergeKey:`mv:${D.uid}`})}else if(D.kind==="resizeRoom"){let X=D.x0,G=D.z0,$=D.x0+D.w0,ue=D.z0+D.d0;const{xs:fe,zs:de}=Be(D.uid),Ne=xe=>{const H=je(xe,fe);return H??$t(xe,d)},Ee=xe=>{const H=je(xe,de);return H??$t(xe,d)};D.handle.includes("e")&&($=Math.max(X+.5,Ne(k))),D.handle.includes("w")&&(X=Math.min($-.5,Ne(k))),D.handle.includes("s")&&(ue=Math.max(G+.5,Ee(U))),D.handle.includes("n")&&(G=Math.min(ue-.5,Ee(U))),e({type:"update",sel:{type:"room",uid:D.uid},patch:{x:X,z:G,w:$-X,d:ue-G},mergeKey:`rs:${D.uid}`})}else if(D.kind==="moveWall"){const X=$t(k-D.ox,d),G=$t(U-D.oz,d);e({type:"update",sel:{type:"wall",uid:D.uid},patch:{x1:D.x1+X,z1:D.z1+G,x2:D.x2+X,z2:D.z2+G},mergeKey:`mv:${D.uid}`})}else if(D.kind==="wallEnd"){const X=D.end==="1"?{x1:$t(k,d),z1:$t(U,d)}:{x2:$t(k,d),z2:$t(U,d)};e({type:"update",sel:{type:"wall",uid:D.uid},patch:X,mergeKey:`we:${D.uid}`})}else if(D.kind==="moveSketch"){const X=$t(k-D.ox,d),G=$t(U-D.oz,d);e({type:"update",sel:{type:"sketch",uid:D.uid},patch:{pts:D.pts.map($=>({x:$.x+X,z:$.z+G}))},mergeKey:`mv:${D.uid}`})}},ce=b=>{const[I,P]=we(b);L.current.delete(b.pointerId),L.current.size<2&&(B.current=null);const D=T.current;if(D)if(D.kind==="sketch"){if(!D.moved){const[k,U]=le(I,P),X={x:He(k),z:F(U)};let G=!1;if(h.length>=3){const[$,ue]=Q(h[0].x,h[0].z);Math.hypot(I-$,P-ue)<vM&&(G=!0)}G?(e({type:"addSketch",pts:h,closed:!0}),f([]),_(null),ea(12)):(f($=>[...$,X]),ea(6))}}else D.kind==="drawRoom"?D.cur.w>.3&&D.cur.d>.3?e({type:"addRoom",x:D.cur.x,z:D.cur.z,w:D.cur.w,d:D.cur.d,height:c}):e({type:"addRoom",x:He(D.x0-1.8),z:F(D.z0-1.5),w:3.6,d:3,height:c}):D.kind==="drawWall"&&Math.hypot(D.cur.x2-D.cur.x1,D.cur.z2-D.cur.z1)>.2?e({type:"addWall",...D.cur,height:c}):D.kind==="pan"&&!D.moved&&e({type:"select",sel:null});L.current.size===0&&w(null);try{v.current.releasePointerCapture(b.pointerId)}catch{}},Se=b=>{(b&&h.length>=3||!b&&h.length>=2)&&(e({type:"addSketch",pts:h,closed:b}),ea(12)),f([]),_(null)};function qe(b,I,P,D){const k=[],U=I?b.length:b.length-1;for(let X=0;X<U;X++){const G=b[X],$=b[(X+1)%b.length],ue=Math.hypot($.x-G.x,$.z-G.z);if(ue<.001)continue;const[fe,de]=Q(G.x,G.z),[Ne,Ee]=Q($.x,$.z);let xe=(fe+Ne)/2,H=(de+Ee)/2;const ge=-(Ee-de),oe=Ne-fe,ae=Math.hypot(ge,oe)||1;xe+=ge/ae*11,H+=oe/ae*11,k.push(x.jsx("text",{x:xe,y:H+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:P,stroke:"#fff",strokeWidth:3.2,paintOrder:"stroke",strokeLinejoin:"round",fontFamily:"-apple-system, system-ui, sans-serif",children:Ke(ue,a)},`${D}-l${X}`))}return k}const Oe=b=>{const[I,P]=we(b),D=S.current,k=Br(D.scale*(b.deltaY<0?1.1:.9),12,220),U=(I-D.panX)/D.scale,X=(P-D.panY)/D.scale;M({scale:k,panX:I-U*k,panY:P-X*k,init:!0})},N=[],A=[];{const b=a==="ft"?.3048:1,I=ee*b;let P=1;I<6&&(P=5),I*P<6&&(P=25);const D=P*5,[k]=le(0,0),[U]=le(V,0),[,X]=le(0,0),[,G]=le(0,W),$=k/b,ue=U/b,fe=X/b,de=G/b,Ne=a==="ft"?"′":"m";if((ue-$)/P<500){for(let Ee=Math.ceil($/P)*P;Ee<=ue;Ee+=P){const xe=Math.round(Ee),[H]=Q(xe*b,0),ge=xe===0,oe=xe%D===0;N.push(x.jsx("line",{x1:H,y1:0,x2:H,y2:W,stroke:"#000",strokeOpacity:ge?.22:oe?.11:.045,strokeWidth:1},`v${xe}`)),oe&&!ge&&A.push(x.jsxs("text",{x:H+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[xe,Ne]},`vl${xe}`))}for(let Ee=Math.ceil(fe/P)*P;Ee<=de;Ee+=P){const xe=Math.round(Ee),[,H]=Q(0,xe*b),ge=xe===0,oe=xe%D===0;N.push(x.jsx("line",{x1:0,y1:H,x2:V,y2:H,stroke:"#000",strokeOpacity:ge?.22:oe?.11:.045,strokeWidth:1},`h${xe}`)),oe&&!ge&&A.push(x.jsxs("text",{x:3,y:H-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[xe,Ne]},`hl${xe}`))}}}const O=n.length===0&&i.length===0&&r.length===0&&s.length===0&&h.length===0;return x.jsxs("div",{className:"editor2d",ref:y,children:[x.jsxs("svg",{ref:v,onPointerDown:pt,onPointerMove:pe,onPointerUp:ce,onPointerCancel:ce,onWheel:Oe,style:{touchAction:"none",cursor:l==="select"?"default":"crosshair"},children:[x.jsx("defs",{children:x.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:x.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),x.jsx("rect",{x:0,y:0,width:V,height:W,fill:"transparent"}),x.jsx("g",{pointerEvents:"none",children:N}),x.jsx("g",{pointerEvents:"none",children:A}),n.map(b=>{const[I,P]=Q(b.x,b.z);return x.jsx("rect",{x:I,y:P,width:b.w*ee,height:b.d*ee,fill:mM,pointerEvents:"none"},b.uid)}),n.map(b=>x.jsx("g",{pointerEvents:"none",children:Vm.map(I=>{const[P,D,k,U]=Eu(b,I),[X,G]=Q(P,D),[$,ue]=Q(k,U),fe=Gm(b,I),de=(o==null?void 0:o.type)==="roomwall"&&o.uid===b.uid&&o.side===I;return x.jsx("line",{x1:X,y1:G,x2:$,y2:ue,stroke:de?wt:fe?Bm:pM,strokeWidth:de?6:fe?4:2,strokeLinecap:"round",strokeDasharray:fe?void 0:"7 7"},I)})},b.uid)),J&&(()=>{const[b,I]=Q(J.x,J.z),P=J.w*ee;return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("rect",{x:b,y:I,width:P,height:J.d*ee,fill:"none",stroke:wt,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),x.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[x.jsx("rect",{x:b+P/2-78,y:I-25,width:156,height:19,rx:9.5,fill:wt}),x.jsxs("text",{x:b+P/2,y:I-11,textAnchor:"middle",children:[Ke(J.w,a)," × ",Ke(J.d,a)]})]}),Object.entries(Ue(J)).map(([D,[k,U]])=>x.jsx("circle",{cx:k,cy:U,r:7,fill:wt,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},D))]})})(),i.map(b=>{const[I,P]=Q(b.x1,b.z1),[D,k]=Q(b.x2,b.z2),U=(re==null?void 0:re.uid)===b.uid;return x.jsx("line",{x1:I,y1:P,x2:D,y2:k,stroke:U?wt:Bm,strokeWidth:Math.max(5,b.thickness*ee),strokeLinecap:"round",pointerEvents:"none"},b.uid)}),re&&(()=>{const[b,I]=Q(re.x1,re.z1),[P,D]=Q(re.x2,re.z2);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("circle",{cx:b,cy:I,r:7,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"}),x.jsx("circle",{cx:P,cy:D,r:7,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),s.map(b=>{const I=(me==null?void 0:me.uid)===b.uid,P=b.pts.map(k=>Q(k.x,k.z).join(",")).join(" "),D=I?wt:gM;return x.jsxs("g",{pointerEvents:"none",children:[b.closed?x.jsx("polygon",{points:P,fill:D,fillOpacity:.07,stroke:D,strokeWidth:I?3:2.5,strokeLinejoin:"round"}):x.jsx("polyline",{points:P,fill:"none",stroke:D,strokeWidth:I?3:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),qe(b.pts,b.closed,I?"#7a5a16":"#15545f",b.uid),I&&b.pts.map((k,U)=>{const[X,G]=Q(k.x,k.z);return x.jsx("circle",{cx:X,cy:G,r:5,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"},U)})]},b.uid)}),l==="sketch"&&h.length>0&&(()=>{const b=m?[...h,m]:h,I=b.map(U=>Q(U.x,U.z).join(",")).join(" "),[P,D]=Q(h[0].x,h[0].z),k=h.length>=3;return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("polyline",{points:I,fill:"none",stroke:wt,strokeWidth:2.5,strokeDasharray:"7 5",strokeLinejoin:"round",strokeLinecap:"round"}),qe(b,!1,"#7a5a16","draft"),h.map((U,X)=>{const[G,$]=Q(U.x,U.z);return x.jsx("circle",{cx:G,cy:$,r:X===0?6:4.5,fill:X===0?wt:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"},X)}),k&&x.jsx("circle",{cx:P,cy:D,r:11,fill:"none",stroke:wt,strokeWidth:2,strokeDasharray:"3 3"})]})})(),r.map(b=>{const I=xi[b.type];if(!I)return null;const[P,D]=Q(b.x,b.z),k=Vr(I,b),U=k.w*ee,X=k.d*ee,G=(ye==null?void 0:ye.uid)===b.uid;return x.jsxs("g",{transform:`translate(${P} ${D}) rotate(${b.rot||0})`,pointerEvents:"none",children:[x.jsx("g",{filter:"url(#softshadow)",opacity:I.shape==="rug"||I.shape==="round-rug"?.96:1,children:x.jsx(_x,{item:{...I,color:b.color||I.color},wpx:U,dpx:X})}),G&&x.jsx("rect",{x:-U/2-5,y:-X/2-5,width:U+10,height:X+10,rx:7,fill:"none",stroke:wt,strokeWidth:2,strokeDasharray:"6 5"})]},b.uid)}),(C==null?void 0:C.kind)==="drawRoom"&&(()=>{const[b,I]=Q(C.cur.x,C.cur.z);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("rect",{x:b,y:I,width:C.cur.w*ee,height:C.cur.d*ee,fill:wt,fillOpacity:.12,stroke:wt,strokeWidth:3,strokeDasharray:"6 5"}),x.jsxs("text",{x:b+C.cur.w*ee/2,y:I-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[Ke(C.cur.w,a)," × ",Ke(C.cur.d,a)]})]})})(),(C==null?void 0:C.kind)==="drawWall"&&(()=>{const[b,I]=Q(C.cur.x1,C.cur.z1),[P,D]=Q(C.cur.x2,C.cur.z2),k=Math.hypot(C.cur.x2-C.cur.x1,C.cur.z2-C.cur.z1);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("line",{x1:b,y1:I,x2:P,y2:D,stroke:wt,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),x.jsx("text",{x:(b+P)/2,y:(I+D)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:Ke(k,a)})]})})(),ye&&(()=>{const b=ve(ye),I=xi[ye.type],P=Vr(I,ye),[D,k]=Q(ye.x,ye.z),U=Math.hypot(P.w*ee,P.d*ee)/2;return x.jsxs("g",{pointerEvents:"none",children:[b.map(([X,G],$)=>x.jsx("circle",{cx:X,cy:G,r:7,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"},$)),x.jsx("rect",{x:D-78,y:k-U-30,width:156,height:20,rx:10,fill:wt}),x.jsxs("text",{x:D,y:k-U-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[Ke(P.w,a)," × ",Ke(P.d,a)]})]})})(),(o==null?void 0:o.type)==="roomwall"&&(()=>{const b=n.find(de=>de.uid===o.uid);if(!b)return null;const[I,P,D,k]=Eu(b,o.side),[U,X]=Q(I,P),[G,$]=Q(D,k),ue=Math.hypot(D-I,k-P),fe=Gm(b,o.side);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("circle",{cx:U,cy:X,r:6,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"}),x.jsx("circle",{cx:G,cy:$,r:6,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"}),x.jsx("rect",{x:(U+G)/2-60,y:(X+$)/2-11,width:120,height:20,rx:10,fill:wt}),x.jsx("text",{x:(U+G)/2,y:(X+$)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:fe?Ke(ue,a):"opening"})]})})()]}),x.jsx("button",{className:"recenter",onClick:Z,"aria-label":"Fit to view",children:x.jsx(jf,{size:20})}),l==="sketch"&&h.length>0&&x.jsxs("div",{className:"sketch-bar",children:[x.jsx("button",{onClick:()=>f(b=>b.slice(0,-1)),title:"Undo last point",children:x.jsx(yx,{size:17})}),x.jsxs("button",{onClick:()=>Se(!1),disabled:h.length<2,title:"Finish open line",children:[x.jsx(Fm,{size:18})," Finish"]}),x.jsxs("button",{className:"accent",onClick:()=>Se(!0),disabled:h.length<3,title:"Close shape",children:[x.jsx(Fm,{size:18})," Close shape"]}),x.jsx("button",{onClick:()=>{f([]),_(null)},title:"Cancel",children:x.jsx(oM,{size:17})})]}),O&&x.jsxs("div",{className:"empty",children:[x.jsx("b",{children:"Start your floor plan"}),x.jsxs("span",{children:["Pick ",x.jsx("strong",{children:"Room"})," and drag, or use ",x.jsx("strong",{children:"Sketch"})," to free-draw any space with live measurements — or just tap to drop a room."]}),x.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:He(-1.8),z:F(-1.5),w:3.6,d:3,height:c}),children:"+ Add a room"})]}),x.jsx("div",{className:"hint",children:l==="room"?"Drag to draw a room":l==="wall"?"Drag to draw a wall":l==="sketch"?"Tap to drop points — each edge is measured · tap the first point to close · drag to pan":ye?"Drag to move · drag white corners to resize":J?"Drag inside to move · corners to resize · tap a wall to edit it":re?"Drag the wall or its endpoints":me?"Drag to move this sketch · edit dimensions in the panel":(o==null?void 0:o.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}const yM={n:"North",e:"East",s:"South",w:"West"};function Xf(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function Mx(t,e){const n=[];return t.forEach((i,r)=>{for(const s of["n","e","s","w"])n.push({ref:{kind:"room",uid:i.uid,side:s},label:`Room ${r+1} · ${yM[s]}`})}),e.forEach((i,r)=>n.push({ref:{kind:"wall",uid:i.uid},label:`Wall ${r+1}`})),n}function ta(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const gn="#d9b779",Et=.05,Au=18,Tt=(t,e)=>Math.round(t/e)*e,Yr=(t,e,n)=>Math.max(e,Math.min(n,t)),SM=(t,e,n,i,r,s)=>{const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Yr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))},Vo={color:"#c79a6b",tex:"wood:oak"},Wm={color:"#7a543a",tex:"wood:walnut"},MM={color:"#d7d2c8",tex:"stone:white"},wM=[{id:"bunk",name:"Bunk bed"},{id:"base",name:"Base cabinets"},{id:"upper",name:"Upper cabinets"},{id:"cubby",name:"Cubby wall"},{id:"shelves",name:"Open shelves"},{id:"wardrobe",name:"Wardrobe"}];function EM(t,e,n){const i=e.length,r=e.height,s=[],o=(a,l,c,d,h,f="panel",m=Vo)=>s.push({wall:n,u:Math.max(0,a),v:Math.max(0,l),w:c,h:d,depth:h,kind:f,color:m.color,tex:m.tex});if(t==="bunk"){const a=Math.min(i,2.03),l=1;o(0,0,.1,1.85,l),o(a-.1,0,.1,1.85,l),o(0,.35,a,.12,l),o(0,1.45,a,.12,l),o(0,1.6,a,.32,.05)}else if(t==="base"){const l=Math.max(1,Math.floor(i/.6)),c=l*.6;for(let d=0;d<l;d++)o(d*.6,0,.6-.01,.9,.6);o(0,.9,c,.04,.64,"panel",MM)}else if(t==="upper"){const l=Math.max(1,Math.floor(i/.6));for(let c=0;c<l;c++)o(c*.6,1.45,.6-.01,.7,.32)}else if(t==="cubby"||t==="shelves"){const a=t==="shelves"?1:Yr(Math.round(i/.5),2,6),l=Yr(Math.round(r*.85/.45),2,6),c=i/a,d=Math.min(.5,r*.85/l);for(let h=0;h<l;h++)for(let f=0;f<a;f++)o(f*c,h*d,c,d,.4,"cubby")}else if(t==="wardrobe"){const a=Math.min(i,1.2),l=Math.min(r,2);o(0,0,a/2-.005,l,.6,"panel",Wm),o(a/2,0,a/2,l,.6,"panel",Wm)}return s}function TM(){const{state:t,dispatch:e}=Ki(),{rooms:n,walls:i,builtins:r,selected:s,units:o,sideTool:a}=t,l=a,c=Re.useRef(null),d=Re.useRef(null),[h,f]=Re.useState({W:360,H:540}),[m,_]=Re.useState({scale:64,panX:60,panY:460,init:!1}),[y,v]=Re.useState(0),[u,p]=Re.useState(null),g=Re.useRef(null);g.current=u;const M=Re.useRef(new Map),C=Re.useRef(null),w=Re.useRef(m);w.current=m;const T=Mx(n,i),L=Math.min(y,Math.max(0,T.length-1)),B=T[L],S=B?Xf(B.ref,n,i):null,E=Re.useRef(!1);Re.useEffect(()=>{if(E.current||!T.length)return;E.current=!0;let O=t.sideWall;if(!O&&s&&(s.type==="wall"||s.type==="roomwall")&&(O=s.type==="wall"?{kind:"wall",uid:s.uid}:{kind:"room",uid:s.uid,side:s.side}),O){const b=T.findIndex(I=>ta(I.ref,O));b>=0&&v(b)}},[]);const V=B?`${B.ref.kind}:${B.ref.uid}:${B.ref.side||""}`:"";Re.useEffect(()=>{B&&e({type:"sideWall",ref:B.ref})},[V]),Re.useLayoutEffect(()=>{const O=c.current;if(!O)return;const b=new ResizeObserver(()=>f({W:O.clientWidth,H:O.clientHeight}));return b.observe(O),f({W:O.clientWidth,H:O.clientHeight}),()=>b.disconnect()},[]);const{W,H:Z}=h,{scale:ne,panX:K,panY:ee}=m,z=(O,b)=>[O*ne+K,ee-b*ne],ie=(O,b)=>[(O-K)/ne,(ee-b)/ne],Q=O=>{const b=d.current.getBoundingClientRect();return[O.clientX-b.left,O.clientY-b.top]};function le(){if(!S||!W){_(k=>({...k,init:!0}));return}const O=56,b=116,I=60,P=Yr(Math.min((W-2*O)/Math.max(.5,S.length),(Z-b-I)/Math.max(.5,S.height)),14,200),D=(b+(Z-I))/2;_({scale:P,panX:W/2-S.length/2*P,panY:D+S.height/2*P,init:!0})}const we=S?`${B.label}`:"none";Re.useLayoutEffect(()=>{g.current||le()},[we,W,Z]);const ye=S?r.filter(O=>ta(O.wall,B.ref)):[],J=(s==null?void 0:s.type)==="builtin"?r.find(O=>O.uid===s.uid):null,re=J&&S&&ta(J.wall,B.ref)?J:null,me=O=>[z(O.u,O.v),z(O.u+O.w,O.v),z(O.u+O.w,O.v+O.h),z(O.u,O.v+O.h)];function ve(O,b){const[I,P]=ie(O,b);if(re)if(re.kind==="board")for(const D of["1","2"]){const[k,U]=z(re["u"+D],re["v"+D]);if(Math.hypot(O-k,b-U)<Au)return{kind:"b-end",end:D}}else{const D=me(re),k=[2,3,0,1];for(let U=0;U<4;U++)if(Math.hypot(O-D[U][0],b-D[U][1])<Au){const X=me(re)[k[U]];return{kind:"b-handle",fixedU:(X[0]-K)/ne,fixedV:(ee-X[1])/ne}}}if(S&&!re){const D=[["len",S.length,S.height/2],["ht",S.length/2,S.height],["both",S.length,S.height]];for(const[k,U,X]of D){const[G,$]=z(U,X);if(Math.hypot(O-G,b-$)<Au)return{kind:"wall-handle",which:k}}}for(let D=ye.length-1;D>=0;D--){const k=ye[D];if(k.kind==="board"){if(SM(I,P,k.u1,k.v1,k.u2,k.v2)<=k.thickness/2+.1)return{kind:"builtin",uid:k.uid}}else if(I>=k.u&&I<=k.u+k.w&&P>=k.v&&P<=k.v+k.h)return{kind:"builtin",uid:k.uid}}return{kind:"empty"}}const Ue=O=>{const[b,I]=Q(O);if(M.current.set(O.pointerId,{x:b,y:I}),d.current.setPointerCapture(O.pointerId),M.current.size===2){const U=[...M.current.values()],X=(U[0].x+U[1].x)/2,G=(U[0].y+U[1].y)/2,$=Math.hypot(U[0].x-U[1].x,U[0].y-U[1].y),ue=w.current;C.current={startDist:$,startScale:ue.scale,wmx:(X-ue.panX)/ue.scale,wmy:(ue.panY-G)/ue.scale},p(null);return}if(M.current.size>2||!S)return;const[P,D]=ie(b,I),k=ve(b,I);if(k.kind==="b-handle")p({kind:"resizeB",uid:re.uid,fixedU:k.fixedU,fixedV:k.fixedV});else if(k.kind==="b-end")p({kind:"endB",uid:re.uid,end:k.end});else if(k.kind==="wall-handle")p({kind:"resizeWall",which:k.which});else if(k.kind==="builtin"){const U=ye.find(X=>X.uid===k.uid);e({type:"select",sel:{type:"builtin",uid:k.uid}}),U.kind==="board"?p({kind:"moveBoard",uid:k.uid,pu:P,pv:D,u1:U.u1,v1:U.v1,u2:U.u2,v2:U.v2}):p({kind:"moveB",uid:k.uid,ou:P-U.u,ov:D-U.v})}else if(l==="box")p({kind:"drawBox",u0:Tt(P,Et),v0:Tt(D,Et),cur:{u:Tt(P,Et),v:Tt(D,Et),w:0,h:0}});else if(l==="board"){const U=Tt(P,Et),X=Tt(D,Et);p({kind:"drawLine",u1:U,v1:X,cur:{u1:U,v1:X,u2:U,v2:X}})}else p({kind:"pan",sx:b,sy:I,panX:w.current.panX,panY:w.current.panY,moved:!1})},Pe=O=>{const[b,I]=Q(O);if(M.current.has(O.pointerId)&&M.current.set(O.pointerId,{x:b,y:I}),C.current&&M.current.size>=2){const U=[...M.current.values()],X=(U[0].x+U[1].x)/2,G=(U[0].y+U[1].y)/2,$=Math.hypot(U[0].x-U[1].x,U[0].y-U[1].y),ue=C.current,fe=Yr(ue.startScale*($/ue.startDist),12,240);_({scale:fe,panX:X-ue.wmx*fe,panY:G+ue.wmy*fe,init:!0});return}const P=g.current;if(!P)return;const[D,k]=ie(b,I);if(P.kind==="pan")!P.moved&&Math.hypot(b-P.sx,I-P.sy)>4&&(P.moved=!0),_(U=>({...U,panX:P.panX+(b-P.sx),panY:P.panY+(I-P.sy)}));else if(P.kind==="drawBox"){const U=Tt(D,Et),X=Tt(k,Et);p(G=>({...G,cur:{u:Math.min(G.u0,U),v:Math.min(G.v0,X),w:Math.abs(U-G.u0),h:Math.abs(X-G.v0)}}))}else if(P.kind==="drawLine"){let U=Tt(D,Et),X=Tt(k,Et);Math.abs(U-P.u1)<.08&&(U=P.u1),Math.abs(X-P.v1)<.08&&(X=P.v1),p(G=>({...G,cur:{u1:G.u1,v1:G.v1,u2:U,v2:X}}))}else if(P.kind==="moveB")e({type:"update",sel:{type:"builtin",uid:P.uid},patch:{u:Tt(D-P.ou,Et),v:Tt(k-P.ov,Et)},mergeKey:`mb:${P.uid}`});else if(P.kind==="moveBoard"){const U=Tt(D-P.pu,Et),X=Tt(k-P.pv,Et);e({type:"update",sel:{type:"builtin",uid:P.uid},patch:{u1:P.u1+U,v1:P.v1+X,u2:P.u2+U,v2:P.v2+X},mergeKey:`mb:${P.uid}`})}else if(P.kind==="endB"){const U=P.end==="1"?{u1:Tt(D,Et),v1:Tt(k,Et)}:{u2:Tt(D,Et),v2:Tt(k,Et)};e({type:"update",sel:{type:"builtin",uid:P.uid},patch:U,mergeKey:`eb:${P.uid}`})}else if(P.kind==="resizeB"){const U=Tt(D,Et),X=Tt(k,Et);e({type:"update",sel:{type:"builtin",uid:P.uid},patch:{u:Math.min(P.fixedU,U),v:Math.min(P.fixedV,X),w:Math.max(.1,Math.abs(U-P.fixedU)),h:Math.max(.1,Math.abs(X-P.fixedV))},mergeKey:`rb:${P.uid}`})}else if(P.kind==="resizeWall"){let U=S.length,X=S.height;(P.which==="len"||P.which==="both")&&(U=Math.max(.5,Tt(D,Et))),(P.which==="ht"||P.which==="both")&&(X=Yr(Tt(k,Et),1.5,6));const G=B.ref;if(G.kind==="room"){const $={height:X};G.side==="n"||G.side==="s"?$.w=U:$.d=U,e({type:"update",sel:{type:"room",uid:G.uid},patch:$,mergeKey:`ws:${G.uid}`})}else e({type:"update",sel:{type:"wall",uid:G.uid},patch:{height:X,x2:S.ox+S.dirx*U,z2:S.oz+S.dirz*U},mergeKey:`ws:${G.uid}`})}},Be=O=>{M.current.delete(O.pointerId),M.current.size<2&&(C.current=null);const b=g.current;b&&S&&(b.kind==="drawBox"&&b.cur.w>.1&&b.cur.h>.1?e({type:"addBuiltin",builtin:{wall:B.ref,u:b.cur.u,v:b.cur.v,w:b.cur.w,h:b.cur.h,depth:.5,kind:"cubby",color:Vo.color,tex:Vo.tex}}):b.kind==="drawLine"&&Math.hypot(b.cur.u2-b.cur.u1,b.cur.v2-b.cur.v1)>.05?e({type:"addBuiltin",builtin:{wall:B.ref,kind:"board",u1:b.cur.u1,v1:b.cur.v1,u2:b.cur.u2,v2:b.cur.v2,thickness:.05,depth:.04,color:Vo.color,tex:Vo.tex}}):b.kind==="pan"&&!b.moved&&e({type:"select",sel:null})),b&&b.kind==="resizeWall"&&le(),M.current.size===0&&p(null);try{d.current.releasePointerCapture(O.pointerId)}catch{}},je=O=>{const[b,I]=Q(O),P=w.current,D=Yr(P.scale*(O.deltaY<0?1.1:.9),12,240);_({scale:D,panX:b-(b-P.panX)/P.scale*D,panY:I+(P.panY-I)/P.scale*D,init:!0})},He=[],F=[],pt=[];let pe=0,ce=0,Se=0;if(S){for(let I=0;I<=S.length+1e-6;I+=.5){const[P]=z(I,0);He.push(x.jsx("line",{x1:P,y1:z(0,0)[1],x2:P,y2:z(0,S.height)[1],stroke:"#000",strokeOpacity:Math.abs(I%1)<1e-6?.1:.045,strokeWidth:1},`gu${I.toFixed(2)}`))}for(let I=0;I<=S.height+1e-6;I+=.5){const[,P]=z(0,I);He.push(x.jsx("line",{x1:z(0,0)[0],y1:P,x2:z(S.length,0)[0],y2:P,stroke:"#000",strokeOpacity:Math.abs(I%1)<1e-6?.1:.045,strokeWidth:1},`gv${I.toFixed(2)}`))}pe=z(0,0)[1],ce=z(0,S.height)[1],Se=z(0,0)[0];const O=o==="m"?.5:.3048;let b=0;for(let I=0;I<=S.height+1e-6;I+=O,b++){const P=z(0,I)[1],D=b%2===0;F.push(x.jsx("line",{x1:Se-7,y1:P,x2:Se,y2:P,stroke:"#9aa1ab",strokeWidth:D?1.6:1},`t${b}`)),D&&I>.05&&F.push(x.jsx("text",{x:Se-10,y:P+3,textAnchor:"end",fontSize:9.5,fill:"#8a92a0",fontFamily:"-apple-system, system-ui, sans-serif",children:Ke(I,o)},`rl${b}`))}for(let I=Se%16;I<W;I+=16)pt.push(x.jsx("line",{x1:I,y1:pe,x2:I-10,y2:pe+12,stroke:"#39414f",strokeOpacity:.22,strokeWidth:1},`hx${I}`))}if(!T.length)return x.jsx("div",{className:"editor2d elevation",ref:c,children:x.jsxs("div",{className:"empty",children:[x.jsx("b",{children:"No walls yet"}),x.jsxs("span",{children:["Go to ",x.jsx("strong",{children:"Plan"})," and draw a room or wall, then come back to design built-ins against it."]})]})});const[qe,Oe]=S?z(0,S.height):[0,0],N=S?S.length*ne:0,A=S?S.height*ne:0;return x.jsxs("div",{className:"editor2d elevation",ref:c,children:[x.jsxs("svg",{ref:d,onPointerDown:Ue,onPointerMove:Pe,onPointerUp:Be,onPointerCancel:Be,onWheel:je,style:{touchAction:"none",cursor:l==="select"?"default":"crosshair"},children:[x.jsxs("defs",{children:[x.jsx("filter",{id:"esh",x:"-30%",y:"-30%",width:"160%",height:"160%",children:x.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})}),x.jsxs("linearGradient",{id:"wallgrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[x.jsx("stop",{offset:"0",stopColor:"#f6f7f9"}),x.jsx("stop",{offset:"1",stopColor:"#e2e6ec"})]})]}),x.jsx("rect",{x:0,y:0,width:W,height:Z,fill:"transparent"}),S&&x.jsxs(x.Fragment,{children:[x.jsx("rect",{x:qe,y:Oe,width:N,height:A,fill:"url(#wallgrad)",stroke:"#39414f",strokeWidth:2.5,pointerEvents:"none"}),x.jsx("line",{x1:qe,y1:ce,x2:qe+N,y2:ce,stroke:"#39414f",strokeOpacity:.5,strokeWidth:2,strokeDasharray:"7 6",pointerEvents:"none"}),x.jsx("g",{pointerEvents:"none",children:He}),x.jsx("g",{pointerEvents:"none",children:F}),x.jsx("line",{x1:0,y1:pe,x2:W,y2:pe,stroke:"#39414f",strokeWidth:3.5,pointerEvents:"none"}),x.jsx("g",{pointerEvents:"none",children:pt}),x.jsx("text",{x:qe+7,y:pe-7,fontSize:10,fontWeight:700,letterSpacing:"1.5",fill:"#39414f",opacity:.45,pointerEvents:"none",children:"FLOOR"}),ye.map(O=>{const b=(re==null?void 0:re.uid)===O.uid;if(O.kind==="board"){const[k,U]=z(O.u1,O.v1),[X,G]=z(O.u2,O.v2);return x.jsx("line",{x1:k,y1:U,x2:X,y2:G,stroke:b?gn:O.color,strokeWidth:Math.max(4,O.thickness*ne),strokeLinecap:"round",pointerEvents:"none"},O.uid)}const[I,P]=z(O.u,O.v+O.h),D=O.kind==="cubby";return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("rect",{x:I,y:P,width:O.w*ne,height:O.h*ne,fill:D?"#f6f3ec":O.color,stroke:b?gn:O.color,strokeWidth:D?Math.max(4,.05*ne):2,filter:"url(#esh)"}),b&&x.jsx("rect",{x:I-4,y:P-4,width:O.w*ne+8,height:O.h*ne+8,rx:6,fill:"none",stroke:gn,strokeWidth:2,strokeDasharray:"6 5"})]},O.uid)}),(u==null?void 0:u.kind)==="drawBox"&&(()=>{const[O,b]=z(u.cur.u,u.cur.v+u.cur.h);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("rect",{x:O,y:b,width:u.cur.w*ne,height:u.cur.h*ne,fill:gn,fillOpacity:.12,stroke:gn,strokeWidth:3,strokeDasharray:"6 5"}),x.jsxs("text",{x:O+u.cur.w*ne/2,y:b-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[Ke(u.cur.w,o)," × ",Ke(u.cur.h,o)]})]})})(),(u==null?void 0:u.kind)==="drawLine"&&(()=>{const[O,b]=z(u.cur.u1,u.cur.v1),[I,P]=z(u.cur.u2,u.cur.v2),D=Math.hypot(u.cur.u2-u.cur.u1,u.cur.v2-u.cur.v1);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("line",{x1:O,y1:b,x2:I,y2:P,stroke:gn,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),x.jsx("text",{x:(O+I)/2,y:(b+P)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:Ke(D,o)})]})})(),re&&re.kind==="board"&&(()=>{const[O,b]=z(re.u1,re.v1),[I,P]=z(re.u2,re.v2);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("circle",{cx:O,cy:b,r:7,fill:"#fff",stroke:gn,strokeWidth:2.5,filter:"url(#esh)"}),x.jsx("circle",{cx:I,cy:P,r:7,fill:"#fff",stroke:gn,strokeWidth:2.5,filter:"url(#esh)"})]})})(),re&&re.kind!=="board"&&(()=>{const O=me(re),[b,I]=z(re.u+re.w/2,re.v+re.h);return x.jsxs("g",{pointerEvents:"none",children:[O.map(([P,D],k)=>x.jsx("circle",{cx:P,cy:D,r:7,fill:"#fff",stroke:gn,strokeWidth:2.5,filter:"url(#esh)"},k)),x.jsx("rect",{x:b-78,y:I-28,width:156,height:20,rx:10,fill:gn}),x.jsxs("text",{x:b,y:I-14,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[Ke(re.w,o)," × ",Ke(re.h,o)]})]})})(),!re&&(()=>{const O=z(S.length/2,S.height),b=z(S.length,S.height/2),I=z(S.length,S.height),[P,D]=z(0,S.height);return x.jsxs("g",{pointerEvents:"none",children:[x.jsx("rect",{x:P+8,y:D+8,width:148,height:20,rx:10,fill:gn}),x.jsxs("text",{x:P+82,y:D+22,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[Ke(S.length,o)," W × ",Ke(S.height,o)," H"]}),x.jsx("circle",{cx:O[0],cy:O[1],r:7.5,fill:gn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),x.jsx("circle",{cx:b[0],cy:b[1],r:7.5,fill:gn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),x.jsx("circle",{cx:I[0],cy:I[1],r:8,fill:gn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"})]})})()]})]}),x.jsxs("div",{className:"wall-picker",children:[x.jsx("button",{onClick:()=>v((L-1+T.length)%T.length),"aria-label":"Previous wall",children:"‹"}),x.jsx("span",{children:B==null?void 0:B.label}),x.jsx("button",{onClick:()=>v((L+1)%T.length),"aria-label":"Next wall",children:"›"})]}),x.jsx("button",{className:"recenter",onClick:le,"aria-label":"Fit to view",children:x.jsx(jf,{size:20})}),x.jsx("div",{className:"hint",children:re?"Drag to move · drag handles to resize · edit for depth & finish":l==="box"?"Drag empty space to add a box · tap a piece to edit it":l==="board"?"Drag empty space to draw a board · tap a piece to edit it":"Tap a piece to edit · drag the gold dots to resize the room"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="169",$s={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AM=0,jm=1,bM=2,wx=1,Ex=2,Ui=3,Mr=0,un=1,Nn=2,qt=0,eo=1,Xm=2,Ym=3,qm=4,Tx=5,ci=100,CM=101,RM=102,PM=103,LM=104,Go=200,DM=201,NM=202,IM=203,oh=204,ah=205,lh=206,UM=207,ch=208,OM=209,zM=210,kM=211,FM=212,BM=213,HM=214,uh=0,dh=1,hh=2,uo=3,fh=4,ph=5,mh=6,gh=7,Ax=0,VM=1,GM=2,_r=0,bx=1,Cx=2,Rx=3,qf=4,WM=5,Px=6,Lx=7,Dx=300,ho=301,fo=302,vh=303,xh=304,Oc=306,Ei=1e3,qr=1001,_h=1002,Gt=1003,jM=1004,Ya=1005,jn=1006,bu=1007,Kr=1008,Ti=1009,Nx=1010,Ix=1011,_a=1012,Kf=1013,is=1014,Hi=1015,Ai=1016,Zf=1017,Qf=1018,rs=1020,Ux=35902,Ox=1021,zx=1022,Yn=1023,kx=1024,Fx=1025,to=1026,ss=1027,Bx=1028,Jf=1029,Hx=1030,$f=1031,ep=1033,Ul=33776,Ol=33777,zl=33778,kl=33779,yh=35840,Sh=35841,Mh=35842,wh=35843,Eh=36196,Th=37492,Ah=37496,bh=37808,Ch=37809,Rh=37810,Ph=37811,Lh=37812,Dh=37813,Nh=37814,Ih=37815,Uh=37816,Oh=37817,zh=37818,kh=37819,Fh=37820,Bh=37821,Fl=36492,Hh=36494,Vh=36495,Vx=36283,Gh=36284,Wh=36285,jh=36286,XM=3200,YM=3201,tp=0,qM=1,lr="",yn="srgb",Ar="srgb-linear",np="display-p3",zc="display-p3-linear",pc="linear",ht="srgb",mc="rec709",gc="p3",vs=7680,Km=519,KM=512,ZM=513,QM=514,Gx=515,JM=516,$M=517,e1=518,t1=519,Zm=35044,Qm="300 es",Vi=2e3,vc=2001;class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,Xh=180/Math.PI;function Aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function n1(t,e){return(t%e+e)%e}function Cu(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const i1={DEG2RAD:Bl};class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=r[0],v=r[3],u=r[6],p=r[1],g=r[4],M=r[7],C=r[2],w=r[5],T=r[8];return s[0]=o*y+a*p+l*C,s[3]=o*v+a*g+l*w,s[6]=o*u+a*M+l*T,s[1]=c*y+d*p+h*C,s[4]=c*v+d*g+h*w,s[7]=c*u+d*M+h*T,s[2]=f*y+m*p+_*C,s[5]=f*v+m*g+_*w,s[8]=f*u+m*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new Qe;function Wx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ya(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function r1(){const t=ya("canvas");return t.style.display="block",t}const Jm={};function Hl(t){t in Jm||(Jm[t]=!0,console.warn(t))}function s1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function o1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $m=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),e0=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[Ar]:{transfer:pc,primaries:mc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[yn]:{transfer:ht,primaries:mc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[zc]:{transfer:pc,primaries:gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(e0),fromReference:t=>t.applyMatrix3($m)},[np]:{transfer:ht,primaries:gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(e0),fromReference:t=>t.applyMatrix3($m).convertLinearToSRGB()}},l1=new Set([Ar,zc]),it={enabled:!0,_workingColorSpace:Ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!l1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Co[e].toReference,r=Co[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Co[t].primaries},getTransfer:function(t){return t===lr?pc:Co[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Co[e].luminanceCoefficients)}};function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class c1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=ya("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ya("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class jx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lu(r[o].image)):s.push(Lu(r[o]))}else s=Lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d1=0;class kt extends ds{constructor(e=kt.DEFAULT_IMAGE,n=kt.DEFAULT_MAPPING,i=qr,r=qr,s=jn,o=Kr,a=Yn,l=Ti,c=kt.DEFAULT_ANISOTROPY,d=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Aa(),this.name="",this.source=new jx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Dx;kt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,C=(u+1)/2,w=(d+f)/4,T=(h+y)/4,L=(_+v)/4;return g>M&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=T/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=L/s),this.set(i,r,s,n),this}let p=Math.sqrt((v-_)*(v-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(p)<.001&&(p=1),this.x=(v-_)/p,this.y=(h-y)/p,this.z=(f-d)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h1 extends ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends h1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xx extends kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==m||d!==_){let v=1-a;const u=l*f+c*m+d*_+h*y,p=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),w=Math.atan2(C,u*p);v=Math.sin(v*w)/C,a=Math.sin(a*w)/C}const M=a*p;if(l=l*v+f*M,c=c*v+m*M,d=d*v+_*M,h=h*v+y*M,v===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-a*m,e[n+2]=c*_+d*m+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(t0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new j,t0=new os;class ba{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ka.subVectors(this.max,Ro),_s.subVectors(e.a,Ro),ys.subVectors(e.b,Ro),Ss.subVectors(e.c,Ro),Ji.subVectors(ys,_s),$i.subVectors(Ss,ys),Pr.subVectors(_s,Ss);let n=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-Pr.z,Pr.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,Pr.z,0,-Pr.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-Pr.y,Pr.x,0];return!Nu(n,_s,ys,Ss,Ka)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,_s,ys,Ss,Ka))?!1:(Za.crossVectors(Ji,$i),n=[Za.x,Za.y,Za.z],Nu(n,_s,ys,Ss,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new j,new j,new j,new j,new j,new j,new j,new j],ti=new j,qa=new ba,_s=new j,ys=new j,Ss=new j,Ji=new j,$i=new j,Pr=new j,Ro=new j,Ka=new j,Za=new j,Lr=new j;function Nu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),d=i.dot(Lr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const p1=new ba,Po=new j,Iu=new j;class kc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):p1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Iu)),this.expandByPoint(Po.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new j,Uu=new j,Qa=new j,er=new j,Ou=new j,Ja=new j,zu=new j;class Fc{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uu.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),er.copy(this.origin).sub(Uu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Qa),a=er.dot(this.direction),l=-er.dot(Qa),c=er.lengthSq(),d=Math.abs(1-o*o);let h,f,m,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Uu).addScaledVector(Qa,f),m}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){Ou.subVectors(n,e),Ja.subVectors(i,e),zu.crossVectors(Ou,Ja);let o=this.direction.dot(zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(er,Ja));if(l<0)return null;const c=a*this.direction.dot(Ou.cross(er));if(c<0||l+c>o)return null;const d=-a*er.dot(zu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,_,y,v){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,y,v)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,y,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,y=c*h;n[0]=f+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m1,e,g1)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),tr.crossVectors(i,Rn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),tr.crossVectors(i,Rn)),tr.normalize(),$a.crossVectors(Rn,tr),r[0]=tr.x,r[4]=$a.x,r[8]=Rn.x,r[1]=tr.y,r[5]=$a.y,r[9]=Rn.y,r[2]=tr.z,r[6]=$a.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],v=i[10],u=i[14],p=i[3],g=i[7],M=i[11],C=i[15],w=r[0],T=r[4],L=r[8],B=r[12],S=r[1],E=r[5],V=r[9],W=r[13],Z=r[2],ne=r[6],K=r[10],ee=r[14],z=r[3],ie=r[7],Q=r[11],le=r[15];return s[0]=o*w+a*S+l*Z+c*z,s[4]=o*T+a*E+l*ne+c*ie,s[8]=o*L+a*V+l*K+c*Q,s[12]=o*B+a*W+l*ee+c*le,s[1]=d*w+h*S+f*Z+m*z,s[5]=d*T+h*E+f*ne+m*ie,s[9]=d*L+h*V+f*K+m*Q,s[13]=d*B+h*W+f*ee+m*le,s[2]=_*w+y*S+v*Z+u*z,s[6]=_*T+y*E+v*ne+u*ie,s[10]=_*L+y*V+v*K+u*Q,s[14]=_*B+y*W+v*ee+u*le,s[3]=p*w+g*S+M*Z+C*z,s[7]=p*T+g*E+M*ne+C*ie,s[11]=p*L+g*V+M*K+C*Q,s[15]=p*B+g*W+M*ee+C*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],v=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+y*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+v*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],v=e[14],u=e[15],p=h*v*c-y*f*c+y*l*m-a*v*m-h*l*u+a*f*u,g=_*f*c-d*v*c-_*l*m+o*v*m+d*l*u-o*f*u,M=d*y*c-_*h*c+_*a*m-o*y*m-d*a*u+o*h*u,C=_*h*l-d*y*l-_*a*f+o*y*f+d*a*v-o*h*v,w=n*p+i*g+r*M+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=p*T,e[1]=(y*f*s-h*v*s-y*r*m+i*v*m+h*r*u-i*f*u)*T,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(d*v*s-_*f*s+_*r*m-n*v*m-d*r*u+n*f*u)*T,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*T,e[8]=M*T,e[9]=(_*h*s-d*y*s-_*i*m+n*y*m+d*i*u-n*h*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*T,e[12]=C*T,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*v+n*h*v)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*v-n*a*v)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,_=s*h,y=o*d,v=o*h,u=a*h,p=l*c,g=l*d,M=l*h,C=i.x,w=i.y,T=i.z;return r[0]=(1-(y+u))*C,r[1]=(m+M)*C,r[2]=(_-g)*C,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(f+u))*w,r[6]=(v+p)*w,r[7]=0,r[8]=(_+g)*T,r[9]=(v-p)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ms.set(r[0],r[1],r[2]).length();const o=Ms.set(r[4],r[5],r[6]).length(),a=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);const c=1/s,d=1/o,h=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,n.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===Vi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let _,y;if(a===Vi)_=(o+s)*h,y=-2*h;else if(a===vc)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ms=new j,ni=new rt,m1=new j(0,0,0),g1=new j(1,1,1),tr=new j,$a=new j,Rn=new j,n0=new rt,i0=new os;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return n0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return i0.setFromEuler(this),this.setFromQuaternion(i0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v1=0;const r0=new j,ws=new os,Li=new rt,el=new j,Lo=new j,x1=new j,_1=new os,s0=new j(1,0,0),o0=new j(0,1,0),a0=new j(0,0,1),l0={type:"added"},y1={type:"removed"},Es={type:"childadded",child:null},ku={type:"childremoved",child:null};class jt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new j,n=new bi,i=new os,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Qe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(o0,e)}rotateZ(e){return this.rotateOnAxis(a0,e)}translateOnAxis(e,n){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(o0,e)}translateZ(e){return this.translateOnAxis(a0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?el.copy(e):el.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Lo,el,this.up):Li.lookAt(el,Lo,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(Li),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l0),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(y1),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l0),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,x1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,_1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new j(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new j,Di=new j,Fu=new j,Ni=new j,Ts=new j,As=new j,c0=new j,Bu=new j,Hu=new j,Vu=new j,Gu=new ut,Wu=new ut,ju=new ut;class ui{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Di.subVectors(i,n),Fu.subVectors(e,n);const o=ii.dot(ii),a=ii.dot(Di),l=ii.dot(Fu),c=Di.dot(Di),d=Di.dot(Fu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Gu.setScalar(0),Wu.setScalar(0),ju.setScalar(0),Gu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gu,s.x),o.addScaledVector(Wu,s.y),o.addScaledVector(ju,s.z),o}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Di.subVectors(e,n),ii.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ii.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ts.subVectors(r,i),As.subVectors(s,i),Bu.subVectors(e,i);const l=Ts.dot(Bu),c=As.dot(Bu);if(l<=0&&c<=0)return n.copy(i);Hu.subVectors(e,r);const d=Ts.dot(Hu),h=As.dot(Hu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ts,o);Vu.subVectors(e,s);const m=Ts.dot(Vu),_=As.dot(Vu);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(As,a);const v=d*_-m*h;if(v<=0&&h-d>=0&&m-_>=0)return c0.subVectors(s,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(c0,a);const u=1/(v+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=n1(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xu(o,s,e+1/3),this.g=Xu(o,s,e),this.b=Xu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=Yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=Pu(e.r),this.g=Pu(e.g),this.b=Pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return it.fromWorkingColorSpace(tn.copy(this),e),Math.round(ln(tn.r*255,0,255))*65536+Math.round(ln(tn.g*255,0,255))*256+Math.round(ln(tn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=yn){it.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(tl);const i=Cu(nr.h,tl.h,n),r=Cu(nr.s,tl.s,n),s=Cu(nr.l,tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ve;Ve.NAMES=Yx;let S1=0;class hs extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=eo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bc extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new j,nl=new ke;class wi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zm&&(e.usage=this.usage),e}}class qx extends wi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kx extends wi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dt extends wi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let M1=0;const Hn=new rt,Yu=new jt,bs=new j,Pn=new ba,Do=new ba,Ht=new j;class fn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wx(e)?Kx:qx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Pn.min,Do.min),Pn.expandByPoint(Ht),Ht.addVectors(Pn.max,Do.max),Pn.expandByPoint(Ht)):(Pn.expandByPoint(Do.min),Pn.expandByPoint(Do.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ht.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Ht.add(bs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new j,l[L]=new j;const c=new j,d=new j,h=new j,f=new ke,m=new ke,_=new ke,y=new j,v=new j;function u(L,B,S){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,B),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,B),_.fromBufferAttribute(s,S),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const E=1/(m.x*_.y-_.x*m.y);isFinite(E)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(E),v.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(E),a[L].add(y),a[B].add(y),a[S].add(y),l[L].add(v),l[B].add(v),l[S].add(v))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let L=0,B=p.length;L<B;++L){const S=p[L],E=S.start,V=S.count;for(let W=E,Z=E+V;W<Z;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const g=new j,M=new j,C=new j,w=new j;function T(L){C.fromBufferAttribute(r,L),w.copy(C);const B=a[L];g.copy(B),g.sub(C.multiplyScalar(C.dot(B))).normalize(),M.crossVectors(w,B);const E=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,E)}for(let L=0,B=p.length;L<B;++L){const S=p[L],E=S.start,V=S.count;for(let W=E,Z=E+V;W<Z;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,h=new j;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new wi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new rt,Dr=new Fc,il=new kc,d0=new j,rl=new j,sl=new j,ol=new j,qu=new j,al=new j,h0=new j,ll=new j;class Je extends jt{constructor(e=new fn,n=new Bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(qu.fromBufferAttribute(h,e),o?al.addScaledVector(qu,d):al.addScaledVector(qu.sub(n),d))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(il.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(il,d0)===null||Dr.origin.distanceToSquared(d0)>(e.far-e.near)**2))&&(u0.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const v=f[_],u=o[v.materialIndex],p=Math.max(v.start,m.start),g=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let M=p,C=g;M<C;M+=3){const w=a.getX(M),T=a.getX(M+1),L=a.getX(M+2);r=cl(this,u,e,i,c,d,h,w,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const p=a.getX(v),g=a.getX(v+1),M=a.getX(v+2);r=cl(this,o,e,i,c,d,h,p,g,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const v=f[_],u=o[v.materialIndex],p=Math.max(v.start,m.start),g=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let M=p,C=g;M<C;M+=3){const w=M,T=M+1,L=M+2;r=cl(this,u,e,i,c,d,h,w,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const p=v,g=v+1,M=v+2;r=cl(this,o,e,i,c,d,h,p,g,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function w1(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;ll.copy(a),ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ll);return c<n.near||c>n.far?null:{distance:c,point:ll.clone(),object:t}}function cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,rl),t.getVertexPosition(l,sl),t.getVertexPosition(c,ol);const d=w1(t,e,n,i,rl,sl,ol,h0);if(d){const h=new j;ui.getBarycoord(h0,rl,sl,ol,h),r&&(d.uv=ui.getInterpolatedAttribute(r,a,l,c,h,new ke)),s&&(d.uv1=ui.getInterpolatedAttribute(s,a,l,c,h,new ke)),o&&(d.normal=ui.getInterpolatedAttribute(o,a,l,c,h,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};ui.getNormal(rl,sl,ol,f.normal),d.face=f,d.barycoord=h}return d}class an extends fn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(h,2));function _(y,v,u,p,g,M,C,w,T,L,B){const S=M/T,E=C/L,V=M/2,W=C/2,Z=w/2,ne=T+1,K=L+1;let ee=0,z=0;const ie=new j;for(let Q=0;Q<K;Q++){const le=Q*E-W;for(let we=0;we<ne;we++){const ye=we*S-V;ie[y]=ye*p,ie[v]=le*g,ie[u]=Z,c.push(ie.x,ie.y,ie.z),ie[y]=0,ie[v]=0,ie[u]=w>0?1:-1,d.push(ie.x,ie.y,ie.z),h.push(we/T),h.push(1-Q/L),ee+=1}}for(let Q=0;Q<L;Q++)for(let le=0;le<T;le++){const we=f+le+ne*Q,ye=f+le+ne*(Q+1),J=f+(le+1)+ne*(Q+1),re=f+(le+1)+ne*Q;l.push(we,ye,re),l.push(ye,J,re),z+=6}a.addGroup(m,z,B),m+=z,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function E1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const di={clone:po,merge:sn};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=A1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qx extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new j,f0=new ke,p0=new ke;class Dn extends Qx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,f0,p0),n.subVectors(p0,f0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Rs=1;class b1 extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new Dn(Cs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new Dn(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Dn(Cs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Dn(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jx extends kt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ho,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C1 extends Qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new an(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:qt});s.uniforms.tEquirect.value=n;const o=new Je(r,s),a=n.minFilter;return n.minFilter===Kr&&(n.minFilter=jn),new b1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ku=new j,R1=new j,P1=new Qe;class ki{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ku.subVectors(i,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P1.getNormalMatrix(e),r=this.coplanarPoint(Ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new kc,ul=new j;class rp{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],y=r[10],v=r[11],u=r[12],p=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,v-m,M-u).normalize(),i[1].setComponents(l+s,f+c,v+m,M+u).normalize(),i[2].setComponents(l+o,f+d,v+_,M+p).normalize(),i[3].setComponents(l-o,f-d,v-_,M-p).normalize(),i[4].setComponents(l-a,f-h,v-y,M-g).normalize(),n===Vi)i[5].setComponents(l+a,f+h,v+y,M+g).normalize();else if(n===vc)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $x(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function L1(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const y=h[m];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class as extends fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],_=[],y=[],v=[];for(let u=0;u<d;u++){const p=u*f-o;for(let g=0;g<c;g++){const M=g*h-s;_.push(M,-p,0),y.push(0,0,1),v.push(g/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<a;p++){const g=p+c*u,M=p+c*(u+1),C=p+1+c*(u+1),w=p+1+c*u;m.push(g,M,w),m.push(M,C,w)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k1=`#ifdef USE_AOMAP
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
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
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
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j1=`#ifdef USE_IRIDESCENCE
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
#endif`,X1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tw=`#define PI 3.141592653589793
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
} // validated`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iw=`vec3 transformedNormal = objectNormal;
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
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`
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
}`,uw=`#ifdef USE_ENVMAP
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
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_w=`#ifdef USE_GRADIENTMAP
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
}`,yw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
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
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rw=`PhysicalMaterial material;
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
#endif`,Pw=`struct PhysicalMaterial {
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
}`,Lw=`
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
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hw=`#if defined( USE_POINTS_UV )
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
#endif`,Vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yw=`#ifdef USE_MORPHTARGETS
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
#endif`,qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,BE=`#define DISTANCE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,XE=`uniform vec3 diffuse;
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
}`,YE=`#define LAMBERT
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
}`,qE=`#define LAMBERT
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
}`,KE=`#define MATCAP
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
}`,ZE=`#define MATCAP
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
}`,QE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,$E=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,rT=`#define TOON
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
}`,sT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:D1,alphahash_pars_fragment:N1,alphamap_fragment:I1,alphamap_pars_fragment:U1,alphatest_fragment:O1,alphatest_pars_fragment:z1,aomap_fragment:k1,aomap_pars_fragment:F1,batching_pars_vertex:B1,batching_vertex:H1,begin_vertex:V1,beginnormal_vertex:G1,bsdfs:W1,iridescence_fragment:j1,bumpmap_pars_fragment:X1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:Z1,color_fragment:Q1,color_pars_fragment:J1,color_pars_vertex:$1,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:rw,displacementmap_vertex:sw,emissivemap_fragment:ow,emissivemap_pars_fragment:aw,colorspace_fragment:lw,colorspace_pars_fragment:cw,envmap_fragment:uw,envmap_common_pars_fragment:dw,envmap_pars_fragment:hw,envmap_pars_vertex:fw,envmap_physical_pars_fragment:Ew,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:vw,fog_pars_fragment:xw,gradientmap_pars_fragment:_w,lightmap_pars_fragment:yw,lights_lambert_fragment:Sw,lights_lambert_pars_fragment:Mw,lights_pars_begin:ww,lights_toon_fragment:Tw,lights_toon_pars_fragment:Aw,lights_phong_fragment:bw,lights_phong_pars_fragment:Cw,lights_physical_fragment:Rw,lights_physical_pars_fragment:Pw,lights_fragment_begin:Lw,lights_fragment_maps:Dw,lights_fragment_end:Nw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:zw,map_fragment:kw,map_pars_fragment:Fw,map_particle_fragment:Bw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Vw,metalnessmap_pars_fragment:Gw,morphinstance_vertex:Ww,morphcolor_vertex:jw,morphnormal_vertex:Xw,morphtarget_pars_vertex:Yw,morphtarget_vertex:qw,normal_fragment_begin:Kw,normal_fragment_maps:Zw,normal_pars_fragment:Qw,normal_pars_vertex:Jw,normal_vertex:$w,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:aE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:wE,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:AE,uv_pars_fragment:bE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:PE,background_vert:LE,background_frag:DE,backgroundCube_vert:NE,backgroundCube_frag:IE,cube_vert:UE,cube_frag:OE,depth_vert:zE,depth_frag:kE,distanceRGBA_vert:FE,distanceRGBA_frag:BE,equirect_vert:HE,equirect_frag:VE,linedashed_vert:GE,linedashed_frag:WE,meshbasic_vert:jE,meshbasic_frag:XE,meshlambert_vert:YE,meshlambert_frag:qE,meshmatcap_vert:KE,meshmatcap_frag:ZE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:$E,meshphong_frag:eT,meshphysical_vert:tT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:aT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},Me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},_i={basic:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:sn([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:sn([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:sn([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:sn([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:sn([Me.lights,Me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_i.physical={uniforms:sn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const dl={r:0,b:0,g:0},Ir=new bi,dT=new rt;function hT(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(p){let g=p.isScene===!0?p.background:null;return g&&g.isTexture&&(g=(p.backgroundBlurriness>0?n:e).get(g)),g}function y(p){let g=!1;const M=_(p);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(p,g){const M=_(g);M&&(M.isCubeTexture||M.mapping===Oc)?(d===void 0&&(d=new Je(new an(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:po(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ir.copy(g.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(dT.makeRotationFromEuler(Ir)),d.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,(h!==M||f!==M.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Je(new as(2,2),new Ot({name:"BackgroundMaterial",uniforms:po(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function u(p,g){p.getRGB(dl,Zx(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,u(a,l)},render:y,addToRenderList:v}}function fT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,E,V,W,Z){let ne=!1;const K=h(W,V,E);s!==K&&(s=K,c(s.object)),ne=m(S,W,V,Z),ne&&_(S,W,V,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,M(S,E,V,W),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,E,V){const W=V.wireframe===!0;let Z=i[S.id];Z===void 0&&(Z={},i[S.id]=Z);let ne=Z[E.id];ne===void 0&&(ne={},Z[E.id]=ne);let K=ne[W];return K===void 0&&(K=f(l()),ne[W]=K),K}function f(S){const E=[],V=[],W=[];for(let Z=0;Z<n;Z++)E[Z]=0,V[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,E,V,W){const Z=s.attributes,ne=E.attributes;let K=0;const ee=V.getAttributes();for(const z in ee)if(ee[z].location>=0){const Q=Z[z];let le=ne[z];if(le===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;K++}return s.attributesNum!==K||s.index!==W}function _(S,E,V,W){const Z={},ne=E.attributes;let K=0;const ee=V.getAttributes();for(const z in ee)if(ee[z].location>=0){let Q=ne[z];Q===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),Z[z]=le,K++}s.attributes=Z,s.attributesNum=K,s.index=W}function y(){const S=s.newAttributes;for(let E=0,V=S.length;E<V;E++)S[E]=0}function v(S){u(S,0)}function u(S,E){const V=s.newAttributes,W=s.enabledAttributes,Z=s.attributeDivisors;V[S]=1,W[S]===0&&(t.enableVertexAttribArray(S),W[S]=1),Z[S]!==E&&(t.vertexAttribDivisor(S,E),Z[S]=E)}function p(){const S=s.newAttributes,E=s.enabledAttributes;for(let V=0,W=E.length;V<W;V++)E[V]!==S[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function g(S,E,V,W,Z,ne,K){K===!0?t.vertexAttribIPointer(S,E,V,Z,ne):t.vertexAttribPointer(S,E,V,W,Z,ne)}function M(S,E,V,W){y();const Z=W.attributes,ne=V.getAttributes(),K=E.defaultAttributeValues;for(const ee in ne){const z=ne[ee];if(z.location>=0){let ie=Z[ee];if(ie===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const Q=ie.normalized,le=ie.itemSize,we=e.get(ie);if(we===void 0)continue;const ye=we.buffer,J=we.type,re=we.bytesPerElement,me=J===t.INT||J===t.UNSIGNED_INT||ie.gpuType===Kf;if(ie.isInterleavedBufferAttribute){const ve=ie.data,Ue=ve.stride,Pe=ie.offset;if(ve.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)u(z.location+Be,ve.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Be=0;Be<z.locationSize;Be++)v(z.location+Be);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Be=0;Be<z.locationSize;Be++)g(z.location+Be,le/z.locationSize,J,Q,Ue*re,(Pe+le/z.locationSize*Be)*re,me)}else{if(ie.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)u(z.location+ve,ie.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<z.locationSize;ve++)v(z.location+ve);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let ve=0;ve<z.locationSize;ve++)g(z.location+ve,le/z.locationSize,J,Q,le*re,le/z.locationSize*ve*re,me)}}else if(K!==void 0){const Q=K[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(z.location,Q);break;case 3:t.vertexAttrib3fv(z.location,Q);break;case 4:t.vertexAttrib4fv(z.location,Q);break;default:t.vertexAttrib1fv(z.location,Q)}}}}p()}function C(){L();for(const S in i){const E=i[S];for(const V in E){const W=E[V];for(const Z in W)d(W[Z].object),delete W[Z];delete E[V]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const V in E){const W=E[V];for(const Z in W)d(W[Z].object),delete W[Z];delete E[V]}delete i[S.id]}function T(S){for(const E in i){const V=i[E];if(V[S.id]===void 0)continue;const W=V[S.id];for(const Z in W)d(W[Z].object),delete W[Z];delete V[S.id]}}function L(){B(),o=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:p}}function pT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];for(let y=0;y<f.length;y++)n.update(_,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Yn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ti&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:C,maxSamples:w}}function gT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?d(null):c();else{const p=s?0:i,g=p*4;let M=u.clippingState||null;l.value=M,M=d(_,f,g,m);for(let C=0;C!==g;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const u=m+y*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(v===null||v.length<u)&&(v=new Float32Array(u));for(let g=0,M=m;g!==y;++g,M+=4)o.copy(h[g]).applyMatrix4(p,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function vT(t){let e=new WeakMap;function n(o,a){return a===vh?o.mapping=ho:a===xh&&(o.mapping=fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vh||a===xh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sp extends Qx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,m0=[.125,.215,.35,.446,.526,.582],Gr=20,Zu=new sp,g0=new Ve;let Qu=null,Ju=0,$u=0,ed=!1;const Hr=(1+Math.sqrt(5))/2,Ps=1/Hr,v0=[new j(-Hr,Ps,0),new j(Hr,Ps,0),new j(-Ps,0,Hr),new j(Ps,0,Hr),new j(0,Hr,-Ps),new j(0,Hr,Ps),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,Ju,$u),this._renderer.xr.enabled=ed,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ho||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ai,format:Yn,colorSpace:Ar,depthBuffer:!1},r=x0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(s)),this._blurMaterial=_T(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(g0),d.toneMapping=_r,d.autoClear=!1;const m=new Bc({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new Je(new an,m);let y=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,y=!0):(m.color.copy(g0),y=!0);for(let u=0;u<6;u++){const p=u%3;p===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):p===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;hl(r,p*g,u>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ho||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=v0[(r-s-1)%v0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Je(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gr-1),y=s/_,v=isFinite(s)?1+Math.floor(d*y):Gr;v>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Gr}`);const u=[];let p=0;for(let T=0;T<Gr;++T){const L=T/y,B=Math.exp(-L*L/2);u.push(B),T===0?p+=B:T<v&&(p+=2*B)}for(let T=0;T<u.length;T++)u[T]=u[T]/p;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const M=this._sizeLods[r],C=3*M*(r>g-Xs?r-g+Xs:0),w=4*(this._cubeSize-M);hl(n,C,w,3*M,2*M),l.setRenderTarget(n),l.render(h,Zu)}}function xT(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+m0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=m0[o-t+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,y=3,v=2,u=1,p=new Float32Array(y*_*m),g=new Float32Array(v*_*m),M=new Float32Array(u*_*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,L=w>2?0:-1,B=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];p.set(B,y*_*w),g.set(f,v*_*w);const S=[w,w,w,w,w,w];M.set(S,u*_*w)}const C=new fn;C.setAttribute("position",new wi(p,y)),C.setAttribute("uv",new wi(g,v)),C.setAttribute("faceIndex",new wi(M,u)),e.push(C),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function x0(t,e,n){const i=new Qn(t,e,n);return i.texture.mapping=Oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _T(t,e,n){const i=new Float32Array(Gr),r=new j(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:op(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function _0(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function y0(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function op(){return`

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
	`}function yT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vh||l===xh,d=l===ho||l===fo;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Yh(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Yh(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ST(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let v=0,u=y.length;v<u;v++)e.remove(y[v])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const y=m[_];for(let v=0,u=y.length;v<u;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const p=m.array;y=m.version;for(let g=0,M=p.length;g<M;g+=3){const C=p[g+0],w=p[g+1],T=p[g+2];f.push(C,w,w,T,T,C)}}else if(_!==void 0){const p=_.array;y=_.version;for(let g=0,M=p.length/3-1;g<M;g+=3){const C=g+0,w=g+1,T=g+2;f.push(C,w,w,T,T,C)}}else return;const v=new(Wx(f)?Kx:qx)(f,1);v.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,v)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function wT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*o),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*o,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let v=0;for(let u=0;u<_;u++)v+=m[u];n.update(v,i,1)}function h(f,m,_,y){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],y[u]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,_);let u=0;for(let p=0;p<_;p++)u+=m[p];for(let p=0;p<y.length;p++)n.update(u,i,y[p])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function ET(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),v===!0&&(M=3);let C=a.attributes.position.count*M,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*w*4*h),L=new Xx(T,C,w,h);L.type=Hi,L.needsUpdate=!0;const B=M*4;for(let E=0;E<h;E++){const V=u[E],W=p[E],Z=g[E],ne=C*w*4*E;for(let K=0;K<V.count;K++){const ee=K*B;_===!0&&(r.fromBufferAttribute(V,K),T[ne+ee+0]=r.x,T[ne+ee+1]=r.y,T[ne+ee+2]=r.z,T[ne+ee+3]=0),y===!0&&(r.fromBufferAttribute(W,K),T[ne+ee+4]=r.x,T[ne+ee+5]=r.y,T[ne+ee+6]=r.z,T[ne+ee+7]=0),v===!0&&(r.fromBufferAttribute(Z,K),T[ne+ee+8]=r.x,T[ne+ee+9]=r.y,T[ne+ee+10]=r.z,T[ne+ee+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new ke(C,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function AT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ap extends kt{constructor(e,n,i,r,s,o,a,l,c,d=to){if(d!==to&&d!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===to&&(i=is),i===void 0&&d===ss&&(i=rs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const e_=new kt,S0=new ap(1,1),t_=new Xx,n_=new f1,i_=new Jx,M0=[],w0=[],E0=new Float32Array(16),T0=new Float32Array(9),A0=new Float32Array(4);function xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=M0[r];if(s===void 0&&(s=new Float32Array(r),M0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hc(t,e){let n=w0[e];n===void 0&&(n=new Int32Array(e),w0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function LT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;A0.set(i),t.uniformMatrix2fv(this.addr,!1,A0),Bt(n,i)}}function DT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;T0.set(i),t.uniformMatrix3fv(this.addr,!1,T0),Bt(n,i)}}function NT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;E0.set(i),t.uniformMatrix4fv(this.addr,!1,E0),Bt(n,i)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function kT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function VT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(S0.compareFunction=Gx,s=S0):s=e_,n.setTexture2D(e||s,r)}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||n_,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||i_,r)}function jT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||t_,r)}function XT(t){switch(t){case 5126:return bT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return OT;case 35669:case 35673:return zT;case 5125:return kT;case 36294:return FT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return jT}}function YT(t,e){t.uniform1fv(this.addr,e)}function qT(t,e){const n=xo(e,this.size,2);t.uniform2fv(this.addr,n)}function KT(t,e){const n=xo(e,this.size,3);t.uniform3fv(this.addr,n)}function ZT(t,e){const n=xo(e,this.size,4);t.uniform4fv(this.addr,n)}function QT(t,e){const n=xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JT(t,e){const n=xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function e2(t,e){t.uniform1iv(this.addr,e)}function t2(t,e){t.uniform2iv(this.addr,e)}function n2(t,e){t.uniform3iv(this.addr,e)}function i2(t,e){t.uniform4iv(this.addr,e)}function r2(t,e){t.uniform1uiv(this.addr,e)}function s2(t,e){t.uniform2uiv(this.addr,e)}function o2(t,e){t.uniform3uiv(this.addr,e)}function a2(t,e){t.uniform4uiv(this.addr,e)}function l2(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||e_,s[o])}function c2(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||n_,s[o])}function u2(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||i_,s[o])}function d2(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||t_,s[o])}function h2(t){switch(t){case 5126:return YT;case 35664:return qT;case 35665:return KT;case 35666:return ZT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return r2;case 36294:return s2;case 36295:return o2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return d2}}class f2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XT(n.type)}}class p2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=h2(n.type)}}class m2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function b0(t,e){t.seq.push(e),t.map[e.id]=e}function g2(t,e,n){const i=t.name,r=i.length;for(td.lastIndex=0;;){const s=td.exec(i),o=td.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){b0(n,c===void 0?new f2(a,t,e):new p2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new m2(a),b0(n,h)),n=h}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);g2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function C0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const v2=37297;let x2=0;function _2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function y2(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===gc&&n===mc?i="LinearDisplayP3ToLinearSRGB":e===mc&&n===gc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ar:case zc:return[i,"LinearTransferOETF"];case yn:case np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function R0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_2(t.getShaderSource(e),o)}else return r}function S2(t,e){const n=y2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function M2(t,e){let n;switch(e){case bx:n="Linear";break;case Cx:n="Reinhard";break;case Rx:n="Cineon";break;case qf:n="ACESFilmic";break;case Px:n="AgX";break;case Lx:n="Neutral";break;case WM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new j;function w2(){it.getLuminanceCoefficients(fl);const t=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function T2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function A2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function P0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(t){return t.replace(b2,R2)}const C2=new Map;function R2(t,e){let n=Ze[e];if(n===void 0){const i=C2.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qh(n)}const P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(t){return t.replace(P2,L2)}function L2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function N0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function D2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function N2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ho:case fo:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function U2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ax:e="ENVMAP_BLENDING_MULTIPLY";break;case VM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function O2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function z2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=D2(n),c=N2(n),d=I2(n),h=U2(n),f=O2(n),m=E2(n),_=T2(s),y=r.createProgram();let v,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Wo).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Wo).join(`
`),u.length>0&&(u+=`
`)):(v=[N0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),u=[N0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Ze.tonemapping_pars_fragment:"",n.toneMapping!==_r?M2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,S2("linearToOutputTexel",n.outputColorSpace),w2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=qh(o),o=P0(o,n),o=L0(o,n),a=qh(a),a=P0(a,n),a=L0(a,n),o=D0(o),a=D0(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=p+v+o,M=p+u+a,C=C0(r,r.VERTEX_SHADER,g),w=C0(r,r.FRAGMENT_SHADER,M);r.attachShader(y,C),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),W=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(w).trim();let ne=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,w);else{const ee=R0(r,C,"vertex"),z=R0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+ee+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||Z==="")&&(K=!1);K&&(E.diagnostics={runnable:ne,programLog:V,vertexShader:{log:W,prefix:v},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(C),r.deleteShader(w),L=new Vl(r,y),B=A2(r,y)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let B;this.getAttributes=function(){return B===void 0&&T(this),B};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,v2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}let k2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new B2(e),n.set(e,i)),i}}class B2{constructor(e){this.id=k2++,this.code=e,this.usedTimes=0}}function H2(t,e,n,i,r,s,o){const a=new ip,l=new F2,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,E,V,W,Z){const ne=W.fog,K=Z.geometry,ee=S.isMeshStandardMaterial?W.environment:null,z=(S.isMeshStandardMaterial?n:e).get(S.envMap||ee),ie=z&&z.mapping===Oc?z.image.height:null,Q=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=le!==void 0?le.length:0;let ye=0;K.morphAttributes.position!==void 0&&(ye=1),K.morphAttributes.normal!==void 0&&(ye=2),K.morphAttributes.color!==void 0&&(ye=3);let J,re,me,ve;if(Q){const mn=_i[Q];J=mn.vertexShader,re=mn.fragmentShader}else J=S.vertexShader,re=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const Ue=t.getRenderTarget(),Pe=Z.isInstancedMesh===!0,Be=Z.isBatchedMesh===!0,je=!!S.map,He=!!S.matcap,F=!!z,pt=!!S.aoMap,pe=!!S.lightMap,ce=!!S.bumpMap,Se=!!S.normalMap,qe=!!S.displacementMap,Oe=!!S.emissiveMap,N=!!S.metalnessMap,A=!!S.roughnessMap,O=S.anisotropy>0,b=S.clearcoat>0,I=S.dispersion>0,P=S.iridescence>0,D=S.sheen>0,k=S.transmission>0,U=O&&!!S.anisotropyMap,X=b&&!!S.clearcoatMap,G=b&&!!S.clearcoatNormalMap,$=b&&!!S.clearcoatRoughnessMap,ue=P&&!!S.iridescenceMap,fe=P&&!!S.iridescenceThicknessMap,de=D&&!!S.sheenColorMap,Ne=D&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,xe=!!S.specularColorMap,H=!!S.specularIntensityMap,ge=k&&!!S.transmissionMap,oe=k&&!!S.thicknessMap,ae=!!S.gradientMap,Te=!!S.alphaMap,be=S.alphaTest>0,et=!!S.alphaHash,Lt=!!S.extensions;let pn=_r;S.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(pn=t.toneMapping);const nt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:re,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Be,batchingColor:Be&&Z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&Z.instanceColor!==null,instancingMorph:Pe&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ar,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:He,envMap:F,envMapMode:F&&z.mapping,envMapCubeUVHeight:ie,aoMap:pt,lightMap:pe,bumpMap:ce,normalMap:Se,displacementMap:m&&qe,emissiveMap:Oe,normalMapObjectSpace:Se&&S.normalMapType===qM,normalMapTangentSpace:Se&&S.normalMapType===tp,metalnessMap:N,roughnessMap:A,anisotropy:O,anisotropyMap:U,clearcoat:b,clearcoatMap:X,clearcoatNormalMap:G,clearcoatRoughnessMap:$,dispersion:I,iridescence:P,iridescenceMap:ue,iridescenceThicknessMap:fe,sheen:D,sheenColorMap:de,sheenRoughnessMap:Ne,specularMap:Ee,specularColorMap:xe,specularIntensityMap:H,transmission:k,transmissionMap:ge,thicknessMap:oe,gradientMap:ae,opaque:S.transparent===!1&&S.blending===eo&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:be,alphaHash:et,combine:S.combine,mapUv:je&&v(S.map.channel),aoMapUv:pt&&v(S.aoMap.channel),lightMapUv:pe&&v(S.lightMap.channel),bumpMapUv:ce&&v(S.bumpMap.channel),normalMapUv:Se&&v(S.normalMap.channel),displacementMapUv:qe&&v(S.displacementMap.channel),emissiveMapUv:Oe&&v(S.emissiveMap.channel),metalnessMapUv:N&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:U&&v(S.anisotropyMap.channel),clearcoatMapUv:X&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:G&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(S.sheenRoughnessMap.channel),specularMapUv:Ee&&v(S.specularMap.channel),specularColorMapUv:xe&&v(S.specularColorMap.channel),specularIntensityMapUv:H&&v(S.specularIntensityMap.channel),transmissionMapUv:ge&&v(S.transmissionMap.channel),thicknessMapUv:oe&&v(S.thicknessMap.channel),alphaMapUv:Te&&v(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!K.attributes.uv&&(je||Te),fog:!!ne,useFog:S.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:pn,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)E.push(V),E.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(g(E,S),M(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),S.push(a.mask)}function C(S){const E=y[S.type];let V;if(E){const W=_i[E];V=di.clone(W.uniforms)}else V=S.uniforms;return V}function w(S,E){let V;for(let W=0,Z=d.length;W<Z;W++){const ne=d[W];if(ne.cacheKey===E){V=ne,++V.usedTimes;break}}return V===void 0&&(V=new z2(t,E,S,s),d.push(V)),V}function T(S){if(--S.usedTimes===0){const E=d.indexOf(S);d[E]=d[d.length-1],d.pop(),S.destroy()}}function L(S){l.remove(S)}function B(){l.dispose()}return{getParameters:u,getProgramCacheKey:p,getUniforms:C,acquireProgram:w,releaseProgram:T,releaseShaderCache:L,programs:d,dispose:B}}function V2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function G2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function I0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function U0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,_,y,v){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:v},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=v),e++,u}function a(h,f,m,_,y,v){const u=o(h,f,m,_,y,v);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,y,v){const u=o(h,f,m,_,y,v);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||G2),i.length>1&&i.sort(f||I0),r.length>1&&r.sort(f||I0)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function W2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new U0,t.set(i,[o])):r>=s.length?(o=new U0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function j2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ve};break;case"SpotLight":n={position:new j,direction:new j,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function X2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Y2=0;function q2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function K2(t){const e=new j2,n=X2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new rt,o=new rt;function a(c){let d=0,h=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,_=0,y=0,v=0,u=0,p=0,g=0,M=0,C=0,w=0,T=0;c.sort(q2);for(let B=0,S=c.length;B<S;B++){const E=c[B],V=E.color,W=E.intensity,Z=E.distance,ne=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=V.r*W,h+=V.g*W,f+=V.b*W;else if(E.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(E.sh.coefficients[K],W);T++}else if(E.isDirectionalLight){const K=e.get(E);if(K.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,z=n.get(E);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=E.shadow.matrix,p++}i.directional[m]=K,m++}else if(E.isSpotLight){const K=e.get(E);K.position.setFromMatrixPosition(E.matrixWorld),K.color.copy(V).multiplyScalar(W),K.distance=Z,K.coneCos=Math.cos(E.angle),K.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),K.decay=E.decay,i.spot[y]=K;const ee=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,ee.updateMatrices(E),E.castShadow&&w++),i.spotLightMatrix[y]=ee.matrix,E.castShadow){const z=n.get(E);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=ne,M++}y++}else if(E.isRectAreaLight){const K=e.get(E);K.color.copy(V).multiplyScalar(W),K.halfWidth.set(E.width*.5,0,0),K.halfHeight.set(0,E.height*.5,0),i.rectArea[v]=K,v++}else if(E.isPointLight){const K=e.get(E);if(K.color.copy(E.color).multiplyScalar(E.intensity),K.distance=E.distance,K.decay=E.decay,E.castShadow){const ee=E.shadow,z=n.get(E);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=E.shadow.matrix,g++}i.point[_]=K,_++}else if(E.isHemisphereLight){const K=e.get(E);K.skyColor.copy(E.color).multiplyScalar(W),K.groundColor.copy(E.groundColor).multiplyScalar(W),i.hemi[u]=K,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==y||L.rectAreaLength!==v||L.hemiLength!==u||L.numDirectionalShadows!==p||L.numPointShadows!==g||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,L.directionalLength=m,L.pointLength=_,L.spotLength=y,L.rectAreaLength=v,L.hemiLength=u,L.numDirectionalShadows=p,L.numPointShadows=g,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=T,i.version=Y2++)}function l(c,d){let h=0,f=0,m=0,_=0,y=0;const v=d.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),m++}else if(g.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(g.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(v),f++}else if(g.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function O0(t){const e=new K2(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Z2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new O0(t),e.set(r,[a])):s>=o.length?(a=new O0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Q2 extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J2 extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`;function tA(t,e,n){let i=new rp;const r=new ke,s=new ke,o=new ut,a=new Q2({depthPacking:YM}),l=new J2,c={},d=n.maxTextureSize,h={[Mr]:un,[un]:Mr,[Nn]:Nn},f=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:$2,fragmentShader:eA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Je(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wx;let u=this.type;this.render=function(w,T,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const B=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(qt),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=u!==Ui&&this.type===Ui,Z=u===Ui&&this.type!==Ui;for(let ne=0,K=w.length;ne<K;ne++){const ee=w[ne],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ie=z.getFrameExtents();if(r.multiply(ie),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||W===!0||Z===!0){const le=this.type!==Ui?{minFilter:Gt,magFilter:Gt}:{};z.map!==null&&z.map.dispose(),z.map=new Qn(r.x,r.y,le),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const Q=z.getViewportCount();for(let le=0;le<Q;le++){const we=z.getViewport(le);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),V.viewport(o),z.updateMatrices(ee,le),i=z.getFrustum(),M(T,L,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&p(z,L),z.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(B,S,E)};function p(w,T){const L=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,L,f,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,L,m,y,null)}function g(w,T,L,B){let S=null;const E=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=S.uuid,W=T.uuid;let Z=c[V];Z===void 0&&(Z={},c[V]=Z);let ne=Z[W];ne===void 0&&(ne=S.clone(),Z[W]=ne,T.addEventListener("dispose",C)),S=ne}if(S.visible=T.visible,S.wireframe=T.wireframe,B===Ui?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=L}return S}function M(w,T,L,B,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const W=e.update(w),Z=w.material;if(Array.isArray(Z)){const ne=W.groups;for(let K=0,ee=ne.length;K<ee;K++){const z=ne[K],ie=Z[z.materialIndex];if(ie&&ie.visible){const Q=g(w,ie,B,S);w.onBeforeShadow(t,w,T,L,W,Q,z),t.renderBufferDirect(L,null,W,Q,w,z),w.onAfterShadow(t,w,T,L,W,Q,z)}}}else if(Z.visible){const ne=g(w,Z,B,S);w.onBeforeShadow(t,w,T,L,W,ne,null),t.renderBufferDirect(L,null,W,ne,w,null),w.onAfterShadow(t,w,T,L,W,ne,null)}}const V=w.children;for(let W=0,Z=V.length;W<Z;W++)M(V[W],T,L,B,S)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const B=c[L],S=w.target.uuid;S in B&&(B[S].dispose(),delete B[S])}}}const nA={[uh]:dh,[hh]:mh,[fh]:gh,[uo]:ph,[dh]:uh,[mh]:hh,[gh]:fh,[ph]:uo};function iA(t){function e(){let H=!1;const ge=new ut;let oe=null;const ae=new ut(0,0,0,0);return{setMask:function(Te){oe!==Te&&!H&&(t.colorMask(Te,Te,Te,Te),oe=Te)},setLocked:function(Te){H=Te},setClear:function(Te,be,et,Lt,pn){pn===!0&&(Te*=Lt,be*=Lt,et*=Lt),ge.set(Te,be,et,Lt),ae.equals(ge)===!1&&(t.clearColor(Te,be,et,Lt),ae.copy(ge))},reset:function(){H=!1,oe=null,ae.set(-1,0,0,0)}}}function n(){let H=!1,ge=!1,oe=null,ae=null,Te=null;return{setReversed:function(be){ge=be},setTest:function(be){be?me(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(be){oe!==be&&!H&&(t.depthMask(be),oe=be)},setFunc:function(be){if(ge&&(be=nA[be]),ae!==be){switch(be){case uh:t.depthFunc(t.NEVER);break;case dh:t.depthFunc(t.ALWAYS);break;case hh:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case fh:t.depthFunc(t.EQUAL);break;case ph:t.depthFunc(t.GEQUAL);break;case mh:t.depthFunc(t.GREATER);break;case gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=be}},setLocked:function(be){H=be},setClear:function(be){Te!==be&&(t.clearDepth(be),Te=be)},reset:function(){H=!1,oe=null,ae=null,Te=null}}}function i(){let H=!1,ge=null,oe=null,ae=null,Te=null,be=null,et=null,Lt=null,pn=null;return{setTest:function(nt){H||(nt?me(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!H&&(t.stencilMask(nt),ge=nt)},setFunc:function(nt,mn,Ci){(oe!==nt||ae!==mn||Te!==Ci)&&(t.stencilFunc(nt,mn,Ci),oe=nt,ae=mn,Te=Ci)},setOp:function(nt,mn,Ci){(be!==nt||et!==mn||Lt!==Ci)&&(t.stencilOp(nt,mn,Ci),be=nt,et=mn,Lt=Ci)},setLocked:function(nt){H=nt},setClear:function(nt){pn!==nt&&(t.clearStencil(nt),pn=nt)},reset:function(){H=!1,ge=null,oe=null,ae=null,Te=null,be=null,et=null,Lt=null,pn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,_=!1,y=null,v=null,u=null,p=null,g=null,M=null,C=null,w=new Ve(0,0,0),T=0,L=!1,B=null,S=null,E=null,V=null,W=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ne=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ne=K>=2);let z=null,ie={};const Q=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),we=new ut().fromArray(Q),ye=new ut().fromArray(le);function J(H,ge,oe,ae){const Te=new Uint8Array(4),be=t.createTexture();t.bindTexture(H,be),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<oe;et++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ge+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return be}const re={};re[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(t.DEPTH_TEST),s.setFunc(uo),pe(!1),ce(jm),me(t.CULL_FACE),F(qt);function me(H){c[H]!==!0&&(t.enable(H),c[H]=!0)}function ve(H){c[H]!==!1&&(t.disable(H),c[H]=!1)}function Ue(H,ge){return d[H]!==ge?(t.bindFramebuffer(H,ge),d[H]=ge,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ge),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(H,ge){let oe=f,ae=!1;if(H){oe=h.get(ge),oe===void 0&&(oe=[],h.set(ge,oe));const Te=H.textures;if(oe.length!==Te.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let be=0,et=Te.length;be<et;be++)oe[be]=t.COLOR_ATTACHMENT0+be;oe.length=Te.length,ae=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,ae=!0);ae&&t.drawBuffers(oe)}function Be(H){return m!==H?(t.useProgram(H),m=H,!0):!1}const je={[ci]:t.FUNC_ADD,[CM]:t.FUNC_SUBTRACT,[RM]:t.FUNC_REVERSE_SUBTRACT};je[PM]=t.MIN,je[LM]=t.MAX;const He={[Go]:t.ZERO,[DM]:t.ONE,[NM]:t.SRC_COLOR,[oh]:t.SRC_ALPHA,[zM]:t.SRC_ALPHA_SATURATE,[ch]:t.DST_COLOR,[lh]:t.DST_ALPHA,[IM]:t.ONE_MINUS_SRC_COLOR,[ah]:t.ONE_MINUS_SRC_ALPHA,[OM]:t.ONE_MINUS_DST_COLOR,[UM]:t.ONE_MINUS_DST_ALPHA,[kM]:t.CONSTANT_COLOR,[FM]:t.ONE_MINUS_CONSTANT_COLOR,[BM]:t.CONSTANT_ALPHA,[HM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(H,ge,oe,ae,Te,be,et,Lt,pn,nt){if(H===qt){_===!0&&(ve(t.BLEND),_=!1);return}if(_===!1&&(me(t.BLEND),_=!0),H!==Tx){if(H!==y||nt!==L){if((v!==ci||g!==ci)&&(t.blendEquation(t.FUNC_ADD),v=ci,g=ci),nt)switch(H){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xm:t.blendFunc(t.ONE,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}u=null,p=null,M=null,C=null,w.set(0,0,0),T=0,y=H,L=nt}return}Te=Te||ge,be=be||oe,et=et||ae,(ge!==v||Te!==g)&&(t.blendEquationSeparate(je[ge],je[Te]),v=ge,g=Te),(oe!==u||ae!==p||be!==M||et!==C)&&(t.blendFuncSeparate(He[oe],He[ae],He[be],He[et]),u=oe,p=ae,M=be,C=et),(Lt.equals(w)===!1||pn!==T)&&(t.blendColor(Lt.r,Lt.g,Lt.b,pn),w.copy(Lt),T=pn),y=H,L=!1}function pt(H,ge){H.side===Nn?ve(t.CULL_FACE):me(t.CULL_FACE);let oe=H.side===un;ge&&(oe=!oe),pe(oe),H.blending===eo&&H.transparent===!1?F(qt):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),r.setMask(H.colorWrite);const ae=H.stencilWrite;o.setTest(ae),ae&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),qe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function pe(H){B!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),B=H)}function ce(H){H!==AM?(me(t.CULL_FACE),H!==S&&(H===jm?t.cullFace(t.BACK):H===bM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),S=H}function Se(H){H!==E&&(ne&&t.lineWidth(H),E=H)}function qe(H,ge,oe){H?(me(t.POLYGON_OFFSET_FILL),(V!==ge||W!==oe)&&(t.polygonOffset(ge,oe),V=ge,W=oe)):ve(t.POLYGON_OFFSET_FILL)}function Oe(H){H?me(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function N(H){H===void 0&&(H=t.TEXTURE0+Z-1),z!==H&&(t.activeTexture(H),z=H)}function A(H,ge,oe){oe===void 0&&(z===null?oe=t.TEXTURE0+Z-1:oe=z);let ae=ie[oe];ae===void 0&&(ae={type:void 0,texture:void 0},ie[oe]=ae),(ae.type!==H||ae.texture!==ge)&&(z!==oe&&(t.activeTexture(oe),z=oe),t.bindTexture(H,ge||re[H]),ae.type=H,ae.texture=ge)}function O(){const H=ie[z];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function I(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function P(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function D(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function U(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function X(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(H){we.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),we.copy(H))}function de(H){ye.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),ye.copy(H))}function Ne(H,ge){let oe=l.get(ge);oe===void 0&&(oe=new WeakMap,l.set(ge,oe));let ae=oe.get(H);ae===void 0&&(ae=t.getUniformBlockIndex(ge,H.name),oe.set(H,ae))}function Ee(H,ge){const ae=l.get(ge).get(H);a.get(ge)!==ae&&(t.uniformBlockBinding(ge,ae,H.__bindingPointIndex),a.set(ge,ae))}function xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,ie={},d={},h=new WeakMap,f=[],m=null,_=!1,y=null,v=null,u=null,p=null,g=null,M=null,C=null,w=new Ve(0,0,0),T=0,L=!1,B=null,S=null,E=null,V=null,W=null,we.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:ve,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:Be,setBlending:F,setMaterial:pt,setFlipSided:pe,setCullFace:ce,setLineWidth:Se,setPolygonOffset:qe,setScissorTest:Oe,activeTexture:N,bindTexture:A,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:I,texImage2D:$,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:Ee,texStorage2D:X,texStorage3D:G,texSubImage2D:P,texSubImage3D:D,compressedTexSubImage2D:k,compressedTexSubImage3D:U,scissor:fe,viewport:de,reset:xe}}function z0(t,e,n,i){const r=rA(i);switch(n){case Ox:return t*e;case kx:return t*e;case Fx:return t*e*2;case Bx:return t*e/r.components*r.byteLength;case Jf:return t*e/r.components*r.byteLength;case Hx:return t*e*2/r.components*r.byteLength;case $f:return t*e*2/r.components*r.byteLength;case zx:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case ep:return t*e*4/r.components*r.byteLength;case Ul:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:case wh:return Math.max(t,16)*Math.max(e,8)/4;case yh:case Mh:return Math.max(t,8)*Math.max(e,8)/2;case Eh:case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Hh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Vx:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wh:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rA(t){switch(t){case Ti:case Nx:return{byteLength:1,components:1};case _a:case Ix:case Ai:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case is:case Kf:case Hi:return{byteLength:4,components:1};case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function sA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,A){return m?new OffscreenCanvas(N,A):ya("canvas")}function y(N,A,O){let b=1;const I=Oe(N);if((I.width>O||I.height>O)&&(b=O/Math.max(I.width,I.height)),b<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const P=Math.floor(b*I.width),D=Math.floor(b*I.height);h===void 0&&(h=_(P,D));const k=A?_(P,D):h;return k.width=P,k.height=D,k.getContext("2d").drawImage(N,0,0,P,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+P+"x"+D+")."),k}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),N;return N}function v(N){return N.generateMipmaps&&N.minFilter!==Gt&&N.minFilter!==jn}function u(N){t.generateMipmap(N)}function p(N,A,O,b,I=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let P=A;if(A===t.RED&&(O===t.FLOAT&&(P=t.R32F),O===t.HALF_FLOAT&&(P=t.R16F),O===t.UNSIGNED_BYTE&&(P=t.R8)),A===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(P=t.R8UI),O===t.UNSIGNED_SHORT&&(P=t.R16UI),O===t.UNSIGNED_INT&&(P=t.R32UI),O===t.BYTE&&(P=t.R8I),O===t.SHORT&&(P=t.R16I),O===t.INT&&(P=t.R32I)),A===t.RG&&(O===t.FLOAT&&(P=t.RG32F),O===t.HALF_FLOAT&&(P=t.RG16F),O===t.UNSIGNED_BYTE&&(P=t.RG8)),A===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(P=t.RG8UI),O===t.UNSIGNED_SHORT&&(P=t.RG16UI),O===t.UNSIGNED_INT&&(P=t.RG32UI),O===t.BYTE&&(P=t.RG8I),O===t.SHORT&&(P=t.RG16I),O===t.INT&&(P=t.RG32I)),A===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(P=t.RGB8UI),O===t.UNSIGNED_SHORT&&(P=t.RGB16UI),O===t.UNSIGNED_INT&&(P=t.RGB32UI),O===t.BYTE&&(P=t.RGB8I),O===t.SHORT&&(P=t.RGB16I),O===t.INT&&(P=t.RGB32I)),A===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(P=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(P=t.RGBA16UI),O===t.UNSIGNED_INT&&(P=t.RGBA32UI),O===t.BYTE&&(P=t.RGBA8I),O===t.SHORT&&(P=t.RGBA16I),O===t.INT&&(P=t.RGBA32I)),A===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(P=t.RGB9_E5),A===t.RGBA){const D=I?pc:it.getTransfer(b);O===t.FLOAT&&(P=t.RGBA32F),O===t.HALF_FLOAT&&(P=t.RGBA16F),O===t.UNSIGNED_BYTE&&(P=D===ht?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(P=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(P=t.RGB5_A1)}return(P===t.R16F||P===t.R32F||P===t.RG16F||P===t.RG32F||P===t.RGBA16F||P===t.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function g(N,A){let O;return N?A===null||A===is||A===rs?O=t.DEPTH24_STENCIL8:A===Hi?O=t.DEPTH32F_STENCIL8:A===_a&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===is||A===rs?O=t.DEPTH_COMPONENT24:A===Hi?O=t.DEPTH_COMPONENT32F:A===_a&&(O=t.DEPTH_COMPONENT16),O}function M(N,A){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==Gt&&N.minFilter!==jn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function C(N){const A=N.target;A.removeEventListener("dispose",C),T(A),A.isVideoTexture&&d.delete(A)}function w(N){const A=N.target;A.removeEventListener("dispose",w),B(A)}function T(N){const A=i.get(N);if(A.__webglInit===void 0)return;const O=N.source,b=f.get(O);if(b){const I=b[A.__cacheKey];I.usedTimes--,I.usedTimes===0&&L(N),Object.keys(b).length===0&&f.delete(O)}i.remove(N)}function L(N){const A=i.get(N);t.deleteTexture(A.__webglTexture);const O=N.source,b=f.get(O);delete b[A.__cacheKey],o.memory.textures--}function B(N){const A=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(A.__webglFramebuffer[b]))for(let I=0;I<A.__webglFramebuffer[b].length;I++)t.deleteFramebuffer(A.__webglFramebuffer[b][I]);else t.deleteFramebuffer(A.__webglFramebuffer[b]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[b])}else{if(Array.isArray(A.__webglFramebuffer))for(let b=0;b<A.__webglFramebuffer.length;b++)t.deleteFramebuffer(A.__webglFramebuffer[b]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let b=0;b<A.__webglColorRenderbuffer.length;b++)A.__webglColorRenderbuffer[b]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[b]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const O=N.textures;for(let b=0,I=O.length;b<I;b++){const P=i.get(O[b]);P.__webglTexture&&(t.deleteTexture(P.__webglTexture),o.memory.textures--),i.remove(O[b])}i.remove(N)}let S=0;function E(){S=0}function V(){const N=S;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),S+=1,N}function W(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function Z(N,A){const O=i.get(N);if(N.isVideoTexture&&Se(N),N.isRenderTargetTexture===!1&&N.version>0&&O.__version!==N.version){const b=N.image;if(b===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,N,A);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+A)}function ne(N,A){const O=i.get(N);if(N.version>0&&O.__version!==N.version){ye(O,N,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+A)}function K(N,A){const O=i.get(N);if(N.version>0&&O.__version!==N.version){ye(O,N,A);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+A)}function ee(N,A){const O=i.get(N);if(N.version>0&&O.__version!==N.version){J(O,N,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+A)}const z={[Ei]:t.REPEAT,[qr]:t.CLAMP_TO_EDGE,[_h]:t.MIRRORED_REPEAT},ie={[Gt]:t.NEAREST,[jM]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[bu]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},Q={[KM]:t.NEVER,[t1]:t.ALWAYS,[ZM]:t.LESS,[Gx]:t.LEQUAL,[QM]:t.EQUAL,[e1]:t.GEQUAL,[JM]:t.GREATER,[$M]:t.NOTEQUAL};function le(N,A){if(A.type===Hi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===jn||A.magFilter===bu||A.magFilter===Ya||A.magFilter===Kr||A.minFilter===jn||A.minFilter===bu||A.minFilter===Ya||A.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,z[A.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,z[A.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,z[A.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ie[A.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ie[A.minFilter]),A.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Gt||A.minFilter!==Ya&&A.minFilter!==Kr||A.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function we(N,A){let O=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",C));const b=A.source;let I=f.get(b);I===void 0&&(I={},f.set(b,I));const P=W(A);if(P!==N.__cacheKey){I[P]===void 0&&(I[P]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),I[P].usedTimes++;const D=I[N.__cacheKey];D!==void 0&&(I[N.__cacheKey].usedTimes--,D.usedTimes===0&&L(A)),N.__cacheKey=P,N.__webglTexture=I[P].texture}return O}function ye(N,A,O){let b=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(b=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(b=t.TEXTURE_3D);const I=we(N,A),P=A.source;n.bindTexture(b,N.__webglTexture,t.TEXTURE0+O);const D=i.get(P);if(P.version!==D.__version||I===!0){n.activeTexture(t.TEXTURE0+O);const k=it.getPrimaries(it.workingColorSpace),U=A.colorSpace===lr?null:it.getPrimaries(A.colorSpace),X=A.colorSpace===lr||k===U?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let G=y(A.image,!1,r.maxTextureSize);G=qe(A,G);const $=s.convert(A.format,A.colorSpace),ue=s.convert(A.type);let fe=p(A.internalFormat,$,ue,A.colorSpace,A.isVideoTexture);le(b,A);let de;const Ne=A.mipmaps,Ee=A.isVideoTexture!==!0,xe=D.__version===void 0||I===!0,H=P.dataReady,ge=M(A,G);if(A.isDepthTexture)fe=g(A.format===ss,A.type),xe&&(Ee?n.texStorage2D(t.TEXTURE_2D,1,fe,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,fe,G.width,G.height,0,$,ue,null));else if(A.isDataTexture)if(Ne.length>0){Ee&&xe&&n.texStorage2D(t.TEXTURE_2D,ge,fe,Ne[0].width,Ne[0].height);for(let oe=0,ae=Ne.length;oe<ae;oe++)de=Ne[oe],Ee?H&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,de.width,de.height,$,ue,de.data):n.texImage2D(t.TEXTURE_2D,oe,fe,de.width,de.height,0,$,ue,de.data);A.generateMipmaps=!1}else Ee?(xe&&n.texStorage2D(t.TEXTURE_2D,ge,fe,G.width,G.height),H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,$,ue,G.data)):n.texImage2D(t.TEXTURE_2D,0,fe,G.width,G.height,0,$,ue,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ee&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,fe,Ne[0].width,Ne[0].height,G.depth);for(let oe=0,ae=Ne.length;oe<ae;oe++)if(de=Ne[oe],A.format!==Yn)if($!==null)if(Ee){if(H)if(A.layerUpdates.size>0){const Te=z0(de.width,de.height,A.format,A.type);for(const be of A.layerUpdates){const et=de.data.subarray(be*Te/de.data.BYTES_PER_ELEMENT,(be+1)*Te/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,be,de.width,de.height,1,$,et,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,de.width,de.height,G.depth,$,de.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,fe,de.width,de.height,G.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?H&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,de.width,de.height,G.depth,$,ue,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,fe,de.width,de.height,G.depth,0,$,ue,de.data)}else{Ee&&xe&&n.texStorage2D(t.TEXTURE_2D,ge,fe,Ne[0].width,Ne[0].height);for(let oe=0,ae=Ne.length;oe<ae;oe++)de=Ne[oe],A.format!==Yn?$!==null?Ee?H&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,de.width,de.height,$,de.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,fe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?H&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,de.width,de.height,$,ue,de.data):n.texImage2D(t.TEXTURE_2D,oe,fe,de.width,de.height,0,$,ue,de.data)}else if(A.isDataArrayTexture)if(Ee){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,fe,G.width,G.height,G.depth),H)if(A.layerUpdates.size>0){const oe=z0(G.width,G.height,A.format,A.type);for(const ae of A.layerUpdates){const Te=G.data.subarray(ae*oe/G.data.BYTES_PER_ELEMENT,(ae+1)*oe/G.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,G.width,G.height,1,$,ue,Te)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,$,ue,G.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,G.width,G.height,G.depth,0,$,ue,G.data);else if(A.isData3DTexture)Ee?(xe&&n.texStorage3D(t.TEXTURE_3D,ge,fe,G.width,G.height,G.depth),H&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,$,ue,G.data)):n.texImage3D(t.TEXTURE_3D,0,fe,G.width,G.height,G.depth,0,$,ue,G.data);else if(A.isFramebufferTexture){if(xe)if(Ee)n.texStorage2D(t.TEXTURE_2D,ge,fe,G.width,G.height);else{let oe=G.width,ae=G.height;for(let Te=0;Te<ge;Te++)n.texImage2D(t.TEXTURE_2D,Te,fe,oe,ae,0,$,ue,null),oe>>=1,ae>>=1}}else if(Ne.length>0){if(Ee&&xe){const oe=Oe(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ge,fe,oe.width,oe.height)}for(let oe=0,ae=Ne.length;oe<ae;oe++)de=Ne[oe],Ee?H&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,$,ue,de):n.texImage2D(t.TEXTURE_2D,oe,fe,$,ue,de);A.generateMipmaps=!1}else if(Ee){if(xe){const oe=Oe(G);n.texStorage2D(t.TEXTURE_2D,ge,fe,oe.width,oe.height)}H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,$,ue,G)}else n.texImage2D(t.TEXTURE_2D,0,fe,$,ue,G);v(A)&&u(b),D.__version=P.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function J(N,A,O){if(A.image.length!==6)return;const b=we(N,A),I=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+O);const P=i.get(I);if(I.version!==P.__version||b===!0){n.activeTexture(t.TEXTURE0+O);const D=it.getPrimaries(it.workingColorSpace),k=A.colorSpace===lr?null:it.getPrimaries(A.colorSpace),U=A.colorSpace===lr||D===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const X=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,$=[];for(let ae=0;ae<6;ae++)!X&&!G?$[ae]=y(A.image[ae],!0,r.maxCubemapSize):$[ae]=G?A.image[ae].image:A.image[ae],$[ae]=qe(A,$[ae]);const ue=$[0],fe=s.convert(A.format,A.colorSpace),de=s.convert(A.type),Ne=p(A.internalFormat,fe,de,A.colorSpace),Ee=A.isVideoTexture!==!0,xe=P.__version===void 0||b===!0,H=I.dataReady;let ge=M(A,ue);le(t.TEXTURE_CUBE_MAP,A);let oe;if(X){Ee&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ne,ue.width,ue.height);for(let ae=0;ae<6;ae++){oe=$[ae].mipmaps;for(let Te=0;Te<oe.length;Te++){const be=oe[Te];A.format!==Yn?fe!==null?Ee?H&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,be.width,be.height,fe,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,Ne,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,be.width,be.height,fe,de,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,Ne,be.width,be.height,0,fe,de,be.data)}}}else{if(oe=A.mipmaps,Ee&&xe){oe.length>0&&ge++;const ae=Oe($[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ne,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(G){Ee?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,$[ae].width,$[ae].height,fe,de,$[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ne,$[ae].width,$[ae].height,0,fe,de,$[ae].data);for(let Te=0;Te<oe.length;Te++){const et=oe[Te].image[ae].image;Ee?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,et.width,et.height,fe,de,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,Ne,et.width,et.height,0,fe,de,et.data)}}else{Ee?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,fe,de,$[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ne,fe,de,$[ae]);for(let Te=0;Te<oe.length;Te++){const be=oe[Te];Ee?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,fe,de,be.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,Ne,fe,de,be.image[ae])}}}v(A)&&u(t.TEXTURE_CUBE_MAP),P.__version=I.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function re(N,A,O,b,I,P){const D=s.convert(O.format,O.colorSpace),k=s.convert(O.type),U=p(O.internalFormat,D,k,O.colorSpace);if(!i.get(A).__hasExternalTextures){const G=Math.max(1,A.width>>P),$=Math.max(1,A.height>>P);I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?n.texImage3D(I,P,U,G,$,A.depth,0,D,k,null):n.texImage2D(I,P,U,G,$,0,D,k,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,b,I,i.get(O).__webglTexture,0,pe(A)):(I===t.TEXTURE_2D||I>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,b,I,i.get(O).__webglTexture,P),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(N,A,O){if(t.bindRenderbuffer(t.RENDERBUFFER,N),A.depthBuffer){const b=A.depthTexture,I=b&&b.isDepthTexture?b.type:null,P=g(A.stencilBuffer,I),D=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=pe(A);ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,P,A.width,A.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,P,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,P,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,D,t.RENDERBUFFER,N)}else{const b=A.textures;for(let I=0;I<b.length;I++){const P=b[I],D=s.convert(P.format,P.colorSpace),k=s.convert(P.type),U=p(P.internalFormat,D,k,P.colorSpace),X=pe(A);O&&ce(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,X,U,A.width,A.height):ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X,U,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,U,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z(A.depthTexture,0);const b=i.get(A.depthTexture).__webglTexture,I=pe(A);if(A.depthTexture.format===to)ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,b,0,I):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,b,0);else if(A.depthTexture.format===ss)ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,b,0,I):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,b,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const A=i.get(N),O=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const b=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),b){const I=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,b.removeEventListener("dispose",I)};b.addEventListener("dispose",I),A.__depthDisposeCallback=I}A.__boundDepthTexture=b}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ve(A.__webglFramebuffer,N)}else if(O){A.__webglDepthbuffer=[];for(let b=0;b<6;b++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[b]),A.__webglDepthbuffer[b]===void 0)A.__webglDepthbuffer[b]=t.createRenderbuffer(),me(A.__webglDepthbuffer[b],N,!1);else{const I=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,P=A.__webglDepthbuffer[b];t.bindRenderbuffer(t.RENDERBUFFER,P),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,P)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),me(A.__webglDepthbuffer,N,!1);else{const b=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,I=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,I),t.framebufferRenderbuffer(t.FRAMEBUFFER,b,t.RENDERBUFFER,I)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(N,A,O){const b=i.get(N);A!==void 0&&re(b.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ue(N)}function Be(N){const A=N.texture,O=i.get(N),b=i.get(A);N.addEventListener("dispose",w);const I=N.textures,P=N.isWebGLCubeRenderTarget===!0,D=I.length>1;if(D||(b.__webglTexture===void 0&&(b.__webglTexture=t.createTexture()),b.__version=A.version,o.memory.textures++),P){O.__webglFramebuffer=[];for(let k=0;k<6;k++)if(A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer[k]=[];for(let U=0;U<A.mipmaps.length;U++)O.__webglFramebuffer[k][U]=t.createFramebuffer()}else O.__webglFramebuffer[k]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer=[];for(let k=0;k<A.mipmaps.length;k++)O.__webglFramebuffer[k]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(D)for(let k=0,U=I.length;k<U;k++){const X=i.get(I[k]);X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&ce(N)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let k=0;k<I.length;k++){const U=I[k];O.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[k]);const X=s.convert(U.format,U.colorSpace),G=s.convert(U.type),$=p(U.internalFormat,X,G,U.colorSpace,N.isXRRenderTarget===!0),ue=pe(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,$,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,O.__webglColorRenderbuffer[k])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),me(O.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(P){n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture),le(t.TEXTURE_CUBE_MAP,A);for(let k=0;k<6;k++)if(A.mipmaps&&A.mipmaps.length>0)for(let U=0;U<A.mipmaps.length;U++)re(O.__webglFramebuffer[k][U],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,U);else re(O.__webglFramebuffer[k],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);v(A)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(D){for(let k=0,U=I.length;k<U;k++){const X=I[k],G=i.get(X);n.bindTexture(t.TEXTURE_2D,G.__webglTexture),le(t.TEXTURE_2D,X),re(O.__webglFramebuffer,N,X,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,0),v(X)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let k=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(k=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(k,b.__webglTexture),le(k,A),A.mipmaps&&A.mipmaps.length>0)for(let U=0;U<A.mipmaps.length;U++)re(O.__webglFramebuffer[U],N,A,t.COLOR_ATTACHMENT0,k,U);else re(O.__webglFramebuffer,N,A,t.COLOR_ATTACHMENT0,k,0);v(A)&&u(k),n.unbindTexture()}N.depthBuffer&&Ue(N)}function je(N){const A=N.textures;for(let O=0,b=A.length;O<b;O++){const I=A[O];if(v(I)){const P=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,D=i.get(I).__webglTexture;n.bindTexture(P,D),u(P),n.unbindTexture()}}}const He=[],F=[];function pt(N){if(N.samples>0){if(ce(N)===!1){const A=N.textures,O=N.width,b=N.height;let I=t.COLOR_BUFFER_BIT;const P=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=i.get(N),k=A.length>1;if(k)for(let U=0;U<A.length;U++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let U=0;U<A.length;U++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(I|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(I|=t.STENCIL_BUFFER_BIT)),k){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,D.__webglColorRenderbuffer[U]);const X=i.get(A[U]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,X,0)}t.blitFramebuffer(0,0,O,b,0,0,O,b,I,t.NEAREST),l===!0&&(He.length=0,F.length=0,He.push(t.COLOR_ATTACHMENT0+U),N.depthBuffer&&N.resolveDepthBuffer===!1&&(He.push(P),F.push(P),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),k)for(let U=0;U<A.length;U++){n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,D.__webglColorRenderbuffer[U]);const X=i.get(A[U]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.TEXTURE_2D,X,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const A=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function pe(N){return Math.min(r.maxSamples,N.samples)}function ce(N){const A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Se(N){const A=o.render.frame;d.get(N)!==A&&(d.set(N,A),N.update())}function qe(N,A){const O=N.colorSpace,b=N.format,I=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||O!==Ar&&O!==lr&&(it.getTransfer(O)===ht?(b!==Yn||I!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),A}function Oe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=ee,this.rebindTextures=Pe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ce}function oA(t,e){function n(i,r=lr){let s;const o=it.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===Zf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ux)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Nx)return t.BYTE;if(i===Ix)return t.SHORT;if(i===_a)return t.UNSIGNED_SHORT;if(i===Kf)return t.INT;if(i===is)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===Ox)return t.ALPHA;if(i===zx)return t.RGB;if(i===Yn)return t.RGBA;if(i===kx)return t.LUMINANCE;if(i===Fx)return t.LUMINANCE_ALPHA;if(i===to)return t.DEPTH_COMPONENT;if(i===ss)return t.DEPTH_STENCIL;if(i===Bx)return t.RED;if(i===Jf)return t.RED_INTEGER;if(i===Hx)return t.RG;if(i===$f)return t.RG_INTEGER;if(i===ep)return t.RGBA_INTEGER;if(i===Ul||i===Ol||i===zl||i===kl)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yh||i===Sh||i===Mh||i===wh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eh||i===Th||i===Ah)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Eh||i===Th)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ah)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bh||i===Ch||i===Rh||i===Ph||i===Lh||i===Dh||i===Nh||i===Ih||i===Uh||i===Oh||i===zh||i===kh||i===Fh||i===Bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ch)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ph)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ih)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Hh||i===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fl)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vx||i===Gh||i===Wh||i===jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class aA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hi extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lA={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const cA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uA=`
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

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ot({vertexShader:cA,fragmentShader:uA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Je(new as(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hA extends ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const y=new dA,v=n.getContextAttributes();let u=null,p=null;const g=[],M=[],C=new ke;let w=null;const T=new Dn;T.layers.enable(1),T.viewport=new ut;const L=new Dn;L.layers.enable(2),L.viewport=new ut;const B=[T,L],S=new aA;S.layers.enable(1),S.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=g[J];return re===void 0&&(re=new nd,g[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=g[J];return re===void 0&&(re=new nd,g[J]=re),re.getGripSpace()},this.getHand=function(J){let re=g[J];return re===void 0&&(re=new nd,g[J]=re),re.getHandSpace()};function W(J){const re=M.indexOf(J.inputSource);if(re===-1)return;const me=g[re];me!==void 0&&(me.update(J.inputSource,J.frame,c||o),me.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ne);for(let J=0;J<g.length;J++){const re=M[J];re!==null&&(M[J]=null,g[J].disconnect(re))}E=null,V=null,y.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,p=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Qn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let re=null,me=null,ve=null;v.depth&&(ve=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=v.stencil?ss:to,me=v.stencil?rs:is);const Ue={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Qn(f.textureWidth,f.textureHeight,{format:Yn,type:Ti,depthTexture:new ap(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(J){for(let re=0;re<J.removed.length;re++){const me=J.removed[re],ve=M.indexOf(me);ve>=0&&(M[ve]=null,g[ve].disconnect(me))}for(let re=0;re<J.added.length;re++){const me=J.added[re];let ve=M.indexOf(me);if(ve===-1){for(let Pe=0;Pe<g.length;Pe++)if(Pe>=M.length){M.push(me),ve=Pe;break}else if(M[Pe]===null){M[Pe]=me,ve=Pe;break}if(ve===-1)break}const Ue=g[ve];Ue&&Ue.connect(me)}}const K=new j,ee=new j;function z(J,re,me){K.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const ve=K.distanceTo(ee),Ue=re.projectionMatrix.elements,Pe=me.projectionMatrix.elements,Be=Ue[14]/(Ue[10]-1),je=Ue[14]/(Ue[10]+1),He=(Ue[9]+1)/Ue[5],F=(Ue[9]-1)/Ue[5],pt=(Ue[8]-1)/Ue[0],pe=(Pe[8]+1)/Pe[0],ce=Be*pt,Se=Be*pe,qe=ve/(-pt+pe),Oe=qe*-pt;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Oe),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ue[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const N=Be+qe,A=je+qe,O=ce-Oe,b=Se+(ve-Oe),I=He*je/A*N,P=F*je/A*N;J.projectionMatrix.makePerspective(O,b,I,P,N,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let re=J.near,me=J.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(me=y.depthFar)),S.near=L.near=T.near=re,S.far=L.far=T.far=me,(E!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,V=S.far);const ve=J.parent,Ue=S.cameras;ie(S,ve);for(let Pe=0;Pe<Ue.length;Pe++)ie(Ue[Pe],ve);Ue.length===2?z(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),Q(J,S,ve)};function Q(J,re,me){me===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(me.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let le=null;function we(J,re){if(d=re.getViewerPose(c||o),_=re,d!==null){const me=d.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ve=!1;me.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let Pe=0;Pe<me.length;Pe++){const Be=me[Pe];let je=null;if(m!==null)je=m.getViewport(Be);else{const F=h.getViewSubImage(f,Be);je=F.viewport,Pe===0&&(e.setRenderTargetTextures(p,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(p))}let He=B[Pe];He===void 0&&(He=new Dn,He.layers.enable(Pe),He.viewport=new ut,B[Pe]=He),He.matrix.fromArray(Be.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Be.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(He)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Pe=h.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,r.renderState)}}for(let me=0;me<g.length;me++){const ve=M[me],Ue=g[me];ve!==null&&Ue!==void 0&&Ue.update(ve,re,c||o)}le&&le(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const ye=new $x;ye.setAnimationLoop(we),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}}const Ur=new bi,fA=new rt;function pA(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,Zx(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,p,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),h(v,u)):u.isMeshPhongMaterial?(s(v,u),d(v,u)):u.isMeshStandardMaterial?(s(v,u),f(v,u),u.isMeshPhysicalMaterial&&m(v,u,M)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),y(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,p,g):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===un&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===un&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const p=e.get(u),g=p.envMap,M=p.envMapRotation;g&&(v.envMap.value=g,Ur.copy(M),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),v.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Ur)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,p,g){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*p,v.scale.value=g*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function d(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function h(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function f(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function m(v,u,p){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=p.texture,v.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){const p=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(p.matrixWorld),v.nearDistance.value=p.shadow.camera.near,v.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,g){const M=g.program;i.uniformBlockBinding(p,M)}function c(p,g){let M=r[p.id];M===void 0&&(_(p),M=d(p),r[p.id]=M,p.addEventListener("dispose",v));const C=g.program;i.updateUBOMapping(p,C);const w=e.render.frame;s[p.id]!==w&&(f(p),s[p.id]=w)}function d(p){const g=h();p.__bindingPointIndex=g;const M=t.createBuffer(),C=p.__size,w=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(p){const g=r[p.id],M=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,T=M.length;w<T;w++){const L=Array.isArray(M[w])?M[w]:[M[w]];for(let B=0,S=L.length;B<S;B++){const E=L[B];if(m(E,w,B,C)===!0){const V=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let ne=0;ne<W.length;ne++){const K=W[ne],ee=y(K);typeof K=="number"||typeof K=="boolean"?(E.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,V+Z,E.__data)):K.isMatrix3?(E.__data[0]=K.elements[0],E.__data[1]=K.elements[1],E.__data[2]=K.elements[2],E.__data[3]=0,E.__data[4]=K.elements[3],E.__data[5]=K.elements[4],E.__data[6]=K.elements[5],E.__data[7]=0,E.__data[8]=K.elements[6],E.__data[9]=K.elements[7],E.__data[10]=K.elements[8],E.__data[11]=0):(K.toArray(E.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,g,M,C){const w=p.value,T=g+"_"+M;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const L=C[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(p){const g=p.uniforms;let M=0;const C=16;for(let T=0,L=g.length;T<L;T++){const B=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,E=B.length;S<E;S++){const V=B[S],W=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,ne=W.length;Z<ne;Z++){const K=W[Z],ee=y(K),z=M%C,ie=z%ee.boundary,Q=z+ie;M+=ie,Q!==0&&C-Q<ee.storage&&(M+=C-Q),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=ee.storage}}}const w=M%C;return w>0&&(M+=C-w),p.__size=M,p.__cache={},this}function y(p){const g={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(g.boundary=4,g.storage=4):p.isVector2?(g.boundary=8,g.storage=8):p.isVector3||p.isColor?(g.boundary=16,g.storage=12):p.isVector4?(g.boundary=16,g.storage=16):p.isMatrix3?(g.boundary=48,g.storage=48):p.isMatrix4?(g.boundary=64,g.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),g}function v(p){const g=p.target;g.removeEventListener("dispose",v);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class gA{constructor(e={}){const{canvas:n=r1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,v=null;const u=[],p=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=_r,this.toneMappingExposure=1;const g=this;let M=!1,C=0,w=0,T=null,L=-1,B=null;const S=new ut,E=new ut;let V=null;const W=new Ve(0);let Z=0,ne=n.width,K=n.height,ee=1,z=null,ie=null;const Q=new ut(0,0,ne,K),le=new ut(0,0,ne,K);let we=!1;const ye=new rp;let J=!1,re=!1;const me=new rt,ve=new rt,Ue=new j,Pe=new ut,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function He(){return T===null?ee:1}let F=i;function pt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",be,!1),F===null){const Y="webgl2";if(F=pt(Y,R),F===null)throw pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pe,ce,Se,qe,Oe,N,A,O,b,I,P,D,k,U,X,G,$,ue,fe,de,Ne,Ee,xe,H;function ge(){pe=new ST(F),pe.init(),Ee=new oA(F,pe),ce=new mT(F,pe,e,Ee),Se=new iA(F),ce.reverseDepthBuffer&&Se.buffers.depth.setReversed(!0),qe=new ET(F),Oe=new V2,N=new sA(F,pe,Se,Oe,ce,Ee,qe),A=new vT(g),O=new yT(g),b=new L1(F),xe=new fT(F,b),I=new MT(F,b,qe,xe),P=new AT(F,I,b,qe),fe=new TT(F,ce,N),G=new gT(Oe),D=new H2(g,A,O,pe,ce,xe,G),k=new pA(g,Oe),U=new W2,X=new Z2(pe),ue=new hT(g,A,O,Se,P,f,l),$=new tA(g,P,ce),H=new mA(F,qe,ce,Se),de=new pT(F,pe,qe),Ne=new wT(F,pe,qe),qe.programs=D.programs,g.capabilities=ce,g.extensions=pe,g.properties=Oe,g.renderLists=U,g.shadowMap=$,g.state=Se,g.info=qe}ge();const oe=new hA(g,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=pe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(ne,K,!1))},this.getSize=function(R){return R.set(ne,K)},this.setSize=function(R,Y,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,K=Y,n.width=Math.floor(R*ee),n.height=Math.floor(Y*ee),te===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(ne*ee,K*ee).floor()},this.setDrawingBufferSize=function(R,Y,te){ne=R,K=Y,ee=te,n.width=Math.floor(R*te),n.height=Math.floor(Y*te),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,Y,te,se){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,Y,te,se),Se.viewport(S.copy(Q).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,Y,te,se){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,Y,te,se),Se.scissor(E.copy(le).multiplyScalar(ee).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){Se.setScissorTest(we=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(R=!0,Y=!0,te=!0){let se=0;if(R){let q=!1;if(T!==null){const _e=T.texture.format;q=_e===ep||_e===$f||_e===Jf}if(q){const _e=T.texture.type,Ae=_e===Ti||_e===is||_e===_a||_e===rs||_e===Zf||_e===Qf,De=ue.getClearColor(),Ie=ue.getClearAlpha(),Ge=De.r,We=De.g,ze=De.b;Ae?(m[0]=Ge,m[1]=We,m[2]=ze,m[3]=Ie,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Ge,_[1]=We,_[2]=ze,_[3]=Ie,F.clearBufferiv(F.COLOR,0,_))}else se|=F.COLOR_BUFFER_BIT}Y&&(se|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),te&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",be,!1),U.dispose(),X.dispose(),Oe.dispose(),A.dispose(),O.dispose(),P.dispose(),xe.dispose(),H.dispose(),D.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",xp),oe.removeEventListener("sessionend",_p),br.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=qe.autoReset,Y=$.enabled,te=$.autoUpdate,se=$.needsUpdate,q=$.type;ge(),qe.autoReset=R,$.enabled=Y,$.autoUpdate=te,$.needsUpdate=se,$.type=q}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function et(R){const Y=R.target;Y.removeEventListener("dispose",et),Lt(Y)}function Lt(R){pn(R),Oe.remove(R)}function pn(R){const Y=Oe.get(R).programs;Y!==void 0&&(Y.forEach(function(te){D.releaseProgram(te)}),R.isShaderMaterial&&D.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,te,se,q,_e){Y===null&&(Y=Be);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,De=h_(R,Y,te,se,q);Se.setMaterial(se,Ae);let Ie=te.index,Ge=1;if(se.wireframe===!0){if(Ie=I.getWireframeAttribute(te),Ie===void 0)return;Ge=2}const We=te.drawRange,ze=te.attributes.position;let at=We.start*Ge,mt=(We.start+We.count)*Ge;_e!==null&&(at=Math.max(at,_e.start*Ge),mt=Math.min(mt,(_e.start+_e.count)*Ge)),Ie!==null?(at=Math.max(at,0),mt=Math.min(mt,Ie.count)):ze!=null&&(at=Math.max(at,0),mt=Math.min(mt,ze.count));const Mt=mt-at;if(Mt<0||Mt===1/0)return;xe.setup(q,se,De,te,Ie);let An,st=de;if(Ie!==null&&(An=b.get(Ie),st=Ne,st.setIndex(An)),q.isMesh)se.wireframe===!0?(Se.setLineWidth(se.wireframeLinewidth*He()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(q.isLine){let Fe=se.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*He()),q.isLineSegments?st.setMode(F.LINES):q.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else q.isPoints?st.setMode(F.POINTS):q.isSprite&&st.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)st.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))st.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Fe=q._multiDrawStarts,Xt=q._multiDrawCounts,ot=q._multiDrawCount,Jn=Ie?b.get(Ie).bytesPerElement:1,ps=Oe.get(se).currentProgram.getUniforms();for(let bn=0;bn<ot;bn++)ps.setValue(F,"_gl_DrawID",bn),st.render(Fe[bn]/Jn,Xt[bn])}else if(q.isInstancedMesh)st.renderInstances(at,Mt,q.count);else if(te.isInstancedBufferGeometry){const Fe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xt=Math.min(te.instanceCount,Fe);st.renderInstances(at,Mt,Xt)}else st.render(at,Mt)};function nt(R,Y,te){R.transparent===!0&&R.side===Nn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,Ra(R,Y,te),R.side=Mr,R.needsUpdate=!0,Ra(R,Y,te),R.side=Nn):Ra(R,Y,te)}this.compile=function(R,Y,te=null){te===null&&(te=R),v=X.get(te),v.init(Y),p.push(v),te.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),R!==te&&R.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const se=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _e=q.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const De=_e[Ae];nt(De,te,q),se.add(De)}else nt(_e,te,q),se.add(_e)}),p.pop(),v=null,se},this.compileAsync=function(R,Y,te=null){const se=this.compile(R,Y,te);return new Promise(q=>{function _e(){if(se.forEach(function(Ae){Oe.get(Ae).currentProgram.isReady()&&se.delete(Ae)}),se.size===0){q(R);return}setTimeout(_e,10)}pe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mn=null;function Ci(R){mn&&mn(R)}function xp(){br.stop()}function _p(){br.start()}const br=new $x;br.setAnimationLoop(Ci),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(R){mn=R,oe.setAnimationLoop(R),R===null?br.stop():br.start()},oe.addEventListener("sessionstart",xp),oe.addEventListener("sessionend",_p),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Y),Y=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,Y,T),v=X.get(R,p.length),v.init(Y),p.push(v),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ye.setFromProjectionMatrix(ve),re=this.localClippingEnabled,J=G.init(this.clippingPlanes,re),y=U.get(R,u.length),y.init(),u.push(y),oe.enabled===!0&&oe.isPresenting===!0){const _e=g.xr.getDepthSensingMesh();_e!==null&&jc(_e,Y,-1/0,g.sortObjects)}jc(R,Y,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(z,ie),je=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,je&&ue.addToRenderList(y,R),this.info.render.frame++,J===!0&&G.beginShadows();const te=v.state.shadowsArray;$.render(te,R,Y),J===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,q=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const _e=Y.cameras;if(q.length>0)for(let Ae=0,De=_e.length;Ae<De;Ae++){const Ie=_e[Ae];Sp(se,q,R,Ie)}je&&ue.render(R);for(let Ae=0,De=_e.length;Ae<De;Ae++){const Ie=_e[Ae];yp(y,R,Ie,Ie.viewport)}}else q.length>0&&Sp(se,q,R,Y),je&&ue.render(R),yp(y,R,Y);T!==null&&(N.updateMultisampleRenderTarget(T),N.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(g,R,Y),xe.resetDefaultState(),L=-1,B=null,p.pop(),p.length>0?(v=p[p.length-1],J===!0&&G.setGlobalState(g.clippingPlanes,v.state.camera)):v=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function jc(R,Y,te,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ye.intersectsSprite(R)){se&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Ae=P.update(R),De=R.material;De.visible&&y.push(R,Ae,De,te,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ye.intersectsObject(R))){const Ae=P.update(R),De=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Pe.copy(Ae.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(De)){const Ie=Ae.groups;for(let Ge=0,We=Ie.length;Ge<We;Ge++){const ze=Ie[Ge],at=De[ze.materialIndex];at&&at.visible&&y.push(R,Ae,at,te,Pe.z,ze)}}else De.visible&&y.push(R,Ae,De,te,Pe.z,null)}}const _e=R.children;for(let Ae=0,De=_e.length;Ae<De;Ae++)jc(_e[Ae],Y,te,se)}function yp(R,Y,te,se){const q=R.opaque,_e=R.transmissive,Ae=R.transparent;v.setupLightsView(te),J===!0&&G.setGlobalState(g.clippingPlanes,te),se&&Se.viewport(S.copy(se)),q.length>0&&Ca(q,Y,te),_e.length>0&&Ca(_e,Y,te),Ae.length>0&&Ca(Ae,Y,te),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Sp(R,Y,te,se){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new Qn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Ai:Ti,minFilter:Kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const _e=v.state.transmissionRenderTarget[se.id],Ae=se.viewport||S;_e.setSize(Ae.z,Ae.w);const De=g.getRenderTarget();g.setRenderTarget(_e),g.getClearColor(W),Z=g.getClearAlpha(),Z<1&&g.setClearColor(16777215,.5),g.clear(),je&&ue.render(te);const Ie=g.toneMapping;g.toneMapping=_r;const Ge=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),J===!0&&G.setGlobalState(g.clippingPlanes,se),Ca(R,te,se),N.updateMultisampleRenderTarget(_e),N.updateRenderTargetMipmap(_e),pe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ze=0,at=Y.length;ze<at;ze++){const mt=Y[ze],Mt=mt.object,An=mt.geometry,st=mt.material,Fe=mt.group;if(st.side===Nn&&Mt.layers.test(se.layers)){const Xt=st.side;st.side=un,st.needsUpdate=!0,Mp(Mt,te,se,An,st,Fe),st.side=Xt,st.needsUpdate=!0,We=!0}}We===!0&&(N.updateMultisampleRenderTarget(_e),N.updateRenderTargetMipmap(_e))}g.setRenderTarget(De),g.setClearColor(W,Z),Ge!==void 0&&(se.viewport=Ge),g.toneMapping=Ie}function Ca(R,Y,te){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,_e=R.length;q<_e;q++){const Ae=R[q],De=Ae.object,Ie=Ae.geometry,Ge=se===null?Ae.material:se,We=Ae.group;De.layers.test(te.layers)&&Mp(De,Y,te,Ie,Ge,We)}}function Mp(R,Y,te,se,q,_e){R.onBeforeRender(g,Y,te,se,q,_e),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(g,Y,te,se,R,_e),q.transparent===!0&&q.side===Nn&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,g.renderBufferDirect(te,Y,se,q,R,_e),q.side=Mr,q.needsUpdate=!0,g.renderBufferDirect(te,Y,se,q,R,_e),q.side=Nn):g.renderBufferDirect(te,Y,se,q,R,_e),R.onAfterRender(g,Y,te,se,q,_e)}function Ra(R,Y,te){Y.isScene!==!0&&(Y=Be);const se=Oe.get(R),q=v.state.lights,_e=v.state.shadowsArray,Ae=q.state.version,De=D.getParameters(R,q.state,_e,Y,te),Ie=D.getProgramCacheKey(De);let Ge=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?O:A).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",et),Ge=new Map,se.programs=Ge);let We=Ge.get(Ie);if(We!==void 0){if(se.currentProgram===We&&se.lightsStateVersion===Ae)return Ep(R,De),We}else De.uniforms=D.getUniforms(R),R.onBeforeCompile(De,g),We=D.acquireProgram(De,Ie),Ge.set(Ie,We),se.uniforms=De.uniforms;const ze=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=G.uniform),Ep(R,De),se.needsLights=p_(R),se.lightsStateVersion=Ae,se.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=We,se.uniformsList=null,We}function wp(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Vl.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ep(R,Y){const te=Oe.get(R);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function h_(R,Y,te,se,q){Y.isScene!==!0&&(Y=Be),N.resetTextureUnits();const _e=Y.fog,Ae=se.isMeshStandardMaterial?Y.environment:null,De=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ar,Ie=(se.isMeshStandardMaterial?O:A).get(se.envMap||Ae),Ge=se.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,We=!!te.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!te.morphAttributes.position,at=!!te.morphAttributes.normal,mt=!!te.morphAttributes.color;let Mt=_r;se.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const An=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,st=An!==void 0?An.length:0,Fe=Oe.get(se),Xt=v.state.lights;if(J===!0&&(re===!0||R!==B)){const Bn=R===B&&se.id===L;G.setState(se,R,Bn)}let ot=!1;se.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Xt.state.version||Fe.outputColorSpace!==De||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==Ie||se.fog===!0&&Fe.fog!==_e||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==G.numPlanes||Fe.numIntersection!==G.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==We||Fe.morphTargets!==ze||Fe.morphNormals!==at||Fe.morphColors!==mt||Fe.toneMapping!==Mt||Fe.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Fe.__version=se.version);let Jn=Fe.currentProgram;ot===!0&&(Jn=Ra(se,Y,q));let ps=!1,bn=!1,Xc=!1;const bt=Jn.getUniforms(),Zi=Fe.uniforms;if(Se.useProgram(Jn.program)&&(ps=!0,bn=!0,Xc=!0),se.id!==L&&(L=se.id,bn=!0),ps||B!==R){ce.reverseDepthBuffer?(me.copy(R.projectionMatrix),o1(me),a1(me),bt.setValue(F,"projectionMatrix",me)):bt.setValue(F,"projectionMatrix",R.projectionMatrix),bt.setValue(F,"viewMatrix",R.matrixWorldInverse);const Bn=bt.map.cameraPosition;Bn!==void 0&&Bn.setValue(F,Ue.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&bt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&bt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,bn=!0,Xc=!0)}if(q.isSkinnedMesh){bt.setOptional(F,q,"bindMatrix"),bt.setOptional(F,q,"bindMatrixInverse");const Bn=q.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),bt.setValue(F,"boneTexture",Bn.boneTexture,N))}q.isBatchedMesh&&(bt.setOptional(F,q,"batchingTexture"),bt.setValue(F,"batchingTexture",q._matricesTexture,N),bt.setOptional(F,q,"batchingIdTexture"),bt.setValue(F,"batchingIdTexture",q._indirectTexture,N),bt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&bt.setValue(F,"batchingColorTexture",q._colorsTexture,N));const Yc=te.morphAttributes;if((Yc.position!==void 0||Yc.normal!==void 0||Yc.color!==void 0)&&fe.update(q,te,Jn),(bn||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,bt.setValue(F,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Zi.envMap.value=Ie,Zi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Zi.envMapIntensity.value=Y.environmentIntensity),bn&&(bt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Fe.needsLights&&f_(Zi,Xc),_e&&se.fog===!0&&k.refreshFogUniforms(Zi,_e),k.refreshMaterialUniforms(Zi,se,ee,K,v.state.transmissionRenderTarget[R.id]),Vl.upload(F,wp(Fe),Zi,N)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Vl.upload(F,wp(Fe),Zi,N),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&bt.setValue(F,"center",q.center),bt.setValue(F,"modelViewMatrix",q.modelViewMatrix),bt.setValue(F,"normalMatrix",q.normalMatrix),bt.setValue(F,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Bn=se.uniformsGroups;for(let qc=0,m_=Bn.length;qc<m_;qc++){const Tp=Bn[qc];H.update(Tp,Jn),H.bind(Tp,Jn)}}return Jn}function f_(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function p_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,Y,te){Oe.get(R.texture).__webglTexture=Y,Oe.get(R.depthTexture).__webglTexture=te;const se=Oe.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=te===void 0,se.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const te=Oe.get(R);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,te=0){T=R,C=Y,w=te;let se=!0,q=null,_e=!1,Ae=!1;if(R){const Ie=Oe.get(R);if(Ie.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(F.FRAMEBUFFER,null),se=!1;else if(Ie.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Ie.__hasExternalTextures)N.rebindTextures(R,Oe.get(R.texture).__webglTexture,Oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Ie.__boundDepthTexture!==ze){if(ze!==null&&Oe.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const We=Oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?q=We[Y][te]:q=We[Y],_e=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?q=Oe.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?q=We[te]:q=We,S.copy(R.viewport),E.copy(R.scissor),V=R.scissorTest}else S.copy(Q).multiplyScalar(ee).floor(),E.copy(le).multiplyScalar(ee).floor(),V=we;if(Se.bindFramebuffer(F.FRAMEBUFFER,q)&&se&&Se.drawBuffers(R,q),Se.viewport(S),Se.scissor(E),Se.setScissorTest(V),_e){const Ie=Oe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,te)}else if(Ae){const Ie=Oe.get(R.texture),Ge=Y||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,te||0,Ge)}L=-1},this.readRenderTargetPixels=function(R,Y,te,se,q,_e,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){Se.bindFramebuffer(F.FRAMEBUFFER,De);try{const Ie=R.texture,Ge=Ie.format,We=Ie.type;if(!ce.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&te>=0&&te<=R.height-q&&F.readPixels(Y,te,se,q,Ee.convert(Ge),Ee.convert(We),_e)}finally{const Ie=T!==null?Oe.get(T).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,Y,te,se,q,_e,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const Ie=R.texture,Ge=Ie.format,We=Ie.type;if(!ce.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-se&&te>=0&&te<=R.height-q){Se.bindFramebuffer(F.FRAMEBUFFER,De);const ze=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ze),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(Y,te,se,q,Ee.convert(Ge),Ee.convert(We),0);const at=T!==null?Oe.get(T).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,at);const mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await s1(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ze),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.deleteBuffer(ze),F.deleteSync(mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,te=0){R.isTexture!==!0&&(Hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-te),q=Math.floor(R.image.width*se),_e=Math.floor(R.image.height*se),Ae=Y!==null?Y.x:0,De=Y!==null?Y.y:0;N.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,Ae,De,q,_e),Se.unbindTexture()},this.copyTextureToTexture=function(R,Y,te=null,se=null,q=0){R.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],Y=arguments[2],q=arguments[3]||0,te=null);let _e,Ae,De,Ie,Ge,We;te!==null?(_e=te.max.x-te.min.x,Ae=te.max.y-te.min.y,De=te.min.x,Ie=te.min.y):(_e=R.image.width,Ae=R.image.height,De=0,Ie=0),se!==null?(Ge=se.x,We=se.y):(Ge=0,We=0);const ze=Ee.convert(Y.format),at=Ee.convert(Y.type);N.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),Mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),An=F.getParameter(F.UNPACK_SKIP_PIXELS),st=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES),Xt=R.isCompressedTexture?R.mipmaps[q]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,De),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ie),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,Ge,We,_e,Ae,ze,at,Xt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,Ge,We,Xt.width,Xt.height,ze,Xt.data):F.texSubImage2D(F.TEXTURE_2D,q,Ge,We,_e,Ae,ze,at,Xt),F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,An),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),q===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,te=null,se=null,q=0){R.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,se=arguments[1]||null,R=arguments[2],Y=arguments[3],q=arguments[4]||0);let _e,Ae,De,Ie,Ge,We,ze,at,mt;const Mt=R.isCompressedTexture?R.mipmaps[q]:R.image;te!==null?(_e=te.max.x-te.min.x,Ae=te.max.y-te.min.y,De=te.max.z-te.min.z,Ie=te.min.x,Ge=te.min.y,We=te.min.z):(_e=Mt.width,Ae=Mt.height,De=Mt.depth,Ie=0,Ge=0,We=0),se!==null?(ze=se.x,at=se.y,mt=se.z):(ze=0,at=0,mt=0);const An=Ee.convert(Y.format),st=Ee.convert(Y.type);let Fe;if(Y.isData3DTexture)N.setTexture3D(Y,0),Fe=F.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)N.setTexture2DArray(Y,0),Fe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Xt=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Jn=F.getParameter(F.UNPACK_SKIP_PIXELS),ps=F.getParameter(F.UNPACK_SKIP_ROWS),bn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Fe,q,ze,at,mt,_e,Ae,De,An,st,Mt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Fe,q,ze,at,mt,_e,Ae,De,An,Mt.data):F.texSubImage3D(Fe,q,ze,at,mt,_e,Ae,De,An,st,Mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ps),F.pixelStorei(F.UNPACK_SKIP_IMAGES,bn),q===0&&Y.generateMipmaps&&F.generateMipmap(Fe),Se.unbindTexture()},this.initRenderTarget=function(R){Oe.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,Se.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===np?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===zc?"display-p3":"srgb"}}class r_ extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class s_ extends kt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Gt,d=Gt,h,f){super(null,o,a,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class o_ extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new j,_c=new j,k0=new rt,No=new Fc,pl=new kc,id=new j,F0=new j;class vA extends jt{constructor(e=new fn,n=new o_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)xc.fromBufferAttribute(n,r-1),_c.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=xc.distanceTo(_c);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;k0.copy(r).invert(),No.copy(e.ray).applyMatrix4(k0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let y=m,v=_-1;y<v;y+=c){const u=d.getX(y),p=d.getX(y+1),g=ml(this,e,No,l,u,p);g&&n.push(g)}if(this.isLineLoop){const y=d.getX(_-1),v=d.getX(m),u=ml(this,e,No,l,y,v);u&&n.push(u)}}else{const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=m,v=_-1;y<v;y+=c){const u=ml(this,e,No,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=ml(this,e,No,l,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ml(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(xc.fromBufferAttribute(o,r),_c.fromBufferAttribute(o,s),n.distanceSqToSegment(xc,_c,id,F0)>i)return;id.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(id);if(!(l<e.near||l>e.far))return{distance:l,point:F0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const B0=new j,H0=new j;class xA extends vA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)B0.fromBufferAttribute(n,r),H0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+B0.distanceTo(H0);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _A extends kt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vc extends fn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const y=[],v=i/2;let u=0;p(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function p(){const M=new j,C=new j;let w=0;const T=(n-e)/i;for(let L=0;L<=s;L++){const B=[],S=L/s,E=S*(n-e)+e;for(let V=0;V<=r;V++){const W=V/r,Z=W*l+a,ne=Math.sin(Z),K=Math.cos(Z);C.x=E*ne,C.y=-S*i+v,C.z=E*K,h.push(C.x,C.y,C.z),M.set(ne,T,K).normalize(),f.push(M.x,M.y,M.z),m.push(W,1-S),B.push(_++)}y.push(B)}for(let L=0;L<r;L++)for(let B=0;B<s;B++){const S=y[B][L],E=y[B+1][L],V=y[B+1][L+1],W=y[B][L+1];e>0&&(d.push(S,E,W),w+=3),n>0&&(d.push(E,V,W),w+=3)}c.addGroup(u,w,0),u+=w}function g(M){const C=_,w=new ke,T=new j;let L=0;const B=M===!0?e:n,S=M===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,v*S,0),f.push(0,S,0),m.push(.5,.5),_++;const E=_;for(let V=0;V<=r;V++){const Z=V/r*l+a,ne=Math.cos(Z),K=Math.sin(Z);T.x=B*K,T.y=v*S,T.z=B*ne,h.push(T.x,T.y,T.z),f.push(0,S,0),w.x=ne*.5+.5,w.y=K*.5*S+.5,m.push(w.x,w.y),_++}for(let V=0;V<r;V++){const W=C+V,Z=E+V;M===!0?d.push(Z,Z+1,W):d.push(Z+1,Z,W),L+=3}c.addGroup(u,L,M===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lp extends Vc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new lp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cp extends fn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const g=new j,M=new j,C=new j;for(let w=0;w<n.length;w+=3)m(n[w+0],g),m(n[w+1],M),m(n[w+2],C),l(g,M,C,p)}function l(p,g,M,C){const w=C+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const B=p.clone().lerp(M,L/w),S=g.clone().lerp(M,L/w),E=w-L;for(let V=0;V<=E;V++)V===0&&L===w?T[L][V]=B:T[L][V]=B.clone().lerp(S,V/E)}for(let L=0;L<w;L++)for(let B=0;B<2*(w-L)-1;B++){const S=Math.floor(B/2);B%2===0?(f(T[L][S+1]),f(T[L+1][S]),f(T[L][S])):(f(T[L][S+1]),f(T[L+1][S+1]),f(T[L+1][S]))}}function c(p){const g=new j;for(let M=0;M<s.length;M+=3)g.x=s[M+0],g.y=s[M+1],g.z=s[M+2],g.normalize().multiplyScalar(p),s[M+0]=g.x,s[M+1]=g.y,s[M+2]=g.z}function d(){const p=new j;for(let g=0;g<s.length;g+=3){p.x=s[g+0],p.y=s[g+1],p.z=s[g+2];const M=v(p)/2/Math.PI+.5,C=u(p)/Math.PI+.5;o.push(M,1-C)}_(),h()}function h(){for(let p=0;p<o.length;p+=6){const g=o[p+0],M=o[p+2],C=o[p+4],w=Math.max(g,M,C),T=Math.min(g,M,C);w>.9&&T<.1&&(g<.2&&(o[p+0]+=1),M<.2&&(o[p+2]+=1),C<.2&&(o[p+4]+=1))}}function f(p){s.push(p.x,p.y,p.z)}function m(p,g){const M=p*3;g.x=e[M+0],g.y=e[M+1],g.z=e[M+2]}function _(){const p=new j,g=new j,M=new j,C=new j,w=new ke,T=new ke,L=new ke;for(let B=0,S=0;B<s.length;B+=9,S+=6){p.set(s[B+0],s[B+1],s[B+2]),g.set(s[B+3],s[B+4],s[B+5]),M.set(s[B+6],s[B+7],s[B+8]),w.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),C.copy(p).add(g).add(M).divideScalar(3);const E=v(C);y(w,S+0,p,E),y(T,S+2,g,E),y(L,S+4,M,E)}}function y(p,g,M,C){C<0&&p.x===1&&(o[g]=p.x-1),M.x===0&&M.z===0&&(o[g]=C/2/Math.PI+.5)}function v(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.vertices,e.indices,e.radius,e.details)}}class up extends cp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new up(e.radius,e.detail)}}class dp extends fn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,m=new j,_=new ke;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const u=s+v/i*o;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,d.push(_.x,_.y)}h+=f}for(let y=0;y<r;y++){const v=y*(i+1);for(let u=0;u<i;u++){const p=u+v,g=p,M=p+i+1,C=p+i+2,w=p+1;a.push(g,M,w),a.push(M,C,w)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hp extends fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new j,f=new j,m=[],_=[],y=[],v=[];for(let u=0;u<=i;u++){const p=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const w=C/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),v.push(w+M,1-g),p.push(c++)}d.push(p)}for(let u=0;u<i;u++)for(let p=0;p<n;p++){const g=d[u][p+1],M=d[u][p],C=d[u+1][p],w=d[u+1][p+1];(u!==0||o>0)&&m.push(g,M,w),(u!==i-1||l<Math.PI)&&m.push(M,C,w)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fp extends fn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new j,h=new j,f=new j;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,v=m/i*Math.PI*2;h.x=(e+n*Math.cos(v))*Math.cos(y),h.y=(e+n*Math.cos(v))*Math.sin(y),h.z=n*Math.sin(v),a.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,p=(r+1)*m+_;o.push(y,v,p),o.push(v,u,p)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yA extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _n extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SA extends hs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const V0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class MA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const wA=new MA;class pp{constructor(e){this.manager=e!==void 0?e:wA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pp.DEFAULT_MATERIAL_NAME="__DEFAULT";class EA extends pp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=V0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ya("img");function l(){d(),V0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class TA extends pp{constructor(e){super(e)}load(e,n,i,r){const s=new kt,o=new EA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Gc extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class AA extends Gc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const rd=new rt,G0=new j,W0=new j;class a_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;G0.setFromMatrixPosition(e.matrixWorld),n.position.copy(G0),W0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(W0),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const j0=new rt,Io=new j,sd=new j;class bA extends a_{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),i.position.copy(Io),sd.copy(i.position),sd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(sd),i.updateMatrixWorld(),r.makeTranslation(-Io.x,-Io.y,-Io.z),j0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j0)}}class l_ extends Gc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class CA extends a_{constructor(){super(new sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X0 extends Gc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new CA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RA extends Gc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class PA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Y0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Y0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Y0(){return performance.now()}const q0=new rt;class LA{constructor(e,n,i=0,r=1/0){this.ray=new Fc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return q0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(q0),this}intersectObject(e,n=!0,i=[]){return Kh(e,this,i,n),i.sort(K0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kh(e[r],this,i,n);return i.sort(K0),i}}function K0(t,e){return t.distance-e.distance}function Kh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Kh(s[o],e,n,!0)}}class Z0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ln(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class DA extends xA{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,m=0,_=-a;f<=n;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=f===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const d=new fn;d.setAttribute("position",new dt(l,3)),d.setAttribute("color",new dt(c,3));const h=new o_({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NA extends ds{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);const Q0={type:"change"},mp={type:"start"},c_={type:"end"},gl=new Fc,J0=new ki,IA=Math.cos(70*i1.DEG2RAD),It=new j,xn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6;class UA extends NA{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new os,this._lastTargetPosition=new j,this._quat=new os().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Z0,this._sphericalDelta=new Z0,this._scale=1,this._panOffset=new j,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new j,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zA.bind(this),this._onPointerDown=OA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=jA.bind(this),this._onMouseWheel=HA.bind(this),this._onKeyDown=VA.bind(this),this._onTouchStart=GA.bind(this),this._onTouchMove=WA.bind(this),this._onMouseDown=FA.bind(this),this._onMouseMove=BA.bind(this),this._interceptControlDown=XA.bind(this),this._interceptControlUp=YA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Q0),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;It.copy(n).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),n.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<IA?this.object.lookAt(this.target):(J0.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(J0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(Q0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){It.setFromMatrixColumn(n,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,n){this.screenSpacePanning===!0?It.setFromMatrixColumn(n,1):(It.setFromMatrixColumn(n,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ke,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function OA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function zA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function kA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(c_),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function FA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case $s.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case $s.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(mp)}function BA(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function HA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(mp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(c_))}function VA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function GA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(mp)}function WA(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function jA(t){this.enabled!==!1&&t.preventDefault()}function XA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class qA extends r_{constructor(){super();const e=new an;e.deleteAttribute("uv");const n=new _n({side:un}),i=new _n,r=new l_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Je(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Je(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Je(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Je(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Je(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Je(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const h=new Je(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Je(e,Ls(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const m=new Je(e,Ls(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const _=new Je(e,Ls(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const y=new Je(e,Ls(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const v=new Je(e,Ls(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const u=new Je(e,Ls(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ls(t){const e=new Bc;return e.color.setScalar(t),e}const Gl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KA=new sp(-1,1,1,-1,0,1);class ZA extends fn{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const QA=new ZA;class Wc{constructor(e){this._mesh=new Je(QA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class JA extends fs{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=di.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $0 extends fs{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class $A extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class eb{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new ke);this._width=i.width,this._height=i.height,n=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new JA(Gl),this.copyPass.material.blending=qt,this.clock=new PA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$0!==void 0&&(o instanceof $0?i=!0:o instanceof $A&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tb extends fs{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const nb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ib extends fs{constructor(){super();const e=nb;this.uniforms=di.clone(e.uniforms),this.material=new yA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Px?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lx&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const vl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ke},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new rt},cameraProjectionMatrixInverse:{value:new rt},cameraWorldMatrix:{value:new rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new j(-1,-1,-1)},sceneBoxMax:{value:new j(1,1,1)}},vertexShader:`

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
		}`},xl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ad={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function rb(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=sb(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new j(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new s_(r,e,e);return s.wrapS=Ei,s.wrapT=Ei,s.needsUpdate=!0,s}function sb(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const _l={defines:{SAMPLES:16,SAMPLE_VECTORS:u_(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ke},cameraProjectionMatrixInverse:{value:new rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function u_(t,e,n){const i=ob(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function ob(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new j(Math.cos(s),Math.sin(s),o))}return i}class ab{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),d=(3-Math.sqrt(3))/6,h=(l+c)*d,f=l-h,m=c-h,_=e-f,y=n-m;let v,u;_>y?(v=1,u=0):(v=0,u=1);const p=_-v+d,g=y-u+d,M=_-1+2*d,C=y-1+2*d,w=l&255,T=c&255,L=this.perm[w+this.perm[T]]%12,B=this.perm[w+v+this.perm[T+u]]%12,S=this.perm[w+1+this.perm[T+1]]%12;let E=.5-_*_-y*y;E<0?i=0:(E*=E,i=E*E*this.dot(this.grad3[L],_,y));let V=.5-p*p-g*g;V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[B],p,g));let W=.5-M*M-C*C;return W<0?s=0:(W*=W,s=W*W*this.dot(this.grad3[S],M,C)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,d=Math.floor(e+c),h=Math.floor(n+c),f=Math.floor(i+c),m=1/6,_=(d+h+f)*m,y=d-_,v=h-_,u=f-_,p=e-y,g=n-v,M=i-u;let C,w,T,L,B,S;p>=g?g>=M?(C=1,w=0,T=0,L=1,B=1,S=0):p>=M?(C=1,w=0,T=0,L=1,B=0,S=1):(C=0,w=0,T=1,L=1,B=0,S=1):g<M?(C=0,w=0,T=1,L=0,B=1,S=1):p<M?(C=0,w=1,T=0,L=0,B=1,S=1):(C=0,w=1,T=0,L=1,B=1,S=0);const E=p-C+m,V=g-w+m,W=M-T+m,Z=p-L+2*m,ne=g-B+2*m,K=M-S+2*m,ee=p-1+3*m,z=g-1+3*m,ie=M-1+3*m,Q=d&255,le=h&255,we=f&255,ye=this.perm[Q+this.perm[le+this.perm[we]]]%12,J=this.perm[Q+C+this.perm[le+w+this.perm[we+T]]]%12,re=this.perm[Q+L+this.perm[le+B+this.perm[we+S]]]%12,me=this.perm[Q+1+this.perm[le+1+this.perm[we+1]]]%12;let ve=.6-p*p-g*g-M*M;ve<0?r=0:(ve*=ve,r=ve*ve*this.dot3(this.grad3[ye],p,g,M));let Ue=.6-E*E-V*V-W*W;Ue<0?s=0:(Ue*=Ue,s=Ue*Ue*this.dot3(this.grad3[J],E,V,W));let Pe=.6-Z*Z-ne*ne-K*K;Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this.dot3(this.grad3[re],Z,ne,K));let Be=.6-ee*ee-z*z-ie*ie;return Be<0?a=0:(Be*=Be,a=Be*Be*this.dot3(this.grad3[me],ee,z,ie)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let d,h,f,m,_;const y=(e+n+i+r)*l,v=Math.floor(e+y),u=Math.floor(n+y),p=Math.floor(i+y),g=Math.floor(r+y),M=(v+u+p+g)*c,C=v-M,w=u-M,T=p-M,L=g-M,B=e-C,S=n-w,E=i-T,V=r-L,W=B>S?32:0,Z=B>E?16:0,ne=S>E?8:0,K=B>V?4:0,ee=S>V?2:0,z=E>V?1:0,ie=W+Z+ne+K+ee+z,Q=o[ie][0]>=3?1:0,le=o[ie][1]>=3?1:0,we=o[ie][2]>=3?1:0,ye=o[ie][3]>=3?1:0,J=o[ie][0]>=2?1:0,re=o[ie][1]>=2?1:0,me=o[ie][2]>=2?1:0,ve=o[ie][3]>=2?1:0,Ue=o[ie][0]>=1?1:0,Pe=o[ie][1]>=1?1:0,Be=o[ie][2]>=1?1:0,je=o[ie][3]>=1?1:0,He=B-Q+c,F=S-le+c,pt=E-we+c,pe=V-ye+c,ce=B-J+2*c,Se=S-re+2*c,qe=E-me+2*c,Oe=V-ve+2*c,N=B-Ue+3*c,A=S-Pe+3*c,O=E-Be+3*c,b=V-je+3*c,I=B-1+4*c,P=S-1+4*c,D=E-1+4*c,k=V-1+4*c,U=v&255,X=u&255,G=p&255,$=g&255,ue=a[U+a[X+a[G+a[$]]]]%32,fe=a[U+Q+a[X+le+a[G+we+a[$+ye]]]]%32,de=a[U+J+a[X+re+a[G+me+a[$+ve]]]]%32,Ne=a[U+Ue+a[X+Pe+a[G+Be+a[$+je]]]]%32,Ee=a[U+1+a[X+1+a[G+1+a[$+1]]]]%32;let xe=.6-B*B-S*S-E*E-V*V;xe<0?d=0:(xe*=xe,d=xe*xe*this.dot4(s[ue],B,S,E,V));let H=.6-He*He-F*F-pt*pt-pe*pe;H<0?h=0:(H*=H,h=H*H*this.dot4(s[fe],He,F,pt,pe));let ge=.6-ce*ce-Se*Se-qe*qe-Oe*Oe;ge<0?f=0:(ge*=ge,f=ge*ge*this.dot4(s[de],ce,Se,qe,Oe));let oe=.6-N*N-A*A-O*O-b*b;oe<0?m=0:(oe*=oe,m=oe*oe*this.dot4(s[Ne],N,A,O,b));let ae=.6-I*I-P*P-D*D-k*k;return ae<0?_=0:(ae*=ae,_=ae*ae*this.dot4(s[Ee],I,P,D,k)),27*(d+h+f+m+_)}}class ai extends fs{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=rb(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Qn(this.width,this.height,{type:Ai}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ot({defines:Object.assign({},vl.defines),uniforms:di.clone(vl.uniforms),vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader,blending:qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new SA,this.normalMaterial.blending=qt,this.pdMaterial=new Ot({defines:Object.assign({},_l.defines),uniforms:di.clone(_l.uniforms),vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ot({defines:Object.assign({},xl.defines),uniforms:di.clone(xl.uniforms),vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader,blending:qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ot({uniforms:di.clone(Gl.uniforms),vertexShader:Gl.vertexShader,fragmentShader:Gl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ch,blendDst:Go,blendEquation:ci,blendSrcAlpha:lh,blendDstAlpha:Go,blendEquationAlpha:ci}),this.blendMaterial=new Ot({uniforms:di.clone(ad.uniforms),vertexShader:ad.vertexShader,fragmentShader:ad.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Tx,blendSrc:ch,blendDst:Go,blendEquation:ci,blendSrcAlpha:lh,blendDstAlpha:Go,blendEquationAlpha:ci}),this.fsQuad=new Wc(null),this.originalClearColor=new Ve,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new ap,this.depthTexture.format=ss,this.depthTexture.type=rs,this.normalRenderTarget=new Qn(this.width,this.height,{minFilter:Gt,magFilter:Gt,type:Ai,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=u_(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ai.OUTPUT.Off:break;case ai.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ai.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ai.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ai.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ai.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ai.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new ab,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new s_(r,e,e,Yn,Ti);return s.wrapS=Ei,s.wrapT=Ei,s.needsUpdate=!0,s}}ai.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const yl={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ke(1/1024,1/512)}},vertexShader:`

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

		}`},Sl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ke(1/1024,1/512)}},vertexShader:`

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

		}`},ld={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ke(1/1024,1/512)}},vertexShader:`

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

		}`};class lb extends fs{constructor(e,n){super(),this.edgesRT=new Qn(e,n,{depthBuffer:!1,type:Ai}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Qn(e,n,{depthBuffer:!1,type:Ai}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new kt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=jn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new kt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Gt,this.searchTexture.minFilter=Gt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=di.clone(yl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new Ot({defines:Object.assign({},yl.defines),uniforms:this.uniformsEdges,vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader}),this.uniformsWeights=di.clone(Sl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Ot({defines:Object.assign({},Sl.defines),uniforms:this.uniformsWeights,vertexShader:Sl.vertexShader,fragmentShader:Sl.fragmentShader}),this.uniformsBlend=di.clone(ld.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Ot({uniforms:this.uniformsBlend,vertexShader:ld.vertexShader,fragmentShader:ld.fragmentShader}),this.fsQuad=new Wc(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const cb="honeycutt-assets",ls="img";function gp(){return new Promise((t,e)=>{const n=indexedDB.open(cb,1);n.onupgradeneeded=()=>n.result.createObjectStore(ls,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function ub(){try{const t=await gp();return await new Promise(e=>{const n=t.transaction(ls).objectStore(ls).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function db(t){const e=await gp();return new Promise(n=>{const i=e.transaction(ls,"readwrite");i.objectStore(ls).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function hb(t){const e=await gp();return new Promise(n=>{const i=e.transaction(ls,"readwrite");i.objectStore(ls).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function fb(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const d_=Re.createContext(null);let pb=1;function mb({children:t}){const[e,n]=Re.useState([]);Re.useEffect(()=>{ub().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=Re.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await fb(l.result),d={id:`a${Date.now().toString(36)}${pb++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await db(d),n(h=>[d,...h]),a(d)},l.readAsDataURL(o)}),[]),r=Re.useCallback(async o=>{await hb(o),n(a=>a.filter(l=>l.id!==o))},[]),s=Re.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return x.jsx(d_.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function vp(){return Re.useContext(d_)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function Vn(t,e){const n=new Ve(t);return e>=0?n.lerp(new Ve("#ffffff"),e):n.lerp(new Ve("#000000"),-e),n}function Xe(t,e=.75,n=.04,i={}){return new _n({color:new Ve(t),roughness:e,metalness:n,...i})}function Ye(t,e,n,i){const r=new Je(new an(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function Ct(t,e,n,i,r=28){const s=new Je(new Vc(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function Le(t,e,n,i){return t.position.set(e,n,i),t}function Uo(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(Le(Ye(s,i,s,o),l,i/2,c))}const eg={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.85),a=Xe(Vn(s,.08),.9),l=Xe("#2b2b2e",.5,.3),c=r*.42,d=Math.min(.16,n*.12),h=r;t.add(Le(Ye(n,c,i,o),0,c/2+.08,0)),t.add(Le(Ye(n,h-.1,.16,o),0,(h-.1)/2+.08,-i/2+.08)),t.add(Le(Ye(d,c+.16,i,o),n/2-d/2,(c+.16)/2+.08,0)),t.add(Le(Ye(d,c+.16,i,o),-n/2+d/2,(c+.16)/2+.08,0));const f=n-d*2-.04,m=n>1.3?Math.round(n/.9):1,_=f/m;for(let y=0;y<m;y++){const v=-f/2+_/2+y*_;t.add(Le(Ye(_-.04,.16,i-.28,a),v,c+.16,.04)),t.add(Le(Ye(_-.06,.2,.16,a),v,c+.24,-i/2+.24))}Uo(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.7,.05),a=r*.5;t.add(Le(Ye(n,.06,i,o),0,a,0)),t.add(Le(Ye(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),Uo(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.7);t.add(Le(Ye(n,.1,i,o),0,r-.05,0)),Uo(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Xe(r,.6,.1);t.add(Le(Ct(n/2,n/2,.08,s),0,i-.04,0)),t.add(Le(Ct(.03,.04,i-.08,Xe("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(Le(Ct(n*.34,n*.34,.02,Xe("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.45,.05);t.add(Le(Ye(n,.06,i,o),0,r-.03,0)),Uo(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Xe(r,.45,.05);t.add(Le(Ct(n/2,n/2,.06,s),0,i-.03,0)),t.add(Le(Ct(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(Le(Ct(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.5,.06);t.add(Le(Ye(n,.05,i,o),0,r-.025,0)),t.add(Le(Ye(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(Le(Ye(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(Le(Ye(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe("#5b4a3a",.6),a=Xe(s,.9),l=Xe(Vn(s,.12),.95),c=r*.5;t.add(Le(Ye(n,c,i,o),0,c/2,0)),t.add(Le(Ye(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(Le(Ye(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(Le(Ye(n-.12,.1,i*.62,Xe(Vn(s,-.05),.9)),0,c+.2,i*.12));const d=(n-.2)/2;t.add(Le(Ye(d-.04,.12,.34,l),-d/2,c+.24,-i/2+.32)),t.add(Le(Ye(d-.04,.12,.34,l),d/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.55),a=Xe("#caa86a",.3,.7);t.add(Le(Ye(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(Le(Ct(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(Le(Ct(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),Uo(t,n-.08,i-.08,.06,.05,.04,Xe("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.55),a=Xe("#caa86a",.3,.7);t.add(Le(Ye(n,r,i,o),0,r/2,0)),t.add(Le(Ye(.012,r-.1,.01,Xe(Vn(s,-.3),.6)),0,r/2,i/2+.002)),t.add(Le(Ct(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(Le(Ct(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.55),a=Xe(Vn(s,.06),.6),l=Xe("#caa86a",.3,.7);t.add(Le(Ye(n,r,i,o),0,r/2,0));const c=r>.6?3:1,d=(r-.08)/c;for(let h=0;h<c;h++){const f=.04+d/2+h*d;t.add(Le(Ye(n-.06,d-.03,.02,a),0,f,i/2+.005)),t.add(Le(Ct(.01,.01,.12,l),0,f,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.6),a=.04;t.add(Le(Ye(a,r,i,o),-n/2+a/2,r/2,0)),t.add(Le(Ye(a,r,i,o),n/2-a/2,r/2,0)),t.add(Le(Ye(n,a,i,o),0,a/2,0)),t.add(Le(Ye(n,a,i,o),0,r-a/2,0)),t.add(Le(Ye(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const d=r/(l+1)*c;t.add(Le(Ye(n-a*2,a*.7,i-.04,o),0,d,0));const h=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let f=-n/2+a+.04;for(;f<n/2-a-.06;){const m=.03+Math.random()*.03,_=.12+Math.random()*.08;t.add(Le(Ye(m,_,i*.6,Xe(h[Math.floor(Math.random()*h.length)],.8)),f+m/2,d+a*.35+_/2,0)),f+=m+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Xe("#2b2b2e",.4,.4),o=Xe(r,.4,.3),a=new _n({color:"#10141c",roughness:.2,metalness:.1,emissive:new Ve("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(Le(Ye(n,i,.05,o),0,l+i/2,0));const c=new Je(new as(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(Le(Ct(.03,.04,l,s),0,l/2,0)),t.add(Le(Ye(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Xe(r,1,0),o=Ye(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=Ye(n*.86,.022,i*.78,Xe(Vn(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=Ct(n/2,n/2,.02,Xe(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=Ct(n*.36,n*.36,.022,Xe(Vn(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Xe("#9a7a55",.7),o=i*.28;t.add(Le(Ct(n*.36,n*.28,o,s),0,o/2,0)),t.add(Le(Ct(.03,.03,i*.45,Xe("#5a4030",.8)),0,o+i*.2,0));const a=(c,d,h,f,m)=>{const _=new Je(new up(d,0),Xe(c,.9));_.castShadow=!0,t.add(Le(_,h,f,m))},l=o+i*.4;a(Vn(r,.05),n*.42,0,l+n*.2,0),a(Vn(r,-.1),n*.34,n*.22,l+n*.45,.04),a(Vn(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(Vn(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Xe("#3a3a3e",.4,.6);t.add(Le(Ct(n*.32,n*.36,.04,s),0,.02,0)),t.add(Le(Ct(.018,.018,i*.78,s),0,i*.4,0));const o=new Je(new lp(n*.42,i*.22,24,1,!0),new _n({color:new Ve(r),roughness:.6,emissive:new Ve(r),emissiveIntensity:.5,side:Nn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new l_(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.35,.5),a=Xe("#888",.3,.8);t.add(Le(Ye(n,r,i,o),0,r/2,0)),t.add(Le(Ye(n,.015,.005,Xe(Vn(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(Le(Ct(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(Le(Ct(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe("#d8d2c8",.6),a=Xe(s,.3,.2);t.add(Le(Ye(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(Le(Ye(n,.05,i,a),0,r-.025,0)),t.add(Le(Ye(n*.3,.02,i*.5,Xe("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Xe(s,.35,.4);t.add(Le(Ye(n,r,i,o),0,r/2,0));const a=Xe("#1a1a1d",.3,.2);t.add(Le(Ye(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(Le(Ct(n*.11,n*.11,.01,Xe("#333",.5)),n*l,r+.02,i*c))}};function gb(t){const e=xi[t.type];if(!e)return new hi;const n=new hi,i={...e,color:t.color||e.color};return(eg[e.shape]||eg.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function Or(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const tg={day:{bg:"#0e1014",exposure:1.05,env:1,key:["#fff4e0",2],fill:["#cdddff",.5],hemi:.55,amb:.25},dusk:{bg:"#171009",exposure:1.12,env:.5,key:["#ffb877",1.9],fill:["#8a78d0",.45],hemi:.35,amb:.16},night:{bg:"#080a0f",exposure:1.18,env:.18,key:["#9fb6ff",.5],fill:["#4a5fb0",.3],hemi:.14,amb:.08}},ng=(t,e)=>Math.round(t/e)*e,Ds=t=>Math.max(0,Math.min(255,Math.round(t))),vb={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function xb(t="#b08a5e"){const e=new Ve(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let d=0;d<a;d++){const h=(Math.random()-.5)*36;o.fillStyle=`rgb(${Ds(n+h)},${Ds(i+h)},${Ds(r+h)})`,o.fillRect(0,d*l,512,l);for(let f=0;f<60;f++){o.strokeStyle=`rgba(${Ds(n*.45)},${Ds(i*.4)},${Ds(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const m=d*l+Math.random()*l;o.moveTo(0,m),o.bezierCurveTo(170,m+(Math.random()-.5)*6,340,m+(Math.random()-.5)*6,512,m),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,d*l,512,2)}const c=new _A(s);return c.wrapS=c.wrapT=Ei,c.colorSpace=yn,c}function _b(){const{state:t,dispatch:e}=Ki(),{rooms:n,walls:i,items:r,builtins:s,selected:o,ambiance:a}=t,{map:l}=vp(),c=Re.useRef(null),d=Re.useRef({}),h=Re.useRef({});h.current={rooms:n,walls:i,items:r,selected:o,dispatch:e};function f(y){const v=d.current;if(!y||typeof y!="string")return null;if(y.startsWith("wood:")){const u=y.slice(5);return v.woodCache.has(u)||v.woodCache.set(u,xb(vb[u]||"#c79a6b")),v.woodCache.get(u)}if(y.startsWith("img:")){const u=y.slice(4);if(!v.imgCache.has(u)){const p=l[u];if(!p)return null;const g=new TA().load(p);g.colorSpace=yn,g.wrapS=g.wrapT=Ei,v.imgCache.set(u,g)}return v.imgCache.get(u)}return null}function m(y,v,u,p,g,M={}){const C=f(y);if(C){let w=C;return C.image instanceof HTMLCanvasElement&&(w=C.clone(),w.needsUpdate=!0,w.wrapS=w.wrapT=Ei,w.colorSpace=yn,d.current.roomTexList.push(w)),w.repeat.set(Math.max(1,p),Math.max(1,g)),new _n({map:w,...M})}return new _n({color:new Ve(v||u),...M})}Re.useEffect(()=>{const y=c.current,v=y.clientWidth,u=y.clientHeight,p=new gA({antialias:!0,preserveDrawingBuffer:!0});p.setSize(v,u),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.shadowMap.enabled=!0,p.shadowMap.type=Ex,p.toneMapping=qf,p.toneMappingExposure=1.05,p.outputColorSpace=yn,y.appendChild(p.domElement);const g=new r_;g.background=new Ve("#0e1014");const M=new Yh(p);try{g.environment=M.fromScene(new qA,.04).texture}catch{}const C=new Dn(50,v/u,.1,200),w=new UA(C,p.domElement);w.enableDamping=!0,w.dampingFactor=.08,w.minDistance=1.2,w.maxDistance=60,w.maxPolarAngle=Math.PI/2-.04,w.minPolarAngle=.16,w.enablePan=!0,w.rotateSpeed=.7;const T=new AA("#dfe6f0","#2a2620",.55);g.add(T);const L=new RA("#ffffff",.25);g.add(L);const B=new X0("#fff4e0",2);B.position.set(8,14,6),B.castShadow=!0,B.shadow.mapSize.set(4096,4096),B.shadow.camera.near=1,B.shadow.camera.far=80,B.shadow.bias=-3e-4,B.shadow.normalBias=.02,B.shadow.radius=4;const S=B.shadow.camera;S.left=-20,S.right=20,S.top=20,S.bottom=-20,g.add(B);const E=new X0("#cdddff",.5);E.position.set(-9,7,-5),g.add(E);let V=null,W=null;try{V=new eb(p),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(v,u),V.addPass(new tb(g,C)),W=new ai(g,C,v,u),W.output=ai.OUTPUT.Default,W.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),W.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),V.addPass(W),V.addPass(new lb(v,u)),V.addPass(new ib)}catch{V=null}const Z=new Je(new as(160,160),new _n({color:"#0c0d11",roughness:1}));Z.rotation.x=-Math.PI/2,Z.position.y=-.04,Z.receiveShadow=!0,g.add(Z);const ne=new DA(160,160,2896444,1645859);ne.position.y=-.02,g.add(ne);const K=new hi,ee=new hi,z=new hi;g.add(K,ee,z);const ie=new Je(new dp(.46,.5,48),new Bc({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:Nn}));ie.rotation.x=-Math.PI/2,ie.position.y=.03,ie.visible=!1,ie.renderOrder=2,g.add(ie);const Q=new hi,le=new Je(new fp(.5,.035,12,48),new _n({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));le.rotation.x=-Math.PI/2,le.userData.gizmo=!0,Q.add(le);for(let pe=0;pe<4;pe++){const ce=pe/4*Math.PI*2,Se=new Je(new hp(.07,16,16),new _n({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));Se.position.set(Math.cos(ce)*.5,0,Math.sin(ce)*.5),Se.userData.gizmo=!0,Q.add(Se)}Q.visible=!1,Q.renderOrder=3,g.add(Q),Object.assign(d.current,{renderer:p,scene:g,camera:C,controls:w,roomGroup:K,furnitureGroup:ee,key:B,fill:E,ambient:L,hemi:T,pmrem:M,ring:ie,gizmo:Q,builtinGroup:z,composer:V,gtao:W,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new LA,drag:null,rotate:null,pending:null});const we=new ki(new j(0,1,0),0),ye=p.domElement,J=new ke,re=pe=>{const ce=ye.getBoundingClientRect();J.set((pe.clientX-ce.left)/ce.width*2-1,-((pe.clientY-ce.top)/ce.height)*2+1)},me=()=>{const pe=new j;return d.current.raycaster.setFromCamera(J,C),d.current.raycaster.ray.intersectPlane(we,pe)?pe:null},ve=pe=>{for(;pe&&pe.userData.uid===void 0;)pe=pe.parent;return pe},Ue=pe=>{for(;pe;){if(pe.userData.gizmo)return!0;pe=pe.parent}return!1},Pe=pe=>{var O,b;re(pe);const ce=d.current.raycaster;ce.setFromCamera(J,C);const{items:Se,selected:qe,dispatch:Oe}=h.current;if(d.current.gizmo.visible){const I=ce.intersectObject(d.current.gizmo,!0);if(I.length&&Ue(I[0].object)){const P=Se.find(k=>k.uid===(qe==null?void 0:qe.uid)),D=me();if(P&&D){w.enabled=!1,d.current.rotate={uid:P.uid,cx:P.x,cz:P.z,startAng:Math.atan2(D.z-P.z,D.x-P.x),startRot:P.rot||0},(O=ye.setPointerCapture)==null||O.call(ye,pe.pointerId);return}}}const N=ce.intersectObjects(d.current.furnitureGroup.children,!0);let A=null;for(const I of N){const P=ve(I.object);if(P){A=P;break}}if(A){w.enabled=!1,Se.find(P=>P.uid===A.userData.uid),Oe({type:"select",sel:{type:"item",uid:A.userData.uid}}),ea(8);const I=me();d.current.drag={uid:A.userData.uid,grp:A,offX:I?I.x-A.position.x:0,offZ:I?I.z-A.position.z:0},(b=ye.setPointerCapture)==null||b.call(ye,pe.pointerId)}else d.current.pending={x:pe.clientX,y:pe.clientY}},Be=pe=>{re(pe);const ce=d.current;if(ce.rotate){const Se=me();if(!Se)return;const qe=Math.atan2(Se.z-ce.rotate.cz,Se.x-ce.rotate.cx);let Oe=ce.rotate.startRot+(qe-ce.rotate.startAng)*180/Math.PI;Oe=(Math.round(Oe)%360+360)%360,h.current.dispatch({type:"update",sel:{type:"item",uid:ce.rotate.uid},patch:{rot:Oe},mergeKey:`rot3d:${ce.rotate.uid}`});return}if(ce.drag){const Se=me();if(!Se)return;h.current.dispatch({type:"update",sel:{type:"item",uid:ce.drag.uid},patch:{x:ng(Se.x-ce.drag.offX,.05),z:ng(Se.z-ce.drag.offZ,.05)},mergeKey:`mv3d:${ce.drag.uid}`})}},je=pe=>{var Se;const ce=d.current;ce.drag||ce.rotate?(ce.drag=null,ce.rotate=null,w.enabled=!0):ce.pending&&(Math.hypot(pe.clientX-ce.pending.x,pe.clientY-ce.pending.y)<5&&h.current.dispatch({type:"select",sel:null}),ce.pending=null);try{(Se=ye.releasePointerCapture)==null||Se.call(ye,pe.pointerId)}catch{}};ye.addEventListener("pointerdown",Pe,!0),ye.addEventListener("pointermove",Be),window.addEventListener("pointerup",je);let He;const F=()=>{w.update();const pe=C.position;for(const ce of d.current.walls){const Se=(pe.x-ce.center.x)*ce.normal.x+(pe.z-ce.center.z)*ce.normal.z;!ce.hidden&&Se>.1?ce.hidden=!0:ce.hidden&&Se<-.1&&(ce.hidden=!1),ce.mesh.visible=!ce.hidden}V?V.render():p.render(g,C),He=requestAnimationFrame(F)};F();const pt=new ResizeObserver(()=>{const pe=y.clientWidth,ce=y.clientHeight;p.setSize(pe,ce),C.aspect=pe/ce,C.updateProjectionMatrix(),V==null||V.setSize(pe,ce)});return pt.observe(y),()=>{var pe;cancelAnimationFrame(He),pt.disconnect(),ye.removeEventListener("pointerdown",Pe,!0),ye.removeEventListener("pointermove",Be),window.removeEventListener("pointerup",je),w.dispose(),Or(K),Or(ee),Or(z),ie.geometry.dispose(),ie.material.dispose(),d.current.woodCache.forEach(ce=>ce.dispose()),d.current.imgCache.forEach(ce=>ce.dispose()),d.current.roomTexList.forEach(ce=>ce.dispose()),(pe=V==null?void 0:V.dispose)==null||pe.call(V),M.dispose(),p.dispose(),p.domElement.parentNode===y&&y.removeChild(p.domElement)}},[]),Re.useEffect(()=>{const y=d.current;if(!y.renderer)return;const v=tg[a]||tg.day;y.scene.background.set(v.bg),y.scene.environmentIntensity=v.env,y.renderer.toneMappingExposure=v.exposure,y.key.color.set(v.key[0]),y.key.intensity=v.key[1],y.fill.color.set(v.fill[0]),y.fill.intensity=v.fill[1],y.hemi.intensity=v.hemi,y.ambient.intensity=v.amb},[a]),Re.useEffect(()=>{const y=d.current;if(!y.roomGroup)return;Or(y.roomGroup),y.roomGroup.clear(),y.walls=[],y.roomTexList.forEach(M=>M.dispose()),y.roomTexList=[];const v=new _n({color:"#cfc7ba",roughness:.8}),u=new _n({color:"#e8e3da",roughness:.95,side:Nn}),p=.1,g=(M,C,w,T,L,B,S,E,V,W)=>{const Z=new Je(new an(C,w,T),M);Z.position.set(L,B,S),Z.castShadow=!0,Z.receiveShadow=!0,y.roomGroup.add(Z),y.walls.push({mesh:Z,normal:new j(E,0,V),center:new j(L,0,S),hidden:!1})};for(const M of n){const{x:C,z:w,w:T,d:L,height:B}=M,S=C+T/2,E=w+L/2,V=M.floorTex||(M.floorColor?void 0:"wood:oak"),W=m(V,M.floorColor,"#b08a5e",T/1.5,L/1.5,{roughness:.65,metalness:.02}),Z=new Je(new as(T,L),W);Z.rotation.x=-Math.PI/2,Z.position.set(S,0,E),Z.receiveShadow=!0,y.roomGroup.add(Z);const ne=m(M.wallTex,M.wallColor,"#e8e3da",T/1.2,B/1.2,{roughness:.95,side:Nn}),K=z=>!M.wallsOn||M.wallsOn[z]!==!1,ee=(z,ie,Q)=>{const le=new Je(z,v);le.position.set(ie,.045,Q),y.roomGroup.add(le)};K("n")&&(g(ne,T+p,B,p,S,B/2,w,0,-1),ee(new an(T-p,.09,.04),S,w+p/2+.02)),K("s")&&(g(ne,T+p,B,p,S,B/2,w+L,0,1),ee(new an(T-p,.09,.04),S,w+L-p/2-.02)),K("w")&&(g(ne,p,B,L+p,C,B/2,E,-1,0),ee(new an(.04,.09,L-p),C+p/2+.02,E)),K("e")&&(g(ne,p,B,L+p,C+T,B/2,E,1,0),ee(new an(.04,.09,L-p),C+T-p/2-.02,E))}for(const M of i){const C=Math.hypot(M.x2-M.x1,M.z2-M.z1);if(C<.001)continue;const w=new Je(new an(C,M.height,M.thickness),u);w.position.set((M.x1+M.x2)/2,M.height/2,(M.z1+M.z2)/2),w.rotation.y=-Math.atan2(M.z2-M.z1,M.x2-M.x1),w.castShadow=!0,w.receiveShadow=!0,y.roomGroup.add(w)}!y.framed&&(n.length||i.length||r.length)&&(_(),y.framed=!0)},[n,i,l]),Re.useEffect(()=>{const y=d.current;if(!y.furnitureGroup)return;const v=y.itemMap,u=new Set;for(const g of r){u.add(g.uid);let M=v.get(g.uid);if(!M||M.type!==g.type||M.color!==g.color){M&&(y.furnitureGroup.remove(M.group),Or(M.group));const w=gb(g);y.furnitureGroup.add(w),M={group:w,type:g.type,color:g.color},v.set(g.uid,M)}M.group.position.set(g.x,0,g.z),M.group.rotation.y=-((g.rot||0)*Math.PI)/180;const C=g.scale||{};M.group.scale.set(C.x??1,C.y??1,C.z??1)}for(const[g,M]of v)u.has(g)||(y.furnitureGroup.remove(M.group),Or(M.group),v.delete(g));const p=(o==null?void 0:o.type)==="item"?r.find(g=>g.uid===o.uid):null;if(p){const g=xi[p.type],M=Vr(g,p),C=Math.max(M.w,M.d)/2*1.18+.12;y.ring.scale.setScalar(C/.5),y.ring.position.set(p.x,.03,p.z),y.ring.visible=!0,y.gizmo.scale.setScalar(C/.5),y.gizmo.position.set(p.x,.04,p.z),y.gizmo.visible=!0}else y.ring.visible=!1,y.gizmo.visible=!1},[r,o]),Re.useEffect(()=>{const y=d.current;if(!y.builtinGroup)return;Or(y.builtinGroup),y.builtinGroup.clear();const v=.03;for(const u of s){const p=Xf(u.wall,n,i);if(!p)continue;const g=f(u.tex),M=g?new _n({map:g,roughness:.6,metalness:.04}):new _n({color:new Ve(u.color||"#c7ad84"),roughness:.62,metalness:.04});if(u.kind==="board"){const V=(u.u1+u.u2)/2,W=(u.v1+u.v2)/2,Z=u.u2-u.u1,ne=u.v2-u.v1,K=Math.hypot(Z,ne)||1e-6,ee=Z/K,z=ne/K,ie=new j(p.dirx*ee,z,p.dirz*ee),Q=new j(-p.dirx*z,ee,-p.dirz*z),le=new j(p.nx,0,p.nz),we=new rt().makeBasis(ie,Q,le);we.setPosition(p.ox+p.dirx*V+p.nx*(u.depth/2),W,p.oz+p.dirz*V+p.nz*(u.depth/2));const ye=new Je(new an(K,u.thickness||.05,u.depth||.04),M);ye.castShadow=!0,ye.receiveShadow=!0,ye.matrixAutoUpdate=!1,ye.matrix.copy(we),y.builtinGroup.add(ye);continue}const C=new rt,w=new j(p.dirx,0,p.dirz),T=new j(0,1,0),L=new j(p.nx,0,p.nz);C.makeBasis(w,T,L);const B=u.u+u.w/2;C.setPosition(p.ox+p.dirx*B+p.nx*(u.depth/2),u.v+u.h/2,p.oz+p.dirz*B+p.nz*(u.depth/2));const S=new hi;S.matrixAutoUpdate=!1,S.matrix.copy(C);const E=(V,W,Z,ne,K,ee)=>{const z=new Je(new an(V,W,Z),M);z.position.set(ne,K,ee),z.castShadow=!0,z.receiveShadow=!0,S.add(z)};u.kind==="cubby"?(E(u.w,u.h,v,0,0,-u.depth/2+v/2),E(u.w,v,u.depth,0,u.h/2-v/2,0),E(u.w,v,u.depth,0,-u.h/2+v/2,0),E(v,u.h,u.depth,-u.w/2+v/2,0,0),E(v,u.h,u.depth,u.w/2-v/2,0,0)):E(u.w,u.h,u.depth,0,0,0),y.builtinGroup.add(S)}},[s,n,i,l]);function _(){const y=d.current;if(!y.camera)return;const{rooms:v,walls:u,items:p}=h.current;let g=1/0,M=-1/0,C=1/0,w=-1/0,T=2.7;const L=(W,Z)=>{g=Math.min(g,W),M=Math.max(M,W),C=Math.min(C,Z),w=Math.max(w,Z)};for(const W of v)L(W.x,W.z),L(W.x+W.w,W.z+W.d),T=Math.max(T,W.height);for(const W of u)L(W.x1,W.z1),L(W.x2,W.z2),T=Math.max(T,W.height);for(const W of p)L(W.x,W.z);isFinite(g)||(g=-2,M=2,C=-2,w=2);const B=(g+M)/2,S=(C+w)/2,E=Math.max(M-g,w-C,2),V=E*1.1+4;y.camera.position.set(B+E*.45,E*.8+3,S+V),y.controls.target.set(B,T*.3,S),y.controls.update()}return x.jsx("div",{className:"scene3d",ref:c,children:x.jsx("button",{className:"recenter",onClick:_,"aria-label":"Recenter view",children:x.jsx(jf,{size:20})})})}function ri({icon:t,label:e,active:n,accent:i,onClick:r}){return x.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,x.jsx("span",{children:e})]})}function yb({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=Ki(),{view:r,tool:s,sideTool:o,ambiance:a}=n;return x.jsxs("aside",{className:"rail",children:[x.jsxs("div",{className:"rail-group",children:[r==="2d"&&x.jsxs(x.Fragment,{children:[x.jsx(ri,{icon:x.jsx(Om,{size:20}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),x.jsx(ri,{icon:x.jsx(zm,{size:20}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),x.jsx(ri,{icon:x.jsx(km,{size:20}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})}),x.jsx(ri,{icon:x.jsx(fM,{size:20}),label:"Sketch",active:s==="sketch",onClick:()=>i({type:"tool",tool:"sketch"})})]}),r==="side"&&x.jsxs(x.Fragment,{children:[x.jsx(ri,{icon:x.jsx(Om,{size:20}),label:"Select",active:o==="select",onClick:()=>i({type:"sideTool",tool:"select"})}),x.jsx(ri,{icon:x.jsx(zm,{size:20}),label:"Box",active:o==="box",onClick:()=>i({type:"sideTool",tool:"box"})}),x.jsx(ri,{icon:x.jsx(km,{size:20}),label:"Board",active:o==="board",onClick:()=>i({type:"sideTool",tool:"board"})}),x.jsx(ri,{icon:x.jsx(aM,{size:20}),label:"Presets",active:e==="presets",onClick:()=>t("presets")})]}),r==="3d"&&x.jsx(x.Fragment,{children:["day","dusk","night"].map(l=>x.jsx(ri,{icon:x.jsx(uM,{size:20}),label:l[0].toUpperCase()+l.slice(1),active:a===l,onClick:()=>i({type:"ambiance",value:l})},l))})]}),x.jsxs("div",{className:"rail-group bottom",children:[x.jsx(ri,{icon:x.jsx(iM,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),x.jsx(ri,{icon:x.jsx(sM,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}function Sb({item:t}){const e={w:86,h:60},n=t.w/t.d;let i=e.w,r=i/n;return r>e.h&&(r=e.h,i=r*n),x.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:x.jsx(_x,{item:t,wpx:i,dpx:r})})}function Mb({onPick:t}){const{state:e}=Ki(),{units:n}=e,[i,r]=Re.useState("All"),s=["All",...WS],o=Re.useMemo(()=>i==="All"?Il:Il.filter(a=>a.category===i),[i]);return x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"sheet-head",children:x.jsxs("div",{children:[x.jsx("h2",{children:"Furniture"}),x.jsxs("div",{className:"sub",children:[Il.length," premium pieces · tap to place"]})]})}),x.jsx("div",{className:"cats",children:s.map(a=>x.jsx("button",{className:`chip ${i===a?"active":""}`,onClick:()=>r(a),children:a},a))}),x.jsx("div",{className:"grid",children:o.map(a=>x.jsxs("button",{className:"card",onClick:()=>t(a.type),children:[x.jsx("div",{className:"thumb",children:x.jsx(Sb,{item:a})}),x.jsx("div",{className:"name",children:a.name}),x.jsxs("div",{className:"dim",children:[Ke(a.w,n)," × ",Ke(a.d,n)]})]},a.type))})]})}const wb=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function Oo({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=vp(),s=Re.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var f;const d=(f=c.target.files)==null?void 0:f[0];if(c.target.value="",!d)return;const h=await r(d);e({color:"#ffffff",tex:`img:${h.id}`})};return x.jsxs("div",{className:"finish",children:[x.jsxs("div",{className:"finish-row",children:[jS.map(c=>x.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),x.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:x.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"finish-label",children:"Wood"}),x.jsx("div",{className:"finish-row",children:wb.map(c=>x.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),x.jsx("div",{className:"finish-label",children:"Your images"}),x.jsxs("div",{className:"finish-row",children:[i.map(c=>x.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),x.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),x.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Ii({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:t}),x.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),x.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function cd({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=h=>Math.max(n,Math.min(i,h)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,d=(h,f)=>s(o((h*12+f)*.0254));return x.jsxs("div",{className:"row measure-row",children:[x.jsxs("div",{className:"measure-head",children:[x.jsx("div",{className:"label",children:t}),x.jsx("div",{className:"measure-inputs",children:r==="ft"?x.jsxs(x.Fragment,{children:[x.jsx("input",{type:"number",value:l,min:0,step:1,onChange:h=>d(Math.max(0,Math.floor(Number(h.target.value)||0)),c)}),x.jsx("span",{className:"u",children:"ft"}),x.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:h=>d(l,Number(h.target.value)||0)}),x.jsx("span",{className:"u",children:"in"})]}):x.jsxs(x.Fragment,{children:[x.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:h=>s(o(Number(h.target.value)||n))}),x.jsx("span",{className:"u",children:"m"})]})})]}),x.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:h=>s(Number(h.target.value))})]})}function Eb({onClose:t,onFlash:e}){const{state:n,dispatch:i}=Ki(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c,sketches:d}=n;if(!r)return null;const h=r,f=(u,p)=>i({type:"update",sel:h,patch:u,mergeKey:p}),m=()=>{i({type:"remove",sel:h}),e==null||e("Removed"),t()},_=()=>{i({type:"duplicate",sel:h}),e==null||e("Duplicated"),t()};if(h.type==="roomwall"){const u=a.find(C=>C.uid===h.uid);if(!u)return null;const p={n:"North",e:"East",s:"South",w:"West"},g=!u.wallsOn||u.wallsOn[h.side]!==!1,M=()=>i({type:"update",sel:{type:"room",uid:u.uid},patch:{wallsOn:{...u.wallsOn||{},[h.side]:!g}}});return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:"Wall section",sub:`${p[h.side]} wall of this room`}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Status"}),x.jsx("div",{className:"val",children:g?"Closed":"Open (doorway)"})]}),x.jsx("div",{className:"btn-row",children:g?x.jsxs("button",{className:"btn danger",onClick:M,children:[x.jsx(Rr,{size:18})," Remove wall"]}):x.jsx("button",{className:"btn accent",onClick:M,children:"Add wall back"})})]})]})}if(h.type==="item"){const u=o.find(w=>w.uid===h.uid),p=u&&xi[u.type];if(!u||!p)return null;const g=Vr(p,u),M=u.scale||{},C=Math.round(((M.x??1)+(M.z??1))/2*100);return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:p.name,sub:`${Ke(g.w,s)} × ${Ke(g.d,s)} × ${Ke(g.h,s)}`,onClose:t}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"Colour"}),x.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:x.jsx(Oo,{value:{color:u.color||p.color},allowTexture:!1,onChange:w=>f({color:w.color})})})]}),x.jsx(Ii,{label:"Size",value:C,min:30,max:300,step:1,onChange:w=>f({scale:{x:w/100,y:w/100,z:w/100}},`sz:${u.uid}`),display:`${C}%`}),x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Footprint"}),x.jsxs("div",{className:"val",children:[Ke(g.w,s)," × ",Ke(g.d,s)]})]}),x.jsx(Ii,{label:"Rotation",value:u.rot||0,min:0,max:359,step:1,onChange:w=>f({rot:w},`rot:${u.uid}`),display:`${Math.round(u.rot||0)}°`}),x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Quick turn"}),x.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(w=>x.jsxs("button",{className:"chip",style:(u.rot||0)===w?ud:void 0,onClick:()=>f({rot:w}),children:[w,"°"]},w))})]}),x.jsxs("div",{className:"btn-row",children:[x.jsxs("button",{className:"btn",onClick:()=>f({rot:((u.rot||0)+90)%360}),children:[x.jsx(rM,{size:18})," Rotate"]}),x.jsxs("button",{className:"btn",onClick:_,children:[x.jsx(gs,{size:18})," Duplicate"]})]}),x.jsxs("div",{className:"btn-row",children:[x.jsx("button",{className:"btn",onClick:()=>f({scale:{x:1,y:1,z:1}}),children:"Reset size"}),x.jsxs("button",{className:"btn danger",onClick:m,children:[x.jsx(Rr,{size:18})," Delete"]})]})]})]})}if(h.type==="room"){const u=a.find(g=>g.uid===h.uid);if(!u)return null;const p=u.w*u.d;return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:"Room",sub:`${Ke(u.w,s)} × ${Ke(u.d,s)}`,onClose:t}),x.jsxs("div",{className:"insp",children:[x.jsx(cd,{label:"Width",m:u.w,min:.5,max:40,units:s,onChange:g=>f({w:g},`rw:${u.uid}`)}),x.jsx(cd,{label:"Depth",m:u.d,min:.5,max:40,units:s,onChange:g=>f({d:g},`rd:${u.uid}`)}),x.jsx(cd,{label:"Wall height",m:u.height,min:1.5,max:6,units:s,onChange:g=>f({height:g},`rh:${u.uid}`)}),x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Floor area"}),x.jsx("div",{className:"val",children:s==="m"?`${p.toFixed(1)} m²`:`${Math.round(p*10.7639)} ft²`})]}),x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Wall sides"}),x.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([g,M])=>{const C=!u.wallsOn||u.wallsOn[g]!==!1;return x.jsx("button",{className:"chip",style:C?ud:void 0,onClick:()=>f({wallsOn:{...u.wallsOn||{},[g]:!C}}),children:M},g)})})]}),x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"Flooring"}),x.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:x.jsx(Oo,{value:{color:u.floorColor,tex:u.floorTex},onChange:g=>f({floorColor:g.color,floorTex:g.tex})})})]}),x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"Wall finish"}),x.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:x.jsx(Oo,{value:{color:u.wallColor,tex:u.wallTex},onChange:g=>f({wallColor:g.color,wallTex:g.tex})})})]}),x.jsxs("div",{className:"btn-row",children:[x.jsxs("button",{className:"btn",onClick:_,children:[x.jsx(gs,{size:18})," Duplicate"]}),x.jsxs("button",{className:"btn danger",onClick:m,children:[x.jsx(Rr,{size:18})," Delete"]})]})]})]})}if(h.type==="builtin"){const u=c.find(p=>p.uid===h.uid);if(!u)return null;if(u.kind==="board"){const p=Math.hypot(u.u2-u.u1,u.v2-u.v1);return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:"Board",sub:`${Ke(p,s)} long`,onClose:t}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Length"}),x.jsx("div",{className:"val",children:Ke(p,s)})]}),x.jsx(Ii,{label:"Width",value:u.thickness,min:.01,max:.4,step:.005,onChange:g=>f({thickness:g},`bt:${u.uid}`),display:Ke(u.thickness,s)}),x.jsx(Ii,{label:"Depth",value:u.depth,min:.02,max:.6,step:.01,onChange:g=>f({depth:g},`bd:${u.uid}`),display:Ke(u.depth,s)}),x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"Finish"}),x.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:x.jsx(Oo,{value:{color:u.color,tex:u.tex},onChange:g=>f({color:g.color,tex:g.tex})})})]}),x.jsxs("div",{className:"btn-row",children:[x.jsxs("button",{className:"btn",onClick:_,children:[x.jsx(gs,{size:18})," Duplicate"]}),x.jsxs("button",{className:"btn danger",onClick:m,children:[x.jsx(Rr,{size:18})," Delete"]})]})]})]})}return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:"Built-in",sub:`${Ke(u.w,s)} × ${Ke(u.h,s)} × ${Ke(u.depth,s)} deep`,onClose:t}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Style"}),x.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([p,g])=>x.jsx("button",{className:"chip",style:u.kind===p?ud:void 0,onClick:()=>f({kind:p}),children:g},p))})]}),x.jsx(Ii,{label:"Width",value:u.w,min:.1,max:12,step:.05,onChange:p=>f({w:p},`bw:${u.uid}`),display:Ke(u.w,s)}),x.jsx(Ii,{label:"Height",value:u.h,min:.1,max:6,step:.05,onChange:p=>f({h:p},`bh:${u.uid}`),display:Ke(u.h,s)}),x.jsx(Ii,{label:"Depth",value:u.depth,min:.05,max:3,step:.05,onChange:p=>f({depth:p},`bd:${u.uid}`),display:Ke(u.depth,s)}),x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"Finish"}),x.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:x.jsx(Oo,{value:{color:u.color,tex:u.tex},onChange:p=>f({color:p.color,tex:p.tex})})})]}),x.jsxs("div",{className:"btn-row",children:[x.jsxs("button",{className:"btn",onClick:_,children:[x.jsx(gs,{size:18})," Duplicate"]}),x.jsxs("button",{className:"btn danger",onClick:m,children:[x.jsx(Rr,{size:18})," Delete"]})]})]})]})}if(h.type==="sketch"){const u=d.find(w=>w.uid===h.uid);if(!u)return null;const p=u.pts,g=u.closed?p.length:p.length-1;let M=0;for(let w=0;w<g;w++){const T=p[w],L=p[(w+1)%p.length];M+=Math.hypot(L.x-T.x,L.z-T.z)}let C=0;if(u.closed&&p.length>=3){for(let w=0,T=p.length-1;w<p.length;T=w++)C+=(p[T].x+p[w].x)*(p[T].z-p[w].z);C=Math.abs(C/2)}return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:"Sketch",sub:`${u.closed?"Closed shape":"Open outline"} · ${p.length} points`,onClose:t}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Perimeter"}),x.jsx("div",{className:"val",children:Ke(M,s)})]}),u.closed&&x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Area"}),x.jsx("div",{className:"val",children:eM(C,s)})]}),x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"Edges"}),x.jsx("div",{className:"val",style:{marginLeft:"auto",textAlign:"right",lineHeight:1.6},children:Array.from({length:g},(w,T)=>{const L=p[T],B=p[(T+1)%p.length];return x.jsx("div",{children:Ke(Math.hypot(B.x-L.x,B.z-L.z),s)},T)})})]}),x.jsxs("div",{className:"btn-row",children:[x.jsxs("button",{className:"btn",onClick:_,children:[x.jsx(gs,{size:18})," Duplicate"]}),x.jsxs("button",{className:"btn danger",onClick:m,children:[x.jsx(Rr,{size:18})," Delete"]})]})]})]})}const y=l.find(u=>u.uid===h.uid);if(!y)return null;const v=Math.hypot(y.x2-y.x1,y.z2-y.z1);return x.jsxs(x.Fragment,{children:[x.jsx(zr,{title:"Wall",sub:`${Ke(v,s)} long`,onClose:t}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Length"}),x.jsx("div",{className:"val",children:Ke(v,s)})]}),x.jsx(Ii,{label:"Height",value:y.height,min:1.5,max:6,step:.1,onChange:u=>f({height:u},`wh:${y.uid}`),display:Ke(y.height,s)}),x.jsx(Ii,{label:"Thickness",value:y.thickness,min:.05,max:.4,step:.01,onChange:u=>f({thickness:u},`wt:${y.uid}`),display:Ke(y.thickness,s)}),x.jsxs("div",{className:"btn-row",children:[x.jsxs("button",{className:"btn",onClick:_,children:[x.jsx(gs,{size:18})," Duplicate"]}),x.jsxs("button",{className:"btn danger",onClick:m,children:[x.jsx(Rr,{size:18})," Delete"]})]})]})]})}const ud={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function zr({title:t,sub:e}){return x.jsx("div",{className:"sheet-head",children:x.jsxs("div",{children:[x.jsx("h2",{children:t}),x.jsx("div",{className:"sub",children:e})]})})}function Tb({onFlash:t,onClose:e}){const{state:n,dispatch:i}=Ki(),{units:r,defaultHeight:s,rooms:o,walls:a,items:l}=n,{assets:c,addAsset:d,removeAsset:h}=vp(),f=Re.useRef(null),m=async _=>{const y=[..._.target.files||[]];_.target.value="";for(const v of y)await d(v);y.length&&(t==null||t("Image added"))};return x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"sheet-head",children:x.jsxs("div",{children:[x.jsx("h2",{children:"Settings"}),x.jsxs("div",{className:"sub",children:[o.length," rooms · ",a.length," walls · ",l.length," items"]})]})}),x.jsxs("div",{className:"insp",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"Units"}),x.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([_,y])=>x.jsx("button",{className:"chip",style:r===_?Ab:void 0,onClick:()=>i({type:"units",value:_}),children:y},_))})]}),x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"label",children:"New wall height"}),x.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:s,onChange:_=>i({type:"defaultHeight",value:Number(_.target.value)})}),x.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:Ke(s,r)})]}),x.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:x.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),x.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[x.jsx("div",{className:"label",children:"My images"}),x.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[c.map(_=>x.jsxs("div",{className:"asset-tile",children:[x.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${_.dataUrl})`}}),x.jsx("button",{className:"asset-del",onClick:()=>h(_.id),"aria-label":"Delete image",children:"×"})]},_.id)),x.jsx("button",{className:"swatch upload",onClick:()=>{var _;return(_=f.current)==null?void 0:_.click()},"aria-label":"Upload image",children:"+"}),x.jsx("input",{ref:f,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:m})]})]}),x.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:x.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),x.jsxs("div",{className:"btn-row",children:[x.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),x.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const Ab={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function bb({onClose:t,onFlash:e}){var h,f,m;const{state:n,dispatch:i}=Ki(),{rooms:r,walls:s,sideWall:o}=n,a=Mx(r,s),l=o&&((h=a.find(_=>ta(_.ref,o)))==null?void 0:h.ref)||((f=a[0])==null?void 0:f.ref),c=l?Xf(l,r,s):null,d=l?(m=a.find(_=>ta(_.ref,l)))==null?void 0:m.label:null;return x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"sheet-head",children:x.jsxs("div",{children:[x.jsx("h2",{children:"Presets"}),x.jsx("div",{className:"sub",children:c?`Drop a kit onto ${d}`:"Draw a room or wall first"})]})}),x.jsxs("div",{className:"insp",children:[!c&&x.jsx("div",{className:"panel-empty",children:"Go to the Plan view and draw a room or wall, then come back to drop in cabinetry, a bunk bed and more."}),c&&x.jsx("div",{className:"preset-list",children:wM.map(_=>x.jsx("button",{className:"preset-card",onClick:()=>{i({type:"addBuiltins",list:EM(_.id,c,l)}),e==null||e(`Added ${_.name}`),t()},children:_.name},_.id))})]})]})}function Cb({kind:t,onClose:e,onFlash:n,onPick:i}){return x.jsxs("aside",{className:"panel",children:[x.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:x.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:x.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),x.jsxs("div",{className:"panel-body",children:[t==="catalog"&&x.jsx(Mb,{onPick:i}),t==="settings"&&x.jsx(Tb,{onFlash:n,onClose:e}),t==="inspector"&&x.jsx(Eb,{onClose:e,onFlash:n}),t==="presets"&&x.jsx(bb,{onClose:e,onFlash:n})]})]})}function Rb(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=Ki(),{view:r,selected:s,rooms:o}=t,[a,l]=Re.useState(null),[c,d]=Re.useState(null),h=Re.useCallback(g=>d({msg:g,t:Date.now()}),[]);Re.useEffect(()=>{if(!c)return;const g=setTimeout(()=>d(null),1600);return()=>clearTimeout(g)},[c]);const f=a||(s?"inspector":null),m=g=>e({type:"view",view:g}),_=g=>l(M=>M===g?null:g),y=()=>{l(null),e({type:"select",sel:null})},v=()=>{e({type:"reset"}),l(null),h("New design — undo to restore")},u=g=>{let M=0,C=0;const w=(s==null?void 0:s.type)==="room"&&o.find(T=>T.uid===s.uid);if(w)M=w.x+w.w/2,C=w.z+w.d/2;else if(o.length){const T=o[o.length-1];M=T.x+T.w/2,C=T.z+T.d/2}e({type:"addItem",kind:g,x:M,z:C}),ea(10),h("Added — drag to position")},p=async()=>{try{let g;if(r==="3d"){const M=document.querySelector(".scene3d canvas");if(!M)return;g=M.toDataURL("image/png")}else{const M=document.querySelector(".editor2d svg");if(!M)return;g=await Pb(M)}await Lb(g,`honeycutt-room-${Date.now()}.png`),h("Image saved")}catch{h("Could not export")}};return x.jsxs("div",{className:"app",children:[x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"brand",children:[x.jsx("div",{className:"logo",children:x.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("path",{d:"M3 11 12 4l9 7"}),x.jsx("path",{d:"M5 10v9h14v-9"})]})}),x.jsxs("div",{className:"title",children:[x.jsx("b",{children:"Honeycutt"}),x.jsx("span",{children:"Room Studio"})]})]}),x.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[x.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>m("2d"),"aria-pressed":r==="2d",children:[x.jsx(tM,{size:15})," Plan"]}),x.jsxs("button",{className:r==="side"?"active":"",onClick:()=>m("side"),"aria-pressed":r==="side",children:[x.jsx(dM,{size:15})," Side"]}),x.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>m("3d"),"aria-pressed":r==="3d",children:[x.jsx(nM,{size:15})," 3D"]})]}),x.jsxs("div",{className:"tools",children:[x.jsx("button",{className:"tool",onClick:v,"aria-label":"New design",children:x.jsx(hM,{size:18})}),x.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:x.jsx(yx,{size:18})}),x.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:x.jsx(lM,{size:18})}),x.jsx("button",{className:"tool",onClick:p,"aria-label":"Export image",children:x.jsx(cM,{size:18})})]})]}),x.jsxs("div",{className:"body",children:[x.jsx(yb,{onOpen:_,activePanel:f}),x.jsx("main",{className:"stage",children:r==="2d"?x.jsx(_M,{}):r==="side"?x.jsx(TM,{}):x.jsx(_b,{})}),f&&x.jsx("div",{className:"panel-scrim",onClick:y}),f&&x.jsx(Cb,{kind:f,onClose:y,onFlash:h,onPick:u})]}),c&&x.jsx("div",{className:"toast",children:c.msg},c.t)]})}function Pb(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const d=document.createElement("canvas");d.width=r*o,d.height=s*o;const h=d.getContext("2d");h.fillStyle="#ffffff",h.fillRect(0,0,d.width,d.height),h.drawImage(c,0,0,d.width,d.height),e(d.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function Lb(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}dd.createRoot(document.getElementById("root")).render(x.jsx(D_.StrictMode,{children:x.jsx(mb,{children:x.jsx(JS,{children:x.jsx(Rb,{})})})}));
