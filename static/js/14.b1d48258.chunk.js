(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{386:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"f",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s}),a.d(t,"g",function(){return u}),a.d(t,"c",function(){return d});var n=a(390),r=a.n(n);function i(e,t){if(!e)return null;var a=r()(e).format("YYYY-MM-DDTHH:mm:ss");return null!=t&&(a=r()(e).format(t)),a}function o(e,t){if(!e)return null;var a=r()(e).format("D/M/YYYY");return null!=t&&(a=r()(e).format(t)),a}function c(e,t){if(null==e||""===e)return"";var a="",n=e.indexOf("{"),r=e.indexOf("}");return n>-1&&n>-1&&n<r&&(a=function(e,t,a,n){return t>e.length-1?e:e.substr(0,t)+n+e.substr(a+1)}(e,n,r,t)),a}function l(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t}function s(e){var t=new Date(e+"z");return r.a.utc(t).local()}function u(e){return(e=e.toString().replace(/,/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,",")}function d(e){return e=e.toString().replace(/,/g,""),isNaN(parseInt(e))?0:parseInt(e)}},388:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i});var n=a(22),r={Text:"text",Number:"number",Money:"money",Password:"password",Select:"select",CheckBox:"checkbox",Radio:"radio",AutoComplete:"autocomplete",DateTime:"date",DateTimeUTC:"dateUTC",ReactSelect:"react-select",ReactSelectMultiple:"react-select-multiple",ReactSelectAsync:"react-select-async",DuplicateText:"DuplicateText",Email:"Email"},i=function e(t,a,r,i,o,c,l,s,u){Object(n.a)(this,e),this.Name=t,this.Type=a,this.Value=r,this.Required=i,this.IsReadOnly=o,this.IsDefaultField=c,this.Regex=l,this.SelectConfig=s||{},this.DuplicateConfig=u||{}}},389:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return c});var n=a(18),r=a(73),i=a(32);function o(e,t,a){return 400===e?(r.toastr.error(t,a(n.a.common.error400GetAPI)),!0):401===e?(r.toastr.error(t,a(n.a.common.error401GetAPI)),!0):403===e?(r.toastr.error(t,a(n.a.common.error403GetAPI)),!0):404===e&&(r.toastr.error(t,a(n.a.common.error404GetAPI)),!0)}function c(e){var t=i.a.ParamAdd;return e&&e.params&&e.params.id&&(t=e.params.id>0?parseInt(e.params.id):e.params.id),t}},393:function(e,t,a){"use strict";var n=a(2),r=a(4),i=a(22),o=a(23),c=a(26),l=a(24),s=a(108),u=a(25),d=a(1),m=a.n(d),f=a(18),p=a(5),h=a(399),b=a.n(h),g=a(400),y=a.n(g),v=a(386),N=a(141),T=a(388),O=a(389),C=a(32);function S(e){var t=e?"1px solid #9b9fa3":"1px solid #f86c6b",a=e?"1px solid #8ad4ee":"1px solid #f86c6b",n=e?"0 0 0 0.2rem rgba(32, 168, 216, 0.25)":"0 0 0 0.2rem rgba(248, 108, 107, 0.25)";return{control:function(e,i){return Object(r.a)({},e,{minHeight:"35px","&:hover":{},border:i.isFocused?a:t,boxShadow:i.isFocused?n:0})}}}function E(e,t){var a=e.find(function(e){return e.value===t});return a||null}var j=a(73),D=a(19),A=a(401);a.d(t,"a",function(){return k});var I=[],M=null,k=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).checkDuplicate=[],a.handleSubmitForm=function(e){if(e&&(e.preventDefault(),a.handleValidation())){var t=a.state.model,n=a.props.fields;n.filter(function(e){return e.Type===T.a.DateTimeUTC&&!e.IsDefaultField}).forEach(function(e){t[e.Name]=new Date(t[e.Name]).toISOString()}),n.filter(function(e){return e.Type===T.a.Money}).forEach(function(e){t[e.Name]=Object(v.c)(t[e.Name])}),n.filter(function(e){return e.Type===T.a.Text}).forEach(function(e){t[e.Name]=t[e.Name].trim()}),a.addOrEditAction(t)}},a.handleBackList=function(){var e=a.props.history;e&&e.goBack()},a.addOrEditAction=function(e){var t=a.props.match;Object(O.b)(t)===C.a.ParamAdd?a.props.addAction(e):a.props.editAction(e)},a.requestAction=function(e){var t=e.getByIdModel,a=e.addModel,n=e.editModel,r=e.checkDuplicateModel;return t&&t.isLoading?(M=C.a.GET_BY_ID,!0):a&&a.isLoading?(M=C.a.ADD,!0):n&&n.isLoading?(M=C.a.EDIT,!0):!(!r||!r.isLoading)&&(M=C.a.CHECK_DUPLICATE,!0)},a.responseAction=function(e){var t=e.t,n=e.keyFields,i=e.addModel,o=e.editModel,c=e.getByIdModel,l=e.fields;switch(M){case C.a.ADD:if(!i||!i.responseData||Object(O.a)(i.responseData.status,t(n.AddTitle),t))return;var s=i.responseData;s.Success?(j.toastr.success(t(n.AddTitle),t(f.a.common.addDataSuccess)),a.setState(Object(r.a)({},a.state,{model:Object(v.a)(a.state.initModel)}))):Object(N.e)(s.Message)?j.toastr.error(t(n.AddTitle),t(f.a.common.addDataFail)):j.toastr.error(t(n.AddTitle),s.Message);break;case C.a.EDIT:if(!o||!o.responseData||Object(O.a)(o.responseData.status,t(n.EditTitle),t))return;var u=o.responseData;o.responseData.Success?j.toastr.success(t(n.EditTitle),t(f.a.common.editDataSuccess)):Object(N.e)(u.Message)?j.toastr.error(t(n.EditTitle),t(f.a.common.editDataFail)):j.toastr.error(t(n.AddTitle),u.Message);break;case C.a.GET_BY_ID:if(!c||!c.responseData||Object(O.a)(c.responseData.status,t(n.GetByIdTitle),t))return;if(c.responseData.Success){var d=c.responseData.Data;if(d)l.filter(function(e){return e.Type===T.a.DateTimeUTC}).forEach(function(e){d[e.Name]&&(d[e.Name]=Object(v.d)(Object(v.b)(d[e.Name])))}),a.setState(Object(r.a)({},a.state,{model:Object(v.a)(d)}))}else j.toastr.error(t(n.GetByIdTitle),t(f.a.common.errorGetByIdAPI))}M=null},a.moneyOnBlur=function(e,t){var n=a.state.model,i=e.target?e.target.value:"";n[t]=Object(v.g)(i),a.setState(Object(r.a)({},a.state,{model:n}))};var o=e.fields.reduce(function(e,t){return Object(r.a)({},e,Object(n.a)({},t.Name,t.Value))},{});return a.state={errors:{},initModel:Object(v.a)(o),model:Object(v.a)(o)},a.handleChangeFields=a.handleChangeFields.bind(Object(s.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){I[0]&&I[0].focus();var e=this.props.match;if(Object(O.b)(e)!==C.a.ParamAdd){var t="?id="+Object(O.b)(e);this.props.getByIdAction(t)}}},{key:"handleValidation",value:function(){var e=this.props,t=e.t,a=e.keyFields,n=e.fields,r=this.state.model,i=!0,o={},c=!1;return n.map(function(e,n){return e.Required&&(e.Type===T.a.ReactSelect&&0===r[e.Name]||e.Type===T.a.ReactSelectMultiple&&0===r[e.Name].length||Object(N.e)(r[e.Name]))&&(i=!1,o[e.Name]=Object(v.e)(t(f.a.common.fieldCanNotEmptyErrorMsg),t(a[e.Name])),I[n]&&!c&&(c=!0,I[n].focus())),!0}),this.setState({errors:o}),i}},{key:"handleChangeFields",value:function(e,t){var a=this.props,n=a.t,i=a.fields,o=a.handleChangeFieldsCallBack,c=this.state,l=c.model,s=c.errors,u=Object(v.a)(l),d=i.find(function(e){return e.Name===t});if(e&&d){if((d.Type===T.a.ReactSelect||d.Type===T.a.ReactSelectAsync)&&e.value>=0)l[t]=e.value;else if(d.Type===T.a.ReactSelectMultiple)l[t]=e.map(function(e){return e.value});else if(d.Type===T.a.DateTime||d.Type===T.a.DateTimeUTC)l[t]=Object(v.d)(e);else if(e.target&&d.Type===T.a.CheckBox)l[t]=e.target.checked;else if(e.target&&d.Type===T.a.Number)l[t]=isNaN(parseInt(e.target.value))?0:parseInt(e.target.value);else if(e.target&&d.Type===T.a.Money){var m=e.target?e.target.value:"",p=m.replace(/,/g,""),h=/^\d+$/.test(p);if(""!==m&&!h)return;l[t]=m}else if(l[t]=e.target?e.target.value:"",d.Name===T.a.Email)if(Object(N.i)(l[t])){if(s[t]){var b=Object(v.e)(n(f.a.common.fieldPhoneNumberInvalidErrorMsg),n(f.a.user.Email));s[t]===b&&delete s[t]}}else s[t]=Object(v.e)(n(f.a.common.fieldPhoneNumberInvalidErrorMsg),n(f.a.user.Email));var g=Object(v.a)(l);o&&o(u,g),this.setState(Object(r.a)({},this.state,{model:l,errors:s}))}}},{key:"handleChangeDateTimePickers",value:function(e,t){var a=this.state.model;a[e]=Object(v.d)(t),this.setState(Object(r.a)({},this.state,{model:a}))}},{key:"componentWillReceiveProps",value:function(e){this.requestAction(e)||this.responseAction(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.t,n=t.keyFields,r=t.fields,i=t.match,o=t.renderCallback,c=this.state,l=c.model,s=c.errors;o&&o(l);var u=Object(O.b)(i)===C.a.ParamAdd,d=Object(O.b)(i)===C.a.ParamAdd?a(n.AddTitle):a(n.EditTitle);return m.a.createElement(p.r,{onSubmit:this.handleSubmitForm},m.a.createElement(p.f,null,m.a.createElement(p.j,null,m.a.createElement("strong",null,d)),m.a.createElement(p.g,null,m.a.createElement(p.J,null,r.map(function(t,r){var i=a(n[t.Name])?a(n[t.Name]):a(f.a.common[t.Name]);i+=t.Required?" <sup>*</sup>":"";var o=l[t.Name],c=!!s[t.Name]||null,d=!(t.IsDefaultField&&u);return m.a.createElement(m.a.Fragment,{key:r},d&&t.Type&&m.a.createElement(p.l,{md:"6"},m.a.createElement(p.t,null,m.a.createElement(p.y,{htmlFor:t.Name},y()(i)),(t.Type===T.a.Text||t.Type===T.a.Password||t.Type===T.a.Number)&&m.a.createElement(p.u,{id:t.Name,name:t.Name,type:t.Type,value:o,invalid:c,innerRef:function(e){e&&I.push(e)},onChange:function(a){return e.handleChangeFields(a,t.Name)},readOnly:t.IsReadOnly}),t.Type===T.a.Money&&m.a.createElement(p.u,{id:t.Name,name:t.Name,type:"text",value:o,invalid:c,innerRef:function(e){e&&I.push(e)},onChange:function(a){return e.handleChangeFields(a,t.Name)},readOnly:t.IsReadOnly,onBlur:function(a){return e.moneyOnBlur(a,t.Name)}}),t.Type===T.a.Select&&t.SelectConfig&&m.a.createElement(p.u,{id:t.Name,name:t.Name,type:t.Type,value:o,onChange:function(a){return e.handleChangeFields(a,t.Name)},invalid:c},t.SelectConfig.map(function(e){return m.a.createElement("option",{key:e.Id,value:e.Id},a(f.a.common[e.KeyName]))})),t.Type===T.a.DateTime&&m.a.createElement(b.a,{id:t.Name,name:t.Name,innerRef:function(e){e&&I.push(e)},value:new Date(o),onChange:function(a){return e.handleChangeFields(a,t.Name)},className:(t.IsReadOnly?"is-readonly":s[t.Name]?"is-invalid":"")+" form-control",readOnly:t.IsReadOnly,format:"d/M/y"}),t.Type===T.a.DateTimeUTC&&m.a.createElement(b.a,{id:t.Name,name:t.Name,innerRef:function(e){e&&I.push(e)},value:new Date(o),onChange:function(a){return e.handleChangeFields(a,t.Name)},className:(t.IsReadOnly?"is-readonly":s[t.Name]?"is-invalid":"")+" form-control",readOnly:t.IsReadOnly,format:"dd/MM/y h:mm a"}),t.Type===T.a.CheckBox&&m.a.createElement(D.n,{className:"mx-1 custom-checkbox",variant:"pill",color:"primary",outline:"alt",size:"sm",checked:l[t.Name],onChange:function(a){return e.handleChangeFields(a,t.Name)}}),t.Type===T.a.ReactSelect&&function(e,t,a){if(!e.SelectConfig)return!1;if("Status"===e.Name)e.SelectConfig.options=[],e.SelectConfig.options.push({value:0,label:a(f.a.common.InActive)},{value:1,label:a(f.a.common.Active)});else if(!e.SelectConfig.options)return!1;return!0}(t,0,a)&&m.a.createElement(A.a,{className:"basic-single",classNamePrefix:"select",styles:S(!s[t.Name]),options:t.SelectConfig.options,value:E(t.SelectConfig.options,l[t.Name]),onChange:function(a){return e.handleChangeFields(a,t.Name)},placeholder:a(f.a.common.pleaseSelect)+"..."}),t.Type===T.a.ReactSelectMultiple&&t.SelectConfig&&t.SelectConfig.options&&m.a.createElement(A.a,{isMulti:!0,defaultValue:t.SelectConfig.options.filter(function(e){return l[t.Name].indexOf(e.value)>-1}),styles:S(!s[t.Name]),options:t.SelectConfig.options,className:"basic-multi-select",classNamePrefix:"select",onChange:function(a){return e.handleChangeFields(a,t.Name)},placeholder:a(f.a.common.pleaseSelect)+"..."}),t.Type===T.a.ReactSelectAsync&&t.SelectConfig&&m.a.createElement(A.a,{className:"basic-single",classNamePrefix:"select",styles:S(!s[t.Name]),options:t.SelectConfig.options,onInputChange:function(a,n){return function(e,t,a,n){"input-blur"!==t.action&&"menu-close"!==t.action&&e.length>=1&&(n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout(function(){a(e)},300))}(a,n,t.SelectConfig.OnInputChangeCallback,e)},isLoading:t.SelectConfig.isLoading,filterOption:!1,onChange:function(a){return e.handleChangeFields(a,t.Name)},placeholder:a(f.a.common.pleaseSearch)+"..."}),m.a.createElement(p.s,{className:t.Type===T.a.ReactSelect||t.Type===T.a.ReactSelectMultiple||t.Type===T.a.ReactSelectAsync?"react-select":""},s[t.Name]))))}))),m.a.createElement(p.h,null,m.a.createElement(p.b,{type:"submit",size:"sm",color:"primary"},m.a.createElement("i",{className:"fa fa-save"})," ",a(f.a.common.btnSubmit))," ",m.a.createElement(p.b,{type:"reset",size:"sm",color:"danger",onClick:this.handleBackList},m.a.createElement("i",{className:"fa fa-ban"})," ",a(f.a.common.btnBackList)))))}}]),t}(d.Component)},639:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),i=a(26),o=a(24),c=a(25),l=a(1),s=a.n(l),u=a(96),d=a(63),m=a(18),f=a(107),p=a.n(f),h=a(38),b=a(141),g=a(393),y=a(388),v=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).requestAction=function(e){},a.responseAction=function(e){};var r=[new y.b("Code",y.a.Text,"",!0),new y.b("Name",y.a.Text,"",!0),new y.b("Address",y.a.Text,"",!0),new y.b("Distance",y.a.Number,"",!0),new y.b("Note",y.a.Text,"",!1)];return a.state={fields:r,currentAction:[]},Object(b.a)(),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.requestAction(e)||this.responseAction(e)}},{key:"render",value:function(){var e=this.props,t=e.t,a=e.addModel,n=e.editModel,r=e.getByIdModel,i=this.state.currentAction.length>0||a.isLoading||n.isLoading,o=r.isLoading,c="",l="";return i&&(c=t(o?m.a.common.loadingSpinner:m.a.common.processingSpinner),l=o?"":"overlayFullScreen"),s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(p.a,{active:i,spinner:!0,text:c,className:l},s.a.createElement(g.a,Object.assign({keyFields:m.a.company,tableName:"COMPANY",fields:this.state.fields},this.props))))}}]),t}(l.Component),N={getByIdAction:h.s,addAction:h.a,editAction:h.m};t.default=Object(d.b)()(Object(u.connect)(function(e){return{getByIdModel:e.getByIdCompanyReducer,addModel:e.addCompanyReducer,editModel:e.editCompanyReducer}},N)(v))}}]);
//# sourceMappingURL=14.b1d48258.chunk.js.map