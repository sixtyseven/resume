(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(307),n=a(306),l=a.n(n),o=function(){var e=s.data;return i.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid,alt:"profile image"})},d=a(296),c=a(295),A=a(141);t.default=function(){return i.a.createElement(d.a,null,i.a.createElement(c.a,{title:"Home"}),i.a.createElement("div",{className:"row home-page"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(o,null))),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("h2",null,i.a.createElement(A.b.code,null,"Hi there, ")),i.a.createElement("p",null,i.a.createElement(A.b.code,null,"Welcome to my profile site.")),i.a.createElement("p",null,i.a.createElement(A.b.code,null,"I am a full stack developer.")),i.a.createElement("p",null,i.a.createElement(A.b.code,null,"Cutting edge technology is cool, but I am also interested in fundamental stuff, ie: Math, Data Structures, Algorithms, OOP, SQL etc.")))))}},306:function(e,t,a){"use strict";a(5),a(4),a(2),a(90),a(142),a(209);var r=a(20);t.__esModule=!0,t.default=void 0;var i,s=r(a(12)),n=r(a(47)),l=r(a(116)),o=r(a(52)),d=r(a(0)),c=r(a(48)),A=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=A(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+n+l+a+r+t+s+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(j,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},j=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,A=e.onClick,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},g,{onLoad:n,onError:c,onClick:A,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,B=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:R?1:0,transition:L?"opacity "+h+"ms":"none"},l),N="boolean"==typeof m?"lightgray":m,Q={transitionDelay:h+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&Q,{},l,{},u),x={title:t,alt:this.state.isVisible?"":a,style:k,className:f,itemProp:S};if(g){var V=g,z=V[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),N&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Q)}),z.base64&&d.default.createElement(I,{src:z.base64,spreadProps:x,imageVariants:V,generateSources:v}),z.tracedSVG&&d.default.createElement(I,{src:z.tracedSVG,spreadProps:x,imageVariants:V,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,E(V),d.default.createElement(j,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:w,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:w},z,{imageVariants:V}))}}))}if(p){var P=p,D=P[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},s);return"inherit"===s.display&&delete G.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},N&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:N,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},L&&Q)}),D.base64&&d.default.createElement(I,{src:D.base64,spreadProps:x,imageVariants:P,generateSources:v}),D.tracedSVG&&d.default.createElement(I,{src:D.tracedSVG,spreadProps:x,imageVariants:P,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,E(P),d.default.createElement(j,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:w,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:w},D,{imageVariants:P}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:L,sizes:O,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=R;t.default=N},307:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGCvOthYgr/xAAbEAEBAAEFAAAAAAAAAAAAAAACAzEAARESE//aAAgBAQABBQKZ9KOQ6nE3uG6cnGv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAQAhIhMf/aAAgBAQAGPwJR4+ithOBOv//EABsQAQADAQADAAAAAAAAAAAAAAEAESExQWGB/9oACAEBAAE/Idq0BawzvPCvZvuGCvKT1K4qG3YHCvyf/9oADAMBAAIAAwAAABBcD//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EIf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBUWGRsf/aAAgBAQABPxCpIhX4br8lMMW2Q+/DCC45dwIBsrq5Mv8A6tnDVHyUKPuk/9k=","aspectRatio":1.3333333333333333,"src":"/static/bc1eb9b44e42829097ad4723652469c7/c83a6/haircut.jpg","srcSet":"/static/bc1eb9b44e42829097ad4723652469c7/24f62/haircut.jpg 75w,\\n/static/bc1eb9b44e42829097ad4723652469c7/cb3d3/haircut.jpg 150w,\\n/static/bc1eb9b44e42829097ad4723652469c7/c83a6/haircut.jpg 300w,\\n/static/bc1eb9b44e42829097ad4723652469c7/8539d/haircut.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a2ae084b3f315019cfba.js.map