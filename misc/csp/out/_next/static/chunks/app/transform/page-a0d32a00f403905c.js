(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604,207,607],{6835:function(e,l,s){Promise.resolve().then(s.bind(s,241)),Promise.resolve().then(s.bind(s,7387)),Promise.resolve().then(s.bind(s,7806)),Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23))},7387:function(e,l,s){"use strict";s.d(l,{default:function(){return n}});var t=s(7437),a=s(6463);s(2265);let i=[{to:"/xpath",display:"XPath Evaluator",desc:"Some description or other"},{to:"/transform",display:"CCDA to SDA Transorms"},{to:"/xsl",display:"XSL Template Tester",desc:"Some description or other"}];var n=()=>{let e=(0,a.useRouter)(),l=(0,a.usePathname)();return(0,t.jsx)("div",{className:"w-2/12 h-screen bg-slate-400 relative flex flex-col items-center overflow-hidden pt-10",children:i&&i.map(s=>(0,t.jsx)("div",{className:"text-gray-900 w-full p-4 cursor-pointer hover:text-white border border-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2  border-l-0 border-r-0 border-t-0 ".concat(l===s.to?"bg-gray-200":""),onClick:()=>e.push(s.to),children:s.display},s.to))})}},7806:function(e,l,s){"use strict";var t=s(7437),a=s(2265),i=s(8472),n=s(7170),r=s(9191);s(892),l.default=e=>{let{options:l,url:s,labels:o,largeInput:c}=e,[u,d]=(0,a.useState)(""),[h,m]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),[f,p]=(0,a.useState)(!1),[g,v]=(0,a.useState)(!1),j=(0,a.useRef)(null),A=async()=>{let e=await i.Z.post(s,{CONTENT1:{TransformName:u},CONTENT2:m});console.log(e),b(e)},N=()=>{j.current.click()},w=async e=>{m(await e.text())},C=()=>{let e=new Blob([x],{type:"plain/text"});(0,n.saveAs)(e,"LEAD.txt")};return(0,t.jsx)("div",{className:"comp m-5",children:(0,t.jsxs)("div",{className:"m-5 ",children:[(0,t.jsxs)("div",{className:"m-5 comp-input flex justify-between bg-slate-400 rounded-md",children:[(0,t.jsx)("h2",{children:o.inputLabelOne}),c?(0,t.jsx)("textarea",{rows:3,className:"w-full h-full",value:u,onChange:e=>d(e.target.value)}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{className:"w-4/5 h-8",type:"text",name:"option",list:"options",onChange:e=>d(e.target.value)}),(0,t.jsx)("datalist",{id:"options",children:l&&l.map(e=>(0,t.jsx)("option",{value:e.value,children:e.desc},e.value))})]})]}),(0,t.jsxs)("div",{className:"m-5 flex flex-col justify-center w-64 h-4/6 bg-slate-400 comp-area rounded-md",children:[(0,t.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,t.jsx)("h2",{children:o.inputLabelTwo}),(0,t.jsx)("h2",{children:o.outputLabel})]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsxs)("div",{className:"big-col relative h-full",children:[(0,t.jsxs)("div",{className:"absolute right-3 top-3  h-full",children:[(0,t.jsx)("input",{type:"file",hidden:!0,ref:j,onChange:e=>w(e.target.files[0]),className:"bg-slate-600 z-40"}),(0,t.jsx)("button",{onClick:()=>N(),className:"bg-slate-200 z-40",children:"Upload"}),(0,t.jsx)("button",{onClick:()=>p(!f),className:"bg-slate-200 z-40",children:"Viewer"})]}),f?(0,t.jsx)(r.Z,{collapsible:!0,xml:h}):(0,t.jsx)("textarea",{rows:15,className:"w-full h-full",value:h,onChange:e=>m(e.target.value)})]}),(0,t.jsx)("div",{className:"col relative  h-full",children:(0,t.jsx)("div",{className:"absolute top-3 btn  h-full",children:(0,t.jsx)("button",{onClick:()=>A(),className:"bg-slate-200 h-8 w-20 z-50",children:"Transform"})})}),(0,t.jsxs)("div",{className:"big-col relative  h-full",children:[(0,t.jsxs)("div",{className:"absolute right-3 top-3  h-full",children:[(0,t.jsx)("button",{onClick:()=>C(),className:"bg-slate-200 z-40",children:"Download"}),(0,t.jsx)("button",{onClick:()=>v(!g),className:"bg-slate-200 z-40",children:"Viewer"})]}),g?(0,t.jsx)(r.Z,{collapsible:!0,xml:x}):(0,t.jsx)("textarea",{contentEditable:!1,className:"w-full h-full",value:x})]})]})]})]})})}},892:function(){},241:function(e,l,s){"use strict";s.r(l),l.default={src:"/_next/static/media/LEAD_logo.876fc1c4.png",height:6251,width:6251,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAjUlEQVR42mNABvNXz2Kct3oWEwMxYM32ZYwMMAADG3evkl+7fZk6jL91/1qwIjAxacGElIru6g2lnZVbe2Z3Vx8/v4edAQbW7ViuUNFdsyq/pTSnrKsqpqitfN3clTOtGWCgbkKDHlBQJ7IkVQCIRQtaS+XrJzTqwSRhjmHMbixiz2os4rJKDGJmIBYAALloMg73GOXEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[596,30,851,971,23,744],function(){return e(e.s=6835)}),_N_E=e.O()}]);