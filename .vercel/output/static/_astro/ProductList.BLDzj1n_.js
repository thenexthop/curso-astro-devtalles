import{r as m}from"./index.WFquGv8Z.js";var u={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function h(){if(c)return n;c=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function a(o,e,i){var l=null;if(i!==void 0&&(l=""+i),e.key!==void 0&&(l=""+e.key),"key"in e){i={};for(var d in e)d!=="key"&&(i[d]=e[d])}else i=e;return e=i.ref,{$$typeof:t,type:o,key:l,ref:e!==void 0?e:null,props:i}}return n.Fragment=s,n.jsx=a,n.jsxs=a,n}var x;function p(){return x||(x=1,u.exports=h()),u.exports}var r=p();const g=({product:t})=>{const s=t.product_image.map(e=>e.image&&e.image.startsWith("http")?e.image:`http://localhost:4321/images/products/${e.image}`),[a,o]=m.useState(s[0]);return r.jsx(r.Fragment,{children:r.jsx("a",{href:`/products/${t.slug}`,children:r.jsxs("div",{className:"flex flex-col justify-center items-center gap-2 border-2 border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-shadow",children:[r.jsx("img",{onMouseEnter:()=>o(s[1]??s[0]),onMouseLeave:()=>o(s[0]),src:a,alt:t.title||"product image",className:"w-full h-auto object-cover rounded-t-md"}),r.jsxs("div",{className:"flex flex-col justify-center gap-2 p-4",children:[r.jsx("h2",{className:"text-lg font-semibold",children:t.title}),r.jsxs("p",{className:"text-orange-800 font-semibold text-sm ml-auto",children:["$ ",String(t.price)]})]})]})})})},v=({products:t})=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center",children:t.map(s=>r.jsx(g,{product:s},s.id))})});export{v as ProductList};
