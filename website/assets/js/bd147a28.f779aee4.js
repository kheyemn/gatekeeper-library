"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[444],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const a={id:"httpsonly",title:"HTTPS only"},o="HTTPS only",i={unversionedId:"httpsonly",id:"httpsonly",title:"HTTPS only",description:"Description",source:"@site/docs/httpsonly.md",sourceDirName:".",slug:"/httpsonly",permalink:"/gatekeeper-library/website/httpsonly",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/httpsonly.md",tags:[],version:"current",frontMatter:{id:"httpsonly",title:"HTTPS only"},sidebar:"docs",previous:{title:"External IPs",permalink:"/gatekeeper-library/website/externalip"},next:{title:"Image Digests",permalink:"/gatekeeper-library/website/imagedigests"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"https-only"},"HTTPS only"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Requires Ingress resources to be HTTPS only.\nIngress resources must: - include a valid TLS configuration - include the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubernetes.io/ingress.allow-http")," annotation, set to\n",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls"},"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls")),(0,s.kt)("h2",{id:"template"},"Template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8shttpsonly\n  annotations:\n    metadata.gatekeeper.sh/title: "HTTPS only"\n    description: >-\n      Requires Ingress resources to be HTTPS only.\n\n      Ingress resources must:\n      - include a valid TLS configuration\n      - include the `kubernetes.io/ingress.allow-http` annotation, set to\n        `false`.\n\n      https://kubernetes.io/docs/concepts/services-networking/ingress/#tls\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sHttpsOnly\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8shttpsonly\n\n        violation[{"msg": msg}] {\n          input.review.object.kind == "Ingress"\n          re_match("^(extensions|networking.k8s.io)/", input.review.object.apiVersion)\n          ingress := input.review.object\n          not https_complete(ingress)\n          msg := sprintf("Ingress should be https. tls configuration and allow-http=false annotation are required for %v", [ingress.metadata.name])\n        }\n\n        https_complete(ingress) = true {\n          ingress.spec["tls"]\n          count(ingress.spec.tls) > 0\n          ingress.metadata.annotations["kubernetes.io/ingress.allow-http"] == "false"\n        }\n\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"block-endpoint-default-role"),(0,s.kt)("blockquote",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"constraint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sHttpsOnly\nmetadata:\n  name: ingress-https-only\nspec:\n  match:\n    kinds:\n      - apiGroups: ["extensions", "networking.k8s.io"]\n        kinds: ["Ingress"]\n\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-allowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-demo-disallowed\n  annotations:\n    kubernetes.io/ingress.allow-http: "false"\nspec:\n  tls: [{}]\n  rules:\n    - host: example-host.example.com\n      http:\n        paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: nginx\n              port:\n                number: 80\n\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-disallowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-demo-disallowed\nspec:\n  rules:\n    - host: example-host.example.com\n      http:\n        paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: nginx\n              port:\n                number: 80\n\n'))))))}u.isMDXComponent=!0}}]);