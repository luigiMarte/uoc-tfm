import{s as j,_ as k,o as c,j as b,w as l,a as e,d as f,t as u,b as r,m as B,Z as v,z as I,r as g,J as N,Q as F,k as P,x,$ as S,y as z,g as J,I as h}from"./index.751f2019.js";import{_ as Q}from"./user_1.3ed1660a.js";import{_ as R,a as T,b as Z,c as q}from"./user_7.fedae654.js";import{_ as E}from"./user_4.d27c347a.js";const O={name:"editProfile",data(){return{cardFields:[],formData:{avatar:"",alias:"",country:"",city:"",postalCode:"",phone:"",aboutMe:"",haveDrone:!1,droneBrand:"",droneModel:"",latitude:"",longitude:"",price:"",website:"",enabled:!1,status:!1},showAvatar:!1,avatarImg:"",selectedAvatar:"",avatarsUrl:"@/assets/img/avatars/",alertVariant:"",alertMessage:"",show:!0,showAlert:!1}},computed:{...j({userDetails:"userInfo"})},methods:{setAvatar(t){console.log("avatar",t),this.formData.avatar=t,this.avatarImg=t;let a="@/assets/img/avatars/user_1.png";this.selectedAvatar=a+t+".png",this.showAvatar=!0},sendForm(){this.$store.dispatch("updateProfile",{avatar:this.formData.avatar,alias:this.formData.alias,country:this.formData.country,city:this.formData.city,postalCode:this.formData.postalCode,phone:this.formData.phone,aboutMe:this.formData.aboutMe,haveDrone:this.formData.haveDrone,droneBrand:this.formData.droneBrand,droneModel:this.formData.droneModel,latitude:this.formData.latitude,longitude:this.formData.longitude,price:this.formData.price,website:this.formData.website}).then(t=>{console.log("Resp desde FORM",t),t.status===200?(this.alertMessage="notification.user_created_success",this.alertVariant="success",this.showAlert=!0,this.showAlert=!1,this.$router.push({path:"dashboard"})):(console.log(t.status),this.alertVariant="danger",this.alertMessage="errors.error_ocurred",this.showAlert=!0,setTimeout(()=>{this.showAlert=!1,this.$router.push({name:"landing"})},2e3))})}}},G=["src"],H={class:"mb-3"},K={cols:"12",class:"card-description"};function L(t,a,V,_,o,m){const d=v,y=I,n=g,p=N,w=F,i=P,D=x,A=S,M=z,U=J,C=h;return c(),b(C,{class:"mt-4 form-container"},{default:l(()=>[e(n,null,{default:l(()=>[e(d,{cols:"2"}),e(d,{cols:"8"},{default:l(()=>[e(y,{modelValue:o.showAlert,"onUpdate:modelValue":a[0]||(a[0]=s=>o.showAlert=s),variant:o.alertVariant},{default:l(()=>[f(u(t.$t(o.alertMessage)),1)]),_:1},8,["modelValue","variant"])]),_:1}),e(d,{cols:"2"})]),_:1}),e(n,null,{default:l(()=>[o.showAvatar&&o.avatarImg?(c(),b(d,{key:0,md:"6"},{default:l(()=>[r("img",{class:"avatar-img",src:require(`@/assets/img/avatars/${t.avatar}.png`),alt:"avatar"},null,8,G)]),_:1})):B("",!0)]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{md:"6"},{default:l(()=>[r("div",null,[r("ul",null,[r("li",null,[e(w,{split:"","split-variant":"outline-secondary",variant:"secondary",text:"Avatar",class:"m-2"},{default:l(()=>[e(p,{href:"#"},{default:l(()=>[r("img",{class:"avatar-img",src:Q,alt:"",onClick:a[1]||(a[1]=s=>m.setAvatar("user_1"))})]),_:1}),e(p,{href:"#"},{default:l(()=>[r("img",{class:"avatar-img",src:R,alt:"",onClick:a[2]||(a[2]=s=>m.setAvatar("user_2"))})]),_:1}),e(p,{href:"#"},{default:l(()=>[r("img",{class:"avatar-img",src:T,alt:"",onClick:a[3]||(a[3]=s=>m.setAvatar("user_3"))})]),_:1}),e(p,{href:"#"},{default:l(()=>[r("img",{class:"avatar-img",src:E,alt:"",onClick:a[4]||(a[4]=s=>m.setAvatar("user_4"))})]),_:1}),e(p,{href:"#"},{default:l(()=>[r("img",{class:"avatar-img",src:Z,alt:"",onClick:a[5]||(a[5]=s=>m.setAvatar("user_4"))})]),_:1}),e(p,{href:"#"},{default:l(()=>[r("img",{class:"avatar-img",src:q,alt:"",onClick:a[6]||(a[6]=s=>m.setAvatar("user_7"))})]),_:1})]),_:1})])])])]),_:1}),e(d,{md:"6"},{default:l(()=>[r("label",null,u(t.$t("alias")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.alias,"onUpdate:modelValue":a[7]||(a[7]=s=>o.formData.alias=s),placeholder:t.userDetails.alias},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("country")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.country,"onUpdate:modelValue":a[8]||(a[8]=s=>o.formData.country=s),placeholder:t.userDetails.country},null,8,["modelValue","placeholder"])]),_:1}),e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("city")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.city,"onUpdate:modelValue":a[9]||(a[9]=s=>o.formData.city=s),placeholder:t.userDetails.city},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("postal_code")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.postalCode,"onUpdate:modelValue":a[10]||(a[10]=s=>o.formData.postalCode=s),placeholder:t.userDetails.postalCode},null,8,["modelValue","placeholder"])]),_:1}),e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("phone")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.phone,"onUpdate:modelValue":a[11]||(a[11]=s=>o.formData.phone=s),placeholder:t.userDetails.phone},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{class:"mb-3 mt-3"},{default:l(()=>[e(A,{label:"Do you have a drone"},{default:l(()=>[e(D,{modelValue:o.formData.haveDrone,"onUpdate:modelValue":a[12]||(a[12]=s=>o.formData.haveDrone=s),"aria-describedby":t.ariaDescribedby,name:"some-radios",value:!0},{default:l(()=>[f("Si")]),_:1},8,["modelValue","aria-describedby"]),e(D,{modelValue:o.formData.haveDrone,"onUpdate:modelValue":a[13]||(a[13]=s=>o.formData.haveDrone=s),"aria-describedby":t.ariaDescribedby,name:"some-radios",value:!1},{default:l(()=>[f("No")]),_:1},8,["modelValue","aria-describedby"])]),_:1})]),_:1})]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("drone_brand")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.droneBrand,"onUpdate:modelValue":a[14]||(a[14]=s=>o.formData.droneBrand=s),placeholder:t.userDetails.droneBrand},null,8,["modelValue","placeholder"])]),_:1}),e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("drone_model")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.droneModel,"onUpdate:modelValue":a[15]||(a[15]=s=>o.formData.droneModel=s),placeholder:t.userDetails.droneModel},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("latitude")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.latitude,"onUpdate:modelValue":a[16]||(a[16]=s=>o.formData.latitude=s),placeholder:t.userDetails.latitude},null,8,["modelValue","placeholder"])]),_:1}),e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("longitude")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.longitude,"onUpdate:modelValue":a[17]||(a[17]=s=>o.formData.longitude=s),placeholder:t.userDetails.longitude},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"card-box mb-3"},{default:l(()=>[e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("price")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.price,"onUpdate:modelValue":a[18]||(a[18]=s=>o.formData.price=s),placeholder:t.userDetails.price},null,8,["modelValue","placeholder"])]),_:1}),e(d,{md:"6",class:"mb-3"},{default:l(()=>[r("label",null,u(t.$t("website")),1),e(i,{class:"input-group-text",id:"subject-id",modelValue:o.formData.website,"onUpdate:modelValue":a[19]||(a[19]=s=>o.formData.website=s),placeholder:t.userDetails.website},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"card-box mt-5 mb-4"},{default:l(()=>[e(d,null,{default:l(()=>[r("label",H,u(t.$t("tell_about_you")),1),e(M,{id:"textarea",modelValue:o.formData.aboutMe,"onUpdate:modelValue":a[20]||(a[20]=s=>o.formData.aboutMe=s),rows:"3","max-rows":"6",placeholder:t.userDetails.aboutMe},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(n,{class:"row-box"},{default:l(()=>[r("div",K,[e(U,{class:"col-12 mt-4",type:"submit",onClick:a[21]||(a[21]=s=>m.sendForm()),variant:"secondary"},{default:l(()=>[f(u(t.$t("buttons.update_profile")),1)]),_:1})])]),_:1})]),_:1})}const W=k(O,[["render",L],["__scopeId","data-v-c3f85523"]]),ae={__name:"EditProfile",setup(t){return(a,V)=>{const _=v,o=g,m=h;return c(),b(m,{class:"mt-4 m-bot-50"},{default:l(()=>[e(o,{class:"justify-content-md-center"},{default:l(()=>[e(_,{cols:"12",md:"10",class:"mt-5 mb-5 p-4"},{default:l(()=>[e(W)]),_:1})]),_:1})]),_:1})}}};export{ae as default};
