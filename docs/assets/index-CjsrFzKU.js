(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wg={exports:{}},Oc={},Eg={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),jy=Symbol.for("react.portal"),Xy=Symbol.for("react.fragment"),Yy=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),Ky=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),Qy=Symbol.for("react.suspense"),$y=Symbol.for("react.memo"),e_=Symbol.for("react.lazy"),qp=Symbol.iterator;function t_(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var Tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,bg={};function xo(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Tg}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=xo.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Tg}var gf=mf.prototype=new Cg;gf.constructor=mf;Ag(gf,xo.prototype);gf.isPureReactComponent=!0;var Kp=Array.isArray,Rg=Object.prototype.hasOwnProperty,vf={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rg.call(e,i)&&!Pg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Da,type:t,key:s,ref:o,props:r,_owner:vf.current}}function n_(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function i_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zp=/\/+/g;function cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i_(""+t.key):e.toString(36)}function zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Da:case jy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cu(o,0):i,Kp(r)?(n="",t!=null&&(n=t.replace(Zp,"$&/")+"/"),zl(r,e,n,"",function(c){return c})):r!=null&&(xf(r)&&(r=n_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Zp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Kp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cu(s,a);o+=zl(s,e,n,l,r)}else if(l=t_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cu(s,a++),o+=zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function r_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Fl={transition:null},s_={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:vf};function Dg(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=xo;tt.Fragment=Xy;tt.Profiler=qy;tt.PureComponent=mf;tt.StrictMode=Yy;tt.Suspense=Qy;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;tt.act=Dg;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ag({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rg.call(e,l)&&!Pg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Da,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:Zy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ky,_context:t},t.Consumer=t};tt.createElement=Lg;tt.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Jy,render:t}};tt.isValidElement=xf;tt.lazy=function(t){return{$$typeof:e_,_payload:{_status:-1,_result:t},_init:r_}};tt.memo=function(t,e){return{$$typeof:$y,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=Fl.transition;Fl.transition={};try{t()}finally{Fl.transition=e}};tt.unstable_act=Dg;tt.useCallback=function(t,e){return gn.current.useCallback(t,e)};tt.useContext=function(t){return gn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return gn.current.useEffect(t,e)};tt.useId=function(){return gn.current.useId()};tt.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return gn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};tt.useRef=function(t){return gn.current.useRef(t)};tt.useState=function(t){return gn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return gn.current.useTransition()};tt.version="18.3.1";Eg.exports=tt;var We=Eg.exports;const o_=Wy(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_=We,l_=Symbol.for("react.element"),c_=Symbol.for("react.fragment"),u_=Object.prototype.hasOwnProperty,d_=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h_={key:!0,ref:!0,__self:!0,__source:!0};function Ng(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)u_.call(e,i)&&!h_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l_,type:t,key:s,ref:o,props:r,_owner:d_.current}}Oc.Fragment=c_;Oc.jsx=Ng;Oc.jsxs=Ng;wg.exports=Oc;var y=wg.exports,Ed={},Ig={exports:{}},Vn={},Ug={exports:{}},Og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var ne=U.length;U.push(X);e:for(;0<ne;){var oe=ne-1>>>1,ge=U[oe];if(0<r(ge,X))U[oe]=X,U[ne]=ge,ne=oe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var X=U[0],ne=U.pop();if(ne!==X){U[0]=ne;e:for(var oe=0,ge=U.length,Le=ge>>>1;oe<Le;){var te=2*(oe+1)-1,ue=U[te],ve=te+1,pe=U[ve];if(0>r(ue,ne))ve<ge&&0>r(pe,ue)?(U[oe]=pe,U[ve]=ne,oe=ve):(U[oe]=ue,U[te]=ne,oe=te);else if(ve<ge&&0>r(pe,ne))U[oe]=pe,U[ve]=ne,oe=ve;else break e}}return X}function r(U,X){var ne=U.sortIndex-X.sortIndex;return ne!==0?ne:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=U)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(U){if(S=!1,x(U),!v)if(n(l)!==null)v=!0,j(A);else{var X=n(c);X!==null&&ae(M,X.startTime-U)}}function A(U,X){v=!1,S&&(S=!1,f(b),b=-1),p=!0;var ne=h;try{for(x(X),d=n(l);d!==null&&(!(d.expirationTime>X)||U&&!E());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var ge=oe(d.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&i(l),x(X)}else i(l);d=n(l)}if(d!==null)var Le=!0;else{var te=n(c);te!==null&&ae(M,te.startTime-X),Le=!1}return Le}finally{d=null,h=ne,p=!1}}var T=!1,w=null,b=-1,I=5,_=-1;function E(){return!(t.unstable_now()-_<I)}function z(){if(w!==null){var U=t.unstable_now();_=U;var X=!0;try{X=w(!0,U)}finally{X?O():(T=!1,w=null)}}else T=!1}var O;if(typeof m=="function")O=function(){m(z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,$=H.port2;H.port1.onmessage=z,O=function(){$.postMessage(null)}}else O=function(){g(z,0)};function j(U){w=U,T||(T=!0,O())}function ae(U,X){b=g(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(A))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var ne=h;h=X;try{return U()}finally{h=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=h;h=U;try{return X()}finally{h=ne}},t.unstable_scheduleCallback=function(U,X,ne){var oe=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?oe+ne:oe):ne=oe,U){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ne+ge,U={id:u++,callback:X,priorityLevel:U,startTime:ne,expirationTime:ge,sortIndex:-1},ne>oe?(U.sortIndex=ne,e(c,U),n(l)===null&&U===n(c)&&(S?(f(b),b=-1):S=!0,ae(M,ne-oe))):(U.sortIndex=ge,e(l,U),v||p||(v=!0,j(A))),U},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(U){var X=h;return function(){var ne=h;h=X;try{return U.apply(this,arguments)}finally{h=ne}}}})(Og);Ug.exports=Og;var f_=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_=We,Hn=f_;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,ca={};function us(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(ca[t]=e,t=0;t<e.length;t++)zg.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Td=Object.prototype.hasOwnProperty,m_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jp={},Qp={};function g_(t){return Td.call(Qp,t)?!0:Td.call(Jp,t)?!1:m_.test(t)?Qp[t]=!0:(Jp[t]=!0,!1)}function v_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x_(t,e,n,i){if(e===null||typeof e>"u"||v_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,_f);en[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,_f);en[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,_f);en[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x_(e,n,r,i)&&(n=null),i||r===null?g_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Cd=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),$p=Symbol.iterator;function To(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,uu;function Go(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var du=!1;function hu(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function y_(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ns:return"Portal";case Ad:return"Profiler";case Mf:return"StrictMode";case bd:return"Suspense";case Cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kg:return(t.displayName||"Context")+".Consumer";case Fg:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function __(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S_(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=S_(t))}function Vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pd(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function Ld(t,e){Gg(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Wo(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function Wg(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,Xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w_=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function Od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,Zs=null,Js=null;function rm(t){if(t=Ua(t)){if(typeof Fd!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Hc(e),Fd(t.stateNode,t.type,e))}}function Kg(t){Zs?Js?Js.push(t):Js=[t]:Zs=t}function Zg(){if(Zs){var t=Zs,e=Js;if(Js=Zs=null,rm(t),e)for(t=0;t<e.length;t++)rm(e[t])}}function Jg(t,e){return t(e)}function Qg(){}var fu=!1;function $g(t,e,n){if(fu)return t(e,n);fu=!0;try{return Jg(t,e,n)}finally{fu=!1,(Zs!==null||Js!==null)&&(Qg(),Zg())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var i=Hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var kd=!1;if(Yi)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){kd=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{kd=!1}function E_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Zo=!1,oc=null,ac=!1,Bd=null,T_={onError:function(t){Zo=!0,oc=t}};function A_(t,e,n,i,r,s,o,a,l){Zo=!1,oc=null,E_.apply(T_,arguments)}function b_(t,e,n,i,r,s,o,a,l){if(A_.apply(this,arguments),Zo){if(Zo){var c=oc;Zo=!1,oc=null}else throw Error(Se(198));ac||(ac=!0,Bd=c)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ev(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(ds(t)!==t)throw Error(Se(188))}function C_(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sm(r),t;if(s===i)return sm(r),e;s=s.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function tv(t){return t=C_(t),t!==null?nv(t):null}function nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nv(t);if(e!==null)return e;t=t.sibling}return null}var iv=Hn.unstable_scheduleCallback,om=Hn.unstable_cancelCallback,R_=Hn.unstable_shouldYield,P_=Hn.unstable_requestPaint,Rt=Hn.unstable_now,L_=Hn.unstable_getCurrentPriorityLevel,Af=Hn.unstable_ImmediatePriority,rv=Hn.unstable_UserBlockingPriority,lc=Hn.unstable_NormalPriority,D_=Hn.unstable_LowPriority,sv=Hn.unstable_IdlePriority,zc=null,wi=null;function N_(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(zc,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:O_,I_=Math.log,U_=Math.LN2;function O_(t){return t>>>=0,t===0?32:31-(I_(t)/U_|0)|0}var ja=64,Xa=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=jo(a):(s&=o,s!==0&&(i=jo(s)))}else o=n&~r,o!==0?i=jo(o):s!==0&&(i=jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function z_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=z_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ov(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function k_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function av(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lv,Cf,cv,uv,dv,Vd=!1,Ya=[],yr=null,_r=null,Sr=null,ha=new Map,fa=new Map,hr=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function bo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function H_(t,e,n,i,r){switch(e){case"focusin":return yr=bo(yr,t,e,n,i,r),!0;case"dragenter":return _r=bo(_r,t,e,n,i,r),!0;case"mouseover":return Sr=bo(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,bo(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,bo(fa.get(s)||null,t,e,n,i,r)),!0}return!1}function hv(t){var e=qr(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=ev(n),e!==null){t.blockedOn=e,dv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=Ua(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){kl(t)&&n.delete(e)}function V_(){Vd=!1,yr!==null&&kl(yr)&&(yr=null),_r!==null&&kl(_r)&&(_r=null),Sr!==null&&kl(Sr)&&(Sr=null),ha.forEach(lm),fa.forEach(lm)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,Vd||(Vd=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,V_)))}function pa(t){function e(r){return Co(r,t)}if(0<Ya.length){Co(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&Co(yr,t),_r!==null&&Co(_r,t),Sr!==null&&Co(Sr,t),ha.forEach(e),fa.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&hr.shift()}var Qs=Ji.ReactCurrentBatchConfig,uc=!0;function G_(t,e,n,i){var r=ut,s=Qs.transition;Qs.transition=null;try{ut=1,Rf(t,e,n,i)}finally{ut=r,Qs.transition=s}}function W_(t,e,n,i){var r=ut,s=Qs.transition;Qs.transition=null;try{ut=4,Rf(t,e,n,i)}finally{ut=r,Qs.transition=s}}function Rf(t,e,n,i){if(uc){var r=Gd(t,e,n,i);if(r===null)Eu(t,e,i,dc,n),am(t,i);else if(H_(r,t,e,n,i))i.stopPropagation();else if(am(t,i),e&4&&-1<B_.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&lv(s),s=Gd(t,e,n,i),s===null&&Eu(t,e,i,dc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var dc=null;function Gd(t,e,n,i){if(dc=null,t=Tf(i),t=qr(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ev(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L_()){case Af:return 1;case rv:return 4;case lc:case D_:return 16;case sv:return 536870912;default:return 16}default:return 16}}var gr=null,Pf=null,Bl=null;function pv(){if(Bl)return Bl;var t,e=Pf,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function cm(){return!1}function Gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:cm,this.isPropagationStopped=cm,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Gn(yo),Ia=Tt({},yo,{view:0,detail:0}),j_=Gn(Ia),mu,gu,Ro,Fc=Tt({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(mu=t.screenX-Ro.screenX,gu=t.screenY-Ro.screenY):gu=mu=0,Ro=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),um=Gn(Fc),X_=Tt({},Fc,{dataTransfer:0}),Y_=Gn(X_),q_=Tt({},Ia,{relatedTarget:0}),vu=Gn(q_),K_=Tt({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=Gn(K_),J_=Tt({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q_=Gn(J_),$_=Tt({},yo,{data:0}),dm=Gn($_),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nS[t])?!!e[t]:!1}function Df(){return iS}var rS=Tt({},Ia,{key:function(t){if(t.key){var e=eS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=Gn(rS),oS=Tt({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Gn(oS),aS=Tt({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),lS=Gn(aS),cS=Tt({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=Gn(cS),dS=Tt({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=Gn(dS),fS=[9,13,27,32],Nf=Yi&&"CompositionEvent"in window,Jo=null;Yi&&"documentMode"in document&&(Jo=document.documentMode);var pS=Yi&&"TextEvent"in window&&!Jo,mv=Yi&&(!Nf||Jo&&8<Jo&&11>=Jo),fm=" ",pm=!1;function gv(t,e){switch(t){case"keyup":return fS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function mS(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function gS(t,e){if(Us)return t==="compositionend"||!Nf&&gv(t,e)?(t=pv(),Bl=Pf=gr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mv&&e.locale!=="ko"?null:e.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vS[t.type]:e==="textarea"}function xv(t,e,n,i){Kg(i),e=hc(e,"onChange"),0<e.length&&(n=new Lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qo=null,ma=null;function xS(t){Rv(t,0)}function kc(t){var e=Fs(t);if(Vg(e))return t}function yS(t,e){if(t==="change")return e}var yv=!1;if(Yi){var xu;if(Yi){var yu="oninput"in document;if(!yu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),yu=typeof gm.oninput=="function"}xu=yu}else xu=!1;yv=xu&&(!document.documentMode||9<document.documentMode)}function vm(){Qo&&(Qo.detachEvent("onpropertychange",_v),ma=Qo=null)}function _v(t){if(t.propertyName==="value"&&kc(ma)){var e=[];xv(e,ma,t,Tf(t)),$g(xS,e)}}function _S(t,e,n){t==="focusin"?(vm(),Qo=e,ma=n,Qo.attachEvent("onpropertychange",_v)):t==="focusout"&&vm()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(ma)}function MS(t,e){if(t==="click")return kc(e)}function wS(t,e){if(t==="input"||t==="change")return kc(e)}function ES(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:ES;function ga(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Td.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ym(t,e){var n=xm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xm(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(){for(var t=window,e=sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sc(t.document)}return e}function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TS(t){var e=Mv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sv(n.ownerDocument.documentElement,n)){if(i!==null&&If(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ym(n,s);var o=ym(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AS=Yi&&"documentMode"in document&&11>=document.documentMode,Os=null,Wd=null,$o=null,jd=!1;function _m(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jd||Os==null||Os!==sc(i)||(i=Os,"selectionStart"in i&&If(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ga($o,i)||($o=i,i=hc(Wd,"onSelect"),0<i.length&&(e=new Lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},_u={},wv={};Yi&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Bc(t){if(_u[t])return _u[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return _u[t]=e[n];return t}var Ev=Bc("animationend"),Tv=Bc("animationiteration"),Av=Bc("animationstart"),bv=Bc("transitionend"),Cv=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Cv.set(t,e),us(e,[t])}for(var Su=0;Su<Sm.length;Su++){var Mu=Sm[Su],bS=Mu.toLowerCase(),CS=Mu[0].toUpperCase()+Mu.slice(1);Lr(bS,"on"+CS)}Lr(Ev,"onAnimationEnd");Lr(Tv,"onAnimationIteration");Lr(Av,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(bv,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Mm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,b_(i,e,void 0,t),t.currentTarget=null}function Rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Mm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Mm(r,a,c),s=l}}}if(ac)throw t=Bd,ac=!1,Bd=null,t}function xt(t,e){var n=e[Zd];n===void 0&&(n=e[Zd]=new Set);var i=t+"__bubble";n.has(i)||(Pv(e,t,2,!1),n.add(i))}function wu(t,e,n){var i=0;e&&(i|=4),Pv(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[Za]){t[Za]=!0,zg.forEach(function(n){n!=="selectionchange"&&(RS.has(n)||wu(n,!1,t),wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,wu("selectionchange",!1,e))}}function Pv(t,e,n,i){switch(fv(e)){case 1:var r=G_;break;case 4:r=W_;break;default:r=Rf}n=r.bind(null,e,n,t),r=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$g(function(){var c=s,u=Tf(n),d=[];e:{var h=Cv.get(t);if(h!==void 0){var p=Lf,v=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":p=sS;break;case"focusin":v="focus",p=vu;break;case"focusout":v="blur",p=vu;break;case"beforeblur":case"afterblur":p=vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lS;break;case Ev:case Tv:case Av:p=Z_;break;case bv:p=uS;break;case"scroll":p=j_;break;case"wheel":p=hS;break;case"copy":case"cut":case"paste":p=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hm}var S=(e&4)!==0,g=!S&&t==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,x;m!==null;){x=m;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,f!==null&&(M=da(m,f),M!=null&&S.push(xa(m,M,x)))),g)break;m=m.return}0<S.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==zd&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[qi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?qr(v):null,v!==null&&(g=ds(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(S=um,M="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=hm,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?h:Fs(p),x=v==null?h:Fs(v),h=new S(M,m+"leave",p,n,u),h.target=g,h.relatedTarget=x,M=null,qr(u)===c&&(S=new S(f,m+"enter",v,n,u),S.target=x,S.relatedTarget=g,M=S),g=M,p&&v)t:{for(S=p,f=v,m=0,x=S;x;x=ms(x))m++;for(x=0,M=f;M;M=ms(M))x++;for(;0<m-x;)S=ms(S),m--;for(;0<x-m;)f=ms(f),x--;for(;m--;){if(S===f||f!==null&&S===f.alternate)break t;S=ms(S),f=ms(f)}S=null}else S=null;p!==null&&wm(d,h,p,S,!1),v!==null&&g!==null&&wm(d,g,v,S,!0)}}e:{if(h=c?Fs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=yS;else if(mm(h))if(yv)A=wS;else{A=SS;var T=_S}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=MS);if(A&&(A=A(t,c))){xv(d,A,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Dd(h,"number",h.value)}switch(T=c?Fs(c):window,t){case"focusin":(mm(T)||T.contentEditable==="true")&&(Os=T,Wd=c,$o=null);break;case"focusout":$o=Wd=Os=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,_m(d,n,u);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":_m(d,n,u)}var w;if(Nf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Us?gv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(mv&&n.locale!=="ko"&&(Us||b!=="onCompositionStart"?b==="onCompositionEnd"&&Us&&(w=pv()):(gr=u,Pf="value"in gr?gr.value:gr.textContent,Us=!0)),T=hc(c,b),0<T.length&&(b=new dm(b,t,null,n,u),d.push({event:b,listeners:T}),w?b.data=w:(w=vv(n),w!==null&&(b.data=w)))),(w=pS?mS(t,n):gS(t,n))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new dm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}Rv(d,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(t,n),s!=null&&i.unshift(xa(t,s,r)),s=da(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=da(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=da(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PS=/\r\n?/g,LS=/\u0000|\uFFFD/g;function Em(t){return(typeof t=="string"?t:""+t).replace(PS,`
`).replace(LS,"")}function Ja(t,e,n){if(e=Em(e),Em(t)!==e&&n)throw Error(Se(425))}function fc(){}var Xd=null,Yd=null;function qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,NS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(t){return Tm.resolve(null).then(t).catch(IS)}:Kd;function IS(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Si="__reactFiber$"+_o,ya="__reactProps$"+_o,qi="__reactContainer$"+_o,Zd="__reactEvents$"+_o,US="__reactListeners$"+_o,OS="__reactHandles$"+_o;function qr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Am(t);t!==null;){if(n=t[Si])return n;t=Am(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[Si]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Hc(t){return t[ya]||null}var Jd=[],ks=-1;function Dr(t){return{current:t}}function yt(t){0>ks||(t.current=Jd[ks],Jd[ks]=null,ks--)}function mt(t,e){ks++,Jd[ks]=t.current,t.current=e}var Rr={},un=Dr(Rr),An=Dr(!1),$r=Rr;function ao(t,e){var n=t.type.contextTypes;if(!n)return Rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function pc(){yt(An),yt(un)}function bm(t,e,n){if(un.current!==Rr)throw Error(Se(168));mt(un,e),mt(An,n)}function Lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,__(t)||"Unknown",r));return Tt({},n,i)}function mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,$r=un.current,mt(un,t),mt(An,An.current),!0}function Cm(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=Lv(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,yt(An),yt(un),mt(un,t)):yt(An),mt(An,n)}var ki=null,Vc=!1,Au=!1;function Dv(t){ki===null?ki=[t]:ki.push(t)}function zS(t){Vc=!0,Dv(t)}function Nr(){if(!Au&&ki!==null){Au=!0;var t=0,e=ut;try{var n=ki;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,Vc=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),iv(Af,Nr),r}finally{ut=e,Au=!1}}return null}var Bs=[],Hs=0,gc=null,vc=0,Xn=[],Yn=0,es=null,Vi=1,Gi="";function Gr(t,e){Bs[Hs++]=vc,Bs[Hs++]=gc,gc=t,vc=e}function Nv(t,e,n){Xn[Yn++]=Vi,Xn[Yn++]=Gi,Xn[Yn++]=es,es=t;var i=Vi;t=Gi;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-pi(e)+r|n<<r|i,Gi=s+t}else Vi=1<<s|n<<r|i,Gi=t}function Uf(t){t.return!==null&&(Gr(t,1),Nv(t,1,0))}function Of(t){for(;t===gc;)gc=Bs[--Hs],Bs[Hs]=null,vc=Bs[--Hs],Bs[Hs]=null;for(;t===es;)es=Xn[--Yn],Xn[Yn]=null,Gi=Xn[--Yn],Xn[Yn]=null,Vi=Xn[--Yn],Xn[Yn]=null}var Bn=null,kn=null,St=!1,ui=null;function Iv(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bn=t,kn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Vi,overflow:Gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bn=t,kn=null,!0):!1;default:return!1}}function Qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(St){var e=kn;if(e){var n=e;if(!Rm(t,e)){if(Qd(t))throw Error(Se(418));e=Mr(n.nextSibling);var i=Bn;e&&Rm(t,e)?Iv(i,n):(t.flags=t.flags&-4097|2,St=!1,Bn=t)}}else{if(Qd(t))throw Error(Se(418));t.flags=t.flags&-4097|2,St=!1,Bn=t}}}function Pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function Qa(t){if(t!==Bn)return!1;if(!St)return Pm(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qd(t.type,t.memoizedProps)),e&&(e=kn)){if(Qd(t))throw Uv(),Error(Se(418));for(;e;)Iv(t,e),e=Mr(e.nextSibling)}if(Pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Bn?Mr(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=kn;t;)t=Mr(t.nextSibling)}function lo(){kn=Bn=null,St=!1}function zf(t){ui===null?ui=[t]:ui.push(t)}var FS=Ji.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lm(t){var e=t._init;return e(t._payload)}function Ov(t){function e(f,m){if(t){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Ar(f,m),f.index=0,f.sibling=null,f}function s(f,m,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,x,M){return m===null||m.tag!==6?(m=Nu(x,f.mode,M),m.return=f,m):(m=r(m,x),m.return=f,m)}function l(f,m,x,M){var A=x.type;return A===Is?u(f,m,x.props.children,M,x.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&Lm(A)===m.type)?(M=r(m,x.props),M.ref=Po(f,m,x),M.return=f,M):(M=ql(x.type,x.key,x.props,null,f.mode,M),M.ref=Po(f,m,x),M.return=f,M)}function c(f,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Iu(x,f.mode,M),m.return=f,m):(m=r(m,x.children||[]),m.return=f,m)}function u(f,m,x,M,A){return m===null||m.tag!==7?(m=Qr(x,f.mode,M,A),m.return=f,m):(m=r(m,x),m.return=f,m)}function d(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Nu(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Va:return x=ql(m.type,m.key,m.props,null,f.mode,x),x.ref=Po(f,null,m),x.return=f,x;case Ns:return m=Iu(m,f.mode,x),m.return=f,m;case ur:var M=m._init;return d(f,M(m._payload),x)}if(Wo(m)||To(m))return m=Qr(m,f.mode,x,null),m.return=f,m;$a(f,m)}return null}function h(f,m,x,M){var A=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(f,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return x.key===A?l(f,m,x,M):null;case Ns:return x.key===A?c(f,m,x,M):null;case ur:return A=x._init,h(f,m,A(x._payload),M)}if(Wo(x)||To(x))return A!==null?null:u(f,m,x,M,null);$a(f,x)}return null}function p(f,m,x,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(x)||null,a(m,f,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Va:return f=f.get(M.key===null?x:M.key)||null,l(m,f,M,A);case Ns:return f=f.get(M.key===null?x:M.key)||null,c(m,f,M,A);case ur:var T=M._init;return p(f,m,x,T(M._payload),A)}if(Wo(M)||To(M))return f=f.get(x)||null,u(m,f,M,A,null);$a(m,M)}return null}function v(f,m,x,M){for(var A=null,T=null,w=m,b=m=0,I=null;w!==null&&b<x.length;b++){w.index>b?(I=w,w=null):I=w.sibling;var _=h(f,w,x[b],M);if(_===null){w===null&&(w=I);break}t&&w&&_.alternate===null&&e(f,w),m=s(_,m,b),T===null?A=_:T.sibling=_,T=_,w=I}if(b===x.length)return n(f,w),St&&Gr(f,b),A;if(w===null){for(;b<x.length;b++)w=d(f,x[b],M),w!==null&&(m=s(w,m,b),T===null?A=w:T.sibling=w,T=w);return St&&Gr(f,b),A}for(w=i(f,w);b<x.length;b++)I=p(w,f,b,x[b],M),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?b:I.key),m=s(I,m,b),T===null?A=I:T.sibling=I,T=I);return t&&w.forEach(function(E){return e(f,E)}),St&&Gr(f,b),A}function S(f,m,x,M){var A=To(x);if(typeof A!="function")throw Error(Se(150));if(x=A.call(x),x==null)throw Error(Se(151));for(var T=A=null,w=m,b=m=0,I=null,_=x.next();w!==null&&!_.done;b++,_=x.next()){w.index>b?(I=w,w=null):I=w.sibling;var E=h(f,w,_.value,M);if(E===null){w===null&&(w=I);break}t&&w&&E.alternate===null&&e(f,w),m=s(E,m,b),T===null?A=E:T.sibling=E,T=E,w=I}if(_.done)return n(f,w),St&&Gr(f,b),A;if(w===null){for(;!_.done;b++,_=x.next())_=d(f,_.value,M),_!==null&&(m=s(_,m,b),T===null?A=_:T.sibling=_,T=_);return St&&Gr(f,b),A}for(w=i(f,w);!_.done;b++,_=x.next())_=p(w,f,b,_.value,M),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?b:_.key),m=s(_,m,b),T===null?A=_:T.sibling=_,T=_);return t&&w.forEach(function(z){return e(f,z)}),St&&Gr(f,b),A}function g(f,m,x,M){if(typeof x=="object"&&x!==null&&x.type===Is&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:e:{for(var A=x.key,T=m;T!==null;){if(T.key===A){if(A=x.type,A===Is){if(T.tag===7){n(f,T.sibling),m=r(T,x.props.children),m.return=f,f=m;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&Lm(A)===T.type){n(f,T.sibling),m=r(T,x.props),m.ref=Po(f,T,x),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}x.type===Is?(m=Qr(x.props.children,f.mode,M,x.key),m.return=f,f=m):(M=ql(x.type,x.key,x.props,null,f.mode,M),M.ref=Po(f,m,x),M.return=f,f=M)}return o(f);case Ns:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),m=r(m,x.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Iu(x,f.mode,M),m.return=f,f=m}return o(f);case ur:return T=x._init,g(f,m,T(x._payload),M)}if(Wo(x))return v(f,m,x,M);if(To(x))return S(f,m,x,M);$a(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,x),m.return=f,f=m):(n(f,m),m=Nu(x,f.mode,M),m.return=f,f=m),o(f)):n(f,m)}return g}var co=Ov(!0),zv=Ov(!1),xc=Dr(null),yc=null,Vs=null,Ff=null;function kf(){Ff=Vs=yc=null}function Bf(t){var e=xc.current;yt(xc),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){yc=t,Ff=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(yc===null)throw Error(Se(308));Vs=t,yc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Kr=null;function Hf(t){Kr===null?Kr=[t]:Kr.push(t)}function Fv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bf(t,n)}}function Dm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(h=e,p=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=Tt({},d,h);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=d}}function Nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var Oa={},Ei=Dr(Oa),_a=Dr(Oa),Sa=Dr(Oa);function Zr(t){if(t===Oa)throw Error(Se(174));return t}function Gf(t,e){switch(mt(Sa,e),mt(_a,t),mt(Ei,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Id(e,t)}yt(Ei),mt(Ei,e)}function uo(){yt(Ei),yt(_a),yt(Sa)}function Bv(t){Zr(Sa.current);var e=Zr(Ei.current),n=Id(e,t.type);e!==n&&(mt(_a,t),mt(Ei,n))}function Wf(t){_a.current===t&&(yt(Ei),yt(_a))}var Mt=Dr(0);function Sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function jf(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var Gl=Ji.ReactCurrentDispatcher,Cu=Ji.ReactCurrentBatchConfig,ts=0,Et=null,Nt=null,Vt=null,Mc=!1,ea=!1,Ma=0,kS=0;function tn(){throw Error(Se(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Yf(t,e,n,i,r,s){if(ts=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?GS:WS,t=n(i,r),ea){s=0;do{if(ea=!1,Ma=0,25<=s)throw Error(Se(301));s+=1,Vt=Nt=null,e.updateQueue=null,Gl.current=jS,t=n(i,r)}while(ea)}if(Gl.current=wc,e=Nt!==null&&Nt.next!==null,ts=0,Vt=Nt=Et=null,Mc=!1,e)throw Error(Se(300));return t}function qf(){var t=Ma!==0;return Ma=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function ei(){if(Nt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Vt===null?Et.memoizedState:Vt.next;if(e!==null)Vt=e,Nt=t;else{if(t===null)throw Error(Se(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function wa(t,e){return typeof e=="function"?e(t):e}function Ru(t){var e=ei(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=u,ns|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=ei(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hv(){}function Vv(t,e){var n=Et,i=ei(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Kf(jv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Ea(9,Wv.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(Se(349));ts&30||Gv(n,e,r)}return r}function Gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,i){e.value=n,e.getSnapshot=i,Xv(e)&&Yv(t)}function jv(t,e,n){return n(function(){Xv(e)&&Yv(t)})}function Xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function Yv(t){var e=Ki(t,1);e!==null&&mi(e,t,1,-1)}function Im(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,Et,t),[e.memoizedState,t]}function Ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qv(){return ei().memoizedState}function Wl(t,e,n,i){var r=xi();Et.flags|=t,r.memoizedState=Ea(1|e,n,void 0,i===void 0?null:i)}function Gc(t,e,n,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&Xf(i,o.deps)){r.memoizedState=Ea(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Ea(1|e,n,s,i)}function Um(t,e){return Wl(8390656,8,t,e)}function Kf(t,e){return Gc(2048,8,t,e)}function Kv(t,e){return Gc(4,2,t,e)}function Zv(t,e){return Gc(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,Jv.bind(null,e,t),n)}function Zf(){}function $v(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ex(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function tx(t,e,n){return ts&21?(gi(n,e)||(n=ov(),Et.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function BS(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Cu.transition;Cu.transition={};try{t(!1),e()}finally{ut=n,Cu.transition=i}}function nx(){return ei().memoizedState}function HS(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ix(t))rx(e,n);else if(n=Fv(t,e,n,i),n!==null){var r=pn();mi(n,t,i,r),sx(n,e,i)}}function VS(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ix(t))rx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fv(t,e,r,i),n!==null&&(r=pn(),mi(n,t,i,r),sx(n,e,i))}}function ix(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function rx(t,e){ea=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bf(t,n)}}var wc={readContext:$n,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},GS={readContext:$n,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=HS.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:Zf,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=BS.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=xi();if(St){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),jt===null)throw Error(Se(349));ts&30||Gv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Um(jv.bind(null,i,s,t),[t]),i.flags|=2048,Ea(9,Wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=jt.identifierPrefix;if(St){var n=Gi,i=Vi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WS={readContext:$n,useCallback:$v,useContext:$n,useEffect:Kf,useImperativeHandle:Qv,useInsertionEffect:Kv,useLayoutEffect:Zv,useMemo:ex,useReducer:Ru,useRef:qv,useState:function(){return Ru(wa)},useDebugValue:Zf,useDeferredValue:function(t){var e=ei();return tx(e,Nt.memoizedState,t)},useTransition:function(){var t=Ru(wa)[0],e=ei().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Vv,useId:nx,unstable_isNewReconciler:!1},jS={readContext:$n,useCallback:$v,useContext:$n,useEffect:Kf,useImperativeHandle:Qv,useInsertionEffect:Kv,useLayoutEffect:Zv,useMemo:ex,useReducer:Pu,useRef:qv,useState:function(){return Pu(wa)},useDebugValue:Zf,useDeferredValue:function(t){var e=ei();return Nt===null?e.memoizedState=t:tx(e,Nt.memoizedState,t)},useTransition:function(){var t=Pu(wa)[0],e=ei().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Vv,useId:nx,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function th(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Tr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(mi(e,t,r,i),Vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Tr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(mi(e,t,r,i),Vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Tr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(mi(e,t,i,n),Vl(e,t,i))}};function Om(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function ox(t,e,n){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=bn(e)?$r:un.current,i=e.contextTypes,s=(i=i!=null)?ao(t,r):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=bn(e)?$r:un.current,r.context=ao(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),_c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e){try{var n="",i=e;do n+=y_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function ax(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tc||(Tc=!0,fh=i),ih(t,e)},n}function lx(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=o1.bind(null,t,e,n),e.then(t,t))}function km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var YS=Ji.ReactCurrentOwner,En=!1;function hn(t,e,n,i){e.child=t===null?zv(e,null,n,i):co(e,t.child,n,i)}function Hm(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=Yf(t,e,n,i,s,r),n=qf(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&n&&Uf(e),e.flags|=1,hn(t,e,i,r),e.child)}function Vm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cx(t,e,s,i,r)):(t=ql(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function cx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return rh(t,e,n,i,r)}function ux(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Ws,On),On|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Ws,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Ws,On),On|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Ws,On),On|=i;return hn(t,e,r,n),e.child}function dx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rh(t,e,n,i,r){var s=bn(n)?$r:un.current;return s=ao(e,s),$s(e,r),n=Yf(t,e,n,i,s,r),i=qf(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&i&&Uf(e),e.flags|=1,hn(t,e,n,r),e.child)}function Gm(t,e,n,i,r){if(bn(n)){var s=!0;mc(e)}else s=!1;if($s(e,r),e.stateNode===null)jl(t,e),ox(e,n,i),nh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=bn(n)?$r:un.current,c=ao(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&zm(e,o,i,c),dr=!1;var h=e.memoizedState;o.state=h,_c(e,i,o,r),l=e.memoizedState,a!==i||h!==l||An.current||dr?(typeof u=="function"&&(th(e,n,u,i),l=e.memoizedState),(a=dr||Om(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=bn(n)?$r:un.current,l=ao(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&zm(e,o,i,l),dr=!1,h=e.memoizedState,o.state=h,_c(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||An.current||dr?(typeof p=="function"&&(th(e,n,p,i),v=e.memoizedState),(c=dr||Om(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return sh(t,e,n,i,s,r)}function sh(t,e,n,i,r,s){dx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cm(e,n,!1),Zi(t,e,s);i=e.stateNode,YS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=co(e,t.child,null,s),e.child=co(e,null,a,s)):hn(t,e,a,s),e.memoizedState=i.state,r&&Cm(e,n,!0),e.child}function hx(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),Gf(t,e.containerInfo)}function Wm(t,e,n,i,r){return lo(),zf(r),e.flags|=256,hn(t,e,n,i),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function fx(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(Mt,r&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):Jf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jf(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,i){return i!==null&&zf(i),co(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Lu(Error(Se(422))),el(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&co(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return el(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Se(419)),i=Lu(s,i,void 0),el(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),mi(i,t,r,-1))}return ip(),i=Lu(Error(Se(421))),el(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=a1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=Mr(r.nextSibling),Bn=e,St=!0,ui=null,t!==null&&(Xn[Yn++]=Vi,Xn[Yn++]=Gi,Xn[Yn++]=es,Vi=t.id,Gi=t.overflow,es=e),e=Jf(e,i.children),e.flags|=4096,e)}function jm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),eh(t.return,e,n)}function Du(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function px(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,n,e);else if(t.tag===19)jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Du(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KS(t,e,n){switch(e.tag){case 3:hx(e),lo();break;case 5:Bv(e);break;case 1:bn(e.type)&&mc(e);break;case 4:Gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(xc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?fx(t,e,n):(mt(Mt,Mt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);mt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return px(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,ux(t,e,n)}return Zi(t,e,n)}var mx,lh,gx,vx;mx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};gx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Zr(Ei.current);var s=null;switch(n){case"input":r=Pd(t,r),i=Pd(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Nd(t,r),i=Nd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fc)}Ud(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Lo(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZS(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return bn(e.type)&&pc(),nn(e),null;case 3:return i=e.stateNode,uo(),yt(An),yt(un),jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(gh(ui),ui=null))),lh(t,e),nn(e),null;case 5:Wf(e);var r=Zr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)gx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return nn(e),null}if(t=Zr(Ei.current),Qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Xo.length;r++)xt(Xo[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":em(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":nm(i,s),xt("invalid",i)}Ud(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,t),r=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xt("scroll",i)}switch(n){case"input":Ga(i),tm(i,s,!0);break;case"textarea":Ga(i),im(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[ya]=i,mx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Od(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xo.length;r++)xt(Xo[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":em(t,i),r=Pd(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":nm(t,i),r=Nd(t,i),xt("invalid",t);break;default:r=i}Ud(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(t,l):typeof l=="number"&&ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&Sf(t,s,l,o))}switch(n){case"input":Ga(t),tm(t,i,!1);break;case"textarea":Ga(t),im(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)vx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=Zr(Sa.current),Zr(Ei.current),Qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Bn,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return nn(e),null;case 13:if(yt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&kn!==null&&e.mode&1&&!(e.flags&128))Uv(),lo(),e.flags|=98560,s=!1;else if(s=Qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[Si]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ui!==null&&(gh(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ut===0&&(Ut=3):ip())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return uo(),lh(t,e),t===null&&va(e.stateNode.containerInfo),nn(e),null;case 10:return Bf(e.type._context),nn(e),null;case 17:return bn(e.type)&&pc(),nn(e),null;case 19:if(yt(Mt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Lo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sc(t),o!==null){for(e.flags|=128,Lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>fo&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return nn(e),null}else 2*Rt()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=Mt.current,mt(Mt,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return np(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function JS(t,e){switch(Of(e),e.tag){case 1:return bn(e.type)&&pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),yt(An),yt(un),jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wf(e),null;case 13:if(yt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Mt),null;case 4:return uo(),null;case 10:return Bf(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var tl=!1,cn=!1,QS=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function ch(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Xm=!1;function $S(t,e){if(Xd=uc,t=Mv(),If(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yd={focusedElem:t,selectionRange:n},uc=!1,ze=e;ze!==null;)if(e=ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ze=t;else for(;ze!==null;){e=ze;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:ai(e.type,S),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(M){bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}return v=Xm,Xm=!1,v}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ch(e,n,s)}r=r.next}while(r!==i)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xx(t){var e=t.alternate;e!==null&&(t.alternate=null,xx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[ya],delete e[Zd],delete e[US],delete e[OS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yx(t){return t.tag===5||t.tag===3||t.tag===4}function Ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function hh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}var qt=null,li=!1;function er(t,e,n){for(n=n.child;n!==null;)_x(t,e,n),n=n.sibling}function _x(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 5:cn||Gs(n,e);case 6:var i=qt,r=li;qt=null,er(t,e,n),qt=i,li=r,qt!==null&&(li?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(li?(t=qt,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),pa(t)):Tu(qt,n.stateNode));break;case 4:i=qt,r=li,qt=n.stateNode.containerInfo,li=!0,er(t,e,n),qt=i,li=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ch(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!cn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,er(t,e,n),cn=i):er(t,e,n);break;default:er(t,e,n)}}function qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QS),e.forEach(function(i){var r=l1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,li=!1;break e;case 3:qt=a.stateNode.containerInfo,li=!0;break e;case 4:qt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(qt===null)throw Error(Se(160));_x(s,o,r),qt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sx(e,t),e=e.sibling}function Sx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),vi(t),i&4){try{ta(3,t,t.return),jc(3,t)}catch(S){bt(t,t.return,S)}try{ta(5,t,t.return)}catch(S){bt(t,t.return,S)}}break;case 1:ii(e,t),vi(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(ii(e,t),vi(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ua(r,"")}catch(S){bt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gg(r,s),Od(a,o);var c=Od(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?qg(r,d):u==="dangerouslySetInnerHTML"?Xg(r,d):u==="children"?ua(r,d):Sf(r,u,d,c)}switch(a){case"input":Ld(r,s);break;case"textarea":Wg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ks(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(S){bt(t,t.return,S)}}break;case 6:if(ii(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){bt(t,t.return,S)}}break;case 3:if(ii(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(S){bt(t,t.return,S)}break;case 4:ii(e,t),vi(t);break;case 13:ii(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ep=Rt())),i&4&&qm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,ii(e,t),cn=c):ii(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ze=t,u=t.child;u!==null;){for(d=ze=u;ze!==null;){switch(h=ze,p=h.child,h.tag){case 0:case 11:case 14:case 15:ta(4,h,h.return);break;case 1:Gs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){bt(i,n,S)}}break;case 5:Gs(h,h.return);break;case 22:if(h.memoizedState!==null){Zm(d);continue}}p!==null?(p.return=h,ze=p):Zm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yg("display",o))}catch(S){bt(t,t.return,S)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){bt(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ii(e,t),vi(t),i&4&&qm(t);break;case 21:break;default:ii(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yx(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=Ym(t);hh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ym(t);dh(t,a,o);break;default:throw Error(Se(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e1(t,e,n){ze=t,Mx(t)}function Mx(t,e,n){for(var i=(t.mode&1)!==0;ze!==null;){var r=ze,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=tl;var c=cn;if(tl=o,(cn=l)&&!c)for(ze=r;ze!==null;)o=ze,l=o.child,o.tag===22&&o.memoizedState!==null?Jm(r):l!==null?(l.return=o,ze=l):Jm(r);for(;s!==null;)ze=s,Mx(s),s=s.sibling;ze=r,tl=a,cn=c}Km(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ze=s):Km(t)}}function Km(t){for(;ze!==null;){var e=ze;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}cn||e.flags&512&&uh(e)}catch(h){bt(e,e.return,h)}}if(e===t){ze=null;break}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Zm(t){for(;ze!==null;){var e=ze;if(e===t){ze=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Jm(t){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{uh(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){ze=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ze=a;break}ze=e.return}}var t1=Math.ceil,Ec=Ji.ReactCurrentDispatcher,Qf=Ji.ReactCurrentOwner,Jn=Ji.ReactCurrentBatchConfig,rt=0,jt=null,Lt=null,Qt=0,On=0,Ws=Dr(0),Ut=0,Ta=null,ns=0,Xc=0,$f=0,na=null,Mn=null,ep=0,fo=1/0,Fi=null,Tc=!1,fh=null,Er=null,nl=!1,vr=null,Ac=0,ia=0,ph=null,Xl=-1,Yl=0;function pn(){return rt&6?Rt():Xl!==-1?Xl:Xl=Rt()}function Tr(t){return t.mode&1?rt&2&&Qt!==0?Qt&-Qt:FS.transition!==null?(Yl===0&&(Yl=ov()),Yl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:fv(t.type)),t):1}function mi(t,e,n,i){if(50<ia)throw ia=0,ph=null,Error(Se(185));Na(t,n,i),(!(rt&2)||t!==jt)&&(t===jt&&(!(rt&2)&&(Xc|=n),Ut===4&&fr(t,Qt)),Cn(t,i),n===1&&rt===0&&!(e.mode&1)&&(fo=Rt()+500,Vc&&Nr()))}function Cn(t,e){var n=t.callbackNode;F_(t,e);var i=cc(t,t===jt?Qt:0);if(i===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?zS(Qm.bind(null,t)):Dv(Qm.bind(null,t)),NS(function(){!(rt&6)&&Nr()}),n=null;else{switch(av(i)){case 1:n=Af;break;case 4:n=rv;break;case 16:n=lc;break;case 536870912:n=sv;break;default:n=lc}n=Px(n,wx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wx(t,e){if(Xl=-1,Yl=0,rt&6)throw Error(Se(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=cc(t,t===jt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bc(t,i);else{e=i;var r=rt;rt|=2;var s=Tx();(jt!==t||Qt!==e)&&(Fi=null,fo=Rt()+500,Jr(t,e));do try{r1();break}catch(a){Ex(t,a)}while(!0);kf(),Ec.current=s,rt=r,Lt!==null?e=0:(jt=null,Qt=0,e=Ut)}if(e!==0){if(e===2&&(r=Hd(t),r!==0&&(i=r,e=mh(t,r))),e===1)throw n=Ta,Jr(t,0),fr(t,i),Cn(t,Rt()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!n1(r)&&(e=bc(t,i),e===2&&(s=Hd(t),s!==0&&(i=s,e=mh(t,s))),e===1))throw n=Ta,Jr(t,0),fr(t,i),Cn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:Wr(t,Mn,Fi);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=ep+500-Rt(),10<e)){if(cc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kd(Wr.bind(null,t,Mn,Fi),e);break}Wr(t,Mn,Fi);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*t1(i/1960))-i,10<i){t.timeoutHandle=Kd(Wr.bind(null,t,Mn,Fi),i);break}Wr(t,Mn,Fi);break;case 5:Wr(t,Mn,Fi);break;default:throw Error(Se(329))}}}return Cn(t,Rt()),t.callbackNode===n?wx.bind(null,t):null}function mh(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=bc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&gh(e)),t}function gh(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function n1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~$f,e&=~Xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function Qm(t){if(rt&6)throw Error(Se(327));eo();var e=cc(t,0);if(!(e&1))return Cn(t,Rt()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var i=Hd(t);i!==0&&(e=i,n=mh(t,i))}if(n===1)throw n=Ta,Jr(t,0),fr(t,e),Cn(t,Rt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,Mn,Fi),Cn(t,Rt()),null}function tp(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(fo=Rt()+500,Vc&&Nr())}}function is(t){vr!==null&&vr.tag===0&&!(rt&6)&&eo();var e=rt;rt|=1;var n=Jn.transition,i=ut;try{if(Jn.transition=null,ut=1,t)return t()}finally{ut=i,Jn.transition=n,rt=e,!(rt&6)&&Nr()}}function np(){On=Ws.current,yt(Ws)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DS(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pc();break;case 3:uo(),yt(An),yt(un),jf();break;case 5:Wf(i);break;case 4:uo();break;case 13:yt(Mt);break;case 19:yt(Mt);break;case 10:Bf(i.type._context);break;case 22:case 23:np()}n=n.return}if(jt=t,Lt=t=Ar(t.current,null),Qt=On=e,Ut=0,Ta=null,$f=Xc=ns=0,Mn=na=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Kr=null}return t}function Ex(t,e){do{var n=Lt;try{if(kf(),Gl.current=wc,Mc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Mc=!1}if(ts=0,Vt=Nt=Et=null,ea=!1,Ma=0,Qf.current=null,n===null||n.return===null){Ut=1,Ta=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=km(o);if(p!==null){p.flags&=-257,Bm(p,o,a,s,e),p.mode&1&&Fm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Fm(s,c,e),ip();break e}l=Error(Se(426))}}else if(St&&a.mode&1){var g=km(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Bm(g,o,a,s,e),zf(ho(l,a));break e}}s=l=ho(l,a),Ut!==4&&(Ut=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ax(s,l,e);Dm(s,f);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Er===null||!Er.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=lx(s,a,e);Dm(s,M);break e}}s=s.return}while(s!==null)}bx(n)}catch(A){e=A,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Tx(){var t=Ec.current;return Ec.current=wc,t===null?wc:t}function ip(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),jt===null||!(ns&268435455)&&!(Xc&268435455)||fr(jt,Qt)}function bc(t,e){var n=rt;rt|=2;var i=Tx();(jt!==t||Qt!==e)&&(Fi=null,Jr(t,e));do try{i1();break}catch(r){Ex(t,r)}while(!0);if(kf(),rt=n,Ec.current=i,Lt!==null)throw Error(Se(261));return jt=null,Qt=0,Ut}function i1(){for(;Lt!==null;)Ax(Lt)}function r1(){for(;Lt!==null&&!R_();)Ax(Lt)}function Ax(t){var e=Rx(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?bx(t):Lt=e,Qf.current=null}function bx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=ZS(n,e,On),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Wr(t,e,n){var i=ut,r=Jn.transition;try{Jn.transition=null,ut=1,s1(t,e,n,i)}finally{Jn.transition=r,ut=i}return null}function s1(t,e,n,i){do eo();while(vr!==null);if(rt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k_(t,s),t===jt&&(Lt=jt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,Px(lc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=ut;ut=1;var a=rt;rt|=4,Qf.current=null,$S(t,n),Sx(n,t),TS(Yd),uc=!!Xd,Yd=Xd=null,t.current=n,e1(n),P_(),rt=a,ut=o,Jn.transition=s}else t.current=n;if(nl&&(nl=!1,vr=t,Ac=r),s=t.pendingLanes,s===0&&(Er=null),N_(n.stateNode),Cn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tc)throw Tc=!1,t=fh,fh=null,t;return Ac&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===ph?ia++:(ia=0,ph=t):ia=0,Nr(),null}function eo(){if(vr!==null){var t=av(Ac),e=Jn.transition,n=ut;try{if(Jn.transition=null,ut=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,Ac=0,rt&6)throw Error(Se(331));var r=rt;for(rt|=4,ze=t.current;ze!==null;){var s=ze,o=s.child;if(ze.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ze=c;ze!==null;){var u=ze;switch(u.tag){case 0:case 11:case 15:ta(8,u,s)}var d=u.child;if(d!==null)d.return=u,ze=d;else for(;ze!==null;){u=ze;var h=u.sibling,p=u.return;if(xx(u),u===c){ze=null;break}if(h!==null){h.return=p,ze=h;break}ze=p}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}ze=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ze=o;else e:for(;ze!==null;){if(s=ze,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ze=f;break e}ze=s.return}}var m=t.current;for(ze=m;ze!==null;){o=ze;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ze=x;else e:for(o=m;ze!==null;){if(a=ze,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(A){bt(a,a.return,A)}if(a===o){ze=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ze=M;break e}ze=a.return}}if(rt=r,Nr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(zc,t)}catch{}i=!0}return i}finally{ut=n,Jn.transition=e}}return!1}function $m(t,e,n){e=ho(n,e),e=ax(t,e,1),t=wr(t,e,1),e=pn(),t!==null&&(Na(t,1,e),Cn(t,e))}function bt(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=ho(n,t),t=lx(e,t,1),e=wr(e,t,1),t=pn(),e!==null&&(Na(e,1,t),Cn(e,t));break}}e=e.return}}function o1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Qt&n)===n&&(Ut===4||Ut===3&&(Qt&130023424)===Qt&&500>Rt()-ep?Jr(t,0):$f|=n),Cn(t,e)}function Cx(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=pn();t=Ki(t,e),t!==null&&(Na(t,e,n),Cn(t,n))}function a1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cx(t,n)}function l1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),Cx(t,n)}var Rx;Rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||An.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,KS(t,e,n);En=!!(t.flags&131072)}else En=!1,St&&e.flags&1048576&&Nv(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jl(t,e),t=e.pendingProps;var r=ao(e,un.current);$s(e,n),r=Yf(null,e,i,t,r,n);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,nh(e,i,t,n),e=sh(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Uf(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=u1(i),t=ai(i,t),r){case 0:e=rh(null,e,i,t,n);break e;case 1:e=Gm(null,e,i,t,n);break e;case 11:e=Hm(null,e,i,t,n);break e;case 14:e=Vm(null,e,i,ai(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),rh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Gm(t,e,i,r,n);case 3:e:{if(hx(e),t===null)throw Error(Se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kv(t,e),_c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ho(Error(Se(423)),e),e=Wm(t,e,i,n,r);break e}else if(i!==r){r=ho(Error(Se(424)),e),e=Wm(t,e,i,n,r);break e}else for(kn=Mr(e.stateNode.containerInfo.firstChild),Bn=e,St=!0,ui=null,n=zv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),i===r){e=Zi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return Bv(e),t===null&&$d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,qd(i,r)?o=null:s!==null&&qd(i,s)&&(e.flags|=32),dx(t,e),hn(t,e,o,n),e.child;case 6:return t===null&&$d(e),null;case 13:return fx(t,e,n);case 4:return Gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=co(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Hm(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(xc,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!An.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=$n(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Vm(t,e,i,r,n);case 15:return cx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),jl(t,e),e.tag=1,bn(i)?(t=!0,mc(e)):t=!1,$s(e,n),ox(e,i,r),nh(e,i,r,n),sh(null,e,i,!0,t,n);case 19:return px(t,e,n);case 22:return ux(t,e,n)}throw Error(Se(156,e.tag))};function Px(t,e){return iv(t,e)}function c1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new c1(t,e,n,i)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u1(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===Ef)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ql(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Qr(n.children,r,s,e);case Mf:o=8,r|=8;break;case Ad:return t=qn(12,n,e,r|2),t.elementType=Ad,t.lanes=s,t;case bd:return t=qn(13,n,e,r),t.elementType=bd,t.lanes=s,t;case Cd:return t=qn(19,n,e,r),t.elementType=Cd,t.lanes=s,t;case Bg:return Yc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fg:o=10;break e;case kg:o=9;break e;case wf:o=11;break e;case Ef:o=14;break e;case ur:o=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function Yc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=Bg,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function d1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,i,r,s,o,a,l){return t=new d1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function h1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lx(t){if(!t)return Rr;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(bn(n))return Lv(t,n,e)}return e}function Dx(t,e,n,i,r,s,o,a,l){return t=sp(n,i,!0,t,r,s,o,a,l),t.context=Lx(null),n=t.current,i=pn(),r=Tr(n),s=Xi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,Na(t,r,i),Cn(t,i),t}function qc(t,e,n,i){var r=e.current,s=pn(),o=Tr(r);return n=Lx(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(mi(t,r,o,s),Vl(t,r,o)),o}function Cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function op(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function f1(){return null}var Nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function ap(t){this._internalRoot=t}Kc.prototype.render=ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));qc(t,e,null,null)};Kc.prototype.unmount=ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){qc(null,t,null,null)}),e[qi]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&hv(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t0(){}function p1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cc(o);s.call(c)}}var o=Dx(e,i,t,0,null,!1,!1,"",t0);return t._reactRootContainer=o,t[qi]=o.current,va(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Cc(l);a.call(c)}}var l=sp(t,0,!1,null,null,!1,!1,"",t0);return t._reactRootContainer=l,t[qi]=l.current,va(t.nodeType===8?t.parentNode:t),is(function(){qc(e,l,n,i)}),l}function Jc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Cc(o);a.call(l)}}qc(e,o,t,r)}else o=p1(n,e,t,r,i);return Cc(o)}lv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(bf(e,n|1),Cn(e,Rt()),!(rt&6)&&(fo=Rt()+500,Nr()))}break;case 13:is(function(){var i=Ki(t,1);if(i!==null){var r=pn();mi(i,t,1,r)}}),op(t,1)}};Cf=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=pn();mi(e,t,134217728,n)}op(t,134217728)}};cv=function(t){if(t.tag===13){var e=Tr(t),n=Ki(t,e);if(n!==null){var i=pn();mi(n,t,e,i)}op(t,e)}};uv=function(){return ut};dv=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Fd=function(t,e,n){switch(e){case"input":if(Ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hc(i);if(!r)throw Error(Se(90));Vg(i),Ld(i,r)}}}break;case"textarea":Wg(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};Jg=tp;Qg=is;var m1={usingClientEntryPoint:!1,Events:[Ua,Fs,Hc,Kg,Zg,tp]},Do={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tv(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||f1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{zc=il.inject(g1),wi=il}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(Se(200));return h1(t,e,null,n)};Vn.createRoot=function(t,e){if(!lp(t))throw Error(Se(299));var n=!1,i="",r=Nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,va(t.nodeType===8?t.parentNode:t),new ap(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=tv(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return is(t)};Vn.hydrate=function(t,e,n){if(!Zc(e))throw Error(Se(200));return Jc(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!lp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Nx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dx(e,null,t,1,n??null,r,!1,s,o),t[qi]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kc(e)};Vn.render=function(t,e,n){if(!Zc(e))throw Error(Se(200));return Jc(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(Se(40));return t._reactRootContainer?(is(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};Vn.unstable_batchedUpdates=tp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zc(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Jc(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function Ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ix)}catch(t){console.error(t)}}Ix(),Ig.exports=Vn;var v1=Ig.exports,n0=v1;Ed.createRoot=n0.createRoot,Ed.hydrateRoot=n0.hydrateRoot;const Ux=[{type:"sofa",name:"Sofa",category:"Seating",w:2.1,d:.92,h:.82,color:"#9aa3af",shape:"seat"},{type:"loveseat",name:"Loveseat",category:"Seating",w:1.5,d:.92,h:.82,color:"#b1937a",shape:"seat"},{type:"armchair",name:"Armchair",category:"Seating",w:.88,d:.9,h:.82,color:"#7d8aa0",shape:"seat"},{type:"dining-chair",name:"Chair",category:"Seating",w:.5,d:.54,h:.9,color:"#caa472",shape:"chair"},{type:"bench",name:"Bench",category:"Seating",w:1.2,d:.42,h:.46,color:"#a98c6a",shape:"bench"},{type:"stool",name:"Stool",category:"Seating",w:.42,d:.42,h:.62,color:"#8a7256",shape:"round"},{type:"coffee-table",name:"Coffee Table",category:"Tables",w:1.1,d:.6,h:.42,color:"#7a5c41",shape:"table"},{type:"dining-table",name:"Dining Table",category:"Tables",w:1.7,d:.95,h:.75,color:"#6f4f37",shape:"table"},{type:"round-table",name:"Round Table",category:"Tables",w:1.15,d:1.15,h:.75,color:"#6f4f37",shape:"round-table"},{type:"side-table",name:"Side Table",category:"Tables",w:.5,d:.5,h:.55,color:"#7a5c41",shape:"table"},{type:"desk",name:"Desk",category:"Tables",w:1.4,d:.7,h:.75,color:"#5d5a55",shape:"desk"},{type:"bed-double",name:"Double Bed",category:"Bedroom",w:1.6,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"bed-single",name:"Single Bed",category:"Bedroom",w:1,d:2.05,h:.55,color:"#c9c2b6",shape:"bed"},{type:"nightstand",name:"Nightstand",category:"Bedroom",w:.46,d:.4,h:.5,color:"#7a5c41",shape:"cabinet"},{type:"wardrobe",name:"Wardrobe",category:"Bedroom",w:1.2,d:.6,h:2,color:"#5f534a",shape:"wardrobe"},{type:"dresser",name:"Dresser",category:"Bedroom",w:1,d:.5,h:.82,color:"#6b5946",shape:"drawers"},{type:"bookshelf",name:"Bookshelf",category:"Storage",w:.9,d:.34,h:1.8,color:"#6b5946",shape:"shelf"},{type:"tv-unit",name:"TV Unit",category:"Storage",w:1.7,d:.4,h:.48,color:"#3f4148",shape:"drawers"},{type:"tv",name:"TV",category:"Storage",w:1.25,d:.08,h:.72,color:"#15171b",shape:"tv"},{type:"cabinet",name:"Cabinet",category:"Storage",w:.9,d:.45,h:.92,color:"#5f534a",shape:"cabinet"},{type:"rug",name:"Rug",category:"Decor",w:2.2,d:1.5,h:.02,color:"#94604f",shape:"rug"},{type:"round-rug",name:"Round Rug",category:"Decor",w:1.6,d:1.6,h:.02,color:"#4f6b73",shape:"round-rug"},{type:"plant",name:"Plant",category:"Decor",w:.5,d:.5,h:1.3,color:"#3f7a4f",shape:"plant"},{type:"floor-lamp",name:"Floor Lamp",category:"Decor",w:.4,d:.4,h:1.6,color:"#e8d8a8",shape:"lamp"},{type:"fridge",name:"Fridge",category:"Kitchen",w:.72,d:.7,h:1.85,color:"#cfd4da",shape:"fridge"},{type:"counter",name:"Counter",category:"Kitchen",w:1.2,d:.6,h:.9,color:"#8e8e8e",shape:"counter"},{type:"island",name:"Kitchen Island",category:"Kitchen",w:1.4,d:.9,h:.9,color:"#7d7f83",shape:"counter"},{type:"range",name:"Range",category:"Kitchen",w:.6,d:.62,h:.9,color:"#4a4d52",shape:"range"},{type:"oven",name:"Stove / Oven",category:"Kitchen",w:.6,d:.62,h:.9,color:"#d3d7dc",shape:"oven"},{type:"sink",name:"Kitchen Sink",category:"Kitchen",w:.85,d:.6,h:.9,color:"#7a5c41",shape:"sink"},{type:"dishwasher",name:"Dishwasher",category:"Kitchen",w:.6,d:.6,h:.85,color:"#cfd4da",shape:"appliance"},{type:"washer",name:"Washing Machine",category:"Appliances",w:.6,d:.62,h:.85,color:"#e8eaec",shape:"washer"},{type:"dryer",name:"Dryer",category:"Appliances",w:.6,d:.62,h:.85,color:"#dfe2e5",shape:"washer"},{type:"chest-freezer",name:"Chest Freezer",category:"Appliances",w:1,d:.6,h:.85,color:"#e2e6ea",shape:"appliance"},{type:"water-heater",name:"Water Heater",category:"Appliances",w:.55,d:.55,h:1.5,color:"#d9dde1",shape:"fridge"},{type:"ac-unit",name:"AC Unit",category:"Appliances",w:.5,d:.5,h:.7,color:"#cfd4da",shape:"appliance"},{type:"toilet",name:"Toilet",category:"Bathroom",w:.4,d:.68,h:.78,color:"#f2f2f0",shape:"toilet"},{type:"bathtub",name:"Bathtub",category:"Bathroom",w:1.7,d:.75,h:.56,color:"#f3f3f1",shape:"bathtub"},{type:"shower",name:"Shower",category:"Bathroom",w:.9,d:.9,h:2,color:"#e8e8e6",shape:"shower"},{type:"vanity",name:"Vanity",category:"Bathroom",w:.8,d:.5,h:.85,color:"#6f5a45",shape:"sink"},{type:"office-chair",name:"Office Chair",category:"Office",w:.6,d:.6,h:1.1,color:"#3a3a40",shape:"chair"},{type:"filing-cabinet",name:"Filing Cabinet",category:"Office",w:.45,d:.6,h:1.32,color:"#6b6f74",shape:"drawers"},{type:"office-desk",name:"Office Desk",category:"Office",w:1.5,d:.75,h:.75,color:"#5d5a55",shape:"desk"}],cp=Object.fromEntries(Ux.map(t=>[t.type,t]));function Bi(t){return cp[t]||null}const x1=["#9aa3af","#7d8aa0","#5b6472","#c9c2b6","#b1937a","#a98c6a","#7a5c41","#5f534a","#94604f","#caa472","#4f6b73","#3f7a4f","#d9b779","#15171b","#cfd4da"],Ox="honeycutt.design.v2";let y1=1;const yn=()=>`${Date.now().toString(36)}-${(y1++).toString(36)}`;function js(){return{view:"2d",tool:"select",openingMode:!1,openShape:"rect",units:"ft",ambiance:"day",quality:"high",defaultHeight:2.7,rooms:[],walls:[],items:[],builtins:[],sketches:[],openings:[],selected:null}}function _1(){try{const t=localStorage.getItem(Ox);if(!t)return js();const e=JSON.parse(t);if(!e||!Array.isArray(e.items))return js();const n=e.view==="3d"?"3d":"2d",i=e.ambiance==="night"?"night":"day";return{...js(),...e,view:n,ambiance:i,tool:"select",openingMode:!1,selected:null}}catch{return js()}}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function S1(t){return t.scale&&(t.scale={x:Jt(t.scale.x??1,.3,3),y:Jt(t.scale.y??1,.3,3),z:Jt(t.scale.z??1,.3,3)}),t}function vh(t){return t.w=Jt(t.w,.5,40),t.d=Jt(t.d,.5,40),t.height!=null&&(t.height=Jt(t.height,1.5,6)),t.floorScale!=null&&(t.floorScale=Jt(t.floorScale,.3,4)),t}function zx(t){return t.height!=null&&(t.height=Jt(t.height,1.5,6)),t.thickness!=null&&(t.thickness=Jt(t.thickness,.05,.5)),t}function xh(t){return t.w!=null&&(t.w=Jt(t.w,.1,12)),t.h!=null&&(t.h=Jt(t.h,.1,6)),t.depth!=null&&(t.depth=Jt(t.depth,.02,3)),t.thickness!=null&&(t.thickness=Jt(t.thickness,.01,.4)),t}function Fx(t){return t.u!=null&&(t.u=Math.max(0,t.u)),t.v!=null&&(t.v=Jt(t.v,0,6)),t.w!=null&&(t.w=Jt(t.w,.1,12)),t.h!=null&&(t.h=Jt(t.h,.1,6)),t}const yh={item:"items",room:"rooms",wall:"walls",builtin:"builtins",sketch:"sketches",opening:"openings"};function M1(t,e,n,i){const r=yh[e],s=t[r].map(o=>{if(o.uid!==n)return o;const a={...o,...i};return e==="item"&&S1(a),e==="room"&&vh(a),e==="wall"&&zx(a),e==="builtin"&&xh(a),e==="opening"&&Fx(a),a});return{...t,[r]:s}}function Uu(t,e){var n;switch(e.type){case"view":return{...t,view:e.view,openingMode:e.view==="3d"?t.openingMode:!1};case"openingMode":return{...t,openingMode:e.value,selected:e.value?null:t.selected};case"openShape":return{...t,openShape:e.value};case"ambiance":return{...t,ambiance:e.value};case"quality":return{...t,quality:e.value};case"units":return{...t,units:e.value};case"tool":return{...t,tool:e.tool,selected:e.tool==="select"?t.selected:null};case"defaultHeight":return{...t,defaultHeight:Jt(e.value,1.5,6)};case"select":return{...t,selected:e.sel||null};case"loadRooms":{const i=e.rooms.map(r=>vh({uid:yn(),height:t.defaultHeight,...r}));return{...js(),view:t.view,units:t.units,ambiance:t.ambiance,quality:t.quality,defaultHeight:t.defaultHeight,rooms:i,selected:null}}case"addRoom":{const i=vh({uid:yn(),name:e.name||`Room ${t.rooms.length+1}`,x:e.x,z:e.z,w:e.w,d:e.d,height:e.height??t.defaultHeight,floor:"#b08a5e"});return{...t,rooms:[...t.rooms,i],tool:"select",selected:{type:"room",uid:i.uid}}}case"addWall":{const i=zx({uid:yn(),x1:e.x1,z1:e.z1,x2:e.x2,z2:e.z2,height:e.height??t.defaultHeight,thickness:.1});return{...t,walls:[...t.walls,i],tool:"select",selected:null}}case"floorAll":return{...t,rooms:t.rooms.map(i=>({...i,...e.patch}))};case"addBuiltin":{const i=xh({uid:yn(),kind:"cubby",depth:.4,color:"#c7ad84",...e.builtin});return{...t,builtins:[...t.builtins,i],selected:{type:"builtin",uid:i.uid}}}case"addBuiltins":{const i=e.list.map(r=>xh({uid:yn(),depth:.4,color:"#c79a6b",kind:"panel",...r}));return{...t,builtins:[...t.builtins,...i],selected:i.length?{type:"builtin",uid:i[i.length-1].uid}:t.selected}}case"addOpening":{const i=Fx({uid:yn(),kind:"doorway",v:0,shape:"rect",...e.opening});return{...t,openings:[...t.openings,i],selected:{type:"opening",uid:i.uid}}}case"addSketch":{const i={uid:yn(),pts:e.pts,closed:!!e.closed,color:e.color||"#3f7d8c"};return{...t,sketches:[...t.sketches,i],selected:{type:"sketch",uid:i.uid}}}case"addItem":{const i=cp[e.kind];if(!i)return t;const r={uid:yn(),type:e.kind,x:e.x??0,z:e.z??0,rot:0,color:i.color,scale:{x:1,y:1,z:1}};return{...t,items:[...t.items,r],selected:{type:"item",uid:r.uid}}}case"update":return M1(t,e.sel.type,e.sel.uid,e.patch);case"remove":{const i=yh[e.sel.type],r=t.selected&&t.selected.uid===e.sel.uid?null:t.selected;return{...t,[i]:t[i].filter(s=>s.uid!==e.sel.uid),selected:r}}case"duplicate":{const{type:i,uid:r}=e.sel,s=yh[i],o=t[s].find(l=>l.uid===r);if(!o)return t;let a;return i==="wall"?a={...o,uid:yn(),x1:o.x1+.3,z1:o.z1+.3,x2:o.x2+.3,z2:o.z2+.3}:i==="builtin"?a=o.kind==="board"?{...o,uid:yn(),u1:o.u1+.3,v1:o.v1+.3,u2:o.u2+.3,v2:o.v2+.3}:{...o,uid:yn(),u:o.u+.3,v:o.v+.3}:i==="sketch"?a={...o,uid:yn(),pts:o.pts.map(l=>({x:l.x+.3,z:l.z+.3}))}:i==="opening"?a={...o,uid:yn(),u:o.u+.3}:a={...o,uid:yn(),x:o.x+.3,z:o.z+.3},{...t,[s]:[...t[s],a],selected:{type:i,uid:a.uid}}}case"clear":return{...t,items:[],selected:((n=t.selected)==null?void 0:n.type)==="item"?null:t.selected};case"reset":return{...js(),view:t.view,units:t.units,ambiance:t.ambiance,defaultHeight:t.defaultHeight};default:return t}}const w1=new Set(["addRoom","addWall","addSketch","addItem","addBuiltin","addBuiltins","addOpening","floorAll","loadRooms","update","remove","duplicate","clear","reset","defaultHeight"]),Ou=80;function E1(t,e){if(e.type==="undo"){if(!t.past.length)return t;const r=t.past[t.past.length-1];return{past:t.past.slice(0,-1),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape},future:[t.present,...t.future].slice(0,Ou),lastKey:null,lastTime:0}}if(e.type==="redo"){if(!t.future.length)return t;const r=t.future[0];return{past:[...t.past,t.present].slice(-Ou),present:{...r,view:t.present.view,units:t.present.units,ambiance:t.present.ambiance,quality:t.present.quality,tool:t.present.tool,openingMode:t.present.openingMode,openShape:t.present.openShape},future:t.future.slice(1),lastKey:null,lastTime:0}}if(!w1.has(e.type))return{...t,present:Uu(t.present,e)};const n=Date.now(),i=e.mergeKey;return i&&i===t.lastKey&&n-t.lastTime<1500?{...t,present:Uu(t.present,e),lastTime:n}:{past:[...t.past,t.present].slice(-Ou),present:Uu(t.present,e),future:[],lastKey:i||null,lastTime:n}}const kx=We.createContext(null);function T1({children:t}){const[e,n]=We.useReducer(E1,void 0,()=>({past:[],present:_1(),future:[],lastKey:null,lastTime:0})),i=We.useRef(null),r=e.present;We.useEffect(()=>(clearTimeout(i.current),i.current=setTimeout(()=>{try{localStorage.setItem(Ox,JSON.stringify(r))}catch{}},250),()=>clearTimeout(i.current)),[r]);const s=We.useMemo(()=>({state:r,dispatch:n,canUndo:e.past.length>0,canRedo:e.future.length>0}),[r,e.past.length,e.future.length]);return y.jsx(kx.Provider,{value:s,children:t})}function So(){const t=We.useContext(kx);if(!t)throw new Error("useStore must be used within StoreProvider");return t}function A1(t){const e=Math.round(t*39.3701);if(e<12)return`${e}″`;const n=Math.floor(e/12),i=e-n*12;return`${i?`${n}′${i}″`:`${n}′`} (${e}″)`}function et(t,e){return e==="m"?`${t.toFixed(2)} m`:A1(t)}function b1(t,e){return e==="m"?`${t.toFixed(1)} m²`:`${Math.round(t*10.7639)} ft²`}function pr(t,e){const n=e&&e.scale||{},i=e&&e.dim||t||{w:.5,d:.5,h:.5};return{w:i.w*(n.x??1),d:i.d*(n.z??1),h:i.h*(n.y??1)}}function to(t=8){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}function ra(t,e,n){if(!t)return null;if(t.kind==="room"){const a=e.find(c=>c.uid===t.uid);if(!a)return null;const l={height:a.height};switch(t.side){case"n":return{ox:a.x,oz:a.z,dirx:1,dirz:0,nx:0,nz:1,length:a.w,...l};case"s":return{ox:a.x,oz:a.z+a.d,dirx:1,dirz:0,nx:0,nz:-1,length:a.w,...l};case"e":return{ox:a.x+a.w,oz:a.z,dirx:0,dirz:1,nx:-1,nz:0,length:a.d,...l};default:return{ox:a.x,oz:a.z,dirx:0,dirz:1,nx:1,nz:0,length:a.d,...l}}}const i=n.find(a=>a.uid===t.uid);if(!i)return null;const r=i.x2-i.x1,s=i.z2-i.z1,o=Math.hypot(r,s)||1e-6;return{ox:i.x1,oz:i.z1,dirx:r/o,dirz:s/o,nx:s/o,nz:-r/o,length:o,height:i.height}}function C1(t,e){return!t||!e||t.kind!==e.kind||t.uid!==e.uid?!1:t.kind==="room"?t.side===e.side:!0}const Bx=[{id:"oak_floor",label:"Oak Floor",group:"Wood",color:"#806042",normal:!0,repeat:1.4},{id:"wood_floor",label:"Wood Plank",group:"Wood",color:"#7a5c3e",normal:!1,repeat:1.4},{id:"light_oak",label:"Light Oak",group:"Wood",color:"#a17e58",normal:!0,repeat:1},{id:"walnut",label:"Walnut",group:"Wood",color:"#3e190b",normal:!0,repeat:1},{id:"parquet",label:"Parquet",group:"Wood",color:"#93704d",normal:!0,repeat:1.2},{id:"herringbone",label:"Herringbone",group:"Wood",color:"#9a7550",normal:!1,repeat:1},{id:"marble",label:"Marble",group:"Stone",color:"#b29d7a",normal:!0,repeat:2},{id:"granite",label:"Granite",group:"Stone",color:"#4e4e4f",normal:!1,repeat:1.6},{id:"floor_tile",label:"Floor Tile",group:"Tile",color:"#796f6b",normal:!0,repeat:1.2},{id:"brick",label:"Brick",group:"Masonry",color:"#8e6750",normal:!0,repeat:1.6},{id:"concrete",label:"Concrete",group:"Masonry",color:"#565654",normal:!0,repeat:2.2},{id:"plaster",label:"Plaster",group:"Wall",color:"#b0a89d",normal:!0,repeat:2.4},{id:"grey_plaster",label:"Grey Plaster",group:"Wall",color:"#9a968f",normal:!1,repeat:2.4},{id:"fabric",label:"Fabric",group:"Soft",color:"#9a5955",normal:!0,repeat:.8},{id:"carpet",label:"Carpet",group:"Soft",color:"#352f25",normal:!1,repeat:1.5},{id:"grass",label:"Grass",group:"Outdoor",color:"#5f7d3f",normal:!1,repeat:1.5}],Kl=Object.fromEntries(Bx.map(t=>[t.id,t])),sa=(t,e=!1)=>`./textures/${t}${e?"_n":""}.jpg`,R1="./hdri/studio.hdr";function Dn(t,e){let n=t.replace("#","");n.length===3&&(n=n.split("").map(l=>l+l).join(""));const i=parseInt(n,16);let r=i>>16&255,s=i>>8&255,o=i&255;const a=l=>Math.round(e<0?l*(1+e):l+(255-l)*e);return r=a(r),s=a(s),o=a(o),`rgb(${r},${s},${o})`}const Ur="rgba(0,0,0,0.22)",i0="rgba(0,0,0,0.28)";function Hx({item:t,wpx:e,dpx:n}){const{color:i,shape:r}=t,s=e,o=n,a=-s/2,l=-o/2,c=Math.min(s,o)*.13,u=Math.max(.8,Math.min(s,o)*.025),d=Dn(i,.16),h=Dn(i,-.22),p=(S,g,f,m,x,M=c,A={})=>y.jsx("rect",{x:S,y:g,width:f,height:m,rx:M,ry:M,fill:x,...A});let v=null;switch(r){case"seat":{const S=o*.26,g=s*.12;v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,S,h,c)," ",p(a,l+S*.5,g,o-S*.5,h,c*.6),p(a+s-g,l+S*.5,g,o-S*.5,h,c*.6),p(a+g+u,l+S,s-2*(g+u),o-S-u,d,c*.5)]});break}case"chair":{const S=o*.22;v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,S,h,c),p(a+u,l+S,s-2*u,o-S-u,d,c*.5)]});break}case"bench":{v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),p(a+s*.05,l+o*.18,s*.9,o*.64,d,c*.4)]});break}case"round":v=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),y.jsx("circle",{cx:0,cy:0,r:s*.3,fill:d})]});break;case"table":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,h),p(a+u*1.5,l+u*1.5,s-3*u,o-3*u,i,c*.8),p(a+s*.12,l+o*.12,s*.76,o*.76,d,c*.5)]});break;case"desk":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.7),p(a+s*.62,l+u*2,s*.34,o-u*4,d,c*.4)]});break;case"round-table":v=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:h}),y.jsx("circle",{cx:0,cy:0,r:s/2-u*1.5,fill:i}),y.jsx("circle",{cx:0,cy:0,r:s*.34,fill:d})]});break;case"bed":{const S=o*.16,g=s*.4,f=o*.18;v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),p(a,l,s,S,h,c)," ",p(a+s*.05,l+S+o*.04,g,f,d,c*.4),p(a+s*.55,l+S+o*.04,g,f,d,c*.4),p(a+s*.05,l+S+f+o*.08,s*.9,o-S-f-o*.12,Dn(i,.07),c*.3)]});break}case"cabinet":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),y.jsx("line",{x1:0,y1:l+o*.2,x2:0,y2:l+o*.8,stroke:i0,strokeWidth:u}),y.jsx("circle",{cx:-s*.06,cy:0,r:u*1.2,fill:Ur}),y.jsx("circle",{cx:s*.06,cy:0,r:u*1.2,fill:Ur})]});break;case"wardrobe":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),y.jsx("line",{x1:0,y1:l,x2:0,y2:l+o,stroke:i0,strokeWidth:u}),y.jsx("line",{x1:a+s*.25,y1:l+o*.3,x2:a+s*.25,y2:l+o*.7,stroke:Ur,strokeWidth:u*1.6}),y.jsx("line",{x1:a+s*.75,y1:l+o*.3,x2:a+s*.75,y2:l+o*.7,stroke:Ur,strokeWidth:u*1.6})]});break;case"drawers":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.5),y.jsx("line",{x1:a+s*.35,y1:l+o*.5,x2:a+s*.65,y2:l+o*.5,stroke:Ur,strokeWidth:u*1.6,strokeLinecap:"round"})]});break;case"shelf":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),[.3,.5,.7].map((S,g)=>y.jsx("line",{x1:a+s*.12,y1:l+o*S,x2:a+s*.88,y2:l+o*S,stroke:Ur,strokeWidth:u},g))]});break;case"tv":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,"#0c0d10",c*.4),p(a+u,l,s-2*u,o*.55,"#22303f",c*.2)]});break;case"rug":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i,c*.3),p(a+s*.06,l+o*.09,s*.88,o*.82,"none",c*.2,{stroke:Dn(i,.25),strokeWidth:u*1.4,strokeDasharray:`${u*3} ${u*3}`})]});break;case"round-rug":v=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:i}),y.jsx("circle",{cx:0,cy:0,r:s*.36,fill:"none",stroke:Dn(i,.25),strokeWidth:u*1.4})]});break;case"plant":v=y.jsxs(y.Fragment,{children:[p(a+s*.28,l+o*.28,s*.44,o*.44,Dn("#8a6a4a",-.1),c*.4),y.jsx("circle",{cx:-s*.18,cy:-o*.1,r:s*.26,fill:Dn(i,.1)}),y.jsx("circle",{cx:s*.2,cy:-o*.16,r:s*.22,fill:i}),y.jsx("circle",{cx:s*.06,cy:o*.2,r:s*.27,fill:Dn(i,-.12)}),y.jsx("circle",{cx:-s*.08,cy:o*.02,r:s*.2,fill:Dn(i,.18)})]});break;case"lamp":v=y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:0,cy:0,r:s/2,fill:Dn(i,-.05)}),y.jsx("circle",{cx:0,cy:0,r:s*.22,fill:Dn(i,.3)})]});break;case"fridge":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),p(a+u,l+u,s-2*u,o-2*u,d,c*.4),y.jsx("line",{x1:a+s*.78,y1:l+o*.2,x2:a+s*.78,y2:l+o*.8,stroke:Ur,strokeWidth:u*1.8,strokeLinecap:"round"})]});break;case"counter":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,h),p(a+u,l+u,s-2*u,o-2*u,i,c*.4),p(a+s*.58,l+o*.22,s*.32,o*.56,Dn(i,-.18),c*.3)]});break;case"range":v=y.jsxs(y.Fragment,{children:[p(a,l,s,o,i),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].map(([S,g],f)=>y.jsx("circle",{cx:s*S,cy:o*g,r:s*.13,fill:"none",stroke:Dn(i,.3),strokeWidth:u},f))]});break;default:v=p(a,l,s,o,i)}return y.jsx("g",{children:v})}const kt=({children:t,size:e=22,...n})=>y.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),P1=t=>y.jsxs(kt,{...t,children:[y.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),y.jsx("path",{d:"M3 9h18M9 9v12"})]}),L1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M12 2.5 21 7v10l-9 4.5L3 17V7z"}),y.jsx("path",{d:"m3 7 9 4.5L21 7M12 11.5V21.5"})]}),D1=t=>y.jsx(kt,{...t,children:y.jsx("path",{d:"M12 5v14M5 12h14"})}),N1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),y.jsx("path",{d:"M21 3v5h-5"})]}),Or=t=>y.jsxs(kt,{...t,children:[y.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),y.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),tr=t=>y.jsx(kt,{...t,children:y.jsx("path",{d:"M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"})}),I1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"}),y.jsx("circle",{cx:"16",cy:"6",r:"2"}),y.jsx("circle",{cx:"8",cy:"12",r:"2"}),y.jsx("circle",{cx:"14",cy:"18",r:"2"})]}),U1=t=>y.jsx(kt,{...t,children:y.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),O1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"}),y.jsx("path",{d:"M14 12h.01"})]}),Vx=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3"}),y.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),Gx=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M9 14 4 9l5-5"}),y.jsx("path",{d:"M4 9h11a5 5 0 0 1 0 10h-3"})]}),z1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"m15 14 5-5-5-5"}),y.jsx("path",{d:"M20 9H9a5 5 0 0 0 0 10h3"})]}),F1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M12 15V3"}),y.jsx("path",{d:"m8 7 4-4 4 4"}),y.jsx("path",{d:"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"})]}),k1=t=>y.jsxs(kt,{...t,children:[y.jsx("circle",{cx:"12",cy:"12",r:"4"}),y.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),r0=t=>y.jsx(kt,{...t,children:y.jsx("path",{d:"M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z"})}),B1=t=>y.jsx(kt,{...t,children:y.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),H1=t=>y.jsx(kt,{...t,children:y.jsx("path",{d:"M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3"})}),V1=t=>y.jsxs(kt,{...t,children:[y.jsx("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),y.jsx("path",{d:"M14 3v5h5M12 11v6M9 14h6"})]}),s0=t=>y.jsx(kt,{...t,children:y.jsx("path",{d:"M4 12l5 5L20 6"})}),_t="#d9b779",o0="#39414f",G1="#c3c9d1",W1="#eef1f5",Wx=.0254,a0=Wx,zu=18,l0=["n","e","s","w"],j1="#2f7d8c",X1=16,rn=(t,e)=>Math.round(t/e)*e,jr=(t,e,n)=>Math.max(e,Math.min(n,t)),c0=(t,e)=>!t.wallsOn||t.wallsOn[e]!==!1,Y1={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function q1(t){const e=t.floorTex||(t.floorColor?null:"wood:oak");if(!e)return{color:t.floorColor||"#eef1f5"};if(e.startsWith("wood:"))return{color:Y1[e.slice(5)]||"#c79a6b"};if(e.startsWith("mat:")){const n=Kl[e.slice(4)];if(n)return{mat:e.slice(4),repeat:n.repeat||1.5,color:n.color}}return{color:t.floorColor||"#cdb89a"}}function K1(t,e,n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r].x,a=n[r].z,l=n[s].x,c=n[s].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function Fu(t,e){switch(e){case"n":return[t.x,t.z,t.x+t.w,t.z];case"s":return[t.x,t.z+t.d,t.x+t.w,t.z+t.d];case"w":return[t.x,t.z,t.x,t.z+t.d];default:return[t.x+t.w,t.z,t.x+t.w,t.z+t.d]}}function rl(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a||1e-6;let c=((t-n)*o+(e-i)*a)/l;return c=jr(c,0,1),Math.hypot(t-(n+c*o),e-(i+c*a))}function Z1(){const{state:t,dispatch:e}=So(),{rooms:n,walls:i,items:r,sketches:s,openings:o,selected:a,units:l,tool:c,defaultHeight:u}=t,d=l==="ft"?Wx:.01,[h,p]=We.useState([]),[v,S]=We.useState(null),g=We.useRef(null),f=We.useRef(null),[m,x]=We.useState({W:360,H:540}),[M,A]=We.useState({scale:64,panX:180,panY:270,init:!1}),[T,w]=We.useState(null),b=We.useRef(null);b.current=T;const I=We.useRef(new Map),_=We.useRef(null),E=We.useRef(M);E.current=M;const z=We.useRef(!1);We.useLayoutEffect(()=>{const L=g.current;if(!L)return;const V=()=>{const P=L.clientWidth,G=L.clientHeight;x({W:P,H:G}),A(W=>W.init?W:{scale:64,panX:P/2,panY:G/2,init:!0})},re=new ResizeObserver(V);return re.observe(L),V(),()=>re.disconnect()},[]);const{W:O,H}=m;function $(){let L=1/0,V=-1/0,re=1/0,P=-1/0;const G=(ee,ye)=>{L=Math.min(L,ee),V=Math.max(V,ee),re=Math.min(re,ye),P=Math.max(P,ye)};for(const ee of n)G(ee.x,ee.z),G(ee.x+ee.w,ee.z+ee.d);for(const ee of i)G(ee.x1,ee.z1),G(ee.x2,ee.z2);for(const ee of r){const ye=Bi(ee.type),Pe=pr(ye,ee);G(ee.x-Pe.w/2,ee.z-Pe.d/2),G(ee.x+Pe.w/2,ee.z+Pe.d/2)}for(const ee of s)for(const ye of ee.pts)G(ye.x,ye.z);if(!isFinite(L)){A({scale:64,panX:O/2,panY:H/2,init:!0});return}const W=56,k=92,q=64,de=Math.max(.5,V-L),fe=Math.max(.5,P-re),Ae=jr(Math.min((O-2*W)/de,(H-k-q)/fe),14,180),F=(L+V)/2,me=(re+P)/2,se=(k+(H-q))/2;A({scale:Ae,panX:O/2-F*Ae,panY:se-me*Ae,init:!0})}const j=n.length>0||i.length>0||r.length>0||s.length>0,ae=We.useRef(0);We.useLayoutEffect(()=>{if(!m.W)return;const L=ae.current&&Math.abs(m.W-ae.current)>60;ae.current=m.W,j&&(!z.current||L)&&($(),z.current=!0)},[m.W,j]),We.useLayoutEffect(()=>{c!=="sketch"&&(p([]),S(null))},[c]);const{scale:U,panX:X,panY:ne}=M,oe=(L,V)=>[L*U+X,V*U+ne],ge=(L,V)=>[(L-X)/U,(V-ne)/U],Le=L=>{const V=f.current.getBoundingClientRect();return[L.clientX-V.left,L.clientY-V.top]},te=(a==null?void 0:a.type)==="item"?r.find(L=>L.uid===a.uid):null,ue=(a==null?void 0:a.type)==="room"?n.find(L=>L.uid===a.uid):null,ve=(a==null?void 0:a.type)==="wall"?i.find(L=>L.uid===a.uid):null,pe=(a==null?void 0:a.type)==="sketch"?s.find(L=>L.uid===a.uid):null;function Oe(L){const V=Bi(L.type),re=pr(V,L),[P,G]=oe(L.x,L.z),W=(L.rot||0)*Math.PI/180,k=Math.cos(W),q=Math.sin(W),de=re.w*U/2,fe=re.d*U/2;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ae,F])=>{const me=Ae*de,se=F*fe;return[P+me*k-se*q,G+me*q+se*k]})}function Ce(L){return{nw:oe(L.x,L.z),ne:oe(L.x+L.w,L.z),se:oe(L.x+L.w,L.z+L.d),sw:oe(L.x,L.z+L.d)}}function Fe(L,V){const[re,P]=ge(L,V);if(te){const G=Oe(te);for(let W=0;W<4;W++)if(Math.hypot(L-G[W][0],V-G[W][1])<zu)return{kind:"item-handle"}}if(ue){const G=Ce(ue);for(const W in G)if(Math.hypot(L-G[W][0],V-G[W][1])<zu)return{kind:"room-handle",handle:W}}if(ve)for(const G of["1","2"]){const[W,k]=oe(ve["x"+G],ve["z"+G]);if(Math.hypot(L-W,V-k)<zu)return{kind:"wall-end",end:G}}for(let G=r.length-1;G>=0;G--){const W=r[G],k=Bi(W.type);if(!k)continue;const q=pr(k,W),de=(W.rot||0)*Math.PI/180,fe=re-W.x,Ae=P-W.z,F=fe*Math.cos(de)+Ae*Math.sin(de),me=-fe*Math.sin(de)+Ae*Math.cos(de);if(Math.abs(F)<=q.w/2+.08&&Math.abs(me)<=q.d/2+.08)return{kind:"item",uid:W.uid}}for(let G=i.length-1;G>=0;G--){const W=i[G];if(rl(re,P,W.x1,W.z1,W.x2,W.z2)<=W.thickness/2+.18)return{kind:"wall",uid:W.uid}}for(let G=s.length-1;G>=0;G--){const W=s[G],k=W.closed?W.pts.length:W.pts.length-1;for(let q=0;q<k;q++){const de=W.pts[q],fe=W.pts[(q+1)%W.pts.length];if(rl(re,P,de.x,de.z,fe.x,fe.z)<=.18)return{kind:"sketch",uid:W.uid}}}for(let G=o.length-1;G>=0;G--){const W=o[G],k=ra(W.wall,n,i);if(!k)continue;const q=k.ox+k.dirx*W.u,de=k.oz+k.dirz*W.u,fe=k.ox+k.dirx*(W.u+W.w),Ae=k.oz+k.dirz*(W.u+W.w);if(rl(re,P,q,de,fe,Ae)<=.2)return{kind:"opening",uid:W.uid}}for(let G=n.length-1;G>=0;G--){const W=n[G];for(const k of l0){const[q,de,fe,Ae]=Fu(W,k);if(rl(re,P,q,de,fe,Ae)<=.18)return{kind:"roomwall",uid:W.uid,side:k}}}for(let G=n.length-1;G>=0;G--){const W=n[G];if(re>=W.x&&re<=W.x+W.w&&P>=W.z&&P<=W.z+W.d)return{kind:"room",uid:W.uid}}for(let G=s.length-1;G>=0;G--){const W=s[G];if(W.closed&&W.pts.length>=3&&K1(re,P,W.pts))return{kind:"sketch",uid:W.uid}}return{kind:"empty"}}function Xe(L){const V=[],re=[];for(const P of n)P.uid!==L&&(V.push(P.x,P.x+P.w),re.push(P.z,P.z+P.d));return{xs:V,zs:re}}function he(L,V,re=.28){let P=null,G=re;for(const W of V){const k=Math.abs(L-W);k<G&&(G=k,P=W)}return P}const N=(L,V)=>{const re=he(L,Xe(V).xs);return re??rn(L,d)},Me=(L,V)=>{const re=he(L,Xe(V).zs);return re??rn(L,d)};function Te(){const L=[];for(const V of n)L.push({x:V.x,z:V.z},{x:V.x+V.w,z:V.z},{x:V.x,z:V.z+V.d},{x:V.x+V.w,z:V.z+V.d});for(const V of i)L.push({x:V.x1,z:V.z1},{x:V.x2,z:V.z2});return L}function xe(L,V,re=.35){let P=null,G=re;for(const W of Te()){const k=Math.hypot(L-W.x,V-W.z);k<G&&(G=k,P=W)}return P}function be(L,V,re,P){const G=xe(re,P);if(G)return{x:G.x,z:G.z};let W=re,k=P;return Math.abs(W-L)>=Math.abs(k-V)?k=V:W=L,{x:N(W),z:Me(k)}}const ke=L=>{const[V,re]=Le(L);if(I.current.set(L.pointerId,{x:V,y:re}),f.current.setPointerCapture(L.pointerId),I.current.size===2){const k=[...I.current.values()],q=(k[0].x+k[1].x)/2,de=(k[0].y+k[1].y)/2,fe=Math.hypot(k[0].x-k[1].x,k[0].y-k[1].y),Ae=E.current;_.current={startDist:fe,startScale:Ae.scale,wmx:(q-Ae.panX)/Ae.scale,wmy:(de-Ae.panY)/Ae.scale},w(null);return}if(I.current.size>2)return;const[P,G]=ge(V,re);if(c==="room"){const k=N(P),q=Me(G);w({kind:"drawRoom",x0:k,z0:q,cur:{x:k,z:q,w:0,d:0}});return}if(c==="wall"){const k=xe(P,G),q=k?k.x:N(P),de=k?k.z:Me(G);w({kind:"drawWall",x1:q,z1:de,cur:{x1:q,z1:de,x2:q,z2:de}});return}if(c==="sketch"){w({kind:"sketch",sx:V,sy:re,panX:E.current.panX,panY:E.current.panY,moved:!1});return}const W=Fe(V,re);switch(W.kind){case"item-handle":w({kind:"resizeItem",uid:te.uid,cxw:te.x,czw:te.z,rot:te.rot||0,c:te.dim||Bi(te.type)});break;case"room-handle":w({kind:"resizeRoom",uid:ue.uid,handle:W.handle,x0:ue.x,z0:ue.z,w0:ue.w,d0:ue.d});break;case"wall-end":w({kind:"wallEnd",uid:ve.uid,end:W.end});break;case"item":{const k=r.find(q=>q.uid===W.uid);e({type:"select",sel:{type:"item",uid:W.uid}}),w({kind:"moveItem",uid:W.uid,ox:P-k.x,oz:G-k.z});break}case"wall":{const k=i.find(q=>q.uid===W.uid);e({type:"select",sel:{type:"wall",uid:W.uid}}),w({kind:"moveWall",uid:W.uid,ox:P,oz:G,x1:k.x1,z1:k.z1,x2:k.x2,z2:k.z2});break}case"sketch":{const k=s.find(q=>q.uid===W.uid);e({type:"select",sel:{type:"sketch",uid:W.uid}}),w({kind:"moveSketch",uid:W.uid,ox:P,oz:G,pts:k.pts});break}case"opening":e({type:"select",sel:{type:"opening",uid:W.uid}}),w(null);break;case"roomwall":e({type:"select",sel:{type:"roomwall",uid:W.uid,side:W.side}}),w(null);break;case"room":{const k=n.find(q=>q.uid===W.uid);e({type:"select",sel:{type:"room",uid:W.uid}}),w({kind:"moveRoom",uid:W.uid,ox:P-k.x,oz:G-k.z});break}default:w({kind:"pan",sx:V,sy:re,panX:E.current.panX,panY:E.current.panY,moved:!1})}},De=L=>{const[V,re]=Le(L);if(I.current.has(L.pointerId)&&I.current.set(L.pointerId,{x:V,y:re}),_.current&&I.current.size>=2){const k=[...I.current.values()],q=(k[0].x+k[1].x)/2,de=(k[0].y+k[1].y)/2,fe=Math.hypot(k[0].x-k[1].x,k[0].y-k[1].y),Ae=_.current,F=jr(Ae.startScale*(fe/Ae.startDist),12,220);A({scale:F,panX:q-Ae.wmx*F,panY:de-Ae.wmy*F,init:!0});return}if(c==="sketch"&&I.current.size<=1){const[k,q]=ge(V,re);S({x:N(k),z:Me(q)})}const P=b.current;if(!P)return;const[G,W]=ge(V,re);if(P.kind==="pan")!P.moved&&Math.hypot(V-P.sx,re-P.sy)>4&&(P.moved=!0),A(k=>({...k,panX:P.panX+(V-P.sx),panY:P.panY+(re-P.sy)}));else if(P.kind==="sketch")!P.moved&&Math.hypot(V-P.sx,re-P.sy)>7&&(P.moved=!0),P.moved&&A(k=>({...k,panX:P.panX+(V-P.sx),panY:P.panY+(re-P.sy)}));else if(P.kind==="drawRoom"){const k=N(G),q=Me(W);w(de=>({...de,cur:{x:Math.min(de.x0,k),z:Math.min(de.z0,q),w:Math.abs(k-de.x0),d:Math.abs(q-de.z0)}}))}else if(P.kind==="drawWall"){const k=be(P.x1,P.z1,G,W);w(q=>({...q,cur:{x1:q.x1,z1:q.z1,x2:k.x,z2:k.z}}))}else if(P.kind==="moveItem")e({type:"update",sel:{type:"item",uid:P.uid},patch:{x:rn(G-P.ox,a0),z:rn(W-P.oz,a0)},mergeKey:`mv:${P.uid}`});else if(P.kind==="resizeItem"){const k=G-P.cxw,q=W-P.czw,de=P.rot*Math.PI/180,fe=k*Math.cos(de)+q*Math.sin(de),Ae=-k*Math.sin(de)+q*Math.cos(de),F=jr(2*Math.max(.1,Math.abs(fe))/P.c.w,.3,3),me=jr(2*Math.max(.1,Math.abs(Ae))/P.c.d,.3,3),se=jr(Math.sqrt(F*me),.3,3);e({type:"update",sel:{type:"item",uid:P.uid},patch:{scale:{x:F,y:se,z:me}},mergeKey:`sz:${P.uid}`})}else if(P.kind==="moveRoom"){const k=n.find(fe=>fe.uid===P.uid);let q=G-P.ox,de=W-P.oz;if(k){const{xs:fe,zs:Ae}=Xe(P.uid),F=he(q,fe),me=he(q+k.w,fe);F!=null&&(me==null||Math.abs(q-F)<=Math.abs(q+k.w-me))?q=F:me!=null?q=me-k.w:q=rn(q,d);const se=he(de,Ae),ee=he(de+k.d,Ae);se!=null&&(ee==null||Math.abs(de-se)<=Math.abs(de+k.d-ee))?de=se:ee!=null?de=ee-k.d:de=rn(de,d)}e({type:"update",sel:{type:"room",uid:P.uid},patch:{x:q,z:de},mergeKey:`mv:${P.uid}`})}else if(P.kind==="resizeRoom"){let k=P.x0,q=P.z0,de=P.x0+P.w0,fe=P.z0+P.d0;const{xs:Ae,zs:F}=Xe(P.uid),me=ee=>{const ye=he(ee,Ae);return ye??rn(ee,d)},se=ee=>{const ye=he(ee,F);return ye??rn(ee,d)};P.handle.includes("e")&&(de=Math.max(k+.5,me(G))),P.handle.includes("w")&&(k=Math.min(de-.5,me(G))),P.handle.includes("s")&&(fe=Math.max(q+.5,se(W))),P.handle.includes("n")&&(q=Math.min(fe-.5,se(W))),e({type:"update",sel:{type:"room",uid:P.uid},patch:{x:k,z:q,w:de-k,d:fe-q},mergeKey:`rs:${P.uid}`})}else if(P.kind==="moveWall"){const k=rn(G-P.ox,d),q=rn(W-P.oz,d);e({type:"update",sel:{type:"wall",uid:P.uid},patch:{x1:P.x1+k,z1:P.z1+q,x2:P.x2+k,z2:P.z2+q},mergeKey:`mv:${P.uid}`})}else if(P.kind==="wallEnd"){const k=P.end==="1"?{x1:rn(G,d),z1:rn(W,d)}:{x2:rn(G,d),z2:rn(W,d)};e({type:"update",sel:{type:"wall",uid:P.uid},patch:k,mergeKey:`we:${P.uid}`})}else if(P.kind==="moveSketch"){const k=rn(G-P.ox,d),q=rn(W-P.oz,d);e({type:"update",sel:{type:"sketch",uid:P.uid},patch:{pts:P.pts.map(de=>({x:de.x+k,z:de.z+q}))},mergeKey:`mv:${P.uid}`})}},D=L=>{const[V,re]=Le(L);I.current.delete(L.pointerId),I.current.size<2&&(_.current=null);const P=b.current;if(P)if(P.kind==="sketch"){if(!P.moved){const[G,W]=ge(V,re),k={x:N(G),z:Me(W)};let q=!1;if(h.length>=3){const[de,fe]=oe(h[0].x,h[0].z);Math.hypot(V-de,re-fe)<X1&&(q=!0)}q?(e({type:"addSketch",pts:h,closed:!0}),p([]),S(null),to(12)):(p(de=>[...de,k]),to(6))}}else P.kind==="drawRoom"?P.cur.w>.3&&P.cur.d>.3?e({type:"addRoom",x:P.cur.x,z:P.cur.z,w:P.cur.w,d:P.cur.d,height:u}):e({type:"addRoom",x:N(P.x0-1.8),z:Me(P.z0-1.5),w:3.6,d:3,height:u}):P.kind==="drawWall"&&Math.hypot(P.cur.x2-P.cur.x1,P.cur.z2-P.cur.z1)>.2?e({type:"addWall",...P.cur,height:u}):P.kind==="pan"&&!P.moved&&e({type:"select",sel:null});I.current.size===0&&w(null);try{f.current.releasePointerCapture(L.pointerId)}catch{}},C=L=>{(L&&h.length>=3||!L&&h.length>=2)&&(e({type:"addSketch",pts:h,closed:L}),to(12)),p([]),S(null)};function ie(L,V,re,P){const G=[],W=V?L.length:L.length-1;for(let k=0;k<W;k++){const q=L[k],de=L[(k+1)%L.length],fe=Math.hypot(de.x-q.x,de.z-q.z);if(fe<.001)continue;const[Ae,F]=oe(q.x,q.z),[me,se]=oe(de.x,de.z);let ee=(Ae+me)/2,ye=(F+se)/2;const Pe=-(se-F),Ze=me-Ae,ft=Math.hypot(Pe,Ze)||1;ee+=Pe/ft*11,ye+=Ze/ft*11,G.push(y.jsx("text",{x:ee,y:ye+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:re,stroke:"#fff",strokeWidth:3.2,paintOrder:"stroke",strokeLinejoin:"round",fontFamily:"-apple-system, system-ui, sans-serif",children:et(fe,l)},`${P}-l${k}`))}return G}const Y=L=>{const[V,re]=Le(L),P=E.current,G=jr(P.scale*(L.deltaY<0?1.1:.9),12,220),W=(V-P.panX)/P.scale,k=(re-P.panY)/P.scale;A({scale:G,panX:V-W*G,panY:re-k*G,init:!0})},K=[],J=[];{const L=l==="ft"?.3048:1,V=U*L;let re=1;V<6&&(re=5),V*re<6&&(re=25);const P=re*5,[G]=ge(0,0),[W]=ge(O,0),[,k]=ge(0,0),[,q]=ge(0,H),de=G/L,fe=W/L,Ae=k/L,F=q/L,me=l==="ft"?"′":"m";if((fe-de)/re<500){for(let se=Math.ceil(de/re)*re;se<=fe;se+=re){const ee=Math.round(se),[ye]=oe(ee*L,0),Pe=ee===0,Ze=ee%P===0;K.push(y.jsx("line",{x1:ye,y1:0,x2:ye,y2:H,stroke:"#000",strokeOpacity:Pe?.22:Ze?.11:.045,strokeWidth:1},`v${ee}`)),Ze&&!Pe&&J.push(y.jsxs("text",{x:ye+3,y:12,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[ee,me]},`vl${ee}`))}for(let se=Math.ceil(Ae/re)*re;se<=F;se+=re){const ee=Math.round(se),[,ye]=oe(0,ee*L),Pe=ee===0,Ze=ee%P===0;K.push(y.jsx("line",{x1:0,y1:ye,x2:O,y2:ye,stroke:"#000",strokeOpacity:Pe?.22:Ze?.11:.045,strokeWidth:1},`h${ee}`)),Ze&&!Pe&&J.push(y.jsxs("text",{x:3,y:ye-3,fontSize:9.5,fill:"#8a929c",fontFamily:"-apple-system, system-ui, sans-serif",children:[ee,me]},`hl${ee}`))}}}const we=n.length===0&&i.length===0&&r.length===0&&s.length===0&&h.length===0;return y.jsxs("div",{className:"editor2d",ref:g,children:[y.jsxs("svg",{ref:f,onPointerDown:ke,onPointerMove:De,onPointerUp:D,onPointerCancel:D,onWheel:Y,style:{touchAction:"none",cursor:c==="select"?"default":"crosshair"},children:[y.jsx("defs",{children:y.jsx("filter",{id:"softshadow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:y.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000",floodOpacity:"0.22"})})}),y.jsx("rect",{x:0,y:0,width:O,height:H,fill:"transparent"}),y.jsx("g",{pointerEvents:"none",children:K}),y.jsx("g",{pointerEvents:"none",children:J}),n.map(L=>{const[V,re]=oe(L.x,L.z),P=L.w*U,G=L.d*U,W=q1(L),k=W.mat?Math.max(10,W.repeat*U):0,q=`fp-${L.uid}`;return y.jsxs("g",{pointerEvents:"none",children:[W.mat&&y.jsx("defs",{children:y.jsxs("pattern",{id:q,patternUnits:"userSpaceOnUse",width:k,height:k,patternTransform:`translate(${X} ${ne})`,children:[y.jsx("rect",{width:k,height:k,fill:W.color}),y.jsx("image",{href:sa(W.mat),width:k,height:k,preserveAspectRatio:"xMidYMid slice"})]})}),y.jsx("rect",{x:V,y:re,width:P,height:G,fill:W.mat?`url(#${q})`:W.color}),L.name&&P>46&&G>26&&y.jsx("text",{x:V+P/2,y:re+G/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:12,fontWeight:700,fill:"#33373d",stroke:"#fff",strokeWidth:3,paintOrder:"stroke",strokeLinejoin:"round",letterSpacing:"0.3",fontFamily:"-apple-system, system-ui, sans-serif",children:L.name})]},L.uid)}),n.map(L=>y.jsx("g",{pointerEvents:"none",children:l0.map(V=>{const[re,P,G,W]=Fu(L,V),[k,q]=oe(re,P),[de,fe]=oe(G,W),Ae=c0(L,V),F=(a==null?void 0:a.type)==="roomwall"&&a.uid===L.uid&&a.side===V;return y.jsx("line",{x1:k,y1:q,x2:de,y2:fe,stroke:F?_t:Ae?o0:G1,strokeWidth:F?6:Ae?4:2,strokeLinecap:"round",strokeDasharray:Ae?void 0:"7 7"},V)})},L.uid)),ue&&(()=>{const[L,V]=oe(ue.x,ue.z),re=ue.w*U;return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:L,y:V,width:re,height:ue.d*U,fill:"none",stroke:_t,strokeOpacity:.7,strokeWidth:2,strokeDasharray:"6 5"}),y.jsxs("g",{fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[y.jsx("rect",{x:L+re/2-78,y:V-25,width:156,height:19,rx:9.5,fill:_t}),y.jsxs("text",{x:L+re/2,y:V-11,textAnchor:"middle",children:[et(ue.w,l)," × ",et(ue.d,l)]})]}),Object.entries(Ce(ue)).map(([P,[G,W]])=>y.jsx("circle",{cx:G,cy:W,r:7,fill:_t,stroke:"#20160a",strokeWidth:2,filter:"url(#softshadow)"},P))]})})(),i.map(L=>{const[V,re]=oe(L.x1,L.z1),[P,G]=oe(L.x2,L.z2),W=(ve==null?void 0:ve.uid)===L.uid;return y.jsx("line",{x1:V,y1:re,x2:P,y2:G,stroke:W?_t:o0,strokeWidth:Math.max(5,L.thickness*U),strokeLinecap:"round",pointerEvents:"none"},L.uid)}),ve&&(()=>{const[L,V]=oe(ve.x1,ve.z1),[re,P]=oe(ve.x2,ve.z2);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("circle",{cx:L,cy:V,r:7,fill:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"}),y.jsx("circle",{cx:re,cy:P,r:7,fill:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"})]})})(),o.map(L=>{const V=ra(L.wall,n,i);if(!V)return null;const re=V.ox+V.dirx*L.u,P=V.oz+V.dirz*L.u,G=V.ox+V.dirx*(L.u+L.w),W=V.oz+V.dirz*(L.u+L.w),[k,q]=oe(re,P),[de,fe]=oe(G,W),Ae=(a==null?void 0:a.type)==="opening"&&a.uid===L.uid;let F=-(fe-q),me=de-k;const se=Math.hypot(F,me)||1;F=F/se*6,me=me/se*6;const ee=Ae?_t:"#5f6a78",ye=[y.jsx("line",{x1:k,y1:q,x2:de,y2:fe,stroke:W1,strokeWidth:7,strokeLinecap:"butt"},"gap"),y.jsx("line",{x1:k-F,y1:q-me,x2:k+F,y2:q+me,stroke:ee,strokeWidth:2.5,strokeLinecap:"round"},"j1"),y.jsx("line",{x1:de-F,y1:fe-me,x2:de+F,y2:fe+me,stroke:ee,strokeWidth:2.5,strokeLinecap:"round"},"j2")];if(L.kind==="doorway"){const Pe=re+V.nx*L.w,Ze=P+V.nz*L.w,[ft,Xt]=oe(Pe,Ze),nt=L.w*U;ye.push(y.jsx("line",{x1:k,y1:q,x2:ft,y2:Xt,stroke:ee,strokeWidth:2.5,strokeLinecap:"round"},"leaf")),ye.push(y.jsx("path",{d:`M ${de} ${fe} A ${nt} ${nt} 0 0 1 ${ft} ${Xt}`,fill:"none",stroke:ee,strokeWidth:1.6,strokeDasharray:"4 4"},"arc"))}else L.kind==="window"&&ye.push(y.jsx("line",{x1:k,y1:q,x2:de,y2:fe,stroke:Ae?_t:"#5b86a8",strokeWidth:2.5,strokeLinecap:"round"},"glass"));return y.jsx("g",{pointerEvents:"none",children:ye},L.uid)}),s.map(L=>{const V=(pe==null?void 0:pe.uid)===L.uid,re=L.pts.map(G=>oe(G.x,G.z).join(",")).join(" "),P=V?_t:j1;return y.jsxs("g",{pointerEvents:"none",children:[L.closed?y.jsx("polygon",{points:re,fill:P,fillOpacity:.07,stroke:P,strokeWidth:V?3:2.5,strokeLinejoin:"round"}):y.jsx("polyline",{points:re,fill:"none",stroke:P,strokeWidth:V?3:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),ie(L.pts,L.closed,V?"#7a5a16":"#15545f",L.uid),V&&L.pts.map((G,W)=>{const[k,q]=oe(G.x,G.z);return y.jsx("circle",{cx:k,cy:q,r:5,fill:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"},W)})]},L.uid)}),c==="sketch"&&h.length>0&&(()=>{const L=v?[...h,v]:h,V=L.map(W=>oe(W.x,W.z).join(",")).join(" "),[re,P]=oe(h[0].x,h[0].z),G=h.length>=3;return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("polyline",{points:V,fill:"none",stroke:_t,strokeWidth:2.5,strokeDasharray:"7 5",strokeLinejoin:"round",strokeLinecap:"round"}),ie(L,!1,"#7a5a16","draft"),h.map((W,k)=>{const[q,de]=oe(W.x,W.z);return y.jsx("circle",{cx:q,cy:de,r:k===0?6:4.5,fill:k===0?_t:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"},k)}),G&&y.jsx("circle",{cx:re,cy:P,r:11,fill:"none",stroke:_t,strokeWidth:2,strokeDasharray:"3 3"})]})})(),r.map(L=>{const V=Bi(L.type);if(!V)return null;const[re,P]=oe(L.x,L.z),G=pr(V,L),W=G.w*U,k=G.d*U,q=(te==null?void 0:te.uid)===L.uid;return y.jsxs("g",{transform:`translate(${re} ${P}) rotate(${L.rot||0})`,pointerEvents:"none",children:[y.jsx("g",{filter:"url(#softshadow)",opacity:V.shape==="rug"||V.shape==="round-rug"?.96:1,children:y.jsx(Hx,{item:{...V,color:L.color||V.color},wpx:W,dpx:k})}),q&&y.jsx("rect",{x:-W/2-5,y:-k/2-5,width:W+10,height:k+10,rx:7,fill:"none",stroke:_t,strokeWidth:2,strokeDasharray:"6 5"})]},L.uid)}),(T==null?void 0:T.kind)==="drawRoom"&&(()=>{const[L,V]=oe(T.cur.x,T.cur.z);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("rect",{x:L,y:V,width:T.cur.w*U,height:T.cur.d*U,fill:_t,fillOpacity:.12,stroke:_t,strokeWidth:3,strokeDasharray:"6 5"}),y.jsxs("text",{x:L+T.cur.w*U/2,y:V-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:[et(T.cur.w,l)," × ",et(T.cur.d,l)]})]})})(),(T==null?void 0:T.kind)==="drawWall"&&(()=>{const[L,V]=oe(T.cur.x1,T.cur.z1),[re,P]=oe(T.cur.x2,T.cur.z2),G=Math.hypot(T.cur.x2-T.cur.x1,T.cur.z2-T.cur.z1);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("line",{x1:L,y1:V,x2:re,y2:P,stroke:_t,strokeWidth:6,strokeLinecap:"round",strokeDasharray:"8 6"}),y.jsx("text",{x:(L+re)/2,y:(V+P)/2-8,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#9a7327",children:et(G,l)})]})})(),te&&(()=>{const L=Oe(te),V=Bi(te.type),re=pr(V,te),[P,G]=oe(te.x,te.z),W=Math.hypot(re.w*U,re.d*U)/2;return y.jsxs("g",{pointerEvents:"none",children:[L.map(([k,q],de)=>y.jsx("circle",{cx:k,cy:q,r:7,fill:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"},de)),y.jsx("rect",{x:P-78,y:G-W-30,width:156,height:20,rx:10,fill:_t}),y.jsxs("text",{x:P,y:G-W-16,textAnchor:"middle",fontSize:11.5,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:[et(re.w,l)," × ",et(re.d,l)]})]})})(),(a==null?void 0:a.type)==="roomwall"&&(()=>{const L=n.find(F=>F.uid===a.uid);if(!L)return null;const[V,re,P,G]=Fu(L,a.side),[W,k]=oe(V,re),[q,de]=oe(P,G),fe=Math.hypot(P-V,G-re),Ae=c0(L,a.side);return y.jsxs("g",{pointerEvents:"none",children:[y.jsx("circle",{cx:W,cy:k,r:6,fill:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"}),y.jsx("circle",{cx:q,cy:de,r:6,fill:"#fff",stroke:_t,strokeWidth:2.5,filter:"url(#softshadow)"}),y.jsx("rect",{x:(W+q)/2-60,y:(k+de)/2-11,width:120,height:20,rx:10,fill:_t}),y.jsx("text",{x:(W+q)/2,y:(k+de)/2+3,textAnchor:"middle",fontSize:11,fontWeight:700,fill:"#20160a",fontFamily:"-apple-system, system-ui, sans-serif",children:Ae?et(fe,l):"opening"})]})})()]}),y.jsx("button",{className:"recenter",onClick:$,"aria-label":"Fit to view",children:y.jsx(Vx,{size:20})}),c==="sketch"&&h.length>0&&y.jsxs("div",{className:"sketch-bar",children:[y.jsx("button",{onClick:()=>p(L=>L.slice(0,-1)),title:"Undo last point",children:y.jsx(Gx,{size:17})}),y.jsxs("button",{onClick:()=>C(!1),disabled:h.length<2,title:"Finish open line",children:[y.jsx(s0,{size:18})," Finish"]}),y.jsxs("button",{className:"accent",onClick:()=>C(!0),disabled:h.length<3,title:"Close shape",children:[y.jsx(s0,{size:18})," Close shape"]}),y.jsx("button",{onClick:()=>{p([]),S(null)},title:"Cancel",children:y.jsx(U1,{size:17})})]}),we&&y.jsxs("div",{className:"empty",children:[y.jsx("b",{children:"Start your floor plan"}),y.jsxs("span",{children:["Pick ",y.jsx("strong",{children:"Room"})," and drag, or use ",y.jsx("strong",{children:"Sketch"})," to free-draw any space with live measurements — or just tap to drop a room."]}),y.jsx("button",{className:"empty-cta",onClick:()=>e({type:"addRoom",x:N(-1.8),z:Me(-1.5),w:3.6,d:3,height:u}),children:"+ Add a room"})]}),y.jsx("div",{className:"hint",children:c==="room"?"Drag to draw a room":c==="wall"?"Drag to draw a wall":c==="sketch"?"Tap to drop points — each edge is measured · tap the first point to close · drag to pan":te?"Drag to move · drag white corners to resize":ue?"Drag inside to move · corners to resize · tap a wall to edit it":ve?"Drag the wall or its endpoints":pe?"Drag to move this sketch · edit dimensions in the panel":(a==null?void 0:a.type)==="roomwall"?"Use the button to delete or restore this wall":"Drag to pan · pinch to zoom · tap a wall to select it"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="169",no={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},J1=0,u0=1,Q1=2,jx=1,Xx=2,zi=3,Pr=0,mn=1,fn=2,Kt=0,io=1,d0=2,h0=3,f0=4,Yx=5,di=100,$1=101,eM=102,tM=103,nM=104,Yo=200,iM=201,rM=202,sM=203,_h=204,Sh=205,Mh=206,oM=207,wh=208,aM=209,lM=210,cM=211,uM=212,dM=213,hM=214,Eh=0,Th=1,Ah=2,po=3,bh=4,Ch=5,Rh=6,Ph=7,qx=0,fM=1,pM=2,br=0,Kx=1,Zx=2,Jx=3,dp=4,mM=5,Qx=6,$x=7,ey=300,mo=301,go=302,Rc=303,Lh=304,Qc=306,wn=1e3,Wi=1001,Dh=1002,Wt=1003,gM=1004,sl=1005,Zt=1006,ku=1007,xr=1008,bi=1009,ty=1010,ny=1011,Aa=1012,hp=1013,rs=1014,Kn=1015,Tn=1016,fp=1017,pp=1018,ss=1020,iy=35902,ry=1021,sy=1022,Zn=1023,oy=1024,ay=1025,ro=1026,os=1027,ly=1028,mp=1029,cy=1030,gp=1031,vp=1033,Zl=33776,Jl=33777,Ql=33778,$l=33779,Nh=35840,Ih=35841,Uh=35842,Oh=35843,zh=36196,Fh=37492,kh=37496,Bh=37808,Hh=37809,Vh=37810,Gh=37811,Wh=37812,jh=37813,Xh=37814,Yh=37815,qh=37816,Kh=37817,Zh=37818,Jh=37819,Qh=37820,$h=37821,ec=36492,ef=36494,tf=36495,uy=36283,nf=36284,rf=36285,sf=36286,vM=3200,xM=3201,xp=0,yM=1,mr="",ln="srgb",Qi="srgb-linear",yp="display-p3",$c="display-p3-linear",Pc="linear",pt="srgb",Lc="rec709",Dc="p3",gs=7680,p0=519,_M=512,SM=513,MM=514,dy=515,wM=516,EM=517,TM=518,AM=519,m0=35044,g0="300 es",ji=2e3,Nc=2001;class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,of=180/Math.PI;function Mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function bM(t,e){return(t%e+e)%e}function Bu(t,e,n){return(1-n)*t+n*e}function No(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const CM={DEG2RAD:tc};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],S=r[0],g=r[3],f=r[6],m=r[1],x=r[4],M=r[7],A=r[2],T=r[5],w=r[8];return s[0]=o*S+a*m+l*A,s[3]=o*g+a*x+l*T,s[6]=o*f+a*M+l*w,s[1]=c*S+u*m+d*A,s[4]=c*g+u*x+d*T,s[7]=c*f+u*M+d*w,s[2]=h*S+p*m+v*A,s[5]=h*g+p*x+v*T,s[8]=h*f+p*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=d*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hu.makeScale(e,n)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hu=new $e;function hy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ba(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function RM(){const t=ba("canvas");return t.style.display="block",t}const v0={};function nc(t){t in v0||(v0[t]=!0,console.warn(t))}function PM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function LM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const x0=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),y0=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Io={[Qi]:{transfer:Pc,primaries:Lc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ln]:{transfer:pt,primaries:Lc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$c]:{transfer:Pc,primaries:Dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(y0),fromReference:t=>t.applyMatrix3(x0)},[yp]:{transfer:pt,primaries:Dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(y0),fromReference:t=>t.applyMatrix3(x0).convertLinearToSRGB()}},NM=new Set([Qi,$c]),ot={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!NM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Io[e].toReference,r=Io[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Io[t].primaries},getTransfer:function(t){return t===mr?Pc:Io[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Io[e].luminanceCoefficients)}};function so(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class IM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=ba("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ba("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=so(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(so(n[i]/255)*255):n[i]=so(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UM=0;class fy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Mo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gu(r[o].image)):s.push(Gu(r[o]))}else s=Gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OM=0;class Ot extends hs{constructor(e=Ot.DEFAULT_IMAGE,n=Ot.DEFAULT_MAPPING,i=Wi,r=Wi,s=Zt,o=xr,a=Zn,l=bi,c=Ot.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Mo(),this.name="",this.source=new fy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ey)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ey;Ot.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,A=(f+1)/2,T=(u+h)/4,w=(d+S)/4,b=(v+g)/4;return x>M&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=w/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=b/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-S)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new fy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends zM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class py extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=S;return}if(d!==S||l!==h||c!==p||u!==v){let g=1-a;const f=l*h+c*p+u*v+d*S,m=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,f*m);g=Math.sin(g*T)/A,a=Math.sin(a*T)/A}const M=a*m;if(l=l*g+h*M,c=c*g+p*M,u=u*g+v*M,d=d*g+S*M,g===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new B,_0=new as;class za{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),al.subVectors(this.max,Uo),xs.subVectors(e.a,Uo),ys.subVectors(e.b,Uo),_s.subVectors(e.c,Uo),nr.subVectors(ys,xs),ir.subVectors(_s,ys),zr.subVectors(xs,_s);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-zr.z,zr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,zr.z,0,-zr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-zr.y,zr.x,0];return!ju(n,xs,ys,_s,al)||(n=[1,0,0,0,1,0,0,0,1],!ju(n,xs,ys,_s,al))?!1:(ll.crossVectors(nr,ir),n=[ll.x,ll.y,ll.z],ju(n,xs,ys,_s,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new B,new B,new B,new B,new B,new B,new B,new B],ri=new B,ol=new za,xs=new B,ys=new B,_s=new B,nr=new B,ir=new B,zr=new B,Uo=new B,al=new B,ll=new B,Fr=new B;function ju(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kM=new za,Oo=new B,Xu=new B;class _p{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Xu)),this.expandByPoint(Oo.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new B,Yu=new B,cl=new B,rr=new B,qu=new B,ul=new B,Ku=new B;class Sp{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yu.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(Yu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cl),a=rr.dot(this.direction),l=-rr.dot(cl),c=rr.lengthSq(),u=Math.abs(1-o*o);let d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const S=1/u;d*=S,h*=S,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yu).addScaledVector(cl,h),p}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){qu.subVectors(n,e),ul.subVectors(i,e),Ku.crossVectors(qu,ul);let o=this.direction.dot(Ku),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(rr,ul));if(l<0)return null;const c=a*this.direction.dot(qu.cross(rr));if(c<0||l+c>o)return null;const u=-a*rr.dot(Ku);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,v,S,g){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,v,S,g)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,v,S,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,v=a*u,S=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,S=c*d;n[0]=h+S*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,S=c*d;n[0]=h-S*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,v=a*u,S=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+S,n[1]=l*d,n[5]=S*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=S-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-S*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+S,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,HM)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),sr.crossVectors(i,Nn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),sr.crossVectors(i,Nn)),sr.normalize(),dl.crossVectors(Nn,sr),r[0]=sr.x,r[4]=dl.x,r[8]=Nn.x,r[1]=sr.y,r[5]=dl.y,r[9]=Nn.y,r[2]=sr.z,r[6]=dl.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],S=i[6],g=i[10],f=i[14],m=i[3],x=i[7],M=i[11],A=i[15],T=r[0],w=r[4],b=r[8],I=r[12],_=r[1],E=r[5],z=r[9],O=r[13],H=r[2],$=r[6],j=r[10],ae=r[14],U=r[3],X=r[7],ne=r[11],oe=r[15];return s[0]=o*T+a*_+l*H+c*U,s[4]=o*w+a*E+l*$+c*X,s[8]=o*b+a*z+l*j+c*ne,s[12]=o*I+a*O+l*ae+c*oe,s[1]=u*T+d*_+h*H+p*U,s[5]=u*w+d*E+h*$+p*X,s[9]=u*b+d*z+h*j+p*ne,s[13]=u*I+d*O+h*ae+p*oe,s[2]=v*T+S*_+g*H+f*U,s[6]=v*w+S*E+g*$+f*X,s[10]=v*b+S*z+g*j+f*ne,s[14]=v*I+S*O+g*ae+f*oe,s[3]=m*T+x*_+M*H+A*U,s[7]=m*w+x*E+M*$+A*X,s[11]=m*b+x*z+M*j+A*ne,s[15]=m*I+x*O+M*ae+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],S=e[7],g=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],S=e[13],g=e[14],f=e[15],m=d*g*c-S*h*c+S*l*p-a*g*p-d*l*f+a*h*f,x=v*h*c-u*g*c-v*l*p+o*g*p+u*l*f-o*h*f,M=u*S*c-v*d*c+v*a*p-o*S*p-u*a*f+o*d*f,A=v*d*l-u*S*l-v*a*h+o*S*h+u*a*g-o*d*g,T=n*m+i*x+r*M+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=m*w,e[1]=(S*h*s-d*g*s-S*r*p+i*g*p+d*r*f-i*h*f)*w,e[2]=(a*g*s-S*l*s+S*r*c-i*g*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=x*w,e[5]=(u*g*s-v*h*s+v*r*p-n*g*p-u*r*f+n*h*f)*w,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*f-n*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=M*w,e[9]=(v*d*s-u*S*s-v*i*p+n*S*p+u*i*f-n*d*f)*w,e[10]=(o*S*s-v*a*s+v*i*c-n*S*c-o*i*f+n*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=A*w,e[13]=(u*S*r-v*d*r+v*i*h-n*S*h-u*i*g+n*d*g)*w,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*g-n*a*g)*w,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,v=s*d,S=o*u,g=o*d,f=a*d,m=l*c,x=l*u,M=l*d,A=i.x,T=i.y,w=i.z;return r[0]=(1-(S+f))*A,r[1]=(p+M)*A,r[2]=(v-x)*A,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(h+f))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(v+x)*w,r[9]=(g-m)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ss.set(r[0],r[1],r[2]).length();const o=Ss.set(r[4],r[5],r[6]).length(),a=Ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/o,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,n.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ji){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===ji)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Nc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ji){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,S;if(a===ji)v=(o+s)*d,S=-2*d;else if(a===Nc)v=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ss=new B,si=new it,BM=new B(0,0,0),HM=new B(1,1,1),sr=new B,dl=new B,Nn=new B,S0=new it,M0=new as;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return M0.setFromEuler(this),this.setFromQuaternion(M0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const w0=new B,Ms=new as,Ni=new it,hl=new B,zo=new B,GM=new B,WM=new as,E0=new B(1,0,0),T0=new B(0,1,0),A0=new B(0,0,1),b0={type:"added"},jM={type:"removed"},ws={type:"childadded",child:null},Zu={type:"childremoved",child:null};class $t extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new B,n=new Ci,i=new as,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new $e}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(T0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,n){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(T0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hl.copy(e):hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(zo,hl,this.up):Ni.lookAt(hl,zo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b0),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jM),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b0),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,GM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,WM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new B(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new B,Ii=new B,Ju=new B,Ui=new B,Es=new B,Ts=new B,C0=new B,Qu=new B,$u=new B,ed=new B,td=new ht,nd=new ht,id=new ht;class hi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),Ii.subVectors(i,n),Ju.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Ii),l=oi.dot(Ju),c=Ii.dot(Ii),u=Ii.dot(Ju),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(td,s.x),o.addScaledVector(nd,s.y),o.addScaledVector(id,s.z),o}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Ii.subVectors(e,n),oi.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),Ts.subVectors(s,i),Qu.subVectors(e,i);const l=Es.dot(Qu),c=Ts.dot(Qu);if(l<=0&&c<=0)return n.copy(i);$u.subVectors(e,r);const u=Es.dot($u),d=Ts.dot($u);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Es,o);ed.subVectors(e,s);const p=Es.dot(ed),v=Ts.dot(ed);if(v>=0&&p<=v)return n.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ts,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return C0.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(C0,a);const f=1/(g+S+h);return o=S*f,a=h*f,n.copy(i).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const my={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},fl={h:0,s:0,l:0};function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=bM(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rd(o,s,e+1/3),this.g=rd(o,s,e),this.b=rd(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const i=my[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=Vu(e.r),this.g=Vu(e.g),this.b=Vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ot.fromWorkingColorSpace(on.copy(this),e),Math.round(Gt(on.r*255,0,255))*65536+Math.round(Gt(on.g*255,0,255))*256+Math.round(Gt(on.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ln){ot.fromWorkingColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(fl);const i=Bu(or.h,fl.h,n),r=Bu(or.s,fl.s,n),s=Bu(or.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Ke;Ke.NAMES=my;let XM=0;class wo extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=io,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=Sh,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_h&&(i.blendSrc=this.blendSrc),this.blendDst!==Sh&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ca extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hi=YM();function YM(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function qM(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Gt(t,-65504,65504),Hi.floatView[0]=t;const e=Hi.uint32View[0],n=e>>23&511;return Hi.baseTable[n]+((e&8388607)>>Hi.shiftTable[n])}function KM(t){const e=t>>10;return Hi.uint32View[0]=Hi.mantissaTable[Hi.offsetTable[e]+(t&1023)]+Hi.exponentTable[e],Hi.floatView[0]}const pl={toHalfFloat:qM,fromHalfFloat:KM},Pt=new B,ml=new _e;class Ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=m0,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=No(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=No(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=No(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=No(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=No(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==m0&&(e.usage=this.usage),e}}class gy extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vy extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gt extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZM=0;const jn=new it,sd=new $t,As=new B,In=new za,Fo=new za,Bt=new B;class Rn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hy(e)?vy:gy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _p);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(In.min,Fo.min),In.expandByPoint(Bt),Bt.addVectors(In.max,Fo.max),In.expandByPoint(Bt)):(In.expandByPoint(Fo.min),In.expandByPoint(Fo.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Bt.add(As)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new B,l[b]=new B;const c=new B,u=new B,d=new B,h=new _e,p=new _e,v=new _e,S=new B,g=new B;function f(b,I,_){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,I),v.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const E=1/(p.x*v.y-v.x*p.y);isFinite(E)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(E),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(E),a[b].add(S),a[I].add(S),a[_].add(S),l[b].add(g),l[I].add(g),l[_].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let b=0,I=m.length;b<I;++b){const _=m[b],E=_.start,z=_.count;for(let O=E,H=E+z;O<H;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new B,M=new B,A=new B,T=new B;function w(b){A.fromBufferAttribute(r,b),T.copy(A);const I=a[b];x.copy(I),x.sub(A.multiplyScalar(A.dot(I))).normalize(),M.crossVectors(T,I);const E=M.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,E)}for(let b=0,I=m.length;b<I;++b){const _=m[b],E=_.start,z=_.count;for(let O=E,H=E+z;O<H;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Ti(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const R0=new it,kr=new Sp,gl=new _p,P0=new B,vl=new B,xl=new B,yl=new B,od=new B,_l=new B,L0=new B,Sl=new B;class Je extends $t{constructor(e=new Rn,n=new Ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(od.fromBufferAttribute(d,e),o?_l.addScaledVector(od,u):_l.addScaledVector(od.sub(n),u))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(gl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(gl,P0)===null||kr.origin.distanceToSquared(P0)>(e.far-e.near)**2))&&(R0.copy(s).invert(),kr.copy(e.ray).applyMatrix4(R0),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const g=h[v],f=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,A=x;M<A;M+=3){const T=a.getX(M),w=a.getX(M+1),b=a.getX(M+2);r=Ml(this,f,e,i,c,u,d,T,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=v,f=S;g<f;g+=3){const m=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=Ml(this,o,e,i,c,u,d,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const g=h[v],f=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,A=x;M<A;M+=3){const T=M,w=M+1,b=M+2;r=Ml(this,f,e,i,c,u,d,T,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=v,f=S;g<f;g+=3){const m=g,x=g+1,M=g+2;r=Ml(this,o,e,i,c,u,d,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function JM(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pr,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,vl),t.getVertexPosition(l,xl),t.getVertexPosition(c,yl);const u=JM(t,e,n,i,vl,xl,yl,L0);if(u){const d=new B;hi.getBarycoord(L0,vl,xl,yl,d),r&&(u.uv=hi.getInterpolatedAttribute(r,a,l,c,d,new _e)),s&&(u.uv1=hi.getInterpolatedAttribute(s,a,l,c,d,new _e)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};hi.getNormal(vl,xl,yl,h.normal),u.face=h,u.barycoord=d}return u}class Qn extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function v(S,g,f,m,x,M,A,T,w,b,I){const _=M/w,E=A/b,z=M/2,O=A/2,H=T/2,$=w+1,j=b+1;let ae=0,U=0;const X=new B;for(let ne=0;ne<j;ne++){const oe=ne*E-O;for(let ge=0;ge<$;ge++){const Le=ge*_-z;X[S]=Le*m,X[g]=oe*x,X[f]=H,c.push(X.x,X.y,X.z),X[S]=0,X[g]=0,X[f]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(ge/w),d.push(1-ne/b),ae+=1}}for(let ne=0;ne<b;ne++)for(let oe=0;oe<w;oe++){const ge=h+oe+$*ne,Le=h+oe+$*(ne+1),te=h+(oe+1)+$*(ne+1),ue=h+(oe+1)+$*ne;l.push(ge,Le,ue),l.push(Le,te,ue),U+=6}a.addGroup(p,U,I),p+=U,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=vo(t[n]);for(const r in i)e[r]=i[r]}return e}function QM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const fi={clone:vo,merge:dn};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yy extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new B,D0=new _e,N0=new _e;class zn extends yy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,D0,N0),n.subVectors(N0,D0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Cs=1;class tw extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(bs,Cs,e,n);r.layers=this.layers,this.add(r);const s=new zn(bs,Cs,e,n);s.layers=this.layers,this.add(s);const o=new zn(bs,Cs,e,n);o.layers=this.layers,this.add(o);const a=new zn(bs,Cs,e,n);a.layers=this.layers,this.add(a);const l=new zn(bs,Cs,e,n);l.layers=this.layers,this.add(l);const c=new zn(bs,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _y extends Ot{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:mo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nw extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _y(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qn(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Kt});s.uniforms.tEquirect.value=n;const o=new Je(r,s),a=n.minFilter;return n.minFilter===xr&&(n.minFilter=Zt),new tw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ad=new B,iw=new B,rw=new $e;class yi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ad.subVectors(i,n).cross(iw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rw.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new _p,wl=new B;class wp{constructor(e=new yi,n=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ji){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],v=r[9],S=r[10],g=r[11],f=r[12],m=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,g-p,M-f).normalize(),i[1].setComponents(l+s,h+c,g+p,M+f).normalize(),i[2].setComponents(l+o,h+u,g+v,M+m).normalize(),i[3].setComponents(l-o,h-u,g-v,M-m).normalize(),i[4].setComponents(l-a,h-d,g-S,M-x).normalize(),n===ji)i[5].setComponents(l+a,h+d,g+S,M+x).normalize();else if(n===Nc)i[5].setComponents(a,d,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wl.x=r.normal.x>0?e.max.x:e.min.x,wl.y=r.normal.y>0?e.max.y:e.min.y,wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],S=d[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const S=d[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ai extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],S=[],g=[];for(let f=0;f<u;f++){const m=f*h-o;for(let x=0;x<c;x++){const M=x*d-s;v.push(M,-m,0),S.push(0,0,1),g.push(x/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const x=m+c*f,M=m+c*(f+1),A=m+1+c*(f+1),T=m+1+c*f;p.push(x,M,T),p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(S,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var ow=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aw=`#ifdef USE_ALPHAHASH
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
#endif`,lw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hw=`#ifdef USE_AOMAP
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
#endif`,fw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pw=`#ifdef USE_BATCHING
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
#endif`,mw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yw=`#ifdef USE_IRIDESCENCE
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
#endif`,_w=`#ifdef USE_BUMPMAP
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
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rw=`#define PI 3.141592653589793
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
} // validated`,Pw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lw=`vec3 transformedNormal = objectNormal;
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
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ow="gl_FragColor = linearToOutputTexel( gl_FragColor );",zw=`
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
}`,Fw=`#ifdef USE_ENVMAP
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
#endif`,kw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bw=`#ifdef USE_ENVMAP
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
#endif`,Hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vw=`#ifdef USE_ENVMAP
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
#endif`,Gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yw=`#ifdef USE_GRADIENTMAP
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
}`,qw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jw=`uniform bool receiveShadow;
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
#endif`,Qw=`#ifdef USE_ENVMAP
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
#endif`,$w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
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
#endif`,rE=`struct PhysicalMaterial {
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
}`,sE=`
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mE=`#if defined( USE_POINTS_UV )
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
#endif`,gE=`float metalnessFactor = metalness;
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
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
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
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
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
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`uniform sampler2D t2D;
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
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`#include <common>
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
}`,h2=`#if DEPTH_PACKING == 3200
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
}`,f2=`#define DISTANCE
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
}`,p2=`#define DISTANCE
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
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
}`,x2=`uniform vec3 diffuse;
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
}`,y2=`#include <common>
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
}`,_2=`uniform vec3 diffuse;
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
}`,S2=`#define LAMBERT
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
}`,M2=`#define LAMBERT
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
}`,w2=`#define MATCAP
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
}`,E2=`#define MATCAP
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
}`,T2=`#define NORMAL
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
}`,A2=`#define NORMAL
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
}`,b2=`#define PHONG
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
}`,C2=`#define PHONG
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
}`,R2=`#define STANDARD
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
}`,P2=`#define STANDARD
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
}`,L2=`#define TOON
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
}`,D2=`#define TOON
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
}`,N2=`uniform float size;
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
}`,I2=`uniform vec3 diffuse;
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
}`,U2=`#include <common>
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
}`,O2=`uniform vec3 color;
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
}`,z2=`uniform float rotation;
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
}`,F2=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:ow,alphahash_pars_fragment:aw,alphamap_fragment:lw,alphamap_pars_fragment:cw,alphatest_fragment:uw,alphatest_pars_fragment:dw,aomap_fragment:hw,aomap_pars_fragment:fw,batching_pars_vertex:pw,batching_vertex:mw,begin_vertex:gw,beginnormal_vertex:vw,bsdfs:xw,iridescence_fragment:yw,bumpmap_pars_fragment:_w,clipping_planes_fragment:Sw,clipping_planes_pars_fragment:Mw,clipping_planes_pars_vertex:ww,clipping_planes_vertex:Ew,color_fragment:Tw,color_pars_fragment:Aw,color_pars_vertex:bw,color_vertex:Cw,common:Rw,cube_uv_reflection_fragment:Pw,defaultnormal_vertex:Lw,displacementmap_pars_vertex:Dw,displacementmap_vertex:Nw,emissivemap_fragment:Iw,emissivemap_pars_fragment:Uw,colorspace_fragment:Ow,colorspace_pars_fragment:zw,envmap_fragment:Fw,envmap_common_pars_fragment:kw,envmap_pars_fragment:Bw,envmap_pars_vertex:Hw,envmap_physical_pars_fragment:Qw,envmap_vertex:Vw,fog_vertex:Gw,fog_pars_vertex:Ww,fog_fragment:jw,fog_pars_fragment:Xw,gradientmap_pars_fragment:Yw,lightmap_pars_fragment:qw,lights_lambert_fragment:Kw,lights_lambert_pars_fragment:Zw,lights_pars_begin:Jw,lights_toon_fragment:$w,lights_toon_pars_fragment:eE,lights_phong_fragment:tE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:oE,lights_fragment_end:aE,logdepthbuf_fragment:lE,logdepthbuf_pars_fragment:cE,logdepthbuf_pars_vertex:uE,logdepthbuf_vertex:dE,map_fragment:hE,map_pars_fragment:fE,map_particle_fragment:pE,map_particle_pars_fragment:mE,metalnessmap_fragment:gE,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:yE,morphnormal_vertex:_E,morphtarget_pars_vertex:SE,morphtarget_vertex:ME,normal_fragment_begin:wE,normal_fragment_maps:EE,normal_pars_fragment:TE,normal_pars_vertex:AE,normal_vertex:bE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:DE,opaque_fragment:NE,packing:IE,premultiplied_alpha_fragment:UE,project_vertex:OE,dithering_fragment:zE,dithering_pars_fragment:FE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:VE,shadowmap_vertex:GE,shadowmask_pars_fragment:WE,skinbase_vertex:jE,skinning_pars_vertex:XE,skinning_vertex:YE,skinnormal_vertex:qE,specularmap_fragment:KE,specularmap_pars_fragment:ZE,tonemapping_fragment:JE,tonemapping_pars_fragment:QE,transmission_fragment:$E,transmission_pars_fragment:e2,uv_pars_fragment:t2,uv_pars_vertex:n2,uv_vertex:i2,worldpos_vertex:r2,background_vert:s2,background_frag:o2,backgroundCube_vert:a2,backgroundCube_frag:l2,cube_vert:c2,cube_frag:u2,depth_vert:d2,depth_frag:h2,distanceRGBA_vert:f2,distanceRGBA_frag:p2,equirect_vert:m2,equirect_frag:g2,linedashed_vert:v2,linedashed_frag:x2,meshbasic_vert:y2,meshbasic_frag:_2,meshlambert_vert:S2,meshlambert_frag:M2,meshmatcap_vert:w2,meshmatcap_frag:E2,meshnormal_vert:T2,meshnormal_frag:A2,meshphong_vert:b2,meshphong_frag:C2,meshphysical_vert:R2,meshphysical_frag:P2,meshtoon_vert:L2,meshtoon_frag:D2,points_vert:N2,points_frag:I2,shadow_vert:U2,shadow_frag:O2,sprite_vert:z2,sprite_frag:F2},Ne={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},_i={basic:{uniforms:dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:dn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:dn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:dn([Ne.points,Ne.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:dn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:dn([Ne.common,Ne.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:dn([Ne.sprite,Ne.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:dn([Ne.common,Ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:dn([Ne.lights,Ne.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};_i.physical={uniforms:dn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const El={r:0,b:0,g:0},Hr=new Ci,k2=new it;function B2(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(m){let x=m.isScene===!0?m.background:null;return x&&x.isTexture&&(x=(m.backgroundBlurriness>0?n:e).get(x)),x}function S(m){let x=!1;const M=v(m);M===null?f(a,l):M&&M.isColor&&(f(M,1),x=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(m,x){const M=v(x);M&&(M.isCubeTexture||M.mapping===Qc)?(u===void 0&&(u=new Je(new Qn(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:vo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hr.copy(x.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k2.makeRotationFromEuler(Hr)),u.material.toneMapped=ot.getTransfer(M.colorSpace)!==pt,(d!==M||h!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Je(new Ai(2,2),new It({name:"BackgroundMaterial",uniforms:vo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function f(m,x){m.getRGB(El,xy(t)),i.buffers.color.setClear(El.r,El.g,El.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:S,addToRenderList:g}}function H2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(_,E,z,O,H){let $=!1;const j=d(O,z,E);s!==j&&(s=j,c(s.object)),$=p(_,O,z,H),$&&v(_,O,z,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(_,E,z,O),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,E,z){const O=z.wireframe===!0;let H=i[_.id];H===void 0&&(H={},i[_.id]=H);let $=H[E.id];$===void 0&&($={},H[E.id]=$);let j=$[O];return j===void 0&&(j=h(l()),$[O]=j),j}function h(_){const E=[],z=[],O=[];for(let H=0;H<n;H++)E[H]=0,z[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,E,z,O){const H=s.attributes,$=E.attributes;let j=0;const ae=z.getAttributes();for(const U in ae)if(ae[U].location>=0){const ne=H[U];let oe=$[U];if(oe===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function v(_,E,z,O){const H={},$=E.attributes;let j=0;const ae=z.getAttributes();for(const U in ae)if(ae[U].location>=0){let ne=$[U];ne===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),H[U]=oe,j++}s.attributes=H,s.attributesNum=j,s.index=O}function S(){const _=s.newAttributes;for(let E=0,z=_.length;E<z;E++)_[E]=0}function g(_){f(_,0)}function f(_,E){const z=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;z[_]=1,O[_]===0&&(t.enableVertexAttribArray(_),O[_]=1),H[_]!==E&&(t.vertexAttribDivisor(_,E),H[_]=E)}function m(){const _=s.newAttributes,E=s.enabledAttributes;for(let z=0,O=E.length;z<O;z++)E[z]!==_[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function x(_,E,z,O,H,$,j){j===!0?t.vertexAttribIPointer(_,E,z,H,$):t.vertexAttribPointer(_,E,z,O,H,$)}function M(_,E,z,O){S();const H=O.attributes,$=z.getAttributes(),j=E.defaultAttributeValues;for(const ae in $){const U=$[ae];if(U.location>=0){let X=H[ae];if(X===void 0&&(ae==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),ae==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){const ne=X.normalized,oe=X.itemSize,ge=e.get(X);if(ge===void 0)continue;const Le=ge.buffer,te=ge.type,ue=ge.bytesPerElement,ve=te===t.INT||te===t.UNSIGNED_INT||X.gpuType===hp;if(X.isInterleavedBufferAttribute){const pe=X.data,Oe=pe.stride,Ce=X.offset;if(pe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<U.locationSize;Fe++)f(U.location+Fe,pe.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)g(U.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Fe=0;Fe<U.locationSize;Fe++)x(U.location+Fe,oe/U.locationSize,te,ne,Oe*ue,(Ce+oe/U.locationSize*Fe)*ue,ve)}else{if(X.isInstancedBufferAttribute){for(let pe=0;pe<U.locationSize;pe++)f(U.location+pe,X.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let pe=0;pe<U.locationSize;pe++)g(U.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let pe=0;pe<U.locationSize;pe++)x(U.location+pe,oe/U.locationSize,te,ne,oe*ue,oe/U.locationSize*pe*ue,ve)}}else if(j!==void 0){const ne=j[ae];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(U.location,ne);break;case 3:t.vertexAttrib3fv(U.location,ne);break;case 4:t.vertexAttrib4fv(U.location,ne);break;default:t.vertexAttrib1fv(U.location,ne)}}}}m()}function A(){b();for(const _ in i){const E=i[_];for(const z in E){const O=E[z];for(const H in O)u(O[H].object),delete O[H];delete E[z]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const E=i[_.id];for(const z in E){const O=E[z];for(const H in O)u(O[H].object),delete O[H];delete E[z]}delete i[_.id]}function w(_){for(const E in i){const z=i[E];if(z[_.id]===void 0)continue;const O=z[_.id];for(const H in O)u(O[H].object),delete O[H];delete z[_.id]}}function b(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function V2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let S=0;S<d;S++)v+=u[S];for(let S=0;S<h.length;S++)n.update(v,i,h[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==bi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Kn&&!b)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function W2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,x=m*4;let M=f.clippingState||null;l.value=M,M=u(v,h,x,p);for(let A=0;A!==x;++A)M[A]=n[A];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const f=p+S*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,M=p;x!==S;++x,M+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function j2(t){let e=new WeakMap;function n(o,a){return a===Rc?o.mapping=mo:a===Lh&&(o.mapping=go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rc||a===Lh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ep extends yy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,I0=[.125,.215,.35,.446,.526,.582],Yr=20,ld=new Ep,U0=new Ke;let cd=null,ud=0,dd=0,hd=!1;const Xr=(1+Math.sqrt(5))/2,Rs=1/Xr,O0=[new B(-Xr,Rs,0),new B(Xr,Rs,0),new B(-Rs,0,Xr),new B(Rs,0,Xr),new B(0,Xr,-Rs),new B(0,Xr,Rs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,dd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Tn,format:Zn,colorSpace:Qi,depthBuffer:!1},r=z0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X2(s)),this._blurMaterial=Y2(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,ld)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(U0),u.toneMapping=br,u.autoClear=!1;const p=new Ca({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),v=new Je(new Qn,p);let S=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,S=!0):(p.color.copy(U0),S=!0);for(let f=0;f<6;f++){const m=f%3;m===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):m===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Tl(r,m*x,f>2?x:0,x,x),u.setRenderTarget(r),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ld)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=O0[(r-s-1)%O0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Je(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yr-1),S=s/v,g=isFinite(s)?1+Math.floor(u*S):Yr;g>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yr}`);const f=[];let m=0;for(let w=0;w<Yr;++w){const b=w/S,I=Math.exp(-b*b/2);f.push(I),w===0?m+=I:w<g&&(m+=2*I)}for(let w=0;w<f.length;w++)f[w]=f[w]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const M=this._sizeLods[r],A=3*M*(r>x-Ys?r-x+Ys:0),T=4*(this._cubeSize-M);Tl(n,A,T,3*M,2*M),l.setRenderTarget(n),l.render(d,ld)}}function X2(t){const e=[],n=[],i=[];let r=t;const s=t-Ys+1+I0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ys?l=I0[o-t+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,S=3,g=2,f=1,m=new Float32Array(S*v*p),x=new Float32Array(g*v*p),M=new Float32Array(f*v*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,b=T>2?0:-1,I=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];m.set(I,S*v*T),x.set(h,g*v*T);const _=[T,T,T,T,T,T];M.set(_,f*v*T)}const A=new Rn;A.setAttribute("position",new Ti(m,S)),A.setAttribute("uv",new Ti(x,g)),A.setAttribute("faceIndex",new Ti(M,f)),e.push(A),r>Ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function z0(t,e,n){const i=new ti(t,e,n);return i.texture.mapping=Qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Y2(t,e,n){const i=new Float32Array(Yr),r=new B(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function F0(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function k0(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Tp(){return`

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
	`}function q2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rc||l===Lh,u=l===mo||l===go;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new af(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new af(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function K2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&nc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Z2(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const S=h.morphAttributes[v];for(let g=0,f=S.length;g<f;g++)e.remove(S[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const S=p[v];for(let g=0,f=S.length;g<f;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let x=0,M=m.length;x<M;x+=3){const A=m[x+0],T=m[x+1],w=m[x+2];h.push(A,T,T,w,w,A)}}else if(v!==void 0){const m=v.array;S=v.version;for(let x=0,M=m.length/3-1;x<M;x+=3){const A=x+0,T=x+1,w=x+2;h.push(A,T,T,w,w,A)}}else return;const g=new(hy(h)?vy:gy)(h,1);g.version=S;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function J2(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let f=0;f<v;f++)g+=p[f];n.update(g,i,1)}function d(h,p,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],S[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,v);let f=0;for(let m=0;m<v;m++)f+=p[m];for(let m=0;m<S.length;m++)n.update(f,i,S[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Q2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $2(t,e,n){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let _=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*T*4*d),b=new py(w,A,T,d);b.type=Kn,b.needsUpdate=!0;const I=M*4;for(let E=0;E<d;E++){const z=f[E],O=m[E],H=x[E],$=A*T*4*E;for(let j=0;j<z.count;j++){const ae=j*I;v===!0&&(r.fromBufferAttribute(z,j),w[$+ae+0]=r.x,w[$+ae+1]=r.y,w[$+ae+2]=r.z,w[$+ae+3]=0),S===!0&&(r.fromBufferAttribute(O,j),w[$+ae+4]=r.x,w[$+ae+5]=r.y,w[$+ae+6]=r.z,w[$+ae+7]=0),g===!0&&(r.fromBufferAttribute(H,j),w[$+ae+8]=r.x,w[$+ae+9]=r.y,w[$+ae+10]=r.z,w[$+ae+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new _e(A,T)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function eT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ap extends Ot{constructor(e,n,i,r,s,o,a,l,c,u=ro){if(u!==ro&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ro&&(i=rs),i===void 0&&u===os&&(i=ss),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const My=new Ot,B0=new Ap(1,1),wy=new py,Ey=new FM,Ty=new _y,H0=[],V0=[],G0=new Float32Array(16),W0=new Float32Array(9),j0=new Float32Array(4);function Eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=H0[r];if(s===void 0&&(s=new Float32Array(r),H0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function eu(t,e){let n=V0[e];n===void 0&&(n=new Int32Array(e),V0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function sT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(zt(n,i))return;j0.set(i),t.uniformMatrix2fv(this.addr,!1,j0),Ft(n,i)}}function oT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(zt(n,i))return;W0.set(i),t.uniformMatrix3fv(this.addr,!1,W0),Ft(n,i)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(zt(n,i))return;G0.set(i),t.uniformMatrix4fv(this.addr,!1,G0),Ft(n,i)}}function lT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(B0.compareFunction=dy,s=B0):s=My,n.setTexture2D(e||s,r)}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ey,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ty,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wy,r)}function _T(t){switch(t){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return oT;case 35676:return aT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return fT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}function ST(t,e){t.uniform1fv(this.addr,e)}function MT(t,e){const n=Eo(e,this.size,2);t.uniform2fv(this.addr,n)}function wT(t,e){const n=Eo(e,this.size,3);t.uniform3fv(this.addr,n)}function ET(t,e){const n=Eo(e,this.size,4);t.uniform4fv(this.addr,n)}function TT(t,e){const n=Eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AT(t,e){const n=Eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bT(t,e){const n=Eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CT(t,e){t.uniform1iv(this.addr,e)}function RT(t,e){t.uniform2iv(this.addr,e)}function PT(t,e){t.uniform3iv(this.addr,e)}function LT(t,e){t.uniform4iv(this.addr,e)}function DT(t,e){t.uniform1uiv(this.addr,e)}function NT(t,e){t.uniform2uiv(this.addr,e)}function IT(t,e){t.uniform3uiv(this.addr,e)}function UT(t,e){t.uniform4uiv(this.addr,e)}function OT(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||My,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ey,s[o])}function FT(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ty,s[o])}function kT(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||wy,s[o])}function BT(t){switch(t){case 5126:return ST;case 35664:return MT;case 35665:return wT;case 35666:return ET;case 35674:return TT;case 35675:return AT;case 35676:return bT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return DT;case 36294:return NT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return kT}}class HT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_T(n.type)}}class VT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BT(n.type)}}class GT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function X0(t,e){t.seq.push(e),t.map[e.id]=e}function WT(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),o=fd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){X0(n,c===void 0?new HT(a,t,e):new VT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new GT(a),X0(n,d)),n=d}}}class ic{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);WT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Y0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const jT=37297;let XT=0;function YT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function qT(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Dc&&n===Lc?i="LinearDisplayP3ToLinearSRGB":e===Lc&&n===Dc&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case $c:return[i,"LinearTransferOETF"];case ln:case yp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function q0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+YT(t.getShaderSource(e),o)}else return r}function KT(t,e){const n=qT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ZT(t,e){let n;switch(e){case Kx:n="Linear";break;case Zx:n="Reinhard";break;case Jx:n="Cineon";break;case dp:n="ACESFilmic";break;case Qx:n="AgX";break;case $x:n="Neutral";break;case mM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new B;function JT(){ot.getLuminanceCoefficients(Al);const t=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function $T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function qo(t){return t!==""}function K0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(t){return t.replace(tA,iA)}const nA=new Map;function iA(t,e){let n=Qe[e];if(n===void 0){const i=nA.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lf(n)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(t){return t.replace(rA,sA)}function sA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Q0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function oA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function aA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function cA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qx:e="ENVMAP_BLENDING_MULTIPLY";break;case fM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function uA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function dA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=oA(n),c=aA(n),u=lA(n),d=cA(n),h=uA(n),p=QT(n),v=$T(s),S=r.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qo).join(`
`),f.length>0&&(f+=`
`)):(g=[Q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),f=[Q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?Qe.tonemapping_pars_fragment:"",n.toneMapping!==br?ZT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,KT("linearToOutputTexel",n.outputColorSpace),JT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),o=lf(o),o=K0(o,n),o=Z0(o,n),a=lf(a),a=K0(a,n),a=Z0(a,n),o=J0(o),a=J0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===g0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=m+g+o,M=m+f+a,A=Y0(r,r.VERTEX_SHADER,x),T=Y0(r,r.FRAGMENT_SHADER,M);r.attachShader(S,A),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(S).trim(),O=r.getShaderInfoLog(A).trim(),H=r.getShaderInfoLog(T).trim();let $=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,A,T);else{const ae=q0(r,A,"vertex"),U=q0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+ae+`
`+U)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||H==="")&&(j=!1);j&&(E.diagnostics={runnable:$,programLog:z,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:f}})}r.deleteShader(A),r.deleteShader(T),b=new ic(r,S),I=eA(r,S)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let I;this.getAttributes=function(){return I===void 0&&w(this),I};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(S,jT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=T,this}let hA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new pA(e),n.set(e,i)),i}}class pA{constructor(e){this.id=hA++,this.code=e,this.usedTimes=0}}function mA(t,e,n,i,r,s,o){const a=new Mp,l=new fA,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,E,z,O,H){const $=O.fog,j=H.geometry,ae=_.isMeshStandardMaterial?O.environment:null,U=(_.isMeshStandardMaterial?n:e).get(_.envMap||ae),X=U&&U.mapping===Qc?U.image.height:null,ne=S[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=oe!==void 0?oe.length:0;let Le=0;j.morphAttributes.position!==void 0&&(Le=1),j.morphAttributes.normal!==void 0&&(Le=2),j.morphAttributes.color!==void 0&&(Le=3);let te,ue,ve,pe;if(ne){const xn=_i[ne];te=xn.vertexShader,ue=xn.fragmentShader}else te=_.vertexShader,ue=_.fragmentShader,l.update(_),ve=l.getVertexShaderID(_),pe=l.getFragmentShaderID(_);const Oe=t.getRenderTarget(),Ce=H.isInstancedMesh===!0,Fe=H.isBatchedMesh===!0,Xe=!!_.map,he=!!_.matcap,N=!!U,Me=!!_.aoMap,Te=!!_.lightMap,xe=!!_.bumpMap,be=!!_.normalMap,ke=!!_.displacementMap,De=!!_.emissiveMap,D=!!_.metalnessMap,C=!!_.roughnessMap,ie=_.anisotropy>0,Y=_.clearcoat>0,K=_.dispersion>0,J=_.iridescence>0,we=_.sheen>0,L=_.transmission>0,V=ie&&!!_.anisotropyMap,re=Y&&!!_.clearcoatMap,P=Y&&!!_.clearcoatNormalMap,G=Y&&!!_.clearcoatRoughnessMap,W=J&&!!_.iridescenceMap,k=J&&!!_.iridescenceThicknessMap,q=we&&!!_.sheenColorMap,de=we&&!!_.sheenRoughnessMap,fe=!!_.specularMap,Ae=!!_.specularColorMap,F=!!_.specularIntensityMap,me=L&&!!_.transmissionMap,se=L&&!!_.thicknessMap,ee=!!_.gradientMap,ye=!!_.alphaMap,Pe=_.alphaTest>0,Ze=!!_.alphaHash,ft=!!_.extensions;let Xt=br;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const nt={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:te,fragmentShader:ue,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:Fe,batchingColor:Fe&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Qi,alphaToCoverage:!!_.alphaToCoverage,map:Xe,matcap:he,envMap:N,envMapMode:N&&U.mapping,envMapCubeUVHeight:X,aoMap:Me,lightMap:Te,bumpMap:xe,normalMap:be,displacementMap:p&&ke,emissiveMap:De,normalMapObjectSpace:be&&_.normalMapType===yM,normalMapTangentSpace:be&&_.normalMapType===xp,metalnessMap:D,roughnessMap:C,anisotropy:ie,anisotropyMap:V,clearcoat:Y,clearcoatMap:re,clearcoatNormalMap:P,clearcoatRoughnessMap:G,dispersion:K,iridescence:J,iridescenceMap:W,iridescenceThicknessMap:k,sheen:we,sheenColorMap:q,sheenRoughnessMap:de,specularMap:fe,specularColorMap:Ae,specularIntensityMap:F,transmission:L,transmissionMap:me,thicknessMap:se,gradientMap:ee,opaque:_.transparent===!1&&_.blending===io&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:Pe,alphaHash:Ze,combine:_.combine,mapUv:Xe&&g(_.map.channel),aoMapUv:Me&&g(_.aoMap.channel),lightMapUv:Te&&g(_.lightMap.channel),bumpMapUv:xe&&g(_.bumpMap.channel),normalMapUv:be&&g(_.normalMap.channel),displacementMapUv:ke&&g(_.displacementMap.channel),emissiveMapUv:De&&g(_.emissiveMap.channel),metalnessMapUv:D&&g(_.metalnessMap.channel),roughnessMapUv:C&&g(_.roughnessMap.channel),anisotropyMapUv:V&&g(_.anisotropyMap.channel),clearcoatMapUv:re&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:P&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:k&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:q&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(_.sheenRoughnessMap.channel),specularMapUv:fe&&g(_.specularMap.channel),specularColorMapUv:Ae&&g(_.specularColorMap.channel),specularIntensityMapUv:F&&g(_.specularIntensityMap.channel),transmissionMapUv:me&&g(_.transmissionMap.channel),thicknessMapUv:se&&g(_.thicknessMap.channel),alphaMapUv:ye&&g(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(be||ie),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Xe||ye),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Xe&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(x(E,_),M(E,_),E.push(t.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function x(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),_.push(a.mask)}function A(_){const E=S[_.type];let z;if(E){const O=_i[E];z=fi.clone(O.uniforms)}else z=_.uniforms;return z}function T(_,E){let z;for(let O=0,H=u.length;O<H;O++){const $=u[O];if($.cacheKey===E){z=$,++z.usedTimes;break}}return z===void 0&&(z=new dA(t,E,_,s),u.push(z)),z}function w(_){if(--_.usedTimes===0){const E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:I}}function gA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function vA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function eg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,S,g){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:S,group:g},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=S,f.group=g),e++,f}function a(d,h,p,v,S,g){const f=o(d,h,p,v,S,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,S,g){const f=o(d,h,p,v,S,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||vA),i.length>1&&i.sort(h||$0),r.length>1&&r.sort(h||$0)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new eg,t.set(i,[o])):r>=s.length?(o=new eg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ke};break;case"SpotLight":n={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SA=0;function MA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wA(t){const e=new yA,n=_A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new it,o=new it;function a(c){let u=0,d=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,v=0,S=0,g=0,f=0,m=0,x=0,M=0,A=0,T=0,w=0;c.sort(MA);for(let I=0,_=c.length;I<_;I++){const E=c[I],z=E.color,O=E.intensity,H=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=z.r*O,d+=z.g*O,h+=z.b*O;else if(E.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(E.sh.coefficients[j],O);w++}else if(E.isDirectionalLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ae=E.shadow,U=n.get(E);U.shadowIntensity=ae.intensity,U.shadowBias=ae.bias,U.shadowNormalBias=ae.normalBias,U.shadowRadius=ae.radius,U.shadowMapSize=ae.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=E.shadow.matrix,m++}i.directional[p]=j,p++}else if(E.isSpotLight){const j=e.get(E);j.position.setFromMatrixPosition(E.matrixWorld),j.color.copy(z).multiplyScalar(O),j.distance=H,j.coneCos=Math.cos(E.angle),j.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),j.decay=E.decay,i.spot[S]=j;const ae=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,ae.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[S]=ae.matrix,E.castShadow){const U=n.get(E);U.shadowIntensity=ae.intensity,U.shadowBias=ae.bias,U.shadowNormalBias=ae.normalBias,U.shadowRadius=ae.radius,U.shadowMapSize=ae.mapSize,i.spotShadow[S]=U,i.spotShadowMap[S]=$,M++}S++}else if(E.isRectAreaLight){const j=e.get(E);j.color.copy(z).multiplyScalar(O),j.halfWidth.set(E.width*.5,0,0),j.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=j,g++}else if(E.isPointLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),j.distance=E.distance,j.decay=E.decay,E.castShadow){const ae=E.shadow,U=n.get(E);U.shadowIntensity=ae.intensity,U.shadowBias=ae.bias,U.shadowNormalBias=ae.normalBias,U.shadowRadius=ae.radius,U.shadowMapSize=ae.mapSize,U.shadowCameraNear=ae.camera.near,U.shadowCameraFar=ae.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=E.shadow.matrix,x++}i.point[v]=j,v++}else if(E.isHemisphereLight){const j=e.get(E);j.skyColor.copy(E.color).multiplyScalar(O),j.groundColor.copy(E.groundColor).multiplyScalar(O),i.hemi[f]=j,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==S||b.rectAreaLength!==g||b.hemiLength!==f||b.numDirectionalShadows!==m||b.numPointShadows!==x||b.numSpotShadows!==M||b.numSpotMaps!==A||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,b.directionalLength=p,b.pointLength=v,b.spotLength=S,b.rectAreaLength=g,b.hemiLength=f,b.numDirectionalShadows=m,b.numPointShadows=x,b.numSpotShadows=M,b.numSpotMaps=A,b.numLightProbes=w,i.version=SA++)}function l(c,u){let d=0,h=0,p=0,v=0,S=0;const g=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const x=c[f];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function tg(t){const e=new wA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function EA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new tg(t),e.set(r,[a])):s>=o.length?(a=new tg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class TA extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AA extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function RA(t,e,n){let i=new wp;const r=new _e,s=new _e,o=new ht,a=new TA({depthPacking:xM}),l=new AA,c={},u=n.maxTextureSize,d={[Pr]:mn,[mn]:Pr,[fn]:fn},h=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:bA,fragmentShader:CA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Je(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jx;let f=this.type;this.render=function(T,w,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const I=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Kt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==zi&&this.type===zi,H=f===zi&&this.type!==zi;for(let $=0,j=T.length;$<j;$++){const ae=T[$],U=ae.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const X=U.getFrameExtents();if(r.multiply(X),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,U.mapSize.y=s.y)),U.map===null||O===!0||H===!0){const oe=this.type!==zi?{minFilter:Wt,magFilter:Wt}:{};U.map!==null&&U.map.dispose(),U.map=new ti(r.x,r.y,oe),U.map.texture.name=ae.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ne=U.getViewportCount();for(let oe=0;oe<ne;oe++){const ge=U.getViewport(oe);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(o),U.updateMatrices(ae,oe),i=U.getFrustum(),M(w,b,U.camera,ae,this.type)}U.isPointLightShadow!==!0&&this.type===zi&&m(U,b),U.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(I,_,E)};function m(T,w){const b=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ti(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,b,p,S,null)}function x(T,w,b,I){let _=null;const E=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)_=E;else if(_=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=_.uuid,O=w.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let $=H[O];$===void 0&&($=_.clone(),H[O]=$,w.addEventListener("dispose",A)),_=$}if(_.visible=w.visible,_.wireframe=w.wireframe,I===zi?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=t.properties.get(_);z.light=b}return _}function M(T,w,b,I,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===zi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const O=e.update(T),H=T.material;if(Array.isArray(H)){const $=O.groups;for(let j=0,ae=$.length;j<ae;j++){const U=$[j],X=H[U.materialIndex];if(X&&X.visible){const ne=x(T,X,I,_);T.onBeforeShadow(t,T,w,b,O,ne,U),t.renderBufferDirect(b,null,O,ne,T,U),T.onAfterShadow(t,T,w,b,O,ne,U)}}}else if(H.visible){const $=x(T,H,I,_);T.onBeforeShadow(t,T,w,b,O,$,null),t.renderBufferDirect(b,null,O,$,T,null),T.onAfterShadow(t,T,w,b,O,$,null)}}const z=T.children;for(let O=0,H=z.length;O<H;O++)M(z[O],w,b,I,_)}function A(T){T.target.removeEventListener("dispose",A);for(const b in c){const I=c[b],_=T.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}const PA={[Eh]:Th,[Ah]:Rh,[bh]:Ph,[po]:Ch,[Th]:Eh,[Rh]:Ah,[Ph]:bh,[Ch]:po};function LA(t){function e(){let F=!1;const me=new ht;let se=null;const ee=new ht(0,0,0,0);return{setMask:function(ye){se!==ye&&!F&&(t.colorMask(ye,ye,ye,ye),se=ye)},setLocked:function(ye){F=ye},setClear:function(ye,Pe,Ze,ft,Xt){Xt===!0&&(ye*=ft,Pe*=ft,Ze*=ft),me.set(ye,Pe,Ze,ft),ee.equals(me)===!1&&(t.clearColor(ye,Pe,Ze,ft),ee.copy(me))},reset:function(){F=!1,se=null,ee.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,se=null,ee=null,ye=null;return{setReversed:function(Pe){me=Pe},setTest:function(Pe){Pe?ve(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!F&&(t.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(me&&(Pe=PA[Pe]),ee!==Pe){switch(Pe){case Eh:t.depthFunc(t.NEVER);break;case Th:t.depthFunc(t.ALWAYS);break;case Ah:t.depthFunc(t.LESS);break;case po:t.depthFunc(t.LEQUAL);break;case bh:t.depthFunc(t.EQUAL);break;case Ch:t.depthFunc(t.GEQUAL);break;case Rh:t.depthFunc(t.GREATER);break;case Ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=Pe}},setLocked:function(Pe){F=Pe},setClear:function(Pe){ye!==Pe&&(t.clearDepth(Pe),ye=Pe)},reset:function(){F=!1,se=null,ee=null,ye=null}}}function i(){let F=!1,me=null,se=null,ee=null,ye=null,Pe=null,Ze=null,ft=null,Xt=null;return{setTest:function(nt){F||(nt?ve(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(nt){me!==nt&&!F&&(t.stencilMask(nt),me=nt)},setFunc:function(nt,xn,Pi){(se!==nt||ee!==xn||ye!==Pi)&&(t.stencilFunc(nt,xn,Pi),se=nt,ee=xn,ye=Pi)},setOp:function(nt,xn,Pi){(Pe!==nt||Ze!==xn||ft!==Pi)&&(t.stencilOp(nt,xn,Pi),Pe=nt,Ze=xn,ft=Pi)},setLocked:function(nt){F=nt},setClear:function(nt){Xt!==nt&&(t.clearStencil(nt),Xt=nt)},reset:function(){F=!1,me=null,se=null,ee=null,ye=null,Pe=null,Ze=null,ft=null,Xt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,v=!1,S=null,g=null,f=null,m=null,x=null,M=null,A=null,T=new Ke(0,0,0),w=0,b=!1,I=null,_=null,E=null,z=null,O=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const ae=t.getParameter(t.VERSION);ae.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ae)[1]),$=j>=1):ae.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),$=j>=2);let U=null,X={};const ne=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ge=new ht().fromArray(ne),Le=new ht().fromArray(oe);function te(F,me,se,ee){const ye=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(F,Pe),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<se;Ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(me+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return Pe}const ue={};ue[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(t.DEPTH_TEST),s.setFunc(po),Te(!1),xe(u0),ve(t.CULL_FACE),N(Kt);function ve(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function pe(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Oe(F,me){return u[F]!==me?(t.bindFramebuffer(F,me),u[F]=me,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Ce(F,me){let se=h,ee=!1;if(F){se=d.get(me),se===void 0&&(se=[],d.set(me,se));const ye=F.textures;if(se.length!==ye.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Ze=ye.length;Pe<Ze;Pe++)se[Pe]=t.COLOR_ATTACHMENT0+Pe;se.length=ye.length,ee=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,ee=!0);ee&&t.drawBuffers(se)}function Fe(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const Xe={[di]:t.FUNC_ADD,[$1]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};Xe[tM]=t.MIN,Xe[nM]=t.MAX;const he={[Yo]:t.ZERO,[iM]:t.ONE,[rM]:t.SRC_COLOR,[_h]:t.SRC_ALPHA,[lM]:t.SRC_ALPHA_SATURATE,[wh]:t.DST_COLOR,[Mh]:t.DST_ALPHA,[sM]:t.ONE_MINUS_SRC_COLOR,[Sh]:t.ONE_MINUS_SRC_ALPHA,[aM]:t.ONE_MINUS_DST_COLOR,[oM]:t.ONE_MINUS_DST_ALPHA,[cM]:t.CONSTANT_COLOR,[uM]:t.ONE_MINUS_CONSTANT_COLOR,[dM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function N(F,me,se,ee,ye,Pe,Ze,ft,Xt,nt){if(F===Kt){v===!0&&(pe(t.BLEND),v=!1);return}if(v===!1&&(ve(t.BLEND),v=!0),F!==Yx){if(F!==S||nt!==b){if((g!==di||x!==di)&&(t.blendEquation(t.FUNC_ADD),g=di,x=di),nt)switch(F){case io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case d0:t.blendFunc(t.ONE,t.ONE);break;case h0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case d0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case h0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,m=null,M=null,A=null,T.set(0,0,0),w=0,S=F,b=nt}return}ye=ye||me,Pe=Pe||se,Ze=Ze||ee,(me!==g||ye!==x)&&(t.blendEquationSeparate(Xe[me],Xe[ye]),g=me,x=ye),(se!==f||ee!==m||Pe!==M||Ze!==A)&&(t.blendFuncSeparate(he[se],he[ee],he[Pe],he[Ze]),f=se,m=ee,M=Pe,A=Ze),(ft.equals(T)===!1||Xt!==w)&&(t.blendColor(ft.r,ft.g,ft.b,Xt),T.copy(ft),w=Xt),S=F,b=!1}function Me(F,me){F.side===fn?pe(t.CULL_FACE):ve(t.CULL_FACE);let se=F.side===mn;me&&(se=!se),Te(se),F.blending===io&&F.transparent===!1?N(Kt):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function xe(F){F!==J1?(ve(t.CULL_FACE),F!==_&&(F===u0?t.cullFace(t.BACK):F===Q1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),_=F}function be(F){F!==E&&($&&t.lineWidth(F),E=F)}function ke(F,me,se){F?(ve(t.POLYGON_OFFSET_FILL),(z!==me||O!==se)&&(t.polygonOffset(me,se),z=me,O=se)):pe(t.POLYGON_OFFSET_FILL)}function De(F){F?ve(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function D(F){F===void 0&&(F=t.TEXTURE0+H-1),U!==F&&(t.activeTexture(F),U=F)}function C(F,me,se){se===void 0&&(U===null?se=t.TEXTURE0+H-1:se=U);let ee=X[se];ee===void 0&&(ee={type:void 0,texture:void 0},X[se]=ee),(ee.type!==F||ee.texture!==me)&&(U!==se&&(t.activeTexture(se),U=se),t.bindTexture(F,me||ue[F]),ee.type=F,ee.texture=me)}function ie(){const F=X[U];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(F){ge.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ge.copy(F))}function q(F){Le.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Le.copy(F))}function de(F,me){let se=l.get(me);se===void 0&&(se=new WeakMap,l.set(me,se));let ee=se.get(F);ee===void 0&&(ee=t.getUniformBlockIndex(me,F.name),se.set(F,ee))}function fe(F,me){const ee=l.get(me).get(F);a.get(me)!==ee&&(t.uniformBlockBinding(me,ee,F.__bindingPointIndex),a.set(me,ee))}function Ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,X={},u={},d=new WeakMap,h=[],p=null,v=!1,S=null,g=null,f=null,m=null,x=null,M=null,A=null,T=new Ke(0,0,0),w=0,b=!1,I=null,_=null,E=null,z=null,O=null,ge.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ve,disable:pe,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:Fe,setBlending:N,setMaterial:Me,setFlipSided:Te,setCullFace:xe,setLineWidth:be,setPolygonOffset:ke,setScissorTest:De,activeTexture:D,bindTexture:C,unbindTexture:ie,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:G,texImage3D:W,updateUBOMapping:de,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:P,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:L,compressedTexSubImage3D:V,scissor:k,viewport:q,reset:Ae}}function ng(t,e,n,i){const r=DA(i);switch(n){case ry:return t*e;case oy:return t*e;case ay:return t*e*2;case ly:return t*e/r.components*r.byteLength;case mp:return t*e/r.components*r.byteLength;case cy:return t*e*2/r.components*r.byteLength;case gp:return t*e*2/r.components*r.byteLength;case sy:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case vp:return t*e*4/r.components*r.byteLength;case Zl:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:case $l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Oh:return Math.max(t,16)*Math.max(e,8)/4;case Nh:case Uh:return Math.max(t,8)*Math.max(e,8)/2;case zh:case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ec:case ef:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uy:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rf:case sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DA(t){switch(t){case bi:case ty:return{byteLength:1,components:1};case Aa:case ny:case Tn:return{byteLength:2,components:1};case fp:case pp:return{byteLength:2,components:4};case rs:case hp:case Kn:return{byteLength:4,components:1};case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function NA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,C){return p?new OffscreenCanvas(D,C):ba("canvas")}function S(D,C,ie){let Y=1;const K=De(D);if((K.width>ie||K.height>ie)&&(Y=ie/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(Y*K.width),we=Math.floor(Y*K.height);d===void 0&&(d=v(J,we));const L=C?v(J,we):d;return L.width=J,L.height=we,L.getContext("2d").drawImage(D,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+we+")."),L}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Wt&&D.minFilter!==Zt}function f(D){t.generateMipmap(D)}function m(D,C,ie,Y,K=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=C;if(C===t.RED&&(ie===t.FLOAT&&(J=t.R32F),ie===t.HALF_FLOAT&&(J=t.R16F),ie===t.UNSIGNED_BYTE&&(J=t.R8)),C===t.RED_INTEGER&&(ie===t.UNSIGNED_BYTE&&(J=t.R8UI),ie===t.UNSIGNED_SHORT&&(J=t.R16UI),ie===t.UNSIGNED_INT&&(J=t.R32UI),ie===t.BYTE&&(J=t.R8I),ie===t.SHORT&&(J=t.R16I),ie===t.INT&&(J=t.R32I)),C===t.RG&&(ie===t.FLOAT&&(J=t.RG32F),ie===t.HALF_FLOAT&&(J=t.RG16F),ie===t.UNSIGNED_BYTE&&(J=t.RG8)),C===t.RG_INTEGER&&(ie===t.UNSIGNED_BYTE&&(J=t.RG8UI),ie===t.UNSIGNED_SHORT&&(J=t.RG16UI),ie===t.UNSIGNED_INT&&(J=t.RG32UI),ie===t.BYTE&&(J=t.RG8I),ie===t.SHORT&&(J=t.RG16I),ie===t.INT&&(J=t.RG32I)),C===t.RGB_INTEGER&&(ie===t.UNSIGNED_BYTE&&(J=t.RGB8UI),ie===t.UNSIGNED_SHORT&&(J=t.RGB16UI),ie===t.UNSIGNED_INT&&(J=t.RGB32UI),ie===t.BYTE&&(J=t.RGB8I),ie===t.SHORT&&(J=t.RGB16I),ie===t.INT&&(J=t.RGB32I)),C===t.RGBA_INTEGER&&(ie===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),ie===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),ie===t.UNSIGNED_INT&&(J=t.RGBA32UI),ie===t.BYTE&&(J=t.RGBA8I),ie===t.SHORT&&(J=t.RGBA16I),ie===t.INT&&(J=t.RGBA32I)),C===t.RGB&&ie===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),C===t.RGBA){const we=K?Pc:ot.getTransfer(Y);ie===t.FLOAT&&(J=t.RGBA32F),ie===t.HALF_FLOAT&&(J=t.RGBA16F),ie===t.UNSIGNED_BYTE&&(J=we===pt?t.SRGB8_ALPHA8:t.RGBA8),ie===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),ie===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(D,C){let ie;return D?C===null||C===rs||C===ss?ie=t.DEPTH24_STENCIL8:C===Kn?ie=t.DEPTH32F_STENCIL8:C===Aa&&(ie=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===rs||C===ss?ie=t.DEPTH_COMPONENT24:C===Kn?ie=t.DEPTH_COMPONENT32F:C===Aa&&(ie=t.DEPTH_COMPONENT16),ie}function M(D,C){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wt&&D.minFilter!==Zt?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function A(D){const C=D.target;C.removeEventListener("dispose",A),w(C),C.isVideoTexture&&u.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),I(C)}function w(D){const C=i.get(D);if(C.__webglInit===void 0)return;const ie=D.source,Y=h.get(ie);if(Y){const K=Y[C.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(D),Object.keys(Y).length===0&&h.delete(ie)}i.remove(D)}function b(D){const C=i.get(D);t.deleteTexture(C.__webglTexture);const ie=D.source,Y=h.get(ie);delete Y[C.__cacheKey],o.memory.textures--}function I(D){const C=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let K=0;K<C.__webglFramebuffer[Y].length;K++)t.deleteFramebuffer(C.__webglFramebuffer[Y][K]);else t.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)t.deleteFramebuffer(C.__webglFramebuffer[Y]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ie=D.textures;for(let Y=0,K=ie.length;Y<K;Y++){const J=i.get(ie[Y]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(ie[Y])}i.remove(D)}let _=0;function E(){_=0}function z(){const D=_;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),_+=1,D}function O(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function H(D,C){const ie=i.get(D);if(D.isVideoTexture&&be(D),D.isRenderTargetTexture===!1&&D.version>0&&ie.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ie,D,C);return}}n.bindTexture(t.TEXTURE_2D,ie.__webglTexture,t.TEXTURE0+C)}function $(D,C){const ie=i.get(D);if(D.version>0&&ie.__version!==D.version){Le(ie,D,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ie.__webglTexture,t.TEXTURE0+C)}function j(D,C){const ie=i.get(D);if(D.version>0&&ie.__version!==D.version){Le(ie,D,C);return}n.bindTexture(t.TEXTURE_3D,ie.__webglTexture,t.TEXTURE0+C)}function ae(D,C){const ie=i.get(D);if(D.version>0&&ie.__version!==D.version){te(ie,D,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture,t.TEXTURE0+C)}const U={[wn]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Dh]:t.MIRRORED_REPEAT},X={[Wt]:t.NEAREST,[gM]:t.NEAREST_MIPMAP_NEAREST,[sl]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[ku]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},ne={[_M]:t.NEVER,[AM]:t.ALWAYS,[SM]:t.LESS,[dy]:t.LEQUAL,[MM]:t.EQUAL,[TM]:t.GEQUAL,[wM]:t.GREATER,[EM]:t.NOTEQUAL};function oe(D,C){if(C.type===Kn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Zt||C.magFilter===ku||C.magFilter===sl||C.magFilter===xr||C.minFilter===Zt||C.minFilter===ku||C.minFilter===sl||C.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,U[C.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,U[C.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,U[C.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,X[C.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,X[C.minFilter]),C.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,ne[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Wt||C.minFilter!==sl&&C.minFilter!==xr||C.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function ge(D,C){let ie=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",A));const Y=C.source;let K=h.get(Y);K===void 0&&(K={},h.set(Y,K));const J=O(C);if(J!==D.__cacheKey){K[J]===void 0&&(K[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),K[J].usedTimes++;const we=K[D.__cacheKey];we!==void 0&&(K[D.__cacheKey].usedTimes--,we.usedTimes===0&&b(C)),D.__cacheKey=J,D.__webglTexture=K[J].texture}return ie}function Le(D,C,ie){let Y=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=t.TEXTURE_3D);const K=ge(D,C),J=C.source;n.bindTexture(Y,D.__webglTexture,t.TEXTURE0+ie);const we=i.get(J);if(J.version!==we.__version||K===!0){n.activeTexture(t.TEXTURE0+ie);const L=ot.getPrimaries(ot.workingColorSpace),V=C.colorSpace===mr?null:ot.getPrimaries(C.colorSpace),re=C.colorSpace===mr||L===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let P=S(C.image,!1,r.maxTextureSize);P=ke(C,P);const G=s.convert(C.format,C.colorSpace),W=s.convert(C.type);let k=m(C.internalFormat,G,W,C.colorSpace,C.isVideoTexture);oe(Y,C);let q;const de=C.mipmaps,fe=C.isVideoTexture!==!0,Ae=we.__version===void 0||K===!0,F=J.dataReady,me=M(C,P);if(C.isDepthTexture)k=x(C.format===os,C.type),Ae&&(fe?n.texStorage2D(t.TEXTURE_2D,1,k,P.width,P.height):n.texImage2D(t.TEXTURE_2D,0,k,P.width,P.height,0,G,W,null));else if(C.isDataTexture)if(de.length>0){fe&&Ae&&n.texStorage2D(t.TEXTURE_2D,me,k,de[0].width,de[0].height);for(let se=0,ee=de.length;se<ee;se++)q=de[se],fe?F&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,q.width,q.height,G,W,q.data):n.texImage2D(t.TEXTURE_2D,se,k,q.width,q.height,0,G,W,q.data);C.generateMipmaps=!1}else fe?(Ae&&n.texStorage2D(t.TEXTURE_2D,me,k,P.width,P.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,P.width,P.height,G,W,P.data)):n.texImage2D(t.TEXTURE_2D,0,k,P.width,P.height,0,G,W,P.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){fe&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,k,de[0].width,de[0].height,P.depth);for(let se=0,ee=de.length;se<ee;se++)if(q=de[se],C.format!==Zn)if(G!==null)if(fe){if(F)if(C.layerUpdates.size>0){const ye=ng(q.width,q.height,C.format,C.type);for(const Pe of C.layerUpdates){const Ze=q.data.subarray(Pe*ye/q.data.BYTES_PER_ELEMENT,(Pe+1)*ye/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Pe,q.width,q.height,1,G,Ze,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,q.width,q.height,P.depth,G,q.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,k,q.width,q.height,P.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,q.width,q.height,P.depth,G,W,q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,k,q.width,q.height,P.depth,0,G,W,q.data)}else{fe&&Ae&&n.texStorage2D(t.TEXTURE_2D,me,k,de[0].width,de[0].height);for(let se=0,ee=de.length;se<ee;se++)q=de[se],C.format!==Zn?G!==null?fe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,q.width,q.height,G,q.data):n.compressedTexImage2D(t.TEXTURE_2D,se,k,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?F&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,q.width,q.height,G,W,q.data):n.texImage2D(t.TEXTURE_2D,se,k,q.width,q.height,0,G,W,q.data)}else if(C.isDataArrayTexture)if(fe){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,k,P.width,P.height,P.depth),F)if(C.layerUpdates.size>0){const se=ng(P.width,P.height,C.format,C.type);for(const ee of C.layerUpdates){const ye=P.data.subarray(ee*se/P.data.BYTES_PER_ELEMENT,(ee+1)*se/P.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,P.width,P.height,1,G,W,ye)}C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,G,W,P.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,k,P.width,P.height,P.depth,0,G,W,P.data);else if(C.isData3DTexture)fe?(Ae&&n.texStorage3D(t.TEXTURE_3D,me,k,P.width,P.height,P.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,G,W,P.data)):n.texImage3D(t.TEXTURE_3D,0,k,P.width,P.height,P.depth,0,G,W,P.data);else if(C.isFramebufferTexture){if(Ae)if(fe)n.texStorage2D(t.TEXTURE_2D,me,k,P.width,P.height);else{let se=P.width,ee=P.height;for(let ye=0;ye<me;ye++)n.texImage2D(t.TEXTURE_2D,ye,k,se,ee,0,G,W,null),se>>=1,ee>>=1}}else if(de.length>0){if(fe&&Ae){const se=De(de[0]);n.texStorage2D(t.TEXTURE_2D,me,k,se.width,se.height)}for(let se=0,ee=de.length;se<ee;se++)q=de[se],fe?F&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,G,W,q):n.texImage2D(t.TEXTURE_2D,se,k,G,W,q);C.generateMipmaps=!1}else if(fe){if(Ae){const se=De(P);n.texStorage2D(t.TEXTURE_2D,me,k,se.width,se.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,G,W,P)}else n.texImage2D(t.TEXTURE_2D,0,k,G,W,P);g(C)&&f(Y),we.__version=J.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function te(D,C,ie){if(C.image.length!==6)return;const Y=ge(D,C),K=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+ie);const J=i.get(K);if(K.version!==J.__version||Y===!0){n.activeTexture(t.TEXTURE0+ie);const we=ot.getPrimaries(ot.workingColorSpace),L=C.colorSpace===mr?null:ot.getPrimaries(C.colorSpace),V=C.colorSpace===mr||we===L?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const re=C.isCompressedTexture||C.image[0].isCompressedTexture,P=C.image[0]&&C.image[0].isDataTexture,G=[];for(let ee=0;ee<6;ee++)!re&&!P?G[ee]=S(C.image[ee],!0,r.maxCubemapSize):G[ee]=P?C.image[ee].image:C.image[ee],G[ee]=ke(C,G[ee]);const W=G[0],k=s.convert(C.format,C.colorSpace),q=s.convert(C.type),de=m(C.internalFormat,k,q,C.colorSpace),fe=C.isVideoTexture!==!0,Ae=J.__version===void 0||Y===!0,F=K.dataReady;let me=M(C,W);oe(t.TEXTURE_CUBE_MAP,C);let se;if(re){fe&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,de,W.width,W.height);for(let ee=0;ee<6;ee++){se=G[ee].mipmaps;for(let ye=0;ye<se.length;ye++){const Pe=se[ye];C.format!==Zn?k!==null?fe?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,Pe.width,Pe.height,k,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,de,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,Pe.width,Pe.height,k,q,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,de,Pe.width,Pe.height,0,k,q,Pe.data)}}}else{if(se=C.mipmaps,fe&&Ae){se.length>0&&me++;const ee=De(G[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,de,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(P){fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,G[ee].width,G[ee].height,k,q,G[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,G[ee].width,G[ee].height,0,k,q,G[ee].data);for(let ye=0;ye<se.length;ye++){const Ze=se[ye].image[ee].image;fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Ze.width,Ze.height,k,q,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,de,Ze.width,Ze.height,0,k,q,Ze.data)}}else{fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,k,q,G[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,k,q,G[ee]);for(let ye=0;ye<se.length;ye++){const Pe=se[ye];fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,k,q,Pe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,de,k,q,Pe.image[ee])}}}g(C)&&f(t.TEXTURE_CUBE_MAP),J.__version=K.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ue(D,C,ie,Y,K,J){const we=s.convert(ie.format,ie.colorSpace),L=s.convert(ie.type),V=m(ie.internalFormat,we,L,ie.colorSpace);if(!i.get(C).__hasExternalTextures){const P=Math.max(1,C.width>>J),G=Math.max(1,C.height>>J);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,J,V,P,G,C.depth,0,we,L,null):n.texImage2D(K,J,V,P,G,0,we,L,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),xe(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,K,i.get(ie).__webglTexture,0,Te(C)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,K,i.get(ie).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(D,C,ie){if(t.bindRenderbuffer(t.RENDERBUFFER,D),C.depthBuffer){const Y=C.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,J=x(C.stencilBuffer,K),we=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=Te(C);xe(C)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,J,C.width,C.height):ie?t.renderbufferStorageMultisample(t.RENDERBUFFER,L,J,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,J,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,D)}else{const Y=C.textures;for(let K=0;K<Y.length;K++){const J=Y[K],we=s.convert(J.format,J.colorSpace),L=s.convert(J.type),V=m(J.internalFormat,we,L,J.colorSpace),re=Te(C);ie&&xe(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,V,C.width,C.height):xe(C)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,V,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,V,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const Y=i.get(C.depthTexture).__webglTexture,K=Te(C);if(C.depthTexture.format===ro)xe(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(C.depthTexture.format===os)xe(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const C=i.get(D),ie=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){const K=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),C.__depthDisposeCallback=K}C.__boundDepthTexture=Y}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");pe(C.__webglFramebuffer,D)}else if(ie){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=t.createRenderbuffer(),ve(C.__webglDepthbuffer[Y],D,!1);else{const K=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=t.createRenderbuffer(),ve(C.__webglDepthbuffer,D,!1);else{const Y=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=C.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(D,C,ie){const Y=i.get(D);C!==void 0&&ue(Y.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ie!==void 0&&Oe(D)}function Fe(D){const C=D.texture,ie=i.get(D),Y=i.get(C);D.addEventListener("dispose",T);const K=D.textures,J=D.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=C.version,o.memory.textures++),J){ie.__webglFramebuffer=[];for(let L=0;L<6;L++)if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer[L]=[];for(let V=0;V<C.mipmaps.length;V++)ie.__webglFramebuffer[L][V]=t.createFramebuffer()}else ie.__webglFramebuffer[L]=t.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer=[];for(let L=0;L<C.mipmaps.length;L++)ie.__webglFramebuffer[L]=t.createFramebuffer()}else ie.__webglFramebuffer=t.createFramebuffer();if(we)for(let L=0,V=K.length;L<V;L++){const re=i.get(K[L]);re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&xe(D)===!1){ie.__webglMultisampledFramebuffer=t.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let L=0;L<K.length;L++){const V=K[L];ie.__webglColorRenderbuffer[L]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ie.__webglColorRenderbuffer[L]);const re=s.convert(V.format,V.colorSpace),P=s.convert(V.type),G=m(V.internalFormat,re,P,V.colorSpace,D.isXRRenderTarget===!0),W=Te(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,W,G,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,ie.__webglColorRenderbuffer[L])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(ie.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(ie.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),oe(t.TEXTURE_CUBE_MAP,C);for(let L=0;L<6;L++)if(C.mipmaps&&C.mipmaps.length>0)for(let V=0;V<C.mipmaps.length;V++)ue(ie.__webglFramebuffer[L][V],D,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+L,V);else ue(ie.__webglFramebuffer[L],D,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);g(C)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let L=0,V=K.length;L<V;L++){const re=K[L],P=i.get(re);n.bindTexture(t.TEXTURE_2D,P.__webglTexture),oe(t.TEXTURE_2D,re),ue(ie.__webglFramebuffer,D,re,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,0),g(re)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let L=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(L=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(L,Y.__webglTexture),oe(L,C),C.mipmaps&&C.mipmaps.length>0)for(let V=0;V<C.mipmaps.length;V++)ue(ie.__webglFramebuffer[V],D,C,t.COLOR_ATTACHMENT0,L,V);else ue(ie.__webglFramebuffer,D,C,t.COLOR_ATTACHMENT0,L,0);g(C)&&f(L),n.unbindTexture()}D.depthBuffer&&Oe(D)}function Xe(D){const C=D.textures;for(let ie=0,Y=C.length;ie<Y;ie++){const K=C[ie];if(g(K)){const J=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(K).__webglTexture;n.bindTexture(J,we),f(J),n.unbindTexture()}}}const he=[],N=[];function Me(D){if(D.samples>0){if(xe(D)===!1){const C=D.textures,ie=D.width,Y=D.height;let K=t.COLOR_BUFFER_BIT;const J=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(D),L=C.length>1;if(L)for(let V=0;V<C.length;V++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let V=0;V<C.length;V++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),L){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[V]);const re=i.get(C[V]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,ie,Y,0,0,ie,Y,K,t.NEAREST),l===!0&&(he.length=0,N.length=0,he.push(t.COLOR_ATTACHMENT0+V),D.depthBuffer&&D.resolveDepthBuffer===!1&&(he.push(J),N.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),L)for(let V=0;V<C.length;V++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,we.__webglColorRenderbuffer[V]);const re=i.get(C[V]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function Te(D){return Math.min(r.maxSamples,D.samples)}function xe(D){const C=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function be(D){const C=o.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function ke(D,C){const ie=D.colorSpace,Y=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ie!==Qi&&ie!==mr&&(ot.getTransfer(ie)===pt?(Y!==Zn||K!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),C}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=ae,this.rebindTextures=Ce,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=xe}function IA(t,e){function n(i,r=mr){let s;const o=ot.getTransfer(r);if(i===bi)return t.UNSIGNED_BYTE;if(i===fp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===iy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ty)return t.BYTE;if(i===ny)return t.SHORT;if(i===Aa)return t.UNSIGNED_SHORT;if(i===hp)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===Tn)return t.HALF_FLOAT;if(i===ry)return t.ALPHA;if(i===sy)return t.RGB;if(i===Zn)return t.RGBA;if(i===oy)return t.LUMINANCE;if(i===ay)return t.LUMINANCE_ALPHA;if(i===ro)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===ly)return t.RED;if(i===mp)return t.RED_INTEGER;if(i===cy)return t.RG;if(i===gp)return t.RG_INTEGER;if(i===vp)return t.RGBA_INTEGER;if(i===Zl||i===Jl||i===Ql||i===$l)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nh||i===Ih||i===Uh||i===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zh||i===Fh||i===kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zh||i===Fh)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh||i===Xh||i===Yh||i===qh||i===Kh||i===Zh||i===Jh||i===Qh||i===$h)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$h)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===ef||i===tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ec)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uy||i===nf||i===rf||i===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ec)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class UA extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OA={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
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

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new It({vertexShader:zA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Je(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const S=new kA,g=n.getContextAttributes();let f=null,m=null;const x=[],M=[],A=new _e;let T=null;const w=new zn;w.layers.enable(1),w.viewport=new ht;const b=new zn;b.layers.enable(2),b.viewport=new ht;const I=[w,b],_=new UA;_.layers.enable(1),_.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=x[te];return ue===void 0&&(ue=new pd,x[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=x[te];return ue===void 0&&(ue=new pd,x[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=x[te];return ue===void 0&&(ue=new pd,x[te]=ue),ue.getHandSpace()};function O(te){const ue=M.indexOf(te.inputSource);if(ue===-1)return;const ve=x[ue];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let te=0;te<x.length;te++){const ue=M[te];ue!==null&&(M[te]=null,x[te].disconnect(ue))}E=null,z=null,S.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,m=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new ti(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,ve=null,pe=null;g.depth&&(pe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?os:ro,ve=g.stencil?ss:rs);const Oe={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new ti(h.textureWidth,h.textureHeight,{format:Zn,type:bi,depthTexture:new Ap(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(te){for(let ue=0;ue<te.removed.length;ue++){const ve=te.removed[ue],pe=M.indexOf(ve);pe>=0&&(M[pe]=null,x[pe].disconnect(ve))}for(let ue=0;ue<te.added.length;ue++){const ve=te.added[ue];let pe=M.indexOf(ve);if(pe===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=M.length){M.push(ve),pe=Ce;break}else if(M[Ce]===null){M[Ce]=ve,pe=Ce;break}if(pe===-1)break}const Oe=x[pe];Oe&&Oe.connect(ve)}}const j=new B,ae=new B;function U(te,ue,ve){j.setFromMatrixPosition(ue.matrixWorld),ae.setFromMatrixPosition(ve.matrixWorld);const pe=j.distanceTo(ae),Oe=ue.projectionMatrix.elements,Ce=ve.projectionMatrix.elements,Fe=Oe[14]/(Oe[10]-1),Xe=Oe[14]/(Oe[10]+1),he=(Oe[9]+1)/Oe[5],N=(Oe[9]-1)/Oe[5],Me=(Oe[8]-1)/Oe[0],Te=(Ce[8]+1)/Ce[0],xe=Fe*Me,be=Fe*Te,ke=pe/(-Me+Te),De=ke*-Me;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(De),te.translateZ(ke),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Oe[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const D=Fe+ke,C=Xe+ke,ie=xe-De,Y=be+(pe-De),K=he*Xe/C*D,J=N*Xe/C*D;te.projectionMatrix.makePerspective(ie,Y,K,J,D,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function X(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ue=te.near,ve=te.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),_.near=b.near=w.near=ue,_.far=b.far=w.far=ve,(E!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,z=_.far);const pe=te.parent,Oe=_.cameras;X(_,pe);for(let Ce=0;Ce<Oe.length;Ce++)X(Oe[Ce],pe);Oe.length===2?U(_,w,b):_.projectionMatrix.copy(w.projectionMatrix),ne(te,_,pe)};function ne(te,ue,ve){ve===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=of*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(_)};let oe=null;function ge(te,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let pe=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,pe=!0);for(let Ce=0;Ce<ve.length;Ce++){const Fe=ve[Ce];let Xe=null;if(p!==null)Xe=p.getViewport(Fe);else{const N=d.getViewSubImage(h,Fe);Xe=N.viewport,Ce===0&&(e.setRenderTargetTextures(m,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(m))}let he=I[Ce];he===void 0&&(he=new zn,he.layers.enable(Ce),he.viewport=new ht,I[Ce]=he),he.matrix.fromArray(Fe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Fe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ce===0&&(_.matrix.copy(he.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pe===!0&&_.cameras.push(he)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=d.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&S.init(e,Ce,r.renderState)}}for(let ve=0;ve<x.length;ve++){const pe=M[ve],Oe=x[ve];pe!==null&&Oe!==void 0&&Oe.update(pe,ue,c||o)}oe&&oe(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const Le=new Sy;Le.setAnimationLoop(ge),this.setAnimationLoop=function(te){oe=te},this.dispose=function(){}}}const Vr=new Ci,HA=new it;function VA(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,xy(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),S(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,m,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===mn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===mn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),x=m.envMap,M=m.envMapRotation;x&&(g.envMap.value=x,Vr.copy(M),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Vr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=x*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const M=x.program;i.uniformBlockBinding(m,M)}function c(m,x){let M=r[m.id];M===void 0&&(v(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",g));const A=x.program;i.updateUBOMapping(m,A);const T=e.render.frame;s[m.id]!==T&&(h(m),s[m.id]=T)}function u(m){const x=d();m.__bindingPointIndex=x;const M=t.createBuffer(),A=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const x=r[m.id],M=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){const b=Array.isArray(M[T])?M[T]:[M[T]];for(let I=0,_=b.length;I<_;I++){const E=b[I];if(p(E,T,I,A)===!0){const z=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let H=0;for(let $=0;$<O.length;$++){const j=O[$],ae=S(j);typeof j=="number"||typeof j=="boolean"?(E.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,z+H,E.__data)):j.isMatrix3?(E.__data[0]=j.elements[0],E.__data[1]=j.elements[1],E.__data[2]=j.elements[2],E.__data[3]=0,E.__data[4]=j.elements[3],E.__data[5]=j.elements[4],E.__data[6]=j.elements[5],E.__data[7]=0,E.__data[8]=j.elements[6],E.__data[9]=j.elements[7],E.__data[10]=j.elements[8],E.__data[11]=0):(j.toArray(E.__data,H),H+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,M,A){const T=m.value,w=x+"_"+M;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const b=A[w];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return A[w]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function v(m){const x=m.uniforms;let M=0;const A=16;for(let w=0,b=x.length;w<b;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,E=I.length;_<E;_++){const z=I[_],O=Array.isArray(z.value)?z.value:[z.value];for(let H=0,$=O.length;H<$;H++){const j=O[H],ae=S(j),U=M%A,X=U%ae.boundary,ne=U+X;M+=X,ne!==0&&A-ne<ae.storage&&(M+=A-ne),z.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=ae.storage}}}const T=M%A;return T>0&&(M+=A-T),m.__size=M,m.__cache={},this}function S(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class WA{constructor(e={}){const{canvas:n=RM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let S=null,g=null;const f=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=br,this.toneMappingExposure=1;const x=this;let M=!1,A=0,T=0,w=null,b=-1,I=null;const _=new ht,E=new ht;let z=null;const O=new Ke(0);let H=0,$=n.width,j=n.height,ae=1,U=null,X=null;const ne=new ht(0,0,$,j),oe=new ht(0,0,$,j);let ge=!1;const Le=new wp;let te=!1,ue=!1;const ve=new it,pe=new it,Oe=new B,Ce=new ht,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function he(){return w===null?ae:1}let N=i;function Me(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${up}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),N===null){const Z="webgl2";if(N=Me(Z,R),N===null)throw Me(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Te,xe,be,ke,De,D,C,ie,Y,K,J,we,L,V,re,P,G,W,k,q,de,fe,Ae,F;function me(){Te=new K2(N),Te.init(),fe=new IA(N,Te),xe=new G2(N,Te,e,fe),be=new LA(N),xe.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),ke=new Q2(N),De=new gA,D=new NA(N,Te,be,De,xe,fe,ke),C=new j2(x),ie=new q2(x),Y=new sw(N),Ae=new H2(N,Y),K=new Z2(N,Y,ke,Ae),J=new eT(N,K,Y,ke),k=new $2(N,xe,D),P=new W2(De),we=new mA(x,C,ie,Te,xe,Ae,P),L=new VA(x,De),V=new xA,re=new EA(Te),W=new B2(x,C,ie,be,J,h,l),G=new RA(x,J,xe),F=new GA(N,ke,xe,be),q=new V2(N,Te,ke),de=new J2(N,Te,ke),ke.programs=we.programs,x.capabilities=xe,x.extensions=Te,x.properties=De,x.renderLists=V,x.shadowMap=G,x.state=be,x.info=ke}me();const se=new BA(x,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(R){R!==void 0&&(ae=R,this.setSize($,j,!1))},this.getSize=function(R){return R.set($,j)},this.setSize=function(R,Z,le=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,j=Z,n.width=Math.floor(R*ae),n.height=Math.floor(Z*ae),le===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set($*ae,j*ae).floor()},this.setDrawingBufferSize=function(R,Z,le){$=R,j=Z,ae=le,n.width=Math.floor(R*le),n.height=Math.floor(Z*le),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,Z,le,ce){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,Z,le,ce),be.viewport(_.copy(ne).multiplyScalar(ae).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,Z,le,ce){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,Z,le,ce),be.scissor(E.copy(oe).multiplyScalar(ae).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){be.setScissorTest(ge=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(R=!0,Z=!0,le=!0){let ce=0;if(R){let Q=!1;if(w!==null){const Re=w.texture.format;Q=Re===vp||Re===gp||Re===mp}if(Q){const Re=w.texture.type,Ie=Re===bi||Re===rs||Re===Aa||Re===ss||Re===fp||Re===pp,He=W.getClearColor(),Ve=W.getClearAlpha(),Ye=He.r,qe=He.g,Ge=He.b;Ie?(p[0]=Ye,p[1]=qe,p[2]=Ge,p[3]=Ve,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=Ye,v[1]=qe,v[2]=Ge,v[3]=Ve,N.clearBufferiv(N.COLOR,0,v))}else ce|=N.COLOR_BUFFER_BIT}Z&&(ce|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),le&&(ce|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),V.dispose(),re.dispose(),De.dispose(),C.dispose(),ie.dispose(),J.dispose(),Ae.dispose(),F.dispose(),we.dispose(),se.dispose(),se.removeEventListener("sessionstart",Bp),se.removeEventListener("sessionend",Hp),Ir.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ke.autoReset,Z=G.enabled,le=G.autoUpdate,ce=G.needsUpdate,Q=G.type;me(),ke.autoReset=R,G.enabled=Z,G.autoUpdate=le,G.needsUpdate=ce,G.type=Q}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ze(R){const Z=R.target;Z.removeEventListener("dispose",Ze),ft(Z)}function ft(R){Xt(R),De.remove(R)}function Xt(R){const Z=De.get(R).programs;Z!==void 0&&(Z.forEach(function(le){we.releaseProgram(le)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,le,ce,Q,Re){Z===null&&(Z=Fe);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,He=By(R,Z,le,ce,Q);be.setMaterial(ce,Ie);let Ve=le.index,Ye=1;if(ce.wireframe===!0){if(Ve=K.getWireframeAttribute(le),Ve===void 0)return;Ye=2}const qe=le.drawRange,Ge=le.attributes.position;let ct=qe.start*Ye,vt=(qe.start+qe.count)*Ye;Re!==null&&(ct=Math.max(ct,Re.start*Ye),vt=Math.min(vt,(Re.start+Re.count)*Ye)),Ve!==null?(ct=Math.max(ct,0),vt=Math.min(vt,Ve.count)):Ge!=null&&(ct=Math.max(ct,0),vt=Math.min(vt,Ge.count));const At=vt-ct;if(At<0||At===1/0)return;Ae.setup(Q,ce,He,le,Ve);let Pn,at=q;if(Ve!==null&&(Pn=Y.get(Ve),at=de,at.setIndex(Pn)),Q.isMesh)ce.wireframe===!0?(be.setLineWidth(ce.wireframeLinewidth*he()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(Q.isLine){let je=ce.linewidth;je===void 0&&(je=1),be.setLineWidth(je*he()),Q.isLineSegments?at.setMode(N.LINES):Q.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else Q.isPoints?at.setMode(N.POINTS):Q.isSprite&&at.setMode(N.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)at.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))at.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const je=Q._multiDrawStarts,Yt=Q._multiDrawCounts,lt=Q._multiDrawCount,ni=Ve?Y.get(Ve).bytesPerElement:1,ps=De.get(ce).currentProgram.getUniforms();for(let Ln=0;Ln<lt;Ln++)ps.setValue(N,"_gl_DrawID",Ln),at.render(je[Ln]/ni,Yt[Ln])}else if(Q.isInstancedMesh)at.renderInstances(ct,At,Q.count);else if(le.isInstancedBufferGeometry){const je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Yt=Math.min(le.instanceCount,je);at.renderInstances(ct,At,Yt)}else at.render(ct,At)};function nt(R,Z,le){R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,Ba(R,Z,le),R.side=Pr,R.needsUpdate=!0,Ba(R,Z,le),R.side=fn):Ba(R,Z,le)}this.compile=function(R,Z,le=null){le===null&&(le=R),g=re.get(le),g.init(Z),m.push(g),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),R!==le&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const ce=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const He=Re[Ie];nt(He,le,Q),ce.add(He)}else nt(Re,le,Q),ce.add(Re)}),m.pop(),g=null,ce},this.compileAsync=function(R,Z,le=null){const ce=this.compile(R,Z,le);return new Promise(Q=>{function Re(){if(ce.forEach(function(Ie){De.get(Ie).currentProgram.isReady()&&ce.delete(Ie)}),ce.size===0){Q(R);return}setTimeout(Re,10)}Te.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let xn=null;function Pi(R){xn&&xn(R)}function Bp(){Ir.stop()}function Hp(){Ir.start()}const Ir=new Sy;Ir.setAnimationLoop(Pi),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(R){xn=R,se.setAnimationLoop(R),R===null?Ir.stop():Ir.start()},se.addEventListener("sessionstart",Bp),se.addEventListener("sessionend",Hp),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(Z),Z=se.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,Z,w),g=re.get(R,m.length),g.init(Z),m.push(g),pe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Le.setFromProjectionMatrix(pe),ue=this.localClippingEnabled,te=P.init(this.clippingPlanes,ue),S=V.get(R,f.length),S.init(),f.push(S),se.enabled===!0&&se.isPresenting===!0){const Re=x.xr.getDepthSensingMesh();Re!==null&&su(Re,Z,-1/0,x.sortObjects)}su(R,Z,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(U,X),Xe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Xe&&W.addToRenderList(S,R),this.info.render.frame++,te===!0&&P.beginShadows();const le=g.state.shadowsArray;G.render(le,R,Z),te===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=S.opaque,Q=S.transmissive;if(g.setupLights(),Z.isArrayCamera){const Re=Z.cameras;if(Q.length>0)for(let Ie=0,He=Re.length;Ie<He;Ie++){const Ve=Re[Ie];Gp(ce,Q,R,Ve)}Xe&&W.render(R);for(let Ie=0,He=Re.length;Ie<He;Ie++){const Ve=Re[Ie];Vp(S,R,Ve,Ve.viewport)}}else Q.length>0&&Gp(ce,Q,R,Z),Xe&&W.render(R),Vp(S,R,Z);w!==null&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(x,R,Z),Ae.resetDefaultState(),b=-1,I=null,m.pop(),m.length>0?(g=m[m.length-1],te===!0&&P.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function su(R,Z,le,ce){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Le.intersectsSprite(R)){ce&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const Ie=J.update(R),He=R.material;He.visible&&S.push(R,Ie,He,le,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Le.intersectsObject(R))){const Ie=J.update(R),He=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ce.copy(Ie.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(He)){const Ve=Ie.groups;for(let Ye=0,qe=Ve.length;Ye<qe;Ye++){const Ge=Ve[Ye],ct=He[Ge.materialIndex];ct&&ct.visible&&S.push(R,Ie,ct,le,Ce.z,Ge)}}else He.visible&&S.push(R,Ie,He,le,Ce.z,null)}}const Re=R.children;for(let Ie=0,He=Re.length;Ie<He;Ie++)su(Re[Ie],Z,le,ce)}function Vp(R,Z,le,ce){const Q=R.opaque,Re=R.transmissive,Ie=R.transparent;g.setupLightsView(le),te===!0&&P.setGlobalState(x.clippingPlanes,le),ce&&be.viewport(_.copy(ce)),Q.length>0&&ka(Q,Z,le),Re.length>0&&ka(Re,Z,le),Ie.length>0&&ka(Ie,Z,le),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Gp(R,Z,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new ti(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Tn:bi,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Re=g.state.transmissionRenderTarget[ce.id],Ie=ce.viewport||_;Re.setSize(Ie.z,Ie.w);const He=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(O),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&W.render(le);const Ve=x.toneMapping;x.toneMapping=br;const Ye=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),te===!0&&P.setGlobalState(x.clippingPlanes,ce),ka(R,le,ce),D.updateMultisampleRenderTarget(Re),D.updateRenderTargetMipmap(Re),Te.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ge=0,ct=Z.length;Ge<ct;Ge++){const vt=Z[Ge],At=vt.object,Pn=vt.geometry,at=vt.material,je=vt.group;if(at.side===fn&&At.layers.test(ce.layers)){const Yt=at.side;at.side=mn,at.needsUpdate=!0,Wp(At,le,ce,Pn,at,je),at.side=Yt,at.needsUpdate=!0,qe=!0}}qe===!0&&(D.updateMultisampleRenderTarget(Re),D.updateRenderTargetMipmap(Re))}x.setRenderTarget(He),x.setClearColor(O,H),Ye!==void 0&&(ce.viewport=Ye),x.toneMapping=Ve}function ka(R,Z,le){const ce=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Re=R.length;Q<Re;Q++){const Ie=R[Q],He=Ie.object,Ve=Ie.geometry,Ye=ce===null?Ie.material:ce,qe=Ie.group;He.layers.test(le.layers)&&Wp(He,Z,le,Ve,Ye,qe)}}function Wp(R,Z,le,ce,Q,Re){R.onBeforeRender(x,Z,le,ce,Q,Re),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(x,Z,le,ce,R,Re),Q.transparent===!0&&Q.side===fn&&Q.forceSinglePass===!1?(Q.side=mn,Q.needsUpdate=!0,x.renderBufferDirect(le,Z,ce,Q,R,Re),Q.side=Pr,Q.needsUpdate=!0,x.renderBufferDirect(le,Z,ce,Q,R,Re),Q.side=fn):x.renderBufferDirect(le,Z,ce,Q,R,Re),R.onAfterRender(x,Z,le,ce,Q,Re)}function Ba(R,Z,le){Z.isScene!==!0&&(Z=Fe);const ce=De.get(R),Q=g.state.lights,Re=g.state.shadowsArray,Ie=Q.state.version,He=we.getParameters(R,Q.state,Re,Z,le),Ve=we.getProgramCacheKey(He);let Ye=ce.programs;ce.environment=R.isMeshStandardMaterial?Z.environment:null,ce.fog=Z.fog,ce.envMap=(R.isMeshStandardMaterial?ie:C).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",Ze),Ye=new Map,ce.programs=Ye);let qe=Ye.get(Ve);if(qe!==void 0){if(ce.currentProgram===qe&&ce.lightsStateVersion===Ie)return Xp(R,He),qe}else He.uniforms=we.getUniforms(R),R.onBeforeCompile(He,x),qe=we.acquireProgram(He,Ve),Ye.set(Ve,qe),ce.uniforms=He.uniforms;const Ge=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=P.uniform),Xp(R,He),ce.needsLights=Vy(R),ce.lightsStateVersion=Ie,ce.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.directionalShadowMap.value=Q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotShadowMap.value=Q.state.spotShadowMap,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMap.value=Q.state.pointShadowMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=qe,ce.uniformsList=null,qe}function jp(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Xp(R,Z){const le=De.get(R);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function By(R,Z,le,ce,Q){Z.isScene!==!0&&(Z=Fe),D.resetTextureUnits();const Re=Z.fog,Ie=ce.isMeshStandardMaterial?Z.environment:null,He=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Qi,Ve=(ce.isMeshStandardMaterial?ie:C).get(ce.envMap||Ie),Ye=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,qe=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ge=!!le.morphAttributes.position,ct=!!le.morphAttributes.normal,vt=!!le.morphAttributes.color;let At=br;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=x.toneMapping);const Pn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,at=Pn!==void 0?Pn.length:0,je=De.get(ce),Yt=g.state.lights;if(te===!0&&(ue===!0||R!==I)){const Wn=R===I&&ce.id===b;P.setState(ce,R,Wn)}let lt=!1;ce.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Yt.state.version||je.outputColorSpace!==He||Q.isBatchedMesh&&je.batching===!1||!Q.isBatchedMesh&&je.batching===!0||Q.isBatchedMesh&&je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&je.instancing===!1||!Q.isInstancedMesh&&je.instancing===!0||Q.isSkinnedMesh&&je.skinning===!1||!Q.isSkinnedMesh&&je.skinning===!0||Q.isInstancedMesh&&je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&je.instancingMorph===!1&&Q.morphTexture!==null||je.envMap!==Ve||ce.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==P.numPlanes||je.numIntersection!==P.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==qe||je.morphTargets!==Ge||je.morphNormals!==ct||je.morphColors!==vt||je.toneMapping!==At||je.morphTargetsCount!==at)&&(lt=!0):(lt=!0,je.__version=ce.version);let ni=je.currentProgram;lt===!0&&(ni=Ba(ce,Z,Q));let ps=!1,Ln=!1,ou=!1;const Ct=ni.getUniforms(),$i=je.uniforms;if(be.useProgram(ni.program)&&(ps=!0,Ln=!0,ou=!0),ce.id!==b&&(b=ce.id,Ln=!0),ps||I!==R){xe.reverseDepthBuffer?(ve.copy(R.projectionMatrix),LM(ve),DM(ve),Ct.setValue(N,"projectionMatrix",ve)):Ct.setValue(N,"projectionMatrix",R.projectionMatrix),Ct.setValue(N,"viewMatrix",R.matrixWorldInverse);const Wn=Ct.map.cameraPosition;Wn!==void 0&&Wn.setValue(N,Oe.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,Ln=!0,ou=!0)}if(Q.isSkinnedMesh){Ct.setOptional(N,Q,"bindMatrix"),Ct.setOptional(N,Q,"bindMatrixInverse");const Wn=Q.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Ct.setValue(N,"boneTexture",Wn.boneTexture,D))}Q.isBatchedMesh&&(Ct.setOptional(N,Q,"batchingTexture"),Ct.setValue(N,"batchingTexture",Q._matricesTexture,D),Ct.setOptional(N,Q,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",Q._indirectTexture,D),Ct.setOptional(N,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",Q._colorsTexture,D));const au=le.morphAttributes;if((au.position!==void 0||au.normal!==void 0||au.color!==void 0)&&k.update(Q,le,ni),(Ln||je.receiveShadow!==Q.receiveShadow)&&(je.receiveShadow=Q.receiveShadow,Ct.setValue(N,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&($i.envMap.value=Ve,$i.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Z.environment!==null&&($i.envMapIntensity.value=Z.environmentIntensity),Ln&&(Ct.setValue(N,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Hy($i,ou),Re&&ce.fog===!0&&L.refreshFogUniforms($i,Re),L.refreshMaterialUniforms($i,ce,ae,j,g.state.transmissionRenderTarget[R.id]),ic.upload(N,jp(je),$i,D)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ic.upload(N,jp(je),$i,D),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ct.setValue(N,"center",Q.center),Ct.setValue(N,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(N,"normalMatrix",Q.normalMatrix),Ct.setValue(N,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Wn=ce.uniformsGroups;for(let lu=0,Gy=Wn.length;lu<Gy;lu++){const Yp=Wn[lu];F.update(Yp,ni),F.bind(Yp,ni)}}return ni}function Hy(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Vy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,Z,le){De.get(R.texture).__webglTexture=Z,De.get(R.depthTexture).__webglTexture=le;const ce=De.get(R);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=le===void 0,ce.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const le=De.get(R);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,le=0){w=R,A=Z,T=le;let ce=!0,Q=null,Re=!1,Ie=!1;if(R){const Ve=De.get(R);if(Ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),ce=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ve.__hasExternalTextures)D.rebindTextures(R,De.get(R.texture).__webglTexture,De.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&De.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const qe=De.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Z])?Q=qe[Z][le]:Q=qe[Z],Re=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?Q=De.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?Q=qe[le]:Q=qe,_.copy(R.viewport),E.copy(R.scissor),z=R.scissorTest}else _.copy(ne).multiplyScalar(ae).floor(),E.copy(oe).multiplyScalar(ae).floor(),z=ge;if(be.bindFramebuffer(N.FRAMEBUFFER,Q)&&ce&&be.drawBuffers(R,Q),be.viewport(_),be.scissor(E),be.setScissorTest(z),Re){const Ve=De.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ve.__webglTexture,le)}else if(Ie){const Ve=De.get(R.texture),Ye=Z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,le||0,Ye)}b=-1},this.readRenderTargetPixels=function(R,Z,le,ce,Q,Re,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){be.bindFramebuffer(N.FRAMEBUFFER,He);try{const Ve=R.texture,Ye=Ve.format,qe=Ve.type;if(!xe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ce&&le>=0&&le<=R.height-Q&&N.readPixels(Z,le,ce,Q,fe.convert(Ye),fe.convert(qe),Re)}finally{const Ve=w!==null?De.get(w).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,Z,le,ce,Q,Re,Ie){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){const Ve=R.texture,Ye=Ve.format,qe=Ve.type;if(!xe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-ce&&le>=0&&le<=R.height-Q){be.bindFramebuffer(N.FRAMEBUFFER,He);const Ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.bufferData(N.PIXEL_PACK_BUFFER,Re.byteLength,N.STREAM_READ),N.readPixels(Z,le,ce,Q,fe.convert(Ye),fe.convert(qe),0);const ct=w!==null?De.get(w).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,ct);const vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await PM(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Re),N.deleteBuffer(Ge),N.deleteSync(vt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,le=0){R.isTexture!==!0&&(nc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const ce=Math.pow(2,-le),Q=Math.floor(R.image.width*ce),Re=Math.floor(R.image.height*ce),Ie=Z!==null?Z.x:0,He=Z!==null?Z.y:0;D.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,le,0,0,Ie,He,Q,Re),be.unbindTexture()},this.copyTextureToTexture=function(R,Z,le=null,ce=null,Q=0){R.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,R=arguments[1],Z=arguments[2],Q=arguments[3]||0,le=null);let Re,Ie,He,Ve,Ye,qe;le!==null?(Re=le.max.x-le.min.x,Ie=le.max.y-le.min.y,He=le.min.x,Ve=le.min.y):(Re=R.image.width,Ie=R.image.height,He=0,Ve=0),ce!==null?(Ye=ce.x,qe=ce.y):(Ye=0,qe=0);const Ge=fe.convert(Z.format),ct=fe.convert(Z.type);D.setTexture2D(Z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);const vt=N.getParameter(N.UNPACK_ROW_LENGTH),At=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pn=N.getParameter(N.UNPACK_SKIP_PIXELS),at=N.getParameter(N.UNPACK_SKIP_ROWS),je=N.getParameter(N.UNPACK_SKIP_IMAGES),Yt=R.isCompressedTexture?R.mipmaps[Q]:R.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,He),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Q,Ye,qe,Re,Ie,Ge,ct,Yt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Q,Ye,qe,Yt.width,Yt.height,Ge,Yt.data):N.texSubImage2D(N.TEXTURE_2D,Q,Ye,qe,Re,Ie,Ge,ct,Yt),N.pixelStorei(N.UNPACK_ROW_LENGTH,vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,at),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),Q===0&&Z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,le=null,ce=null,Q=0){R.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ce=arguments[1]||null,R=arguments[2],Z=arguments[3],Q=arguments[4]||0);let Re,Ie,He,Ve,Ye,qe,Ge,ct,vt;const At=R.isCompressedTexture?R.mipmaps[Q]:R.image;le!==null?(Re=le.max.x-le.min.x,Ie=le.max.y-le.min.y,He=le.max.z-le.min.z,Ve=le.min.x,Ye=le.min.y,qe=le.min.z):(Re=At.width,Ie=At.height,He=At.depth,Ve=0,Ye=0,qe=0),ce!==null?(Ge=ce.x,ct=ce.y,vt=ce.z):(Ge=0,ct=0,vt=0);const Pn=fe.convert(Z.format),at=fe.convert(Z.type);let je;if(Z.isData3DTexture)D.setTexture3D(Z,0),je=N.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)D.setTexture2DArray(Z,0),je=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);const Yt=N.getParameter(N.UNPACK_ROW_LENGTH),lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ni=N.getParameter(N.UNPACK_SKIP_PIXELS),ps=N.getParameter(N.UNPACK_SKIP_ROWS),Ln=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qe),R.isDataTexture||R.isData3DTexture?N.texSubImage3D(je,Q,Ge,ct,vt,Re,Ie,He,Pn,at,At.data):Z.isCompressedArrayTexture?N.compressedTexSubImage3D(je,Q,Ge,ct,vt,Re,Ie,He,Pn,At.data):N.texSubImage3D(je,Q,Ge,ct,vt,Re,Ie,He,Pn,at,At),N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ni),N.pixelStorei(N.UNPACK_SKIP_ROWS,ps),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ln),Q===0&&Z.generateMipmaps&&N.generateMipmap(je),be.unbindTexture()},this.initRenderTarget=function(R){De.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,be.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===yp?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===$c?"display-p3":"srgb"}}class Ay extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class bp extends Ot{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Wt,u=Wt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jA extends Ot{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new _e:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new B,r=[],s=[],o=[],a=new B,l=new it;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cp extends Ri{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new _e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class XA extends Cp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const bl=new B,md=new Rp,gd=new Rp,vd=new Rp;class YA extends Ri{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(bl.subVectors(r[0],r[1]).add(r[0]),c=bl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),v<1e-4&&(v=S),g<1e-4&&(g=S),md.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,v,S,g),gd.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,v,S,g),vd.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,v,S,g)}else this.curveType==="catmullrom"&&(md.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),gd.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),vd.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(md.calc(l),gd.calc(l),vd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ig(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function qA(t,e){const n=1-t;return n*n*e}function KA(t,e){return 2*(1-t)*t*e}function ZA(t,e){return t*t*e}function oa(t,e,n,i){return qA(t,e)+KA(t,n)+ZA(t,i)}function JA(t,e){const n=1-t;return n*n*n*e}function QA(t,e){const n=1-t;return 3*n*n*t*e}function $A(t,e){return 3*(1-t)*t*t*e}function eb(t,e){return t*t*t*e}function aa(t,e,n,i,r){return JA(t,e)+QA(t,n)+$A(t,i)+eb(t,r)}class by extends Ri{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tb extends Ri{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y),aa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cy extends Ri{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nb extends Ri{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ry extends Ri{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ib extends Ri{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y),oa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Py extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(ig(a,l.x,c.x,u.x,d.x),ig(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var cf=Object.freeze({__proto__:null,ArcCurve:XA,CatmullRomCurve3:YA,CubicBezierCurve:by,CubicBezierCurve3:tb,EllipseCurve:Cp,LineCurve:Cy,LineCurve3:nb,QuadraticBezierCurve:Ry,QuadraticBezierCurve3:ib,SplineCurve:Py});class rb extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new cf[r.type]().fromJSON(r))}return this}}class uf extends rb{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Cy(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Ry(this.currentPoint.clone(),new _e(e,n),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new by(this.currentPoint.clone(),new _e(e,n),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Py(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Cp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class tu extends Rn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let v=0;const S=[],g=i/2;let f=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(p,2));function m(){const M=new B,A=new B;let T=0;const w=(n-e)/i;for(let b=0;b<=s;b++){const I=[],_=b/s,E=_*(n-e)+e;for(let z=0;z<=r;z++){const O=z/r,H=O*l+a,$=Math.sin(H),j=Math.cos(H);A.x=E*$,A.y=-_*i+g,A.z=E*j,d.push(A.x,A.y,A.z),M.set($,w,j).normalize(),h.push(M.x,M.y,M.z),p.push(O,1-_),I.push(v++)}S.push(I)}for(let b=0;b<r;b++)for(let I=0;I<s;I++){const _=S[I][b],E=S[I+1][b],z=S[I+1][b+1],O=S[I][b+1];e>0&&(u.push(_,E,O),T+=3),n>0&&(u.push(E,z,O),T+=3)}c.addGroup(f,T,0),f+=T}function x(M){const A=v,T=new _e,w=new B;let b=0;const I=M===!0?e:n,_=M===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,g*_,0),h.push(0,_,0),p.push(.5,.5),v++;const E=v;for(let z=0;z<=r;z++){const H=z/r*l+a,$=Math.cos(H),j=Math.sin(H);w.x=I*j,w.y=g*_,w.z=I*$,d.push(w.x,w.y,w.z),h.push(0,_,0),T.x=$*.5+.5,T.y=j*.5*_+.5,p.push(T.x,T.y),v++}for(let z=0;z<r;z++){const O=A+z,H=E+z;M===!0?u.push(H,H+1,O):u.push(H+1,H,O),b+=3}c.addGroup(f,b,M===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pp extends tu{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lp extends Rn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new B,M=new B,A=new B;for(let T=0;T<n.length;T+=3)p(n[T+0],x),p(n[T+1],M),p(n[T+2],A),l(x,M,A,m)}function l(m,x,M,A){const T=A+1,w=[];for(let b=0;b<=T;b++){w[b]=[];const I=m.clone().lerp(M,b/T),_=x.clone().lerp(M,b/T),E=T-b;for(let z=0;z<=E;z++)z===0&&b===T?w[b][z]=I:w[b][z]=I.clone().lerp(_,z/E)}for(let b=0;b<T;b++)for(let I=0;I<2*(T-b)-1;I++){const _=Math.floor(I/2);I%2===0?(h(w[b][_+1]),h(w[b+1][_]),h(w[b][_])):(h(w[b][_+1]),h(w[b+1][_+1]),h(w[b+1][_]))}}function c(m){const x=new B;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(m),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const m=new B;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const M=g(m)/2/Math.PI+.5,A=f(m)/Math.PI+.5;o.push(M,1-A)}v(),d()}function d(){for(let m=0;m<o.length;m+=6){const x=o[m+0],M=o[m+2],A=o[m+4],T=Math.max(x,M,A),w=Math.min(x,M,A);T>.9&&w<.1&&(x<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),A<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){const M=m*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function v(){const m=new B,x=new B,M=new B,A=new B,T=new _e,w=new _e,b=new _e;for(let I=0,_=0;I<s.length;I+=9,_+=6){m.set(s[I+0],s[I+1],s[I+2]),x.set(s[I+3],s[I+4],s[I+5]),M.set(s[I+6],s[I+7],s[I+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),b.set(o[_+4],o[_+5]),A.copy(m).add(x).add(M).divideScalar(3);const E=g(A);S(T,_+0,m,E),S(w,_+2,x,E),S(b,_+4,M,E)}}function S(m,x,M,A){A<0&&m.x===1&&(o[x]=m.x-1),M.x===0&&M.z===0&&(o[x]=A/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.vertices,e.indices,e.radius,e.details)}}class Ly extends uf{constructor(e){super(e),this.uuid=Mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new uf().fromJSON(r))}return this}}const sb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Dy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,p;if(i&&(s=ub(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)d=t[v],h=t[v+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ra(s,o,n,a,l,p,0),o}};function Dy(t,e,n,i,r){let s,o;if(r===Sb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=rg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=rg(s,t[s],t[s+1],o);return o&&nu(o,o.next)&&(La(o),o=o.next),o}function ls(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(nu(n,n.next)||wt(n.prev,n,n.next)===0)){if(La(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ra(t,e,n,i,r,s,o){if(!t)return;!o&&s&&mb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?ab(t,i,r,s):ob(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),La(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=lb(ls(t),e,n),Ra(t,e,n,i,r,s,2)):o===2&&cb(t,e,n,i,r,s):Ra(ls(t),e,n,i,r,s,1);break}}}function ob(t){const e=t.prev,n=t,i=t.next;if(wt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=p&&qs(r,a,s,l,o,c,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ab(t,e,n,i){const r=t.prev,s=t,o=t.next;if(wt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<d?u<h?u:h:d<h?d:h,S=a>l?a>c?a:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,f=df(p,v,e,n,i),m=df(S,g,e,n,i);let x=t.prevZ,M=t.nextZ;for(;x&&x.z>=f&&M&&M.z<=m;){if(x.x>=p&&x.x<=S&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&qs(a,u,l,d,c,h,x.x,x.y)&&wt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=S&&M.y>=v&&M.y<=g&&M!==r&&M!==o&&qs(a,u,l,d,c,h,M.x,M.y)&&wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=S&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&qs(a,u,l,d,c,h,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=m;){if(M.x>=p&&M.x<=S&&M.y>=v&&M.y<=g&&M!==r&&M!==o&&qs(a,u,l,d,c,h,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function lb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!nu(r,s)&&Ny(r,i,i.next,s)&&Pa(r,s)&&Pa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),La(i),La(i.next),i=t=s),i=i.next}while(i!==t);return ls(i)}function cb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xb(o,a)){let l=Iy(o,a);o=ls(o,o.next),l=ls(l,l.next),Ra(o,e,n,i,r,s,0),Ra(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function ub(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Dy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(vb(c));for(r.sort(db),s=0;s<r.length;s++)n=hb(r[s],n);return n}function db(t,e){return t.x-e.x}function hb(t,e){const n=fb(t,e);if(!n)return e;const i=Iy(n,t);return ls(i,i.next),ls(n,n.next)}function fb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&qs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Pa(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&pb(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function pb(t,e){return wt(t.prev,t,e.prev)<0&&wt(e.next,t,t.next)<0}function mb(t,e,n,i){let r=t;do r.z===0&&(r.z=df(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,gb(r)}function gb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function df(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function vb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function qs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function xb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!yb(t,e)&&(Pa(t,e)&&Pa(e,t)&&_b(t,e)&&(wt(t.prev,t,e.prev)||wt(t,e.prev,e))||nu(t,e)&&wt(t.prev,t,t.next)>0&&wt(e.prev,e,e.next)>0)}function wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function nu(t,e){return t.x===e.x&&t.y===e.y}function Ny(t,e,n,i){const r=Rl(wt(t,e,n)),s=Rl(wt(t,e,i)),o=Rl(wt(n,i,t)),a=Rl(wt(n,i,e));return!!(r!==s&&o!==a||r===0&&Cl(t,n,e)||s===0&&Cl(t,i,e)||o===0&&Cl(n,t,i)||a===0&&Cl(n,e,i))}function Cl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Rl(t){return t>0?1:t<0?-1:0}function yb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Ny(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Pa(t,e){return wt(t.prev,t,t.next)<0?wt(t,e,t.next)>=0&&wt(t,t.prev,e)>=0:wt(t,e,t.prev)<0||wt(t,t.next,e)<0}function _b(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Iy(t,e){const n=new hf(t.i,t.x,t.y),i=new hf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function rg(t,e,n,i){const r=new hf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function La(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function hf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class la{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return la.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];sg(e),og(i,e);let o=e.length;n.forEach(sg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,og(i,n[l]);const a=sb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function sg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function og(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Dp extends Rn{constructor(e=new Ly([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gt(r,3)),this.setAttribute("uv",new gt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:Mb;let x,M=!1,A,T,w,b;f&&(x=f.getSpacedPoints(u),M=!0,h=!1,A=f.computeFrenetFrames(u,!1),T=new B,w=new B,b=new B),h||(g=0,p=0,v=0,S=0);const I=a.extractPoints(c);let _=I.shape;const E=I.holes;if(!la.isClockWise(_)){_=_.reverse();for(let he=0,N=E.length;he<N;he++){const Me=E[he];la.isClockWise(Me)&&(E[he]=Me.reverse())}}const O=la.triangulateShape(_,E),H=_;for(let he=0,N=E.length;he<N;he++){const Me=E[he];_=_.concat(Me)}function $(he,N,Me){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(N,Me)}const j=_.length,ae=O.length;function U(he,N,Me){let Te,xe,be;const ke=he.x-N.x,De=he.y-N.y,D=Me.x-he.x,C=Me.y-he.y,ie=ke*ke+De*De,Y=ke*C-De*D;if(Math.abs(Y)>Number.EPSILON){const K=Math.sqrt(ie),J=Math.sqrt(D*D+C*C),we=N.x-De/K,L=N.y+ke/K,V=Me.x-C/J,re=Me.y+D/J,P=((V-we)*C-(re-L)*D)/(ke*C-De*D);Te=we+ke*P-he.x,xe=L+De*P-he.y;const G=Te*Te+xe*xe;if(G<=2)return new _e(Te,xe);be=Math.sqrt(G/2)}else{let K=!1;ke>Number.EPSILON?D>Number.EPSILON&&(K=!0):ke<-Number.EPSILON?D<-Number.EPSILON&&(K=!0):Math.sign(De)===Math.sign(C)&&(K=!0),K?(Te=-De,xe=ke,be=Math.sqrt(ie)):(Te=ke,xe=De,be=Math.sqrt(ie/2))}return new _e(Te/be,xe/be)}const X=[];for(let he=0,N=H.length,Me=N-1,Te=he+1;he<N;he++,Me++,Te++)Me===N&&(Me=0),Te===N&&(Te=0),X[he]=U(H[he],H[Me],H[Te]);const ne=[];let oe,ge=X.concat();for(let he=0,N=E.length;he<N;he++){const Me=E[he];oe=[];for(let Te=0,xe=Me.length,be=xe-1,ke=Te+1;Te<xe;Te++,be++,ke++)be===xe&&(be=0),ke===xe&&(ke=0),oe[Te]=U(Me[Te],Me[be],Me[ke]);ne.push(oe),ge=ge.concat(oe)}for(let he=0;he<g;he++){const N=he/g,Me=p*Math.cos(N*Math.PI/2),Te=v*Math.sin(N*Math.PI/2)+S;for(let xe=0,be=H.length;xe<be;xe++){const ke=$(H[xe],X[xe],Te);pe(ke.x,ke.y,-Me)}for(let xe=0,be=E.length;xe<be;xe++){const ke=E[xe];oe=ne[xe];for(let De=0,D=ke.length;De<D;De++){const C=$(ke[De],oe[De],Te);pe(C.x,C.y,-Me)}}}const Le=v+S;for(let he=0;he<j;he++){const N=h?$(_[he],ge[he],Le):_[he];M?(w.copy(A.normals[0]).multiplyScalar(N.x),T.copy(A.binormals[0]).multiplyScalar(N.y),b.copy(x[0]).add(w).add(T),pe(b.x,b.y,b.z)):pe(N.x,N.y,0)}for(let he=1;he<=u;he++)for(let N=0;N<j;N++){const Me=h?$(_[N],ge[N],Le):_[N];M?(w.copy(A.normals[he]).multiplyScalar(Me.x),T.copy(A.binormals[he]).multiplyScalar(Me.y),b.copy(x[he]).add(w).add(T),pe(b.x,b.y,b.z)):pe(Me.x,Me.y,d/u*he)}for(let he=g-1;he>=0;he--){const N=he/g,Me=p*Math.cos(N*Math.PI/2),Te=v*Math.sin(N*Math.PI/2)+S;for(let xe=0,be=H.length;xe<be;xe++){const ke=$(H[xe],X[xe],Te);pe(ke.x,ke.y,d+Me)}for(let xe=0,be=E.length;xe<be;xe++){const ke=E[xe];oe=ne[xe];for(let De=0,D=ke.length;De<D;De++){const C=$(ke[De],oe[De],Te);M?pe(C.x,C.y+x[u-1].y,x[u-1].x+Me):pe(C.x,C.y,d+Me)}}}te(),ue();function te(){const he=r.length/3;if(h){let N=0,Me=j*N;for(let Te=0;Te<ae;Te++){const xe=O[Te];Oe(xe[2]+Me,xe[1]+Me,xe[0]+Me)}N=u+g*2,Me=j*N;for(let Te=0;Te<ae;Te++){const xe=O[Te];Oe(xe[0]+Me,xe[1]+Me,xe[2]+Me)}}else{for(let N=0;N<ae;N++){const Me=O[N];Oe(Me[2],Me[1],Me[0])}for(let N=0;N<ae;N++){const Me=O[N];Oe(Me[0]+j*u,Me[1]+j*u,Me[2]+j*u)}}i.addGroup(he,r.length/3-he,0)}function ue(){const he=r.length/3;let N=0;ve(H,N),N+=H.length;for(let Me=0,Te=E.length;Me<Te;Me++){const xe=E[Me];ve(xe,N),N+=xe.length}i.addGroup(he,r.length/3-he,1)}function ve(he,N){let Me=he.length;for(;--Me>=0;){const Te=Me;let xe=Me-1;xe<0&&(xe=he.length-1);for(let be=0,ke=u+g*2;be<ke;be++){const De=j*be,D=j*(be+1),C=N+Te+De,ie=N+xe+De,Y=N+xe+D,K=N+Te+D;Ce(C,ie,Y,K)}}}function pe(he,N,Me){l.push(he),l.push(N),l.push(Me)}function Oe(he,N,Me){Fe(he),Fe(N),Fe(Me);const Te=r.length/3,xe=m.generateTopUV(i,r,Te-3,Te-2,Te-1);Xe(xe[0]),Xe(xe[1]),Xe(xe[2])}function Ce(he,N,Me,Te){Fe(he),Fe(N),Fe(Te),Fe(N),Fe(Me),Fe(Te);const xe=r.length/3,be=m.generateSideWallUV(i,r,xe-6,xe-3,xe-2,xe-1);Xe(be[0]),Xe(be[1]),Xe(be[3]),Xe(be[1]),Xe(be[2]),Xe(be[3])}function Fe(he){r.push(l[he*3+0]),r.push(l[he*3+1]),r.push(l[he*3+2])}function Xe(he){s.push(he.x),s.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return wb(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new cf[r.type]().fromJSON(r)),new Dp(i,e.options)}}const Mb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new _e(s,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],S=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-d),new _e(h,1-v),new _e(S,1-f)]:[new _e(a,1-l),new _e(u,1-d),new _e(p,1-v),new _e(g,1-f)]}};function wb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Np extends Lp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Np(e.radius,e.detail)}}class Ip extends Rn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const h=(n-e)/r,p=new B,v=new _e;for(let S=0;S<=r;S++){for(let g=0;g<=i;g++){const f=s+g/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,u.push(v.x,v.y)}d+=h}for(let S=0;S<r;S++){const g=S*(i+1);for(let f=0;f<i;f++){const m=f+g,x=m,M=m+i+1,A=m+i+2,T=m+1;a.push(x,M,T),a.push(M,A,T)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Up extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new B,h=new B,p=[],v=[],S=[],g=[];for(let f=0;f<=i;f++){const m=[],x=f/i;let M=0;f===0&&o===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let A=0;A<=n;A++){const T=A/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),g.push(T+M,1-x),m.push(c++)}u.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const x=u[f][m+1],M=u[f][m],A=u[f+1][m],T=u[f+1][m+1];(f!==0||o>0)&&p.push(x,M,T),(f!==i-1||l<Math.PI)&&p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(S,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Op extends Rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new B,d=new B,h=new B;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const S=v/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(S),d.y=(e+n*Math.cos(g))*Math.sin(S),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const S=(r+1)*p+v-1,g=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,m=(r+1)*p+v;o.push(S,g,m),o.push(g,f,m)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Op(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Eb extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ht extends wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tb extends wo{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Ic={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Ab{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const bb=new Ab;class Fa{constructor(e){this.manager=e!==void 0?e:bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class Cb extends Error{constructor(e,n){super(e),this.response=n}}class Rb extends Fa{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ic.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Oi[e]!==void 0){Oi[e].push({onLoad:n,onProgress:i,onError:r});return}Oi[e]=[],Oi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Oi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,v=p!==0;let S=0;const g=new ReadableStream({start(f){m();function m(){d.read().then(({done:x,value:M})=>{if(x)f.close();else{S+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:p});for(let T=0,w=u.length;T<w;T++){const b=u[T];b.onProgress&&b.onProgress(A)}f.enqueue(M),m()}},x=>{f.error(x)})}}});return new Response(g)}else throw new Cb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Ic.add(e,c);const u=Oi[e];delete Oi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Pb extends Fa{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ic.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ba("img");function l(){u(),Ic.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Lb extends Fa{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new bp,a=new Rb(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Wi,o.wrapT=c.wrapT!==void 0?c.wrapT:Wi,o.magFilter=c.magFilter!==void 0?c.magFilter:Zt,o.minFilter=c.minFilter!==void 0?c.minFilter:Zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=xr),c.mipmapCount===1&&(o.minFilter=Zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class Pl extends Fa{constructor(e){super(e)}load(e,n,i,r){const s=new Ot,o=new Pb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class iu extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Db extends iu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const xd=new it,ag=new B,lg=new B;class Uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ag.setFromMatrixPosition(e.matrixWorld),n.position.copy(ag),lg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lg),n.updateMatrixWorld(),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cg=new it,ko=new B,yd=new B;class Nb extends Uy{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),i.position.copy(ko),yd.copy(i.position),yd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(yd),i.updateMatrixWorld(),r.makeTranslation(-ko.x,-ko.y,-ko.z),cg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cg)}}class Oy extends iu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ib extends Uy{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends iu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Ib}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ub extends iu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ob{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=dg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function dg(){return performance.now()}const hg=new it;class zb{constructor(e,n,i=0,r=1/0){this.ray=new Sp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return hg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hg),this}intersectObject(e,n=!0,i=[]){return ff(e,this,i,n),i.sort(fg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ff(e[r],this,i,n);return i.sort(fg),i}}function fg(t,e){return t.distance-e.distance}function ff(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ff(s[o],e,n,!0)}}class pg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fb extends hs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);const mg={type:"change"},zp={type:"start"},zy={type:"end"},Ll=new Sp,gg=new yi,kb=Math.cos(70*CM.DEG2RAD),Dt=new B,Sn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_d=1e-6;class Bb extends Fb{constructor(e,n=null){super(e,n),this.state=dt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:no.ROTATE,MIDDLE:no.DOLLY,RIGHT:no.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new as,this._lastTargetPosition=new B,this._quat=new as().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pg,this._sphericalDelta=new pg,this._scale=1,this._panOffset=new B,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new B,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vb.bind(this),this._onPointerDown=Hb.bind(this),this._onPointerUp=Gb.bind(this),this._onContextMenu=Zb.bind(this),this._onMouseWheel=Xb.bind(this),this._onKeyDown=Yb.bind(this),this._onTouchStart=qb.bind(this),this._onTouchMove=Kb.bind(this),this._onMouseDown=Wb.bind(this),this._onMouseMove=jb.bind(this),this._interceptControlDown=Jb.bind(this),this._interceptControlUp=Qb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mg),this.update(),this.state=dt.NONE}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),r<-Math.PI?r+=Sn:r>Math.PI&&(r-=Sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<kb?this.object.lookAt(this.target):(gg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(gg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_d||this._lastTargetPosition.distanceToSquared(this.target)>_d?(this.dispatchEvent(mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new _e,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hb(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function Vb(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Gb(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zy),this.state=dt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Wb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case no.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=dt.DOLLY;break;case no.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}break;case no.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(zp)}function jb(t){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Xb(t){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(t.preventDefault(),this.dispatchEvent(zp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(zy))}function Yb(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function qb(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=dt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=dt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(zp)}function Kb(t){switch(this._trackPointer(t),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=dt.NONE}}function Zb(t){this.enabled!==!1&&t.preventDefault()}function Jb(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qb(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class $b extends Ay{constructor(){super();const e=new Qn;e.deleteAttribute("uv");const n=new Ht({side:mn}),i=new Ht,r=new Oy(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Je(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Je(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Je(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Je(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Je(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Je(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new Je(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new Je(e,Ps(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new Je(e,Ps(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const v=new Je(e,Ps(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const S=new Je(e,Ps(43));S.position.set(-.462,8.89,14.52),S.scale.set(4.38,5.441,.088),this.add(S);const g=new Je(e,Ps(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const f=new Je(e,Ps(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ps(t){const e=new Ca;return e.color.setScalar(t),e}class eC extends Lb{constructor(e){super(e),this.type=Tn}parse(e){const o=function(b,I){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(I||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(I||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(I||""))}},u=`
`,d=function(b,I,_){I=I||1024;let z=b.pos,O=-1,H=0,$="",j=String.fromCharCode.apply(null,new Uint16Array(b.subarray(z,z+128)));for(;0>(O=j.indexOf(u))&&H<I&&z<b.byteLength;)$+=j,H+=j.length,z+=128,j+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(z,z+128)));return-1<O?(b.pos+=H+O+1,$+j.slice(0,O)):!1},h=function(b){const I=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,j;for((b.pos>=b.byteLength||!($=d(b)))&&o(1,"no header found"),(j=$.match(I))||o(3,"bad initial token"),H.valid|=1,H.programtype=j[1],H.string+=$+`
`;$=d(b),$!==!1;){if(H.string+=$+`
`,$.charAt(0)==="#"){H.comments+=$+`
`;continue}if((j=$.match(_))&&(H.gamma=parseFloat(j[1])),(j=$.match(E))&&(H.exposure=parseFloat(j[1])),(j=$.match(z))&&(H.valid|=2,H.format=j[1]),(j=$.match(O))&&(H.valid|=4,H.height=parseInt(j[1],10),H.width=parseInt(j[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},p=function(b,I,_){const E=I;if(E<8||E>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);E!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const z=new Uint8Array(4*I*_);z.length||o(4,"unable to allocate buffer space");let O=0,H=0;const $=4*E,j=new Uint8Array(4),ae=new Uint8Array($);let U=_;for(;U>0&&H<b.byteLength;){H+4>b.byteLength&&o(1),j[0]=b[H++],j[1]=b[H++],j[2]=b[H++],j[3]=b[H++],(j[0]!=2||j[1]!=2||(j[2]<<8|j[3])!=E)&&o(3,"bad rgbe scanline format");let X=0,ne;for(;X<$&&H<b.byteLength;){ne=b[H++];const ge=ne>128;if(ge&&(ne-=128),(ne===0||X+ne>$)&&o(3,"bad scanline data"),ge){const Le=b[H++];for(let te=0;te<ne;te++)ae[X++]=Le}else ae.set(b.subarray(H,H+ne),X),X+=ne,H+=ne}const oe=E;for(let ge=0;ge<oe;ge++){let Le=0;z[O]=ae[ge+Le],Le+=E,z[O+1]=ae[ge+Le],Le+=E,z[O+2]=ae[ge+Le],Le+=E,z[O+3]=ae[ge+Le],O+=4}U--}return z},v=function(b,I,_,E){const z=b[I+3],O=Math.pow(2,z-128)/255;_[E+0]=b[I+0]*O,_[E+1]=b[I+1]*O,_[E+2]=b[I+2]*O,_[E+3]=1},S=function(b,I,_,E){const z=b[I+3],O=Math.pow(2,z-128)/255;_[E+0]=pl.toHalfFloat(Math.min(b[I+0]*O,65504)),_[E+1]=pl.toHalfFloat(Math.min(b[I+1]*O,65504)),_[E+2]=pl.toHalfFloat(Math.min(b[I+2]*O,65504)),_[E+3]=pl.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const f=h(g),m=f.width,x=f.height,M=p(g.subarray(g.pos),m,x);let A,T,w;switch(this.type){case Kn:w=M.length/4;const b=new Float32Array(w*4);for(let _=0;_<w;_++)v(M,_*4,b,_*4);A=b,T=Kn;break;case Tn:w=M.length/4;const I=new Uint16Array(w*4);for(let _=0;_<w;_++)S(M,_*4,I,_*4);A=I,T=Tn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:m,height:x,data:A,header:f.string,gamma:f.gamma,exposure:f.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){switch(o.type){case Kn:case Tn:o.colorSpace=Qi,o.minFilter=Zt,o.magFilter=Zt,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,i,r)}}const rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tC=new Ep(-1,1,1,-1,0,1);class nC extends Rn{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const iC=new nC;class ru{constructor(e){this._mesh=new Je(iC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rC extends fs{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fi.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ru(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vg extends fs{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class sC extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new _e);this._width=i.width,this._height=i.height,n=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rC(rc),this.copyPass.material.blending=Kt,this.clock=new Ob}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vg!==void 0&&(o instanceof vg?i=!0:o instanceof sC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aC extends fs{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const lC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class cC extends fs{constructor(){super();const e=lC;this.uniforms=fi.clone(e.uniforms),this.material=new Eb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ru(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$x&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Dl={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`},Nl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Sd={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function uC(t=5){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=dC(e),i=n.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=n[o],l=2*Math.PI*a/i,c=new B(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new bp(r,e,e);return s.wrapS=wn,s.wrapT=wn,s.needsUpdate=!0,s}function dC(t){const e=Math.floor(t)%2===0?Math.floor(t)+1:Math.floor(t),n=e*e,i=Array(n).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=n;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const Il={defines:{SAMPLES:16,SAMPLE_VECTORS:Fy(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Fy(t,e,n){const i=hC(t,e,n);let r="vec3[SAMPLES](";for(let s=0;s<t;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<t-1?",":")"}`}return r}function hC(t,e,n){const i=[];for(let r=0;r<t;r++){const s=2*Math.PI*e*r/t,o=Math.pow(r/(t-1),n);i.push(new B(Math.cos(s),Math.sin(s),o))}return i}class fC{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,n,i){return e[0]*n+e[1]*i}dot3(e,n,i,r){return e[0]*n+e[1]*i+e[2]*r}dot4(e,n,i,r,s){return e[0]*n+e[1]*i+e[2]*r+e[3]*s}noise(e,n){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+n)*o,l=Math.floor(e+a),c=Math.floor(n+a),u=(3-Math.sqrt(3))/6,d=(l+c)*u,h=l-d,p=c-d,v=e-h,S=n-p;let g,f;v>S?(g=1,f=0):(g=0,f=1);const m=v-g+u,x=S-f+u,M=v-1+2*u,A=S-1+2*u,T=l&255,w=c&255,b=this.perm[T+this.perm[w]]%12,I=this.perm[T+g+this.perm[w+f]]%12,_=this.perm[T+1+this.perm[w+1]]%12;let E=.5-v*v-S*S;E<0?i=0:(E*=E,i=E*E*this.dot(this.grad3[b],v,S));let z=.5-m*m-x*x;z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[I],m,x));let O=.5-M*M-A*A;return O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[_],M,A)),70*(i+r+s)}noise3d(e,n,i){let r,s,o,a;const c=(e+n+i)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(n+c),h=Math.floor(i+c),p=1/6,v=(u+d+h)*p,S=u-v,g=d-v,f=h-v,m=e-S,x=n-g,M=i-f;let A,T,w,b,I,_;m>=x?x>=M?(A=1,T=0,w=0,b=1,I=1,_=0):m>=M?(A=1,T=0,w=0,b=1,I=0,_=1):(A=0,T=0,w=1,b=1,I=0,_=1):x<M?(A=0,T=0,w=1,b=0,I=1,_=1):m<M?(A=0,T=1,w=0,b=0,I=1,_=1):(A=0,T=1,w=0,b=1,I=1,_=0);const E=m-A+p,z=x-T+p,O=M-w+p,H=m-b+2*p,$=x-I+2*p,j=M-_+2*p,ae=m-1+3*p,U=x-1+3*p,X=M-1+3*p,ne=u&255,oe=d&255,ge=h&255,Le=this.perm[ne+this.perm[oe+this.perm[ge]]]%12,te=this.perm[ne+A+this.perm[oe+T+this.perm[ge+w]]]%12,ue=this.perm[ne+b+this.perm[oe+I+this.perm[ge+_]]]%12,ve=this.perm[ne+1+this.perm[oe+1+this.perm[ge+1]]]%12;let pe=.6-m*m-x*x-M*M;pe<0?r=0:(pe*=pe,r=pe*pe*this.dot3(this.grad3[Le],m,x,M));let Oe=.6-E*E-z*z-O*O;Oe<0?s=0:(Oe*=Oe,s=Oe*Oe*this.dot3(this.grad3[te],E,z,O));let Ce=.6-H*H-$*$-j*j;Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this.dot3(this.grad3[ue],H,$,j));let Fe=.6-ae*ae-U*U-X*X;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this.dot3(this.grad3[ve],ae,U,X)),32*(r+s+o+a)}noise4d(e,n,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,d,h,p,v;const S=(e+n+i+r)*l,g=Math.floor(e+S),f=Math.floor(n+S),m=Math.floor(i+S),x=Math.floor(r+S),M=(g+f+m+x)*c,A=g-M,T=f-M,w=m-M,b=x-M,I=e-A,_=n-T,E=i-w,z=r-b,O=I>_?32:0,H=I>E?16:0,$=_>E?8:0,j=I>z?4:0,ae=_>z?2:0,U=E>z?1:0,X=O+H+$+j+ae+U,ne=o[X][0]>=3?1:0,oe=o[X][1]>=3?1:0,ge=o[X][2]>=3?1:0,Le=o[X][3]>=3?1:0,te=o[X][0]>=2?1:0,ue=o[X][1]>=2?1:0,ve=o[X][2]>=2?1:0,pe=o[X][3]>=2?1:0,Oe=o[X][0]>=1?1:0,Ce=o[X][1]>=1?1:0,Fe=o[X][2]>=1?1:0,Xe=o[X][3]>=1?1:0,he=I-ne+c,N=_-oe+c,Me=E-ge+c,Te=z-Le+c,xe=I-te+2*c,be=_-ue+2*c,ke=E-ve+2*c,De=z-pe+2*c,D=I-Oe+3*c,C=_-Ce+3*c,ie=E-Fe+3*c,Y=z-Xe+3*c,K=I-1+4*c,J=_-1+4*c,we=E-1+4*c,L=z-1+4*c,V=g&255,re=f&255,P=m&255,G=x&255,W=a[V+a[re+a[P+a[G]]]]%32,k=a[V+ne+a[re+oe+a[P+ge+a[G+Le]]]]%32,q=a[V+te+a[re+ue+a[P+ve+a[G+pe]]]]%32,de=a[V+Oe+a[re+Ce+a[P+Fe+a[G+Xe]]]]%32,fe=a[V+1+a[re+1+a[P+1+a[G+1]]]]%32;let Ae=.6-I*I-_*_-E*E-z*z;Ae<0?u=0:(Ae*=Ae,u=Ae*Ae*this.dot4(s[W],I,_,E,z));let F=.6-he*he-N*N-Me*Me-Te*Te;F<0?d=0:(F*=F,d=F*F*this.dot4(s[k],he,N,Me,Te));let me=.6-xe*xe-be*be-ke*ke-De*De;me<0?h=0:(me*=me,h=me*me*this.dot4(s[q],xe,be,ke,De));let se=.6-D*D-C*C-ie*ie-Y*Y;se<0?p=0:(se*=se,p=se*se*this.dot4(s[de],D,C,ie,Y));let ee=.6-K*K-J*J-we*we-L*L;return ee<0?v=0:(ee*=ee,v=ee*ee*this.dot4(s[fe],K,J,we,L)),27*(u+d+h+p+v)}}class ci extends fs{constructor(e,n,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=n,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=uC(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ti(this.width,this.height,{type:Tn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},Dl.defines),uniforms:fi.clone(Dl.uniforms),vertexShader:Dl.vertexShader,fragmentShader:Dl.fragmentShader,blending:Kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Tb,this.normalMaterial.blending=Kt,this.pdMaterial=new It({defines:Object.assign({},Il.defines),uniforms:fi.clone(Il.uniforms),vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Nl.defines),uniforms:fi.clone(Nl.uniforms),vertexShader:Nl.vertexShader,fragmentShader:Nl.fragmentShader,blending:Kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:fi.clone(rc.uniforms),vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wh,blendDst:Yo,blendEquation:di,blendSrcAlpha:Mh,blendDstAlpha:Yo,blendEquationAlpha:di}),this.blendMaterial=new It({uniforms:fi.clone(Sd.uniforms),vertexShader:Sd.vertexShader,fragmentShader:Sd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yx,blendSrc:wh,blendDst:Yo,blendEquation:di,blendSrcAlpha:Mh,blendDstAlpha:Yo,blendEquationAlpha:di}),this.fsQuad=new ru(null),this.originalClearColor=new Ke,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e!==void 0?(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1):(this.depthTexture=new Ap,this.depthTexture.format=os,this.depthTexture.type=ss,this.normalRenderTarget=new ti(this.width,this.height,{minFilter:Wt,magFilter:Wt,type:Tn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let n=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,n=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,n=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,n=!0),n&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Fy(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ci.OUTPUT.Off:break;case ci.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.gtaoRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.pdRenderTarget.setSize(e,n),this.gtaoMaterial.uniforms.resolution.value.set(e,n),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,n),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,n=this._visibilityCache;e.traverse(function(i){const r=n.get(i);i.visible=r}),n.clear()}generateNoise(e=64){const n=new fC,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(n.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(n.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(n.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(n.noise(l+e,c+e)*.5+.5)*255}const s=new bp(r,e,e,Zn,bi);return s.wrapS=wn,s.wrapT=wn,s.needsUpdate=!0,s}}ci.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Ul={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

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

		}`},Ol={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

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

		}`},Md={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

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

		}`};class pC extends fs{constructor(e,n){super(),this.edgesRT=new ti(e,n,{depthBuffer:!1,type:Tn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ti(e,n,{depthBuffer:!1,type:Tn}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Ot,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=Zt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Ot,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Wt,this.searchTexture.minFilter=Wt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=fi.clone(Ul.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/n),this.materialEdges=new It({defines:Object.assign({},Ul.defines),uniforms:this.uniformsEdges,vertexShader:Ul.vertexShader,fragmentShader:Ul.fragmentShader}),this.uniformsWeights=fi.clone(Ol.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/n),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new It({defines:Object.assign({},Ol.defines),uniforms:this.uniformsWeights,vertexShader:Ol.vertexShader,fragmentShader:Ol.fragmentShader}),this.uniformsBlend=fi.clone(Md.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/n),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new It({uniforms:this.uniformsBlend,vertexShader:Md.vertexShader,fragmentShader:Md.fragmentShader}),this.fsQuad=new ru(null)}render(e,n,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.edgesRT.setSize(e,n),this.weightsRT.setSize(e,n),this.materialEdges.uniforms.resolution.value.set(1/e,1/n),this.materialWeights.uniforms.resolution.value.set(1/e,1/n),this.materialBlend.uniforms.resolution.value.set(1/e,1/n)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const mC="honeycutt-assets",cs="img";function Fp(){return new Promise((t,e)=>{const n=indexedDB.open(mC,1);n.onupgradeneeded=()=>n.result.createObjectStore(cs,{keyPath:"id"}),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function gC(){try{const t=await Fp();return await new Promise(e=>{const n=t.transaction(cs).objectStore(cs).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>e([])})}catch{return[]}}async function vC(t){const e=await Fp();return new Promise(n=>{const i=e.transaction(cs,"readwrite");i.objectStore(cs).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function xC(t){const e=await Fp();return new Promise(n=>{const i=e.transaction(cs,"readwrite");i.objectStore(cs).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function yC(t,e=1024){return new Promise(n=>{const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*r)),o=Math.max(1,Math.round(i.height*r)),a=document.createElement("canvas");a.width=s,a.height=o,a.getContext("2d").drawImage(i,0,0,s,o),n(a.toDataURL("image/jpeg",.85))},i.onerror=()=>n(t),i.src=t})}const ky=We.createContext(null);let _C=1;function SC({children:t}){const[e,n]=We.useState([]);We.useEffect(()=>{gC().then(o=>n(o.sort((a,l)=>l.created-a.created)))},[]);const i=We.useCallback(o=>new Promise(a=>{const l=new FileReader;l.onload=async()=>{const c=await yC(l.result),u={id:`a${Date.now().toString(36)}${_C++}`,name:o.name||"image",dataUrl:c,created:Date.now()};await vC(u),n(d=>[u,...d]),a(u)},l.readAsDataURL(o)}),[]),r=We.useCallback(async o=>{await xC(o),n(a=>a.filter(l=>l.id!==o))},[]),s=We.useMemo(()=>Object.fromEntries(e.map(o=>[o.id,o.dataUrl])),[e]);return y.jsx(ky.Provider,{value:{assets:e,map:s,addAsset:i,removeAsset:r},children:t})}function kp(){return We.useContext(ky)||{assets:[],map:{},addAsset:async()=>{},removeAsset:async()=>{}}}function an(t,e){const n=new Ke(t);return e>=0?n.lerp(new Ke("#ffffff"),e):n.lerp(new Ke("#000000"),-e),n}function Ue(t,e=.75,n=.04,i={}){return new Ht({color:new Ke(t),roughness:e,metalness:n,...i})}function Be(t,e,n,i){const r=new Je(new Qn(t,e,n),i);return r.castShadow=!0,r.receiveShadow=!0,r}function st(t,e,n,i,r=28){const s=new Je(new tu(t,e,n,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}function Ee(t,e,n,i){return t.position.set(e,n,i),t}function Bo(t,e,n,i,r,s,o){const a=[[e/2-r,n/2-r],[-e/2+r,n/2-r],[e/2-r,-n/2+r],[-e/2+r,-n/2+r]];for(const[l,c]of a)t.add(Ee(Be(s,i,s,o),l,i/2,c))}const xg={seat(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.85),a=Ue(an(s,.08),.9),l=Ue("#2b2b2e",.5,.3),c=r*.42,u=Math.min(.16,n*.12),d=r;t.add(Ee(Be(n,c,i,o),0,c/2+.08,0)),t.add(Ee(Be(n,d-.1,.16,o),0,(d-.1)/2+.08,-i/2+.08)),t.add(Ee(Be(u,c+.16,i,o),n/2-u/2,(c+.16)/2+.08,0)),t.add(Ee(Be(u,c+.16,i,o),-n/2+u/2,(c+.16)/2+.08,0));const h=n-u*2-.04,p=n>1.3?Math.round(n/.9):1,v=h/p;for(let S=0;S<p;S++){const g=-h/2+v/2+S*v;t.add(Ee(Be(v-.04,.16,i-.28,a),g,c+.16,.04)),t.add(Ee(Be(v-.06,.2,.16,a),g,c+.24,-i/2+.24))}Bo(t,n-.1,i-.1,.08,.06,.05,l)},chair(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.7,.05),a=r*.5;t.add(Ee(Be(n,.06,i,o),0,a,0)),t.add(Ee(Be(n,r-a,.06,o),0,a+(r-a)/2,-i/2+.04)),Bo(t,n-.08,i-.08,a,.05,.045,o)},bench(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.7);t.add(Ee(Be(n,.1,i,o),0,r-.05,0)),Bo(t,n-.12,i-.08,r-.1,.07,.06,o)},round(t,e){const{w:n,h:i,color:r}=e,s=Ue(r,.6,.1);t.add(Ee(st(n/2,n/2,.08,s),0,i-.04,0)),t.add(Ee(st(.03,.04,i-.08,Ue("#2b2b2e",.5,.3)),0,(i-.08)/2,0)),t.add(Ee(st(n*.34,n*.34,.02,Ue("#2b2b2e",.5,.3)),0,.01,0))},table(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.45,.05);t.add(Ee(Be(n,.06,i,o),0,r-.03,0)),Bo(t,n-.12,i-.12,r-.06,.08,.06,o)},"round-table"(t,e){const{w:n,h:i,color:r}=e,s=Ue(r,.45,.05);t.add(Ee(st(n/2,n/2,.06,s),0,i-.03,0)),t.add(Ee(st(.05,.07,i-.06,s),0,(i-.06)/2,0)),t.add(Ee(st(n*.28,n*.28,.03,s),0,.015,0))},desk(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.5,.06);t.add(Ee(Be(n,.05,i,o),0,r-.025,0)),t.add(Ee(Be(.05,r-.1,i-.06,o),-n/2+.06,(r-.1)/2,0)),t.add(Ee(Be(.05,r-.1,i-.06,o),n/2-.06,(r-.1)/2,0)),t.add(Ee(Be(n*.4,r-.2,.04,o),n*.22,(r-.2)/2,-i/2+.06))},bed(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue("#5b4a3a",.6),a=Ue(s,.9),l=Ue(an(s,.12),.95),c=r*.5;t.add(Ee(Be(n,c,i,o),0,c/2,0)),t.add(Ee(Be(n,r*.85,.1,o),0,r*.85/2,-i/2+.05)),t.add(Ee(Be(n-.1,.22,i-.12,a),0,c+.11,.02)),t.add(Ee(Be(n-.12,.1,i*.62,Ue(an(s,-.05),.9)),0,c+.2,i*.12));const u=(n-.2)/2;t.add(Ee(Be(u-.04,.12,.34,l),-u/2,c+.24,-i/2+.32)),t.add(Ee(Be(u-.04,.12,.34,l),u/2,c+.24,-i/2+.32))},cabinet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.55),a=Ue("#caa86a",.3,.7);t.add(Ee(Be(n,r-.06,i,o),0,(r-.06)/2+.06,0)),t.add(Ee(st(.012,.012,.08,a),-.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),t.add(Ee(st(.012,.012,.08,a),.04,r*.5,i/2+.005).rotateZ(Math.PI/2)),Bo(t,n-.08,i-.08,.06,.05,.04,Ue("#2b2b2e",.5,.3))},wardrobe(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.55),a=Ue("#caa86a",.3,.7);t.add(Ee(Be(n,r,i,o),0,r/2,0)),t.add(Ee(Be(.012,r-.1,.01,Ue(an(s,-.3),.6)),0,r/2,i/2+.002)),t.add(Ee(st(.014,.014,.16,a),-.06,r*.5,i/2+.006)),t.add(Ee(st(.014,.014,.16,a),.06,r*.5,i/2+.006))},drawers(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.55),a=Ue(an(s,.06),.6),l=Ue("#caa86a",.3,.7);t.add(Ee(Be(n,r,i,o),0,r/2,0));const c=r>.6?3:1,u=(r-.08)/c;for(let d=0;d<c;d++){const h=.04+u/2+d*u;t.add(Ee(Be(n-.06,u-.03,.02,a),0,h,i/2+.005)),t.add(Ee(st(.01,.01,.12,l),0,h,i/2+.018).rotateZ(Math.PI/2))}},shelf(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.6),a=.04;t.add(Ee(Be(a,r,i,o),-n/2+a/2,r/2,0)),t.add(Ee(Be(a,r,i,o),n/2-a/2,r/2,0)),t.add(Ee(Be(n,a,i,o),0,a/2,0)),t.add(Ee(Be(n,a,i,o),0,r-a/2,0)),t.add(Ee(Be(n-a,a,i-.02,o),0,r*.04+.02,-.01));const l=3;for(let c=1;c<=l;c++){const u=r/(l+1)*c;t.add(Ee(Be(n-a*2,a*.7,i-.04,o),0,u,0));const d=["#8a5a4a","#4a6a7a","#7a7048","#5a5a6a"];let h=-n/2+a+.04;for(;h<n/2-a-.06;){const p=.03+Math.random()*.03,v=.12+Math.random()*.08;t.add(Ee(Be(p,v,i*.6,Ue(d[Math.floor(Math.random()*d.length)],.8)),h+p/2,u+a*.35+v/2,0)),h+=p+.006}}},tv(t,e){const{w:n,h:i,color:r}=e,s=Ue("#2b2b2e",.4,.4),o=Ue(r,.4,.3),a=new Ht({color:"#10141c",roughness:.2,metalness:.1,emissive:new Ke("#1b2a3a"),emissiveIntensity:.4}),l=.5;t.add(Ee(Be(n,i,.05,o),0,l+i/2,0));const c=new Je(new Ai(n-.06,i-.06),a);c.position.set(0,l+i/2,.028),t.add(c),t.add(Ee(st(.03,.04,l,s),0,l/2,0)),t.add(Ee(Be(n*.35,.03,.18,s),0,.015,0))},rug(t,e){const{w:n,d:i,color:r}=e,s=Ue(r,1,0),o=Be(n,.02,i,s);o.position.y=.011,o.castShadow=!1,t.add(o);const a=Be(n*.86,.022,i*.78,Ue(an(r,.16),1,0));a.position.y=.012,a.castShadow=!1,t.add(a)},"round-rug"(t,e){const{w:n,color:i}=e,r=st(n/2,n/2,.02,Ue(i,1,0),40);r.position.y=.011,r.castShadow=!1,t.add(r);const s=st(n*.36,n*.36,.022,Ue(an(i,.18),1,0),40);s.position.y=.012,s.castShadow=!1,t.add(s)},plant(t,e){const{w:n,h:i,color:r}=e,s=Ue("#9a7a55",.7),o=i*.28;t.add(Ee(st(n*.36,n*.28,o,s),0,o/2,0)),t.add(Ee(st(.03,.03,i*.45,Ue("#5a4030",.8)),0,o+i*.2,0));const a=(c,u,d,h,p)=>{const v=new Je(new Np(u,0),Ue(c,.9));v.castShadow=!0,t.add(Ee(v,d,h,p))},l=o+i*.4;a(an(r,.05),n*.42,0,l+n*.2,0),a(an(r,-.1),n*.34,n*.22,l+n*.45,.04),a(an(r,.16),n*.3,-n*.24,l+n*.4,-.05),a(an(r,-.04),n*.28,.04,l+n*.62,.05)},lamp(t,e){const{w:n,h:i,color:r}=e,s=Ue("#3a3a3e",.4,.6);t.add(Ee(st(n*.32,n*.36,.04,s),0,.02,0)),t.add(Ee(st(.018,.018,i*.78,s),0,i*.4,0));const o=new Je(new Pp(n*.42,i*.22,24,1,!0),new Ht({color:new Ke(r),roughness:.6,emissive:new Ke(r),emissiveIntensity:.5,side:fn}));o.position.set(0,i*.86,0),o.rotation.x=Math.PI,t.add(o);const a=new Oy(16771264,6,4,2);a.position.set(0,i*.82,0),t.add(a)},fridge(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.35,.5),a=Ue("#888",.3,.8);t.add(Ee(Be(n,r,i,o),0,r/2,0)),t.add(Ee(Be(n,.015,.005,Ue(an(s,-.3),.4)),0,r*.62,i/2+.003)),t.add(Ee(st(.012,.012,r*.3,a),n/2-.08,r*.78,i/2+.01)),t.add(Ee(st(.012,.012,r*.4,a),n/2-.08,r*.3,i/2+.01))},counter(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue("#d8d2c8",.6),a=Ue(s,.3,.2);t.add(Ee(Be(n,r-.05,i,o),0,(r-.05)/2,0)),t.add(Ee(Be(n,.05,i,a),0,r-.025,0)),t.add(Ee(Be(n*.3,.02,i*.5,Ue("#9aa0a6",.3,.4)),n*.18,r-.02,0))},range(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.35,.4);t.add(Ee(Be(n,r,i,o),0,r/2,0));const a=Ue("#1a1a1d",.3,.2);t.add(Ee(Be(n-.04,.02,i-.04,a),0,r+.01,0));for(const[l,c]of[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]])t.add(Ee(st(n*.11,n*.11,.01,Ue("#333",.5)),n*l,r+.02,i*c))},oven(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.4,.45);t.add(Ee(Be(n,r,i,o),0,r/2,0));const a=Ue("#26262a",.35,.3);t.add(Ee(Be(n-.06,r*.5,.02,a),0,r*.38,i/2+.006));const l=new Ht({color:"#12161c",roughness:.2,emissive:new Ke("#16242f"),emissiveIntensity:.25});t.add(Ee(new Je(new Qn(n-.2,r*.26,.01),l),0,r*.4,i/2+.016)),t.add(Ee(st(.013,.013,n*.7,Ue("#bcc0c4",.3,.7)),0,r*.68,i/2+.02).rotateZ(Math.PI/2));const c=Ue("#1a1a1d",.3,.2);t.add(Ee(Be(n-.04,.02,i-.04,c),0,r+.01,0));for(const[u,d]of[[-.22,-.2],[.22,-.2],[-.22,.22],[.22,.22]])t.add(Ee(st(n*.1,n*.1,.01,Ue("#333",.5)),n*u,r+.02,i*d));t.add(Ee(Be(n,r*.16,.05,Ue(an(s,-.12),.4)),0,r+.09,-i/2+.03))},appliance(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.4,.45);t.add(Ee(Be(n,r,i,o),0,r/2,0)),t.add(Ee(Be(n-.06,r-.1,.02,Ue(an(s,-.05),.35,.5)),0,r/2,i/2+.006)),t.add(Ee(st(.012,.012,n*.62,Ue("#8c9094",.3,.8)),0,r-.08,i/2+.02).rotateZ(Math.PI/2)),t.add(Ee(Be(n-.08,.05,.02,Ue(an(s,-.2),.4)),0,r-.05,i/2+.01))},washer(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s,.35,.5);t.add(Ee(Be(n,r,i,o),0,r/2,0)),t.add(Ee(st(n*.33,n*.33,.04,Ue("#9aa0a6",.3,.6)),0,r*.46,i/2-.005).rotateX(Math.PI/2));const a=new Ht({color:"#1f2e38",roughness:.12,metalness:.2,transparent:!0,opacity:.7});t.add(Ee(st(n*.25,n*.25,.04,a),0,r*.46,i/2+.012).rotateX(Math.PI/2)),t.add(Ee(Be(n-.06,.08,.02,Ue(an(s,-.18),.4)),0,r-.08,i/2+.006))},sink(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(Ee(Be(n,r-.05,i,Ue(s,.55)),0,(r-.05)/2,0)),t.add(Ee(Be(n,.05,i,Ue("#d8d2c8",.3,.2)),0,r-.025,0)),t.add(Ee(Be(n*.6,.05,i*.58,Ue("#9aa0a6",.25,.6)),0,r-.05,.02));const o=Ue("#b8bcc0",.2,.8);t.add(Ee(st(.015,.015,.16,o),0,r+.08,-i/2+.12)),t.add(Ee(Be(.02,.02,.13,o),0,r+.15,-i/2+.18))},toilet(t,e){const{w:n,d:i,h:r,color:s}=e,o=Ue(s||"#f2f2f0",.35,.05);t.add(Ee(st(n*.4,n*.34,r*.5,o),0,r*.25,i*.16)),t.add(Ee(st(n*.46,n*.46,.05,o),0,r*.52,i*.16)),t.add(Ee(Be(n*.96,r*.5,i*.26,o),0,r*.75,-i/2+i*.13))},bathtub(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(Ee(Be(n,r,i,Ue(s||"#f3f3f1",.3,.05)),0,r/2,0)),t.add(Ee(Be(n-.16,r*.55,i-.16,Ue("#e6eff4",.2,.1)),0,r*.62,0)),t.add(Ee(st(.014,.014,.14,Ue("#b8bcc0",.2,.8)),n/2-.12,r+.06,0))},shower(t,e){const{w:n,d:i,h:r,color:s}=e;t.add(Ee(Be(n,.08,i,Ue(s||"#e8e8e6",.4,.05)),0,.04,0));const o=new Ht({color:"#cfe0e8",roughness:.05,metalness:.1,transparent:!0,opacity:.26,side:fn}),a=Ue("#9aa0a6",.3,.7),l=new Je(new Ai(n,r-.08),o);l.position.set(0,r/2,i/2),l.castShadow=!1,t.add(l);const c=new Je(new Ai(i,r-.08),o);c.rotation.y=Math.PI/2,c.position.set(n/2,r/2,0),c.castShadow=!1,t.add(c),t.add(Ee(Be(.03,r,.03,a),n/2,r/2,i/2)),t.add(Ee(Be(.03,r,.03,a),-n/2,r/2,i/2)),t.add(Ee(st(n*.12,n*.12,.04,a),-n*.1,r*.78,-i/2+.05))}};function MC(t){const e=cp[t.type];if(!e)return new Fn;const n=new Fn,i={...e,color:t.color||e.color};return(xg[e.shape]||xg.table)(n,i),n.rotation.y=-((t.rot||0)*Math.PI)/180,n.userData.uid=t.uid,n}function Ls(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}const yg={day:{bg:"#bcd8f2",exposure:1.05,env:1,key:["#fff6e8",2.6],fill:["#cfe2ff",.5],hemi:.7,amb:.3,ground:"#d8e2cf",skyHemi:"#cfe3ff",grndHemi:"#5a7a44"},night:{bg:"#0a1222",exposure:1.12,env:.22,key:["#aac2ff",.6],fill:["#485fb0",.3],hemi:.2,amb:.1,ground:"#46543b",skyHemi:"#33406a",grndHemi:"#1d2a18"}},_g=(t,e)=>Math.round(t/e)*e,Ds=t=>Math.max(0,Math.min(255,Math.round(t))),Mi=(t,e,n)=>Math.max(e,Math.min(n,t)),wC={oak:"#c79a6b",walnut:"#6e4a30",birch:"#d8c7a3",grey:"#9a9a92"};function Uc(t){const e=new B(t.dirx,0,t.dirz),n=new B(0,1,0),i=new B(t.nx,0,t.nz);return new it().makeBasis(e,n,i).setPosition(t.ox,0,t.oz)}function EC(t,e,n,i,r){const s=new uf,o=(e+i)/2,a=(n+r)/2,l=(i-e)/2,c=(r-n)/2;if(t==="round")s.absellipse(o,a,l,c,0,Math.PI*2,!0);else if(t==="arch"){const u=Math.min(r-l,r-.02);s.moveTo(e,n),s.lineTo(i,n),s.lineTo(i,u),s.absarc(o,u,l,0,Math.PI,!1),s.lineTo(e,n),s.closePath()}else if(t==="star"){for(let u=0;u<10;u++){const d=-Math.PI/2+u*Math.PI/5,h=u%2===0?1:.42,p=o+Math.cos(d)*h*l,v=a+Math.sin(d)*h*c;u===0?s.moveTo(p,v):s.lineTo(p,v)}s.closePath()}else s.moveTo(e,n),s.lineTo(e,r),s.lineTo(i,r),s.lineTo(i,n),s.closePath();return s}function TC(t,e,n,i){const r=t.length,s=t.height,o=new Ly;o.moveTo(-n,-.05),o.lineTo(r+n,-.05),o.lineTo(r+n,s),o.lineTo(-n,s),o.closePath();for(const l of i){const c=Mi(l.u,.02,r-.02),u=Mi(l.u+l.w,.02,r-.02),d=Mi(l.v,0,s-.04),h=Mi(l.v+l.h,d+.02,s-.02);u-c<.04||h-d<.04||o.holes.push(EC(l.shape,c,d,u,h))}const a=new Dp(o,{depth:e,bevelEnabled:!1,curveSegments:1});return a.translate(0,0,-e/2),a.applyMatrix4(Uc(t)),a.computeVertexNormals(),a}function AC(t,e,n,i,r){const s=e.length,o=e.height,a=Mi(n.u,0,s),l=Mi(n.u+n.w,0,s),c=Mi(n.v,0,o),u=Mi(n.v+n.h,0,o);if(l-a<.05||u-c<.05)return;const d=.05,h=i+.03,p=new Fn;p.matrixAutoUpdate=!1,p.matrix.copy(Uc(e));const v=(S,g,f,m)=>{const x=new Je(new Qn(S,g,h),r);x.position.set(f,m,0),x.castShadow=!0,x.receiveShadow=!0,p.add(x)};v(d,u-c,a-d/2,(c+u)/2),v(d,u-c,l+d/2,(c+u)/2),v(l-a+2*d,d,(a+l)/2,u+d/2),c>.06&&v(l-a+2*d,d,(a+l)/2,c-d/2),t.add(p)}function bC(t="#b08a5e"){const e=new Ke(t),n=e.r*255,i=e.g*255,r=e.b*255,s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,512,512);const a=6,l=512/a;for(let u=0;u<a;u++){const d=(Math.random()-.5)*36;o.fillStyle=`rgb(${Ds(n+d)},${Ds(i+d)},${Ds(r+d)})`,o.fillRect(0,u*l,512,l);for(let h=0;h<60;h++){o.strokeStyle=`rgba(${Ds(n*.45)},${Ds(i*.4)},${Ds(r*.35)},${.04+Math.random()*.06})`,o.lineWidth=1,o.beginPath();const p=u*l+Math.random()*l;o.moveTo(0,p),o.bezierCurveTo(170,p+(Math.random()-.5)*6,340,p+(Math.random()-.5)*6,512,p),o.stroke()}o.fillStyle="rgba(28,16,8,0.45)",o.fillRect(0,u*l,512,2)}const c=new jA(s);return c.wrapS=c.wrapT=wn,c.colorSpace=ln,c}function CC({onOpenInspector:t}){const{state:e,dispatch:n}=So(),{rooms:i,walls:r,items:s,builtins:o,openings:a,selected:l,ambiance:c,quality:u}=e,{map:d}=kp(),h=We.useRef(null),p=We.useRef(null),v=We.useRef({}),S=We.useRef({});S.current={rooms:i,walls:r,items:s,selected:l,dispatch:n,onOpenInspector:t,openingMode:e.openingMode,openShape:e.openShape};function g(A){const T=v.current;if(!A||typeof A!="string")return null;if(A.startsWith("wood:")){const w=A.slice(5);return T.woodCache.has(w)||T.woodCache.set(w,bC(wC[w]||"#c79a6b")),T.woodCache.get(w)}if(A.startsWith("img:")){const w=A.slice(4);if(!T.imgCache.has(w)){const b=d[w];if(!b)return null;const I=new Pl().load(b);I.colorSpace=ln,I.wrapS=I.wrapT=wn,T.imgCache.set(w,I)}return T.imgCache.get(w)}if(A.startsWith("mat:")){const w=A.slice(4);if(!Kl[w])return null;const b=`mat:${w}`;if(!T.imgCache.has(b)){const I=new Pl().load(sa(w));I.colorSpace=ln,I.wrapS=I.wrapT=wn,T.imgCache.set(b,I)}return T.imgCache.get(b)}return null}function f(A){const T=v.current;if(typeof A!="string"||!A.startsWith("mat:"))return null;const w=A.slice(4),b=Kl[w];if(!b||!b.normal)return null;const I=`nrm:${w}`;if(!T.imgCache.has(I)){const _=new Pl().load(sa(w,!0));_.wrapS=_.wrapT=wn,T.imgCache.set(I,_)}return T.imgCache.get(I)}function m(A){var T;return typeof A!="string"||!A.startsWith("mat:")?null:((T=Kl[A.slice(4)])==null?void 0:T.repeat)||null}function x(A,T,w,b,I,_=1.5,E={},z=1){const O=g(A);if(O){const H=(m(A)||_)*(z||1),$=Math.max(1,b/H),j=Math.max(1,I/H),ae=O.clone();ae.needsUpdate=!0,ae.wrapS=ae.wrapT=wn,ae.colorSpace=ln,v.current.roomTexList.push(ae),ae.repeat.set($,j);const U=new Ht({map:ae,...E}),X=f(A);if(X){const ne=X.clone();ne.needsUpdate=!0,ne.wrapS=ne.wrapT=wn,ne.repeat.set($,j),v.current.roomTexList.push(ne),U.normalMap=ne,U.normalScale=new _e(.6,.6)}return U}return new Ht({color:new Ke(T||w),...E})}We.useEffect(()=>{const A=h.current,T=A.clientWidth,w=A.clientHeight,b=new WA({antialias:!0,preserveDrawingBuffer:!0});b.setSize(T,w),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.shadowMap.enabled=!0,b.shadowMap.type=Xx,b.toneMapping=dp,b.toneMappingExposure=1.05,b.outputColorSpace=ln,A.appendChild(b.domElement);const I=new Ay;I.background=new Ke("#bcd8f2");const _=new af(b);try{I.environment=_.fromScene(new $b,.04).texture}catch{}new eC().load(R1,Y=>{try{Y.mapping=Rc;const K=_.fromEquirectangular(Y).texture;v.current.scene&&(v.current.scene.environment=K,v.current.envMap=K)}catch{}Y.dispose()},void 0,()=>{});const E=new zn(50,T/w,.1,200),z=new Bb(E,b.domElement);z.enableDamping=!0,z.dampingFactor=.08,z.minDistance=1.2,z.maxDistance=60,z.maxPolarAngle=Math.PI/2-.04,z.minPolarAngle=.16,z.enablePan=!0,z.rotateSpeed=.7;const O=new Db("#dfe6f0","#2a2620",.55);I.add(O);const H=new Ub("#ffffff",.25);I.add(H);const $=new ug("#fff4e0",2);$.position.set(8,14,6),$.castShadow=!0,$.shadow.mapSize.set(4096,4096),$.shadow.camera.near=1,$.shadow.camera.far=80,$.shadow.bias=-3e-4,$.shadow.normalBias=.02,$.shadow.radius=4;const j=$.shadow.camera;j.left=-20,j.right=20,j.top=20,j.bottom=-20,I.add($);const ae=new ug("#cdddff",.5);ae.position.set(-9,7,-5),I.add(ae);let U=null,X=null;try{U=new oC(b),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.setSize(T,w),U.addPass(new aC(I,E)),X=new ci(I,E,T,w),X.output=ci.OUTPUT.Default,X.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,scale:1.1,samples:16,screenSpaceRadius:!1}),X.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16}),U.addPass(X),U.addPass(new pC(T,w)),U.addPass(new cC)}catch{U=null}const ne=new Je(new Ai(400,400),new Ht({color:"#d8e2cf",roughness:1}));ne.rotation.x=-Math.PI/2,ne.position.y=-.04,ne.receiveShadow=!0,I.add(ne),new Pl().load(sa("grass"),Y=>{var K,J;Y.wrapS=Y.wrapT=wn,Y.colorSpace=ln,Y.repeat.set(200,200),Y.anisotropy=((J=(K=b.capabilities).getMaxAnisotropy)==null?void 0:J.call(K))||8,ne.material.map=Y,ne.material.needsUpdate=!0,v.current.groundTex=Y},void 0,()=>{});const oe=new Fn,ge=new Fn,Le=new Fn;I.add(oe,ge,Le);const te=new Je(new Ip(.46,.5,48),new Ca({color:"#d9b779",transparent:!0,opacity:.9,depthWrite:!1,side:fn}));te.rotation.x=-Math.PI/2,te.position.y=.03,te.visible=!1,te.renderOrder=2,I.add(te);const ue=new Fn,ve=new Je(new Op(.5,.035,12,48),new Ht({color:"#d9b779",emissive:"#7a5a1e",emissiveIntensity:.5,roughness:.4,metalness:.3}));ve.rotation.x=-Math.PI/2,ve.userData.gizmo=!0,ue.add(ve);for(let Y=0;Y<4;Y++){const K=Y/4*Math.PI*2,J=new Je(new Up(.07,16,16),new Ht({color:"#fff3d6",emissive:"#d9b779",emissiveIntensity:.4,roughness:.3}));J.position.set(Math.cos(K)*.5,0,Math.sin(K)*.5),J.userData.gizmo=!0,ue.add(J)}ue.visible=!1,ue.renderOrder=3,I.add(ue);const pe=new Je(new Ai(1,1),new Ca({color:"#d9b779",transparent:!0,opacity:.4,side:fn,depthTest:!1}));pe.matrixAutoUpdate=!1,pe.visible=!1,pe.renderOrder=4,I.add(pe),Object.assign(v.current,{renderer:b,scene:I,camera:E,controls:z,roomGroup:oe,furnitureGroup:ge,ground:ne,key:$,fill:ae,ambient:H,hemi:O,pmrem:_,ring:te,gizmo:ue,builtinGroup:Le,composer:U,gtao:X,openPreview:pe,woodCache:new Map,imgCache:new Map,roomTexList:[],walls:[],itemMap:new Map,framed:!1,raycaster:new zb,drag:null,rotate:null,pending:null,drawOpen:null});const Oe=new yi(new B(0,1,0),0),Ce=b.domElement,Fe=new _e,Xe=Y=>{const K=Ce.getBoundingClientRect();Fe.set((Y.clientX-K.left)/K.width*2-1,-((Y.clientY-K.top)/K.height)*2+1)},he=()=>{const Y=new B;return v.current.raycaster.setFromCamera(Fe,E),v.current.raycaster.ray.intersectPlane(Oe,Y)?Y:null},N=Y=>{for(;Y&&Y.userData.uid===void 0;)Y=Y.parent;return Y},Me=Y=>{for(;Y;){if(Y.userData.gizmo)return!0;Y=Y.parent}return!1},Te=Y=>({u0:Math.min(Y.u0,Y.u1),u1:Math.max(Y.u0,Y.u1),v0:Math.min(Y.v0,Y.v1),v1:Math.max(Y.v0,Y.v1)}),xe=Y=>{const K=Te(Y),J=Math.max(.001,K.u1-K.u0),we=Math.max(.001,K.v1-K.v0),L=Uc(Y.geom);L.multiply(new it().makeTranslation((K.u0+K.u1)/2,(K.v0+K.v1)/2,.06)),L.multiply(new it().makeScale(J,we,1)),v.current.openPreview.matrix.copy(L),v.current.openPreview.visible=!0},be=Y=>{var P,G,W;Xe(Y);const K=v.current.raycaster;K.setFromCamera(Fe,E);const{items:J,selected:we,dispatch:L}=S.current;if(S.current.openingMode){const k=v.current.wallMeshes||[],q=K.intersectObjects(k.map(de=>de.mesh),!1);if(q.length){const de=k.find(fe=>fe.mesh===q[0].object);if(de){const fe=de.geom,Ae=q[0].point,F=(Ae.x-fe.ox)*fe.dirx+(Ae.z-fe.oz)*fe.dirz;z.enabled=!1,v.current.drawOpen={ref:de.ref,geom:fe,u0:F,v0:Ae.y,u1:F,v1:Ae.y,plane:new yi().setFromNormalAndCoplanarPoint(new B(fe.nx,0,fe.nz),new B(fe.ox,0,fe.oz))},xe(v.current.drawOpen),(P=Ce.setPointerCapture)==null||P.call(Ce,Y.pointerId)}}return}if(v.current.gizmo.visible){const k=K.intersectObject(v.current.gizmo,!0);if(k.length&&Me(k[0].object)){const q=J.find(fe=>fe.uid===(we==null?void 0:we.uid)),de=he();if(q&&de){z.enabled=!1,v.current.rotate={uid:q.uid,cx:q.x,cz:q.z,startAng:Math.atan2(de.z-q.z,de.x-q.x),startRot:q.rot||0},(G=Ce.setPointerCapture)==null||G.call(Ce,Y.pointerId);return}}}const V=K.intersectObjects(v.current.furnitureGroup.children,!0);let re=null;for(const k of V){const q=N(k.object);if(q){re=q;break}}if(re){z.enabled=!1,J.find(q=>q.uid===re.userData.uid),L({type:"select",sel:{type:"item",uid:re.userData.uid}}),to(8);const k=he();v.current.drag={uid:re.userData.uid,grp:re,offX:k?k.x-re.position.x:0,offZ:k?k.z-re.position.z:0},(W=Ce.setPointerCapture)==null||W.call(Ce,Y.pointerId)}else v.current.pending={x:Y.clientX,y:Y.clientY}},ke=Y=>{Xe(Y);const K=v.current;if(K.drawOpen){const J=K.drawOpen;K.raycaster.setFromCamera(Fe,E);const we=new B;K.raycaster.ray.intersectPlane(J.plane,we)&&(J.u1=(we.x-J.geom.ox)*J.geom.dirx+(we.z-J.geom.oz)*J.geom.dirz,J.v1=we.y,xe(J));return}if(K.rotate){const J=he();if(!J)return;const we=Math.atan2(J.z-K.rotate.cz,J.x-K.rotate.cx);let L=K.rotate.startRot+(we-K.rotate.startAng)*180/Math.PI;L=(Math.round(L)%360+360)%360,S.current.dispatch({type:"update",sel:{type:"item",uid:K.rotate.uid},patch:{rot:L},mergeKey:`rot3d:${K.rotate.uid}`});return}if(K.drag){const J=he();if(!J)return;S.current.dispatch({type:"update",sel:{type:"item",uid:K.drag.uid},patch:{x:_g(J.x-K.drag.offX,.05),z:_g(J.z-K.drag.offZ,.05)},mergeKey:`mv3d:${K.drag.uid}`})}},De=Y=>{var J,we,L,V,re,P;const K=v.current;if(K.drawOpen){const G=K.drawOpen;K.drawOpen=null,K.openPreview.visible=!1,z.enabled=!0;const W=Te(G),k=G.geom,q=Mi(W.u0,.02,k.length-.02),de=Mi(W.u1,.02,k.length-.02)-q;let fe=Math.max(0,W.v0),Ae=Math.min(k.height,W.v1)-fe;if(de>.12&&Ae>.12){const F=fe<.18;F&&(Ae+=fe,fe=0),S.current.dispatch({type:"addOpening",opening:{wall:G.ref,u:q,v:fe,w:de,h:Ae,kind:F?"doorway":"window",shape:S.current.openShape||"rect"}}),S.current.dispatch({type:"openingMode",value:!1}),to(12),(we=(J=S.current).onOpenInspector)==null||we.call(J)}try{(L=Ce.releasePointerCapture)==null||L.call(Ce,Y.pointerId)}catch{}return}if(K.drag||K.rotate)K.drag=null,K.rotate=null,z.enabled=!0;else if(K.pending){if(Math.hypot(Y.clientX-K.pending.x,Y.clientY-K.pending.y)<5)if(S.current.selected)S.current.dispatch({type:"select",sel:null});else{Xe(Y);const G=he(),W=G&&S.current.rooms.find(k=>G.x>=k.x&&G.x<=k.x+k.w&&G.z>=k.z&&G.z<=k.z+k.d);W&&(S.current.dispatch({type:"select",sel:{type:"room",uid:W.uid}}),(re=(V=S.current).onOpenInspector)==null||re.call(V))}K.pending=null}try{(P=Ce.releasePointerCapture)==null||P.call(Ce,Y.pointerId)}catch{}};Ce.addEventListener("pointerdown",be,!0),Ce.addEventListener("pointermove",ke),window.addEventListener("pointerup",De);let D;const C=()=>{z.update();const Y=E.position;for(const J of v.current.walls){const we=(Y.x-J.center.x)*J.normal.x+(Y.z-J.center.z)*J.normal.z;!J.hidden&&we>.1?J.hidden=!0:J.hidden&&we<-.1&&(J.hidden=!1),J.mesh.visible=!J.hidden}const K=p.current;if(K){const{items:J,selected:we}=S.current,L=(we==null?void 0:we.type)==="item"?J.find(V=>V.uid===we.uid):null;if(L&&!v.current.drag&&!v.current.rotate){const V=Bi(L.type),re=pr(V,L),P=new B(L.x,re.h+.35,L.z).project(E),G=b.domElement,W=(P.x*.5+.5)*G.clientWidth,k=(-P.y*.5+.5)*G.clientHeight;P.z<1?(K.style.display="flex",K.style.left=`${W}px`,K.style.top=`${k}px`):K.style.display="none"}else K.style.display="none"}U&&v.current.useComposer?U.render():b.render(I,E),D=requestAnimationFrame(C)};C();const ie=new ResizeObserver(()=>{const Y=A.clientWidth,K=A.clientHeight;b.setSize(Y,K),E.aspect=Y/K,E.updateProjectionMatrix(),U==null||U.setSize(Y,K)});return ie.observe(A),()=>{var Y,K,J,we,L,V,re;cancelAnimationFrame(D),ie.disconnect(),Ce.removeEventListener("pointerdown",be,!0),Ce.removeEventListener("pointermove",ke),window.removeEventListener("pointerup",De),z.dispose(),Ls(oe),Ls(ge),Ls(Le),te.geometry.dispose(),te.material.dispose(),(Y=v.current.openPreview)==null||Y.geometry.dispose(),(K=v.current.openPreview)==null||K.material.dispose(),v.current.woodCache.forEach(P=>P.dispose()),v.current.imgCache.forEach(P=>P.dispose()),v.current.roomTexList.forEach(P=>P.dispose()),(we=(J=v.current.groundTex)==null?void 0:J.dispose)==null||we.call(J),(V=(L=v.current.envMap)==null?void 0:L.dispose)==null||V.call(L),(re=U==null?void 0:U.dispose)==null||re.call(U),_.dispose(),b.dispose(),b.domElement.parentNode===A&&A.removeChild(b.domElement)}},[]),We.useEffect(()=>{const A=v.current;if(!A.renderer)return;const T=yg[c]||yg.day;A.scene.background.set(T.bg),A.scene.environmentIntensity=T.env,A.renderer.toneMappingExposure=T.exposure,A.key.color.set(T.key[0]),A.key.intensity=T.key[1],A.fill.color.set(T.fill[0]),A.fill.intensity=T.fill[1],A.hemi.intensity=T.hemi,T.skyHemi&&A.hemi.color.set(T.skyHemi),T.grndHemi&&A.hemi.groundColor.set(T.grndHemi),A.ambient.intensity=T.amb,A.ground&&T.ground&&A.ground.material.color.set(T.ground)},[c]),We.useEffect(()=>{var _;const A=v.current;if(!A.renderer)return;const T=u||"high",w=window.devicePixelRatio||1,b=T==="normal"?Math.min(w,1.25):T==="high"?Math.min(w,1.5):Math.min(w,2);A.renderer.setPixelRatio(b),(_=A.composer)==null||_.setPixelRatio(b);const I=T!=="normal";A.renderer.shadowMap.enabled=I,A.key.castShadow=I,A.gtao&&(A.gtao.enabled=T==="max"),A.useComposer=T==="max",A.renderer.shadowMap.needsUpdate=!0},[u]),We.useEffect(()=>{const A=v.current;if(!A.roomGroup)return;Ls(A.roomGroup),A.roomGroup.clear(),A.walls=[],A.wallMeshes=[],A.floorMeshes=[],A.roomTexList.forEach(O=>O.dispose()),A.roomTexList=[];const T=new Ht({color:"#cfc7ba",roughness:.8}),w=new Ht({color:"#e8e3da",roughness:.95,side:fn}),b=new Ht({color:"#efe9df",roughness:.7,metalness:.03}),I=.1,_=O=>a.filter(H=>C1(H.wall,O)),E=(O,H,$,j,ae,U)=>{const X=_(O),ne=TC(H,ae,j,X),oe=new Je(ne,$);oe.castShadow=!0,oe.receiveShadow=!0,A.roomGroup.add(oe),A.wallMeshes.push({mesh:oe,ref:O,geom:H}),U&&A.walls.push({mesh:oe,normal:new B(-H.nx,0,-H.nz),center:new B(H.ox+H.dirx*H.length/2,0,H.oz+H.dirz*H.length/2),hidden:!1});for(const ge of X)AC(A.roomGroup,H,ge,ae,b)},z=(O,H)=>{const $=H.length,j=_(O).filter(X=>X.v<=.06).map(X=>[Math.max(0,X.u-.05),Math.min($,X.u+X.w+.05)]).filter(([X,ne])=>ne>X);let ae=[[I/2,$-I/2]];for(const[X,ne]of j){const oe=[];for(const[ge,Le]of ae){if(ne<=ge||X>=Le){oe.push([ge,Le]);continue}X>ge&&oe.push([ge,X]),ne<Le&&oe.push([ne,Le])}ae=oe}const U=new Fn;U.matrixAutoUpdate=!1,U.matrix.copy(Uc(H));for(const[X,ne]of ae){if(ne-X<.02)continue;const oe=new Je(new Qn(ne-X,.09,.04),T);oe.position.set((X+ne)/2,.045,I/2+.02),U.add(oe)}A.roomGroup.add(U)};for(const O of i){const{x:H,z:$,w:j,d:ae,height:U}=O,X=H+j/2,ne=$+ae/2,oe=O.floorTex||(O.floorColor?void 0:"wood:oak"),ge=x(oe,O.floorColor,"#b08a5e",j,ae,1.5,{roughness:.65,metalness:.02},O.floorScale||1),Le=new Je(new Ai(j,ae),ge);Le.rotation.x=-Math.PI/2,Le.position.set(X,0,ne),Le.receiveShadow=!0,Le.userData.roomUid=O.uid,A.roomGroup.add(Le),A.floorMeshes.push(Le);const te=x(O.wallTex,O.wallColor,"#e8e3da",j,U,1.2,{roughness:.95,side:fn}),ue=ve=>!O.wallsOn||O.wallsOn[ve]!==!1;for(const ve of["n","e","s","w"]){if(!ue(ve))continue;const pe={kind:"room",uid:O.uid,side:ve},Oe=ra(pe,i,r);Oe&&(E(pe,Oe,te,I/2,I,!0),z(pe,Oe))}}for(const O of r){if(Math.hypot(O.x2-O.x1,O.z2-O.z1)<.001)continue;const $={kind:"wall",uid:O.uid},j=ra($,i,r);j&&E($,j,w,0,O.thickness,!1)}!A.framed&&(i.length||r.length||s.length)&&(M(),A.framed=!0)},[i,r,a,d]),We.useEffect(()=>{const A=v.current;if(!A.furnitureGroup)return;const T=A.itemMap,w=_=>{A.furnitureGroup.remove(_.group),Ls(_.group)},b=new Set;for(const _ of s){b.add(_.uid);let E=T.get(_.uid);if(!E||E.type!==_.type||E.color!==_.color){E&&w(E);const O=MC(_);A.furnitureGroup.add(O),E={group:O,type:_.type,color:_.color},T.set(_.uid,E)}E.group.position.set(_.x,0,_.z),E.group.rotation.y=-((_.rot||0)*Math.PI)/180;const z=_.scale||{};E.group.scale.set(z.x??1,z.y??1,z.z??1)}for(const[_,E]of T)b.has(_)||(w(E),T.delete(_));const I=(l==null?void 0:l.type)==="item"?s.find(_=>_.uid===l.uid):null;if(I){const _=Bi(I.type),E=pr(_,I),z=Math.max(E.w,E.d)/2*1.18+.12;A.ring.scale.setScalar(z/.5),A.ring.position.set(I.x,.03,I.z),A.ring.visible=!0,A.gizmo.scale.setScalar(z/.5),A.gizmo.position.set(I.x,.04,I.z),A.gizmo.visible=!0}else A.ring.visible=!1,A.gizmo.visible=!1},[s,l]),We.useEffect(()=>{const A=v.current;if(!A.builtinGroup)return;Ls(A.builtinGroup),A.builtinGroup.clear();const T=.03;for(const w of o){const b=ra(w.wall,i,r);if(!b)continue;const I=g(w.tex),_=f(w.tex),E=I?new Ht({map:I,normalMap:_||null,roughness:.6,metalness:.04}):new Ht({color:new Ke(w.color||"#c7ad84"),roughness:.62,metalness:.04});if(w.kind==="board"){const X=(w.u1+w.u2)/2,ne=(w.v1+w.v2)/2,oe=w.u2-w.u1,ge=w.v2-w.v1,Le=Math.hypot(oe,ge)||1e-6,te=oe/Le,ue=ge/Le,ve=new B(b.dirx*te,ue,b.dirz*te),pe=new B(-b.dirx*ue,te,-b.dirz*ue),Oe=new B(b.nx,0,b.nz),Ce=new it().makeBasis(ve,pe,Oe);Ce.setPosition(b.ox+b.dirx*X+b.nx*(w.depth/2),ne,b.oz+b.dirz*X+b.nz*(w.depth/2));const Fe=new Je(new Qn(Le,w.thickness||.05,w.depth||.04),E);Fe.castShadow=!0,Fe.receiveShadow=!0,Fe.matrixAutoUpdate=!1,Fe.matrix.copy(Ce),A.builtinGroup.add(Fe);continue}const z=new it,O=new B(b.dirx,0,b.dirz),H=new B(0,1,0),$=new B(b.nx,0,b.nz);z.makeBasis(O,H,$);const j=w.u+w.w/2;z.setPosition(b.ox+b.dirx*j+b.nx*(w.depth/2),w.v+w.h/2,b.oz+b.dirz*j+b.nz*(w.depth/2));const ae=new Fn;ae.matrixAutoUpdate=!1,ae.matrix.copy(z);const U=(X,ne,oe,ge,Le,te)=>{const ue=new Je(new Qn(X,ne,oe),E);ue.position.set(ge,Le,te),ue.castShadow=!0,ue.receiveShadow=!0,ae.add(ue)};w.kind==="cubby"?(U(w.w,w.h,T,0,0,-w.depth/2+T/2),U(w.w,T,w.depth,0,w.h/2-T/2,0),U(w.w,T,w.depth,0,-w.h/2+T/2,0),U(T,w.h,w.depth,-w.w/2+T/2,0,0),U(T,w.h,w.depth,w.w/2-T/2,0,0)):U(w.w,w.h,w.depth,0,0,0),A.builtinGroup.add(ae)}},[o,i,r,d]);function M(){const A=v.current;if(!A.camera)return;const{rooms:T,walls:w,items:b}=S.current;let I=1/0,_=-1/0,E=1/0,z=-1/0,O=2.7;const H=(X,ne)=>{I=Math.min(I,X),_=Math.max(_,X),E=Math.min(E,ne),z=Math.max(z,ne)};for(const X of T)H(X.x,X.z),H(X.x+X.w,X.z+X.d),O=Math.max(O,X.height);for(const X of w)H(X.x1,X.z1),H(X.x2,X.z2),O=Math.max(O,X.height);for(const X of b)H(X.x,X.z);isFinite(I)||(I=-2,_=2,E=-2,z=2);const $=(I+_)/2,j=(E+z)/2,ae=Math.max(_-I,z-E,2),U=ae*1.1+4;A.camera.position.set($+ae*.45,ae*.8+3,j+U),A.controls.target.set($,O*.3,j),A.controls.update()}return y.jsxs("div",{className:"scene3d",ref:h,children:[y.jsx("button",{className:"recenter",onClick:M,"aria-label":"Recenter view",children:y.jsx(Vx,{size:20})}),y.jsx("button",{ref:p,className:"piece-menu",style:{display:"none"},"aria-label":"Edit piece",title:"Edit this piece",onPointerDown:A=>A.stopPropagation(),onClick:A=>{var T,w;A.stopPropagation(),(w=(T=S.current).onOpenInspector)==null||w.call(T)},children:y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:[y.jsx("circle",{cx:"5",cy:"12",r:"1.8"}),y.jsx("circle",{cx:"12",cy:"12",r:"1.8"}),y.jsx("circle",{cx:"19",cy:"12",r:"1.8"})]})})]})}function lr({icon:t,label:e,active:n,accent:i,onClick:r}){return y.jsxs("button",{className:`rail-btn ${n?"active":""} ${i?"accent":""}`,onClick:r,title:e,children:[t,y.jsx("span",{children:e})]})}function RC({onOpen:t,activePanel:e}){const{state:n,dispatch:i}=So(),{view:r,tool:s,ambiance:o,openingMode:a,openShape:l}=n,c=[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]];return y.jsxs("aside",{className:"rail",children:[y.jsxs("div",{className:"rail-group",children:[r==="2d"&&y.jsxs(y.Fragment,{children:[y.jsx(lr,{icon:y.jsx(r0,{size:20}),label:"Select",active:s==="select",onClick:()=>i({type:"tool",tool:"select"})}),y.jsx(lr,{icon:y.jsx(B1,{size:20}),label:"Room",active:s==="room",onClick:()=>i({type:"tool",tool:"room"})}),y.jsx(lr,{icon:y.jsx(H1,{size:20}),label:"Wall",active:s==="wall",onClick:()=>i({type:"tool",tool:"wall"})})]}),r==="3d"&&y.jsxs(y.Fragment,{children:[y.jsx(lr,{icon:y.jsx(r0,{size:20}),label:"Select",active:!a,onClick:()=>i({type:"openingMode",value:!1})}),y.jsx(lr,{icon:y.jsx(O1,{size:20}),label:"Opening",active:a,onClick:()=>i({type:"openingMode",value:!a})}),a&&y.jsx("div",{className:"rail-shapes",children:c.map(([u,d])=>y.jsx("button",{className:`rail-shape ${(l||"rect")===u?"active":""}`,onClick:()=>i({type:"openShape",value:u}),children:d},u))}),y.jsx("div",{className:"rail-sep"}),["day","night"].map(u=>y.jsx(lr,{icon:y.jsx(k1,{size:20}),label:u[0].toUpperCase()+u.slice(1),active:o===u,onClick:()=>i({type:"ambiance",value:u})},u))]})]}),y.jsxs("div",{className:"rail-group bottom",children:[y.jsx(lr,{icon:y.jsx(D1,{size:22}),label:"Add",accent:!0,active:e==="catalog",onClick:()=>t("catalog")}),y.jsx(lr,{icon:y.jsx(I1,{size:20}),label:"Settings",active:e==="settings",onClick:()=>t("settings")})]})]})}const pf=Ux.map(t=>({key:t.type,type:t.type,name:t.name,category:t.category,proc:t})),PC=["Seating","Tables","Bedroom","Storage","Kitchen","Appliances","Bathroom","Office","Decor"],LC=["All",...PC.filter(t=>pf.some(e=>e.category===t))];function DC({item:t}){const e=t.w/t.d;let n=86,i=n/e;return i>60&&(i=60,n=i*e),y.jsx("svg",{viewBox:"-50 -36 100 72",preserveAspectRatio:"xMidYMid meet",children:y.jsx(Hx,{item:t,wpx:n,dpx:i})})}function NC({onPick:t}){const[e,n]=We.useState("All"),[i,r]=We.useState(""),s=We.useMemo(()=>{const o=i.trim().toLowerCase();return pf.filter(a=>(e==="All"||a.category===e)&&(!o||a.name.toLowerCase().includes(o)))},[e,i]);return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"sheet-head",children:y.jsxs("div",{children:[y.jsx("h2",{children:"Library"}),y.jsxs("div",{className:"sub",children:[pf.length," pieces · tap to place"]})]})}),y.jsx("div",{className:"lib-search",children:y.jsx("input",{type:"search",value:i,onChange:o=>r(o.target.value),placeholder:"Search furniture, appliances…","aria-label":"Search library"})}),y.jsx("div",{className:"cats",children:LC.map(o=>y.jsx("button",{className:`chip ${e===o?"active":""}`,onClick:()=>n(o),children:o},o))}),y.jsxs("div",{className:"lib-grid",children:[s.map(o=>y.jsxs("button",{className:"lib-card",onClick:()=>t(o.type),title:o.name,children:[y.jsx("div",{className:"lib-thumb",children:y.jsx(DC,{item:o.proc})}),y.jsx("div",{className:"lib-name",children:o.name})]},o.key)),s.length===0&&y.jsxs("div",{className:"panel-empty",children:["No matches for “",i,"”."]})]})]})}const IC=[{tex:"wood:oak",color:"#c79a6b",label:"Oak"},{tex:"wood:walnut",color:"#6e4a30",label:"Walnut"},{tex:"wood:birch",color:"#d8c7a3",label:"Birch"},{tex:"wood:grey",color:"#9a9a92",label:"Grey"}];function Ho({value:t,onChange:e,allowTexture:n=!0}){const{assets:i,addAsset:r}=kp(),s=We.useRef(null),o=(t==null?void 0:t.color)||"#9aa3af",a=t==null?void 0:t.tex,l=async c=>{var h;const u=(h=c.target.files)==null?void 0:h[0];if(c.target.value="",!u)return;const d=await r(u);e({color:"#ffffff",tex:`img:${d.id}`})};return y.jsxs("div",{className:"finish",children:[y.jsxs("div",{className:"finish-row",children:[x1.map(c=>y.jsx("button",{className:`swatch ${!a&&o===c?"active":""}`,style:{background:c},onClick:()=>e({color:c,tex:void 0}),"aria-label":`Colour ${c}`},c)),y.jsx("label",{className:"swatch custom","aria-label":"Custom colour",children:y.jsx("input",{type:"color",value:/^#[0-9a-fA-F]{6}$/.test(o)?o:"#999999",onChange:c=>e({color:c.target.value,tex:void 0})})})]}),n&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"finish-label",children:["Materials ",y.jsx("span",{className:"finish-by",children:"Poly Haven · CC0"})]}),y.jsx("div",{className:"finish-row",children:Bx.map(c=>y.jsx("button",{className:`swatch img ${a===`mat:${c.id}`?"active":""}`,style:{backgroundImage:`url(${sa(c.id)})`},onClick:()=>e({color:c.color,tex:`mat:${c.id}`}),"aria-label":c.label,title:c.label},c.id))}),y.jsx("div",{className:"finish-label",children:"Wood"}),y.jsx("div",{className:"finish-row",children:IC.map(c=>y.jsx("button",{className:`swatch wood ${a===c.tex?"active":""}`,style:{background:c.color},onClick:()=>e({color:c.color,tex:c.tex}),"aria-label":c.label},c.tex))}),y.jsx("div",{className:"finish-label",children:"Your images"}),y.jsxs("div",{className:"finish-row",children:[i.map(c=>y.jsx("button",{className:`swatch img ${a===`img:${c.id}`?"active":""}`,style:{backgroundImage:`url(${c.dataUrl})`},onClick:()=>e({color:"#ffffff",tex:`img:${c.id}`}),"aria-label":c.name},c.id)),y.jsx("button",{className:"swatch upload",onClick:()=>{var c;return(c=s.current)==null?void 0:c.click()},"aria-label":"Upload image",children:"+"}),y.jsx("input",{ref:s,type:"file",accept:"image/*",hidden:!0,onChange:l})]})]})]})}function Un({label:t,value:e,min:n,max:i,step:r,onChange:s,display:o}){return y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:t}),y.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(Number(a.target.value))}),y.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:o})]})}function wd({label:t,m:e,min:n,max:i,units:r,onChange:s}){const o=d=>Math.max(n,Math.min(i,d)),a=e/.0254,l=Math.floor(a/12+1e-6),c=Math.round((a-l*12)*100)/100,u=(d,h)=>s(o((d*12+h)*.0254));return y.jsxs("div",{className:"row measure-row",children:[y.jsxs("div",{className:"measure-head",children:[y.jsx("div",{className:"label",children:t}),y.jsx("div",{className:"measure-inputs",children:r==="ft"?y.jsxs(y.Fragment,{children:[y.jsx("input",{type:"number",value:l,min:0,step:1,onChange:d=>u(Math.max(0,Math.floor(Number(d.target.value)||0)),c)}),y.jsx("span",{className:"u",children:"ft"}),y.jsx("input",{type:"number",value:c,min:0,max:11.99,step:.25,onChange:d=>u(l,Number(d.target.value)||0)}),y.jsx("span",{className:"u",children:"in"})]}):y.jsxs(y.Fragment,{children:[y.jsx("input",{type:"number",value:Number(e.toFixed(3)),min:n,max:i,step:.01,onChange:d=>s(o(Number(d.target.value)||n))}),y.jsx("span",{className:"u",children:"m"})]})})]}),y.jsx("input",{className:"measure-slider",type:"range",min:n,max:i,step:.0254,value:e,onChange:d=>s(Number(d.target.value))})]})}function UC({onClose:t,onFlash:e}){const{state:n,dispatch:i}=So(),{selected:r,units:s,items:o,rooms:a,walls:l,builtins:c,sketches:u,openings:d}=n;if(!r)return null;const h=r,p=(m,x)=>i({type:"update",sel:h,patch:m,mergeKey:x}),v=()=>{i({type:"remove",sel:h}),e==null||e("Removed"),t()},S=()=>{i({type:"duplicate",sel:h}),e==null||e("Duplicated"),t()};if(h.type==="roomwall"){const m=a.find(T=>T.uid===h.uid);if(!m)return null;const x={n:"North",e:"East",s:"South",w:"West"},M=!m.wallsOn||m.wallsOn[h.side]!==!1,A=()=>i({type:"update",sel:{type:"room",uid:m.uid},patch:{wallsOn:{...m.wallsOn||{},[h.side]:!M}}});return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:"Wall section",sub:`${x[h.side]} wall of this room`}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Status"}),y.jsx("div",{className:"val",children:M?"Closed":"Open (doorway)"})]}),y.jsx("div",{className:"btn-row",children:M?y.jsxs("button",{className:"btn danger",onClick:A,children:[y.jsx(tr,{size:18})," Remove wall"]}):y.jsx("button",{className:"btn accent",onClick:A,children:"Add wall back"})})]})]})}if(h.type==="item"){const m=o.find(w=>w.uid===h.uid),x=m&&Bi(m.type);if(!m||!x)return null;const M=pr(x,m),A=m.scale||{},T=Math.round(((A.x??1)+(A.z??1))/2*100);return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:x.name,sub:`${et(M.w,s)} × ${et(M.d,s)} × ${et(M.h,s)}`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Colour"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Ho,{value:{color:m.color||x.color},allowTexture:!1,onChange:w=>p({color:w.color})})})]}),y.jsx(Un,{label:"Size",value:T,min:30,max:300,step:1,onChange:w=>p({scale:{x:w/100,y:w/100,z:w/100}},`sz:${m.uid}`),display:`${T}%`}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Footprint"}),y.jsxs("div",{className:"val",children:[et(M.w,s)," × ",et(M.d,s)]})]}),y.jsx(Un,{label:"Rotation",value:m.rot||0,min:0,max:359,step:1,onChange:w=>p({rot:w},`rot:${m.uid}`),display:`${Math.round(m.rot||0)}°`}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Quick turn"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[0,90,180,270].map(w=>y.jsxs("button",{className:"chip",style:(m.rot||0)===w?Vo:void 0,onClick:()=>p({rot:w}),children:[w,"°"]},w))})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:()=>p({rot:((m.rot||0)+90)%360}),children:[y.jsx(N1,{size:18})," Rotate"]}),y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]})]}),y.jsxs("div",{className:"btn-row",children:[y.jsx("button",{className:"btn",onClick:()=>p({scale:{x:1,y:1,z:1}}),children:"Reset size"}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}if(h.type==="room"){const m=a.find(M=>M.uid===h.uid);if(!m)return null;const x=m.w*m.d;return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:m.name||"Room",sub:`${et(m.w,s)} × ${et(m.d,s)}`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Name"}),y.jsx("input",{className:"name-input",type:"text",value:m.name||"",placeholder:"Room",onChange:M=>p({name:M.target.value}),style:{marginLeft:"auto",maxWidth:"64%",textAlign:"right"}})]}),y.jsx(wd,{label:"Width",m:m.w,min:.5,max:40,units:s,onChange:M=>p({w:M},`rw:${m.uid}`)}),y.jsx(wd,{label:"Depth",m:m.d,min:.5,max:40,units:s,onChange:M=>p({d:M},`rd:${m.uid}`)}),y.jsx(wd,{label:"Wall height",m:m.height,min:1.5,max:6,units:s,onChange:M=>p({height:M},`rh:${m.uid}`)}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Floor area"}),y.jsx("div",{className:"val",children:s==="m"?`${x.toFixed(1)} m²`:`${Math.round(x*10.7639)} ft²`})]}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Wall sides"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["n","N"],["e","E"],["s","S"],["w","W"]].map(([M,A])=>{const T=!m.wallsOn||m.wallsOn[M]!==!1;return y.jsx("button",{className:"chip",style:T?Vo:void 0,onClick:()=>p({wallsOn:{...m.wallsOn||{},[M]:!T}}),children:A},M)})})]}),y.jsxs("div",{className:"stack-row",children:[y.jsx("div",{className:"label",children:"Flooring"}),y.jsx(Ho,{value:{color:m.floorColor,tex:m.floorTex},onChange:M=>p({floorColor:M.color,floorTex:M.tex})}),y.jsx(Un,{label:"Pattern scale",value:m.floorScale||1,min:.3,max:4,step:.1,onChange:M=>p({floorScale:M},`fs:${m.uid}`),display:`${Math.round((m.floorScale||1)*100)}%`}),a.length>1&&y.jsx("button",{className:"btn",style:{marginTop:2},onClick:()=>{i({type:"floorAll",patch:{floorColor:m.floorColor,floorTex:m.floorTex,floorScale:m.floorScale||1}}),e==null||e("Flooring applied to all rooms")},children:"Apply flooring to whole house"})]}),y.jsxs("div",{className:"stack-row",children:[y.jsx("div",{className:"label",children:"Wall finish"}),y.jsx(Ho,{value:{color:m.wallColor,tex:m.wallTex},onChange:M=>p({wallColor:M.color,wallTex:M.tex})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}if(h.type==="builtin"){const m=c.find(x=>x.uid===h.uid);if(!m)return null;if(m.kind==="board"){const x=Math.hypot(m.u2-m.u1,m.v2-m.v1);return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:"Board",sub:`${et(x,s)} long`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Length"}),y.jsx("div",{className:"val",children:et(x,s)})]}),y.jsx(Un,{label:"Width",value:m.thickness,min:.01,max:.4,step:.005,onChange:M=>p({thickness:M},`bt:${m.uid}`),display:et(m.thickness,s)}),y.jsx(Un,{label:"Depth",value:m.depth,min:.02,max:.6,step:.01,onChange:M=>p({depth:M},`bd:${m.uid}`),display:et(m.depth,s)}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Finish"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Ho,{value:{color:m.color,tex:m.tex},onChange:M=>p({color:M.color,tex:M.tex})})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:"Built-in",sub:`${et(m.w,s)} × ${et(m.h,s)} × ${et(m.depth,s)} deep`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Style"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["cubby","Open cubby"],["panel","Solid panel"]].map(([x,M])=>y.jsx("button",{className:"chip",style:m.kind===x?Vo:void 0,onClick:()=>p({kind:x}),children:M},x))})]}),y.jsx(Un,{label:"Width",value:m.w,min:.1,max:12,step:.05,onChange:x=>p({w:x},`bw:${m.uid}`),display:et(m.w,s)}),y.jsx(Un,{label:"Height",value:m.h,min:.1,max:6,step:.05,onChange:x=>p({h:x},`bh:${m.uid}`),display:et(m.h,s)}),y.jsx(Un,{label:"Depth",value:m.depth,min:.05,max:3,step:.05,onChange:x=>p({depth:x},`bd:${m.uid}`),display:et(m.depth,s)}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Finish"}),y.jsx("div",{style:{marginLeft:"auto",maxWidth:"74%"},children:y.jsx(Ho,{value:{color:m.color,tex:m.tex},onChange:x=>p({color:x.color,tex:x.tex})})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}if(h.type==="opening"){const m=d.find(A=>A.uid===h.uid);if(!m)return null;const x={doorway:"Doorway",window:"Window",passthrough:"Pass-through"},M=A=>{p(A==="doorway"?{kind:A,v:0}:A==="window"?{kind:A,v:m.v<.05?.9:m.v}:{kind:A})};return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:x[m.kind]||"Opening",sub:`${et(m.w,s)} × ${et(m.h,s)}`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Type"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["doorway","Door"],["window","Window"],["passthrough","Open"]].map(([A,T])=>y.jsx("button",{className:"chip",style:m.kind===A?Vo:void 0,onClick:()=>M(A),children:T},A))})]}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Shape"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[["rect","Rect"],["arch","Arch"],["round","Round"],["star","Star"]].map(([A,T])=>y.jsx("button",{className:"chip",style:(m.shape||"rect")===A?Vo:void 0,onClick:()=>p({shape:A}),children:T},A))})]}),y.jsx(Un,{label:"Width",value:m.w,min:.3,max:6,step:.05,onChange:A=>p({w:A},`ow:${m.uid}`),display:et(m.w,s)}),y.jsx(Un,{label:"Height",value:m.h,min:.3,max:5,step:.05,onChange:A=>p({h:A},`oh:${m.uid}`),display:et(m.h,s)}),m.kind!=="doorway"&&y.jsx(Un,{label:"Sill height",value:m.v,min:0,max:3,step:.05,onChange:A=>p({v:A},`ov:${m.uid}`),display:et(m.v,s)}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Top of opening"}),y.jsx("div",{className:"val",children:et(m.v+m.h,s)})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}if(h.type==="sketch"){const m=u.find(w=>w.uid===h.uid);if(!m)return null;const x=m.pts,M=m.closed?x.length:x.length-1;let A=0;for(let w=0;w<M;w++){const b=x[w],I=x[(w+1)%x.length];A+=Math.hypot(I.x-b.x,I.z-b.z)}let T=0;if(m.closed&&x.length>=3){for(let w=0,b=x.length-1;w<x.length;b=w++)T+=(x[b].x+x[w].x)*(x[b].z-x[w].z);T=Math.abs(T/2)}return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:"Sketch",sub:`${m.closed?"Closed shape":"Open outline"} · ${x.length} points`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Perimeter"}),y.jsx("div",{className:"val",children:et(A,s)})]}),m.closed&&y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Area"}),y.jsx("div",{className:"val",children:b1(T,s)})]}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"Edges"}),y.jsx("div",{className:"val",style:{marginLeft:"auto",textAlign:"right",lineHeight:1.6},children:Array.from({length:M},(w,b)=>{const I=x[b],_=x[(b+1)%x.length];return y.jsx("div",{children:et(Math.hypot(_.x-I.x,_.z-I.z),s)},b)})})]}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}const g=l.find(m=>m.uid===h.uid);if(!g)return null;const f=Math.hypot(g.x2-g.x1,g.z2-g.z1);return y.jsxs(y.Fragment,{children:[y.jsx(cr,{title:"Wall",sub:`${et(f,s)} long`,onClose:t}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Length"}),y.jsx("div",{className:"val",children:et(f,s)})]}),y.jsx(Un,{label:"Height",value:g.height,min:1.5,max:6,step:.1,onChange:m=>p({height:m},`wh:${g.uid}`),display:et(g.height,s)}),y.jsx(Un,{label:"Thickness",value:g.thickness,min:.05,max:.4,step:.01,onChange:m=>p({thickness:m},`wt:${g.uid}`),display:et(g.thickness,s)}),y.jsxs("div",{className:"btn-row",children:[y.jsxs("button",{className:"btn",onClick:S,children:[y.jsx(Or,{size:18})," Duplicate"]}),y.jsxs("button",{className:"btn danger",onClick:v,children:[y.jsx(tr,{size:18})," Delete"]})]})]})]})}const Vo={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function cr({title:t,sub:e}){return y.jsx("div",{className:"sheet-head",children:y.jsxs("div",{children:[y.jsx("h2",{children:t}),y.jsx("div",{className:"sub",children:e})]})})}function OC({onFlash:t,onClose:e}){const{state:n,dispatch:i}=So(),{units:r,quality:s,defaultHeight:o,rooms:a,walls:l,items:c}=n,{assets:u,addAsset:d,removeAsset:h}=kp(),p=We.useRef(null),v=async S=>{const g=[...S.target.files||[]];S.target.value="";for(const f of g)await d(f);g.length&&(t==null||t("Image added"))};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"sheet-head",children:y.jsxs("div",{children:[y.jsx("h2",{children:"Settings"}),y.jsxs("div",{className:"sub",children:[a.length," rooms · ",l.length," walls · ",c.length," items"]})]})}),y.jsxs("div",{className:"insp",children:[y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Units"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["ft","Feet"],["m","Metres"]].map(([S,g])=>y.jsx("button",{className:"chip",style:r===S?Sg:void 0,onClick:()=>i({type:"units",value:S}),children:g},S))})]}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"Graphics"}),y.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[["normal","Normal"],["high","High"],["max","Max"]].map(([S,g])=>y.jsx("button",{className:"chip",style:(s||"high")===S?Sg:void 0,onClick:()=>i({type:"quality",value:S}),children:g},S))})]}),y.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:y.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Lower this if 3D feels slow on your device. Normal turns off shadows & effects; Max adds ambient occlusion."})}),y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"label",children:"New wall height"}),y.jsx("input",{type:"range",min:1.5,max:6,step:.1,value:o,onChange:S=>i({type:"defaultHeight",value:Number(S.target.value)})}),y.jsx("div",{className:"val",style:{width:64,textAlign:"right"},children:et(o,r)})]}),y.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:y.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Applied to rooms & walls you draw next. Change an existing one by selecting it."})}),y.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[y.jsx("div",{className:"label",children:"My images"}),y.jsxs("div",{style:{marginLeft:"auto",maxWidth:"74%",display:"flex",flexWrap:"wrap",gap:9,justifyContent:"flex-end"},children:[u.map(S=>y.jsxs("div",{className:"asset-tile",children:[y.jsx("div",{className:"asset-thumb",style:{backgroundImage:`url(${S.dataUrl})`}}),y.jsx("button",{className:"asset-del",onClick:()=>h(S.id),"aria-label":"Delete image",children:"×"})]},S.id)),y.jsx("button",{className:"swatch upload",onClick:()=>{var S;return(S=p.current)==null?void 0:S.click()},"aria-label":"Upload image",children:"+"}),y.jsx("input",{ref:p,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:v})]})]}),y.jsx("div",{className:"row",style:{borderBottom:"none",paddingTop:0},children:y.jsx("div",{className:"sub",style:{color:"var(--text-3)",fontSize:12},children:"Upload wood, flooring or wallpaper images, then apply them to floors, walls or built-ins from their finish picker."})}),y.jsxs("div",{className:"btn-row",children:[y.jsx("button",{className:"btn",onClick:()=>{i({type:"clear"}),t==null||t("Cleared furniture")},children:"Clear furniture"}),y.jsx("button",{className:"btn danger",onClick:()=>{i({type:"reset"}),t==null||t("Reset everything"),e()},children:"Reset all"})]})]})]})}const Sg={color:"var(--accent)",borderColor:"var(--accent-line)",background:"var(--accent-soft)"};function zC({kind:t,onClose:e,onFlash:n,onPick:i}){return y.jsxs("aside",{className:"panel",children:[y.jsx("button",{className:"panel-close",onClick:e,"aria-label":"Close panel",children:y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:y.jsx("path",{d:"M6 6l12 12M18 6 6 18"})})}),y.jsxs("div",{className:"panel-body",children:[t==="catalog"&&y.jsx(NC,{onPick:i}),t==="settings"&&y.jsx(OC,{onFlash:n,onClose:e}),t==="inspector"&&y.jsx(UC,{onClose:e,onFlash:n})]})]})}const FC={cozy:.85,standard:1,spacious:1.18};function kC({bedrooms:t=2,bathrooms:e=1,size:n="standard"}={}){const i=FC[n]||1,r=[{name:"Living Room",w:5,d:4.2,tex:"wood:oak"},{name:"Kitchen",w:3.6,d:3.4,tex:"wood:birch"}];for(let d=0;d<t;d++)r.push({name:t>1?`Bedroom ${d+1}`:"Bedroom",w:3.6,d:3.4,tex:"wood:oak"});for(let d=0;d<e;d++)r.push({name:e>1?`Bath ${d+1}`:"Bathroom",w:2.4,d:2.2,color:"#d4d8dd"});r.forEach(d=>{d.w=+(d.w*i).toFixed(2),d.d=+(d.d*i).toFixed(2)});const s=r.reduce((d,h)=>d+h.w*h.d,0),o=Math.sqrt(s)*1.6,a=[];let l=0,c=0,u=0;for(const d of r)l>0&&l+d.w>o&&(c=+(c+u).toFixed(2),l=0,u=0),a.push({name:d.name,x:+l.toFixed(2),z:c,w:d.w,d:d.d,height:2.7,floorTex:d.tex,floorColor:d.color}),l=+(l+d.w).toFixed(2),u=Math.max(u,d.d);return a}function Mg({label:t,value:e,min:n,max:i,onChange:r}){return y.jsxs("div",{className:"gen-row",children:[y.jsx("span",{children:t}),y.jsxs("div",{className:"gen-step",children:[y.jsx("button",{onClick:()=>r(Math.max(n,e-1)),"aria-label":`Fewer ${t}`,children:"−"}),y.jsx("b",{children:e}),y.jsx("button",{onClick:()=>r(Math.min(i,e+1)),"aria-label":`More ${t}`,children:"+"})]})]})}function BC({onBlank:t,onGenerate:e}){const[n,i]=We.useState("home"),[r,s]=We.useState(2),[o,a]=We.useState(1),[l,c]=We.useState("standard");return y.jsx("div",{className:"start-scrim",children:y.jsxs("div",{className:"start-card",children:[y.jsxs("div",{className:"start-brand",children:[y.jsx("div",{className:"logo",children:y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 11 12 4l9 7"}),y.jsx("path",{d:"M5 10v9h14v-9"})]})}),y.jsxs("div",{children:[y.jsx("h1",{children:"Honeycutt Room Studio"}),y.jsx("p",{children:"Design your space in 2D & 3D"})]})]}),n==="home"?y.jsxs("div",{className:"start-actions",children:[y.jsxs("button",{className:"start-btn primary",onClick:t,children:[y.jsx("b",{children:"Start a blank project"}),y.jsx("span",{children:"Draw rooms and walls from scratch"})]}),y.jsxs("button",{className:"start-btn",onClick:()=>i("gen"),children:[y.jsx("b",{children:"Generate a house"}),y.jsx("span",{children:"Auto-build a layout by rooms & size"})]})]}):y.jsxs("div",{className:"gen-form",children:[y.jsx(Mg,{label:"Bedrooms",value:r,min:1,max:6,onChange:s}),y.jsx(Mg,{label:"Bathrooms",value:o,min:1,max:4,onChange:a}),y.jsxs("div",{className:"gen-row",children:[y.jsx("span",{children:"Size"}),y.jsx("div",{className:"gen-sizes",children:[["cozy","Cozy"],["standard","Standard"],["spacious","Spacious"]].map(([u,d])=>y.jsx("button",{className:`chip ${l===u?"active":""}`,onClick:()=>c(u),children:d},u))})]}),y.jsxs("div",{className:"gen-buttons",children:[y.jsx("button",{className:"start-btn",onClick:()=>i("home"),children:"Back"}),y.jsx("button",{className:"start-btn primary",onClick:()=>e(kC({bedrooms:r,bathrooms:o,size:l})),children:y.jsx("b",{children:"Build it"})})]})]})]})})}function HC(){const{state:t,dispatch:e,canUndo:n,canRedo:i}=So(),{view:r,selected:s,rooms:o,walls:a,items:l}=t,[c,u]=We.useState(null),[d,h]=We.useState(null),p=o.length===0&&a.length===0&&l.length===0,[v,S]=We.useState(p),g=We.useCallback(_=>h({msg:_,t:Date.now()}),[]);We.useEffect(()=>{if(!d)return;const _=setTimeout(()=>h(null),1600);return()=>clearTimeout(_)},[d]);let f=c||(s&&r!=="3d"?"inspector":null);f==="inspector"&&!s&&(f=null);const m=_=>e({type:"view",view:_}),x=_=>u(E=>E===_?null:_),M=()=>{u(null),r!=="3d"&&e({type:"select",sel:null})},A=()=>{e({type:"reset"}),u(null),S(!0)},T=()=>{S(!1),g("Blank project — pick Room to start")},w=_=>{e({type:"loadRooms",rooms:_}),S(!1),e({type:"view",view:"2d"}),g("House generated — tap a room to edit")},b=_=>{let E=0,z=0;const O=(s==null?void 0:s.type)==="room"&&o.find(H=>H.uid===s.uid);if(O)E=O.x+O.w/2,z=O.z+O.d/2;else if(o.length){const H=o[o.length-1];E=H.x+H.w/2,z=H.z+H.d/2}e({type:"addItem",kind:_,x:E,z}),u(null),to(10),g("Added — drag to position")},I=async()=>{try{let _;if(r==="3d"){const E=document.querySelector(".scene3d canvas");if(!E)return;_=E.toDataURL("image/png")}else{const E=document.querySelector(".editor2d svg");if(!E)return;_=await VC(E)}await GC(_,`honeycutt-room-${Date.now()}.png`),g("Image saved")}catch{g("Could not export")}};return y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"topbar",children:[y.jsxs("div",{className:"brand",children:[y.jsx("div",{className:"logo",children:y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 11 12 4l9 7"}),y.jsx("path",{d:"M5 10v9h14v-9"})]})}),y.jsxs("div",{className:"title",children:[y.jsx("b",{children:"Honeycutt"}),y.jsx("span",{children:"Room Studio"})]})]}),y.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[y.jsxs("button",{className:r==="2d"?"active":"",onClick:()=>m("2d"),"aria-pressed":r==="2d",children:[y.jsx(P1,{size:15})," Plan"]}),y.jsxs("button",{className:r==="3d"?"active":"",onClick:()=>m("3d"),"aria-pressed":r==="3d",children:[y.jsx(L1,{size:15})," 3D"]})]}),y.jsxs("div",{className:"tools",children:[y.jsx("button",{className:"tool",onClick:A,"aria-label":"New design",children:y.jsx(V1,{size:18})}),y.jsx("button",{className:"tool",disabled:!n,onClick:()=>e({type:"undo"}),"aria-label":"Undo",children:y.jsx(Gx,{size:18})}),y.jsx("button",{className:"tool",disabled:!i,onClick:()=>e({type:"redo"}),"aria-label":"Redo",children:y.jsx(z1,{size:18})}),y.jsx("button",{className:"tool",onClick:I,"aria-label":"Export image",children:y.jsx(F1,{size:18})})]})]}),y.jsxs("div",{className:"body",children:[y.jsx(RC,{onOpen:x,activePanel:f}),y.jsx("main",{className:"stage",children:r==="2d"?y.jsx(Z1,{}):y.jsx(CC,{onOpenInspector:()=>u("inspector")})}),f&&y.jsx("div",{className:"panel-scrim",onClick:M}),f&&y.jsx(zC,{kind:f,onClose:M,onFlash:g,onPick:b})]}),d&&y.jsx("div",{className:"toast",children:d.msg},d.t),v&&y.jsx(BC,{onBlank:T,onGenerate:w})]})}function VC(t){return new Promise((e,n)=>{const i=t.getBoundingClientRect(),r=Math.max(1,Math.round(i.width)),s=Math.max(1,Math.round(i.height)),o=2,a=new XMLSerializer().serializeToString(t),l="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(a))),c=new Image;c.onload=()=>{const u=document.createElement("canvas");u.width=r*o,u.height=s*o;const d=u.getContext("2d");d.fillStyle="#ffffff",d.fillRect(0,0,u.width,u.height),d.drawImage(c,0,0,u.width,u.height),e(u.toDataURL("image/png"))},c.onerror=n,c.src=l})}async function GC(t,e){const n=await(await fetch(t)).blob(),i=new File([n],e,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"My room · Honeycutt Room Studio"});return}const r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()}Ed.createRoot(document.getElementById("root")).render(y.jsx(o_.StrictMode,{children:y.jsx(SC,{children:y.jsx(T1,{children:y.jsx(HC,{})})})}));
