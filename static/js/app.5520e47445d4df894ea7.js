webpackJsonp([1],{"5qKi":function(e,t,a){e.exports=a.p+"static/img/foto-min.260a876.jpg"},"7uec":function(e,t,a){e.exports=a.p+"static/img/home.be70d7d.jpg"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW");$(document).ready(function(){$(".dropdown-button").dropdown(),$(".button-collapse").sideNav()});var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"navbar"}},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("nav",[i("div",{staticClass:"nav-wrapper teal lighten-2"},[i("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[i("img",{staticClass:"ajustes",attrs:{src:a("cztD"),alt:"Logo"}})]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown1"}},[t("li",[t("a",{attrs:{href:"#!"}},[this._v("one")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#!"}},[this._v("two")])]),this._v(" "),t("li",{staticClass:"divider"}),this._v(" "),t("li",[t("a",{attrs:{href:"#!"}},[this._v("three")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown2"}},[t("li",[t("a",{attrs:{href:"#!"}},[this._v("one")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#!"}},[this._v("two")])]),this._v(" "),t("li",{staticClass:"divider"}),this._v(" "),t("li",[t("a",{attrs:{href:"#!"}},[this._v("three")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"right hide-on-med-and-down"},[t("li",[t("a",{attrs:{href:"sass.html"}},[this._v("Sass")])]),this._v(" "),t("li",[t("a",{attrs:{href:"badges.html"}},[this._v("Components")])]),this._v(" "),t("li",[t("a",{staticClass:"dropdown-button",attrs:{href:"#!","data-activates":"dropdown1"}},[this._v("Dropdown "),t("i",{staticClass:"fa fa-caret-down",attrs:{"aria-hidden":"true"}})])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"side-nav",attrs:{id:"slide-out"}},[i("li",[i("div",{staticClass:"user-view"},[i("div",{staticClass:"background"},[i("img",{attrs:{src:a("7uec")}})]),e._v(" "),i("a",{attrs:{href:"#!user"}},[i("img",{staticClass:"circle",attrs:{src:a("5qKi")}})]),e._v(" "),i("a",{attrs:{href:"#!name"}},[i("span",{staticClass:"white-text name"},[e._v("John Doe")])]),e._v(" "),i("a",{attrs:{href:"#!email"}},[i("span",{staticClass:"white-text email"},[e._v("jdandturk@gmail.com")])])])]),e._v(" "),i("li",[i("a",{attrs:{href:"sass.html"}},[e._v("Sass")])]),e._v(" "),i("li",[i("a",{attrs:{href:"badges.html"}},[e._v("Components")])]),e._v(" "),i("li",[i("a",{staticClass:"dropdown-button",attrs:{href:"#!","data-activates":"dropdown2"}},[e._v("Jorge R "),i("i",{staticClass:"fa fa-caret-down",attrs:{"aria-hidden":"true"}})])]),e._v(" "),i("li",[i("div",{staticClass:"divider"})]),e._v(" "),i("li",[i("a",{staticClass:"subheader"},[e._v("Subheader")])]),e._v(" "),i("li",[i("a",{staticClass:"waves-effect",attrs:{href:"#!"}},[e._v("Third Link With Waves")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"slide-out"}},[t("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])}]};var o={name:"app",components:{Navbar:a("VU/8")({},s,!1,function(e){a("PON8")},null,null).exports}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},r=a("VU/8")(o,n,!1,null,null,null).exports,l=a("/ocq"),d=a("Sazm"),p=a.n(d),c=(a("3VHS"),p.a.initializeApp({apiKey:"AIzaSyB0jc5vOYTViH3ks2GM8aLe2VNkLOCIUAg",authDomain:"vue-empleados.firebaseapp.com",databaseURL:"https://vue-empleados.firebaseio.com",projectId:"vue-empleados",storageBucket:"vue-empleados.appspot.com",messagingSenderId:"706586606363"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employes").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employe_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("h3",[e._v("Dashboard")]),e._v(" "),a("table",{staticClass:"highlight responsive-table bordered centered"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("tbody",e._l(e.employees,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.employee_id))]),e._v(" "),a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.dept))]),e._v(" "),a("td",[a("router-link",{attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye small pink-text",attrs:{"aria-hidden":"true"}})])],1)])}))]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large teal",attrs:{to:"/nuevo"}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("caption",[t("strong",[this._v("Lista de empleados")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("#")]),this._v(" "),t("th",[this._v("Nombre")]),this._v(" "),t("th",[this._v("Departamento")]),this._v(" "),t("th",[this._v("Mostrar detalles")])])])}]},v=a("VU/8")(m,u,!1,null,null,null).exports,_={name:"new-employe",data:function(){return{employee_id:"",name:"",dept:"",position:""}},methods:{createEmployee:function(){var e=this;c.collection("employes").add({employe_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/"),toastr.success("Creado correctamente")}).catch(function(e){console.log(e)})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employe"}},[a("h3",[e._v("Nuevo empleado")]),e._v(" "),a("div",{staticClass:"row "},[a("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.createEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"employee-id"}},[e._v("Id del empleado")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",id:"employee-id",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"employee-name"}},[e._v("Nombre")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"employee-name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"employee-dept"}},[e._v("Departamento")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",id:"employee-dept",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"employee-position"}},[e._v("Posición")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",id:"employee-position",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn teal",attrs:{type:"submit"}},[e._v("Crear")]),e._v(" "),a("router-link",{staticClass:"btn red",attrs:{to:"/"}},[e._v("Cancelar")])],1)])])},staticRenderFns:[]},f=a("VU/8")(_,h,!1,null,null,null).exports,y={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employes").where("employe_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employe_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employes").where("employe_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employe_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("¿Estás seguro de elminarlo?")&&(c.collection("employes").where("employe_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})}),toastr.info("Eliminado correctamente"))},editEmployee:function(){}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"view-employee"}},[t("h3",[this._v(this._s(this.name))]),this._v(" "),t("table",{staticClass:"highlight responsive-table bordered centered"},[this._m(0),this._v(" "),this._m(1),this._v(" "),t("tbody",[t("tr",[t("td",[this._v(this._s(this.employee_id))]),this._v(" "),t("td",[this._v(this._s(this.dept))]),this._v(" "),t("td",[this._v(this._s(this.position))]),this._v(" "),t("td",[t("button",{staticClass:"btn red",on:{click:this.deleteEmployee}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),this._v(" "),t("router-link",{staticClass:"btn green",attrs:{to:{name:"edit-employee",params:{employee_id:this.employee_id}}}},[t("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])],1)])])]),this._v(" "),t("br"),this._v(" "),t("router-link",{staticClass:"btn blue",attrs:{to:"/"}},[t("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}),this._v(" Atrás\n      ")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("caption",[t("strong",[this._v("Detalles")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("#ID del empleado")]),this._v(" "),t("th",[this._v("Departamento")]),this._v(" "),t("th",[this._v("Posición")]),this._v(" "),t("th",[this._v("Acciones")])])])}]},b=a("VU/8")(y,C,!1,null,null,null).exports,g={name:"edit-employee",data:function(){return{employee_id:"",name:"",dept:"",position:""}},beforeRouteEnter:function(e,t,a){c.collection("employes").where("employe_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employe_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employes").where("employe_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employe_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employes").where("employe_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employe_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}}),toastr.success("Actualizado correctamente")})})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Editar empleado: "),a("small",[e._v(e._s(e.name))])]),e._v(" "),a("div",{staticClass:"row "},[a("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[e._m(0),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",id:"employee-id",disabled:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(1),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"employee-name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(2),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",id:"employee-dept",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(3),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",id:"employee-position",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn teal",attrs:{type:"submit"}},[e._v("Actualizar")]),e._v(" "),a("router-link",{staticClass:"btn red",attrs:{to:"/"}},[e._v("Cancelar")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col s12"},[t("label",{attrs:{for:"employee-id"}},[this._v("Id del empleado")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col s12"},[t("label",{attrs:{for:"employee-name"}},[this._v("Nombre")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col s12"},[t("label",{attrs:{for:"employee-dept"}},[this._v("Departamento")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col s12"},[t("label",{attrs:{for:"employee-position"}},[this._v("Posición")])])}]},E=a("VU/8")(g,w,!1,null,null,null).exports;i.a.use(l.a);var x=new l.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/nuevo",name:"new-employee",component:f},{path:"/editar/:employee_id",name:"edit-employee",component:E},{path:"/:employee_id",name:"view-employee",component:b}],mode:"history"});i.a.config.productionTip=!1,new i.a({el:"#app",router:x,template:"<App/>",components:{App:r}})},PON8:function(e,t){},cztD:function(e,t,a){e.exports=a.p+"static/img/logo-bamg2.7cc35d2.png"}},["NHnr"]);
//# sourceMappingURL=app.5520e47445d4df894ea7.js.map