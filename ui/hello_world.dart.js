{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.d1(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bq(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={bn:function bn(){},
J:function(a){var u,t=H.d2(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
cR:function(a){return v.types[a]},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a0(a)
if(typeof u!=="string")throw H.e(H.bN(a))
return u},
S:function(a){return H.co(a)+H.bK(H.bs(a),0,null)},
co:function(a){var u,t,s,r,q,p,o,n=J.I(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.v||!!n.$it){r=C.h(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.J(t.length>1&&C.a.v(t,0)===36?C.a.D(t,1):t)},
cL:function(a,b){var u,t="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.k(!0,b,t,null)
u=J.bz(a)
if(b<0||b>=u)return P.cj(b,a,t,null,u)
return P.ay(b,t)},
bN:function(a){return new P.k(!0,a,null,null)},
bP:function(a){if(typeof a!=="number")throw H.e(H.bN(a))
return a},
e:function(a){var u
if(a==null)a=new P.Q()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.bX})
u.name=""}else u.toString=H.bX
return u},
bX:function(){return J.a0(this.dartException)},
bg:function(a){throw H.e(P.ch(a))},
j:function(a){var u,t,s,r,q,p
a=H.d_(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=[]
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
bI:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
bF:function(a,b){return new H.an(a,b==null?null:b.method)},
bo:function(a,b){var u=b==null,t=u?null:b.method
return new H.aj(a,t,u?null:b.receiver)},
d3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.b.M(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bo(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.bF(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.bZ()
q=$.c_()
p=$.c0()
o=$.c1()
n=$.c4()
m=$.c5()
l=$.c3()
$.c2()
k=$.c7()
j=$.c6()
i=r.i(u)
if(i!=null)return f.$1(H.bo(u,i))
else{i=q.i(u)
if(i!=null){i.method="call"
return f.$1(H.bo(u,i))}else{i=p.i(u)
if(i==null){i=o.i(u)
if(i==null){i=n.i(u)
if(i==null){i=m.i(u)
if(i==null){i=l.i(u)
if(i==null){i=o.i(u)
if(i==null){i=k.i(u)
if(i==null){i=j.i(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.bF(u,i))}}return f.$1(new H.aO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.T()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.k(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.T()
return a},
cQ:function(a){var u
if(a==null)return new H.Y(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.Y(a)},
cV:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.b_("Unsupported number of arguments for wrapped closure"))},
H:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.cV)
a.$identity=u
return u},
cg:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aE().constructor.prototype):Object.create(new H.K(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.i
$.i=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.bD(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cc(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.bD(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cc:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.cR,a)
if(typeof a=="function")if(b)return a
else{u=c?H.bC:H.bi
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
cd:function(a,b,c,d){var u=H.bi
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bD:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cf(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cd(t,!r,u,b)
if(t===0){r=$.i
$.i=r+1
p="self"+H.d(r)
r="return function(){var "+p+" = this."
q=$.x
return new Function(r+H.d(q==null?$.x=H.a4("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.i
$.i=r+1
o+=H.d(r)
r="return function("+o+"){return this."
q=$.x
return new Function(r+H.d(q==null?$.x=H.a4("self"):q)+"."+H.d(u)+"("+o+");}")()},
ce:function(a,b,c,d){var u=H.bi,t=H.bC
switch(b?-1:a){case 0:throw H.e(H.cp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cf:function(a,b){var u,t,s,r,q,p,o,n=$.x
if(n==null)n=$.x=H.a4("self")
u=$.bB
if(u==null)u=$.bB=H.a4("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ce(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.i
$.i=u+1
return new Function(n+H.d(u)+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.i
$.i=u+1
return new Function(n+H.d(u)+"}")()},
bq:function(a,b,c,d,e,f,g){return H.cg(a,b,c,d,!!e,!!f,g)},
bi:function(a){return a.a},
bC:function(a){return a.c},
a4:function(a){var u,t,s,r=new H.K("self","target","receiver","name"),q=J.bE(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
cZ:function(a,b){throw H.e(H.cb(a,H.J(b.substring(2))))},
bc:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else u=!0
if(u)return a
H.cZ(a,b)},
cM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
cb:function(a,b){return new H.a5("CastError: "+P.bl(a)+": type '"+H.d(H.cG(a))+"' is not a subtype of type '"+b+"'")},
cG:function(a){var u,t=J.I(a)
if(!!t.$iy){u=H.cM(t)
if(u!=null)return H.d0(u)
return"Closure"}return H.S(a)},
d1:function(a){throw H.e(new P.aa(a))},
cp:function(a){return new H.aA(a)},
bQ:function(a){return v.getIsolateTag(a)},
dl:function(a,b){a.$ti=b
return a},
bs:function(a){if(a==null)return
return a.$ti},
dk:function(a,b,c){return H.bW(a["$a"+H.d(c)],H.bs(b))},
d0:function(a){return H.l(a,null)},
l:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.J(a[0].name)+H.bK(a,1,b)
if(typeof a=="function")return H.J(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
return H.d(b[b.length-a-1])}if('func' in a)return H.cy(a,b)
if('futureOr' in a)return"FutureOr<"+H.l("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cy:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=[]
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.a.t(p+o,a0[a0.length-q-1])
n=u[q]
if(n!=null&&n!==P.h)p+=" extends "+H.l(n,a0)}p+=">"}else{p=""
t=null}m=!!a.v?"void":H.l(a.ret,a0)
if("args" in a){l=a.args
for(k=l.length,j="",i="",h=0;h<k;++h,i=b){g=l[h]
j=j+i+H.l(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(k=f.length,i="",h=0;h<k;++h,i=b){g=f[h]
j=j+i+H.l(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(k=H.cN(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.l(e[c],a0)+(" "+H.d(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
bK:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.C("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.l(p,c)}return"<"+u.h(0)+">"},
bW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
di:function(a,b,c){return a.apply(b,H.bW(J.I(b)["$a"+H.d(c)],H.bs(b)))},
dj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
cW:function(a){var u,t,s,r,q=$.bS.$1(a),p=$.b7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.bM.$2(a,q)
if(q!=null){p=$.b7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bf(u)
$.b7[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bd[q]=u
return u}if(s==="-"){r=H.bf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.bU(a,u)
if(s==="*")throw H.e(P.bJ(q))
if(v.leafTags[q]===true){r=H.bf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.bU(a,u)},
bU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bu(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bf:function(a){return J.bu(a,!1,null,!!a.$id6)},
cX:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bf(u)
else return J.bu(u,c,null,null)},
cT:function(){if(!0===$.bt)return
$.bt=!0
H.cU()},
cU:function(){var u,t,s,r,q,p,o,n
$.b7=Object.create(null)
$.bd=Object.create(null)
H.cS()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.bV.$1(q)
if(p!=null){o=H.cX(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
cS:function(){var u,t,s,r,q,p,o=C.l()
o=H.v(C.m,H.v(C.n,H.v(C.i,H.v(C.i,H.v(C.o,H.v(C.p,H.v(C.q(C.h),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.bS=new H.b9(r)
$.bM=new H.ba(q)
$.bV=new H.bb(p)},
v:function(a,b){return a(b)||b},
d_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aL:function aL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
an:function an(a,b){this.a=a
this.b=b},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a){this.a=a},
bh:function bh(a){this.a=a},
Y:function Y(a){this.a=a
this.b=null},
y:function y(){},
aH:function aH(){},
aE:function aE(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a){this.a=a},
aA:function aA(a){this.a=a},
b9:function b9(a){this.a=a},
ba:function ba(a){this.a=a},
bb:function bb(a){this.a=a},
cN:function(a){return J.cl(a?Object.keys(a):[])},
d2:function(a){return v.mangledGlobalNames[a]},
bv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
bu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bR:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bt==null){H.cT()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.bJ("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bw()]
if(r!=null)return r
r=H.cW(a)
if(r!=null)return r
if(typeof a=="function")return C.w
u=Object.getPrototypeOf(a)
if(u==null)return C.k
if(u===Object.prototype)return C.k
if(typeof s=="function"){Object.defineProperty(s,$.bw(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
cl:function(a){return J.bE(a)},
bE:function(a){a.fixed$length=Array
return a},
I:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.O.prototype
return J.ah.prototype}if(typeof a=="string")return J.q.prototype
if(a==null)return J.ai.prototype
if(typeof a=="boolean")return J.ag.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.h)return a
return J.bR(a)},
cO:function(a){if(typeof a=="number")return J.p.prototype
if(typeof a=="string")return J.q.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(!(a instanceof P.h))return J.t.prototype
return a},
cP:function(a){if(typeof a=="string")return J.q.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.h)return a
return J.bR(a)},
br:function(a){if(typeof a=="number")return J.p.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.t.prototype
return a},
c8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.cO(a).t(a,b)},
by:function(a){return J.br(a).w(a)},
c9:function(a){return J.br(a).T(a)},
bz:function(a){return J.cP(a).gj(a)},
bA:function(a){return J.br(a).B(a)},
a0:function(a){return J.I(a).h(a)},
f:function f(){},
ag:function ag(){},
ai:function ai(){},
P:function P(){},
aw:function aw(){},
t:function t(){},
A:function A(){},
o:function o(){},
bm:function bm(){},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
p:function p(){},
O:function O(){},
ah:function ah(){},
q:function q(){}},P={
cs:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.cH()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.H(new P.aV(s),1)).observe(u,{childList:true})
return new P.aU(s,u,t)}else if(self.setImmediate!=null)return P.cI()
return P.cJ()},
ct:function(a){self.scheduleImmediate(H.H(new P.aW(a),0))},
cu:function(a){self.setImmediate(H.H(new P.aX(a),0))},
cv:function(a){P.cx(0,a)},
cx:function(a,b){var u=new P.b2()
u.H(a,b)
return u},
cA:function(){var u,t
for(;u=$.u,u!=null;){$.G=null
t=u.b
$.u=t
if(t==null)$.F=null
u.a.$0()}},
cF:function(){$.bp=!0
try{P.cA()}finally{$.G=null
$.bp=!1
if($.u!=null)$.bx().$1(P.bO())}},
cD:function(a){var u=new P.X(a)
if($.u==null){$.u=$.F=u
if(!$.bp)$.bx().$1(P.bO())}else $.F=$.F.b=u},
cE:function(a){var u,t,s=$.u
if(s==null){P.cD(a)
$.G=$.F
return}u=new P.X(a)
t=$.G
if(t==null){u.b=s
$.u=$.G=u}else{u.b=t.b
$.G=t.b=u
if(u.b==null)$.F=u}},
cB:function(a,b,c,d,e){var u={}
u.a=d
P.cE(new P.b5(u,e))},
cC:function(a,b,c,d,e){var u,t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
aV:function aV(a){this.a=a},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a){this.a=a},
aX:function aX(a){this.a=a},
b2:function b2(){},
b3:function b3(a,b){this.a=a
this.b=b},
X:function X(a){this.a=a
this.b=null},
aF:function aF(){},
aG:function aG(){},
b4:function b4(){},
b5:function b5(a,b){this.a=a
this.b=b},
b0:function b0(){},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(){},
ci:function(a){if(a instanceof H.y)return a.h(0)
return"Instance of '"+H.d(H.S(a))+"'"},
cq:function(a,b,c){var u=new J.a3(b,b.length)
if(!u.p())return a
if(c.length===0){do a+=H.d(u.d)
while(u.p())}else{a+=H.d(u.d)
for(;u.p();)a=a+c+H.d(u.d)}return a},
bl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a0(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ci(a)},
ca:function(a,b,c){return new P.k(!0,a,b,c)},
ay:function(a,b){return new P.ax(null,null,!0,a,b,"Value not in range")},
cj:function(a,b,c,d,e){var u=e==null?J.bz(b):e
return new P.af(u,!0,a,c,"Index out of range")},
D:function(a){return new P.aP(a)},
bJ:function(a){return new P.aN(a)},
ch:function(a){return new P.a8(a)},
cY:function(a){H.bv(H.d(a))},
Z:function Z(){},
b8:function b8(){},
M:function M(a){this.a=a},
ac:function ac(){},
ad:function ad(){},
z:function z(){},
Q:function Q(){},
k:function k(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
af:function af(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aP:function aP(a){this.a=a},
aN:function aN(a){this.a=a},
a8:function a8(a){this.a=a},
T:function T(){},
aa:function aa(a){this.a=a},
b_:function b_(a){this.a=a},
a_:function a_(){},
am:function am(){},
B:function B(){},
w:function w(){},
h:function h(){},
U:function U(){},
C:function C(a){this.a=a},
ck:function(a,b,c){var u,t
if(P.cz(a))return b+"..."+c
u=new P.C(b)
$.b6.push(a)
try{t=u
t.a=P.cq(t.a,a,", ")}finally{$.b6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cz:function(a){var u,t
for(u=$.b6.length,t=0;t<u;++t)if(a===$.b6[t])return!0
return!1}},W={
bk:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
cw:function(a,b,c,d){var u=W.bL(new W.aZ(c),W.a),t=u!=null
if(t&&!0)if(t)C.f.I(a,b,u,!1)
return new W.aY(a,b,u,!1)},
bL:function(a,b){var u=$.W
if(u===C.d)return a
return u.O(a,b)},
c:function c(){},
a1:function a1(){},
a2:function a2(){},
m:function m(){},
n:function n(){},
ab:function ab(){},
b:function b(){},
a:function a(){},
N:function N(){},
ae:function ae(){},
r:function r(){},
aC:function aC(){},
E:function E(){},
aY:function aY(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
aZ:function aZ(a){this.a=a}},G={bj:function bj(){this.a=null},at:function at(a){this.a=a},av:function av(){this.b=this.a=null
this.c=!1}},N={aB:function aB(){this.b=this.a=null},ao:function ao(a,b){this.a=a
this.b=b},az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},aD:function aD(a,b){this.a=a
this.b=b}},T={a6:function a6(a,b,c){var _=this
_.d=a
_.e=b
_.b=c
_.a=null},a9:function a9(){},ak:function ak(){},au:function au(a,b){this.b=a
this.c=b
this.a=null},
cr:function(a){var u=new T.aQ(a)
u.G(a)
return u},
aQ:function aQ(a){var _=this
_.a=!1
_.b=a
_.x=_.r=_.f=_.e=_.d=_.c=null},
aR:function aR(a){this.a=a},
aS:function aS(a){this.a=a},
aT:function aT(a){this.a=a}},V={
cK:function(a){var u=a.a
return"rgba("+((16711680&u)>>>16)+", "+((65280&u)>>>8)+", "+((255&u)>>>0)+", "+H.d(((4278190080&u)>>>24)/255)+")"},
cm:function(a,b){if(b==null){a.fillStyle=""
return}a.fillStyle=V.cK(b)},
cn:function(a,b){V.cm(a,b.b)},
L:function L(a){this.b=a},
a7:function a7(a){this.a=a},
ap:function ap(){this.b=null}},L={
bG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new L.aq(e,f,j,m,l)},
bH:function(a,b){b.font="14px sans-serif"
V.cn(b,a.cy)},
aq:function aq(a,b,c,d,e){var _=this
_.a=a
_.d=b
_.e=c
_.cx=d
_.cy=e
_.k1=_.id=_.fy=_.fx=_.fr=null},
ar:function ar(a,b){this.a=a
this.b=b},
R:function R(a){this.a=a},
as:function as(a){this.b=a},
aI:function aI(){},
aJ:function aJ(){},
aK:function aK(){},
V:function V(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.x=g
_.y=h
_.Q=i
_.ch=j
_.cx=k
_.cy=l
_.db=m
_.dx=n
_.dy=o}},E={
bT:function(){var u=T.cr(H.bc(document.querySelector("canvas"),"$im"))
u.x=new E.be(u)
u.C()},
be:function be(a){this.a=a}}
var w=[C,H,J,P,W,G,N,T,V,L,E]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bn.prototype={}
J.f.prototype={
h:function(a){return"Instance of '"+H.d(H.S(a))+"'"}}
J.ag.prototype={
h:function(a){return String(a)},
$iZ:1}
J.ai.prototype={
h:function(a){return"null"}}
J.P.prototype={
h:function(a){return String(a)}}
J.aw.prototype={}
J.t.prototype={}
J.A.prototype={
h:function(a){var u=a[$.bY()]
if(u==null)return this.F(a)
return"JavaScript function for "+H.d(J.a0(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.o.prototype={
h:function(a){return P.ck(a,"[","]")},
gj:function(a){return a.length}}
J.bm.prototype={}
J.a3.prototype={
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.bg(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.p.prototype={
B:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.D(""+a+".toInt()"))},
w:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.e(P.D(""+a+".ceil()"))},
T:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.D(""+a+".floor()"))},
A:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.D(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
n:function(a,b){return(a|0)===a?a/b|0:this.N(a,b)},
N:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.D("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
M:function(a,b){var u
if(a>0)u=this.L(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
L:function(a,b){return b>31?0:a>>>b},
$iw:1}
J.O.prototype={$ia_:1}
J.ah.prototype={}
J.q.prototype={
v:function(a,b){if(b>=a.length)throw H.e(H.cL(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.e(P.ca(b,null,null))
return a+b},
k:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ay(b,null))
if(b>c)throw H.e(P.ay(b,null))
if(c>a.length)throw H.e(P.ay(c,null))
return a.substring(b,c)},
D:function(a,b){return this.k(a,b,null)},
h:function(a){return a},
gj:function(a){return a.length},
$iU:1}
H.aL.prototype={
i:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.an.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aj.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.aO.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bh.prototype={
$1:function(a){if(!!J.I(a).$iz)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:1}
H.Y.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.y.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.J(t==null?"unknown":t)+"'"},
ga_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aH.prototype={}
H.aE.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.J(u)+"'"}}
H.K.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.S(u))+"'")}}
H.a5.prototype={
h:function(a){return this.a}}
H.aA.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.b9.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.ba.prototype={
$2:function(a,b){return this.a(a,b)}}
H.bb.prototype={
$1:function(a){return this.a(a)}}
P.aV.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:2}
P.aU.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.aW.prototype={
$0:function(){this.a.$0()}}
P.aX.prototype={
$0:function(){this.a.$0()}}
P.b2.prototype={
H:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.H(new P.b3(this,b),0),a)
else throw H.e(P.D("`setTimeout()` not found."))}}
P.b3.prototype={
$0:function(){this.b.$0()}}
P.X.prototype={}
P.aF.prototype={}
P.aG.prototype={}
P.b4.prototype={}
P.b5.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.Q():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.b0.prototype={
Y:function(a,b){var u,t,s,r=null
try{if(C.d===$.W){a.$1(b)
return}P.cC(r,r,this,a,b)}catch(s){u=H.d3(s)
t=H.cQ(s)
P.cB(r,r,this,u,t)}},
Z:function(a,b){return this.Y(a,b,null)},
O:function(a,b){return new P.b1(this,a,b)}}
P.b1.prototype={
$1:function(a){return this.a.Z(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.al.prototype={
R:function(a){var u,t,s,r,q=[],p=a.length
for(u=0,t=0,s=0;s<p;++s,t=r){r=C.a.v(a,s)
if(r!==13){if(r!==10)continue
if(t===13){u=s+1
continue}}q.push(C.a.k(a,u,s))
u=s+1}if(u<p)q.push(C.a.k(a,u,p))
return q}}
P.Z.prototype={
h:function(a){return this?"true":"false"}}
P.b8.prototype={}
P.M.prototype={
h:function(a){var u,t,s,r=new P.ad(),q=this.a
if(q<0)return"-"+new P.M(0-q).h(0)
u=r.$1(C.b.n(q,6e7)%60)
t=r.$1(C.b.n(q,1e6)%60)
s=new P.ac().$1(q%1e6)
return""+C.b.n(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.ac.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ad.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.z.prototype={}
P.Q.prototype={
h:function(a){return"Throw of null."}}
P.k.prototype={
gm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gl:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gm()+o+u
if(!q.a)return t
s=q.gl()
r=P.bl(q.b)
return t+s+": "+r}}
P.ax.prototype={
gm:function(){return"RangeError"},
gl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.af.prototype={
gm:function(){return"RangeError"},
gl:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.aP.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aN.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.a8.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bl(u)+"."}}
P.T.prototype={
h:function(a){return"Stack Overflow"},
$iz:1}
P.aa.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.b_.prototype={
h:function(a){return"Exception: "+this.a}}
P.a_.prototype={}
P.am.prototype={}
P.B.prototype={
h:function(a){return"null"}}
P.w.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.d(H.S(this))+"'"},
toString:function(){return this.h(this)}}
P.U.prototype={}
P.C.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.a1.prototype={
h:function(a){return String(a)}}
W.a2.prototype={
h:function(a){return String(a)}}
W.m.prototype={
u:function(a,b){return a.getContext(b)},
$im:1}
W.n.prototype={$in:1}
W.ab.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.N.prototype={
I:function(a,b,c,d){return a.addEventListener(b,H.H(c,1),!1)}}
W.ae.prototype={
gj:function(a){return a.length}}
W.r.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.E(a):u}}
W.aC.prototype={
gj:function(a){return a.length}}
W.E.prototype={
K:function(a,b){return a.requestAnimationFrame(H.H(b,1))},
J:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.aY.prototype={}
W.aZ.prototype={
$1:function(a){return this.a.$1(a)}}
G.bj.prototype={}
G.at.prototype={}
G.av.prototype={
S:function(){if(!this.c)return
this.c=!1
var u=this.a
return new G.at(H.bc((u&&C.j).u(u,"2d"),"$in"))}}
N.aB.prototype={
W:function(){var u=this.b
if(u==null)return
this.b=u.a},
X:function(a){var u,t=this
if(t.a==null){t.a=t.b=a
return}u=t.b
if(u==null)return
a.a=u
u.b.push(a)
t.b=a}}
N.ao.prototype={}
N.az.prototype={}
N.aD.prototype={}
T.a6.prototype={
q:function(a){var u,t,s
a.save()
a.beginPath()
u=this.d
t=u.a
s=u.b
a.rect(t,s,u.c-t,u.d-s)
u=this.e===C.u
if(u)a.save()
this.V(a)
if(u)a.restore()
a.restore()}}
T.a9.prototype={
V:function(a){var u,t,s
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.bg)(u),++s)u[s].q(a)}}
T.ak.prototype={}
T.au.prototype={
q:function(a){var u=this.c
a.drawImage(this.b.a.canvas,u.a,u.b)}}
V.L.prototype={
h:function(a){return this.b}}
V.a7.prototype={}
V.ap.prototype={}
L.aq.prototype={
U:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.a
g.toString
g=Math.floor(g)
a=new L.R(g)
if(a===h.k1)return
h.fy=g
h.fx=16
u=C.c.w(g)
u=W.bk(J.by(h.fx),u).getContext("2d")
h.fr=u
L.bH(h,u)
h.id=0
t=C.r.R(h.cx)
s=[]
for(u=t.length,r=0;r<t.length;t.length===u||(0,H.bg)(t),++r){q=t[r]
p=h.fr.measureText(q).width
p.toString
h.id=Math.max(H.bP(h.id),H.bP(p))
o=q.split("")
for(n="",m=0;m<o.length;++m){l=o[m]
k=J.c8(n,l)
p=h.fr.measureText(k).width
p.toString
H.bv(k)
H.bv(H.d(p))
if(p>g&&m>0){s.push(n)
h.fx=h.fx+16
n=l}else n=k}s.push(n)
h.fx=h.fx+16}P.cY(h.fx)
g=J.by(h.fy)
g=W.bk(J.c9(h.fx),g).getContext("2d")
h.fr=g
L.bH(h,g)
for(g=s.length,j=14,r=0;r<s.length;s.length===g||(0,H.bg)(s),++r){n=s[r]
u=h.fr
i=h.fy
u.toString
if(i!=null)u.fillText(n,0,j,i)
else u.fillText(n,0,j)
j+=16}h.k1=a}}
L.ar.prototype={
P:function(){var u,t,s,r,q,p,o,n=null,m=this.a.b,l=this.b,k=n,j=k,i=j,h=i,g=h,f=g,e=f,d=e,c=d,b=c,a=b,a0=a,a1=a0,a2=a1,a3=a2,a4=0
while(!0){if(!!1)break
u=H.bc(l[a4],"$iV")
a3=u.a
a2=u.b
a1=u.c
a0=u.d
a=u.f
b=u.r
c=u.x
d=u.y
e=u.Q
f=u.ch
g=u.cx
h=u.cy
i=u.db
j=u.dx
k=u.dy;++a4}t=new V.ap()
t.b=new V.a7(4294901760)
s=l.length
if(a4>=s)return L.bG(i,a2,a0,n,d,e,b,a,f,h,n,t,"",k,n,m,g)
r=new P.C("")
q=""
while(!0){p=a4<s
if(!(p&&!0))break
o=a4+1
q+=l[a4]
r.a=q
a4=o}for(;p;)return
l=r.a
return L.bG(new L.V(a3,a2,a1,a0,a,b,c,d,e,f,g,h,i,j,k).db,a2,a0,n,d,e,b,a,f,h,n,t,l.charCodeAt(0)==0?l:l,k,n,m,g)}}
L.R.prototype={}
L.as.prototype={}
L.aI.prototype={
h:function(a){return"TextAlign.left"}}
L.aJ.prototype={
h:function(a){return"TextDecorationStyle.solid"}}
L.aK.prototype={
h:function(a){return"TextDirection.ltr"}}
L.V.prototype={}
T.aQ.prototype={
G:function(a){var u=new T.aR(this)
u.$0()
this.c=this.b.getContext("2d")
W.cw(window,"resize",new T.aS(u),!1)},
C:function(){if(!this.a){this.a=!0
var u=window
C.f.J(u)
C.f.K(u,W.bL(new T.aT(this),P.w))}}}
T.aR.prototype={
$0:function(){var u,t,s,r,q=window.devicePixelRatio
q.toString
u=this.a
t=q===0?1:q
u.f=t
s=u.b
r=u.d=s.clientWidth*t
t=s.clientHeight*t
u.e=t
u.r=new N.aD(r,t)
s.width=C.c.B(r)
s.height=J.bA(u.e)}}
T.aS.prototype={
$1:function(a){this.a.$0()}}
T.aT.prototype={
$1:function(a){var u,t=this.a
t.a=!1
u=J.bA(a)
t=t.x
if(t!=null)t.$1(new P.M(1000*u))}}
E.be.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m=this.a,l=m.f,k=m.r,j=k.a/l
k=k.b/l
u=[]
u.push("Hello world!")
t=new L.ar(new L.as(C.y),u).P()
t.U(new L.R(j))
u=0+j*l
s=0+k*l
r=new N.az(0,0,u,s)
q=new G.av()
q.b=r
q.c=!0
u=C.c.A(u-0)
u=W.bk(C.c.A(s-0),u)
q.a=u
u=H.bc(C.j.u(u,"2d"),"$in")
u.scale(l,l)
s=t.id
p=t.fx
u.drawImage(t.fr.canvas,(j-s)/2,(k-p)/2)
o=q.S()
n=new N.aB()
n.X(new T.a6(r,C.t,[]))
p=n.b
k=new T.au(o,C.x)
p.toString
k.a=p
p.b.push(k)
n.W()
k=n.a
m.c.clearRect(0,0,m.d,m.e)
k.q(m.c)}};(function aliases(){var u=J.f.prototype
u.E=u.h
u=J.P.prototype
u.F=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"cH","ct",0)
u(P,"cI","cu",0)
u(P,"cJ","cv",0)
t(P,"bO","cF",3)})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.h,null)
t(P.h,[H.bn,J.f,J.a3,H.aL,P.z,H.y,H.Y,P.b2,P.X,P.aF,P.aG,P.b4,P.Z,P.w,P.M,P.T,P.b_,P.am,P.B,P.U,P.C,G.bj,G.at,G.av,N.aB,N.ao,N.az,N.aD,T.ak,V.L,V.a7,V.ap,L.aq,L.ar,L.R,L.as,L.aI,L.aJ,L.aK,L.V,T.aQ])
t(J.f,[J.ag,J.ai,J.P,J.o,J.p,J.q,W.N,W.n,W.ab,W.a])
t(J.P,[J.aw,J.t,J.A])
u(J.bm,J.o)
t(J.p,[J.O,J.ah])
t(P.z,[H.an,H.aj,H.aO,H.a5,H.aA,P.Q,P.k,P.aP,P.aN,P.a8,P.aa])
t(H.y,[H.bh,H.aH,H.b9,H.ba,H.bb,P.aV,P.aU,P.aW,P.aX,P.b3,P.b5,P.b1,P.ac,P.ad,W.aZ,T.aR,T.aS,T.aT,E.be])
t(H.aH,[H.aE,H.K])
u(P.b0,P.b4)
u(P.al,P.aG)
t(P.w,[P.b8,P.a_])
t(P.k,[P.ax,P.af])
t(W.N,[W.r,W.E])
u(W.b,W.r)
u(W.c,W.b)
t(W.c,[W.a1,W.a2,W.m,W.ae,W.aC])
u(W.aY,P.aF)
t(T.ak,[T.a9,T.au])
u(T.a6,T.a9)})()
var v={mangledGlobalNames:{a_:"int",b8:"double",w:"num",U:"String",Z:"bool",B:"Null",am:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function constants(){C.j=W.m.prototype
C.v=J.f.prototype
C.b=J.O.prototype
C.c=J.p.prototype
C.a=J.q.prototype
C.w=J.A.prototype
C.k=J.aw.prototype
C.e=J.t.prototype
C.f=W.E.prototype
C.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.l=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.n=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.o=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.i=function(hooks) { return hooks; }

C.r=new P.al()
C.d=new P.b0()
C.t=new V.L("Clip.antiAlias")
C.u=new V.L("Clip.antiAliasWithSaveLayer")
C.x=new N.ao(0,0)
C.z=new L.aI()
C.A=new L.aJ()
C.y=new L.aK()})();(function staticFields(){$.i=0
$.x=null
$.bB=null
$.bS=null
$.bM=null
$.bV=null
$.b7=null
$.bd=null
$.bt=null
$.u=null
$.F=null
$.G=null
$.bp=!1
$.W=C.d
$.b6=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"d4","bY",function(){return H.bQ("_$dart_dartClosure")})
u($,"d5","bw",function(){return H.bQ("_$dart_js")})
u($,"d7","bZ",function(){return H.j(H.aM({
toString:function(){return"$receiver$"}}))})
u($,"d8","c_",function(){return H.j(H.aM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"d9","c0",function(){return H.j(H.aM(null))})
u($,"da","c1",function(){return H.j(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dd","c4",function(){return H.j(H.aM(void 0))})
u($,"de","c5",function(){return H.j(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dc","c3",function(){return H.j(H.bI(null))})
u($,"db","c2",function(){return H.j(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dg","c7",function(){return H.j(H.bI(void 0))})
u($,"df","c6",function(){return H.j(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dh","bx",function(){return P.cs()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.f,CanvasPattern:J.f,DOMError:J.f,MediaError:J.f,NavigatorUserMediaError:J.f,OverconstrainedError:J.f,PositionError:J.f,TextMetrics:J.f,WebGLRenderingContext:J.f,WebGL2RenderingContext:J.f,SQLError:J.f,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.a1,HTMLAreaElement:W.a2,HTMLCanvasElement:W.m,CanvasRenderingContext2D:W.n,DOMException:W.ab,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,EventTarget:W.N,HTMLFormElement:W.ae,Document:W.r,HTMLDocument:W.r,Node:W.r,HTMLSelectElement:W.aC,Window:W.E,DOMWindow:W.E})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(E.bT,[])
else E.bT([])})})()
//# sourceMappingURL=hello_world.dart.js.map
