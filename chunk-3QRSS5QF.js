import{c as Y,d as J,e as K}from"./chunk-UOLBLFFI.js";import{c as X}from"./chunk-WEHPZSUX.js";import{Na as v,Q,R as Z,S as W,X as f,Z as U,ba as q}from"./chunk-TBQIMUGL.js";import{Ca as z,Hb as M,Hc as G,Lb as T,Mb as A,N as D,Nb as B,Ob as j,Qa as d,Rb as R,Uc as V,Xc as l,Yb as O,Zc as H,dc as P,fa as I,ha as u,nc as k,oa as p,oc as F,q as C,qb as r,qc as $,sc as w,ta as y,tc as L,vb as m,w as N,x as b,xb as E,yb as h,zb as _}from"./chunk-BQVCGR6D.js";var se=(()=>{class i{elementRef;renderer;hidden=null;setHiddenAttribute(){this.hidden?typeof this.hidden=="string"?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden):this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(s,a){this.elementRef=s,this.renderer=a,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}static \u0275fac=function(a){return new(a||i)(r(d),r(m))};static \u0275dir=_({type:i,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["nz-icon"],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[z]})}return i})(),x=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=h({type:i});static \u0275inj=p({})}return i})();var ne=["nz-button",""],ie=["*"];function oe(i,g){i&1&&P(0,"nz-icon",0)}var ee="button",re=(()=>{let i,g=[],s=[];return class S{static{let n=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[W()],N(null,null,i,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:t=>"nzSize"in t,get:t=>t.nzSize,set:(t,e)=>{t.nzSize=e}},metadata:n},g,s),n&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}elementRef;cdr;renderer;nzConfigService;directionality;_nzModuleName=ee;nzIconDirectiveElement;nzBlock=!1;nzGhost=!1;nzSearch=!1;nzLoading=!1;nzDanger=!1;disabled=!1;tabIndex=null;nzType=null;nzShape=null;nzSize=b(this,g,"default");dir=(b(this,s),"ltr");finalSize=H(()=>this.compactSize?this.compactSize():this.size());size=M(this.nzSize);compactSize=y(Y,{optional:!0});destroy$=y(v);loading$=new C;insertSpan(n,t){n.forEach(e=>{if(e.nodeName==="#text"){let o=t.createElement("span"),c=t.parentNode(e);t.insertBefore(c,o,e),t.appendChild(o,e)}})}get iconOnly(){let n=Array.from(this.elementRef?.nativeElement?.childNodes||[]),t=n.every(o=>o.nodeName!=="#text"),e=n.filter(o=>!(o.nodeName==="#comment"||o?.classList?.contains("anticon"))).length==0;return!!this.nzIconDirectiveElement&&e&&t}constructor(n,t,e,o,c){this.elementRef=n,this.cdr=t,this.renderer=e,this.nzConfigService=o,this.directionality=c}ngOnInit(){this.size.set(this.nzSize),this.nzConfigService.getConfigChangeEventForComponent(ee).pipe(u(this.destroy$)).subscribe(()=>{this.size.set(this.nzSize),this.cdr.markForCheck()}),this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,Q(this.elementRef.nativeElement,"click",{capture:!0}).pipe(u(this.destroy$)).subscribe(n=>{(this.disabled&&n.target?.tagName==="A"||this.nzLoading)&&(n.preventDefault(),n.stopImmediatePropagation())})}ngOnChanges({nzLoading:n,nzSize:t}){n&&this.loading$.next(this.nzLoading),t&&this.size.set(t.currentValue)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe(I(this.nzLoading),D(()=>!!this.nzIconDirectiveElement),u(this.destroy$)).subscribe(n=>{let t=this.nzIconDirectiveElement.nativeElement;n?this.renderer.setStyle(t,"display","none"):this.renderer.removeStyle(t,"display")})}static \u0275fac=function(t){return new(t||S)(r(d),r(V),r(m),r(Z),r(q))};static \u0275cmp=E({type:S,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(t,e,o){if(t&1&&$(o,f,5,d),t&2){let c;w(c=L())&&(e.nzIconDirectiveElement=c.first)}},hostAttrs:[1,"ant-btn"],hostVars:34,hostBindings:function(t,e){t&2&&(j("tabindex",e.disabled?-1:e.tabIndex===null?null:e.tabIndex)("disabled",e.disabled||null),R("ant-btn-default",e.nzType==="default")("ant-btn-primary",e.nzType==="primary")("ant-btn-dashed",e.nzType==="dashed")("ant-btn-link",e.nzType==="link")("ant-btn-text",e.nzType==="text")("ant-btn-circle",e.nzShape==="circle")("ant-btn-round",e.nzShape==="round")("ant-btn-lg",e.finalSize()==="large")("ant-btn-sm",e.finalSize()==="small")("ant-btn-dangerous",e.nzDanger)("ant-btn-loading",e.nzLoading)("ant-btn-background-ghost",e.nzGhost)("ant-btn-block",e.nzBlock)("ant-input-search-button",e.nzSearch)("ant-btn-rtl",e.dir==="rtl")("ant-btn-icon-only",e.iconOnly))},inputs:{nzBlock:[2,"nzBlock","nzBlock",l],nzGhost:[2,"nzGhost","nzGhost",l],nzSearch:[2,"nzSearch","nzSearch",l],nzLoading:[2,"nzLoading","nzLoading",l],nzDanger:[2,"nzDanger","nzDanger",l],disabled:[2,"disabled","disabled",l],tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[G([v,{provide:J,useValue:"btn"}]),A,T([K]),z],attrs:ne,ngContentSelectors:ie,decls:2,vars:1,consts:[["nzType","loading"]],template:function(t,e){t&1&&(k(),B(0,oe,1,0,"nz-icon",0),F(1)),t&2&&O(e.nzLoading?0:-1)},dependencies:[U,f],encapsulation:2,changeDetection:0})}})();var Ae=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=h({type:i});static \u0275inj=p({imports:[re,x,X]})}return i})();export{se as a,re as b,Ae as c};
