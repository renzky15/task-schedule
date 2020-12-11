(this["webpackJsonptask-schedule"]=this["webpackJsonptask-schedule"]||[]).push([[0],{163:function(t,e,n){},165:function(t,e,n){},245:function(t,e){},302:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n(0),r=n.n(s),c=n(21),o=n.n(c),i=(n(163),n(164),n(165),n(29)),u=n(77),l=n(76),d=[],p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TASK":return[].concat(Object(l.a)(t),[e.task_payload]);case"FETCH_TASKS":return Object(l.a)(e.task_payload);case"REMOVE_TASK":return t.filter((function(t){return t.id!==e.id}));case"EDIT_TASK":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),e.updates):t}));default:return t}},h=n(154),b=n(59),j=n(57),f=n(58),k=n(61),m=n(60),v=n(156),g=n(4),O=n.n(g),x=n(157),_=(n(236),n(237),function(t){Object(k.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(j.a)(this,n),(a=e.call(this,t)).onDescriptionChange=function(t){var e=t.target.value;a.setState((function(){return{task_msg:e}}))},a.onDateChange=function(t){t&&a.setState((function(){return{task_date:t}}))},a.onTimeChange=function(t){var e=t.target.value;a.setState((function(){return{task_time:e}}))},a.onAssignedUser=function(t){var e=t.target.value;a.setState((function(){return{assigned_user:e}}))},a.onFocusChange=function(t){var e=t.focused;a.setState((function(){return{calendarFocused:e}}))},a.onSubmit=function(t){t.preventDefault(),a.state.task_date&&a.state.task_time?(a.setState((function(){return{error:""}})),console.log("Form submitted!"),a.props.onSubmit({task_date:a.state.task_date.format("YYYY-MM-DD"),task_msg:a.state.task_msg,task_time:parseInt(a.state.task_time),assigned_user:a.state.assigned_user}),a.props.toggleClosed({toggleForm:!1}),a.setState((function(){return{}}))):a.setState((function(){return{error:"Please provide date and time."}}))},a.onCancel=function(){a.props.toggleClosed({toggleForm:!1}),a.setState((function(){return{}}))},a.state={id:t.task?t.task.id:x(),task_msg:t.task?t.task.task_msg:"",task_date:t.task?O()(t.task.task_date):O()(),task_time:t.task?t.task.task_time:0,calendarFocused:!1},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("currentUser"));this.setState({currentUser:t,assigned_user:t.result.id})}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"task-form-container",children:[this.state.error&&Object(a.jsx)("p",{style:{color:"red"},children:this.state.error}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"desc-container",children:[Object(a.jsx)("label",{children:"Task Description"}),Object(a.jsx)("input",{type:"test",name:"task_msg",placeholder:"Description",autoFocus:!0,onChange:this.onDescriptionChange,value:this.state.task_msg})]}),Object(a.jsxs)("div",{className:"date-time-container",children:[Object(a.jsxs)("div",{className:"date-container",children:[Object(a.jsx)("label",{children:"Date"}),Object(a.jsx)(v.SingleDatePicker,{date:this.state.task_date,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1})]}),Object(a.jsxs)("div",{className:"time-container",children:[Object(a.jsx)("label",{children:"Time"}),Object(a.jsx)("input",{type:"number",name:"task_time",placeholder:"Time",onChange:this.onTimeChange,value:this.state.task_time})]})]}),Object(a.jsxs)("div",{className:"assign-user-container",children:[Object(a.jsx)("label",{children:"Assign User"}),Object(a.jsx)("input",{type:"text",name:"assigned_user",placeholder:"User",onChange:this.onAssignedUser,value:this.state.assigned_user,disabled:!0})]}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{id:"cancel-btn",onClick:this.onCancel,children:"Cancel"}),Object(a.jsx)("button",{id:"save-btn",children:"Save"})]})]})]})})}}]),n}(s.Component)),S=n(10),y=n.n(S),T=n(24),C=n(19),N=n.n(C),D=JSON.parse(localStorage.getItem("login")),E="https://stage.api.sloovi.com";N.a.interceptors.request.use((function(t){return t.headers.authorization="Bearer ".concat(D.token),t}),(function(t){return Promise.reject(t)}));var w=n(304),F=n(305),A=function(t){Object(k.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(j.a)(this,n),(a=e.call(this,t)).handleShowForm=function(){a.setState({toggleForm:!0})},a.handleEdit=function(t){var e=a.props.task_payload.find((function(e){return e.id===t}));a.setState({selectedTask:e,toggleForm:!0})},a.handleRemove=function(t){a.props.deleteTask(t)},a.state={toggleForm:!1,selectedTask:{}},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTask()}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsxs)("div",{className:"first-container",children:[Object(a.jsxs)("div",{className:"task-count",children:[Object(a.jsx)("h4",{children:"Tasks"})," ",this.props.task_payload.length]}),Object(a.jsx)("div",{className:"task-button",children:Object(a.jsx)("button",{onClick:this.handleShowForm,children:"Add Task"})})]}),this.state.toggleForm?Object(a.jsx)(_,{task:this.state.selectedTask,toggleClosed:function(e){return t.setState(e)},onSubmit:function(e){0===Object.keys(t.state.selectedTask).length?t.props.postTask(e):t.props.putTask(t.state.selectedTask.id,e)}}):Object(a.jsx)("div",{}),Object(a.jsx)("div",{className:"task-lists-container",children:this.props.task_payload.map((function(e,n){return Object(a.jsxs)("div",{className:"task-lists",children:[Object(a.jsxs)("div",{className:"list",children:[Object(a.jsx)("label",{children:e.task_msg}),Object(a.jsx)("label",{id:"date-label",children:e.task_date})]}),Object(a.jsxs)("div",{className:"btn-list",children:[Object(a.jsx)("button",{className:"list-edit-btn",onClick:function(){return t.handleEdit(e.id)},children:Object(a.jsx)(w.a,{})}),Object(a.jsx)("button",{className:"list-delete-btn",onClick:function(){return t.handleRemove(e.id)},children:Object(a.jsx)(F.a,{})})]})]},n)}))})]})})}}]),n}(s.Component);var I=Object(b.b)((function(t){return{task_payload:t.task_payload}}),(function(t){return{fetchTask:function(){t(function(){var t=Object(T.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("".concat(E,"/task/lead_59a79b6cb211449f9698bad058a593e4"));case 3:n=t.sent,e({type:"FETCH_TASKS",task_payload:n.data.results}),console.log(n.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error.");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())},postTask:function(e){var n;t((n=e,function(){var t=Object(T.a)(y.a.mark((function t(e){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("".concat(E,"/task/lead_59a79b6cb211449f9698bad058a593e4"),n);case 3:a=t.sent,e({type:"ADD_TASK",task_payload:n}),console.log(a.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error.");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},putTask:function(e,n){t(function(t,e){return function(){var n=Object(T.a)(y.a.mark((function n(a){var s;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.a.put("".concat(E,"/task/lead_59a79b6cb211449f9698bad058a593e4/").concat(t),e);case 3:s=n.sent,a({type:"EDIT_TASK",updates:e,id:t}),console.log(s.data.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Error.");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}(e,n))},deleteTask:function(e){t(function(t){return function(){var e=Object(T.a)(y.a.mark((function e(n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("".concat(E,"/task/lead_59a79b6cb211449f9698bad058a593e4/").concat(t));case 3:a=e.sent,n({type:"REMOVE_TASK",id:t}),console.log(a.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(A),M=n(75),U={email:"spicebluetest1@gmail.com",password:"12345678"};function K(){return(K=Object(T.a)(y.a.mark((function t(){var e,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={Accept:"application/json","Content-Type":"application/json"},t.prev=1,t.next=4,N.a.post("https://stage.api.sloovi.com/login",U,e);case 4:n=t.sent,localStorage.setItem("login",JSON.stringify({login:!0,token:n.data.results.token})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Post not created.");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}var J="https://stage.api.sloovi.com",P=JSON.parse(localStorage.getItem("login"));function R(){return(R=Object(T.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N.a.interceptors.request.use((function(t){return t.headers.authorization="Bearer ".concat(P.token),t}),(function(t){return Promise.reject(t)})),t.prev=1,t.next=4,N.a.get("".concat(J,"/user"));case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log("Error.");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}var Y=r.a.createContext(),B=function(t){var e=t.children,n=Object(s.useState)(null),r=Object(M.a)(n,2),c=r[0],o=r[1],i=Object(s.useState)(!0),u=Object(M.a)(i,2),l=u[0],d=u[1];return Object(s.useEffect)((function(){(function(){return K.apply(this,arguments)})()&&function(){return R.apply(this,arguments)}().then((function(t){o(t),d(!1),localStorage.setItem("currentUser",JSON.stringify({result:t}))}))}),[]),l?Object(a.jsx)("div",{className:"loader"}):Object(a.jsx)(Y.Provider,{value:{currentUser:c},children:e})},V=function(){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;return Object(i.e)(Object(i.c)({task_payload:p}),t(Object(i.a)(h.a)))}();var q=function(){return Object(a.jsx)(b.a,{store:V,children:Object(a.jsx)(B,{children:Object(a.jsx)(I,{})})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[302,1,2]]]);
//# sourceMappingURL=main.250ef1f9.chunk.js.map