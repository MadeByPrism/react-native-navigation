(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return v}));var r=n(3),o=n(7),a=(n(0),n(466)),i=n(470),s=n(471),c=n(472),l={id:"overlay",title:"Overlay",sidebar_label:"Overlay"},u={unversionedId:"docs/overlay",id:"version-7.11.2/docs/overlay",isDocsHomePage:!1,title:"Overlay",description:"Overlays are used to layout content on top of all other layout hierarchies, while fitting the screen bounds.",source:"@site/versioned_docs/version-7.11.2/docs/docs-overlay.mdx",slug:"/docs/overlay",permalink:"/react-native-navigation/7.11.2/docs/overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.2/docs/docs-overlay.mdx",version:"7.11.2",sidebar_label:"Overlay",sidebar:"version-7.11.2/docs",previous:{title:"Modal",permalink:"/react-native-navigation/7.11.2/docs/modal"},next:{title:"Styling with options",permalink:"/react-native-navigation/7.11.2/docs/style-options"}},d=[{value:"Handling touch events outside the view",id:"handling-touch-events-outside-the-view",children:[]},{value:"Overlay examples",id:"overlay-examples",children:[]}],b={toc:d};function v(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Overlays are used to layout content on top of all other layout hierarchies, while fitting the screen bounds.\nThe contents displayed in an Overlay can either be non-obtrusive, like Toasts and Snackbars, or an Alert that blocks all interactions with any content behind it. The view contained within it should be aligned either with absolute position, flex, or with margins, all according to your needs."),Object(a.b)("h2",{id:"handling-touch-events-outside-the-view"},"Handling touch events outside the view"),Object(a.b)("p",null,"When showing views like Alert or Toast in an Overlay, you would want to configure if you want to allow users to interact with content behind the alert. This is done via the ",Object(a.b)("a",{parentName:"p",href:"#"},"interceptTouchOutside")," option."),Object(a.b)("h2",{id:"overlay-examples"},"Overlay examples"),Object(a.b)(i.a,{defaultValue:"alert",values:[{label:"Alert",value:"alert"},{label:"Toast",value:"toast"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"alert",mdxType:"TabItem"},Object(a.b)("p",null,"The example below demonstrates how to create a simple alert dialog using an Overlay. Touch events outside the alert will be blocked and won't pass through to the content behind the alert since we're specifying ",Object(a.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: true")," in the static options of the Alert."),Object(a.b)("img",{width:"30%",src:Object(c.a)("/img/alert_android.png")}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const React = require('react');\nconst { Text, Button, View } = require('react-native');\nconst { Navigation } = require('react-native-navigation');\n\nfunction Alert({ componentId, title, message }) {\n  const dismiss = () => Navigation.dismissOverlay(componentId);\n\n  return (\n    <View style={styles.root}>\n      <View style={styles.alert}>\n        <Text style={styles.title}>{title}</Text>\n        <Text style={styles.message}>{message}</Text>\n        <Button title=\"OK\" onPress={dismiss} />\n      </View>\n    </View>\n  );\n}\n\nconst styles = {\n  root: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#00000050',\n  },\n  alert: {\n    alignItems: 'center',\n    backgroundColor: 'whitesmoke',\n    width: 250,\n    elevation: 4,\n    padding: 16,\n  },\n  title: {\n    fontSize: 18,\n  },\n  message: {\n    marginVertical: 8,\n  },\n};\n\nAlert.options = (props) => {\n  return {\n    overlay: {\n      interceptTouchOutside: true,\n    },\n  };\n};\n\nmodule.exports = Alert;\n"))),Object(a.b)(s.a,{value:"toast",mdxType:"TabItem"},Object(a.b)("p",null,"The example below demonstrates how to show a Toast using an Overlay. A user can interact with the content behind the toast since we've declared ",Object(a.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: false")," in the static options of the Alert."),Object(a.b)("img",{width:"30%",src:Object(c.a)("/img/toast_android.png")}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const React = require('react');\nconst { View, Text, StyleSheet, TouchableOpacity } = require('react-native');\nconst Colors = require('../commons/Colors');\nconst Navigation = require('../services/Navigation');\n\nconst Toast = function ({ componentId }) {\n  return (\n    <View style={styles.root}>\n      <View style={styles.toast}>\n        <Text style={styles.text}>This a very important message!</Text>\n        <TouchableOpacity\n          style={styles.button}\n          onPress={() => Navigation.dismissOverlay(componentId)}\n        >\n          <Text style={styles.buttonText}>OK</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    flexDirection: 'column-reverse',\n  },\n  toast: {\n    elevation: 2,\n    flexDirection: 'row',\n    height: 40,\n    margin: 16,\n    borderRadius: 20,\n    backgroundColor: Colors.accent,\n    alignItems: 'center',\n    justifyContent: 'space-between',\n  },\n  text: {\n    color: 'white',\n    fontSize: 16,\n    marginLeft: 16,\n  },\n  button: {\n    marginRight: 16,\n  },\n  buttonText: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 'bold',\n  },\n});\n\nToast.options = {\n  layout: {\n    componentBackgroundColor: 'transparent',\n  },\n  overlay: {\n    interceptTouchOutside: false,\n  },\n};\n\nmodule.exports = Toast;\n")))))}v.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),v=r,p=d["".concat(i,".").concat(v)]||d[v]||b[v]||a;return n?o.a.createElement(p,s(s({ref:t},l),{},{components:n})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},467:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},468:function(e,t,n){"use strict";var r=n(0),o=n(469);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},469:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},470:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(468),i=n(467),s=n(56),c=n.n(s);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,b=e.groupId,v=e.className,p=Object(a.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,h=Object(r.useState)(s),y=h[0],g=h[1],O=r.Children.toArray(e.children),w=[];if(null!=b){var j=f[b];null!=j&&j!==y&&d.some((function(e){return e.value===j}))&&g(j)}var x=function(e){var t=e.target,n=w.indexOf(t),r=O[n].props.value;g(r),null!=b&&(m(b,r),setTimeout((function(){var e,n,r,o,a,i,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&a<=l&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},v)},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},471:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},472:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(473);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},473:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);