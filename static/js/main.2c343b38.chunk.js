(this.webpackJsonpmylocations=this.webpackJsonpmylocations||[]).push([[0],{19:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(0);var c,a=n(12),s=n.n(a),i=n(11),r=n(2),l=n(7),d=n(18),o=n(15),j=n.n(o),b=n(20),u=n(10),h=Object(u.b)("users/fetchUsers",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),m=Object(u.c)({name:"users",initialState:{entities:[],loading:!1},reducers:{userAdded:function(e,t){e.entities.push(t.payload)},userUpdated:function(e,t){var n=t.payload,c=n.id,a=n.name,s=n.email,i=e.entities.find((function(e){return e.id===c}));i&&(i.name=a,i.email=s)},userDeleted:function(e,t){var n=t.payload.id;if(e.entities.find((function(e){return e.id===n})))return e.entities.filter((function(e){return e.id!==n}))}},extraReducers:(c={},Object(l.a)(c,h.pending,(function(e,t){e.loading=!0})),Object(l.a)(c,h.fulfilled,(function(e,t){e.loading=!1,e.entities=[].concat(Object(d.a)(e.entities),Object(d.a)(t.payload))})),Object(l.a)(c,h.rejected,(function(e,t){e.loading=!1})),c)}),_=m.actions,O=(_.userAdded,_.userUpdated,_.userDeleted),x=m.reducer,f=n(8),p=n(1);function N(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.users})).entities,n=Object(f.c)((function(e){return e.loading}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"head__contain",children:[Object(p.jsx)("h1",{children:"Welldone"}),Object(p.jsxs)("div",{className:"head__contain__btns",children:[Object(p.jsx)("div",{className:"two columns",children:Object(p.jsx)("button",{onClick:function(){return e(h())},className:"button-primary",children:"Load Users"})}),Object(p.jsx)("div",{className:"two columns",children:Object(p.jsx)(i.b,{to:"/add-user",children:Object(p.jsx)("button",{className:"button-primary",children:"Add User"})})})]})]}),Object(p.jsx)("div",{className:"table__contain",children:n?"Loading...":Object(p.jsxs)("table",{className:"table__contain__elem",children:[Object(p.jsx)("thead",{className:"table__contain__elem--head",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"table__contain__elem--th",children:"ID"}),Object(p.jsx)("th",{className:"table__contain__elem--th",children:"Name"}),Object(p.jsx)("th",{className:"table__contain__elem--th",children:"Email"}),Object(p.jsx)("th",{className:"table__contain__elem--th",children:"Actions"})]})}),Object(p.jsx)("tbody",{className:"table__contain__elem--body",children:t.length&&t.map((function(t,n){var c=t.id,a=t.name,s=t.email;return Object(p.jsxs)("tr",{className:"table__contain__elem--tr",children:[Object(p.jsx)("td",{"data-aria-label":"ID",className:"table__contain__elem--td",children:c}),Object(p.jsx)("td",{"data-aria-label":"Name",className:"table__contain__elem--td",children:a}),Object(p.jsx)("td",{"data-aria-label":"Email",className:"table__contain__elem--td email--cell",children:s}),Object(p.jsxs)("td",{"data-aria-label":"Actions",className:"table__contain__elem--td",children:[Object(p.jsx)("button",{className:"button-secondary",onClick:function(){return function(t){e(O({id:t}))}(c)},children:"Delete"}),Object(p.jsx)(i.b,{to:"/edit-user/".concat(c),children:Object(p.jsx)("button",{className:"button-secondary",children:"Edit"})})]})]},n)}))})]})})]})}n(19);function v(){return Object(p.jsx)(i.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{path:"/",children:Object(p.jsx)(N,{})}),Object(p.jsx)(r.a,{path:"/add-user",children:Object(p.jsx)("h2",{children:"Add User"})}),Object(p.jsx)(r.a,{path:"/edit-user",children:Object(p.jsx)("h2",{children:"Edit User"})})]})})})}var y=Object(u.a)({reducer:{users:x}});s.a.render(Object(p.jsx)(f.a,{store:y,children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2c343b38.chunk.js.map