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
a[c]=function(){a[c]=function(){H.dV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ca(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={c0:function c0(){},
P:function(a){var u,t=H.dW(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
dH:function(a){return v.types[H.O(a)]},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aD(a)
if(typeof u!=="string")throw H.f(H.c7(a))
return u},
ar:function(a){return H.de(a)+H.c6(H.ad(a),0,null)},
de:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.r(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.p||!!l.$ia8){r=C.e(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.h.a6(t,0)===36){if(1>n)H.Y(P.c2(1,m))
if(n>n)H.Y(P.c2(n,m))
t=t.substring(1,n)}return H.P(t)},
m:function(a){throw H.f(H.c7(a))},
e:function(a,b){if(a==null)J.bX(a)
throw H.f(H.cb(a,b))},
cb:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.J(!0,b,s,null)
u=H.O(J.bX(a))
if(!(b<0)){if(typeof u!=="number")return H.m(u)
t=b>=u}else t=!0
if(t)return P.da(b,a,s,null,u)
return P.c2(b,s)},
c7:function(a){return new P.J(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.ao()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cR})
u.name=""}else u.toString=H.cR
return u},
cR:function(){return J.aD(this.dartException)},
Y:function(a){throw H.f(a)},
ch:function(a){throw H.f(P.cq(a))},
E:function(a){var u,t,s,r,q,p
a=H.dT(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.aA([],[P.u])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
be:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
cx:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cv:function(a,b){return new H.b0(a,b==null?null:b.method)},
c1:function(a,b){var u=b==null,t=u?null:b.method
return new H.aX(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.a8(t,16)&8191)===10)switch(s){case 438:return f.$1(H.c1(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.cv(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cT()
q=$.cU()
p=$.cV()
o=$.cW()
n=$.cZ()
m=$.d_()
l=$.cY()
$.cX()
k=$.d1()
j=$.d0()
i=r.l(u)
if(i!=null)return f.$1(H.c1(H.I(u),i))
else{i=q.l(u)
if(i!=null){i.method="call"
return f.$1(H.c1(H.I(u),i))}else{i=p.l(u)
if(i==null){i=o.l(u)
if(i==null){i=n.l(u)
if(i==null){i=m.l(u)
if(i==null){i=l.l(u)
if(i==null){i=o.l(u)
if(i==null){i=k.l(u)
if(i==null){i=j.l(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.cv(H.I(u),i))}}return f.$1(new H.bh(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.au()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.J(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.au()
return a},
ae:function(a){var u
if(a==null)return new H.ax(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ax(a)},
dM:function(a,b,c,d,e,f){H.j(a,"$ibZ")
switch(H.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.bq("Unsupported number of arguments for wrapped closure"))},
ac:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dM)
a.$identity=u
return u},
d8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.b7().constructor.prototype):Object.create(new H.ag(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.C
if(typeof t!=="number")return t.m()
$.C=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.cp(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.d4(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cp(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
d4:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dH,a)
if(typeof a=="function")if(b)return a
else{u=c?H.co:H.bY
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
d5:function(a,b,c,d){var u=H.bY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cp:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.d7(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.d5(t,!r,u,b)
if(t===0){r=$.C
if(typeof r!=="number")return r.m()
$.C=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.Z
return new Function(r+H.d(q==null?$.Z=H.aI("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.C
if(typeof r!=="number")return r.m()
$.C=r+1
o+=r
r="return function("+o+"){return this."
q=$.Z
return new Function(r+H.d(q==null?$.Z=H.aI("self"):q)+"."+H.d(u)+"("+o+");}")()},
d6:function(a,b,c,d){var u=H.bY,t=H.co
switch(b?-1:a){case 0:throw H.f(H.df("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
d7:function(a,b){var u,t,s,r,q,p,o,n=$.Z
if(n==null)n=$.Z=H.aI("self")
u=$.cn
if(u==null)u=$.cn=H.aI("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.d6(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.C
if(typeof u!=="number")return u.m()
$.C=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.C
if(typeof u!=="number")return u.m()
$.C=u+1
return new Function(n+u+"}")()},
ca:function(a,b,c,d,e,f,g){return H.d8(a,b,c,d,!!e,!!f,g)},
bY:function(a){return a.a},
co:function(a){return a.c},
aI:function(a){var u,t,s,r=new H.ag("self","target","receiver","name"),q=J.cr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dD:function(a){if(a==null)H.dz("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.B(a,"String"))},
eg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.B(a,"double"))},
dQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.B(a,"num"))},
ed:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.B(a,"bool"))},
O:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.B(a,"int"))},
dS:function(a,b){throw H.f(H.B(a,H.P(H.I(b).substring(2))))},
dR:function(a,b){throw H.f(H.d3(a,H.P(H.I(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.dS(a,b)},
dL:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else u=!0
if(u)return a
H.dR(a,b)},
ei:function(a){if(a==null)return a
if(!!J.r(a).$ia5)return a
throw H.f(H.B(a,"List<dynamic>"))},
cK:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.O(u)]
else return a.$S()}return},
az:function(a,b){var u
if(typeof a=="function")return!0
u=H.cK(J.r(a))
if(u==null)return!1
return H.cB(u,null,b,null)},
h:function(a,b){var u,t
if(a==null)return a
if($.c4)return a
$.c4=!0
try{if(H.az(a,b))return a
u=H.bU(b)
t=H.B(a,u)
throw H.f(t)}finally{$.c4=!1}},
cc:function(a,b){if(a!=null&&!H.c9(a,b))H.Y(H.B(a,H.bU(b)))
return a},
B:function(a,b){return new H.bf("TypeError: "+P.aj(a)+": type '"+H.d(H.cG(a))+"' is not a subtype of type '"+b+"'")},
d3:function(a,b){return new H.aL("CastError: "+P.aj(a)+": type '"+H.d(H.cG(a))+"' is not a subtype of type '"+b+"'")},
cG:function(a){var u,t=J.r(a)
if(!!t.$ia0){u=H.cK(t)
if(u!=null)return H.bU(u)
return"Closure"}return H.ar(a)},
dz:function(a){throw H.f(new H.bj(a))},
dV:function(a){throw H.f(new P.aN(a))},
df:function(a){return new H.b4(a)},
cL:function(a){return v.getIsolateTag(a)},
aA:function(a,b){a.$ti=b
return a},
ad:function(a){if(a==null)return
return a.$ti},
eh:function(a,b,c){return H.aB(a["$a"+H.d(c)],H.ad(b))},
n:function(a,b){var u=H.ad(a)
return u==null?null:u[b]},
bU:function(a){return H.N(a,null)},
N:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.P(a[0].name)+H.c6(a,1,b)
if(typeof a=="function")return H.P(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.O(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.d(b[t])}if('func' in a)return H.ds(a,b)
if('futureOr' in a)return"FutureOr<"+H.N("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ds:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.aA([],[P.u])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.p(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.h.m(p,a0[m])
l=u[q]
if(l!=null&&l!==P.i)p+=" extends "+H.N(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.N(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.N(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.N(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.dE(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.I(n[g])
i=i+h+H.N(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
c6:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a7("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.N(p,c)}return"<"+u.h(0)+">"},
aB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c8:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ad(a)
t=J.r(a)
if(t[b]==null)return!1
return H.cI(H.aB(t[d],u),null,c,null)},
ec:function(a,b,c,d){if(a==null)return a
if(H.c8(a,b,c,d))return a
throw H.f(H.B(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.P(b.substring(2))+H.c6(c,0,null),v.mangledGlobalNames)))},
cI:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.v(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.v(a[t],b,c[t],d))return!1
return!0},
ee:function(a,b,c){return a.apply(b,H.aB(J.r(b)["$a"+H.d(c)],H.ad(b)))},
cN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="i"||a.name==="k"||a===-1||a===-2||H.cN(u)}return!1},
c9:function(a,b){var u,t
if(a==null)return b==null||b.name==="i"||b.name==="k"||b===-1||b===-2||H.cN(b)
if(b==null||b===-1||b.name==="i"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.c9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.az(a,b)}u=J.r(a).constructor
t=H.ad(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.v(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.c9(a,b))throw H.f(H.B(a,H.bU(b)))
return a},
v:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="i"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="i"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.v(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.v(b[H.O(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="k")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.v("type" in a?a.type:l,b,s,d)
else if(H.v(a,b,s,d))return!0
else{if(!('$i'+"a2" in t.prototype))return!1
r=t.prototype["$a"+"a2"]
q=H.aB(r,u?a.slice(1):l)
return H.v(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.cB(a,b,c,d)
if('func' in a)return c.name==="bZ"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.cI(H.aB(m,u),b,p,d)},
cB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.v(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.v(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.v(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.v(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.dP(h,b,g,d)},
dP:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.v(c[s],d,a[s],b))return!1}return!0},
ef:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
dN:function(a){var u,t,s,r,q=H.I($.cM.$1(a)),p=$.bM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bQ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.cH.$2(a,q))
if(q!=null){p=$.bM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bQ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bT(u)
$.bM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bQ[q]=u
return u}if(s==="-"){r=H.bT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cP(a,u)
if(s==="*")throw H.f(P.cy(q))
if(v.leafTags[q]===true){r=H.bT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cP(a,u)},
cP:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cg(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bT:function(a){return J.cg(a,!1,null,!!a.$idZ)},
dO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bT(u)
else return J.cg(u,c,null,null)},
dJ:function(){if(!0===$.cf)return
$.cf=!0
H.dK()},
dK:function(){var u,t,s,r,q,p,o,n
$.bM=Object.create(null)
$.bQ=Object.create(null)
H.dI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cQ.$1(q)
if(p!=null){o=H.dO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
dI:function(){var u,t,s,r,q,p,o=C.j()
o=H.U(C.k,H.U(C.l,H.U(C.f,H.U(C.f,H.U(C.m,H.U(C.n,H.U(C.o(C.e),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.cM=new H.bN(r)
$.cH=new H.bO(q)
$.cQ=new H.bP(p)},
U:function(a,b){return a(b)||b},
dT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bd:function bd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b0:function b0(a,b){this.a=a
this.b=b},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a},
bV:function bV(a){this.a=a},
ax:function ax(a){this.a=a
this.b=null},
a0:function a0(){},
bc:function bc(){},
b7:function b7(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a){this.a=a},
aL:function aL(a){this.a=a},
b4:function b4(a){this.a=a},
bj:function bj(a){this.a=a},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bN:function bN(a){this.a=a},
bO:function bO(a){this.a=a},
bP:function bP(a){this.a=a},
at:function(a,b,c,d,e){if(c-b<=32)H.dh(a,b,c,d,e)
else H.dg(a,b,c,d,e)},
dh:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.k()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.i(a,s,a[q])
s=q}C.a.i(a,s,t)}},
dg:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.n(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.n(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.e(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.e(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.e(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.e(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.e(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.k()
if(a1>0){p=q
q=r
r=p}C.a.i(a2,d,u)
C.a.i(a2,b,s)
C.a.i(a2,c,q)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.i(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.i(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.bW(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.q()
if(k<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.i(a2,m,a2[o])
C.a.i(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.k()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.i(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.i(a2,o,a2[n])
C.a.i(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.e(a2,n)
C.a.i(a2,m,a2[n])
C.a.i(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.q()
if(g<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.i(a2,m,a2[o])
C.a.i(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.k()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.k()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.q()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.i(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.i(a2,o,a2[n])
C.a.i(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.i(a2,m,a2[n])
C.a.i(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.e(a2,a1)
C.a.i(a2,a3,a2[a1])
C.a.i(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.e(a2,a1)
C.a.i(a2,a4,a2[a1])
C.a.i(a2,a1,r)
H.at(a2,a3,o-2,a5,a6)
H.at(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.e(a2,o)
if(!J.bW(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.e(a2,n)
if(!J.bW(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.i(a2,m,a2[o])
C.a.i(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.q()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.i(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.i(a2,o,a2[n])
C.a.i(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.i(a2,m,a2[n])
C.a.i(a2,n,l)}n=j
break}}}H.at(a2,o,n,a5,a6)}else H.at(a2,o,n,a5,a6)},
dE:function(a){return J.dd(a?Object.keys(a):[],null)},
dW:function(a){return v.mangledGlobalNames[a]}},J={
cg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.cf==null){H.dJ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.cy("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ci()]
if(r!=null)return r
r=H.dN(a)
if(r!=null)return r
if(typeof a=="function")return C.r
u=Object.getPrototypeOf(a)
if(u==null)return C.i
if(u===Object.prototype)return C.i
if(typeof s=="function"){Object.defineProperty(s,$.ci(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
dd:function(a,b){return J.cr(H.aA(a,[b]))},
cr:function(a){a.fixed$length=Array
return a},
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.am.prototype
return J.aU.prototype}if(typeof a=="string")return J.a4.prototype
if(a==null)return J.aV.prototype
if(typeof a=="boolean")return J.aT.prototype
if(a.constructor==Array)return J.R.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.i)return a
return J.ce(a)},
dF:function(a){if(typeof a=="string")return J.a4.prototype
if(a==null)return a
if(a.constructor==Array)return J.R.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.i)return a
return J.ce(a)},
dG:function(a){if(typeof a=="number")return J.a3.prototype
if(a==null)return a
if(!(a instanceof P.i))return J.a8.prototype
return a},
cd:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.i)return a
return J.ce(a)},
bW:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).I(a,b)},
d2:function(a,b,c,d){return J.cd(a).a5(a,b,c,d)},
bX:function(a){return J.dF(a).gj(a)},
ck:function(a){return J.cd(a).gu(a)},
cl:function(a){return J.cd(a).gal(a)},
aC:function(a){return J.dG(a).aj(a)},
aD:function(a){return J.r(a).h(a)},
p:function p(){},
aT:function aT(){},
aV:function aV(){},
an:function an(){},
b1:function b1(){},
a8:function a8(){},
S:function S(){},
R:function R(a){this.$ti=a},
c_:function c_(a){this.$ti=a},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(){},
am:function am(){},
aU:function aU(){},
a4:function a4(){}},P={
dk:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.dA()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ac(new P.bl(s),1)).observe(u,{childList:true})
return new P.bk(s,u,t)}else if(self.setImmediate!=null)return P.dB()
return P.dC()},
dl:function(a){self.scheduleImmediate(H.ac(new P.bm(H.h(a,{func:1,ret:-1})),0))},
dm:function(a){self.setImmediate(H.ac(new P.bn(H.h(a,{func:1,ret:-1})),0))},
dn:function(a){H.h(a,{func:1,ret:-1})
P.dq(0,a)},
cw:function(a,b){var u=C.c.n(a.a,1000)
return P.dr(u<0?0:u,b)},
dq:function(a,b){var u=new P.ay()
u.a3(a,b)
return u},
dr:function(a,b){var u=new P.ay()
u.a4(a,b)
return u},
dp:function(a,b){var u,t,s
b.a=1
try{a.V(new P.bu(b),new P.bv(b),P.k)}catch(s){u=H.af(s)
t=H.ae(s)
P.dU(new P.bw(b,u,t))}},
cA:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iy")
if(u>=4){t=b.A()
b.a=a.a
b.c=a.c
P.a9(b,t)}else{t=H.j(b.c,"$iG")
b.a=2
b.c=a
a.N(t)}},
a9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$io")
P.bJ(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.a9(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.j(q,"$io")
P.bJ(i,i,g.b,q.a,q.b)
return}l=$.l
if(l!==n)$.l=n
else l=i
g=b.c
if((g&15)===8)new P.bA(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.bz(u,b,q).$0()}else if((g&2)!==0)new P.by(h,u,b).$0()
if(l!=null)$.l=l
g=u.b
if(!!J.r(g).$ia2){if(g.a>=4){k=H.j(o.c,"$iG")
o.c=null
b=o.t(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.cA(g,o)
return}}j=b.b
k=H.j(j.c,"$iG")
j.c=null
b=j.t(k)
g=u.a
p=u.b
if(!g){H.z(p,H.n(j,0))
j.a=4
j.c=p}else{H.j(p,"$io")
j.a=8
j.c=p}h.a=j
g=j}},
du:function(a,b){if(H.az(a,{func:1,args:[P.i,P.t]}))return H.h(a,{func:1,ret:null,args:[P.i,P.t]})
if(H.az(a,{func:1,args:[P.i]}))return H.h(a,{func:1,ret:null,args:[P.i]})
throw H.f(P.cm(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
dt:function(){var u,t
for(;u=$.T,u!=null;){$.ab=null
t=u.b
$.T=t
if(t==null)$.aa=null
u.a.$0()}},
dx:function(){$.c5=!0
try{P.dt()}finally{$.ab=null
$.c5=!1
if($.T!=null)$.cj().$1(P.cJ())}},
cF:function(a){var u=new P.aw(a)
if($.T==null){$.T=$.aa=u
if(!$.c5)$.cj().$1(P.cJ())}else $.aa=$.aa.b=u},
dw:function(a){var u,t,s=$.T
if(s==null){P.cF(a)
$.ab=$.aa
return}u=new P.aw(a)
t=$.ab
if(t==null){u.b=s
$.T=$.ab=u}else{u.b=t.b
$.ab=t.b=u
if(u.b==null)$.aa=u}},
dU:function(a){var u=null,t=$.l
if(C.b===t){P.bL(u,u,C.b,a)
return}P.bL(u,u,t,H.h(t.P(a),{func:1,ret:-1}))},
dj:function(a,b){var u=$.l
if(u===C.b)return P.cw(a,H.h(b,{func:1,ret:-1,args:[P.D]}))
return P.cw(a,H.h(u.R(b,P.D),{func:1,ret:-1,args:[P.D]}))},
bJ:function(a,b,c,d,e){var u={}
u.a=d
P.dw(new P.bK(u,e))},
cD:function(a,b,c,d,e){var u,t=$.l
if(t===c)return d.$0()
$.l=c
u=t
try{t=d.$0()
return t}finally{$.l=u}},
cE:function(a,b,c,d,e,f,g){var u,t=$.l
if(t===c)return d.$1(e)
$.l=c
u=t
try{t=d.$1(e)
return t}finally{$.l=u}},
dv:function(a,b,c,d,e,f,g,h,i){var u,t=$.l
if(t===c)return d.$2(e,f)
$.l=c
u=t
try{t=d.$2(e,f)
return t}finally{$.l=u}},
bL:function(a,b,c,d){var u
H.h(d,{func:1,ret:-1})
u=C.b!==c
if(u)d=!(!u||!1)?c.P(d):c.a9(d,-1)
P.cF(d)},
bl:function bl(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a){this.a=a},
bn:function bn(a){this.a=a},
ay:function ay(){this.c=0},
bH:function bH(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
y:function y(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bt:function bt(a,b){this.a=a
this.b=b},
bx:function bx(a,b){this.a=a
this.b=b},
bu:function bu(a){this.a=a},
bv:function bv(a){this.a=a},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a){this.a=a},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a){this.a=a
this.b=null},
b8:function b8(){},
ba:function ba(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
b9:function b9(){},
D:function D(){},
o:function o(a,b){this.a=a
this.b=b},
bI:function bI(){},
bK:function bK(a,b){this.a=a
this.b=b},
bC:function bC(){},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function(a,b){return new H.aW([a,b])},
dc:function(a,b,c){var u,t
if(P.cC(a))return b+"..."+c
u=new P.a7(b)
C.a.p($.H,a)
try{t=u
t.a=P.di(t.a,a,", ")}finally{if(0>=$.H.length)return H.e($.H,-1)
$.H.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cC:function(a){var u,t
for(u=$.H.length,t=0;t<u;++t)if(a===$.H[t])return!0
return!1},
ct:function(a){var u,t={}
if(P.cC(a))return"{...}"
u=new P.a7("")
try{C.a.p($.H,a)
u.a+="{"
t.a=!0
a.ab(0,new P.aZ(t,u))
u.a+="}"}finally{if(0>=$.H.length)return H.e($.H,-1)
$.H.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
aY:function aY(){},
aZ:function aZ(a,b){this.a=a
this.b=b},
b_:function b_(){},
d9:function(a){if(a instanceof H.a0)return a.h(0)
return"Instance of '"+H.d(H.ar(a))+"'"},
di:function(a,b,c){var u=new J.aG(b,b.length,[H.n(b,0)])
if(!u.D())return a
if(c.length===0){do a+=H.d(u.d)
while(u.D())}else{a+=H.d(u.d)
for(;u.D();)a=a+c+H.d(u.d)}return a},
aj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.d9(a)},
cm:function(a,b,c){return new P.J(!0,a,b,c)},
c2:function(a,b){return new P.b3(null,null,!0,a,b,"Value not in range")},
da:function(a,b,c,d,e){var u=H.O(e==null?J.bX(b):e)
return new P.aS(u,!0,a,c,"Index out of range")},
M:function(a){return new P.bi(a)},
cy:function(a){return new P.bg(a)},
cq:function(a){return new P.aM(a)},
V:function V(){},
W:function W(){},
ai:function ai(a){this.a=a},
aP:function aP(){},
aQ:function aQ(){},
Q:function Q(){},
aH:function aH(){},
ao:function ao(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aS:function aS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bi:function bi(a){this.a=a},
bg:function bg(a){this.a=a},
aM:function aM(a){this.a=a},
au:function au(){},
aN:function aN(a){this.a=a},
bq:function bq(a){this.a=a},
A:function A(){},
a5:function a5(){},
k:function k(){},
X:function X(){},
i:function i(){},
t:function t(){},
u:function u(){},
a7:function a7(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
cz:function(a,b,c,d,e){var u=W.dy(new W.bp(c),W.a),t=u!=null
if(t&&!0){H.h(u,{func:1,args:[W.a]})
if(t)J.d2(a,b,u,!1)}return new W.bo(a,b,u,!1,[e])},
dy:function(a,b){var u=$.l
if(u===C.b)return a
return u.R(a,b)},
c:function c(){},
aE:function aE(){},
aF:function aF(){},
a_:function a_(){},
ah:function ah(){},
K:function K(){},
aO:function aO(){},
b:function b(){},
a:function a(){},
a1:function a1(){},
aR:function aR(){},
w:function w(){},
x:function x(){},
as:function as(){},
b6:function b6(){},
F:function F(){},
av:function av(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bo:function bo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bp:function bp(a){this.a=a}},G={aK:function aK(a,b,c,d,e,f){var _=this
_.y=a
_.z=b
_.a=c
_.b=d
_.c=e
_.d=f
_.x=_.r=_.f=_.e=null}},R={aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d}},U={ak:function ak(){},br:function br(){},aq:function aq(a,b,c,d,e){var _=this
_.r=1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},F={al:function al(){},bs:function bs(){},
cO:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=document,b=H.dL(c.querySelector("#canvas"),"$ia_"),a=window.innerWidth,a0=window.innerHeight,a1=Z.cu(),a2=H.aA([],[M.ap]),a3=P.A,a4=new G.aK(b,b.getContext("2d"),Z.cu(),H.aA([],[P.i]),P.cs(a3,U.ak),P.cs(a3,F.al))
a.toString
a0.toString
a4.a1(a,a0)
b.width=J.aC(a)
b.height=J.aC(a0)
for(u=0;u<50;++u)for(a3=u*100-2500,t=0;t<50;++t){s=new A.q(0,0,0)
r=new A.q(0,0,0)
q=new A.q(1,1,1)
p=new Z.L()
s.a=a3
o=t*100-2500
s.c=o
n=new Z.L()
n.d=a3
n.ch=o
p.E(n)
o=r.a
m=r.b
l=r.c
k=Math.sin(m)
j=Math.sin(o)
i=Math.sin(l)
h=Math.cos(m)
g=Math.cos(o)
f=Math.cos(l)
e=new Z.L()
l=k*j
e.a=h*f-l*i
e.b=-g*i
o=h*j
e.c=k*f+o*i
e.e=h*i+l*f
e.f=g*f
e.r=k*i-o*f
e.y=-k*g
e.z=j
e.Q=h*g
p.E(e)
o=q.a
l=q.b
m=q.c
n=new Z.L()
n.a=o
n.f=l
n.Q=m
p.E(n)
C.a.p(a2,new U.aq(s,r,q,p,new A.q(0,0,0)))}c.body.appendChild(b)
d.a=d.b=0
a3=W.w
W.cz(c,"mousemove",H.h(new F.bR(d,window.innerWidth,window.innerHeight),{func:1,ret:-1,args:[a3]}),!1,a3)
d.c=0
P.dj(new P.ai(43e3),new F.bS(d,new R.aJ(new A.q(0,0,1000),new A.q(0,1,0),new A.q(0,0,0),a1),new N.b5(a2),a4))},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Z={
cu:function(){return new Z.L()},
L:function L(){var _=this
_.a=1
_.e=_.d=_.c=_.b=0
_.f=1
_.z=_.y=_.x=_.r=0
_.Q=1
_.ch=0}},A={q:function q(a,b,c){this.a=a
this.b=b
this.c=c}},M={ap:function ap(){}},E={a6:function a6(){}},N={b5:function b5(a){this.a=a}}
var w=[C,H,J,P,W,G,R,U,F,Z,A,M,E,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.c0.prototype={}
J.p.prototype={
I:function(a,b){return a===b},
h:function(a){return"Instance of '"+H.d(H.ar(a))+"'"}}
J.aT.prototype={
h:function(a){return String(a)},
$iV:1}
J.aV.prototype={
I:function(a,b){return null==b},
h:function(a){return"null"},
$ik:1}
J.an.prototype={
h:function(a){return String(a)}}
J.b1.prototype={}
J.a8.prototype={}
J.S.prototype={
h:function(a){var u=a[$.cS()]
if(u==null)return this.a_(a)
return"JavaScript function for "+H.d(J.aD(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibZ:1}
J.R.prototype={
p:function(a,b){H.z(b,H.n(a,0))
if(!!a.fixed$length)H.Y(P.M("add"))
a.push(b)},
h:function(a){return P.dc(a,"[","]")},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Y(P.M("set length"))
a.length=b},
i:function(a,b,c){H.z(c,H.n(a,0))
if(!!a.immutable$list)H.Y(P.M("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cb(a,b))
a[b]=c},
$idb:1,
$ia5:1}
J.c_.prototype={}
J.aG.prototype={
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.ch(s))
u=t.c
if(u>=r){t.sM(null)
return!1}t.sM(s[u]);++t.c
return!0},
sM:function(a){this.d=H.z(a,H.n(this,0))}}
J.a3.prototype={
aa:function(a,b){var u
H.dQ(b)
if(typeof b!=="number")throw H.f(H.c7(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gC(b)
if(this.gC(a)===u)return 0
if(this.gC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gC:function(a){return a===0?1/a<0:a<0},
aj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.M(""+a+".toInt()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.O(a,b)},
n:function(a,b){return(a|0)===a?a/b|0:this.O(a,b)},
O:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.M("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
a8:function(a,b){var u
if(a>0)u=this.a7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
a7:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iX:1}
J.am.prototype={$iA:1}
J.aU.prototype={}
J.a4.prototype={
a6:function(a,b){if(b>=a.length)throw H.f(H.cb(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.f(P.cm(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){return a.length},
$iu:1}
H.bd.prototype={
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
H.b0.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aX.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.bh.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bV.prototype={
$1:function(a){if(!!J.r(a).$iQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.ax.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$it:1}
H.a0.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.P(t==null?"unknown":t)+"'"},
$ibZ:1,
gam:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bc.prototype={}
H.b7.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.P(u)+"'"}}
H.ag.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.ar(u))+"'")}}
H.bf.prototype={
h:function(a){return this.a}}
H.aL.prototype={
h:function(a){return this.a}}
H.b4.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.bj.prototype={
h:function(a){return"Assertion failed: "+P.aj(this.a)}}
H.aW.prototype={
gj:function(a){return this.a},
ab:function(a,b){var u,t,s=this
H.h(b,{func:1,ret:-1,args:[H.n(s,0),H.n(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.cq(s))
u=u.c}},
h:function(a){return P.ct(this)}}
H.bN.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.bO.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.bP.prototype={
$1:function(a){return this.a(H.I(a))},
$S:7}
P.bl.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.bk.prototype={
$1:function(a){var u,t
this.a.a=H.h(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.bm.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bn.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ay.prototype={
a3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ac(new P.bH(this,b),0),a)
else throw H.f(P.M("`setTimeout()` not found."))},
a4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ac(new P.bG(this,a,Date.now(),b),0),a)
else throw H.f(P.M("Periodic timer."))},
$iD:1}
P.bH.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.bG.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.a2(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.G.prototype={
ae:function(a){if((this.c&15)!==6)return!0
return this.b.b.H(H.h(this.d,{func:1,ret:P.V,args:[P.i]}),a.a,P.V,P.i)},
ac:function(a){var u=this.e,t=P.i,s={futureOr:1,type:H.n(this,1)},r=this.b.b
if(H.az(u,{func:1,args:[P.i,P.t]}))return H.cc(r.af(u,a.a,a.b,null,t,P.t),s)
else return H.cc(r.H(H.h(u,{func:1,args:[P.i]}),a.a,null,t),s)}}
P.y.prototype={
V:function(a,b,c){var u,t,s,r=H.n(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.l
if(u!==C.b){H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.du(b,u)}t=new P.y($.l,[c])
s=b==null?1:3
this.J(new P.G(t,s,a,b,[r,c]))
return t},
ai:function(a,b){return this.V(a,null,b)},
J:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$iG")
t.c=a}else{if(s===2){u=H.j(t.c,"$iy")
s=u.a
if(s<4){u.J(a)
return}t.a=s
t.c=u.c}P.bL(null,null,t.b,H.h(new P.bt(t,a),{func:1,ret:-1}))}},
N:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$iG")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iy")
u=q.a
if(u<4){q.N(a)
return}p.a=u
p.c=q.c}o.a=p.t(a)
P.bL(null,null,p.b,H.h(new P.bx(o,p),{func:1,ret:-1}))}},
A:function(){var u=H.j(this.c,"$iG")
this.c=null
return this.t(u)},
t:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
K:function(a){var u,t,s=this,r=H.n(s,0)
H.cc(a,{futureOr:1,type:r})
u=s.$ti
if(H.c8(a,"$ia2",u,"$aa2"))if(H.c8(a,"$iy",u,null))P.cA(a,s)
else P.dp(a,s)
else{t=s.A()
H.z(a,r)
s.a=4
s.c=a
P.a9(s,t)}},
L:function(a,b){var u,t=this
H.j(b,"$it")
u=t.A()
t.a=8
t.c=new P.o(a,b)
P.a9(t,u)},
$ia2:1}
P.bt.prototype={
$0:function(){P.a9(this.a,this.b)},
$S:0}
P.bx.prototype={
$0:function(){P.a9(this.b,this.a.a)},
$S:0}
P.bu.prototype={
$1:function(a){var u=this.a
u.a=0
u.K(a)},
$S:4}
P.bv.prototype={
$2:function(a,b){H.j(b,"$it")
this.a.L(a,b)},
$1:function(a){return this.$2(a,null)},
$S:9}
P.bw.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:0}
P.bA.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.U(H.h(s.d,{func:1}),null)}catch(r){u=H.af(r)
t=H.ae(r)
if(o.d){s=H.j(o.a.a.c,"$io").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$io")
else q.b=new P.o(u,t)
q.a=!0
return}if(!!J.r(n).$ia2){if(n instanceof P.y&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$io")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ai(new P.bB(p),null)
s.a=!1}},
$S:1}
P.bB.prototype={
$1:function(a){return this.a},
$S:10}
P.bz.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.n(s,0)
q=H.z(n.c,r)
p=H.n(s,1)
n.a.b=s.b.b.H(H.h(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.af(o)
t=H.ae(o)
s=n.a
s.b=new P.o(u,t)
s.a=!0}},
$S:1}
P.by.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$io")
r=m.c
if(H.dD(r.ae(u))&&r.e!=null){q=m.b
q.b=r.ac(u)
q.a=!1}}catch(p){t=H.af(p)
s=H.ae(p)
r=H.j(m.a.a.c,"$io")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.o(t,s)
n.a=!0}},
$S:1}
P.aw.prototype={}
P.b8.prototype={
gj:function(a){var u,t,s=this,r={},q=new P.y($.l,[P.A])
r.a=0
u=H.n(s,0)
t=H.h(new P.ba(r,s),{func:1,ret:-1,args:[u]})
H.h(new P.bb(r,q),{func:1,ret:-1})
W.cz(s.a,s.b,t,!1,u)
return q}}
P.ba.prototype={
$1:function(a){H.z(a,H.n(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.k,args:[H.n(this.b,0)]}}}
P.bb.prototype={
$0:function(){this.b.K(this.a.a)},
$S:0}
P.b9.prototype={}
P.D.prototype={}
P.o.prototype={
h:function(a){return H.d(this.a)},
$iQ:1}
P.bI.prototype={$iea:1}
P.bK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ao():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u},
$S:0}
P.bC.prototype={
ag:function(a){var u,t,s,r=null
H.h(a,{func:1,ret:-1})
try{if(C.b===$.l){a.$0()
return}P.cD(r,r,this,a,-1)}catch(s){u=H.af(s)
t=H.ae(s)
P.bJ(r,r,this,u,H.j(t,"$it"))}},
ah:function(a,b,c){var u,t,s,r=null
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.b===$.l){a.$1(b)
return}P.cE(r,r,this,a,b,-1,c)}catch(s){u=H.af(s)
t=H.ae(s)
P.bJ(r,r,this,u,H.j(t,"$it"))}},
a9:function(a,b){return new P.bE(this,H.h(a,{func:1,ret:b}),b)},
P:function(a){return new P.bD(this,H.h(a,{func:1,ret:-1}))},
R:function(a,b){return new P.bF(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
U:function(a,b){H.h(a,{func:1,ret:b})
if($.l===C.b)return a.$0()
return P.cD(null,null,this,a,b)},
H:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.l===C.b)return a.$1(b)
return P.cE(null,null,this,a,b,c,d)},
af:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.l===C.b)return a.$2(b,c)
return P.dv(null,null,this,a,b,c,d,e,f)}}
P.bE.prototype={
$0:function(){return this.a.U(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.bD.prototype={
$0:function(){return this.a.ag(this.b)},
$S:1}
P.bF.prototype={
$1:function(a){var u=this.c
return this.a.ah(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.aY.prototype={}
P.aZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:11}
P.b_.prototype={
gj:function(a){return this.a},
h:function(a){return P.ct(this)},
$ie_:1}
P.V.prototype={}
P.W.prototype={}
P.ai.prototype={
h:function(a){var u,t,s,r=new P.aQ(),q=this.a
if(q<0)return"-"+new P.ai(0-q).h(0)
u=r.$1(C.c.n(q,6e7)%60)
t=r.$1(C.c.n(q,1e6)%60)
s=new P.aP().$1(q%1e6)
return""+C.c.n(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.aP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:5}
P.aQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:5}
P.Q.prototype={}
P.aH.prototype={
h:function(a){return"Assertion failed"}}
P.ao.prototype={
h:function(a){return"Throw of null."}}
P.J.prototype={
gw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gv:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gw()+o+u
if(!q.a)return t
s=q.gv()
r=P.aj(q.b)
return t+s+": "+r}}
P.b3.prototype={
gw:function(){return"RangeError"},
gv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.aS.prototype={
gw:function(){return"RangeError"},
gv:function(){var u,t=H.O(this.b)
if(typeof t!=="number")return t.q()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.bi.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bg.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aM.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aj(u)+"."}}
P.au.prototype={
h:function(a){return"Stack Overflow"},
$iQ:1}
P.aN.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bq.prototype={
h:function(a){return"Exception: "+this.a}}
P.A.prototype={}
P.a5.prototype={$idb:1}
P.k.prototype={
h:function(a){return"null"}}
P.X.prototype={}
P.i.prototype={constructor:P.i,$ii:1,
h:function(a){return"Instance of '"+H.d(H.ar(this))+"'"},
toString:function(){return this.h(this)}}
P.t.prototype={}
P.u.prototype={}
P.a7.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.aE.prototype={
h:function(a){return String(a)}}
W.aF.prototype={
h:function(a){return String(a)}}
W.a_.prototype={$ia_:1}
W.ah.prototype={$iah:1}
W.K.prototype={
gj:function(a){return a.length}}
W.aO.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.a1.prototype={
a5:function(a,b,c,d){return a.addEventListener(b,H.ac(H.h(c,{func:1,args:[W.a]}),1),!1)},
$ia1:1}
W.aR.prototype={
gj:function(a){return a.length}}
W.w.prototype={
gu:function(a){return new P.b2(a.screenX,a.screenY,[P.X])},
$iw:1}
W.x.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.Z(a):u}}
W.as.prototype={$ias:1}
W.b6.prototype={
gj:function(a){return a.length}}
W.F.prototype={}
W.av.prototype={
gu:function(a){return a.screen}}
W.c3.prototype={}
W.bo.prototype={}
W.bp.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ia"))},
$S:12}
P.b2.prototype={
h:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"}}
G.aK.prototype={
G:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this
k.a0(a,b)
u=k.z
u.clearRect(0,0,k.e,k.f)
for(t=k.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.ch)(t),++r){q=t[r]
p=J.r(q)
if(!!p.$iak){u.beginPath()
p=q.d.f
o=p.a
n=k.r
if(typeof n!=="number")return H.m(n)
p=p.b
m=k.x
if(typeof m!=="number")return H.m(m)
u.moveTo(o+n,p+m)
m=q.e.f
p=m.a
n=k.r
if(typeof n!=="number")return H.m(n)
m=m.b
o=k.x
if(typeof o!=="number")return H.m(o)
u.lineTo(p+n,m+o)
o=q.f.f
m=o.a
n=k.r
if(typeof n!=="number")return H.m(n)
o=o.b
p=k.x
if(typeof p!=="number")return H.m(p)
u.lineTo(m+n,o+p)
u.fill()
u.closePath()}else if(!!p.$ial){u.beginPath()
p=q.d.f
o=p.a
n=k.r
if(typeof n!=="number")return H.m(n)
p=p.b
m=k.x
if(typeof m!=="number")return H.m(m)
u.moveTo(o+n,p+m)
m=q.e.f
p=m.a
n=k.r
if(typeof n!=="number")return H.m(n)
m=m.b
o=k.x
if(typeof o!=="number")return H.m(o)
u.lineTo(p+n,m+o)
o=q.f.f
m=o.a
n=k.r
if(typeof n!=="number")return H.m(n)
o=o.b
p=k.x
if(typeof p!=="number")return H.m(p)
u.lineTo(m+n,o+p)
p=q.r.f
o=p.a
n=k.r
if(typeof n!=="number")return H.m(n)
p=p.b
m=k.x
if(typeof m!=="number")return H.m(m)
u.lineTo(o+n,p+m)
u.fill()
u.closePath()}else if(!!p.$iaq){u.beginPath()
p=q.e
o=p.a
n=k.r
if(typeof n!=="number")return H.m(n)
m=p.b
l=k.x
if(typeof l!=="number")return H.m(l)
u.arc(o+n,m+l,q.r*p.c,0,6.283185307179586,!0)
u.fill()
u.closePath()}}}}
R.aJ.prototype={}
U.ak.prototype={}
U.br.prototype={}
F.al.prototype={}
F.bs.prototype={}
Z.L.prototype={
ak:function(a,b){var u=this,t=b.a,s=b.b,r=b.c
b.a=u.a*t+u.b*s+u.c*r+u.d
b.b=u.e*t+u.f*s+u.r*r+u.x
b.c=u.y*t+u.z*s+u.Q*r+u.ch},
E:function(a1){var u,t,s,r,q,p,o=this,n=o.a,m=o.b,l=o.c,k=o.d,j=o.e,i=o.f,h=o.r,g=o.x,f=o.y,e=o.z,d=o.Q,c=o.ch,b=a1.a,a=a1.e,a0=a1.y
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
A.q.prototype={
S:function(a){var u,t=this,s=t.a,r=t.b,q=t.c,p=a.c
t.a=r*p-q*a.b
u=a.a
t.b=q*u-s*p
t.c=s*a.b-r*u},
ad:function(a){var u=this.a,t=this.b,s=this.c
return Math.sqrt(u*u+t*t+s*s)},
T:function(){var u=this.a,t=this.b,s=this.c
return u*u+t*t+s*s},
F:function(){var u=this,t=Math.sqrt(u.T())>0?1/Math.sqrt(u.T()):0
u.a*=t
u.b*=t
u.c*=t
return u},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
gal:function(a){return this.c}}
M.ap.prototype={
gu:function(a){return this.e}}
U.aq.prototype={}
E.a6.prototype={
W:function(a,b){var u=this
u.e=a
u.f=b
u.r=a/2
u.x=b/2},
Y:function(a,b,c){return C.q.aa(J.cl(J.ck(b)),J.cl(J.ck(c)))},
G:function(a,b){var u,t,s,r,q,p,o,n=this.b
C.a.sj(n,0)
for(u=a.a,t=u.length,s=b.r,r=0;r<u.length;u.length===t||(0,H.ch)(u),++r){q=u[r]
p=q.e
o=q.a
p.a=o.a
p.b=o.b
p.c=o.c
s.ak(0,p)
o=p.c=1500/(500+p.c)
if(o<=0)continue
p.a*=o
p.b*=o
C.a.p(n,q)}u=H.n(n,0)
t=H.h(this.gX(this),{func:1,ret:P.A,args:[u,u]})
if(!!n.immutable$list)H.Y(P.M("sort"))
H.at(n,0,n.length-1,t,u)}}
N.b5.prototype={}
F.bR.prototype={
$1:function(a){var u,t,s
H.j(a,"$iw")
u=a.clientX
a.clientY
u=J.aC(u)
t=this.b
if(typeof t!=="number")return H.m(t)
s=this.a
s.b=u-t
t=J.aC(a.clientY)
u=this.c
if(typeof u!=="number")return H.m(u)
s.a=t-u},
$S:15}
F.bS.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
H.j(a,"$iD")
u=f.b
t=u.a
s=t.a
r=f.a
s+=(r.b-s)*0.05
t.a=s
q=t.b
q+=(-r.a-q)*0.05
t.b=q
p=u.r
o=u.c
n=new A.q(o.a-s,o.b-q,o.c-t.c)
n.F()
m=new A.q(n.a,n.b,n.c)
m.S(u.b)
m.F()
l=new A.q(m.a,m.b,m.c)
l.S(n)
l.F()
l.a=-l.a
l.b=-l.b
l.c=-l.c
p.a=m.a
p.b=m.b
p.c=m.c
p.d=m.B(t)
p.e=l.a
p.f=l.b
p.r=l.c
p.x=l.B(t)
p.y=n.a
p.z=n.b
p.Q=n.c
p.ch=-n.B(t)
for(t=f.c,s=t.a,k=0,j=0;j<50;++j)for(i=0;i<50;++i,k=h){h=k+1
if(k<0||k>=s.length)return H.e(s,k)
g=s[k]
g.r=(Math.sin((j+r.c)*0.3)+1)*2+(Math.sin((i+r.c)*0.5)+1)*2
g.a.b=Math.sin((j+r.c)*0.3)*50+Math.sin((i+r.c)*0.5)*50}f.d.G(t,u)
r.c+=0.1},
$S:16};(function aliases(){var u=J.p.prototype
u.Z=u.h
u=J.an.prototype
u.a_=u.h
u=E.a6.prototype
u.a1=u.W
u.a0=u.G})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers._instance_0i,r=hunkHelpers._instance_2i
u(P,"dA","dl",2)
u(P,"dB","dm",2)
u(P,"dC","dn",2)
t(P,"cJ","dx",1)
s(A.q.prototype,"gj","ad",13)
r(E.a6.prototype,"gX","Y",14)})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.i,null)
t(P.i,[H.c0,J.p,J.aG,H.bd,P.Q,H.a0,H.ax,P.b_,P.ay,P.G,P.y,P.aw,P.b8,P.b9,P.D,P.o,P.bI,P.V,P.X,P.ai,P.au,P.bq,P.a5,P.k,P.t,P.u,P.a7,P.b2,E.a6,R.aJ,A.q,Z.L,M.ap,N.b5])
t(J.p,[J.aT,J.aV,J.an,J.R,J.a3,J.a4,W.a1,W.ah,W.aO,W.a,W.as])
t(J.an,[J.b1,J.a8,J.S])
u(J.c_,J.R)
t(J.a3,[J.am,J.aU])
t(P.Q,[H.b0,H.aX,H.bh,H.bf,H.aL,H.b4,P.aH,P.ao,P.J,P.bi,P.bg,P.aM,P.aN])
t(H.a0,[H.bV,H.bc,H.bN,H.bO,H.bP,P.bl,P.bk,P.bm,P.bn,P.bH,P.bG,P.bt,P.bx,P.bu,P.bv,P.bw,P.bA,P.bB,P.bz,P.by,P.ba,P.bb,P.bK,P.bE,P.bD,P.bF,P.aZ,P.aP,P.aQ,W.bp,F.bR,F.bS])
t(H.bc,[H.b7,H.ag])
u(H.bj,P.aH)
u(P.aY,P.b_)
u(H.aW,P.aY)
u(P.bC,P.bI)
t(P.X,[P.W,P.A])
t(P.J,[P.b3,P.aS])
t(W.a1,[W.x,W.av])
t(W.x,[W.b,W.K])
u(W.c,W.b)
t(W.c,[W.aE,W.aF,W.a_,W.aR,W.b6])
u(W.F,W.a)
u(W.w,W.F)
u(W.c3,P.b8)
u(W.bo,P.b9)
u(G.aK,E.a6)
t(A.q,[U.br,F.bs])
u(U.ak,U.br)
u(F.al,F.bs)
u(U.aq,M.ap)})()
var v={mangledGlobalNames:{A:"int",W:"double",X:"num",u:"String",V:"bool",k:"Null",a5:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.k},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.k,args:[,]},{func:1,ret:P.u,args:[P.A]},{func:1,args:[,P.u]},{func:1,args:[P.u]},{func:1,ret:P.k,args:[{func:1,ret:-1}]},{func:1,ret:P.k,args:[,],opt:[P.t]},{func:1,ret:[P.y,,],args:[,]},{func:1,ret:P.k,args:[,,]},{func:1,args:[W.a]},{func:1,ret:P.W},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.k,args:[W.w]},{func:1,ret:P.k,args:[P.D]}],interceptorsByTag:null,leafTags:null};(function constants(){C.p=J.p.prototype
C.a=J.R.prototype
C.c=J.am.prototype
C.q=J.a3.prototype
C.h=J.a4.prototype
C.r=J.S.prototype
C.i=J.b1.prototype
C.d=J.a8.prototype
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function() {
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
C.o=function(getTagFallback) {
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
C.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.l=function(hooks) {
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
C.n=function(hooks) {
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
C.m=function(hooks) {
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
C.f=function(hooks) { return hooks; }

C.b=new P.bC()})();(function staticFields(){$.C=0
$.Z=null
$.cn=null
$.c4=!1
$.cM=null
$.cH=null
$.cQ=null
$.bM=null
$.bQ=null
$.cf=null
$.T=null
$.aa=null
$.ab=null
$.c5=!1
$.l=C.b
$.H=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dX","cS",function(){return H.cL("_$dart_dartClosure")})
u($,"dY","ci",function(){return H.cL("_$dart_js")})
u($,"e0","cT",function(){return H.E(H.be({
toString:function(){return"$receiver$"}}))})
u($,"e1","cU",function(){return H.E(H.be({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"e2","cV",function(){return H.E(H.be(null))})
u($,"e3","cW",function(){return H.E(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"e6","cZ",function(){return H.E(H.be(void 0))})
u($,"e7","d_",function(){return H.E(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"e5","cY",function(){return H.E(H.cx(null))})
u($,"e4","cX",function(){return H.E(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"e9","d1",function(){return H.E(H.cx(void 0))})
u($,"e8","d0",function(){return H.E(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"eb","cj",function(){return P.dk()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.p,CanvasPattern:J.p,DOMError:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,SVGAnimatedNumber:J.p,SQLError:J.p,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aE,HTMLAreaElement:W.aF,HTMLCanvasElement:W.a_,CanvasRenderingContext2D:W.ah,CDATASection:W.K,CharacterData:W.K,Comment:W.K,ProcessingInstruction:W.K,Text:W.K,DOMException:W.aO,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.a1,HTMLFormElement:W.aR,MouseEvent:W.w,DragEvent:W.w,PointerEvent:W.w,WheelEvent:W.w,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,Attr:W.x,DocumentType:W.x,Node:W.x,Screen:W.as,HTMLSelectElement:W.b6,CompositionEvent:W.F,FocusEvent:W.F,KeyboardEvent:W.F,TextEvent:W.F,TouchEvent:W.F,UIEvent:W.F,Window:W.av,DOMWindow:W.av})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SVGAnimatedNumber:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Screen:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.cO,[])
else F.cO([])})})()
//# sourceMappingURL=main.dart.js.map
