(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const sc="179",du=0,Oc=1,fu=2,nh=1,ih=2,zn=3,ni=0,Ze=1,Fe=2,Jn=0,Qi=1,Fc=2,Bc=3,zc=4,pu=5,_i=100,mu=101,gu=102,vu=103,_u=104,xu=200,Mu=201,Su=202,yu=203,la=204,ha=205,Eu=206,Tu=207,Au=208,bu=209,wu=210,Ru=211,Cu=212,Pu=213,Lu=214,ua=0,da=1,fa=2,rs=3,pa=4,ma=5,ga=6,va=7,sh=0,Du=1,Iu=2,Qn=0,Uu=1,Nu=2,Ou=3,rh=4,Fu=5,Bu=6,zu=7,oh=300,os=301,as=302,_a=303,xa=304,to=306,Os=1e3,Mi=1001,Ma=1002,an=1003,Hu=1004,tr=1005,An=1006,uo=1007,Si=1008,Pn=1009,ah=1010,ch=1011,Fs=1012,rc=1013,yi=1014,bn=1015,Ys=1016,oc=1017,ac=1018,Bs=1020,lh=35902,hh=1021,uh=1022,vn=1023,zs=1026,Hs=1027,cc=1028,lc=1029,dh=1030,hc=1031,uc=1033,Ur=33776,Nr=33777,Or=33778,Fr=33779,Sa=35840,ya=35841,Ea=35842,Ta=35843,Aa=36196,ba=37492,wa=37496,Ra=37808,Ca=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Oa=37816,Fa=37817,Ba=37818,za=37819,Ha=37820,ka=37821,Br=36492,Va=36494,Ga=36495,fh=36283,Wa=36284,Xa=36285,qa=36286,ku=3200,Vu=3201,ph=0,Gu=1,jn="",Ke="srgb",cs="srgb-linear",Gr="linear",pe="srgb",Li=7680,Hc=519,Wu=512,Xu=513,qu=514,mh=515,Yu=516,$u=517,Ku=518,Zu=519,Ya=35044,kc="300 es",wn=2e3,Wr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const ts=Math.PI/180,ks=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function ju(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ju(i,t,e){return i!==t?(e-i)/(t-i):0}function Ds(i,t,e){return(1-e)*i+e*t}function Qu(i,t,e,n){return Ds(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(dc(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(Vc=i);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*ts}function cd(i){return i*ks}function ld(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const de={DEG2RAD:ts,RAD2DEG:ks,generateUUID:Rn,clamp:Jt,euclideanModulo:dc,mapLinear:ju,inverseLerp:Ju,lerp:Ds,damp:Qu,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:cd,isPowerOfTwo:ld,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:ue,denormalize:gn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ds{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*v,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const P=Math.sqrt(y),L=Math.atan2(P,f*T);m=Math.sin(m*L)/P,a=Math.sin(a*L)/P}const _=a*T;if(c=c*m+d*_,l=l*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new A,Gc=new ds;class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],T=s[1],y=s[4],_=s[7],P=s[2],L=s[5],w=s[8];return r[0]=o*v+a*T+c*P,r[3]=o*m+a*y+c*L,r[6]=o*f+a*_+c*w,r[1]=l*v+u*T+h*P,r[4]=l*m+u*y+h*L,r[7]=l*f+u*_+h*w,r[2]=d*v+p*T+g*P,r[5]=d*m+p*y+g*L,r[8]=d*f+p*_+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Zt;function gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=Xr("canvas");return i.style.display="block",i}const Wc={};function es(i){i in Wc||(Wc[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Xc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){const i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Gr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:t,whitePoint:n,transfer:Gr,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const ae=md();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class gd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=Xr("canvas")),Di.width=t.width,Di.height=t.height;const s=Di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;const go=new A;class We extends us{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Mi,s=Mi,r=An,o=Si,a=vn,c=Pn,l=We.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Rn(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=oh;We.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(p+1)/2,P=(f+1)/2,L=(u+d)/4,w=(h+v)/4,C=(g+m)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=L/n,r=w/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=L/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=C/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new fc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),nr.subVectors(this.max,vs),Ii.subVectors(t.a,vs),Ui.subVectors(t.b,vs),Ni.subVectors(t.c,vs),Xn.subVectors(Ui,Ii),qn.subVectors(Ni,Ui),li.subVectors(Ii,Ni);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-li.z,li.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,li.z,0,-li.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-li.y,li.x,0];return!vo(e,Ii,Ui,Ni,nr)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Ii,Ui,Ni,nr))?!1:(ir.crossVectors(Xn,qn),e=[ir.x,ir.y,ir.z],vo(e,Ii,Ui,Ni,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new A,new A,new A,new A,new A,new A,new A,new A],fn=new A,er=new _n,Ii=new A,Ui=new A,Ni=new A,Xn=new A,qn=new A,li=new A,vs=new A,nr=new A,ir=new A,hi=new A;function vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hi.fromArray(i,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Sd=new _n,_s=new A,_o=new A;class fs{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(_o)),this.expandByPoint(_s.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new A,xo=new A,sr=new A,Yn=new A,Mo=new A,rr=new A,So=new A;class pc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(xo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(sr),a=Yn.dot(this.direction),c=-Yn.dot(sr),l=Yn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xo).addScaledVector(sr,d),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Mo.subVectors(e,t),rr.subVectors(n,t),So.crossVectors(Mo,rr);let o=this.direction.dot(So),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const c=a*this.direction.dot(rr.crossVectors(Yn,rr));if(c<0)return null;const l=a*this.direction.dot(Mo.cross(Yn));if(l<0||c+l>o)return null;const u=-a*Yn.dot(So);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,u,h,d,p,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,v,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,v=l*h;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,v=l*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,Ed)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),$n.crossVectors(n,nn),$n.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),$n.crossVectors(n,nn)),$n.normalize(),or.crossVectors(nn,$n),s[0]=$n.x,s[4]=or.x,s[8]=nn.x,s[1]=$n.y,s[5]=or.y,s[9]=nn.y,s[2]=$n.z,s[6]=or.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],y=n[7],_=n[11],P=n[15],L=s[0],w=s[4],C=s[8],S=s[12],M=s[1],R=s[5],F=s[9],H=s[13],V=s[2],z=s[6],k=s[10],$=s[14],B=s[3],Q=s[7],xt=s[11],Et=s[15];return r[0]=o*L+a*M+c*V+l*B,r[4]=o*w+a*R+c*z+l*Q,r[8]=o*C+a*F+c*k+l*xt,r[12]=o*S+a*H+c*$+l*Et,r[1]=u*L+h*M+d*V+p*B,r[5]=u*w+h*R+d*z+p*Q,r[9]=u*C+h*F+d*k+p*xt,r[13]=u*S+h*H+d*$+p*Et,r[2]=g*L+v*M+m*V+f*B,r[6]=g*w+v*R+m*z+f*Q,r[10]=g*C+v*F+m*k+f*xt,r[14]=g*S+v*H+m*$+f*Et,r[3]=T*L+y*M+_*V+P*B,r[7]=T*w+y*R+_*z+P*Q,r[11]=T*C+y*F+_*k+P*xt,r[15]=T*S+y*H+_*$+P*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+v*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],T=h*m*l-v*d*l+v*c*p-a*m*p-h*c*f+a*d*f,y=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,_=u*v*l-g*h*l+g*a*p-o*v*p-u*a*f+o*h*f,P=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,L=e*T+n*y+s*_+r*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return t[0]=T*w,t[1]=(v*d*r-h*m*r-v*s*p+n*m*p+h*s*f-n*d*f)*w,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*f+n*c*f)*w,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*w,t[4]=y*w,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*w,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*p+e*c*p)*w,t[8]=_*w,t[9]=(g*h*r-u*v*r-g*n*p+e*v*p+u*n*f-e*h*f)*w,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*f+e*a*f)*w,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*p-e*a*p)*w,t[12]=P*w,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*m+e*h*m)*w,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*w,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,v=o*u,m=o*h,f=a*h,T=c*l,y=c*u,_=c*h,P=n.x,L=n.y,w=n.z;return s[0]=(1-(v+f))*P,s[1]=(p+_)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(p-_)*L,s[5]=(1-(d+f))*L,s[6]=(m+T)*L,s[7]=0,s[8]=(g+y)*w,s[9]=(m-T)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const l=1/r,u=1/o,h=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn,c=!1){const l=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Wr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===wn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Wr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new A,pn=new le,yd=new A(0,0,0),Ed=new A(1,1,1),$n=new A,or=new A,nn=new A,Yc=new le,$c=new ds;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Td=0;const Kc=new A,Fi=new ds,On=new le,ar=new A,xs=new A,Ad=new A,bd=new ds,Zc=new A(1,0,0),jc=new A(0,1,0),Jc=new A(0,0,1),Qc={type:"added"},wd={type:"removed"},Bi={type:"childadded",child:null},yo={type:"childremoved",child:null};class De extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new A,e=new Ln,n=new ds,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(xs,ar,this.up):On.lookAt(ar,xs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(On),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new A(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new A,Fn=new A,Eo=new A,Bn=new A,zi=new A,Hi=new A,tl=new A,To=new A,Ao=new A,bo=new A,wo=new me,Ro=new me,Co=new me;class on{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Fn.subVectors(n,e),Eo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Fn),c=mn.dot(Eo),l=Fn.dot(Fn),u=Fn.dot(Eo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return wo.setScalar(0),Ro.setScalar(0),Co.setScalar(0),wo.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wo,r.x),o.addScaledVector(Ro,r.y),o.addScaledVector(Co,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Fn.subVectors(t,e),mn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,n),Hi.subVectors(r,n),To.subVectors(t,n);const c=zi.dot(To),l=Hi.dot(To);if(c<=0&&l<=0)return e.copy(n);Ao.subVectors(t,s);const u=zi.dot(Ao),h=Hi.dot(Ao);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(zi,o);bo.subVectors(t,r);const p=zi.dot(bo),g=Hi.dot(bo);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return tl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(tl,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=dc(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Po(o,r,t+1/3),this.g=Po(o,r,t),this.b=Po(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ae.workingToColorSpace(ke.copy(this),t),Math.round(Jt(ke.r*255,0,255))*65536+Math.round(Jt(ke.g*255,0,255))*256+Math.round(Jt(ke.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ke){ae.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(cr);const n=Ds(Kn.h,cr.h,e),s=Ds(Kn.s,cr.s,e),r=Ds(Kn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new pt;pt.NAMES=_h;let Rd=0;class Ai extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Qi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Oe extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new A,lr=new nt;let Cd=0;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}}class xh extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pd=0;const hn=new le,Lo=new De,ki=new A,sn=new _n,Ms=new _n,Ne=new A;class Me extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?Mh:xh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(sn.min,Ms.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,Ms.max),sn.expandByPoint(Ne)):(sn.expandByPoint(Ms.min),sn.expandByPoint(Ms.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),Ne.add(ki)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new A,c[C]=new A;const l=new A,u=new A,h=new A,d=new nt,p=new nt,g=new nt,v=new A,m=new A;function f(C,S,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(v),a[S].add(v),a[M].add(v),c[C].add(m),c[S].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,S=T.length;C<S;++C){const M=T[C],R=M.start,F=M.count;for(let H=R,V=R+F;H<V;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new A,_=new A,P=new A,L=new A;function w(C){P.fromBufferAttribute(s,C),L.copy(P);const S=a[C];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(L,S);const R=_.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=T.length;C<S;++C){const M=T[C],R=M.start,F=M.count;for(let H=R,V=R+F;H<V;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new le,ui=new pc,hr=new fs,nl=new A,ur=new A,dr=new A,fr=new A,Do=new A,pr=new A,il=new A,mr=new A;class q extends De{constructor(t=new Me,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Do.fromBufferAttribute(h,t),o?pr.addScaledVector(Do,u):pr.addScaledVector(Do.sub(e),u))}e.add(pr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(hr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(hr,nl)===null||ui.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(el.copy(r).invert(),ui.copy(t.ray).applyMatrix4(el),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,P=y;_<P;_+=3){const L=a.getX(_),w=a.getX(_+1),C=a.getX(_+2);s=gr(this,f,t,n,l,u,h,L,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=gr(this,o,t,n,l,u,h,T,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,P=y;_<P;_+=3){const L=_,w=_+1,C=_+2;s=gr(this,f,t,n,l,u,h,L,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,y=m+1,_=m+2;s=gr(this,o,t,n,l,u,h,T,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ld(i,t,e,n,s,r,o,a){let c;if(t.side===Ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ni,a),c===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:i}}function gr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ur),i.getVertexPosition(c,dr),i.getVertexPosition(l,fr);const u=Ld(i,t,e,n,ur,dr,fr,il);if(u){const h=new A;on.getBarycoord(il,ur,dr,fr,h),s&&(u.uv=on.getInterpolatedAttribute(s,a,c,l,h,new nt)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,c,l,h,new nt)),o&&(u.normal=on.getInterpolatedAttribute(o,a,c,l,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};on.getNormal(ur,dr,fr,d.normal),u.face=d,u.barycoord=h}return u}class zt extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(v,m,f,T,y,_,P,L,w,C,S){const M=_/w,R=P/C,F=_/2,H=P/2,V=L/2,z=w+1,k=C+1;let $=0,B=0;const Q=new A;for(let xt=0;xt<k;xt++){const Et=xt*R-H;for(let Wt=0;Wt<z;Wt++){const se=Wt*M-F;Q[v]=se*T,Q[m]=Et*y,Q[f]=V,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[f]=L>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Wt/w),h.push(1-xt/C),$+=1}}for(let xt=0;xt<C;xt++)for(let Et=0;Et<w;Et++){const Wt=d+Et+z*xt,se=d+Et+z*(xt+1),re=d+(Et+1)+z*(xt+1),K=d+(Et+1)+z*xt;c.push(Wt,se,K),c.push(se,re,K),B+=6}a.addGroup(p,B,S),p+=B,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Id={clone:ls,merge:$e};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new A,sl=new nt,rl=new nt;class rn extends yh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class Od extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Vi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new rn(Vi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new rn(Vi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new rn(Vi,Gi,t,e);a.layers=this.layers,this.add(a);const c=new rn(Vi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new rn(Vi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eh extends We{constructor(t=[],e=os,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fd extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Jn});r.uniforms.tEquirect.value=e;const o=new q(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=An),new Od(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Ae extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new gc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new A;class qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vc extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const Ss=new A,Xi=new A,qi=new A,Yi=new nt,ys=new nt,Th=new le,vr=new A,Es=new A,_r=new A,ol=new nt,Uo=new nt,al=new nt;class Ah extends De{constructor(t=new vc){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hd(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new qr(n,3,0,!1)),Wi.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Th.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;xr(vr.set(-.5,-.5,0),qi,o,Xi,s,r),xr(Es.set(.5,-.5,0),qi,o,Xi,s,r),xr(_r.set(.5,.5,0),qi,o,Xi,s,r),ol.set(0,0),Uo.set(1,0),al.set(1,1);let a=t.ray.intersectTriangle(vr,Es,_r,!1,Ss);if(a===null&&(xr(Es.set(-.5,.5,0),qi,o,Xi,s,r),Uo.set(0,1),a=t.ray.intersectTriangle(vr,_r,Es,!1,Ss),a===null))return;const c=t.ray.origin.distanceTo(Ss);c<t.near||c>t.far||e.push({distance:c,point:Ss.clone(),uv:on.getInterpolation(Ss,vr,Es,_r,ol,Uo,al,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xr(i,t,e,n,s,r){Yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Yi.x-s*Yi.y,ys.y=s*Yi.x+r*Yi.y):ys.copy(Yi),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Th)}class kd extends We{constructor(t=null,e=1,n=1,s,r,o,a,c,l=an,u=an,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new le,ll=new le,Mr=[],hl=new _n,Vd=new le,Ts=new q,As=new fs;class bh extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),hl.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),As.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),ll.multiplyMatrices(n,$i),Ts.matrixWorld=ll,Ts.raycast(t,Mr);for(let o=0,a=Mr.length;o<a;o++){const c=Mr[o];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(s*this.count),s,this.count,cc,bn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const No=new A,Gd=new A,Wd=new Zt;class mi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=No.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new fs,Xd=new nt(.5,.5),Sr=new A;class _c{constructor(t=new mi,e=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],T=r[12],y=r[13],_=r[14],P=r[15];if(s[0].setComponents(l-o,p-u,f-g,P-T).normalize(),s[1].setComponents(l+o,p+u,f+g,P+T).normalize(),s[2].setComponents(l+a,p+h,f+v,P+y).normalize(),s[3].setComponents(l-a,p-h,f-v,P-y).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,p-d,f-m,P-_).normalize();else if(s[4].setComponents(l-c,p-d,f-m,P-_).normalize(),e===wn)s[5].setComponents(l+c,p+d,f+m,P+_).normalize();else if(e===Wr)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);const e=Xd.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gn extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yr=new A,$r=new A,ul=new le,bs=new pc,yr=new fs,Oo=new A,dl=new A;class $s extends De{constructor(t=new Me,e=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),$r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yr.distanceTo($r);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;ul.copy(s).invert(),bs.copy(t.ray).applyMatrix4(ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const f=u.getX(v),T=u.getX(v+1),y=Er(this,t,bs,c,f,T,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=Er(this,t,bs,c,v,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const f=Er(this,t,bs,c,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Er(this,t,bs,c,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Er(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Yr.fromBufferAttribute(a,s),$r.fromBufferAttribute(a,r),e.distanceSqToSegment(Yr,$r,Oo,dl)>n)return;Oo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Oo);if(!(l<t.near||l>t.far))return{distance:l,point:dl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const fl=new A,pl=new A;class eo extends $s{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fl.fromBufferAttribute(e,s),pl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fl.distanceTo(pl);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends $s{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class no extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wh extends We{constructor(t,e,n=yi,s,r,o,a=an,c=an,l,u=zs,h=1){if(u!==zs&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Kr extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,u=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ne extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;T(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function T(){const _=new A,P=new A;let L=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,R=M*(e-t)+t;for(let F=0;F<=s;F++){const H=F/s,V=H*c+a,z=Math.sin(V),k=Math.cos(V);P.x=R*z,P.y=-M*n+m,P.z=R*k,h.push(P.x,P.y,P.z),_.set(z,w,k).normalize(),d.push(_.x,_.y,_.z),p.push(H,1-M),S.push(g++)}v.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const M=v[S][C],R=v[S+1][C],F=v[S+1][C+1],H=v[S][C+1];(t>0||S!==0)&&(u.push(M,R,H),L+=3),(e>0||S!==r-1)&&(u.push(R,F,H),L+=3)}l.addGroup(f,L,0),f+=L}function y(_){const P=g,L=new nt,w=new A;let C=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let F=0;F<=s;F++){const V=F/s*c+a,z=Math.cos(V),k=Math.sin(V);w.x=S*k,w.y=m*M,w.z=S*z,h.push(w.x,w.y,w.z),d.push(0,M,0),L.x=z*.5+.5,L.y=k*.5*M+.5,p.push(L.x,L.y),g++}for(let F=0;F<s;F++){const H=P+F,V=R+F;_===!0?u.push(V,V+1,H):u.push(V+1,V,H),C+=3}l.addGroup(f,C,_===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ti extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ti(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ks extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const y=new A,_=new A,P=new A;for(let L=0;L<e.length;L+=3)p(e[L+0],y),p(e[L+1],_),p(e[L+2],P),c(y,_,P,T)}function c(T,y,_,P){const L=P+1,w=[];for(let C=0;C<=L;C++){w[C]=[];const S=T.clone().lerp(_,C/L),M=y.clone().lerp(_,C/L),R=L-C;for(let F=0;F<=R;F++)F===0&&C===L?w[C][F]=S:w[C][F]=S.clone().lerp(M,F/R)}for(let C=0;C<L;C++)for(let S=0;S<2*(L-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(w[C][M+1]),d(w[C+1][M]),d(w[C][M])):(d(w[C][M+1]),d(w[C+1][M+1]),d(w[C+1][M]))}}function l(T){const y=new A;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(T),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const T=new A;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];const _=m(T)/2/Math.PI+.5,P=f(T)/Math.PI+.5;o.push(_,1-P)}g(),h()}function h(){for(let T=0;T<o.length;T+=6){const y=o[T+0],_=o[T+2],P=o[T+4],L=Math.max(y,_,P),w=Math.min(y,_,P);L>.9&&w<.1&&(y<.2&&(o[T+0]+=1),_<.2&&(o[T+2]+=1),P<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,y){const _=T*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const T=new A,y=new A,_=new A,P=new A,L=new nt,w=new nt,C=new nt;for(let S=0,M=0;S<r.length;S+=9,M+=6){T.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),L.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),P.copy(T).add(y).add(_).divideScalar(3);const R=m(P);v(L,M+0,T,R),v(w,M+2,y,R),v(C,M+4,_,R)}}function v(T,y,_,P){P<0&&T.x===1&&(o[y]=T.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.vertices,t.indices,t.radius,t.details)}}class xc extends Ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xc(t.radius,t.detail)}}const Tr=new A,Ar=new A,Fo=new A,br=new on;class Rh extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ts*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:f}=br;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),br.getNormal(Fo),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const y=(T+1)%3,_=h[T],P=h[y],L=br[u[T]],w=br[u[y]],C=`${_}_${P}`,S=`${P}_${_}`;S in d&&d[S]?(Fo.dot(d[S].normal)<=r&&(p.push(L.x,L.y,L.z),p.push(w.x,w.y,w.z)),d[S]=null):C in d||(d[C]={index0:l[T],index1:l[y],normal:Fo.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Tr.fromBufferAttribute(a,v),Ar.fromBufferAttribute(a,m),p.push(Tr.x,Tr.y,Tr.z),p.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new te(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,s=[],r=[],o=[],a=new A,c=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class io extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yd extends io{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const wr=new A,Bo=new Mc,zo=new Mc,Ho=new Mc;class $d extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),l=wr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Bo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),zo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Ho.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),zo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ho.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Bo.calc(c),zo.calc(c),Ho.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ml(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Kd(i,t){const e=1-i;return e*e*t}function Zd(i,t){return 2*(1-i)*i*t}function jd(i,t){return i*i*t}function Is(i,t,e,n){return Kd(i,t)+Zd(i,e)+jd(i,n)}function Jd(i,t){const e=1-i;return e*e*e*t}function Qd(i,t){const e=1-i;return 3*e*e*i*t}function tf(i,t){return 3*(1-i)*i*i*t}function ef(i,t){return i*i*i*t}function Us(i,t,e,n,s){return Jd(i,t)+Qd(i,e)+tf(i,n)+ef(i,s)}class Ch extends Dn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Us(t,s.x,r.x,o.x,a.x),Us(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nf extends Dn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Us(t,s.x,r.x,o.x,a.x),Us(t,s.y,r.y,o.y,a.y),Us(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ph extends Dn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends Dn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lh extends Dn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends Dn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y),Is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(ml(a,c.x,l.x,u.x,h.x),ml(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:Yd,CatmullRomCurve3:$d,CubicBezierCurve:Ch,CubicBezierCurve3:nf,EllipseCurve:io,LineCurve:Ph,LineCurve3:sf,QuadraticBezierCurve:Lh,QuadraticBezierCurve3:rf,SplineCurve:Dh});class of extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $a[s.type]().fromJSON(s))}return this}}class gl extends of{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ph(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Lh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ch(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new io(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vs extends gl{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gl().fromJSON(s))}return this}}function af(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ih(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=df(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){const p=i[d],g=i[d+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Gs(r,o,e,a,c,l,0),o}function Ih(i,t,e,n,s){let r;if(s===Ef(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=vl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=vl(o/n|0,i[o],i[o+1],r);return r&&hs(r,r.next)&&(Xs(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hs(e,e.next)||we(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&vf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?lf(i,n,s,r):cf(i)){t.push(c.i,i.i,l.i),Xs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=hf(Ti(i),t),Gs(i,t,e,n,s,r,2)):o===2&&uf(i,t,e,n,s,r):Gs(Ti(i),t,e,n,s,r,1);break}}}function cf(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Cs(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,p=Math.min(a,c,l),g=Math.min(u,h,d),v=Math.max(a,c,l),m=Math.max(u,h,d),f=Ka(p,g,t,e,n),T=Ka(v,m,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=f&&_&&_.z<=T;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cs(a,u,c,h,l,d,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,u,c,h,l,d,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cs(a,u,c,h,l,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=T;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,u,c,h,l,d,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function hf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!hs(n,s)&&Nh(n,e,e.next,s)&&Ws(n,s)&&Ws(s,n)&&(t.push(n.i,e.i,s.i),Xs(e),Xs(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function uf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mf(o,a)){let c=Oh(o,a);o=Ti(o,o.next),c=Ti(c,c.next),Gs(o,t,e,n,s,r,0),Gs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function df(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ih(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(xf(l))}s.sort(ff);for(let r=0;r<s.length;r++)e=pf(s[r],e);return e}function ff(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function pf(i,t){const e=mf(i,t);if(!e)return t;const n=Oh(e,i);return Ti(n,n.next),Ti(e,e.next)}function mf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(hs(i,e))return e;do{if(hs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Uh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);Ws(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&gf(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function gf(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function vf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_f(s)}function _f(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Cs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Uh(i,t,e,n,s,r,o,a)}function Mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sf(i,t)&&(Ws(i,t)&&Ws(t,i)&&yf(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||hs(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hs(i,t){return i.x===t.x&&i.y===t.y}function Nh(i,t,e,n){const s=Cr(we(i,t,e)),r=Cr(we(i,t,n)),o=Cr(we(e,n,i)),a=Cr(we(e,n,t));return!!(s!==r&&o!==a||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||o===0&&Rr(e,i,n)||a===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function Sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ws(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function yf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oh(i,t){const e=Za(i.i,i.x,i.y),n=Za(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vl(i,t,e,n){const s=Za(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Za(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ef(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Tf{static triangulate(t,e,n=2){return af(t,e,n)}}class Hn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];_l(t),xl(n,t);let o=t.length;e.forEach(_l);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xl(n,e[c]);const a=Tf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function _l(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Zr extends Me{constructor(t=new Vs([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Af;let y,_=!1,P,L,w,C;f&&(y=f.getSpacedPoints(u),_=!0,d=!1,P=f.computeFrenetFrames(u,!1),L=new A,w=new A,C=new A),d||(m=0,p=0,g=0,v=0);const S=a.extractPoints(l);let M=S.shape;const R=S.holes;if(!Hn.isClockWise(M)){M=M.reverse();for(let tt=0,Z=R.length;tt<Z;tt++){const it=R[tt];Hn.isClockWise(it)&&(R[tt]=it.reverse())}}function H(tt){const it=10000000000000001e-36;let j=tt[0];for(let ut=1;ut<=tt.length;ut++){const st=ut%tt.length,dt=tt[st],qt=dt.x-j.x,Gt=dt.y-j.y,b=qt*qt+Gt*Gt,x=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(j.x),Math.abs(j.y)),O=it*x*x;if(b<=O){tt.splice(st,1),ut--;continue}j=dt}}H(M),R.forEach(H);const V=R.length,z=M;for(let tt=0;tt<V;tt++){const Z=R[tt];M=M.concat(Z)}function k(tt,Z,it){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Z,it)}const $=M.length;function B(tt,Z,it){let j,ut,st;const dt=tt.x-Z.x,qt=tt.y-Z.y,Gt=it.x-tt.x,b=it.y-tt.y,x=dt*dt+qt*qt,O=dt*b-qt*Gt;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(x),et=Math.sqrt(Gt*Gt+b*b),Y=Z.x-qt/X,Ct=Z.y+dt/X,lt=it.x-b/et,At=it.y+Gt/et,bt=((lt-Y)*b-(At-Ct)*Gt)/(dt*b-qt*Gt);j=Y+dt*bt-tt.x,ut=Ct+qt*bt-tt.y;const rt=j*j+ut*ut;if(rt<=2)return new nt(j,ut);st=Math.sqrt(rt/2)}else{let X=!1;dt>Number.EPSILON?Gt>Number.EPSILON&&(X=!0):dt<-Number.EPSILON?Gt<-Number.EPSILON&&(X=!0):Math.sign(qt)===Math.sign(b)&&(X=!0),X?(j=-qt,ut=dt,st=Math.sqrt(x)):(j=dt,ut=qt,st=Math.sqrt(x/2))}return new nt(j/st,ut/st)}const Q=[];for(let tt=0,Z=z.length,it=Z-1,j=tt+1;tt<Z;tt++,it++,j++)it===Z&&(it=0),j===Z&&(j=0),Q[tt]=B(z[tt],z[it],z[j]);const xt=[];let Et,Wt=Q.concat();for(let tt=0,Z=V;tt<Z;tt++){const it=R[tt];Et=[];for(let j=0,ut=it.length,st=ut-1,dt=j+1;j<ut;j++,st++,dt++)st===ut&&(st=0),dt===ut&&(dt=0),Et[j]=B(it[j],it[st],it[dt]);xt.push(Et),Wt=Wt.concat(Et)}let se;if(m===0)se=Hn.triangulateShape(z,R);else{const tt=[],Z=[];for(let it=0;it<m;it++){const j=it/m,ut=p*Math.cos(j*Math.PI/2),st=g*Math.sin(j*Math.PI/2)+v;for(let dt=0,qt=z.length;dt<qt;dt++){const Gt=k(z[dt],Q[dt],st);Rt(Gt.x,Gt.y,-ut),j===0&&tt.push(Gt)}for(let dt=0,qt=V;dt<qt;dt++){const Gt=R[dt];Et=xt[dt];const b=[];for(let x=0,O=Gt.length;x<O;x++){const X=k(Gt[x],Et[x],st);Rt(X.x,X.y,-ut),j===0&&b.push(X)}j===0&&Z.push(b)}}se=Hn.triangulateShape(tt,Z)}const re=se.length,K=g+v;for(let tt=0;tt<$;tt++){const Z=d?k(M[tt],Wt[tt],K):M[tt];_?(w.copy(P.normals[0]).multiplyScalar(Z.x),L.copy(P.binormals[0]).multiplyScalar(Z.y),C.copy(y[0]).add(w).add(L),Rt(C.x,C.y,C.z)):Rt(Z.x,Z.y,0)}for(let tt=1;tt<=u;tt++)for(let Z=0;Z<$;Z++){const it=d?k(M[Z],Wt[Z],K):M[Z];_?(w.copy(P.normals[tt]).multiplyScalar(it.x),L.copy(P.binormals[tt]).multiplyScalar(it.y),C.copy(y[tt]).add(w).add(L),Rt(C.x,C.y,C.z)):Rt(it.x,it.y,h/u*tt)}for(let tt=m-1;tt>=0;tt--){const Z=tt/m,it=p*Math.cos(Z*Math.PI/2),j=g*Math.sin(Z*Math.PI/2)+v;for(let ut=0,st=z.length;ut<st;ut++){const dt=k(z[ut],Q[ut],j);Rt(dt.x,dt.y,h+it)}for(let ut=0,st=R.length;ut<st;ut++){const dt=R[ut];Et=xt[ut];for(let qt=0,Gt=dt.length;qt<Gt;qt++){const b=k(dt[qt],Et[qt],j);_?Rt(b.x,b.y+y[u-1].y,y[u-1].x+it):Rt(b.x,b.y,h+it)}}}mt(),ht();function mt(){const tt=s.length/3;if(d){let Z=0,it=$*Z;for(let j=0;j<re;j++){const ut=se[j];Ht(ut[2]+it,ut[1]+it,ut[0]+it)}Z=u+m*2,it=$*Z;for(let j=0;j<re;j++){const ut=se[j];Ht(ut[0]+it,ut[1]+it,ut[2]+it)}}else{for(let Z=0;Z<re;Z++){const it=se[Z];Ht(it[2],it[1],it[0])}for(let Z=0;Z<re;Z++){const it=se[Z];Ht(it[0]+$*u,it[1]+$*u,it[2]+$*u)}}n.addGroup(tt,s.length/3-tt,0)}function ht(){const tt=s.length/3;let Z=0;Nt(z,Z),Z+=z.length;for(let it=0,j=R.length;it<j;it++){const ut=R[it];Nt(ut,Z),Z+=ut.length}n.addGroup(tt,s.length/3-tt,1)}function Nt(tt,Z){let it=tt.length;for(;--it>=0;){const j=it;let ut=it-1;ut<0&&(ut=tt.length-1);for(let st=0,dt=u+m*2;st<dt;st++){const qt=$*st,Gt=$*(st+1),b=Z+j+qt,x=Z+ut+qt,O=Z+ut+Gt,X=Z+j+Gt;ye(b,x,O,X)}}}function Rt(tt,Z,it){c.push(tt),c.push(Z),c.push(it)}function Ht(tt,Z,it){Xt(tt),Xt(Z),Xt(it);const j=s.length/3,ut=T.generateTopUV(n,s,j-3,j-2,j-1);D(ut[0]),D(ut[1]),D(ut[2])}function ye(tt,Z,it,j){Xt(tt),Xt(Z),Xt(j),Xt(Z),Xt(it),Xt(j);const ut=s.length/3,st=T.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);D(st[0]),D(st[1]),D(st[3]),D(st[1]),D(st[2]),D(st[3])}function Xt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function D(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $a[s.type]().fromJSON(s)),new Zr(n,t.options)}}const Af={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-h),new nt(d,1-g),new nt(v,1-f)]:[new nt(a,1-c),new nt(u,1-h),new nt(p,1-g),new nt(m,1-f)]}};function bf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Sc extends Ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sc(t.radius,t.detail)}}class yc extends Ks{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yc(t.radius,t.detail)}}class bi extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let y=0;y<l;y++){const _=y*h-r;g.push(_,-T,0),v.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const y=T+l*f,_=T+l*(f+1),P=T+1+l*(f+1),L=T+1+l*f;p.push(y,_,L),p.push(_,P,L)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ps extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new A,g=new nt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const T=f+m,y=T,_=T+n+1,P=T+n+2,L=T+1;a.push(y,_,L),a.push(_,P,L)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ec extends Me{constructor(t=new Vs([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Hn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const T=g[m];Hn.isClockWise(T)===!0&&(g[m]=T.reverse())}const v=Hn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const T=g[m];p=p.concat(T)}for(let m=0,f=p.length;m<f;m++){const T=p[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,f=v.length;m<f;m++){const T=v[m],y=T[0]+h,_=T[1]+h,P=T[2]+h;n.push(y,_,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ec(n,t.curveSegments)}}function wf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class wi extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new A,d=new A,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const T=[],y=f/n;let _=0;f===0&&o===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const L=P/e;h.x=-t*Math.cos(s+L*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+L*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(L+_,1-y),T.push(l++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const y=u[f][T+1],_=u[f][T],P=u[f+1][T],L=u[f+1][T+1];(f!==0||o>0)&&p.push(y,_,L),(f!==n-1||c<Math.PI)&&p.push(_,P,L)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ve extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new A,h=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,T=(s+1)*p+g;o.push(v,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ft extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rf extends Ft{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Cf extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pf extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tc extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lf extends Tc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ko=new le,Ml=new A,Sl=new A;class Fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new le,ws=new A,Vo=new A;class Df extends Fh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),Vo.copy(n.position),Vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vo),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl,n.coordinateSystem,n.reversedDepth)}}class si extends Tc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Df}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bh extends yh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class If extends Fh{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uf extends Tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new If}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nf extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const El=new le;class zr{constructor(t,e,n=0,s=1/0){this.ray=new pc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return El.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(El),this}intersectObject(t,e=!0,n=[]){return ja(t,this,n,e),n.sort(Tl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ja(t[s],this,n,e);return n.sort(Tl),n}}function Tl(i,t){return i.distance-t.distance}function ja(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ja(r[o],t,e,!0)}}class Of extends eo{constructor(t=10,e=10,n=4473924,s=8947848){n=new pt(n),s=new pt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const v=d===r?n:s;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const u=new Me;u.setAttribute("position",new te(c,3)),u.setAttribute("color",new te(l,3));const h=new Gn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Al(i,t,e,n){const s=Ff(n);switch(e){case hh:return i*t;case cc:return i*t/s.components*s.byteLength;case lc:return i*t/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case uh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case uc:return i*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Br:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fh:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(i){switch(i){case Pn:case ah:return{byteLength:1,components:1};case Fs:case ch:case Ys:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case yi:case rc:case bn:return{byteLength:4,components:1};case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);function zh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bf(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cp=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Em=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,o0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,c0=`#define STANDARD
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
}`,l0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,v0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:zf,alphahash_pars_fragment:Hf,alphamap_fragment:kf,alphamap_pars_fragment:Vf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:$f,begin_vertex:Kf,beginnormal_vertex:Zf,bsdfs:jf,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:cp,cube_uv_reflection_fragment:lp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:vp,envmap_common_pars_fragment:_p,envmap_pars_fragment:xp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Lp,envmap_vertex:Sp,fog_vertex:yp,fog_pars_vertex:Ep,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Up,lights_phong_pars_fragment:Np,lights_physical_fragment:Op,lights_physical_pars_fragment:Fp,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:Hp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:$p,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:jp,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:vm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:ym,shadowmask_pars_fragment:Em,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:bm,skinnormal_vertex:wm,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Lm,transmission_fragment:Dm,transmission_pars_fragment:Im,uv_pars_fragment:Um,uv_pars_vertex:Nm,uv_vertex:Om,worldpos_vertex:Fm,background_vert:Bm,background_frag:zm,backgroundCube_vert:Hm,backgroundCube_frag:km,cube_vert:Vm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:$m,equirect_frag:Km,linedashed_vert:Zm,linedashed_frag:jm,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:c0,meshphysical_frag:l0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:v0},gt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},En={basic:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new pt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:$e([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:$e([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new pt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:$e([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:$e([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:$e([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:$e([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:$e([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:$e([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:$e([gt.common,gt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:$e([gt.lights,gt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};En.physical={uniforms:$e([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Pr={r:0,b:0,g:0},fi=new Ln,_0=new le;function x0(i,t,e,n,s,r,o){const a=new pt(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const P=g(y);P===null?f(a,c):P&&P.isColor&&(f(P,1),_=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const P=g(_);P&&(P.isCubeTexture||P.mapping===to)?(u===void 0&&(u=new q(new zt(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ls(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fi.copy(_.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(fi)),u.material.toneMapped=ae.getTransfer(P.colorSpace)!==pe,(h!==P||d!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new q(new bi(2,2),new Wn({name:"BackgroundMaterial",uniforms:ls(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ae.getTransfer(P.colorSpace)!==pe,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,_){y.getRGB(Pr,Sh(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,_,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:v,addToRenderList:m,dispose:T}}function M0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,R,F,H,V){let z=!1;const k=h(H,F,R);r!==k&&(r=k,l(r.object)),z=p(M,H,F,V),z&&g(M,H,F,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(M,R,F,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,F){const H=F.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let z=V[R.id];z===void 0&&(z={},V[R.id]=z);let k=z[H];return k===void 0&&(k=d(c()),z[H]=k),k}function d(M){const R=[],F=[],H=[];for(let V=0;V<e;V++)R[V]=0,F[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,R,F,H){const V=r.attributes,z=R.attributes;let k=0;const $=F.getAttributes();for(const B in $)if($[B].location>=0){const xt=V[B];let Et=z[B];if(Et===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),xt===void 0||xt.attribute!==Et||Et&&xt.data!==Et.data)return!0;k++}return r.attributesNum!==k||r.index!==H}function g(M,R,F,H){const V={},z=R.attributes;let k=0;const $=F.getAttributes();for(const B in $)if($[B].location>=0){let xt=z[B];xt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const Et={};Et.attribute=xt,xt&&xt.data&&(Et.data=xt.data),V[B]=Et,k++}r.attributes=V,r.attributesNum=k,r.index=H}function v(){const M=r.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){const F=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;F[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),V[M]!==R&&(i.vertexAttribDivisor(M,R),V[M]=R)}function T(){const M=r.newAttributes,R=r.enabledAttributes;for(let F=0,H=R.length;F<H;F++)R[F]!==M[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function y(M,R,F,H,V,z,k){k===!0?i.vertexAttribIPointer(M,R,F,V,z):i.vertexAttribPointer(M,R,F,H,V,z)}function _(M,R,F,H){v();const V=H.attributes,z=F.getAttributes(),k=R.defaultAttributeValues;for(const $ in z){const B=z[$];if(B.location>=0){let Q=V[$];if(Q===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const xt=Q.normalized,Et=Q.itemSize,Wt=t.get(Q);if(Wt===void 0)continue;const se=Wt.buffer,re=Wt.type,K=Wt.bytesPerElement,mt=re===i.INT||re===i.UNSIGNED_INT||Q.gpuType===rc;if(Q.isInterleavedBufferAttribute){const ht=Q.data,Nt=ht.stride,Rt=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<B.locationSize;Ht++)f(B.location+Ht,ht.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<B.locationSize;Ht++)m(B.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Ht=0;Ht<B.locationSize;Ht++)y(B.location+Ht,Et/B.locationSize,re,xt,Nt*K,(Rt+Et/B.locationSize*Ht)*K,mt)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<B.locationSize;ht++)f(B.location+ht,Q.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<B.locationSize;ht++)m(B.location+ht);i.bindBuffer(i.ARRAY_BUFFER,se);for(let ht=0;ht<B.locationSize;ht++)y(B.location+ht,Et/B.locationSize,re,xt,Et*K,Et/B.locationSize*ht*K,mt)}}else if(k!==void 0){const xt=k[$];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(B.location,xt);break;case 3:i.vertexAttrib3fv(B.location,xt);break;case 4:i.vertexAttrib4fv(B.location,xt);break;default:i.vertexAttrib1fv(B.location,xt)}}}}T()}function P(){C();for(const M in n){const R=n[M];for(const F in R){const H=R[F];for(const V in H)u(H[V].object),delete H[V];delete R[F]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const F in R){const H=R[F];for(const V in H)u(H[V].object),delete H[V];delete R[F]}delete n[M.id]}function w(M){for(const R in n){const F=n[R];if(F[M.id]===void 0)continue;const H=F[M.id];for(const V in H)u(H[V].object),delete H[V];delete F[M.id]}}function C(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function S0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function y0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==vn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:L}}function E0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new mi,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:n,y=T*4;let _=f.clippingState||null;c.value=_,_=u(g,d,y,p);for(let P=0;P!==y;++P)_[P]=e[P];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==v;++y,_+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function T0(i){let t=new WeakMap;function e(o,a){return a===_a?o.mapping=os:a===xa&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_a||a===xa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zi=4,bl=[.125,.215,.35,.446,.526,.582],xi=20,Go=new Bh,wl=new pt;let Wo=null,Xo=0,qo=0,Yo=!1;const gi=(1+Math.sqrt(5))/2,Ki=1/gi,Rl=[new A(-gi,Ki,0),new A(gi,Ki,0),new A(-Ki,0,gi),new A(Ki,0,gi),new A(0,gi,-Ki),new A(0,gi,Ki),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],A0=new A;class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=A0}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ys,format:vn,colorSpace:cs,depthBuffer:!1},s=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(r)),this._blurMaterial=w0(r,t,e)}return s}_compileMaterial(t){const e=new q(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s,r){const c=new rn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(wl),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new Oe({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),m=new q(new zt,v);let f=!1;const T=t.background;T?T.isColor&&(v.color.copy(T),t.background=null,f=!0):(v.color.copy(wl),f=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const P=this._cubeSize;Lr(s,_*P,y>2?P:0,P,P),h.setRenderTarget(s),f&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new q(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const f=[];let T=0;for(let w=0;w<xi;++w){const C=w/v,S=Math.exp(-C*C/2);f.push(S),w===0?T+=S:w<m&&(T+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],P=3*_*(s>y-Zi?s-y+Zi:0),L=4*(this._cubeSize-_);Lr(e,P,L,3*_,2*_),c.setRenderTarget(e),c.render(h,Go)}}function b0(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+bl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zi?c=bl[o-i+Zi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),y=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let L=0;L<p;L++){const w=L%3*2/3-1,C=L>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];T.set(S,v*g*L),y.set(d,m*g*L);const M=[L,L,L,L,L,L];_.set(M,f*g*L)}const P=new Me;P.setAttribute("position",new un(T,v)),P.setAttribute("uv",new un(y,m)),P.setAttribute("faceIndex",new un(_,f)),t.push(P),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){const n=new Ei(i,t,e);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function w0(i,t,e){const n=new Float32Array(xi),s=new A(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ll(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Dl(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function R0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_a||c===xa,u=c===os||c===as;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cl(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Cl(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function C0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let y=0,_=T.length;y<_;y+=3){const P=T[y+0],L=T[y+1],w=T[y+2];d.push(P,L,L,w,w,P)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,_=T.length/3-1;y<_;y+=3){const P=y+0,L=y+1,w=y+2;d.push(P,L,L,w,w,P)}}else return;const m=new(gh(d)?Mh:xh)(d,1);m.version=v;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function L0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function D0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function I0(i,t,e){const n=new WeakMap,s=new me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let P=a.attributes.position.count*_,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*L*4*h),C=new vh(w,P,L,h);C.type=bn,C.needsUpdate=!0;const S=_*4;for(let R=0;R<h;R++){const F=f[R],H=T[R],V=y[R],z=P*L*4*R;for(let k=0;k<F.count;k++){const $=k*S;g===!0&&(s.fromBufferAttribute(F,k),w[z+$+0]=s.x,w[z+$+1]=s.y,w[z+$+2]=s.z,w[z+$+3]=0),v===!0&&(s.fromBufferAttribute(H,k),w[z+$+4]=s.x,w[z+$+5]=s.y,w[z+$+6]=s.z,w[z+$+7]=0),m===!0&&(s.fromBufferAttribute(V,k),w[z+$+8]=s.x,w[z+$+9]=s.y,w[z+$+10]=s.z,w[z+$+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new nt(P,L)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function U0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Hh=new We,Il=new wh(1,1),kh=new vh,Vh=new Md,Gh=new Eh,Ul=[],Nl=[],Ol=new Float32Array(16),Fl=new Float32Array(9),Bl=new Float32Array(4);function ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function so(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),Ue(e,n)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),Ue(e,n)}}function k0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),Ue(e,n)}}function V0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Il.compareFunction=mh,r=Il):r=Hh,e.setTexture2D(t||r,s)}function j0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vh,s)}function J0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gh,s)}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kh,s)}function tg(i){switch(i){case 5126:return N0;case 35664:return O0;case 35665:return F0;case 35666:return B0;case 35674:return z0;case 35675:return H0;case 35676:return k0;case 5124:case 35670:return V0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return $0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function eg(i,t){i.uniform1fv(this.addr,t)}function ng(i,t){const e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function ig(i,t){const e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function sg(i,t){const e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function rg(i,t){const e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function og(i,t){const e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ag(i,t){const e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cg(i,t){i.uniform1iv(this.addr,t)}function lg(i,t){i.uniform2iv(this.addr,t)}function hg(i,t){i.uniform3iv(this.addr,t)}function ug(i,t){i.uniform4iv(this.addr,t)}function dg(i,t){i.uniform1uiv(this.addr,t)}function fg(i,t){i.uniform2uiv(this.addr,t)}function pg(i,t){i.uniform3uiv(this.addr,t)}function mg(i,t){i.uniform4uiv(this.addr,t)}function gg(i,t,e){const n=this.cache,s=t.length,r=so(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hh,r[o])}function vg(i,t,e){const n=this.cache,s=t.length,r=so(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vh,r[o])}function _g(i,t,e){const n=this.cache,s=t.length,r=so(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gh,r[o])}function xg(i,t,e){const n=this.cache,s=t.length,r=so(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kh,r[o])}function Mg(i){switch(i){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return cg;case 35667:case 35671:return lg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tg(e.type)}}class yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}}class Eg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function zl(i,t){i.seq.push(t),i.map[t.id]=t}function Tg(i,t,e){const n=i.name,s=n.length;for($o.lastIndex=0;;){const r=$o.exec(n),o=$o.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zl(e,l===void 0?new Sg(a,i,t):new yg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Eg(a),zl(e,h)),e=h}}}class Hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Hl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ag=37297;let bg=0;function wg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kl=new Zt;function Rg(i){ae._getMatrix(kl,ae.workingColorSpace,i);const t=`mat3( ${kl.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+wg(i.getShaderSource(t),a)}else return r}function Cg(i,t){const e=Rg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,t){let e;switch(t){case Uu:e="Linear";break;case Nu:e="Reinhard";break;case Ou:e="Cineon";break;case rh:e="ACESFilmic";break;case Bu:e="AgX";break;case zu:e="Neutral";break;case Fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new A;function Lg(){ae.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Ig(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ps(i){return i!==""}function Gl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(Ng,Fg)}const Og=new Map;function Fg(i,t){let e=jt[t];if(e===void 0){const n=Og.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(Bg,zg)}function zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function kg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case to:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function Gg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Du:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hg(e),l=kg(e),u=Vg(e),h=Gg(e),d=Wg(e),p=Dg(e),g=Ig(r),v=s.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),f.length>0&&(f+=`
`)):(m=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),f=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=Ja(o),o=Gl(o,e),o=Wl(o,e),a=Ja(a),a=Gl(a,e),a=Wl(a,e),o=Xl(o),a=Xl(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+o,_=T+f+a,P=Hl(s,s.VERTEX_SHADER,y),L=Hl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,L),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(P)||"",V=s.getShaderInfoLog(L)||"",z=F.trim(),k=H.trim(),$=V.trim();let B=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,L);else{const xt=Vl(s,P,"vertex"),Et=Vl(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+xt+`
`+Et)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||$==="")&&(Q=!1);Q&&(R.diagnostics={runnable:B,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(P),s.deleteShader(L),C=new Hr(s,v),S=Ug(s,v)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Ag)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=L,this}let qg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $g(t),e.set(t,n)),n}}class $g{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}}function Kg(i,t,e,n,s,r,o){const a=new mc,c=new Yg,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,F,H){const V=F.fog,z=H.geometry,k=S.isMeshStandardMaterial?F.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),B=$&&$.mapping===to?$.image.height:null,Q=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Et=xt!==void 0?xt.length:0;let Wt=0;z.morphAttributes.position!==void 0&&(Wt=1),z.morphAttributes.normal!==void 0&&(Wt=2),z.morphAttributes.color!==void 0&&(Wt=3);let se,re,K,mt;if(Q){const he=En[Q];se=he.vertexShader,re=he.fragmentShader}else se=S.vertexShader,re=S.fragmentShader,c.update(S),K=c.getVertexShaderID(S),mt=c.getFragmentShaderID(S);const ht=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Rt=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,ye=!!S.map,Xt=!!S.matcap,D=!!$,tt=!!S.aoMap,Z=!!S.lightMap,it=!!S.bumpMap,j=!!S.normalMap,ut=!!S.displacementMap,st=!!S.emissiveMap,dt=!!S.metalnessMap,qt=!!S.roughnessMap,Gt=S.anisotropy>0,b=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,X=S.sheen>0,et=S.transmission>0,Y=Gt&&!!S.anisotropyMap,Ct=b&&!!S.clearcoatMap,lt=b&&!!S.clearcoatNormalMap,At=b&&!!S.clearcoatRoughnessMap,bt=O&&!!S.iridescenceMap,rt=O&&!!S.iridescenceThicknessMap,Mt=X&&!!S.sheenColorMap,kt=X&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,vt=!!S.specularColorMap,Kt=!!S.specularIntensityMap,I=et&&!!S.transmissionMap,ct=et&&!!S.thicknessMap,ft=!!S.gradientMap,yt=!!S.alphaMap,ot=S.alphaTest>0,J=!!S.alphaHash,wt=!!S.extensions;let Yt=Qn;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const ve={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:re,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&H._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&H.instanceColor!==null,instancingMorph:Rt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:cs,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:Xt,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:B,aoMap:tt,lightMap:Z,bumpMap:it,normalMap:j,displacementMap:d&&ut,emissiveMap:st,normalMapObjectSpace:j&&S.normalMapType===Gu,normalMapTangentSpace:j&&S.normalMapType===ph,metalnessMap:dt,roughnessMap:qt,anisotropy:Gt,anisotropyMap:Y,clearcoat:b,clearcoatMap:Ct,clearcoatNormalMap:lt,clearcoatRoughnessMap:At,dispersion:x,iridescence:O,iridescenceMap:bt,iridescenceThicknessMap:rt,sheen:X,sheenColorMap:Mt,sheenRoughnessMap:kt,specularMap:Pt,specularColorMap:vt,specularIntensityMap:Kt,transmission:et,transmissionMap:I,thicknessMap:ct,gradientMap:ft,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:yt,alphaTest:ot,alphaHash:J,combine:S.combine,mapUv:ye&&v(S.map.channel),aoMapUv:tt&&v(S.aoMap.channel),lightMapUv:Z&&v(S.lightMap.channel),bumpMapUv:it&&v(S.bumpMap.channel),normalMapUv:j&&v(S.normalMap.channel),displacementMapUv:ut&&v(S.displacementMap.channel),emissiveMapUv:st&&v(S.emissiveMap.channel),metalnessMapUv:dt&&v(S.metalnessMap.channel),roughnessMapUv:qt&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:Ct&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(S.sheenRoughnessMap.channel),specularMapUv:Pt&&v(S.specularMap.channel),specularColorMapUv:vt&&v(S.specularColorMap.channel),specularIntensityMapUv:Kt&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:ct&&v(S.thicknessMap.channel),alphaMapUv:yt&&v(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(j||Gt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(ye||yt),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Nt,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fe,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let R;if(M){const F=En[M];R=Id.clone(F.uniforms)}else R=S.uniforms;return R}function P(S,M){let R;for(let F=0,H=u.length;F<H;F++){const V=u[F];if(V.cacheKey===M){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Xg(i,M,S,r),u.push(R)),R}function L(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:P,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:C}}function Zg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $l(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function a(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||jg),n.length>1&&n.sort(d||Yl),s.length>1&&s.sort(d||Yl)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Jg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new $l,i.set(n,[o])):s>=r.length?(o=new $l,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new pt};break;case"SpotLight":e={position:new A,direction:new A,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function tv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ev=0;function nv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function iv(i){const t=new Qg,e=tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new le,o=new le;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,y=0,_=0,P=0,L=0,w=0;l.sort(nv);for(let S=0,M=l.length;S<M;S++){const R=l[S],F=R.color,H=R.intensity,V=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*H,h+=F.g*H,d+=F.b*H;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],H);w++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,B=e.get(R);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(F).multiplyScalar(H),k.distance=V,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[v]=k;const $=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,$.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[v]=$.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=z,_++}v++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(F).multiplyScalar(H),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const $=R.shadow,B=e.get(R);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(H),k.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==T||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=T,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=w,n.version=ev++)}function c(l,u){let h=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const y=l[f];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Kl(i){const t=new iv(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function sv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Kl(i),t.set(s,[a])):r>=o.length?(a=new Kl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`;function av(i,t,e){let n=new _c;const s=new nt,r=new nt,o=new me,a=new Cf({depthPacking:Vu}),c=new Pf,l={},u=e.maxTextureSize,h={[ni]:Ze,[Ze]:ni,[Fe]:Fe},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rv,fragmentShader:ov}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new q(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let f=this.type;this.render=function(L,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Jn),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==zn&&this.type===zn,V=f===zn&&this.type!==zn;for(let z=0,k=L.length;z<k;z++){const $=L[z],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||H===!0||V===!0){const Et=this.type!==zn?{minFilter:an,magFilter:an}:{};B.map!==null&&B.map.dispose(),B.map=new Ei(s.x,s.y,Et),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const xt=B.getViewportCount();for(let Et=0;Et<xt;Et++){const Wt=B.getViewport(Et);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),F.viewport(o),B.updateMatrices($,Et),n=B.getFrustum(),_(w,C,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===zn&&T(B,C),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function T(L,w){const C=t.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ei(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(w,null,C,d,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(w,null,C,p,v,null)}function y(L,w,C,S){let M=null;const R=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=M.uuid,H=w.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let z=V[H];z===void 0&&(z=M.clone(),V[H]=z,w.addEventListener("dispose",P)),M=z}if(M.visible=w.visible,M.wireframe=w.wireframe,S===zn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=C}return M}function _(L,w,C,S,M){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===zn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const H=t.update(L),V=L.material;if(Array.isArray(V)){const z=H.groups;for(let k=0,$=z.length;k<$;k++){const B=z[k],Q=V[B.materialIndex];if(Q&&Q.visible){const xt=y(L,Q,S,M);L.onBeforeShadow(i,L,w,C,H,xt,B),i.renderBufferDirect(C,null,H,xt,L,B),L.onAfterShadow(i,L,w,C,H,xt,B)}}}else if(V.visible){const z=y(L,V,S,M);L.onBeforeShadow(i,L,w,C,H,z,null),i.renderBufferDirect(C,null,H,z,L,null),L.onAfterShadow(i,L,w,C,H,z,null)}}const F=L.children;for(let H=0,V=F.length;H<V;H++)_(F[H],w,C,S,M)}function P(L){L.target.removeEventListener("dispose",P);for(const C in l){const S=l[C],M=L.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const cv={[ua]:da,[fa]:ga,[pa]:va,[rs]:ma,[da]:ua,[ga]:fa,[va]:pa,[ma]:rs};function lv(i,t){function e(){let I=!1;const ct=new me;let ft=null;const yt=new me(0,0,0,0);return{setMask:function(ot){ft!==ot&&!I&&(i.colorMask(ot,ot,ot,ot),ft=ot)},setLocked:function(ot){I=ot},setClear:function(ot,J,wt,Yt,ve){ve===!0&&(ot*=Yt,J*=Yt,wt*=Yt),ct.set(ot,J,wt,Yt),yt.equals(ct)===!1&&(i.clearColor(ot,J,wt,Yt),yt.copy(ct))},reset:function(){I=!1,ft=null,yt.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,ft=null,yt=null,ot=null;return{setReversed:function(J){if(ct!==J){const wt=t.get("EXT_clip_control");J?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ct=J;const Yt=ot;ot=null,this.setClear(Yt)}},getReversed:function(){return ct},setTest:function(J){J?ht(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(J){ft!==J&&!I&&(i.depthMask(J),ft=J)},setFunc:function(J){if(ct&&(J=cv[J]),yt!==J){switch(J){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=J}},setLocked:function(J){I=J},setClear:function(J){ot!==J&&(ct&&(J=1-J),i.clearDepth(J),ot=J)},reset:function(){I=!1,ft=null,yt=null,ot=null,ct=!1}}}function s(){let I=!1,ct=null,ft=null,yt=null,ot=null,J=null,wt=null,Yt=null,ve=null;return{setTest:function(he){I||(he?ht(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(he){ct!==he&&!I&&(i.stencilMask(he),ct=he)},setFunc:function(he,In,Sn){(ft!==he||yt!==In||ot!==Sn)&&(i.stencilFunc(he,In,Sn),ft=he,yt=In,ot=Sn)},setOp:function(he,In,Sn){(J!==he||wt!==In||Yt!==Sn)&&(i.stencilOp(he,In,Sn),J=he,wt=In,Yt=Sn)},setLocked:function(he){I=he},setClear:function(he){ve!==he&&(i.clearStencil(he),ve=he)},reset:function(){I=!1,ct=null,ft=null,yt=null,ot=null,J=null,wt=null,Yt=null,ve=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,y=null,_=null,P=null,L=null,w=new pt(0,0,0),C=0,S=!1,M=null,R=null,F=null,H=null,V=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=$>=2);let Q=null,xt={};const Et=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),se=new me().fromArray(Et),re=new me().fromArray(Wt);function K(I,ct,ft,yt){const ot=new Uint8Array(4),J=i.createTexture();i.bindTexture(I,J),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<ft;wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ct+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return J}const mt={};mt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(rs),it(!1),j(Oc),ht(i.CULL_FACE),tt(Jn);function ht(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Nt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Rt(I,ct){return h[I]!==ct?(i.bindFramebuffer(I,ct),h[I]=ct,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ht(I,ct){let ft=p,yt=!1;if(I){ft=d.get(ct),ft===void 0&&(ft=[],d.set(ct,ft));const ot=I.textures;if(ft.length!==ot.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let J=0,wt=ot.length;J<wt;J++)ft[J]=i.COLOR_ATTACHMENT0+J;ft.length=ot.length,yt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ft)}function ye(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Xt={[_i]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};Xt[vu]=i.MIN,Xt[_u]=i.MAX;const D={[xu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Cu]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ct,ft,yt,ot,J,wt,Yt,ve,he){if(I===Jn){v===!0&&(Nt(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),I!==pu){if(I!==m||he!==S){if((f!==_i||_!==_i)&&(i.blendEquation(i.FUNC_ADD),f=_i,_=_i),he)switch(I){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,y=null,P=null,L=null,w.set(0,0,0),C=0,m=I,S=he}return}ot=ot||ct,J=J||ft,wt=wt||yt,(ct!==f||ot!==_)&&(i.blendEquationSeparate(Xt[ct],Xt[ot]),f=ct,_=ot),(ft!==T||yt!==y||J!==P||wt!==L)&&(i.blendFuncSeparate(D[ft],D[yt],D[J],D[wt]),T=ft,y=yt,P=J,L=wt),(Yt.equals(w)===!1||ve!==C)&&(i.blendColor(Yt.r,Yt.g,Yt.b,ve),w.copy(Yt),C=ve),m=I,S=!1}function Z(I,ct){I.side===Fe?Nt(i.CULL_FACE):ht(i.CULL_FACE);let ft=I.side===Ze;ct&&(ft=!ft),it(ft),I.blending===Qi&&I.transparent===!1?tt(Jn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const yt=I.stencilWrite;a.setTest(yt),yt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function j(I){I!==du?(ht(i.CULL_FACE),I!==R&&(I===Oc?i.cullFace(i.BACK):I===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),R=I}function ut(I){I!==F&&(k&&i.lineWidth(I),F=I)}function st(I,ct,ft){I?(ht(i.POLYGON_OFFSET_FILL),(H!==ct||V!==ft)&&(i.polygonOffset(ct,ft),H=ct,V=ft)):Nt(i.POLYGON_OFFSET_FILL)}function dt(I){I?ht(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function qt(I){I===void 0&&(I=i.TEXTURE0+z-1),Q!==I&&(i.activeTexture(I),Q=I)}function Gt(I,ct,ft){ft===void 0&&(Q===null?ft=i.TEXTURE0+z-1:ft=Q);let yt=xt[ft];yt===void 0&&(yt={type:void 0,texture:void 0},xt[ft]=yt),(yt.type!==I||yt.texture!==ct)&&(Q!==ft&&(i.activeTexture(ft),Q=ft),i.bindTexture(I,ct||mt[I]),yt.type=I,yt.texture=ct)}function b(){const I=xt[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function kt(I){re.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function Pt(I,ct){let ft=l.get(ct);ft===void 0&&(ft=new WeakMap,l.set(ct,ft));let yt=ft.get(I);yt===void 0&&(yt=i.getUniformBlockIndex(ct,I.name),ft.set(I,yt))}function vt(I,ct){const yt=l.get(ct).get(I);c.get(ct)!==yt&&(i.uniformBlockBinding(ct,yt,I.__bindingPointIndex),c.set(ct,yt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,xt={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,y=null,_=null,P=null,L=null,w=new pt(0,0,0),C=0,S=!1,M=null,R=null,F=null,H=null,V=null,se.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Nt,bindFramebuffer:Rt,drawBuffers:Ht,useProgram:ye,setBlending:tt,setMaterial:Z,setFlipSided:it,setCullFace:j,setLineWidth:ut,setPolygonOffset:st,setScissorTest:dt,activeTexture:qt,bindTexture:Gt,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:bt,texImage3D:rt,updateUBOMapping:Pt,uniformBlockBinding:vt,texStorage2D:lt,texStorage3D:At,texSubImage2D:X,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ct,scissor:Mt,viewport:kt,reset:Kt}}function hv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Xr("canvas")}function v(b,x,O){let X=1;const et=Gt(b);if((et.width>O||et.height>O)&&(X=O/Math.max(et.width,et.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(X*et.width),Ct=Math.floor(X*et.height);h===void 0&&(h=g(Y,Ct));const lt=x?g(Y,Ct):h;return lt.width=Y,lt.height=Ct,lt.getContext("2d").drawImage(b,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Ct+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,x,O,X,et=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const Ct=et?Gr:ae.getTransfer(X);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Ct===pe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(b,x){let O;return b?x===null||x===yi||x===Bs?O=i.DEPTH24_STENCIL8:x===bn?O=i.DEPTH32F_STENCIL8:x===Fs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===Bs?O=i.DEPTH_COMPONENT24:x===bn?O=i.DEPTH_COMPONENT32F:x===Fs&&(O=i.DEPTH_COMPONENT16),O}function P(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==an&&b.minFilter!==An?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function L(b){const x=b.target;x.removeEventListener("dispose",L),C(x),x.isVideoTexture&&u.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),M(x)}function C(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,X=d.get(O);if(X){const et=X[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(b),Object.keys(X).length===0&&d.delete(O)}n.remove(b)}function S(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,X=d.get(O);delete X[x.__cacheKey],o.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let et=0;et<x.__webglFramebuffer[X].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[X][et]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let X=0,et=O.length;X<et;X++){const Y=n.get(O[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(b)}let R=0;function F(){R=0}function H(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function V(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function z(b,x){const O=n.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function k(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){mt(O,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function $(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){mt(O,b,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function B(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){ht(O,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const Q={[Os]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},xt={[an]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Et={[Wu]:i.NEVER,[Zu]:i.ALWAYS,[Xu]:i.LESS,[mh]:i.LEQUAL,[qu]:i.EQUAL,[Ku]:i.GEQUAL,[Yu]:i.GREATER,[$u]:i.NOTEQUAL};function Wt(b,x){if(x.type===bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===An||x.magFilter===uo||x.magFilter===tr||x.magFilter===Si||x.minFilter===An||x.minFilter===uo||x.minFilter===tr||x.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Q[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Q[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Q[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,xt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==tr&&x.minFilter!==Si||x.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",L));const X=x.source;let et=d.get(X);et===void 0&&(et={},d.set(X,et));const Y=V(x);if(Y!==b.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[Y].usedTimes++;const Ct=et[b.__cacheKey];Ct!==void 0&&(et[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(x)),b.__cacheKey=Y,b.__webglTexture=et[Y].texture}return O}function re(b,x,O){return Math.floor(Math.floor(b/O)/x)}function K(b,x,O,X){const Y=b.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{Y.sort((rt,Mt)=>rt.start-Mt.start);let Ct=0;for(let rt=1;rt<Y.length;rt++){const Mt=Y[Ct],kt=Y[rt],Pt=Mt.start+Mt.count,vt=re(kt.start,x.width,4),Kt=re(Mt.start,x.width,4);kt.start<=Pt+1&&vt===Kt&&re(kt.start+kt.count-1,x.width,4)===vt?Mt.count=Math.max(Mt.count,kt.start+kt.count-Mt.start):(++Ct,Y[Ct]=kt)}Y.length=Ct+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let rt=0,Mt=Y.length;rt<Mt;rt++){const kt=Y[rt],Pt=Math.floor(kt.start/4),vt=Math.ceil(kt.count/4),Kt=Pt%x.width,I=Math.floor(Pt/x.width),ct=vt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Kt,I,ct,ft,O,X,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function mt(b,x,O){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const et=se(b,x),Y=x.source;e.bindTexture(X,b.__webglTexture,i.TEXTURE0+O);const Ct=n.get(Y);if(Y.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+O);const lt=ae.getPrimaries(ae.workingColorSpace),At=x.colorSpace===jn?null:ae.getPrimaries(x.colorSpace),bt=x.colorSpace===jn||lt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let rt=v(x.image,!1,s.maxTextureSize);rt=qt(x,rt);const Mt=r.convert(x.format,x.colorSpace),kt=r.convert(x.type);let Pt=y(x.internalFormat,Mt,kt,x.colorSpace,x.isVideoTexture);Wt(X,x);let vt;const Kt=x.mipmaps,I=x.isVideoTexture!==!0,ct=Ct.__version===void 0||et===!0,ft=Y.dataReady,yt=P(x,rt);if(x.isDepthTexture)Pt=_(x.format===Hs,x.type),ct&&(I?e.texStorage2D(i.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,rt.width,rt.height,0,Mt,kt,null));else if(x.isDataTexture)if(Kt.length>0){I&&ct&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,Kt[0].width,Kt[0].height);for(let ot=0,J=Kt.length;ot<J;ot++)vt=Kt[ot],I?ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Mt,kt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,Pt,vt.width,vt.height,0,Mt,kt,vt.data);x.generateMipmaps=!1}else I?(ct&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,rt.width,rt.height),ft&&K(x,rt,Mt,kt)):e.texImage2D(i.TEXTURE_2D,0,Pt,rt.width,rt.height,0,Mt,kt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,Kt[0].width,Kt[0].height,rt.depth);for(let ot=0,J=Kt.length;ot<J;ot++)if(vt=Kt[ot],x.format!==vn)if(Mt!==null)if(I){if(ft)if(x.layerUpdates.size>0){const wt=Al(vt.width,vt.height,x.format,x.type);for(const Yt of x.layerUpdates){const ve=vt.data.subarray(Yt*wt/vt.data.BYTES_PER_ELEMENT,(Yt+1)*wt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Yt,vt.width,vt.height,1,Mt,ve)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,rt.depth,Mt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Pt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,rt.depth,Mt,kt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Pt,vt.width,vt.height,rt.depth,0,Mt,kt,vt.data)}else{I&&ct&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,Kt[0].width,Kt[0].height);for(let ot=0,J=Kt.length;ot<J;ot++)vt=Kt[ot],x.format!==vn?Mt!==null?I?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Mt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Mt,kt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,Pt,vt.width,vt.height,0,Mt,kt,vt.data)}else if(x.isDataArrayTexture)if(I){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,rt.width,rt.height,rt.depth),ft)if(x.layerUpdates.size>0){const ot=Al(rt.width,rt.height,x.format,x.type);for(const J of x.layerUpdates){const wt=rt.data.subarray(J*ot/rt.data.BYTES_PER_ELEMENT,(J+1)*ot/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,Mt,kt,wt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,kt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,Mt,kt,rt.data);else if(x.isData3DTexture)I?(ct&&e.texStorage3D(i.TEXTURE_3D,yt,Pt,rt.width,rt.height,rt.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,kt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,Mt,kt,rt.data);else if(x.isFramebufferTexture){if(ct)if(I)e.texStorage2D(i.TEXTURE_2D,yt,Pt,rt.width,rt.height);else{let ot=rt.width,J=rt.height;for(let wt=0;wt<yt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Pt,ot,J,0,Mt,kt,null),ot>>=1,J>>=1}}else if(Kt.length>0){if(I&&ct){const ot=Gt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Pt,ot.width,ot.height)}for(let ot=0,J=Kt.length;ot<J;ot++)vt=Kt[ot],I?ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Mt,kt,vt):e.texImage2D(i.TEXTURE_2D,ot,Pt,Mt,kt,vt);x.generateMipmaps=!1}else if(I){if(ct){const ot=Gt(rt);e.texStorage2D(i.TEXTURE_2D,yt,Pt,ot.width,ot.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,kt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Mt,kt,rt);m(x)&&f(X),Ct.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ht(b,x,O){if(x.image.length!==6)return;const X=se(b,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const Y=n.get(et);if(et.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+O);const Ct=ae.getPrimaries(ae.workingColorSpace),lt=x.colorSpace===jn?null:ae.getPrimaries(x.colorSpace),At=x.colorSpace===jn||Ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!bt&&!rt?Mt[J]=v(x.image[J],!0,s.maxCubemapSize):Mt[J]=rt?x.image[J].image:x.image[J],Mt[J]=qt(x,Mt[J]);const kt=Mt[0],Pt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),Kt=y(x.internalFormat,Pt,vt,x.colorSpace),I=x.isVideoTexture!==!0,ct=Y.__version===void 0||X===!0,ft=et.dataReady;let yt=P(x,kt);Wt(i.TEXTURE_CUBE_MAP,x);let ot;if(bt){I&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,kt.width,kt.height);for(let J=0;J<6;J++){ot=Mt[J].mipmaps;for(let wt=0;wt<ot.length;wt++){const Yt=ot[wt];x.format!==vn?Pt!==null?I?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,0,0,Yt.width,Yt.height,Pt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,Kt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,0,0,Yt.width,Yt.height,Pt,vt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,Kt,Yt.width,Yt.height,0,Pt,vt,Yt.data)}}}else{if(ot=x.mipmaps,I&&ct){ot.length>0&&yt++;const J=Gt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,J.width,J.height)}for(let J=0;J<6;J++)if(rt){I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,Pt,vt,Mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Kt,Mt[J].width,Mt[J].height,0,Pt,vt,Mt[J].data);for(let wt=0;wt<ot.length;wt++){const ve=ot[wt].image[J].image;I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,0,0,ve.width,ve.height,Pt,vt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,Kt,ve.width,ve.height,0,Pt,vt,ve.data)}}else{I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,vt,Mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Kt,Pt,vt,Mt[J]);for(let wt=0;wt<ot.length;wt++){const Yt=ot[wt];I?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,0,0,Pt,vt,Yt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,Kt,Pt,vt,Yt.image[J])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),Y.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Nt(b,x,O,X,et,Y){const Ct=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),At=y(O.internalFormat,Ct,lt,O.colorSpace),bt=n.get(x),rt=n.get(O);if(rt.__renderTarget=x,!bt.__hasExternalTextures){const Mt=Math.max(1,x.width>>Y),kt=Math.max(1,x.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,At,Mt,kt,x.depth,0,Ct,lt,null):e.texImage2D(et,Y,At,Mt,kt,0,Ct,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),st(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,et,rt.__webglTexture,0,ut(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,et,rt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const X=x.depthTexture,et=X&&X.isDepthTexture?X.type:null,Y=_(x.stencilBuffer,et),Ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ut(x);st(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,b)}else{const X=x.textures;for(let et=0;et<X.length;et++){const Y=X[et],Ct=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),At=y(Y.internalFormat,Ct,lt,Y.colorSpace),bt=ut(x);O&&st(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,At,x.width,x.height):st(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const et=X.__webglTexture,Y=ut(x);if(x.depthTexture.format===zs)st(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===Hs)st(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ye(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",et)};X.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=X}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?Ht(x.__webglFramebuffer[0],b):Ht(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Rt(x.__webglDepthbuffer[X],b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Rt(x.__webglDepthbuffer,b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(b,x,O){const X=n.get(b);x!==void 0&&Nt(X.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ye(b)}function D(b){const x=b.texture,O=n.get(b),X=n.get(x);b.addEventListener("dispose",w);const et=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let At=0;At<x.mipmaps.length;At++)O.__webglFramebuffer[lt][At]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let lt=0,At=et.length;lt<At;lt++){const bt=n.get(et[lt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&st(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const At=et[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const bt=r.convert(At.format,At.colorSpace),rt=r.convert(At.type),Mt=y(At.internalFormat,bt,rt,At.colorSpace,b.isXRRenderTarget===!0),kt=ut(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Mt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)Nt(O.__webglFramebuffer[lt][At],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At);else Nt(O.__webglFramebuffer[lt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let lt=0,At=et.length;lt<At;lt++){const bt=et[lt],rt=n.get(bt);let Mt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,rt.__webglTexture),Wt(Mt,bt),Nt(O.__webglFramebuffer,b,bt,i.COLOR_ATTACHMENT0+lt,Mt,0),m(bt)&&f(Mt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),Wt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)Nt(O.__webglFramebuffer[At],b,x,i.COLOR_ATTACHMENT0,lt,At);else Nt(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&f(lt),e.unbindTexture()}b.depthBuffer&&ye(b)}function tt(b){const x=b.textures;for(let O=0,X=x.length;O<X;O++){const et=x[O];if(m(et)){const Y=T(b),Ct=n.get(et).__webglTexture;e.bindTexture(Y,Ct),f(Y),e.unbindTexture()}}}const Z=[],it=[];function j(b){if(b.samples>0){if(st(b)===!1){const x=b.textures,O=b.width,X=b.height;let et=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(b),lt=x.length>1;if(lt)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const At=b.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const rt=n.get(x[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,et,i.NEAREST),c===!0&&(Z.length=0,it.length=0,Z.push(i.COLOR_ATTACHMENT0+bt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Z.push(Y),it.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const rt=n.get(x[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ut(b){return Math.min(s.maxSamples,b.samples)}function st(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function dt(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function qt(b,x){const O=b.colorSpace,X=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==cs&&O!==jn&&(ae.getTransfer(O)===pe?(X!==vn||et!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Gt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Xt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=st}function uv(i,t){function e(n,s=jn){let r;const o=ae.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.BYTE;if(n===ch)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Ys)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===vn)return i.RGBA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===dh)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Or||n===Fr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ya||n===Ea||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===ba)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Oa||n===Fa||n===Ba||n===za||n===Ha||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Wh extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`;class pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Wh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mv extends us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const v=new pv,m={},f=e.getContextAttributes();let T=null,y=null;const _=[],P=[],L=new nt;let w=null;const C=new rn;C.viewport=new me;const S=new rn;S.viewport=new me;const M=[C,S],R=new Nf;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=_[K];return mt===void 0&&(mt=new Io,_[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=_[K];return mt===void 0&&(mt=new Io,_[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=_[K];return mt===void 0&&(mt=new Io,_[K]=mt),mt.getHandSpace()};function V(K){const mt=P.indexOf(K.inputSource);if(mt===-1)return;const ht=_[mt];ht!==void 0&&(ht.update(K.inputSource,K.frame,l||o),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let K=0;K<_.length;K++){const mt=P[K];mt!==null&&(P[K]=null,_[K].disconnect(mt))}F=null,H=null,v.reset();for(const K in m)delete m[K];t.setRenderTarget(T),p=null,d=null,h=null,s=null,y=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(s,e)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Nt=null,Rt=null;f.depth&&(Rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=f.stencil?Hs:zs,Nt=f.stencil?Bs:yi);const Ht={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};d=h.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ei(d.textureWidth,d.textureHeight,{format:vn,type:Pn,depthTexture:new wh(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ht={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ei(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(K){for(let mt=0;mt<K.removed.length;mt++){const ht=K.removed[mt],Nt=P.indexOf(ht);Nt>=0&&(P[Nt]=null,_[Nt].disconnect(ht))}for(let mt=0;mt<K.added.length;mt++){const ht=K.added[mt];let Nt=P.indexOf(ht);if(Nt===-1){for(let Ht=0;Ht<_.length;Ht++)if(Ht>=P.length){P.push(ht),Nt=Ht;break}else if(P[Ht]===null){P[Ht]=ht,Nt=Ht;break}if(Nt===-1)break}const Rt=_[Nt];Rt&&Rt.connect(ht)}}const $=new A,B=new A;function Q(K,mt,ht){$.setFromMatrixPosition(mt.matrixWorld),B.setFromMatrixPosition(ht.matrixWorld);const Nt=$.distanceTo(B),Rt=mt.projectionMatrix.elements,Ht=ht.projectionMatrix.elements,ye=Rt[14]/(Rt[10]-1),Xt=Rt[14]/(Rt[10]+1),D=(Rt[9]+1)/Rt[5],tt=(Rt[9]-1)/Rt[5],Z=(Rt[8]-1)/Rt[0],it=(Ht[8]+1)/Ht[0],j=ye*Z,ut=ye*it,st=Nt/(-Z+it),dt=st*-Z;if(mt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(dt),K.translateZ(st),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Rt[10]===-1)K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const qt=ye+st,Gt=Xt+st,b=j-dt,x=ut+(Nt-dt),O=D*Xt/Gt*qt,X=tt*Xt/Gt*qt;K.projectionMatrix.makePerspective(b,x,O,X,qt,Gt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xt(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let mt=K.near,ht=K.far;v.texture!==null&&(v.depthNear>0&&(mt=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),R.near=S.near=C.near=mt,R.far=S.far=C.far=ht,(F!==R.near||H!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,H=R.far),R.layers.mask=K.layers.mask|6,C.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const Nt=K.parent,Rt=R.cameras;xt(R,Nt);for(let Ht=0;Ht<Rt.length;Ht++)xt(Rt[Ht],Nt);Rt.length===2?Q(R,C,S):R.projectionMatrix.copy(C.projectionMatrix),Et(K,R,Nt)};function Et(K,mt,ht){ht===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ks*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(R)},this.getCameraTexture=function(K){return m[K]};let Wt=null;function se(K,mt){if(u=mt.getViewerPose(l||o),g=mt,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Nt=!1;ht.length!==R.cameras.length&&(R.cameras.length=0,Nt=!0);for(let Xt=0;Xt<ht.length;Xt++){const D=ht[Xt];let tt=null;if(p!==null)tt=p.getViewport(D);else{const it=h.getViewSubImage(d,D);tt=it.viewport,Xt===0&&(t.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(y))}let Z=M[Xt];Z===void 0&&(Z=new rn,Z.layers.enable(Xt),Z.viewport=new me,M[Xt]=Z),Z.matrix.fromArray(D.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(D.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(tt.x,tt.y,tt.width,tt.height),Xt===0&&(R.matrix.copy(Z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Nt===!0&&R.cameras.push(Z)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Xt=h.getDepthInformation(ht[0]);Xt&&Xt.isValid&&Xt.texture&&v.init(Xt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&(t.state.unbindTexture(),h))for(let Xt=0;Xt<ht.length;Xt++){const D=ht[Xt].camera;if(D){let tt=m[D];tt||(tt=new Wh,m[D]=tt);const Z=h.getCameraImage(D);tt.sourceTexture=Z}}}for(let ht=0;ht<_.length;ht++){const Nt=P[ht],Rt=_[ht];Nt!==null&&Rt!==void 0&&Rt.update(Nt,mt,l||o)}Wt&&Wt(K,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}const re=new zh;re.setAnimationLoop(se),this.setAnimationLoop=function(K){Wt=K},this.dispose=function(){}}}const pi=new Ln,gv=new le;function vv(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Sh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),y=T.envMap,_=T.envMapRotation;y&&(m.envMap.value=y,pi.copy(_),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(pi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const _=y.program;n.uniformBlockBinding(T,_)}function l(T,y){let _=s[T.id];_===void 0&&(g(T),_=u(T),s[T.id]=_,T.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(T,P);const L=t.render.frame;r[T.id]!==L&&(d(T),r[T.id]=L)}function u(T){const y=h();T.__bindingPointIndex=y;const _=i.createBuffer(),P=T.__size,L=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],_=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let L=0,w=_.length;L<w;L++){const C=Array.isArray(_[L])?_[L]:[_[L]];for(let S=0,M=C.length;S<M;S++){const R=C[S];if(p(R,L,S,P)===!0){const F=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let z=0;z<H.length;z++){const k=H[z],$=v(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+V,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,_,P){const L=T.value,w=y+"_"+_;if(P[w]===void 0)return typeof L=="number"||typeof L=="boolean"?P[w]=L:P[w]=L.clone(),!0;{const C=P[w];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return P[w]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function g(T){const y=T.uniforms;let _=0;const P=16;for(let w=0,C=y.length;w<C;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,R=S.length;M<R;M++){const F=S[M],H=Array.isArray(F.value)?F.value:[F.value];for(let V=0,z=H.length;V<z;V++){const k=H[V],$=v(k),B=_%P,Q=B%$.boundary,xt=B+Q;_+=Q,xt!==0&&P-xt<$.storage&&(_+=P-xt),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=$.storage}}}const L=_%P;return L>0&&(_+=P-L),T.__size=_,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class xv{constructor(t={}){const{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let P=!1;this._outputColorSpace=Ke;let L=0,w=0,C=null,S=-1,M=null;const R=new me,F=new me;let H=null;const V=new pt(0);let z=0,k=e.width,$=e.height,B=1,Q=null,xt=null;const Et=new me(0,0,k,$),Wt=new me(0,0,k,$);let se=!1;const re=new _c;let K=!1,mt=!1;const ht=new le,Nt=new A,Rt=new me,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Xt(){return C===null?B:1}let D=n;function tt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){const U="webgl2";if(D=tt(U,E),D===null)throw tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Z,it,j,ut,st,dt,qt,Gt,b,x,O,X,et,Y,Ct,lt,At,bt,rt,Mt,kt,Pt,vt,Kt;function I(){Z=new C0(D),Z.init(),Pt=new uv(D,Z),it=new y0(D,Z,t,Pt),j=new lv(D,Z),it.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ut=new D0(D),st=new Zg,dt=new hv(D,Z,j,st,it,Pt,ut),qt=new T0(_),Gt=new R0(_),b=new Bf(D),vt=new M0(D,b),x=new P0(D,b,ut,vt),O=new U0(D,x,b,ut),rt=new I0(D,it,dt),lt=new E0(st),X=new Kg(_,qt,Gt,Z,it,vt,lt),et=new vv(_,st),Y=new Jg,Ct=new sv(Z),bt=new x0(_,qt,Gt,j,O,p,c),At=new av(_,O,it),Kt=new _v(D,ut,it,j),Mt=new S0(D,Z,ut),kt=new L0(D,Z,ut),ut.programs=X.programs,_.capabilities=it,_.extensions=Z,_.properties=st,_.renderLists=Y,_.shadowMap=At,_.state=j,_.info=ut}I();const ct=new mv(_,D);this.xr=ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(k,$,!1))},this.getSize=function(E){return E.set(k,$)},this.setSize=function(E,U,G=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,$=U,e.width=Math.floor(E*B),e.height=Math.floor(U*B),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(k*B,$*B).floor()},this.setDrawingBufferSize=function(E,U,G){k=E,$=U,B=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,U,G,W){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,U,G,W),j.viewport(R.copy(Et).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,U,G,W){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,U,G,W),j.scissor(F.copy(Wt).multiplyScalar(B).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){j.setScissorTest(se=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let N=!1;if(C!==null){const at=C.texture.format;N=at===uc||at===hc||at===lc}if(N){const at=C.texture.type,_t=at===Pn||at===yi||at===Fs||at===Bs||at===oc||at===ac,Tt=bt.getClearColor(),St=bt.getClearAlpha(),Bt=Tt.r,Vt=Tt.g,Ut=Tt.b;_t?(g[0]=Bt,g[1]=Vt,g[2]=Ut,g[3]=St,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Bt,v[1]=Vt,v[2]=Ut,v[3]=St,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),bt.dispose(),Y.dispose(),Ct.dispose(),st.dispose(),qt.dispose(),Gt.dispose(),O.dispose(),vt.dispose(),Kt.dispose(),X.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Sn),ct.removeEventListener("sessionend",Pc),ai.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ut.autoReset,U=At.enabled,G=At.autoUpdate,W=At.needsUpdate,N=At.type;I(),ut.autoReset=E,At.enabled=U,At.autoUpdate=G,At.needsUpdate=W,At.type=N}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function J(E){const U=E.target;U.removeEventListener("dispose",J),wt(U)}function wt(E){Yt(E),st.remove(E)}function Yt(E){const U=st.get(E).programs;U!==void 0&&(U.forEach(function(G){X.releaseProgram(G)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,N,at){U===null&&(U=Ht);const _t=N.isMesh&&N.matrixWorld.determinant()<0,Tt=ou(E,U,G,W,N);j.setMaterial(W,_t);let St=G.index,Bt=1;if(W.wireframe===!0){if(St=x.getWireframeAttribute(G),St===void 0)return;Bt=2}const Vt=G.drawRange,Ut=G.attributes.position;let ee=Vt.start*Bt,fe=(Vt.start+Vt.count)*Bt;at!==null&&(ee=Math.max(ee,at.start*Bt),fe=Math.min(fe,(at.start+at.count)*Bt)),St!==null?(ee=Math.max(ee,0),fe=Math.min(fe,St.count)):Ut!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Ut.count));const Re=fe-ee;if(Re<0||Re===1/0)return;vt.setup(N,W,Tt,G,St);let xe,ge=Mt;if(St!==null&&(xe=b.get(St),ge=kt,ge.setIndex(xe)),N.isMesh)W.wireframe===!0?(j.setLineWidth(W.wireframeLinewidth*Xt()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(N.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),j.setLineWidth(Ot*Xt()),N.isLineSegments?ge.setMode(D.LINES):N.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else N.isPoints?ge.setMode(D.POINTS):N.isSprite&&ge.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ge.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ot=N._multiDrawStarts,Ee=N._multiDrawCounts,oe=N._multiDrawCount,tn=St?b.get(St).bytesPerElement:1,Pi=st.get(W).currentProgram.getUniforms();for(let en=0;en<oe;en++)Pi.setValue(D,"_gl_DrawID",en),ge.render(Ot[en]/tn,Ee[en])}else if(N.isInstancedMesh)ge.renderInstances(ee,Re,N.count);else if(G.isInstancedBufferGeometry){const Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,Ot);ge.renderInstances(ee,Re,Ee)}else ge.render(ee,Re)};function ve(E,U,G){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,Qs(E,U,G),E.side=ni,E.needsUpdate=!0,Qs(E,U,G),E.side=Fe):Qs(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),f=Ct.get(G),f.init(U),y.push(f),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==G&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Tt=at[_t];ve(Tt,G,N),W.add(Tt)}else ve(at,G,N),W.add(at)}),f=y.pop(),W},this.compileAsync=function(E,U,G=null){const W=this.compile(E,U,G);return new Promise(N=>{function at(){if(W.forEach(function(_t){st.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){N(E);return}setTimeout(at,10)}Z.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let he=null;function In(E){he&&he(E)}function Sn(){ai.stop()}function Pc(){ai.start()}const ai=new zh;ai.setAnimationLoop(In),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){he=E,ct.setAnimationLoop(E),E===null?ai.stop():ai.start()},ct.addEventListener("sessionstart",Sn),ct.addEventListener("sessionend",Pc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(U),U=ct.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,C),f=Ct.get(E,y.length),f.init(U),y.push(f),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),re.setFromProjectionMatrix(ht,wn,U.reversedDepth),mt=this.localClippingEnabled,K=lt.init(this.clippingPlanes,mt),m=Y.get(E,T.length),m.init(),T.push(m),ct.enabled===!0&&ct.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&lo(at,U,-1/0,_.sortObjects)}lo(E,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,xt),ye=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ye&&bt.addToRenderList(m,E),this.info.render.frame++,K===!0&&lt.beginShadows();const G=f.state.shadowsArray;At.render(G,E,U),K===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const at=U.cameras;if(N.length>0)for(let _t=0,Tt=at.length;_t<Tt;_t++){const St=at[_t];Dc(W,N,E,St)}ye&&bt.render(E);for(let _t=0,Tt=at.length;_t<Tt;_t++){const St=at[_t];Lc(m,E,St,St.viewport)}}else N.length>0&&Dc(W,N,E,U),ye&&bt.render(E),Lc(m,E,U);C!==null&&w===0&&(dt.updateMultisampleRenderTarget(C),dt.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,U),vt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],K===!0&&lt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function lo(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||re.intersectsSprite(E)){W&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const _t=O.update(E),Tt=E.material;Tt.visible&&m.push(E,_t,Tt,G,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||re.intersectsObject(E))){const _t=O.update(E),Tt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Rt.copy(_t.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(Tt)){const St=_t.groups;for(let Bt=0,Vt=St.length;Bt<Vt;Bt++){const Ut=St[Bt],ee=Tt[Ut.materialIndex];ee&&ee.visible&&m.push(E,_t,ee,G,Rt.z,Ut)}}else Tt.visible&&m.push(E,_t,Tt,G,Rt.z,null)}}const at=E.children;for(let _t=0,Tt=at.length;_t<Tt;_t++)lo(at[_t],U,G,W)}function Lc(E,U,G,W){const N=E.opaque,at=E.transmissive,_t=E.transparent;f.setupLightsView(G),K===!0&&lt.setGlobalState(_.clippingPlanes,G),W&&j.viewport(R.copy(W)),N.length>0&&Js(N,U,G),at.length>0&&Js(at,U,G),_t.length>0&&Js(_t,U,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Dc(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Ei(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Ys:Pn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const at=f.state.transmissionRenderTarget[W.id],_t=W.viewport||R;at.setSize(_t.z*_.transmissionResolutionScale,_t.w*_.transmissionResolutionScale);const Tt=_.getRenderTarget(),St=_.getActiveCubeFace(),Bt=_.getActiveMipmapLevel();_.setRenderTarget(at),_.getClearColor(V),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),ye&&bt.render(G);const Vt=_.toneMapping;_.toneMapping=Qn;const Ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),K===!0&&lt.setGlobalState(_.clippingPlanes,W),Js(E,G,W),dt.updateMultisampleRenderTarget(at),dt.updateRenderTargetMipmap(at),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let fe=0,Re=U.length;fe<Re;fe++){const xe=U[fe],ge=xe.object,Ot=xe.geometry,Ee=xe.material,oe=xe.group;if(Ee.side===Fe&&ge.layers.test(W.layers)){const tn=Ee.side;Ee.side=Ze,Ee.needsUpdate=!0,Ic(ge,G,W,Ot,Ee,oe),Ee.side=tn,Ee.needsUpdate=!0,ee=!0}}ee===!0&&(dt.updateMultisampleRenderTarget(at),dt.updateRenderTargetMipmap(at))}_.setRenderTarget(Tt,St,Bt),_.setClearColor(V,z),Ut!==void 0&&(W.viewport=Ut),_.toneMapping=Vt}function Js(E,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=E.length;N<at;N++){const _t=E[N],Tt=_t.object,St=_t.geometry,Bt=_t.group;let Vt=_t.material;Vt.allowOverride===!0&&W!==null&&(Vt=W),Tt.layers.test(G.layers)&&Ic(Tt,U,G,St,Vt,Bt)}}function Ic(E,U,G,W,N,at){E.onBeforeRender(_,U,G,W,N,at),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(_,U,G,W,E,at),N.transparent===!0&&N.side===Fe&&N.forceSinglePass===!1?(N.side=Ze,N.needsUpdate=!0,_.renderBufferDirect(G,U,W,N,E,at),N.side=ni,N.needsUpdate=!0,_.renderBufferDirect(G,U,W,N,E,at),N.side=Fe):_.renderBufferDirect(G,U,W,N,E,at),E.onAfterRender(_,U,G,W,N,at)}function Qs(E,U,G){U.isScene!==!0&&(U=Ht);const W=st.get(E),N=f.state.lights,at=f.state.shadowsArray,_t=N.state.version,Tt=X.getParameters(E,N.state,at,U,G),St=X.getProgramCacheKey(Tt);let Bt=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?Gt:qt).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",J),Bt=new Map,W.programs=Bt);let Vt=Bt.get(St);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===_t)return Nc(E,Tt),Vt}else Tt.uniforms=X.getUniforms(E),E.onBeforeCompile(Tt,_),Vt=X.acquireProgram(Tt,St),Bt.set(St,Vt),W.uniforms=Tt.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=lt.uniform),Nc(E,Tt),W.needsLights=cu(E),W.lightsStateVersion=_t,W.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function Uc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Hr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Nc(E,U){const G=st.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ou(E,U,G,W,N){U.isScene!==!0&&(U=Ht),dt.resetTextureUnits();const at=U.fog,_t=W.isMeshStandardMaterial?U.environment:null,Tt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cs,St=(W.isMeshStandardMaterial?Gt:qt).get(W.envMap||_t),Bt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!G.morphAttributes.position,ee=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color;let Re=Qn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Re=_.toneMapping);const xe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=xe!==void 0?xe.length:0,Ot=st.get(W),Ee=f.state.lights;if(K===!0&&(mt===!0||E!==M)){const qe=E===M&&W.id===S;lt.setState(W,E,qe)}let oe=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ee.state.version||Ot.outputColorSpace!==Tt||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==St||W.fog===!0&&Ot.fog!==at||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==Vt||Ot.morphTargets!==Ut||Ot.morphNormals!==ee||Ot.morphColors!==fe||Ot.toneMapping!==Re||Ot.morphTargetsCount!==ge)&&(oe=!0):(oe=!0,Ot.__version=W.version);let tn=Ot.currentProgram;oe===!0&&(tn=Qs(W,U,N));let Pi=!1,en=!1,gs=!1;const Te=tn.getUniforms(),cn=Ot.uniforms;if(j.useProgram(tn.program)&&(Pi=!0,en=!0,gs=!0),W.id!==S&&(S=W.id,en=!0),Pi||M!==E){j.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Te.setValue(D,"projectionMatrix",E.projectionMatrix),Te.setValue(D,"viewMatrix",E.matrixWorldInverse);const Qe=Te.map.cameraPosition;Qe!==void 0&&Qe.setValue(D,Nt.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Te.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,en=!0,gs=!0)}if(N.isSkinnedMesh){Te.setOptional(D,N,"bindMatrix"),Te.setOptional(D,N,"bindMatrixInverse");const qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Te.setValue(D,"boneTexture",qe.boneTexture,dt))}N.isBatchedMesh&&(Te.setOptional(D,N,"batchingTexture"),Te.setValue(D,"batchingTexture",N._matricesTexture,dt),Te.setOptional(D,N,"batchingIdTexture"),Te.setValue(D,"batchingIdTexture",N._indirectTexture,dt),Te.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Te.setValue(D,"batchingColorTexture",N._colorsTexture,dt));const ln=G.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&rt.update(N,G,tn),(en||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,Te.setValue(D,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(cn.envMap.value=St,cn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),en&&(Te.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&au(cn,gs),at&&W.fog===!0&&et.refreshFogUniforms(cn,at),et.refreshMaterialUniforms(cn,W,B,$,f.state.transmissionRenderTarget[E.id]),Hr.upload(D,Uc(Ot),cn,dt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hr.upload(D,Uc(Ot),cn,dt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Te.setValue(D,"center",N.center),Te.setValue(D,"modelViewMatrix",N.modelViewMatrix),Te.setValue(D,"normalMatrix",N.normalMatrix),Te.setValue(D,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const qe=W.uniformsGroups;for(let Qe=0,ho=qe.length;Qe<ho;Qe++){const ci=qe[Qe];Kt.update(ci,tn),Kt.bind(ci,tn)}}return tn}function au(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function cu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,G){const W=st.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),st.get(E.texture).__webglTexture=U,st.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const G=st.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const lu=D.createFramebuffer();this.setRenderTarget=function(E,U=0,G=0){C=E,L=U,w=G;let W=!0,N=null,at=!1,_t=!1;if(E){const St=st.get(E);if(St.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(St.__webglFramebuffer===void 0)dt.setupRenderTarget(E);else if(St.__hasExternalTextures)dt.rebindTextures(E,st.get(E.texture).__webglTexture,st.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(St.__boundDepthTexture!==Ut){if(Ut!==null&&st.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(_t=!0);const Vt=st.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][G]:N=Vt[U],at=!0):E.samples>0&&dt.useMultisampledRTT(E)===!1?N=st.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[G]:N=Vt,R.copy(E.viewport),F.copy(E.scissor),H=E.scissorTest}else R.copy(Et).multiplyScalar(B).floor(),F.copy(Wt).multiplyScalar(B).floor(),H=se;if(G!==0&&(N=lu),j.bindFramebuffer(D.FRAMEBUFFER,N)&&W&&j.drawBuffers(E,N),j.viewport(R),j.scissor(F),j.setScissorTest(H),at){const St=st.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,G)}else if(_t){const St=U;for(let Bt=0;Bt<E.textures.length;Bt++){const Vt=st.get(E.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,G,St)}}else if(E!==null&&G!==0){const St=st.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(E,U,G,W,N,at,_t,Tt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=st.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){j.bindFramebuffer(D.FRAMEBUFFER,St);try{const Bt=E.textures[Tt],Vt=Bt.format,Ut=Bt.type;if(!it.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-N&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt),D.readPixels(U,G,W,N,Pt.convert(Vt),Pt.convert(Ut),at))}finally{const Bt=C!==null?st.get(C).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,W,N,at,_t,Tt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=st.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St)if(U>=0&&U<=E.width-W&&G>=0&&G<=E.height-N){j.bindFramebuffer(D.FRAMEBUFFER,St);const Bt=E.textures[Tt],Vt=Bt.format,Ut=Bt.type;if(!it.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ee),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt),D.readPixels(U,G,W,N,Pt.convert(Vt),Pt.convert(Ut),0);const fe=C!==null?st.get(C).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,fe);const Re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await pd(D,Re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(ee),D.deleteSync(Re),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,G=0){const W=Math.pow(2,-G),N=Math.floor(E.image.width*W),at=Math.floor(E.image.height*W),_t=U!==null?U.x:0,Tt=U!==null?U.y:0;dt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,_t,Tt,N,at),j.unbindTexture()};const hu=D.createFramebuffer(),uu=D.createFramebuffer();this.copyTextureToTexture=function(E,U,G=null,W=null,N=0,at=null){at===null&&(N!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=N,N=0):at=0);let _t,Tt,St,Bt,Vt,Ut,ee,fe,Re;const xe=E.isCompressedTexture?E.mipmaps[at]:E.image;if(G!==null)_t=G.max.x-G.min.x,Tt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,Bt=G.min.x,Vt=G.min.y,Ut=G.isBox3?G.min.z:0;else{const ln=Math.pow(2,-N);_t=Math.floor(xe.width*ln),Tt=Math.floor(xe.height*ln),E.isDataArrayTexture?St=xe.depth:E.isData3DTexture?St=Math.floor(xe.depth*ln):St=1,Bt=0,Vt=0,Ut=0}W!==null?(ee=W.x,fe=W.y,Re=W.z):(ee=0,fe=0,Re=0);const ge=Pt.convert(U.format),Ot=Pt.convert(U.type);let Ee;U.isData3DTexture?(dt.setTexture3D(U,0),Ee=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(dt.setTexture2DArray(U,0),Ee=D.TEXTURE_2D_ARRAY):(dt.setTexture2D(U,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=D.getParameter(D.UNPACK_ROW_LENGTH),tn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pi=D.getParameter(D.UNPACK_SKIP_PIXELS),en=D.getParameter(D.UNPACK_SKIP_ROWS),gs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Te=E.isDataArrayTexture||E.isData3DTexture,cn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const ln=st.get(E),qe=st.get(U),Qe=st.get(ln.__renderTarget),ho=st.get(qe.__renderTarget);j.bindFramebuffer(D.READ_FRAMEBUFFER,Qe.__webglFramebuffer),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,ho.__webglFramebuffer);for(let ci=0;ci<St;ci++)Te&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(E).__webglTexture,N,Ut+ci),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(U).__webglTexture,at,Re+ci)),D.blitFramebuffer(Bt,Vt,_t,Tt,ee,fe,_t,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||st.has(E)){const ln=st.get(E),qe=st.get(U);j.bindFramebuffer(D.READ_FRAMEBUFFER,hu),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,uu);for(let Qe=0;Qe<St;Qe++)Te?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,N,Ut+Qe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,N),cn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,at,Re+Qe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,at),N!==0?D.blitFramebuffer(Bt,Vt,_t,Tt,ee,fe,_t,Tt,D.COLOR_BUFFER_BIT,D.NEAREST):cn?D.copyTexSubImage3D(Ee,at,ee,fe,Re+Qe,Bt,Vt,_t,Tt):D.copyTexSubImage2D(Ee,at,ee,fe,Bt,Vt,_t,Tt);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,at,ee,fe,Re,_t,Tt,St,ge,Ot,xe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,at,ee,fe,Re,_t,Tt,St,ge,xe.data):D.texSubImage3D(Ee,at,ee,fe,Re,_t,Tt,St,ge,Ot,xe):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,ee,fe,_t,Tt,ge,Ot,xe.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,ee,fe,xe.width,xe.height,ge,xe.data):D.texSubImage2D(D.TEXTURE_2D,at,ee,fe,_t,Tt,ge,Ot,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pi),D.pixelStorei(D.UNPACK_SKIP_ROWS,en),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gs),at===0&&U.generateMipmaps&&D.generateMipmap(Ee),j.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,W=null,N=0){return es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,G,W,N)},this.initRenderTarget=function(E){st.get(E).__webglFramebuffer===void 0&&dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?dt.setTextureCube(E,0):E.isData3DTexture?dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?dt.setTexture2DArray(E,0):dt.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){L=0,w=0,C=null,j.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Mv=new pt("#9c7250");new pt("#5d4737");function Sv(i,t){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,256);let s=i>>>0;const r=()=>(s=s*1664525+1013904223>>>0)/4294967295;for(let a=0;a<3600;a++){const c=Math.floor(80+r()*90);n.fillStyle=`rgba(${c},${Math.floor(c*.78)},${Math.floor(c*.56)},${.025+r()*.065})`;const l=.5+r()*2.2;n.fillRect(r()*256,r()*256,l,l)}for(let a=0;a<9;a++){n.strokeStyle=`rgba(55,38,28,${.06+r()*.08})`,n.beginPath();const c=r()*256;n.moveTo(0,c),n.bezierCurveTo(70,c+r()*14,170,c-r()*15,256,c+r()*9),n.stroke()}const o=new no(e);return o.wrapS=o.wrapT=Os,o.repeat.set(2.4,2.4),o.colorSpace=Ke,o}function Ko(i=Mv,t=7,e=.94){return new Ft({color:"#ffffff",map:Sv(t,`#${i.getHexString()}`),roughness:e,metalness:.015})}function Zl(i,t=1){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle=`#${i.getHexString()}`,n.fillRect(0,0,256,256);const s=32;for(let o=0;o<256;o+=s)for(let a=0;a<256;a+=s){const c=(a/s+o/s+t)%3*5;n.fillStyle=`rgba(255,255,255,${.025+c/1e3})`,n.fillRect(a+2,o+2,s-4,s-4),n.strokeStyle="rgba(23,66,70,.24)",n.strokeRect(a+.5,o+.5,s-1,s-1)}const r=new no(e);return r.wrapS=r.wrapT=Os,r.repeat.set(3,3),r.colorSpace=Ke,new Ft({color:"#ffffff",map:r,roughness:.58,metalness:.06})}function yv(i="DESERT"){const t={DESERT:{floor:"#8a6549",wall:"#9c7250",cover:"#5d4737",grid:"#735642"},REFINERY:{floor:"#514b43",wall:"#77695a",cover:"#343b3c",grid:"#d29a47"},NIGHT_LAB:{floor:"#1e2930",wall:"#3e5059",cover:"#17252c",grid:"#54c8d2"},CANYON:{floor:"#7b4e38",wall:"#a86242",cover:"#49372f",grid:"#e6a45d"},FOUNDRY:{floor:"#302f2c",wall:"#53524d",cover:"#242b2a",grid:"#ff8348"},BLACKSITE:{floor:"#111a1d",wall:"#27353a",cover:"#10191d",grid:"#71e7d9"},DUST_FORTRESS:{floor:"#b99a70",wall:"#c6a77a",cover:"#6d5843",grid:"#e4c38f"},POOL_COMPLEX:{floor:"#d1ded2",wall:"#ecf0dd",cover:"#2e7d82",grid:"#43b8bd"}}[i],e=new Ae;e.name=`Setor 06 / ${i}`;const n=[],s=[],r=[],o=[],a=[],c=i==="POOL_COMPLEX"?Zl(new pt(t.floor),31):Ko(new pt(t.floor),31,i==="NIGHT_LAB"?.7:.94);c.map.repeat.set(18,15);const l=new q(new bi(108,92),c);l.rotation.x=-Math.PI/2,l.receiveShadow=!0,e.add(l),s.push(l);const u=new Of(108,54,t.grid,t.grid);u.position.y=.012,u.material.opacity=.1,u.material.transparent=!0,e.add(u);function h(w,C,S,M,R,F="wall",H=new pt(t.wall),V=Math.abs(Math.floor(w*11+C*17))){const z=new q(new zt(S,R,M),i==="POOL_COMPLEX"?Zl(H,V):Ko(H,V));z.position.set(w,R/2,C),z.castShadow=!0,z.receiveShadow=!0,e.add(z);const k=new _n().setFromObject(z);return n.push({box:k,kind:F}),s.push(z),F==="cover"&&r.push(k.clone()),z}function d(w,C,S,M,R,F,H=120){const V=new Ft({color:t.cover,roughness:.62,metalness:.34,emissive:i==="NIGHT_LAB"?"#082e37":"#000000",emissiveIntensity:.35}),z=new q(new zt(M,F,R),V);z.position.set(C,F/2,S),z.castShadow=z.receiveShadow=!0,z.userData.destructibleId=w,e.add(z);const k=new _n().setFromObject(z),$={box:k,kind:"cover",id:w};n.push($),r.push(k.clone()),s.push(z),a.push({id:w,mesh:z,collider:$,health:H,maxHealth:H,destroyed:!1});const B=new eo(new Rh(z.geometry),new Gn({color:i==="NIGHT_LAB"?"#5ae7f0":"#d7a667",transparent:!0,opacity:.52}));z.add(B)}function p(w,C,S,M){const R=new Ae,F=new Ft({color:"#d6a84d",roughness:.32,metalness:.78}),H=new ne(.055,.055,S,7);for(const k of[-.38,.38]){const $=new q(H,F);$.position.set(k,S/2,0),R.add($)}for(let k=.25;k<S;k+=.34){const $=new q(new ne(.035,.035,.76,7),F);$.rotation.z=Math.PI/2,$.position.y=k,R.add($)}R.position.set(w,0,C),e.add(R);const V=new A(w,S/2,C),z=new A(.7,S/2,.55);n.push({box:new _n(V.clone().sub(z),V.clone().add(z)),kind:"ladder"})}function g(w,C,S,M,R,F,H){const V=Av(S,M,R,F,H),z=new q(V,Ko(new pt("#a97e58"),Math.floor(w*9+C*13)));z.position.set(w,0,C),z.castShadow=z.receiveShadow=!0,e.add(z),s.push(z);const B={box:new _n(new A(w-S/2,0,C-M/2),new A(w+S/2,R,C+M/2)),kind:"ramp",ramp:{axis:F,direction:H,minHeight:0,maxHeight:R}};n.push(B),o.push(B)}h(0,-46,108,2,8),h(0,46,108,2,8),h(-54,0,2,92,8),h(54,0,2,92,8),h(-30,-20,3,34,5.5),h(-30,24,3,26,5.5),h(29,-24,3,26,5.5),h(29,19,3,34,5.5),h(-9,-8,24,3,5.2),h(8,14,23,3,5.2),h(-41,2,15,3,5),h(42,-2,15,3,5),h(-17,35,3,15,5),h(18,-35,3,15,5),h(-13,-15,4,4,.25,"step",new pt("#b38a63")),h(15,21,4,4,.25,"step",new pt("#b38a63")),g(-23,34,8,10,2.8,"z",-1),h(-23,39.5,8,5,2.8,"wall",new pt("#79563d")),g(23,-34,8,10,2.8,"z",1),h(23,-39.5,8,5,2.8,"wall",new pt("#79563d")),[[-42,-33,4,4,3],[-37,-33,4,4,5],[-18,-27,5,4,3],[-6,-30,5,5,4],[39,32,5,5,4],[44,27,4,4,3],[16,29,5,4,4],[4,30,4,4,3],[-18,4,5,5,4],[20,-7,5,5,4],[0,2,4,4,3],[-46,20,4,6,4],[46,-20,4,6,4],[-7,22,2.4,5,2.2],[8,-20,2.4,5,2.2]].forEach(([w,C,S,M,R])=>h(w,C,S,M,R,"cover",new pt(t.cover))),d("crate-a1",-34,-12,3.2,2.4,2.5),d("crate-a2",-11,29,3.6,2.2,2.1),d("crate-mid",6,4,3.4,2.4,2.8,160),d("crate-b1",34,12,3.2,2.4,2.5),d("crate-b2",12,-28,3.6,2.2,2.1),p(-27.35,39.5,2.8),p(27.35,-39.5,2.8),i==="REFINERY"&&Rv(e),i==="NIGHT_LAB"&&Cv(e),i==="CANYON"&&(h(-6,-38,13,5,6.5,"wall",new pt("#86482f")),h(9,36,16,4,5.5,"wall",new pt("#8f5136")),h(-39,16,7,7,6,"cover",new pt("#5b372a")),h(38,-17,8,6,5.5,"cover",new pt("#5b372a")),Pv(e)),i==="FOUNDRY"&&(h(-4,-27,14,3,4.5,"wall",new pt("#3c4140")),h(6,28,15,3,4.5,"wall",new pt("#3c4140")),g(-39,28,7,8,2.2,"z",1),g(39,-28,7,8,2.2,"z",-1),Lv(e)),i==="BLACKSITE"&&(h(-15,3,3,13,4.8,"wall",new pt("#1a282d")),h(16,-3,3,13,4.8,"wall",new pt("#1a282d")),h(-40,-3,10,2.2,3.8,"cover",new pt("#122126")),h(40,4,10,2.2,3.8,"cover",new pt("#122126")),Dv(e)),i==="DUST_FORTRESS"&&(h(-17,-29,18,3.2,5.2,"wall",new pt("#c9ac7f")),h(20,30,19,3.2,5.2,"wall",new pt("#c9ac7f")),h(-40,-10,8,3,3.8,"cover",new pt("#715a42")),h(40,11,8,3,3.8,"cover",new pt("#715a42")),h(-8,38,4,10,4.5,"wall",new pt("#b89466")),h(9,-38,4,10,4.5,"wall",new pt("#b89466")),Iv(e)),i==="POOL_COMPLEX"&&(h(-34,-4,3,22,3.4,"wall",new pt("#e8efe2")),h(34,5,3,22,3.4,"wall",new pt("#e8efe2")),h(-14,-31,16,2.2,1.35,"cover",new pt("#2f8d91")),h(15,32,16,2.2,1.35,"cover",new pt("#2f8d91")),h(-4,4,2.4,14,2.1,"cover",new pt("#3b9295")),h(7,-4,2.4,14,2.1,"cover",new pt("#3b9295")),Uv(e)),Zo(e,-43,-36,"A","#e6a44f"),Zo(e,43,35,"B","#5ad3d5"),Zo(e,0,3,"MID","#d2c6a5",3.2),bv(e),wv(e);const v=Jl(n,r),m=[[-45,-38,"A"],[-42,35,"TUNNEL"],[44,38,"B"],[45,-37,"LONG"],[-19,-39,"A"],[20,39,"B"],[-43,10,"TUNNEL"],[43,-12,"LONG"],[0,-40,"MID"],[0,40,"MID"]].map(([w,C,S])=>({position:new A(Number(w),0,Number(C)),zone:S})),f=[new A(-43,0,-28),new A(43,0,26),new A(-4,0,35),new A(4,0,-35)];for(const w of f){const C=Ev();C.position.copy(w),e.add(C)}const T=new A(0,0,39),y=Tv();y.position.copy(T),y.visible=!1,e.add(y);const _=(w,C)=>{let S=0;for(const M of o){if(!M.ramp||w<M.box.min.x||w>M.box.max.x||C<M.box.min.z||C>M.box.max.z)continue;const{axis:R,direction:F,minHeight:H,maxHeight:V}=M.ramp,z=R==="x"?M.box.min.x:M.box.min.z,k=R==="x"?M.box.max.x:M.box.max.z;let B=((R==="x"?w:C)-z)/(k-z);F<0&&(B=1-B),S=Math.max(S,de.lerp(H,V,de.clamp(B,0,1)))}return S},P=(w,C)=>i==="NIGHT_LAB"||i==="FOUNDRY"||i==="BLACKSITE"?"metal":i==="REFINERY"||i==="CANYON"||i==="DUST_FORTRESS"||i==="POOL_COMPLEX"||Math.abs(w)>31||Math.abs(C)>37?"stone":"sand",L=(w,C)=>{let S=w;for(;S&&!S.userData.destructibleId;)S=S.parent;const M=a.find(k=>k.id===S?.userData.destructibleId);if(!M||M.destroyed)return!1;M.health-=C;const R=M.mesh.material;if(R.emissive.set(M.health<M.maxHealth*.45?"#8b2c16":i==="NIGHT_LAB"?"#082e37":"#000000"),R.emissiveIntensity=M.health<M.maxHealth*.45?.9:.35,M.health>0)return!0;M.destroyed=!0,M.mesh.visible=!1;const F=n.indexOf(M.collider);F>=0&&n.splice(F,1);const H=s.indexOf(M.mesh);H>=0&&s.splice(H,1);const V=r.findIndex(k=>k.equals(M.collider.box));V>=0&&r.splice(V,1);const z=Jl(n,r);return v.splice(0,v.length,...z),!0};return{group:e,colliders:n,raycastMeshes:s,covers:r,navNodes:v,spawnPoints:m,ammoPoints:f,extractionPoint:T,extractionBeacon:y,objectivePoints:{A:new A(-43,0,-36),B:new A(43,0,35)},destructibles:a,variant:i,floorHeightAt:_,surfaceAt:P,damageDestructible:L}}function Ev(){const i=new Ae;i.name="ammo";const t=new Ft({color:"#28312e",roughness:.48,metalness:.68}),e=new Ft({color:"#111816",roughness:.3,metalness:.88}),n=new Ft({color:"#c78d36",emissive:"#6e3208",emissiveIntensity:.42,roughness:.38,metalness:.55}),s=new Ft({color:"#bafbf0",emissive:"#39d9c3",emissiveIntensity:2.2,roughness:.16,metalness:.45}),r=new q(new zt(1.55,.62,1),t);r.position.y=.34,r.castShadow=r.receiveShadow=!0,i.add(r);const o=new q(new zt(1.58,.18,1.03),e);o.position.set(0,1.04,-.38),o.rotation.x=-1.02,o.castShadow=!0,i.add(o);for(const h of[-.7,.7])for(const d of[-.42,.42]){const p=new q(new zt(.16,.72,.16),e);p.position.set(h,.39,d),i.add(p)}for(const h of[-.38,.38]){const d=new q(new zt(.1,.1,1.08),n);d.position.set(h,.79,0),i.add(d)}const a=new q(new zt(.34,.25,.08),n);a.position.set(0,.52,.54),i.add(a);const c=new q(new zt(.18,.06,.025),s);c.position.set(0,.56,.585),i.add(c);for(let h=0;h<5;h++){const d=new q(new ne(.026,.026,.3,8),new Ft({color:"#a77934",metalness:.9,roughness:.24}));d.rotation.x=Math.PI/2,d.position.set(-.42+h*.21,.86,0),i.add(d)}const l=ro("ARSENAL","#71e7d9",256);l.position.set(0,1.55,0),l.scale.set(1.65,.82,1),i.add(l);const u=new si("#48d8c7",5,4,2);return u.position.set(0,1,.25),i.add(u),i}function Tv(){const i=new Ae;i.name="extraction-beacon";const t=new Ft({color:"#17201f",roughness:.35,metalness:.82}),e=new Ft({color:"#9cfff0",emissive:"#24d9c3",emissiveIntensity:2.5,transparent:!0,opacity:.82,roughness:.12,metalness:.4}),n=new Ft({color:"#d7a744",emissive:"#8c4c08",emissiveIntensity:.75,roughness:.42,metalness:.58});for(const c of[4.2,3.35,2.45]){const l=new q(new ps(c-.09,c,64),new Oe({color:c===4.2?"#e4bb55":"#67ead7",transparent:!0,opacity:c===4.2?.62:.34,side:Fe,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.035,l.userData.extractionRing=!0,i.add(l)}for(let c=0;c<4;c++){const l=c*Math.PI/2,u=new Ae,h=new q(new ne(.34,.5,.22,8),t);h.position.y=.11,u.add(h);const d=new q(new ne(.08,.12,2.2,8),t);d.position.y=1.22,u.add(d);const p=new q(new ne(.18,.18,.28,8),n);p.position.y=2.35,u.add(p);const g=new q(new wi(.11,10,8),e);g.position.y=2.55,u.add(g),u.position.set(Math.cos(l)*3.65,0,Math.sin(l)*3.65),i.add(u)}const s=new q(new ne(.06,1.35,5.8,24,1,!0),new Oe({color:"#5cf1dc",transparent:!0,opacity:.15,side:Fe,depthWrite:!1}));s.position.y=2.9,s.userData.extractionColumn=!0,i.add(s);const r=new q(new ti(.46,.9,4),e);r.rotation.x=Math.PI,r.position.y=4.5,r.userData.extractionChevron=!0,i.add(r);const o=ro("EXTRAÇÃO","#c9fff6",512);o.position.set(0,6.2,0),o.scale.set(4.8,1.2,1),i.add(o);const a=new si("#55ead6",22,15,2);return a.position.y=3,i.add(a),i}function Av(i,t,e,n,s){const r=s>0?-1:1,o=-r,a=[[-i/2,0,r*t/2],[i/2,0,r*t/2],[-i/2,e,o*t/2],[i/2,e,o*t/2],[-i/2,0,o*t/2],[i/2,0,o*t/2]],c=[0,1,3,0,3,2,0,4,5,0,5,1,2,3,5,2,5,4,0,2,4,1,5,3],l=new Me;return l.setAttribute("position",new te(a.flat(),3)),l.setIndex(c),l.computeVertexNormals(),l.computeBoundingBox(),l}function Zo(i,t,e,n,s,r=5){const o=new q(new ps(r-.5,r,48),new Oe({color:s,transparent:!0,opacity:.42,side:Fe}));o.rotation.x=-Math.PI/2,o.position.set(t,.03,e),i.add(o);const a=new si(s,n==="MID"?14:24,17,2);a.position.set(t,3.5,e),i.add(a);const c=ro(n,s,n==="MID"?256:128);c.position.set(t,n==="MID"?4.2:7,e),c.scale.set(n==="MID"?1.7:3,n==="MID"?.85:3,1),n!=="MID"&&i.add(c)}function ro(i,t,e=256){const n=document.createElement("canvas");n.width=e,n.height=128;const s=n.getContext("2d");return s.fillStyle=t,s.font=`bold ${i.length>1?54:92}px Bahnschrift, monospace`,s.textAlign="center",s.fillText(i,e/2,92),new Ah(new vc({map:new no(n),transparent:!0,depthWrite:!1}))}function bv(i){for(const[t,e,n,s]of[[-22,8,"A  ←","#e6a44f"],[21,-12,"→  B","#5ad3d5"],[0,27,"MID  ↓","#d2c6a5"]]){const r=ro(n,s,256);r.position.set(t,2.6,e),r.scale.set(2.8,1.4,1),i.add(r)}}function wv(i){const t=new ne(.14,.2,4,7),e=new Ft({color:"#4c4035",roughness:.8,metalness:.2}),n=new bh(t,e,12),s=new le;[[-49,-41],[-43,-41],[-37,-41],[37,41],[43,41],[49,41],[-49,31],[-49,37],[49,-31],[49,-37],[-24,43],[24,-43]].forEach(([o,a],c)=>{s.makeTranslation(o,2,a),n.setMatrixAt(c,s)}),n.castShadow=!0,i.add(n)}function Rv(i){const t=new Ft({color:"#6c7780",roughness:.35,metalness:.82}),e=new Ft({color:"#251b13",emissive:"#e17a22",emissiveIntensity:1.8,roughness:.42,metalness:.55});for(const[n,s,r]of[[-47,-5,8],[47,7,10],[-35,41,6],[35,-41,6]]){const o=new q(new ne(2.2,2.2,r,18),t);o.position.set(n,r/2,s),o.castShadow=!0,i.add(o);const a=new q(new Ve(2.23,.09,8,24),e);a.rotation.x=Math.PI/2,a.position.set(n,r*.72,s),i.add(a)}}function Cv(i){const t=new Ft({color:"#12242b",emissive:"#19aab6",emissiveIntensity:1.35,roughness:.24,metalness:.58});for(const[e,n,s]of[[-52,-20,Math.PI/2],[-52,20,Math.PI/2],[52,-20,-Math.PI/2],[52,20,-Math.PI/2]]){const r=new q(new zt(3.2,.12,.6),t);r.rotation.z=s,r.position.set(e,3.3,n),i.add(r);const o=new si("#45eaf2",7,10,2);o.position.set(e,3.3,n),i.add(o)}}function Pv(i){const t=new xc(2.4,0),e=new Ft({color:"#9c5638",roughness:.97,metalness:0}),n=new bh(t,e,18),s=new le,r=new ds,o=new A;[[-48,-40],[-43,-26],[-49,-11],[-45,27],[-34,42],[-19,43],[48,40],[44,24],[49,8],[45,-29],[32,-42],[18,-43],[-24,-37],[-37,34],[28,38],[36,-34],[-47,7],[47,-8]].forEach(([c,l],u)=>{o.set(1+Math.random()*.8,1.3+Math.random()*1.8,1+Math.random()*.7),s.compose(new A(c,o.y*1.2,l),r,o),n.setMatrixAt(u,s)}),n.castShadow=!0,n.receiveShadow=!0,i.add(n)}function Lv(i){const t=new Ft({color:"#3a1b10",emissive:"#ff5b20",emissiveIntensity:2.8,roughness:.4,metalness:.42});for(const[e,n,s,r]of[[-44,0,4,18],[44,0,4,18],[0,-42,18,3],[0,42,18,3]]){const o=new q(new zt(s,.08,r),t);o.position.set(e,.05,n),i.add(o);const a=new si("#ff7037",18,14,2);a.position.set(e,1.5,n),i.add(a)}}function Dv(i){const t=new Ft({color:"#122328",emissive:"#27cabf",emissiveIntensity:1.45,roughness:.25,metalness:.7});for(let n=-36;n<=36;n+=12)for(const s of[-52,52]){const r=new q(new zt(.12,.18,5.5),t);r.position.set(s,3.4,n),i.add(r)}const e=new q(new yc(1.3,1),new Ft({color:"#d7ffff",emissive:"#26d6ce",emissiveIntensity:2,metalness:.5,roughness:.18,transparent:!0,opacity:.82}));e.position.set(0,4,3),i.add(e)}function Iv(i){const t=new Ft({color:"#c8aa7c",roughness:.94,metalness:.015}),e=new Ft({color:"#574638",roughness:.86}),n=new Ft({color:"#8f3f2b",roughness:.88,side:Fe});for(const[s,r,o]of[[-27,-6,0],[28,6,Math.PI],[0,-24,Math.PI/2],[0,25,-Math.PI/2]]){const a=new Ae;for(const u of[-1.45,1.45]){const h=new q(new zt(.65,4.4,.9),t);h.position.set(u,2.2,0),a.add(h)}const c=new q(new Ve(1.45,.48,8,24,Math.PI),t);c.rotation.z=Math.PI,c.position.y=3.75,a.add(c);const l=new q(new zt(3.6,.55,.95),t);l.position.y=4.25,a.add(l),a.position.set(s,0,r),a.rotation.y=o,i.add(a)}for(const[s,r,o]of[[-48,35,1.5],[48,-35,1.8],[-47,-18,1.2],[47,19,1.3]]){const a=new q(new ne(2.2*o,2.6*o,8*o,12),t);a.position.set(s,4*o,r),i.add(a);const c=new q(new wi(2.25*o,16,8,0,Math.PI*2,0,Math.PI/2),e);c.position.set(s,8*o,r),i.add(c)}for(const[s,r,o]of[[-20,18,0],[22,-18,Math.PI/2]]){const a=new q(new bi(11,5),n);a.rotation.set(-Math.PI/2+.12,o,.05),a.position.set(s,3.8,r),i.add(a)}}function Uv(i){const t=new Rf({color:"#32c8d0",emissive:"#087881",emissiveIntensity:.34,transparent:!0,opacity:.72,roughness:.12,metalness:.05,clearcoat:1,clearcoatRoughness:.08}),e=new Ft({color:"#f4f1da",roughness:.42,metalness:.08}),n=new Ft({color:"#157e91",roughness:.38,metalness:.25});for(const[s,r,o,a]of[[-20,-25,17,10],[21,25,17,10],[-20,25,12,8],[21,-25,12,8]]){const c=new q(new zt(o,.36,a),new Ft({color:"#1c7180",roughness:.52}));c.position.set(s,-.12,r),i.add(c);const l=new q(new bi(o-.7,a-.7),t);l.rotation.x=-Math.PI/2,l.position.set(s,.09,r),i.add(l);const u=new eo(new Rh(new zt(o,.28,a)),new Gn({color:"#efffe9"}));u.position.set(s,.14,r),i.add(u)}for(const[s,r,o]of[[-20,-18,0],[21,18,Math.PI],[-12,25,Math.PI/2],[13,-25,-Math.PI/2]]){const a=new q(new zt(1.15,.16,4.2),e);a.position.set(s,2.25,r),a.rotation.y=o,i.add(a);const c=new q(new zt(.28,2.2,.28),n);c.position.set(s,1.1,r),i.add(c)}for(const[s,r,o]of[[-45,-34,"#ffcf4c"],[45,34,"#ef5c55"],[-43,34,"#4fd3c4"],[43,-34,"#7a6ee6"]]){const a=new q(new ne(.05,.05,3.2,8),e);a.position.set(s,1.6,r),i.add(a);const c=new q(new ti(2.1,.65,18),new Ft({color:o,roughness:.7,side:Fe}));c.position.set(s,3.15,r),i.add(c)}}function jl(i,t){return i<-30&&t<-15?"A":i>30&&t>14?"B":i<-30?"TUNNEL":i>30?"LONG":"MID"}function Qa(i,t,e,n=1.2){return e.some(({box:s,kind:r})=>r!=="step"&&r!=="ramp"&&r!=="ladder"&&i>s.min.x-n&&i<s.max.x+n&&t>s.min.z-n&&t<s.max.z+n)}function Jl(i,t){const e=[],n=new Map,s=3.5;for(let r=0,o=-42;o<=42;o+=s,r++)for(let a=0,c=-49;c<=49;c+=s,a++){if(Qa(c,o,i))continue;const u=t.some(d=>d.distanceToPoint(new A(c,1,o))<3.5)?.15:jl(c,o)==="MID"?1:.62,h=e.length;e.push({id:h,pos:new A(c,0,o),links:[],exposure:u,zone:jl(c,o)}),n.set(`${a},${r}`,h)}for(const r of e){const o=Math.round((r.pos.x+49)/s),a=Math.round((r.pos.z+42)/s);for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const u=n.get(`${o+c},${a+l}`);u!==void 0&&!Qa(r.pos.x+c*s*.5,r.pos.z+l*s*.5,i,.72)&&r.links.push(u)}}return e}function Xh(i,t,e,n=.8){const s=i.distanceTo(t),r=Math.ceil(s/1.1);for(let o=1;o<r;o++){const a=o/r;if(Qa(de.lerp(i.x,t.x,a),de.lerp(i.z,t.z,a),e,n))return!1}return!0}function Nv(i,t,e,n=.35){const s=e.navNodes;if(!s.length)return[i.clone(),t.clone()];const r=m=>s.reduce((f,T)=>T.pos.distanceToSquared(m)<f.pos.distanceToSquared(m)?T:f,s[0]),o=r(i),a=r(t),c=[o.id],l=new Map,u=new Map([[o.id,0]]),h=new Map([[o.id,o.pos.distanceTo(a.pos)]]);for(;c.length;){c.sort((f,T)=>(h.get(f)??1/0)-(h.get(T)??1/0));const m=c.shift();if(m===a.id)break;for(const f of s[m].links){const T=s[f],y=s[m].pos.distanceTo(T.pos)*(1+T.exposure*n),_=(u.get(m)??1/0)+y;_<(u.get(f)??1/0)&&(l.set(f,m),u.set(f,_),h.set(f,_+T.pos.distanceTo(a.pos)),c.includes(f)||c.push(f))}}const d=[t.clone()];let p=a.id;for(;p!==o.id&&l.has(p);)d.push(s[p].pos.clone()),p=l.get(p);d.push(i.clone()),d.reverse();const g=[d[0]];let v=0;for(;v<d.length-1;){let m=d.length-1;for(;m>v+1&&!Xh(d[v],d[m],e.colliders);)m--;g.push(d[m]),v=m}return g}const jo=.0015;function Ov(i,t,e,n){const s=n.min.x-e,r=n.max.x+e,o=n.min.z-e,a=n.max.z+e;let c=-1/0,l=1/0;const u=new A;for(const h of["x","y"]){const d=h==="x"?i.x:i.y,p=h==="x"?t.x:t.y,g=h==="x"?s:o,v=h==="x"?r:a;if(Math.abs(p)<1e-9){if(d<g||d>v)return null;continue}let m=(g-d)/p,f=(v-d)/p,T=-Math.sign(p);if(m>f&&([m,f]=[f,m],T*=-1),m>c&&(c=m,u.set(h==="x"?T:0,0,h==="y"?T:0)),l=Math.min(l,f),c>l)return null}return c<0||c>1?null:{time:c,normal:u}}function Fv(i,t,e){if(!i.ramp||t<i.box.min.x||t>i.box.max.x||e<i.box.min.z||e>i.box.max.z)return null;const{axis:n,direction:s,minHeight:r,maxHeight:o}=i.ramp,a=n==="x"?i.box.min.x:i.box.min.z,c=n==="x"?i.box.max.x:i.box.max.z,l=n==="x"?t:e;let u=de.clamp((l-a)/Math.max(.001,c-a),0,1);return s<0&&(u=1-u),de.lerp(r,o,u)}class Bv{position=new A(0,0,34);velocity=new A;radius=.48;height=1.78;eyeHeight=1.62;grounded=!0;onRamp=!1;crouched=!1;sliding=!1;onLadder=!1;onFallDamage=t=>{};contactNormals=[];physicsSubsteps=0;stepHeight=.3;slideTimer=0;lastYaw=0;lastColliders=[];update(t,e,n,s,r,o=!1){this.lastYaw=n,this.lastColliders=r;const a=this.grounded,c=Math.max(0,-this.velocity.y);this.crouched=o,o&&s&&this.grounded&&!this.sliding&&Math.hypot(this.velocity.x,this.velocity.z)>4&&(this.sliding=!0,this.slideTimer=.72),this.sliding&&(this.slideTimer-=t,(this.slideTimer<=0||!o)&&(this.sliding=!1)),this.height=de.damp(this.height,o?.98:1.78,18,t),this.eyeHeight=de.damp(this.eyeHeight,o?.84:1.62,18,t);const l=new A(-Math.sin(n),0,-Math.cos(n)),u=new A(Math.cos(n),0,-Math.sin(n)),h=l.multiplyScalar(e.z).add(u.multiplyScalar(e.x));h.lengthSq()>1&&h.normalize(),h.multiplyScalar(this.sliding?9.2:o?3.25:s?8.2:5.4);const d=this.grounded?18:6;this.velocity.x=de.damp(this.velocity.x,h.x,d,t),this.velocity.z=de.damp(this.velocity.z,h.z,d,t);const p=r.find(f=>f.kind==="ladder"&&Jo(this.position.x,this.position.z,this.radius+.28,f.box)&&this.position.y<f.box.max.y+.4);this.onLadder=!!p&&Math.abs(e.z)>.1,this.onLadder?(this.velocity.y=e.z*3.8,this.position.y=de.clamp(this.position.y,0,p.box.max.y+.12)):this.grounded||(this.velocity.y-=19*t),this.contactNormals.length=0;const g=Math.hypot(this.velocity.x,this.velocity.z)*t;this.physicsSubsteps=Math.max(1,Math.ceil(g/(this.radius*.35)));const v=t/this.physicsSubsteps;for(let f=0;f<this.physicsSubsteps;f++)this.sweepSlice(v,r);const m=this.supportHeight(r,this.position.x,this.position.z);this.onRamp=m.ramp,this.grounded=this.position.y<=m.height+.025&&this.velocity.y<=0,this.grounded&&(this.position.y=m.height,this.velocity.y=0),!a&&this.grounded&&c>11&&this.onFallDamage((c-10.5)*4.2)}jump(){if(!this.grounded)return;const t=new A(-Math.sin(this.lastYaw),0,-Math.cos(this.lastYaw)),e=this.position.clone().addScaledVector(t,1),n=this.lastColliders.find(s=>s.kind==="cover"&&s.box.max.y-this.position.y<1.22&&s.box.max.y>this.position.y+.35&&Jo(e.x,e.z,.5,s.box));if(n){this.position.addScaledVector(t,1.65),this.position.y=n.box.max.y+.03,this.velocity.copy(t).multiplyScalar(4.8),this.velocity.y=2.2,this.grounded=!1;return}this.velocity.y=7,this.grounded=!1}teleport(t){this.position.copy(t),this.velocity.set(0,0,0)}sweepSlice(t,e){const n=this.position.clone(),s=this.velocity.clone().multiplyScalar(t);this.position.y+=s.y,this.position.y<0&&(this.position.y=0);const r=n.x+s.x,o=n.z+s.z,a=this.supportHeight(e,r,o);this.grounded&&a.height>this.position.y&&a.height-this.position.y<=this.stepHeight+jo&&(this.position.y=a.height);let c=new nt(s.x,s.z);for(let l=0;l<4&&c.lengthSq()>1e-10;l++){let u=null;for(const v of e){if(v.kind==="ramp"||v.kind==="ladder"||v.box.max.y<=this.position.y+jo||v.box.min.y>=this.position.y+this.height)continue;const m=Ov(new nt(this.position.x,this.position.z),c,this.radius,v.box);m&&(!u||m.time<u.time)&&(u=m)}if(!u){this.position.x+=c.x,this.position.z+=c.y;break}const h=Math.max(0,u.time-jo);this.position.x+=c.x*h,this.position.z+=c.y*h,this.contactNormals.push(u.normal.clone());const d=c.multiplyScalar(1-h),p=d.x*u.normal.x+d.y*u.normal.z;d.x-=u.normal.x*p,d.y-=u.normal.z*p;const g=this.velocity.x*u.normal.x+this.velocity.z*u.normal.z;g<0&&(this.velocity.x-=u.normal.x*g,this.velocity.z-=u.normal.z*g),c=d}}supportHeight(t,e,n){let s=0,r=!1;for(const o of t)if(o.kind!=="ladder"){if(o.kind==="ramp"){const a=Fv(o,e,n);a!==null&&a<=this.position.y+this.stepHeight+.12&&a>=s&&(s=a,r=!0);continue}o.box.max.y>s&&o.box.max.y<=this.position.y+this.stepHeight+.03&&Jo(e,n,this.radius*.72,o.box)&&(s=o.box.max.y,r=!1)}return{height:s,ramp:r}}}function Jo(i,t,e,n){const s=de.clamp(i,n.min.x,n.max.x),r=de.clamp(t,n.min.z,n.max.z);return(i-s)**2+(t-r)**2<e**2}class zv{context=null;master=null;listenerPosition=new A;volume=.75;muted=!1;async resume(){this.context||(this.context=new AudioContext,this.master=this.context.createGain(),this.applyGain(),this.master.connect(this.context.destination)),await this.context.resume()}setVolume(t){this.volume=de.clamp(t,0,1),this.applyGain()}setMuted(t){this.muted=t,this.applyGain()}applyGain(){this.master&&this.context&&this.master.gain.setTargetAtTime(this.muted?0:.36*this.volume,this.context.currentTime,.04)}setListener(t,e){if(this.listenerPosition.copy(t),!this.context)return;const n=this.context.listener,s=this.context.currentTime;n.positionX?.setTargetAtTime(t.x,s,.02),n.positionY?.setTargetAtTime(t.y,s,.02),n.positionZ?.setTargetAtTime(t.z,s,.02),n.forwardX?.setTargetAtTime(e.x,s,.02),n.forwardY?.setTargetAtTime(e.y,s,.02),n.forwardZ?.setTargetAtTime(e.z,s,.02)}tone(t,e,n="square",s=.15,r=0){if(!this.context||!this.master)return;const o=this.context.currentTime,a=this.context.createOscillator(),c=this.context.createGain();a.type=n,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),o+e),c.gain.setValueAtTime(s,o),c.gain.exponentialRampToValueAtTime(.001,o+e),a.connect(c).connect(this.master),a.start(o),a.stop(o+e)}noise(t,e=.12,n=1200){if(!this.context||!this.master)return;const s=Math.ceil(this.context.sampleRate*t),r=this.context.createBuffer(1,s,this.context.sampleRate),o=r.getChannelData(0);for(let u=0;u<s;u++)o[u]=(Math.random()*2-1)*(1-u/s);const a=this.context.createBufferSource(),c=this.context.createBiquadFilter(),l=this.context.createGain();a.buffer=r,c.type="lowpass",c.frequency.value=n,l.gain.value=e,a.connect(c).connect(l).connect(this.master),a.start()}shot(t){t==="hitscan"?(this.noise(.07,.28,1900),this.tone(92,.08,"sawtooth",.22,-50),this.tone(1450,.025,"square",.035,-700)):t==="shotgun"?(this.noise(.18,.38,900),this.tone(65,.16,"square",.2,-30),this.tone(190,.045,"triangle",.12,-80)):t==="sniper"?(this.noise(.2,.42,1350),this.tone(58,.28,"sawtooth",.3,-24),this.tone(980,.055,"square",.08,-620)):(this.tone(420,.24,"sine",.16,-310),this.tone(860,.12,"triangle",.06,-300),this.noise(.12,.12,2500))}impact(){this.tone(820,.035,"square",.05,-500)}reload(t){this.tone(t==="mag"?260:t==="start"?180:340,.06,"square",.07,-40)}step(t="sand"){const e={sand:[.055,.035,230],stone:[.04,.045,520],metal:[.035,.052,1100]}[t];this.noise(e[0],e[1],e[2]),t==="metal"&&this.tone(760,.025,"square",.018,-360)}upgrade(){this.tone(340,.08,"sine",.08,280),setTimeout(()=>this.tone(620,.11,"triangle",.07,260),75)}boss(){this.tone(54,.7,"sawtooth",.18,-18),this.noise(.65,.2,240)}explosion(){this.noise(.5,.42,420),this.tone(70,.36,"sawtooth",.22,-35)}droneShot(t){this.spatialTone(t,610,.08,"sawtooth",.16,-290)}droneAlert(t,e){const n=e==="COMBATE"?880:e==="SUSPEITA"?520:e==="RECUO"?260:390;this.spatialTone(t,n,.12,e==="COMBATE"?"square":"sine",.075,e==="COMBATE"?-420:120)}shell(){this.tone(1700,.025,"square",.025,-900),setTimeout(()=>this.tone(520,.035,"square",.018,-180),55)}charge(t){this.tone(280+t*520,.035,"sine",.025,80)}pickup(){this.tone(390,.08,"sine",.1,320)}createDroneHum(t){if(!this.context||!this.master)return null;const e=this.context,n=e.createOscillator(),s=e.createGain(),r=e.createPanner();return n.type="sawtooth",n.frequency.value=67,s.gain.value=.035,r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=3,r.maxDistance=42,r.rolloffFactor=1.3,r.positionX.value=t.x,r.positionY.value=t.y,r.positionZ.value=t.z,n.connect(s).connect(r).connect(this.master),n.start(),{update:o=>{const a=e.currentTime;r.positionX.setTargetAtTime(o.x,a,.03),r.positionY.setTargetAtTime(o.y,a,.03),r.positionZ.setTargetAtTime(o.z,a,.03)},stop:()=>{s.gain.setTargetAtTime(1e-4,e.currentTime,.04),n.stop(e.currentTime+.2)}}}spatialTone(t,e,n,s,r,o){if(!this.context||!this.master)return;const a=this.context.currentTime,c=this.context.createOscillator(),l=this.context.createGain(),u=this.context.createPanner();c.type=s,c.frequency.setValueAtTime(e,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,e+o),a+n),l.gain.setValueAtTime(r,a),l.gain.exponentialRampToValueAtTime(.001,a+n),u.panningModel="HRTF",u.distanceModel="inverse",u.refDistance=2,u.maxDistance=45,u.positionX.value=t.x,u.positionY.value=t.y,u.positionZ.value=t.z,c.connect(l).connect(u).connect(this.master),c.start(a),c.stop(a+n)}}const qh={SCOUT:{type:"SCOUT",health:62,speed:4.6,damage:5,preferredRange:10,fireInterval:.62,visionRange:28,color:"#79e4db",scale:.82},ASSAULT:{type:"ASSAULT",health:100,speed:3.45,damage:8,preferredRange:14,fireInterval:.78,visionRange:34,color:"#f0b857",scale:1},HEAVY:{type:"HEAVY",health:230,speed:2.15,damage:14,preferredRange:12,fireInterval:1.05,visionRange:31,color:"#ff765f",scale:1.32},SNIPER:{type:"SNIPER",health:76,speed:2.8,damage:24,preferredRange:28,fireInterval:2.4,visionRange:48,color:"#d4a7ff",scale:.9},SUPPORT:{type:"SUPPORT",health:92,speed:3.1,damage:4,preferredRange:18,fireInterval:1.1,visionRange:34,color:"#87e188",scale:1.02},KAMIKAZE:{type:"KAMIKAZE",health:48,speed:6.4,damage:34,preferredRange:1.2,fireInterval:9,visionRange:38,color:"#ff7a2e",scale:.72},SHIELD:{type:"SHIELD",health:165,speed:2.7,damage:7,preferredRange:9,fireInterval:1,visionRange:33,color:"#d9f7ff",scale:1.12},JAMMER:{type:"JAMMER",health:84,speed:3.3,damage:5,preferredRange:17,fireInterval:1.25,visionRange:36,color:"#ff4fd8",scale:.95},CLOAKED:{type:"CLOAKED",health:70,speed:4.2,damage:11,preferredRange:8,fireInterval:.9,visionRange:35,color:"#6de9ff",scale:.86},ENGINEER:{type:"ENGINEER",health:108,speed:2.9,damage:6,preferredRange:20,fireInterval:1.3,visionRange:36,color:"#ffd55d",scale:1.02},TURRET:{type:"TURRET",health:74,speed:0,damage:7,preferredRange:22,fireInterval:.68,visionRange:42,color:"#ffb24a",scale:.82},TRACKER:{type:"TRACKER",health:88,speed:6.1,damage:18,preferredRange:1.5,fireInterval:1.35,visionRange:42,color:"#ff8b4f",scale:.78},BULWARK:{type:"BULWARK",health:320,speed:1.8,damage:12,preferredRange:10,fireInterval:1.2,visionRange:34,color:"#9fe8ff",scale:1.48},MORTAR:{type:"MORTAR",health:145,speed:2.1,damage:19,preferredRange:30,fireInterval:2.7,visionRange:52,color:"#ffcf67",scale:1.15},WISP:{type:"WISP",health:64,speed:4.8,damage:3,preferredRange:22,fireInterval:1.45,visionRange:40,color:"#8cffb2",scale:.68},RATBOT:{type:"RATBOT",health:38,speed:7.2,damage:12,preferredRange:.7,fireInterval:.85,visionRange:30,color:"#ffb24e",scale:.56},VAPOR:{type:"VAPOR",health:118,speed:4.1,damage:17,preferredRange:24,fireInterval:1.75,visionRange:50,color:"#6df2ff",scale:1.08},COMMANDER:{type:"COMMANDER",health:1150,speed:1.75,damage:19,preferredRange:16,fireInterval:.76,visionRange:55,color:"#ffffff",scale:2.25}},Qo={PATRULHA:"#67d8d5",SUSPEITA:"#f0b857",COMBATE:"#ff6d59",BUSCA:"#d4a7ff",RECUO:"#87e188"};let Hv=1;class kv{constructor(t,e,n,s,r){this.type=e,this.level=n,this.audio=s,this.director=r,this.spec=qh[e],this.hoverHeight=e==="RATBOT"?.34:e==="VAPOR"?2.35:1.65,this.health=this.spec.health;const o={HEAVY:"#6b2924",SNIPER:"#3b2d50",SCOUT:"#28575c",ASSAULT:"#6b4a1e",SUPPORT:"#28543a",KAMIKAZE:"#7a2411",SHIELD:"#74858b",JAMMER:"#502044",CLOAKED:"#244653",ENGINEER:"#6a551b",TURRET:"#493822",TRACKER:"#672b1f",BULWARK:"#294a56",MORTAR:"#554328",WISP:"#1f523b",RATBOT:"#4b3427",VAPOR:"#174a54",COMMANDER:"#090d10"},a=new Ft({color:o[e]??"#465553",roughness:e==="COMMANDER"?.18:.32,metalness:.78,transparent:e==="CLOAKED",opacity:e==="CLOAKED"?.28:1});this.eyeMaterial=new Ft({color:"#15201f",emissive:this.spec.color,emissiveIntensity:2.5});const c=new q(new wi(.55,12,8),a);c.scale.y=.65,c.userData.damageZone="BODY",this.damageZones.push(c),this.group.add(c);const l=new q(new Ve(.58,.09,6,14),a);l.rotation.x=Math.PI/2,this.group.add(l);const u=new q(new zt(e==="SNIPER"?.22:.42,.12,.08),this.eyeMaterial);u.position.set(0,.02,-.53),u.userData.damageZone="CORE",this.damageZones.push(u),this.group.add(u);for(const d of[-.78,.78]){const p=new q(new ne(.34,.34,.05,12),a);p.rotation.x=Math.PI/2,p.position.set(d,.05,0),p.userData.damageZone=d<0?"ROTOR_LEFT":"ROTOR_RIGHT",this.damageZones.push(p),this.group.add(p)}if(e==="HEAVY")for(const d of[-.52,.52]){const p=new q(new zt(.38,.42,.5),a);p.position.set(d,.05,.1),this.group.add(p)}if(e==="SUPPORT"||e==="WISP"){const d=new q(new Ve(e==="WISP"?.92:.75,.025,5,20),new Oe({color:this.spec.color}));d.rotation.x=Math.PI/2,d.position.y=.34,this.group.add(d)}if(e==="SHIELD"||e==="BULWARK"||e==="COMMANDER"){const d=e==="COMMANDER"?1.05:e==="BULWARK"?1.12:.86,p=new q(new ne(d,d,.07,24),new Ft({color:"#aeeeff",emissive:"#54d9ff",emissiveIntensity:1.1,transparent:!0,opacity:e==="BULWARK"?.56:.42,roughness:.16,metalness:.65}));p.rotation.x=Math.PI/2,p.position.set(0,0,-.9),p.userData.damageZone="BODY",this.damageZones.push(p),this.group.add(p)}if(e==="JAMMER")for(const d of[.72,.98]){const p=new q(new Ve(d,.025,6,28),new Oe({color:"#ff4fd8",transparent:!0,opacity:.8}));p.rotation.x=Math.PI/2,this.group.add(p)}if(e==="KAMIKAZE")for(let d=0;d<6;d++){const p=new q(new ti(.11,.65,6),new Ft({color:"#ff6b20",emissive:"#8b1b08",emissiveIntensity:1.8}));p.rotation.z=Math.PI/2,p.rotation.y=d*Math.PI/3,p.position.set(Math.cos(d*Math.PI/3)*.65,0,Math.sin(d*Math.PI/3)*.65),this.group.add(p)}if(e==="ENGINEER"){const d=new q(new zt(.15,.15,.9),new Ft({color:"#ffd55d",metalness:.65,roughness:.28}));d.position.set(.52,-.2,.2),d.rotation.x=.7,d.userData.damageZone="WEAPON",this.damageZones.push(d),this.group.add(d)}if(e==="TURRET"){const d=new q(new ne(.07,.11,1.1,8),new Ft({color:"#171b1d",metalness:.9,roughness:.22}));d.rotation.x=Math.PI/2,d.position.set(0,0,-.65),d.userData.damageZone="WEAPON",this.damageZones.push(d),this.group.add(d)}if(e==="TRACKER")for(const d of[-1,1]){const p=new q(new ti(.16,.95,5),a);p.rotation.z=d*Math.PI/2,p.position.set(d*.76,-.16,.08),this.group.add(p)}if(e==="MORTAR"){const d=new q(new ne(.14,.2,1.05,10),a);d.rotation.x=-.45,d.position.set(0,.42,.2),d.userData.damageZone="WEAPON",this.damageZones.push(d),this.group.add(d)}if(e==="RATBOT"){const d=new q(new zt(1.35,.5,.72),a);d.position.set(0,-.25,.18),this.group.add(d);const p=new q(new ti(.32,.72,6),a);p.rotation.x=-Math.PI/2,p.position.set(0,-.22,-.72),this.group.add(p);for(const v of[-1,1])for(const m of[-.28,.38]){const f=new q(new ne(.055,.075,.58,6),a);f.rotation.z=v*.9,f.position.set(v*.58,-.5,m),this.group.add(f)}const g=new q(new Ve(.72,.055,6,18,Math.PI*1.15),new Ft({color:"#9b6a48",metalness:.72,roughness:.3}));g.rotation.x=Math.PI/2,g.position.set(0,-.25,.72),this.group.add(g)}if(e==="VAPOR"){const d=new Ft({color:"#2b7781",emissive:"#0c5862",emissiveIntensity:.72,metalness:.8,roughness:.22});for(const g of[-1,1]){const v=new q(new zt(1.2,.08,.58),d);v.position.set(g*.95,.08,.12),v.rotation.y=g*.24,this.group.add(v);const m=new q(new Ve(.34,.06,7,18),new Oe({color:"#6df2ff"}));m.rotation.x=Math.PI/2,m.position.set(g*1.05,.13,.08),this.group.add(m)}const p=new q(new ne(.12,.2,.78,8),d);p.rotation.x=Math.PI/2,p.position.set(0,-.18,-.72),p.userData.damageZone="WEAPON",this.damageZones.push(p),this.group.add(p)}if(e==="COMMANDER")for(const d of[.72,1.08,1.38]){const p=new q(new Ve(d,.035,8,36),new Oe({color:"#ffffff",transparent:!0,opacity:.65}));p.rotation.x=Math.PI/2,this.group.add(p)}this.group.traverse(d=>{d instanceof q&&(d.castShadow=!0,d.receiveShadow=!0)}),this.hitbox=new q(new zt(2,1.4,1.6),new Oe({visible:!1})),this.group.add(this.hitbox),this.weakpoint=new q(new zt(.55,.3,.18),new Oe({visible:!1})),this.weakpoint.position.set(0,.12,-.68),this.group.add(this.weakpoint),this.weakpoint.userData.damageZone="CORE";for(const d of[...this.damageZones,this.hitbox,this.weakpoint])d.userData.drone=this;this.stateLight=new si(Qo.PATRULHA,3.4,4,2),this.stateLight.position.set(0,.2,-.55),this.stateLight.visible=!this.director.lowPower,this.group.add(this.stateLight),this.debugLabel=Gv(this.labelText(),Qo.PATRULHA),this.debugLabel.position.set(0,1.25,0),this.debugLabel.scale.set(2.5,.55,1),this.debugLabel.visible=!1,this.group.add(this.debugLabel),this.group.position.copy(t).setY(n.floorHeightAt(t.x,t.z)+this.hoverHeight),this.group.scale.setScalar(this.spec.scale),this.group.name=`Drone ${this.id} ${e}`,this.hum=this.director.lowPower||e==="RATBOT"?null:this.audio.createDroneHum(this.group.position);const h=n.spawnPoints.map(d=>d.position);this.patrol=[t.clone(),h[this.id*3%h.length].clone(),h[(this.id*5+1)%h.length].clone()],this.setPath(this.patrol[1])}type;level;audio;director;id=Hv++;group=new Ae;hitbox;weakpoint;damageZones=[];spec;alive=!0;health;state="PATRULHA";lastKnown=null;path=[];pathIndex=0;stateTime=0;lastSeen=0;reaction=0;lastFire=0;contactTime=0;frontAttacker=!1;visionVisible=!1;debugLabel;patrol=[];patrolIndex=0;investigateUntil=0;searchAngle=0;lastPathAt=-99;supportTimer=0;abilityTimer=5;bossPhase=1;rotorDamage=0;weaponDamage=0;lodAccumulator=0;stunTimer=0;hoverHeight=1.65;eyeMaterial;stateLight;hum;update(t,e,n,s){if(!this.alive)return;if(this.stunTimer>0){this.stunTimer=Math.max(0,this.stunTimer-t),this.eyeMaterial.emissiveIntensity=1+Math.sin(e*35)*.8,this.group.position.y=this.level.floorHeightAt(this.group.position.x,this.group.position.z)+this.hoverHeight;return}if(this.eyeMaterial.emissiveIntensity=2.5,this.group.position.distanceTo(n)>45&&this.state==="PATRULHA"){if(this.lodAccumulator+=t,this.lodAccumulator<1/15)return;t=this.lodAccumulator,this.lodAccumulator=0}this.stateTime+=t;const o=n.clone().sub(this.group.position),a=o.length(),l=new A(0,0,-1).applyQuaternion(this.group.quaternion).angleTo(o.clone().setY(0)),u=this.type==="COMMANDER"||this.type==="TURRET"?179:this.type==="SNIPER"?38:this.type==="RATBOT"?115:this.type==="VAPOR"?72:this.type==="KAMIKAZE"?78:52,h=a<this.spec.visionRange&&l<de.degToRad(u)&&this.director.lineOfSight(this.group.position,n);this.visionVisible=h,h?(this.lastKnown=n.clone(),this.lastSeen=e,this.contactTime+=t,this.state!=="COMBATE"&&(this.setState("COMBATE"),this.reaction=.38+Math.random()*.55+(this.type==="HEAVY"?.22:0)),this.director.shareKnowledge(this)):this.contactTime=Math.max(0,this.contactTime-t*.5);const d=s.filter(g=>e-g.time<1.2&&this.group.position.distanceTo(g.position)<g.radius).sort((g,v)=>v.time-g.time)[0];switch(d&&!h&&(this.state==="PATRULHA"||this.state==="BUSCA")&&(this.lastKnown=d.position.clone(),this.setState("SUSPEITA"),this.investigateUntil=e+5,this.setPath(d.position)),this.health<this.spec.health*.28&&this.state!=="RECUO"&&this.type!=="HEAVY"&&this.type!=="RATBOT"&&this.retreat(n),this.state){case"PATRULHA":this.followPath(t,this.spec.speed*.7)&&(this.patrolIndex=(this.patrolIndex+1)%this.patrol.length,this.setPath(this.patrol[this.patrolIndex]));break;case"SUSPEITA":(this.followPath(t,this.spec.speed*.9)||e>this.investigateUntil)&&(this.setState("BUSCA"),this.stateTime=0);break;case"COMBATE":this.combat(t,e,n,a,h);break;case"BUSCA":this.path.length&&this.followPath(t,this.spec.speed*.85)?(this.path=[],this.stateTime=0):this.path.length||(this.searchAngle+=t*.8,this.group.rotation.y+=t*(this.id%2?1:-1)*.65,this.stateTime>6&&this.setState("PATRULHA"));break;case"RECUO":this.followPath(t,this.spec.speed*1.05)&&this.stateTime>5&&this.setState("BUSCA");break}(this.type==="SUPPORT"||this.type==="WISP")&&this.supportAllies(t),this.type==="JAMMER"&&this.director.onJammer(this.group.position,a<19),this.type==="ENGINEER"&&this.engineerAbility(t),this.type==="COMMANDER"&&this.commanderAbility(t,n);const p=this.level.floorHeightAt(this.group.position.x,this.group.position.z);this.group.position.y=p+this.hoverHeight+(this.type==="RATBOT"?Math.abs(Math.sin(e*9+this.id))*.025:Math.sin(e*2.4+this.id)*.12),this.hum?.update(this.group.position)}receiveIntel(t){this.alive&&(this.lastKnown=t.clone(),this.state==="PATRULHA"&&(this.setState("SUSPEITA"),this.setPath(t)))}damage(t,e,n=!1,s="BODY"){if(!this.alive)return!1;const r=new A(0,0,-1).applyQuaternion(this.group.quaternion),o=e.clone().sub(this.group.position).setY(0).normalize();return(this.type==="SHIELD"||this.type==="BULWARK"||this.type==="COMMANDER")&&s!=="CORE"&&r.dot(o)>.05&&(t*=.16),s==="CORE"&&(t*=1.65),(s==="ROTOR_LEFT"||s==="ROTOR_RIGHT")&&(this.rotorDamage=Math.min(.58,this.rotorDamage+.14)),s==="WEAPON"&&(this.weaponDamage=Math.min(.7,this.weaponDamage+.22)),this.health-=t*(n&&s!=="CORE"?1.65:1),this.lastKnown=e.clone(),this.state==="PATRULHA"&&this.setState("SUSPEITA"),this.health<=0?(this.alive=!1,this.group.visible=!1,this.hum?.stop(),this.director.onDroneKilled(this),!0):!1}heal(t){this.alive&&(this.health=Math.min(this.spec.health,this.health+t))}stun(t){this.alive&&(this.stunTimer=Math.max(this.stunTimer,t))}dispose(){this.hum?.stop()}setDebugVisible(t){this.debugLabel.visible=t}forceNextState(){const t=["PATRULHA","SUSPEITA","COMBATE","BUSCA","RECUO"];this.setState(t[(t.indexOf(this.state)+1)%t.length])}combat(t,e,n,s,r){if(!r&&e-this.lastSeen>1.15){this.setState("BUSCA"),this.lastKnown&&this.setPath(this.lastKnown);return}if(!r)return;this.turnToward(n,t,this.type==="HEAVY"?2.4:3.8);const o=this.frontAttacker?this.spec.preferredRange:this.spec.preferredRange+4;if(this.type==="KAMIKAZE"&&s<2.35){this.director.onKamikazeBlast(this.group.position,this.spec.damage),this.damage(1/0,n);return}if((this.type==="TRACKER"||this.type==="RATBOT")&&s<(this.type==="RATBOT"?1.45:2.2)&&e-this.lastFire>this.spec.fireInterval){this.lastFire=e,this.director.onPlayerDamage(this.spec.damage*this.director.damageScale,this.group.position);return}if(Math.abs(s-o)>2&&this.type!=="TURRET"){const a=n.clone().sub(this.group.position).normalize(),c=n.clone().addScaledVector(a,-o);this.frontAttacker||c.add(new A(-a.z,0,a.x).multiplyScalar(this.id%2?8:-8)),this.setPathThrottled(c,e),this.followPath(t,this.spec.speed*(1-this.rotorDamage))}this.stateTime>this.reaction&&e-this.lastFire>Math.max(this.spec.fireInterval,this.spec.fireInterval+.35-this.contactTime*.06)&&this.shoot(e,n)}shoot(t,e){this.lastFire=t,this.audio.droneShot(this.group.position);const n=this.type==="SNIPER"?.65:this.type==="HEAVY"?1.35:1.05,s=de.lerp(n,.12,de.clamp(this.contactTime/5,0,1))+this.weaponDamage,r=new A((Math.random()-.5)*s,(Math.random()-.5)*s*.4,(Math.random()-.5)*s),o=e.clone().add(r),a=o.distanceTo(e)<.55;a&&this.director.onPlayerDamage(this.spec.damage*this.director.damageScale*(.82+Math.random()*.36),this.group.position),this.director.spawnEnemyTracer(this.group.position,o,a)}supportAllies(t){if(this.supportTimer-=t,this.supportTimer>0)return;this.supportTimer=2.8;const e=this.director.drones.filter(n=>n.alive&&n!==this&&n.group.position.distanceTo(this.group.position)<8&&n.health<n.spec.health).sort((n,s)=>n.health/n.spec.health-s.health/s.spec.health)[0];e&&(e.heal(10),this.director.onSupportPulse(this.group.position,e.group.position))}engineerAbility(t){if(this.abilityTimer-=t,this.abilityTimer>0||this.state!=="COMBATE")return;this.abilityTimer=10,this.director.drones.filter(n=>n.alive&&n.type==="TURRET"&&n.group.position.distanceTo(this.group.position)<16).length<2&&this.director.onEngineerDeploy(this.group.position.clone())}commanderAbility(t,e){const n=this.health<this.spec.health*.34?3:this.health<this.spec.health*.67?2:1;n!==this.bossPhase&&(this.bossPhase=n,this.director.onBossPhase(this,n),this.director.onCommanderSummon(this.group.position.clone(),n)),this.abilityTimer-=t,!(this.abilityTimer>0||this.state!=="COMBATE")&&(this.abilityTimer=Math.max(3.2,6.4-this.bossPhase),this.director.onBossAttack(this.group.position.clone(),e.clone(),this.bossPhase))}retreat(t){this.setState("RECUO");let e=null,n=-1/0;for(const s of this.level.covers){const r=s.getCenter(new A),a=(!this.director.lineOfSight(r.clone().setY(1.4),t)?45:0)+r.distanceTo(t)-this.group.position.distanceTo(r)*.55;a>n&&Xh(this.group.position,r,this.level.colliders,1)&&(n=a,e=r)}e&&this.setPath(e,1.2)}setState(t){if(this.state===t)return;const e=this.state;this.state=t,this.stateTime=0;const n=Qo[t];this.eyeMaterial.emissive.set(n),this.stateLight.color.set(n),this.stateLight.intensity=t==="COMBATE"?6:3.4,Yh(this.debugLabel,this.labelText(),n),this.audio.droneAlert(this.group.position,t),this.director.recordState(this,t),this.director.onStateChange(this,e,t)}labelText(){return`D-${String(this.id).padStart(2,"0")} ${this.type} · ${this.state}`}setPath(t,e=this.state==="RECUO"?1.5:.35){this.path=Nv(this.group.position,t,this.level,e),this.pathIndex=1}setPathThrottled(t,e){e-this.lastPathAt<.85||(this.lastPathAt=e,this.setPath(t))}followPath(t,e){if(this.pathIndex>=this.path.length)return!0;const n=this.path[this.pathIndex].clone().setY(this.group.position.y),s=n.sub(this.group.position);if(s.y=0,s.length()<.65)return this.pathIndex++,this.pathIndex>=this.path.length;s.normalize();const r=this.director.steeringFor(this).multiplyScalar(1.25).add(s).normalize();return this.group.position.addScaledVector(r,e*t),this.turnToward(this.group.position.clone().add(r),t,5),!1}turnToward(t,e,n){const s=t.clone().sub(this.group.position),r=Math.atan2(-s.x,-s.z),o=de.euclideanModulo(r-this.group.rotation.y+Math.PI,Math.PI*2)-Math.PI;this.group.rotation.y+=o*Math.min(1,e*n)}}class Vv{constructor(t,e,n){this.scene=t,this.level=e,this.audio=n}scene;level;audio;drones=[];spawnedThisWave=0;stateHistory=[];onPlayerDamage=(t,e)=>{};onDroneKilled=t=>{};onStateChange=(t,e,n)=>{};onSupportPulse=(t,e)=>{};onJammer=(t,e)=>{};onKamikazeBlast=(t,e)=>{};onEngineerDeploy=t=>{};onBossPhase=(t,e)=>{};onCommanderSummon=(t,e)=>{};onBossAttack=(t,e,n)=>{};spawnEnemyTracer=(t,e,n)=>{};damageScale=1;raycaster=new zr;lowPower=!1;setDifficulty(t){this.damageScale=t==="RECRUIT"?.72:t==="NIGHTMARE"?1.38:1}spawn(t,e="ASSAULT"){const n=new kv(t,e,this.level,this.audio,this);return this.drones.push(n),this.scene.add(n.group),n}update(t,e,n,s){this.drones.filter(o=>o.alive&&o.state==="COMBATE").sort((o,a)=>o.group.position.distanceTo(n)-a.group.position.distanceTo(n)).forEach((o,a)=>o.frontAttacker=a<2);for(const o of this.drones)o.alive&&(o.group.visible=o.group.position.distanceTo(n)<70||o.state!=="PATRULHA"),o.update(t,e,n,s)}lineOfSight(t,e){const n=t.clone(),s=e.clone().sub(n),r=s.length();return this.raycaster.set(n,s.normalize()),this.raycaster.far=r,this.raycaster.intersectObjects(this.level.raycastMeshes,!1).length===0}shareKnowledge(t){if(t.lastKnown)for(const e of this.drones)e===t||!e.alive||e.group.position.distanceTo(t.group.position)>18||e.receiveIntel(t.lastKnown)}steeringFor(t){const e=new A;for(const n of this.drones){if(n===t||!n.alive)continue;const s=t.group.position.clone().sub(n.group.position);s.y=0;const r=s.length(),o=(t.spec.scale+n.spec.scale)*1.25;r>0&&r<o&&e.addScaledVector(s.normalize(),(o-r)/o)}return e}destroyAll(){for(const t of this.drones)t.alive&&t.damage(1/0,t.group.position)}forceStates(){for(const t of this.drones)t.alive&&t.forceNextState()}recordState(t,e){this.stateHistory.unshift(`${new Date().toLocaleTimeString("pt-BR",{hour12:!1})} D-${String(t.id).padStart(2,"0")} → ${e}`),this.stateHistory.length=Math.min(this.stateHistory.length,12)}setDebugVisible(t){for(const e of this.drones)e.setDebugVisible(t)}clear(){for(const t of this.drones)t.dispose(),this.scene.remove(t.group);this.drones=[]}}function Gv(i,t){const e=document.createElement("canvas");e.width=512,e.height=96;const n=new no(e),s=new Ah(new vc({map:n,transparent:!0,depthWrite:!1}));return Yh(s,i,t),s}function Yh(i,t,e){const n=i.material.map,s=n.image,r=s.getContext("2d");r.clearRect(0,0,s.width,s.height),r.fillStyle="rgba(13,18,16,.82)",r.fillRect(0,12,s.width,68),r.strokeStyle=e,r.strokeRect(1,13,s.width-2,66),r.fillStyle=e,r.font="bold 27px Consolas, monospace",r.textAlign="center",r.fillText(t,s.width/2,56),n.needsUpdate=!0}const Tn=[{id:0,name:"AR-6 SENTINEL",short:"AUTO",magSize:30,fireRate:10,damage:18,spread:.011,adsSpread:.003,reload:1.75,type:"hitscan"},{id:1,name:"ARC LANCER",short:"ARC",magSize:5,fireRate:1,damage:78,spread:.004,adsSpread:.001,reload:2.1,type:"charged"},{id:2,name:"K-12 BREACH",short:"BREACH",magSize:8,fireRate:1.25,damage:15,spread:.075,adsSpread:.045,reload:2.45,type:"shotgun"},{id:3,name:"M-90 WIDOW",short:"WIDOW",magSize:5,fireRate:.62,damage:1600,spread:.035,adsSpread:15e-5,reload:2.8,type:"sniper"},{id:4,name:"VX-9 RAPTOR",short:"SMG",magSize:40,fireRate:15.5,damage:13,spread:.018,adsSpread:.006,reload:1.45,type:"hitscan"},{id:5,name:"B-70 BASTION",short:"LMG",magSize:60,fireRate:8.1,damage:24,spread:.016,adsSpread:.0045,reload:3.55,type:"hitscan"}];class Wv{current=0;mags=[30,5,8,5,40,60];reserves=[120,20,32,20,200,240];ads=!1;trigger=!1;charging=!1;charge=0;reloading=!1;reloadStage="";boltTimer=0;holdingBreath=!1;scopeDistance=0;aimAssist=!1;shots=0;hits=0;lastShot=0;recoilIndex=0;recoilPitch=0;recoilYaw=0;currentSpread=.01;model=new Ae;muzzle=new De;projectiles=[];particles=[];decals=[];casings=[];lastRay=null;onSound=()=>{};onHit=()=>{};onShot=()=>{};onKill=()=>{};onShake=()=>{};onHud=()=>{};onTracer=()=>{};reloadTimer=0;sway=new nt;swayVelocity=new nt;chargeAudioTimer=0;equipTimer=.55;weaponRoll=0;damageMultiplier=1;fireRateMultiplier=1;magMultiplier=1;reloadMultiplier=1;arcRadiusMultiplier=1;sniperPenetration=0;incendiary=!1;bodyMaterial;accentMaterial;lensMaterial;muzzleFlash;muzzleLight;muzzleLife=0;scene;audio;constructor(t,e){this.scene=t,this.audio=e,this.buildModel(),this.muzzleFlash=new q(new ti(.11,.35,6),new Oe({color:"#ffd68b",transparent:!0,opacity:.9,depthWrite:!1})),this.muzzleFlash.rotation.x=-Math.PI/2,this.muzzleFlash.position.z=-.18,this.muzzleFlash.visible=!1,this.muzzle.add(this.muzzleFlash),this.muzzleLight=new si("#ffbd61",0,4,2),this.muzzle.add(this.muzzleLight);const n=new wi(.12,8,8),s=new Oe({color:"#ffb94a"});for(let h=0;h<8;h++){const d=new q(n,s);d.visible=!1,t.add(d),this.projectiles.push({mesh:d,velocity:new A,life:0,active:!1})}const r=new zt(.025,.025,.2),o=new Oe({color:"#ffd782"});for(let h=0;h<96;h++){const d=new q(r,o);d.visible=!1,t.add(d),this.particles.push({mesh:d,velocity:new A,life:0,active:!1})}const a=new Kr(.055,10),c=new Oe({color:"#29231f",transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});for(let h=0;h<48;h++){const d=new q(a,c.clone());d.visible=!1,t.add(d),this.decals.push({mesh:d,life:0,active:!1})}const l=new ne(.025,.025,.11,6),u=new Ft({color:"#a27b35",metalness:.8,roughness:.3});for(let h=0;h<28;h++){const d=new q(l,u);d.visible=!1,t.add(d),this.casings.push({mesh:d,velocity:new A,life:0,active:!1})}this.refreshModel()}buildModel(){this.bodyMaterial=new Ft({color:"#242925",emissive:"#0c1212",emissiveIntensity:.32,roughness:.42,metalness:.7}),this.accentMaterial=new Ft({color:"#b48147",emissive:"#301806",emissiveIntensity:.45,roughness:.42,metalness:.52}),this.lensMaterial=new Ft({color:"#7ed1c8",emissive:"#143a37",emissiveIntensity:1.2,metalness:.65,roughness:.2});const t=new q(new zt(.16,.18,.72),this.bodyMaterial);t.position.set(.28,-.25,-.62),this.model.add(t);const e=new Vs;e.moveTo(-.11,-.08),e.lineTo(-.075,.12),e.lineTo(.075,.12),e.lineTo(.12,.035),e.lineTo(.09,-.11),e.lineTo(-.11,-.08);const n=new Zr(e,{depth:.58,steps:1,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2});n.center();const s=new q(n,this.bodyMaterial);s.position.set(.28,-.225,-.62),this.model.add(s);const r=new q(new zt(.11,.34,.13),this.bodyMaterial);r.position.set(.28,-.42,-.32),r.rotation.x=-.28,this.model.add(r);const o=new q(new Ve(.075,.012,6,14,Math.PI),this.accentMaterial);o.rotation.set(0,Math.PI/2,Math.PI),o.position.set(.28,-.34,-.39),this.model.add(o);const a=new q(new zt(.14,.025,.58),this.accentMaterial);a.position.set(.28,-.145,-.68),a.name="weapon-color-rail",this.model.add(a);const c=new q(new ne(.035,.045,.55,10),this.bodyMaterial);c.rotation.x=Math.PI/2,c.position.set(.28,-.2,-1.19),this.model.add(c);const l=new q(new ne(.052,.052,.06,10),this.accentMaterial);l.rotation.x=Math.PI/2,l.position.set(.28,-.2,-1.34),this.model.add(l);const u=new Ae;u.position.set(.27,-.43,-.52),u.rotation.x=-.15,u.name="magazine";const h=new Vs;h.moveTo(-.065,.15),h.lineTo(.065,.15),h.lineTo(.055,-.11),h.lineTo(.035,-.17),h.lineTo(-.05,-.17),h.closePath();const d=new q(new Zr(h,{depth:.18,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1}),this.accentMaterial);d.geometry.center(),d.castShadow=!0,u.add(d);for(const B of[-.035,0,.035]){const Q=new q(new zt(.008,.25,.188),this.bodyMaterial);Q.position.x=B,u.add(Q)}this.model.add(u);const p=new Ae;p.name="standard-stock";const g=new q(new zt(.12,.12,.42),this.bodyMaterial);g.position.set(.28,-.24,-.08),p.add(g);const v=new q(new zt(.17,.31,.1),this.accentMaterial);v.position.set(.28,-.29,.15),v.rotation.x=.12,p.add(v),this.model.add(p);const m=new q(new ne(.09,.105,.42,8),this.bodyMaterial);m.rotation.x=Math.PI/2,m.position.set(.28,-.21,-.98),this.model.add(m);for(let B=-.83;B>=-1.12;B-=.075){const Q=new q(new zt(.175,.014,.025),this.accentMaterial);Q.position.set(.28,-.13,B),this.model.add(Q)}const f=new q(new zt(.025,.095,.035),this.accentMaterial);f.position.set(.28,-.09,-1.22),this.model.add(f);const T=new q(new zt(.08,.065,.025),this.accentMaterial);T.position.set(.28,-.09,-.48),this.model.add(T);const y=new q(new zt(.012,.075,.22),new Ft({color:"#080b0b",roughness:.22,metalness:.95}));y.position.set(.372,-.19,-.62),this.model.add(y);const _=new q(new zt(.075,.035,.12),this.accentMaterial);_.position.set(.38,-.13,-.43),_.name="charging-handle",this.model.add(_);for(const B of[-.52,-.68,-.82]){const Q=new q(new ne(.012,.012,.19,8),this.accentMaterial);Q.rotation.z=Math.PI/2,Q.position.set(.28,-.215,B),this.model.add(Q)}const P=new Ae;P.name="sniper-scope";const L=new q(new ne(.075,.075,.34,16),this.bodyMaterial);L.rotation.x=Math.PI/2,L.position.set(.28,-.08,-.66),P.add(L);for(const B of[-.49,-.83]){const Q=new q(new Ve(.082,.012,7,18),this.accentMaterial);Q.position.set(.28,-.08,B),P.add(Q)}const w=new q(new Kr(.066,18),this.lensMaterial);w.position.set(.28,-.08,-.485),w.material.side=Fe,P.add(w),P.visible=!1,this.model.add(P);const C=new q(new Ve(.09,.018,7,18),this.accentMaterial);C.rotation.x=Math.PI/2,C.position.set(.28,-.2,-1.05),C.name="arc-coil",C.visible=!1,this.model.add(C);const S=new q(new zt(.2,.12,.28),this.accentMaterial);S.position.set(.28,-.31,-.94),S.name="shotgun-pump",S.visible=!1,this.model.add(S);const M=new q(new ne(.018,.018,.16,7),this.accentMaterial);M.rotation.z=Math.PI/2,M.position.set(.39,-.12,-.58),M.name="sniper-bolt",M.visible=!1,this.model.add(M);const R=new Ae;R.name="arc-cell";for(const B of[-.055,0,.055]){const Q=new q(new ne(.025,.025,.34,8),this.lensMaterial);Q.rotation.x=Math.PI/2,Q.position.set(.28+B,-.28,-.86),R.add(Q)}R.visible=!1,this.model.add(R);const F=new Ae;F.name="shotgun-shells";for(let B=0;B<4;B++){const Q=new q(new ne(.021,.021,.13,8),new Ft({color:"#d84e32",metalness:.35,roughness:.4}));Q.rotation.x=Math.PI/2,Q.position.set(.39,-.23,-.55-B*.09),F.add(Q)}F.visible=!1,this.model.add(F);const H=new Ae;H.name="smg-brace";const V=new q(new zt(.1,.1,.28),this.bodyMaterial);V.position.set(.28,-.24,-.06),H.add(V);const z=new q(new Ve(.13,.024,7,16),this.accentMaterial);z.position.set(.28,-.24,.1),H.add(z),H.visible=!1,this.model.add(H);const k=new Ae;k.name="heavy-shroud";const $=new q(new zt(.23,.24,.62),this.bodyMaterial);$.position.set(.28,-.23,-.75),k.add($);for(const B of[-.085,.085]){const Q=new q(new zt(.025,.27,.5),this.accentMaterial);Q.position.set(.28+B,-.23,-.76),k.add(Q)}k.visible=!1,this.model.add(k),this.muzzle.position.set(.28,-.2,-1.5),this.model.add(this.muzzle),this.model.renderOrder=10}select(t){t<0||t>=Tn.length||this.reloading||t===this.current||(this.current=t,this.recoilIndex=0,this.charge=0,this.charging=!1,this.equipTimer=.55,this.refreshModel(),this.onHud())}refreshModel(){const t=[["#465154","#746346","#7ad9df"],["#3f4b50","#48636a","#82e0e7"],["#514943","#795346","#d9ac69"],["#424d52","#667379","#82ceda"],["#3e4d49","#4d665c","#82d2bd"],["#4b4942","#705f47","#d2ac69"]],[e,n,s]=t[this.current];this.bodyMaterial.color.set(e),this.bodyMaterial.emissive.set(e),this.bodyMaterial.emissiveIntensity=.13,this.bodyMaterial.roughness=.38,this.bodyMaterial.metalness=.84,this.accentMaterial.color.set(n),this.accentMaterial.emissive.set("#11100d"),this.accentMaterial.emissiveIntensity=.08,this.accentMaterial.roughness=.34,this.accentMaterial.metalness=.72,this.lensMaterial.color.set(s),this.lensMaterial.emissive.set(s),this.lensMaterial.emissiveIntensity=.7;const r=this.current===2?.92:this.current===1?.82:this.current===3?.94:this.current===4?.78:this.current===5?.98:.86;this.model.scale.setScalar(r),this.weaponRoll=this.current===1?.035:this.current===4?.05:0;for(const[c,l]of[["sniper-scope",3],["arc-coil",1],["shotgun-pump",2],["sniper-bolt",3],["arc-cell",1],["shotgun-shells",2],["smg-brace",4],["heavy-shroud",5]]){const u=this.model.getObjectByName(c);u&&(u.visible=this.current===l)}const o=this.model.getObjectByName("standard-stock");o&&(o.visible=!["1","4"].includes(String(this.current)));const a=this.model.getObjectByName("magazine");a&&(a.visible=this.current!==2),this.resetReloadParts()}applyProgression(t){this.damageMultiplier=t.damageMultiplier,this.fireRateMultiplier=t.fireRateMultiplier,this.magMultiplier=t.magMultiplier,this.reloadMultiplier=t.reloadMultiplier,this.arcRadiusMultiplier=t.arcRadiusMultiplier,this.sniperPenetration=t.sniperPenetration,this.incendiary=t.incendiary;for(let e=0;e<this.mags.length;e++)this.mags[e]=Math.min(this.effectiveMagSize(e),this.mags[e]+Math.max(0,this.effectiveMagSize(e)-Tn[e].magSize));this.onHud()}effectiveMagSize(t=this.current){return Math.ceil(Tn[t].magSize*this.magMultiplier)}update(t,e,n,s,r,o){const a=Tn[this.current],c=this.current===3&&this.ads&&this.holdingBreath;if(this.currentSpread=de.damp(this.currentSpread,this.ads?a.adsSpread:a.spread,c?24:15,t),this.boltTimer>0){this.boltTimer=Math.max(0,this.boltTimer-t);const u=this.model.getObjectByName("sniper-bolt");u&&(u.position.z=-.58+Math.sin((1-this.boltTimer/.52)*Math.PI)*.16),this.boltTimer===0&&(this.reloadStage="")}this.recoilPitch=de.damp(this.recoilPitch,0,9,t),this.recoilYaw=de.damp(this.recoilYaw,0,9,t);const l=c?.17:1;if(this.swayVelocity.x+=(-o.x*6e-4*l-this.sway.x)*22*t,this.swayVelocity.y+=(-o.y*6e-4*l-this.sway.y)*22*t,this.swayVelocity.multiplyScalar(Math.exp(-8*t)),this.sway.addScaledVector(this.swayVelocity,t),this.model.position.set(this.sway.x,this.ads?-.11:0,this.sway.y),this.model.rotation.y=this.sway.x*.9,this.model.rotation.x=this.sway.y*.8,this.model.rotation.z=this.weaponRoll,this.equipTimer>0){this.equipTimer=Math.max(0,this.equipTimer-t);const u=1-this.equipTimer/.55,h=1-Math.pow(1-u,3);this.model.position.y-=.62*(1-h),this.model.position.x+=.22*(1-h),this.model.rotation.x+=.42*(1-h),this.model.rotation.z-=.24*(1-h)}this.reloading?this.updateReload(t):a.type==="charged"?this.trigger?(this.charging=!0,this.charge=Math.min(1.5,this.charge+t),this.chargeAudioTimer-=t,this.chargeAudioTimer<=0&&(this.chargeAudioTimer=.16,this.audio.charge(this.charge/1.5))):this.charging&&(this.charge>.18&&this.fire(e,n,s,r),this.charging=!1,this.charge=0):this.trigger&&this.boltTimer<=0&&e-this.lastShot>=1/(a.fireRate*this.fireRateMultiplier)&&this.fire(e,n,s,r),this.updateProjectiles(t,s,r),this.updateEffects(t),this.updateCasings(t),this.muzzleLife>0&&(this.muzzleLife-=t,this.muzzleFlash.visible=this.muzzleLife>0,this.muzzleLight.intensity=Math.max(0,this.muzzleLife*70)),o.set(0,0)}fire(t,e,n,s){const r=Tn[this.current];if(this.mags[this.current]<=0){this.startReload();return}this.lastShot=t,this.mags[this.current]--,this.shots++,this.onShot(),this.audio.shot(r.type),this.onSound({position:e.position.clone(),radius:r.type==="shotgun"?30:24,time:t,kind:"shot"}),this.muzzleLife=.055,this.muzzleFlash.visible=!0,this.muzzleLight.intensity=4.5,this.ejectCasing(e),this.onShake(r.type==="shotgun"?.16:r.type==="sniper"?.24:.07),this.recoilIndex++;const o=[[-.002,.008],[.003,.012],[-.004,.016],[.006,.02],[-.007,.025],[.005,.029],[0,.034]],a=o[(this.recoilIndex-1)%o.length];if(this.recoilYaw+=a[0],this.recoilPitch+=a[1],r.type==="charged")this.launchProjectile(e,Math.min(1,this.charge/1.1));else if(r.type==="shotgun"){const c=[[-.7,-.5],[0,-.55],[.7,-.5],[-.8,.1],[0,0],[.8,.1],[-.55,.65],[.55,.65]];let l=!1,u=!1;for(const[h,d]of c){const p=this.cast(e,n,s,h*this.currentSpread,d*this.currentSpread,r.damage*this.damageMultiplier*(this.incendiary?1.12:1),22);l||=p.hit,u||=p.critical}l&&this.markHit(u)}else if(r.type==="sniper"){this.boltTimer=.52,this.reloadStage="CICLANDO FERROLHO",setTimeout(()=>this.audio.reload("end"),210);const c=this.ads?this.currentSpread:this.currentSpread*1.35,l=this.cast(e,n,s,(Math.random()-.5)*c,(Math.random()-.5)*c,r.damage*this.damageMultiplier,150,!0,this.sniperPenetration);l.hit&&this.markHit(l.critical)}else{const c=this.cast(e,n,s,(Math.random()-.5)*this.currentSpread,(Math.random()-.5)*this.currentSpread,r.damage*this.damageMultiplier,100);c.hit&&this.markHit(c.critical)}this.onHud()}centerRay(t,e=0,n=0){const s=t.position.clone(),r=new A(e,n,-1).unproject(t).sub(s).normalize();return{origin:s,dir:r}}measureRange(t,e){const{origin:n,dir:s}=this.centerRay(t),r=new zr(n,s,0,150);return this.scopeDistance=r.intersectObjects(e.raycastMeshes,!1)[0]?.distance??150,this.scopeDistance}cast(t,e,n,s,r,o,a,c=!1,l=0){const u=this.centerRay(t,s,r),h=u.origin,d=u.dir;if(this.aimAssist&&this.ads){let _=.045,P=null;for(const L of n.drones){if(!L.alive)continue;const w=L.group.position.clone().sub(h).normalize(),C=d.angleTo(w);C<_&&(_=C,P=w)}P&&d.lerp(P,.34).normalize()}const p=new zr(h,d,0,a),g=p.intersectObjects(e.raycastMeshes,!1)[0];let v=h.clone().addScaledVector(d,a);const m=g?.distance??a,f=[];for(const _ of n.drones){if(!_.alive)continue;const P=[..._.damageZones,_.weakpoint,_.hitbox],L=p.intersectObjects(P,!1).find(C=>C.distance<m);if(!L)continue;const w=L.object.userData.damageZone??"BODY";f.push({drone:_,distance:L.distance,point:L.point.clone(),zone:w,critical:w==="CORE"})}f.sort((_,P)=>_.distance-P.distance);const T=f.slice(0,1+l);let y=!1;for(const _ of T){const P=c?1:de.clamp(1-_.distance/a,.2,1);_.drone.damage(o*P,h,_.critical,_.zone)&&this.onKill(_.drone,_.critical),y||=_.critical,this.spawnSparks(_.point,new A(0,1,0))}return f[0]&&l===0?v.copy(f[0].point):g&&v.copy(g.point),g&&(e.damageDestructible(g.object,o),this.impact(g.point,g.face?.normal.clone().transformDirection(g.object.matrixWorld)??d.clone().negate())),this.scopeDistance=f[0]?.distance??g?.distance??a,this.lastRay={start:h,end:v.clone()},this.onTracer(h,v,y?"#fff1b2":"#f0b857"),{hit:T.length>0,critical:y}}launchProjectile(t,e){const n=this.projectiles.find(o=>!o.active);if(!n)return;const{origin:s,dir:r}=this.centerRay(t);n.active=!0,n.life=5,n.mesh.visible=!0,n.mesh.position.copy(s).addScaledVector(r,.8),n.velocity.copy(r).multiplyScalar(20+e*22),this.lastRay={start:s,end:s.clone().addScaledVector(r,5)}}updateProjectiles(t,e,n){for(const s of this.projectiles){if(!s.active)continue;const r=s.mesh.position.clone();s.velocity.y-=8.5*t,s.mesh.position.addScaledVector(s.velocity,t),s.life-=t;const o=s.mesh.position.clone().sub(r),a=o.length(),c=new zr(r,o.normalize(),0,a),l=c.intersectObjects(e.raycastMeshes,!1)[0];let u=null;for(const h of n.drones)if(h.alive&&c.intersectObject(h.hitbox,!1).length){u=h;break}(l||u||s.life<=0)&&(this.explode(s.mesh.position,n),s.active=!1,s.mesh.visible=!1)}}explode(t,e){this.audio.explosion(),this.onSound({position:t.clone(),radius:38,time:performance.now()/1e3,kind:"explosion"}),this.spawnSparks(t,new A(0,1,0),28);const n=7*this.arcRadiusMultiplier;for(const s of e.drones){if(!s.alive)continue;const r=s.group.position.distanceTo(t);r<n&&(s.damage(85*this.damageMultiplier*(1-r/n),t)&&this.onKill(s,!1),this.markHit())}this.onShake(.28)}startReload(){this.reloading||this.mags[this.current]>=this.effectiveMagSize()||this.reserves[this.current]<=0||(this.reloading=!0,this.reloadTimer=0,this.resetReloadParts(),this.reloadStage=this.current===2?"ABRINDO PORTA":"LIBERANDO PENTE",this.audio.reload("start"),this.onHud())}updateReload(t){const e=Tn[this.current],n=e.reload*this.reloadMultiplier;this.reloadTimer+=t;const s=Math.min(1,this.reloadTimer/n),r=this.model.getObjectByName("magazine"),o=this.model.getObjectByName("charging-handle"),a=this.model.getObjectByName("shotgun-pump");if(this.model.rotation.x+=Math.sin(s*Math.PI)*.16,this.model.rotation.z=this.weaponRoll+Math.sin(s*Math.PI)*.07,this.current===2)s<.3?this.reloadStage="ABRINDO PORTA":s<.78?(this.reloadStage!=="INSERINDO CARTUCHO"&&(this.reloadStage="INSERINDO CARTUCHO",this.audio.reload("mag")),a&&(a.position.z=-.94+Math.sin((s-.3)/.48*Math.PI)*.18)):(this.reloadStage="FECHANDO AÇÃO",a&&(a.position.z=-.94+Math.sin((s-.78)/.22*Math.PI)*.12));else if(s<.18)this.reloadStage="LIBERANDO PENTE";else if(s<.46){this.reloadStage="RETIRANDO PENTE";const c=(s-.18)/.28;r&&(r.visible=!0,r.position.set(.27+.16*c,-.43-.62*c,-.52+.12*c),r.rotation.set(-.15,0,-.48*c))}else if(s<.54)this.reloadStage="NOVO PENTE",r&&(r.visible=!1);else if(s<.82){this.reloadStage!=="INSERINDO PENTE"&&(this.reloadStage="INSERINDO PENTE",this.audio.reload("mag"));const c=(s-.54)/.28,l=1-Math.pow(1-c,2);r&&(r.visible=!0,r.position.set(.43-.16*l,-1.05+.62*l,-.4-.12*l),r.rotation.set(-.15,0,-.48*(1-l)))}else this.reloadStage="ACIONANDO FERROLHO",r&&(r.visible=!0,r.position.set(.27,-.43,-.52),r.rotation.set(-.15,0,0)),o&&(o.position.z=-.43+Math.sin((s-.82)/.18*Math.PI)*.17);if(this.reloadTimer>=n){const c=this.effectiveMagSize()-this.mags[this.current],l=this.current===2?Math.min(1,this.reserves[this.current]):Math.min(c,this.reserves[this.current]);this.mags[this.current]+=l,this.reserves[this.current]-=l,this.current===2&&this.mags[this.current]<this.effectiveMagSize()&&this.reserves[this.current]>0?(this.reloadTimer=n*.3,this.reloadStage="INSERINDO CARTUCHO",this.audio.reload("mag")):(this.reloading=!1,this.reloadStage="",this.resetReloadParts(),this.audio.reload("end")),this.onHud()}this.onHud()}resetReloadParts(){const t=this.model.getObjectByName("magazine"),e=this.model.getObjectByName("charging-handle"),n=this.model.getObjectByName("shotgun-pump");t&&(t.position.set(.27,-.43,-.52),t.rotation.set(-.15,0,0),t.visible=this.current!==2),e&&e.position.set(.38,-.13,-.43),n&&n.position.set(.28,-.31,-.94)}markHit(t=!1){this.hits++,this.onHit(t)}impact(t,e){this.audio.impact();const n=this.decals.find(s=>!s.active)??this.decals.reduce((s,r)=>s.life<r.life?s:r);n.active=!0,n.life=18,n.mesh.visible=!0,n.mesh.position.copy(t).addScaledVector(e,.012),n.mesh.quaternion.setFromUnitVectors(new A(0,0,1),e),n.mesh.material.opacity=.72,this.spawnSparks(t,e)}spawnSparks(t,e,n=8){for(let s=0;s<n;s++){const r=this.particles.find(o=>!o.active);if(!r)break;r.active=!0,r.life=.25+Math.random()*.35,r.mesh.visible=!0,r.mesh.position.copy(t),r.velocity.copy(e).multiplyScalar(2+Math.random()*5).add(new A((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4))}}updateEffects(t){for(const e of this.particles)e.active&&(e.life-=t,e.velocity.y-=9*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.lookAt(e.mesh.position.clone().add(e.velocity)),e.life<=0&&(e.active=!1,e.mesh.visible=!1));for(const e of this.decals)e.active&&(e.life-=t,e.life<2&&(e.mesh.material.opacity=e.life*.36),e.life<=0&&(e.active=!1,e.mesh.visible=!1))}ejectCasing(t){if(this.current===1)return;const e=this.casings.find(n=>!n.active);e&&(e.active=!0,e.life=1.6,e.mesh.visible=!0,e.mesh.position.copy(t.position).add(new A(.25,-.2,0).applyQuaternion(t.quaternion)),e.velocity.set(2.2+Math.random(),1.7+Math.random(),.3*(Math.random()-.5)).applyQuaternion(t.quaternion),this.audio.shell())}updateCasings(t){for(const e of this.casings)e.active&&(e.life-=t,e.velocity.y-=9*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=t*14,e.mesh.rotation.z+=t*9,e.mesh.position.y<.03&&(e.mesh.position.y=.03,e.velocity.y=Math.abs(e.velocity.y)*.28,e.velocity.multiplyScalar(.72)),e.life<=0&&(e.active=!1,e.mesh.visible=!1))}}class Xv{constructor(t,e){this.level=e,t.add(this.group),this.group.add(this.dynamic),this.buildNav(),this.group.visible=!1}level;enabled=!1;group=new Ae;dynamic=new Ae;statsEl=document.querySelector("#debug-stats");aiEl=document.querySelector("#ai-states");frames=0;fps=0;lastFps=0;toggle(t){this.enabled=!this.enabled,this.group.visible=this.enabled,t?.setDebugVisible(this.enabled),document.querySelector("#debug-panel")?.classList.toggle("hidden",!this.enabled)}update(t,e,n,s,r,o,a=!1,c="INCURSAO"){if(this.frames++,t-this.lastFps>=.5&&(this.fps=Math.round(this.frames/(t-this.lastFps)),this.frames=0,this.lastFps=t),!this.enabled)return;this.dynamic.clear();const l=new io(0,0,n.radius,n.radius,0,Math.PI*2).getPoints(24).map(f=>new A(f.x,0,f.y)),u=new Me().setFromPoints(l),h=new Gn({color:"#ffd26b"}),d=new qd(u,h);d.position.copy(n.position).setY(n.position.y+.04),this.dynamic.add(d);const p=d.clone();p.position.y=n.position.y+n.height,this.dynamic.add(p);for(const f of n.contactNormals){const T=n.position.clone().add(new A(0,.8,0));this.dynamic.add(ta(T,T.clone().addScaledVector(f,1.5),"#ff7d61"))}for(const f of s.drones){if(!f.alive)continue;const T=f.group.position.clone(),y=new Vs;y.moveTo(0,0);const _=Math.min(14,f.spec.visionRange*.35),P=de.degToRad(f.type==="SNIPER"?38:52);for(let w=0;w<=12;w++){const C=-P+P*2*w/12;y.lineTo(Math.sin(C)*_,-Math.cos(C)*_)}y.lineTo(0,0);const L=new q(new Ec(y),new Oe({color:f.visionVisible?"#ff665c":"#67d8d5",transparent:!0,opacity:.11,side:Fe,depthWrite:!1}));if(L.rotation.x=-Math.PI/2,L.rotation.z=f.group.rotation.y,L.position.copy(T).setY(.045),this.dynamic.add(L),this.dynamic.add(ta(T,n.position.clone().add(new A(0,1.1,0)),f.visionVisible?"#ff6d59":"#52615d")),f.path.length){const w=[T,...f.path.slice(f.pathIndex).map(C=>C.clone().setY(.12))];this.dynamic.add(new $s(new Me().setFromPoints(w),new Gn({color:"#f3b855"})))}if(f.lastKnown){const w=new q(new ps(.35,.5,16),new Oe({color:"#ff826c",side:Fe}));w.rotation.x=-Math.PI/2,w.position.copy(f.lastKnown).setY(.07),this.dynamic.add(w)}}r.lastRay&&this.dynamic.add(ta(r.lastRay.start,r.lastRay.end,"#fff1b2"));const g=e.info.render;this.statsEl.textContent=`FPS             ${this.fps}
FÍSICA / FRAME  ${o}
SUBPASSOS       ${n.physicsSubsteps}
SIMULAÇÃO       ${a?"PAUSADA":c}
DRAW CALLS      ${g.calls}
TRIÂNGULOS       ${g.triangles.toLocaleString("pt-BR")}
DRONES ATIVOS   ${s.drones.filter(f=>f.alive).length}
NAV NODES       ${this.level.navNodes.length}
CONTATOS        ${n.contactNormals.length}`;const v=s.drones.filter(f=>f.alive).map(f=>`<span><b>D-${String(f.id).padStart(2,"0")}</b> ${f.type} · ${f.state} · ${Math.ceil(f.health)}/${f.spec.health}</span>`).join(""),m=s.stateHistory.slice(0,4).map(f=>`<span class="history">${f}</span>`).join("");this.aiEl.innerHTML=v+(m?`<hr>${m}`:"")}buildNav(){const t=[],e=[];for(const n of this.level.navNodes)for(const s of n.links){if(s<n.id)continue;(n.exposure>.7?e:t).push(n.pos.x,.06,n.pos.z,this.level.navNodes[s].pos.x,.06,this.level.navNodes[s].pos.z)}for(const[n,s]of[[t,"#56cbc9"],[e,"#f0b857"]]){const r=new Me;r.setAttribute("position",new te(n,3)),this.group.add(new eo(r,new Gn({color:s,transparent:!0,opacity:.16})))}}}function ta(i,t,e){return new $s(new Me().setFromPoints([i,t]),new Gn({color:e}))}class qv{constructor(t){this.canvas=t,this.touchMode=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,document.documentElement.classList.toggle("touch-mode",this.touchMode),document.addEventListener("pointerlockchange",()=>{this.touchMode||(this.locked=document.pointerLockElement===this.canvas,this.locked||this.reset())}),document.addEventListener("mousemove",e=>{this.touchMode||!this.locked||this.applyLook(e.movementX,e.movementY)}),document.addEventListener("mousedown",e=>{this.touchMode||!this.locked||(e.button===0&&this.onFire(!0),e.button===2&&this.onAds(!0))}),document.addEventListener("mouseup",e=>{this.touchMode||(e.button===0&&this.onFire(!1),e.button===2&&this.onAds(!1))}),document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("keydown",e=>this.keyDown(e)),document.addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>{document.pointerLockElement&&document.exitPointerLock(),this.reset()}),this.touchMode&&this.bindTouchControls()}canvas;keys=new Set;mouseDelta=new nt;yaw=0;pitch=0;locked=!1;touchMode=!1;sensitivity=1;onFire=t=>{};onAds=t=>{};onSelectWeapon=t=>{};onReload=()=>{};onJump=()=>{};onUseFrag=()=>{};onUseAbility=()=>{};onUpgradeChoice=t=>{};onPauseRequest=()=>{};onStartRejected=()=>{};onDebugToggle=()=>{};onDebugPause=()=>{};onDebugStep=()=>{};onDebugFreeCamera=()=>{};onDebugTeleport=()=>{};onDebugForceState=()=>{};onDebugSelectDrone=()=>{};touchMove=new nt;touchSprint=!1;touchCrouch=!1;lookPointer=null;lastLook=new nt;movePointer=null;moveOrigin=new nt;movement(){const t=new A((this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),0,(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0));return t.x+=this.touchMove.x,t.z+=this.touchMove.y,t.lengthSq()>1&&t.normalize(),t}get sprinting(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchSprint}get crouching(){return this.keys.has("ControlLeft")||this.keys.has("KeyC")||this.touchCrouch}get lean(){return(this.keys.has("KeyE")?1:0)-(this.keys.has("KeyQ")?1:0)}get active(){return this.locked}requestStart(){if(this.touchMode)return this.locked=!0,!0;try{this.canvas.requestPointerLock()?.catch(()=>this.onStartRejected())}catch{this.onStartRejected()}return!1}requestLock(){return this.requestStart()}endTouchSession(){this.touchMode&&(this.locked=!1,this.reset())}reset(){this.keys.clear(),this.touchMove.set(0,0),this.touchSprint=!1,this.touchCrouch=!1,this.lookPointer=null,this.movePointer=null,this.onFire(!1),this.onAds(!1),this.updateStick(0,0)}applyLook(t,e){this.yaw-=t*.0018*this.sensitivity,this.pitch=de.clamp(this.pitch-e*.0018*this.sensitivity,-1.46,1.46),this.mouseDelta.x+=t,this.mouseDelta.y+=e}bindTouchControls(){this.canvas.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||this.lookPointer!==null||(this.lookPointer=n.pointerId,this.lastLook.set(n.clientX,n.clientY),this.canvas.setPointerCapture(n.pointerId),n.preventDefault())},{passive:!1}),this.canvas.addEventListener("pointermove",n=>{n.pointerId===this.lookPointer&&(this.applyLook(n.clientX-this.lastLook.x,n.clientY-this.lastLook.y),this.lastLook.set(n.clientX,n.clientY),n.preventDefault())},{passive:!1});const t=n=>{n.pointerId===this.lookPointer&&(this.lookPointer=null)};this.canvas.addEventListener("pointerup",t),this.canvas.addEventListener("pointercancel",t);const e=document.querySelector("#touch-move");if(e){e.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&(this.movePointer=s.pointerId,this.moveOrigin.set(s.clientX,s.clientY),e.setPointerCapture(s.pointerId),this.setMove(s.clientX,s.clientY),s.preventDefault())},{passive:!1}),e.addEventListener("pointermove",s=>{s.pointerId===this.movePointer&&(this.setMove(s.clientX,s.clientY),s.preventDefault())},{passive:!1});const n=s=>{s.pointerId===this.movePointer&&(this.movePointer=null,this.touchMove.set(0,0),this.updateStick(0,0))};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n)}this.bindHold("#touch-fire",n=>this.onFire(n)),this.bindHold("#touch-ads",n=>this.onAds(n)),this.bindHold("#touch-sprint",n=>this.touchSprint=n),this.bindHold("#touch-crouch",n=>this.touchCrouch=n),this.bindTap("#touch-jump",()=>this.onJump()),this.bindTap("#touch-reload",()=>this.onReload()),this.bindTap("#touch-grenade",()=>this.onUseFrag()),this.bindTap("#touch-ability",()=>this.onUseAbility()),this.bindTap("#touch-pause",()=>this.onPauseRequest()),document.querySelectorAll("[data-touch-weapon]").forEach(n=>this.bindTap(n,()=>this.onSelectWeapon(Number(n.dataset.touchWeapon))))}setMove(t,e){const n=t-this.moveOrigin.x,s=e-this.moveOrigin.y,r=44,o=Math.hypot(n,s),a=o>r?r/o:1,c=n*a,l=s*a;this.touchMove.set(c/r,-l/r),this.updateStick(c,l)}updateStick(t,e){const n=document.querySelector("#touch-move");n?.style.setProperty("--stick-x",`${t}px`),n?.style.setProperty("--stick-y",`${e}px`)}bindHold(t,e){const n=typeof t=="string"?document.querySelector(t):t;if(!n)return;const s=o=>{o.pointerType==="touch"&&(e(!0),n.setPointerCapture(o.pointerId),o.preventDefault())},r=o=>{e(!1),o.preventDefault()};n.addEventListener("pointerdown",s,{passive:!1}),n.addEventListener("pointerup",r,{passive:!1}),n.addEventListener("pointercancel",r,{passive:!1}),n.addEventListener("pointerleave",o=>{o.buttons===0&&e(!1)})}bindTap(t,e){const n=typeof t=="string"?document.querySelector(t):t;n&&n.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&(e(),n.setPointerCapture(s.pointerId),s.preventDefault())},{passive:!1})}keyDown(t){["F1","F2","F3","F4","F5","F6","F7","F8"].includes(t.code)&&t.preventDefault(),!(t.repeat&&t.code!=="KeyR")&&(this.keys.add(t.code),t.code==="Digit1"&&this.onSelectWeapon(0),t.code==="Digit2"&&this.onSelectWeapon(1),t.code==="Digit3"&&this.onSelectWeapon(2),t.code==="Digit4"&&this.onSelectWeapon(3),t.code==="Digit5"&&this.onSelectWeapon(4),t.code==="Digit6"&&this.onSelectWeapon(5),t.code==="Digit7"&&this.onUpgradeChoice(0),t.code==="Digit8"&&this.onUpgradeChoice(1),t.code==="Digit9"&&this.onUpgradeChoice(2),t.code==="KeyR"&&this.onReload(),t.code==="KeyG"&&this.onUseFrag(),t.code==="KeyF"&&this.onUseAbility(),t.code==="Space"&&this.onJump(),t.code==="Escape"&&this.onPauseRequest(),(t.code==="F1"||t.code==="F3")&&this.onDebugToggle(),t.code==="F2"&&this.onDebugPause(),t.code==="F4"&&this.onDebugStep(),t.code==="F5"&&this.onDebugFreeCamera(),t.code==="F6"&&this.onDebugTeleport(),t.code==="F7"&&this.onDebugForceState(),t.code==="F8"&&this.onDebugSelectDrone())}}const $t=i=>document.querySelector(i);class Yv{toastTimer=0;tutorialTimer=9;feedItems=[];radarDisabled=!1;updateVitals(t,e=100){$t("#health").textContent=String(Math.ceil(t)),$t("#health-fill").style.width=`${de.clamp(t/e*100,0,100)}%`}updateWeapon(t){const e=Tn[t.current];$t("#weapon-name").textContent=e.name,$t("#mag").textContent=String(t.mags[t.current]).padStart(2,"0"),$t("#reserve").textContent=String(t.reserves[t.current]).padStart(3,"0"),$t("#reload-state").textContent=t.reloading||t.boltTimer>0?t.reloadStage:t.charging?`CARGA ${Math.round(t.charge/1.5*100)}%`:t.current===3&&t.ads&&t.holdingBreath?"PULSO ESTÁVEL":"",document.querySelectorAll("#weapon-slots span").forEach((n,s)=>n.classList.toggle("active",s===t.current))}updateTactical(t){$t("#grenade-state").textContent=t.grenadeLabel,$t("#ability-state").textContent=t.abilityLabel,$t("#operator-name").textContent=t.operator.name.toUpperCase()}updateCondition(t){$t("#condition-label").textContent=t}updateMatch(t,e,n,s,r,o){$t("#wave").textContent=String(t).padStart(2,"0"),$t("#wave-state").textContent=e==="INCURSAO"?"INCURSÃO":e==="EXTRACAO"?"EXTRAÇÃO":e,$t("#enemies").textContent=String(n),$t("#objective-label").textContent=s,$t("#objective-fill").style.width=`${Math.round(r*100)}%`,$t("#phase-banner").classList.toggle("show",e==="INTERVALO"),$t("#phase-kicker").textContent=t===0?"PRIMEIRA INCURSÃO":"PRÓXIMA INCURSÃO",$t("#phase-timer").textContent=o.toFixed(1)}updateScore(t,e,n){$t("#score").textContent=Math.floor(t).toString().padStart(6,"0"),$t("#multiplier").textContent=`×${e.toFixed(1)}`,$t("#rank").textContent=n}updateBoss(t,e=1){$t("#boss-bar").classList.toggle("show",!!t),t&&($t("#boss-fill").style.width=`${Math.max(0,t.health/t.spec.health*100)}%`,$t("#boss-phase").textContent=`FASE ${["I","II","III"][e-1]??e}`)}showUpgrades(t,e){const n=$t("#upgrade-panel"),s=$t("#upgrade-cards");s.replaceChildren(),t.forEach((r,o)=>{const a=document.createElement("button");a.className="upgrade-card",a.innerHTML=`<small>${7+o}</small><b>${r.name}</b><span>${r.description}</span><i>${r.level}</i>`,a.addEventListener("click",()=>e(o)),s.append(a)}),n.classList.add("visible")}hideUpgrades(){$t("#upgrade-panel").classList.remove("visible")}showTutorial(t,e,n=7){$t("#tutorial-title").textContent=t,$t("#tutorial-text").textContent=e,$t("#tutorial").classList.add("show"),this.tutorialTimer=n}setScopeDistance(t){const e=document.querySelector("#scope-overlay span");e&&(e.textContent=`8× // DIST ${Math.round(t).toString().padStart(3,"0")}M`)}setRadarDisabled(t){this.radarDisabled=t,$t("#radar").classList.toggle("jammed",t)}updateSpread(t){$t("#crosshair").style.setProperty("--spread",`${de.clamp(t*380,4,28)}px`)}showToast(t){const e=$t("#toast");e.textContent=t,e.classList.add("show"),this.toastTimer=2.4}feed(t,e="info"){const n=document.createElement("span");for(n.className=e,n.textContent=t,$t("#status-feed").prepend(n),this.feedItems.push({element:n,life:3.5});this.feedItems.length>4;)this.feedItems.shift()?.element.remove()}hit(t=!1){const e=$t("#hitmarker");e.textContent=t?"◆":"×",e.classList.remove("show","critical"),t&&e.classList.add("critical"),e.offsetWidth,e.classList.add("show")}soundPulse(){const t=$t("#sound-pulse");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}damageDirection(t,e,n){const s=e.clone().sub(t),r=Math.atan2(s.x,s.z)-n,o=$t("#damage-direction");o.style.transform=`translateX(-50%) rotate(${r}rad)`,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),$t("#damage-flash").classList.remove("show"),$t("#damage-flash").offsetWidth,$t("#damage-flash").classList.add("show")}update(t){this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&$t("#toast").classList.remove("show")),this.tutorialTimer>0&&(this.tutorialTimer-=t,this.tutorialTimer<=0&&$t("#tutorial").classList.remove("show"));for(let e=this.feedItems.length-1;e>=0;e--)this.feedItems[e].life-=t,this.feedItems[e].life<=0&&(this.feedItems[e].element.remove(),this.feedItems.splice(e,1))}drawRadar(t,e,n){const s=$t("#radar canvas"),r=s.getContext("2d");if(r.clearRect(0,0,180,180),r.save(),r.translate(90,90),this.radarDisabled){r.fillStyle="rgba(255,79,216,.18)";for(let o=0;o<34;o++)r.fillRect(-82,Math.random()*164-82,164,Math.random()*2+1);r.fillStyle="#ff4fd8",r.font="700 12px monospace",r.textAlign="center",r.fillText("SINAL BLOQUEADO",0,4),r.restore();return}r.rotate(-e),r.strokeStyle="rgba(106,220,211,.2)";for(const o of[28,55,82])r.beginPath(),r.arc(0,0,o,0,Math.PI*2),r.stroke();for(const o of n){if(!o.alive)continue;const a=o.group.position.clone().sub(t);a.length()>40||(r.fillStyle=o.spec.color,r.fillRect(a.x*2-2,a.z*2-2,o.type==="COMMANDER"?7:4,o.type==="COMMANDER"?7:4))}r.fillStyle="#f3e6ca",r.beginPath(),r.moveTo(0,-5),r.lineTo(4,5),r.lineTo(-4,5),r.fill(),r.restore()}}class $v{constructor(t,e=1){this.scene=t;const n=e<1?18:32,s=e<1?6:12,r=e<1?24:48;for(let o=0;o<n;o++){const a=new Me().setFromPoints([new A,new A]),c=new $s(a,new Gn({color:"#efbd68",transparent:!0,opacity:0}));c.visible=!1,t.add(c),this.tracers.push({line:c,life:0,active:!1})}for(let o=0;o<s;o++){const a=new q(new ps(.88,1,r),new Oe({color:"#ff5a3d",transparent:!0,opacity:0,side:Fe,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.visible=!1,t.add(a),this.pulses.push({mesh:a,life:0,duration:0,radius:1,active:!1})}}scene;tracers=[];pulses=[];tracer(t,e,n){const s=this.tracers.find(r=>!r.active)??this.tracers[0];s.active=!0,s.life=.1,s.line.visible=!0,s.line.material.color.set(n),s.line.material.opacity=.85,s.line.geometry.setFromPoints([t,e])}areaWarning(t,e=5,n=1.25,s="#ff5a3d"){const r=this.pulses.find(o=>!o.active)??this.pulses[0];r.active=!0,r.life=n,r.duration=n,r.radius=e,r.mesh.visible=!0,r.mesh.position.copy(t).setY(t.y+.035),r.mesh.scale.setScalar(e),r.mesh.material.color.set(s)}update(t){for(const e of this.tracers)e.active&&(e.life-=t,e.line.material.opacity=Math.max(0,e.life/.1),e.life<=0&&(e.active=!1,e.line.visible=!1));for(const e of this.pulses){if(!e.active)continue;e.life-=t;const n=1-e.life/e.duration;e.mesh.scale.setScalar(e.radius*(.7+n*.3)),e.mesh.material.opacity=Math.sin(Math.max(0,e.life)*18)*.18+.42*(e.life/e.duration),e.life<=0&&(e.active=!1,e.mesh.visible=!1)}}}const Ql=["ELIMINATE","CAPTURE","DEFEND","HUNT","ESCORT","BLACKOUT","SUPPLY"];class Kv{constructor(t,e){this.level=t,this.drones=e,this.escortPosition.copy(t.objectivePoints.A)}level;drones;wave=0;phase="INTERVALO";timer=3;progress=0;objectiveLabel="PREPARAR";conditionLabel="CONDIÇÃO ESTÁVEL";objective="ELIMINATE";defenseSite="A";radarDisabled=!1;escortPosition=new A;onAnnouncement=(t,e)=>{};onUpgradeRequired=t=>{};onWaveComplete=t=>{};onMissionComplete=t=>{};onExtractionReady=()=>{};difficulty="TACTICAL";deviceScale=1;supplied=new Set;objectiveStartAlive=1;setDifficulty(t){this.difficulty=t}setDeviceScale(t){this.deviceScale=de.clamp(t,.55,1)}resumeAfterUpgrade(){this.phase==="UPGRADE"&&(this.phase="INTERVALO",this.timer=4,this.progress=0,this.objectiveLabel="REABASTECER E REPOSICIONAR")}update(t,e){const n=this.drones.drones.filter(r=>r.alive),s=n.length;if(this.radarDisabled=n.some(r=>r.type==="JAMMER"&&r.group.position.distanceTo(e)<20),!(this.phase==="UPGRADE"||this.phase==="CONCLUIDA")){if(this.phase==="EXTRACAO"){const r=e.distanceTo(this.level.extractionPoint);r<4.6?this.progress=Math.min(1,this.progress+t/2.6):this.progress=Math.max(0,this.progress-t*.18),this.objectiveLabel=r<4.6?`EXTRAINDO OPERADOR // ${Math.round(this.progress*100)}%`:`ALCANCE A ZONA DE EXTRAÇÃO // ${Math.ceil(r)}M`,this.progress>=1&&(this.phase="CONCLUIDA",this.objectiveLabel="EXTRAÇÃO CONFIRMADA",this.onMissionComplete(this.wave));return}if(this.phase==="INTERVALO"){this.timer=Math.max(0,this.timer-t),this.objectiveLabel="REABASTECER",this.timer<=0&&this.startWave(e);return}if(this.objective==="DEFEND"||this.objective==="CAPTURE"){const r=this.level.objectivePoints[this.defenseSite],o=e.distanceTo(r)<7,a=n.some(c=>c.group.position.distanceTo(r)<7);if(o&&!a?this.progress=Math.min(1,this.progress+t/(this.objective==="CAPTURE"?12:18)):o||(this.progress=Math.max(0,this.progress-t/34)),this.objectiveLabel=a?`SETOR ${this.defenseSite} CONTESTADO`:o?`${this.objective==="CAPTURE"?"CAPTURANDO":"DEFENDENDO"} SETOR ${this.defenseSite}`:`RETORNE AO SETOR ${this.defenseSite}`,this.progress>=1){this.drones.destroyAll(),this.finishWave();return}}else if(this.objective==="ESCORT"){const r=this.level.objectivePoints.B,o=e.distanceTo(this.escortPosition)<8;if(o&&(this.escortPosition.lerp(r,t/24),this.progress=1-this.escortPosition.distanceTo(r)/this.level.objectivePoints.A.distanceTo(r)),this.objectiveLabel=o?"ESCOLTANDO NÚCLEO DE DADOS":"RETORNE AO NÚCLEO DE DADOS",this.progress>=.985){this.drones.destroyAll(),this.finishWave();return}}else if(this.objective==="BLACKOUT"){const r=n.filter(o=>o.type==="JAMMER").length;if(this.progress=1-r/Math.max(1,this.objectiveStartAlive),this.objectiveLabel=`DESTRUIR BLOQUEADORES // ${r} RESTANTES`,r===0){this.drones.destroyAll(),this.finishWave();return}}else if(this.objective==="SUPPLY"){if(this.level.ammoPoints.slice(0,3).forEach((r,o)=>{e.distanceTo(r)<2.1&&this.supplied.add(o)}),this.progress=this.supplied.size/3,this.objectiveLabel=`RECUPERAR SUPRIMENTOS // ${this.supplied.size}/3`,this.supplied.size===3){this.drones.destroyAll(),this.finishWave();return}}else if(this.objective==="BOSS"){const r=n.find(o=>o.type==="COMMANDER");this.progress=r?1-r.health/r.spec.health:1,this.objectiveLabel=r?`OBELISCO // NÚCLEO ${Math.ceil(r.health)}`:"OBELISCO DESTRUÍDO"}else this.progress=s?1-s/Math.max(1,this.drones.spawnedThisWave):1,this.objectiveLabel=this.objective==="HUNT"?"CAÇAR UNIDADE DE COMANDO":"ELIMINAR SINAIS";s===0&&this.finishWave()}}startWave(t){this.wave++;const e=this.level.variant==="DUST_FORTRESS"?["SOL ALTO","POEIRA NOS CORREDORES","VENTO DO BASTIÃO"]:this.level.variant==="POOL_COMPLEX"?["ÁGUA CALMA","VAPOR DE CLORO","PISO MOLHADO"]:this.level.variant==="CANYON"?["CÉU ABERTO","TEMPESTADE DE AREIA","VENTO CRUZADO"]:this.level.variant==="FOUNDRY"?["FORNALHA ATIVA","FUMAÇA INDUSTRIAL","SOBRECARGA TÉRMICA"]:this.level.variant==="BLACKSITE"||this.level.variant==="NIGHT_LAB"?["REDE ESTÁVEL","BLECAUTE TÁTICO","SOBRECARGA IÔNICA"]:["CONDIÇÃO ESTÁVEL","BAIXA VISIBILIDADE","INTERFERÊNCIA IÔNICA"];this.conditionLabel=e[(this.wave-1)%e.length],this.objective=this.wave%5===0?"BOSS":Ql[(this.wave-1)%Ql.length],this.phase=this.objective==="BOSS"?"BOSS":this.objective==="DEFEND"||this.objective==="CAPTURE"?"DEFESA":"INCURSAO",this.progress=0,this.supplied.clear(),this.defenseSite=this.wave%2===0?"B":"A",this.escortPosition.copy(this.level.objectivePoints.A);const n=this.composition(this.wave);this.drones.spawnedThisWave=n.length,n.forEach((r,o)=>{const c=(r==="COMMANDER"?{position:new A(0,0,-5)}:this.pickSpawn(t,o)).position.clone();c.x+=(Math.random()-.5)*1.6,c.z+=(Math.random()-.5)*1.6,this.drones.spawn(c,r)}),this.objectiveStartAlive=Math.max(1,n.filter(r=>r==="JAMMER").length);const s=this.objective==="BOSS"?"ALERTA: OBELISCO DE COMANDO":this.objective==="ESCORT"?"ESCOLTE O NÚCLEO DE DADOS":this.objective==="BLACKOUT"?"RESTAURE O RADAR":this.objective==="SUPPLY"?"RECUPERE OS SUPRIMENTOS":this.objective==="DEFEND"||this.objective==="CAPTURE"?`${this.objective==="CAPTURE"?"CAPTURE":"DEFENDA"} O SETOR ${this.defenseSite}`:`INCURSÃO ${String(this.wave).padStart(2,"0")} // ${n.length} SINAIS`;this.onAnnouncement(`${s} // ${this.conditionLabel}`,this.objective==="BOSS"?"danger":"info")}finishWave(){if(!(this.phase==="UPGRADE"||this.phase==="INTERVALO")){if(this.onAnnouncement(`INCURSÃO ${String(this.wave).padStart(2,"0")} CONTIDA`,"success"),this.onWaveComplete(this.wave),this.drones.clear(),this.progress=1,this.objective==="BOSS"&&this.wave>=5){this.phase="EXTRACAO",this.progress=0,this.objectiveLabel="ALCANCE A ZONA DE EXTRAÇÃO",this.onExtractionReady();return}this.phase="UPGRADE",this.objectiveLabel="ESCOLHA UMA MELHORIA",this.onUpgradeRequired(this.wave)}}composition(t){if(t%5===0)return["COMMANDER","SHIELD","JAMMER",t>=10?"ENGINEER":"ASSAULT"];const e=this.difficulty==="RECRUIT"?.78:this.difficulty==="NIGHTMARE"?1.28:1,n=Math.min(Math.ceil((4+t*1.65)*e*this.deviceScale),22),s=[];for(let r=0;r<n;r++)this.objective==="BLACKOUT"&&r<Math.min(3,1+Math.floor(t/4))?s.push("JAMMER"):this.objective==="HUNT"&&r===0?s.push(t>7?"SHIELD":"HEAVY"):t>=6&&r%14===0?s.push("VAPOR"):r%5===1?s.push("RATBOT"):t>=8&&r%11===0?s.push("ENGINEER"):t>=8&&r%13===0?s.push("MORTAR"):t>=7&&r%12===0?s.push("BULWARK"):t>=5&&r%9===0?s.push("WISP"):t>=3&&r%7===0?s.push("TRACKER"):t>=7&&r%10===0?s.push("CLOAKED"):t>=6&&r%9===0?s.push("SHIELD"):t>=4&&r%8===0?s.push("KAMIKAZE"):t>=5&&r%7===0?s.push("HEAVY"):t>=4&&r%6===0?s.push("SUPPORT"):t>=3&&r%5===0?s.push("SNIPER"):r%3===0?s.push("SCOUT"):s.push("ASSAULT");return s}pickSpawn(t,e){const n=this.level.spawnPoints.filter(r=>r.position.distanceTo(t)>18&&!this.drones.lineOfSight(r.position.clone().setY(1.6),t.clone().setY(1.2))),s=n.length?n:this.level.spawnPoints;return s[(e+this.wave*2)%s.length]}}function ea(){return typeof window<"u"?window.localStorage:null}function Zv(i,t){return i||new URLSearchParams(t).has("gamepix")}function $h(){return typeof window<"u"&&Zv(window.self!==window.top,window.location.search)}function na(){return $h()?window.GamePix?.localStorage:void 0}const jr={get(i){return na()?.getItem?.(i)??ea()?.getItem(i)??null},set(i,t){const e=na();e?.setItem?e.setItem(i,t):ea()?.setItem(i,t)},remove(i){const t=na();t?.removeItem?t.removeItem(i):ea()?.removeItem(i)}};class jv{constructor(t){this.callbacks=t}callbacks;api;ready=!1;initialize(){this.api=$h()?window.GamePix:void 0;const t=this.api?.on;t&&(t.pause=this.callbacks.pause,t.resume=this.callbacks.resume,t.soundOn=()=>this.callbacks.sound(!0),t.soundOff=()=>this.callbacks.sound(!1)),this.api?.game?.gameLoading?.(18)}reportLoading(t){this.api?.game?.gameLoading?.(Math.max(0,Math.min(100,Math.round(t))))}completeLoading(t){if(this.ready){t();return}const e=()=>{this.ready||(this.ready=!0,t())},n=this.api?.game;n?.gameLoading?.(100),n?.gameLoaded?n.gameLoaded(e):e()}ping(t,e,n,s={}){this.api?.game?.ping?.(t,{score:Math.max(0,Math.floor(e)),level:String(n),achievements:s})}get language(){return this.api?.lang?.()??(typeof navigator>"u"?"pt":navigator.language.slice(0,2))}}const th="dust-protocol-settings-frontline",eh={sensitivity:1,masterVolume:.75,shake:.8,colorblind:!1,difficulty:"TACTICAL",map:"DESERT",graphics:"AUTO",operator:"VANGUARD",aimAssist:!0};class Jv{value;onChange=t=>{};constructor(){try{this.value={...eh,...JSON.parse(jr.get(th)??"{}")}}catch{this.value={...eh}}}update(t){this.value={...this.value,...t},jr.set(th,JSON.stringify(this.value)),this.applyDocument(),this.onChange(this.value)}applyDocument(){document.documentElement.classList.toggle("colorblind",this.value.colorblind)}bind(){const t=document.querySelector("#setting-sensitivity"),e=document.querySelector("#setting-volume"),n=document.querySelector("#setting-shake"),s=document.querySelector("#setting-colorblind"),r=document.querySelector("#setting-difficulty"),o=document.querySelector("#setting-map"),a=document.querySelector("#setting-graphics"),c=document.querySelector("#setting-aim-assist");!t||!e||!n||!s||!r||!o||!a||!c||(t.value=String(this.value.sensitivity),e.value=String(this.value.masterVolume),n.value=String(this.value.shake),s.checked=this.value.colorblind,r.value=this.value.difficulty,o.value=this.value.map,a.value=this.value.graphics,c.checked=this.value.aimAssist,t.addEventListener("input",()=>this.update({sensitivity:Number(t.value)})),e.addEventListener("input",()=>this.update({masterVolume:Number(e.value)})),n.addEventListener("input",()=>this.update({shake:Number(n.value)})),s.addEventListener("change",()=>this.update({colorblind:s.checked})),r.addEventListener("change",()=>this.update({difficulty:r.value})),o.addEventListener("change",()=>this.update({map:o.value})),a.addEventListener("change",()=>this.update({graphics:a.value})),c.addEventListener("change",()=>this.update({aimAssist:c.checked})),document.querySelectorAll("[data-operator]").forEach(l=>{l.classList.toggle("active",l.dataset.operator===this.value.operator),l.addEventListener("click",()=>{const u=l.dataset.operator;document.querySelectorAll("[data-operator]").forEach(h=>h.classList.toggle("active",h===l)),this.update({operator:u})})}),this.applyDocument())}}const ia=[{id:"DAMAGE",name:"Munição de tungstênio",description:"+18% de dano para todas as armas",color:"#f0b857"},{id:"FIRE_RATE",name:"Ciclo acelerado",description:"+12% de cadência",color:"#ff8069"},{id:"MAG_SIZE",name:"Carregadores estendidos",description:"+25% de munição no pente",color:"#67d8d5"},{id:"FAST_RELOAD",name:"Mãos treinadas",description:"Recargas 20% mais rápidas",color:"#d4c8aa"},{id:"REGEN",name:"Nanorreparo",description:"Regeneração começa mais cedo",color:"#87e188"},{id:"SHIELD",name:"Blindagem reativa",description:"+25 de integridade máxima e imediata",color:"#8fb8ff"},{id:"ARC_RADIUS",name:"Sobrecarga ARC",description:"+35% no raio da explosão",color:"#b89cff"},{id:"SNIPER_PENETRATION",name:"Projétil sabot",description:"Widow atravessa mais dois alvos",color:"#f4eee0"},{id:"INCENDIARY",name:"Carga térmica",description:"Breach causa +12% de dano térmico",color:"#ff784f"}];class Qv{damageMultiplier=1;fireRateMultiplier=1;magMultiplier=1;reloadMultiplier=1;regenDelay=4;arcRadiusMultiplier=1;sniperPenetration=0;incendiary=!1;pending=[];onChoices=t=>{};onApplied=t=>{};levels=new Map;offer(t){const e=t*3%ia.length;return this.pending=[0,1,2].map(n=>{const s=ia[(e+n*2)%ia.length];return{...s,level:`NÍVEL ${(this.levels.get(s.id)??0)+1}`}}),this.onChoices(this.pending),this.pending}choose(t){const e=this.pending[t];if(!e)return null;switch(e.id){case"DAMAGE":this.damageMultiplier*=1.18;break;case"FIRE_RATE":this.fireRateMultiplier*=1.12;break;case"MAG_SIZE":this.magMultiplier*=1.25;break;case"FAST_RELOAD":this.reloadMultiplier*=.8;break;case"REGEN":this.regenDelay=Math.max(1.8,this.regenDelay-.7);break;case"ARC_RADIUS":this.arcRadiusMultiplier*=1.35;break;case"SNIPER_PENETRATION":this.sniperPenetration+=2;break;case"INCENDIARY":this.incendiary=!0;break}return this.levels.set(e.id,(this.levels.get(e.id)??0)+1),this.pending=[],this.onApplied(e),e}}class t_{score=0;multiplier=1;streak=0;bestStreak=0;shots=0;hits=0;lastKill=-99;record=typeof window>"u"?0:Number(jr.get("dust-protocol-record")??0);onChange=()=>{};shot(){this.shots++,this.onChange()}hit(t=!1){this.hits++,t&&(this.score+=Math.round(75*this.multiplier)),this.onChange()}kill(t,e,n){this.streak=n-this.lastKill<4?this.streak+1:1,this.lastKill=n,this.bestStreak=Math.max(this.bestStreak,this.streak),this.multiplier=Math.min(5,1+Math.floor(this.streak/3)*.5);const s=t==="COMMANDER"?5e3:t==="HEAVY"?350:100;this.score+=Math.round((s+(e?100:0))*this.multiplier),this.save(),this.onChange()}damageTaken(){this.multiplier=1,this.streak=0,this.onChange()}get accuracy(){return this.shots?this.hits/this.shots:0}get rank(){const t=this.score+this.accuracy*2500;return t>18e3?"S+":t>12e3?"S":t>8e3?"A":t>4500?"B":t>2e3?"C":"D"}save(){this.score>this.record&&(this.record=this.score,typeof window<"u"&&jr.set("dust-protocol-record",String(this.record)))}}const e_={VANGUARD:{id:"VANGUARD",name:"Vanguard",role:"Linha de frente",description:"Blindagem reforçada e pulso de reparo para sobreviver sob fogo pesado.",healthBonus:35,damageTaken:.84,ability:"PULSO DE ARMADURA",color:"#ffc857"},RECON:{id:"RECON",name:"Recon",role:"Precisão e controle",description:"Varredura EMP revela ameaças, paralisa máquinas próximas e abre janelas para a Widow.",healthBonus:0,damageTaken:1,ability:"VARREDURA EMP",color:"#70e6d8"},ENGINEER:{id:"ENGINEER",name:"Engineer",role:"Controle de área",description:"Instala minas inteligentes que detonam apenas quando uma máquina entra no raio.",healthBonus:15,damageTaken:.94,ability:"MINA SENTINELA",color:"#ff8a55"}};class n_{constructor(t,e){this.scene=t,this.operator=e_[e]}scene;grenadeCooldown=0;abilityCooldown=0;grenades=3;operator;onBlast=(t,e,n)=>{};onFeedback=(t,e)=>{};devices=[];throwFrag(t){if(this.grenadeCooldown>0)return this.onFeedback(`FRAG RECARGA ${this.grenadeCooldown.toFixed(1)}S`,"info"),!1;if(this.grenades<=0)return this.onFeedback("SEM GRANADAS — REABASTEÇA","danger"),!1;const e=new A(0,.08,-1).applyQuaternion(t.quaternion).normalize(),n=this.buildFrag();return n.position.copy(t.position).addScaledVector(e,.8),this.scene.add(n),this.devices.push({kind:"FRAG",mesh:n,velocity:e.multiplyScalar(15).add(new A(0,3.2,0)),fuse:1.65,armed:!0}),this.grenades--,this.grenadeCooldown=1.1,this.onFeedback("FRAG LANÇADA","info"),!0}useAbility(t,e,n,s){if(this.abilityCooldown>0)return this.onFeedback(`${this.operator.ability} ${this.abilityCooldown.toFixed(1)}S`,"info"),!1;if(this.operator.id==="VANGUARD")return s(30),this.abilityCooldown=18,this.onBlast(n.clone().add(new A(0,1,0)),4,this.operator.color),this.onFeedback("ARMADURA RESTAURADA","success"),!0;if(this.operator.id==="RECON"){let a=0;for(const c of e.drones)!c.alive||c.group.position.distanceTo(n)>18||(c.stun(3.2),c.receiveIntel(n),a++,this.onBlast(c.group.position,1.2,this.operator.color));return this.abilityCooldown=16,this.onFeedback(`EMP // ${a} MÁQUINAS PARALISADAS`,"success"),!0}const r=new A(0,0,-1).applyQuaternion(t.quaternion).setY(0).normalize(),o=this.buildMine();return o.position.copy(n).addScaledVector(r,1.4),o.position.y=.04,this.scene.add(o),this.devices.push({kind:"MINE",mesh:o,velocity:new A,fuse:.75,armed:!1}),this.abilityCooldown=8,this.onFeedback("MINA SENTINELA INSTALADA","info"),!0}update(t,e){this.grenadeCooldown=Math.max(0,this.grenadeCooldown-t),this.abilityCooldown=Math.max(0,this.abilityCooldown-t);for(let n=this.devices.length-1;n>=0;n--){const s=this.devices[n];if(s.fuse-=t,s.kind==="FRAG")s.mesh.rotation.x+=t*6,s.mesh.rotation.z+=t*4;else{const r=s.mesh.getObjectByName("mine-core");if(r){r.rotation.y+=t*2.8;const o=r.material;o.emissiveIntensity=s.armed?1.8+Math.sin(performance.now()*.012)*.65:.35}}s.kind==="FRAG"?(s.velocity.y-=12*t,s.mesh.position.addScaledVector(s.velocity,t),s.mesh.position.y<.14&&(s.mesh.position.y=.14,s.velocity.y=Math.abs(s.velocity.y)*.36,s.velocity.x*=.72,s.velocity.z*=.72),s.fuse<=0&&(this.explode(s.mesh.position,e,7,155,"#ff9f45"),this.remove(n))):(!s.armed&&s.fuse<=0&&(s.armed=!0,this.onFeedback("MINA ARMADA","info")),s.armed&&e.drones.find(o=>o.alive&&o.group.position.distanceTo(s.mesh.position)<4.2)&&(this.explode(s.mesh.position,e,6.5,190,"#70e6d8"),this.remove(n)))}}resupply(){this.grenades=3}get grenadeLabel(){return this.grenadeCooldown>0?`${this.grenadeCooldown.toFixed(1)}S`:`FRAG ×${this.grenades}`}get abilityLabel(){return this.abilityCooldown>0?`${this.abilityCooldown.toFixed(1)}S`:this.operator.ability}buildFrag(){const t=new Ae,e=new Ft({color:"#252c28",roughness:.5,metalness:.72}),n=new Ft({color:"#111615",roughness:.26,metalness:.92}),s=new Ft({color:"#b86f25",emissive:"#692606",emissiveIntensity:.55,roughness:.38,metalness:.58}),r=new q(new ne(.135,.155,.3,12),e);r.castShadow=!0,t.add(r);for(const l of[-.1,0,.1]){const u=new q(new Ve(.145,.012,6,16),l===0?s:n);u.rotation.x=Math.PI/2,u.position.y=l,t.add(u)}const o=new q(new ne(.07,.09,.1,10),n);o.position.y=.2,t.add(o);const a=new q(new zt(.06,.07,.2),s);a.position.set(.07,.24,.035),a.rotation.x=-.28,t.add(a);const c=new q(new Ve(.055,.009,6,16),n);return c.rotation.y=Math.PI/2,c.position.set(-.11,.22,0),t.add(c),t}buildMine(){const t=new Ae,e=new Ft({color:"#1b2524",roughness:.38,metalness:.82}),n=new Ft({color:"#101615",roughness:.25,metalness:.92}),s=new Ft({color:"#9ffff0",emissive:"#45dfca",emissiveIntensity:.35,roughness:.15,metalness:.55}),r=new q(new ne(.5,.62,.16,12),e);r.position.y=.08,r.castShadow=!0,t.add(r);const o=new q(new ne(.36,.44,.09,12),n);o.position.y=.2,t.add(o);for(let c=0;c<4;c++){const l=new q(new zt(.18,.06,.68),n);l.position.y=.06,l.rotation.y=c*Math.PI/2,t.add(l);const u=new q(new zt(.22,.08,.18),e);u.position.set(Math.sin(c*Math.PI/2)*.67,.04,Math.cos(c*Math.PI/2)*.67),u.rotation.y=c*Math.PI/2,t.add(u)}const a=new q(new ne(.16,.2,.17,10),s);a.position.y=.3,a.name="mine-core",t.add(a);for(let c=0;c<4;c++){const l=new q(new zt(.07,.025,.16),s);l.position.set(Math.sin(c*Math.PI/2)*.31,.27,Math.cos(c*Math.PI/2)*.31),l.rotation.y=c*Math.PI/2,t.add(l)}return t}explode(t,e,n,s,r){for(const o of e.drones){if(!o.alive)continue;const a=o.group.position.distanceTo(t);a>=n||o.damage(s*(1-a/n*.65),t,!1,"BODY")}this.onBlast(t.clone(),n,r),this.onFeedback("DETONAÇÃO CONFIRMADA","success")}remove(t){const[e]=this.devices.splice(t,1);this.scene.remove(e.mesh)}}const ie=i=>document.querySelector(i),Mn=ie("#game"),oo=ie("#start-screen"),Zs=ie("#hud"),i_=ie("#death-screen"),Pe=new Jv;Pe.bind();const s_=Pe.value.graphics,ri=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Ri=Pe.value.graphics==="LOW"||Pe.value.graphics==="AUTO"&&ri,tc=Pe.value.graphics==="HIGH";let vi=1;const bc=()=>Math.min(devicePixelRatio*(tc?1:vi),Ri?.78:ri?.95:Pe.value.graphics==="MEDIUM"?1.25:1.65),Xe=new xv({antialias:!Ri,powerPreference:"high-performance"});Xe.setPixelRatio(bc());Xe.setSize(innerWidth,innerHeight);Xe.shadowMap.enabled=!Ri;Xe.shadowMap.type=ih;Xe.outputColorSpace=Ke;Xe.toneMapping=rh;Xe.toneMappingExposure=["DUST_FORTRESS","POOL_COMPLEX"].includes(Pe.value.map)?.94:1.08;Mn.prepend(Xe.domElement);const ei={DESERT:{sky:"#ad8561",fog:"#b58d68",hemi:"#f5d8aa",ground:"#403a35",sun:"#ffd69e"},REFINERY:{sky:"#705f51",fog:"#77685c",hemi:"#d6c3a8",ground:"#25292a",sun:"#ffd19a"},NIGHT_LAB:{sky:"#122129",fog:"#172c34",hemi:"#7acbd0",ground:"#11171b",sun:"#8edbe0"},CANYON:{sky:"#b76443",fog:"#a65d42",hemi:"#ffd0a2",ground:"#4b2b26",sun:"#ffe0aa"},FOUNDRY:{sky:"#382f2a",fog:"#4b3930",hemi:"#e2a06e",ground:"#151b1a",sun:"#ff9b62"},BLACKSITE:{sky:"#071217",fog:"#0f2529",hemi:"#76d9d3",ground:"#071011",sun:"#8ef3e6"},DUST_FORTRESS:{sky:"#9db7c2",fog:"#c7b28e",hemi:"#fff0cf",ground:"#514233",sun:"#fff1c2"},POOL_COMPLEX:{sky:"#72b9d1",fog:"#a7d8d8",hemi:"#e8ffff",ground:"#23484d",sun:"#fff4cf"}}[Pe.value.map],Kh=["NIGHT_LAB","BLACKSITE"].includes(Pe.value.map)?.012:.0085,Je=new zd;Je.background=new pt(ei.sky);Je.fog=new gc(ei.fog,Kh);const Zh=new q(new wi(128,32,16),new Wn({side:Ze,depthWrite:!1,fog:!1,uniforms:{topColor:{value:new pt(ei.sky).offsetHSL(0,.08,.13)},horizonColor:{value:new pt(ei.fog).offsetHSL(0,-.04,.08)},groundColor:{value:new pt(ei.ground)}},vertexShader:"varying vec3 vPos; void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vPos; uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 groundColor; void main(){float h=normalize(vPos).y;vec3 c=h>0.0?mix(horizonColor,topColor,smoothstep(0.0,.72,h)):mix(horizonColor,groundColor,smoothstep(0.0,-.35,h));gl_FragColor=vec4(c,1.0);}"}));Zh.renderOrder=-10;Je.add(Zh);const _e=new rn(72,innerWidth/innerHeight,.05,ri?118:155);Je.add(_e);const wc=new si("#ffe1b8",5.2,5,2);wc.position.set(.35,.25,.55);_e.add(wc);Je.add(new Lf(ei.hemi,ei.ground,2.05));const oi=new Uf(ei.sun,Pe.value.map==="NIGHT_LAB"?1.45:["DUST_FORTRESS","POOL_COMPLEX"].includes(Pe.value.map)?2.05:2.75);oi.position.set(-28,44,18);oi.castShadow=!Ri;oi.shadow.mapSize.set(tc?1536:1024,tc?1536:1024);oi.shadow.camera.left=-56;oi.shadow.camera.right=56;oi.shadow.camera.top=56;oi.shadow.camera.bottom=-56;Je.add(oi);const Ce=yv(Pe.value.map);Je.add(Ce.group);const Be=new zv,Se=new Bv,ce=new Vv(Je,Ce,Be),Dt=new Wv(Je,Be),jh=new Xv(Je,Ce),Lt=new qv(Xe.domElement),It=new Yv,Ci=new $v(Je,Ri?.5:ri?.7:1),Qt=new Kv(Ce,ce),Jr=new Qv,be=new t_,ze=new n_(Je,Pe.value.operator);Mn.dataset.operator=ze.operator.id;wc.color.set(ze.operator.color);const r_=new Ft({color:new pt(ze.operator.color).multiplyScalar(.42),roughness:.64,metalness:.28});for(const[i,t,e,n]of[[.16,-.34,-.44,-.35],[.41,-.32,-.72,.28]]){const s=new q(new ne(.055,.075,.31,10),r_);s.position.set(i,t,e),s.rotation.z=n,Dt.model.add(s)}_e.add(Dt.model);Be.setVolume(Pe.value.masterVolume);Lt.sensitivity=Pe.value.sensitivity;Dt.aimAssist=Pe.value.aimAssist;ce.lowPower=Ri;ce.setDifficulty(Pe.value.difficulty);Qt.setDifficulty(Pe.value.difficulty);Qt.setDeviceScale(Ri?.66:ri?.78:1);const ji=new q(new Sc(.55,1),new Ft({color:"#8ff8ff",emissive:"#20aebb",emissiveIntensity:2,metalness:.58,roughness:.2}));ji.visible=!1;Je.add(ji);const sa=ri?1/60:1/120;let je=!1,xn=!1,dn=!1,ii=!1,Jh=!1,ec=performance.now()/1e3,ra=0,kr=0,is=!1,nc=!1,Ge=100+ze.operator.healthBonus,Cn=Ge,Qh=-99,qs=0,Ls=[],oa=0,ss=0,Qr=0,aa=0,o_=0,kn=!1,Ji=0,tu=1,Rs=0,Ir=0,ca=0;const Ns=new A,Vr=[],yn=new URLSearchParams(location.search),eu=location.hostname==="127.0.0.1"&&yn.has("qa"),js=new jv({pause:()=>l_(),resume:()=>h_(),sound:i=>Be.setMuted(!i)});js.initialize();ie("#play-button").disabled=!0;Lt.onFire=i=>Dt.trigger=i;Lt.onAds=i=>Dt.ads=i;Lt.onSelectWeapon=i=>Dt.select(i);Lt.onReload=()=>Dt.startReload();Lt.onJump=()=>Se.jump();Lt.onUseFrag=()=>{je&&(ze.throwFrag(_e),It.updateTactical(ze))};Lt.onUseAbility=()=>{je&&(ze.useAbility(_e,ce,Se.position,i=>{Ge=Math.min(Cn,Ge+i),It.updateVitals(Ge,Cn)}),It.updateTactical(ze))};Lt.onUpgradeChoice=i=>iu(i);Lt.onPauseRequest=()=>ao("Pausa manual. Retome quando estiver pronto.");Lt.onStartRejected=()=>a_("Clique em retomar para continuar a próxima incursão.");Se.onFallDamage=i=>co(i,Se.position.clone().add(new A(0,8,0)));Lt.onDebugToggle=()=>jh.toggle(ce);Lt.onDebugPause=()=>{is=!is,It.showToast(is?"SIMULAÇÃO PAUSADA":"SIMULAÇÃO ATIVA")};Lt.onDebugStep=()=>{is=!0,nc=!0};Lt.onDebugFreeCamera=()=>{kn=!kn,kn&&Ns.copy(_e.position),It.showToast(kn?"CÂMERA LIVRE ATIVA":"CÂMERA DO OPERADOR")};Lt.onDebugTeleport=()=>{const i=[Ce.objectivePoints.A,Ce.objectivePoints.B,new A(0,0,3),new A(0,0,-35)];Se.teleport(i[o_++%i.length].clone().add(new A(0,0,2))),It.showToast("OPERADOR REPOSICIONADO")};Lt.onDebugForceState=()=>{const i=ce.drones.filter(t=>t.alive);i.length?(i[Ji%i.length].forceNextState(),It.showToast(`ESTADO DE D-${String(i[Ji%i.length].id).padStart(2,"0")} AVANÇADO`)):ce.forceStates()};Lt.onDebugSelectDrone=()=>{const i=ce.drones.filter(t=>t.alive);i.length&&(Ji=(Ji+1)%i.length,It.showToast(`SELECIONADO D-${String(i[Ji].id).padStart(2,"0")} ${i[Ji].type}`))};function Rc(i=!1){xn||dn||ii||(je=!0,Mn.classList.add("playing"),oo.classList.remove("visible"),ie("#pause-screen").classList.remove("visible"),Zs.classList.remove("hidden"),qs=qs||performance.now()/1e3,ec=performance.now()/1e3,ie("#pause-reason").textContent="Sinal restabelecido.",i&&It.showTutorial(Lt.touchMode?"CONTROLE DE CAMPO":"ORIENTAÇÃO",Lt.touchMode?"Joystick move · arraste a arena para mirar · FIRE atira · MIRA ativa zoom":"WASD move · CTRL agacha/desliza · Q/E inclina · SHIFT corre ou estabiliza a Widow"))}function ao(i,t=!0,e=!0){!je&&!Lt.active||(je=!1,Mn.classList.remove("playing"),Dt.trigger=!1,Dt.ads=!1,e&&(Lt.touchMode?Lt.endTouchSession():document.pointerLockElement&&document.exitPointerLock()),ie("#pause-screen-reason").textContent=i,t&&!xn&&!dn&&ie("#pause-screen").classList.add("visible"))}function a_(i){xn||dn||ii||(je=!1,Mn.classList.remove("playing"),ie("#pause-screen-reason").textContent=i,ie("#pause-screen").classList.add("visible"))}function Cc(){if(xn||dn||ii||!Jh)return;const i=Lt.requestStart();Be.resume(),i&&Rc(!0)}function c_(){xn||dn||ii||(ie("#pause-screen").classList.remove("visible"),Cc())}function l_(){ii=!0,ao("A plataforma pausou a incursão.",!1,!1)}function h_(){ii=!1,!xn&&!dn&&Lt.active&&(Be.resume(),Rc(!1))}ie("#play-button").addEventListener("click",Cc);ie("#restart-button").addEventListener("click",()=>location.reload());ie("#victory-restart-button").addEventListener("click",()=>location.reload());ie("#resume-button").addEventListener("click",c_);document.addEventListener("pointerlockchange",()=>{Lt.touchMode||(Lt.locked&&!xn&&!dn&&!ii?Rc(!0):!xn&&!dn&&!ii&&je&&ao("Captura do mouse liberada. Retome para continuar.",!0,!1))});document.addEventListener("visibilitychange",()=>{document.hidden&&ao("O jogo foi pausado enquanto esta aba ficou em segundo plano.",!1)});addEventListener("resize",()=>{_e.aspect=innerWidth/innerHeight,_e.updateProjectionMatrix(),Xe.setPixelRatio(bc()),Xe.setSize(innerWidth,innerHeight)});Xe.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),je=!1,Mn.classList.remove("playing"),ie("#context-message").classList.add("visible")});Xe.domElement.addEventListener("webglcontextrestored",()=>{ie("#context-message").classList.remove("visible"),location.reload()});Dt.onSound=i=>{Ls.push(i),It.soundPulse()};Dt.onShot=()=>be.shot();Dt.onHit=i=>{It.hit(i),be.hit(i)};Dt.onKill=(i,t)=>be.kill(i.type,t,performance.now()/1e3);Dt.onShake=i=>{ss=Math.max(ss,i*Pe.value.shake),Qr=.13};Dt.onHud=()=>It.updateWeapon(Dt);Dt.onTracer=(i,t,e)=>Ci.tracer(i,t,e);ze.onBlast=(i,t,e)=>{Be.explosion(),Ci.areaWarning(i,t,.42,e)};ze.onFeedback=(i,t)=>{It.showToast(i),It.feed(i,t)};be.onChange=()=>It.updateScore(be.score,be.multiplier,be.rank);ce.onPlayerDamage=(i,t)=>co(i,t);ce.onDroneKilled=i=>It.feed(`${i.type} D-${String(i.id).padStart(2,"0")} neutralizado`,"success");ce.spawnEnemyTracer=(i,t,e)=>Ci.tracer(i,t,e?"#ff765f":"#efbd68");ce.onSupportPulse=(i,t)=>Ci.tracer(i,t,"#87e188");ce.onJammer=(i,t)=>{t&&It.setRadarDisabled(!0)};ce.onKamikazeBlast=(i,t)=>{Be.explosion(),Ci.areaWarning(i,4,.38,"#ff7a2e"),Se.position.distanceTo(i)<4.2&&co(t,i)};ce.onEngineerDeploy=i=>{i.y=Ce.floorHeightAt(i.x,i.z),ce.spawn(i.add(new A(1.5,0,0)),"TURRET"),It.feed("ENGENHEIRO implantou uma torre","danger")};ce.onBossPhase=(i,t)=>{tu=t,Be.boss(),It.showToast(`OBELISCO // FASE ${t}`)};ce.onCommanderSummon=(i,t)=>{for(let e=0;e<t;e++){const n=e/t*Math.PI*2;ce.spawn(i.clone().add(new A(Math.cos(n)*5,0,Math.sin(n)*5)),t===3?"SHIELD":"SCOUT")}};ce.onBossAttack=(i,t,e)=>{t.y=Ce.floorHeightAt(t.x,t.z);const n=4+e,s=performance.now()/1e3+1.35;Ci.areaWarning(t,n,1.35,"#ff4c3d"),Vr.push({position:t,radius:n,expires:s,damage:18+e*6}),It.feed("ATAQUE DE ÁREA MARCADO","danger")};ce.onStateChange=(i,t,e)=>{e==="COMBATE"?It.feed(`D-${String(i.id).padStart(2,"0")} confirmou contato`,"danger"):e==="SUSPEITA"&&It.feed(`D-${String(i.id).padStart(2,"0")} investigando sinal`,"info")};Qt.onAnnouncement=(i,t)=>{It.showToast(i),It.feed(i,t);const e=Je.fog;e.density=Kh*(Qt.conditionLabel.includes("VISIBILIDADE")||Qt.conditionLabel.includes("FUMAÇA")||Qt.conditionLabel.includes("AREIA")?1.55:Qt.conditionLabel.includes("BLECAUTE")?1.28:1),Qt.objective==="BOSS"&&Be.boss()};Qt.onUpgradeRequired=i=>nu(i);Qt.onExtractionReady=()=>{Ce.extractionBeacon.visible=!0,Be.boss(),It.showToast("EXTRAÇÃO DISPONÍVEL // SIGA O FEIXE"),It.feed("Zona de extração ativada","success")};Qt.onMissionComplete=()=>su();Pe.onChange=i=>{Lt.sensitivity=i.sensitivity,Dt.aimAssist=i.aimAssist,Be.setVolume(i.masterVolume),ce.setDifficulty(i.difficulty),Qt.setDifficulty(i.difficulty),(i.map!==Ce.variant||i.operator!==ze.operator.id||i.graphics!==s_)&&location.reload()};function nu(i){dn=!0,je=!1,Mn.classList.remove("playing"),Dt.trigger=!1,Dt.ads=!1,Lt.touchMode&&Lt.endTouchSession();const t=Jr.offer(i);It.showUpgrades(t,iu),Zs.classList.remove("hidden"),oo.classList.remove("visible"),document.pointerLockElement&&document.exitPointerLock()}function iu(i){if(!dn)return;const t=Jr.choose(i);t&&(t.id==="SHIELD"&&(Cn+=25,Ge=Math.min(Cn,Ge+25)),Dt.applyProgression(Jr),Be.upgrade(),It.showToast(`${t.name.toUpperCase()} INSTALADO`),It.hideUpgrades(),It.updateVitals(Ge,Cn),Qt.resumeAfterUpgrade(),dn=!1,Cc())}function co(i,t){xn||(Ge=Math.max(0,Ge-i*ze.operator.damageTaken),Qh=performance.now()/1e3,ss=.25*Pe.value.shake,Qr=.18,be.damageTaken(),It.damageDirection(Se.position,t,Lt.yaw),It.updateVitals(Ge,Cn),Ge<=0&&u_())}function u_(){xn=!0,je=!1,Mn.classList.remove("playing"),Lt.touchMode&&Lt.endTouchSession(),document.pointerLockElement&&document.exitPointerLock(),Zs.classList.add("hidden"),i_.classList.add("visible");const i=performance.now()/1e3-qs;ie("#sum-wave").textContent=String(Qt.wave),ie("#sum-time").textContent=`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,ie("#sum-accuracy").textContent=`${Math.round(be.accuracy*100)}%`,ie("#sum-hits").textContent=String(be.hits),ie("#sum-score").textContent=String(be.score),ie("#sum-rank").textContent=be.rank,js.ping("game_over",be.score,Qt.wave,{rank:be.rank.charCodeAt(0),accuracy:Math.round(be.accuracy*100)})}function su(){if(xn)return;je=!1,Mn.classList.remove("playing"),Dt.trigger=!1,Dt.ads=!1,Lt.touchMode&&Lt.endTouchSession(),document.pointerLockElement&&document.exitPointerLock(),Zs.classList.add("hidden");const i=performance.now()/1e3-qs;ie("#victory-time").textContent=`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,ie("#victory-score").textContent=String(be.score),ie("#victory-rank").textContent=be.rank,ie("#victory-screen").classList.add("visible"),js.ping("level_complete",be.score,Qt.wave,{rank:be.rank.charCodeAt(0),accuracy:Math.round(be.accuracy*100)})}function d_(i,t){if(!je||dn||is&&!nc)return;nc=!1;const e=Lt.movement();Dt.holdingBreath=Dt.current===3&&Dt.ads&&Lt.sprinting;const n=Lt.sprinting&&!Dt.holdingBreath;if(kn){const o=new A(-Math.sin(Lt.yaw),0,-Math.cos(Lt.yaw)),a=new A(Math.cos(Lt.yaw),0,-Math.sin(Lt.yaw));Ns.addScaledVector(o,e.z*12*i).addScaledVector(a,e.x*12*i),Lt.keys.has("Space")&&(Ns.y+=8*i),Lt.keys.has("ControlLeft")&&(Ns.y-=8*i)}else Se.update(i,e,Lt.yaw,n,Ce.colliders,Lt.crouching);const s=!kn&&e.lengthSq()>0&&Se.grounded;oa-=i,s&&oa<=0&&(oa=Se.sliding?.18:n?.28:Lt.crouching?.58:.42,Be.step(Ce.surfaceAt(Se.position.x,Se.position.z)),Ls.push({position:Se.position.clone(),radius:n?12:Lt.crouching?3:7,time:t,kind:"step"}),It.soundPulse()),Ls=Ls.filter(o=>t-o.time<1.3);const r=Se.position.clone().add(new A(0,1.1,0));ce.update(i,t,r,Ls),Qt.update(i,Se.position),Dt.update(i,t,_e,Ce,ce,Lt.mouseDelta),ze.update(i,ce);for(let o=Vr.length-1;o>=0;o--){if(t<Vr[o].expires)continue;const a=Vr.splice(o,1)[0];Be.explosion(),Se.position.distanceTo(a.position)<a.radius&&co(a.damage,a.position)}t-Qh>Jr.regenDelay&&Ge<Cn&&(Ge=Math.min(Cn,Ge+8*i),It.updateVitals(Ge,Cn)),f_()}function f_(){for(const i of Ce.ammoPoints){if(Se.position.distanceTo(i)>=1.45)continue;const t=Ce.group.children.find(e=>e.name==="ammo"&&e.position.distanceTo(i)<1);t?.visible&&(t.visible=!1,Dt.reserves=Dt.reserves.map((e,n)=>Math.min(e+Tn[n].magSize*2,Tn[n].magSize*6)),ze.resupply(),Be.pickup(),It.showToast("MUNIÇÃO E GRANADAS REABASTECIDAS"),It.updateWeapon(Dt),It.updateTactical(ze),setTimeout(()=>{t.visible=!0},18e3))}}function p_(i,t){Rs=de.damp(Rs,Lt.lean*.09,12,t),_e.rotation.order="YXZ",_e.rotation.y=Lt.yaw+Dt.recoilYaw,_e.rotation.x=Lt.pitch-Dt.recoilPitch,_e.rotation.z=-Rs,kn?_e.position.copy(Ns):(_e.position.copy(Se.position).add(new A(0,Se.eyeHeight,0)),_e.position.x+=Math.cos(Lt.yaw)*Rs*3.5,_e.position.z-=Math.sin(Lt.yaw)*Rs*3.5),Qr>0&&(Qr-=t,_e.position.x+=(Math.random()-.5)*ss,_e.position.y+=(Math.random()-.5)*ss,ss*=.86);const e=Dt.current===3&&Dt.ads&&!kn;Mn.classList.toggle("sniper-scope",e),_e.fov=de.damp(_e.fov,Dt.ads?Dt.current===3?24:54:72,Dt.current===3?9:12,t),_e.updateProjectionMatrix(),Dt.model.position.z=Dt.ads?-.2:0,Dt.model.visible=!kn&&!e,ji.visible=Qt.objective==="ESCORT"&&Qt.phase!=="INTERVALO"&&Qt.phase!=="UPGRADE",ji.position.copy(Qt.escortPosition).setY(Ce.floorHeightAt(Qt.escortPosition.x,Qt.escortPosition.z)+1),ji.rotation.y+=t,ji.rotation.x+=t*.45;for(const n of Ce.extractionBeacon.children)n.userData.extractionRing&&(n.rotation.z+=t*.32),n.userData.extractionColumn&&(n.rotation.y+=t*.7,n.material.opacity=.11+Math.sin(i*3)*.045),n.userData.extractionChevron&&(n.rotation.y+=t*1.8,n.position.y=4.5+Math.sin(i*2.8)*.18);for(const n of Ce.group.children.filter(s=>s.name==="ammo")){n.rotation.y=Math.sin(i*.7+n.position.x)*.025;const s=n.children.find(r=>r.type==="PointLight");s&&(s.intensity=4+Math.sin(i*4+n.position.z)*1.5)}if(e&&Dt.measureRange(_e,Ce),Be.setListener(_e.position,new A(0,0,-1).applyQuaternion(_e.quaternion)),Ci.update(t),It.update(t),It.updateSpread(Dt.currentSpread),It.setScopeDistance(Dt.scopeDistance),aa-=t,aa<=0){aa=ri?.14:.08;const n=ce.drones.filter(r=>r.alive).length,s=ce.drones.find(r=>r.alive&&r.type==="COMMANDER")??null;It.setRadarDisabled(Qt.radarDisabled),It.drawRadar(Se.position,Lt.yaw,ce.drones),It.updateMatch(Qt.wave,Qt.phase,n,Qt.objectiveLabel,Qt.progress,Qt.timer),It.updateWeapon(Dt),It.updateTactical(ze),It.updateCondition(Qt.conditionLabel),It.updateBoss(s,tu),It.updateScore(be.score,be.multiplier,be.rank)}Xe.render(Je,_e),jh.update(i,Xe,Se,ce,Dt,kr,is,Qt.phase)}function m_(i){if(Pe.value.graphics!=="AUTO"||!je||(Ir+=i,ca++,Ir<3))return;const t=ca/Ir,e=vi;t<36?vi=Math.max(.62,vi-.1):t>55&&(vi=Math.min(1,vi+.05)),Ir=0,ca=0,e!==vi&&Xe.setPixelRatio(bc())}function ru(i){requestAnimationFrame(ru);const t=i/1e3,e=Math.min(.1,t-ec);if(ec=t,kr=0,m_(e),je){ra+=e;const n=ri?7:14;for(;ra>=sa&&kr<n;)d_(sa,t),ra-=sa,kr++}p_(t,e)}function ic(i,t){js.reportLoading(i),ie("#boot-fill").style.width=`${i}%`,ie("#boot-percent").textContent=`${i}%`,ie("#boot-status").textContent=t}It.updateVitals(Ge,Cn);It.updateWeapon(Dt);It.updateTactical(ze);It.updateCondition(Qt.conditionLabel);It.updateScore(0,1,"D");It.updateMatch(0,"INTERVALO",0,"PREPARAR",0,3);ic(74,"Construindo setor e malha de navegação");requestAnimationFrame(()=>{ic(92,"Sincronizando arsenal e inteligência de máquinas"),js.completeLoading(()=>{ic(100,"Operação pronta"),Jh=!0,ie("#play-button").disabled=!1,setTimeout(()=>{ie("#loading-screen").classList.remove("visible"),eu||oo.classList.add("visible")},320),ie("#pause-reason").textContent=Lt.touchMode?"Controles por toque prontos. Jogue na horizontal.":"Áudio e captura do mouse serão ativados juntos."})});if(eu){ie("#loading-screen").classList.remove("visible"),Be.resume(),je=!0,Mn.classList.add("playing"),qs=performance.now()/1e3,oo.classList.remove("visible"),Zs.classList.remove("hidden");const i=Number(yn.get("weapon"));Number.isInteger(i)&&i>=0&&i<Tn.length&&Dt.select(i),yn.has("scope")&&(Dt.ads=!0),yn.has("reload")&&(Dt.mags[Dt.current]=Math.max(0,Dt.mags[Dt.current]-12),setTimeout(()=>Dt.startReload(),300)),yn.has("boss")&&(Qt.wave=5,Qt.phase="BOSS",Qt.objective="BOSS",ce.spawn(new A(0,0,18),"COMMANDER")),yn.has("extraction")&&(Qt.wave=5,Qt.phase="EXTRACAO",Qt.objective="BOSS",Ce.extractionBeacon.visible=!0,Se.teleport(Ce.extractionPoint.clone().add(new A(0,0,-8))),Lt.yaw=Math.PI),yn.has("crate")&&Se.teleport(Ce.ammoPoints[0].clone().add(new A(0,0,4)));const t=yn.get("enemy");t&&t in qh&&ce.spawn(Se.position.clone().add(new A(0,0,-8)),t),yn.has("upgrades")&&setTimeout(()=>nu(1),100),yn.has("victory")&&setTimeout(su,120)}requestAnimationFrame(ru);
