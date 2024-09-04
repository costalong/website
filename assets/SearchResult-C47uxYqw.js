import{u as U,g as se,j as le,k as M,l as te,P as ae,m as re,n as oe,i as F,p as b,q as ue,s as Y,h as l,v as ie,R as j,x as ne,y as ce,z as ve,C as he,A as me,B as pe,D as de,E as ye,G as ge,H as Q,I as ke,J as fe,K as He,L as I,M as _,N as we}from"./app-B8qqBVW8.js";const Re=["/","/get-started.html","/install-vuepress.html","/books/cs-basics.html","/demo/","/demo/disable.html","/demo/encryption.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/golang/home.html","/k8s/home.html","/webs/giscus%E4%BD%BF%E7%94%A8.html","/golang/packages/bufio.html","/golang/packages/slices.html","/golang/performance/sentry.html","/golang/tests/goconvey.html","/golang/tests/gomock.html","/golang/tests/gomonkey.html","/golang/tests/sqlmcok.html","/golang/tests/xgo.html","/golang/tools/gvm.html","/k8s/gateway/apisix.html","/k8s/gateway/traefik.html","/k8s/installs/install-error.html","/k8s/installs/ubuntu-install.html","/k8s/resource/pod.html","/k8s/resource/service.html","/k8s/tools/helm.html","/k8s/tools/kubecm.html","/linux/commands/common.html","/404.html","/books/","/golang/","/k8s/","/webs/","/golang/packages/","/golang/performance/","/golang/tests/","/golang/tools/","/k8s/gateway/","/k8s/installs/","/k8s/resource/","/k8s/tools/","/linux/commands/","/linux/"],xe="SEARCH_PRO_QUERY_HISTORY",g=U(xe,[]),be=()=>{const{queryHistoryCount:t}=Q,a=t>0;return{enabled:a,queryHistory:g,addQueryHistory:r=>{a&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=t=>Re[t.id]+("anchor"in t?`#${t.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:B}=Q,k=U(Qe,[]),qe=()=>{const t=B>0;return{enabled:t,resultHistory:k,addResultHistory:a=>{if(t){const r={link:P(a),display:a.display};"header"in a&&(r.header=a.header),k.value=[r,...k.value.slice(0,B-1)]}},removeResultHistory:a=>{k.value=[...k.value.slice(0,a),...k.value.slice(a+1)]}}},Se=t=>{const a=he(),r=M(),q=me(),u=F(0),w=b(()=>u.value>0),p=pe([]);return de(()=>{const{search:d,terminate:S}=ye(),f=ge(c=>{const H=c.join(" "),{searchFilter:C=m=>m,splitWord:D,suggestionsFilter:O,...y}=a.value;H?(u.value+=1,d(c.join(" "),r.value,y).then(m=>C(m,H,r.value,q.value)).then(m=>{u.value-=1,p.value=m}).catch(m=>{console.warn(m),u.value-=1,u.value||(p.value=[])})):p.value=[]},Q.searchDelay-Q.suggestDelay);Y([t,r],([c])=>f(c),{immediate:!0}),ke(()=>{S()})}),{isSearching:w,results:p}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:a}){const r=le(),q=M(),u=te(ae),{enabled:w,addQueryHistory:p,queryHistory:d,removeQueryHistory:S}=be(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:C}=qe(),D=w||f,O=re(t,"queries"),{results:y,isSearching:m}=Se(O),o=oe({isQuery:!0,index:0}),v=F(0),h=F(0),T=b(()=>D&&(d.value.length>0||c.value.length>0)),L=b(()=>y.value.length>0),E=b(()=>y.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=o;s===0?(o.isQuery=!e,o.index=e?c.value.length-1:d.value.length-1):o.index=s-1},G=()=>{const{isQuery:e,index:s}=o;s===(e?d.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=s+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,h.value=E.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,h.value=0},N=()=>{h.value<E.value.contents.length-1?h.value+=1:K()},V=()=>{h.value>0?h.value-=1:J()},A=e=>e.map(s=>we(s)?s:l(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[i,x=""]=He(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>l("div",A([i,...n,x])))}return e.display.map(s=>l("div",A(s)))},R=()=>{v.value=0,h.value=0,a("updateQuery",""),a("close")},X=()=>w?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.queryHistory),d.value.map((e,s)=>l("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===s}],onClick:()=>{a("updateQuery",e)}},[l(I,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:i=>{i.preventDefault(),i.stopPropagation(),S(s)}})]))])):null,Z=()=>f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,s)=>l(j,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===s}],onClick:()=>{R()}},()=>[l(I,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>A(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:i=>{i.preventDefault(),i.stopPropagation(),C(s)}})]))])):null;return ue("keydown",e=>{if(t.isFocusing){if(L.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=E.value.contents[h.value];p(t.queries.join(" ")),H(s),r.push(P(s)),R()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=o;o.isQuery?(a("updateQuery",d.value[s]),e.preventDefault()):(r.push(c.value[s].link),R())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!L.value:!T.value}],id:"search-pro-results"},t.queries.length?m.value?l(ie,{hint:u.value.searching}):L.value?l("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},i)=>{const x=v.value===i;return l("li",{class:["search-pro-result-list-item",{active:x}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),s.map((n,ee)=>{const $=x&&h.value===ee;return l(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{p(t.queries.join(" ")),H(n),R()}},()=>[n.type==="text"?null:l(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?l("div",{class:"content-header"},n.header):null,l("div",W(n))])])})])})):u.value.emptyResult:D?T.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};
