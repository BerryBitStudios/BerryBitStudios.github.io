import{_ as d,c as r,a,F as _,r as p,o as n,b as u,k as m,t as s}from"./PcpRDNJw.js";const g={class:"team-section"},v={class:"team-grid"},f={class:"team-info"},h={class:"role"},k={class:"bio"},E={__name:"team",setup(x){const i=[{name:"PATTE",role:"Developer",bio:"Founder and creative lead",avatar:"PATTE_avatar.png"},{name:"Kaiwoknats",role:"Developer",bio:"Founder and Code Wizard",avatar:"Kaiwoknats_avatar.png"},{name:"JBunny2k",role:"Art Direction",bio:"3D Artist",avatar:"JBunny2k_avatar.png"}],c=e=>{console.error("Failed to load image:",e.target.src),e.target.src="/images/profilepictures/default_avatar.png"};return(e,o)=>{const l=m;return n(),r("section",g,[o[0]||(o[0]=a("h2",{class:"section-title"},"OUR TEAM",-1)),a("div",v,[(n(),r(_,null,p(i,(t,A)=>a("div",{key:t.name,class:"team-card"},[u(l,{src:`/images/profilepictures/${t.avatar}`,alt:`${t.name}'s profile picture`,class:"avatar",width:"150",height:"150",onError:c},null,8,["src","alt"]),a("div",f,[a("h3",null,s(t.name),1),a("p",h,s(t.role),1),a("p",k,s(t.bio),1)])])),64))])])}}},D=d(E,[["__scopeId","data-v-efda58ee"]]);export{D as default};
