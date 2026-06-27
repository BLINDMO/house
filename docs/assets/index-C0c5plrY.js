(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},Ac={},dg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),E_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),N_=Symbol.for("react.lazy"),Ip=Symbol.iterator;function I_(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fg=Object.assign,pg={};function vo(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||hg}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=vo.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||hg}var of=sf.prototype=new mg;of.constructor=sf;fg(of,vo.prototype);of.isPureReactComponent=!0;var Up=Array.isArray,gg=Object.prototype.hasOwnProperty,af={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wa,type:t,key:s,ref:o,props:r,_owner:af.current}}function U_(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function O_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Op=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O_(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tu(o,0):i,Up(r)?(n="",t!=null&&(n=t.replace(Op,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(lf(r)&&(r=U_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Op,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Up(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tu(s,a);o+=Al(s,e,n,l,r)}else if(l=I_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tu(s,a++),o+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function k_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},bl={transition:null},z_={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:bl,ReactCurrentOwner:af};function _g(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=vo;$e.Fragment=T_;$e.Profiler=b_;$e.PureComponent=sf;$e.StrictMode=A_;$e.Suspense=L_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_;$e.act=_g;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gg.call(e,l)&&!vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:wa,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:R_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C_,_context:t},t.Consumer=t};$e.createElement=xg;$e.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:P_,render:t}};$e.isValidElement=lf;$e.lazy=function(t){return{$$typeof:N_,_payload:{_status:-1,_result:t},_init:k_}};$e.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};$e.unstable_act=_g;$e.useCallback=function(t,e){return fn.current.useCallback(t,e)};$e.useContext=function(t){return fn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return fn.current.useEffect(t,e)};$e.useId=function(){return fn.current.useId()};$e.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return fn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};$e.useRef=function(t){return fn.current.useRef(t)};$e.useState=function(t){return fn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return fn.current.useTransition()};$e.version="18.3.1";dg.exports=$e;var Ce=dg.exports;const F_=w_(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=Ce,H_=Symbol.for("react.element"),V_=Symbol.for("react.fragment"),G_=Object.prototype.hasOwnProperty,W_=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j_={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)G_.call(e,i)&&!j_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H_,type:t,key:s,ref:o,props:r,_owner:W_.current}}Ac.Fragment=V_;Ac.jsx=yg;Ac.jsxs=yg;ug.exports=Ac;var g=ug.exports,_d={},Sg={exports:{}},Hn={},Mg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,te){var $=k.length;k.push(te);e:for(;0<$;){var ae=$-1>>>1,ge=k[ae];if(0<r(ge,te))k[ae]=te,k[$]=ge,$=ae;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var te=k[0],$=k.pop();if($!==te){k[0]=$;e:for(var ae=0,ge=k.length,pe=ge>>>1;ae<pe;){var ee=2*(ae+1)-1,ne=k[ee],xe=ee+1,ce=k[xe];if(0>r(ne,$))xe<ge&&0>r(ce,ne)?(k[ae]=ce,k[xe]=$,ae=xe):(k[ae]=ne,k[ee]=$,ae=ee);else if(xe<ge&&0>r(ce,$))k[ae]=ce,k[xe]=$,ae=xe;else break e}}return te}function r(k,te){var $=k.sortIndex-te.sortIndex;return $!==0?$:k.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,y=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var te=n(c);te!==null;){if(te.callback===null)i(c);else if(te.startTime<=k)i(c),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(c)}}function S(k){if(M=!1,p(k),!y)if(n(l)!==null)y=!0,j(C);else{var te=n(c);te!==null&&K(S,te.startTime-k)}}function C(k,te){y=!1,M&&(M=!1,u(b),b=-1),m=!0;var $=h;try{for(p(te),f=n(l);f!==null&&(!(f.expirationTime>te)||k&&!T());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var ge=ae(f.expirationTime<=te);te=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(l)&&i(l),p(te)}else i(l);f=n(l)}if(f!==null)var pe=!0;else{var ee=n(c);ee!==null&&K(S,ee.startTime-te),pe=!1}return pe}finally{f=null,h=$,m=!1}}var w=!1,E=null,b=-1,z=5,x=-1;function T(){return!(t.unstable_now()-x<z)}function B(){if(E!==null){var k=t.unstable_now();x=k;var te=!0;try{te=E(!0,k)}finally{te?H():(w=!1,E=null)}}else w=!1}var H;if(typeof v=="function")H=function(){v(B)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=B,H=function(){Q.postMessage(null)}}else H=function(){_(B,0)};function j(k){E=k,w||(w=!0,H())}function K(k,te){b=_(function(){k(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,j(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var te=3;break;default:te=h}var $=h;h=te;try{return k()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,te){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=h;h=k;try{return te()}finally{h=$}},t.unstable_scheduleCallback=function(k,te,$){var ae=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ae+$:ae):$=ae,k){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=$+ge,k={id:d++,callback:te,priorityLevel:k,startTime:$,expirationTime:ge,sortIndex:-1},$>ae?(k.sortIndex=$,e(c,k),n(l)===null&&k===n(c)&&(M?(u(b),b=-1):M=!0,K(S,$-ae))):(k.sortIndex=ge,e(l,k),y||m||(y=!0,j(C))),k},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(k){var te=h;return function(){var $=h;h=te;try{return k.apply(this,arguments)}finally{h=$}}}})(wg);Mg.exports=wg;var X_=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=Ce,Bn=X_;function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eg=new Set,ra={};function ds(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(ra[t]=e,t=0;t<e.length;t++)Eg.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=Object.prototype.hasOwnProperty,q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},zp={};function K_(t){return yd.call(zp,t)?!0:yd.call(kp,t)?!1:q_.test(t)?zp[t]=!0:(kp[t]=!0,!1)}function Z_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q_(t,e,n,i){if(e===null||typeof e>"u"||Z_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cf,uf);Qt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cf,uf);Qt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cf,uf);Qt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function df(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q_(e,n,r,i)&&(n=null),i||r===null?K_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),bg=Symbol.for("react.offscreen"),Fp=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,nu;function Fo(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var iu=!1;function ru(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function J_(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Us:return"Portal";case Sd:return"Profiler";case hf:return"StrictMode";case Md:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ag:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function $_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ey(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=ey(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Td(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&df(t,"checked",e,!1)}function Ad(t,e){Pg(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&bd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(Bo(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function Lg(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ty=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){ty.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function Ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ig(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ny=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pd(t,e){if(e){if(ny[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,Zs=null,Qs=null;function Wp(t){if(t=Aa(t)){if(typeof Nd!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=Lc(e),Nd(t.stateNode,t.type,e))}}function Og(t){Zs?Qs?Qs.push(t):Qs=[t]:Zs=t}function kg(){if(Zs){var t=Zs,e=Qs;if(Qs=Zs=null,Wp(t),e)for(t=0;t<e.length;t++)Wp(e[t])}}function zg(t,e){return t(e)}function Fg(){}var su=!1;function Bg(t,e,n){if(su)return t(e,n);su=!0;try{return zg(t,e,n)}finally{su=!1,(Zs!==null||Qs!==null)&&(Fg(),kg())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var Id=!1;if(Yi)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Id=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Id=!1}function iy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qo=!1,Kl=null,Zl=!1,Ud=null,ry={onError:function(t){qo=!0,Kl=t}};function sy(t,e,n,i,r,s,o,a,l){qo=!1,Kl=null,iy.apply(ry,arguments)}function oy(t,e,n,i,r,s,o,a,l){if(sy.apply(this,arguments),qo){if(qo){var c=Kl;qo=!1,Kl=null}else throw Error(fe(198));Zl||(Zl=!0,Ud=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jp(t){if(hs(t)!==t)throw Error(fe(188))}function ay(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jp(r),t;if(s===i)return jp(r),e;s=s.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function Vg(t){return t=ay(t),t!==null?Gg(t):null}function Gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=Bn.unstable_scheduleCallback,Xp=Bn.unstable_cancelCallback,ly=Bn.unstable_shouldYield,cy=Bn.unstable_requestPaint,Rt=Bn.unstable_now,uy=Bn.unstable_getCurrentPriorityLevel,gf=Bn.unstable_ImmediatePriority,jg=Bn.unstable_UserBlockingPriority,Ql=Bn.unstable_NormalPriority,dy=Bn.unstable_LowPriority,Xg=Bn.unstable_IdlePriority,bc=null,Ei=null;function hy(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:my,fy=Math.log,py=Math.LN2;function my(t){return t>>>=0,t===0?32:31-(fy(t)/py|0)|0}var ka=64,za=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),r=1<<n,i|=t[n],e&=~r;return i}function gy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=gy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yg(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function xy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kg,xf,Zg,Qg,Jg,kd=!1,Fa=[],vr=null,xr=null,_r=null,aa=new Map,la=new Map,ur=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yy(t,e,n,i,r){switch(e){case"focusin":return vr=wo(vr,t,e,n,i,r),!0;case"dragenter":return xr=wo(xr,t,e,n,i,r),!0;case"mouseover":return _r=wo(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return aa.set(s,wo(aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,la.set(s,wo(la.get(s)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=qr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=Hg(n),e!==null){t.blockedOn=e,Jg(t.priority,function(){Zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Dd=i,n.target.dispatchEvent(i),Dd=null}else return e=Aa(n),e!==null&&xf(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Cl(t)&&n.delete(e)}function Sy(){kd=!1,vr!==null&&Cl(vr)&&(vr=null),xr!==null&&Cl(xr)&&(xr=null),_r!==null&&Cl(_r)&&(_r=null),aa.forEach(qp),la.forEach(qp)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,Sy)))}function ca(t){function e(r){return Eo(r,t)}if(0<Fa.length){Eo(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Eo(vr,t),xr!==null&&Eo(xr,t),_r!==null&&Eo(_r,t),aa.forEach(e),la.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&ur.shift()}var Js=Qi.ReactCurrentBatchConfig,$l=!0;function My(t,e,n,i){var r=lt,s=Js.transition;Js.transition=null;try{lt=1,_f(t,e,n,i)}finally{lt=r,Js.transition=s}}function wy(t,e,n,i){var r=lt,s=Js.transition;Js.transition=null;try{lt=4,_f(t,e,n,i)}finally{lt=r,Js.transition=s}}function _f(t,e,n,i){if($l){var r=zd(t,e,n,i);if(r===null)gu(t,e,i,ec,n),Yp(t,i);else if(yy(r,t,e,n,i))i.stopPropagation();else if(Yp(t,i),e&4&&-1<_y.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&Kg(s),s=zd(t,e,n,i),s===null&&gu(t,e,i,ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gu(t,e,i,null,n)}}var ec=null;function zd(t,e,n,i){if(ec=null,t=mf(i),t=qr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uy()){case gf:return 1;case jg:return 4;case Ql:case dy:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var pr=null,yf=null,Rl=null;function tv(){if(Rl)return Rl;var t,e=yf,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Kp(){return!1}function Vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:Kp,this.isPropagationStopped=Kp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=Vn(xo),Ta=St({},xo,{view:0,detail:0}),Ey=Vn(Ta),au,lu,To,Cc=St({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(au=t.screenX-To.screenX,lu=t.screenY-To.screenY):lu=au=0,To=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Zp=Vn(Cc),Ty=St({},Cc,{dataTransfer:0}),Ay=Vn(Ty),by=St({},Ta,{relatedTarget:0}),cu=Vn(by),Cy=St({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=Vn(Cy),Py=St({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=Vn(Py),Dy=St({},xo,{data:0}),Qp=Vn(Dy),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uy[t])?!!e[t]:!1}function Mf(){return Oy}var ky=St({},Ta,{key:function(t){if(t.key){var e=Ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zy=Vn(ky),Fy=St({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Vn(Fy),By=St({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),Hy=Vn(By),Vy=St({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=Vn(Vy),Wy=St({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Vn(Wy),Xy=[9,13,27,32],wf=Yi&&"CompositionEvent"in window,Ko=null;Yi&&"documentMode"in document&&(Ko=document.documentMode);var Yy=Yi&&"TextEvent"in window&&!Ko,nv=Yi&&(!wf||Ko&&8<Ko&&11>=Ko),$p=" ",em=!1;function iv(t,e){switch(t){case"keyup":return Xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function qy(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(em=!0,$p);case"textInput":return t=e.data,t===$p&&em?null:t;default:return null}}function Ky(t,e){if(ks)return t==="compositionend"||!wf&&iv(t,e)?(t=tv(),Rl=yf=pr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zy[t.type]:e==="textarea"}function sv(t,e,n,i){Og(i),e=tc(e,"onChange"),0<e.length&&(n=new Sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,ua=null;function Qy(t){gv(t,0)}function Rc(t){var e=Bs(t);if(Rg(e))return t}function Jy(t,e){if(t==="change")return e}var ov=!1;if(Yi){var uu;if(Yi){var du="oninput"in document;if(!du){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),du=typeof nm.oninput=="function"}uu=du}else uu=!1;ov=uu&&(!document.documentMode||9<document.documentMode)}function im(){Zo&&(Zo.detachEvent("onpropertychange",av),ua=Zo=null)}function av(t){if(t.propertyName==="value"&&Rc(ua)){var e=[];sv(e,ua,t,mf(t)),Bg(Qy,e)}}function $y(t,e,n){t==="focusin"?(im(),Zo=e,ua=n,Zo.attachEvent("onpropertychange",av)):t==="focusout"&&im()}function e1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(ua)}function t1(t,e){if(t==="click")return Rc(e)}function n1(t,e){if(t==="input"||t==="change")return Rc(e)}function i1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:i1;function da(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yd.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,e){var n=rm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rm(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function r1(t){var e=cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(i!==null&&Ef(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sm(n,s);var o=sm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var s1=Yi&&"documentMode"in document&&11>=document.documentMode,zs=null,Fd=null,Qo=null,Bd=!1;function om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||zs==null||zs!==ql(i)||(i=zs,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&da(Qo,i)||(Qo=i,i=tc(Fd,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},hu={},uv={};Yi&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Pc(t){if(hu[t])return hu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return hu[t]=e[n];return t}var dv=Pc("animationend"),hv=Pc("animationiteration"),fv=Pc("animationstart"),pv=Pc("transitionend"),mv=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){mv.set(t,e),ds(e,[t])}for(var fu=0;fu<am.length;fu++){var pu=am[fu],o1=pu.toLowerCase(),a1=pu[0].toUpperCase()+pu.slice(1);Rr(o1,"on"+a1)}Rr(dv,"onAnimationEnd");Rr(hv,"onAnimationIteration");Rr(fv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(pv,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function lm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,oy(i,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lm(r,a,c),s=l}}}if(Zl)throw t=Ud,Zl=!1,Ud=null,t}function gt(t,e){var n=e[jd];n===void 0&&(n=e[jd]=new Set);var i=t+"__bubble";n.has(i)||(vv(e,t,2,!1),n.add(i))}function mu(t,e,n){var i=0;e&&(i|=4),vv(n,t,i,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[Va]){t[Va]=!0,Eg.forEach(function(n){n!=="selectionchange"&&(l1.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,mu("selectionchange",!1,e))}}function vv(t,e,n,i){switch(ev(e)){case 1:var r=My;break;case 4:r=wy;break;default:r=_f}n=r.bind(null,e,n,t),r=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bg(function(){var c=s,d=mf(n),f=[];e:{var h=mv.get(t);if(h!==void 0){var m=Sf,y=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":m=zy;break;case"focusin":y="focus",m=cu;break;case"focusout":y="blur",m=cu;break;case"beforeblur":case"afterblur":m=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Hy;break;case dv:case hv:case fv:m=Ry;break;case pv:m=Gy;break;case"scroll":m=Ey;break;case"wheel":m=jy;break;case"copy":case"cut":case"paste":m=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jp}var M=(e&4)!==0,_=!M&&t==="scroll",u=M?h!==null?h+"Capture":null:h;M=[];for(var v=c,p;v!==null;){p=v;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,u!==null&&(S=oa(v,u),S!=null&&M.push(fa(v,S,p)))),_)break;v=v.return}0<M.length&&(h=new m(h,y,null,n,d),f.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Dd&&(y=n.relatedTarget||n.fromElement)&&(qr(y)||y[qi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?qr(y):null,y!==null&&(_=hs(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(M=Zp,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=Jp,S="onPointerLeave",u="onPointerEnter",v="pointer"),_=m==null?h:Bs(m),p=y==null?h:Bs(y),h=new M(S,v+"leave",m,n,d),h.target=_,h.relatedTarget=p,S=null,qr(d)===c&&(M=new M(u,v+"enter",y,n,d),M.target=p,M.relatedTarget=_,S=M),_=S,m&&y)t:{for(M=m,u=y,v=0,p=M;p;p=vs(p))v++;for(p=0,S=u;S;S=vs(S))p++;for(;0<v-p;)M=vs(M),v--;for(;0<p-v;)u=vs(u),p--;for(;v--;){if(M===u||u!==null&&M===u.alternate)break t;M=vs(M),u=vs(u)}M=null}else M=null;m!==null&&cm(f,h,m,M,!1),y!==null&&_!==null&&cm(f,_,y,M,!0)}}e:{if(h=c?Bs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=Jy;else if(tm(h))if(ov)C=n1;else{C=e1;var w=$y}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=t1);if(C&&(C=C(t,c))){sv(f,C,n,d);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&bd(h,"number",h.value)}switch(w=c?Bs(c):window,t){case"focusin":(tm(w)||w.contentEditable==="true")&&(zs=w,Fd=c,Qo=null);break;case"focusout":Qo=Fd=zs=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,om(f,n,d);break;case"selectionchange":if(s1)break;case"keydown":case"keyup":om(f,n,d)}var E;if(wf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ks?iv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(nv&&n.locale!=="ko"&&(ks||b!=="onCompositionStart"?b==="onCompositionEnd"&&ks&&(E=tv()):(pr=d,yf="value"in pr?pr.value:pr.textContent,ks=!0)),w=tc(c,b),0<w.length&&(b=new Qp(b,t,null,n,d),f.push({event:b,listeners:w}),E?b.data=E:(E=rv(n),E!==null&&(b.data=E)))),(E=Yy?qy(t,n):Ky(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(d=new Qp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}gv(f,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oa(t,n),s!=null&&i.unshift(fa(t,s,r)),s=oa(t,e),s!=null&&i.push(fa(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=oa(n,s),l!=null&&o.unshift(fa(n,l,a))):r||(l=oa(n,s),l!=null&&o.push(fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var c1=/\r\n?/g,u1=/\u0000|\uFFFD/g;function um(t){return(typeof t=="string"?t:""+t).replace(c1,`
`).replace(u1,"")}function Ga(t,e,n){if(e=um(e),um(t)!==e&&n)throw Error(fe(425))}function nc(){}var Hd=null,Vd=null;function Gd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,d1=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(t){return dm.resolve(null).then(t).catch(f1)}:Wd;function f1(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ca(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),wi="__reactFiber$"+_o,pa="__reactProps$"+_o,qi="__reactContainer$"+_o,jd="__reactEvents$"+_o,p1="__reactListeners$"+_o,m1="__reactHandles$"+_o;function qr(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hm(t);t!==null;){if(n=t[wi])return n;t=hm(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[wi]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function Lc(t){return t[pa]||null}var Xd=[],Hs=-1;function Pr(t){return{current:t}}function vt(t){0>Hs||(t.current=Xd[Hs],Xd[Hs]=null,Hs--)}function ft(t,e){Hs++,Xd[Hs]=t.current,t.current=e}var br={},on=Pr(br),Tn=Pr(!1),es=br;function oo(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function ic(){vt(Tn),vt(on)}function fm(t,e,n){if(on.current!==br)throw Error(fe(168));ft(on,e),ft(Tn,n)}function xv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,$_(t)||"Unknown",r));return St({},n,i)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,es=on.current,ft(on,t),ft(Tn,Tn.current),!0}function pm(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=xv(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,vt(Tn),vt(on),ft(on,t)):vt(Tn),ft(Tn,n)}var Fi=null,Dc=!1,xu=!1;function _v(t){Fi===null?Fi=[t]:Fi.push(t)}function g1(t){Dc=!0,_v(t)}function Lr(){if(!xu&&Fi!==null){xu=!0;var t=0,e=lt;try{var n=Fi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Dc=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),Wg(gf,Lr),r}finally{lt=e,xu=!1}}return null}var Vs=[],Gs=0,sc=null,oc=0,Xn=[],Yn=0,ts=null,Vi=1,Gi="";function Gr(t,e){Vs[Gs++]=oc,Vs[Gs++]=sc,sc=t,oc=e}function yv(t,e,n){Xn[Yn++]=Vi,Xn[Yn++]=Gi,Xn[Yn++]=ts,ts=t;var i=Vi;t=Gi;var r=32-vi(i)-1;i&=~(1<<r),n+=1;var s=32-vi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-vi(e)+r|n<<r|i,Gi=s+t}else Vi=1<<s|n<<r|i,Gi=t}function Tf(t){t.return!==null&&(Gr(t,1),yv(t,1,0))}function Af(t){for(;t===sc;)sc=Vs[--Gs],Vs[Gs]=null,oc=Vs[--Gs],Vs[Gs]=null;for(;t===ts;)ts=Xn[--Yn],Xn[Yn]=null,Gi=Xn[--Yn],Xn[Yn]=null,Vi=Xn[--Yn],Xn[Yn]=null}var Fn=null,kn=null,xt=!1,di=null;function Sv(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,kn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Vi,overflow:Gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,kn=null,!0):!1;default:return!1}}function Yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(xt){var e=kn;if(e){var n=e;if(!mm(t,e)){if(Yd(t))throw Error(fe(418));e=yr(n.nextSibling);var i=Fn;e&&mm(t,e)?Sv(i,n):(t.flags=t.flags&-4097|2,xt=!1,Fn=t)}}else{if(Yd(t))throw Error(fe(418));t.flags=t.flags&-4097|2,xt=!1,Fn=t}}}function gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Wa(t){if(t!==Fn)return!1;if(!xt)return gm(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gd(t.type,t.memoizedProps)),e&&(e=kn)){if(Yd(t))throw Mv(),Error(fe(418));for(;e;)Sv(t,e),e=yr(e.nextSibling)}if(gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Fn?yr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=kn;t;)t=yr(t.nextSibling)}function ao(){kn=Fn=null,xt=!1}function bf(t){di===null?di=[t]:di.push(t)}var v1=Qi.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function wv(t){function e(u,v){if(t){var p=u.deletions;p===null?(u.deletions=[v],u.flags|=16):p.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Er(u,v),u.index=0,u.sibling=null,u}function s(u,v,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<v?(u.flags|=2,v):p):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,p,S){return v===null||v.tag!==6?(v=Tu(p,u.mode,S),v.return=u,v):(v=r(v,p),v.return=u,v)}function l(u,v,p,S){var C=p.type;return C===Os?d(u,v,p.props.children,S,p.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&vm(C)===v.type)?(S=r(v,p.props),S.ref=Ao(u,v,p),S.return=u,S):(S=kl(p.type,p.key,p.props,null,u.mode,S),S.ref=Ao(u,v,p),S.return=u,S)}function c(u,v,p,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=Au(p,u.mode,S),v.return=u,v):(v=r(v,p.children||[]),v.return=u,v)}function d(u,v,p,S,C){return v===null||v.tag!==7?(v=$r(p,u.mode,S,C),v.return=u,v):(v=r(v,p),v.return=u,v)}function f(u,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Tu(""+v,u.mode,p),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:return p=kl(v.type,v.key,v.props,null,u.mode,p),p.ref=Ao(u,null,v),p.return=u,p;case Us:return v=Au(v,u.mode,p),v.return=u,v;case lr:var S=v._init;return f(u,S(v._payload),p)}if(Bo(v)||So(v))return v=$r(v,u.mode,p,null),v.return=u,v;ja(u,v)}return null}function h(u,v,p,S){var C=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(u,v,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ia:return p.key===C?l(u,v,p,S):null;case Us:return p.key===C?c(u,v,p,S):null;case lr:return C=p._init,h(u,v,C(p._payload),S)}if(Bo(p)||So(p))return C!==null?null:d(u,v,p,S,null);ja(u,p)}return null}function m(u,v,p,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(p)||null,a(v,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ia:return u=u.get(S.key===null?p:S.key)||null,l(v,u,S,C);case Us:return u=u.get(S.key===null?p:S.key)||null,c(v,u,S,C);case lr:var w=S._init;return m(u,v,p,w(S._payload),C)}if(Bo(S)||So(S))return u=u.get(p)||null,d(v,u,S,C,null);ja(v,S)}return null}function y(u,v,p,S){for(var C=null,w=null,E=v,b=v=0,z=null;E!==null&&b<p.length;b++){E.index>b?(z=E,E=null):z=E.sibling;var x=h(u,E,p[b],S);if(x===null){E===null&&(E=z);break}t&&E&&x.alternate===null&&e(u,E),v=s(x,v,b),w===null?C=x:w.sibling=x,w=x,E=z}if(b===p.length)return n(u,E),xt&&Gr(u,b),C;if(E===null){for(;b<p.length;b++)E=f(u,p[b],S),E!==null&&(v=s(E,v,b),w===null?C=E:w.sibling=E,w=E);return xt&&Gr(u,b),C}for(E=i(u,E);b<p.length;b++)z=m(E,u,b,p[b],S),z!==null&&(t&&z.alternate!==null&&E.delete(z.key===null?b:z.key),v=s(z,v,b),w===null?C=z:w.sibling=z,w=z);return t&&E.forEach(function(T){return e(u,T)}),xt&&Gr(u,b),C}function M(u,v,p,S){var C=So(p);if(typeof C!="function")throw Error(fe(150));if(p=C.call(p),p==null)throw Error(fe(151));for(var w=C=null,E=v,b=v=0,z=null,x=p.next();E!==null&&!x.done;b++,x=p.next()){E.index>b?(z=E,E=null):z=E.sibling;var T=h(u,E,x.value,S);if(T===null){E===null&&(E=z);break}t&&E&&T.alternate===null&&e(u,E),v=s(T,v,b),w===null?C=T:w.sibling=T,w=T,E=z}if(x.done)return n(u,E),xt&&Gr(u,b),C;if(E===null){for(;!x.done;b++,x=p.next())x=f(u,x.value,S),x!==null&&(v=s(x,v,b),w===null?C=x:w.sibling=x,w=x);return xt&&Gr(u,b),C}for(E=i(u,E);!x.done;b++,x=p.next())x=m(E,u,b,x.value,S),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?b:x.key),v=s(x,v,b),w===null?C=x:w.sibling=x,w=x);return t&&E.forEach(function(B){return e(u,B)}),xt&&Gr(u,b),C}function _(u,v,p,S){if(typeof p=="object"&&p!==null&&p.type===Os&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ia:e:{for(var C=p.key,w=v;w!==null;){if(w.key===C){if(C=p.type,C===Os){if(w.tag===7){n(u,w.sibling),v=r(w,p.props.children),v.return=u,u=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&vm(C)===w.type){n(u,w.sibling),v=r(w,p.props),v.ref=Ao(u,w,p),v.return=u,u=v;break e}n(u,w);break}else e(u,w);w=w.sibling}p.type===Os?(v=$r(p.props.children,u.mode,S,p.key),v.return=u,u=v):(S=kl(p.type,p.key,p.props,null,u.mode,S),S.ref=Ao(u,v,p),S.return=u,u=S)}return o(u);case Us:e:{for(w=p.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(u,v.sibling),v=r(v,p.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Au(p,u.mode,S),v.return=u,u=v}return o(u);case lr:return w=p._init,_(u,v,w(p._payload),S)}if(Bo(p))return y(u,v,p,S);if(So(p))return M(u,v,p,S);ja(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,p),v.return=u,u=v):(n(u,v),v=Tu(p,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return _}var lo=wv(!0),Ev=wv(!1),ac=Pr(null),lc=null,Ws=null,Cf=null;function Rf(){Cf=Ws=lc=null}function Pf(t){var e=ac.current;vt(ac),t._currentValue=e}function Kd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){lc=t,Cf=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(lc===null)throw Error(fe(308));Ws=t,lc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Kr=null;function Lf(t){Kr===null?Kr=[t]:Kr.push(t)}function Tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function xm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,M=a;switch(h=e,m=n,M.tag){case 1:if(y=M.payload,typeof y=="function"){f=y.call(m,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=M.payload,h=typeof y=="function"?y.call(m,f,h):y,h==null)break e;f=St({},f,h);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=f}}function _m(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var ba={},Ti=Pr(ba),ma=Pr(ba),ga=Pr(ba);function Zr(t){if(t===ba)throw Error(fe(174));return t}function Nf(t,e){switch(ft(ga,e),ft(ma,t),ft(Ti,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rd(e,t)}vt(Ti),ft(Ti,e)}function co(){vt(Ti),vt(ma),vt(ga)}function bv(t){Zr(ga.current);var e=Zr(Ti.current),n=Rd(e,t.type);e!==n&&(ft(ma,t),ft(Ti,n))}function If(t){ma.current===t&&(vt(Ti),vt(ma))}var _t=Pr(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Uf(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Dl=Qi.ReactCurrentDispatcher,yu=Qi.ReactCurrentBatchConfig,ns=0,yt=null,Ut=null,Vt=null,dc=!1,Jo=!1,va=0,x1=0;function Jt(){throw Error(fe(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if(ns=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?M1:w1,t=n(i,r),Jo){s=0;do{if(Jo=!1,va=0,25<=s)throw Error(fe(301));s+=1,Vt=Ut=null,e.updateQueue=null,Dl.current=E1,t=n(i,r)}while(Jo)}if(Dl.current=hc,e=Ut!==null&&Ut.next!==null,ns=0,Vt=Ut=yt=null,dc=!1,e)throw Error(fe(300));return t}function zf(){var t=va!==0;return va=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?yt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function $n(){if(Ut===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Vt===null?yt.memoizedState:Vt.next;if(e!==null)Vt=e,Ut=t;else{if(t===null)throw Error(fe(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Vt===null?yt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function xa(t,e){return typeof e=="function"?e(t):e}function Su(t){var e=$n(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ns&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=d,is|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mu(t){var e=$n(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cv(){}function Rv(t,e){var n=yt,i=$n(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,Ff(Dv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,_a(9,Lv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(fe(349));ns&30||Pv(n,e,r)}return r}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lv(t,e,n,i){e.value=n,e.getSnapshot=i,Nv(e)&&Iv(t)}function Dv(t,e,n){return n(function(){Nv(e)&&Iv(t)})}function Nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function Iv(t){var e=Ki(t,1);e!==null&&xi(e,t,1,-1)}function ym(t){var e=Si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=S1.bind(null,yt,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uv(){return $n().memoizedState}function Nl(t,e,n,i){var r=Si();yt.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&Of(i,o.deps)){r.memoizedState=_a(e,n,s,i);return}}yt.flags|=t,r.memoizedState=_a(1|e,n,s,i)}function Sm(t,e){return Nl(8390656,8,t,e)}function Ff(t,e){return Nc(2048,8,t,e)}function Ov(t,e){return Nc(4,2,t,e)}function kv(t,e){return Nc(4,4,t,e)}function zv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,zv.bind(null,e,t),n)}function Bf(){}function Bv(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hv(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vv(t,e,n){return ns&21?(_i(n,e)||(n=Yg(),yt.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function _1(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=yu.transition;yu.transition={};try{t(!1),e()}finally{lt=n,yu.transition=i}}function Gv(){return $n().memoizedState}function y1(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))jv(e,n);else if(n=Tv(t,e,n,i),n!==null){var r=dn();xi(n,t,i,r),Xv(n,e,i)}}function S1(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))jv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,Lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tv(t,e,r,i),n!==null&&(r=dn(),xi(n,t,i,r),Xv(n,e,i))}}function Wv(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function jv(t,e){Jo=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var hc={readContext:Jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},M1={readContext:Jn,useCallback:function(t,e){return Si().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,zv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=y1.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=Si();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:Bf,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=_1.bind(null,t[1]),Si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=Si();if(xt){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),Wt===null)throw Error(fe(349));ns&30||Pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sm(Dv.bind(null,i,s,t),[t]),i.flags|=2048,_a(9,Lv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Si(),e=Wt.identifierPrefix;if(xt){var n=Gi,i=Vi;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},w1={readContext:Jn,useCallback:Bv,useContext:Jn,useEffect:Ff,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:kv,useMemo:Hv,useReducer:Su,useRef:Uv,useState:function(){return Su(xa)},useDebugValue:Bf,useDeferredValue:function(t){var e=$n();return Vv(e,Ut.memoizedState,t)},useTransition:function(){var t=Su(xa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Gv,unstable_isNewReconciler:!1},E1={readContext:Jn,useCallback:Bv,useContext:Jn,useEffect:Ff,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:kv,useMemo:Hv,useReducer:Mu,useRef:Uv,useState:function(){return Mu(xa)},useDebugValue:Bf,useDeferredValue:function(t){var e=$n();return Ut===null?e.memoizedState=t:Vv(e,Ut.memoizedState,t)},useTransition:function(){var t=Mu(xa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Gv,unstable_isNewReconciler:!1};function li(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=wr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(xi(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=wr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(xi(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=wr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(xi(e,t,i,n),Ll(e,t,i))}};function Mm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function Yv(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=An(e)?es:on.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function Qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=An(e)?es:on.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ic.enqueueReplaceState(r,r.state,null),cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=J_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pc||(pc=!0,lh=i),Jd(t,e)},n}function Kv(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new T1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=F1.bind(null,t,e,n),e.then(t,t))}function Tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var A1=Qi.ReactCurrentOwner,wn=!1;function ln(t,e,n,i){e.child=t===null?Ev(e,null,n,i):lo(e,t.child,n,i)}function bm(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=kf(t,e,n,i,s,r),n=zf(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(xt&&n&&Tf(e),e.flags|=1,ln(t,e,i,r),e.child)}function Cm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zv(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Er(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return $d(t,e,n,i,r)}function Qv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Xs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Xs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Xs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Xs,Nn),Nn|=i;return ln(t,e,r,n),e.child}function Jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,i,r){var s=An(n)?es:on.current;return s=oo(e,s),$s(e,r),n=kf(t,e,n,i,s,r),i=zf(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(xt&&i&&Tf(e),e.flags|=1,ln(t,e,n,r),e.child)}function Rm(t,e,n,i,r){if(An(n)){var s=!0;rc(e)}else s=!1;if($s(e,r),e.stateNode===null)Il(t,e),Yv(e,n,i),Qd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=An(n)?es:on.current,c=oo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wm(e,o,i,c),cr=!1;var h=e.memoizedState;o.state=h,cc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Tn.current||cr?(typeof d=="function"&&(Zd(e,n,d,i),l=e.memoizedState),(a=cr||Mm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Av(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=An(n)?es:on.current,l=oo(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&wm(e,o,i,l),cr=!1,h=e.memoizedState,o.state=h,cc(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||Tn.current||cr?(typeof m=="function"&&(Zd(e,n,m,i),y=e.memoizedState),(c=cr||Mm(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return eh(t,e,n,i,s,r)}function eh(t,e,n,i,r,s){Jv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pm(e,n,!1),Zi(t,e,s);i=e.stateNode,A1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&pm(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(t,e.context,!1),Nf(t,e.containerInfo)}function Pm(t,e,n,i,r){return ao(),bf(r),e.flags|=256,ln(t,e,n,i),e.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ex(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kc(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nh(n),e.memoizedState=th,t):Hf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return b1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=th,i}return s=t.child,t=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hf(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&bf(i),lo(e,t.child,null,n),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wu(Error(fe(422))),Xa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=nh(o),e.memoizedState=th,s);if(!(e.mode&1))return Xa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=wu(s,i,void 0),Xa(t,e,o,i)}if(a=(o&t.childLanes)!==0,wn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),xi(i,t,r,-1))}return Yf(),i=wu(Error(fe(421))),Xa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=B1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=yr(r.nextSibling),Fn=e,xt=!0,di=null,t!==null&&(Xn[Yn++]=Vi,Xn[Yn++]=Gi,Xn[Yn++]=ts,Vi=t.id,Gi=t.overflow,ts=e),e=Hf(e,i.children),e.flags|=4096,e)}function Lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kd(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,n,e);else if(t.tag===19)Lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function C1(t,e,n){switch(e.tag){case 3:$v(e),ao();break;case 5:bv(e);break;case 1:An(e.type)&&rc(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?ex(t,e,n):(ft(_t,_t.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Qv(t,e,n)}return Zi(t,e,n)}var nx,ih,ix,rx;nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};ix=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Zr(Ti.current);var s=null;switch(n){case"input":r=Td(t,r),i=Td(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Cd(t,r),i=Cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nc)}Pd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function bo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function R1(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return An(e.type)&&ic(),$t(e),null;case 3:return i=e.stateNode,co(),vt(Tn),vt(on),Uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(dh(di),di=null))),ih(t,e),$t(e),null;case 5:If(e);var r=Zr(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)ix(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return $t(e),null}if(t=Zr(Ti.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[pa]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)gt(Vo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Bp(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Vp(i,s),gt("invalid",i)}Pd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):ra.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Ua(i),Hp(i,s,!0);break;case"textarea":Ua(i),Gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[wi]=e,t[pa]=i,nx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ld(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)gt(Vo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Bp(t,i),r=Td(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Vp(t,i),r=Cd(t,i),gt("invalid",t);break;default:r=i}Pd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sa(t,l):typeof l=="number"&&sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&df(t,s,l,o))}switch(n){case"input":Ua(t),Hp(t,i,!1);break;case"textarea":Ua(t),Gp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=Zr(ga.current),Zr(Ti.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return $t(e),null;case 13:if(vt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&kn!==null&&e.mode&1&&!(e.flags&128))Mv(),ao(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[wi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else di!==null&&(dh(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?kt===0&&(kt=3):Yf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return co(),ih(t,e),t===null&&ha(e.stateNode.containerInfo),$t(e),null;case 10:return Pf(e.type._context),$t(e),null;case 17:return An(e.type)&&ic(),$t(e),null;case 19:if(vt(_t),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>ho&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return $t(e),null}else 2*Rt()-s.renderingStartTime>ho&&n!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Xf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function P1(t,e){switch(Af(e),e.tag){case 1:return An(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),vt(Tn),vt(on),Uf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return If(e),null;case 13:if(vt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(_t),null;case 4:return co(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var Ya=!1,rn=!1,L1=typeof WeakSet=="function"?WeakSet:Set,be=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function rh(t,e,n){try{n()}catch(i){At(t,e,i)}}var Dm=!1;function D1(t,e){if(Hd=$l,t=cv(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},$l=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var M=y.memoizedProps,_=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:li(e.type,M),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return y=Dm,Dm=!1,y}function $o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rh(e,n,s)}r=r.next}while(r!==i)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sx(t){var e=t.alternate;e!==null&&(t.alternate=null,sx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[pa],delete e[jd],delete e[p1],delete e[m1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ox(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ox(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}function ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}var Yt=null,ci=!1;function tr(t,e,n){for(n=n.child;n!==null;)ax(t,e,n),n=n.sibling}function ax(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:rn||js(n,e);case 6:var i=Yt,r=ci;Yt=null,tr(t,e,n),Yt=i,ci=r,Yt!==null&&(ci?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ci?(t=Yt,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),ca(t)):vu(Yt,n.stateNode));break;case 4:i=Yt,r=ci,Yt=n.stateNode.containerInfo,ci=!0,tr(t,e,n),Yt=i,ci=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rh(n,e,o),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!rn&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,tr(t,e,n),rn=i):tr(t,e,n);break;default:tr(t,e,n)}}function Im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L1),e.forEach(function(i){var r=H1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ci=!1;break e;case 3:Yt=a.stateNode.containerInfo,ci=!0;break e;case 4:Yt=a.stateNode.containerInfo,ci=!0;break e}a=a.return}if(Yt===null)throw Error(fe(160));ax(s,o,r),Yt=null,ci=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lx(e,t),e=e.sibling}function lx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),yi(t),i&4){try{$o(3,t,t.return),Uc(3,t)}catch(M){At(t,t.return,M)}try{$o(5,t,t.return)}catch(M){At(t,t.return,M)}}break;case 1:ni(e,t),yi(t),i&512&&n!==null&&js(n,n.return);break;case 5:if(ni(e,t),yi(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{sa(r,"")}catch(M){At(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pg(r,s),Ld(a,o);var c=Ld(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Ug(r,f):d==="dangerouslySetInnerHTML"?Ng(r,f):d==="children"?sa(r,f):df(r,d,f,c)}switch(a){case"input":Ad(r,s);break;case"textarea":Lg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ks(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[pa]=s}catch(M){At(t,t.return,M)}}break;case 6:if(ni(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){At(t,t.return,M)}}break;case 3:if(ni(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(M){At(t,t.return,M)}break;case 4:ni(e,t),yi(t);break;case 13:ni(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=Rt())),i&4&&Im(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||d,ni(e,t),rn=c):ni(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(be=t,d=t.child;d!==null;){for(f=be=d;be!==null;){switch(h=be,m=h.child,h.tag){case 0:case 11:case 14:case 15:$o(4,h,h.return);break;case 1:js(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(M){At(i,n,M)}}break;case 5:js(h,h.return);break;case 22:if(h.memoizedState!==null){Om(f);continue}}m!==null?(m.return=h,be=m):Om(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ig("display",o))}catch(M){At(t,t.return,M)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){At(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ni(e,t),yi(t),i&4&&Im(t);break;case 21:break;default:ni(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ox(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(sa(r,""),i.flags&=-33);var s=Nm(t);ah(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nm(t);oh(t,a,o);break;default:throw Error(fe(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function N1(t,e,n){be=t,cx(t)}function cx(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ya;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=Ya;var c=rn;if(Ya=o,(rn=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?km(r):l!==null?(l.return=o,be=l):km(r);for(;s!==null;)be=s,cx(s),s=s.sibling;be=r,Ya=a,rn=c}Um(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Um(t)}}function Um(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_m(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_m(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ca(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}rn||e.flags&512&&sh(e)}catch(h){At(e,e.return,h)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Om(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function km(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{sh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{sh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var I1=Math.ceil,fc=Qi.ReactCurrentDispatcher,Vf=Qi.ReactCurrentOwner,Qn=Qi.ReactCurrentBatchConfig,tt=0,Wt=null,Nt=null,Zt=0,Nn=0,Xs=Pr(0),kt=0,ya=null,is=0,Oc=0,Gf=0,ea=null,Mn=null,Wf=0,ho=1/0,zi=null,pc=!1,lh=null,Mr=null,qa=!1,mr=null,mc=0,ta=0,ch=null,Ul=-1,Ol=0;function dn(){return tt&6?Rt():Ul!==-1?Ul:Ul=Rt()}function wr(t){return t.mode&1?tt&2&&Zt!==0?Zt&-Zt:v1.transition!==null?(Ol===0&&(Ol=Yg()),Ol):(t=lt,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function xi(t,e,n,i){if(50<ta)throw ta=0,ch=null,Error(fe(185));Ea(t,n,i),(!(tt&2)||t!==Wt)&&(t===Wt&&(!(tt&2)&&(Oc|=n),kt===4&&dr(t,Zt)),bn(t,i),n===1&&tt===0&&!(e.mode&1)&&(ho=Rt()+500,Dc&&Lr()))}function bn(t,e){var n=t.callbackNode;vy(t,e);var i=Jl(t,t===Wt?Zt:0);if(i===0)n!==null&&Xp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xp(n),e===1)t.tag===0?g1(zm.bind(null,t)):_v(zm.bind(null,t)),h1(function(){!(tt&6)&&Lr()}),n=null;else{switch(qg(i)){case 1:n=gf;break;case 4:n=jg;break;case 16:n=Ql;break;case 536870912:n=Xg;break;default:n=Ql}n=vx(n,ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ux(t,e){if(Ul=-1,Ol=0,tt&6)throw Error(fe(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=Jl(t,t===Wt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gc(t,i);else{e=i;var r=tt;tt|=2;var s=hx();(Wt!==t||Zt!==e)&&(zi=null,ho=Rt()+500,Jr(t,e));do try{k1();break}catch(a){dx(t,a)}while(!0);Rf(),fc.current=s,tt=r,Nt!==null?e=0:(Wt=null,Zt=0,e=kt)}if(e!==0){if(e===2&&(r=Od(t),r!==0&&(i=r,e=uh(t,r))),e===1)throw n=ya,Jr(t,0),dr(t,i),bn(t,Rt()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!U1(r)&&(e=gc(t,i),e===2&&(s=Od(t),s!==0&&(i=s,e=uh(t,s))),e===1))throw n=ya,Jr(t,0),dr(t,i),bn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Wr(t,Mn,zi);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Wf+500-Rt(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wd(Wr.bind(null,t,Mn,zi),e);break}Wr(t,Mn,zi);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-vi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*I1(i/1960))-i,10<i){t.timeoutHandle=Wd(Wr.bind(null,t,Mn,zi),i);break}Wr(t,Mn,zi);break;case 5:Wr(t,Mn,zi);break;default:throw Error(fe(329))}}}return bn(t,Rt()),t.callbackNode===n?ux.bind(null,t):null}function uh(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=gc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&dh(e)),t}function dh(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function U1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Gf,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function zm(t){if(tt&6)throw Error(fe(327));eo();var e=Jl(t,0);if(!(e&1))return bn(t,Rt()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var i=Od(t);i!==0&&(e=i,n=uh(t,i))}if(n===1)throw n=ya,Jr(t,0),dr(t,e),bn(t,Rt()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,Mn,zi),bn(t,Rt()),null}function jf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ho=Rt()+500,Dc&&Lr())}}function rs(t){mr!==null&&mr.tag===0&&!(tt&6)&&eo();var e=tt;tt|=1;var n=Qn.transition,i=lt;try{if(Qn.transition=null,lt=1,t)return t()}finally{lt=i,Qn.transition=n,tt=e,!(tt&6)&&Lr()}}function Xf(){Nn=Xs.current,vt(Xs)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,d1(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:co(),vt(Tn),vt(on),Uf();break;case 5:If(i);break;case 4:co();break;case 13:vt(_t);break;case 19:vt(_t);break;case 10:Pf(i.type._context);break;case 22:case 23:Xf()}n=n.return}if(Wt=t,Nt=t=Er(t.current,null),Zt=Nn=e,kt=0,ya=null,Gf=Oc=is=0,Mn=ea=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Kr=null}return t}function dx(t,e){do{var n=Nt;try{if(Rf(),Dl.current=hc,dc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dc=!1}if(ns=0,Vt=Ut=yt=null,Jo=!1,va=0,Vf.current=null,n===null||n.return===null){kt=1,ya=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Tm(o);if(m!==null){m.flags&=-257,Am(m,o,a,s,e),m.mode&1&&Em(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var M=new Set;M.add(l),e.updateQueue=M}else y.add(l);break e}else{if(!(e&1)){Em(s,c,e),Yf();break e}l=Error(fe(426))}}else if(xt&&a.mode&1){var _=Tm(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Am(_,o,a,s,e),bf(uo(l,a));break e}}s=l=uo(l,a),kt!==4&&(kt=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=qv(s,l,e);xm(s,u);break e;case 1:a=l;var v=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mr===null||!Mr.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Kv(s,a,e);xm(s,S);break e}}s=s.return}while(s!==null)}px(n)}catch(C){e=C,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function hx(){var t=fc.current;return fc.current=hc,t===null?hc:t}function Yf(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(is&268435455)&&!(Oc&268435455)||dr(Wt,Zt)}function gc(t,e){var n=tt;tt|=2;var i=hx();(Wt!==t||Zt!==e)&&(zi=null,Jr(t,e));do try{O1();break}catch(r){dx(t,r)}while(!0);if(Rf(),tt=n,fc.current=i,Nt!==null)throw Error(fe(261));return Wt=null,Zt=0,kt}function O1(){for(;Nt!==null;)fx(Nt)}function k1(){for(;Nt!==null&&!ly();)fx(Nt)}function fx(t){var e=gx(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?px(t):Nt=e,Vf.current=null}function px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=P1(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Nt=null;return}}else if(n=R1(n,e,Nn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);kt===0&&(kt=5)}function Wr(t,e,n){var i=lt,r=Qn.transition;try{Qn.transition=null,lt=1,z1(t,e,n,i)}finally{Qn.transition=r,lt=i}return null}function z1(t,e,n,i){do eo();while(mr!==null);if(tt&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xy(t,s),t===Wt&&(Nt=Wt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,vx(Ql,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=lt;lt=1;var a=tt;tt|=4,Vf.current=null,D1(t,n),lx(n,t),r1(Vd),$l=!!Hd,Vd=Hd=null,t.current=n,N1(n),cy(),tt=a,lt=o,Qn.transition=s}else t.current=n;if(qa&&(qa=!1,mr=t,mc=r),s=t.pendingLanes,s===0&&(Mr=null),hy(n.stateNode),bn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,t=lh,lh=null,t;return mc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===ch?ta++:(ta=0,ch=t):ta=0,Lr(),null}function eo(){if(mr!==null){var t=qg(mc),e=Qn.transition,n=lt;try{if(Qn.transition=null,lt=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,mc=0,tt&6)throw Error(fe(331));var r=tt;for(tt|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var d=be;switch(d.tag){case 0:case 11:case 15:$o(8,d,s)}var f=d.child;if(f!==null)f.return=d,be=f;else for(;be!==null;){d=be;var h=d.sibling,m=d.return;if(sx(d),d===c){be=null;break}if(h!==null){h.return=m,be=h;break}be=m}}}var y=s.alternate;if(y!==null){var M=y.child;if(M!==null){y.child=null;do{var _=M.sibling;M.sibling=null,M=_}while(M!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var v=t.current;for(be=v;be!==null;){o=be;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,be=p;else e:for(o=v;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(C){At(a,a.return,C)}if(a===o){be=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,be=S;break e}be=a.return}}if(tt=r,Lr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{lt=n,Qn.transition=e}}return!1}function Fm(t,e,n){e=uo(n,e),e=qv(t,e,1),t=Sr(t,e,1),e=dn(),t!==null&&(Ea(t,1,e),bn(t,e))}function At(t,e,n){if(t.tag===3)Fm(t,t,n);else for(;e!==null;){if(e.tag===3){Fm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=uo(n,t),t=Kv(e,t,1),e=Sr(e,t,1),t=dn(),e!==null&&(Ea(e,1,t),bn(e,t));break}}e=e.return}}function F1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Zt&n)===n&&(kt===4||kt===3&&(Zt&130023424)===Zt&&500>Rt()-Wf?Jr(t,0):Gf|=n),bn(t,e)}function mx(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=dn();t=Ki(t,e),t!==null&&(Ea(t,e,n),bn(t,n))}function B1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mx(t,n)}function H1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),mx(t,n)}var gx;gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,C1(t,e,n);wn=!!(t.flags&131072)}else wn=!1,xt&&e.flags&1048576&&yv(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Il(t,e),t=e.pendingProps;var r=oo(e,on.current);$s(e,n),r=kf(null,e,i,t,r,n);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=Ic,e.stateNode=r,r._reactInternals=e,Qd(e,i,t,n),e=eh(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Tf(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=G1(i),t=li(i,t),r){case 0:e=$d(null,e,i,t,n);break e;case 1:e=Rm(null,e,i,t,n);break e;case 11:e=bm(null,e,i,t,n);break e;case 14:e=Cm(null,e,i,li(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),$d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Rm(t,e,i,r,n);case 3:e:{if($v(e),t===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Av(t,e),cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(fe(423)),e),e=Pm(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(fe(424)),e),e=Pm(t,e,i,n,r);break e}else for(kn=yr(e.stateNode.containerInfo.firstChild),Fn=e,xt=!0,di=null,n=Ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Zi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return bv(e),t===null&&qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Gd(i,r)?o=null:s!==null&&Gd(i,s)&&(e.flags|=32),Jv(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&qd(e),null;case 13:return ex(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),bm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(ac,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!Tn.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=Jn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),Cm(t,e,i,r,n);case 15:return Zv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Il(t,e),e.tag=1,An(i)?(t=!0,rc(e)):t=!1,$s(e,n),Yv(e,i,r),Qd(e,i,r,n),eh(null,e,i,!0,t,n);case 19:return tx(t,e,n);case 22:return Qv(t,e,n)}throw Error(fe(156,e.tag))};function vx(t,e){return Wg(t,e)}function V1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new V1(t,e,n,i)}function qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G1(t){if(typeof t=="function")return qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===pf)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return $r(n.children,r,s,e);case hf:o=8,r|=8;break;case Sd:return t=qn(12,n,e,r|2),t.elementType=Sd,t.lanes=s,t;case Md:return t=qn(13,n,e,r),t.elementType=Md,t.lanes=s,t;case wd:return t=qn(19,n,e,r),t.elementType=wd,t.lanes=s,t;case bg:return kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case Ag:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case lr:o=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function kc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=bg,t.lanes=n,t.stateNode={isHidden:!1},t}function Tu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Au(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function W1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,o,a,l){return t=new W1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function j1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xx(t){if(!t)return br;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(An(n))return xv(t,n,e)}return e}function _x(t,e,n,i,r,s,o,a,l){return t=Kf(n,i,!0,t,r,s,o,a,l),t.context=xx(null),n=t.current,i=dn(),r=wr(n),s=Xi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,Ea(t,r,i),bn(t,i),t}function zc(t,e,n,i){var r=e.current,s=dn(),o=wr(r);return n=xx(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(xi(t,r,o,s),Ll(t,r,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function X1(){return null}var yx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qf(t){this._internalRoot=t}Fc.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));zc(t,e,null,null)};Fc.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){zc(null,t,null,null)}),e[qi]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&$g(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function Y1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(o);s.call(c)}}var o=_x(e,i,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[qi]=o.current,ha(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=vc(l);a.call(c)}}var l=Kf(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=l,t[qi]=l.current,ha(t.nodeType===8?t.parentNode:t),rs(function(){zc(e,l,n,i)}),l}function Hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vc(o);a.call(l)}}zc(e,o,t,r)}else o=Y1(n,e,t,r,i);return vc(o)}Kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(vf(e,n|1),bn(e,Rt()),!(tt&6)&&(ho=Rt()+500,Lr()))}break;case 13:rs(function(){var i=Ki(t,1);if(i!==null){var r=dn();xi(i,t,1,r)}}),Zf(t,1)}};xf=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=dn();xi(e,t,134217728,n)}Zf(t,134217728)}};Zg=function(t){if(t.tag===13){var e=wr(t),n=Ki(t,e);if(n!==null){var i=dn();xi(n,t,e,i)}Zf(t,e)}};Qg=function(){return lt};Jg=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Nd=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(fe(90));Rg(i),Ad(i,r)}}}break;case"textarea":Lg(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};zg=jf;Fg=rs;var q1={usingClientEntryPoint:!1,Events:[Aa,Bs,Lc,Og,kg,jf]},Co={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K1={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||X1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{bc=Ka.inject(K1),Ei=Ka}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;Hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(fe(200));return j1(t,e,null,n)};Hn.createRoot=function(t,e){if(!Jf(t))throw Error(fe(299));var n=!1,i="",r=yx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,ha(t.nodeType===8?t.parentNode:t),new Qf(e)};Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};Hn.flushSync=function(t){return rs(t)};Hn.hydrate=function(t,e,n){if(!Bc(e))throw Error(fe(200));return Hc(null,t,e,!0,n)};Hn.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=yx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_x(e,null,t,1,n??null,r,!1,s,o),t[qi]=e.current,ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fc(e)};Hn.render=function(t,e,n){if(!Bc(e))throw Error(fe(200));return Hc(null,t,e,!1,n)};Hn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(fe(40));return t._reactRootContainer?(rs(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};Hn.unstable_batchedUpdates=jf;Hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return Hc(t,e,n,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(t){console.error(t)}}Sx(),Sg.exports=Hn;var Z1=Sg.exports,Vm=Z1;_d.createRoot=Vm.createRoot,_d.hydrateRoot=Vm.hydrateRoot;const Q1=["Seating","Tables","Bedroom","Storage","Decor","Kitchen"],zl=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"}],hi=Object.fromEntries(zl.map(t=>[t.type,t])),J1=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],Mx="honeycutt.design.v2";let $1=1;const ii=()=>`${Date.now().toString(36)}-${($1++).toString(36)}`;function Go(){return{view:"2d",tool:"select",sideTool:"select",sideWall:null,units:"ft",ambiance:"day",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],sketches:[],selected:null}}function eS(){try{const t=localStorage.getItem(Mx);if(!t)return Go();const e=JSON.parse(t);return!e||!Array.isArray(e.items)?Go():{...Go(),...e,tool:"select",sideTool:"select",selected:null}}catch{return Go()}}function zn(t,e,n){return Math.max(e,Math.min(n,t))}function tS(t){return t.scale&&(t.scale={x:zn(t.scale.x??1,.3,3),y:zn(t.scale.y??1,.3,3),z:zn(t.scale.z??1,.3,3)}),t}function wx(t){return t.w=zn(t.w,.5,40),t.d=zn(t.d,.5,40),t.height!=null&&(t.height=zn(t.height,1.5,6)),t}function Ex(t){return t.height!=null&&(t.height=zn(t.height,1.5,6)),t.thickness!=null&&(t.thickness=zn(t.thickness,.05,.5)),t}function hh(t){return t.w!=null&&(t.w=zn(t.w,.1,12)),t.h!=null&&(t.h=zn(t.h,.1,6)),t.depth!=null&&(t.depth=zn(t.depth,.02,3)),t.thickness!=null&&(t.thickness=zn(t.thickness,.01,.4)),t}const fh={item:"items",room:"rooms",wall:"walls",builtin:"builtins",sketch:"sketches"};function nS(t,e,n,i){const r=fh[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&tS(a),e==="room"&&wx(a),e==="wall"&&Ex(a),e==="builtin"&&hh(a),a});return{...t,[r]:s}}function bu(t,e){var n;switch(e.type){case"view":return{...t,view:e.view};case"ambiance":return{...t,ambiance:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"sideTool":return{...t,sideTool:e.tool,selected:e.tool==="select"?t.selected:null};case"sideWall":return{...t,sideWall:e.ref};case"defaultHeight":return{...t,defaultHeight:zn(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"addRoom":{const i=wx({uid:ii(),x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],selected:{type:"room",uid:i.uid}}}case"addWall":{const i=Ex({uid:ii(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],selected:{type:"wall",uid:i.uid}}}case"addBuiltin":{const i=hh({uid:ii(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>hh({uid:ii(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addSketch":{const i={uid:ii(),pts:e.pts,closed:!!e.closed,color:e.color||"#3f7d8c"};return{...t,sketches:[...t.sketches,i],selected:{type:"sketch",uid:i.uid}}}case"addItem":{const i=hi[e.kind];if(!i)return t;const r={uid:ii(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return nS(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=fh[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=fh[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:ii(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:ii(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:ii(),u:o.u+.3,v:o.v+.3}:i==="sketch"?a={...o,uid:ii(),pts:o.pts.map(l=>({x:l.x+.3,z:l.z+.3}))}:a={...o,uid:ii(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...Go(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const iS=new Set(["addRoom","addWall","addSketch","addItem","addBuiltin","addBuiltins","update","remove","duplicate","clear","reset","defaultHeight"]),Cu=80;function rS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:[t.present,...t.future].slice(0,Cu),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Cu),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,tool:t.present.tool},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!iS.has(e.type))return{...t,present:bu(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:bu(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Cu),present:bu(t.present,e),future:[],lastKey:i||null,lastTime:n}}const Tx=Ce.createContext(null);function sS({children:t}){const[e,n]=Ce.useReducer(rS,void 0,()=>({past:[],present:eS(),future:[],lastKey:null,lastTime:0})),i=Ce.useRef(null),r=e.present;Ce.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(Mx,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=Ce.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return g.jsx(Tx.Provider,{value:s,children:t})}function Ji(){const t=Ce.useContext(Tx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}function oS(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function qe(t,e){return e==="m"?`${t.toFixed(2)} m`:oS(t)}function aS(t,e){return e==="m"?`${t.toFixed(1)} m²`:`${Math.round(t*10.7639)} ft²`}function hr(t,e){const n=e&&e.scale||{};return{w:t.w*(n.x??1),d:t.d*(n.z??1),h:t.h*(n.y??1)}}function na(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function Pn(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Nr="rgba(0,0,0,0.22)",Gm="rgba(0,0,0,0.28)";function Ax({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,d=Math.max(.8,Math.min(s,o)*.025),f=Pn(i,.16),h=Pn(i,-.22),m=(M,_,u,v,p,S=c,C={})=>g.jsx("rect",{x:M,y:_,width:u,height:v,rx:S,ry:S,fill:p,...C});let y=null;switch(r){case"seat":{const M=o*.26,_=s*.12;y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),m(a,l,s,M,h,c)," ",m(a,l+M*.5,_,o-M*.5,h,c*.6),m(a+s-_,l+M*.5,_,o-M*.5,h,c*.6),m(a+_+d,l+M,s-2*(_+d),o-M-d,f,c*.5)]});break}case"chair":{const M=o*.22;y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),m(a,l,s,M,h,c),m(a+d,l+M,s-2*d,o-M-d,f,c*.5)]});break}case"bench":{y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),m(a+s*.05,l+o*.18,s*.9,o*.64,f,c*.4)]});break}case"round":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),g.jsx("circle",{cx:0,cy:0,r:s*.3,fill:f})]});break;case"table":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,h),m(a+d*1.5,l+d*1.5,s-3*d,o-3*d,i,c*.8),m(a+s*.12,l+o*.12,s*.76,o*.76,f,c*.5)]});break;case"desk":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,h),m(a+d,l+d,s-2*d,o-2*d,i,c*.7),m(a+s*.62,l+d*2,s*.34,o-d*4,f,c*.4)]});break;case"round-table":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:h}),g.jsx("circle",{cx:0,cy:0,r:s/2-d*1.5,fill:i}),g.jsx("circle",{cx:0,cy:0,r:s*.34,fill:f})]});break;case"bed":{const M=o*.16,_=s*.4,u=o*.18;y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),m(a,l,s,M,h,c)," ",m(a+s*.05,l+M+o*.04,_,u,f,c*.4),m(a+s*.55,l+M+o*.04,_,u,f,c*.4),m(a+s*.05,l+M+u+o*.08,s*.9,o-M-u-o*.12,Pn(i,.07),c*.3)]});break}case"cabinet":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),g.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:Gm,strokeWidth:d}),g.jsx("circle",{cx:-s*.06,cy:0,r:d*1.2,fill:Nr}),g.jsx("circle",{cx:s*.06,cy:0,r:d*1.2,fill:Nr})]});break;case"wardrobe":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),g.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:Gm,strokeWidth:d}),g.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Nr,strokeWidth:d*1.6}),g.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Nr,strokeWidth:d*1.6})]});break;case"drawers":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),m(a+d,l+d,s-2*d,o-2*d,f,c*.5),g.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Nr,strokeWidth:d*1.6,strokeLinecap:"round"})]});break;case"shelf":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,h),m(a+d,l+d,s-2*d,o-2*d,i,c*.4),[.3,.5,.7].map((M,_)=>g.jsx("line",{x1:a+s*.12,y1:l+o*M,x2:a+s*.88,y2:l+o*M,stroke:Nr,strokeWidth:d},_))]});break;case"tv":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,"#0c0d10",c*.4),m(a+d,l,s-2*d,o*.55,"#22303f",c*.2)]});break;case"rug":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i,c*.3),m(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:Pn(i,.25),strokeWidth:d*1.4,strokeDasharray:`${d*3} ${d*3}`})]});break;case"round-rug":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),g.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:Pn(i,.25),strokeWidth:d*1.4})]});break;case"plant":y=g.jsxs(g.Fragment,{children:[m(a+s*.28,l+o*.28,s*.44,o*.44,Pn("#8a6a4a",-.1),c*.4),g.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:Pn(i,.1)}),g.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),g.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:Pn(i,-.12)}),g.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:Pn(i,.18)})]});break;case"lamp":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:Pn(i,-.05)}),g.jsx("circle",{cx:0,cy:0,r:s*.22,fill:Pn(i,.3)})]});break;case"fridge":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),m(a+d,l+d,s-2*d,o-2*d,f,c*.4),g.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Nr,strokeWidth:d*1.8,strokeLinecap:"round"})]});break;case"counter":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,h),m(a+d,l+d,s-2*d,o-2*d,i,c*.4),m(a+s*.58,l+o*.22,s*.32,o*.56,Pn(i,-.18),c*.3)]});break;case"range":y=g.jsxs(g.Fragment,{children:[m(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([M,_],u)=>g.jsx("circle",{cx:s*M,cy:o*_,r:s*.13,fill:"none",stroke:Pn(i,.3),strokeWidth:d},u))]});break;default:y=m(a,l,s,o,i)}return g.jsx("g",{children:y})}const Pt=({children:t,size:e=22,...n})=>g.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),lS=t=>g.jsxs(Pt,{...t,children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),g.jsx("path",{d:"M3 9h18M9 9v12"})]}),cS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),g.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),uS=t=>g.jsx(Pt,{...t,children:g.jsx("path",{d:"M12 5v14M5 12h14"})}),dS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),g.jsx("path",{d:"M21 3v5h-5"})]}),xs=t=>g.jsxs(Pt,{...t,children:[g.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),g.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),Ir=t=>g.jsx(Pt,{...t,children:g.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),hS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),g.jsx("circle",{cx:"16",cy:"6",r:"2"}),g.jsx("circle",{cx:"8",cy:"12",r:"2"}),g.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),fS=t=>g.jsx(Pt,{...t,children:g.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),$f=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),g.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),pS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),g.jsx("path",{d:"m3 13 9 5 9-5"})]}),bx=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M9 14 4 9l5-5"}),g.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),mS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"m15 14 5-5-5-5"}),g.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),gS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M12 15V3"}),g.jsx("path",{d:"m8 7 4-4 4 4"}),g.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),vS=t=>g.jsxs(Pt,{...t,children:[g.jsx("circle",{cx:"12",cy:"12",r:"4"}),g.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),Wm=t=>g.jsx(Pt,{...t,children:g.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),jm=t=>g.jsx(Pt,{...t,children:g.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),Xm=t=>g.jsx(Pt,{...t,children:g.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),xS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M3 20h18"}),g.jsx("rect",{x:"6",y:"4",width:"7",height:"16",rx:"1"}),g.jsx("path",{d:"M13 9h5v11"})]}),_S=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),g.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),yS=t=>g.jsxs(Pt,{...t,children:[g.jsx("path",{d:"M12 19l7-7-4-4-7 7v4z"}),g.jsx("path",{d:"M14 6l4 4M5 21l3-1"})]}),Ym=t=>g.jsx(Pt,{...t,children:g.jsx("path",{d:"M4 12l5 5L20 6"})}),wt="#d9b779",qm="#39414f",SS="#c3c9d1",MS="#eef1f5",Cx=.0254,Km=Cx,Ru=18,Zm=["n","e","s","w"],wS="#2f7d8c",ES=16,en=(t,e)=>Math.round(t/e)*e,jr=(t,e,n)=>Math.max(e,Math.min(n,t)),Qm=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1;function TS(t,e,n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r].x,a=n[r].z,l=n[s].x,c=n[s].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function Pu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function Lu(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=jr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function AS(){const{state:t,dispatch:e}=Ji(),{rooms:n,walls:i,items:r,sketches:s,selected:o,units:a,tool:l,defaultHeight:c}=t,d=a==="ft"?Cx:.01,[f,h]=Ce.useState([]),[m,y]=Ce.useState(null),M=Ce.useRef(null),_=Ce.useRef(null),[u,v]=Ce.useState({W:360,H:540}),[p,S]=Ce.useState({scale:64,panX:180,panY:270,init:!1}),[C,w]=Ce.useState(null),E=Ce.useRef(null);E.current=C;const b=Ce.useRef(new Map),z=Ce.useRef(null),x=Ce.useRef(p);x.current=p;const T=Ce.useRef(!1);Ce.useLayoutEffect(()=>{const R=M.current;if(!R)return;const O=()=>{const N=R.clientWidth,F=R.clientHeight;v({W:N,H:F}),S(I=>I.init?I:{scale:64,panX:N/2,panY:F/2,init:!0})},D=new ResizeObserver(O);return D.observe(R),O(),()=>D.disconnect()},[]);const{W:B,H}=u;function q(){let R=1/0,O=-1/0,D=1/0,N=-1/0;const F=(_e,G)=>{R=Math.min(R,_e),O=Math.max(O,_e),D=Math.min(D,G),N=Math.max(N,G)};for(const _e of n)F(_e.x,_e.z),F(_e.x+_e.w,_e.z+_e.d);for(const _e of i)F(_e.x1,_e.z1),F(_e.x2,_e.z2);for(const _e of r){const G=hi[_e.type],ve=hr(G,_e);F(_e.x-ve.w/2,_e.z-ve.d/2),F(_e.x+ve.w/2,_e.z+ve.d/2)}for(const _e of s)for(const G of _e.pts)F(G.x,G.z);if(!isFinite(R)){S({scale:64,panX:B/2,panY:H/2,init:!0});return}const I=56,W=92,X=64,ie=Math.max(.5,O-R),de=Math.max(.5,N-D),me=jr(Math.min((B-2*I)/ie,(H-W-X)/de),14,180),he=(R+O)/2,Ne=(D+N)/2,Me=(W+(H-X))/2;S({scale:me,panX:B/2-he*me,panY:Me-Ne*me,init:!0})}const Q=n.length>0||i.length>0||r.length>0||s.length>0,j=Ce.useRef(0);Ce.useLayoutEffect(()=>{if(!u.W)return;const R=j.current&&Math.abs(u.W-j.current)>60;j.current=u.W,Q&&(!T.current||R)&&(q(),T.current=!0)},[u.W,Q]),Ce.useLayoutEffect(()=>{l!=="sketch"&&(h([]),y(null))},[l]);const{scale:K,panX:k,panY:te}=p,$=(R,O)=>[R*K+k,O*K+te],ae=(R,O)=>[(R-k)/K,(O-te)/K],ge=R=>{const O=_.current.getBoundingClientRect();return[R.clientX-O.left,R.clientY-O.top]},pe=(o==null?void 0:o.type)==="item"?r.find(R=>R.uid===o.uid):null,ee=(o==null?void 0:o.type)==="room"?n.find(R=>R.uid===o.uid):null,ne=(o==null?void 0:o.type)==="wall"?i.find(R=>R.uid===o.uid):null,xe=(o==null?void 0:o.type)==="sketch"?s.find(R=>R.uid===o.uid):null;function ce(R){const O=hi[R.type],D=hr(O,R),[N,F]=$(R.x,R.z),I=(R.rot||0)*Math.PI/180,W=Math.cos(I),X=Math.sin(I),ie=D.w*K/2,de=D.d*K/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([me,he])=>{const Ne=me*ie,Me=he*de;return[N+Ne*W-Me*X,F+Ne*X+Me*W]})}function Ae(R){return{nw:$(R.x,R.z),ne:$(R.x+R.w,R.z),se:$(R.x+R.w,R.z+R.d),sw:$(R.x,R.z+R.d)}}function Re(R,O){const[D,N]=ae(R,O);if(pe){const F=ce(pe);for(let I=0;I<4;I++)if(Math.hypot(R-F[I][0],O-F[I][1])<Ru)return{kind:"item-handle"}}if(ee){const F=Ae(ee);for(const I in F)if(Math.hypot(R-F[I][0],O-F[I][1])<Ru)return{kind:"room-handle",handle:I}}if(ne)for(const F of["1","2"]){const[I,W]=$(ne["x"+F],ne["z"+F]);if(Math.hypot(R-I,O-W)<Ru)return{kind:"wall-end",end:F}}for(let F=r.length-1;F>=0;F--){const I=r[F],W=hi[I.type];if(!W)continue;const X=hr(W,I),ie=(I.rot||0)*Math.PI/180,de=D-I.x,me=N-I.z,he=de*Math.cos(ie)+me*Math.sin(ie),Ne=-de*Math.sin(ie)+me*Math.cos(ie);if(Math.abs(he)<=X.w/2+.08&&Math.abs(Ne)<=X.d/2+.08)return{kind:"item",uid:I.uid}}for(let F=i.length-1;F>=0;F--){const I=i[F];if(Lu(D,N,I.x1,I.z1,I.x2,I.z2)<=I.thickness/2+.18)return{kind:"wall",uid:I.uid}}for(let F=s.length-1;F>=0;F--){const I=s[F],W=I.closed?I.pts.length:I.pts.length-1;for(let X=0;X<W;X++){const ie=I.pts[X],de=I.pts[(X+1)%I.pts.length];if(Lu(D,N,ie.x,ie.z,de.x,de.z)<=.18)return{kind:"sketch",uid:I.uid}}}for(let F=n.length-1;F>=0;F--){const I=n[F];for(const W of Zm){const[X,ie,de,me]=Pu(I,W);if(Lu(D,N,X,ie,de,me)<=.18)return{kind:"roomwall",uid:I.uid,side:W}}}for(let F=n.length-1;F>=0;F--){const I=n[F];if(D>=I.x&&D<=I.x+I.w&&N>=I.z&&N<=I.z+I.d)return{kind:"room",uid:I.uid}}for(let F=s.length-1;F>=0;F--){const I=s[F];if(I.closed&&I.pts.length>=3&&TS(D,N,I.pts))return{kind:"sketch",uid:I.uid}}return{kind:"empty"}}function ke(R){const O=[],D=[];for(const N of n)N.uid!==R&&(O.push(N.x,N.x+N.w),D.push(N.z,N.z+N.d));return{xs:O,zs:D}}function Xe(R,O,D=.28){let N=null,F=D;for(const I of O){const W=Math.abs(R-I);W<F&&(F=W,N=I)}return N}const Fe=(R,O)=>{const D=Xe(R,ke(O).xs);return D??en(R,d)},V=(R,O)=>{const D=Xe(R,ke(O).zs);return D??en(R,d)},pt=R=>{const[O,D]=ge(R);if(b.current.set(R.pointerId,{x:O,y:D}),_.current.setPointerCapture(R.pointerId),b.current.size===2){const W=[...b.current.values()],X=(W[0].x+W[1].x)/2,ie=(W[0].y+W[1].y)/2,de=Math.hypot(W[0].x-W[1].x,W[0].y-W[1].y),me=x.current;z.current={startDist:de,startScale:me.scale,wmx:(X-me.panX)/me.scale,wmy:(ie-me.panY)/me.scale},w(null);return}if(b.current.size>2)return;const[N,F]=ae(O,D);if(l==="room"){const W=Fe(N),X=V(F);w({kind:"drawRoom",x0:W,z0:X,cur:{x:W,z:X,w:0,d:0}});return}if(l==="wall"){const W=Fe(N),X=V(F);w({kind:"drawWall",x1:W,z1:X,cur:{x1:W,z1:X,x2:W,z2:X}});return}if(l==="sketch"){w({kind:"sketch",sx:O,sy:D,panX:x.current.panX,panY:x.current.panY,moved:!1});return}const I=Re(O,D);switch(I.kind){case"item-handle":w({kind:"resizeItem",uid:pe.uid,cxw:pe.x,czw:pe.z,rot:pe.rot||0,c:hi[pe.type]});break;case"room-handle":w({kind:"resizeRoom",uid:ee.uid,handle:I.handle,x0:ee.x,z0:ee.z,w0:ee.w,d0:ee.d});break;case"wall-end":w({kind:"wallEnd",uid:ne.uid,end:I.end});break;case"item":{const W=r.find(X=>X.uid===I.uid);e({type:"select",sel:{type:"item",uid:I.uid}}),w({kind:"moveItem",uid:I.uid,ox:N-W.x,oz:F-W.z});break}case"wall":{const W=i.find(X=>X.uid===I.uid);e({type:"select",sel:{type:"wall",uid:I.uid}}),w({kind:"moveWall",uid:I.uid,ox:N,oz:F,x1:W.x1,z1:W.z1,x2:W.x2,z2:W.z2});break}case"sketch":{const W=s.find(X=>X.uid===I.uid);e({type:"select",sel:{type:"sketch",uid:I.uid}}),w({kind:"moveSketch",uid:I.uid,ox:N,oz:F,pts:W.pts});break}case"roomwall":e({type:"select",sel:{type:"roomwall",uid:I.uid,side:I.side}}),w(null);break;case"room":{const W=n.find(X=>X.uid===I.uid);e({type:"select",sel:{type:"room",uid:I.uid}}),w({kind:"moveRoom",uid:I.uid,ox:N-W.x,oz:F-W.z});break}default:w({kind:"pan",sx:O,sy:D,panX:x.current.panX,panY:x.current.panY,moved:!1})}},Be=R=>{const[O,D]=ge(R);if(b.current.has(R.pointerId)&&b.current.set(R.pointerId,{x:O,y:D}),z.current&&b.current.size>=2){const W=[...b.current.values()],X=(W[0].x+W[1].x)/2,ie=(W[0].y+W[1].y)/2,de=Math.hypot(W[0].x-W[1].x,W[0].y-W[1].y),me=z.current,he=jr(me.startScale*(de/me.startDist),12,220);S({scale:he,panX:X-me.wmx*he,panY:ie-me.wmy*he,init:!0});return}if(l==="sketch"&&b.current.size<=1){const[W,X]=ae(O,D);y({x:Fe(W),z:V(X)})}const N=E.current;if(!N)return;const[F,I]=ae(O,D);if(N.kind==="pan")!N.moved&&Math.hypot(O-N.sx,D-N.sy)>4&&(N.moved=!0),S(W=>({...W,panX:N.panX+(O-N.sx),panY:N.panY+(D-N.sy)}));else if(N.kind==="sketch")!N.moved&&Math.hypot(O-N.sx,D-N.sy)>7&&(N.moved=!0),N.moved&&S(W=>({...W,panX:N.panX+(O-N.sx),panY:N.panY+(D-N.sy)}));else if(N.kind==="drawRoom"){const W=Fe(F),X=V(I);w(ie=>({...ie,cur:{x:Math.min(ie.x0,W),z:Math.min(ie.z0,X),w:Math.abs(W-ie.x0),d:Math.abs(X-ie.z0)}}))}else if(N.kind==="drawWall")w(W=>({...W,cur:{x1:W.x1,z1:W.z1,x2:Fe(F),z2:V(I)}}));else if(N.kind==="moveItem")e({type:"update",sel:{type:"item",uid:N.uid},patch:{x:en(F-N.ox,Km),z:en(I-N.oz,Km)},mergeKey:`mv:${N.uid}`});else if(N.kind==="resizeItem"){const W=F-N.cxw,X=I-N.czw,ie=N.rot*Math.PI/180,de=W*Math.cos(ie)+X*Math.sin(ie),me=-W*Math.sin(ie)+X*Math.cos(ie),he=jr(2*Math.max(.1,Math.abs(de))/N.c.w,.3,3),Ne=jr(2*Math.max(.1,Math.abs(me))/N.c.d,.3,3),Me=jr(Math.sqrt(he*Ne),.3,3);e({type:"update",sel:{type:"item",uid:N.uid},patch:{scale:{x:he,y:Me,z:Ne}},mergeKey:`sz:${N.uid}`})}else if(N.kind==="moveRoom"){const W=n.find(de=>de.uid===N.uid);let X=F-N.ox,ie=I-N.oz;if(W){const{xs:de,zs:me}=ke(N.uid),he=Xe(X,de),Ne=Xe(X+W.w,de);he!=null&&(Ne==null||Math.abs(X-he)<=Math.abs(X+W.w-Ne))?X=he:Ne!=null?X=Ne-W.w:X=en(X,d);const Me=Xe(ie,me),_e=Xe(ie+W.d,me);Me!=null&&(_e==null||Math.abs(ie-Me)<=Math.abs(ie+W.d-_e))?ie=Me:_e!=null?ie=_e-W.d:ie=en(ie,d)}e({type:"update",sel:{type:"room",uid:N.uid},patch:{x:X,z:ie},mergeKey:`mv:${N.uid}`})}else if(N.kind==="resizeRoom"){let W=N.x0,X=N.z0,ie=N.x0+N.w0,de=N.z0+N.d0;const{xs:me,zs:he}=ke(N.uid),Ne=_e=>{const G=Xe(_e,me);return G??en(_e,d)},Me=_e=>{const G=Xe(_e,he);return G??en(_e,d)};N.handle.includes("e")&&(ie=Math.max(W+.5,Ne(F))),N.handle.includes("w")&&(W=Math.min(ie-.5,Ne(F))),N.handle.includes("s")&&(de=Math.max(X+.5,Me(I))),N.handle.includes("n")&&(X=Math.min(de-.5,Me(I))),e({type:"update",sel:{type:"room",uid:N.uid},patch:{x:W,z:X,w:ie-W,d:de-X},mergeKey:`rs:${N.uid}`})}else if(N.kind==="moveWall"){const W=en(F-N.ox,d),X=en(I-N.oz,d);e({type:"update",sel:{type:"wall",uid:N.uid},patch:{x1:N.x1+W,z1:N.z1+X,x2:N.x2+W,z2:N.z2+X},mergeKey:`mv:${N.uid}`})}else if(N.kind==="wallEnd"){const W=N.end==="1"?{x1:en(F,d),z1:en(I,d)}:{x2:en(F,d),z2:en(I,d)};e({type:"update",sel:{type:"wall",uid:N.uid},patch:W,mergeKey:`we:${N.uid}`})}else if(N.kind==="moveSketch"){const W=en(F-N.ox,d),X=en(I-N.oz,d);e({type:"update",sel:{type:"sketch",uid:N.uid},patch:{pts:N.pts.map(ie=>({x:ie.x+W,z:ie.z+X}))},mergeKey:`mv:${N.uid}`})}},Ge=R=>{const[O,D]=ge(R);b.current.delete(R.pointerId),b.current.size<2&&(z.current=null);const N=E.current;if(N)if(N.kind==="sketch"){if(!N.moved){const[F,I]=ae(O,D),W={x:Fe(F),z:V(I)};let X=!1;if(f.length>=3){const[ie,de]=$(f[0].x,f[0].z);Math.hypot(O-ie,D-de)<ES&&(X=!0)}X?(e({type:"addSketch",pts:f,closed:!0}),h([]),y(null),na(12)):(h(ie=>[...ie,W]),na(6))}}else N.kind==="drawRoom"?N.cur.w>.3&&N.cur.d>.3?e({type:"addRoom",x:N.cur.x,z:N.cur.z,w:N.cur.w,d:N.cur.d,height:c}):e({type:"addRoom",x:Fe(N.x0-1.8),z:V(N.z0-1.5),w:3.6,d:3,height:c}):N.kind==="drawWall"&&Math.hypot(N.cur.x2-N.cur.x1,N.cur.z2-N.cur.z1)>.2?e({type:"addWall",...N.cur,height:c}):N.kind==="pan"&&!N.moved&&e({type:"select",sel:null});b.current.size===0&&w(null);try{_.current.releasePointerCapture(R.pointerId)}catch{}},Le=R=>{(R&&f.length>=3||!R&&f.length>=2)&&(e({type:"addSketch",pts:f,closed:R}),na(12)),h([]),y(null)};function Ke(R,O,D,N){const F=[],I=O?R.length:R.length-1;for(let W=0;W<I;W++){const X=R[W],ie=R[(W+1)%R.length],de=Math.hypot(ie.x-X.x,ie.z-X.z);if(de<.001)continue;const[me,he]=$(X.x,X.z),[Ne,Me]=$(ie.x,ie.z);let _e=(me+Ne)/2,G=(he+Me)/2;const ve=-(Me-he),oe=Ne-me,le=Math.hypot(ve,oe)||1;_e+=ve/le*11,G+=oe/le*11,F.push(g.jsx("text",{x:_e,y:G+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:D,stroke:"#fff",strokeWidth:3.2,paintOrder:"stroke",strokeLinejoin:"round",fontFamily:"-apple-system, system-ui, sans-serif",children:qe(de,a)},`${N}-l${W}`))}return F}const ue=R=>{const[O,D]=ge(R),N=x.current,F=jr(N.scale*(R.deltaY<0?1.1:.9),12,220),I=(O-N.panX)/N.scale,W=(D-N.panY)/N.scale;S({scale:F,panX:O-I*F,panY:D-W*F,init:!0})},P=[],A=[];{const R=a==="ft"?.3048:1,O=K*R;let D=1;O<6&&(D=5),O*D<6&&(D=25);const N=D*5,[F]=ae(0,0),[I]=ae(B,0),[,W]=ae(0,0),[,X]=ae(0,H),ie=F/R,de=I/R,me=W/R,he=X/R,Ne=a==="ft"?"′":"m";if((de-ie)/D<500){for(let Me=Math.ceil(ie/D)*D;Me<=de;Me+=D){const _e=Math.round(Me),[G]=$(_e*R,0),ve=_e===0,oe=_e%N===0;P.push(g.jsx("line",{x1:G,y1:0,x2:G,y2:H,stroke:"#000",strokeOpacity:ve?.22:oe?.11:.045,strokeWidth:1},`v${_e}`)),oe&&!ve&&A.push(g.jsxs("text",{x:G+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[_e,Ne]},`vl${_e}`))}for(let Me=Math.ceil(me/D)*D;Me<=he;Me+=D){const _e=Math.round(Me),[,G]=$(0,_e*R),ve=_e===0,oe=_e%N===0;P.push(g.jsx("line",{x1:0,y1:G,x2:B,y2:G,stroke:"#000",strokeOpacity:ve?.22:oe?.11:.045,strokeWidth:1},`h${_e}`)),oe&&!ve&&A.push(g.jsxs("text",{x:3,y:G-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[_e,Ne]},`hl${_e}`))}}}const U=n.length===0&&i.length===0&&r.length===0&&s.length===0&&f.length===0;return g.jsxs("div",{className:"editor2d",ref:M,children:[g.jsxs("svg",{ref:_,onPointerDown:pt,onPointerMove:Be,onPointerUp:Ge,onPointerCancel:Ge,onWheel:ue,style:{touchAction:"none",cursor:l==="select"?"default":"crosshair"},children:[g.jsx("defs",{children:g.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:g.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),g.jsx("rect",{x:0,y:0,width:B,height:H,fill:"transparent"}),g.jsx("g",{pointerEvents:"none",children:P}),g.jsx("g",{pointerEvents:"none",children:A}),n.map(R=>{const[O,D]=$(R.x,R.z);return g.jsx("rect",{x:O,y:D,width:R.w*K,height:R.d*K,fill:MS,pointerEvents:"none"},R.uid)}),n.map(R=>g.jsx("g",{pointerEvents:"none",children:Zm.map(O=>{const[D,N,F,I]=Pu(R,O),[W,X]=$(D,N),[ie,de]=$(F,I),me=Qm(R,O),he=(o==null?void 0:o.type)==="roomwall"&&o.uid===R.uid&&o.side===O;return g.jsx("line",{x1:W,y1:X,x2:ie,y2:de,stroke:he?wt:me?qm:SS,strokeWidth:he?6:me?4:2,strokeLinecap:"round",strokeDasharray:me?void 0:"7 7"},O)})},R.uid)),ee&&(()=>{const[R,O]=$(ee.x,ee.z),D=ee.w*K;return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:R,y:O,width:D,height:ee.d*K,fill:"none",stroke:wt,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),g.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[g.jsx("rect",{x:R+D/2-78,y:O-25,width:156,height:19,rx:9.5,fill:wt}),g.jsxs("text",{x:R+D/2,y:O-11,textAnchor:"middle",children:[qe(ee.w,a)," × ",qe(ee.d,a)]})]}),Object.entries(Ae(ee)).map(([N,[F,I]])=>g.jsx("circle",{cx:F,cy:I,r:7,fill:wt,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},N))]})})(),i.map(R=>{const[O,D]=$(R.x1,R.z1),[N,F]=$(R.x2,R.z2),I=(ne==null?void 0:ne.uid)===R.uid;return g.jsx("line",{x1:O,y1:D,x2:N,y2:F,stroke:I?wt:qm,strokeWidth:Math.max(5,R.thickness*K),strokeLinecap:"round",pointerEvents:"none"},R.uid)}),ne&&(()=>{const[R,O]=$(ne.x1,ne.z1),[D,N]=$(ne.x2,ne.z2);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("circle",{cx:R,cy:O,r:7,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"}),g.jsx("circle",{cx:D,cy:N,r:7,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),s.map(R=>{const O=(xe==null?void 0:xe.uid)===R.uid,D=R.pts.map(F=>$(F.x,F.z).join(",")).join(" "),N=O?wt:wS;return g.jsxs("g",{pointerEvents:"none",children:[R.closed?g.jsx("polygon",{points:D,fill:N,fillOpacity:.07,stroke:N,strokeWidth:O?3:2.5,strokeLinejoin:"round"}):g.jsx("polyline",{points:D,fill:"none",stroke:N,strokeWidth:O?3:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),Ke(R.pts,R.closed,O?"#7a5a16":"#15545f",R.uid),O&&R.pts.map((F,I)=>{const[W,X]=$(F.x,F.z);return g.jsx("circle",{cx:W,cy:X,r:5,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"},I)})]},R.uid)}),l==="sketch"&&f.length>0&&(()=>{const R=m?[...f,m]:f,O=R.map(I=>$(I.x,I.z).join(",")).join(" "),[D,N]=$(f[0].x,f[0].z),F=f.length>=3;return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("polyline",{points:O,fill:"none",stroke:wt,strokeWidth:2.5,strokeDasharray:"7 5",strokeLinejoin:"round",strokeLinecap:"round"}),Ke(R,!1,"#7a5a16","draft"),f.map((I,W)=>{const[X,ie]=$(I.x,I.z);return g.jsx("circle",{cx:X,cy:ie,r:W===0?6:4.5,fill:W===0?wt:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"},W)}),F&&g.jsx("circle",{cx:D,cy:N,r:11,fill:"none",stroke:wt,strokeWidth:2,strokeDasharray:"3 3"})]})})(),r.map(R=>{const O=hi[R.type];if(!O)return null;const[D,N]=$(R.x,R.z),F=hr(O,R),I=F.w*K,W=F.d*K,X=(pe==null?void 0:pe.uid)===R.uid;return g.jsxs("g",{transform:`translate(${D} ${N}) rotate(${R.rot||0})`,pointerEvents:"none",children:[g.jsx("g",{filter:"url(#softshadow)",opacity:O.shape==="rug"||O.shape==="round-rug"?.96:1,children:g.jsx(Ax,{item:{...O,color:R.color||O.color},wpx:I,dpx:W})}),X&&g.jsx("rect",{x:-I/2-5,y:-W/2-5,width:I+10,height:W+10,rx:7,fill:"none",stroke:wt,strokeWidth:2,strokeDasharray:"6 5"})]},R.uid)}),(C==null?void 0:C.kind)==="drawRoom"&&(()=>{const[R,O]=$(C.cur.x,C.cur.z);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:R,y:O,width:C.cur.w*K,height:C.cur.d*K,fill:wt,fillOpacity:.12,stroke:wt,strokeWidth:3,strokeDasharray:"6 5"}),g.jsxs("text",{x:R+C.cur.w*K/2,y:O-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[qe(C.cur.w,a)," × ",qe(C.cur.d,a)]})]})})(),(C==null?void 0:C.kind)==="drawWall"&&(()=>{const[R,O]=$(C.cur.x1,C.cur.z1),[D,N]=$(C.cur.x2,C.cur.z2),F=Math.hypot(C.cur.x2-C.cur.x1,C.cur.z2-C.cur.z1);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("line",{x1:R,y1:O,x2:D,y2:N,stroke:wt,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),g.jsx("text",{x:(R+D)/2,y:(O+N)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:qe(F,a)})]})})(),pe&&(()=>{const R=ce(pe),O=hi[pe.type],D=hr(O,pe),[N,F]=$(pe.x,pe.z),I=Math.hypot(D.w*K,D.d*K)/2;return g.jsxs("g",{pointerEvents:"none",children:[R.map(([W,X],ie)=>g.jsx("circle",{cx:W,cy:X,r:7,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"},ie)),g.jsx("rect",{x:N-78,y:F-I-30,width:156,height:20,rx:10,fill:wt}),g.jsxs("text",{x:N,y:F-I-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[qe(D.w,a)," × ",qe(D.d,a)]})]})})(),(o==null?void 0:o.type)==="roomwall"&&(()=>{const R=n.find(he=>he.uid===o.uid);if(!R)return null;const[O,D,N,F]=Pu(R,o.side),[I,W]=$(O,D),[X,ie]=$(N,F),de=Math.hypot(N-O,F-D),me=Qm(R,o.side);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("circle",{cx:I,cy:W,r:6,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"}),g.jsx("circle",{cx:X,cy:ie,r:6,fill:"#fff",stroke:wt,strokeWidth:2.5,filter:"url(#softshadow)"}),g.jsx("rect",{x:(I+X)/2-60,y:(W+ie)/2-11,width:120,height:20,rx:10,fill:wt}),g.jsx("text",{x:(I+X)/2,y:(W+ie)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:me?qe(de,a):"opening"})]})})()]}),g.jsx("button",{className:"recenter",onClick:q,"aria-label":"Fit to view",children:g.jsx($f,{size:20})}),l==="sketch"&&f.length>0&&g.jsxs("div",{className:"sketch-bar",children:[g.jsx("button",{onClick:()=>h(R=>R.slice(0,-1)),title:"Undo last point",children:g.jsx(bx,{size:17})}),g.jsxs("button",{onClick:()=>Le(!1),disabled:f.length<2,title:"Finish open line",children:[g.jsx(Ym,{size:18})," Finish"]}),g.jsxs("button",{className:"accent",onClick:()=>Le(!0),disabled:f.length<3,title:"Close shape",children:[g.jsx(Ym,{size:18})," Close shape"]}),g.jsx("button",{onClick:()=>{h([]),y(null)},title:"Cancel",children:g.jsx(fS,{size:17})})]}),U&&g.jsxs("div",{className:"empty",children:[g.jsx("b",{children:"Start your floor plan"}),g.jsxs("span",{children:["Pick ",g.jsx("strong",{children:"Room"})," and drag, or use ",g.jsx("strong",{children:"Sketch"})," to free-draw any space with live measurements — or just tap to drop a room."]}),g.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:Fe(-1.8),z:V(-1.5),w:3.6,d:3,height:c}),children:"+ Add a room"})]}),g.jsx("div",{className:"hint",children:l==="room"?"Drag to draw a room":l==="wall"?"Drag to draw a wall":l==="sketch"?"Tap to drop points — each edge is measured · tap the first point to close · drag to pan":pe?"Drag to move · drag white corners to resize":ee?"Drag inside to move · corners to resize · tap a wall to edit it":ne?"Drag the wall or its endpoints":xe?"Drag to move this sketch · edit dimensions in the panel":(o==null?void 0:o.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}const bS={n:"North",e:"East",s:"South",w:"West"};function ep(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function Rx(t,e){const n=[];return t.forEach((i,r)=>{for(const s of["n","e","s","w"])n.push({ref:{kind:"room",uid:i.uid,side:s},label:`Room ${r+1} · ${bS[s]}`})}),e.forEach((i,r)=>n.push({ref:{kind:"wall",uid:i.uid},label:`Wall ${r+1}`})),n}function ia(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const xn="#d9b779",Et=.05,Du=18,Tt=(t,e)=>Math.round(t/e)*e,Qr=(t,e,n)=>Math.max(e,Math.min(n,t)),CS=(t,e,n,i,r,s)=>{const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Qr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))},Wo={color:"#c79a6b",tex:"wood:oak"},Jm={color:"#7a543a",tex:"wood:walnut"},RS={color:"#d7d2c8",tex:"stone:white"},PS=[{id:"bunk",name:"Bunk bed"},{id:"base",name:"Base cabinets"},{id:"upper",name:"Upper cabinets"},{id:"cubby",name:"Cubby wall"},{id:"shelves",name:"Open shelves"},{id:"wardrobe",name:"Wardrobe"}];function LS(t,e,n){const i=e.length,r=e.height,s=[],o=(a,l,c,d,f,h="panel",m=Wo)=>s.push({wall:n,u:Math.max(0,a),v:Math.max(0,l),w:c,h:d,depth:f,kind:h,color:m.color,tex:m.tex});if(t==="bunk"){const a=Math.min(i,2.03),l=1;o(0,0,.1,1.85,l),o(a-.1,0,.1,1.85,l),o(0,.35,a,.12,l),o(0,1.45,a,.12,l),o(0,1.6,a,.32,.05)}else if(t==="base"){const l=Math.max(1,Math.floor(i/.6)),c=l*.6;for(let d=0;d<l;d++)o(d*.6,0,.6-.01,.9,.6);o(0,.9,c,.04,.64,"panel",RS)}else if(t==="upper"){const l=Math.max(1,Math.floor(i/.6));for(let c=0;c<l;c++)o(c*.6,1.45,.6-.01,.7,.32)}else if(t==="cubby"||t==="shelves"){const a=t==="shelves"?1:Qr(Math.round(i/.5),2,6),l=Qr(Math.round(r*.85/.45),2,6),c=i/a,d=Math.min(.5,r*.85/l);for(let f=0;f<l;f++)for(let h=0;h<a;h++)o(h*c,f*d,c,d,.4,"cubby")}else if(t==="wardrobe"){const a=Math.min(i,1.2),l=Math.min(r,2);o(0,0,a/2-.005,l,.6,"panel",Jm),o(a/2,0,a/2,l,.6,"panel",Jm)}return s}function DS(){const{state:t,dispatch:e}=Ji(),{rooms:n,walls:i,builtins:r,selected:s,units:o,sideTool:a}=t,l=a,c=Ce.useRef(null),d=Ce.useRef(null),[f,h]=Ce.useState({W:360,H:540}),[m,y]=Ce.useState({scale:64,panX:60,panY:460,init:!1}),[M,_]=Ce.useState(0),[u,v]=Ce.useState(null),p=Ce.useRef(null);p.current=u;const S=Ce.useRef(new Map),C=Ce.useRef(null),w=Ce.useRef(m);w.current=m;const E=Rx(n,i),b=Math.min(M,Math.max(0,E.length-1)),z=E[b],x=z?ep(z.ref,n,i):null,T=Ce.useRef(!1);Ce.useEffect(()=>{if(T.current||!E.length)return;T.current=!0;let U=t.sideWall;if(!U&&s&&(s.type==="wall"||s.type==="roomwall")&&(U=s.type==="wall"?{kind:"wall",uid:s.uid}:{kind:"room",uid:s.uid,side:s.side}),U){const R=E.findIndex(O=>ia(O.ref,U));R>=0&&_(R)}},[]);const B=z?`${z.ref.kind}:${z.ref.uid}:${z.ref.side||""}`:"";Ce.useEffect(()=>{z&&e({type:"sideWall",ref:z.ref})},[B]),Ce.useLayoutEffect(()=>{const U=c.current;if(!U)return;const R=new ResizeObserver(()=>h({W:U.clientWidth,H:U.clientHeight}));return R.observe(U),h({W:U.clientWidth,H:U.clientHeight}),()=>R.disconnect()},[]);const{W:H,H:q}=f,{scale:Q,panX:j,panY:K}=m,k=(U,R)=>[U*Q+j,K-R*Q],te=(U,R)=>[(U-j)/Q,(K-R)/Q],$=U=>{const R=d.current.getBoundingClientRect();return[U.clientX-R.left,U.clientY-R.top]};function ae(){if(!x||!H){y(F=>({...F,init:!0}));return}const U=56,R=116,O=60,D=Qr(Math.min((H-2*U)/Math.max(.5,x.length),(q-R-O)/Math.max(.5,x.height)),14,200),N=(R+(q-O))/2;y({scale:D,panX:H/2-x.length/2*D,panY:N+x.height/2*D,init:!0})}const ge=x?`${z.label}`:"none";Ce.useLayoutEffect(()=>{p.current||ae()},[ge,H,q]);const pe=x?r.filter(U=>ia(U.wall,z.ref)):[],ee=(s==null?void 0:s.type)==="builtin"?r.find(U=>U.uid===s.uid):null,ne=ee&&x&&ia(ee.wall,z.ref)?ee:null,xe=U=>[k(U.u,U.v),k(U.u+U.w,U.v),k(U.u+U.w,U.v+U.h),k(U.u,U.v+U.h)];function ce(U,R){const[O,D]=te(U,R);if(ne)if(ne.kind==="board")for(const N of["1","2"]){const[F,I]=k(ne["u"+N],ne["v"+N]);if(Math.hypot(U-F,R-I)<Du)return{kind:"b-end",end:N}}else{const N=xe(ne),F=[2,3,0,1];for(let I=0;I<4;I++)if(Math.hypot(U-N[I][0],R-N[I][1])<Du){const W=xe(ne)[F[I]];return{kind:"b-handle",fixedU:(W[0]-j)/Q,fixedV:(K-W[1])/Q}}}if(x&&!ne){const N=[["len",x.length,x.height/2],["ht",x.length/2,x.height],["both",x.length,x.height]];for(const[F,I,W]of N){const[X,ie]=k(I,W);if(Math.hypot(U-X,R-ie)<Du)return{kind:"wall-handle",which:F}}}for(let N=pe.length-1;N>=0;N--){const F=pe[N];if(F.kind==="board"){if(CS(O,D,F.u1,F.v1,F.u2,F.v2)<=F.thickness/2+.1)return{kind:"builtin",uid:F.uid}}else if(O>=F.u&&O<=F.u+F.w&&D>=F.v&&D<=F.v+F.h)return{kind:"builtin",uid:F.uid}}return{kind:"empty"}}const Ae=U=>{const[R,O]=$(U);if(S.current.set(U.pointerId,{x:R,y:O}),d.current.setPointerCapture(U.pointerId),S.current.size===2){const I=[...S.current.values()],W=(I[0].x+I[1].x)/2,X=(I[0].y+I[1].y)/2,ie=Math.hypot(I[0].x-I[1].x,I[0].y-I[1].y),de=w.current;C.current={startDist:ie,startScale:de.scale,wmx:(W-de.panX)/de.scale,wmy:(de.panY-X)/de.scale},v(null);return}if(S.current.size>2||!x)return;const[D,N]=te(R,O),F=ce(R,O);if(F.kind==="b-handle")v({kind:"resizeB",uid:ne.uid,fixedU:F.fixedU,fixedV:F.fixedV});else if(F.kind==="b-end")v({kind:"endB",uid:ne.uid,end:F.end});else if(F.kind==="wall-handle")v({kind:"resizeWall",which:F.which});else if(F.kind==="builtin"){const I=pe.find(W=>W.uid===F.uid);e({type:"select",sel:{type:"builtin",uid:F.uid}}),I.kind==="board"?v({kind:"moveBoard",uid:F.uid,pu:D,pv:N,u1:I.u1,v1:I.v1,u2:I.u2,v2:I.v2}):v({kind:"moveB",uid:F.uid,ou:D-I.u,ov:N-I.v})}else if(l==="box")v({kind:"drawBox",u0:Tt(D,Et),v0:Tt(N,Et),cur:{u:Tt(D,Et),v:Tt(N,Et),w:0,h:0}});else if(l==="board"){const I=Tt(D,Et),W=Tt(N,Et);v({kind:"drawLine",u1:I,v1:W,cur:{u1:I,v1:W,u2:I,v2:W}})}else v({kind:"pan",sx:R,sy:O,panX:w.current.panX,panY:w.current.panY,moved:!1})},Re=U=>{const[R,O]=$(U);if(S.current.has(U.pointerId)&&S.current.set(U.pointerId,{x:R,y:O}),C.current&&S.current.size>=2){const I=[...S.current.values()],W=(I[0].x+I[1].x)/2,X=(I[0].y+I[1].y)/2,ie=Math.hypot(I[0].x-I[1].x,I[0].y-I[1].y),de=C.current,me=Qr(de.startScale*(ie/de.startDist),12,240);y({scale:me,panX:W-de.wmx*me,panY:X+de.wmy*me,init:!0});return}const D=p.current;if(!D)return;const[N,F]=te(R,O);if(D.kind==="pan")!D.moved&&Math.hypot(R-D.sx,O-D.sy)>4&&(D.moved=!0),y(I=>({...I,panX:D.panX+(R-D.sx),panY:D.panY+(O-D.sy)}));else if(D.kind==="drawBox"){const I=Tt(N,Et),W=Tt(F,Et);v(X=>({...X,cur:{u:Math.min(X.u0,I),v:Math.min(X.v0,W),w:Math.abs(I-X.u0),h:Math.abs(W-X.v0)}}))}else if(D.kind==="drawLine"){let I=Tt(N,Et),W=Tt(F,Et);Math.abs(I-D.u1)<.08&&(I=D.u1),Math.abs(W-D.v1)<.08&&(W=D.v1),v(X=>({...X,cur:{u1:X.u1,v1:X.v1,u2:I,v2:W}}))}else if(D.kind==="moveB")e({type:"update",sel:{type:"builtin",uid:D.uid},patch:{u:Tt(N-D.ou,Et),v:Tt(F-D.ov,Et)},mergeKey:`mb:${D.uid}`});else if(D.kind==="moveBoard"){const I=Tt(N-D.pu,Et),W=Tt(F-D.pv,Et);e({type:"update",sel:{type:"builtin",uid:D.uid},patch:{u1:D.u1+I,v1:D.v1+W,u2:D.u2+I,v2:D.v2+W},mergeKey:`mb:${D.uid}`})}else if(D.kind==="endB"){const I=D.end==="1"?{u1:Tt(N,Et),v1:Tt(F,Et)}:{u2:Tt(N,Et),v2:Tt(F,Et)};e({type:"update",sel:{type:"builtin",uid:D.uid},patch:I,mergeKey:`eb:${D.uid}`})}else if(D.kind==="resizeB"){const I=Tt(N,Et),W=Tt(F,Et);e({type:"update",sel:{type:"builtin",uid:D.uid},patch:{u:Math.min(D.fixedU,I),v:Math.min(D.fixedV,W),w:Math.max(.1,Math.abs(I-D.fixedU)),h:Math.max(.1,Math.abs(W-D.fixedV))},mergeKey:`rb:${D.uid}`})}else if(D.kind==="resizeWall"){let I=x.length,W=x.height;(D.which==="len"||D.which==="both")&&(I=Math.max(.5,Tt(N,Et))),(D.which==="ht"||D.which==="both")&&(W=Qr(Tt(F,Et),1.5,6));const X=z.ref;if(X.kind==="room"){const ie={height:W};X.side==="n"||X.side==="s"?ie.w=I:ie.d=I,e({type:"update",sel:{type:"room",uid:X.uid},patch:ie,mergeKey:`ws:${X.uid}`})}else e({type:"update",sel:{type:"wall",uid:X.uid},patch:{height:W,x2:x.ox+x.dirx*I,z2:x.oz+x.dirz*I},mergeKey:`ws:${X.uid}`})}},ke=U=>{S.current.delete(U.pointerId),S.current.size<2&&(C.current=null);const R=p.current;R&&x&&(R.kind==="drawBox"&&R.cur.w>.1&&R.cur.h>.1?e({type:"addBuiltin",builtin:{wall:z.ref,u:R.cur.u,v:R.cur.v,w:R.cur.w,h:R.cur.h,depth:.5,kind:"cubby",color:Wo.color,tex:Wo.tex}}):R.kind==="drawLine"&&Math.hypot(R.cur.u2-R.cur.u1,R.cur.v2-R.cur.v1)>.05?e({type:"addBuiltin",builtin:{wall:z.ref,kind:"board",u1:R.cur.u1,v1:R.cur.v1,u2:R.cur.u2,v2:R.cur.v2,thickness:.05,depth:.04,color:Wo.color,tex:Wo.tex}}):R.kind==="pan"&&!R.moved&&e({type:"select",sel:null})),R&&R.kind==="resizeWall"&&ae(),S.current.size===0&&v(null);try{d.current.releasePointerCapture(U.pointerId)}catch{}},Xe=U=>{const[R,O]=$(U),D=w.current,N=Qr(D.scale*(U.deltaY<0?1.1:.9),12,240);y({scale:N,panX:R-(R-D.panX)/D.scale*N,panY:O+(D.panY-O)/D.scale*N,init:!0})},Fe=[],V=[],pt=[];let Be=0,Ge=0,Le=0;if(x){for(let O=0;O<=x.length+1e-6;O+=.5){const[D]=k(O,0);Fe.push(g.jsx("line",{x1:D,y1:k(0,0)[1],x2:D,y2:k(0,x.height)[1],stroke:"#000",strokeOpacity:Math.abs(O%1)<1e-6?.1:.045,strokeWidth:1},`gu${O.toFixed(2)}`))}for(let O=0;O<=x.height+1e-6;O+=.5){const[,D]=k(0,O);Fe.push(g.jsx("line",{x1:k(0,0)[0],y1:D,x2:k(x.length,0)[0],y2:D,stroke:"#000",strokeOpacity:Math.abs(O%1)<1e-6?.1:.045,strokeWidth:1},`gv${O.toFixed(2)}`))}Be=k(0,0)[1],Ge=k(0,x.height)[1],Le=k(0,0)[0];const U=o==="m"?.5:.3048;let R=0;for(let O=0;O<=x.height+1e-6;O+=U,R++){const D=k(0,O)[1],N=R%2===0;V.push(g.jsx("line",{x1:Le-7,y1:D,x2:Le,y2:D,stroke:"#9aa1ab",strokeWidth:N?1.6:1},`t${R}`)),N&&O>.05&&V.push(g.jsx("text",{x:Le-10,y:D+3,textAnchor:"end",fontSize:9.5,fill:"#8a92a0",fontFamily:"-apple-system, system-ui, sans-serif",children:qe(O,o)},`rl${R}`))}for(let O=Le%16;O<H;O+=16)pt.push(g.jsx("line",{x1:O,y1:Be,x2:O-10,y2:Be+12,stroke:"#39414f",strokeOpacity:.22,strokeWidth:1},`hx${O}`))}if(!E.length)return g.jsx("div",{className:"editor2d elevation",ref:c,children:g.jsxs("div",{className:"empty",children:[g.jsx("b",{children:"No walls yet"}),g.jsxs("span",{children:["Go to ",g.jsx("strong",{children:"Plan"})," and draw a room or wall, then come back to design built-ins against it."]})]})});const[Ke,ue]=x?k(0,x.height):[0,0],P=x?x.length*Q:0,A=x?x.height*Q:0;return g.jsxs("div",{className:"editor2d elevation",ref:c,children:[g.jsxs("svg",{ref:d,onPointerDown:Ae,onPointerMove:Re,onPointerUp:ke,onPointerCancel:ke,onWheel:Xe,style:{touchAction:"none",cursor:l==="select"?"default":"crosshair"},children:[g.jsxs("defs",{children:[g.jsx("filter",{id:"esh",x:"-30%",y:"-30%",width:"160%",height:"160%",children:g.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})}),g.jsxs("linearGradient",{id:"wallgrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0",stopColor:"#f6f7f9"}),g.jsx("stop",{offset:"1",stopColor:"#e2e6ec"})]})]}),g.jsx("rect",{x:0,y:0,width:H,height:q,fill:"transparent"}),x&&g.jsxs(g.Fragment,{children:[g.jsx("rect",{x:Ke,y:ue,width:P,height:A,fill:"url(#wallgrad)",stroke:"#39414f",strokeWidth:2.5,pointerEvents:"none"}),g.jsx("line",{x1:Ke,y1:Ge,x2:Ke+P,y2:Ge,stroke:"#39414f",strokeOpacity:.5,strokeWidth:2,strokeDasharray:"7 6",pointerEvents:"none"}),g.jsx("g",{pointerEvents:"none",children:Fe}),g.jsx("g",{pointerEvents:"none",children:V}),g.jsx("line",{x1:0,y1:Be,x2:H,y2:Be,stroke:"#39414f",strokeWidth:3.5,pointerEvents:"none"}),g.jsx("g",{pointerEvents:"none",children:pt}),g.jsx("text",{x:Ke+7,y:Be-7,fontSize:10,fontWeight:700,letterSpacing:"1.5",fill:"#39414f",opacity:.45,pointerEvents:"none",children:"FLOOR"}),pe.map(U=>{const R=(ne==null?void 0:ne.uid)===U.uid;if(U.kind==="board"){const[F,I]=k(U.u1,U.v1),[W,X]=k(U.u2,U.v2);return g.jsx("line",{x1:F,y1:I,x2:W,y2:X,stroke:R?xn:U.color,strokeWidth:Math.max(4,U.thickness*Q),strokeLinecap:"round",pointerEvents:"none"},U.uid)}const[O,D]=k(U.u,U.v+U.h),N=U.kind==="cubby";return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:O,y:D,width:U.w*Q,height:U.h*Q,fill:N?"#f6f3ec":U.color,stroke:R?xn:U.color,strokeWidth:N?Math.max(4,.05*Q):2,filter:"url(#esh)"}),R&&g.jsx("rect",{x:O-4,y:D-4,width:U.w*Q+8,height:U.h*Q+8,rx:6,fill:"none",stroke:xn,strokeWidth:2,strokeDasharray:"6 5"})]},U.uid)}),(u==null?void 0:u.kind)==="drawBox"&&(()=>{const[U,R]=k(u.cur.u,u.cur.v+u.cur.h);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:U,y:R,width:u.cur.w*Q,height:u.cur.h*Q,fill:xn,fillOpacity:.12,stroke:xn,strokeWidth:3,strokeDasharray:"6 5"}),g.jsxs("text",{x:U+u.cur.w*Q/2,y:R-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[qe(u.cur.w,o)," × ",qe(u.cur.h,o)]})]})})(),(u==null?void 0:u.kind)==="drawLine"&&(()=>{const[U,R]=k(u.cur.u1,u.cur.v1),[O,D]=k(u.cur.u2,u.cur.v2),N=Math.hypot(u.cur.u2-u.cur.u1,u.cur.v2-u.cur.v1);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("line",{x1:U,y1:R,x2:O,y2:D,stroke:xn,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),g.jsx("text",{x:(U+O)/2,y:(R+D)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:qe(N,o)})]})})(),ne&&ne.kind==="board"&&(()=>{const[U,R]=k(ne.u1,ne.v1),[O,D]=k(ne.u2,ne.v2);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("circle",{cx:U,cy:R,r:7,fill:"#fff",stroke:xn,strokeWidth:2.5,filter:"url(#esh)"}),g.jsx("circle",{cx:O,cy:D,r:7,fill:"#fff",stroke:xn,strokeWidth:2.5,filter:"url(#esh)"})]})})(),ne&&ne.kind!=="board"&&(()=>{const U=xe(ne),[R,O]=k(ne.u+ne.w/2,ne.v+ne.h);return g.jsxs("g",{pointerEvents:"none",children:[U.map(([D,N],F)=>g.jsx("circle",{cx:D,cy:N,r:7,fill:"#fff",stroke:xn,strokeWidth:2.5,filter:"url(#esh)"},F)),g.jsx("rect",{x:R-78,y:O-28,width:156,height:20,rx:10,fill:xn}),g.jsxs("text",{x:R,y:O-14,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[qe(ne.w,o)," × ",qe(ne.h,o)]})]})})(),!ne&&(()=>{const U=k(x.length/2,x.height),R=k(x.length,x.height/2),O=k(x.length,x.height),[D,N]=k(0,x.height);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:D+8,y:N+8,width:148,height:20,rx:10,fill:xn}),g.jsxs("text",{x:D+82,y:N+22,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[qe(x.length,o)," W × ",qe(x.height,o)," H"]}),g.jsx("circle",{cx:U[0],cy:U[1],r:7.5,fill:xn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),g.jsx("circle",{cx:R[0],cy:R[1],r:7.5,fill:xn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"}),g.jsx("circle",{cx:O[0],cy:O[1],r:8,fill:xn,stroke:"#20160a",strokeWidth:2,filter:"url(#esh)"})]})})()]})]}),g.jsxs("div",{className:"wall-picker",children:[g.jsx("button",{onClick:()=>_((b-1+E.length)%E.length),"aria-label":"Previous wall",children:"‹"}),g.jsx("span",{children:z==null?void 0:z.label}),g.jsx("button",{onClick:()=>_((b+1)%E.length),"aria-label":"Next wall",children:"›"})]}),g.jsx("button",{className:"recenter",onClick:ae,"aria-label":"Fit to view",children:g.jsx($f,{size:20})}),g.jsx("div",{className:"hint",children:ne?"Drag to move · drag handles to resize · edit for depth & finish":l==="box"?"Drag empty space to add a box · tap a piece to edit it":l==="board"?"Drag empty space to draw a board · tap a piece to edit it":"Tap a piece to edit · drag the gold dots to resize the room"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="169",to={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,$m=1,IS=2,Px=1,Lx=2,ki=3,Cr=0,hn=1,Un=2,qt=0,no=1,e0=2,t0=3,n0=4,Dx=5,fi=100,US=101,OS=102,kS=103,zS=104,jo=200,FS=201,BS=202,HS=203,ph=204,mh=205,gh=206,VS=207,vh=208,GS=209,WS=210,jS=211,XS=212,YS=213,qS=214,xh=0,_h=1,yh=2,fo=3,Sh=4,Mh=5,wh=6,Eh=7,Nx=0,KS=1,ZS=2,Tr=0,Ix=1,Ux=2,Ox=3,np=4,QS=5,kx=6,zx=7,Fx=300,po=301,mo=302,xc=303,Th=304,Vc=306,On=1e3,Wi=1001,Ah=1002,Gt=1003,JS=1004,Za=1005,Kt=1006,Nu=1007,gr=1008,bi=1009,Bx=1010,Hx=1011,Sa=1012,ip=1013,ss=1014,Kn=1015,En=1016,rp=1017,sp=1018,os=1020,Vx=35902,Gx=1021,Wx=1022,Zn=1023,jx=1024,Xx=1025,io=1026,as=1027,Yx=1028,op=1029,qx=1030,ap=1031,lp=1033,Fl=33776,Bl=33777,Hl=33778,Vl=33779,bh=35840,Ch=35841,Rh=35842,Ph=35843,Lh=36196,Dh=37492,Nh=37496,Ih=37808,Uh=37809,Oh=37810,kh=37811,zh=37812,Fh=37813,Bh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,jh=37819,Xh=37820,Yh=37821,Gl=36492,qh=36494,Kh=36495,Kx=36283,Zh=36284,Qh=36285,Jh=36286,$S=3200,eM=3201,cp=0,tM=1,fr="",un="srgb",$i="srgb-linear",up="display-p3",Gc="display-p3-linear",_c="linear",ht="srgb",yc="rec709",Sc="p3",_s=7680,i0=519,nM=512,iM=513,rM=514,Zx=515,sM=516,oM=517,aM=518,lM=519,r0=35044,s0="300 es",ji=2e3,Mc=2001;class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=Math.PI/180,$h=180/Math.PI;function Ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function cM(t,e){return(t%e+e)%e}function Iu(t,e,n){return(1-n)*t+n*e}function Ro(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const uM={DEG2RAD:Wl};class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],y=i[8],M=r[0],_=r[3],u=r[6],v=r[1],p=r[4],S=r[7],C=r[2],w=r[5],E=r[8];return s[0]=o*M+a*v+l*C,s[3]=o*_+a*p+l*w,s[6]=o*u+a*S+l*E,s[1]=c*M+d*v+f*C,s[4]=c*_+d*p+f*w,s[7]=c*u+d*S+f*E,s[2]=h*M+m*v+y*C,s[5]=h*_+m*p+y*w,s[8]=h*u+m*S+y*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,y=n*f+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=f*M,e[1]=(r*c-d*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new Qe;function Qx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ma(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dM(){const t=Ma("canvas");return t.style.display="block",t}const o0={};function jl(t){t in o0||(o0[t]=!0,console.warn(t))}function hM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function fM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const a0=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),l0=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[$i]:{transfer:_c,primaries:yc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[un]:{transfer:ht,primaries:yc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gc]:{transfer:_c,primaries:Sc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(l0),fromReference:t=>t.applyMatrix3(a0)},[up]:{transfer:ht,primaries:Sc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(l0),fromReference:t=>t.applyMatrix3(a0).convertLinearToSRGB()}},mM=new Set([$i,Gc]),it={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Po[e].toReference,r=Po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Po[t].primaries},getTransfer:function(t){return t===fr?_c:Po[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Po[e].luminanceCoefficients)}};function ro(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ou(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class gM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Ma("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ma("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ro(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ro(n[i]/255)*255):n[i]=ro(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class Jx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ku(r[o].image)):s.push(ku(r[o]))}else s=ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xM=0;class zt extends fs{constructor(e=zt.DEFAULT_IMAGE,n=zt.DEFAULT_MAPPING,i=Wi,r=Wi,s=Kt,o=gr,a=Zn,l=bi,c=zt.DEFAULT_ANISOTROPY,d=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Ca(),this.name="",this.source=new Jx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Fx;zt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],y=l[9],M=l[2],_=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(y+_)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,S=(m+1)/2,C=(u+1)/2,w=(d+h)/4,E=(f+M)/4,b=(y+_)/4;return p>S&&p>C?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=w/i,s=E/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-y)*(_-y)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(_-y)/v,this.y=(f-M)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Jx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends _M{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $x extends zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],y=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=M;return}if(f!==M||l!==h||c!==m||d!==y){let _=1-a;const u=l*h+c*m+d*y+f*M,v=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const C=Math.sqrt(p),w=Math.atan2(C,u*v);_=Math.sin(_*w)/C,a=Math.sin(a*w)/C}const S=a*v;if(l=l*_+h*S,c=c*_+m*S,d=d*_+y*S,f=f*_+M*S,_===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+d*f+l*m-c*h,e[n+1]=l*y+d*h+c*f-a*m,e[n+2]=c*y+d*m+a*h-l*f,e[n+3]=d*y-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f-h*m*y;break;case"YXZ":this._x=h*d*f+c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f+h*m*y;break;case"ZXY":this._x=h*d*f-c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f-h*m*y;break;case"ZYX":this._x=h*d*f-c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f+h*m*y;break;case"YZX":this._x=h*d*f+c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f-h*m*y;break;case"XZY":this._x=h*d*f-c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(c0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(c0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new Y,c0=new ls;class Ra{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Ja.subVectors(this.max,Lo),Ss.subVectors(e.a,Lo),Ms.subVectors(e.b,Lo),ws.subVectors(e.c,Lo),nr.subVectors(Ms,Ss),ir.subVectors(ws,Ms),Ur.subVectors(Ss,ws);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ur.z,Ur.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ur.z,0,-Ur.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ur.y,Ur.x,0];return!Fu(n,Ss,Ms,ws,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,Ss,Ms,ws,Ja))?!1:($a.crossVectors(nr,ir),n=[$a.x,$a.y,$a.z],Fu(n,Ss,Ms,ws,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ri=new Y,Qa=new Ra,Ss=new Y,Ms=new Y,ws=new Y,nr=new Y,ir=new Y,Ur=new Y,Lo=new Y,Ja=new Y,$a=new Y,Or=new Y;function Fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Or.fromArray(t,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),d=i.dot(Or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const SM=new Ra,Do=new Y,Bu=new Y;class Wc{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Bu)),this.expandByPoint(Do.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Y,Hu=new Y,el=new Y,rr=new Y,Vu=new Y,tl=new Y,Gu=new Y;class jc{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Hu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(Hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(el),a=rr.dot(this.direction),l=-rr.dot(el),c=rr.lengthSq(),d=Math.abs(1-o*o);let f,h,m,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const M=1/d;f*=M,h*=M,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hu).addScaledVector(el,h),m}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){Vu.subVectors(n,e),tl.subVectors(i,e),Gu.crossVectors(Vu,tl);let o=this.direction.dot(Gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(tl.crossVectors(rr,tl));if(l<0)return null;const c=a*this.direction.dot(Vu.cross(rr));if(c<0||l+c>o)return null;const d=-a*rr.dot(Gu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,m,y,M,_){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,m,y,M,_)}set(e,n,i,r,s,o,a,l,c,d,f,h,m,y,M,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=y,u[11]=M,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,y=a*d,M=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+y*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=y+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,y=c*d,M=c*f;n[0]=h+M*a,n[4]=y*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-y,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,y=c*d,M=c*f;n[0]=h-M*a,n[4]=-o*f,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*d,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,y=a*d,M=a*f;n[0]=l*d,n[4]=y*c-m,n[8]=h*c+M,n[1]=l*f,n[5]=M*c+h,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=a*l,M=a*c;n[0]=l*d,n[4]=M-h*f,n[8]=y*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+y,n[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,m=o*c,y=a*l,M=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+M,n[5]=o*d,n[9]=m*f-y,n[2]=y*f-m,n[6]=a*d,n[10]=M*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,wM)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),sr.crossVectors(i,Ln),sr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),sr.crossVectors(i,Ln)),sr.normalize(),nl.crossVectors(Ln,sr),r[0]=sr.x,r[4]=nl.x,r[8]=Ln.x,r[1]=sr.y,r[5]=nl.y,r[9]=Ln.y,r[2]=sr.z,r[6]=nl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],y=i[2],M=i[6],_=i[10],u=i[14],v=i[3],p=i[7],S=i[11],C=i[15],w=r[0],E=r[4],b=r[8],z=r[12],x=r[1],T=r[5],B=r[9],H=r[13],q=r[2],Q=r[6],j=r[10],K=r[14],k=r[3],te=r[7],$=r[11],ae=r[15];return s[0]=o*w+a*x+l*q+c*k,s[4]=o*E+a*T+l*Q+c*te,s[8]=o*b+a*B+l*j+c*$,s[12]=o*z+a*H+l*K+c*ae,s[1]=d*w+f*x+h*q+m*k,s[5]=d*E+f*T+h*Q+m*te,s[9]=d*b+f*B+h*j+m*$,s[13]=d*z+f*H+h*K+m*ae,s[2]=y*w+M*x+_*q+u*k,s[6]=y*E+M*T+_*Q+u*te,s[10]=y*b+M*B+_*j+u*$,s[14]=y*z+M*H+_*K+u*ae,s[3]=v*w+p*x+S*q+C*k,s[7]=v*E+p*T+S*Q+C*te,s[11]=v*b+p*B+S*j+C*$,s[15]=v*z+p*H+S*K+C*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],y=e[3],M=e[7],_=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+M*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+_*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],y=e[12],M=e[13],_=e[14],u=e[15],v=f*_*c-M*h*c+M*l*m-a*_*m-f*l*u+a*h*u,p=y*h*c-d*_*c-y*l*m+o*_*m+d*l*u-o*h*u,S=d*M*c-y*f*c+y*a*m-o*M*m-d*a*u+o*f*u,C=y*f*l-d*M*l-y*a*h+o*M*h+d*a*_-o*f*_,w=n*v+i*p+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(M*h*s-f*_*s-M*r*m+i*_*m+f*r*u-i*h*u)*E,e[2]=(a*_*s-M*l*s+M*r*c-i*_*c-a*r*u+i*l*u)*E,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*E,e[4]=p*E,e[5]=(d*_*s-y*h*s+y*r*m-n*_*m-d*r*u+n*h*u)*E,e[6]=(y*l*s-o*_*s-y*r*c+n*_*c+o*r*u-n*l*u)*E,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*m+n*l*m)*E,e[8]=S*E,e[9]=(y*f*s-d*M*s-y*i*m+n*M*m+d*i*u-n*f*u)*E,e[10]=(o*M*s-y*a*s+y*i*c-n*M*c-o*i*u+n*a*u)*E,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*m-n*a*m)*E,e[12]=C*E,e[13]=(d*M*r-y*f*r+y*i*h-n*M*h-d*i*_+n*f*_)*E,e[14]=(y*a*r-o*M*r-y*i*l+n*M*l+o*i*_-n*a*_)*E,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,y=s*f,M=o*d,_=o*f,u=a*f,v=l*c,p=l*d,S=l*f,C=i.x,w=i.y,E=i.z;return r[0]=(1-(M+u))*C,r[1]=(m+S)*C,r[2]=(y-p)*C,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(h+u))*w,r[6]=(_+v)*w,r[7]=0,r[8]=(y+p)*E,r[9]=(_-v)*E,r[10]=(1-(h+M))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Es.set(r[0],r[1],r[2]).length();const o=Es.set(r[4],r[5],r[6]).length(),a=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,d=1/o,f=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,n.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ji){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===ji)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Mc)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ji){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*d;let y,M;if(a===ji)y=(o+s)*f,M=-2*f;else if(a===Mc)y=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Es=new Y,si=new rt,MM=new Y(0,0,0),wM=new Y(1,1,1),sr=new Y,nl=new Y,Ln=new Y,u0=new rt,d0=new ls;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return d0.setFromEuler(this),this.setFromQuaternion(d0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const h0=new Y,Ts=new ls,Di=new rt,il=new Y,No=new Y,TM=new Y,AM=new ls,f0=new Y(1,0,0),p0=new Y(0,1,0),m0=new Y(0,0,1),g0={type:"added"},bM={type:"removed"},As={type:"childadded",child:null},Wu={type:"childremoved",child:null};class jt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new Y,n=new Ci,i=new ls,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Qe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(f0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,n){return h0.copy(e).applyQuaternion(this.quaternion),this.position.add(h0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(f0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?il.copy(e):il.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(No,il,this.up):Di.lookAt(il,No,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Di),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bM),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new Y(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Y,Ni=new Y,ju=new Y,Ii=new Y,bs=new Y,Cs=new Y,v0=new Y,Xu=new Y,Yu=new Y,qu=new Y,Ku=new ut,Zu=new ut,Qu=new ut;class pi{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),Ni.subVectors(i,n),ju.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Ni),l=oi.dot(ju),c=Ni.dot(Ni),d=Ni.dot(ju),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ku.setScalar(0),Zu.setScalar(0),Qu.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,i),Qu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ku,s.x),o.addScaledVector(Zu,s.y),o.addScaledVector(Qu,s.z),o}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Ni.subVectors(e,n),oi.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;bs.subVectors(r,i),Cs.subVectors(s,i),Xu.subVectors(e,i);const l=bs.dot(Xu),c=Cs.dot(Xu);if(l<=0&&c<=0)return n.copy(i);Yu.subVectors(e,r);const d=bs.dot(Yu),f=Cs.dot(Yu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(bs,o);qu.subVectors(e,s);const m=bs.dot(qu),y=Cs.dot(qu);if(y>=0&&m<=y)return n.copy(s);const M=m*c-l*y;if(M<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Cs,a);const _=d*y-m*f;if(_<=0&&f-d>=0&&m-y>=0)return v0.subVectors(s,r),a=(f-d)/(f-d+(m-y)),n.copy(r).addScaledVector(v0,a);const u=1/(_+M+h);return o=M*u,a=h*u,n.copy(i).addScaledVector(bs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=cM(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ju(o,s,e+1/3),this.g=Ju(o,s,e),this.b=Ju(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){const i=e_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=Ou(e.r),this.g=Ou(e.g),this.b=Ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return it.fromWorkingColorSpace(nn.copy(this),e),Math.round(sn(nn.r*255,0,255))*65536+Math.round(sn(nn.g*255,0,255))*256+Math.round(sn(nn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=un){it.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(rl);const i=Iu(or.h,rl.h,n),r=Iu(or.s,rl.s,n),s=Iu(or.l,rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new He;He.NAMES=e_;let CM=0;class ps extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=no,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xc extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hi=RM();function RM(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;!(c&8388608);)c<<=1,d-=8388608;c&=-8388609,d+=947912704,s[l]=c|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function PM(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=sn(t,-65504,65504),Hi.floatView[0]=t;const e=Hi.uint32View[0],n=e>>23&511;return Hi.baseTable[n]+((e&8388607)>>Hi.shiftTable[n])}function LM(t){const e=t>>10;return Hi.uint32View[0]=Hi.mantissaTable[Hi.offsetTable[e]+(t&1023)]+Hi.exponentTable[e],Hi.floatView[0]}const sl={toHalfFloat:PM,fromHalfFloat:LM},Dt=new Y,ol=new Ue;class Ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=r0,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ro(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==r0&&(e.usage=this.usage),e}}class t_ extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class n_ extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dt extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DM=0;const Wn=new rt,$u=new jt,Rs=new Y,Dn=new Ra,Io=new Ra,Ht=new Y;class mn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qx(e)?n_:t_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Dn.min,Io.min),Dn.expandByPoint(Ht),Ht.addVectors(Dn.max,Io.max),Dn.expandByPoint(Ht)):(Dn.expandByPoint(Io.min),Dn.expandByPoint(Io.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ht.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Ht.add(Rs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new Y,l[b]=new Y;const c=new Y,d=new Y,f=new Y,h=new Ue,m=new Ue,y=new Ue,M=new Y,_=new Y;function u(b,z,x){c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,z),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,z),y.fromBufferAttribute(s,x),d.sub(c),f.sub(c),m.sub(h),y.sub(h);const T=1/(m.x*y.y-y.x*m.y);isFinite(T)&&(M.copy(d).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(T),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(T),a[b].add(M),a[z].add(M),a[x].add(M),l[b].add(_),l[z].add(_),l[x].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,z=v.length;b<z;++b){const x=v[b],T=x.start,B=x.count;for(let H=T,q=T+B;H<q;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const p=new Y,S=new Y,C=new Y,w=new Y;function E(b){C.fromBufferAttribute(r,b),w.copy(C);const z=a[b];p.copy(z),p.sub(C.multiplyScalar(C.dot(z))).normalize(),S.crossVectors(w,z);const T=S.dot(l[b])<0?-1:1;o.setXYZW(b,p.x,p.y,p.z,T)}for(let b=0,z=v.length;b<z;++b){const x=v[b],T=x.start,B=x.count;for(let H=T,q=T+B;H<q;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,d=new Y,f=new Y;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),M=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,_),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,y=0;for(let M=0,_=l.length;M<_;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*d;for(let u=0;u<d;u++)h[y++]=c[m++]}return new Ai(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new rt,kr=new jc,al=new Wc,_0=new Y,ll=new Y,cl=new Y,ul=new Y,ed=new Y,dl=new Y,y0=new Y,hl=new Y;class Je extends jt{constructor(e=new mn,n=new Xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(ed.fromBufferAttribute(f,e),o?dl.addScaledVector(ed,d):dl.addScaledVector(ed.sub(n),d))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(al.containsPoint(kr.origin)===!1&&(kr.intersectSphere(al,_0)===null||kr.origin.distanceToSquared(_0)>(e.far-e.near)**2))&&(x0.copy(s).invert(),kr.copy(e.ray).applyMatrix4(x0),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,M=h.length;y<M;y++){const _=h[y],u=o[_.materialIndex],v=Math.max(_.start,m.start),p=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let S=v,C=p;S<C;S+=3){const w=a.getX(S),E=a.getX(S+1),b=a.getX(S+2);r=fl(this,u,e,i,c,d,f,w,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let _=y,u=M;_<u;_+=3){const v=a.getX(_),p=a.getX(_+1),S=a.getX(_+2);r=fl(this,o,e,i,c,d,f,v,p,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,M=h.length;y<M;y++){const _=h[y],u=o[_.materialIndex],v=Math.max(_.start,m.start),p=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=v,C=p;S<C;S+=3){const w=S,E=S+1,b=S+2;r=fl(this,u,e,i,c,d,f,w,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let _=y,u=M;_<u;_+=3){const v=_,p=_+1,S=_+2;r=fl(this,o,e,i,c,d,f,v,p,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function NM(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cr,a),l===null)return null;hl.copy(a),hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(hl);return c<n.near||c>n.far?null:{distance:c,point:hl.clone(),object:t}}function fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ll),t.getVertexPosition(l,cl),t.getVertexPosition(c,ul);const d=NM(t,e,n,i,ll,cl,ul,y0);if(d){const f=new Y;pi.getBarycoord(y0,ll,cl,ul,f),r&&(d.uv=pi.getInterpolatedAttribute(r,a,l,c,f,new Ue)),s&&(d.uv1=pi.getInterpolatedAttribute(s,a,l,c,f,new Ue)),o&&(d.normal=pi.getInterpolatedAttribute(o,a,l,c,f,new Y),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};pi.getNormal(ll,cl,ul,h.normal),d.face=h,d.barycoord=f}return d}class cn extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function y(M,_,u,v,p,S,C,w,E,b,z){const x=S/E,T=C/b,B=S/2,H=C/2,q=w/2,Q=E+1,j=b+1;let K=0,k=0;const te=new Y;for(let $=0;$<j;$++){const ae=$*T-H;for(let ge=0;ge<Q;ge++){const pe=ge*x-B;te[M]=pe*v,te[_]=ae*p,te[u]=q,c.push(te.x,te.y,te.z),te[M]=0,te[_]=0,te[u]=w>0?1:-1,d.push(te.x,te.y,te.z),f.push(ge/E),f.push(1-$/b),K+=1}}for(let $=0;$<b;$++)for(let ae=0;ae<E;ae++){const ge=h+ae+Q*$,pe=h+ae+Q*($+1),ee=h+(ae+1)+Q*($+1),ne=h+(ae+1)+Q*$;l.push(ge,pe,ne),l.push(pe,ee,ne),k+=6}a.addGroup(m,k,z),m+=k,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function IM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function i_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const mi={clone:go,merge:an};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class r_ extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new Y,S0=new Ue,M0=new Ue;class In extends r_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,S0,M0),n.subVectors(M0,S0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class kM extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(Ps,Ls,e,n);r.layers=this.layers,this.add(r);const s=new In(Ps,Ls,e,n);s.layers=this.layers,this.add(s);const o=new In(Ps,Ls,e,n);o.layers=this.layers,this.add(o);const a=new In(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const l=new In(Ps,Ls,e,n);l.layers=this.layers,this.add(l);const c=new In(Ps,Ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class s_ extends zt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:po,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zM extends ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new s_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cn(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:qt});s.uniforms.tEquirect.value=n;const o=new Je(r,s),a=n.minFilter;return n.minFilter===gr&&(n.minFilter=Kt),new kM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const td=new Y,FM=new Y,BM=new Qe;class Bi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=td.subVectors(i,n).cross(FM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(td),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BM.getNormalMatrix(e),r=this.coplanarPoint(td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Wc,pl=new Y;class hp{constructor(e=new Bi,n=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ji){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],y=r[9],M=r[10],_=r[11],u=r[12],v=r[13],p=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,_-m,S-u).normalize(),i[1].setComponents(l+s,h+c,_+m,S+u).normalize(),i[2].setComponents(l+o,h+d,_+y,S+v).normalize(),i[3].setComponents(l-o,h-d,_-y,S-v).normalize(),i[4].setComponents(l-a,h-f,_-M,S-p).normalize(),n===ji)i[5].setComponents(l+a,h+f,_+M,S+p).normalize();else if(n===Mc)i[5].setComponents(a,f,M,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,y)=>m.start-y.start);let h=0;for(let m=1;m<f.length;m++){const y=f[h],M=f[m];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++h,f[h]=M)}f.length=h+1;for(let m=0,y=f.length;m<y;m++){const M=f[m];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class cs extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,m=[],y=[],M=[],_=[];for(let u=0;u<d;u++){const v=u*h-o;for(let p=0;p<c;p++){const S=p*f-s;y.push(S,-v,0),M.push(0,0,1),_.push(p/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const p=v+c*u,S=v+c*(u+1),C=v+1+c*(u+1),w=v+1+c*u;m.push(p,S,w),m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new dt(y,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
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
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tw=`#ifdef USE_IRIDESCENCE
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
#endif`,nw=`#ifdef USE_BUMPMAP
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dw=`#define PI 3.141592653589793
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
} // validated`,hw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fw=`vec3 transformedNormal = objectNormal;
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
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",_w=`
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
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rw=`#ifdef USE_GRADIENTMAP
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
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nw=`uniform bool receiveShadow;
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
#endif`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fw=`PhysicalMaterial material;
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
#endif`,Bw=`struct PhysicalMaterial {
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
}`,Hw=`
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
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qw=`#if defined( USE_POINTS_UV )
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
#endif`,Jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AE=`float getShadowMask() {
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
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
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
}`,qE=`#if DEPTH_PACKING == 3200
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
}`,KE=`#define DISTANCE
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
}`,ZE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,hT=`#define STANDARD
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
}`,fT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,_T=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:VM,alphahash_pars_fragment:GM,alphamap_fragment:WM,alphamap_pars_fragment:jM,alphatest_fragment:XM,alphatest_pars_fragment:YM,aomap_fragment:qM,aomap_pars_fragment:KM,batching_pars_vertex:ZM,batching_vertex:QM,begin_vertex:JM,beginnormal_vertex:$M,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:ow,color_fragment:aw,color_pars_fragment:lw,color_pars_vertex:cw,color_vertex:uw,common:dw,cube_uv_reflection_fragment:hw,defaultnormal_vertex:fw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:vw,colorspace_fragment:xw,colorspace_pars_fragment:_w,envmap_fragment:yw,envmap_common_pars_fragment:Sw,envmap_pars_fragment:Mw,envmap_pars_vertex:ww,envmap_physical_pars_fragment:Iw,envmap_vertex:Ew,fog_vertex:Tw,fog_pars_vertex:Aw,fog_fragment:bw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Rw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Dw,lights_pars_begin:Nw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Ow,lights_phong_fragment:kw,lights_phong_pars_fragment:zw,lights_physical_fragment:Fw,lights_physical_pars_fragment:Bw,lights_fragment_begin:Hw,lights_fragment_maps:Vw,lights_fragment_end:Gw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:jw,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:Yw,map_fragment:qw,map_pars_fragment:Kw,map_particle_fragment:Zw,map_particle_pars_fragment:Qw,metalnessmap_fragment:Jw,metalnessmap_pars_fragment:$w,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:aE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:_E,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:bE,skinning_pars_vertex:CE,skinning_vertex:RE,skinnormal_vertex:PE,specularmap_fragment:LE,specularmap_pars_fragment:DE,tonemapping_fragment:NE,tonemapping_pars_fragment:IE,transmission_fragment:UE,transmission_pars_fragment:OE,uv_pars_fragment:kE,uv_pars_vertex:zE,uv_vertex:FE,worldpos_vertex:BE,background_vert:HE,background_frag:VE,backgroundCube_vert:GE,backgroundCube_frag:WE,cube_vert:jE,cube_frag:XE,depth_vert:YE,depth_frag:qE,distanceRGBA_vert:KE,distanceRGBA_frag:ZE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:oT,meshnormal_vert:aT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:dT,meshphysical_frag:hT,meshtoon_vert:fT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:vT,shadow_frag:xT,sprite_vert:_T,sprite_frag:yT},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Mi={basic:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:an([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:an([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:an([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:an([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:an([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:an([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:an([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:an([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mi.physical={uniforms:an([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ml={r:0,b:0,g:0},Fr=new Ci,ST=new rt;function MT(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function y(v){let p=v.isScene===!0?v.background:null;return p&&p.isTexture&&(p=(v.backgroundBlurriness>0?n:e).get(p)),p}function M(v){let p=!1;const S=y(v);S===null?u(a,l):S&&S.isColor&&(u(S,1),p=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||p)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,p){const S=y(p);S&&(S.isCubeTexture||S.mapping===Vc)?(d===void 0&&(d=new Je(new cn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:go(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Fr.copy(p.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Fr)),d.material.toneMapped=it.getTransfer(S.colorSpace)!==ht,(f!==S||h!==S.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Je(new cs(2,2),new Ot({name:"BackgroundMaterial",uniforms:go(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,p){v.getRGB(ml,i_(t)),i.buffers.color.setClear(ml.r,ml.g,ml.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(v,p=1){a.set(v),l=p,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:M,addToRenderList:_}}function wT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,T,B,H,q){let Q=!1;const j=f(H,B,T);s!==j&&(s=j,c(s.object)),Q=m(x,H,B,q),Q&&y(x,H,B,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(x,T,B,H),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function d(x){return t.deleteVertexArray(x)}function f(x,T,B){const H=B.wireframe===!0;let q=i[x.id];q===void 0&&(q={},i[x.id]=q);let Q=q[T.id];Q===void 0&&(Q={},q[T.id]=Q);let j=Q[H];return j===void 0&&(j=h(l()),Q[H]=j),j}function h(x){const T=[],B=[],H=[];for(let q=0;q<n;q++)T[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,T,B,H){const q=s.attributes,Q=T.attributes;let j=0;const K=B.getAttributes();for(const k in K)if(K[k].location>=0){const $=q[k];let ae=Q[k];if(ae===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;j++}return s.attributesNum!==j||s.index!==H}function y(x,T,B,H){const q={},Q=T.attributes;let j=0;const K=B.getAttributes();for(const k in K)if(K[k].location>=0){let $=Q[k];$===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),q[k]=ae,j++}s.attributes=q,s.attributesNum=j,s.index=H}function M(){const x=s.newAttributes;for(let T=0,B=x.length;T<B;T++)x[T]=0}function _(x){u(x,0)}function u(x,T){const B=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;B[x]=1,H[x]===0&&(t.enableVertexAttribArray(x),H[x]=1),q[x]!==T&&(t.vertexAttribDivisor(x,T),q[x]=T)}function v(){const x=s.newAttributes,T=s.enabledAttributes;for(let B=0,H=T.length;B<H;B++)T[B]!==x[B]&&(t.disableVertexAttribArray(B),T[B]=0)}function p(x,T,B,H,q,Q,j){j===!0?t.vertexAttribIPointer(x,T,B,q,Q):t.vertexAttribPointer(x,T,B,H,q,Q)}function S(x,T,B,H){M();const q=H.attributes,Q=B.getAttributes(),j=T.defaultAttributeValues;for(const K in Q){const k=Q[K];if(k.location>=0){let te=q[K];if(te===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const $=te.normalized,ae=te.itemSize,ge=e.get(te);if(ge===void 0)continue;const pe=ge.buffer,ee=ge.type,ne=ge.bytesPerElement,xe=ee===t.INT||ee===t.UNSIGNED_INT||te.gpuType===ip;if(te.isInterleavedBufferAttribute){const ce=te.data,Ae=ce.stride,Re=te.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<k.locationSize;ke++)u(k.location+ke,ce.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<k.locationSize;ke++)_(k.location+ke);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let ke=0;ke<k.locationSize;ke++)p(k.location+ke,ae/k.locationSize,ee,$,Ae*ne,(Re+ae/k.locationSize*ke)*ne,xe)}else{if(te.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)u(k.location+ce,te.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<k.locationSize;ce++)_(k.location+ce);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let ce=0;ce<k.locationSize;ce++)p(k.location+ce,ae/k.locationSize,ee,$,ae*ne,ae/k.locationSize*ce*ne,xe)}}else if(j!==void 0){const $=j[K];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(k.location,$);break;case 3:t.vertexAttrib3fv(k.location,$);break;case 4:t.vertexAttrib4fv(k.location,$);break;default:t.vertexAttrib1fv(k.location,$)}}}}v()}function C(){b();for(const x in i){const T=i[x];for(const B in T){const H=T[B];for(const q in H)d(H[q].object),delete H[q];delete T[B]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const B in T){const H=T[B];for(const q in H)d(H[q].object),delete H[q];delete T[B]}delete i[x.id]}function E(x){for(const T in i){const B=i[T];if(B[x.id]===void 0)continue;const H=B[x.id];for(const q in H)d(H[q].object),delete H[q];delete B[x.id]}}function b(){z(),o=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:_,disableUnusedAttributes:v}}function ET(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let y=0;y<f;y++)m+=d[y];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)o(c[y],d[y],h[y]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let y=0;for(let M=0;M<f;M++)y+=d[M];for(let M=0;M<h.length;M++)n.update(y,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Zn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==bi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Kn&&!b)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=y>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function AT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Bi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const y=f.clippingPlanes,M=f.clipIntersection,_=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!_)s?d(null):c();else{const v=s?0:i,p=v*4;let S=u.clippingState||null;l.value=S,S=d(y,h,p,m);for(let C=0;C!==p;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,y){const M=f!==null?f.length:0;let _=null;if(M!==0){if(_=l.value,y!==!0||_===null){const u=m+M*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let p=0,S=m;p!==M;++p,S+=4)o.copy(f[p]).applyMatrix4(v,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function bT(t){let e=new WeakMap;function n(o,a){return a===xc?o.mapping=po:a===Th&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xc||a===Th)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fp extends r_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,w0=[.125,.215,.35,.446,.526,.582],Yr=20,nd=new fp,E0=new He;let id=null,rd=0,sd=0,od=!1;const Xr=(1+Math.sqrt(5))/2,Ds=1/Xr,T0=[new Y(-Xr,Ds,0),new Y(Xr,Ds,0),new Y(-Ds,0,Xr),new Y(Ds,0,Xr),new Y(0,Xr,-Ds),new Y(0,Xr,Ds),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(id,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:En,format:Zn,colorSpace:$i,depthBuffer:!1},r=A0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(s)),this._blurMaterial=RT(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,nd)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(E0),d.toneMapping=Tr,d.autoClear=!1;const m=new Xc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),y=new Je(new cn,m);let M=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,M=!0):(m.color.copy(E0),M=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;gl(r,v*p,u>2?p:0,p,p),d.setRenderTarget(r),M&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===po||e.mapping===mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,nd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=T0[(r-s-1)%T0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Je(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yr-1),M=s/y,_=isFinite(s)?1+Math.floor(d*M):Yr;_>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Yr}`);const u=[];let v=0;for(let E=0;E<Yr;++E){const b=E/M,z=Math.exp(-b*b/2);u.push(z),E===0?v+=z:E<_&&(v+=2*z)}for(let E=0;E<u.length;E++)u[E]=u[E]/v;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:p}=this;h.dTheta.value=y,h.mipInt.value=p-i;const S=this._sizeLods[r],C=3*S*(r>p-qs?r-p+qs:0),w=4*(this._cubeSize-S);gl(n,C,w,3*S,2*S),l.setRenderTarget(n),l.render(f,nd)}}function CT(t){const e=[],n=[],i=[];let r=t;const s=t-qs+1+w0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qs?l=w0[o-t+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,y=6,M=3,_=2,u=1,v=new Float32Array(M*y*m),p=new Float32Array(_*y*m),S=new Float32Array(u*y*m);for(let w=0;w<m;w++){const E=w%3*2/3-1,b=w>2?0:-1,z=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(z,M*y*w),p.set(h,_*y*w);const x=[w,w,w,w,w,w];S.set(x,u*y*w)}const C=new mn;C.setAttribute("position",new Ai(v,M)),C.setAttribute("uv",new Ai(p,_)),C.setAttribute("faceIndex",new Ai(S,u)),e.push(C),r>qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function A0(t,e,n){const i=new ei(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RT(t,e,n){const i=new Float32Array(Yr),r=new Y(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pp(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function b0(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function C0(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function pp(){return`

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
	`}function PT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xc||l===Th,d=l===po||l===mo;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new ef(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new ef(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&jl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const M=h.morphAttributes[y];for(let _=0,u=M.length;_<u;_++)e.remove(M[_])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const y in m){const M=m[y];for(let _=0,u=M.length;_<u;_++)e.update(M[_],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,y=f.attributes.position;let M=0;if(m!==null){const v=m.array;M=m.version;for(let p=0,S=v.length;p<S;p+=3){const C=v[p+0],w=v[p+1],E=v[p+2];h.push(C,w,w,E,E,C)}}else if(y!==void 0){const v=y.array;M=y.version;for(let p=0,S=v.length/3-1;p<S;p+=3){const C=p+0,w=p+1,E=p+2;h.push(C,w,w,E,E,C)}}else return;const _=new(Qx(h)?n_:t_)(h,1);_.version=M;const u=s.get(f);u&&e.remove(u),s.set(f,_)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function NT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,y){y!==0&&(t.drawElementsInstanced(i,m,s,h*o,y),n.update(m,i,y))}function d(h,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,y);let _=0;for(let u=0;u<y;u++)_+=m[u];n.update(_,i,1)}function f(h,m,y,M){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],M[u]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,M,0,y);let u=0;for(let v=0;v<y;v++)u+=m[v];for(let v=0;v<M.length;v++)n.update(u,i,M[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function IT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),M===!0&&(S=2),_===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*f),b=new $x(E,C,w,f);b.type=Kn,b.needsUpdate=!0;const z=S*4;for(let T=0;T<f;T++){const B=u[T],H=v[T],q=p[T],Q=C*w*4*T;for(let j=0;j<B.count;j++){const K=j*z;y===!0&&(r.fromBufferAttribute(B,j),E[Q+K+0]=r.x,E[Q+K+1]=r.y,E[Q+K+2]=r.z,E[Q+K+3]=0),M===!0&&(r.fromBufferAttribute(H,j),E[Q+K+4]=r.x,E[Q+K+5]=r.y,E[Q+K+6]=r.z,E[Q+K+7]=0),_===!0&&(r.fromBufferAttribute(q,j),E[Q+K+8]=r.x,E[Q+K+9]=r.y,E[Q+K+10]=r.z,E[Q+K+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new Ue(C,w)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let _=0;_<c.length;_++)y+=c[_];const M=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function OT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class mp extends zt{constructor(e,n,i,r,s,o,a,l,c,d=io){if(d!==io&&d!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===io&&(i=ss),i===void 0&&d===as&&(i=os),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new zt,R0=new mp(1,1),l_=new $x,c_=new yM,u_=new s_,P0=[],L0=[],D0=new Float32Array(16),N0=new Float32Array(9),I0=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=P0[r];if(s===void 0&&(s=new Float32Array(r),P0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=L0[e];n===void 0&&(n=new Int32Array(e),L0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;I0.set(i),t.uniformMatrix2fv(this.addr,!1,I0),Bt(n,i)}}function VT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;N0.set(i),t.uniformMatrix3fv(this.addr,!1,N0),Bt(n,i)}}function GT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;D0.set(i),t.uniformMatrix4fv(this.addr,!1,D0),Bt(n,i)}}function WT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(R0.compareFunction=Zx,s=R0):s=a_,n.setTexture2D(e||s,r)}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function e2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u_,r)}function t2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l_,r)}function n2(t){switch(t){case 5126:return kT;case 35664:return zT;case 35665:return FT;case 35666:return BT;case 35674:return HT;case 35675:return VT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return jT;case 35668:case 35672:return XT;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return KT;case 36295:return ZT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}function i2(t,e){t.uniform1fv(this.addr,e)}function r2(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function s2(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function o2(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function a2(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function l2(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function c2(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function u2(t,e){t.uniform1iv(this.addr,e)}function d2(t,e){t.uniform2iv(this.addr,e)}function h2(t,e){t.uniform3iv(this.addr,e)}function f2(t,e){t.uniform4iv(this.addr,e)}function p2(t,e){t.uniform1uiv(this.addr,e)}function m2(t,e){t.uniform2uiv(this.addr,e)}function g2(t,e){t.uniform3uiv(this.addr,e)}function v2(t,e){t.uniform4uiv(this.addr,e)}function x2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a_,s[o])}function _2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||c_,s[o])}function y2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||u_,s[o])}function S2(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||l_,s[o])}function M2(t){switch(t){case 5126:return i2;case 35664:return r2;case 35665:return s2;case 35666:return o2;case 35674:return a2;case 35675:return l2;case 35676:return c2;case 5124:case 35670:return u2;case 35667:case 35671:return d2;case 35668:case 35672:return h2;case 35669:case 35673:return f2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return S2}}class w2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=n2(n.type)}}class E2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=M2(n.type)}}class T2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function U0(t,e){t.seq.push(e),t.map[e.id]=e}function A2(t,e,n){const i=t.name,r=i.length;for(ad.lastIndex=0;;){const s=ad.exec(i),o=ad.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){U0(n,c===void 0?new w2(a,t,e):new E2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new T2(a),U0(n,f)),n=f}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);A2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function O0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const b2=37297;let C2=0;function R2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function P2(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Sc&&n===yc?i="LinearDisplayP3ToLinearSRGB":e===yc&&n===Sc&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Gc:return[i,"LinearTransferOETF"];case un:case up:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function k0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+R2(t.getShaderSource(e),o)}else return r}function L2(t,e){const n=P2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function D2(t,e){let n;switch(e){case Ix:n="Linear";break;case Ux:n="Reinhard";break;case Ox:n="Cineon";break;case np:n="ACESFilmic";break;case kx:n="AgX";break;case zx:n="Neutral";break;case QS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new Y;function N2(){it.getLuminanceCoefficients(vl);const t=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function U2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function O2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xo(t){return t!==""}function z0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(t){return t.replace(k2,F2)}const z2=new Map;function F2(t,e){let n=Ze[e];if(n===void 0){const i=z2.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(n)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(t){return t.replace(B2,H2)}function H2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function V2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Px?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function G2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function j2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Nx:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function X2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Y2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=V2(n),c=G2(n),d=W2(n),f=j2(n),h=X2(n),m=I2(n),y=U2(s),M=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Xo).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Xo).join(`
`),u.length>0&&(u+=`
`)):(_=[H0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),u=[H0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tr?"#define TONE_MAPPING":"",n.toneMapping!==Tr?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Tr?D2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,L2("linearToOutputTexel",n.outputColorSpace),N2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),o=tf(o),o=z0(o,n),o=F0(o,n),a=tf(a),a=z0(a,n),a=F0(a,n),o=B0(o),a=B0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const p=v+_+o,S=v+u+a,C=O0(r,r.VERTEX_SHADER,p),w=O0(r,r.FRAGMENT_SHADER,S);r.attachShader(M,C),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function E(T){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(M).trim(),H=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(w).trim();let Q=!0,j=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,C,w);else{const K=k0(r,C,"vertex"),k=k0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+K+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||q==="")&&(j=!1);j&&(T.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:_},fragmentShader:{log:q,prefix:u}})}r.deleteShader(C),r.deleteShader(w),b=new Xl(r,M),z=O2(r,M)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let z;this.getAttributes=function(){return z===void 0&&E(this),z};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,b2)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=C2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=w,this}let q2=0;class K2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Z2(e),n.set(e,i)),i}}class Z2{constructor(e){this.id=q2++,this.code=e,this.usedTimes=0}}function Q2(t,e,n,i,r,s,o){const a=new dp,l=new K2,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,T,B,H,q){const Q=H.fog,j=q.geometry,K=x.isMeshStandardMaterial?H.environment:null,k=(x.isMeshStandardMaterial?n:e).get(x.envMap||K),te=k&&k.mapping===Vc?k.image.height:null,$=M[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=ae!==void 0?ae.length:0;let pe=0;j.morphAttributes.position!==void 0&&(pe=1),j.morphAttributes.normal!==void 0&&(pe=2),j.morphAttributes.color!==void 0&&(pe=3);let ee,ne,xe,ce;if($){const vn=Mi[$];ee=vn.vertexShader,ne=vn.fragmentShader}else ee=x.vertexShader,ne=x.fragmentShader,l.update(x),xe=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const Ae=t.getRenderTarget(),Re=q.isInstancedMesh===!0,ke=q.isBatchedMesh===!0,Xe=!!x.map,Fe=!!x.matcap,V=!!k,pt=!!x.aoMap,Be=!!x.lightMap,Ge=!!x.bumpMap,Le=!!x.normalMap,Ke=!!x.displacementMap,ue=!!x.emissiveMap,P=!!x.metalnessMap,A=!!x.roughnessMap,U=x.anisotropy>0,R=x.clearcoat>0,O=x.dispersion>0,D=x.iridescence>0,N=x.sheen>0,F=x.transmission>0,I=U&&!!x.anisotropyMap,W=R&&!!x.clearcoatMap,X=R&&!!x.clearcoatNormalMap,ie=R&&!!x.clearcoatRoughnessMap,de=D&&!!x.iridescenceMap,me=D&&!!x.iridescenceThicknessMap,he=N&&!!x.sheenColorMap,Ne=N&&!!x.sheenRoughnessMap,Me=!!x.specularMap,_e=!!x.specularColorMap,G=!!x.specularIntensityMap,ve=F&&!!x.transmissionMap,oe=F&&!!x.thicknessMap,le=!!x.gradientMap,we=!!x.alphaMap,Te=x.alphaTest>0,et=!!x.alphaHash,Lt=!!x.extensions;let gn=Tr;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(gn=t.toneMapping);const nt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:ne,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:ke,batchingColor:ke&&q._colorsTexture!==null,instancing:Re,instancingColor:Re&&q.instanceColor!==null,instancingMorph:Re&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:$i,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:Fe,envMap:V,envMapMode:V&&k.mapping,envMapCubeUVHeight:te,aoMap:pt,lightMap:Be,bumpMap:Ge,normalMap:Le,displacementMap:m&&Ke,emissiveMap:ue,normalMapObjectSpace:Le&&x.normalMapType===tM,normalMapTangentSpace:Le&&x.normalMapType===cp,metalnessMap:P,roughnessMap:A,anisotropy:U,anisotropyMap:I,clearcoat:R,clearcoatMap:W,clearcoatNormalMap:X,clearcoatRoughnessMap:ie,dispersion:O,iridescence:D,iridescenceMap:de,iridescenceThicknessMap:me,sheen:N,sheenColorMap:he,sheenRoughnessMap:Ne,specularMap:Me,specularColorMap:_e,specularIntensityMap:G,transmission:F,transmissionMap:ve,thicknessMap:oe,gradientMap:le,opaque:x.transparent===!1&&x.blending===no&&x.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:et,combine:x.combine,mapUv:Xe&&_(x.map.channel),aoMapUv:pt&&_(x.aoMap.channel),lightMapUv:Be&&_(x.lightMap.channel),bumpMapUv:Ge&&_(x.bumpMap.channel),normalMapUv:Le&&_(x.normalMap.channel),displacementMapUv:Ke&&_(x.displacementMap.channel),emissiveMapUv:ue&&_(x.emissiveMap.channel),metalnessMapUv:P&&_(x.metalnessMap.channel),roughnessMapUv:A&&_(x.roughnessMap.channel),anisotropyMapUv:I&&_(x.anisotropyMap.channel),clearcoatMapUv:W&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:X&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(x.sheenRoughnessMap.channel),specularMapUv:Me&&_(x.specularMap.channel),specularColorMapUv:_e&&_(x.specularColorMap.channel),specularIntensityMapUv:G&&_(x.specularIntensityMap.channel),transmissionMapUv:ve&&_(x.transmissionMap.channel),thicknessMapUv:oe&&_(x.thicknessMap.channel),alphaMapUv:we&&_(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Le||U),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(Xe||we),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:gn,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Lt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&x.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function v(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)T.push(B),T.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const T=M[x.type];let B;if(T){const H=Mi[T];B=mi.clone(H.uniforms)}else B=x.uniforms;return B}function w(x,T){let B;for(let H=0,q=d.length;H<q;H++){const Q=d[H];if(Q.cacheKey===T){B=Q,++B.usedTimes;break}}return B===void 0&&(B=new Y2(t,T,x,s),d.push(B)),B}function E(x){if(--x.usedTimes===0){const T=d.indexOf(x);d[T]=d[d.length-1],d.pop(),x.destroy()}}function b(x){l.remove(x)}function z(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:C,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:d,dispose:z}}function J2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function $2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function V0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function G0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,y,M,_){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:y,renderOrder:f.renderOrder,z:M,group:_},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=M,u.group=_),e++,u}function a(f,h,m,y,M,_){const u=o(f,h,m,y,M,_);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,y,M,_){const u=o(f,h,m,y,M,_);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||$2),i.length>1&&i.sort(h||V0),r.length>1&&r.sort(h||V0)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function eA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new G0,t.set(i,[o])):r>=s.length?(o=new G0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new He};break;case"SpotLight":n={position:new Y,direction:new Y,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iA=0;function rA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sA(t){const e=new tA,n=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new rt,o=new rt;function a(c){let d=0,f=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,y=0,M=0,_=0,u=0,v=0,p=0,S=0,C=0,w=0,E=0;c.sort(rA);for(let z=0,x=c.length;z<x;z++){const T=c[z],B=T.color,H=T.intensity,q=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=B.r*H,f+=B.g*H,h+=B.b*H;else if(T.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(T.sh.coefficients[j],H);E++}else if(T.isDirectionalLight){const j=e.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,k=n.get(T);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=j,m++}else if(T.isSpotLight){const j=e.get(T);j.position.setFromMatrixPosition(T.matrixWorld),j.color.copy(B).multiplyScalar(H),j.distance=q,j.coneCos=Math.cos(T.angle),j.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),j.decay=T.decay,i.spot[M]=j;const K=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,K.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[M]=K.matrix,T.castShadow){const k=n.get(T);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=Q,S++}M++}else if(T.isRectAreaLight){const j=e.get(T);j.color.copy(B).multiplyScalar(H),j.halfWidth.set(T.width*.5,0,0),j.halfHeight.set(0,T.height*.5,0),i.rectArea[_]=j,_++}else if(T.isPointLight){const j=e.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),j.distance=T.distance,j.decay=T.decay,T.castShadow){const K=T.shadow,k=n.get(T);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,i.pointShadow[y]=k,i.pointShadowMap[y]=Q,i.pointShadowMatrix[y]=T.shadow.matrix,p++}i.point[y]=j,y++}else if(T.isHemisphereLight){const j=e.get(T);j.skyColor.copy(T.color).multiplyScalar(H),j.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[u]=j,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==m||b.pointLength!==y||b.spotLength!==M||b.rectAreaLength!==_||b.hemiLength!==u||b.numDirectionalShadows!==v||b.numPointShadows!==p||b.numSpotShadows!==S||b.numSpotMaps!==C||b.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=_,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=p,i.pointShadowMap.length=p,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=p,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,b.directionalLength=m,b.pointLength=y,b.spotLength=M,b.rectAreaLength=_,b.hemiLength=u,b.numDirectionalShadows=v,b.numPointShadows=p,b.numSpotShadows=S,b.numSpotMaps=C,b.numLightProbes=E,i.version=iA++)}function l(c,d){let f=0,h=0,m=0,y=0,M=0;const _=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const p=c[u];if(p.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(p.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(p.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),m++}else if(p.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(p.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(p.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(p.width*.5,0,0),S.halfHeight.set(0,p.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(p.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(p.matrixWorld),S.position.applyMatrix4(_),h++}else if(p.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(p.matrixWorld),S.direction.transformDirection(_),M++}}}return{setup:a,setupView:l,state:i}}function W0(t){const e=new sA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new W0(t),e.set(r,[a])):s>=o.length?(a=new W0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class aA extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lA extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
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
}`;function dA(t,e,n){let i=new hp;const r=new Ue,s=new Ue,o=new ut,a=new aA({depthPacking:eM}),l=new lA,c={},d=n.maxTextureSize,f={[Cr]:hn,[hn]:Cr,[Un]:Un},h=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:cA,fragmentShader:uA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new mn;y.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Je(y,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Px;let u=this.type;this.render=function(w,E,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const z=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),B=t.state;B.setBlending(qt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=u!==ki&&this.type===ki,q=u===ki&&this.type!==ki;for(let Q=0,j=w.length;Q<j;Q++){const K=w[Q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const te=k.getFrameExtents();if(r.multiply(te),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/te.x),r.x=s.x*te.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/te.y),r.y=s.y*te.y,k.mapSize.y=s.y)),k.map===null||H===!0||q===!0){const ae=this.type!==ki?{minFilter:Gt,magFilter:Gt}:{};k.map!==null&&k.map.dispose(),k.map=new ei(r.x,r.y,ae),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const $=k.getViewportCount();for(let ae=0;ae<$;ae++){const ge=k.getViewport(ae);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),B.viewport(o),k.updateMatrices(K,ae),i=k.getFrustum(),S(E,b,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===ki&&v(k,b),k.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(z,x,T)};function v(w,E){const b=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(E,null,b,h,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(E,null,b,m,M,null)}function p(w,E,b,z){let x=null;const T=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)x=T;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=x.uuid,H=E.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let Q=q[H];Q===void 0&&(Q=x.clone(),q[H]=Q,E.addEventListener("dispose",C)),x=Q}if(x.visible=E.visible,x.wireframe=E.wireframe,z===ki?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=t.properties.get(x);B.light=b}return x}function S(w,E,b,z,x){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===ki)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const H=e.update(w),q=w.material;if(Array.isArray(q)){const Q=H.groups;for(let j=0,K=Q.length;j<K;j++){const k=Q[j],te=q[k.materialIndex];if(te&&te.visible){const $=p(w,te,z,x);w.onBeforeShadow(t,w,E,b,H,$,k),t.renderBufferDirect(b,null,H,$,w,k),w.onAfterShadow(t,w,E,b,H,$,k)}}}else if(q.visible){const Q=p(w,q,z,x);w.onBeforeShadow(t,w,E,b,H,Q,null),t.renderBufferDirect(b,null,H,Q,w,null),w.onAfterShadow(t,w,E,b,H,Q,null)}}const B=w.children;for(let H=0,q=B.length;H<q;H++)S(B[H],E,b,z,x)}function C(w){w.target.removeEventListener("dispose",C);for(const b in c){const z=c[b],x=w.target.uuid;x in z&&(z[x].dispose(),delete z[x])}}}const hA={[xh]:_h,[yh]:wh,[Sh]:Eh,[fo]:Mh,[_h]:xh,[wh]:yh,[Eh]:Sh,[Mh]:fo};function fA(t){function e(){let G=!1;const ve=new ut;let oe=null;const le=new ut(0,0,0,0);return{setMask:function(we){oe!==we&&!G&&(t.colorMask(we,we,we,we),oe=we)},setLocked:function(we){G=we},setClear:function(we,Te,et,Lt,gn){gn===!0&&(we*=Lt,Te*=Lt,et*=Lt),ve.set(we,Te,et,Lt),le.equals(ve)===!1&&(t.clearColor(we,Te,et,Lt),le.copy(ve))},reset:function(){G=!1,oe=null,le.set(-1,0,0,0)}}}function n(){let G=!1,ve=!1,oe=null,le=null,we=null;return{setReversed:function(Te){ve=Te},setTest:function(Te){Te?xe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(Te){oe!==Te&&!G&&(t.depthMask(Te),oe=Te)},setFunc:function(Te){if(ve&&(Te=hA[Te]),le!==Te){switch(Te){case xh:t.depthFunc(t.NEVER);break;case _h:t.depthFunc(t.ALWAYS);break;case yh:t.depthFunc(t.LESS);break;case fo:t.depthFunc(t.LEQUAL);break;case Sh:t.depthFunc(t.EQUAL);break;case Mh:t.depthFunc(t.GEQUAL);break;case wh:t.depthFunc(t.GREATER);break;case Eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Te}},setLocked:function(Te){G=Te},setClear:function(Te){we!==Te&&(t.clearDepth(Te),we=Te)},reset:function(){G=!1,oe=null,le=null,we=null}}}function i(){let G=!1,ve=null,oe=null,le=null,we=null,Te=null,et=null,Lt=null,gn=null;return{setTest:function(nt){G||(nt?xe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(nt){ve!==nt&&!G&&(t.stencilMask(nt),ve=nt)},setFunc:function(nt,vn,Ri){(oe!==nt||le!==vn||we!==Ri)&&(t.stencilFunc(nt,vn,Ri),oe=nt,le=vn,we=Ri)},setOp:function(nt,vn,Ri){(Te!==nt||et!==vn||Lt!==Ri)&&(t.stencilOp(nt,vn,Ri),Te=nt,et=vn,Lt=Ri)},setLocked:function(nt){G=nt},setClear:function(nt){gn!==nt&&(t.clearStencil(nt),gn=nt)},reset:function(){G=!1,ve=null,oe=null,le=null,we=null,Te=null,et=null,Lt=null,gn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,y=!1,M=null,_=null,u=null,v=null,p=null,S=null,C=null,w=new He(0,0,0),E=0,b=!1,z=null,x=null,T=null,B=null,H=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,j=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=j>=2);let k=null,te={};const $=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),ge=new ut().fromArray($),pe=new ut().fromArray(ae);function ee(G,ve,oe,le){const we=new Uint8Array(4),Te=t.createTexture();t.bindTexture(G,Te),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<oe;et++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(ve+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Te}const ne={};ne[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),s.setFunc(fo),Be(!1),Ge($m),xe(t.CULL_FACE),V(qt);function xe(G){c[G]!==!0&&(t.enable(G),c[G]=!0)}function ce(G){c[G]!==!1&&(t.disable(G),c[G]=!1)}function Ae(G,ve){return d[G]!==ve?(t.bindFramebuffer(G,ve),d[G]=ve,G===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ve),G===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function Re(G,ve){let oe=h,le=!1;if(G){oe=f.get(ve),oe===void 0&&(oe=[],f.set(ve,oe));const we=G.textures;if(oe.length!==we.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,et=we.length;Te<et;Te++)oe[Te]=t.COLOR_ATTACHMENT0+Te;oe.length=we.length,le=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,le=!0);le&&t.drawBuffers(oe)}function ke(G){return m!==G?(t.useProgram(G),m=G,!0):!1}const Xe={[fi]:t.FUNC_ADD,[US]:t.FUNC_SUBTRACT,[OS]:t.FUNC_REVERSE_SUBTRACT};Xe[kS]=t.MIN,Xe[zS]=t.MAX;const Fe={[jo]:t.ZERO,[FS]:t.ONE,[BS]:t.SRC_COLOR,[ph]:t.SRC_ALPHA,[WS]:t.SRC_ALPHA_SATURATE,[vh]:t.DST_COLOR,[gh]:t.DST_ALPHA,[HS]:t.ONE_MINUS_SRC_COLOR,[mh]:t.ONE_MINUS_SRC_ALPHA,[GS]:t.ONE_MINUS_DST_COLOR,[VS]:t.ONE_MINUS_DST_ALPHA,[jS]:t.CONSTANT_COLOR,[XS]:t.ONE_MINUS_CONSTANT_COLOR,[YS]:t.CONSTANT_ALPHA,[qS]:t.ONE_MINUS_CONSTANT_ALPHA};function V(G,ve,oe,le,we,Te,et,Lt,gn,nt){if(G===qt){y===!0&&(ce(t.BLEND),y=!1);return}if(y===!1&&(xe(t.BLEND),y=!0),G!==Dx){if(G!==M||nt!==b){if((_!==fi||p!==fi)&&(t.blendEquation(t.FUNC_ADD),_=fi,p=fi),nt)switch(G){case no:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case e0:t.blendFunc(t.ONE,t.ONE);break;case t0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case n0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case no:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case e0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case t0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case n0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}u=null,v=null,S=null,C=null,w.set(0,0,0),E=0,M=G,b=nt}return}we=we||ve,Te=Te||oe,et=et||le,(ve!==_||we!==p)&&(t.blendEquationSeparate(Xe[ve],Xe[we]),_=ve,p=we),(oe!==u||le!==v||Te!==S||et!==C)&&(t.blendFuncSeparate(Fe[oe],Fe[le],Fe[Te],Fe[et]),u=oe,v=le,S=Te,C=et),(Lt.equals(w)===!1||gn!==E)&&(t.blendColor(Lt.r,Lt.g,Lt.b,gn),w.copy(Lt),E=gn),M=G,b=!1}function pt(G,ve){G.side===Un?ce(t.CULL_FACE):xe(t.CULL_FACE);let oe=G.side===hn;ve&&(oe=!oe),Be(oe),G.blending===no&&G.transparent===!1?V(qt):V(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const le=G.stencilWrite;o.setTest(le),le&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(G){z!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),z=G)}function Ge(G){G!==NS?(xe(t.CULL_FACE),G!==x&&(G===$m?t.cullFace(t.BACK):G===IS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),x=G}function Le(G){G!==T&&(Q&&t.lineWidth(G),T=G)}function Ke(G,ve,oe){G?(xe(t.POLYGON_OFFSET_FILL),(B!==ve||H!==oe)&&(t.polygonOffset(ve,oe),B=ve,H=oe)):ce(t.POLYGON_OFFSET_FILL)}function ue(G){G?xe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function P(G){G===void 0&&(G=t.TEXTURE0+q-1),k!==G&&(t.activeTexture(G),k=G)}function A(G,ve,oe){oe===void 0&&(k===null?oe=t.TEXTURE0+q-1:oe=k);let le=te[oe];le===void 0&&(le={type:void 0,texture:void 0},te[oe]=le),(le.type!==G||le.texture!==ve)&&(k!==oe&&(t.activeTexture(oe),k=oe),t.bindTexture(G,ve||ne[G]),le.type=G,le.texture=ve)}function U(){const G=te[k];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function R(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function D(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function F(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function I(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(G){ge.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function he(G){pe.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),pe.copy(G))}function Ne(G,ve){let oe=l.get(ve);oe===void 0&&(oe=new WeakMap,l.set(ve,oe));let le=oe.get(G);le===void 0&&(le=t.getUniformBlockIndex(ve,G.name),oe.set(G,le))}function Me(G,ve){const le=l.get(ve).get(G);a.get(ve)!==le&&(t.uniformBlockBinding(ve,le,G.__bindingPointIndex),a.set(ve,le))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,te={},d={},f=new WeakMap,h=[],m=null,y=!1,M=null,_=null,u=null,v=null,p=null,S=null,C=null,w=new He(0,0,0),E=0,b=!1,z=null,x=null,T=null,B=null,H=null,ge.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xe,disable:ce,bindFramebuffer:Ae,drawBuffers:Re,useProgram:ke,setBlending:V,setMaterial:pt,setFlipSided:Be,setCullFace:Ge,setLineWidth:Le,setPolygonOffset:Ke,setScissorTest:ue,activeTexture:P,bindTexture:A,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:O,texImage2D:ie,texImage3D:de,updateUBOMapping:Ne,uniformBlockBinding:Me,texStorage2D:W,texStorage3D:X,texSubImage2D:D,texSubImage3D:N,compressedTexSubImage2D:F,compressedTexSubImage3D:I,scissor:me,viewport:he,reset:_e}}function j0(t,e,n,i){const r=pA(i);switch(n){case Gx:return t*e;case jx:return t*e;case Xx:return t*e*2;case Yx:return t*e/r.components*r.byteLength;case op:return t*e/r.components*r.byteLength;case qx:return t*e*2/r.components*r.byteLength;case ap:return t*e*2/r.components*r.byteLength;case Wx:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case lp:return t*e*4/r.components*r.byteLength;case Fl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Ph:return Math.max(t,16)*Math.max(e,8)/4;case bh:case Rh:return Math.max(t,8)*Math.max(e,8)/2;case Lh:case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gl:case qh:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kx:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qh:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pA(t){switch(t){case bi:case Bx:return{byteLength:1,components:1};case Sa:case Hx:case En:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case ss:case ip:case Kn:return{byteLength:4,components:1};case Vx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function mA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,A){return m?new OffscreenCanvas(P,A):Ma("canvas")}function M(P,A,U){let R=1;const O=ue(P);if((O.width>U||O.height>U)&&(R=U/Math.max(O.width,O.height)),R<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const D=Math.floor(R*O.width),N=Math.floor(R*O.height);f===void 0&&(f=y(D,N));const F=A?y(D,N):f;return F.width=D,F.height=N,F.getContext("2d").drawImage(P,0,0,D,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+D+"x"+N+")."),F}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),P;return P}function _(P){return P.generateMipmaps&&P.minFilter!==Gt&&P.minFilter!==Kt}function u(P){t.generateMipmap(P)}function v(P,A,U,R,O=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let D=A;if(A===t.RED&&(U===t.FLOAT&&(D=t.R32F),U===t.HALF_FLOAT&&(D=t.R16F),U===t.UNSIGNED_BYTE&&(D=t.R8)),A===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(D=t.R8UI),U===t.UNSIGNED_SHORT&&(D=t.R16UI),U===t.UNSIGNED_INT&&(D=t.R32UI),U===t.BYTE&&(D=t.R8I),U===t.SHORT&&(D=t.R16I),U===t.INT&&(D=t.R32I)),A===t.RG&&(U===t.FLOAT&&(D=t.RG32F),U===t.HALF_FLOAT&&(D=t.RG16F),U===t.UNSIGNED_BYTE&&(D=t.RG8)),A===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(D=t.RG8UI),U===t.UNSIGNED_SHORT&&(D=t.RG16UI),U===t.UNSIGNED_INT&&(D=t.RG32UI),U===t.BYTE&&(D=t.RG8I),U===t.SHORT&&(D=t.RG16I),U===t.INT&&(D=t.RG32I)),A===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(D=t.RGB8UI),U===t.UNSIGNED_SHORT&&(D=t.RGB16UI),U===t.UNSIGNED_INT&&(D=t.RGB32UI),U===t.BYTE&&(D=t.RGB8I),U===t.SHORT&&(D=t.RGB16I),U===t.INT&&(D=t.RGB32I)),A===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(D=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(D=t.RGBA16UI),U===t.UNSIGNED_INT&&(D=t.RGBA32UI),U===t.BYTE&&(D=t.RGBA8I),U===t.SHORT&&(D=t.RGBA16I),U===t.INT&&(D=t.RGBA32I)),A===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(D=t.RGB9_E5),A===t.RGBA){const N=O?_c:it.getTransfer(R);U===t.FLOAT&&(D=t.RGBA32F),U===t.HALF_FLOAT&&(D=t.RGBA16F),U===t.UNSIGNED_BYTE&&(D=N===ht?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(D=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(D=t.RGB5_A1)}return(D===t.R16F||D===t.R32F||D===t.RG16F||D===t.RG32F||D===t.RGBA16F||D===t.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function p(P,A){let U;return P?A===null||A===ss||A===os?U=t.DEPTH24_STENCIL8:A===Kn?U=t.DEPTH32F_STENCIL8:A===Sa&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ss||A===os?U=t.DEPTH_COMPONENT24:A===Kn?U=t.DEPTH_COMPONENT32F:A===Sa&&(U=t.DEPTH_COMPONENT16),U}function S(P,A){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gt&&P.minFilter!==Kt?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function C(P){const A=P.target;A.removeEventListener("dispose",C),E(A),A.isVideoTexture&&d.delete(A)}function w(P){const A=P.target;A.removeEventListener("dispose",w),z(A)}function E(P){const A=i.get(P);if(A.__webglInit===void 0)return;const U=P.source,R=h.get(U);if(R){const O=R[A.__cacheKey];O.usedTimes--,O.usedTimes===0&&b(P),Object.keys(R).length===0&&h.delete(U)}i.remove(P)}function b(P){const A=i.get(P);t.deleteTexture(A.__webglTexture);const U=P.source,R=h.get(U);delete R[A.__cacheKey],o.memory.textures--}function z(P){const A=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(A.__webglFramebuffer[R]))for(let O=0;O<A.__webglFramebuffer[R].length;O++)t.deleteFramebuffer(A.__webglFramebuffer[R][O]);else t.deleteFramebuffer(A.__webglFramebuffer[R]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[R])}else{if(Array.isArray(A.__webglFramebuffer))for(let R=0;R<A.__webglFramebuffer.length;R++)t.deleteFramebuffer(A.__webglFramebuffer[R]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let R=0;R<A.__webglColorRenderbuffer.length;R++)A.__webglColorRenderbuffer[R]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[R]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const U=P.textures;for(let R=0,O=U.length;R<O;R++){const D=i.get(U[R]);D.__webglTexture&&(t.deleteTexture(D.__webglTexture),o.memory.textures--),i.remove(U[R])}i.remove(P)}let x=0;function T(){x=0}function B(){const P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function H(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function q(P,A){const U=i.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const R=P.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,P,A);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+A)}function Q(P,A){const U=i.get(P);if(P.version>0&&U.__version!==P.version){pe(U,P,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+A)}function j(P,A){const U=i.get(P);if(P.version>0&&U.__version!==P.version){pe(U,P,A);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+A)}function K(P,A){const U=i.get(P);if(P.version>0&&U.__version!==P.version){ee(U,P,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+A)}const k={[On]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Ah]:t.MIRRORED_REPEAT},te={[Gt]:t.NEAREST,[JS]:t.NEAREST_MIPMAP_NEAREST,[Za]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},$={[nM]:t.NEVER,[lM]:t.ALWAYS,[iM]:t.LESS,[Zx]:t.LEQUAL,[rM]:t.EQUAL,[aM]:t.GEQUAL,[sM]:t.GREATER,[oM]:t.NOTEQUAL};function ae(P,A){if(A.type===Kn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Kt||A.magFilter===Nu||A.magFilter===Za||A.magFilter===gr||A.minFilter===Kt||A.minFilter===Nu||A.minFilter===Za||A.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,k[A.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,k[A.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,k[A.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,te[A.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,te[A.minFilter]),A.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Gt||A.minFilter!==Za&&A.minFilter!==gr||A.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ge(P,A){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",C));const R=A.source;let O=h.get(R);O===void 0&&(O={},h.set(R,O));const D=H(A);if(D!==P.__cacheKey){O[D]===void 0&&(O[D]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),O[D].usedTimes++;const N=O[P.__cacheKey];N!==void 0&&(O[P.__cacheKey].usedTimes--,N.usedTimes===0&&b(A)),P.__cacheKey=D,P.__webglTexture=O[D].texture}return U}function pe(P,A,U){let R=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(R=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(R=t.TEXTURE_3D);const O=ge(P,A),D=A.source;n.bindTexture(R,P.__webglTexture,t.TEXTURE0+U);const N=i.get(D);if(D.version!==N.__version||O===!0){n.activeTexture(t.TEXTURE0+U);const F=it.getPrimaries(it.workingColorSpace),I=A.colorSpace===fr?null:it.getPrimaries(A.colorSpace),W=A.colorSpace===fr||F===I?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let X=M(A.image,!1,r.maxTextureSize);X=Ke(A,X);const ie=s.convert(A.format,A.colorSpace),de=s.convert(A.type);let me=v(A.internalFormat,ie,de,A.colorSpace,A.isVideoTexture);ae(R,A);let he;const Ne=A.mipmaps,Me=A.isVideoTexture!==!0,_e=N.__version===void 0||O===!0,G=D.dataReady,ve=S(A,X);if(A.isDepthTexture)me=p(A.format===as,A.type),_e&&(Me?n.texStorage2D(t.TEXTURE_2D,1,me,X.width,X.height):n.texImage2D(t.TEXTURE_2D,0,me,X.width,X.height,0,ie,de,null));else if(A.isDataTexture)if(Ne.length>0){Me&&_e&&n.texStorage2D(t.TEXTURE_2D,ve,me,Ne[0].width,Ne[0].height);for(let oe=0,le=Ne.length;oe<le;oe++)he=Ne[oe],Me?G&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,he.width,he.height,ie,de,he.data):n.texImage2D(t.TEXTURE_2D,oe,me,he.width,he.height,0,ie,de,he.data);A.generateMipmaps=!1}else Me?(_e&&n.texStorage2D(t.TEXTURE_2D,ve,me,X.width,X.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,X.width,X.height,ie,de,X.data)):n.texImage2D(t.TEXTURE_2D,0,me,X.width,X.height,0,ie,de,X.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Me&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,me,Ne[0].width,Ne[0].height,X.depth);for(let oe=0,le=Ne.length;oe<le;oe++)if(he=Ne[oe],A.format!==Zn)if(ie!==null)if(Me){if(G)if(A.layerUpdates.size>0){const we=j0(he.width,he.height,A.format,A.type);for(const Te of A.layerUpdates){const et=he.data.subarray(Te*we/he.data.BYTES_PER_ELEMENT,(Te+1)*we/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Te,he.width,he.height,1,ie,et,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,he.width,he.height,X.depth,ie,he.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,me,he.width,he.height,X.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,he.width,he.height,X.depth,ie,de,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,me,he.width,he.height,X.depth,0,ie,de,he.data)}else{Me&&_e&&n.texStorage2D(t.TEXTURE_2D,ve,me,Ne[0].width,Ne[0].height);for(let oe=0,le=Ne.length;oe<le;oe++)he=Ne[oe],A.format!==Zn?ie!==null?Me?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,he.width,he.height,ie,he.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?G&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,he.width,he.height,ie,de,he.data):n.texImage2D(t.TEXTURE_2D,oe,me,he.width,he.height,0,ie,de,he.data)}else if(A.isDataArrayTexture)if(Me){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,me,X.width,X.height,X.depth),G)if(A.layerUpdates.size>0){const oe=j0(X.width,X.height,A.format,A.type);for(const le of A.layerUpdates){const we=X.data.subarray(le*oe/X.data.BYTES_PER_ELEMENT,(le+1)*oe/X.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,X.width,X.height,1,ie,de,we)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ie,de,X.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,X.width,X.height,X.depth,0,ie,de,X.data);else if(A.isData3DTexture)Me?(_e&&n.texStorage3D(t.TEXTURE_3D,ve,me,X.width,X.height,X.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ie,de,X.data)):n.texImage3D(t.TEXTURE_3D,0,me,X.width,X.height,X.depth,0,ie,de,X.data);else if(A.isFramebufferTexture){if(_e)if(Me)n.texStorage2D(t.TEXTURE_2D,ve,me,X.width,X.height);else{let oe=X.width,le=X.height;for(let we=0;we<ve;we++)n.texImage2D(t.TEXTURE_2D,we,me,oe,le,0,ie,de,null),oe>>=1,le>>=1}}else if(Ne.length>0){if(Me&&_e){const oe=ue(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ve,me,oe.width,oe.height)}for(let oe=0,le=Ne.length;oe<le;oe++)he=Ne[oe],Me?G&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ie,de,he):n.texImage2D(t.TEXTURE_2D,oe,me,ie,de,he);A.generateMipmaps=!1}else if(Me){if(_e){const oe=ue(X);n.texStorage2D(t.TEXTURE_2D,ve,me,oe.width,oe.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie,de,X)}else n.texImage2D(t.TEXTURE_2D,0,me,ie,de,X);_(A)&&u(R),N.__version=D.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ee(P,A,U){if(A.image.length!==6)return;const R=ge(P,A),O=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+U);const D=i.get(O);if(O.version!==D.__version||R===!0){n.activeTexture(t.TEXTURE0+U);const N=it.getPrimaries(it.workingColorSpace),F=A.colorSpace===fr?null:it.getPrimaries(A.colorSpace),I=A.colorSpace===fr||N===F?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const W=A.isCompressedTexture||A.image[0].isCompressedTexture,X=A.image[0]&&A.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!W&&!X?ie[le]=M(A.image[le],!0,r.maxCubemapSize):ie[le]=X?A.image[le].image:A.image[le],ie[le]=Ke(A,ie[le]);const de=ie[0],me=s.convert(A.format,A.colorSpace),he=s.convert(A.type),Ne=v(A.internalFormat,me,he,A.colorSpace),Me=A.isVideoTexture!==!0,_e=D.__version===void 0||R===!0,G=O.dataReady;let ve=S(A,de);ae(t.TEXTURE_CUBE_MAP,A);let oe;if(W){Me&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ne,de.width,de.height);for(let le=0;le<6;le++){oe=ie[le].mipmaps;for(let we=0;we<oe.length;we++){const Te=oe[we];A.format!==Zn?me!==null?Me?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Te.width,Te.height,me,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Te.width,Te.height,me,he,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,Ne,Te.width,Te.height,0,me,he,Te.data)}}}else{if(oe=A.mipmaps,Me&&_e){oe.length>0&&ve++;const le=ue(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ne,le.width,le.height)}for(let le=0;le<6;le++)if(X){Me?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,me,he,ie[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ne,ie[le].width,ie[le].height,0,me,he,ie[le].data);for(let we=0;we<oe.length;we++){const et=oe[we].image[le].image;Me?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,et.width,et.height,me,he,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,Ne,et.width,et.height,0,me,he,et.data)}}else{Me?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,me,he,ie[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ne,me,he,ie[le]);for(let we=0;we<oe.length;we++){const Te=oe[we];Me?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,me,he,Te.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,Ne,me,he,Te.image[le])}}}_(A)&&u(t.TEXTURE_CUBE_MAP),D.__version=O.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ne(P,A,U,R,O,D){const N=s.convert(U.format,U.colorSpace),F=s.convert(U.type),I=v(U.internalFormat,N,F,U.colorSpace);if(!i.get(A).__hasExternalTextures){const X=Math.max(1,A.width>>D),ie=Math.max(1,A.height>>D);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,D,I,X,ie,A.depth,0,N,F,null):n.texImage2D(O,D,I,X,ie,0,N,F,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ge(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,R,O,i.get(U).__webglTexture,0,Be(A)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,R,O,i.get(U).__webglTexture,D),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(P,A,U){if(t.bindRenderbuffer(t.RENDERBUFFER,P),A.depthBuffer){const R=A.depthTexture,O=R&&R.isDepthTexture?R.type:null,D=p(A.stencilBuffer,O),N=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=Be(A);Ge(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,D,A.width,A.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,D,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,D,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,P)}else{const R=A.textures;for(let O=0;O<R.length;O++){const D=R[O],N=s.convert(D.format,D.colorSpace),F=s.convert(D.type),I=v(D.internalFormat,N,F,D.colorSpace),W=Be(A);U&&Ge(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,W,I,A.width,A.height):Ge(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,W,I,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,I,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),q(A.depthTexture,0);const R=i.get(A.depthTexture).__webglTexture,O=Be(A);if(A.depthTexture.format===io)Ge(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,R,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,R,0);else if(A.depthTexture.format===as)Ge(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,R,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function Ae(P){const A=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const R=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),R){const O=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,R.removeEventListener("dispose",O)};R.addEventListener("dispose",O),A.__depthDisposeCallback=O}A.__boundDepthTexture=R}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ce(A.__webglFramebuffer,P)}else if(U){A.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[R]),A.__webglDepthbuffer[R]===void 0)A.__webglDepthbuffer[R]=t.createRenderbuffer(),xe(A.__webglDepthbuffer[R],P,!1);else{const O=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=A.__webglDepthbuffer[R];t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,D)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),xe(A.__webglDepthbuffer,P,!1);else{const R=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,O),t.framebufferRenderbuffer(t.FRAMEBUFFER,R,t.RENDERBUFFER,O)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(P,A,U){const R=i.get(P);A!==void 0&&ne(R.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ae(P)}function ke(P){const A=P.texture,U=i.get(P),R=i.get(A);P.addEventListener("dispose",w);const O=P.textures,D=P.isWebGLCubeRenderTarget===!0,N=O.length>1;if(N||(R.__webglTexture===void 0&&(R.__webglTexture=t.createTexture()),R.__version=A.version,o.memory.textures++),D){U.__webglFramebuffer=[];for(let F=0;F<6;F++)if(A.mipmaps&&A.mipmaps.length>0){U.__webglFramebuffer[F]=[];for(let I=0;I<A.mipmaps.length;I++)U.__webglFramebuffer[F][I]=t.createFramebuffer()}else U.__webglFramebuffer[F]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){U.__webglFramebuffer=[];for(let F=0;F<A.mipmaps.length;F++)U.__webglFramebuffer[F]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(N)for(let F=0,I=O.length;F<I;F++){const W=i.get(O[F]);W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Ge(P)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let F=0;F<O.length;F++){const I=O[F];U.__webglColorRenderbuffer[F]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[F]);const W=s.convert(I.format,I.colorSpace),X=s.convert(I.type),ie=v(I.internalFormat,W,X,I.colorSpace,P.isXRRenderTarget===!0),de=Be(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ie,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+F,t.RENDERBUFFER,U.__webglColorRenderbuffer[F])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(U.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(D){n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture),ae(t.TEXTURE_CUBE_MAP,A);for(let F=0;F<6;F++)if(A.mipmaps&&A.mipmaps.length>0)for(let I=0;I<A.mipmaps.length;I++)ne(U.__webglFramebuffer[F][I],P,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+F,I);else ne(U.__webglFramebuffer[F],P,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);_(A)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(N){for(let F=0,I=O.length;F<I;F++){const W=O[F],X=i.get(W);n.bindTexture(t.TEXTURE_2D,X.__webglTexture),ae(t.TEXTURE_2D,W),ne(U.__webglFramebuffer,P,W,t.COLOR_ATTACHMENT0+F,t.TEXTURE_2D,0),_(W)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let F=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(F=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(F,R.__webglTexture),ae(F,A),A.mipmaps&&A.mipmaps.length>0)for(let I=0;I<A.mipmaps.length;I++)ne(U.__webglFramebuffer[I],P,A,t.COLOR_ATTACHMENT0,F,I);else ne(U.__webglFramebuffer,P,A,t.COLOR_ATTACHMENT0,F,0);_(A)&&u(F),n.unbindTexture()}P.depthBuffer&&Ae(P)}function Xe(P){const A=P.textures;for(let U=0,R=A.length;U<R;U++){const O=A[U];if(_(O)){const D=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,N=i.get(O).__webglTexture;n.bindTexture(D,N),u(D),n.unbindTexture()}}}const Fe=[],V=[];function pt(P){if(P.samples>0){if(Ge(P)===!1){const A=P.textures,U=P.width,R=P.height;let O=t.COLOR_BUFFER_BIT;const D=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=i.get(P),F=A.length>1;if(F)for(let I=0;I<A.length;I++)n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+I,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,N.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+I,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let I=0;I<A.length;I++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),F){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,N.__webglColorRenderbuffer[I]);const W=i.get(A[I]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,W,0)}t.blitFramebuffer(0,0,U,R,0,0,U,R,O,t.NEAREST),l===!0&&(Fe.length=0,V.length=0,Fe.push(t.COLOR_ATTACHMENT0+I),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(D),V.push(D),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,V)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),F)for(let I=0;I<A.length;I++){n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+I,t.RENDERBUFFER,N.__webglColorRenderbuffer[I]);const W=i.get(A[I]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,N.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+I,t.TEXTURE_2D,W,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const A=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Be(P){return Math.min(r.maxSamples,P.samples)}function Ge(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Le(P){const A=o.render.frame;d.get(P)!==A&&(d.set(P,A),P.update())}function Ke(P,A){const U=P.colorSpace,R=P.format,O=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==$i&&U!==fr&&(it.getTransfer(U)===ht?(R!==Zn||O!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),A}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=T,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Re,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ge}function gA(t,e){function n(i,r=fr){let s;const o=it.getTransfer(r);if(i===bi)return t.UNSIGNED_BYTE;if(i===rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bx)return t.BYTE;if(i===Hx)return t.SHORT;if(i===Sa)return t.UNSIGNED_SHORT;if(i===ip)return t.INT;if(i===ss)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===En)return t.HALF_FLOAT;if(i===Gx)return t.ALPHA;if(i===Wx)return t.RGB;if(i===Zn)return t.RGBA;if(i===jx)return t.LUMINANCE;if(i===Xx)return t.LUMINANCE_ALPHA;if(i===io)return t.DEPTH_COMPONENT;if(i===as)return t.DEPTH_STENCIL;if(i===Yx)return t.RED;if(i===op)return t.RED_INTEGER;if(i===qx)return t.RG;if(i===ap)return t.RG_INTEGER;if(i===lp)return t.RGBA_INTEGER;if(i===Fl||i===Bl||i===Hl||i===Vl)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bh||i===Ch||i===Rh||i===Ph)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lh||i===Dh||i===Nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lh||i===Dh)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Uh||i===Oh||i===kh||i===zh||i===Fh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh||i===Xh||i===Yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ih)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===qh||i===Kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gl)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kx||i===Zh||i===Qh||i===Jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class vA extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const _=n.getJointPose(M,i),u=this._getHandJoint(c,M);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class SA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ot({vertexShader:_A,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Je(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,y=null;const M=new SA,_=n.getContextAttributes();let u=null,v=null;const p=[],S=[],C=new Ue;let w=null;const E=new In;E.layers.enable(1),E.viewport=new ut;const b=new In;b.layers.enable(2),b.viewport=new ut;const z=[E,b],x=new vA;x.layers.enable(1),x.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=p[ee];return ne===void 0&&(ne=new ld,p[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=p[ee];return ne===void 0&&(ne=new ld,p[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=p[ee];return ne===void 0&&(ne=new ld,p[ee]=ne),ne.getHandSpace()};function H(ee){const ne=S.indexOf(ee.inputSource);if(ne===-1)return;const xe=p[ne];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||o),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<p.length;ee++){const ne=S[ee];ne!==null&&(S[ee]=null,p[ee].disconnect(ne))}T=null,B=null,M.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,v=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ei(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,xe=null,ce=null;_.depth&&(ce=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=_.stencil?as:io,xe=_.stencil?os:ss);const Ae={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ei(h.textureWidth,h.textureHeight,{format:Zn,type:bi,depthTexture:new mp(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(ee){for(let ne=0;ne<ee.removed.length;ne++){const xe=ee.removed[ne],ce=S.indexOf(xe);ce>=0&&(S[ce]=null,p[ce].disconnect(xe))}for(let ne=0;ne<ee.added.length;ne++){const xe=ee.added[ne];let ce=S.indexOf(xe);if(ce===-1){for(let Re=0;Re<p.length;Re++)if(Re>=S.length){S.push(xe),ce=Re;break}else if(S[Re]===null){S[Re]=xe,ce=Re;break}if(ce===-1)break}const Ae=p[ce];Ae&&Ae.connect(xe)}}const j=new Y,K=new Y;function k(ee,ne,xe){j.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const ce=j.distanceTo(K),Ae=ne.projectionMatrix.elements,Re=xe.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),Xe=Ae[14]/(Ae[10]+1),Fe=(Ae[9]+1)/Ae[5],V=(Ae[9]-1)/Ae[5],pt=(Ae[8]-1)/Ae[0],Be=(Re[8]+1)/Re[0],Ge=ke*pt,Le=ke*Be,Ke=ce/(-pt+Be),ue=Ke*-pt;if(ne.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ue),ee.translateZ(Ke),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const P=ke+Ke,A=Xe+Ke,U=Ge-ue,R=Le+(ce-ue),O=Fe*Xe/A*P,D=V*Xe/A*P;ee.projectionMatrix.makePerspective(U,R,O,D,P,A),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function te(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ne=ee.near,xe=ee.far;M.texture!==null&&(M.depthNear>0&&(ne=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),x.near=b.near=E.near=ne,x.far=b.far=E.far=xe,(T!==x.near||B!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,B=x.far);const ce=ee.parent,Ae=x.cameras;te(x,ce);for(let Re=0;Re<Ae.length;Re++)te(Ae[Re],ce);Ae.length===2?k(x,E,b):x.projectionMatrix.copy(E.projectionMatrix),$(ee,x,ce)};function $(ee,ne,xe){xe===null?ee.matrix.copy(ne.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ne.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=$h*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let ae=null;function ge(ee,ne){if(d=ne.getViewerPose(c||o),y=ne,d!==null){const xe=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ce=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Re=0;Re<xe.length;Re++){const ke=xe[Re];let Xe=null;if(m!==null)Xe=m.getViewport(ke);else{const V=f.getViewSubImage(h,ke);Xe=V.viewport,Re===0&&(e.setRenderTargetTextures(v,V.colorTexture,h.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(v))}let Fe=z[Re];Fe===void 0&&(Fe=new In,Fe.layers.enable(Re),Fe.viewport=new ut,z[Re]=Fe),Fe.matrix.fromArray(ke.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ke.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Re===0&&(x.matrix.copy(Fe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Fe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Re=f.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&M.init(e,Re,r.renderState)}}for(let xe=0;xe<p.length;xe++){const ce=S[xe],Ae=p[xe];ce!==null&&Ae!==void 0&&Ae.update(ce,ne,c||o)}ae&&ae(ee,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),y=null}const pe=new o_;pe.setAnimationLoop(ge),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}}const Br=new Ci,wA=new rt;function EA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,i_(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,p,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),f(_,u)):u.isMeshPhongMaterial?(s(_,u),d(_,u)):u.isMeshStandardMaterial?(s(_,u),h(_,u),u.isMeshPhysicalMaterial&&m(_,u,S)):u.isMeshMatcapMaterial?(s(_,u),y(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),M(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,p):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===hn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===hn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),p=v.envMap,S=v.envMapRotation;p&&(_.envMap.value=p,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(Br)),_.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,p){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=p*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function f(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function h(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function m(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,u){u.matcap&&(_.matcap.value=u.matcap)}function M(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,p){const S=p.program;i.uniformBlockBinding(v,S)}function c(v,p){let S=r[v.id];S===void 0&&(y(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",_));const C=p.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function d(v){const p=f();v.__bindingPointIndex=p;const S=t.createBuffer(),C=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const p=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let w=0,E=S.length;w<E;w++){const b=Array.isArray(S[w])?S[w]:[S[w]];for(let z=0,x=b.length;z<x;z++){const T=b[z];if(m(T,w,z,C)===!0){const B=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let q=0;for(let Q=0;Q<H.length;Q++){const j=H[Q],K=M(j);typeof j=="number"||typeof j=="boolean"?(T.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,B+q,T.__data)):j.isMatrix3?(T.__data[0]=j.elements[0],T.__data[1]=j.elements[1],T.__data[2]=j.elements[2],T.__data[3]=0,T.__data[4]=j.elements[3],T.__data[5]=j.elements[4],T.__data[6]=j.elements[5],T.__data[7]=0,T.__data[8]=j.elements[6],T.__data[9]=j.elements[7],T.__data[10]=j.elements[8],T.__data[11]=0):(j.toArray(T.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,p,S,C){const w=v.value,E=p+"_"+S;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const b=C[E];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[E]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function y(v){const p=v.uniforms;let S=0;const C=16;for(let E=0,b=p.length;E<b;E++){const z=Array.isArray(p[E])?p[E]:[p[E]];for(let x=0,T=z.length;x<T;x++){const B=z[x],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Q=H.length;q<Q;q++){const j=H[q],K=M(j),k=S%C,te=k%K.boundary,$=k+te;S+=te,$!==0&&C-$<K.storage&&(S+=C-$),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=K.storage}}}const w=S%C;return w>0&&(S+=C-w),v.__size=S,v.__cache={},this}function M(v){const p={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(p.boundary=4,p.storage=4):v.isVector2?(p.boundary=8,p.storage=8):v.isVector3||v.isColor?(p.boundary=16,p.storage=12):v.isVector4?(p.boundary=16,p.storage=16):v.isMatrix3?(p.boundary=48,p.storage=48):v.isMatrix4?(p.boundary=64,p.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),p}function _(v){const p=v.target;p.removeEventListener("dispose",_);const S=o.indexOf(p.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class AA{constructor(e={}){const{canvas:n=dM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),y=new Int32Array(4);let M=null,_=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Tr,this.toneMappingExposure=1;const p=this;let S=!1,C=0,w=0,E=null,b=-1,z=null;const x=new ut,T=new ut;let B=null;const H=new He(0);let q=0,Q=n.width,j=n.height,K=1,k=null,te=null;const $=new ut(0,0,Q,j),ae=new ut(0,0,Q,j);let ge=!1;const pe=new hp;let ee=!1,ne=!1;const xe=new rt,ce=new rt,Ae=new Y,Re=new ut,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Fe(){return E===null?K:1}let V=i;function pt(L,Z){return n.getContext(L,Z)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Te,!1),V===null){const Z="webgl2";if(V=pt(Z,L),V===null)throw pt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Be,Ge,Le,Ke,ue,P,A,U,R,O,D,N,F,I,W,X,ie,de,me,he,Ne,Me,_e,G;function ve(){Be=new LT(V),Be.init(),Me=new gA(V,Be),Ge=new TT(V,Be,e,Me),Le=new fA(V),Ge.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),Ke=new IT(V),ue=new J2,P=new mA(V,Be,Le,ue,Ge,Me,Ke),A=new bT(p),U=new PT(p),R=new HM(V),_e=new wT(V,R),O=new DT(V,R,Ke,_e),D=new OT(V,O,R,Ke),me=new UT(V,Ge,P),X=new AT(ue),N=new Q2(p,A,U,Be,Ge,_e,X),F=new EA(p,ue),I=new eA,W=new oA(Be),de=new MT(p,A,U,Le,D,h,l),ie=new dA(p,D,Ge),G=new TA(V,Ke,Ge,Le),he=new ET(V,Be,Ke),Ne=new NT(V,Be,Ke),Ke.programs=N.programs,p.capabilities=Ge,p.extensions=Be,p.properties=ue,p.renderLists=I,p.shadowMap=ie,p.state=Le,p.info=Ke}ve();const oe=new MA(p,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=Be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(Q,j,!1))},this.getSize=function(L){return L.set(Q,j)},this.setSize=function(L,Z,re=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=L,j=Z,n.width=Math.floor(L*K),n.height=Math.floor(Z*K),re===!0&&(n.style.width=L+"px",n.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(Q*K,j*K).floor()},this.setDrawingBufferSize=function(L,Z,re){Q=L,j=Z,K=re,n.width=Math.floor(L*re),n.height=Math.floor(Z*re),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(x)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,Z,re,se){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,Z,re,se),Le.viewport(x.copy($).multiplyScalar(K).round())},this.getScissor=function(L){return L.copy(ae)},this.setScissor=function(L,Z,re,se){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,Z,re,se),Le.scissor(T.copy(ae).multiplyScalar(K).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(L){Le.setScissorTest(ge=L)},this.setOpaqueSort=function(L){k=L},this.setTransparentSort=function(L){te=L},this.getClearColor=function(L){return L.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(L=!0,Z=!0,re=!0){let se=0;if(L){let J=!1;if(E!==null){const ye=E.texture.format;J=ye===lp||ye===ap||ye===op}if(J){const ye=E.texture.type,Ee=ye===bi||ye===ss||ye===Sa||ye===os||ye===rp||ye===sp,De=de.getClearColor(),Ie=de.getClearAlpha(),Ve=De.r,We=De.g,Oe=De.b;Ee?(m[0]=Ve,m[1]=We,m[2]=Oe,m[3]=Ie,V.clearBufferuiv(V.COLOR,0,m)):(y[0]=Ve,y[1]=We,y[2]=Oe,y[3]=Ie,V.clearBufferiv(V.COLOR,0,y))}else se|=V.COLOR_BUFFER_BIT}Z&&(se|=V.DEPTH_BUFFER_BIT,V.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),re&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),I.dispose(),W.dispose(),ue.dispose(),A.dispose(),U.dispose(),D.dispose(),_e.dispose(),G.dispose(),N.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ap),oe.removeEventListener("sessionend",bp),Dr.stop()};function le(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=Ke.autoReset,Z=ie.enabled,re=ie.autoUpdate,se=ie.needsUpdate,J=ie.type;ve(),Ke.autoReset=L,ie.enabled=Z,ie.autoUpdate=re,ie.needsUpdate=se,ie.type=J}function Te(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function et(L){const Z=L.target;Z.removeEventListener("dispose",et),Lt(Z)}function Lt(L){gn(L),ue.remove(L)}function gn(L){const Z=ue.get(L).programs;Z!==void 0&&(Z.forEach(function(re){N.releaseProgram(re)}),L.isShaderMaterial&&N.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,re,se,J,ye){Z===null&&(Z=ke);const Ee=J.isMesh&&J.matrixWorld.determinant()<0,De=__(L,Z,re,se,J);Le.setMaterial(se,Ee);let Ie=re.index,Ve=1;if(se.wireframe===!0){if(Ie=O.getWireframeAttribute(re),Ie===void 0)return;Ve=2}const We=re.drawRange,Oe=re.attributes.position;let at=We.start*Ve,mt=(We.start+We.count)*Ve;ye!==null&&(at=Math.max(at,ye.start*Ve),mt=Math.min(mt,(ye.start+ye.count)*Ve)),Ie!==null?(at=Math.max(at,0),mt=Math.min(mt,Ie.count)):Oe!=null&&(at=Math.max(at,0),mt=Math.min(mt,Oe.count));const Mt=mt-at;if(Mt<0||Mt===1/0)return;_e.setup(J,se,De,re,Ie);let Cn,st=he;if(Ie!==null&&(Cn=R.get(Ie),st=Ne,st.setIndex(Cn)),J.isMesh)se.wireframe===!0?(Le.setLineWidth(se.wireframeLinewidth*Fe()),st.setMode(V.LINES)):st.setMode(V.TRIANGLES);else if(J.isLine){let ze=se.linewidth;ze===void 0&&(ze=1),Le.setLineWidth(ze*Fe()),J.isLineSegments?st.setMode(V.LINES):J.isLineLoop?st.setMode(V.LINE_LOOP):st.setMode(V.LINE_STRIP)}else J.isPoints?st.setMode(V.POINTS):J.isSprite&&st.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)st.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))st.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ze=J._multiDrawStarts,Xt=J._multiDrawCounts,ot=J._multiDrawCount,ti=Ie?R.get(Ie).bytesPerElement:1,gs=ue.get(se).currentProgram.getUniforms();for(let Rn=0;Rn<ot;Rn++)gs.setValue(V,"_gl_DrawID",Rn),st.render(ze[Rn]/ti,Xt[Rn])}else if(J.isInstancedMesh)st.renderInstances(at,Mt,J.count);else if(re.isInstancedBufferGeometry){const ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,ze);st.renderInstances(at,Mt,Xt)}else st.render(at,Mt)};function nt(L,Z,re){L.transparent===!0&&L.side===Un&&L.forceSinglePass===!1?(L.side=hn,L.needsUpdate=!0,Da(L,Z,re),L.side=Cr,L.needsUpdate=!0,Da(L,Z,re),L.side=Un):Da(L,Z,re)}this.compile=function(L,Z,re=null){re===null&&(re=L),_=W.get(re),_.init(Z),v.push(_),re.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),L!==re&&L.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const se=new Set;return L.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const ye=J.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const De=ye[Ee];nt(De,re,J),se.add(De)}else nt(ye,re,J),se.add(ye)}),v.pop(),_=null,se},this.compileAsync=function(L,Z,re=null){const se=this.compile(L,Z,re);return new Promise(J=>{function ye(){if(se.forEach(function(Ee){ue.get(Ee).currentProgram.isReady()&&se.delete(Ee)}),se.size===0){J(L);return}setTimeout(ye,10)}Be.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vn=null;function Ri(L){vn&&vn(L)}function Ap(){Dr.stop()}function bp(){Dr.start()}const Dr=new o_;Dr.setAnimationLoop(Ri),typeof self<"u"&&Dr.setContext(self),this.setAnimationLoop=function(L){vn=L,oe.setAnimationLoop(L),L===null?Dr.stop():Dr.start()},oe.addEventListener("sessionstart",Ap),oe.addEventListener("sessionend",bp),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Z),Z=oe.getCamera()),L.isScene===!0&&L.onBeforeRender(p,L,Z,E),_=W.get(L,v.length),_.init(Z),v.push(_),ce.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),pe.setFromProjectionMatrix(ce),ne=this.localClippingEnabled,ee=X.init(this.clippingPlanes,ne),M=I.get(L,u.length),M.init(),u.push(M),oe.enabled===!0&&oe.isPresenting===!0){const ye=p.xr.getDepthSensingMesh();ye!==null&&Qc(ye,Z,-1/0,p.sortObjects)}Qc(L,Z,0,p.sortObjects),M.finish(),p.sortObjects===!0&&M.sort(k,te),Xe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Xe&&de.addToRenderList(M,L),this.info.render.frame++,ee===!0&&X.beginShadows();const re=_.state.shadowsArray;ie.render(re,L,Z),ee===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,J=M.transmissive;if(_.setupLights(),Z.isArrayCamera){const ye=Z.cameras;if(J.length>0)for(let Ee=0,De=ye.length;Ee<De;Ee++){const Ie=ye[Ee];Rp(se,J,L,Ie)}Xe&&de.render(L);for(let Ee=0,De=ye.length;Ee<De;Ee++){const Ie=ye[Ee];Cp(M,L,Ie,Ie.viewport)}}else J.length>0&&Rp(se,J,L,Z),Xe&&de.render(L),Cp(M,L,Z);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),L.isScene===!0&&L.onAfterRender(p,L,Z),_e.resetDefaultState(),b=-1,z=null,v.pop(),v.length>0?(_=v[v.length-1],ee===!0&&X.setGlobalState(p.clippingPlanes,_.state.camera)):_=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function Qc(L,Z,re,se){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||pe.intersectsSprite(L)){se&&Re.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ce);const Ee=D.update(L),De=L.material;De.visible&&M.push(L,Ee,De,re,Re.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||pe.intersectsObject(L))){const Ee=D.update(L),De=L.material;if(se&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Re.copy(L.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Re.copy(Ee.boundingSphere.center)),Re.applyMatrix4(L.matrixWorld).applyMatrix4(ce)),Array.isArray(De)){const Ie=Ee.groups;for(let Ve=0,We=Ie.length;Ve<We;Ve++){const Oe=Ie[Ve],at=De[Oe.materialIndex];at&&at.visible&&M.push(L,Ee,at,re,Re.z,Oe)}}else De.visible&&M.push(L,Ee,De,re,Re.z,null)}}const ye=L.children;for(let Ee=0,De=ye.length;Ee<De;Ee++)Qc(ye[Ee],Z,re,se)}function Cp(L,Z,re,se){const J=L.opaque,ye=L.transmissive,Ee=L.transparent;_.setupLightsView(re),ee===!0&&X.setGlobalState(p.clippingPlanes,re),se&&Le.viewport(x.copy(se)),J.length>0&&La(J,Z,re),ye.length>0&&La(ye,Z,re),Ee.length>0&&La(Ee,Z,re),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Rp(L,Z,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new ei(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?En:bi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ye=_.state.transmissionRenderTarget[se.id],Ee=se.viewport||x;ye.setSize(Ee.z,Ee.w);const De=p.getRenderTarget();p.setRenderTarget(ye),p.getClearColor(H),q=p.getClearAlpha(),q<1&&p.setClearColor(16777215,.5),p.clear(),Xe&&de.render(re);const Ie=p.toneMapping;p.toneMapping=Tr;const Ve=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),ee===!0&&X.setGlobalState(p.clippingPlanes,se),La(L,re,se),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye),Be.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Oe=0,at=Z.length;Oe<at;Oe++){const mt=Z[Oe],Mt=mt.object,Cn=mt.geometry,st=mt.material,ze=mt.group;if(st.side===Un&&Mt.layers.test(se.layers)){const Xt=st.side;st.side=hn,st.needsUpdate=!0,Pp(Mt,re,se,Cn,st,ze),st.side=Xt,st.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye))}p.setRenderTarget(De),p.setClearColor(H,q),Ve!==void 0&&(se.viewport=Ve),p.toneMapping=Ie}function La(L,Z,re){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,ye=L.length;J<ye;J++){const Ee=L[J],De=Ee.object,Ie=Ee.geometry,Ve=se===null?Ee.material:se,We=Ee.group;De.layers.test(re.layers)&&Pp(De,Z,re,Ie,Ve,We)}}function Pp(L,Z,re,se,J,ye){L.onBeforeRender(p,Z,re,se,J,ye),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(p,Z,re,se,L,ye),J.transparent===!0&&J.side===Un&&J.forceSinglePass===!1?(J.side=hn,J.needsUpdate=!0,p.renderBufferDirect(re,Z,se,J,L,ye),J.side=Cr,J.needsUpdate=!0,p.renderBufferDirect(re,Z,se,J,L,ye),J.side=Un):p.renderBufferDirect(re,Z,se,J,L,ye),L.onAfterRender(p,Z,re,se,J,ye)}function Da(L,Z,re){Z.isScene!==!0&&(Z=ke);const se=ue.get(L),J=_.state.lights,ye=_.state.shadowsArray,Ee=J.state.version,De=N.getParameters(L,J.state,ye,Z,re),Ie=N.getProgramCacheKey(De);let Ve=se.programs;se.environment=L.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(L.isMeshStandardMaterial?U:A).get(L.envMap||se.environment),se.envMapRotation=se.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,Ve===void 0&&(L.addEventListener("dispose",et),Ve=new Map,se.programs=Ve);let We=Ve.get(Ie);if(We!==void 0){if(se.currentProgram===We&&se.lightsStateVersion===Ee)return Dp(L,De),We}else De.uniforms=N.getUniforms(L),L.onBeforeCompile(De,p),We=N.acquireProgram(De,Ie),Ve.set(Ie,We),se.uniforms=De.uniforms;const Oe=se.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Oe.clippingPlanes=X.uniform),Dp(L,De),se.needsLights=S_(L),se.lightsStateVersion=Ee,se.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.directionalShadowMap.value=J.state.directionalShadowMap,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotShadowMap.value=J.state.spotShadowMap,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMap.value=J.state.pointShadowMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix),se.currentProgram=We,se.uniformsList=null,We}function Lp(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=Xl.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function Dp(L,Z){const re=ue.get(L);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function __(L,Z,re,se,J){Z.isScene!==!0&&(Z=ke),P.resetTextureUnits();const ye=Z.fog,Ee=se.isMeshStandardMaterial?Z.environment:null,De=E===null?p.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:$i,Ie=(se.isMeshStandardMaterial?U:A).get(se.envMap||Ee),Ve=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,We=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Oe=!!re.morphAttributes.position,at=!!re.morphAttributes.normal,mt=!!re.morphAttributes.color;let Mt=Tr;se.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=p.toneMapping);const Cn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=Cn!==void 0?Cn.length:0,ze=ue.get(se),Xt=_.state.lights;if(ee===!0&&(ne===!0||L!==z)){const Gn=L===z&&se.id===b;X.setState(se,L,Gn)}let ot=!1;se.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Xt.state.version||ze.outputColorSpace!==De||J.isBatchedMesh&&ze.batching===!1||!J.isBatchedMesh&&ze.batching===!0||J.isBatchedMesh&&ze.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ze.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ze.instancing===!1||!J.isInstancedMesh&&ze.instancing===!0||J.isSkinnedMesh&&ze.skinning===!1||!J.isSkinnedMesh&&ze.skinning===!0||J.isInstancedMesh&&ze.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ze.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ze.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ze.instancingMorph===!1&&J.morphTexture!==null||ze.envMap!==Ie||se.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==X.numPlanes||ze.numIntersection!==X.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==We||ze.morphTargets!==Oe||ze.morphNormals!==at||ze.morphColors!==mt||ze.toneMapping!==Mt||ze.morphTargetsCount!==st)&&(ot=!0):(ot=!0,ze.__version=se.version);let ti=ze.currentProgram;ot===!0&&(ti=Da(se,Z,J));let gs=!1,Rn=!1,Jc=!1;const bt=ti.getUniforms(),er=ze.uniforms;if(Le.useProgram(ti.program)&&(gs=!0,Rn=!0,Jc=!0),se.id!==b&&(b=se.id,Rn=!0),gs||z!==L){Ge.reverseDepthBuffer?(xe.copy(L.projectionMatrix),fM(xe),pM(xe),bt.setValue(V,"projectionMatrix",xe)):bt.setValue(V,"projectionMatrix",L.projectionMatrix),bt.setValue(V,"viewMatrix",L.matrixWorldInverse);const Gn=bt.map.cameraPosition;Gn!==void 0&&Gn.setValue(V,Ae.setFromMatrixPosition(L.matrixWorld)),Ge.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&bt.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),z!==L&&(z=L,Rn=!0,Jc=!0)}if(J.isSkinnedMesh){bt.setOptional(V,J,"bindMatrix"),bt.setOptional(V,J,"bindMatrixInverse");const Gn=J.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),bt.setValue(V,"boneTexture",Gn.boneTexture,P))}J.isBatchedMesh&&(bt.setOptional(V,J,"batchingTexture"),bt.setValue(V,"batchingTexture",J._matricesTexture,P),bt.setOptional(V,J,"batchingIdTexture"),bt.setValue(V,"batchingIdTexture",J._indirectTexture,P),bt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(V,"batchingColorTexture",J._colorsTexture,P));const $c=re.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0)&&me.update(J,re,ti),(Rn||ze.receiveShadow!==J.receiveShadow)&&(ze.receiveShadow=J.receiveShadow,bt.setValue(V,"receiveShadow",J.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(er.envMap.value=Ie,er.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Z.environment!==null&&(er.envMapIntensity.value=Z.environmentIntensity),Rn&&(bt.setValue(V,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&y_(er,Jc),ye&&se.fog===!0&&F.refreshFogUniforms(er,ye),F.refreshMaterialUniforms(er,se,K,j,_.state.transmissionRenderTarget[L.id]),Xl.upload(V,Lp(ze),er,P)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Xl.upload(V,Lp(ze),er,P),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&bt.setValue(V,"center",J.center),bt.setValue(V,"modelViewMatrix",J.modelViewMatrix),bt.setValue(V,"normalMatrix",J.normalMatrix),bt.setValue(V,"modelMatrix",J.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Gn=se.uniformsGroups;for(let eu=0,M_=Gn.length;eu<M_;eu++){const Np=Gn[eu];G.update(Np,ti),G.bind(Np,ti)}}return ti}function y_(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function S_(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(L,Z,re){ue.get(L.texture).__webglTexture=Z,ue.get(L.depthTexture).__webglTexture=re;const se=ue.get(L);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Z){const re=ue.get(L);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,re=0){E=L,C=Z,w=re;let se=!0,J=null,ye=!1,Ee=!1;if(L){const Ie=ue.get(L);if(Ie.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(V.FRAMEBUFFER,null),se=!1;else if(Ie.__webglFramebuffer===void 0)P.setupRenderTarget(L);else if(Ie.__hasExternalTextures)P.rebindTextures(L,ue.get(L.texture).__webglTexture,ue.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Oe=L.depthTexture;if(Ie.__boundDepthTexture!==Oe){if(Oe!==null&&ue.has(Oe)&&(L.width!==Oe.image.width||L.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(L)}}const Ve=L.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const We=ue.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(We[Z])?J=We[Z][re]:J=We[Z],ye=!0):L.samples>0&&P.useMultisampledRTT(L)===!1?J=ue.get(L).__webglMultisampledFramebuffer:Array.isArray(We)?J=We[re]:J=We,x.copy(L.viewport),T.copy(L.scissor),B=L.scissorTest}else x.copy($).multiplyScalar(K).floor(),T.copy(ae).multiplyScalar(K).floor(),B=ge;if(Le.bindFramebuffer(V.FRAMEBUFFER,J)&&se&&Le.drawBuffers(L,J),Le.viewport(x),Le.scissor(T),Le.setScissorTest(B),ye){const Ie=ue.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,re)}else if(Ee){const Ie=ue.get(L.texture),Ve=Z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.__webglTexture,re||0,Ve)}b=-1},this.readRenderTargetPixels=function(L,Z,re,se,J,ye,Ee){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){Le.bindFramebuffer(V.FRAMEBUFFER,De);try{const Ie=L.texture,Ve=Ie.format,We=Ie.type;if(!Ge.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-se&&re>=0&&re<=L.height-J&&V.readPixels(Z,re,se,J,Me.convert(Ve),Me.convert(We),ye)}finally{const Ie=E!==null?ue.get(E).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(L,Z,re,se,J,ye,Ee){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){const Ie=L.texture,Ve=Ie.format,We=Ie.type;if(!Ge.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=L.width-se&&re>=0&&re<=L.height-J){Le.bindFramebuffer(V.FRAMEBUFFER,De);const Oe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.bufferData(V.PIXEL_PACK_BUFFER,ye.byteLength,V.STREAM_READ),V.readPixels(Z,re,se,J,Me.convert(Ve),Me.convert(We),0);const at=E!==null?ue.get(E).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,at);const mt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hM(V,mt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ye),V.deleteBuffer(Oe),V.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Z=null,re=0){L.isTexture!==!0&&(jl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,L=arguments[1]);const se=Math.pow(2,-re),J=Math.floor(L.image.width*se),ye=Math.floor(L.image.height*se),Ee=Z!==null?Z.x:0,De=Z!==null?Z.y:0;P.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ee,De,J,ye),Le.unbindTexture()},this.copyTextureToTexture=function(L,Z,re=null,se=null,J=0){L.isTexture!==!0&&(jl("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,L=arguments[1],Z=arguments[2],J=arguments[3]||0,re=null);let ye,Ee,De,Ie,Ve,We;re!==null?(ye=re.max.x-re.min.x,Ee=re.max.y-re.min.y,De=re.min.x,Ie=re.min.y):(ye=L.image.width,Ee=L.image.height,De=0,Ie=0),se!==null?(Ve=se.x,We=se.y):(Ve=0,We=0);const Oe=Me.convert(Z.format),at=Me.convert(Z.type);P.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const mt=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Cn=V.getParameter(V.UNPACK_SKIP_PIXELS),st=V.getParameter(V.UNPACK_SKIP_ROWS),ze=V.getParameter(V.UNPACK_SKIP_IMAGES),Xt=L.isCompressedTexture?L.mipmaps[J]:L.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,De),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ie),L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,Ve,We,ye,Ee,Oe,at,Xt.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,Ve,We,Xt.width,Xt.height,Oe,Xt.data):V.texSubImage2D(V.TEXTURE_2D,J,Ve,We,ye,Ee,Oe,at,Xt),V.pixelStorei(V.UNPACK_ROW_LENGTH,mt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Cn),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ze),J===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,re=null,se=null,J=0){L.isTexture!==!0&&(jl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,L=arguments[2],Z=arguments[3],J=arguments[4]||0);let ye,Ee,De,Ie,Ve,We,Oe,at,mt;const Mt=L.isCompressedTexture?L.mipmaps[J]:L.image;re!==null?(ye=re.max.x-re.min.x,Ee=re.max.y-re.min.y,De=re.max.z-re.min.z,Ie=re.min.x,Ve=re.min.y,We=re.min.z):(ye=Mt.width,Ee=Mt.height,De=Mt.depth,Ie=0,Ve=0,We=0),se!==null?(Oe=se.x,at=se.y,mt=se.z):(Oe=0,at=0,mt=0);const Cn=Me.convert(Z.format),st=Me.convert(Z.type);let ze;if(Z.isData3DTexture)P.setTexture3D(Z,0),ze=V.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)P.setTexture2DArray(Z,0),ze=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xt=V.getParameter(V.UNPACK_ROW_LENGTH),ot=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ti=V.getParameter(V.UNPACK_SKIP_PIXELS),gs=V.getParameter(V.UNPACK_SKIP_ROWS),Rn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ie),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ve),V.pixelStorei(V.UNPACK_SKIP_IMAGES,We),L.isDataTexture||L.isData3DTexture?V.texSubImage3D(ze,J,Oe,at,mt,ye,Ee,De,Cn,st,Mt.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,J,Oe,at,mt,ye,Ee,De,Cn,Mt.data):V.texSubImage3D(ze,J,Oe,at,mt,ye,Ee,De,Cn,st,Mt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Xt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ot),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ti),V.pixelStorei(V.UNPACK_SKIP_ROWS,gs),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Rn),J===0&&Z.generateMipmaps&&V.generateMipmap(ze),Le.unbindTexture()},this.initRenderTarget=function(L){ue.get(L).__webglFramebuffer===void 0&&P.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),Le.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,Le.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===up?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Gc?"display-p3":"srgb"}}class d_ extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gp extends zt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Gt,d=Gt,f,h){super(null,o,a,l,c,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h_ extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new Y,Ec=new Y,X0=new rt,Uo=new jc,xl=new Wc,cd=new Y,Y0=new Y;class bA extends jt{constructor(e=new mn,n=new h_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wc.fromBufferAttribute(n,r-1),Ec.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wc.distanceTo(Ec);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),xl.radius+=s,e.ray.intersectsSphere(xl)===!1)return;X0.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(X0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let M=m,_=y-1;M<_;M+=c){const u=d.getX(M),v=d.getX(M+1),p=_l(this,e,Uo,l,u,v);p&&n.push(p)}if(this.isLineLoop){const M=d.getX(y-1),_=d.getX(m),u=_l(this,e,Uo,l,M,_);u&&n.push(u)}}else{const m=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let M=m,_=y-1;M<_;M+=c){const u=_l(this,e,Uo,l,M,M+1);u&&n.push(u)}if(this.isLineLoop){const M=_l(this,e,Uo,l,y-1,m);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _l(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(wc.fromBufferAttribute(o,r),Ec.fromBufferAttribute(o,s),n.distanceSqToSegment(wc,Ec,cd,Y0)>i)return;cd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(cd);if(!(l<e.near||l>e.far))return{distance:l,point:Y0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const q0=new Y,K0=new Y;class CA extends bA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)q0.fromBufferAttribute(n,r),K0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+q0.distanceTo(K0);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RA extends zt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qc extends mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],m=[];let y=0;const M=[],_=i/2;let u=0;v(),o===!1&&(e>0&&p(!0),n>0&&p(!1)),this.setIndex(d),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(m,2));function v(){const S=new Y,C=new Y;let w=0;const E=(n-e)/i;for(let b=0;b<=s;b++){const z=[],x=b/s,T=x*(n-e)+e;for(let B=0;B<=r;B++){const H=B/r,q=H*l+a,Q=Math.sin(q),j=Math.cos(q);C.x=T*Q,C.y=-x*i+_,C.z=T*j,f.push(C.x,C.y,C.z),S.set(Q,E,j).normalize(),h.push(S.x,S.y,S.z),m.push(H,1-x),z.push(y++)}M.push(z)}for(let b=0;b<r;b++)for(let z=0;z<s;z++){const x=M[z][b],T=M[z+1][b],B=M[z+1][b+1],H=M[z][b+1];e>0&&(d.push(x,T,H),w+=3),n>0&&(d.push(T,B,H),w+=3)}c.addGroup(u,w,0),u+=w}function p(S){const C=y,w=new Ue,E=new Y;let b=0;const z=S===!0?e:n,x=S===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,_*x,0),h.push(0,x,0),m.push(.5,.5),y++;const T=y;for(let B=0;B<=r;B++){const q=B/r*l+a,Q=Math.cos(q),j=Math.sin(q);E.x=z*j,E.y=_*x,E.z=z*Q,f.push(E.x,E.y,E.z),h.push(0,x,0),w.x=Q*.5+.5,w.y=j*.5*x+.5,m.push(w.x,w.y),y++}for(let B=0;B<r;B++){const H=C+B,q=T+B;S===!0?d.push(q,q+1,H):d.push(q+1,q,H),b+=3}c.addGroup(u,b,S===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vp extends qc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xp extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const p=new Y,S=new Y,C=new Y;for(let w=0;w<n.length;w+=3)m(n[w+0],p),m(n[w+1],S),m(n[w+2],C),l(p,S,C,v)}function l(v,p,S,C){const w=C+1,E=[];for(let b=0;b<=w;b++){E[b]=[];const z=v.clone().lerp(S,b/w),x=p.clone().lerp(S,b/w),T=w-b;for(let B=0;B<=T;B++)B===0&&b===w?E[b][B]=z:E[b][B]=z.clone().lerp(x,B/T)}for(let b=0;b<w;b++)for(let z=0;z<2*(w-b)-1;z++){const x=Math.floor(z/2);z%2===0?(h(E[b][x+1]),h(E[b+1][x]),h(E[b][x])):(h(E[b][x+1]),h(E[b+1][x+1]),h(E[b+1][x]))}}function c(v){const p=new Y;for(let S=0;S<s.length;S+=3)p.x=s[S+0],p.y=s[S+1],p.z=s[S+2],p.normalize().multiplyScalar(v),s[S+0]=p.x,s[S+1]=p.y,s[S+2]=p.z}function d(){const v=new Y;for(let p=0;p<s.length;p+=3){v.x=s[p+0],v.y=s[p+1],v.z=s[p+2];const S=_(v)/2/Math.PI+.5,C=u(v)/Math.PI+.5;o.push(S,1-C)}y(),f()}function f(){for(let v=0;v<o.length;v+=6){const p=o[v+0],S=o[v+2],C=o[v+4],w=Math.max(p,S,C),E=Math.min(p,S,C);w>.9&&E<.1&&(p<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function m(v,p){const S=v*3;p.x=e[S+0],p.y=e[S+1],p.z=e[S+2]}function y(){const v=new Y,p=new Y,S=new Y,C=new Y,w=new Ue,E=new Ue,b=new Ue;for(let z=0,x=0;z<s.length;z+=9,x+=6){v.set(s[z+0],s[z+1],s[z+2]),p.set(s[z+3],s[z+4],s[z+5]),S.set(s[z+6],s[z+7],s[z+8]),w.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),b.set(o[x+4],o[x+5]),C.copy(v).add(p).add(S).divideScalar(3);const T=_(C);M(w,x+0,v,T),M(E,x+2,p,T),M(b,x+4,S,T)}}function M(v,p,S,C){C<0&&v.x===1&&(o[p]=v.x-1),S.x===0&&S.z===0&&(o[p]=C/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.vertices,e.indices,e.radius,e.details)}}class _p extends xp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _p(e.radius,e.detail)}}class yp extends mn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,m=new Y,y=new Ue;for(let M=0;M<=r;M++){for(let _=0;_<=i;_++){const u=s+_/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),y.x=(m.x/n+1)/2,y.y=(m.y/n+1)/2,d.push(y.x,y.y)}f+=h}for(let M=0;M<r;M++){const _=M*(i+1);for(let u=0;u<i;u++){const v=u+_,p=v,S=v+i+1,C=v+i+2,w=v+1;a.push(p,S,w),a.push(S,C,w)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sp extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new Y,h=new Y,m=[],y=[],M=[],_=[];for(let u=0;u<=i;u++){const v=[],p=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const w=C/n;f.x=-e*Math.cos(r+w*s)*Math.sin(o+p*a),f.y=e*Math.cos(o+p*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+p*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),_.push(w+S,1-p),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const p=d[u][v+1],S=d[u][v],C=d[u+1][v],w=d[u+1][v+1];(u!==0||o>0)&&m.push(p,S,w),(u!==i-1||l<Math.PI)&&m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new dt(y,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mp extends mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new Y,f=new Y,h=new Y;for(let m=0;m<=i;m++)for(let y=0;y<=r;y++){const M=y/r*s,_=m/i*Math.PI*2;f.x=(e+n*Math.cos(_))*Math.cos(M),f.y=(e+n*Math.cos(_))*Math.sin(M),f.z=n*Math.sin(_),a.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=r;y++){const M=(r+1)*m+y-1,_=(r+1)*(m-1)+y-1,u=(r+1)*(m-1)+y,v=(r+1)*m+y;o.push(M,_,v),o.push(_,u,v)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class PA extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sn extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LA extends ps{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Tc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class DA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],y=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return y}return null}}}const NA=new DA;class Pa{constructor(e){this.manager=e!==void 0?e:NA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class IA extends Error{constructor(e,n){super(e),this.response=n}}class UA extends Pa{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Ui[e]!==void 0){Ui[e].push({onLoad:n,onProgress:i,onError:r});return}Ui[e]=[],Ui[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ui[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=h?parseInt(h):0,y=m!==0;let M=0;const _=new ReadableStream({start(u){v();function v(){f.read().then(({done:p,value:S})=>{if(p)u.close();else{M+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:m});for(let w=0,E=d.length;w<E;w++){const b=d[w];b.onProgress&&b.onProgress(C)}u.enqueue(S),v()}},p=>{u.error(p)})}}});return new Response(_)}else throw new IA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(y=>m.decode(y))}}}).then(c=>{Tc.add(e,c);const d=Ui[e];delete Ui[e];for(let f=0,h=d.length;f<h;f++){const m=d[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=Ui[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let f=0,h=d.length;f<h;f++){const m=d[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class OA extends Pa{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ma("img");function l(){d(),Tc.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class kA extends Pa{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new gp,a=new UA(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Wi,o.wrapT=c.wrapT!==void 0?c.wrapT:Wi,o.magFilter=c.magFilter!==void 0?c.magFilter:Kt,o.minFilter=c.minFilter!==void 0?c.minFilter:Kt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=gr),c.mipmapCount===1&&(o.minFilter=Kt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class ud extends Pa{constructor(e){super(e)}load(e,n,i,r){const s=new zt,o=new OA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Kc extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class zA extends Kc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const dd=new rt,Z0=new Y,Q0=new Y;class f_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),n.position.copy(Z0),Q0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Q0),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const J0=new rt,Oo=new Y,hd=new Y;class FA extends f_{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oo),hd.copy(i.position),hd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(hd),i.updateMatrixWorld(),r.makeTranslation(-Oo.x,-Oo.y,-Oo.z),J0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(J0)}}class p_ extends Kc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new FA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BA extends f_{constructor(){super(new fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $0 extends Kc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new BA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HA extends Kc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class VA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=eg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function eg(){return performance.now()}const tg=new rt;class GA{constructor(e,n,i=0,r=1/0){this.ray=new jc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(e,n=!0,i=[]){return nf(e,this,i,n),i.sort(ng),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nf(e[r],this,i,n);return i.sort(ng),i}}function ng(t,e){return t.distance-e.distance}function nf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)nf(s[o],e,n,!0)}}class ig{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WA extends CA{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,m=0,y=-a;h<=n;h++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const M=h===s?i:r;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const d=new mn;d.setAttribute("position",new dt(l,3)),d.setAttribute("color",new dt(c,3));const f=new h_({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class jA extends fs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);const rg={type:"change"},wp={type:"start"},m_={type:"end"},yl=new jc,sg=new Bi,XA=Math.cos(70*uM.DEG2RAD),It=new Y,yn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fd=1e-6;class YA extends jA{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ls,this._lastTargetPosition=new Y,this._quat=new ls().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ig,this._sphericalDelta=new ig,this._scale=1,this._panOffset=new Y,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new Y,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KA.bind(this),this._onPointerDown=qA.bind(this),this._onPointerUp=ZA.bind(this),this._onContextMenu=ib.bind(this),this._onMouseWheel=$A.bind(this),this._onKeyDown=eb.bind(this),this._onTouchStart=tb.bind(this),this._onTouchMove=nb.bind(this),this._onMouseDown=QA.bind(this),this._onMouseMove=JA.bind(this),this._interceptControlDown=rb.bind(this),this._interceptControlUp=sb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rg),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;It.copy(n).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),r<-Math.PI?r+=yn:r>Math.PI&&(r-=yn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),n.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yl.origin.copy(this.object.position),yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yl.direction))<XA?this.object.lookAt(this.target):(sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),yl.intersectPlane(sg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fd||this._lastTargetPosition.distanceToSquared(this.target)>fd?(this.dispatchEvent(rg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){It.setFromMatrixColumn(n,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,n){this.screenSpacePanning===!0?It.setFromMatrixColumn(n,1):(It.setFromMatrixColumn(n,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ue,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function KA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function ZA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(m_),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function QA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case to.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case to.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(wp)}function JA(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function $A(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(wp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(m_))}function eb(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function tb(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(wp)}function nb(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function ib(t){this.enabled!==!1&&t.preventDefault()}function rb(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sb(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ob extends d_{constructor(){super();const e=new cn;e.deleteAttribute("uv");const n=new Sn({side:hn}),i=new Sn,r=new p_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Je(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Je(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Je(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Je(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Je(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Je(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new Je(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new Je(e,Ns(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const m=new Je(e,Ns(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const y=new Je(e,Ns(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const M=new Je(e,Ns(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const _=new Je(e,Ns(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);const u=new Je(e,Ns(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ns(t){const e=new Xc;return e.color.setScalar(t),e}class ab extends kA{constructor(e){super(e),this.type=En}parse(e){const o=function(b,z){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(z||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(z||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(z||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(z||""))}},d=`
`,f=function(b,z,x){z=z||1024;let B=b.pos,H=-1,q=0,Q="",j=String.fromCharCode.apply(null,new Uint16Array(b.subarray(B,B+128)));for(;0>(H=j.indexOf(d))&&q<z&&B<b.byteLength;)Q+=j,q+=j.length,B+=128,j+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(B,B+128)));return-1<H?(b.pos+=q+H+1,Q+j.slice(0,H)):!1},h=function(b){const z=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,q={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Q,j;for((b.pos>=b.byteLength||!(Q=f(b)))&&o(1,"no header found"),(j=Q.match(z))||o(3,"bad initial token"),q.valid|=1,q.programtype=j[1],q.string+=Q+`
`;Q=f(b),Q!==!1;){if(q.string+=Q+`
`,Q.charAt(0)==="#"){q.comments+=Q+`
`;continue}if((j=Q.match(x))&&(q.gamma=parseFloat(j[1])),(j=Q.match(T))&&(q.exposure=parseFloat(j[1])),(j=Q.match(B))&&(q.valid|=2,q.format=j[1]),(j=Q.match(H))&&(q.valid|=4,q.height=parseInt(j[1],10),q.width=parseInt(j[2],10)),q.valid&2&&q.valid&4)break}return q.valid&2||o(3,"missing format specifier"),q.valid&4||o(3,"missing image size specifier"),q},m=function(b,z,x){const T=z;if(T<8||T>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);T!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const B=new Uint8Array(4*z*x);B.length||o(4,"unable to allocate buffer space");let H=0,q=0;const Q=4*T,j=new Uint8Array(4),K=new Uint8Array(Q);let k=x;for(;k>0&&q<b.byteLength;){q+4>b.byteLength&&o(1),j[0]=b[q++],j[1]=b[q++],j[2]=b[q++],j[3]=b[q++],(j[0]!=2||j[1]!=2||(j[2]<<8|j[3])!=T)&&o(3,"bad rgbe scanline format");let te=0,$;for(;te<Q&&q<b.byteLength;){$=b[q++];const ge=$>128;if(ge&&($-=128),($===0||te+$>Q)&&o(3,"bad scanline data"),ge){const pe=b[q++];for(let ee=0;ee<$;ee++)K[te++]=pe}else K.set(b.subarray(q,q+$),te),te+=$,q+=$}const ae=T;for(let ge=0;ge<ae;ge++){let pe=0;B[H]=K[ge+pe],pe+=T,B[H+1]=K[ge+pe],pe+=T,B[H+2]=K[ge+pe],pe+=T,B[H+3]=K[ge+pe],H+=4}k--}return B},y=function(b,z,x,T){const B=b[z+3],H=Math.pow(2,B-128)/255;x[T+0]=b[z+0]*H,x[T+1]=b[z+1]*H,x[T+2]=b[z+2]*H,x[T+3]=1},M=function(b,z,x,T){const B=b[z+3],H=Math.pow(2,B-128)/255;x[T+0]=sl.toHalfFloat(Math.min(b[z+0]*H,65504)),x[T+1]=sl.toHalfFloat(Math.min(b[z+1]*H,65504)),x[T+2]=sl.toHalfFloat(Math.min(b[z+2]*H,65504)),x[T+3]=sl.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const u=h(_),v=u.width,p=u.height,S=m(_.subarray(_.pos),v,p);let C,w,E;switch(this.type){case Kn:E=S.length/4;const b=new Float32Array(E*4);for(let x=0;x<E;x++)y(S,x*4,b,x*4);C=b,w=Kn;break;case En:E=S.length/4;const z=new Uint16Array(E*4);for(let x=0;x<E;x++)M(S,x*4,z,x*4);C=z,w=En;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:p,data:C,header:u.string,gamma:u.gamma,exposure:u.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){switch(o.type){case Kn:case En:o.colorSpace=$i,o.minFilter=Kt,o.magFilter=Kt,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,i,r)}}const Yl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lb=new fp(-1,1,1,-1,0,1);class cb extends mn{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const ub=new cb;class Zc{constructor(e){this._mesh=new Je(ub,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class db extends ms{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class og extends ms{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class hb extends ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fb{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,n=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new db(Yl),this.copyPass.material.blending=qt,this.clock=new VA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}og!==void 0&&(o instanceof og?i=!0:o instanceof hb&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pb extends ms{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const mb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gb extends ms{constructor(){super();const e=mb;this.uniforms=mi.clone(e.uniforms),this.material=new PA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ix?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ux?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ox?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===np?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zx&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Sl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new rt},cameraProjectionMatrixInverse:{value:new rt},cameraWorldMatrix:{value:new rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new Y(-1,-1,-1)},sceneBoxMax:{value:new Y(1,1,1)}},vertexShader:`

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
		}`},Ml={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},pd={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function vb(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=xb(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new Y(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new gp(r,e,e);return s.wrapS=On,s.wrapT=On,s.needsUpdate=!0,s}function xb(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const wl={defines:{SAMPLES:16,SAMPLE_VECTORS:g_(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ue},cameraProjectionMatrixInverse:{value:new rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function g_(t,e,n){const i=_b(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function _b(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new Y(Math.cos(s),Math.sin(s),o))}return i}class yb{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),d=(3-Math.sqrt(3))/6,f=(l+c)*d,h=l-f,m=c-f,y=e-h,M=n-m;let _,u;y>M?(_=1,u=0):(_=0,u=1);const v=y-_+d,p=M-u+d,S=y-1+2*d,C=M-1+2*d,w=l&255,E=c&255,b=this.perm[w+this.perm[E]]%12,z=this.perm[w+_+this.perm[E+u]]%12,x=this.perm[w+1+this.perm[E+1]]%12;let T=.5-y*y-M*M;T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[b],y,M));let B=.5-v*v-p*p;B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[z],v,p));let H=.5-S*S-C*C;return H<0?s=0:(H*=H,s=H*H*this.dot(this.grad3[x],S,C)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,d=Math.floor(e+c),f=Math.floor(n+c),h=Math.floor(i+c),m=1/6,y=(d+f+h)*m,M=d-y,_=f-y,u=h-y,v=e-M,p=n-_,S=i-u;let C,w,E,b,z,x;v>=p?p>=S?(C=1,w=0,E=0,b=1,z=1,x=0):v>=S?(C=1,w=0,E=0,b=1,z=0,x=1):(C=0,w=0,E=1,b=1,z=0,x=1):p<S?(C=0,w=0,E=1,b=0,z=1,x=1):v<S?(C=0,w=1,E=0,b=0,z=1,x=1):(C=0,w=1,E=0,b=1,z=1,x=0);const T=v-C+m,B=p-w+m,H=S-E+m,q=v-b+2*m,Q=p-z+2*m,j=S-x+2*m,K=v-1+3*m,k=p-1+3*m,te=S-1+3*m,$=d&255,ae=f&255,ge=h&255,pe=this.perm[$+this.perm[ae+this.perm[ge]]]%12,ee=this.perm[$+C+this.perm[ae+w+this.perm[ge+E]]]%12,ne=this.perm[$+b+this.perm[ae+z+this.perm[ge+x]]]%12,xe=this.perm[$+1+this.perm[ae+1+this.perm[ge+1]]]%12;let ce=.6-v*v-p*p-S*S;ce<0?r=0:(ce*=ce,r=ce*ce*this.dot3(this.grad3[pe],v,p,S));let Ae=.6-T*T-B*B-H*H;Ae<0?s=0:(Ae*=Ae,s=Ae*Ae*this.dot3(this.grad3[ee],T,B,H));let Re=.6-q*q-Q*Q-j*j;Re<0?o=0:(Re*=Re,o=Re*Re*this.dot3(this.grad3[ne],q,Q,j));let ke=.6-K*K-k*k-te*te;return ke<0?a=0:(ke*=ke,a=ke*ke*this.dot3(this.grad3[xe],K,k,te)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let d,f,h,m,y;const M=(e+n+i+r)*l,_=Math.floor(e+M),u=Math.floor(n+M),v=Math.floor(i+M),p=Math.floor(r+M),S=(_+u+v+p)*c,C=_-S,w=u-S,E=v-S,b=p-S,z=e-C,x=n-w,T=i-E,B=r-b,H=z>x?32:0,q=z>T?16:0,Q=x>T?8:0,j=z>B?4:0,K=x>B?2:0,k=T>B?1:0,te=H+q+Q+j+K+k,$=o[te][0]>=3?1:0,ae=o[te][1]>=3?1:0,ge=o[te][2]>=3?1:0,pe=o[te][3]>=3?1:0,ee=o[te][0]>=2?1:0,ne=o[te][1]>=2?1:0,xe=o[te][2]>=2?1:0,ce=o[te][3]>=2?1:0,Ae=o[te][0]>=1?1:0,Re=o[te][1]>=1?1:0,ke=o[te][2]>=1?1:0,Xe=o[te][3]>=1?1:0,Fe=z-$+c,V=x-ae+c,pt=T-ge+c,Be=B-pe+c,Ge=z-ee+2*c,Le=x-ne+2*c,Ke=T-xe+2*c,ue=B-ce+2*c,P=z-Ae+3*c,A=x-Re+3*c,U=T-ke+3*c,R=B-Xe+3*c,O=z-1+4*c,D=x-1+4*c,N=T-1+4*c,F=B-1+4*c,I=_&255,W=u&255,X=v&255,ie=p&255,de=a[I+a[W+a[X+a[ie]]]]%32,me=a[I+$+a[W+ae+a[X+ge+a[ie+pe]]]]%32,he=a[I+ee+a[W+ne+a[X+xe+a[ie+ce]]]]%32,Ne=a[I+Ae+a[W+Re+a[X+ke+a[ie+Xe]]]]%32,Me=a[I+1+a[W+1+a[X+1+a[ie+1]]]]%32;let _e=.6-z*z-x*x-T*T-B*B;_e<0?d=0:(_e*=_e,d=_e*_e*this.dot4(s[de],z,x,T,B));let G=.6-Fe*Fe-V*V-pt*pt-Be*Be;G<0?f=0:(G*=G,f=G*G*this.dot4(s[me],Fe,V,pt,Be));let ve=.6-Ge*Ge-Le*Le-Ke*Ke-ue*ue;ve<0?h=0:(ve*=ve,h=ve*ve*this.dot4(s[he],Ge,Le,Ke,ue));let oe=.6-P*P-A*A-U*U-R*R;oe<0?m=0:(oe*=oe,m=oe*oe*this.dot4(s[Ne],P,A,U,R));let le=.6-O*O-D*D-N*N-F*F;return le<0?y=0:(le*=le,y=le*le*this.dot4(s[Me],O,D,N,F)),27*(d+f+h+m+y)}}class ui extends ms{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vb(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ei(this.width,this.height,{type:En}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ot({defines:Object.assign({},Sl.defines),uniforms:mi.clone(Sl.uniforms),vertexShader:Sl.vertexShader,fragmentShader:Sl.fragmentShader,blending:qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new LA,this.normalMaterial.blending=qt,this.pdMaterial=new Ot({defines:Object.assign({},wl.defines),uniforms:mi.clone(wl.uniforms),vertexShader:wl.vertexShader,fragmentShader:wl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ot({defines:Object.assign({},Ml.defines),uniforms:mi.clone(Ml.uniforms),vertexShader:Ml.vertexShader,fragmentShader:Ml.fragmentShader,blending:qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ot({uniforms:mi.clone(Yl.uniforms),vertexShader:Yl.vertexShader,fragmentShader:Yl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vh,blendDst:jo,blendEquation:fi,blendSrcAlpha:gh,blendDstAlpha:jo,blendEquationAlpha:fi}),this.blendMaterial=new Ot({uniforms:mi.clone(pd.uniforms),vertexShader:pd.vertexShader,fragmentShader:pd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Dx,blendSrc:vh,blendDst:jo,blendEquation:fi,blendSrcAlpha:gh,blendDstAlpha:jo,blendEquationAlpha:fi}),this.fsQuad=new Zc(null),this.originalClearColor=new He,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new mp,this.depthTexture.format=as,this.depthTexture.type=os,this.normalRenderTarget=new ei(this.width,this.height,{minFilter:Gt,magFilter:Gt,type:En,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=g_(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ui.OUTPUT.Off:break;case ui.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ui.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ui.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ui.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ui.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ui.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new yb,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new gp(r,e,e,Zn,bi);return s.wrapS=On,s.wrapT=On,s.needsUpdate=!0,s}}ui.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const El={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`},Tl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`},md={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`};class Sb extends ms{constructor(e,n){super(),this.edgesRT=new ei(e,n,{depthBuffer:!1,type:En}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ei(e,n,{depthBuffer:!1,type:En}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new zt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=Kt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new zt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Gt,this.searchTexture.minFilter=Gt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=mi.clone(El.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new Ot({defines:Object.assign({},El.defines),uniforms:this.uniformsEdges,vertexShader:El.vertexShader,fragmentShader:El.fragmentShader}),this.uniformsWeights=mi.clone(Tl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Ot({defines:Object.assign({},Tl.defines),uniforms:this.uniformsWeights,vertexShader:Tl.vertexShader,fragmentShader:Tl.fragmentShader}),this.uniformsBlend=mi.clone(md.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Ot({uniforms:this.uniformsBlend,vertexShader:md.vertexShader,fragmentShader:md.fragmentShader}),this.fsQuad=new Zc(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Mb="honeycutt-assets",us="img";function Ep(){return new Promise((t,e)=>{const n=indexedDB.open(Mb,1);n.onupgradeneeded=()=>n.result.createObjectStore(us,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function wb(){try{const t=await Ep();return await new Promise(e=>{const n=t.transaction(us).objectStore(us).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function Eb(t){const e=await Ep();return new Promise(n=>{const i=e.transaction(us,"readwrite");i.objectStore(us).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function Tb(t){const e=await Ep();return new Promise(n=>{const i=e.transaction(us,"readwrite");i.objectStore(us).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function Ab(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const v_=Ce.createContext(null);let bb=1;function Cb({children:t}){const[e,n]=Ce.useState([]);Ce.useEffect(()=>{wb().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=Ce.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await Ab(l.result),d={id:`a${Date.now().toString(36)}${bb++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await Eb(d),n(f=>[d,...f]),a(d)},l.readAsDataURL(o)}),[]),r=Ce.useCallback(async o=>{await Tb(o),n(a=>a.filter(l=>l.id!==o))},[]),s=Ce.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return g.jsx(v_.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function Tp(){return Ce.useContext(v_)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function jn(t,e){const n=new He(t);return e>=0?n.lerp(new He("#ffffff"),e):n.lerp(new He("#000000"),-e),n}function je(t,e=.75,n=.04,i={}){return new Sn({color:new He(t),roughness:e,metalness:n,...i})}function Ye(t,e,n,i){const r=new Je(new cn(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function Ct(t,e,n,i,r=28){const s=new Je(new qc(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function Pe(t,e,n,i){return t.position.set(e,n,i),t}function ko(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(Pe(Ye(s,i,s,o),l,i/2,c))}const ag={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.85),a=je(jn(s,.08),.9),l=je("#2b2b2e",.5,.3),c=r*.42,d=Math.min(.16,n*.12),f=r;t.add(Pe(Ye(n,c,i,o),0,c/2+.08,0)),t.add(Pe(Ye(n,f-.1,.16,o),0,(f-.1)/2+.08,-i/2+.08)),t.add(Pe(Ye(d,c+.16,i,o),n/2-d/2,(c+.16)/2+.08,0)),t.add(Pe(Ye(d,c+.16,i,o),-n/2+d/2,(c+.16)/2+.08,0));const h=n-d*2-.04,m=n>1.3?Math.round(n/.9):1,y=h/m;for(let M=0;M<m;M++){const _=-h/2+y/2+M*y;t.add(Pe(Ye(y-.04,.16,i-.28,a),_,c+.16,.04)),t.add(Pe(Ye(y-.06,.2,.16,a),_,c+.24,-i/2+.24))}ko(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.7,.05),a=r*.5;t.add(Pe(Ye(n,.06,i,o),0,a,0)),t.add(Pe(Ye(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),ko(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.7);t.add(Pe(Ye(n,.1,i,o),0,r-.05,0)),ko(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=je(r,.6,.1);t.add(Pe(Ct(n/2,n/2,.08,s),0,i-.04,0)),t.add(Pe(Ct(.03,.04,i-.08,je("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(Pe(Ct(n*.34,n*.34,.02,je("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.45,.05);t.add(Pe(Ye(n,.06,i,o),0,r-.03,0)),ko(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=je(r,.45,.05);t.add(Pe(Ct(n/2,n/2,.06,s),0,i-.03,0)),t.add(Pe(Ct(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(Pe(Ct(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.5,.06);t.add(Pe(Ye(n,.05,i,o),0,r-.025,0)),t.add(Pe(Ye(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(Pe(Ye(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(Pe(Ye(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=je("#5b4a3a",.6),a=je(s,.9),l=je(jn(s,.12),.95),c=r*.5;t.add(Pe(Ye(n,c,i,o),0,c/2,0)),t.add(Pe(Ye(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(Pe(Ye(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(Pe(Ye(n-.12,.1,i*.62,je(jn(s,-.05),.9)),0,c+.2,i*.12));const d=(n-.2)/2;t.add(Pe(Ye(d-.04,.12,.34,l),-d/2,c+.24,-i/2+.32)),t.add(Pe(Ye(d-.04,.12,.34,l),d/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.55),a=je("#caa86a",.3,.7);t.add(Pe(Ye(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(Pe(Ct(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(Pe(Ct(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),ko(t,n-.08,i-.08,.06,.05,.04,je("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.55),a=je("#caa86a",.3,.7);t.add(Pe(Ye(n,r,i,o),0,r/2,0)),t.add(Pe(Ye(.012,r-.1,.01,je(jn(s,-.3),.6)),0,r/2,i/2+.002)),t.add(Pe(Ct(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(Pe(Ct(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.55),a=je(jn(s,.06),.6),l=je("#caa86a",.3,.7);t.add(Pe(Ye(n,r,i,o),0,r/2,0));const c=r>.6?3:1,d=(r-.08)/c;for(let f=0;f<c;f++){const h=.04+d/2+f*d;t.add(Pe(Ye(n-.06,d-.03,.02,a),0,h,i/2+.005)),t.add(Pe(Ct(.01,.01,.12,l),0,h,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.6),a=.04;t.add(Pe(Ye(a,r,i,o),-n/2+a/2,r/2,0)),t.add(Pe(Ye(a,r,i,o),n/2-a/2,r/2,0)),t.add(Pe(Ye(n,a,i,o),0,a/2,0)),t.add(Pe(Ye(n,a,i,o),0,r-a/2,0)),t.add(Pe(Ye(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const d=r/(l+1)*c;t.add(Pe(Ye(n-a*2,a*.7,i-.04,o),0,d,0));const f=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let h=-n/2+a+.04;for(;h<n/2-a-.06;){const m=.03+Math.random()*.03,y=.12+Math.random()*.08;t.add(Pe(Ye(m,y,i*.6,je(f[Math.floor(Math.random()*f.length)],.8)),h+m/2,d+a*.35+y/2,0)),h+=m+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=je("#2b2b2e",.4,.4),o=je(r,.4,.3),a=new Sn({color:"#10141c",roughness:.2,metalness:.1,emissive:new He("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(Pe(Ye(n,i,.05,o),0,l+i/2,0));const c=new Je(new cs(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(Pe(Ct(.03,.04,l,s),0,l/2,0)),t.add(Pe(Ye(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=je(r,1,0),o=Ye(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=Ye(n*.86,.022,i*.78,je(jn(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=Ct(n/2,n/2,.02,je(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=Ct(n*.36,n*.36,.022,je(jn(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=je("#9a7a55",.7),o=i*.28;t.add(Pe(Ct(n*.36,n*.28,o,s),0,o/2,0)),t.add(Pe(Ct(.03,.03,i*.45,je("#5a4030",.8)),0,o+i*.2,0));const a=(c,d,f,h,m)=>{const y=new Je(new _p(d,0),je(c,.9));y.castShadow=!0,t.add(Pe(y,f,h,m))},l=o+i*.4;a(jn(r,.05),n*.42,0,l+n*.2,0),a(jn(r,-.1),n*.34,n*.22,l+n*.45,.04),a(jn(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(jn(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=je("#3a3a3e",.4,.6);t.add(Pe(Ct(n*.32,n*.36,.04,s),0,.02,0)),t.add(Pe(Ct(.018,.018,i*.78,s),0,i*.4,0));const o=new Je(new vp(n*.42,i*.22,24,1,!0),new Sn({color:new He(r),roughness:.6,emissive:new He(r),emissiveIntensity:.5,side:Un}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new p_(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.35,.5),a=je("#888",.3,.8);t.add(Pe(Ye(n,r,i,o),0,r/2,0)),t.add(Pe(Ye(n,.015,.005,je(jn(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(Pe(Ct(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(Pe(Ct(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=je("#d8d2c8",.6),a=je(s,.3,.2);t.add(Pe(Ye(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(Pe(Ye(n,.05,i,a),0,r-.025,0)),t.add(Pe(Ye(n*.3,.02,i*.5,je("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=je(s,.35,.4);t.add(Pe(Ye(n,r,i,o),0,r/2,0));const a=je("#1a1a1d",.3,.2);t.add(Pe(Ye(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(Pe(Ct(n*.11,n*.11,.01,je("#333",.5)),n*l,r+.02,i*c))}};function Rb(t){const e=hi[t.type];if(!e)return new gi;const n=new gi,i={...e,color:t.color||e.color};return(ag[e.shape]||ag.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function Hr(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const x_=[{id:"oak_floor",label:"Oak Floor",group:"Wood",color:"#806042",normal:!0,repeat:1.4},{id:"light_oak",label:"Light Oak",group:"Wood",color:"#a17e58",normal:!0,repeat:1},{id:"walnut",label:"Walnut",group:"Wood",color:"#3e190b",normal:!0,repeat:1},{id:"parquet",label:"Parquet",group:"Wood",color:"#93704d",normal:!0,repeat:1.2},{id:"marble",label:"Marble",group:"Stone",color:"#b29d7a",normal:!0,repeat:2},{id:"granite",label:"Granite",group:"Stone",color:"#4e4e4f",normal:!1,repeat:1.6},{id:"floor_tile",label:"Floor Tile",group:"Tile",color:"#796f6b",normal:!0,repeat:1.2},{id:"brick",label:"Brick",group:"Masonry",color:"#8e6750",normal:!0,repeat:1.6},{id:"concrete",label:"Concrete",group:"Masonry",color:"#565654",normal:!0,repeat:2.2},{id:"plaster",label:"Plaster",group:"Wall",color:"#b0a89d",normal:!0,repeat:2.4},{id:"fabric",label:"Fabric",group:"Soft",color:"#9a5955",normal:!0,repeat:.8},{id:"carpet",label:"Carpet",group:"Soft",color:"#352f25",normal:!1,repeat:1.5}],gd=Object.fromEntries(x_.map(t=>[t.id,t])),rf=(t,e=!1)=>`./textures/${t}${e?"_n":""}.jpg`,Pb="./hdri/studio.hdr",lg={day:{bg:"#0e1014",exposure:1.05,env:1,key:["#fff4e0",2],fill:["#cdddff",.5],hemi:.55,amb:.25},dusk:{bg:"#171009",exposure:1.12,env:.5,key:["#ffb877",1.9],fill:["#8a78d0",.45],hemi:.35,amb:.16},night:{bg:"#080a0f",exposure:1.18,env:.18,key:["#9fb6ff",.5],fill:["#4a5fb0",.3],hemi:.14,amb:.08}},cg=(t,e)=>Math.round(t/e)*e,Is=t=>Math.max(0,Math.min(255,Math.round(t))),Lb={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function Db(t="#b08a5e"){const e=new He(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let d=0;d<a;d++){const f=(Math.random()-.5)*36;o.fillStyle=`rgb(${Is(n+f)},${Is(i+f)},${Is(r+f)})`,o.fillRect(0,d*l,512,l);for(let h=0;h<60;h++){o.strokeStyle=`rgba(${Is(n*.45)},${Is(i*.4)},${Is(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const m=d*l+Math.random()*l;o.moveTo(0,m),o.bezierCurveTo(170,m+(Math.random()-.5)*6,340,m+(Math.random()-.5)*6,512,m),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,d*l,512,2)}const c=new RA(s);return c.wrapS=c.wrapT=On,c.colorSpace=un,c}function Nb({onOpenInspector:t}){const{state:e,dispatch:n}=Ji(),{rooms:i,walls:r,items:s,builtins:o,selected:a,ambiance:l}=e,{map:c}=Tp(),d=Ce.useRef(null),f=Ce.useRef(null),h=Ce.useRef({}),m=Ce.useRef({});m.current={rooms:i,walls:r,items:s,selected:a,dispatch:n,onOpenInspector:t};function y(p){const S=h.current;if(!p||typeof p!="string")return null;if(p.startsWith("wood:")){const C=p.slice(5);return S.woodCache.has(C)||S.woodCache.set(C,Db(Lb[C]||"#c79a6b")),S.woodCache.get(C)}if(p.startsWith("img:")){const C=p.slice(4);if(!S.imgCache.has(C)){const w=c[C];if(!w)return null;const E=new ud().load(w);E.colorSpace=un,E.wrapS=E.wrapT=On,S.imgCache.set(C,E)}return S.imgCache.get(C)}if(p.startsWith("mat:")){const C=p.slice(4);if(!gd[C])return null;const w=`mat:${C}`;if(!S.imgCache.has(w)){const E=new ud().load(rf(C));E.colorSpace=un,E.wrapS=E.wrapT=On,S.imgCache.set(w,E)}return S.imgCache.get(w)}return null}function M(p){const S=h.current;if(typeof p!="string"||!p.startsWith("mat:"))return null;const C=p.slice(4),w=gd[C];if(!w||!w.normal)return null;const E=`nrm:${C}`;if(!S.imgCache.has(E)){const b=new ud().load(rf(C,!0));b.wrapS=b.wrapT=On,S.imgCache.set(E,b)}return S.imgCache.get(E)}function _(p){var S;return typeof p!="string"||!p.startsWith("mat:")?null:((S=gd[p.slice(4)])==null?void 0:S.repeat)||null}function u(p,S,C,w,E,b=1.5,z={}){const x=y(p);if(x){const T=_(p)||b,B=Math.max(1,w/T),H=Math.max(1,E/T),q=x.clone();q.needsUpdate=!0,q.wrapS=q.wrapT=On,q.colorSpace=un,h.current.roomTexList.push(q),q.repeat.set(B,H);const Q=new Sn({map:q,...z}),j=M(p);if(j){const K=j.clone();K.needsUpdate=!0,K.wrapS=K.wrapT=On,K.repeat.set(B,H),h.current.roomTexList.push(K),Q.normalMap=K,Q.normalScale=new Ue(.6,.6)}return Q}return new Sn({color:new He(S||C),...z})}Ce.useEffect(()=>{const p=d.current,S=p.clientWidth,C=p.clientHeight,w=new AA({antialias:!0,preserveDrawingBuffer:!0});w.setSize(S,C),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.shadowMap.enabled=!0,w.shadowMap.type=Lx,w.toneMapping=np,w.toneMappingExposure=1.05,w.outputColorSpace=un,p.appendChild(w.domElement);const E=new d_;E.background=new He("#0e1014");const b=new ef(w);try{E.environment=b.fromScene(new ob,.04).texture}catch{}new ab().load(Pb,ue=>{try{ue.mapping=xc;const P=b.fromEquirectangular(ue).texture;h.current.scene&&(h.current.scene.environment=P,h.current.envMap=P)}catch{}ue.dispose()},void 0,()=>{});const z=new In(50,S/C,.1,200),x=new YA(z,w.domElement);x.enableDamping=!0,x.dampingFactor=.08,x.minDistance=1.2,x.maxDistance=60,x.maxPolarAngle=Math.PI/2-.04,x.minPolarAngle=.16,x.enablePan=!0,x.rotateSpeed=.7;const T=new zA("#dfe6f0","#2a2620",.55);E.add(T);const B=new HA("#ffffff",.25);E.add(B);const H=new $0("#fff4e0",2);H.position.set(8,14,6),H.castShadow=!0,H.shadow.mapSize.set(4096,4096),H.shadow.camera.near=1,H.shadow.camera.far=80,H.shadow.bias=-3e-4,H.shadow.normalBias=.02,H.shadow.radius=4;const q=H.shadow.camera;q.left=-20,q.right=20,q.top=20,q.bottom=-20,E.add(H);const Q=new $0("#cdddff",.5);Q.position.set(-9,7,-5),E.add(Q);let j=null,K=null;try{j=new fb(w),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.setSize(S,C),j.addPass(new pb(E,z)),K=new ui(E,z,S,C),K.output=ui.OUTPUT.Default,K.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),K.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),j.addPass(K),j.addPass(new Sb(S,C)),j.addPass(new gb)}catch{j=null}const k=new Je(new cs(160,160),new Sn({color:"#0c0d11",roughness:1}));k.rotation.x=-Math.PI/2,k.position.y=-.04,k.receiveShadow=!0,E.add(k);const te=new WA(160,160,2896444,1645859);te.position.y=-.02,E.add(te);const $=new gi,ae=new gi,ge=new gi;E.add($,ae,ge);const pe=new Je(new yp(.46,.5,48),new Xc({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:Un}));pe.rotation.x=-Math.PI/2,pe.position.y=.03,pe.visible=!1,pe.renderOrder=2,E.add(pe);const ee=new gi,ne=new Je(new Mp(.5,.035,12,48),new Sn({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));ne.rotation.x=-Math.PI/2,ne.userData.gizmo=!0,ee.add(ne);for(let ue=0;ue<4;ue++){const P=ue/4*Math.PI*2,A=new Je(new Sp(.07,16,16),new Sn({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));A.position.set(Math.cos(P)*.5,0,Math.sin(P)*.5),A.userData.gizmo=!0,ee.add(A)}ee.visible=!1,ee.renderOrder=3,E.add(ee),Object.assign(h.current,{renderer:w,scene:E,camera:z,controls:x,roomGroup:$,furnitureGroup:ae,key:H,fill:Q,ambient:B,hemi:T,pmrem:b,ring:pe,gizmo:ee,builtinGroup:ge,composer:j,gtao:K,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new GA,drag:null,rotate:null,pending:null});const xe=new Bi(new Y(0,1,0),0),ce=w.domElement,Ae=new Ue,Re=ue=>{const P=ce.getBoundingClientRect();Ae.set((ue.clientX-P.left)/P.width*2-1,-((ue.clientY-P.top)/P.height)*2+1)},ke=()=>{const ue=new Y;return h.current.raycaster.setFromCamera(Ae,z),h.current.raycaster.ray.intersectPlane(xe,ue)?ue:null},Xe=ue=>{for(;ue&&ue.userData.uid===void 0;)ue=ue.parent;return ue},Fe=ue=>{for(;ue;){if(ue.userData.gizmo)return!0;ue=ue.parent}return!1},V=ue=>{var N,F;Re(ue);const P=h.current.raycaster;P.setFromCamera(Ae,z);const{items:A,selected:U,dispatch:R}=m.current;if(h.current.gizmo.visible){const I=P.intersectObject(h.current.gizmo,!0);if(I.length&&Fe(I[0].object)){const W=A.find(ie=>ie.uid===(U==null?void 0:U.uid)),X=ke();if(W&&X){x.enabled=!1,h.current.rotate={uid:W.uid,cx:W.x,cz:W.z,startAng:Math.atan2(X.z-W.z,X.x-W.x),startRot:W.rot||0},(N=ce.setPointerCapture)==null||N.call(ce,ue.pointerId);return}}}const O=P.intersectObjects(h.current.furnitureGroup.children,!0);let D=null;for(const I of O){const W=Xe(I.object);if(W){D=W;break}}if(D){x.enabled=!1,A.find(W=>W.uid===D.userData.uid),R({type:"select",sel:{type:"item",uid:D.userData.uid}}),na(8);const I=ke();h.current.drag={uid:D.userData.uid,grp:D,offX:I?I.x-D.position.x:0,offZ:I?I.z-D.position.z:0},(F=ce.setPointerCapture)==null||F.call(ce,ue.pointerId)}else h.current.pending={x:ue.clientX,y:ue.clientY}},pt=ue=>{Re(ue);const P=h.current;if(P.rotate){const A=ke();if(!A)return;const U=Math.atan2(A.z-P.rotate.cz,A.x-P.rotate.cx);let R=P.rotate.startRot+(U-P.rotate.startAng)*180/Math.PI;R=(Math.round(R)%360+360)%360,m.current.dispatch({type:"update",sel:{type:"item",uid:P.rotate.uid},patch:{rot:R},mergeKey:`rot3d:${P.rotate.uid}`});return}if(P.drag){const A=ke();if(!A)return;m.current.dispatch({type:"update",sel:{type:"item",uid:P.drag.uid},patch:{x:cg(A.x-P.drag.offX,.05),z:cg(A.z-P.drag.offZ,.05)},mergeKey:`mv3d:${P.drag.uid}`})}},Be=ue=>{var A;const P=h.current;P.drag||P.rotate?(P.drag=null,P.rotate=null,x.enabled=!0):P.pending&&(Math.hypot(ue.clientX-P.pending.x,ue.clientY-P.pending.y)<5&&m.current.dispatch({type:"select",sel:null}),P.pending=null);try{(A=ce.releasePointerCapture)==null||A.call(ce,ue.pointerId)}catch{}};ce.addEventListener("pointerdown",V,!0),ce.addEventListener("pointermove",pt),window.addEventListener("pointerup",Be);let Ge;const Le=()=>{x.update();const ue=z.position;for(const A of h.current.walls){const U=(ue.x-A.center.x)*A.normal.x+(ue.z-A.center.z)*A.normal.z;!A.hidden&&U>.1?A.hidden=!0:A.hidden&&U<-.1&&(A.hidden=!1),A.mesh.visible=!A.hidden}const P=f.current;if(P){const{items:A,selected:U}=m.current,R=(U==null?void 0:U.type)==="item"?A.find(O=>O.uid===U.uid):null;if(R&&!h.current.drag&&!h.current.rotate){const O=hi[R.type],D=hr(O,R),N=new Y(R.x,D.h+.35,R.z).project(z),F=w.domElement,I=(N.x*.5+.5)*F.clientWidth,W=(-N.y*.5+.5)*F.clientHeight;N.z<1?(P.style.display="flex",P.style.left=`${I}px`,P.style.top=`${W}px`):P.style.display="none"}else P.style.display="none"}j?j.render():w.render(E,z),Ge=requestAnimationFrame(Le)};Le();const Ke=new ResizeObserver(()=>{const ue=p.clientWidth,P=p.clientHeight;w.setSize(ue,P),z.aspect=ue/P,z.updateProjectionMatrix(),j==null||j.setSize(ue,P)});return Ke.observe(p),()=>{var ue,P,A;cancelAnimationFrame(Ge),Ke.disconnect(),ce.removeEventListener("pointerdown",V,!0),ce.removeEventListener("pointermove",pt),window.removeEventListener("pointerup",Be),x.dispose(),Hr($),Hr(ae),Hr(ge),pe.geometry.dispose(),pe.material.dispose(),h.current.woodCache.forEach(U=>U.dispose()),h.current.imgCache.forEach(U=>U.dispose()),h.current.roomTexList.forEach(U=>U.dispose()),(P=(ue=h.current.envMap)==null?void 0:ue.dispose)==null||P.call(ue),(A=j==null?void 0:j.dispose)==null||A.call(j),b.dispose(),w.dispose(),w.domElement.parentNode===p&&p.removeChild(w.domElement)}},[]),Ce.useEffect(()=>{const p=h.current;if(!p.renderer)return;const S=lg[l]||lg.day;p.scene.background.set(S.bg),p.scene.environmentIntensity=S.env,p.renderer.toneMappingExposure=S.exposure,p.key.color.set(S.key[0]),p.key.intensity=S.key[1],p.fill.color.set(S.fill[0]),p.fill.intensity=S.fill[1],p.hemi.intensity=S.hemi,p.ambient.intensity=S.amb},[l]),Ce.useEffect(()=>{const p=h.current;if(!p.roomGroup)return;Hr(p.roomGroup),p.roomGroup.clear(),p.walls=[],p.roomTexList.forEach(b=>b.dispose()),p.roomTexList=[];const S=new Sn({color:"#cfc7ba",roughness:.8}),C=new Sn({color:"#e8e3da",roughness:.95,side:Un}),w=.1,E=(b,z,x,T,B,H,q,Q,j,K)=>{const k=new Je(new cn(z,x,T),b);k.position.set(B,H,q),k.castShadow=!0,k.receiveShadow=!0,p.roomGroup.add(k),p.walls.push({mesh:k,normal:new Y(Q,0,j),center:new Y(B,0,q),hidden:!1})};for(const b of i){const{x:z,z:x,w:T,d:B,height:H}=b,q=z+T/2,Q=x+B/2,j=b.floorTex||(b.floorColor?void 0:"wood:oak"),K=u(j,b.floorColor,"#b08a5e",T,B,1.5,{roughness:.65,metalness:.02}),k=new Je(new cs(T,B),K);k.rotation.x=-Math.PI/2,k.position.set(q,0,Q),k.receiveShadow=!0,p.roomGroup.add(k);const te=u(b.wallTex,b.wallColor,"#e8e3da",T,H,1.2,{roughness:.95,side:Un}),$=ge=>!b.wallsOn||b.wallsOn[ge]!==!1,ae=(ge,pe,ee)=>{const ne=new Je(ge,S);ne.position.set(pe,.045,ee),p.roomGroup.add(ne)};$("n")&&(E(te,T+w,H,w,q,H/2,x,0,-1),ae(new cn(T-w,.09,.04),q,x+w/2+.02)),$("s")&&(E(te,T+w,H,w,q,H/2,x+B,0,1),ae(new cn(T-w,.09,.04),q,x+B-w/2-.02)),$("w")&&(E(te,w,H,B+w,z,H/2,Q,-1,0),ae(new cn(.04,.09,B-w),z+w/2+.02,Q)),$("e")&&(E(te,w,H,B+w,z+T,H/2,Q,1,0),ae(new cn(.04,.09,B-w),z+T-w/2-.02,Q))}for(const b of r){const z=Math.hypot(b.x2-b.x1,b.z2-b.z1);if(z<.001)continue;const x=new Je(new cn(z,b.height,b.thickness),C);x.position.set((b.x1+b.x2)/2,b.height/2,(b.z1+b.z2)/2),x.rotation.y=-Math.atan2(b.z2-b.z1,b.x2-b.x1),x.castShadow=!0,x.receiveShadow=!0,p.roomGroup.add(x)}!p.framed&&(i.length||r.length||s.length)&&(v(),p.framed=!0)},[i,r,c]),Ce.useEffect(()=>{const p=h.current;if(!p.furnitureGroup)return;const S=p.itemMap,C=new Set;for(const E of s){C.add(E.uid);let b=S.get(E.uid);if(!b||b.type!==E.type||b.color!==E.color){b&&(p.furnitureGroup.remove(b.group),Hr(b.group));const x=Rb(E);p.furnitureGroup.add(x),b={group:x,type:E.type,color:E.color},S.set(E.uid,b)}b.group.position.set(E.x,0,E.z),b.group.rotation.y=-((E.rot||0)*Math.PI)/180;const z=E.scale||{};b.group.scale.set(z.x??1,z.y??1,z.z??1)}for(const[E,b]of S)C.has(E)||(p.furnitureGroup.remove(b.group),Hr(b.group),S.delete(E));const w=(a==null?void 0:a.type)==="item"?s.find(E=>E.uid===a.uid):null;if(w){const E=hi[w.type],b=hr(E,w),z=Math.max(b.w,b.d)/2*1.18+.12;p.ring.scale.setScalar(z/.5),p.ring.position.set(w.x,.03,w.z),p.ring.visible=!0,p.gizmo.scale.setScalar(z/.5),p.gizmo.position.set(w.x,.04,w.z),p.gizmo.visible=!0}else p.ring.visible=!1,p.gizmo.visible=!1},[s,a]),Ce.useEffect(()=>{const p=h.current;if(!p.builtinGroup)return;Hr(p.builtinGroup),p.builtinGroup.clear();const S=.03;for(const C of o){const w=ep(C.wall,i,r);if(!w)continue;const E=y(C.tex),b=M(C.tex),z=E?new Sn({map:E,normalMap:b||null,roughness:.6,metalness:.04}):new Sn({color:new He(C.color||"#c7ad84"),roughness:.62,metalness:.04});if(C.kind==="board"){const K=(C.u1+C.u2)/2,k=(C.v1+C.v2)/2,te=C.u2-C.u1,$=C.v2-C.v1,ae=Math.hypot(te,$)||1e-6,ge=te/ae,pe=$/ae,ee=new Y(w.dirx*ge,pe,w.dirz*ge),ne=new Y(-w.dirx*pe,ge,-w.dirz*pe),xe=new Y(w.nx,0,w.nz),ce=new rt().makeBasis(ee,ne,xe);ce.setPosition(w.ox+w.dirx*K+w.nx*(C.depth/2),k,w.oz+w.dirz*K+w.nz*(C.depth/2));const Ae=new Je(new cn(ae,C.thickness||.05,C.depth||.04),z);Ae.castShadow=!0,Ae.receiveShadow=!0,Ae.matrixAutoUpdate=!1,Ae.matrix.copy(ce),p.builtinGroup.add(Ae);continue}const x=new rt,T=new Y(w.dirx,0,w.dirz),B=new Y(0,1,0),H=new Y(w.nx,0,w.nz);x.makeBasis(T,B,H);const q=C.u+C.w/2;x.setPosition(w.ox+w.dirx*q+w.nx*(C.depth/2),C.v+C.h/2,w.oz+w.dirz*q+w.nz*(C.depth/2));const Q=new gi;Q.matrixAutoUpdate=!1,Q.matrix.copy(x);const j=(K,k,te,$,ae,ge)=>{const pe=new Je(new cn(K,k,te),z);pe.position.set($,ae,ge),pe.castShadow=!0,pe.receiveShadow=!0,Q.add(pe)};C.kind==="cubby"?(j(C.w,C.h,S,0,0,-C.depth/2+S/2),j(C.w,S,C.depth,0,C.h/2-S/2,0),j(C.w,S,C.depth,0,-C.h/2+S/2,0),j(S,C.h,C.depth,-C.w/2+S/2,0,0),j(S,C.h,C.depth,C.w/2-S/2,0,0)):j(C.w,C.h,C.depth,0,0,0),p.builtinGroup.add(Q)}},[o,i,r,c]);function v(){const p=h.current;if(!p.camera)return;const{rooms:S,walls:C,items:w}=m.current;let E=1/0,b=-1/0,z=1/0,x=-1/0,T=2.7;const B=(K,k)=>{E=Math.min(E,K),b=Math.max(b,K),z=Math.min(z,k),x=Math.max(x,k)};for(const K of S)B(K.x,K.z),B(K.x+K.w,K.z+K.d),T=Math.max(T,K.height);for(const K of C)B(K.x1,K.z1),B(K.x2,K.z2),T=Math.max(T,K.height);for(const K of w)B(K.x,K.z);isFinite(E)||(E=-2,b=2,z=-2,x=2);const H=(E+b)/2,q=(z+x)/2,Q=Math.max(b-E,x-z,2),j=Q*1.1+4;p.camera.position.set(H+Q*.45,Q*.8+3,q+j),p.controls.target.set(H,T*.3,q),p.controls.update()}return g.jsxs("div",{className:"scene3d",ref:d,children:[g.jsx("button",{className:"recenter",onClick:v,"aria-label":"Recenter view",children:g.jsx($f,{size:20})}),g.jsx("button",{ref:f,className:"piece-menu",style:{display:"none"},"aria-label":"Edit piece",title:"Edit this piece",onPointerDown:p=>p.stopPropagation(),onClick:p=>{var S,C;p.stopPropagation(),(C=(S=m.current).onOpenInspector)==null||C.call(S)},children:g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:[g.jsx("circle",{cx:"5",cy:"12",r:"1.8"}),g.jsx("circle",{cx:"12",cy:"12",r:"1.8"}),g.jsx("circle",{cx:"19",cy:"12",r:"1.8"})]})})]})}function ai({icon:t,label:e,active:n,accent:i,onClick:r}){return g.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,g.jsx("span",{children:e})]})}function Ib({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=Ji(),{view:r,tool:s,sideTool:o,ambiance:a}=n;return g.jsxs("aside",{className:"rail",children:[g.jsxs("div",{className:"rail-group",children:[r==="2d"&&g.jsxs(g.Fragment,{children:[g.jsx(ai,{icon:g.jsx(Wm,{size:20}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),g.jsx(ai,{icon:g.jsx(jm,{size:20}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),g.jsx(ai,{icon:g.jsx(Xm,{size:20}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})}),g.jsx(ai,{icon:g.jsx(yS,{size:20}),label:"Sketch",active:s==="sketch",onClick:()=>i({type:"tool",tool:"sketch"})})]}),r==="side"&&g.jsxs(g.Fragment,{children:[g.jsx(ai,{icon:g.jsx(Wm,{size:20}),label:"Select",active:o==="select",onClick:()=>i({type:"sideTool",tool:"select"})}),g.jsx(ai,{icon:g.jsx(jm,{size:20}),label:"Box",active:o==="box",onClick:()=>i({type:"sideTool",tool:"box"})}),g.jsx(ai,{icon:g.jsx(Xm,{size:20}),label:"Board",active:o==="board",onClick:()=>i({type:"sideTool",tool:"board"})}),g.jsx(ai,{icon:g.jsx(pS,{size:20}),label:"Presets",active:e==="presets",onClick:()=>t("presets")})]}),r==="3d"&&g.jsx(g.Fragment,{children:["day","dusk","night"].map(l=>g.jsx(ai,{icon:g.jsx(vS,{size:20}),label:l[0].toUpperCase()+l.slice(1),active:a===l,onClick:()=>i({type:"ambiance",value:l})},l))})]}),g.jsxs("div",{className:"rail-group bottom",children:[g.jsx(ai,{icon:g.jsx(uS,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),g.jsx(ai,{icon:g.jsx(hS,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}function Ub({item:t}){const e={w:86,h:60},n=t.w/t.d;let i=e.w,r=i/n;return r>e.h&&(r=e.h,i=r*n),g.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:g.jsx(Ax,{item:t,wpx:i,dpx:r})})}function Ob({onPick:t}){const{state:e}=Ji(),{units:n}=e,[i,r]=Ce.useState("All"),s=["All",...Q1],o=Ce.useMemo(()=>i==="All"?zl:zl.filter(a=>a.category===i),[i]);return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:"Furniture"}),g.jsxs("div",{className:"sub",children:[zl.length," premium pieces · tap to place"]})]})}),g.jsx("div",{className:"cats",children:s.map(a=>g.jsx("button",{className:`chip ${i===a?"active":""}`,onClick:()=>r(a),children:a},a))}),g.jsx("div",{className:"grid",children:o.map(a=>g.jsxs("button",{className:"card",onClick:()=>t(a.type),children:[g.jsx("div",{className:"thumb",children:g.jsx(Ub,{item:a})}),g.jsx("div",{className:"name",children:a.name}),g.jsxs("div",{className:"dim",children:[qe(a.w,n)," × ",qe(a.d,n)]})]},a.type))})]})}const kb=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function zo({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=Tp(),s=Ce.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var h;const d=(h=c.target.files)==null?void 0:h[0];if(c.target.value="",!d)return;const f=await r(d);e({color:"#ffffff",tex:`img:${f.id}`})};return g.jsxs("div",{className:"finish",children:[g.jsxs("div",{className:"finish-row",children:[J1.map(c=>g.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),g.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:g.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"finish-label",children:["Materials ",g.jsx("span",{className:"finish-by",children:"Poly Haven · CC0"})]}),g.jsx("div",{className:"finish-row",children:x_.map(c=>g.jsx("button",{className:`swatch img ${a===`mat:${c.id}`?"active":""}`,style:{backgroundImage:`url(${rf(c.id)})`},onClick:()=>e({color:c.color,tex:`mat:${c.id}`}),"aria-label":c.label,title:c.label},c.id))}),g.jsx("div",{className:"finish-label",children:"Wood"}),g.jsx("div",{className:"finish-row",children:kb.map(c=>g.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),g.jsx("div",{className:"finish-label",children:"Your images"}),g.jsxs("div",{className:"finish-row",children:[i.map(c=>g.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),g.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),g.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Oi({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:t}),g.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),g.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function vd({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=f=>Math.max(n,Math.min(i,f)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,d=(f,h)=>s(o((f*12+h)*.0254));return g.jsxs("div",{className:"row measure-row",children:[g.jsxs("div",{className:"measure-head",children:[g.jsx("div",{className:"label",children:t}),g.jsx("div",{className:"measure-inputs",children:r==="ft"?g.jsxs(g.Fragment,{children:[g.jsx("input",{type:"number",value:l,min:0,step:1,onChange:f=>d(Math.max(0,Math.floor(Number(f.target.value)||0)),c)}),g.jsx("span",{className:"u",children:"ft"}),g.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:f=>d(l,Number(f.target.value)||0)}),g.jsx("span",{className:"u",children:"in"})]}):g.jsxs(g.Fragment,{children:[g.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:f=>s(o(Number(f.target.value)||n))}),g.jsx("span",{className:"u",children:"m"})]})})]}),g.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:f=>s(Number(f.target.value))})]})}function zb({onClose:t,onFlash:e}){const{state:n,dispatch:i}=Ji(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c,sketches:d}=n;if(!r)return null;const f=r,h=(u,v)=>i({type:"update",sel:f,patch:u,mergeKey:v}),m=()=>{i({type:"remove",sel:f}),e==null||e("Removed"),t()},y=()=>{i({type:"duplicate",sel:f}),e==null||e("Duplicated"),t()};if(f.type==="roomwall"){const u=a.find(C=>C.uid===f.uid);if(!u)return null;const v={n:"North",e:"East",s:"South",w:"West"},p=!u.wallsOn||u.wallsOn[f.side]!==!1,S=()=>i({type:"update",sel:{type:"room",uid:u.uid},patch:{wallsOn:{...u.wallsOn||{},[f.side]:!p}}});return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:"Wall section",sub:`${v[f.side]} wall of this room`}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Status"}),g.jsx("div",{className:"val",children:p?"Closed":"Open (doorway)"})]}),g.jsx("div",{className:"btn-row",children:p?g.jsxs("button",{className:"btn danger",onClick:S,children:[g.jsx(Ir,{size:18})," Remove wall"]}):g.jsx("button",{className:"btn accent",onClick:S,children:"Add wall back"})})]})]})}if(f.type==="item"){const u=o.find(w=>w.uid===f.uid),v=u&&hi[u.type];if(!u||!v)return null;const p=hr(v,u),S=u.scale||{},C=Math.round(((S.x??1)+(S.z??1))/2*100);return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:v.name,sub:`${qe(p.w,s)} × ${qe(p.d,s)} × ${qe(p.h,s)}`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Colour"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(zo,{value:{color:u.color||v.color},allowTexture:!1,onChange:w=>h({color:w.color})})})]}),g.jsx(Oi,{label:"Size",value:C,min:30,max:300,step:1,onChange:w=>h({scale:{x:w/100,y:w/100,z:w/100}},`sz:${u.uid}`),display:`${C}%`}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Footprint"}),g.jsxs("div",{className:"val",children:[qe(p.w,s)," × ",qe(p.d,s)]})]}),g.jsx(Oi,{label:"Rotation",value:u.rot||0,min:0,max:359,step:1,onChange:w=>h({rot:w},`rot:${u.uid}`),display:`${Math.round(u.rot||0)}°`}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Quick turn"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(w=>g.jsxs("button",{className:"chip",style:(u.rot||0)===w?xd:void 0,onClick:()=>h({rot:w}),children:[w,"°"]},w))})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:()=>h({rot:((u.rot||0)+90)%360}),children:[g.jsx(dS,{size:18})," Rotate"]}),g.jsxs("button",{className:"btn",onClick:y,children:[g.jsx(xs,{size:18})," Duplicate"]})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("button",{className:"btn",onClick:()=>h({scale:{x:1,y:1,z:1}}),children:"Reset size"}),g.jsxs("button",{className:"btn danger",onClick:m,children:[g.jsx(Ir,{size:18})," Delete"]})]})]})]})}if(f.type==="room"){const u=a.find(p=>p.uid===f.uid);if(!u)return null;const v=u.w*u.d;return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:"Room",sub:`${qe(u.w,s)} × ${qe(u.d,s)}`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsx(vd,{label:"Width",m:u.w,min:.5,max:40,units:s,onChange:p=>h({w:p},`rw:${u.uid}`)}),g.jsx(vd,{label:"Depth",m:u.d,min:.5,max:40,units:s,onChange:p=>h({d:p},`rd:${u.uid}`)}),g.jsx(vd,{label:"Wall height",m:u.height,min:1.5,max:6,units:s,onChange:p=>h({height:p},`rh:${u.uid}`)}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Floor area"}),g.jsx("div",{className:"val",children:s==="m"?`${v.toFixed(1)} m²`:`${Math.round(v*10.7639)} ft²`})]}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Wall sides"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([p,S])=>{const C=!u.wallsOn||u.wallsOn[p]!==!1;return g.jsx("button",{className:"chip",style:C?xd:void 0,onClick:()=>h({wallsOn:{...u.wallsOn||{},[p]:!C}}),children:S},p)})})]}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Flooring"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(zo,{value:{color:u.floorColor,tex:u.floorTex},onChange:p=>h({floorColor:p.color,floorTex:p.tex})})})]}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Wall finish"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(zo,{value:{color:u.wallColor,tex:u.wallTex},onChange:p=>h({wallColor:p.color,wallTex:p.tex})})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:y,children:[g.jsx(xs,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:m,children:[g.jsx(Ir,{size:18})," Delete"]})]})]})]})}if(f.type==="builtin"){const u=c.find(v=>v.uid===f.uid);if(!u)return null;if(u.kind==="board"){const v=Math.hypot(u.u2-u.u1,u.v2-u.v1);return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:"Board",sub:`${qe(v,s)} long`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Length"}),g.jsx("div",{className:"val",children:qe(v,s)})]}),g.jsx(Oi,{label:"Width",value:u.thickness,min:.01,max:.4,step:.005,onChange:p=>h({thickness:p},`bt:${u.uid}`),display:qe(u.thickness,s)}),g.jsx(Oi,{label:"Depth",value:u.depth,min:.02,max:.6,step:.01,onChange:p=>h({depth:p},`bd:${u.uid}`),display:qe(u.depth,s)}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Finish"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(zo,{value:{color:u.color,tex:u.tex},onChange:p=>h({color:p.color,tex:p.tex})})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:y,children:[g.jsx(xs,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:m,children:[g.jsx(Ir,{size:18})," Delete"]})]})]})]})}return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:"Built-in",sub:`${qe(u.w,s)} × ${qe(u.h,s)} × ${qe(u.depth,s)} deep`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Style"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([v,p])=>g.jsx("button",{className:"chip",style:u.kind===v?xd:void 0,onClick:()=>h({kind:v}),children:p},v))})]}),g.jsx(Oi,{label:"Width",value:u.w,min:.1,max:12,step:.05,onChange:v=>h({w:v},`bw:${u.uid}`),display:qe(u.w,s)}),g.jsx(Oi,{label:"Height",value:u.h,min:.1,max:6,step:.05,onChange:v=>h({h:v},`bh:${u.uid}`),display:qe(u.h,s)}),g.jsx(Oi,{label:"Depth",value:u.depth,min:.05,max:3,step:.05,onChange:v=>h({depth:v},`bd:${u.uid}`),display:qe(u.depth,s)}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Finish"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(zo,{value:{color:u.color,tex:u.tex},onChange:v=>h({color:v.color,tex:v.tex})})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:y,children:[g.jsx(xs,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:m,children:[g.jsx(Ir,{size:18})," Delete"]})]})]})]})}if(f.type==="sketch"){const u=d.find(w=>w.uid===f.uid);if(!u)return null;const v=u.pts,p=u.closed?v.length:v.length-1;let S=0;for(let w=0;w<p;w++){const E=v[w],b=v[(w+1)%v.length];S+=Math.hypot(b.x-E.x,b.z-E.z)}let C=0;if(u.closed&&v.length>=3){for(let w=0,E=v.length-1;w<v.length;E=w++)C+=(v[E].x+v[w].x)*(v[E].z-v[w].z);C=Math.abs(C/2)}return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:"Sketch",sub:`${u.closed?"Closed shape":"Open outline"} · ${v.length} points`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Perimeter"}),g.jsx("div",{className:"val",children:qe(S,s)})]}),u.closed&&g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Area"}),g.jsx("div",{className:"val",children:aS(C,s)})]}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Edges"}),g.jsx("div",{className:"val",style:{marginLeft:"auto",textAlign:"right",lineHeight:1.6},children:Array.from({length:p},(w,E)=>{const b=v[E],z=v[(E+1)%v.length];return g.jsx("div",{children:qe(Math.hypot(z.x-b.x,z.z-b.z),s)},E)})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:y,children:[g.jsx(xs,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:m,children:[g.jsx(Ir,{size:18})," Delete"]})]})]})]})}const M=l.find(u=>u.uid===f.uid);if(!M)return null;const _=Math.hypot(M.x2-M.x1,M.z2-M.z1);return g.jsxs(g.Fragment,{children:[g.jsx(Vr,{title:"Wall",sub:`${qe(_,s)} long`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Length"}),g.jsx("div",{className:"val",children:qe(_,s)})]}),g.jsx(Oi,{label:"Height",value:M.height,min:1.5,max:6,step:.1,onChange:u=>h({height:u},`wh:${M.uid}`),display:qe(M.height,s)}),g.jsx(Oi,{label:"Thickness",value:M.thickness,min:.05,max:.4,step:.01,onChange:u=>h({thickness:u},`wt:${M.uid}`),display:qe(M.thickness,s)}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:y,children:[g.jsx(xs,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:m,children:[g.jsx(Ir,{size:18})," Delete"]})]})]})]})}const xd={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function Vr({title:t,sub:e}){return g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:t}),g.jsx("div",{className:"sub",children:e})]})})}function Fb({onFlash:t,onClose:e}){const{state:n,dispatch:i}=Ji(),{units:r,defaultHeight:s,rooms:o,walls:a,items:l}=n,{assets:c,addAsset:d,removeAsset:f}=Tp(),h=Ce.useRef(null),m=async y=>{const M=[...y.target.files||[]];y.target.value="";for(const _ of M)await d(_);M.length&&(t==null||t("Image added"))};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:"Settings"}),g.jsxs("div",{className:"sub",children:[o.length," rooms · ",a.length," walls · ",l.length," items"]})]})}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Units"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([y,M])=>g.jsx("button",{className:"chip",style:r===y?Bb:void 0,onClick:()=>i({type:"units",value:y}),children:M},y))})]}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"New wall height"}),g.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:s,onChange:y=>i({type:"defaultHeight",value:Number(y.target.value)})}),g.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:qe(s,r)})]}),g.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:g.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"My images"}),g.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[c.map(y=>g.jsxs("div",{className:"asset-tile",children:[g.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${y.dataUrl})`}}),g.jsx("button",{className:"asset-del",onClick:()=>f(y.id),"aria-label":"Delete image",children:"×"})]},y.id)),g.jsx("button",{className:"swatch upload",onClick:()=>{var y;return(y=h.current)==null?void 0:y.click()},"aria-label":"Upload image",children:"+"}),g.jsx("input",{ref:h,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:m})]})]}),g.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:g.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),g.jsxs("div",{className:"btn-row",children:[g.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),g.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const Bb={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function Hb({onClose:t,onFlash:e}){var f,h,m;const{state:n,dispatch:i}=Ji(),{rooms:r,walls:s,sideWall:o}=n,a=Rx(r,s),l=o&&((f=a.find(y=>ia(y.ref,o)))==null?void 0:f.ref)||((h=a[0])==null?void 0:h.ref),c=l?ep(l,r,s):null,d=l?(m=a.find(y=>ia(y.ref,l)))==null?void 0:m.label:null;return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:"Presets"}),g.jsx("div",{className:"sub",children:c?`Drop a kit onto ${d}`:"Draw a room or wall first"})]})}),g.jsxs("div",{className:"insp",children:[!c&&g.jsx("div",{className:"panel-empty",children:"Go to the Plan view and draw a room or wall, then come back to drop in cabinetry, a bunk bed and more."}),c&&g.jsx("div",{className:"preset-list",children:PS.map(y=>g.jsx("button",{className:"preset-card",onClick:()=>{i({type:"addBuiltins",list:LS(y.id,c,l)}),e==null||e(`Added ${y.name}`),t()},children:y.name},y.id))})]})]})}function Vb({kind:t,onClose:e,onFlash:n,onPick:i}){return g.jsxs("aside",{className:"panel",children:[g.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:g.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:g.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),g.jsxs("div",{className:"panel-body",children:[t==="catalog"&&g.jsx(Ob,{onPick:i}),t==="settings"&&g.jsx(Fb,{onFlash:n,onClose:e}),t==="inspector"&&g.jsx(zb,{onClose:e,onFlash:n}),t==="presets"&&g.jsx(Hb,{onClose:e,onFlash:n})]})]})}function Gb(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=Ji(),{view:r,selected:s,rooms:o}=t,[a,l]=Ce.useState(null),[c,d]=Ce.useState(null),f=Ce.useCallback(p=>d({msg:p,t:Date.now()}),[]);Ce.useEffect(()=>{if(!c)return;const p=setTimeout(()=>d(null),1600);return()=>clearTimeout(p)},[c]);const h=a||(s&&r!=="3d"?"inspector":null),m=p=>e({type:"view",view:p}),y=p=>l(S=>S===p?null:p),M=()=>{l(null),r!=="3d"&&e({type:"select",sel:null})},_=()=>{e({type:"reset"}),l(null),f("New design — undo to restore")},u=p=>{let S=0,C=0;const w=(s==null?void 0:s.type)==="room"&&o.find(E=>E.uid===s.uid);if(w)S=w.x+w.w/2,C=w.z+w.d/2;else if(o.length){const E=o[o.length-1];S=E.x+E.w/2,C=E.z+E.d/2}e({type:"addItem",kind:p,x:S,z:C}),na(10),f("Added — drag to position")},v=async()=>{try{let p;if(r==="3d"){const S=document.querySelector(".scene3d canvas");if(!S)return;p=S.toDataURL("image/png")}else{const S=document.querySelector(".editor2d svg");if(!S)return;p=await Wb(S)}await jb(p,`honeycutt-room-${Date.now()}.png`),f("Image saved")}catch{f("Could not export")}};return g.jsxs("div",{className:"app",children:[g.jsxs("header",{className:"topbar",children:[g.jsxs("div",{className:"brand",children:[g.jsx("div",{className:"logo",children:g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("path",{d:"M3 11 12 4l9 7"}),g.jsx("path",{d:"M5 10v9h14v-9"})]})}),g.jsxs("div",{className:"title",children:[g.jsx("b",{children:"Honeycutt"}),g.jsx("span",{children:"Room Studio"})]})]}),g.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[g.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>m("2d"),"aria-pressed":r==="2d",children:[g.jsx(lS,{size:15})," Plan"]}),g.jsxs("button",{className:r==="side"?"active":"",onClick:()=>m("side"),"aria-pressed":r==="side",children:[g.jsx(xS,{size:15})," Side"]}),g.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>m("3d"),"aria-pressed":r==="3d",children:[g.jsx(cS,{size:15})," 3D"]})]}),g.jsxs("div",{className:"tools",children:[g.jsx("button",{className:"tool",onClick:_,"aria-label":"New design",children:g.jsx(_S,{size:18})}),g.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:g.jsx(bx,{size:18})}),g.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:g.jsx(mS,{size:18})}),g.jsx("button",{className:"tool",onClick:v,"aria-label":"Export image",children:g.jsx(gS,{size:18})})]})]}),g.jsxs("div",{className:"body",children:[g.jsx(Ib,{onOpen:y,activePanel:h}),g.jsx("main",{className:"stage",children:r==="2d"?g.jsx(AS,{}):r==="side"?g.jsx(DS,{}):g.jsx(Nb,{onOpenInspector:()=>l("inspector")})}),h&&g.jsx("div",{className:"panel-scrim",onClick:M}),h&&g.jsx(Vb,{kind:h,onClose:M,onFlash:f,onPick:u})]}),c&&g.jsx("div",{className:"toast",children:c.msg},c.t)]})}function Wb(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const d=document.createElement("canvas");d.width=r*o,d.height=s*o;const f=d.getContext("2d");f.fillStyle="#ffffff",f.fillRect(0,0,d.width,d.height),f.drawImage(c,0,0,d.width,d.height),e(d.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function jb(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}_d.createRoot(document.getElementById("root")).render(g.jsx(F_.StrictMode,{children:g.jsx(Cb,{children:g.jsx(sS,{children:g.jsx(Gb,{})})})}));
