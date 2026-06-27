(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L0={exports:{}},cc={},D0={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),sp=Symbol.iterator;function tx(t){return t===null||typeof t!="object"?null:(t=sp&&t[sp]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,U0={};function co(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||N0}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k0(){}k0.prototype=co.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||N0}var Uh=Ih.prototype=new k0;Uh.constructor=Ih;I0(Uh,co.prototype);Uh.isPureReactComponent=!0;var op=Array.isArray,F0=Object.prototype.hasOwnProperty,kh={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,i)&&!O0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:kh.current}}function nx(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function ix(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ix(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case jv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Fc(o,0):i,op(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Fh(r)&&(r=nx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",op(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Fc(s,a);o+=hl(s,e,n,l,r)}else if(l=tx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Fc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},fl={transition:null},sx={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:fl,ReactCurrentOwner:kh};function B0(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!Fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=co;Qe.Fragment=Xv;Qe.Profiler=$v;Qe.PureComponent=Ih;Qe.StrictMode=Yv;Qe.Suspense=Qv;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;Qe.act=B0;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=I0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F0.call(e,l)&&!O0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:Kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qv,_context:t},t.Consumer=t};Qe.createElement=z0;Qe.createFactory=function(t){var e=z0.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:Zv,render:t}};Qe.isValidElement=Fh;Qe.lazy=function(t){return{$$typeof:ex,_payload:{_status:-1,_result:t},_init:rx}};Qe.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};Qe.unstable_act=B0;Qe.useCallback=function(t,e){return an.current.useCallback(t,e)};Qe.useContext=function(t){return an.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return an.current.useEffect(t,e)};Qe.useId=function(){return an.current.useId()};Qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return an.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Qe.useRef=function(t){return an.current.useRef(t)};Qe.useState=function(t){return an.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return an.current.useTransition()};Qe.version="18.3.1";D0.exports=Qe;var Le=D0.exports;const ox=Wv(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=Le,lx=Symbol.for("react.element"),cx=Symbol.for("react.fragment"),ux=Object.prototype.hasOwnProperty,dx=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hx={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ux.call(e,i)&&!hx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lx,type:t,key:s,ref:o,props:r,_owner:dx.current}}cc.Fragment=cx;cc.jsx=H0;cc.jsxs=H0;L0.exports=cc;var y=L0.exports,Zu={},V0={exports:{}},Un={},G0={exports:{}},W0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Z){var ce=D.length;D.push(Z);e:for(;0<ce;){var de=ce-1>>>1,Ce=D[de];if(0<r(Ce,Z))D[de]=Z,D[ce]=Ce,ce=de;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Z=D[0],ce=D.pop();if(ce!==Z){D[0]=ce;e:for(var de=0,Ce=D.length,ke=Ce>>>1;de<ke;){var ne=2*(de+1)-1,fe=D[ne],pe=ne+1,xe=D[pe];if(0>r(fe,ce))pe<Ce&&0>r(xe,fe)?(D[de]=xe,D[pe]=ce,de=pe):(D[de]=fe,D[ne]=ce,de=ne);else if(pe<Ce&&0>r(xe,ce))D[de]=xe,D[pe]=ce,de=pe;else break e}}return Z}function r(D,Z){var ce=D.sortIndex-Z.sortIndex;return ce!==0?ce:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,g=!1,x=!1,v=!1,h=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=D)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(D){if(v=!1,_(D),!x)if(n(l)!==null)x=!0,z(P);else{var Z=n(c);Z!==null&&ee(S,Z.startTime-D)}}function P(D,Z){x=!1,v&&(v=!1,u(L),L=-1),g=!0;var ce=p;try{for(_(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||D&&!w());){var de=f.callback;if(typeof de=="function"){f.callback=null,p=f.priorityLevel;var Ce=de(f.expirationTime<=Z);Z=t.unstable_now(),typeof Ce=="function"?f.callback=Ce:f===n(l)&&i(l),_(Z)}else i(l);f=n(l)}if(f!==null)var ke=!0;else{var ne=n(c);ne!==null&&ee(S,ne.startTime-Z),ke=!1}return ke}finally{f=null,p=ce,g=!1}}var T=!1,C=null,L=-1,G=5,M=-1;function w(){return!(t.unstable_now()-M<G)}function I(){if(C!==null){var D=t.unstable_now();M=D;var Z=!0;try{Z=C(!0,D)}finally{Z?k():(T=!1,C=null)}}else T=!1}var k;if(typeof m=="function")k=function(){m(I)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,re=Y.port2;Y.port1.onmessage=I,k=function(){re.postMessage(null)}}else k=function(){h(I,0)};function z(D){C=D,T||(T=!0,k())}function ee(D,Z){L=h(function(){D(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,z(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var ce=p;p=Z;try{return D()}finally{p=ce}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ce=p;p=D;try{return Z()}finally{p=ce}},t.unstable_scheduleCallback=function(D,Z,ce){var de=t.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?de+ce:de):ce=de,D){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ce+Ce,D={id:d++,callback:Z,priorityLevel:D,startTime:ce,expirationTime:Ce,sortIndex:-1},ce>de?(D.sortIndex=ce,e(c,D),n(l)===null&&D===n(c)&&(v?(u(L),L=-1):v=!0,ee(S,ce-de))):(D.sortIndex=Ce,e(l,D),x||g||(x=!0,z(P))),D},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(D){var Z=p;return function(){var ce=p;p=Z;try{return D.apply(this,arguments)}finally{p=ce}}}})(W0);G0.exports=W0;var fx=G0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=Le,In=fx;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,Ko={};function ts(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Ko[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},cp={};function gx(t){return Qu.call(cp,t)?!0:Qu.call(lp,t)?!1:mx.test(t)?cp[t]=!0:(lp[t]=!0,!1)}function _x(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vx(t,e,n,i){if(e===null||typeof e>"u"||_x(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oh,zh);Wt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oh,zh);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oh,zh);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vx(e,n,r,i)&&(n=null),i||r===null?gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),Gh=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),up=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Oc;function Io(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var zc=!1;function Bc(t,e){if(!t||zc)return"";zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function xx(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=Bc(t.type,!1),t;case 11:return t=Bc(t.type.render,!1),t;case 1:return t=Bc(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case Ju:return"Profiler";case Hh:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y0:return(t.displayName||"Context")+".Consumer";case X0:return(t._context.displayName||"Context")+".Provider";case Vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gh:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function yx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sx(t){var e=q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=Sx(t))}function K0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=q0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function id(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&Bh(t,"checked",e,!1)}function rd(t,e){Z0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&sd(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sd(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(Uo(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Q0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mx=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){Mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ex=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(t,e){if(e){if(Ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dd=null,Bs=null,Hs=null;function mp(t){if(t=va(t)){if(typeof dd!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=pc(e),dd(t.stateNode,t.type,e))}}function ig(t){Bs?Hs?Hs.push(t):Hs=[t]:Bs=t}function rg(){if(Bs){var t=Bs,e=Hs;if(Hs=Bs=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function sg(t,e){return t(e)}function og(){}var Hc=!1;function ag(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return sg(t,e,n)}finally{Hc=!1,(Bs!==null||Hs!==null)&&(og(),rg())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var hd=!1;if(Ui)try{var go={};Object.defineProperty(go,"passive",{get:function(){hd=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{hd=!1}function wx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Vo=!1,Il=null,Ul=!1,fd=null,Tx={onError:function(t){Vo=!0,Il=t}};function Ax(t,e,n,i,r,s,o,a,l){Vo=!1,Il=null,wx.apply(Tx,arguments)}function Cx(t,e,n,i,r,s,o,a,l){if(Ax.apply(this,arguments),Vo){if(Vo){var c=Il;Vo=!1,Il=null}else throw Error(ge(198));Ul||(Ul=!0,fd=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gp(t){if(ns(t)!==t)throw Error(ge(188))}function bx(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gp(r),t;if(s===i)return gp(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function cg(t){return t=bx(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var dg=In.unstable_scheduleCallback,_p=In.unstable_cancelCallback,Rx=In.unstable_shouldYield,Px=In.unstable_requestPaint,bt=In.unstable_now,Lx=In.unstable_getCurrentPriorityLevel,jh=In.unstable_ImmediatePriority,hg=In.unstable_UserBlockingPriority,kl=In.unstable_NormalPriority,Dx=In.unstable_LowPriority,fg=In.unstable_IdlePriority,uc=null,mi=null;function Nx(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:kx,Ix=Math.log,Ux=Math.LN2;function kx(t){return t>>>=0,t===0?32:31-(Ix(t)/Ux|0)|0}var Ra=64,Pa=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ko(a):(s&=o,s!==0&&(i=ko(s)))}else o=n&~r,o!==0?i=ko(o):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function Fx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Fx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function zx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,Yh,_g,vg,xg,md=!1,La=[],nr=null,ir=null,rr=null,Jo=new Map,ea=new Map,Zi=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hx(t,e,n,i,r){switch(e){case"focusin":return nr=_o(nr,t,e,n,i,r),!0;case"dragenter":return ir=_o(ir,t,e,n,i,r),!0;case"mouseover":return rr=_o(rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,_o(Jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,_o(ea.get(s)||null,t,e,n,i,r)),!0}return!1}function yg(t){var e=Fr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,xg(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ud=i,n.target.dispatchEvent(i),ud=null}else return e=va(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){pl(t)&&n.delete(e)}function Vx(){md=!1,nr!==null&&pl(nr)&&(nr=null),ir!==null&&pl(ir)&&(ir=null),rr!==null&&pl(rr)&&(rr=null),Jo.forEach(xp),ea.forEach(xp)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,Vx)))}function ta(t){function e(r){return vo(r,t)}if(0<La.length){vo(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&vo(nr,t),ir!==null&&vo(ir,t),rr!==null&&vo(rr,t),Jo.forEach(e),ea.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&Zi.shift()}var Vs=Bi.ReactCurrentBatchConfig,Ol=!0;function Gx(t,e,n,i){var r=at,s=Vs.transition;Vs.transition=null;try{at=1,$h(t,e,n,i)}finally{at=r,Vs.transition=s}}function Wx(t,e,n,i){var r=at,s=Vs.transition;Vs.transition=null;try{at=4,$h(t,e,n,i)}finally{at=r,Vs.transition=s}}function $h(t,e,n,i){if(Ol){var r=gd(t,e,n,i);if(r===null)Qc(t,e,i,zl,n),vp(t,i);else if(Hx(r,t,e,n,i))i.stopPropagation();else if(vp(t,i),e&4&&-1<Bx.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&gg(s),s=gd(t,e,n,i),s===null&&Qc(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qc(t,e,i,null,n)}}var zl=null;function gd(t,e,n,i){if(zl=null,t=Wh(i),t=Fr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lx()){case jh:return 1;case hg:return 4;case kl:case Dx:return 16;case fg:return 536870912;default:return 16}default:return 16}}var er=null,qh=null,ml=null;function Mg(){if(ml)return ml;var t,e=qh,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ml=r.slice(t,1<i?1-i:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function yp(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:yp,this.isPropagationStopped=yp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=kn(uo),_a=St({},uo,{view:0,detail:0}),jx=kn(_a),Gc,Wc,xo,dc=St({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(Gc=t.screenX-xo.screenX,Wc=t.screenY-xo.screenY):Wc=Gc=0,xo=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Sp=kn(dc),Xx=St({},dc,{dataTransfer:0}),Yx=kn(Xx),$x=St({},_a,{relatedTarget:0}),jc=kn($x),qx=St({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=kn(qx),Zx=St({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=kn(Zx),Jx=St({},uo,{data:0}),Mp=kn(Jx),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ny[t])?!!e[t]:!1}function Zh(){return iy}var ry=St({},_a,{key:function(t){if(t.key){var e=ey[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zh,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sy=kn(ry),oy=St({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=kn(oy),ay=St({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zh}),ly=kn(ay),cy=St({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=kn(cy),dy=St({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=kn(dy),fy=[9,13,27,32],Qh=Ui&&"CompositionEvent"in window,Go=null;Ui&&"documentMode"in document&&(Go=document.documentMode);var py=Ui&&"TextEvent"in window&&!Go,Eg=Ui&&(!Qh||Go&&8<Go&&11>=Go),wp=" ",Tp=!1;function wg(t,e){switch(t){case"keyup":return fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function my(t,e){switch(t){case"compositionend":return Tg(e);case"keypress":return e.which!==32?null:(Tp=!0,wp);case"textInput":return t=e.data,t===wp&&Tp?null:t;default:return null}}function gy(t,e){if(Cs)return t==="compositionend"||!Qh&&wg(t,e)?(t=Mg(),ml=qh=er=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_y[t.type]:e==="textarea"}function Ag(t,e,n,i){ig(i),e=Bl(e,"onChange"),0<e.length&&(n=new Kh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,na=null;function vy(t){Fg(t,0)}function hc(t){var e=Ps(t);if(K0(e))return t}function xy(t,e){if(t==="change")return e}var Cg=!1;if(Ui){var Xc;if(Ui){var Yc="oninput"in document;if(!Yc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Yc=typeof Cp.oninput=="function"}Xc=Yc}else Xc=!1;Cg=Xc&&(!document.documentMode||9<document.documentMode)}function bp(){Wo&&(Wo.detachEvent("onpropertychange",bg),na=Wo=null)}function bg(t){if(t.propertyName==="value"&&hc(na)){var e=[];Ag(e,na,t,Wh(t)),ag(vy,e)}}function yy(t,e,n){t==="focusin"?(bp(),Wo=e,na=n,Wo.attachEvent("onpropertychange",bg)):t==="focusout"&&bp()}function Sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(na)}function My(t,e){if(t==="click")return hc(e)}function Ey(t,e){if(t==="input"||t==="change")return hc(e)}function wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:wy;function ia(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qu.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=Rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rp(n)}}function Rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pg(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function Jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ty(t){var e=Pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rg(n.ownerDocument.documentElement,n)){if(i!==null&&Jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pp(n,s);var o=Pp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ay=Ui&&"documentMode"in document&&11>=document.documentMode,bs=null,_d=null,jo=null,vd=!1;function Lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||bs==null||bs!==Nl(i)||(i=bs,"selectionStart"in i&&Jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&ia(jo,i)||(jo=i,i=Bl(_d,"onSelect"),0<i.length&&(e=new Kh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bs)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},$c={},Lg={};Ui&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function fc(t){if($c[t])return $c[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lg)return $c[t]=e[n];return t}var Dg=fc("animationend"),Ng=fc("animationiteration"),Ig=fc("animationstart"),Ug=fc("transitionend"),kg=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){kg.set(t,e),ts(e,[t])}for(var qc=0;qc<Dp.length;qc++){var Kc=Dp[qc],Cy=Kc.toLowerCase(),by=Kc[0].toUpperCase()+Kc.slice(1);gr(Cy,"on"+by)}gr(Dg,"onAnimationEnd");gr(Ng,"onAnimationIteration");gr(Ig,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Ug,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cx(i,e,void 0,t),t.currentTarget=null}function Fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Np(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Np(r,a,c),s=l}}}if(Ul)throw t=fd,Ul=!1,fd=null,t}function mt(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var i=t+"__bubble";n.has(i)||(Og(e,t,2,!1),n.add(i))}function Zc(t,e,n){var i=0;e&&(i|=4),Og(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[Ia]){t[Ia]=!0,j0.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Zc("selectionchange",!1,e))}}function Og(t,e,n,i){switch(Sg(e)){case 1:var r=Gx;break;case 4:r=Wx;break;default:r=$h}n=r.bind(null,e,n,t),r=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ag(function(){var c=s,d=Wh(n),f=[];e:{var p=kg.get(t);if(p!==void 0){var g=Kh,x=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":g=sy;break;case"focusin":x="focus",g=jc;break;case"focusout":x="blur",g=jc;break;case"beforeblur":case"afterblur":g=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ly;break;case Dg:case Ng:case Ig:g=Kx;break;case Ug:g=uy;break;case"scroll":g=jx;break;case"wheel":g=hy;break;case"copy":case"cut":case"paste":g=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ep}var v=(e&4)!==0,h=!v&&t==="scroll",u=v?p!==null?p+"Capture":null:p;v=[];for(var m=c,_;m!==null;){_=m;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,u!==null&&(S=Qo(m,u),S!=null&&v.push(sa(m,S,_)))),h)break;m=m.return}0<v.length&&(p=new g(p,x,null,n,d),f.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==ud&&(x=n.relatedTarget||n.fromElement)&&(Fr(x)||x[ki]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Fr(x):null,x!==null&&(h=ns(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(v=Sp,S="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ep,S="onPointerLeave",u="onPointerEnter",m="pointer"),h=g==null?p:Ps(g),_=x==null?p:Ps(x),p=new v(S,m+"leave",g,n,d),p.target=h,p.relatedTarget=_,S=null,Fr(d)===c&&(v=new v(u,m+"enter",x,n,d),v.target=_,v.relatedTarget=h,S=v),h=S,g&&x)t:{for(v=g,u=x,m=0,_=v;_;_=os(_))m++;for(_=0,S=u;S;S=os(S))_++;for(;0<m-_;)v=os(v),m--;for(;0<_-m;)u=os(u),_--;for(;m--;){if(v===u||u!==null&&v===u.alternate)break t;v=os(v),u=os(u)}v=null}else v=null;g!==null&&Ip(f,p,g,v,!1),x!==null&&h!==null&&Ip(f,h,x,v,!0)}}e:{if(p=c?Ps(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=xy;else if(Ap(p))if(Cg)P=Ey;else{P=Sy;var T=yy}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=My);if(P&&(P=P(t,c))){Ag(f,P,n,d);break e}T&&T(t,p,c),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&sd(p,"number",p.value)}switch(T=c?Ps(c):window,t){case"focusin":(Ap(T)||T.contentEditable==="true")&&(bs=T,_d=c,jo=null);break;case"focusout":jo=_d=bs=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Lp(f,n,d);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":Lp(f,n,d)}var C;if(Qh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Cs?wg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Eg&&n.locale!=="ko"&&(Cs||L!=="onCompositionStart"?L==="onCompositionEnd"&&Cs&&(C=Mg()):(er=d,qh="value"in er?er.value:er.textContent,Cs=!0)),T=Bl(c,L),0<T.length&&(L=new Mp(L,t,null,n,d),f.push({event:L,listeners:T}),C?L.data=C:(C=Tg(n),C!==null&&(L.data=C)))),(C=py?my(t,n):gy(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(d=new Mp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}Fg(f,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(t,n),s!=null&&i.unshift(sa(t,s,r)),s=Qo(t,e),s!=null&&i.push(sa(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Qo(n,s),l!=null&&o.unshift(sa(n,l,a))):r||(l=Qo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Py=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Up(t){return(typeof t=="string"?t:""+t).replace(Py,`
`).replace(Ly,"")}function Ua(t,e,n){if(e=Up(e),Up(t)!==e&&n)throw Error(ge(425))}function Hl(){}var xd=null,yd=null;function Sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(Iy)}:Md;function Iy(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),pi="__reactFiber$"+ho,oa="__reactProps$"+ho,ki="__reactContainer$"+ho,Ed="__reactEvents$"+ho,Uy="__reactListeners$"+ho,ky="__reactHandles$"+ho;function Fr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[pi])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[pi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function pc(t){return t[oa]||null}var wd=[],Ls=-1;function _r(t){return{current:t}}function _t(t){0>Ls||(t.current=wd[Ls],wd[Ls]=null,Ls--)}function ht(t,e){Ls++,wd[Ls]=t.current,t.current=e}var fr={},Qt=_r(fr),xn=_r(!1),jr=fr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Vl(){_t(xn),_t(Qt)}function Op(t,e,n){if(Qt.current!==fr)throw Error(ge(168));ht(Qt,e),ht(xn,n)}function zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,yx(t)||"Unknown",r));return St({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,jr=Qt.current,ht(Qt,t),ht(xn,xn.current),!0}function zp(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=zg(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,_t(xn),_t(Qt),ht(Qt,t)):_t(xn),ht(xn,n)}var bi=null,mc=!1,eu=!1;function Bg(t){bi===null?bi=[t]:bi.push(t)}function Fy(t){mc=!0,Bg(t)}function vr(){if(!eu&&bi!==null){eu=!0;var t=0,e=at;try{var n=bi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,mc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),dg(jh,vr),r}finally{at=e,eu=!1}}return null}var Ds=[],Ns=0,Wl=null,jl=0,Vn=[],Gn=0,Xr=null,Pi=1,Li="";function Rr(t,e){Ds[Ns++]=jl,Ds[Ns++]=Wl,Wl=t,jl=e}function Hg(t,e,n){Vn[Gn++]=Pi,Vn[Gn++]=Li,Vn[Gn++]=Xr,Xr=t;var i=Pi;t=Li;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pi=1<<32-ai(e)+r|n<<r|i,Li=s+t}else Pi=1<<s|n<<r|i,Li=t}function ef(t){t.return!==null&&(Rr(t,1),Hg(t,1,0))}function tf(t){for(;t===Wl;)Wl=Ds[--Ns],Ds[Ns]=null,jl=Ds[--Ns],Ds[Ns]=null;for(;t===Xr;)Xr=Vn[--Gn],Vn[Gn]=null,Li=Vn[--Gn],Vn[Gn]=null,Pi=Vn[--Gn],Vn[Gn]=null}var Nn=null,Ln=null,vt=!1,ni=null;function Vg(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Ln=null,!0):!1;default:return!1}}function Td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ad(t){if(vt){var e=Ln;if(e){var n=e;if(!Bp(t,e)){if(Td(t))throw Error(ge(418));e=sr(n.nextSibling);var i=Nn;e&&Bp(t,e)?Vg(i,n):(t.flags=t.flags&-4097|2,vt=!1,Nn=t)}}else{if(Td(t))throw Error(ge(418));t.flags=t.flags&-4097|2,vt=!1,Nn=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function ka(t){if(t!==Nn)return!1;if(!vt)return Hp(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sd(t.type,t.memoizedProps)),e&&(e=Ln)){if(Td(t))throw Gg(),Error(ge(418));for(;e;)Vg(t,e),e=sr(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Nn?sr(t.stateNode.nextSibling):null;return!0}function Gg(){for(var t=Ln;t;)t=sr(t.nextSibling)}function Zs(){Ln=Nn=null,vt=!1}function nf(t){ni===null?ni=[t]:ni.push(t)}var Oy=Bi.ReactCurrentBatchConfig;function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function Wg(t){function e(u,m){if(t){var _=u.deletions;_===null?(u.deletions=[m],u.flags|=16):_.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=cr(u,m),u.index=0,u.sibling=null,u}function s(u,m,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<m?(u.flags|=2,m):_):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,_,S){return m===null||m.tag!==6?(m=au(_,u.mode,S),m.return=u,m):(m=r(m,_),m.return=u,m)}function l(u,m,_,S){var P=_.type;return P===As?d(u,m,_.props.children,S,_.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qi&&Vp(P)===m.type)?(S=r(m,_.props),S.ref=yo(u,m,_),S.return=u,S):(S=El(_.type,_.key,_.props,null,u.mode,S),S.ref=yo(u,m,_),S.return=u,S)}function c(u,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=lu(_,u.mode,S),m.return=u,m):(m=r(m,_.children||[]),m.return=u,m)}function d(u,m,_,S,P){return m===null||m.tag!==7?(m=Wr(_,u.mode,S,P),m.return=u,m):(m=r(m,_),m.return=u,m)}function f(u,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=au(""+m,u.mode,_),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:return _=El(m.type,m.key,m.props,null,u.mode,_),_.ref=yo(u,null,m),_.return=u,_;case Ts:return m=lu(m,u.mode,_),m.return=u,m;case qi:var S=m._init;return f(u,S(m._payload),_)}if(Uo(m)||mo(m))return m=Wr(m,u.mode,_,null),m.return=u,m;Fa(u,m)}return null}function p(u,m,_,S){var P=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(u,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Aa:return _.key===P?l(u,m,_,S):null;case Ts:return _.key===P?c(u,m,_,S):null;case qi:return P=_._init,p(u,m,P(_._payload),S)}if(Uo(_)||mo(_))return P!==null?null:d(u,m,_,S,null);Fa(u,_)}return null}function g(u,m,_,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(_)||null,a(m,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Aa:return u=u.get(S.key===null?_:S.key)||null,l(m,u,S,P);case Ts:return u=u.get(S.key===null?_:S.key)||null,c(m,u,S,P);case qi:var T=S._init;return g(u,m,_,T(S._payload),P)}if(Uo(S)||mo(S))return u=u.get(_)||null,d(m,u,S,P,null);Fa(m,S)}return null}function x(u,m,_,S){for(var P=null,T=null,C=m,L=m=0,G=null;C!==null&&L<_.length;L++){C.index>L?(G=C,C=null):G=C.sibling;var M=p(u,C,_[L],S);if(M===null){C===null&&(C=G);break}t&&C&&M.alternate===null&&e(u,C),m=s(M,m,L),T===null?P=M:T.sibling=M,T=M,C=G}if(L===_.length)return n(u,C),vt&&Rr(u,L),P;if(C===null){for(;L<_.length;L++)C=f(u,_[L],S),C!==null&&(m=s(C,m,L),T===null?P=C:T.sibling=C,T=C);return vt&&Rr(u,L),P}for(C=i(u,C);L<_.length;L++)G=g(C,u,L,_[L],S),G!==null&&(t&&G.alternate!==null&&C.delete(G.key===null?L:G.key),m=s(G,m,L),T===null?P=G:T.sibling=G,T=G);return t&&C.forEach(function(w){return e(u,w)}),vt&&Rr(u,L),P}function v(u,m,_,S){var P=mo(_);if(typeof P!="function")throw Error(ge(150));if(_=P.call(_),_==null)throw Error(ge(151));for(var T=P=null,C=m,L=m=0,G=null,M=_.next();C!==null&&!M.done;L++,M=_.next()){C.index>L?(G=C,C=null):G=C.sibling;var w=p(u,C,M.value,S);if(w===null){C===null&&(C=G);break}t&&C&&w.alternate===null&&e(u,C),m=s(w,m,L),T===null?P=w:T.sibling=w,T=w,C=G}if(M.done)return n(u,C),vt&&Rr(u,L),P;if(C===null){for(;!M.done;L++,M=_.next())M=f(u,M.value,S),M!==null&&(m=s(M,m,L),T===null?P=M:T.sibling=M,T=M);return vt&&Rr(u,L),P}for(C=i(u,C);!M.done;L++,M=_.next())M=g(C,u,L,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?L:M.key),m=s(M,m,L),T===null?P=M:T.sibling=M,T=M);return t&&C.forEach(function(I){return e(u,I)}),vt&&Rr(u,L),P}function h(u,m,_,S){if(typeof _=="object"&&_!==null&&_.type===As&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Aa:e:{for(var P=_.key,T=m;T!==null;){if(T.key===P){if(P=_.type,P===As){if(T.tag===7){n(u,T.sibling),m=r(T,_.props.children),m.return=u,u=m;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qi&&Vp(P)===T.type){n(u,T.sibling),m=r(T,_.props),m.ref=yo(u,T,_),m.return=u,u=m;break e}n(u,T);break}else e(u,T);T=T.sibling}_.type===As?(m=Wr(_.props.children,u.mode,S,_.key),m.return=u,u=m):(S=El(_.type,_.key,_.props,null,u.mode,S),S.ref=yo(u,m,_),S.return=u,u=S)}return o(u);case Ts:e:{for(T=_.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(u,m.sibling),m=r(m,_.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=lu(_,u.mode,S),m.return=u,u=m}return o(u);case qi:return T=_._init,h(u,m,T(_._payload),S)}if(Uo(_))return x(u,m,_,S);if(mo(_))return v(u,m,_,S);Fa(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,_),m.return=u,u=m):(n(u,m),m=au(_,u.mode,S),m.return=u,u=m),o(u)):n(u,m)}return h}var Qs=Wg(!0),jg=Wg(!1),Xl=_r(null),Yl=null,Is=null,rf=null;function sf(){rf=Is=Yl=null}function of(t){var e=Xl.current;_t(Xl),t._currentValue=e}function Cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Yl=t,rf=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(rf!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Yl===null)throw Error(ge(308));Is=t,Yl.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Or=null;function af(t){Or===null?Or=[t]:Or.push(t)}function Xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,af(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,af(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xh(t,n)}}function Gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(p=e,g=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=St({},f,p);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=f}}function Wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var xa={},gi=_r(xa),aa=_r(xa),la=_r(xa);function zr(t){if(t===xa)throw Error(ge(174));return t}function cf(t,e){switch(ht(la,e),ht(aa,t),ht(gi,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ad(e,t)}_t(gi),ht(gi,e)}function Js(){_t(gi),_t(aa),_t(la)}function $g(t){zr(la.current);var e=zr(gi.current),n=ad(e,t.type);e!==n&&(ht(aa,t),ht(gi,n))}function uf(t){aa.current===t&&(_t(gi),_t(aa))}var xt=_r(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tu=[];function df(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var vl=Bi.ReactCurrentDispatcher,nu=Bi.ReactCurrentBatchConfig,Yr=0,yt=null,Nt=null,Ot=null,Kl=!1,Xo=!1,ca=0,zy=0;function jt(){throw Error(ge(321))}function hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function ff(t,e,n,i,r,s){if(Yr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?Gy:Wy,t=n(i,r),Xo){s=0;do{if(Xo=!1,ca=0,25<=s)throw Error(ge(301));s+=1,Ot=Nt=null,e.updateQueue=null,vl.current=jy,t=n(i,r)}while(Xo)}if(vl.current=Zl,e=Nt!==null&&Nt.next!==null,Yr=0,Ot=Nt=yt=null,Kl=!1,e)throw Error(ge(300));return t}function pf(){var t=ca!==0;return ca=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function $n(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ot===null?yt.memoizedState:Ot.next;if(e!==null)Ot=e,Nt=t;else{if(t===null)throw Error(ge(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function ua(t,e){return typeof e=="function"?e(t):e}function iu(t){var e=$n(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Yr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=d,$r|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ru(t){var e=$n(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function qg(){}function Kg(t,e){var n=yt,i=$n(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,mf(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,da(9,Qg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ge(349));Yr&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,e_(e)&&t_(t)}function Jg(t,e,n){return n(function(){e_(e)&&t_(t)})}function e_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function t_(t){var e=Fi(t,1);e!==null&&li(e,t,1,-1)}function jp(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=Vy.bind(null,yt,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n_(){return $n().memoizedState}function xl(t,e,n,i){var r=di();yt.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&hf(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}yt.flags|=t,r.memoizedState=da(1|e,n,s,i)}function Xp(t,e){return xl(8390656,8,t,e)}function mf(t,e){return gc(2048,8,t,e)}function i_(t,e){return gc(4,2,t,e)}function r_(t,e){return gc(4,4,t,e)}function s_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o_(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,s_.bind(null,e,t),n)}function gf(){}function a_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function c_(t,e,n){return Yr&21?(ci(n,e)||(n=pg(),yt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function By(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=nu.transition;nu.transition={};try{t(!1),e()}finally{at=n,nu.transition=i}}function u_(){return $n().memoizedState}function Hy(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},d_(t))h_(e,n);else if(n=Xg(t,e,n,i),n!==null){var r=sn();li(n,t,i,r),f_(n,e,i)}}function Vy(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(d_(t))h_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,af(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Xg(t,e,r,i),n!==null&&(r=sn(),li(n,t,i,r),f_(n,e,i))}}function d_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function h_(t,e){Xo=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xh(t,n)}}var Zl={readContext:Yn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Gy={readContext:Yn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,s_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Hy.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:jp,useDebugValue:gf,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=jp(!1),e=t[0];return t=By.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=di();if(vt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),zt===null)throw Error(ge(349));Yr&30||Zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xp(Jg.bind(null,i,s,t),[t]),i.flags|=2048,da(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=zt.identifierPrefix;if(vt){var n=Li,i=Pi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wy={readContext:Yn,useCallback:a_,useContext:Yn,useEffect:mf,useImperativeHandle:o_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:iu,useRef:n_,useState:function(){return iu(ua)},useDebugValue:gf,useDeferredValue:function(t){var e=$n();return c_(e,Nt.memoizedState,t)},useTransition:function(){var t=iu(ua)[0],e=$n().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:Kg,useId:u_,unstable_isNewReconciler:!1},jy={readContext:Yn,useCallback:a_,useContext:Yn,useEffect:mf,useImperativeHandle:o_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:ru,useRef:n_,useState:function(){return ru(ua)},useDebugValue:gf,useDeferredValue:function(t){var e=$n();return Nt===null?e.memoizedState=t:c_(e,Nt.memoizedState,t)},useTransition:function(){var t=ru(ua)[0],e=$n().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:Kg,useId:u_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=lr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(li(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=lr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(li(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=lr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(li(e,t,i,n),_l(e,t,i))}};function Yp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,s):!0}function p_(t,e,n){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=yn(e)?jr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},lf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=yn(e)?jr:Qt.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_c.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=xx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xy=typeof WeakMap=="function"?WeakMap:Map;function m_(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,Bd=i),Pd(t,e)},n}function g_(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pd(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var Yy=Bi.ReactCurrentOwner,vn=!1;function tn(t,e,n,i){e.child=t===null?jg(e,null,n,i):Qs(e,t.child,n,i)}function Qp(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=ff(t,e,n,i,s,r),n=pf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(vt&&n&&ef(e),e.flags|=1,tn(t,e,i,r),e.child)}function Jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,__(t,e,s,i,r)):(t=El(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function __(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ia(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return Ld(t,e,n,i,r)}function v_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(ks,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(ks,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(ks,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(ks,bn),bn|=i;return tn(t,e,r,n),e.child}function x_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,i,r){var s=yn(n)?jr:Qt.current;return s=Ks(e,s),Gs(e,r),n=ff(t,e,n,i,s,r),i=pf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(vt&&i&&ef(e),e.flags|=1,tn(t,e,n,r),e.child)}function em(t,e,n,i,r){if(yn(n)){var s=!0;Gl(e)}else s=!1;if(Gs(e,r),e.stateNode===null)yl(t,e),p_(e,n,i),Rd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=yn(n)?jr:Qt.current,c=Ks(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&$p(e,o,i,c),Ki=!1;var p=e.memoizedState;o.state=p,$l(e,i,o,r),l=e.memoizedState,a!==i||p!==l||xn.current||Ki?(typeof d=="function"&&(bd(e,n,d,i),l=e.memoizedState),(a=Ki||Yp(e,n,a,i,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=yn(n)?jr:Qt.current,l=Ks(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&$p(e,o,i,l),Ki=!1,p=e.memoizedState,o.state=p,$l(e,i,o,r);var x=e.memoizedState;a!==f||p!==x||xn.current||Ki?(typeof g=="function"&&(bd(e,n,g,i),x=e.memoizedState),(c=Ki||Yp(e,n,c,i,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Dd(t,e,n,i,s,r)}function Dd(t,e,n,i,r,s){x_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zp(e,n,!1),Oi(t,e,s);i=e.stateNode,Yy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&zp(e,n,!0),e.child}function y_(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),cf(t,e.containerInfo)}function tm(t,e,n,i,r){return Zs(),nf(r),e.flags|=256,tn(t,e,n,i),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Id(t){return{baseLanes:t,cachePool:null,transitions:null}}function S_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(xt,r&1),t===null)return Ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yc(o,i,0,null),t=Wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Id(n),e.memoizedState=Nd,t):_f(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $y(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nd,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _f(t,e){return e=yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,i){return i!==null&&nf(i),Qs(e,t.child,null,n),t=_f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $y(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=su(Error(ge(422))),Oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Id(o),e.memoizedState=Nd,s);if(!(e.mode&1))return Oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=su(s,i,void 0),Oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),li(i,t,r,-1))}return Ef(),i=su(Error(ge(421))),Oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=sr(r.nextSibling),Nn=e,vt=!0,ni=null,t!==null&&(Vn[Gn++]=Pi,Vn[Gn++]=Li,Vn[Gn++]=Xr,Pi=t.id,Li=t.overflow,Xr=e),e=_f(e,i.children),e.flags|=4096,e)}function nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cd(t.return,e,n)}function ou(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nm(t,n,e);else if(t.tag===19)nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ou(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ou(e,!0,n,null,s);break;case"together":ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qy(t,e,n){switch(e.tag){case 3:y_(e),Zs();break;case 5:$g(e);break;case 1:yn(e.type)&&Gl(e);break;case 4:cf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?S_(t,e,n):(ht(xt,xt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);ht(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,v_(t,e,n)}return Oi(t,e,n)}var E_,Ud,w_,T_;E_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ud=function(){};w_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(gi.current);var s=null;switch(n){case"input":r=id(t,r),i=id(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=od(t,r),i=od(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}ld(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T_=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ky(t,e,n){var i=e.pendingProps;switch(tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return yn(e.type)&&Vl(),Xt(e),null;case 3:return i=e.stateNode,Js(),_t(xn),_t(Qt),df(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Gd(ni),ni=null))),Ud(t,e),Xt(e),null;case 5:uf(e);var r=zr(la.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Xt(e),null}if(t=zr(gi.current),ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[oa]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Fo.length;r++)mt(Fo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":dp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":fp(i,s),mt("invalid",i)}ld(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":Ca(i),hp(i,s,!0);break;case"textarea":Ca(i),pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[oa]=i,E_(t,e,!1,!1),e.stateNode=t;e:{switch(o=cd(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fo.length;r++)mt(Fo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":dp(t,i),r=id(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),mt("invalid",t);break;case"textarea":fp(t,i),r=od(t,i),mt("invalid",t);break;default:r=i}ld(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Bh(t,s,l,o))}switch(n){case"input":Ca(t),hp(t,i,!1);break;case"textarea":Ca(t),pp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)T_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=zr(la.current),zr(gi.current),ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Xt(e),null;case 13:if(_t(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Ln!==null&&e.mode&1&&!(e.flags&128))Gg(),Zs(),e.flags|=98560,s=!1;else if(s=ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[pi]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else ni!==null&&(Gd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?It===0&&(It=3):Ef())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Js(),Ud(t,e),t===null&&ra(e.stateNode.containerInfo),Xt(e),null;case 10:return of(e.type._context),Xt(e),null;case 17:return yn(e.type)&&Vl(),Xt(e),null;case 19:if(_t(xt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>to&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Xt(e),null}else 2*bt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,ht(xt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Mf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function Zy(t,e){switch(tf(e),e.tag){case 1:return yn(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),_t(xn),_t(Qt),df(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uf(e),null;case 13:if(_t(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(xt),null;case 4:return Js(),null;case 10:return of(e.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var za=!1,Kt=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,be=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function kd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var im=!1;function Jy(t,e){if(xd=Ol,t=Pg(),Jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},Ol=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,h=x.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:ei(e.type,v),h);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return x=im,im=!1,x}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kd(e,n,s)}r=r.next}while(r!==i)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A_(t){var e=t.alternate;e!==null&&(t.alternate=null,A_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[oa],delete e[Ed],delete e[Uy],delete e[ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C_(t){return t.tag===5||t.tag===3||t.tag===4}function rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var Vt=null,ti=!1;function Vi(t,e,n){for(n=n.child;n!==null;)b_(t,e,n),n=n.sibling}function b_(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:Kt||Us(n,e);case 6:var i=Vt,r=ti;Vt=null,Vi(t,e,n),Vt=i,ti=r,Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),ta(t)):Jc(Vt,n.stateNode));break;case 4:i=Vt,r=ti,Vt=n.stateNode.containerInfo,ti=!0,Vi(t,e,n),Vt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kd(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Kt&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Vi(t,e,n),Kt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function sm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qy),e.forEach(function(i){var r=lS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ti=!1;break e;case 3:Vt=a.stateNode.containerInfo,ti=!0;break e;case 4:Vt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Vt===null)throw Error(ge(160));b_(s,o,r),Vt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R_(e,t),e=e.sibling}function R_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),ui(t),i&4){try{Yo(3,t,t.return),vc(3,t)}catch(v){Tt(t,t.return,v)}try{Yo(5,t,t.return)}catch(v){Tt(t,t.return,v)}}break;case 1:Kn(e,t),ui(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if(Kn(e,t),ui(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{Zo(r,"")}catch(v){Tt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),cd(a,o);var c=cd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ng(r,f):d==="dangerouslySetInnerHTML"?eg(r,f):d==="children"?Zo(r,f):Bh(r,d,f,c)}switch(a){case"input":rd(r,s);break;case"textarea":Q0(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?zs(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(v){Tt(t,t.return,v)}}break;case 6:if(Kn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Tt(t,t.return,v)}}break;case 3:if(Kn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(v){Tt(t,t.return,v)}break;case 4:Kn(e,t),ui(t);break;case 13:Kn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yf=bt())),i&4&&sm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||d,Kn(e,t),Kt=c):Kn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(be=t,d=t.child;d!==null;){for(f=be=d;be!==null;){switch(p=be,g=p.child,p.tag){case 0:case 11:case 14:case 15:Yo(4,p,p.return);break;case 1:Us(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){Tt(i,n,v)}}break;case 5:Us(p,p.return);break;case 22:if(p.memoizedState!==null){am(f);continue}}g!==null?(g.return=p,be=g):am(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tg("display",o))}catch(v){Tt(t,t.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Tt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kn(e,t),ui(t),i&4&&sm(t);break;case 21:break;default:Kn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C_(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zo(r,""),i.flags&=-33);var s=rm(t);zd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rm(t);Od(t,a,o);break;default:throw Error(ge(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eS(t,e,n){be=t,P_(t)}function P_(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=za;var c=Kt;if(za=o,(Kt=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?lm(r):l!==null?(l.return=o,be=l):lm(r);for(;s!==null;)be=s,P_(s),s=s.sibling;be=r,za=a,Kt=c}om(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):om(t)}}function om(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ta(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}Kt||e.flags&512&&Fd(e)}catch(p){Tt(e,e.return,p)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function am(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function lm(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Fd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Fd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var tS=Math.ceil,Ql=Bi.ReactCurrentDispatcher,vf=Bi.ReactCurrentOwner,Xn=Bi.ReactCurrentBatchConfig,tt=0,zt=null,Lt=null,Gt=0,bn=0,ks=_r(0),It=0,ha=null,$r=0,xc=0,xf=0,$o=null,_n=null,yf=0,to=1/0,Ci=null,Jl=!1,Bd=null,ar=null,Ba=!1,tr=null,ec=0,qo=0,Hd=null,Sl=-1,Ml=0;function sn(){return tt&6?bt():Sl!==-1?Sl:Sl=bt()}function lr(t){return t.mode&1?tt&2&&Gt!==0?Gt&-Gt:Oy.transition!==null?(Ml===0&&(Ml=pg()),Ml):(t=at,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function li(t,e,n,i){if(50<qo)throw qo=0,Hd=null,Error(ge(185));ga(t,n,i),(!(tt&2)||t!==zt)&&(t===zt&&(!(tt&2)&&(xc|=n),It===4&&Qi(t,Gt)),Sn(t,i),n===1&&tt===0&&!(e.mode&1)&&(to=bt()+500,mc&&vr()))}function Sn(t,e){var n=t.callbackNode;Ox(t,e);var i=Fl(t,t===zt?Gt:0);if(i===0)n!==null&&_p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_p(n),e===1)t.tag===0?Fy(cm.bind(null,t)):Bg(cm.bind(null,t)),Ny(function(){!(tt&6)&&vr()}),n=null;else{switch(mg(i)){case 1:n=jh;break;case 4:n=hg;break;case 16:n=kl;break;case 536870912:n=fg;break;default:n=kl}n=O_(n,L_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L_(t,e){if(Sl=-1,Ml=0,tt&6)throw Error(ge(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=Fl(t,t===zt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tc(t,i);else{e=i;var r=tt;tt|=2;var s=N_();(zt!==t||Gt!==e)&&(Ci=null,to=bt()+500,Gr(t,e));do try{rS();break}catch(a){D_(t,a)}while(!0);sf(),Ql.current=s,tt=r,Lt!==null?e=0:(zt=null,Gt=0,e=It)}if(e!==0){if(e===2&&(r=pd(t),r!==0&&(i=r,e=Vd(t,r))),e===1)throw n=ha,Gr(t,0),Qi(t,i),Sn(t,bt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!nS(r)&&(e=tc(t,i),e===2&&(s=pd(t),s!==0&&(i=s,e=Vd(t,s))),e===1))throw n=ha,Gr(t,0),Qi(t,i),Sn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:Pr(t,_n,Ci);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=yf+500-bt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Md(Pr.bind(null,t,_n,Ci),e);break}Pr(t,_n,Ci);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tS(i/1960))-i,10<i){t.timeoutHandle=Md(Pr.bind(null,t,_n,Ci),i);break}Pr(t,_n,Ci);break;case 5:Pr(t,_n,Ci);break;default:throw Error(ge(329))}}}return Sn(t,bt()),t.callbackNode===n?L_.bind(null,t):null}function Vd(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=tc(t,e),t!==2&&(e=_n,_n=n,e!==null&&Gd(e)),t}function Gd(t){_n===null?_n=t:_n.push.apply(_n,t)}function nS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~xf,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function cm(t){if(tt&6)throw Error(ge(327));Ws();var e=Fl(t,0);if(!(e&1))return Sn(t,bt()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var i=pd(t);i!==0&&(e=i,n=Vd(t,i))}if(n===1)throw n=ha,Gr(t,0),Qi(t,e),Sn(t,bt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,_n,Ci),Sn(t,bt()),null}function Sf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(to=bt()+500,mc&&vr())}}function qr(t){tr!==null&&tr.tag===0&&!(tt&6)&&Ws();var e=tt;tt|=1;var n=Xn.transition,i=at;try{if(Xn.transition=null,at=1,t)return t()}finally{at=i,Xn.transition=n,tt=e,!(tt&6)&&vr()}}function Mf(){bn=ks.current,_t(ks)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dy(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(tf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:Js(),_t(xn),_t(Qt),df();break;case 5:uf(i);break;case 4:Js();break;case 13:_t(xt);break;case 19:_t(xt);break;case 10:of(i.type._context);break;case 22:case 23:Mf()}n=n.return}if(zt=t,Lt=t=cr(t.current,null),Gt=bn=e,It=0,ha=null,xf=xc=$r=0,_n=$o=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Or=null}return t}function D_(t,e){do{var n=Lt;try{if(sf(),vl.current=Zl,Kl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(Yr=0,Ot=Nt=yt=null,Xo=!1,ca=0,vf.current=null,n===null||n.return===null){It=1,ha=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Kp(o);if(g!==null){g.flags&=-257,Zp(g,o,a,s,e),g.mode&1&&qp(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){qp(s,c,e),Ef();break e}l=Error(ge(426))}}else if(vt&&a.mode&1){var h=Kp(o);if(h!==null){!(h.flags&65536)&&(h.flags|=256),Zp(h,o,a,s,e),nf(eo(l,a));break e}}s=l=eo(l,a),It!==4&&(It=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=m_(s,l,e);Gp(s,u);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ar===null||!ar.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=g_(s,a,e);Gp(s,S);break e}}s=s.return}while(s!==null)}U_(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function N_(){var t=Ql.current;return Ql.current=Zl,t===null?Zl:t}function Ef(){(It===0||It===3||It===2)&&(It=4),zt===null||!($r&268435455)&&!(xc&268435455)||Qi(zt,Gt)}function tc(t,e){var n=tt;tt|=2;var i=N_();(zt!==t||Gt!==e)&&(Ci=null,Gr(t,e));do try{iS();break}catch(r){D_(t,r)}while(!0);if(sf(),tt=n,Ql.current=i,Lt!==null)throw Error(ge(261));return zt=null,Gt=0,It}function iS(){for(;Lt!==null;)I_(Lt)}function rS(){for(;Lt!==null&&!Rx();)I_(Lt)}function I_(t){var e=F_(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?U_(t):Lt=e,vf.current=null}function U_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Lt=null;return}}else if(n=Ky(n,e,bn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);It===0&&(It=5)}function Pr(t,e,n){var i=at,r=Xn.transition;try{Xn.transition=null,at=1,sS(t,e,n,i)}finally{Xn.transition=r,at=i}return null}function sS(t,e,n,i){do Ws();while(tr!==null);if(tt&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zx(t,s),t===zt&&(Lt=zt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,O_(kl,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=at;at=1;var a=tt;tt|=4,vf.current=null,Jy(t,n),R_(n,t),Ty(yd),Ol=!!xd,yd=xd=null,t.current=n,eS(n),Px(),tt=a,at=o,Xn.transition=s}else t.current=n;if(Ba&&(Ba=!1,tr=t,ec=r),s=t.pendingLanes,s===0&&(ar=null),Nx(n.stateNode),Sn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=Bd,Bd=null,t;return ec&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===Hd?qo++:(qo=0,Hd=t):qo=0,vr(),null}function Ws(){if(tr!==null){var t=mg(ec),e=Xn.transition,n=at;try{if(Xn.transition=null,at=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,ec=0,tt&6)throw Error(ge(331));var r=tt;for(tt|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var d=be;switch(d.tag){case 0:case 11:case 15:Yo(8,d,s)}var f=d.child;if(f!==null)f.return=d,be=f;else for(;be!==null;){d=be;var p=d.sibling,g=d.return;if(A_(d),d===c){be=null;break}if(p!==null){p.return=g,be=p;break}be=g}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var h=v.sibling;v.sibling=null,v=h}while(v!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var m=t.current;for(be=m;be!==null;){o=be;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,be=_;else e:for(o=m;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(P){Tt(a,a.return,P)}if(a===o){be=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,be=S;break e}be=a.return}}if(tt=r,vr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{at=n,Xn.transition=e}}return!1}function um(t,e,n){e=eo(n,e),e=m_(t,e,1),t=or(t,e,1),e=sn(),t!==null&&(ga(t,1,e),Sn(t,e))}function Tt(t,e,n){if(t.tag===3)um(t,t,n);else for(;e!==null;){if(e.tag===3){um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=eo(n,t),t=g_(e,t,1),e=or(e,t,1),t=sn(),e!==null&&(ga(e,1,t),Sn(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Gt&n)===n&&(It===4||It===3&&(Gt&130023424)===Gt&&500>bt()-yf?Gr(t,0):xf|=n),Sn(t,e)}function k_(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=sn();t=Fi(t,e),t!==null&&(ga(t,e,n),Sn(t,n))}function aS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k_(t,n)}function lS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),k_(t,n)}var F_;F_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,qy(t,e,n);vn=!!(t.flags&131072)}else vn=!1,vt&&e.flags&1048576&&Hg(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=Ks(e,Qt.current);Gs(e,n),r=ff(null,e,i,t,r,n);var s=pf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,lf(e),r.updater=_c,e.stateNode=r,r._reactInternals=e,Rd(e,i,t,n),e=Dd(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&ef(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uS(i),t=ei(i,t),r){case 0:e=Ld(null,e,i,t,n);break e;case 1:e=em(null,e,i,t,n);break e;case 11:e=Qp(null,e,i,t,n);break e;case 14:e=Jp(null,e,i,ei(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),em(t,e,i,r,n);case 3:e:{if(y_(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yg(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ge(423)),e),e=tm(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(ge(424)),e),e=tm(t,e,i,n,r);break e}else for(Ln=sr(e.stateNode.containerInfo.firstChild),Nn=e,vt=!0,ni=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=Oi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&Ad(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sd(i,r)?o=null:s!==null&&Sd(i,s)&&(e.flags|=32),x_(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&Ad(e),null;case 13:return S_(t,e,n);case 4:return cf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Qp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Xl,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!xn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=Yn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Jp(t,e,i,r,n);case 15:return __(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),yl(t,e),e.tag=1,yn(i)?(t=!0,Gl(e)):t=!1,Gs(e,n),p_(e,i,r),Rd(e,i,r,n),Dd(null,e,i,!0,t,n);case 19:return M_(t,e,n);case 22:return v_(t,e,n)}throw Error(ge(156,e.tag))};function O_(t,e){return dg(t,e)}function cS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new cS(t,e,n,i)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uS(t){if(typeof t=="function")return wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vh)return 11;if(t===Gh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return Wr(n.children,r,s,e);case Hh:o=8,r|=8;break;case Ju:return t=Wn(12,n,e,r|2),t.elementType=Ju,t.lanes=s,t;case ed:return t=Wn(13,n,e,r),t.elementType=ed,t.lanes=s,t;case td:return t=Wn(19,n,e,r),t.elementType=td,t.lanes=s,t;case $0:return yc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X0:o=10;break e;case Y0:o=9;break e;case Vh:o=11;break e;case Gh:o=14;break e;case qi:o=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Wr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function yc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function au(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function lu(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Tf(t,e,n,i,r,s,o,a,l){return t=new dS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(s),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z_(t){if(!t)return fr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(yn(n))return zg(t,n,e)}return e}function B_(t,e,n,i,r,s,o,a,l){return t=Tf(n,i,!0,t,r,s,o,a,l),t.context=z_(null),n=t.current,i=sn(),r=lr(n),s=Ii(i,r),s.callback=e??null,or(n,s,r),t.current.lanes=r,ga(t,r,i),Sn(t,i),t}function Sc(t,e,n,i){var r=e.current,s=sn(),o=lr(r);return n=z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,o),t!==null&&(li(t,r,o,s),_l(t,r,o)),o}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Af(t,e){dm(t,e),(t=t.alternate)&&dm(t,e)}function fS(){return null}var H_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cf(t){this._internalRoot=t}Mc.prototype.render=Cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));Sc(t,e,null,null)};Mc.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Sc(null,t,null,null)}),e[ki]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&yg(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function pS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nc(o);s.call(c)}}var o=B_(e,i,t,0,null,!1,!1,"",hm);return t._reactRootContainer=o,t[ki]=o.current,ra(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nc(l);a.call(c)}}var l=Tf(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=l,t[ki]=l.current,ra(t.nodeType===8?t.parentNode:t),qr(function(){Sc(e,l,n,i)}),l}function wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nc(o);a.call(l)}}Sc(e,o,t,r)}else o=pS(n,e,t,r,i);return nc(o)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(Xh(e,n|1),Sn(e,bt()),!(tt&6)&&(to=bt()+500,vr()))}break;case 13:qr(function(){var i=Fi(t,1);if(i!==null){var r=sn();li(i,t,1,r)}}),Af(t,1)}};Yh=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=sn();li(e,t,134217728,n)}Af(t,134217728)}};_g=function(t){if(t.tag===13){var e=lr(t),n=Fi(t,e);if(n!==null){var i=sn();li(n,t,e,i)}Af(t,e)}};vg=function(){return at};xg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};dd=function(t,e,n){switch(e){case"input":if(rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pc(i);if(!r)throw Error(ge(90));K0(i),rd(i,r)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};sg=Sf;og=qr;var mS={usingClientEntryPoint:!1,Events:[va,Ps,pc,ig,rg,Sf]},Mo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gS={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{uc=Ha.inject(gS),mi=Ha}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(ge(200));return hS(t,e,null,n)};Un.createRoot=function(t,e){if(!bf(t))throw Error(ge(299));var n=!1,i="",r=H_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Tf(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,ra(t.nodeType===8?t.parentNode:t),new Cf(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return qr(t)};Un.hydrate=function(t,e,n){if(!Ec(e))throw Error(ge(200));return wc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=H_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B_(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mc(e)};Un.render=function(t,e,n){if(!Ec(e))throw Error(ge(200));return wc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(ge(40));return t._reactRootContainer?(qr(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Un.unstable_batchedUpdates=Sf;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return wc(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),V0.exports=Un;var _S=V0.exports,fm=_S;Zu.createRoot=fm.createRoot,Zu.hydrateRoot=fm.hydrateRoot;const vS=["Seating","Tables","Bedroom","Storage","Decor","Kitchen"],wl=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"}],hi=Object.fromEntries(wl.map(t=>[t.type,t])),xS=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],G_="honeycutt.design.v2";let yS=1;const yi=()=>`${Date.now().toString(36)}-${(yS++).toString(36)}`;function Oo(){return{view:"2d",tool:"select",units:"ft",ambiance:"day",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],selected:null}}function SS(){try{const t=localStorage.getItem(G_);if(!t)return Oo();const e=JSON.parse(t);return!e||!Array.isArray(e.items)?Oo():{...Oo(),...e,tool:"select",selected:null}}catch{return Oo()}}function Dn(t,e,n){return Math.max(e,Math.min(n,t))}function MS(t){return t.scale&&(t.scale={x:Dn(t.scale.x??1,.3,3),y:Dn(t.scale.y??1,.3,3),z:Dn(t.scale.z??1,.3,3)}),t}function W_(t){return t.w=Dn(t.w,.5,40),t.d=Dn(t.d,.5,40),t.height!=null&&(t.height=Dn(t.height,1.5,6)),t}function j_(t){return t.height!=null&&(t.height=Dn(t.height,1.5,6)),t.thickness!=null&&(t.thickness=Dn(t.thickness,.05,.5)),t}function Wd(t){return t.w!=null&&(t.w=Dn(t.w,.1,12)),t.h!=null&&(t.h=Dn(t.h,.1,6)),t.depth!=null&&(t.depth=Dn(t.depth,.02,3)),t.thickness!=null&&(t.thickness=Dn(t.thickness,.01,.4)),t}const jd={item:"items",room:"rooms",wall:"walls",builtin:"builtins"};function ES(t,e,n,i){const r=jd[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&MS(a),e==="room"&&W_(a),e==="wall"&&j_(a),e==="builtin"&&Wd(a),a});return{...t,[r]:s}}function cu(t,e){var n;switch(e.type){case"view":return{...t,view:e.view};case"ambiance":return{...t,ambiance:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"defaultHeight":return{...t,defaultHeight:Dn(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"addRoom":{const i=W_({uid:yi(),x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],selected:{type:"room",uid:i.uid}}}case"addWall":{const i=j_({uid:yi(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],selected:{type:"wall",uid:i.uid}}}case"addBuiltin":{const i=Wd({uid:yi(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>Wd({uid:yi(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addItem":{const i=hi[e.kind];if(!i)return t;const r={uid:yi(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return ES(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=jd[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=jd[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:yi(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:yi(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:yi(),u:o.u+.3,v:o.v+.3}:a={...o,uid:yi(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...Oo(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const wS=new Set(["addRoom","addWall","addItem","addBuiltin","addBuiltins","update","remove","duplicate","clear","reset","defaultHeight"]),uu=80;function TS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:[t.present,...t.future].slice(0,uu),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-uu),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!wS.has(e.type))return{...t,present:cu(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:cu(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-uu),present:cu(t.present,e),future:[],lastKey:i||null,lastTime:n}}const X_=Le.createContext(null);function AS({children:t}){const[e,n]=Le.useReducer(TS,void 0,()=>({past:[],present:SS(),future:[],lastKey:null,lastTime:0})),i=Le.useRef(null),r=e.present;Le.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(G_,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=Le.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return y.jsx(X_.Provider,{value:s,children:t})}function is(){const t=Le.useContext(X_);if(!t)throw new Error("useStore must be used within StoreProvider");return t}function CS(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return i?`${n}′ (${i}″)`:`${n}′`}function je(t,e){return e==="m"?`${t.toFixed(2)} m`:CS(t)}function Nr(t,e){const n=e&&e.scale||{};return{w:t.w*(n.x??1),d:t.d*(n.z??1),h:t.h*(n.y??1)}}function Es(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function Tn(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Sr="rgba(0,0,0,0.22)",pm="rgba(0,0,0,0.28)";function Y_({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,d=Math.max(.8,Math.min(s,o)*.025),f=Tn(i,.16),p=Tn(i,-.22),g=(v,h,u,m,_,S=c,P={})=>y.jsx("rect",{x:v,y:h,width:u,height:m,rx:S,ry:S,fill:_,...P});let x=null;switch(r){case"seat":{const v=o*.26,h=s*.12;x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),g(a,l,s,v,p,c)," ",g(a,l+v*.5,h,o-v*.5,p,c*.6),g(a+s-h,l+v*.5,h,o-v*.5,p,c*.6),g(a+h+d,l+v,s-2*(h+d),o-v-d,f,c*.5)]});break}case"chair":{const v=o*.22;x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),g(a,l,s,v,p,c),g(a+d,l+v,s-2*d,o-v-d,f,c*.5)]});break}case"bench":{x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),g(a+s*.05,l+o*.18,s*.9,o*.64,f,c*.4)]});break}case"round":x=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),y.jsx("circle",{cx:0,cy:0,r:s*.3,fill:f})]});break;case"table":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,p),g(a+d*1.5,l+d*1.5,s-3*d,o-3*d,i,c*.8),g(a+s*.12,l+o*.12,s*.76,o*.76,f,c*.5)]});break;case"desk":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,p),g(a+d,l+d,s-2*d,o-2*d,i,c*.7),g(a+s*.62,l+d*2,s*.34,o-d*4,f,c*.4)]});break;case"round-table":x=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:p}),y.jsx("circle",{cx:0,cy:0,r:s/2-d*1.5,fill:i}),y.jsx("circle",{cx:0,cy:0,r:s*.34,fill:f})]});break;case"bed":{const v=o*.16,h=s*.4,u=o*.18;x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),g(a,l,s,v,p,c)," ",g(a+s*.05,l+v+o*.04,h,u,f,c*.4),g(a+s*.55,l+v+o*.04,h,u,f,c*.4),g(a+s*.05,l+v+u+o*.08,s*.9,o-v-u-o*.12,Tn(i,.07),c*.3)]});break}case"cabinet":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),y.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:pm,strokeWidth:d}),y.jsx("circle",{cx:-s*.06,cy:0,r:d*1.2,fill:Sr}),y.jsx("circle",{cx:s*.06,cy:0,r:d*1.2,fill:Sr})]});break;case"wardrobe":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),y.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:pm,strokeWidth:d}),y.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Sr,strokeWidth:d*1.6}),y.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Sr,strokeWidth:d*1.6})]});break;case"drawers":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),g(a+d,l+d,s-2*d,o-2*d,f,c*.5),y.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Sr,strokeWidth:d*1.6,strokeLinecap:"round"})]});break;case"shelf":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,p),g(a+d,l+d,s-2*d,o-2*d,i,c*.4),[.3,.5,.7].map((v,h)=>y.jsx("line",{x1:a+s*.12,y1:l+o*v,x2:a+s*.88,y2:l+o*v,stroke:Sr,strokeWidth:d},h))]});break;case"tv":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,"#0c0d10",c*.4),g(a+d,l,s-2*d,o*.55,"#22303f",c*.2)]});break;case"rug":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i,c*.3),g(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:Tn(i,.25),strokeWidth:d*1.4,strokeDasharray:`${d*3} ${d*3}`})]});break;case"round-rug":x=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),y.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:Tn(i,.25),strokeWidth:d*1.4})]});break;case"plant":x=y.jsxs(y.Fragment,{children:[g(a+s*.28,l+o*.28,s*.44,o*.44,Tn("#8a6a4a",-.1),c*.4),y.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:Tn(i,.1)}),y.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),y.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:Tn(i,-.12)}),y.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:Tn(i,.18)})]});break;case"lamp":x=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:Tn(i,-.05)}),y.jsx("circle",{cx:0,cy:0,r:s*.22,fill:Tn(i,.3)})]});break;case"fridge":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),g(a+d,l+d,s-2*d,o-2*d,f,c*.4),y.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Sr,strokeWidth:d*1.8,strokeLinecap:"round"})]});break;case"counter":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,p),g(a+d,l+d,s-2*d,o-2*d,i,c*.4),g(a+s*.58,l+o*.22,s*.32,o*.56,Tn(i,-.18),c*.3)]});break;case"range":x=y.jsxs(y.Fragment,{children:[g(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([v,h],u)=>y.jsx("circle",{cx:s*v,cy:o*h,r:s*.13,fill:"none",stroke:Tn(i,.3),strokeWidth:d},u))]});break;default:x=g(a,l,s,o,i)}return y.jsx("g",{children:x})}const Jt=({children:t,size:e=22,...n})=>y.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),bS=t=>y.jsxs(Jt,{...t,children:[y.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),y.jsx("path",{d:"M3 9h18M9 9v12"})]}),RS=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),y.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),$_=t=>y.jsx(Jt,{...t,children:y.jsx("path",{d:"M12 5v14M5 12h14"})}),q_=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),y.jsx("path",{d:"M21 3v5h-5"})]}),ws=t=>y.jsxs(Jt,{...t,children:[y.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),y.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),Ir=t=>y.jsx(Jt,{...t,children:y.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),K_=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),y.jsx("circle",{cx:"16",cy:"6",r:"2"}),y.jsx("circle",{cx:"8",cy:"12",r:"2"}),y.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),Rf=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),y.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),PS=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),y.jsx("path",{d:"m3 13 9 5 9-5"})]}),LS=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M9 14 4 9l5-5"}),y.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),DS=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"m15 14 5-5-5-5"}),y.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),NS=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M12 15V3"}),y.jsx("path",{d:"m8 7 4-4 4 4"}),y.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),Z_=t=>y.jsx(Jt,{...t,children:y.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),Q_=t=>y.jsx(Jt,{...t,children:y.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),J_=t=>y.jsx(Jt,{...t,children:y.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),IS=t=>y.jsxs(Jt,{...t,children:[y.jsx("path",{d:"M3 20h18"}),y.jsx("rect",{x:"6",y:"4",width:"7",height:"16",rx:"1"}),y.jsx("path",{d:"M13 9h5v11"})]}),Yt="#d9b779",mm="#39414f",US="#c3c9d1",kS="#eef1f5",On=.1,gm=.05,du=18,_m=["n","e","s","w"],dn=(t,e)=>Math.round(t/e)*e,Lr=(t,e,n)=>Math.max(e,Math.min(n,t)),vm=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1;function hu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function xm(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Lr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function FS(){const{state:t,dispatch:e}=is(),{rooms:n,walls:i,items:r,selected:s,units:o,tool:a,defaultHeight:l}=t,c=Le.useRef(null),d=Le.useRef(null),[f,p]=Le.useState({W:360,H:540}),[g,x]=Le.useState({scale:64,panX:180,panY:270,init:!1}),[v,h]=Le.useState(null),u=Le.useRef(null);u.current=v;const m=Le.useRef(new Map),_=Le.useRef(null),S=Le.useRef(g);S.current=g;const P=Le.useRef(!1);Le.useLayoutEffect(()=>{const $=c.current;if(!$)return;const A=()=>{const H=$.clientWidth,le=$.clientHeight;p({W:H,H:le}),x(q=>q.init?q:{scale:64,panX:H/2,panY:le/2,init:!0})},ie=new ResizeObserver(A);return ie.observe($),A(),()=>ie.disconnect()},[]);const{W:T,H:C}=f;function L(){let $=1/0,A=-1/0,ie=1/0,H=-1/0;const le=(j,N)=>{$=Math.min($,j),A=Math.max(A,j),ie=Math.min(ie,N),H=Math.max(H,N)};for(const j of n)le(j.x,j.z),le(j.x+j.w,j.z+j.d);for(const j of i)le(j.x1,j.z1),le(j.x2,j.z2);for(const j of r){const N=hi[j.type],U=Nr(N,j);le(j.x-U.w/2,j.z-U.d/2),le(j.x+U.w/2,j.z+U.d/2)}if(!isFinite($)){x({scale:64,panX:T/2,panY:C/2,init:!0});return}const q=70,te=Math.max(.5,A-$),oe=Math.max(.5,H-ie),b=Lr(Math.min((T-2*q)/te,(C-2*q)/oe),14,180),E=($+A)/2,O=(ie+H)/2;x({scale:b,panX:T/2-E*b,panY:C/2-O*b,init:!0})}const G=n.length>0||i.length>0||r.length>0;Le.useLayoutEffect(()=>{f.W&&G&&!P.current&&(L(),P.current=!0)},[f.W,G]);const{scale:M,panX:w,panY:I}=g,k=($,A)=>[$*M+w,A*M+I],Y=($,A)=>[($-w)/M,(A-I)/M],re=$=>{const A=d.current.getBoundingClientRect();return[$.clientX-A.left,$.clientY-A.top]},z=(s==null?void 0:s.type)==="item"?r.find($=>$.uid===s.uid):null,ee=(s==null?void 0:s.type)==="room"?n.find($=>$.uid===s.uid):null,D=(s==null?void 0:s.type)==="wall"?i.find($=>$.uid===s.uid):null;function Z($){const A=hi[$.type],ie=Nr(A,$),[H,le]=k($.x,$.z),q=($.rot||0)*Math.PI/180,te=Math.cos(q),oe=Math.sin(q),b=ie.w*M/2,E=ie.d*M/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([O,j])=>{const N=O*b,U=j*E;return[H+N*te-U*oe,le+N*oe+U*te]})}function ce($){return{nw:k($.x,$.z),ne:k($.x+$.w,$.z),se:k($.x+$.w,$.z+$.d),sw:k($.x,$.z+$.d)}}function de($,A){const[ie,H]=Y($,A);if(z){const le=Z(z);for(let q=0;q<4;q++)if(Math.hypot($-le[q][0],A-le[q][1])<du)return{kind:"item-handle"}}if(ee){const le=ce(ee);for(const q in le)if(Math.hypot($-le[q][0],A-le[q][1])<du)return{kind:"room-handle",handle:q}}if(D)for(const le of["1","2"]){const[q,te]=k(D["x"+le],D["z"+le]);if(Math.hypot($-q,A-te)<du)return{kind:"wall-end",end:le}}for(let le=r.length-1;le>=0;le--){const q=r[le],te=hi[q.type];if(!te)continue;const oe=Nr(te,q),b=(q.rot||0)*Math.PI/180,E=ie-q.x,O=H-q.z,j=E*Math.cos(b)+O*Math.sin(b),N=-E*Math.sin(b)+O*Math.cos(b);if(Math.abs(j)<=oe.w/2+.08&&Math.abs(N)<=oe.d/2+.08)return{kind:"item",uid:q.uid}}for(let le=i.length-1;le>=0;le--){const q=i[le];if(xm(ie,H,q.x1,q.z1,q.x2,q.z2)<=q.thickness/2+.18)return{kind:"wall",uid:q.uid}}for(let le=n.length-1;le>=0;le--){const q=n[le];for(const te of _m){const[oe,b,E,O]=hu(q,te);if(xm(ie,H,oe,b,E,O)<=.18)return{kind:"roomwall",uid:q.uid,side:te}}}for(let le=n.length-1;le>=0;le--){const q=n[le];if(ie>=q.x&&ie<=q.x+q.w&&H>=q.z&&H<=q.z+q.d)return{kind:"room",uid:q.uid}}return{kind:"empty"}}function Ce($){const A=[],ie=[];for(const H of n)H.uid!==$&&(A.push(H.x,H.x+H.w),ie.push(H.z,H.z+H.d));return{xs:A,zs:ie}}function ke($,A,ie=.28){let H=null,le=ie;for(const q of A){const te=Math.abs($-q);te<le&&(le=te,H=q)}return H}const ne=($,A)=>{const ie=ke($,Ce(A).xs);return ie??dn($,On)},fe=($,A)=>{const ie=ke($,Ce(A).zs);return ie??dn($,On)},pe=$=>{const[A,ie]=re($);if(m.current.set($.pointerId,{x:A,y:ie}),d.current.setPointerCapture($.pointerId),m.current.size===2){const te=[...m.current.values()],oe=(te[0].x+te[1].x)/2,b=(te[0].y+te[1].y)/2,E=Math.hypot(te[0].x-te[1].x,te[0].y-te[1].y),O=S.current;_.current={startDist:E,startScale:O.scale,wmx:(oe-O.panX)/O.scale,wmy:(b-O.panY)/O.scale},h(null);return}if(m.current.size>2)return;const[H,le]=Y(A,ie);if(a==="room"){const te=ne(H),oe=fe(le);h({kind:"drawRoom",x0:te,z0:oe,cur:{x:te,z:oe,w:0,d:0}});return}if(a==="wall"){const te=ne(H),oe=fe(le);h({kind:"drawWall",x1:te,z1:oe,cur:{x1:te,z1:oe,x2:te,z2:oe}});return}const q=de(A,ie);switch(q.kind){case"item-handle":h({kind:"resizeItem",uid:z.uid,cxw:z.x,czw:z.z,rot:z.rot||0,c:hi[z.type]});break;case"room-handle":h({kind:"resizeRoom",uid:ee.uid,handle:q.handle,x0:ee.x,z0:ee.z,w0:ee.w,d0:ee.d});break;case"wall-end":h({kind:"wallEnd",uid:D.uid,end:q.end});break;case"item":{const te=r.find(oe=>oe.uid===q.uid);e({type:"select",sel:{type:"item",uid:q.uid}}),h({kind:"moveItem",uid:q.uid,ox:H-te.x,oz:le-te.z});break}case"wall":{const te=i.find(oe=>oe.uid===q.uid);e({type:"select",sel:{type:"wall",uid:q.uid}}),h({kind:"moveWall",uid:q.uid,ox:H,oz:le,x1:te.x1,z1:te.z1,x2:te.x2,z2:te.z2});break}case"roomwall":e({type:"select",sel:{type:"roomwall",uid:q.uid,side:q.side}}),h(null);break;case"room":{const te=n.find(oe=>oe.uid===q.uid);e({type:"select",sel:{type:"room",uid:q.uid}}),h({kind:"moveRoom",uid:q.uid,ox:H-te.x,oz:le-te.z});break}default:h({kind:"pan",sx:A,sy:ie,panX:S.current.panX,panY:S.current.panY,moved:!1})}},xe=$=>{const[A,ie]=re($);if(m.current.has($.pointerId)&&m.current.set($.pointerId,{x:A,y:ie}),_.current&&m.current.size>=2){const te=[...m.current.values()],oe=(te[0].x+te[1].x)/2,b=(te[0].y+te[1].y)/2,E=Math.hypot(te[0].x-te[1].x,te[0].y-te[1].y),O=_.current,j=Lr(O.startScale*(E/O.startDist),12,220);x({scale:j,panX:oe-O.wmx*j,panY:b-O.wmy*j,init:!0});return}const H=u.current;if(!H)return;const[le,q]=Y(A,ie);if(H.kind==="pan")!H.moved&&Math.hypot(A-H.sx,ie-H.sy)>4&&(H.moved=!0),x(te=>({...te,panX:H.panX+(A-H.sx),panY:H.panY+(ie-H.sy)}));else if(H.kind==="drawRoom"){const te=ne(le),oe=fe(q);h(b=>({...b,cur:{x:Math.min(b.x0,te),z:Math.min(b.z0,oe),w:Math.abs(te-b.x0),d:Math.abs(oe-b.z0)}}))}else if(H.kind==="drawWall")h(te=>({...te,cur:{x1:te.x1,z1:te.z1,x2:ne(le),z2:fe(q)}}));else if(H.kind==="moveItem")e({type:"update",sel:{type:"item",uid:H.uid},patch:{x:dn(le-H.ox,gm),z:dn(q-H.oz,gm)},mergeKey:`mv:${H.uid}`});else if(H.kind==="resizeItem"){const te=le-H.cxw,oe=q-H.czw,b=H.rot*Math.PI/180,E=te*Math.cos(b)+oe*Math.sin(b),O=-te*Math.sin(b)+oe*Math.cos(b),j=Lr(2*Math.max(.1,Math.abs(E))/H.c.w,.3,3),N=Lr(2*Math.max(.1,Math.abs(O))/H.c.d,.3,3),U=Lr(Math.sqrt(j*N),.3,3);e({type:"update",sel:{type:"item",uid:H.uid},patch:{scale:{x:j,y:U,z:N}},mergeKey:`sz:${H.uid}`})}else if(H.kind==="moveRoom"){const te=n.find(E=>E.uid===H.uid);let oe=le-H.ox,b=q-H.oz;if(te){const{xs:E,zs:O}=Ce(H.uid),j=ke(oe,E),N=ke(oe+te.w,E);j!=null&&(N==null||Math.abs(oe-j)<=Math.abs(oe+te.w-N))?oe=j:N!=null?oe=N-te.w:oe=dn(oe,On);const U=ke(b,O),ae=ke(b+te.d,O);U!=null&&(ae==null||Math.abs(b-U)<=Math.abs(b+te.d-ae))?b=U:ae!=null?b=ae-te.d:b=dn(b,On)}e({type:"update",sel:{type:"room",uid:H.uid},patch:{x:oe,z:b},mergeKey:`mv:${H.uid}`})}else if(H.kind==="resizeRoom"){let te=H.x0,oe=H.z0,b=H.x0+H.w0,E=H.z0+H.d0;const{xs:O,zs:j}=Ce(H.uid),N=ae=>{const X=ke(ae,O);return X??dn(ae,On)},U=ae=>{const X=ke(ae,j);return X??dn(ae,On)};H.handle.includes("e")&&(b=Math.max(te+.5,N(le))),H.handle.includes("w")&&(te=Math.min(b-.5,N(le))),H.handle.includes("s")&&(E=Math.max(oe+.5,U(q))),H.handle.includes("n")&&(oe=Math.min(E-.5,U(q))),e({type:"update",sel:{type:"room",uid:H.uid},patch:{x:te,z:oe,w:b-te,d:E-oe},mergeKey:`rs:${H.uid}`})}else if(H.kind==="moveWall"){const te=dn(le-H.ox,On),oe=dn(q-H.oz,On);e({type:"update",sel:{type:"wall",uid:H.uid},patch:{x1:H.x1+te,z1:H.z1+oe,x2:H.x2+te,z2:H.z2+oe},mergeKey:`mv:${H.uid}`})}else if(H.kind==="wallEnd"){const te=H.end==="1"?{x1:dn(le,On),z1:dn(q,On)}:{x2:dn(le,On),z2:dn(q,On)};e({type:"update",sel:{type:"wall",uid:H.uid},patch:te,mergeKey:`we:${H.uid}`})}},Oe=$=>{m.current.delete($.pointerId),m.current.size<2&&(_.current=null);const A=u.current;A&&(A.kind==="drawRoom"&&A.cur.w>.3&&A.cur.d>.3?(e({type:"addRoom",x:A.cur.x,z:A.cur.z,w:A.cur.w,d:A.cur.d,height:l}),e({type:"tool",tool:"select"})):A.kind==="drawWall"&&Math.hypot(A.cur.x2-A.cur.x1,A.cur.z2-A.cur.z1)>.2?(e({type:"addWall",...A.cur,height:l}),e({type:"tool",tool:"select"})):A.kind==="pan"&&!A.moved&&e({type:"select",sel:null})),m.current.size===0&&h(null);try{d.current.releasePointerCapture($.pointerId)}catch{}},Fe=$=>{const[A,ie]=re($),H=S.current,le=Lr(H.scale*($.deltaY<0?1.1:.9),12,220),q=(A-H.panX)/H.scale,te=(ie-H.panY)/H.scale;x({scale:le,panX:A-q*le,panY:ie-te*le,init:!0})},Xe=[];{const[$]=Y(0,0),[A]=Y(T,0),[,ie]=Y(0,0),[,H]=Y(0,C),le=Math.max(A-$,H-ie),q=le>60?5:1;if(le/q<240){for(let te=Math.ceil($/q)*q;te<=A;te+=q){const[oe]=k(te,0),b=Math.abs(te)<1e-6;Xe.push(y.jsx("line",{x1:oe,y1:0,x2:oe,y2:C,stroke:"#000",strokeOpacity:b?.16:.055,strokeWidth:1},`v${te}`))}for(let te=Math.ceil(ie/q)*q;te<=H;te+=q){const[,oe]=k(0,te),b=Math.abs(te)<1e-6;Xe.push(y.jsx("line",{x1:0,y1:oe,x2:T,y2:oe,stroke:"#000",strokeOpacity:b?.16:.055,strokeWidth:1},`h${te}`))}}}const Je=n.length===0&&i.length===0&&r.length===0;return y.jsxs("div",{className:"editor2d",ref:c,children:[y.jsxs("svg",{ref:d,onPointerDown:pe,onPointerMove:xe,onPointerUp:Oe,onPointerCancel:Oe,onWheel:Fe,style:{touchAction:"none",cursor:a==="select"?"default":"crosshair"},children:[y.jsx("defs",{children:y.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:y.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),y.jsx("rect",{x:0,y:0,width:T,height:C,fill:"transparent"}),y.jsx("g",{pointerEvents:"none",children:Xe}),n.map($=>{const[A,ie]=k($.x,$.z);return y.jsx("rect",{x:A,y:ie,width:$.w*M,height:$.d*M,fill:kS,pointerEvents:"none"},$.uid)}),n.map($=>y.jsx("g",{pointerEvents:"none",children:_m.map(A=>{const[ie,H,le,q]=hu($,A),[te,oe]=k(ie,H),[b,E]=k(le,q),O=vm($,A),j=(s==null?void 0:s.type)==="roomwall"&&s.uid===$.uid&&s.side===A;return y.jsx("line",{x1:te,y1:oe,x2:b,y2:E,stroke:j?Yt:O?mm:US,strokeWidth:j?6:O?4:2,strokeLinecap:"round",strokeDasharray:O?void 0:"7 7"},A)})},$.uid)),ee&&(()=>{const[$,A]=k(ee.x,ee.z),ie=ee.w*M;return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:$,y:A,width:ie,height:ee.d*M,fill:"none",stroke:Yt,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),y.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[y.jsx("rect",{x:$+ie/2-78,y:A-25,width:156,height:19,rx:9.5,fill:Yt}),y.jsxs("text",{x:$+ie/2,y:A-11,textAnchor:"middle",children:[je(ee.w,o)," × ",je(ee.d,o)]})]}),Object.entries(ce(ee)).map(([H,[le,q]])=>y.jsx("circle",{cx:le,cy:q,r:7,fill:Yt,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},H))]})})(),i.map($=>{const[A,ie]=k($.x1,$.z1),[H,le]=k($.x2,$.z2),q=(D==null?void 0:D.uid)===$.uid;return y.jsx("line",{x1:A,y1:ie,x2:H,y2:le,stroke:q?Yt:mm,strokeWidth:Math.max(5,$.thickness*M),strokeLinecap:"round",pointerEvents:"none"},$.uid)}),D&&(()=>{const[$,A]=k(D.x1,D.z1),[ie,H]=k(D.x2,D.z2);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("circle",{cx:$,cy:A,r:7,fill:"#fff",stroke:Yt,strokeWidth:2.5,filter:"url(#softshadow)"}),y.jsx("circle",{cx:ie,cy:H,r:7,fill:"#fff",stroke:Yt,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),r.map($=>{const A=hi[$.type];if(!A)return null;const[ie,H]=k($.x,$.z),le=Nr(A,$),q=le.w*M,te=le.d*M,oe=(z==null?void 0:z.uid)===$.uid;return y.jsxs("g",{transform:`translate(${ie} ${H}) rotate(${$.rot||0})`,pointerEvents:"none",children:[y.jsx("g",{filter:"url(#softshadow)",opacity:A.shape==="rug"||A.shape==="round-rug"?.96:1,children:y.jsx(Y_,{item:{...A,color:$.color||A.color},wpx:q,dpx:te})}),oe&&y.jsx("rect",{x:-q/2-5,y:-te/2-5,width:q+10,height:te+10,rx:7,fill:"none",stroke:Yt,strokeWidth:2,strokeDasharray:"6 5"})]},$.uid)}),(v==null?void 0:v.kind)==="drawRoom"&&(()=>{const[$,A]=k(v.cur.x,v.cur.z);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:$,y:A,width:v.cur.w*M,height:v.cur.d*M,fill:Yt,fillOpacity:.12,stroke:Yt,strokeWidth:3,strokeDasharray:"6 5"}),y.jsxs("text",{x:$+v.cur.w*M/2,y:A-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[je(v.cur.w,o)," × ",je(v.cur.d,o)]})]})})(),(v==null?void 0:v.kind)==="drawWall"&&(()=>{const[$,A]=k(v.cur.x1,v.cur.z1),[ie,H]=k(v.cur.x2,v.cur.z2),le=Math.hypot(v.cur.x2-v.cur.x1,v.cur.z2-v.cur.z1);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("line",{x1:$,y1:A,x2:ie,y2:H,stroke:Yt,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),y.jsx("text",{x:($+ie)/2,y:(A+H)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:je(le,o)})]})})(),z&&(()=>{const $=Z(z),A=hi[z.type],ie=Nr(A,z),[H,le]=k(z.x,z.z),q=Math.hypot(ie.w*M,ie.d*M)/2;return y.jsxs("g",{pointerEvents:"none",children:[$.map(([te,oe],b)=>y.jsx("circle",{cx:te,cy:oe,r:7,fill:"#fff",stroke:Yt,strokeWidth:2.5,filter:"url(#softshadow)"},b)),y.jsx("rect",{x:H-78,y:le-q-30,width:156,height:20,rx:10,fill:Yt}),y.jsxs("text",{x:H,y:le-q-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[je(ie.w,o)," × ",je(ie.d,o)]})]})})(),(s==null?void 0:s.type)==="roomwall"&&(()=>{const $=n.find(j=>j.uid===s.uid);if(!$)return null;const[A,ie,H,le]=hu($,s.side),[q,te]=k(A,ie),[oe,b]=k(H,le),E=Math.hypot(H-A,le-ie),O=vm($,s.side);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("circle",{cx:q,cy:te,r:6,fill:"#fff",stroke:Yt,strokeWidth:2.5,filter:"url(#softshadow)"}),y.jsx("circle",{cx:oe,cy:b,r:6,fill:"#fff",stroke:Yt,strokeWidth:2.5,filter:"url(#softshadow)"}),y.jsx("rect",{x:(q+oe)/2-60,y:(te+b)/2-11,width:120,height:20,rx:10,fill:Yt}),y.jsx("text",{x:(q+oe)/2,y:(te+b)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:O?je(E,o):"opening"})]})})()]}),y.jsx("button",{className:"recenter",onClick:L,"aria-label":"Fit to view",children:y.jsx(Rf,{size:20})}),Je&&y.jsxs("div",{className:"empty",children:[y.jsx("b",{children:"Start your floor plan"}),y.jsxs("span",{children:["Tap ",y.jsx("strong",{children:"Room"})," below and drag on the canvas to draw a room. Add walls with the ",y.jsx("strong",{children:"Wall"})," tool."]})]}),y.jsx("div",{className:"hint",children:a==="room"?"Drag to draw a room":a==="wall"?"Drag to draw a wall":z?"Drag to move · drag white corners to resize":ee?"Drag inside to move · corners to resize · tap a wall to edit it":D?"Drag the wall or its endpoints":(s==null?void 0:s.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}const OS={n:"North",e:"East",s:"South",w:"West"};function ev(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function zS(t,e){const n=[];return t.forEach((i,r)=>{for(const s of["n","e","s","w"])n.push({ref:{kind:"room",uid:i.uid,side:s},label:`Room ${r+1} · ${OS[s]}`})}),e.forEach((i,r)=>n.push({ref:{kind:"wall",uid:i.uid},label:`Wall ${r+1}`})),n}function fu(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const hn="#d9b779",Et=.05,pu=18,wt=(t,e)=>Math.round(t/e)*e,Br=(t,e,n)=>Math.max(e,Math.min(n,t)),BS=(t,e,n,i,r,s)=>{const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Br(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))},zo={color:"#c79a6b",tex:"wood:oak"},ym={color:"#7a543a",tex:"wood:walnut"},HS={color:"#d7d2c8",tex:"stone:white"},VS=[{id:"bunk",name:"Bunk bed"},{id:"base",name:"Base cabinets"},{id:"upper",name:"Upper cabinets"},{id:"cubby",name:"Cubby wall"},{id:"shelves",name:"Open shelves"},{id:"wardrobe",name:"Wardrobe"}];function GS(t,e,n){const i=e.length,r=e.height,s=[],o=(a,l,c,d,f,p="panel",g=zo)=>s.push({wall:n,u:Math.max(0,a),v:Math.max(0,l),w:c,h:d,depth:f,kind:p,color:g.color,tex:g.tex});if(t==="bunk"){const a=Math.min(i,2.03),l=1;o(0,0,.1,1.85,l),o(a-.1,0,.1,1.85,l),o(0,.35,a,.12,l),o(0,1.45,a,.12,l),o(0,1.6,a,.32,.05)}else if(t==="base"){const l=Math.max(1,Math.floor(i/.6)),c=l*.6;for(let d=0;d<l;d++)o(d*.6,0,.6-.01,.9,.6);o(0,.9,c,.04,.64,"panel",HS)}else if(t==="upper"){const l=Math.max(1,Math.floor(i/.6));for(let c=0;c<l;c++)o(c*.6,1.45,.6-.01,.7,.32)}else if(t==="cubby"||t==="shelves"){const a=t==="shelves"?1:Br(Math.round(i/.5),2,6),l=Br(Math.round(r*.85/.45),2,6),c=i/a,d=Math.min(.5,r*.85/l);for(let f=0;f<l;f++)for(let p=0;p<a;p++)o(p*c,f*d,c,d,.4,"cubby")}else if(t==="wardrobe"){const a=Math.min(i,1.2),l=Math.min(r,2);o(0,0,a/2-.005,l,.6,"panel",ym),o(a/2,0,a/2,l,.6,"panel",ym)}return s}function WS(){const{state:t,dispatch:e}=is(),{rooms:n,walls:i,builtins:r,selected:s,units:o}=t,a=Le.useRef(null),l=Le.useRef(null),[c,d]=Le.useState({W:360,H:540}),[f,p]=Le.useState({scale:64,panX:60,panY:460,init:!1}),[g,x]=Le.useState("box"),[v,h]=Le.useState(0),[u,m]=Le.useState(!1),[_,S]=Le.useState(null),P=Le.useRef(null);P.current=_;const T=Le.useRef(new Map),C=Le.useRef(null),L=Le.useRef(f);L.current=f;const G=zS(n,i),M=Math.min(v,Math.max(0,G.length-1)),w=G[M],I=w?ev(w.ref,n,i):null,k=Le.useRef(!1);Le.useEffect(()=>{if(!(k.current||!G.length)&&(k.current=!0,s&&(s.type==="wall"||s.type==="roomwall"))){const N=s.type==="wall"?{kind:"wall",uid:s.uid}:{kind:"room",uid:s.uid,side:s.side},U=G.findIndex(ae=>fu(ae.ref,N));U>=0&&h(U)}},[]),Le.useLayoutEffect(()=>{const N=a.current;if(!N)return;const U=new ResizeObserver(()=>d({W:N.clientWidth,H:N.clientHeight}));return U.observe(N),d({W:N.clientWidth,H:N.clientHeight}),()=>U.disconnect()},[]);const{W:Y,H:re}=c,{scale:z,panX:ee,panY:D}=f,Z=(N,U)=>[N*z+ee,D-U*z],ce=(N,U)=>[(N-ee)/z,(D-U)/z],de=N=>{const U=l.current.getBoundingClientRect();return[N.clientX-U.left,N.clientY-U.top]};function Ce(){if(!I||!Y){p(ae=>({...ae,init:!0}));return}const N=70,U=Br(Math.min((Y-2*N)/Math.max(.5,I.length),(re-2*N)/Math.max(.5,I.height)),14,200);p({scale:U,panX:Y/2-I.length/2*U,panY:re/2+I.height/2*U,init:!0})}const ke=I?`${w.label}`:"none";Le.useLayoutEffect(()=>{P.current||Ce()},[ke,Y,re]);const ne=I?r.filter(N=>fu(N.wall,w.ref)):[],fe=(s==null?void 0:s.type)==="builtin"?r.find(N=>N.uid===s.uid):null,pe=fe&&I&&fu(fe.wall,w.ref)?fe:null,xe=N=>[Z(N.u,N.v),Z(N.u+N.w,N.v),Z(N.u+N.w,N.v+N.h),Z(N.u,N.v+N.h)];function Oe(N,U){const[ae,X]=ce(N,U);if(pe)if(pe.kind==="board")for(const ue of["1","2"]){const[ve,K]=Z(pe["u"+ue],pe["v"+ue]);if(Math.hypot(N-ve,U-K)<pu)return{kind:"b-end",end:ue}}else{const ue=xe(pe),ve=[2,3,0,1];for(let K=0;K<4;K++)if(Math.hypot(N-ue[K][0],U-ue[K][1])<pu){const me=xe(pe)[ve[K]];return{kind:"b-handle",fixedU:(me[0]-ee)/z,fixedV:(D-me[1])/z}}}if(I&&!pe){const ue=[["len",I.length,I.height/2],["ht",I.length/2,I.height],["both",I.length,I.height]];for(const[ve,K,me]of ue){const[Me,Ie]=Z(K,me);if(Math.hypot(N-Me,U-Ie)<pu)return{kind:"wall-handle",which:ve}}}for(let ue=ne.length-1;ue>=0;ue--){const ve=ne[ue];if(ve.kind==="board"){if(BS(ae,X,ve.u1,ve.v1,ve.u2,ve.v2)<=ve.thickness/2+.1)return{kind:"builtin",uid:ve.uid}}else if(ae>=ve.u&&ae<=ve.u+ve.w&&X>=ve.v&&X<=ve.v+ve.h)return{kind:"builtin",uid:ve.uid}}return{kind:"empty"}}const Fe=N=>{const[U,ae]=de(N);if(T.current.set(N.pointerId,{x:U,y:ae}),l.current.setPointerCapture(N.pointerId),T.current.size===2){const K=[...T.current.values()],me=(K[0].x+K[1].x)/2,Me=(K[0].y+K[1].y)/2,Ie=Math.hypot(K[0].x-K[1].x,K[0].y-K[1].y),Se=L.current;C.current={startDist:Ie,startScale:Se.scale,wmx:(me-Se.panX)/Se.scale,wmy:(Se.panY-Me)/Se.scale},S(null);return}if(T.current.size>2||!I)return;const[X,ue]=ce(U,ae),ve=Oe(U,ae);if(ve.kind==="b-handle")S({kind:"resizeB",uid:pe.uid,fixedU:ve.fixedU,fixedV:ve.fixedV});else if(ve.kind==="b-end")S({kind:"endB",uid:pe.uid,end:ve.end});else if(ve.kind==="wall-handle")S({kind:"resizeWall",which:ve.which});else if(ve.kind==="builtin"){const K=ne.find(me=>me.uid===ve.uid);e({type:"select",sel:{type:"builtin",uid:ve.uid}}),K.kind==="board"?S({kind:"moveBoard",uid:ve.uid,pu:X,pv:ue,u1:K.u1,v1:K.v1,u2:K.u2,v2:K.v2}):S({kind:"moveB",uid:ve.uid,ou:X-K.u,ov:ue-K.v})}else if(g==="box")S({kind:"drawBox",u0:wt(X,Et),v0:wt(ue,Et),cur:{u:wt(X,Et),v:wt(ue,Et),w:0,h:0}});else if(g==="line"){const K=wt(X,Et),me=wt(ue,Et);S({kind:"drawLine",u1:K,v1:me,cur:{u1:K,v1:me,u2:K,v2:me}})}else S({kind:"pan",sx:U,sy:ae,panX:L.current.panX,panY:L.current.panY,moved:!1})},Xe=N=>{const[U,ae]=de(N);if(T.current.has(N.pointerId)&&T.current.set(N.pointerId,{x:U,y:ae}),C.current&&T.current.size>=2){const K=[...T.current.values()],me=(K[0].x+K[1].x)/2,Me=(K[0].y+K[1].y)/2,Ie=Math.hypot(K[0].x-K[1].x,K[0].y-K[1].y),Se=C.current,Ke=Br(Se.startScale*(Ie/Se.startDist),12,240);p({scale:Ke,panX:me-Se.wmx*Ke,panY:Me+Se.wmy*Ke,init:!0});return}const X=P.current;if(!X)return;const[ue,ve]=ce(U,ae);if(X.kind==="pan")!X.moved&&Math.hypot(U-X.sx,ae-X.sy)>4&&(X.moved=!0),p(K=>({...K,panX:X.panX+(U-X.sx),panY:X.panY+(ae-X.sy)}));else if(X.kind==="drawBox"){const K=wt(ue,Et),me=wt(ve,Et);S(Me=>({...Me,cur:{u:Math.min(Me.u0,K),v:Math.min(Me.v0,me),w:Math.abs(K-Me.u0),h:Math.abs(me-Me.v0)}}))}else if(X.kind==="drawLine"){let K=wt(ue,Et),me=wt(ve,Et);Math.abs(K-X.u1)<.08&&(K=X.u1),Math.abs(me-X.v1)<.08&&(me=X.v1),S(Me=>({...Me,cur:{u1:Me.u1,v1:Me.v1,u2:K,v2:me}}))}else if(X.kind==="moveB")e({type:"update",sel:{type:"builtin",uid:X.uid},patch:{u:wt(ue-X.ou,Et),v:wt(ve-X.ov,Et)},mergeKey:`mb:${X.uid}`});else if(X.kind==="moveBoard"){const K=wt(ue-X.pu,Et),me=wt(ve-X.pv,Et);e({type:"update",sel:{type:"builtin",uid:X.uid},patch:{u1:X.u1+K,v1:X.v1+me,u2:X.u2+K,v2:X.v2+me},mergeKey:`mb:${X.uid}`})}else if(X.kind==="endB"){const K=X.end==="1"?{u1:wt(ue,Et),v1:wt(ve,Et)}:{u2:wt(ue,Et),v2:wt(ve,Et)};e({type:"update",sel:{type:"builtin",uid:X.uid},patch:K,mergeKey:`eb:${X.uid}`})}else if(X.kind==="resizeB"){const K=wt(ue,Et),me=wt(ve,Et);e({type:"update",sel:{type:"builtin",uid:X.uid},patch:{u:Math.min(X.fixedU,K),v:Math.min(X.fixedV,me),w:Math.max(.1,Math.abs(K-X.fixedU)),h:Math.max(.1,Math.abs(me-X.fixedV))},mergeKey:`rb:${X.uid}`})}else if(X.kind==="resizeWall"){let K=I.length,me=I.height;(X.which==="len"||X.which==="both")&&(K=Math.max(.5,wt(ue,Et))),(X.which==="ht"||X.which==="both")&&(me=Br(wt(ve,Et),1.5,6));const Me=w.ref;if(Me.kind==="room"){const Ie={height:me};Me.side==="n"||Me.side==="s"?Ie.w=K:Ie.d=K,e({type:"update",sel:{type:"room",uid:Me.uid},patch:Ie,mergeKey:`ws:${Me.uid}`})}else e({type:"update",sel:{type:"wall",uid:Me.uid},patch:{height:me,x2:I.ox+I.dirx*K,z2:I.oz+I.dirz*K},mergeKey:`ws:${Me.uid}`})}},Je=N=>{T.current.delete(N.pointerId),T.current.size<2&&(C.current=null);const U=P.current;U&&I&&(U.kind==="drawBox"&&U.cur.w>.1&&U.cur.h>.1?(e({type:"addBuiltin",builtin:{wall:w.ref,u:U.cur.u,v:U.cur.v,w:U.cur.w,h:U.cur.h,depth:.5,kind:"cubby",color:zo.color,tex:zo.tex}}),x("select")):U.kind==="drawLine"&&Math.hypot(U.cur.u2-U.cur.u1,U.cur.v2-U.cur.v1)>.05?e({type:"addBuiltin",builtin:{wall:w.ref,kind:"board",u1:U.cur.u1,v1:U.cur.v1,u2:U.cur.u2,v2:U.cur.v2,thickness:.05,depth:.04,color:zo.color,tex:zo.tex}}):U.kind==="pan"&&!U.moved&&e({type:"select",sel:null})),U&&U.kind==="resizeWall"&&Ce(),T.current.size===0&&S(null);try{l.current.releasePointerCapture(N.pointerId)}catch{}},$=N=>{const[U,ae]=de(N),X=L.current,ue=Br(X.scale*(N.deltaY<0?1.1:.9),12,240);p({scale:ue,panX:U-(U-X.panX)/X.scale*ue,panY:ae+(X.panY-ae)/X.scale*ue,init:!0})},A=N=>{I&&(e({type:"addBuiltins",list:GS(N,I,w.ref)}),m(!1),x("select"))},ie=[],H=[],le=[];let q=0,te=0,oe=0;if(I){for(let ae=0;ae<=I.length+1e-6;ae+=.5){const[X]=Z(ae,0);ie.push(y.jsx("line",{x1:X,y1:Z(0,0)[1],x2:X,y2:Z(0,I.height)[1],stroke:"#000",strokeOpacity:Math.abs(ae%1)<1e-6?.1:.045,strokeWidth:1},`gu${ae.toFixed(2)}`))}for(let ae=0;ae<=I.height+1e-6;ae+=.5){const[,X]=Z(0,ae);ie.push(y.jsx("line",{x1:Z(0,0)[0],y1:X,x2:Z(I.length,0)[0],y2:X,stroke:"#000",strokeOpacity:Math.abs(ae%1)<1e-6?.1:.045,strokeWidth:1},`gv${ae.toFixed(2)}`))}q=Z(0,0)[1],te=Z(0,I.height)[1],oe=Z(0,0)[0];const N=o==="m"?.5:.3048;let U=0;for(let ae=0;ae<=I.height+1e-6;ae+=N,U++){const X=Z(0,ae)[1],ue=U%2===0;H.push(y.jsx("line",{x1:oe-7,y1:X,x2:oe,y2:X,stroke:"#9aa1ab",strokeWidth:ue?1.6:1},`t${U}`)),ue&&ae>.05&&H.push(y.jsx("text",{x:oe-10,y:X+3,textAnchor:"end",fontSize:9.5,fill:"#8a92a0",fontFamily:"-apple-system, system-ui, sans-serif",children:je(ae,o)},`rl${U}`))}for(let ae=oe%16;ae<Y;ae+=16)le.push(y.jsx("line",{x1:ae,y1:q,x2:ae-10,y2:q+12,stroke:"#39414f",strokeOpacity:.22,strokeWidth:1},`hx${ae}`))}if(!G.length)return y.jsx("div",{className:"editor2d elevation",ref:a,children:y.jsxs("div",{className:"empty",children:[y.jsx("b",{children:"No walls yet"}),y.jsxs("span",{children:["Go to ",y.jsx("strong",{children:"Plan"})," and draw a room or wall, then come back to design built-ins against it."]})]})});const[b,E]=I?Z(0,I.height):[0,0],O=I?I.length*z:0,j=I?I.height*z:0;return y.jsxs("div",{className:"editor2d elevation",ref:a,children:[y.jsxs("svg",{ref:l,onPointerDown:Fe,onPointerMove:Xe,onPointerUp:Je,onPointerCancel:Je,onWheel:$,style:{touchAction:"none",cursor:g==="select"?"default":"crosshair"},children:[y.jsxs("defs",{children:[y.jsx("filter",{id:"esh",x:"-30%",y:"-30%",width:"160%",height:"160%",children:y.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})}),y.jsxs("linearGradient",{id:"wallgrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[y.jsx("stop",{offset:"0",stopColor:"#f6f7f9"}),y.jsx("stop",{offset:"1",stopColor:"#e2e6ec"})]})]}),y.jsx("rect",{x:0,y:0,width:Y,height:re,fill:"transparent"}),I&&y.jsxs(y.Fragment,{children:[y.jsx("rect",{x:b,y:E,width:O,height:j,fill:"url(#wallgrad)",stroke:"#39414f",strokeWidth:2.5,pointerEvents:"none"}),y.jsx("line",{x1:b,y1:te,x2:b+O,y2:te,stroke:"#39414f",strokeOpacity:.5,strokeWidth:2,strokeDasharray:"7 6",pointerEvents:"none"}),y.jsx("g",{pointerEvents:"none",children:ie}),y.jsx("g",{pointerEvents:"none",children:H}),y.jsx("line",{x1:0,y1:q,x2:Y,y2:q,stroke:"#39414f",strokeWidth:3.5,pointerEvents:"none"}),y.jsx("g",{pointerEvents:"none",children:le}),y.jsx("text",{x:b+7,y:q-7,fontSize:10,fontWeight:700,letterSpacing:"1.5",fill:"#39414f",opacity:.45,pointerEvents:"none",children:"FLOOR"}),ne.map(N=>{const U=(pe==null?void 0:pe.uid)===N.uid;if(N.kind==="board"){const[ve,K]=Z(N.u1,N.v1),[me,Me]=Z(N.u2,N.v2);return y.jsx("line",{x1:ve,y1:K,x2:me,y2:Me,stroke:U?hn:N.color,strokeWidth:Math.max(4,N.thickness*z),strokeLinecap:"round",pointerEvents:"none"},N.uid)}const[ae,X]=Z(N.u,N.v+N.h),ue=N.kind==="cubby";return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:ae,y:X,width:N.w*z,height:N.h*z,fill:ue?"#f6f3ec":N.color,stroke:U?hn:N.color,strokeWidth:ue?Math.max(4,.05*z):2,filter:"url(#esh)"}),U&&y.jsx("rect",{x:ae-4,y:X-4,width:N.w*z+8,height:N.h*z+8,rx:6,fill:"none",stroke:hn,strokeWidth:2,strokeDasharray:"6 5"})]},N.uid)}),(_==null?void 0:_.kind)==="drawBox"&&(()=>{const[N,U]=Z(_.cur.u,_.cur.v+_.cur.h);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:N,y:U,width:_.cur.w*z,height:_.cur.h*z,fill:hn,fillOpacity:.12,stroke:hn,strokeWidth:3,strokeDasharray:"6 5"}),y.jsxs("text",{x:N+_.cur.w*z/2,y:U-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[je(_.cur.w,o)," × ",je(_.cur.h,o)]})]})})(),(_==null?void 0:_.kind)==="drawLine"&&(()=>{const[N,U]=Z(_.cur.u1,_.cur.v1),[ae,X]=Z(_.cur.u2,_.cur.v2),ue=Math.hypot(_.cur.u2-_.cur.u1,_.cur.v2-_.cur.v1);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("line",{x1:N,y1:U,x2:ae,y2:X,stroke:hn,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),y.jsx("text",{x:(N+ae)/2,y:(U+X)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:je(ue,o)})]})})(),pe&&pe.kind==="board"&&(()=>{const[N,U]=Z(pe.u1,pe.v1),[ae,X]=Z(pe.u2,pe.v2);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("circle",{cx:N,cy:U,r:7,fill:"#fff",stroke:hn,strokeWidth:2.5,filter:"url(#esh)"}),y.jsx("circle",{cx:ae,cy:X,r:7,fill:"#fff",stroke:hn,strokeWidth:2.5,filter:"url(#esh)"})]})})(),pe&&pe.kind!=="board"&&(()=>{const N=xe(pe),[U,ae]=Z(pe.u+pe.w/2,pe.v+pe.h);return y.jsxs("g",{pointerEvents:"none",children:[N.map(([X,ue],ve)=>y.jsx("circle",{cx:X,cy:ue,r:7,fill:"#fff",stroke:hn,strokeWidth:2.5,filter:"url(#esh)"},ve)),y.jsx("rect",{x:U-78,y:ae-28,width:156,height:20,rx:10,fill:hn}),y.jsxs("text",{x:U,y:ae-14,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[je(pe.w,o)," × ",je(pe.h,o)]})]})})(),!pe&&(()=>{const N=Z(I.length/2,I.height),U=Z(I.length,I.height/2),ae=Z(I.length,I.height),[X,ue]=Z(0,I.height);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:X+8,y:ue+8,width:148,height:20,rx:10,fill:hn}),y.jsxs("text",{x:X+82,y:ue+22,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[je(I.length,o)," W × ",je(I.height,o)," H"]}),y.jsx("circle",{cx:N[0],cy:N[1],r:7.5,fill:hn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),y.jsx("circle",{cx:U[0],cy:U[1],r:7.5,fill:hn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),y.jsx("circle",{cx:ae[0],cy:ae[1],r:8,fill:hn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"})]})})()]})]}),y.jsxs("div",{className:"wall-picker",children:[y.jsx("button",{onClick:()=>h((M-1+G.length)%G.length),"aria-label":"Previous wall",children:"‹"}),y.jsx("span",{children:w==null?void 0:w.label}),y.jsx("button",{onClick:()=>h((M+1)%G.length),"aria-label":"Next wall",children:"›"})]}),y.jsxs("div",{className:"toolbar",style:{top:60},children:[y.jsxs("button",{className:g==="select"?"active":"",onClick:()=>x("select"),children:[y.jsx(Z_,{size:16})," Select"]}),y.jsxs("button",{className:g==="box"?"active":"",onClick:()=>x("box"),children:[y.jsx(Q_,{size:16})," Box"]}),y.jsxs("button",{className:g==="line"?"active":"",onClick:()=>x("line"),children:[y.jsx(J_,{size:16})," Board"]}),y.jsxs("button",{className:u?"active":"",onClick:()=>m(N=>!N),children:[y.jsx(PS,{size:16})," Presets"]})]}),u&&y.jsx("div",{className:"preset-menu",children:VS.map(N=>y.jsx("button",{onClick:()=>A(N.id),children:N.name},N.id))}),y.jsx("button",{className:"recenter",onClick:Ce,"aria-label":"Fit to view",children:y.jsx(Rf,{size:20})}),y.jsx("div",{className:"hint",children:pe?"Drag to move · drag handles to resize · edit for depth & finish":g==="box"?"Drag empty space to add a box · tap a piece to edit it":g==="line"?"Drag empty space to draw a board · tap a piece to edit it":"Tap a piece to edit · drag the gold dots to resize the room"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pf="169",js={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jS=0,Sm=1,XS=2,tv=1,nv=2,Ai=3,pr=0,on=1,Pn=2,ur=0,Xs=1,Mm=2,Em=3,wm=4,YS=5,Ur=100,$S=101,qS=102,KS=103,ZS=104,QS=200,JS=201,eM=202,tM=203,Xd=204,Yd=205,nM=206,iM=207,rM=208,sM=209,oM=210,aM=211,lM=212,cM=213,uM=214,$d=0,qd=1,Kd=2,no=3,Zd=4,Qd=5,Jd=6,eh=7,iv=0,dM=1,hM=2,dr=0,fM=1,pM=2,mM=3,rv=4,gM=5,_M=6,vM=7,sv=300,io=301,ro=302,th=303,nh=304,Tc=306,so=1e3,Hr=1001,ih=1002,jn=1003,xM=1004,Va=1005,ii=1006,mu=1007,Vr=1008,zi=1009,ov=1010,av=1011,fa=1012,Lf=1013,Kr=1014,Di=1015,ya=1016,Df=1017,Nf=1018,oo=1020,lv=35902,cv=1021,uv=1022,oi=1023,dv=1024,hv=1025,Ys=1026,ao=1027,fv=1028,If=1029,pv=1030,Uf=1031,kf=1033,Tl=33776,Al=33777,Cl=33778,bl=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,dh=37808,hh=37809,fh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,yh=37817,Sh=37818,Mh=37819,Eh=37820,wh=37821,Rl=36492,Th=36494,Ah=36495,mv=36283,Ch=36284,bh=36285,Rh=36286,yM=3200,SM=3201,gv=0,MM=1,Ji="",gn="srgb",xr="srgb-linear",Ff="display-p3",Ac="display-p3-linear",ic="linear",gt="srgb",rc="rec709",sc="p3",as=7680,Tm=519,EM=512,wM=513,TM=514,_v=515,AM=516,CM=517,bM=518,RM=519,Am=35044,Cm="300 es",Ni=2e3,oc=2001;class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pl=Math.PI/180,Ph=180/Math.PI;function Sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function PM(t,e){return(t%e+e)%e}function gu(t,e,n){return(1-n)*t+n*e}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const LM={DEG2RAD:Pl};class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],x=i[8],v=r[0],h=r[3],u=r[6],m=r[1],_=r[4],S=r[7],P=r[2],T=r[5],C=r[8];return s[0]=o*v+a*m+l*P,s[3]=o*h+a*_+l*T,s[6]=o*u+a*S+l*C,s[1]=c*v+d*m+f*P,s[4]=c*h+d*_+f*T,s[7]=c*u+d*S+f*C,s[2]=p*v+g*m+x*P,s[5]=p*h+g*_+x*T,s[8]=p*u+g*S+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,p=a*l-d*s,g=c*s-o*l,x=n*f+i*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=p*v,e[4]=(d*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=g*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new qe;function vv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DM(){const t=pa("canvas");return t.style.display="block",t}const bm={};function Ll(t){t in bm||(bm[t]=!0,console.warn(t))}function NM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function IM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rm=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pm=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[xr]:{transfer:ic,primaries:rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[gn]:{transfer:gt,primaries:rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ac]:{transfer:ic,primaries:sc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Pm),fromReference:t=>t.applyMatrix3(Rm)},[Ff]:{transfer:gt,primaries:sc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pm),fromReference:t=>t.applyMatrix3(Rm).convertLinearToSRGB()}},kM=new Set([xr,Ac]),st={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!kM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===Ji?ic:wo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(wo[e].luminanceCoefficients)}};function $s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class FM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=pa("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($s(n[i]/255)*255):n[i]=$s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xu(r[o].image)):s.push(xu(r[o]))}else s=xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zM=0;class Zt extends rs{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Hr,r=Hr,s=ii,o=Vr,a=oi,l=zi,c=Zt.DEFAULT_ANISOTROPY,d=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Sa(),this.name="",this.source=new xv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=sv;Zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],x=l[9],v=l[2],h=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-v)<.01&&Math.abs(x-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+v)<.1&&Math.abs(x+h)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(g+1)/2,P=(u+1)/2,T=(d+p)/4,C=(f+v)/4,L=(x+h)/4;return _>S&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=L/s),this.set(i,r,s,n),this}let m=Math.sqrt((h-x)*(h-x)+(f-v)*(f-v)+(p-d)*(p-d));return Math.abs(m)<.001&&(m=1),this.x=(h-x)/m,this.y=(f-v)/m,this.z=(p-d)/m,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BM extends rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends BM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yv extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[o+0],g=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=g,e[n+2]=x,e[n+3]=v;return}if(f!==v||l!==p||c!==g||d!==x){let h=1-a;const u=l*p+c*g+d*x+f*v,m=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const P=Math.sqrt(_),T=Math.atan2(P,u*m);h=Math.sin(h*T)/P,a=Math.sin(a*T)/P}const S=a*m;if(l=l*h+p*S,c=c*h+g*S,d=d*h+x*S,f=f*h+v*S,h===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],p=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*f+l*g-c*p,e[n+1]=l*x+d*p+c*f-a*g,e[n+2]=c*x+d*g+a*p-l*f,e[n+3]=d*x-a*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),p=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*d*f+c*g*x,this._y=c*g*f-p*d*x,this._z=c*d*x+p*g*f,this._w=c*d*f-p*g*x;break;case"YXZ":this._x=p*d*f+c*g*x,this._y=c*g*f-p*d*x,this._z=c*d*x-p*g*f,this._w=c*d*f+p*g*x;break;case"ZXY":this._x=p*d*f-c*g*x,this._y=c*g*f+p*d*x,this._z=c*d*x+p*g*f,this._w=c*d*f-p*g*x;break;case"ZYX":this._x=p*d*f-c*g*x,this._y=c*g*f+p*d*x,this._z=c*d*x-p*g*f,this._w=c*d*f+p*g*x;break;case"YZX":this._x=p*d*f+c*g*x,this._y=c*g*f+p*d*x,this._z=c*d*x-p*g*f,this._w=c*d*f-p*g*x;break;case"XZY":this._x=p*d*f-c*g*x,this._y=c*g*f-p*d*x,this._z=c*d*x+p*g*f,this._w=c*d*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new F,Lm=new Qr;class Ma{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Wa.subVectors(this.max,To),cs.subVectors(e.a,To),us.subVectors(e.b,To),ds.subVectors(e.c,To),Gi.subVectors(us,cs),Wi.subVectors(ds,us),Mr.subVectors(cs,ds);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Mr.z,Mr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Mr.z,0,-Mr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Mr.y,Mr.x,0];return!Su(n,cs,us,ds,Wa)||(n=[1,0,0,0,1,0,0,0,1],!Su(n,cs,us,ds,Wa))?!1:(ja.crossVectors(Gi,Wi),n=[ja.x,ja.y,ja.z],Su(n,cs,us,ds,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new F,new F,new F,new F,new F,new F,new F,new F],Zn=new F,Ga=new Ma,cs=new F,us=new F,ds=new F,Gi=new F,Wi=new F,Mr=new F,To=new F,Wa=new F,ja=new F,Er=new F;function Su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),d=i.dot(Er);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const VM=new Ma,Ao=new F,Mu=new F;class Cc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Mu)),this.expandByPoint(Ao.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new F,Eu=new F,Xa=new F,ji=new F,wu=new F,Ya=new F,Tu=new F;class bc{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Eu.copy(e).add(n).multiplyScalar(.5),Xa.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(Eu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xa),a=ji.dot(this.direction),l=-ji.dot(Xa),c=ji.lengthSq(),d=Math.abs(1-o*o);let f,p,g,x;if(d>0)if(f=o*l-a,p=o*a-l,x=s*d,f>=0)if(p>=-x)if(p<=x){const v=1/d;f*=v,p*=v,g=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Eu).addScaledVector(Xa,p),g}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){wu.subVectors(n,e),Ya.subVectors(i,e),Tu.crossVectors(wu,Ya);let o=this.direction.dot(Tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(ji,Ya));if(l<0)return null;const c=a*this.direction.dot(wu.cross(ji));if(c<0||l+c>o)return null;const d=-a*ji.dot(Tu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,d,f,p,g,x,v,h){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,p,g,x,v,h)}set(e,n,i,r,s,o,a,l,c,d,f,p,g,x,v,h){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=g,u[7]=x,u[11]=v,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*d,g=o*f,x=a*d,v=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+x*c,n[5]=p-v*c,n[9]=-a*l,n[2]=v-p*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,x=c*d,v=c*f;n[0]=p+v*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=v+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,x=c*d,v=c*f;n[0]=p-v*a,n[4]=-o*f,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=v-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,g=o*f,x=a*d,v=a*f;n[0]=l*d,n[4]=x*c-g,n[8]=p*c+v,n[1]=l*f,n[5]=v*c+p,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,x=a*l,v=a*c;n[0]=l*d,n[4]=v-p*f,n[8]=x*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+x,n[10]=p-v*f}else if(e.order==="XZY"){const p=o*l,g=o*c,x=a*l,v=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+v,n[5]=o*d,n[9]=g*f-x,n[2]=x*f-g,n[6]=a*d,n[10]=v*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,WM)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Xi.crossVectors(i,An),Xi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Xi.crossVectors(i,An)),Xi.normalize(),$a.crossVectors(An,Xi),r[0]=Xi.x,r[4]=$a.x,r[8]=An.x,r[1]=Xi.y,r[5]=$a.y,r[9]=An.y,r[2]=Xi.z,r[6]=$a.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],x=i[2],v=i[6],h=i[10],u=i[14],m=i[3],_=i[7],S=i[11],P=i[15],T=r[0],C=r[4],L=r[8],G=r[12],M=r[1],w=r[5],I=r[9],k=r[13],Y=r[2],re=r[6],z=r[10],ee=r[14],D=r[3],Z=r[7],ce=r[11],de=r[15];return s[0]=o*T+a*M+l*Y+c*D,s[4]=o*C+a*w+l*re+c*Z,s[8]=o*L+a*I+l*z+c*ce,s[12]=o*G+a*k+l*ee+c*de,s[1]=d*T+f*M+p*Y+g*D,s[5]=d*C+f*w+p*re+g*Z,s[9]=d*L+f*I+p*z+g*ce,s[13]=d*G+f*k+p*ee+g*de,s[2]=x*T+v*M+h*Y+u*D,s[6]=x*C+v*w+h*re+u*Z,s[10]=x*L+v*I+h*z+u*ce,s[14]=x*G+v*k+h*ee+u*de,s[3]=m*T+_*M+S*Y+P*D,s[7]=m*C+_*w+S*re+P*Z,s[11]=m*L+_*I+S*z+P*ce,s[15]=m*G+_*k+S*ee+P*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],x=e[3],v=e[7],h=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*p+i*c*p+r*a*g-i*l*g)+v*(+n*l*g-n*c*p+s*o*p-r*o*g+r*c*d-s*l*d)+h*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*p+r*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],x=e[12],v=e[13],h=e[14],u=e[15],m=f*h*c-v*p*c+v*l*g-a*h*g-f*l*u+a*p*u,_=x*p*c-d*h*c-x*l*g+o*h*g+d*l*u-o*p*u,S=d*v*c-x*f*c+x*a*g-o*v*g-d*a*u+o*f*u,P=x*f*l-d*v*l-x*a*p+o*v*p+d*a*h-o*f*h,T=n*m+i*_+r*S+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=m*C,e[1]=(v*p*s-f*h*s-v*r*g+i*h*g+f*r*u-i*p*u)*C,e[2]=(a*h*s-v*l*s+v*r*c-i*h*c-a*r*u+i*l*u)*C,e[3]=(f*l*s-a*p*s-f*r*c+i*p*c+a*r*g-i*l*g)*C,e[4]=_*C,e[5]=(d*h*s-x*p*s+x*r*g-n*h*g-d*r*u+n*p*u)*C,e[6]=(x*l*s-o*h*s-x*r*c+n*h*c+o*r*u-n*l*u)*C,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*g+n*l*g)*C,e[8]=S*C,e[9]=(x*f*s-d*v*s-x*i*g+n*v*g+d*i*u-n*f*u)*C,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*u+n*a*u)*C,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*C,e[12]=P*C,e[13]=(d*v*r-x*f*r+x*i*p-n*v*p-d*i*h+n*f*h)*C,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*h-n*a*h)*C,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*p+n*a*p)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,p=s*c,g=s*d,x=s*f,v=o*d,h=o*f,u=a*f,m=l*c,_=l*d,S=l*f,P=i.x,T=i.y,C=i.z;return r[0]=(1-(v+u))*P,r[1]=(g+S)*P,r[2]=(x-_)*P,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(p+u))*T,r[6]=(h+m)*T,r[7]=0,r[8]=(x+_)*C,r[9]=(h-m)*C,r[10]=(1-(p+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=hs.set(r[0],r[1],r[2]).length();const o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const c=1/s,d=1/o,f=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=d,Qn.elements[5]*=d,Qn.elements[6]*=d,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,n.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ni){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(a===Ni)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===oc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ni){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),p=(n+e)*c,g=(i+r)*d;let x,v;if(a===Ni)x=(o+s)*f,v=-2*f;else if(a===oc)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hs=new F,Qn=new ut,GM=new F(0,0,0),WM=new F(1,1,1),Xi=new F,$a=new F,An=new F,Dm=new ut,Nm=new Qr;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jM=0;const Im=new F,fs=new Qr,Ei=new ut,qa=new F,Co=new F,XM=new F,YM=new Qr,Um=new F(1,0,0),km=new F(0,1,0),Fm=new F(0,0,1),Om={type:"added"},$M={type:"removed"},ps={type:"childadded",child:null},Au={type:"childremoved",child:null};class Bt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new F,n=new vi,i=new Qr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new qe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Co,qa,this.up):Ei.lookAt(qa,Co,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Ei),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($M),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,YM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new F,wi=new F,Cu=new F,Ti=new F,ms=new F,gs=new F,zm=new F,bu=new F,Ru=new F,Pu=new F,Lu=new ct,Du=new ct,Nu=new ct;class ri{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),wi.subVectors(i,n),Cu.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(wi),l=Jn.dot(Cu),c=wi.dot(wi),d=wi.dot(Cu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-a*d)*p,x=(o*d-a*l)*p;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Lu.setScalar(0),Du.setScalar(0),Nu.setScalar(0),Lu.fromBufferAttribute(e,n),Du.fromBufferAttribute(e,i),Nu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lu,s.x),o.addScaledVector(Du,s.y),o.addScaledVector(Nu,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),wi.subVectors(e,n),Jn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Jn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),bu.subVectors(e,i);const l=ms.dot(bu),c=gs.dot(bu);if(l<=0&&c<=0)return n.copy(i);Ru.subVectors(e,r);const d=ms.dot(Ru),f=gs.dot(Ru);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ms,o);Pu.subVectors(e,s);const g=ms.dot(Pu),x=gs.dot(Pu);if(x>=0&&g<=x)return n.copy(s);const v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(gs,a);const h=d*x-g*f;if(h<=0&&f-d>=0&&g-x>=0)return zm.subVectors(s,r),a=(f-d)/(f-d+(g-x)),n.copy(r).addScaledVector(zm,a);const u=1/(h+v+p);return o=v*u,a=p*u,n.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=PM(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Iu(o,s,e+1/3),this.g=Iu(o,s,e),this.b=Iu(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=Sv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(rn(qt.r*255,0,255))*65536+Math.round(rn(qt.g*255,0,255))*256+Math.round(rn(qt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=gn){st.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Ka);const i=gu(Yi.h,Ka.h,n),r=gu(Yi.s,Ka.s,n),s=gu(Yi.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ve;Ve.NAMES=Sv;let qM=0;class fo extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=Xs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Yd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rc extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new F,Za=new ze;class _i{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Am,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class Mv extends _i{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ev extends _i{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ft extends _i{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KM=0;const zn=new ut,Uu=new Bt,_s=new F,Cn=new Ma,bo=new Ma,Ft=new F;class Mn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Ev:Mv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Cn.min,bo.min),Cn.expandByPoint(Ft),Ft.addVectors(Cn.max,bo.max),Cn.expandByPoint(Ft)):(Cn.expandByPoint(bo.min),Cn.expandByPoint(bo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ft.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(e,c),Ft.add(_s)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;const c=new F,d=new F,f=new F,p=new ze,g=new ze,x=new ze,v=new F,h=new F;function u(L,G,M){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,G),f.fromBufferAttribute(i,M),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,G),x.fromBufferAttribute(s,M),d.sub(c),f.sub(c),g.sub(p),x.sub(p);const w=1/(g.x*x.y-x.x*g.y);isFinite(w)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(w),h.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(w),a[L].add(v),a[G].add(v),a[M].add(v),l[L].add(h),l[G].add(h),l[M].add(h))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let L=0,G=m.length;L<G;++L){const M=m[L],w=M.start,I=M.count;for(let k=w,Y=w+I;k<Y;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new F,S=new F,P=new F,T=new F;function C(L){P.fromBufferAttribute(r,L),T.copy(P);const G=a[L];_.copy(G),_.sub(P.multiplyScalar(P.dot(G))).normalize(),S.crossVectors(T,G);const w=S.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,w)}for(let L=0,G=m.length;L<G;++L){const M=m[L],w=M.start,I=M.count;for(let k=w,Y=w+I;k<Y;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let p=0,g=e.count;p<g;p+=3){const x=e.getX(p+0),v=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,h),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let g=0,x=0;for(let v=0,h=l.length;v<h;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*d;for(let u=0;u<d;u++)p[x++]=c[g++]}return new _i(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new ut,wr=new bc,Qa=new Cc,Hm=new F,Ja=new F,el=new F,tl=new F,ku=new F,nl=new F,Vm=new F,il=new F;class Ze extends Bt{constructor(e=new Mn,n=new Rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(ku.fromBufferAttribute(f,e),o?nl.addScaledVector(ku,d):nl.addScaledVector(ku.sub(n),d))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(Qa.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Qa,Hm)===null||wr.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){const h=p[x],u=o[h.materialIndex],m=Math.max(h.start,g.start),_=Math.min(a.count,Math.min(h.start+h.count,g.start+g.count));for(let S=m,P=_;S<P;S+=3){const T=a.getX(S),C=a.getX(S+1),L=a.getX(S+2);r=rl(this,u,e,i,c,d,f,T,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let h=x,u=v;h<u;h+=3){const m=a.getX(h),_=a.getX(h+1),S=a.getX(h+2);r=rl(this,o,e,i,c,d,f,m,_,S),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){const h=p[x],u=o[h.materialIndex],m=Math.max(h.start,g.start),_=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let S=m,P=_;S<P;S+=3){const T=S,C=S+1,L=S+2;r=rl(this,u,e,i,c,d,f,T,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let h=x,u=v;h<u;h+=3){const m=h,_=h+1,S=h+2;r=rl(this,o,e,i,c,d,f,m,_,S),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}}}function ZM(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pr,a),l===null)return null;il.copy(a),il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(il);return c<n.near||c>n.far?null:{distance:c,point:il.clone(),object:t}}function rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ja),t.getVertexPosition(l,el),t.getVertexPosition(c,tl);const d=ZM(t,e,n,i,Ja,el,tl,Vm);if(d){const f=new F;ri.getBarycoord(Vm,Ja,el,tl,f),r&&(d.uv=ri.getInterpolatedAttribute(r,a,l,c,f,new ze)),s&&(d.uv1=ri.getInterpolatedAttribute(s,a,l,c,f,new ze)),o&&(d.normal=ri.getInterpolatedAttribute(o,a,l,c,f,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new F,materialIndex:0};ri.getNormal(Ja,el,tl,p.normal),d.face=p,d.barycoord=f}return d}class nn extends Mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function x(v,h,u,m,_,S,P,T,C,L,G){const M=S/C,w=P/L,I=S/2,k=P/2,Y=T/2,re=C+1,z=L+1;let ee=0,D=0;const Z=new F;for(let ce=0;ce<z;ce++){const de=ce*w-k;for(let Ce=0;Ce<re;Ce++){const ke=Ce*M-I;Z[v]=ke*m,Z[h]=de*_,Z[u]=Y,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[h]=0,Z[u]=T>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(Ce/C),f.push(1-ce/L),ee+=1}}for(let ce=0;ce<L;ce++)for(let de=0;de<C;de++){const Ce=p+de+re*ce,ke=p+de+re*(ce+1),ne=p+(de+1)+re*(ce+1),fe=p+(de+1)+re*ce;l.push(Ce,ke,fe),l.push(ke,ne,fe),D+=6}a.addGroup(g,D,G),g+=D,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function QM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const JM={clone:lo,merge:en};var e1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e1,this.fragmentShader=t1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Tv extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new F,Gm=new ze,Wm=new ze;class Rn extends Tv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Wm),n.subVectors(Wm,Gm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,xs=1;class n1 extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new Rn(vs,xs,e,n);s.layers=this.layers,this.add(s);const o=new Rn(vs,xs,e,n);o.layers=this.layers,this.add(o);const a=new Rn(vs,xs,e,n);a.layers=this.layers,this.add(a);const l=new Rn(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new Rn(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Av extends Zt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i1 extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Av(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nn(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ur});s.uniforms.tEquirect.value=n;const o=new Ze(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=ii),new n1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Fu=new F,r1=new F,s1=new qe;class Ri{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fu.subVectors(i,n).cross(r1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||s1.getNormalMatrix(e),r=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Cc,sl=new F;class zf{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],x=r[9],v=r[10],h=r[11],u=r[12],m=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,p-c,h-g,S-u).normalize(),i[1].setComponents(l+s,p+c,h+g,S+u).normalize(),i[2].setComponents(l+o,p+d,h+x,S+m).normalize(),i[3].setComponents(l-o,p-d,h-x,S-m).normalize(),i[4].setComponents(l-a,p-f,h-v,S-_).normalize(),n===Ni)i[5].setComponents(l+a,p+f,h+v,S+_).normalize();else if(n===oc)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function o1(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<f.length;g++){const x=f[p],v=f[g];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++p,f[p]=v)}f.length=p+1;for(let g=0,x=f.length;g<x;g++){const v=f[g];t.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Jr extends Mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,p=n/l,g=[],x=[],v=[],h=[];for(let u=0;u<d;u++){const m=u*p-o;for(let _=0;_<c;_++){const S=_*f-s;x.push(S,-m,0),v.push(0,0,1),h.push(_/a),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const _=m+c*u,S=m+c*(u+1),P=m+1+c*(u+1),T=m+1+c*u;g.push(_,S,T),g.push(S,P,T)}this.setIndex(g),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
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
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
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
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y1=`#ifdef USE_IRIDESCENCE
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
#endif`,S1=`#ifdef USE_BUMPMAP
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P1=`#define PI 3.141592653589793
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
} // validated`,L1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D1=`vec3 transformedNormal = objectNormal;
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
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",O1=`
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
}`,z1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
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
#endif`,J1=`#ifdef USE_ENVMAP
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rE=`PhysicalMaterial material;
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
#endif`,sE=`struct PhysicalMaterial {
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
}`,oE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
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
#endif`,PE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#ifdef USE_TRANSMISSION
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`#include <common>
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
}`,fw=`#if DEPTH_PACKING == 3200
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
}`,pw=`#define DISTANCE
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
}`,mw=`#define DISTANCE
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Mw=`#define LAMBERT
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
}`,Ew=`#define LAMBERT
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
}`,ww=`#define MATCAP
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
}`,Tw=`#define MATCAP
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
}`,Aw=`#define NORMAL
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
}`,Cw=`#define NORMAL
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
}`,bw=`#define PHONG
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
}`,Rw=`#define PHONG
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
}`,Pw=`#define STANDARD
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
}`,Lw=`#define STANDARD
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
}`,Dw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Iw=`uniform float size;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,Fw=`uniform vec3 color;
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
}`,Ow=`uniform float rotation;
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
}`,zw=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:a1,alphahash_pars_fragment:l1,alphamap_fragment:c1,alphamap_pars_fragment:u1,alphatest_fragment:d1,alphatest_pars_fragment:h1,aomap_fragment:f1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:_1,beginnormal_vertex:v1,bsdfs:x1,iridescence_fragment:y1,bumpmap_pars_fragment:S1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:C1,color_pars_vertex:b1,color_vertex:R1,common:P1,cube_uv_reflection_fragment:L1,defaultnormal_vertex:D1,displacementmap_pars_vertex:N1,displacementmap_vertex:I1,emissivemap_fragment:U1,emissivemap_pars_fragment:k1,colorspace_fragment:F1,colorspace_pars_fragment:O1,envmap_fragment:z1,envmap_common_pars_fragment:B1,envmap_pars_fragment:H1,envmap_pars_vertex:V1,envmap_physical_pars_fragment:J1,envmap_vertex:G1,fog_vertex:W1,fog_pars_vertex:j1,fog_fragment:X1,fog_pars_fragment:Y1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:q1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Z1,lights_pars_begin:Q1,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:rE,lights_physical_pars_fragment:sE,lights_fragment_begin:oE,lights_fragment_maps:aE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:hE,map_fragment:fE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:EE,normal_fragment_begin:wE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:CE,normal_vertex:bE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:PE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:DE,iridescence_pars_fragment:NE,opaque_fragment:IE,packing:UE,premultiplied_alpha_fragment:kE,project_vertex:FE,dithering_fragment:OE,dithering_pars_fragment:zE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:GE,shadowmap_vertex:WE,shadowmask_pars_fragment:jE,skinbase_vertex:XE,skinning_pars_vertex:YE,skinning_vertex:$E,skinnormal_vertex:qE,specularmap_fragment:KE,specularmap_pars_fragment:ZE,tonemapping_fragment:QE,tonemapping_pars_fragment:JE,transmission_fragment:ew,transmission_pars_fragment:tw,uv_pars_fragment:nw,uv_pars_vertex:iw,uv_vertex:rw,worldpos_vertex:sw,background_vert:ow,background_frag:aw,backgroundCube_vert:lw,backgroundCube_frag:cw,cube_vert:uw,cube_frag:dw,depth_vert:hw,depth_frag:fw,distanceRGBA_vert:pw,distanceRGBA_frag:mw,equirect_vert:gw,equirect_frag:_w,linedashed_vert:vw,linedashed_frag:xw,meshbasic_vert:yw,meshbasic_frag:Sw,meshlambert_vert:Mw,meshlambert_frag:Ew,meshmatcap_vert:ww,meshmatcap_frag:Tw,meshnormal_vert:Aw,meshnormal_frag:Cw,meshphong_vert:bw,meshphong_frag:Rw,meshphysical_vert:Pw,meshphysical_frag:Lw,meshtoon_vert:Dw,meshtoon_frag:Nw,points_vert:Iw,points_frag:Uw,shadow_vert:kw,shadow_frag:Fw,sprite_vert:Ow,sprite_frag:zw},ye={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fi={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};fi.physical={uniforms:en([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ol={r:0,b:0,g:0},Ar=new vi,Bw=new ut;function Hw(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,d,f=null,p=0,g=null;function x(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_)),_}function v(m){let _=!1;const S=x(m);S===null?u(a,l):S&&S.isColor&&(u(S,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function h(m,_){const S=x(_);S&&(S.isCubeTexture||S.mapping===Tc)?(d===void 0&&(d=new Ze(new nn(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:lo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ar.copy(_.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Ar)),d.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,(f!==S||p!==S.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,p=S.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ze(new Jr(2,2),new mr({name:"BackgroundMaterial",uniforms:lo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function u(m,_){m.getRGB(ol,wv(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,u(a,l)},render:v,addToRenderList:h}}function Vw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(M,w,I,k,Y){let re=!1;const z=f(k,I,w);s!==z&&(s=z,c(s.object)),re=g(M,k,I,Y),re&&x(M,k,I,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(M,w,I,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,w,I){const k=I.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let re=Y[w.id];re===void 0&&(re={},Y[w.id]=re);let z=re[k];return z===void 0&&(z=p(l()),re[k]=z),z}function p(M){const w=[],I=[],k=[];for(let Y=0;Y<n;Y++)w[Y]=0,I[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:k,object:M,attributes:{},index:null}}function g(M,w,I,k){const Y=s.attributes,re=w.attributes;let z=0;const ee=I.getAttributes();for(const D in ee)if(ee[D].location>=0){const ce=Y[D];let de=re[D];if(de===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),ce===void 0||ce.attribute!==de||de&&ce.data!==de.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function x(M,w,I,k){const Y={},re=w.attributes;let z=0;const ee=I.getAttributes();for(const D in ee)if(ee[D].location>=0){let ce=re[D];ce===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const de={};de.attribute=ce,ce&&ce.data&&(de.data=ce.data),Y[D]=de,z++}s.attributes=Y,s.attributesNum=z,s.index=k}function v(){const M=s.newAttributes;for(let w=0,I=M.length;w<I;w++)M[w]=0}function h(M){u(M,0)}function u(M,w){const I=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;I[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),Y[M]!==w&&(t.vertexAttribDivisor(M,w),Y[M]=w)}function m(){const M=s.newAttributes,w=s.enabledAttributes;for(let I=0,k=w.length;I<k;I++)w[I]!==M[I]&&(t.disableVertexAttribArray(I),w[I]=0)}function _(M,w,I,k,Y,re,z){z===!0?t.vertexAttribIPointer(M,w,I,Y,re):t.vertexAttribPointer(M,w,I,k,Y,re)}function S(M,w,I,k){v();const Y=k.attributes,re=I.getAttributes(),z=w.defaultAttributeValues;for(const ee in re){const D=re[ee];if(D.location>=0){let Z=Y[ee];if(Z===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const ce=Z.normalized,de=Z.itemSize,Ce=e.get(Z);if(Ce===void 0)continue;const ke=Ce.buffer,ne=Ce.type,fe=Ce.bytesPerElement,pe=ne===t.INT||ne===t.UNSIGNED_INT||Z.gpuType===Lf;if(Z.isInterleavedBufferAttribute){const xe=Z.data,Oe=xe.stride,Fe=Z.offset;if(xe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<D.locationSize;Xe++)u(D.location+Xe,xe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<D.locationSize;Xe++)h(D.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Xe=0;Xe<D.locationSize;Xe++)_(D.location+Xe,de/D.locationSize,ne,ce,Oe*fe,(Fe+de/D.locationSize*Xe)*fe,pe)}else{if(Z.isInstancedBufferAttribute){for(let xe=0;xe<D.locationSize;xe++)u(D.location+xe,Z.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<D.locationSize;xe++)h(D.location+xe);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let xe=0;xe<D.locationSize;xe++)_(D.location+xe,de/D.locationSize,ne,ce,de*fe,de/D.locationSize*xe*fe,pe)}}else if(z!==void 0){const ce=z[ee];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(D.location,ce);break;case 3:t.vertexAttrib3fv(D.location,ce);break;case 4:t.vertexAttrib4fv(D.location,ce);break;default:t.vertexAttrib1fv(D.location,ce)}}}}m()}function P(){L();for(const M in i){const w=i[M];for(const I in w){const k=w[I];for(const Y in k)d(k[Y].object),delete k[Y];delete w[I]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const I in w){const k=w[I];for(const Y in k)d(k[Y].object),delete k[Y];delete w[I]}delete i[M.id]}function C(M){for(const w in i){const I=i[w];if(I[M.id]===void 0)continue;const k=I[M.id];for(const Y in k)d(k[Y].object),delete k[Y];delete I[M.id]}}function L(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:h,disableUnusedAttributes:m}}function Gw(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=d[x];n.update(g,i,1)}function l(c,d,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)o(c[x],d[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let x=0;for(let v=0;v<f;v++)x+=d[v];for(let v=0;v<p.length;v++)n.update(x,i,p[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ww(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==oi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Di&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:P,maxSamples:T}}function jw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ri,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const x=f.clippingPlanes,v=f.clipIntersection,h=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!h)s?d(null):c();else{const m=s?0:i,_=m*4;let S=u.clippingState||null;l.value=S,S=d(x,p,_,g);for(let P=0;P!==_;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,x){const v=f!==null?f.length:0;let h=null;if(v!==0){if(h=l.value,x!==!0||h===null){const u=g+v*4,m=p.matrixWorldInverse;a.getNormalMatrix(m),(h===null||h.length<u)&&(h=new Float32Array(u));for(let _=0,S=g;_!==v;++_,S+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function Xw(t){let e=new WeakMap;function n(o,a){return a===th?o.mapping=io:a===nh&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===th||a===nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new i1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bv extends Tv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,jm=[.125,.215,.35,.446,.526,.582],kr=20,Ou=new bv,Xm=new Ve;let zu=null,Bu=0,Hu=0,Vu=!1;const Dr=(1+Math.sqrt(5))/2,ys=1/Dr,Ym=[new F(-Dr,ys,0),new F(Dr,ys,0),new F(-ys,0,Dr),new F(ys,0,Dr),new F(0,Dr,-ys),new F(0,Dr,ys),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Bu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ya,format:oi,colorSpace:xr,depthBuffer:!1},r=$m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=$w(s,e,n)}return r}_compileMaterial(e){const n=new Ze(this._lodPlanes[0],e);this._renderer.compile(n,Ou)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Xm),d.toneMapping=dr,d.autoClear=!1;const g=new Rc({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new Ze(new nn,g);let v=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,v=!0):(g.color.copy(Xm),v=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;al(r,m*_,u>2?_:0,_,_),d.setRenderTarget(r),v&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ym[(r-s-1)%Ym.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ze(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kr-1),v=s/x,h=isFinite(s)?1+Math.floor(d*v):kr;h>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${kr}`);const u=[];let m=0;for(let C=0;C<kr;++C){const L=C/v,G=Math.exp(-L*L/2);u.push(G),C===0?m+=G:C<h&&(m+=2*G)}for(let C=0;C<u.length;C++)u[C]=u[C]/m;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;const S=this._sizeLods[r],P=3*S*(r>_-Os?r-_+Os:0),T=4*(this._cubeSize-S);al(n,P,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Ou)}}function Yw(t){const e=[],n=[],i=[];let r=t;const s=t-Os+1+jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Os?l=jm[o-t+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,x=6,v=3,h=2,u=1,m=new Float32Array(v*x*g),_=new Float32Array(h*x*g),S=new Float32Array(u*x*g);for(let T=0;T<g;T++){const C=T%3*2/3-1,L=T>2?0:-1,G=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];m.set(G,v*x*T),_.set(p,h*x*T);const M=[T,T,T,T,T,T];S.set(M,u*x*T)}const P=new Mn;P.setAttribute("position",new _i(m,v)),P.setAttribute("uv",new _i(_,h)),P.setAttribute("faceIndex",new _i(S,u)),e.push(P),r>Os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $m(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $w(t,e,n){const i=new Float32Array(kr),r=new F(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function qm(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Km(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function qw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===th||l===nh,d=l===io||l===ro;if(c||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new Lh(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Lh(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Kw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ll("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zw(t,e,n,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const v=p.morphAttributes[x];for(let h=0,u=v.length;h<u;h++)e.remove(v[h])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const v=g[x];for(let h=0,u=v.length;h<u;h++)e.update(v[h],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,x=f.attributes.position;let v=0;if(g!==null){const m=g.array;v=g.version;for(let _=0,S=m.length;_<S;_+=3){const P=m[_+0],T=m[_+1],C=m[_+2];p.push(P,T,T,C,C,P)}}else if(x!==void 0){const m=x.array;v=x.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const P=_+0,T=_+1,C=_+2;p.push(P,T,T,C,C,P)}}else return;const h=new(vv(p)?Ev:Mv)(p,1);h.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,h)}function d(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Qw(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,g){t.drawElements(i,g,s,p*o),n.update(g,i,1)}function c(p,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,p*o,x),n.update(g,i,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,x);let h=0;for(let u=0;u<x;u++)h+=g[u];n.update(h,i,1)}function f(p,g,x,v){if(x===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<p.length;u++)c(p[u]/o,g[u],v[u]);else{h.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,v,0,x);let u=0;for(let m=0;m<x;m++)u+=g[m];for(let m=0;m<v.length;m++)n.update(u,i,v[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Jw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eT(t,e,n){const i=new WeakMap,r=new ct;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var g=M;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),h===!0&&(S=3);let P=a.attributes.position.count*S,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*T*4*f),L=new yv(C,P,T,f);L.type=Di,L.needsUpdate=!0;const G=S*4;for(let w=0;w<f;w++){const I=u[w],k=m[w],Y=_[w],re=P*T*4*w;for(let z=0;z<I.count;z++){const ee=z*G;x===!0&&(r.fromBufferAttribute(I,z),C[re+ee+0]=r.x,C[re+ee+1]=r.y,C[re+ee+2]=r.z,C[re+ee+3]=0),v===!0&&(r.fromBufferAttribute(k,z),C[re+ee+4]=r.x,C[re+ee+5]=r.y,C[re+ee+6]=r.z,C[re+ee+7]=0),h===!0&&(r.fromBufferAttribute(Y,z),C[re+ee+8]=r.x,C[re+ee+9]=r.y,C[re+ee+10]=r.z,C[re+ee+11]=Y.itemSize===4?r.w:1)}}p={count:f,texture:L,size:new ze(P,T)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let h=0;h<c.length;h++)x+=c[h];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function tT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Rv extends Zt{constructor(e,n,i,r,s,o,a,l,c,d=Ys){if(d!==Ys&&d!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ys&&(i=Kr),i===void 0&&d===ao&&(i=oo),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Pv=new Zt,Zm=new Rv(1,1),Lv=new yv,Dv=new HM,Nv=new Av,Qm=[],Jm=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qm[r];if(s===void 0&&(s=new Float32Array(r),Qm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pc(t,e){let n=Jm[e];n===void 0&&(n=new Int32Array(e),Jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function oT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,i))return;n0.set(i),t.uniformMatrix2fv(this.addr,!1,n0),kt(n,i)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,i))return;t0.set(i),t.uniformMatrix3fv(this.addr,!1,t0),kt(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,i))return;e0.set(i),t.uniformMatrix4fv(this.addr,!1,e0),kt(n,i)}}function cT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function fT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zm.compareFunction=_v,s=Zm):s=Pv,n.setTexture2D(e||s,r)}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dv,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nv,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lv,r)}function ST(t){switch(t){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return aT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return fT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}function MT(t,e){t.uniform1fv(this.addr,e)}function ET(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function wT(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function TT(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function AT(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CT(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bT(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function RT(t,e){t.uniform1iv(this.addr,e)}function PT(t,e){t.uniform2iv(this.addr,e)}function LT(t,e){t.uniform3iv(this.addr,e)}function DT(t,e){t.uniform4iv(this.addr,e)}function NT(t,e){t.uniform1uiv(this.addr,e)}function IT(t,e){t.uniform2uiv(this.addr,e)}function UT(t,e){t.uniform3uiv(this.addr,e)}function kT(t,e){t.uniform4uiv(this.addr,e)}function FT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Pv,s[o])}function OT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dv,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Nv,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lv,s[o])}function HT(t){switch(t){case 5126:return MT;case 35664:return ET;case 35665:return wT;case 35666:return TT;case 35674:return AT;case 35675:return CT;case 35676:return bT;case 5124:case 35670:return RT;case 35667:case 35671:return PT;case 35668:case 35672:return LT;case 35669:case 35673:return DT;case 5125:return NT;case 36294:return IT;case 36295:return UT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}class VT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ST(n.type)}}class GT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HT(n.type)}}class WT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function i0(t,e){t.seq.push(e),t.map[e.id]=e}function jT(t,e,n){const i=t.name,r=i.length;for(Gu.lastIndex=0;;){const s=Gu.exec(i),o=Gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){i0(n,c===void 0?new VT(a,t,e):new GT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new WT(a),i0(n,f)),n=f}}}class Dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function r0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const XT=37297;let YT=0;function $T(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function qT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===sc&&n===rc?i="LinearDisplayP3ToLinearSRGB":e===rc&&n===sc&&(i="LinearSRGBToLinearDisplayP3"),t){case xr:case Ac:return[i,"LinearTransferOETF"];case gn:case Ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function s0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+$T(t.getShaderSource(e),o)}else return r}function KT(t,e){const n=qT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ZT(t,e){let n;switch(e){case fM:n="Linear";break;case pM:n="Reinhard";break;case mM:n="Cineon";break;case rv:n="ACESFilmic";break;case _M:n="AgX";break;case vM:n="Neutral";break;case gM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new F;function QT(){st.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function e2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function t2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function o0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(t){return t.replace(n2,r2)}const i2=new Map;function r2(t,e){let n=$e[e];if(n===void 0){const i=i2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dh(n)}const s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(t){return t.replace(s2,o2)}function o2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function c0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function a2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function l2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function u2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case iv:e="ENVMAP_BLENDING_MULTIPLY";break;case dM:e="ENVMAP_BLENDING_MIX";break;case hM:e="ENVMAP_BLENDING_ADD";break}return e}function d2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=a2(n),c=l2(n),d=c2(n),f=u2(n),p=d2(n),g=JT(n),x=e2(s),v=r.createProgram();let h,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Bo).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Bo).join(`
`),u.length>0&&(u+=`
`)):(h=[c0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),u=[c0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?$e.tonemapping_pars_fragment:"",n.toneMapping!==dr?ZT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,KT("linearToOutputTexel",n.outputColorSpace),QT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Dh(o),o=o0(o,n),o=a0(o,n),a=Dh(a),a=o0(a,n),a=a0(a,n),o=l0(o),a=l0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=m+h+o,S=m+u+a,P=r0(r,r.VERTEX_SHADER,_),T=r0(r,r.FRAGMENT_SHADER,S);r.attachShader(v,P),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(w){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(T).trim();let re=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(re=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,T);else{const ee=s0(r,P,"vertex"),D=s0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+ee+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||Y==="")&&(z=!1);z&&(w.diagnostics={runnable:re,programLog:I,vertexShader:{log:k,prefix:h},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(P),r.deleteShader(T),L=new Dl(r,v),G=t2(r,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let G;this.getAttributes=function(){return G===void 0&&C(this),G};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,XT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let f2=0;class p2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m2(e),n.set(e,i)),i}}class m2{constructor(e){this.id=f2++,this.code=e,this.usedTimes=0}}function g2(t,e,n,i,r,s,o){const a=new Of,l=new p2,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,g=r.vertexTextures;let x=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(M){return c.add(M),M===0?"uv":`uv${M}`}function u(M,w,I,k,Y){const re=k.fog,z=Y.geometry,ee=M.isMeshStandardMaterial?k.environment:null,D=(M.isMeshStandardMaterial?n:e).get(M.envMap||ee),Z=D&&D.mapping===Tc?D.image.height:null,ce=v[M.type];M.precision!==null&&(x=r.getMaxPrecision(M.precision),x!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",x,"instead."));const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ce=de!==void 0?de.length:0;let ke=0;z.morphAttributes.position!==void 0&&(ke=1),z.morphAttributes.normal!==void 0&&(ke=2),z.morphAttributes.color!==void 0&&(ke=3);let ne,fe,pe,xe;if(ce){const un=fi[ce];ne=un.vertexShader,fe=un.fragmentShader}else ne=M.vertexShader,fe=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const Oe=t.getRenderTarget(),Fe=Y.isInstancedMesh===!0,Xe=Y.isBatchedMesh===!0,Je=!!M.map,$=!!M.matcap,A=!!D,ie=!!M.aoMap,H=!!M.lightMap,le=!!M.bumpMap,q=!!M.normalMap,te=!!M.displacementMap,oe=!!M.emissiveMap,b=!!M.metalnessMap,E=!!M.roughnessMap,O=M.anisotropy>0,j=M.clearcoat>0,N=M.dispersion>0,U=M.iridescence>0,ae=M.sheen>0,X=M.transmission>0,ue=O&&!!M.anisotropyMap,ve=j&&!!M.clearcoatMap,K=j&&!!M.clearcoatNormalMap,me=j&&!!M.clearcoatRoughnessMap,Me=U&&!!M.iridescenceMap,Ie=U&&!!M.iridescenceThicknessMap,Se=ae&&!!M.sheenColorMap,Ke=ae&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,dt=!!M.specularColorMap,B=!!M.specularIntensityMap,Te=X&&!!M.transmissionMap,se=X&&!!M.thicknessMap,he=!!M.gradientMap,Ee=!!M.alphaMap,Ae=M.alphaTest>0,et=!!M.alphaHash,Rt=!!M.extensions;let cn=dr;M.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(cn=t.toneMapping);const nt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:fe,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:x,batching:Xe,batchingColor:Xe&&Y._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Y.instanceColor!==null,instancingMorph:Fe&&Y.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:xr,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:$,envMap:A,envMapMode:A&&D.mapping,envMapCubeUVHeight:Z,aoMap:ie,lightMap:H,bumpMap:le,normalMap:q,displacementMap:g&&te,emissiveMap:oe,normalMapObjectSpace:q&&M.normalMapType===MM,normalMapTangentSpace:q&&M.normalMapType===gv,metalnessMap:b,roughnessMap:E,anisotropy:O,anisotropyMap:ue,clearcoat:j,clearcoatMap:ve,clearcoatNormalMap:K,clearcoatRoughnessMap:me,dispersion:N,iridescence:U,iridescenceMap:Me,iridescenceThicknessMap:Ie,sheen:ae,sheenColorMap:Se,sheenRoughnessMap:Ke,specularMap:Ye,specularColorMap:dt,specularIntensityMap:B,transmission:X,transmissionMap:Te,thicknessMap:se,gradientMap:he,opaque:M.transparent===!1&&M.blending===Xs&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ae,alphaHash:et,combine:M.combine,mapUv:Je&&h(M.map.channel),aoMapUv:ie&&h(M.aoMap.channel),lightMapUv:H&&h(M.lightMap.channel),bumpMapUv:le&&h(M.bumpMap.channel),normalMapUv:q&&h(M.normalMap.channel),displacementMapUv:te&&h(M.displacementMap.channel),emissiveMapUv:oe&&h(M.emissiveMap.channel),metalnessMapUv:b&&h(M.metalnessMap.channel),roughnessMapUv:E&&h(M.roughnessMap.channel),anisotropyMapUv:ue&&h(M.anisotropyMap.channel),clearcoatMapUv:ve&&h(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&h(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&h(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&h(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&h(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&h(M.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&h(M.sheenRoughnessMap.channel),specularMapUv:Ye&&h(M.specularMap.channel),specularColorMapUv:dt&&h(M.specularColorMap.channel),specularIntensityMapUv:B&&h(M.specularIntensityMap.channel),transmissionMapUv:Te&&h(M.transmissionMap.channel),thicknessMapUv:se&&h(M.thicknessMap.channel),alphaMapUv:Ee&&h(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(q||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!z.attributes.uv&&(Je||Ee),fog:!!re,useFog:M.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:cn,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&M.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(w,M),S(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),M.push(a.mask)}function P(M){const w=v[M.type];let I;if(w){const k=fi[w];I=JM.clone(k.uniforms)}else I=M.uniforms;return I}function T(M,w){let I;for(let k=0,Y=d.length;k<Y;k++){const re=d[k];if(re.cacheKey===w){I=re,++I.usedTimes;break}}return I===void 0&&(I=new h2(t,w,M,s),d.push(I)),I}function C(M){if(--M.usedTimes===0){const w=d.indexOf(M);d[w]=d[d.length-1],d.pop(),M.destroy()}}function L(M){l.remove(M)}function G(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:P,acquireProgram:T,releaseProgram:C,releaseShaderCache:L,programs:d,dispose:G}}function _2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function v2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function u0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function d0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,p,g,x,v,h){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:v,group:h},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=v,u.group=h),e++,u}function a(f,p,g,x,v,h){const u=o(f,p,g,x,v,h);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,p,g,x,v,h){const u=o(f,p,g,x,v,h);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||v2),i.length>1&&i.sort(p||u0),r.length>1&&r.sort(p||u0)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function x2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new d0,t.set(i,[o])):r>=s.length?(o=new d0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function y2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ve};break;case"SpotLight":n={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function S2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M2=0;function E2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function w2(t){const e=new y2,n=S2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new ut,o=new ut;function a(c){let d=0,f=0,p=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,x=0,v=0,h=0,u=0,m=0,_=0,S=0,P=0,T=0,C=0;c.sort(E2);for(let G=0,M=c.length;G<M;G++){const w=c[G],I=w.color,k=w.intensity,Y=w.distance,re=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=I.r*k,f+=I.g*k,p+=I.b*k;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],k);C++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ee=w.shadow,D=n.get(w);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=w.shadow.matrix,m++}i.directional[g]=z,g++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(I).multiplyScalar(k),z.distance=Y,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[v]=z;const ee=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,ee.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[v]=ee.matrix,w.castShadow){const D=n.get(w);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=re,S++}v++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(I).multiplyScalar(k),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[h]=z,h++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const ee=w.shadow,D=n.get(w);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,D.shadowCameraNear=ee.camera.near,D.shadowCameraFar=ee.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=re,i.pointShadowMatrix[x]=w.shadow.matrix,_++}i.point[x]=z,x++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(k),z.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[u]=z,u++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==g||L.pointLength!==x||L.spotLength!==v||L.rectAreaLength!==h||L.hemiLength!==u||L.numDirectionalShadows!==m||L.numPointShadows!==_||L.numSpotShadows!==S||L.numSpotMaps!==P||L.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=h,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,L.directionalLength=g,L.pointLength=x,L.spotLength=v,L.rectAreaLength=h,L.hemiLength=u,L.numDirectionalShadows=m,L.numPointShadows=_,L.numSpotShadows=S,L.numSpotMaps=P,L.numLightProbes=C,i.version=M2++)}function l(c,d){let f=0,p=0,g=0,x=0,v=0;const h=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const _=c[u];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),f++}else if(_.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),g++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(h),o.identity(),s.copy(_.matrixWorld),s.premultiply(h),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(h),p++}else if(_.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(h),v++}}}return{setup:a,setupView:l,state:i}}function h0(t){const e=new w2(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function T2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h0(t),e.set(r,[a])):s>=o.length?(a=new h0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class A2 extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C2 extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R2=`uniform sampler2D shadow_pass;
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
}`;function P2(t,e,n){let i=new zf;const r=new ze,s=new ze,o=new ct,a=new A2({depthPacking:SM}),l=new C2,c={},d=n.maxTextureSize,f={[pr]:on,[on]:pr,[Pn]:Pn},p=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:b2,fragmentShader:R2}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new Mn;x.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ze(x,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let u=this.type;this.render=function(T,C,L){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const G=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),I=t.state;I.setBlending(ur),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=u!==Ai&&this.type===Ai,Y=u===Ai&&this.type!==Ai;for(let re=0,z=T.length;re<z;re++){const ee=T[re],D=ee.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();if(r.multiply(Z),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y)),D.map===null||k===!0||Y===!0){const de=this.type!==Ai?{minFilter:jn,magFilter:jn}:{};D.map!==null&&D.map.dispose(),D.map=new Zr(r.x,r.y,de),D.map.texture.name=ee.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const ce=D.getViewportCount();for(let de=0;de<ce;de++){const Ce=D.getViewport(de);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),I.viewport(o),D.updateMatrices(ee,de),i=D.getFrustum(),S(C,L,D.camera,ee,this.type)}D.isPointLightShadow!==!0&&this.type===Ai&&m(D,L),D.needsUpdate=!1}u=this.type,h.needsUpdate=!1,t.setRenderTarget(G,M,w)};function m(T,C){const L=e.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zr(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,L,p,v,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,L,g,v,null)}function _(T,C,L,G){let M=null;const w=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)M=w;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=M.uuid,k=C.uuid;let Y=c[I];Y===void 0&&(Y={},c[I]=Y);let re=Y[k];re===void 0&&(re=M.clone(),Y[k]=re,C.addEventListener("dispose",P)),M=re}if(M.visible=C.visible,M.wireframe=C.wireframe,G===Ai?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=L}return M}function S(T,C,L,G,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ai)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const k=e.update(T),Y=T.material;if(Array.isArray(Y)){const re=k.groups;for(let z=0,ee=re.length;z<ee;z++){const D=re[z],Z=Y[D.materialIndex];if(Z&&Z.visible){const ce=_(T,Z,G,M);T.onBeforeShadow(t,T,C,L,k,ce,D),t.renderBufferDirect(L,null,k,ce,T,D),T.onAfterShadow(t,T,C,L,k,ce,D)}}}else if(Y.visible){const re=_(T,Y,G,M);T.onBeforeShadow(t,T,C,L,k,re,null),t.renderBufferDirect(L,null,k,re,T,null),T.onAfterShadow(t,T,C,L,k,re,null)}}const I=T.children;for(let k=0,Y=I.length;k<Y;k++)S(I[k],C,L,G,M)}function P(T){T.target.removeEventListener("dispose",P);for(const L in c){const G=c[L],M=T.target.uuid;M in G&&(G[M].dispose(),delete G[M])}}}const L2={[$d]:qd,[Kd]:Jd,[Zd]:eh,[no]:Qd,[qd]:$d,[Jd]:Kd,[eh]:Zd,[Qd]:no};function D2(t){function e(){let B=!1;const Te=new ct;let se=null;const he=new ct(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!B&&(t.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,Ae,et,Rt,cn){cn===!0&&(Ee*=Rt,Ae*=Rt,et*=Rt),Te.set(Ee,Ae,et,Rt),he.equals(Te)===!1&&(t.clearColor(Ee,Ae,et,Rt),he.copy(Te))},reset:function(){B=!1,se=null,he.set(-1,0,0,0)}}}function n(){let B=!1,Te=!1,se=null,he=null,Ee=null;return{setReversed:function(Ae){Te=Ae},setTest:function(Ae){Ae?pe(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Ae){se!==Ae&&!B&&(t.depthMask(Ae),se=Ae)},setFunc:function(Ae){if(Te&&(Ae=L2[Ae]),he!==Ae){switch(Ae){case $d:t.depthFunc(t.NEVER);break;case qd:t.depthFunc(t.ALWAYS);break;case Kd:t.depthFunc(t.LESS);break;case no:t.depthFunc(t.LEQUAL);break;case Zd:t.depthFunc(t.EQUAL);break;case Qd:t.depthFunc(t.GEQUAL);break;case Jd:t.depthFunc(t.GREATER);break;case eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){Ee!==Ae&&(t.clearDepth(Ae),Ee=Ae)},reset:function(){B=!1,se=null,he=null,Ee=null}}}function i(){let B=!1,Te=null,se=null,he=null,Ee=null,Ae=null,et=null,Rt=null,cn=null;return{setTest:function(nt){B||(nt?pe(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(nt){Te!==nt&&!B&&(t.stencilMask(nt),Te=nt)},setFunc:function(nt,un,xi){(se!==nt||he!==un||Ee!==xi)&&(t.stencilFunc(nt,un,xi),se=nt,he=un,Ee=xi)},setOp:function(nt,un,xi){(Ae!==nt||et!==un||Rt!==xi)&&(t.stencilOp(nt,un,xi),Ae=nt,et=un,Rt=xi)},setLocked:function(nt){B=nt},setClear:function(nt){cn!==nt&&(t.clearStencil(nt),cn=nt)},reset:function(){B=!1,Te=null,se=null,he=null,Ee=null,Ae=null,et=null,Rt=null,cn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],g=null,x=!1,v=null,h=null,u=null,m=null,_=null,S=null,P=null,T=new Ve(0,0,0),C=0,L=!1,G=null,M=null,w=null,I=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,z=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),re=z>=1):ee.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),re=z>=2);let D=null,Z={};const ce=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ce=new ct().fromArray(ce),ke=new ct().fromArray(de);function ne(B,Te,se,he){const Ee=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(B,Ae),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<se;et++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Te+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Ae}const fe={};fe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(no),H(!1),le(Sm),pe(t.CULL_FACE),A(ur);function pe(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function xe(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function Oe(B,Te){return d[B]!==Te?(t.bindFramebuffer(B,Te),d[B]=Te,B===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Te),B===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Te),!0):!1}function Fe(B,Te){let se=p,he=!1;if(B){se=f.get(Te),se===void 0&&(se=[],f.set(Te,se));const Ee=B.textures;if(se.length!==Ee.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,et=Ee.length;Ae<et;Ae++)se[Ae]=t.COLOR_ATTACHMENT0+Ae;se.length=Ee.length,he=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,he=!0);he&&t.drawBuffers(se)}function Xe(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const Je={[Ur]:t.FUNC_ADD,[$S]:t.FUNC_SUBTRACT,[qS]:t.FUNC_REVERSE_SUBTRACT};Je[KS]=t.MIN,Je[ZS]=t.MAX;const $={[QS]:t.ZERO,[JS]:t.ONE,[eM]:t.SRC_COLOR,[Xd]:t.SRC_ALPHA,[oM]:t.SRC_ALPHA_SATURATE,[rM]:t.DST_COLOR,[nM]:t.DST_ALPHA,[tM]:t.ONE_MINUS_SRC_COLOR,[Yd]:t.ONE_MINUS_SRC_ALPHA,[sM]:t.ONE_MINUS_DST_COLOR,[iM]:t.ONE_MINUS_DST_ALPHA,[aM]:t.CONSTANT_COLOR,[lM]:t.ONE_MINUS_CONSTANT_COLOR,[cM]:t.CONSTANT_ALPHA,[uM]:t.ONE_MINUS_CONSTANT_ALPHA};function A(B,Te,se,he,Ee,Ae,et,Rt,cn,nt){if(B===ur){x===!0&&(xe(t.BLEND),x=!1);return}if(x===!1&&(pe(t.BLEND),x=!0),B!==YS){if(B!==v||nt!==L){if((h!==Ur||_!==Ur)&&(t.blendEquation(t.FUNC_ADD),h=Ur,_=Ur),nt)switch(B){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}u=null,m=null,S=null,P=null,T.set(0,0,0),C=0,v=B,L=nt}return}Ee=Ee||Te,Ae=Ae||se,et=et||he,(Te!==h||Ee!==_)&&(t.blendEquationSeparate(Je[Te],Je[Ee]),h=Te,_=Ee),(se!==u||he!==m||Ae!==S||et!==P)&&(t.blendFuncSeparate($[se],$[he],$[Ae],$[et]),u=se,m=he,S=Ae,P=et),(Rt.equals(T)===!1||cn!==C)&&(t.blendColor(Rt.r,Rt.g,Rt.b,cn),T.copy(Rt),C=cn),v=B,L=!1}function ie(B,Te){B.side===Pn?xe(t.CULL_FACE):pe(t.CULL_FACE);let se=B.side===on;Te&&(se=!se),H(se),B.blending===Xs&&B.transparent===!1?A(ur):A(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const he=B.stencilWrite;o.setTest(he),he&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function H(B){G!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),G=B)}function le(B){B!==jS?(pe(t.CULL_FACE),B!==M&&(B===Sm?t.cullFace(t.BACK):B===XS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),M=B}function q(B){B!==w&&(re&&t.lineWidth(B),w=B)}function te(B,Te,se){B?(pe(t.POLYGON_OFFSET_FILL),(I!==Te||k!==se)&&(t.polygonOffset(Te,se),I=Te,k=se)):xe(t.POLYGON_OFFSET_FILL)}function oe(B){B?pe(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function b(B){B===void 0&&(B=t.TEXTURE0+Y-1),D!==B&&(t.activeTexture(B),D=B)}function E(B,Te,se){se===void 0&&(D===null?se=t.TEXTURE0+Y-1:se=D);let he=Z[se];he===void 0&&(he={type:void 0,texture:void 0},Z[se]=he),(he.type!==B||he.texture!==Te)&&(D!==se&&(t.activeTexture(se),D=se),t.bindTexture(B,Te||fe[B]),he.type=B,he.texture=Te)}function O(){const B=Z[D];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){Ce.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ce.copy(B))}function Se(B){ke.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),ke.copy(B))}function Ke(B,Te){let se=l.get(Te);se===void 0&&(se=new WeakMap,l.set(Te,se));let he=se.get(B);he===void 0&&(he=t.getUniformBlockIndex(Te,B.name),se.set(B,he))}function Ye(B,Te){const he=l.get(Te).get(B);a.get(Te)!==he&&(t.uniformBlockBinding(Te,he,B.__bindingPointIndex),a.set(Te,he))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Z={},d={},f=new WeakMap,p=[],g=null,x=!1,v=null,h=null,u=null,m=null,_=null,S=null,P=null,T=new Ve(0,0,0),C=0,L=!1,G=null,M=null,w=null,I=null,k=null,Ce.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:xe,bindFramebuffer:Oe,drawBuffers:Fe,useProgram:Xe,setBlending:A,setMaterial:ie,setFlipSided:H,setCullFace:le,setLineWidth:q,setPolygonOffset:te,setScissorTest:oe,activeTexture:b,bindTexture:E,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:N,texImage2D:me,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:Ye,texStorage2D:ve,texStorage3D:K,texSubImage2D:U,texSubImage3D:ae,compressedTexSubImage2D:X,compressedTexSubImage3D:ue,scissor:Ie,viewport:Se,reset:dt}}function f0(t,e,n,i){const r=N2(i);switch(n){case cv:return t*e;case dv:return t*e;case hv:return t*e*2;case fv:return t*e/r.components*r.byteLength;case If:return t*e/r.components*r.byteLength;case pv:return t*e*2/r.components*r.byteLength;case Uf:return t*e*2/r.components*r.byteLength;case uv:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case kf:return t*e*4/r.components*r.byteLength;case Tl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(t,8)*Math.max(e,8)/2;case lh:case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Th:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mv:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bh:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function N2(t){switch(t){case zi:case ov:return{byteLength:1,components:1};case fa:case av:case ya:return{byteLength:2,components:1};case Df:case Nf:return{byteLength:2,components:4};case Kr:case Lf:case Di:return{byteLength:4,components:1};case lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function I2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,E){return g?new OffscreenCanvas(b,E):pa("canvas")}function v(b,E,O){let j=1;const N=oe(b);if((N.width>O||N.height>O)&&(j=O/Math.max(N.width,N.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const U=Math.floor(j*N.width),ae=Math.floor(j*N.height);f===void 0&&(f=x(U,ae));const X=E?x(U,ae):f;return X.width=U,X.height=ae,X.getContext("2d").drawImage(b,0,0,U,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+U+"x"+ae+")."),X}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),b;return b}function h(b){return b.generateMipmaps&&b.minFilter!==jn&&b.minFilter!==ii}function u(b){t.generateMipmap(b)}function m(b,E,O,j,N=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let U=E;if(E===t.RED&&(O===t.FLOAT&&(U=t.R32F),O===t.HALF_FLOAT&&(U=t.R16F),O===t.UNSIGNED_BYTE&&(U=t.R8)),E===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.R8UI),O===t.UNSIGNED_SHORT&&(U=t.R16UI),O===t.UNSIGNED_INT&&(U=t.R32UI),O===t.BYTE&&(U=t.R8I),O===t.SHORT&&(U=t.R16I),O===t.INT&&(U=t.R32I)),E===t.RG&&(O===t.FLOAT&&(U=t.RG32F),O===t.HALF_FLOAT&&(U=t.RG16F),O===t.UNSIGNED_BYTE&&(U=t.RG8)),E===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.RG8UI),O===t.UNSIGNED_SHORT&&(U=t.RG16UI),O===t.UNSIGNED_INT&&(U=t.RG32UI),O===t.BYTE&&(U=t.RG8I),O===t.SHORT&&(U=t.RG16I),O===t.INT&&(U=t.RG32I)),E===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.RGB8UI),O===t.UNSIGNED_SHORT&&(U=t.RGB16UI),O===t.UNSIGNED_INT&&(U=t.RGB32UI),O===t.BYTE&&(U=t.RGB8I),O===t.SHORT&&(U=t.RGB16I),O===t.INT&&(U=t.RGB32I)),E===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(U=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(U=t.RGBA16UI),O===t.UNSIGNED_INT&&(U=t.RGBA32UI),O===t.BYTE&&(U=t.RGBA8I),O===t.SHORT&&(U=t.RGBA16I),O===t.INT&&(U=t.RGBA32I)),E===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(U=t.RGB9_E5),E===t.RGBA){const ae=N?ic:st.getTransfer(j);O===t.FLOAT&&(U=t.RGBA32F),O===t.HALF_FLOAT&&(U=t.RGBA16F),O===t.UNSIGNED_BYTE&&(U=ae===gt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(U=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(U=t.RGB5_A1)}return(U===t.R16F||U===t.R32F||U===t.RG16F||U===t.RG32F||U===t.RGBA16F||U===t.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function _(b,E){let O;return b?E===null||E===Kr||E===oo?O=t.DEPTH24_STENCIL8:E===Di?O=t.DEPTH32F_STENCIL8:E===fa&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kr||E===oo?O=t.DEPTH_COMPONENT24:E===Di?O=t.DEPTH_COMPONENT32F:E===fa&&(O=t.DEPTH_COMPONENT16),O}function S(b,E){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==jn&&b.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function P(b){const E=b.target;E.removeEventListener("dispose",P),C(E),E.isVideoTexture&&d.delete(E)}function T(b){const E=b.target;E.removeEventListener("dispose",T),G(E)}function C(b){const E=i.get(b);if(E.__webglInit===void 0)return;const O=b.source,j=p.get(O);if(j){const N=j[E.__cacheKey];N.usedTimes--,N.usedTimes===0&&L(b),Object.keys(j).length===0&&p.delete(O)}i.remove(b)}function L(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const O=b.source,j=p.get(O);delete j[E.__cacheKey],o.memory.textures--}function G(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let N=0;N<E.__webglFramebuffer[j].length;N++)t.deleteFramebuffer(E.__webglFramebuffer[j][N]);else t.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)t.deleteFramebuffer(E.__webglFramebuffer[j]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=b.textures;for(let j=0,N=O.length;j<N;j++){const U=i.get(O[j]);U.__webglTexture&&(t.deleteTexture(U.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(b)}let M=0;function w(){M=0}function I(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function k(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function Y(b,E){const O=i.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(O,b,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function re(b,E){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ke(O,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function z(b,E){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ke(O,b,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function ee(b,E){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ne(O,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const D={[so]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[ih]:t.MIRRORED_REPEAT},Z={[jn]:t.NEAREST,[xM]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[mu]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},ce={[EM]:t.NEVER,[RM]:t.ALWAYS,[wM]:t.LESS,[_v]:t.LEQUAL,[TM]:t.EQUAL,[bM]:t.GEQUAL,[AM]:t.GREATER,[CM]:t.NOTEQUAL};function de(b,E){if(E.type===Di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===mu||E.magFilter===Va||E.magFilter===Vr||E.minFilter===ii||E.minFilter===mu||E.minFilter===Va||E.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,D[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jn||E.minFilter!==Va&&E.minFilter!==Vr||E.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(b,E){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",P));const j=E.source;let N=p.get(j);N===void 0&&(N={},p.set(j,N));const U=k(E);if(U!==b.__cacheKey){N[U]===void 0&&(N[U]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),N[U].usedTimes++;const ae=N[b.__cacheKey];ae!==void 0&&(N[b.__cacheKey].usedTimes--,ae.usedTimes===0&&L(E)),b.__cacheKey=U,b.__webglTexture=N[U].texture}return O}function ke(b,E,O){let j=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=t.TEXTURE_3D);const N=Ce(b,E),U=E.source;n.bindTexture(j,b.__webglTexture,t.TEXTURE0+O);const ae=i.get(U);if(U.version!==ae.__version||N===!0){n.activeTexture(t.TEXTURE0+O);const X=st.getPrimaries(st.workingColorSpace),ue=E.colorSpace===Ji?null:st.getPrimaries(E.colorSpace),ve=E.colorSpace===Ji||X===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let K=v(E.image,!1,r.maxTextureSize);K=te(E,K);const me=s.convert(E.format,E.colorSpace),Me=s.convert(E.type);let Ie=m(E.internalFormat,me,Me,E.colorSpace,E.isVideoTexture);de(j,E);let Se;const Ke=E.mipmaps,Ye=E.isVideoTexture!==!0,dt=ae.__version===void 0||N===!0,B=U.dataReady,Te=S(E,K);if(E.isDepthTexture)Ie=_(E.format===ao,E.type),dt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Ie,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,Ie,K.width,K.height,0,me,Me,null));else if(E.isDataTexture)if(Ke.length>0){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Te,Ie,Ke[0].width,Ke[0].height);for(let se=0,he=Ke.length;se<he;se++)Se=Ke[se],Ye?B&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Se.width,Se.height,me,Me,Se.data):n.texImage2D(t.TEXTURE_2D,se,Ie,Se.width,Se.height,0,me,Me,Se.data);E.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,Te,Ie,K.width,K.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,me,Me,K.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,K.width,K.height,0,me,Me,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Ie,Ke[0].width,Ke[0].height,K.depth);for(let se=0,he=Ke.length;se<he;se++)if(Se=Ke[se],E.format!==oi)if(me!==null)if(Ye){if(B)if(E.layerUpdates.size>0){const Ee=f0(Se.width,Se.height,E.format,E.type);for(const Ae of E.layerUpdates){const et=Se.data.subarray(Ae*Ee/Se.data.BYTES_PER_ELEMENT,(Ae+1)*Ee/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Ae,Se.width,Se.height,1,me,et,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,K.depth,me,Se.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ie,Se.width,Se.height,K.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,K.depth,me,Me,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ie,Se.width,Se.height,K.depth,0,me,Me,Se.data)}else{Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Te,Ie,Ke[0].width,Ke[0].height);for(let se=0,he=Ke.length;se<he;se++)Se=Ke[se],E.format!==oi?me!==null?Ye?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Se.width,Se.height,me,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?B&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Se.width,Se.height,me,Me,Se.data):n.texImage2D(t.TEXTURE_2D,se,Ie,Se.width,Se.height,0,me,Me,Se.data)}else if(E.isDataArrayTexture)if(Ye){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Ie,K.width,K.height,K.depth),B)if(E.layerUpdates.size>0){const se=f0(K.width,K.height,E.format,E.type);for(const he of E.layerUpdates){const Ee=K.data.subarray(he*se/K.data.BYTES_PER_ELEMENT,(he+1)*se/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,K.width,K.height,1,me,Me,Ee)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,me,Me,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,K.width,K.height,K.depth,0,me,Me,K.data);else if(E.isData3DTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_3D,Te,Ie,K.width,K.height,K.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,me,Me,K.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,K.width,K.height,K.depth,0,me,Me,K.data);else if(E.isFramebufferTexture){if(dt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Te,Ie,K.width,K.height);else{let se=K.width,he=K.height;for(let Ee=0;Ee<Te;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Ie,se,he,0,me,Me,null),se>>=1,he>>=1}}else if(Ke.length>0){if(Ye&&dt){const se=oe(Ke[0]);n.texStorage2D(t.TEXTURE_2D,Te,Ie,se.width,se.height)}for(let se=0,he=Ke.length;se<he;se++)Se=Ke[se],Ye?B&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,me,Me,Se):n.texImage2D(t.TEXTURE_2D,se,Ie,me,Me,Se);E.generateMipmaps=!1}else if(Ye){if(dt){const se=oe(K);n.texStorage2D(t.TEXTURE_2D,Te,Ie,se.width,se.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Me,K)}else n.texImage2D(t.TEXTURE_2D,0,Ie,me,Me,K);h(E)&&u(j),ae.__version=U.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ne(b,E,O){if(E.image.length!==6)return;const j=Ce(b,E),N=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);const U=i.get(N);if(N.version!==U.__version||j===!0){n.activeTexture(t.TEXTURE0+O);const ae=st.getPrimaries(st.workingColorSpace),X=E.colorSpace===Ji?null:st.getPrimaries(E.colorSpace),ue=E.colorSpace===Ji||ae===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,K=E.image[0]&&E.image[0].isDataTexture,me=[];for(let he=0;he<6;he++)!ve&&!K?me[he]=v(E.image[he],!0,r.maxCubemapSize):me[he]=K?E.image[he].image:E.image[he],me[he]=te(E,me[he]);const Me=me[0],Ie=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),Ke=m(E.internalFormat,Ie,Se,E.colorSpace),Ye=E.isVideoTexture!==!0,dt=U.__version===void 0||j===!0,B=N.dataReady;let Te=S(E,Me);de(t.TEXTURE_CUBE_MAP,E);let se;if(ve){Ye&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ke,Me.width,Me.height);for(let he=0;he<6;he++){se=me[he].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const Ae=se[Ee];E.format!==oi?Ie!==null?Ye?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Ae.width,Ae.height,Ie,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,Ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Ae.width,Ae.height,Ie,Se,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,Ke,Ae.width,Ae.height,0,Ie,Se,Ae.data)}}}else{if(se=E.mipmaps,Ye&&dt){se.length>0&&Te++;const he=oe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ke,he.width,he.height)}for(let he=0;he<6;he++)if(K){Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,me[he].width,me[he].height,Ie,Se,me[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ke,me[he].width,me[he].height,0,Ie,Se,me[he].data);for(let Ee=0;Ee<se.length;Ee++){const et=se[Ee].image[he].image;Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,et.width,et.height,Ie,Se,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,Ke,et.width,et.height,0,Ie,Se,et.data)}}else{Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie,Se,me[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ke,Ie,Se,me[he]);for(let Ee=0;Ee<se.length;Ee++){const Ae=se[Ee];Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Ie,Se,Ae.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,Ke,Ie,Se,Ae.image[he])}}}h(E)&&u(t.TEXTURE_CUBE_MAP),U.__version=N.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function fe(b,E,O,j,N,U){const ae=s.convert(O.format,O.colorSpace),X=s.convert(O.type),ue=m(O.internalFormat,ae,X,O.colorSpace);if(!i.get(E).__hasExternalTextures){const K=Math.max(1,E.width>>U),me=Math.max(1,E.height>>U);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,U,ue,K,me,E.depth,0,ae,X,null):n.texImage2D(N,U,ue,K,me,0,ae,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,N,i.get(O).__webglTexture,0,H(E)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,N,i.get(O).__webglTexture,U),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(b,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const j=E.depthTexture,N=j&&j.isDepthTexture?j.type:null,U=_(E.stencilBuffer,N),ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=H(E);le(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X,U,E.width,E.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,X,U,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,U,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,b)}else{const j=E.textures;for(let N=0;N<j.length;N++){const U=j[N],ae=s.convert(U.format,U.colorSpace),X=s.convert(U.type),ue=m(U.internalFormat,ae,X,U.colorSpace),ve=H(E);O&&le(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ue,E.width,E.height):le(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const j=i.get(E.depthTexture).__webglTexture,N=H(E);if(E.depthTexture.format===Ys)le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(E.depthTexture.format===ao)le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Oe(b){const E=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const N=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",N)};j.addEventListener("dispose",N),E.__depthDisposeCallback=N}E.__boundDepthTexture=j}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");xe(E.__webglFramebuffer,b)}else if(O){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=t.createRenderbuffer(),pe(E.__webglDepthbuffer[j],b,!1);else{const N=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=E.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,U),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,U)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),pe(E.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,N)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(b,E,O){const j=i.get(b);E!==void 0&&fe(j.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Oe(b)}function Xe(b){const E=b.texture,O=i.get(b),j=i.get(E);b.addEventListener("dispose",T);const N=b.textures,U=b.isWebGLCubeRenderTarget===!0,ae=N.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=E.version,o.memory.textures++),U){O.__webglFramebuffer=[];for(let X=0;X<6;X++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[X]=[];for(let ue=0;ue<E.mipmaps.length;ue++)O.__webglFramebuffer[X][ue]=t.createFramebuffer()}else O.__webglFramebuffer[X]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let X=0;X<E.mipmaps.length;X++)O.__webglFramebuffer[X]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ae)for(let X=0,ue=N.length;X<ue;X++){const ve=i.get(N[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&le(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let X=0;X<N.length;X++){const ue=N[X];O.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[X]);const ve=s.convert(ue.format,ue.colorSpace),K=s.convert(ue.type),me=m(ue.internalFormat,ve,K,ue.colorSpace,b.isXRRenderTarget===!0),Me=H(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,O.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(U){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),de(t.TEXTURE_CUBE_MAP,E);for(let X=0;X<6;X++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)fe(O.__webglFramebuffer[X][ue],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue);else fe(O.__webglFramebuffer[X],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);h(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let X=0,ue=N.length;X<ue;X++){const ve=N[X],K=i.get(ve);n.bindTexture(t.TEXTURE_2D,K.__webglTexture),de(t.TEXTURE_2D,ve),fe(O.__webglFramebuffer,b,ve,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D,0),h(ve)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(X=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,j.__webglTexture),de(X,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)fe(O.__webglFramebuffer[ue],b,E,t.COLOR_ATTACHMENT0,X,ue);else fe(O.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,X,0);h(E)&&u(X),n.unbindTexture()}b.depthBuffer&&Oe(b)}function Je(b){const E=b.textures;for(let O=0,j=E.length;O<j;O++){const N=E[O];if(h(N)){const U=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(N).__webglTexture;n.bindTexture(U,ae),u(U),n.unbindTexture()}}}const $=[],A=[];function ie(b){if(b.samples>0){if(le(b)===!1){const E=b.textures,O=b.width,j=b.height;let N=t.COLOR_BUFFER_BIT;const U=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(b),X=E.length>1;if(X)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const ve=i.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,O,j,0,0,O,j,N,t.NEAREST),l===!0&&($.length=0,A.length=0,$.push(t.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&($.push(U),A.push(U),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,A)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const ve=i.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function H(b){return Math.min(r.maxSamples,b.samples)}function le(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(b){const E=o.render.frame;d.get(b)!==E&&(d.set(b,E),b.update())}function te(b,E){const O=b.colorSpace,j=b.format,N=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==xr&&O!==Ji&&(st.getTransfer(O)===gt?(j!==oi||N!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=w,this.setTexture2D=Y,this.setTexture2DArray=re,this.setTexture3D=z,this.setTextureCube=ee,this.rebindTextures=Fe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=le}function U2(t,e){function n(i,r=Ji){let s;const o=st.getTransfer(r);if(i===zi)return t.UNSIGNED_BYTE;if(i===Df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ov)return t.BYTE;if(i===av)return t.SHORT;if(i===fa)return t.UNSIGNED_SHORT;if(i===Lf)return t.INT;if(i===Kr)return t.UNSIGNED_INT;if(i===Di)return t.FLOAT;if(i===ya)return t.HALF_FLOAT;if(i===cv)return t.ALPHA;if(i===uv)return t.RGB;if(i===oi)return t.RGBA;if(i===dv)return t.LUMINANCE;if(i===hv)return t.LUMINANCE_ALPHA;if(i===Ys)return t.DEPTH_COMPONENT;if(i===ao)return t.DEPTH_STENCIL;if(i===fv)return t.RED;if(i===If)return t.RED_INTEGER;if(i===pv)return t.RG;if(i===Uf)return t.RG_INTEGER;if(i===kf)return t.RGBA_INTEGER;if(i===Tl||i===Al||i===Cl||i===bl)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===ch)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dh||i===hh||i===fh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===wh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_h)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Th||i===Ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mv||i===Ch||i===bh||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class k2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F2={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const h=n.getJointPose(v,i),u=this._getHandJoint(c,v);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const O2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
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

}`;class B2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new mr({vertexShader:O2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ze(new Jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,x=null;const v=new B2,h=n.getContextAttributes();let u=null,m=null;const _=[],S=[],P=new ze;let T=null;const C=new Rn;C.layers.enable(1),C.viewport=new ct;const L=new Rn;L.layers.enable(2),L.viewport=new ct;const G=[C,L],M=new k2;M.layers.enable(1),M.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=_[ne];return fe===void 0&&(fe=new Wu,_[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=_[ne];return fe===void 0&&(fe=new Wu,_[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=_[ne];return fe===void 0&&(fe=new Wu,_[ne]=fe),fe.getHandSpace()};function k(ne){const fe=S.indexOf(ne.inputSource);if(fe===-1)return;const pe=_[fe];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,c||o),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",re);for(let ne=0;ne<_.length;ne++){const fe=S[ne];fe!==null&&(S[ne]=null,_[ne].disconnect(fe))}w=null,I=null,v.reset(),e.setRenderTarget(u),g=null,p=null,f=null,r=null,m=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",re),h.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const fe={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Zr(g.framebufferWidth,g.framebufferHeight,{format:oi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let fe=null,pe=null,xe=null;h.depth&&(xe=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=h.stencil?ao:Ys,pe=h.stencil?oo:Kr);const Oe={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Zr(p.textureWidth,p.textureHeight,{format:oi,type:zi,depthTexture:new Rv(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(ne){for(let fe=0;fe<ne.removed.length;fe++){const pe=ne.removed[fe],xe=S.indexOf(pe);xe>=0&&(S[xe]=null,_[xe].disconnect(pe))}for(let fe=0;fe<ne.added.length;fe++){const pe=ne.added[fe];let xe=S.indexOf(pe);if(xe===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=S.length){S.push(pe),xe=Fe;break}else if(S[Fe]===null){S[Fe]=pe,xe=Fe;break}if(xe===-1)break}const Oe=_[xe];Oe&&Oe.connect(pe)}}const z=new F,ee=new F;function D(ne,fe,pe){z.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const xe=z.distanceTo(ee),Oe=fe.projectionMatrix.elements,Fe=pe.projectionMatrix.elements,Xe=Oe[14]/(Oe[10]-1),Je=Oe[14]/(Oe[10]+1),$=(Oe[9]+1)/Oe[5],A=(Oe[9]-1)/Oe[5],ie=(Oe[8]-1)/Oe[0],H=(Fe[8]+1)/Fe[0],le=Xe*ie,q=Xe*H,te=xe/(-ie+H),oe=te*-ie;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(oe),ne.translateZ(te),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const b=Xe+te,E=Je+te,O=le-oe,j=q+(xe-oe),N=$*Je/E*b,U=A*Je/E*b;ne.projectionMatrix.makePerspective(O,j,N,U,b,E),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Z(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let fe=ne.near,pe=ne.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),M.near=L.near=C.near=fe,M.far=L.far=C.far=pe,(w!==M.near||I!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,I=M.far);const xe=ne.parent,Oe=M.cameras;Z(M,xe);for(let Fe=0;Fe<Oe.length;Fe++)Z(Oe[Fe],xe);Oe.length===2?D(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),ce(ne,M,xe)};function ce(ne,fe,pe){pe===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ph*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(ne){l=ne,p!==null&&(p.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let de=null;function Ce(ne,fe){if(d=fe.getViewerPose(c||o),x=fe,d!==null){const pe=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let xe=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let Fe=0;Fe<pe.length;Fe++){const Xe=pe[Fe];let Je=null;if(g!==null)Je=g.getViewport(Xe);else{const A=f.getViewSubImage(p,Xe);Je=A.viewport,Fe===0&&(e.setRenderTargetTextures(m,A.colorTexture,p.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(m))}let $=G[Fe];$===void 0&&($=new Rn,$.layers.enable(Fe),$.viewport=new ct,G[Fe]=$),$.matrix.fromArray(Xe.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Xe.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Je.x,Je.y,Je.width,Je.height),Fe===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push($)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Fe=f.getDepthInformation(pe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let pe=0;pe<_.length;pe++){const xe=S[pe],Oe=_[pe];xe!==null&&Oe!==void 0&&Oe.update(xe,fe,c||o)}de&&de(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),x=null}const ke=new Cv;ke.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){de=ne},this.dispose=function(){}}}const Cr=new vi,V2=new ut;function G2(t,e){function n(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,wv(t)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,m,_,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(h,u):u.isMeshToonMaterial?(s(h,u),f(h,u)):u.isMeshPhongMaterial?(s(h,u),d(h,u)):u.isMeshStandardMaterial?(s(h,u),p(h,u),u.isMeshPhysicalMaterial&&g(h,u,S)):u.isMeshMatcapMaterial?(s(h,u),x(h,u)):u.isMeshDepthMaterial?s(h,u):u.isMeshDistanceMaterial?(s(h,u),v(h,u)):u.isMeshNormalMaterial?s(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?l(h,u,m,_):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,n(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===on&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,n(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===on&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,n(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,n(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const m=e.get(u),_=m.envMap,S=m.envMapRotation;_&&(h.envMap.value=_,Cr.copy(S),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),h.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(Cr)),h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,m,_){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*m,h.scale.value=_*.5,u.map&&(h.map.value=u.map,n(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function g(h,u,m){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,u){u.matcap&&(h.matcap.value=u.matcap)}function v(h,u){const m=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(m.matrixWorld),h.nearDistance.value=m.shadow.camera.near,h.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=r[m.id];S===void 0&&(x(m),S=d(m),r[m.id]=S,m.addEventListener("dispose",h));const P=_.program;i.updateUBOMapping(m,P);const T=e.render.frame;s[m.id]!==T&&(p(m),s[m.id]=T)}function d(m){const _=f();m.__bindingPointIndex=_;const S=t.createBuffer(),P=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const _=r[m.id],S=m.uniforms,P=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=S.length;T<C;T++){const L=Array.isArray(S[T])?S[T]:[S[T]];for(let G=0,M=L.length;G<M;G++){const w=L[G];if(g(w,T,G,P)===!0){const I=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let Y=0;for(let re=0;re<k.length;re++){const z=k[re],ee=v(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,I+Y,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,_,S,P){const T=m.value,C=_+"_"+S;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{const L=P[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function x(m){const _=m.uniforms;let S=0;const P=16;for(let C=0,L=_.length;C<L;C++){const G=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,w=G.length;M<w;M++){const I=G[M],k=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,re=k.length;Y<re;Y++){const z=k[Y],ee=v(z),D=S%P,Z=D%ee.boundary,ce=D+Z;S+=Z,ce!==0&&P-ce<ee.storage&&(S+=P-ce),I.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=ee.storage}}}const T=S%P;return T>0&&(S+=P-T),m.__size=S,m.__cache={},this}function v(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class j2{constructor(e={}){const{canvas:n=DM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,h=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=dr,this.toneMappingExposure=1;const _=this;let S=!1,P=0,T=0,C=null,L=-1,G=null;const M=new ct,w=new ct;let I=null;const k=new Ve(0);let Y=0,re=n.width,z=n.height,ee=1,D=null,Z=null;const ce=new ct(0,0,re,z),de=new ct(0,0,re,z);let Ce=!1;const ke=new zf;let ne=!1,fe=!1;const pe=new ut,xe=new ut,Oe=new F,Fe=new ct,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function $(){return C===null?ee:1}let A=i;function ie(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),A===null){const V="webgl2";if(A=ie(V,R),A===null)throw ie(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let H,le,q,te,oe,b,E,O,j,N,U,ae,X,ue,ve,K,me,Me,Ie,Se,Ke,Ye,dt,B;function Te(){H=new Kw(A),H.init(),Ye=new U2(A,H),le=new Ww(A,H,e,Ye),q=new D2(A),le.reverseDepthBuffer&&q.buffers.depth.setReversed(!0),te=new Jw(A),oe=new _2,b=new I2(A,H,q,oe,le,Ye,te),E=new Xw(_),O=new qw(_),j=new o1(A),dt=new Vw(A,j),N=new Zw(A,j,te,dt),U=new tT(A,N,j,te),Ie=new eT(A,le,b),K=new jw(oe),ae=new g2(_,E,O,H,le,dt,K),X=new G2(_,oe),ue=new x2,ve=new T2(H),Me=new Hw(_,E,O,q,U,p,l),me=new P2(_,U,le),B=new W2(A,te,le,q),Se=new Gw(A,H,te),Ke=new Qw(A,H,te),te.programs=ae.programs,_.capabilities=le,_.extensions=H,_.properties=oe,_.renderLists=ue,_.shadowMap=me,_.state=q,_.info=te}Te();const se=new H2(_,A);this.xr=se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const R=H.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=H.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(re,z,!1))},this.getSize=function(R){return R.set(re,z)},this.setSize=function(R,V,Q=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,z=V,n.width=Math.floor(R*ee),n.height=Math.floor(V*ee),Q===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(re*ee,z*ee).floor()},this.setDrawingBufferSize=function(R,V,Q){re=R,z=V,ee=Q,n.width=Math.floor(R*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,V,Q,J){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,V,Q,J),q.viewport(M.copy(ce).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,V,Q,J){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,V,Q,J),q.scissor(w.copy(de).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(R){q.setScissorTest(Ce=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(R=!0,V=!0,Q=!0){let J=0;if(R){let W=!1;if(C!==null){const _e=C.texture.format;W=_e===kf||_e===Uf||_e===If}if(W){const _e=C.texture.type,we=_e===zi||_e===Kr||_e===fa||_e===oo||_e===Df||_e===Nf,Pe=Me.getClearColor(),De=Me.getClearAlpha(),Be=Pe.r,He=Pe.g,Ne=Pe.b;we?(g[0]=Be,g[1]=He,g[2]=Ne,g[3]=De,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Be,x[1]=He,x[2]=Ne,x[3]=De,A.clearBufferiv(A.COLOR,0,x))}else J|=A.COLOR_BUFFER_BIT}V&&(J|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),ue.dispose(),ve.dispose(),oe.dispose(),E.dispose(),O.dispose(),U.dispose(),dt.dispose(),B.dispose(),ae.dispose(),se.dispose(),se.removeEventListener("sessionstart",Zf),se.removeEventListener("sessionend",Qf),yr.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=te.autoReset,V=me.enabled,Q=me.autoUpdate,J=me.needsUpdate,W=me.type;Te(),te.autoReset=R,me.enabled=V,me.autoUpdate=Q,me.needsUpdate=J,me.type=W}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function et(R){const V=R.target;V.removeEventListener("dispose",et),Rt(V)}function Rt(R){cn(R),oe.remove(R)}function cn(R){const V=oe.get(R).programs;V!==void 0&&(V.forEach(function(Q){ae.releaseProgram(Q)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Q,J,W,_e){V===null&&(V=Xe);const we=W.isMesh&&W.matrixWorld.determinant()<0,Pe=Bv(R,V,Q,J,W);q.setMaterial(J,we);let De=Q.index,Be=1;if(J.wireframe===!0){if(De=N.getWireframeAttribute(Q),De===void 0)return;Be=2}const He=Q.drawRange,Ne=Q.attributes.position;let ot=He.start*Be,pt=(He.start+He.count)*Be;_e!==null&&(ot=Math.max(ot,_e.start*Be),pt=Math.min(pt,(_e.start+_e.count)*Be)),De!==null?(ot=Math.max(ot,0),pt=Math.min(pt,De.count)):Ne!=null&&(ot=Math.max(ot,0),pt=Math.min(pt,Ne.count));const Mt=pt-ot;if(Mt<0||Mt===1/0)return;dt.setup(W,J,Pe,Q,De);let En,it=Se;if(De!==null&&(En=j.get(De),it=Ke,it.setIndex(En)),W.isMesh)J.wireframe===!0?(q.setLineWidth(J.wireframeLinewidth*$()),it.setMode(A.LINES)):it.setMode(A.TRIANGLES);else if(W.isLine){let Ue=J.linewidth;Ue===void 0&&(Ue=1),q.setLineWidth(Ue*$()),W.isLineSegments?it.setMode(A.LINES):W.isLineLoop?it.setMode(A.LINE_LOOP):it.setMode(A.LINE_STRIP)}else W.isPoints?it.setMode(A.POINTS):W.isSprite&&it.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)it.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ue=W._multiDrawStarts,Ht=W._multiDrawCounts,rt=W._multiDrawCount,qn=De?j.get(De).bytesPerElement:1,ss=oe.get(J).currentProgram.getUniforms();for(let wn=0;wn<rt;wn++)ss.setValue(A,"_gl_DrawID",wn),it.render(Ue[wn]/qn,Ht[wn])}else if(W.isInstancedMesh)it.renderInstances(ot,Mt,W.count);else if(Q.isInstancedBufferGeometry){const Ue=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ht=Math.min(Q.instanceCount,Ue);it.renderInstances(ot,Mt,Ht)}else it.render(ot,Mt)};function nt(R,V,Q){R.transparent===!0&&R.side===Pn&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,wa(R,V,Q),R.side=pr,R.needsUpdate=!0,wa(R,V,Q),R.side=Pn):wa(R,V,Q)}this.compile=function(R,V,Q=null){Q===null&&(Q=R),h=ve.get(Q),h.init(V),m.push(h),Q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),R!==Q&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights();const J=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _e=W.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Pe=_e[we];nt(Pe,Q,W),J.add(Pe)}else nt(_e,Q,W),J.add(_e)}),m.pop(),h=null,J},this.compileAsync=function(R,V,Q=null){const J=this.compile(R,V,Q);return new Promise(W=>{function _e(){if(J.forEach(function(we){oe.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){W(R);return}setTimeout(_e,10)}H.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let un=null;function xi(R){un&&un(R)}function Zf(){yr.stop()}function Qf(){yr.start()}const yr=new Cv;yr.setAnimationLoop(xi),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(R){un=R,se.setAnimationLoop(R),R===null?yr.stop():yr.start()},se.addEventListener("sessionstart",Zf),se.addEventListener("sessionend",Qf),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,C),h=ve.get(R,m.length),h.init(V),m.push(h),xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ke.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,ne=K.init(this.clippingPlanes,fe),v=ue.get(R,u.length),v.init(),u.push(v),se.enabled===!0&&se.isPresenting===!0){const _e=_.xr.getDepthSensingMesh();_e!==null&&Nc(_e,V,-1/0,_.sortObjects)}Nc(R,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,Z),Je=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Je&&Me.addToRenderList(v,R),this.info.render.frame++,ne===!0&&K.beginShadows();const Q=h.state.shadowsArray;me.render(Q,R,V),ne===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,W=v.transmissive;if(h.setupLights(),V.isArrayCamera){const _e=V.cameras;if(W.length>0)for(let we=0,Pe=_e.length;we<Pe;we++){const De=_e[we];ep(J,W,R,De)}Je&&Me.render(R);for(let we=0,Pe=_e.length;we<Pe;we++){const De=_e[we];Jf(v,R,De,De.viewport)}}else W.length>0&&ep(J,W,R,V),Je&&Me.render(R),Jf(v,R,V);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,V),dt.resetDefaultState(),L=-1,G=null,m.pop(),m.length>0?(h=m[m.length-1],ne===!0&&K.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Nc(R,V,Q,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){J&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const we=U.update(R),Pe=R.material;Pe.visible&&v.push(R,we,Pe,Q,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const we=U.update(R),Pe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Fe.copy(we.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(Pe)){const De=we.groups;for(let Be=0,He=De.length;Be<He;Be++){const Ne=De[Be],ot=Pe[Ne.materialIndex];ot&&ot.visible&&v.push(R,we,ot,Q,Fe.z,Ne)}}else Pe.visible&&v.push(R,we,Pe,Q,Fe.z,null)}}const _e=R.children;for(let we=0,Pe=_e.length;we<Pe;we++)Nc(_e[we],V,Q,J)}function Jf(R,V,Q,J){const W=R.opaque,_e=R.transmissive,we=R.transparent;h.setupLightsView(Q),ne===!0&&K.setGlobalState(_.clippingPlanes,Q),J&&q.viewport(M.copy(J)),W.length>0&&Ea(W,V,Q),_e.length>0&&Ea(_e,V,Q),we.length>0&&Ea(we,V,Q),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ep(R,V,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[J.id]===void 0&&(h.state.transmissionRenderTarget[J.id]=new Zr(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?ya:zi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=h.state.transmissionRenderTarget[J.id],we=J.viewport||M;_e.setSize(we.z,we.w);const Pe=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(k),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Je&&Me.render(Q);const De=_.toneMapping;_.toneMapping=dr;const Be=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),h.setupLightsView(J),ne===!0&&K.setGlobalState(_.clippingPlanes,J),Ea(R,Q,J),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e),H.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ne=0,ot=V.length;Ne<ot;Ne++){const pt=V[Ne],Mt=pt.object,En=pt.geometry,it=pt.material,Ue=pt.group;if(it.side===Pn&&Mt.layers.test(J.layers)){const Ht=it.side;it.side=on,it.needsUpdate=!0,tp(Mt,Q,J,En,it,Ue),it.side=Ht,it.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e))}_.setRenderTarget(Pe),_.setClearColor(k,Y),Be!==void 0&&(J.viewport=Be),_.toneMapping=De}function Ea(R,V,Q){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,_e=R.length;W<_e;W++){const we=R[W],Pe=we.object,De=we.geometry,Be=J===null?we.material:J,He=we.group;Pe.layers.test(Q.layers)&&tp(Pe,V,Q,De,Be,He)}}function tp(R,V,Q,J,W,_e){R.onBeforeRender(_,V,Q,J,W,_e),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(_,V,Q,J,R,_e),W.transparent===!0&&W.side===Pn&&W.forceSinglePass===!1?(W.side=on,W.needsUpdate=!0,_.renderBufferDirect(Q,V,J,W,R,_e),W.side=pr,W.needsUpdate=!0,_.renderBufferDirect(Q,V,J,W,R,_e),W.side=Pn):_.renderBufferDirect(Q,V,J,W,R,_e),R.onAfterRender(_,V,Q,J,W,_e)}function wa(R,V,Q){V.isScene!==!0&&(V=Xe);const J=oe.get(R),W=h.state.lights,_e=h.state.shadowsArray,we=W.state.version,Pe=ae.getParameters(R,W.state,_e,V,Q),De=ae.getProgramCacheKey(Pe);let Be=J.programs;J.environment=R.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(R.isMeshStandardMaterial?O:E).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",et),Be=new Map,J.programs=Be);let He=Be.get(De);if(He!==void 0){if(J.currentProgram===He&&J.lightsStateVersion===we)return ip(R,Pe),He}else Pe.uniforms=ae.getUniforms(R),R.onBeforeCompile(Pe,_),He=ae.acquireProgram(Pe,De),Be.set(De,He),J.uniforms=Pe.uniforms;const Ne=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=K.uniform),ip(R,Pe),J.needsLights=Vv(R),J.lightsStateVersion=we,J.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=He,J.uniformsList=null,He}function np(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Dl.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function ip(R,V){const Q=oe.get(R);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Bv(R,V,Q,J,W){V.isScene!==!0&&(V=Xe),b.resetTextureUnits();const _e=V.fog,we=J.isMeshStandardMaterial?V.environment:null,Pe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xr,De=(J.isMeshStandardMaterial?O:E).get(J.envMap||we),Be=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ne=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,pt=!!Q.morphAttributes.color;let Mt=dr;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const En=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,it=En!==void 0?En.length:0,Ue=oe.get(J),Ht=h.state.lights;if(ne===!0&&(fe===!0||R!==G)){const Fn=R===G&&J.id===L;K.setState(J,R,Fn)}let rt=!1;J.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ht.state.version||Ue.outputColorSpace!==Pe||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==De||J.fog===!0&&Ue.fog!==_e||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==K.numPlanes||Ue.numIntersection!==K.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==He||Ue.morphTargets!==Ne||Ue.morphNormals!==ot||Ue.morphColors!==pt||Ue.toneMapping!==Mt||Ue.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ue.__version=J.version);let qn=Ue.currentProgram;rt===!0&&(qn=wa(J,V,W));let ss=!1,wn=!1,Ic=!1;const At=qn.getUniforms(),Hi=Ue.uniforms;if(q.useProgram(qn.program)&&(ss=!0,wn=!0,Ic=!0),J.id!==L&&(L=J.id,wn=!0),ss||G!==R){le.reverseDepthBuffer?(pe.copy(R.projectionMatrix),IM(pe),UM(pe),At.setValue(A,"projectionMatrix",pe)):At.setValue(A,"projectionMatrix",R.projectionMatrix),At.setValue(A,"viewMatrix",R.matrixWorldInverse);const Fn=At.map.cameraPosition;Fn!==void 0&&Fn.setValue(A,Oe.setFromMatrixPosition(R.matrixWorld)),le.logarithmicDepthBuffer&&At.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&At.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,wn=!0,Ic=!0)}if(W.isSkinnedMesh){At.setOptional(A,W,"bindMatrix"),At.setOptional(A,W,"bindMatrixInverse");const Fn=W.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),At.setValue(A,"boneTexture",Fn.boneTexture,b))}W.isBatchedMesh&&(At.setOptional(A,W,"batchingTexture"),At.setValue(A,"batchingTexture",W._matricesTexture,b),At.setOptional(A,W,"batchingIdTexture"),At.setValue(A,"batchingIdTexture",W._indirectTexture,b),At.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(A,"batchingColorTexture",W._colorsTexture,b));const Uc=Q.morphAttributes;if((Uc.position!==void 0||Uc.normal!==void 0||Uc.color!==void 0)&&Ie.update(W,Q,qn),(wn||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,At.setValue(A,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hi.envMap.value=De,Hi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Hi.envMapIntensity.value=V.environmentIntensity),wn&&(At.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Hv(Hi,Ic),_e&&J.fog===!0&&X.refreshFogUniforms(Hi,_e),X.refreshMaterialUniforms(Hi,J,ee,z,h.state.transmissionRenderTarget[R.id]),Dl.upload(A,np(Ue),Hi,b)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dl.upload(A,np(Ue),Hi,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&At.setValue(A,"center",W.center),At.setValue(A,"modelViewMatrix",W.modelViewMatrix),At.setValue(A,"normalMatrix",W.normalMatrix),At.setValue(A,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Fn=J.uniformsGroups;for(let kc=0,Gv=Fn.length;kc<Gv;kc++){const rp=Fn[kc];B.update(rp,qn),B.bind(rp,qn)}}return qn}function Hv(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Vv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,V,Q){oe.get(R.texture).__webglTexture=V,oe.get(R.depthTexture).__webglTexture=Q;const J=oe.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const Q=oe.get(R);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Q=0){C=R,P=V,T=Q;let J=!0,W=null,_e=!1,we=!1;if(R){const De=oe.get(R);if(De.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(A.FRAMEBUFFER,null),J=!1;else if(De.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(De.__hasExternalTextures)b.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ne=R.depthTexture;if(De.__boundDepthTexture!==Ne){if(Ne!==null&&oe.has(Ne)&&(R.width!==Ne.image.width||R.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const He=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[V])?W=He[V][Q]:W=He[V],_e=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?W=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?W=He[Q]:W=He,M.copy(R.viewport),w.copy(R.scissor),I=R.scissorTest}else M.copy(ce).multiplyScalar(ee).floor(),w.copy(de).multiplyScalar(ee).floor(),I=Ce;if(q.bindFramebuffer(A.FRAMEBUFFER,W)&&J&&q.drawBuffers(R,W),q.viewport(M),q.scissor(w),q.setScissorTest(I),_e){const De=oe.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,De.__webglTexture,Q)}else if(we){const De=oe.get(R.texture),Be=V||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.__webglTexture,Q||0,Be)}L=-1},this.readRenderTargetPixels=function(R,V,Q,J,W,_e,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){q.bindFramebuffer(A.FRAMEBUFFER,Pe);try{const De=R.texture,Be=De.format,He=De.type;if(!le.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&Q>=0&&Q<=R.height-W&&A.readPixels(V,Q,J,W,Ye.convert(Be),Ye.convert(He),_e)}finally{const De=C!==null?oe.get(C).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(R,V,Q,J,W,_e,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){const De=R.texture,Be=De.format,He=De.type;if(!le.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-J&&Q>=0&&Q<=R.height-W){q.bindFramebuffer(A.FRAMEBUFFER,Pe);const Ne=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ne),A.bufferData(A.PIXEL_PACK_BUFFER,_e.byteLength,A.STREAM_READ),A.readPixels(V,Q,J,W,Ye.convert(Be),Ye.convert(He),0);const ot=C!==null?oe.get(C).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,ot);const pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await NM(A,pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ne),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,_e),A.deleteBuffer(Ne),A.deleteSync(pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,Q=0){R.isTexture!==!0&&(Ll("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-Q),W=Math.floor(R.image.width*J),_e=Math.floor(R.image.height*J),we=V!==null?V.x:0,Pe=V!==null?V.y:0;b.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,Q,0,0,we,Pe,W,_e),q.unbindTexture()},this.copyTextureToTexture=function(R,V,Q=null,J=null,W=0){R.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],V=arguments[2],W=arguments[3]||0,Q=null);let _e,we,Pe,De,Be,He;Q!==null?(_e=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Pe=Q.min.x,De=Q.min.y):(_e=R.image.width,we=R.image.height,Pe=0,De=0),J!==null?(Be=J.x,He=J.y):(Be=0,He=0);const Ne=Ye.convert(V.format),ot=Ye.convert(V.type);b.setTexture2D(V,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const pt=A.getParameter(A.UNPACK_ROW_LENGTH),Mt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),En=A.getParameter(A.UNPACK_SKIP_PIXELS),it=A.getParameter(A.UNPACK_SKIP_ROWS),Ue=A.getParameter(A.UNPACK_SKIP_IMAGES),Ht=R.isCompressedTexture?R.mipmaps[W]:R.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Ht.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ht.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,De),R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,W,Be,He,_e,we,Ne,ot,Ht.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,W,Be,He,Ht.width,Ht.height,Ne,Ht.data):A.texSubImage2D(A.TEXTURE_2D,W,Be,He,_e,we,Ne,ot,Ht),A.pixelStorei(A.UNPACK_ROW_LENGTH,pt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Mt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,En),A.pixelStorei(A.UNPACK_SKIP_ROWS,it),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ue),W===0&&V.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Q=null,J=null,W=0){R.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,R=arguments[2],V=arguments[3],W=arguments[4]||0);let _e,we,Pe,De,Be,He,Ne,ot,pt;const Mt=R.isCompressedTexture?R.mipmaps[W]:R.image;Q!==null?(_e=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Pe=Q.max.z-Q.min.z,De=Q.min.x,Be=Q.min.y,He=Q.min.z):(_e=Mt.width,we=Mt.height,Pe=Mt.depth,De=0,Be=0,He=0),J!==null?(Ne=J.x,ot=J.y,pt=J.z):(Ne=0,ot=0,pt=0);const En=Ye.convert(V.format),it=Ye.convert(V.type);let Ue;if(V.isData3DTexture)b.setTexture3D(V,0),Ue=A.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),Ue=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const Ht=A.getParameter(A.UNPACK_ROW_LENGTH),rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),qn=A.getParameter(A.UNPACK_SKIP_PIXELS),ss=A.getParameter(A.UNPACK_SKIP_ROWS),wn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,De),A.pixelStorei(A.UNPACK_SKIP_ROWS,Be),A.pixelStorei(A.UNPACK_SKIP_IMAGES,He),R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Ue,W,Ne,ot,pt,_e,we,Pe,En,it,Mt.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Ue,W,Ne,ot,pt,_e,we,Pe,En,Mt.data):A.texSubImage3D(Ue,W,Ne,ot,pt,_e,we,Pe,En,it,Mt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ss),A.pixelStorei(A.UNPACK_SKIP_IMAGES,wn),W===0&&V.generateMipmaps&&A.generateMipmap(Ue),q.unbindTexture()},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),q.unbindTexture()},this.resetState=function(){P=0,T=0,C=null,q.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ff?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Ac?"display-p3":"srgb"}}class Iv extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Uv extends fo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new F,lc=new F,p0=new ut,Ro=new bc,cl=new Cc,ju=new F,m0=new F;class X2 extends Bt{constructor(e=new Mn,n=new Uv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ac.fromBufferAttribute(n,r-1),lc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;p0.copy(r).invert(),Ro.copy(e.ray).applyMatrix4(p0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const g=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=g,h=x-1;v<h;v+=c){const u=d.getX(v),m=d.getX(v+1),_=ul(this,e,Ro,l,u,m);_&&n.push(_)}if(this.isLineLoop){const v=d.getX(x-1),h=d.getX(g),u=ul(this,e,Ro,l,v,h);u&&n.push(u)}}else{const g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=g,h=x-1;v<h;v+=c){const u=ul(this,e,Ro,l,v,v+1);u&&n.push(u)}if(this.isLineLoop){const v=ul(this,e,Ro,l,x-1,g);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ul(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ac.fromBufferAttribute(o,r),lc.fromBufferAttribute(o,s),n.distanceSqToSegment(ac,lc,ju,m0)>i)return;ju.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ju);if(!(l<e.near||l>e.far))return{distance:l,point:m0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const g0=new F,_0=new F;class Y2 extends X2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)g0.fromBufferAttribute(n,r),_0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+g0.distanceTo(_0);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $2 extends Zt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lc extends Mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],g=[];let x=0;const v=[],h=i/2;let u=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(g,2));function m(){const S=new F,P=new F;let T=0;const C=(n-e)/i;for(let L=0;L<=s;L++){const G=[],M=L/s,w=M*(n-e)+e;for(let I=0;I<=r;I++){const k=I/r,Y=k*l+a,re=Math.sin(Y),z=Math.cos(Y);P.x=w*re,P.y=-M*i+h,P.z=w*z,f.push(P.x,P.y,P.z),S.set(re,C,z).normalize(),p.push(S.x,S.y,S.z),g.push(k,1-M),G.push(x++)}v.push(G)}for(let L=0;L<r;L++)for(let G=0;G<s;G++){const M=v[G][L],w=v[G+1][L],I=v[G+1][L+1],k=v[G][L+1];e>0&&(d.push(M,w,k),T+=3),n>0&&(d.push(w,I,k),T+=3)}c.addGroup(u,T,0),u+=T}function _(S){const P=x,T=new ze,C=new F;let L=0;const G=S===!0?e:n,M=S===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,h*M,0),p.push(0,M,0),g.push(.5,.5),x++;const w=x;for(let I=0;I<=r;I++){const Y=I/r*l+a,re=Math.cos(Y),z=Math.sin(Y);C.x=G*z,C.y=h*M,C.z=G*re,f.push(C.x,C.y,C.z),p.push(0,M,0),T.x=re*.5+.5,T.y=z*.5*M+.5,g.push(T.x,T.y),x++}for(let I=0;I<r;I++){const k=P+I,Y=w+I;S===!0?d.push(Y,Y+1,k):d.push(Y+1,Y,k),L+=3}c.addGroup(u,L,S===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hf extends Lc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vf extends Mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new F,S=new F,P=new F;for(let T=0;T<n.length;T+=3)g(n[T+0],_),g(n[T+1],S),g(n[T+2],P),l(_,S,P,m)}function l(m,_,S,P){const T=P+1,C=[];for(let L=0;L<=T;L++){C[L]=[];const G=m.clone().lerp(S,L/T),M=_.clone().lerp(S,L/T),w=T-L;for(let I=0;I<=w;I++)I===0&&L===T?C[L][I]=G:C[L][I]=G.clone().lerp(M,I/w)}for(let L=0;L<T;L++)for(let G=0;G<2*(T-L)-1;G++){const M=Math.floor(G/2);G%2===0?(p(C[L][M+1]),p(C[L+1][M]),p(C[L][M])):(p(C[L][M+1]),p(C[L+1][M+1]),p(C[L+1][M]))}}function c(m){const _=new F;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function d(){const m=new F;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=h(m)/2/Math.PI+.5,P=u(m)/Math.PI+.5;o.push(S,1-P)}x(),f()}function f(){for(let m=0;m<o.length;m+=6){const _=o[m+0],S=o[m+2],P=o[m+4],T=Math.max(_,S,P),C=Math.min(_,S,P);T>.9&&C<.1&&(_<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),P<.2&&(o[m+4]+=1))}}function p(m){s.push(m.x,m.y,m.z)}function g(m,_){const S=m*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function x(){const m=new F,_=new F,S=new F,P=new F,T=new ze,C=new ze,L=new ze;for(let G=0,M=0;G<s.length;G+=9,M+=6){m.set(s[G+0],s[G+1],s[G+2]),_.set(s[G+3],s[G+4],s[G+5]),S.set(s[G+6],s[G+7],s[G+8]),T.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),P.copy(m).add(_).add(S).divideScalar(3);const w=h(P);v(T,M+0,m,w),v(C,M+2,_,w),v(L,M+4,S,w)}}function v(m,_,S,P){P<0&&m.x===1&&(o[_]=m.x-1),S.x===0&&S.z===0&&(o[_]=P/2/Math.PI+.5)}function h(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.vertices,e.indices,e.radius,e.details)}}class Gf extends Vf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Gf(e.radius,e.detail)}}class Wf extends Mn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const p=(n-e)/r,g=new F,x=new ze;for(let v=0;v<=r;v++){for(let h=0;h<=i;h++){const u=s+h/i*o;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/n+1)/2,x.y=(g.y/n+1)/2,d.push(x.x,x.y)}f+=p}for(let v=0;v<r;v++){const h=v*(i+1);for(let u=0;u<i;u++){const m=u+h,_=m,S=m+i+1,P=m+i+2,T=m+1;a.push(_,S,T),a.push(S,P,T)}}this.setIndex(a),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jf extends Mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new F,p=new F,g=[],x=[],v=[],h=[];for(let u=0;u<=i;u++){const m=[],_=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const T=P/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),h.push(T+S,1-_),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const _=d[u][m+1],S=d[u][m],P=d[u+1][m],T=d[u+1][m+1];(u!==0||o>0)&&g.push(_,S,T),(u!==i-1||l<Math.PI)&&g.push(S,P,T)}this.setIndex(g),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xf extends Mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new F,f=new F,p=new F;for(let g=0;g<=i;g++)for(let x=0;x<=r;x++){const v=x/r*s,h=g/i*Math.PI*2;f.x=(e+n*Math.cos(h))*Math.cos(v),f.y=(e+n*Math.cos(h))*Math.sin(v),f.z=n*Math.sin(h),a.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=r;x++){const v=(r+1)*g+x-1,h=(r+1)*(g-1)+x-1,u=(r+1)*(g-1)+x,m=(r+1)*g+x;o.push(v,h,m),o.push(h,u,m)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mn extends fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gv,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const v0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class q2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){const g=c[f],x=c[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null}}}const K2=new q2;class Yf{constructor(e){this.manager=e!==void 0?e:K2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yf.DEFAULT_MATERIAL_NAME="__DEFAULT";class Z2 extends Yf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=v0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=pa("img");function l(){d(),v0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Q2 extends Yf{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,o=new Z2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Dc extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class J2 extends Dc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Xu=new ut,x0=new F,y0=new F;class kv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;x0.setFromMatrixPosition(e.matrixWorld),n.position.copy(x0),y0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(y0),n.updateMatrixWorld(),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const S0=new ut,Po=new F,Yu=new F;class eA extends kv{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),i.position.copy(Po),Yu.copy(i.position),Yu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Yu),i.updateMatrixWorld(),r.makeTranslation(-Po.x,-Po.y,-Po.z),S0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S0)}}class Fv extends Dc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new eA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tA extends kv{constructor(){super(new bv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M0 extends Dc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new tA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nA extends Dc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const E0=new ut;class iA{constructor(e,n,i=0,r=1/0){this.ray=new bc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return E0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E0),this}intersectObject(e,n=!0,i=[]){return Nh(e,this,i,n),i.sort(w0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Nh(e[r],this,i,n);return i.sort(w0),i}}function w0(t,e){return t.distance-e.distance}function Nh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Nh(s[o],e,n,!0)}}class T0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rA extends Y2{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let p=0,g=0,x=-a;p<=n;p++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const v=p===s?i:r;v.toArray(c,g),g+=3,v.toArray(c,g),g+=3,v.toArray(c,g),g+=3,v.toArray(c,g),g+=3}const d=new Mn;d.setAttribute("position",new ft(l,3)),d.setAttribute("color",new ft(c,3));const f=new Uv({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sA extends rs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);const A0={type:"change"},$f={type:"start"},Ov={type:"end"},dl=new bc,C0=new Ri,oA=Math.cos(70*LM.DEG2RAD),Dt=new F,pn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$u=1e-6;class aA extends sA{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Qr,this._lastTargetPosition=new F,this._quat=new Qr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new T0,this._sphericalDelta=new T0,this._scale=1,this._panOffset=new F,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new F,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cA.bind(this),this._onPointerDown=lA.bind(this),this._onPointerUp=uA.bind(this),this._onContextMenu=_A.bind(this),this._onMouseWheel=fA.bind(this),this._onKeyDown=pA.bind(this),this._onTouchStart=mA.bind(this),this._onTouchMove=gA.bind(this),this._onMouseDown=dA.bind(this),this._onMouseMove=hA.bind(this),this._interceptControlDown=vA.bind(this),this._interceptControlUp=xA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A0),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(dl.origin.copy(this.object.position),dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dl.direction))<oA?this.object.lookAt(this.target):(C0.setFromNormalAndCoplanarPoint(this.object.up,this.target),dl.intersectPlane(C0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>$u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$u||this._lastTargetPosition.distanceToSquared(this.target)>$u?(this.dispatchEvent(A0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ze,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function cA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function uA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ov),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function dA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case js.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case js.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent($f)}function hA(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function fA(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent($f),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Ov))}function pA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function mA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent($f)}function gA(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function _A(t){this.enabled!==!1&&t.preventDefault()}function vA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class yA extends Iv{constructor(){super();const e=new nn;e.deleteAttribute("uv");const n=new mn({side:on}),i=new mn,r=new Fv(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ze(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Ze(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ze(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Ze(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ze(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Ze(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new Ze(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const p=new Ze(e,Ss(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const g=new Ze(e,Ss(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const x=new Ze(e,Ss(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const v=new Ze(e,Ss(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const h=new Ze(e,Ss(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const u=new Ze(e,Ss(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ss(t){const e=new Rc;return e.color.setScalar(t),e}const SA="honeycutt-assets",es="img";function qf(){return new Promise((t,e)=>{const n=indexedDB.open(SA,1);n.onupgradeneeded=()=>n.result.createObjectStore(es,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function MA(){try{const t=await qf();return await new Promise(e=>{const n=t.transaction(es).objectStore(es).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function EA(t){const e=await qf();return new Promise(n=>{const i=e.transaction(es,"readwrite");i.objectStore(es).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function wA(t){const e=await qf();return new Promise(n=>{const i=e.transaction(es,"readwrite");i.objectStore(es).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function TA(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const zv=Le.createContext(null);let AA=1;function CA({children:t}){const[e,n]=Le.useState([]);Le.useEffect(()=>{MA().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=Le.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await TA(l.result),d={id:`a${Date.now().toString(36)}${AA++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await EA(d),n(f=>[d,...f]),a(d)},l.readAsDataURL(o)}),[]),r=Le.useCallback(async o=>{await wA(o),n(a=>a.filter(l=>l.id!==o))},[]),s=Le.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return y.jsx(zv.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function Kf(){return Le.useContext(zv)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function Bn(t,e){const n=new Ve(t);return e>=0?n.lerp(new Ve("#ffffff"),e):n.lerp(new Ve("#000000"),-e),n}function Ge(t,e=.75,n=.04,i={}){return new mn({color:new Ve(t),roughness:e,metalness:n,...i})}function We(t,e,n,i){const r=new Ze(new nn(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function Ct(t,e,n,i,r=28){const s=new Ze(new Lc(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function Re(t,e,n,i){return t.position.set(e,n,i),t}function Lo(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(Re(We(s,i,s,o),l,i/2,c))}const b0={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.85),a=Ge(Bn(s,.08),.9),l=Ge("#2b2b2e",.5,.3),c=r*.42,d=Math.min(.16,n*.12),f=r;t.add(Re(We(n,c,i,o),0,c/2+.08,0)),t.add(Re(We(n,f-.1,.16,o),0,(f-.1)/2+.08,-i/2+.08)),t.add(Re(We(d,c+.16,i,o),n/2-d/2,(c+.16)/2+.08,0)),t.add(Re(We(d,c+.16,i,o),-n/2+d/2,(c+.16)/2+.08,0));const p=n-d*2-.04,g=n>1.3?Math.round(n/.9):1,x=p/g;for(let v=0;v<g;v++){const h=-p/2+x/2+v*x;t.add(Re(We(x-.04,.16,i-.28,a),h,c+.16,.04)),t.add(Re(We(x-.06,.2,.16,a),h,c+.24,-i/2+.24))}Lo(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.7,.05),a=r*.5;t.add(Re(We(n,.06,i,o),0,a,0)),t.add(Re(We(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),Lo(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.7);t.add(Re(We(n,.1,i,o),0,r-.05,0)),Lo(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Ge(r,.6,.1);t.add(Re(Ct(n/2,n/2,.08,s),0,i-.04,0)),t.add(Re(Ct(.03,.04,i-.08,Ge("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(Re(Ct(n*.34,n*.34,.02,Ge("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.45,.05);t.add(Re(We(n,.06,i,o),0,r-.03,0)),Lo(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Ge(r,.45,.05);t.add(Re(Ct(n/2,n/2,.06,s),0,i-.03,0)),t.add(Re(Ct(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(Re(Ct(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.5,.06);t.add(Re(We(n,.05,i,o),0,r-.025,0)),t.add(Re(We(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(Re(We(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(Re(We(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge("#5b4a3a",.6),a=Ge(s,.9),l=Ge(Bn(s,.12),.95),c=r*.5;t.add(Re(We(n,c,i,o),0,c/2,0)),t.add(Re(We(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(Re(We(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(Re(We(n-.12,.1,i*.62,Ge(Bn(s,-.05),.9)),0,c+.2,i*.12));const d=(n-.2)/2;t.add(Re(We(d-.04,.12,.34,l),-d/2,c+.24,-i/2+.32)),t.add(Re(We(d-.04,.12,.34,l),d/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.55),a=Ge("#caa86a",.3,.7);t.add(Re(We(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(Re(Ct(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(Re(Ct(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),Lo(t,n-.08,i-.08,.06,.05,.04,Ge("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.55),a=Ge("#caa86a",.3,.7);t.add(Re(We(n,r,i,o),0,r/2,0)),t.add(Re(We(.012,r-.1,.01,Ge(Bn(s,-.3),.6)),0,r/2,i/2+.002)),t.add(Re(Ct(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(Re(Ct(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.55),a=Ge(Bn(s,.06),.6),l=Ge("#caa86a",.3,.7);t.add(Re(We(n,r,i,o),0,r/2,0));const c=r>.6?3:1,d=(r-.08)/c;for(let f=0;f<c;f++){const p=.04+d/2+f*d;t.add(Re(We(n-.06,d-.03,.02,a),0,p,i/2+.005)),t.add(Re(Ct(.01,.01,.12,l),0,p,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.6),a=.04;t.add(Re(We(a,r,i,o),-n/2+a/2,r/2,0)),t.add(Re(We(a,r,i,o),n/2-a/2,r/2,0)),t.add(Re(We(n,a,i,o),0,a/2,0)),t.add(Re(We(n,a,i,o),0,r-a/2,0)),t.add(Re(We(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const d=r/(l+1)*c;t.add(Re(We(n-a*2,a*.7,i-.04,o),0,d,0));const f=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let p=-n/2+a+.04;for(;p<n/2-a-.06;){const g=.03+Math.random()*.03,x=.12+Math.random()*.08;t.add(Re(We(g,x,i*.6,Ge(f[Math.floor(Math.random()*f.length)],.8)),p+g/2,d+a*.35+x/2,0)),p+=g+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Ge("#2b2b2e",.4,.4),o=Ge(r,.4,.3),a=new mn({color:"#10141c",roughness:.2,metalness:.1,emissive:new Ve("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(Re(We(n,i,.05,o),0,l+i/2,0));const c=new Ze(new Jr(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(Re(Ct(.03,.04,l,s),0,l/2,0)),t.add(Re(We(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Ge(r,1,0),o=We(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=We(n*.86,.022,i*.78,Ge(Bn(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=Ct(n/2,n/2,.02,Ge(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=Ct(n*.36,n*.36,.022,Ge(Bn(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Ge("#9a7a55",.7),o=i*.28;t.add(Re(Ct(n*.36,n*.28,o,s),0,o/2,0)),t.add(Re(Ct(.03,.03,i*.45,Ge("#5a4030",.8)),0,o+i*.2,0));const a=(c,d,f,p,g)=>{const x=new Ze(new Gf(d,0),Ge(c,.9));x.castShadow=!0,t.add(Re(x,f,p,g))},l=o+i*.4;a(Bn(r,.05),n*.42,0,l+n*.2,0),a(Bn(r,-.1),n*.34,n*.22,l+n*.45,.04),a(Bn(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(Bn(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Ge("#3a3a3e",.4,.6);t.add(Re(Ct(n*.32,n*.36,.04,s),0,.02,0)),t.add(Re(Ct(.018,.018,i*.78,s),0,i*.4,0));const o=new Ze(new Hf(n*.42,i*.22,24,1,!0),new mn({color:new Ve(r),roughness:.6,emissive:new Ve(r),emissiveIntensity:.5,side:Pn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new Fv(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.35,.5),a=Ge("#888",.3,.8);t.add(Re(We(n,r,i,o),0,r/2,0)),t.add(Re(We(n,.015,.005,Ge(Bn(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(Re(Ct(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(Re(Ct(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge("#d8d2c8",.6),a=Ge(s,.3,.2);t.add(Re(We(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(Re(We(n,.05,i,a),0,r-.025,0)),t.add(Re(We(n*.3,.02,i*.5,Ge("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ge(s,.35,.4);t.add(Re(We(n,r,i,o),0,r/2,0));const a=Ge("#1a1a1d",.3,.2);t.add(Re(We(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(Re(Ct(n*.11,n*.11,.01,Ge("#333",.5)),n*l,r+.02,i*c))}};function bA(t){const e=hi[t.type];if(!e)return new si;const n=new si,i={...e,color:t.color||e.color};return(b0[e.shape]||b0.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function br(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const R0={day:{bg:"#0e1014",exposure:1.05,env:1,key:["#fff4e0",2],fill:["#cdddff",.5],hemi:.55,amb:.25},dusk:{bg:"#171009",exposure:1.12,env:.5,key:["#ffb877",1.9],fill:["#8a78d0",.45],hemi:.35,amb:.16},night:{bg:"#080a0f",exposure:1.18,env:.18,key:["#9fb6ff",.5],fill:["#4a5fb0",.3],hemi:.14,amb:.08}},P0=(t,e)=>Math.round(t/e)*e,Ms=t=>Math.max(0,Math.min(255,Math.round(t))),RA={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function PA(t="#b08a5e"){const e=new Ve(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let d=0;d<a;d++){const f=(Math.random()-.5)*36;o.fillStyle=`rgb(${Ms(n+f)},${Ms(i+f)},${Ms(r+f)})`,o.fillRect(0,d*l,512,l);for(let p=0;p<60;p++){o.strokeStyle=`rgba(${Ms(n*.45)},${Ms(i*.4)},${Ms(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const g=d*l+Math.random()*l;o.moveTo(0,g),o.bezierCurveTo(170,g+(Math.random()-.5)*6,340,g+(Math.random()-.5)*6,512,g),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,d*l,512,2)}const c=new $2(s);return c.wrapS=c.wrapT=so,c.colorSpace=gn,c}function LA(){const{state:t,dispatch:e}=is(),{rooms:n,walls:i,items:r,builtins:s,selected:o,ambiance:a}=t,{map:l}=Kf(),c=Le.useRef(null),d=Le.useRef({}),f=Le.useRef({});f.current={rooms:n,walls:i,items:r,selected:o,dispatch:e};function p(v){const h=d.current;if(!v||typeof v!="string")return null;if(v.startsWith("wood:")){const u=v.slice(5);return h.woodCache.has(u)||h.woodCache.set(u,PA(RA[u]||"#c79a6b")),h.woodCache.get(u)}if(v.startsWith("img:")){const u=v.slice(4);if(!h.imgCache.has(u)){const m=l[u];if(!m)return null;const _=new Q2().load(m);_.colorSpace=gn,_.wrapS=_.wrapT=so,h.imgCache.set(u,_)}return h.imgCache.get(u)}return null}function g(v,h,u,m,_,S={}){const P=p(v);if(P){let T=P;return P.image instanceof HTMLCanvasElement&&(T=P.clone(),T.needsUpdate=!0,T.wrapS=T.wrapT=so,T.colorSpace=gn,d.current.roomTexList.push(T)),T.repeat.set(Math.max(1,m),Math.max(1,_)),new mn({map:T,...S})}return new mn({color:new Ve(h||u),...S})}Le.useEffect(()=>{const v=c.current,h=v.clientWidth,u=v.clientHeight,m=new j2({antialias:!0,preserveDrawingBuffer:!0});m.setSize(h,u),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=nv,m.toneMapping=rv,m.toneMappingExposure=1.05,m.outputColorSpace=gn,v.appendChild(m.domElement);const _=new Iv;_.background=new Ve("#0e1014");const S=new Lh(m);try{_.environment=S.fromScene(new yA,.04).texture}catch{}const P=new Rn(50,h/u,.1,200),T=new aA(P,m.domElement);T.enableDamping=!0,T.dampingFactor=.08,T.minDistance=1.2,T.maxDistance=60,T.maxPolarAngle=Math.PI/2-.04,T.minPolarAngle=.16,T.enablePan=!0,T.rotateSpeed=.7;const C=new J2("#dfe6f0","#2a2620",.55);_.add(C);const L=new nA("#ffffff",.25);_.add(L);const G=new M0("#fff4e0",2);G.position.set(8,14,6),G.castShadow=!0,G.shadow.mapSize.set(2048,2048),G.shadow.camera.near=1,G.shadow.camera.far=80,G.shadow.bias=-4e-4,G.shadow.normalBias=.02;const M=G.shadow.camera;M.left=-20,M.right=20,M.top=20,M.bottom=-20,_.add(G);const w=new M0("#cdddff",.5);w.position.set(-9,7,-5),_.add(w);const I=new Ze(new Jr(160,160),new mn({color:"#0c0d11",roughness:1}));I.rotation.x=-Math.PI/2,I.position.y=-.04,I.receiveShadow=!0,_.add(I);const k=new rA(160,160,2896444,1645859);k.position.y=-.02,_.add(k);const Y=new si,re=new si,z=new si;_.add(Y,re,z);const ee=new Ze(new Wf(.46,.5,48),new Rc({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:Pn}));ee.rotation.x=-Math.PI/2,ee.position.y=.03,ee.visible=!1,ee.renderOrder=2,_.add(ee);const D=new si,Z=new Ze(new Xf(.5,.035,12,48),new mn({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));Z.rotation.x=-Math.PI/2,Z.userData.gizmo=!0,D.add(Z);for(let A=0;A<4;A++){const ie=A/4*Math.PI*2,H=new Ze(new jf(.07,16,16),new mn({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));H.position.set(Math.cos(ie)*.5,0,Math.sin(ie)*.5),H.userData.gizmo=!0,D.add(H)}D.visible=!1,D.renderOrder=3,_.add(D),Object.assign(d.current,{renderer:m,scene:_,camera:P,controls:T,roomGroup:Y,furnitureGroup:re,key:G,fill:w,ambient:L,hemi:C,pmrem:S,ring:ee,gizmo:D,builtinGroup:z,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new iA,drag:null,rotate:null,pending:null});const ce=new Ri(new F(0,1,0),0),de=m.domElement,Ce=new ze,ke=A=>{const ie=de.getBoundingClientRect();Ce.set((A.clientX-ie.left)/ie.width*2-1,-((A.clientY-ie.top)/ie.height)*2+1)},ne=()=>{const A=new F;return d.current.raycaster.setFromCamera(Ce,P),d.current.raycaster.ray.intersectPlane(ce,A)?A:null},fe=A=>{for(;A&&A.userData.uid===void 0;)A=A.parent;return A},pe=A=>{for(;A;){if(A.userData.gizmo)return!0;A=A.parent}return!1},xe=A=>{var b,E;ke(A);const ie=d.current.raycaster;ie.setFromCamera(Ce,P);const{items:H,selected:le,dispatch:q}=f.current;if(d.current.gizmo.visible){const O=ie.intersectObject(d.current.gizmo,!0);if(O.length&&pe(O[0].object)){const j=H.find(U=>U.uid===(le==null?void 0:le.uid)),N=ne();if(j&&N){T.enabled=!1,d.current.rotate={uid:j.uid,cx:j.x,cz:j.z,startAng:Math.atan2(N.z-j.z,N.x-j.x),startRot:j.rot||0},(b=de.setPointerCapture)==null||b.call(de,A.pointerId);return}}}const te=ie.intersectObjects(d.current.furnitureGroup.children,!0);let oe=null;for(const O of te){const j=fe(O.object);if(j){oe=j;break}}if(oe){T.enabled=!1,H.find(j=>j.uid===oe.userData.uid),q({type:"select",sel:{type:"item",uid:oe.userData.uid}}),Es(8);const O=ne();d.current.drag={uid:oe.userData.uid,grp:oe,offX:O?O.x-oe.position.x:0,offZ:O?O.z-oe.position.z:0},(E=de.setPointerCapture)==null||E.call(de,A.pointerId)}else d.current.pending={x:A.clientX,y:A.clientY}},Oe=A=>{ke(A);const ie=d.current;if(ie.rotate){const H=ne();if(!H)return;const le=Math.atan2(H.z-ie.rotate.cz,H.x-ie.rotate.cx);let q=ie.rotate.startRot+(le-ie.rotate.startAng)*180/Math.PI;q=(Math.round(q)%360+360)%360,f.current.dispatch({type:"update",sel:{type:"item",uid:ie.rotate.uid},patch:{rot:q},mergeKey:`rot3d:${ie.rotate.uid}`});return}if(ie.drag){const H=ne();if(!H)return;f.current.dispatch({type:"update",sel:{type:"item",uid:ie.drag.uid},patch:{x:P0(H.x-ie.drag.offX,.05),z:P0(H.z-ie.drag.offZ,.05)},mergeKey:`mv3d:${ie.drag.uid}`})}},Fe=A=>{var H;const ie=d.current;ie.drag||ie.rotate?(ie.drag=null,ie.rotate=null,T.enabled=!0):ie.pending&&(Math.hypot(A.clientX-ie.pending.x,A.clientY-ie.pending.y)<5&&f.current.dispatch({type:"select",sel:null}),ie.pending=null);try{(H=de.releasePointerCapture)==null||H.call(de,A.pointerId)}catch{}};de.addEventListener("pointerdown",xe,!0),de.addEventListener("pointermove",Oe),window.addEventListener("pointerup",Fe);let Xe;const Je=()=>{T.update();const A=P.position;for(const ie of d.current.walls){const H=(A.x-ie.center.x)*ie.normal.x+(A.z-ie.center.z)*ie.normal.z;!ie.hidden&&H>.1?ie.hidden=!0:ie.hidden&&H<-.1&&(ie.hidden=!1),ie.mesh.visible=!ie.hidden}m.render(_,P),Xe=requestAnimationFrame(Je)};Je();const $=new ResizeObserver(()=>{const A=v.clientWidth,ie=v.clientHeight;m.setSize(A,ie),P.aspect=A/ie,P.updateProjectionMatrix()});return $.observe(v),()=>{cancelAnimationFrame(Xe),$.disconnect(),de.removeEventListener("pointerdown",xe,!0),de.removeEventListener("pointermove",Oe),window.removeEventListener("pointerup",Fe),T.dispose(),br(Y),br(re),br(z),ee.geometry.dispose(),ee.material.dispose(),d.current.woodCache.forEach(A=>A.dispose()),d.current.imgCache.forEach(A=>A.dispose()),d.current.roomTexList.forEach(A=>A.dispose()),S.dispose(),m.dispose(),m.domElement.parentNode===v&&v.removeChild(m.domElement)}},[]),Le.useEffect(()=>{const v=d.current;if(!v.renderer)return;const h=R0[a]||R0.day;v.scene.background.set(h.bg),v.scene.environmentIntensity=h.env,v.renderer.toneMappingExposure=h.exposure,v.key.color.set(h.key[0]),v.key.intensity=h.key[1],v.fill.color.set(h.fill[0]),v.fill.intensity=h.fill[1],v.hemi.intensity=h.hemi,v.ambient.intensity=h.amb},[a]),Le.useEffect(()=>{const v=d.current;if(!v.roomGroup)return;br(v.roomGroup),v.roomGroup.clear(),v.walls=[],v.roomTexList.forEach(S=>S.dispose()),v.roomTexList=[];const h=new mn({color:"#cfc7ba",roughness:.8}),u=new mn({color:"#e8e3da",roughness:.95,side:Pn}),m=.1,_=(S,P,T,C,L,G,M,w,I,k)=>{const Y=new Ze(new nn(P,T,C),S);Y.position.set(L,G,M),Y.castShadow=!0,Y.receiveShadow=!0,v.roomGroup.add(Y),v.walls.push({mesh:Y,normal:new F(w,0,I),center:new F(L,0,M),hidden:!1})};for(const S of n){const{x:P,z:T,w:C,d:L,height:G}=S,M=P+C/2,w=T+L/2,I=S.floorTex||(S.floorColor?void 0:"wood:oak"),k=g(I,S.floorColor,"#b08a5e",C/1.5,L/1.5,{roughness:.65,metalness:.02}),Y=new Ze(new Jr(C,L),k);Y.rotation.x=-Math.PI/2,Y.position.set(M,0,w),Y.receiveShadow=!0,v.roomGroup.add(Y);const re=g(S.wallTex,S.wallColor,"#e8e3da",C/1.2,G/1.2,{roughness:.95,side:Pn}),z=D=>!S.wallsOn||S.wallsOn[D]!==!1,ee=(D,Z,ce)=>{const de=new Ze(D,h);de.position.set(Z,.045,ce),v.roomGroup.add(de)};z("n")&&(_(re,C+m,G,m,M,G/2,T,0,-1),ee(new nn(C-m,.09,.04),M,T+m/2+.02)),z("s")&&(_(re,C+m,G,m,M,G/2,T+L,0,1),ee(new nn(C-m,.09,.04),M,T+L-m/2-.02)),z("w")&&(_(re,m,G,L+m,P,G/2,w,-1,0),ee(new nn(.04,.09,L-m),P+m/2+.02,w)),z("e")&&(_(re,m,G,L+m,P+C,G/2,w,1,0),ee(new nn(.04,.09,L-m),P+C-m/2-.02,w))}for(const S of i){const P=Math.hypot(S.x2-S.x1,S.z2-S.z1);if(P<.001)continue;const T=new Ze(new nn(P,S.height,S.thickness),u);T.position.set((S.x1+S.x2)/2,S.height/2,(S.z1+S.z2)/2),T.rotation.y=-Math.atan2(S.z2-S.z1,S.x2-S.x1),T.castShadow=!0,T.receiveShadow=!0,v.roomGroup.add(T)}!v.framed&&(n.length||i.length||r.length)&&(x(),v.framed=!0)},[n,i,l]),Le.useEffect(()=>{const v=d.current;if(!v.furnitureGroup)return;const h=v.itemMap,u=new Set;for(const _ of r){u.add(_.uid);let S=h.get(_.uid);if(!S||S.type!==_.type||S.color!==_.color){S&&(v.furnitureGroup.remove(S.group),br(S.group));const T=bA(_);v.furnitureGroup.add(T),S={group:T,type:_.type,color:_.color},h.set(_.uid,S)}S.group.position.set(_.x,0,_.z),S.group.rotation.y=-((_.rot||0)*Math.PI)/180;const P=_.scale||{};S.group.scale.set(P.x??1,P.y??1,P.z??1)}for(const[_,S]of h)u.has(_)||(v.furnitureGroup.remove(S.group),br(S.group),h.delete(_));const m=(o==null?void 0:o.type)==="item"?r.find(_=>_.uid===o.uid):null;if(m){const _=hi[m.type],S=Nr(_,m),P=Math.max(S.w,S.d)/2*1.18+.12;v.ring.scale.setScalar(P/.5),v.ring.position.set(m.x,.03,m.z),v.ring.visible=!0,v.gizmo.scale.setScalar(P/.5),v.gizmo.position.set(m.x,.04,m.z),v.gizmo.visible=!0}else v.ring.visible=!1,v.gizmo.visible=!1},[r,o]),Le.useEffect(()=>{const v=d.current;if(!v.builtinGroup)return;br(v.builtinGroup),v.builtinGroup.clear();const h=.03;for(const u of s){const m=ev(u.wall,n,i);if(!m)continue;const _=p(u.tex),S=_?new mn({map:_,roughness:.6,metalness:.04}):new mn({color:new Ve(u.color||"#c7ad84"),roughness:.62,metalness:.04});if(u.kind==="board"){const I=(u.u1+u.u2)/2,k=(u.v1+u.v2)/2,Y=u.u2-u.u1,re=u.v2-u.v1,z=Math.hypot(Y,re)||1e-6,ee=Y/z,D=re/z,Z=new F(m.dirx*ee,D,m.dirz*ee),ce=new F(-m.dirx*D,ee,-m.dirz*D),de=new F(m.nx,0,m.nz),Ce=new ut().makeBasis(Z,ce,de);Ce.setPosition(m.ox+m.dirx*I+m.nx*(u.depth/2),k,m.oz+m.dirz*I+m.nz*(u.depth/2));const ke=new Ze(new nn(z,u.thickness||.05,u.depth||.04),S);ke.castShadow=!0,ke.receiveShadow=!0,ke.matrixAutoUpdate=!1,ke.matrix.copy(Ce),v.builtinGroup.add(ke);continue}const P=new ut,T=new F(m.dirx,0,m.dirz),C=new F(0,1,0),L=new F(m.nx,0,m.nz);P.makeBasis(T,C,L);const G=u.u+u.w/2;P.setPosition(m.ox+m.dirx*G+m.nx*(u.depth/2),u.v+u.h/2,m.oz+m.dirz*G+m.nz*(u.depth/2));const M=new si;M.matrixAutoUpdate=!1,M.matrix.copy(P);const w=(I,k,Y,re,z,ee)=>{const D=new Ze(new nn(I,k,Y),S);D.position.set(re,z,ee),D.castShadow=!0,D.receiveShadow=!0,M.add(D)};u.kind==="cubby"?(w(u.w,u.h,h,0,0,-u.depth/2+h/2),w(u.w,h,u.depth,0,u.h/2-h/2,0),w(u.w,h,u.depth,0,-u.h/2+h/2,0),w(h,u.h,u.depth,-u.w/2+h/2,0,0),w(h,u.h,u.depth,u.w/2-h/2,0,0)):w(u.w,u.h,u.depth,0,0,0),v.builtinGroup.add(M)}},[s,n,i,l]);function x(){const v=d.current;if(!v.camera)return;const{rooms:h,walls:u,items:m}=f.current;let _=1/0,S=-1/0,P=1/0,T=-1/0,C=2.7;const L=(k,Y)=>{_=Math.min(_,k),S=Math.max(S,k),P=Math.min(P,Y),T=Math.max(T,Y)};for(const k of h)L(k.x,k.z),L(k.x+k.w,k.z+k.d),C=Math.max(C,k.height);for(const k of u)L(k.x1,k.z1),L(k.x2,k.z2),C=Math.max(C,k.height);for(const k of m)L(k.x,k.z);isFinite(_)||(_=-2,S=2,P=-2,T=2);const G=(_+S)/2,M=(P+T)/2,w=Math.max(S-_,T-P,2),I=w*1.1+4;v.camera.position.set(G+w*.45,w*.8+3,M+I),v.controls.target.set(G,C*.3,M),v.controls.update()}return y.jsxs("div",{className:"scene3d",ref:c,children:[y.jsx("div",{className:"ambiance",children:["day","dusk","night"].map(v=>y.jsx("button",{className:a===v?"active":"",onClick:()=>e({type:"ambiance",value:v}),children:v[0].toUpperCase()+v.slice(1)},v))}),y.jsx("button",{className:"recenter",onClick:x,"aria-label":"Recenter view",children:y.jsx(Rf,{size:20})})]})}function DA({item:t}){const e={w:86,h:60},n=t.w/t.d;let i=e.w,r=i/n;return r>e.h&&(r=e.h,i=r*n),y.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:y.jsx(Y_,{item:t,wpx:i,dpx:r})})}function NA({onPick:t}){const{state:e}=is(),{units:n}=e,[i,r]=Le.useState("All"),s=["All",...vS],o=Le.useMemo(()=>i==="All"?wl:wl.filter(a=>a.category===i),[i]);return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"sheet-head",children:y.jsxs("div",{children:[y.jsx("h2",{children:"Furniture"}),y.jsxs("div",{className:"sub",children:[wl.length," premium pieces · tap to place"]})]})}),y.jsx("div",{className:"cats",children:s.map(a=>y.jsx("button",{className:`chip ${i===a?"active":""}`,onClick:()=>r(a),children:a},a))}),y.jsx("div",{className:"grid",children:o.map(a=>y.jsxs("button",{className:"card",onClick:()=>t(a.type),children:[y.jsx("div",{className:"thumb",children:y.jsx(DA,{item:a})}),y.jsx("div",{className:"name",children:a.name}),y.jsxs("div",{className:"dim",children:[je(a.w,n)," × ",je(a.d,n)]})]},a.type))})]})}const IA=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function Do({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=Kf(),s=Le.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var p;const d=(p=c.target.files)==null?void 0:p[0];if(c.target.value="",!d)return;const f=await r(d);e({color:"#ffffff",tex:`img:${f.id}`})};return y.jsxs("div",{className:"finish",children:[y.jsxs("div",{className:"finish-row",children:[xS.map(c=>y.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),y.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:y.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"finish-label",children:"Wood"}),y.jsx("div",{className:"finish-row",children:IA.map(c=>y.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),y.jsx("div",{className:"finish-label",children:"Your images"}),y.jsxs("div",{className:"finish-row",children:[i.map(c=>y.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),y.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),y.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Hn({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:t}),y.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),y.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function UA({onClose:t,onFlash:e}){const{state:n,dispatch:i}=is(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c}=n;if(!r)return null;const d=r,f=(h,u)=>i({type:"update",sel:d,patch:h,mergeKey:u}),p=()=>{i({type:"remove",sel:d}),e==null||e("Removed"),t()},g=()=>{i({type:"duplicate",sel:d}),e==null||e("Duplicated"),t()};if(d.type==="item"){const h=o.find(P=>P.uid===d.uid),u=h&&hi[h.type];if(!h||!u)return null;const m=Nr(u,h),_=h.scale||{},S=Math.round(((_.x??1)+(_.z??1))/2*100);return y.jsxs(y.Fragment,{children:[y.jsx(No,{title:u.name,sub:`${je(m.w,s)} × ${je(m.d,s)} × ${je(m.h,s)}`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Colour"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Do,{value:{color:h.color||u.color},allowTexture:!1,onChange:P=>f({color:P.color})})})]}),y.jsx(Hn,{label:"Size",value:S,min:30,max:300,step:1,onChange:P=>f({scale:{x:P/100,y:P/100,z:P/100}},`sz:${h.uid}`),display:`${S}%`}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Footprint"}),y.jsxs("div",{className:"val",children:[je(m.w,s)," × ",je(m.d,s)]})]}),y.jsx(Hn,{label:"Rotation",value:h.rot||0,min:0,max:359,step:1,onChange:P=>f({rot:P},`rot:${h.uid}`),display:`${Math.round(h.rot||0)}°`}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Quick turn"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(P=>y.jsxs("button",{className:"chip",style:(h.rot||0)===P?qu:void 0,onClick:()=>f({rot:P}),children:[P,"°"]},P))})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:()=>f({rot:((h.rot||0)+90)%360}),children:[y.jsx(q_,{size:18})," Rotate"]}),y.jsxs("button",{className:"btn",onClick:g,children:[y.jsx(ws,{size:18})," Duplicate"]})]}),y.jsxs("div",{className:"btn-row",children:[y.jsx("button",{className:"btn",onClick:()=>f({scale:{x:1,y:1,z:1}}),children:"Reset size"}),y.jsxs("button",{className:"btn danger",onClick:p,children:[y.jsx(Ir,{size:18})," Delete"]})]})]})]})}if(d.type==="room"){const h=a.find(m=>m.uid===d.uid);if(!h)return null;const u=h.w*h.d;return y.jsxs(y.Fragment,{children:[y.jsx(No,{title:"Room",sub:`${je(h.w,s)} × ${je(h.d,s)}`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsx(Hn,{label:"Width",value:h.w,min:.5,max:40,step:.1,onChange:m=>f({w:m},`rw:${h.uid}`),display:je(h.w,s)}),y.jsx(Hn,{label:"Depth",value:h.d,min:.5,max:40,step:.1,onChange:m=>f({d:m},`rd:${h.uid}`),display:je(h.d,s)}),y.jsx(Hn,{label:"Wall height",value:h.height,min:1.5,max:6,step:.1,onChange:m=>f({height:m},`rh:${h.uid}`),display:je(h.height,s)}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Floor area"}),y.jsx("div",{className:"val",children:s==="m"?`${u.toFixed(1)} m²`:`${Math.round(u*10.7639)} ft²`})]}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Wall sides"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([m,_])=>{const S=!h.wallsOn||h.wallsOn[m]!==!1;return y.jsx("button",{className:"chip",style:S?qu:void 0,onClick:()=>f({wallsOn:{...h.wallsOn||{},[m]:!S}}),children:_},m)})})]}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Flooring"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Do,{value:{color:h.floorColor,tex:h.floorTex},onChange:m=>f({floorColor:m.color,floorTex:m.tex})})})]}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Wall finish"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Do,{value:{color:h.wallColor,tex:h.wallTex},onChange:m=>f({wallColor:m.color,wallTex:m.tex})})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:g,children:[y.jsx(ws,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:p,children:[y.jsx(Ir,{size:18})," Delete"]})]})]})]})}if(d.type==="builtin"){const h=c.find(u=>u.uid===d.uid);if(!h)return null;if(h.kind==="board"){const u=Math.hypot(h.u2-h.u1,h.v2-h.v1);return y.jsxs(y.Fragment,{children:[y.jsx(No,{title:"Board",sub:`${je(u,s)} long`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Length"}),y.jsx("div",{className:"val",children:je(u,s)})]}),y.jsx(Hn,{label:"Width",value:h.thickness,min:.01,max:.4,step:.005,onChange:m=>f({thickness:m},`bt:${h.uid}`),display:je(h.thickness,s)}),y.jsx(Hn,{label:"Depth",value:h.depth,min:.02,max:.6,step:.01,onChange:m=>f({depth:m},`bd:${h.uid}`),display:je(h.depth,s)}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Finish"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Do,{value:{color:h.color,tex:h.tex},onChange:m=>f({color:m.color,tex:m.tex})})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:g,children:[y.jsx(ws,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:p,children:[y.jsx(Ir,{size:18})," Delete"]})]})]})]})}return y.jsxs(y.Fragment,{children:[y.jsx(No,{title:"Built-in",sub:`${je(h.w,s)} × ${je(h.h,s)} × ${je(h.depth,s)} deep`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Style"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([u,m])=>y.jsx("button",{className:"chip",style:h.kind===u?qu:void 0,onClick:()=>f({kind:u}),children:m},u))})]}),y.jsx(Hn,{label:"Width",value:h.w,min:.1,max:12,step:.05,onChange:u=>f({w:u},`bw:${h.uid}`),display:je(h.w,s)}),y.jsx(Hn,{label:"Height",value:h.h,min:.1,max:6,step:.05,onChange:u=>f({h:u},`bh:${h.uid}`),display:je(h.h,s)}),y.jsx(Hn,{label:"Depth",value:h.depth,min:.05,max:3,step:.05,onChange:u=>f({depth:u},`bd:${h.uid}`),display:je(h.depth,s)}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Finish"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Do,{value:{color:h.color,tex:h.tex},onChange:u=>f({color:u.color,tex:u.tex})})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:g,children:[y.jsx(ws,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:p,children:[y.jsx(Ir,{size:18})," Delete"]})]})]})]})}const x=l.find(h=>h.uid===d.uid);if(!x)return null;const v=Math.hypot(x.x2-x.x1,x.z2-x.z1);return y.jsxs(y.Fragment,{children:[y.jsx(No,{title:"Wall",sub:`${je(v,s)} long`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Length"}),y.jsx("div",{className:"val",children:je(v,s)})]}),y.jsx(Hn,{label:"Height",value:x.height,min:1.5,max:6,step:.1,onChange:h=>f({height:h},`wh:${x.uid}`),display:je(x.height,s)}),y.jsx(Hn,{label:"Thickness",value:x.thickness,min:.05,max:.4,step:.01,onChange:h=>f({thickness:h},`wt:${x.uid}`),display:je(x.thickness,s)}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:g,children:[y.jsx(ws,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:p,children:[y.jsx(Ir,{size:18})," Delete"]})]})]})]})}const qu={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function No({title:t,sub:e,onClose:n}){return y.jsxs("div",{className:"sheet-head",children:[y.jsxs("div",{children:[y.jsx("h2",{children:t}),y.jsx("div",{className:"sub",children:e})]}),y.jsx("button",{className:"close",onClick:n,"aria-label":"Close",children:"✕"})]})}function kA({onFlash:t,onClose:e}){const{state:n,dispatch:i}=is(),{units:r,defaultHeight:s,rooms:o,walls:a,items:l}=n,{assets:c,addAsset:d,removeAsset:f}=Kf(),p=Le.useRef(null),g=async x=>{const v=[...x.target.files||[]];x.target.value="";for(const h of v)await d(h);v.length&&(t==null||t("Image added"))};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"sheet-head",children:[y.jsxs("div",{children:[y.jsx("h2",{children:"Settings"}),y.jsxs("div",{className:"sub",children:[o.length," rooms · ",a.length," walls · ",l.length," items"]})]}),y.jsx("button",{className:"close",onClick:e,"aria-label":"Close",children:"✕"})]}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Units"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([x,v])=>y.jsx("button",{className:"chip",style:r===x?FA:void 0,onClick:()=>i({type:"units",value:x}),children:v},x))})]}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"New wall height"}),y.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:s,onChange:x=>i({type:"defaultHeight",value:Number(x.target.value)})}),y.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:je(s,r)})]}),y.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:y.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"My images"}),y.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[c.map(x=>y.jsxs("div",{className:"asset-tile",children:[y.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${x.dataUrl})`}}),y.jsx("button",{className:"asset-del",onClick:()=>f(x.id),"aria-label":"Delete image",children:"×"})]},x.id)),y.jsx("button",{className:"swatch upload",onClick:()=>{var x;return(x=p.current)==null?void 0:x.click()},"aria-label":"Upload image",children:"+"}),y.jsx("input",{ref:p,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:g})]})]}),y.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:y.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),y.jsxs("div",{className:"btn-row",children:[y.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),y.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const FA={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function OA(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=is(),{view:r,selected:s,rooms:o,items:a,tool:l}=t,[c,d]=Le.useState(null),[f,p]=Le.useState(null),g=Le.useCallback(_=>p({msg:_,t:Date.now()}),[]);Le.useEffect(()=>{if(!f)return;const _=setTimeout(()=>p(null),1600);return()=>clearTimeout(_)},[f]);const x=!!s;Le.useEffect(()=>{c==="inspector"&&!x&&d(null)},[c,x]);const v=_=>e({type:"view",view:_}),h=_=>e({type:"tool",tool:_}),u=_=>{let S=0,P=0;const T=(s==null?void 0:s.type)==="room"&&o.find(C=>C.uid===s.uid);if(T)S=T.x+T.w/2,P=T.z+T.d/2;else if(o.length){const C=o[o.length-1];S=C.x+C.w/2,P=C.z+C.d/2}e({type:"addItem",kind:_,x:S,z:P}),d(null),Es(10),g("Added — drag to position")},m=async()=>{try{let _;if(r==="3d"){const S=document.querySelector(".scene3d canvas");if(!S)return;_=S.toDataURL("image/png")}else{const S=document.querySelector(".editor2d svg");if(!S)return;_=await BA(S)}await HA(_,`honeycutt-room-${Date.now()}.png`),g("Image saved")}catch{g("Could not export")}};return y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"topbar",children:[y.jsxs("div",{className:"brand",children:[y.jsx("div",{className:"logo",children:y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 11 12 4l9 7"}),y.jsx("path",{d:"M5 10v9h14v-9"})]})}),y.jsxs("div",{className:"title",children:[y.jsx("b",{children:"Honeycutt"}),y.jsx("span",{children:"Room Studio"})]})]}),y.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[y.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>v("2d"),"aria-pressed":r==="2d",children:[y.jsx(bS,{size:15})," Plan"]}),y.jsxs("button",{className:r==="side"?"active":"",onClick:()=>v("side"),"aria-pressed":r==="side",children:[y.jsx(IS,{size:15})," Side"]}),y.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>v("3d"),"aria-pressed":r==="3d",children:[y.jsx(RS,{size:15})," 3D"]})]}),y.jsx("div",{className:"tools",children:y.jsx("button",{className:"tool",onClick:m,"aria-label":"Export image",children:y.jsx(NS,{size:18})})})]}),y.jsxs("main",{className:"stage",children:[r==="2d"?y.jsx(FS,{}):r==="side"?y.jsx(WS,{}):y.jsx(LA,{}),r==="2d"&&y.jsxs("div",{className:"toolbar",children:[y.jsxs("button",{className:l==="select"?"active":"",onClick:()=>h("select"),children:[y.jsx(Z_,{size:16})," Select"]}),y.jsxs("button",{className:l==="room"?"active":"",onClick:()=>h("room"),children:[y.jsx(Q_,{size:16})," Room"]}),y.jsxs("button",{className:l==="wall"?"active":"",onClick:()=>h("wall"),children:[y.jsx(J_,{size:16})," Wall"]})]}),y.jsxs("div",{className:"undo-cluster",children:[y.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:y.jsx(LS,{size:18})}),y.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:y.jsx(DS,{size:18})})]}),s&&!(r==="2d"&&l!=="select")&&!(r==="side"&&s.type!=="builtin")&&(()=>{const _=s.type==="roomwall"?o.find(T=>T.uid===s.uid):null,S=_?!_.wallsOn||_.wallsOn[s.side]!==!1:!0,P=()=>{if(!_)return;const T={..._.wallsOn||{},[s.side]:!S};e({type:"update",sel:{type:"room",uid:_.uid},patch:{wallsOn:T}}),Es(10),g(S?"Wall removed":"Wall added")};return y.jsx(zA,{type:s.type,wallOn:S,onToggle:P,onRotate:()=>{if(s.type==="item"){const T=a.find(C=>C.uid===s.uid);e({type:"update",sel:s,patch:{rot:(((T==null?void 0:T.rot)||0)+90)%360}}),Es(6)}},onDup:()=>{e({type:"duplicate",sel:s}),Es(8),g("Duplicated")},onEdit:()=>d("inspector"),onDelete:()=>{e({type:"remove",sel:s}),Es(12),g("Removed")}})})()]}),y.jsxs("nav",{className:"dock",children:[y.jsxs("button",{className:"pill accent",onClick:()=>{e({type:"select",sel:null}),d("catalog")},children:[y.jsx($_,{size:19})," Add Furniture"]}),y.jsxs("button",{className:"pill",onClick:()=>d("settings"),children:[y.jsx(K_,{size:19})," Settings"]})]}),f&&y.jsx("div",{className:"toast",children:f.msg},f.t),c==="catalog"&&y.jsx(Ku,{onClose:()=>d(null),children:y.jsx(NA,{onPick:u})}),c==="settings"&&y.jsx(Ku,{onClose:()=>d(null),children:y.jsx(kA,{onFlash:g,onClose:()=>d(null)})}),c==="inspector"&&s&&y.jsx(Ku,{onClose:()=>d(null),children:y.jsx(UA,{onClose:()=>d(null),onFlash:g})})]})}function zA({type:t,wallOn:e,onToggle:n,onRotate:i,onDup:r,onEdit:s,onDelete:o}){return t==="roomwall"?y.jsx("div",{className:"fab-col",children:e?y.jsx("button",{className:"fab",onClick:n,"aria-label":"Delete wall",style:{color:"var(--danger)"},children:y.jsx(Ir,{size:20})}):y.jsx("button",{className:"fab primary",onClick:n,"aria-label":"Add wall",children:y.jsx($_,{size:20})})}):y.jsxs("div",{className:"fab-col",children:[t==="item"&&y.jsx("button",{className:"fab",onClick:i,"aria-label":"Rotate",children:y.jsx(q_,{size:20})}),y.jsx("button",{className:"fab",onClick:r,"aria-label":"Duplicate",children:y.jsx(ws,{size:20})}),y.jsx("button",{className:"fab primary",onClick:s,"aria-label":"Edit",children:y.jsx(K_,{size:20})}),y.jsx("button",{className:"fab",onClick:o,"aria-label":"Delete",style:{color:"var(--danger)"},children:y.jsx(Ir,{size:20})})]})}function Ku({children:t,onClose:e}){return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"scrim",onClick:e}),y.jsxs("div",{className:"sheet",role:"dialog","aria-modal":"true",children:[y.jsx("div",{className:"grip"}),t]})]})}function BA(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const d=document.createElement("canvas");d.width=r*o,d.height=s*o;const f=d.getContext("2d");f.fillStyle="#13161c",f.fillRect(0,0,d.width,d.height),f.drawImage(c,0,0,d.width,d.height),e(d.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function HA(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}Zu.createRoot(document.getElementById("root")).render(y.jsx(ox.StrictMode,{children:y.jsx(CA,{children:y.jsx(AS,{children:y.jsx(OA,{})})})}));
