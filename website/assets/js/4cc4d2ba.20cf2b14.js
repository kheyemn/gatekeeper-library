"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[532],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),s=(t(7294),t(3905));const i={id:"users",title:"Allowed Users"},a="Allowed Users",o={unversionedId:"users",id:"users",title:"Allowed Users",description:"Description",source:"@site/docs/users.md",sourceDirName:".",slug:"/users",permalink:"/gatekeeper-library/website/users",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/users.md",tags:[],version:"current",frontMatter:{id:"users",title:"Allowed Users"},sidebar:"docs",previous:{title:"SELinux V2",permalink:"/gatekeeper-library/website/selinux"},next:{title:"Volume Types",permalink:"/gatekeeper-library/website/volumes"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],l={toc:u};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"allowed-users"},"Allowed Users"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Controls the user and group IDs of the container and some volumes. Corresponds to the ",(0,s.kt)("inlineCode",{parentName:"p"},"runAsUser"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"runAsGroup"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"supplementalGroups"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"fsGroup")," fields in a PodSecurityPolicy. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#users-and-groups"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#users-and-groups")),(0,s.kt)("h2",{id:"template"},"Template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspallowedusers\n  annotations:\n    metadata.gatekeeper.sh/title: "Allowed Users"\n    description: >-\n      Controls the user and group IDs of the container and some volumes.\n      Corresponds to the `runAsUser`, `runAsGroup`, `supplementalGroups`, and\n      `fsGroup` fields in a PodSecurityPolicy. For more information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#users-and-groups\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPAllowedUsers\n      validation:\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Controls the user and group IDs of the container and some volumes.\n            Corresponds to the `runAsUser`, `runAsGroup`, `supplementalGroups`, and\n            `fsGroup` fields in a PodSecurityPolicy. For more information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#users-and-groups\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            runAsUser:\n              type: object\n              description: "Controls which user ID values are allowed in a Pod or container-level SecurityContext."\n              properties:\n                rule:\n                  type: string\n                  description: "A strategy for applying the runAsUser restriction."\n                  enum:\n                    - MustRunAs\n                    - MustRunAsNonRoot\n                    - RunAsAny\n                ranges:\n                  type: array\n                  description: "A list of user ID ranges affected by the rule."\n                  items:\n                    type: object\n                    description: "The range of user IDs affected by the rule."\n                    properties:\n                      min:\n                        type: integer\n                        description: "The minimum user ID in the range, inclusive."\n                      max:\n                        type: integer\n                        description: "The maximum user ID in the range, inclusive."\n            runAsGroup:\n              type: object\n              description: "Controls which group ID values are allowed in a Pod or container-level SecurityContext."\n              properties:\n                rule:\n                  type: string\n                  description: "A strategy for applying the runAsGroup restriction."\n                  enum:\n                    - MustRunAs\n                    - MayRunAs\n                    - RunAsAny\n                ranges:\n                  type: array\n                  description: "A list of group ID ranges affected by the rule."\n                  items:\n                    type: object\n                    description: "The range of group IDs affected by the rule."\n                    properties:\n                      min:\n                        type: integer\n                        description: "The minimum group ID in the range, inclusive."\n                      max:\n                        type: integer\n                        description: "The maximum group ID in the range, inclusive."\n            supplementalGroups:\n              type: object\n              description: "Controls the supplementalGroups values that are allowed in a Pod or container-level SecurityContext."\n              properties:\n                rule:\n                  type: string\n                  description: "A strategy for applying the supplementalGroups restriction."\n                  enum:\n                    - MustRunAs\n                    - MayRunAs\n                    - RunAsAny\n                ranges:\n                  type: array\n                  description: "A list of group ID ranges affected by the rule."\n                  items:\n                    type: object\n                    description: "The range of group IDs affected by the rule."\n                    properties:\n                      min:\n                        type: integer\n                        description: "The minimum group ID in the range, inclusive."\n                      max:\n                        type: integer\n                        description: "The maximum group ID in the range, inclusive."\n            fsGroup:\n              type: object\n              description: "Controls the fsGroup values that are allowed in a Pod or container-level SecurityContext."\n              properties:\n                rule:\n                  type: string\n                  description: "A strategy for applying the fsGroup restriction."\n                  enum:\n                    - MustRunAs\n                    - MayRunAs\n                    - RunAsAny\n                ranges:\n                  type: array\n                  description: "A list of group ID ranges affected by the rule."\n                  items:\n                    type: object\n                    description: "The range of group IDs affected by the rule."\n                    properties:\n                      min:\n                        type: integer\n                        description: "The minimum group ID in the range, inclusive."\n                      max:\n                        type: integer\n                        description: "The maximum group ID in the range, inclusive."\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspallowedusers\n\n        import data.lib.exempt_container.is_exempt\n\n        violation[{"msg": msg}] {\n          fields := ["runAsUser", "runAsGroup", "supplementalGroups", "fsGroup"]\n          field := fields[_]\n          container := input_containers[_]\n          not is_exempt(container)\n          msg := get_type_violation(field, container)\n        }\n\n        get_type_violation(field, container) = msg {\n          field == "runAsUser"\n          params := input.parameters[field]\n          msg := get_user_violation(params, container)\n        }\n\n        get_type_violation(field, container) = msg {\n          field != "runAsUser"\n          params := input.parameters[field]\n          msg := get_violation(field, params, container)\n        }\n\n        # RunAsUser (separate due to "MustRunAsNonRoot")\n        get_user_violation(params, container) = msg {\n          rule := params.rule\n          provided_user := get_field_value("runAsUser", container, input.review)\n          not accept_users(rule, provided_user)\n          msg := sprintf("Container %v is attempting to run as disallowed user %v. Allowed runAsUser: %v", [container.name, provided_user, params])\n        }\n\n        get_user_violation(params, container) = msg {\n          not get_field_value("runAsUser", container, input.review)\n          params.rule = "MustRunAs"\n          msg := sprintf("Container %v is attempting to run without a required securityContext/runAsUser", [container.name])\n        }\n\n        get_user_violation(params, container) = msg {\n          params.rule = "MustRunAsNonRoot"\n          not get_field_value("runAsUser", container, input.review)\n          not get_field_value("runAsNonRoot", container, input.review)\n          msg := sprintf("Container %v is attempting to run without a required securityContext/runAsNonRoot or securityContext/runAsUser != 0", [container.name])\n        }\n\n        accept_users("RunAsAny", provided_user) {true}\n\n        accept_users("MustRunAsNonRoot", provided_user) = res {res := provided_user != 0}\n\n        accept_users("MustRunAs", provided_user) = res  {\n          ranges := input.parameters.runAsUser.ranges\n          res := is_in_range(provided_user, ranges)\n        }\n\n        # Group Options\n        get_violation(field, params, container) = msg {\n          rule := params.rule\n          provided_value := get_field_value(field, container, input.review)\n          not is_array(provided_value)\n          not accept_value(rule, provided_value, params.ranges)\n          msg := sprintf("Container %v is attempting to run as disallowed group %v. Allowed %v: %v", [container.name, provided_value, field, params])\n        }\n        # SupplementalGroups is array value\n        get_violation(field, params, container) = msg {\n          rule := params.rule\n          array_value := get_field_value(field, container, input.review)\n          is_array(array_value)\n          provided_value := array_value[_]\n          not accept_value(rule, provided_value, params.ranges)\n          msg := sprintf("Container %v is attempting to run with disallowed supplementalGroups %v. Allowed %v: %v", [container.name, array_value, field, params])\n        }\n\n        get_violation(field, params, container) = msg {\n          not get_field_value(field, container, input.review)\n          params.rule == "MustRunAs"\n          msg := sprintf("Container %v is attempting to run without a required securityContext/%v. Allowed %v: %v", [container.name, field, field, params])\n        }\n\n        accept_value("RunAsAny", provided_value, ranges) {true}\n\n        accept_value("MayRunAs", provided_value, ranges) = res { res := is_in_range(provided_value, ranges)}\n\n        accept_value("MustRunAs", provided_value, ranges) = res { res := is_in_range(provided_value, ranges)}\n\n\n        # If container level is provided, that takes precedence\n        get_field_value(field, container, review) = out {\n          container_value := get_seccontext_field(field, container)\n          out := container_value\n        }\n\n        # If no container level exists, use pod level\n        get_field_value(field, container, review) = out {\n          not has_seccontext_field(field, container)\n          review.kind.kind == "Pod"\n          pod_value := get_seccontext_field(field, review.object.spec)\n          out := pod_value\n        }\n\n        # Helper Functions\n        is_in_range(val, ranges) = res {\n          matching := {1 | val >= ranges[j].min; val <= ranges[j].max}\n          res := count(matching) > 0\n        }\n\n        has_seccontext_field(field, obj) {\n          get_seccontext_field(field, obj)\n        }\n\n        has_seccontext_field(field, obj) {\n          get_seccontext_field(field, obj) == false\n        }\n\n        get_seccontext_field(field, obj) = out {\n          out = obj.securityContext[field]\n        }\n\n        input_containers[c] {\n          c := input.review.object.spec.containers[_]\n        }\n        input_containers[c] {\n          c := input.review.object.spec.initContainers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.ephemeralContainers[_]\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"users-and-groups-together"),(0,s.kt)("blockquote",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"constraint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPAllowedUsers\nmetadata:\n  name: psp-pods-allowed-user-ranges\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    runAsUser:\n      rule: MustRunAs # MustRunAsNonRoot # RunAsAny \n      ranges:\n        - min: 100\n          max: 200\n    runAsGroup:\n      rule: MustRunAs # MayRunAs # RunAsAny \n      ranges:\n        - min: 100\n          max: 200\n    supplementalGroups:\n      rule: MustRunAs # MayRunAs # RunAsAny \n      ranges:\n        - min: 100\n          max: 200\n    fsGroup:\n      rule: MustRunAs # MayRunAs # RunAsAny \n      ranges:\n        - min: 100\n          max: 200\n\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-disallowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-users-disallowed\n  labels:\n    app: nginx-users\nspec:\n  securityContext:\n    supplementalGroups:\n      - 250\n    fsGroup: 250\n  containers:\n    - name: nginx\n      image: nginx\n      securityContext:\n        runAsUser: 250\n        runAsGroup: 250\n\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-allowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-users-allowed\n  labels:\n    app: nginx-users\nspec:\n  securityContext:\n    supplementalGroups:\n      - 199\n    fsGroup: 199\n  containers:\n    - name: nginx\n      image: nginx\n      securityContext:\n        runAsUser: 199\n        runAsGroup: 199\n\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"disallowed-ephemeral"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-users-disallowed\n  labels:\n    app: nginx-users\nspec:\n  securityContext:\n    supplementalGroups:\n      - 250\n    fsGroup: 250\n  ephemeralContainers:\n    - name: nginx\n      image: nginx\n      securityContext:\n        runAsUser: 250\n        runAsGroup: 250\n\n"))))))}c.isMDXComponent=!0}}]);