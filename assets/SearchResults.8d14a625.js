import{_ as $,l as v,o,e as r,w as e,d as s,t as c,c as y,F as L,q as w,a as t,A as B,x as q,Z as u,r as m,I as d}from"./index.a6a8b497.js";const C={name:"searchResults",data(){return{results:[{user:"Johannes",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"},{user:"Juan Pedro",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]}},methods:{goToEdit(){this.$router.push({name:"edit"})}}},I={class:"mb-5"};function E(_,p,f,l,n,i){const h=B,b=q,g=v("RouterLink"),x=u,k=m,R=d;return o(),r(R,{class:"mt-4"},{default:e(()=>[s("h3",I,c(_.$t("results")),1),(o(!0),y(L,null,w(n.results,a=>(o(),r(k,{key:a.user},{default:e(()=>[t(x,{sm:"12",lg:"6"},{default:e(()=>[t(g,{to:"user-contact"},{default:e(()=>[t(b,{"img-src":"https://picsum.photos/150/150","img-alt":"Card image","img-left":"",class:"mb-3"},{default:e(()=>[t(h,null,{default:e(()=>[s("p",null,[s("strong",null,c(a.user),1)]),s("p",null,c(a.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}const F=$(C,[["render",E],["__scopeId","data-v-38a9e651"]]),N={__name:"SearchResults",setup(_){return(p,f)=>{const l=u,n=m,i=d;return o(),r(i,{class:"mt-4 m-bot-50"},{default:e(()=>[t(n,{class:"justify-content-md-center"},{default:e(()=>[t(l,{cols:"12",md:"10",class:"mt-5 mb-5 p-4"},{default:e(()=>[t(F)]),_:1})]),_:1})]),_:1})}}};export{N as default};