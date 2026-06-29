(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cg={exports:{}},Gc={},Rg={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Jy=Symbol.for("react.portal"),Qy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),e_=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),i_=Symbol.for("react.forward_ref"),r_=Symbol.for("react.suspense"),s_=Symbol.for("react.memo"),o_=Symbol.for("react.lazy"),Zp=Symbol.iterator;function a_(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Dg={};function bo(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Pg}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=bo.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Pg}var wf=Mf.prototype=new Ng;wf.constructor=Mf;Lg(wf,bo.prototype);wf.isPureReactComponent=!0;var Jp=Array.isArray,Ig=Object.prototype.hasOwnProperty,Ef={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ig.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ba,type:t,key:s,ref:o,props:r,_owner:Ef.current}}function l_(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function c_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qp=/\/+/g;function mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c_(""+t.key):e.toString(36)}function jl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case Jy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mu(o,0):i,Jp(r)?(n="",t!=null&&(n=t.replace(Qp,"$&/")+"/"),jl(r,e,n,"",function(c){return c})):r!=null&&(Tf(r)&&(r=l_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mu(s,a);o+=jl(s,e,n,l,r)}else if(l=a_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mu(s,a++),o+=jl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return jl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function u_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mn={current:null},Wl={transition:null},d_={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:Ef};function Og(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=bo;ot.Fragment=Qy;ot.Profiler=e_;ot.PureComponent=Mf;ot.StrictMode=$y;ot.Suspense=r_;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_;ot.act=Og;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ef.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ig.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:n_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t_,_context:t},t.Consumer=t};ot.createElement=zg;ot.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:i_,render:t}};ot.isValidElement=Tf;ot.lazy=function(t){return{$$typeof:o_,_payload:{_status:-1,_result:t},_init:u_}};ot.memo=function(t,e){return{$$typeof:s_,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ot.unstable_act=Og;ot.useCallback=function(t,e){return Mn.current.useCallback(t,e)};ot.useContext=function(t){return Mn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Mn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Mn.current.useEffect(t,e)};ot.useId=function(){return Mn.current.useId()};ot.useImperativeHandle=function(t,e,n){return Mn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Mn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Mn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Mn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Mn.current.useReducer(t,e,n)};ot.useRef=function(t){return Mn.current.useRef(t)};ot.useState=function(t){return Mn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Mn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Mn.current.useTransition()};ot.version="18.3.1";Rg.exports=ot;var We=Rg.exports;const h_=Zy(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=We,p_=Symbol.for("react.element"),m_=Symbol.for("react.fragment"),g_=Object.prototype.hasOwnProperty,v_=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x_={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)g_.call(e,i)&&!x_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:p_,type:t,key:s,ref:o,props:r,_owner:v_.current}}Gc.Fragment=m_;Gc.jsx=Fg;Gc.jsxs=Fg;Cg.exports=Gc;var g=Cg.exports,Pd={},kg={exports:{}},Yn={},Bg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,q){var K=I.length;I.push(q);e:for(;0<K;){var J=K-1>>>1,ge=I[J];if(0<r(ge,q))I[J]=q,I[K]=ge,K=J;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var q=I[0],K=I.pop();if(K!==q){I[0]=K;e:for(var J=0,ge=I.length,Ce=ge>>>1;J<Ce;){var Q=2*(J+1)-1,re=I[Q],le=Q+1,ae=I[le];if(0>r(re,K))le<ge&&0>r(ae,re)?(I[J]=ae,I[le]=K,J=le):(I[J]=re,I[Q]=K,J=Q);else if(le<ge&&0>r(ae,K))I[J]=ae,I[le]=K,J=le;else break e}}return q}function r(I,q){var K=I.sortIndex-q.sortIndex;return K!==0?K:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,y=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=I)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(I){if(M=!1,x(I),!y)if(n(l)!==null)y=!0,F(L);else{var q=n(c);q!==null&&Z(S,q.startTime-I)}}function L(I,q){y=!1,M&&(M=!1,h(b),b=-1),p=!0;var K=f;try{for(x(q),d=n(l);d!==null&&(!(d.expirationTime>q)||I&&!w());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var ge=J(d.expirationTime<=q);q=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&i(l),x(q)}else i(l);d=n(l)}if(d!==null)var Ce=!0;else{var Q=n(c);Q!==null&&Z(S,Q.startTime-q),Ce=!1}return Ce}finally{d=null,f=K,p=!1}}var A=!1,E=null,b=-1,G=5,_=-1;function w(){return!(t.unstable_now()-_<G)}function W(){if(E!==null){var I=t.unstable_now();_=I;var q=!0;try{q=E(!0,I)}finally{q?R():(A=!1,E=null)}}else A=!1}var R;if(typeof m=="function")R=function(){m(W)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=W,R=function(){H.postMessage(null)}}else R=function(){v(W,0)};function F(I){E=I,A||(A=!0,R())}function Z(I,q){b=v(function(){I(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,F(L))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var K=f;f=q;try{return I()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=f;f=I;try{return q()}finally{f=K}},t.unstable_scheduleCallback=function(I,q,K){var J=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?J+K:J):K=J,I){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=K+ge,I={id:u++,callback:q,priorityLevel:I,startTime:K,expirationTime:ge,sortIndex:-1},K>J?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(M?(h(b),b=-1):M=!0,Z(S,K-J))):(I.sortIndex=ge,e(l,I),y||p||(y=!0,F(L))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var q=f;return function(){var K=f;f=q;try{return I.apply(this,arguments)}finally{f=K}}}})(Hg);Bg.exports=Hg;var y_=Bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=We,Xn=y_;function Re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,va={};function vs(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(va[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ld=Object.prototype.hasOwnProperty,S_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},em={};function M_(t){return Ld.call(em,t)?!0:Ld.call($p,t)?!1:S_.test(t)?em[t]=!0:($p[t]=!0,!1)}function w_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E_(t,e,n,i){if(e===null||typeof e>"u"||w_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function bf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,bf);ln[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,bf);ln[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,bf);ln[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cf(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E_(e,n,r,i)&&(n=null),i||r===null?M_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Gs=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Id=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),tm=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,gu;function Qo(t){if(gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+t}var vu=!1;function xu(t,e){if(!t||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function T_(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=xu(t.type,!1),t;case 11:return t=xu(t.type.render,!1),t;case 1:return t=xu(t.type,!0),t;default:return""}}function Ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gs:return"Fragment";case Vs:return"Portal";case Dd:return"Profiler";case Rf:return"StrictMode";case Nd:return"Suspense";case Id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Gg:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Ud(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Ud(t(e))}catch{}}return null}function A_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ud(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=b_(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zd(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qg(t,e){e=e.checked,e!=null&&Cf(t,"checked",e,!1)}function Od(t,e){qg(t,e);var n=Ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fd(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Re(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Re(92));if($o(n)){if(1<n.length)throw Error(Re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function Kg(t,e){var n=Ur(e.value),i=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C_=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){C_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function Qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function $g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var R_=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hd(t,e){if(e){if(R_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Re(62))}}function Vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gd=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,so=null,oo=null;function om(t){if(t=Ga(t)){if(typeof jd!="function")throw Error(Re(280));var e=t.stateNode;e&&(e=qc(e),jd(t.stateNode,t.type,e))}}function ev(t){so?oo?oo.push(t):oo=[t]:so=t}function tv(){if(so){var t=so,e=oo;if(oo=so=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function nv(t,e){return t(e)}function iv(){}var yu=!1;function rv(t,e,n){if(yu)return t(e,n);yu=!0;try{return nv(t,e,n)}finally{yu=!1,(so!==null||oo!==null)&&(iv(),tv())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Re(231,e,typeof n));return n}var Wd=!1;if($i)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Wd=!1}function P_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var sa=!1,fc=null,pc=!1,Xd=null,L_={onError:function(t){sa=!0,fc=t}};function D_(t,e,n,i,r,s,o,a,l){sa=!1,fc=null,P_.apply(L_,arguments)}function N_(t,e,n,i,r,s,o,a,l){if(D_.apply(this,arguments),sa){if(sa){var c=fc;sa=!1,fc=null}else throw Error(Re(198));pc||(pc=!0,Xd=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(xs(t)!==t)throw Error(Re(188))}function I_(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(Re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return am(r),t;if(s===i)return am(r),e;s=s.sibling}throw Error(Re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Re(189))}}if(n.alternate!==i)throw Error(Re(190))}if(n.tag!==3)throw Error(Re(188));return n.stateNode.current===n?t:e}function ov(t){return t=I_(t),t!==null?av(t):null}function av(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=av(t);if(e!==null)return e;t=t.sibling}return null}var lv=Xn.unstable_scheduleCallback,lm=Xn.unstable_cancelCallback,U_=Xn.unstable_shouldYield,z_=Xn.unstable_requestPaint,Ut=Xn.unstable_now,O_=Xn.unstable_getCurrentPriorityLevel,Nf=Xn.unstable_ImmediatePriority,cv=Xn.unstable_UserBlockingPriority,mc=Xn.unstable_NormalPriority,F_=Xn.unstable_LowPriority,uv=Xn.unstable_IdlePriority,jc=null,Li=null;function k_(t){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:V_,B_=Math.log,H_=Math.LN2;function V_(t){return t>>>=0,t===0?32:31-(B_(t)/H_|0)|0}var Qa=64,$a=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ea(a):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-_i(e),r=1<<n,i|=t[n],e&=~r;return i}function G_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=G_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_i(e),t[e]=n}function W_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-_i(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-_i(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fv,Uf,pv,mv,gv,qd=!1,el=[],Ar=null,br=null,Cr=null,_a=new Map,Sa=new Map,xr=[],X_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function zo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ga(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Y_(t,e,n,i,r){switch(e){case"focusin":return Ar=zo(Ar,t,e,n,i,r),!0;case"dragenter":return br=zo(br,t,e,n,i,r),!0;case"mouseover":return Cr=zo(Cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,zo(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,zo(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function vv(t){var e=ts(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,gv(t.priority,function(){pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gd=i,n.target.dispatchEvent(i),Gd=null}else return e=Ga(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function um(t,e,n){Xl(t)&&n.delete(e)}function q_(){qd=!1,Ar!==null&&Xl(Ar)&&(Ar=null),br!==null&&Xl(br)&&(br=null),Cr!==null&&Xl(Cr)&&(Cr=null),_a.forEach(um),Sa.forEach(um)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,qd||(qd=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,q_)))}function Ma(t){function e(r){return Oo(r,t)}if(0<el.length){Oo(el[0],t);for(var n=1;n<el.length;n++){var i=el[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&Oo(Ar,t),br!==null&&Oo(br,t),Cr!==null&&Oo(Cr,t),_a.forEach(e),Sa.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&xr.shift()}var ao=ir.ReactCurrentBatchConfig,vc=!0;function K_(t,e,n,i){var r=gt,s=ao.transition;ao.transition=null;try{gt=1,zf(t,e,n,i)}finally{gt=r,ao.transition=s}}function Z_(t,e,n,i){var r=gt,s=ao.transition;ao.transition=null;try{gt=4,zf(t,e,n,i)}finally{gt=r,ao.transition=s}}function zf(t,e,n,i){if(vc){var r=Kd(t,e,n,i);if(r===null)Pu(t,e,i,xc,n),cm(t,i);else if(Y_(r,t,e,n,i))i.stopPropagation();else if(cm(t,i),e&4&&-1<X_.indexOf(t)){for(;r!==null;){var s=Ga(r);if(s!==null&&fv(s),s=Kd(t,e,n,i),s===null&&Pu(t,e,i,xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pu(t,e,i,null,n)}}var xc=null;function Kd(t,e,n,i){if(xc=null,t=Df(i),t=ts(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O_()){case Nf:return 1;case cv:return 4;case mc:case F_:return 16;case uv:return 536870912;default:return 16}default:return 16}}var wr=null,Of=null,Yl=null;function yv(){if(Yl)return Yl;var t,e=Of,n=e.length,i,r="value"in wr?wr.value:wr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Yl=r.slice(t,1<i?1-i:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function dm(){return!1}function qn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:dm,this.isPropagationStopped=dm,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ff=qn(Co),Va=Lt({},Co,{view:0,detail:0}),J_=qn(Va),Su,Mu,Fo,Wc=Lt({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Su=t.screenX-Fo.screenX,Mu=t.screenY-Fo.screenY):Mu=Su=0,Fo=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),hm=qn(Wc),Q_=Lt({},Wc,{dataTransfer:0}),$_=qn(Q_),e1=Lt({},Va,{relatedTarget:0}),wu=qn(e1),t1=Lt({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=qn(t1),i1=Lt({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=qn(i1),s1=Lt({},Co,{data:0}),fm=qn(s1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l1[t])?!!e[t]:!1}function kf(){return c1}var u1=Lt({},Va,{key:function(t){if(t.key){var e=o1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d1=qn(u1),h1=Lt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=qn(h1),f1=Lt({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),p1=qn(f1),m1=Lt({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=qn(m1),v1=Lt({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x1=qn(v1),y1=[9,13,27,32],Bf=$i&&"CompositionEvent"in window,oa=null;$i&&"documentMode"in document&&(oa=document.documentMode);var _1=$i&&"TextEvent"in window&&!oa,_v=$i&&(!Bf||oa&&8<oa&&11>=oa),mm=" ",gm=!1;function Sv(t,e){switch(t){case"keyup":return y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function S1(t,e){switch(t){case"compositionend":return Mv(e);case"keypress":return e.which!==32?null:(gm=!0,mm);case"textInput":return t=e.data,t===mm&&gm?null:t;default:return null}}function M1(t,e){if(js)return t==="compositionend"||!Bf&&Sv(t,e)?(t=yv(),Yl=Of=wr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function wv(t,e,n,i){ev(i),e=yc(e,"onChange"),0<e.length&&(n=new Ff("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,wa=null;function E1(t){Iv(t,0)}function Xc(t){var e=Ys(t);if(Yg(e))return t}function T1(t,e){if(t==="change")return e}var Ev=!1;if($i){var Eu;if($i){var Tu="oninput"in document;if(!Tu){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Tu=typeof xm.oninput=="function"}Eu=Tu}else Eu=!1;Ev=Eu&&(!document.documentMode||9<document.documentMode)}function ym(){aa&&(aa.detachEvent("onpropertychange",Tv),wa=aa=null)}function Tv(t){if(t.propertyName==="value"&&Xc(wa)){var e=[];wv(e,wa,t,Df(t)),rv(E1,e)}}function A1(t,e,n){t==="focusin"?(ym(),aa=e,wa=n,aa.attachEvent("onpropertychange",Tv)):t==="focusout"&&ym()}function b1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(wa)}function C1(t,e){if(t==="click")return Xc(e)}function R1(t,e){if(t==="input"||t==="change")return Xc(e)}function P1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mi=typeof Object.is=="function"?Object.is:P1;function Ea(t,e){if(Mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ld.call(e,r)||!Mi(t[r],e[r]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=_m(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function Av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bv(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function L1(t){var e=bv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Av(n.ownerDocument.documentElement,n)){if(i!==null&&Hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sm(n,s);var o=Sm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D1=$i&&"documentMode"in document&&11>=document.documentMode,Ws=null,Zd=null,la=null,Jd=!1;function Mm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jd||Ws==null||Ws!==hc(i)||(i=Ws,"selectionStart"in i&&Hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Ea(la,i)||(la=i,i=yc(Zd,"onSelect"),0<i.length&&(e=new Ff("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Au={},Cv={};$i&&(Cv=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Yc(t){if(Au[t])return Au[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cv)return Au[t]=e[n];return t}var Rv=Yc("animationend"),Pv=Yc("animationiteration"),Lv=Yc("animationstart"),Dv=Yc("transitionend"),Nv=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){Nv.set(t,e),vs(e,[t])}for(var bu=0;bu<wm.length;bu++){var Cu=wm[bu],N1=Cu.toLowerCase(),I1=Cu[0].toUpperCase()+Cu.slice(1);Fr(N1,"on"+I1)}Fr(Rv,"onAnimationEnd");Fr(Pv,"onAnimationIteration");Fr(Lv,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(Dv,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Em(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,c),s=l}}}if(pc)throw t=Xd,pc=!1,Xd=null,t}function Et(t,e){var n=e[nh];n===void 0&&(n=e[nh]=new Set);var i=t+"__bubble";n.has(i)||(Uv(e,t,2,!1),n.add(i))}function Ru(t,e,n){var i=0;e&&(i|=4),Uv(n,t,i,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[il]){t[il]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(U1.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,Ru("selectionchange",!1,e))}}function Uv(t,e,n,i){switch(xv(e)){case 1:var r=K_;break;case 4:r=Z_;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!Wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}rv(function(){var c=s,u=Df(n),d=[];e:{var f=Nv.get(t);if(f!==void 0){var p=Ff,y=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":p=d1;break;case"focusin":y="focus",p=wu;break;case"focusout":y="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=p1;break;case Rv:case Pv:case Lv:p=n1;break;case Dv:p=g1;break;case"scroll":p=J_;break;case"wheel":p=x1;break;case"copy":case"cut":case"paste":p=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pm}var M=(e&4)!==0,v=!M&&t==="scroll",h=M?f!==null?f+"Capture":null:f;M=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ya(m,h),S!=null&&M.push(Aa(m,S,x)))),v)break;m=m.return}0<M.length&&(f=new p(f,y,null,n,u),d.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Gd&&(y=n.relatedTarget||n.fromElement)&&(ts(y)||y[er]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?ts(y):null,y!==null&&(v=xs(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(M=hm,S="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=pm,S="onPointerLeave",h="onPointerEnter",m="pointer"),v=p==null?f:Ys(p),x=y==null?f:Ys(y),f=new M(S,m+"leave",p,n,u),f.target=v,f.relatedTarget=x,S=null,ts(u)===c&&(M=new M(h,m+"enter",y,n,u),M.target=x,M.relatedTarget=v,S=M),v=S,p&&y)t:{for(M=p,h=y,m=0,x=M;x;x=ws(x))m++;for(x=0,S=h;S;S=ws(S))x++;for(;0<m-x;)M=ws(M),m--;for(;0<x-m;)h=ws(h),x--;for(;m--;){if(M===h||h!==null&&M===h.alternate)break t;M=ws(M),h=ws(h)}M=null}else M=null;p!==null&&Tm(d,f,p,M,!1),y!==null&&v!==null&&Tm(d,v,y,M,!0)}}e:{if(f=c?Ys(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var L=T1;else if(vm(f))if(Ev)L=R1;else{L=b1;var A=A1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=C1);if(L&&(L=L(t,c))){wv(d,L,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Fd(f,"number",f.value)}switch(A=c?Ys(c):window,t){case"focusin":(vm(A)||A.contentEditable==="true")&&(Ws=A,Zd=c,la=null);break;case"focusout":la=Zd=Ws=null;break;case"mousedown":Jd=!0;break;case"contextmenu":case"mouseup":case"dragend":Jd=!1,Mm(d,n,u);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Mm(d,n,u)}var E;if(Bf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else js?Sv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(_v&&n.locale!=="ko"&&(js||b!=="onCompositionStart"?b==="onCompositionEnd"&&js&&(E=yv()):(wr=u,Of="value"in wr?wr.value:wr.textContent,js=!0)),A=yc(c,b),0<A.length&&(b=new fm(b,t,null,n,u),d.push({event:b,listeners:A}),E?b.data=E:(E=Mv(n),E!==null&&(b.data=E)))),(E=_1?S1(t,n):M1(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(u=new fm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Iv(d,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ya(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=ya(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ya(n,s),l!=null&&o.unshift(Aa(n,l,a))):r||(l=ya(n,s),l!=null&&o.push(Aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var z1=/\r\n?/g,O1=/\u0000|\uFFFD/g;function Am(t){return(typeof t=="string"?t:""+t).replace(z1,`
`).replace(O1,"")}function rl(t,e,n){if(e=Am(e),Am(t)!==e&&n)throw Error(Re(425))}function _c(){}var Qd=null,$d=null;function eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(t){return bm.resolve(null).then(t).catch(B1)}:th;function B1(t){setTimeout(function(){throw t})}function Lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Ro,ba="__reactProps$"+Ro,er="__reactContainer$"+Ro,nh="__reactEvents$"+Ro,H1="__reactListeners$"+Ro,V1="__reactHandles$"+Ro;function ts(t){var e=t[Ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[Ri])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function Ga(t){return t=t[Ri]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Re(33))}function qc(t){return t[ba]||null}var ih=[],qs=-1;function kr(t){return{current:t}}function Tt(t){0>qs||(t.current=ih[qs],ih[qs]=null,qs--)}function Mt(t,e){qs++,ih[qs]=t.current,t.current=e}var zr={},vn=kr(zr),Dn=kr(!1),os=zr;function vo(t,e){var n=t.type.contextTypes;if(!n)return zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nn(t){return t=t.childContextTypes,t!=null}function Sc(){Tt(Dn),Tt(vn)}function Rm(t,e,n){if(vn.current!==zr)throw Error(Re(168));Mt(vn,e),Mt(Dn,n)}function zv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Re(108,A_(t)||"Unknown",r));return Lt({},n,i)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,os=vn.current,Mt(vn,t),Mt(Dn,Dn.current),!0}function Pm(t,e,n){var i=t.stateNode;if(!i)throw Error(Re(169));n?(t=zv(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,Tt(Dn),Tt(vn),Mt(vn,t)):Tt(Dn),Mt(Dn,n)}var Xi=null,Kc=!1,Du=!1;function Ov(t){Xi===null?Xi=[t]:Xi.push(t)}function G1(t){Kc=!0,Ov(t)}function Br(){if(!Du&&Xi!==null){Du=!0;var t=0,e=gt;try{var n=Xi;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xi=null,Kc=!1}catch(r){throw Xi!==null&&(Xi=Xi.slice(t+1)),lv(Nf,Br),r}finally{gt=e,Du=!1}}return null}var Ks=[],Zs=0,wc=null,Ec=0,Qn=[],$n=0,as=null,qi=1,Ki="";function Zr(t,e){Ks[Zs++]=Ec,Ks[Zs++]=wc,wc=t,Ec=e}function Fv(t,e,n){Qn[$n++]=qi,Qn[$n++]=Ki,Qn[$n++]=as,as=t;var i=qi;t=Ki;var r=32-_i(i)-1;i&=~(1<<r),n+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,qi=1<<32-_i(e)+r|n<<r|i,Ki=s+t}else qi=1<<s|n<<r|i,Ki=t}function Vf(t){t.return!==null&&(Zr(t,1),Fv(t,1,0))}function Gf(t){for(;t===wc;)wc=Ks[--Zs],Ks[Zs]=null,Ec=Ks[--Zs],Ks[Zs]=null;for(;t===as;)as=Qn[--$n],Qn[$n]=null,Ki=Qn[--$n],Qn[$n]=null,qi=Qn[--$n],Qn[$n]=null}var Wn=null,jn=null,bt=!1,gi=null;function kv(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,jn=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,jn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:qi,overflow:Ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,jn=null,!0):!1;default:return!1}}function rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sh(t){if(bt){var e=jn;if(e){var n=e;if(!Lm(t,e)){if(rh(t))throw Error(Re(418));e=Rr(n.nextSibling);var i=Wn;e&&Lm(t,e)?kv(i,n):(t.flags=t.flags&-4097|2,bt=!1,Wn=t)}}else{if(rh(t))throw Error(Re(418));t.flags=t.flags&-4097|2,bt=!1,Wn=t}}}function Dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function sl(t){if(t!==Wn)return!1;if(!bt)return Dm(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eh(t.type,t.memoizedProps)),e&&(e=jn)){if(rh(t))throw Bv(),Error(Re(418));for(;e;)kv(t,e),e=Rr(e.nextSibling)}if(Dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jn=null}}else jn=Wn?Rr(t.stateNode.nextSibling):null;return!0}function Bv(){for(var t=jn;t;)t=Rr(t.nextSibling)}function xo(){jn=Wn=null,bt=!1}function jf(t){gi===null?gi=[t]:gi.push(t)}var j1=ir.ReactCurrentBatchConfig;function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Re(309));var i=n.stateNode}if(!i)throw Error(Re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Re(284));if(!n._owner)throw Error(Re(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(Re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function Hv(t){function e(h,m){if(t){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Nr(h,m),h.index=0,h.sibling=null,h}function s(h,m,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,x,S){return m===null||m.tag!==6?(m=ku(x,h.mode,S),m.return=h,m):(m=r(m,x),m.return=h,m)}function l(h,m,x,S){var L=x.type;return L===Gs?u(h,m,x.props.children,S,x.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&Nm(L)===m.type)?(S=r(m,x.props),S.ref=ko(h,m,x),S.return=h,S):(S=tc(x.type,x.key,x.props,null,h.mode,S),S.ref=ko(h,m,x),S.return=h,S)}function c(h,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Bu(x,h.mode,S),m.return=h,m):(m=r(m,x.children||[]),m.return=h,m)}function u(h,m,x,S,L){return m===null||m.tag!==7?(m=ss(x,h.mode,S,L),m.return=h,m):(m=r(m,x),m.return=h,m)}function d(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ku(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ka:return x=tc(m.type,m.key,m.props,null,h.mode,x),x.ref=ko(h,null,m),x.return=h,x;case Vs:return m=Bu(m,h.mode,x),m.return=h,m;case gr:var S=m._init;return d(h,S(m._payload),x)}if($o(m)||Io(m))return m=ss(m,h.mode,x,null),m.return=h,m;ol(h,m)}return null}function f(h,m,x,S){var L=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(h,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:return x.key===L?l(h,m,x,S):null;case Vs:return x.key===L?c(h,m,x,S):null;case gr:return L=x._init,f(h,m,L(x._payload),S)}if($o(x)||Io(x))return L!==null?null:u(h,m,x,S,null);ol(h,x)}return null}function p(h,m,x,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(m,h,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ka:return h=h.get(S.key===null?x:S.key)||null,l(m,h,S,L);case Vs:return h=h.get(S.key===null?x:S.key)||null,c(m,h,S,L);case gr:var A=S._init;return p(h,m,x,A(S._payload),L)}if($o(S)||Io(S))return h=h.get(x)||null,u(m,h,S,L,null);ol(m,S)}return null}function y(h,m,x,S){for(var L=null,A=null,E=m,b=m=0,G=null;E!==null&&b<x.length;b++){E.index>b?(G=E,E=null):G=E.sibling;var _=f(h,E,x[b],S);if(_===null){E===null&&(E=G);break}t&&E&&_.alternate===null&&e(h,E),m=s(_,m,b),A===null?L=_:A.sibling=_,A=_,E=G}if(b===x.length)return n(h,E),bt&&Zr(h,b),L;if(E===null){for(;b<x.length;b++)E=d(h,x[b],S),E!==null&&(m=s(E,m,b),A===null?L=E:A.sibling=E,A=E);return bt&&Zr(h,b),L}for(E=i(h,E);b<x.length;b++)G=p(E,h,b,x[b],S),G!==null&&(t&&G.alternate!==null&&E.delete(G.key===null?b:G.key),m=s(G,m,b),A===null?L=G:A.sibling=G,A=G);return t&&E.forEach(function(w){return e(h,w)}),bt&&Zr(h,b),L}function M(h,m,x,S){var L=Io(x);if(typeof L!="function")throw Error(Re(150));if(x=L.call(x),x==null)throw Error(Re(151));for(var A=L=null,E=m,b=m=0,G=null,_=x.next();E!==null&&!_.done;b++,_=x.next()){E.index>b?(G=E,E=null):G=E.sibling;var w=f(h,E,_.value,S);if(w===null){E===null&&(E=G);break}t&&E&&w.alternate===null&&e(h,E),m=s(w,m,b),A===null?L=w:A.sibling=w,A=w,E=G}if(_.done)return n(h,E),bt&&Zr(h,b),L;if(E===null){for(;!_.done;b++,_=x.next())_=d(h,_.value,S),_!==null&&(m=s(_,m,b),A===null?L=_:A.sibling=_,A=_);return bt&&Zr(h,b),L}for(E=i(h,E);!_.done;b++,_=x.next())_=p(E,h,b,_.value,S),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?b:_.key),m=s(_,m,b),A===null?L=_:A.sibling=_,A=_);return t&&E.forEach(function(W){return e(h,W)}),bt&&Zr(h,b),L}function v(h,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Gs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:e:{for(var L=x.key,A=m;A!==null;){if(A.key===L){if(L=x.type,L===Gs){if(A.tag===7){n(h,A.sibling),m=r(A,x.props.children),m.return=h,h=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&Nm(L)===A.type){n(h,A.sibling),m=r(A,x.props),m.ref=ko(h,A,x),m.return=h,h=m;break e}n(h,A);break}else e(h,A);A=A.sibling}x.type===Gs?(m=ss(x.props.children,h.mode,S,x.key),m.return=h,h=m):(S=tc(x.type,x.key,x.props,null,h.mode,S),S.ref=ko(h,m,x),S.return=h,h=S)}return o(h);case Vs:e:{for(A=x.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),m=r(m,x.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Bu(x,h.mode,S),m.return=h,h=m}return o(h);case gr:return A=x._init,v(h,m,A(x._payload),S)}if($o(x))return y(h,m,x,S);if(Io(x))return M(h,m,x,S);ol(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,x),m.return=h,h=m):(n(h,m),m=ku(x,h.mode,S),m.return=h,h=m),o(h)):n(h,m)}return v}var yo=Hv(!0),Vv=Hv(!1),Tc=kr(null),Ac=null,Js=null,Wf=null;function Xf(){Wf=Js=Ac=null}function Yf(t){var e=Tc.current;Tt(Tc),t._currentValue=e}function oh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Ac=t,Wf=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function si(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Ac===null)throw Error(Re(308));Js=t,Ac.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var ns=null;function qf(t){ns===null?ns=[t]:ns.push(t)}function Gv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,tr(t,i)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,tr(t,n)}return r=i.interleaved,r===null?(e.next=e,qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,tr(t,n)}function Kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,If(t,n)}}function Im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,M=a;switch(f=e,p=n,M.tag){case 1:if(y=M.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=M.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=Lt({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=d}}function Um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Re(191,r));r.call(i)}}}var ja={},Di=kr(ja),Ca=kr(ja),Ra=kr(ja);function is(t){if(t===ja)throw Error(Re(174));return t}function Zf(t,e){switch(Mt(Ra,e),Mt(Ca,t),Mt(Di,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bd(e,t)}Tt(Di),Mt(Di,e)}function _o(){Tt(Di),Tt(Ca),Tt(Ra)}function Wv(t){is(Ra.current);var e=is(Di.current),n=Bd(e,t.type);e!==n&&(Mt(Ca,t),Mt(Di,n))}function Jf(t){Ca.current===t&&(Tt(Di),Tt(Ca))}var Ct=kr(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nu=[];function Qf(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var Zl=ir.ReactCurrentDispatcher,Iu=ir.ReactCurrentBatchConfig,ls=0,Pt=null,Ht=null,Kt=null,Rc=!1,ca=!1,Pa=0,W1=0;function cn(){throw Error(Re(321))}function $f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mi(t[n],e[n]))return!1;return!0}function ep(t,e,n,i,r,s){if(ls=s,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?K1:Z1,t=n(i,r),ca){s=0;do{if(ca=!1,Pa=0,25<=s)throw Error(Re(301));s+=1,Kt=Ht=null,e.updateQueue=null,Zl.current=J1,t=n(i,r)}while(ca)}if(Zl.current=Pc,e=Ht!==null&&Ht.next!==null,ls=0,Kt=Ht=Pt=null,Rc=!1,e)throw Error(Re(300));return t}function tp(){var t=Pa!==0;return Pa=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Pt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function oi(){if(Ht===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Kt===null?Pt.memoizedState:Kt.next;if(e!==null)Kt=e,Ht=t;else{if(t===null)throw Error(Re(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Kt===null?Pt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function La(t,e){return typeof e=="function"?e(t):e}function Uu(t){var e=oi(),n=e.queue;if(n===null)throw Error(Re(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ls&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Pt.lanes|=u,cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Mi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Pt.lanes|=s,cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zu(t){var e=oi(),n=e.queue;if(n===null)throw Error(Re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Mi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xv(){}function Yv(t,e){var n=Pt,i=oi(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,np(Zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Kv.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(Re(349));ls&30||qv(n,e,r)}return r}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,i){e.value=n,e.getSnapshot=i,Jv(e)&&Qv(t)}function Zv(t,e,n){return n(function(){Jv(e)&&Qv(t)})}function Jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mi(t,n)}catch{return!0}}function Qv(t){var e=tr(t,1);e!==null&&Si(e,t,1,-1)}function zm(t){var e=Ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=q1.bind(null,Pt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $v(){return oi().memoizedState}function Jl(t,e,n,i){var r=Ti();Pt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Zc(t,e,n,i){var r=oi();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&$f(i,o.deps)){r.memoizedState=Da(e,n,s,i);return}}Pt.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function Om(t,e){return Jl(8390656,8,t,e)}function np(t,e){return Zc(2048,8,t,e)}function ex(t,e){return Zc(4,2,t,e)}function tx(t,e){return Zc(4,4,t,e)}function nx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ix(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,nx.bind(null,e,t),n)}function ip(){}function rx(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$f(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sx(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$f(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ox(t,e,n){return ls&21?(Mi(n,e)||(n=dv(),Pt.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function X1(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=Iu.transition;Iu.transition={};try{t(!1),e()}finally{gt=n,Iu.transition=i}}function ax(){return oi().memoizedState}function Y1(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lx(t))cx(e,n);else if(n=Gv(t,e,n,i),n!==null){var r=_n();Si(n,t,i,r),ux(n,e,i)}}function q1(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(t))cx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Mi(a,o)){var l=e.interleaved;l===null?(r.next=r,qf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gv(t,e,r,i),n!==null&&(r=_n(),Si(n,t,i,r),ux(n,e,i))}}function lx(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function cx(t,e){ca=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ux(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,If(t,n)}}var Pc={readContext:si,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},K1={readContext:si,useCallback:function(t,e){return Ti().memoizedState=[t,e===void 0?null:e],t},useContext:si,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,nx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=Ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Y1.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=Ti();return t={current:t},e.memoizedState=t},useState:zm,useDebugValue:ip,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=zm(!1),e=t[0];return t=X1.bind(null,t[1]),Ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,r=Ti();if(bt){if(n===void 0)throw Error(Re(407));n=n()}else{if(n=e(),Qt===null)throw Error(Re(349));ls&30||qv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Om(Zv.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,Kv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ti(),e=Qt.identifierPrefix;if(bt){var n=Ki,i=qi;n=(i&~(1<<32-_i(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z1={readContext:si,useCallback:rx,useContext:si,useEffect:np,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Uu,useRef:$v,useState:function(){return Uu(La)},useDebugValue:ip,useDeferredValue:function(t){var e=oi();return ox(e,Ht.memoizedState,t)},useTransition:function(){var t=Uu(La)[0],e=oi().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:Yv,useId:ax,unstable_isNewReconciler:!1},J1={readContext:si,useCallback:rx,useContext:si,useEffect:np,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:zu,useRef:$v,useState:function(){return zu(La)},useDebugValue:ip,useDeferredValue:function(t){var e=oi();return Ht===null?e.memoizedState=t:ox(e,Ht.memoizedState,t)},useTransition:function(){var t=zu(La)[0],e=oi().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:Yv,useId:ax,unstable_isNewReconciler:!1};function fi(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ah(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Dr(t),s=Qi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(Si(e,t,r,i),Kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Dr(t),s=Qi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(Si(e,t,r,i),Kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Dr(t),r=Qi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(t,r,i),e!==null&&(Si(e,t,i,n),Kl(e,t,i))}};function Fm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function dx(t,e,n){var i=!1,r=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=si(s):(r=Nn(e)?os:vn.current,i=e.contextTypes,s=(i=i!=null)?vo(t,r):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function km(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function lh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=si(s):(s=Nn(e)?os:vn.current,r.context=vo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ah(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",i=e;do n+=T_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function hx(t,e,n){n=Qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dc||(Dc=!0,yh=i),ch(t,e)},n}function fx(t,e,n){n=Qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof i!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qi(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var $1=ir.ReactCurrentOwner,Pn=!1;function yn(t,e,n,i){e.child=t===null?Vv(e,null,n,i):yo(e,t.child,n,i)}function Gm(t,e,n,i,r){n=n.render;var s=e.ref;return lo(e,r),i=ep(t,e,n,i,s,r),n=tp(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,nr(t,e,r)):(bt&&n&&Vf(e),e.flags|=1,yn(t,e,i,r),e.child)}function jm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,px(t,e,s,i,r)):(t=tc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(o,i)&&t.ref===e.ref)return nr(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function px(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,nr(t,e,r)}return uh(t,e,n,i,r)}function mx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt($s,Hn),Hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt($s,Hn),Hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt($s,Hn),Hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt($s,Hn),Hn|=i;return yn(t,e,r,n),e.child}function gx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uh(t,e,n,i,r){var s=Nn(n)?os:vn.current;return s=vo(e,s),lo(e,r),n=ep(t,e,n,i,s,r),i=tp(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,nr(t,e,r)):(bt&&i&&Vf(e),e.flags|=1,yn(t,e,n,r),e.child)}function Wm(t,e,n,i,r){if(Nn(n)){var s=!0;Mc(e)}else s=!1;if(lo(e,r),e.stateNode===null)Ql(t,e),dx(e,n,i),lh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=si(c):(c=Nn(n)?os:vn.current,c=vo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&km(e,o,i,c),vr=!1;var f=e.memoizedState;o.state=f,bc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Dn.current||vr?(typeof u=="function"&&(ah(e,n,u,i),l=e.memoizedState),(a=vr||Fm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=si(l):(l=Nn(n)?os:vn.current,l=vo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&km(e,o,i,l),vr=!1,f=e.memoizedState,o.state=f,bc(e,i,o,r);var y=e.memoizedState;a!==d||f!==y||Dn.current||vr?(typeof p=="function"&&(ah(e,n,p,i),y=e.memoizedState),(c=vr||Fm(e,n,c,i,f,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return dh(t,e,n,i,s,r)}function dh(t,e,n,i,r,s){gx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pm(e,n,!1),nr(t,e,s);i=e.stateNode,$1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):yn(t,e,a,s),e.memoizedState=i.state,r&&Pm(e,n,!0),e.child}function vx(t){var e=t.stateNode;e.pendingContext?Rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rm(t,e.context,!1),Zf(t,e.containerInfo)}function Xm(t,e,n,i,r){return xo(),jf(r),e.flags|=256,yn(t,e,n,i),e.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function xx(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Ct,r&1),t===null)return sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,i,0,null),t=ss(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fh(n),e.memoizedState=hh,t):rp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return eS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hh,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rp(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,i){return i!==null&&jf(i),yo(e,t.child,null,n),t=rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(Re(422))),al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=ss(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=fh(o),e.memoizedState=hh,s);if(!(e.mode&1))return al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Re(419)),i=Ou(s,i,void 0),al(t,e,o,i)}if(a=(o&t.childLanes)!==0,Pn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,tr(t,r),Si(i,t,r,-1))}return up(),i=Ou(Error(Re(421))),al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,jn=Rr(r.nextSibling),Wn=e,bt=!0,gi=null,t!==null&&(Qn[$n++]=qi,Qn[$n++]=Ki,Qn[$n++]=as,qi=t.id,Ki=t.overflow,as=e),e=rp(e,i.children),e.flags|=4096,e)}function Ym(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),oh(t.return,e,n)}function Fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(yn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,n,e);else if(t.tag===19)Ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Re(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:vx(e),xo();break;case 5:Wv(e);break;case 1:Nn(e.type)&&Mc(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?xx(t,e,n):(Mt(Ct,Ct.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Mt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,mx(t,e,n)}return nr(t,e,n)}var _x,ph,Sx,Mx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ph=function(){};Sx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(Di.current);var s=null;switch(n){case"input":r=zd(t,r),i=zd(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=kd(t,r),i=kd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_c)}Hd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Mx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nS(t,e,n){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return Nn(e.type)&&Sc(),un(e),null;case 3:return i=e.stateNode,_o(),Tt(Dn),Tt(vn),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(Mh(gi),gi=null))),ph(t,e),un(e),null;case 5:Jf(e);var r=is(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Sx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Re(166));return un(e),null}if(t=is(Di.current),sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ri]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)Et(ta[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":nm(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":rm(i,s),Et("invalid",i)}Hd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",""+a]):va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":Za(i),im(i,s,!0);break;case"textarea":Za(i),sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_c)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ri]=e,t[ba]=i,_x(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vd(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)Et(ta[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":nm(t,i),r=zd(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":rm(t,i),r=kd(t,i),Et("invalid",t);break;default:r=i}Hd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$g(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&Cf(t,s,l,o))}switch(n){case"input":Za(t),im(t,i,!1);break;case"textarea":Za(t),sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ro(t,!!i.multiple,s,!1):i.defaultValue!=null&&ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_c)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)Mx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Re(166));if(n=is(Ra.current),is(Di.current),sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ri]=e,(s=i.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:rl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ri]=e,e.stateNode=i}return un(e),null;case 13:if(Tt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&jn!==null&&e.mode&1&&!(e.flags&128))Bv(),xo(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Re(317));s[Ri]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),s=!1}else gi!==null&&(Mh(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Gt===0&&(Gt=3):up())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return _o(),ph(t,e),t===null&&Ta(e.stateNode.containerInfo),un(e),null;case 10:return Yf(e.type._context),un(e),null;case 17:return Nn(e.type)&&Sc(),un(e),null;case 19:if(Tt(Ct),s=e.memoizedState,s===null)return un(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>Mo&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return un(e),null}else 2*Ut()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=Ct.current,Mt(Ct,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return cp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Hn&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(Re(156,e.tag))}function iS(t,e){switch(Gf(e),e.tag){case 1:return Nn(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),Tt(Dn),Tt(vn),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(Tt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Re(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Ct),null;case 4:return _o(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var ll=!1,mn=!1,rS=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function mh(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var qm=!1;function sS(t,e){if(Qd=vc,t=bv(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},vc=!1,Ve=e;Ve!==null;)if(e=Ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ve=t;else for(;Ve!==null;){e=Ve;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var M=y.memoizedProps,v=y.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:fi(e.type,M),v);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Re(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ve=t;break}Ve=e.return}return y=qm,qm=!1,y}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&mh(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wx(t){var e=t.alternate;e!==null&&(t.alternate=null,wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ri],delete e[ba],delete e[nh],delete e[H1],delete e[V1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ex(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_c));else if(i!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}function xh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var tn=null,pi=!1;function or(t,e,n){for(n=n.child;n!==null;)Tx(t,e,n),n=n.sibling}function Tx(t,e,n){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:mn||Qs(n,e);case 6:var i=tn,r=pi;tn=null,or(t,e,n),tn=i,pi=r,tn!==null&&(pi?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(pi?(t=tn,n=n.stateNode,t.nodeType===8?Lu(t.parentNode,n):t.nodeType===1&&Lu(t,n),Ma(t)):Lu(tn,n.stateNode));break;case 4:i=tn,r=pi,tn=n.stateNode.containerInfo,pi=!0,or(t,e,n),tn=i,pi=r;break;case 0:case 11:case 14:case 15:if(!mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mh(n,e,o),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!mn&&(Qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(mn=(i=mn)||n.memoizedState!==null,or(t,e,n),mn=i):or(t,e,n);break;default:or(t,e,n)}}function Zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(i){var r=pS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,pi=!1;break e;case 3:tn=a.stateNode.containerInfo,pi=!0;break e;case 4:tn=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if(tn===null)throw Error(Re(160));Tx(s,o,r),tn=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ax(e,t),e=e.sibling}function Ax(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),Ei(t),i&4){try{ua(3,t,t.return),Qc(3,t)}catch(M){Nt(t,t.return,M)}try{ua(5,t,t.return)}catch(M){Nt(t,t.return,M)}}break;case 1:ci(e,t),Ei(t),i&512&&n!==null&&Qs(n,n.return);break;case 5:if(ci(e,t),Ei(t),i&512&&n!==null&&Qs(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(M){Nt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qg(r,s),Vd(a,o);var c=Vd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?$g(r,d):u==="dangerouslySetInnerHTML"?Jg(r,d):u==="children"?xa(r,d):Cf(r,u,d,c)}switch(a){case"input":Od(r,s);break;case"textarea":Kg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ro(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ro(r,!!s.multiple,s.defaultValue,!0):ro(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(M){Nt(t,t.return,M)}}break;case 6:if(ci(e,t),Ei(t),i&4){if(t.stateNode===null)throw Error(Re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Nt(t,t.return,M)}}break;case 3:if(ci(e,t),Ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(M){Nt(t,t.return,M)}break;case 4:ci(e,t),Ei(t);break;case 13:ci(e,t),Ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ap=Ut())),i&4&&Zm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(mn=(c=mn)||u,ci(e,t),mn=c):ci(e,t),Ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ve=t,u=t.child;u!==null;){for(d=Ve=u;Ve!==null;){switch(f=Ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:ua(4,f,f.return);break;case 1:Qs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(M){Nt(i,n,M)}}break;case 5:Qs(f,f.return);break;case 22:if(f.memoizedState!==null){Qm(d);continue}}p!==null?(p.return=f,Ve=p):Qm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qg("display",o))}catch(M){Nt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Nt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ci(e,t),Ei(t),i&4&&Zm(t);break;case 21:break;default:ci(e,t),Ei(t)}}function Ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ex(n)){var i=n;break e}n=n.return}throw Error(Re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=Km(t);xh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Km(t);vh(t,a,o);break;default:throw Error(Re(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){Ve=t,bx(t)}function bx(t,e,n){for(var i=(t.mode&1)!==0;Ve!==null;){var r=Ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||mn;a=ll;var c=mn;if(ll=o,(mn=l)&&!c)for(Ve=r;Ve!==null;)o=Ve,l=o.child,o.tag===22&&o.memoizedState!==null?$m(r):l!==null?(l.return=o,Ve=l):$m(r);for(;s!==null;)Ve=s,bx(s),s=s.sibling;Ve=r,ll=a,mn=c}Jm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ve=s):Jm(t)}}function Jm(t){for(;Ve!==null;){var e=Ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mn||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:fi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Um(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Re(163))}mn||e.flags&512&&gh(e)}catch(f){Nt(e,e.return,f)}}if(e===t){Ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ve=n;break}Ve=e.return}}function Qm(t){for(;Ve!==null;){var e=Ve;if(e===t){Ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ve=n;break}Ve=e.return}}function $m(t){for(;Ve!==null;){var e=Ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{gh(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{gh(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ve=a;break}Ve=e.return}}var aS=Math.ceil,Lc=ir.ReactCurrentDispatcher,sp=ir.ReactCurrentOwner,ii=ir.ReactCurrentBatchConfig,ct=0,Qt=null,kt=null,on=0,Hn=0,$s=kr(0),Gt=0,Na=null,cs=0,$c=0,op=0,da=null,Cn=null,ap=0,Mo=1/0,Wi=null,Dc=!1,yh=null,Lr=null,cl=!1,Er=null,Nc=0,ha=0,_h=null,$l=-1,ec=0;function _n(){return ct&6?Ut():$l!==-1?$l:$l=Ut()}function Dr(t){return t.mode&1?ct&2&&on!==0?on&-on:j1.transition!==null?(ec===0&&(ec=dv()),ec):(t=gt,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function Si(t,e,n,i){if(50<ha)throw ha=0,_h=null,Error(Re(185));Ha(t,n,i),(!(ct&2)||t!==Qt)&&(t===Qt&&(!(ct&2)&&($c|=n),Gt===4&&yr(t,on)),In(t,i),n===1&&ct===0&&!(e.mode&1)&&(Mo=Ut()+500,Kc&&Br()))}function In(t,e){var n=t.callbackNode;j_(t,e);var i=gc(t,t===Qt?on:0);if(i===0)n!==null&&lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lm(n),e===1)t.tag===0?G1(e0.bind(null,t)):Ov(e0.bind(null,t)),k1(function(){!(ct&6)&&Br()}),n=null;else{switch(hv(i)){case 1:n=Nf;break;case 4:n=cv;break;case 16:n=mc;break;case 536870912:n=uv;break;default:n=mc}n=Ux(n,Cx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cx(t,e){if($l=-1,ec=0,ct&6)throw Error(Re(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var i=gc(t,t===Qt?on:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ic(t,i);else{e=i;var r=ct;ct|=2;var s=Px();(Qt!==t||on!==e)&&(Wi=null,Mo=Ut()+500,rs(t,e));do try{uS();break}catch(a){Rx(t,a)}while(!0);Xf(),Lc.current=s,ct=r,kt!==null?e=0:(Qt=null,on=0,e=Gt)}if(e!==0){if(e===2&&(r=Yd(t),r!==0&&(i=r,e=Sh(t,r))),e===1)throw n=Na,rs(t,0),yr(t,i),In(t,Ut()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!lS(r)&&(e=Ic(t,i),e===2&&(s=Yd(t),s!==0&&(i=s,e=Sh(t,s))),e===1))throw n=Na,rs(t,0),yr(t,i),In(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Re(345));case 2:Jr(t,Cn,Wi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=ap+500-Ut(),10<e)){if(gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=th(Jr.bind(null,t,Cn,Wi),e);break}Jr(t,Cn,Wi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aS(i/1960))-i,10<i){t.timeoutHandle=th(Jr.bind(null,t,Cn,Wi),i);break}Jr(t,Cn,Wi);break;case 5:Jr(t,Cn,Wi);break;default:throw Error(Re(329))}}}return In(t,Ut()),t.callbackNode===n?Cx.bind(null,t):null}function Sh(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=Cn,Cn=n,e!==null&&Mh(e)),t}function Mh(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~op,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_i(e),i=1<<n;t[n]=-1,e&=~i}}function e0(t){if(ct&6)throw Error(Re(327));co();var e=gc(t,0);if(!(e&1))return In(t,Ut()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var i=Yd(t);i!==0&&(e=i,n=Sh(t,i))}if(n===1)throw n=Na,rs(t,0),yr(t,e),In(t,Ut()),n;if(n===6)throw Error(Re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,Cn,Wi),In(t,Ut()),null}function lp(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(Mo=Ut()+500,Kc&&Br())}}function us(t){Er!==null&&Er.tag===0&&!(ct&6)&&co();var e=ct;ct|=1;var n=ii.transition,i=gt;try{if(ii.transition=null,gt=1,t)return t()}finally{gt=i,ii.transition=n,ct=e,!(ct&6)&&Br()}}function cp(){Hn=$s.current,Tt($s)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F1(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:_o(),Tt(Dn),Tt(vn),Qf();break;case 5:Jf(i);break;case 4:_o();break;case 13:Tt(Ct);break;case 19:Tt(Ct);break;case 10:Yf(i.type._context);break;case 22:case 23:cp()}n=n.return}if(Qt=t,kt=t=Nr(t.current,null),on=Hn=e,Gt=0,Na=null,op=$c=cs=0,Cn=da=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ns=null}return t}function Rx(t,e){do{var n=kt;try{if(Xf(),Zl.current=Pc,Rc){for(var i=Pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(ls=0,Kt=Ht=Pt=null,ca=!1,Pa=0,sp.current=null,n===null||n.return===null){Gt=1,Na=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=on,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Hm(o);if(p!==null){p.flags&=-257,Vm(p,o,a,s,e),p.mode&1&&Bm(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var M=new Set;M.add(l),e.updateQueue=M}else y.add(l);break e}else{if(!(e&1)){Bm(s,c,e),up();break e}l=Error(Re(426))}}else if(bt&&a.mode&1){var v=Hm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Vm(v,o,a,s,e),jf(So(l,a));break e}}s=l=So(l,a),Gt!==4&&(Gt=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=hx(s,l,e);Im(s,h);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Lr===null||!Lr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=fx(s,a,e);Im(s,S);break e}}s=s.return}while(s!==null)}Dx(n)}catch(L){e=L,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Px(){var t=Lc.current;return Lc.current=Pc,t===null?Pc:t}function up(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Qt===null||!(cs&268435455)&&!($c&268435455)||yr(Qt,on)}function Ic(t,e){var n=ct;ct|=2;var i=Px();(Qt!==t||on!==e)&&(Wi=null,rs(t,e));do try{cS();break}catch(r){Rx(t,r)}while(!0);if(Xf(),ct=n,Lc.current=i,kt!==null)throw Error(Re(261));return Qt=null,on=0,Gt}function cS(){for(;kt!==null;)Lx(kt)}function uS(){for(;kt!==null&&!U_();)Lx(kt)}function Lx(t){var e=Ix(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?Dx(t):kt=e,sp.current=null}function Dx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iS(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,kt=null;return}}else if(n=nS(n,e,Hn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Jr(t,e,n){var i=gt,r=ii.transition;try{ii.transition=null,gt=1,dS(t,e,n,i)}finally{ii.transition=r,gt=i}return null}function dS(t,e,n,i){do co();while(Er!==null);if(ct&6)throw Error(Re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(W_(t,s),t===Qt&&(kt=Qt=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Ux(mc,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=gt;gt=1;var a=ct;ct|=4,sp.current=null,sS(t,n),Ax(n,t),L1($d),vc=!!Qd,$d=Qd=null,t.current=n,oS(n),z_(),ct=a,gt=o,ii.transition=s}else t.current=n;if(cl&&(cl=!1,Er=t,Nc=r),s=t.pendingLanes,s===0&&(Lr=null),k_(n.stateNode),In(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dc)throw Dc=!1,t=yh,yh=null,t;return Nc&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===_h?ha++:(ha=0,_h=t):ha=0,Br(),null}function co(){if(Er!==null){var t=hv(Nc),e=ii.transition,n=gt;try{if(ii.transition=null,gt=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,Nc=0,ct&6)throw Error(Re(331));var r=ct;for(ct|=4,Ve=t.current;Ve!==null;){var s=Ve,o=s.child;if(Ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ve=c;Ve!==null;){var u=Ve;switch(u.tag){case 0:case 11:case 15:ua(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ve=d;else for(;Ve!==null;){u=Ve;var f=u.sibling,p=u.return;if(wx(u),u===c){Ve=null;break}if(f!==null){f.return=p,Ve=f;break}Ve=p}}}var y=s.alternate;if(y!==null){var M=y.child;if(M!==null){y.child=null;do{var v=M.sibling;M.sibling=null,M=v}while(M!==null)}}Ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ve=o;else e:for(;Ve!==null;){if(s=Ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ve=h;break e}Ve=s.return}}var m=t.current;for(Ve=m;Ve!==null;){o=Ve;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ve=x;else e:for(o=m;Ve!==null;){if(a=Ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qc(9,a)}}catch(L){Nt(a,a.return,L)}if(a===o){Ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ve=S;break e}Ve=a.return}}if(ct=r,Br(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(jc,t)}catch{}i=!0}return i}finally{gt=n,ii.transition=e}}return!1}function t0(t,e,n){e=So(n,e),e=hx(t,e,1),t=Pr(t,e,1),e=_n(),t!==null&&(Ha(t,1,e),In(t,e))}function Nt(t,e,n){if(t.tag===3)t0(t,t,n);else for(;e!==null;){if(e.tag===3){t0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Lr===null||!Lr.has(i))){t=So(n,t),t=fx(e,t,1),e=Pr(e,t,1),t=_n(),e!==null&&(Ha(e,1,t),In(e,t));break}}e=e.return}}function hS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(on&n)===n&&(Gt===4||Gt===3&&(on&130023424)===on&&500>Ut()-ap?rs(t,0):op|=n),In(t,e)}function Nx(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=_n();t=tr(t,e),t!==null&&(Ha(t,e,n),In(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nx(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Re(314))}i!==null&&i.delete(e),Nx(t,n)}var Ix;Ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dn.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,tS(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,bt&&e.flags&1048576&&Fv(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ql(t,e),t=e.pendingProps;var r=vo(e,vn.current);lo(e,n),r=ep(null,e,i,t,r,n);var s=tp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nn(i)?(s=!0,Mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kf(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,lh(e,i,t,n),e=dh(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&Vf(e),yn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gS(i),t=fi(i,t),r){case 0:e=uh(null,e,i,t,n);break e;case 1:e=Wm(null,e,i,t,n);break e;case 11:e=Gm(null,e,i,t,n);break e;case 14:e=jm(null,e,i,fi(i.type,t),n);break e}throw Error(Re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),uh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Wm(t,e,i,r,n);case 3:e:{if(vx(e),t===null)throw Error(Re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jv(t,e),bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=So(Error(Re(423)),e),e=Xm(t,e,i,n,r);break e}else if(i!==r){r=So(Error(Re(424)),e),e=Xm(t,e,i,n,r);break e}else for(jn=Rr(e.stateNode.containerInfo.firstChild),Wn=e,bt=!0,gi=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=nr(t,e,n);break e}yn(t,e,i,n)}e=e.child}return e;case 5:return Wv(e),t===null&&sh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,eh(i,r)?o=null:s!==null&&eh(i,s)&&(e.flags|=32),gx(t,e),yn(t,e,o,n),e.child;case 6:return t===null&&sh(e),null;case 13:return xx(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):yn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Gm(t,e,i,r,n);case 7:return yn(t,e,e.pendingProps,n),e.child;case 8:return yn(t,e,e.pendingProps.children,n),e.child;case 12:return yn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(Tc,i._currentValue),i._currentValue=o,s!==null)if(Mi(s.value,o)){if(s.children===r.children&&!Dn.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),oh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,lo(e,n),r=si(r),i=i(r),e.flags|=1,yn(t,e,i,n),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),jm(t,e,i,r,n);case 15:return px(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Ql(t,e),e.tag=1,Nn(i)?(t=!0,Mc(e)):t=!1,lo(e,n),dx(e,i,r),lh(e,i,r,n),dh(null,e,i,!0,t,n);case 19:return yx(t,e,n);case 22:return mx(t,e,n)}throw Error(Re(156,e.tag))};function Ux(t,e){return lv(t,e)}function mS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new mS(t,e,n,i)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gs:return ss(n.children,r,s,e);case Rf:o=8,r|=8;break;case Dd:return t=ei(12,n,e,r|2),t.elementType=Dd,t.lanes=s,t;case Nd:return t=ei(13,n,e,r),t.elementType=Nd,t.lanes=s,t;case Id:return t=ei(19,n,e,r),t.elementType=Id,t.lanes=s,t;case Wg:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gg:o=10;break e;case jg:o=9;break e;case Pf:o=11;break e;case Lf:o=14;break e;case gr:o=16,i=null;break e}throw Error(Re(130,t==null?t:typeof t,""))}return e=ei(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ss(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=ei(22,t,i,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hp(t,e,n,i,r,s,o,a,l){return t=new vS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(s),t}function xS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zx(t){if(!t)return zr;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(Re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Re(171))}if(t.tag===1){var n=t.type;if(Nn(n))return zv(t,n,e)}return e}function Ox(t,e,n,i,r,s,o,a,l){return t=hp(n,i,!0,t,r,s,o,a,l),t.context=zx(null),n=t.current,i=_n(),r=Dr(n),s=Qi(i,r),s.callback=e??null,Pr(n,s,r),t.current.lanes=r,Ha(t,r,i),In(t,i),t}function tu(t,e,n,i){var r=e.current,s=_n(),o=Dr(r);return n=zx(n),e.context===null?e.context=n:e.pendingContext=n,e=Qi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pr(r,e,o),t!==null&&(Si(t,r,o,s),Kl(t,r,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function n0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fp(t,e){n0(t,e),(t=t.alternate)&&n0(t,e)}function yS(){return null}var Fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}nu.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Re(409));tu(t,e,null,null)};nu.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){tu(null,t,null,null)}),e[er]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&vv(t)}};function mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function i0(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Uc(o);s.call(c)}}var o=Ox(e,i,t,0,null,!1,!1,"",i0);return t._reactRootContainer=o,t[er]=o.current,Ta(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Uc(l);a.call(c)}}var l=hp(t,0,!1,null,null,!1,!1,"",i0);return t._reactRootContainer=l,t[er]=l.current,Ta(t.nodeType===8?t.parentNode:t),us(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uc(o);a.call(l)}}tu(e,o,t,r)}else o=_S(n,e,t,r,i);return Uc(o)}fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(If(e,n|1),In(e,Ut()),!(ct&6)&&(Mo=Ut()+500,Br()))}break;case 13:us(function(){var i=tr(t,1);if(i!==null){var r=_n();Si(i,t,1,r)}}),fp(t,1)}};Uf=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=_n();Si(e,t,134217728,n)}fp(t,134217728)}};pv=function(t){if(t.tag===13){var e=Dr(t),n=tr(t,e);if(n!==null){var i=_n();Si(n,t,e,i)}fp(t,e)}};mv=function(){return gt};gv=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};jd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(Re(90));Yg(i),Od(i,r)}}}break;case"textarea":Kg(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};nv=lp;iv=us;var SS={usingClientEntryPoint:!1,Events:[Ga,Ys,qc,ev,tv,lp]},Ho={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ov(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{jc=ul.inject(MS),Li=ul}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mp(e))throw Error(Re(200));return xS(t,e,null,n)};Yn.createRoot=function(t,e){if(!mp(t))throw Error(Re(299));var n=!1,i="",r=Fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hp(t,1,!1,null,null,n,!1,i,r),t[er]=e.current,Ta(t.nodeType===8?t.parentNode:t),new pp(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Re(188)):(t=Object.keys(t).join(","),Error(Re(268,t)));return t=ov(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return us(t)};Yn.hydrate=function(t,e,n){if(!iu(e))throw Error(Re(200));return ru(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!mp(t))throw Error(Re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ox(e,null,t,1,n??null,r,!1,s,o),t[er]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};Yn.render=function(t,e,n){if(!iu(e))throw Error(Re(200));return ru(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!iu(t))throw Error(Re(40));return t._reactRootContainer?(us(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Yn.unstable_batchedUpdates=lp;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(Re(200));if(t==null||t._reactInternals===void 0)throw Error(Re(38));return ru(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kx)}catch(t){console.error(t)}}kx(),kg.exports=Yn;var wS=kg.exports,r0=wS;Pd.createRoot=r0.createRoot,Pd.hydrateRoot=r0.hydrateRoot;const Bx=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"pouf",name:"Pouf",category:"Seating",w:.5,d:.5,h:.4,color:"#b6855f",shape:"pouf"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"ladder-shelf",name:"Ladder Shelf",category:"Storage",w:.6,d:.4,h:1.7,color:"#9a6f43",shape:"ladder"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fireplace",name:"Fireplace",category:"Decor",w:1.3,d:.4,h:1.1,color:"#cfcabf",shape:"fireplace"},{type:"floor-mirror",name:"Floor Mirror",category:"Decor",w:.7,d:.06,h:1.7,color:"#caa86a",shape:"mirror"},{type:"bar-cart",name:"Bar Cart",category:"Decor",w:.7,d:.42,h:.8,color:"#b8923f",shape:"barcart"},{type:"piano",name:"Upright Piano",category:"Decor",w:1.5,d:.6,h:1.2,color:"#161616",shape:"piano"},{type:"coat-rack",name:"Coat Rack",category:"Decor",w:.5,d:.5,h:1.75,color:"#5a4636",shape:"coatrack"},{type:"floor-vase",name:"Floor Vase",category:"Decor",w:.32,d:.32,h:.85,color:"#9a8f7a",shape:"vase"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"island",name:"Kitchen Island",category:"Kitchen",w:1.4,d:.9,h:.9,color:"#7d7f83",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"},{type:"oven",name:"Stove / Oven",category:"Kitchen",w:.6,d:.62,h:.9,color:"#d3d7dc",shape:"oven"},{type:"sink",name:"Kitchen Sink",category:"Kitchen",w:.85,d:.6,h:.9,color:"#7a5c41",shape:"sink"},{type:"dishwasher",name:"Dishwasher",category:"Kitchen",w:.6,d:.6,h:.85,color:"#cfd4da",shape:"appliance"},{type:"washer",name:"Washing Machine",category:"Appliances",w:.6,d:.62,h:.85,color:"#e8eaec",shape:"washer"},{type:"dryer",name:"Dryer",category:"Appliances",w:.6,d:.62,h:.85,color:"#dfe2e5",shape:"washer"},{type:"chest-freezer",name:"Chest Freezer",category:"Appliances",w:1,d:.6,h:.85,color:"#e2e6ea",shape:"appliance"},{type:"water-heater",name:"Water Heater",category:"Appliances",w:.55,d:.55,h:1.5,color:"#d9dde1",shape:"fridge"},{type:"ac-unit",name:"AC Unit",category:"Appliances",w:.5,d:.5,h:.7,color:"#cfd4da",shape:"appliance"},{type:"toilet",name:"Toilet",category:"Bathroom",w:.4,d:.68,h:.78,color:"#f2f2f0",shape:"toilet"},{type:"bathtub",name:"Bathtub",category:"Bathroom",w:1.7,d:.75,h:.56,color:"#f3f3f1",shape:"bathtub"},{type:"shower",name:"Shower",category:"Bathroom",w:.9,d:.9,h:2,color:"#e8e8e6",shape:"shower"},{type:"vanity",name:"Vanity",category:"Bathroom",w:.8,d:.5,h:.85,color:"#6f5a45",shape:"sink"},{type:"office-chair",name:"Office Chair",category:"Office",w:.6,d:.6,h:1.1,color:"#3a3a40",shape:"chair"},{type:"filing-cabinet",name:"Filing Cabinet",category:"Office",w:.45,d:.6,h:1.32,color:"#6b6f74",shape:"drawers"},{type:"office-desk",name:"Office Desk",category:"Office",w:1.5,d:.75,h:.75,color:"#5d5a55",shape:"desk"}],gp=Object.fromEntries(Bx.map(t=>[t.type,t]));function Ai(t){return gp[t]||null}const ES=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],Hx="honeycutt.design.v2";let TS=1;const Tn=()=>`${Date.now().toString(36)}-${(TS++).toString(36)}`;function eo(){return{view:"2d",tool:"select",openingMode:!1,openShape:"rect",visitMode:!1,units:"ft",ambiance:"day",quality:"high",roof:!1,defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],sketches:[],openings:[],selected:null}}function AS(){try{const t=localStorage.getItem(Hx);if(!t)return eo();const e=JSON.parse(t);if(!e||!Array.isArray(e.items))return eo();const n=e.view==="3d"?"3d":"2d",i=e.ambiance==="night"?"night":"day";return{...eo(),...e,view:n,ambiance:i,tool:"select",openingMode:!1,visitMode:!1,selected:null}}catch{return eo()}}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function bS(t){return t.scale&&(t.scale={x:sn(t.scale.x??1,.3,3),y:sn(t.scale.y??1,.3,3),z:sn(t.scale.z??1,.3,3)}),t}function wh(t){return t.w=sn(t.w,.5,40),t.d=sn(t.d,.5,40),t.height!=null&&(t.height=sn(t.height,1.5,6)),t.floorScale!=null&&(t.floorScale=sn(t.floorScale,.3,4)),t}function Vx(t){return t.height!=null&&(t.height=sn(t.height,1.5,6)),t.thickness!=null&&(t.thickness=sn(t.thickness,.05,.5)),t}function Eh(t){return t.w!=null&&(t.w=sn(t.w,.1,12)),t.h!=null&&(t.h=sn(t.h,.1,6)),t.depth!=null&&(t.depth=sn(t.depth,.02,3)),t.thickness!=null&&(t.thickness=sn(t.thickness,.01,.4)),t}function Gx(t){return t.u!=null&&(t.u=Math.max(0,t.u)),t.v!=null&&(t.v=sn(t.v,0,6)),t.w!=null&&(t.w=sn(t.w,.1,12)),t.h!=null&&(t.h=sn(t.h,.1,6)),t}const Th={item:"items",room:"rooms",wall:"walls",builtin:"builtins",sketch:"sketches",opening:"openings"};function CS(t,e,n,i){const r=Th[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&bS(a),e==="room"&&wh(a),e==="wall"&&Vx(a),e==="builtin"&&Eh(a),e==="opening"&&Gx(a),a});return{...t,[r]:s}}function Hu(t,e){var n;switch(e.type){case"view":return{...t,view:e.view,openingMode:e.view==="3d"?t.openingMode:!1,visitMode:e.view==="3d"?t.visitMode:!1};case"openingMode":return{...t,openingMode:e.value,selected:e.value?null:t.selected};case"openShape":return{...t,openShape:e.value};case"visitMode":return{...t,visitMode:e.value,selected:e.value?null:t.selected,openingMode:e.value?!1:t.openingMode};case"ambiance":return{...t,ambiance:e.value};case"quality":return{...t,quality:e.value};case"roof":return{...t,roof:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"defaultHeight":return{...t,defaultHeight:sn(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"loadRooms":{const i=e.rooms.map(r=>wh({uid:Tn(),height:t.defaultHeight,...r}));return{...eo(),view:t.view,units:t.units,ambiance:t.ambiance,quality:t.quality,defaultHeight:t.defaultHeight,rooms:i,selected:null}}case"addRoom":{const i=wh({uid:Tn(),name:e.name||`Room ${t.rooms.length+1}`,x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],tool:"select",selected:{type:"room",uid:i.uid}}}case"addWall":{const i=Vx({uid:Tn(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],tool:"select",selected:null}}case"floorAll":return{...t,rooms:t.rooms.map(i=>({...i,...e.patch}))};case"addBuiltin":{const i=Eh({uid:Tn(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>Eh({uid:Tn(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addOpening":{const i=Gx({uid:Tn(),kind:"doorway",v:0,shape:"rect",...e.opening});return{...t,openings:[...t.openings,i],selected:{type:"opening",uid:i.uid}}}case"addSketch":{const i={uid:Tn(),pts:e.pts,closed:!!e.closed,color:e.color||"#3f7d8c"};return{...t,sketches:[...t.sketches,i],selected:{type:"sketch",uid:i.uid}}}case"addItem":{const i=gp[e.kind];if(!i)return t;const r={uid:Tn(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return CS(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=Th[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=Th[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:Tn(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:Tn(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:Tn(),u:o.u+.3,v:o.v+.3}:i==="sketch"?a={...o,uid:Tn(),pts:o.pts.map(l=>({x:l.x+.3,z:l.z+.3}))}:i==="opening"?a={...o,uid:Tn(),u:o.u+.3}:a={...o,uid:Tn(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...eo(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const RS=new Set(["addRoom","addWall","addSketch","addItem","addBuiltin","addBuiltins","addOpening","floorAll","loadRooms","update","remove","duplicate","clear","reset","defaultHeight"]),Vu=80;function PS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape,visitMode:t.present.visitMode},future:[t.present,...t.future].slice(0,Vu),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Vu),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape,visitMode:t.present.visitMode},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!RS.has(e.type))return{...t,present:Hu(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:Hu(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Vu),present:Hu(t.present,e),future:[],lastKey:i||null,lastTime:n}}const jx=We.createContext(null);function LS({children:t}){const[e,n]=We.useReducer(PS,void 0,()=>({past:[],present:AS(),future:[],lastKey:null,lastTime:0})),i=We.useRef(null),r=e.present;We.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(Hx,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=We.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return g.jsx(jx.Provider,{value:s,children:t})}function Po(){const t=We.useContext(jx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}const Hs=typeof window<"u"&&window.matchMedia?window.matchMedia("(orientation: portrait) and (pointer: coarse)"):{matches:!1};function Wx(t,e,n){return Hs.matches?[e-n.top,n.right-t,n.height,n.width]:[t-n.left,e-n.top,n.width,n.height]}function DS(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function rt(t,e){return e==="m"?`${t.toFixed(2)} m`:DS(t)}function NS(t,e){return e==="m"?`${t.toFixed(1)} m²`:`${Math.round(t*10.7639)} ft²`}function _r(t,e){const n=e&&e.scale||{},i=e&&e.dim||t||{w:.5,d:.5,h:.5};return{w:i.w*(n.x??1),d:i.d*(n.z??1),h:i.h*(n.y??1)}}function uo(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function Sr(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function s0(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const Xx=[{id:"oak_floor",label:"Oak Floor",group:"Wood",color:"#806042",normal:!0,repeat:1.4},{id:"wood_floor",label:"Wood Plank",group:"Wood",color:"#7a5c3e",normal:!1,repeat:1.4},{id:"light_oak",label:"Light Oak",group:"Wood",color:"#a17e58",normal:!0,repeat:1},{id:"walnut",label:"Walnut",group:"Wood",color:"#3e190b",normal:!0,repeat:1},{id:"parquet",label:"Parquet",group:"Wood",color:"#93704d",normal:!0,repeat:1.2},{id:"herringbone",label:"Herringbone",group:"Wood",color:"#9a7550",normal:!1,repeat:1},{id:"dark_wood",label:"Dark Plank",group:"Wood",color:"#4a3526",normal:!1,repeat:1.3},{id:"marble",label:"Marble",group:"Stone",color:"#b29d7a",normal:!0,repeat:2},{id:"granite",label:"Granite",group:"Stone",color:"#4e4e4f",normal:!1,repeat:1.6},{id:"floor_tile",label:"Floor Tile",group:"Tile",color:"#796f6b",normal:!0,repeat:1.2},{id:"patterned_tile",label:"Patterned Tile",group:"Tile",color:"#8a8077",normal:!1,repeat:1},{id:"brick",label:"Brick",group:"Masonry",color:"#8e6750",normal:!0,repeat:1.6},{id:"concrete",label:"Concrete",group:"Masonry",color:"#565654",normal:!0,repeat:2.2},{id:"plaster",label:"Plaster",group:"Wall",color:"#b0a89d",normal:!0,repeat:2.4},{id:"grey_plaster",label:"Grey Plaster",group:"Wall",color:"#9a968f",normal:!1,repeat:2.4},{id:"beige_wall",label:"Beige Wall",group:"Wall",color:"#cabfa9",normal:!1,repeat:2.6},{id:"fabric",label:"Fabric",group:"Soft",color:"#9a5955",normal:!0,repeat:.8},{id:"carpet",label:"Carpet",group:"Soft",color:"#352f25",normal:!1,repeat:1.5},{id:"grass",label:"Grass",group:"Outdoor",color:"#5f7d3f",normal:!1,repeat:1.5}],nc=Object.fromEntries(Xx.map(t=>[t.id,t])),fa=(t,e=!1)=>`./textures/${t}${e?"_n":""}.jpg`,IS="./hdri/studio.hdr";function On(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Vr="rgba(0,0,0,0.22)",o0="rgba(0,0,0,0.28)";function Yx({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,u=Math.max(.8,Math.min(s,o)*.025),d=On(i,.16),f=On(i,-.22),p=(M,v,h,m,x,S=c,L={})=>g.jsx("rect",{x:M,y:v,width:h,height:m,rx:S,ry:S,fill:x,...L});let y=null;switch(r){case"seat":{const M=o*.26,v=s*.12;y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,f,c)," ",p(a,l+M*.5,v,o-M*.5,f,c*.6),p(a+s-v,l+M*.5,v,o-M*.5,f,c*.6),p(a+v+u,l+M,s-2*(v+u),o-M-u,d,c*.5)]});break}case"chair":{const M=o*.22;y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,f,c),p(a+u,l+M,s-2*u,o-M-u,d,c*.5)]});break}case"bench":{y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),p(a+s*.05,l+o*.18,s*.9,o*.64,d,c*.4)]});break}case"round":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),g.jsx("circle",{cx:0,cy:0,r:s*.3,fill:d})]});break;case"table":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,f),p(a+u*1.5,l+u*1.5,s-3*u,o-3*u,i,c*.8),p(a+s*.12,l+o*.12,s*.76,o*.76,d,c*.5)]});break;case"desk":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,f),p(a+u,l+u,s-2*u,o-2*u,i,c*.7),p(a+s*.62,l+u*2,s*.34,o-u*4,d,c*.4)]});break;case"round-table":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:f}),g.jsx("circle",{cx:0,cy:0,r:s/2-u*1.5,fill:i}),g.jsx("circle",{cx:0,cy:0,r:s*.34,fill:d})]});break;case"bed":{const M=o*.16,v=s*.4,h=o*.18;y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,f,c)," ",p(a+s*.05,l+M+o*.04,v,h,d,c*.4),p(a+s*.55,l+M+o*.04,v,h,d,c*.4),p(a+s*.05,l+M+h+o*.08,s*.9,o-M-h-o*.12,On(i,.07),c*.3)]});break}case"cabinet":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),g.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:o0,strokeWidth:u}),g.jsx("circle",{cx:-s*.06,cy:0,r:u*1.2,fill:Vr}),g.jsx("circle",{cx:s*.06,cy:0,r:u*1.2,fill:Vr})]});break;case"wardrobe":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),g.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:o0,strokeWidth:u}),g.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Vr,strokeWidth:u*1.6}),g.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Vr,strokeWidth:u*1.6})]});break;case"drawers":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.5),g.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Vr,strokeWidth:u*1.6,strokeLinecap:"round"})]});break;case"shelf":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,f),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),[.3,.5,.7].map((M,v)=>g.jsx("line",{x1:a+s*.12,y1:l+o*M,x2:a+s*.88,y2:l+o*M,stroke:Vr,strokeWidth:u},v))]});break;case"tv":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,"#0c0d10",c*.4),p(a+u,l,s-2*u,o*.55,"#22303f",c*.2)]});break;case"rug":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i,c*.3),p(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:On(i,.25),strokeWidth:u*1.4,strokeDasharray:`${u*3} ${u*3}`})]});break;case"round-rug":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),g.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:On(i,.25),strokeWidth:u*1.4})]});break;case"plant":y=g.jsxs(g.Fragment,{children:[p(a+s*.28,l+o*.28,s*.44,o*.44,On("#8a6a4a",-.1),c*.4),g.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:On(i,.1)}),g.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),g.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:On(i,-.12)}),g.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:On(i,.18)})]});break;case"lamp":y=g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:0,cy:0,r:s/2,fill:On(i,-.05)}),g.jsx("circle",{cx:0,cy:0,r:s*.22,fill:On(i,.3)})]});break;case"fridge":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.4),g.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Vr,strokeWidth:u*1.8,strokeLinecap:"round"})]});break;case"counter":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,f),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),p(a+s*.58,l+o*.22,s*.32,o*.56,On(i,-.18),c*.3)]});break;case"range":y=g.jsxs(g.Fragment,{children:[p(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([M,v],h)=>g.jsx("circle",{cx:s*M,cy:o*v,r:s*.13,fill:"none",stroke:On(i,.3),strokeWidth:u},h))]});break;default:y=p(a,l,s,o,i)}return g.jsx("g",{children:y})}const zt=({children:t,size:e=22,...n})=>g.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),US=t=>g.jsxs(zt,{...t,children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),g.jsx("path",{d:"M3 9h18M9 9v12"})]}),zS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),g.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),OS=t=>g.jsx(zt,{...t,children:g.jsx("path",{d:"M12 5v14M5 12h14"})}),FS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),g.jsx("path",{d:"M21 3v5h-5"})]}),Gr=t=>g.jsxs(zt,{...t,children:[g.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),g.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),ar=t=>g.jsx(zt,{...t,children:g.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),kS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),g.jsx("circle",{cx:"16",cy:"6",r:"2"}),g.jsx("circle",{cx:"8",cy:"12",r:"2"}),g.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),BS=t=>g.jsx(zt,{...t,children:g.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),HS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"}),g.jsx("path",{d:"M14 12h.01"})]}),VS=t=>g.jsxs(zt,{...t,children:[g.jsx("circle",{cx:"13",cy:"4",r:"1.6"}),g.jsx("path",{d:"M11 21l2-6-3-2 1-5 3 2 2 2"}),g.jsx("path",{d:"M10 13l-2 8M14 15l2 6"})]}),GS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M2 12 12 4l10 8"}),g.jsx("path",{d:"M5 10v9h14v-9"})]}),qx=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),g.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),Kx=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M9 14 4 9l5-5"}),g.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),jS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"m15 14 5-5-5-5"}),g.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),WS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M12 15V3"}),g.jsx("path",{d:"m8 7 4-4 4 4"}),g.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),XS=t=>g.jsxs(zt,{...t,children:[g.jsx("circle",{cx:"12",cy:"12",r:"4"}),g.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),a0=t=>g.jsx(zt,{...t,children:g.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),YS=t=>g.jsx(zt,{...t,children:g.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),qS=t=>g.jsx(zt,{...t,children:g.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),KS=t=>g.jsxs(zt,{...t,children:[g.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),g.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),l0=t=>g.jsx(zt,{...t,children:g.jsx("path",{d:"M4 12l5 5L20 6"})}),At="#d9b779",c0="#39414f",ZS="#c3c9d1",JS="#eef1f5",Zx=.0254,u0=Zx,Gu=18,d0=["n","e","s","w"],QS="#2f7d8c",$S=16,dn=(t,e)=>Math.round(t/e)*e,Qr=(t,e,n)=>Math.max(e,Math.min(n,t)),h0=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1,eM={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function tM(t){const e=t.floorTex||(t.floorColor?null:"wood:oak");if(!e)return{color:t.floorColor||"#eef1f5"};if(e.startsWith("wood:"))return{color:eM[e.slice(5)]||"#c79a6b"};if(e.startsWith("mat:")){const n=nc[e.slice(4)];if(n)return{mat:e.slice(4),repeat:n.repeat||1.5,color:n.color}}return{color:t.floorColor||"#cdb89a"}}function nM(t,e,n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r].x,a=n[r].z,l=n[s].x,c=n[s].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function ju(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function dl(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Qr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function iM(){const{state:t,dispatch:e}=Po(),{rooms:n,walls:i,items:r,sketches:s,openings:o,selected:a,units:l,tool:c,defaultHeight:u}=t,d=l==="ft"?Zx:.01,[f,p]=We.useState([]),[y,M]=We.useState(null),v=We.useRef(null),h=We.useRef(null),[m,x]=We.useState({W:360,H:540}),[S,L]=We.useState({scale:64,panX:180,panY:270,init:!1}),[A,E]=We.useState(null),b=We.useRef(null);b.current=A;const G=We.useRef(new Map),_=We.useRef(null),w=We.useRef(S);w.current=S;const W=We.useRef(!1);We.useLayoutEffect(()=>{const O=v.current;if(!O)return;const ee=()=>{const U=O.clientWidth,$=O.clientHeight;x({W:U,H:$}),L(B=>B.init?B:{scale:64,panX:U/2,panY:$/2,init:!0})},j=new ResizeObserver(ee);return j.observe(O),ee(),()=>j.disconnect()},[]);const{W:R,H:z}=m;function H(){let O=1/0,ee=-1/0,j=1/0,U=-1/0;const $=(ie,fe)=>{O=Math.min(O,ie),ee=Math.max(ee,ie),j=Math.min(j,fe),U=Math.max(U,fe)};for(const ie of n)$(ie.x,ie.z),$(ie.x+ie.w,ie.z+ie.d);for(const ie of i)$(ie.x1,ie.z1),$(ie.x2,ie.z2);for(const ie of r){const fe=Ai(ie.type),Oe=_r(fe,ie);$(ie.x-Oe.w/2,ie.z-Oe.d/2),$(ie.x+Oe.w/2,ie.z+Oe.d/2)}for(const ie of s)for(const fe of ie.pts)$(fe.x,fe.z);if(!isFinite(O)){L({scale:64,panX:R/2,panY:z/2,init:!0});return}const B=56,V=92,ce=64,me=Math.max(.5,ee-O),te=Math.max(.5,U-j),C=Qr(Math.min((R-2*B)/me,(z-V-ce)/te),14,180),ue=(O+ee)/2,X=(j+U)/2,Y=(V+(z-ce))/2;L({scale:C,panX:R/2-ue*C,panY:Y-X*C,init:!0})}const F=n.length>0||i.length>0||r.length>0||s.length>0,Z=We.useRef(0);We.useLayoutEffect(()=>{if(!m.W)return;const O=Z.current&&Math.abs(m.W-Z.current)>60;Z.current=m.W,F&&(!W.current||O)&&(H(),W.current=!0)},[m.W,F]),We.useLayoutEffect(()=>{c!=="sketch"&&(p([]),M(null))},[c]);const{scale:I,panX:q,panY:K}=S,J=(O,ee)=>[O*I+q,ee*I+K],ge=(O,ee)=>[(O-q)/I,(ee-K)/I],Ce=O=>{const ee=h.current.getBoundingClientRect(),[j,U]=Wx(O.clientX,O.clientY,ee);return[j,U]},Q=(a==null?void 0:a.type)==="item"?r.find(O=>O.uid===a.uid):null,re=(a==null?void 0:a.type)==="room"?n.find(O=>O.uid===a.uid):null,le=(a==null?void 0:a.type)==="wall"?i.find(O=>O.uid===a.uid):null,ae=(a==null?void 0:a.type)==="sketch"?s.find(O=>O.uid===a.uid):null;function Me(O){const ee=Ai(O.type),j=_r(ee,O),[U,$]=J(O.x,O.z),B=(O.rot||0)*Math.PI/180,V=Math.cos(B),ce=Math.sin(B),me=j.w*I/2,te=j.d*I/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([C,ue])=>{const X=C*me,Y=ue*te;return[U+X*V-Y*ce,$+X*ce+Y*V]})}function we(O){return{nw:J(O.x,O.z),ne:J(O.x+O.w,O.z),se:J(O.x+O.w,O.z+O.d),sw:J(O.x,O.z+O.d)}}function Ue(O,ee){const[j,U]=ge(O,ee);if(Q){const $=Me(Q);for(let B=0;B<4;B++)if(Math.hypot(O-$[B][0],ee-$[B][1])<Gu)return{kind:"item-handle"}}if(re){const $=we(re);for(const B in $)if(Math.hypot(O-$[B][0],ee-$[B][1])<Gu)return{kind:"room-handle",handle:B}}if(le)for(const $ of["1","2"]){const[B,V]=J(le["x"+$],le["z"+$]);if(Math.hypot(O-B,ee-V)<Gu)return{kind:"wall-end",end:$}}for(let $=r.length-1;$>=0;$--){const B=r[$],V=Ai(B.type);if(!V)continue;const ce=_r(V,B),me=(B.rot||0)*Math.PI/180,te=j-B.x,C=U-B.z,ue=te*Math.cos(me)+C*Math.sin(me),X=-te*Math.sin(me)+C*Math.cos(me);if(Math.abs(ue)<=ce.w/2+.08&&Math.abs(X)<=ce.d/2+.08)return{kind:"item",uid:B.uid}}for(let $=i.length-1;$>=0;$--){const B=i[$];if(dl(j,U,B.x1,B.z1,B.x2,B.z2)<=B.thickness/2+.18)return{kind:"wall",uid:B.uid}}for(let $=s.length-1;$>=0;$--){const B=s[$],V=B.closed?B.pts.length:B.pts.length-1;for(let ce=0;ce<V;ce++){const me=B.pts[ce],te=B.pts[(ce+1)%B.pts.length];if(dl(j,U,me.x,me.z,te.x,te.z)<=.18)return{kind:"sketch",uid:B.uid}}}for(let $=o.length-1;$>=0;$--){const B=o[$],V=Sr(B.wall,n,i);if(!V)continue;const ce=V.ox+V.dirx*B.u,me=V.oz+V.dirz*B.u,te=V.ox+V.dirx*(B.u+B.w),C=V.oz+V.dirz*(B.u+B.w);if(dl(j,U,ce,me,te,C)<=.2)return{kind:"opening",uid:B.uid}}for(let $=n.length-1;$>=0;$--){const B=n[$];for(const V of d0){const[ce,me,te,C]=ju(B,V);if(dl(j,U,ce,me,te,C)<=.18)return{kind:"roomwall",uid:B.uid,side:V}}}for(let $=n.length-1;$>=0;$--){const B=n[$];if(j>=B.x&&j<=B.x+B.w&&U>=B.z&&U<=B.z+B.d)return{kind:"room",uid:B.uid}}for(let $=s.length-1;$>=0;$--){const B=s[$];if(B.closed&&B.pts.length>=3&&nM(j,U,B.pts))return{kind:"sketch",uid:B.uid}}return{kind:"empty"}}function He(O){const ee=[],j=[];for(const U of n)U.uid!==O&&(ee.push(U.x,U.x+U.w),j.push(U.z,U.z+U.d));return{xs:ee,zs:j}}function pe(O,ee,j=.4){let U=null,$=j;for(const B of ee){const V=Math.abs(O-B);V<$&&($=V,U=B)}return U}function D(O,ee,j=.45){let U=null,$=j;for(const B of n){const V=[[B.x,B.z,B.x+B.w,B.z],[B.x,B.z+B.d,B.x+B.w,B.z+B.d],[B.x,B.z,B.x,B.z+B.d],[B.x+B.w,B.z,B.x+B.w,B.z+B.d]];for(const[ce,me,te,C]of V){const ue=te-ce,X=C-me,Y=ue*ue+X*X||1;let ie=((O-ce)*ue+(ee-me)*X)/Y;ie=Math.max(0,Math.min(1,ie));const fe=ce+ie*ue,Oe=me+ie*X,Ke=Math.hypot(O-fe,ee-Oe);Ke<$&&($=Ke,U={x:fe,z:Oe})}}return U}const Ae=(O,ee)=>{const j=pe(O,He(ee).xs);return j??dn(O,d)},Te=(O,ee)=>{const j=pe(O,He(ee).zs);return j??dn(O,d)};function Ee(){const O=[];for(const ee of n)O.push({x:ee.x,z:ee.z},{x:ee.x+ee.w,z:ee.z},{x:ee.x,z:ee.z+ee.d},{x:ee.x+ee.w,z:ee.z+ee.d});for(const ee of i)O.push({x:ee.x1,z:ee.z1},{x:ee.x2,z:ee.z2});return O}function _e(O,ee,j=.45){let U=null,$=j;for(const B of Ee()){const V=Math.hypot(O-B.x,ee-B.z);V<$&&($=V,U=B)}return U}function Fe(O,ee,j,U){const $=_e(j,U);if($)return{x:$.x,z:$.z};const B=D(j,U);if(B)return B;let V=j,ce=U;return Math.abs(V-O)>=Math.abs(ce-ee)?ce=ee:V=O,{x:Ae(V),z:Te(ce)}}const Ie=O=>{const[ee,j]=Ce(O);if(G.current.set(O.pointerId,{x:ee,y:j}),h.current.setPointerCapture(O.pointerId),G.current.size===2){const V=[...G.current.values()],ce=(V[0].x+V[1].x)/2,me=(V[0].y+V[1].y)/2,te=Math.hypot(V[0].x-V[1].x,V[0].y-V[1].y),C=w.current;_.current={startDist:te,startScale:C.scale,wmx:(ce-C.panX)/C.scale,wmy:(me-C.panY)/C.scale},E(null);return}if(G.current.size>2)return;const[U,$]=ge(ee,j);if(c==="room"){const V=Ae(U),ce=Te($);E({kind:"drawRoom",x0:V,z0:ce,cur:{x:V,z:ce,w:0,d:0}});return}if(c==="wall"){const V=_e(U,$),ce=V?null:D(U,$),me=V?V.x:ce?ce.x:Ae(U),te=V?V.z:ce?ce.z:Te($);E({kind:"drawWall",x1:me,z1:te,cur:{x1:me,z1:te,x2:me,z2:te}});return}if(c==="sketch"){E({kind:"sketch",sx:ee,sy:j,panX:w.current.panX,panY:w.current.panY,moved:!1});return}const B=Ue(ee,j);switch(B.kind){case"item-handle":E({kind:"resizeItem",uid:Q.uid,cxw:Q.x,czw:Q.z,rot:Q.rot||0,c:Q.dim||Ai(Q.type)});break;case"room-handle":E({kind:"resizeRoom",uid:re.uid,handle:B.handle,x0:re.x,z0:re.z,w0:re.w,d0:re.d});break;case"wall-end":E({kind:"wallEnd",uid:le.uid,end:B.end});break;case"item":{const V=r.find(ce=>ce.uid===B.uid);e({type:"select",sel:{type:"item",uid:B.uid}}),E({kind:"moveItem",uid:B.uid,ox:U-V.x,oz:$-V.z});break}case"wall":{const V=i.find(ce=>ce.uid===B.uid);e({type:"select",sel:{type:"wall",uid:B.uid}}),E({kind:"moveWall",uid:B.uid,ox:U,oz:$,x1:V.x1,z1:V.z1,x2:V.x2,z2:V.z2});break}case"sketch":{const V=s.find(ce=>ce.uid===B.uid);e({type:"select",sel:{type:"sketch",uid:B.uid}}),E({kind:"moveSketch",uid:B.uid,ox:U,oz:$,pts:V.pts});break}case"opening":e({type:"select",sel:{type:"opening",uid:B.uid}}),E(null);break;case"roomwall":e({type:"select",sel:{type:"roomwall",uid:B.uid,side:B.side}}),E(null);break;case"room":{const V=n.find(ce=>ce.uid===B.uid);e({type:"select",sel:{type:"room",uid:B.uid}}),E({kind:"moveRoom",uid:B.uid,ox:U-V.x,oz:$-V.z});break}default:E({kind:"pan",sx:ee,sy:j,panX:w.current.panX,panY:w.current.panY,moved:!1})}},N=O=>{const[ee,j]=Ce(O);if(G.current.has(O.pointerId)&&G.current.set(O.pointerId,{x:ee,y:j}),_.current&&G.current.size>=2){const V=[...G.current.values()],ce=(V[0].x+V[1].x)/2,me=(V[0].y+V[1].y)/2,te=Math.hypot(V[0].x-V[1].x,V[0].y-V[1].y),C=_.current,ue=Qr(C.startScale*(te/C.startDist),12,220);L({scale:ue,panX:ce-C.wmx*ue,panY:me-C.wmy*ue,init:!0});return}if(c==="sketch"&&G.current.size<=1){const[V,ce]=ge(ee,j);M({x:Ae(V),z:Te(ce)})}const U=b.current;if(!U)return;const[$,B]=ge(ee,j);if(U.kind==="pan")!U.moved&&Math.hypot(ee-U.sx,j-U.sy)>4&&(U.moved=!0),L(V=>({...V,panX:U.panX+(ee-U.sx),panY:U.panY+(j-U.sy)}));else if(U.kind==="sketch")!U.moved&&Math.hypot(ee-U.sx,j-U.sy)>7&&(U.moved=!0),U.moved&&L(V=>({...V,panX:U.panX+(ee-U.sx),panY:U.panY+(j-U.sy)}));else if(U.kind==="drawRoom"){const V=Ae($),ce=Te(B);E(me=>({...me,cur:{x:Math.min(me.x0,V),z:Math.min(me.z0,ce),w:Math.abs(V-me.x0),d:Math.abs(ce-me.z0)}}))}else if(U.kind==="drawWall"){const V=Fe(U.x1,U.z1,$,B);E(ce=>({...ce,cur:{x1:ce.x1,z1:ce.z1,x2:V.x,z2:V.z}}))}else if(U.kind==="moveItem")e({type:"update",sel:{type:"item",uid:U.uid},patch:{x:dn($-U.ox,u0),z:dn(B-U.oz,u0)},mergeKey:`mv:${U.uid}`});else if(U.kind==="resizeItem"){const V=$-U.cxw,ce=B-U.czw,me=U.rot*Math.PI/180,te=V*Math.cos(me)+ce*Math.sin(me),C=-V*Math.sin(me)+ce*Math.cos(me),ue=Qr(2*Math.max(.1,Math.abs(te))/U.c.w,.3,3),X=Qr(2*Math.max(.1,Math.abs(C))/U.c.d,.3,3),Y=Qr(Math.sqrt(ue*X),.3,3);e({type:"update",sel:{type:"item",uid:U.uid},patch:{scale:{x:ue,y:Y,z:X}},mergeKey:`sz:${U.uid}`})}else if(U.kind==="moveRoom"){const V=n.find(te=>te.uid===U.uid);let ce=$-U.ox,me=B-U.oz;if(V){const{xs:te,zs:C}=He(U.uid),ue=pe(ce,te),X=pe(ce+V.w,te);ue!=null&&(X==null||Math.abs(ce-ue)<=Math.abs(ce+V.w-X))?ce=ue:X!=null?ce=X-V.w:ce=dn(ce,d);const Y=pe(me,C),ie=pe(me+V.d,C);Y!=null&&(ie==null||Math.abs(me-Y)<=Math.abs(me+V.d-ie))?me=Y:ie!=null?me=ie-V.d:me=dn(me,d)}e({type:"update",sel:{type:"room",uid:U.uid},patch:{x:ce,z:me},mergeKey:`mv:${U.uid}`})}else if(U.kind==="resizeRoom"){let V=U.x0,ce=U.z0,me=U.x0+U.w0,te=U.z0+U.d0;const{xs:C,zs:ue}=He(U.uid),X=ie=>{const fe=pe(ie,C);return fe??dn(ie,d)},Y=ie=>{const fe=pe(ie,ue);return fe??dn(ie,d)};U.handle.includes("e")&&(me=Math.max(V+.5,X($))),U.handle.includes("w")&&(V=Math.min(me-.5,X($))),U.handle.includes("s")&&(te=Math.max(ce+.5,Y(B))),U.handle.includes("n")&&(ce=Math.min(te-.5,Y(B))),e({type:"update",sel:{type:"room",uid:U.uid},patch:{x:V,z:ce,w:me-V,d:te-ce},mergeKey:`rs:${U.uid}`})}else if(U.kind==="moveWall"){const V=dn($-U.ox,d),ce=dn(B-U.oz,d);e({type:"update",sel:{type:"wall",uid:U.uid},patch:{x1:U.x1+V,z1:U.z1+ce,x2:U.x2+V,z2:U.z2+ce},mergeKey:`mv:${U.uid}`})}else if(U.kind==="wallEnd"){const V=U.end==="1"?{x1:dn($,d),z1:dn(B,d)}:{x2:dn($,d),z2:dn(B,d)};e({type:"update",sel:{type:"wall",uid:U.uid},patch:V,mergeKey:`we:${U.uid}`})}else if(U.kind==="moveSketch"){const V=dn($-U.ox,d),ce=dn(B-U.oz,d);e({type:"update",sel:{type:"sketch",uid:U.uid},patch:{pts:U.pts.map(me=>({x:me.x+V,z:me.z+ce}))},mergeKey:`mv:${U.uid}`})}},T=O=>{const[ee,j]=Ce(O);G.current.delete(O.pointerId),G.current.size<2&&(_.current=null);const U=b.current;if(U)if(U.kind==="sketch"){if(!U.moved){const[$,B]=ge(ee,j),V={x:Ae($),z:Te(B)};let ce=!1;if(f.length>=3){const[me,te]=J(f[0].x,f[0].z);Math.hypot(ee-me,j-te)<$S&&(ce=!0)}ce?(e({type:"addSketch",pts:f,closed:!0}),p([]),M(null),uo(12)):(p(me=>[...me,V]),uo(6))}}else U.kind==="drawRoom"?U.cur.w>.3&&U.cur.d>.3&&e({type:"addRoom",x:U.cur.x,z:U.cur.z,w:U.cur.w,d:U.cur.d,height:u}):U.kind==="drawWall"&&Math.hypot(U.cur.x2-U.cur.x1,U.cur.z2-U.cur.z1)>.2?e({type:"addWall",...U.cur,height:u}):U.kind==="pan"&&!U.moved&&e({type:"select",sel:null});G.current.size===0&&E(null);try{h.current.releasePointerCapture(O.pointerId)}catch{}},oe=O=>{(O&&f.length>=3||!O&&f.length>=2)&&(e({type:"addSketch",pts:f,closed:O}),uo(12)),p([]),M(null)};function xe(O,ee,j,U){const $=[],B=ee?O.length:O.length-1;for(let V=0;V<B;V++){const ce=O[V],me=O[(V+1)%O.length],te=Math.hypot(me.x-ce.x,me.z-ce.z);if(te<.001)continue;const[C,ue]=J(ce.x,ce.z),[X,Y]=J(me.x,me.z);let ie=(C+X)/2,fe=(ue+Y)/2;const Oe=-(Y-ue),Ke=X-C,at=Math.hypot(Oe,Ke)||1;ie+=Oe/at*11,fe+=Ke/at*11,$.push(g.jsx("text",{x:ie,y:fe+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:j,stroke:"#fff",strokeWidth:3.2,paintOrder:"stroke",strokeLinejoin:"round",fontFamily:"-apple-system, system-ui, sans-serif",children:rt(te,l)},`${U}-l${V}`))}return $}const Se=O=>{const[ee,j]=Ce(O),U=w.current,$=Qr(U.scale*(O.deltaY<0?1.1:.9),12,220),B=(ee-U.panX)/U.scale,V=(j-U.panY)/U.scale;L({scale:$,panX:ee-B*$,panY:j-V*$,init:!0})},ve=[],ke=[];{const O=l==="ft"?.3048:1,ee=I*O;let j=1;ee<6&&(j=5),ee*j<6&&(j=25);const U=j*5,[$]=ge(0,0),[B]=ge(R,0),[,V]=ge(0,0),[,ce]=ge(0,z),me=$/O,te=B/O,C=V/O,ue=ce/O,X=l==="ft"?"′":"m";if((te-me)/j<500){for(let Y=Math.ceil(me/j)*j;Y<=te;Y+=j){const ie=Math.round(Y),[fe]=J(ie*O,0),Oe=ie===0,Ke=ie%U===0;ve.push(g.jsx("line",{x1:fe,y1:0,x2:fe,y2:z,stroke:"#000",strokeOpacity:Oe?.22:Ke?.11:.045,strokeWidth:1},`v${ie}`)),Ke&&!Oe&&ke.push(g.jsxs("text",{x:fe+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[ie,X]},`vl${ie}`))}for(let Y=Math.ceil(C/j)*j;Y<=ue;Y+=j){const ie=Math.round(Y),[,fe]=J(0,ie*O),Oe=ie===0,Ke=ie%U===0;ve.push(g.jsx("line",{x1:0,y1:fe,x2:R,y2:fe,stroke:"#000",strokeOpacity:Oe?.22:Ke?.11:.045,strokeWidth:1},`h${ie}`)),Ke&&!Oe&&ke.push(g.jsxs("text",{x:3,y:fe-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[ie,X]},`hl${ie}`))}}}const Le=n.length===0&&i.length===0&&r.length===0&&s.length===0&&f.length===0;return g.jsxs("div",{className:"editor2d",ref:v,children:[g.jsxs("svg",{ref:h,onPointerDown:Ie,onPointerMove:N,onPointerUp:T,onPointerCancel:T,onWheel:Se,style:{touchAction:"none",cursor:c==="select"?"default":"crosshair"},children:[g.jsx("defs",{children:g.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:g.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),g.jsx("rect",{x:0,y:0,width:R,height:z,fill:"transparent"}),g.jsx("g",{pointerEvents:"none",children:ve}),g.jsx("g",{pointerEvents:"none",children:ke}),n.map(O=>{const[ee,j]=J(O.x,O.z),U=O.w*I,$=O.d*I,B=tM(O),V=B.mat?Math.max(10,B.repeat*I):0,ce=`fp-${O.uid}`;return g.jsxs("g",{pointerEvents:"none",children:[B.mat&&g.jsx("defs",{children:g.jsxs("pattern",{id:ce,patternUnits:"userSpaceOnUse",width:V,height:V,patternTransform:`translate(${q} ${K})`,children:[g.jsx("rect",{width:V,height:V,fill:B.color}),g.jsx("image",{href:fa(B.mat),width:V,height:V,preserveAspectRatio:"xMidYMid slice"})]})}),g.jsx("rect",{x:ee,y:j,width:U,height:$,fill:B.mat?`url(#${ce})`:B.color}),O.name&&U>46&&$>26&&g.jsx("text",{x:ee+U/2,y:j+$/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:12,fontWeight:700,fill:"#33373d",stroke:"#fff",strokeWidth:3,paintOrder:"stroke",strokeLinejoin:"round",letterSpacing:"0.3",fontFamily:"-apple-system, system-ui, sans-serif",children:O.name})]},O.uid)}),n.map(O=>g.jsx("g",{pointerEvents:"none",children:d0.map(ee=>{const[j,U,$,B]=ju(O,ee),[V,ce]=J(j,U),[me,te]=J($,B),C=h0(O,ee),ue=(a==null?void 0:a.type)==="roomwall"&&a.uid===O.uid&&a.side===ee;return g.jsx("line",{x1:V,y1:ce,x2:me,y2:te,stroke:ue?At:C?c0:ZS,strokeWidth:ue?6:C?4:2,strokeLinecap:"round",strokeDasharray:C?void 0:"7 7"},ee)})},O.uid)),re&&(()=>{const[O,ee]=J(re.x,re.z),j=re.w*I;return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:O,y:ee,width:j,height:re.d*I,fill:"none",stroke:At,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),g.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[g.jsx("rect",{x:O+j/2-78,y:ee-25,width:156,height:19,rx:9.5,fill:At}),g.jsxs("text",{x:O+j/2,y:ee-11,textAnchor:"middle",children:[rt(re.w,l)," × ",rt(re.d,l)]})]}),Object.entries(we(re)).map(([U,[$,B]])=>g.jsx("circle",{cx:$,cy:B,r:7,fill:At,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},U))]})})(),i.map(O=>{const[ee,j]=J(O.x1,O.z1),[U,$]=J(O.x2,O.z2),B=(le==null?void 0:le.uid)===O.uid;return g.jsx("line",{x1:ee,y1:j,x2:U,y2:$,stroke:B?At:c0,strokeWidth:Math.max(5,O.thickness*I),strokeLinecap:"round",pointerEvents:"none"},O.uid)}),le&&(()=>{const[O,ee]=J(le.x1,le.z1),[j,U]=J(le.x2,le.z2);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("circle",{cx:O,cy:ee,r:7,fill:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"}),g.jsx("circle",{cx:j,cy:U,r:7,fill:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),o.map(O=>{const ee=Sr(O.wall,n,i);if(!ee)return null;const j=ee.ox+ee.dirx*O.u,U=ee.oz+ee.dirz*O.u,$=ee.ox+ee.dirx*(O.u+O.w),B=ee.oz+ee.dirz*(O.u+O.w),[V,ce]=J(j,U),[me,te]=J($,B),C=(a==null?void 0:a.type)==="opening"&&a.uid===O.uid;let ue=-(te-ce),X=me-V;const Y=Math.hypot(ue,X)||1;ue=ue/Y*6,X=X/Y*6;const ie=C?At:"#5f6a78",fe=[g.jsx("line",{x1:V,y1:ce,x2:me,y2:te,stroke:JS,strokeWidth:7,strokeLinecap:"butt"},"gap"),g.jsx("line",{x1:V-ue,y1:ce-X,x2:V+ue,y2:ce+X,stroke:ie,strokeWidth:2.5,strokeLinecap:"round"},"j1"),g.jsx("line",{x1:me-ue,y1:te-X,x2:me+ue,y2:te+X,stroke:ie,strokeWidth:2.5,strokeLinecap:"round"},"j2")];if(O.kind==="doorway"){const Oe=j+ee.nx*O.w,Ke=U+ee.nz*O.w,[at,Ze]=J(Oe,Ke),qe=O.w*I;fe.push(g.jsx("line",{x1:V,y1:ce,x2:at,y2:Ze,stroke:ie,strokeWidth:2.5,strokeLinecap:"round"},"leaf")),fe.push(g.jsx("path",{d:`M ${me} ${te} A ${qe} ${qe} 0 0 1 ${at} ${Ze}`,fill:"none",stroke:ie,strokeWidth:1.6,strokeDasharray:"4 4"},"arc"))}else O.kind==="window"&&fe.push(g.jsx("line",{x1:V,y1:ce,x2:me,y2:te,stroke:C?At:"#5b86a8",strokeWidth:2.5,strokeLinecap:"round"},"glass"));return g.jsx("g",{pointerEvents:"none",children:fe},O.uid)}),s.map(O=>{const ee=(ae==null?void 0:ae.uid)===O.uid,j=O.pts.map($=>J($.x,$.z).join(",")).join(" "),U=ee?At:QS;return g.jsxs("g",{pointerEvents:"none",children:[O.closed?g.jsx("polygon",{points:j,fill:U,fillOpacity:.07,stroke:U,strokeWidth:ee?3:2.5,strokeLinejoin:"round"}):g.jsx("polyline",{points:j,fill:"none",stroke:U,strokeWidth:ee?3:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),xe(O.pts,O.closed,ee?"#7a5a16":"#15545f",O.uid),ee&&O.pts.map(($,B)=>{const[V,ce]=J($.x,$.z);return g.jsx("circle",{cx:V,cy:ce,r:5,fill:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"},B)})]},O.uid)}),c==="sketch"&&f.length>0&&(()=>{const O=y?[...f,y]:f,ee=O.map(B=>J(B.x,B.z).join(",")).join(" "),[j,U]=J(f[0].x,f[0].z),$=f.length>=3;return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("polyline",{points:ee,fill:"none",stroke:At,strokeWidth:2.5,strokeDasharray:"7 5",strokeLinejoin:"round",strokeLinecap:"round"}),xe(O,!1,"#7a5a16","draft"),f.map((B,V)=>{const[ce,me]=J(B.x,B.z);return g.jsx("circle",{cx:ce,cy:me,r:V===0?6:4.5,fill:V===0?At:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"},V)}),$&&g.jsx("circle",{cx:j,cy:U,r:11,fill:"none",stroke:At,strokeWidth:2,strokeDasharray:"3 3"})]})})(),r.map(O=>{const ee=Ai(O.type);if(!ee)return null;const[j,U]=J(O.x,O.z),$=_r(ee,O),B=$.w*I,V=$.d*I,ce=(Q==null?void 0:Q.uid)===O.uid;return g.jsxs("g",{transform:`translate(${j} ${U}) rotate(${O.rot||0})`,pointerEvents:"none",children:[g.jsx("g",{filter:"url(#softshadow)",opacity:ee.shape==="rug"||ee.shape==="round-rug"?.96:1,children:g.jsx(Yx,{item:{...ee,color:O.color||ee.color},wpx:B,dpx:V})}),ce&&g.jsx("rect",{x:-B/2-5,y:-V/2-5,width:B+10,height:V+10,rx:7,fill:"none",stroke:At,strokeWidth:2,strokeDasharray:"6 5"})]},O.uid)}),(A==null?void 0:A.kind)==="drawRoom"&&(()=>{const[O,ee]=J(A.cur.x,A.cur.z);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("rect",{x:O,y:ee,width:A.cur.w*I,height:A.cur.d*I,fill:At,fillOpacity:.12,stroke:At,strokeWidth:3,strokeDasharray:"6 5"}),g.jsxs("text",{x:O+A.cur.w*I/2,y:ee-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[rt(A.cur.w,l)," × ",rt(A.cur.d,l)]})]})})(),(A==null?void 0:A.kind)==="drawWall"&&(()=>{const[O,ee]=J(A.cur.x1,A.cur.z1),[j,U]=J(A.cur.x2,A.cur.z2),$=Math.hypot(A.cur.x2-A.cur.x1,A.cur.z2-A.cur.z1);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("line",{x1:O,y1:ee,x2:j,y2:U,stroke:At,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),g.jsx("text",{x:(O+j)/2,y:(ee+U)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:rt($,l)})]})})(),Q&&(()=>{const O=Me(Q),ee=Ai(Q.type),j=_r(ee,Q),[U,$]=J(Q.x,Q.z),B=Math.hypot(j.w*I,j.d*I)/2;return g.jsxs("g",{pointerEvents:"none",children:[O.map(([V,ce],me)=>g.jsx("circle",{cx:V,cy:ce,r:7,fill:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"},me)),g.jsx("rect",{x:U-78,y:$-B-30,width:156,height:20,rx:10,fill:At}),g.jsxs("text",{x:U,y:$-B-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[rt(j.w,l)," × ",rt(j.d,l)]})]})})(),(a==null?void 0:a.type)==="roomwall"&&(()=>{const O=n.find(ue=>ue.uid===a.uid);if(!O)return null;const[ee,j,U,$]=ju(O,a.side),[B,V]=J(ee,j),[ce,me]=J(U,$),te=Math.hypot(U-ee,$-j),C=h0(O,a.side);return g.jsxs("g",{pointerEvents:"none",children:[g.jsx("circle",{cx:B,cy:V,r:6,fill:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"}),g.jsx("circle",{cx:ce,cy:me,r:6,fill:"#fff",stroke:At,strokeWidth:2.5,filter:"url(#softshadow)"}),g.jsx("rect",{x:(B+ce)/2-60,y:(V+me)/2-11,width:120,height:20,rx:10,fill:At}),g.jsx("text",{x:(B+ce)/2,y:(V+me)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:C?rt(te,l):"opening"})]})})()]}),g.jsx("button",{className:"recenter",onClick:H,"aria-label":"Fit to view",children:g.jsx(qx,{size:20})}),c==="sketch"&&f.length>0&&g.jsxs("div",{className:"sketch-bar",children:[g.jsx("button",{onClick:()=>p(O=>O.slice(0,-1)),title:"Undo last point",children:g.jsx(Kx,{size:17})}),g.jsxs("button",{onClick:()=>oe(!1),disabled:f.length<2,title:"Finish open line",children:[g.jsx(l0,{size:18})," Finish"]}),g.jsxs("button",{className:"accent",onClick:()=>oe(!0),disabled:f.length<3,title:"Close shape",children:[g.jsx(l0,{size:18})," Close shape"]}),g.jsx("button",{onClick:()=>{p([]),M(null)},title:"Cancel",children:g.jsx(BS,{size:17})})]}),Le&&g.jsxs("div",{className:"empty",children:[g.jsx("b",{children:"Start your floor plan"}),g.jsxs("span",{children:["Pick ",g.jsx("strong",{children:"Room"})," and drag out a space with live measurements, then add ",g.jsx("strong",{children:"Walls"})," — or use the button below to drop a starter room."]}),g.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:Ae(-1.8),z:Te(-1.5),w:3.6,d:3,height:u}),children:"+ Add a room"})]}),g.jsx("div",{className:"hint",children:c==="room"?"Drag to draw a room":c==="wall"?"Drag to draw a wall":c==="sketch"?"Tap to drop points — each edge is measured · tap the first point to close · drag to pan":Q?"Drag to move · drag white corners to resize":re?"Drag inside to move · corners to resize · tap a wall to edit it":le?"Drag the wall or its endpoints":ae?"Drag to move this sketch · edit dimensions in the panel":(a==null?void 0:a.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="169",ho={ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rM=0,f0=1,sM=2,Jx=1,Qx=2,ji=3,Or=0,Sn=1,gn=2,nn=0,fo=1,p0=2,m0=3,g0=4,$x=5,vi=100,oM=101,aM=102,lM=103,cM=104,na=200,uM=201,dM=202,hM=203,Ah=204,bh=205,Ch=206,fM=207,Rh=208,pM=209,mM=210,gM=211,vM=212,xM=213,yM=214,Ph=0,Lh=1,Dh=2,wo=3,Nh=4,Ih=5,Uh=6,zh=7,ey=0,_M=1,SM=2,Ir=0,ty=1,ny=2,iy=3,xp=4,MM=5,ry=6,sy=7,oy=300,Eo=301,To=302,zc=303,Oh=304,su=306,Rn=1e3,Zi=1001,Fh=1002,Jt=1003,wM=1004,hl=1005,rn=1006,Wu=1007,Tr=1008,Ui=1009,ay=1010,ly=1011,Ia=1012,yp=1013,ds=1014,ti=1015,Ln=1016,_p=1017,Sp=1018,hs=1020,cy=35902,uy=1021,dy=1022,ni=1023,hy=1024,fy=1025,po=1026,fs=1027,py=1028,Mp=1029,my=1030,wp=1031,Ep=1033,ic=33776,rc=33777,sc=33778,oc=33779,kh=35840,Bh=35841,Hh=35842,Vh=35843,Gh=36196,jh=37492,Wh=37496,Xh=37808,Yh=37809,qh=37810,Kh=37811,Zh=37812,Jh=37813,Qh=37814,$h=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,of=37821,ac=36492,af=36494,lf=36495,gy=36283,cf=36284,uf=36285,df=36286,EM=3200,TM=3201,Tp=0,AM=1,Mr="",pn="srgb",rr="srgb-linear",Ap="display-p3",ou="display-p3-linear",Oc="linear",St="srgb",Fc="rec709",kc="p3",Es=7680,v0=519,bM=512,CM=513,RM=514,vy=515,PM=516,LM=517,DM=518,NM=519,x0=35044,y0="300 es",Ji=2e3,Bc=2001;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=Math.PI/180,hf=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function IM(t,e){return(t%e+e)%e}function Xu(t,e,n){return(1-n)*t+n*e}function Vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function An(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const UM={DEG2RAD:lc};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],y=i[8],M=r[0],v=r[3],h=r[6],m=r[1],x=r[4],S=r[7],L=r[2],A=r[5],E=r[8];return s[0]=o*M+a*m+l*L,s[3]=o*v+a*x+l*A,s[6]=o*h+a*S+l*E,s[1]=c*M+u*m+d*L,s[4]=c*v+u*x+d*A,s[7]=c*h+u*S+d*E,s[2]=f*M+p*m+y*L,s[5]=f*v+p*x+y*A,s[8]=f*h+p*S+y*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,y=n*d+i*f+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yu.makeScale(e,n)),this}rotate(e){return this.premultiply(Yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yu=new it;function xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zM(){const t=Ua("canvas");return t.style.display="block",t}const _0={};function cc(t){t in _0||(_0[t]=!0,console.warn(t))}function OM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function FM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const S0=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),M0=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Go={[rr]:{transfer:Oc,primaries:Fc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[pn]:{transfer:St,primaries:Fc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ou]:{transfer:Oc,primaries:kc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(M0),fromReference:t=>t.applyMatrix3(S0)},[Ap]:{transfer:St,primaries:kc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(M0),fromReference:t=>t.applyMatrix3(S0).convertLinearToSRGB()}},BM=new Set([rr,ou]),dt={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!BM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Go[e].toReference,r=Go[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Go[t].primaries},getTransfer:function(t){return t===Mr?Oc:Go[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Go[e].luminanceCoefficients)}};function mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ts;class HM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Ua("canvas")),Ts.width=e.width,Ts.height=e.height;const i=Ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ua("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mo(n[i]/255)*255):n[i]=mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VM=0;class yy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ku(r[o].image)):s.push(Ku(r[o]))}else s=Ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;class jt extends ys{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=Zi,r=Zi,s=rn,o=Tr,a=ni,l=Ui,c=jt.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Lo(),this.name="",this.source=new yy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=oy;jt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],y=l[9],M=l[2],v=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(y-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(y+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,L=(h+1)/2,A=(u+f)/4,E=(d+M)/4,b=(y+v)/4;return x>S&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=E/s,r=b/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-y)*(v-y)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(v-y)/m,this.y=(d-M)/m,this.z=(f-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jM extends ys{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends jM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _y extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],y=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=y,e[n+3]=M;return}if(d!==M||l!==f||c!==p||u!==y){let v=1-a;const h=l*f+c*p+u*y+d*M,m=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,h*m);v=Math.sin(v*A)/L,a=Math.sin(a*A)/L}const S=a*m;if(l=l*v+f*S,c=c*v+p*S,u=u*v+y*S,d=d*v+M*S,v===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+u*d+l*p-c*f,e[n+1]=l*y+u*f+c*d-a*p,e[n+2]=c*y+u*p+a*f-l*d,e[n+3]=u*y-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*y,this._y=c*p*d-f*u*y,this._z=c*u*y+f*p*d,this._w=c*u*d-f*p*y;break;case"YXZ":this._x=f*u*d+c*p*y,this._y=c*p*d-f*u*y,this._z=c*u*y-f*p*d,this._w=c*u*d+f*p*y;break;case"ZXY":this._x=f*u*d-c*p*y,this._y=c*p*d+f*u*y,this._z=c*u*y+f*p*d,this._w=c*u*d-f*p*y;break;case"ZYX":this._x=f*u*d-c*p*y,this._y=c*p*d+f*u*y,this._z=c*u*y-f*p*d,this._w=c*u*d+f*p*y;break;case"YZX":this._x=f*u*d+c*p*y,this._y=c*p*d+f*u*y,this._z=c*u*y-f*p*d,this._w=c*u*d-f*p*y;break;case"XZY":this._x=f*u*d-c*p*y,this._y=c*p*d-f*u*y,this._z=c*u*y+f*p*d,this._w=c*u*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(w0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(w0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new k,w0=new ps;class Wa{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),pl.subVectors(this.max,jo),As.subVectors(e.a,jo),bs.subVectors(e.b,jo),Cs.subVectors(e.c,jo),lr.subVectors(bs,As),cr.subVectors(Cs,bs),jr.subVectors(As,Cs);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-jr.z,jr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,jr.z,0,-jr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-jr.y,jr.x,0];return!Ju(n,As,bs,Cs,pl)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,As,bs,Cs,pl))?!1:(ml.crossVectors(lr,cr),n=[ml.x,ml.y,ml.z],Ju(n,As,bs,Cs,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,fl=new Wa,As=new k,bs=new k,Cs=new k,lr=new k,cr=new k,jr=new k,jo=new k,pl=new k,ml=new k,Wr=new k;function Ju(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wr.fromArray(t,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=n.dot(Wr),u=i.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XM=new Wa,Wo=new k,Qu=new k;class bp{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Qu)),this.expandByPoint(Wo.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new k,$u=new k,gl=new k,ur=new k,ed=new k,vl=new k,td=new k;class Cp{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$u.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),ur.copy(this.origin).sub($u);const s=e.distanceTo(n)*.5,o=-this.direction.dot(gl),a=ur.dot(this.direction),l=-ur.dot(gl),c=ur.lengthSq(),u=Math.abs(1-o*o);let d,f,p,y;if(u>0)if(d=o*l-a,f=o*a-l,y=s*u,d>=0)if(f>=-y)if(f<=y){const M=1/u;d*=M,f*=M,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($u).addScaledVector(gl,f),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){ed.subVectors(n,e),vl.subVectors(i,e),td.crossVectors(ed,vl);let o=this.direction.dot(td),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(vl.crossVectors(ur,vl));if(l<0)return null;const c=a*this.direction.dot(ed.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(td);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,y,M,v){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,y,M,v)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,y,M,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=y,h[11]=M,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rs.setFromMatrixColumn(e,0).length(),s=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,y=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=f-M*c,n[9]=-a*l,n[2]=M-f*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,y=c*u,M=c*d;n[0]=f+M*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-y,n[6]=M+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,y=c*u,M=c*d;n[0]=f-M*a,n[4]=-o*d,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*u,n[9]=M-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,y=a*u,M=a*d;n[0]=l*u,n[4]=y*c-p,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,y=a*l,M=a*c;n[0]=l*u,n[4]=M-f*d,n[8]=y*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+y,n[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,p=o*c,y=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+M,n[5]=o*u,n[9]=p*d-y,n[2]=y*d-p,n[6]=a*u,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YM,e,qM)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),dr.crossVectors(i,Fn),dr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),dr.crossVectors(i,Fn)),dr.normalize(),xl.crossVectors(Fn,dr),r[0]=dr.x,r[4]=xl.x,r[8]=Fn.x,r[1]=dr.y,r[5]=xl.y,r[9]=Fn.y,r[2]=dr.z,r[6]=xl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],y=i[2],M=i[6],v=i[10],h=i[14],m=i[3],x=i[7],S=i[11],L=i[15],A=r[0],E=r[4],b=r[8],G=r[12],_=r[1],w=r[5],W=r[9],R=r[13],z=r[2],H=r[6],F=r[10],Z=r[14],I=r[3],q=r[7],K=r[11],J=r[15];return s[0]=o*A+a*_+l*z+c*I,s[4]=o*E+a*w+l*H+c*q,s[8]=o*b+a*W+l*F+c*K,s[12]=o*G+a*R+l*Z+c*J,s[1]=u*A+d*_+f*z+p*I,s[5]=u*E+d*w+f*H+p*q,s[9]=u*b+d*W+f*F+p*K,s[13]=u*G+d*R+f*Z+p*J,s[2]=y*A+M*_+v*z+h*I,s[6]=y*E+M*w+v*H+h*q,s[10]=y*b+M*W+v*F+h*K,s[14]=y*G+M*R+v*Z+h*J,s[3]=m*A+x*_+S*z+L*I,s[7]=m*E+x*w+S*H+L*q,s[11]=m*b+x*W+S*F+L*K,s[15]=m*G+x*R+S*Z+L*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],y=e[3],M=e[7],v=e[11],h=e[15];return y*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+M*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+v*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],y=e[12],M=e[13],v=e[14],h=e[15],m=d*v*c-M*f*c+M*l*p-a*v*p-d*l*h+a*f*h,x=y*f*c-u*v*c-y*l*p+o*v*p+u*l*h-o*f*h,S=u*M*c-y*d*c+y*a*p-o*M*p-u*a*h+o*d*h,L=y*d*l-u*M*l-y*a*f+o*M*f+u*a*v-o*d*v,A=n*m+i*x+r*S+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=m*E,e[1]=(M*f*s-d*v*s-M*r*p+i*v*p+d*r*h-i*f*h)*E,e[2]=(a*v*s-M*l*s+M*r*c-i*v*c-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(u*v*s-y*f*s+y*r*p-n*v*p-u*r*h+n*f*h)*E,e[6]=(y*l*s-o*v*s-y*r*c+n*v*c+o*r*h-n*l*h)*E,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*E,e[8]=S*E,e[9]=(y*d*s-u*M*s-y*i*p+n*M*p+u*i*h-n*d*h)*E,e[10]=(o*M*s-y*a*s+y*i*c-n*M*c-o*i*h+n*a*h)*E,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*E,e[12]=L*E,e[13]=(u*M*r-y*d*r+y*i*f-n*M*f-u*i*v+n*d*v)*E,e[14]=(y*a*r-o*M*r-y*i*l+n*M*l+o*i*v-n*a*v)*E,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,y=s*d,M=o*u,v=o*d,h=a*d,m=l*c,x=l*u,S=l*d,L=i.x,A=i.y,E=i.z;return r[0]=(1-(M+h))*L,r[1]=(p+S)*L,r[2]=(y-x)*L,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(v+m)*A,r[7]=0,r[8]=(y+x)*E,r[9]=(v-m)*E,r[10]=(1-(f+M))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rs.set(r[0],r[1],r[2]).length();const o=Rs.set(r[4],r[5],r[6]).length(),a=Rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);const c=1/s,u=1/o,d=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,n.setFromRotationMatrix(di),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ji){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,y;if(a===Ji)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Bc)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ji){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let y,M;if(a===Ji)y=(o+s)*d,M=-2*d;else if(a===Bc)y=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rs=new k,di=new lt,YM=new k(0,0,0),qM=new k(1,1,1),dr=new k,xl=new k,Fn=new k,E0=new lt,T0=new ps;class wi{constructor(e=0,n=0,i=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return T0.setFromEuler(this),this.setFromQuaternion(T0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KM=0;const A0=new k,Ps=new ps,Bi=new lt,yl=new k,Xo=new k,ZM=new k,JM=new ps,b0=new k(1,0,0),C0=new k(0,1,0),R0=new k(0,0,1),P0={type:"added"},QM={type:"removed"},Ls={type:"childadded",child:null},nd={type:"childremoved",child:null};class an extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new k,n=new wi,i=new ps,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new it}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(R0,e)}translateOnAxis(e,n){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(R0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Xo,yl,this.up):Bi.lookAt(yl,Xo,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Ps.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P0),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QM),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P0),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,ZM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,JM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new k(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new k,Hi=new k,id=new k,Vi=new k,Ds=new k,Ns=new k,L0=new k,rd=new k,sd=new k,od=new k,ad=new xt,ld=new xt,cd=new xt;class xi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),hi.subVectors(e,n),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){hi.subVectors(r,n),Hi.subVectors(i,n),id.subVectors(e,n);const o=hi.dot(hi),a=hi.dot(Hi),l=hi.dot(id),c=Hi.dot(Hi),u=Hi.dot(id),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,y=(o*u-a*l)*f;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ad.setScalar(0),ld.setScalar(0),cd.setScalar(0),ad.fromBufferAttribute(e,n),ld.fromBufferAttribute(e,i),cd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ad,s.x),o.addScaledVector(ld,s.y),o.addScaledVector(cd,s.z),o}static isFrontFacing(e,n,i,r){return hi.subVectors(i,n),Hi.subVectors(e,n),hi.cross(Hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ns.subVectors(s,i),rd.subVectors(e,i);const l=Ds.dot(rd),c=Ns.dot(rd);if(l<=0&&c<=0)return n.copy(i);sd.subVectors(e,r);const u=Ds.dot(sd),d=Ns.dot(sd);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ds,o);od.subVectors(e,s);const p=Ds.dot(od),y=Ns.dot(od);if(y>=0&&p<=y)return n.copy(s);const M=p*c-l*y;if(M<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Ns,a);const v=u*y-p*d;if(v<=0&&d-u>=0&&p-y>=0)return L0.subVectors(s,r),a=(d-u)/(d-u+(p-y)),n.copy(r).addScaledVector(L0,a);const h=1/(v+M+f);return o=M*h,a=f*h,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function ud(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=IM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ud(o,s,e+1/3),this.g=ud(o,s,e),this.b=ud(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=Sy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=qu(e.r),this.g=qu(e.g),this.b=qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return dt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Zt(fn.r*255,0,255))*65536+Math.round(Zt(fn.g*255,0,255))*256+Math.round(Zt(fn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=pn){dt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(_l);const i=Xu(hr.h,_l.h,n),r=Xu(hr.s,_l.s,n),s=Xu(hr.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Qe;Qe.NAMES=Sy;let $M=0;class Do extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=fo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=bh,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ah&&(i.blendSrc=this.blendSrc),this.blendDst!==bh&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class za extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yi=ew();function ew(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function tw(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Zt(t,-65504,65504),Yi.floatView[0]=t;const e=Yi.uint32View[0],n=e>>23&511;return Yi.baseTable[n]+((e&8388607)>>Yi.shiftTable[n])}function nw(t){const e=t>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(t&1023)]+Yi.exponentTable[e],Yi.floatView[0]}const Sl={toHalfFloat:tw,fromHalfFloat:nw},Ot=new k,Ml=new be;class Ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=x0,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x0&&(e.usage=this.usage),e}}class My extends Ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wy extends Ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yt extends Ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iw=0;const Jn=new lt,dd=new an,Is=new k,kn=new Wa,Yo=new Wa,Yt=new k;class En extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?wy:My)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(kn.min,Yo.min),kn.expandByPoint(Yt),Yt.addVectors(kn.max,Yo.max),kn.expandByPoint(Yt)):(kn.expandByPoint(Yo.min),kn.expandByPoint(Yo.max))}kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Yt.add(Is)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const c=new k,u=new k,d=new k,f=new be,p=new be,y=new be,M=new k,v=new k;function h(b,G,_){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,G),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,G),y.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(f),y.sub(f);const w=1/(p.x*y.y-y.x*p.y);isFinite(w)&&(M.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(w),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(w),a[b].add(M),a[G].add(M),a[_].add(M),l[b].add(v),l[G].add(v),l[_].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let b=0,G=m.length;b<G;++b){const _=m[b],w=_.start,W=_.count;for(let R=w,z=w+W;R<z;R+=3)h(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const x=new k,S=new k,L=new k,A=new k;function E(b){L.fromBufferAttribute(r,b),A.copy(L);const G=a[b];x.copy(G),x.sub(L.multiplyScalar(L.dot(G))).normalize(),S.crossVectors(A,G);const w=S.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,w)}for(let b=0,G=m.length;b<G;++b){const _=m[b],w=_.start,W=_.count;for(let R=w,z=w+W;R<z;R+=3)E(e.getX(R+0)),E(e.getX(R+1)),E(e.getX(R+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const y=e.getX(f+0),M=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,y=0;for(let M=0,v=l.length;M<v;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let h=0;h<u;h++)f[y++]=c[p++]}return new Ni(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D0=new lt,Xr=new Cp,wl=new bp,N0=new k,El=new k,Tl=new k,Al=new k,hd=new k,bl=new k,I0=new k,Cl=new k;class et extends an{constructor(e=new En,n=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(hd.fromBufferAttribute(d,e),o?bl.addScaledVector(hd,u):bl.addScaledVector(hd.sub(n),u))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(wl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(wl,N0)===null||Xr.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(D0.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(D0),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,M=f.length;y<M;y++){const v=f[y],h=o[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=a.getX(S),E=a.getX(S+1),b=a.getX(S+2);r=Rl(this,h,e,i,c,u,d,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let v=y,h=M;v<h;v+=3){const m=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);r=Rl(this,o,e,i,c,u,d,m,x,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,M=f.length;y<M;y++){const v=f[y],h=o[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=S,E=S+1,b=S+2;r=Rl(this,h,e,i,c,u,d,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let v=y,h=M;v<h;v+=3){const m=v,x=v+1,S=v+2;r=Rl(this,o,e,i,c,u,d,m,x,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function rw(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Cl);return c<n.near||c>n.far?null:{distance:c,point:Cl.clone(),object:t}}function Rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,El),t.getVertexPosition(l,Tl),t.getVertexPosition(c,Al);const u=rw(t,e,n,i,El,Tl,Al,I0);if(u){const d=new k;xi.getBarycoord(I0,El,Tl,Al,d),r&&(u.uv=xi.getInterpolatedAttribute(r,a,l,c,d,new be)),s&&(u.uv1=xi.getInterpolatedAttribute(s,a,l,c,d,new be)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};xi.getNormal(El,Tl,Al,f.normal),u.face=f,u.barycoord=d}return u}class ri extends En{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function y(M,v,h,m,x,S,L,A,E,b,G){const _=S/E,w=L/b,W=S/2,R=L/2,z=A/2,H=E+1,F=b+1;let Z=0,I=0;const q=new k;for(let K=0;K<F;K++){const J=K*w-R;for(let ge=0;ge<H;ge++){const Ce=ge*_-W;q[M]=Ce*m,q[v]=J*x,q[h]=z,c.push(q.x,q.y,q.z),q[M]=0,q[v]=0,q[h]=A>0?1:-1,u.push(q.x,q.y,q.z),d.push(ge/E),d.push(1-K/b),Z+=1}}for(let K=0;K<b;K++)for(let J=0;J<E;J++){const ge=f+J+H*K,Ce=f+J+H*(K+1),Q=f+(J+1)+H*(K+1),re=f+(J+1)+H*K;l.push(ge,Ce,re),l.push(Ce,Q,re),I+=6}a.addGroup(p,I,G),p+=I,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=Ao(t[n]);for(const r in i)e[r]=i[r]}return e}function sw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ey(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const yi={clone:Ao,merge:xn};var ow=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ow,this.fragmentShader=aw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=sw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ty extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new k,U0=new be,z0=new be;class Vn extends Ty{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,U0,z0),n.subVectors(z0,U0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(lc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,zs=1;class lw extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(Us,zs,e,n);r.layers=this.layers,this.add(r);const s=new Vn(Us,zs,e,n);s.layers=this.layers,this.add(s);const o=new Vn(Us,zs,e,n);o.layers=this.layers,this.add(o);const a=new Vn(Us,zs,e,n);a.layers=this.layers,this.add(a);const l=new Vn(Us,zs,e,n);l.layers=this.layers,this.add(l);const c=new Vn(Us,zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ay extends jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Eo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cw extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ay(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ri(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:nn});s.uniforms.tEquirect.value=n;const o=new et(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=rn),new lw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fd=new k,uw=new k,dw=new it;class bi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fd.subVectors(i,n).cross(uw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dw.getNormalMatrix(e),r=this.coplanarPoint(fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new bp,Pl=new k;class Pp{constructor(e=new bi,n=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ji){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],M=r[10],v=r[11],h=r[12],m=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,v-p,S-h).normalize(),i[1].setComponents(l+s,f+c,v+p,S+h).normalize(),i[2].setComponents(l+o,f+u,v+y,S+m).normalize(),i[3].setComponents(l-o,f-u,v-y,S-m).normalize(),i[4].setComponents(l-a,f-d,v-M,S-x).normalize(),n===Ji)i[5].setComponents(l+a,f+d,v+M,S+x).normalize();else if(n===Bc)i[5].setComponents(a,d,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pl.x=r.normal.x>0?e.max.x:e.min.x,Pl.y=r.normal.y>0?e.max.y:e.min.y,Pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function by(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<d.length;p++){const y=d[f],M=d[p];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,y=d.length;p<y;p++){const M=d[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ii extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],y=[],M=[],v=[];for(let h=0;h<u;h++){const m=h*f-o;for(let x=0;x<c;x++){const S=x*d-s;y.push(S,-m,0),M.push(0,0,1),v.push(x/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const x=m+c*h,S=m+c*(h+1),L=m+1+c*(h+1),A=m+1+c*h;p.push(x,S,A),p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new yt(y,3)),this.setAttribute("normal",new yt(M,3)),this.setAttribute("uv",new yt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pw=`#ifdef USE_ALPHAHASH
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
#endif`,mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yw=`#ifdef USE_AOMAP
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
#endif`,_w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sw=`#ifdef USE_BATCHING
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
#endif`,Mw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ww=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Aw=`#ifdef USE_IRIDESCENCE
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
#endif`,bw=`#ifdef USE_BUMPMAP
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
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zw=`#define PI 3.141592653589793
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
#endif`,Fw=`vec3 transformedNormal = objectNormal;
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
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",jw=`
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
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yw=`#ifdef USE_ENVMAP
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
#endif`,qw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
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
#endif`,Zw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eE=`#ifdef USE_GRADIENTMAP
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
}`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
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
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
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
#endif`,dE=`struct PhysicalMaterial {
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
}`,hE=`
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
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
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JE=`float getShadowMask() {
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
}`,QE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,n2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
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
#endif`,a2=`#ifdef USE_TRANSMISSION
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
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
}`,y2=`#if DEPTH_PACKING == 3200
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
}`,_2=`#define DISTANCE
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
}`,S2=`#define DISTANCE
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
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`uniform float scale;
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
}`,T2=`uniform vec3 diffuse;
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
}`,A2=`#include <common>
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
}`,b2=`uniform vec3 diffuse;
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
}`,C2=`#define LAMBERT
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
}`,R2=`#define LAMBERT
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
}`,P2=`#define MATCAP
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
}`,L2=`#define MATCAP
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
}`,D2=`#define NORMAL
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
}`,N2=`#define NORMAL
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
}`,I2=`#define PHONG
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
}`,U2=`#define PHONG
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
}`,z2=`#define STANDARD
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
}`,F2=`#define TOON
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
}`,k2=`#define TOON
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
}`,B2=`uniform float size;
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
}`,H2=`uniform vec3 diffuse;
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
}`,V2=`#include <common>
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
}`,G2=`uniform vec3 color;
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
}`,j2=`uniform float rotation;
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
}`,nt={alphahash_fragment:fw,alphahash_pars_fragment:pw,alphamap_fragment:mw,alphamap_pars_fragment:gw,alphatest_fragment:vw,alphatest_pars_fragment:xw,aomap_fragment:yw,aomap_pars_fragment:_w,batching_pars_vertex:Sw,batching_vertex:Mw,begin_vertex:ww,beginnormal_vertex:Ew,bsdfs:Tw,iridescence_fragment:Aw,bumpmap_pars_fragment:bw,clipping_planes_fragment:Cw,clipping_planes_pars_fragment:Rw,clipping_planes_pars_vertex:Pw,clipping_planes_vertex:Lw,color_fragment:Dw,color_pars_fragment:Nw,color_pars_vertex:Iw,color_vertex:Uw,common:zw,cube_uv_reflection_fragment:Ow,defaultnormal_vertex:Fw,displacementmap_pars_vertex:kw,displacementmap_vertex:Bw,emissivemap_fragment:Hw,emissivemap_pars_fragment:Vw,colorspace_fragment:Gw,colorspace_pars_fragment:jw,envmap_fragment:Ww,envmap_common_pars_fragment:Xw,envmap_pars_fragment:Yw,envmap_pars_vertex:qw,envmap_physical_pars_fragment:sE,envmap_vertex:Kw,fog_vertex:Zw,fog_pars_vertex:Jw,fog_fragment:Qw,fog_pars_fragment:$w,gradientmap_pars_fragment:eE,lightmap_pars_fragment:tE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:rE,lights_toon_fragment:oE,lights_toon_pars_fragment:aE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:dE,lights_fragment_begin:hE,lights_fragment_maps:fE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:xE,map_fragment:yE,map_pars_fragment:_E,map_particle_fragment:SE,map_particle_pars_fragment:ME,metalnessmap_fragment:wE,metalnessmap_pars_fragment:EE,morphinstance_vertex:TE,morphcolor_vertex:AE,morphnormal_vertex:bE,morphtarget_pars_vertex:CE,morphtarget_vertex:RE,normal_fragment_begin:PE,normal_fragment_maps:LE,normal_pars_fragment:DE,normal_pars_vertex:NE,normal_vertex:IE,normalmap_pars_fragment:UE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:kE,opaque_fragment:BE,packing:HE,premultiplied_alpha_fragment:VE,project_vertex:GE,dithering_fragment:jE,dithering_pars_fragment:WE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:KE,shadowmap_vertex:ZE,shadowmask_pars_fragment:JE,skinbase_vertex:QE,skinning_pars_vertex:$E,skinning_vertex:e2,skinnormal_vertex:t2,specularmap_fragment:n2,specularmap_pars_fragment:i2,tonemapping_fragment:r2,tonemapping_pars_fragment:s2,transmission_fragment:o2,transmission_pars_fragment:a2,uv_pars_fragment:l2,uv_pars_vertex:c2,uv_vertex:u2,worldpos_vertex:d2,background_vert:h2,background_frag:f2,backgroundCube_vert:p2,backgroundCube_frag:m2,cube_vert:g2,cube_frag:v2,depth_vert:x2,depth_frag:y2,distanceRGBA_vert:_2,distanceRGBA_frag:S2,equirect_vert:M2,equirect_frag:w2,linedashed_vert:E2,linedashed_frag:T2,meshbasic_vert:A2,meshbasic_frag:b2,meshlambert_vert:C2,meshlambert_frag:R2,meshmatcap_vert:P2,meshmatcap_frag:L2,meshnormal_vert:D2,meshnormal_frag:N2,meshphong_vert:I2,meshphong_frag:U2,meshphysical_vert:z2,meshphysical_frag:O2,meshtoon_vert:F2,meshtoon_frag:k2,points_vert:B2,points_frag:H2,shadow_vert:V2,shadow_frag:G2,sprite_vert:j2,sprite_frag:W2},ze={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ci={basic:{uniforms:xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:xn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:xn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:xn([ze.points,ze.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:xn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:xn([ze.common,ze.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:xn([ze.sprite,ze.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:xn([ze.common,ze.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:xn([ze.lights,ze.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ci.physical={uniforms:xn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ll={r:0,b:0,g:0},qr=new wi,X2=new lt;function Y2(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function y(m){let x=m.isScene===!0?m.background:null;return x&&x.isTexture&&(x=(m.backgroundBlurriness>0?n:e).get(x)),x}function M(m){let x=!1;const S=y(m);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(m,x){const S=y(x);S&&(S.isCubeTexture||S.mapping===su)?(u===void 0&&(u=new et(new ri(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Ao(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qr.copy(x.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X2.makeRotationFromEuler(qr)),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==St,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new et(new Ii(2,2),new Vt({name:"BackgroundMaterial",uniforms:Ao(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function h(m,x){m.getRGB(Ll,Ey(t)),i.buffers.color.setClear(Ll.r,Ll.g,Ll.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(a,l)},render:M,addToRenderList:v}}function q2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(_,w,W,R,z){let H=!1;const F=d(R,W,w);s!==F&&(s=F,c(s.object)),H=p(_,R,W,z),H&&y(_,R,W,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(_,w,W,R),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,w,W){const R=W.wireframe===!0;let z=i[_.id];z===void 0&&(z={},i[_.id]=z);let H=z[w.id];H===void 0&&(H={},z[w.id]=H);let F=H[R];return F===void 0&&(F=f(l()),H[R]=F),F}function f(_){const w=[],W=[],R=[];for(let z=0;z<n;z++)w[z]=0,W[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:R,object:_,attributes:{},index:null}}function p(_,w,W,R){const z=s.attributes,H=w.attributes;let F=0;const Z=W.getAttributes();for(const I in Z)if(Z[I].location>=0){const K=z[I];let J=H[I];if(J===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),K===void 0||K.attribute!==J||J&&K.data!==J.data)return!0;F++}return s.attributesNum!==F||s.index!==R}function y(_,w,W,R){const z={},H=w.attributes;let F=0;const Z=W.getAttributes();for(const I in Z)if(Z[I].location>=0){let K=H[I];K===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(K=_.instanceColor));const J={};J.attribute=K,K&&K.data&&(J.data=K.data),z[I]=J,F++}s.attributes=z,s.attributesNum=F,s.index=R}function M(){const _=s.newAttributes;for(let w=0,W=_.length;w<W;w++)_[w]=0}function v(_){h(_,0)}function h(_,w){const W=s.newAttributes,R=s.enabledAttributes,z=s.attributeDivisors;W[_]=1,R[_]===0&&(t.enableVertexAttribArray(_),R[_]=1),z[_]!==w&&(t.vertexAttribDivisor(_,w),z[_]=w)}function m(){const _=s.newAttributes,w=s.enabledAttributes;for(let W=0,R=w.length;W<R;W++)w[W]!==_[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function x(_,w,W,R,z,H,F){F===!0?t.vertexAttribIPointer(_,w,W,z,H):t.vertexAttribPointer(_,w,W,R,z,H)}function S(_,w,W,R){M();const z=R.attributes,H=W.getAttributes(),F=w.defaultAttributeValues;for(const Z in H){const I=H[Z];if(I.location>=0){let q=z[Z];if(q===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){const K=q.normalized,J=q.itemSize,ge=e.get(q);if(ge===void 0)continue;const Ce=ge.buffer,Q=ge.type,re=ge.bytesPerElement,le=Q===t.INT||Q===t.UNSIGNED_INT||q.gpuType===yp;if(q.isInterleavedBufferAttribute){const ae=q.data,Me=ae.stride,we=q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<I.locationSize;Ue++)h(I.location+Ue,ae.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<I.locationSize;Ue++)v(I.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Ue=0;Ue<I.locationSize;Ue++)x(I.location+Ue,J/I.locationSize,Q,K,Me*re,(we+J/I.locationSize*Ue)*re,le)}else{if(q.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)h(I.location+ae,q.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ae=0;ae<I.locationSize;ae++)v(I.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let ae=0;ae<I.locationSize;ae++)x(I.location+ae,J/I.locationSize,Q,K,J*re,J/I.locationSize*ae*re,le)}}else if(F!==void 0){const K=F[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}m()}function L(){b();for(const _ in i){const w=i[_];for(const W in w){const R=w[W];for(const z in R)u(R[z].object),delete R[z];delete w[W]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const W in w){const R=w[W];for(const z in R)u(R[z].object),delete R[z];delete w[W]}delete i[_.id]}function E(_){for(const w in i){const W=i[w];if(W[_.id]===void 0)continue;const R=W[_.id];for(const z in R)u(R[z].object),delete R[z];delete W[_.id]}}function b(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:G,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:v,disableUnusedAttributes:m}}function K2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],u[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let y=0;for(let M=0;M<d;M++)y+=u[M];for(let M=0;M<f.length;M++)n.update(y,i,f[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Z2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ni&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ui&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ti&&!b)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:L,maxSamples:A}}function J2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new bi,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const y=d.clippingPlanes,M=d.clipIntersection,v=d.clipShadows,h=t.get(d);if(!r||y===null||y.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,x=m*4;let S=h.clippingState||null;l.value=S,S=u(y,f,x,p);for(let L=0;L!==x;++L)S[L]=n[L];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,y){const M=d!==null?d.length:0;let v=null;if(M!==0){if(v=l.value,y!==!0||v===null){const h=p+M*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<h)&&(v=new Float32Array(h));for(let x=0,S=p;x!==M;++x,S+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(v,S),v[S+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}function Q2(t){let e=new WeakMap;function n(o,a){return a===zc?o.mapping=Eo:a===Oh&&(o.mapping=To),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===Oh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lp extends Ty{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const no=4,O0=[.125,.215,.35,.446,.526,.582],es=20,pd=new Lp,F0=new Qe;let md=null,gd=0,vd=0,xd=!1;const $r=(1+Math.sqrt(5))/2,Os=1/$r,k0=[new k(-$r,Os,0),new k($r,Os,0),new k(-Os,0,$r),new k(Os,0,$r),new k(0,$r,-Os),new k(0,$r,Os),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class ff{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,vd),this._renderer.xr.enabled=xd,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Eo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ln,format:ni,colorSpace:rr,depthBuffer:!1},r=B0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$2(s)),this._blurMaterial=eT(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,pd)}_sceneToCubeUV(e,n,i,r){const a=new Vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(F0),u.toneMapping=Ir,u.autoClear=!1;const p=new za({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),y=new et(new ri,p);let M=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,M=!0):(p.color.copy(F0),M=!0);for(let h=0;h<6;h++){const m=h%3;m===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):m===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;Dl(r,m*x,h>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Eo||e.mapping===To;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=k0[(r-s-1)%k0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new et(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),M=s/y,v=isFinite(s)?1+Math.floor(u*M):es;v>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${es}`);const h=[];let m=0;for(let E=0;E<es;++E){const b=E/M,G=Math.exp(-b*b/2);h.push(G),E===0?m+=G:E<v&&(m+=2*G)}for(let E=0;E<h.length;E++)h[E]=h[E]/m;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=y,f.mipInt.value=x-i;const S=this._sizeLods[r],L=3*S*(r>x-no?r-x+no:0),A=4*(this._cubeSize-S);Dl(n,L,A,3*S,2*S),l.setRenderTarget(n),l.render(d,pd)}}function $2(t){const e=[],n=[],i=[];let r=t;const s=t-no+1+O0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-no?l=O0[o-t+no-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,M=3,v=2,h=1,m=new Float32Array(M*y*p),x=new Float32Array(v*y*p),S=new Float32Array(h*y*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,b=A>2?0:-1,G=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];m.set(G,M*y*A),x.set(f,v*y*A);const _=[A,A,A,A,A,A];S.set(_,h*y*A)}const L=new En;L.setAttribute("position",new Ni(m,M)),L.setAttribute("uv",new Ni(x,v)),L.setAttribute("faceIndex",new Ni(S,h)),e.push(L),r>no&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function B0(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eT(t,e,n){const i=new Float32Array(es),r=new k(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function H0(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function V0(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function tT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zc||l===Oh,u=l===Eo||l===To;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new ff(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new ff(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function nT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&cc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iT(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const M=f.morphAttributes[y];for(let v=0,h=M.length;v<h;v++)e.remove(M[v])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const M=p[y];for(let v=0,h=M.length;v<h;v++)e.update(M[v],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,y=d.attributes.position;let M=0;if(p!==null){const m=p.array;M=p.version;for(let x=0,S=m.length;x<S;x+=3){const L=m[x+0],A=m[x+1],E=m[x+2];f.push(L,A,A,E,E,L)}}else if(y!==void 0){const m=y.array;M=y.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const L=x+0,A=x+1,E=x+2;f.push(L,A,A,E,E,L)}}else return;const v=new(xy(f)?wy:My)(f,1);v.version=M;const h=s.get(d);h&&e.remove(h),s.set(d,v)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function rT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,f*o,y),n.update(p,i,y))}function u(f,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,y);let v=0;for(let h=0;h<y;h++)v+=p[h];n.update(v,i,1)}function d(f,p,y,M){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],M[h]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,M,0,y);let h=0;for(let m=0;m<y;m++)h+=p[m];for(let m=0;m<M.length;m++)n.update(h,i,M[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oT(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let _=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const y=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),M===!0&&(S=2),v===!0&&(S=3);let L=a.attributes.position.count*S,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*A*4*d),b=new _y(E,L,A,d);b.type=ti,b.needsUpdate=!0;const G=S*4;for(let w=0;w<d;w++){const W=h[w],R=m[w],z=x[w],H=L*A*4*w;for(let F=0;F<W.count;F++){const Z=F*G;y===!0&&(r.fromBufferAttribute(W,F),E[H+Z+0]=r.x,E[H+Z+1]=r.y,E[H+Z+2]=r.z,E[H+Z+3]=0),M===!0&&(r.fromBufferAttribute(R,F),E[H+Z+4]=r.x,E[H+Z+5]=r.y,E[H+Z+6]=r.z,E[H+Z+7]=0),v===!0&&(r.fromBufferAttribute(z,F),E[H+Z+8]=r.x,E[H+Z+9]=r.y,E[H+Z+10]=r.z,E[H+Z+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new be(L,A)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let v=0;v<c.length;v++)y+=c[v];const M=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function aT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Np extends jt{constructor(e,n,i,r,s,o,a,l,c,u=po){if(u!==po&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===po&&(i=ds),i===void 0&&u===fs&&(i=hs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cy=new jt,G0=new Np(1,1),Ry=new _y,Py=new WM,Ly=new Ay,j0=[],W0=[],X0=new Float32Array(16),Y0=new Float32Array(9),q0=new Float32Array(4);function No(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=j0[r];if(s===void 0&&(s=new Float32Array(r),j0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function au(t,e){let n=W0[e];n===void 0&&(n=new Int32Array(e),W0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function lT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;q0.set(i),t.uniformMatrix2fv(this.addr,!1,q0),Xt(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Y0.set(i),t.uniformMatrix3fv(this.addr,!1,Y0),Xt(n,i)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;X0.set(i),t.uniformMatrix4fv(this.addr,!1,X0),Xt(n,i)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(G0.compareFunction=vy,s=G0):s=Cy,n.setTexture2D(e||s,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Py,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ly,r)}function AT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ry,r)}function bT(t){switch(t){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return dT;case 35674:return hT;case 35675:return fT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return yT;case 36294:return _T;case 36295:return ST;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function CT(t,e){t.uniform1fv(this.addr,e)}function RT(t,e){const n=No(e,this.size,2);t.uniform2fv(this.addr,n)}function PT(t,e){const n=No(e,this.size,3);t.uniform3fv(this.addr,n)}function LT(t,e){const n=No(e,this.size,4);t.uniform4fv(this.addr,n)}function DT(t,e){const n=No(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NT(t,e){const n=No(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IT(t,e){const n=No(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UT(t,e){t.uniform1iv(this.addr,e)}function zT(t,e){t.uniform2iv(this.addr,e)}function OT(t,e){t.uniform3iv(this.addr,e)}function FT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function BT(t,e){t.uniform2uiv(this.addr,e)}function HT(t,e){t.uniform3uiv(this.addr,e)}function VT(t,e){t.uniform4uiv(this.addr,e)}function GT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Cy,s[o])}function jT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Py,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ly,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ry,s[o])}function YT(t){switch(t){case 5126:return CT;case 35664:return RT;case 35665:return PT;case 35666:return LT;case 35674:return DT;case 35675:return NT;case 35676:return IT;case 5124:case 35670:return UT;case 35667:case 35671:return zT;case 35668:case 35672:return OT;case 35669:case 35673:return FT;case 5125:return kT;case 36294:return BT;case 36295:return HT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bT(n.type)}}class KT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YT(n.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function K0(t,e){t.seq.push(e),t.map[e.id]=e}function JT(t,e,n){const i=t.name,r=i.length;for(yd.lastIndex=0;;){const s=yd.exec(i),o=yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){K0(n,c===void 0?new qT(a,t,e):new KT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new ZT(a),K0(n,d)),n=d}}}class uc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);JT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Z0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const QT=37297;let $T=0;function eA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function tA(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let i;switch(e===n?i="":e===kc&&n===Fc?i="LinearDisplayP3ToLinearSRGB":e===Fc&&n===kc&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case ou:return[i,"LinearTransferOETF"];case pn:case Ap:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function J0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+eA(t.getShaderSource(e),o)}else return r}function nA(t,e){const n=tA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function iA(t,e){let n;switch(e){case ty:n="Linear";break;case ny:n="Reinhard";break;case iy:n="Cineon";break;case xp:n="ACESFilmic";break;case ry:n="AgX";break;case sy:n="Neutral";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new k;function rA(){dt.getLuminanceCoefficients(Nl);const t=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function oA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function Q0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(t){return t.replace(lA,uA)}const cA=new Map;function uA(t,e){let n=nt[e];if(n===void 0){const i=cA.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pf(n)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(t){return t.replace(dA,hA)}function hA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function fA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function pA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Eo:case To:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function gA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ey:e="ENVMAP_BLENDING_MULTIPLY";break;case _M:e="ENVMAP_BLENDING_MIX";break;case SM:e="ENVMAP_BLENDING_ADD";break}return e}function vA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fA(n),c=pA(n),u=mA(n),d=gA(n),f=vA(n),p=sA(n),y=oA(s),M=r.createProgram();let v,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ia).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(v=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ir?"#define TONE_MAPPING":"",n.toneMapping!==Ir?nt.tonemapping_pars_fragment:"",n.toneMapping!==Ir?iA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,nA("linearToOutputTexel",n.outputColorSpace),rA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=pf(o),o=Q0(o,n),o=$0(o,n),a=pf(a),a=Q0(a,n),a=$0(a,n),o=eg(o),a=eg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+v+o,S=m+h+a,L=Z0(r,r.VERTEX_SHADER,x),A=Z0(r,r.FRAGMENT_SHADER,S);r.attachShader(M,L),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function E(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(M).trim(),R=r.getShaderInfoLog(L).trim(),z=r.getShaderInfoLog(A).trim();let H=!0,F=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,L,A);else{const Z=J0(r,L,"vertex"),I=J0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+Z+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(R===""||z==="")&&(F=!1);F&&(w.diagnostics={runnable:H,programLog:W,vertexShader:{log:R,prefix:v},fragmentShader:{log:z,prefix:h}})}r.deleteShader(L),r.deleteShader(A),b=new uc(r,M),G=aA(r,M)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let G;this.getAttributes=function(){return G===void 0&&E(this),G};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,QT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=A,this}let yA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new SA(e),n.set(e,i)),i}}class SA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function MA(t,e,n,i,r,s,o){const a=new Rp,l=new _A,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,w,W,R,z){const H=R.fog,F=z.geometry,Z=_.isMeshStandardMaterial?R.environment:null,I=(_.isMeshStandardMaterial?n:e).get(_.envMap||Z),q=I&&I.mapping===su?I.image.height:null,K=M[_.type];_.precision!==null&&(y=r.getMaxPrecision(_.precision),y!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",y,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ge=J!==void 0?J.length:0;let Ce=0;F.morphAttributes.position!==void 0&&(Ce=1),F.morphAttributes.normal!==void 0&&(Ce=2),F.morphAttributes.color!==void 0&&(Ce=3);let Q,re,le,ae;if(K){const qe=Ci[K];Q=qe.vertexShader,re=qe.fragmentShader}else Q=_.vertexShader,re=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),ae=l.getFragmentShaderID(_);const Me=t.getRenderTarget(),we=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,He=!!_.map,pe=!!_.matcap,D=!!I,Ae=!!_.aoMap,Te=!!_.lightMap,Ee=!!_.bumpMap,_e=!!_.normalMap,Fe=!!_.displacementMap,Ie=!!_.emissiveMap,N=!!_.metalnessMap,T=!!_.roughnessMap,oe=_.anisotropy>0,xe=_.clearcoat>0,Se=_.dispersion>0,ve=_.iridescence>0,ke=_.sheen>0,Le=_.transmission>0,O=oe&&!!_.anisotropyMap,ee=xe&&!!_.clearcoatMap,j=xe&&!!_.clearcoatNormalMap,U=xe&&!!_.clearcoatRoughnessMap,$=ve&&!!_.iridescenceMap,B=ve&&!!_.iridescenceThicknessMap,V=ke&&!!_.sheenColorMap,ce=ke&&!!_.sheenRoughnessMap,me=!!_.specularMap,te=!!_.specularColorMap,C=!!_.specularIntensityMap,ue=Le&&!!_.transmissionMap,X=Le&&!!_.thicknessMap,Y=!!_.gradientMap,ie=!!_.alphaMap,fe=_.alphaTest>0,Oe=!!_.alphaHash,Ke=!!_.extensions;let at=Ir;_.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(at=t.toneMapping);const Ze={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:re,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:rr,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:pe,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:Te,bumpMap:Ee,normalMap:_e,displacementMap:p&&Fe,emissiveMap:Ie,normalMapObjectSpace:_e&&_.normalMapType===AM,normalMapTangentSpace:_e&&_.normalMapType===Tp,metalnessMap:N,roughnessMap:T,anisotropy:oe,anisotropyMap:O,clearcoat:xe,clearcoatMap:ee,clearcoatNormalMap:j,clearcoatRoughnessMap:U,dispersion:Se,iridescence:ve,iridescenceMap:$,iridescenceThicknessMap:B,sheen:ke,sheenColorMap:V,sheenRoughnessMap:ce,specularMap:me,specularColorMap:te,specularIntensityMap:C,transmission:Le,transmissionMap:ue,thicknessMap:X,gradientMap:Y,opaque:_.transparent===!1&&_.blending===fo&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:fe,alphaHash:Oe,combine:_.combine,mapUv:He&&v(_.map.channel),aoMapUv:Ae&&v(_.aoMap.channel),lightMapUv:Te&&v(_.lightMap.channel),bumpMapUv:Ee&&v(_.bumpMap.channel),normalMapUv:_e&&v(_.normalMap.channel),displacementMapUv:Fe&&v(_.displacementMap.channel),emissiveMapUv:Ie&&v(_.emissiveMap.channel),metalnessMapUv:N&&v(_.metalnessMap.channel),roughnessMapUv:T&&v(_.roughnessMap.channel),anisotropyMapUv:O&&v(_.anisotropyMap.channel),clearcoatMapUv:ee&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:j&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:B&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:V&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ce&&v(_.sheenRoughnessMap.channel),specularMapUv:me&&v(_.specularMap.channel),specularColorMapUv:te&&v(_.specularColorMap.channel),specularIntensityMapUv:C&&v(_.specularIntensityMap.channel),transmissionMapUv:ue&&v(_.transmissionMap.channel),thicknessMapUv:X&&v(_.thicknessMap.channel),alphaMapUv:ie&&v(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||oe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(He||ie),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===St,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ke&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&_.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const W in _.defines)w.push(W),w.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(x(w,_),S(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function L(_){const w=M[_.type];let W;if(w){const R=Ci[w];W=yi.clone(R.uniforms)}else W=_.uniforms;return W}function A(_,w){let W;for(let R=0,z=u.length;R<z;R++){const H=u[R];if(H.cacheKey===w){W=H,++W.usedTimes;break}}return W===void 0&&(W=new xA(t,w,_,s),u.push(W)),W}function E(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:L,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:G}}function wA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function EA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ig(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,y,M,v){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:M,group:v},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=y,h.renderOrder=d.renderOrder,h.z=M,h.group=v),e++,h}function a(d,f,p,y,M,v){const h=o(d,f,p,y,M,v);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,y,M,v){const h=o(d,f,p,y,M,v);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||EA),i.length>1&&i.sort(f||ng),r.length>1&&r.sort(f||ng)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ig,t.set(i,[o])):r>=s.length?(o=new ig,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Qe};break;case"SpotLight":n={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function bA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CA=0;function RA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PA(t){const e=new AA,n=bA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new lt,o=new lt;function a(c){let u=0,d=0,f=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,y=0,M=0,v=0,h=0,m=0,x=0,S=0,L=0,A=0,E=0;c.sort(RA);for(let G=0,_=c.length;G<_;G++){const w=c[G],W=w.color,R=w.intensity,z=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=W.r*R,d+=W.g*R,f+=W.b*R;else if(w.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(w.sh.coefficients[F],R);E++}else if(w.isDirectionalLight){const F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,I=n.get(w);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=w.shadow.matrix,m++}i.directional[p]=F,p++}else if(w.isSpotLight){const F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(W).multiplyScalar(R),F.distance=z,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,i.spot[M]=F;const Z=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,Z.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[M]=Z.matrix,w.castShadow){const I=n.get(w);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[M]=I,i.spotShadowMap[M]=H,S++}M++}else if(w.isRectAreaLight){const F=e.get(w);F.color.copy(W).multiplyScalar(R),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),i.rectArea[v]=F,v++}else if(w.isPointLight){const F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){const Z=w.shadow,I=n.get(w);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=H,i.pointShadowMatrix[y]=w.shadow.matrix,x++}i.point[y]=F,y++}else if(w.isHemisphereLight){const F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(R),F.groundColor.copy(w.groundColor).multiplyScalar(R),i.hemi[h]=F,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==p||b.pointLength!==y||b.spotLength!==M||b.rectAreaLength!==v||b.hemiLength!==h||b.numDirectionalShadows!==m||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==L||b.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=v,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,b.directionalLength=p,b.pointLength=y,b.spotLength=M,b.rectAreaLength=v,b.hemiLength=h,b.numDirectionalShadows=m,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=L,b.numLightProbes=E,i.version=CA++)}function l(c,u){let d=0,f=0,p=0,y=0,M=0;const v=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),p++}else if(x.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(v),f++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(v),M++}}}return{setup:a,setupView:l,state:i}}function rg(t){const e=new PA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rg(t),e.set(r,[a])):s>=o.length?(a=new rg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class DA extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NA extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
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
}`;function zA(t,e,n){let i=new Pp;const r=new be,s=new be,o=new xt,a=new DA({depthPacking:TM}),l=new NA,c={},u=n.maxTextureSize,d={[Or]:Sn,[Sn]:Or,[gn]:gn},f=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:IA,fragmentShader:UA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const y=new En;y.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new et(y,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jx;let h=this.type;this.render=function(A,E,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const G=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(nn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const R=h!==ji&&this.type===ji,z=h===ji&&this.type!==ji;for(let H=0,F=A.length;H<F;H++){const Z=A[H],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null||R===!0||z===!0){const J=this.type!==ji?{minFilter:Jt,magFilter:Jt}:{};I.map!==null&&I.map.dispose(),I.map=new ai(r.x,r.y,J),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let J=0;J<K;J++){const ge=I.getViewport(J);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),W.viewport(o),I.updateMatrices(Z,J),i=I.getFrustum(),S(E,b,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===ji&&m(I,b),I.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(G,_,w)};function m(A,E){const b=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,b,f,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,b,p,M,null)}function x(A,E,b,G){let _=null;const w=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=b.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=_.uuid,R=E.uuid;let z=c[W];z===void 0&&(z={},c[W]=z);let H=z[R];H===void 0&&(H=_.clone(),z[R]=H,E.addEventListener("dispose",L)),_=H}if(_.visible=E.visible,_.wireframe=E.wireframe,G===ji?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=t.properties.get(_);W.light=b}return _}function S(A,E,b,G,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ji)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const R=e.update(A),z=A.material;if(Array.isArray(z)){const H=R.groups;for(let F=0,Z=H.length;F<Z;F++){const I=H[F],q=z[I.materialIndex];if(q&&q.visible){const K=x(A,q,G,_);A.onBeforeShadow(t,A,E,b,R,K,I),t.renderBufferDirect(b,null,R,K,A,I),A.onAfterShadow(t,A,E,b,R,K,I)}}}else if(z.visible){const H=x(A,z,G,_);A.onBeforeShadow(t,A,E,b,R,H,null),t.renderBufferDirect(b,null,R,H,A,null),A.onAfterShadow(t,A,E,b,R,H,null)}}const W=A.children;for(let R=0,z=W.length;R<z;R++)S(W[R],E,b,G,_)}function L(A){A.target.removeEventListener("dispose",L);for(const b in c){const G=c[b],_=A.target.uuid;_ in G&&(G[_].dispose(),delete G[_])}}}const OA={[Ph]:Lh,[Dh]:Uh,[Nh]:zh,[wo]:Ih,[Lh]:Ph,[Uh]:Dh,[zh]:Nh,[Ih]:wo};function FA(t){function e(){let C=!1;const ue=new xt;let X=null;const Y=new xt(0,0,0,0);return{setMask:function(ie){X!==ie&&!C&&(t.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){C=ie},setClear:function(ie,fe,Oe,Ke,at){at===!0&&(ie*=Ke,fe*=Ke,Oe*=Ke),ue.set(ie,fe,Oe,Ke),Y.equals(ue)===!1&&(t.clearColor(ie,fe,Oe,Ke),Y.copy(ue))},reset:function(){C=!1,X=null,Y.set(-1,0,0,0)}}}function n(){let C=!1,ue=!1,X=null,Y=null,ie=null;return{setReversed:function(fe){ue=fe},setTest:function(fe){fe?le(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(fe){X!==fe&&!C&&(t.depthMask(fe),X=fe)},setFunc:function(fe){if(ue&&(fe=OA[fe]),Y!==fe){switch(fe){case Ph:t.depthFunc(t.NEVER);break;case Lh:t.depthFunc(t.ALWAYS);break;case Dh:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case Nh:t.depthFunc(t.EQUAL);break;case Ih:t.depthFunc(t.GEQUAL);break;case Uh:t.depthFunc(t.GREATER);break;case zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=fe}},setLocked:function(fe){C=fe},setClear:function(fe){ie!==fe&&(t.clearDepth(fe),ie=fe)},reset:function(){C=!1,X=null,Y=null,ie=null}}}function i(){let C=!1,ue=null,X=null,Y=null,ie=null,fe=null,Oe=null,Ke=null,at=null;return{setTest:function(Ze){C||(Ze?le(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!C&&(t.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,qe,st){(X!==Ze||Y!==qe||ie!==st)&&(t.stencilFunc(Ze,qe,st),X=Ze,Y=qe,ie=st)},setOp:function(Ze,qe,st){(fe!==Ze||Oe!==qe||Ke!==st)&&(t.stencilOp(Ze,qe,st),fe=Ze,Oe=qe,Ke=st)},setLocked:function(Ze){C=Ze},setClear:function(Ze){at!==Ze&&(t.clearStencil(Ze),at=Ze)},reset:function(){C=!1,ue=null,X=null,Y=null,ie=null,fe=null,Oe=null,Ke=null,at=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,y=!1,M=null,v=null,h=null,m=null,x=null,S=null,L=null,A=new Qe(0,0,0),E=0,b=!1,G=null,_=null,w=null,W=null,R=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=F>=1):Z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=F>=2);let I=null,q={};const K=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ge=new xt().fromArray(K),Ce=new xt().fromArray(J);function Q(C,ue,X,Y){const ie=new Uint8Array(4),fe=t.createTexture();t.bindTexture(C,fe),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<X;Oe++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ue+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return fe}const re={};re[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(wo),Te(!1),Ee(f0),le(t.CULL_FACE),D(nn);function le(C){c[C]!==!0&&(t.enable(C),c[C]=!0)}function ae(C){c[C]!==!1&&(t.disable(C),c[C]=!1)}function Me(C,ue){return u[C]!==ue?(t.bindFramebuffer(C,ue),u[C]=ue,C===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),C===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(C,ue){let X=f,Y=!1;if(C){X=d.get(ue),X===void 0&&(X=[],d.set(ue,X));const ie=C.textures;if(X.length!==ie.length||X[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Oe=ie.length;fe<Oe;fe++)X[fe]=t.COLOR_ATTACHMENT0+fe;X.length=ie.length,Y=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Y=!0);Y&&t.drawBuffers(X)}function Ue(C){return p!==C?(t.useProgram(C),p=C,!0):!1}const He={[vi]:t.FUNC_ADD,[oM]:t.FUNC_SUBTRACT,[aM]:t.FUNC_REVERSE_SUBTRACT};He[lM]=t.MIN,He[cM]=t.MAX;const pe={[na]:t.ZERO,[uM]:t.ONE,[dM]:t.SRC_COLOR,[Ah]:t.SRC_ALPHA,[mM]:t.SRC_ALPHA_SATURATE,[Rh]:t.DST_COLOR,[Ch]:t.DST_ALPHA,[hM]:t.ONE_MINUS_SRC_COLOR,[bh]:t.ONE_MINUS_SRC_ALPHA,[pM]:t.ONE_MINUS_DST_COLOR,[fM]:t.ONE_MINUS_DST_ALPHA,[gM]:t.CONSTANT_COLOR,[vM]:t.ONE_MINUS_CONSTANT_COLOR,[xM]:t.CONSTANT_ALPHA,[yM]:t.ONE_MINUS_CONSTANT_ALPHA};function D(C,ue,X,Y,ie,fe,Oe,Ke,at,Ze){if(C===nn){y===!0&&(ae(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),C!==$x){if(C!==M||Ze!==b){if((v!==vi||x!==vi)&&(t.blendEquation(t.FUNC_ADD),v=vi,x=vi),Ze)switch(C){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case p0:t.blendFunc(t.ONE,t.ONE);break;case m0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case g0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case p0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case m0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case g0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}h=null,m=null,S=null,L=null,A.set(0,0,0),E=0,M=C,b=Ze}return}ie=ie||ue,fe=fe||X,Oe=Oe||Y,(ue!==v||ie!==x)&&(t.blendEquationSeparate(He[ue],He[ie]),v=ue,x=ie),(X!==h||Y!==m||fe!==S||Oe!==L)&&(t.blendFuncSeparate(pe[X],pe[Y],pe[fe],pe[Oe]),h=X,m=Y,S=fe,L=Oe),(Ke.equals(A)===!1||at!==E)&&(t.blendColor(Ke.r,Ke.g,Ke.b,at),A.copy(Ke),E=at),M=C,b=!1}function Ae(C,ue){C.side===gn?ae(t.CULL_FACE):le(t.CULL_FACE);let X=C.side===Sn;ue&&(X=!X),Te(X),C.blending===fo&&C.transparent===!1?D(nn):D(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const Y=C.stencilWrite;o.setTest(Y),Y&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(C){G!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),G=C)}function Ee(C){C!==rM?(le(t.CULL_FACE),C!==_&&(C===f0?t.cullFace(t.BACK):C===sM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),_=C}function _e(C){C!==w&&(H&&t.lineWidth(C),w=C)}function Fe(C,ue,X){C?(le(t.POLYGON_OFFSET_FILL),(W!==ue||R!==X)&&(t.polygonOffset(ue,X),W=ue,R=X)):ae(t.POLYGON_OFFSET_FILL)}function Ie(C){C?le(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function N(C){C===void 0&&(C=t.TEXTURE0+z-1),I!==C&&(t.activeTexture(C),I=C)}function T(C,ue,X){X===void 0&&(I===null?X=t.TEXTURE0+z-1:X=I);let Y=q[X];Y===void 0&&(Y={type:void 0,texture:void 0},q[X]=Y),(Y.type!==C||Y.texture!==ue)&&(I!==X&&(t.activeTexture(X),I=X),t.bindTexture(C,ue||re[C]),Y.type=C,Y.texture=ue)}function oe(){const C=q[I];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function xe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function U(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function B(C){ge.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),ge.copy(C))}function V(C){Ce.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),Ce.copy(C))}function ce(C,ue){let X=l.get(ue);X===void 0&&(X=new WeakMap,l.set(ue,X));let Y=X.get(C);Y===void 0&&(Y=t.getUniformBlockIndex(ue,C.name),X.set(C,Y))}function me(C,ue){const Y=l.get(ue).get(C);a.get(ue)!==Y&&(t.uniformBlockBinding(ue,Y,C.__bindingPointIndex),a.set(ue,Y))}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,q={},u={},d=new WeakMap,f=[],p=null,y=!1,M=null,v=null,h=null,m=null,x=null,S=null,L=null,A=new Qe(0,0,0),E=0,b=!1,G=null,_=null,w=null,W=null,R=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ae,bindFramebuffer:Me,drawBuffers:we,useProgram:Ue,setBlending:D,setMaterial:Ae,setFlipSided:Te,setCullFace:Ee,setLineWidth:_e,setPolygonOffset:Fe,setScissorTest:Ie,activeTexture:N,bindTexture:T,unbindTexture:oe,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:U,texImage3D:$,updateUBOMapping:ce,uniformBlockBinding:me,texStorage2D:ee,texStorage3D:j,texSubImage2D:ve,texSubImage3D:ke,compressedTexSubImage2D:Le,compressedTexSubImage3D:O,scissor:B,viewport:V,reset:te}}function sg(t,e,n,i){const r=kA(i);switch(n){case uy:return t*e;case hy:return t*e;case fy:return t*e*2;case py:return t*e/r.components*r.byteLength;case Mp:return t*e/r.components*r.byteLength;case my:return t*e*2/r.components*r.byteLength;case wp:return t*e*2/r.components*r.byteLength;case dy:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case Ep:return t*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bh:case Vh:return Math.max(t,16)*Math.max(e,8)/4;case kh:case Hh:return Math.max(t,8)*Math.max(e,8)/2;case Gh:case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ac:case af:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gy:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case uf:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kA(t){switch(t){case Ui:case ay:return{byteLength:1,components:1};case Ia:case ly:case Ln:return{byteLength:2,components:1};case _p:case Sp:return{byteLength:2,components:4};case ds:case yp:case ti:return{byteLength:4,components:1};case cy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function BA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,T){return p?new OffscreenCanvas(N,T):Ua("canvas")}function M(N,T,oe){let xe=1;const Se=Ie(N);if((Se.width>oe||Se.height>oe)&&(xe=oe/Math.max(Se.width,Se.height)),xe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ve=Math.floor(xe*Se.width),ke=Math.floor(xe*Se.height);d===void 0&&(d=y(ve,ke));const Le=T?y(ve,ke):d;return Le.width=ve,Le.height=ke,Le.getContext("2d").drawImage(N,0,0,ve,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ve+"x"+ke+")."),Le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function v(N){return N.generateMipmaps&&N.minFilter!==Jt&&N.minFilter!==rn}function h(N){t.generateMipmap(N)}function m(N,T,oe,xe,Se=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ve=T;if(T===t.RED&&(oe===t.FLOAT&&(ve=t.R32F),oe===t.HALF_FLOAT&&(ve=t.R16F),oe===t.UNSIGNED_BYTE&&(ve=t.R8)),T===t.RED_INTEGER&&(oe===t.UNSIGNED_BYTE&&(ve=t.R8UI),oe===t.UNSIGNED_SHORT&&(ve=t.R16UI),oe===t.UNSIGNED_INT&&(ve=t.R32UI),oe===t.BYTE&&(ve=t.R8I),oe===t.SHORT&&(ve=t.R16I),oe===t.INT&&(ve=t.R32I)),T===t.RG&&(oe===t.FLOAT&&(ve=t.RG32F),oe===t.HALF_FLOAT&&(ve=t.RG16F),oe===t.UNSIGNED_BYTE&&(ve=t.RG8)),T===t.RG_INTEGER&&(oe===t.UNSIGNED_BYTE&&(ve=t.RG8UI),oe===t.UNSIGNED_SHORT&&(ve=t.RG16UI),oe===t.UNSIGNED_INT&&(ve=t.RG32UI),oe===t.BYTE&&(ve=t.RG8I),oe===t.SHORT&&(ve=t.RG16I),oe===t.INT&&(ve=t.RG32I)),T===t.RGB_INTEGER&&(oe===t.UNSIGNED_BYTE&&(ve=t.RGB8UI),oe===t.UNSIGNED_SHORT&&(ve=t.RGB16UI),oe===t.UNSIGNED_INT&&(ve=t.RGB32UI),oe===t.BYTE&&(ve=t.RGB8I),oe===t.SHORT&&(ve=t.RGB16I),oe===t.INT&&(ve=t.RGB32I)),T===t.RGBA_INTEGER&&(oe===t.UNSIGNED_BYTE&&(ve=t.RGBA8UI),oe===t.UNSIGNED_SHORT&&(ve=t.RGBA16UI),oe===t.UNSIGNED_INT&&(ve=t.RGBA32UI),oe===t.BYTE&&(ve=t.RGBA8I),oe===t.SHORT&&(ve=t.RGBA16I),oe===t.INT&&(ve=t.RGBA32I)),T===t.RGB&&oe===t.UNSIGNED_INT_5_9_9_9_REV&&(ve=t.RGB9_E5),T===t.RGBA){const ke=Se?Oc:dt.getTransfer(xe);oe===t.FLOAT&&(ve=t.RGBA32F),oe===t.HALF_FLOAT&&(ve=t.RGBA16F),oe===t.UNSIGNED_BYTE&&(ve=ke===St?t.SRGB8_ALPHA8:t.RGBA8),oe===t.UNSIGNED_SHORT_4_4_4_4&&(ve=t.RGBA4),oe===t.UNSIGNED_SHORT_5_5_5_1&&(ve=t.RGB5_A1)}return(ve===t.R16F||ve===t.R32F||ve===t.RG16F||ve===t.RG32F||ve===t.RGBA16F||ve===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function x(N,T){let oe;return N?T===null||T===ds||T===hs?oe=t.DEPTH24_STENCIL8:T===ti?oe=t.DEPTH32F_STENCIL8:T===Ia&&(oe=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ds||T===hs?oe=t.DEPTH_COMPONENT24:T===ti?oe=t.DEPTH_COMPONENT32F:T===Ia&&(oe=t.DEPTH_COMPONENT16),oe}function S(N,T){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jt&&N.minFilter!==rn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function L(N){const T=N.target;T.removeEventListener("dispose",L),E(T),T.isVideoTexture&&u.delete(T)}function A(N){const T=N.target;T.removeEventListener("dispose",A),G(T)}function E(N){const T=i.get(N);if(T.__webglInit===void 0)return;const oe=N.source,xe=f.get(oe);if(xe){const Se=xe[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&b(N),Object.keys(xe).length===0&&f.delete(oe)}i.remove(N)}function b(N){const T=i.get(N);t.deleteTexture(T.__webglTexture);const oe=N.source,xe=f.get(oe);delete xe[T.__cacheKey],o.memory.textures--}function G(N){const T=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let Se=0;Se<T.__webglFramebuffer[xe].length;Se++)t.deleteFramebuffer(T.__webglFramebuffer[xe][Se]);else t.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)t.deleteFramebuffer(T.__webglFramebuffer[xe]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const oe=N.textures;for(let xe=0,Se=oe.length;xe<Se;xe++){const ve=i.get(oe[xe]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(oe[xe])}i.remove(N)}let _=0;function w(){_=0}function W(){const N=_;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),_+=1,N}function R(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function z(N,T){const oe=i.get(N);if(N.isVideoTexture&&_e(N),N.isRenderTargetTexture===!1&&N.version>0&&oe.__version!==N.version){const xe=N.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(oe,N,T);return}}n.bindTexture(t.TEXTURE_2D,oe.__webglTexture,t.TEXTURE0+T)}function H(N,T){const oe=i.get(N);if(N.version>0&&oe.__version!==N.version){Ce(oe,N,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,oe.__webglTexture,t.TEXTURE0+T)}function F(N,T){const oe=i.get(N);if(N.version>0&&oe.__version!==N.version){Ce(oe,N,T);return}n.bindTexture(t.TEXTURE_3D,oe.__webglTexture,t.TEXTURE0+T)}function Z(N,T){const oe=i.get(N);if(N.version>0&&oe.__version!==N.version){Q(oe,N,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture,t.TEXTURE0+T)}const I={[Rn]:t.REPEAT,[Zi]:t.CLAMP_TO_EDGE,[Fh]:t.MIRRORED_REPEAT},q={[Jt]:t.NEAREST,[wM]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Wu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},K={[bM]:t.NEVER,[NM]:t.ALWAYS,[CM]:t.LESS,[vy]:t.LEQUAL,[RM]:t.EQUAL,[DM]:t.GEQUAL,[PM]:t.GREATER,[LM]:t.NOTEQUAL};function J(N,T){if(T.type===ti&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===rn||T.magFilter===Wu||T.magFilter===hl||T.magFilter===Tr||T.minFilter===rn||T.minFilter===Wu||T.minFilter===hl||T.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,I[T.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,I[T.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,I[T.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,q[T.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Jt||T.minFilter!==hl&&T.minFilter!==Tr||T.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ge(N,T){let oe=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",L));const xe=T.source;let Se=f.get(xe);Se===void 0&&(Se={},f.set(xe,Se));const ve=R(T);if(ve!==N.__cacheKey){Se[ve]===void 0&&(Se[ve]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),Se[ve].usedTimes++;const ke=Se[N.__cacheKey];ke!==void 0&&(Se[N.__cacheKey].usedTimes--,ke.usedTimes===0&&b(T)),N.__cacheKey=ve,N.__webglTexture=Se[ve].texture}return oe}function Ce(N,T,oe){let xe=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=t.TEXTURE_3D);const Se=ge(N,T),ve=T.source;n.bindTexture(xe,N.__webglTexture,t.TEXTURE0+oe);const ke=i.get(ve);if(ve.version!==ke.__version||Se===!0){n.activeTexture(t.TEXTURE0+oe);const Le=dt.getPrimaries(dt.workingColorSpace),O=T.colorSpace===Mr?null:dt.getPrimaries(T.colorSpace),ee=T.colorSpace===Mr||Le===O?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let j=M(T.image,!1,r.maxTextureSize);j=Fe(T,j);const U=s.convert(T.format,T.colorSpace),$=s.convert(T.type);let B=m(T.internalFormat,U,$,T.colorSpace,T.isVideoTexture);J(xe,T);let V;const ce=T.mipmaps,me=T.isVideoTexture!==!0,te=ke.__version===void 0||Se===!0,C=ve.dataReady,ue=S(T,j);if(T.isDepthTexture)B=x(T.format===fs,T.type),te&&(me?n.texStorage2D(t.TEXTURE_2D,1,B,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,B,j.width,j.height,0,U,$,null));else if(T.isDataTexture)if(ce.length>0){me&&te&&n.texStorage2D(t.TEXTURE_2D,ue,B,ce[0].width,ce[0].height);for(let X=0,Y=ce.length;X<Y;X++)V=ce[X],me?C&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,V.width,V.height,U,$,V.data):n.texImage2D(t.TEXTURE_2D,X,B,V.width,V.height,0,U,$,V.data);T.generateMipmaps=!1}else me?(te&&n.texStorage2D(t.TEXTURE_2D,ue,B,j.width,j.height),C&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,U,$,j.data)):n.texImage2D(t.TEXTURE_2D,0,B,j.width,j.height,0,U,$,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){me&&te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,B,ce[0].width,ce[0].height,j.depth);for(let X=0,Y=ce.length;X<Y;X++)if(V=ce[X],T.format!==ni)if(U!==null)if(me){if(C)if(T.layerUpdates.size>0){const ie=sg(V.width,V.height,T.format,T.type);for(const fe of T.layerUpdates){const Oe=V.data.subarray(fe*ie/V.data.BYTES_PER_ELEMENT,(fe+1)*ie/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,fe,V.width,V.height,1,U,Oe,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,V.width,V.height,j.depth,U,V.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,B,V.width,V.height,j.depth,0,V.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?C&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,V.width,V.height,j.depth,U,$,V.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,B,V.width,V.height,j.depth,0,U,$,V.data)}else{me&&te&&n.texStorage2D(t.TEXTURE_2D,ue,B,ce[0].width,ce[0].height);for(let X=0,Y=ce.length;X<Y;X++)V=ce[X],T.format!==ni?U!==null?me?C&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,V.width,V.height,U,V.data):n.compressedTexImage2D(t.TEXTURE_2D,X,B,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?C&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,V.width,V.height,U,$,V.data):n.texImage2D(t.TEXTURE_2D,X,B,V.width,V.height,0,U,$,V.data)}else if(T.isDataArrayTexture)if(me){if(te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,B,j.width,j.height,j.depth),C)if(T.layerUpdates.size>0){const X=sg(j.width,j.height,T.format,T.type);for(const Y of T.layerUpdates){const ie=j.data.subarray(Y*X/j.data.BYTES_PER_ELEMENT,(Y+1)*X/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,j.width,j.height,1,U,$,ie)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,U,$,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,B,j.width,j.height,j.depth,0,U,$,j.data);else if(T.isData3DTexture)me?(te&&n.texStorage3D(t.TEXTURE_3D,ue,B,j.width,j.height,j.depth),C&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,U,$,j.data)):n.texImage3D(t.TEXTURE_3D,0,B,j.width,j.height,j.depth,0,U,$,j.data);else if(T.isFramebufferTexture){if(te)if(me)n.texStorage2D(t.TEXTURE_2D,ue,B,j.width,j.height);else{let X=j.width,Y=j.height;for(let ie=0;ie<ue;ie++)n.texImage2D(t.TEXTURE_2D,ie,B,X,Y,0,U,$,null),X>>=1,Y>>=1}}else if(ce.length>0){if(me&&te){const X=Ie(ce[0]);n.texStorage2D(t.TEXTURE_2D,ue,B,X.width,X.height)}for(let X=0,Y=ce.length;X<Y;X++)V=ce[X],me?C&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,U,$,V):n.texImage2D(t.TEXTURE_2D,X,B,U,$,V);T.generateMipmaps=!1}else if(me){if(te){const X=Ie(j);n.texStorage2D(t.TEXTURE_2D,ue,B,X.width,X.height)}C&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,U,$,j)}else n.texImage2D(t.TEXTURE_2D,0,B,U,$,j);v(T)&&h(xe),ke.__version=ve.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Q(N,T,oe){if(T.image.length!==6)return;const xe=ge(N,T),Se=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+oe);const ve=i.get(Se);if(Se.version!==ve.__version||xe===!0){n.activeTexture(t.TEXTURE0+oe);const ke=dt.getPrimaries(dt.workingColorSpace),Le=T.colorSpace===Mr?null:dt.getPrimaries(T.colorSpace),O=T.colorSpace===Mr||ke===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,j=T.image[0]&&T.image[0].isDataTexture,U=[];for(let Y=0;Y<6;Y++)!ee&&!j?U[Y]=M(T.image[Y],!0,r.maxCubemapSize):U[Y]=j?T.image[Y].image:T.image[Y],U[Y]=Fe(T,U[Y]);const $=U[0],B=s.convert(T.format,T.colorSpace),V=s.convert(T.type),ce=m(T.internalFormat,B,V,T.colorSpace),me=T.isVideoTexture!==!0,te=ve.__version===void 0||xe===!0,C=Se.dataReady;let ue=S(T,$);J(t.TEXTURE_CUBE_MAP,T);let X;if(ee){me&&te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,ce,$.width,$.height);for(let Y=0;Y<6;Y++){X=U[Y].mipmaps;for(let ie=0;ie<X.length;ie++){const fe=X[ie];T.format!==ni?B!==null?me?C&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,fe.width,fe.height,B,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,fe.width,fe.height,B,V,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,ce,fe.width,fe.height,0,B,V,fe.data)}}}else{if(X=T.mipmaps,me&&te){X.length>0&&ue++;const Y=Ie(U[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,ce,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(j){me?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,U[Y].width,U[Y].height,B,V,U[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ce,U[Y].width,U[Y].height,0,B,V,U[Y].data);for(let ie=0;ie<X.length;ie++){const Oe=X[ie].image[Y].image;me?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,Oe.width,Oe.height,B,V,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,ce,Oe.width,Oe.height,0,B,V,Oe.data)}}else{me?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,B,V,U[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ce,B,V,U[Y]);for(let ie=0;ie<X.length;ie++){const fe=X[ie];me?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,B,V,fe.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,ce,B,V,fe.image[Y])}}}v(T)&&h(t.TEXTURE_CUBE_MAP),ve.__version=Se.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function re(N,T,oe,xe,Se,ve){const ke=s.convert(oe.format,oe.colorSpace),Le=s.convert(oe.type),O=m(oe.internalFormat,ke,Le,oe.colorSpace);if(!i.get(T).__hasExternalTextures){const j=Math.max(1,T.width>>ve),U=Math.max(1,T.height>>ve);Se===t.TEXTURE_3D||Se===t.TEXTURE_2D_ARRAY?n.texImage3D(Se,ve,O,j,U,T.depth,0,ke,Le,null):n.texImage2D(Se,ve,O,j,U,0,ke,Le,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Ee(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,Se,i.get(oe).__webglTexture,0,Te(T)):(Se===t.TEXTURE_2D||Se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,xe,Se,i.get(oe).__webglTexture,ve),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(N,T,oe){if(t.bindRenderbuffer(t.RENDERBUFFER,N),T.depthBuffer){const xe=T.depthTexture,Se=xe&&xe.isDepthTexture?xe.type:null,ve=x(T.stencilBuffer,Se),ke=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=Te(T);Ee(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ve,T.width,T.height):oe?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ve,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ke,t.RENDERBUFFER,N)}else{const xe=T.textures;for(let Se=0;Se<xe.length;Se++){const ve=xe[Se],ke=s.convert(ve.format,ve.colorSpace),Le=s.convert(ve.type),O=m(ve.internalFormat,ke,Le,ve.colorSpace),ee=Te(T);oe&&Ee(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,O,T.width,T.height):Ee(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,O,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,O,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const xe=i.get(T.depthTexture).__webglTexture,Se=Te(T);if(T.depthTexture.format===po)Ee(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(T.depthTexture.format===fs)Ee(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Me(N){const T=i.get(N),oe=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const xe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",Se)};xe.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=xe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");ae(T.__webglFramebuffer,N)}else if(oe){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=t.createRenderbuffer(),le(T.__webglDepthbuffer[xe],N,!1);else{const Se=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[xe];t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,ve)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),le(T.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,Se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(N,T,oe){const xe=i.get(N);T!==void 0&&re(xe.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),oe!==void 0&&Me(N)}function Ue(N){const T=N.texture,oe=i.get(N),xe=i.get(T);N.addEventListener("dispose",A);const Se=N.textures,ve=N.isWebGLCubeRenderTarget===!0,ke=Se.length>1;if(ke||(xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture()),xe.__version=T.version,o.memory.textures++),ve){oe.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){oe.__webglFramebuffer[Le]=[];for(let O=0;O<T.mipmaps.length;O++)oe.__webglFramebuffer[Le][O]=t.createFramebuffer()}else oe.__webglFramebuffer[Le]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)oe.__webglFramebuffer[Le]=t.createFramebuffer()}else oe.__webglFramebuffer=t.createFramebuffer();if(ke)for(let Le=0,O=Se.length;Le<O;Le++){const ee=i.get(Se[Le]);ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&Ee(N)===!1){oe.__webglMultisampledFramebuffer=t.createFramebuffer(),oe.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const O=Se[Le];oe.__webglColorRenderbuffer[Le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]);const ee=s.convert(O.format,O.colorSpace),j=s.convert(O.type),U=m(O.internalFormat,ee,j,O.colorSpace,N.isXRRenderTarget===!0),$=Te(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,$,U,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Le])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(oe.__webglDepthRenderbuffer=t.createRenderbuffer(),le(oe.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ve){n.bindTexture(t.TEXTURE_CUBE_MAP,xe.__webglTexture),J(t.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)re(oe.__webglFramebuffer[Le][O],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,O);else re(oe.__webglFramebuffer[Le],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);v(T)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let Le=0,O=Se.length;Le<O;Le++){const ee=Se[Le],j=i.get(ee);n.bindTexture(t.TEXTURE_2D,j.__webglTexture),J(t.TEXTURE_2D,ee),re(oe.__webglFramebuffer,N,ee,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,0),v(ee)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let Le=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Le,xe.__webglTexture),J(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)re(oe.__webglFramebuffer[O],N,T,t.COLOR_ATTACHMENT0,Le,O);else re(oe.__webglFramebuffer,N,T,t.COLOR_ATTACHMENT0,Le,0);v(T)&&h(Le),n.unbindTexture()}N.depthBuffer&&Me(N)}function He(N){const T=N.textures;for(let oe=0,xe=T.length;oe<xe;oe++){const Se=T[oe];if(v(Se)){const ve=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ke=i.get(Se).__webglTexture;n.bindTexture(ve,ke),h(ve),n.unbindTexture()}}}const pe=[],D=[];function Ae(N){if(N.samples>0){if(Ee(N)===!1){const T=N.textures,oe=N.width,xe=N.height;let Se=t.COLOR_BUFFER_BIT;const ve=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(N),Le=T.length>1;if(Le)for(let O=0;O<T.length;O++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let O=0;O<T.length;O++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=t.STENCIL_BUFFER_BIT)),Le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[O]);const ee=i.get(T[O]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,oe,xe,0,0,oe,xe,Se,t.NEAREST),l===!0&&(pe.length=0,D.length=0,pe.push(t.COLOR_ATTACHMENT0+O),N.depthBuffer&&N.resolveDepthBuffer===!1&&(pe.push(ve),D.push(ve),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Le)for(let O=0;O<T.length;O++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.RENDERBUFFER,ke.__webglColorRenderbuffer[O]);const ee=i.get(T[O]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Te(N){return Math.min(r.maxSamples,N.samples)}function Ee(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _e(N){const T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function Fe(N,T){const oe=N.colorSpace,xe=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||oe!==rr&&oe!==Mr&&(dt.getTransfer(oe)===St?(xe!==ni||Se!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),T}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=Z,this.rebindTextures=we,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ee}function HA(t,e){function n(i,r=Mr){let s;const o=dt.getTransfer(r);if(i===Ui)return t.UNSIGNED_BYTE;if(i===_p)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ay)return t.BYTE;if(i===ly)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===yp)return t.INT;if(i===ds)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Ln)return t.HALF_FLOAT;if(i===uy)return t.ALPHA;if(i===dy)return t.RGB;if(i===ni)return t.RGBA;if(i===hy)return t.LUMINANCE;if(i===fy)return t.LUMINANCE_ALPHA;if(i===po)return t.DEPTH_COMPONENT;if(i===fs)return t.DEPTH_STENCIL;if(i===py)return t.RED;if(i===Mp)return t.RED_INTEGER;if(i===my)return t.RG;if(i===wp)return t.RG_INTEGER;if(i===Ep)return t.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kh||i===Bh||i===Hh||i===Vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gh||i===jh||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gh||i===jh)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xh||i===Yh||i===qh||i===Kh||i===Zh||i===Jh||i===Qh||i===$h||i===ef||i===tf||i===nf||i===rf||i===sf||i===of)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$h)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ef)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===af||i===lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gy||i===cf||i===uf||i===df)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class VA extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GA={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const v=n.getJointPose(M,i),h=this._getHandJoint(c,M);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&f>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const jA=`
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

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vt({vertexShader:jA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new et(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends ys{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,y=null;const M=new XA,v=n.getContextAttributes();let h=null,m=null;const x=[],S=[],L=new be;let A=null;const E=new Vn;E.layers.enable(1),E.viewport=new xt;const b=new Vn;b.layers.enable(2),b.viewport=new xt;const G=[E,b],_=new VA;_.layers.enable(1),_.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=x[Q];return re===void 0&&(re=new _d,x[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=x[Q];return re===void 0&&(re=new _d,x[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=x[Q];return re===void 0&&(re=new _d,x[Q]=re),re.getHandSpace()};function R(Q){const re=S.indexOf(Q.inputSource);if(re===-1)return;const le=x[re];le!==void 0&&(le.update(Q.inputSource,Q.frame,c||o),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let Q=0;Q<x.length;Q++){const re=S[Q];re!==null&&(S[Q]=null,x[Q].disconnect(re))}w=null,W=null,M.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,m=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new ai(p.framebufferWidth,p.framebufferHeight,{format:ni,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let re=null,le=null,ae=null;v.depth&&(ae=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=v.stencil?fs:po,le=v.stencil?hs:ds);const Me={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new ai(f.textureWidth,f.textureHeight,{format:ni,type:Ui,depthTexture:new Np(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(Q){for(let re=0;re<Q.removed.length;re++){const le=Q.removed[re],ae=S.indexOf(le);ae>=0&&(S[ae]=null,x[ae].disconnect(le))}for(let re=0;re<Q.added.length;re++){const le=Q.added[re];let ae=S.indexOf(le);if(ae===-1){for(let we=0;we<x.length;we++)if(we>=S.length){S.push(le),ae=we;break}else if(S[we]===null){S[we]=le,ae=we;break}if(ae===-1)break}const Me=x[ae];Me&&Me.connect(le)}}const F=new k,Z=new k;function I(Q,re,le){F.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const ae=F.distanceTo(Z),Me=re.projectionMatrix.elements,we=le.projectionMatrix.elements,Ue=Me[14]/(Me[10]-1),He=Me[14]/(Me[10]+1),pe=(Me[9]+1)/Me[5],D=(Me[9]-1)/Me[5],Ae=(Me[8]-1)/Me[0],Te=(we[8]+1)/we[0],Ee=Ue*Ae,_e=Ue*Te,Fe=ae/(-Ae+Te),Ie=Fe*-Ae;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ie),Q.translateZ(Fe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const N=Ue+Fe,T=He+Fe,oe=Ee-Ie,xe=_e+(ae-Ie),Se=pe*He/T*N,ve=D*He/T*N;Q.projectionMatrix.makePerspective(oe,xe,Se,ve,N,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function q(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let re=Q.near,le=Q.far;M.texture!==null&&(M.depthNear>0&&(re=M.depthNear),M.depthFar>0&&(le=M.depthFar)),_.near=b.near=E.near=re,_.far=b.far=E.far=le,(w!==_.near||W!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,W=_.far);const ae=Q.parent,Me=_.cameras;q(_,ae);for(let we=0;we<Me.length;we++)q(Me[we],ae);Me.length===2?I(_,E,b):_.projectionMatrix.copy(E.projectionMatrix),K(Q,_,ae)};function K(Q,re,le){le===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let J=null;function ge(Q,re){if(u=re.getViewerPose(c||o),y=re,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ae=!1;le.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let we=0;we<le.length;we++){const Ue=le[we];let He=null;if(p!==null)He=p.getViewport(Ue);else{const D=d.getViewSubImage(f,Ue);He=D.viewport,we===0&&(e.setRenderTargetTextures(m,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(m))}let pe=G[we];pe===void 0&&(pe=new Vn,pe.layers.enable(we),pe.viewport=new xt,G[we]=pe),pe.matrix.fromArray(Ue.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ue.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(He.x,He.y,He.width,He.height),we===0&&(_.matrix.copy(pe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(pe)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const we=d.getDepthInformation(le[0]);we&&we.isValid&&we.texture&&M.init(e,we,r.renderState)}}for(let le=0;le<x.length;le++){const ae=S[le],Me=x[le];ae!==null&&Me!==void 0&&Me.update(ae,re,c||o)}J&&J(Q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),y=null}const Ce=new by;Ce.setAnimationLoop(ge),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const Kr=new wi,qA=new lt;function KA(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,Ey(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,m,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(v,h):h.isMeshToonMaterial?(s(v,h),d(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h)):h.isMeshStandardMaterial?(s(v,h),f(v,h),h.isMeshPhysicalMaterial&&p(v,h,S)):h.isMeshMatcapMaterial?(s(v,h),y(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),M(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,m,x):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Sn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Sn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const m=e.get(h),x=m.envMap,S=m.envMapRotation;x&&(v.envMap.value=x,Kr.copy(S),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),v.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(Kr)),v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,m,x){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*m,v.scale.value=x*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function d(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function f(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,m){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,h){h.matcap&&(v.matcap.value=h.matcap)}function M(v,h){const m=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(y(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",v));const L=x.program;i.updateUBOMapping(m,L);const A=e.render.frame;s[m.id]!==A&&(f(m),s[m.id]=A)}function u(m){const x=d();m.__bindingPointIndex=x;const S=t.createBuffer(),L=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const x=r[m.id],S=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let G=0,_=b.length;G<_;G++){const w=b[G];if(p(w,A,G,L)===!0){const W=w.__offset,R=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let H=0;H<R.length;H++){const F=R[H],Z=M(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,W+z,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,S,L){const A=m.value,E=x+"_"+S;if(L[E]===void 0)return typeof A=="number"||typeof A=="boolean"?L[E]=A:L[E]=A.clone(),!0;{const b=L[E];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return L[E]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function y(m){const x=m.uniforms;let S=0;const L=16;for(let E=0,b=x.length;E<b;E++){const G=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,w=G.length;_<w;_++){const W=G[_],R=Array.isArray(W.value)?W.value:[W.value];for(let z=0,H=R.length;z<H;z++){const F=R[z],Z=M(F),I=S%L,q=I%Z.boundary,K=I+q;S+=q,K!==0&&L-K<Z.storage&&(S+=L-K),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Z.storage}}}const A=S%L;return A>0&&(S+=L-A),m.__size=S,m.__cache={},this}function M(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function v(m){const x=m.target;x.removeEventListener("dispose",v);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class JA{constructor(e={}){const{canvas:n=zM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),y=new Int32Array(4);let M=null,v=null;const h=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Ir,this.toneMappingExposure=1;const x=this;let S=!1,L=0,A=0,E=null,b=-1,G=null;const _=new xt,w=new xt;let W=null;const R=new Qe(0);let z=0,H=n.width,F=n.height,Z=1,I=null,q=null;const K=new xt(0,0,H,F),J=new xt(0,0,H,F);let ge=!1;const Ce=new Pp;let Q=!1,re=!1;const le=new lt,ae=new lt,Me=new k,we=new xt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function pe(){return E===null?Z:1}let D=i;function Ae(P,ne){return n.getContext(P,ne)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vp}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",fe,!1),D===null){const ne="webgl2";if(D=Ae(ne,P),D===null)throw Ae(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Te,Ee,_e,Fe,Ie,N,T,oe,xe,Se,ve,ke,Le,O,ee,j,U,$,B,V,ce,me,te,C;function ue(){Te=new nT(D),Te.init(),me=new HA(D,Te),Ee=new Z2(D,Te,e,me),_e=new FA(D),Ee.reverseDepthBuffer&&_e.buffers.depth.setReversed(!0),Fe=new sT(D),Ie=new wA,N=new BA(D,Te,_e,Ie,Ee,me,Fe),T=new Q2(x),oe=new tT(x),xe=new hw(D),te=new q2(D,xe),Se=new iT(D,xe,Fe,te),ve=new aT(D,Se,xe,Fe),B=new oT(D,Ee,N),j=new J2(Ie),ke=new MA(x,T,oe,Te,Ee,te,j),Le=new KA(x,Ie),O=new TA,ee=new LA(Te),$=new Y2(x,T,oe,_e,ve,f,l),U=new zA(x,ve,Ee),C=new ZA(D,Fe,Ee,_e),V=new K2(D,Te,Fe),ce=new rT(D,Te,Fe),Fe.programs=ke.programs,x.capabilities=Ee,x.extensions=Te,x.properties=Ie,x.renderLists=O,x.shadowMap=U,x.state=_e,x.info=Fe}ue();const X=new YA(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=Te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(H,F,!1))},this.getSize=function(P){return P.set(H,F)},this.setSize=function(P,ne,de=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,F=ne,n.width=Math.floor(P*Z),n.height=Math.floor(ne*Z),de===!0&&(n.style.width=P+"px",n.style.height=ne+"px"),this.setViewport(0,0,P,ne)},this.getDrawingBufferSize=function(P){return P.set(H*Z,F*Z).floor()},this.setDrawingBufferSize=function(P,ne,de){H=P,F=ne,Z=de,n.width=Math.floor(P*de),n.height=Math.floor(ne*de),this.setViewport(0,0,P,ne)},this.getCurrentViewport=function(P){return P.copy(_)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,ne,de,he){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,ne,de,he),_e.viewport(_.copy(K).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(J)},this.setScissor=function(P,ne,de,he){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,ne,de,he),_e.scissor(w.copy(J).multiplyScalar(Z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){_e.setScissorTest(ge=P)},this.setOpaqueSort=function(P){I=P},this.setTransparentSort=function(P){q=P},this.getClearColor=function(P){return P.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(P=!0,ne=!0,de=!0){let he=0;if(P){let se=!1;if(E!==null){const De=E.texture.format;se=De===Ep||De===wp||De===Mp}if(se){const De=E.texture.type,Be=De===Ui||De===ds||De===Ia||De===hs||De===_p||De===Sp,Ge=$.getClearColor(),je=$.getClearAlpha(),Je=Ge.r,$e=Ge.g,Xe=Ge.b;Be?(p[0]=Je,p[1]=$e,p[2]=Xe,p[3]=je,D.clearBufferuiv(D.COLOR,0,p)):(y[0]=Je,y[1]=$e,y[2]=Xe,y[3]=je,D.clearBufferiv(D.COLOR,0,y))}else he|=D.COLOR_BUFFER_BIT}ne&&(he|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),de&&(he|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),O.dispose(),ee.dispose(),Ie.dispose(),T.dispose(),oe.dispose(),ve.dispose(),te.dispose(),C.dispose(),ke.dispose(),X.dispose(),X.removeEventListener("sessionstart",ut),X.removeEventListener("sessionend",pt),_t.stop()};function Y(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=Fe.autoReset,ne=U.enabled,de=U.autoUpdate,he=U.needsUpdate,se=U.type;ue(),Fe.autoReset=P,U.enabled=ne,U.autoUpdate=de,U.needsUpdate=he,U.type=se}function fe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Oe(P){const ne=P.target;ne.removeEventListener("dispose",Oe),Ke(ne)}function Ke(P){at(P),Ie.remove(P)}function at(P){const ne=Ie.get(P).programs;ne!==void 0&&(ne.forEach(function(de){ke.releaseProgram(de)}),P.isShaderMaterial&&ke.releaseShaderCache(P))}this.renderBufferDirect=function(P,ne,de,he,se,De){ne===null&&(ne=Ue);const Be=se.isMesh&&se.matrixWorld.determinant()<0,Ge=Xy(P,ne,de,he,se);_e.setMaterial(he,Be);let je=de.index,Je=1;if(he.wireframe===!0){if(je=Se.getWireframeAttribute(de),je===void 0)return;Je=2}const $e=de.drawRange,Xe=de.attributes.position;let mt=$e.start*Je,wt=($e.start+$e.count)*Je;De!==null&&(mt=Math.max(mt,De.start*Je),wt=Math.min(wt,(De.start+De.count)*Je)),je!==null?(mt=Math.max(mt,0),wt=Math.min(wt,je.count)):Xe!=null&&(mt=Math.max(mt,0),wt=Math.min(wt,Xe.count));const Dt=wt-mt;if(Dt<0||Dt===1/0)return;te.setup(se,he,Ge,de,je);let Un,ht=V;if(je!==null&&(Un=xe.get(je),ht=ce,ht.setIndex(Un)),se.isMesh)he.wireframe===!0?(_e.setLineWidth(he.wireframeLinewidth*pe()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(se.isLine){let Ye=he.linewidth;Ye===void 0&&(Ye=1),_e.setLineWidth(Ye*pe()),se.isLineSegments?ht.setMode(D.LINES):se.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else se.isPoints?ht.setMode(D.POINTS):se.isSprite&&ht.setMode(D.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)ht.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Ye=se._multiDrawStarts,en=se._multiDrawCounts,ft=se._multiDrawCount,li=je?xe.get(je).bytesPerElement:1,Ms=Ie.get(he).currentProgram.getUniforms();for(let zn=0;zn<ft;zn++)Ms.setValue(D,"_gl_DrawID",zn),ht.render(Ye[zn]/li,en[zn])}else if(se.isInstancedMesh)ht.renderInstances(mt,Dt,se.count);else if(de.isInstancedBufferGeometry){const Ye=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,en=Math.min(de.instanceCount,Ye);ht.renderInstances(mt,Dt,en)}else ht.render(mt,Dt)};function Ze(P,ne,de){P.transparent===!0&&P.side===gn&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,Ss(P,ne,de),P.side=Or,P.needsUpdate=!0,Ss(P,ne,de),P.side=gn):Ss(P,ne,de)}this.compile=function(P,ne,de=null){de===null&&(de=P),v=ee.get(de),v.init(ne),m.push(v),de.traverseVisible(function(se){se.isLight&&se.layers.test(ne.layers)&&(v.pushLight(se),se.castShadow&&v.pushShadow(se))}),P!==de&&P.traverseVisible(function(se){se.isLight&&se.layers.test(ne.layers)&&(v.pushLight(se),se.castShadow&&v.pushShadow(se))}),v.setupLights();const he=new Set;return P.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const De=se.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ge=De[Be];Ze(Ge,de,se),he.add(Ge)}else Ze(De,de,se),he.add(De)}),m.pop(),v=null,he},this.compileAsync=function(P,ne,de=null){const he=this.compile(P,ne,de);return new Promise(se=>{function De(){if(he.forEach(function(Be){Ie.get(Be).currentProgram.isReady()&&he.delete(Be)}),he.size===0){se(P);return}setTimeout(De,10)}Te.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let qe=null;function st(P){qe&&qe(P)}function ut(){_t.stop()}function pt(){_t.start()}const _t=new by;_t.setAnimationLoop(st),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(P){qe=P,X.setAnimationLoop(P),P===null?_t.stop():_t.start()},X.addEventListener("sessionstart",ut),X.addEventListener("sessionend",pt),this.render=function(P,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(ne),ne=X.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,ne,E),v=ee.get(P,m.length),v.init(ne),m.push(v),ae.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Ce.setFromProjectionMatrix(ae),re=this.localClippingEnabled,Q=j.init(this.clippingPlanes,re),M=O.get(P,h.length),M.init(),h.push(M),X.enabled===!0&&X.isPresenting===!0){const De=x.xr.getDepthSensingMesh();De!==null&&$t(De,ne,-1/0,x.sortObjects)}$t(P,ne,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(I,q),He=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,He&&$.addToRenderList(M,P),this.info.render.frame++,Q===!0&&j.beginShadows();const de=v.state.shadowsArray;U.render(de,P,ne),Q===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=M.opaque,se=M.transmissive;if(v.setupLights(),ne.isArrayCamera){const De=ne.cameras;if(se.length>0)for(let Be=0,Ge=De.length;Be<Ge;Be++){const je=De[Be];Kn(he,se,P,je)}He&&$.render(P);for(let Be=0,Ge=De.length;Be<Ge;Be++){const je=De[Be];Oi(M,P,je,je.viewport)}}else se.length>0&&Kn(he,se,P,ne),He&&$.render(P),Oi(M,P,ne);E!==null&&(N.updateMultisampleRenderTarget(E),N.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(x,P,ne),te.resetDefaultState(),b=-1,G=null,m.pop(),m.length>0?(v=m[m.length-1],Q===!0&&j.setGlobalState(x.clippingPlanes,v.state.camera)):v=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function $t(P,ne,de,he){if(P.visible===!1)return;if(P.layers.test(ne.layers)){if(P.isGroup)de=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ne);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ce.intersectsSprite(P)){he&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ae);const Be=ve.update(P),Ge=P.material;Ge.visible&&M.push(P,Be,Ge,de,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ce.intersectsObject(P))){const Be=ve.update(P),Ge=P.material;if(he&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),we.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),we.copy(Be.boundingSphere.center)),we.applyMatrix4(P.matrixWorld).applyMatrix4(ae)),Array.isArray(Ge)){const je=Be.groups;for(let Je=0,$e=je.length;Je<$e;Je++){const Xe=je[Je],mt=Ge[Xe.materialIndex];mt&&mt.visible&&M.push(P,Be,mt,de,we.z,Xe)}}else Ge.visible&&M.push(P,Be,Ge,de,we.z,null)}}const De=P.children;for(let Be=0,Ge=De.length;Be<Ge;Be++)$t(De[Be],ne,de,he)}function Oi(P,ne,de,he){const se=P.opaque,De=P.transmissive,Be=P.transparent;v.setupLightsView(de),Q===!0&&j.setGlobalState(x.clippingPlanes,de),he&&_e.viewport(_.copy(he)),se.length>0&&Hr(se,ne,de),De.length>0&&Hr(De,ne,de),Be.length>0&&Hr(Be,ne,de),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Kn(P,ne,de,he){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[he.id]===void 0&&(v.state.transmissionRenderTarget[he.id]=new ai(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Ln:Ui,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const De=v.state.transmissionRenderTarget[he.id],Be=he.viewport||_;De.setSize(Be.z,Be.w);const Ge=x.getRenderTarget();x.setRenderTarget(De),x.getClearColor(R),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),He&&$.render(de);const je=x.toneMapping;x.toneMapping=Ir;const Je=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),v.setupLightsView(he),Q===!0&&j.setGlobalState(x.clippingPlanes,he),Hr(P,de,he),N.updateMultisampleRenderTarget(De),N.updateRenderTargetMipmap(De),Te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Xe=0,mt=ne.length;Xe<mt;Xe++){const wt=ne[Xe],Dt=wt.object,Un=wt.geometry,ht=wt.material,Ye=wt.group;if(ht.side===gn&&Dt.layers.test(he.layers)){const en=ht.side;ht.side=Sn,ht.needsUpdate=!0,Ya(Dt,de,he,Un,ht,Ye),ht.side=en,ht.needsUpdate=!0,$e=!0}}$e===!0&&(N.updateMultisampleRenderTarget(De),N.updateRenderTargetMipmap(De))}x.setRenderTarget(Ge),x.setClearColor(R,z),Je!==void 0&&(he.viewport=Je),x.toneMapping=je}function Hr(P,ne,de){const he=ne.isScene===!0?ne.overrideMaterial:null;for(let se=0,De=P.length;se<De;se++){const Be=P[se],Ge=Be.object,je=Be.geometry,Je=he===null?Be.material:he,$e=Be.group;Ge.layers.test(de.layers)&&Ya(Ge,ne,de,je,Je,$e)}}function Ya(P,ne,de,he,se,De){P.onBeforeRender(x,ne,de,he,se,De),P.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(x,ne,de,he,P,De),se.transparent===!0&&se.side===gn&&se.forceSinglePass===!1?(se.side=Sn,se.needsUpdate=!0,x.renderBufferDirect(de,ne,he,se,P,De),se.side=Or,se.needsUpdate=!0,x.renderBufferDirect(de,ne,he,se,P,De),se.side=gn):x.renderBufferDirect(de,ne,he,se,P,De),P.onAfterRender(x,ne,de,he,se,De)}function Ss(P,ne,de){ne.isScene!==!0&&(ne=Ue);const he=Ie.get(P),se=v.state.lights,De=v.state.shadowsArray,Be=se.state.version,Ge=ke.getParameters(P,se.state,De,ne,de),je=ke.getProgramCacheKey(Ge);let Je=he.programs;he.environment=P.isMeshStandardMaterial?ne.environment:null,he.fog=ne.fog,he.envMap=(P.isMeshStandardMaterial?oe:T).get(P.envMap||he.environment),he.envMapRotation=he.environment!==null&&P.envMap===null?ne.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",Oe),Je=new Map,he.programs=Je);let $e=Je.get(je);if($e!==void 0){if(he.currentProgram===$e&&he.lightsStateVersion===Be)return qp(P,Ge),$e}else Ge.uniforms=ke.getUniforms(P),P.onBeforeCompile(Ge,x),$e=ke.acquireProgram(Ge,je),Je.set(je,$e),he.uniforms=Ge.uniforms;const Xe=he.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=j.uniform),qp(P,Ge),he.needsLights=qy(P),he.lightsStateVersion=Be,he.needsLights&&(Xe.ambientLightColor.value=se.state.ambient,Xe.lightProbe.value=se.state.probe,Xe.directionalLights.value=se.state.directional,Xe.directionalLightShadows.value=se.state.directionalShadow,Xe.spotLights.value=se.state.spot,Xe.spotLightShadows.value=se.state.spotShadow,Xe.rectAreaLights.value=se.state.rectArea,Xe.ltc_1.value=se.state.rectAreaLTC1,Xe.ltc_2.value=se.state.rectAreaLTC2,Xe.pointLights.value=se.state.point,Xe.pointLightShadows.value=se.state.pointShadow,Xe.hemisphereLights.value=se.state.hemi,Xe.directionalShadowMap.value=se.state.directionalShadowMap,Xe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Xe.spotShadowMap.value=se.state.spotShadowMap,Xe.spotLightMatrix.value=se.state.spotLightMatrix,Xe.spotLightMap.value=se.state.spotLightMap,Xe.pointShadowMap.value=se.state.pointShadowMap,Xe.pointShadowMatrix.value=se.state.pointShadowMatrix),he.currentProgram=$e,he.uniformsList=null,$e}function Yp(P){if(P.uniformsList===null){const ne=P.currentProgram.getUniforms();P.uniformsList=uc.seqWithValue(ne.seq,P.uniforms)}return P.uniformsList}function qp(P,ne){const de=Ie.get(P);de.outputColorSpace=ne.outputColorSpace,de.batching=ne.batching,de.batchingColor=ne.batchingColor,de.instancing=ne.instancing,de.instancingColor=ne.instancingColor,de.instancingMorph=ne.instancingMorph,de.skinning=ne.skinning,de.morphTargets=ne.morphTargets,de.morphNormals=ne.morphNormals,de.morphColors=ne.morphColors,de.morphTargetsCount=ne.morphTargetsCount,de.numClippingPlanes=ne.numClippingPlanes,de.numIntersection=ne.numClipIntersection,de.vertexAlphas=ne.vertexAlphas,de.vertexTangents=ne.vertexTangents,de.toneMapping=ne.toneMapping}function Xy(P,ne,de,he,se){ne.isScene!==!0&&(ne=Ue),N.resetTextureUnits();const De=ne.fog,Be=he.isMeshStandardMaterial?ne.environment:null,Ge=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:rr,je=(he.isMeshStandardMaterial?oe:T).get(he.envMap||Be),Je=he.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,$e=!!de.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Xe=!!de.morphAttributes.position,mt=!!de.morphAttributes.normal,wt=!!de.morphAttributes.color;let Dt=Ir;he.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const Un=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ht=Un!==void 0?Un.length:0,Ye=Ie.get(he),en=v.state.lights;if(Q===!0&&(re===!0||P!==G)){const Zn=P===G&&he.id===b;j.setState(he,P,Zn)}let ft=!1;he.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==en.state.version||Ye.outputColorSpace!==Ge||se.isBatchedMesh&&Ye.batching===!1||!se.isBatchedMesh&&Ye.batching===!0||se.isBatchedMesh&&Ye.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ye.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ye.instancing===!1||!se.isInstancedMesh&&Ye.instancing===!0||se.isSkinnedMesh&&Ye.skinning===!1||!se.isSkinnedMesh&&Ye.skinning===!0||se.isInstancedMesh&&Ye.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ye.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ye.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ye.instancingMorph===!1&&se.morphTexture!==null||Ye.envMap!==je||he.fog===!0&&Ye.fog!==De||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==j.numPlanes||Ye.numIntersection!==j.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==$e||Ye.morphTargets!==Xe||Ye.morphNormals!==mt||Ye.morphColors!==wt||Ye.toneMapping!==Dt||Ye.morphTargetsCount!==ht)&&(ft=!0):(ft=!0,Ye.__version=he.version);let li=Ye.currentProgram;ft===!0&&(li=Ss(he,ne,se));let Ms=!1,zn=!1,hu=!1;const It=li.getUniforms(),sr=Ye.uniforms;if(_e.useProgram(li.program)&&(Ms=!0,zn=!0,hu=!0),he.id!==b&&(b=he.id,zn=!0),Ms||G!==P){Ee.reverseDepthBuffer?(le.copy(P.projectionMatrix),FM(le),kM(le),It.setValue(D,"projectionMatrix",le)):It.setValue(D,"projectionMatrix",P.projectionMatrix),It.setValue(D,"viewMatrix",P.matrixWorldInverse);const Zn=It.map.cameraPosition;Zn!==void 0&&Zn.setValue(D,Me.setFromMatrixPosition(P.matrixWorld)),Ee.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&It.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),G!==P&&(G=P,zn=!0,hu=!0)}if(se.isSkinnedMesh){It.setOptional(D,se,"bindMatrix"),It.setOptional(D,se,"bindMatrixInverse");const Zn=se.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),It.setValue(D,"boneTexture",Zn.boneTexture,N))}se.isBatchedMesh&&(It.setOptional(D,se,"batchingTexture"),It.setValue(D,"batchingTexture",se._matricesTexture,N),It.setOptional(D,se,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",se._indirectTexture,N),It.setOptional(D,se,"batchingColorTexture"),se._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",se._colorsTexture,N));const fu=de.morphAttributes;if((fu.position!==void 0||fu.normal!==void 0||fu.color!==void 0)&&B.update(se,de,li),(zn||Ye.receiveShadow!==se.receiveShadow)&&(Ye.receiveShadow=se.receiveShadow,It.setValue(D,"receiveShadow",se.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(sr.envMap.value=je,sr.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&ne.environment!==null&&(sr.envMapIntensity.value=ne.environmentIntensity),zn&&(It.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Yy(sr,hu),De&&he.fog===!0&&Le.refreshFogUniforms(sr,De),Le.refreshMaterialUniforms(sr,he,Z,F,v.state.transmissionRenderTarget[P.id]),uc.upload(D,Yp(Ye),sr,N)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(uc.upload(D,Yp(Ye),sr,N),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&It.setValue(D,"center",se.center),It.setValue(D,"modelViewMatrix",se.modelViewMatrix),It.setValue(D,"normalMatrix",se.normalMatrix),It.setValue(D,"modelMatrix",se.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Zn=he.uniformsGroups;for(let pu=0,Ky=Zn.length;pu<Ky;pu++){const Kp=Zn[pu];C.update(Kp,li),C.bind(Kp,li)}}return li}function Yy(P,ne){P.ambientLightColor.needsUpdate=ne,P.lightProbe.needsUpdate=ne,P.directionalLights.needsUpdate=ne,P.directionalLightShadows.needsUpdate=ne,P.pointLights.needsUpdate=ne,P.pointLightShadows.needsUpdate=ne,P.spotLights.needsUpdate=ne,P.spotLightShadows.needsUpdate=ne,P.rectAreaLights.needsUpdate=ne,P.hemisphereLights.needsUpdate=ne}function qy(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,ne,de){Ie.get(P.texture).__webglTexture=ne,Ie.get(P.depthTexture).__webglTexture=de;const he=Ie.get(P);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=de===void 0,he.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,ne){const de=Ie.get(P);de.__webglFramebuffer=ne,de.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(P,ne=0,de=0){E=P,L=ne,A=de;let he=!0,se=null,De=!1,Be=!1;if(P){const je=Ie.get(P);if(je.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(D.FRAMEBUFFER,null),he=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(je.__hasExternalTextures)N.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(je.__boundDepthTexture!==Xe){if(Xe!==null&&Ie.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Be=!0);const $e=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[ne])?se=$e[ne][de]:se=$e[ne],De=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?se=Ie.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?se=$e[de]:se=$e,_.copy(P.viewport),w.copy(P.scissor),W=P.scissorTest}else _.copy(K).multiplyScalar(Z).floor(),w.copy(J).multiplyScalar(Z).floor(),W=ge;if(_e.bindFramebuffer(D.FRAMEBUFFER,se)&&he&&_e.drawBuffers(P,se),_e.viewport(_),_e.scissor(w),_e.setScissorTest(W),De){const je=Ie.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+ne,je.__webglTexture,de)}else if(Be){const je=Ie.get(P.texture),Je=ne||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,de||0,Je)}b=-1},this.readRenderTargetPixels=function(P,ne,de,he,se,De,Be){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){_e.bindFramebuffer(D.FRAMEBUFFER,Ge);try{const je=P.texture,Je=je.format,$e=je.type;if(!Ee.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=P.width-he&&de>=0&&de<=P.height-se&&D.readPixels(ne,de,he,se,me.convert(Je),me.convert($e),De)}finally{const je=E!==null?Ie.get(E).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,ne,de,he,se,De,Be){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){const je=P.texture,Je=je.format,$e=je.type;if(!Ee.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ne>=0&&ne<=P.width-he&&de>=0&&de<=P.height-se){_e.bindFramebuffer(D.FRAMEBUFFER,Ge);const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,De.byteLength,D.STREAM_READ),D.readPixels(ne,de,he,se,me.convert(Je),me.convert($e),0);const mt=E!==null?Ie.get(E).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,mt);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await OM(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,De),D.deleteBuffer(Xe),D.deleteSync(wt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,ne=null,de=0){P.isTexture!==!0&&(cc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1]);const he=Math.pow(2,-de),se=Math.floor(P.image.width*he),De=Math.floor(P.image.height*he),Be=ne!==null?ne.x:0,Ge=ne!==null?ne.y:0;N.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,de,0,0,Be,Ge,se,De),_e.unbindTexture()},this.copyTextureToTexture=function(P,ne,de=null,he=null,se=0){P.isTexture!==!0&&(cc("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,P=arguments[1],ne=arguments[2],se=arguments[3]||0,de=null);let De,Be,Ge,je,Je,$e;de!==null?(De=de.max.x-de.min.x,Be=de.max.y-de.min.y,Ge=de.min.x,je=de.min.y):(De=P.image.width,Be=P.image.height,Ge=0,je=0),he!==null?(Je=he.x,$e=he.y):(Je=0,$e=0);const Xe=me.convert(ne.format),mt=me.convert(ne.type);N.setTexture2D(ne,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ne.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ne.unpackAlignment);const wt=D.getParameter(D.UNPACK_ROW_LENGTH),Dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),ht=D.getParameter(D.UNPACK_SKIP_ROWS),Ye=D.getParameter(D.UNPACK_SKIP_IMAGES),en=P.isCompressedTexture?P.mipmaps[se]:P.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,en.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Je,$e,De,Be,Xe,mt,en.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Je,$e,en.width,en.height,Xe,en.data):D.texSubImage2D(D.TEXTURE_2D,se,Je,$e,De,Be,Xe,mt,en),D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye),se===0&&ne.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(P,ne,de=null,he=null,se=0){P.isTexture!==!0&&(cc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),de=arguments[0]||null,he=arguments[1]||null,P=arguments[2],ne=arguments[3],se=arguments[4]||0);let De,Be,Ge,je,Je,$e,Xe,mt,wt;const Dt=P.isCompressedTexture?P.mipmaps[se]:P.image;de!==null?(De=de.max.x-de.min.x,Be=de.max.y-de.min.y,Ge=de.max.z-de.min.z,je=de.min.x,Je=de.min.y,$e=de.min.z):(De=Dt.width,Be=Dt.height,Ge=Dt.depth,je=0,Je=0,$e=0),he!==null?(Xe=he.x,mt=he.y,wt=he.z):(Xe=0,mt=0,wt=0);const Un=me.convert(ne.format),ht=me.convert(ne.type);let Ye;if(ne.isData3DTexture)N.setTexture3D(ne,0),Ye=D.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)N.setTexture2DArray(ne,0),Ye=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ne.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ne.unpackAlignment);const en=D.getParameter(D.UNPACK_ROW_LENGTH),ft=D.getParameter(D.UNPACK_IMAGE_HEIGHT),li=D.getParameter(D.UNPACK_SKIP_PIXELS),Ms=D.getParameter(D.UNPACK_SKIP_ROWS),zn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$e),P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ye,se,Xe,mt,wt,De,Be,Ge,Un,ht,Dt.data):ne.isCompressedArrayTexture?D.compressedTexSubImage3D(Ye,se,Xe,mt,wt,De,Be,Ge,Un,Dt.data):D.texSubImage3D(Ye,se,Xe,mt,wt,De,Be,Ge,Un,ht,Dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,en),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft),D.pixelStorei(D.UNPACK_SKIP_PIXELS,li),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ms),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zn),se===0&&ne.generateMipmaps&&D.generateMipmap(Ye),_e.unbindTexture()},this.initRenderTarget=function(P){Ie.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),_e.unbindTexture()},this.resetState=function(){L=0,A=0,E=null,_e.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ap?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===ou?"display-p3":"srgb"}}class Dy extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ip extends jt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,u=Jt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QA extends jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new be:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],s=[],o=[],a=new k,l=new lt;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Up extends zi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new be){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $A extends Up{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Il=new k,Sd=new zp,Md=new zp,wd=new zp;class eb extends zi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Il.subVectors(r[0],r[1]).add(r[0]),c=Il);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Il.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);M<1e-4&&(M=1),y<1e-4&&(y=M),v<1e-4&&(v=M),Sd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,y,M,v),Md.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,y,M,v),wd.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,y,M,v)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Md.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),wd.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Sd.calc(l),Md.calc(l),wd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function og(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function tb(t,e){const n=1-t;return n*n*e}function nb(t,e){return 2*(1-t)*t*e}function ib(t,e){return t*t*e}function pa(t,e,n,i){return tb(t,e)+nb(t,n)+ib(t,i)}function rb(t,e){const n=1-t;return n*n*n*e}function sb(t,e){const n=1-t;return 3*n*n*t*e}function ob(t,e){return 3*(1-t)*t*t*e}function ab(t,e){return t*t*t*e}function ma(t,e,n,i,r){return rb(t,e)+sb(t,n)+ob(t,i)+ab(t,r)}class Ny extends zi{constructor(e=new be,n=new be,i=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new be){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ma(e,r.x,s.x,o.x,a.x),ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lb extends zi{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ma(e,r.x,s.x,o.x,a.x),ma(e,r.y,s.y,o.y,a.y),ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Iy extends zi{constructor(e=new be,n=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new be){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new be){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cb extends zi{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uy extends zi{constructor(e=new be,n=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new be){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(pa(e,r.x,s.x,o.x),pa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ub extends zi{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(pa(e,r.x,s.x,o.x),pa(e,r.y,s.y,o.y),pa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zy extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new be){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(og(a,l.x,c.x,u.x,d.x),og(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new be().fromArray(r))}return this}}var mf=Object.freeze({__proto__:null,ArcCurve:$A,CatmullRomCurve3:eb,CubicBezierCurve:Ny,CubicBezierCurve3:lb,EllipseCurve:Up,LineCurve:Iy,LineCurve3:cb,QuadraticBezierCurve:Uy,QuadraticBezierCurve3:ub,SplineCurve:zy});class db extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new mf[r.type]().fromJSON(r))}return this}}class gf extends db{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Iy(this.currentPoint.clone(),new be(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Uy(this.currentPoint.clone(),new be(e,n),new be(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Ny(this.currentPoint.clone(),new be(e,n),new be(i,r),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new zy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Up(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class lu extends En{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let y=0;const M=[],v=i/2;let h=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(p,2));function m(){const S=new k,L=new k;let A=0;const E=(n-e)/i;for(let b=0;b<=s;b++){const G=[],_=b/s,w=_*(n-e)+e;for(let W=0;W<=r;W++){const R=W/r,z=R*l+a,H=Math.sin(z),F=Math.cos(z);L.x=w*H,L.y=-_*i+v,L.z=w*F,d.push(L.x,L.y,L.z),S.set(H,E,F).normalize(),f.push(S.x,S.y,S.z),p.push(R,1-_),G.push(y++)}M.push(G)}for(let b=0;b<r;b++)for(let G=0;G<s;G++){const _=M[G][b],w=M[G+1][b],W=M[G+1][b+1],R=M[G][b+1];e>0&&(u.push(_,w,R),A+=3),n>0&&(u.push(w,W,R),A+=3)}c.addGroup(h,A,0),h+=A}function x(S){const L=y,A=new be,E=new k;let b=0;const G=S===!0?e:n,_=S===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,v*_,0),f.push(0,_,0),p.push(.5,.5),y++;const w=y;for(let W=0;W<=r;W++){const z=W/r*l+a,H=Math.cos(z),F=Math.sin(z);E.x=G*F,E.y=v*_,E.z=G*H,d.push(E.x,E.y,E.z),f.push(0,_,0),A.x=H*.5+.5,A.y=F*.5*_+.5,p.push(A.x,A.y),y++}for(let W=0;W<r;W++){const R=L+W,z=w+W;S===!0?u.push(z,z+1,R):u.push(z+1,z,R),b+=3}c.addGroup(h,b,S===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Op extends lu{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Op(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fp extends En{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new k,S=new k,L=new k;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],S),p(n[A+2],L),l(x,S,L,m)}function l(m,x,S,L){const A=L+1,E=[];for(let b=0;b<=A;b++){E[b]=[];const G=m.clone().lerp(S,b/A),_=x.clone().lerp(S,b/A),w=A-b;for(let W=0;W<=w;W++)W===0&&b===A?E[b][W]=G:E[b][W]=G.clone().lerp(_,W/w)}for(let b=0;b<A;b++)for(let G=0;G<2*(A-b)-1;G++){const _=Math.floor(G/2);G%2===0?(f(E[b][_+1]),f(E[b+1][_]),f(E[b][_])):(f(E[b][_+1]),f(E[b+1][_+1]),f(E[b+1][_]))}}function c(m){const x=new k;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const m=new k;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const S=v(m)/2/Math.PI+.5,L=h(m)/Math.PI+.5;o.push(S,1-L)}y(),d()}function d(){for(let m=0;m<o.length;m+=6){const x=o[m+0],S=o[m+2],L=o[m+4],A=Math.max(x,S,L),E=Math.min(x,S,L);A>.9&&E<.1&&(x<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),L<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,x){const S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function y(){const m=new k,x=new k,S=new k,L=new k,A=new be,E=new be,b=new be;for(let G=0,_=0;G<s.length;G+=9,_+=6){m.set(s[G+0],s[G+1],s[G+2]),x.set(s[G+3],s[G+4],s[G+5]),S.set(s[G+6],s[G+7],s[G+8]),A.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),b.set(o[_+4],o[_+5]),L.copy(m).add(x).add(S).divideScalar(3);const w=v(L);M(A,_+0,m,w),M(E,_+2,x,w),M(b,_+4,S,w)}}function M(m,x,S,L){L<0&&m.x===1&&(o[x]=m.x-1),S.x===0&&S.z===0&&(o[x]=L/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.vertices,e.indices,e.radius,e.details)}}class Oy extends gf{constructor(e){super(e),this.uuid=Lo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new gf().fromJSON(r))}return this}}const hb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Fy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,f,p;if(i&&(s=vb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let y=n;y<r;y+=n)d=t[y],f=t[y+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Oa(s,o,n,a,l,p,0),o}};function Fy(t,e,n,i,r){let s,o;if(r===Cb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=ag(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=ag(s,t[s],t[s+1],o);return o&&cu(o,o.next)&&(ka(o),o=o.next),o}function ms(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(cu(n,n.next)||Rt(n.prev,n,n.next)===0)){if(ka(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Oa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Mb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?pb(t,i,r,s):fb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ka(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=mb(ms(t),e,n),Oa(t,e,n,i,r,s,2)):o===2&&gb(t,e,n,i,r,s):Oa(ms(t),e,n,i,r,s,1);break}}}function fb(t){const e=t.prev,n=t,i=t.next;if(Rt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=f&&y.y>=d&&y.y<=p&&io(r,a,s,l,o,c,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function pb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Rt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,y=u<d?u<f?u:f:d<f?d:f,M=a>l?a>c?a:c:l>c?l:c,v=u>d?u>f?u:f:d>f?d:f,h=vf(p,y,e,n,i),m=vf(M,v,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=h&&S&&S.z<=m;){if(x.x>=p&&x.x<=M&&x.y>=y&&x.y<=v&&x!==r&&x!==o&&io(a,u,l,d,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=M&&S.y>=y&&S.y<=v&&S!==r&&S!==o&&io(a,u,l,d,c,f,S.x,S.y)&&Rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=h;){if(x.x>=p&&x.x<=M&&x.y>=y&&x.y<=v&&x!==r&&x!==o&&io(a,u,l,d,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=m;){if(S.x>=p&&S.x<=M&&S.y>=y&&S.y<=v&&S!==r&&S!==o&&io(a,u,l,d,c,f,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function mb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!cu(r,s)&&ky(r,i,i.next,s)&&Fa(r,s)&&Fa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ka(i),ka(i.next),i=t=s),i=i.next}while(i!==t);return ms(i)}function gb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tb(o,a)){let l=By(o,a);o=ms(o,o.next),l=ms(l,l.next),Oa(o,e,n,i,r,s,0),Oa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function vb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Fy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Eb(c));for(r.sort(xb),s=0;s<r.length;s++)n=yb(r[s],n);return n}function xb(t,e){return t.x-e.x}function yb(t,e){const n=_b(t,e);if(!n)return e;const i=By(n,t);return ms(i,i.next),ms(n,n.next)}function _b(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&io(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Fa(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&Sb(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function Sb(t,e){return Rt(t.prev,t,e.prev)<0&&Rt(e.next,t,t.next)<0}function Mb(t,e,n,i){let r=t;do r.z===0&&(r.z=vf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,wb(r)}function wb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function vf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Eb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function io(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Tb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ab(t,e)&&(Fa(t,e)&&Fa(e,t)&&bb(t,e)&&(Rt(t.prev,t,e.prev)||Rt(t,e.prev,e))||cu(t,e)&&Rt(t.prev,t,t.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function cu(t,e){return t.x===e.x&&t.y===e.y}function ky(t,e,n,i){const r=zl(Rt(t,e,n)),s=zl(Rt(t,e,i)),o=zl(Rt(n,i,t)),a=zl(Rt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ul(t,n,e)||s===0&&Ul(t,i,e)||o===0&&Ul(n,t,i)||a===0&&Ul(n,e,i))}function Ul(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function zl(t){return t>0?1:t<0?-1:0}function Ab(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ky(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Fa(t,e){return Rt(t.prev,t,t.next)<0?Rt(t,e,t.next)>=0&&Rt(t,t.prev,e)>=0:Rt(t,e,t.prev)<0||Rt(t,t.next,e)<0}function bb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function By(t,e){const n=new xf(t.i,t.x,t.y),i=new xf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function ag(t,e,n,i){const r=new xf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ka(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function xf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ga{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ga.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];lg(e),cg(i,e);let o=e.length;n.forEach(lg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,cg(i,n[l]);const a=hb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function lg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function cg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class kp extends En{constructor(e=new Oy([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,y=n.bevelSize!==void 0?n.bevelSize:p-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const h=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:Rb;let x,S=!1,L,A,E,b;h&&(x=h.getSpacedPoints(u),S=!0,f=!1,L=h.computeFrenetFrames(u,!1),A=new k,E=new k,b=new k),f||(v=0,p=0,y=0,M=0);const G=a.extractPoints(c);let _=G.shape;const w=G.holes;if(!ga.isClockWise(_)){_=_.reverse();for(let pe=0,D=w.length;pe<D;pe++){const Ae=w[pe];ga.isClockWise(Ae)&&(w[pe]=Ae.reverse())}}const R=ga.triangulateShape(_,w),z=_;for(let pe=0,D=w.length;pe<D;pe++){const Ae=w[pe];_=_.concat(Ae)}function H(pe,D,Ae){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(D,Ae)}const F=_.length,Z=R.length;function I(pe,D,Ae){let Te,Ee,_e;const Fe=pe.x-D.x,Ie=pe.y-D.y,N=Ae.x-pe.x,T=Ae.y-pe.y,oe=Fe*Fe+Ie*Ie,xe=Fe*T-Ie*N;if(Math.abs(xe)>Number.EPSILON){const Se=Math.sqrt(oe),ve=Math.sqrt(N*N+T*T),ke=D.x-Ie/Se,Le=D.y+Fe/Se,O=Ae.x-T/ve,ee=Ae.y+N/ve,j=((O-ke)*T-(ee-Le)*N)/(Fe*T-Ie*N);Te=ke+Fe*j-pe.x,Ee=Le+Ie*j-pe.y;const U=Te*Te+Ee*Ee;if(U<=2)return new be(Te,Ee);_e=Math.sqrt(U/2)}else{let Se=!1;Fe>Number.EPSILON?N>Number.EPSILON&&(Se=!0):Fe<-Number.EPSILON?N<-Number.EPSILON&&(Se=!0):Math.sign(Ie)===Math.sign(T)&&(Se=!0),Se?(Te=-Ie,Ee=Fe,_e=Math.sqrt(oe)):(Te=Fe,Ee=Ie,_e=Math.sqrt(oe/2))}return new be(Te/_e,Ee/_e)}const q=[];for(let pe=0,D=z.length,Ae=D-1,Te=pe+1;pe<D;pe++,Ae++,Te++)Ae===D&&(Ae=0),Te===D&&(Te=0),q[pe]=I(z[pe],z[Ae],z[Te]);const K=[];let J,ge=q.concat();for(let pe=0,D=w.length;pe<D;pe++){const Ae=w[pe];J=[];for(let Te=0,Ee=Ae.length,_e=Ee-1,Fe=Te+1;Te<Ee;Te++,_e++,Fe++)_e===Ee&&(_e=0),Fe===Ee&&(Fe=0),J[Te]=I(Ae[Te],Ae[_e],Ae[Fe]);K.push(J),ge=ge.concat(J)}for(let pe=0;pe<v;pe++){const D=pe/v,Ae=p*Math.cos(D*Math.PI/2),Te=y*Math.sin(D*Math.PI/2)+M;for(let Ee=0,_e=z.length;Ee<_e;Ee++){const Fe=H(z[Ee],q[Ee],Te);ae(Fe.x,Fe.y,-Ae)}for(let Ee=0,_e=w.length;Ee<_e;Ee++){const Fe=w[Ee];J=K[Ee];for(let Ie=0,N=Fe.length;Ie<N;Ie++){const T=H(Fe[Ie],J[Ie],Te);ae(T.x,T.y,-Ae)}}}const Ce=y+M;for(let pe=0;pe<F;pe++){const D=f?H(_[pe],ge[pe],Ce):_[pe];S?(E.copy(L.normals[0]).multiplyScalar(D.x),A.copy(L.binormals[0]).multiplyScalar(D.y),b.copy(x[0]).add(E).add(A),ae(b.x,b.y,b.z)):ae(D.x,D.y,0)}for(let pe=1;pe<=u;pe++)for(let D=0;D<F;D++){const Ae=f?H(_[D],ge[D],Ce):_[D];S?(E.copy(L.normals[pe]).multiplyScalar(Ae.x),A.copy(L.binormals[pe]).multiplyScalar(Ae.y),b.copy(x[pe]).add(E).add(A),ae(b.x,b.y,b.z)):ae(Ae.x,Ae.y,d/u*pe)}for(let pe=v-1;pe>=0;pe--){const D=pe/v,Ae=p*Math.cos(D*Math.PI/2),Te=y*Math.sin(D*Math.PI/2)+M;for(let Ee=0,_e=z.length;Ee<_e;Ee++){const Fe=H(z[Ee],q[Ee],Te);ae(Fe.x,Fe.y,d+Ae)}for(let Ee=0,_e=w.length;Ee<_e;Ee++){const Fe=w[Ee];J=K[Ee];for(let Ie=0,N=Fe.length;Ie<N;Ie++){const T=H(Fe[Ie],J[Ie],Te);S?ae(T.x,T.y+x[u-1].y,x[u-1].x+Ae):ae(T.x,T.y,d+Ae)}}}Q(),re();function Q(){const pe=r.length/3;if(f){let D=0,Ae=F*D;for(let Te=0;Te<Z;Te++){const Ee=R[Te];Me(Ee[2]+Ae,Ee[1]+Ae,Ee[0]+Ae)}D=u+v*2,Ae=F*D;for(let Te=0;Te<Z;Te++){const Ee=R[Te];Me(Ee[0]+Ae,Ee[1]+Ae,Ee[2]+Ae)}}else{for(let D=0;D<Z;D++){const Ae=R[D];Me(Ae[2],Ae[1],Ae[0])}for(let D=0;D<Z;D++){const Ae=R[D];Me(Ae[0]+F*u,Ae[1]+F*u,Ae[2]+F*u)}}i.addGroup(pe,r.length/3-pe,0)}function re(){const pe=r.length/3;let D=0;le(z,D),D+=z.length;for(let Ae=0,Te=w.length;Ae<Te;Ae++){const Ee=w[Ae];le(Ee,D),D+=Ee.length}i.addGroup(pe,r.length/3-pe,1)}function le(pe,D){let Ae=pe.length;for(;--Ae>=0;){const Te=Ae;let Ee=Ae-1;Ee<0&&(Ee=pe.length-1);for(let _e=0,Fe=u+v*2;_e<Fe;_e++){const Ie=F*_e,N=F*(_e+1),T=D+Te+Ie,oe=D+Ee+Ie,xe=D+Ee+N,Se=D+Te+N;we(T,oe,xe,Se)}}}function ae(pe,D,Ae){l.push(pe),l.push(D),l.push(Ae)}function Me(pe,D,Ae){Ue(pe),Ue(D),Ue(Ae);const Te=r.length/3,Ee=m.generateTopUV(i,r,Te-3,Te-2,Te-1);He(Ee[0]),He(Ee[1]),He(Ee[2])}function we(pe,D,Ae,Te){Ue(pe),Ue(D),Ue(Te),Ue(D),Ue(Ae),Ue(Te);const Ee=r.length/3,_e=m.generateSideWallUV(i,r,Ee-6,Ee-3,Ee-2,Ee-1);He(_e[0]),He(_e[1]),He(_e[3]),He(_e[1]),He(_e[2]),He(_e[3])}function Ue(pe){r.push(l[pe*3+0]),r.push(l[pe*3+1]),r.push(l[pe*3+2])}function He(pe){s.push(pe.x),s.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Pb(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mf[r.type]().fromJSON(r)),new kp(i,e.options)}}const Rb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new be(s,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],p=e[r*3+1],y=e[r*3+2],M=e[s*3],v=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-d),new be(f,1-y),new be(M,1-h)]:[new be(a,1-l),new be(u,1-d),new be(p,1-y),new be(v,1-h)]}};function Pb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Bp extends Fp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Bp(e.radius,e.detail)}}class Hp extends En{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new k,y=new be;for(let M=0;M<=r;M++){for(let v=0;v<=i;v++){const h=s+v/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,u.push(y.x,y.y)}d+=f}for(let M=0;M<r;M++){const v=M*(i+1);for(let h=0;h<i;h++){const m=h+v,x=m,S=m+i+1,L=m+i+2,A=m+1;a.push(x,S,A),a.push(S,L,A)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vp extends En{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new k,f=new k,p=[],y=[],M=[],v=[];for(let h=0;h<=i;h++){const m=[],x=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const A=L/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),y.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),v.push(A+S,1-x),m.push(c++)}u.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){const x=u[h][m+1],S=u[h][m],L=u[h+1][m],A=u[h+1][m+1];(h!==0||o>0)&&p.push(x,S,A),(h!==i-1||l<Math.PI)&&p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new yt(y,3)),this.setAttribute("normal",new yt(M,3)),this.setAttribute("uv",new yt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gp extends En{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new k,d=new k,f=new k;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const M=y/r*s,v=p/i*Math.PI*2;d.x=(e+n*Math.cos(v))*Math.cos(M),d.y=(e+n*Math.cos(v))*Math.sin(M),d.z=n*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const M=(r+1)*p+y-1,v=(r+1)*(p-1)+y-1,h=(r+1)*(p-1)+y,m=(r+1)*p+y;o.push(M,v,m),o.push(v,h,m)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lb extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ft extends Do{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Db extends Do{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Hc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Nb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}}const Ib=new Nb;class Xa{constructor(e){this.manager=e!==void 0?e:Ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class Ub extends Error{constructor(e,n){super(e),this.response=n}}class zb extends Xa{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Gi[e]!==void 0){Gi[e].push({onLoad:n,onProgress:i,onError:r});return}Gi[e]=[],Gi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,y=p!==0;let M=0;const v=new ReadableStream({start(h){m();function m(){d.read().then(({done:x,value:S})=>{if(x)h.close();else{M+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:p});for(let A=0,E=u.length;A<E;A++){const b=u[A];b.onProgress&&b.onProgress(L)}h.enqueue(S),m()}},x=>{h.error(x)})}}});return new Response(v)}else throw new Ub(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{Hc.add(e,c);const u=Gi[e];delete Gi[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ob extends Xa{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ua("img");function l(){u(),Hc.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Fb extends Xa{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new Ip,a=new zb(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Zi,o.wrapT=c.wrapT!==void 0?c.wrapT:Zi,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Tr),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class Ol extends Xa{constructor(e){super(e)}load(e,n,i,r){const s=new jt,o=new Ob(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class uu extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class kb extends uu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ed=new lt,ug=new k,dg=new k;class Hy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),n.position.copy(ug),dg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dg),n.updateMatrixWorld(),Ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hg=new lt,qo=new k,Td=new k;class Bb extends Hy{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qo.setFromMatrixPosition(e.matrixWorld),i.position.copy(qo),Td.copy(i.position),Td.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Td),i.updateMatrixWorld(),r.makeTranslation(-qo.x,-qo.y,-qo.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg)}}class yf extends uu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hb extends Hy{constructor(){super(new Lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends uu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vb extends uu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=pg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function pg(){return performance.now()}const mg=new lt;class jb{constructor(e,n,i=0,r=1/0){this.ray=new Cp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mg),this}intersectObject(e,n=!0,i=[]){return _f(e,this,i,n),i.sort(gg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)_f(e[r],this,i,n);return i.sort(gg),i}}function gg(t,e){return t.distance-e.distance}function _f(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)_f(s[o],e,n,!0)}}class vg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wb extends ys{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);const xg={type:"change"},jp={type:"start"},Vy={type:"end"},Fl=new Cp,yg=new bi,Xb=Math.cos(70*UM.DEG2RAD),Bt=new k,bn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ad=1e-6;class Yb extends Wb{constructor(e,n=null){super(e,n),this.state=vt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new ps,this._lastTargetPosition=new k,this._quat=new ps().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vg,this._sphericalDelta=new vg,this._scale=1,this._panOffset=new k,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new k,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kb.bind(this),this._onPointerDown=qb.bind(this),this._onPointerUp=Zb.bind(this),this._onContextMenu=iC.bind(this),this._onMouseWheel=$b.bind(this),this._onKeyDown=eC.bind(this),this._onTouchStart=tC.bind(this),this._onTouchMove=nC.bind(this),this._onMouseDown=Jb.bind(this),this._onMouseMove=Qb.bind(this),this._interceptControlDown=rC.bind(this),this._interceptControlUp=sC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xg),this.update(),this.state=vt.NONE}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fl.origin.copy(this.object.position),Fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fl.direction))<Xb?this.object.lookAt(this.target):(yg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fl.intersectPlane(yg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ad||this._lastTargetPosition.distanceToSquared(this.target)>Ad?(this.dispatchEvent(xg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qb(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function Kb(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Zb(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vy),this.state=vt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Jb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=vt.DOLLY;break;case ho.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}break;case ho.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(jp)}function Qb(t){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function $b(t){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(t.preventDefault(),this.dispatchEvent(jp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Vy))}function eC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function tC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=vt.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=vt.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(jp)}function nC(t){switch(this._trackPointer(t),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=vt.NONE}}function iC(t){this.enabled!==!1&&t.preventDefault()}function rC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class oC extends Dy{constructor(){super();const e=new ri;e.deleteAttribute("uv");const n=new Ft({side:Sn}),i=new Ft,r=new yf(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new et(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new et(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new et(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new et(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new et(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new et(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new et(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new et(e,Fs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new et(e,Fs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const y=new et(e,Fs(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const M=new et(e,Fs(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const v=new et(e,Fs(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const h=new et(e,Fs(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Fs(t){const e=new za;return e.color.setScalar(t),e}class aC extends Fb{constructor(e){super(e),this.type=Ln}parse(e){const o=function(b,G){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(G||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(G||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(G||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(G||""))}},u=`
`,d=function(b,G,_){G=G||1024;let W=b.pos,R=-1,z=0,H="",F=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));for(;0>(R=F.indexOf(u))&&z<G&&W<b.byteLength;)H+=F,z+=F.length,W+=128,F+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));return-1<R?(b.pos+=z+R+1,H+F.slice(0,R)):!1},f=function(b){const G=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,W=/^\s*FORMAT=(\S+)\s*$/,R=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,F;for((b.pos>=b.byteLength||!(H=d(b)))&&o(1,"no header found"),(F=H.match(G))||o(3,"bad initial token"),z.valid|=1,z.programtype=F[1],z.string+=H+`
`;H=d(b),H!==!1;){if(z.string+=H+`
`,H.charAt(0)==="#"){z.comments+=H+`
`;continue}if((F=H.match(_))&&(z.gamma=parseFloat(F[1])),(F=H.match(w))&&(z.exposure=parseFloat(F[1])),(F=H.match(W))&&(z.valid|=2,z.format=F[1]),(F=H.match(R))&&(z.valid|=4,z.height=parseInt(F[1],10),z.width=parseInt(F[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||o(3,"missing format specifier"),z.valid&4||o(3,"missing image size specifier"),z},p=function(b,G,_){const w=G;if(w<8||w>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);w!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const W=new Uint8Array(4*G*_);W.length||o(4,"unable to allocate buffer space");let R=0,z=0;const H=4*w,F=new Uint8Array(4),Z=new Uint8Array(H);let I=_;for(;I>0&&z<b.byteLength;){z+4>b.byteLength&&o(1),F[0]=b[z++],F[1]=b[z++],F[2]=b[z++],F[3]=b[z++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=w)&&o(3,"bad rgbe scanline format");let q=0,K;for(;q<H&&z<b.byteLength;){K=b[z++];const ge=K>128;if(ge&&(K-=128),(K===0||q+K>H)&&o(3,"bad scanline data"),ge){const Ce=b[z++];for(let Q=0;Q<K;Q++)Z[q++]=Ce}else Z.set(b.subarray(z,z+K),q),q+=K,z+=K}const J=w;for(let ge=0;ge<J;ge++){let Ce=0;W[R]=Z[ge+Ce],Ce+=w,W[R+1]=Z[ge+Ce],Ce+=w,W[R+2]=Z[ge+Ce],Ce+=w,W[R+3]=Z[ge+Ce],R+=4}I--}return W},y=function(b,G,_,w){const W=b[G+3],R=Math.pow(2,W-128)/255;_[w+0]=b[G+0]*R,_[w+1]=b[G+1]*R,_[w+2]=b[G+2]*R,_[w+3]=1},M=function(b,G,_,w){const W=b[G+3],R=Math.pow(2,W-128)/255;_[w+0]=Sl.toHalfFloat(Math.min(b[G+0]*R,65504)),_[w+1]=Sl.toHalfFloat(Math.min(b[G+1]*R,65504)),_[w+2]=Sl.toHalfFloat(Math.min(b[G+2]*R,65504)),_[w+3]=Sl.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;const h=f(v),m=h.width,x=h.height,S=p(v.subarray(v.pos),m,x);let L,A,E;switch(this.type){case ti:E=S.length/4;const b=new Float32Array(E*4);for(let _=0;_<E;_++)y(S,_*4,b,_*4);L=b,A=ti;break;case Ln:E=S.length/4;const G=new Uint16Array(E*4);for(let _=0;_<E;_++)M(S,_*4,G,_*4);L=G,A=Ln;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:m,height:x,data:L,header:h.string,gamma:h.gamma,exposure:h.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){switch(o.type){case ti:case Ln:o.colorSpace=rr,o.minFilter=rn,o.magFilter=rn,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,i,r)}}const dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lC=new Lp(-1,1,1,-1,0,1);class cC extends En{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}}const uC=new cC;class du{constructor(e){this._mesh=new et(uC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class dC extends _s{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yi.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new du(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _g extends _s{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class hC extends _s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new be);this._width=i.width,this._height=i.height,n=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dC(dc),this.copyPass.material.blending=nn,this.clock=new Gb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_g!==void 0&&(o instanceof _g?i=!0:o instanceof hC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pC extends _s{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const mC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gC extends _s{constructor(){super();const e=mC;this.uniforms=yi.clone(e.uniforms),this.material=new Lb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new du(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ty?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ny?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===iy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ry?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const kl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new be},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},Bl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},bd={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function vC(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=xC(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new k(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new Ip(r,e,e);return s.wrapS=Rn,s.wrapT=Rn,s.needsUpdate=!0,s}function xC(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const Hl={defines:{SAMPLES:16,SAMPLE_VECTORS:Gy(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new be},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Gy(t,e,n){const i=yC(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function yC(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new k(Math.cos(s),Math.sin(s),o))}return i}class _C{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),u=(3-Math.sqrt(3))/6,d=(l+c)*u,f=l-d,p=c-d,y=e-f,M=n-p;let v,h;y>M?(v=1,h=0):(v=0,h=1);const m=y-v+u,x=M-h+u,S=y-1+2*u,L=M-1+2*u,A=l&255,E=c&255,b=this.perm[A+this.perm[E]]%12,G=this.perm[A+v+this.perm[E+h]]%12,_=this.perm[A+1+this.perm[E+1]]%12;let w=.5-y*y-M*M;w<0?i=0:(w*=w,i=w*w*this.dot(this.grad3[b],y,M));let W=.5-m*m-x*x;W<0?r=0:(W*=W,r=W*W*this.dot(this.grad3[G],m,x));let R=.5-S*S-L*L;return R<0?s=0:(R*=R,s=R*R*this.dot(this.grad3[_],S,L)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(n+c),f=Math.floor(i+c),p=1/6,y=(u+d+f)*p,M=u-y,v=d-y,h=f-y,m=e-M,x=n-v,S=i-h;let L,A,E,b,G,_;m>=x?x>=S?(L=1,A=0,E=0,b=1,G=1,_=0):m>=S?(L=1,A=0,E=0,b=1,G=0,_=1):(L=0,A=0,E=1,b=1,G=0,_=1):x<S?(L=0,A=0,E=1,b=0,G=1,_=1):m<S?(L=0,A=1,E=0,b=0,G=1,_=1):(L=0,A=1,E=0,b=1,G=1,_=0);const w=m-L+p,W=x-A+p,R=S-E+p,z=m-b+2*p,H=x-G+2*p,F=S-_+2*p,Z=m-1+3*p,I=x-1+3*p,q=S-1+3*p,K=u&255,J=d&255,ge=f&255,Ce=this.perm[K+this.perm[J+this.perm[ge]]]%12,Q=this.perm[K+L+this.perm[J+A+this.perm[ge+E]]]%12,re=this.perm[K+b+this.perm[J+G+this.perm[ge+_]]]%12,le=this.perm[K+1+this.perm[J+1+this.perm[ge+1]]]%12;let ae=.6-m*m-x*x-S*S;ae<0?r=0:(ae*=ae,r=ae*ae*this.dot3(this.grad3[Ce],m,x,S));let Me=.6-w*w-W*W-R*R;Me<0?s=0:(Me*=Me,s=Me*Me*this.dot3(this.grad3[Q],w,W,R));let we=.6-z*z-H*H-F*F;we<0?o=0:(we*=we,o=we*we*this.dot3(this.grad3[re],z,H,F));let Ue=.6-Z*Z-I*I-q*q;return Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this.dot3(this.grad3[le],Z,I,q)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,d,f,p,y;const M=(e+n+i+r)*l,v=Math.floor(e+M),h=Math.floor(n+M),m=Math.floor(i+M),x=Math.floor(r+M),S=(v+h+m+x)*c,L=v-S,A=h-S,E=m-S,b=x-S,G=e-L,_=n-A,w=i-E,W=r-b,R=G>_?32:0,z=G>w?16:0,H=_>w?8:0,F=G>W?4:0,Z=_>W?2:0,I=w>W?1:0,q=R+z+H+F+Z+I,K=o[q][0]>=3?1:0,J=o[q][1]>=3?1:0,ge=o[q][2]>=3?1:0,Ce=o[q][3]>=3?1:0,Q=o[q][0]>=2?1:0,re=o[q][1]>=2?1:0,le=o[q][2]>=2?1:0,ae=o[q][3]>=2?1:0,Me=o[q][0]>=1?1:0,we=o[q][1]>=1?1:0,Ue=o[q][2]>=1?1:0,He=o[q][3]>=1?1:0,pe=G-K+c,D=_-J+c,Ae=w-ge+c,Te=W-Ce+c,Ee=G-Q+2*c,_e=_-re+2*c,Fe=w-le+2*c,Ie=W-ae+2*c,N=G-Me+3*c,T=_-we+3*c,oe=w-Ue+3*c,xe=W-He+3*c,Se=G-1+4*c,ve=_-1+4*c,ke=w-1+4*c,Le=W-1+4*c,O=v&255,ee=h&255,j=m&255,U=x&255,$=a[O+a[ee+a[j+a[U]]]]%32,B=a[O+K+a[ee+J+a[j+ge+a[U+Ce]]]]%32,V=a[O+Q+a[ee+re+a[j+le+a[U+ae]]]]%32,ce=a[O+Me+a[ee+we+a[j+Ue+a[U+He]]]]%32,me=a[O+1+a[ee+1+a[j+1+a[U+1]]]]%32;let te=.6-G*G-_*_-w*w-W*W;te<0?u=0:(te*=te,u=te*te*this.dot4(s[$],G,_,w,W));let C=.6-pe*pe-D*D-Ae*Ae-Te*Te;C<0?d=0:(C*=C,d=C*C*this.dot4(s[B],pe,D,Ae,Te));let ue=.6-Ee*Ee-_e*_e-Fe*Fe-Ie*Ie;ue<0?f=0:(ue*=ue,f=ue*ue*this.dot4(s[V],Ee,_e,Fe,Ie));let X=.6-N*N-T*T-oe*oe-xe*xe;X<0?p=0:(X*=X,p=X*X*this.dot4(s[ce],N,T,oe,xe));let Y=.6-Se*Se-ve*ve-ke*ke-Le*Le;return Y<0?y=0:(Y*=Y,y=Y*Y*this.dot4(s[me],Se,ve,ke,Le)),27*(u+d+f+p+y)}}class mi extends _s{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vC(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ai(this.width,this.height,{type:Ln}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Vt({defines:Object.assign({},kl.defines),uniforms:yi.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Db,this.normalMaterial.blending=nn,this.pdMaterial=new Vt({defines:Object.assign({},Hl.defines),uniforms:yi.clone(Hl.uniforms),vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Vt({defines:Object.assign({},Bl.defines),uniforms:yi.clone(Bl.uniforms),vertexShader:Bl.vertexShader,fragmentShader:Bl.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Vt({uniforms:yi.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Rh,blendDst:na,blendEquation:vi,blendSrcAlpha:Ch,blendDstAlpha:na,blendEquationAlpha:vi}),this.blendMaterial=new Vt({uniforms:yi.clone(bd.uniforms),vertexShader:bd.vertexShader,fragmentShader:bd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$x,blendSrc:Rh,blendDst:na,blendEquation:vi,blendSrcAlpha:Ch,blendDstAlpha:na,blendEquationAlpha:vi}),this.fsQuad=new du(null),this.originalClearColor=new Qe,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new Np,this.depthTexture.format=fs,this.depthTexture.type=hs,this.normalRenderTarget=new ai(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:Ln,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gy(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case mi.OUTPUT.Off:break;case mi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case mi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case mi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case mi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case mi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case mi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new _C,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new Ip(r,e,e,ni,Ui);return s.wrapS=Rn,s.wrapT=Rn,s.needsUpdate=!0,s}}mi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Vl={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new be(1/1024,1/512)}},vertexShader:`

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

		}`},Gl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new be(1/1024,1/512)}},vertexShader:`

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

		}`},Cd={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new be(1/1024,1/512)}},vertexShader:`

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

		}`};class SC extends _s{constructor(e,n){super(),this.edgesRT=new ai(e,n,{depthBuffer:!1,type:Ln}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ai(e,n,{depthBuffer:!1,type:Ln}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new jt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=rn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new jt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Jt,this.searchTexture.minFilter=Jt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=yi.clone(Vl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new Vt({defines:Object.assign({},Vl.defines),uniforms:this.uniformsEdges,vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader}),this.uniformsWeights=yi.clone(Gl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Vt({defines:Object.assign({},Gl.defines),uniforms:this.uniformsWeights,vertexShader:Gl.vertexShader,fragmentShader:Gl.fragmentShader}),this.uniformsBlend=yi.clone(Cd.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Vt({uniforms:this.uniformsBlend,vertexShader:Cd.vertexShader,fragmentShader:Cd.fragmentShader}),this.fsQuad=new du(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const MC="honeycutt-assets",gs="img";function Wp(){return new Promise((t,e)=>{const n=indexedDB.open(MC,1);n.onupgradeneeded=()=>n.result.createObjectStore(gs,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function wC(){try{const t=await Wp();return await new Promise(e=>{const n=t.transaction(gs).objectStore(gs).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function EC(t){const e=await Wp();return new Promise(n=>{const i=e.transaction(gs,"readwrite");i.objectStore(gs).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function TC(t){const e=await Wp();return new Promise(n=>{const i=e.transaction(gs,"readwrite");i.objectStore(gs).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function AC(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const jy=We.createContext(null);let bC=1;function CC({children:t}){const[e,n]=We.useState([]);We.useEffect(()=>{wC().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=We.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await AC(l.result),u={id:`a${Date.now().toString(36)}${bC++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await EC(u),n(d=>[u,...d]),a(u)},l.readAsDataURL(o)}),[]),r=We.useCallback(async o=>{await TC(o),n(a=>a.filter(l=>l.id!==o))},[]),s=We.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return g.jsx(jy.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function Xp(){return We.useContext(jy)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function qt(t,e){const n=new Qe(t);return e>=0?n.lerp(new Qe("#ffffff"),e):n.lerp(new Qe("#000000"),-e),n}function Pe(t,e=.75,n=.04,i={}){return new Ft({color:new Qe(t),roughness:e,metalness:n,...i})}function Ne(t,e,n,i){const r=new et(new ri(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function tt(t,e,n,i,r=28){const s=new et(new lu(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function ye(t,e,n,i){return t.position.set(e,n,i),t}function Ko(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(ye(Ne(s,i,s,o),l,i/2,c))}const Sg={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.85),a=Pe(qt(s,.08),.9),l=Pe("#2b2b2e",.5,.3),c=r*.42,u=Math.min(.16,n*.12),d=r;t.add(ye(Ne(n,c,i,o),0,c/2+.08,0)),t.add(ye(Ne(n,d-.1,.16,o),0,(d-.1)/2+.08,-i/2+.08)),t.add(ye(Ne(u,c+.16,i,o),n/2-u/2,(c+.16)/2+.08,0)),t.add(ye(Ne(u,c+.16,i,o),-n/2+u/2,(c+.16)/2+.08,0));const f=n-u*2-.04,p=n>1.3?Math.round(n/.9):1,y=f/p;for(let M=0;M<p;M++){const v=-f/2+y/2+M*y;t.add(ye(Ne(y-.04,.16,i-.28,a),v,c+.16,.04)),t.add(ye(Ne(y-.06,.2,.16,a),v,c+.24,-i/2+.24))}Ko(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.7,.05),a=r*.5;t.add(ye(Ne(n,.06,i,o),0,a,0)),t.add(ye(Ne(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),Ko(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.7);t.add(ye(Ne(n,.1,i,o),0,r-.05,0)),Ko(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Pe(r,.6,.1);t.add(ye(tt(n/2,n/2,.08,s),0,i-.04,0)),t.add(ye(tt(.03,.04,i-.08,Pe("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(ye(tt(n*.34,n*.34,.02,Pe("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.45,.05);t.add(ye(Ne(n,.06,i,o),0,r-.03,0)),Ko(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Pe(r,.45,.05);t.add(ye(tt(n/2,n/2,.06,s),0,i-.03,0)),t.add(ye(tt(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(ye(tt(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.5,.06);t.add(ye(Ne(n,.05,i,o),0,r-.025,0)),t.add(ye(Ne(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(ye(Ne(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(ye(Ne(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe("#5b4a3a",.6),a=Pe(s,.9),l=Pe(qt(s,.12),.95),c=r*.5;t.add(ye(Ne(n,c,i,o),0,c/2,0)),t.add(ye(Ne(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(ye(Ne(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(ye(Ne(n-.12,.1,i*.62,Pe(qt(s,-.05),.9)),0,c+.2,i*.12));const u=(n-.2)/2;t.add(ye(Ne(u-.04,.12,.34,l),-u/2,c+.24,-i/2+.32)),t.add(ye(Ne(u-.04,.12,.34,l),u/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(ye(tt(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(ye(tt(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),Ko(t,n-.08,i-.08,.06,.05,.04,Pe("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(.012,r-.1,.01,Pe(qt(s,-.3),.6)),0,r/2,i/2+.002)),t.add(ye(tt(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(ye(tt(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe(qt(s,.06),.6),l=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r,i,o),0,r/2,0));const c=r>.6?3:1,u=(r-.08)/c;for(let d=0;d<c;d++){const f=.04+u/2+d*u;t.add(ye(Ne(n-.06,u-.03,.02,a),0,f,i/2+.005)),t.add(ye(tt(.01,.01,.12,l),0,f,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.6),a=.04;t.add(ye(Ne(a,r,i,o),-n/2+a/2,r/2,0)),t.add(ye(Ne(a,r,i,o),n/2-a/2,r/2,0)),t.add(ye(Ne(n,a,i,o),0,a/2,0)),t.add(ye(Ne(n,a,i,o),0,r-a/2,0)),t.add(ye(Ne(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const u=r/(l+1)*c;t.add(ye(Ne(n-a*2,a*.7,i-.04,o),0,u,0));const d=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let f=-n/2+a+.04;for(;f<n/2-a-.06;){const p=.03+Math.random()*.03,y=.12+Math.random()*.08;t.add(ye(Ne(p,y,i*.6,Pe(d[Math.floor(Math.random()*d.length)],.8)),f+p/2,u+a*.35+y/2,0)),f+=p+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Pe("#2b2b2e",.4,.4),o=Pe(r,.4,.3),a=new Ft({color:"#10141c",roughness:.2,metalness:.1,emissive:new Qe("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(ye(Ne(n,i,.05,o),0,l+i/2,0));const c=new et(new Ii(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(ye(tt(.03,.04,l,s),0,l/2,0)),t.add(ye(Ne(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Pe(r,1,0),o=Ne(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=Ne(n*.86,.022,i*.78,Pe(qt(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=tt(n/2,n/2,.02,Pe(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=tt(n*.36,n*.36,.022,Pe(qt(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Pe("#9a7a55",.7),o=i*.28;t.add(ye(tt(n*.36,n*.28,o,s),0,o/2,0)),t.add(ye(tt(.03,.03,i*.45,Pe("#5a4030",.8)),0,o+i*.2,0));const a=(c,u,d,f,p)=>{const y=new et(new Bp(u,0),Pe(c,.9));y.castShadow=!0,t.add(ye(y,d,f,p))},l=o+i*.4;a(qt(r,.05),n*.42,0,l+n*.2,0),a(qt(r,-.1),n*.34,n*.22,l+n*.45,.04),a(qt(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(qt(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Pe("#3a3a3e",.4,.6);t.add(ye(tt(n*.32,n*.36,.04,s),0,.02,0)),t.add(ye(tt(.018,.018,i*.78,s),0,i*.4,0));const o=new et(new Op(n*.42,i*.22,24,1,!0),new Ft({color:new Qe(r),roughness:.6,emissive:new Qe(r),emissiveIntensity:.5,side:gn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new yf(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.5),a=Pe("#888",.3,.8);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n,.015,.005,Pe(qt(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(ye(tt(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(ye(tt(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe("#d8d2c8",.6),a=Pe(s,.3,.2);t.add(ye(Ne(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(ye(Ne(n,.05,i,a),0,r-.025,0)),t.add(ye(Ne(n*.3,.02,i*.5,Pe("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.4);t.add(ye(Ne(n,r,i,o),0,r/2,0));const a=Pe("#1a1a1d",.3,.2);t.add(ye(Ne(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(ye(tt(n*.11,n*.11,.01,Pe("#333",.5)),n*l,r+.02,i*c))},oven(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.4,.45);t.add(ye(Ne(n,r,i,o),0,r/2,0));const a=Pe("#26262a",.35,.3);t.add(ye(Ne(n-.06,r*.5,.02,a),0,r*.38,i/2+.006));const l=new Ft({color:"#12161c",roughness:.2,emissive:new Qe("#16242f"),emissiveIntensity:.25});t.add(ye(new et(new ri(n-.2,r*.26,.01),l),0,r*.4,i/2+.016)),t.add(ye(tt(.013,.013,n*.7,Pe("#bcc0c4",.3,.7)),0,r*.68,i/2+.02).rotateZ(Math.PI/2));const c=Pe("#1a1a1d",.3,.2);t.add(ye(Ne(n-.04,.02,i-.04,c),0,r+.01,0));for(const[u,d]of[[-.22,-.2],[.22,-.2],[-.22,.22],[.22,.22]])t.add(ye(tt(n*.1,n*.1,.01,Pe("#333",.5)),n*u,r+.02,i*d));t.add(ye(Ne(n,r*.16,.05,Pe(qt(s,-.12),.4)),0,r+.09,-i/2+.03))},appliance(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.4,.45);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n-.06,r-.1,.02,Pe(qt(s,-.05),.35,.5)),0,r/2,i/2+.006)),t.add(ye(tt(.012,.012,n*.62,Pe("#8c9094",.3,.8)),0,r-.08,i/2+.02).rotateZ(Math.PI/2)),t.add(ye(Ne(n-.08,.05,.02,Pe(qt(s,-.2),.4)),0,r-.05,i/2+.01))},washer(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.5);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(tt(n*.33,n*.33,.04,Pe("#9aa0a6",.3,.6)),0,r*.46,i/2-.005).rotateX(Math.PI/2));const a=new Ft({color:"#1f2e38",roughness:.12,metalness:.2,transparent:!0,opacity:.7});t.add(ye(tt(n*.25,n*.25,.04,a),0,r*.46,i/2+.012).rotateX(Math.PI/2)),t.add(ye(Ne(n-.06,.08,.02,Pe(qt(s,-.18),.4)),0,r-.08,i/2+.006))},sink(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,r-.05,i,Pe(s,.55)),0,(r-.05)/2,0)),t.add(ye(Ne(n,.05,i,Pe("#d8d2c8",.3,.2)),0,r-.025,0)),t.add(ye(Ne(n*.6,.05,i*.58,Pe("#9aa0a6",.25,.6)),0,r-.05,.02));const o=Pe("#b8bcc0",.2,.8);t.add(ye(tt(.015,.015,.16,o),0,r+.08,-i/2+.12)),t.add(ye(Ne(.02,.02,.13,o),0,r+.15,-i/2+.18))},toilet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#f2f2f0",.35,.05);t.add(ye(tt(n*.4,n*.34,r*.5,o),0,r*.25,i*.16)),t.add(ye(tt(n*.46,n*.46,.05,o),0,r*.52,i*.16)),t.add(ye(Ne(n*.96,r*.5,i*.26,o),0,r*.75,-i/2+i*.13))},bathtub(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,r,i,Pe(s||"#f3f3f1",.3,.05)),0,r/2,0)),t.add(ye(Ne(n-.16,r*.55,i-.16,Pe("#e6eff4",.2,.1)),0,r*.62,0)),t.add(ye(tt(.014,.014,.14,Pe("#b8bcc0",.2,.8)),n/2-.12,r+.06,0))},shower(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,.08,i,Pe(s||"#e8e8e6",.4,.05)),0,.04,0));const o=new Ft({color:"#cfe0e8",roughness:.05,metalness:.1,transparent:!0,opacity:.26,side:gn}),a=Pe("#9aa0a6",.3,.7),l=new et(new Ii(n,r-.08),o);l.position.set(0,r/2,i/2),l.castShadow=!1,t.add(l);const c=new et(new Ii(i,r-.08),o);c.rotation.y=Math.PI/2,c.position.set(n/2,r/2,0),c.castShadow=!1,t.add(c),t.add(ye(Ne(.03,r,.03,a),n/2,r/2,i/2)),t.add(ye(Ne(.03,r,.03,a),-n/2,r/2,i/2)),t.add(ye(tt(n*.12,n*.12,.04,a),-n*.1,r*.78,-i/2+.05))},fireplace(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#cfcabf",.7);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n*.6,r*.5,.06,Pe("#15120f",.6)),0,r*.32,i/2+.005)),t.add(ye(Ne(n+.12,.08,i+.1,Pe(qt(s||"#cfcabf",-.2),.6)),0,r*.62,0));const a=new yf("#ff7a30",3,3.5,2);a.position.set(0,r*.3,i/2-.1),t.add(a),t.add(ye(Ne(n*.4,r*.18,.04,new Ft({color:"#ff7a30",emissive:new Qe("#ff5a14"),emissiveIntensity:1.4})),0,r*.2,i/2-.02))},mirror(t,e){const{w:n,h:i,color:r}=e;t.add(ye(Ne(n,i,.05,Pe(r||"#caa86a",.4,.3)),0,i/2,0)),t.add(ye(Ne(n-.1,i-.1,.01,Pe("#cdd6dc",.05,.6)),0,i/2,.032))},barcart(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#b8923f",.3,.7),a=Pe("#d8d2c8",.2,.3);for(const[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.add(ye(tt(.012,.012,r,o),l*(n/2-.04),r/2,c*(i/2-.04))),t.add(ye(tt(.03,.03,.02,Pe("#222",.5)),l*(n/2-.04),.03,c*(i/2-.04)).rotateZ(Math.PI/2));t.add(ye(Ne(n,.02,i,a),0,r-.02,0)),t.add(ye(Ne(n,.02,i,a),0,r*.45,0));for(let l=0;l<3;l++)t.add(ye(tt(.03,.035,.18,Pe(["#3a5a3a","#5a2a2a","#2a3a5a"][l],.3,.2)),-n/5+l*.12,r+.09,0))},piano(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#161616",.3,.2);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n*.9,.04,.16,Pe("#f4f1ea",.3)),0,r*.5,i/2+.04)),t.add(ye(Ne(n*.92,.16,.06,o),0,r*.58,i/2+.05)),t.add(ye(Ne(n+.04,.05,i+.06,o),0,r+.02,0)),t.add(ye(Ne(.12,.02,.06,Pe("#b8923f",.3,.7)),0,.05,i/2))},coatrack(t,e){const{w:n,h:i,color:r}=e,s=Pe(r||"#5a4636",.5);t.add(ye(tt(.02,.025,i,s),0,i/2,0)),t.add(ye(tt(n*.4,n*.45,.03,s),0,.02,0));for(let o=0;o<4;o++){const a=o*Math.PI/2;t.add(ye(Ne(.16,.025,.025,s),Math.cos(a)*.08,i-.12,Math.sin(a)*.08).rotateY(-a))}},vase(t,e){const{w:n,h:i,color:r}=e,s=Pe(r||"#9a8f7a",.4,.1);t.add(ye(tt(n*.28,n*.18,i*.72,s),0,i*.36,0)),t.add(ye(tt(n*.2,n*.28,i*.12,s),0,i*.74,0));for(let o=0;o<6;o++){const a=o/6*Math.PI*2;t.add(ye(tt(.006,.006,i*.5,Pe("#4a6a3a",.7)),Math.cos(a)*.05,i*.82+i*.22,Math.sin(a)*.05).rotateZ(Math.cos(a)*.25))}},pouf(t,e){const{w:n,h:i,color:r}=e;t.add(ye(tt(n/2,n*.45,i,Pe(r||"#b6855f",.9)),0,i/2,0)),t.add(ye(tt(n*.5,n*.45,.01,Pe(qt(r||"#b6855f",-.15),.9)),0,i*.5,0))},ladder(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#9a6f43",.6);t.add(ye(Ne(.04,r,.04,o),-n/2+.04,r/2,0)),t.add(ye(Ne(.04,r,.04,o),n/2-.04,r/2,0));for(let a=0;a<4;a++){const l=r*.22*(a+1),c=Math.max(.12,i*(1-a*.18));t.add(ye(Ne(n-.04,.03,c,o),0,l,i/2-c/2))}}};function RC(t){const e=gp[t.type];if(!e)return new Gn;const n=new Gn,i={...e,color:t.color||e.color};return(Sg[e.shape]||Sg.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function ks(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const Mg={day:{bg:"#bcd8f2",exposure:1.05,env:1,key:["#fff6e8",2.6],fill:["#cfe2ff",.5],hemi:.7,amb:.3,ground:"#d8e2cf",skyHemi:"#cfe3ff",grndHemi:"#5a7a44"},night:{bg:"#0a1222",exposure:1.12,env:.22,key:["#aac2ff",.6],fill:["#485fb0",.3],hemi:.2,amb:.1,ground:"#46543b",skyHemi:"#33406a",grndHemi:"#1d2a18"}},wg=(t,e)=>Math.round(t/e)*e,Bs=t=>Math.max(0,Math.min(255,Math.round(t))),Pi=(t,e,n)=>Math.max(e,Math.min(n,t)),PC={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function Vc(t){const e=new k(t.dirx,0,t.dirz),n=new k(0,1,0),i=new k(t.nx,0,t.nz);return new lt().makeBasis(e,n,i).setPosition(t.ox,0,t.oz)}function LC(t,e,n,i,r){const s=new gf,o=(e+i)/2,a=(n+r)/2,l=(i-e)/2,c=(r-n)/2;if(t==="round")s.absellipse(o,a,l,c,0,Math.PI*2,!0);else if(t==="arch"){const u=Math.min(r-l,r-.02);s.moveTo(e,n),s.lineTo(i,n),s.lineTo(i,u),s.absarc(o,u,l,0,Math.PI,!1),s.lineTo(e,n),s.closePath()}else if(t==="star"){for(let u=0;u<10;u++){const d=-Math.PI/2+u*Math.PI/5,f=u%2===0?1:.42,p=o+Math.cos(d)*f*l,y=a+Math.sin(d)*f*c;u===0?s.moveTo(p,y):s.lineTo(p,y)}s.closePath()}else s.moveTo(e,n),s.lineTo(e,r),s.lineTo(i,r),s.lineTo(i,n),s.closePath();return s}function DC(t,e,n,i){const r=t.length,s=t.height,o=new Oy;o.moveTo(-n,-.05),o.lineTo(r+n,-.05),o.lineTo(r+n,s),o.lineTo(-n,s),o.closePath();for(const l of i){const c=Pi(l.u,.02,r-.02),u=Pi(l.u+l.w,.02,r-.02),d=Pi(l.v,0,s-.04),f=Pi(l.v+l.h,d+.02,s-.02);u-c<.04||f-d<.04||o.holes.push(LC(l.shape,c,d,u,f))}const a=new kp(o,{depth:e,bevelEnabled:!1,curveSegments:1});return a.translate(0,0,-e/2),a.applyMatrix4(Vc(t)),a.computeVertexNormals(),a}function NC(t,e,n,i,r){const s=e.length,o=e.height,a=Pi(n.u,0,s),l=Pi(n.u+n.w,0,s),c=Pi(n.v,0,o),u=Pi(n.v+n.h,0,o);if(l-a<.05||u-c<.05)return;const d=.05,f=i+.03,p=new Gn;p.matrixAutoUpdate=!1,p.matrix.copy(Vc(e));const y=(M,v,h,m)=>{const x=new et(new ri(M,v,f),r);x.position.set(h,m,0),x.castShadow=!0,x.receiveShadow=!0,p.add(x)};y(d,u-c,a-d/2,(c+u)/2),y(d,u-c,l+d/2,(c+u)/2),y(l-a+2*d,d,(a+l)/2,u+d/2),c>.06&&y(l-a+2*d,d,(a+l)/2,c-d/2),t.add(p)}function Eg(t){let e=t.nx,n=t.nz;(e<-1e-6||Math.abs(e)<1e-6&&n<0)&&(e=-e,n=-n);const i=t.ox*e+t.oz*n,r=s=>Math.round(s*1e3)/1e3;return`${r(e)},${r(n)},${r(i)}`}function IC(t,e,n){const i=(e.ox+e.dirx*t.u-n.ox)*n.dirx+(e.oz+e.dirz*t.u-n.oz)*n.dirz,r=(e.ox+e.dirx*(t.u+t.w)-n.ox)*n.dirx+(e.oz+e.dirz*(t.u+t.w)-n.oz)*n.dirz;return{...t,u:Math.min(i,r),w:Math.abs(r-i)}}function Tg(t,e,n,i,r){const s=Eg(e),o=[];for(const l of n)for(const c of["n","e","s","w"])o.push({kind:"room",uid:l.uid,side:c});for(const l of i)o.push({kind:"wall",uid:l.uid});const a=[];for(const l of o){const c=Sr(l,n,i);if(!(!c||Eg(c)!==s))for(const u of r)s0(u.wall,l)&&a.push(s0(l,t)?u:IC(u,c,e))}return a}function UC(t,e,n,i,r,s,o){const a=t-o,l=e-o,c=n+o,u=i+o,d=(a+c)/2,f=(l+u)/2,p=(c-a)/2,y=(u-l)/2,M=r+s,v=[a,r,l],h=[c,r,l],m=[c,r,u],x=[a,r,u];let S,L;if(p>=y){const _=p-y;S=[d-_,M,f],L=[d+_,M,f]}else{const _=y-p;S=[d,M,f-_],L=[d,M,f+_]}const A=[],E=(_,w,W)=>A.push(..._,...w,...W),b=(_,w,W,R)=>{E(_,w,W),E(_,W,R)};p>=y?(b(v,h,L,S),b(m,x,S,L),E(v,S,x),E(h,m,L)):(b(x,v,S,L),b(h,m,L,S),E(v,h,S),E(m,x,L));const G=new En;return G.setAttribute("position",new yt(A,3)),G.computeVertexNormals(),G}function zC(t="#b08a5e"){const e=new Qe(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let u=0;u<a;u++){const d=(Math.random()-.5)*36;o.fillStyle=`rgb(${Bs(n+d)},${Bs(i+d)},${Bs(r+d)})`,o.fillRect(0,u*l,512,l);for(let f=0;f<60;f++){o.strokeStyle=`rgba(${Bs(n*.45)},${Bs(i*.4)},${Bs(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const p=u*l+Math.random()*l;o.moveTo(0,p),o.bezierCurveTo(170,p+(Math.random()-.5)*6,340,p+(Math.random()-.5)*6,512,p),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,u*l,512,2)}const c=new QA(s);return c.wrapS=c.wrapT=Rn,c.colorSpace=pn,c}function OC({onOpenInspector:t,onFlash:e}){var W;const{state:n,dispatch:i}=Po(),{rooms:r,walls:s,items:o,builtins:a,openings:l,selected:c,ambiance:u,quality:d,visitMode:f,roof:p}=n,{map:y}=Xp(),M=We.useRef(null),v=We.useRef(null),h=We.useRef({}),m=We.useRef({});m.current={rooms:r,walls:s,items:o,selected:c,dispatch:i,onOpenInspector:t,openingMode:n.openingMode,openShape:n.openShape,visitMode:n.visitMode};function x(R){const z=h.current;if(!R||typeof R!="string")return null;if(R.startsWith("wood:")){const H=R.slice(5);return z.woodCache.has(H)||z.woodCache.set(H,zC(PC[H]||"#c79a6b")),z.woodCache.get(H)}if(R.startsWith("img:")){const H=R.slice(4);if(!z.imgCache.has(H)){const F=y[H];if(!F)return null;const Z=new Ol().load(F);Z.colorSpace=pn,Z.wrapS=Z.wrapT=Rn,z.imgCache.set(H,Z)}return z.imgCache.get(H)}if(R.startsWith("mat:")){const H=R.slice(4);if(!nc[H])return null;const F=`mat:${H}`;if(!z.imgCache.has(F)){const Z=new Ol().load(fa(H));Z.colorSpace=pn,Z.wrapS=Z.wrapT=Rn,z.imgCache.set(F,Z)}return z.imgCache.get(F)}return null}function S(R){const z=h.current;if(typeof R!="string"||!R.startsWith("mat:"))return null;const H=R.slice(4),F=nc[H];if(!F||!F.normal)return null;const Z=`nrm:${H}`;if(!z.imgCache.has(Z)){const I=new Ol().load(fa(H,!0));I.wrapS=I.wrapT=Rn,z.imgCache.set(Z,I)}return z.imgCache.get(Z)}function L(R){var z;return typeof R!="string"||!R.startsWith("mat:")?null:((z=nc[R.slice(4)])==null?void 0:z.repeat)||null}function A(R,z,H,F,Z,I=1.5,q={},K=1){const J=x(R);if(J){const ge=(L(R)||I)*(K||1),Ce=Math.max(1,F/ge),Q=Math.max(1,Z/ge),re=J.clone();re.needsUpdate=!0,re.wrapS=re.wrapT=Rn,re.colorSpace=pn,h.current.roomTexList.push(re),re.repeat.set(Ce,Q);const le=new Ft({map:re,...q}),ae=S(R);if(ae){const Me=ae.clone();Me.needsUpdate=!0,Me.wrapS=Me.wrapT=Rn,Me.repeat.set(Ce,Q),h.current.roomTexList.push(Me),le.normalMap=Me,le.normalScale=new be(.6,.6)}return le}return new Ft({color:new Qe(z||H),...q})}We.useEffect(()=>{const R=M.current,z=R.clientWidth,H=R.clientHeight,F=new JA({antialias:!0,preserveDrawingBuffer:!0});F.setSize(z,H),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.shadowMap.enabled=!0,F.shadowMap.type=Qx,F.toneMapping=xp,F.toneMappingExposure=1.05,F.outputColorSpace=pn,R.appendChild(F.domElement);const Z=new Dy;Z.background=new Qe("#bcd8f2");const I=new ff(F);try{Z.environment=I.fromScene(new oC,.04).texture}catch{}new aC().load(IS,te=>{try{te.mapping=zc;const C=I.fromEquirectangular(te).texture;h.current.scene&&(h.current.scene.environment=C,h.current.envMap=C)}catch{}te.dispose()},void 0,()=>{});const q=new Vn(50,z/H,.1,200),K=new Yb(q,F.domElement);K.enableDamping=!0,K.dampingFactor=.08,K.minDistance=1.2,K.maxDistance=60,K.maxPolarAngle=Math.PI/2-.04,K.minPolarAngle=.16,K.enablePan=!0,K.rotateSpeed=.7;const J=new kb("#dfe6f0","#2a2620",.55);Z.add(J);const ge=new Vb("#ffffff",.25);Z.add(ge);const Ce=new fg("#fff4e0",2);Ce.position.set(8,14,6),Ce.castShadow=!0,Ce.shadow.mapSize.set(4096,4096),Ce.shadow.camera.near=1,Ce.shadow.camera.far=80,Ce.shadow.bias=-3e-4,Ce.shadow.normalBias=.02,Ce.shadow.radius=4;const Q=Ce.shadow.camera;Q.left=-20,Q.right=20,Q.top=20,Q.bottom=-20,Z.add(Ce);const re=new fg("#cdddff",.5);re.position.set(-9,7,-5),Z.add(re);let le=null,ae=null;try{le=new fC(F),le.setPixelRatio(Math.min(window.devicePixelRatio,2)),le.setSize(z,H),le.addPass(new pC(Z,q)),ae=new mi(Z,q,z,H),ae.output=mi.OUTPUT.Default,ae.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),ae.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),le.addPass(ae),le.addPass(new SC(z,H)),le.addPass(new gC)}catch{le=null}const Me=new et(new Ii(400,400),new Ft({color:"#d8e2cf",roughness:1}));Me.rotation.x=-Math.PI/2,Me.position.y=-.04,Me.receiveShadow=!0,Z.add(Me),new Ol().load(fa("grass"),te=>{var C,ue;te.wrapS=te.wrapT=Rn,te.colorSpace=pn,te.repeat.set(200,200),te.anisotropy=((ue=(C=F.capabilities).getMaxAnisotropy)==null?void 0:ue.call(C))||8,Me.material.map=te,Me.material.needsUpdate=!0,h.current.groundTex=te},void 0,()=>{});const we=new Gn,Ue=new Gn,He=new Gn;Z.add(we,Ue,He);const pe=new et(new Hp(.46,.5,48),new za({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:gn}));pe.rotation.x=-Math.PI/2,pe.position.y=.03,pe.visible=!1,pe.renderOrder=2,Z.add(pe);const D=new Gn,Ae=new et(new Gp(.5,.035,12,48),new Ft({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));Ae.rotation.x=-Math.PI/2,Ae.userData.gizmo=!0,D.add(Ae);for(let te=0;te<4;te++){const C=te/4*Math.PI*2,ue=new et(new Vp(.07,16,16),new Ft({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));ue.position.set(Math.cos(C)*.5,0,Math.sin(C)*.5),ue.userData.gizmo=!0,D.add(ue)}D.visible=!1,D.renderOrder=3,Z.add(D);const Te=new et(new Ii(1,1),new za({color:"#d9b779",transparent:!0,opacity:.4,side:gn,depthTest:!1}));Te.matrixAutoUpdate=!1,Te.visible=!1,Te.renderOrder=4,Z.add(Te),Object.assign(h.current,{renderer:F,scene:Z,camera:q,controls:K,roomGroup:we,furnitureGroup:Ue,ground:Me,key:Ce,fill:re,ambient:ge,hemi:J,pmrem:I,ring:pe,gizmo:D,builtinGroup:He,composer:le,gtao:ae,openPreview:Te,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new jb,drag:null,rotate:null,pending:null,drawOpen:null,fp:{yaw:0,pitch:0,move:{f:0,b:0,l:0,r:0},look:null},visit:!1});const Ee=new bi(new k(0,1,0),0),_e=F.domElement,Fe=new be,Ie=te=>{const C=_e.getBoundingClientRect(),[ue,X,Y,ie]=Wx(te.clientX,te.clientY,C);Fe.set(ue/Y*2-1,-(X/ie*2-1))},N=()=>{const te=new k;return h.current.raycaster.setFromCamera(Fe,q),h.current.raycaster.ray.intersectPlane(Ee,te)?te:null},T=te=>{for(;te&&te.userData.uid===void 0;)te=te.parent;return te},oe=te=>{for(;te;){if(te.userData.gizmo)return!0;te=te.parent}return!1},xe=te=>({u0:Math.min(te.u0,te.u1),u1:Math.max(te.u0,te.u1),v0:Math.min(te.v0,te.v1),v1:Math.max(te.v0,te.v1)}),Se=te=>{const C=xe(te),ue=Math.max(.001,C.u1-C.u0),X=Math.max(.001,C.v1-C.v0),Y=Vc(te.geom);Y.multiply(new lt().makeTranslation((C.u0+C.u1)/2,(C.v0+C.v1)/2,.06)),Y.multiply(new lt().makeScale(ue,X,1)),h.current.openPreview.matrix.copy(Y),h.current.openPreview.visible=!0},ve=te=>{var Oe,Ke,at,Ze;Ie(te);const C=h.current.raycaster;C.setFromCamera(Fe,q);const{items:ue,selected:X,dispatch:Y}=m.current;if(m.current.visitMode){h.current.fp.look={x:te.clientX,y:te.clientY},(Oe=_e.setPointerCapture)==null||Oe.call(_e,te.pointerId);return}if(m.current.openingMode){const qe=h.current.wallMeshes||[],st=C.intersectObjects(qe.map(ut=>ut.mesh),!1);if(st.length){const ut=qe.find(pt=>pt.mesh===st[0].object);if(ut){const pt=ut.geom,_t=st[0].point,$t=(_t.x-pt.ox)*pt.dirx+(_t.z-pt.oz)*pt.dirz;K.enabled=!1,h.current.drawOpen={ref:ut.ref,geom:pt,u0:$t,v0:_t.y,u1:$t,v1:_t.y,plane:new bi().setFromNormalAndCoplanarPoint(new k(pt.nx,0,pt.nz),new k(pt.ox,0,pt.oz))},Se(h.current.drawOpen),(Ke=_e.setPointerCapture)==null||Ke.call(_e,te.pointerId)}}return}if(h.current.gizmo.visible){const qe=C.intersectObject(h.current.gizmo,!0);if(qe.length&&oe(qe[0].object)){const st=ue.find(pt=>pt.uid===(X==null?void 0:X.uid)),ut=N();if(st&&ut){K.enabled=!1,h.current.rotate={uid:st.uid,cx:st.x,cz:st.z,startAng:Math.atan2(ut.z-st.z,ut.x-st.x),startRot:st.rot||0},(at=_e.setPointerCapture)==null||at.call(_e,te.pointerId);return}}}const ie=C.intersectObjects(h.current.furnitureGroup.children,!0);let fe=null;for(const qe of ie){const st=T(qe.object);if(st){fe=st;break}}if(fe){K.enabled=!1,ue.find(st=>st.uid===fe.userData.uid),Y({type:"select",sel:{type:"item",uid:fe.userData.uid}}),uo(8);const qe=N();h.current.drag={uid:fe.userData.uid,grp:fe,offX:qe?qe.x-fe.position.x:0,offZ:qe?qe.z-fe.position.z:0},(Ze=_e.setPointerCapture)==null||Ze.call(_e,te.pointerId)}else h.current.pending={x:te.clientX,y:te.clientY},Hs.matches&&(h.current.orbit={x:te.clientX,y:te.clientY})},ke=te=>{var ue,X;Ie(te);const C=h.current;if(C.visit){const Y=C.fp.look;if(Y){const ie=Hs.matches?te.clientY-Y.y:te.clientX-Y.x,fe=Hs.matches?-(te.clientX-Y.x):te.clientY-Y.y;C.fp.yaw-=ie*.005,C.fp.pitch=Math.max(-1.2,Math.min(1.2,C.fp.pitch-fe*.005)),Y.x=te.clientX,Y.y=te.clientY}return}if(C.orbit&&Hs.matches){const Y=te.clientY-C.orbit.y,ie=-(te.clientX-C.orbit.x);C.orbit.x=te.clientX,C.orbit.y=te.clientY;const fe=2*Math.PI*.7/(_e.clientHeight||1);(ue=K._rotateLeft)==null||ue.call(K,Y*fe),(X=K._rotateUp)==null||X.call(K,ie*fe);return}if(C.drawOpen){const Y=C.drawOpen;C.raycaster.setFromCamera(Fe,q);const ie=new k;C.raycaster.ray.intersectPlane(Y.plane,ie)&&(Y.u1=(ie.x-Y.geom.ox)*Y.geom.dirx+(ie.z-Y.geom.oz)*Y.geom.dirz,Y.v1=ie.y,Se(Y));return}if(C.rotate){const Y=N();if(!Y)return;const ie=Math.atan2(Y.z-C.rotate.cz,Y.x-C.rotate.cx);let fe=C.rotate.startRot+(ie-C.rotate.startAng)*180/Math.PI;fe=(Math.round(fe)%360+360)%360,m.current.dispatch({type:"update",sel:{type:"item",uid:C.rotate.uid},patch:{rot:fe},mergeKey:`rot3d:${C.rotate.uid}`});return}if(C.drag){const Y=N();if(!Y)return;m.current.dispatch({type:"update",sel:{type:"item",uid:C.drag.uid},patch:{x:wg(Y.x-C.drag.offX,.05),z:wg(Y.z-C.drag.offZ,.05)},mergeKey:`mv3d:${C.drag.uid}`})}},Le=te=>{var ue,X,Y,ie,fe,Oe,Ke,at,Ze;const C=h.current;if(C.visit){C.fp.look=null;try{(ue=_e.releasePointerCapture)==null||ue.call(_e,te.pointerId)}catch{}return}if(C.drawOpen){const qe=C.drawOpen;C.drawOpen=null,C.openPreview.visible=!1,K.enabled=!0;const st=xe(qe),ut=qe.geom,pt=Pi(st.u0,.02,ut.length-.02),_t=Pi(st.u1,.02,ut.length-.02)-pt;let $t=Math.max(0,st.v0),Oi=Math.min(ut.height,st.v1)-$t;if(_t>.12&&Oi>.12){const Kn=$t<.18;Kn&&(Oi+=$t,$t=0),m.current.dispatch({type:"addOpening",opening:{wall:qe.ref,u:pt,v:$t,w:_t,h:Oi,kind:Kn?"doorway":"window",shape:m.current.openShape||"rect"}}),m.current.dispatch({type:"openingMode",value:!1}),uo(12),(Y=(X=m.current).onOpenInspector)==null||Y.call(X)}try{(ie=_e.releasePointerCapture)==null||ie.call(_e,te.pointerId)}catch{}return}if(C.orbit=null,C.drag||C.rotate)C.drag=null,C.rotate=null,K.enabled=!0;else if(C.pending){if(Math.hypot(te.clientX-C.pending.x,te.clientY-C.pending.y)<5){Ie(te),C.raycaster.setFromCamera(Fe,q);const qe=C.wallMeshes||[],st=qe.length?C.raycaster.intersectObjects(qe.map(ut=>ut.mesh),!1):[];if(st.length){const pt=qe.find($t=>$t.mesh===st[0].object).ref,_t=pt.kind==="room"?{type:"roomwall",uid:pt.uid,side:pt.side}:{type:"wall",uid:pt.uid};m.current.dispatch({type:"select",sel:_t}),(Oe=(fe=m.current).onOpenInspector)==null||Oe.call(fe)}else if(m.current.selected)m.current.dispatch({type:"select",sel:null});else{const ut=N(),pt=ut&&m.current.rooms.find(_t=>ut.x>=_t.x&&ut.x<=_t.x+_t.w&&ut.z>=_t.z&&ut.z<=_t.z+_t.d);pt&&(m.current.dispatch({type:"select",sel:{type:"room",uid:pt.uid}}),(at=(Ke=m.current).onOpenInspector)==null||at.call(Ke))}}C.pending=null}try{(Ze=_e.releasePointerCapture)==null||Ze.call(_e,te.pointerId)}catch{}};_e.addEventListener("pointerdown",ve,!0),_e.addEventListener("pointermove",ke),window.addEventListener("pointerup",Le);const O=te=>C=>{const ue=h.current.fp.move,X=C.key.toLowerCase(),Y=te?1:0;if(X==="w"||X==="arrowup")ue.f=Y;else if(X==="s"||X==="arrowdown")ue.b=Y;else if(X==="a"||X==="arrowleft")ue.l=Y;else if(X==="d"||X==="arrowright")ue.r=Y;else return;h.current.visit&&C.preventDefault()},ee=O(!0),j=O(!1);window.addEventListener("keydown",ee),window.addEventListener("keyup",j);let U;const $=new k,B=new k,V=new k(0,1,0),ce=()=>{const te=h.current,C=Hs.matches;if(K.enableRotate===C&&(K.enableRotate=!C,K.enablePan=!C),te.visit){const ie=te.fp;q.quaternion.setFromEuler(new wi(ie.pitch,ie.yaw,0,"YXZ")),$.set(0,0,-1).applyQuaternion(q.quaternion),$.y=0,$.normalize(),B.crossVectors($,V).normalize();const fe=ie.move.f-ie.move.b,Oe=ie.move.r-ie.move.l;if(fe||Oe){let Ke=q.position.x+($.x*fe+B.x*Oe)*.055,at=q.position.z+($.z*fe+B.z*Oe)*.055;const Ze=.28;for(const qe of te.colliders||[]){const st=(Ke-qe.ox)*qe.dx+(at-qe.oz)*qe.dz,ut=Math.max(0,Math.min(qe.len,st)),pt=qe.ox+qe.dx*ut,_t=qe.oz+qe.dz*ut,$t=Ke-pt,Oi=at-_t,Kn=Math.hypot($t,Oi);if(Kn<Ze){let Hr=!1;for(const[Ya,Ss]of qe.gaps)if(ut>Ya+.05&&ut<Ss-.05){Hr=!0;break}Hr||(Kn>1e-4?(Ke+=$t/Kn*(Ze-Kn),at+=Oi/Kn*(Ze-Kn)):(Ke+=qe.nx*Ze,at+=qe.nz*Ze))}}q.position.x=Ke,q.position.z=at}q.position.y=1.6}else K.update();const ue=q.position;if(te.visit||te.roof)for(const ie of h.current.walls)ie.hidden&&(ie.hidden=!1,ie.mesh.visible=!0);else for(const ie of h.current.walls){const fe=(ue.x-ie.center.x)*ie.normal.x+(ue.z-ie.center.z)*ie.normal.z;!ie.hidden&&fe>.1?ie.hidden=!0:ie.hidden&&fe<-.1&&(ie.hidden=!1),ie.mesh.visible=!ie.hidden}const Y=v.current;if(Y){const{items:ie,selected:fe}=m.current,Oe=(fe==null?void 0:fe.type)==="item"?ie.find(Ke=>Ke.uid===fe.uid):null;if(Oe&&!h.current.drag&&!h.current.rotate){const Ke=Ai(Oe.type),at=_r(Ke,Oe),Ze=new k(Oe.x,at.h+.35,Oe.z).project(q),qe=F.domElement,st=(Ze.x*.5+.5)*qe.clientWidth,ut=(-Ze.y*.5+.5)*qe.clientHeight;Ze.z<1?(Y.style.display="flex",Y.style.left=`${st}px`,Y.style.top=`${ut}px`):Y.style.display="none"}else Y.style.display="none"}le&&h.current.useComposer?le.render():F.render(Z,q),U=requestAnimationFrame(ce)};ce();const me=new ResizeObserver(()=>{const te=R.clientWidth,C=R.clientHeight;F.setSize(te,C),q.aspect=te/C,q.updateProjectionMatrix(),le==null||le.setSize(te,C)});return me.observe(R),()=>{var te,C,ue,X,Y,ie,fe;cancelAnimationFrame(U),me.disconnect(),_e.removeEventListener("pointerdown",ve,!0),_e.removeEventListener("pointermove",ke),window.removeEventListener("pointerup",Le),window.removeEventListener("keydown",ee),window.removeEventListener("keyup",j),K.dispose(),ks(we),ks(Ue),ks(He),pe.geometry.dispose(),pe.material.dispose(),(te=h.current.openPreview)==null||te.geometry.dispose(),(C=h.current.openPreview)==null||C.material.dispose(),h.current.woodCache.forEach(Oe=>Oe.dispose()),h.current.imgCache.forEach(Oe=>Oe.dispose()),h.current.roomTexList.forEach(Oe=>Oe.dispose()),(X=(ue=h.current.groundTex)==null?void 0:ue.dispose)==null||X.call(ue),(ie=(Y=h.current.envMap)==null?void 0:Y.dispose)==null||ie.call(Y),(fe=le==null?void 0:le.dispose)==null||fe.call(le),I.dispose(),F.dispose(),F.domElement.parentNode===R&&R.removeChild(F.domElement)}},[]),We.useEffect(()=>{const R=h.current;if(!R.renderer)return;const z=Mg[u]||Mg.day;R.scene.background.set(z.bg),R.scene.environmentIntensity=z.env,R.renderer.toneMappingExposure=z.exposure,R.key.color.set(z.key[0]),R.key.intensity=z.key[1],R.fill.color.set(z.fill[0]),R.fill.intensity=z.fill[1],R.hemi.intensity=z.hemi,z.skyHemi&&R.hemi.color.set(z.skyHemi),z.grndHemi&&R.hemi.groundColor.set(z.grndHemi),R.ambient.intensity=z.amb,R.ground&&z.ground&&R.ground.material.color.set(z.ground)},[u]),We.useEffect(()=>{var I;const R=h.current;if(!R.renderer)return;const z=d||"high",H=window.devicePixelRatio||1,F=z==="normal"?Math.min(H,1.25):z==="high"?Math.min(H,1.5):Math.min(H,2);R.renderer.setPixelRatio(F),(I=R.composer)==null||I.setPixelRatio(F);const Z=z!=="normal";R.renderer.shadowMap.enabled=Z,R.key.castShadow=Z,R.gtao&&(R.gtao.enabled=z==="max"),R.useComposer=z==="max",R.renderer.shadowMap.needsUpdate=!0},[d]),We.useEffect(()=>{const R=h.current;if(!R.camera)return;if(R.visit=f,!f){R.controls.enabled=!0,R.colliders=[],E();return}R.controls.enabled=!1;let z=1/0,H=-1/0,F=-1/0;const Z=(re,le)=>{z=Math.min(z,re),H=Math.max(H,re),F=Math.max(F,le)};for(const re of r)Z(re.x,re.z),Z(re.x+re.w,re.z+re.d);for(const re of s)Z(re.x1,re.z1),Z(re.x2,re.z2);isFinite(z)||(z=-2,H=2,F=2);const I=(z+H)/2,q=[];let K=null;const J=re=>{const le=Sr(re,r,s);if(!le)return;const ae=Tg(re,le,r,s,l),Me=ae.filter(we=>we.v<=.25&&we.w>.5).map(we=>[Math.max(0,we.u),Math.min(le.length,we.u+we.w)]);q.push({ox:le.ox,oz:le.oz,dx:le.dirx,dz:le.dirz,len:le.length,nx:le.nx,nz:le.nz,gaps:Me});for(const we of ae)if(!K&&(we.kind==="doorway"||we.v<=.25&&we.w>.6)){const Ue=we.u+we.w/2;K={x:le.ox+le.dirx*Ue,z:le.oz+le.dirz*Ue,nx:le.nx,nz:le.nz}}};for(const re of r)for(const le of["n","e","s","w"]){const ae={kind:"room",uid:re.uid,side:le};if(re.wallsOn&&re.wallsOn[le]===!1){if(!K){const Me=Sr(ae,r,s);Me&&(K={x:Me.ox+Me.dirx*Me.length/2,z:Me.oz+Me.dirz*Me.length/2,nx:Me.nx,nz:Me.nz})}continue}J(ae)}for(const re of s)J({kind:"wall",uid:re.uid});R.colliders=q;let ge,Ce,Q;K?(ge=K.x-K.nx*3,Ce=K.z-K.nz*3,Q=Math.atan2(-K.nx,-K.nz)):(ge=I,Ce=F+3.5,Q=0,r.length&&(e==null||e("No doorway — add a door or open a wall to walk inside"))),R.camera.position.set(ge,1.6,Ce),R.fp.yaw=Q,R.fp.pitch=0,R.fp.move={f:0,b:0,l:0,r:0},R.fp.look=null},[f]),We.useEffect(()=>{const R=h.current;if(!R.roomGroup)return;ks(R.roomGroup),R.roomGroup.clear(),R.walls=[],R.wallMeshes=[],R.floorMeshes=[],R.roomTexList.forEach(J=>J.dispose()),R.roomTexList=[];const z=new Ft({color:"#cfc7ba",roughness:.8}),H=new Ft({color:"#e8e3da",roughness:.95,side:gn}),F=new Ft({color:"#efe9df",roughness:.7,metalness:.03}),Z=.1,I=(J,ge)=>Tg(J,ge,r,s,l),q=(J,ge,Ce,Q,re,le)=>{const ae=I(J,ge),Me=DC(ge,re,Q,ae),we=new et(Me,Ce);we.castShadow=!0,we.receiveShadow=!0,R.roomGroup.add(we),R.wallMeshes.push({mesh:we,ref:J,geom:ge}),le&&R.walls.push({mesh:we,normal:new k(-ge.nx,0,-ge.nz),center:new k(ge.ox+ge.dirx*ge.length/2,0,ge.oz+ge.dirz*ge.length/2),hidden:!1});for(const Ue of ae)NC(R.roomGroup,ge,Ue,re,F)},K=(J,ge)=>{const Ce=ge.length,Q=I(J,ge).filter(ae=>ae.v<=.06).map(ae=>[Math.max(0,ae.u-.05),Math.min(Ce,ae.u+ae.w+.05)]).filter(([ae,Me])=>Me>ae);let re=[[Z/2,Ce-Z/2]];for(const[ae,Me]of Q){const we=[];for(const[Ue,He]of re){if(Me<=Ue||ae>=He){we.push([Ue,He]);continue}ae>Ue&&we.push([Ue,ae]),Me<He&&we.push([Me,He])}re=we}const le=new Gn;le.matrixAutoUpdate=!1,le.matrix.copy(Vc(ge));for(const[ae,Me]of re){if(Me-ae<.02)continue;const we=new et(new ri(Me-ae,.09,.04),z);we.position.set((ae+Me)/2,.045,Z/2+.02),le.add(we)}R.roomGroup.add(le)};for(const J of r){const{x:ge,z:Ce,w:Q,d:re,height:le}=J,ae=ge+Q/2,Me=Ce+re/2,we=J.floorTex||(J.floorColor?void 0:"wood:oak"),Ue=A(we,J.floorColor,"#b08a5e",Q,re,1.5,{roughness:.65,metalness:.02},J.floorScale||1),He=new et(new Ii(Q,re),Ue);He.rotation.x=-Math.PI/2,He.position.set(ae,0,Me),He.receiveShadow=!0,He.userData.roomUid=J.uid,R.roomGroup.add(He),R.floorMeshes.push(He);const pe=A(J.wallTex,J.wallColor,"#e8e3da",Q,le,1.2,{roughness:.95,side:gn}),D=Ae=>!J.wallsOn||J.wallsOn[Ae]!==!1;for(const Ae of["n","e","s","w"]){if(!D(Ae))continue;const Te={kind:"room",uid:J.uid,side:Ae},Ee=Sr(Te,r,s);Ee&&(q(Te,Ee,pe,Z/2,Z,!0),K(Te,Ee))}}for(const J of s){if(Math.hypot(J.x2-J.x1,J.z2-J.z1)<.001)continue;const Ce={kind:"wall",uid:J.uid},Q=Sr(Ce,r,s);Q&&q(Ce,Q,H,0,J.thickness,!1)}if(R.roof=p,p&&r.length){let J=1/0,ge=1/0,Ce=-1/0,Q=-1/0,re=0;for(const we of r)J=Math.min(J,we.x),ge=Math.min(ge,we.z),Ce=Math.max(Ce,we.x+we.w),Q=Math.max(Q,we.z+we.d),re=Math.max(re,we.height);const le=Math.max(.9,Math.min(Ce-J,Q-ge)*.32),ae=new Ft({color:"#5b4a44",roughness:.85,metalness:.02,side:gn}),Me=new et(UC(J,ge,Ce,Q,re,le,.4),ae);Me.castShadow=!0,Me.receiveShadow=!0,R.roomGroup.add(Me)}!R.framed&&(r.length||s.length||o.length)&&(E(),R.framed=!0)},[r,s,l,p,y]),We.useEffect(()=>{const R=h.current;if(!R.furnitureGroup)return;const z=R.itemMap,H=I=>{R.furnitureGroup.remove(I.group),ks(I.group)},F=new Set;for(const I of o){F.add(I.uid);let q=z.get(I.uid);if(!q||q.type!==I.type||q.color!==I.color){q&&H(q);const J=RC(I);R.furnitureGroup.add(J),q={group:J,type:I.type,color:I.color},z.set(I.uid,q)}q.group.position.set(I.x,0,I.z),q.group.rotation.y=-((I.rot||0)*Math.PI)/180;const K=I.scale||{};q.group.scale.set(K.x??1,K.y??1,K.z??1)}for(const[I,q]of z)F.has(I)||(H(q),z.delete(I));const Z=(c==null?void 0:c.type)==="item"?o.find(I=>I.uid===c.uid):null;if(Z){const I=Ai(Z.type),q=_r(I,Z),K=Math.max(q.w,q.d)/2*1.18+.12;R.ring.scale.setScalar(K/.5),R.ring.position.set(Z.x,.03,Z.z),R.ring.visible=!0,R.gizmo.scale.setScalar(K/.5),R.gizmo.position.set(Z.x,.04,Z.z),R.gizmo.visible=!0}else R.ring.visible=!1,R.gizmo.visible=!1},[o,c]),We.useEffect(()=>{const R=h.current;if(!R.builtinGroup)return;ks(R.builtinGroup),R.builtinGroup.clear();const z=.03;for(const H of a){const F=Sr(H.wall,r,s);if(!F)continue;const Z=x(H.tex),I=S(H.tex),q=Z?new Ft({map:Z,normalMap:I||null,roughness:.6,metalness:.04}):new Ft({color:new Qe(H.color||"#c7ad84"),roughness:.62,metalness:.04});if(H.kind==="board"){const ae=(H.u1+H.u2)/2,Me=(H.v1+H.v2)/2,we=H.u2-H.u1,Ue=H.v2-H.v1,He=Math.hypot(we,Ue)||1e-6,pe=we/He,D=Ue/He,Ae=new k(F.dirx*pe,D,F.dirz*pe),Te=new k(-F.dirx*D,pe,-F.dirz*D),Ee=new k(F.nx,0,F.nz),_e=new lt().makeBasis(Ae,Te,Ee);_e.setPosition(F.ox+F.dirx*ae+F.nx*(H.depth/2),Me,F.oz+F.dirz*ae+F.nz*(H.depth/2));const Fe=new et(new ri(He,H.thickness||.05,H.depth||.04),q);Fe.castShadow=!0,Fe.receiveShadow=!0,Fe.matrixAutoUpdate=!1,Fe.matrix.copy(_e),R.builtinGroup.add(Fe);continue}const K=new lt,J=new k(F.dirx,0,F.dirz),ge=new k(0,1,0),Ce=new k(F.nx,0,F.nz);K.makeBasis(J,ge,Ce);const Q=H.u+H.w/2;K.setPosition(F.ox+F.dirx*Q+F.nx*(H.depth/2),H.v+H.h/2,F.oz+F.dirz*Q+F.nz*(H.depth/2));const re=new Gn;re.matrixAutoUpdate=!1,re.matrix.copy(K);const le=(ae,Me,we,Ue,He,pe)=>{const D=new et(new ri(ae,Me,we),q);D.position.set(Ue,He,pe),D.castShadow=!0,D.receiveShadow=!0,re.add(D)};H.kind==="cubby"?(le(H.w,H.h,z,0,0,-H.depth/2+z/2),le(H.w,z,H.depth,0,H.h/2-z/2,0),le(H.w,z,H.depth,0,-H.h/2+z/2,0),le(z,H.h,H.depth,-H.w/2+z/2,0,0),le(z,H.h,H.depth,H.w/2-z/2,0,0)):le(H.w,H.h,H.depth,0,0,0),R.builtinGroup.add(re)}},[a,r,s,y]);function E(){const R=h.current;if(!R.camera)return;const{rooms:z,walls:H,items:F}=m.current;let Z=1/0,I=-1/0,q=1/0,K=-1/0,J=2.7;const ge=(ae,Me)=>{Z=Math.min(Z,ae),I=Math.max(I,ae),q=Math.min(q,Me),K=Math.max(K,Me)};for(const ae of z)ge(ae.x,ae.z),ge(ae.x+ae.w,ae.z+ae.d),J=Math.max(J,ae.height);for(const ae of H)ge(ae.x1,ae.z1),ge(ae.x2,ae.z2),J=Math.max(J,ae.height);for(const ae of F)ge(ae.x,ae.z);isFinite(Z)||(Z=-2,I=2,q=-2,K=2);const Ce=(Z+I)/2,Q=(q+K)/2,re=Math.max(I-Z,K-q,2),le=re*1.1+4;R.camera.position.set(Ce+re*.45,re*.8+3,Q+le),R.controls.target.set(Ce,J*.3,Q),R.controls.update()}const b=(c==null?void 0:c.type)==="item"?o.find(R=>R.uid===c.uid):null,G=c&&c.type!=="roomwall",_=c?b?((W=Ai(b.type))==null?void 0:W.name)||"Piece":c.type==="room"?"Room":c.type==="wall"||c.type==="roomwall"?"Wall":c.type==="opening"?"Opening":c.type==="builtin"?"Built-in":"Selection":null,w=R=>({onPointerDown:z=>{z.preventDefault(),h.current.fp.move[R]=1},onPointerUp:()=>{h.current.fp.move[R]=0},onPointerLeave:()=>{h.current.fp.move[R]=0},onPointerCancel:()=>{h.current.fp.move[R]=0}});return g.jsxs("div",{className:"scene3d",ref:M,children:[g.jsxs("div",{className:"scene-fab",children:[g.jsx("button",{className:"recenter",onClick:E,"aria-label":"Recenter view",children:g.jsx(qx,{size:20})}),g.jsx("button",{className:`recenter ${p?"on":""}`,onClick:()=>i({type:"roof",value:!p}),"aria-label":"Toggle roof",title:"Roof",children:g.jsx(GS,{size:20})}),g.jsx("button",{className:`recenter ${f?"on":""}`,onClick:()=>i({type:"visitMode",value:!f}),"aria-label":"Walk-through",title:"Visit",children:g.jsx(VS,{size:20})})]}),g.jsx("button",{ref:v,style:{display:"none"},"aria-hidden":"true"}),f&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"visit-hint",children:"Drag to look · pad or WASD to walk"}),g.jsx("button",{className:"visit-exit",onClick:()=>i({type:"visitMode",value:!1}),children:"Exit walk-through"}),g.jsxs("div",{className:"visit-pad",children:[g.jsx("button",{className:"vp up",...w("f"),"aria-label":"Forward",children:"▲"}),g.jsx("button",{className:"vp left",...w("l"),"aria-label":"Left",children:"◀"}),g.jsx("button",{className:"vp right",...w("r"),"aria-label":"Right",children:"▶"}),g.jsx("button",{className:"vp down",...w("b"),"aria-label":"Back",children:"▼"})]})]}),c&&g.jsxs("div",{className:"edit-bar",onPointerDown:R=>R.stopPropagation(),onPointerUp:R=>R.stopPropagation(),children:[g.jsx("span",{className:"edit-bar-name",children:_}),g.jsx("button",{onClick:()=>t==null?void 0:t(),children:"Edit"}),b&&g.jsx("button",{onClick:()=>i({type:"update",sel:c,patch:{rot:((b.rot||0)+90)%360}}),children:"Rotate"}),G&&g.jsx("button",{onClick:()=>i({type:"duplicate",sel:c}),children:"Duplicate"}),G?g.jsx("button",{className:"danger",onClick:()=>i({type:"remove",sel:c}),children:"Delete"}):g.jsx("button",{onClick:()=>t==null?void 0:t(),children:"Open / Close"})]})]})}function pr({icon:t,label:e,active:n,accent:i,onClick:r}){return g.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,g.jsx("span",{children:e})]})}function FC({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=Po(),{view:r,tool:s,ambiance:o,openingMode:a,openShape:l}=n,c=[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]];return g.jsxs("aside",{className:"rail",children:[g.jsxs("div",{className:"rail-group",children:[r==="2d"&&g.jsxs(g.Fragment,{children:[g.jsx(pr,{icon:g.jsx(a0,{size:24}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),g.jsx(pr,{icon:g.jsx(YS,{size:24}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),g.jsx(pr,{icon:g.jsx(qS,{size:24}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})})]}),r==="3d"&&g.jsxs(g.Fragment,{children:[g.jsx(pr,{icon:g.jsx(a0,{size:24}),label:"Select",active:!a,onClick:()=>i({type:"openingMode",value:!1})}),g.jsx(pr,{icon:g.jsx(HS,{size:24}),label:"Opening",active:a,onClick:()=>i({type:"openingMode",value:!a})}),a&&g.jsx("div",{className:"rail-shapes",children:c.map(([u,d])=>g.jsx("button",{className:`rail-shape ${(l||"rect")===u?"active":""}`,onClick:()=>i({type:"openShape",value:u}),children:d},u))}),g.jsx("div",{className:"rail-sep"}),["day","night"].map(u=>g.jsx(pr,{icon:g.jsx(XS,{size:24}),label:u[0].toUpperCase()+u.slice(1),active:o===u,onClick:()=>i({type:"ambiance",value:u})},u))]})]}),g.jsxs("div",{className:"rail-group bottom",children:[g.jsx(pr,{icon:g.jsx(OS,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),g.jsx(pr,{icon:g.jsx(kS,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}const Sf=[...Bx.map(t=>({key:t.type,type:t.type,name:t.name,category:t.category,proc:t}))],kC=["Seating","Tables","Bedroom","Bathroom","Kitchen","Appliances","Storage","Electronics","Office","Decor"],BC=["All",...kC.filter(t=>Sf.some(e=>e.category===t))];function HC({item:t}){const e=t.w/t.d;let n=86,i=n/e;return i>60&&(i=60,n=i*e),g.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:g.jsx(Yx,{item:t,wpx:n,dpx:i})})}function VC({onPick:t}){const[e,n]=We.useState("All"),[i,r]=We.useState(""),s=We.useMemo(()=>{const o=i.trim().toLowerCase();return Sf.filter(a=>(e==="All"||a.category===e)&&(!o||a.name.toLowerCase().includes(o)))},[e,i]);return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:"Library"}),g.jsxs("div",{className:"sub",children:[Sf.length," pieces · tap to place"]})]})}),g.jsx("div",{className:"lib-search",children:g.jsx("input",{type:"search",value:i,onChange:o=>r(o.target.value),placeholder:"Search furniture, appliances…","aria-label":"Search library"})}),g.jsx("div",{className:"cats",children:BC.map(o=>g.jsx("button",{className:`chip ${e===o?"active":""}`,onClick:()=>n(o),children:o},o))}),g.jsxs("div",{className:"lib-grid",children:[s.map(o=>g.jsxs("button",{className:"lib-card",onClick:()=>t(o.type),title:o.name,children:[g.jsx("div",{className:"lib-thumb",children:o.real?g.jsx("img",{src:o.thumb,loading:"lazy",alt:o.name,draggable:"false"}):g.jsx(HC,{item:o.proc})}),g.jsx("div",{className:"lib-name",children:o.name})]},o.key)),s.length===0&&g.jsxs("div",{className:"panel-empty",children:["No matches for “",i,"”."]})]})]})}const GC=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function Zo({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=Xp(),s=We.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var f;const u=(f=c.target.files)==null?void 0:f[0];if(c.target.value="",!u)return;const d=await r(u);e({color:"#ffffff",tex:`img:${d.id}`})};return g.jsxs("div",{className:"finish",children:[g.jsxs("div",{className:"finish-row",children:[ES.map(c=>g.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),g.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:g.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"finish-label",children:["Materials ",g.jsx("span",{className:"finish-by",children:"Poly Haven · CC0"})]}),g.jsx("div",{className:"finish-row",children:Xx.map(c=>g.jsx("button",{className:`swatch img ${a===`mat:${c.id}`?"active":""}`,style:{backgroundImage:`url(${fa(c.id)})`},onClick:()=>e({color:c.color,tex:`mat:${c.id}`}),"aria-label":c.label,title:c.label},c.id))}),g.jsx("div",{className:"finish-label",children:"Wood"}),g.jsx("div",{className:"finish-row",children:GC.map(c=>g.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),g.jsx("div",{className:"finish-label",children:"Your images"}),g.jsxs("div",{className:"finish-row",children:[i.map(c=>g.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),g.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),g.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Bn({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:t}),g.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),g.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function Rd({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=d=>Math.max(n,Math.min(i,d)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,u=(d,f)=>s(o((d*12+f)*.0254));return g.jsxs("div",{className:"row measure-row",children:[g.jsxs("div",{className:"measure-head",children:[g.jsx("div",{className:"label",children:t}),g.jsx("div",{className:"measure-inputs",children:r==="ft"?g.jsxs(g.Fragment,{children:[g.jsx("input",{type:"number",value:l,min:0,step:1,onChange:d=>u(Math.max(0,Math.floor(Number(d.target.value)||0)),c)}),g.jsx("span",{className:"u",children:"ft"}),g.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:d=>u(l,Number(d.target.value)||0)}),g.jsx("span",{className:"u",children:"in"})]}):g.jsxs(g.Fragment,{children:[g.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:d=>s(o(Number(d.target.value)||n))}),g.jsx("span",{className:"u",children:"m"})]})})]}),g.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:d=>s(Number(d.target.value))})]})}function jC({onClose:t,onFlash:e}){const{state:n,dispatch:i}=Po(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c,sketches:u,openings:d}=n;if(!r)return null;const f=r,p=(m,x)=>i({type:"update",sel:f,patch:m,mergeKey:x}),y=()=>{i({type:"remove",sel:f}),e==null||e("Removed"),t()},M=()=>{i({type:"duplicate",sel:f}),e==null||e("Duplicated"),t()};if(f.type==="roomwall"){const m=a.find(A=>A.uid===f.uid);if(!m)return null;const x={n:"Top",e:"Right",s:"Bottom",w:"Left"},S=!m.wallsOn||m.wallsOn[f.side]!==!1,L=()=>i({type:"update",sel:{type:"room",uid:m.uid},patch:{wallsOn:{...m.wallsOn||{},[f.side]:!S}}});return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:"Wall",sub:`${x[f.side]} wall · tap any wall to edit it`}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Status"}),g.jsx("div",{className:"val",children:S?"Closed":"Open (doorway)"})]}),g.jsx("div",{className:"btn-row",children:S?g.jsxs("button",{className:"btn danger",onClick:L,children:[g.jsx(ar,{size:18})," Remove wall"]}):g.jsx("button",{className:"btn accent",onClick:L,children:"Add wall back"})})]})]})}if(f.type==="item"){const m=o.find(E=>E.uid===f.uid),x=m&&Ai(m.type);if(!m||!x)return null;const S=_r(x,m),L=m.scale||{},A=Math.round(((L.x??1)+(L.z??1))/2*100);return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:x.name,sub:`${rt(S.w,s)} × ${rt(S.d,s)} × ${rt(S.h,s)}`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Colour"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(Zo,{value:{color:m.color||x.color},allowTexture:!1,onChange:E=>p({color:E.color})})})]}),g.jsx(Bn,{label:"Size",value:A,min:30,max:300,step:1,onChange:E=>p({scale:{x:E/100,y:E/100,z:E/100}},`sz:${m.uid}`),display:`${A}%`}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Footprint"}),g.jsxs("div",{className:"val",children:[rt(S.w,s)," × ",rt(S.d,s)]})]}),g.jsx(Bn,{label:"Rotation",value:m.rot||0,min:0,max:359,step:1,onChange:E=>p({rot:E},`rot:${m.uid}`),display:`${Math.round(m.rot||0)}°`}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Quick turn"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(E=>g.jsxs("button",{className:"chip",style:(m.rot||0)===E?Jo:void 0,onClick:()=>p({rot:E}),children:[E,"°"]},E))})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:()=>p({rot:((m.rot||0)+90)%360}),children:[g.jsx(FS,{size:18})," Rotate"]}),g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("button",{className:"btn",onClick:()=>p({scale:{x:1,y:1,z:1}}),children:"Reset size"}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}if(f.type==="room"){const m=a.find(S=>S.uid===f.uid);if(!m)return null;const x=m.w*m.d;return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:m.name||"Room",sub:`${rt(m.w,s)} × ${rt(m.d,s)}`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Name"}),g.jsx("input",{className:"name-input",type:"text",value:m.name||"",placeholder:"Room",onChange:S=>p({name:S.target.value}),style:{marginLeft:"auto",maxWidth:"64%",textAlign:"right"}})]}),g.jsx(Rd,{label:"Width",m:m.w,min:.5,max:40,units:s,onChange:S=>p({w:S},`rw:${m.uid}`)}),g.jsx(Rd,{label:"Depth",m:m.d,min:.5,max:40,units:s,onChange:S=>p({d:S},`rd:${m.uid}`)}),g.jsx(Rd,{label:"Wall height",m:m.height,min:1.5,max:6,units:s,onChange:S=>p({height:S},`rh:${m.uid}`)}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Floor area"}),g.jsx("div",{className:"val",children:s==="m"?`${x.toFixed(1)} m²`:`${Math.round(x*10.7639)} ft²`})]}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Wall sides"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","Top"],["e","Right"],["s","Bottom"],["w","Left"]].map(([S,L])=>{const A=!m.wallsOn||m.wallsOn[S]!==!1;return g.jsx("button",{className:"chip",style:A?Jo:void 0,onClick:()=>p({wallsOn:{...m.wallsOn||{},[S]:!A}}),children:L},S)})})]}),g.jsxs("div",{className:"stack-row",children:[g.jsx("div",{className:"label",children:"Flooring"}),g.jsx(Zo,{value:{color:m.floorColor,tex:m.floorTex},onChange:S=>p({floorColor:S.color,floorTex:S.tex})}),g.jsx(Bn,{label:"Pattern scale",value:m.floorScale||1,min:.3,max:4,step:.1,onChange:S=>p({floorScale:S},`fs:${m.uid}`),display:`${Math.round((m.floorScale||1)*100)}%`}),a.length>1&&g.jsx("button",{className:"btn",style:{marginTop:2},onClick:()=>{i({type:"floorAll",patch:{floorColor:m.floorColor,floorTex:m.floorTex,floorScale:m.floorScale||1}}),e==null||e("Flooring applied to all rooms")},children:"Apply flooring to whole house"})]}),g.jsxs("div",{className:"stack-row",children:[g.jsx("div",{className:"label",children:"Wall finish"}),g.jsx(Zo,{value:{color:m.wallColor,tex:m.wallTex},onChange:S=>p({wallColor:S.color,wallTex:S.tex})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}if(f.type==="builtin"){const m=c.find(x=>x.uid===f.uid);if(!m)return null;if(m.kind==="board"){const x=Math.hypot(m.u2-m.u1,m.v2-m.v1);return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:"Board",sub:`${rt(x,s)} long`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Length"}),g.jsx("div",{className:"val",children:rt(x,s)})]}),g.jsx(Bn,{label:"Width",value:m.thickness,min:.01,max:.4,step:.005,onChange:S=>p({thickness:S},`bt:${m.uid}`),display:rt(m.thickness,s)}),g.jsx(Bn,{label:"Depth",value:m.depth,min:.02,max:.6,step:.01,onChange:S=>p({depth:S},`bd:${m.uid}`),display:rt(m.depth,s)}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Finish"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(Zo,{value:{color:m.color,tex:m.tex},onChange:S=>p({color:S.color,tex:S.tex})})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:"Built-in",sub:`${rt(m.w,s)} × ${rt(m.h,s)} × ${rt(m.depth,s)} deep`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Style"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([x,S])=>g.jsx("button",{className:"chip",style:m.kind===x?Jo:void 0,onClick:()=>p({kind:x}),children:S},x))})]}),g.jsx(Bn,{label:"Width",value:m.w,min:.1,max:12,step:.05,onChange:x=>p({w:x},`bw:${m.uid}`),display:rt(m.w,s)}),g.jsx(Bn,{label:"Height",value:m.h,min:.1,max:6,step:.05,onChange:x=>p({h:x},`bh:${m.uid}`),display:rt(m.h,s)}),g.jsx(Bn,{label:"Depth",value:m.depth,min:.05,max:3,step:.05,onChange:x=>p({depth:x},`bd:${m.uid}`),display:rt(m.depth,s)}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Finish"}),g.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:g.jsx(Zo,{value:{color:m.color,tex:m.tex},onChange:x=>p({color:x.color,tex:x.tex})})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}if(f.type==="opening"){const m=d.find(L=>L.uid===f.uid);if(!m)return null;const x={doorway:"Doorway",window:"Window",passthrough:"Pass-through"},S=L=>{p(L==="doorway"?{kind:L,v:0}:L==="window"?{kind:L,v:m.v<.05?.9:m.v}:{kind:L})};return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:x[m.kind]||"Opening",sub:`${rt(m.w,s)} × ${rt(m.h,s)}`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Type"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["doorway","Door"],["window","Window"],["passthrough","Open"]].map(([L,A])=>g.jsx("button",{className:"chip",style:m.kind===L?Jo:void 0,onClick:()=>S(L),children:A},L))})]}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Shape"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]].map(([L,A])=>g.jsx("button",{className:"chip",style:(m.shape||"rect")===L?Jo:void 0,onClick:()=>p({shape:L}),children:A},L))})]}),g.jsx(Bn,{label:"Width",value:m.w,min:.3,max:6,step:.05,onChange:L=>p({w:L},`ow:${m.uid}`),display:rt(m.w,s)}),g.jsx(Bn,{label:"Height",value:m.h,min:.3,max:5,step:.05,onChange:L=>p({h:L},`oh:${m.uid}`),display:rt(m.h,s)}),m.kind!=="doorway"&&g.jsx(Bn,{label:"Sill height",value:m.v,min:0,max:3,step:.05,onChange:L=>p({v:L},`ov:${m.uid}`),display:rt(m.v,s)}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Top of opening"}),g.jsx("div",{className:"val",children:rt(m.v+m.h,s)})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}if(f.type==="sketch"){const m=u.find(E=>E.uid===f.uid);if(!m)return null;const x=m.pts,S=m.closed?x.length:x.length-1;let L=0;for(let E=0;E<S;E++){const b=x[E],G=x[(E+1)%x.length];L+=Math.hypot(G.x-b.x,G.z-b.z)}let A=0;if(m.closed&&x.length>=3){for(let E=0,b=x.length-1;E<x.length;b=E++)A+=(x[b].x+x[E].x)*(x[b].z-x[E].z);A=Math.abs(A/2)}return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:"Sketch",sub:`${m.closed?"Closed shape":"Open outline"} · ${x.length} points`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Perimeter"}),g.jsx("div",{className:"val",children:rt(L,s)})]}),m.closed&&g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Area"}),g.jsx("div",{className:"val",children:NS(A,s)})]}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"Edges"}),g.jsx("div",{className:"val",style:{marginLeft:"auto",textAlign:"right",lineHeight:1.6},children:Array.from({length:S},(E,b)=>{const G=x[b],_=x[(b+1)%x.length];return g.jsx("div",{children:rt(Math.hypot(_.x-G.x,_.z-G.z),s)},b)})})]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}const v=l.find(m=>m.uid===f.uid);if(!v)return null;const h=Math.hypot(v.x2-v.x1,v.z2-v.z1);return g.jsxs(g.Fragment,{children:[g.jsx(mr,{title:"Wall",sub:`${rt(h,s)} long`,onClose:t}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Length"}),g.jsx("div",{className:"val",children:rt(h,s)})]}),g.jsx(Bn,{label:"Height",value:v.height,min:1.5,max:6,step:.1,onChange:m=>p({height:m},`wh:${v.uid}`),display:rt(v.height,s)}),g.jsx(Bn,{label:"Thickness",value:v.thickness,min:.05,max:.4,step:.01,onChange:m=>p({thickness:m},`wt:${v.uid}`),display:rt(v.thickness,s)}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{className:"btn",onClick:M,children:[g.jsx(Gr,{size:18})," Duplicate"]}),g.jsxs("button",{className:"btn danger",onClick:y,children:[g.jsx(ar,{size:18})," Delete"]})]})]})]})}const Jo={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function mr({title:t,sub:e}){return g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:t}),g.jsx("div",{className:"sub",children:e})]})})}function WC({onFlash:t,onClose:e}){const{state:n,dispatch:i}=Po(),{units:r,quality:s,defaultHeight:o,rooms:a,walls:l,items:c}=n,{assets:u,addAsset:d,removeAsset:f}=Xp(),p=We.useRef(null),y=async M=>{const v=[...M.target.files||[]];M.target.value="";for(const h of v)await d(h);v.length&&(t==null||t("Image added"))};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"sheet-head",children:g.jsxs("div",{children:[g.jsx("h2",{children:"Settings"}),g.jsxs("div",{className:"sub",children:[a.length," rooms · ",l.length," walls · ",c.length," items"]})]})}),g.jsxs("div",{className:"insp",children:[g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Units"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([M,v])=>g.jsx("button",{className:"chip",style:r===M?Ag:void 0,onClick:()=>i({type:"units",value:M}),children:v},M))})]}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"Graphics"}),g.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["normal","Normal"],["high","High"],["max","Max"]].map(([M,v])=>g.jsx("button",{className:"chip",style:(s||"high")===M?Ag:void 0,onClick:()=>i({type:"quality",value:M}),children:v},M))})]}),g.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:g.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Lower this if 3D feels slow on your device. Normal turns off shadows & effects; Max adds ambient occlusion."})}),g.jsxs("div",{className:"row",children:[g.jsx("div",{className:"label",children:"New wall height"}),g.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:o,onChange:M=>i({type:"defaultHeight",value:Number(M.target.value)})}),g.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:rt(o,r)})]}),g.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:g.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),g.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[g.jsx("div",{className:"label",children:"My images"}),g.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[u.map(M=>g.jsxs("div",{className:"asset-tile",children:[g.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${M.dataUrl})`}}),g.jsx("button",{className:"asset-del",onClick:()=>f(M.id),"aria-label":"Delete image",children:"×"})]},M.id)),g.jsx("button",{className:"swatch upload",onClick:()=>{var M;return(M=p.current)==null?void 0:M.click()},"aria-label":"Upload image",children:"+"}),g.jsx("input",{ref:p,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:y})]})]}),g.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:g.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),g.jsxs("div",{className:"btn-row",children:[g.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),g.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const Ag={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function XC({kind:t,onClose:e,onFlash:n,onPick:i}){return g.jsxs("aside",{className:"panel",children:[g.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:g.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:g.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),g.jsxs("div",{className:"panel-body",children:[t==="catalog"&&g.jsx(VC,{onPick:i}),t==="settings"&&g.jsx(WC,{onFlash:n,onClose:e}),t==="inspector"&&g.jsx(jC,{onClose:e,onFlash:n})]})]})}const YC={cozy:.85,standard:1,spacious:1.18};function qC({bedrooms:t=2,bathrooms:e=1,size:n="standard"}={}){const i=YC[n]||1,r=[{name:"Living Room",w:5,d:4.2,tex:"wood:oak"},{name:"Kitchen",w:3.6,d:3.4,tex:"wood:birch"}];for(let d=0;d<t;d++)r.push({name:t>1?`Bedroom ${d+1}`:"Bedroom",w:3.6,d:3.4,tex:"wood:oak"});for(let d=0;d<e;d++)r.push({name:e>1?`Bath ${d+1}`:"Bathroom",w:2.4,d:2.2,color:"#d4d8dd"});r.forEach(d=>{d.w=+(d.w*i).toFixed(2),d.d=+(d.d*i).toFixed(2)});const s=r.reduce((d,f)=>d+f.w*f.d,0),o=Math.sqrt(s)*1.6,a=[];let l=0,c=0,u=0;for(const d of r)l>0&&l+d.w>o&&(c=+(c+u).toFixed(2),l=0,u=0),a.push({name:d.name,x:+l.toFixed(2),z:c,w:d.w,d:d.d,height:2.7,floorTex:d.tex,floorColor:d.color}),l=+(l+d.w).toFixed(2),u=Math.max(u,d.d);return a}function bg({label:t,value:e,min:n,max:i,onChange:r}){return g.jsxs("div",{className:"gen-row",children:[g.jsx("span",{children:t}),g.jsxs("div",{className:"gen-step",children:[g.jsx("button",{onClick:()=>r(Math.max(n,e-1)),"aria-label":`Fewer ${t}`,children:"−"}),g.jsx("b",{children:e}),g.jsx("button",{onClick:()=>r(Math.min(i,e+1)),"aria-label":`More ${t}`,children:"+"})]})]})}function KC({onBlank:t,onGenerate:e}){const[n,i]=We.useState("home"),[r,s]=We.useState(2),[o,a]=We.useState(1),[l,c]=We.useState("standard");return g.jsx("div",{className:"start-scrim",children:g.jsxs("div",{className:"start-card",children:[g.jsxs("div",{className:"start-brand",children:[g.jsx("div",{className:"logo",children:g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("path",{d:"M3 11 12 4l9 7"}),g.jsx("path",{d:"M5 10v9h14v-9"})]})}),g.jsxs("div",{children:[g.jsx("h1",{children:"Honeycutt Room Studio"}),g.jsx("p",{children:"Design your space in 2D & 3D"})]})]}),n==="home"?g.jsxs("div",{className:"start-actions",children:[g.jsxs("button",{className:"start-btn primary",onClick:t,children:[g.jsx("b",{children:"Start a blank project"}),g.jsx("span",{children:"Draw rooms and walls from scratch"})]}),g.jsxs("button",{className:"start-btn",onClick:()=>i("gen"),children:[g.jsx("b",{children:"Generate a house"}),g.jsx("span",{children:"Auto-build a layout by rooms & size"})]})]}):g.jsxs("div",{className:"gen-form",children:[g.jsx(bg,{label:"Bedrooms",value:r,min:1,max:6,onChange:s}),g.jsx(bg,{label:"Bathrooms",value:o,min:1,max:4,onChange:a}),g.jsxs("div",{className:"gen-row",children:[g.jsx("span",{children:"Size"}),g.jsx("div",{className:"gen-sizes",children:[["cozy","Cozy"],["standard","Standard"],["spacious","Spacious"]].map(([u,d])=>g.jsx("button",{className:`chip ${l===u?"active":""}`,onClick:()=>c(u),children:d},u))})]}),g.jsxs("div",{className:"gen-buttons",children:[g.jsx("button",{className:"start-btn",onClick:()=>i("home"),children:"Back"}),g.jsx("button",{className:"start-btn primary",onClick:()=>e(qC({bedrooms:r,bathrooms:o,size:l})),children:g.jsx("b",{children:"Build it"})})]})]})]})})}function ZC(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=Po(),{view:r,selected:s,rooms:o,walls:a,items:l}=t,[c,u]=We.useState(null),[d,f]=We.useState(null),p=o.length===0&&a.length===0&&l.length===0,[y,M]=We.useState(p),v=We.useCallback(_=>f({msg:_,t:Date.now()}),[]);We.useEffect(()=>{if(!d)return;const _=setTimeout(()=>f(null),1600);return()=>clearTimeout(_)},[d]);let h=c||(s&&r!=="3d"?"inspector":null);h==="inspector"&&!s&&(h=null);const m=_=>e({type:"view",view:_}),x=_=>u(w=>w===_?null:_),S=()=>{u(null),r!=="3d"&&e({type:"select",sel:null})},L=()=>{e({type:"reset"}),u(null),M(!0)},A=()=>{M(!1),v("Blank project — pick Room to start")},E=_=>{e({type:"loadRooms",rooms:_}),M(!1),e({type:"view",view:"2d"}),v("House generated — tap a room to edit")},b=_=>{let w=0,W=0;const R=(s==null?void 0:s.type)==="room"&&o.find(z=>z.uid===s.uid);if(R)w=R.x+R.w/2,W=R.z+R.d/2;else if(o.length){const z=o[o.length-1];w=z.x+z.w/2,W=z.z+z.d/2}e({type:"addItem",kind:_,x:w,z:W}),u(null),uo(10),v("Added — drag to position")},G=async()=>{try{let _;if(r==="3d"){const w=document.querySelector(".scene3d canvas");if(!w)return;_=w.toDataURL("image/png")}else{const w=document.querySelector(".editor2d svg");if(!w)return;_=await JC(w)}await QC(_,`honeycutt-room-${Date.now()}.png`),v("Image saved")}catch{v("Could not export")}};return g.jsxs("div",{className:"app",children:[g.jsxs("header",{className:"topbar",children:[g.jsxs("div",{className:"brand",children:[g.jsx("div",{className:"logo",children:g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("path",{d:"M3 11 12 4l9 7"}),g.jsx("path",{d:"M5 10v9h14v-9"})]})}),g.jsxs("div",{className:"title",children:[g.jsx("b",{children:"Honeycutt"}),g.jsx("span",{children:"Room Studio"})]})]}),g.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[g.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>m("2d"),"aria-pressed":r==="2d",children:[g.jsx(US,{size:15})," Plan"]}),g.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>m("3d"),"aria-pressed":r==="3d",children:[g.jsx(zS,{size:15})," 3D"]})]}),g.jsxs("div",{className:"tools",children:[g.jsx("button",{className:"tool",onClick:L,"aria-label":"New design",children:g.jsx(KS,{size:18})}),g.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:g.jsx(Kx,{size:18})}),g.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:g.jsx(jS,{size:18})}),g.jsx("button",{className:"tool",onClick:G,"aria-label":"Export image",children:g.jsx(WS,{size:18})})]})]}),g.jsxs("div",{className:"body",children:[g.jsx(FC,{onOpen:x,activePanel:h}),g.jsx("main",{className:"stage",children:r==="2d"?g.jsx(iM,{}):g.jsx(OC,{onOpenInspector:()=>u("inspector"),onFlash:v})}),h&&h!=="inspector"&&g.jsx("div",{className:"panel-scrim",onClick:S}),h&&g.jsx(XC,{kind:h,onClose:S,onFlash:v,onPick:b})]}),d&&g.jsx("div",{className:"toast",children:d.msg},d.t),y&&g.jsx(KC,{onBlank:A,onGenerate:E})]})}function JC(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const u=document.createElement("canvas");u.width=r*o,u.height=s*o;const d=u.getContext("2d");d.fillStyle="#ffffff",d.fillRect(0,0,u.width,u.height),d.drawImage(c,0,0,u.width,u.height),e(u.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function QC(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}function Wy(){var t,e,n;try{(n=(e=(t=window.screen)==null?void 0:t.orientation)==null?void 0:e.lock)==null||n.call(e,"landscape").catch(()=>{})}catch{}}Wy();window.addEventListener("pointerdown",Wy,{once:!0});Pd.createRoot(document.getElementById("root")).render(g.jsx(h_.StrictMode,{children:g.jsx(CC,{children:g.jsx(LS,{children:g.jsx(ZC,{})})})}));
