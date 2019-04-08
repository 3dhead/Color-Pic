(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,a){e.exports=a(550)},549:function(e,t,a){},550:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(73),l=a.n(r),c=a(20),i=a(62),s=a(245),u=a(17),p=a(18),m=a(22),h=a(19),d=a(21),f=a(50),C=a(63),E=a(560),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement(E.a,{stackable:!0},o.a.createElement(f.b,{to:"/"},o.a.createElement(E.a.Item,{name:"Color Pic",active:"Color Pic"===e,onClick:this.handleItemClick},"Color Pic")),o.a.createElement(f.b,{to:"/MyPallettes"},o.a.createElement(E.a.Item,{name:"My Palettes",active:"My Palettes"===e,onClick:this.handleItemClick},"My Palettes")),o.a.createElement(f.b,{to:"/About"},o.a.createElement(E.a.Item,{name:"About",active:"About"===e,onClick:this.handleItemClick},"About")))}}]),t}(n.Component),O=a(565),y=function(){return o.a.createElement(O.a,{as:"h1",className:"header"},"Choose a picture and analyze")},v=a(78),g=a.n(v),k=new(a(398).App)({apiKey:"bd8644854b19417dacdfa3adba21aab1"});function I(e){return"#"===e.charAt(0)?e.substring(1,7):e}function j(e){return e=parseInt(e,10),isNaN(e)?"00":(e=Math.max(0,Math.min(e,255)),"0123456789ABCDEF".charAt((e-e%16)/16)+"0123456789ABCDEF".charAt(e%16))}var N=function(e){return function(t){k.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e).then(function(e){var a=[];e.outputs[0].data.colors.map(function(e){return a.push(e.raw_hex.slice(1,e.raw_hex.length))}),fetch("/api/colormind?colors="+a).then(function(e){return e.json()}).then(function(e){for(var a,n,o,r=[],l=e,c=0;c<l.length;c++)r.push({hexColor:(a=l[c][0],n=l[c][1],o=l[c][2],"#"+j(a)+j(n)+j(o)),alpha:1});t({type:"ANALYZE_IMAGE",payload:r})})}).catch(function(e){console.log(e),t({type:"ANALYZE_IMAGE_ERROR",error:e.data.status.details})})}},S=function(e,t){return function(a){var n=parseInt(I(e).substring(0,2),16),o=function(e){return parseInt(I(e).substring(2,4),16)}(e),r=function(e){return parseInt(I(e).substring(4,6),16)}(e);a({type:"SEND_COLOR_INFO",hexColor:e,R:n,G:o,B:r,alpha:t})}},A=function(){return function(e){e({type:"CLEAR_RECIEVED",status:""})}},R=function(e){return function(t){t({type:"SEND_POSITION_INFO",position:e})}},P=function(){return function(e){e({type:"CLEAR_POSITION_INFO",position:0})}},D=function(){return function(e){e({type:"CLEAR_COLORS",colors:[]})}},x=function(e){return function(t){t({type:"SELECTED_COLOR",selectedColor:e})}},_=function(e){return{type:"MAIN_IMAGE",url:e}},w=a(65),L=a(564),M=a(556),U=a(563),B=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.clearRecieved(),this.props.clearColorList(),this.props.analyzeImage(this.props.url)}},{key:"componentDidUpdate",value:function(e){if(this.props.url!==e.url&&(this.props.clearColorList(),this.props.analyzeImage(this.props.url)),"recieved"===this.props.status){var t=this.props.colors[0].hexColor,a=this.props.position;this.handleOnClickSquare(t,a,1),this.props.clearRecieved()}}},{key:"handleOnClickSquare",value:function(e,t,a){this.props.sendSelectedColor(e),this.props.sendColorInfo(e,a),this.props.sendPositionInfo(t)}},{key:"renderColor",value:function(e,t){return{backgroundColor:e,opacity:t,cursor:"pointer"}}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"colorsRender",value:function(){var e=this;return this.props.colors.length>=1?this.props.colors.map(function(t,a){return o.a.createElement("div",{key:t.hexColor,className:"color-square-container"},o.a.createElement("div",{className:"color-square",style:e.renderColor(t.hexColor,t.alpha),onClick:function(){return e.handleOnClickSquare(t.hexColor,a,t.alpha)}}),o.a.createElement("div",{style:e.renderCarot(a),className:"carot-container"},o.a.createElement(w.a,{size:"big",name:"caret up"})))}):o.a.createElement("div",{className:"color-loader"},o.a.createElement(L.a,{active:!0,inverted:!0},o.a.createElement(M.a,{size:"big",inverted:!0},"Loading Colors")))}},{key:"render",value:function(){return o.a.createElement(U.a.Column,{width:16},this.colorsRender())}}]),t}(n.Component),T=Object(c.b)(function(e){return{colors:e.colors.colors,selectedColor:e.colorInfo.selectedColor,position:e.colorInfo.position,url:e.url.url,error:e.error,status:e.colors.status}},{analyzeImage:N,sendColorInfo:S,sendPositionInfo:R,sendSelectedColor:x,clearRecieved:A,clearColorList:D})(B),G=a(263),q=Object(c.b)(function(e){return{url:e.url.url}})(function(e){var t=e.url;return o.a.createElement(U.a.Column,{mobile:16,computer:13},o.a.createElement(G.a,{className:"sample-img",src:t,alt:"analyze main"}))}),z=a(557),H=a(165),F=a(121),J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",open:!1,error:!1},a.close=function(){a.setState({input:"",open:!1})},a.closeConfigShow=function(e,t){return function(){a.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"submitURL",value:function(e){e.preventDefault(),this.props.analyzeImage(this.state.input),this.props.changeMainImage(this.state.input),this.props.addImageSelection(this.state.input),this.setState({input:""}),this.close()}},{key:"handleInput",value:function(e){this.setState({input:e.target.value,error:!1})}},{key:"setError",value:function(){this.setState({error:!0})}},{key:"renderURLinput",value:function(){var e=this;return!0===this.state.error?o.a.createElement(z.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Please enter a url...",error:!0}):o.a.createElement(z.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Copy and paste image url..."})}},{key:"renderSubmitButton",value:function(){var e=this;return""===this.state.input?o.a.createElement(H.a,{onClick:function(){return e.setError()},className:"ui button",color:"blue",style:{opacity:.8}},"Submit"):o.a.createElement(H.a,{onClick:function(t){return e.submitURL(t)},className:"ui button",color:"blue"},"Submit")}},{key:"render",value:function(){var e=this.state,t=e.open,a=e.closeOnEscape,n=e.closeOnDimmerClick;return o.a.createElement("div",null,o.a.createElement(H.a,{onClick:this.closeConfigShow(!1,!0)},"Try your own image"),o.a.createElement(F.a,{open:t,closeOnEscape:a,closeOnDimmerClick:n,onClose:this.close},o.a.createElement(F.a.Content,{className:"add-image-modal"},o.a.createElement("h3",null,"Try your own image"),this.renderURLinput(),this.renderSubmitButton())))}}]),t}(n.Component),Q=Object(c.b)(null,{analyzeImage:N,changeMainImage:_,addImageSelection:function(e){return{type:"ADD_URL",url:e}}})(J),W=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearRecieved(),this.props.clearPosition(),this.props.changeMainImage(e)}},{key:"renderBorder",value:function(e){return this.props.url===e?{border:"3px solid #0000CC",opacity:1}:null}},{key:"renderImages",value:function(){var e=this;return this.props.exampleUrl.map(function(t){return o.a.createElement("div",{className:"image-wrapper",key:t},o.a.createElement("img",{className:"image-selection",src:t,alt:"selection",style:e.renderBorder(t),onClick:function(){return e.handleClick(t)}}),o.a.createElement("div",{className:"circle"},o.a.createElement("i",{id:"delete-img",className:"fas fa-times-circle"})))})}},{key:"render",value:function(){return o.a.createElement(U.a.Column,{mobile:16,computer:3},o.a.createElement("div",{className:"image-modal-container"},o.a.createElement("div",{className:"images-container"},this.renderImages()),o.a.createElement("div",{className:"modal-container"},o.a.createElement(Q,null))))}}]),t}(n.Component),Y=Object(c.b)(function(e){return{url:e.url.url,exampleUrl:e.url.exampleImages}},{changeMainImage:_,clearRecieved:A,clearPosition:P,analyzeImage:N})(W),Z=a(94),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e,t){var n=a.props.colors,o={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};n[a.props.position]=o,a.props.updateHexColor(n),a.props.sendColorInfo(e.hex.toUpperCase()),a.props.sendSelectedColor(e.hex.toUpperCase()),a.props.sendAlphaInfo(e.rgb.a)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"renderColorPicker",value:function(){return this.props.colors.length>=1?o.a.createElement("div",{className:"color-picker"},o.a.createElement(Z.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.colors[this.props.position].alpha},onChange:this.handleChange})):o.a.createElement(Z.ChromePicker,{className:"color-picker"})}},{key:"render",value:function(){return o.a.createElement(U.a.Column,{mobile:16,computer:10},this.renderColorPicker())}}]),t}(n.Component),X=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{updateHexColor:function(e){return function(t){t({type:"UPDATE_HEX_COLOR",newColorSet:e})}},sendColorInfo:S,sendSelectedColor:x,sendAlphaInfo:function(e){return function(t){t({type:"SEND_ALPHA_INFO",alpha:e})}}})(V),K=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"color-info"},o.a.createElement("h5",null,"Hex"),o.a.createElement("input",{className:"hex-info-input",value:this.props.hexColor}),o.a.createElement("p",{className:"info-text"},"R"),o.a.createElement("p",{className:"info-text"},"G"),o.a.createElement("p",{className:"info-text"},"B"),o.a.createElement("p",{className:"info-text"},"a"),o.a.createElement("div",null,o.a.createElement("input",{className:"info-input",value:this.props.R}),o.a.createElement("input",{className:"info-input",value:this.props.G}),o.a.createElement("input",{className:"info-input",value:this.props.B}),o.a.createElement("input",{className:"info-input",value:this.props.a})))}}]),t}(n.Component),$=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{})(K),ee=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearColorList(),this.props.clearRecieved(),this.props.clearPosition(),this.props.analyzeImage(e)}},{key:"render",value:function(){var e=this;return o.a.createElement(H.a,{className:"regen-btn",content:"Regenerate",onClick:function(){return e.handleClick(e.props.url)}})}}]),t}(n.Component),te=Object(c.b)(function(e){return{url:e.url.url}},{analyzeImage:N,clearRecieved:A,clearPosition:P,clearColorList:D})(ee),ae=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",open:!1,error:!1},a.closeConfigShow=function(e,t){return function(){a.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},a.close=function(){a.setState({input:"",open:!1,error:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleInput",value:function(e){this.setState({input:e.target.value,error:!1})}},{key:"handleConfirmClick",value:function(){this.props.newColorPalette({title:this.state.input,colors:this.props.colors}),this.close()}},{key:"setError",value:function(){this.setState({error:!0})}},{key:"renderConfirmButton",value:function(){var e=this;return""===this.state.input?o.a.createElement(H.a,{onClick:function(){return e.setError()},color:"blue",style:{opacity:.8}},"Create New"):o.a.createElement(f.b,{to:"/MyPallettes"},o.a.createElement(H.a,{color:"blue",style:{marginLeft:"0.75em"},onClick:function(){return e.handleConfirmClick()}},"Create New"))}},{key:"renderTitleInput",value:function(){var e=this;return!0===this.state.error?o.a.createElement(z.a,{className:"savepalette-modal-input",label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"Title Required...",error:!0}):o.a.createElement(z.a,{className:"savepalette-modal-input",label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"New Palette Name..."})}},{key:"colorsRender",value:function(){return this.props.colors.map(function(e,t){return o.a.createElement("div",{key:e.hexColor,className:"color-square-container"},o.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}),o.a.createElement("p",null,e.hexColor))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.closeOnEscape,r=t.closeOnDimmerClick;return o.a.createElement("div",null,o.a.createElement(H.a,{onClick:this.closeConfigShow(!0,!1)},"Save Palette"),o.a.createElement(F.a,{open:a,closeOnEscape:n,closeOnDimmerClick:r,onClose:this.close},o.a.createElement(F.a.Content,null,o.a.createElement(O.a,{as:"h2"},"Save Palette"),this.renderTitleInput(),o.a.createElement("div",{className:"colors-render"},this.colorsRender())),o.a.createElement(F.a.Actions,null,o.a.createElement(H.a,{onClick:function(){return e.close()}},"Cancel"),this.renderConfirmButton())))}}]),t}(n.Component),ne=Object(c.b)(function(e){return{colors:e.colors.colors}},{newColorPalette:function(e){return function(t){g.a.post("/api/colors",e).then(function(e){return t({type:"ADD_COLORS",payload:e.data})}).catch(function(e){return console.log(e)})}}})(ae),oe=function(e){e.url;return o.a.createElement("div",{className:"footer"},"\xa9 2019")},re=a(558),le=function(){return o.a.createElement("div",{className:"HomePage"},o.a.createElement(re.a,{textAlign:"center"},o.a.createElement(y,null),o.a.createElement(U.a,{celled:!0},o.a.createElement(U.a.Row,null,o.a.createElement(Y,null),o.a.createElement(q,null))),o.a.createElement(U.a,{celled:!0},o.a.createElement(U.a.Row,null,o.a.createElement(T,null))),o.a.createElement(U.a,{celled:!0},o.a.createElement(U.a.Row,null,o.a.createElement(X,null),o.a.createElement(U.a.Column,{mobile:16,computer:6},o.a.createElement($,null),o.a.createElement("div",{className:"regen-save-buttons"},o.a.createElement(te,null),o.a.createElement(ne,null))))),o.a.createElement(oe,null)))},ce=a(559),ie=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.show=function(){a.setState({open:!0})},a.handleConfirm=function(){a.props.deleteColorPalette(a.props.objectID),a.setState({open:!1})},a.handleCancel=function(){a.setState({open:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"confirm-delete-modal"},o.a.createElement(w.a,{size:"large",onClick:this.show,name:"trash alternate"}),o.a.createElement(ce.a,{open:this.state.open,content:"Are you sure you want to delete ".concat(this.props.title," palette?"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,size:"small"}))}}]),t}(n.Component),se=Object(c.b)(function(e){return{deleteColor:e.myPalettes.DeleteColor}},{deleteColorPalette:function(e){return function(t){g.a.delete("/api/colors/".concat(e)).then(function(a){return t({type:"DELETE_COLORS",payload:e})}).catch(function(e){return console.log(e)})}}})(ie),ue=a(561),pe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,title:"",selectedSet:[],position:1},a.cancel=function(){a.setState({open:!1,title:a.props.title,position:1}),a.props.clearPosition()},a.handleConfirm=function(){a.setState({open:!1,position:1});var e={title:a.state.title,colors:a.state.selectedSet};a.props.updateColorPalette(a.props.objectID,e),a.props.clearPosition()},a.closeConfigShow=function(e,t){return function(){a.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({title:this.props.title,selectedSet:this.props.data[this.props.colorPosition].colors}),this.props.clearPosition()}},{key:"editColor",value:function(){}},{key:"handleInput",value:function(e){this.setState({title:e.target.value})}},{key:"handleOnClickSquare",value:function(e){this.props.sendPositionInfo(e)}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"renderOneColorSet",value:function(e,t){var a=this;return e[t].colors.map(function(e,t){return o.a.createElement("div",{className:"color-square-container",key:e.hexColor},o.a.createElement("div",{className:"color-square",onClick:function(){return a.handleOnClickSquare(t)},style:{backgroundColor:e.hexColor,opacity:e.alpha,cursor:"pointer"}}),o.a.createElement("div",{style:a.renderCarot(t),className:"carot-container"},o.a.createElement(w.a,{size:"big",name:"caret up"})))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.closeOnEscape,r=t.closeOnDimmerClick;return o.a.createElement("div",{className:"edit-modal"},o.a.createElement(w.a,{size:"large",onClick:this.closeConfigShow(!1,!0),name:"edit"}),o.a.createElement(F.a,{open:a,closeOnEscape:n,closeOnDimmerClick:r,onClose:this.close},o.a.createElement(F.a.Header,null,"Edit Palette"),o.a.createElement(F.a.Content,null,o.a.createElement(z.a,{className:"savepalette-modal-input",label:"Title",value:this.state.title,onChange:function(t){return e.handleInput(t)},placeholder:"Edit Palette Name..."}),o.a.createElement("div",{className:"colors-render"},this.renderOneColorSet(this.props.data,this.props.colorPosition)),o.a.createElement(U.a,{stackable:!0,columns:2},o.a.createElement(U.a.Column,{width:10},o.a.createElement(ue.a,null,o.a.createElement(Z.ChromePicker,null))),o.a.createElement(U.a.Column,{width:6},o.a.createElement(ue.a,null,o.a.createElement($,null))))),o.a.createElement(F.a.Actions,null,o.a.createElement(H.a,{onClick:this.cancel},"Cancel"),o.a.createElement(H.a,{onClick:this.handleConfirm,color:"blue"},"Confirm"))))}}]),t}(n.Component),me=Object(c.b)(function(e){return console.log(e),{data:e.myPalettes.Data,position:e.colorInfo.position}},{updateColorPalette:function(e,t){return function(a){g.a.put("/api/colors/".concat(e),t).then(function(e){return a({type:"UPDATE_COLORS",payload:t})}).catch(function(e){return console.log(e)})}},sendPositionInfo:R,clearPosition:P})(pe),he=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getColors()}},{key:"componentDidUpdate",value:function(e){e.updateColor!==this.props.updateColor&&(console.log(this.props.updateColor),this.props.getColors(),this.props.clearUpdateInStore())}},{key:"renderOneColorSet",value:function(e){return e.map(function(e){return o.a.createElement("div",{className:"color-square-container",key:e.hexColor},o.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}))})}},{key:"renderPalettes",value:function(){var e=this;if(void 0!==this.props.myPalettes)return this.props.myPalettes.map(function(t,a){return o.a.createElement(U.a.Column,{key:t._id,mobile:16,computer:8},o.a.createElement("div",{className:"palette-container"},o.a.createElement("p",null,t.title,o.a.createElement(se,{title:t.title,objectID:t._id}),o.a.createElement(me,{title:t.title,objectID:t._id,colorPosition:a})),e.renderOneColorSet(t.colors)))})}},{key:"render",value:function(){return o.a.createElement(re.a,null,o.a.createElement(O.a,{as:"h1",className:"header"},"My Color Palettes"),o.a.createElement(U.a,null,this.renderPalettes()))}}]),t}(n.Component),de=Object(c.b)(function(e){return{myPalettes:e.myPalettes.Data,addColor:e.myPalettes.AddColor,updateColor:e.myPalettes.UpdateColor}},{getColors:function(){return function(e){g.a.get("/api/colors").then(function(t){return e({type:"GET_COLORS",payload:t.data})}).catch(function(e){return console.log(e)})}},clearUpdateInStore:function(){return function(e){e({type:"CLEAR_UPDATE",update:""})}}})(he),fe=function(){return o.a.createElement(O.a,{as:"h1",className:"header"},"About this App")},Ce=(a(549),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement(b,null),o.a.createElement(C.a,{path:"/",exact:!0,component:le}),o.a.createElement(C.a,{path:"/MyPallettes",component:de}),o.a.createElement(C.a,{path:"/About",component:fe})))}}]),t}(n.Component)),Ee=a(25),be={colors:[],status:""},Oe={url:"https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",exampleImages:["https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1429497612798-1f189166a08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]},ye={hexColor:"",R:"",G:"",B:"",alpha:"",position:0,selectedColor:""},ve={Data:[],AddColor:"",DeleteColor:"",UpdateColor:""},ge=Object(i.c)({colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE":return Object(Ee.a)({},e,{colors:t.payload,status:"recieved"});case"CLEAR_RECIEVED":return Object(Ee.a)({},e,{status:t.status});case"CLEAR_COLORS":return Object(Ee.a)({},e,{colors:t.colors});case"UPDATE_HEX_COLOR":return Object(Ee.a)({},e,{colors:function(e,t){return e.map(function(e,a){return a!==t.index?e:Object(Ee.a)({},e,t.item)})}(e.colors,t.newColorSet)});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE_ERROR":return t.error;default:return e}},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_IMAGE":return Object(Ee.a)({},e,{url:t.url});case"RANDOM_IMAGE":return Object(Ee.a)({},e,{url:t.url,random_url:t.url});case"ADD_URL":return Object(Ee.a)({},e,{exampleImages:e.exampleImages.concat(t.url)});default:return e}},colorInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_COLOR_INFO":return Object(Ee.a)({},e,{hexColor:t.hexColor,R:t.R,G:t.G,B:t.B,alpha:t.alpha});case"SEND_POSITION_INFO":case"CLEAR_POSITION_INFO":return Object(Ee.a)({},e,{position:t.position});case"SEND_ALPHA_INFO":return Object(Ee.a)({},e,{alpha:t.alpha});case"SELECTED_COLOR":return Object(Ee.a)({},e,{selectedColor:t.selectedColor});default:return e}},myPalettes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLORS":return Object(Ee.a)({},e,{Data:t.payload});case"ADD_COLORS":return Object(Ee.a)({},e,{Data:e.Data.concat(t.payload),AddColor:'"'.concat(t.payload.title,'" Created ').concat(t.payload._id)});case"UPDATE_COLORS":return Object(Ee.a)({},e,{UpdateColor:"".concat(t.payload," is the new update")});case"CLEAR_UPDATE":return Object(Ee.a)({},e,{UpdateColor:""});case"DELETE_COLORS":return Object(Ee.a)({},e,{Data:e.Data.filter(function(e){return e._id!==t.payload}),DeleteColor:"".concat(t.payload," was Deleted")});default:return e}}}),ke=Object(i.d)(ge,Object(i.a)(s.a));l.a.render(o.a.createElement(c.a,{store:ke},o.a.createElement(Ce,null)),document.getElementById("root"))}},[[272,1,2]]]);
//# sourceMappingURL=main.c27bf266.chunk.js.map