import{m as E,_ as F,o as f,c as z,d as r,t as u,a as e,w as o,e as _,f as c,F as N,Z as h,r as V,bP as T,bQ as Z,g as H,bR as L,$ as Q,s as R,bS as J,h as Y,I as y}from"./index.fc05a11d.js";import{d as q,_ as G,b as K,c as O,a as W}from"./IconInstagram.3c25976b.js";import{_ as k}from"./ImageAvatar.ace194f9.js";import X from"./user_1.c5600038.js";import $ from"./user_2.99e68262.js";import ee from"./user_3.c4a28cb1.js";import te from"./user_4.1402c287.js";import ae from"./user_5.db00dc48.js";import oe from"./user_6.e55e5902.js";import le from"./user_8.5392b95d.js";import se from"./user_9.f3aae7de.js";const re={name:"editProfile",components:{ImageAvatar:k},data(){return{cardFields:[],formData:{avatar:"",alias:"",country:"",city:"",postalCode:"",phone:"",aboutMe:"",haveDrone:!1,droneBrand:"",droneModel:"",latitude:"",longitude:"",price:"",website:"",video:"",youtube:"",instagram:"",tiktok:"",twitter:"",facebook:"",enabled:!1,status:!1},showAvatar:!1,avatarImg:"",selectedAvatar:"",avatarsUrl:"@/assets/img/avatars/",show:!0,options:[{value:"dji",text:"Dji"},{value:"autel",text:"Autel"},{value:"hubsan",text:"Hubsan"}],optionsModel:[]}},watch:{"formData.droneBrand"(a){console.log(a),a==="dji"&&(this.optionsModel=[{value:"mini_2",text:"Mini 2"},{value:"mini_3",text:"Mini 3"},{value:"mini_3_pro",text:"Mini 3 Pro"},{value:"avata",text:"Avata"},{value:"mavic_2",text:"Mavic 2"},{value:"mavic_3",text:"Mavic 3"},{value:"air_2",text:"Air 2"},{value:"phantom_3",text:"Phantom 3"}]),a==="autel"&&(this.optionsModel=[{value:"evo_nano",text:"Evo Nano"},{value:"evo_nano_plus",text:"Evo Nano +"},{value:"evo_lite",text:"Evo Lite"},{value:"evo_lite_plus",text:"Evo Lite +"},{value:"evo_2",text:"Evo 2"}]),a==="hubsan"&&(this.optionsModel=[{value:"zino_mini",text:"Zino mini"},{value:"zino_mini_pro",text:"Zino mini pro"},{value:"ace_pro",text:"Ace pro"}])}},created(){this.setHaveDroneValue()},computed:{...E({userDetails:"userInfo"}),isDisabled(){return!(this.username&&this.email&&this.password)}},methods:{setHaveDroneValue(){this.formData.haveDrone=this.userDetails.haveDrone},setAvatar(a){console.log("avatar",a),this.formData.avatar=a,this.avatarImg=a,this.selectedAvatar=a,this.showAvatar=!0},sendForm(){this.$store.dispatch("updateProfile",{avatar:this.formData.avatar,alias:this.formData.alias,country:this.formData.country,city:this.formData.city,postalCode:this.formData.postalCode,phone:this.formData.phone,aboutMe:this.formData.aboutMe,haveDrone:this.formData.haveDrone,droneBrand:this.formData.droneBrand,droneModel:this.formData.droneModel,latitude:this.formData.latitude,longitude:this.formData.longitude,price:this.formData.price,webpage:this.formData.website,video:this.formData.video,youtube:this.formData.youtube,instagram:this.formData.instagram,tiktok:this.formData.tiktok,twitter:this.formData.twitter,facebook:this.formData.facebook}).then(a=>{console.log("Resp desde update form",a),a.status===200?(this.$toast.success(this.$t("notification.user_updated_success")),setTimeout(()=>{this.$router.push({path:"user"})},1e3)):(console.log(a.status),this.$toast.error(this.$t("error.error.ocurred")),setTimeout(()=>{this.showAlert=!1,this.$router.push({name:"landing"})},2e3))})}}},ie={class:"avatar-dropdown"},ue={class:"d-flex mt-3"},ne={class:"d-flex"},me={class:"d-flex"},de={class:"d-flex"},pe={class:"d-flex"},fe={class:"mb-3"},ce={cols:"12",class:"card-description"};function _e(a,t,w,b,s,d){const v=k,i=h,m=V,p=T,x=Z,n=H,D=L,A=Q,g=R,j=q,M=G,U=K,C=O,I=W,P=J,B=Y,S=y;return f(),z(N,null,[r("h3",null,u(a.$t("update_profile")),1),e(S,{class:"mt-4 form-container"},{default:o(()=>[e(m,{class:"card-box mb-3"},{default:o(()=>[s.selectedAvatar?(f(),_(m,{key:0},{default:o(()=>[e(i,{md:"6",class:"mb-4"},{default:o(()=>[e(v,{style:{width:"90px"},imagePath:s.selectedAvatar},null,8,["imagePath"])]),_:1})]),_:1})):(f(),_(m,{key:1},{default:o(()=>[e(i,{md:"6",class:"mb-4"},{default:o(()=>[e(v,{style:{width:"90px"},imagePath:a.userDetails.avatar},null,8,["imagePath"])]),_:1})]),_:1}))]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6"},{default:o(()=>[r("div",ie,[r("ul",null,[r("li",null,[e(x,{split:"","split-variant":"outline-secondary",variant:"secondary",text:this.$t("change_avatar"),class:"m-2"},{default:o(()=>[e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:X,alt:"",onClick:t[0]||(t[0]=l=>d.setAvatar("user_1"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:$,alt:"",onClick:t[1]||(t[1]=l=>d.setAvatar("user_2"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:ee,alt:"",onClick:t[2]||(t[2]=l=>d.setAvatar("user_3"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:te,alt:"",onClick:t[3]||(t[3]=l=>d.setAvatar("user_4"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:ae,alt:"",onClick:t[4]||(t[4]=l=>d.setAvatar("user_5"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:oe,alt:"",onClick:t[5]||(t[5]=l=>d.setAvatar("user_6"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:le,alt:"",onClick:t[6]||(t[6]=l=>d.setAvatar("user_8"))})]),_:1}),e(p,{href:"#"},{default:o(()=>[r("img",{class:"avatar-img",src:se,alt:"",onClick:t[7]||(t[7]=l=>d.setAvatar("user_9"))})]),_:1})]),_:1},8,["text"])])])])]),_:1}),e(i,{md:"6"},{default:o(()=>[r("label",null,u(a.$t("alias")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.alias,"onUpdate:modelValue":t[8]||(t[8]=l=>s.formData.alias=l),placeholder:a.userDetails.alias},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("country")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.country,"onUpdate:modelValue":t[9]||(t[9]=l=>s.formData.country=l),placeholder:a.userDetails.country},null,8,["modelValue","placeholder"])]),_:1}),e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("city")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.city,"onUpdate:modelValue":t[10]||(t[10]=l=>s.formData.city=l),placeholder:a.userDetails.city},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("postal_code")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.postalCode,"onUpdate:modelValue":t[11]||(t[11]=l=>s.formData.postalCode=l),placeholder:a.userDetails.postalCode},null,8,["modelValue","placeholder"])]),_:1}),e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("phone")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.phone,"onUpdate:modelValue":t[12]||(t[12]=l=>s.formData.phone=l),placeholder:a.userDetails.phone},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{class:"mb-3 mt-3"},{default:o(()=>[e(A,{label:"Do you have a drone"},{default:o(()=>[e(D,{modelValue:s.formData.haveDrone,"onUpdate:modelValue":t[13]||(t[13]=l=>s.formData.haveDrone=l),name:"some-radios",value:!0},{default:o(()=>[c(u(a.$t("yes")),1)]),_:1},8,["modelValue"]),e(D,{modelValue:s.formData.haveDrone,"onUpdate:modelValue":t[14]||(t[14]=l=>s.formData.haveDrone=l),name:"some-radios",value:!1},{default:o(()=>[c(u(a.$t("no")),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("drone_brand")),1),e(g,{class:"input-group-text",id:"subject-id",options:s.options,modelValue:s.formData.droneBrand,"onUpdate:modelValue":t[15]||(t[15]=l=>s.formData.droneBrand=l),size:"sm"},null,8,["options","modelValue"])]),_:1}),e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("drone_model")),1),e(g,{class:"input-group-text",id:"subject-id",options:s.optionsModel,modelValue:s.formData.droneModel,"onUpdate:modelValue":t[16]||(t[16]=l=>s.formData.droneModel=l),size:"sm"},null,8,["options","modelValue"])]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("latitude")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.latitude,"onUpdate:modelValue":t[17]||(t[17]=l=>s.formData.latitude=l),placeholder:a.userDetails.latitude},null,8,["modelValue","placeholder"])]),_:1}),e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("longitude")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.longitude,"onUpdate:modelValue":t[18]||(t[18]=l=>s.formData.longitude=l),placeholder:a.userDetails.longitude},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("price")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.price,"onUpdate:modelValue":t[19]||(t[19]=l=>s.formData.price=l),placeholder:a.userDetails.price},null,8,["modelValue","placeholder"])]),_:1}),e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("website")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.website,"onUpdate:modelValue":t[20]||(t[20]=l=>s.formData.website=l),placeholder:a.userDetails.webpage},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(m,{class:"card-box mb-4"},{default:o(()=>[e(i,{md:"6",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("video")),1),e(n,{class:"input-group-text",id:"subject-id",modelValue:s.formData.video,"onUpdate:modelValue":t[21]||(t[21]=l=>s.formData.video=l),placeholder:a.userDetails.video},null,8,["modelValue","placeholder"])]),_:1}),e(i,{md:"6",class:"mb-3"})]),_:1}),e(m,{class:"card-box mb-4 mt-5"},{default:o(()=>[e(i,{md:"8",class:"mb-3"},{default:o(()=>[r("label",null,u(a.$t("social_media")),1),r("div",ue,[e(j,{class:"w-36 iconSm grayscale1"}),e(n,{class:"input-group-text mb-3",id:"subject-id",modelValue:s.formData.youtube,"onUpdate:modelValue":t[22]||(t[22]=l=>s.formData.youtube=l),placeholder:a.userDetails.youtube},null,8,["modelValue","placeholder"])]),r("div",ne,[e(M,{class:"w-36 iconSm grayscale1"}),e(n,{class:"input-group-text mb-3",id:"subject-id",modelValue:s.formData.instagram,"onUpdate:modelValue":t[23]||(t[23]=l=>s.formData.instagram=l),placeholder:a.userDetails.instagram},null,8,["modelValue","placeholder"])]),r("div",me,[e(U,{class:"w-36 iconSm grayscale1"}),e(n,{class:"input-group-text mb-3",id:"subject-id",modelValue:s.formData.tiktok,"onUpdate:modelValue":t[24]||(t[24]=l=>s.formData.tiktok=l),placeholder:a.userDetails.tiktok},null,8,["modelValue","placeholder"])]),r("div",de,[e(C,{class:"w-36 iconSm grayscale1"}),e(n,{class:"input-group-text mb-3",id:"subject-id",modelValue:s.formData.twitter,"onUpdate:modelValue":t[25]||(t[25]=l=>s.formData.twitter=l),placeholder:a.userDetails.twitter},null,8,["modelValue","placeholder"])]),r("div",pe,[e(I,{class:"w-36 iconSm grayscale1"}),e(n,{class:"input-group-text mb-3",id:"subject-id",modelValue:s.formData.facebook,"onUpdate:modelValue":t[26]||(t[26]=l=>s.formData.facebook=l),placeholder:a.userDetails.facebook},null,8,["modelValue","placeholder"])])]),_:1})]),_:1}),e(m,{class:"card-box mt-5 mb-4"},{default:o(()=>[e(i,null,{default:o(()=>[r("label",fe,u(a.$t("tell_about_you")),1),e(P,{id:"textarea",modelValue:s.formData.aboutMe,"onUpdate:modelValue":t[27]||(t[27]=l=>s.formData.aboutMe=l),rows:"3","max-rows":"6",placeholder:a.userDetails.aboutMe},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(m,{class:"row-box"},{default:o(()=>[r("div",ce,[e(B,{class:"col-12 mt-4",type:"submit",onClick:t[28]||(t[28]=l=>d.sendForm()),variant:"primary"},{default:o(()=>[c(u(a.$t("buttons.update_profile")),1)]),_:1})])]),_:1})]),_:1})],64)}const be=F(re,[["render",_e],["__scopeId","data-v-fbc3020f"]]),Me={__name:"EditProfile",setup(a){return(t,w)=>{const b=h,s=V,d=y;return f(),_(d,{class:"mt-4 m-bot-50"},{default:o(()=>[e(s,{class:"justify-content-md-center"},{default:o(()=>[e(b,{cols:"12",md:"10",class:"mt-5 mb-5 p-4"},{default:o(()=>[e(be)]),_:1})]),_:1})]),_:1})}}};export{Me as default};
