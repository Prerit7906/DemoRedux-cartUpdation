(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(t,e,i){t.exports={item:"ProductItem_item__3Hx83",price:"ProductItem_price__a8HKR",actions:"ProductItem_actions__2xODA"}},13:function(t,e,i){t.exports={notification:"Notification_notification__2BdR3",error:"Notification_error__bnFaf",success:"Notification_success__2F5BR"}},18:function(t,e,i){t.exports={button:"CartButton_button__1-ITM",badge:"CartButton_badge__3mWWg"}},22:function(t,e,i){t.exports={card:"Card_card__1D_w8"}},23:function(t,e,i){t.exports={cart:"Cart_cart__3xhgu"}},24:function(t,e,i){t.exports={header:"MainHeader_header__2Wf7D"}},25:function(t,e,i){t.exports={products:"Products_products__WUZ5c"}},37:function(t,e,i){},39:function(t,e,i){"use strict";i.r(e);var c=i(9),n=i.n(c),r=i(7),a=Object(r.b)({name:"cart",initialState:{items:[],totalQuantity:0,isposting:!1},reducers:{replaceCart:function(t,e){t.items=e.payload.items,t.totalQuantity=e.payload.totalQuantity},add:function(t,e){var i=e.payload,c=t.items.find((function(t){return t.id===i.id}));c?(c.quantity++,c.totalPrice=c.totalPrice+i.price):t.items.push({id:i.id,title:i.title,price:i.price,quantity:1,totalPrice:i.price}),t.totalQuantity++,t.isposting=!0},remove:function(t,e){var i=e.payload,c=t.items.find((function(t){return t.id===i}));1===c.quantity?t.items=t.items.filter((function(t){return t.id!==i})):(c.quantity--,c.totalPrice=c.totalPrice-c.price),t.totalQuantity--,t.isposting=!0}}}),s=a.actions,o=a,u=Object(r.b)({name:"toggle",initialState:{isClicked:!1,notification:null},reducers:{click:function(t){t.isClicked=!t.isClicked},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}},hideNotification:function(t){t.notification=null}}}),d=u.actions,l=u,j=Object(r.a)({reducer:{cart:o.reducer,toggle:l.reducer}}),b=i(3),f=(i(37),i(1)),m=i(22),p=i.n(m),h=i(0),x=function(t){return Object(h.jsx)("section",{className:"".concat(p.a.card," ").concat(t.className?t.className:""),children:t.children})},O=i(23),_=i.n(O),g=i(6),y=i.n(g),C=function(t){var e=t.item,i=e.id,c=e.title,n=e.quantity,r=e.total,a=e.price,o=Object(b.b)();return Object(h.jsxs)("li",{className:y.a.item,children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("div",{className:y.a.price,children:["$",r.toFixed(2)," ",Object(h.jsxs)("span",{className:y.a.itemprice,children:["($",a.toFixed(2),"/item)"]})]})]}),Object(h.jsxs)("div",{className:y.a.details,children:[Object(h.jsxs)("div",{className:y.a.quantity,children:["x ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("div",{className:y.a.actions,children:[Object(h.jsx)("button",{onClick:function(){o(s.remove(i))},children:"-"}),Object(h.jsx)("button",{onClick:function(){o(s.add({id:i,title:c,price:a}))},children:"+"})]})]})]})},N=function(t){var e=Object(b.c)((function(t){return t.cart.items})),i=Object(b.c)((function(t){return t.cart.totalQuantity})),c=e.map((function(t){return Object(h.jsx)(C,{item:{id:t.id,title:t.title,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}));return Object(h.jsxs)(x,{className:_.a.cart,children:[Object(h.jsx)("h2",{children:"Your Shopping Cart"}),!i&&Object(h.jsx)("h3",{children:"No item found"}),i>0&&Object(h.jsx)("ul",{children:c})]})},v=i(18),k=i.n(v),w=function(t){var e=Object(b.c)((function(t){return t.cart.totalQuantity})),i=Object(b.b)();return Object(h.jsxs)("button",{onClick:function(){i(d.click())},className:k.a.button,children:[Object(h.jsx)("span",{children:"My Cart"}),Object(h.jsx)("span",{className:k.a.badge,children:e})]})},I=i(24),P=i.n(I),q=function(t){return Object(h.jsxs)("header",{className:P.a.header,children:[Object(h.jsx)("h1",{children:"ReduxCart"}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)(w,{})})})})]})},T=function(t){return Object(h.jsxs)(f.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)("main",{children:t.children})]})},Q=i(12),F=i.n(Q),S=function(t){var e=t.id,i=t.title,c=t.price,n=t.description,r=Object(b.b)();return Object(h.jsx)("li",{className:F.a.item,children:Object(h.jsxs)(x,{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h3",{children:i}),Object(h.jsxs)("div",{className:F.a.price,children:["$",c.toFixed(2)]})]}),Object(h.jsx)("p",{children:n}),Object(h.jsx)("div",{className:F.a.actions,children:Object(h.jsx)("button",{onClick:function(){r(s.add({id:e,title:i,price:c}))},children:"Add to Cart"})})]})})},B=i(25),E=i.n(B),R=[{id:"m1",title:"Table",price:6,description:"This is a first product - amazing!"},{id:"m2",title:"Chair",price:7,description:"This is a second product - amazing!"},{id:"m3",title:"Bed",price:11,description:"This is a third product - amazing!"},{id:"m4",title:"Fan",price:8,description:"This is a fourth product - amazing!"}],z=function(t){var e=R.map((function(t){return Object(h.jsx)(S,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}));return Object(h.jsxs)("section",{className:E.a.products,children:[Object(h.jsx)("h2",{children:"Buy your favorite products"}),Object(h.jsx)("ul",{children:e})]})},H=i(8),W=i(19),D=i(13),J=i.n(D),M=function(t){var e="";"error"===t.status&&(e=J.a.error),"success"===t.status&&(e=J.a.success);var i="".concat(J.a.notification," ").concat(e);return Object(h.jsxs)("section",{className:i,children:[Object(h.jsx)("h2",{children:t.title}),Object(h.jsx)("p",{children:t.message})]})},Z=!0;var $=function(){var t=Object(b.b)(),e=Object(b.c)((function(t){return t.toggle.isClicked})),i=Object(b.c)((function(t){return t.cart})),c=Object(b.c)((function(t){return t.toggle.notification}));return Object(f.useEffect)((function(){t((function(t){var e=function(){var e=Object(W.a)(Object(H.a)().mark((function e(){var i,c;return Object(H.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mybackend-bf49e-default-rtdb.firebaseio.com/cart.json");case 2:if((i=e.sent).ok){e.next=5;break}throw new Error("Could not fetch items !!");case 5:return e.next=7,i.json();case 7:c=e.sent,t(s.replaceCart({items:c.items||[],totalQuantity:c.totalQuantity}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){t(d.showNotification({status:"error",title:"Error! ",message:"Cart items could not be fetched!!"}))}))})),setTimeout((function(){t(d.hideNotification())}),3e3)}),[t]),Object(f.useEffect)((function(){Z?Z=!1:(i.isposting&&t(function(t){return function(e){e(d.showNotification({status:"pending",title:"Sending...",message:"Sending cart data"}));var i=function(){var i=Object(W.a)(Object(H.a)().mark((function i(){return Object(H.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,fetch("https://mybackend-bf49e-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify(t)});case 2:if(i.sent.ok){i.next=5;break}throw new Error("Could not upload!!");case 5:e(d.showNotification({status:"success",title:"Success! ",message:"Cart items updated"}));case 6:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();i().catch((function(t){e(d.showNotification({status:"error",title:"Error! ",message:"Cart items could not be sent!!"}))}))}}(i)),setTimeout((function(){t(d.hideNotification())}),3e3))}),[i,t]),Object(h.jsxs)(h.Fragment,{children:[c&&Object(h.jsx)(M,{status:c.status,title:c.title,message:c.message}),Object(h.jsxs)(T,{children:[e&&Object(h.jsx)(N,{}),Object(h.jsx)(z,{})]})]})};n.a.render(Object(h.jsx)(b.a,{store:j,children:Object(h.jsx)($,{})}),document.getElementById("root"))},6:function(t,e,i){t.exports={item:"CartItem_item__3mHR6",details:"CartItem_details__12oCV",quantity:"CartItem_quantity__2TCjc",price:"CartItem_price__3ZScv",itemprice:"CartItem_itemprice__3pI5Z",actions:"CartItem_actions__2Xwuf"}}},[[39,1,2]]]);
//# sourceMappingURL=main.964e157e.chunk.js.map