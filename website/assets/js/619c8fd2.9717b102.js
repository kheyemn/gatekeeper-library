"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5842],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>d});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=l,u=g["".concat(o,".").concat(d)]||g[d]||c[d]||r;return n?t.createElement(u,s(s({ref:a},m),{},{components:n})):t.createElement(u,s({ref:a},m))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},698:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=n(7462),l=(n(7294),n(3905));const r={id:"disallowedtags",title:"Disallow tags"},s="Disallow tags",i={unversionedId:"validation/disallowedtags",id:"validation/disallowedtags",title:"Disallow tags",description:"Description",source:"@site/docs/validation/disallowedtags.md",sourceDirName:"validation",slug:"/validation/disallowedtags",permalink:"/gatekeeper-library/website/validation/disallowedtags",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/validation/disallowedtags.md",tags:[],version:"current",frontMatter:{id:"disallowedtags",title:"Disallow tags"},sidebar:"docs",previous:{title:"Disallow Anonymous Access",permalink:"/gatekeeper-library/website/validation/disallowanonymous"},next:{title:"External IPs",permalink:"/gatekeeper-library/website/validation/externalip"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],m={toc:p};function c(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"disallow-tags"},"Disallow tags"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Requires container images to have an image tag different from the ones in the specified list.\n",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/containers/images/#image-names"},"https://kubernetes.io/docs/concepts/containers/images/#image-names")),(0,l.kt)("h2",{id:"template"},"Template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sdisallowedtags\n  annotations:\n    metadata.gatekeeper.sh/title: "Disallow tags"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Requires container images to have an image tag different from the ones in\n      the specified list.\n\n      https://kubernetes.io/docs/concepts/containers/images/#image-names\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sDisallowedTags\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            tags:\n              type: array\n              description: Disallowed container image tags.\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sdisallowedtags\n\n        import data.lib.exempt_container.is_exempt\n\n        violation[{"msg": msg}] {\n            container := input_containers[_]\n            not is_exempt(container)\n            tags := [forbid | tag = input.parameters.tags[_] ; forbid = endswith(container.image, concat(":", ["", tag]))]\n            any(tags)\n            msg := sprintf("container <%v> uses a disallowed tag <%v>; disallowed tags are %v", [container.name, container.image, input.parameters.tags])\n        }\n\n        violation[{"msg": msg}] {\n            container := input_containers[_]\n            not is_exempt(container)\n            tag := [contains(container.image, ":")]\n            not all(tag)\n            msg := sprintf("container <%v> didn\'t specify an image tag <%v>", [container.name, container.image])\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.containers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.initContainers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.ephemeralContainers[_]\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n\n')),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/template.yaml\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"disallowed-tags"),(0,l.kt)("blockquote",null,(0,l.kt)("details",null,(0,l.kt)("summary",null,"constraint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sDisallowedTags\nmetadata:\n  name: container-image-must-not-have-latest-tag\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n    namespaces:\n      - "default"\n  parameters:\n    tags: ["latest"]\n    exemptImages: ["openpolicyagent/opa-exp:latest", "openpolicyagent/opa-exp2:latest"]\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"allowed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/example_allowed.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"exempt-images-with-disallowed-tags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-exempt-allowed\nspec:\n  containers:\n    - name: opa-exp\n      image: openpolicyagent/opa-exp:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-init\n      image: openpolicyagent/init:v1\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-exp2\n      image: openpolicyagent/opa-exp2:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/example_exempt_image_w_disallowed_tag.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"no-tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/example_no_tag.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"single-disallowed-tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed-2\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/example_disallowed_tag.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"single-disallowed-tag-ephemeral"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed-ephemeral\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n  ephemeralContainers:\n    - name: opa\n      image: openpolicyagent/opa:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/disallowed_tag_ephemeral.yaml\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"some-disallow-tags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed-3\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa-exp:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-init\n      image: openpolicyagent/init:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-exp2\n      image: openpolicyagent/opa-exp2:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-monitor\n      image: openpolicyagent/monitor:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,l.kt)("p",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/example_some_disallowed_tags.yaml\n"))))))}c.isMDXComponent=!0}}]);