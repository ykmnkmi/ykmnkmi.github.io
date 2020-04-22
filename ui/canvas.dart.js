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
a[c]=function(){a[c]=function(){H.cZ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bt(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={bn:function bn(){},av:function av(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},al:function al(){},
O:function(a){var u,t=H.d_(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
cP:function(a){return v.types[a]},
dh:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.w(a).$ibo},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a8(a)
if(typeof u!=="string")throw H.e(H.cE(a))
return u},
a_:function(a){return H.ci(a)+H.bM(H.bv(a),0,null)},
ci:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.w(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.w||!!l.$iG){r=C.f(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.k.J(t,0)===36){if(1>n)H.bX(P.bq(1,m))
if(n>n)H.bX(P.bq(n,m))
t=t.substring(1,n)}return H.O(t)},
cI:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.k(!0,b,s,null)
u=J.cL(a)
t=u.gj(a)
if(b<0||b>=t){u=t==null?u.gj(a):t
return new P.ao(u,!0,b,s,"Index out of range")}return P.bq(b,s)},
cE:function(a){return new P.k(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.Y()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.bY})
u.name=""}else u.toString=H.bY
return u},
bY:function(){return J.a8(this.dartException)},
bX:function(a){throw H.e(a)},
bW:function(a){throw H.e(P.bG(a))},
j:function(a){var u,t,s,r,q,p
a=H.cX(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=[]
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
bK:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
bJ:function(a,b){return new H.ax(a,b==null?null:b.method)},
bp:function(a,b){var u=b==null,t=u?null:b.method
return new H.as(a,t,u?null:b.receiver)},
d0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.a.N(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bp(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.bJ(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.c_()
q=$.c0()
p=$.c1()
o=$.c2()
n=$.c5()
m=$.c6()
l=$.c4()
$.c3()
k=$.c8()
j=$.c7()
i=r.i(u)
if(i!=null)return f.$1(H.bp(u,i))
else{i=q.i(u)
if(i!=null){i.method="call"
return f.$1(H.bp(u,i))}else{i=p.i(u)
if(i==null){i=o.i(u)
if(i==null){i=n.i(u)
if(i==null){i=m.i(u)
if(i==null){i=l.i(u)
if(i==null){i=o.i(u)
if(i==null){i=k.i(u)
if(i==null){i=j.i(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.bJ(u,i))}}return f.$1(new H.aP(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.a0()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.k(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.a0()
return a},
cO:function(a){var u
if(a==null)return new H.a5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.a5(a)},
cT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.b1("Unsupported number of arguments for wrapped closure"))},
N:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.cT)
a.$identity=u
return u},
cg:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aI().constructor.prototype):Object.create(new H.P(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.i
$.i=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.bE(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cc(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.bE(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cc:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.cP,a)
if(typeof a=="function")if(b)return a
else{u=c?H.bD:H.bk
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
cd:function(a,b,c,d){var u=H.bk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bE:function(a,b,c){var u,t,s,r,q,p,o
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
q=$.y
return new Function(r+H.d(q==null?$.y=H.ac("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.i
$.i=r+1
o+=H.d(r)
r="return function("+o+"){return this."
q=$.y
return new Function(r+H.d(q==null?$.y=H.ac("self"):q)+"."+H.d(u)+"("+o+");}")()},
ce:function(a,b,c,d){var u=H.bk,t=H.bD
switch(b?-1:a){case 0:throw H.e(H.cj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cf:function(a,b){var u,t,s,r,q,p,o,n=$.y
if(n==null)n=$.y=H.ac("self")
u=$.bC
if(u==null)u=$.bC=H.ac("receiver")
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
bt:function(a,b,c,d,e,f,g){return H.cg(a,b,c,d,!!e,!!f,g)},
bk:function(a){return a.a},
bD:function(a){return a.c},
ac:function(a){var u,t,s,r=new H.P("self","target","receiver","name"),q=J.bI(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
cW:function(a,b){throw H.e(H.cb(a,H.O(b.substring(2))))},
bx:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else u=!0
if(u)return a
H.cW(a,b)},
cJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
cb:function(a,b){return new H.ae("CastError: "+P.bl(a)+": type '"+H.d(H.cD(a))+"' is not a subtype of type '"+b+"'")},
cD:function(a){var u,t=J.w(a)
if(!!t.$iz){u=H.cJ(t)
if(u!=null)return H.cY(u)
return"Closure"}return H.a_(a)},
cZ:function(a){throw H.e(new P.ah(a))},
cj:function(a){return new H.aE(a)},
bQ:function(a){return v.getIsolateTag(a)},
di:function(a,b){a.$ti=b
return a},
bv:function(a){if(a==null)return
return a.$ti},
dg:function(a,b,c){return H.bV(a["$a"+H.d(c)],H.bv(b))},
cY:function(a){return H.l(a,null)},
l:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.O(a[0].name)+H.bM(a,1,b)
if(typeof a=="function")return H.O(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
return H.d(b[b.length-a-1])}if('func' in a)return H.cv(a,b)
if('futureOr' in a)return"FutureOr<"+H.l("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cv:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=[]
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.k.C(p+o,a0[a0.length-q-1])
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
for(k=H.cK(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.l(e[c],a0)+(" "+H.d(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
bM:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a2("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.l(p,c)}return"<"+u.h(0)+">"},
bV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
de:function(a,b,c){return a.apply(b,H.bV(J.w(b)["$a"+H.d(c)],H.bv(b)))},
df:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
cU:function(a){var u,t,s,r,q=$.bR.$1(a),p=$.b9[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.be[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.bO.$2(a,q)
if(q!=null){p=$.b9[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.be[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bi(u)
$.b9[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.be[q]=u
return u}if(s==="-"){r=H.bi(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.bT(a,u)
if(s==="*")throw H.e(P.bL(q))
if(v.leafTags[q]===true){r=H.bi(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.bT(a,u)},
bT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.by(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bi:function(a){return J.by(a,!1,null,!!a.$ibo)},
cV:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bi(u)
else return J.by(u,c,null,null)},
cR:function(){if(!0===$.bw)return
$.bw=!0
H.cS()},
cS:function(){var u,t,s,r,q,p,o,n
$.b9=Object.create(null)
$.be=Object.create(null)
H.cQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.bU.$1(q)
if(p!=null){o=H.cV(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
cQ:function(){var u,t,s,r,q,p,o=C.o()
o=H.v(C.p,H.v(C.q,H.v(C.h,H.v(C.h,H.v(C.r,H.v(C.t,H.v(C.u(C.f),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.bR=new H.bb(r)
$.bO=new H.bc(q)
$.bU=new H.bd(p)},
v:function(a,b){return a(b)||b},
cX:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aM:function aM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ax:function ax(a,b){this.a=a
this.b=b},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a){this.a=a},
bj:function bj(a){this.a=a},
a5:function a5(a){this.a=a
this.b=null},
z:function z(){},
aK:function aK(){},
aI:function aI(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a){this.a=a},
aE:function aE(a){this.a=a},
bb:function bb(a){this.a=a},
bc:function bc(a){this.a=a},
bd:function bd(a){this.a=a},
X:function X(){},
V:function V(){},
W:function W(){},
I:function I(){},
J:function J(){},
cK:function(a){return J.bI(a?Object.keys(a):[])},
d_:function(a){return v.mangledGlobalNames[a]}},J={
by:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bu:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bw==null){H.cR()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.bL("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bz()]
if(r!=null)return r
r=H.cU(a)
if(r!=null)return r
if(typeof a=="function")return C.x
u=Object.getPrototypeOf(a)
if(u==null)return C.n
if(u===Object.prototype)return C.n
if(typeof s=="function"){Object.defineProperty(s,$.bz(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
bI:function(a){a.fixed$length=Array
return a},
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.T.prototype
return J.aq.prototype}if(typeof a=="string")return J.C.prototype
if(a==null)return J.ar.prototype
if(typeof a=="boolean")return J.ap.prototype
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.q.prototype
return a}if(a instanceof P.h)return a
return J.bu(a)},
cL:function(a){if(typeof a=="string")return J.C.prototype
if(a==null)return a
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.q.prototype
return a}if(a instanceof P.h)return a
return J.bu(a)},
cM:function(a){if(a==null)return a
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.q.prototype
return a}if(a instanceof P.h)return a
return J.bu(a)},
cN:function(a){if(typeof a=="number")return J.B.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.G.prototype
return a},
c9:function(a){return J.cM(a).gw(a)},
bB:function(a){return J.cN(a).B(a)},
a8:function(a){return J.w(a).h(a)},
f:function f(){},
ap:function ap(){},
ar:function ar(){},
U:function U(){},
aB:function aB(){},
G:function G(){},
q:function q(){},
p:function p(){},
bm:function bm(){},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
B:function B(){},
T:function T(){},
aq:function aq(){},
C:function C(){}},P={
cm:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.cF()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.N(new P.aX(s),1)).observe(u,{childList:true})
return new P.aW(s,u,t)}else if(self.setImmediate!=null)return P.cG()
return P.cH()},
cn:function(a){self.scheduleImmediate(H.N(new P.aY(a),0))},
co:function(a){self.setImmediate(H.N(new P.aZ(a),0))},
cp:function(a){P.cr(0,a)},
cr:function(a,b){var u=new P.b4()
u.H(a,b)
return u},
cx:function(){var u,t
for(;u=$.u,u!=null;){$.L=null
t=u.b
$.u=t
if(t==null)$.K=null
u.a.$0()}},
cC:function(){$.bs=!0
try{P.cx()}finally{$.L=null
$.bs=!1
if($.u!=null)$.bA().$1(P.bP())}},
cA:function(a){var u=new P.a4(a)
if($.u==null){$.u=$.K=u
if(!$.bs)$.bA().$1(P.bP())}else $.K=$.K.b=u},
cB:function(a){var u,t,s=$.u
if(s==null){P.cA(a)
$.L=$.K
return}u=new P.a4(a)
t=$.L
if(t==null){u.b=s
$.u=$.L=u}else{u.b=t.b
$.L=t.b=u
if(u.b==null)$.K=u}},
cy:function(a,b,c,d,e){var u={}
u.a=d
P.cB(new P.b7(u,e))},
cz:function(a,b,c,d,e){var u,t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
aX:function aX(a){this.a=a},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a},
aZ:function aZ(a){this.a=a},
b4:function b4(){},
b5:function b5(a,b){this.a=a
this.b=b},
a4:function a4(a){this.a=a
this.b=null},
aJ:function aJ(){},
b6:function b6(){},
b7:function b7(a,b){this.a=a
this.b=b},
b2:function b2(){},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function(a,b,c){var u,t
if(P.cw(a))return b+"..."+c
u=new P.a2(b)
$.b8.push(a)
try{t=u
t.a=P.ck(t.a,a,", ")}finally{$.b8.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cw:function(a){var u,t
for(u=$.b8.length,t=0;t<u;++t)if(a===$.b8[t])return!0
return!1},
aw:function aw(){},
ch:function(a){if(a instanceof H.z)return a.h(0)
return"Instance of '"+H.d(H.a_(a))+"'"},
ck:function(a,b,c){var u=J.c9(b)
if(!u.l())return a
if(c.length===0){do a+=H.d(u.gk())
while(u.l())}else{a+=H.d(u.gk())
for(;u.l();)a=a+c+H.d(u.gk())}return a},
bl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ch(a)},
ca:function(a,b,c){return new P.k(!0,a,b,c)},
bq:function(a,b){return new P.aC(!0,a,b,"Value not in range")},
aR:function(a){return new P.aQ(a)},
bL:function(a){return new P.aO(a)},
bG:function(a){return new P.af(a)},
a6:function a6(){},
ba:function ba(){},
R:function R(a){this.a=a},
aj:function aj(){},
ak:function ak(){},
A:function A(){},
Y:function Y(){},
k:function k(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aQ:function aQ(a){this.a=a},
aO:function aO(a){this.a=a},
af:function af(a){this.a=a},
a0:function a0(){},
ah:function ah(a){this.a=a},
b1:function b1(a){this.a=a},
a7:function a7(){},
au:function au(){},
D:function D(){},
x:function x(){},
h:function h(){},
a1:function a1(){},
a2:function a2(a){this.a=a}},W={
cq:function(a,b,c,d){var u=W.bN(new W.b0(c),W.a),t=u!=null
if(t&&!0)if(t)C.e.I(a,b,u,!1)
return new W.b_(a,b,u,!1)},
bN:function(a,b){var u=$.a3
if(u===C.b)return a
return u.P(a,b)},
c:function c(){},
a9:function a9(){},
aa:function aa(){},
m:function m(){},
n:function n(){},
ai:function ai(){},
b:function b(){},
a:function a(){},
S:function S(){},
am:function am(){},
r:function r(){},
aH:function aH(){},
H:function H(){},
b_:function b_(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
b0:function b0(a){this.a=a}},K={
M:function(a){var u=a.a
return"rgba("+((16711680&u)>>>16)+", "+((65280&u)>>>8)+", "+((255&u)>>>0)+", "+H.d(((4278190080&u)>>>24)/255)+")"},
bF:function(a,b,c,d){return new K.o((((a&255)<<24|(b&255)<<16|(c&255)<<8|(d&255)<<0)&4294967295)>>>0)},
cl:function(a){var u=new K.aS(a)
u.G(a)
return u},
cs:function(a,b){if(b==null){a.fillStyle=""
return}a.fillStyle=K.M(b)},
br:function(a,b){var u,t,s,r=b.c
if(r!=null){u=r.a
t=r.b
s=a.createLinearGradient(u.a,u.b,t.a,t.b)
r=r.c
s.addColorStop(0,K.M(r[0]))
s.addColorStop(1,K.M(r[1]))
a.fillStyle=s}else K.cs(a,b.b)},
ct:function(a,b){if(b==null){a.strokeStyle=""
return}a.strokeStyle=K.M(b)},
cu:function(a,b){var u,t,s,r=b.c
if(r!=null){u=r.a
t=r.b
s=a.createLinearGradient(u.a,u.b,t.a,t.b)
r=r.c
s.addColorStop(0,K.M(r[0]))
s.addColorStop(1,K.M(r[1]))
a.strokeStyle=s}else{r=b.b
if(r!=null)K.ct(a,r)}a.lineWidth=1},
ad:function ad(){this.b=this.a=null},
Q:function Q(a){this.b=a},
ay:function ay(a){this.a=a},
aA:function aA(){this.b=this.a=null
this.c=!1},
aF:function aF(a){this.a=a},
aG:function aG(){this.b=this.a=null},
t:function t(a,b){this.a=a
this.b=b},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
ag:function ag(){},
at:function at(){},
az:function az(a,b){this.b=a
this.c=b
this.a=null},
aL:function aL(a,b){this.d=a
this.b=b
this.a=null},
o:function o(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
E:function E(){this.c=this.b=null},
Z:function Z(a){this.b=a},
aS:function aS(a){var _=this
_.a=!1
_.b=a
_.x=_.r=_.f=_.e=_.d=_.c=null},
aT:function aT(a){this.a=a},
aU:function aU(a){this.a=a},
aV:function aV(a){this.a=a}},G={
bS:function(){var u=K.cl(H.bx(document.querySelector("canvas"),"$im"))
u.x=new G.bf(u,new G.bg(u),new G.bh(u))
u.D()},
bg:function bg(a){this.a=a},
bh:function bh(a){this.a=a},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bn.prototype={}
J.f.prototype={
h:function(a){return"Instance of '"+H.d(H.a_(a))+"'"}}
J.ap.prototype={
h:function(a){return String(a)},
$ia6:1}
J.ar.prototype={
h:function(a){return"null"}}
J.U.prototype={
h:function(a){return String(a)}}
J.aB.prototype={}
J.G.prototype={}
J.q.prototype={
h:function(a){var u=a[$.bZ()]
if(u==null)return this.F(a)
return"JavaScript function for "+H.d(J.a8(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.p.prototype={
h:function(a){return P.bH(a,"[","]")},
gw:function(a){return new J.ab(a,a.length)},
gj:function(a){return a.length}}
J.bm.prototype={}
J.ab.prototype={
gk:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.bW(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.B.prototype={
B:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.aR(""+a+".toInt()"))},
A:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.aR(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
p:function(a,b){return(a|0)===a?a/b|0:this.O(a,b)},
O:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.aR("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
N:function(a,b){var u
if(a>0)u=this.M(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
M:function(a,b){return b>31?0:a>>>b},
$ix:1}
J.T.prototype={$ia7:1}
J.aq.prototype={}
J.C.prototype={
J:function(a,b){if(b>=a.length)throw H.e(H.cI(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.e(P.ca(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){return a.length},
$ia1:1}
H.av.prototype={
gk:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(P.bG(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
H.al.prototype={}
H.aM.prototype={
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
H.ax.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.as.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.aP.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bj.prototype={
$1:function(a){if(!!J.w(a).$iA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:1}
H.a5.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.z.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.O(t==null?"unknown":t)+"'"},
gX:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aK.prototype={}
H.aI.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.O(u)+"'"}}
H.P.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.a_(u))+"'")}}
H.ae.prototype={
h:function(a){return this.a}}
H.aE.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.bb.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.bc.prototype={
$2:function(a,b){return this.a(a,b)}}
H.bd.prototype={
$1:function(a){return this.a(a)}}
H.X.prototype={}
H.V.prototype={
gj:function(a){return a.length},
$ibo:1,
$abo:function(){}}
H.W.prototype={}
H.I.prototype={}
H.J.prototype={}
P.aX.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:2}
P.aW.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.aY.prototype={
$0:function(){this.a.$0()}}
P.aZ.prototype={
$0:function(){this.a.$0()}}
P.b4.prototype={
H:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.N(new P.b5(this,b),0),a)
else throw H.e(P.aR("`setTimeout()` not found."))}}
P.b5.prototype={
$0:function(){this.b.$0()}}
P.a4.prototype={}
P.aJ.prototype={}
P.b6.prototype={}
P.b7.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.Y():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.b2.prototype={
V:function(a,b){var u,t,s,r=null
try{if(C.b===$.a3){a.$1(b)
return}P.cz(r,r,this,a,b)}catch(s){u=H.d0(s)
t=H.cO(s)
P.cy(r,r,this,u,t)}},
W:function(a,b){return this.V(a,b,null)},
P:function(a,b){return new P.b3(this,a,b)}}
P.b3.prototype={
$1:function(a){return this.a.W(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.aw.prototype={
gw:function(a){return new H.av(a,a.length)},
h:function(a){return P.bH(a,"[","]")}}
P.a6.prototype={
h:function(a){return this?"true":"false"}}
P.ba.prototype={}
P.R.prototype={
h:function(a){var u,t,s,r=new P.ak(),q=this.a
if(q<0)return"-"+new P.R(0-q).h(0)
u=r.$1(C.a.p(q,6e7)%60)
t=r.$1(C.a.p(q,1e6)%60)
s=new P.aj().$1(q%1e6)
return""+C.a.p(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.aj.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ak.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.A.prototype={}
P.Y.prototype={
h:function(a){return"Throw of null."}}
P.k.prototype={
gn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gm:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gn()+o+u
if(!q.a)return t
s=q.gm()
r=P.bl(q.b)
return t+s+": "+r}}
P.aC.prototype={
gn:function(){return"RangeError"},
gm:function(){return""}}
P.ao.prototype={
gn:function(){return"RangeError"},
gm:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.aQ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aO.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.af.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bl(u)+"."}}
P.a0.prototype={
h:function(a){return"Stack Overflow"},
$iA:1}
P.ah.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.b1.prototype={
h:function(a){return"Exception: "+this.a}}
P.a7.prototype={}
P.au.prototype={}
P.D.prototype={
h:function(a){return"null"}}
P.x.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.d(H.a_(this))+"'"},
toString:function(){return this.h(this)}}
P.a1.prototype={}
P.a2.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.a9.prototype={
h:function(a){return String(a)}}
W.aa.prototype={
h:function(a){return String(a)}}
W.m.prototype={
u:function(a,b){return a.getContext(b)},
$im:1}
W.n.prototype={$in:1}
W.ai.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.S.prototype={
I:function(a,b,c,d){return a.addEventListener(b,H.N(c,1),!1)}}
W.am.prototype={
gj:function(a){return a.length}}
W.r.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.E(a):u}}
W.aH.prototype={
gj:function(a){return a.length}}
W.H.prototype={
L:function(a,b){return a.requestAnimationFrame(H.N(b,1))},
K:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.b_.prototype={}
W.b0.prototype={
$1:function(a){return this.a.$1(a)}}
K.ad.prototype={
v:function(a,b,c){var u=this
u.a.save()
switch(C.m){case C.m:u.a.beginPath()
u.a.arc(a.a,a.b,b,0,6.283185307179586,!1)
K.br(u.a,c)
u.a.fill()
break
case C.y:u.a.beginPath()
u.a.arc(a.a,a.b,b,0,6.283185307179586,!1)
K.cu(u.a,c)
u.a.stroke()
break}u.a.restore()}}
K.Q.prototype={
h:function(a){return this.b}}
K.ay.prototype={}
K.aA.prototype={
R:function(){if(!this.c)return
this.c=!1
var u=this.a
return new K.ay(H.bx((u&&C.i).u(u,"2d"),"$in"))}}
K.aF.prototype={}
K.aG.prototype={
T:function(){var u=this.b
if(u==null)return
this.b=u.a},
U:function(a){var u,t=this
if(t.a==null){t.a=t.b=a
return}u=t.b
if(u==null)return
a.a=u
u.b.push(a)
t.b=a}}
K.t.prototype={}
K.aD.prototype={}
K.F.prototype={
t:function(a,b){return new K.F(this.a/b,this.b/b)}}
K.ag.prototype={
S:function(a){var u,t,s
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.bW)(u),++s)u[s].q(a)}}
K.at.prototype={}
K.az.prototype={
q:function(a){var u=this.c
a.drawImage(this.b.a.canvas,u.a,u.b)}}
K.aL.prototype={
q:function(a){var u
a.save()
u=this.d
a.transform(u[0],u[1],u[4],u[5],u[12],u[13])
this.S(a)
a.restore()}}
K.o.prototype={}
K.an.prototype={}
K.E.prototype={}
K.Z.prototype={
h:function(a){return this.b}}
K.aS.prototype={
G:function(a){var u=new K.aT(this)
u.$0()
this.c=this.b.getContext("2d")
W.cq(window,"resize",new K.aU(u),!1)},
D:function(){if(!this.a){this.a=!0
var u=window
C.e.K(u)
C.e.L(u,W.bN(new K.aV(this),P.x))}}}
K.aT.prototype={
$0:function(){var u,t,s,r,q=window.devicePixelRatio
q.toString
u=this.a
t=q===0?1:q
u.f=t
s=u.b
r=u.d=s.clientWidth*t
t=s.clientHeight*t
u.e=t
u.r=new K.F(r,t)
s.width=C.c.B(r)
s.height=J.bB(u.e)}}
K.aU.prototype={
$1:function(a){this.a.$0()}}
K.aV.prototype={
$1:function(a){var u,t=this.a
t.a=!1
u=J.bB(a)
t=t.x
if(t!=null)t.$1(new P.R(1000*u))}}
G.bg.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l=new K.aA(),k=new K.ad(),j=a.c-a.a,i=a.d-a.b
k.b=new K.F(j,i)
l.b=a
l.c=!0
u=C.c.A(j)
t=C.c.A(i)
s=document.createElement("canvas")
s.width=u
s.height=t
l.a=s
u=H.bx(C.i.u(s,"2d"),"$in")
k.a=u
t=new K.E()
t.b=new K.o(4294967295)
u.save()
u.beginPath()
K.br(u,t)
u.rect(0,0,j,i)
u.fill()
u.restore()
t=0+j/2
r=Math.min(Math.abs(j),Math.abs(i))/2
j=this.a
q=j.f
p=j.r.t(0,q)
u.save()
j=p.b
u.translate(-t/2,j*2)
o=r+50
u.beginPath()
u.rect(0,o,p.a-0,j-o)
switch(C.j){case C.v:u.clip()
break
case C.j:u.clip("evenodd")
break}u.translate(t,0+i/2)
u.rotate(0.7853981633974483)
j=-r
i=new K.E()
i.c=new K.an(new K.t(j,j),new K.t(0,0),[new K.o(4294967040),new K.o(4278190335)])
u.save()
u.beginPath()
t=r-j
u.rect(j,j,t,t)
K.br(u,i)
u.fill()
u.restore()
n=new Float32Array(16)
n[0]=0.5
n[5]=0.5
n[10]=1
n[15]=1
u.transform(n[0],n[1],n[4],n[5],n[12],n[13])
m=new K.E()
m.b=K.bF(128,0,255,0)
k.v(C.l,r,m)
k.a.restore()
m.b=K.bF(128,255,0,0)
k.v(new K.t(150,300),r,m)
return l.R()}}
G.bh.prototype={
$2:function(a,b){var u,t,s,r=this.a.f,q=new Float32Array(16)
q[0]=r
q[5]=r
q[10]=1
q[15]=1
u=new K.aG()
u.U(new K.aL(q,[]))
t=u.b
s=new K.az(a,C.l)
t.toString
s.a=t
t.b.push(s)
u.T()
return new K.aF(u.a)}}
G.bf.prototype={
$1:function(a){var u=this.a,t=u.r.t(0,u.f),s=new K.aD(0,0,0+t.a,0+t.b),r=this.c.$2(this.b.$1(s),s)
u.c.clearRect(0,0,u.d,u.e)
r.a.q(u.c)}};(function aliases(){var u=J.f.prototype
u.E=u.h
u=J.U.prototype
u.F=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"cF","cn",0)
u(P,"cG","co",0)
u(P,"cH","cp",0)
t(P,"bP","cC",3)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.h,null)
s(P.h,[H.bn,J.f,J.ab,H.av,H.al,H.aM,P.A,H.z,H.a5,P.b4,P.a4,P.aJ,P.b6,P.aw,P.a6,P.x,P.R,P.a0,P.b1,P.au,P.D,P.a1,P.a2,K.ad,K.Q,K.ay,K.aA,K.aF,K.aG,K.t,K.aD,K.F,K.at,K.o,K.an,K.E,K.Z,K.aS])
s(J.f,[J.ap,J.ar,J.U,J.p,J.B,J.C,H.X,W.S,W.n,W.ai,W.a])
s(J.U,[J.aB,J.G,J.q])
t(J.bm,J.p)
s(J.B,[J.T,J.aq])
s(P.A,[H.ax,H.as,H.aP,H.ae,H.aE,P.Y,P.k,P.aQ,P.aO,P.af,P.ah])
s(H.z,[H.bj,H.aK,H.bb,H.bc,H.bd,P.aX,P.aW,P.aY,P.aZ,P.b5,P.b7,P.b3,P.aj,P.ak,W.b0,K.aT,K.aU,K.aV,G.bg,G.bh,G.bf])
s(H.aK,[H.aI,H.P])
t(H.V,H.X)
t(H.I,H.V)
t(H.J,H.I)
t(H.W,H.J)
t(P.b2,P.b6)
s(P.x,[P.ba,P.a7])
s(P.k,[P.aC,P.ao])
s(W.S,[W.r,W.H])
t(W.b,W.r)
t(W.c,W.b)
s(W.c,[W.a9,W.aa,W.m,W.am,W.aH])
t(W.b_,P.aJ)
s(K.at,[K.ag,K.az])
t(K.aL,K.ag)
u(H.I,P.aw)
u(H.J,H.al)})()
var v={mangledGlobalNames:{a7:"int",ba:"double",x:"num",a1:"String",a6:"bool",D:"Null",au:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function constants(){C.i=W.m.prototype
C.w=J.f.prototype
C.a=J.T.prototype
C.c=J.B.prototype
C.k=J.C.prototype
C.x=J.q.prototype
C.n=J.aB.prototype
C.d=J.G.prototype
C.e=W.H.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.o=function() {
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
C.u=function(getTagFallback) {
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
C.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.q=function(hooks) {
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
C.t=function(hooks) {
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
C.r=function(hooks) {
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
C.h=function(hooks) { return hooks; }

C.b=new P.b2()
C.j=new K.Q("ClipOp.difference")
C.v=new K.Q("ClipOp.intersect")
C.l=new K.t(0,0)
C.m=new K.Z("PaintingStyle.fill")
C.y=new K.Z("PaintingStyle.stroke")})();(function staticFields(){$.i=0
$.y=null
$.bC=null
$.bR=null
$.bO=null
$.bU=null
$.b9=null
$.be=null
$.bw=null
$.u=null
$.K=null
$.L=null
$.bs=!1
$.a3=C.b
$.b8=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"d1","bZ",function(){return H.bQ("_$dart_dartClosure")})
u($,"d2","bz",function(){return H.bQ("_$dart_js")})
u($,"d3","c_",function(){return H.j(H.aN({
toString:function(){return"$receiver$"}}))})
u($,"d4","c0",function(){return H.j(H.aN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"d5","c1",function(){return H.j(H.aN(null))})
u($,"d6","c2",function(){return H.j(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"d9","c5",function(){return H.j(H.aN(void 0))})
u($,"da","c6",function(){return H.j(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"d8","c4",function(){return H.j(H.bK(null))})
u($,"d7","c3",function(){return H.j(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dc","c8",function(){return H.j(H.bK(void 0))})
u($,"db","c7",function(){return H.j(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dd","bA",function(){return P.cm()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.f,CanvasPattern:J.f,DOMError:J.f,MediaError:J.f,NavigatorUserMediaError:J.f,OverconstrainedError:J.f,PositionError:J.f,WebGLRenderingContext:J.f,WebGL2RenderingContext:J.f,SQLError:J.f,ArrayBufferView:H.X,Float32Array:H.W,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.a9,HTMLAreaElement:W.aa,HTMLCanvasElement:W.m,CanvasRenderingContext2D:W.n,DOMException:W.ai,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,EventTarget:W.S,HTMLFormElement:W.am,Document:W.r,HTMLDocument:W.r,Node:W.r,HTMLSelectElement:W.aH,Window:W.H,DOMWindow:W.H})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})
H.V.$nativeSuperclassTag="ArrayBufferView"
H.I.$nativeSuperclassTag="ArrayBufferView"
H.J.$nativeSuperclassTag="ArrayBufferView"
H.W.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.bS,[])
else G.bS([])})})()
//# sourceMappingURL=canvas.dart.js.map
