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
a[c]=function(){a[c]=function(){H.de(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bA(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={bv:function bv(){},
V:function(a){var u,t=H.df(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
d2:function(a){return v.types[a]},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.f(H.c1(a))
return u},
M:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
a3:function(a){return H.cA(a)+H.c_(H.bC(a),0,null)},
cA:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.p(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.r||!!l.$iP){r=C.h(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.j.aa(t,0)===36){if(1>n)H.ag(P.bx(1,m))
if(n>n)H.ag(P.bx(n,m))
t=t.substring(1,n)}return H.V(t)},
c3:function(a,b){var u,t="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.q(!0,b,t,null)
u=J.bH(a)
if(b<0||b>=u)return P.cx(b,a,t,null,u)
return P.bx(b,t)},
c1:function(a){return new P.q(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.a1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ca})
u.name=""}else u.toString=H.ca
return u},
ca:function(){return J.ai(this.dartException)},
ag:function(a){throw H.f(a)},
af:function(a){throw H.f(P.bP(a))},
m:function(a){var u,t,s,r,q,p
a=H.dc(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=[]
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
bW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
bU:function(a,b){return new H.aN(a,b==null?null:b.method)},
bw:function(a,b){var u=b==null,t=u?null:b.method
return new H.aG(a,t,u?null:b.receiver)},
cb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.br(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.b.A(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bw(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.bU(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cd()
q=$.ce()
p=$.cf()
o=$.cg()
n=$.cj()
m=$.ck()
l=$.ci()
$.ch()
k=$.cm()
j=$.cl()
i=r.l(u)
if(i!=null)return f.$1(H.bw(u,i))
else{i=q.l(u)
if(i!=null){i.method="call"
return f.$1(H.bw(u,i))}else{i=p.l(u)
if(i==null){i=o.l(u)
if(i==null){i=n.l(u)
if(i==null){i=m.l(u)
if(i==null){i=l.l(u)
if(i==null){i=o.l(u)
if(i==null){i=k.l(u)
if(i==null){i=j.l(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.bU(u,i))}}return f.$1(new H.b0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.a5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.q(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.a5()
return a},
d1:function(a){var u
if(a==null)return new H.ab(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ab(a)},
d8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.b8("Unsupported number of arguments for wrapped closure"))},
B:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.d8)
a.$identity=u
return u},
cv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aV().constructor.prototype):Object.create(new H.E(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.l
$.l=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.bO(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cr(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.bO(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cr:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.d2,a)
if(typeof a=="function")if(b)return a
else{u=c?H.bM:H.bs
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
cs:function(a,b,c,d){var u=H.bs
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bO:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cu(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cs(t,!r,u,b)
if(t===0){r=$.l
$.l=r+1
p="self"+H.d(r)
r="return function(){var "+p+" = this."
q=$.F
return new Function(r+H.d(q==null?$.F=H.am("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.l
$.l=r+1
o+=H.d(r)
r="return function("+o+"){return this."
q=$.F
return new Function(r+H.d(q==null?$.F=H.am("self"):q)+"."+H.d(u)+"("+o+");}")()},
ct:function(a,b,c,d){var u=H.bs,t=H.bM
switch(b?-1:a){case 0:throw H.f(H.cB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cu:function(a,b){var u,t,s,r,q,p,o,n=$.F
if(n==null)n=$.F=H.am("self")
u=$.bL
if(u==null)u=$.bL=H.am("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ct(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.l
$.l=u+1
return new Function(n+H.d(u)+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.l
$.l=u+1
return new Function(n+H.d(u)+"}")()},
bA:function(a,b,c,d,e,f,g){return H.cv(a,b,c,d,!!e,!!f,g)},
bs:function(a){return a.a},
bM:function(a){return a.c},
am:function(a){var u,t,s,r=new H.E("self","target","receiver","name"),q=J.bR(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
d6:function(a){if(typeof a==="number"&&Math.floor(a)===a||a==null)return a
throw H.f(H.bN(a,"int"))},
db:function(a,b){throw H.f(H.bN(a,H.V(b.substring(2))))},
d7:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else u=!0
if(u)return a
H.db(a,b)},
cY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
bN:function(a,b){return new H.ap("CastError: "+P.bt(a)+": type '"+H.d(H.cT(a))+"' is not a subtype of type '"+b+"'")},
cT:function(a){var u,t=J.p(a)
if(!!t.$iH){u=H.cY(t)
if(u!=null)return H.dd(u)
return"Closure"}return H.a3(a)},
de:function(a){throw H.f(new P.as(a))},
cB:function(a){return new H.aS(a)},
c4:function(a){return v.getIsolateTag(a)},
dy:function(a,b){a.$ti=b
return a},
bC:function(a){if(a==null)return
return a.$ti},
dx:function(a,b,c){return H.c9(a["$a"+H.d(c)],H.bC(b))},
dd:function(a){return H.w(a,null)},
w:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.V(a[0].name)+H.c_(a,1,b)
if(typeof a=="function")return H.V(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
return H.d(b[b.length-a-1])}if('func' in a)return H.cM(a,b)
if('futureOr' in a)return"FutureOr<"+H.w("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cM:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=[]
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.j.Z(p+o,a0[a0.length-q-1])
n=u[q]
if(n!=null&&n!==P.j)p+=" extends "+H.w(n,a0)}p+=">"}else{p=""
t=null}m=!!a.v?"void":H.w(a.ret,a0)
if("args" in a){l=a.args
for(k=l.length,j="",i="",h=0;h<k;++h,i=b){g=l[h]
j=j+i+H.w(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(k=f.length,i="",h=0;h<k;++h,i=b){g=f[h]
j=j+i+H.w(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(k=H.cZ(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.w(e[c],a0)+(" "+H.d(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
c_:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.O("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.w(p,c)}return"<"+u.h(0)+">"},
c9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dv:function(a,b,c){return a.apply(b,H.c9(J.p(b)["$a"+H.d(c)],H.bC(b)))},
dw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
d9:function(a){var u,t,s,r,q=$.c5.$1(a),p=$.bh[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.c0.$2(a,q)
if(q!=null){p=$.bh[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bq(u)
$.bh[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bl[q]=u
return u}if(s==="-"){r=H.bq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.c7(a,u)
if(s==="*")throw H.f(P.bX(q))
if(v.leafTags[q]===true){r=H.bq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.c7(a,u)},
c7:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bq:function(a){return J.bE(a,!1,null,!!a.$idi)},
da:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bq(u)
else return J.bE(u,c,null,null)},
d4:function(){if(!0===$.bD)return
$.bD=!0
H.d5()},
d5:function(){var u,t,s,r,q,p,o,n
$.bh=Object.create(null)
$.bl=Object.create(null)
H.d3()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.c8.$1(q)
if(p!=null){o=H.da(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
d3:function(){var u,t,s,r,q,p,o=C.l()
o=H.A(C.m,H.A(C.n,H.A(C.i,H.A(C.i,H.A(C.o,H.A(C.p,H.A(C.q(C.h),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.c5=new H.bi(r)
$.c0=new H.bj(q)
$.c8=new H.bk(p)},
A:function(a,b){return a(b)||b},
dc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aY:function aY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aN:function aN(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a},
br:function br(a){this.a=a},
ab:function ab(a){this.a=a
this.b=null},
H:function H(){},
aX:function aX(){},
aV:function aV(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a){this.a=a},
aS:function aS(a){this.a=a},
aF:function aF(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
aH:function aH(a,b){this.a=a
this.b=b
this.c=null},
bi:function bi(a){this.a=a},
bj:function bj(a){this.a=a},
bk:function bk(a){this.a=a},
a4:function(a,b,c,d){if(c-b<=32)H.cD(a,b,c,d)
else H.cC(a,b,c,d)},
cD:function(a,b,c,d){var u,t,s,r
for(u=b+1;u<=c;++u){t=a[u]
s=u
while(!0){if(!(s>b&&d.$2(a[s-1],t)>0))break
r=s-1
C.a.i(a,s,a[r])
s=r}C.a.i(a,s,t)}},
cC:function(a0,a1,a2,a3){var u,t,s,r,q,p,o,n,m,l,k=C.b.u(a2-a1+1,6),j=a1+k,i=a2-k,h=C.b.u(a1+a2,2),g=h-k,f=h+k,e=a0[j],d=a0[g],c=a0[h],b=a0[f],a=a0[i]
if(a3.$2(e,d)>0){u=d
d=e
e=u}if(a3.$2(b,a)>0){u=a
a=b
b=u}if(a3.$2(e,c)>0){u=c
c=e
e=u}if(a3.$2(d,c)>0){u=c
c=d
d=u}if(a3.$2(e,b)>0){u=b
b=e
e=u}if(a3.$2(c,b)>0){u=b
b=c
c=u}if(a3.$2(d,a)>0){u=a
a=d
d=u}if(a3.$2(d,c)>0){u=c
c=d
d=u}if(a3.$2(b,a)>0){u=a
a=b
b=u}C.a.i(a0,j,e)
C.a.i(a0,h,c)
C.a.i(a0,i,a)
C.a.i(a0,g,a0[a1])
C.a.i(a0,f,a0[a2])
t=a1+1
s=a2-1
if(J.ah(a3.$2(d,b),0)){for(r=t;r<=s;++r){q=a0[r]
p=a3.$2(q,d)
if(p===0)continue
if(p<0){if(r!==t){C.a.i(a0,r,a0[t])
C.a.i(a0,t,q)}++t}else for(;!0;){p=a3.$2(a0[s],d)
if(p>0){--s
continue}else{o=s-1
if(p<0){C.a.i(a0,r,a0[t])
n=t+1
C.a.i(a0,t,a0[s])
C.a.i(a0,s,q)
s=o
t=n
break}else{C.a.i(a0,r,a0[s])
C.a.i(a0,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=a0[r]
if(a3.$2(q,d)<0){if(r!==t){C.a.i(a0,r,a0[t])
C.a.i(a0,t,q)}++t}else if(a3.$2(q,b)>0)for(;!0;)if(a3.$2(a0[s],b)>0){--s
if(s<r)break
continue}else{o=s-1
if(a3.$2(a0[s],d)<0){C.a.i(a0,r,a0[t])
n=t+1
C.a.i(a0,t,a0[s])
C.a.i(a0,s,q)
t=n}else{C.a.i(a0,r,a0[s])
C.a.i(a0,s,q)}s=o
break}}m=!1}l=t-1
C.a.i(a0,a1,a0[l])
C.a.i(a0,l,d)
l=s+1
C.a.i(a0,a2,a0[l])
C.a.i(a0,l,b)
H.a4(a0,a1,t-2,a3)
H.a4(a0,s+2,a2,a3)
if(m)return
if(t<j&&s>i){for(;J.ah(a3.$2(a0[t],d),0);)++t
for(;J.ah(a3.$2(a0[s],b),0);)--s
for(r=t;r<=s;++r){q=a0[r]
if(a3.$2(q,d)===0){if(r!==t){C.a.i(a0,r,a0[t])
C.a.i(a0,t,q)}++t}else if(a3.$2(q,b)===0)for(;!0;)if(a3.$2(a0[s],b)===0){--s
if(s<r)break
continue}else{o=s-1
if(a3.$2(a0[s],d)<0){C.a.i(a0,r,a0[t])
n=t+1
C.a.i(a0,t,a0[s])
C.a.i(a0,s,q)
t=n}else{C.a.i(a0,r,a0[s])
C.a.i(a0,s,q)}s=o
break}}H.a4(a0,t,s,a3)}else H.a4(a0,t,s,a3)},
cZ:function(a){return J.cz(a?Object.keys(a):[])},
df:function(a){return v.mangledGlobalNames[a]}},J={
bE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bB:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bD==null){H.d4()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.bX("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bF()]
if(r!=null)return r
r=H.d9(a)
if(r!=null)return r
if(typeof a=="function")return C.t
u=Object.getPrototypeOf(a)
if(u==null)return C.k
if(u===Object.prototype)return C.k
if(typeof s=="function"){Object.defineProperty(s,$.bF(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
cz:function(a){return J.bR(a)},
bR:function(a){a.fixed$length=Array
return a},
p:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.Z.prototype
return J.aD.prototype}if(typeof a=="string")return J.L.prototype
if(a==null)return J.aE.prototype
if(typeof a=="boolean")return J.aC.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.bB(a)},
d_:function(a){if(typeof a=="string")return J.L.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.bB(a)},
d0:function(a){if(typeof a=="number")return J.K.prototype
if(a==null)return a
if(!(a instanceof P.j))return J.P.prototype
return a},
ae:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.bB(a)},
ah:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).q(a,b)},
cn:function(a,b,c,d){return J.ae(a).a9(a,b,c,d)},
co:function(a,b,c,d){return J.ae(a).ad(a,b,c,d)},
cp:function(a){return J.ae(a).gB(a)},
W:function(a){return J.p(a).gj(a)},
bH:function(a){return J.d_(a).gk(a)},
bI:function(a){return J.ae(a).gt(a)},
bJ:function(a){return J.ae(a).gap(a)},
bK:function(a){return J.d0(a).an(a)},
ai:function(a){return J.p(a).h(a)},
i:function i(){},
aC:function aC(){},
aE:function aE(){},
a_:function a_(){},
aP:function aP(){},
P:function P(){},
y:function y(){},
x:function x(){},
bu:function bu(){},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
K:function K(){},
Z:function Z(){},
aD:function aD(){},
L:function L(){}},P={
cG:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.cV()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.B(new P.b3(s),1)).observe(u,{childList:true})
return new P.b2(s,u,t)}else if(self.setImmediate!=null)return P.cW()
return P.cX()},
cH:function(a){self.scheduleImmediate(H.B(new P.b4(a),0))},
cI:function(a){self.setImmediate(H.B(new P.b5(a),0))},
cJ:function(a){P.cK(0,a)},
bV:function(a,b){var u=C.b.u(a.a,1000)
return P.cL(u<0?0:u,b)},
cK:function(a,b){var u=new P.ac()
u.a7(a,b)
return u},
cL:function(a,b){var u=new P.ac()
u.a8(a,b)
return u},
cN:function(){var u,t
for(;u=$.z,u!=null;){$.S=null
t=u.b
$.z=t
if(t==null)$.R=null
u.a.$0()}},
cS:function(){$.bz=!0
try{P.cN()}finally{$.S=null
$.bz=!1
if($.z!=null)$.bG().$1(P.c2())}},
cQ:function(a){var u=new P.a9(a)
if($.z==null){$.z=$.R=u
if(!$.bz)$.bG().$1(P.c2())}else $.R=$.R.b=u},
cR:function(a){var u,t,s=$.z
if(s==null){P.cQ(a)
$.S=$.R
return}u=new P.a9(a)
t=$.S
if(t==null){u.b=s
$.z=$.S=u}else{u.b=t.b
$.S=t.b=u
if(u.b==null)$.R=u}},
cF:function(a,b){var u=$.Q
if(u===C.c)return P.bV(a,b)
return P.bV(a,u.V(b,P.a7))},
cO:function(a,b,c,d,e){var u={}
u.a=d
P.cR(new P.bg(u,e))},
cP:function(a,b,c,d,e){var u,t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
b3:function b3(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a},
b5:function b5(a){this.a=a},
ac:function ac(){this.c=0},
be:function be(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a){this.a=a
this.b=null},
aW:function aW(){},
a7:function a7(){},
bf:function bf(){},
bg:function bg(a,b){this.a=a
this.b=b},
bb:function bb(){},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function(){return new H.aF()},
cy:function(a,b,c){var u,t
if(P.bZ(a))return b+"..."+c
u=new P.O(b)
$.T.push(a)
try{t=u
t.a=P.cE(t.a,a,", ")}finally{$.T.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
bZ:function(a){var u,t
for(u=$.T.length,t=0;t<u;++t)if(a===$.T[t])return!0
return!1},
bT:function(a){var u,t={}
if(P.bZ(a))return"{...}"
u=new P.O("")
try{$.T.push(a)
u.a+="{"
t.a=!0
a.ah(0,new P.aK(t,u))
u.a+="}"}finally{$.T.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
aJ:function aJ(){},
aK:function aK(a,b){this.a=a
this.b=b},
aL:function aL(){},
cw:function(a){if(a instanceof H.H)return a.h(0)
return"Instance of '"+H.d(H.a3(a))+"'"},
cE:function(a,b,c){var u=new J.al(b,b.length)
if(!u.O())return a
if(c.length===0){do a+=H.d(u.d)
while(u.O())}else{a+=H.d(u.d)
for(;u.O();)a=a+c+H.d(u.d)}return a},
bt:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cw(a)},
cq:function(a,b,c){return new P.q(!0,a,b,c)},
bx:function(a,b){return new P.aR(null,null,!0,a,b,"Value not in range")},
cx:function(a,b,c,d,e){var u=e==null?J.bH(b):e
return new P.aB(u,!0,a,c,"Index out of range")},
v:function(a){return new P.b1(a)},
bX:function(a){return new P.b_(a)},
bP:function(a){return new P.aq(a)},
ad:function ad(){},
U:function U(){},
I:function I(a){this.a=a},
au:function au(){},
av:function av(){},
J:function J(){},
a1:function a1(){},
q:function q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aB:function aB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b1:function b1(a){this.a=a},
b_:function b_(a){this.a=a},
aq:function aq(a){this.a=a},
a5:function a5(){},
as:function as(a){this.a=a},
b8:function b8(a){this.a=a},
C:function C(){},
aI:function aI(){},
u:function u(){},
D:function D(){},
j:function j(){},
a6:function a6(){},
O:function O(a){this.a=a},
bY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ba:function ba(){},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
by:function(a,b,c,d){var u=W.cU(new W.b7(c),W.b)
u=new W.b6(a,b,u,!1)
u.U()
return u},
cU:function(a,b){var u=$.Q
if(u===C.c)return a
return u.V(a,b)},
c:function c(){},
aj:function aj(){},
ak:function ak(){},
G:function G(){},
r:function r(){},
at:function at(){},
a:function a(){},
b:function b(){},
X:function X(){},
ay:function ay(){},
aA:function aA(){},
t:function t(){},
k:function k(){},
aU:function aU(){},
n:function n(){},
a8:function a8(){},
b6:function b6(a,b,c,d){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d},
b7:function b7(a){this.a=a}},G={ao:function ao(a,b,c,d,e,f){var _=this
_.y=a
_.z=b
_.a=c
_.b=d
_.c=e
_.d=f
_.x=_.r=_.f=_.e=null}},R={an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=500
_.r=d},ar:function ar(a,b){this.a=a
this.b=b}},T={aw:function aw(){}},U={ax:function ax(){},b9:function b9(){}},F={
bQ:function(a,b,c,d){var u=a.a,t=b.a,s=c.a,r=d.a,q=a.b,p=b.b,o=c.b,n=d.b,m=a.c,l=b.c,k=c.c,j=d.c
return new F.Y(a,b,c,d,new A.e(0,0,0),[[0,0],[0,0],[0,0]],new A.e(0,0,0),null,(u+t+s+r)/4,(q+p+o+n)/4,(m+l+k+j)/4)},
Y:function Y(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.a$=e
_.b$=f
_.c$=g
_.d$=h
_.a=i
_.b=j
_.c=k},
aa:function aa(){},
c6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=-100,h={},g=document,f=H.d7(g.querySelector("#canvas"),"$iG"),e=window.innerWidth,d=window.innerHeight,c=new R.an(new A.e(0,200,400),new A.e(0,1,0),new A.e(0,0,0),Z.o())
c.p()
c.e=300
c.p()
u=new N.aT([])
t=[]
s=[]
r=new R.ar(t,s)
t.push(new Y.h(new A.e(0,0,0),100,100,i))
t.push(new Y.h(new A.e(0,0,0),100,i,i))
t.push(new Y.h(new A.e(0,0,0),i,i,i))
t.push(new Y.h(new A.e(0,0,0),i,100,i))
t.push(new Y.h(new A.e(0,0,0),100,100,100))
t.push(new Y.h(new A.e(0,0,0),100,i,100))
t.push(new Y.h(new A.e(0,0,0),i,i,100))
t.push(new Y.h(new A.e(0,0,0),i,100,100))
r.n(0,1,2,3)
r.n(4,7,6,5)
r.n(0,4,5,1)
r.n(1,5,6,2)
r.n(2,6,7,3)
r.n(4,0,3,7)
for(q=0;q<s.length;++q)s[q].d$=4278190080+(C.d.L(C.e.P()*128)<<16>>>0)+(C.d.L(C.e.P()*128+128)<<8>>>0)+C.d.L(C.e.P()*128+128)
t=new A.e(0,0,0)
p=new K.a0(r,null,t,new A.e(0,0,0),new A.e(1,1,1),Z.o(),new A.e(0,0,0))
t.b=150
p.p()
t=u.a
t.push(p)
s=[]
o=new K.aQ(s,[])
s.push(new Y.h(new A.e(0,0,0),i,100,0))
s.push(new Y.h(new A.e(0,0,0),100,100,0))
s.push(new Y.h(new A.e(0,0,0),100,i,0))
s.push(new Y.h(new A.e(0,0,0),i,i,0))
o.n(0,1,2,3)
s=new A.e(0,0,0)
n=new K.a0(o,4293848814,new A.e(0,0,0),s,new A.e(1,1,1),Z.o(),new A.e(0,0,0))
s.a=1.5707963267948966
n.p()
t.push(n)
m=new G.ao(f,f.getContext("2d"),Z.o(),[],P.bS(),P.bS())
e.toString
d.toString
m.a5(e,d)
f.width=J.bK(e)
f.height=J.bK(d)
g.body.appendChild(f)
h.a=h.b=null
h.c=h.d=h.e=h.f=0
l=e/2
W.by(g,"mousedown",new F.bm(h,l),!1)
k=W.by(g,"mousemove",new F.bn(h,l),!1)
k.C(0)
h.b=k
j=W.by(g,"mouseup",new F.bo(h),!1)
j.C(0)
h.a=j
m.D(u,c)
P.cF(new P.I(16e3),new F.bp(h,p,n,m,u,c))},
bm:function bm(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
bo:function bo(a){this.a=a},
bp:function bp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}},N={az:function az(){},aT:function aT(a){this.a=a}},Z={
o:function(){return new Z.aM()},
aM:function aM(){var _=this
_.a=1
_.e=_.d=_.c=_.b=0
_.f=1
_.z=_.y=_.x=_.r=0
_.Q=1
_.ch=0}},A={e:function e(a,b,c){this.a=a
this.b=b
this.c=c}},Y={h:function h(a,b,c,d){var _=this
_.f=a
_.x=!1
_.a=b
_.b=c
_.c=d}},K={a0:function a0(a,b,c,d,e,f,g){var _=this
_.f=a
_.r=b
_.a=c
_.b=d
_.c=e
_.d=f
_.e=g},aQ:function aQ(a,b){this.a=a
this.b=b}},M={aO:function aO(){}},E={N:function N(){}}
var w=[C,H,J,P,W,G,R,T,U,F,N,Z,A,Y,K,M,E]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bv.prototype={}
J.i.prototype={
q:function(a,b){return a===b},
gj:function(a){return H.M(a)},
h:function(a){return"Instance of '"+H.d(H.a3(a))+"'"}}
J.aC.prototype={
h:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$iad:1}
J.aE.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gj:function(a){return 0}}
J.a_.prototype={
gj:function(a){return 0},
h:function(a){return String(a)}}
J.aP.prototype={}
J.P.prototype={}
J.y.prototype={
h:function(a){var u=a[$.cc()]
if(u==null)return this.a3(a)
return"JavaScript function for "+H.d(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.x.prototype={
h:function(a){return P.cy(a,"[","]")},
gj:function(a){return H.M(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.ag(P.v("set length"))
a.length=b},
i:function(a,b,c){if(!!a.immutable$list)H.ag(P.v("indexed set"))
if(b>=a.length||b<0)throw H.f(H.c3(a,b))
a[b]=c}}
J.bu.prototype={}
J.al.prototype={
O:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.af(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.K.prototype={
af:function(a,b){var u
if(typeof b!=="number")throw H.f(H.c1(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gN(b)
if(this.gN(a)===u)return 0
if(this.gN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gN:function(a){return a===0?1/a<0:a<0},
an:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.v(""+a+".toInt()"))},
L:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.v(""+a+".floor()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
a6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.T(a,b)},
u:function(a,b){return(a|0)===a?a/b|0:this.T(a,b)},
T:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.v("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
A:function(a,b){var u
if(a>0)u=this.ae(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ae:function(a,b){return b>31?0:a>>>b},
$iD:1}
J.Z.prototype={$iC:1}
J.aD.prototype={}
J.L.prototype={
aa:function(a,b){if(b>=a.length)throw H.f(H.c3(a,b))
return a.charCodeAt(b)},
Z:function(a,b){if(typeof b!=="string")throw H.f(P.cq(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ia6:1}
H.aY.prototype={
l:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.aN.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aG.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.b0.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.br.prototype={
$1:function(a){if(!!J.p(a).$iJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:1}
H.ab.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.H.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.V(t==null?"unknown":t)+"'"},
gaq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aX.prototype={}
H.aV.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.V(u)+"'"}}
H.E.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.E))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gj:function(a){var u,t=this.c
if(t==null)u=H.M(this.a)
else u=typeof t!=="object"?J.W(t):H.M(t)
return(u^H.M(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.a3(u))+"'")}}
H.ap.prototype={
h:function(a){return this.a}}
H.aS.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.aF.prototype={
gk:function(a){return this.a},
ag:function(a){var u
if((a&0x3ffffff)===a){u=this.c
if(u==null)return!1
return this.ab(u,a)}else return this.ai(a)},
ai:function(a){var u=this.d
if(u==null)return!1
return this.M(this.G(u,C.b.gj(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.w(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.w(r,b)
s=t==null?null:t.b
return s}else return q.aj(b)},
aj:function(a){var u,t,s=this.d
if(s==null)return
u=this.G(s,J.W(a)&0x3ffffff)
t=this.M(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.S(u==null?o.b=o.H():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.S(t==null?o.c=o.H():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.H()
r=J.W(b)&0x3ffffff
q=o.G(s,r)
if(q==null)o.J(s,r,[o.I(b,c)])
else{p=o.M(q,b)
if(p>=0)q[p].b=c
else q.push(o.I(b,c))}}},
ah:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bP(u))
t=t.c}},
S:function(a,b,c){var u=this.w(a,b)
if(u==null)this.J(a,b,this.I(b,c))
else u.b=c},
I:function(a,b){var u=this,t=new H.aH(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
M:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.ah(a[t].a,b))return t
return-1},
h:function(a){return P.bT(this)},
w:function(a,b){return a[b]},
G:function(a,b){return a[b]},
J:function(a,b,c){a[b]=c},
ac:function(a,b){delete a[b]},
ab:function(a,b){return this.w(a,b)!=null},
H:function(){var u="<non-identifier-key>",t=Object.create(null)
this.J(t,u,t)
this.ac(t,u)
return t}}
H.aH.prototype={}
H.bi.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.bj.prototype={
$2:function(a,b){return this.a(a,b)}}
H.bk.prototype={
$1:function(a){return this.a(a)}}
P.b3.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:2}
P.b2.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.b4.prototype={
$0:function(){this.a.$0()}}
P.b5.prototype={
$0:function(){this.a.$0()}}
P.ac.prototype={
a7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.B(new P.be(this,b),0),a)
else throw H.f(P.v("`setTimeout()` not found."))},
a8:function(a,b){if(self.setTimeout!=null)self.setInterval(H.B(new P.bd(this,a,Date.now(),b),0),a)
else throw H.f(P.v("Periodic timer."))},
$ia7:1}
P.be.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.bd.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.b.a6(u,q)}s.c=r
t.d.$1(s)}}
P.a9.prototype={}
P.aW.prototype={}
P.a7.prototype={}
P.bf.prototype={}
P.bg.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.a1():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.bb.prototype={
al:function(a,b){var u,t,s,r=null
try{if(C.c===$.Q){a.$1(b)
return}P.cP(r,r,this,a,b)}catch(s){u=H.cb(s)
t=H.d1(s)
P.cO(r,r,this,u,t)}},
am:function(a,b){return this.al(a,b,null)},
V:function(a,b){return new P.bc(this,a,b)}}
P.bc.prototype={
$1:function(a){return this.a.am(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.aJ.prototype={}
P.aK.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:3}
P.aL.prototype={
gk:function(a){return this.a},
h:function(a){return P.bT(this)}}
P.ad.prototype={
gj:function(a){return P.j.prototype.gj.call(this,this)},
h:function(a){return this?"true":"false"}}
P.U.prototype={}
P.I.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.I&&this.a===b.a},
gj:function(a){return C.b.gj(this.a)},
h:function(a){var u,t,s,r=new P.av(),q=this.a
if(q<0)return"-"+new P.I(0-q).h(0)
u=r.$1(C.b.u(q,6e7)%60)
t=r.$1(C.b.u(q,1e6)%60)
s=new P.au().$1(q%1e6)
return""+C.b.u(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.au.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.av.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.J.prototype={}
P.a1.prototype={
h:function(a){return"Throw of null."}}
P.q.prototype={
gF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gE:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gF()+o+u
if(!q.a)return t
s=q.gE()
r=P.bt(q.b)
return t+s+": "+r}}
P.aR.prototype={
gF:function(){return"RangeError"},
gE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.aB.prototype={
gF:function(){return"RangeError"},
gE:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gk:function(a){return this.f}}
P.b1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b_.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aq.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bt(u)+"."}}
P.a5.prototype={
h:function(a){return"Stack Overflow"},
$iJ:1}
P.as.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.b8.prototype={
h:function(a){return"Exception: "+this.a}}
P.C.prototype={}
P.aI.prototype={}
P.u.prototype={
gj:function(a){return P.j.prototype.gj.call(this,this)},
h:function(a){return"null"}}
P.D.prototype={}
P.j.prototype={constructor:P.j,$ij:1,
q:function(a,b){return this===b},
gj:function(a){return H.M(this)},
h:function(a){return"Instance of '"+H.d(H.a3(this))+"'"},
toString:function(){return this.h(this)}}
P.a6.prototype={}
P.O.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.aj.prototype={
h:function(a){return String(a)}}
W.ak.prototype={
h:function(a){return String(a)}}
W.G.prototype={$iG:1}
W.r.prototype={
gk:function(a){return a.length}}
W.at.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.b.prototype={$ib:1}
W.X.prototype={
a9:function(a,b,c,d){return a.addEventListener(b,H.B(c,1),!1)},
ad:function(a,b,c,d){return a.removeEventListener(b,H.B(c,1),!1)}}
W.ay.prototype={
gk:function(a){return a.length}}
W.aA.prototype={
gB:function(a){return a.color}}
W.t.prototype={
gt:function(a){return new P.a2(a.screenX,a.screenY,[P.D])},
$it:1}
W.k.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.a2(a):u}}
W.aU.prototype={
gk:function(a){return a.length}}
W.n.prototype={}
W.a8.prototype={
gt:function(a){return a.screen}}
W.b6.prototype={
C:function(a){var u,t,s=this;++s.a
u=s.d
t=u!=null
if(t)if(t)J.co(s.b,s.c,u,!1)},
Y:function(){var u=this.a
if(u<=0)return
this.a=u-1
this.U()},
U:function(){var u=this,t=u.d,s=t!=null
if(s&&u.a<=0)if(s)J.cn(u.b,u.c,t,!1)}}
W.b7.prototype={
$1:function(a){return this.a.$1(a)}}
P.ba.prototype={
P:function(){return Math.random()}}
P.a2.prototype={
h:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
q:function(a,b){if(b==null)return!1
return!!J.p(b).$ia2&&this.a==b.a&&this.b==b.b},
gj:function(a){var u,t=J.W(this.a),s=J.W(this.b)
s=P.bY(P.bY(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)}}
G.ao.prototype={
D:function(a,b){var u,t,s,r,q,p,o,n=this
n.a4(a,b)
t=n.z
t.clearRect(0,0,n.e,n.f)
for(s=n.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.af)(s),++q){u=s[q]
try{p=H.d6(J.cp(u))
t.fillStyle="rgba("+(C.b.A(p,16)&255)+", "+(C.b.A(p,8)&255)+", "+(p&255)+", "+H.d((C.b.A(p,24)&255)/255)+")"}catch(o){H.cb(o)}if(u instanceof U.ax){t.beginPath()
t.moveTo(u.d.f.a+n.r,u.d.f.b+n.x)
t.lineTo(u.e.f.a+n.r,u.e.f.b+n.x)
t.lineTo(u.f.f.a+n.r,u.f.f.b+n.x)
t.fill()
t.closePath()}else if(u instanceof F.Y){t.beginPath()
t.moveTo(u.d.f.a+n.r,u.d.f.b+n.x)
t.lineTo(u.e.f.a+n.r,u.e.f.b+n.x)
t.lineTo(u.f.f.a+n.r,u.f.f.b+n.x)
t.lineTo(u.r.f.a+n.r,u.r.f.b+n.x)
t.fill()
t.closePath()}}}}
R.an.prototype={
p:function(){var u,t,s=this,r=s.r,q=s.a,p=s.c,o=new A.e(p.a-q.a,p.b-q.b,p.c-q.c)
o.R()
u=new A.e(o.a,o.b,o.c)
u.W(s.b)
u.R()
t=new A.e(u.a,u.b,u.c)
t.W(o)
t.R()
t.a=-t.a
t.b=-t.b
t.c=-t.c
r.a=u.a
r.b=u.b
r.c=u.c
r.d=u.K(q)
r.e=t.a
r.f=t.b
r.r=t.c
r.x=t.K(q)
r.y=o.a
r.z=o.b
r.Q=o.c
r.ch=-o.K(q)}}
T.aw.prototype={
gt:function(a){return this.a$},
gB:function(a){return this.d$}}
U.ax.prototype={}
U.b9.prototype={}
F.Y.prototype={}
F.aa.prototype={
gt:function(a){return this.a$},
gB:function(a){return this.d$}}
N.az.prototype={
n:function(a,b,c,d){var u=this.a
this.b.push(F.bQ(u[a],u[b],u[c],u[d]))}}
Z.aM.prototype={
ao:function(a,b){var u=this,t=b.a,s=b.b,r=b.c
b.a=u.a*t+u.b*s+u.c*r+u.d
b.b=u.e*t+u.f*s+u.r*r+u.x
b.c=u.y*t+u.z*s+u.Q*r+u.ch},
v:function(a1){var u,t,s,r,q,p,o=this,n=o.a,m=o.b,l=o.c,k=o.d,j=o.e,i=o.f,h=o.r,g=o.x,f=o.y,e=o.z,d=o.Q,c=o.ch,b=a1.a,a=a1.e,a0=a1.y
o.a=n*b+m*a+l*a0
b=a1.b
u=a1.f
t=a1.z
o.b=n*b+m*u+l*t
b=a1.c
s=a1.r
r=a1.Q
o.c=n*b+m*s+l*r
b=a1.d
q=a1.x
p=a1.ch
o.d=n*b+m*q+l*p+k
b=a1.a
o.e=j*b+i*a+h*a0
a=a1.b
o.f=j*a+i*u+h*t
u=a1.c
o.r=j*u+i*s+h*r
s=a1.d
o.x=j*s+i*q+h*p+g
o.y=f*b+e*a1.e+d*a0
o.z=f*a+e*a1.f+d*t
o.Q=f*u+e*a1.r+d*r
o.ch=f*s+e*a1.x+d*p+c}}
A.e.prototype={
W:function(a){var u,t=this,s=t.a,r=t.b,q=t.c,p=a.c
t.a=r*p-q*a.b
u=a.a
t.b=q*u-s*p
t.c=s*a.b-r*u},
ak:function(a){var u=this.a,t=this.b,s=this.c
return Math.sqrt(u*u+t*t+s*s)},
X:function(){var u=this.a,t=this.b,s=this.c
return u*u+t*t+s*s},
R:function(){var u=this,t=Math.sqrt(u.X())>0?1/Math.sqrt(u.X()):0
u.a*=t
u.b*=t
u.c*=t
return u},
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
gap:function(a){return this.c}}
Y.h.prototype={
gt:function(a){return this.f}}
K.a0.prototype={
gB:function(a){return this.r}}
M.aO.prototype={
p:function(){var u,t,s,r,q,p=this,o=p.d
o.a=1
o.e=o.d=o.c=o.b=0
o.f=1
o.z=o.y=o.x=o.r=0
o.Q=1
o.ch=0
u=p.a
t=u.a
s=u.b
u=u.c
r=Z.o()
r.d=t
r.x=s
r.ch=u
o.v(r)
u=p.b
s=u.a
q=Z.o()
q.f=q.Q=Math.cos(s)
s=Math.sin(s)
q.z=s
q.r=-s
o.v(q)
s=u.b
q=Z.o()
q.a=q.Q=Math.cos(s)
s=Math.sin(s)
q.c=s
q.y=-s
o.v(q)
u=u.c
q=Z.o()
q.a=q.f=Math.cos(u)
u=Math.sin(u)
q.e=u
q.b=-u
o.v(q)
u=p.c
s=u.a
t=u.b
u=u.c
r=Z.o()
r.a=s
r.f=t
r.Q=u
o.v(r)},
gt:function(a){return this.e}}
R.ar.prototype={}
K.aQ.prototype={}
E.N.prototype={
a_:function(a,b){var u=this
u.e=a
u.f=b
u.r=a/2
u.x=b/2},
a1:function(a,b,c){return C.d.af(J.bJ(J.bI(b)),J.bJ(J.bI(c)))},
D:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8.e*3,a6=a4.b
C.a.sk(a6,0)
for(u=a7.a,t=u.length,s=a4.a,r=a8.r,q=a4.d,p=0,o=0,n=0;n<u.length;u.length===t||(0,H.af)(u),++n){m=u[n]
l=m.d
k=r.a
j=l.a
i=r.b
h=l.e
g=r.c
f=l.y
s.a=k*j+i*h+g*f
j=r.a
k=l.b
e=l.f
d=l.z
s.b=j*k+i*e+g*d
i=l.c
k=r.b
c=l.r
b=l.Q
s.c=j*i+k*c+g*b
g=l.d
i=l.x
a=r.c
a0=l.ch
s.d=j*g+k*i+a*a0+r.d
a=r.e
k=l.a
g=r.f
j=r.r
s.e=a*k+g*h+j*f
h=r.e
a=l.b
s.f=h*a+g*e+j*d
e=l.c
g=r.f
s.r=h*e+g*c+j*b
j=l.d
s.x=h*j+g*i+r.r*a0+r.x
i=r.y
g=r.z
h=l.e
c=r.Q
s.y=i*k+g*h+c*f
f=r.y
s.z=f*a+g*l.f+c*d
d=r.z
s.Q=f*e+d*l.r+c*b
s.ch=f*j+d*l.x+r.Q*a0+r.ch
for(l=m.f,k=l.a,j=k.length,a1=0;a1<k.length;k.length===j||(0,H.af)(k),++a1){a2=k[a1]
i=a2.f
i.a=a2.a
i.b=a2.b
i.c=a2.c
s.ao(0,i)
h=i.c=a5/(a8.e+i.c)
a2.x=h>0
i.a*=h
i.b*=h}for(l=l.b,k=l.length,j=m.r,a1=0;a1<l.length;l.length===k||(0,H.af)(l),++a1){a3=l[a1]
i=a3.d
if(i.x)if(a3.e.x)if(a3.f.x)h=!0
else h=!1
else h=!1
else h=!1
if(h){h=a3.a$
i=i.f
g=a3.e.f
f=a3.f.f
e=a3.r.f
h.c=(i.c+g.c+f.c+e.c)*0.25
if(!q.ag(o))q.i(0,o,F.bQ(new Y.h(new A.e(0,0,0),0,0,0),new Y.h(new A.e(0,0,0),0,0,0),new Y.h(new A.e(0,0,0),0,0,0),new Y.h(new A.e(0,0,0),0,0,0)))
d=q.m(0,o).d.f
d.a=i.a
d.b=i.b
d.c=i.c
i=q.m(0,o).e.f
i.a=g.a
i.b=g.b
i.c=g.c
g=q.m(0,o).f.f
g.a=f.a
g.b=f.b
g.c=f.c
f=q.m(0,o).r.f
f.a=e.a
f.b=e.b
f.c=e.c
q.m(0,o).a$.c=h.c
h=q.m(0,o)
e=a3.d$
h.d$=e==null?j:e
a6.push(q.m(0,o));++o}}}if(!!a6.immutable$list)H.ag(P.v("sort"))
H.a4(a6,0,a6.length-1,a4.ga0(a4))}}
N.aT.prototype={}
F.bm.prototype={
$1:function(a){var u,t
a.preventDefault()
u=this.a
u.b.Y()
u.a.Y()
t=a.clientX
t.toString
u.c=t-this.b
u.e=u.f}}
F.bn.prototype={
$1:function(a){var u,t=a.clientX
a.clientY
t.toString
u=t-this.b
t=this.a
t.d=u
t.f=t.e+(u-t.c)*0.05}}
F.bo.prototype={
$1:function(a){var u=this.a
u.b.C(0)
u.a.C(0)}}
F.bp.prototype={
$1:function(a){var u=this,t=u.b,s=t.b,r=s.b
s.b=r+(u.a.f-r)*0.05
t.p()
t=u.c
t.b.c=-s.b
t.p()
u.d.D(u.e,u.f)}};(function aliases(){var u=J.i.prototype
u.a2=u.h
u=J.a_.prototype
u.a3=u.h
u=E.N.prototype
u.a5=u.a_
u.a4=u.D})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers._instance_0i,r=hunkHelpers._instance_2i
u(P,"cV","cH",0)
u(P,"cW","cI",0)
u(P,"cX","cJ",0)
t(P,"c2","cS",6)
s(A.e.prototype,"gk","ak",4)
r(E.N.prototype,"ga0","a1",5)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.j,null)
s(P.j,[H.bv,J.i,J.al,H.aY,P.J,H.H,H.ab,P.aL,H.aH,P.ac,P.a9,P.aW,P.a7,P.bf,P.ad,P.D,P.I,P.a5,P.b8,P.aI,P.u,P.a6,P.O,P.ba,P.a2,E.N,R.an,T.aw,A.e,N.az,Z.aM,M.aO,N.aT])
s(J.i,[J.aC,J.aE,J.a_,J.x,J.K,J.L,W.X,W.at,W.b])
s(J.a_,[J.aP,J.P,J.y])
t(J.bu,J.x)
s(J.K,[J.Z,J.aD])
s(P.J,[H.aN,H.aG,H.b0,H.ap,H.aS,P.a1,P.q,P.b1,P.b_,P.aq,P.as])
s(H.H,[H.br,H.aX,H.bi,H.bj,H.bk,P.b3,P.b2,P.b4,P.b5,P.be,P.bd,P.bg,P.bc,P.aK,P.au,P.av,W.b7,F.bm,F.bn,F.bo,F.bp])
s(H.aX,[H.aV,H.E])
t(P.aJ,P.aL)
t(H.aF,P.aJ)
t(P.bb,P.bf)
s(P.D,[P.U,P.C])
s(P.q,[P.aR,P.aB])
s(W.X,[W.k,W.a8])
s(W.k,[W.a,W.r])
t(W.c,W.a)
s(W.c,[W.aj,W.ak,W.G,W.ay,W.aA,W.aU])
t(W.n,W.b)
t(W.t,W.n)
t(W.b6,P.aW)
t(G.ao,E.N)
s(A.e,[U.b9,F.aa,Y.h])
t(U.ax,U.b9)
t(F.Y,F.aa)
t(K.a0,M.aO)
s(N.az,[R.ar,K.aQ])
u(F.aa,T.aw)})()
var v={mangledGlobalNames:{C:"int",U:"double",D:"num",a6:"String",ad:"bool",u:"Null",aI:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.u,args:[,]},{func:1,ret:P.u,args:[,,]},{func:1,ret:P.U},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function constants(){C.r=J.i.prototype
C.a=J.x.prototype
C.b=J.Z.prototype
C.d=J.K.prototype
C.j=J.L.prototype
C.t=J.y.prototype
C.k=J.aP.prototype
C.f=J.P.prototype
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

C.e=new P.ba()
C.c=new P.bb()})();(function staticFields(){$.l=0
$.F=null
$.bL=null
$.c5=null
$.c0=null
$.c8=null
$.bh=null
$.bl=null
$.bD=null
$.z=null
$.R=null
$.S=null
$.bz=!1
$.Q=C.c
$.T=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dg","cc",function(){return H.c4("_$dart_dartClosure")})
u($,"dh","bF",function(){return H.c4("_$dart_js")})
u($,"dj","cd",function(){return H.m(H.aZ({
toString:function(){return"$receiver$"}}))})
u($,"dk","ce",function(){return H.m(H.aZ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"dl","cf",function(){return H.m(H.aZ(null))})
u($,"dm","cg",function(){return H.m(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dq","cj",function(){return H.m(H.aZ(void 0))})
u($,"dr","ck",function(){return H.m(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dp","ci",function(){return H.m(H.bW(null))})
u($,"dn","ch",function(){return H.m(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dt","cm",function(){return H.m(H.bW(void 0))})
u($,"ds","cl",function(){return H.m(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"du","bG",function(){return P.cG()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,DOMError:J.i,MediaError:J.i,NavigatorUserMediaError:J.i,OverconstrainedError:J.i,PositionError:J.i,Screen:J.i,SVGAnimatedNumber:J.i,SQLError:J.i,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aj,HTMLAreaElement:W.ak,HTMLCanvasElement:W.G,CDATASection:W.r,CharacterData:W.r,Comment:W.r,ProcessingInstruction:W.r,Text:W.r,DOMException:W.at,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,EventTarget:W.X,HTMLFormElement:W.ay,HTMLHRElement:W.aA,MouseEvent:W.t,DragEvent:W.t,PointerEvent:W.t,WheelEvent:W.t,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,Attr:W.k,DocumentType:W.k,Node:W.k,HTMLSelectElement:W.aU,CompositionEvent:W.n,FocusEvent:W.n,KeyboardEvent:W.n,TextEvent:W.n,TouchEvent:W.n,UIEvent:W.n,Window:W.a8,DOMWindow:W.a8})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Screen:true,SVGAnimatedNumber:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHRElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.c6,[])
else F.c6([])})})()
//# sourceMappingURL=main.dart.js.map
