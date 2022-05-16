"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{6487:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(7294),l=a(8425),i=a(8596),s=a(5281),o={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},c=a(6010),d=a(9960),m=a(4996),u=a(5999);function v(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function f(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(d.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function b(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return r.createElement("li",(0,n.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,c.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function p(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(d.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,c.Z)("breadcrumbs__link",o.breadcrumbsItemLink),href:e},r.createElement(v,{className:o.breadcrumbHomeIcon})))}function h(){var e=(0,l.s1)(),t=(0,i.Ns)();return e?r.createElement("nav",{className:(0,c.Z)(s.k.docs.docBreadcrumbs,o.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(b,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(f,{href:t.href,isLast:n},t.label))})))):null}},9456:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var n=a(7294),r=a(6010),l=a(1101),i=a(4474),s=a(7597),o=a(5999),c=a(5281);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(m,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(6753),f=a(62),b="lastUpdated_foO9";function p(e){return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(f.Z,e)))}function h(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(v.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",b)},(a||l)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function E(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||l||s);return d||m?n.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(p,{tags:o}),m&&n.createElement(h,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var g=a(1575),L=a(6043),N="tocCollapsible_bZGK",Z="tocCollapsibleContent_NNA8",k="tocCollapsibleExpanded_IqtF",C=a(721),_=a(7462),H=a(3366),x="tocCollapsibleButton_l22C",y="tocCollapsibleButtonExpanded_KeTX",T=["collapsed"];function U(e){var t=e.collapsed,a=(0,H.Z)(e,T);return n.createElement("button",(0,_.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",x,!t&&y,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function A(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,L.u)({initialState:!0}),o=s.collapsed,c=s.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(N,!o&&k,a)},n.createElement(U,{collapsed:o,onClick:c}),n.createElement(L.z,{lazy:!0,className:Z,collapsed:o},n.createElement(C.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var w=a(9649),I="docItemContainer_vinB",M="docItemCol_DM6M",B="tocMobile_TmEX",O=a(1944),S=a(7524),V=a(6487),D=a(5290);function R(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,i=a.assets,s=l.keywords,o=r.description,c=r.title,d=null!=(t=i.image)?t:l.image;return n.createElement(O.d,{title:c,description:o,keywords:s,image:d})}function P(e){var t=e.content,a=t.metadata,o=t.frontMatter,d=o.hide_title,m=o.hide_table_of_contents,u=o.toc_min_heading_level,v=o.toc_max_heading_level,f=a.title,b=!d&&void 0===t.contentTitle,p=(0,S.i)(),h=!m&&t.toc&&t.toc.length>0,L=h&&("desktop"===p||"ssr"===p);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!m&&M)},n.createElement(i.Z,null),n.createElement("div",{className:I},n.createElement("article",null,n.createElement(V.Z,null),n.createElement(s.Z,null),h&&n.createElement(A,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,r.Z)(c.k.docs.docTocMobile,B)}),n.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(w.Z,{as:"h1"},f)),n.createElement(D.Z,null,n.createElement(t,null))),n.createElement(E,e)),n.createElement(l.Z,{previous:a.previous,next:a.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(g.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:c.k.docs.docTocDesktop})))}function F(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(O.FG,{className:t},n.createElement(R,e),n.createElement(P,e))}},1101:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),r=a(7294),l=a(5999),i=a(1750);function s(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(i.Z,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},7597:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(5999),l=a(4477),i=a(5281),s=a(6010);function o(e){var t=e.className,a=(0,l.E)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(2263),l=a(9960),i=a(5999),s=a(5551),o=a(373),c=a(5281),d=a(4477),m=a(6010);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,i=(0,r.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,u=(0,o.J)(d).savePreferredVersionName,b=(0,s.Jo)(d),p=b.latestDocSuggestion,h=b.latestVersionSuggestion,E=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,m.Z)(a,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:h.label,to:E.path,onClick:function(){return u(h.name)}})))}function p(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),s=a(721),o="tableOfContents_cNA8",c=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294);function i(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var s=l.memo(i),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,o);a>=0?t[a].children.push(l):n.push(l)})),n}function d(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=d({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var m=a(6668);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function v(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function f(){var e=(0,l.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function b(e){var t=(0,l.useRef)(void 0),a=f();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=v(s,{anchorTopOffset:a.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,o=e.linkClassName,u=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,f=void 0===v?void 0:v,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,p),L=(0,m.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return d({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return b((0,l.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[u,f,N,Z])),l.createElement(s,(0,n.Z)({toc:k,className:i,linkClassName:u},g))}}}]);