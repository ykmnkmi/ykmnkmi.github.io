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
a[c]=function(){a[c]=function(){H.cQ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bl(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={bg:function bg(){},an:function an(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},af:function af(){},
J:function(a){var u,t=H.cR(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
cG:function(a){return v.types[a]},
d8:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.u(a).$ibh},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.e(H.cu(a))
return u},
U:function(a){return H.c9(a)+H.bD(H.bn(a),0,null)},
c9:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.u(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.t||!!l.$iC){r=C.f(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.j.I(t,0)===36){if(1>n)H.bO(P.bj(1,m))
if(n>n)H.bO(P.bj(n,m))
t=t.substring(1,n)}return H.J(t)},
cz:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.k(!0,b,s,null)
u=J.cC(a)
t=u.gj(a)
if(b<0||b>=t){u=t==null?u.gj(a):t
return new P.ah(u,!0,b,s,"Index out of range")}return P.bj(b,s)},
cu:function(a){return new P.k(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.T()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.bP})
u.name=""}else u.toString=H.bP
return u},
bP:function(){return J.a2(this.dartException)},
bO:function(a){throw H.e(a)},
bN:function(a){throw H.e(P.bx(a))},
j:function(a){var u,t,s,r,q,p
a=H.cO(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=[]
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
bB:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
bA:function(a,b){return new H.ap(a,b==null?null:b.method)},
bi:function(a,b){var u=b==null,t=u?null:b.method
return new H.ak(a,t,u?null:b.receiver)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.a.M(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bi(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.bA(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.bR()
q=$.bS()
p=$.bT()
o=$.bU()
n=$.bX()
m=$.bY()
l=$.bW()
$.bV()
k=$.c_()
j=$.bZ()
i=r.i(u)
if(i!=null)return f.$1(H.bi(u,i))
else{i=q.i(u)
if(i!=null){i.method="call"
return f.$1(H.bi(u,i))}else{i=p.i(u)
if(i==null){i=o.i(u)
if(i==null){i=n.i(u)
if(i==null){i=m.i(u)
if(i==null){i=l.i(u)
if(i==null){i=o.i(u)
if(i==null){i=k.i(u)
if(i==null){i=j.i(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.bA(u,i))}}return f.$1(new H.aJ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.V()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.k(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.V()
return a},
cF:function(a){var u
if(a==null)return new H.a_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.a_(a)},
cK:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.aW("Unsupported number of arguments for wrapped closure"))},
I:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.cK)
a.$identity=u
return u},
c7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aC().constructor.prototype):Object.create(new H.K(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.i
$.i=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.bw(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.c3(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.bw(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
c3:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.cG,a)
if(typeof a=="function")if(b)return a
else{u=c?H.bv:H.bc
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
c4:function(a,b,c,d){var u=H.bc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.c6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.c4(t,!r,u,b)
if(t===0){r=$.i
$.i=r+1
p="self"+H.d(r)
r="return function(){var "+p+" = this."
q=$.w
return new Function(r+H.d(q==null?$.w=H.a6("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.i
$.i=r+1
o+=H.d(r)
r="return function("+o+"){return this."
q=$.w
return new Function(r+H.d(q==null?$.w=H.a6("self"):q)+"."+H.d(u)+"("+o+");}")()},
c5:function(a,b,c,d){var u=H.bc,t=H.bv
switch(b?-1:a){case 0:throw H.e(H.ca("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
c6:function(a,b){var u,t,s,r,q,p,o,n=$.w
if(n==null)n=$.w=H.a6("self")
u=$.bu
if(u==null)u=$.bu=H.a6("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.c5(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.i
$.i=u+1
return new Function(n+H.d(u)+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.i
$.i=u+1
return new Function(n+H.d(u)+"}")()},
bl:function(a,b,c,d,e,f,g){return H.c7(a,b,c,d,!!e,!!f,g)},
bc:function(a){return a.a},
bv:function(a){return a.c},
a6:function(a){var u,t,s,r=new H.K("self","target","receiver","name"),q=J.bz(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
cN:function(a,b){throw H.e(H.c2(a,H.J(b.substring(2))))},
bp:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else u=!0
if(u)return a
H.cN(a,b)},
cA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
c2:function(a,b){return new H.a7("CastError: "+P.be(a)+": type '"+H.d(H.ct(a))+"' is not a subtype of type '"+b+"'")},
ct:function(a){var u,t=J.u(a)
if(!!t.$ix){u=H.cA(t)
if(u!=null)return H.cP(u)
return"Closure"}return H.U(a)},
cQ:function(a){throw H.e(new P.ab(a))},
ca:function(a){return new H.ay(a)},
bH:function(a){return v.getIsolateTag(a)},
d9:function(a,b){a.$ti=b
return a},
bn:function(a){if(a==null)return
return a.$ti},
d7:function(a,b,c){return H.bM(a["$a"+H.d(c)],H.bn(b))},
cP:function(a){return H.l(a,null)},
l:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.J(a[0].name)+H.bD(a,1,b)
if(typeof a=="function")return H.J(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
return H.d(b[b.length-a-1])}if('func' in a)return H.cl(a,b)
if('futureOr' in a)return"FutureOr<"+H.l("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cl:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=[]
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.j.B(p+o,a0[a0.length-q-1])
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
for(k=H.cB(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.l(e[c],a0)+(" "+H.d(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
bD:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.X("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.l(p,c)}return"<"+u.h(0)+">"},
bM:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d5:function(a,b,c){return a.apply(b,H.bM(J.u(b)["$a"+H.d(c)],H.bn(b)))},
d6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
cL:function(a){var u,t,s,r,q=$.bI.$1(a),p=$.b3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.b8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.bF.$2(a,q)
if(q!=null){p=$.b3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.b8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ba(u)
$.b3[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.b8[q]=u
return u}if(s==="-"){r=H.ba(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.bK(a,u)
if(s==="*")throw H.e(P.bC(q))
if(v.leafTags[q]===true){r=H.ba(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.bK(a,u)},
bK:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bq(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ba:function(a){return J.bq(a,!1,null,!!a.$ibh)},
cM:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ba(u)
else return J.bq(u,c,null,null)},
cI:function(){if(!0===$.bo)return
$.bo=!0
H.cJ()},
cJ:function(){var u,t,s,r,q,p,o,n
$.b3=Object.create(null)
$.b8=Object.create(null)
H.cH()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.bL.$1(q)
if(p!=null){o=H.cM(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
cH:function(){var u,t,s,r,q,p,o=C.l()
o=H.t(C.m,H.t(C.n,H.t(C.h,H.t(C.h,H.t(C.o,H.t(C.p,H.t(C.q(C.f),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.bI=new H.b5(r)
$.bF=new H.b6(q)
$.bL=new H.b7(p)},
t:function(a,b){return a(b)||b},
cO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aG:function aG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ap:function ap(a,b){this.a=a
this.b=b},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(a){this.a=a},
bb:function bb(a){this.a=a},
a_:function a_(a){this.a=a
this.b=null},
x:function x(){},
aE:function aE(){},
aC:function aC(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a){this.a=a},
ay:function ay(a){this.a=a},
b5:function b5(a){this.a=a},
b6:function b6(a){this.a=a},
b7:function b7(a){this.a=a},
S:function S(){},
Q:function Q(){},
R:function R(){},
E:function E(){},
F:function F(){},
cB:function(a){return J.bz(a?Object.keys(a):[])},
cR:function(a){return v.mangledGlobalNames[a]}},J={
bq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bm:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bo==null){H.cI()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.bC("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.br()]
if(r!=null)return r
r=H.cL(a)
if(r!=null)return r
if(typeof a=="function")return C.v
u=Object.getPrototypeOf(a)
if(u==null)return C.k
if(u===Object.prototype)return C.k
if(typeof s=="function"){Object.defineProperty(s,$.br(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
bz:function(a){a.fixed$length=Array
return a},
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.O.prototype
return J.N.prototype}if(typeof a=="string")return J.A.prototype
if(a==null)return J.aj.prototype
if(typeof a=="boolean")return J.ai.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
cC:function(a){if(typeof a=="string")return J.A.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
cD:function(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
cE:function(a){if(typeof a=="number")return J.z.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.C.prototype
return a},
c0:function(a){return J.cD(a).gv(a)},
bt:function(a){return J.cE(a).A(a)},
a2:function(a){return J.u(a).h(a)},
f:function f(){},
ai:function ai(){},
aj:function aj(){},
P:function P(){},
av:function av(){},
C:function C(){},
p:function p(){},
o:function o(){},
bf:function bf(){},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
z:function z(){},
O:function O(){},
N:function N(){},
A:function A(){}},P={
cd:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.cv()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.I(new P.aR(s),1)).observe(u,{childList:true})
return new P.aQ(s,u,t)}else if(self.setImmediate!=null)return P.cw()
return P.cx()},
ce:function(a){self.scheduleImmediate(H.I(new P.aS(a),0))},
cf:function(a){self.setImmediate(H.I(new P.aT(a),0))},
cg:function(a){P.ci(0,a)},
ci:function(a,b){var u=new P.aZ()
u.G(a,b)
return u},
cn:function(){var u,t
for(;u=$.r,u!=null;){$.H=null
t=u.b
$.r=t
if(t==null)$.G=null
u.a.$0()}},
cs:function(){$.bk=!0
try{P.cn()}finally{$.H=null
$.bk=!1
if($.r!=null)$.bs().$1(P.bG())}},
cq:function(a){var u=new P.Z(a)
if($.r==null){$.r=$.G=u
if(!$.bk)$.bs().$1(P.bG())}else $.G=$.G.b=u},
cr:function(a){var u,t,s=$.r
if(s==null){P.cq(a)
$.H=$.G
return}u=new P.Z(a)
t=$.H
if(t==null){u.b=s
$.r=$.H=u}else{u.b=t.b
$.H=t.b=u
if(u.b==null)$.G=u}},
co:function(a,b,c,d,e){var u={}
u.a=d
P.cr(new P.b1(u,e))},
cp:function(a,b,c,d,e){var u,t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
aR:function aR(a){this.a=a},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a){this.a=a},
aT:function aT(a){this.a=a},
aZ:function aZ(){},
b_:function b_(a,b){this.a=a
this.b=b},
Z:function Z(a){this.a=a
this.b=null},
aD:function aD(){},
b0:function b0(){},
b1:function b1(a,b){this.a=a
this.b=b},
aX:function aX(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
by:function(a,b,c){var u,t
if(P.cm(a))return b+"..."+c
u=new P.X(b)
$.b2.push(a)
try{t=u
t.a=P.cb(t.a,a,", ")}finally{$.b2.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cm:function(a){var u,t
for(u=$.b2.length,t=0;t<u;++t)if(a===$.b2[t])return!0
return!1},
ao:function ao(){},
c8:function(a){if(a instanceof H.x)return a.h(0)
return"Instance of '"+H.d(H.U(a))+"'"},
cb:function(a,b,c){var u=J.c0(b)
if(!u.l())return a
if(c.length===0){do a+=H.d(u.gk())
while(u.l())}else{a+=H.d(u.gk())
for(;u.l();)a=a+c+H.d(u.gk())}return a},
be:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.c8(a)},
c1:function(a,b,c){return new P.k(!0,a,b,c)},
bj:function(a,b){return new P.aw(!0,a,b,"Value not in range")},
aL:function(a){return new P.aK(a)},
bC:function(a){return new P.aI(a)},
bx:function(a){return new P.a9(a)},
a0:function a0(){},
b4:function b4(){},
L:function L(a){this.a=a},
ad:function ad(){},
ae:function ae(){},
y:function y(){},
T:function T(){},
k:function k(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aK:function aK(a){this.a=a},
aI:function aI(a){this.a=a},
a9:function a9(a){this.a=a},
V:function V(){},
ab:function ab(a){this.a=a},
aW:function aW(a){this.a=a},
a1:function a1(){},
am:function am(){},
B:function B(){},
v:function v(){},
h:function h(){},
W:function W(){},
X:function X(a){this.a=a}},W={
ch:function(a,b,c,d){var u=W.bE(new W.aV(c),W.a),t=u!=null
if(t&&!0)if(t)C.e.H(a,b,u,!1)
return new W.aU(a,b,u,!1)},
bE:function(a,b){var u=$.Y
if(u===C.b)return a
return u.O(a,b)},
c:function c(){},
a3:function a3(){},
a4:function a4(){},
m:function m(){},
n:function n(){},
ac:function ac(){},
b:function b(){},
a:function a(){},
M:function M(){},
ag:function ag(){},
q:function q(){},
aA:function aA(){},
D:function D(){},
aU:function aU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
aV:function aV(a){this.a=a}},K={
cy:function(a){var u=a.a
return"rgba("+((16711680&u)>>>16)+", "+((65280&u)>>>8)+", "+((255&u)>>>0)+", "+H.d(((4278190080&u)>>>24)/255)+")"},
cc:function(a){var u=new K.aM(a)
u.F(a)
return u},
cj:function(a,b){if(b==null){a.fillStyle=""
return}a.fillStyle=K.cy(b)},
ck:function(a,b){K.cj(a,b.b)},
bd:function bd(){this.a=null},
as:function as(a){this.a=a},
au:function au(){this.b=this.a=null
this.c=!1},
az:function az(){this.b=this.a=null},
aq:function aq(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b){this.a=a
this.b=b},
aa:function aa(){},
al:function al(){},
at:function at(a,b){this.b=a
this.c=b
this.a=null},
aF:function aF(a,b){this.d=a
this.b=b
this.a=null},
a8:function a8(a){this.a=a},
ar:function ar(){this.b=null},
aM:function aM(a){var _=this
_.a=!1
_.b=a
_.x=_.r=_.f=_.e=_.d=_.c=null},
aN:function aN(a){this.a=a},
aO:function aO(a){this.a=a},
aP:function aP(a){this.a=a}},B={
bJ:function(){var u=K.cc(H.bp(document.querySelector("canvas"),"$im"))
u.x=new B.b9(u)
u.u()},
b9:function b9(a){this.a=a}}
var w=[C,H,J,P,W,K,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bg.prototype={}
J.f.prototype={
h:function(a){return"Instance of '"+H.d(H.U(a))+"'"}}
J.ai.prototype={
h:function(a){return String(a)},
$ia0:1}
J.aj.prototype={
h:function(a){return"null"}}
J.P.prototype={
h:function(a){return String(a)}}
J.av.prototype={}
J.C.prototype={}
J.p.prototype={
h:function(a){var u=a[$.bQ()]
if(u==null)return this.E(a)
return"JavaScript function for "+H.d(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.o.prototype={
h:function(a){return P.by(a,"[","]")},
gv:function(a){return new J.a5(a,a.length)},
gj:function(a){return a.length}}
J.bf.prototype={}
J.a5.prototype={
gk:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.bN(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.z.prototype={
A:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.aL(""+a+".toInt()"))},
w:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.aL(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
C:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
p:function(a,b){return(a|0)===a?a/b|0:this.N(a,b)},
N:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.aL("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
M:function(a,b){var u
if(a>0)u=this.L(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
L:function(a,b){return b>31?0:a>>>b},
$iv:1}
J.O.prototype={$ia1:1}
J.N.prototype={}
J.A.prototype={
I:function(a,b){if(b>=a.length)throw H.e(H.cz(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.e(P.c1(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){return a.length},
$iW:1}
H.an.prototype={
gk:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(P.bx(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
H.af.prototype={}
H.aG.prototype={
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
H.ap.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ak.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.aJ.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bb.prototype={
$1:function(a){if(!!J.u(a).$iy)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:1}
H.a_.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.x.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.J(t==null?"unknown":t)+"'"},
gW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aE.prototype={}
H.aC.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.J(u)+"'"}}
H.K.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.U(u))+"'")}}
H.a7.prototype={
h:function(a){return this.a}}
H.ay.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.b5.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.b6.prototype={
$2:function(a,b){return this.a(a,b)}}
H.b7.prototype={
$1:function(a){return this.a(a)}}
H.S.prototype={}
H.Q.prototype={
gj:function(a){return a.length},
$ibh:1,
$abh:function(){}}
H.R.prototype={}
H.E.prototype={}
H.F.prototype={}
P.aR.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:2}
P.aQ.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.aS.prototype={
$0:function(){this.a.$0()}}
P.aT.prototype={
$0:function(){this.a.$0()}}
P.aZ.prototype={
G:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.I(new P.b_(this,b),0),a)
else throw H.e(P.aL("`setTimeout()` not found."))}}
P.b_.prototype={
$0:function(){this.b.$0()}}
P.Z.prototype={}
P.aD.prototype={}
P.b0.prototype={}
P.b1.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.T():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.aX.prototype={
U:function(a,b){var u,t,s,r=null
try{if(C.b===$.Y){a.$1(b)
return}P.cp(r,r,this,a,b)}catch(s){u=H.cS(s)
t=H.cF(s)
P.co(r,r,this,u,t)}},
V:function(a,b){return this.U(a,b,null)},
O:function(a,b){return new P.aY(this,a,b)}}
P.aY.prototype={
$1:function(a){return this.a.V(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ao.prototype={
gv:function(a){return new H.an(a,a.length)},
h:function(a){return P.by(a,"[","]")}}
P.a0.prototype={
h:function(a){return this?"true":"false"}}
P.b4.prototype={}
P.L.prototype={
h:function(a){var u,t,s,r=new P.ae(),q=this.a
if(q<0)return"-"+new P.L(0-q).h(0)
u=r.$1(C.a.p(q,6e7)%60)
t=r.$1(C.a.p(q,1e6)%60)
s=new P.ad().$1(q%1e6)
return""+C.a.p(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.ad.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ae.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.y.prototype={}
P.T.prototype={
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
r=P.be(q.b)
return t+s+": "+r}}
P.aw.prototype={
gn:function(){return"RangeError"},
gm:function(){return""}}
P.ah.prototype={
gn:function(){return"RangeError"},
gm:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.aK.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aI.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.a9.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.be(u)+"."}}
P.V.prototype={
h:function(a){return"Stack Overflow"},
$iy:1}
P.ab.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.aW.prototype={
h:function(a){return"Exception: "+this.a}}
P.a1.prototype={}
P.am.prototype={}
P.B.prototype={
h:function(a){return"null"}}
P.v.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.d(H.U(this))+"'"},
toString:function(){return this.h(this)}}
P.W.prototype={}
P.X.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.a3.prototype={
h:function(a){return String(a)}}
W.a4.prototype={
h:function(a){return String(a)}}
W.m.prototype={
t:function(a,b){return a.getContext(b)},
$im:1}
W.n.prototype={$in:1}
W.ac.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.M.prototype={
H:function(a,b,c,d){return a.addEventListener(b,H.I(c,1),!1)}}
W.ag.prototype={
gj:function(a){return a.length}}
W.q.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.D(a):u}}
W.aA.prototype={
gj:function(a){return a.length}}
W.D.prototype={
K:function(a,b){return a.requestAnimationFrame(H.I(b,1))},
J:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.aU.prototype={}
W.aV.prototype={
$1:function(a){return this.a.$1(a)}}
K.bd.prototype={}
K.as.prototype={}
K.au.prototype={
P:function(){if(!this.c)return
this.c=!1
var u=this.a
return new K.as(H.bp((u&&C.i).t(u,"2d"),"$in"))}}
K.az.prototype={
S:function(){var u=this.b
if(u==null)return
this.b=u.a},
T:function(a){var u,t=this
if(t.a==null){t.a=t.b=a
return}u=t.b
if(u==null)return
a.a=u
u.b.push(a)
t.b=a}}
K.aq.prototype={}
K.ax.prototype={}
K.aB.prototype={}
K.aa.prototype={
R:function(a){var u,t,s
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.bN)(u),++s)u[s].q(a)}}
K.al.prototype={}
K.at.prototype={
q:function(a){a.drawImage(this.b.a.canvas,0,0)}}
K.aF.prototype={
q:function(a){var u
a.save()
u=this.d
a.transform(u[0],u[1],u[4],u[5],u[12],u[13])
this.R(a)
a.restore()}}
K.a8.prototype={}
K.ar.prototype={}
K.aM.prototype={
F:function(a){var u=new K.aN(this)
u.$0()
this.c=this.b.getContext("2d")
W.ch(window,"resize",new K.aO(u),!1)},
u:function(){if(!this.a){this.a=!0
var u=window
C.e.J(u)
C.e.K(u,W.bE(new K.aP(this),P.v))}}}
K.aN.prototype={
$0:function(){var u,t,s,r,q=window.devicePixelRatio
q.toString
u=this.a
t=q===0?1:q
u.f=t
s=u.b
r=u.d=s.clientWidth*t
t=s.clientHeight*t
u.e=t
u.r=new K.aB(r,t)
s.width=C.c.A(r)
s.height=J.bt(u.e)}}
K.aO.prototype={
$1:function(a){this.a.$0()}}
K.aP.prototype={
$1:function(a){var u,t=this.a
t.a=!1
u=J.bt(a)
t=t.x
if(t!=null)t.$1(new P.L(1000*u))}}
B.b9.prototype={
$1:function(a){var u,t,s,r,q,p,o,n=this.a,m=n.r,l=n.f,k=0+m.a/l
l=0+m.b/l
u=new K.au()
u.b=new K.ax(0,0,k,l)
u.c=!0
m=k-0
k=C.c.w(m)
l-=0
t=C.c.w(l)
s=document.createElement("canvas")
s.width=k
s.height=t
u.a=s
k=H.bp(C.i.t(s,"2d"),"$in")
k.translate(m/2,l/2)
k.rotate(3.141592653589793*C.u.C(a.a/1000/1800,1))
l=new K.ar()
l.b=new K.a8(4278255360)
k.save()
k.beginPath()
k.rect(-100,-100,200,200)
K.ck(k,l)
k.fill()
k.restore()
r=u.P()
q=n.f
p=new Float32Array(16)
p[0]=q
p[5]=q
p[10]=1
p[15]=1
o=new K.az()
o.T(new K.aF(p,[]))
m=o.b
l=new K.at(r,C.r)
m.toString
l.a=m
m.b.push(l)
o.S()
l=o.a
n.c.clearRect(0,0,n.d,n.e)
l.q(n.c)
n.u()}};(function aliases(){var u=J.f.prototype
u.D=u.h
u=J.P.prototype
u.E=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"cv","ce",0)
u(P,"cw","cf",0)
u(P,"cx","cg",0)
t(P,"bG","cs",3)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.h,null)
s(P.h,[H.bg,J.f,J.a5,H.an,H.af,H.aG,P.y,H.x,H.a_,P.aZ,P.Z,P.aD,P.b0,P.ao,P.a0,P.v,P.L,P.V,P.aW,P.am,P.B,P.W,P.X,K.bd,K.as,K.au,K.az,K.aq,K.ax,K.aB,K.al,K.a8,K.ar,K.aM])
s(J.f,[J.ai,J.aj,J.P,J.o,J.z,J.A,H.S,W.M,W.n,W.ac,W.a])
s(J.P,[J.av,J.C,J.p])
t(J.bf,J.o)
s(J.z,[J.O,J.N])
s(P.y,[H.ap,H.ak,H.aJ,H.a7,H.ay,P.T,P.k,P.aK,P.aI,P.a9,P.ab])
s(H.x,[H.bb,H.aE,H.b5,H.b6,H.b7,P.aR,P.aQ,P.aS,P.aT,P.b_,P.b1,P.aY,P.ad,P.ae,W.aV,K.aN,K.aO,K.aP,B.b9])
s(H.aE,[H.aC,H.K])
t(H.Q,H.S)
t(H.E,H.Q)
t(H.F,H.E)
t(H.R,H.F)
t(P.aX,P.b0)
s(P.v,[P.b4,P.a1])
s(P.k,[P.aw,P.ah])
s(W.M,[W.q,W.D])
t(W.b,W.q)
t(W.c,W.b)
s(W.c,[W.a3,W.a4,W.m,W.ag,W.aA])
t(W.aU,P.aD)
s(K.al,[K.aa,K.at])
t(K.aF,K.aa)
u(H.E,P.ao)
u(H.F,H.af)})()
var v={mangledGlobalNames:{a1:"int",b4:"double",v:"num",W:"String",a0:"bool",B:"Null",am:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function constants(){C.i=W.m.prototype
C.t=J.f.prototype
C.u=J.N.prototype
C.a=J.O.prototype
C.c=J.z.prototype
C.j=J.A.prototype
C.v=J.p.prototype
C.k=J.av.prototype
C.d=J.C.prototype
C.e=W.D.prototype
C.f=function getTagFallback(o) {
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
C.h=function(hooks) { return hooks; }

C.r=new K.aq()
C.b=new P.aX()})();(function staticFields(){$.i=0
$.w=null
$.bu=null
$.bI=null
$.bF=null
$.bL=null
$.b3=null
$.b8=null
$.bo=null
$.r=null
$.G=null
$.H=null
$.bk=!1
$.Y=C.b
$.b2=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"cT","bQ",function(){return H.bH("_$dart_dartClosure")})
u($,"cU","br",function(){return H.bH("_$dart_js")})
u($,"cV","bR",function(){return H.j(H.aH({
toString:function(){return"$receiver$"}}))})
u($,"cW","bS",function(){return H.j(H.aH({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"cX","bT",function(){return H.j(H.aH(null))})
u($,"cY","bU",function(){return H.j(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"d0","bX",function(){return H.j(H.aH(void 0))})
u($,"d1","bY",function(){return H.j(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"d_","bW",function(){return H.j(H.bB(null))})
u($,"cZ","bV",function(){return H.j(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"d3","c_",function(){return H.j(H.bB(void 0))})
u($,"d2","bZ",function(){return H.j(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"d4","bs",function(){return P.cd()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.f,CanvasPattern:J.f,DOMError:J.f,MediaError:J.f,NavigatorUserMediaError:J.f,OverconstrainedError:J.f,PositionError:J.f,WebGLRenderingContext:J.f,WebGL2RenderingContext:J.f,SQLError:J.f,ArrayBufferView:H.S,Float32Array:H.R,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.a3,HTMLAreaElement:W.a4,HTMLCanvasElement:W.m,CanvasRenderingContext2D:W.n,DOMException:W.ac,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,EventTarget:W.M,HTMLFormElement:W.ag,Document:W.q,HTMLDocument:W.q,Node:W.q,HTMLSelectElement:W.aA,Window:W.D,DOMWindow:W.D})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})
H.Q.$nativeSuperclassTag="ArrayBufferView"
H.E.$nativeSuperclassTag="ArrayBufferView"
H.F.$nativeSuperclassTag="ArrayBufferView"
H.R.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.bJ,[])
else B.bJ([])})})()
//# sourceMappingURL=spinning_square.dart.js.map
