"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?s.createElement(g,i(i({ref:n},c),{},{components:t})):s.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=t(7462),r=(t(7294),t(3905));const a={id:"uniqueingresshost",title:"Unique Ingress Host"},i="Unique Ingress Host",o={unversionedId:"uniqueingresshost",id:"uniqueingresshost",title:"Unique Ingress Host",description:"Description",source:"@site/docs/uniqueingresshost.md",sourceDirName:".",slug:"/uniqueingresshost",permalink:"/gatekeeper-library/website/uniqueingresshost",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/uniqueingresshost.md",tags:[],version:"current",frontMatter:{id:"uniqueingresshost",title:"Unique Ingress Host"},sidebar:"docs",previous:{title:"Storage Class",permalink:"/gatekeeper-library/website/storageclass"},next:{title:"Unique Service Selector",permalink:"/gatekeeper-library/website/uniqueserviceselector"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unique-ingress-host"},"Unique Ingress Host"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires all Ingress rule hosts to be unique.\nDoes not handle hostname wildcards: ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"https://kubernetes.io/docs/concepts/services-networking/ingress/")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8suniqueingresshost\n  annotations:\n    metadata.gatekeeper.sh/title: "Unique Ingress Host"\n    description: >-\n      Requires all Ingress rule hosts to be unique.\n\n      Does not handle hostname wildcards:\n      https://kubernetes.io/docs/concepts/services-networking/ingress/\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sUniqueIngressHost\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8suniqueingresshost\n\n        identical(obj, review) {\n          obj.metadata.namespace == review.object.metadata.namespace\n          obj.metadata.name == review.object.metadata.name\n        }\n\n        violation[{"msg": msg}] {\n          input.review.kind.kind == "Ingress"\n          re_match("^(extensions|networking.k8s.io)$", input.review.kind.group)\n          host := input.review.object.spec.rules[_].host\n          other := data.inventory.namespace[_][otherapiversion]["Ingress"][name]\n          re_match("^(extensions|networking.k8s.io)/.+$", otherapiversion)\n          other.spec.rules[_].host == host\n          not identical(other, input.review)\n          msg := sprintf("ingress host conflicts with an existing ingress <%v>", [host])\n        }\n\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"block-endpoint-default-role"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sUniqueIngressHost\nmetadata:\n  name: unique-ingress-host\nspec:\n  match:\n    kinds:\n      - apiGroups: ["extensions", "networking.k8s.io"]\n        kinds: ["Ingress"]\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-host-allowed\n  namespace: default\nspec:\n  rules:\n  - host: example-allowed-host.example.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/"\n        backend:\n          service:\n            name: nginx\n            port:\n              number: 80\n  - host: example-allowed-host1.example.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/"\n        backend:\n          service:\n            name: nginx2\n            port:\n              number: 80\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-host-disallowed\n  namespace: default\nspec:\n  rules:\n  - host: example-host.example.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/"\n        backend:\n          service:\n            name: nginx\n            port:\n              number: 80\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-host-disallowed2\n  namespace: default\nspec:\n  rules:\n  - host: example-host2.example.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/"\n        backend:\n          service:\n            name: nginx\n            port:\n              number: 80\n  - host: example-host3.example.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/"\n        backend:\n          service:\n            name: nginx2\n            port:\n              number: 80\n\n'))))))}u.isMDXComponent=!0}}]);