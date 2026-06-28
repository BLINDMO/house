(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bg={exports:{}},Hc={},Cg={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),qy=Symbol.for("react.portal"),Ky=Symbol.for("react.fragment"),Zy=Symbol.for("react.strict_mode"),Jy=Symbol.for("react.profiler"),Qy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),e_=Symbol.for("react.forward_ref"),t_=Symbol.for("react.suspense"),n_=Symbol.for("react.memo"),i_=Symbol.for("react.lazy"),Kp=Symbol.iterator;function r_(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var Rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,Lg={};function wo(t,e,n){this.props=t,this.context=e,this.refs=Lg,this.updater=n||Rg}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dg(){}Dg.prototype=wo.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=Lg,this.updater=n||Rg}var Sf=_f.prototype=new Dg;Sf.constructor=_f;Pg(Sf,wo.prototype);Sf.isPureReactComponent=!0;var Zp=Array.isArray,Ng=Object.prototype.hasOwnProperty,Mf={current:null},Ig={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ng.call(e,i)&&!Ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oa,type:t,key:s,ref:o,props:r,_owner:Mf.current}}function s_(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function o_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jp=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o_(""+t.key):e.toString(36)}function Vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case qy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+fu(o,0):i,Zp(r)?(n="",t!=null&&(n=t.replace(Jp,"$&/")+"/"),Vl(r,e,n,"",function(c){return c})):r!=null&&(wf(r)&&(r=s_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+fu(s,a);o+=Vl(s,e,n,l,r)}else if(l=r_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+fu(s,a++),o+=Vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function a_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},Gl={transition:null},l_={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:Mf};function Og(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!wf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};st.Component=wo;st.Fragment=Ky;st.Profiler=Jy;st.PureComponent=_f;st.StrictMode=Zy;st.Suspense=t_;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_;st.act=Og;st.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ng.call(e,l)&&!Ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(t){return t={$$typeof:$y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qy,_context:t},t.Consumer=t};st.createElement=Ug;st.createFactory=function(t){var e=Ug.bind(null,t);return e.type=t,e};st.createRef=function(){return{current:null}};st.forwardRef=function(t){return{$$typeof:e_,render:t}};st.isValidElement=wf;st.lazy=function(t){return{$$typeof:i_,_payload:{_status:-1,_result:t},_init:a_}};st.memo=function(t,e){return{$$typeof:n_,type:t,compare:e===void 0?null:e}};st.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};st.unstable_act=Og;st.useCallback=function(t,e){return Sn.current.useCallback(t,e)};st.useContext=function(t){return Sn.current.useContext(t)};st.useDebugValue=function(){};st.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};st.useEffect=function(t,e){return Sn.current.useEffect(t,e)};st.useId=function(){return Sn.current.useId()};st.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};st.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};st.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};st.useMemo=function(t,e){return Sn.current.useMemo(t,e)};st.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};st.useRef=function(t){return Sn.current.useRef(t)};st.useState=function(t){return Sn.current.useState(t)};st.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};st.useTransition=function(){return Sn.current.useTransition()};st.version="18.3.1";Cg.exports=st;var Xe=Cg.exports;const c_=Yy(Xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=Xe,d_=Symbol.for("react.element"),h_=Symbol.for("react.fragment"),f_=Object.prototype.hasOwnProperty,p_=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m_={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)f_.call(e,i)&&!m_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d_,type:t,key:s,ref:o,props:r,_owner:p_.current}}Hc.Fragment=h_;Hc.jsx=zg;Hc.jsxs=zg;bg.exports=Hc;var v=bg.exports,Cd={},Fg={exports:{}},Xn={},kg={exports:{}},Bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var Q=U.length;U.push(K);e:for(;0<Q;){var te=Q-1>>>1,_e=U[te];if(0<r(_e,K))U[te]=K,U[Q]=_e,Q=te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var K=U[0],Q=U.pop();if(Q!==K){U[0]=Q;e:for(var te=0,_e=U.length,Re=_e>>>1;te<Re;){var W=2*(te+1)-1,J=U[W],le=W+1,he=U[le];if(0>r(J,Q))le<_e&&0>r(he,J)?(U[te]=he,U[le]=Q,te=le):(U[te]=J,U[W]=Q,te=W);else if(le<_e&&0>r(he,Q))U[te]=he,U[le]=Q,te=le;else break e}}return K}function r(U,K){var Q=U.sortIndex-K.sortIndex;return Q!==0?Q:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,y=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=U)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(U){if(M=!1,x(U),!y)if(n(l)!==null)y=!0,k(P);else{var K=n(c);K!==null&&ne(S,K.startTime-U)}}function P(U,K){y=!1,M&&(M=!1,f(b),b=-1),p=!0;var Q=h;try{for(x(K),d=n(l);d!==null&&(!(d.expirationTime>K)||U&&!w());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var _e=te(d.expirationTime<=K);K=t.unstable_now(),typeof _e=="function"?d.callback=_e:d===n(l)&&i(l),x(K)}else i(l);d=n(l)}if(d!==null)var Re=!0;else{var W=n(c);W!==null&&ne(S,W.startTime-K),Re=!1}return Re}finally{d=null,h=Q,p=!1}}var A=!1,E=null,b=-1,V=5,_=-1;function w(){return!(t.unstable_now()-_<V)}function C(){if(E!==null){var U=t.unstable_now();_=U;var K=!0;try{K=E(!0,U)}finally{K?z():(A=!1,E=null)}}else A=!1}var z;if(typeof g=="function")z=function(){g(C)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,H=O.port2;O.port1.onmessage=C,z=function(){H.postMessage(null)}}else z=function(){m(C,0)};function k(U){E=U,A||(A=!0,z())}function ne(U,K){b=m(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,k(P))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Q=h;h=K;try{return U()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=h;h=U;try{return K()}finally{h=Q}},t.unstable_scheduleCallback=function(U,K,Q){var te=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?te+Q:te):Q=te,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Q+_e,U={id:u++,callback:K,priorityLevel:U,startTime:Q,expirationTime:_e,sortIndex:-1},Q>te?(U.sortIndex=Q,e(c,U),n(l)===null&&U===n(c)&&(M?(f(b),b=-1):M=!0,ne(S,Q-te))):(U.sortIndex=_e,e(l,U),y||p||(y=!0,k(P))),U},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(U){var K=h;return function(){var Q=h;h=K;try{return U.apply(this,arguments)}finally{h=Q}}}})(Bg);kg.exports=Bg;var g_=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=Xe,jn=g_;function Ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hg=new Set,fa={};function ms(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(fa[t]=e,t=0;t<e.length;t++)Hg.add(e[t])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,x_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qp={},$p={};function y_(t){return Rd.call($p,t)?!0:Rd.call(Qp,t)?!1:x_.test(t)?$p[t]=!0:(Qp[t]=!0,!1)}function __(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S_(t,e,n,i){if(e===null||typeof e>"u"||__(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function Tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);an[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,Tf);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Af(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S_(e,n,r,i)&&(n=null),i||r===null?y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),Vg=Symbol.for("react.provider"),Gg=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),Ld=Symbol.for("react.suspense"),Dd=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),em=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,pu;function qo(t){if(pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||""}return`
`+pu+t}var mu=!1;function gu(t,e){if(!t||mu)return"";mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function M_(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=gu(t.type,!1),t;case 11:return t=gu(t.type.render,!1),t;case 1:return t=gu(t.type,!0),t;default:return""}}function Nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Fs:return"Portal";case Pd:return"Profiler";case bf:return"StrictMode";case Ld:return"Suspense";case Dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gg:return(t.displayName||"Context")+".Consumer";case Vg:return(t._context.displayName||"Context")+".Provider";case Cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rf:return e=t.displayName||null,e!==null?e:Nd(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return Nd(t(e))}catch{}}return null}function w_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nd(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E_(t){var e=jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=E_(t))}function Xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Id(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yg(t,e){e=e.checked,e!=null&&Af(t,"checked",e,!1)}function Ud(t,e){Yg(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Od(t,e.type,n):e.hasOwnProperty("defaultValue")&&Od(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Od(t,e,n){(e!=="number"||uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function eo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ce(92));if(Ko(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function qg(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,Zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T_=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){T_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var A_=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(A_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ce(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function Pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vd=null,to=null,no=null;function sm(t){if(t=ka(t)){if(typeof Vd!="function")throw Error(Ce(280));var e=t.stateNode;e&&(e=Xc(e),Vd(t.stateNode,t.type,e))}}function $g(t){to?no?no.push(t):no=[t]:to=t}function ev(){if(to){var t=to,e=no;if(no=to=null,sm(t),e)for(t=0;t<e.length;t++)sm(e[t])}}function tv(t,e){return t(e)}function nv(){}var vu=!1;function iv(t,e,n){if(vu)return t(e,n);vu=!0;try{return tv(t,e,n)}finally{vu=!1,(to!==null||no!==null)&&(nv(),ev())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ce(231,e,typeof n));return n}var Gd=!1;if(Qi)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Gd=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Gd=!1}function b_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ta=!1,dc=null,hc=!1,Wd=null,C_={onError:function(t){ta=!0,dc=t}};function R_(t,e,n,i,r,s,o,a,l){ta=!1,dc=null,b_.apply(C_,arguments)}function P_(t,e,n,i,r,s,o,a,l){if(R_.apply(this,arguments),ta){if(ta){var c=dc;ta=!1,dc=null}else throw Error(Ce(198));hc||(hc=!0,Wd=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function om(t){if(gs(t)!==t)throw Error(Ce(188))}function L_(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(Ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return om(r),t;if(s===i)return om(r),e;s=s.sibling}throw Error(Ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ce(189))}}if(n.alternate!==i)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?t:e}function sv(t){return t=L_(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var av=jn.unstable_scheduleCallback,am=jn.unstable_cancelCallback,D_=jn.unstable_shouldYield,N_=jn.unstable_requestPaint,Ut=jn.unstable_now,I_=jn.unstable_getCurrentPriorityLevel,Lf=jn.unstable_ImmediatePriority,lv=jn.unstable_UserBlockingPriority,fc=jn.unstable_NormalPriority,U_=jn.unstable_LowPriority,cv=jn.unstable_IdlePriority,Vc=null,Pi=null;function O_(t){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:k_,z_=Math.log,F_=Math.LN2;function k_(t){return t>>>=0,t===0?32:31-(z_(t)/F_|0)|0}var Za=64,Ja=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-xi(e),r=1<<n,i|=t[n],e&=~r;return i}function B_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=B_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xi(e),t[e]=n}function V_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-xi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-xi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hv,Nf,fv,pv,mv,Xd=!1,Qa=[],Er=null,Tr=null,Ar=null,ga=new Map,va=new Map,gr=[],G_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Do(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function W_(t,e,n,i,r){switch(e){case"focusin":return Er=Do(Er,t,e,n,i,r),!0;case"dragenter":return Tr=Do(Tr,t,e,n,i,r),!0;case"mouseover":return Ar=Do(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Do(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,Do(va.get(s)||null,t,e,n,i,r)),!0}return!1}function gv(t){var e=$r(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hd=i,n.target.dispatchEvent(i),Hd=null}else return e=ka(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function cm(t,e,n){Wl(t)&&n.delete(e)}function j_(){Xd=!1,Er!==null&&Wl(Er)&&(Er=null),Tr!==null&&Wl(Tr)&&(Tr=null),Ar!==null&&Wl(Ar)&&(Ar=null),ga.forEach(cm),va.forEach(cm)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,Xd||(Xd=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,j_)))}function xa(t){function e(r){return No(r,t)}if(0<Qa.length){No(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&No(Er,t),Tr!==null&&No(Tr,t),Ar!==null&&No(Ar,t),ga.forEach(e),va.forEach(e),n=0;n<gr.length;n++)i=gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&gr.shift()}var io=nr.ReactCurrentBatchConfig,mc=!0;function X_(t,e,n,i){var r=pt,s=io.transition;io.transition=null;try{pt=1,If(t,e,n,i)}finally{pt=r,io.transition=s}}function Y_(t,e,n,i){var r=pt,s=io.transition;io.transition=null;try{pt=4,If(t,e,n,i)}finally{pt=r,io.transition=s}}function If(t,e,n,i){if(mc){var r=Yd(t,e,n,i);if(r===null)Cu(t,e,i,gc,n),lm(t,i);else if(W_(r,t,e,n,i))i.stopPropagation();else if(lm(t,i),e&4&&-1<G_.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&hv(s),s=Yd(t,e,n,i),s===null&&Cu(t,e,i,gc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cu(t,e,i,null,n)}}var gc=null;function Yd(t,e,n,i){if(gc=null,t=Pf(i),t=$r(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gc=t,null}function vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I_()){case Lf:return 1;case lv:return 4;case fc:case U_:return 16;case cv:return 536870912;default:return 16}default:return 16}}var Sr=null,Uf=null,jl=null;function xv(){if(jl)return jl;var t,e=Uf,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return jl=r.slice(t,1<i?1-i:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function um(){return!1}function Yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:um,this.isPropagationStopped=um,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Yn(Eo),Fa=Pt({},Eo,{view:0,detail:0}),q_=Yn(Fa),yu,_u,Io,Gc=Pt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(yu=t.screenX-Io.screenX,_u=t.screenY-Io.screenY):_u=yu=0,Io=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),dm=Yn(Gc),K_=Pt({},Gc,{dataTransfer:0}),Z_=Yn(K_),J_=Pt({},Fa,{relatedTarget:0}),Su=Yn(J_),Q_=Pt({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Yn(Q_),e1=Pt({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t1=Yn(e1),n1=Pt({},Eo,{data:0}),hm=Yn(n1),i1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s1[t])?!!e[t]:!1}function zf(){return o1}var a1=Pt({},Fa,{key:function(t){if(t.key){var e=i1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l1=Yn(a1),c1=Pt({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Yn(c1),u1=Pt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),d1=Yn(u1),h1=Pt({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=Yn(h1),p1=Pt({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=Yn(p1),g1=[9,13,27,32],Ff=Qi&&"CompositionEvent"in window,na=null;Qi&&"documentMode"in document&&(na=document.documentMode);var v1=Qi&&"TextEvent"in window&&!na,yv=Qi&&(!Ff||na&&8<na&&11>=na),pm=" ",mm=!1;function _v(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function x1(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(mm=!0,pm);case"textInput":return t=e.data,t===pm&&mm?null:t;default:return null}}function y1(t,e){if(Bs)return t==="compositionend"||!Ff&&_v(t,e)?(t=xv(),jl=Uf=Sr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yv&&e.locale!=="ko"?null:e.data;default:return null}}var _1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_1[t.type]:e==="textarea"}function Mv(t,e,n,i){$g(i),e=vc(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ia=null,ya=null;function S1(t){Nv(t,0)}function Wc(t){var e=Gs(t);if(Xg(e))return t}function M1(t,e){if(t==="change")return e}var wv=!1;if(Qi){var Mu;if(Qi){var wu="oninput"in document;if(!wu){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),wu=typeof vm.oninput=="function"}Mu=wu}else Mu=!1;wv=Mu&&(!document.documentMode||9<document.documentMode)}function xm(){ia&&(ia.detachEvent("onpropertychange",Ev),ya=ia=null)}function Ev(t){if(t.propertyName==="value"&&Wc(ya)){var e=[];Mv(e,ya,t,Pf(t)),iv(S1,e)}}function w1(t,e,n){t==="focusin"?(xm(),ia=e,ya=n,ia.attachEvent("onpropertychange",Ev)):t==="focusout"&&xm()}function E1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(ya)}function T1(t,e){if(t==="click")return Wc(e)}function A1(t,e){if(t==="input"||t==="change")return Wc(e)}function b1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:b1;function _a(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rd.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ym(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uc(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C1(t){var e=Av(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(i!==null&&kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=_m(n,s);var o=_m(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R1=Qi&&"documentMode"in document&&11>=document.documentMode,Hs=null,qd=null,ra=null,Kd=!1;function Sm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kd||Hs==null||Hs!==uc(i)||(i=Hs,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&_a(ra,i)||(ra=i,i=vc(qd,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Hs)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Eu={},bv={};Qi&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function jc(t){if(Eu[t])return Eu[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bv)return Eu[t]=e[n];return t}var Cv=jc("animationend"),Rv=jc("animationiteration"),Pv=jc("animationstart"),Lv=jc("transitionend"),Dv=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Dv.set(t,e),ms(e,[t])}for(var Tu=0;Tu<Mm.length;Tu++){var Au=Mm[Tu],P1=Au.toLowerCase(),L1=Au[0].toUpperCase()+Au.slice(1);Or(P1,"on"+L1)}Or(Cv,"onAnimationEnd");Or(Rv,"onAnimationIteration");Or(Pv,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Lv,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function wm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,P_(i,e,void 0,t),t.currentTarget=null}function Nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wm(r,a,c),s=l}}}if(hc)throw t=Wd,hc=!1,Wd=null,t}function wt(t,e){var n=e[eh];n===void 0&&(n=e[eh]=new Set);var i=t+"__bubble";n.has(i)||(Iv(e,t,2,!1),n.add(i))}function bu(t,e,n){var i=0;e&&(i|=4),Iv(n,t,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[tl]){t[tl]=!0,Hg.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,bu("selectionchange",!1,e))}}function Iv(t,e,n,i){switch(vv(e)){case 1:var r=X_;break;case 4:r=Y_;break;default:r=If}n=r.bind(null,e,n,t),r=void 0,!Gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}iv(function(){var c=s,u=Pf(n),d=[];e:{var h=Dv.get(t);if(h!==void 0){var p=Of,y=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":p=l1;break;case"focusin":y="focus",p=Su;break;case"focusout":y="blur",p=Su;break;case"beforeblur":case"afterblur":p=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=d1;break;case Cv:case Rv:case Pv:p=$_;break;case Lv:p=f1;break;case"scroll":p=q_;break;case"wheel":p=m1;break;case"copy":case"cut":case"paste":p=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fm}var M=(e&4)!==0,m=!M&&t==="scroll",f=M?h!==null?h+"Capture":null:h;M=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=ma(g,f),S!=null&&M.push(Ma(g,S,x)))),m)break;g=g.return}0<M.length&&(h=new p(h,y,null,n,u),d.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Hd&&(y=n.relatedTarget||n.fromElement)&&($r(y)||y[$i]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?$r(y):null,y!==null&&(m=gs(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(M=dm,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=fm,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:Gs(p),x=y==null?h:Gs(y),h=new M(S,g+"leave",p,n,u),h.target=m,h.relatedTarget=x,S=null,$r(u)===c&&(M=new M(f,g+"enter",y,n,u),M.target=x,M.relatedTarget=m,S=M),m=S,p&&y)t:{for(M=p,f=y,g=0,x=M;x;x=_s(x))g++;for(x=0,S=f;S;S=_s(S))x++;for(;0<g-x;)M=_s(M),g--;for(;0<x-g;)f=_s(f),x--;for(;g--;){if(M===f||f!==null&&M===f.alternate)break t;M=_s(M),f=_s(f)}M=null}else M=null;p!==null&&Em(d,h,p,M,!1),y!==null&&m!==null&&Em(d,m,y,M,!0)}}e:{if(h=c?Gs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=M1;else if(gm(h))if(wv)P=A1;else{P=E1;var A=w1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=T1);if(P&&(P=P(t,c))){Mv(d,P,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Od(h,"number",h.value)}switch(A=c?Gs(c):window,t){case"focusin":(gm(A)||A.contentEditable==="true")&&(Hs=A,qd=c,ra=null);break;case"focusout":ra=qd=Hs=null;break;case"mousedown":Kd=!0;break;case"contextmenu":case"mouseup":case"dragend":Kd=!1,Sm(d,n,u);break;case"selectionchange":if(R1)break;case"keydown":case"keyup":Sm(d,n,u)}var E;if(Ff)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Bs?_v(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yv&&n.locale!=="ko"&&(Bs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Bs&&(E=xv()):(Sr=u,Uf="value"in Sr?Sr.value:Sr.textContent,Bs=!0)),A=vc(c,b),0<A.length&&(b=new hm(b,t,null,n,u),d.push({event:b,listeners:A}),E?b.data=E:(E=Sv(n),E!==null&&(b.data=E)))),(E=v1?x1(t,n):y1(t,n))&&(c=vc(c,"onBeforeInput"),0<c.length&&(u=new hm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Nv(d,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Ma(t,s,r)),s=ma(t,e),s!=null&&i.push(Ma(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Em(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ma(n,s),l!=null&&o.unshift(Ma(n,l,a))):r||(l=ma(n,s),l!=null&&o.push(Ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var N1=/\r\n?/g,I1=/\u0000|\uFFFD/g;function Tm(t){return(typeof t=="string"?t:""+t).replace(N1,`
`).replace(I1,"")}function nl(t,e,n){if(e=Tm(e),Tm(t)!==e&&n)throw Error(Ce(425))}function xc(){}var Zd=null,Jd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,U1=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(z1)}:$d;function z1(t){setTimeout(function(){throw t})}function Ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xa(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),Ci="__reactFiber$"+To,wa="__reactProps$"+To,$i="__reactContainer$"+To,eh="__reactEvents$"+To,F1="__reactListeners$"+To,k1="__reactHandles$"+To;function $r(t){var e=t[Ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bm(t);t!==null;){if(n=t[Ci])return n;t=bm(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[Ci]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ce(33))}function Xc(t){return t[wa]||null}var th=[],Ws=-1;function zr(t){return{current:t}}function Et(t){0>Ws||(t.current=th[Ws],th[Ws]=null,Ws--)}function yt(t,e){Ws++,th[Ws]=t.current,t.current=e}var Ir={},mn=zr(Ir),Pn=zr(!1),rs=Ir;function fo(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function yc(){Et(Pn),Et(mn)}function Cm(t,e,n){if(mn.current!==Ir)throw Error(Ce(168));yt(mn,e),yt(Pn,n)}function Uv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ce(108,w_(t)||"Unknown",r));return Pt({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,rs=mn.current,yt(mn,t),yt(Pn,Pn.current),!0}function Rm(t,e,n){var i=t.stateNode;if(!i)throw Error(Ce(169));n?(t=Uv(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,Et(Pn),Et(mn),yt(mn,t)):Et(Pn),yt(Pn,n)}var ji=null,Yc=!1,Pu=!1;function Ov(t){ji===null?ji=[t]:ji.push(t)}function B1(t){Yc=!0,Ov(t)}function Fr(){if(!Pu&&ji!==null){Pu=!0;var t=0,e=pt;try{var n=ji;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,Yc=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),av(Lf,Fr),r}finally{pt=e,Pu=!1}}return null}var js=[],Xs=0,Sc=null,Mc=0,Zn=[],Jn=0,ss=null,Yi=1,qi="";function qr(t,e){js[Xs++]=Mc,js[Xs++]=Sc,Sc=t,Mc=e}function zv(t,e,n){Zn[Jn++]=Yi,Zn[Jn++]=qi,Zn[Jn++]=ss,ss=t;var i=Yi;t=qi;var r=32-xi(i)-1;i&=~(1<<r),n+=1;var s=32-xi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-xi(e)+r|n<<r|i,qi=s+t}else Yi=1<<s|n<<r|i,qi=t}function Bf(t){t.return!==null&&(qr(t,1),zv(t,1,0))}function Hf(t){for(;t===Sc;)Sc=js[--Xs],js[Xs]=null,Mc=js[--Xs],js[Xs]=null;for(;t===ss;)ss=Zn[--Jn],Zn[Jn]=null,qi=Zn[--Jn],Zn[Jn]=null,Yi=Zn[--Jn],Zn[Jn]=null}var Wn=null,Gn=null,At=!1,pi=null;function Fv(t,e){var n=Qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,Gn=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,Gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Yi,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,Gn=null,!0):!1;default:return!1}}function nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(At){var e=Gn;if(e){var n=e;if(!Pm(t,e)){if(nh(t))throw Error(Ce(418));e=br(n.nextSibling);var i=Wn;e&&Pm(t,e)?Fv(i,n):(t.flags=t.flags&-4097|2,At=!1,Wn=t)}}else{if(nh(t))throw Error(Ce(418));t.flags=t.flags&-4097|2,At=!1,Wn=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function il(t){if(t!==Wn)return!1;if(!At)return Lm(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=Gn)){if(nh(t))throw kv(),Error(Ce(418));for(;e;)Fv(t,e),e=br(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gn=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gn=null}}else Gn=Wn?br(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=Gn;t;)t=br(t.nextSibling)}function po(){Gn=Wn=null,At=!1}function Vf(t){pi===null?pi=[t]:pi.push(t)}var H1=nr.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var i=n.stateNode}if(!i)throw Error(Ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(Ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function Bv(t){function e(f,g){if(t){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Lr(f,g),f.index=0,f.sibling=null,f}function s(f,g,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,x,S){return g===null||g.tag!==6?(g=zu(x,f.mode,S),g.return=f,g):(g=r(g,x),g.return=f,g)}function l(f,g,x,S){var P=x.type;return P===ks?u(f,g,x.props.children,S,x.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===pr&&Dm(P)===g.type)?(S=r(g,x.props),S.ref=Uo(f,g,x),S.return=f,S):(S=$l(x.type,x.key,x.props,null,f.mode,S),S.ref=Uo(f,g,x),S.return=f,S)}function c(f,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Fu(x,f.mode,S),g.return=f,g):(g=r(g,x.children||[]),g.return=f,g)}function u(f,g,x,S,P){return g===null||g.tag!==7?(g=is(x,f.mode,S,P),g.return=f,g):(g=r(g,x),g.return=f,g)}function d(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zu(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ya:return x=$l(g.type,g.key,g.props,null,f.mode,x),x.ref=Uo(f,null,g),x.return=f,x;case Fs:return g=Fu(g,f.mode,x),g.return=f,g;case pr:var S=g._init;return d(f,S(g._payload),x)}if(Ko(g)||Po(g))return g=is(g,f.mode,x,null),g.return=f,g;rl(f,g)}return null}function h(f,g,x,S){var P=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(f,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return x.key===P?l(f,g,x,S):null;case Fs:return x.key===P?c(f,g,x,S):null;case pr:return P=x._init,h(f,g,P(x._payload),S)}if(Ko(x)||Po(x))return P!==null?null:u(f,g,x,S,null);rl(f,x)}return null}function p(f,g,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(g,f,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return f=f.get(S.key===null?x:S.key)||null,l(g,f,S,P);case Fs:return f=f.get(S.key===null?x:S.key)||null,c(g,f,S,P);case pr:var A=S._init;return p(f,g,x,A(S._payload),P)}if(Ko(S)||Po(S))return f=f.get(x)||null,u(g,f,S,P,null);rl(g,S)}return null}function y(f,g,x,S){for(var P=null,A=null,E=g,b=g=0,V=null;E!==null&&b<x.length;b++){E.index>b?(V=E,E=null):V=E.sibling;var _=h(f,E,x[b],S);if(_===null){E===null&&(E=V);break}t&&E&&_.alternate===null&&e(f,E),g=s(_,g,b),A===null?P=_:A.sibling=_,A=_,E=V}if(b===x.length)return n(f,E),At&&qr(f,b),P;if(E===null){for(;b<x.length;b++)E=d(f,x[b],S),E!==null&&(g=s(E,g,b),A===null?P=E:A.sibling=E,A=E);return At&&qr(f,b),P}for(E=i(f,E);b<x.length;b++)V=p(E,f,b,x[b],S),V!==null&&(t&&V.alternate!==null&&E.delete(V.key===null?b:V.key),g=s(V,g,b),A===null?P=V:A.sibling=V,A=V);return t&&E.forEach(function(w){return e(f,w)}),At&&qr(f,b),P}function M(f,g,x,S){var P=Po(x);if(typeof P!="function")throw Error(Ce(150));if(x=P.call(x),x==null)throw Error(Ce(151));for(var A=P=null,E=g,b=g=0,V=null,_=x.next();E!==null&&!_.done;b++,_=x.next()){E.index>b?(V=E,E=null):V=E.sibling;var w=h(f,E,_.value,S);if(w===null){E===null&&(E=V);break}t&&E&&w.alternate===null&&e(f,E),g=s(w,g,b),A===null?P=w:A.sibling=w,A=w,E=V}if(_.done)return n(f,E),At&&qr(f,b),P;if(E===null){for(;!_.done;b++,_=x.next())_=d(f,_.value,S),_!==null&&(g=s(_,g,b),A===null?P=_:A.sibling=_,A=_);return At&&qr(f,b),P}for(E=i(f,E);!_.done;b++,_=x.next())_=p(E,f,b,_.value,S),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?b:_.key),g=s(_,g,b),A===null?P=_:A.sibling=_,A=_);return t&&E.forEach(function(C){return e(f,C)}),At&&qr(f,b),P}function m(f,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ks&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:e:{for(var P=x.key,A=g;A!==null;){if(A.key===P){if(P=x.type,P===ks){if(A.tag===7){n(f,A.sibling),g=r(A,x.props.children),g.return=f,f=g;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===pr&&Dm(P)===A.type){n(f,A.sibling),g=r(A,x.props),g.ref=Uo(f,A,x),g.return=f,f=g;break e}n(f,A);break}else e(f,A);A=A.sibling}x.type===ks?(g=is(x.props.children,f.mode,S,x.key),g.return=f,f=g):(S=$l(x.type,x.key,x.props,null,f.mode,S),S.ref=Uo(f,g,x),S.return=f,f=S)}return o(f);case Fs:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(f,g.sibling),g=r(g,x.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Fu(x,f.mode,S),g.return=f,f=g}return o(f);case pr:return A=x._init,m(f,g,A(x._payload),S)}if(Ko(x))return y(f,g,x,S);if(Po(x))return M(f,g,x,S);rl(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,x),g.return=f,f=g):(n(f,g),g=zu(x,f.mode,S),g.return=f,f=g),o(f)):n(f,g)}return m}var mo=Bv(!0),Hv=Bv(!1),wc=zr(null),Ec=null,Ys=null,Gf=null;function Wf(){Gf=Ys=Ec=null}function jf(t){var e=wc.current;Et(wc),t._currentValue=e}function rh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){Ec=t,Gf=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ii(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Ec===null)throw Error(Ce(308));Ys=t,Ec.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var es=null;function Xf(t){es===null?es=[t]:es.push(t)}function Vv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,Xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}function Nm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,i){var r=t.updateQueue;mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,M=a;switch(h=e,p=n,M.tag){case 1:if(y=M.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=M.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=Pt({},d,h);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=d}}function Im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ce(191,r));r.call(i)}}}var Ba={},Li=zr(Ba),Ea=zr(Ba),Ta=zr(Ba);function ts(t){if(t===Ba)throw Error(Ce(174));return t}function qf(t,e){switch(yt(Ta,e),yt(Ea,t),yt(Li,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}Et(Li),yt(Li,e)}function go(){Et(Li),Et(Ea),Et(Ta)}function Wv(t){ts(Ta.current);var e=ts(Li.current),n=Fd(e,t.type);e!==n&&(yt(Ea,t),yt(Li,n))}function Kf(t){Ea.current===t&&(Et(Li),Et(Ea))}var bt=zr(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function Zf(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var ql=nr.ReactCurrentDispatcher,Du=nr.ReactCurrentBatchConfig,os=0,Rt=null,Ht=null,Kt=null,bc=!1,sa=!1,Aa=0,V1=0;function ln(){throw Error(Ce(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function Qf(t,e,n,i,r,s){if(os=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?X1:Y1,t=n(i,r),sa){s=0;do{if(sa=!1,Aa=0,25<=s)throw Error(Ce(301));s+=1,Kt=Ht=null,e.updateQueue=null,ql.current=q1,t=n(i,r)}while(sa)}if(ql.current=Cc,e=Ht!==null&&Ht.next!==null,os=0,Kt=Ht=Rt=null,bc=!1,e)throw Error(Ce(300));return t}function $f(){var t=Aa!==0;return Aa=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Rt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function ri(){if(Ht===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Kt===null?Rt.memoizedState:Kt.next;if(e!==null)Kt=e,Ht=t;else{if(t===null)throw Error(Ce(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Kt===null?Rt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function ba(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=ri(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((os&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Rt.lanes|=u,as|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=ri(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jv(){}function Xv(t,e){var n=Rt,i=ri(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,ep(Kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,Ca(9,qv.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(Ce(349));os&30||Yv(n,e,r)}return r}function Yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qv(t,e,n,i){e.value=n,e.getSnapshot=i,Zv(e)&&Jv(t)}function Kv(t,e,n){return n(function(){Zv(e)&&Jv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function Jv(t){var e=er(t,1);e!==null&&yi(e,t,1,-1)}function Um(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=j1.bind(null,Rt,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qv(){return ri().memoizedState}function Kl(t,e,n,i){var r=Ei();Rt.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function qc(t,e,n,i){var r=ri();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&Jf(i,o.deps)){r.memoizedState=Ca(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function Om(t,e){return Kl(8390656,8,t,e)}function ep(t,e){return qc(2048,8,t,e)}function $v(t,e){return qc(4,2,t,e)}function ex(t,e){return qc(4,4,t,e)}function tx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nx(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,tx.bind(null,e,t),n)}function tp(){}function ix(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rx(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sx(t,e,n){return os&21?(_i(n,e)||(n=uv(),Rt.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function G1(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Du.transition;Du.transition={};try{t(!1),e()}finally{pt=n,Du.transition=i}}function ox(){return ri().memoizedState}function W1(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ax(t))lx(e,n);else if(n=Vv(t,e,n,i),n!==null){var r=yn();yi(n,t,i,r),cx(n,e,i)}}function j1(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(t))lx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,Xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vv(t,e,r,i),n!==null&&(r=yn(),yi(n,t,i,r),cx(n,e,i))}}function ax(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function lx(t,e){sa=bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}var Cc={readContext:ii,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},X1={readContext:ii,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:ii,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4194308,4,tx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kl(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=W1.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:Um,useDebugValue:tp,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=Um(!1),e=t[0];return t=G1.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=Ei();if(At){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=e(),Qt===null)throw Error(Ce(349));os&30||Yv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Om(Kv.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,qv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=Qt.identifierPrefix;if(At){var n=qi,i=Yi;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=V1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y1={readContext:ii,useCallback:ix,useContext:ii,useEffect:ep,useImperativeHandle:nx,useInsertionEffect:$v,useLayoutEffect:ex,useMemo:rx,useReducer:Nu,useRef:Qv,useState:function(){return Nu(ba)},useDebugValue:tp,useDeferredValue:function(t){var e=ri();return sx(e,Ht.memoizedState,t)},useTransition:function(){var t=Nu(ba)[0],e=ri().memoizedState;return[t,e]},useMutableSource:jv,useSyncExternalStore:Xv,useId:ox,unstable_isNewReconciler:!1},q1={readContext:ii,useCallback:ix,useContext:ii,useEffect:ep,useImperativeHandle:nx,useInsertionEffect:$v,useLayoutEffect:ex,useMemo:rx,useReducer:Iu,useRef:Qv,useState:function(){return Iu(ba)},useDebugValue:tp,useDeferredValue:function(t){var e=ri();return Ht===null?e.memoizedState=t:sx(e,Ht.memoizedState,t)},useTransition:function(){var t=Iu(ba)[0],e=ri().memoizedState;return[t,e]},useMutableSource:jv,useSyncExternalStore:Xv,useId:ox,unstable_isNewReconciler:!1};function di(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Pr(t),s=Ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(yi(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Pr(t),s=Ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(yi(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=Pr(t),r=Ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(yi(e,t,i,n),Yl(e,t,i))}};function zm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function ux(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=ii(s):(r=Ln(e)?rs:mn.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kc.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ii(s):(s=Ln(e)?rs:mn.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kc.enqueueReplaceState(r,r.state,null),Tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,e){try{var n="",i=e;do n+=M_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K1=typeof WeakMap=="function"?WeakMap:Map;function dx(t,e,n){n=Ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pc||(Pc=!0,vh=i),ah(t,e)},n}function hx(t,e,n){n=Ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ah(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ah(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function km(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cS.bind(null,t,e,n),e.then(t,t))}function Bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ji(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var Z1=nr.ReactCurrentOwner,Cn=!1;function vn(t,e,n,i){e.child=t===null?Hv(e,null,n,i):mo(e,t.child,n,i)}function Vm(t,e,n,i,r){n=n.render;var s=e.ref;return ro(e,r),i=Qf(t,e,n,i,s,r),n=$f(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(At&&n&&Bf(e),e.flags|=1,vn(t,e,i,r),e.child)}function Gm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fx(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function fx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return lh(t,e,n,i,r)}function px(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Ks,Bn),Bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Ks,Bn),Bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Ks,Bn),Bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Ks,Bn),Bn|=i;return vn(t,e,r,n),e.child}function mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lh(t,e,n,i,r){var s=Ln(n)?rs:mn.current;return s=fo(e,s),ro(e,r),n=Qf(t,e,n,i,s,r),i=$f(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(At&&i&&Bf(e),e.flags|=1,vn(t,e,n,r),e.child)}function Wm(t,e,n,i,r){if(Ln(n)){var s=!0;_c(e)}else s=!1;if(ro(e,r),e.stateNode===null)Zl(t,e),ux(e,n,i),oh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ii(c):(c=Ln(n)?rs:mn.current,c=fo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Fm(e,o,i,c),mr=!1;var h=e.memoizedState;o.state=h,Tc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Pn.current||mr?(typeof u=="function"&&(sh(e,n,u,i),l=e.memoizedState),(a=mr||zm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:di(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ii(l):(l=Ln(n)?rs:mn.current,l=fo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Fm(e,o,i,l),mr=!1,h=e.memoizedState,o.state=h,Tc(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||Pn.current||mr?(typeof p=="function"&&(sh(e,n,p,i),y=e.memoizedState),(c=mr||zm(e,n,c,i,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ch(t,e,n,i,s,r)}function ch(t,e,n,i,r,s){mx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Rm(e,n,!1),tr(t,e,s);i=e.stateNode,Z1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Rm(e,n,!0),e.child}function gx(t){var e=t.stateNode;e.pendingContext?Cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cm(t,e.context,!1),qf(t,e.containerInfo)}function jm(t,e,n,i,r){return po(),Vf(r),e.flags|=256,vn(t,e,n,i),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function vx(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(bt,r&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,i,0,null),t=is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dh(n),e.memoizedState=uh,t):np(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return J1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=is(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uh,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function np(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,i){return i!==null&&Vf(i),mo(e,t.child,null,n),t=np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function J1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uu(Error(Ce(422))),sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qc({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=dh(o),e.memoizedState=uh,s);if(!(e.mode&1))return sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ce(419)),i=Uu(s,i,void 0),sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Cn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),yi(i,t,r,-1))}return lp(),i=Uu(Error(Ce(421))),sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Gn=br(r.nextSibling),Wn=e,At=!0,pi=null,t!==null&&(Zn[Jn++]=Yi,Zn[Jn++]=qi,Zn[Jn++]=ss,Yi=t.id,qi=t.overflow,ss=e),e=np(e,i.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rh(t.return,e,n)}function Ou(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function xx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ou(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ac(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ou(e,!0,n,null,s);break;case"together":Ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ce(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Q1(t,e,n){switch(e.tag){case 3:gx(e),po();break;case 5:Wv(e);break;case 1:Ln(e.type)&&_c(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?vx(t,e,n):(yt(bt,bt.current&1),t=tr(t,e,n),t!==null?t.sibling:null);yt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return xx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,px(t,e,n)}return tr(t,e,n)}var yx,hh,_x,Sx;yx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hh=function(){};_x=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Li.current);var s=null;switch(n){case"input":r=Id(t,r),i=Id(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=zd(t,r),i=zd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xc)}kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oo(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $1(t,e,n){var i=e.pendingProps;switch(Hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Ln(e.type)&&yc(),cn(e),null;case 3:return i=e.stateNode,go(),Et(Pn),Et(mn),Zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pi!==null&&(_h(pi),pi=null))),hh(t,e),cn(e),null;case 5:Kf(e);var r=ts(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)_x(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ce(166));return cn(e),null}if(t=ts(Li.current),il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ci]=e,i[wa]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Jo.length;r++)wt(Jo[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":tm(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":im(i,s),wt("invalid",i)}kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":qa(i),nm(i,s,!0);break;case"textarea":qa(i),rm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ci]=e,t[wa]=i,yx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Jo.length;r++)wt(Jo[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":tm(t,i),r=Id(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),wt("invalid",t);break;case"textarea":im(t,i),r=zd(t,i),wt("invalid",t);break;default:r=i}kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&Af(t,s,l,o))}switch(n){case"input":qa(t),nm(t,i,!1);break;case"textarea":qa(t),rm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?eo(t,!!i.multiple,s,!1):i.defaultValue!=null&&eo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ce(166));if(n=ts(Ta.current),ts(Li.current),il(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ci]=e,(s=i.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:nl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return cn(e),null;case 13:if(Et(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Gn!==null&&e.mode&1&&!(e.flags&128))kv(),po(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[Ci]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else pi!==null&&(_h(pi),pi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Gt===0&&(Gt=3):lp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return go(),hh(t,e),t===null&&Sa(e.stateNode.containerInfo),cn(e),null;case 10:return jf(e.type._context),cn(e),null;case 17:return Ln(e.type)&&yc(),cn(e),null;case 19:if(Et(bt),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ac(t),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>xo&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ac(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return cn(e),null}else 2*Ut()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=bt.current,yt(bt,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return ap(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Bn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(Ce(156,e.tag))}function eS(t,e){switch(Hf(e),e.tag){case 1:return Ln(e.type)&&yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Et(Pn),Et(mn),Zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kf(e),null;case 13:if(Et(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ce(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(bt),null;case 4:return go(),null;case 10:return jf(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var ol=!1,pn=!1,tS=typeof WeakSet=="function"?WeakSet:Set,ke=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function fh(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Ym=!1;function nS(t,e){if(Zd=mc,t=Av(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:t,selectionRange:n},mc=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){e=ke;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var M=y.memoizedProps,m=y.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:di(e.type,M),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}return y=Ym,Ym=!1,y}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fh(e,n,s)}r=r.next}while(r!==i)}}function Zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mx(t){var e=t.alternate;e!==null&&(t.alternate=null,Mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ci],delete e[wa],delete e[eh],delete e[F1],delete e[k1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wx(t){return t.tag===5||t.tag===3||t.tag===4}function qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xc));else if(i!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}function gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}var en=null,hi=!1;function sr(t,e,n){for(n=n.child;n!==null;)Ex(t,e,n),n=n.sibling}function Ex(t,e,n){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:pn||qs(n,e);case 6:var i=en,r=hi;en=null,sr(t,e,n),en=i,hi=r,en!==null&&(hi?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(hi?(t=en,n=n.stateNode,t.nodeType===8?Ru(t.parentNode,n):t.nodeType===1&&Ru(t,n),xa(t)):Ru(en,n.stateNode));break;case 4:i=en,r=hi,en=n.stateNode.containerInfo,hi=!0,sr(t,e,n),en=i,hi=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fh(n,e,o),r=r.next}while(r!==i)}sr(t,e,n);break;case 1:if(!pn&&(qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,sr(t,e,n),pn=i):sr(t,e,n);break;default:sr(t,e,n)}}function Km(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(i){var r=dS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ai(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,hi=!1;break e;case 3:en=a.stateNode.containerInfo,hi=!0;break e;case 4:en=a.stateNode.containerInfo,hi=!0;break e}a=a.return}if(en===null)throw Error(Ce(160));Ex(s,o,r),en=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tx(e,t),e=e.sibling}function Tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(e,t),wi(t),i&4){try{oa(3,t,t.return),Zc(3,t)}catch(M){Nt(t,t.return,M)}try{oa(5,t,t.return)}catch(M){Nt(t,t.return,M)}}break;case 1:ai(e,t),wi(t),i&512&&n!==null&&qs(n,n.return);break;case 5:if(ai(e,t),wi(t),i&512&&n!==null&&qs(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(M){Nt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yg(r,s),Bd(a,o);var c=Bd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Qg(r,d):u==="dangerouslySetInnerHTML"?Zg(r,d):u==="children"?pa(r,d):Af(r,u,d,c)}switch(a){case"input":Ud(r,s);break;case"textarea":qg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?eo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?eo(r,!!s.multiple,s.defaultValue,!0):eo(r,!!s.multiple,s.multiple?[]:"",!1))}r[wa]=s}catch(M){Nt(t,t.return,M)}}break;case 6:if(ai(e,t),wi(t),i&4){if(t.stateNode===null)throw Error(Ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Nt(t,t.return,M)}}break;case 3:if(ai(e,t),wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(M){Nt(t,t.return,M)}break;case 4:ai(e,t),wi(t);break;case 13:ai(e,t),wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sp=Ut())),i&4&&Km(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||u,ai(e,t),pn=c):ai(e,t),wi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ke=t,u=t.child;u!==null;){for(d=ke=u;ke!==null;){switch(h=ke,p=h.child,h.tag){case 0:case 11:case 14:case 15:oa(4,h,h.return);break;case 1:qs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(M){Nt(i,n,M)}}break;case 5:qs(h,h.return);break;case 22:if(h.memoizedState!==null){Jm(d);continue}}p!==null?(p.return=h,ke=p):Jm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jg("display",o))}catch(M){Nt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Nt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ai(e,t),wi(t),i&4&&Km(t);break;case 21:break;default:ai(e,t),wi(t)}}function wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wx(n)){var i=n;break e}n=n.return}throw Error(Ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=qm(t);gh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=qm(t);mh(t,a,o);break;default:throw Error(Ce(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){ke=t,Ax(t)}function Ax(t,e,n){for(var i=(t.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=ol;var c=pn;if(ol=o,(pn=l)&&!c)for(ke=r;ke!==null;)o=ke,l=o.child,o.tag===22&&o.memoizedState!==null?Qm(r):l!==null?(l.return=o,ke=l):Qm(r);for(;s!==null;)ke=s,Ax(s),s=s.sibling;ke=r,ol=a,pn=c}Zm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):Zm(t)}}function Zm(t){for(;ke!==null;){var e=ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||Zc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:di(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Im(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Im(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}pn||e.flags&512&&ph(e)}catch(h){Nt(e,e.return,h)}}if(e===t){ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}}function Jm(t){for(;ke!==null;){var e=ke;if(e===t){ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ke=n;break}ke=e.return}}function Qm(t){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{ph(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{ph(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ke=a;break}ke=e.return}}var rS=Math.ceil,Rc=nr.ReactCurrentDispatcher,ip=nr.ReactCurrentOwner,ti=nr.ReactCurrentBatchConfig,lt=0,Qt=null,zt=null,sn=0,Bn=0,Ks=zr(0),Gt=0,Ra=null,as=0,Jc=0,rp=0,aa=null,An=null,sp=0,xo=1/0,Wi=null,Pc=!1,vh=null,Rr=null,al=!1,Mr=null,Lc=0,la=0,xh=null,Jl=-1,Ql=0;function yn(){return lt&6?Ut():Jl!==-1?Jl:Jl=Ut()}function Pr(t){return t.mode&1?lt&2&&sn!==0?sn&-sn:H1.transition!==null?(Ql===0&&(Ql=uv()),Ql):(t=pt,t!==0||(t=window.event,t=t===void 0?16:vv(t.type)),t):1}function yi(t,e,n,i){if(50<la)throw la=0,xh=null,Error(Ce(185));za(t,n,i),(!(lt&2)||t!==Qt)&&(t===Qt&&(!(lt&2)&&(Jc|=n),Gt===4&&vr(t,sn)),Dn(t,i),n===1&&lt===0&&!(e.mode&1)&&(xo=Ut()+500,Yc&&Fr()))}function Dn(t,e){var n=t.callbackNode;H_(t,e);var i=pc(t,t===Qt?sn:0);if(i===0)n!==null&&am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&am(n),e===1)t.tag===0?B1($m.bind(null,t)):Ov($m.bind(null,t)),O1(function(){!(lt&6)&&Fr()}),n=null;else{switch(dv(i)){case 1:n=Lf;break;case 4:n=lv;break;case 16:n=fc;break;case 536870912:n=cv;break;default:n=fc}n=Ix(n,bx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bx(t,e){if(Jl=-1,Ql=0,lt&6)throw Error(Ce(327));var n=t.callbackNode;if(so()&&t.callbackNode!==n)return null;var i=pc(t,t===Qt?sn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=lt;lt|=2;var s=Rx();(Qt!==t||sn!==e)&&(Wi=null,xo=Ut()+500,ns(t,e));do try{aS();break}catch(a){Cx(t,a)}while(!0);Wf(),Rc.current=s,lt=r,zt!==null?e=0:(Qt=null,sn=0,e=Gt)}if(e!==0){if(e===2&&(r=jd(t),r!==0&&(i=r,e=yh(t,r))),e===1)throw n=Ra,ns(t,0),vr(t,i),Dn(t,Ut()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!sS(r)&&(e=Dc(t,i),e===2&&(s=jd(t),s!==0&&(i=s,e=yh(t,s))),e===1))throw n=Ra,ns(t,0),vr(t,i),Dn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ce(345));case 2:Kr(t,An,Wi);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=sp+500-Ut(),10<e)){if(pc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$d(Kr.bind(null,t,An,Wi),e);break}Kr(t,An,Wi);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-xi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rS(i/1960))-i,10<i){t.timeoutHandle=$d(Kr.bind(null,t,An,Wi),i);break}Kr(t,An,Wi);break;case 5:Kr(t,An,Wi);break;default:throw Error(Ce(329))}}}return Dn(t,Ut()),t.callbackNode===n?bx.bind(null,t):null}function yh(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=An,An=n,e!==null&&_h(e)),t}function _h(t){An===null?An=t:An.push.apply(An,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~rp,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xi(e),i=1<<n;t[n]=-1,e&=~i}}function $m(t){if(lt&6)throw Error(Ce(327));so();var e=pc(t,0);if(!(e&1))return Dn(t,Ut()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=jd(t);i!==0&&(e=i,n=yh(t,i))}if(n===1)throw n=Ra,ns(t,0),vr(t,e),Dn(t,Ut()),n;if(n===6)throw Error(Ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,An,Wi),Dn(t,Ut()),null}function op(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(xo=Ut()+500,Yc&&Fr())}}function ls(t){Mr!==null&&Mr.tag===0&&!(lt&6)&&so();var e=lt;lt|=1;var n=ti.transition,i=pt;try{if(ti.transition=null,pt=1,t)return t()}finally{pt=i,ti.transition=n,lt=e,!(lt&6)&&Fr()}}function ap(){Bn=Ks.current,Et(Ks)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,U1(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(Hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yc();break;case 3:go(),Et(Pn),Et(mn),Zf();break;case 5:Kf(i);break;case 4:go();break;case 13:Et(bt);break;case 19:Et(bt);break;case 10:jf(i.type._context);break;case 22:case 23:ap()}n=n.return}if(Qt=t,zt=t=Lr(t.current,null),sn=Bn=e,Gt=0,Ra=null,rp=Jc=as=0,An=aa=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}es=null}return t}function Cx(t,e){do{var n=zt;try{if(Wf(),ql.current=Cc,bc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bc=!1}if(os=0,Kt=Ht=Rt=null,sa=!1,Aa=0,ip.current=null,n===null||n.return===null){Gt=1,Ra=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Bm(o);if(p!==null){p.flags&=-257,Hm(p,o,a,s,e),p.mode&1&&km(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var M=new Set;M.add(l),e.updateQueue=M}else y.add(l);break e}else{if(!(e&1)){km(s,c,e),lp();break e}l=Error(Ce(426))}}else if(At&&a.mode&1){var m=Bm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Hm(m,o,a,s,e),Vf(vo(l,a));break e}}s=l=vo(l,a),Gt!==4&&(Gt=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=dx(s,l,e);Nm(s,f);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Rr===null||!Rr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=hx(s,a,e);Nm(s,S);break e}}s=s.return}while(s!==null)}Lx(n)}catch(P){e=P,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Rx(){var t=Rc.current;return Rc.current=Cc,t===null?Cc:t}function lp(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Qt===null||!(as&268435455)&&!(Jc&268435455)||vr(Qt,sn)}function Dc(t,e){var n=lt;lt|=2;var i=Rx();(Qt!==t||sn!==e)&&(Wi=null,ns(t,e));do try{oS();break}catch(r){Cx(t,r)}while(!0);if(Wf(),lt=n,Rc.current=i,zt!==null)throw Error(Ce(261));return Qt=null,sn=0,Gt}function oS(){for(;zt!==null;)Px(zt)}function aS(){for(;zt!==null&&!D_();)Px(zt)}function Px(t){var e=Nx(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,e===null?Lx(t):zt=e,ip.current=null}function Lx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}else if(n=$1(n,e,Bn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Kr(t,e,n){var i=pt,r=ti.transition;try{ti.transition=null,pt=1,lS(t,e,n,i)}finally{ti.transition=r,pt=i}return null}function lS(t,e,n,i){do so();while(Mr!==null);if(lt&6)throw Error(Ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V_(t,s),t===Qt&&(zt=Qt=null,sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Ix(fc,function(){return so(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var o=pt;pt=1;var a=lt;lt|=4,ip.current=null,nS(t,n),Tx(n,t),C1(Jd),mc=!!Zd,Jd=Zd=null,t.current=n,iS(n),N_(),lt=a,pt=o,ti.transition=s}else t.current=n;if(al&&(al=!1,Mr=t,Lc=r),s=t.pendingLanes,s===0&&(Rr=null),O_(n.stateNode),Dn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pc)throw Pc=!1,t=vh,vh=null,t;return Lc&1&&t.tag!==0&&so(),s=t.pendingLanes,s&1?t===xh?la++:(la=0,xh=t):la=0,Fr(),null}function so(){if(Mr!==null){var t=dv(Lc),e=ti.transition,n=pt;try{if(ti.transition=null,pt=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,Lc=0,lt&6)throw Error(Ce(331));var r=lt;for(lt|=4,ke=t.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ke=c;ke!==null;){var u=ke;switch(u.tag){case 0:case 11:case 15:oa(8,u,s)}var d=u.child;if(d!==null)d.return=u,ke=d;else for(;ke!==null;){u=ke;var h=u.sibling,p=u.return;if(Mx(u),u===c){ke=null;break}if(h!==null){h.return=p,ke=h;break}ke=p}}}var y=s.alternate;if(y!==null){var M=y.child;if(M!==null){y.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ke=f;break e}ke=s.return}}var g=t.current;for(ke=g;ke!==null;){o=ke;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ke=x;else e:for(o=g;ke!==null;){if(a=ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zc(9,a)}}catch(P){Nt(a,a.return,P)}if(a===o){ke=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ke=S;break e}ke=a.return}}if(lt=r,Fr(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(Vc,t)}catch{}i=!0}return i}finally{pt=n,ti.transition=e}}return!1}function e0(t,e,n){e=vo(n,e),e=dx(t,e,1),t=Cr(t,e,1),e=yn(),t!==null&&(za(t,1,e),Dn(t,e))}function Nt(t,e,n){if(t.tag===3)e0(t,t,n);else for(;e!==null;){if(e.tag===3){e0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=vo(n,t),t=hx(e,t,1),e=Cr(e,t,1),t=yn(),e!==null&&(za(e,1,t),Dn(e,t));break}}e=e.return}}function cS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(sn&n)===n&&(Gt===4||Gt===3&&(sn&130023424)===sn&&500>Ut()-sp?ns(t,0):rp|=n),Dn(t,e)}function Dx(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=yn();t=er(t,e),t!==null&&(za(t,e,n),Dn(t,n))}function uS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dx(t,n)}function dS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ce(314))}i!==null&&i.delete(e),Dx(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,Q1(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,At&&e.flags&1048576&&zv(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zl(t,e),t=e.pendingProps;var r=fo(e,mn.current);ro(e,n),r=Qf(null,e,i,t,r,n);var s=$f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yf(e),r.updater=Kc,e.stateNode=r,r._reactInternals=e,oh(e,i,t,n),e=ch(null,e,i,!0,s,n)):(e.tag=0,At&&s&&Bf(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fS(i),t=di(i,t),r){case 0:e=lh(null,e,i,t,n);break e;case 1:e=Wm(null,e,i,t,n);break e;case 11:e=Vm(null,e,i,t,n);break e;case 14:e=Gm(null,e,i,di(i.type,t),n);break e}throw Error(Ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),lh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),Wm(t,e,i,r,n);case 3:e:{if(gx(e),t===null)throw Error(Ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gv(t,e),Tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vo(Error(Ce(423)),e),e=jm(t,e,i,n,r);break e}else if(i!==r){r=vo(Error(Ce(424)),e),e=jm(t,e,i,n,r);break e}else for(Gn=br(e.stateNode.containerInfo.firstChild),Wn=e,At=!0,pi=null,n=Hv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),i===r){e=tr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return Wv(e),t===null&&ih(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qd(i,r)?o=null:s!==null&&Qd(i,s)&&(e.flags|=32),mx(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&ih(e),null;case 13:return vx(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=mo(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),Vm(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(wc,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!Pn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ro(e,n),r=ii(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=di(i,e.pendingProps),r=di(i.type,r),Gm(t,e,i,r,n);case 15:return fx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),Zl(t,e),e.tag=1,Ln(i)?(t=!0,_c(e)):t=!1,ro(e,n),ux(e,i,r),oh(e,i,r,n),ch(null,e,i,!0,t,n);case 19:return xx(t,e,n);case 22:return px(t,e,n)}throw Error(Ce(156,e.tag))};function Ix(t,e){return av(t,e)}function hS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,e,n,i){return new hS(t,e,n,i)}function cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cf)return 11;if(t===Rf)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return is(n.children,r,s,e);case bf:o=8,r|=8;break;case Pd:return t=Qn(12,n,e,r|2),t.elementType=Pd,t.lanes=s,t;case Ld:return t=Qn(13,n,e,r),t.elementType=Ld,t.lanes=s,t;case Dd:return t=Qn(19,n,e,r),t.elementType=Dd,t.lanes=s,t;case Wg:return Qc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vg:o=10;break e;case Gg:o=9;break e;case Cf:o=11;break e;case Rf:o=14;break e;case pr:o=16,i=null;break e}throw Error(Ce(130,t==null?t:typeof t,""))}return e=Qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function is(t,e,n,i){return t=Qn(7,t,i,e),t.lanes=n,t}function Qc(t,e,n,i){return t=Qn(22,t,i,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function zu(t,e,n){return t=Qn(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=Qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function up(t,e,n,i,r,s,o,a,l){return t=new pS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(s),t}function mS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ux(t){if(!t)return Ir;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(Ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ce(171))}if(t.tag===1){var n=t.type;if(Ln(n))return Uv(t,n,e)}return e}function Ox(t,e,n,i,r,s,o,a,l){return t=up(n,i,!0,t,r,s,o,a,l),t.context=Ux(null),n=t.current,i=yn(),r=Pr(n),s=Ji(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,za(t,r,i),Dn(t,i),t}function $c(t,e,n,i){var r=e.current,s=yn(),o=Pr(r);return n=Ux(n),e.context===null?e.context=n:e.pendingContext=n,e=Ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,o),t!==null&&(yi(t,r,o,s),Yl(t,r,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function t0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dp(t,e){t0(t,e),(t=t.alternate)&&t0(t,e)}function gS(){return null}var zx=typeof reportError=="function"?reportError:function(t){console.error(t)};function hp(t){this._internalRoot=t}eu.prototype.render=hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ce(409));$c(t,e,null,null)};eu.prototype.unmount=hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){$c(null,t,null,null)}),e[$i]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&gv(t)}};function fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n0(){}function vS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nc(o);s.call(c)}}var o=Ox(e,i,t,0,null,!1,!1,"",n0);return t._reactRootContainer=o,t[$i]=o.current,Sa(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Nc(l);a.call(c)}}var l=up(t,0,!1,null,null,!1,!1,"",n0);return t._reactRootContainer=l,t[$i]=l.current,Sa(t.nodeType===8?t.parentNode:t),ls(function(){$c(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Nc(o);a.call(l)}}$c(e,o,t,r)}else o=vS(n,e,t,r,i);return Nc(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(Df(e,n|1),Dn(e,Ut()),!(lt&6)&&(xo=Ut()+500,Fr()))}break;case 13:ls(function(){var i=er(t,1);if(i!==null){var r=yn();yi(i,t,1,r)}}),dp(t,1)}};Nf=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=yn();yi(e,t,134217728,n)}dp(t,134217728)}};fv=function(t){if(t.tag===13){var e=Pr(t),n=er(t,e);if(n!==null){var i=yn();yi(n,t,e,i)}dp(t,e)}};pv=function(){return pt};mv=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Vd=function(t,e,n){switch(e){case"input":if(Ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xc(i);if(!r)throw Error(Ce(90));Xg(i),Ud(i,r)}}}break;case"textarea":qg(t,n);break;case"select":e=n.value,e!=null&&eo(t,!!n.multiple,e,!1)}};tv=op;nv=ls;var xS={usingClientEntryPoint:!1,Events:[ka,Gs,Xc,$g,ev,op]},zo={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yS={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sv(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Vc=ll.inject(yS),Pi=ll}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;Xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(e))throw Error(Ce(200));return mS(t,e,null,n)};Xn.createRoot=function(t,e){if(!fp(t))throw Error(Ce(299));var n=!1,i="",r=zx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,Sa(t.nodeType===8?t.parentNode:t),new hp(e)};Xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ce(188)):(t=Object.keys(t).join(","),Error(Ce(268,t)));return t=sv(e),t=t===null?null:t.stateNode,t};Xn.flushSync=function(t){return ls(t)};Xn.hydrate=function(t,e,n){if(!tu(e))throw Error(Ce(200));return nu(null,t,e,!0,n)};Xn.hydrateRoot=function(t,e,n){if(!fp(t))throw Error(Ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=zx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ox(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,Sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};Xn.render=function(t,e,n){if(!tu(e))throw Error(Ce(200));return nu(null,t,e,!1,n)};Xn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(Ce(40));return t._reactRootContainer?(ls(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Xn.unstable_batchedUpdates=op;Xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(Ce(200));if(t==null||t._reactInternals===void 0)throw Error(Ce(38));return nu(t,e,n,!1,i)};Xn.version="18.3.1-next-f1338f8080-20240426";function Fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fx)}catch(t){console.error(t)}}Fx(),Fg.exports=Xn;var _S=Fg.exports,i0=_S;Cd.createRoot=i0.createRoot,Cd.hydrateRoot=i0.hydrateRoot;const kx=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"pouf",name:"Pouf",category:"Seating",w:.5,d:.5,h:.4,color:"#b6855f",shape:"pouf"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"ladder-shelf",name:"Ladder Shelf",category:"Storage",w:.6,d:.4,h:1.7,color:"#9a6f43",shape:"ladder"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fireplace",name:"Fireplace",category:"Decor",w:1.3,d:.4,h:1.1,color:"#cfcabf",shape:"fireplace"},{type:"floor-mirror",name:"Floor Mirror",category:"Decor",w:.7,d:.06,h:1.7,color:"#caa86a",shape:"mirror"},{type:"bar-cart",name:"Bar Cart",category:"Decor",w:.7,d:.42,h:.8,color:"#b8923f",shape:"barcart"},{type:"piano",name:"Upright Piano",category:"Decor",w:1.5,d:.6,h:1.2,color:"#161616",shape:"piano"},{type:"coat-rack",name:"Coat Rack",category:"Decor",w:.5,d:.5,h:1.75,color:"#5a4636",shape:"coatrack"},{type:"floor-vase",name:"Floor Vase",category:"Decor",w:.32,d:.32,h:.85,color:"#9a8f7a",shape:"vase"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"island",name:"Kitchen Island",category:"Kitchen",w:1.4,d:.9,h:.9,color:"#7d7f83",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"},{type:"oven",name:"Stove / Oven",category:"Kitchen",w:.6,d:.62,h:.9,color:"#d3d7dc",shape:"oven"},{type:"sink",name:"Kitchen Sink",category:"Kitchen",w:.85,d:.6,h:.9,color:"#7a5c41",shape:"sink"},{type:"dishwasher",name:"Dishwasher",category:"Kitchen",w:.6,d:.6,h:.85,color:"#cfd4da",shape:"appliance"},{type:"washer",name:"Washing Machine",category:"Appliances",w:.6,d:.62,h:.85,color:"#e8eaec",shape:"washer"},{type:"dryer",name:"Dryer",category:"Appliances",w:.6,d:.62,h:.85,color:"#dfe2e5",shape:"washer"},{type:"chest-freezer",name:"Chest Freezer",category:"Appliances",w:1,d:.6,h:.85,color:"#e2e6ea",shape:"appliance"},{type:"water-heater",name:"Water Heater",category:"Appliances",w:.55,d:.55,h:1.5,color:"#d9dde1",shape:"fridge"},{type:"ac-unit",name:"AC Unit",category:"Appliances",w:.5,d:.5,h:.7,color:"#cfd4da",shape:"appliance"},{type:"toilet",name:"Toilet",category:"Bathroom",w:.4,d:.68,h:.78,color:"#f2f2f0",shape:"toilet"},{type:"bathtub",name:"Bathtub",category:"Bathroom",w:1.7,d:.75,h:.56,color:"#f3f3f1",shape:"bathtub"},{type:"shower",name:"Shower",category:"Bathroom",w:.9,d:.9,h:2,color:"#e8e8e6",shape:"shower"},{type:"vanity",name:"Vanity",category:"Bathroom",w:.8,d:.5,h:.85,color:"#6f5a45",shape:"sink"},{type:"office-chair",name:"Office Chair",category:"Office",w:.6,d:.6,h:1.1,color:"#3a3a40",shape:"chair"},{type:"filing-cabinet",name:"Filing Cabinet",category:"Office",w:.45,d:.6,h:1.32,color:"#6b6f74",shape:"drawers"},{type:"office-desk",name:"Office Desk",category:"Office",w:1.5,d:.75,h:.75,color:"#5d5a55",shape:"desk"}],pp=Object.fromEntries(kx.map(t=>[t.type,t]));function Ti(t){return pp[t]||null}const SS=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],Bx="honeycutt.design.v2";let MS=1;const wn=()=>`${Date.now().toString(36)}-${(MS++).toString(36)}`;function Zs(){return{view:"2d",tool:"select",openingMode:!1,openShape:"rect",visitMode:!1,units:"ft",ambiance:"day",quality:"high",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],sketches:[],openings:[],selected:null}}function wS(){try{const t=localStorage.getItem(Bx);if(!t)return Zs();const e=JSON.parse(t);if(!e||!Array.isArray(e.items))return Zs();const n=e.view==="3d"?"3d":"2d",i=e.ambiance==="night"?"night":"day";return{...Zs(),...e,view:n,ambiance:i,tool:"select",openingMode:!1,visitMode:!1,selected:null}}catch{return Zs()}}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function ES(t){return t.scale&&(t.scale={x:rn(t.scale.x??1,.3,3),y:rn(t.scale.y??1,.3,3),z:rn(t.scale.z??1,.3,3)}),t}function Sh(t){return t.w=rn(t.w,.5,40),t.d=rn(t.d,.5,40),t.height!=null&&(t.height=rn(t.height,1.5,6)),t.floorScale!=null&&(t.floorScale=rn(t.floorScale,.3,4)),t}function Hx(t){return t.height!=null&&(t.height=rn(t.height,1.5,6)),t.thickness!=null&&(t.thickness=rn(t.thickness,.05,.5)),t}function Mh(t){return t.w!=null&&(t.w=rn(t.w,.1,12)),t.h!=null&&(t.h=rn(t.h,.1,6)),t.depth!=null&&(t.depth=rn(t.depth,.02,3)),t.thickness!=null&&(t.thickness=rn(t.thickness,.01,.4)),t}function Vx(t){return t.u!=null&&(t.u=Math.max(0,t.u)),t.v!=null&&(t.v=rn(t.v,0,6)),t.w!=null&&(t.w=rn(t.w,.1,12)),t.h!=null&&(t.h=rn(t.h,.1,6)),t}const wh={item:"items",room:"rooms",wall:"walls",builtin:"builtins",sketch:"sketches",opening:"openings"};function TS(t,e,n,i){const r=wh[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&ES(a),e==="room"&&Sh(a),e==="wall"&&Hx(a),e==="builtin"&&Mh(a),e==="opening"&&Vx(a),a});return{...t,[r]:s}}function ku(t,e){var n;switch(e.type){case"view":return{...t,view:e.view,openingMode:e.view==="3d"?t.openingMode:!1,visitMode:e.view==="3d"?t.visitMode:!1};case"openingMode":return{...t,openingMode:e.value,selected:e.value?null:t.selected};case"openShape":return{...t,openShape:e.value};case"visitMode":return{...t,visitMode:e.value,selected:e.value?null:t.selected,openingMode:e.value?!1:t.openingMode};case"ambiance":return{...t,ambiance:e.value};case"quality":return{...t,quality:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"defaultHeight":return{...t,defaultHeight:rn(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"loadRooms":{const i=e.rooms.map(r=>Sh({uid:wn(),height:t.defaultHeight,...r}));return{...Zs(),view:t.view,units:t.units,ambiance:t.ambiance,quality:t.quality,defaultHeight:t.defaultHeight,rooms:i,selected:null}}case"addRoom":{const i=Sh({uid:wn(),name:e.name||`Room ${t.rooms.length+1}`,x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],tool:"select",selected:{type:"room",uid:i.uid}}}case"addWall":{const i=Hx({uid:wn(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],tool:"select",selected:null}}case"floorAll":return{...t,rooms:t.rooms.map(i=>({...i,...e.patch}))};case"addBuiltin":{const i=Mh({uid:wn(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>Mh({uid:wn(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addOpening":{const i=Vx({uid:wn(),kind:"doorway",v:0,shape:"rect",...e.opening});return{...t,openings:[...t.openings,i],selected:{type:"opening",uid:i.uid}}}case"addSketch":{const i={uid:wn(),pts:e.pts,closed:!!e.closed,color:e.color||"#3f7d8c"};return{...t,sketches:[...t.sketches,i],selected:{type:"sketch",uid:i.uid}}}case"addItem":{const i=pp[e.kind];if(!i)return t;const r={uid:wn(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return TS(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=wh[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=wh[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:wn(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:wn(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:wn(),u:o.u+.3,v:o.v+.3}:i==="sketch"?a={...o,uid:wn(),pts:o.pts.map(l=>({x:l.x+.3,z:l.z+.3}))}:i==="opening"?a={...o,uid:wn(),u:o.u+.3}:a={...o,uid:wn(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...Zs(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const AS=new Set(["addRoom","addWall","addSketch","addItem","addBuiltin","addBuiltins","addOpening","floorAll","loadRooms","update","remove","duplicate","clear","reset","defaultHeight"]),Bu=80;function bS(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape,visitMode:t.present.visitMode},future:[t.present,...t.future].slice(0,Bu),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Bu),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape,visitMode:t.present.visitMode},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!AS.has(e.type))return{...t,present:ku(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:ku(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Bu),present:ku(t.present,e),future:[],lastKey:i||null,lastTime:n}}const Gx=Xe.createContext(null);function CS({children:t}){const[e,n]=Xe.useReducer(bS,void 0,()=>({past:[],present:wS(),future:[],lastKey:null,lastTime:0})),i=Xe.useRef(null),r=e.present;Xe.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(Bx,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=Xe.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return v.jsx(Gx.Provider,{value:s,children:t})}function Ao(){const t=Xe.useContext(Gx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}function RS(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function rt(t,e){return e==="m"?`${t.toFixed(2)} m`:RS(t)}function PS(t,e){return e==="m"?`${t.toFixed(1)} m²`:`${Math.round(t*10.7639)} ft²`}function xr(t,e){const n=e&&e.scale||{},i=e&&e.dim||t||{w:.5,d:.5,h:.5};return{w:i.w*(n.x??1),d:i.d*(n.z??1),h:i.h*(n.y??1)}}function oo(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function yr(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function r0(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const Wx=[{id:"oak_floor",label:"Oak Floor",group:"Wood",color:"#806042",normal:!0,repeat:1.4},{id:"wood_floor",label:"Wood Plank",group:"Wood",color:"#7a5c3e",normal:!1,repeat:1.4},{id:"light_oak",label:"Light Oak",group:"Wood",color:"#a17e58",normal:!0,repeat:1},{id:"walnut",label:"Walnut",group:"Wood",color:"#3e190b",normal:!0,repeat:1},{id:"parquet",label:"Parquet",group:"Wood",color:"#93704d",normal:!0,repeat:1.2},{id:"herringbone",label:"Herringbone",group:"Wood",color:"#9a7550",normal:!1,repeat:1},{id:"dark_wood",label:"Dark Plank",group:"Wood",color:"#4a3526",normal:!1,repeat:1.3},{id:"marble",label:"Marble",group:"Stone",color:"#b29d7a",normal:!0,repeat:2},{id:"granite",label:"Granite",group:"Stone",color:"#4e4e4f",normal:!1,repeat:1.6},{id:"floor_tile",label:"Floor Tile",group:"Tile",color:"#796f6b",normal:!0,repeat:1.2},{id:"patterned_tile",label:"Patterned Tile",group:"Tile",color:"#8a8077",normal:!1,repeat:1},{id:"brick",label:"Brick",group:"Masonry",color:"#8e6750",normal:!0,repeat:1.6},{id:"concrete",label:"Concrete",group:"Masonry",color:"#565654",normal:!0,repeat:2.2},{id:"plaster",label:"Plaster",group:"Wall",color:"#b0a89d",normal:!0,repeat:2.4},{id:"grey_plaster",label:"Grey Plaster",group:"Wall",color:"#9a968f",normal:!1,repeat:2.4},{id:"beige_wall",label:"Beige Wall",group:"Wall",color:"#cabfa9",normal:!1,repeat:2.6},{id:"fabric",label:"Fabric",group:"Soft",color:"#9a5955",normal:!0,repeat:.8},{id:"carpet",label:"Carpet",group:"Soft",color:"#352f25",normal:!1,repeat:1.5},{id:"grass",label:"Grass",group:"Outdoor",color:"#5f7d3f",normal:!1,repeat:1.5}],ec=Object.fromEntries(Wx.map(t=>[t.id,t])),ca=(t,e=!1)=>`./textures/${t}${e?"_n":""}.jpg`,LS="./hdri/studio.hdr";function On(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Br="rgba(0,0,0,0.22)",s0="rgba(0,0,0,0.28)";function jx({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,u=Math.max(.8,Math.min(s,o)*.025),d=On(i,.16),h=On(i,-.22),p=(M,m,f,g,x,S=c,P={})=>v.jsx("rect",{x:M,y:m,width:f,height:g,rx:S,ry:S,fill:x,...P});let y=null;switch(r){case"seat":{const M=o*.26,m=s*.12;y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,h,c)," ",p(a,l+M*.5,m,o-M*.5,h,c*.6),p(a+s-m,l+M*.5,m,o-M*.5,h,c*.6),p(a+m+u,l+M,s-2*(m+u),o-M-u,d,c*.5)]});break}case"chair":{const M=o*.22;y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,h,c),p(a+u,l+M,s-2*u,o-M-u,d,c*.5)]});break}case"bench":{y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a+s*.05,l+o*.18,s*.9,o*.64,d,c*.4)]});break}case"round":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),v.jsx("circle",{cx:0,cy:0,r:s*.3,fill:d})]});break;case"table":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u*1.5,l+u*1.5,s-3*u,o-3*u,i,c*.8),p(a+s*.12,l+o*.12,s*.76,o*.76,d,c*.5)]});break;case"desk":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.7),p(a+s*.62,l+u*2,s*.34,o-u*4,d,c*.4)]});break;case"round-table":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:h}),v.jsx("circle",{cx:0,cy:0,r:s/2-u*1.5,fill:i}),v.jsx("circle",{cx:0,cy:0,r:s*.34,fill:d})]});break;case"bed":{const M=o*.16,m=s*.4,f=o*.18;y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,M,h,c)," ",p(a+s*.05,l+M+o*.04,m,f,d,c*.4),p(a+s*.55,l+M+o*.04,m,f,d,c*.4),p(a+s*.05,l+M+f+o*.08,s*.9,o-M-f-o*.12,On(i,.07),c*.3)]});break}case"cabinet":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),v.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:s0,strokeWidth:u}),v.jsx("circle",{cx:-s*.06,cy:0,r:u*1.2,fill:Br}),v.jsx("circle",{cx:s*.06,cy:0,r:u*1.2,fill:Br})]});break;case"wardrobe":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),v.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:s0,strokeWidth:u}),v.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Br,strokeWidth:u*1.6}),v.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Br,strokeWidth:u*1.6})]});break;case"drawers":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.5),v.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Br,strokeWidth:u*1.6,strokeLinecap:"round"})]});break;case"shelf":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),[.3,.5,.7].map((M,m)=>v.jsx("line",{x1:a+s*.12,y1:l+o*M,x2:a+s*.88,y2:l+o*M,stroke:Br,strokeWidth:u},m))]});break;case"tv":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,"#0c0d10",c*.4),p(a+u,l,s-2*u,o*.55,"#22303f",c*.2)]});break;case"rug":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i,c*.3),p(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:On(i,.25),strokeWidth:u*1.4,strokeDasharray:`${u*3} ${u*3}`})]});break;case"round-rug":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),v.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:On(i,.25),strokeWidth:u*1.4})]});break;case"plant":y=v.jsxs(v.Fragment,{children:[p(a+s*.28,l+o*.28,s*.44,o*.44,On("#8a6a4a",-.1),c*.4),v.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:On(i,.1)}),v.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),v.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:On(i,-.12)}),v.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:On(i,.18)})]});break;case"lamp":y=v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:0,cy:0,r:s/2,fill:On(i,-.05)}),v.jsx("circle",{cx:0,cy:0,r:s*.22,fill:On(i,.3)})]});break;case"fridge":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.4),v.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Br,strokeWidth:u*1.8,strokeLinecap:"round"})]});break;case"counter":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),p(a+s*.58,l+o*.22,s*.32,o*.56,On(i,-.18),c*.3)]});break;case"range":y=v.jsxs(v.Fragment,{children:[p(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([M,m],f)=>v.jsx("circle",{cx:s*M,cy:o*m,r:s*.13,fill:"none",stroke:On(i,.3),strokeWidth:u},f))]});break;default:y=p(a,l,s,o,i)}return v.jsx("g",{children:y})}const Ft=({children:t,size:e=22,...n})=>v.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),DS=t=>v.jsxs(Ft,{...t,children:[v.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),v.jsx("path",{d:"M3 9h18M9 9v12"})]}),NS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),v.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),IS=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M12 5v14M5 12h14"})}),US=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),v.jsx("path",{d:"M21 3v5h-5"})]}),Hr=t=>v.jsxs(Ft,{...t,children:[v.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),v.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),or=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),OS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),v.jsx("circle",{cx:"16",cy:"6",r:"2"}),v.jsx("circle",{cx:"8",cy:"12",r:"2"}),v.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),zS=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),FS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"}),v.jsx("path",{d:"M14 12h.01"})]}),kS=t=>v.jsxs(Ft,{...t,children:[v.jsx("circle",{cx:"13",cy:"4",r:"1.6"}),v.jsx("path",{d:"M11 21l2-6-3-2 1-5 3 2 2 2"}),v.jsx("path",{d:"M10 13l-2 8M14 15l2 6"})]}),Xx=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),v.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),Yx=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M9 14 4 9l5-5"}),v.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),BS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"m15 14 5-5-5-5"}),v.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),HS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M12 15V3"}),v.jsx("path",{d:"m8 7 4-4 4 4"}),v.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),VS=t=>v.jsxs(Ft,{...t,children:[v.jsx("circle",{cx:"12",cy:"12",r:"4"}),v.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),o0=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),GS=t=>v.jsx(Ft,{...t,children:v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),WS=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),jS=t=>v.jsxs(Ft,{...t,children:[v.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),v.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),a0=t=>v.jsx(Ft,{...t,children:v.jsx("path",{d:"M4 12l5 5L20 6"})}),Tt="#d9b779",l0="#39414f",XS="#c3c9d1",YS="#eef1f5",qx=.0254,c0=qx,Hu=18,u0=["n","e","s","w"],qS="#2f7d8c",KS=16,un=(t,e)=>Math.round(t/e)*e,Zr=(t,e,n)=>Math.max(e,Math.min(n,t)),d0=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1,ZS={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function JS(t){const e=t.floorTex||(t.floorColor?null:"wood:oak");if(!e)return{color:t.floorColor||"#eef1f5"};if(e.startsWith("wood:"))return{color:ZS[e.slice(5)]||"#c79a6b"};if(e.startsWith("mat:")){const n=ec[e.slice(4)];if(n)return{mat:e.slice(4),repeat:n.repeat||1.5,color:n.color}}return{color:t.floorColor||"#cdb89a"}}function QS(t,e,n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r].x,a=n[r].z,l=n[s].x,c=n[s].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function Vu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function cl(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=Zr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function $S(){const{state:t,dispatch:e}=Ao(),{rooms:n,walls:i,items:r,sketches:s,openings:o,selected:a,units:l,tool:c,defaultHeight:u}=t,d=l==="ft"?qx:.01,[h,p]=Xe.useState([]),[y,M]=Xe.useState(null),m=Xe.useRef(null),f=Xe.useRef(null),[g,x]=Xe.useState({W:360,H:540}),[S,P]=Xe.useState({scale:64,panX:180,panY:270,init:!1}),[A,E]=Xe.useState(null),b=Xe.useRef(null);b.current=A;const V=Xe.useRef(new Map),_=Xe.useRef(null),w=Xe.useRef(S);w.current=S;const C=Xe.useRef(!1);Xe.useLayoutEffect(()=>{const F=m.current;if(!F)return;const G=()=>{const D=F.clientWidth,j=F.clientHeight;x({W:D,H:j}),P(Y=>Y.init?Y:{scale:64,panX:D/2,panY:j/2,init:!0})},ce=new ResizeObserver(G);return ce.observe(F),G(),()=>ce.disconnect()},[]);const{W:z,H:O}=g;function H(){let F=1/0,G=-1/0,ce=1/0,D=-1/0;const j=(Z,ge)=>{F=Math.min(F,Z),G=Math.max(G,Z),ce=Math.min(ce,ge),D=Math.max(D,ge)};for(const Z of n)j(Z.x,Z.z),j(Z.x+Z.w,Z.z+Z.d);for(const Z of i)j(Z.x1,Z.z1),j(Z.x2,Z.z2);for(const Z of r){const ge=Ti(Z.type),Me=xr(ge,Z);j(Z.x-Me.w/2,Z.z-Me.d/2),j(Z.x+Me.w/2,Z.z+Me.d/2)}for(const Z of s)for(const ge of Z.pts)j(ge.x,ge.z);if(!isFinite(F)){P({scale:64,panX:z/2,panY:O/2,init:!0});return}const Y=56,X=92,re=64,xe=Math.max(.5,G-F),ee=Math.max(.5,D-ce),oe=Zr(Math.min((z-2*Y)/xe,(O-X-re)/ee),14,180),I=(F+G)/2,ae=(ce+D)/2,q=(X+(O-re))/2;P({scale:oe,panX:z/2-I*oe,panY:q-ae*oe,init:!0})}const k=n.length>0||i.length>0||r.length>0||s.length>0,ne=Xe.useRef(0);Xe.useLayoutEffect(()=>{if(!g.W)return;const F=ne.current&&Math.abs(g.W-ne.current)>60;ne.current=g.W,k&&(!C.current||F)&&(H(),C.current=!0)},[g.W,k]),Xe.useLayoutEffect(()=>{c!=="sketch"&&(p([]),M(null))},[c]);const{scale:U,panX:K,panY:Q}=S,te=(F,G)=>[F*U+K,G*U+Q],_e=(F,G)=>[(F-K)/U,(G-Q)/U],Re=F=>{const G=f.current.getBoundingClientRect();return[F.clientX-G.left,F.clientY-G.top]},W=(a==null?void 0:a.type)==="item"?r.find(F=>F.uid===a.uid):null,J=(a==null?void 0:a.type)==="room"?n.find(F=>F.uid===a.uid):null,le=(a==null?void 0:a.type)==="wall"?i.find(F=>F.uid===a.uid):null,he=(a==null?void 0:a.type)==="sketch"?s.find(F=>F.uid===a.uid):null;function Te(F){const G=Ti(F.type),ce=xr(G,F),[D,j]=te(F.x,F.z),Y=(F.rot||0)*Math.PI/180,X=Math.cos(Y),re=Math.sin(Y),xe=ce.w*U/2,ee=ce.d*U/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([oe,I])=>{const ae=oe*xe,q=I*ee;return[D+ae*X-q*re,j+ae*re+q*X]})}function De(F){return{nw:te(F.x,F.z),ne:te(F.x+F.w,F.z),se:te(F.x+F.w,F.z+F.d),sw:te(F.x,F.z+F.d)}}function Ue(F,G){const[ce,D]=_e(F,G);if(W){const j=Te(W);for(let Y=0;Y<4;Y++)if(Math.hypot(F-j[Y][0],G-j[Y][1])<Hu)return{kind:"item-handle"}}if(J){const j=De(J);for(const Y in j)if(Math.hypot(F-j[Y][0],G-j[Y][1])<Hu)return{kind:"room-handle",handle:Y}}if(le)for(const j of["1","2"]){const[Y,X]=te(le["x"+j],le["z"+j]);if(Math.hypot(F-Y,G-X)<Hu)return{kind:"wall-end",end:j}}for(let j=r.length-1;j>=0;j--){const Y=r[j],X=Ti(Y.type);if(!X)continue;const re=xr(X,Y),xe=(Y.rot||0)*Math.PI/180,ee=ce-Y.x,oe=D-Y.z,I=ee*Math.cos(xe)+oe*Math.sin(xe),ae=-ee*Math.sin(xe)+oe*Math.cos(xe);if(Math.abs(I)<=re.w/2+.08&&Math.abs(ae)<=re.d/2+.08)return{kind:"item",uid:Y.uid}}for(let j=i.length-1;j>=0;j--){const Y=i[j];if(cl(ce,D,Y.x1,Y.z1,Y.x2,Y.z2)<=Y.thickness/2+.18)return{kind:"wall",uid:Y.uid}}for(let j=s.length-1;j>=0;j--){const Y=s[j],X=Y.closed?Y.pts.length:Y.pts.length-1;for(let re=0;re<X;re++){const xe=Y.pts[re],ee=Y.pts[(re+1)%Y.pts.length];if(cl(ce,D,xe.x,xe.z,ee.x,ee.z)<=.18)return{kind:"sketch",uid:Y.uid}}}for(let j=o.length-1;j>=0;j--){const Y=o[j],X=yr(Y.wall,n,i);if(!X)continue;const re=X.ox+X.dirx*Y.u,xe=X.oz+X.dirz*Y.u,ee=X.ox+X.dirx*(Y.u+Y.w),oe=X.oz+X.dirz*(Y.u+Y.w);if(cl(ce,D,re,xe,ee,oe)<=.2)return{kind:"opening",uid:Y.uid}}for(let j=n.length-1;j>=0;j--){const Y=n[j];for(const X of u0){const[re,xe,ee,oe]=Vu(Y,X);if(cl(ce,D,re,xe,ee,oe)<=.18)return{kind:"roomwall",uid:Y.uid,side:X}}}for(let j=n.length-1;j>=0;j--){const Y=n[j];if(ce>=Y.x&&ce<=Y.x+Y.w&&D>=Y.z&&D<=Y.z+Y.d)return{kind:"room",uid:Y.uid}}for(let j=s.length-1;j>=0;j--){const Y=s[j];if(Y.closed&&Y.pts.length>=3&&QS(ce,D,Y.pts))return{kind:"sketch",uid:Y.uid}}return{kind:"empty"}}function He(F){const G=[],ce=[];for(const D of n)D.uid!==F&&(G.push(D.x,D.x+D.w),ce.push(D.z,D.z+D.d));return{xs:G,zs:ce}}function fe(F,G,ce=.28){let D=null,j=ce;for(const Y of G){const X=Math.abs(F-Y);X<j&&(j=X,D=Y)}return D}const L=(F,G)=>{const ce=fe(F,He(G).xs);return ce??un(F,d)},we=(F,G)=>{const ce=fe(F,He(G).zs);return ce??un(F,d)};function be(){const F=[];for(const G of n)F.push({x:G.x,z:G.z},{x:G.x+G.w,z:G.z},{x:G.x,z:G.z+G.d},{x:G.x+G.w,z:G.z+G.d});for(const G of i)F.push({x:G.x1,z:G.z1},{x:G.x2,z:G.z2});return F}function pe(F,G,ce=.35){let D=null,j=ce;for(const Y of be()){const X=Math.hypot(F-Y.x,G-Y.z);X<j&&(j=X,D=Y)}return D}function Ae(F,G,ce,D){const j=pe(ce,D);if(j)return{x:j.x,z:j.z};let Y=ce,X=D;return Math.abs(Y-F)>=Math.abs(X-G)?X=G:Y=F,{x:L(Y),z:we(X)}}const Be=F=>{const[G,ce]=Re(F);if(V.current.set(F.pointerId,{x:G,y:ce}),f.current.setPointerCapture(F.pointerId),V.current.size===2){const X=[...V.current.values()],re=(X[0].x+X[1].x)/2,xe=(X[0].y+X[1].y)/2,ee=Math.hypot(X[0].x-X[1].x,X[0].y-X[1].y),oe=w.current;_.current={startDist:ee,startScale:oe.scale,wmx:(re-oe.panX)/oe.scale,wmy:(xe-oe.panY)/oe.scale},E(null);return}if(V.current.size>2)return;const[D,j]=_e(G,ce);if(c==="room"){const X=L(D),re=we(j);E({kind:"drawRoom",x0:X,z0:re,cur:{x:X,z:re,w:0,d:0}});return}if(c==="wall"){const X=pe(D,j),re=X?X.x:L(D),xe=X?X.z:we(j);E({kind:"drawWall",x1:re,z1:xe,cur:{x1:re,z1:xe,x2:re,z2:xe}});return}if(c==="sketch"){E({kind:"sketch",sx:G,sy:ce,panX:w.current.panX,panY:w.current.panY,moved:!1});return}const Y=Ue(G,ce);switch(Y.kind){case"item-handle":E({kind:"resizeItem",uid:W.uid,cxw:W.x,czw:W.z,rot:W.rot||0,c:W.dim||Ti(W.type)});break;case"room-handle":E({kind:"resizeRoom",uid:J.uid,handle:Y.handle,x0:J.x,z0:J.z,w0:J.w,d0:J.d});break;case"wall-end":E({kind:"wallEnd",uid:le.uid,end:Y.end});break;case"item":{const X=r.find(re=>re.uid===Y.uid);e({type:"select",sel:{type:"item",uid:Y.uid}}),E({kind:"moveItem",uid:Y.uid,ox:D-X.x,oz:j-X.z});break}case"wall":{const X=i.find(re=>re.uid===Y.uid);e({type:"select",sel:{type:"wall",uid:Y.uid}}),E({kind:"moveWall",uid:Y.uid,ox:D,oz:j,x1:X.x1,z1:X.z1,x2:X.x2,z2:X.z2});break}case"sketch":{const X=s.find(re=>re.uid===Y.uid);e({type:"select",sel:{type:"sketch",uid:Y.uid}}),E({kind:"moveSketch",uid:Y.uid,ox:D,oz:j,pts:X.pts});break}case"opening":e({type:"select",sel:{type:"opening",uid:Y.uid}}),E(null);break;case"roomwall":e({type:"select",sel:{type:"roomwall",uid:Y.uid,side:Y.side}}),E(null);break;case"room":{const X=n.find(re=>re.uid===Y.uid);e({type:"select",sel:{type:"room",uid:Y.uid}}),E({kind:"moveRoom",uid:Y.uid,ox:D-X.x,oz:j-X.z});break}default:E({kind:"pan",sx:G,sy:ce,panX:w.current.panX,panY:w.current.panY,moved:!1})}},Ie=F=>{const[G,ce]=Re(F);if(V.current.has(F.pointerId)&&V.current.set(F.pointerId,{x:G,y:ce}),_.current&&V.current.size>=2){const X=[...V.current.values()],re=(X[0].x+X[1].x)/2,xe=(X[0].y+X[1].y)/2,ee=Math.hypot(X[0].x-X[1].x,X[0].y-X[1].y),oe=_.current,I=Zr(oe.startScale*(ee/oe.startDist),12,220);P({scale:I,panX:re-oe.wmx*I,panY:xe-oe.wmy*I,init:!0});return}if(c==="sketch"&&V.current.size<=1){const[X,re]=_e(G,ce);M({x:L(X),z:we(re)})}const D=b.current;if(!D)return;const[j,Y]=_e(G,ce);if(D.kind==="pan")!D.moved&&Math.hypot(G-D.sx,ce-D.sy)>4&&(D.moved=!0),P(X=>({...X,panX:D.panX+(G-D.sx),panY:D.panY+(ce-D.sy)}));else if(D.kind==="sketch")!D.moved&&Math.hypot(G-D.sx,ce-D.sy)>7&&(D.moved=!0),D.moved&&P(X=>({...X,panX:D.panX+(G-D.sx),panY:D.panY+(ce-D.sy)}));else if(D.kind==="drawRoom"){const X=L(j),re=we(Y);E(xe=>({...xe,cur:{x:Math.min(xe.x0,X),z:Math.min(xe.z0,re),w:Math.abs(X-xe.x0),d:Math.abs(re-xe.z0)}}))}else if(D.kind==="drawWall"){const X=Ae(D.x1,D.z1,j,Y);E(re=>({...re,cur:{x1:re.x1,z1:re.z1,x2:X.x,z2:X.z}}))}else if(D.kind==="moveItem")e({type:"update",sel:{type:"item",uid:D.uid},patch:{x:un(j-D.ox,c0),z:un(Y-D.oz,c0)},mergeKey:`mv:${D.uid}`});else if(D.kind==="resizeItem"){const X=j-D.cxw,re=Y-D.czw,xe=D.rot*Math.PI/180,ee=X*Math.cos(xe)+re*Math.sin(xe),oe=-X*Math.sin(xe)+re*Math.cos(xe),I=Zr(2*Math.max(.1,Math.abs(ee))/D.c.w,.3,3),ae=Zr(2*Math.max(.1,Math.abs(oe))/D.c.d,.3,3),q=Zr(Math.sqrt(I*ae),.3,3);e({type:"update",sel:{type:"item",uid:D.uid},patch:{scale:{x:I,y:q,z:ae}},mergeKey:`sz:${D.uid}`})}else if(D.kind==="moveRoom"){const X=n.find(ee=>ee.uid===D.uid);let re=j-D.ox,xe=Y-D.oz;if(X){const{xs:ee,zs:oe}=He(D.uid),I=fe(re,ee),ae=fe(re+X.w,ee);I!=null&&(ae==null||Math.abs(re-I)<=Math.abs(re+X.w-ae))?re=I:ae!=null?re=ae-X.w:re=un(re,d);const q=fe(xe,oe),Z=fe(xe+X.d,oe);q!=null&&(Z==null||Math.abs(xe-q)<=Math.abs(xe+X.d-Z))?xe=q:Z!=null?xe=Z-X.d:xe=un(xe,d)}e({type:"update",sel:{type:"room",uid:D.uid},patch:{x:re,z:xe},mergeKey:`mv:${D.uid}`})}else if(D.kind==="resizeRoom"){let X=D.x0,re=D.z0,xe=D.x0+D.w0,ee=D.z0+D.d0;const{xs:oe,zs:I}=He(D.uid),ae=Z=>{const ge=fe(Z,oe);return ge??un(Z,d)},q=Z=>{const ge=fe(Z,I);return ge??un(Z,d)};D.handle.includes("e")&&(xe=Math.max(X+.5,ae(j))),D.handle.includes("w")&&(X=Math.min(xe-.5,ae(j))),D.handle.includes("s")&&(ee=Math.max(re+.5,q(Y))),D.handle.includes("n")&&(re=Math.min(ee-.5,q(Y))),e({type:"update",sel:{type:"room",uid:D.uid},patch:{x:X,z:re,w:xe-X,d:ee-re},mergeKey:`rs:${D.uid}`})}else if(D.kind==="moveWall"){const X=un(j-D.ox,d),re=un(Y-D.oz,d);e({type:"update",sel:{type:"wall",uid:D.uid},patch:{x1:D.x1+X,z1:D.z1+re,x2:D.x2+X,z2:D.z2+re},mergeKey:`mv:${D.uid}`})}else if(D.kind==="wallEnd"){const X=D.end==="1"?{x1:un(j,d),z1:un(Y,d)}:{x2:un(j,d),z2:un(Y,d)};e({type:"update",sel:{type:"wall",uid:D.uid},patch:X,mergeKey:`we:${D.uid}`})}else if(D.kind==="moveSketch"){const X=un(j-D.ox,d),re=un(Y-D.oz,d);e({type:"update",sel:{type:"sketch",uid:D.uid},patch:{pts:D.pts.map(xe=>({x:xe.x+X,z:xe.z+re}))},mergeKey:`mv:${D.uid}`})}},N=F=>{const[G,ce]=Re(F);V.current.delete(F.pointerId),V.current.size<2&&(_.current=null);const D=b.current;if(D)if(D.kind==="sketch"){if(!D.moved){const[j,Y]=_e(G,ce),X={x:L(j),z:we(Y)};let re=!1;if(h.length>=3){const[xe,ee]=te(h[0].x,h[0].z);Math.hypot(G-xe,ce-ee)<KS&&(re=!0)}re?(e({type:"addSketch",pts:h,closed:!0}),p([]),M(null),oo(12)):(p(xe=>[...xe,X]),oo(6))}}else D.kind==="drawRoom"?D.cur.w>.3&&D.cur.d>.3&&e({type:"addRoom",x:D.cur.x,z:D.cur.z,w:D.cur.w,d:D.cur.d,height:u}):D.kind==="drawWall"&&Math.hypot(D.cur.x2-D.cur.x1,D.cur.z2-D.cur.z1)>.2?e({type:"addWall",...D.cur,height:u}):D.kind==="pan"&&!D.moved&&e({type:"select",sel:null});V.current.size===0&&E(null);try{f.current.releasePointerCapture(F.pointerId)}catch{}},T=F=>{(F&&h.length>=3||!F&&h.length>=2)&&(e({type:"addSketch",pts:h,closed:F}),oo(12)),p([]),M(null)};function se(F,G,ce,D){const j=[],Y=G?F.length:F.length-1;for(let X=0;X<Y;X++){const re=F[X],xe=F[(X+1)%F.length],ee=Math.hypot(xe.x-re.x,xe.z-re.z);if(ee<.001)continue;const[oe,I]=te(re.x,re.z),[ae,q]=te(xe.x,xe.z);let Z=(oe+ae)/2,ge=(I+q)/2;const Me=-(q-I),We=ae-oe,Ke=Math.hypot(Me,We)||1;Z+=Me/Ke*11,ge+=We/Ke*11,j.push(v.jsx("text",{x:Z,y:ge+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:ce,stroke:"#fff",strokeWidth:3.2,paintOrder:"stroke",strokeLinejoin:"round",fontFamily:"-apple-system, system-ui, sans-serif",children:rt(ee,l)},`${D}-l${X}`))}return j}const ve=F=>{const[G,ce]=Re(F),D=w.current,j=Zr(D.scale*(F.deltaY<0?1.1:.9),12,220),Y=(G-D.panX)/D.scale,X=(ce-D.panY)/D.scale;P({scale:j,panX:G-Y*j,panY:ce-X*j,init:!0})},Se=[],me=[];{const F=l==="ft"?.3048:1,G=U*F;let ce=1;G<6&&(ce=5),G*ce<6&&(ce=25);const D=ce*5,[j]=_e(0,0),[Y]=_e(z,0),[,X]=_e(0,0),[,re]=_e(0,O),xe=j/F,ee=Y/F,oe=X/F,I=re/F,ae=l==="ft"?"′":"m";if((ee-xe)/ce<500){for(let q=Math.ceil(xe/ce)*ce;q<=ee;q+=ce){const Z=Math.round(q),[ge]=te(Z*F,0),Me=Z===0,We=Z%D===0;Se.push(v.jsx("line",{x1:ge,y1:0,x2:ge,y2:O,stroke:"#000",strokeOpacity:Me?.22:We?.11:.045,strokeWidth:1},`v${Z}`)),We&&!Me&&me.push(v.jsxs("text",{x:ge+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[Z,ae]},`vl${Z}`))}for(let q=Math.ceil(oe/ce)*ce;q<=I;q+=ce){const Z=Math.round(q),[,ge]=te(0,Z*F),Me=Z===0,We=Z%D===0;Se.push(v.jsx("line",{x1:0,y1:ge,x2:z,y2:ge,stroke:"#000",strokeOpacity:Me?.22:We?.11:.045,strokeWidth:1},`h${Z}`)),We&&!Me&&me.push(v.jsxs("text",{x:3,y:ge-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[Z,ae]},`hl${Z}`))}}}const Fe=n.length===0&&i.length===0&&r.length===0&&s.length===0&&h.length===0;return v.jsxs("div",{className:"editor2d",ref:m,children:[v.jsxs("svg",{ref:f,onPointerDown:Be,onPointerMove:Ie,onPointerUp:N,onPointerCancel:N,onWheel:ve,style:{touchAction:"none",cursor:c==="select"?"default":"crosshair"},children:[v.jsx("defs",{children:v.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:v.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),v.jsx("rect",{x:0,y:0,width:z,height:O,fill:"transparent"}),v.jsx("g",{pointerEvents:"none",children:Se}),v.jsx("g",{pointerEvents:"none",children:me}),n.map(F=>{const[G,ce]=te(F.x,F.z),D=F.w*U,j=F.d*U,Y=JS(F),X=Y.mat?Math.max(10,Y.repeat*U):0,re=`fp-${F.uid}`;return v.jsxs("g",{pointerEvents:"none",children:[Y.mat&&v.jsx("defs",{children:v.jsxs("pattern",{id:re,patternUnits:"userSpaceOnUse",width:X,height:X,patternTransform:`translate(${K} ${Q})`,children:[v.jsx("rect",{width:X,height:X,fill:Y.color}),v.jsx("image",{href:ca(Y.mat),width:X,height:X,preserveAspectRatio:"xMidYMid slice"})]})}),v.jsx("rect",{x:G,y:ce,width:D,height:j,fill:Y.mat?`url(#${re})`:Y.color}),F.name&&D>46&&j>26&&v.jsx("text",{x:G+D/2,y:ce+j/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:12,fontWeight:700,fill:"#33373d",stroke:"#fff",strokeWidth:3,paintOrder:"stroke",strokeLinejoin:"round",letterSpacing:"0.3",fontFamily:"-apple-system, system-ui, sans-serif",children:F.name})]},F.uid)}),n.map(F=>v.jsx("g",{pointerEvents:"none",children:u0.map(G=>{const[ce,D,j,Y]=Vu(F,G),[X,re]=te(ce,D),[xe,ee]=te(j,Y),oe=d0(F,G),I=(a==null?void 0:a.type)==="roomwall"&&a.uid===F.uid&&a.side===G;return v.jsx("line",{x1:X,y1:re,x2:xe,y2:ee,stroke:I?Tt:oe?l0:XS,strokeWidth:I?6:oe?4:2,strokeLinecap:"round",strokeDasharray:oe?void 0:"7 7"},G)})},F.uid)),J&&(()=>{const[F,G]=te(J.x,J.z),ce=J.w*U;return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("rect",{x:F,y:G,width:ce,height:J.d*U,fill:"none",stroke:Tt,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),v.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[v.jsx("rect",{x:F+ce/2-78,y:G-25,width:156,height:19,rx:9.5,fill:Tt}),v.jsxs("text",{x:F+ce/2,y:G-11,textAnchor:"middle",children:[rt(J.w,l)," × ",rt(J.d,l)]})]}),Object.entries(De(J)).map(([D,[j,Y]])=>v.jsx("circle",{cx:j,cy:Y,r:7,fill:Tt,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},D))]})})(),i.map(F=>{const[G,ce]=te(F.x1,F.z1),[D,j]=te(F.x2,F.z2),Y=(le==null?void 0:le.uid)===F.uid;return v.jsx("line",{x1:G,y1:ce,x2:D,y2:j,stroke:Y?Tt:l0,strokeWidth:Math.max(5,F.thickness*U),strokeLinecap:"round",pointerEvents:"none"},F.uid)}),le&&(()=>{const[F,G]=te(le.x1,le.z1),[ce,D]=te(le.x2,le.z2);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("circle",{cx:F,cy:G,r:7,fill:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"}),v.jsx("circle",{cx:ce,cy:D,r:7,fill:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),o.map(F=>{const G=yr(F.wall,n,i);if(!G)return null;const ce=G.ox+G.dirx*F.u,D=G.oz+G.dirz*F.u,j=G.ox+G.dirx*(F.u+F.w),Y=G.oz+G.dirz*(F.u+F.w),[X,re]=te(ce,D),[xe,ee]=te(j,Y),oe=(a==null?void 0:a.type)==="opening"&&a.uid===F.uid;let I=-(ee-re),ae=xe-X;const q=Math.hypot(I,ae)||1;I=I/q*6,ae=ae/q*6;const Z=oe?Tt:"#5f6a78",ge=[v.jsx("line",{x1:X,y1:re,x2:xe,y2:ee,stroke:YS,strokeWidth:7,strokeLinecap:"butt"},"gap"),v.jsx("line",{x1:X-I,y1:re-ae,x2:X+I,y2:re+ae,stroke:Z,strokeWidth:2.5,strokeLinecap:"round"},"j1"),v.jsx("line",{x1:xe-I,y1:ee-ae,x2:xe+I,y2:ee+ae,stroke:Z,strokeWidth:2.5,strokeLinecap:"round"},"j2")];if(F.kind==="doorway"){const Me=ce+G.nx*F.w,We=D+G.nz*F.w,[Ke,vt]=te(Me,We),Ve=F.w*U;ge.push(v.jsx("line",{x1:X,y1:re,x2:Ke,y2:vt,stroke:Z,strokeWidth:2.5,strokeLinecap:"round"},"leaf")),ge.push(v.jsx("path",{d:`M ${xe} ${ee} A ${Ve} ${Ve} 0 0 1 ${Ke} ${vt}`,fill:"none",stroke:Z,strokeWidth:1.6,strokeDasharray:"4 4"},"arc"))}else F.kind==="window"&&ge.push(v.jsx("line",{x1:X,y1:re,x2:xe,y2:ee,stroke:oe?Tt:"#5b86a8",strokeWidth:2.5,strokeLinecap:"round"},"glass"));return v.jsx("g",{pointerEvents:"none",children:ge},F.uid)}),s.map(F=>{const G=(he==null?void 0:he.uid)===F.uid,ce=F.pts.map(j=>te(j.x,j.z).join(",")).join(" "),D=G?Tt:qS;return v.jsxs("g",{pointerEvents:"none",children:[F.closed?v.jsx("polygon",{points:ce,fill:D,fillOpacity:.07,stroke:D,strokeWidth:G?3:2.5,strokeLinejoin:"round"}):v.jsx("polyline",{points:ce,fill:"none",stroke:D,strokeWidth:G?3:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),se(F.pts,F.closed,G?"#7a5a16":"#15545f",F.uid),G&&F.pts.map((j,Y)=>{const[X,re]=te(j.x,j.z);return v.jsx("circle",{cx:X,cy:re,r:5,fill:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"},Y)})]},F.uid)}),c==="sketch"&&h.length>0&&(()=>{const F=y?[...h,y]:h,G=F.map(Y=>te(Y.x,Y.z).join(",")).join(" "),[ce,D]=te(h[0].x,h[0].z),j=h.length>=3;return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("polyline",{points:G,fill:"none",stroke:Tt,strokeWidth:2.5,strokeDasharray:"7 5",strokeLinejoin:"round",strokeLinecap:"round"}),se(F,!1,"#7a5a16","draft"),h.map((Y,X)=>{const[re,xe]=te(Y.x,Y.z);return v.jsx("circle",{cx:re,cy:xe,r:X===0?6:4.5,fill:X===0?Tt:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"},X)}),j&&v.jsx("circle",{cx:ce,cy:D,r:11,fill:"none",stroke:Tt,strokeWidth:2,strokeDasharray:"3 3"})]})})(),r.map(F=>{const G=Ti(F.type);if(!G)return null;const[ce,D]=te(F.x,F.z),j=xr(G,F),Y=j.w*U,X=j.d*U,re=(W==null?void 0:W.uid)===F.uid;return v.jsxs("g",{transform:`translate(${ce} ${D}) rotate(${F.rot||0})`,pointerEvents:"none",children:[v.jsx("g",{filter:"url(#softshadow)",opacity:G.shape==="rug"||G.shape==="round-rug"?.96:1,children:v.jsx(jx,{item:{...G,color:F.color||G.color},wpx:Y,dpx:X})}),re&&v.jsx("rect",{x:-Y/2-5,y:-X/2-5,width:Y+10,height:X+10,rx:7,fill:"none",stroke:Tt,strokeWidth:2,strokeDasharray:"6 5"})]},F.uid)}),(A==null?void 0:A.kind)==="drawRoom"&&(()=>{const[F,G]=te(A.cur.x,A.cur.z);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("rect",{x:F,y:G,width:A.cur.w*U,height:A.cur.d*U,fill:Tt,fillOpacity:.12,stroke:Tt,strokeWidth:3,strokeDasharray:"6 5"}),v.jsxs("text",{x:F+A.cur.w*U/2,y:G-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[rt(A.cur.w,l)," × ",rt(A.cur.d,l)]})]})})(),(A==null?void 0:A.kind)==="drawWall"&&(()=>{const[F,G]=te(A.cur.x1,A.cur.z1),[ce,D]=te(A.cur.x2,A.cur.z2),j=Math.hypot(A.cur.x2-A.cur.x1,A.cur.z2-A.cur.z1);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("line",{x1:F,y1:G,x2:ce,y2:D,stroke:Tt,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),v.jsx("text",{x:(F+ce)/2,y:(G+D)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:rt(j,l)})]})})(),W&&(()=>{const F=Te(W),G=Ti(W.type),ce=xr(G,W),[D,j]=te(W.x,W.z),Y=Math.hypot(ce.w*U,ce.d*U)/2;return v.jsxs("g",{pointerEvents:"none",children:[F.map(([X,re],xe)=>v.jsx("circle",{cx:X,cy:re,r:7,fill:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"},xe)),v.jsx("rect",{x:D-78,y:j-Y-30,width:156,height:20,rx:10,fill:Tt}),v.jsxs("text",{x:D,y:j-Y-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[rt(ce.w,l)," × ",rt(ce.d,l)]})]})})(),(a==null?void 0:a.type)==="roomwall"&&(()=>{const F=n.find(I=>I.uid===a.uid);if(!F)return null;const[G,ce,D,j]=Vu(F,a.side),[Y,X]=te(G,ce),[re,xe]=te(D,j),ee=Math.hypot(D-G,j-ce),oe=d0(F,a.side);return v.jsxs("g",{pointerEvents:"none",children:[v.jsx("circle",{cx:Y,cy:X,r:6,fill:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"}),v.jsx("circle",{cx:re,cy:xe,r:6,fill:"#fff",stroke:Tt,strokeWidth:2.5,filter:"url(#softshadow)"}),v.jsx("rect",{x:(Y+re)/2-60,y:(X+xe)/2-11,width:120,height:20,rx:10,fill:Tt}),v.jsx("text",{x:(Y+re)/2,y:(X+xe)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:oe?rt(ee,l):"opening"})]})})()]}),v.jsx("button",{className:"recenter",onClick:H,"aria-label":"Fit to view",children:v.jsx(Xx,{size:20})}),c==="sketch"&&h.length>0&&v.jsxs("div",{className:"sketch-bar",children:[v.jsx("button",{onClick:()=>p(F=>F.slice(0,-1)),title:"Undo last point",children:v.jsx(Yx,{size:17})}),v.jsxs("button",{onClick:()=>T(!1),disabled:h.length<2,title:"Finish open line",children:[v.jsx(a0,{size:18})," Finish"]}),v.jsxs("button",{className:"accent",onClick:()=>T(!0),disabled:h.length<3,title:"Close shape",children:[v.jsx(a0,{size:18})," Close shape"]}),v.jsx("button",{onClick:()=>{p([]),M(null)},title:"Cancel",children:v.jsx(zS,{size:17})})]}),Fe&&v.jsxs("div",{className:"empty",children:[v.jsx("b",{children:"Start your floor plan"}),v.jsxs("span",{children:["Pick ",v.jsx("strong",{children:"Room"})," and drag, or use ",v.jsx("strong",{children:"Sketch"})," to free-draw any space with live measurements — or just tap to drop a room."]}),v.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:L(-1.8),z:we(-1.5),w:3.6,d:3,height:u}),children:"+ Add a room"})]}),v.jsx("div",{className:"hint",children:c==="room"?"Drag to draw a room":c==="wall"?"Drag to draw a wall":c==="sketch"?"Tap to drop points — each edge is measured · tap the first point to close · drag to pan":W?"Drag to move · drag white corners to resize":J?"Drag inside to move · corners to resize · tap a wall to edit it":le?"Drag the wall or its endpoints":he?"Drag to move this sketch · edit dimensions in the panel":(a==null?void 0:a.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="169",ao={ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eM=0,h0=1,tM=2,Kx=1,Zx=2,Gi=3,Ur=0,_n=1,xn=2,tn=0,lo=1,f0=2,p0=3,m0=4,Jx=5,mi=100,nM=101,iM=102,rM=103,sM=104,Qo=200,oM=201,aM=202,lM=203,Eh=204,Th=205,Ah=206,cM=207,bh=208,uM=209,dM=210,hM=211,fM=212,pM=213,mM=214,Ch=0,Rh=1,Ph=2,yo=3,Lh=4,Dh=5,Nh=6,Ih=7,Qx=0,gM=1,vM=2,Dr=0,$x=1,ey=2,ty=3,gp=4,xM=5,ny=6,iy=7,ry=300,_o=301,So=302,Ic=303,Uh=304,iu=306,bn=1e3,Ki=1001,Oh=1002,Jt=1003,yM=1004,ul=1005,nn=1006,Gu=1007,wr=1008,Ii=1009,sy=1010,oy=1011,Pa=1012,vp=1013,cs=1014,$n=1015,Rn=1016,xp=1017,yp=1018,us=1020,ay=35902,ly=1021,cy=1022,ei=1023,uy=1024,dy=1025,co=1026,ds=1027,hy=1028,_p=1029,fy=1030,Sp=1031,Mp=1033,tc=33776,nc=33777,ic=33778,rc=33779,zh=35840,Fh=35841,kh=35842,Bh=35843,Hh=36196,Vh=37492,Gh=37496,Wh=37808,jh=37809,Xh=37810,Yh=37811,qh=37812,Kh=37813,Zh=37814,Jh=37815,Qh=37816,$h=37817,ef=37818,tf=37819,nf=37820,rf=37821,sc=36492,sf=36494,of=36495,py=36283,af=36284,lf=36285,cf=36286,_M=3200,SM=3201,wp=0,MM=1,_r="",fn="srgb",ir="srgb-linear",Ep="display-p3",ru="display-p3-linear",Uc="linear",xt="srgb",Oc="rec709",zc="p3",Ss=7680,g0=519,wM=512,EM=513,TM=514,my=515,AM=516,bM=517,CM=518,RM=519,v0=35044,x0="300 es",Zi=2e3,Fc=2001;class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=Math.PI/180,uf=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function PM(t,e){return(t%e+e)%e}function Wu(t,e,n){return(1-n)*t+n*e}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const LM={DEG2RAD:oc};class Ee{constructor(e=0,n=0){Ee.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],y=i[8],M=r[0],m=r[3],f=r[6],g=r[1],x=r[4],S=r[7],P=r[2],A=r[5],E=r[8];return s[0]=o*M+a*g+l*P,s[3]=o*m+a*x+l*A,s[6]=o*f+a*S+l*E,s[1]=c*M+u*g+d*P,s[4]=c*m+u*x+d*A,s[7]=c*f+u*S+d*E,s[2]=h*M+p*g+y*P,s[5]=h*m+p*x+y*A,s[8]=h*f+p*S+y*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,y=n*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ju.makeScale(e,n)),this}rotate(e){return this.premultiply(ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new it;function gy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function La(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DM(){const t=La("canvas");return t.style.display="block",t}const y0={};function ac(t){t in y0||(y0[t]=!0,console.warn(t))}function NM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function IM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _0=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),S0=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ko={[ir]:{transfer:Uc,primaries:Oc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[fn]:{transfer:xt,primaries:Oc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ru]:{transfer:Uc,primaries:zc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(S0),fromReference:t=>t.applyMatrix3(_0)},[Ep]:{transfer:xt,primaries:zc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(S0),fromReference:t=>t.applyMatrix3(_0).convertLinearToSRGB()}},OM=new Set([ir,ru]),ct={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!OM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ko[e].toReference,r=ko[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ko[t].primaries},getTransfer:function(t){return t===_r?Uc:ko[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ko[e].luminanceCoefficients)}};function uo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class zM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=La("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=La("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=uo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(uo(n[i]/255)*255):n[i]=uo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FM=0;class vy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yu(r[o].image)):s.push(Yu(r[o]))}else s=Yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kM=0;class Wt extends vs{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=Ki,r=Ki,s=nn,o=wr,a=ei,l=Ii,c=Wt.DEFAULT_ANISOTROPY,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=bo(),this.name="",this.source=new vy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ry)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=ry;Wt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],y=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,P=(f+1)/2,A=(u+h)/4,E=(d+M)/4,b=(y+m)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-y)*(m-y)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(d-M)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BM extends vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends BM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xy extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=M;return}if(d!==M||l!==h||c!==p||u!==y){let m=1-a;const f=l*h+c*p+u*y+d*M,g=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,f*g);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const S=a*g;if(l=l*m+h*S,c=c*m+p*S,u=u*m+y*S,d=d*m+M*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+u*d+l*p-c*h,e[n+1]=l*y+u*h+c*d-a*p,e[n+2]=c*y+u*p+a*h-l*d,e[n+3]=u*y-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"YXZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"ZXY":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"ZYX":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"YZX":this._x=h*u*d+c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d-h*p*y;break;case"XZY":this._x=h*u*d-c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(M0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(M0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new B,M0=new hs;class Ha{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),hl.subVectors(this.max,Bo),ws.subVectors(e.a,Bo),Es.subVectors(e.b,Bo),Ts.subVectors(e.c,Bo),ar.subVectors(Es,ws),lr.subVectors(Ts,Es),Vr.subVectors(ws,Ts);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Vr.z,Vr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Vr.z,0,-Vr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Vr.y,Vr.x,0];return!Ku(n,ws,Es,Ts,hl)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,ws,Es,Ts,hl))?!1:(fl.crossVectors(ar,lr),n=[fl.x,fl.y,fl.z],Ku(n,ws,Es,Ts,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new B,new B,new B,new B,new B,new B,new B,new B],li=new B,dl=new Ha,ws=new B,Es=new B,Ts=new B,ar=new B,lr=new B,Vr=new B,Bo=new B,hl=new B,fl=new B,Gr=new B;function Ku(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Gr.fromArray(t,s);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),l=e.dot(Gr),c=n.dot(Gr),u=i.dot(Gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VM=new Ha,Ho=new B,Zu=new B;class Tp{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Zu)),this.expandByPoint(Ho.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new B,Ju=new B,pl=new B,cr=new B,Qu=new B,ml=new B,$u=new B;class Ap{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ju.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Ju);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pl),a=cr.dot(this.direction),l=-cr.dot(pl),c=cr.lengthSq(),u=Math.abs(1-o*o);let d,h,p,y;if(u>0)if(d=o*l-a,h=o*a-l,y=s*u,d>=0)if(h>=-y)if(h<=y){const M=1/u;d*=M,h*=M,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ju).addScaledVector(pl,h),p}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),ml.subVectors(i,e),$u.crossVectors(Qu,ml);let o=this.direction.dot($u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,e);const l=a*this.direction.dot(ml.crossVectors(cr,ml));if(l<0)return null;const c=a*this.direction.dot(Qu.cross(cr));if(c<0||l+c>o)return null;const u=-a*cr.dot($u);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,y,M,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,y,M,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,y,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=y,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,y=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,y=c*u,M=c*d;n[0]=h+M*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-y,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,y=c*u,M=c*d;n[0]=h-M*a,n[4]=-o*d,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*u,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,y=a*u,M=a*d;n[0]=l*u,n[4]=y*c-p,n[8]=h*c+M,n[1]=l*d,n[5]=M*c+h,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,y=a*l,M=a*c;n[0]=l*u,n[4]=M-h*d,n[8]=y*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+y,n[10]=h-M*d}else if(e.order==="XZY"){const h=o*l,p=o*c,y=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+M,n[5]=o*u,n[9]=p*d-y,n[2]=y*d-p,n[6]=a*u,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,WM)}lookAt(e,n,i){const r=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ur.crossVectors(i,zn),ur.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ur.crossVectors(i,zn)),ur.normalize(),gl.crossVectors(zn,ur),r[0]=ur.x,r[4]=gl.x,r[8]=zn.x,r[1]=ur.y,r[5]=gl.y,r[9]=zn.y,r[2]=ur.z,r[6]=gl.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],y=i[2],M=i[6],m=i[10],f=i[14],g=i[3],x=i[7],S=i[11],P=i[15],A=r[0],E=r[4],b=r[8],V=r[12],_=r[1],w=r[5],C=r[9],z=r[13],O=r[2],H=r[6],k=r[10],ne=r[14],U=r[3],K=r[7],Q=r[11],te=r[15];return s[0]=o*A+a*_+l*O+c*U,s[4]=o*E+a*w+l*H+c*K,s[8]=o*b+a*C+l*k+c*Q,s[12]=o*V+a*z+l*ne+c*te,s[1]=u*A+d*_+h*O+p*U,s[5]=u*E+d*w+h*H+p*K,s[9]=u*b+d*C+h*k+p*Q,s[13]=u*V+d*z+h*ne+p*te,s[2]=y*A+M*_+m*O+f*U,s[6]=y*E+M*w+m*H+f*K,s[10]=y*b+M*C+m*k+f*Q,s[14]=y*V+M*z+m*ne+f*te,s[3]=g*A+x*_+S*O+P*U,s[7]=g*E+x*w+S*H+P*K,s[11]=g*b+x*C+S*k+P*Q,s[15]=g*V+x*z+S*ne+P*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],y=e[3],M=e[7],m=e[11],f=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+M*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],y=e[12],M=e[13],m=e[14],f=e[15],g=d*m*c-M*h*c+M*l*p-a*m*p-d*l*f+a*h*f,x=y*h*c-u*m*c-y*l*p+o*m*p+u*l*f-o*h*f,S=u*M*c-y*d*c+y*a*p-o*M*p-u*a*f+o*d*f,P=y*d*l-u*M*l-y*a*h+o*M*h+u*a*m-o*d*m,A=n*g+i*x+r*S+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=g*E,e[1]=(M*h*s-d*m*s-M*r*p+i*m*p+d*r*f-i*h*f)*E,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*f+i*l*f)*E,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(u*m*s-y*h*s+y*r*p-n*m*p-u*r*f+n*h*f)*E,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*f-n*l*f)*E,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*E,e[8]=S*E,e[9]=(y*d*s-u*M*s-y*i*p+n*M*p+u*i*f-n*d*f)*E,e[10]=(o*M*s-y*a*s+y*i*c-n*M*c-o*i*f+n*a*f)*E,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*E,e[12]=P*E,e[13]=(u*M*r-y*d*r+y*i*h-n*M*h-u*i*m+n*d*m)*E,e[14]=(y*a*r-o*M*r-y*i*l+n*M*l+o*i*m-n*a*m)*E,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,y=s*d,M=o*u,m=o*d,f=a*d,g=l*c,x=l*u,S=l*d,P=i.x,A=i.y,E=i.z;return r[0]=(1-(M+f))*P,r[1]=(p+S)*P,r[2]=(y-x)*P,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(y+x)*E,r[9]=(m-g)*E,r[10]=(1-(h+M))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ci.copy(this);const c=1/s,u=1/o,d=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,n.setFromRotationMatrix(ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Zi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,y;if(a===Zi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Fc)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Zi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let y,M;if(a===Zi)y=(o+s)*d,M=-2*d;else if(a===Fc)y=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const As=new B,ci=new at,GM=new B(0,0,0),WM=new B(1,1,1),ur=new B,gl=new B,zn=new B,w0=new at,E0=new hs;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return w0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return E0.setFromEuler(this),this.setFromQuaternion(E0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jM=0;const T0=new B,bs=new hs,Fi=new at,vl=new B,Vo=new B,XM=new B,YM=new hs,A0=new B(1,0,0),b0=new B(0,1,0),C0=new B(0,0,1),R0={type:"added"},qM={type:"removed"},Cs={type:"childadded",child:null},ed={type:"childremoved",child:null};class on extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new B,n=new Si,i=new hs,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new it}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(A0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(C0,e)}translateOnAxis(e,n){return T0.copy(e).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(A0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(C0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Vo,vl,this.up):Fi.lookAt(vl,Vo,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Fi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qM),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,YM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new B(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new B,ki=new B,td=new B,Bi=new B,Rs=new B,Ps=new B,P0=new B,nd=new B,id=new B,rd=new B,sd=new gt,od=new gt,ad=new gt;class gi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ui.subVectors(e,n),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ui.subVectors(r,n),ki.subVectors(i,n),td.subVectors(e,n);const o=ui.dot(ui),a=ui.dot(ki),l=ui.dot(td),c=ki.dot(ki),u=ki.dot(td),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,y=(o*u-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return sd.setScalar(0),od.setScalar(0),ad.setScalar(0),sd.fromBufferAttribute(e,n),od.fromBufferAttribute(e,i),ad.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sd,s.x),o.addScaledVector(od,s.y),o.addScaledVector(ad,s.z),o}static isFrontFacing(e,n,i,r){return ui.subVectors(i,n),ki.subVectors(e,n),ui.cross(ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return gi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Ps.subVectors(s,i),nd.subVectors(e,i);const l=Rs.dot(nd),c=Ps.dot(nd);if(l<=0&&c<=0)return n.copy(i);id.subVectors(e,r);const u=Rs.dot(id),d=Ps.dot(id);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Rs,o);rd.subVectors(e,s);const p=Rs.dot(rd),y=Ps.dot(rd);if(y>=0&&p<=y)return n.copy(s);const M=p*c-l*y;if(M<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Ps,a);const m=u*y-p*d;if(m<=0&&d-u>=0&&p-y>=0)return P0.subVectors(s,r),a=(d-u)/(d-u+(p-y)),n.copy(r).addScaledVector(P0,a);const f=1/(m+M+h);return o=M*f,a=h*f,n.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=PM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ld(o,s,e+1/3),this.g=ld(o,s,e),this.b=ld(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){const i=yy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=Xu(e.r),this.g=Xu(e.g),this.b=Xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ct.fromWorkingColorSpace(hn.copy(this),e),Math.round(Zt(hn.r*255,0,255))*65536+Math.round(Zt(hn.g*255,0,255))*256+Math.round(Zt(hn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(hn.copy(this),n);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=fn){ct.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,r=hn.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(xl);const i=Wu(dr.h,xl.h,n),r=Wu(dr.s,xl.s,n),s=Wu(dr.l,xl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Je;Je.NAMES=yy;let KM=0;class Co extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=lo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eh&&(i.blendSrc=this.blendSrc),this.blendDst!==Th&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Da extends Co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xi=ZM();function ZM(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function JM(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Zt(t,-65504,65504),Xi.floatView[0]=t;const e=Xi.uint32View[0],n=e>>23&511;return Xi.baseTable[n]+((e&8388607)>>Xi.shiftTable[n])}function QM(t){const e=t>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(t&1023)]+Xi.exponentTable[e],Xi.floatView[0]}const yl={toHalfFloat:JM,fromHalfFloat:QM},Ot=new B,_l=new Ee;class Di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=v0,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==v0&&(e.usage=this.usage),e}}class _y extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sy extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _t extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $M=0;const Kn=new at,cd=new on,Ls=new B,Fn=new Ha,Go=new Ha,Yt=new B;class Nn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gy(e)?Sy:_y)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,i){return Kn.makeTranslation(e,n,i),this.applyMatrix4(Kn),this}scale(e,n,i){return Kn.makeScale(e,n,i),this.applyMatrix4(Kn),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Fn.min,Go.min),Fn.expandByPoint(Yt),Yt.addVectors(Fn.max,Go.max),Fn.expandByPoint(Yt)):(Fn.expandByPoint(Go.min),Fn.expandByPoint(Go.max))}Fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),Yt.add(Ls)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new B,l[b]=new B;const c=new B,u=new B,d=new B,h=new Ee,p=new Ee,y=new Ee,M=new B,m=new B;function f(b,V,_){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,V),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,V),y.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),y.sub(h);const w=1/(p.x*y.y-y.x*p.y);isFinite(w)&&(M.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(w),a[b].add(M),a[V].add(M),a[_].add(M),l[b].add(m),l[V].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,V=g.length;b<V;++b){const _=g[b],w=_.start,C=_.count;for(let z=w,O=w+C;z<O;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new B,S=new B,P=new B,A=new B;function E(b){P.fromBufferAttribute(r,b),A.copy(P);const V=a[b];x.copy(V),x.sub(P.multiplyScalar(P.dot(V))).normalize(),S.crossVectors(A,V);const w=S.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,w)}for(let b=0,V=g.length;b<V;++b){const _=g[b],w=_.start,C=_.count;for(let z=w,O=w+C;z<O;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,y=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)h[y++]=c[p++]}return new Di(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L0=new at,Wr=new Ap,Sl=new Tp,D0=new B,Ml=new B,wl=new B,El=new B,ud=new B,Tl=new B,N0=new B,Al=new B;class $e extends on{constructor(e=new Nn,n=new Da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ud.fromBufferAttribute(d,e),o?Tl.addScaledVector(ud,u):Tl.addScaledVector(ud.sub(n),u))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Sl,D0)===null||Wr.origin.distanceToSquared(D0)>(e.far-e.near)**2))&&(L0.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(L0),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,M=h.length;y<M;y++){const m=h[y],f=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=x;S<P;S+=3){const A=a.getX(S),E=a.getX(S+1),b=a.getX(S+2);r=bl(this,f,e,i,c,u,d,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=y,f=M;m<f;m+=3){const g=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=bl(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,M=h.length;y<M;y++){const m=h[y],f=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=x;S<P;S+=3){const A=S,E=S+1,b=S+2;r=bl(this,f,e,i,c,u,d,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=y,f=M;m<f;m+=3){const g=m,x=m+1,S=m+2;r=bl(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ew(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function bl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ml),t.getVertexPosition(l,wl),t.getVertexPosition(c,El);const u=ew(t,e,n,i,Ml,wl,El,N0);if(u){const d=new B;gi.getBarycoord(N0,Ml,wl,El,d),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,d,new Ee)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,d,new Ee)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};gi.getNormal(Ml,wl,El,h.normal),u.face=h,u.barycoord=d}return u}class ni extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function y(M,m,f,g,x,S,P,A,E,b,V){const _=S/E,w=P/b,C=S/2,z=P/2,O=A/2,H=E+1,k=b+1;let ne=0,U=0;const K=new B;for(let Q=0;Q<k;Q++){const te=Q*w-z;for(let _e=0;_e<H;_e++){const Re=_e*_-C;K[M]=Re*g,K[m]=te*x,K[f]=O,c.push(K.x,K.y,K.z),K[M]=0,K[m]=0,K[f]=A>0?1:-1,u.push(K.x,K.y,K.z),d.push(_e/E),d.push(1-Q/b),ne+=1}}for(let Q=0;Q<b;Q++)for(let te=0;te<E;te++){const _e=h+te+H*Q,Re=h+te+H*(Q+1),W=h+(te+1)+H*(Q+1),J=h+(te+1)+H*Q;l.push(_e,Re,J),l.push(Re,W,J),U+=6}a.addGroup(p,U,V),p+=U,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=Mo(t[n]);for(const r in i)e[r]=i[r]}return e}function tw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function My(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const vi={clone:Mo,merge:gn};var nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=tw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wy extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new B,I0=new Ee,U0=new Ee;class Hn extends wy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=uf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uf*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,I0,U0),n.subVectors(U0,I0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(oc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Ns=1;class rw extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Ds,Ns,e,n);r.layers=this.layers,this.add(r);const s=new Hn(Ds,Ns,e,n);s.layers=this.layers,this.add(s);const o=new Hn(Ds,Ns,e,n);o.layers=this.layers,this.add(o);const a=new Hn(Ds,Ns,e,n);a.layers=this.layers,this.add(a);const l=new Hn(Ds,Ns,e,n);l.layers=this.layers,this.add(l);const c=new Hn(Ds,Ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ey extends Wt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:_o,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sw extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ey(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:tn});s.uniforms.tEquirect.value=n;const o=new $e(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=nn),new rw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const dd=new B,ow=new B,aw=new it;class Ai{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=dd.subVectors(i,n).cross(ow.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(dd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aw.getNormalMatrix(e),r=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Tp,Cl=new B;class Cp{constructor(e=new Ai,n=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],y=r[9],M=r[10],m=r[11],f=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-f).normalize(),i[1].setComponents(l+s,h+c,m+p,S+f).normalize(),i[2].setComponents(l+o,h+u,m+y,S+g).normalize(),i[3].setComponents(l-o,h-u,m-y,S-g).normalize(),i[4].setComponents(l-a,h-d,m-M,S-x).normalize(),n===Zi)i[5].setComponents(l+a,h+d,m+M,S+x).normalize();else if(n===Fc)i[5].setComponents(a,d,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ty(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<d.length;p++){const y=d[h],M=d[p];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,y=d.length;p<y;p++){const M=d[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ni extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],y=[],M=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let x=0;x<c;x++){const S=x*d-s;y.push(S,-g,0),M.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const x=g+c*f,S=g+c*(f+1),P=g+1+c*(f+1),A=g+1+c*f;p.push(x,S,A),p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var cw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uw=`#ifdef USE_ALPHAHASH
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
#endif`,dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mw=`#ifdef USE_AOMAP
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
#endif`,gw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vw=`#ifdef USE_BATCHING
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
#endif`,xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mw=`#ifdef USE_IRIDESCENCE
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
#endif`,ww=`#ifdef USE_BUMPMAP
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
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dw=`#define PI 3.141592653589793
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
} // validated`,Nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iw=`vec3 transformedNormal = objectNormal;
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
#endif`,Uw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bw=`
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
}`,Hw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
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
#endif`,Xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zw=`#ifdef USE_GRADIENTMAP
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
}`,Jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
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
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
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
#endif`,aE=`struct PhysicalMaterial {
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
}`,lE=`
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
#endif`,cE=`#if defined( RE_IndirectDiffuse )
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,yE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YE=`float getShadowMask() {
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
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n2=`#ifdef USE_TRANSMISSION
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
#endif`,i2=`#ifdef USE_TRANSMISSION
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
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c2=`uniform sampler2D t2D;
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`#include <common>
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
}`,m2=`#if DEPTH_PACKING == 3200
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
}`,g2=`#define DISTANCE
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
}`,v2=`#define DISTANCE
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`uniform float scale;
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
}`,S2=`uniform vec3 diffuse;
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
}`,M2=`#include <common>
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
}`,w2=`uniform vec3 diffuse;
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
}`,E2=`#define LAMBERT
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
}`,T2=`#define LAMBERT
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
}`,A2=`#define MATCAP
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
}`,b2=`#define MATCAP
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
}`,C2=`#define NORMAL
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
}`,R2=`#define NORMAL
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
}`,P2=`#define PHONG
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
}`,L2=`#define PHONG
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
}`,D2=`#define STANDARD
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
}`,N2=`#define STANDARD
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
}`,I2=`#define TOON
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
}`,U2=`#define TOON
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
}`,O2=`uniform float size;
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
}`,z2=`uniform vec3 diffuse;
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
}`,F2=`#include <common>
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
}`,k2=`uniform vec3 color;
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
}`,B2=`uniform float rotation;
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
}`,H2=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:cw,alphahash_pars_fragment:uw,alphamap_fragment:dw,alphamap_pars_fragment:hw,alphatest_fragment:fw,alphatest_pars_fragment:pw,aomap_fragment:mw,aomap_pars_fragment:gw,batching_pars_vertex:vw,batching_vertex:xw,begin_vertex:yw,beginnormal_vertex:_w,bsdfs:Sw,iridescence_fragment:Mw,bumpmap_pars_fragment:ww,clipping_planes_fragment:Ew,clipping_planes_pars_fragment:Tw,clipping_planes_pars_vertex:Aw,clipping_planes_vertex:bw,color_fragment:Cw,color_pars_fragment:Rw,color_pars_vertex:Pw,color_vertex:Lw,common:Dw,cube_uv_reflection_fragment:Nw,defaultnormal_vertex:Iw,displacementmap_pars_vertex:Uw,displacementmap_vertex:Ow,emissivemap_fragment:zw,emissivemap_pars_fragment:Fw,colorspace_fragment:kw,colorspace_pars_fragment:Bw,envmap_fragment:Hw,envmap_common_pars_fragment:Vw,envmap_pars_fragment:Gw,envmap_pars_vertex:Ww,envmap_physical_pars_fragment:tE,envmap_vertex:jw,fog_vertex:Xw,fog_pars_vertex:Yw,fog_fragment:qw,fog_pars_fragment:Kw,gradientmap_pars_fragment:Zw,lightmap_pars_fragment:Jw,lights_lambert_fragment:Qw,lights_lambert_pars_fragment:$w,lights_pars_begin:eE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:aE,lights_fragment_begin:lE,lights_fragment_maps:cE,lights_fragment_end:uE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:vE,map_particle_pars_fragment:xE,metalnessmap_fragment:yE,metalnessmap_pars_fragment:_E,morphinstance_vertex:SE,morphcolor_vertex:ME,morphnormal_vertex:wE,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:bE,normal_pars_fragment:CE,normal_pars_vertex:RE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:OE,packing:zE,premultiplied_alpha_fragment:FE,project_vertex:kE,dithering_fragment:BE,dithering_pars_fragment:HE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:jE,shadowmap_vertex:XE,shadowmask_pars_fragment:YE,skinbase_vertex:qE,skinning_pars_vertex:KE,skinning_vertex:ZE,skinnormal_vertex:JE,specularmap_fragment:QE,specularmap_pars_fragment:$E,tonemapping_fragment:e2,tonemapping_pars_fragment:t2,transmission_fragment:n2,transmission_pars_fragment:i2,uv_pars_fragment:r2,uv_pars_vertex:s2,uv_vertex:o2,worldpos_vertex:a2,background_vert:l2,background_frag:c2,backgroundCube_vert:u2,backgroundCube_frag:d2,cube_vert:h2,cube_frag:f2,depth_vert:p2,depth_frag:m2,distanceRGBA_vert:g2,distanceRGBA_frag:v2,equirect_vert:x2,equirect_frag:y2,linedashed_vert:_2,linedashed_frag:S2,meshbasic_vert:M2,meshbasic_frag:w2,meshlambert_vert:E2,meshlambert_frag:T2,meshmatcap_vert:A2,meshmatcap_frag:b2,meshnormal_vert:C2,meshnormal_frag:R2,meshphong_vert:P2,meshphong_frag:L2,meshphysical_vert:D2,meshphysical_frag:N2,meshtoon_vert:I2,meshtoon_frag:U2,points_vert:O2,points_frag:z2,shadow_vert:F2,shadow_frag:k2,sprite_vert:B2,sprite_frag:H2},Oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},bi={basic:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:gn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:gn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:gn([Oe.points,Oe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:gn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:gn([Oe.common,Oe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:gn([Oe.sprite,Oe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:gn([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:gn([Oe.lights,Oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};bi.physical={uniforms:gn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Rl={r:0,b:0,g:0},Xr=new Si,V2=new at;function G2(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function y(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function M(g){let x=!1;const S=y(g);S===null?f(a,l):S&&S.isColor&&(f(S,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const S=y(x);S&&(S.isCubeTexture||S.mapping===iu)?(u===void 0&&(u=new $e(new ni(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Mo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xr.copy(x.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(V2.makeRotationFromEuler(Xr)),u.material.toneMapped=ct.getTransfer(S.colorSpace)!==xt,(d!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $e(new Ni(2,2),new Vt({name:"BackgroundMaterial",uniforms:Mo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,x){g.getRGB(Rl,My(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:M,addToRenderList:m}}function W2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(_,w,C,z,O){let H=!1;const k=d(z,C,w);s!==k&&(s=k,c(s.object)),H=p(_,z,C,O),H&&y(_,z,C,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(_,w,C,z),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,w,C){const z=C.wireframe===!0;let O=i[_.id];O===void 0&&(O={},i[_.id]=O);let H=O[w.id];H===void 0&&(H={},O[w.id]=H);let k=H[z];return k===void 0&&(k=h(l()),H[z]=k),k}function h(_){const w=[],C=[],z=[];for(let O=0;O<n;O++)w[O]=0,C[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:z,object:_,attributes:{},index:null}}function p(_,w,C,z){const O=s.attributes,H=w.attributes;let k=0;const ne=C.getAttributes();for(const U in ne)if(ne[U].location>=0){const Q=O[U];let te=H[U];if(te===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),Q===void 0||Q.attribute!==te||te&&Q.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function y(_,w,C,z){const O={},H=w.attributes;let k=0;const ne=C.getAttributes();for(const U in ne)if(ne[U].location>=0){let Q=H[U];Q===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const te={};te.attribute=Q,Q&&Q.data&&(te.data=Q.data),O[U]=te,k++}s.attributes=O,s.attributesNum=k,s.index=z}function M(){const _=s.newAttributes;for(let w=0,C=_.length;w<C;w++)_[w]=0}function m(_){f(_,0)}function f(_,w){const C=s.newAttributes,z=s.enabledAttributes,O=s.attributeDivisors;C[_]=1,z[_]===0&&(t.enableVertexAttribArray(_),z[_]=1),O[_]!==w&&(t.vertexAttribDivisor(_,w),O[_]=w)}function g(){const _=s.newAttributes,w=s.enabledAttributes;for(let C=0,z=w.length;C<z;C++)w[C]!==_[C]&&(t.disableVertexAttribArray(C),w[C]=0)}function x(_,w,C,z,O,H,k){k===!0?t.vertexAttribIPointer(_,w,C,O,H):t.vertexAttribPointer(_,w,C,z,O,H)}function S(_,w,C,z){M();const O=z.attributes,H=C.getAttributes(),k=w.defaultAttributeValues;for(const ne in H){const U=H[ne];if(U.location>=0){let K=O[ne];if(K===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const Q=K.normalized,te=K.itemSize,_e=e.get(K);if(_e===void 0)continue;const Re=_e.buffer,W=_e.type,J=_e.bytesPerElement,le=W===t.INT||W===t.UNSIGNED_INT||K.gpuType===vp;if(K.isInterleavedBufferAttribute){const he=K.data,Te=he.stride,De=K.offset;if(he.isInstancedInterleavedBuffer){for(let Ue=0;Ue<U.locationSize;Ue++)f(U.location+Ue,he.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<U.locationSize;Ue++)m(U.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Ue=0;Ue<U.locationSize;Ue++)x(U.location+Ue,te/U.locationSize,W,Q,Te*J,(De+te/U.locationSize*Ue)*J,le)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<U.locationSize;he++)f(U.location+he,K.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<U.locationSize;he++)m(U.location+he);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let he=0;he<U.locationSize;he++)x(U.location+he,te/U.locationSize,W,Q,te*J,te/U.locationSize*he*J,le)}}else if(k!==void 0){const Q=k[ne];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(U.location,Q);break;case 3:t.vertexAttrib3fv(U.location,Q);break;case 4:t.vertexAttrib4fv(U.location,Q);break;default:t.vertexAttrib1fv(U.location,Q)}}}}g()}function P(){b();for(const _ in i){const w=i[_];for(const C in w){const z=w[C];for(const O in z)u(z[O].object),delete z[O];delete w[C]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const C in w){const z=w[C];for(const O in z)u(z[O].object),delete z[O];delete w[C]}delete i[_.id]}function E(_){for(const w in i){const C=i[w];if(C[_.id]===void 0)continue;const z=C[_.id];for(const O in z)u(z[O].object),delete z[O];delete C[_.id]}}function b(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function j2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],u[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let y=0;for(let M=0;M<d;M++)y+=u[M];for(let M=0;M<h.length;M++)n.update(y,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function X2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ei&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ii&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$n&&!b)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:P,maxSamples:A}}function Y2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ai,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||y===null||y.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,x=g*4;let S=f.clippingState||null;l.value=S,S=u(y,h,x,p);for(let P=0;P!==x;++P)S[P]=n[P];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,y){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,y!==!0||m===null){const f=p+M*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==M;++x,S+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function q2(t){let e=new WeakMap;function n(o,a){return a===Ic?o.mapping=_o:a===Uh&&(o.mapping=So),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ic||a===Uh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rp extends wy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=4,O0=[.125,.215,.35,.446,.526,.582],Qr=20,hd=new Rp,z0=new Je;let fd=null,pd=0,md=0,gd=!1;const Jr=(1+Math.sqrt(5))/2,Is=1/Jr,F0=[new B(-Jr,Is,0),new B(Jr,Is,0),new B(-Is,0,Jr),new B(Is,0,Jr),new B(0,Jr,-Is),new B(0,Jr,Is),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_o||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Rn,format:ei,colorSpace:ir,depthBuffer:!1},r=k0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K2(s)),this._blurMaterial=Z2(s,e,n)}return r}_compileMaterial(e){const n=new $e(this._lodPlanes[0],e);this._renderer.compile(n,hd)}_sceneToCubeUV(e,n,i,r){const a=new Hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(z0),u.toneMapping=Dr,u.autoClear=!1;const p=new Da({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),y=new $e(new ni,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(z0),M=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Pl(r,g*x,f>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_o||e.mapping===So;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,hd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=F0[(r-s-1)%F0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $e(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),M=s/y,m=isFinite(s)?1+Math.floor(u*M):Qr;m>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const f=[];let g=0;for(let E=0;E<Qr;++E){const b=E/M,V=Math.exp(-b*b/2);f.push(V),E===0?g+=V:E<m&&(g+=2*V)}for(let E=0;E<f.length;E++)f[E]=f[E]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=y,h.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-Qs?r-x+Qs:0),A=4*(this._cubeSize-S);Pl(n,P,A,3*S,2*S),l.setRenderTarget(n),l.render(d,hd)}}function K2(t){const e=[],n=[],i=[];let r=t;const s=t-Qs+1+O0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Qs?l=O0[o-t+Qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,M=3,m=2,f=1,g=new Float32Array(M*y*p),x=new Float32Array(m*y*p),S=new Float32Array(f*y*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,b=A>2?0:-1,V=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];g.set(V,M*y*A),x.set(h,m*y*A);const _=[A,A,A,A,A,A];S.set(_,f*y*A)}const P=new Nn;P.setAttribute("position",new Di(g,M)),P.setAttribute("uv",new Di(x,m)),P.setAttribute("faceIndex",new Di(S,f)),e.push(P),r>Qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function k0(t,e,n){const i=new si(t,e,n);return i.texture.mapping=iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Z2(t,e,n){const i=new Float32Array(Qr),r=new B(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function B0(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function H0(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Pp(){return`

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
	`}function J2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ic||l===Uh,u=l===_o||l===So;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new df(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new df(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Q2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ac("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $2(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const M=h.morphAttributes[y];for(let m=0,f=M.length;m<f;m++)e.remove(M[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const M=p[y];for(let m=0,f=M.length;m<f;m++)e.update(M[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,y=d.attributes.position;let M=0;if(p!==null){const g=p.array;M=p.version;for(let x=0,S=g.length;x<S;x+=3){const P=g[x+0],A=g[x+1],E=g[x+2];h.push(P,A,A,E,E,P)}}else if(y!==void 0){const g=y.array;M=y.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const P=x+0,A=x+1,E=x+2;h.push(P,A,A,E,E,P)}}else return;const m=new(gy(h)?Sy:_y)(h,1);m.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,h*o,y),n.update(p,i,y))}function u(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,y);let m=0;for(let f=0;f<y;f++)m+=p[f];n.update(m,i,1)}function d(h,p,y,M){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,y);let f=0;for(let g=0;g<y;g++)f+=p[g];for(let g=0;g<M.length;g++)n.update(f,i,M[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nT(t,e,n){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let _=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*A*4*d),b=new xy(E,P,A,d);b.type=$n,b.needsUpdate=!0;const V=S*4;for(let w=0;w<d;w++){const C=f[w],z=g[w],O=x[w],H=P*A*4*w;for(let k=0;k<C.count;k++){const ne=k*V;y===!0&&(r.fromBufferAttribute(C,k),E[H+ne+0]=r.x,E[H+ne+1]=r.y,E[H+ne+2]=r.z,E[H+ne+3]=0),M===!0&&(r.fromBufferAttribute(z,k),E[H+ne+4]=r.x,E[H+ne+5]=r.y,E[H+ne+6]=r.z,E[H+ne+7]=0),m===!0&&(r.fromBufferAttribute(O,k),E[H+ne+8]=r.x,E[H+ne+9]=r.y,E[H+ne+10]=r.z,E[H+ne+11]=O.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new Ee(P,A)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const M=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function iT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Lp extends Wt{constructor(e,n,i,r,s,o,a,l,c,u=co){if(u!==co&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===co&&(i=cs),i===void 0&&u===ds&&(i=us),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ay=new Wt,V0=new Lp(1,1),by=new xy,Cy=new HM,Ry=new Ey,G0=[],W0=[],j0=new Float32Array(16),X0=new Float32Array(9),Y0=new Float32Array(4);function Ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=G0[r];if(s===void 0&&(s=new Float32Array(r),G0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function su(t,e){let n=W0[e];n===void 0&&(n=new Int32Array(e),W0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Y0.set(i),t.uniformMatrix2fv(this.addr,!1,Y0),Xt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;X0.set(i),t.uniformMatrix3fv(this.addr,!1,X0),Xt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;j0.set(i),t.uniformMatrix4fv(this.addr,!1,j0),Xt(n,i)}}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(V0.compareFunction=my,s=V0):s=Ay,n.setTexture2D(e||s,r)}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cy,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ry,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||by,r)}function wT(t){switch(t){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return fT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function ET(t,e){t.uniform1fv(this.addr,e)}function TT(t,e){const n=Ro(e,this.size,2);t.uniform2fv(this.addr,n)}function AT(t,e){const n=Ro(e,this.size,3);t.uniform3fv(this.addr,n)}function bT(t,e){const n=Ro(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=Ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=Ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PT(t,e){const n=Ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function LT(t,e){t.uniform1iv(this.addr,e)}function DT(t,e){t.uniform2iv(this.addr,e)}function NT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function UT(t,e){t.uniform1uiv(this.addr,e)}function OT(t,e){t.uniform2uiv(this.addr,e)}function zT(t,e){t.uniform3uiv(this.addr,e)}function FT(t,e){t.uniform4uiv(this.addr,e)}function kT(t,e,n){const i=this.cache,r=e.length,s=su(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ay,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=su(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Cy,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=su(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ry,s[o])}function VT(t,e,n){const i=this.cache,r=e.length,s=su(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||by,s[o])}function GT(t){switch(t){case 5126:return ET;case 35664:return TT;case 35665:return AT;case 35666:return bT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return NT;case 35669:case 35673:return IT;case 5125:return UT;case 36294:return OT;case 36295:return zT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return VT}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wT(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function q0(t,e){t.seq.push(e),t.map[e.id]=e}function YT(t,e,n){const i=t.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),o=vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){q0(n,c===void 0?new WT(a,t,e):new jT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new XT(a),q0(n,d)),n=d}}}class lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);YT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function K0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qT=37297;let KT=0;function ZT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function JT(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===zc&&n===Oc?i="LinearDisplayP3ToLinearSRGB":e===Oc&&n===zc&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case ru:return[i,"LinearTransferOETF"];case fn:case Ep:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Z0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ZT(t.getShaderSource(e),o)}else return r}function QT(t,e){const n=JT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $T(t,e){let n;switch(e){case $x:n="Linear";break;case ey:n="Reinhard";break;case ty:n="Cineon";break;case gp:n="ACESFilmic";break;case ny:n="AgX";break;case iy:n="Neutral";break;case xM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new B;function eA(){ct.getLuminanceCoefficients(Ll);const t=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function nA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $o(t){return t!==""}function J0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(t){return t.replace(rA,oA)}const sA=new Map;function oA(t,e){let n=nt[e];if(n===void 0){const i=sA.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hf(n)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(t){return t.replace(aA,lA)}function lA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function cA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function uA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _o:case So:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function hA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qx:e="ENVMAP_BLENDING_MULTIPLY";break;case gM:e="ENVMAP_BLENDING_MIX";break;case vM:e="ENVMAP_BLENDING_ADD";break}return e}function fA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function pA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=cA(n),c=uA(n),u=dA(n),d=hA(n),h=fA(n),p=tA(n),y=nA(s),M=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter($o).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter($o).join(`
`),f.length>0&&(f+=`
`)):(m=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),f=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?nt.tonemapping_pars_fragment:"",n.toneMapping!==Dr?$T("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,QT("linearToOutputTexel",n.outputColorSpace),eA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),o=hf(o),o=J0(o,n),o=Q0(o,n),a=hf(a),a=J0(a,n),a=Q0(a,n),o=$0(o),a=$0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===x0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=g+m+o,S=g+f+a,P=K0(r,r.VERTEX_SHADER,x),A=K0(r,r.FRAGMENT_SHADER,S);r.attachShader(M,P),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function E(w){if(t.debug.checkShaderErrors){const C=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(A).trim();let H=!0,k=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,P,A);else{const ne=Z0(r,P,"vertex"),U=Z0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+ne+`
`+U)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||O==="")&&(k=!1);k&&(w.diagnostics={runnable:H,programLog:C,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(P),r.deleteShader(A),b=new lc(r,M),V=iA(r,M)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let V;this.getAttributes=function(){return V===void 0&&E(this),V};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,qT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=A,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vA(e),n.set(e,i)),i}}class vA{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}}function xA(t,e,n,i,r,s,o){const a=new bp,l=new gA,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,w,C,z,O){const H=z.fog,k=O.geometry,ne=_.isMeshStandardMaterial?z.environment:null,U=(_.isMeshStandardMaterial?n:e).get(_.envMap||ne),K=U&&U.mapping===iu?U.image.height:null,Q=M[_.type];_.precision!==null&&(y=r.getMaxPrecision(_.precision),y!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",y,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=te!==void 0?te.length:0;let Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let W,J,le,he;if(Q){const et=bi[Q];W=et.vertexShader,J=et.fragmentShader}else W=_.vertexShader,J=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),he=l.getFragmentShaderID(_);const Te=t.getRenderTarget(),De=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,He=!!_.map,fe=!!_.matcap,L=!!U,we=!!_.aoMap,be=!!_.lightMap,pe=!!_.bumpMap,Ae=!!_.normalMap,Be=!!_.displacementMap,Ie=!!_.emissiveMap,N=!!_.metalnessMap,T=!!_.roughnessMap,se=_.anisotropy>0,ve=_.clearcoat>0,Se=_.dispersion>0,me=_.iridescence>0,Fe=_.sheen>0,F=_.transmission>0,G=se&&!!_.anisotropyMap,ce=ve&&!!_.clearcoatMap,D=ve&&!!_.clearcoatNormalMap,j=ve&&!!_.clearcoatRoughnessMap,Y=me&&!!_.iridescenceMap,X=me&&!!_.iridescenceThicknessMap,re=Fe&&!!_.sheenColorMap,xe=Fe&&!!_.sheenRoughnessMap,ee=!!_.specularMap,oe=!!_.specularColorMap,I=!!_.specularIntensityMap,ae=F&&!!_.transmissionMap,q=F&&!!_.thicknessMap,Z=!!_.gradientMap,ge=!!_.alphaMap,Me=_.alphaTest>0,We=!!_.alphaHash,Ke=!!_.extensions;let vt=Dr;_.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ve={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:J,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:ir,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:fe,envMap:L,envMapMode:L&&U.mapping,envMapCubeUVHeight:K,aoMap:we,lightMap:be,bumpMap:pe,normalMap:Ae,displacementMap:p&&Be,emissiveMap:Ie,normalMapObjectSpace:Ae&&_.normalMapType===MM,normalMapTangentSpace:Ae&&_.normalMapType===wp,metalnessMap:N,roughnessMap:T,anisotropy:se,anisotropyMap:G,clearcoat:ve,clearcoatMap:ce,clearcoatNormalMap:D,clearcoatRoughnessMap:j,dispersion:Se,iridescence:me,iridescenceMap:Y,iridescenceThicknessMap:X,sheen:Fe,sheenColorMap:re,sheenRoughnessMap:xe,specularMap:ee,specularColorMap:oe,specularIntensityMap:I,transmission:F,transmissionMap:ae,thicknessMap:q,gradientMap:Z,opaque:_.transparent===!1&&_.blending===lo&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Me,alphaHash:We,combine:_.combine,mapUv:He&&m(_.map.channel),aoMapUv:we&&m(_.aoMap.channel),lightMapUv:be&&m(_.lightMap.channel),bumpMapUv:pe&&m(_.bumpMap.channel),normalMapUv:Ae&&m(_.normalMap.channel),displacementMapUv:Be&&m(_.displacementMap.channel),emissiveMapUv:Ie&&m(_.emissiveMap.channel),metalnessMapUv:N&&m(_.metalnessMap.channel),roughnessMapUv:T&&m(_.roughnessMap.channel),anisotropyMapUv:G&&m(_.anisotropyMap.channel),clearcoatMapUv:ce&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:D&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:X&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(_.sheenRoughnessMap.channel),specularMapUv:ee&&m(_.specularMap.channel),specularColorMapUv:oe&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:ae&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:ge&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ae||se),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(He||ge),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ke&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&_.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(x(w,_),S(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const w=M[_.type];let C;if(w){const z=bi[w];C=vi.clone(z.uniforms)}else C=_.uniforms;return C}function A(_,w){let C;for(let z=0,O=u.length;z<O;z++){const H=u[z];if(H.cacheKey===w){C=H,++C.usedTimes;break}}return C===void 0&&(C=new pA(t,w,_,s),u.push(C)),C}function E(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:P,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:V}}function yA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function _A(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ng(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,y,M,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:M,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=M,f.group=m),e++,f}function a(d,h,p,y,M,m){const f=o(d,h,p,y,M,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,y,M,m){const f=o(d,h,p,y,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||_A),i.length>1&&i.sort(h||tg),r.length>1&&r.sort(h||tg)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function SA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ng,t.set(i,[o])):r>=s.length?(o=new ng,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function MA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Je};break;case"SpotLight":n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function wA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let EA=0;function TA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AA(t){const e=new MA,n=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new at,o=new at;function a(c){let u=0,d=0,h=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,y=0,M=0,m=0,f=0,g=0,x=0,S=0,P=0,A=0,E=0;c.sort(TA);for(let V=0,_=c.length;V<_;V++){const w=c[V],C=w.color,z=w.intensity,O=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=C.r*z,d+=C.g*z,h+=C.b*z;else if(w.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(w.sh.coefficients[k],z);E++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ne=w.shadow,U=n.get(w);U.shadowIntensity=ne.intensity,U.shadowBias=ne.bias,U.shadowNormalBias=ne.normalBias,U.shadowRadius=ne.radius,U.shadowMapSize=ne.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=k,p++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(C).multiplyScalar(z),k.distance=O,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,i.spot[M]=k;const ne=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,ne.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[M]=ne.matrix,w.castShadow){const U=n.get(w);U.shadowIntensity=ne.intensity,U.shadowBias=ne.bias,U.shadowNormalBias=ne.normalBias,U.shadowRadius=ne.radius,U.shadowMapSize=ne.mapSize,i.spotShadow[M]=U,i.spotShadowMap[M]=H,S++}M++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(C).multiplyScalar(z),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=k,m++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const ne=w.shadow,U=n.get(w);U.shadowIntensity=ne.intensity,U.shadowBias=ne.bias,U.shadowNormalBias=ne.normalBias,U.shadowRadius=ne.radius,U.shadowMapSize=ne.mapSize,U.shadowCameraNear=ne.camera.near,U.shadowCameraFar=ne.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=H,i.pointShadowMatrix[y]=w.shadow.matrix,x++}i.point[y]=k,y++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(z),k.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[f]=k,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==y||b.spotLength!==M||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==g||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==P||b.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=y,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,b.directionalLength=p,b.pointLength=y,b.spotLength=M,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=g,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=P,b.numLightProbes=E,i.version=EA++)}function l(c,u){let d=0,h=0,p=0,y=0,M=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const x=c[f];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function ig(t){const e=new AA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ig(t),e.set(r,[a])):s>=o.length?(a=new ig(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class CA extends Co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RA extends Co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
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
}`;function DA(t,e,n){let i=new Cp;const r=new Ee,s=new Ee,o=new gt,a=new CA({depthPacking:SM}),l=new RA,c={},u=n.maxTextureSize,d={[Ur]:_n,[_n]:Ur,[xn]:xn},h=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:PA,fragmentShader:LA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Nn;y.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $e(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kx;let f=this.type;this.render=function(A,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const V=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),C=t.state;C.setBlending(tn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const z=f!==Gi&&this.type===Gi,O=f===Gi&&this.type!==Gi;for(let H=0,k=A.length;H<k;H++){const ne=A[H],U=ne.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const K=U.getFrameExtents();if(r.multiply(K),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null||z===!0||O===!0){const te=this.type!==Gi?{minFilter:Jt,magFilter:Jt}:{};U.map!==null&&U.map.dispose(),U.map=new si(r.x,r.y,te),U.map.texture.name=ne.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Q=U.getViewportCount();for(let te=0;te<Q;te++){const _e=U.getViewport(te);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),C.viewport(o),U.updateMatrices(ne,te),i=U.getFrustum(),S(E,b,U.camera,ne,this.type)}U.isPointLightShadow!==!0&&this.type===Gi&&g(U,b),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(V,_,w)};function g(A,E){const b=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,b,h,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,b,p,M,null)}function x(A,E,b,V){let _=null;const w=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=b.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const C=_.uuid,z=E.uuid;let O=c[C];O===void 0&&(O={},c[C]=O);let H=O[z];H===void 0&&(H=_.clone(),O[z]=H,E.addEventListener("dispose",P)),_=H}if(_.visible=E.visible,_.wireframe=E.wireframe,V===Gi?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const C=t.properties.get(_);C.light=b}return _}function S(A,E,b,V,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const z=e.update(A),O=A.material;if(Array.isArray(O)){const H=z.groups;for(let k=0,ne=H.length;k<ne;k++){const U=H[k],K=O[U.materialIndex];if(K&&K.visible){const Q=x(A,K,V,_);A.onBeforeShadow(t,A,E,b,z,Q,U),t.renderBufferDirect(b,null,z,Q,A,U),A.onAfterShadow(t,A,E,b,z,Q,U)}}}else if(O.visible){const H=x(A,O,V,_);A.onBeforeShadow(t,A,E,b,z,H,null),t.renderBufferDirect(b,null,z,H,A,null),A.onAfterShadow(t,A,E,b,z,H,null)}}const C=A.children;for(let z=0,O=C.length;z<O;z++)S(C[z],E,b,V,_)}function P(A){A.target.removeEventListener("dispose",P);for(const b in c){const V=c[b],_=A.target.uuid;_ in V&&(V[_].dispose(),delete V[_])}}}const NA={[Ch]:Rh,[Ph]:Nh,[Lh]:Ih,[yo]:Dh,[Rh]:Ch,[Nh]:Ph,[Ih]:Lh,[Dh]:yo};function IA(t){function e(){let I=!1;const ae=new gt;let q=null;const Z=new gt(0,0,0,0);return{setMask:function(ge){q!==ge&&!I&&(t.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){I=ge},setClear:function(ge,Me,We,Ke,vt){vt===!0&&(ge*=Ke,Me*=Ke,We*=Ke),ae.set(ge,Me,We,Ke),Z.equals(ae)===!1&&(t.clearColor(ge,Me,We,Ke),Z.copy(ae))},reset:function(){I=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,q=null,Z=null,ge=null;return{setReversed:function(Me){ae=Me},setTest:function(Me){Me?le(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(Me){q!==Me&&!I&&(t.depthMask(Me),q=Me)},setFunc:function(Me){if(ae&&(Me=NA[Me]),Z!==Me){switch(Me){case Ch:t.depthFunc(t.NEVER);break;case Rh:t.depthFunc(t.ALWAYS);break;case Ph:t.depthFunc(t.LESS);break;case yo:t.depthFunc(t.LEQUAL);break;case Lh:t.depthFunc(t.EQUAL);break;case Dh:t.depthFunc(t.GEQUAL);break;case Nh:t.depthFunc(t.GREATER);break;case Ih:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=Me}},setLocked:function(Me){I=Me},setClear:function(Me){ge!==Me&&(t.clearDepth(Me),ge=Me)},reset:function(){I=!1,q=null,Z=null,ge=null}}}function i(){let I=!1,ae=null,q=null,Z=null,ge=null,Me=null,We=null,Ke=null,vt=null;return{setTest:function(Ve){I||(Ve?le(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ve){ae!==Ve&&!I&&(t.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,et,ot){(q!==Ve||Z!==et||ge!==ot)&&(t.stencilFunc(Ve,et,ot),q=Ve,Z=et,ge=ot)},setOp:function(Ve,et,ot){(Me!==Ve||We!==et||Ke!==ot)&&(t.stencilOp(Ve,et,ot),Me=Ve,We=et,Ke=ot)},setLocked:function(Ve){I=Ve},setClear:function(Ve){vt!==Ve&&(t.clearStencil(Ve),vt=Ve)},reset:function(){I=!1,ae=null,q=null,Z=null,ge=null,Me=null,We=null,Ke=null,vt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,y=!1,M=null,m=null,f=null,g=null,x=null,S=null,P=null,A=new Je(0,0,0),E=0,b=!1,V=null,_=null,w=null,C=null,z=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ne)[1]),H=k>=1):ne.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),H=k>=2);let U=null,K={};const Q=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),_e=new gt().fromArray(Q),Re=new gt().fromArray(te);function W(I,ae,q,Z){const ge=new Uint8Array(4),Me=t.createTexture();t.bindTexture(I,Me),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<q;We++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ae+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return Me}const J={};J[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(yo),be(!1),pe(h0),le(t.CULL_FACE),L(tn);function le(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function he(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Te(I,ae){return u[I]!==ae?(t.bindFramebuffer(I,ae),u[I]=ae,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ae),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function De(I,ae){let q=h,Z=!1;if(I){q=d.get(ae),q===void 0&&(q=[],d.set(ae,q));const ge=I.textures;if(q.length!==ge.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,We=ge.length;Me<We;Me++)q[Me]=t.COLOR_ATTACHMENT0+Me;q.length=ge.length,Z=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,Z=!0);Z&&t.drawBuffers(q)}function Ue(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const He={[mi]:t.FUNC_ADD,[nM]:t.FUNC_SUBTRACT,[iM]:t.FUNC_REVERSE_SUBTRACT};He[rM]=t.MIN,He[sM]=t.MAX;const fe={[Qo]:t.ZERO,[oM]:t.ONE,[aM]:t.SRC_COLOR,[Eh]:t.SRC_ALPHA,[dM]:t.SRC_ALPHA_SATURATE,[bh]:t.DST_COLOR,[Ah]:t.DST_ALPHA,[lM]:t.ONE_MINUS_SRC_COLOR,[Th]:t.ONE_MINUS_SRC_ALPHA,[uM]:t.ONE_MINUS_DST_COLOR,[cM]:t.ONE_MINUS_DST_ALPHA,[hM]:t.CONSTANT_COLOR,[fM]:t.ONE_MINUS_CONSTANT_COLOR,[pM]:t.CONSTANT_ALPHA,[mM]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,ae,q,Z,ge,Me,We,Ke,vt,Ve){if(I===tn){y===!0&&(he(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),I!==Jx){if(I!==M||Ve!==b){if((m!==mi||x!==mi)&&(t.blendEquation(t.FUNC_ADD),m=mi,x=mi),Ve)switch(I){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case f0:t.blendFunc(t.ONE,t.ONE);break;case p0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case m0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case f0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case p0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case m0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,g=null,S=null,P=null,A.set(0,0,0),E=0,M=I,b=Ve}return}ge=ge||ae,Me=Me||q,We=We||Z,(ae!==m||ge!==x)&&(t.blendEquationSeparate(He[ae],He[ge]),m=ae,x=ge),(q!==f||Z!==g||Me!==S||We!==P)&&(t.blendFuncSeparate(fe[q],fe[Z],fe[Me],fe[We]),f=q,g=Z,S=Me,P=We),(Ke.equals(A)===!1||vt!==E)&&(t.blendColor(Ke.r,Ke.g,Ke.b,vt),A.copy(Ke),E=vt),M=I,b=!1}function we(I,ae){I.side===xn?he(t.CULL_FACE):le(t.CULL_FACE);let q=I.side===_n;ae&&(q=!q),be(q),I.blending===lo&&I.transparent===!1?L(tn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(I){V!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),V=I)}function pe(I){I!==eM?(le(t.CULL_FACE),I!==_&&(I===h0?t.cullFace(t.BACK):I===tM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),_=I}function Ae(I){I!==w&&(H&&t.lineWidth(I),w=I)}function Be(I,ae,q){I?(le(t.POLYGON_OFFSET_FILL),(C!==ae||z!==q)&&(t.polygonOffset(ae,q),C=ae,z=q)):he(t.POLYGON_OFFSET_FILL)}function Ie(I){I?le(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function N(I){I===void 0&&(I=t.TEXTURE0+O-1),U!==I&&(t.activeTexture(I),U=I)}function T(I,ae,q){q===void 0&&(U===null?q=t.TEXTURE0+O-1:q=U);let Z=K[q];Z===void 0&&(Z={type:void 0,texture:void 0},K[q]=Z),(Z.type!==I||Z.texture!==ae)&&(U!==q&&(t.activeTexture(q),U=q),t.bindTexture(I,ae||J[I]),Z.type=I,Z.texture=ae)}function se(){const I=K[U];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(I){_e.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),_e.copy(I))}function re(I){Re.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Re.copy(I))}function xe(I,ae){let q=l.get(ae);q===void 0&&(q=new WeakMap,l.set(ae,q));let Z=q.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(ae,I.name),q.set(I,Z))}function ee(I,ae){const Z=l.get(ae).get(I);a.get(ae)!==Z&&(t.uniformBlockBinding(ae,Z,I.__bindingPointIndex),a.set(ae,Z))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,K={},u={},d=new WeakMap,h=[],p=null,y=!1,M=null,m=null,f=null,g=null,x=null,S=null,P=null,A=new Je(0,0,0),E=0,b=!1,V=null,_=null,w=null,C=null,z=null,_e.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:he,bindFramebuffer:Te,drawBuffers:De,useProgram:Ue,setBlending:L,setMaterial:we,setFlipSided:be,setCullFace:pe,setLineWidth:Ae,setPolygonOffset:Be,setScissorTest:Ie,activeTexture:N,bindTexture:T,unbindTexture:se,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:j,texImage3D:Y,updateUBOMapping:xe,uniformBlockBinding:ee,texStorage2D:ce,texStorage3D:D,texSubImage2D:me,texSubImage3D:Fe,compressedTexSubImage2D:F,compressedTexSubImage3D:G,scissor:X,viewport:re,reset:oe}}function rg(t,e,n,i){const r=UA(i);switch(n){case ly:return t*e;case uy:return t*e;case dy:return t*e*2;case hy:return t*e/r.components*r.byteLength;case _p:return t*e/r.components*r.byteLength;case fy:return t*e*2/r.components*r.byteLength;case Sp:return t*e*2/r.components*r.byteLength;case cy:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case Mp:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:case Bh:return Math.max(t,16)*Math.max(e,8)/4;case zh:case kh:return Math.max(t,8)*Math.max(e,8)/2;case Hh:case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sc:case sf:case of:return Math.ceil(t/4)*Math.ceil(e/4)*16;case py:case af:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lf:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UA(t){switch(t){case Ii:case sy:return{byteLength:1,components:1};case Pa:case oy:case Rn:return{byteLength:2,components:1};case xp:case yp:return{byteLength:2,components:4};case cs:case vp:case $n:return{byteLength:4,components:1};case ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function OA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,T){return p?new OffscreenCanvas(N,T):La("canvas")}function M(N,T,se){let ve=1;const Se=Ie(N);if((Se.width>se||Se.height>se)&&(ve=se/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(ve*Se.width),Fe=Math.floor(ve*Se.height);d===void 0&&(d=y(me,Fe));const F=T?y(me,Fe):d;return F.width=me,F.height=Fe,F.getContext("2d").drawImage(N,0,0,me,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+me+"x"+Fe+")."),F}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Jt&&N.minFilter!==nn}function f(N){t.generateMipmap(N)}function g(N,T,se,ve,Se=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=T;if(T===t.RED&&(se===t.FLOAT&&(me=t.R32F),se===t.HALF_FLOAT&&(me=t.R16F),se===t.UNSIGNED_BYTE&&(me=t.R8)),T===t.RED_INTEGER&&(se===t.UNSIGNED_BYTE&&(me=t.R8UI),se===t.UNSIGNED_SHORT&&(me=t.R16UI),se===t.UNSIGNED_INT&&(me=t.R32UI),se===t.BYTE&&(me=t.R8I),se===t.SHORT&&(me=t.R16I),se===t.INT&&(me=t.R32I)),T===t.RG&&(se===t.FLOAT&&(me=t.RG32F),se===t.HALF_FLOAT&&(me=t.RG16F),se===t.UNSIGNED_BYTE&&(me=t.RG8)),T===t.RG_INTEGER&&(se===t.UNSIGNED_BYTE&&(me=t.RG8UI),se===t.UNSIGNED_SHORT&&(me=t.RG16UI),se===t.UNSIGNED_INT&&(me=t.RG32UI),se===t.BYTE&&(me=t.RG8I),se===t.SHORT&&(me=t.RG16I),se===t.INT&&(me=t.RG32I)),T===t.RGB_INTEGER&&(se===t.UNSIGNED_BYTE&&(me=t.RGB8UI),se===t.UNSIGNED_SHORT&&(me=t.RGB16UI),se===t.UNSIGNED_INT&&(me=t.RGB32UI),se===t.BYTE&&(me=t.RGB8I),se===t.SHORT&&(me=t.RGB16I),se===t.INT&&(me=t.RGB32I)),T===t.RGBA_INTEGER&&(se===t.UNSIGNED_BYTE&&(me=t.RGBA8UI),se===t.UNSIGNED_SHORT&&(me=t.RGBA16UI),se===t.UNSIGNED_INT&&(me=t.RGBA32UI),se===t.BYTE&&(me=t.RGBA8I),se===t.SHORT&&(me=t.RGBA16I),se===t.INT&&(me=t.RGBA32I)),T===t.RGB&&se===t.UNSIGNED_INT_5_9_9_9_REV&&(me=t.RGB9_E5),T===t.RGBA){const Fe=Se?Uc:ct.getTransfer(ve);se===t.FLOAT&&(me=t.RGBA32F),se===t.HALF_FLOAT&&(me=t.RGBA16F),se===t.UNSIGNED_BYTE&&(me=Fe===xt?t.SRGB8_ALPHA8:t.RGBA8),se===t.UNSIGNED_SHORT_4_4_4_4&&(me=t.RGBA4),se===t.UNSIGNED_SHORT_5_5_5_1&&(me=t.RGB5_A1)}return(me===t.R16F||me===t.R32F||me===t.RG16F||me===t.RG32F||me===t.RGBA16F||me===t.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function x(N,T){let se;return N?T===null||T===cs||T===us?se=t.DEPTH24_STENCIL8:T===$n?se=t.DEPTH32F_STENCIL8:T===Pa&&(se=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===cs||T===us?se=t.DEPTH_COMPONENT24:T===$n?se=t.DEPTH_COMPONENT32F:T===Pa&&(se=t.DEPTH_COMPONENT16),se}function S(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jt&&N.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function P(N){const T=N.target;T.removeEventListener("dispose",P),E(T),T.isVideoTexture&&u.delete(T)}function A(N){const T=N.target;T.removeEventListener("dispose",A),V(T)}function E(N){const T=i.get(N);if(T.__webglInit===void 0)return;const se=N.source,ve=h.get(se);if(ve){const Se=ve[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&b(N),Object.keys(ve).length===0&&h.delete(se)}i.remove(N)}function b(N){const T=i.get(N);t.deleteTexture(T.__webglTexture);const se=N.source,ve=h.get(se);delete ve[T.__cacheKey],o.memory.textures--}function V(N){const T=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Se=0;Se<T.__webglFramebuffer[ve].length;Se++)t.deleteFramebuffer(T.__webglFramebuffer[ve][Se]);else t.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)t.deleteFramebuffer(T.__webglFramebuffer[ve]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const se=N.textures;for(let ve=0,Se=se.length;ve<Se;ve++){const me=i.get(se[ve]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(se[ve])}i.remove(N)}let _=0;function w(){_=0}function C(){const N=_;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),_+=1,N}function z(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function O(N,T){const se=i.get(N);if(N.isVideoTexture&&Ae(N),N.isRenderTargetTexture===!1&&N.version>0&&se.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(se,N,T);return}}n.bindTexture(t.TEXTURE_2D,se.__webglTexture,t.TEXTURE0+T)}function H(N,T){const se=i.get(N);if(N.version>0&&se.__version!==N.version){Re(se,N,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,se.__webglTexture,t.TEXTURE0+T)}function k(N,T){const se=i.get(N);if(N.version>0&&se.__version!==N.version){Re(se,N,T);return}n.bindTexture(t.TEXTURE_3D,se.__webglTexture,t.TEXTURE0+T)}function ne(N,T){const se=i.get(N);if(N.version>0&&se.__version!==N.version){W(se,N,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture,t.TEXTURE0+T)}const U={[bn]:t.REPEAT,[Ki]:t.CLAMP_TO_EDGE,[Oh]:t.MIRRORED_REPEAT},K={[Jt]:t.NEAREST,[yM]:t.NEAREST_MIPMAP_NEAREST,[ul]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Gu]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},Q={[wM]:t.NEVER,[RM]:t.ALWAYS,[EM]:t.LESS,[my]:t.LEQUAL,[TM]:t.EQUAL,[CM]:t.GEQUAL,[AM]:t.GREATER,[bM]:t.NOTEQUAL};function te(N,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===nn||T.magFilter===Gu||T.magFilter===ul||T.magFilter===wr||T.minFilter===nn||T.minFilter===Gu||T.minFilter===ul||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,U[T.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,U[T.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,U[T.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,K[T.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Jt||T.minFilter!==ul&&T.minFilter!==wr||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function _e(N,T){let se=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P));const ve=T.source;let Se=h.get(ve);Se===void 0&&(Se={},h.set(ve,Se));const me=z(T);if(me!==N.__cacheKey){Se[me]===void 0&&(Se[me]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,se=!0),Se[me].usedTimes++;const Fe=Se[N.__cacheKey];Fe!==void 0&&(Se[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(T)),N.__cacheKey=me,N.__webglTexture=Se[me].texture}return se}function Re(N,T,se){let ve=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=t.TEXTURE_3D);const Se=_e(N,T),me=T.source;n.bindTexture(ve,N.__webglTexture,t.TEXTURE0+se);const Fe=i.get(me);if(me.version!==Fe.__version||Se===!0){n.activeTexture(t.TEXTURE0+se);const F=ct.getPrimaries(ct.workingColorSpace),G=T.colorSpace===_r?null:ct.getPrimaries(T.colorSpace),ce=T.colorSpace===_r||F===G?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let D=M(T.image,!1,r.maxTextureSize);D=Be(T,D);const j=s.convert(T.format,T.colorSpace),Y=s.convert(T.type);let X=g(T.internalFormat,j,Y,T.colorSpace,T.isVideoTexture);te(ve,T);let re;const xe=T.mipmaps,ee=T.isVideoTexture!==!0,oe=Fe.__version===void 0||Se===!0,I=me.dataReady,ae=S(T,D);if(T.isDepthTexture)X=x(T.format===ds,T.type),oe&&(ee?n.texStorage2D(t.TEXTURE_2D,1,X,D.width,D.height):n.texImage2D(t.TEXTURE_2D,0,X,D.width,D.height,0,j,Y,null));else if(T.isDataTexture)if(xe.length>0){ee&&oe&&n.texStorage2D(t.TEXTURE_2D,ae,X,xe[0].width,xe[0].height);for(let q=0,Z=xe.length;q<Z;q++)re=xe[q],ee?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,re.width,re.height,j,Y,re.data):n.texImage2D(t.TEXTURE_2D,q,X,re.width,re.height,0,j,Y,re.data);T.generateMipmaps=!1}else ee?(oe&&n.texStorage2D(t.TEXTURE_2D,ae,X,D.width,D.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,D.width,D.height,j,Y,D.data)):n.texImage2D(t.TEXTURE_2D,0,X,D.width,D.height,0,j,Y,D.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,X,xe[0].width,xe[0].height,D.depth);for(let q=0,Z=xe.length;q<Z;q++)if(re=xe[q],T.format!==ei)if(j!==null)if(ee){if(I)if(T.layerUpdates.size>0){const ge=rg(re.width,re.height,T.format,T.type);for(const Me of T.layerUpdates){const We=re.data.subarray(Me*ge/re.data.BYTES_PER_ELEMENT,(Me+1)*ge/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Me,re.width,re.height,1,j,We,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,re.width,re.height,D.depth,j,re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,X,re.width,re.height,D.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,re.width,re.height,D.depth,j,Y,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,X,re.width,re.height,D.depth,0,j,Y,re.data)}else{ee&&oe&&n.texStorage2D(t.TEXTURE_2D,ae,X,xe[0].width,xe[0].height);for(let q=0,Z=xe.length;q<Z;q++)re=xe[q],T.format!==ei?j!==null?ee?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,re.width,re.height,j,re.data):n.compressedTexImage2D(t.TEXTURE_2D,q,X,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,re.width,re.height,j,Y,re.data):n.texImage2D(t.TEXTURE_2D,q,X,re.width,re.height,0,j,Y,re.data)}else if(T.isDataArrayTexture)if(ee){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,X,D.width,D.height,D.depth),I)if(T.layerUpdates.size>0){const q=rg(D.width,D.height,T.format,T.type);for(const Z of T.layerUpdates){const ge=D.data.subarray(Z*q/D.data.BYTES_PER_ELEMENT,(Z+1)*q/D.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,D.width,D.height,1,j,Y,ge)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,j,Y,D.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,X,D.width,D.height,D.depth,0,j,Y,D.data);else if(T.isData3DTexture)ee?(oe&&n.texStorage3D(t.TEXTURE_3D,ae,X,D.width,D.height,D.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,j,Y,D.data)):n.texImage3D(t.TEXTURE_3D,0,X,D.width,D.height,D.depth,0,j,Y,D.data);else if(T.isFramebufferTexture){if(oe)if(ee)n.texStorage2D(t.TEXTURE_2D,ae,X,D.width,D.height);else{let q=D.width,Z=D.height;for(let ge=0;ge<ae;ge++)n.texImage2D(t.TEXTURE_2D,ge,X,q,Z,0,j,Y,null),q>>=1,Z>>=1}}else if(xe.length>0){if(ee&&oe){const q=Ie(xe[0]);n.texStorage2D(t.TEXTURE_2D,ae,X,q.width,q.height)}for(let q=0,Z=xe.length;q<Z;q++)re=xe[q],ee?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,j,Y,re):n.texImage2D(t.TEXTURE_2D,q,X,j,Y,re);T.generateMipmaps=!1}else if(ee){if(oe){const q=Ie(D);n.texStorage2D(t.TEXTURE_2D,ae,X,q.width,q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,j,Y,D)}else n.texImage2D(t.TEXTURE_2D,0,X,j,Y,D);m(T)&&f(ve),Fe.__version=me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function W(N,T,se){if(T.image.length!==6)return;const ve=_e(N,T),Se=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+se);const me=i.get(Se);if(Se.version!==me.__version||ve===!0){n.activeTexture(t.TEXTURE0+se);const Fe=ct.getPrimaries(ct.workingColorSpace),F=T.colorSpace===_r?null:ct.getPrimaries(T.colorSpace),G=T.colorSpace===_r||Fe===F?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const ce=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,j=[];for(let Z=0;Z<6;Z++)!ce&&!D?j[Z]=M(T.image[Z],!0,r.maxCubemapSize):j[Z]=D?T.image[Z].image:T.image[Z],j[Z]=Be(T,j[Z]);const Y=j[0],X=s.convert(T.format,T.colorSpace),re=s.convert(T.type),xe=g(T.internalFormat,X,re,T.colorSpace),ee=T.isVideoTexture!==!0,oe=me.__version===void 0||ve===!0,I=Se.dataReady;let ae=S(T,Y);te(t.TEXTURE_CUBE_MAP,T);let q;if(ce){ee&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,xe,Y.width,Y.height);for(let Z=0;Z<6;Z++){q=j[Z].mipmaps;for(let ge=0;ge<q.length;ge++){const Me=q[ge];T.format!==ei?X!==null?ee?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Me.width,Me.height,X,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Me.width,Me.height,X,re,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,xe,Me.width,Me.height,0,X,re,Me.data)}}}else{if(q=T.mipmaps,ee&&oe){q.length>0&&ae++;const Z=Ie(j[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(D){ee?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,j[Z].width,j[Z].height,X,re,j[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xe,j[Z].width,j[Z].height,0,X,re,j[Z].data);for(let ge=0;ge<q.length;ge++){const We=q[ge].image[Z].image;ee?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,We.width,We.height,X,re,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,xe,We.width,We.height,0,X,re,We.data)}}else{ee?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,X,re,j[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xe,X,re,j[Z]);for(let ge=0;ge<q.length;ge++){const Me=q[ge];ee?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,X,re,Me.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,xe,X,re,Me.image[Z])}}}m(T)&&f(t.TEXTURE_CUBE_MAP),me.__version=Se.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function J(N,T,se,ve,Se,me){const Fe=s.convert(se.format,se.colorSpace),F=s.convert(se.type),G=g(se.internalFormat,Fe,F,se.colorSpace);if(!i.get(T).__hasExternalTextures){const D=Math.max(1,T.width>>me),j=Math.max(1,T.height>>me);Se===t.TEXTURE_3D||Se===t.TEXTURE_2D_ARRAY?n.texImage3D(Se,me,G,D,j,T.depth,0,Fe,F,null):n.texImage2D(Se,me,G,D,j,0,Fe,F,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),pe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ve,Se,i.get(se).__webglTexture,0,be(T)):(Se===t.TEXTURE_2D||Se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ve,Se,i.get(se).__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(N,T,se){if(t.bindRenderbuffer(t.RENDERBUFFER,N),T.depthBuffer){const ve=T.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,me=x(T.stencilBuffer,Se),Fe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=be(T);pe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,me,T.width,T.height):se?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,me,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,me,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Fe,t.RENDERBUFFER,N)}else{const ve=T.textures;for(let Se=0;Se<ve.length;Se++){const me=ve[Se],Fe=s.convert(me.format,me.colorSpace),F=s.convert(me.type),G=g(me.internalFormat,Fe,F,me.colorSpace),ce=be(T);se&&pe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,G,T.width,T.height):pe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,G,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,G,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ve=i.get(T.depthTexture).__webglTexture,Se=be(T);if(T.depthTexture.format===co)pe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ve,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ve,0);else if(T.depthTexture.format===ds)pe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ve,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Te(N){const T=i.get(N),se=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=ve}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,N)}else if(se){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=t.createRenderbuffer(),le(T.__webglDepthbuffer[ve],N,!1);else{const Se=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ve];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,me)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),le(T.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,Se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(N,T,se){const ve=i.get(N);T!==void 0&&J(ve.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),se!==void 0&&Te(N)}function Ue(N){const T=N.texture,se=i.get(N),ve=i.get(T);N.addEventListener("dispose",A);const Se=N.textures,me=N.isWebGLCubeRenderTarget===!0,Fe=Se.length>1;if(Fe||(ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture()),ve.__version=T.version,o.memory.textures++),me){se.__webglFramebuffer=[];for(let F=0;F<6;F++)if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer[F]=[];for(let G=0;G<T.mipmaps.length;G++)se.__webglFramebuffer[F][G]=t.createFramebuffer()}else se.__webglFramebuffer[F]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer=[];for(let F=0;F<T.mipmaps.length;F++)se.__webglFramebuffer[F]=t.createFramebuffer()}else se.__webglFramebuffer=t.createFramebuffer();if(Fe)for(let F=0,G=Se.length;F<G;F++){const ce=i.get(Se[F]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&pe(N)===!1){se.__webglMultisampledFramebuffer=t.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let F=0;F<Se.length;F++){const G=Se[F];se.__webglColorRenderbuffer[F]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,se.__webglColorRenderbuffer[F]);const ce=s.convert(G.format,G.colorSpace),D=s.convert(G.type),j=g(G.internalFormat,ce,D,G.colorSpace,N.isXRRenderTarget===!0),Y=be(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,j,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+F,t.RENDERBUFFER,se.__webglColorRenderbuffer[F])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(se.__webglDepthRenderbuffer=t.createRenderbuffer(),le(se.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,ve.__webglTexture),te(t.TEXTURE_CUBE_MAP,T);for(let F=0;F<6;F++)if(T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)J(se.__webglFramebuffer[F][G],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+F,G);else J(se.__webglFramebuffer[F],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let F=0,G=Se.length;F<G;F++){const ce=Se[F],D=i.get(ce);n.bindTexture(t.TEXTURE_2D,D.__webglTexture),te(t.TEXTURE_2D,ce),J(se.__webglFramebuffer,N,ce,t.COLOR_ATTACHMENT0+F,t.TEXTURE_2D,0),m(ce)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let F=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(F=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(F,ve.__webglTexture),te(F,T),T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)J(se.__webglFramebuffer[G],N,T,t.COLOR_ATTACHMENT0,F,G);else J(se.__webglFramebuffer,N,T,t.COLOR_ATTACHMENT0,F,0);m(T)&&f(F),n.unbindTexture()}N.depthBuffer&&Te(N)}function He(N){const T=N.textures;for(let se=0,ve=T.length;se<ve;se++){const Se=T[se];if(m(Se)){const me=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Fe=i.get(Se).__webglTexture;n.bindTexture(me,Fe),f(me),n.unbindTexture()}}}const fe=[],L=[];function we(N){if(N.samples>0){if(pe(N)===!1){const T=N.textures,se=N.width,ve=N.height;let Se=t.COLOR_BUFFER_BIT;const me=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(N),F=T.length>1;if(F)for(let G=0;G<T.length;G++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let G=0;G<T.length;G++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=t.STENCIL_BUFFER_BIT)),F){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[G]);const ce=i.get(T[G]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,se,ve,0,0,se,ve,Se,t.NEAREST),l===!0&&(fe.length=0,L.length=0,fe.push(t.COLOR_ATTACHMENT0+G),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(me),L.push(me),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),F)for(let G=0;G<T.length;G++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[G]);const ce=i.get(T[G]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function be(N){return Math.min(r.maxSamples,N.samples)}function pe(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(N){const T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function Be(N,T){const se=N.colorSpace,ve=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||se!==ir&&se!==_r&&(ct.getTransfer(se)===xt?(ve!==ei||Se!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),T}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=w,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=ne,this.rebindTextures=De,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=J,this.useMultisampledRTT=pe}function zA(t,e){function n(i,r=_r){let s;const o=ct.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===xp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ay)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sy)return t.BYTE;if(i===oy)return t.SHORT;if(i===Pa)return t.UNSIGNED_SHORT;if(i===vp)return t.INT;if(i===cs)return t.UNSIGNED_INT;if(i===$n)return t.FLOAT;if(i===Rn)return t.HALF_FLOAT;if(i===ly)return t.ALPHA;if(i===cy)return t.RGB;if(i===ei)return t.RGBA;if(i===uy)return t.LUMINANCE;if(i===dy)return t.LUMINANCE_ALPHA;if(i===co)return t.DEPTH_COMPONENT;if(i===ds)return t.DEPTH_STENCIL;if(i===hy)return t.RED;if(i===_p)return t.RED_INTEGER;if(i===fy)return t.RG;if(i===Sp)return t.RG_INTEGER;if(i===Mp)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zh||i===Fh||i===kh||i===Bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hh||i===Vh||i===Gh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hh||i===Vh)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wh||i===jh||i===Xh||i===Yh||i===qh||i===Kh||i===Zh||i===Jh||i===Qh||i===$h||i===ef||i===tf||i===nf||i===rf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$h)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ef)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===sf||i===of)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sc)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===py||i===af||i===lf||i===cf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class FA extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vn extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kA={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
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

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vt({vertexShader:BA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,y=null;const M=new VA,m=n.getContextAttributes();let f=null,g=null;const x=[],S=[],P=new Ee;let A=null;const E=new Hn;E.layers.enable(1),E.viewport=new gt;const b=new Hn;b.layers.enable(2),b.viewport=new gt;const V=[E,b],_=new FA;_.layers.enable(1),_.layers.enable(2);let w=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=x[W];return J===void 0&&(J=new xd,x[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=x[W];return J===void 0&&(J=new xd,x[W]=J),J.getGripSpace()},this.getHand=function(W){let J=x[W];return J===void 0&&(J=new xd,x[W]=J),J.getHandSpace()};function z(W){const J=S.indexOf(W.inputSource);if(J===-1)return;const le=x[J];le!==void 0&&(le.update(W.inputSource,W.frame,c||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",H);for(let W=0;W<x.length;W++){const J=S[W];J!==null&&(S[W]=null,x[W].disconnect(J))}w=null,C=null,M.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",O),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new si(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,le=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?ds:co,le=m.stencil?us:cs);const Te={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new si(h.textureWidth,h.textureHeight,{format:ei,type:Ii,depthTexture:new Lp(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(W){for(let J=0;J<W.removed.length;J++){const le=W.removed[J],he=S.indexOf(le);he>=0&&(S[he]=null,x[he].disconnect(le))}for(let J=0;J<W.added.length;J++){const le=W.added[J];let he=S.indexOf(le);if(he===-1){for(let De=0;De<x.length;De++)if(De>=S.length){S.push(le),he=De;break}else if(S[De]===null){S[De]=le,he=De;break}if(he===-1)break}const Te=x[he];Te&&Te.connect(le)}}const k=new B,ne=new B;function U(W,J,le){k.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(le.matrixWorld);const he=k.distanceTo(ne),Te=J.projectionMatrix.elements,De=le.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),He=Te[14]/(Te[10]+1),fe=(Te[9]+1)/Te[5],L=(Te[9]-1)/Te[5],we=(Te[8]-1)/Te[0],be=(De[8]+1)/De[0],pe=Ue*we,Ae=Ue*be,Be=he/(-we+be),Ie=Be*-we;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(Be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const N=Ue+Be,T=He+Be,se=pe-Ie,ve=Ae+(he-Ie),Se=fe*He/T*N,me=L*He/T*N;W.projectionMatrix.makePerspective(se,ve,Se,me,N,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function K(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,le=W.far;M.texture!==null&&(M.depthNear>0&&(J=M.depthNear),M.depthFar>0&&(le=M.depthFar)),_.near=b.near=E.near=J,_.far=b.far=E.far=le,(w!==_.near||C!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,C=_.far);const he=W.parent,Te=_.cameras;K(_,he);for(let De=0;De<Te.length;De++)K(Te[De],he);Te.length===2?U(_,E,b):_.projectionMatrix.copy(E.projectionMatrix),Q(W,_,he)};function Q(W,J,le){le===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=uf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let te=null;function _e(W,J){if(u=J.getViewerPose(c||o),y=J,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let he=!1;le.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let De=0;De<le.length;De++){const Ue=le[De];let He=null;if(p!==null)He=p.getViewport(Ue);else{const L=d.getViewSubImage(h,Ue);He=L.viewport,De===0&&(e.setRenderTargetTextures(g,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let fe=V[De];fe===void 0&&(fe=new Hn,fe.layers.enable(De),fe.viewport=new gt,V[De]=fe),fe.matrix.fromArray(Ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(He.x,He.y,He.width,He.height),De===0&&(_.matrix.copy(fe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(fe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const De=d.getDepthInformation(le[0]);De&&De.isValid&&De.texture&&M.init(e,De,r.renderState)}}for(let le=0;le<x.length;le++){const he=S[le],Te=x[le];he!==null&&Te!==void 0&&Te.update(he,J,c||o)}te&&te(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),y=null}const Re=new Ty;Re.setAnimationLoop(_e),this.setAnimationLoop=function(W){te=W},this.dispose=function(){}}}const Yr=new Si,WA=new at;function jA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,My(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,Yr.copy(S),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.envMapRotation.value.setFromMatrix4(WA.makeRotationFromEuler(Yr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(y(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(g,P);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const x=d();g.__bindingPointIndex=x;const S=t.createBuffer(),P=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let V=0,_=b.length;V<_;V++){const w=b[V];if(p(w,A,V,P)===!0){const C=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let H=0;H<z.length;H++){const k=z[H],ne=M(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,C+O,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,P){const A=g.value,E=x+"_"+S;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const b=P[E];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return P[E]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function y(g){const x=g.uniforms;let S=0;const P=16;for(let E=0,b=x.length;E<b;E++){const V=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,w=V.length;_<w;_++){const C=V[_],z=Array.isArray(C.value)?C.value:[C.value];for(let O=0,H=z.length;O<H;O++){const k=z[O],ne=M(k),U=S%P,K=U%ne.boundary,Q=U+K;S+=K,Q!==0&&P-Q<ne.storage&&(S+=P-Q),C.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=ne.storage}}}const A=S%P;return A>0&&(S+=P-A),g.__size=S,g.__cache={},this}function M(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class YA{constructor(e={}){const{canvas:n=DM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),y=new Int32Array(4);let M=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Dr,this.toneMappingExposure=1;const x=this;let S=!1,P=0,A=0,E=null,b=-1,V=null;const _=new gt,w=new gt;let C=null;const z=new Je(0);let O=0,H=n.width,k=n.height,ne=1,U=null,K=null;const Q=new gt(0,0,H,k),te=new gt(0,0,H,k);let _e=!1;const Re=new Cp;let W=!1,J=!1;const le=new at,he=new at,Te=new B,De=new gt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function fe(){return E===null?ne:1}let L=i;function we(R,$){return n.getContext(R,$)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mp}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",Me,!1),L===null){const $="webgl2";if(L=we($,R),L===null)throw we($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let be,pe,Ae,Be,Ie,N,T,se,ve,Se,me,Fe,F,G,ce,D,j,Y,X,re,xe,ee,oe,I;function ae(){be=new Q2(L),be.init(),ee=new zA(L,be),pe=new X2(L,be,e,ee),Ae=new IA(L),pe.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Be=new tT(L),Ie=new yA,N=new OA(L,be,Ae,Ie,pe,ee,Be),T=new q2(x),se=new J2(x),ve=new lw(L),oe=new W2(L,ve),Se=new $2(L,ve,Be,oe),me=new iT(L,Se,ve,Be),X=new nT(L,pe,N),D=new Y2(Ie),Fe=new xA(x,T,se,be,pe,oe,D),F=new jA(x,Ie),G=new SA,ce=new bA(be),Y=new G2(x,T,se,Ae,me,h,l),j=new DA(x,me,pe),I=new XA(L,Be,pe,Ae),re=new j2(L,be,Be),xe=new eT(L,be,Be),Be.programs=Fe.programs,x.capabilities=pe,x.extensions=be,x.properties=Ie,x.renderLists=G,x.shadowMap=j,x.state=Ae,x.info=Be}ae();const q=new GA(x,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(H,k,!1))},this.getSize=function(R){return R.set(H,k)},this.setSize=function(R,$,ue=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,k=$,n.width=Math.floor(R*ne),n.height=Math.floor($*ne),ue===!0&&(n.style.width=R+"px",n.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(H*ne,k*ne).floor()},this.setDrawingBufferSize=function(R,$,ue){H=R,k=$,ne=ue,n.width=Math.floor(R*ue),n.height=Math.floor($*ue),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,$,ue,de){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,$,ue,de),Ae.viewport(_.copy(Q).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,$,ue,de){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,$,ue,de),Ae.scissor(w.copy(te).multiplyScalar(ne).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Ae.setScissorTest(_e=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(R=!0,$=!0,ue=!0){let de=0;if(R){let ie=!1;if(E!==null){const Le=E.texture.format;ie=Le===Mp||Le===Sp||Le===_p}if(ie){const Le=E.texture.type,ze=Le===Ii||Le===cs||Le===Pa||Le===us||Le===xp||Le===yp,Ge=Y.getClearColor(),je=Y.getClearAlpha(),Ze=Ge.r,Qe=Ge.g,Ye=Ge.b;ze?(p[0]=Ze,p[1]=Qe,p[2]=Ye,p[3]=je,L.clearBufferuiv(L.COLOR,0,p)):(y[0]=Ze,y[1]=Qe,y[2]=Ye,y[3]=je,L.clearBufferiv(L.COLOR,0,y))}else de|=L.COLOR_BUFFER_BIT}$&&(de|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ue&&(de|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),G.dispose(),ce.dispose(),Ie.dispose(),T.dispose(),se.dispose(),me.dispose(),oe.dispose(),I.dispose(),Fe.dispose(),q.dispose(),q.removeEventListener("sessionstart",ut),q.removeEventListener("sessionend",Lt),St.stop()};function Z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Be.autoReset,$=j.enabled,ue=j.autoUpdate,de=j.needsUpdate,ie=j.type;ae(),Be.autoReset=R,j.enabled=$,j.autoUpdate=ue,j.needsUpdate=de,j.type=ie}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function We(R){const $=R.target;$.removeEventListener("dispose",We),Ke($)}function Ke(R){vt(R),Ie.remove(R)}function vt(R){const $=Ie.get(R).programs;$!==void 0&&($.forEach(function(ue){Fe.releaseProgram(ue)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ue,de,ie,Le){$===null&&($=Ue);const ze=ie.isMesh&&ie.matrixWorld.determinant()<0,Ge=Gy(R,$,ue,de,ie);Ae.setMaterial(de,ze);let je=ue.index,Ze=1;if(de.wireframe===!0){if(je=Se.getWireframeAttribute(ue),je===void 0)return;Ze=2}const Qe=ue.drawRange,Ye=ue.attributes.position;let ft=Qe.start*Ze,Mt=(Qe.start+Qe.count)*Ze;Le!==null&&(ft=Math.max(ft,Le.start*Ze),Mt=Math.min(Mt,(Le.start+Le.count)*Ze)),je!==null?(ft=Math.max(ft,0),Mt=Math.min(Mt,je.count)):Ye!=null&&(ft=Math.max(ft,0),Mt=Math.min(Mt,Ye.count));const Dt=Mt-ft;if(Dt<0||Dt===1/0)return;oe.setup(ie,de,Ge,ue,je);let In,dt=re;if(je!==null&&(In=ve.get(je),dt=xe,dt.setIndex(In)),ie.isMesh)de.wireframe===!0?(Ae.setLineWidth(de.wireframeLinewidth*fe()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(ie.isLine){let qe=de.linewidth;qe===void 0&&(qe=1),Ae.setLineWidth(qe*fe()),ie.isLineSegments?dt.setMode(L.LINES):ie.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else ie.isPoints?dt.setMode(L.POINTS):ie.isSprite&&dt.setMode(L.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)dt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))dt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const qe=ie._multiDrawStarts,$t=ie._multiDrawCounts,ht=ie._multiDrawCount,oi=je?ve.get(je).bytesPerElement:1,ys=Ie.get(de).currentProgram.getUniforms();for(let Un=0;Un<ht;Un++)ys.setValue(L,"_gl_DrawID",Un),dt.render(qe[Un]/oi,$t[Un])}else if(ie.isInstancedMesh)dt.renderInstances(ft,Dt,ie.count);else if(ue.isInstancedBufferGeometry){const qe=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,$t=Math.min(ue.instanceCount,qe);dt.renderInstances(ft,Dt,$t)}else dt.render(ft,Dt)};function Ve(R,$,ue){R.transparent===!0&&R.side===xn&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,ja(R,$,ue),R.side=Ur,R.needsUpdate=!0,ja(R,$,ue),R.side=xn):ja(R,$,ue)}this.compile=function(R,$,ue=null){ue===null&&(ue=R),m=ce.get(ue),m.init($),g.push(m),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),R!==ue&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights();const de=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Le=ie.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const Ge=Le[ze];Ve(Ge,ue,ie),de.add(Ge)}else Ve(Le,ue,ie),de.add(Le)}),g.pop(),m=null,de},this.compileAsync=function(R,$,ue=null){const de=this.compile(R,$,ue);return new Promise(ie=>{function Le(){if(de.forEach(function(ze){Ie.get(ze).currentProgram.isReady()&&de.delete(ze)}),de.size===0){ie(R);return}setTimeout(Le,10)}be.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let et=null;function ot(R){et&&et(R)}function ut(){St.stop()}function Lt(){St.start()}const St=new Ty;St.setAnimationLoop(ot),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(R){et=R,q.setAnimationLoop(R),R===null?St.stop():St.start()},q.addEventListener("sessionstart",ut),q.addEventListener("sessionend",Lt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera($),$=q.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,$,E),m=ce.get(R,g.length),m.init($),g.push(m),he.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Re.setFromProjectionMatrix(he),J=this.localClippingEnabled,W=D.init(this.clippingPlanes,J),M=G.get(R,f.length),M.init(),f.push(M),q.enabled===!0&&q.isPresenting===!0){const Le=x.xr.getDepthSensingMesh();Le!==null&&Mi(Le,$,-1/0,x.sortObjects)}Mi(R,$,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(U,K),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&Y.addToRenderList(M,R),this.info.render.frame++,W===!0&&D.beginShadows();const ue=m.state.shadowsArray;j.render(ue,R,$),W===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=M.opaque,ie=M.transmissive;if(m.setupLights(),$.isArrayCamera){const Le=$.cameras;if(ie.length>0)for(let ze=0,Ge=Le.length;ze<Ge;ze++){const je=Le[ze];Ga(de,ie,R,je)}He&&Y.render(R);for(let ze=0,Ge=Le.length;ze<Ge;ze++){const je=Le[ze];kr(M,R,je,je.viewport)}}else ie.length>0&&Ga(de,ie,R,$),He&&Y.render(R),kr(M,R,$);E!==null&&(N.updateMultisampleRenderTarget(E),N.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,$),oe.resetDefaultState(),b=-1,V=null,g.pop(),g.length>0?(m=g[g.length-1],W===!0&&D.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function Mi(R,$,ue,de){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Re.intersectsSprite(R)){de&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const ze=me.update(R),Ge=R.material;Ge.visible&&M.push(R,ze,Ge,ue,De.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Re.intersectsObject(R))){const ze=me.update(R),Ge=R.material;if(de&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),De.copy(ze.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Ge)){const je=ze.groups;for(let Ze=0,Qe=je.length;Ze<Qe;Ze++){const Ye=je[Ze],ft=Ge[Ye.materialIndex];ft&&ft.visible&&M.push(R,ze,ft,ue,De.z,Ye)}}else Ge.visible&&M.push(R,ze,Ge,ue,De.z,null)}}const Le=R.children;for(let ze=0,Ge=Le.length;ze<Ge;ze++)Mi(Le[ze],$,ue,de)}function kr(R,$,ue,de){const ie=R.opaque,Le=R.transmissive,ze=R.transparent;m.setupLightsView(ue),W===!0&&D.setGlobalState(x.clippingPlanes,ue),de&&Ae.viewport(_.copy(de)),ie.length>0&&Wa(ie,$,ue),Le.length>0&&Wa(Le,$,ue),ze.length>0&&Wa(ze,$,ue),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ga(R,$,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[de.id]===void 0&&(m.state.transmissionRenderTarget[de.id]=new si(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Rn:Ii,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Le=m.state.transmissionRenderTarget[de.id],ze=de.viewport||_;Le.setSize(ze.z,ze.w);const Ge=x.getRenderTarget();x.setRenderTarget(Le),x.getClearColor(z),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),He&&Y.render(ue);const je=x.toneMapping;x.toneMapping=Dr;const Ze=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),m.setupLightsView(de),W===!0&&D.setGlobalState(x.clippingPlanes,de),Wa(R,ue,de),N.updateMultisampleRenderTarget(Le),N.updateRenderTargetMipmap(Le),be.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ye=0,ft=$.length;Ye<ft;Ye++){const Mt=$[Ye],Dt=Mt.object,In=Mt.geometry,dt=Mt.material,qe=Mt.group;if(dt.side===xn&&Dt.layers.test(de.layers)){const $t=dt.side;dt.side=_n,dt.needsUpdate=!0,jp(Dt,ue,de,In,dt,qe),dt.side=$t,dt.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(Le),N.updateRenderTargetMipmap(Le))}x.setRenderTarget(Ge),x.setClearColor(z,O),Ze!==void 0&&(de.viewport=Ze),x.toneMapping=je}function Wa(R,$,ue){const de=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,Le=R.length;ie<Le;ie++){const ze=R[ie],Ge=ze.object,je=ze.geometry,Ze=de===null?ze.material:de,Qe=ze.group;Ge.layers.test(ue.layers)&&jp(Ge,$,ue,je,Ze,Qe)}}function jp(R,$,ue,de,ie,Le){R.onBeforeRender(x,$,ue,de,ie,Le),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(x,$,ue,de,R,Le),ie.transparent===!0&&ie.side===xn&&ie.forceSinglePass===!1?(ie.side=_n,ie.needsUpdate=!0,x.renderBufferDirect(ue,$,de,ie,R,Le),ie.side=Ur,ie.needsUpdate=!0,x.renderBufferDirect(ue,$,de,ie,R,Le),ie.side=xn):x.renderBufferDirect(ue,$,de,ie,R,Le),R.onAfterRender(x,$,ue,de,ie,Le)}function ja(R,$,ue){$.isScene!==!0&&($=Ue);const de=Ie.get(R),ie=m.state.lights,Le=m.state.shadowsArray,ze=ie.state.version,Ge=Fe.getParameters(R,ie.state,Le,$,ue),je=Fe.getProgramCacheKey(Ge);let Ze=de.programs;de.environment=R.isMeshStandardMaterial?$.environment:null,de.fog=$.fog,de.envMap=(R.isMeshStandardMaterial?se:T).get(R.envMap||de.environment),de.envMapRotation=de.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",We),Ze=new Map,de.programs=Ze);let Qe=Ze.get(je);if(Qe!==void 0){if(de.currentProgram===Qe&&de.lightsStateVersion===ze)return Yp(R,Ge),Qe}else Ge.uniforms=Fe.getUniforms(R),R.onBeforeCompile(Ge,x),Qe=Fe.acquireProgram(Ge,je),Ze.set(je,Qe),de.uniforms=Ge.uniforms;const Ye=de.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=D.uniform),Yp(R,Ge),de.needsLights=jy(R),de.lightsStateVersion=ze,de.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.directionalShadowMap.value=ie.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotShadowMap.value=ie.state.spotShadowMap,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMap.value=ie.state.pointShadowMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),de.currentProgram=Qe,de.uniformsList=null,Qe}function Xp(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=lc.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Yp(R,$){const ue=Ie.get(R);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Gy(R,$,ue,de,ie){$.isScene!==!0&&($=Ue),N.resetTextureUnits();const Le=$.fog,ze=de.isMeshStandardMaterial?$.environment:null,Ge=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ir,je=(de.isMeshStandardMaterial?se:T).get(de.envMap||ze),Ze=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Qe=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Ye=!!ue.morphAttributes.position,ft=!!ue.morphAttributes.normal,Mt=!!ue.morphAttributes.color;let Dt=Dr;de.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const In=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,dt=In!==void 0?In.length:0,qe=Ie.get(de),$t=m.state.lights;if(W===!0&&(J===!0||R!==V)){const qn=R===V&&de.id===b;D.setState(de,R,qn)}let ht=!1;de.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$t.state.version||qe.outputColorSpace!==Ge||ie.isBatchedMesh&&qe.batching===!1||!ie.isBatchedMesh&&qe.batching===!0||ie.isBatchedMesh&&qe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&qe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&qe.instancingMorph===!1&&ie.morphTexture!==null||qe.envMap!==je||de.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==D.numPlanes||qe.numIntersection!==D.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==Qe||qe.morphTargets!==Ye||qe.morphNormals!==ft||qe.morphColors!==Mt||qe.toneMapping!==Dt||qe.morphTargetsCount!==dt)&&(ht=!0):(ht=!0,qe.__version=de.version);let oi=qe.currentProgram;ht===!0&&(oi=ja(de,$,ie));let ys=!1,Un=!1,uu=!1;const It=oi.getUniforms(),rr=qe.uniforms;if(Ae.useProgram(oi.program)&&(ys=!0,Un=!0,uu=!0),de.id!==b&&(b=de.id,Un=!0),ys||V!==R){pe.reverseDepthBuffer?(le.copy(R.projectionMatrix),IM(le),UM(le),It.setValue(L,"projectionMatrix",le)):It.setValue(L,"projectionMatrix",R.projectionMatrix),It.setValue(L,"viewMatrix",R.matrixWorldInverse);const qn=It.map.cameraPosition;qn!==void 0&&qn.setValue(L,Te.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&It.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Un=!0,uu=!0)}if(ie.isSkinnedMesh){It.setOptional(L,ie,"bindMatrix"),It.setOptional(L,ie,"bindMatrixInverse");const qn=ie.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),It.setValue(L,"boneTexture",qn.boneTexture,N))}ie.isBatchedMesh&&(It.setOptional(L,ie,"batchingTexture"),It.setValue(L,"batchingTexture",ie._matricesTexture,N),It.setOptional(L,ie,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",ie._indirectTexture,N),It.setOptional(L,ie,"batchingColorTexture"),ie._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",ie._colorsTexture,N));const du=ue.morphAttributes;if((du.position!==void 0||du.normal!==void 0||du.color!==void 0)&&X.update(ie,ue,oi),(Un||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,It.setValue(L,"receiveShadow",ie.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(rr.envMap.value=je,rr.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&$.environment!==null&&(rr.envMapIntensity.value=$.environmentIntensity),Un&&(It.setValue(L,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Wy(rr,uu),Le&&de.fog===!0&&F.refreshFogUniforms(rr,Le),F.refreshMaterialUniforms(rr,de,ne,k,m.state.transmissionRenderTarget[R.id]),lc.upload(L,Xp(qe),rr,N)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(lc.upload(L,Xp(qe),rr,N),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&It.setValue(L,"center",ie.center),It.setValue(L,"modelViewMatrix",ie.modelViewMatrix),It.setValue(L,"normalMatrix",ie.normalMatrix),It.setValue(L,"modelMatrix",ie.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const qn=de.uniformsGroups;for(let hu=0,Xy=qn.length;hu<Xy;hu++){const qp=qn[hu];I.update(qp,oi),I.bind(qp,oi)}}return oi}function Wy(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function jy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,$,ue){Ie.get(R.texture).__webglTexture=$,Ie.get(R.depthTexture).__webglTexture=ue;const de=Ie.get(R);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const ue=Ie.get(R);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ue=0){E=R,P=$,A=ue;let de=!0,ie=null,Le=!1,ze=!1;if(R){const je=Ie.get(R);if(je.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(L.FRAMEBUFFER,null),de=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(je.__hasExternalTextures)N.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(je.__boundDepthTexture!==Ye){if(Ye!==null&&Ie.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);const Qe=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?ie=Qe[$][ue]:ie=Qe[$],Le=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?ie=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[ue]:ie=Qe,_.copy(R.viewport),w.copy(R.scissor),C=R.scissorTest}else _.copy(Q).multiplyScalar(ne).floor(),w.copy(te).multiplyScalar(ne).floor(),C=_e;if(Ae.bindFramebuffer(L.FRAMEBUFFER,ie)&&de&&Ae.drawBuffers(R,ie),Ae.viewport(_),Ae.scissor(w),Ae.setScissorTest(C),Le){const je=Ie.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,ue)}else if(ze){const je=Ie.get(R.texture),Ze=$||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,ue||0,Ze)}b=-1},this.readRenderTargetPixels=function(R,$,ue,de,ie,Le,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){Ae.bindFramebuffer(L.FRAMEBUFFER,Ge);try{const je=R.texture,Ze=je.format,Qe=je.type;if(!pe.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-de&&ue>=0&&ue<=R.height-ie&&L.readPixels($,ue,de,ie,ee.convert(Ze),ee.convert(Qe),Le)}finally{const je=E!==null?Ie.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,$,ue,de,ie,Le,ze){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){const je=R.texture,Ze=je.format,Qe=je.type;if(!pe.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-de&&ue>=0&&ue<=R.height-ie){Ae.bindFramebuffer(L.FRAMEBUFFER,Ge);const Ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels($,ue,de,ie,ee.convert(Ze),ee.convert(Qe),0);const ft=E!==null?Ie.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,ft);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await NM(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.deleteBuffer(Ye),L.deleteSync(Mt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,ue=0){R.isTexture!==!0&&(ac("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const de=Math.pow(2,-ue),ie=Math.floor(R.image.width*de),Le=Math.floor(R.image.height*de),ze=$!==null?$.x:0,Ge=$!==null?$.y:0;N.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,ue,0,0,ze,Ge,ie,Le),Ae.unbindTexture()},this.copyTextureToTexture=function(R,$,ue=null,de=null,ie=0){R.isTexture!==!0&&(ac("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,R=arguments[1],$=arguments[2],ie=arguments[3]||0,ue=null);let Le,ze,Ge,je,Ze,Qe;ue!==null?(Le=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,Ge=ue.min.x,je=ue.min.y):(Le=R.image.width,ze=R.image.height,Ge=0,je=0),de!==null?(Ze=de.x,Qe=de.y):(Ze=0,Qe=0);const Ye=ee.convert($.format),ft=ee.convert($.type);N.setTexture2D($,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment);const Mt=L.getParameter(L.UNPACK_ROW_LENGTH),Dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),In=L.getParameter(L.UNPACK_SKIP_PIXELS),dt=L.getParameter(L.UNPACK_SKIP_ROWS),qe=L.getParameter(L.UNPACK_SKIP_IMAGES),$t=R.isCompressedTexture?R.mipmaps[ie]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,$t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Ze,Qe,Le,ze,Ye,ft,$t.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Ze,Qe,$t.width,$t.height,Ye,$t.data):L.texSubImage2D(L.TEXTURE_2D,ie,Ze,Qe,Le,ze,Ye,ft,$t),L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,In),L.pixelStorei(L.UNPACK_SKIP_ROWS,dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe),ie===0&&$.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ue=null,de=null,ie=0){R.isTexture!==!0&&(ac("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,R=arguments[2],$=arguments[3],ie=arguments[4]||0);let Le,ze,Ge,je,Ze,Qe,Ye,ft,Mt;const Dt=R.isCompressedTexture?R.mipmaps[ie]:R.image;ue!==null?(Le=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,Ge=ue.max.z-ue.min.z,je=ue.min.x,Ze=ue.min.y,Qe=ue.min.z):(Le=Dt.width,ze=Dt.height,Ge=Dt.depth,je=0,Ze=0,Qe=0),de!==null?(Ye=de.x,ft=de.y,Mt=de.z):(Ye=0,ft=0,Mt=0);const In=ee.convert($.format),dt=ee.convert($.type);let qe;if($.isData3DTexture)N.setTexture3D($,0),qe=L.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)N.setTexture2DArray($,0),qe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment);const $t=L.getParameter(L.UNPACK_ROW_LENGTH),ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),oi=L.getParameter(L.UNPACK_SKIP_PIXELS),ys=L.getParameter(L.UNPACK_SKIP_ROWS),Un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(qe,ie,Ye,ft,Mt,Le,ze,Ge,In,dt,Dt.data):$.isCompressedArrayTexture?L.compressedTexSubImage3D(qe,ie,Ye,ft,Mt,Le,ze,Ge,In,Dt.data):L.texSubImage3D(qe,ie,Ye,ft,Mt,Le,ze,Ge,In,dt,Dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,$t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,oi),L.pixelStorei(L.UNPACK_SKIP_ROWS,ys),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Un),ie===0&&$.generateMipmaps&&L.generateMipmap(qe),Ae.unbindTexture()},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Ae.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ep?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===ru?"display-p3":"srgb"}}class Py extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dp extends Wt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,u=Jt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qA extends Wt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ee:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new B,r=[],s=[],o=[],a=new B,l=new at;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Np extends Ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ee){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class KA extends Np{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ip(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Dl=new B,yd=new Ip,_d=new Ip,Sd=new Ip;class ZA extends Ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Dl.subVectors(r[0],r[1]).add(r[0]),c=Dl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);M<1e-4&&(M=1),y<1e-4&&(y=M),m<1e-4&&(m=M),yd.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,y,M,m),_d.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,y,M,m),Sd.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,y,M,m)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),_d.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Sd.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(yd.calc(l),_d.calc(l),Sd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function JA(t,e){const n=1-t;return n*n*e}function QA(t,e){return 2*(1-t)*t*e}function $A(t,e){return t*t*e}function ua(t,e,n,i){return JA(t,e)+QA(t,n)+$A(t,i)}function eb(t,e){const n=1-t;return n*n*n*e}function tb(t,e){const n=1-t;return 3*n*n*t*e}function nb(t,e){return 3*(1-t)*t*t*e}function ib(t,e){return t*t*t*e}function da(t,e,n,i,r){return eb(t,e)+tb(t,n)+nb(t,i)+ib(t,r)}class Ly extends Ui{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(da(e,r.x,s.x,o.x,a.x),da(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rb extends Ui{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(da(e,r.x,s.x,o.x,a.x),da(e,r.y,s.y,o.y,a.y),da(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dy extends Ui{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sb extends Ui{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ny extends Ui{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ua(e,r.x,s.x,o.x),ua(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ob extends Ui{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ua(e,r.x,s.x,o.x),ua(e,r.y,s.y,o.y),ua(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iy extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(sg(a,l.x,c.x,u.x,d.x),sg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var ff=Object.freeze({__proto__:null,ArcCurve:KA,CatmullRomCurve3:ZA,CubicBezierCurve:Ly,CubicBezierCurve3:rb,EllipseCurve:Np,LineCurve:Dy,LineCurve3:sb,QuadraticBezierCurve:Ny,QuadraticBezierCurve3:ob,SplineCurve:Iy});class ab extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ff[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new ff[r.type]().fromJSON(r))}return this}}class pf extends ab{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Dy(this.currentPoint.clone(),new Ee(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Ny(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Ly(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Iy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Np(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ou extends Nn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let y=0;const M=[],m=i/2;let f=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(p,2));function g(){const S=new B,P=new B;let A=0;const E=(n-e)/i;for(let b=0;b<=s;b++){const V=[],_=b/s,w=_*(n-e)+e;for(let C=0;C<=r;C++){const z=C/r,O=z*l+a,H=Math.sin(O),k=Math.cos(O);P.x=w*H,P.y=-_*i+m,P.z=w*k,d.push(P.x,P.y,P.z),S.set(H,E,k).normalize(),h.push(S.x,S.y,S.z),p.push(z,1-_),V.push(y++)}M.push(V)}for(let b=0;b<r;b++)for(let V=0;V<s;V++){const _=M[V][b],w=M[V+1][b],C=M[V+1][b+1],z=M[V][b+1];e>0&&(u.push(_,w,z),A+=3),n>0&&(u.push(w,C,z),A+=3)}c.addGroup(f,A,0),f+=A}function x(S){const P=y,A=new Ee,E=new B;let b=0;const V=S===!0?e:n,_=S===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,m*_,0),h.push(0,_,0),p.push(.5,.5),y++;const w=y;for(let C=0;C<=r;C++){const O=C/r*l+a,H=Math.cos(O),k=Math.sin(O);E.x=V*k,E.y=m*_,E.z=V*H,d.push(E.x,E.y,E.z),h.push(0,_,0),A.x=H*.5+.5,A.y=k*.5*_+.5,p.push(A.x,A.y),y++}for(let C=0;C<r;C++){const z=P+C,O=w+C;S===!0?u.push(O,O+1,z):u.push(O+1,O,z),b+=3}c.addGroup(f,b,S===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Up extends ou{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Up(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Op extends Nn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new B,S=new B,P=new B;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],S),p(n[A+2],P),l(x,S,P,g)}function l(g,x,S,P){const A=P+1,E=[];for(let b=0;b<=A;b++){E[b]=[];const V=g.clone().lerp(S,b/A),_=x.clone().lerp(S,b/A),w=A-b;for(let C=0;C<=w;C++)C===0&&b===A?E[b][C]=V:E[b][C]=V.clone().lerp(_,C/w)}for(let b=0;b<A;b++)for(let V=0;V<2*(A-b)-1;V++){const _=Math.floor(V/2);V%2===0?(h(E[b][_+1]),h(E[b+1][_]),h(E[b][_])):(h(E[b][_+1]),h(E[b+1][_+1]),h(E[b+1][_]))}}function c(g){const x=new B;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(g),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const g=new B;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const S=m(g)/2/Math.PI+.5,P=f(g)/Math.PI+.5;o.push(S,1-P)}y(),d()}function d(){for(let g=0;g<o.length;g+=6){const x=o[g+0],S=o[g+2],P=o[g+4],A=Math.max(x,S,P),E=Math.min(x,S,P);A>.9&&E<.1&&(x<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,x){const S=g*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function y(){const g=new B,x=new B,S=new B,P=new B,A=new Ee,E=new Ee,b=new Ee;for(let V=0,_=0;V<s.length;V+=9,_+=6){g.set(s[V+0],s[V+1],s[V+2]),x.set(s[V+3],s[V+4],s[V+5]),S.set(s[V+6],s[V+7],s[V+8]),A.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),b.set(o[_+4],o[_+5]),P.copy(g).add(x).add(S).divideScalar(3);const w=m(P);M(A,_+0,g,w),M(E,_+2,x,w),M(b,_+4,S,w)}}function M(g,x,S,P){P<0&&g.x===1&&(o[x]=g.x-1),S.x===0&&S.z===0&&(o[x]=P/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Op(e.vertices,e.indices,e.radius,e.details)}}class Uy extends pf{constructor(e){super(e),this.uuid=bo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new pf().fromJSON(r))}return this}}const lb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Oy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,p;if(i&&(s=fb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let y=n;y<r;y+=n)d=t[y],h=t[y+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Na(s,o,n,a,l,p,0),o}};function Oy(t,e,n,i,r){let s,o;if(r===Eb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=og(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=og(s,t[s],t[s+1],o);return o&&au(o,o.next)&&(Ua(o),o=o.next),o}function fs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(au(n,n.next)||Ct(n.prev,n,n.next)===0)){if(Ua(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Na(t,e,n,i,r,s,o){if(!t)return;!o&&s&&xb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?ub(t,i,r,s):cb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ua(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=db(fs(t),e,n),Na(t,e,n,i,r,s,2)):o===2&&hb(t,e,n,i,r,s):Na(fs(t),e,n,i,r,s,1);break}}}function cb(t){const e=t.prev,n=t,i=t.next;if(Ct(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=h&&y.y>=d&&y.y<=p&&$s(r,a,s,l,o,c,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ub(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,y=u<d?u<h?u:h:d<h?d:h,M=a>l?a>c?a:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=mf(p,y,e,n,i),g=mf(M,m,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=f&&S&&S.z<=g;){if(x.x>=p&&x.x<=M&&x.y>=y&&x.y<=m&&x!==r&&x!==o&&$s(a,u,l,d,c,h,x.x,x.y)&&Ct(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=M&&S.y>=y&&S.y<=m&&S!==r&&S!==o&&$s(a,u,l,d,c,h,S.x,S.y)&&Ct(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=M&&x.y>=y&&x.y<=m&&x!==r&&x!==o&&$s(a,u,l,d,c,h,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=g;){if(S.x>=p&&S.x<=M&&S.y>=y&&S.y<=m&&S!==r&&S!==o&&$s(a,u,l,d,c,h,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function db(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!au(r,s)&&zy(r,i,i.next,s)&&Ia(r,s)&&Ia(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ua(i),Ua(i.next),i=t=s),i=i.next}while(i!==t);return fs(i)}function hb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sb(o,a)){let l=Fy(o,a);o=fs(o,o.next),l=fs(l,l.next),Na(o,e,n,i,r,s,0),Na(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function fb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Oy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(_b(c));for(r.sort(pb),s=0;s<r.length;s++)n=mb(r[s],n);return n}function pb(t,e){return t.x-e.x}function mb(t,e){const n=gb(t,e);if(!n)return e;const i=Fy(n,t);return fs(i,i.next),fs(n,n.next)}function gb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&$s(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Ia(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&vb(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function vb(t,e){return Ct(t.prev,t,e.prev)<0&&Ct(e.next,t,t.next)<0}function xb(t,e,n,i){let r=t;do r.z===0&&(r.z=mf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,yb(r)}function yb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function mf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function _b(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function $s(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Sb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Mb(t,e)&&(Ia(t,e)&&Ia(e,t)&&wb(t,e)&&(Ct(t.prev,t,e.prev)||Ct(t,e.prev,e))||au(t,e)&&Ct(t.prev,t,t.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function au(t,e){return t.x===e.x&&t.y===e.y}function zy(t,e,n,i){const r=Il(Ct(t,e,n)),s=Il(Ct(t,e,i)),o=Il(Ct(n,i,t)),a=Il(Ct(n,i,e));return!!(r!==s&&o!==a||r===0&&Nl(t,n,e)||s===0&&Nl(t,i,e)||o===0&&Nl(n,t,i)||a===0&&Nl(n,e,i))}function Nl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Il(t){return t>0?1:t<0?-1:0}function Mb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&zy(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ia(t,e){return Ct(t.prev,t,t.next)<0?Ct(t,e,t.next)>=0&&Ct(t,t.prev,e)>=0:Ct(t,e,t.prev)<0||Ct(t,t.next,e)<0}function wb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Fy(t,e){const n=new gf(t.i,t.x,t.y),i=new gf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function og(t,e,n,i){const r=new gf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ua(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function gf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ha{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ha.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];ag(e),lg(i,e);let o=e.length;n.forEach(ag);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,lg(i,n[l]);const a=lb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ag(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function lg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class zp extends Nn{constructor(e=new Uy([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _t(r,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,y=n.bevelSize!==void 0?n.bevelSize:p-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:Tb;let x,S=!1,P,A,E,b;f&&(x=f.getSpacedPoints(u),S=!0,h=!1,P=f.computeFrenetFrames(u,!1),A=new B,E=new B,b=new B),h||(m=0,p=0,y=0,M=0);const V=a.extractPoints(c);let _=V.shape;const w=V.holes;if(!ha.isClockWise(_)){_=_.reverse();for(let fe=0,L=w.length;fe<L;fe++){const we=w[fe];ha.isClockWise(we)&&(w[fe]=we.reverse())}}const z=ha.triangulateShape(_,w),O=_;for(let fe=0,L=w.length;fe<L;fe++){const we=w[fe];_=_.concat(we)}function H(fe,L,we){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(L,we)}const k=_.length,ne=z.length;function U(fe,L,we){let be,pe,Ae;const Be=fe.x-L.x,Ie=fe.y-L.y,N=we.x-fe.x,T=we.y-fe.y,se=Be*Be+Ie*Ie,ve=Be*T-Ie*N;if(Math.abs(ve)>Number.EPSILON){const Se=Math.sqrt(se),me=Math.sqrt(N*N+T*T),Fe=L.x-Ie/Se,F=L.y+Be/Se,G=we.x-T/me,ce=we.y+N/me,D=((G-Fe)*T-(ce-F)*N)/(Be*T-Ie*N);be=Fe+Be*D-fe.x,pe=F+Ie*D-fe.y;const j=be*be+pe*pe;if(j<=2)return new Ee(be,pe);Ae=Math.sqrt(j/2)}else{let Se=!1;Be>Number.EPSILON?N>Number.EPSILON&&(Se=!0):Be<-Number.EPSILON?N<-Number.EPSILON&&(Se=!0):Math.sign(Ie)===Math.sign(T)&&(Se=!0),Se?(be=-Ie,pe=Be,Ae=Math.sqrt(se)):(be=Be,pe=Ie,Ae=Math.sqrt(se/2))}return new Ee(be/Ae,pe/Ae)}const K=[];for(let fe=0,L=O.length,we=L-1,be=fe+1;fe<L;fe++,we++,be++)we===L&&(we=0),be===L&&(be=0),K[fe]=U(O[fe],O[we],O[be]);const Q=[];let te,_e=K.concat();for(let fe=0,L=w.length;fe<L;fe++){const we=w[fe];te=[];for(let be=0,pe=we.length,Ae=pe-1,Be=be+1;be<pe;be++,Ae++,Be++)Ae===pe&&(Ae=0),Be===pe&&(Be=0),te[be]=U(we[be],we[Ae],we[Be]);Q.push(te),_e=_e.concat(te)}for(let fe=0;fe<m;fe++){const L=fe/m,we=p*Math.cos(L*Math.PI/2),be=y*Math.sin(L*Math.PI/2)+M;for(let pe=0,Ae=O.length;pe<Ae;pe++){const Be=H(O[pe],K[pe],be);he(Be.x,Be.y,-we)}for(let pe=0,Ae=w.length;pe<Ae;pe++){const Be=w[pe];te=Q[pe];for(let Ie=0,N=Be.length;Ie<N;Ie++){const T=H(Be[Ie],te[Ie],be);he(T.x,T.y,-we)}}}const Re=y+M;for(let fe=0;fe<k;fe++){const L=h?H(_[fe],_e[fe],Re):_[fe];S?(E.copy(P.normals[0]).multiplyScalar(L.x),A.copy(P.binormals[0]).multiplyScalar(L.y),b.copy(x[0]).add(E).add(A),he(b.x,b.y,b.z)):he(L.x,L.y,0)}for(let fe=1;fe<=u;fe++)for(let L=0;L<k;L++){const we=h?H(_[L],_e[L],Re):_[L];S?(E.copy(P.normals[fe]).multiplyScalar(we.x),A.copy(P.binormals[fe]).multiplyScalar(we.y),b.copy(x[fe]).add(E).add(A),he(b.x,b.y,b.z)):he(we.x,we.y,d/u*fe)}for(let fe=m-1;fe>=0;fe--){const L=fe/m,we=p*Math.cos(L*Math.PI/2),be=y*Math.sin(L*Math.PI/2)+M;for(let pe=0,Ae=O.length;pe<Ae;pe++){const Be=H(O[pe],K[pe],be);he(Be.x,Be.y,d+we)}for(let pe=0,Ae=w.length;pe<Ae;pe++){const Be=w[pe];te=Q[pe];for(let Ie=0,N=Be.length;Ie<N;Ie++){const T=H(Be[Ie],te[Ie],be);S?he(T.x,T.y+x[u-1].y,x[u-1].x+we):he(T.x,T.y,d+we)}}}W(),J();function W(){const fe=r.length/3;if(h){let L=0,we=k*L;for(let be=0;be<ne;be++){const pe=z[be];Te(pe[2]+we,pe[1]+we,pe[0]+we)}L=u+m*2,we=k*L;for(let be=0;be<ne;be++){const pe=z[be];Te(pe[0]+we,pe[1]+we,pe[2]+we)}}else{for(let L=0;L<ne;L++){const we=z[L];Te(we[2],we[1],we[0])}for(let L=0;L<ne;L++){const we=z[L];Te(we[0]+k*u,we[1]+k*u,we[2]+k*u)}}i.addGroup(fe,r.length/3-fe,0)}function J(){const fe=r.length/3;let L=0;le(O,L),L+=O.length;for(let we=0,be=w.length;we<be;we++){const pe=w[we];le(pe,L),L+=pe.length}i.addGroup(fe,r.length/3-fe,1)}function le(fe,L){let we=fe.length;for(;--we>=0;){const be=we;let pe=we-1;pe<0&&(pe=fe.length-1);for(let Ae=0,Be=u+m*2;Ae<Be;Ae++){const Ie=k*Ae,N=k*(Ae+1),T=L+be+Ie,se=L+pe+Ie,ve=L+pe+N,Se=L+be+N;De(T,se,ve,Se)}}}function he(fe,L,we){l.push(fe),l.push(L),l.push(we)}function Te(fe,L,we){Ue(fe),Ue(L),Ue(we);const be=r.length/3,pe=g.generateTopUV(i,r,be-3,be-2,be-1);He(pe[0]),He(pe[1]),He(pe[2])}function De(fe,L,we,be){Ue(fe),Ue(L),Ue(be),Ue(L),Ue(we),Ue(be);const pe=r.length/3,Ae=g.generateSideWallUV(i,r,pe-6,pe-3,pe-2,pe-1);He(Ae[0]),He(Ae[1]),He(Ae[3]),He(Ae[1]),He(Ae[2]),He(Ae[3])}function Ue(fe){r.push(l[fe*3+0]),r.push(l[fe*3+1]),r.push(l[fe*3+2])}function He(fe){s.push(fe.x),s.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Ab(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ff[r.type]().fromJSON(r)),new zp(i,e.options)}}const Tb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ee(s,o),new Ee(a,l),new Ee(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],y=e[r*3+2],M=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-d),new Ee(h,1-y),new Ee(M,1-f)]:[new Ee(a,1-l),new Ee(u,1-d),new Ee(p,1-y),new Ee(m,1-f)]}};function Ab(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Fp extends Op{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Fp(e.radius,e.detail)}}class kp extends Nn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const h=(n-e)/r,p=new B,y=new Ee;for(let M=0;M<=r;M++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,u.push(y.x,y.y)}d+=h}for(let M=0;M<r;M++){const m=M*(i+1);for(let f=0;f<i;f++){const g=f+m,x=g,S=g+i+1,P=g+i+2,A=g+1;a.push(x,S,A),a.push(S,P,A)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bp extends Nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new B,h=new B,p=[],y=[],M=[],m=[];for(let f=0;f<=i;f++){const g=[],x=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const A=P/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(A+S,1-x),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const x=u[f][g+1],S=u[f][g],P=u[f+1][g],A=u[f+1][g+1];(f!==0||o>0)&&p.push(x,S,A),(f!==i-1||l<Math.PI)&&p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hp extends Nn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new B,d=new B,h=new B;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const M=y/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(M),d.y=(e+n*Math.cos(m))*Math.sin(M),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const M=(r+1)*p+y-1,m=(r+1)*(p-1)+y-1,f=(r+1)*(p-1)+y,g=(r+1)*p+y;o.push(M,m,g),o.push(m,f,g)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bb extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bt extends Co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wp,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cb extends Co{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wp,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const kc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Rb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}}const Pb=new Rb;class Va{constructor(e){this.manager=e!==void 0?e:Pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class Lb extends Error{constructor(e,n){super(e),this.response=n}}class Db extends Va{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=kc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Hi[e]!==void 0){Hi[e].push({onLoad:n,onProgress:i,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,y=p!==0;let M=0;const m=new ReadableStream({start(f){g();function g(){d.read().then(({done:x,value:S})=>{if(x)f.close();else{M+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:p});for(let A=0,E=u.length;A<E;A++){const b=u[A];b.onProgress&&b.onProgress(P)}f.enqueue(S),g()}},x=>{f.error(x)})}}});return new Response(m)}else throw new Lb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{kc.add(e,c);const u=Hi[e];delete Hi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nb extends Va{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=La("img");function l(){u(),kc.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ib extends Va{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new Dp,a=new Db(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ki,o.wrapT=c.wrapT!==void 0?c.wrapT:Ki,o.magFilter=c.magFilter!==void 0?c.magFilter:nn,o.minFilter=c.minFilter!==void 0?c.minFilter:nn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=wr),c.mipmapCount===1&&(o.minFilter=nn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class Ul extends Va{constructor(e){super(e)}load(e,n,i,r){const s=new Wt,o=new Nb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class lu extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Ub extends lu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Md=new at,cg=new B,ug=new B;class ky{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),n.position.copy(cg),ug.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ug),n.updateMatrixWorld(),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dg=new at,Wo=new B,wd=new B;class Ob extends ky{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wo),wd.copy(i.position),wd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wd),i.updateMatrixWorld(),r.makeTranslation(-Wo.x,-Wo.y,-Wo.z),dg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dg)}}class vf extends lu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ob}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zb extends ky{constructor(){super(new Rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends lu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fb extends lu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class kb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fg(){return performance.now()}const pg=new at;class Bb{constructor(e,n,i=0,r=1/0){this.ray=new Ap(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return pg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pg),this}intersectObject(e,n=!0,i=[]){return xf(e,this,i,n),i.sort(mg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)xf(e[r],this,i,n);return i.sort(mg),i}}function mg(t,e){return t.distance-e.distance}function xf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)xf(s[o],e,n,!0)}}class gg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hb extends vs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);const vg={type:"change"},Vp={type:"start"},By={type:"end"},Ol=new Ap,xg=new Ai,Vb=Math.cos(70*LM.DEG2RAD),kt=new B,Tn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ed=1e-6;class Gb extends Hb{constructor(e,n=null){super(e,n),this.state=mt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new hs,this._lastTargetPosition=new B,this._quat=new hs().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gg,this._sphericalDelta=new gg,this._scale=1,this._panOffset=new B,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new B,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jb.bind(this),this._onPointerDown=Wb.bind(this),this._onPointerUp=Xb.bind(this),this._onContextMenu=$b.bind(this),this._onMouseWheel=Kb.bind(this),this._onKeyDown=Zb.bind(this),this._onTouchStart=Jb.bind(this),this._onTouchMove=Qb.bind(this),this._onMouseDown=Yb.bind(this),this._onMouseMove=qb.bind(this),this._interceptControlDown=eC.bind(this),this._interceptControlUp=tC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vg),this.update(),this.state=mt.NONE}update(e=null){const n=this.object.position;kt.copy(n).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ol.origin.copy(this.object.position),Ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ol.direction))<Vb?this.object.lookAt(this.target):(xg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ol.intersectPlane(xg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ed||this._lastTargetPosition.distanceToSquared(this.target)>Ed?(this.dispatchEvent(vg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){kt.setFromMatrixColumn(n,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,n){this.screenSpacePanning===!0?kt.setFromMatrixColumn(n,1):(kt.setFromMatrixColumn(n,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ee,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Wb(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function jb(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Xb(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(By),this.state=mt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Yb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=mt.DOLLY;break;case ao.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=mt.ROTATE}break;case ao.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Vp)}function qb(t){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Kb(t){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(t.preventDefault(),this.dispatchEvent(Vp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(By))}function Zb(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function Jb(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=mt.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=mt.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Vp)}function Qb(t){switch(this._trackPointer(t),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=mt.NONE}}function $b(t){this.enabled!==!1&&t.preventDefault()}function eC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class nC extends Py{constructor(){super();const e=new ni;e.deleteAttribute("uv");const n=new Bt({side:_n}),i=new Bt,r=new vf(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new $e(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new $e(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new $e(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new $e(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new $e(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new $e(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new $e(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new $e(e,Us(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new $e(e,Us(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const y=new $e(e,Us(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const M=new $e(e,Us(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const m=new $e(e,Us(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new $e(e,Us(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Us(t){const e=new Da;return e.color.setScalar(t),e}class iC extends Ib{constructor(e){super(e),this.type=Rn}parse(e){const o=function(b,V){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(V||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(V||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(V||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(V||""))}},u=`
`,d=function(b,V,_){V=V||1024;let C=b.pos,z=-1,O=0,H="",k=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));for(;0>(z=k.indexOf(u))&&O<V&&C<b.byteLength;)H+=k,O+=k.length,C+=128,k+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));return-1<z?(b.pos+=O+z+1,H+k.slice(0,z)):!1},h=function(b){const V=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,k;for((b.pos>=b.byteLength||!(H=d(b)))&&o(1,"no header found"),(k=H.match(V))||o(3,"bad initial token"),O.valid|=1,O.programtype=k[1],O.string+=H+`
`;H=d(b),H!==!1;){if(O.string+=H+`
`,H.charAt(0)==="#"){O.comments+=H+`
`;continue}if((k=H.match(_))&&(O.gamma=parseFloat(k[1])),(k=H.match(w))&&(O.exposure=parseFloat(k[1])),(k=H.match(C))&&(O.valid|=2,O.format=k[1]),(k=H.match(z))&&(O.valid|=4,O.height=parseInt(k[1],10),O.width=parseInt(k[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},p=function(b,V,_){const w=V;if(w<8||w>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);w!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const C=new Uint8Array(4*V*_);C.length||o(4,"unable to allocate buffer space");let z=0,O=0;const H=4*w,k=new Uint8Array(4),ne=new Uint8Array(H);let U=_;for(;U>0&&O<b.byteLength;){O+4>b.byteLength&&o(1),k[0]=b[O++],k[1]=b[O++],k[2]=b[O++],k[3]=b[O++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=w)&&o(3,"bad rgbe scanline format");let K=0,Q;for(;K<H&&O<b.byteLength;){Q=b[O++];const _e=Q>128;if(_e&&(Q-=128),(Q===0||K+Q>H)&&o(3,"bad scanline data"),_e){const Re=b[O++];for(let W=0;W<Q;W++)ne[K++]=Re}else ne.set(b.subarray(O,O+Q),K),K+=Q,O+=Q}const te=w;for(let _e=0;_e<te;_e++){let Re=0;C[z]=ne[_e+Re],Re+=w,C[z+1]=ne[_e+Re],Re+=w,C[z+2]=ne[_e+Re],Re+=w,C[z+3]=ne[_e+Re],z+=4}U--}return C},y=function(b,V,_,w){const C=b[V+3],z=Math.pow(2,C-128)/255;_[w+0]=b[V+0]*z,_[w+1]=b[V+1]*z,_[w+2]=b[V+2]*z,_[w+3]=1},M=function(b,V,_,w){const C=b[V+3],z=Math.pow(2,C-128)/255;_[w+0]=yl.toHalfFloat(Math.min(b[V+0]*z,65504)),_[w+1]=yl.toHalfFloat(Math.min(b[V+1]*z,65504)),_[w+2]=yl.toHalfFloat(Math.min(b[V+2]*z,65504)),_[w+3]=yl.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=h(m),g=f.width,x=f.height,S=p(m.subarray(m.pos),g,x);let P,A,E;switch(this.type){case $n:E=S.length/4;const b=new Float32Array(E*4);for(let _=0;_<E;_++)y(S,_*4,b,_*4);P=b,A=$n;break;case Rn:E=S.length/4;const V=new Uint16Array(E*4);for(let _=0;_<E;_++)M(S,_*4,V,_*4);P=V,A=Rn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:g,height:x,data:P,header:f.string,gamma:f.gamma,exposure:f.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){switch(o.type){case $n:case Rn:o.colorSpace=ir,o.minFilter=nn,o.magFilter=nn,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,i,r)}}const cc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rC=new Rp(-1,1,1,-1,0,1);class sC extends Nn{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}}const oC=new sC;class cu{constructor(e){this._mesh=new $e(oC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class aC extends xs{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new cu(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yg extends xs{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class lC extends xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ee);this._width=i.width,this._height=i.height,n=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aC(cc),this.copyPass.material.blending=tn,this.clock=new kb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yg!==void 0&&(o instanceof yg?i=!0:o instanceof lC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uC extends xs{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const dC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class hC extends xs{constructor(){super();const e=dC;this.uniforms=vi.clone(e.uniforms),this.material=new bb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new cu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$x?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ey?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ty?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ny?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===iy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const zl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new at},cameraProjectionMatrixInverse:{value:new at},cameraWorldMatrix:{value:new at},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`},Fl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Td={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function fC(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=pC(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new B(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new Dp(r,e,e);return s.wrapS=bn,s.wrapT=bn,s.needsUpdate=!0,s}function pC(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const kl={defines:{SAMPLES:16,SAMPLE_VECTORS:Hy(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraProjectionMatrixInverse:{value:new at},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Hy(t,e,n){const i=mC(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function mC(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new B(Math.cos(s),Math.sin(s),o))}return i}class gC{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),u=(3-Math.sqrt(3))/6,d=(l+c)*u,h=l-d,p=c-d,y=e-h,M=n-p;let m,f;y>M?(m=1,f=0):(m=0,f=1);const g=y-m+u,x=M-f+u,S=y-1+2*u,P=M-1+2*u,A=l&255,E=c&255,b=this.perm[A+this.perm[E]]%12,V=this.perm[A+m+this.perm[E+f]]%12,_=this.perm[A+1+this.perm[E+1]]%12;let w=.5-y*y-M*M;w<0?i=0:(w*=w,i=w*w*this.dot(this.grad3[b],y,M));let C=.5-g*g-x*x;C<0?r=0:(C*=C,r=C*C*this.dot(this.grad3[V],g,x));let z=.5-S*S-P*P;return z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[_],S,P)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(n+c),h=Math.floor(i+c),p=1/6,y=(u+d+h)*p,M=u-y,m=d-y,f=h-y,g=e-M,x=n-m,S=i-f;let P,A,E,b,V,_;g>=x?x>=S?(P=1,A=0,E=0,b=1,V=1,_=0):g>=S?(P=1,A=0,E=0,b=1,V=0,_=1):(P=0,A=0,E=1,b=1,V=0,_=1):x<S?(P=0,A=0,E=1,b=0,V=1,_=1):g<S?(P=0,A=1,E=0,b=0,V=1,_=1):(P=0,A=1,E=0,b=1,V=1,_=0);const w=g-P+p,C=x-A+p,z=S-E+p,O=g-b+2*p,H=x-V+2*p,k=S-_+2*p,ne=g-1+3*p,U=x-1+3*p,K=S-1+3*p,Q=u&255,te=d&255,_e=h&255,Re=this.perm[Q+this.perm[te+this.perm[_e]]]%12,W=this.perm[Q+P+this.perm[te+A+this.perm[_e+E]]]%12,J=this.perm[Q+b+this.perm[te+V+this.perm[_e+_]]]%12,le=this.perm[Q+1+this.perm[te+1+this.perm[_e+1]]]%12;let he=.6-g*g-x*x-S*S;he<0?r=0:(he*=he,r=he*he*this.dot3(this.grad3[Re],g,x,S));let Te=.6-w*w-C*C-z*z;Te<0?s=0:(Te*=Te,s=Te*Te*this.dot3(this.grad3[W],w,C,z));let De=.6-O*O-H*H-k*k;De<0?o=0:(De*=De,o=De*De*this.dot3(this.grad3[J],O,H,k));let Ue=.6-ne*ne-U*U-K*K;return Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this.dot3(this.grad3[le],ne,U,K)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,d,h,p,y;const M=(e+n+i+r)*l,m=Math.floor(e+M),f=Math.floor(n+M),g=Math.floor(i+M),x=Math.floor(r+M),S=(m+f+g+x)*c,P=m-S,A=f-S,E=g-S,b=x-S,V=e-P,_=n-A,w=i-E,C=r-b,z=V>_?32:0,O=V>w?16:0,H=_>w?8:0,k=V>C?4:0,ne=_>C?2:0,U=w>C?1:0,K=z+O+H+k+ne+U,Q=o[K][0]>=3?1:0,te=o[K][1]>=3?1:0,_e=o[K][2]>=3?1:0,Re=o[K][3]>=3?1:0,W=o[K][0]>=2?1:0,J=o[K][1]>=2?1:0,le=o[K][2]>=2?1:0,he=o[K][3]>=2?1:0,Te=o[K][0]>=1?1:0,De=o[K][1]>=1?1:0,Ue=o[K][2]>=1?1:0,He=o[K][3]>=1?1:0,fe=V-Q+c,L=_-te+c,we=w-_e+c,be=C-Re+c,pe=V-W+2*c,Ae=_-J+2*c,Be=w-le+2*c,Ie=C-he+2*c,N=V-Te+3*c,T=_-De+3*c,se=w-Ue+3*c,ve=C-He+3*c,Se=V-1+4*c,me=_-1+4*c,Fe=w-1+4*c,F=C-1+4*c,G=m&255,ce=f&255,D=g&255,j=x&255,Y=a[G+a[ce+a[D+a[j]]]]%32,X=a[G+Q+a[ce+te+a[D+_e+a[j+Re]]]]%32,re=a[G+W+a[ce+J+a[D+le+a[j+he]]]]%32,xe=a[G+Te+a[ce+De+a[D+Ue+a[j+He]]]]%32,ee=a[G+1+a[ce+1+a[D+1+a[j+1]]]]%32;let oe=.6-V*V-_*_-w*w-C*C;oe<0?u=0:(oe*=oe,u=oe*oe*this.dot4(s[Y],V,_,w,C));let I=.6-fe*fe-L*L-we*we-be*be;I<0?d=0:(I*=I,d=I*I*this.dot4(s[X],fe,L,we,be));let ae=.6-pe*pe-Ae*Ae-Be*Be-Ie*Ie;ae<0?h=0:(ae*=ae,h=ae*ae*this.dot4(s[re],pe,Ae,Be,Ie));let q=.6-N*N-T*T-se*se-ve*ve;q<0?p=0:(q*=q,p=q*q*this.dot4(s[xe],N,T,se,ve));let Z=.6-Se*Se-me*me-Fe*Fe-F*F;return Z<0?y=0:(Z*=Z,y=Z*Z*this.dot4(s[ee],Se,me,Fe,F)),27*(u+d+h+p+y)}}class fi extends xs{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=fC(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new si(this.width,this.height,{type:Rn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Vt({defines:Object.assign({},zl.defines),uniforms:vi.clone(zl.uniforms),vertexShader:zl.vertexShader,fragmentShader:zl.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Cb,this.normalMaterial.blending=tn,this.pdMaterial=new Vt({defines:Object.assign({},kl.defines),uniforms:vi.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Vt({defines:Object.assign({},Fl.defines),uniforms:vi.clone(Fl.uniforms),vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Vt({uniforms:vi.clone(cc.uniforms),vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:bh,blendDst:Qo,blendEquation:mi,blendSrcAlpha:Ah,blendDstAlpha:Qo,blendEquationAlpha:mi}),this.blendMaterial=new Vt({uniforms:vi.clone(Td.uniforms),vertexShader:Td.vertexShader,fragmentShader:Td.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Jx,blendSrc:bh,blendDst:Qo,blendEquation:mi,blendSrcAlpha:Ah,blendDstAlpha:Qo,blendEquationAlpha:mi}),this.fsQuad=new cu(null),this.originalClearColor=new Je,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new Lp,this.depthTexture.format=ds,this.depthTexture.type=us,this.normalRenderTarget=new si(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:Rn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hy(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case fi.OUTPUT.Off:break;case fi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case fi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case fi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case fi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case fi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case fi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new gC,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new Dp(r,e,e,ei,Ii);return s.wrapS=bn,s.wrapT=bn,s.needsUpdate=!0,s}}fi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Bl={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

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

		}`},Hl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

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

		}`},Ad={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

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

		}`};class vC extends xs{constructor(e,n){super(),this.edgesRT=new si(e,n,{depthBuffer:!1,type:Rn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new si(e,n,{depthBuffer:!1,type:Rn}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Wt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=nn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Wt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Jt,this.searchTexture.minFilter=Jt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=vi.clone(Bl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new Vt({defines:Object.assign({},Bl.defines),uniforms:this.uniformsEdges,vertexShader:Bl.vertexShader,fragmentShader:Bl.fragmentShader}),this.uniformsWeights=vi.clone(Hl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Vt({defines:Object.assign({},Hl.defines),uniforms:this.uniformsWeights,vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader}),this.uniformsBlend=vi.clone(Ad.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Vt({uniforms:this.uniformsBlend,vertexShader:Ad.vertexShader,fragmentShader:Ad.fragmentShader}),this.fsQuad=new cu(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const xC="honeycutt-assets",ps="img";function Gp(){return new Promise((t,e)=>{const n=indexedDB.open(xC,1);n.onupgradeneeded=()=>n.result.createObjectStore(ps,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function yC(){try{const t=await Gp();return await new Promise(e=>{const n=t.transaction(ps).objectStore(ps).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function _C(t){const e=await Gp();return new Promise(n=>{const i=e.transaction(ps,"readwrite");i.objectStore(ps).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function SC(t){const e=await Gp();return new Promise(n=>{const i=e.transaction(ps,"readwrite");i.objectStore(ps).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function MC(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const Vy=Xe.createContext(null);let wC=1;function EC({children:t}){const[e,n]=Xe.useState([]);Xe.useEffect(()=>{yC().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=Xe.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await MC(l.result),u={id:`a${Date.now().toString(36)}${wC++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await _C(u),n(d=>[u,...d]),a(u)},l.readAsDataURL(o)}),[]),r=Xe.useCallback(async o=>{await SC(o),n(a=>a.filter(l=>l.id!==o))},[]),s=Xe.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return v.jsx(Vy.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function Wp(){return Xe.useContext(Vy)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function qt(t,e){const n=new Je(t);return e>=0?n.lerp(new Je("#ffffff"),e):n.lerp(new Je("#000000"),-e),n}function Pe(t,e=.75,n=.04,i={}){return new Bt({color:new Je(t),roughness:e,metalness:n,...i})}function Ne(t,e,n,i){const r=new $e(new ni(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function tt(t,e,n,i,r=28){const s=new $e(new ou(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function ye(t,e,n,i){return t.position.set(e,n,i),t}function jo(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(ye(Ne(s,i,s,o),l,i/2,c))}const _g={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.85),a=Pe(qt(s,.08),.9),l=Pe("#2b2b2e",.5,.3),c=r*.42,u=Math.min(.16,n*.12),d=r;t.add(ye(Ne(n,c,i,o),0,c/2+.08,0)),t.add(ye(Ne(n,d-.1,.16,o),0,(d-.1)/2+.08,-i/2+.08)),t.add(ye(Ne(u,c+.16,i,o),n/2-u/2,(c+.16)/2+.08,0)),t.add(ye(Ne(u,c+.16,i,o),-n/2+u/2,(c+.16)/2+.08,0));const h=n-u*2-.04,p=n>1.3?Math.round(n/.9):1,y=h/p;for(let M=0;M<p;M++){const m=-h/2+y/2+M*y;t.add(ye(Ne(y-.04,.16,i-.28,a),m,c+.16,.04)),t.add(ye(Ne(y-.06,.2,.16,a),m,c+.24,-i/2+.24))}jo(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.7,.05),a=r*.5;t.add(ye(Ne(n,.06,i,o),0,a,0)),t.add(ye(Ne(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),jo(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.7);t.add(ye(Ne(n,.1,i,o),0,r-.05,0)),jo(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Pe(r,.6,.1);t.add(ye(tt(n/2,n/2,.08,s),0,i-.04,0)),t.add(ye(tt(.03,.04,i-.08,Pe("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(ye(tt(n*.34,n*.34,.02,Pe("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.45,.05);t.add(ye(Ne(n,.06,i,o),0,r-.03,0)),jo(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Pe(r,.45,.05);t.add(ye(tt(n/2,n/2,.06,s),0,i-.03,0)),t.add(ye(tt(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(ye(tt(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.5,.06);t.add(ye(Ne(n,.05,i,o),0,r-.025,0)),t.add(ye(Ne(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(ye(Ne(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(ye(Ne(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe("#5b4a3a",.6),a=Pe(s,.9),l=Pe(qt(s,.12),.95),c=r*.5;t.add(ye(Ne(n,c,i,o),0,c/2,0)),t.add(ye(Ne(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(ye(Ne(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(ye(Ne(n-.12,.1,i*.62,Pe(qt(s,-.05),.9)),0,c+.2,i*.12));const u=(n-.2)/2;t.add(ye(Ne(u-.04,.12,.34,l),-u/2,c+.24,-i/2+.32)),t.add(ye(Ne(u-.04,.12,.34,l),u/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(ye(tt(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(ye(tt(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),jo(t,n-.08,i-.08,.06,.05,.04,Pe("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(.012,r-.1,.01,Pe(qt(s,-.3),.6)),0,r/2,i/2+.002)),t.add(ye(tt(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(ye(tt(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.55),a=Pe(qt(s,.06),.6),l=Pe("#caa86a",.3,.7);t.add(ye(Ne(n,r,i,o),0,r/2,0));const c=r>.6?3:1,u=(r-.08)/c;for(let d=0;d<c;d++){const h=.04+u/2+d*u;t.add(ye(Ne(n-.06,u-.03,.02,a),0,h,i/2+.005)),t.add(ye(tt(.01,.01,.12,l),0,h,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.6),a=.04;t.add(ye(Ne(a,r,i,o),-n/2+a/2,r/2,0)),t.add(ye(Ne(a,r,i,o),n/2-a/2,r/2,0)),t.add(ye(Ne(n,a,i,o),0,a/2,0)),t.add(ye(Ne(n,a,i,o),0,r-a/2,0)),t.add(ye(Ne(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const u=r/(l+1)*c;t.add(ye(Ne(n-a*2,a*.7,i-.04,o),0,u,0));const d=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let h=-n/2+a+.04;for(;h<n/2-a-.06;){const p=.03+Math.random()*.03,y=.12+Math.random()*.08;t.add(ye(Ne(p,y,i*.6,Pe(d[Math.floor(Math.random()*d.length)],.8)),h+p/2,u+a*.35+y/2,0)),h+=p+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Pe("#2b2b2e",.4,.4),o=Pe(r,.4,.3),a=new Bt({color:"#10141c",roughness:.2,metalness:.1,emissive:new Je("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(ye(Ne(n,i,.05,o),0,l+i/2,0));const c=new $e(new Ni(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(ye(tt(.03,.04,l,s),0,l/2,0)),t.add(ye(Ne(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Pe(r,1,0),o=Ne(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=Ne(n*.86,.022,i*.78,Pe(qt(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=tt(n/2,n/2,.02,Pe(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=tt(n*.36,n*.36,.022,Pe(qt(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Pe("#9a7a55",.7),o=i*.28;t.add(ye(tt(n*.36,n*.28,o,s),0,o/2,0)),t.add(ye(tt(.03,.03,i*.45,Pe("#5a4030",.8)),0,o+i*.2,0));const a=(c,u,d,h,p)=>{const y=new $e(new Fp(u,0),Pe(c,.9));y.castShadow=!0,t.add(ye(y,d,h,p))},l=o+i*.4;a(qt(r,.05),n*.42,0,l+n*.2,0),a(qt(r,-.1),n*.34,n*.22,l+n*.45,.04),a(qt(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(qt(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Pe("#3a3a3e",.4,.6);t.add(ye(tt(n*.32,n*.36,.04,s),0,.02,0)),t.add(ye(tt(.018,.018,i*.78,s),0,i*.4,0));const o=new $e(new Up(n*.42,i*.22,24,1,!0),new Bt({color:new Je(r),roughness:.6,emissive:new Je(r),emissiveIntensity:.5,side:xn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new vf(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.5),a=Pe("#888",.3,.8);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n,.015,.005,Pe(qt(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(ye(tt(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(ye(tt(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe("#d8d2c8",.6),a=Pe(s,.3,.2);t.add(ye(Ne(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(ye(Ne(n,.05,i,a),0,r-.025,0)),t.add(ye(Ne(n*.3,.02,i*.5,Pe("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.4);t.add(ye(Ne(n,r,i,o),0,r/2,0));const a=Pe("#1a1a1d",.3,.2);t.add(ye(Ne(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(ye(tt(n*.11,n*.11,.01,Pe("#333",.5)),n*l,r+.02,i*c))},oven(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.4,.45);t.add(ye(Ne(n,r,i,o),0,r/2,0));const a=Pe("#26262a",.35,.3);t.add(ye(Ne(n-.06,r*.5,.02,a),0,r*.38,i/2+.006));const l=new Bt({color:"#12161c",roughness:.2,emissive:new Je("#16242f"),emissiveIntensity:.25});t.add(ye(new $e(new ni(n-.2,r*.26,.01),l),0,r*.4,i/2+.016)),t.add(ye(tt(.013,.013,n*.7,Pe("#bcc0c4",.3,.7)),0,r*.68,i/2+.02).rotateZ(Math.PI/2));const c=Pe("#1a1a1d",.3,.2);t.add(ye(Ne(n-.04,.02,i-.04,c),0,r+.01,0));for(const[u,d]of[[-.22,-.2],[.22,-.2],[-.22,.22],[.22,.22]])t.add(ye(tt(n*.1,n*.1,.01,Pe("#333",.5)),n*u,r+.02,i*d));t.add(ye(Ne(n,r*.16,.05,Pe(qt(s,-.12),.4)),0,r+.09,-i/2+.03))},appliance(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.4,.45);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n-.06,r-.1,.02,Pe(qt(s,-.05),.35,.5)),0,r/2,i/2+.006)),t.add(ye(tt(.012,.012,n*.62,Pe("#8c9094",.3,.8)),0,r-.08,i/2+.02).rotateZ(Math.PI/2)),t.add(ye(Ne(n-.08,.05,.02,Pe(qt(s,-.2),.4)),0,r-.05,i/2+.01))},washer(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s,.35,.5);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(tt(n*.33,n*.33,.04,Pe("#9aa0a6",.3,.6)),0,r*.46,i/2-.005).rotateX(Math.PI/2));const a=new Bt({color:"#1f2e38",roughness:.12,metalness:.2,transparent:!0,opacity:.7});t.add(ye(tt(n*.25,n*.25,.04,a),0,r*.46,i/2+.012).rotateX(Math.PI/2)),t.add(ye(Ne(n-.06,.08,.02,Pe(qt(s,-.18),.4)),0,r-.08,i/2+.006))},sink(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,r-.05,i,Pe(s,.55)),0,(r-.05)/2,0)),t.add(ye(Ne(n,.05,i,Pe("#d8d2c8",.3,.2)),0,r-.025,0)),t.add(ye(Ne(n*.6,.05,i*.58,Pe("#9aa0a6",.25,.6)),0,r-.05,.02));const o=Pe("#b8bcc0",.2,.8);t.add(ye(tt(.015,.015,.16,o),0,r+.08,-i/2+.12)),t.add(ye(Ne(.02,.02,.13,o),0,r+.15,-i/2+.18))},toilet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#f2f2f0",.35,.05);t.add(ye(tt(n*.4,n*.34,r*.5,o),0,r*.25,i*.16)),t.add(ye(tt(n*.46,n*.46,.05,o),0,r*.52,i*.16)),t.add(ye(Ne(n*.96,r*.5,i*.26,o),0,r*.75,-i/2+i*.13))},bathtub(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,r,i,Pe(s||"#f3f3f1",.3,.05)),0,r/2,0)),t.add(ye(Ne(n-.16,r*.55,i-.16,Pe("#e6eff4",.2,.1)),0,r*.62,0)),t.add(ye(tt(.014,.014,.14,Pe("#b8bcc0",.2,.8)),n/2-.12,r+.06,0))},shower(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(ye(Ne(n,.08,i,Pe(s||"#e8e8e6",.4,.05)),0,.04,0));const o=new Bt({color:"#cfe0e8",roughness:.05,metalness:.1,transparent:!0,opacity:.26,side:xn}),a=Pe("#9aa0a6",.3,.7),l=new $e(new Ni(n,r-.08),o);l.position.set(0,r/2,i/2),l.castShadow=!1,t.add(l);const c=new $e(new Ni(i,r-.08),o);c.rotation.y=Math.PI/2,c.position.set(n/2,r/2,0),c.castShadow=!1,t.add(c),t.add(ye(Ne(.03,r,.03,a),n/2,r/2,i/2)),t.add(ye(Ne(.03,r,.03,a),-n/2,r/2,i/2)),t.add(ye(tt(n*.12,n*.12,.04,a),-n*.1,r*.78,-i/2+.05))},fireplace(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#cfcabf",.7);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n*.6,r*.5,.06,Pe("#15120f",.6)),0,r*.32,i/2+.005)),t.add(ye(Ne(n+.12,.08,i+.1,Pe(qt(s||"#cfcabf",-.2),.6)),0,r*.62,0));const a=new vf("#ff7a30",3,3.5,2);a.position.set(0,r*.3,i/2-.1),t.add(a),t.add(ye(Ne(n*.4,r*.18,.04,new Bt({color:"#ff7a30",emissive:new Je("#ff5a14"),emissiveIntensity:1.4})),0,r*.2,i/2-.02))},mirror(t,e){const{w:n,h:i,color:r}=e;t.add(ye(Ne(n,i,.05,Pe(r||"#caa86a",.4,.3)),0,i/2,0)),t.add(ye(Ne(n-.1,i-.1,.01,Pe("#cdd6dc",.05,.6)),0,i/2,.032))},barcart(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#b8923f",.3,.7),a=Pe("#d8d2c8",.2,.3);for(const[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.add(ye(tt(.012,.012,r,o),l*(n/2-.04),r/2,c*(i/2-.04))),t.add(ye(tt(.03,.03,.02,Pe("#222",.5)),l*(n/2-.04),.03,c*(i/2-.04)).rotateZ(Math.PI/2));t.add(ye(Ne(n,.02,i,a),0,r-.02,0)),t.add(ye(Ne(n,.02,i,a),0,r*.45,0));for(let l=0;l<3;l++)t.add(ye(tt(.03,.035,.18,Pe(["#3a5a3a","#5a2a2a","#2a3a5a"][l],.3,.2)),-n/5+l*.12,r+.09,0))},piano(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#161616",.3,.2);t.add(ye(Ne(n,r,i,o),0,r/2,0)),t.add(ye(Ne(n*.9,.04,.16,Pe("#f4f1ea",.3)),0,r*.5,i/2+.04)),t.add(ye(Ne(n*.92,.16,.06,o),0,r*.58,i/2+.05)),t.add(ye(Ne(n+.04,.05,i+.06,o),0,r+.02,0)),t.add(ye(Ne(.12,.02,.06,Pe("#b8923f",.3,.7)),0,.05,i/2))},coatrack(t,e){const{w:n,h:i,color:r}=e,s=Pe(r||"#5a4636",.5);t.add(ye(tt(.02,.025,i,s),0,i/2,0)),t.add(ye(tt(n*.4,n*.45,.03,s),0,.02,0));for(let o=0;o<4;o++){const a=o*Math.PI/2;t.add(ye(Ne(.16,.025,.025,s),Math.cos(a)*.08,i-.12,Math.sin(a)*.08).rotateY(-a))}},vase(t,e){const{w:n,h:i,color:r}=e,s=Pe(r||"#9a8f7a",.4,.1);t.add(ye(tt(n*.28,n*.18,i*.72,s),0,i*.36,0)),t.add(ye(tt(n*.2,n*.28,i*.12,s),0,i*.74,0));for(let o=0;o<6;o++){const a=o/6*Math.PI*2;t.add(ye(tt(.006,.006,i*.5,Pe("#4a6a3a",.7)),Math.cos(a)*.05,i*.82+i*.22,Math.sin(a)*.05).rotateZ(Math.cos(a)*.25))}},pouf(t,e){const{w:n,h:i,color:r}=e;t.add(ye(tt(n/2,n*.45,i,Pe(r||"#b6855f",.9)),0,i/2,0)),t.add(ye(tt(n*.5,n*.45,.01,Pe(qt(r||"#b6855f",-.15),.9)),0,i*.5,0))},ladder(t,e){const{w:n,d:i,h:r,color:s}=e,o=Pe(s||"#9a6f43",.6);t.add(ye(Ne(.04,r,.04,o),-n/2+.04,r/2,0)),t.add(ye(Ne(.04,r,.04,o),n/2-.04,r/2,0));for(let a=0;a<4;a++){const l=r*.22*(a+1),c=Math.max(.12,i*(1-a*.18));t.add(ye(Ne(n-.04,.03,c,o),0,l,i/2-c/2))}}};function TC(t){const e=pp[t.type];if(!e)return new Vn;const n=new Vn,i={...e,color:t.color||e.color};return(_g[e.shape]||_g.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function Os(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const Sg={day:{bg:"#bcd8f2",exposure:1.05,env:1,key:["#fff6e8",2.6],fill:["#cfe2ff",.5],hemi:.7,amb:.3,ground:"#d8e2cf",skyHemi:"#cfe3ff",grndHemi:"#5a7a44"},night:{bg:"#0a1222",exposure:1.12,env:.22,key:["#aac2ff",.6],fill:["#485fb0",.3],hemi:.2,amb:.1,ground:"#46543b",skyHemi:"#33406a",grndHemi:"#1d2a18"}},Mg=(t,e)=>Math.round(t/e)*e,zs=t=>Math.max(0,Math.min(255,Math.round(t))),Ri=(t,e,n)=>Math.max(e,Math.min(n,t)),AC={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function Bc(t){const e=new B(t.dirx,0,t.dirz),n=new B(0,1,0),i=new B(t.nx,0,t.nz);return new at().makeBasis(e,n,i).setPosition(t.ox,0,t.oz)}function bC(t,e,n,i,r){const s=new pf,o=(e+i)/2,a=(n+r)/2,l=(i-e)/2,c=(r-n)/2;if(t==="round")s.absellipse(o,a,l,c,0,Math.PI*2,!0);else if(t==="arch"){const u=Math.min(r-l,r-.02);s.moveTo(e,n),s.lineTo(i,n),s.lineTo(i,u),s.absarc(o,u,l,0,Math.PI,!1),s.lineTo(e,n),s.closePath()}else if(t==="star"){for(let u=0;u<10;u++){const d=-Math.PI/2+u*Math.PI/5,h=u%2===0?1:.42,p=o+Math.cos(d)*h*l,y=a+Math.sin(d)*h*c;u===0?s.moveTo(p,y):s.lineTo(p,y)}s.closePath()}else s.moveTo(e,n),s.lineTo(e,r),s.lineTo(i,r),s.lineTo(i,n),s.closePath();return s}function CC(t,e,n,i){const r=t.length,s=t.height,o=new Uy;o.moveTo(-n,-.05),o.lineTo(r+n,-.05),o.lineTo(r+n,s),o.lineTo(-n,s),o.closePath();for(const l of i){const c=Ri(l.u,.02,r-.02),u=Ri(l.u+l.w,.02,r-.02),d=Ri(l.v,0,s-.04),h=Ri(l.v+l.h,d+.02,s-.02);u-c<.04||h-d<.04||o.holes.push(bC(l.shape,c,d,u,h))}const a=new zp(o,{depth:e,bevelEnabled:!1,curveSegments:1});return a.translate(0,0,-e/2),a.applyMatrix4(Bc(t)),a.computeVertexNormals(),a}function RC(t,e,n,i,r){const s=e.length,o=e.height,a=Ri(n.u,0,s),l=Ri(n.u+n.w,0,s),c=Ri(n.v,0,o),u=Ri(n.v+n.h,0,o);if(l-a<.05||u-c<.05)return;const d=.05,h=i+.03,p=new Vn;p.matrixAutoUpdate=!1,p.matrix.copy(Bc(e));const y=(M,m,f,g)=>{const x=new $e(new ni(M,m,h),r);x.position.set(f,g,0),x.castShadow=!0,x.receiveShadow=!0,p.add(x)};y(d,u-c,a-d/2,(c+u)/2),y(d,u-c,l+d/2,(c+u)/2),y(l-a+2*d,d,(a+l)/2,u+d/2),c>.06&&y(l-a+2*d,d,(a+l)/2,c-d/2),t.add(p)}function wg(t){let e=t.nx,n=t.nz;(e<-1e-6||Math.abs(e)<1e-6&&n<0)&&(e=-e,n=-n);const i=t.ox*e+t.oz*n,r=s=>Math.round(s*1e3)/1e3;return`${r(e)},${r(n)},${r(i)}`}function PC(t,e,n){const i=(e.ox+e.dirx*t.u-n.ox)*n.dirx+(e.oz+e.dirz*t.u-n.oz)*n.dirz,r=(e.ox+e.dirx*(t.u+t.w)-n.ox)*n.dirx+(e.oz+e.dirz*(t.u+t.w)-n.oz)*n.dirz;return{...t,u:Math.min(i,r),w:Math.abs(r-i)}}function Eg(t,e,n,i,r){const s=wg(e),o=[];for(const l of n)for(const c of["n","e","s","w"])o.push({kind:"room",uid:l.uid,side:c});for(const l of i)o.push({kind:"wall",uid:l.uid});const a=[];for(const l of o){const c=yr(l,n,i);if(!(!c||wg(c)!==s))for(const u of r)r0(u.wall,l)&&a.push(r0(l,t)?u:PC(u,c,e))}return a}function LC(t="#b08a5e"){const e=new Je(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let u=0;u<a;u++){const d=(Math.random()-.5)*36;o.fillStyle=`rgb(${zs(n+d)},${zs(i+d)},${zs(r+d)})`,o.fillRect(0,u*l,512,l);for(let h=0;h<60;h++){o.strokeStyle=`rgba(${zs(n*.45)},${zs(i*.4)},${zs(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const p=u*l+Math.random()*l;o.moveTo(0,p),o.bezierCurveTo(170,p+(Math.random()-.5)*6,340,p+(Math.random()-.5)*6,512,p),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,u*l,512,2)}const c=new qA(s);return c.wrapS=c.wrapT=bn,c.colorSpace=fn,c}function DC({onOpenInspector:t,onFlash:e}){var w;const{state:n,dispatch:i}=Ao(),{rooms:r,walls:s,items:o,builtins:a,openings:l,selected:c,ambiance:u,quality:d,visitMode:h}=n,{map:p}=Wp(),y=Xe.useRef(null),M=Xe.useRef(null),m=Xe.useRef({}),f=Xe.useRef({});f.current={rooms:r,walls:s,items:o,selected:c,dispatch:i,onOpenInspector:t,openingMode:n.openingMode,openShape:n.openShape,visitMode:n.visitMode};function g(C){const z=m.current;if(!C||typeof C!="string")return null;if(C.startsWith("wood:")){const O=C.slice(5);return z.woodCache.has(O)||z.woodCache.set(O,LC(AC[O]||"#c79a6b")),z.woodCache.get(O)}if(C.startsWith("img:")){const O=C.slice(4);if(!z.imgCache.has(O)){const H=p[O];if(!H)return null;const k=new Ul().load(H);k.colorSpace=fn,k.wrapS=k.wrapT=bn,z.imgCache.set(O,k)}return z.imgCache.get(O)}if(C.startsWith("mat:")){const O=C.slice(4);if(!ec[O])return null;const H=`mat:${O}`;if(!z.imgCache.has(H)){const k=new Ul().load(ca(O));k.colorSpace=fn,k.wrapS=k.wrapT=bn,z.imgCache.set(H,k)}return z.imgCache.get(H)}return null}function x(C){const z=m.current;if(typeof C!="string"||!C.startsWith("mat:"))return null;const O=C.slice(4),H=ec[O];if(!H||!H.normal)return null;const k=`nrm:${O}`;if(!z.imgCache.has(k)){const ne=new Ul().load(ca(O,!0));ne.wrapS=ne.wrapT=bn,z.imgCache.set(k,ne)}return z.imgCache.get(k)}function S(C){var z;return typeof C!="string"||!C.startsWith("mat:")?null:((z=ec[C.slice(4)])==null?void 0:z.repeat)||null}function P(C,z,O,H,k,ne=1.5,U={},K=1){const Q=g(C);if(Q){const te=(S(C)||ne)*(K||1),_e=Math.max(1,H/te),Re=Math.max(1,k/te),W=Q.clone();W.needsUpdate=!0,W.wrapS=W.wrapT=bn,W.colorSpace=fn,m.current.roomTexList.push(W),W.repeat.set(_e,Re);const J=new Bt({map:W,...U}),le=x(C);if(le){const he=le.clone();he.needsUpdate=!0,he.wrapS=he.wrapT=bn,he.repeat.set(_e,Re),m.current.roomTexList.push(he),J.normalMap=he,J.normalScale=new Ee(.6,.6)}return J}return new Bt({color:new Je(z||O),...U})}Xe.useEffect(()=>{const C=y.current,z=C.clientWidth,O=C.clientHeight,H=new YA({antialias:!0,preserveDrawingBuffer:!0});H.setSize(z,O),H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.shadowMap.enabled=!0,H.shadowMap.type=Zx,H.toneMapping=gp,H.toneMappingExposure=1.05,H.outputColorSpace=fn,C.appendChild(H.domElement);const k=new Py;k.background=new Je("#bcd8f2");const ne=new df(H);try{k.environment=ne.fromScene(new nC,.04).texture}catch{}new iC().load(LS,ee=>{try{ee.mapping=Ic;const oe=ne.fromEquirectangular(ee).texture;m.current.scene&&(m.current.scene.environment=oe,m.current.envMap=oe)}catch{}ee.dispose()},void 0,()=>{});const U=new Hn(50,z/O,.1,200),K=new Gb(U,H.domElement);K.enableDamping=!0,K.dampingFactor=.08,K.minDistance=1.2,K.maxDistance=60,K.maxPolarAngle=Math.PI/2-.04,K.minPolarAngle=.16,K.enablePan=!0,K.rotateSpeed=.7;const Q=new Ub("#dfe6f0","#2a2620",.55);k.add(Q);const te=new Fb("#ffffff",.25);k.add(te);const _e=new hg("#fff4e0",2);_e.position.set(8,14,6),_e.castShadow=!0,_e.shadow.mapSize.set(4096,4096),_e.shadow.camera.near=1,_e.shadow.camera.far=80,_e.shadow.bias=-3e-4,_e.shadow.normalBias=.02,_e.shadow.radius=4;const Re=_e.shadow.camera;Re.left=-20,Re.right=20,Re.top=20,Re.bottom=-20,k.add(_e);const W=new hg("#cdddff",.5);W.position.set(-9,7,-5),k.add(W);let J=null,le=null;try{J=new cC(H),J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setSize(z,O),J.addPass(new uC(k,U)),le=new fi(k,U,z,O),le.output=fi.OUTPUT.Default,le.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),le.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),J.addPass(le),J.addPass(new vC(z,O)),J.addPass(new hC)}catch{J=null}const he=new $e(new Ni(400,400),new Bt({color:"#d8e2cf",roughness:1}));he.rotation.x=-Math.PI/2,he.position.y=-.04,he.receiveShadow=!0,k.add(he),new Ul().load(ca("grass"),ee=>{var oe,I;ee.wrapS=ee.wrapT=bn,ee.colorSpace=fn,ee.repeat.set(200,200),ee.anisotropy=((I=(oe=H.capabilities).getMaxAnisotropy)==null?void 0:I.call(oe))||8,he.material.map=ee,he.material.needsUpdate=!0,m.current.groundTex=ee},void 0,()=>{});const Te=new Vn,De=new Vn,Ue=new Vn;k.add(Te,De,Ue);const He=new $e(new kp(.46,.5,48),new Da({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:xn}));He.rotation.x=-Math.PI/2,He.position.y=.03,He.visible=!1,He.renderOrder=2,k.add(He);const fe=new Vn,L=new $e(new Hp(.5,.035,12,48),new Bt({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));L.rotation.x=-Math.PI/2,L.userData.gizmo=!0,fe.add(L);for(let ee=0;ee<4;ee++){const oe=ee/4*Math.PI*2,I=new $e(new Bp(.07,16,16),new Bt({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));I.position.set(Math.cos(oe)*.5,0,Math.sin(oe)*.5),I.userData.gizmo=!0,fe.add(I)}fe.visible=!1,fe.renderOrder=3,k.add(fe);const we=new $e(new Ni(1,1),new Da({color:"#d9b779",transparent:!0,opacity:.4,side:xn,depthTest:!1}));we.matrixAutoUpdate=!1,we.visible=!1,we.renderOrder=4,k.add(we),Object.assign(m.current,{renderer:H,scene:k,camera:U,controls:K,roomGroup:Te,furnitureGroup:De,ground:he,key:_e,fill:W,ambient:te,hemi:Q,pmrem:ne,ring:He,gizmo:fe,builtinGroup:Ue,composer:J,gtao:le,openPreview:we,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new Bb,drag:null,rotate:null,pending:null,drawOpen:null,fp:{yaw:0,pitch:0,move:{f:0,b:0,l:0,r:0},look:null},visit:!1});const be=new Ai(new B(0,1,0),0),pe=H.domElement,Ae=new Ee,Be=ee=>{const oe=pe.getBoundingClientRect();Ae.set((ee.clientX-oe.left)/oe.width*2-1,-((ee.clientY-oe.top)/oe.height)*2+1)},Ie=()=>{const ee=new B;return m.current.raycaster.setFromCamera(Ae,U),m.current.raycaster.ray.intersectPlane(be,ee)?ee:null},N=ee=>{for(;ee&&ee.userData.uid===void 0;)ee=ee.parent;return ee},T=ee=>{for(;ee;){if(ee.userData.gizmo)return!0;ee=ee.parent}return!1},se=ee=>({u0:Math.min(ee.u0,ee.u1),u1:Math.max(ee.u0,ee.u1),v0:Math.min(ee.v0,ee.v1),v1:Math.max(ee.v0,ee.v1)}),ve=ee=>{const oe=se(ee),I=Math.max(.001,oe.u1-oe.u0),ae=Math.max(.001,oe.v1-oe.v0),q=Bc(ee.geom);q.multiply(new at().makeTranslation((oe.u0+oe.u1)/2,(oe.v0+oe.v1)/2,.06)),q.multiply(new at().makeScale(I,ae,1)),m.current.openPreview.matrix.copy(q),m.current.openPreview.visible=!0},Se=ee=>{var Me,We,Ke,vt;Be(ee);const oe=m.current.raycaster;oe.setFromCamera(Ae,U);const{items:I,selected:ae,dispatch:q}=f.current;if(f.current.visitMode){m.current.fp.look={x:ee.clientX,y:ee.clientY},(Me=pe.setPointerCapture)==null||Me.call(pe,ee.pointerId);return}if(f.current.openingMode){const Ve=m.current.wallMeshes||[],et=oe.intersectObjects(Ve.map(ot=>ot.mesh),!1);if(et.length){const ot=Ve.find(ut=>ut.mesh===et[0].object);if(ot){const ut=ot.geom,Lt=et[0].point,St=(Lt.x-ut.ox)*ut.dirx+(Lt.z-ut.oz)*ut.dirz;K.enabled=!1,m.current.drawOpen={ref:ot.ref,geom:ut,u0:St,v0:Lt.y,u1:St,v1:Lt.y,plane:new Ai().setFromNormalAndCoplanarPoint(new B(ut.nx,0,ut.nz),new B(ut.ox,0,ut.oz))},ve(m.current.drawOpen),(We=pe.setPointerCapture)==null||We.call(pe,ee.pointerId)}}return}if(m.current.gizmo.visible){const Ve=oe.intersectObject(m.current.gizmo,!0);if(Ve.length&&T(Ve[0].object)){const et=I.find(ut=>ut.uid===(ae==null?void 0:ae.uid)),ot=Ie();if(et&&ot){K.enabled=!1,m.current.rotate={uid:et.uid,cx:et.x,cz:et.z,startAng:Math.atan2(ot.z-et.z,ot.x-et.x),startRot:et.rot||0},(Ke=pe.setPointerCapture)==null||Ke.call(pe,ee.pointerId);return}}}const Z=oe.intersectObjects(m.current.furnitureGroup.children,!0);let ge=null;for(const Ve of Z){const et=N(Ve.object);if(et){ge=et;break}}if(ge){K.enabled=!1,I.find(et=>et.uid===ge.userData.uid),q({type:"select",sel:{type:"item",uid:ge.userData.uid}}),oo(8);const Ve=Ie();m.current.drag={uid:ge.userData.uid,grp:ge,offX:Ve?Ve.x-ge.position.x:0,offZ:Ve?Ve.z-ge.position.z:0},(vt=pe.setPointerCapture)==null||vt.call(pe,ee.pointerId)}else m.current.pending={x:ee.clientX,y:ee.clientY}},me=ee=>{Be(ee);const oe=m.current;if(oe.visit){const I=oe.fp.look;I&&(oe.fp.yaw-=(ee.clientX-I.x)*.005,oe.fp.pitch=Math.max(-1.2,Math.min(1.2,oe.fp.pitch-(ee.clientY-I.y)*.005)),I.x=ee.clientX,I.y=ee.clientY);return}if(oe.drawOpen){const I=oe.drawOpen;oe.raycaster.setFromCamera(Ae,U);const ae=new B;oe.raycaster.ray.intersectPlane(I.plane,ae)&&(I.u1=(ae.x-I.geom.ox)*I.geom.dirx+(ae.z-I.geom.oz)*I.geom.dirz,I.v1=ae.y,ve(I));return}if(oe.rotate){const I=Ie();if(!I)return;const ae=Math.atan2(I.z-oe.rotate.cz,I.x-oe.rotate.cx);let q=oe.rotate.startRot+(ae-oe.rotate.startAng)*180/Math.PI;q=(Math.round(q)%360+360)%360,f.current.dispatch({type:"update",sel:{type:"item",uid:oe.rotate.uid},patch:{rot:q},mergeKey:`rot3d:${oe.rotate.uid}`});return}if(oe.drag){const I=Ie();if(!I)return;f.current.dispatch({type:"update",sel:{type:"item",uid:oe.drag.uid},patch:{x:Mg(I.x-oe.drag.offX,.05),z:Mg(I.z-oe.drag.offZ,.05)},mergeKey:`mv3d:${oe.drag.uid}`})}},Fe=ee=>{var I,ae,q,Z,ge,Me,We,Ke,vt;const oe=m.current;if(oe.visit){oe.fp.look=null;try{(I=pe.releasePointerCapture)==null||I.call(pe,ee.pointerId)}catch{}return}if(oe.drawOpen){const Ve=oe.drawOpen;oe.drawOpen=null,oe.openPreview.visible=!1,K.enabled=!0;const et=se(Ve),ot=Ve.geom,ut=Ri(et.u0,.02,ot.length-.02),Lt=Ri(et.u1,.02,ot.length-.02)-ut;let St=Math.max(0,et.v0),Mi=Math.min(ot.height,et.v1)-St;if(Lt>.12&&Mi>.12){const kr=St<.18;kr&&(Mi+=St,St=0),f.current.dispatch({type:"addOpening",opening:{wall:Ve.ref,u:ut,v:St,w:Lt,h:Mi,kind:kr?"doorway":"window",shape:f.current.openShape||"rect"}}),f.current.dispatch({type:"openingMode",value:!1}),oo(12),(q=(ae=f.current).onOpenInspector)==null||q.call(ae)}try{(Z=pe.releasePointerCapture)==null||Z.call(pe,ee.pointerId)}catch{}return}if(oe.drag||oe.rotate)oe.drag=null,oe.rotate=null,K.enabled=!0;else if(oe.pending){if(Math.hypot(ee.clientX-oe.pending.x,ee.clientY-oe.pending.y)<5){Be(ee),oe.raycaster.setFromCamera(Ae,U);const Ve=oe.wallMeshes||[],et=Ve.length?oe.raycaster.intersectObjects(Ve.map(ot=>ot.mesh),!1):[];if(et.length){const ut=Ve.find(St=>St.mesh===et[0].object).ref,Lt=ut.kind==="room"?{type:"roomwall",uid:ut.uid,side:ut.side}:{type:"wall",uid:ut.uid};f.current.dispatch({type:"select",sel:Lt}),(Me=(ge=f.current).onOpenInspector)==null||Me.call(ge)}else if(f.current.selected)f.current.dispatch({type:"select",sel:null});else{const ot=Ie(),ut=ot&&f.current.rooms.find(Lt=>ot.x>=Lt.x&&ot.x<=Lt.x+Lt.w&&ot.z>=Lt.z&&ot.z<=Lt.z+Lt.d);ut&&(f.current.dispatch({type:"select",sel:{type:"room",uid:ut.uid}}),(Ke=(We=f.current).onOpenInspector)==null||Ke.call(We))}}oe.pending=null}try{(vt=pe.releasePointerCapture)==null||vt.call(pe,ee.pointerId)}catch{}};pe.addEventListener("pointerdown",Se,!0),pe.addEventListener("pointermove",me),window.addEventListener("pointerup",Fe);const F=ee=>oe=>{const I=m.current.fp.move,ae=oe.key.toLowerCase(),q=ee?1:0;if(ae==="w"||ae==="arrowup")I.f=q;else if(ae==="s"||ae==="arrowdown")I.b=q;else if(ae==="a"||ae==="arrowleft")I.l=q;else if(ae==="d"||ae==="arrowright")I.r=q;else return;m.current.visit&&oe.preventDefault()},G=F(!0),ce=F(!1);window.addEventListener("keydown",G),window.addEventListener("keyup",ce);let D;const j=new B,Y=new B,X=new B(0,1,0),re=()=>{const ee=m.current;if(ee.visit){const ae=ee.fp;U.quaternion.setFromEuler(new Si(ae.pitch,ae.yaw,0,"YXZ")),j.set(0,0,-1).applyQuaternion(U.quaternion),j.y=0,j.normalize(),Y.crossVectors(j,X).normalize();const q=ae.move.f-ae.move.b,Z=ae.move.r-ae.move.l;if(q||Z){let ge=U.position.x+(j.x*q+Y.x*Z)*.055,Me=U.position.z+(j.z*q+Y.z*Z)*.055;const We=.28;for(const Ke of ee.colliders||[]){const vt=(ge-Ke.ox)*Ke.dx+(Me-Ke.oz)*Ke.dz,Ve=Math.max(0,Math.min(Ke.len,vt)),et=Ke.ox+Ke.dx*Ve,ot=Ke.oz+Ke.dz*Ve,ut=ge-et,Lt=Me-ot,St=Math.hypot(ut,Lt);if(St<We){let Mi=!1;for(const[kr,Ga]of Ke.gaps)if(Ve>kr+.05&&Ve<Ga-.05){Mi=!0;break}Mi||(St>1e-4?(ge+=ut/St*(We-St),Me+=Lt/St*(We-St)):(ge+=Ke.nx*We,Me+=Ke.nz*We))}}U.position.x=ge,U.position.z=Me}U.position.y=1.6}else K.update();const oe=U.position;if(!ee.visit)for(const ae of m.current.walls){const q=(oe.x-ae.center.x)*ae.normal.x+(oe.z-ae.center.z)*ae.normal.z;!ae.hidden&&q>.1?ae.hidden=!0:ae.hidden&&q<-.1&&(ae.hidden=!1),ae.mesh.visible=!ae.hidden}if(ee.visit)for(const ae of m.current.walls)ae.hidden&&(ae.hidden=!1,ae.mesh.visible=!0);const I=M.current;if(I){const{items:ae,selected:q}=f.current,Z=(q==null?void 0:q.type)==="item"?ae.find(ge=>ge.uid===q.uid):null;if(Z&&!m.current.drag&&!m.current.rotate){const ge=Ti(Z.type),Me=xr(ge,Z),We=new B(Z.x,Me.h+.35,Z.z).project(U),Ke=H.domElement,vt=(We.x*.5+.5)*Ke.clientWidth,Ve=(-We.y*.5+.5)*Ke.clientHeight;We.z<1?(I.style.display="flex",I.style.left=`${vt}px`,I.style.top=`${Ve}px`):I.style.display="none"}else I.style.display="none"}J&&m.current.useComposer?J.render():H.render(k,U),D=requestAnimationFrame(re)};re();const xe=new ResizeObserver(()=>{const ee=C.clientWidth,oe=C.clientHeight;H.setSize(ee,oe),U.aspect=ee/oe,U.updateProjectionMatrix(),J==null||J.setSize(ee,oe)});return xe.observe(C),()=>{var ee,oe,I,ae,q,Z,ge;cancelAnimationFrame(D),xe.disconnect(),pe.removeEventListener("pointerdown",Se,!0),pe.removeEventListener("pointermove",me),window.removeEventListener("pointerup",Fe),window.removeEventListener("keydown",G),window.removeEventListener("keyup",ce),K.dispose(),Os(Te),Os(De),Os(Ue),He.geometry.dispose(),He.material.dispose(),(ee=m.current.openPreview)==null||ee.geometry.dispose(),(oe=m.current.openPreview)==null||oe.material.dispose(),m.current.woodCache.forEach(Me=>Me.dispose()),m.current.imgCache.forEach(Me=>Me.dispose()),m.current.roomTexList.forEach(Me=>Me.dispose()),(ae=(I=m.current.groundTex)==null?void 0:I.dispose)==null||ae.call(I),(Z=(q=m.current.envMap)==null?void 0:q.dispose)==null||Z.call(q),(ge=J==null?void 0:J.dispose)==null||ge.call(J),ne.dispose(),H.dispose(),H.domElement.parentNode===C&&C.removeChild(H.domElement)}},[]),Xe.useEffect(()=>{const C=m.current;if(!C.renderer)return;const z=Sg[u]||Sg.day;C.scene.background.set(z.bg),C.scene.environmentIntensity=z.env,C.renderer.toneMappingExposure=z.exposure,C.key.color.set(z.key[0]),C.key.intensity=z.key[1],C.fill.color.set(z.fill[0]),C.fill.intensity=z.fill[1],C.hemi.intensity=z.hemi,z.skyHemi&&C.hemi.color.set(z.skyHemi),z.grndHemi&&C.hemi.groundColor.set(z.grndHemi),C.ambient.intensity=z.amb,C.ground&&z.ground&&C.ground.material.color.set(z.ground)},[u]),Xe.useEffect(()=>{var ne;const C=m.current;if(!C.renderer)return;const z=d||"high",O=window.devicePixelRatio||1,H=z==="normal"?Math.min(O,1.25):z==="high"?Math.min(O,1.5):Math.min(O,2);C.renderer.setPixelRatio(H),(ne=C.composer)==null||ne.setPixelRatio(H);const k=z!=="normal";C.renderer.shadowMap.enabled=k,C.key.castShadow=k,C.gtao&&(C.gtao.enabled=z==="max"),C.useComposer=z==="max",C.renderer.shadowMap.needsUpdate=!0},[d]),Xe.useEffect(()=>{const C=m.current;if(!C.camera)return;if(C.visit=h,!h){C.controls.enabled=!0,C.colliders=[],A();return}C.controls.enabled=!1;let z=1/0,O=-1/0,H=-1/0;const k=(W,J)=>{z=Math.min(z,W),O=Math.max(O,W),H=Math.max(H,J)};for(const W of r)k(W.x,W.z),k(W.x+W.w,W.z+W.d);for(const W of s)k(W.x1,W.z1),k(W.x2,W.z2);isFinite(z)||(z=-2,O=2,H=2);const ne=(z+O)/2,U=[];let K=null;const Q=W=>{const J=yr(W,r,s);if(!J)return;const le=Eg(W,J,r,s,l),he=le.filter(Te=>Te.v<=.25&&Te.w>.5).map(Te=>[Math.max(0,Te.u),Math.min(J.length,Te.u+Te.w)]);U.push({ox:J.ox,oz:J.oz,dx:J.dirx,dz:J.dirz,len:J.length,nx:J.nx,nz:J.nz,gaps:he});for(const Te of le)if(!K&&(Te.kind==="doorway"||Te.v<=.25&&Te.w>.6)){const De=Te.u+Te.w/2;K={x:J.ox+J.dirx*De,z:J.oz+J.dirz*De,nx:J.nx,nz:J.nz}}};for(const W of r)for(const J of["n","e","s","w"]){const le={kind:"room",uid:W.uid,side:J};if(W.wallsOn&&W.wallsOn[J]===!1){if(!K){const he=yr(le,r,s);he&&(K={x:he.ox+he.dirx*he.length/2,z:he.oz+he.dirz*he.length/2,nx:he.nx,nz:he.nz})}continue}Q(le)}for(const W of s)Q({kind:"wall",uid:W.uid});C.colliders=U;let te,_e,Re;K?(te=K.x-K.nx*3,_e=K.z-K.nz*3,Re=Math.atan2(-K.nx,-K.nz)):(te=ne,_e=H+3.5,Re=0,r.length&&(e==null||e("No doorway — add a door or open a wall to walk inside"))),C.camera.position.set(te,1.6,_e),C.fp.yaw=Re,C.fp.pitch=0,C.fp.move={f:0,b:0,l:0,r:0},C.fp.look=null},[h]),Xe.useEffect(()=>{const C=m.current;if(!C.roomGroup)return;Os(C.roomGroup),C.roomGroup.clear(),C.walls=[],C.wallMeshes=[],C.floorMeshes=[],C.roomTexList.forEach(Q=>Q.dispose()),C.roomTexList=[];const z=new Bt({color:"#cfc7ba",roughness:.8}),O=new Bt({color:"#e8e3da",roughness:.95,side:xn}),H=new Bt({color:"#efe9df",roughness:.7,metalness:.03}),k=.1,ne=(Q,te)=>Eg(Q,te,r,s,l),U=(Q,te,_e,Re,W,J)=>{const le=ne(Q,te),he=CC(te,W,Re,le),Te=new $e(he,_e);Te.castShadow=!0,Te.receiveShadow=!0,C.roomGroup.add(Te),C.wallMeshes.push({mesh:Te,ref:Q,geom:te}),J&&C.walls.push({mesh:Te,normal:new B(-te.nx,0,-te.nz),center:new B(te.ox+te.dirx*te.length/2,0,te.oz+te.dirz*te.length/2),hidden:!1});for(const De of le)RC(C.roomGroup,te,De,W,H)},K=(Q,te)=>{const _e=te.length,Re=ne(Q,te).filter(le=>le.v<=.06).map(le=>[Math.max(0,le.u-.05),Math.min(_e,le.u+le.w+.05)]).filter(([le,he])=>he>le);let W=[[k/2,_e-k/2]];for(const[le,he]of Re){const Te=[];for(const[De,Ue]of W){if(he<=De||le>=Ue){Te.push([De,Ue]);continue}le>De&&Te.push([De,le]),he<Ue&&Te.push([he,Ue])}W=Te}const J=new Vn;J.matrixAutoUpdate=!1,J.matrix.copy(Bc(te));for(const[le,he]of W){if(he-le<.02)continue;const Te=new $e(new ni(he-le,.09,.04),z);Te.position.set((le+he)/2,.045,k/2+.02),J.add(Te)}C.roomGroup.add(J)};for(const Q of r){const{x:te,z:_e,w:Re,d:W,height:J}=Q,le=te+Re/2,he=_e+W/2,Te=Q.floorTex||(Q.floorColor?void 0:"wood:oak"),De=P(Te,Q.floorColor,"#b08a5e",Re,W,1.5,{roughness:.65,metalness:.02},Q.floorScale||1),Ue=new $e(new Ni(Re,W),De);Ue.rotation.x=-Math.PI/2,Ue.position.set(le,0,he),Ue.receiveShadow=!0,Ue.userData.roomUid=Q.uid,C.roomGroup.add(Ue),C.floorMeshes.push(Ue);const He=P(Q.wallTex,Q.wallColor,"#e8e3da",Re,J,1.2,{roughness:.95,side:xn}),fe=L=>!Q.wallsOn||Q.wallsOn[L]!==!1;for(const L of["n","e","s","w"]){if(!fe(L))continue;const we={kind:"room",uid:Q.uid,side:L},be=yr(we,r,s);be&&(U(we,be,He,k/2,k,!0),K(we,be))}}for(const Q of s){if(Math.hypot(Q.x2-Q.x1,Q.z2-Q.z1)<.001)continue;const _e={kind:"wall",uid:Q.uid},Re=yr(_e,r,s);Re&&U(_e,Re,O,0,Q.thickness,!1)}!C.framed&&(r.length||s.length||o.length)&&(A(),C.framed=!0)},[r,s,l,p]),Xe.useEffect(()=>{const C=m.current;if(!C.furnitureGroup)return;const z=C.itemMap,O=ne=>{C.furnitureGroup.remove(ne.group),Os(ne.group)},H=new Set;for(const ne of o){H.add(ne.uid);let U=z.get(ne.uid);if(!U||U.type!==ne.type||U.color!==ne.color){U&&O(U);const Q=TC(ne);C.furnitureGroup.add(Q),U={group:Q,type:ne.type,color:ne.color},z.set(ne.uid,U)}U.group.position.set(ne.x,0,ne.z),U.group.rotation.y=-((ne.rot||0)*Math.PI)/180;const K=ne.scale||{};U.group.scale.set(K.x??1,K.y??1,K.z??1)}for(const[ne,U]of z)H.has(ne)||(O(U),z.delete(ne));const k=(c==null?void 0:c.type)==="item"?o.find(ne=>ne.uid===c.uid):null;if(k){const ne=Ti(k.type),U=xr(ne,k),K=Math.max(U.w,U.d)/2*1.18+.12;C.ring.scale.setScalar(K/.5),C.ring.position.set(k.x,.03,k.z),C.ring.visible=!0,C.gizmo.scale.setScalar(K/.5),C.gizmo.position.set(k.x,.04,k.z),C.gizmo.visible=!0}else C.ring.visible=!1,C.gizmo.visible=!1},[o,c]),Xe.useEffect(()=>{const C=m.current;if(!C.builtinGroup)return;Os(C.builtinGroup),C.builtinGroup.clear();const z=.03;for(const O of a){const H=yr(O.wall,r,s);if(!H)continue;const k=g(O.tex),ne=x(O.tex),U=k?new Bt({map:k,normalMap:ne||null,roughness:.6,metalness:.04}):new Bt({color:new Je(O.color||"#c7ad84"),roughness:.62,metalness:.04});if(O.kind==="board"){const le=(O.u1+O.u2)/2,he=(O.v1+O.v2)/2,Te=O.u2-O.u1,De=O.v2-O.v1,Ue=Math.hypot(Te,De)||1e-6,He=Te/Ue,fe=De/Ue,L=new B(H.dirx*He,fe,H.dirz*He),we=new B(-H.dirx*fe,He,-H.dirz*fe),be=new B(H.nx,0,H.nz),pe=new at().makeBasis(L,we,be);pe.setPosition(H.ox+H.dirx*le+H.nx*(O.depth/2),he,H.oz+H.dirz*le+H.nz*(O.depth/2));const Ae=new $e(new ni(Ue,O.thickness||.05,O.depth||.04),U);Ae.castShadow=!0,Ae.receiveShadow=!0,Ae.matrixAutoUpdate=!1,Ae.matrix.copy(pe),C.builtinGroup.add(Ae);continue}const K=new at,Q=new B(H.dirx,0,H.dirz),te=new B(0,1,0),_e=new B(H.nx,0,H.nz);K.makeBasis(Q,te,_e);const Re=O.u+O.w/2;K.setPosition(H.ox+H.dirx*Re+H.nx*(O.depth/2),O.v+O.h/2,H.oz+H.dirz*Re+H.nz*(O.depth/2));const W=new Vn;W.matrixAutoUpdate=!1,W.matrix.copy(K);const J=(le,he,Te,De,Ue,He)=>{const fe=new $e(new ni(le,he,Te),U);fe.position.set(De,Ue,He),fe.castShadow=!0,fe.receiveShadow=!0,W.add(fe)};O.kind==="cubby"?(J(O.w,O.h,z,0,0,-O.depth/2+z/2),J(O.w,z,O.depth,0,O.h/2-z/2,0),J(O.w,z,O.depth,0,-O.h/2+z/2,0),J(z,O.h,O.depth,-O.w/2+z/2,0,0),J(z,O.h,O.depth,O.w/2-z/2,0,0)):J(O.w,O.h,O.depth,0,0,0),C.builtinGroup.add(W)}},[a,r,s,p]);function A(){const C=m.current;if(!C.camera)return;const{rooms:z,walls:O,items:H}=f.current;let k=1/0,ne=-1/0,U=1/0,K=-1/0,Q=2.7;const te=(le,he)=>{k=Math.min(k,le),ne=Math.max(ne,le),U=Math.min(U,he),K=Math.max(K,he)};for(const le of z)te(le.x,le.z),te(le.x+le.w,le.z+le.d),Q=Math.max(Q,le.height);for(const le of O)te(le.x1,le.z1),te(le.x2,le.z2),Q=Math.max(Q,le.height);for(const le of H)te(le.x,le.z);isFinite(k)||(k=-2,ne=2,U=-2,K=2);const _e=(k+ne)/2,Re=(U+K)/2,W=Math.max(ne-k,K-U,2),J=W*1.1+4;C.camera.position.set(_e+W*.45,W*.8+3,Re+J),C.controls.target.set(_e,Q*.3,Re),C.controls.update()}const E=(c==null?void 0:c.type)==="item"?o.find(C=>C.uid===c.uid):null,b=c&&c.type!=="roomwall",V=c?E?((w=Ti(E.type))==null?void 0:w.name)||"Piece":c.type==="room"?"Room":c.type==="wall"||c.type==="roomwall"?"Wall":c.type==="opening"?"Opening":c.type==="builtin"?"Built-in":"Selection":null,_=C=>({onPointerDown:z=>{z.preventDefault(),m.current.fp.move[C]=1},onPointerUp:()=>{m.current.fp.move[C]=0},onPointerLeave:()=>{m.current.fp.move[C]=0},onPointerCancel:()=>{m.current.fp.move[C]=0}});return v.jsxs("div",{className:"scene3d",ref:y,children:[v.jsx("button",{className:"recenter",onClick:A,"aria-label":"Recenter view",children:v.jsx(Xx,{size:20})}),v.jsx("button",{ref:M,style:{display:"none"},"aria-hidden":"true"}),h&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"visit-hint",children:"Drag to look · pad or WASD to walk"}),v.jsx("button",{className:"visit-exit",onClick:()=>i({type:"visitMode",value:!1}),children:"Exit walk-through"}),v.jsxs("div",{className:"visit-pad",children:[v.jsx("button",{className:"vp up",..._("f"),"aria-label":"Forward",children:"▲"}),v.jsx("button",{className:"vp left",..._("l"),"aria-label":"Left",children:"◀"}),v.jsx("button",{className:"vp right",..._("r"),"aria-label":"Right",children:"▶"}),v.jsx("button",{className:"vp down",..._("b"),"aria-label":"Back",children:"▼"})]})]}),c&&v.jsxs("div",{className:"edit-bar",onPointerDown:C=>C.stopPropagation(),onPointerUp:C=>C.stopPropagation(),children:[v.jsx("span",{className:"edit-bar-name",children:V}),v.jsx("button",{onClick:()=>t==null?void 0:t(),children:"Edit"}),E&&v.jsx("button",{onClick:()=>i({type:"update",sel:c,patch:{rot:((E.rot||0)+90)%360}}),children:"Rotate"}),b&&v.jsx("button",{onClick:()=>i({type:"duplicate",sel:c}),children:"Duplicate"}),b?v.jsx("button",{className:"danger",onClick:()=>i({type:"remove",sel:c}),children:"Delete"}):v.jsx("button",{onClick:()=>t==null?void 0:t(),children:"Open / Close"})]})]})}function Vi({icon:t,label:e,active:n,accent:i,onClick:r}){return v.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,v.jsx("span",{children:e})]})}function NC({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=Ao(),{view:r,tool:s,ambiance:o,openingMode:a,openShape:l}=n,c=[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]];return v.jsxs("aside",{className:"rail",children:[v.jsxs("div",{className:"rail-group",children:[r==="2d"&&v.jsxs(v.Fragment,{children:[v.jsx(Vi,{icon:v.jsx(o0,{size:20}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),v.jsx(Vi,{icon:v.jsx(GS,{size:20}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),v.jsx(Vi,{icon:v.jsx(WS,{size:20}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})})]}),r==="3d"&&v.jsxs(v.Fragment,{children:[v.jsx(Vi,{icon:v.jsx(o0,{size:20}),label:"Select",active:!a,onClick:()=>i({type:"openingMode",value:!1})}),v.jsx(Vi,{icon:v.jsx(FS,{size:20}),label:"Opening",active:a,onClick:()=>i({type:"openingMode",value:!a})}),a&&v.jsx("div",{className:"rail-shapes",children:c.map(([u,d])=>v.jsx("button",{className:`rail-shape ${(l||"rect")===u?"active":""}`,onClick:()=>i({type:"openShape",value:u}),children:d},u))}),v.jsx("div",{className:"rail-sep"}),v.jsx(Vi,{icon:v.jsx(kS,{size:20}),label:"Visit",active:n.visitMode,onClick:()=>i({type:"visitMode",value:!n.visitMode})}),v.jsx("div",{className:"rail-sep"}),["day","night"].map(u=>v.jsx(Vi,{icon:v.jsx(VS,{size:20}),label:u[0].toUpperCase()+u.slice(1),active:o===u,onClick:()=>i({type:"ambiance",value:u})},u))]})]}),v.jsxs("div",{className:"rail-group bottom",children:[v.jsx(Vi,{icon:v.jsx(IS,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),v.jsx(Vi,{icon:v.jsx(OS,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}const yf=kx.map(t=>({key:t.type,type:t.type,name:t.name,category:t.category,proc:t})),IC=["Seating","Tables","Bedroom","Storage","Kitchen","Appliances","Bathroom","Office","Decor"],UC=["All",...IC.filter(t=>yf.some(e=>e.category===t))];function OC({item:t}){const e=t.w/t.d;let n=86,i=n/e;return i>60&&(i=60,n=i*e),v.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:v.jsx(jx,{item:t,wpx:n,dpx:i})})}function zC({onPick:t}){const[e,n]=Xe.useState("All"),[i,r]=Xe.useState(""),s=Xe.useMemo(()=>{const o=i.trim().toLowerCase();return yf.filter(a=>(e==="All"||a.category===e)&&(!o||a.name.toLowerCase().includes(o)))},[e,i]);return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"sheet-head",children:v.jsxs("div",{children:[v.jsx("h2",{children:"Library"}),v.jsxs("div",{className:"sub",children:[yf.length," pieces · tap to place"]})]})}),v.jsx("div",{className:"lib-search",children:v.jsx("input",{type:"search",value:i,onChange:o=>r(o.target.value),placeholder:"Search furniture, appliances…","aria-label":"Search library"})}),v.jsx("div",{className:"cats",children:UC.map(o=>v.jsx("button",{className:`chip ${e===o?"active":""}`,onClick:()=>n(o),children:o},o))}),v.jsxs("div",{className:"lib-grid",children:[s.map(o=>v.jsxs("button",{className:"lib-card",onClick:()=>t(o.type),title:o.name,children:[v.jsx("div",{className:"lib-thumb",children:v.jsx(OC,{item:o.proc})}),v.jsx("div",{className:"lib-name",children:o.name})]},o.key)),s.length===0&&v.jsxs("div",{className:"panel-empty",children:["No matches for “",i,"”."]})]})]})}const FC=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function Xo({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=Wp(),s=Xe.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var h;const u=(h=c.target.files)==null?void 0:h[0];if(c.target.value="",!u)return;const d=await r(u);e({color:"#ffffff",tex:`img:${d.id}`})};return v.jsxs("div",{className:"finish",children:[v.jsxs("div",{className:"finish-row",children:[SS.map(c=>v.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),v.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:v.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"finish-label",children:["Materials ",v.jsx("span",{className:"finish-by",children:"Poly Haven · CC0"})]}),v.jsx("div",{className:"finish-row",children:Wx.map(c=>v.jsx("button",{className:`swatch img ${a===`mat:${c.id}`?"active":""}`,style:{backgroundImage:`url(${ca(c.id)})`},onClick:()=>e({color:c.color,tex:`mat:${c.id}`}),"aria-label":c.label,title:c.label},c.id))}),v.jsx("div",{className:"finish-label",children:"Wood"}),v.jsx("div",{className:"finish-row",children:FC.map(c=>v.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),v.jsx("div",{className:"finish-label",children:"Your images"}),v.jsxs("div",{className:"finish-row",children:[i.map(c=>v.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),v.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),v.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function kn({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:t}),v.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),v.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function bd({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=d=>Math.max(n,Math.min(i,d)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,u=(d,h)=>s(o((d*12+h)*.0254));return v.jsxs("div",{className:"row measure-row",children:[v.jsxs("div",{className:"measure-head",children:[v.jsx("div",{className:"label",children:t}),v.jsx("div",{className:"measure-inputs",children:r==="ft"?v.jsxs(v.Fragment,{children:[v.jsx("input",{type:"number",value:l,min:0,step:1,onChange:d=>u(Math.max(0,Math.floor(Number(d.target.value)||0)),c)}),v.jsx("span",{className:"u",children:"ft"}),v.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:d=>u(l,Number(d.target.value)||0)}),v.jsx("span",{className:"u",children:"in"})]}):v.jsxs(v.Fragment,{children:[v.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:d=>s(o(Number(d.target.value)||n))}),v.jsx("span",{className:"u",children:"m"})]})})]}),v.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:d=>s(Number(d.target.value))})]})}function kC({onClose:t,onFlash:e}){const{state:n,dispatch:i}=Ao(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c,sketches:u,openings:d}=n;if(!r)return null;const h=r,p=(g,x)=>i({type:"update",sel:h,patch:g,mergeKey:x}),y=()=>{i({type:"remove",sel:h}),e==null||e("Removed"),t()},M=()=>{i({type:"duplicate",sel:h}),e==null||e("Duplicated"),t()};if(h.type==="roomwall"){const g=a.find(A=>A.uid===h.uid);if(!g)return null;const x={n:"North",e:"East",s:"South",w:"West"},S=!g.wallsOn||g.wallsOn[h.side]!==!1,P=()=>i({type:"update",sel:{type:"room",uid:g.uid},patch:{wallsOn:{...g.wallsOn||{},[h.side]:!S}}});return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:"Wall section",sub:`${x[h.side]} wall of this room`}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Status"}),v.jsx("div",{className:"val",children:S?"Closed":"Open (doorway)"})]}),v.jsx("div",{className:"btn-row",children:S?v.jsxs("button",{className:"btn danger",onClick:P,children:[v.jsx(or,{size:18})," Remove wall"]}):v.jsx("button",{className:"btn accent",onClick:P,children:"Add wall back"})})]})]})}if(h.type==="item"){const g=o.find(E=>E.uid===h.uid),x=g&&Ti(g.type);if(!g||!x)return null;const S=xr(x,g),P=g.scale||{},A=Math.round(((P.x??1)+(P.z??1))/2*100);return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:x.name,sub:`${rt(S.w,s)} × ${rt(S.d,s)} × ${rt(S.h,s)}`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Colour"}),v.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:v.jsx(Xo,{value:{color:g.color||x.color},allowTexture:!1,onChange:E=>p({color:E.color})})})]}),v.jsx(kn,{label:"Size",value:A,min:30,max:300,step:1,onChange:E=>p({scale:{x:E/100,y:E/100,z:E/100}},`sz:${g.uid}`),display:`${A}%`}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Footprint"}),v.jsxs("div",{className:"val",children:[rt(S.w,s)," × ",rt(S.d,s)]})]}),v.jsx(kn,{label:"Rotation",value:g.rot||0,min:0,max:359,step:1,onChange:E=>p({rot:E},`rot:${g.uid}`),display:`${Math.round(g.rot||0)}°`}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Quick turn"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(E=>v.jsxs("button",{className:"chip",style:(g.rot||0)===E?Yo:void 0,onClick:()=>p({rot:E}),children:[E,"°"]},E))})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:()=>p({rot:((g.rot||0)+90)%360}),children:[v.jsx(US,{size:18})," Rotate"]}),v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]})]}),v.jsxs("div",{className:"btn-row",children:[v.jsx("button",{className:"btn",onClick:()=>p({scale:{x:1,y:1,z:1}}),children:"Reset size"}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}if(h.type==="room"){const g=a.find(S=>S.uid===h.uid);if(!g)return null;const x=g.w*g.d;return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:g.name||"Room",sub:`${rt(g.w,s)} × ${rt(g.d,s)}`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Name"}),v.jsx("input",{className:"name-input",type:"text",value:g.name||"",placeholder:"Room",onChange:S=>p({name:S.target.value}),style:{marginLeft:"auto",maxWidth:"64%",textAlign:"right"}})]}),v.jsx(bd,{label:"Width",m:g.w,min:.5,max:40,units:s,onChange:S=>p({w:S},`rw:${g.uid}`)}),v.jsx(bd,{label:"Depth",m:g.d,min:.5,max:40,units:s,onChange:S=>p({d:S},`rd:${g.uid}`)}),v.jsx(bd,{label:"Wall height",m:g.height,min:1.5,max:6,units:s,onChange:S=>p({height:S},`rh:${g.uid}`)}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Floor area"}),v.jsx("div",{className:"val",children:s==="m"?`${x.toFixed(1)} m²`:`${Math.round(x*10.7639)} ft²`})]}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Wall sides"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([S,P])=>{const A=!g.wallsOn||g.wallsOn[S]!==!1;return v.jsx("button",{className:"chip",style:A?Yo:void 0,onClick:()=>p({wallsOn:{...g.wallsOn||{},[S]:!A}}),children:P},S)})})]}),v.jsxs("div",{className:"stack-row",children:[v.jsx("div",{className:"label",children:"Flooring"}),v.jsx(Xo,{value:{color:g.floorColor,tex:g.floorTex},onChange:S=>p({floorColor:S.color,floorTex:S.tex})}),v.jsx(kn,{label:"Pattern scale",value:g.floorScale||1,min:.3,max:4,step:.1,onChange:S=>p({floorScale:S},`fs:${g.uid}`),display:`${Math.round((g.floorScale||1)*100)}%`}),a.length>1&&v.jsx("button",{className:"btn",style:{marginTop:2},onClick:()=>{i({type:"floorAll",patch:{floorColor:g.floorColor,floorTex:g.floorTex,floorScale:g.floorScale||1}}),e==null||e("Flooring applied to all rooms")},children:"Apply flooring to whole house"})]}),v.jsxs("div",{className:"stack-row",children:[v.jsx("div",{className:"label",children:"Wall finish"}),v.jsx(Xo,{value:{color:g.wallColor,tex:g.wallTex},onChange:S=>p({wallColor:S.color,wallTex:S.tex})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}if(h.type==="builtin"){const g=c.find(x=>x.uid===h.uid);if(!g)return null;if(g.kind==="board"){const x=Math.hypot(g.u2-g.u1,g.v2-g.v1);return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:"Board",sub:`${rt(x,s)} long`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Length"}),v.jsx("div",{className:"val",children:rt(x,s)})]}),v.jsx(kn,{label:"Width",value:g.thickness,min:.01,max:.4,step:.005,onChange:S=>p({thickness:S},`bt:${g.uid}`),display:rt(g.thickness,s)}),v.jsx(kn,{label:"Depth",value:g.depth,min:.02,max:.6,step:.01,onChange:S=>p({depth:S},`bd:${g.uid}`),display:rt(g.depth,s)}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Finish"}),v.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:v.jsx(Xo,{value:{color:g.color,tex:g.tex},onChange:S=>p({color:S.color,tex:S.tex})})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:"Built-in",sub:`${rt(g.w,s)} × ${rt(g.h,s)} × ${rt(g.depth,s)} deep`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Style"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([x,S])=>v.jsx("button",{className:"chip",style:g.kind===x?Yo:void 0,onClick:()=>p({kind:x}),children:S},x))})]}),v.jsx(kn,{label:"Width",value:g.w,min:.1,max:12,step:.05,onChange:x=>p({w:x},`bw:${g.uid}`),display:rt(g.w,s)}),v.jsx(kn,{label:"Height",value:g.h,min:.1,max:6,step:.05,onChange:x=>p({h:x},`bh:${g.uid}`),display:rt(g.h,s)}),v.jsx(kn,{label:"Depth",value:g.depth,min:.05,max:3,step:.05,onChange:x=>p({depth:x},`bd:${g.uid}`),display:rt(g.depth,s)}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Finish"}),v.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:v.jsx(Xo,{value:{color:g.color,tex:g.tex},onChange:x=>p({color:x.color,tex:x.tex})})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}if(h.type==="opening"){const g=d.find(P=>P.uid===h.uid);if(!g)return null;const x={doorway:"Doorway",window:"Window",passthrough:"Pass-through"},S=P=>{p(P==="doorway"?{kind:P,v:0}:P==="window"?{kind:P,v:g.v<.05?.9:g.v}:{kind:P})};return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:x[g.kind]||"Opening",sub:`${rt(g.w,s)} × ${rt(g.h,s)}`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Type"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["doorway","Door"],["window","Window"],["passthrough","Open"]].map(([P,A])=>v.jsx("button",{className:"chip",style:g.kind===P?Yo:void 0,onClick:()=>S(P),children:A},P))})]}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Shape"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]].map(([P,A])=>v.jsx("button",{className:"chip",style:(g.shape||"rect")===P?Yo:void 0,onClick:()=>p({shape:P}),children:A},P))})]}),v.jsx(kn,{label:"Width",value:g.w,min:.3,max:6,step:.05,onChange:P=>p({w:P},`ow:${g.uid}`),display:rt(g.w,s)}),v.jsx(kn,{label:"Height",value:g.h,min:.3,max:5,step:.05,onChange:P=>p({h:P},`oh:${g.uid}`),display:rt(g.h,s)}),g.kind!=="doorway"&&v.jsx(kn,{label:"Sill height",value:g.v,min:0,max:3,step:.05,onChange:P=>p({v:P},`ov:${g.uid}`),display:rt(g.v,s)}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Top of opening"}),v.jsx("div",{className:"val",children:rt(g.v+g.h,s)})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}if(h.type==="sketch"){const g=u.find(E=>E.uid===h.uid);if(!g)return null;const x=g.pts,S=g.closed?x.length:x.length-1;let P=0;for(let E=0;E<S;E++){const b=x[E],V=x[(E+1)%x.length];P+=Math.hypot(V.x-b.x,V.z-b.z)}let A=0;if(g.closed&&x.length>=3){for(let E=0,b=x.length-1;E<x.length;b=E++)A+=(x[b].x+x[E].x)*(x[b].z-x[E].z);A=Math.abs(A/2)}return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:"Sketch",sub:`${g.closed?"Closed shape":"Open outline"} · ${x.length} points`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Perimeter"}),v.jsx("div",{className:"val",children:rt(P,s)})]}),g.closed&&v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Area"}),v.jsx("div",{className:"val",children:PS(A,s)})]}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"Edges"}),v.jsx("div",{className:"val",style:{marginLeft:"auto",textAlign:"right",lineHeight:1.6},children:Array.from({length:S},(E,b)=>{const V=x[b],_=x[(b+1)%x.length];return v.jsx("div",{children:rt(Math.hypot(_.x-V.x,_.z-V.z),s)},b)})})]}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}const m=l.find(g=>g.uid===h.uid);if(!m)return null;const f=Math.hypot(m.x2-m.x1,m.z2-m.z1);return v.jsxs(v.Fragment,{children:[v.jsx(fr,{title:"Wall",sub:`${rt(f,s)} long`,onClose:t}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Length"}),v.jsx("div",{className:"val",children:rt(f,s)})]}),v.jsx(kn,{label:"Height",value:m.height,min:1.5,max:6,step:.1,onChange:g=>p({height:g},`wh:${m.uid}`),display:rt(m.height,s)}),v.jsx(kn,{label:"Thickness",value:m.thickness,min:.05,max:.4,step:.01,onChange:g=>p({thickness:g},`wt:${m.uid}`),display:rt(m.thickness,s)}),v.jsxs("div",{className:"btn-row",children:[v.jsxs("button",{className:"btn",onClick:M,children:[v.jsx(Hr,{size:18})," Duplicate"]}),v.jsxs("button",{className:"btn danger",onClick:y,children:[v.jsx(or,{size:18})," Delete"]})]})]})]})}const Yo={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function fr({title:t,sub:e}){return v.jsx("div",{className:"sheet-head",children:v.jsxs("div",{children:[v.jsx("h2",{children:t}),v.jsx("div",{className:"sub",children:e})]})})}function BC({onFlash:t,onClose:e}){const{state:n,dispatch:i}=Ao(),{units:r,quality:s,defaultHeight:o,rooms:a,walls:l,items:c}=n,{assets:u,addAsset:d,removeAsset:h}=Wp(),p=Xe.useRef(null),y=async M=>{const m=[...M.target.files||[]];M.target.value="";for(const f of m)await d(f);m.length&&(t==null||t("Image added"))};return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"sheet-head",children:v.jsxs("div",{children:[v.jsx("h2",{children:"Settings"}),v.jsxs("div",{className:"sub",children:[a.length," rooms · ",l.length," walls · ",c.length," items"]})]})}),v.jsxs("div",{className:"insp",children:[v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Units"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([M,m])=>v.jsx("button",{className:"chip",style:r===M?Tg:void 0,onClick:()=>i({type:"units",value:M}),children:m},M))})]}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"Graphics"}),v.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["normal","Normal"],["high","High"],["max","Max"]].map(([M,m])=>v.jsx("button",{className:"chip",style:(s||"high")===M?Tg:void 0,onClick:()=>i({type:"quality",value:M}),children:m},M))})]}),v.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:v.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Lower this if 3D feels slow on your device. Normal turns off shadows & effects; Max adds ambient occlusion."})}),v.jsxs("div",{className:"row",children:[v.jsx("div",{className:"label",children:"New wall height"}),v.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:o,onChange:M=>i({type:"defaultHeight",value:Number(M.target.value)})}),v.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:rt(o,r)})]}),v.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:v.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),v.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[v.jsx("div",{className:"label",children:"My images"}),v.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[u.map(M=>v.jsxs("div",{className:"asset-tile",children:[v.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${M.dataUrl})`}}),v.jsx("button",{className:"asset-del",onClick:()=>h(M.id),"aria-label":"Delete image",children:"×"})]},M.id)),v.jsx("button",{className:"swatch upload",onClick:()=>{var M;return(M=p.current)==null?void 0:M.click()},"aria-label":"Upload image",children:"+"}),v.jsx("input",{ref:p,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:y})]})]}),v.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:v.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),v.jsxs("div",{className:"btn-row",children:[v.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),v.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const Tg={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function HC({kind:t,onClose:e,onFlash:n,onPick:i}){return v.jsxs("aside",{className:"panel",children:[v.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:v.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:v.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),v.jsxs("div",{className:"panel-body",children:[t==="catalog"&&v.jsx(zC,{onPick:i}),t==="settings"&&v.jsx(BC,{onFlash:n,onClose:e}),t==="inspector"&&v.jsx(kC,{onClose:e,onFlash:n})]})]})}const VC={cozy:.85,standard:1,spacious:1.18};function GC({bedrooms:t=2,bathrooms:e=1,size:n="standard"}={}){const i=VC[n]||1,r=[{name:"Living Room",w:5,d:4.2,tex:"wood:oak"},{name:"Kitchen",w:3.6,d:3.4,tex:"wood:birch"}];for(let d=0;d<t;d++)r.push({name:t>1?`Bedroom ${d+1}`:"Bedroom",w:3.6,d:3.4,tex:"wood:oak"});for(let d=0;d<e;d++)r.push({name:e>1?`Bath ${d+1}`:"Bathroom",w:2.4,d:2.2,color:"#d4d8dd"});r.forEach(d=>{d.w=+(d.w*i).toFixed(2),d.d=+(d.d*i).toFixed(2)});const s=r.reduce((d,h)=>d+h.w*h.d,0),o=Math.sqrt(s)*1.6,a=[];let l=0,c=0,u=0;for(const d of r)l>0&&l+d.w>o&&(c=+(c+u).toFixed(2),l=0,u=0),a.push({name:d.name,x:+l.toFixed(2),z:c,w:d.w,d:d.d,height:2.7,floorTex:d.tex,floorColor:d.color}),l=+(l+d.w).toFixed(2),u=Math.max(u,d.d);return a}function Ag({label:t,value:e,min:n,max:i,onChange:r}){return v.jsxs("div",{className:"gen-row",children:[v.jsx("span",{children:t}),v.jsxs("div",{className:"gen-step",children:[v.jsx("button",{onClick:()=>r(Math.max(n,e-1)),"aria-label":`Fewer ${t}`,children:"−"}),v.jsx("b",{children:e}),v.jsx("button",{onClick:()=>r(Math.min(i,e+1)),"aria-label":`More ${t}`,children:"+"})]})]})}function WC({onBlank:t,onGenerate:e}){const[n,i]=Xe.useState("home"),[r,s]=Xe.useState(2),[o,a]=Xe.useState(1),[l,c]=Xe.useState("standard");return v.jsx("div",{className:"start-scrim",children:v.jsxs("div",{className:"start-card",children:[v.jsxs("div",{className:"start-brand",children:[v.jsx("div",{className:"logo",children:v.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 11 12 4l9 7"}),v.jsx("path",{d:"M5 10v9h14v-9"})]})}),v.jsxs("div",{children:[v.jsx("h1",{children:"Honeycutt Room Studio"}),v.jsx("p",{children:"Design your space in 2D & 3D"})]})]}),n==="home"?v.jsxs("div",{className:"start-actions",children:[v.jsxs("button",{className:"start-btn primary",onClick:t,children:[v.jsx("b",{children:"Start a blank project"}),v.jsx("span",{children:"Draw rooms and walls from scratch"})]}),v.jsxs("button",{className:"start-btn",onClick:()=>i("gen"),children:[v.jsx("b",{children:"Generate a house"}),v.jsx("span",{children:"Auto-build a layout by rooms & size"})]})]}):v.jsxs("div",{className:"gen-form",children:[v.jsx(Ag,{label:"Bedrooms",value:r,min:1,max:6,onChange:s}),v.jsx(Ag,{label:"Bathrooms",value:o,min:1,max:4,onChange:a}),v.jsxs("div",{className:"gen-row",children:[v.jsx("span",{children:"Size"}),v.jsx("div",{className:"gen-sizes",children:[["cozy","Cozy"],["standard","Standard"],["spacious","Spacious"]].map(([u,d])=>v.jsx("button",{className:`chip ${l===u?"active":""}`,onClick:()=>c(u),children:d},u))})]}),v.jsxs("div",{className:"gen-buttons",children:[v.jsx("button",{className:"start-btn",onClick:()=>i("home"),children:"Back"}),v.jsx("button",{className:"start-btn primary",onClick:()=>e(GC({bedrooms:r,bathrooms:o,size:l})),children:v.jsx("b",{children:"Build it"})})]})]})]})})}function jC(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=Ao(),{view:r,selected:s,rooms:o,walls:a,items:l}=t,[c,u]=Xe.useState(null),[d,h]=Xe.useState(null),p=o.length===0&&a.length===0&&l.length===0,[y,M]=Xe.useState(p),m=Xe.useCallback(_=>h({msg:_,t:Date.now()}),[]);Xe.useEffect(()=>{if(!d)return;const _=setTimeout(()=>h(null),1600);return()=>clearTimeout(_)},[d]);let f=c||(s&&r!=="3d"?"inspector":null);f==="inspector"&&!s&&(f=null);const g=_=>e({type:"view",view:_}),x=_=>u(w=>w===_?null:_),S=()=>{u(null),r!=="3d"&&e({type:"select",sel:null})},P=()=>{e({type:"reset"}),u(null),M(!0)},A=()=>{M(!1),m("Blank project — pick Room to start")},E=_=>{e({type:"loadRooms",rooms:_}),M(!1),e({type:"view",view:"2d"}),m("House generated — tap a room to edit")},b=_=>{let w=0,C=0;const z=(s==null?void 0:s.type)==="room"&&o.find(O=>O.uid===s.uid);if(z)w=z.x+z.w/2,C=z.z+z.d/2;else if(o.length){const O=o[o.length-1];w=O.x+O.w/2,C=O.z+O.d/2}e({type:"addItem",kind:_,x:w,z:C}),u(null),oo(10),m("Added — drag to position")},V=async()=>{try{let _;if(r==="3d"){const w=document.querySelector(".scene3d canvas");if(!w)return;_=w.toDataURL("image/png")}else{const w=document.querySelector(".editor2d svg");if(!w)return;_=await XC(w)}await YC(_,`honeycutt-room-${Date.now()}.png`),m("Image saved")}catch{m("Could not export")}};return v.jsxs("div",{className:"app",children:[v.jsxs("header",{className:"topbar",children:[v.jsxs("div",{className:"brand",children:[v.jsx("div",{className:"logo",children:v.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 11 12 4l9 7"}),v.jsx("path",{d:"M5 10v9h14v-9"})]})}),v.jsxs("div",{className:"title",children:[v.jsx("b",{children:"Honeycutt"}),v.jsx("span",{children:"Room Studio"})]})]}),v.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[v.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>g("2d"),"aria-pressed":r==="2d",children:[v.jsx(DS,{size:15})," Plan"]}),v.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>g("3d"),"aria-pressed":r==="3d",children:[v.jsx(NS,{size:15})," 3D"]})]}),v.jsxs("div",{className:"tools",children:[v.jsx("button",{className:"tool",onClick:P,"aria-label":"New design",children:v.jsx(jS,{size:18})}),v.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:v.jsx(Yx,{size:18})}),v.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:v.jsx(BS,{size:18})}),v.jsx("button",{className:"tool",onClick:V,"aria-label":"Export image",children:v.jsx(HS,{size:18})})]})]}),v.jsxs("div",{className:"body",children:[v.jsx(NC,{onOpen:x,activePanel:f}),v.jsx("main",{className:"stage",children:r==="2d"?v.jsx($S,{}):v.jsx(DC,{onOpenInspector:()=>u("inspector"),onFlash:m})}),f&&f!=="inspector"&&v.jsx("div",{className:"panel-scrim",onClick:S}),f&&v.jsx(HC,{kind:f,onClose:S,onFlash:m,onPick:b})]}),d&&v.jsx("div",{className:"toast",children:d.msg},d.t),y&&v.jsx(WC,{onBlank:A,onGenerate:E})]})}function XC(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const u=document.createElement("canvas");u.width=r*o,u.height=s*o;const d=u.getContext("2d");d.fillStyle="#ffffff",d.fillRect(0,0,u.width,u.height),d.drawImage(c,0,0,u.width,u.height),e(u.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function YC(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}Cd.createRoot(document.getElementById("root")).render(v.jsx(c_.StrictMode,{children:v.jsx(EC,{children:v.jsx(CS,{children:v.jsx(jC,{})})})}));
