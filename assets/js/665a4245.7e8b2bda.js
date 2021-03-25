(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{215:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(466)),i={id:"stack-buttons",title:"TopBar Buttons",sidebar_label:"TopBar Buttons"},s={unversionedId:"docs/stack-buttons",id:"version-7.12.0/docs/stack-buttons",isDocsHomePage:!1,title:"TopBar Buttons",description:"Buttons can be added to the right and left areas of the TopBar. Buttons can have either an icon or a text. They are declared in the the options object and, as with any other option, can be updated dynamically with the Navigation.mergeOptions command.",source:"@site/versioned_docs/version-7.12.0/docs/stack-buttons.mdx",slug:"/docs/stack-buttons",permalink:"/react-native-navigation/docs/stack-buttons",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.12.0/docs/stack-buttons.mdx",version:"7.12.0",sidebar_label:"TopBar Buttons"},c=[{value:"Updating props of custom buttons",id:"updating-props-of-custom-buttons",children:[]},{value:"Setting buttons",id:"setting-buttons",children:[]},{value:"Removing buttons",id:"removing-buttons",children:[]}],u={toc:c};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Buttons can be added to the ",Object(r.b)("a",{parentName:"p",href:"#rightButtons"},"right")," and ",Object(r.b)("a",{parentName:"p",href:"#leftButtons"},"left")," areas of the TopBar. Buttons can have either an icon or a text. They are declared in the the options object and, as with any other option, can be updated dynamically with the ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.mergeOptions")," command."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When using an icon button on ",Object(r.b)("strong",{parentName:"p"},"Android"),", you should always pass a title as well. The title is used when the button is collapsed to the overflow menu and as a tooltip when the button is long pressed.")),Object(r.b)("h1",{id:"overflow-menu"},"Overflow menu"),Object(r.b)("p",null,"It's common practice to group less important actions in a menu or an action sheet."),Object(r.b)("p",null,"To do so on iOS, include a button with a menu icon and open an ",Object(r.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/actionsheetios"},"ActionSheet")," with the relevant actions when the button is clicked."),Object(r.b)("p",null,"On Android, use the ",Object(r.b)("a",{parentName:"p",href:"#showasaction"},"showAsAction")," options to control when the button should appear in the menu."),Object(r.b)("h1",{id:"left-button"},"Left button"),Object(r.b)("p",null,"Left buttons behave like right buttons with two caveats on Android:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Only a single left button is alowed"),Object(r.b)("li",{parentName:"ul"},"Textual left button isn't supported")),Object(r.b)("h1",{id:"using-a-react-component-in-a-button"},"Using a react component in a button"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0fAt the moment, Android only supports using custom buttons in ",Object(r.b)("inlineCode",{parentName:"p"},"rightButtons"),".")),Object(r.b)("p",null,"Sometimes we require more from our buttons. In order to support every product need React Components can be used as custom views of buttons.\nTo do so, you'll first need to register the view with Navigation, just like you register your components used as screens:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Navigation.registerComponent('ButtonComponent', () => require('./ButtonComponent'));\n")),Object(r.b)("p",null,"Now you can create buttons which use the component registered with ",Object(r.b)("inlineCode",{parentName:"p"},"'ButtonComponent'")," as thier custom view:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      component: 'ButtonComponent',\n      passProps: {\n        // Pass initial props to the button here\n      },\n    },\n  ];\n}\n")),Object(r.b)("h2",{id:"updating-props-of-custom-buttons"},"Updating props of custom buttons"),Object(r.b)("p",null,"To update props of a mounted compoennt used as a button, you'll first need to assign it a unique id, then call the ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.updateProps()")," command with the id."),Object(r.b)("p",null,"Calling the updateProps command will trigger React's component lifecycle methods related to ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#updating"},"props update")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Declare the button and assign it a unique id\ntopBar: {\n  rightButtons: [\n    {\n      id: 'SomeUniqueId',\n      component: 'ButtonComponent',\n      passProps: {\n        count: 0,\n      },\n    },\n  ];\n}\n\n// Update props\nNavigation.updateProps('SomeUniqueId', {\n  count: 1,\n});\n")),Object(r.b)("h1",{id:"changing-buttons-dynamically"},"Changing buttons dynamically"),Object(r.b)("p",null,"As buttons are part of a screen's options, they can be modified like any other styling option using the ",Object(r.b)("a",{parentName:"p",href:"#"},"mergeOptions")," command."),Object(r.b)("h2",{id:"setting-buttons"},"Setting buttons"),Object(r.b)("p",null,"The following command will set the screen's right buttons. If the screen already has Right Buttons declared - they will be overridden."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  topBar: {\n    rightButtons: [\n      {\n        id: 'myDynamicButton',\n        text: 'My Button',\n      },\n    ],\n  },\n});\n")),Object(r.b)("h2",{id:"removing-buttons"},"Removing buttons"),Object(r.b)("p",null,"Buttons can be removed by setting zero buttons, as shown in the snippet below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  topBar: {\n    rightButtons: [],\n  },\n});\n")))}p.isMDXComponent=!0},466:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a.a.createContext({}),p=function(t){var e=a.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},b=function(t){var e=p(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||l[d]||r;return n?a.a.createElement(m,s(s({ref:e},u),{},{components:n})):a.a.createElement(m,s({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);