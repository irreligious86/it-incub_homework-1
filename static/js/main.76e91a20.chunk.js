(this["webpackJsonpit-incub_homework-1"]=this["webpackJsonpit-incub_homework-1"]||[]).push([[0],[,function(e,t,a){e.exports={hw2:"Affairs_hw2__3O0s7","mapped-affairs-box":"Affairs_mapped-affairs-box__2Vpsa",affair:"Affairs_affair__3vOlX",btn:"Affairs_btn__3kt04","btn-delete":"Affairs_btn-delete__2RhS0","btn-filter":"Affairs_btn-filter__37h8k"}},,function(e,t,a){e.exports={hw1:"Message_hw1__1IhdF",message:"Message_message__2xsgr","message-box":"Message_message-box__1eRuf",avatar:"Message_avatar__wK61N","message-title":"Message_message-title__3-0JV","message-text":"Message_message-text__Zk8rz","message-time":"Message_message-time__1oB4U"}},,,,function(e,t,a){e.exports={App:"App_App__3deMZ"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),n=a(6),r=a.n(n),c=(a(12),a(7)),o=a.n(c),l=a(3),f=a.n(l),m=a(0);var b=function(e){return Object(m.jsxs)("div",{className:f.a.message,children:[Object(m.jsx)("img",{className:f.a.avatar,src:e.avatar,alt:"avatar"}),Object(m.jsxs)("div",{className:f.a["message-box"],children:[Object(m.jsx)("h4",{className:f.a["message-title"],children:e.name}),Object(m.jsx)("p",{className:f.a["message-text"],children:e.message}),Object(m.jsx)("code",{className:f.a["message-time"],children:e.time})]})]})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",j="Some Name",h="some text",u="22:00";var _=function(){return Object(m.jsxs)("div",{className:"hw1",children:[Object(m.jsx)("hr",{}),"HW1",Object(m.jsx)(b,{avatar:d,name:j,message:h,time:u}),Object(m.jsx)("hr",{})]})},x=a(5),g=a(1),O=a.n(g);var p=function(e){return Object(m.jsxs)("div",{className:O.a.affair,children:[e.affair.name+" Priority: "+e.affair.priority,Object(m.jsx)("button",{className:O.a["btn-delete"],onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var v=function(e){var t=e.data.map((function(t){return Object(m.jsx)(p,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(m.jsxs)("div",{className:O.a["mapped-affairs-box"],children:[t,Object(m.jsx)("button",{className:"".concat(O.a.btn," ").concat(O.a["btn-filter"]),onClick:function(){e.setFilter("all")},children:"All"}),Object(m.jsx)("button",{className:"".concat(O.a.btn," ").concat(O.a["btn-filter"]),onClick:function(){e.setFilter("high")},children:"High"}),Object(m.jsx)("button",{className:"".concat(O.a.btn," ").concat(O.a["btn-filter"]),onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(m.jsx)("button",{className:"".concat(O.a.btn," ").concat(O.a["btn-filter"]),onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(s.useState)(w),t=Object(x.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)("all"),r=Object(x.a)(n,2),c=r[0],o=r[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,c);return Object(m.jsxs)("div",{className:"hw2",children:[Object(m.jsx)("hr",{}),"HW2",Object(m.jsx)(v,{data:l,setFilter:o,deleteAffairCallback:function(e){return i(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(m.jsx)("hr",{})]})};var N=function(){return Object(m.jsxs)("div",{className:o.a.App,children:[Object(m.jsx)("div",{children:"react homeworks:"}),Object(m.jsx)(_,{}),Object(m.jsx)(k,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.76e91a20.chunk.js.map