(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function p_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tg={exports:{}},_c={},ng={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),x_=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),y_=Symbol.for("react.context"),S_=Symbol.for("react.forward_ref"),M_=Symbol.for("react.suspense"),w_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),Ep=Symbol.iterator;function T_(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rg=Object.assign,sg={};function po(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=po.prototype;function qh(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}var Kh=qh.prototype=new og;Kh.constructor=qh;rg(Kh,po.prototype);Kh.isPureReactComponent=!0;var Tp=Array.isArray,ag=Object.prototype.hasOwnProperty,Zh={current:null},lg={key:!0,ref:!0,__self:!0,__source:!0};function cg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,i)&&!lg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:s,ref:o,props:r,_owner:Zh.current}}function A_(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function b_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ap=/\/+/g;function qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b_(""+t.key):e.toString(36)}function Sl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case m_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+qc(o,0):i,Tp(r)?(n="",t!=null&&(n=t.replace(Ap,"$&/")+"/"),Sl(r,e,n,"",function(c){return c})):r!=null&&(Qh(r)&&(r=A_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ap,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+qc(s,a);o+=Sl(s,e,n,l,r)}else if(l=T_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+qc(s,a++),o+=Sl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var i=[],r=0;return Sl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function C_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Ml={transition:null},R_={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:Zh};function ug(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!Qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=po;Qe.Fragment=g_;Qe.Profiler=x_;Qe.PureComponent=qh;Qe.StrictMode=v_;Qe.Suspense=M_;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;Qe.act=ug;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ag.call(e,l)&&!lg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:__,_context:t},t.Consumer=t};Qe.createElement=cg;Qe.createFactory=function(t){var e=cg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:S_,render:t}};Qe.isValidElement=Qh;Qe.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:C_}};Qe.memo=function(t,e){return{$$typeof:w_,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};Qe.unstable_act=ug;Qe.useCallback=function(t,e){return un.current.useCallback(t,e)};Qe.useContext=function(t){return un.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return un.current.useEffect(t,e)};Qe.useId=function(){return un.current.useId()};Qe.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return un.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Qe.useRef=function(t){return un.current.useRef(t)};Qe.useState=function(t){return un.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return un.current.useTransition()};Qe.version="18.3.1";ng.exports=Qe;var De=ng.exports;const P_=p_(De);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_=De,L_=Symbol.for("react.element"),N_=Symbol.for("react.fragment"),I_=Object.prototype.hasOwnProperty,U_=D_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O_={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)I_.call(e,i)&&!O_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:L_,type:t,key:s,ref:o,props:r,_owner:U_.current}}_c.Fragment=N_;_c.jsx=dg;_c.jsxs=dg;tg.exports=_c;var _=tg.exports,cd={},hg={exports:{}},zn={},fg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Z){var ne=L.length;L.push(Z);e:for(;0<ne;){var he=ne-1>>>1,Me=L[he];if(0<r(Me,Z))L[he]=Z,L[ne]=Me,ne=he;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Z=L[0],ne=L.pop();if(ne!==Z){L[0]=ne;e:for(var he=0,Me=L.length,we=Me>>>1;he<we;){var ie=2*(he+1)-1,re=L[ie],me=ie+1,ge=L[me];if(0>r(re,ne))me<Me&&0>r(ge,re)?(L[he]=ge,L[me]=ne,he=me):(L[he]=re,L[ie]=ne,he=ie);else if(me<Me&&0>r(ge,ne))L[he]=ge,L[me]=ne,he=me;else break e}}return Z}function r(L,Z){var ne=L.sortIndex-Z.sortIndex;return ne!==0?ne:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,g=!1,x=!1,y=!1,h=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=L)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function M(L){if(y=!1,v(L),!x)if(n(l)!==null)x=!0,Y(C);else{var Z=n(c);Z!==null&&ce(M,Z.startTime-L)}}function C(L,Z){x=!1,y&&(y=!1,u(D),D=-1),g=!0;var ne=p;try{for(v(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||L&&!E());){var he=f.callback;if(typeof he=="function"){f.callback=null,p=f.priorityLevel;var Me=he(f.expirationTime<=Z);Z=t.unstable_now(),typeof Me=="function"?f.callback=Me:f===n(l)&&i(l),v(Z)}else i(l);f=n(l)}if(f!==null)var we=!0;else{var ie=n(c);ie!==null&&ce(M,ie.startTime-Z),we=!1}return we}finally{f=null,p=ne,g=!1}}var b=!1,A=null,D=-1,z=5,S=-1;function E(){return!(t.unstable_now()-S<z)}function U(){if(A!==null){var L=t.unstable_now();S=L;var Z=!0;try{Z=A(!0,L)}finally{Z?B():(b=!1,A=null)}}else b=!1}var B;if(typeof m=="function")B=function(){m(U)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,X=K.port2;K.port1.onmessage=U,B=function(){X.postMessage(null)}}else B=function(){h(U,0)};function Y(L){A=L,b||(b=!0,B())}function ce(L,Z){D=h(function(){L(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,Y(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var ne=p;p=Z;try{return L()}finally{p=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ne=p;p=L;try{return Z()}finally{p=ne}},t.unstable_scheduleCallback=function(L,Z,ne){var he=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?he+ne:he):ne=he,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=ne+Me,L={id:d++,callback:Z,priorityLevel:L,startTime:ne,expirationTime:Me,sortIndex:-1},ne>he?(L.sortIndex=ne,e(c,L),n(l)===null&&L===n(c)&&(y?(u(D),D=-1):y=!0,ce(M,ne-he))):(L.sortIndex=Me,e(l,L),x||g||(x=!0,Y(C))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var Z=p;return function(){var ne=p;p=Z;try{return L.apply(this,arguments)}finally{p=ne}}}})(pg);fg.exports=pg;var F_=fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=De,Fn=F_;function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mg=new Set,ta={};function as(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(ta[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,k_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Cp={};function B_(t){return ud.call(Cp,t)?!0:ud.call(bp,t)?!1:k_.test(t)?Cp[t]=!0:(bp[t]=!0,!1)}function H_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V_(t,e,n,i){if(e===null||typeof e>"u"||H_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jh,$h);Kt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jh,$h);Kt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jh,$h);Kt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V_(e,n,r,i)&&(n=null),i||r===null?B_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),xg=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Kc;function Fo(t){if(Kc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kc=e&&e[1]||""}return`
`+Kc+t}var Zc=!1;function Qc(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function G_(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=Qc(t.type,!1),t;case 11:return t=Qc(t.type.render,!1),t;case 1:return t=Qc(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ls:return"Portal";case dd:return"Profiler";case tf:return"StrictMode";case hd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vg:return(t.displayName||"Context")+".Consumer";case gg:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function W_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j_(t){var e=_g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=j_(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function gd(t,e){Sg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(zo(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Mg(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,Eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X_=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){X_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function Tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function Ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Y_=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(Y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wd=null,Ys=null,qs=null;function Ip(t){if(t=wa(t)){if(typeof wd!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=Ec(e),wd(t.stateNode,t.type,e))}}function bg(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function Cg(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function Rg(t,e){return t(e)}function Pg(){}var Jc=!1;function Dg(t,e,n){if(Jc)return t(e,n);Jc=!0;try{return Rg(t,e,n)}finally{Jc=!1,(Ys!==null||qs!==null)&&(Pg(),Cg())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var Ed=!1;if(Wi)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ed=!1}function q_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Xo=!1,Wl=null,jl=!1,Td=null,K_={onError:function(t){Xo=!0,Wl=t}};function Z_(t,e,n,i,r,s,o,a,l){Xo=!1,Wl=null,q_.apply(K_,arguments)}function Q_(t,e,n,i,r,s,o,a,l){if(Z_.apply(this,arguments),Xo){if(Xo){var c=Wl;Xo=!1,Wl=null}else throw Error(fe(198));jl||(jl=!0,Td=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Up(t){if(ls(t)!==t)throw Error(fe(188))}function J_(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Up(r),t;if(s===i)return Up(r),e;s=s.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function Ng(t){return t=J_(t),t!==null?Ig(t):null}function Ig(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ig(t);if(e!==null)return e;t=t.sibling}return null}var Ug=Fn.unstable_scheduleCallback,Op=Fn.unstable_cancelCallback,$_=Fn.unstable_shouldYield,ey=Fn.unstable_requestPaint,Ct=Fn.unstable_now,ty=Fn.unstable_getCurrentPriorityLevel,of=Fn.unstable_ImmediatePriority,Og=Fn.unstable_UserBlockingPriority,Xl=Fn.unstable_NormalPriority,ny=Fn.unstable_LowPriority,Fg=Fn.unstable_IdlePriority,yc=null,yi=null;function iy(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(yc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:oy,ry=Math.log,sy=Math.LN2;function oy(t){return t>>>=0,t===0?32:31-(ry(t)/sy|0)|0}var Na=64,Ia=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ko(a):(s&=o,s!==0&&(i=ko(s)))}else o=n&~r,o!==0?i=ko(o):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function ay(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ly(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ay(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zg(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function kg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bg,lf,Hg,Vg,Gg,bd=!1,Ua=[],dr=null,hr=null,fr=null,ra=new Map,sa=new Map,or=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dy(t,e,n,i,r){switch(e){case"focusin":return dr=yo(dr,t,e,n,i,r),!0;case"dragenter":return hr=yo(hr,t,e,n,i,r),!0;case"mouseover":return fr=yo(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,yo(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,yo(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function Wg(t){var e=Vr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=Lg(n),e!==null){t.blockedOn=e,Gg(t.priority,function(){Hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Md=i,n.target.dispatchEvent(i),Md=null}else return e=wa(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){wl(t)&&n.delete(e)}function hy(){bd=!1,dr!==null&&wl(dr)&&(dr=null),hr!==null&&wl(hr)&&(hr=null),fr!==null&&wl(fr)&&(fr=null),ra.forEach(zp),sa.forEach(zp)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,bd||(bd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,hy)))}function oa(t){function e(r){return So(r,t)}if(0<Ua.length){So(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&So(dr,t),hr!==null&&So(hr,t),fr!==null&&So(fr,t),ra.forEach(e),sa.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Wg(n),n.blockedOn===null&&or.shift()}var Ks=qi.ReactCurrentBatchConfig,ql=!0;function fy(t,e,n,i){var r=lt,s=Ks.transition;Ks.transition=null;try{lt=1,cf(t,e,n,i)}finally{lt=r,Ks.transition=s}}function py(t,e,n,i){var r=lt,s=Ks.transition;Ks.transition=null;try{lt=4,cf(t,e,n,i)}finally{lt=r,Ks.transition=s}}function cf(t,e,n,i){if(ql){var r=Cd(t,e,n,i);if(r===null)cu(t,e,i,Kl,n),Fp(t,i);else if(dy(r,t,e,n,i))i.stopPropagation();else if(Fp(t,i),e&4&&-1<uy.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&Bg(s),s=Cd(t,e,n,i),s===null&&cu(t,e,i,Kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Kl=null;function Cd(t,e,n,i){if(Kl=null,t=sf(i),t=Vr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ty()){case of:return 1;case Og:return 4;case Xl:case ny:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var cr=null,uf=null,El=null;function Xg(){if(El)return El;var t,e=uf,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function kp(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:kp,this.isPropagationStopped=kp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=kn(mo),Ma=St({},mo,{view:0,detail:0}),my=kn(Ma),eu,tu,Mo,Sc=St({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(eu=t.screenX-Mo.screenX,tu=t.screenY-Mo.screenY):tu=eu=0,Mo=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Bp=kn(Sc),gy=St({},Sc,{dataTransfer:0}),vy=kn(gy),xy=St({},Ma,{relatedTarget:0}),nu=kn(xy),_y=St({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=kn(_y),Sy=St({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),My=kn(Sy),wy=St({},mo,{data:0}),Hp=kn(wy),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ay[t])?!!e[t]:!1}function hf(){return by}var Cy=St({},Ma,{key:function(t){if(t.key){var e=Ey[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ry=kn(Cy),Py=St({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=kn(Py),Dy=St({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),Ly=kn(Dy),Ny=St({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=kn(Ny),Uy=St({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=kn(Uy),Fy=[9,13,27,32],ff=Wi&&"CompositionEvent"in window,Yo=null;Wi&&"documentMode"in document&&(Yo=document.documentMode);var zy=Wi&&"TextEvent"in window&&!Yo,Yg=Wi&&(!ff||Yo&&8<Yo&&11>=Yo),Gp=" ",Wp=!1;function qg(t,e){switch(t){case"keyup":return Fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function ky(t,e){switch(t){case"compositionend":return Kg(e);case"keypress":return e.which!==32?null:(Wp=!0,Gp);case"textInput":return t=e.data,t===Gp&&Wp?null:t;default:return null}}function By(t,e){if(Is)return t==="compositionend"||!ff&&qg(t,e)?(t=Xg(),El=uf=cr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yg&&e.locale!=="ko"?null:e.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hy[t.type]:e==="textarea"}function Zg(t,e,n,i){bg(i),e=Zl(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,aa=null;function Vy(t){av(t,0)}function Mc(t){var e=Fs(t);if(yg(e))return t}function Gy(t,e){if(t==="change")return e}var Qg=!1;if(Wi){var iu;if(Wi){var ru="oninput"in document;if(!ru){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),ru=typeof Xp.oninput=="function"}iu=ru}else iu=!1;Qg=iu&&(!document.documentMode||9<document.documentMode)}function Yp(){qo&&(qo.detachEvent("onpropertychange",Jg),aa=qo=null)}function Jg(t){if(t.propertyName==="value"&&Mc(aa)){var e=[];Zg(e,aa,t,sf(t)),Dg(Vy,e)}}function Wy(t,e,n){t==="focusin"?(Yp(),qo=e,aa=n,qo.attachEvent("onpropertychange",Jg)):t==="focusout"&&Yp()}function jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mc(aa)}function Xy(t,e){if(t==="click")return Mc(e)}function Yy(t,e){if(t==="input"||t==="change")return Mc(e)}function qy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:qy;function la(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ud.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function $g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ky(t){var e=ev(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$g(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kp(n,s);var o=Kp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zy=Wi&&"documentMode"in document&&11>=document.documentMode,Us=null,Rd=null,Ko=null,Pd=!1;function Zp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Us==null||Us!==Gl(i)||(i=Us,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&la(Ko,i)||(Ko=i,i=Zl(Rd,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},su={},tv={};Wi&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function wc(t){if(su[t])return su[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return su[t]=e[n];return t}var nv=wc("animationend"),iv=wc("animationiteration"),rv=wc("animationstart"),sv=wc("transitionend"),ov=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){ov.set(t,e),as(e,[t])}for(var ou=0;ou<Qp.length;ou++){var au=Qp[ou],Qy=au.toLowerCase(),Jy=au[0].toUpperCase()+au.slice(1);wr(Qy,"on"+Jy)}wr(nv,"onAnimationEnd");wr(iv,"onAnimationIteration");wr(rv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(sv,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Q_(i,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}}}if(jl)throw t=Td,jl=!1,Td=null,t}function gt(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var i=t+"__bubble";n.has(i)||(lv(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),lv(n,t,i,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[za]){t[za]=!0,mg.forEach(function(n){n!=="selectionchange"&&($y.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,lu("selectionchange",!1,e))}}function lv(t,e,n,i){switch(jg(e)){case 1:var r=fy;break;case 4:r=py;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Dg(function(){var c=s,d=sf(n),f=[];e:{var p=ov.get(t);if(p!==void 0){var g=df,x=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":g=Ry;break;case"focusin":x="focus",g=nu;break;case"focusout":x="blur",g=nu;break;case"beforeblur":case"afterblur":g=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ly;break;case nv:case iv:case rv:g=yy;break;case sv:g=Iy;break;case"scroll":g=my;break;case"wheel":g=Oy;break;case"copy":case"cut":case"paste":g=My;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vp}var y=(e&4)!==0,h=!y&&t==="scroll",u=y?p!==null?p+"Capture":null:p;y=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=ia(m,u),M!=null&&y.push(ua(m,M,v)))),h)break;m=m.return}0<y.length&&(p=new g(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Md&&(x=n.relatedTarget||n.fromElement)&&(Vr(x)||x[ji]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Vr(x):null,x!==null&&(h=ls(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=Bp,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vp,M="onPointerLeave",u="onPointerEnter",m="pointer"),h=g==null?p:Fs(g),v=x==null?p:Fs(x),p=new y(M,m+"leave",g,n,d),p.target=h,p.relatedTarget=v,M=null,Vr(d)===c&&(y=new y(u,m+"enter",x,n,d),y.target=v,y.relatedTarget=h,M=y),h=M,g&&x)t:{for(y=g,u=x,m=0,v=y;v;v=fs(v))m++;for(v=0,M=u;M;M=fs(M))v++;for(;0<m-v;)y=fs(y),m--;for(;0<v-m;)u=fs(u),v--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=fs(y),u=fs(u)}y=null}else y=null;g!==null&&$p(f,p,g,y,!1),x!==null&&h!==null&&$p(f,h,x,y,!0)}}e:{if(p=c?Fs(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=Gy;else if(jp(p))if(Qg)C=Yy;else{C=jy;var b=Wy}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Xy);if(C&&(C=C(t,c))){Zg(f,C,n,d);break e}b&&b(t,p,c),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&vd(p,"number",p.value)}switch(b=c?Fs(c):window,t){case"focusin":(jp(b)||b.contentEditable==="true")&&(Us=b,Rd=c,Ko=null);break;case"focusout":Ko=Rd=Us=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Zp(f,n,d);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Zp(f,n,d)}var A;if(ff)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Is?qg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Yg&&n.locale!=="ko"&&(Is||D!=="onCompositionStart"?D==="onCompositionEnd"&&Is&&(A=Xg()):(cr=d,uf="value"in cr?cr.value:cr.textContent,Is=!0)),b=Zl(c,D),0<b.length&&(D=new Hp(D,t,null,n,d),f.push({event:D,listeners:b}),A?D.data=A:(A=Kg(n),A!==null&&(D.data=A)))),(A=zy?ky(t,n):By(t,n))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(d=new Hp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}av(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ua(t,s,r)),s=ia(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ia(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=ia(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eS=/\r\n?/g,tS=/\u0000|\uFFFD/g;function em(t){return(typeof t=="string"?t:""+t).replace(eS,`
`).replace(tS,"")}function ka(t,e,n){if(e=em(e),em(t)!==e&&n)throw Error(fe(425))}function Ql(){}var Dd=null,Ld=null;function Nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(t){return tm.resolve(null).then(t).catch(rS)}:Id;function rS(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),_i="__reactFiber$"+go,da="__reactProps$"+go,ji="__reactContainer$"+go,Ud="__reactEvents$"+go,sS="__reactListeners$"+go,oS="__reactHandles$"+go;function Vr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nm(t);t!==null;){if(n=t[_i])return n;t=nm(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[_i]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function Ec(t){return t[da]||null}var Od=[],zs=-1;function Er(t){return{current:t}}function vt(t){0>zs||(t.current=Od[zs],Od[zs]=null,zs--)}function ft(t,e){zs++,Od[zs]=t.current,t.current=e}var Sr={},nn=Er(Sr),wn=Er(!1),Zr=Sr;function io(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Jl(){vt(wn),vt(nn)}function im(t,e,n){if(nn.current!==Sr)throw Error(fe(168));ft(nn,e),ft(wn,n)}function cv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,W_(t)||"Unknown",r));return St({},n,i)}function $l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Zr=nn.current,ft(nn,t),ft(wn,wn.current),!0}function rm(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=cv(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,vt(wn),vt(nn),ft(nn,t)):vt(wn),ft(wn,n)}var Fi=null,Tc=!1,du=!1;function uv(t){Fi===null?Fi=[t]:Fi.push(t)}function aS(t){Tc=!0,uv(t)}function Tr(){if(!du&&Fi!==null){du=!0;var t=0,e=lt;try{var n=Fi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Tc=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),Ug(of,Tr),r}finally{lt=e,du=!1}}return null}var ks=[],Bs=0,ec=null,tc=0,Gn=[],Wn=0,Qr=null,ki=1,Bi="";function Or(t,e){ks[Bs++]=tc,ks[Bs++]=ec,ec=t,tc=e}function dv(t,e,n){Gn[Wn++]=ki,Gn[Wn++]=Bi,Gn[Wn++]=Qr,Qr=t;var i=ki;t=Bi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-di(e)+r|n<<r|i,Bi=s+t}else ki=1<<s|n<<r|i,Bi=t}function mf(t){t.return!==null&&(Or(t,1),dv(t,1,0))}function gf(t){for(;t===ec;)ec=ks[--Bs],ks[Bs]=null,tc=ks[--Bs],ks[Bs]=null;for(;t===Qr;)Qr=Gn[--Wn],Gn[Wn]=null,Bi=Gn[--Wn],Gn[Wn]=null,ki=Gn[--Wn],Gn[Wn]=null}var On=null,In=null,xt=!1,oi=null;function hv(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,In=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:ki,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,In=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(xt){var e=In;if(e){var n=e;if(!sm(t,e)){if(Fd(t))throw Error(fe(418));e=pr(n.nextSibling);var i=On;e&&sm(t,e)?hv(i,n):(t.flags=t.flags&-4097|2,xt=!1,On=t)}}else{if(Fd(t))throw Error(fe(418));t.flags=t.flags&-4097|2,xt=!1,On=t}}}function om(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Ba(t){if(t!==On)return!1;if(!xt)return om(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nd(t.type,t.memoizedProps)),e&&(e=In)){if(Fd(t))throw fv(),Error(fe(418));for(;e;)hv(t,e),e=pr(e.nextSibling)}if(om(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=On?pr(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=In;t;)t=pr(t.nextSibling)}function ro(){In=On=null,xt=!1}function vf(t){oi===null?oi=[t]:oi.push(t)}var lS=qi.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function am(t){var e=t._init;return e(t._payload)}function pv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=xr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,M){return m===null||m.tag!==6?(m=xu(v,u.mode,M),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,M){var C=v.type;return C===Ns?d(u,m,v.props.children,M,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&am(C)===m.type)?(M=r(m,v.props),M.ref=wo(u,m,v),M.return=u,M):(M=Ll(v.type,v.key,v.props,null,u.mode,M),M.ref=wo(u,m,v),M.return=u,M)}function c(u,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=_u(v,u.mode,M),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function d(u,m,v,M,C){return m===null||m.tag!==7?(m=Kr(v,u.mode,M,C),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pa:return v=Ll(m.type,m.key,m.props,null,u.mode,v),v.ref=wo(u,null,m),v.return=u,v;case Ls:return m=_u(m,u.mode,v),m.return=u,m;case rr:var M=m._init;return f(u,M(m._payload),v)}if(zo(m)||xo(m))return m=Kr(m,u.mode,v,null),m.return=u,m;Ha(u,m)}return null}function p(u,m,v,M){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(u,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return v.key===C?l(u,m,v,M):null;case Ls:return v.key===C?c(u,m,v,M):null;case rr:return C=v._init,p(u,m,C(v._payload),M)}if(zo(v)||xo(v))return C!==null?null:d(u,m,v,M,null);Ha(u,v)}return null}function g(u,m,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(m,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Pa:return u=u.get(M.key===null?v:M.key)||null,l(m,u,M,C);case Ls:return u=u.get(M.key===null?v:M.key)||null,c(m,u,M,C);case rr:var b=M._init;return g(u,m,v,b(M._payload),C)}if(zo(M)||xo(M))return u=u.get(v)||null,d(m,u,M,C,null);Ha(m,M)}return null}function x(u,m,v,M){for(var C=null,b=null,A=m,D=m=0,z=null;A!==null&&D<v.length;D++){A.index>D?(z=A,A=null):z=A.sibling;var S=p(u,A,v[D],M);if(S===null){A===null&&(A=z);break}t&&A&&S.alternate===null&&e(u,A),m=s(S,m,D),b===null?C=S:b.sibling=S,b=S,A=z}if(D===v.length)return n(u,A),xt&&Or(u,D),C;if(A===null){for(;D<v.length;D++)A=f(u,v[D],M),A!==null&&(m=s(A,m,D),b===null?C=A:b.sibling=A,b=A);return xt&&Or(u,D),C}for(A=i(u,A);D<v.length;D++)z=g(A,u,D,v[D],M),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?D:z.key),m=s(z,m,D),b===null?C=z:b.sibling=z,b=z);return t&&A.forEach(function(E){return e(u,E)}),xt&&Or(u,D),C}function y(u,m,v,M){var C=xo(v);if(typeof C!="function")throw Error(fe(150));if(v=C.call(v),v==null)throw Error(fe(151));for(var b=C=null,A=m,D=m=0,z=null,S=v.next();A!==null&&!S.done;D++,S=v.next()){A.index>D?(z=A,A=null):z=A.sibling;var E=p(u,A,S.value,M);if(E===null){A===null&&(A=z);break}t&&A&&E.alternate===null&&e(u,A),m=s(E,m,D),b===null?C=E:b.sibling=E,b=E,A=z}if(S.done)return n(u,A),xt&&Or(u,D),C;if(A===null){for(;!S.done;D++,S=v.next())S=f(u,S.value,M),S!==null&&(m=s(S,m,D),b===null?C=S:b.sibling=S,b=S);return xt&&Or(u,D),C}for(A=i(u,A);!S.done;D++,S=v.next())S=g(A,u,D,S.value,M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?D:S.key),m=s(S,m,D),b===null?C=S:b.sibling=S,b=S);return t&&A.forEach(function(U){return e(u,U)}),xt&&Or(u,D),C}function h(u,m,v,M){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:e:{for(var C=v.key,b=m;b!==null;){if(b.key===C){if(C=v.type,C===Ns){if(b.tag===7){n(u,b.sibling),m=r(b,v.props.children),m.return=u,u=m;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&am(C)===b.type){n(u,b.sibling),m=r(b,v.props),m.ref=wo(u,b,v),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Ns?(m=Kr(v.props.children,u.mode,M,v.key),m.return=u,u=m):(M=Ll(v.type,v.key,v.props,null,u.mode,M),M.ref=wo(u,m,v),M.return=u,u=M)}return o(u);case Ls:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=_u(v,u.mode,M),m.return=u,u=m}return o(u);case rr:return b=v._init,h(u,m,b(v._payload),M)}if(zo(v))return x(u,m,v,M);if(xo(v))return y(u,m,v,M);Ha(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=xu(v,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return h}var so=pv(!0),mv=pv(!1),nc=Er(null),ic=null,Hs=null,xf=null;function _f(){xf=Hs=ic=null}function yf(t){var e=nc.current;vt(nc),t._currentValue=e}function kd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){ic=t,xf=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(ic===null)throw Error(fe(308));Hs=t,ic.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Gr=null;function Sf(t){Gr===null?Gr=[t]:Gr.push(t)}function gv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function lm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(p=e,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=St({},f,p);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=f}}function cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Ea={},Si=Er(Ea),ha=Er(Ea),fa=Er(Ea);function Wr(t){if(t===Ea)throw Error(fe(174));return t}function wf(t,e){switch(ft(fa,e),ft(ha,t),ft(Si,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}vt(Si),ft(Si,e)}function oo(){vt(Si),vt(ha),vt(fa)}function xv(t){Wr(fa.current);var e=Wr(Si.current),n=_d(e,t.type);e!==n&&(ft(ha,t),ft(Si,n))}function Ef(t){ha.current===t&&(vt(Si),vt(ha))}var _t=Er(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function Tf(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var bl=qi.ReactCurrentDispatcher,fu=qi.ReactCurrentBatchConfig,Jr=0,yt=null,Nt=null,Bt=null,oc=!1,Zo=!1,pa=0,cS=0;function Zt(){throw Error(fe(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(Jr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?fS:pS,t=n(i,r),Zo){s=0;do{if(Zo=!1,pa=0,25<=s)throw Error(fe(301));s+=1,Bt=Nt=null,e.updateQueue=null,bl.current=mS,t=n(i,r)}while(Zo)}if(bl.current=ac,e=Nt!==null&&Nt.next!==null,Jr=0,Bt=Nt=yt=null,oc=!1,e)throw Error(fe(300));return t}function Cf(){var t=pa!==0;return pa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?yt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Zn(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Bt===null?yt.memoizedState:Bt.next;if(e!==null)Bt=e,Nt=t;else{if(t===null)throw Error(fe(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Bt===null?yt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function ma(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Jr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=d,$r|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function _v(){}function yv(t,e){var n=yt,i=Zn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Rf(wv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,ga(9,Mv.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(fe(349));Jr&30||Sv(n,e,r)}return r}function Sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mv(t,e,n,i){e.value=n,e.getSnapshot=i,Ev(e)&&Tv(t)}function wv(t,e,n){return n(function(){Ev(e)&&Tv(t)})}function Ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function Tv(t){var e=Xi(t,1);e!==null&&hi(e,t,1,-1)}function um(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=hS.bind(null,yt,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Av(){return Zn().memoizedState}function Cl(t,e,n,i){var r=gi();yt.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function Ac(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&Af(i,o.deps)){r.memoizedState=ga(e,n,s,i);return}}yt.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function dm(t,e){return Cl(8390656,8,t,e)}function Rf(t,e){return Ac(2048,8,t,e)}function bv(t,e){return Ac(4,2,t,e)}function Cv(t,e){return Ac(4,4,t,e)}function Rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pv(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4,4,Rv.bind(null,e,t),n)}function Pf(){}function Dv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Nv(t,e,n){return Jr&21?(fi(n,e)||(n=zg(),yt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function uS(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=fu.transition;fu.transition={};try{t(!1),e()}finally{lt=n,fu.transition=i}}function Iv(){return Zn().memoizedState}function dS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Uv(t))Ov(e,n);else if(n=gv(t,e,n,i),n!==null){var r=ln();hi(n,t,i,r),Fv(n,e,i)}}function hS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uv(t))Ov(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=gv(t,e,r,i),n!==null&&(r=ln(),hi(n,t,i,r),Fv(n,e,i))}}function Uv(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Ov(t,e){Zo=oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var ac={readContext:Kn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},fS={readContext:Kn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,Rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:um,useDebugValue:Pf,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=um(!1),e=t[0];return t=uS.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=gi();if(xt){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),Vt===null)throw Error(fe(349));Jr&30||Sv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dm(wv.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,Mv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=Vt.identifierPrefix;if(xt){var n=Bi,i=ki;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pS={readContext:Kn,useCallback:Dv,useContext:Kn,useEffect:Rf,useImperativeHandle:Pv,useInsertionEffect:bv,useLayoutEffect:Cv,useMemo:Lv,useReducer:pu,useRef:Av,useState:function(){return pu(ma)},useDebugValue:Pf,useDeferredValue:function(t){var e=Zn();return Nv(e,Nt.memoizedState,t)},useTransition:function(){var t=pu(ma)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:yv,useId:Iv,unstable_isNewReconciler:!1},mS={readContext:Kn,useCallback:Dv,useContext:Kn,useEffect:Rf,useImperativeHandle:Pv,useInsertionEffect:bv,useLayoutEffect:Cv,useMemo:Lv,useReducer:mu,useRef:Av,useState:function(){return mu(ma)},useDebugValue:Pf,useDeferredValue:function(t){var e=Zn();return Nt===null?e.memoizedState=t:Nv(e,Nt.memoizedState,t)},useTransition:function(){var t=mu(ma)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:yv,useId:Iv,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=vr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(hi(e,t,r,i),Al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=vr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(hi(e,t,r,i),Al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=vr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(hi(e,t,i,n),Al(e,t,i))}};function hm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function zv(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=En(e)?Zr:nn.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=En(e)?Zr:nn.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bc.enqueueReplaceState(r,r.state,null),rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=G_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gS=typeof WeakMap=="function"?WeakMap:Map;function kv(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cc||(cc=!0,Jd=i),Vd(t,e)},n}function Bv(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vd(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=PS.bind(null,t,e,n),e.then(t,t))}function mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var vS=qi.ReactCurrentOwner,Mn=!1;function sn(t,e,n,i){e.child=t===null?mv(e,null,n,i):so(e,t.child,n,i)}function vm(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=bf(t,e,n,i,s,r),n=Cf(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(xt&&n&&mf(e),e.flags|=1,sn(t,e,i,r),e.child)}function xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hv(t,e,s,i,r)):(t=Ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=xr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Hv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return Gd(t,e,n,i,r)}function Vv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Gs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Gs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Gs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Gs,Dn),Dn|=i;return sn(t,e,r,n),e.child}function Gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,i,r){var s=En(n)?Zr:nn.current;return s=io(e,s),Zs(e,r),n=bf(t,e,n,i,s,r),i=Cf(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(xt&&i&&mf(e),e.flags|=1,sn(t,e,n,r),e.child)}function _m(t,e,n,i,r){if(En(n)){var s=!0;$l(e)}else s=!1;if(Zs(e,r),e.stateNode===null)Rl(t,e),zv(e,n,i),Hd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=En(n)?Zr:nn.current,c=io(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fm(e,o,i,c),sr=!1;var p=e.memoizedState;o.state=p,rc(e,i,o,r),l=e.memoizedState,a!==i||p!==l||wn.current||sr?(typeof d=="function"&&(Bd(e,n,d,i),l=e.memoizedState),(a=sr||hm(e,n,a,i,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,vv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=En(n)?Zr:nn.current,l=io(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&fm(e,o,i,l),sr=!1,p=e.memoizedState,o.state=p,rc(e,i,o,r);var x=e.memoizedState;a!==f||p!==x||wn.current||sr?(typeof g=="function"&&(Bd(e,n,g,i),x=e.memoizedState),(c=sr||hm(e,n,c,i,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Wd(t,e,n,i,s,r)}function Wd(t,e,n,i,r,s){Gv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rm(e,n,!1),Yi(t,e,s);i=e.stateNode,vS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&rm(e,n,!0),e.child}function Wv(t){var e=t.stateNode;e.pendingContext?im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&im(t,e.context,!1),wf(t,e.containerInfo)}function ym(t,e,n,i,r){return ro(),vf(r),e.flags|=256,sn(t,e,n,i),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function jv(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pc(o,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=jd,t):Df(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return xS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jd,i}return s=t.child,t=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Df(t,e){return e=Pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&vf(i),so(e,t.child,null,n),t=Df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(fe(422))),Va(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pc({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=jd,s);if(!(e.mode&1))return Va(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=gu(s,i,void 0),Va(t,e,o,i)}if(a=(o&t.childLanes)!==0,Mn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),hi(i,t,r,-1))}return Ff(),i=gu(Error(fe(421))),Va(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=DS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=pr(r.nextSibling),On=e,xt=!0,oi=null,t!==null&&(Gn[Wn++]=ki,Gn[Wn++]=Bi,Gn[Wn++]=Qr,ki=t.id,Bi=t.overflow,Qr=e),e=Df(e,i.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),kd(t.return,e,n)}function vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Xv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _S(t,e,n){switch(e.tag){case 3:Wv(e),ro();break;case 5:xv(e);break;case 1:En(e.type)&&$l(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?jv(t,e,n):(ft(_t,_t.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Vv(t,e,n)}return Yi(t,e,n)}var Yv,Yd,qv,Kv;Yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yd=function(){};qv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(Si.current);var s=null;switch(n){case"input":r=md(t,r),i=md(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=xd(t,r),i=xd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}yd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Kv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yS(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return En(e.type)&&Jl(),Qt(e),null;case 3:return i=e.stateNode,oo(),vt(wn),vt(nn),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(th(oi),oi=null))),Yd(t,e),Qt(e),null;case 5:Ef(e);var r=Wr(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)qv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Qt(e),null}if(t=Wr(Si.current),Ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)gt(Bo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Pp(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Lp(i,s),gt("invalid",i)}yd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Da(i),Dp(i,s,!0);break;case"textarea":Da(i),Np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[da]=i,Yv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)gt(Bo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Pp(t,i),r=md(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Lp(t,i),r=xd(t,i),gt("invalid",t);break;default:r=i}yd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&ef(t,s,l,o))}switch(n){case"input":Da(t),Dp(t,i,!1);break;case"textarea":Da(t),Np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Kv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=Wr(fa.current),Wr(Si.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Qt(e),null;case 13:if(vt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&In!==null&&e.mode&1&&!(e.flags&128))fv(),ro(),e.flags|=98560,s=!1;else if(s=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[_i]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else oi!==null&&(th(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ut===0&&(Ut=3):Ff())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return oo(),Yd(t,e),t===null&&ca(e.stateNode.containerInfo),Qt(e),null;case 10:return yf(e.type._context),Qt(e),null;case 17:return En(e.type)&&Jl(),Qt(e),null;case 19:if(vt(_t),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sc(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>lo&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=sc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Qt(e),null}else 2*Ct()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Of(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function SS(t,e){switch(gf(e),e.tag){case 1:return En(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),vt(wn),vt(nn),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(vt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(_t),null;case 4:return oo(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var Ga=!1,tn=!1,MS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function qd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Mm=!1;function wS(t,e){if(Dd=ql,t=ev(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},ql=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,h=x.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ii(e.type,y),h);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return x=Mm,Mm=!1,x}function Qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qd(e,n,s)}r=r.next}while(r!==i)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zv(t){var e=t.alternate;e!==null&&(t.alternate=null,Zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[da],delete e[Ud],delete e[sS],delete e[oS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qv(t){return t.tag===5||t.tag===3||t.tag===4}function wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}var Xt=null,ri=!1;function Qi(t,e,n){for(n=n.child;n!==null;)Jv(t,e,n),n=n.sibling}function Jv(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:tn||Vs(n,e);case 6:var i=Xt,r=ri;Xt=null,Qi(t,e,n),Xt=i,ri=r,Xt!==null&&(ri?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ri?(t=Xt,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),oa(t)):uu(Xt,n.stateNode));break;case 4:i=Xt,r=ri,Xt=n.stateNode.containerInfo,ri=!0,Qi(t,e,n),Xt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qd(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!tn&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Qi(t,e,n),tn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function Em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MS),e.forEach(function(i){var r=LS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ri=!1;break e;case 3:Xt=a.stateNode.containerInfo,ri=!0;break e;case 4:Xt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Xt===null)throw Error(fe(160));Jv(s,o,r),Xt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),pi(t),i&4){try{Qo(3,t,t.return),Cc(3,t)}catch(y){Tt(t,t.return,y)}try{Qo(5,t,t.return)}catch(y){Tt(t,t.return,y)}}break;case 1:$n(e,t),pi(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if($n(e,t),pi(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(y){Tt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sg(r,s),Sd(a,o);var c=Sd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Ag(r,f):d==="dangerouslySetInnerHTML"?Eg(r,f):d==="children"?na(r,f):ef(r,d,f,c)}switch(a){case"input":gd(r,s);break;case"textarea":Mg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xs(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(y){Tt(t,t.return,y)}}break;case 6:if($n(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Tt(t,t.return,y)}}break;case 3:if($n(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(y){Tt(t,t.return,y)}break;case 4:$n(e,t),pi(t);break;case 13:$n(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(If=Ct())),i&4&&Em(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||d,$n(e,t),tn=c):$n(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(f=Te=d;Te!==null;){switch(p=Te,g=p.child,p.tag){case 0:case 11:case 14:case 15:Qo(4,p,p.return);break;case 1:Vs(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Tt(i,n,y)}}break;case 5:Vs(p,p.return);break;case 22:if(p.memoizedState!==null){Am(f);continue}}g!==null?(g.return=p,Te=g):Am(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tg("display",o))}catch(y){Tt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Tt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),pi(t),i&4&&Em(t);break;case 21:break;default:$n(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qv(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=wm(t);Qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wm(t);Zd(t,a,o);break;default:throw Error(fe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ES(t,e,n){Te=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Ga;var c=tn;if(Ga=o,(tn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?bm(r):l!==null?(l.return=o,Te=l):bm(r);for(;s!==null;)Te=s,ex(s),s=s.sibling;Te=r,Ga=a,tn=c}Tm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Tm(t)}}function Tm(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&oa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}tn||e.flags&512&&Kd(e)}catch(p){Tt(e,e.return,p)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Am(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function bm(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Kd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Kd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var TS=Math.ceil,lc=qi.ReactCurrentDispatcher,Lf=qi.ReactCurrentOwner,qn=qi.ReactCurrentBatchConfig,et=0,Vt=null,Dt=null,qt=0,Dn=0,Gs=Er(0),Ut=0,va=null,$r=0,Rc=0,Nf=0,Jo=null,Sn=null,If=0,lo=1/0,Oi=null,cc=!1,Jd=null,gr=null,Wa=!1,ur=null,uc=0,$o=0,$d=null,Pl=-1,Dl=0;function ln(){return et&6?Ct():Pl!==-1?Pl:Pl=Ct()}function vr(t){return t.mode&1?et&2&&qt!==0?qt&-qt:lS.transition!==null?(Dl===0&&(Dl=zg()),Dl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:jg(t.type)),t):1}function hi(t,e,n,i){if(50<$o)throw $o=0,$d=null,Error(fe(185));Sa(t,n,i),(!(et&2)||t!==Vt)&&(t===Vt&&(!(et&2)&&(Rc|=n),Ut===4&&ar(t,qt)),Tn(t,i),n===1&&et===0&&!(e.mode&1)&&(lo=Ct()+500,Tc&&Tr()))}function Tn(t,e){var n=t.callbackNode;ly(t,e);var i=Yl(t,t===Vt?qt:0);if(i===0)n!==null&&Op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Op(n),e===1)t.tag===0?aS(Cm.bind(null,t)):uv(Cm.bind(null,t)),iS(function(){!(et&6)&&Tr()}),n=null;else{switch(kg(i)){case 1:n=of;break;case 4:n=Og;break;case 16:n=Xl;break;case 536870912:n=Fg;break;default:n=Xl}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Pl=-1,Dl=0,et&6)throw Error(fe(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=Yl(t,t===Vt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=et;et|=2;var s=ix();(Vt!==t||qt!==e)&&(Oi=null,lo=Ct()+500,qr(t,e));do try{CS();break}catch(a){nx(t,a)}while(!0);_f(),lc.current=s,et=r,Dt!==null?e=0:(Vt=null,qt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ad(t),r!==0&&(i=r,e=eh(t,r))),e===1)throw n=va,qr(t,0),ar(t,i),Tn(t,Ct()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!AS(r)&&(e=dc(t,i),e===2&&(s=Ad(t),s!==0&&(i=s,e=eh(t,s))),e===1))throw n=va,qr(t,0),ar(t,i),Tn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Fr(t,Sn,Oi);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=If+500-Ct(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Id(Fr.bind(null,t,Sn,Oi),e);break}Fr(t,Sn,Oi);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*TS(i/1960))-i,10<i){t.timeoutHandle=Id(Fr.bind(null,t,Sn,Oi),i);break}Fr(t,Sn,Oi);break;case 5:Fr(t,Sn,Oi);break;default:throw Error(fe(329))}}}return Tn(t,Ct()),t.callbackNode===n?tx.bind(null,t):null}function eh(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=dc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&th(e)),t}function th(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function AS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Nf,e&=~Rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function Cm(t){if(et&6)throw Error(fe(327));Qs();var e=Yl(t,0);if(!(e&1))return Tn(t,Ct()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=Ad(t);i!==0&&(e=i,n=eh(t,i))}if(n===1)throw n=va,qr(t,0),ar(t,e),Tn(t,Ct()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,Sn,Oi),Tn(t,Ct()),null}function Uf(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(lo=Ct()+500,Tc&&Tr())}}function es(t){ur!==null&&ur.tag===0&&!(et&6)&&Qs();var e=et;et|=1;var n=qn.transition,i=lt;try{if(qn.transition=null,lt=1,t)return t()}finally{lt=i,qn.transition=n,et=e,!(et&6)&&Tr()}}function Of(){Dn=Gs.current,vt(Gs)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nS(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:oo(),vt(wn),vt(nn),Tf();break;case 5:Ef(i);break;case 4:oo();break;case 13:vt(_t);break;case 19:vt(_t);break;case 10:yf(i.type._context);break;case 22:case 23:Of()}n=n.return}if(Vt=t,Dt=t=xr(t.current,null),qt=Dn=e,Ut=0,va=null,Nf=Rc=$r=0,Sn=Jo=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gr=null}return t}function nx(t,e){do{var n=Dt;try{if(_f(),bl.current=ac,oc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oc=!1}if(Jr=0,Bt=Nt=yt=null,Zo=!1,pa=0,Lf.current=null,n===null||n.return===null){Ut=1,va=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=mm(o);if(g!==null){g.flags&=-257,gm(g,o,a,s,e),g.mode&1&&pm(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){pm(s,c,e),Ff();break e}l=Error(fe(426))}}else if(xt&&a.mode&1){var h=mm(o);if(h!==null){!(h.flags&65536)&&(h.flags|=256),gm(h,o,a,s,e),vf(ao(l,a));break e}}s=l=ao(l,a),Ut!==4&&(Ut=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=kv(s,l,e);lm(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gr===null||!gr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Bv(s,a,e);lm(s,M);break e}}s=s.return}while(s!==null)}sx(n)}catch(C){e=C,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function ix(){var t=lc.current;return lc.current=ac,t===null?ac:t}function Ff(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!($r&268435455)&&!(Rc&268435455)||ar(Vt,qt)}function dc(t,e){var n=et;et|=2;var i=ix();(Vt!==t||qt!==e)&&(Oi=null,qr(t,e));do try{bS();break}catch(r){nx(t,r)}while(!0);if(_f(),et=n,lc.current=i,Dt!==null)throw Error(fe(261));return Vt=null,qt=0,Ut}function bS(){for(;Dt!==null;)rx(Dt)}function CS(){for(;Dt!==null&&!$_();)rx(Dt)}function rx(t){var e=ax(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?sx(t):Dt=e,Lf.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SS(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=yS(n,e,Dn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Fr(t,e,n){var i=lt,r=qn.transition;try{qn.transition=null,lt=1,RS(t,e,n,i)}finally{qn.transition=r,lt=i}return null}function RS(t,e,n,i){do Qs();while(ur!==null);if(et&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cy(t,s),t===Vt&&(Dt=Vt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,lx(Xl,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=lt;lt=1;var a=et;et|=4,Lf.current=null,wS(t,n),$v(n,t),Ky(Ld),ql=!!Dd,Ld=Dd=null,t.current=n,ES(n),ey(),et=a,lt=o,qn.transition=s}else t.current=n;if(Wa&&(Wa=!1,ur=t,uc=r),s=t.pendingLanes,s===0&&(gr=null),iy(n.stateNode),Tn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cc)throw cc=!1,t=Jd,Jd=null,t;return uc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===$d?$o++:($o=0,$d=t):$o=0,Tr(),null}function Qs(){if(ur!==null){var t=kg(uc),e=qn.transition,n=lt;try{if(qn.transition=null,lt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,uc=0,et&6)throw Error(fe(331));var r=et;for(et|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Qo(8,d,s)}var f=d.child;if(f!==null)f.return=d,Te=f;else for(;Te!==null;){d=Te;var p=d.sibling,g=d.return;if(Zv(d),d===c){Te=null;break}if(p!==null){p.return=g,Te=p;break}Te=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var h=y.sibling;y.sibling=null,y=h}while(y!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var m=t.current;for(Te=m;Te!==null;){o=Te;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Te=v;else e:for(o=m;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){Te=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Te=M;break e}Te=a.return}}if(et=r,Tr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(yc,t)}catch{}i=!0}return i}finally{lt=n,qn.transition=e}}return!1}function Rm(t,e,n){e=ao(n,e),e=kv(t,e,1),t=mr(t,e,1),e=ln(),t!==null&&(Sa(t,1,e),Tn(t,e))}function Tt(t,e,n){if(t.tag===3)Rm(t,t,n);else for(;e!==null;){if(e.tag===3){Rm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=ao(n,t),t=Bv(e,t,1),e=mr(e,t,1),t=ln(),e!==null&&(Sa(e,1,t),Tn(e,t));break}}e=e.return}}function PS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(qt&n)===n&&(Ut===4||Ut===3&&(qt&130023424)===qt&&500>Ct()-If?qr(t,0):Nf|=n),Tn(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=ln();t=Xi(t,e),t!==null&&(Sa(t,e,n),Tn(t,n))}function DS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),ox(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,_S(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,xt&&e.flags&1048576&&dv(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=io(e,nn.current);Zs(e,n),r=bf(null,e,i,t,r,n);var s=Cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,$l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=bc,e.stateNode=r,r._reactInternals=e,Hd(e,i,t,n),e=Wd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&mf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=IS(i),t=ii(i,t),r){case 0:e=Gd(null,e,i,t,n);break e;case 1:e=_m(null,e,i,t,n);break e;case 11:e=vm(null,e,i,t,n);break e;case 14:e=xm(null,e,i,ii(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),_m(t,e,i,r,n);case 3:e:{if(Wv(e),t===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,vv(t,e),rc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(fe(423)),e),e=ym(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(fe(424)),e),e=ym(t,e,i,n,r);break e}else for(In=pr(e.stateNode.containerInfo.firstChild),On=e,xt=!0,oi=null,n=mv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=Yi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return xv(e),t===null&&zd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nd(i,r)?o=null:s!==null&&Nd(i,s)&&(e.flags|=32),Gv(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return jv(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),vm(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(nc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!wn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=Kn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),xm(t,e,i,r,n);case 15:return Hv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Rl(t,e),e.tag=1,En(i)?(t=!0,$l(e)):t=!1,Zs(e,n),zv(e,i,r),Hd(e,i,r,n),Wd(null,e,i,!0,t,n);case 19:return Xv(t,e,n);case 22:return Vv(t,e,n)}throw Error(fe(156,e.tag))};function lx(t,e){return Ug(t,e)}function NS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new NS(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IS(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Kr(n.children,r,s,e);case tf:o=8,r|=8;break;case dd:return t=Xn(12,n,e,r|2),t.elementType=dd,t.lanes=s,t;case hd:return t=Xn(13,n,e,r),t.elementType=hd,t.lanes=s,t;case fd:return t=Xn(19,n,e,r),t.elementType=fd,t.lanes=s,t;case xg:return Pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gg:o=10;break e;case vg:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case rr:o=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Pc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=xg,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function US(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,i,r,s,o,a,l){return t=new US(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function OS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return Sr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(En(n))return cv(t,n,e)}return e}function ux(t,e,n,i,r,s,o,a,l){return t=kf(n,i,!0,t,r,s,o,a,l),t.context=cx(null),n=t.current,i=ln(),r=vr(n),s=Gi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,Sa(t,r,i),Tn(t,i),t}function Dc(t,e,n,i){var r=e.current,s=ln(),o=vr(r);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(hi(t,r,o,s),Al(t,r,o)),o}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){Pm(t,e),(t=t.alternate)&&Pm(t,e)}function FS(){return null}var dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Lc.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));Dc(t,e,null,null)};Lc.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){Dc(null,t,null,null)}),e[ji]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Wg(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function zS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hc(o);s.call(c)}}var o=ux(e,i,t,0,null,!1,!1,"",Dm);return t._reactRootContainer=o,t[ji]=o.current,ca(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hc(l);a.call(c)}}var l=kf(t,0,!1,null,null,!1,!1,"",Dm);return t._reactRootContainer=l,t[ji]=l.current,ca(t.nodeType===8?t.parentNode:t),es(function(){Dc(e,l,n,i)}),l}function Ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hc(o);a.call(l)}}Dc(e,o,t,r)}else o=zS(n,e,t,r,i);return hc(o)}Bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(af(e,n|1),Tn(e,Ct()),!(et&6)&&(lo=Ct()+500,Tr()))}break;case 13:es(function(){var i=Xi(t,1);if(i!==null){var r=ln();hi(i,t,1,r)}}),Bf(t,1)}};lf=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=ln();hi(e,t,134217728,n)}Bf(t,134217728)}};Hg=function(t){if(t.tag===13){var e=vr(t),n=Xi(t,e);if(n!==null){var i=ln();hi(n,t,e,i)}Bf(t,e)}};Vg=function(){return lt};Gg=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};wd=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ec(i);if(!r)throw Error(fe(90));yg(i),gd(i,r)}}}break;case"textarea":Mg(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};Rg=Uf;Pg=es;var kS={usingClientEntryPoint:!1,Events:[wa,Fs,Ec,bg,Cg,Uf]},To={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BS={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||FS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{yc=ja.inject(BS),yi=ja}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(fe(200));return OS(t,e,null,n)};zn.createRoot=function(t,e){if(!Vf(t))throw Error(fe(299));var n=!1,i="",r=dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ca(t.nodeType===8?t.parentNode:t),new Hf(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return es(t)};zn.hydrate=function(t,e,n){if(!Nc(e))throw Error(fe(200));return Ic(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=dx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ux(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lc(e)};zn.render=function(t,e,n){if(!Nc(e))throw Error(fe(200));return Ic(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(fe(40));return t._reactRootContainer?(es(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};zn.unstable_batchedUpdates=Uf;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nc(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return Ic(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hx)}catch(t){console.error(t)}}hx(),hg.exports=zn;var HS=hg.exports,Lm=HS;cd.createRoot=Lm.createRoot,cd.hydrateRoot=Lm.hydrateRoot;const VS=["Seating","Tables","Bedroom","Storage","Decor","Kitchen"],Nl=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"}],vi=Object.fromEntries(Nl.map(t=>[t.type,t])),GS=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],fx="honeycutt.design.v2";let WS=1;const Ci=()=>`${Date.now().toString(36)}-${(WS++).toString(36)}`;function Ho(){return{view:"2d",tool:"select",sideTool:"select",sideWall:null,units:"ft",ambiance:"day",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],selected:null}}function jS(){try{const t=localStorage.getItem(fx);if(!t)return Ho();const e=JSON.parse(t);return!e||!Array.isArray(e.items)?Ho():{...Ho(),...e,tool:"select",sideTool:"select",selected:null}}catch{return Ho()}}function Un(t,e,n){return Math.max(e,Math.min(n,t))}function XS(t){return t.scale&&(t.scale={x:Un(t.scale.x??1,.3,3),y:Un(t.scale.y??1,.3,3),z:Un(t.scale.z??1,.3,3)}),t}function px(t){return t.w=Un(t.w,.5,40),t.d=Un(t.d,.5,40),t.height!=null&&(t.height=Un(t.height,1.5,6)),t}function mx(t){return t.height!=null&&(t.height=Un(t.height,1.5,6)),t.thickness!=null&&(t.thickness=Un(t.thickness,.05,.5)),t}function nh(t){return t.w!=null&&(t.w=Un(t.w,.1,12)),t.h!=null&&(t.h=Un(t.h,.1,6)),t.depth!=null&&(t.depth=Un(t.depth,.02,3)),t.thickness!=null&&(t.thickness=Un(t.thickness,.01,.4)),t}const ih={item:"items",room:"rooms",wall:"walls",builtin:"builtins"};function YS(t,e,n,i){const r=ih[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&XS(a),e==="room"&&px(a),e==="wall"&&mx(a),e==="builtin"&&nh(a),a});return{...t,[r]:s}}function yu(t,e){var n;switch(e.type){case"view":return{...t,view:e.view};case"ambiance":return{...t,ambiance:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"sideTool":return{...t,sideTool:e.tool,selected:e.tool==="select"?t.selected:null};case"sideWall":return{...t,sideWall:e.ref};case"defaultHeight":return{...t,defaultHeight:Un(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"addRoom":{const i=px({uid:Ci(),x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],selected:{type:"room",uid:i.uid}}}case"addWall":{const i=mx({uid:Ci(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],selected:{type:"wall",uid:i.uid}}}case"addBuiltin":{const i=nh({uid:Ci(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>nh({uid:Ci(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addItem":{const i=vi[e.kind];if(!i)return t;const r={uid:Ci(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return YS(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=ih[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=ih[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:Ci(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:Ci(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:Ci(),u:o.u+.3,v:o.v+.3}:a={...o,uid:Ci(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...Ho(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const qS=new Set(["addRoom","addWall","addItem","addBuiltin","addBuiltins","update","remove","duplicate","clear","reset","defaultHeight"]),Su=80;function KS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:[t.present,...t.future].slice(0,Su),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Su),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!qS.has(e.type))return{...t,present:yu(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:yu(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Su),present:yu(t.present,e),future:[],lastKey:i||null,lastTime:n}}const gx=De.createContext(null);function ZS({children:t}){const[e,n]=De.useReducer(KS,void 0,()=>({past:[],present:jS(),future:[],lastKey:null,lastTime:0})),i=De.useRef(null),r=e.present;De.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(fx,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=De.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return _.jsx(gx.Provider,{value:s,children:t})}function Ki(){const t=De.useContext(gx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}function QS(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function Ye(t,e){return e==="m"?`${t.toFixed(2)} m`:QS(t)}function Br(t,e){const n=e&&e.scale||{};return{w:t.w*(n.x??1),d:t.d*(n.z??1),h:t.h*(n.y??1)}}function vx(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function Cn(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Cr="rgba(0,0,0,0.22)",Nm="rgba(0,0,0,0.28)";function xx({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,d=Math.max(.8,Math.min(s,o)*.025),f=Cn(i,.16),p=Cn(i,-.22),g=(y,h,u,m,v,M=c,C={})=>_.jsx("rect",{x:y,y:h,width:u,height:m,rx:M,ry:M,fill:v,...C});let x=null;switch(r){case"seat":{const y=o*.26,h=s*.12;x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),g(a,l,s,y,p,c)," ",g(a,l+y*.5,h,o-y*.5,p,c*.6),g(a+s-h,l+y*.5,h,o-y*.5,p,c*.6),g(a+h+d,l+y,s-2*(h+d),o-y-d,f,c*.5)]});break}case"chair":{const y=o*.22;x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),g(a,l,s,y,p,c),g(a+d,l+y,s-2*d,o-y-d,f,c*.5)]});break}case"bench":{x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),g(a+s*.05,l+o*.18,s*.9,o*.64,f,c*.4)]});break}case"round":x=_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),_.jsx("circle",{cx:0,cy:0,r:s*.3,fill:f})]});break;case"table":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,p),g(a+d*1.5,l+d*1.5,s-3*d,o-3*d,i,c*.8),g(a+s*.12,l+o*.12,s*.76,o*.76,f,c*.5)]});break;case"desk":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,p),g(a+d,l+d,s-2*d,o-2*d,i,c*.7),g(a+s*.62,l+d*2,s*.34,o-d*4,f,c*.4)]});break;case"round-table":x=_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:0,cy:0,r:s/2,fill:p}),_.jsx("circle",{cx:0,cy:0,r:s/2-d*1.5,fill:i}),_.jsx("circle",{cx:0,cy:0,r:s*.34,fill:f})]});break;case"bed":{const y=o*.16,h=s*.4,u=o*.18;x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),g(a,l,s,y,p,c)," ",g(a+s*.05,l+y+o*.04,h,u,f,c*.4),g(a+s*.55,l+y+o*.04,h,u,f,c*.4),g(a+s*.05,l+y+u+o*.08,s*.9,o-y-u-o*.12,Cn(i,.07),c*.3)]});break}case"cabinet":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),_.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:Nm,strokeWidth:d}),_.jsx("circle",{cx:-s*.06,cy:0,r:d*1.2,fill:Cr}),_.jsx("circle",{cx:s*.06,cy:0,r:d*1.2,fill:Cr})]});break;case"wardrobe":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),_.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:Nm,strokeWidth:d}),_.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Cr,strokeWidth:d*1.6}),_.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Cr,strokeWidth:d*1.6})]});break;case"drawers":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),g(a+d,l+d,s-2*d,o-2*d,f,c*.5),_.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Cr,strokeWidth:d*1.6,strokeLinecap:"round"})]});break;case"shelf":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,p),g(a+d,l+d,s-2*d,o-2*d,i,c*.4),[.3,.5,.7].map((y,h)=>_.jsx("line",{x1:a+s*.12,y1:l+o*y,x2:a+s*.88,y2:l+o*y,stroke:Cr,strokeWidth:d},h))]});break;case"tv":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,"#0c0d10",c*.4),g(a+d,l,s-2*d,o*.55,"#22303f",c*.2)]});break;case"rug":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i,c*.3),g(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:Cn(i,.25),strokeWidth:d*1.4,strokeDasharray:`${d*3} ${d*3}`})]});break;case"round-rug":x=_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),_.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:Cn(i,.25),strokeWidth:d*1.4})]});break;case"plant":x=_.jsxs(_.Fragment,{children:[g(a+s*.28,l+o*.28,s*.44,o*.44,Cn("#8a6a4a",-.1),c*.4),_.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:Cn(i,.1)}),_.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),_.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:Cn(i,-.12)}),_.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:Cn(i,.18)})]});break;case"lamp":x=_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:0,cy:0,r:s/2,fill:Cn(i,-.05)}),_.jsx("circle",{cx:0,cy:0,r:s*.22,fill:Cn(i,.3)})]});break;case"fridge":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),g(a+d,l+d,s-2*d,o-2*d,f,c*.4),_.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Cr,strokeWidth:d*1.8,strokeLinecap:"round"})]});break;case"counter":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,p),g(a+d,l+d,s-2*d,o-2*d,i,c*.4),g(a+s*.58,l+o*.22,s*.32,o*.56,Cn(i,-.18),c*.3)]});break;case"range":x=_.jsxs(_.Fragment,{children:[g(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([y,h],u)=>_.jsx("circle",{cx:s*y,cy:o*h,r:s*.13,fill:"none",stroke:Cn(i,.3),strokeWidth:d},u))]});break;default:x=g(a,l,s,o,i)}return _.jsx("g",{children:x})}const Wt=({children:t,size:e=22,...n})=>_.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),JS=t=>_.jsxs(Wt,{...t,children:[_.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),_.jsx("path",{d:"M3 9h18M9 9v12"})]}),$S=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),_.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),eM=t=>_.jsx(Wt,{...t,children:_.jsx("path",{d:"M12 5v14M5 12h14"})}),tM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),_.jsx("path",{d:"M21 3v5h-5"})]}),Ao=t=>_.jsxs(Wt,{...t,children:[_.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),_.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),ps=t=>_.jsx(Wt,{...t,children:_.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),nM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),_.jsx("circle",{cx:"16",cy:"6",r:"2"}),_.jsx("circle",{cx:"8",cy:"12",r:"2"}),_.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),Gf=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),_.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),iM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),_.jsx("path",{d:"m3 13 9 5 9-5"})]}),rM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M9 14 4 9l5-5"}),_.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),sM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"m15 14 5-5-5-5"}),_.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),oM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M12 15V3"}),_.jsx("path",{d:"m8 7 4-4 4 4"}),_.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),aM=t=>_.jsxs(Wt,{...t,children:[_.jsx("circle",{cx:"12",cy:"12",r:"4"}),_.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),Im=t=>_.jsx(Wt,{...t,children:_.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),Um=t=>_.jsx(Wt,{...t,children:_.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),Om=t=>_.jsx(Wt,{...t,children:_.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),lM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M3 20h18"}),_.jsx("rect",{x:"6",y:"4",width:"7",height:"16",rx:"1"}),_.jsx("path",{d:"M13 9h5v11"})]}),cM=t=>_.jsxs(Wt,{...t,children:[_.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),_.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),Jt="#d9b779",Fm="#39414f",uM="#c3c9d1",dM="#eef1f5",_x=.0254,zm=_x,Mu=18,km=["n","e","s","w"],mn=(t,e)=>Math.round(t/e)*e,zr=(t,e,n)=>Math.max(e,Math.min(n,t)),Bm=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1;function wu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function Hm(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=zr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function hM(){const{state:t,dispatch:e}=Ki(),{rooms:n,walls:i,items:r,selected:s,units:o,tool:a,defaultHeight:l}=t,c=o==="ft"?_x:.01,d=De.useRef(null),f=De.useRef(null),[p,g]=De.useState({W:360,H:540}),[x,y]=De.useState({scale:64,panX:180,panY:270,init:!1}),[h,u]=De.useState(null),m=De.useRef(null);m.current=h;const v=De.useRef(new Map),M=De.useRef(null),C=De.useRef(x);C.current=x;const b=De.useRef(!1);De.useLayoutEffect(()=>{const O=d.current;if(!O)return;const V=()=>{const q=O.clientWidth,se=O.clientHeight;g({W:q,H:se}),y(T=>T.init?T:{scale:64,panX:q/2,panY:se/2,init:!0})},J=new ResizeObserver(V);return J.observe(O),V(),()=>J.disconnect()},[]);const{W:A,H:D}=p;function z(){let O=1/0,V=-1/0,J=1/0,q=-1/0;const se=(ue,ae)=>{O=Math.min(O,ue),V=Math.max(V,ue),J=Math.min(J,ae),q=Math.max(q,ae)};for(const ue of n)se(ue.x,ue.z),se(ue.x+ue.w,ue.z+ue.d);for(const ue of i)se(ue.x1,ue.z1),se(ue.x2,ue.z2);for(const ue of r){const ae=vi[ue.type],pe=Br(ae,ue);se(ue.x-pe.w/2,ue.z-pe.d/2),se(ue.x+pe.w/2,ue.z+pe.d/2)}if(!isFinite(O)){y({scale:64,panX:A/2,panY:D/2,init:!0});return}const T=56,w=92,P=64,I=Math.max(.5,V-O),H=Math.max(.5,q-J),N=zr(Math.min((A-2*T)/I,(D-w-P)/H),14,180),oe=(O+V)/2,$=(J+q)/2,Q=(w+(D-P))/2;y({scale:N,panX:A/2-oe*N,panY:Q-$*N,init:!0})}const S=n.length>0||i.length>0||r.length>0,E=De.useRef(0);De.useLayoutEffect(()=>{if(!p.W)return;const O=E.current&&Math.abs(p.W-E.current)>60;E.current=p.W,S&&(!b.current||O)&&(z(),b.current=!0)},[p.W,S]);const{scale:U,panX:B,panY:K}=x,X=(O,V)=>[O*U+B,V*U+K],Y=(O,V)=>[(O-B)/U,(V-K)/U],ce=O=>{const V=f.current.getBoundingClientRect();return[O.clientX-V.left,O.clientY-V.top]},L=(s==null?void 0:s.type)==="item"?r.find(O=>O.uid===s.uid):null,Z=(s==null?void 0:s.type)==="room"?n.find(O=>O.uid===s.uid):null,ne=(s==null?void 0:s.type)==="wall"?i.find(O=>O.uid===s.uid):null;function he(O){const V=vi[O.type],J=Br(V,O),[q,se]=X(O.x,O.z),T=(O.rot||0)*Math.PI/180,w=Math.cos(T),P=Math.sin(T),I=J.w*U/2,H=J.d*U/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([N,oe])=>{const $=N*I,Q=oe*H;return[q+$*w-Q*P,se+$*P+Q*w]})}function Me(O){return{nw:X(O.x,O.z),ne:X(O.x+O.w,O.z),se:X(O.x+O.w,O.z+O.d),sw:X(O.x,O.z+O.d)}}function we(O,V){const[J,q]=Y(O,V);if(L){const se=he(L);for(let T=0;T<4;T++)if(Math.hypot(O-se[T][0],V-se[T][1])<Mu)return{kind:"item-handle"}}if(Z){const se=Me(Z);for(const T in se)if(Math.hypot(O-se[T][0],V-se[T][1])<Mu)return{kind:"room-handle",handle:T}}if(ne)for(const se of["1","2"]){const[T,w]=X(ne["x"+se],ne["z"+se]);if(Math.hypot(O-T,V-w)<Mu)return{kind:"wall-end",end:se}}for(let se=r.length-1;se>=0;se--){const T=r[se],w=vi[T.type];if(!w)continue;const P=Br(w,T),I=(T.rot||0)*Math.PI/180,H=J-T.x,N=q-T.z,oe=H*Math.cos(I)+N*Math.sin(I),$=-H*Math.sin(I)+N*Math.cos(I);if(Math.abs(oe)<=P.w/2+.08&&Math.abs($)<=P.d/2+.08)return{kind:"item",uid:T.uid}}for(let se=i.length-1;se>=0;se--){const T=i[se];if(Hm(J,q,T.x1,T.z1,T.x2,T.z2)<=T.thickness/2+.18)return{kind:"wall",uid:T.uid}}for(let se=n.length-1;se>=0;se--){const T=n[se];for(const w of km){const[P,I,H,N]=wu(T,w);if(Hm(J,q,P,I,H,N)<=.18)return{kind:"roomwall",uid:T.uid,side:w}}}for(let se=n.length-1;se>=0;se--){const T=n[se];if(J>=T.x&&J<=T.x+T.w&&q>=T.z&&q<=T.z+T.d)return{kind:"room",uid:T.uid}}return{kind:"empty"}}function ie(O){const V=[],J=[];for(const q of n)q.uid!==O&&(V.push(q.x,q.x+q.w),J.push(q.z,q.z+q.d));return{xs:V,zs:J}}function re(O,V,J=.28){let q=null,se=J;for(const T of V){const w=Math.abs(O-T);w<se&&(se=w,q=T)}return q}const me=(O,V)=>{const J=re(O,ie(V).xs);return J??mn(O,c)},ge=(O,V)=>{const J=re(O,ie(V).zs);return J??mn(O,c)},Ne=O=>{const[V,J]=ce(O);if(v.current.set(O.pointerId,{x:V,y:J}),f.current.setPointerCapture(O.pointerId),v.current.size===2){const w=[...v.current.values()],P=(w[0].x+w[1].x)/2,I=(w[0].y+w[1].y)/2,H=Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y),N=C.current;M.current={startDist:H,startScale:N.scale,wmx:(P-N.panX)/N.scale,wmy:(I-N.panY)/N.scale},u(null);return}if(v.current.size>2)return;const[q,se]=Y(V,J);if(a==="room"){const w=me(q),P=ge(se);u({kind:"drawRoom",x0:w,z0:P,cur:{x:w,z:P,w:0,d:0}});return}if(a==="wall"){const w=me(q),P=ge(se);u({kind:"drawWall",x1:w,z1:P,cur:{x1:w,z1:P,x2:w,z2:P}});return}const T=we(V,J);switch(T.kind){case"item-handle":u({kind:"resizeItem",uid:L.uid,cxw:L.x,czw:L.z,rot:L.rot||0,c:vi[L.type]});break;case"room-handle":u({kind:"resizeRoom",uid:Z.uid,handle:T.handle,x0:Z.x,z0:Z.z,w0:Z.w,d0:Z.d});break;case"wall-end":u({kind:"wallEnd",uid:ne.uid,end:T.end});break;case"item":{const w=r.find(P=>P.uid===T.uid);e({type:"select",sel:{type:"item",uid:T.uid}}),u({kind:"moveItem",uid:T.uid,ox:q-w.x,oz:se-w.z});break}case"wall":{const w=i.find(P=>P.uid===T.uid);e({type:"select",sel:{type:"wall",uid:T.uid}}),u({kind:"moveWall",uid:T.uid,ox:q,oz:se,x1:w.x1,z1:w.z1,x2:w.x2,z2:w.z2});break}case"roomwall":e({type:"select",sel:{type:"roomwall",uid:T.uid,side:T.side}}),u(null);break;case"room":{const w=n.find(P=>P.uid===T.uid);e({type:"select",sel:{type:"room",uid:T.uid}}),u({kind:"moveRoom",uid:T.uid,ox:q-w.x,oz:se-w.z});break}default:u({kind:"pan",sx:V,sy:J,panX:C.current.panX,panY:C.current.panY,moved:!1})}},Ce=O=>{const[V,J]=ce(O);if(v.current.has(O.pointerId)&&v.current.set(O.pointerId,{x:V,y:J}),M.current&&v.current.size>=2){const w=[...v.current.values()],P=(w[0].x+w[1].x)/2,I=(w[0].y+w[1].y)/2,H=Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y),N=M.current,oe=zr(N.startScale*(H/N.startDist),12,220);y({scale:oe,panX:P-N.wmx*oe,panY:I-N.wmy*oe,init:!0});return}const q=m.current;if(!q)return;const[se,T]=Y(V,J);if(q.kind==="pan")!q.moved&&Math.hypot(V-q.sx,J-q.sy)>4&&(q.moved=!0),y(w=>({...w,panX:q.panX+(V-q.sx),panY:q.panY+(J-q.sy)}));else if(q.kind==="drawRoom"){const w=me(se),P=ge(T);u(I=>({...I,cur:{x:Math.min(I.x0,w),z:Math.min(I.z0,P),w:Math.abs(w-I.x0),d:Math.abs(P-I.z0)}}))}else if(q.kind==="drawWall")u(w=>({...w,cur:{x1:w.x1,z1:w.z1,x2:me(se),z2:ge(T)}}));else if(q.kind==="moveItem")e({type:"update",sel:{type:"item",uid:q.uid},patch:{x:mn(se-q.ox,zm),z:mn(T-q.oz,zm)},mergeKey:`mv:${q.uid}`});else if(q.kind==="resizeItem"){const w=se-q.cxw,P=T-q.czw,I=q.rot*Math.PI/180,H=w*Math.cos(I)+P*Math.sin(I),N=-w*Math.sin(I)+P*Math.cos(I),oe=zr(2*Math.max(.1,Math.abs(H))/q.c.w,.3,3),$=zr(2*Math.max(.1,Math.abs(N))/q.c.d,.3,3),Q=zr(Math.sqrt(oe*$),.3,3);e({type:"update",sel:{type:"item",uid:q.uid},patch:{scale:{x:oe,y:Q,z:$}},mergeKey:`sz:${q.uid}`})}else if(q.kind==="moveRoom"){const w=n.find(H=>H.uid===q.uid);let P=se-q.ox,I=T-q.oz;if(w){const{xs:H,zs:N}=ie(q.uid),oe=re(P,H),$=re(P+w.w,H);oe!=null&&($==null||Math.abs(P-oe)<=Math.abs(P+w.w-$))?P=oe:$!=null?P=$-w.w:P=mn(P,c);const Q=re(I,N),ue=re(I+w.d,N);Q!=null&&(ue==null||Math.abs(I-Q)<=Math.abs(I+w.d-ue))?I=Q:ue!=null?I=ue-w.d:I=mn(I,c)}e({type:"update",sel:{type:"room",uid:q.uid},patch:{x:P,z:I},mergeKey:`mv:${q.uid}`})}else if(q.kind==="resizeRoom"){let w=q.x0,P=q.z0,I=q.x0+q.w0,H=q.z0+q.d0;const{xs:N,zs:oe}=ie(q.uid),$=ue=>{const ae=re(ue,N);return ae??mn(ue,c)},Q=ue=>{const ae=re(ue,oe);return ae??mn(ue,c)};q.handle.includes("e")&&(I=Math.max(w+.5,$(se))),q.handle.includes("w")&&(w=Math.min(I-.5,$(se))),q.handle.includes("s")&&(H=Math.max(P+.5,Q(T))),q.handle.includes("n")&&(P=Math.min(H-.5,Q(T))),e({type:"update",sel:{type:"room",uid:q.uid},patch:{x:w,z:P,w:I-w,d:H-P},mergeKey:`rs:${q.uid}`})}else if(q.kind==="moveWall"){const w=mn(se-q.ox,c),P=mn(T-q.oz,c);e({type:"update",sel:{type:"wall",uid:q.uid},patch:{x1:q.x1+w,z1:q.z1+P,x2:q.x2+w,z2:q.z2+P},mergeKey:`mv:${q.uid}`})}else if(q.kind==="wallEnd"){const w=q.end==="1"?{x1:mn(se,c),z1:mn(T,c)}:{x2:mn(se,c),z2:mn(T,c)};e({type:"update",sel:{type:"wall",uid:q.uid},patch:w,mergeKey:`we:${q.uid}`})}},Fe=O=>{v.current.delete(O.pointerId),v.current.size<2&&(M.current=null);const V=m.current;V&&(V.kind==="drawRoom"?V.cur.w>.3&&V.cur.d>.3?e({type:"addRoom",x:V.cur.x,z:V.cur.z,w:V.cur.w,d:V.cur.d,height:l}):e({type:"addRoom",x:me(V.x0-1.8),z:ge(V.z0-1.5),w:3.6,d:3,height:l}):V.kind==="drawWall"&&Math.hypot(V.cur.x2-V.cur.x1,V.cur.z2-V.cur.z1)>.2?e({type:"addWall",...V.cur,height:l}):V.kind==="pan"&&!V.moved&&e({type:"select",sel:null})),v.current.size===0&&u(null);try{f.current.releasePointerCapture(O.pointerId)}catch{}},Ke=O=>{const[V,J]=ce(O),q=C.current,se=zr(q.scale*(O.deltaY<0?1.1:.9),12,220),T=(V-q.panX)/q.scale,w=(J-q.panY)/q.scale;y({scale:se,panX:V-T*se,panY:J-w*se,init:!0})},ke=[],F=[];{const O=o==="ft"?.3048:1,V=U*O;let J=1;V<6&&(J=5),V*J<6&&(J=25);const q=J*5,[se]=Y(0,0),[T]=Y(A,0),[,w]=Y(0,0),[,P]=Y(0,D),I=se/O,H=T/O,N=w/O,oe=P/O,$=o==="ft"?"′":"m";if((H-I)/J<500){for(let Q=Math.ceil(I/J)*J;Q<=H;Q+=J){const ue=Math.round(Q),[ae]=X(ue*O,0),pe=ue===0,be=ue%q===0;ke.push(_.jsx("line",{x1:ae,y1:0,x2:ae,y2:D,stroke:"#000",strokeOpacity:pe?.22:be?.11:.045,strokeWidth:1},`v${ue}`)),be&&!pe&&F.push(_.jsxs("text",{x:ae+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[ue,$]},`vl${ue}`))}for(let Q=Math.ceil(N/J)*J;Q<=oe;Q+=J){const ue=Math.round(Q),[,ae]=X(0,ue*O),pe=ue===0,be=ue%q===0;ke.push(_.jsx("line",{x1:0,y1:ae,x2:A,y2:ae,stroke:"#000",strokeOpacity:pe?.22:be?.11:.045,strokeWidth:1},`h${ue}`)),be&&!pe&&F.push(_.jsxs("text",{x:3,y:ae-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[ue,$]},`hl${ue}`))}}}const pt=n.length===0&&i.length===0&&r.length===0;return _.jsxs("div",{className:"editor2d",ref:d,children:[_.jsxs("svg",{ref:f,onPointerDown:Ne,onPointerMove:Ce,onPointerUp:Fe,onPointerCancel:Fe,onWheel:Ke,style:{touchAction:"none",cursor:a==="select"?"default":"crosshair"},children:[_.jsx("defs",{children:_.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:_.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),_.jsx("rect",{x:0,y:0,width:A,height:D,fill:"transparent"}),_.jsx("g",{pointerEvents:"none",children:ke}),_.jsx("g",{pointerEvents:"none",children:F}),n.map(O=>{const[V,J]=X(O.x,O.z);return _.jsx("rect",{x:V,y:J,width:O.w*U,height:O.d*U,fill:dM,pointerEvents:"none"},O.uid)}),n.map(O=>_.jsx("g",{pointerEvents:"none",children:km.map(V=>{const[J,q,se,T]=wu(O,V),[w,P]=X(J,q),[I,H]=X(se,T),N=Bm(O,V),oe=(s==null?void 0:s.type)==="roomwall"&&s.uid===O.uid&&s.side===V;return _.jsx("line",{x1:w,y1:P,x2:I,y2:H,stroke:oe?Jt:N?Fm:uM,strokeWidth:oe?6:N?4:2,strokeLinecap:"round",strokeDasharray:N?void 0:"7 7"},V)})},O.uid)),Z&&(()=>{const[O,V]=X(Z.x,Z.z),J=Z.w*U;return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("rect",{x:O,y:V,width:J,height:Z.d*U,fill:"none",stroke:Jt,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),_.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[_.jsx("rect",{x:O+J/2-78,y:V-25,width:156,height:19,rx:9.5,fill:Jt}),_.jsxs("text",{x:O+J/2,y:V-11,textAnchor:"middle",children:[Ye(Z.w,o)," × ",Ye(Z.d,o)]})]}),Object.entries(Me(Z)).map(([q,[se,T]])=>_.jsx("circle",{cx:se,cy:T,r:7,fill:Jt,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},q))]})})(),i.map(O=>{const[V,J]=X(O.x1,O.z1),[q,se]=X(O.x2,O.z2),T=(ne==null?void 0:ne.uid)===O.uid;return _.jsx("line",{x1:V,y1:J,x2:q,y2:se,stroke:T?Jt:Fm,strokeWidth:Math.max(5,O.thickness*U),strokeLinecap:"round",pointerEvents:"none"},O.uid)}),ne&&(()=>{const[O,V]=X(ne.x1,ne.z1),[J,q]=X(ne.x2,ne.z2);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("circle",{cx:O,cy:V,r:7,fill:"#fff",stroke:Jt,strokeWidth:2.5,filter:"url(#softshadow)"}),_.jsx("circle",{cx:J,cy:q,r:7,fill:"#fff",stroke:Jt,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),r.map(O=>{const V=vi[O.type];if(!V)return null;const[J,q]=X(O.x,O.z),se=Br(V,O),T=se.w*U,w=se.d*U,P=(L==null?void 0:L.uid)===O.uid;return _.jsxs("g",{transform:`translate(${J} ${q}) rotate(${O.rot||0})`,pointerEvents:"none",children:[_.jsx("g",{filter:"url(#softshadow)",opacity:V.shape==="rug"||V.shape==="round-rug"?.96:1,children:_.jsx(xx,{item:{...V,color:O.color||V.color},wpx:T,dpx:w})}),P&&_.jsx("rect",{x:-T/2-5,y:-w/2-5,width:T+10,height:w+10,rx:7,fill:"none",stroke:Jt,strokeWidth:2,strokeDasharray:"6 5"})]},O.uid)}),(h==null?void 0:h.kind)==="drawRoom"&&(()=>{const[O,V]=X(h.cur.x,h.cur.z);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("rect",{x:O,y:V,width:h.cur.w*U,height:h.cur.d*U,fill:Jt,fillOpacity:.12,stroke:Jt,strokeWidth:3,strokeDasharray:"6 5"}),_.jsxs("text",{x:O+h.cur.w*U/2,y:V-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[Ye(h.cur.w,o)," × ",Ye(h.cur.d,o)]})]})})(),(h==null?void 0:h.kind)==="drawWall"&&(()=>{const[O,V]=X(h.cur.x1,h.cur.z1),[J,q]=X(h.cur.x2,h.cur.z2),se=Math.hypot(h.cur.x2-h.cur.x1,h.cur.z2-h.cur.z1);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("line",{x1:O,y1:V,x2:J,y2:q,stroke:Jt,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),_.jsx("text",{x:(O+J)/2,y:(V+q)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:Ye(se,o)})]})})(),L&&(()=>{const O=he(L),V=vi[L.type],J=Br(V,L),[q,se]=X(L.x,L.z),T=Math.hypot(J.w*U,J.d*U)/2;return _.jsxs("g",{pointerEvents:"none",children:[O.map(([w,P],I)=>_.jsx("circle",{cx:w,cy:P,r:7,fill:"#fff",stroke:Jt,strokeWidth:2.5,filter:"url(#softshadow)"},I)),_.jsx("rect",{x:q-78,y:se-T-30,width:156,height:20,rx:10,fill:Jt}),_.jsxs("text",{x:q,y:se-T-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[Ye(J.w,o)," × ",Ye(J.d,o)]})]})})(),(s==null?void 0:s.type)==="roomwall"&&(()=>{const O=n.find(oe=>oe.uid===s.uid);if(!O)return null;const[V,J,q,se]=wu(O,s.side),[T,w]=X(V,J),[P,I]=X(q,se),H=Math.hypot(q-V,se-J),N=Bm(O,s.side);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("circle",{cx:T,cy:w,r:6,fill:"#fff",stroke:Jt,strokeWidth:2.5,filter:"url(#softshadow)"}),_.jsx("circle",{cx:P,cy:I,r:6,fill:"#fff",stroke:Jt,strokeWidth:2.5,filter:"url(#softshadow)"}),_.jsx("rect",{x:(T+P)/2-60,y:(w+I)/2-11,width:120,height:20,rx:10,fill:Jt}),_.jsx("text",{x:(T+P)/2,y:(w+I)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:N?Ye(H,o):"opening"})]})})()]}),_.jsx("button",{className:"recenter",onClick:z,"aria-label":"Fit to view",children:_.jsx(Gf,{size:20})}),pt&&_.jsxs("div",{className:"empty",children:[_.jsx("b",{children:"Start your floor plan"}),_.jsxs("span",{children:["Pick ",_.jsx("strong",{children:"Room"})," in the toolbar and drag — or just tap the canvas to drop one."]}),_.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:me(-1.8),z:ge(-1.5),w:3.6,d:3,height:l}),children:"+ Add a room"})]}),_.jsx("div",{className:"hint",children:a==="room"?"Drag to draw a room":a==="wall"?"Drag to draw a wall":L?"Drag to move · drag white corners to resize":Z?"Drag inside to move · corners to resize · tap a wall to edit it":ne?"Drag the wall or its endpoints":(s==null?void 0:s.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}const fM={n:"North",e:"East",s:"South",w:"West"};function Wf(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function yx(t,e){const n=[];return t.forEach((i,r)=>{for(const s of["n","e","s","w"])n.push({ref:{kind:"room",uid:i.uid,side:s},label:`Room ${r+1} · ${fM[s]}`})}),e.forEach((i,r)=>n.push({ref:{kind:"wall",uid:i.uid},label:`Wall ${r+1}`})),n}function ea(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const gn="#d9b779",wt=.05,Eu=18,Et=(t,e)=>Math.round(t/e)*e,jr=(t,e,n)=>Math.max(e,Math.min(n,t)),pM=(t,e,n,i,r,s)=>{const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=jr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))},Vo={color:"#c79a6b",tex:"wood:oak"},Vm={color:"#7a543a",tex:"wood:walnut"},mM={color:"#d7d2c8",tex:"stone:white"},gM=[{id:"bunk",name:"Bunk bed"},{id:"base",name:"Base cabinets"},{id:"upper",name:"Upper cabinets"},{id:"cubby",name:"Cubby wall"},{id:"shelves",name:"Open shelves"},{id:"wardrobe",name:"Wardrobe"}];function vM(t,e,n){const i=e.length,r=e.height,s=[],o=(a,l,c,d,f,p="panel",g=Vo)=>s.push({wall:n,u:Math.max(0,a),v:Math.max(0,l),w:c,h:d,depth:f,kind:p,color:g.color,tex:g.tex});if(t==="bunk"){const a=Math.min(i,2.03),l=1;o(0,0,.1,1.85,l),o(a-.1,0,.1,1.85,l),o(0,.35,a,.12,l),o(0,1.45,a,.12,l),o(0,1.6,a,.32,.05)}else if(t==="base"){const l=Math.max(1,Math.floor(i/.6)),c=l*.6;for(let d=0;d<l;d++)o(d*.6,0,.6-.01,.9,.6);o(0,.9,c,.04,.64,"panel",mM)}else if(t==="upper"){const l=Math.max(1,Math.floor(i/.6));for(let c=0;c<l;c++)o(c*.6,1.45,.6-.01,.7,.32)}else if(t==="cubby"||t==="shelves"){const a=t==="shelves"?1:jr(Math.round(i/.5),2,6),l=jr(Math.round(r*.85/.45),2,6),c=i/a,d=Math.min(.5,r*.85/l);for(let f=0;f<l;f++)for(let p=0;p<a;p++)o(p*c,f*d,c,d,.4,"cubby")}else if(t==="wardrobe"){const a=Math.min(i,1.2),l=Math.min(r,2);o(0,0,a/2-.005,l,.6,"panel",Vm),o(a/2,0,a/2,l,.6,"panel",Vm)}return s}function xM(){const{state:t,dispatch:e}=Ki(),{rooms:n,walls:i,builtins:r,selected:s,units:o,sideTool:a}=t,l=a,c=De.useRef(null),d=De.useRef(null),[f,p]=De.useState({W:360,H:540}),[g,x]=De.useState({scale:64,panX:60,panY:460,init:!1}),[y,h]=De.useState(0),[u,m]=De.useState(null),v=De.useRef(null);v.current=u;const M=De.useRef(new Map),C=De.useRef(null),b=De.useRef(g);b.current=g;const A=yx(n,i),D=Math.min(y,Math.max(0,A.length-1)),z=A[D],S=z?Wf(z.ref,n,i):null,E=De.useRef(!1);De.useEffect(()=>{if(E.current||!A.length)return;E.current=!0;let P=t.sideWall;if(!P&&s&&(s.type==="wall"||s.type==="roomwall")&&(P=s.type==="wall"?{kind:"wall",uid:s.uid}:{kind:"room",uid:s.uid,side:s.side}),P){const I=A.findIndex(H=>ea(H.ref,P));I>=0&&h(I)}},[]);const U=z?`${z.ref.kind}:${z.ref.uid}:${z.ref.side||""}`:"";De.useEffect(()=>{z&&e({type:"sideWall",ref:z.ref})},[U]),De.useLayoutEffect(()=>{const P=c.current;if(!P)return;const I=new ResizeObserver(()=>p({W:P.clientWidth,H:P.clientHeight}));return I.observe(P),p({W:P.clientWidth,H:P.clientHeight}),()=>I.disconnect()},[]);const{W:B,H:K}=f,{scale:X,panX:Y,panY:ce}=g,L=(P,I)=>[P*X+Y,ce-I*X],Z=(P,I)=>[(P-Y)/X,(ce-I)/X],ne=P=>{const I=d.current.getBoundingClientRect();return[P.clientX-I.left,P.clientY-I.top]};function he(){if(!S||!B){x($=>({...$,init:!0}));return}const P=56,I=116,H=60,N=jr(Math.min((B-2*P)/Math.max(.5,S.length),(K-I-H)/Math.max(.5,S.height)),14,200),oe=(I+(K-H))/2;x({scale:N,panX:B/2-S.length/2*N,panY:oe+S.height/2*N,init:!0})}const Me=S?`${z.label}`:"none";De.useLayoutEffect(()=>{v.current||he()},[Me,B,K]);const we=S?r.filter(P=>ea(P.wall,z.ref)):[],ie=(s==null?void 0:s.type)==="builtin"?r.find(P=>P.uid===s.uid):null,re=ie&&S&&ea(ie.wall,z.ref)?ie:null,me=P=>[L(P.u,P.v),L(P.u+P.w,P.v),L(P.u+P.w,P.v+P.h),L(P.u,P.v+P.h)];function ge(P,I){const[H,N]=Z(P,I);if(re)if(re.kind==="board")for(const oe of["1","2"]){const[$,Q]=L(re["u"+oe],re["v"+oe]);if(Math.hypot(P-$,I-Q)<Eu)return{kind:"b-end",end:oe}}else{const oe=me(re),$=[2,3,0,1];for(let Q=0;Q<4;Q++)if(Math.hypot(P-oe[Q][0],I-oe[Q][1])<Eu){const ue=me(re)[$[Q]];return{kind:"b-handle",fixedU:(ue[0]-Y)/X,fixedV:(ce-ue[1])/X}}}if(S&&!re){const oe=[["len",S.length,S.height/2],["ht",S.length/2,S.height],["both",S.length,S.height]];for(const[$,Q,ue]of oe){const[ae,pe]=L(Q,ue);if(Math.hypot(P-ae,I-pe)<Eu)return{kind:"wall-handle",which:$}}}for(let oe=we.length-1;oe>=0;oe--){const $=we[oe];if($.kind==="board"){if(pM(H,N,$.u1,$.v1,$.u2,$.v2)<=$.thickness/2+.1)return{kind:"builtin",uid:$.uid}}else if(H>=$.u&&H<=$.u+$.w&&N>=$.v&&N<=$.v+$.h)return{kind:"builtin",uid:$.uid}}return{kind:"empty"}}const Ne=P=>{const[I,H]=ne(P);if(M.current.set(P.pointerId,{x:I,y:H}),d.current.setPointerCapture(P.pointerId),M.current.size===2){const Q=[...M.current.values()],ue=(Q[0].x+Q[1].x)/2,ae=(Q[0].y+Q[1].y)/2,pe=Math.hypot(Q[0].x-Q[1].x,Q[0].y-Q[1].y),be=b.current;C.current={startDist:pe,startScale:be.scale,wmx:(ue-be.panX)/be.scale,wmy:(be.panY-ae)/be.scale},m(null);return}if(M.current.size>2||!S)return;const[N,oe]=Z(I,H),$=ge(I,H);if($.kind==="b-handle")m({kind:"resizeB",uid:re.uid,fixedU:$.fixedU,fixedV:$.fixedV});else if($.kind==="b-end")m({kind:"endB",uid:re.uid,end:$.end});else if($.kind==="wall-handle")m({kind:"resizeWall",which:$.which});else if($.kind==="builtin"){const Q=we.find(ue=>ue.uid===$.uid);e({type:"select",sel:{type:"builtin",uid:$.uid}}),Q.kind==="board"?m({kind:"moveBoard",uid:$.uid,pu:N,pv:oe,u1:Q.u1,v1:Q.v1,u2:Q.u2,v2:Q.v2}):m({kind:"moveB",uid:$.uid,ou:N-Q.u,ov:oe-Q.v})}else if(l==="box")m({kind:"drawBox",u0:Et(N,wt),v0:Et(oe,wt),cur:{u:Et(N,wt),v:Et(oe,wt),w:0,h:0}});else if(l==="board"){const Q=Et(N,wt),ue=Et(oe,wt);m({kind:"drawLine",u1:Q,v1:ue,cur:{u1:Q,v1:ue,u2:Q,v2:ue}})}else m({kind:"pan",sx:I,sy:H,panX:b.current.panX,panY:b.current.panY,moved:!1})},Ce=P=>{const[I,H]=ne(P);if(M.current.has(P.pointerId)&&M.current.set(P.pointerId,{x:I,y:H}),C.current&&M.current.size>=2){const Q=[...M.current.values()],ue=(Q[0].x+Q[1].x)/2,ae=(Q[0].y+Q[1].y)/2,pe=Math.hypot(Q[0].x-Q[1].x,Q[0].y-Q[1].y),be=C.current,ze=jr(be.startScale*(pe/be.startDist),12,240);x({scale:ze,panX:ue-be.wmx*ze,panY:ae+be.wmy*ze,init:!0});return}const N=v.current;if(!N)return;const[oe,$]=Z(I,H);if(N.kind==="pan")!N.moved&&Math.hypot(I-N.sx,H-N.sy)>4&&(N.moved=!0),x(Q=>({...Q,panX:N.panX+(I-N.sx),panY:N.panY+(H-N.sy)}));else if(N.kind==="drawBox"){const Q=Et(oe,wt),ue=Et($,wt);m(ae=>({...ae,cur:{u:Math.min(ae.u0,Q),v:Math.min(ae.v0,ue),w:Math.abs(Q-ae.u0),h:Math.abs(ue-ae.v0)}}))}else if(N.kind==="drawLine"){let Q=Et(oe,wt),ue=Et($,wt);Math.abs(Q-N.u1)<.08&&(Q=N.u1),Math.abs(ue-N.v1)<.08&&(ue=N.v1),m(ae=>({...ae,cur:{u1:ae.u1,v1:ae.v1,u2:Q,v2:ue}}))}else if(N.kind==="moveB")e({type:"update",sel:{type:"builtin",uid:N.uid},patch:{u:Et(oe-N.ou,wt),v:Et($-N.ov,wt)},mergeKey:`mb:${N.uid}`});else if(N.kind==="moveBoard"){const Q=Et(oe-N.pu,wt),ue=Et($-N.pv,wt);e({type:"update",sel:{type:"builtin",uid:N.uid},patch:{u1:N.u1+Q,v1:N.v1+ue,u2:N.u2+Q,v2:N.v2+ue},mergeKey:`mb:${N.uid}`})}else if(N.kind==="endB"){const Q=N.end==="1"?{u1:Et(oe,wt),v1:Et($,wt)}:{u2:Et(oe,wt),v2:Et($,wt)};e({type:"update",sel:{type:"builtin",uid:N.uid},patch:Q,mergeKey:`eb:${N.uid}`})}else if(N.kind==="resizeB"){const Q=Et(oe,wt),ue=Et($,wt);e({type:"update",sel:{type:"builtin",uid:N.uid},patch:{u:Math.min(N.fixedU,Q),v:Math.min(N.fixedV,ue),w:Math.max(.1,Math.abs(Q-N.fixedU)),h:Math.max(.1,Math.abs(ue-N.fixedV))},mergeKey:`rb:${N.uid}`})}else if(N.kind==="resizeWall"){let Q=S.length,ue=S.height;(N.which==="len"||N.which==="both")&&(Q=Math.max(.5,Et(oe,wt))),(N.which==="ht"||N.which==="both")&&(ue=jr(Et($,wt),1.5,6));const ae=z.ref;if(ae.kind==="room"){const pe={height:ue};ae.side==="n"||ae.side==="s"?pe.w=Q:pe.d=Q,e({type:"update",sel:{type:"room",uid:ae.uid},patch:pe,mergeKey:`ws:${ae.uid}`})}else e({type:"update",sel:{type:"wall",uid:ae.uid},patch:{height:ue,x2:S.ox+S.dirx*Q,z2:S.oz+S.dirz*Q},mergeKey:`ws:${ae.uid}`})}},Fe=P=>{M.current.delete(P.pointerId),M.current.size<2&&(C.current=null);const I=v.current;I&&S&&(I.kind==="drawBox"&&I.cur.w>.1&&I.cur.h>.1?e({type:"addBuiltin",builtin:{wall:z.ref,u:I.cur.u,v:I.cur.v,w:I.cur.w,h:I.cur.h,depth:.5,kind:"cubby",color:Vo.color,tex:Vo.tex}}):I.kind==="drawLine"&&Math.hypot(I.cur.u2-I.cur.u1,I.cur.v2-I.cur.v1)>.05?e({type:"addBuiltin",builtin:{wall:z.ref,kind:"board",u1:I.cur.u1,v1:I.cur.v1,u2:I.cur.u2,v2:I.cur.v2,thickness:.05,depth:.04,color:Vo.color,tex:Vo.tex}}):I.kind==="pan"&&!I.moved&&e({type:"select",sel:null})),I&&I.kind==="resizeWall"&&he(),M.current.size===0&&m(null);try{d.current.releasePointerCapture(P.pointerId)}catch{}},Ke=P=>{const[I,H]=ne(P),N=b.current,oe=jr(N.scale*(P.deltaY<0?1.1:.9),12,240);x({scale:oe,panX:I-(I-N.panX)/N.scale*oe,panY:H+(N.panY-H)/N.scale*oe,init:!0})},ke=[],F=[],pt=[];let O=0,V=0,J=0;if(S){for(let H=0;H<=S.length+1e-6;H+=.5){const[N]=L(H,0);ke.push(_.jsx("line",{x1:N,y1:L(0,0)[1],x2:N,y2:L(0,S.height)[1],stroke:"#000",strokeOpacity:Math.abs(H%1)<1e-6?.1:.045,strokeWidth:1},`gu${H.toFixed(2)}`))}for(let H=0;H<=S.height+1e-6;H+=.5){const[,N]=L(0,H);ke.push(_.jsx("line",{x1:L(0,0)[0],y1:N,x2:L(S.length,0)[0],y2:N,stroke:"#000",strokeOpacity:Math.abs(H%1)<1e-6?.1:.045,strokeWidth:1},`gv${H.toFixed(2)}`))}O=L(0,0)[1],V=L(0,S.height)[1],J=L(0,0)[0];const P=o==="m"?.5:.3048;let I=0;for(let H=0;H<=S.height+1e-6;H+=P,I++){const N=L(0,H)[1],oe=I%2===0;F.push(_.jsx("line",{x1:J-7,y1:N,x2:J,y2:N,stroke:"#9aa1ab",strokeWidth:oe?1.6:1},`t${I}`)),oe&&H>.05&&F.push(_.jsx("text",{x:J-10,y:N+3,textAnchor:"end",fontSize:9.5,fill:"#8a92a0",fontFamily:"-apple-system, system-ui, sans-serif",children:Ye(H,o)},`rl${I}`))}for(let H=J%16;H<B;H+=16)pt.push(_.jsx("line",{x1:H,y1:O,x2:H-10,y2:O+12,stroke:"#39414f",strokeOpacity:.22,strokeWidth:1},`hx${H}`))}if(!A.length)return _.jsx("div",{className:"editor2d elevation",ref:c,children:_.jsxs("div",{className:"empty",children:[_.jsx("b",{children:"No walls yet"}),_.jsxs("span",{children:["Go to ",_.jsx("strong",{children:"Plan"})," and draw a room or wall, then come back to design built-ins against it."]})]})});const[q,se]=S?L(0,S.height):[0,0],T=S?S.length*X:0,w=S?S.height*X:0;return _.jsxs("div",{className:"editor2d elevation",ref:c,children:[_.jsxs("svg",{ref:d,onPointerDown:Ne,onPointerMove:Ce,onPointerUp:Fe,onPointerCancel:Fe,onWheel:Ke,style:{touchAction:"none",cursor:l==="select"?"default":"crosshair"},children:[_.jsxs("defs",{children:[_.jsx("filter",{id:"esh",x:"-30%",y:"-30%",width:"160%",height:"160%",children:_.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})}),_.jsxs("linearGradient",{id:"wallgrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"0",stopColor:"#f6f7f9"}),_.jsx("stop",{offset:"1",stopColor:"#e2e6ec"})]})]}),_.jsx("rect",{x:0,y:0,width:B,height:K,fill:"transparent"}),S&&_.jsxs(_.Fragment,{children:[_.jsx("rect",{x:q,y:se,width:T,height:w,fill:"url(#wallgrad)",stroke:"#39414f",strokeWidth:2.5,pointerEvents:"none"}),_.jsx("line",{x1:q,y1:V,x2:q+T,y2:V,stroke:"#39414f",strokeOpacity:.5,strokeWidth:2,strokeDasharray:"7 6",pointerEvents:"none"}),_.jsx("g",{pointerEvents:"none",children:ke}),_.jsx("g",{pointerEvents:"none",children:F}),_.jsx("line",{x1:0,y1:O,x2:B,y2:O,stroke:"#39414f",strokeWidth:3.5,pointerEvents:"none"}),_.jsx("g",{pointerEvents:"none",children:pt}),_.jsx("text",{x:q+7,y:O-7,fontSize:10,fontWeight:700,letterSpacing:"1.5",fill:"#39414f",opacity:.45,pointerEvents:"none",children:"FLOOR"}),we.map(P=>{const I=(re==null?void 0:re.uid)===P.uid;if(P.kind==="board"){const[$,Q]=L(P.u1,P.v1),[ue,ae]=L(P.u2,P.v2);return _.jsx("line",{x1:$,y1:Q,x2:ue,y2:ae,stroke:I?gn:P.color,strokeWidth:Math.max(4,P.thickness*X),strokeLinecap:"round",pointerEvents:"none"},P.uid)}const[H,N]=L(P.u,P.v+P.h),oe=P.kind==="cubby";return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("rect",{x:H,y:N,width:P.w*X,height:P.h*X,fill:oe?"#f6f3ec":P.color,stroke:I?gn:P.color,strokeWidth:oe?Math.max(4,.05*X):2,filter:"url(#esh)"}),I&&_.jsx("rect",{x:H-4,y:N-4,width:P.w*X+8,height:P.h*X+8,rx:6,fill:"none",stroke:gn,strokeWidth:2,strokeDasharray:"6 5"})]},P.uid)}),(u==null?void 0:u.kind)==="drawBox"&&(()=>{const[P,I]=L(u.cur.u,u.cur.v+u.cur.h);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("rect",{x:P,y:I,width:u.cur.w*X,height:u.cur.h*X,fill:gn,fillOpacity:.12,stroke:gn,strokeWidth:3,strokeDasharray:"6 5"}),_.jsxs("text",{x:P+u.cur.w*X/2,y:I-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[Ye(u.cur.w,o)," × ",Ye(u.cur.h,o)]})]})})(),(u==null?void 0:u.kind)==="drawLine"&&(()=>{const[P,I]=L(u.cur.u1,u.cur.v1),[H,N]=L(u.cur.u2,u.cur.v2),oe=Math.hypot(u.cur.u2-u.cur.u1,u.cur.v2-u.cur.v1);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("line",{x1:P,y1:I,x2:H,y2:N,stroke:gn,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),_.jsx("text",{x:(P+H)/2,y:(I+N)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:Ye(oe,o)})]})})(),re&&re.kind==="board"&&(()=>{const[P,I]=L(re.u1,re.v1),[H,N]=L(re.u2,re.v2);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("circle",{cx:P,cy:I,r:7,fill:"#fff",stroke:gn,strokeWidth:2.5,filter:"url(#esh)"}),_.jsx("circle",{cx:H,cy:N,r:7,fill:"#fff",stroke:gn,strokeWidth:2.5,filter:"url(#esh)"})]})})(),re&&re.kind!=="board"&&(()=>{const P=me(re),[I,H]=L(re.u+re.w/2,re.v+re.h);return _.jsxs("g",{pointerEvents:"none",children:[P.map(([N,oe],$)=>_.jsx("circle",{cx:N,cy:oe,r:7,fill:"#fff",stroke:gn,strokeWidth:2.5,filter:"url(#esh)"},$)),_.jsx("rect",{x:I-78,y:H-28,width:156,height:20,rx:10,fill:gn}),_.jsxs("text",{x:I,y:H-14,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[Ye(re.w,o)," × ",Ye(re.h,o)]})]})})(),!re&&(()=>{const P=L(S.length/2,S.height),I=L(S.length,S.height/2),H=L(S.length,S.height),[N,oe]=L(0,S.height);return _.jsxs("g",{pointerEvents:"none",children:[_.jsx("rect",{x:N+8,y:oe+8,width:148,height:20,rx:10,fill:gn}),_.jsxs("text",{x:N+82,y:oe+22,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[Ye(S.length,o)," W × ",Ye(S.height,o)," H"]}),_.jsx("circle",{cx:P[0],cy:P[1],r:7.5,fill:gn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),_.jsx("circle",{cx:I[0],cy:I[1],r:7.5,fill:gn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),_.jsx("circle",{cx:H[0],cy:H[1],r:8,fill:gn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"})]})})()]})]}),_.jsxs("div",{className:"wall-picker",children:[_.jsx("button",{onClick:()=>h((D-1+A.length)%A.length),"aria-label":"Previous wall",children:"‹"}),_.jsx("span",{children:z==null?void 0:z.label}),_.jsx("button",{onClick:()=>h((D+1)%A.length),"aria-label":"Next wall",children:"›"})]}),_.jsx("button",{className:"recenter",onClick:he,"aria-label":"Fit to view",children:_.jsx(Gf,{size:20})}),_.jsx("div",{className:"hint",children:re?"Drag to move · drag handles to resize · edit for depth & finish":l==="box"?"Drag empty space to add a box · tap a piece to edit it":l==="board"?"Drag empty space to draw a board · tap a piece to edit it":"Tap a piece to edit · drag the gold dots to resize the room"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="169",Js={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_M=0,Gm=1,yM=2,Sx=1,Mx=2,Ui=3,Mr=0,cn=1,Nn=2,Yt=0,$s=1,Wm=2,jm=3,Xm=4,wx=5,ai=100,SM=101,MM=102,wM=103,EM=104,Go=200,TM=201,AM=202,bM=203,rh=204,sh=205,oh=206,CM=207,ah=208,RM=209,PM=210,DM=211,LM=212,NM=213,IM=214,lh=0,ch=1,uh=2,co=3,dh=4,hh=5,fh=6,ph=7,Ex=0,UM=1,OM=2,_r=0,Tx=1,Ax=2,bx=3,Xf=4,FM=5,Cx=6,Rx=7,Px=300,uo=301,ho=302,mh=303,gh=304,Uc=306,wi=1e3,Xr=1001,vh=1002,Ht=1003,zM=1004,Xa=1005,jn=1006,Tu=1007,Yr=1008,Ei=1009,Dx=1010,Lx=1011,xa=1012,Yf=1013,ts=1014,Hi=1015,Ti=1016,qf=1017,Kf=1018,ns=1020,Nx=35902,Ix=1021,Ux=1022,Yn=1023,Ox=1024,Fx=1025,eo=1026,is=1027,zx=1028,Zf=1029,kx=1030,Qf=1031,Jf=1033,Il=33776,Ul=33777,Ol=33778,Fl=33779,xh=35840,_h=35841,yh=35842,Sh=35843,Mh=36196,wh=37492,Eh=37496,Th=37808,Ah=37809,bh=37810,Ch=37811,Rh=37812,Ph=37813,Dh=37814,Lh=37815,Nh=37816,Ih=37817,Uh=37818,Oh=37819,Fh=37820,zh=37821,zl=36492,kh=36494,Bh=36495,Bx=36283,Hh=36284,Vh=36285,Gh=36286,kM=3200,BM=3201,$f=0,HM=1,lr="",yn="srgb",Ar="srgb-linear",ep="display-p3",Oc="display-p3-linear",fc="linear",ht="srgb",pc="rec709",mc="p3",ms=7680,Ym=519,VM=512,GM=513,WM=514,Hx=515,jM=516,XM=517,YM=518,qM=519,qm=35044,Km="300 es",Vi=2e3,gc=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,Wh=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function KM(t,e){return(t%e+e)%e}function Au(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ZM={DEG2RAD:kl};class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],x=i[8],y=r[0],h=r[3],u=r[6],m=r[1],v=r[4],M=r[7],C=r[2],b=r[5],A=r[8];return s[0]=o*y+a*m+l*C,s[3]=o*h+a*v+l*b,s[6]=o*u+a*M+l*A,s[1]=c*y+d*m+f*C,s[4]=c*h+d*v+f*b,s[7]=c*u+d*M+f*A,s[2]=p*y+g*m+x*C,s[5]=p*h+g*v+x*b,s[8]=p*u+g*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,p=a*l-d*s,g=c*s-o*l,x=n*f+i*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new qe;function Vx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _a(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function QM(){const t=_a("canvas");return t.style.display="block",t}const Zm={};function Bl(t){t in Zm||(Zm[t]=!0,console.warn(t))}function JM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function $M(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qm=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jm=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[Ar]:{transfer:fc,primaries:pc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[yn]:{transfer:ht,primaries:pc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Oc]:{transfer:fc,primaries:mc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jm),fromReference:t=>t.applyMatrix3(Qm)},[ep]:{transfer:ht,primaries:mc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jm),fromReference:t=>t.applyMatrix3(Qm).convertLinearToSRGB()}},t1=new Set([Ar,Oc]),it={enabled:!0,_workingColorSpace:Ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!t1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Co[e].toReference,r=Co[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Co[t].primaries},getTransfer:function(t){return t===lr?fc:Co[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Co[e].luminanceCoefficients)}};function to(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class n1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=_a("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_a("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=to(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(to(n[i]/255)*255):n[i]=to(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i1=0;class Gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?n1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r1=0;class Ot extends cs{constructor(e=Ot.DEFAULT_IMAGE,n=Ot.DEFAULT_MAPPING,i=Xr,r=Xr,s=jn,o=Yr,a=Yn,l=Ei,c=Ot.DEFAULT_ANISOTROPY,d=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ta(),this.name="",this.source=new Gx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Px;Ot.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],x=l[9],y=l[2],h=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+h)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,C=(u+1)/2,b=(d+p)/4,A=(f+y)/4,D=(x+h)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,n),this}let m=Math.sqrt((h-x)*(h-x)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(m)<.001&&(m=1),this.x=(h-x)/m,this.y=(f-y)/m,this.z=(p-d)/m,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s1 extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Gx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends s1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Wx extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o1 extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[o+0],g=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=g,e[n+2]=x,e[n+3]=y;return}if(f!==y||l!==p||c!==g||d!==x){let h=1-a;const u=l*p+c*g+d*x+f*y,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,u*m);h=Math.sin(h*b)/C,a=Math.sin(a*b)/C}const M=a*m;if(l=l*h+p*M,c=c*h+g*M,d=d*h+x*M,f=f*h+y*M,h===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],p=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*f+l*g-c*p,e[n+1]=l*x+d*p+c*f-a*g,e[n+2]=c*x+d*g+a*p-l*f,e[n+3]=d*x-a*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),p=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*d*f+c*g*x,this._y=c*g*f-p*d*x,this._z=c*d*x+p*g*f,this._w=c*d*f-p*g*x;break;case"YXZ":this._x=p*d*f+c*g*x,this._y=c*g*f-p*d*x,this._z=c*d*x-p*g*f,this._w=c*d*f+p*g*x;break;case"ZXY":this._x=p*d*f-c*g*x,this._y=c*g*f+p*d*x,this._z=c*d*x+p*g*f,this._w=c*d*f-p*g*x;break;case"ZYX":this._x=p*d*f-c*g*x,this._y=c*g*f+p*d*x,this._z=c*d*x-p*g*f,this._w=c*d*f+p*g*x;break;case"YZX":this._x=p*d*f+c*g*x,this._y=c*g*f+p*d*x,this._z=c*d*x-p*g*f,this._w=c*d*f-p*g*x;break;case"XZY":this._x=p*d*f-c*g*x,this._y=c*g*f-p*d*x,this._z=c*d*x+p*g*f,this._w=c*d*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new k,$m=new rs;class Aa{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),qa.subVectors(this.max,Ro),vs.subVectors(e.a,Ro),xs.subVectors(e.b,Ro),_s.subVectors(e.c,Ro),Ji.subVectors(xs,vs),$i.subVectors(_s,xs),Rr.subVectors(vs,_s);let n=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-Rr.z,Rr.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,Rr.z,0,-Rr.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-Rr.y,Rr.x,0];return!Du(n,vs,xs,_s,qa)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,vs,xs,_s,qa))?!1:(Ka.crossVectors(Ji,$i),n=[Ka.x,Ka.y,Ka.z],Du(n,vs,xs,_s,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,Ya=new Aa,vs=new k,xs=new k,_s=new k,Ji=new k,$i=new k,Rr=new k,Ro=new k,qa=new k,Ka=new k,Pr=new k;function Du(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),d=i.dot(Pr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const a1=new Aa,Po=new k,Lu=new k;class Fc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):a1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Lu)),this.expandByPoint(Po.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new k,Nu=new k,Za=new k,er=new k,Iu=new k,Qa=new k,Uu=new k;class zc{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),er.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Za),a=er.dot(this.direction),l=-er.dot(Za),c=er.lengthSq(),d=Math.abs(1-o*o);let f,p,g,x;if(d>0)if(f=o*l-a,p=o*a-l,x=s*d,f>=0)if(p>=-x)if(p<=x){const y=1/d;f*=y,p*=y,g=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nu).addScaledVector(Za,p),g}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),Qa.subVectors(i,e),Uu.crossVectors(Iu,Qa);let o=this.direction.dot(Uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Qa.crossVectors(er,Qa));if(l<0)return null;const c=a*this.direction.dot(Iu.cross(er));if(c<0||l+c>o)return null;const d=-a*er.dot(Uu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,i,r,s,o,a,l,c,d,f,p,g,x,y,h){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,p,g,x,y,h)}set(e,n,i,r,s,o,a,l,c,d,f,p,g,x,y,h){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=g,u[7]=x,u[11]=y,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*d,g=o*f,x=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+x*c,n[5]=p-y*c,n[9]=-a*l,n[2]=y-p*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,x=c*d,y=c*f;n[0]=p+y*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=y+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,x=c*d,y=c*f;n[0]=p-y*a,n[4]=-o*f,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=y-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,g=o*f,x=a*d,y=a*f;n[0]=l*d,n[4]=x*c-g,n[8]=p*c+y,n[1]=l*f,n[5]=y*c+p,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=y-p*f,n[8]=x*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+x,n[10]=p-y*f}else if(e.order==="XZY"){const p=o*l,g=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+y,n[5]=o*d,n[9]=g*f-x,n[2]=x*f-g,n[6]=a*d,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l1,e,c1)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),tr.crossVectors(i,Rn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),tr.crossVectors(i,Rn)),tr.normalize(),Ja.crossVectors(Rn,tr),r[0]=tr.x,r[4]=Ja.x,r[8]=Rn.x,r[1]=tr.y,r[5]=Ja.y,r[9]=Rn.y,r[2]=tr.z,r[6]=Ja.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],x=i[2],y=i[6],h=i[10],u=i[14],m=i[3],v=i[7],M=i[11],C=i[15],b=r[0],A=r[4],D=r[8],z=r[12],S=r[1],E=r[5],U=r[9],B=r[13],K=r[2],X=r[6],Y=r[10],ce=r[14],L=r[3],Z=r[7],ne=r[11],he=r[15];return s[0]=o*b+a*S+l*K+c*L,s[4]=o*A+a*E+l*X+c*Z,s[8]=o*D+a*U+l*Y+c*ne,s[12]=o*z+a*B+l*ce+c*he,s[1]=d*b+f*S+p*K+g*L,s[5]=d*A+f*E+p*X+g*Z,s[9]=d*D+f*U+p*Y+g*ne,s[13]=d*z+f*B+p*ce+g*he,s[2]=x*b+y*S+h*K+u*L,s[6]=x*A+y*E+h*X+u*Z,s[10]=x*D+y*U+h*Y+u*ne,s[14]=x*z+y*B+h*ce+u*he,s[3]=m*b+v*S+M*K+C*L,s[7]=m*A+v*E+M*X+C*Z,s[11]=m*D+v*U+M*Y+C*ne,s[15]=m*z+v*B+M*ce+C*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],x=e[3],y=e[7],h=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*p+i*c*p+r*a*g-i*l*g)+y*(+n*l*g-n*c*p+s*o*p-r*o*g+r*c*d-s*l*d)+h*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*p+r*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],x=e[12],y=e[13],h=e[14],u=e[15],m=f*h*c-y*p*c+y*l*g-a*h*g-f*l*u+a*p*u,v=x*p*c-d*h*c-x*l*g+o*h*g+d*l*u-o*p*u,M=d*y*c-x*f*c+x*a*g-o*y*g-d*a*u+o*f*u,C=x*f*l-d*y*l-x*a*p+o*y*p+d*a*h-o*f*h,b=n*m+i*v+r*M+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=m*A,e[1]=(y*p*s-f*h*s-y*r*g+i*h*g+f*r*u-i*p*u)*A,e[2]=(a*h*s-y*l*s+y*r*c-i*h*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*p*s-f*r*c+i*p*c+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(d*h*s-x*p*s+x*r*g-n*h*g-d*r*u+n*p*u)*A,e[6]=(x*l*s-o*h*s-x*r*c+n*h*c+o*r*u-n*l*u)*A,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*g+n*l*g)*A,e[8]=M*A,e[9]=(x*f*s-d*y*s-x*i*g+n*y*g+d*i*u-n*f*u)*A,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*A,e[12]=C*A,e[13]=(d*y*r-x*f*r+x*i*p-n*y*p-d*i*h+n*f*h)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*h-n*a*h)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*p+n*a*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,p=s*c,g=s*d,x=s*f,y=o*d,h=o*f,u=a*f,m=l*c,v=l*d,M=l*f,C=i.x,b=i.y,A=i.z;return r[0]=(1-(y+u))*C,r[1]=(g+M)*C,r[2]=(x-v)*C,r[3]=0,r[4]=(g-M)*b,r[5]=(1-(p+u))*b,r[6]=(h+m)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(h-m)*A,r[10]=(1-(p+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,d=1/o,f=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(a===Vi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===gc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),p=(n+e)*c,g=(i+r)*d;let x,y;if(a===Vi)x=(o+s)*f,y=-2*f;else if(a===gc)x=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new k,ti=new rt,l1=new k(0,0,0),c1=new k(1,1,1),tr=new k,Ja=new k,Rn=new k,e0=new rt,t0=new rs;class Ai{constructor(e=0,n=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u1=0;const n0=new k,Ss=new rs,Di=new rt,$a=new k,Do=new k,d1=new k,h1=new rs,i0=new k(1,0,0),r0=new k(0,1,0),s0=new k(0,0,1),o0={type:"added"},f1={type:"removed"},Ms={type:"childadded",child:null},Ou={type:"childremoved",child:null};class Gt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new k,n=new Ai,i=new rs,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new qe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(r0,e)}rotateZ(e){return this.rotateOnAxis(s0,e)}translateOnAxis(e,n){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(r0,e)}translateZ(e){return this.translateOnAxis(s0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Do,$a,this.up):Di.lookAt($a,Do,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Di),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o0),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(f1),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o0),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,d1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,h1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new k(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new k,Li=new k,Fu=new k,Ni=new k,ws=new k,Es=new k,a0=new k,zu=new k,ku=new k,Bu=new k,Hu=new ut,Vu=new ut,Gu=new ut;class li{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Li.subVectors(i,n),Fu.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Li),l=ni.dot(Fu),c=Li.dot(Li),d=Li.dot(Fu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-a*d)*p,x=(o*d-a*l)*p;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Hu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),Hu.fromBufferAttribute(e,n),Vu.fromBufferAttribute(e,i),Gu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hu,s.x),o.addScaledVector(Vu,s.y),o.addScaledVector(Gu,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Li.subVectors(e,n),ni.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ni.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Es.subVectors(s,i),zu.subVectors(e,i);const l=ws.dot(zu),c=Es.dot(zu);if(l<=0&&c<=0)return n.copy(i);ku.subVectors(e,r);const d=ws.dot(ku),f=Es.dot(ku);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ws,o);Bu.subVectors(e,s);const g=ws.dot(Bu),x=Es.dot(Bu);if(x>=0&&g<=x)return n.copy(s);const y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Es,a);const h=d*x-g*f;if(h<=0&&f-d>=0&&g-x>=0)return a0.subVectors(s,r),a=(f-d)/(f-d+(g-x)),n.copy(r).addScaledVector(a0,a);const u=1/(h+y+p);return o=y*u,a=p*u,n.copy(i).addScaledVector(ws,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=KM(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return it.fromWorkingColorSpace(en.copy(this),e),Math.round(an(en.r*255,0,255))*65536+Math.round(an(en.g*255,0,255))*256+Math.round(an(en.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=yn){it.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(el);const i=Au(nr.h,el.h,n),r=Au(nr.s,el.s,n),s=Au(nr.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Be;Be.NAMES=jx;let p1=0;class us extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=$s,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kc extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new k,tl=new Ue;class Mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qm&&(e.usage=this.usage),e}}class Xx extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Yx extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dt extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let m1=0;const Hn=new rt,ju=new Gt,Ts=new k,Pn=new Aa,Lo=new Aa,kt=new k;class hn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Yx:Xx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Pn.min,Lo.min),Pn.expandByPoint(kt),kt.addVectors(Pn.max,Lo.max),Pn.expandByPoint(kt)):(Pn.expandByPoint(Lo.min),Pn.expandByPoint(Lo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)kt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),kt.add(Ts)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new k,l[D]=new k;const c=new k,d=new k,f=new k,p=new Ue,g=new Ue,x=new Ue,y=new k,h=new k;function u(D,z,S){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,z),f.fromBufferAttribute(i,S),p.fromBufferAttribute(s,D),g.fromBufferAttribute(s,z),x.fromBufferAttribute(s,S),d.sub(c),f.sub(c),g.sub(p),x.sub(p);const E=1/(g.x*x.y-x.x*g.y);isFinite(E)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(E),h.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(E),a[D].add(y),a[z].add(y),a[S].add(y),l[D].add(h),l[z].add(h),l[S].add(h))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let D=0,z=m.length;D<z;++D){const S=m[D],E=S.start,U=S.count;for(let B=E,K=E+U;B<K;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new k,M=new k,C=new k,b=new k;function A(D){C.fromBufferAttribute(r,D),b.copy(C);const z=a[D];v.copy(z),v.sub(C.multiplyScalar(C.dot(z))).normalize(),M.crossVectors(b,z);const E=M.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,E)}for(let D=0,z=m.length;D<z;++D){const S=m[D],E=S.start,U=S.count;for(let B=E,K=E+U;B<K;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let p=0,g=e.count;p<g;p+=3){const x=e.getX(p+0),y=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,h),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let g=0,x=0;for(let y=0,h=l.length;y<h;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*d;for(let u=0;u<d;u++)p[x++]=c[g++]}return new Mi(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l0=new rt,Dr=new zc,nl=new Fc,c0=new k,il=new k,rl=new k,sl=new k,Xu=new k,ol=new k,u0=new k,al=new k;class Ze extends Gt{constructor(e=new hn,n=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Xu.fromBufferAttribute(f,e),o?ol.addScaledVector(Xu,d):ol.addScaledVector(Xu.sub(n),d))}n.add(ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(nl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(nl,c0)===null||Dr.origin.distanceToSquared(c0)>(e.far-e.near)**2))&&(l0.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(l0),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const h=p[x],u=o[h.materialIndex],m=Math.max(h.start,g.start),v=Math.min(a.count,Math.min(h.start+h.count,g.start+g.count));for(let M=m,C=v;M<C;M+=3){const b=a.getX(M),A=a.getX(M+1),D=a.getX(M+2);r=ll(this,u,e,i,c,d,f,b,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let h=x,u=y;h<u;h+=3){const m=a.getX(h),v=a.getX(h+1),M=a.getX(h+2);r=ll(this,o,e,i,c,d,f,m,v,M),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const h=p[x],u=o[h.materialIndex],m=Math.max(h.start,g.start),v=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let M=m,C=v;M<C;M+=3){const b=M,A=M+1,D=M+2;r=ll(this,u,e,i,c,d,f,b,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let h=x,u=y;h<u;h+=3){const m=h,v=h+1,M=h+2;r=ll(this,o,e,i,c,d,f,m,v,M),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}}}function g1(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,il),t.getVertexPosition(l,rl),t.getVertexPosition(c,sl);const d=g1(t,e,n,i,il,rl,sl,u0);if(d){const f=new k;li.getBarycoord(u0,il,rl,sl,f),r&&(d.uv=li.getInterpolatedAttribute(r,a,l,c,f,new Ue)),s&&(d.uv1=li.getInterpolatedAttribute(s,a,l,c,f,new Ue)),o&&(d.normal=li.getInterpolatedAttribute(o,a,l,c,f,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new k,materialIndex:0};li.getNormal(il,rl,sl,p.normal),d.face=p,d.barycoord=f}return d}class on extends hn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function x(y,h,u,m,v,M,C,b,A,D,z){const S=M/A,E=C/D,U=M/2,B=C/2,K=b/2,X=A+1,Y=D+1;let ce=0,L=0;const Z=new k;for(let ne=0;ne<Y;ne++){const he=ne*E-B;for(let Me=0;Me<X;Me++){const we=Me*S-U;Z[y]=we*m,Z[h]=he*v,Z[u]=K,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[h]=0,Z[u]=b>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(Me/A),f.push(1-ne/D),ce+=1}}for(let ne=0;ne<D;ne++)for(let he=0;he<A;he++){const Me=p+he+X*ne,we=p+he+X*(ne+1),ie=p+(he+1)+X*(ne+1),re=p+(he+1)+X*ne;l.push(Me,we,re),l.push(we,ie,re),L+=6}a.addGroup(g,L,z),g+=L,p+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const r in i)e[r]=i[r]}return e}function v1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ci={clone:fo,merge:rn};var x1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=v1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Kx extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new k,d0=new Ue,h0=new Ue;class Ln extends Kx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,d0,h0),n.subVectors(h0,d0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,bs=1;class y1 extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(As,bs,e,n);r.layers=this.layers,this.add(r);const s=new Ln(As,bs,e,n);s.layers=this.layers,this.add(s);const o=new Ln(As,bs,e,n);o.layers=this.layers,this.add(o);const a=new Ln(As,bs,e,n);a.layers=this.layers,this.add(a);const l=new Ln(As,bs,e,n);l.layers=this.layers,this.add(l);const c=new Ln(As,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Zx extends Ot{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:uo,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S1 extends Qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new on(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Yt});s.uniforms.tEquirect.value=n;const o=new Ze(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=jn),new y1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yu=new k,M1=new k,w1=new qe;class zi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(M1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||w1.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Fc,cl=new k;class np{constructor(e=new zi,n=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],x=r[9],y=r[10],h=r[11],u=r[12],m=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,p-c,h-g,M-u).normalize(),i[1].setComponents(l+s,p+c,h+g,M+u).normalize(),i[2].setComponents(l+o,p+d,h+x,M+m).normalize(),i[3].setComponents(l-o,p-d,h-x,M-m).normalize(),i[4].setComponents(l-a,p-f,h-y,M-v).normalize(),n===Vi)i[5].setComponents(l+a,p+f,h+y,M+v).normalize();else if(n===gc)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function E1(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<f.length;g++){const x=f[p],y=f[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,f[p]=y)}f.length=p+1;for(let g=0,x=f.length;g<x;g++){const y=f[g];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ss extends hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,p=n/l,g=[],x=[],y=[],h=[];for(let u=0;u<d;u++){const m=u*p-o;for(let v=0;v<c;v++){const M=v*f-s;x.push(M,-m,0),y.push(0,0,1),h.push(v/a),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,M=m+c*(u+1),C=m+1+c*(u+1),b=m+1+c*u;g.push(v,M,b),g.push(M,C,b)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var T1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D1=`#ifdef USE_AOMAP
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
#endif`,L1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
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
#endif`,I1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z1=`#ifdef USE_IRIDESCENCE
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
#endif`,k1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q1=`#define PI 3.141592653589793
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
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",nw=`
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
}`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
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
#endif`,lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
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
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gw=`uniform bool receiveShadow;
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
#endif`,vw=`#ifdef USE_ENVMAP
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
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mw=`PhysicalMaterial material;
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
#endif`,ww=`struct PhysicalMaterial {
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
}`,Ew=`
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
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,Hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
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
#endif`,qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$w=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cE=`float getShadowMask() {
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
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,DE=`#if DEPTH_PACKING == 3200
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
}`,LE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,FE=`uniform vec3 diffuse;
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
}`,zE=`#include <common>
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
}`,kE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,HE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,GE=`#define MATCAP
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
}`,WE=`#define NORMAL
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
}`,jE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,YE=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,KE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,QE=`#define TOON
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
}`,JE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:T1,alphahash_pars_fragment:A1,alphamap_fragment:b1,alphamap_pars_fragment:C1,alphatest_fragment:R1,alphatest_pars_fragment:P1,aomap_fragment:D1,aomap_pars_fragment:L1,batching_pars_vertex:N1,batching_vertex:I1,begin_vertex:U1,beginnormal_vertex:O1,bsdfs:F1,iridescence_fragment:z1,bumpmap_pars_fragment:k1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:V1,clipping_planes_vertex:G1,color_fragment:W1,color_pars_fragment:j1,color_pars_vertex:X1,color_vertex:Y1,common:q1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:Q1,displacementmap_vertex:J1,emissivemap_fragment:$1,emissivemap_pars_fragment:ew,colorspace_fragment:tw,colorspace_pars_fragment:nw,envmap_fragment:iw,envmap_common_pars_fragment:rw,envmap_pars_fragment:sw,envmap_pars_vertex:ow,envmap_physical_pars_fragment:vw,envmap_vertex:aw,fog_vertex:lw,fog_pars_vertex:cw,fog_fragment:uw,fog_pars_fragment:dw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:fw,lights_lambert_fragment:pw,lights_lambert_pars_fragment:mw,lights_pars_begin:gw,lights_toon_fragment:xw,lights_toon_pars_fragment:_w,lights_phong_fragment:yw,lights_phong_pars_fragment:Sw,lights_physical_fragment:Mw,lights_physical_pars_fragment:ww,lights_fragment_begin:Ew,lights_fragment_maps:Tw,lights_fragment_end:Aw,logdepthbuf_fragment:bw,logdepthbuf_pars_fragment:Cw,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:Pw,map_fragment:Dw,map_pars_fragment:Lw,map_particle_fragment:Nw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Uw,metalnessmap_pars_fragment:Ow,morphinstance_vertex:Fw,morphcolor_vertex:zw,morphnormal_vertex:kw,morphtarget_pars_vertex:Bw,morphtarget_vertex:Hw,normal_fragment_begin:Vw,normal_fragment_maps:Gw,normal_pars_fragment:Ww,normal_pars_vertex:jw,normal_vertex:Xw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:qw,clearcoat_normal_fragment_maps:Kw,clearcoat_pars_fragment:Zw,iridescence_pars_fragment:Qw,opaque_fragment:Jw,packing:$w,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:oE,shadowmap_pars_vertex:aE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:dE,skinning_vertex:hE,skinnormal_vertex:fE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:xE,transmission_pars_fragment:_E,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:wE,background_vert:EE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:bE,cube_vert:CE,cube_frag:RE,depth_vert:PE,depth_frag:DE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:IE,equirect_frag:UE,linedashed_vert:OE,linedashed_frag:FE,meshbasic_vert:zE,meshbasic_frag:kE,meshlambert_vert:BE,meshlambert_frag:HE,meshmatcap_vert:VE,meshmatcap_frag:GE,meshnormal_vert:WE,meshnormal_frag:jE,meshphong_vert:XE,meshphong_frag:YE,meshphysical_vert:qE,meshphysical_frag:KE,meshtoon_vert:ZE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},xe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},xi={basic:{uniforms:rn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:rn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:rn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:rn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:rn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:rn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:rn([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:rn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:rn([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:rn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:rn([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:rn([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:rn([xe.lights,xe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xi.physical={uniforms:rn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ul={r:0,b:0,g:0},Nr=new Ai,rT=new rt;function sT(t,e,n,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,d,f=null,p=0,g=null;function x(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?n:e).get(v)),v}function y(m){let v=!1;const M=x(m);M===null?u(a,l):M&&M.isColor&&(u(M,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function h(m,v){const M=x(v);M&&(M.isCubeTexture||M.mapping===Uc)?(d===void 0&&(d=new Ze(new on(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:fo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Nr.copy(v.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Nr)),d.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,(f!==M||p!==M.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ze(new ss(2,2),new It({name:"BackgroundMaterial",uniforms:fo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function u(m,v){m.getRGB(ul,qx(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,u(a,l)},render:y,addToRenderList:h}}function oT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(S,E,U,B,K){let X=!1;const Y=f(B,U,E);s!==Y&&(s=Y,c(s.object)),X=g(S,B,U,K),X&&x(S,B,U,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(S,E,U,B),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,E,U){const B=U.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let X=K[E.id];X===void 0&&(X={},K[E.id]=X);let Y=X[B];return Y===void 0&&(Y=p(l()),X[B]=Y),Y}function p(S){const E=[],U=[],B=[];for(let K=0;K<n;K++)E[K]=0,U[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:B,object:S,attributes:{},index:null}}function g(S,E,U,B){const K=s.attributes,X=E.attributes;let Y=0;const ce=U.getAttributes();for(const L in ce)if(ce[L].location>=0){const ne=K[L];let he=X[L];if(he===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function x(S,E,U,B){const K={},X=E.attributes;let Y=0;const ce=U.getAttributes();for(const L in ce)if(ce[L].location>=0){let ne=X[L];ne===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),K[L]=he,Y++}s.attributes=K,s.attributesNum=Y,s.index=B}function y(){const S=s.newAttributes;for(let E=0,U=S.length;E<U;E++)S[E]=0}function h(S){u(S,0)}function u(S,E){const U=s.newAttributes,B=s.enabledAttributes,K=s.attributeDivisors;U[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),K[S]!==E&&(t.vertexAttribDivisor(S,E),K[S]=E)}function m(){const S=s.newAttributes,E=s.enabledAttributes;for(let U=0,B=E.length;U<B;U++)E[U]!==S[U]&&(t.disableVertexAttribArray(U),E[U]=0)}function v(S,E,U,B,K,X,Y){Y===!0?t.vertexAttribIPointer(S,E,U,K,X):t.vertexAttribPointer(S,E,U,B,K,X)}function M(S,E,U,B){y();const K=B.attributes,X=U.getAttributes(),Y=E.defaultAttributeValues;for(const ce in X){const L=X[ce];if(L.location>=0){let Z=K[ce];if(Z===void 0&&(ce==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),ce==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const ne=Z.normalized,he=Z.itemSize,Me=e.get(Z);if(Me===void 0)continue;const we=Me.buffer,ie=Me.type,re=Me.bytesPerElement,me=ie===t.INT||ie===t.UNSIGNED_INT||Z.gpuType===Yf;if(Z.isInterleavedBufferAttribute){const ge=Z.data,Ne=ge.stride,Ce=Z.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<L.locationSize;Fe++)u(L.location+Fe,ge.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<L.locationSize;Fe++)h(L.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Fe=0;Fe<L.locationSize;Fe++)v(L.location+Fe,he/L.locationSize,ie,ne,Ne*re,(Ce+he/L.locationSize*Fe)*re,me)}else{if(Z.isInstancedBufferAttribute){for(let ge=0;ge<L.locationSize;ge++)u(L.location+ge,Z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<L.locationSize;ge++)h(L.location+ge);t.bindBuffer(t.ARRAY_BUFFER,we);for(let ge=0;ge<L.locationSize;ge++)v(L.location+ge,he/L.locationSize,ie,ne,he*re,he/L.locationSize*ge*re,me)}}else if(Y!==void 0){const ne=Y[ce];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(L.location,ne);break;case 3:t.vertexAttrib3fv(L.location,ne);break;case 4:t.vertexAttrib4fv(L.location,ne);break;default:t.vertexAttrib1fv(L.location,ne)}}}}m()}function C(){D();for(const S in i){const E=i[S];for(const U in E){const B=E[U];for(const K in B)d(B[K].object),delete B[K];delete E[U]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const U in E){const B=E[U];for(const K in B)d(B[K].object),delete B[K];delete E[U]}delete i[S.id]}function A(S){for(const E in i){const U=i[E];if(U[S.id]===void 0)continue;const B=U[S.id];for(const K in B)d(B[K].object),delete B[K];delete U[S.id]}}function D(){z(),o=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:h,disableUnusedAttributes:m}}function aT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=d[x];n.update(g,i,1)}function l(c,d,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)o(c[x],d[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y];for(let y=0;y<p.length;y++)n.update(x,i,p[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Yn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hi&&!D)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:C,maxSamples:b}}function cT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new zi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const x=f.clippingPlanes,y=f.clipIntersection,h=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!h)s?d(null):c();else{const m=s?0:i,v=m*4;let M=u.clippingState||null;l.value=M,M=d(x,p,v,g);for(let C=0;C!==v;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,x){const y=f!==null?f.length:0;let h=null;if(y!==0){if(h=l.value,x!==!0||h===null){const u=g+y*4,m=p.matrixWorldInverse;a.getNormalMatrix(m),(h===null||h.length<u)&&(h=new Float32Array(u));for(let v=0,M=g;v!==y;++v,M+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(h,M),h[M+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,h}}function uT(t){let e=new WeakMap;function n(o,a){return a===mh?o.mapping=uo:a===gh&&(o.mapping=ho),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mh||a===gh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new S1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ip extends Kx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,f0=[.125,.215,.35,.446,.526,.582],Hr=20,qu=new ip,p0=new Be;let Ku=null,Zu=0,Qu=0,Ju=!1;const kr=(1+Math.sqrt(5))/2,Cs=1/kr,m0=[new k(-kr,Cs,0),new k(kr,Cs,0),new k(-Cs,0,kr),new k(Cs,0,kr),new k(0,kr,-Cs),new k(0,kr,Cs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===uo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ti,format:Yn,colorSpace:Ar,depthBuffer:!1},r=g0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(s)),this._blurMaterial=hT(s,e,n)}return r}_compileMaterial(e){const n=new Ze(this._lodPlanes[0],e);this._renderer.compile(n,qu)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(p0),d.toneMapping=_r,d.autoClear=!1;const g=new kc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new Ze(new on,g);let y=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,y=!0):(g.color.copy(p0),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;dl(r,m*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===uo||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=m0[(r-s-1)%m0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ze(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Hr-1),y=s/x,h=isFinite(s)?1+Math.floor(d*y):Hr;h>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Hr}`);const u=[];let m=0;for(let A=0;A<Hr;++A){const D=A/y,z=Math.exp(-D*D/2);u.push(z),A===0?m+=z:A<h&&(m+=2*z)}for(let A=0;A<u.length;A++)u[A]=u[A]/m;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-i;const M=this._sizeLods[r],C=3*M*(r>v-js?r-v+js:0),b=4*(this._cubeSize-M);dl(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(f,qu)}}function dT(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+f0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=f0[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,x=6,y=3,h=2,u=1,m=new Float32Array(y*x*g),v=new Float32Array(h*x*g),M=new Float32Array(u*x*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,D=b>2?0:-1,z=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];m.set(z,y*x*b),v.set(p,h*x*b);const S=[b,b,b,b,b,b];M.set(S,u*x*b)}const C=new hn;C.setAttribute("position",new Mi(m,y)),C.setAttribute("uv",new Mi(v,h)),C.setAttribute("faceIndex",new Mi(M,u)),e.push(C),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function g0(t,e,n){const i=new Qn(t,e,n);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hT(t,e,n){const i=new Float32Array(Hr),r=new k(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rp(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function v0(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function x0(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function rp(){return`

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
	`}function fT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===mh||l===gh,d=l===uo||l===ho;if(c||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new jh(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new jh(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const y=p.morphAttributes[x];for(let h=0,u=y.length;h<u;h++)e.remove(y[h])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const y=g[x];for(let h=0,u=y.length;h<u;h++)e.update(y[h],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,x=f.attributes.position;let y=0;if(g!==null){const m=g.array;y=g.version;for(let v=0,M=m.length;v<M;v+=3){const C=m[v+0],b=m[v+1],A=m[v+2];p.push(C,b,b,A,A,C)}}else if(x!==void 0){const m=x.array;y=x.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const C=v+0,b=v+1,A=v+2;p.push(C,b,b,A,A,C)}}else return;const h=new(Vx(p)?Yx:Xx)(p,1);h.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,h)}function d(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function gT(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,g){t.drawElements(i,g,s,p*o),n.update(g,i,1)}function c(p,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,p*o,x),n.update(g,i,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,x);let h=0;for(let u=0;u<x;u++)h+=g[u];n.update(h,i,1)}function f(p,g,x,y){if(x===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<p.length;u++)c(p[u]/o,g[u],y[u]);else{h.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,y,0,x);let u=0;for(let m=0;m<x;m++)u+=g[m];for(let m=0;m<y.length;m++)n.update(u,i,y[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var g=S;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),h===!0&&(M=3);let C=a.attributes.position.count*M,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*f),D=new Wx(A,C,b,f);D.type=Hi,D.needsUpdate=!0;const z=M*4;for(let E=0;E<f;E++){const U=u[E],B=m[E],K=v[E],X=C*b*4*E;for(let Y=0;Y<U.count;Y++){const ce=Y*z;x===!0&&(r.fromBufferAttribute(U,Y),A[X+ce+0]=r.x,A[X+ce+1]=r.y,A[X+ce+2]=r.z,A[X+ce+3]=0),y===!0&&(r.fromBufferAttribute(B,Y),A[X+ce+4]=r.x,A[X+ce+5]=r.y,A[X+ce+6]=r.z,A[X+ce+7]=0),h===!0&&(r.fromBufferAttribute(K,Y),A[X+ce+8]=r.x,A[X+ce+9]=r.y,A[X+ce+10]=r.z,A[X+ce+11]=K.itemSize===4?r.w:1)}}p={count:f,texture:D,size:new Ue(C,b)},i.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let h=0;h<c.length;h++)x+=c[h];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function _T(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class sp extends Ot{constructor(e,n,i,r,s,o,a,l,c,d=eo){if(d!==eo&&d!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===eo&&(i=ts),i===void 0&&d===is&&(i=ns),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jx=new Ot,_0=new sp(1,1),$x=new Wx,e_=new o1,t_=new Zx,y0=[],S0=[],M0=new Float32Array(16),w0=new Float32Array(9),E0=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=y0[r];if(s===void 0&&(s=new Float32Array(r),y0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bc(t,e){let n=S0[e];n===void 0&&(n=new Int32Array(e),S0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;E0.set(i),t.uniformMatrix2fv(this.addr,!1,E0),zt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;w0.set(i),t.uniformMatrix3fv(this.addr,!1,w0),zt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;M0.set(i),t.uniformMatrix4fv(this.addr,!1,M0),zt(n,i)}}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_0.compareFunction=Hx,s=_0):s=Jx,n.setTexture2D(e||s,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||e_,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||t_,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$x,r)}function kT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return wT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return bT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return DT;case 36294:return LT;case 36295:return NT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return zT}}function BT(t,e){t.uniform1fv(this.addr,e)}function HT(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function VT(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jT(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XT(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function KT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function JT(t,e){t.uniform2uiv(this.addr,e)}function $T(t,e){t.uniform3uiv(this.addr,e)}function e2(t,e){t.uniform4uiv(this.addr,e)}function t2(t,e,n){const i=this.cache,r=e.length,s=Bc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jx,s[o])}function n2(t,e,n){const i=this.cache,r=e.length,s=Bc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||e_,s[o])}function i2(t,e,n){const i=this.cache,r=e.length,s=Bc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||t_,s[o])}function r2(t,e,n){const i=this.cache,r=e.length,s=Bc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$x,s[o])}function s2(t){switch(t){case 5126:return BT;case 35664:return HT;case 35665:return VT;case 35666:return GT;case 35674:return WT;case 35675:return jT;case 35676:return XT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return r2}}class o2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kT(n.type)}}class a2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s2(n.type)}}class l2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function T0(t,e){t.seq.push(e),t.map[e.id]=e}function c2(t,e,n){const i=t.name,r=i.length;for($u.lastIndex=0;;){const s=$u.exec(i),o=$u.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){T0(n,c===void 0?new o2(a,t,e):new a2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new l2(a),T0(n,f)),n=f}}}class Hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);c2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function A0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const u2=37297;let d2=0;function h2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function f2(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===mc&&n===pc?i="LinearDisplayP3ToLinearSRGB":e===pc&&n===mc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ar:case Oc:return[i,"LinearTransferOETF"];case yn:case ep:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function b0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+h2(t.getShaderSource(e),o)}else return r}function p2(t,e){const n=f2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function m2(t,e){let n;switch(e){case Tx:n="Linear";break;case Ax:n="Reinhard";break;case bx:n="Cineon";break;case Xf:n="ACESFilmic";break;case Cx:n="AgX";break;case Rx:n="Neutral";break;case FM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new k;function g2(){it.getLuminanceCoefficients(hl);const t=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function x2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function C0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(t){return t.replace(y2,M2)}const S2=new Map;function M2(t,e){let n=Xe[e];if(n===void 0){const i=S2.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xh(n)}const w2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(t){return t.replace(w2,E2)}function E2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function D0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function T2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function A2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case uo:case ho:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function C2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ex:e="ENVMAP_BLENDING_MULTIPLY";break;case UM:e="ENVMAP_BLENDING_MIX";break;case OM:e="ENVMAP_BLENDING_ADD";break}return e}function R2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function P2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=T2(n),c=A2(n),d=b2(n),f=C2(n),p=R2(n),g=v2(n),x=x2(s),y=r.createProgram();let h,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Wo).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Wo).join(`
`),u.length>0&&(u+=`
`)):(h=[D0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),u=[D0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Xe.tonemapping_pars_fragment:"",n.toneMapping!==_r?m2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,p2("linearToOutputTexel",n.outputColorSpace),g2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Xh(o),o=C0(o,n),o=R0(o,n),a=Xh(a),a=C0(a,n),a=R0(a,n),o=P0(o),a=P0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",n.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+h+o,M=m+u+a,C=A0(r,r.VERTEX_SHADER,v),b=A0(r,r.FRAGMENT_SHADER,M);r.attachShader(y,C),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(E){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(b).trim();let X=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,b);else{const ce=b0(r,C,"vertex"),L=b0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+ce+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||K==="")&&(Y=!1);Y&&(E.diagnostics={runnable:X,programLog:U,vertexShader:{log:B,prefix:h},fragmentShader:{log:K,prefix:u}})}r.deleteShader(C),r.deleteShader(b),D=new Hl(r,y),z=_2(r,y)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let z;this.getAttributes=function(){return z===void 0&&A(this),z};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,u2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let D2=0;class L2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new N2(e),n.set(e,i)),i}}class N2{constructor(e){this.id=D2++,this.code=e,this.usedTimes=0}}function I2(t,e,n,i,r,s,o){const a=new tp,l=new L2,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,g=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,E,U,B,K){const X=B.fog,Y=K.geometry,ce=S.isMeshStandardMaterial?B.environment:null,L=(S.isMeshStandardMaterial?n:e).get(S.envMap||ce),Z=L&&L.mapping===Uc?L.image.height:null,ne=y[S.type];S.precision!==null&&(x=r.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Me=he!==void 0?he.length:0;let we=0;Y.morphAttributes.position!==void 0&&(we=1),Y.morphAttributes.normal!==void 0&&(we=2),Y.morphAttributes.color!==void 0&&(we=3);let ie,re,me,ge;if(ne){const pn=xi[ne];ie=pn.vertexShader,re=pn.fragmentShader}else ie=S.vertexShader,re=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Ne=t.getRenderTarget(),Ce=K.isInstancedMesh===!0,Fe=K.isBatchedMesh===!0,Ke=!!S.map,ke=!!S.matcap,F=!!L,pt=!!S.aoMap,O=!!S.lightMap,V=!!S.bumpMap,J=!!S.normalMap,q=!!S.displacementMap,se=!!S.emissiveMap,T=!!S.metalnessMap,w=!!S.roughnessMap,P=S.anisotropy>0,I=S.clearcoat>0,H=S.dispersion>0,N=S.iridescence>0,oe=S.sheen>0,$=S.transmission>0,Q=P&&!!S.anisotropyMap,ue=I&&!!S.clearcoatMap,ae=I&&!!S.clearcoatNormalMap,pe=I&&!!S.clearcoatRoughnessMap,be=N&&!!S.iridescenceMap,ze=N&&!!S.iridescenceThicknessMap,Ae=oe&&!!S.sheenColorMap,Je=oe&&!!S.sheenRoughnessMap,We=!!S.specularMap,tt=!!S.specularColorMap,G=!!S.specularIntensityMap,_e=$&&!!S.transmissionMap,le=$&&!!S.thicknessMap,de=!!S.gradientMap,ye=!!S.alphaMap,Ee=S.alphaTest>0,$e=!!S.alphaHash,Rt=!!S.extensions;let fn=_r;S.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(fn=t.toneMapping);const nt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:re,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&K._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&K.instanceColor!==null,instancingMorph:Ce&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ar,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:ke,envMap:F,envMapMode:F&&L.mapping,envMapCubeUVHeight:Z,aoMap:pt,lightMap:O,bumpMap:V,normalMap:J,displacementMap:g&&q,emissiveMap:se,normalMapObjectSpace:J&&S.normalMapType===HM,normalMapTangentSpace:J&&S.normalMapType===$f,metalnessMap:T,roughnessMap:w,anisotropy:P,anisotropyMap:Q,clearcoat:I,clearcoatMap:ue,clearcoatNormalMap:ae,clearcoatRoughnessMap:pe,dispersion:H,iridescence:N,iridescenceMap:be,iridescenceThicknessMap:ze,sheen:oe,sheenColorMap:Ae,sheenRoughnessMap:Je,specularMap:We,specularColorMap:tt,specularIntensityMap:G,transmission:$,transmissionMap:_e,thicknessMap:le,gradientMap:de,opaque:S.transparent===!1&&S.blending===$s&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ee,alphaHash:$e,combine:S.combine,mapUv:Ke&&h(S.map.channel),aoMapUv:pt&&h(S.aoMap.channel),lightMapUv:O&&h(S.lightMap.channel),bumpMapUv:V&&h(S.bumpMap.channel),normalMapUv:J&&h(S.normalMap.channel),displacementMapUv:q&&h(S.displacementMap.channel),emissiveMapUv:se&&h(S.emissiveMap.channel),metalnessMapUv:T&&h(S.metalnessMap.channel),roughnessMapUv:w&&h(S.roughnessMap.channel),anisotropyMapUv:Q&&h(S.anisotropyMap.channel),clearcoatMapUv:ue&&h(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&h(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&h(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&h(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&h(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&h(S.sheenColorMap.channel),sheenRoughnessMapUv:Je&&h(S.sheenRoughnessMap.channel),specularMapUv:We&&h(S.specularMap.channel),specularColorMapUv:tt&&h(S.specularColorMap.channel),specularIntensityMapUv:G&&h(S.specularIntensityMap.channel),transmissionMapUv:_e&&h(S.transmissionMap.channel),thicknessMapUv:le&&h(S.thicknessMap.channel),alphaMapUv:ye&&h(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(J||P),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Y.attributes.uv&&(Ke||ye),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:K.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:fn,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function m(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(v(E,S),M(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),S.push(a.mask)}function C(S){const E=y[S.type];let U;if(E){const B=xi[E];U=ci.clone(B.uniforms)}else U=S.uniforms;return U}function b(S,E){let U;for(let B=0,K=d.length;B<K;B++){const X=d[B];if(X.cacheKey===E){U=X,++U.usedTimes;break}}return U===void 0&&(U=new P2(t,E,S,s),d.push(U)),U}function A(S){if(--S.usedTimes===0){const E=d.indexOf(S);d[E]=d[d.length-1],d.pop(),S.destroy()}}function D(S){l.remove(S)}function z(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:C,acquireProgram:b,releaseProgram:A,releaseShaderCache:D,programs:d,dispose:z}}function U2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function O2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function L0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function N0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,p,g,x,y,h){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:y,group:h},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=y,u.group=h),e++,u}function a(f,p,g,x,y,h){const u=o(f,p,g,x,y,h);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,p,g,x,y,h){const u=o(f,p,g,x,y,h);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||O2),i.length>1&&i.sort(p||L0),r.length>1&&r.sort(p||L0)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function F2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new N0,t.set(i,[o])):r>=s.length?(o=new N0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function z2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Be};break;case"SpotLight":n={position:new k,direction:new k,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function k2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B2=0;function H2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function V2(t){const e=new z2,n=k2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new rt,o=new rt;function a(c){let d=0,f=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,x=0,y=0,h=0,u=0,m=0,v=0,M=0,C=0,b=0,A=0;c.sort(H2);for(let z=0,S=c.length;z<S;z++){const E=c[z],U=E.color,B=E.intensity,K=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=U.r*B,f+=U.g*B,p+=U.b*B;else if(E.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(E.sh.coefficients[Y],B);A++}else if(E.isDirectionalLight){const Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ce=E.shadow,L=n.get(E);L.shadowIntensity=ce.intensity,L.shadowBias=ce.bias,L.shadowNormalBias=ce.normalBias,L.shadowRadius=ce.radius,L.shadowMapSize=ce.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=E.shadow.matrix,m++}i.directional[g]=Y,g++}else if(E.isSpotLight){const Y=e.get(E);Y.position.setFromMatrixPosition(E.matrixWorld),Y.color.copy(U).multiplyScalar(B),Y.distance=K,Y.coneCos=Math.cos(E.angle),Y.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),Y.decay=E.decay,i.spot[y]=Y;const ce=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,ce.updateMatrices(E),E.castShadow&&b++),i.spotLightMatrix[y]=ce.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=ce.intensity,L.shadowBias=ce.bias,L.shadowNormalBias=ce.normalBias,L.shadowRadius=ce.radius,L.shadowMapSize=ce.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=X,M++}y++}else if(E.isRectAreaLight){const Y=e.get(E);Y.color.copy(U).multiplyScalar(B),Y.halfWidth.set(E.width*.5,0,0),Y.halfHeight.set(0,E.height*.5,0),i.rectArea[h]=Y,h++}else if(E.isPointLight){const Y=e.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),Y.distance=E.distance,Y.decay=E.decay,E.castShadow){const ce=E.shadow,L=n.get(E);L.shadowIntensity=ce.intensity,L.shadowBias=ce.bias,L.shadowNormalBias=ce.normalBias,L.shadowRadius=ce.radius,L.shadowMapSize=ce.mapSize,L.shadowCameraNear=ce.camera.near,L.shadowCameraFar=ce.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=X,i.pointShadowMatrix[x]=E.shadow.matrix,v++}i.point[x]=Y,x++}else if(E.isHemisphereLight){const Y=e.get(E);Y.skyColor.copy(E.color).multiplyScalar(B),Y.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[u]=Y,u++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==g||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==h||D.hemiLength!==u||D.numDirectionalShadows!==m||D.numPointShadows!==v||D.numSpotShadows!==M||D.numSpotMaps!==C||D.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=h,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,D.directionalLength=g,D.pointLength=x,D.spotLength=y,D.rectAreaLength=h,D.hemiLength=u,D.numDirectionalShadows=m,D.numPointShadows=v,D.numSpotShadows=M,D.numSpotMaps=C,D.numLightProbes=A,i.version=B2++)}function l(c,d){let f=0,p=0,g=0,x=0,y=0;const h=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),f++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),g++}else if(v.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),o.identity(),s.copy(v.matrixWorld),s.premultiply(h),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),p++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(h),y++}}}return{setup:a,setupView:l,state:i}}function I0(t){const e=new V2(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function G2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new I0(t),e.set(r,[a])):s>=o.length?(a=new I0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class W2 extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j2 extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y2=`uniform sampler2D shadow_pass;
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
}`;function q2(t,e,n){let i=new np;const r=new Ue,s=new Ue,o=new ut,a=new W2({depthPacking:BM}),l=new j2,c={},d=n.maxTextureSize,f={[Mr]:cn,[cn]:Mr,[Nn]:Nn},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:X2,fragmentShader:Y2}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new hn;x.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ze(x,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let u=this.type;this.render=function(b,A,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const z=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Yt),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=u!==Ui&&this.type===Ui,K=u===Ui&&this.type!==Ui;for(let X=0,Y=b.length;X<Y;X++){const ce=b[X],L=ce.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Z=L.getFrameExtents();if(r.multiply(Z),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,L.mapSize.y=s.y)),L.map===null||B===!0||K===!0){const he=this.type!==Ui?{minFilter:Ht,magFilter:Ht}:{};L.map!==null&&L.map.dispose(),L.map=new Qn(r.x,r.y,he),L.map.texture.name=ce.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const ne=L.getViewportCount();for(let he=0;he<ne;he++){const Me=L.getViewport(he);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),U.viewport(o),L.updateMatrices(ce,he),i=L.getFrustum(),M(A,D,L.camera,ce,this.type)}L.isPointLightShadow!==!0&&this.type===Ui&&m(L,D),L.needsUpdate=!1}u=this.type,h.needsUpdate=!1,t.setRenderTarget(z,S,E)};function m(b,A){const D=e.update(y);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qn(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,D,p,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,D,g,y,null)}function v(b,A,D,z){let S=null;const E=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)S=E;else if(S=D.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=S.uuid,B=A.uuid;let K=c[U];K===void 0&&(K={},c[U]=K);let X=K[B];X===void 0&&(X=S.clone(),K[B]=X,A.addEventListener("dispose",C)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,z===Ui?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=D}return S}function M(b,A,D,z,S){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Ui)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const B=e.update(b),K=b.material;if(Array.isArray(K)){const X=B.groups;for(let Y=0,ce=X.length;Y<ce;Y++){const L=X[Y],Z=K[L.materialIndex];if(Z&&Z.visible){const ne=v(b,Z,z,S);b.onBeforeShadow(t,b,A,D,B,ne,L),t.renderBufferDirect(D,null,B,ne,b,L),b.onAfterShadow(t,b,A,D,B,ne,L)}}}else if(K.visible){const X=v(b,K,z,S);b.onBeforeShadow(t,b,A,D,B,X,null),t.renderBufferDirect(D,null,B,X,b,null),b.onAfterShadow(t,b,A,D,B,X,null)}}const U=b.children;for(let B=0,K=U.length;B<K;B++)M(U[B],A,D,z,S)}function C(b){b.target.removeEventListener("dispose",C);for(const D in c){const z=c[D],S=b.target.uuid;S in z&&(z[S].dispose(),delete z[S])}}}const K2={[lh]:ch,[uh]:fh,[dh]:ph,[co]:hh,[ch]:lh,[fh]:uh,[ph]:dh,[hh]:co};function Z2(t){function e(){let G=!1;const _e=new ut;let le=null;const de=new ut(0,0,0,0);return{setMask:function(ye){le!==ye&&!G&&(t.colorMask(ye,ye,ye,ye),le=ye)},setLocked:function(ye){G=ye},setClear:function(ye,Ee,$e,Rt,fn){fn===!0&&(ye*=Rt,Ee*=Rt,$e*=Rt),_e.set(ye,Ee,$e,Rt),de.equals(_e)===!1&&(t.clearColor(ye,Ee,$e,Rt),de.copy(_e))},reset:function(){G=!1,le=null,de.set(-1,0,0,0)}}}function n(){let G=!1,_e=!1,le=null,de=null,ye=null;return{setReversed:function(Ee){_e=Ee},setTest:function(Ee){Ee?me(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(Ee){le!==Ee&&!G&&(t.depthMask(Ee),le=Ee)},setFunc:function(Ee){if(_e&&(Ee=K2[Ee]),de!==Ee){switch(Ee){case lh:t.depthFunc(t.NEVER);break;case ch:t.depthFunc(t.ALWAYS);break;case uh:t.depthFunc(t.LESS);break;case co:t.depthFunc(t.LEQUAL);break;case dh:t.depthFunc(t.EQUAL);break;case hh:t.depthFunc(t.GEQUAL);break;case fh:t.depthFunc(t.GREATER);break;case ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ee}},setLocked:function(Ee){G=Ee},setClear:function(Ee){ye!==Ee&&(t.clearDepth(Ee),ye=Ee)},reset:function(){G=!1,le=null,de=null,ye=null}}}function i(){let G=!1,_e=null,le=null,de=null,ye=null,Ee=null,$e=null,Rt=null,fn=null;return{setTest:function(nt){G||(nt?me(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!G&&(t.stencilMask(nt),_e=nt)},setFunc:function(nt,pn,bi){(le!==nt||de!==pn||ye!==bi)&&(t.stencilFunc(nt,pn,bi),le=nt,de=pn,ye=bi)},setOp:function(nt,pn,bi){(Ee!==nt||$e!==pn||Rt!==bi)&&(t.stencilOp(nt,pn,bi),Ee=nt,$e=pn,Rt=bi)},setLocked:function(nt){G=nt},setClear:function(nt){fn!==nt&&(t.clearStencil(nt),fn=nt)},reset:function(){G=!1,_e=null,le=null,de=null,ye=null,Ee=null,$e=null,Rt=null,fn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],g=null,x=!1,y=null,h=null,u=null,m=null,v=null,M=null,C=null,b=new Be(0,0,0),A=0,D=!1,z=null,S=null,E=null,U=null,B=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ce)[1]),X=Y>=1):ce.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),X=Y>=2);let L=null,Z={};const ne=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),Me=new ut().fromArray(ne),we=new ut().fromArray(he);function ie(G,_e,le,de){const ye=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(G,Ee),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<le;$e++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(_e+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return Ee}const re={};re[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(t.DEPTH_TEST),s.setFunc(co),O(!1),V(Gm),me(t.CULL_FACE),F(Yt);function me(G){c[G]!==!0&&(t.enable(G),c[G]=!0)}function ge(G){c[G]!==!1&&(t.disable(G),c[G]=!1)}function Ne(G,_e){return d[G]!==_e?(t.bindFramebuffer(G,_e),d[G]=_e,G===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=_e),G===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ce(G,_e){let le=p,de=!1;if(G){le=f.get(_e),le===void 0&&(le=[],f.set(_e,le));const ye=G.textures;if(le.length!==ye.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,$e=ye.length;Ee<$e;Ee++)le[Ee]=t.COLOR_ATTACHMENT0+Ee;le.length=ye.length,de=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,de=!0);de&&t.drawBuffers(le)}function Fe(G){return g!==G?(t.useProgram(G),g=G,!0):!1}const Ke={[ai]:t.FUNC_ADD,[SM]:t.FUNC_SUBTRACT,[MM]:t.FUNC_REVERSE_SUBTRACT};Ke[wM]=t.MIN,Ke[EM]=t.MAX;const ke={[Go]:t.ZERO,[TM]:t.ONE,[AM]:t.SRC_COLOR,[rh]:t.SRC_ALPHA,[PM]:t.SRC_ALPHA_SATURATE,[ah]:t.DST_COLOR,[oh]:t.DST_ALPHA,[bM]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[RM]:t.ONE_MINUS_DST_COLOR,[CM]:t.ONE_MINUS_DST_ALPHA,[DM]:t.CONSTANT_COLOR,[LM]:t.ONE_MINUS_CONSTANT_COLOR,[NM]:t.CONSTANT_ALPHA,[IM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(G,_e,le,de,ye,Ee,$e,Rt,fn,nt){if(G===Yt){x===!0&&(ge(t.BLEND),x=!1);return}if(x===!1&&(me(t.BLEND),x=!0),G!==wx){if(G!==y||nt!==D){if((h!==ai||v!==ai)&&(t.blendEquation(t.FUNC_ADD),h=ai,v=ai),nt)switch(G){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wm:t.blendFunc(t.ONE,t.ONE);break;case jm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}u=null,m=null,M=null,C=null,b.set(0,0,0),A=0,y=G,D=nt}return}ye=ye||_e,Ee=Ee||le,$e=$e||de,(_e!==h||ye!==v)&&(t.blendEquationSeparate(Ke[_e],Ke[ye]),h=_e,v=ye),(le!==u||de!==m||Ee!==M||$e!==C)&&(t.blendFuncSeparate(ke[le],ke[de],ke[Ee],ke[$e]),u=le,m=de,M=Ee,C=$e),(Rt.equals(b)===!1||fn!==A)&&(t.blendColor(Rt.r,Rt.g,Rt.b,fn),b.copy(Rt),A=fn),y=G,D=!1}function pt(G,_e){G.side===Nn?ge(t.CULL_FACE):me(t.CULL_FACE);let le=G.side===cn;_e&&(le=!le),O(le),G.blending===$s&&G.transparent===!1?F(Yt):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const de=G.stencilWrite;o.setTest(de),de&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(G){z!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),z=G)}function V(G){G!==_M?(me(t.CULL_FACE),G!==S&&(G===Gm?t.cullFace(t.BACK):G===yM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),S=G}function J(G){G!==E&&(X&&t.lineWidth(G),E=G)}function q(G,_e,le){G?(me(t.POLYGON_OFFSET_FILL),(U!==_e||B!==le)&&(t.polygonOffset(_e,le),U=_e,B=le)):ge(t.POLYGON_OFFSET_FILL)}function se(G){G?me(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function T(G){G===void 0&&(G=t.TEXTURE0+K-1),L!==G&&(t.activeTexture(G),L=G)}function w(G,_e,le){le===void 0&&(L===null?le=t.TEXTURE0+K-1:le=L);let de=Z[le];de===void 0&&(de={type:void 0,texture:void 0},Z[le]=de),(de.type!==G||de.texture!==_e)&&(L!==le&&(t.activeTexture(le),L=le),t.bindTexture(G,_e||re[G]),de.type=G,de.texture=_e)}function P(){const G=Z[L];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function I(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){Me.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),Me.copy(G))}function Ae(G){we.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),we.copy(G))}function Je(G,_e){let le=l.get(_e);le===void 0&&(le=new WeakMap,l.set(_e,le));let de=le.get(G);de===void 0&&(de=t.getUniformBlockIndex(_e,G.name),le.set(G,de))}function We(G,_e){const de=l.get(_e).get(G);a.get(_e)!==de&&(t.uniformBlockBinding(_e,de,G.__bindingPointIndex),a.set(_e,de))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Z={},d={},f=new WeakMap,p=[],g=null,x=!1,y=null,h=null,u=null,m=null,v=null,M=null,C=null,b=new Be(0,0,0),A=0,D=!1,z=null,S=null,E=null,U=null,B=null,Me.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:ge,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:Fe,setBlending:F,setMaterial:pt,setFlipSided:O,setCullFace:V,setLineWidth:J,setPolygonOffset:q,setScissorTest:se,activeTexture:T,bindTexture:w,unbindTexture:P,compressedTexImage2D:I,compressedTexImage3D:H,texImage2D:pe,texImage3D:be,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:ue,texStorage3D:ae,texSubImage2D:N,texSubImage3D:oe,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:ze,viewport:Ae,reset:tt}}function U0(t,e,n,i){const r=Q2(i);switch(n){case Ix:return t*e;case Ox:return t*e;case Fx:return t*e*2;case zx:return t*e/r.components*r.byteLength;case Zf:return t*e/r.components*r.byteLength;case kx:return t*e*2/r.components*r.byteLength;case Qf:return t*e*2/r.components*r.byteLength;case Ux:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Jf:return t*e*4/r.components*r.byteLength;case Il:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:case Sh:return Math.max(t,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(t,8)*Math.max(e,8)/2;case Mh:case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zl:case kh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bx:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Q2(t){switch(t){case Ei:case Dx:return{byteLength:1,components:1};case xa:case Lx:case Ti:return{byteLength:2,components:1};case qf:case Kf:return{byteLength:2,components:4};case ts:case Yf:case Hi:return{byteLength:4,components:1};case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function J2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,w){return g?new OffscreenCanvas(T,w):_a("canvas")}function y(T,w,P){let I=1;const H=se(T);if((H.width>P||H.height>P)&&(I=P/Math.max(H.width,H.height)),I<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const N=Math.floor(I*H.width),oe=Math.floor(I*H.height);f===void 0&&(f=x(N,oe));const $=w?x(N,oe):f;return $.width=N,$.height=oe,$.getContext("2d").drawImage(T,0,0,N,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+N+"x"+oe+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),T;return T}function h(T){return T.generateMipmaps&&T.minFilter!==Ht&&T.minFilter!==jn}function u(T){t.generateMipmap(T)}function m(T,w,P,I,H=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let N=w;if(w===t.RED&&(P===t.FLOAT&&(N=t.R32F),P===t.HALF_FLOAT&&(N=t.R16F),P===t.UNSIGNED_BYTE&&(N=t.R8)),w===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.R8UI),P===t.UNSIGNED_SHORT&&(N=t.R16UI),P===t.UNSIGNED_INT&&(N=t.R32UI),P===t.BYTE&&(N=t.R8I),P===t.SHORT&&(N=t.R16I),P===t.INT&&(N=t.R32I)),w===t.RG&&(P===t.FLOAT&&(N=t.RG32F),P===t.HALF_FLOAT&&(N=t.RG16F),P===t.UNSIGNED_BYTE&&(N=t.RG8)),w===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.RG8UI),P===t.UNSIGNED_SHORT&&(N=t.RG16UI),P===t.UNSIGNED_INT&&(N=t.RG32UI),P===t.BYTE&&(N=t.RG8I),P===t.SHORT&&(N=t.RG16I),P===t.INT&&(N=t.RG32I)),w===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.RGB8UI),P===t.UNSIGNED_SHORT&&(N=t.RGB16UI),P===t.UNSIGNED_INT&&(N=t.RGB32UI),P===t.BYTE&&(N=t.RGB8I),P===t.SHORT&&(N=t.RGB16I),P===t.INT&&(N=t.RGB32I)),w===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),P===t.UNSIGNED_INT&&(N=t.RGBA32UI),P===t.BYTE&&(N=t.RGBA8I),P===t.SHORT&&(N=t.RGBA16I),P===t.INT&&(N=t.RGBA32I)),w===t.RGB&&P===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),w===t.RGBA){const oe=H?fc:it.getTransfer(I);P===t.FLOAT&&(N=t.RGBA32F),P===t.HALF_FLOAT&&(N=t.RGBA16F),P===t.UNSIGNED_BYTE&&(N=oe===ht?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function v(T,w){let P;return T?w===null||w===ts||w===ns?P=t.DEPTH24_STENCIL8:w===Hi?P=t.DEPTH32F_STENCIL8:w===xa&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ts||w===ns?P=t.DEPTH_COMPONENT24:w===Hi?P=t.DEPTH_COMPONENT32F:w===xa&&(P=t.DEPTH_COMPONENT16),P}function M(T,w){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function C(T){const w=T.target;w.removeEventListener("dispose",C),A(w),w.isVideoTexture&&d.delete(w)}function b(T){const w=T.target;w.removeEventListener("dispose",b),z(w)}function A(T){const w=i.get(T);if(w.__webglInit===void 0)return;const P=T.source,I=p.get(P);if(I){const H=I[w.__cacheKey];H.usedTimes--,H.usedTimes===0&&D(T),Object.keys(I).length===0&&p.delete(P)}i.remove(T)}function D(T){const w=i.get(T);t.deleteTexture(w.__webglTexture);const P=T.source,I=p.get(P);delete I[w.__cacheKey],o.memory.textures--}function z(T){const w=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(w.__webglFramebuffer[I]))for(let H=0;H<w.__webglFramebuffer[I].length;H++)t.deleteFramebuffer(w.__webglFramebuffer[I][H]);else t.deleteFramebuffer(w.__webglFramebuffer[I]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[I])}else{if(Array.isArray(w.__webglFramebuffer))for(let I=0;I<w.__webglFramebuffer.length;I++)t.deleteFramebuffer(w.__webglFramebuffer[I]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let I=0;I<w.__webglColorRenderbuffer.length;I++)w.__webglColorRenderbuffer[I]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[I]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const P=T.textures;for(let I=0,H=P.length;I<H;I++){const N=i.get(P[I]);N.__webglTexture&&(t.deleteTexture(N.__webglTexture),o.memory.textures--),i.remove(P[I])}i.remove(T)}let S=0;function E(){S=0}function U(){const T=S;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),S+=1,T}function B(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function K(T,w){const P=i.get(T);if(T.isVideoTexture&&J(T),T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){const I=T.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(P,T,w);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+w)}function X(T,w){const P=i.get(T);if(T.version>0&&P.__version!==T.version){we(P,T,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+w)}function Y(T,w){const P=i.get(T);if(T.version>0&&P.__version!==T.version){we(P,T,w);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+w)}function ce(T,w){const P=i.get(T);if(T.version>0&&P.__version!==T.version){ie(P,T,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+w)}const L={[wi]:t.REPEAT,[Xr]:t.CLAMP_TO_EDGE,[vh]:t.MIRRORED_REPEAT},Z={[Ht]:t.NEAREST,[zM]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[Tu]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},ne={[VM]:t.NEVER,[qM]:t.ALWAYS,[GM]:t.LESS,[Hx]:t.LEQUAL,[WM]:t.EQUAL,[YM]:t.GEQUAL,[jM]:t.GREATER,[XM]:t.NOTEQUAL};function he(T,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jn||w.magFilter===Tu||w.magFilter===Xa||w.magFilter===Yr||w.minFilter===jn||w.minFilter===Tu||w.minFilter===Xa||w.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,L[w.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,L[w.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,L[w.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Z[w.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ht||w.minFilter!==Xa&&w.minFilter!==Yr||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Me(T,w){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",C));const I=w.source;let H=p.get(I);H===void 0&&(H={},p.set(I,H));const N=B(w);if(N!==T.__cacheKey){H[N]===void 0&&(H[N]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,P=!0),H[N].usedTimes++;const oe=H[T.__cacheKey];oe!==void 0&&(H[T.__cacheKey].usedTimes--,oe.usedTimes===0&&D(w)),T.__cacheKey=N,T.__webglTexture=H[N].texture}return P}function we(T,w,P){let I=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(I=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(I=t.TEXTURE_3D);const H=Me(T,w),N=w.source;n.bindTexture(I,T.__webglTexture,t.TEXTURE0+P);const oe=i.get(N);if(N.version!==oe.__version||H===!0){n.activeTexture(t.TEXTURE0+P);const $=it.getPrimaries(it.workingColorSpace),Q=w.colorSpace===lr?null:it.getPrimaries(w.colorSpace),ue=w.colorSpace===lr||$===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ae=y(w.image,!1,r.maxTextureSize);ae=q(w,ae);const pe=s.convert(w.format,w.colorSpace),be=s.convert(w.type);let ze=m(w.internalFormat,pe,be,w.colorSpace,w.isVideoTexture);he(I,w);let Ae;const Je=w.mipmaps,We=w.isVideoTexture!==!0,tt=oe.__version===void 0||H===!0,G=N.dataReady,_e=M(w,ae);if(w.isDepthTexture)ze=v(w.format===is,w.type),tt&&(We?n.texStorage2D(t.TEXTURE_2D,1,ze,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ze,ae.width,ae.height,0,pe,be,null));else if(w.isDataTexture)if(Je.length>0){We&&tt&&n.texStorage2D(t.TEXTURE_2D,_e,ze,Je[0].width,Je[0].height);for(let le=0,de=Je.length;le<de;le++)Ae=Je[le],We?G&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ae.width,Ae.height,pe,be,Ae.data):n.texImage2D(t.TEXTURE_2D,le,ze,Ae.width,Ae.height,0,pe,be,Ae.data);w.generateMipmaps=!1}else We?(tt&&n.texStorage2D(t.TEXTURE_2D,_e,ze,ae.width,ae.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,pe,be,ae.data)):n.texImage2D(t.TEXTURE_2D,0,ze,ae.width,ae.height,0,pe,be,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ze,Je[0].width,Je[0].height,ae.depth);for(let le=0,de=Je.length;le<de;le++)if(Ae=Je[le],w.format!==Yn)if(pe!==null)if(We){if(G)if(w.layerUpdates.size>0){const ye=U0(Ae.width,Ae.height,w.format,w.type);for(const Ee of w.layerUpdates){const $e=Ae.data.subarray(Ee*ye/Ae.data.BYTES_PER_ELEMENT,(Ee+1)*ye/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Ee,Ae.width,Ae.height,1,pe,$e,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Ae.width,Ae.height,ae.depth,pe,Ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,ze,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Ae.width,Ae.height,ae.depth,pe,be,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,ze,Ae.width,Ae.height,ae.depth,0,pe,be,Ae.data)}else{We&&tt&&n.texStorage2D(t.TEXTURE_2D,_e,ze,Je[0].width,Je[0].height);for(let le=0,de=Je.length;le<de;le++)Ae=Je[le],w.format!==Yn?pe!==null?We?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Ae.width,Ae.height,pe,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,le,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?G&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ae.width,Ae.height,pe,be,Ae.data):n.texImage2D(t.TEXTURE_2D,le,ze,Ae.width,Ae.height,0,pe,be,Ae.data)}else if(w.isDataArrayTexture)if(We){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ze,ae.width,ae.height,ae.depth),G)if(w.layerUpdates.size>0){const le=U0(ae.width,ae.height,w.format,w.type);for(const de of w.layerUpdates){const ye=ae.data.subarray(de*le/ae.data.BYTES_PER_ELEMENT,(de+1)*le/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ae.width,ae.height,1,pe,be,ye)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,be,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,ae.width,ae.height,ae.depth,0,pe,be,ae.data);else if(w.isData3DTexture)We?(tt&&n.texStorage3D(t.TEXTURE_3D,_e,ze,ae.width,ae.height,ae.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,be,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ze,ae.width,ae.height,ae.depth,0,pe,be,ae.data);else if(w.isFramebufferTexture){if(tt)if(We)n.texStorage2D(t.TEXTURE_2D,_e,ze,ae.width,ae.height);else{let le=ae.width,de=ae.height;for(let ye=0;ye<_e;ye++)n.texImage2D(t.TEXTURE_2D,ye,ze,le,de,0,pe,be,null),le>>=1,de>>=1}}else if(Je.length>0){if(We&&tt){const le=se(Je[0]);n.texStorage2D(t.TEXTURE_2D,_e,ze,le.width,le.height)}for(let le=0,de=Je.length;le<de;le++)Ae=Je[le],We?G&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,pe,be,Ae):n.texImage2D(t.TEXTURE_2D,le,ze,pe,be,Ae);w.generateMipmaps=!1}else if(We){if(tt){const le=se(ae);n.texStorage2D(t.TEXTURE_2D,_e,ze,le.width,le.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,be,ae)}else n.texImage2D(t.TEXTURE_2D,0,ze,pe,be,ae);h(w)&&u(I),oe.__version=N.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ie(T,w,P){if(w.image.length!==6)return;const I=Me(T,w),H=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+P);const N=i.get(H);if(H.version!==N.__version||I===!0){n.activeTexture(t.TEXTURE0+P);const oe=it.getPrimaries(it.workingColorSpace),$=w.colorSpace===lr?null:it.getPrimaries(w.colorSpace),Q=w.colorSpace===lr||oe===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ue=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let de=0;de<6;de++)!ue&&!ae?pe[de]=y(w.image[de],!0,r.maxCubemapSize):pe[de]=ae?w.image[de].image:w.image[de],pe[de]=q(w,pe[de]);const be=pe[0],ze=s.convert(w.format,w.colorSpace),Ae=s.convert(w.type),Je=m(w.internalFormat,ze,Ae,w.colorSpace),We=w.isVideoTexture!==!0,tt=N.__version===void 0||I===!0,G=H.dataReady;let _e=M(w,be);he(t.TEXTURE_CUBE_MAP,w);let le;if(ue){We&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Je,be.width,be.height);for(let de=0;de<6;de++){le=pe[de].mipmaps;for(let ye=0;ye<le.length;ye++){const Ee=le[ye];w.format!==Yn?ze!==null?We?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye,0,0,Ee.width,Ee.height,ze,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye,Je,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye,0,0,Ee.width,Ee.height,ze,Ae,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye,Je,Ee.width,Ee.height,0,ze,Ae,Ee.data)}}}else{if(le=w.mipmaps,We&&tt){le.length>0&&_e++;const de=se(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Je,de.width,de.height)}for(let de=0;de<6;de++)if(ae){We?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,pe[de].width,pe[de].height,ze,Ae,pe[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Je,pe[de].width,pe[de].height,0,ze,Ae,pe[de].data);for(let ye=0;ye<le.length;ye++){const $e=le[ye].image[de].image;We?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye+1,0,0,$e.width,$e.height,ze,Ae,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye+1,Je,$e.width,$e.height,0,ze,Ae,$e.data)}}else{We?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ze,Ae,pe[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Je,ze,Ae,pe[de]);for(let ye=0;ye<le.length;ye++){const Ee=le[ye];We?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye+1,0,0,ze,Ae,Ee.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye+1,Je,ze,Ae,Ee.image[de])}}}h(w)&&u(t.TEXTURE_CUBE_MAP),N.__version=H.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function re(T,w,P,I,H,N){const oe=s.convert(P.format,P.colorSpace),$=s.convert(P.type),Q=m(P.internalFormat,oe,$,P.colorSpace);if(!i.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>N),pe=Math.max(1,w.height>>N);H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?n.texImage3D(H,N,Q,ae,pe,w.depth,0,oe,$,null):n.texImage2D(H,N,Q,ae,pe,0,oe,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),V(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,I,H,i.get(P).__webglTexture,0,O(w)):(H===t.TEXTURE_2D||H>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,I,H,i.get(P).__webglTexture,N),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(T,w,P){if(t.bindRenderbuffer(t.RENDERBUFFER,T),w.depthBuffer){const I=w.depthTexture,H=I&&I.isDepthTexture?I.type:null,N=v(w.stencilBuffer,H),oe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=O(w);V(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$,N,w.width,w.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,$,N,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,N,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,T)}else{const I=w.textures;for(let H=0;H<I.length;H++){const N=I[H],oe=s.convert(N.format,N.colorSpace),$=s.convert(N.type),Q=m(N.internalFormat,oe,$,N.colorSpace),ue=O(w);P&&V(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Q,w.width,w.height):V(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const I=i.get(w.depthTexture).__webglTexture,H=O(w);if(w.depthTexture.format===eo)V(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,I,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,I,0);else if(w.depthTexture.format===is)V(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,I,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const w=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==T.depthTexture){const I=T.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),I){const H=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,I.removeEventListener("dispose",H)};I.addEventListener("dispose",H),w.__depthDisposeCallback=H}w.__boundDepthTexture=I}if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");ge(w.__webglFramebuffer,T)}else if(P){w.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[I]),w.__webglDepthbuffer[I]===void 0)w.__webglDepthbuffer[I]=t.createRenderbuffer(),me(w.__webglDepthbuffer[I],T,!1);else{const H=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=w.__webglDepthbuffer[I];t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,N)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),me(w.__webglDepthbuffer,T,!1);else{const I=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,H)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(T,w,P){const I=i.get(T);w!==void 0&&re(I.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Ne(T)}function Fe(T){const w=T.texture,P=i.get(T),I=i.get(w);T.addEventListener("dispose",b);const H=T.textures,N=T.isWebGLCubeRenderTarget===!0,oe=H.length>1;if(oe||(I.__webglTexture===void 0&&(I.__webglTexture=t.createTexture()),I.__version=w.version,o.memory.textures++),N){P.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps&&w.mipmaps.length>0){P.__webglFramebuffer[$]=[];for(let Q=0;Q<w.mipmaps.length;Q++)P.__webglFramebuffer[$][Q]=t.createFramebuffer()}else P.__webglFramebuffer[$]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){P.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)P.__webglFramebuffer[$]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(oe)for(let $=0,Q=H.length;$<Q;$++){const ue=i.get(H[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&V(T)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let $=0;$<H.length;$++){const Q=H[$];P.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[$]);const ue=s.convert(Q.format,Q.colorSpace),ae=s.convert(Q.type),pe=m(Q.internalFormat,ue,ae,Q.colorSpace,T.isXRRenderTarget===!0),be=O(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,P.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),me(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture),he(t.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps&&w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)re(P.__webglFramebuffer[$][Q],T,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else re(P.__webglFramebuffer[$],T,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let $=0,Q=H.length;$<Q;$++){const ue=H[$],ae=i.get(ue);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),he(t.TEXTURE_2D,ue),re(P.__webglFramebuffer,T,ue,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D,0),h(ue)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,I.__webglTexture),he($,w),w.mipmaps&&w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)re(P.__webglFramebuffer[Q],T,w,t.COLOR_ATTACHMENT0,$,Q);else re(P.__webglFramebuffer,T,w,t.COLOR_ATTACHMENT0,$,0);h(w)&&u($),n.unbindTexture()}T.depthBuffer&&Ne(T)}function Ke(T){const w=T.textures;for(let P=0,I=w.length;P<I;P++){const H=w[P];if(h(H)){const N=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(H).__webglTexture;n.bindTexture(N,oe),u(N),n.unbindTexture()}}}const ke=[],F=[];function pt(T){if(T.samples>0){if(V(T)===!1){const w=T.textures,P=T.width,I=T.height;let H=t.COLOR_BUFFER_BIT;const N=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(T),$=w.length>1;if($)for(let Q=0;Q<w.length;Q++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Q=0;Q<w.length;Q++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(H|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(H|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Q]);const ue=i.get(w[Q]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,P,I,0,0,P,I,H,t.NEAREST),l===!0&&(ke.length=0,F.length=0,ke.push(t.COLOR_ATTACHMENT0+Q),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ke.push(N),F.push(N),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let Q=0;Q<w.length;Q++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Q]);const ue=i.get(w[Q]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const w=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function O(T){return Math.min(r.maxSamples,T.samples)}function V(T){const w=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function J(T){const w=o.render.frame;d.get(T)!==w&&(d.set(T,w),T.update())}function q(T,w){const P=T.colorSpace,I=T.format,H=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==Ar&&P!==lr&&(it.getTransfer(P)===ht?(I!==Yn||H!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),w}function se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=ce,this.rebindTextures=Ce,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=V}function $2(t,e){function n(i,r=lr){let s;const o=it.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dx)return t.BYTE;if(i===Lx)return t.SHORT;if(i===xa)return t.UNSIGNED_SHORT;if(i===Yf)return t.INT;if(i===ts)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===Ti)return t.HALF_FLOAT;if(i===Ix)return t.ALPHA;if(i===Ux)return t.RGB;if(i===Yn)return t.RGBA;if(i===Ox)return t.LUMINANCE;if(i===Fx)return t.LUMINANCE_ALPHA;if(i===eo)return t.DEPTH_COMPONENT;if(i===is)return t.DEPTH_STENCIL;if(i===zx)return t.RED;if(i===Zf)return t.RED_INTEGER;if(i===kx)return t.RG;if(i===Qf)return t.RG_INTEGER;if(i===Jf)return t.RGBA_INTEGER;if(i===Il||i===Ul||i===Ol||i===Fl)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===_h||i===yh||i===Sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mh||i===wh||i===Eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mh||i===wh)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Th||i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Oh||i===Fh||i===zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ih)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===kh||i===Bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zl)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bx||i===Hh||i===Vh||i===Gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class eA extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const h=n.getJointPose(y,i),u=this._getHandJoint(c,y);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
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

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new It({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ze(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,x=null;const y=new rA,h=n.getContextAttributes();let u=null,m=null;const v=[],M=[],C=new Ue;let b=null;const A=new Ln;A.layers.enable(1),A.viewport=new ut;const D=new Ln;D.layers.enable(2),D.viewport=new ut;const z=[A,D],S=new eA;S.layers.enable(1),S.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let re=v[ie];return re===void 0&&(re=new ed,v[ie]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ie){let re=v[ie];return re===void 0&&(re=new ed,v[ie]=re),re.getGripSpace()},this.getHand=function(ie){let re=v[ie];return re===void 0&&(re=new ed,v[ie]=re),re.getHandSpace()};function B(ie){const re=M.indexOf(ie.inputSource);if(re===-1)return;const me=v[re];me!==void 0&&(me.update(ie.inputSource,ie.frame,c||o),me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",X);for(let ie=0;ie<v.length;ie++){const re=M[ie];re!==null&&(M[ie]=null,v[ie].disconnect(re))}E=null,U=null,y.reset(),e.setRenderTarget(u),g=null,p=null,f=null,r=null,m=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",X),h.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Qn(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let re=null,me=null,ge=null;h.depth&&(ge=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=h.stencil?is:eo,me=h.stencil?ns:ts);const Ne={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Ne),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Qn(p.textureWidth,p.textureHeight,{format:Yn,type:Ei,depthTexture:new sp(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(ie){for(let re=0;re<ie.removed.length;re++){const me=ie.removed[re],ge=M.indexOf(me);ge>=0&&(M[ge]=null,v[ge].disconnect(me))}for(let re=0;re<ie.added.length;re++){const me=ie.added[re];let ge=M.indexOf(me);if(ge===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=M.length){M.push(me),ge=Ce;break}else if(M[Ce]===null){M[Ce]=me,ge=Ce;break}if(ge===-1)break}const Ne=v[ge];Ne&&Ne.connect(me)}}const Y=new k,ce=new k;function L(ie,re,me){Y.setFromMatrixPosition(re.matrixWorld),ce.setFromMatrixPosition(me.matrixWorld);const ge=Y.distanceTo(ce),Ne=re.projectionMatrix.elements,Ce=me.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),Ke=Ne[14]/(Ne[10]+1),ke=(Ne[9]+1)/Ne[5],F=(Ne[9]-1)/Ne[5],pt=(Ne[8]-1)/Ne[0],O=(Ce[8]+1)/Ce[0],V=Fe*pt,J=Fe*O,q=ge/(-pt+O),se=q*-pt;if(re.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(se),ie.translateZ(q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ne[10]===-1)ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const T=Fe+q,w=Ke+q,P=V-se,I=J+(ge-se),H=ke*Ke/w*T,N=F*Ke/w*T;ie.projectionMatrix.makePerspective(P,I,H,N,T,w),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Z(ie,re){re===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(re.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let re=ie.near,me=ie.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(me=y.depthFar)),S.near=D.near=A.near=re,S.far=D.far=A.far=me,(E!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,U=S.far);const ge=ie.parent,Ne=S.cameras;Z(S,ge);for(let Ce=0;Ce<Ne.length;Ce++)Z(Ne[Ce],ge);Ne.length===2?L(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),ne(ie,S,ge)};function ne(ie,re,me){me===null?ie.matrix.copy(re.matrixWorld):(ie.matrix.copy(me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(re.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Wh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(ie){l=ie,p!==null&&(p.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let he=null;function Me(ie,re){if(d=re.getViewerPose(c||o),x=re,d!==null){const me=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let ge=!1;me.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Ce=0;Ce<me.length;Ce++){const Fe=me[Ce];let Ke=null;if(g!==null)Ke=g.getViewport(Fe);else{const F=f.getViewSubImage(p,Fe);Ke=F.viewport,Ce===0&&(e.setRenderTargetTextures(m,F.colorTexture,p.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(m))}let ke=z[Ce];ke===void 0&&(ke=new Ln,ke.layers.enable(Ce),ke.viewport=new ut,z[Ce]=ke),ke.matrix.fromArray(Fe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Fe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ce===0&&(S.matrix.copy(ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(ke)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ce=f.getDepthInformation(me[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,r.renderState)}}for(let me=0;me<v.length;me++){const ge=M[me],Ne=v[me];ge!==null&&Ne!==void 0&&Ne.update(ge,re,c||o)}he&&he(ie,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const we=new Qx;we.setAnimationLoop(Me),this.setAnimationLoop=function(ie){he=ie},this.dispose=function(){}}}const Ir=new Ai,oA=new rt;function aA(t,e){function n(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,qx(t)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,m,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(h,u):u.isMeshToonMaterial?(s(h,u),f(h,u)):u.isMeshPhongMaterial?(s(h,u),d(h,u)):u.isMeshStandardMaterial?(s(h,u),p(h,u),u.isMeshPhysicalMaterial&&g(h,u,M)):u.isMeshMatcapMaterial?(s(h,u),x(h,u)):u.isMeshDepthMaterial?s(h,u):u.isMeshDistanceMaterial?(s(h,u),y(h,u)):u.isMeshNormalMaterial?s(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?l(h,u,m,v):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,n(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===cn&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,n(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===cn&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,n(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,n(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,M=m.envMapRotation;v&&(h.envMap.value=v,Ir.copy(M),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),h.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(Ir)),h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,m,v){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*m,h.scale.value=v*.5,u.map&&(h.map.value=u.map,n(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function g(h,u,m){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===cn&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,u){u.matcap&&(h.matcap.value=u.matcap)}function y(h,u){const m=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(m.matrixWorld),h.nearDistance.value=m.shadow.camera.near,h.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(x(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",h));const C=v.program;i.updateUBOMapping(m,C);const b=e.render.frame;s[m.id]!==b&&(p(m),s[m.id]=b)}function d(m){const v=f();m.__bindingPointIndex=v;const M=t.createBuffer(),C=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const v=r[m.id],M=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,A=M.length;b<A;b++){const D=Array.isArray(M[b])?M[b]:[M[b]];for(let z=0,S=D.length;z<S;z++){const E=D[z];if(g(E,b,z,C)===!0){const U=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let K=0;for(let X=0;X<B.length;X++){const Y=B[X],ce=y(Y);typeof Y=="number"||typeof Y=="boolean"?(E.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,U+K,E.__data)):Y.isMatrix3?(E.__data[0]=Y.elements[0],E.__data[1]=Y.elements[1],E.__data[2]=Y.elements[2],E.__data[3]=0,E.__data[4]=Y.elements[3],E.__data[5]=Y.elements[4],E.__data[6]=Y.elements[5],E.__data[7]=0,E.__data[8]=Y.elements[6],E.__data[9]=Y.elements[7],E.__data[10]=Y.elements[8],E.__data[11]=0):(Y.toArray(E.__data,K),K+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,M,C){const b=m.value,A=v+"_"+M;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const D=C[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return C[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function x(m){const v=m.uniforms;let M=0;const C=16;for(let A=0,D=v.length;A<D;A++){const z=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,E=z.length;S<E;S++){const U=z[S],B=Array.isArray(U.value)?U.value:[U.value];for(let K=0,X=B.length;K<X;K++){const Y=B[K],ce=y(Y),L=M%C,Z=L%ce.boundary,ne=L+Z;M+=Z,ne!==0&&C-ne<ce.storage&&(M+=C-ne),U.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=ce.storage}}}const b=M%C;return b>0&&(M+=C-b),m.__size=M,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function h(m){const v=m.target;v.removeEventListener("dispose",h);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class cA{constructor(e={}){const{canvas:n=QM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let y=null,h=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=_r,this.toneMappingExposure=1;const v=this;let M=!1,C=0,b=0,A=null,D=-1,z=null;const S=new ut,E=new ut;let U=null;const B=new Be(0);let K=0,X=n.width,Y=n.height,ce=1,L=null,Z=null;const ne=new ut(0,0,X,Y),he=new ut(0,0,X,Y);let Me=!1;const we=new np;let ie=!1,re=!1;const me=new rt,ge=new rt,Ne=new k,Ce=new ut,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ke(){return A===null?ce:1}let F=i;function pt(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const W="webgl2";if(F=pt(W,R),F===null)throw pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let O,V,J,q,se,T,w,P,I,H,N,oe,$,Q,ue,ae,pe,be,ze,Ae,Je,We,tt,G;function _e(){O=new pT(F),O.init(),We=new $2(F,O),V=new lT(F,O,e,We),J=new Z2(F),V.reverseDepthBuffer&&J.buffers.depth.setReversed(!0),q=new vT(F),se=new U2,T=new J2(F,O,J,se,V,We,q),w=new uT(v),P=new fT(v),I=new E1(F),tt=new oT(F,I),H=new mT(F,I,q,tt),N=new _T(F,H,I,q),ze=new xT(F,V,T),ae=new cT(se),oe=new I2(v,w,P,O,V,tt,ae),$=new aA(v,se),Q=new F2,ue=new G2(O),be=new sT(v,w,P,J,N,p,l),pe=new q2(v,N,V),G=new lA(F,q,V,J),Ae=new aT(F,O,q),Je=new gT(F,O,q),q.programs=oe.programs,v.capabilities=V,v.extensions=O,v.properties=se,v.renderLists=Q,v.shadowMap=pe,v.state=J,v.info=q}_e();const le=new sA(v,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=O.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=O.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(X,Y,!1))},this.getSize=function(R){return R.set(X,Y)},this.setSize=function(R,W,ee=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,Y=W,n.width=Math.floor(R*ce),n.height=Math.floor(W*ce),ee===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(X*ce,Y*ce).floor()},this.setDrawingBufferSize=function(R,W,ee){X=R,Y=W,ce=ee,n.width=Math.floor(R*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,W,ee,te){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,ee,te),J.viewport(S.copy(ne).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,W,ee,te){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,W,ee,te),J.scissor(E.copy(he).multiplyScalar(ce).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){J.setScissorTest(Me=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(R=!0,W=!0,ee=!0){let te=0;if(R){let j=!1;if(A!==null){const ve=A.texture.format;j=ve===Jf||ve===Qf||ve===Zf}if(j){const ve=A.texture.type,Se=ve===Ei||ve===ts||ve===xa||ve===ns||ve===qf||ve===Kf,Pe=be.getClearColor(),Le=be.getClearAlpha(),He=Pe.r,Ve=Pe.g,Ie=Pe.b;Se?(g[0]=He,g[1]=Ve,g[2]=Ie,g[3]=Le,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=He,x[1]=Ve,x[2]=Ie,x[3]=Le,F.clearBufferiv(F.COLOR,0,x))}else te|=F.COLOR_BUFFER_BIT}W&&(te|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ee&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Q.dispose(),ue.dispose(),se.dispose(),w.dispose(),P.dispose(),N.dispose(),tt.dispose(),G.dispose(),oe.dispose(),le.dispose(),le.removeEventListener("sessionstart",gp),le.removeEventListener("sessionend",vp),br.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=q.autoReset,W=pe.enabled,ee=pe.autoUpdate,te=pe.needsUpdate,j=pe.type;_e(),q.autoReset=R,pe.enabled=W,pe.autoUpdate=ee,pe.needsUpdate=te,pe.type=j}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $e(R){const W=R.target;W.removeEventListener("dispose",$e),Rt(W)}function Rt(R){fn(R),se.remove(R)}function fn(R){const W=se.get(R).programs;W!==void 0&&(W.forEach(function(ee){oe.releaseProgram(ee)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ee,te,j,ve){W===null&&(W=Fe);const Se=j.isMesh&&j.matrixWorld.determinant()<0,Pe=u_(R,W,ee,te,j);J.setMaterial(te,Se);let Le=ee.index,He=1;if(te.wireframe===!0){if(Le=H.getWireframeAttribute(ee),Le===void 0)return;He=2}const Ve=ee.drawRange,Ie=ee.attributes.position;let at=Ve.start*He,mt=(Ve.start+Ve.count)*He;ve!==null&&(at=Math.max(at,ve.start*He),mt=Math.min(mt,(ve.start+ve.count)*He)),Le!==null?(at=Math.max(at,0),mt=Math.min(mt,Le.count)):Ie!=null&&(at=Math.max(at,0),mt=Math.min(mt,Ie.count));const Mt=mt-at;if(Mt<0||Mt===1/0)return;tt.setup(j,te,Pe,ee,Le);let An,st=Ae;if(Le!==null&&(An=I.get(Le),st=Je,st.setIndex(An)),j.isMesh)te.wireframe===!0?(J.setLineWidth(te.wireframeLinewidth*ke()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(j.isLine){let Oe=te.linewidth;Oe===void 0&&(Oe=1),J.setLineWidth(Oe*ke()),j.isLineSegments?st.setMode(F.LINES):j.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else j.isPoints?st.setMode(F.POINTS):j.isSprite&&st.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)st.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))st.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Oe=j._multiDrawStarts,jt=j._multiDrawCounts,ot=j._multiDrawCount,Jn=Le?I.get(Le).bytesPerElement:1,hs=se.get(te).currentProgram.getUniforms();for(let bn=0;bn<ot;bn++)hs.setValue(F,"_gl_DrawID",bn),st.render(Oe[bn]/Jn,jt[bn])}else if(j.isInstancedMesh)st.renderInstances(at,Mt,j.count);else if(ee.isInstancedBufferGeometry){const Oe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,jt=Math.min(ee.instanceCount,Oe);st.renderInstances(at,Mt,jt)}else st.render(at,Mt)};function nt(R,W,ee){R.transparent===!0&&R.side===Nn&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,Ca(R,W,ee),R.side=Mr,R.needsUpdate=!0,Ca(R,W,ee),R.side=Nn):Ca(R,W,ee)}this.compile=function(R,W,ee=null){ee===null&&(ee=R),h=ue.get(ee),h.init(W),m.push(h),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),R!==ee&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),h.setupLights();const te=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const Pe=ve[Se];nt(Pe,ee,j),te.add(Pe)}else nt(ve,ee,j),te.add(ve)}),m.pop(),h=null,te},this.compileAsync=function(R,W,ee=null){const te=this.compile(R,W,ee);return new Promise(j=>{function ve(){if(te.forEach(function(Se){se.get(Se).currentProgram.isReady()&&te.delete(Se)}),te.size===0){j(R);return}setTimeout(ve,10)}O.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let pn=null;function bi(R){pn&&pn(R)}function gp(){br.stop()}function vp(){br.start()}const br=new Qx;br.setAnimationLoop(bi),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(R){pn=R,le.setAnimationLoop(R),R===null?br.stop():br.start()},le.addEventListener("sessionstart",gp),le.addEventListener("sessionend",vp),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(W),W=le.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,A),h=ue.get(R,m.length),h.init(W),m.push(h),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),we.setFromProjectionMatrix(ge),re=this.localClippingEnabled,ie=ae.init(this.clippingPlanes,re),y=Q.get(R,u.length),y.init(),u.push(y),le.enabled===!0&&le.isPresenting===!0){const ve=v.xr.getDepthSensingMesh();ve!==null&&Wc(ve,W,-1/0,v.sortObjects)}Wc(R,W,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,Z),Ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ke&&be.addToRenderList(y,R),this.info.render.frame++,ie===!0&&ae.beginShadows();const ee=h.state.shadowsArray;pe.render(ee,R,W),ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=y.opaque,j=y.transmissive;if(h.setupLights(),W.isArrayCamera){const ve=W.cameras;if(j.length>0)for(let Se=0,Pe=ve.length;Se<Pe;Se++){const Le=ve[Se];_p(te,j,R,Le)}Ke&&be.render(R);for(let Se=0,Pe=ve.length;Se<Pe;Se++){const Le=ve[Se];xp(y,R,Le,Le.viewport)}}else j.length>0&&_p(te,j,R,W),Ke&&be.render(R),xp(y,R,W);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,W),tt.resetDefaultState(),D=-1,z=null,m.pop(),m.length>0?(h=m[m.length-1],ie===!0&&ae.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Wc(R,W,ee,te){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){te&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Se=N.update(R),Pe=R.material;Pe.visible&&y.push(R,Se,Pe,ee,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const Se=N.update(R),Pe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ce.copy(Se.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Pe)){const Le=Se.groups;for(let He=0,Ve=Le.length;He<Ve;He++){const Ie=Le[He],at=Pe[Ie.materialIndex];at&&at.visible&&y.push(R,Se,at,ee,Ce.z,Ie)}}else Pe.visible&&y.push(R,Se,Pe,ee,Ce.z,null)}}const ve=R.children;for(let Se=0,Pe=ve.length;Se<Pe;Se++)Wc(ve[Se],W,ee,te)}function xp(R,W,ee,te){const j=R.opaque,ve=R.transmissive,Se=R.transparent;h.setupLightsView(ee),ie===!0&&ae.setGlobalState(v.clippingPlanes,ee),te&&J.viewport(S.copy(te)),j.length>0&&ba(j,W,ee),ve.length>0&&ba(ve,W,ee),Se.length>0&&ba(Se,W,ee),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function _p(R,W,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[te.id]===void 0&&(h.state.transmissionRenderTarget[te.id]=new Qn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Ti:Ei,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ve=h.state.transmissionRenderTarget[te.id],Se=te.viewport||S;ve.setSize(Se.z,Se.w);const Pe=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(B),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&be.render(ee);const Le=v.toneMapping;v.toneMapping=_r;const He=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),h.setupLightsView(te),ie===!0&&ae.setGlobalState(v.clippingPlanes,te),ba(R,ee,te),T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve),O.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ie=0,at=W.length;Ie<at;Ie++){const mt=W[Ie],Mt=mt.object,An=mt.geometry,st=mt.material,Oe=mt.group;if(st.side===Nn&&Mt.layers.test(te.layers)){const jt=st.side;st.side=cn,st.needsUpdate=!0,yp(Mt,ee,te,An,st,Oe),st.side=jt,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve))}v.setRenderTarget(Pe),v.setClearColor(B,K),He!==void 0&&(te.viewport=He),v.toneMapping=Le}function ba(R,W,ee){const te=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ve=R.length;j<ve;j++){const Se=R[j],Pe=Se.object,Le=Se.geometry,He=te===null?Se.material:te,Ve=Se.group;Pe.layers.test(ee.layers)&&yp(Pe,W,ee,Le,He,Ve)}}function yp(R,W,ee,te,j,ve){R.onBeforeRender(v,W,ee,te,j,ve),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,W,ee,te,R,ve),j.transparent===!0&&j.side===Nn&&j.forceSinglePass===!1?(j.side=cn,j.needsUpdate=!0,v.renderBufferDirect(ee,W,te,j,R,ve),j.side=Mr,j.needsUpdate=!0,v.renderBufferDirect(ee,W,te,j,R,ve),j.side=Nn):v.renderBufferDirect(ee,W,te,j,R,ve),R.onAfterRender(v,W,ee,te,j,ve)}function Ca(R,W,ee){W.isScene!==!0&&(W=Fe);const te=se.get(R),j=h.state.lights,ve=h.state.shadowsArray,Se=j.state.version,Pe=oe.getParameters(R,j.state,ve,W,ee),Le=oe.getProgramCacheKey(Pe);let He=te.programs;te.environment=R.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(R.isMeshStandardMaterial?P:w).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",$e),He=new Map,te.programs=He);let Ve=He.get(Le);if(Ve!==void 0){if(te.currentProgram===Ve&&te.lightsStateVersion===Se)return Mp(R,Pe),Ve}else Pe.uniforms=oe.getUniforms(R),R.onBeforeCompile(Pe,v),Ve=oe.acquireProgram(Pe,Le),He.set(Le,Ve),te.uniforms=Pe.uniforms;const Ie=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),Mp(R,Pe),te.needsLights=h_(R),te.lightsStateVersion=Se,te.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=Ve,te.uniformsList=null,Ve}function Sp(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Hl.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Mp(R,W){const ee=se.get(R);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function u_(R,W,ee,te,j){W.isScene!==!0&&(W=Fe),T.resetTextureUnits();const ve=W.fog,Se=te.isMeshStandardMaterial?W.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ar,Le=(te.isMeshStandardMaterial?P:w).get(te.envMap||Se),He=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ve=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ie=!!ee.morphAttributes.position,at=!!ee.morphAttributes.normal,mt=!!ee.morphAttributes.color;let Mt=_r;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const An=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,st=An!==void 0?An.length:0,Oe=se.get(te),jt=h.state.lights;if(ie===!0&&(re===!0||R!==z)){const Bn=R===z&&te.id===D;ae.setState(te,R,Bn)}let ot=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==jt.state.version||Oe.outputColorSpace!==Pe||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==Le||te.fog===!0&&Oe.fog!==ve||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ae.numPlanes||Oe.numIntersection!==ae.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Ve||Oe.morphTargets!==Ie||Oe.morphNormals!==at||Oe.morphColors!==mt||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Oe.__version=te.version);let Jn=Oe.currentProgram;ot===!0&&(Jn=Ca(te,W,j));let hs=!1,bn=!1,jc=!1;const At=Jn.getUniforms(),Zi=Oe.uniforms;if(J.useProgram(Jn.program)&&(hs=!0,bn=!0,jc=!0),te.id!==D&&(D=te.id,bn=!0),hs||z!==R){V.reverseDepthBuffer?(me.copy(R.projectionMatrix),$M(me),e1(me),At.setValue(F,"projectionMatrix",me)):At.setValue(F,"projectionMatrix",R.projectionMatrix),At.setValue(F,"viewMatrix",R.matrixWorldInverse);const Bn=At.map.cameraPosition;Bn!==void 0&&Bn.setValue(F,Ne.setFromMatrixPosition(R.matrixWorld)),V.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,bn=!0,jc=!0)}if(j.isSkinnedMesh){At.setOptional(F,j,"bindMatrix"),At.setOptional(F,j,"bindMatrixInverse");const Bn=j.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),At.setValue(F,"boneTexture",Bn.boneTexture,T))}j.isBatchedMesh&&(At.setOptional(F,j,"batchingTexture"),At.setValue(F,"batchingTexture",j._matricesTexture,T),At.setOptional(F,j,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",j._indirectTexture,T),At.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",j._colorsTexture,T));const Xc=ee.morphAttributes;if((Xc.position!==void 0||Xc.normal!==void 0||Xc.color!==void 0)&&ze.update(j,ee,Jn),(bn||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,At.setValue(F,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Zi.envMap.value=Le,Zi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(Zi.envMapIntensity.value=W.environmentIntensity),bn&&(At.setValue(F,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&d_(Zi,jc),ve&&te.fog===!0&&$.refreshFogUniforms(Zi,ve),$.refreshMaterialUniforms(Zi,te,ce,Y,h.state.transmissionRenderTarget[R.id]),Hl.upload(F,Sp(Oe),Zi,T)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hl.upload(F,Sp(Oe),Zi,T),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(F,"center",j.center),At.setValue(F,"modelViewMatrix",j.modelViewMatrix),At.setValue(F,"normalMatrix",j.normalMatrix),At.setValue(F,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Bn=te.uniformsGroups;for(let Yc=0,f_=Bn.length;Yc<f_;Yc++){const wp=Bn[Yc];G.update(wp,Jn),G.bind(wp,Jn)}}return Jn}function d_(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function h_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,W,ee){se.get(R.texture).__webglTexture=W,se.get(R.depthTexture).__webglTexture=ee;const te=se.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const ee=se.get(R);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,ee=0){A=R,C=W,b=ee;let te=!0,j=null,ve=!1,Se=!1;if(R){const Le=se.get(R);if(Le.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(Le.__webglFramebuffer===void 0)T.setupRenderTarget(R);else if(Le.__hasExternalTextures)T.rebindTextures(R,se.get(R.texture).__webglTexture,se.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ie=R.depthTexture;if(Le.__boundDepthTexture!==Ie){if(Ie!==null&&se.has(Ie)&&(R.width!==Ie.image.width||R.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const Ve=se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[W])?j=Ve[W][ee]:j=Ve[W],ve=!0):R.samples>0&&T.useMultisampledRTT(R)===!1?j=se.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[ee]:j=Ve,S.copy(R.viewport),E.copy(R.scissor),U=R.scissorTest}else S.copy(ne).multiplyScalar(ce).floor(),E.copy(he).multiplyScalar(ce).floor(),U=Me;if(J.bindFramebuffer(F.FRAMEBUFFER,j)&&te&&J.drawBuffers(R,j),J.viewport(S),J.scissor(E),J.setScissorTest(U),ve){const Le=se.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ee)}else if(Se){const Le=se.get(R.texture),He=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,ee||0,He)}D=-1},this.readRenderTargetPixels=function(R,W,ee,te,j,ve,Se){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){J.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Le=R.texture,He=Le.format,Ve=Le.type;if(!V.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-te&&ee>=0&&ee<=R.height-j&&F.readPixels(W,ee,te,j,We.convert(He),We.convert(Ve),ve)}finally{const Le=A!==null?se.get(A).__webglFramebuffer:null;J.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(R,W,ee,te,j,ve,Se){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){const Le=R.texture,He=Le.format,Ve=Le.type;if(!V.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-te&&ee>=0&&ee<=R.height-j){J.bindFramebuffer(F.FRAMEBUFFER,Pe);const Ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(W,ee,te,j,We.convert(He),We.convert(Ve),0);const at=A!==null?se.get(A).__webglFramebuffer:null;J.bindFramebuffer(F.FRAMEBUFFER,at);const mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await JM(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.deleteBuffer(Ie),F.deleteSync(mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,ee=0){R.isTexture!==!0&&(Bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-ee),j=Math.floor(R.image.width*te),ve=Math.floor(R.image.height*te),Se=W!==null?W.x:0,Pe=W!==null?W.y:0;T.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,Se,Pe,j,ve),J.unbindTexture()},this.copyTextureToTexture=function(R,W,ee=null,te=null,j=0){R.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],W=arguments[2],j=arguments[3]||0,ee=null);let ve,Se,Pe,Le,He,Ve;ee!==null?(ve=ee.max.x-ee.min.x,Se=ee.max.y-ee.min.y,Pe=ee.min.x,Le=ee.min.y):(ve=R.image.width,Se=R.image.height,Pe=0,Le=0),te!==null?(He=te.x,Ve=te.y):(He=0,Ve=0);const Ie=We.convert(W.format),at=We.convert(W.type);T.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),Mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),An=F.getParameter(F.UNPACK_SKIP_PIXELS),st=F.getParameter(F.UNPACK_SKIP_ROWS),Oe=F.getParameter(F.UNPACK_SKIP_IMAGES),jt=R.isCompressedTexture?R.mipmaps[j]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,jt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Le),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,He,Ve,ve,Se,Ie,at,jt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,He,Ve,jt.width,jt.height,Ie,jt.data):F.texSubImage2D(F.TEXTURE_2D,j,He,Ve,ve,Se,Ie,at,jt),F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,An),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe),j===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ee=null,te=null,j=0){R.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0);let ve,Se,Pe,Le,He,Ve,Ie,at,mt;const Mt=R.isCompressedTexture?R.mipmaps[j]:R.image;ee!==null?(ve=ee.max.x-ee.min.x,Se=ee.max.y-ee.min.y,Pe=ee.max.z-ee.min.z,Le=ee.min.x,He=ee.min.y,Ve=ee.min.z):(ve=Mt.width,Se=Mt.height,Pe=Mt.depth,Le=0,He=0,Ve=0),te!==null?(Ie=te.x,at=te.y,mt=te.z):(Ie=0,at=0,mt=0);const An=We.convert(W.format),st=We.convert(W.type);let Oe;if(W.isData3DTexture)T.setTexture3D(W,0),Oe=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Oe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const jt=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Jn=F.getParameter(F.UNPACK_SKIP_PIXELS),hs=F.getParameter(F.UNPACK_SKIP_ROWS),bn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Oe,j,Ie,at,mt,ve,Se,Pe,An,st,Mt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,j,Ie,at,mt,ve,Se,Pe,An,Mt.data):F.texSubImage3D(Oe,j,Ie,at,mt,ve,Se,Pe,An,st,Mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,jt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jn),F.pixelStorei(F.UNPACK_SKIP_ROWS,hs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,bn),j===0&&W.generateMipmaps&&F.generateMipmap(Oe),J.unbindTexture()},this.initRenderTarget=function(R){se.get(R).__webglFramebuffer===void 0&&T.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,J.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ep?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Oc?"display-p3":"srgb"}}class n_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class i_ extends Ot{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Ht,d=Ht,f,p){super(null,o,a,l,c,d,r,s,f,p),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r_ extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new k,xc=new k,O0=new rt,No=new zc,fl=new Fc,td=new k,F0=new k;class uA extends Gt{constructor(e=new hn,n=new r_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vc.fromBufferAttribute(n,r-1),xc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vc.distanceTo(xc);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;O0.copy(r).invert(),No.copy(e.ray).applyMatrix4(O0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const g=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=g,h=x-1;y<h;y+=c){const u=d.getX(y),m=d.getX(y+1),v=pl(this,e,No,l,u,m);v&&n.push(v)}if(this.isLineLoop){const y=d.getX(x-1),h=d.getX(g),u=pl(this,e,No,l,y,h);u&&n.push(u)}}else{const g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=g,h=x-1;y<h;y+=c){const u=pl(this,e,No,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=pl(this,e,No,l,x-1,g);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(vc.fromBufferAttribute(o,r),xc.fromBufferAttribute(o,s),n.distanceSqToSegment(vc,xc,td,F0)>i)return;td.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(td);if(!(l<e.near||l>e.far))return{distance:l,point:F0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const z0=new k,k0=new k;class dA extends uA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)z0.fromBufferAttribute(n,r),k0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+z0.distanceTo(k0);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hA extends Ot{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hc extends hn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],g=[];let x=0;const y=[],h=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(g,2));function m(){const M=new k,C=new k;let b=0;const A=(n-e)/i;for(let D=0;D<=s;D++){const z=[],S=D/s,E=S*(n-e)+e;for(let U=0;U<=r;U++){const B=U/r,K=B*l+a,X=Math.sin(K),Y=Math.cos(K);C.x=E*X,C.y=-S*i+h,C.z=E*Y,f.push(C.x,C.y,C.z),M.set(X,A,Y).normalize(),p.push(M.x,M.y,M.z),g.push(B,1-S),z.push(x++)}y.push(z)}for(let D=0;D<r;D++)for(let z=0;z<s;z++){const S=y[z][D],E=y[z+1][D],U=y[z+1][D+1],B=y[z][D+1];e>0&&(d.push(S,E,B),b+=3),n>0&&(d.push(E,U,B),b+=3)}c.addGroup(u,b,0),u+=b}function v(M){const C=x,b=new Ue,A=new k;let D=0;const z=M===!0?e:n,S=M===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,h*S,0),p.push(0,S,0),g.push(.5,.5),x++;const E=x;for(let U=0;U<=r;U++){const K=U/r*l+a,X=Math.cos(K),Y=Math.sin(K);A.x=z*Y,A.y=h*S,A.z=z*X,f.push(A.x,A.y,A.z),p.push(0,S,0),b.x=X*.5+.5,b.y=Y*.5*S+.5,g.push(b.x,b.y),x++}for(let U=0;U<r;U++){const B=C+U,K=E+U;M===!0?d.push(K,K+1,B):d.push(K+1,K,B),D+=3}c.addGroup(u,D,M===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class op extends Hc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new op(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ap extends hn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new k,M=new k,C=new k;for(let b=0;b<n.length;b+=3)g(n[b+0],v),g(n[b+1],M),g(n[b+2],C),l(v,M,C,m)}function l(m,v,M,C){const b=C+1,A=[];for(let D=0;D<=b;D++){A[D]=[];const z=m.clone().lerp(M,D/b),S=v.clone().lerp(M,D/b),E=b-D;for(let U=0;U<=E;U++)U===0&&D===b?A[D][U]=z:A[D][U]=z.clone().lerp(S,U/E)}for(let D=0;D<b;D++)for(let z=0;z<2*(b-D)-1;z++){const S=Math.floor(z/2);z%2===0?(p(A[D][S+1]),p(A[D+1][S]),p(A[D][S])):(p(A[D][S+1]),p(A[D+1][S+1]),p(A[D+1][S]))}}function c(m){const v=new k;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(m),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function d(){const m=new k;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const M=h(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;o.push(M,1-C)}x(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],M=o[m+2],C=o[m+4],b=Math.max(v,M,C),A=Math.min(v,M,C);b>.9&&A<.1&&(v<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function p(m){s.push(m.x,m.y,m.z)}function g(m,v){const M=m*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){const m=new k,v=new k,M=new k,C=new k,b=new Ue,A=new Ue,D=new Ue;for(let z=0,S=0;z<s.length;z+=9,S+=6){m.set(s[z+0],s[z+1],s[z+2]),v.set(s[z+3],s[z+4],s[z+5]),M.set(s[z+6],s[z+7],s[z+8]),b.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),C.copy(m).add(v).add(M).divideScalar(3);const E=h(C);y(b,S+0,m,E),y(A,S+2,v,E),y(D,S+4,M,E)}}function y(m,v,M,C){C<0&&m.x===1&&(o[v]=m.x-1),M.x===0&&M.z===0&&(o[v]=C/2/Math.PI+.5)}function h(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.vertices,e.indices,e.radius,e.details)}}class lp extends ap{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lp(e.radius,e.detail)}}class cp extends hn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const p=(n-e)/r,g=new k,x=new Ue;for(let y=0;y<=r;y++){for(let h=0;h<=i;h++){const u=s+h/i*o;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/n+1)/2,x.y=(g.y/n+1)/2,d.push(x.x,x.y)}f+=p}for(let y=0;y<r;y++){const h=y*(i+1);for(let u=0;u<i;u++){const m=u+h,v=m,M=m+i+1,C=m+i+2,b=m+1;a.push(v,M,b),a.push(M,C,b)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class up extends hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new k,p=new k,g=[],x=[],y=[],h=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const b=C/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),h.push(b+M,1-v),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=d[u][m+1],M=d[u][m],C=d[u+1][m],b=d[u+1][m+1];(u!==0||o>0)&&g.push(v,M,b),(u!==i-1||l<Math.PI)&&g.push(M,C,b)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dp extends hn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new k,f=new k,p=new k;for(let g=0;g<=i;g++)for(let x=0;x<=r;x++){const y=x/r*s,h=g/i*Math.PI*2;f.x=(e+n*Math.cos(h))*Math.cos(y),f.y=(e+n*Math.cos(h))*Math.sin(y),f.z=n*Math.sin(h),a.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=r;x++){const y=(r+1)*g+x-1,h=(r+1)*(g-1)+x-1,u=(r+1)*(g-1)+x,m=(r+1)*g+x;o.push(y,h,m),o.push(h,u,m)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fA extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _n extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pA extends us{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const B0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class mA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){const g=c[f],x=c[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null}}}const gA=new mA;class hp{constructor(e){this.manager=e!==void 0?e:gA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hp.DEFAULT_MATERIAL_NAME="__DEFAULT";class vA extends hp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=B0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=_a("img");function l(){d(),B0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xA extends hp{constructor(e){super(e)}load(e,n,i,r){const s=new Ot,o=new vA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Vc extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class _A extends Vc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const nd=new rt,H0=new k,V0=new k;class s_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;H0.setFromMatrixPosition(e.matrixWorld),n.position.copy(H0),V0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(V0),n.updateMatrixWorld(),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const G0=new rt,Io=new k,id=new k;class yA extends s_{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),i.position.copy(Io),id.copy(i.position),id.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(id),i.updateMatrixWorld(),r.makeTranslation(-Io.x,-Io.y,-Io.z),G0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(G0)}}class o_ extends Vc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new yA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class SA extends s_{constructor(){super(new ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W0 extends Vc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new SA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class MA extends Vc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class wA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=j0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=j0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function j0(){return performance.now()}const X0=new rt;class EA{constructor(e,n,i=0,r=1/0){this.ray=new zc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return X0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X0),this}intersectObject(e,n=!0,i=[]){return Yh(e,this,i,n),i.sort(Y0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yh(e[r],this,i,n);return i.sort(Y0),i}}function Y0(t,e){return t.distance-e.distance}function Yh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Yh(s[o],e,n,!0)}}class q0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(an(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TA extends dA{constructor(e=10,n=10,i=4473924,r=8947848){i=new Be(i),r=new Be(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let p=0,g=0,x=-a;p<=n;p++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const y=p===s?i:r;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const d=new hn;d.setAttribute("position",new dt(l,3)),d.setAttribute("color",new dt(c,3));const f=new r_({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class AA extends cs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const K0={type:"change"},fp={type:"start"},a_={type:"end"},ml=new zc,Z0=new zi,bA=Math.cos(70*ZM.DEG2RAD),Lt=new k,xn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class CA extends AA{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new rs,this._lastTargetPosition=new k,this._quat=new rs().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q0,this._sphericalDelta=new q0,this._scale=1,this._panOffset=new k,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new k,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PA.bind(this),this._onPointerDown=RA.bind(this),this._onPointerUp=DA.bind(this),this._onContextMenu=zA.bind(this),this._onMouseWheel=IA.bind(this),this._onKeyDown=UA.bind(this),this._onTouchStart=OA.bind(this),this._onTouchMove=FA.bind(this),this._onMouseDown=LA.bind(this),this._onMouseMove=NA.bind(this),this._interceptControlDown=kA.bind(this),this._interceptControlUp=BA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ml.origin.copy(this.object.position),ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ml.direction))<bA?this.object.lookAt(this.target):(Z0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ml.intersectPlane(Z0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ue,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function RA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function PA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function DA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(a_),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function LA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case Js.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case Js.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(fp)}function NA(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function IA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(fp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(a_))}function UA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function OA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(fp)}function FA(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function zA(t){this.enabled!==!1&&t.preventDefault()}function kA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class HA extends n_{constructor(){super();const e=new on;e.deleteAttribute("uv");const n=new _n({side:cn}),i=new _n,r=new o_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ze(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Ze(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ze(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Ze(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ze(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Ze(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new Ze(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const p=new Ze(e,Rs(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const g=new Ze(e,Rs(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const x=new Ze(e,Rs(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const y=new Ze(e,Rs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const h=new Ze(e,Rs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const u=new Ze(e,Rs(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Rs(t){const e=new kc;return e.color.setScalar(t),e}const Vl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VA=new ip(-1,1,1,-1,0,1);class GA extends hn{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const WA=new GA;class Gc{constructor(e){this._mesh=new Ze(WA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jA extends ds{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ci.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Q0 extends ds{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class XA extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,n=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jA(Vl),this.copyPass.material.blending=Yt,this.clock=new wA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Q0!==void 0&&(o instanceof Q0?i=!0:o instanceof XA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qA extends ds{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const KA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ZA extends ds{constructor(){super();const e=KA;this.uniforms=ci.clone(e.uniforms),this.material=new fA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Gc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ax?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rx&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const gl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new rt},cameraProjectionMatrixInverse:{value:new rt},cameraWorldMatrix:{value:new rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},vl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},sd={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function QA(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=JA(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new k(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new i_(r,e,e);return s.wrapS=wi,s.wrapT=wi,s.needsUpdate=!0,s}function JA(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const xl={defines:{SAMPLES:16,SAMPLE_VECTORS:l_(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ue},cameraProjectionMatrixInverse:{value:new rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function l_(t,e,n){const i=$A(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function $A(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new k(Math.cos(s),Math.sin(s),o))}return i}class eb{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),d=(3-Math.sqrt(3))/6,f=(l+c)*d,p=l-f,g=c-f,x=e-p,y=n-g;let h,u;x>y?(h=1,u=0):(h=0,u=1);const m=x-h+d,v=y-u+d,M=x-1+2*d,C=y-1+2*d,b=l&255,A=c&255,D=this.perm[b+this.perm[A]]%12,z=this.perm[b+h+this.perm[A+u]]%12,S=this.perm[b+1+this.perm[A+1]]%12;let E=.5-x*x-y*y;E<0?i=0:(E*=E,i=E*E*this.dot(this.grad3[D],x,y));let U=.5-m*m-v*v;U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[z],m,v));let B=.5-M*M-C*C;return B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[S],M,C)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,d=Math.floor(e+c),f=Math.floor(n+c),p=Math.floor(i+c),g=1/6,x=(d+f+p)*g,y=d-x,h=f-x,u=p-x,m=e-y,v=n-h,M=i-u;let C,b,A,D,z,S;m>=v?v>=M?(C=1,b=0,A=0,D=1,z=1,S=0):m>=M?(C=1,b=0,A=0,D=1,z=0,S=1):(C=0,b=0,A=1,D=1,z=0,S=1):v<M?(C=0,b=0,A=1,D=0,z=1,S=1):m<M?(C=0,b=1,A=0,D=0,z=1,S=1):(C=0,b=1,A=0,D=1,z=1,S=0);const E=m-C+g,U=v-b+g,B=M-A+g,K=m-D+2*g,X=v-z+2*g,Y=M-S+2*g,ce=m-1+3*g,L=v-1+3*g,Z=M-1+3*g,ne=d&255,he=f&255,Me=p&255,we=this.perm[ne+this.perm[he+this.perm[Me]]]%12,ie=this.perm[ne+C+this.perm[he+b+this.perm[Me+A]]]%12,re=this.perm[ne+D+this.perm[he+z+this.perm[Me+S]]]%12,me=this.perm[ne+1+this.perm[he+1+this.perm[Me+1]]]%12;let ge=.6-m*m-v*v-M*M;ge<0?r=0:(ge*=ge,r=ge*ge*this.dot3(this.grad3[we],m,v,M));let Ne=.6-E*E-U*U-B*B;Ne<0?s=0:(Ne*=Ne,s=Ne*Ne*this.dot3(this.grad3[ie],E,U,B));let Ce=.6-K*K-X*X-Y*Y;Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this.dot3(this.grad3[re],K,X,Y));let Fe=.6-ce*ce-L*L-Z*Z;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this.dot3(this.grad3[me],ce,L,Z)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let d,f,p,g,x;const y=(e+n+i+r)*l,h=Math.floor(e+y),u=Math.floor(n+y),m=Math.floor(i+y),v=Math.floor(r+y),M=(h+u+m+v)*c,C=h-M,b=u-M,A=m-M,D=v-M,z=e-C,S=n-b,E=i-A,U=r-D,B=z>S?32:0,K=z>E?16:0,X=S>E?8:0,Y=z>U?4:0,ce=S>U?2:0,L=E>U?1:0,Z=B+K+X+Y+ce+L,ne=o[Z][0]>=3?1:0,he=o[Z][1]>=3?1:0,Me=o[Z][2]>=3?1:0,we=o[Z][3]>=3?1:0,ie=o[Z][0]>=2?1:0,re=o[Z][1]>=2?1:0,me=o[Z][2]>=2?1:0,ge=o[Z][3]>=2?1:0,Ne=o[Z][0]>=1?1:0,Ce=o[Z][1]>=1?1:0,Fe=o[Z][2]>=1?1:0,Ke=o[Z][3]>=1?1:0,ke=z-ne+c,F=S-he+c,pt=E-Me+c,O=U-we+c,V=z-ie+2*c,J=S-re+2*c,q=E-me+2*c,se=U-ge+2*c,T=z-Ne+3*c,w=S-Ce+3*c,P=E-Fe+3*c,I=U-Ke+3*c,H=z-1+4*c,N=S-1+4*c,oe=E-1+4*c,$=U-1+4*c,Q=h&255,ue=u&255,ae=m&255,pe=v&255,be=a[Q+a[ue+a[ae+a[pe]]]]%32,ze=a[Q+ne+a[ue+he+a[ae+Me+a[pe+we]]]]%32,Ae=a[Q+ie+a[ue+re+a[ae+me+a[pe+ge]]]]%32,Je=a[Q+Ne+a[ue+Ce+a[ae+Fe+a[pe+Ke]]]]%32,We=a[Q+1+a[ue+1+a[ae+1+a[pe+1]]]]%32;let tt=.6-z*z-S*S-E*E-U*U;tt<0?d=0:(tt*=tt,d=tt*tt*this.dot4(s[be],z,S,E,U));let G=.6-ke*ke-F*F-pt*pt-O*O;G<0?f=0:(G*=G,f=G*G*this.dot4(s[ze],ke,F,pt,O));let _e=.6-V*V-J*J-q*q-se*se;_e<0?p=0:(_e*=_e,p=_e*_e*this.dot4(s[Ae],V,J,q,se));let le=.6-T*T-w*w-P*P-I*I;le<0?g=0:(le*=le,g=le*le*this.dot4(s[Je],T,w,P,I));let de=.6-H*H-N*N-oe*oe-$*$;return de<0?x=0:(de*=de,x=de*de*this.dot4(s[We],H,N,oe,$)),27*(d+f+p+g+x)}}class si extends ds{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=QA(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Qn(this.width,this.height,{type:Ti}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},gl.defines),uniforms:ci.clone(gl.uniforms),vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new pA,this.normalMaterial.blending=Yt,this.pdMaterial=new It({defines:Object.assign({},xl.defines),uniforms:ci.clone(xl.uniforms),vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},vl.defines),uniforms:ci.clone(vl.uniforms),vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:ci.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ah,blendDst:Go,blendEquation:ai,blendSrcAlpha:oh,blendDstAlpha:Go,blendEquationAlpha:ai}),this.blendMaterial=new It({uniforms:ci.clone(sd.uniforms),vertexShader:sd.vertexShader,fragmentShader:sd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:wx,blendSrc:ah,blendDst:Go,blendEquation:ai,blendSrcAlpha:oh,blendDstAlpha:Go,blendEquationAlpha:ai}),this.fsQuad=new Gc(null),this.originalClearColor=new Be,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new sp,this.depthTexture.format=is,this.depthTexture.type=ns,this.normalRenderTarget=new Qn(this.width,this.height,{minFilter:Ht,magFilter:Ht,type:Ti,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=l_(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case si.OUTPUT.Off:break;case si.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case si.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case si.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case si.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case si.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case si.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new eb,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new i_(r,e,e,Yn,Ei);return s.wrapS=wi,s.wrapT=wi,s.needsUpdate=!0,s}}si.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const _l={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`},yl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`},od={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`};class tb extends ds{constructor(e,n){super(),this.edgesRT=new Qn(e,n,{depthBuffer:!1,type:Ti}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Qn(e,n,{depthBuffer:!1,type:Ti}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Ot,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=jn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Ot,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Ht,this.searchTexture.minFilter=Ht,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=ci.clone(_l.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new It({defines:Object.assign({},_l.defines),uniforms:this.uniformsEdges,vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader}),this.uniformsWeights=ci.clone(yl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new It({defines:Object.assign({},yl.defines),uniforms:this.uniformsWeights,vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader}),this.uniformsBlend=ci.clone(od.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new It({uniforms:this.uniformsBlend,vertexShader:od.vertexShader,fragmentShader:od.fragmentShader}),this.fsQuad=new Gc(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const nb="honeycutt-assets",os="img";function pp(){return new Promise((t,e)=>{const n=indexedDB.open(nb,1);n.onupgradeneeded=()=>n.result.createObjectStore(os,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function ib(){try{const t=await pp();return await new Promise(e=>{const n=t.transaction(os).objectStore(os).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function rb(t){const e=await pp();return new Promise(n=>{const i=e.transaction(os,"readwrite");i.objectStore(os).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function sb(t){const e=await pp();return new Promise(n=>{const i=e.transaction(os,"readwrite");i.objectStore(os).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function ob(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const c_=De.createContext(null);let ab=1;function lb({children:t}){const[e,n]=De.useState([]);De.useEffect(()=>{ib().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=De.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await ob(l.result),d={id:`a${Date.now().toString(36)}${ab++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await rb(d),n(f=>[d,...f]),a(d)},l.readAsDataURL(o)}),[]),r=De.useCallback(async o=>{await sb(o),n(a=>a.filter(l=>l.id!==o))},[]),s=De.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return _.jsx(c_.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function mp(){return De.useContext(c_)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function Vn(t,e){const n=new Be(t);return e>=0?n.lerp(new Be("#ffffff"),e):n.lerp(new Be("#000000"),-e),n}function Ge(t,e=.75,n=.04,i={}){return new _n({color:new Be(t),roughness:e,metalness:n,...i})}function je(t,e,n,i){const r=new Ze(new on(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function bt(t,e,n,i,r=28){const s=new Ze(new Hc(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function Re(t,e,n,i){return t.position.set(e,n,i),t}function Uo(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(Re(je(s,i,s,o),l,i/2,c))}const J0={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.85),a=Ge(Vn(s,.08),.9),l=Ge("#2b2b2e",.5,.3),c=r*.42,d=Math.min(.16,n*.12),f=r;t.add(Re(je(n,c,i,o),0,c/2+.08,0)),t.add(Re(je(n,f-.1,.16,o),0,(f-.1)/2+.08,-i/2+.08)),t.add(Re(je(d,c+.16,i,o),n/2-d/2,(c+.16)/2+.08,0)),t.add(Re(je(d,c+.16,i,o),-n/2+d/2,(c+.16)/2+.08,0));const p=n-d*2-.04,g=n>1.3?Math.round(n/.9):1,x=p/g;for(let y=0;y<g;y++){const h=-p/2+x/2+y*x;t.add(Re(je(x-.04,.16,i-.28,a),h,c+.16,.04)),t.add(Re(je(x-.06,.2,.16,a),h,c+.24,-i/2+.24))}Uo(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.7,.05),a=r*.5;t.add(Re(je(n,.06,i,o),0,a,0)),t.add(Re(je(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),Uo(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.7);t.add(Re(je(n,.1,i,o),0,r-.05,0)),Uo(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Ge(r,.6,.1);t.add(Re(bt(n/2,n/2,.08,s),0,i-.04,0)),t.add(Re(bt(.03,.04,i-.08,Ge("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(Re(bt(n*.34,n*.34,.02,Ge("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.45,.05);t.add(Re(je(n,.06,i,o),0,r-.03,0)),Uo(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Ge(r,.45,.05);t.add(Re(bt(n/2,n/2,.06,s),0,i-.03,0)),t.add(Re(bt(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(Re(bt(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.5,.06);t.add(Re(je(n,.05,i,o),0,r-.025,0)),t.add(Re(je(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(Re(je(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(Re(je(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge("#5b4a3a",.6),a=Ge(s,.9),l=Ge(Vn(s,.12),.95),c=r*.5;t.add(Re(je(n,c,i,o),0,c/2,0)),t.add(Re(je(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(Re(je(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(Re(je(n-.12,.1,i*.62,Ge(Vn(s,-.05),.9)),0,c+.2,i*.12));const d=(n-.2)/2;t.add(Re(je(d-.04,.12,.34,l),-d/2,c+.24,-i/2+.32)),t.add(Re(je(d-.04,.12,.34,l),d/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.55),a=Ge("#caa86a",.3,.7);t.add(Re(je(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(Re(bt(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(Re(bt(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),Uo(t,n-.08,i-.08,.06,.05,.04,Ge("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.55),a=Ge("#caa86a",.3,.7);t.add(Re(je(n,r,i,o),0,r/2,0)),t.add(Re(je(.012,r-.1,.01,Ge(Vn(s,-.3),.6)),0,r/2,i/2+.002)),t.add(Re(bt(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(Re(bt(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.55),a=Ge(Vn(s,.06),.6),l=Ge("#caa86a",.3,.7);t.add(Re(je(n,r,i,o),0,r/2,0));const c=r>.6?3:1,d=(r-.08)/c;for(let f=0;f<c;f++){const p=.04+d/2+f*d;t.add(Re(je(n-.06,d-.03,.02,a),0,p,i/2+.005)),t.add(Re(bt(.01,.01,.12,l),0,p,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.6),a=.04;t.add(Re(je(a,r,i,o),-n/2+a/2,r/2,0)),t.add(Re(je(a,r,i,o),n/2-a/2,r/2,0)),t.add(Re(je(n,a,i,o),0,a/2,0)),t.add(Re(je(n,a,i,o),0,r-a/2,0)),t.add(Re(je(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const d=r/(l+1)*c;t.add(Re(je(n-a*2,a*.7,i-.04,o),0,d,0));const f=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let p=-n/2+a+.04;for(;p<n/2-a-.06;){const g=.03+Math.random()*.03,x=.12+Math.random()*.08;t.add(Re(je(g,x,i*.6,Ge(f[Math.floor(Math.random()*f.length)],.8)),p+g/2,d+a*.35+x/2,0)),p+=g+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Ge("#2b2b2e",.4,.4),o=Ge(r,.4,.3),a=new _n({color:"#10141c",roughness:.2,metalness:.1,emissive:new Be("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(Re(je(n,i,.05,o),0,l+i/2,0));const c=new Ze(new ss(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(Re(bt(.03,.04,l,s),0,l/2,0)),t.add(Re(je(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Ge(r,1,0),o=je(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=je(n*.86,.022,i*.78,Ge(Vn(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=bt(n/2,n/2,.02,Ge(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=bt(n*.36,n*.36,.022,Ge(Vn(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Ge("#9a7a55",.7),o=i*.28;t.add(Re(bt(n*.36,n*.28,o,s),0,o/2,0)),t.add(Re(bt(.03,.03,i*.45,Ge("#5a4030",.8)),0,o+i*.2,0));const a=(c,d,f,p,g)=>{const x=new Ze(new lp(d,0),Ge(c,.9));x.castShadow=!0,t.add(Re(x,f,p,g))},l=o+i*.4;a(Vn(r,.05),n*.42,0,l+n*.2,0),a(Vn(r,-.1),n*.34,n*.22,l+n*.45,.04),a(Vn(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(Vn(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Ge("#3a3a3e",.4,.6);t.add(Re(bt(n*.32,n*.36,.04,s),0,.02,0)),t.add(Re(bt(.018,.018,i*.78,s),0,i*.4,0));const o=new Ze(new op(n*.42,i*.22,24,1,!0),new _n({color:new Be(r),roughness:.6,emissive:new Be(r),emissiveIntensity:.5,side:Nn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new o_(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.35,.5),a=Ge("#888",.3,.8);t.add(Re(je(n,r,i,o),0,r/2,0)),t.add(Re(je(n,.015,.005,Ge(Vn(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(Re(bt(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(Re(bt(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge("#d8d2c8",.6),a=Ge(s,.3,.2);t.add(Re(je(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(Re(je(n,.05,i,a),0,r-.025,0)),t.add(Re(je(n*.3,.02,i*.5,Ge("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.35,.4);t.add(Re(je(n,r,i,o),0,r/2,0));const a=Ge("#1a1a1d",.3,.2);t.add(Re(je(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(Re(bt(n*.11,n*.11,.01,Ge("#333",.5)),n*l,r+.02,i*c))}};function cb(t){const e=vi[t.type];if(!e)return new ui;const n=new ui,i={...e,color:t.color||e.color};return(J0[e.shape]||J0.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function Ur(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const $0={day:{bg:"#0e1014",exposure:1.05,env:1,key:["#fff4e0",2],fill:["#cdddff",.5],hemi:.55,amb:.25},dusk:{bg:"#171009",exposure:1.12,env:.5,key:["#ffb877",1.9],fill:["#8a78d0",.45],hemi:.35,amb:.16},night:{bg:"#080a0f",exposure:1.18,env:.18,key:["#9fb6ff",.5],fill:["#4a5fb0",.3],hemi:.14,amb:.08}},eg=(t,e)=>Math.round(t/e)*e,Ps=t=>Math.max(0,Math.min(255,Math.round(t))),ub={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function db(t="#b08a5e"){const e=new Be(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let d=0;d<a;d++){const f=(Math.random()-.5)*36;o.fillStyle=`rgb(${Ps(n+f)},${Ps(i+f)},${Ps(r+f)})`,o.fillRect(0,d*l,512,l);for(let p=0;p<60;p++){o.strokeStyle=`rgba(${Ps(n*.45)},${Ps(i*.4)},${Ps(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const g=d*l+Math.random()*l;o.moveTo(0,g),o.bezierCurveTo(170,g+(Math.random()-.5)*6,340,g+(Math.random()-.5)*6,512,g),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,d*l,512,2)}const c=new hA(s);return c.wrapS=c.wrapT=wi,c.colorSpace=yn,c}function hb(){const{state:t,dispatch:e}=Ki(),{rooms:n,walls:i,items:r,builtins:s,selected:o,ambiance:a}=t,{map:l}=mp(),c=De.useRef(null),d=De.useRef({}),f=De.useRef({});f.current={rooms:n,walls:i,items:r,selected:o,dispatch:e};function p(y){const h=d.current;if(!y||typeof y!="string")return null;if(y.startsWith("wood:")){const u=y.slice(5);return h.woodCache.has(u)||h.woodCache.set(u,db(ub[u]||"#c79a6b")),h.woodCache.get(u)}if(y.startsWith("img:")){const u=y.slice(4);if(!h.imgCache.has(u)){const m=l[u];if(!m)return null;const v=new xA().load(m);v.colorSpace=yn,v.wrapS=v.wrapT=wi,h.imgCache.set(u,v)}return h.imgCache.get(u)}return null}function g(y,h,u,m,v,M={}){const C=p(y);if(C){let b=C;return C.image instanceof HTMLCanvasElement&&(b=C.clone(),b.needsUpdate=!0,b.wrapS=b.wrapT=wi,b.colorSpace=yn,d.current.roomTexList.push(b)),b.repeat.set(Math.max(1,m),Math.max(1,v)),new _n({map:b,...M})}return new _n({color:new Be(h||u),...M})}De.useEffect(()=>{const y=c.current,h=y.clientWidth,u=y.clientHeight,m=new cA({antialias:!0,preserveDrawingBuffer:!0});m.setSize(h,u),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=Mx,m.toneMapping=Xf,m.toneMappingExposure=1.05,m.outputColorSpace=yn,y.appendChild(m.domElement);const v=new n_;v.background=new Be("#0e1014");const M=new jh(m);try{v.environment=M.fromScene(new HA,.04).texture}catch{}const C=new Ln(50,h/u,.1,200),b=new CA(C,m.domElement);b.enableDamping=!0,b.dampingFactor=.08,b.minDistance=1.2,b.maxDistance=60,b.maxPolarAngle=Math.PI/2-.04,b.minPolarAngle=.16,b.enablePan=!0,b.rotateSpeed=.7;const A=new _A("#dfe6f0","#2a2620",.55);v.add(A);const D=new MA("#ffffff",.25);v.add(D);const z=new W0("#fff4e0",2);z.position.set(8,14,6),z.castShadow=!0,z.shadow.mapSize.set(4096,4096),z.shadow.camera.near=1,z.shadow.camera.far=80,z.shadow.bias=-3e-4,z.shadow.normalBias=.02,z.shadow.radius=4;const S=z.shadow.camera;S.left=-20,S.right=20,S.top=20,S.bottom=-20,v.add(z);const E=new W0("#cdddff",.5);E.position.set(-9,7,-5),v.add(E);let U=null,B=null;try{U=new YA(m),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.setSize(h,u),U.addPass(new qA(v,C)),B=new si(v,C,h,u),B.output=si.OUTPUT.Default,B.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),B.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),U.addPass(B),U.addPass(new tb(h,u)),U.addPass(new ZA)}catch{U=null}const K=new Ze(new ss(160,160),new _n({color:"#0c0d11",roughness:1}));K.rotation.x=-Math.PI/2,K.position.y=-.04,K.receiveShadow=!0,v.add(K);const X=new TA(160,160,2896444,1645859);X.position.y=-.02,v.add(X);const Y=new ui,ce=new ui,L=new ui;v.add(Y,ce,L);const Z=new Ze(new cp(.46,.5,48),new kc({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:Nn}));Z.rotation.x=-Math.PI/2,Z.position.y=.03,Z.visible=!1,Z.renderOrder=2,v.add(Z);const ne=new ui,he=new Ze(new dp(.5,.035,12,48),new _n({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));he.rotation.x=-Math.PI/2,he.userData.gizmo=!0,ne.add(he);for(let O=0;O<4;O++){const V=O/4*Math.PI*2,J=new Ze(new up(.07,16,16),new _n({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));J.position.set(Math.cos(V)*.5,0,Math.sin(V)*.5),J.userData.gizmo=!0,ne.add(J)}ne.visible=!1,ne.renderOrder=3,v.add(ne),Object.assign(d.current,{renderer:m,scene:v,camera:C,controls:b,roomGroup:Y,furnitureGroup:ce,key:z,fill:E,ambient:D,hemi:A,pmrem:M,ring:Z,gizmo:ne,builtinGroup:L,composer:U,gtao:B,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new EA,drag:null,rotate:null,pending:null});const Me=new zi(new k(0,1,0),0),we=m.domElement,ie=new Ue,re=O=>{const V=we.getBoundingClientRect();ie.set((O.clientX-V.left)/V.width*2-1,-((O.clientY-V.top)/V.height)*2+1)},me=()=>{const O=new k;return d.current.raycaster.setFromCamera(ie,C),d.current.raycaster.ray.intersectPlane(Me,O)?O:null},ge=O=>{for(;O&&O.userData.uid===void 0;)O=O.parent;return O},Ne=O=>{for(;O;){if(O.userData.gizmo)return!0;O=O.parent}return!1},Ce=O=>{var P,I;re(O);const V=d.current.raycaster;V.setFromCamera(ie,C);const{items:J,selected:q,dispatch:se}=f.current;if(d.current.gizmo.visible){const H=V.intersectObject(d.current.gizmo,!0);if(H.length&&Ne(H[0].object)){const N=J.find($=>$.uid===(q==null?void 0:q.uid)),oe=me();if(N&&oe){b.enabled=!1,d.current.rotate={uid:N.uid,cx:N.x,cz:N.z,startAng:Math.atan2(oe.z-N.z,oe.x-N.x),startRot:N.rot||0},(P=we.setPointerCapture)==null||P.call(we,O.pointerId);return}}}const T=V.intersectObjects(d.current.furnitureGroup.children,!0);let w=null;for(const H of T){const N=ge(H.object);if(N){w=N;break}}if(w){b.enabled=!1,J.find(N=>N.uid===w.userData.uid),se({type:"select",sel:{type:"item",uid:w.userData.uid}}),vx(8);const H=me();d.current.drag={uid:w.userData.uid,grp:w,offX:H?H.x-w.position.x:0,offZ:H?H.z-w.position.z:0},(I=we.setPointerCapture)==null||I.call(we,O.pointerId)}else d.current.pending={x:O.clientX,y:O.clientY}},Fe=O=>{re(O);const V=d.current;if(V.rotate){const J=me();if(!J)return;const q=Math.atan2(J.z-V.rotate.cz,J.x-V.rotate.cx);let se=V.rotate.startRot+(q-V.rotate.startAng)*180/Math.PI;se=(Math.round(se)%360+360)%360,f.current.dispatch({type:"update",sel:{type:"item",uid:V.rotate.uid},patch:{rot:se},mergeKey:`rot3d:${V.rotate.uid}`});return}if(V.drag){const J=me();if(!J)return;f.current.dispatch({type:"update",sel:{type:"item",uid:V.drag.uid},patch:{x:eg(J.x-V.drag.offX,.05),z:eg(J.z-V.drag.offZ,.05)},mergeKey:`mv3d:${V.drag.uid}`})}},Ke=O=>{var J;const V=d.current;V.drag||V.rotate?(V.drag=null,V.rotate=null,b.enabled=!0):V.pending&&(Math.hypot(O.clientX-V.pending.x,O.clientY-V.pending.y)<5&&f.current.dispatch({type:"select",sel:null}),V.pending=null);try{(J=we.releasePointerCapture)==null||J.call(we,O.pointerId)}catch{}};we.addEventListener("pointerdown",Ce,!0),we.addEventListener("pointermove",Fe),window.addEventListener("pointerup",Ke);let ke;const F=()=>{b.update();const O=C.position;for(const V of d.current.walls){const J=(O.x-V.center.x)*V.normal.x+(O.z-V.center.z)*V.normal.z;!V.hidden&&J>.1?V.hidden=!0:V.hidden&&J<-.1&&(V.hidden=!1),V.mesh.visible=!V.hidden}U?U.render():m.render(v,C),ke=requestAnimationFrame(F)};F();const pt=new ResizeObserver(()=>{const O=y.clientWidth,V=y.clientHeight;m.setSize(O,V),C.aspect=O/V,C.updateProjectionMatrix(),U==null||U.setSize(O,V)});return pt.observe(y),()=>{var O;cancelAnimationFrame(ke),pt.disconnect(),we.removeEventListener("pointerdown",Ce,!0),we.removeEventListener("pointermove",Fe),window.removeEventListener("pointerup",Ke),b.dispose(),Ur(Y),Ur(ce),Ur(L),Z.geometry.dispose(),Z.material.dispose(),d.current.woodCache.forEach(V=>V.dispose()),d.current.imgCache.forEach(V=>V.dispose()),d.current.roomTexList.forEach(V=>V.dispose()),(O=U==null?void 0:U.dispose)==null||O.call(U),M.dispose(),m.dispose(),m.domElement.parentNode===y&&y.removeChild(m.domElement)}},[]),De.useEffect(()=>{const y=d.current;if(!y.renderer)return;const h=$0[a]||$0.day;y.scene.background.set(h.bg),y.scene.environmentIntensity=h.env,y.renderer.toneMappingExposure=h.exposure,y.key.color.set(h.key[0]),y.key.intensity=h.key[1],y.fill.color.set(h.fill[0]),y.fill.intensity=h.fill[1],y.hemi.intensity=h.hemi,y.ambient.intensity=h.amb},[a]),De.useEffect(()=>{const y=d.current;if(!y.roomGroup)return;Ur(y.roomGroup),y.roomGroup.clear(),y.walls=[],y.roomTexList.forEach(M=>M.dispose()),y.roomTexList=[];const h=new _n({color:"#cfc7ba",roughness:.8}),u=new _n({color:"#e8e3da",roughness:.95,side:Nn}),m=.1,v=(M,C,b,A,D,z,S,E,U,B)=>{const K=new Ze(new on(C,b,A),M);K.position.set(D,z,S),K.castShadow=!0,K.receiveShadow=!0,y.roomGroup.add(K),y.walls.push({mesh:K,normal:new k(E,0,U),center:new k(D,0,S),hidden:!1})};for(const M of n){const{x:C,z:b,w:A,d:D,height:z}=M,S=C+A/2,E=b+D/2,U=M.floorTex||(M.floorColor?void 0:"wood:oak"),B=g(U,M.floorColor,"#b08a5e",A/1.5,D/1.5,{roughness:.65,metalness:.02}),K=new Ze(new ss(A,D),B);K.rotation.x=-Math.PI/2,K.position.set(S,0,E),K.receiveShadow=!0,y.roomGroup.add(K);const X=g(M.wallTex,M.wallColor,"#e8e3da",A/1.2,z/1.2,{roughness:.95,side:Nn}),Y=L=>!M.wallsOn||M.wallsOn[L]!==!1,ce=(L,Z,ne)=>{const he=new Ze(L,h);he.position.set(Z,.045,ne),y.roomGroup.add(he)};Y("n")&&(v(X,A+m,z,m,S,z/2,b,0,-1),ce(new on(A-m,.09,.04),S,b+m/2+.02)),Y("s")&&(v(X,A+m,z,m,S,z/2,b+D,0,1),ce(new on(A-m,.09,.04),S,b+D-m/2-.02)),Y("w")&&(v(X,m,z,D+m,C,z/2,E,-1,0),ce(new on(.04,.09,D-m),C+m/2+.02,E)),Y("e")&&(v(X,m,z,D+m,C+A,z/2,E,1,0),ce(new on(.04,.09,D-m),C+A-m/2-.02,E))}for(const M of i){const C=Math.hypot(M.x2-M.x1,M.z2-M.z1);if(C<.001)continue;const b=new Ze(new on(C,M.height,M.thickness),u);b.position.set((M.x1+M.x2)/2,M.height/2,(M.z1+M.z2)/2),b.rotation.y=-Math.atan2(M.z2-M.z1,M.x2-M.x1),b.castShadow=!0,b.receiveShadow=!0,y.roomGroup.add(b)}!y.framed&&(n.length||i.length||r.length)&&(x(),y.framed=!0)},[n,i,l]),De.useEffect(()=>{const y=d.current;if(!y.furnitureGroup)return;const h=y.itemMap,u=new Set;for(const v of r){u.add(v.uid);let M=h.get(v.uid);if(!M||M.type!==v.type||M.color!==v.color){M&&(y.furnitureGroup.remove(M.group),Ur(M.group));const b=cb(v);y.furnitureGroup.add(b),M={group:b,type:v.type,color:v.color},h.set(v.uid,M)}M.group.position.set(v.x,0,v.z),M.group.rotation.y=-((v.rot||0)*Math.PI)/180;const C=v.scale||{};M.group.scale.set(C.x??1,C.y??1,C.z??1)}for(const[v,M]of h)u.has(v)||(y.furnitureGroup.remove(M.group),Ur(M.group),h.delete(v));const m=(o==null?void 0:o.type)==="item"?r.find(v=>v.uid===o.uid):null;if(m){const v=vi[m.type],M=Br(v,m),C=Math.max(M.w,M.d)/2*1.18+.12;y.ring.scale.setScalar(C/.5),y.ring.position.set(m.x,.03,m.z),y.ring.visible=!0,y.gizmo.scale.setScalar(C/.5),y.gizmo.position.set(m.x,.04,m.z),y.gizmo.visible=!0}else y.ring.visible=!1,y.gizmo.visible=!1},[r,o]),De.useEffect(()=>{const y=d.current;if(!y.builtinGroup)return;Ur(y.builtinGroup),y.builtinGroup.clear();const h=.03;for(const u of s){const m=Wf(u.wall,n,i);if(!m)continue;const v=p(u.tex),M=v?new _n({map:v,roughness:.6,metalness:.04}):new _n({color:new Be(u.color||"#c7ad84"),roughness:.62,metalness:.04});if(u.kind==="board"){const U=(u.u1+u.u2)/2,B=(u.v1+u.v2)/2,K=u.u2-u.u1,X=u.v2-u.v1,Y=Math.hypot(K,X)||1e-6,ce=K/Y,L=X/Y,Z=new k(m.dirx*ce,L,m.dirz*ce),ne=new k(-m.dirx*L,ce,-m.dirz*L),he=new k(m.nx,0,m.nz),Me=new rt().makeBasis(Z,ne,he);Me.setPosition(m.ox+m.dirx*U+m.nx*(u.depth/2),B,m.oz+m.dirz*U+m.nz*(u.depth/2));const we=new Ze(new on(Y,u.thickness||.05,u.depth||.04),M);we.castShadow=!0,we.receiveShadow=!0,we.matrixAutoUpdate=!1,we.matrix.copy(Me),y.builtinGroup.add(we);continue}const C=new rt,b=new k(m.dirx,0,m.dirz),A=new k(0,1,0),D=new k(m.nx,0,m.nz);C.makeBasis(b,A,D);const z=u.u+u.w/2;C.setPosition(m.ox+m.dirx*z+m.nx*(u.depth/2),u.v+u.h/2,m.oz+m.dirz*z+m.nz*(u.depth/2));const S=new ui;S.matrixAutoUpdate=!1,S.matrix.copy(C);const E=(U,B,K,X,Y,ce)=>{const L=new Ze(new on(U,B,K),M);L.position.set(X,Y,ce),L.castShadow=!0,L.receiveShadow=!0,S.add(L)};u.kind==="cubby"?(E(u.w,u.h,h,0,0,-u.depth/2+h/2),E(u.w,h,u.depth,0,u.h/2-h/2,0),E(u.w,h,u.depth,0,-u.h/2+h/2,0),E(h,u.h,u.depth,-u.w/2+h/2,0,0),E(h,u.h,u.depth,u.w/2-h/2,0,0)):E(u.w,u.h,u.depth,0,0,0),y.builtinGroup.add(S)}},[s,n,i,l]);function x(){const y=d.current;if(!y.camera)return;const{rooms:h,walls:u,items:m}=f.current;let v=1/0,M=-1/0,C=1/0,b=-1/0,A=2.7;const D=(B,K)=>{v=Math.min(v,B),M=Math.max(M,B),C=Math.min(C,K),b=Math.max(b,K)};for(const B of h)D(B.x,B.z),D(B.x+B.w,B.z+B.d),A=Math.max(A,B.height);for(const B of u)D(B.x1,B.z1),D(B.x2,B.z2),A=Math.max(A,B.height);for(const B of m)D(B.x,B.z);isFinite(v)||(v=-2,M=2,C=-2,b=2);const z=(v+M)/2,S=(C+b)/2,E=Math.max(M-v,b-C,2),U=E*1.1+4;y.camera.position.set(z+E*.45,E*.8+3,S+U),y.controls.target.set(z,A*.3,S),y.controls.update()}return _.jsx("div",{className:"scene3d",ref:c,children:_.jsx("button",{className:"recenter",onClick:x,"aria-label":"Recenter view",children:_.jsx(Gf,{size:20})})})}function mi({icon:t,label:e,active:n,accent:i,onClick:r}){return _.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,_.jsx("span",{children:e})]})}function fb({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=Ki(),{view:r,tool:s,sideTool:o,ambiance:a}=n;return _.jsxs("aside",{className:"rail",children:[_.jsxs("div",{className:"rail-group",children:[r==="2d"&&_.jsxs(_.Fragment,{children:[_.jsx(mi,{icon:_.jsx(Im,{size:20}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),_.jsx(mi,{icon:_.jsx(Um,{size:20}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),_.jsx(mi,{icon:_.jsx(Om,{size:20}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})})]}),r==="side"&&_.jsxs(_.Fragment,{children:[_.jsx(mi,{icon:_.jsx(Im,{size:20}),label:"Select",active:o==="select",onClick:()=>i({type:"sideTool",tool:"select"})}),_.jsx(mi,{icon:_.jsx(Um,{size:20}),label:"Box",active:o==="box",onClick:()=>i({type:"sideTool",tool:"box"})}),_.jsx(mi,{icon:_.jsx(Om,{size:20}),label:"Board",active:o==="board",onClick:()=>i({type:"sideTool",tool:"board"})}),_.jsx(mi,{icon:_.jsx(iM,{size:20}),label:"Presets",active:e==="presets",onClick:()=>t("presets")})]}),r==="3d"&&_.jsx(_.Fragment,{children:["day","dusk","night"].map(l=>_.jsx(mi,{icon:_.jsx(aM,{size:20}),label:l[0].toUpperCase()+l.slice(1),active:a===l,onClick:()=>i({type:"ambiance",value:l})},l))})]}),_.jsxs("div",{className:"rail-group bottom",children:[_.jsx(mi,{icon:_.jsx(eM,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),_.jsx(mi,{icon:_.jsx(nM,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}function pb({item:t}){const e={w:86,h:60},n=t.w/t.d;let i=e.w,r=i/n;return r>e.h&&(r=e.h,i=r*n),_.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:_.jsx(xx,{item:t,wpx:i,dpx:r})})}function mb({onPick:t}){const{state:e}=Ki(),{units:n}=e,[i,r]=De.useState("All"),s=["All",...VS],o=De.useMemo(()=>i==="All"?Nl:Nl.filter(a=>a.category===i),[i]);return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"sheet-head",children:_.jsxs("div",{children:[_.jsx("h2",{children:"Furniture"}),_.jsxs("div",{className:"sub",children:[Nl.length," premium pieces · tap to place"]})]})}),_.jsx("div",{className:"cats",children:s.map(a=>_.jsx("button",{className:`chip ${i===a?"active":""}`,onClick:()=>r(a),children:a},a))}),_.jsx("div",{className:"grid",children:o.map(a=>_.jsxs("button",{className:"card",onClick:()=>t(a.type),children:[_.jsx("div",{className:"thumb",children:_.jsx(pb,{item:a})}),_.jsx("div",{className:"name",children:a.name}),_.jsxs("div",{className:"dim",children:[Ye(a.w,n)," × ",Ye(a.d,n)]})]},a.type))})]})}const gb=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function Oo({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=mp(),s=De.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var p;const d=(p=c.target.files)==null?void 0:p[0];if(c.target.value="",!d)return;const f=await r(d);e({color:"#ffffff",tex:`img:${f.id}`})};return _.jsxs("div",{className:"finish",children:[_.jsxs("div",{className:"finish-row",children:[GS.map(c=>_.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),_.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:_.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"finish-label",children:"Wood"}),_.jsx("div",{className:"finish-row",children:gb.map(c=>_.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),_.jsx("div",{className:"finish-label",children:"Your images"}),_.jsxs("div",{className:"finish-row",children:[i.map(c=>_.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),_.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),_.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Ii({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return _.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:t}),_.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),_.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function ad({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=f=>Math.max(n,Math.min(i,f)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,d=(f,p)=>s(o((f*12+p)*.0254));return _.jsxs("div",{className:"row measure-row",children:[_.jsxs("div",{className:"measure-head",children:[_.jsx("div",{className:"label",children:t}),_.jsx("div",{className:"measure-inputs",children:r==="ft"?_.jsxs(_.Fragment,{children:[_.jsx("input",{type:"number",value:l,min:0,step:1,onChange:f=>d(Math.max(0,Math.floor(Number(f.target.value)||0)),c)}),_.jsx("span",{className:"u",children:"ft"}),_.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:f=>d(l,Number(f.target.value)||0)}),_.jsx("span",{className:"u",children:"in"})]}):_.jsxs(_.Fragment,{children:[_.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:f=>s(o(Number(f.target.value)||n))}),_.jsx("span",{className:"u",children:"m"})]})})]}),_.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:f=>s(Number(f.target.value))})]})}function vb({onClose:t,onFlash:e}){const{state:n,dispatch:i}=Ki(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c}=n;if(!r)return null;const d=r,f=(h,u)=>i({type:"update",sel:d,patch:h,mergeKey:u}),p=()=>{i({type:"remove",sel:d}),e==null||e("Removed"),t()},g=()=>{i({type:"duplicate",sel:d}),e==null||e("Duplicated"),t()};if(d.type==="roomwall"){const h=a.find(M=>M.uid===d.uid);if(!h)return null;const u={n:"North",e:"East",s:"South",w:"West"},m=!h.wallsOn||h.wallsOn[d.side]!==!1,v=()=>i({type:"update",sel:{type:"room",uid:h.uid},patch:{wallsOn:{...h.wallsOn||{},[d.side]:!m}}});return _.jsxs(_.Fragment,{children:[_.jsx(Ds,{title:"Wall section",sub:`${u[d.side]} wall of this room`}),_.jsxs("div",{className:"insp",children:[_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Status"}),_.jsx("div",{className:"val",children:m?"Closed":"Open (doorway)"})]}),_.jsx("div",{className:"btn-row",children:m?_.jsxs("button",{className:"btn danger",onClick:v,children:[_.jsx(ps,{size:18})," Remove wall"]}):_.jsx("button",{className:"btn accent",onClick:v,children:"Add wall back"})})]})]})}if(d.type==="item"){const h=o.find(C=>C.uid===d.uid),u=h&&vi[h.type];if(!h||!u)return null;const m=Br(u,h),v=h.scale||{},M=Math.round(((v.x??1)+(v.z??1))/2*100);return _.jsxs(_.Fragment,{children:[_.jsx(Ds,{title:u.name,sub:`${Ye(m.w,s)} × ${Ye(m.d,s)} × ${Ye(m.h,s)}`,onClose:t}),_.jsxs("div",{className:"insp",children:[_.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[_.jsx("div",{className:"label",children:"Colour"}),_.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:_.jsx(Oo,{value:{color:h.color||u.color},allowTexture:!1,onChange:C=>f({color:C.color})})})]}),_.jsx(Ii,{label:"Size",value:M,min:30,max:300,step:1,onChange:C=>f({scale:{x:C/100,y:C/100,z:C/100}},`sz:${h.uid}`),display:`${M}%`}),_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Footprint"}),_.jsxs("div",{className:"val",children:[Ye(m.w,s)," × ",Ye(m.d,s)]})]}),_.jsx(Ii,{label:"Rotation",value:h.rot||0,min:0,max:359,step:1,onChange:C=>f({rot:C},`rot:${h.uid}`),display:`${Math.round(h.rot||0)}°`}),_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Quick turn"}),_.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(C=>_.jsxs("button",{className:"chip",style:(h.rot||0)===C?ld:void 0,onClick:()=>f({rot:C}),children:[C,"°"]},C))})]}),_.jsxs("div",{className:"btn-row",children:[_.jsxs("button",{className:"btn",onClick:()=>f({rot:((h.rot||0)+90)%360}),children:[_.jsx(tM,{size:18})," Rotate"]}),_.jsxs("button",{className:"btn",onClick:g,children:[_.jsx(Ao,{size:18})," Duplicate"]})]}),_.jsxs("div",{className:"btn-row",children:[_.jsx("button",{className:"btn",onClick:()=>f({scale:{x:1,y:1,z:1}}),children:"Reset size"}),_.jsxs("button",{className:"btn danger",onClick:p,children:[_.jsx(ps,{size:18})," Delete"]})]})]})]})}if(d.type==="room"){const h=a.find(m=>m.uid===d.uid);if(!h)return null;const u=h.w*h.d;return _.jsxs(_.Fragment,{children:[_.jsx(Ds,{title:"Room",sub:`${Ye(h.w,s)} × ${Ye(h.d,s)}`,onClose:t}),_.jsxs("div",{className:"insp",children:[_.jsx(ad,{label:"Width",m:h.w,min:.5,max:40,units:s,onChange:m=>f({w:m},`rw:${h.uid}`)}),_.jsx(ad,{label:"Depth",m:h.d,min:.5,max:40,units:s,onChange:m=>f({d:m},`rd:${h.uid}`)}),_.jsx(ad,{label:"Wall height",m:h.height,min:1.5,max:6,units:s,onChange:m=>f({height:m},`rh:${h.uid}`)}),_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Floor area"}),_.jsx("div",{className:"val",children:s==="m"?`${u.toFixed(1)} m²`:`${Math.round(u*10.7639)} ft²`})]}),_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Wall sides"}),_.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([m,v])=>{const M=!h.wallsOn||h.wallsOn[m]!==!1;return _.jsx("button",{className:"chip",style:M?ld:void 0,onClick:()=>f({wallsOn:{...h.wallsOn||{},[m]:!M}}),children:v},m)})})]}),_.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[_.jsx("div",{className:"label",children:"Flooring"}),_.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:_.jsx(Oo,{value:{color:h.floorColor,tex:h.floorTex},onChange:m=>f({floorColor:m.color,floorTex:m.tex})})})]}),_.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[_.jsx("div",{className:"label",children:"Wall finish"}),_.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:_.jsx(Oo,{value:{color:h.wallColor,tex:h.wallTex},onChange:m=>f({wallColor:m.color,wallTex:m.tex})})})]}),_.jsxs("div",{className:"btn-row",children:[_.jsxs("button",{className:"btn",onClick:g,children:[_.jsx(Ao,{size:18})," Duplicate"]}),_.jsxs("button",{className:"btn danger",onClick:p,children:[_.jsx(ps,{size:18})," Delete"]})]})]})]})}if(d.type==="builtin"){const h=c.find(u=>u.uid===d.uid);if(!h)return null;if(h.kind==="board"){const u=Math.hypot(h.u2-h.u1,h.v2-h.v1);return _.jsxs(_.Fragment,{children:[_.jsx(Ds,{title:"Board",sub:`${Ye(u,s)} long`,onClose:t}),_.jsxs("div",{className:"insp",children:[_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Length"}),_.jsx("div",{className:"val",children:Ye(u,s)})]}),_.jsx(Ii,{label:"Width",value:h.thickness,min:.01,max:.4,step:.005,onChange:m=>f({thickness:m},`bt:${h.uid}`),display:Ye(h.thickness,s)}),_.jsx(Ii,{label:"Depth",value:h.depth,min:.02,max:.6,step:.01,onChange:m=>f({depth:m},`bd:${h.uid}`),display:Ye(h.depth,s)}),_.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[_.jsx("div",{className:"label",children:"Finish"}),_.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:_.jsx(Oo,{value:{color:h.color,tex:h.tex},onChange:m=>f({color:m.color,tex:m.tex})})})]}),_.jsxs("div",{className:"btn-row",children:[_.jsxs("button",{className:"btn",onClick:g,children:[_.jsx(Ao,{size:18})," Duplicate"]}),_.jsxs("button",{className:"btn danger",onClick:p,children:[_.jsx(ps,{size:18})," Delete"]})]})]})]})}return _.jsxs(_.Fragment,{children:[_.jsx(Ds,{title:"Built-in",sub:`${Ye(h.w,s)} × ${Ye(h.h,s)} × ${Ye(h.depth,s)} deep`,onClose:t}),_.jsxs("div",{className:"insp",children:[_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Style"}),_.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([u,m])=>_.jsx("button",{className:"chip",style:h.kind===u?ld:void 0,onClick:()=>f({kind:u}),children:m},u))})]}),_.jsx(Ii,{label:"Width",value:h.w,min:.1,max:12,step:.05,onChange:u=>f({w:u},`bw:${h.uid}`),display:Ye(h.w,s)}),_.jsx(Ii,{label:"Height",value:h.h,min:.1,max:6,step:.05,onChange:u=>f({h:u},`bh:${h.uid}`),display:Ye(h.h,s)}),_.jsx(Ii,{label:"Depth",value:h.depth,min:.05,max:3,step:.05,onChange:u=>f({depth:u},`bd:${h.uid}`),display:Ye(h.depth,s)}),_.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[_.jsx("div",{className:"label",children:"Finish"}),_.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:_.jsx(Oo,{value:{color:h.color,tex:h.tex},onChange:u=>f({color:u.color,tex:u.tex})})})]}),_.jsxs("div",{className:"btn-row",children:[_.jsxs("button",{className:"btn",onClick:g,children:[_.jsx(Ao,{size:18})," Duplicate"]}),_.jsxs("button",{className:"btn danger",onClick:p,children:[_.jsx(ps,{size:18})," Delete"]})]})]})]})}const x=l.find(h=>h.uid===d.uid);if(!x)return null;const y=Math.hypot(x.x2-x.x1,x.z2-x.z1);return _.jsxs(_.Fragment,{children:[_.jsx(Ds,{title:"Wall",sub:`${Ye(y,s)} long`,onClose:t}),_.jsxs("div",{className:"insp",children:[_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Length"}),_.jsx("div",{className:"val",children:Ye(y,s)})]}),_.jsx(Ii,{label:"Height",value:x.height,min:1.5,max:6,step:.1,onChange:h=>f({height:h},`wh:${x.uid}`),display:Ye(x.height,s)}),_.jsx(Ii,{label:"Thickness",value:x.thickness,min:.05,max:.4,step:.01,onChange:h=>f({thickness:h},`wt:${x.uid}`),display:Ye(x.thickness,s)}),_.jsxs("div",{className:"btn-row",children:[_.jsxs("button",{className:"btn",onClick:g,children:[_.jsx(Ao,{size:18})," Duplicate"]}),_.jsxs("button",{className:"btn danger",onClick:p,children:[_.jsx(ps,{size:18})," Delete"]})]})]})]})}const ld={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function Ds({title:t,sub:e}){return _.jsx("div",{className:"sheet-head",children:_.jsxs("div",{children:[_.jsx("h2",{children:t}),_.jsx("div",{className:"sub",children:e})]})})}function xb({onFlash:t,onClose:e}){const{state:n,dispatch:i}=Ki(),{units:r,defaultHeight:s,rooms:o,walls:a,items:l}=n,{assets:c,addAsset:d,removeAsset:f}=mp(),p=De.useRef(null),g=async x=>{const y=[...x.target.files||[]];x.target.value="";for(const h of y)await d(h);y.length&&(t==null||t("Image added"))};return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"sheet-head",children:_.jsxs("div",{children:[_.jsx("h2",{children:"Settings"}),_.jsxs("div",{className:"sub",children:[o.length," rooms · ",a.length," walls · ",l.length," items"]})]})}),_.jsxs("div",{className:"insp",children:[_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"Units"}),_.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([x,y])=>_.jsx("button",{className:"chip",style:r===x?_b:void 0,onClick:()=>i({type:"units",value:x}),children:y},x))})]}),_.jsxs("div",{className:"row",children:[_.jsx("div",{className:"label",children:"New wall height"}),_.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:s,onChange:x=>i({type:"defaultHeight",value:Number(x.target.value)})}),_.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:Ye(s,r)})]}),_.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:_.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),_.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[_.jsx("div",{className:"label",children:"My images"}),_.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[c.map(x=>_.jsxs("div",{className:"asset-tile",children:[_.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${x.dataUrl})`}}),_.jsx("button",{className:"asset-del",onClick:()=>f(x.id),"aria-label":"Delete image",children:"×"})]},x.id)),_.jsx("button",{className:"swatch upload",onClick:()=>{var x;return(x=p.current)==null?void 0:x.click()},"aria-label":"Upload image",children:"+"}),_.jsx("input",{ref:p,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:g})]})]}),_.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:_.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),_.jsxs("div",{className:"btn-row",children:[_.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),_.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const _b={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function yb({onClose:t,onFlash:e}){var f,p,g;const{state:n,dispatch:i}=Ki(),{rooms:r,walls:s,sideWall:o}=n,a=yx(r,s),l=o&&((f=a.find(x=>ea(x.ref,o)))==null?void 0:f.ref)||((p=a[0])==null?void 0:p.ref),c=l?Wf(l,r,s):null,d=l?(g=a.find(x=>ea(x.ref,l)))==null?void 0:g.label:null;return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"sheet-head",children:_.jsxs("div",{children:[_.jsx("h2",{children:"Presets"}),_.jsx("div",{className:"sub",children:c?`Drop a kit onto ${d}`:"Draw a room or wall first"})]})}),_.jsxs("div",{className:"insp",children:[!c&&_.jsx("div",{className:"panel-empty",children:"Go to the Plan view and draw a room or wall, then come back to drop in cabinetry, a bunk bed and more."}),c&&_.jsx("div",{className:"preset-list",children:gM.map(x=>_.jsx("button",{className:"preset-card",onClick:()=>{i({type:"addBuiltins",list:vM(x.id,c,l)}),e==null||e(`Added ${x.name}`),t()},children:x.name},x.id))})]})]})}function Sb({kind:t,onClose:e,onFlash:n,onPick:i}){return _.jsxs("aside",{className:"panel",children:[_.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:_.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:_.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),_.jsxs("div",{className:"panel-body",children:[t==="catalog"&&_.jsx(mb,{onPick:i}),t==="settings"&&_.jsx(xb,{onFlash:n,onClose:e}),t==="inspector"&&_.jsx(vb,{onClose:e,onFlash:n}),t==="presets"&&_.jsx(yb,{onClose:e,onFlash:n})]})]})}function Mb(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=Ki(),{view:r,selected:s,rooms:o}=t,[a,l]=De.useState(null),[c,d]=De.useState(null),f=De.useCallback(v=>d({msg:v,t:Date.now()}),[]);De.useEffect(()=>{if(!c)return;const v=setTimeout(()=>d(null),1600);return()=>clearTimeout(v)},[c]);const p=a||(s?"inspector":null),g=v=>e({type:"view",view:v}),x=v=>l(M=>M===v?null:v),y=()=>{l(null),e({type:"select",sel:null})},h=()=>{e({type:"reset"}),l(null),f("New design — undo to restore")},u=v=>{let M=0,C=0;const b=(s==null?void 0:s.type)==="room"&&o.find(A=>A.uid===s.uid);if(b)M=b.x+b.w/2,C=b.z+b.d/2;else if(o.length){const A=o[o.length-1];M=A.x+A.w/2,C=A.z+A.d/2}e({type:"addItem",kind:v,x:M,z:C}),vx(10),f("Added — drag to position")},m=async()=>{try{let v;if(r==="3d"){const M=document.querySelector(".scene3d canvas");if(!M)return;v=M.toDataURL("image/png")}else{const M=document.querySelector(".editor2d svg");if(!M)return;v=await wb(M)}await Eb(v,`honeycutt-room-${Date.now()}.png`),f("Image saved")}catch{f("Could not export")}};return _.jsxs("div",{className:"app",children:[_.jsxs("header",{className:"topbar",children:[_.jsxs("div",{className:"brand",children:[_.jsx("div",{className:"logo",children:_.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M3 11 12 4l9 7"}),_.jsx("path",{d:"M5 10v9h14v-9"})]})}),_.jsxs("div",{className:"title",children:[_.jsx("b",{children:"Honeycutt"}),_.jsx("span",{children:"Room Studio"})]})]}),_.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[_.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>g("2d"),"aria-pressed":r==="2d",children:[_.jsx(JS,{size:15})," Plan"]}),_.jsxs("button",{className:r==="side"?"active":"",onClick:()=>g("side"),"aria-pressed":r==="side",children:[_.jsx(lM,{size:15})," Side"]}),_.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>g("3d"),"aria-pressed":r==="3d",children:[_.jsx($S,{size:15})," 3D"]})]}),_.jsxs("div",{className:"tools",children:[_.jsx("button",{className:"tool",onClick:h,"aria-label":"New design",children:_.jsx(cM,{size:18})}),_.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:_.jsx(rM,{size:18})}),_.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:_.jsx(sM,{size:18})}),_.jsx("button",{className:"tool",onClick:m,"aria-label":"Export image",children:_.jsx(oM,{size:18})})]})]}),_.jsxs("div",{className:"body",children:[_.jsx(fb,{onOpen:x,activePanel:p}),_.jsx("main",{className:"stage",children:r==="2d"?_.jsx(hM,{}):r==="side"?_.jsx(xM,{}):_.jsx(hb,{})}),p&&_.jsx("div",{className:"panel-scrim",onClick:y}),p&&_.jsx(Sb,{kind:p,onClose:y,onFlash:f,onPick:u})]}),c&&_.jsx("div",{className:"toast",children:c.msg},c.t)]})}function wb(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const d=document.createElement("canvas");d.width=r*o,d.height=s*o;const f=d.getContext("2d");f.fillStyle="#ffffff",f.fillRect(0,0,d.width,d.height),f.drawImage(c,0,0,d.width,d.height),e(d.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function Eb(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}cd.createRoot(document.getElementById("root")).render(_.jsx(P_.StrictMode,{children:_.jsx(lb,{children:_.jsx(ZS,{children:_.jsx(Mb,{})})})}));
