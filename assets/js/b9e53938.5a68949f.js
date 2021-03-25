(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(466)),r=n(470),s=n(471),c={id:"style-options",title:"Styling with options",sidebar_label:"Options"},p={unversionedId:"docs/style-options",id:"version-7.11.2/docs/style-options",isDocsHomePage:!1,title:"Styling with options",description:"A Screen's look and feel is configured with an Options object. Options can be applied to screens in three ways. Each method of applying options has benefits and draw backs which are important be aware of so we can use the right tool for the job.",source:"@site/versioned_docs/version-7.11.2/docs/style-screens.mdx",slug:"/docs/style-options",permalink:"/react-native-navigation/7.11.2/docs/style-options",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.2/docs/style-screens.mdx",version:"7.11.2",sidebar_label:"Options",sidebar:"version-7.11.2/docs",previous:{title:"Overlay",permalink:"/react-native-navigation/7.11.2/docs/overlay"},next:{title:"Themes",permalink:"/react-native-navigation/7.11.2/docs/style-theme"}},l=[{value:"Command options",id:"command-options",children:[]},{value:"Static options",id:"static-options",children:[{value:"Handle props in static options",id:"handle-props-in-static-options",children:[]}]},{value:"Merge options",id:"merge-options",children:[]}],m={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Screen's look and feel is configured with an ",Object(i.b)("a",{parentName:"p",href:"../api/options-root"},"Options")," object. Options can be applied to screens in three ways. Each method of applying options has benefits and draw backs which are important be aware of so we can use the right tool for the job."),Object(i.b)("h2",{id:"command-options"},"Command options"),Object(i.b)("p",null,"Options can be passed to layouts as part of a command. For example when pushing a screen. Options passed in commands are typically dynamic options which are determined at runtime."),Object(i.b)("p",null,"In the example below we're pushing a user profile screen and we'd like show the user name in the title. To do so, we set the title in the component's options."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/command-options.tsx",file:"./style-screens/command-options.tsx"},"import { Navigation } from 'react-native-navigation';\n\nfunction showUserProfileScreen(user: User) {\n  Navigation.push(componentId, {\n    component: {\n      name: 'ProfileScreen',\n      passProps: { user },\n      options: {\n        topBar: {\n          title: {\n            text: user.name,\n          },\n        },\n      },\n    },\n  });\n}\n")),Object(i.b)("p",null,"Notice how the title is actually inferred from the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," object which is set in ",Object(i.b)("inlineCode",{parentName:"p"},"passProps"),". While this works perfectly fine, declaring the title each time a screen is pushed is a bit tedious and error prone. Later on we'll see a more convenient method to declare dynamic options which are inferred from props."),Object(i.b)("h2",{id:"static-options"},"Static options"),Object(i.b)("p",null,"Static options are options that are declared statically ",Object(i.b)("strong",{parentName:"p"},"on")," the component class. Whenever a screen has a known predefined style, static options should be used as they are evaluated immediately when the screen is created."),Object(i.b)(r.a,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"class",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/static-options-class.tsx",file:"./style-screens/static-options-class.tsx"},"import { NavigationComponent, Options } from 'react-native-navigation';\n\nclass MyScreen extends NavigationComponent {\n  static options: Options = {\n    topBar: {\n      title: {\n        text: 'My Screen',\n      },\n    },\n  };\n}\n"))),Object(i.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/static-options-fn.tsx",file:"./style-screens/static-options-fn.tsx"},"import { View } from 'react-native';\nimport { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';\n\nconst MyFunctionalScreen: NavigationFunctionComponent = (props: NavigationComponentProps) => {\n  return <View />;\n};\n\nMyFunctionalScreen.options = {\n  topBar: {\n    title: {\n      text: 'My Screen',\n    },\n  },\n};\n")))),Object(i.b)("h3",{id:"handle-props-in-static-options"},"Handle props in static options"),Object(i.b)("p",null,"Sometimes a screen's style includes properties defined in the calling scope where the screen is used. Like in the user profile screen we've seen above where the the user name is used as the TopBar title. As the user name is unique for each profile, it can't be defined explicitly in the static options."),Object(i.b)("p",null,"Luckily, we can access props from static options and set the title from static options! Let's see how this is done:"),Object(i.b)(r.a,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"class",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/static-options-props-class.tsx",file:"./style-screens/static-options-props-class.tsx"},"import { NavigationComponent, NavigationComponentProps, Options } from 'react-native-navigation';\n\ninterface Props extends NavigationComponentProps {\n  order: OrderDetails;\n}\n\nclass OrderScreen extends NavigationComponent<Props> {\n  static options(props: Props): Options {\n    return {\n      topBar: {\n        title: {\n          text: props.order.orderId,\n        },\n      },\n    };\n  }\n}\n"))),Object(i.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/static-options-props-fn.tsx",file:"./style-screens/static-options-props-fn.tsx"},"import { View } from 'react-native';\nimport { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';\n\ninterface Props extends NavigationComponentProps {\n  order: OrderDetails;\n}\n\nconst OrderScreen: NavigationFunctionComponent<Props> = (props: Props) => {\n  return <View />;\n};\n\nOrderScreen.options = (props: Props) => {\n  return {\n    topBar: {\n      title: {\n        text: props.order.orderId,\n      },\n    },\n  };\n};\n")))),Object(i.b)("p",null,"Following this approach we can determine options that are dependent on other external factors, such as experiments or A/B tests."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/static-options-experiments.tsx",file:"./style-screens/static-options-experiments.tsx"},"import { NavigationComponent, Options } from 'react-native-navigation';\n\nclass ExperimentScreen extends NavigationComponent {\n  static options(): Options {\n    const ExperimentsManager = require('./ExperimentsManager');\n    const food = ExperimentsManager.isActive('VeganExperiment') ? 'Tofu' : 'Hamburger';\n\n    return {\n      topBar: {\n        title: {\n          text: `Hello ${food}!`,\n        },\n      },\n    };\n  }\n}\n")),Object(i.b)("h2",{id:"merge-options"},"Merge options"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," command is used to update a layout's style. Keep in mind that the merge happens in native, and not ins JS. This meaning that if ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," is called to update a screen's options, the static options declared on the React Component are not affected by mergeOptions."),Object(i.b)("p",null,"The following example shows how to update a TopBar background color to red."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./style-screens/merge-options.tsx",file:"./style-screens/merge-options.tsx"},"import { Navigation } from 'react-native-navigation';\n\nNavigation.mergeOptions(componentId, {\n  topBar: {\n    background: {\n      color: 'red',\n    },\n  },\n});\n")),Object(i.b)("hr",null),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Avoid using mergeOptions in a screen's constructor or in componentDidMount!")))),Object(i.b)("p",null,"When a screen first appears, it's ",Object(i.b)("inlineCode",{parentName:"p"},"constructor")," and ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidMount")," functions are called followed by a ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidAppear")," event. (read more about screen lifecycle ",Object(i.b)("a",{parentName:"p",href:"/react-native-navigation/7.11.2/docs/screen-lifecycle"},"here"),")."),Object(i.b)("p",null,"Developers might be tempted to call ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," in constructor or componentDidMount to update options. Calling ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," before the ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidAppear")," event has been received has two very negative effects:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Updating certain options can trigger additional layout and draw cycles which can have serious impact on performance."),Object(i.b)("li",{parentName:"ol"},"Options applied dynamically with the ",Object(i.b)("inlineCode",{parentName:"li"},"mergeOptions")," command might be handled in native ",Object(i.b)("strong",{parentName:"li"},"after")," the screen has already appeared. This will result in noticeable flickering and artifacts as options are updated after the initial options have been applied and are visible to the user.")))}d.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,b=m["".concat(r,".").concat(u)]||m[u]||d[u]||i;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},467:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},468:function(e,t,n){"use strict";var a=n(0),o=n(469);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},469:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},470:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(468),r=n(467),s=n(56),c=n.n(s);var p=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,m=e.values,d=e.groupId,u=e.className,b=Object(i.a)(),f=b.tabGroupChoices,h=b.setTabGroupChoices,v=Object(a.useState)(s),g=v[0],O=v[1],y=a.Children.toArray(e.children),j=[];if(null!=d){var w=f[d];null!=w&&w!==g&&m.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.target,n=j.indexOf(t),a=y[n].props.value;O(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,o,i,r,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,s=r.innerHeight,p=r.innerWidth,n>=0&&i<=p&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case l:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case p:var o=j.indexOf(e.target)-1;n=j[o]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},m.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},471:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);